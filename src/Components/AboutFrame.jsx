import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";

import profile from "../images/aboutProfile.jpg";

import variants from "@/variants";
import TitleFrame from "./Layouts/TitleFrame";

const AboutFrame = () => {
	return (
		<div className="about-div" id='about'>
			<TitleFrame
				title={"About"}
				highlight={"Me"}
				subtitle={"Get to Know"}
			/>

			<div className="about-info-div">
				<motion.div
					className="img-div"
					initial="hidden"
					whileInView={"visible"}
					variants={variants.flowLeftOpacity}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.5 }}
				>
					<Image className="image" src={profile} alt="about-profile" />
					<div className="about-img-back-layer"></div>
				</motion.div>

				<div className="about-intro-div">
					<motion.p
						className="about-description"
						initial="hidden"
						whileInView={"visible"}
						variants={variants.flowRightOpacity}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.5 }}
					>
						I'm Pawan Kumar{" "}
						<span style={{ color: "var(--highlight)" }}>
							MERN Stack Developer
						</span> From Delhi, India. I Have A Degree{" "}
						<span style={{ color: "var(--highlight)" }}>
							B.Voc(Software Developer)
						</span>{" "}
						From{" "}
						<span style={{ color: "var(--highlight)" }}>
							IP University
						</span>
						.
					</motion.p>

					<motion.p
						className="about-description"
						initial="hidden"
						whileInView={"visible"}
						variants={variants.flowRightOpacity}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.6 }}
					>
						I'm Obsessed With Making Things And Even More Obsessed
						With Making Things Better.
					</motion.p>

                    {/*  */}
                    <motion.p
						className="about-description"
						initial="hidden"
						whileInView={"visible"}
						variants={variants.flowRightOpacity}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.7 }}
					>
						Seeking a position to utilize the gained skills and experience to positively contribute to the company.
					</motion.p>

					<motion.p
						className="about-description"
						initial="hidden"
						whileInView={"visible"}
						variants={variants.flowRightOpacity}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.7 }}
					>
						When I Am Not Making Projects, I'm Probably Hanging Out
						With Friends, Being Entertained By Playing Games And
						Making Gameplay Video For Editing.
					</motion.p>

					<a href="#contact"><button>Lets Talk</button></a>
				</div>
			</div>
		</div>
	);
};

export default AboutFrame;
