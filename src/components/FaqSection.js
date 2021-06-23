import React, { useState } from 'react'
import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from './useScroll';
import { fade } from "../animation";

const FaqSection = () => {
    const [element, controls] = useScroll();
    return (
        <Faq variants={fade} animate={controls} initial="hidden" ref={element}>

            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="How DO I Start?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu.</p>
                    </div>
                </Toggle>
                <Toggle title="Daily Schedule">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu.</p>
                    </div>
                </Toggle>
                <Toggle title="Different Payment Method">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu.</p>
                    </div>
                </Toggle>
                <Toggle title="What Product DO You Offer">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu.</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}
const Faq = styled(About)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #CCCCCC;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%
    }
    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
         }
    }
`;

export default FaqSection;