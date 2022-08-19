import { Box, Container, Grid, styled, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { ListReview } from '../ListReview'
import { theme } from '../theme'
import Slider  from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ReviewArrow from '../styles/reviewArrows.css'
import { Items } from '../Items'

const Reviews = () => {

    const MessageContainer = styled(Box)({
        [theme.breakpoints.up('xl')]: {
            height: 500
        },
        [theme.breakpoints.between('lg','xl')]: {
            height: 400
        },
        [theme.breakpoints.between('md','lg')]: {
            height: 250
        },
        [theme.breakpoints.down('md')]: {
            height: 150
        },
        backgroundColor: '#FFEFEB',
        borderRadius: 8
    })

    const Message = styled(Typography)({
        [theme.breakpoints.up('xl')]: {
            fontSize: 16,
            marginTop: '10%'
        },
        [theme.breakpoints.between('lg','xl')]: {
            fontSize: 14,
            marginTop: '10%'
        },
        [theme.breakpoints.between('md','lg')]: {
            fontSize: 12,
            marginTop: '10%'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 8,
            marginTop: '4%'
        },
        fontFamily: 'DM Sans',
        color: '#515151',
        textAlign: 'center',
        
        marginLeft: '15%',
        marginRight: '15%'
    })

    const Name = styled(Typography)({
        [theme.breakpoints.up('xl')]: {
            fontSize: 24,
            marginTop: '5%'
        },
        [theme.breakpoints.between('lg','xl')]: {
            fontSize: 20,
            marginTop: '5%'
        },
        [theme.breakpoints.between('md','lg')]: {
            fontSize: 16,
            marginTop: '5%'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 8,
            marginTop: '2%'
        },
        color: '#11142D',
        textAlign: 'center',
        fontFamily: 'Merriweather'
    })

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        vertical: false,
        className: ReviewArrow
    } 
    
  return (
    <Box sx={{marginLeft:'5%',marginRight:'5%', marginBottom: '10%'}}>
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
            textAlign: 'center',
            marginBottom: '10%'
        }}>
            What Our Customer Says
        </Typography>
        <Box sx={{marginLeft: '15%',marginRight:'15%'}}>
            <Slider {...settings}>
                {
                    ListReview.map((item,index)=>{
                        return(
                            <MessageContainer key={index}>
                                <Message>{item.review}</Message>
                                <Name>{item.name}</Name>
                            </MessageContainer>
                        )
                    })
                }
            </Slider>
        </Box>
       

            
    </Box>
  )
}

export default Reviews