import React from "react";
import { motion } from "framer-motion";

import {
	FaFacebookF,
	FaYoutube,
	FaLinkedinIn,
	FaGithub,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";


import variants from "@/variants";

const SocialFrame = () => {
	return (
		<div className="social-div">
			<motion.a
				initial="hidden"
				whileInView={"visible"}
				viewport={{ once: true }}
				variants={variants.flowRightOpacity}
				transition={{
					duration: 0.5,
					delay: 0.5,
					type: "spring",
				}}
				href="https://www.facebook.com/nightdevil8"
			>
				<FaFacebookF className="social-icons" />
			</motion.a>

			<motion.a
				initial="hidden"
				whileInView={"visible"}
				viewport={{ once: true }}
				variants={variants.flowRightOpacity}
				transition={{
					duration: 0.5,
					delay: 0.6,
					type: "spring",
				}}
				href="https://www.instagram.com/nightdevil_pt?igshid=ZDdkNTZiNTM="
			>
				<RiInstagramFill className="social-icons" />
			</motion.a>

			<motion.a
				initial="hidden"
				whileInView={"visible"}
				viewport={{ once: true }}
				variants={variants.flowRightOpacity}
				transition={{
					duration: 0.5,
					delay: 0.7,
					type: "spring",
				}}
				href="https://www.linkedin.com/in/pawan-kumar-685a21243"
			>
				<FaLinkedinIn className="social-icons" />
			</motion.a>

			<motion.a
				initial="hidden"
				whileInView={"visible"}
				viewport={{ once: true }}
				variants={variants.flowRightOpacity}
				transition={{
					duration: 0.5,
					delay: 0.8,
					type: "spring",
				}}
				href="https://www.youtube.com/@nightdevilpt"
			>
				<FaYoutube className="social-icons" />
			</motion.a>

			<motion.a
				initial="hidden"
				whileInView={"visible"}
				viewport={{ once: true }}
				variants={variants.flowRightOpacity}
				transition={{
					duration: 0.5,
					delay: 0.9,
					type: "spring",
				}}
				href="https://github.com/NightDevilPT"
			>
				<FaGithub className="social-icons" />
			</motion.a>
		</div>
	);
};

export default SocialFrame;
