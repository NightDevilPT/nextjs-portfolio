import Image from "next/image";
import profile from "../images/homeProfile.jpg";
import { motion } from "framer-motion";

import { FaCloudDownloadAlt } from "react-icons/fa";

import variants from "@/variants";
import SocialFrame from "./Layouts/SocialFrame";
import { BsDownload } from "react-icons/bs";

// --------- Download CV Function
const DownloadCV = () => {
	let url = "./Resume.pdf";
	let a = document.createElement("a");
	a.href = url;
	a.download = "CV.pdf";
	a.click();
};

const HomeFrame = () => {
	return (
		<div className="home-div" id='home'>
			<motion.div
				className="img-div"
				initial="hidden"
				whileInView={"visible"}
				variants={variants.flowLeftOpacity}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.5 }}
			>
				<Image src={profile} className="image" alt="home-profile" />
				<motion.div
					className="img-back-layer"
					initial="hidden"
					whileInView={"visible"}
					variants={variants.flowLeftRotate}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 1 }}
				></motion.div>
			</motion.div>

			<div className="home-intro-div">
				<motion.h3
					className="home-subtitle"
					initial="hidden"
					whileInView={"visible"}
					variants={variants.flowRightOpacity}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.5 }}
				>
					I'm Pawan Kumar
				</motion.h3>

				<motion.h1
					className="home-title"
					initial="hidden"
					whileInView={"visible"}
					variants={variants.flowRightOpacity}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.5 }}
				>
					MERN Stact Developer
				</motion.h1>
				<motion.p
					className="home-description"
					initial="hidden"
					whileInView={"visible"}
					variants={variants.flowRightOpacity}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.5 }}
				>
					I'm Pawan Kumar based Full Stack Developer With The
					Knowledge Of{" "}
					<span style={{ color: "var(--highlight)" }}>
						MERN ( MOngoDB, ExpressJS, ReactJS, NodeJS), NextJS
					</span>{" "}
					And{" "}
					<span style={{ color: "var(--highlight)" }}>Pyhton</span>{" "}
					Programming
				</motion.p>

				<motion.p
					className="home-description"
					initial="hidden"
					whileInView={"visible"}
					variants={variants.flowRightOpacity}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.5 }}
				>
					I am very passionate and dedicate to my work.
				</motion.p>
				<SocialFrame />
				<motion.button
					initial="hidden"
					whileInView={"visible"}
					variants={variants.flowRightOpacity}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.8 }}
					onClick={e=>DownloadCV()}
				>
					Download CV <FaCloudDownloadAlt className="download-icon" />{" "}
				</motion.button>
			</div>
		</div>
	);
};

export default HomeFrame;
