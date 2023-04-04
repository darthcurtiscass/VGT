import React, { useState} from "react";

import { Route, NavLink, Link, Routes } from "react-router-dom";

const Quizzes = ({ quizzes }) => {
  const [image, setImage] = useState(0);
  if (!quizzes.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  const Selection = async (event) => {
    // console.log(event.target.textContent)
    console.log(event.target.textContent);
    console.log(quizzes[0].image);
    if (event.target.textContent === "Back" && image != 0) {
      setImage(image - 1);
    } else if(event.target.textContent === "Back" && image === 0) {
      setImage(image+quizzes.length-1);

    } else if (event.target.textContent === "Next" && image < quizzes.length -1) {
      setImage(image+1);
    } else if(event.target.textContent === "Next" && image === quizzes.length -1)  {
      setImage(image-quizzes.length +1)
    }
  };
  

  return (
    <div>
      {quizzes.map((quiz) => (
        <div>
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner"></div>

            <div class="carousel-item active">
              <h1>{quizzes[image].quizName}</h1>
            <NavLink to={`/quiz/${quizzes[image]._id}`} style={{color:'yellow'}}>
              <img src={quizzes[image].image} class="d-block w-75 mx-auto" alt="..." />
              </NavLink>
            </div>
          </div>
          <button
            onClick={Selection}
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <div class="bg-dark btn-sm"><span class='text-uppercase'>Back</span></div>
            
            
          </button>
          <button
            onClick={Selection}
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <div class="btn-sm bg-dark"><span class="text-uppercase">Next</span></div>
            
           
          </button>
        </div>
      ))}
    </div>
  );
};

{
  /* return (
    <div>
      {
        quizzes.map((quiz) => (

            <h4 className="">
              <NavLink to={`/quiz/${quiz._id}`}>{quiz.quizName}</NavLink> <br />
            </h4>

        ))}
    </div>
  );
}; */
}

{
  /* <Carousel autoplay>
    <div>
        <h3 style={contentStyle}><GameSelection quizzes={quizzes}/></h3>
        <img>{quiz.image}</img>
    </div>
    <div>
        <h3 style={contentStyle}>Super Metroid</h3>
        <img></img>
    </div>
    <div>
        <h3 style={contentStyle}>Elder Scrolls</h3>
    </div>
</Carousel> */
}

export default Quizzes;
