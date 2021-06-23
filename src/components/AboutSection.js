import React from 'react';
import home1 from '../img/home1.png';
//importing Styled Component
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from '../animation';
import { About, Description, Hide, Image } from '../styles';
import Wave from './Wave';

const AboutSection = () => {

    // const titleAnim = {
    //     hidden: { opacity: 0 },
    //     show: { opacity: 1, transition: { duration: 2 } }
    // }
    // const container = {
    //     hidden: { x: 100 },
    //     show: { x: 0, transition: { duration: 0.75, ease: "easeOut",staggerChildren: 1,when: "afterChildren" } },
    // }
    return (
        <About>
            <Description>
                <motion.div
                    className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim} >
                            We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            your <span>dreams</span> come
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have.We have professionals with amazing skills</motion.p>
                <motion.button variants={fade} >Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
            </Image>
            <Wave />
        </About>
    );
}
export default AboutSection;