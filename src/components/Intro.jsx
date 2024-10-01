import React, { useRef} from "react";
import styled from "styled-components";
import { useInView } from "framer-motion";
import me from "../image/me.jpg";
import { motion } from "framer-motion";

const Container = styled.div`


`;

const Section = styled(motion.section)`
  padding: 2rem 0;
  height: 70vh;
  text-align: center;
  width: 100%;
  transition: height 0.5s ease, width 0.5s ease, transform 0.5s ease;
  /* position:relative; */
`;

const Image = styled(motion.img)`
  border-radius: 50%;
  width: 17.188rem;
  height: 17.188rem;
  border: 4px solid #d1d5db;
  object-fit: cover;
  object-position: center;
  transition: width 0.5s ease, height 0.5s ease;
`;

const Title = styled(motion.h1)`
  font-size: 3.25rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  margin-top: 0;
  @media (max-width: 800px) {
    color: white;
  }
`;

const Subtitle = styled(motion.div)`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  margin: auto;
  @media (max-width: 800px) {
    padding: 15px;
    color: black;
    /* font-weight: bold; */
  }
`;

const Intro = () => {
  const ref = useRef(null);
  
  const isInView = useInView(ref, {
    amount: 0.5,
    once: true,
    triggerOnce: true,
  });

  

  return (
    <Container>

    <Section ref={ref} >

      <Image
        src={me}
        alt="Image"
        initial={{ opacity: 0, x: -2000 }}
        animate={{
          opacity: isInView? 1 : 0,
          x: isInView? 0 : 200,
          transition: { duration: 1.5, ease: "easeInOut" },
        }}
      />
      <Title
        initial={{ opacity: 0, x: -2000 }}
        animate={{
          opacity: isInView? 1 : 0,
          x: isInView? 0 : 50,
          transition: { duration: 1.5, ease: "easeInOut" },
        }}
      >
        Hi, I'm Suraj Manandhar
      </Title>
      <Subtitle
        initial={{ opacity: 0, x: -2000 }}
        animate={{
          opacity: isInView? 1 : 0,
          x: isInView? 0 : 50,
          transition: { duration: 1.5, ease: "easeInOut" },
        }}
      >
        I'm a frontend developer with a passion for creating beautiful and intuitive user interfaces.
      </Subtitle>
    </Section>
    </Container>

  );
};

export default Intro;