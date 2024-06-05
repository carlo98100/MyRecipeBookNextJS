"use client";

import React, { Suspense, useState } from "react";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import SignInForm from "./components/SignInForm/SignInForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import styles from "./page.module.scss";

function page() {
	const [signIn, setSignIn] = useState(true);
	return (
		<div className={styles.loginContainer}>
			<ContentWrapper className={styles.contentWrapperContainer}>
				<div className={styles.toggleContainer}>
					<span className={`${styles.toggleBtn} ${signIn ? styles.active : styles.notactive}`} onClick={() => setSignIn(true)}>
						Sign In
					</span>
					<span className={`${styles.toggleBtn} ${!signIn ? styles.active : styles.notactive}`} onClick={() => setSignIn(false)}>
						Sign Up
					</span>
				</div>
				<div className={styles.loginFormsContainer}>
					<div className={styles.toggleContainerTitles}>
						<h2 className={`${styles.title} ${signIn ? styles.active : ""}`}>Sign In</h2>
						<h2 className={styles.orText}>or</h2>
						<h2 className={`${styles.title} ${!signIn ? styles.active : ""}`}>Sign Up</h2>
					</div>
					{signIn ? (
						<Suspense>
							<SignInForm />
						</Suspense>
					) : (
						<SignUpForm toggle={setSignIn} />
					)}
				</div>
			</ContentWrapper>
		</div>
	);
}

export default page;
