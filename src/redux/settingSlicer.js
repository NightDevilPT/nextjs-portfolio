import { createSlice } from "@reduxjs/toolkit";

const settingSlicer = createSlice({
	name: "settingSlicer",
	initialState: {
		fontFamily: ``,
		primaryBg: "",
		secondaryBg: "",
		primaryFg: "",
		secondaryFg: "",
		highlight: "",
		theme: "",
		activeBg: "",
	},
	reducers: {
		setTheme: (state, action) => {
			state.theme = action.payload;
		},
		setPrimaryBg: (state, action) => {
			state.primaryBg = action.payload;
		},
		setPrimaryFg: (state, action) => {
			state.primaryFg = action.payload;
		},
		setSecondaryBg: (state, action) => {
			state.secondaryBg = action.payload;
		},
		setSecondaryFg: (state, action) => {
			state.secondaryFg = action.payload;
		},
		setFontFamily: (state, action) => {
			state.fontFamily = action.payload;
		},
		setHighlight: (state, action) => {
			state.highlight = action.payload;
		},
		setActiveBg: (state, action) => {
			state.activeBg = action.payload;
		},
	},
});

export const {
	setFontFamily,
	setActiveBg,
	setHighlight,
	setPrimaryBg,
	setPrimaryFg,
	setSecondaryBg,
	setSecondaryFg,
	setTheme,
} = settingSlicer.actions;
export default settingSlicer.reducer;
