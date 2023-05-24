import { setFontFamily, setHighlight, setTheme } from "@/redux/settingSlicer";
import React, { useState } from "react";

import { AiFillCloseSquare } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const SettingFrame = ({showSetting,setShowSetting}) => {
	const { highlight, theme, fontFamily } = useSelector(
		(state) => state.setting
	);
	const fontName = [
		`'Ubuntu', sans-serif`,
		`'Acme', sans-serif`,
		`'Kalam', cursive`,
		`'Lobster', cursive`,
		`'Merriweather Sans', sans-serif`,
		`'Mogra', cursive`,
		`'Patrick Hand', cursive`,
		`'Roboto', sans-serif`,
	];
	const dispatch = useDispatch();
    
	return (
		<div className={`setting-section ${showSetting}-setting-section`}>
			<div className="setting-wrapper">
				<div className="setting-header">
					<h2>Theme Setting</h2>
					<AiFillCloseSquare onClick={e=>setShowSetting('hide')} className="close-setting-icon" />
				</div>

				<div className="setting-div">
					<label>Highlight Color</label>
					<div className="setting-option">
						<button
							className={`color-tab ${
								highlight === "#46aaeb"
									? "active-color-tab"
									: ""
							}`}
							style={{ backgroundColor: "#46aaeb" }}
							onClick={(e) => dispatch(setHighlight("#46aaeb"))}
						></button>

						<button
							className={`color-tab ${
								highlight === "#fd7e14"
									? "active-color-tab"
									: ""
							}`}
							style={{ backgroundColor: "#fd7e14" }}
							onClick={(e) => dispatch(setHighlight("#fd7e14"))}
						></button>

						<button
							className={`color-tab ${
								highlight === "#6610f2"
									? "active-color-tab"
									: ""
							}`}
							style={{ backgroundColor: "#6610f2" }}
							onClick={(e) => dispatch(setHighlight("#6610f2"))}
						></button>

						<button
							className={`color-tab ${
								highlight === "#dc3545"
									? "active-color-tab"
									: ""
							}`}
							style={{ backgroundColor: "#dc3545" }}
							onClick={(e) => dispatch(setHighlight("#dc3545"))}
						></button>

						<button
							className={`color-tab ${
								highlight === "#27a86c"
									? "active-color-tab"
									: ""
							}`}
							style={{ backgroundColor: "#27a86c" }}
							onClick={(e) => dispatch(setHighlight("#27a86c"))}
						></button>
					</div>
				</div>

				<div className="setting-div">
					<label>Theme Color</label>

					<div className="setting-option">
						<button
							className={`color-tab ${
								theme === "dark" ? "active-color-tab" : ""
							}`}
							style={{
								backgroundColor: "#1f1d36",
								color: "white",
							}}
							onClick={(e) => {
								dispatch(setTheme("dark"));
								console.log(theme);
							}}
						>
							Dark
						</button>

						<button
							className={`color-tab ${
								theme === "light" ? "active-color-tab" : ""
							}`}
							style={{
								backgroundColor: "#eeedef",
								color: "black",
							}}
							onClick={(e) => {
								dispatch(setTheme("light"));
								console.log("light");
							}}
						>
							Light
						</button>
					</div>
				</div>

				<div className="setting-div font-setting-div">
					<label>Font Family</label>

					<div className="font-option">
						{fontName.map((items, index) => {
							return (
								<FontTabs
									key={items + "_" + index}
									fontFamily={fontFamily}
									fontName={items}
									dispatch={dispatch}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SettingFrame;

export const FontTabs = ({ fontName, fontFamily, dispatch }) => {
	return (
		<div
			className={`font-tabs ${
				fontFamily === `${fontName}` ? "active-font-tab" : ""
			}`}
			onClick={(e) => {
				dispatch(setFontFamily(`${fontName}`));
			}}
		>
			<span style={{ fontFamily: `${fontName}` }}>Aa</span>
			<span style={{ fontFamily: `${fontName}` }}>{fontName}</span>
		</div>
	);
};
