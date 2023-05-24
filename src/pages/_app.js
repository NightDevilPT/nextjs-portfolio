import "../styles/global.scss";
import "../styles/HomeFrame.scss";
import "../styles/ContactFrame.scss";
import "../styles/SocialFrame.scss";
import "../styles/AboutFrame.scss";
import "../styles/SettingFrame.scss";
import "../styles/SkillsFrame.scss";
import "../styles/ProjectSection.scss";
import "../styles/MenuBarFrame.scss";

import LayoutFrame from "@/Components/Layouts/LayoutFrame";
import store from "@/redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<LayoutFrame>
				<Component {...pageProps} />
			</LayoutFrame>
		</Provider>
	);
}
