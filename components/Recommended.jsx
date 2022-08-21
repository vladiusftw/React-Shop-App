import { Box, Grid, styled, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../theme'

const Recommended = () => {

    const items = [
        {
            name: 'Classic Blouse IX',
            price: 1000
        },
        {
            name: 'Classic Blouse IX',
            price: 1000
        },
        {
            name: 'Classic Blouse IX',
            price: 1000
        },
        {
            name: 'Classic Blouse IX',
            price: 1000
        },
        {
            name: 'Classic Blouse IX',
            price: 1000
        },
        {
            name: 'Classic Blouse IX',
            price: 1000
        },
        {
            name: 'Classic Blouse IX',
            price: 1000
        },
        {
            name: 'Classic Blouse IX',
            price: 1000
        }
    ]

    const Item = styled(Box)({
        [theme.breakpoints.up('xl')]: {
            height: 400
        },
        [theme.breakpoints.between('lg','xl')]: {
            height: 300
        },
        [theme.breakpoints.between('md','lg')]: {
            height: 250
        },
        [theme.breakpoints.between('sm','md')]: {
            height: 200
        },
        [theme.breakpoints.down('sm')]: {
            height: 150
        }
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
  return (
    <Box sx={{ marginLeft: '3%'}}>
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
            {'Recommended for you'}
        </Typography>

        <Grid container columnSpacing={2} direction={'row'} sx={{marginTop:'5%'}}>
            {
                items.map((item,index)=>{
                    return(
                        <Grid item={true} xl={3} lg={3} md={3} sm={3} xs={6} key={index} sx={{
                            [theme.breakpoints.up('xl')]: {
                                marginBottom: 20
                            },
                            [theme.breakpoints.between('lg','xl')]: {
                                marginBottom: 20
                            },
                            [theme.breakpoints.between('md','lg')]: {
                                marginBottom: 20
                            },
                            [theme.breakpoints.between('sm','md')]: {
                                marginBottom: 10
                            },
                            [theme.breakpoints.down('sm')]: {
                                marginBottom: 10
                            }
                            }}>
                            <Item>
                                <img style={{width:'100%',height:'100%',backgroundColor: '#E2E2EA'}}/>
                                <ItemName>{item.name}</ItemName>
                                <ItemPrice>{`$${item.price}`}</ItemPrice>
                            </Item>   
                        </Grid>
                    )
                })
            }
        </Grid>
    </Box>
  )
}

export default Recommended