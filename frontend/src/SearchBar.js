import {useState} from "react";

function SearchBar(props){
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");
    

    function searchButtonPressed(){
        console.log(name);
        console.log(price);
        console.log(type);
        console.log(brand);

        // Never send object states directly to avoid referencing issues.
        props.updateSearchFilters({name : name, price: price, type : type, brand: brand});
    }

    function addItemPressed(){
        props.updateShoppingCart({name : name, price: price, type : type, brand: brand});
    }

    return(
    <div className="container">
        <h1>Search or Add Item</h1>
        <form action="">
            {/* Using row and col classes to organize our search bar */}
            <div className="row">
                <div className="col">
                <label htmlFor="name-input">Name</label>
                {/* We can add a better input style using form controls class. */}
                <input className="form-control" type="text" id="name-input"  value = {name} onChange={(e) => setName(e.target.value)}/>
                </div>

                <div className="col">
                <label htmlFor="price-input">Price</label>
                <input className="form-control" type="number" id="price-input"  value = {price} onChange={(e) => setPrice(e.target.value)}/>
                </div>            
                    
                <div className="col">
                <label htmlFor="type-input">Type</label>
                <input className="form-control" type="text" id="type-input"  value = {type} onChange={(e) => setType(e.target.value)}/>
                </div>    
                            
                <div className="col">
                <label htmlFor="brand-input">Brand</label>
                <input className="form-control" type="text" id="brand-input"  value = {brand} onChange={(e) => setBrand(e.target.value)}/>
                </div>
            </div>
            <div className="row">
            <div className="col-4">
                    
                </div>
                {/* A better button style */}
                <button type = "button" className="col-4 btn btn-primary" onClick={searchButtonPressed}>Search</button>
            </div>
            <div className="row">
                {/* We can specify the number of columns our element takes the following way. */}
                {/* Empty element will take up four columns from the left */}
                <div className="col-4">                    
                </div>
                {/* Our button element will take four columns from here. */}
                <button type = "button" className="col-4 btn btn-secondary" onClick={addItemPressed}>Add</button>
            </div>
        </form>

    </div>
    )
}

export default SearchBar;