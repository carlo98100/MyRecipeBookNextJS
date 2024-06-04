import React from "react";
import styles from "./LikedMealsList.module.scss";
interface Product {
	idMeal: string;
	strMeal: string;
	strMealThumb: string;
	strInstructions: string;
}

interface LikedMealsListProps {
	recipes: Product[];
}

function LikedMealsList(props: LikedMealsListProps) {
	return (
		<div className={styles.likedMealsContainer}>
			{props.recipes.map((meal: Product) => (
				<div className={styles.mealContainer} key={meal.idMeal} /*onClick={() => navigate(`/meal/${meal.idMeal}`)}*/>
					<img className={styles.image} src={meal.strMealThumb} alt="Pasta" />
					<div className={styles.contentContainer}>
						<h4 className={styles.title}>{meal.strMeal}</h4>
						<p className={styles.description}>{meal.strInstructions}</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default LikedMealsList;
