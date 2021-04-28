import React, { Component , useState } from 'react';
import { Query } from 'react-apollo';
import PRODUCTS_QUERY from './Queries';
import { WineBoxes } from '../WineBoxes';
import Product from './Product';
import ShoppingCart from '../ShoppingCart'

const AllProducts = () =>  {

    const[cart,setCart] = useState([]);

    console.log(cart);

    return (
      <Query query={PRODUCTS_QUERY}>
       {({ loading, error, data }) => {

          if (loading) return <div>Fetching products.....</div>
          if (error)   return <div>Error fetching products</div>

          const items = data.products;

          return (
            <div class="wineboxContainer">
                <div class="row" id="topRow">
                    
                {items.map(item => <WineBoxes product={item} cart={cart} setCart={setCart}/>)}
                </div>
            </div>
          )
        }}
      </Query>
    );
  }

export default AllProducts;