import React, { Component, createContext } from "react";
import { useContext } from "react";
import data from "./data";
import clint from "./Contentful";

export const Provide = createContext();
export const Value = () => {
  return useContext(Provide);
};
export default class ContextProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featureRooms: [],
    isLoading: true,
    type: "all",
    capacity: "all",
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  //get data
  getData = async () => {
    try {
      const datanot = await clint.getEntries({ content_type: "razortRoom" });
      const data = datanot.items;
      console.log(data);
      //
      let rooms = this.formatData(data);
      let featuredRooms = rooms.filter((item) => {
        return item.featured === true;
      });
      let maxPrice = Math.max(...rooms.map((item) => item.price));
      let maxSize = Math.max(...rooms.map((item) => item.size));
      this.setState({
        rooms: rooms,
        featuredRooms: featuredRooms,
        sortedRooms: rooms,
        isLoading: false,
        price: maxPrice,
        maxPrice,
        maxSize,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
    console.log(process.env.space);
  }

  formatData(items) {
    let tempItems = items.map((ele) => {
      let id = ele.sys.id;
      let images = ele.fields.images.map((image) => {
        return image.fields.file.url;
      });

      let room = { ...ele.fields, images: images, id: id };
      return room;
    });
    return tempItems;
  }

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    this.setState(
      () => {
        return { [name]: value };
      },
      () => {
        console.log(value);
        this.filterRooms();
      }
    );
  };
  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;

    //type filter
    let tempRooms = [...rooms];
    if (type !== "all") {
      tempRooms = tempRooms.filter((item) => item.type === type);
    }

    //capacity filter
    if (capacity !== "all") {
      tempRooms = tempRooms.filter(
        (item) => item.capacity === Number(capacity)
      );
    }

    //price filter
    tempRooms = tempRooms.filter((item) => item.price <= price);

    // size filter
    tempRooms = tempRooms.filter(
      (item) => item.size >= minSize && item.size <= maxSize
    );

    //breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((item) => item.breakfast === true);
    } else {
      tempRooms = tempRooms.filter((item) => item);
    }
    if (pets) {
      tempRooms = tempRooms.filter((item) => item.pets === true);
    }

    //set state
    this.setState({ sortedRooms: tempRooms });
  };
  render() {
    return (
      <Provide.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </Provide.Provider>
    );
  }
}
