import { Box } from "@mui/material";

import Navbar from "../components/Navbar";
import About from "../components/homeComponents/About";
import Stack from "../components/homeComponents/Stack";

import CustomCursor from "../components/customCursor/CustomCursor";

export default function Home() {
  return (
    <Box className="home_container">
      <CustomCursor />
      <Navbar />
      <About />
      <Stack />
    </Box>
  );
}
