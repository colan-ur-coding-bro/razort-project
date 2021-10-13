import React from "react";
import { useContext } from "react";
import { Provide } from "../context";
import Title from "./title";

//get all unique values

const getUnique = (item, value) => {
  return [...new Set(item.map((item) => item[value]))];
};
export default function RoomsFilter({ rooms }) {
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = useContext(Provide);
  //get unique types
  let types = getUnique(rooms, "type");
  //add all
  types = ["all", ...types];
  //map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  const ppp = 600;
  //guests
  let people = getUnique(rooms, "capacity");
  people = ["all", ...people];
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search rooms"></Title>
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* guests */}
        <div className="form-group">
          <label htmlFor="capacity">guest</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end of select type */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">room price {price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control better"
          />
        </div>
        {/* end of room price */}
        {/* room size */}
        <div className="form-group">
          <label htmlFor="size">Room Size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of room size */}

        {/* pets boolean */}
        <div className="form-group">
          <div className="songle-extra">
            <label htmlFor="breakfast">breakfast</label>
            <input
              type="checkbox"
              checked={breakfast}
              onChange={handleChange}
              name="breakfast"
              id="breakfast"
            />
          </div>{" "}
          <div className="songle-extra">
            <label htmlFor="pets">pets</label>
            <input
              type="checkbox"
              onChange={handleChange}
              checked={pets}
              name="pets"
              id="pets"
            />
          </div>
        </div>
        {/* end of pets boolean */}
      </form>
    </section>
  );
}
