import React, { useState } from 'react';
import Header from './components/header/Header';
import Controls from './components/controls/Controls';
import List from './components/list/List';
import Selected from './components/selected/Selected';
import { PRODUCTS } from './data';
import './App.scss';

const App = () => {
    const [products, setProducts] = useState(PRODUCTS);
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
        handleFilter();
    };

    const handleFilter = () => {
        const filteredProducts = [...PRODUCTS].filter((product) => {
            return product.title.toLowerCase().includes(searchValue.toLowerCase());
        });
        setProducts(filteredProducts);
    };

    const handleSort = (type) => {
        const types = {
            brand: 'brand',
            title: 'title',
            price: 'price',
        };
        const sortProperty = types[type];
        const sortedProducts =
            sortProperty === 'price'
                ? [...products].sort((a, b) => (a[sortProperty].finalPrice > b[sortProperty].finalPrice ? 1 : -1))
                : [...products].sort((a, b) => (a[sortProperty] > b[sortProperty] ? 1 : -1));
        setProducts(sortedProducts);
    };

    return (
        <div className='App'>
            <Header />
            <Controls handleSearchChange={handleSearchChange} handleSort={(event) => handleSort(event.target.value)} />
            <List products={products} />
            <Selected />
        </div>
    );
};

export default App;
