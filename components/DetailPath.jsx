import { Box, styled, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { theme } from '../theme'

const DetailPath = (props) => {
    const LeftBox = styled(Box)({
        flex: 1.8,
        [theme.breakpoints.up('lg')]:{
            paddingTop: 180,
            paddingLeft: 40
        },
        [theme.breakpoints.between('md','lg')]: {
            paddingTop: 140,
            paddingLeft: 40
        },
        [theme.breakpoints.between('sm','md')]: {
            paddingTop: 100,
            paddingLeft: 40
        },
        [theme.breakpoints.down('sm')]: {
            paddingTop: 10,
            paddingLeft: 4
        },
        
    })

    const RightBox = styled(Box)({
        flex: 1.2,
        [theme.breakpoints.up('lg')]:{
            height: 500
        },
        [theme.breakpoints.between('md','lg')]: {
            height: 450
        },
        [theme.breakpoints.between('sm','md')]: {
            height: 275
        },
        [theme.breakpoints.down('sm')]: {
            height: 250
        },
    })

  return (
    <Box sx={{display:'flex',flex:3,marginBottom: '5%'}}>
        <LeftBox>
            <Typography sx={{
                [theme.breakpoints.up('lg')]:{
                    fontSize: 24
                },
                [theme.breakpoints.between('md','lg')]: {
                    fontSize: 16
                },
                [theme.breakpoints.between('sm','md')]: {
                    fontSize: 12
                },
                [theme.breakpoints.down('sm')]: {
                    fontSize: 12
                },
                fontFamily: 'Merriweather',
                fontWeight: '700'
            }}>
                {`Home > Shop > ${props.item?.category} > ${props.item?.name}`}
            </Typography>

            <Typography sx={{
                [theme.breakpoints.up('lg')]:{
                    fontSize: 48,
                    marginTop: 4
                },
                [theme.breakpoints.between('md','lg')]: {
                    fontSize: 36,
                    marginTop: 2
                },
                [theme.breakpoints.between('sm','md')]: {
                    fontSize: 20,
                    marginTop: 1
                },
                [theme.breakpoints.down('sm')]: {
                    fontSize: 24,
                    marginTop: 0
                },
                fontFamily: 'Merriweather',
                fontWeight: '700'
            }}>
                {props.item?.name}
            </Typography>
        </LeftBox>

        <RightBox>
            <img src={props.item?.images[0]} width={'100%'} height={'100%'}/>
        </RightBox>
    </Box>
  )
}

export default DetailPath