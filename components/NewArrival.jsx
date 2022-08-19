import { Box, Button, styled, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../theme'
import Slider  from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MediumArrow from '../styles/mediumArrow.css'
import { Items } from '../Items';

const NewArrival = () => {
    const Header = styled(Box)({
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '2%',
        paddingRight: '2%',
        marginBottom: '4%'
    })

    const Item = styled(Box)({
        backgroundColor: '#E2E2EA',
        [theme.breakpoints.up('md')]: {
            height: 250
        },
        [theme.breakpoints.down('md')]: {
            height: 150
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
        slidesToShow: 4.8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        vertical: false,
        className: MediumArrow
    } 

  return (
    <Box>
        <Header>
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
                fontWeight: '700'
            }}>
                New Arrival
            </Typography>

            <Button sx={{
                color: '#F86338',
                [theme.breakpoints.up('lg')]: {
                    fontSize: 24
                },
                [theme.breakpoints.between('md','lg')]: {
                    fontSize: 18
                },
                [theme.breakpoints.between('sm','md')]: {
                    fontSize: 14
                },
                [theme.breakpoints.down('sm')]: {
                    fontSize: 12
                },
                fontFamily: 'Merriweather',
                fontWeight: '400',
                textTransform: 'none'

            }}>
                See All
            </Button>
        </Header>
        <Slider {...settings}>
            {
                Items.map((item,index)=>{
                    if(item.new == true) return(
                        <Item key={index}>
                            <img src={item.image} width={'100%'} height={'100%'} style={{aspectRatio: 'auto'}}/>
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



export default NewArrival