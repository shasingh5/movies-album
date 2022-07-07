import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
import MovieListSkeleton from "./MovieListSkeleton";

const Movie = () => {
  const { movie, isloading, page, setPage, results } = useGlobalContext();

  // let count = 1;
  const handleNextPage = (page) => {
    page += 1;
    setPage(page);
    // console.log(page);
  };

  const handlePrevPage = (page) => {
    page -= 1;
    setPage(page);
    // console.log("Prev", page);
  };

  if (isloading) {
    return (
      <div>
        <MovieListSkeleton />
      </div>
    );
  }

  document.body.classList.remove('single-body');

  return (
    <div>
      <Row className="row-cols-1" sm={2} md={3} lg={4} xl={5}>
        {movie.map((currmovie) => {
          const { imdbID, Poster, Title, Type, Year } = currmovie;
          const movieName = Title.substring(0, 18);

          return (
            <Col key={imdbID} className="mb-4">
              <NavLink className="movie-card" to={`movie/${imdbID}`}>
                <Card>
                  <div className="movie-header d-flex justify-content-between">
                    <span className="badge rounded-pill bg-info">{`${Type.charAt(
                      0
                    ).toUpperCase()}${Type.slice(1)}`}</span>

                    <span className="badge rounded-pill bg-info">
                      Release : {Year}
                    </span>
                  </div>
                  <Card.Img
                    variant="top"
                    src={
                      Poster === "N/A"
                        ? "https://via.placeholder.com/720x1080/eee?text=Image no available"
                        : Poster
                    }
                  />
                  <Card.Body>
                    <Card.Title className="mb-0">
                      {movieName.length >= 18 ? `${movieName}...` : movieName}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </NavLink>
            </Col>
          );
        })}
      </Row>
      <div className="d-flex align-items-center justify-content-between mb-4">
        {page === 1 ? (
          <button type="button" className="btn btn-primary" disabled>
            Prev
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handlePrevPage(page)}
          >
            Prev
          </button>
        )}
        <p className="text-light mb-0">{(page * 10 ) > results ? results : (page * 10) }/{results}</p>
        {results <= (page * 10) ? (
          <button type="button" className="btn btn-primary" disabled>
            Next
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleNextPage(page)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Movie;
