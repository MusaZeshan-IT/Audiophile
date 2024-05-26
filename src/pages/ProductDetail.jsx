import React from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import ProductList from '../helpers/ProductList';
import AudioGear from '../components/AudioGear';
import NavList from '../components/NavList';
import ProductPageCard from '../components/ProductPageCard';
import BackButton from '../components/BackButton';
import Features from '../components/Features';
import ProductGallery from '../components/ProductGallery';

function ProductDetail() {
    const { category, name } = useParams();
    const product = ProductList.find((product) => product.category === category && product.urlName === name);
    const location = useLocation();
    const navigate = useNavigate();

    if (!product) {
        return <div className='text-3xl'>Product Not Found</div>
    }

    return (
        <>
            <BackButton pathname={location.state.from} />
            <ProductPageCard productTitle={product.name} productPrice={product.price} productImage={product.image} productDesc={product.desc} isLabel={product.isNew} />
            <Features featurePara1={product.featuresPara1} featurePara2={product.featuresPara2} includedItems={product.includedItems} />
            <ProductGallery productImg1={product.galleryImages[0]} productImg2={product.galleryImages[1]} productImg3={product.galleryImages[2]}/>
            <NavList marginTop="120px" />
            <AudioGear />
        </>
    )
}

export default ProductDetail