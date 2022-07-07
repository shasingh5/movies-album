import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from "react-loading-skeleton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const MovieListSkeleton = () => {
  const arrays = [1,2,3,4,5];
  return (
    <div>
      <Row className="row-cols-1" sm={2} md={3} lg={4} xl={5}>
        {arrays.map((array) => {
          return (
            <Col key={array} className="mb-4">
              <div className="movie-card">
                <Card>                  
                  <div><Skeleton className='card-img-top' /></div>
                  <Card.Body>
                    <Card.Title className="mb-0">
                      <Skeleton width="80%" />
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  )
}

export default MovieListSkeleton;