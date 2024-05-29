import React, { useContext, useState } from "react";

import styles from "./SignUpForm.module.scss";
import { UserContext } from "@/app/contexts/UserContext";

interface SignUpFormProps {
	toggle: (value: boolean) => void;
}

function SignUpForm(props: SignUpFormProps) {
	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [repeatPassword, setRepeatPassword] = useState<string>("");
	const { AddnewUser } = useContext(UserContext);

	const handleSignUp = () => {
		if (password !== repeatPassword) {
			alert("Passwords do not match");
			return;
		}

		const newUser = {
			firstname: firstName,
			lastname: lastName,
			email: email,
			password: password,
			products: [],
		};

		console.log(newUser);
		AddnewUser(newUser);

		props.toggle(true);
	};
	return (
		<div className={styles.signUpContainer}>
			<div className={styles.inputFieldWrapper}>
				<label className={styles.inputLabel}>First name</label>
				<input type="text" className={styles.inputField} placeholder="Enter your first name" onChange={(e) => setFirstName(e.target.value)} />
			</div>
			<div className={styles.inputFieldWrapper}>
				<label className={styles.inputLabel}>Last name</label>
				<input type="text" className={styles.inputField} placeholder="Enter your Last name" onChange={(e) => setLastName(e.target.value)} />
			</div>
			<div className={styles.inputFieldWrapper}>
				<label className={styles.inputLabel}>Email</label>
				<input type="text" className={styles.inputField} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
			</div>
			<div className={styles.inputFieldWrapper}>
				<label className={styles.inputLabel}>Password</label>
				<input type="password" className={styles.inputField} placeholder="**********" onChange={(e) => setPassword(e.target.value)} />
			</div>
			<div className={styles.inputFieldWrapper}>
				<label className={styles.inputLabel}>Repeat password</label>
				<input type="password" className={styles.inputField} placeholder="**********" onChange={(e) => setRepeatPassword(e.target.value)} />
			</div>
			<div className={styles.optionsContainer}>
				<button className={styles.signUpButton} onClick={() => handleSignUp()}>
					Sign Up
				</button>
				<span className={styles.alreadyMemberLink}>I'm already member</span>
			</div>
		</div>
	);
}

export default SignUpForm;
