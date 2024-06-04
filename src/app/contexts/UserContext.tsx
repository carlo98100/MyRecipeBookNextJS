"use client";
import React, { ReactNode, createContext, useState, useContext } from "react";

const UserContext = createContext<any>(null);

interface Product {
	idMeal: string;
	strMeal: string;
	strMealThumb: string;
	strInstructions: string;
}
interface User {
	firstname: string;
	lastname: string;
	email: string;
	password: string;
	products: Product[];
}
interface UserContextProviderProps {
	children: ReactNode;
}
function UserContextProvider(props: UserContextProviderProps) {
	const [users, setUsers] = useState<User[]>([
		{
			firstname: "Test",
			lastname: "Testsson",
			email: "test@test.se",
			password: "testtest",
			products: [],
		},
	]);

	const [signedInUser, setSignedInUser] = useState<User | null>(null);
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	const addProduct = (product: Product) => {
		setSignedInUser((prevUser) => ({
			...prevUser!,
			products: [...prevUser!.products, product],
		}));
		console.log("Added product:", product);
	};

	const removeProductById = (productId: string) => {
		console.log("Deleting product with ID:", productId);
		setSignedInUser((prevUser) => ({
			...prevUser!,
			products: prevUser!.products.filter((product: Product) => product.idMeal !== productId),
		}));
	};

	const signInUser = (email: string, password: string) => {
		const user = users.find((user) => user.email === email && user.password === password);

		if (user) {
			setSignedInUser(user);
			setIsAuthenticated(true);
			console.log("Signed in as:", user);
			return true;
		} else {
			console.log("No user found with that email and password");
			return false;
		}
	};

	const signOutUser = () => {
		setSignedInUser(null);
		setIsAuthenticated(false);
	};

	const AddnewUser = (newUser: User) => {
		setUsers([...users, newUser]);
	};

	return (
		<UserContext.Provider value={{ signedInUser, isAuthenticated, addProduct, removeProductById, AddnewUser, signInUser, signOutUser }}>
			{props.children}
		</UserContext.Provider>
	);
}

export { UserContext, UserContextProvider };
