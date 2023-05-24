import React, { useState } from "react";

import { AiFillHome, AiFillProject } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { MdContactMail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

const MenuBarFrame = () => {
	const [active, setActive] = useState("home");
	
	return (
		<div className="menubar-section">
			<a
				className={`menubar-tabs-btn ${
					active === "home" && "active-menubar-tab-btn"
				}`}
				onClick={(e) => setActive("home")}
				href="#home"
			>
				<AiFillHome className="menubar-tabs-icon" />
			</a>

			<a
				className={`menubar-tabs-btn ${
					active === "about" && "active-menubar-tab-btn"
				}`}
				onClick={(e) => setActive("about")}
				href="#about"
			>
				<FaUserAlt className="menubar-tabs-icon" />
			</a>
			<a
				className={`menubar-tabs-btn ${
					active === "skills" && "active-menubar-tab-btn"
				}`}
				onClick={(e) => setActive("skills")}
				href="#skills"
			>
				<GiSkills className="menubar-tabs-icon" />
			</a>
			<a
				className={`menubar-tabs-btn ${
					active === "projects" && "active-menubar-tab-btn"
				}`}
				onClick={(e) => setActive("projects")}
				href="#projects"
			>
				<AiFillProject className="menubar-tabs-icon" />
			</a>
			<a
				className={`menubar-tabs-btn ${
					active === "contact" && "active-menubar-tab-btn"
				}`}
				onClick={(e) => setActive("contact")}
				href="#contact"
			>
				<MdContactMail className="menubar-tabs-icon" />
			</a>
		</div>
	);
};

export default MenuBarFrame;
