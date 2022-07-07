import React from "react";
import Header from "./Header";
import Movie from "./Movie";
import { useGlobalContext } from "./context";

const Home = () => {
  const { isError } = useGlobalContext();

  return (
    <div className="container">
      <Header />
      <p className="text-light text-center">{isError.show && isError.msg}</p>
      <Movie />
    </div>
  );
};

export default Home;
