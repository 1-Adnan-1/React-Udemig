import React from "react";

const Course = ({ course }) => {
  const { id, title, description, price, link, image } = course;

  return (
    <div className="course">
      <img src={image} width={270} height={250} />
      <h3>{title}</h3>
      <p>{description}</p>
      <h5>₺ {price} </h5>
      <div className="a">
        <a href={link}>Udemig</a>
      </div>
    </div>
  );
};

export default Course;
