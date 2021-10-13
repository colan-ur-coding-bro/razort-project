import React, { Component } from "react";
import { Provide } from "../context";
import Room from "./Room";
import Title from "./title";
import Loading from "./Loading";

export default class featuredRooms extends Component {
  static contextType = Provide;
  render() {
    let { isLoading, featuredRooms: rooms } = this.context;
    if (rooms) {
      rooms = rooms.map((room) => {
        return <Room key={room.id} room={room} />;
      });
    }
    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">
          {isLoading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
