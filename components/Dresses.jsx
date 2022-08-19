import { Box, Button, Grid, styled, Typography } from '@mui/material'
import React from 'react'
import { Items } from '../Items'
import { theme } from '../theme'
import { ArrowForward } from '@mui/icons-material'



const Dresses = () => {
    const Item = styled(Box)({
        [theme.breakpoints.up('lg')]: {
            height: 600,
            gap: 30
        },
        [theme.breakpoints.between('md','lg')]: {
            height: 500,
            gap: 20
        },
        [theme.breakpoints.between('sm','md')]: {
            height: 400,
            gap: 20
        },
        [theme.breakpoints.down('sm')]: {
            height: 300,
            gap: 20
        },
        backgroundColor: '#E2E2EA',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingLeft: '10%',
        paddingBottom: '10%'
    })

    const Category = styled(Typography)({
        [theme.breakpoints.up('lg')]: {
            fontSize: 48
        },
        [theme.breakpoints.between('md','lg')]: {
            fontSize: 32
        },
        [theme.breakpoints.between('sm','md')]: {
            fontSize: 32
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 48
        },
        fontFamily: 'Merriweather'
    })

    const Desc = styled(Typography)({
        [theme.breakpoints.up('lg')]: {
            fontSize: 16
        },
        [theme.breakpoints.between('md','lg')]: {
            fontSize: 12
        },
        [theme.breakpoints.between('sm','md')]: {
            fontSize: 12
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 16
        },
        fontFamily: 'DM Sans',
        color: '#9A9AB0',
        width: '80%'
    })

    const GoButton = styled(Button)({
        [theme.breakpoints.up('lg')]: {
            width: 40,
            height: 40
        },
        [theme.breakpoints.between('md','lg')]: {
            width: 30,
            height: 30
        },
        [theme.breakpoints.between('sm','md')]: {
            width: 30,
            height: 30
        },
        [theme.breakpoints.down('sm')]: {
            width: 40,
            height: 40
        },
        backgroundColor: '#F86338',
        color: 'white',
        borderRadius: 30
    })

    
  return (
    <Grid container spacing={2} sx={{paddingLeft: '2%',paddingRight: '2%', paddingBottom: '10%'}}>
        <Grid item={true} xl={4} lg={4} md={4} sm={6} xs={12}>
            <Item>
                <Category>Dresses</Category>
                <Desc>Lorem Ipsum is simply dummy text of the printing and typescripting industry</Desc>
                <GoButton><ArrowForward /></GoButton>
            </Item>
        </Grid>
        <Grid item={true} xl={4} lg={4} md={4} sm={6} xs={12}>
            <Item></Item>
        </Grid>
        <Grid item={true} xl={4} lg={4} md={4} sm={6} xs={12}>
            <Item></Item>
        </Grid>
        <Grid item={true} xl={4} lg={4} md={4} sm={6} xs={12}>
            <Item></Item>
        </Grid>
        <Grid item={true} xl={4} lg={4} md={4} sm={6} xs={12}>
            <Item></Item>
        </Grid>
        <Grid item={true} xl={4} lg={4} md={4} sm={6} xs={12}>
            <Item></Item>
        </Grid>
        
    </Grid>
  )
}

export default Dresses