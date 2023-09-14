import './App.css';
import SearchBar from './SearchBar';
import DisplayCart from './DisplayCart';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [searchFilters, setSearchFilters] = useState({});
  const [shoppingCart, setShoppingCart] = useState({items : []});

  const updateSearchFilters = (filters) => {
      setSearchFilters(filters);
      console.log(searchFilters);
  }

  const updateShoppingCart = (item) => {
    // Directly using a list will cause referencing errors.
    const items = shoppingCart["items"];
    items.push(item);
    setShoppingCart({items : items});
    console.log(shoppingCart);
}
  // JSON.parse(JSON.stringify(obj));
  return (
    <div className="container">
      {/* Rows and columns can only be used inside container div */}

      {/* To add margin to a bootstrap element use mt-<value> */}
      <div className='row mt-3'>
      <SearchBar updateSearchFilters = {updateSearchFilters} updateShoppingCart = {updateShoppingCart}/>
      </div>
      <div className='row mt-3'>
      <DisplayCart shoppingCart = {shoppingCart.items} />
    </div>    
    </div>
  );
}

export default App;
