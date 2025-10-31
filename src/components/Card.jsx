import React from "react";

const Card = ({ title, content }) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        textAlign: "left",
      }}
    >
      <h3 style={{ margin: "0 0 10px" }}>{title}</h3>
      {content}
    </div>
  );
};

export default Card;
