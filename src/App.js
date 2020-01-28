import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { BeerList } from './components/BeerList/BeerList';
import { MOCK_BEERS } from './mock/Beers';
import { CartItem } from './components/CartItem';

function App() {
  const [beerType, setBeerType] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const [fullPrice, setFullPrice] = useState(0);
  const [cartStatus, setCartStatatus] = useState('closed');
  const handleSetCartItems = item => () => {
    setCartStatatus('half-opened');
    setCartItems([...cartItems, { ...item, count: 1 }]);
    setFullPrice(fullPrice + item.price);
  };
  const removeItem = (id, itemPrice) => {
    const nextCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(nextCartItems);
    setFullPrice(fullPrice - itemPrice);
  };
  const changePrice = (priceDiff, id, isIncrement) => {
    setFullPrice(fullPrice + priceDiff)
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        return { ...item, count: isIncrement? item.count + 1 : item.count - 1}
      }
      return item
    }))
  };
  return (
    <Router>
      <div className="App">
        <h1>DEMO APP</h1>
        <nav className="main-menu">
          <NavLink
            className="navlink"
            activeClassName="navlink--active"
            to="/drinks"
          >
            <h2>Drinks</h2>
          </NavLink>
          <NavLink
            className="navlink"
            activeClassName="navlink--active"
            to="/food"
          >
            <h2>food</h2>
          </NavLink>
          <NavLink
            className="navlink"
            activeClassName="navlink--active"
            to="/all"
          >
            <h2>all</h2>
          </NavLink>
          <NavLink
            className="navlink"
            activeClassName="navlink--active"
            to="/search"
          >
            <h2>search</h2>
          </NavLink>
        </nav>
        <Switch>
          <Route path="food">
            <span>food</span>
          </Route>
          <Route path="/drinks">
            <nav className="submenu">
              <span
                className="submenu__item"
                onClick={() => setBeerType('all')}
              >
                All
              </span>
              <span
                className="submenu__item"
                onClick={() => setBeerType('pizza')}
              >
                Pizza
              </span>
              <span
                className="submenu__item"
                onClick={() => setBeerType('steak')}
              >
                Steak
              </span>
            </nav>
            <BeerList
              beers={MOCK_BEERS.filter(
                beer => beer.type === beerType || beerType === 'all'
              )}
              onItemClick={handleSetCartItems}
            />
          </Route>
          <Route exact path="/">
            <Redirect to="drinks" />
          </Route>
        </Switch>
      </div>
      {cartStatus === 'opened' && (
        <div className="cart">
          <h3 onClick={() => setCartStatatus('closed')}>Shopping cart</h3>
          {cartItems.map((cartItem, cartIndex) => (
            <CartItem
              item={cartItem}
              removeItem={removeItem}
              changePrice={changePrice}
            />
          ))}
          <p>Total price: {fullPrice}</p>
        </div>
      )}
      {cartStatus === 'half-opened' && (
        <div className="cart">
          <h3 onClick={() => setCartStatatus('opened')}>Shopping cart</h3>
          <CartItem
            item={cartItems[cartItems.length - 1]}
            removeItem={removeItem}
            changePrice={changePrice}
          />
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
