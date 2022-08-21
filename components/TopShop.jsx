import { Box, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../theme'

const TopShop= () => {
  return (
    <Box sx={{display:'flex',flex:4,marginTop:'2%',marginBottom: '10%'}}>
      <Box sx={{flex:1,paddingLeft:'4%',paddingTop:'8%'}}>
        <Typography sx={{
          [theme.breakpoints.up('xl')]: {
            fontSize: 24
          },
          [theme.breakpoints.between('lg','xl')]: {
            fontSize: 22
          },
          [theme.breakpoints.between('md','lg')]: {
            fontSize: 18
          },
          [theme.breakpoints.down('md')]: {
            fontSize: 16
          },
          fontFamily: 'Merriweather',
          marginBottom: '4%',
          fontWeight: '700'
        }}>
          {'Home > Shop'}
        </Typography >

        <Typography sx={{
         [theme.breakpoints.up('xl')]: {
            fontSize: 48
          },
          [theme.breakpoints.between('lg','xl')]: {
            fontSize: 42
          },
          [theme.breakpoints.between('md','lg')]: {
            fontSize: 32
          },
          [theme.breakpoints.down('md')]: {
            fontSize: 24
          },
          fontFamily: 'Merriweather',
          fontWeight: '700'
        }}>
          Shop
        </Typography>
      </Box>

      <Box sx={{
        flex:3,
        backgroundColor:'#E2E2EA',
        [theme.breakpoints.up('xl')]: {
          height: 500
        },
        [theme.breakpoints.between('lg','xl')]: {
            height: 400
        },
        [theme.breakpoints.between('md','lg')]: {
            height: 300
        },
        [theme.breakpoints.down('md')]: {
            height: 200
        }
        }}>

      </Box>
        
    </Box>
  )
}

export default TopShop