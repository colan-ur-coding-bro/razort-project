import React, { Component } from "react";
import Title from "./title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktail",
        info: "lorem istasj kewds eoiuts dnous has anus koedo jeff es da name adjutis! un frues, Mangi sheesh",
      },
      {
        icon: <FaHiking />,
        title: "die hiking",
        info: "lorem istasj kewds eoiuts dnous has anus koedo jeff es da name adjutis! un frues, Mangi sheesh",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info: "lorem istasj kewds eoiuts dnous has anus koedo jeff es da name adjutis! un frues, Mangi sheesh",
      },
      {
        icon: <FaBeer />,
        title: "free beer",
        info: "lorem istasj kewds eoiuts dnous has anus koedo jeff es da name adjutis! un frues, Mangi sheesh",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
