import React, { Component , useState } from 'react';
import { Query } from 'react-apollo';
import PRODUCTS_QUERY from './Products/Queries';
import { Box } from './Products/BoxContainer';
import ShoppingCart from './ShoppingCart'

const WineBox = (props) =>  {

    return (
      <Query query={PRODUCTS_QUERY}>
       {({ loading, error, data }) => {

          if (loading) return <div>Fetching products.....</div>
          if (error)   return <div>Error fetching products</div>

          const items = data.products;

          return (
            
            <div class="wineboxContainer">
                <div class="row" id="topRow">
                    
                {items.map(item => <Box product={item} cart={props.cart} setCart={props.setCart}/>)}
                </div>
            </div>
          )
        }}
      </Query>
    );
  }

export default WineBox;