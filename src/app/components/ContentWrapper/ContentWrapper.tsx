import React, { CSSProperties } from "react";
import styles from "./ContentWrapper.module.scss";
interface ContentWrapperProps {
	className?: string;
	style?: CSSProperties;
	children?: React.ReactNode;
}

function ContentWrapper(props: ContentWrapperProps) {
	return <div className={`${styles.wrapper} ${props.className || ""}`}>{props.children}</div>;
}

export default ContentWrapper;
