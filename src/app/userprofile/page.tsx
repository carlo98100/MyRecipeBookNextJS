"use client";

import React, { useContext } from "react";
import styles from "./page.module.scss";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import { UserContext } from "../contexts/UserContext";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoDocumentOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { MdKeyboardArrowRight } from "react-icons/md";
import LikedMealsList from "../components/LikedMealsList/LikedMealsList";
import Link from "next/link";
import ProfileImage from "../assets/default-user-img.png";
import Image from "next/image";
function page() {
	const { signedInUser } = useContext(UserContext);
	return (
		<div className={styles.userProfileContainer}>
			<div className={styles.userShortInfoContainer}>
				<ContentWrapper className={styles.contentWrapperContainer}>
					<div className={styles.userProfileContent}>
						<Image className={styles.profileImage} src={ProfileImage} alt="profileimage" />
						<h2 className={styles.userName}>{signedInUser.lastname}</h2>
					</div>
					<div className={styles.statisticsContainer}>
						<div className={styles.statisticItem}>
							<IoIosNotificationsOutline size={32} />
							<div className={styles.StatisticText}>
								<span className={styles.description}>Notifications</span>
								<span className={styles.value}>0</span>
							</div>
						</div>
						<div className={styles.statisticItem}>
							<IoDocumentOutline size={32} />
							<div className={styles.StatisticText}>
								<span className={styles.description}>Posts</span>
								<span className={styles.value}>0</span>
							</div>
						</div>
						<div className={styles.statisticItem}>
							<FaRegHeart size={32} />
							<div className={styles.StatisticText}>
								<span className={styles.description}>Likes</span>
								<span className={styles.value}>{signedInUser.products.length}</span>
							</div>
						</div>
						<div className={styles.statisticItem}>
							<LiaUserFriendsSolid size={32} />
							<div className={styles.StatisticText}>
								<span className={styles.description}>Connections</span>
								<span className={styles.value}>0</span>
							</div>
						</div>
					</div>
				</ContentWrapper>
			</div>
			<ContentWrapper>
				<div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
					<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: 12 }}>
						<h3 style={{ textTransform: "uppercase" }}>Liked meals</h3>{" "}
						{signedInUser.products.length > 0 ? (
							<a style={{ display: "flex", flexDirection: "row", alignItems: "center", color: "#569bec" }}>
								<span style={{ fontWeight: "bold" }}>View all</span>
								<MdKeyboardArrowRight size={24} />
							</a>
						) : null}
					</div>
					{signedInUser.products.length > 0 ? (
						<LikedMealsList recipes={signedInUser.products.slice(0, 5)} />
					) : (
						<div className={styles.emptyRecipesContainer}>
							<p className={styles.emptyMessage}>Looks like you haven't liked any recipes.</p>
							<Link className={styles.findRecipesBtn} href="/categories">
								Find recipes
							</Link>
						</div>
					)}
				</div>
			</ContentWrapper>
		</div>
	);
}

export default page;
