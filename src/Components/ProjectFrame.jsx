import React from "react";
import TitleFrame from "./Layouts/TitleFrame";

import calculator from "../images/calculatorApp.png";
import dashboard from "../images/jobDashboard.png";
import weather from "../images/weatherApp.png";
import Image from "next/image";

import {motion} from "framer-motion";
import variants from "@/variants";

const projectsData = [
	{
		img: weather,
		title: "Weather Web App",
		description: `With the help of this weather web app, you can know the weather of any country.You can change the theme with the help of theme changer on this weather app project.`,
		link: "https://nightdevilpt.github.io/react-weatherapp/",
		github: "https://github.com/NightDevilPT/react-weatherapp",
	},
	{
		img: calculator,
		title: "Calculator Web App",
		description: `You can only do simple calculations on this web app.You can also change the theme of this calculator and change the colors of the buttons.`,
		link: "https://nightdevilpt.github.io/react-calculator/",
		github: "https://github.com/NightDevilPT/react-calculator",
	},
	{
		img: dashboard,
		title: "Job Desktop Dashboard",
		description: `This is just Job Desktop Dashboard Front End Design created using ReactJS. In this project I created a custome Carousel Effect without using Swiper.JS.`,
		link: "https://dashboard-pc-design-git-main-nightdevilpt.vercel.app/",
		github: "https://github.com/NightDevilPT/dashboard-pc-design",
	},
];

const ProjectFrame = () => {
	return (
		<div className="project-section" id="projects">
			<TitleFrame
				title={"My"}
				highlight={"Projects"}
				subtitle={"Let me Show You"}
			/>

			<div className="project-info-div">
        {
          projectsData.map((items,index)=>{
            return <ProjectCard key={items.title+"_"+index} data={items} />
          })
        }
			</div>
		</div>
	);
};

export default ProjectFrame;

export const ProjectCard = ({
	data: { img, title, description, link, github },
}) => {
	return <motion.div className="project-div"
    initial="hidden"
			whileInView={"visible"}
			variants={variants.flowTopOpacity}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: 0.5 }}
  >
    <Image className="project-img" src={img} alt="project images" effect="blur" />
    <h2 className="project-title">
      {title}
    </h2>
    <span className="project-description">
      {description}
    </span>

    <div className="project-button-div">
      <a className="github-btn" href={github}>Github</a>
      <a className="live-btn" href={link}>Live Demo</a>
    </div>
  </motion.div>;
};

