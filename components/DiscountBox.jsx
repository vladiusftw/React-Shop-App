import { Box, Button, styled, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../theme'

const DiscountBox = () => {
    const OrangeBox = styled(Box)({
        backgroundColor:'#F86338',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            height: 400
        },
        [theme.breakpoints.down('md')]: {
            height: 200
        },
        marginLeft: '2%',
        marginRight: '2%',
        marginBottom: '10%'
    })

    const CustomButton = styled(Button)({
        alignItems: 'center',
        textTransform: 'none',
        backgroundColor: 'white',
        [theme.breakpoints.down('md')]: {
            width: 80,
            height: 28
        },
        [theme.breakpoints.up('md')]:{
            width: 120,
            height: 40
        },
        WebkitLineClamp:1
    })

  return (
    <OrangeBox>
        <Typography sx={{
            [theme.breakpoints.down('md')]:{
                fontSize:12,
                marginBottom: 2
            },
            [theme.breakpoints.up('md')]:{
                fontSize:24,
                marginBottom: 5
            },
            color: 'white',
            fontFamily: 'Merriweather'
        }}>
            March Discount
        </Typography>

        <Typography sx={{
            [theme.breakpoints.down('md')]:{
                fontSize:36,
                marginBottom: 2
            },
            [theme.breakpoints.up('md')]:{
                fontSize:64,
                marginBottom: 4
            },
            color: 'white',
            fontFamily: 'Merriweather'
        }}>
            Up to 70% off
        </Typography>

        <CustomButton variant={'contained'}>
            <Typography sx={{
                color: '#7A6005',
                [theme.breakpoints.down('md')]:{
                    fontSize:12
                },
                [theme.breakpoints.up('md')]:{
                    fontSize:16
                },
                fontFamily: 'Merriweather'
            }}>
                Got it {'>'}
            </Typography>
        </CustomButton>
    </OrangeBox>
  )
}

export default DiscountBox