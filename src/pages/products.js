import React from 'react'
import Layer from '../components/layer'
import Content from '../components/content'
import Seo from '../components/seo';

const Products = () => {
    return (
        <Layer PageTitle="Products">
            <Seo title="LukeHome"
                description="Student / Programmer" 
                image="/icons/icon-512x512.png" 
                lang="ja"
            />
            <Content Title="Products">
                {
                }
            </Content>
        </Layer>
    );
};

export default Products