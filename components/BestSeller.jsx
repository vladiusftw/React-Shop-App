import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../theme'
import Slider  from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Items } from '../Items';
import MediumArrow from '../styles/mediumArrow.css'
import { Link } from 'react-router-dom';

const BestSeller = () => {

    const Item = styled(Box)({
        [theme.breakpoints.up('xl')]: {
            height: 500
        },
        [theme.breakpoints.between('lg','xl')]: {
            height: 400
        },
        [theme.breakpoints.between('md','lg')]: {
            height: 350
        },
        [theme.breakpoints.down('md')]: {
            height: 200
        }
    })

    const ItemCategory = styled(Typography)({
        color: '#F3692E',
        fontFamily: 'DM Sans',
        [theme.breakpoints.up('md')]: {
            fontSize: 14,
            marginTop: 20
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 12,
            marginTop: 10
        },
        textAlign: 'center',
        fontWeight: '500'
    })

    const ItemName = styled(Typography)({
        [theme.breakpoints.up('md')]: {
            fontSize: 16,
            marginTop: 8
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 10,
            marginTop: 4
        },
        fontFamily: 'Merriweather',
        fontWeight: '700',
        textAlign: 'center'
    })

    const ItemDesc = styled(Typography)({
        [theme.breakpoints.up('md')]: {
            fontSize: 12,
            marginTop: 12
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 8,
            marginTop: 8
        },
        fontFamily: 'DM Sans',
        textAlign: 'center',
        color: '#515151',
        fontWeight: '400'

    })

    const ItemPrice = styled(Typography)({
        [theme.breakpoints.up('md')]: {
            fontSize: 14,
            marginTop: 14
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 12,
            marginTop: 6
        },
        fontFamily: 'Merriweather',
        fontWeight: '700',
        color: '#F3692E',
        textAlign: 'center'
    })

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        vertical: false,
        className: MediumArrow
    } 
  return (
    <Box sx={{marginLeft: '2%',marginRight:'2%',marginBottom: '10%'}}>
        <Typography sx={{
                [theme.breakpoints.up('lg')]: {
                    fontSize: 48
                },
                [theme.breakpoints.between('md','lg')]: {
                    fontSize: 32
                },
                [theme.breakpoints.between('sm','md')]: {
                    fontSize: 24
                },
                [theme.breakpoints.down('sm')]: {
                    fontSize: 16
                },
                fontFamily: 'Merriweather',
                fontWeight: '700',
                marginBottom: '2%'
            }}>
                Best Seller
            </Typography>
            <Slider {...settings}>
                {
                    Items.map((item,index)=>{
                        if(item.bestseller == true) return(
                            <Item key={index}>
                                <Link to={'/detail'} state={item}>
                                    <img src={item.images[0]} width={'100%'} height={'100%'} style={{aspectRatio: 'auto', zIndex: -1, position: 'relative'}}/>
                                </Link>
                                <ItemCategory>{item.category}</ItemCategory>
                                <ItemName>{item.name}</ItemName>
                                <ItemDesc>{item.short}</ItemDesc>
                                <ItemPrice>${item.price}</ItemPrice>
                            </Item>
                        )
                    })
                }
            </Slider>
            
    </Box>
  )
}

export default BestSeller