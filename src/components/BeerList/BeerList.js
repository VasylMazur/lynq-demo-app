import React from 'react'
import { BeerCard } from '../BeerCard/BeerCard';
import './BeerList.css'

export const BeerList = ({beers, onItemClick, ...rest}) => {
  return (
    <section className="beerlist" >
      { beers.map((beer) => <BeerCard beer={beer} onItemClick={onItemClick(beer)}/>)}
    </section>
  );
}