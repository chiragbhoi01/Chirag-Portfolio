import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  
} from "@tabler/icons-react";
import { ActionIcon, Container, Group } from "@mantine/core";
import classes from "../styles/FooterSocial.module.css";
import Logo from "../utils/Logo";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Logo width="150" />
        <Group
          gap={0}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="black" variant="subtle">
            <a
              href="http://github.com/chiragbhoi01"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <IconBrandGithub size={28} stroke={2} />
            </a>
          </ActionIcon>
          <ActionIcon size="lg" color="black" variant="subtle">
            <a
              href="https://www.linkedin.com/in/chirag-bhoi-90b89b1b1/"
              target="_blank"
            >
              <IconBrandLinkedin size={28} stroke={2} />
            </a>
          </ActionIcon>
          <ActionIcon size="lg" color="black" variant="subtle">
            <a
              href="https://www.instagram.com/chirag.bhoi_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandInstagram size={28} stroke={2} />
            </a>
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
