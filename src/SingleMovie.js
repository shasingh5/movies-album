import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { URL } from "./context";
import SingleMovieSkeleton from "./SingleMovieSkeleton"

const SingleMovie = () => {
  const { id } = useParams();
  const [isloading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");
  // const [isError, setIsError] = useState({ show: false, msg: "" });

  const getMovie = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      // console.log(data);

      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);
        // console.log(data.Search);
      }
    } catch (error) {
      console.log(error);
    }
  };

  document.body.classList.add('single-body');

  useEffect(() => {
    const timerout = setTimeout(() => {
      getMovie(`${URL}&i=${id}`);
    }, 200);

    return () => clearTimeout(timerout);
  }, [id]);

  const {Poster, Title, Plot, Released, Director, Language, Year, imdbRating, Country, Genre, Actors } = movie;

  if (isloading) {
    return (
      <SingleMovieSkeleton />
    );
  }

  return (
    <div className="d-flex align-items-center justify-content-center flex-column my-5">
      <div className="card mb-3 single-card">
        <div className="row g-0">
          <div className="col-sm-4">
            <img src={
              Poster === "N/A"
                ? "https://via.placeholder.com/720x1080/eee?text=Image no available"
                : Poster
            } className="img-fluid rounded-start" alt={Title} />
          </div>
          <div className="col-sm-8">
            <div className="card-body">
              <h5 className="card-title">{Title} <small className="text-muted">({Year.substring(0, 4)})</small></h5>
              <p className="card-text">{Plot !== "N/A" ? Plot : ""}</p>
              <p className="card-text"><strong>Director :</strong> {Director}</p>
              <p className="card-text mb-2"><small className="text-muted"><strong>Actors :</strong> {Actors}</small></p>
              <p className="card-text mb-2">
                <small className="text-muted"><strong>Language:</strong> {Language} | <strong>Genre:</strong> {Genre}</small>
              </p>
              <p className="card-text mb-2">
                <small className="text-muted"><strong>Released Date:</strong> {Released}</small>
              </p>
              <p className="card-text mb-2">
                <small className="text-muted"><strong>IMDB Rating:</strong> {imdbRating}</small>
              </p>
              <p className="card-text mb-0">
                <small className="text-muted"><strong>Country:</strong> {Country}</small>
              </p>
            </div>
          </div>
        </div>
      </div>

      <NavLink className="btn btn-primary" to="/">Go Back</NavLink>
    </div>
  );
};

export default SingleMovie;
