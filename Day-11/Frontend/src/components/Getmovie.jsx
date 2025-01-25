import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Getmovie = () => {
  const [news, setnews] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/getmovie")
      .then((res) => {
        // Log the response to verify its structure
        console.log(res.data);
        // Access the message array from the response and set it to state
        setnews(res.data.message);
      })
      .catch(function (error) {
        // Handle error
        console.log(error);
      })
      .finally(function () {
        // Always executed
      });
  }, []);

  return (
    <>
      <div className="container my-5">
        <div className="row text-center">
          {Array.isArray(news) && news.length > 0 ? (
            news.map((val) => {
              return (
                <div className="col my-3" key={val._id}>
                  <div className="card" style={{ width: "18rem" }}>
                    { <img src={val.image} className="card-img-top" alt="..." style={{width:"17.8rem",height:"200px"}}/> }
                    <div className="card-body">
                      <h5 className="card-title">{val.moviename}</h5>
                      <p className="card-text">{val.hero}</p>
                      <p className="card-text">{val.herione}</p>
                      <p className="card-text">{val.year}</p>
                      <p className="card-text">{val.rating}</p>

                      <a
                        href="#"
                        target="_blank"
                        className="btn btn-primary"
                      >
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No movies found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Getmovie;
