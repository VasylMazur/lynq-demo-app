import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { BeerList } from './components/BeerList/BeerList';
import { MOCK_BEERS } from './mock/Beers';

function App() {
  const [beerType, setBeerType] = useState('all')
  const [cartItems, setCartItems] = useState([])
  const [fullPrice, setFullPrice] = useState(0)
  const [cartStatus, setCartStatatus] = useState('closed')
  const handleSetCartItems = (item) => () => {
    setCartStatatus('half-opened')
    setCartItems([...cartItems, {...item}])
    setFullPrice(fullPrice + item.price);
  }
  return (
    <Router>

    <div className="App">
      <h1>DEMO APP</h1>
      <nav className="main-menu">
        <NavLink className="navlink" activeClassName="navlink--active" to="/drinks">
          <h2>Drinks</h2>
        </NavLink>
        <NavLink className="navlink" activeClassName="navlink--active" to="/food">
          <h2>
            food
            </h2>
        </NavLink>
        <NavLink className="navlink" activeClassName="navlink--active" to="/all">
          <h2>

          all
          </h2>
        </NavLink>
        <NavLink className="navlink" activeClassName="navlink--active" to="/search">
          <h2>

          search
          </h2>
        </NavLink>
      </nav>
      <Switch>

        <Route path='food'>
          <span>food</span>
        </Route>
        <Route path='/drinks'>

      <nav className="submenu">
        <span className="submenu__item" onClick={() => setBeerType('all')}>
          All
        </span>
        <span className="submenu__item" onClick={() => setBeerType('pizza')}>
          Pizza
        </span>
        <span className="submenu__item" onClick={() => setBeerType('steak')}>
          Steak
        </span>
      </nav>
      <BeerList beers={MOCK_BEERS.filter(beer => beer.type === beerType || beerType=== 'all')} onItemClick={handleSetCartItems}/>
        </Route>
      <Route exact path='/'>
        <Redirect to="drinks"/>
      </Route>
      </Switch>
    </div>
    {cartStatus === 'opened' && 
    <div className="cart">
      <h3 onClick={() => setCartStatatus('closed')}>Shopping cart</h3>
      {cartItems.map((cartItem, cartIndex) => (<div className="cart__item">
        <span>{cartItem.name}</span> 
        <div>

        <button onClick={() => setFullPrice(fullPrice - cartItems[cartItems.length - 1].price)} className="decrement">-</button>
        <span>{cartItems[cartItems.length - 1].price}</span>
        <button onClick={() => setFullPrice(fullPrice + cartItems[cartItems.length - 1].price)} className="increment">+</button>
        </div>
        <button 
          onClick={() => setCartItems(cartItems.filter((_item, index) => index !== cartItems.length - 1 ))} className="remove">remove</button>
        </div>))}
        <p>Total price: {fullPrice}</p>
    </div>
    }
    {cartStatus === 'half-opened' && (
      <div className="cart">
      <h3 onClick={() => setCartStatatus('opened')}>Shopping cart</h3>
      <div className="cart__item">
        <span>{cartItems[cartItems.length - 1].name}</span> 
        <div>

        <button onClick={() => setFullPrice(fullPrice - cartItems[cartItems.length - 1].price)} className="decrement">-</button>
      <span>{cartItems[cartItems.length - 1].price}</span>
        <button onClick={() => setFullPrice(fullPrice + cartItems[cartItems.length - 1].price)} className="increment">+</button>
        </div>
        <button 
          onClick={() => {setCartItems(cartItems.filter((_item, index) => index !== cartItems.length - 1 )); setCartStatatus('closed')}} className="remove">remove</button>
        </div>
        <p>Total price: {fullPrice}</p>
    </div>
    )}
    {cartStatus === 'closed' && (
      <div className="cart">
        <h3 onClick={() => setCartStatatus('opened')}>Shopping cart</h3>
      </div>
    )}
    </Router>
  );
}

export default App;
