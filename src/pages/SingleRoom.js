import React, { Component } from "react";
import { useParams } from "react-router";
import defaultBcg from "../images/room-2.jpeg";
import Hero from "../components/Hero";
import Baneer from "../components/banner";
import { Link } from "react-router-dom";
import { Provide } from "../context";
import Banner from "../components/banner";
import HeroStyled from "../components/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.match.params.thot,
      defaultBcg,
    };
  }

  componentDidMount() {}
  static contextType = Provide;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <>
          <div className="error">
            <h2>No Such Room Could Be Found</h2>
            <Link to="/" className="btn-primary">
              Back to Home
            </Link>
          </div>
        </>
      );
    }
    const {
      name,
      description,
      price,
      breakfast,
      pets,
      images,
      capacity,
      size,
      extras,
    } = room;
    const [mainImg, ...defaultImg] = images;
    return (
      <>
        <HeroStyled image={mainImg} hero="roomsHero">
          <Banner title={`${name} room `}>
            <Link to="/room" className="btn-primary">
              Back To Rooms
            </Link>
          </Banner>
        </HeroStyled>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt="" />;
            })}
          </div>
          <div className="single-room-info">
            <article className="description">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: {size} SQFT</h6>
              <h6>
                Max Capacity {capacity} {capacity > 1 ? "people" : "person"}
              </h6>
              <h6>pets: {pets ? "allowed" : "not allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
