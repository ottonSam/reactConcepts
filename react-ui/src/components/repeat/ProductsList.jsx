import React from 'react';
import products from '../../data/products';

import './ProductsList.css';

export default (props) => {
    const list = products.map((product, i) => {

        return (
            <tr key={product.id} className={i % 2 === 0 ? 'Pair' : 'Odd'}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        )
    });

    return (
        <div className="TableProducts">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>
        </div>
    );
};