"use client";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { UserContext } from "./contexts/UserContext";

export default function isAuth(Component: any) {
	return function IsAuth(props: any) {
		const { isAuthenticated } = useContext(UserContext);
		const router = useRouter();
		const pathname = usePathname();

		useEffect(() => {
			if (!isAuthenticated) {
				router.push(`/signin?redirect=${encodeURIComponent(pathname)}`);
			}
		}, [isAuthenticated]);

		if (!isAuthenticated) {
			return null;
		}

		return <Component {...props} />;
	};
}
