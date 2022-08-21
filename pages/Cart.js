import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BottomBar from "../components/BottomBar";
import CartList from "../components/CartList";
import CartPath from "../components/CartPath";
import Checkout from "../components/Checkout";
import Navbar from "../components/Navbar";
import RelatedItem from "../components/RelatedItem";

const Cart = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Box>
      <Navbar />
      <CartPath />
      <CartList />
      <Checkout />
      <Box sx={{ display: "flex", flex: 3 }}>
        <Box flex={0.2} />
        <RelatedItem flex={2.6} />
        <Box flex={0.2} />
      </Box>
      <BottomBar />
    </Box>
  );
};

export default Cart;
