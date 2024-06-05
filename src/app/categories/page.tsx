"use client";
import React, { useEffect, useState } from "react";
import foodApi from "../api/FoodApi";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import styles from "./page.module.scss";
import FoodCard from "../components/FoodCard/FoodCard";
import { useRouter } from "next/navigation";
import isAuth from "../isAuth";

interface ProductCategory {
	idCategory: string;
	strCategory: string;
	strCategoryThumb: string;
}

function page() {
	const [categories, setCategories] = useState([]);
	// const navigate = useNavigate();
	const router = useRouter();
	useEffect(() => {
		const fetchData = async () => {
			try {
				let categoriesData = await foodApi.get(`/categories.php`);
				setCategories(categoriesData.data.categories);
			} catch (e) {
				console.log(e);
			}
		};

		fetchData();
	}, []);
	return (
		<ContentWrapper className={styles.contentWrapperContainer}>
			<h1 className={styles.pageTitle}>Categories</h1>
			<div className={styles.categoriesContainer}>
				{categories.map((category: ProductCategory) => (
					<FoodCard
						key={category.idCategory}
						title={category.strCategory}
						img={category.strCategoryThumb}
						onClick={() => router.push(`/category/${category.strCategory.toLowerCase()}/meals`)}
					/>
				))}
			</div>
		</ContentWrapper>
	);
}

export default isAuth(page);
