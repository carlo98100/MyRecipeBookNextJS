"use client";

import foodApi from "../../api/foodApi";
import { UserContext } from "@/app/contexts/UserContext";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams, useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import styles from "./page.module.scss";
import ContentWrapper from "@/app/components/ContentWrapper/ContentWrapper";
import { IoMdArrowBack } from "react-icons/io";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import isAuth from "@/app/isAuth";

interface Product {
	idMeal: string;
	strMeal: string;
	strMealThumb: string;
	strInstructions: string;
}

function page() {
	const params: Params = useParams();
	const [meal, setMeal] = useState<Product>({ idMeal: "", strMeal: "", strMealThumb: "", strInstructions: "" });
	const [markedAsLiked, setMarkedAsLiked] = useState<boolean>(false);
	const { addProduct, removeProductById, signedInUser } = useContext(UserContext);
	const router: AppRouterInstance = useRouter();

	useEffect(() => {
		const fetchData = async () => {
			try {
				let mealsData = await foodApi.get(`/lookup.php?i=${params.id}`);
				setMeal(mealsData.data?.meals[0]);
			} catch (e) {
				console.log(e);
			}
		};

		fetchData();
		if (signedInUser.products.some((product: Product) => product.idMeal === params.id)) {
			setMarkedAsLiked(true);
		}
	}, []);

	const likeMeal = () => {
		addProduct(meal);
		setMarkedAsLiked(!markedAsLiked);
	};
	const unLikeMeal = () => {
		removeProductById(meal.idMeal);
		setMarkedAsLiked((prevState) => !prevState);
	};
	return (
		<div>
			<div
				className={styles.specificMealContainer}
				style={{ backgroundImage: `url(${meal.strMealThumb})`, backgroundSize: "cover", backgroundPosition: "center" }}
			>
				<ContentWrapper className={styles.mealHeaderContainer}>
					<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
						<IoMdArrowBack style={{ fontSize: "32px" }} onClick={() => router.back} />
						{markedAsLiked ? (
							<FaHeart style={{ fontSize: "32px" }} onClick={unLikeMeal} />
						) : (
							<FaRegHeart style={{ fontSize: "32px" }} onClick={likeMeal} />
						)}
					</div>
					<h1 className={styles.title}>{meal.strMeal}</h1>
				</ContentWrapper>
			</div>
			<div className={styles.mealDescriptionContainer}>
				<ContentWrapper className={styles.descriptionContentWrapper}>
					<h2 className={styles.subTitle}>Description</h2>
					<p className={styles.description}>
						ring a large saucepan of salted water to the boil. Add the pasta, stir once and cook for about 10 minutes or as directed on the packet.
						Meanwhile, wash the tomatoes and cut into quarters. Slice the olives. Wash the basil. Put the tomatoes into a salad bowl and tear the
						basil leaves over them. Add a tablespoon of olive oil and mix. When the pasta is ready, drain into a colander and run cold water over it
						to cool it quickly. Toss the pasta into the salad bowl with the tomatoes and basil. Add the sliced olives, drained mozzarella balls, and
						chunks of tuna. Mix well and let the salad rest for at least half an hour to allow the flavors to mingle. Sprinkle the pasta with a
						generous grind of black pepper and drizzle with the remaining olive oil just before serving.
					</p>
				</ContentWrapper>
			</div>
		</div>
	);
}

export default isAuth(page);
