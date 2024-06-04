"use client";

import { UserContextProvider } from "@/app/contexts/UserContext";
import React, { ReactNode } from "react";

interface ProvidersProps {
	children: ReactNode;
}

function Providers(props: ProvidersProps) {
	return <UserContextProvider>{props.children}</UserContextProvider>;
}

export default Providers;
