import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import NFTcard from './NFTcard';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1300, min: 764 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const BidSlider = () => {
  return <Carousel additionalTransfrom={0} arrows={true} autoPlay={true} autoPlaySpeed={5000} centerMode={false} infinite responsive={responsive} itemClass='item'>
    <div>
          <NFTcard image="/images/nft1.svg" title="Warrior" author="Alexandria" price="0.34"/>
        </div>
        <div>
          <NFTcard image="/images/nft2.svg" title="Magnificent" author="Drake" price="1.66"/>
        </div>
        <div>
          <NFTcard image="/images/nft3.svg" title="Conqueror" author="=Joe" price="0.51"/>
        </div>
        <div>
          <NFTcard image="/images/nft4.svg" title="Terrible" author="Tarley" price="1.02"/>
        </div>
        <div>
          <NFTcard image="/images/nft5.svg" title="Great" author="Baldwin" price="2.94"/>
        </div>
        <div>
          <NFTcard image="/images/nft6.svg" title="Sick" author="Connor" price="0.44"/>
        </div>

  </Carousel>
}

export default BidSlider