import React from "react";
import { motion } from "framer-motion";

import { IoIosMailOpen } from "react-icons/io";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsSendFill, BsWhatsapp } from "react-icons/bs";

import variants from "@/variants";
import TitleFrame from "./Layouts/TitleFrame";

const ContactFrame = () => {
	return (
		<div className="contact-div" id='contact'>
			<TitleFrame title="Contact" highlight="Me" subtitle="Get in Touch" />

			<motion.div
				className="contact-subheader"
				initial="hidden"
				whileInView={"visible"}
				viewport={{ once: true }}
				variants={variants.flowTopOpacity}
				transition={{
					duration: 0.5,
					delay: 0.4,
				}}
			>
				<h3 className="subheader-title">Dont be Shy !</h3>
				<p className="subheader-subtitle">
					Feel free to get in touch with me. I am always open to
					discussing new projects, creative ideas or opportunities to
					be part of your visions.
				</p>
			</motion.div>

			<div className="contact-container">
				<div className="contact-data">
					<motion.div
						className="contact-card-div"
						initial="hidden"
						whileInView={"visible"}
						viewport={{ once: true }}
						variants={variants.flowLeftOpacity}
						transition={{
							duration: 0.5,
							delay: 0.2,
						}}
					>
						<IoIosMailOpen className="card-icon" />
						<h4 className="card-title">Mail Me</h4>
						<p className="card-subtitle">nightdevilpt@gmail.com</p>
						<a href="mailto:pawankumartadagsingh@gmail.com">
							Send Message
						</a>
					</motion.div>

					<motion.div
						className="contact-card-div"
						initial="hidden"
						whileInView={"visible"}
						viewport={{ once: true }}
						variants={variants.flowLeftOpacity}
						transition={{
							duration: 0.5,
							delay: 0.4,
						}}
					>
						<FaFacebookMessenger className="card-icon" />
						<h4 className="card-title">Messanger</h4>
						<p className="card-subtitle">nightdevil8</p>
						<a href="https://m.me/nightdevil8">Send Message</a>
					</motion.div>

					<motion.div
						className="contact-card-div"
						initial="hidden"
						whileInView={"visible"}
						viewport={{ once: true }}
						variants={variants.flowLeftOpacity}
						transition={{
							duration: 0.5,
							delay: 0.6,
						}}
					>
						<BsWhatsapp className="card-icon" />
						<h4 className="card-title">WhatsApp</h4>
						<p className="card-subtitle">8586027728</p>
						<a href="https://api.whatsapp.com/send?phone=8586027728">
							Send Message
						</a>
					</motion.div>
				</div>

				<motion.form
					className="contact-form"
					initial="hidden"
					whileInView={"visible"}
					viewport={{ once: true }}
					variants={variants.flowRightOpacity}
					transition={{
						duration: 0.5,
						delay: 0.2,
					}}
				>
					<input type="text" name="name" placeholder="Username" />
					<input type="text" name="name" placeholder="Email-ID" />
					<textarea placeholder="Description" />
					<button>
						Send Message <BsSendFill className="send-icon" />{" "}
					</button>
				</motion.form>
			</div>
		</div>
	);
};

export default ContactFrame;
