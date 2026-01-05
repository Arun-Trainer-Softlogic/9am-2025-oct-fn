import React from 'react'

function ProductList() {
    const product = [
        { id: 1 , name: "Nike Air force one "},
        { id: 2 , name: "Adidas  Super Nova "}
    ];


    return (
        <div>
            {product.length === 0 ? (
                <p>No product Available </p>
            ) : (
                <ul>
                    {product.map((item) => (
                        <li key={item.id} style={{listStyle:"none"}}> {item.name}</li>
                    ))}
                </ul>

            )}
        </div>
    )
}

export default ProductList