import { Box } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BottomBar from "../components/BottomBar";
import Navbar from "../components/Navbar";
import Recommended from "../components/Recommended";
import ShopPage from "../components/ShopPage";
import TopShop from "../components/TopShop";

const Shop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Box>
      <Navbar />
      <TopShop />
      <ShopPage />
      <Recommended />
      <BottomBar />
    </Box>
  );
};

export default Shop;
