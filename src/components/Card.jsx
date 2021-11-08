import React from 'react'

function Card({ name,status,species,type,gender,image}) {

    return (
      <div
        style={{ border: "1px solid black", display: "flex", padding: "25px" }}
      >
        <div style={{ padding: "10px" }}>
          <img src={image} height={"100px"} width={"100px"} alt="" />
        </div>
        <div style={{ padding: "10px" }}>
          <div> Name : {name}</div>
          <div> Gender : {gender}</div>
          <div>Status : {status}</div>
          <div>Species : {species}</div>
          <div>Type : {type}</div>
        </div>
      </div>
    );
}

export default Card
