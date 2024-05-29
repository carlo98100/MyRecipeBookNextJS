import { UserContext } from "@/app/contexts/UserContext";
import React, { useContext, useState } from "react";
import styles from "./SignInForm.module.scss";
function SignInForm() {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const { signInUser } = useContext(UserContext);

	const handleSignIn = () => {
		const signedInSuccessfully = signInUser(email, password);
		if (signedInSuccessfully) {
			// navigate("/");
		}
	};

	return (
		<div className={styles.signInContainer}>
			<div className={styles.inputFieldWrapper}>
				<label className={styles.inputLabel}>Email</label>
				<input className={styles.inputField} type="text" placeholder="Enter a valid email" onChange={(e) => setEmail(e.target.value)} />
			</div>
			<div className={styles.inputFieldWrapper}>
				<label className={styles.inputLabel}>Password</label>
				<input className={styles.inputField} type="password" placeholder="**********" onChange={(e) => setPassword(e.target.value)} />
			</div>
			<button className={styles.signInBtn} onClick={() => handleSignIn()}>
				Sign In
			</button>
		</div>
	);
}

export default SignInForm;
