import React from 'react'
import { useParams } from 'react-router-dom'
import ProductList from '../helpers/ProductList';
import AudioGear from '../components/Shared/AudioGear';
import NavList from '../components/Shared/NavList';
import ProductPageCard from '../components/Product/ProductPageCard';
import BackButton from '../components/Shared/BackButton';
import Features from '../components/Shared/Features';
import ProductGallery from '../components/Product/ProductGallery';
import Recommendation from '../components/Product/Recommendation';

function ProductDetail() {
    const { category, name } = useParams();
    const product = ProductList.find((product) => product.category === category && product.urlName === name);

    if (!product) {
        return <div className='text-3xl'>Product Not Found</div>
    }

    return (
        <>
            <BackButton />
            <ProductPageCard productId={product.id} productTitle={product.name} productPrice={product.price} productImage={product.image} productDesc={product.desc} isLabel={product.isNew} />
            <Features featurePara1={product.featuresPara1} featurePara2={product.featuresPara2} includedItems={product.includedItems} />
            <ProductGallery productImg1={product.galleryImages[0]} productImg2={product.galleryImages[1]} productImg3={product.galleryImages[2]} />
            <Recommendation currentProduct={product} />
            <NavList marginTop="380px" />
            <AudioGear />
        </>
    )
}

export default ProductDetail