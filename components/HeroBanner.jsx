import Link from 'next/link'
import React from 'react'

import { urlFor } from '../lib/client'

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className='beats-solo'> {heroBanner.smallText} </p>
            <h3>{heroBanner.midText}</h3>
            <h1>{heroBanner.largeText1}</h1>
            <h4 style={{marginTop:'30px'}}>{heroBanner.discount}</h4>
            <img src={urlFor(heroBanner.image)} alt='headphones' className='hero-banner-image' />
        </div>
        <div>
            <Link href={`/product/${heroBanner.product}`}>
                <button type='button'>{heroBanner.buttonText}</button>
            </Link>
            <div className='desc' style={{marginLeft:'50px'}}>
                <h5>Description</h5>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner