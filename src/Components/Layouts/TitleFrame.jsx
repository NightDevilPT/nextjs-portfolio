import React from "react";
import {motion} from "framer-motion";
import variants from "@/variants";

const TitleFrame = ({title,subtitle,highlight}) => {
	return (
		<motion.div
			className="frame-header-div"
			initial="hidden"
			whileInView={"visible"}
			viewport={{ once: true }}
			variants={variants.flowTopOpacity}
			transition={{
				duration: 0.5,
				delay: 0.2,
			}}
		>
			<h2 className="frame-title">
				{title} <span style={{ color: "var(--highlight" }}>{highlight}</span>
			</h2>
			<span className="frame-subtitle">{subtitle}</span>
		</motion.div>
	);
};

export default TitleFrame;
