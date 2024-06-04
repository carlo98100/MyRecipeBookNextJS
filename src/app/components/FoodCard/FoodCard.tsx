import React from "react";
import styles from "./FoodCard.module.scss";

interface FoodCardProps {
	title: string;
	img: string;
	onClick: () => void;
}

function FoodCard(props: FoodCardProps) {
	return (
		<div
			className={styles.cardContainer}
			style={{ backgroundImage: `url(${props.img})`, backgroundSize: "cover", backgroundPosition: "center" }}
			onClick={props.onClick}
		>
			<h3 className={styles.title}>{props.title}</h3>
		</div>
	);
}

export default FoodCard;
