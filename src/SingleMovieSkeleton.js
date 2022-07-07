import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from "react-loading-skeleton";

const SingleMovieSkeleton = () => {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column my-5">
      <div className="card mb-3 single-card">
        <div className="row g-0">
          <div className="col-md-4">
            <Skeleton className='card-img-top'/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                <Skeleton width="70%"/>
              </h5>
              <p className="card-text"><Skeleton width="90%" count={3} /></p>
              <p className="card-text"><Skeleton width="30%" /></p>
              <p className="card-text">
                <small className="text-muted"><Skeleton width="50%" /></small>
              </p>
              <p className="card-text">
                <small className="text-muted"><Skeleton width="60%" /></small>
              </p>
            </div>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default SingleMovieSkeleton;