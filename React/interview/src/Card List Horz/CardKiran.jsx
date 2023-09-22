import React from "react";
import "./Card.css"

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

const CardList = () => {
  const cardsData = [
    { title: "Kiran", content: "This is the content of Card 1." },
    { title: "Sujith", content: "This is the content of Card 2." },
    { title: "Gokul", content: "This is the content of Card 3." },
    { title: "Kaushik", content: "This is the content of Card 4." },
  ];

  return(
  <div className="card-list">
    {cardsData.map((card,index)=>(
      <Card key={index} title={card.title} content={card.content} />
    ))}
  </div>)
};

export default CardList;
