import React from 'react';
import Navbar from '../features/navbar/Navbar';
import ProductList from '../features/product/components/ProductList';

function Home(props) {
    return (
       <Navbar>
        <ProductList/>
       </Navbar>
    );
}

export default Home;