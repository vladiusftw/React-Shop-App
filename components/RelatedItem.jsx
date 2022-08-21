import { Box, Grid, styled, Tooltip, Typography, Button, Autocomplete, TextField, Menu, MenuItem, Pagination, Slider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FilterIcon from '../assets/filterIcon.png'
import FilterLine from '../assets/filterLine.png'
import ListIcon from '../assets/listViewIcon.png'
import GridIcon from '../assets/gridViewIcon.png'
import { Items } from '../Items'
import { theme } from '../theme'
import SearchBar from '../styles/searchBar.css'
import { KeyboardArrowDown } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const RelatedItem = (props) => {

    const tempItems = [
        {
            category: 'Bags',
            name: "Queen's Summer",
            desc: 'Medium Shoulder Bag',
            price: 1000
        },
        {
            category: 'Bags',
            name: "Queen's Summer",
            desc: 'Medium Shoulder Bag',
            price: 1000
        },
        {
            category: 'Bags',
            name: "Queen's Summer",
            desc: 'Medium Shoulder Bag',
            price: 1000
        },
        {
            category: 'Bags',
            name: "Queen's Summer",
            desc: 'Medium Shoulder Bag',
            price: 1000
        }
    ]

    const Item = styled(Box)({
        [theme.breakpoints.up('xl')]: {
            height: 450
        },
        [theme.breakpoints.between('lg','xl')]: {
            height: 350
        },
        [theme.breakpoints.between('md','lg')]: {
            height: 300
        },
        [theme.breakpoints.between('sm','md')]: {
            height: 200
        },
        [theme.breakpoints.down('sm')]: {
            height: 250
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

  return (
    <Box sx={{paddingBottom:'5%',flex:props.flex ? props.flex : 0}}>
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
            {'Related Items'}
        </Typography>

        <Grid container spacing={2} direction={'row'} sx={{marginTop:'5%'}}>
            {
                tempItems.map((item,index)=>{
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
                            },
                            
                            }}>
                            <Item>
                                <Link to={'/Detail'} state={item}>
                                    <img style={{width:'100%',height:'100%',backgroundColor:'#E2E2EA'}}/>
                                </Link>
                                <ItemCategory>{item.category}</ItemCategory>
                                <ItemName>{item.name}</ItemName>
                                <ItemDesc>{item.short}</ItemDesc>
                                <ItemPrice>${item.price}</ItemPrice>
                            </Item>   
                        </Grid>
                    )
                })
            }
        </Grid>
    </Box>
  )
}

export default RelatedItem