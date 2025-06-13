

import { IconCheck } from '@tabler/icons-react';
import { Button as MantineButton, Container, Group, Image, List, Text, ThemeIcon, Title } from '@mantine/core';

import classes from '../styles/HeroBullets.module.css';
import { HeroSlider } from '../assets/image/image';

function Home() {
  return (
    <Container className="h-min flex items-center justify-center" size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>Hi, I’m Chirag Bhoi!</Title>
          <Text c="dimmed" mt="md">
            A passionate Frontend Developer skilled in React.js, JavaScript, and Tailwind CSS. I
            create responsive, modern web applications with a focus on performance and user
            experience. Check out my projects and let’s connect!
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={12} stroke={1.5} />
              </ThemeIcon>
            }
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

          <Group mt={30}>
            <MantineButton
              component="a"
              href="https://drive.google.com/file/d/1OpT_n0Zflhf4xLZoU_x-7J6_rYPcSNhk/view"
            >
              View Resume
            </MantineButton>
            <MantineButton
              component="a"
              href="https://drive.google.com/file/d/1OpT_n0Zflhf4xLZoU_x-7J6_rYPcSNhk/view"
              color="black"
            >
              Source Code
            </MantineButton>
          </Group>
        </div>
        <Image src={HeroSlider} className={`${classes.image} rounded-lg`} />
      </div>
    </Container>
  );
}

export default Home;

