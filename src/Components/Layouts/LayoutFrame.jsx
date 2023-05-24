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
import React, { useEffect } from "react";
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
		const isTheme = window.localStorage.getItem("theme");
		const isFont = window.localStorage.getItem('fontFamily');
		const isHighlight = window.localStorage.getItem('highlight')

		console.log(isTheme,isFont,isHighlight);

		if (isTheme) {
			dispatch(setTheme(isTheme));
		}

		if (isFont) {
			dispatch(setFontFamily(isFont));
		}

		if (isHighlight) {
			dispatch(setHighlight(isHighlight));
		}
	}, []);

	useEffect(() => {
		window.localStorage.setItem("theme", theme);
		window.localStorage.setItem('highlight',highlight);
		window.localStorage.setItem('fontFamily',fontFamily);

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
	}, [theme,fontFamily,highlight]);

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
