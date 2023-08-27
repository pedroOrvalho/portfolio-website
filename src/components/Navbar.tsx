import { Box } from "@mui/material";

export default function Navbar() {
  return (
    <Box className="navbar" data-scroll-section>
      <Box>
        <Box>
          <a href="#about-me">About Me</a>
        </Box>
        <Box>
          <a href="#tech-stack">Tech Stack</a>
        </Box>
        <Box>
          <a href="#projects">Projects</a>
        </Box>
        <Box>
          <a href="#contact">Contact</a>
        </Box>
      </Box>
    </Box>
  );
}
