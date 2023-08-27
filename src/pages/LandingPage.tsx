import { Link } from "react-router-dom";
import CanvasHome from "../components/canvas/CanvasHome";

import { Box } from "@mui/material";
import CustomCursor from "../components/customCursor/CustomCursor";

export default function LandingPage() {
  return (
    <Box sx={{ width: "100%", height: "100%" }} className="home_container">
      <CustomCursor />
      <CanvasHome />
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "800px",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#eee9e98d",
          }}
          className="home_text"
        >
          <h1>Welcome</h1>
          <h2>I'm Pedro Orvalho, and this is my website.</h2>
          <h3>
            Fullstack Web Developer, leaving his mark on the work, one function
            at a time
          </h3>
          <h3>
            If you want to know more about me just press the button bellow
          </h3>
          <Link to={"/home"}>
            <button>The button bellow</button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
