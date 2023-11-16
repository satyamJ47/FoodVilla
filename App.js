import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
// Header
//     -Logo
//     -Nav Items
//         -Home
//         -Contact us
//     -Cart
//     -Log In/Sign In
// Body
//     -Search Bar
//     -Cards Section
//         -card
//             -Image
//             -Name
//             -restaurant
//             -ratings
// Footer
//     -Links

const Applayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
