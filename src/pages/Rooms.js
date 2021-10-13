import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/roomContainer";

export default function Rooms() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="out room" subtitle="sub tit">
          <Link to="/" className="btn-primary">
            {" "}
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
}
