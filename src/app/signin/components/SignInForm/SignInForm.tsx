import { useContext, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { UserContext } from "../../../contexts/UserContext";
import styles from "./SignInForm.module.scss";

function SignInForm() {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const { signInUser } = useContext(UserContext);
	const router = useRouter();
	const searchParams = useSearchParams();

	const handleSignIn = () => {
		const signedInSuccessfully = signInUser(email, password);
		if (signedInSuccessfully) {
			const redirect = searchParams.get("redirect");
			router.push(redirect || "/");
		}
	};

	return (
		<div className={styles.signInContainer}>
			<div className={styles.inputFieldWrapper}>
				<label className={styles.inputLabel}>Email</label>
				<input className={styles.inputField} type="email" placeholder="Enter a valid email" value={email} onChange={(e) => setEmail(e.target.value)} />
			</div>
			<div className={styles.inputFieldWrapper}>
				<label className={styles.inputLabel}>Password</label>
				<input
					className={styles.inputField}
					type="password"
					placeholder="**********"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<button className={styles.signInBtn} onClick={handleSignIn}>
				Sign In
			</button>
		</div>
	);
}

export default SignInForm;
