import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import BottomBar from "../components/BottomBar";
import DetailMain from "../components/DetailMain";
import DetailPath from "../components/DetailPath";
import Navbar from "../components/Navbar";
import Separator from "../assets/Separator.png";
import DetailDesc from "../components/DetailDesc";
import Reviews from "../components/Reviews";
import RelatedItem from "../components/RelatedItem";
import { useEffect } from "react";

const Detail = () => {
  const item = useLocation().state;

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box>
      <Navbar />
      <DetailPath item={item} />
      <DetailMain item={item} />
      <DetailDesc item={item} />
      <Reviews />
      <Box sx={{ display: "flex", flex: 3 }}>
        <Box flex={0.2} />
        <RelatedItem flex={2.6} />
        <Box flex={0.2} />
      </Box>
      <BottomBar />
    </Box>
  );
};

export default Detail;
