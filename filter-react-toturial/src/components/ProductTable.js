import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow';

export default function ProductTable({ products, filterText, inStockOnly }) {
        const rows = [];
        let lastCategory = null;

        products.forEach((product) => {
            //ดักจับค่าให้เป็นพิมพ์เล็กทั้งหใด indexOf จะหาตาม Array ที่ต้องการถ้าไม่เเจอ return -1
            if(product.name.toLowerCase().indexOf(
                filterText.toLowerCase()
            ) === -1
        ) {
            return;
        }

        if(inStockOnly && !product.stocked) {
            return;
        }

        if(product.category !== lastCategory) {
            rows.push (
                <ProductCategoryRow 
                    category={product.category}
                    key={product.category}
                />
            );
        }
        rows.push(
            <ProductRow 
                product={product}
                key={product.name}
            />
        );
            lastCategory = product.category;
        })
  return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
  );
}
