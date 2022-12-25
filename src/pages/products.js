import React from 'react'
import Layer from '../components/layer'
import Content from '../components/content'
import Seo from '../components/seo';

const Products = () => {
    return (
        <Layer PageTitle="Products">
            <Content Title="Products">
                {
                    "Comming Soon..."
                }
            </Content>
        </Layer>
    );
};

export default Products

export const Head = () => (
    <Seo title="Products" pathname="products"/>
)