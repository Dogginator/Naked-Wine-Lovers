import React, { Component , useState } from 'react';
import { Query } from 'react-apollo';
import PRODUCTS_QUERY from './Products/Queries';
import { Box } from './Products/BoxContainer';
import { useDispatch, useSelector } from 'react-redux';
import { INSERT_PRODUCTS } from '../actions';
import OverlayCart from './OverlayCart'

const WineBox = () =>  {

  const dispatch = useDispatch();
  const items = useSelector(state => state.productsCMS);

    return (
      <Query query={PRODUCTS_QUERY}>
       {({ loading, error, data }) => {

          if (loading) return <div>Fetching products.....</div>
          if (error)   return <div>Error fetching products</div>

          dispatch(INSERT_PRODUCTS(data.products));
          //const items = data.products;

          return (
            <>
              <header className="wineboxHeader">
                <h2>JOIN THE CLUB!</h2>
                <p>Hitta det perfekta naturvinet för dig!
                Du väljer, vi levererar hem till dörren, inga konstigheter.
         <br></br>Nånting om att natutligt är bra, ekologiskt, giftfritt, glada vinodlare</p>
          <img src="/Images/grape.png"></img>
              </header>
            <div class="wineboxContainer">
                <div class="row" id="topRow">
                    
                {items.map(item => <Box key={item.prodid} product={item}/>)}
                </div>
            </div>
          </>
          )}}
      </Query>
    );
  }

export default WineBox;