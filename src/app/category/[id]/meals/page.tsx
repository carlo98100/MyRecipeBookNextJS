"use client";

import foodApi from "@/app/api/foodApi";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import FoodCard from "@/app/components/FoodCard/FoodCard";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import ContentWrapper from "@/app/components/ContentWrapper/ContentWrapper";
import isAuth from "@/app/isAuth";
interface Product {
	idMeal: string;
	strMeal: string;
	strMealThumb: string;
	strInstructions: string;
}

function page() {
	const params: Params = useParams();
	const router: AppRouterInstance = useRouter();
	const [meals, setMeals] = useState<Product[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				let categoriesData = await foodApi.get(`/filter.php?c=${params.id}`);
				setMeals(categoriesData.data.meals);
			} catch (e) {
				console.log(e);
			}
		};

		fetchData();
	}, []);
	return (
		<ContentWrapper className={styles.contentWrapperContainer}>
			<h1 className={styles.title}>Recipes</h1>
			<div className={styles.recipesContainer}>
				{meals.map((meal: Product) => (
					<FoodCard key={meal.idMeal} title={meal.strMeal} img={meal.strMealThumb} onClick={() => router.push(`/meal/${meal.idMeal}`)} />
				))}
			</div>
		</ContentWrapper>
	);
}

export default isAuth(page);
