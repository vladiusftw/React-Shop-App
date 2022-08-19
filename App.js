import { Box, Typography } from "@mui/material";
import Dresses from "./components/Dresses";
import Navbar from "./components/Navbar";
import NewArrival from "./components/NewArrival";
import Slideshow from "./components/Slideshow";
function App() {
  return (
    <Box>
      <Navbar />
      <Slideshow />
      <Dresses />
      <NewArrival />
    </Box>
  );
}

export default App;
