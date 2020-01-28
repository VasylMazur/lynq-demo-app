import React, { useState, useEffect } from 'react'
import uuid from 'uuid'
import './BeerCard.css'
export const BeerCard = ({beer, onItemClick}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleCloseModal = (e) => {
    if (!e.target.closest('.modal') && isModalVisible) {
      setIsModalVisible(false)
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleCloseModal);
    return () =>{
      document.removeEventListener('click', handleCloseModal);
    }
  })
  return (
    <>
    <div key={uuid()} className="card" onClick={() => setIsModalVisible(true)}>
      <img src={beer.photoUrl} alt="beerimg" className="beerimg"/>
      <p className="beer__name"> {beer.name} </p>
    </div>
    {isModalVisible && (
      <div className="modal">
        <div className="modal-content">

        <div className="description">
        <h2>{beer.name}</h2>
        <p>{beer.description}</p>
        <p>{beer.price}</p>
        </div>
        <div className="rightside">
        <img className="desc-img" src={beer.photoUrl} alt=""></img>
        </div>
        </div>
        <button onClick={() =>{onItemClick(); setIsModalVisible(false)}} className="addtocart">add to cart</button>

      </div>
    )}
    </>
  )
}