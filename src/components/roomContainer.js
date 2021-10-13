import React from "react";
import RoomsFilter from "./roomsFilter";
import RoomsList from "./roomsList";
import { Provide, Value } from "../context";
import { useContext } from "react";
import LoadingPage from "./Loading";

export default function roomContainer() {
  const { isLoading, sortedRooms, rooms } = Value();
  if (isLoading) {
    return <LoadingPage />;
  } else {
    return (
      <>
        <RoomsFilter rooms={rooms} />
        <RoomsList rooms={sortedRooms} />
      </>
    );
  }
}
