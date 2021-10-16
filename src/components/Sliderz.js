import React from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';

function Sliderz() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true

    }
    return (
        <Carousul {...settings}>
            <Wrap>
                <img src='/images/slider-badging.jpeg' alt='' />
            </Wrap>
            <Wrap>
                <img src='/images/slider-badag.jpeg' alt='' />
            </Wrap>
        </Carousul>
    )
}

export default Sliderz

const Carousul = styled(Slider)`
margin-top: 20px;

ul li button {
    &:before {
        font-size: 10px;
        color:rgb(150, 158, 171);;
    }
}
line-height.slick-actiove button::before {
    color: white;
}
.slick-list {
    overflow: visible;
}
button {
    z-index: 1;
}
`

const Wrap = styled.div`
img {
    border: 4px solid transparent;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 30px -10px,
    ruby-align(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;

    &:hover {
        border: 4px solid rgba(249, 249, 249, 0.8)
    }
}`