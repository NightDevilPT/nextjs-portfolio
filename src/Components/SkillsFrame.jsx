import { motion } from "framer-motion";

import TitleFrame from "./Layouts/TitleFrame";

import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiMongodb, SiPhp, SiMysql, SiNextdotjs } from "react-icons/si";

import variants from "@/variants";

const SkillsData = [
	{
		title: "HTML",
		process: 80,
		icons: <AiFillHtml5 className="skills-icon" />,
	},
	{
		title: "CSS",
		process: 80,
		icons: <IoLogoCss3 className="skills-icon" />,
	},
	{
		title: "JavaScript",
		process: 80,
		icons: <IoLogoJavascript className="skills-icon" />,
	},
	{
		title: "ReactJS",
		process: 80,
		icons: <FaReact className="skills-icon" />,
	},
	{
		title: "NextJS",
		process: 70,
		icons: <SiNextdotjs className="skills-icon" />,
	},
	{
		title: "NodeJS",
		process: 60,
		icons: <FaNodeJs className="skills-icon" />,
	},
	{
		title: "MongoDB",
		process: 60,
		icons: <SiMongodb className="skills-icon" />,
	},
	{
		title: "Python",
		process: 60,
		icons: <FaPython className="skills-icon" />,
	},
	{
		title: "Php",
		process: 50,
		icons: <SiPhp className="skills-icon" />,
	},
	{
		title: "MySQL",
		process: 50,
		icons: <SiMysql className="skills-icon" />,
	},
];

const SkillsFrame = () => {
	return (
		<div className="skills-section" id='skills'>
			<TitleFrame
				title={"My"}
				highlight={"Skills"}
				subtitle={"What Skills I Have"}
			/>
			<div className="skills-info-div">
				{SkillsData.map((items, index) => {
					return (
						<SkillsProcessFrame
							key={items.title + "_" + index}
							data={items}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default SkillsFrame;



export const SkillsProcessFrame = ({ data: { title, process, icons } }) => {
	return (
		<motion.div
			className="skills-div"
			initial="hidden"
			whileInView={"visible"}
			variants={variants.flowTopOpacity}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: 0.5 }}
		>
			<div
				className="skill-progress-div"
				style={{
					background: `conic-gradient(var(--highlight) ${
						process * 3.6
					}deg, var(--primary-fg) ${process * 3.6}deg)`,
				}}
			>
				<div className="skill-icon-div">{icons}</div>
			</div>

			<div className="skill-info-div">
				<span className="skill-title">{title}</span>
				<span className="skill-subtitle">
					{process < 20
						? "Novoice"
						: process < 40
						? "Advanced Beginner"
						: process < 60
						? "Competent"
						: process <= 80
						? "Proficient"
						: "Expert"}
				</span>
			</div>
		</motion.div>
	);
};
