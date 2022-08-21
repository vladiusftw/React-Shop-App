import { KeyboardArrowDown } from '@mui/icons-material'
import { Box, Button, styled, TextareaAutosize, TextField, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../theme'
import CheckIcon from '../assets/checkMark.png'

const Checkout = () => {
    const InnerText = styled(Typography)({
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
            fontSize: 10
        }
    })

    const OuterText = styled(Typography)({
        [theme.breakpoints.up('lg')]:{
            fontSize: 32
        },
        [theme.breakpoints.between('md','lg')]: {
            fontSize: 28
        },
        [theme.breakpoints.between('sm','md')]: {
            fontSize: 24
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 18
        },
        fontWeight: '700'
    })

  return (
    <Box sx={{display:'flex',flex:3,marginBottom: '10%'}}>
        <Box flex={0.3}/>
        <Box sx={{flex:2.4}}>
            <Typography sx={{
                [theme.breakpoints.up('lg')]:{
                    fontSize: 48
                },
                [theme.breakpoints.between('md','lg')]: {
                    fontSize: 36
                },
                [theme.breakpoints.between('sm','md')]: {
                    fontSize: 20
                },
                [theme.breakpoints.down('sm')]: {
                    fontSize: 16
                },
                fontFamily: 'Merriweather',
                fontWeight: '700',
                marginBottom: '4%'
            }}>
                {'Checkout'}
            </Typography>

            <OuterText fontFamily={'Merriweather'} marginBottom={'2%'}>
                {'Customer Email'}
            </OuterText>

            <InnerText fontFamily={'Merriweather'} fontWeight={700} marginBottom={'1%'}>
                {'Email Address'}
            </InnerText>

            <TextField fullWidth color={'paginationColor'} focused placeholder={'Email address'}/>

            <InnerText fontWeight={400} color={'#9A9AB0'} marginTop={'1%'} marginBottom={'4%'}>
                {'Already have an account? Sign in'}
            </InnerText>

            <OuterText fontFamily={'Merriweather'} marginBottom={'2%'}>
                {'Shipping Address'}
            </OuterText>

            <Box sx={{display:'flex',flex:2, marginBottom:'1%'}}>
                <InnerText flex={0.9875} fontFamily={'Merriweather'}>
                    {'First Name'}
                </InnerText>

                <Box flex={0.025}/>

                <InnerText flex={0.9875} fontFamily={'Merriweather'}>
                    {'Last Name'}
                </InnerText>
            </Box>

            <Box sx={{display:'flex',flex:2,marginBottom:'4%'}}>
                <Box flex={0.9875}>
                    <TextField fullWidth color={'paginationColor'} focused placeholder={'First name'} />
                </Box>

                <Box flex={0.025}/>

                <Box flex={0.9875}>
                    <TextField fullWidth color={'paginationColor'} focused placeholder={'Last name'} />
                </Box>
            </Box>

            <InnerText fontFamily={'Merriweather'} fontWeight={700} marginBottom={'1%'}>
                {'Address Line'}
            </InnerText>

            <TextareaAutosize 
                placeholder={'Address line'}
                minRows={10}
                style={{width:'100%',borderColor:'#F86338',borderWidth:2,paddingLeft:'1%',fontFamily:'Merriweather',marginBottom:'4%',borderRadius:5}}
            />

            <InnerText fontFamily={'Merriweather'} fontWeight={700} marginBottom={'1%'}>
                {'Country'}
            </InnerText>

            <TextField fullWidth color={'paginationColor'} focused placeholder={'Indonesia'} />
            
            <Box sx={{display:'flex',flex:2, marginBottom:'1%',marginTop:'4%'}}>
                <InnerText flex={0.9875} fontFamily={'Merriweather'}>
                    {'Postal Code'}
                </InnerText>

                <Box flex={0.025}/>

                <InnerText flex={0.9875} fontFamily={'Merriweather'}>
                    {'Phone Number'}
                </InnerText>
            </Box>

            <Box sx={{display:'flex',flex:2,marginBottom:'4%'}}>
                <Box flex={0.9875}>
                    <TextField fullWidth color={'paginationColor'} focused placeholder={'Postal Code'} />
                </Box>

                <Box flex={0.025}/>

                <Box flex={0.9875}>
                    <TextField fullWidth color={'paginationColor'} focused placeholder={'Phone Number'} />
                </Box>
            </Box>

            <OuterText fontFamily={'Merriweather'} marginBottom={'2%'}>
                {'Billing Address'}
            </OuterText>

            <Box sx={{display:'flex',flex:4,marginBottom: '4%'}}>
                <Box sx={{display:'flex',flex:2}}>
                    <img src={CheckIcon} sx={{width:'50%',height:'50%'}}/>
                    <InnerText fontFamily={'Merriweather'} fontWeight={400} color={'#F86338'} marginLeft={'4%'}>
                        {'Same as shipping address'}
                    </InnerText>
                </Box>

                <Box sx={{flex:2}}/>
            </Box>

            <Button variant={'outlined'} 
                sx={{
                color: 'white',
                borderRadius: 1,
                [theme.breakpoints.up('xl')]: {
                    
                    height: 40
                },
                [theme.breakpoints.between('lg','xl')]: {
                    width:'100%',
                    height: 40
                },
                [theme.breakpoints.between('md','lg')]: {
                    width: 140,
                    height: 40
                },
                [theme.breakpoints.between('sm','md')]: {
                    width: 120,
                    height: 40
                },
                [theme.breakpoints.down('sm')]: {
                    width: 80,
                    height: 40
                },
                fontFamily: 'DM Sans',
                backgroundColor: '#F86338',
                textTransform: 'none'

            }}>
        
                <Typography sx={{
                    [theme.breakpoints.up('lg')]:{
                        fontSize: 14
                    },
                    [theme.breakpoints.between('md','lg')]: {
                        fontSize: 14
                    },
                    [theme.breakpoints.between('sm','md')]: {
                        fontSize: 12
                    },
                    [theme.breakpoints.down('sm')]: {
                        fontSize: 7
                    },
                    fontFamily: 'DM Sans',
                    fontWeight: '700',
                    color: 'white'
                }}>
                    {'Continue'}
                </Typography>  
            </Button>

            


        </Box>
        <Box flex={0.3}/>
    </Box>
  )
}

export default Checkout