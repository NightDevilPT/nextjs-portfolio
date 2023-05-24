import AboutFrame from "@/Components/AboutFrame";
import ContactFrame from "@/Components/ContactFrame";
import HomeFrame from "@/Components/HomeFrame";
import MenuBarFrame from "@/Components/MenuBarFrame";
import ProjectFrame from "@/Components/ProjectFrame";
import SettingFrame from "@/Components/SettingFrame";
import SkillsFrame from "@/Components/SkillsFrame";
import { useState } from "react";

import { AiFillSetting } from "react-icons/ai";

const index = () => {
	const [showSetting, setShowSetting] = useState("hide");

	return (
		<div className="frame">
			<div
				className="setting-btn-div"
				onClick={(e) =>{
					setShowSetting(showSetting === "show" ? "hide" : "show")
				}}
			>
				<AiFillSetting className="setting-icon" />
			</div>
			<SettingFrame
				showSetting={showSetting}
				setShowSetting={setShowSetting}
			/>
			<MenuBarFrame />
			<HomeFrame />
			<AboutFrame />
			<SkillsFrame />
			<ProjectFrame />
			<ContactFrame />
		</div>
	);
};

export default index;
