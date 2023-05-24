import {
	setActiveBg,
	setFontFamily,
	setHighlight,
	setPrimaryBg,
	setPrimaryFg,
	setSecondaryBg,
	setSecondaryFg,
	setTheme,
} from "@/redux/settingSlicer";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LayoutFrame = ({ children }) => {
	const dispatch = useDispatch();
	const {
		fontFamily,
		highlight,
		theme,
		primaryBg,
		primaryFg,
		secondaryBg,
		secondaryFg,
		activeBg,
	} = useSelector((state) => state.setting);

	useEffect(() => {
		window.localStorage.setItem(
			"theme",
			theme || window.localStorage.getItem("theme") || "dark"
		);
		dispatch(setTheme(window.localStorage.getItem("theme")));

		window.localStorage.setItem(
			"fontFamily",
			fontFamily ||
				window.localStorage.getItem("fontFamily") ||
				`'Ubuntu', sans-serif`
		);
		dispatch(setFontFamily(window.localStorage.getItem("fontFamily")));

		window.localStorage.setItem(
			"highlight",
			highlight || window.localStorage.getItem("highlight") || "#46aaeb"
		);
		dispatch(setHighlight(window.localStorage.getItem("highlight")));

		if (theme === "dark") {
			dispatch(setPrimaryBg("#1f1d36"));
			dispatch(setPrimaryFg("#fffeff"));
			dispatch(setSecondaryBg("#2a2a67"));
			dispatch(setSecondaryFg("#9298ba"));
			dispatch(setActiveBg("#333a56"));
		} else {
			dispatch(setPrimaryBg("#f2f5f4"));
			dispatch(setPrimaryFg("#1c1f28"));
			dispatch(setSecondaryBg("#ffffff"));
			dispatch(setSecondaryFg("#5e5e6a"));
			dispatch(setActiveBg("#e1e3f0"));
		}
	}, [theme, fontFamily, highlight]);

	return (
		<div
			className="App"
			style={{
				"--primary-bg": primaryBg,
				"--primary-fg": primaryFg,
				"--secondary-bg": secondaryBg,
				"--secondary-fg": secondaryFg,
				"--highlight": highlight,
				"--active": activeBg,
				"--family": fontFamily,
			}}
		>
			{children}
		</div>
	);
};

export default LayoutFrame;
