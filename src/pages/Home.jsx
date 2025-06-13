import { IconCheck } from '@tabler/icons-react';
import { Button as MantineButton, Container, Group, Image, List, Text, ThemeIcon, Title } from '@mantine/core';
import { motion } from 'framer-motion';
import classes from '../styles/HeroBullets.module.css';
import { HeroSlider } from '../assets/image/image';

function Home() {
  const titleText = "Hi, I’m Chirag Bhoi!";
  const titleLetters = titleText.split('');

  // Animation variants for letters
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Delay between each letter
        delayChildren: 0.2, // Initial delay
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: 20 }, // Start off-screen to the right
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }, // Slide in from right
  };

  return (
    <Container
      size="lg"
      className="min-h-[calc(100vh-120px)] flex items-center justify-center py-6 md:py-8 text-black"
    >
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title>
            <motion.div
              className={classes.title}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {titleLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  style={{ display: 'inline-block' }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </motion.div>
          </Title>
          <Text className="text-black text-sm sm:text-base md:text-lg mb-6">
            A passionate Frontend Developer skilled in React.js, JavaScript, and Tailwind CSS. I
            create responsive, modern web applications with a focus on performance and user
            experience. Check out my projects and let’s connect!
          </Text>

          <List
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl" color="teal">
                <IconCheck size={12} stroke={1.5} />
              </ThemeIcon>
            }
            className="text-black text-sm sm:text-base mb-6"
          >
            <List.Item>
              <b>TypeScript Ready</b> – Write clean and error-free code with built-in type support.
            </List.Item>
            <List.Item>
              <b>Open Source</b> – Completely free to use for any project.
            </List.Item>
            <List.Item>
              <b>User-Friendly Design</b> – Smooth and accessible navigation for all users.
            </List.Item>
          </List>

          <Group gap="sm" className="flex flex-wrap mt-10">
            <MantineButton
              component="a"
              href="https://drive.google.com/file/d/1OpT_n0Zflhf4xLZoU_x-7J6_rYPcSNhk/view"
              size="md"
              className={`${classes.control} bg-teal-500 hover:bg-teal-600`}
              aria-label="View Resume"
            >
              View Resume
            </MantineButton>
            <MantineButton
              component="a"
              href="https://github.com/chiragbhoi01/Chirag-Portfolio"
              size="md"
              variant="outline"
              color="teal"
              className={classes.control}
              aria-label="Source Code"
            >
              Source Code
            </MantineButton>
          </Group>
        </div>
        <Image
          src={HeroSlider}
          className={classes.image}
          alt="Chirag Bhoi Portfolio"
        />
      </div>
    </Container>
  );
}

export default Home;