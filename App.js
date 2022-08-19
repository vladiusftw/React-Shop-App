import { Box } from "@mui/material";
import BestSeller from "./components/BestSeller";
import BottomBar from "./components/BottomBar";
import DiscountBox from "./components/DiscountBox";
import Dresses from "./components/Dresses";
import Navbar from "./components/Navbar";
import NewArrival from "./components/NewArrival";
import Reviews from "./components/Reviews";
import Slideshow from "./components/Slideshow";
function App() {
  return (
    <Box>
      <Navbar />
      <Slideshow />
      <Dresses />
      <NewArrival />
      <DiscountBox />
      <BestSeller />
      <Reviews />
      <BottomBar />
    </Box>
  );
}

export default App;
