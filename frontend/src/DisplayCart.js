const DisplayCart = (props)=>{


    return(
        <div>
            {props.shoppingCart.map( (
                item => {
                    return(
                        <div className="container">
                            <div className="row">
                            <div className="col">
                            <p>Item #{props.shoppingCart.indexOf(item) + 1}</p>
                            </div>
                            <div className="col">
                            <p>Name: {item.name}</p>
                            </div>
                            <div className="col">
                            <p>Price: {item.price}</p>
                            </div>
                            <div className="col">
                            <p>Type: {item.type}</p>
                            </div>
                            <div className="col">
                            <p>Name: {item.brand}</p>
                            </div>     
                            </div>  
                        </div>
                    )
            }))}
        </div>
    )
}

export default DisplayCart;