import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import Services from "../components/services";
import FeaturedRooms from "../components/featuredRooms";

export default function home() {
  return (
    <>
      <Hero>
        <Banner
          title="luxuirus room"
          substitle="delux rooms starting fro m299$"
        >
          <Link to="/room" className="btn-primary">
            {" "}
            Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}
