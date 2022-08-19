import { Box, Button, Stack, styled, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Slider  from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { theme } from '../theme'
import 'react-slideshow-image/dist/styles.css'
const Slideshow = () => {
    const Header1 = styled(Typography)({
        fontFamily:'Merriweather',
        [theme.breakpoints.up('lg')]:{
            fontSize: 48
        },
        [theme.breakpoints.between('md','lg')]: {
            fontSize: 35
        },
        [theme.breakpoints.between('sm','md')]: {
            fontSize: 25
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 14
        },
        width:'70%',
        marginBottom: '4%'
    })

    const Header2 = styled(Typography)({
        fontFamily:'DM Sans',
        [theme.breakpoints.up('lg')]:{
            fontSize: 18
        },
        [theme.breakpoints.between('md','lg')]: {
            fontSize: 10
        },
        [theme.breakpoints.between('sm','md')]: {
            fontSize: 8
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 6
        },
        width:'70%',
        color: '#9A9AB0',
        marginBottom: '4%'
    })

    const ShopButton = styled(Button)({
        alignItems: 'center',
        textTransform: 'none',
        backgroundColor: '#F86338',
        [theme.breakpoints.down('md')]: {
            width: 60,
            height: 28
        },
        [theme.breakpoints.up('md')]:{
            width: 100,
            height: 40
        },
        WebkitLineClamp:1
    })

    
  return (
    <Box sx={{display: 'flex', flex: 5, paddingTop: '5%', marginBottom: '15%'}}>
        <Box sx={{flex: 1.8, paddingLeft: '3.5%'}}>
            <Header1>Sort out Your Spring Look</Header1>
            <Header2>We will help to develop every smallest thing into a big one for your company</Header2>
            <ShopButton variant={'contained'}>
                <Typography sx={{fontFamily:'DM Sans',[theme.breakpoints.between('lg','xl')]:{fontSize:16},[theme.breakpoints.down('lg')]:{fontSize:10}}}>Shop {'>'}</Typography>
            </ShopButton>
        </Box>
        <Box sx={{display:'flex',flex: 3.2}}>
            <Box sx={{
                backgroundColor:'#E2E2EA',
                marginRight: '5%',
                [theme.breakpoints.down('md')]: {
                    width: 250,
                    height: 300
                },
                [theme.breakpoints.up('md')]: {
                    width: 500,
                    height: 600
                }}}/>
            <Box sx={{backgroundColor:'#E2E2EA',width:'35%',height:'100%'}}/>
        </Box>
    </Box>
      
  )
}

export default Slideshow