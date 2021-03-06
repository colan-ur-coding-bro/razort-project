import React from "react";
import defaultImage from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export default function Room({ room }) {
  const { theRazort, slug, images, price } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img
          style={{ height: "200px" }}
          src={images[0] || defaultImage}
          alt=""
        />{" "}
        <div className="price-top">
          <h6>${price}</h6> <p>Per Night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <div className="room-info">{theRazort}</div>
    </article>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    theRazort: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
