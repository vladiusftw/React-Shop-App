import { Box, Button, Container, Grid, Input, Stack, styled, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { theme } from '../theme'
import TrashIcon from '../assets/trashIcon.png'
import { collection, query , onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from '../Firebase'

const CartList = () => {

const [cartItems,setCartItems] = useState([])

const [totalPrice,setTotalPrice] = useState([0])

useEffect(()=>{
    const q = query(collection(db, "items"));
    const unsub = onSnapshot(q, (querySnapshot) => {
        const temp = []
        var tempPrice = 0
        querySnapshot.forEach((doc) => {
            temp.push(doc.data());
            tempPrice += doc.data().qty * doc.data().price
        });
        setCartItems([...temp])
        setTotalPrice(tempPrice)
    });
    return unsub
},[])

const CustomText = styled(Typography)({
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
    },
    fontWeight: '700'
})

const ResponsiveText = styled(Typography)({
    [theme.breakpoints.up('lg')]:{
        fontSize: 16
    },
    [theme.breakpoints.between('md','lg')]: {
        fontSize: 14
    },
    [theme.breakpoints.between('sm','md')]: {
        fontSize: 12
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: 8
    },
    fontFamily: 'DM Sans'
})

const deleteItem = async(name) => {
    await deleteDoc(doc(db, "items", name));
}
  return (
    <Box sx={{display:'flex',flex:3,marginBottom: '10%'}}>
        <Box sx={{flex:0.3}}/>

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
                marginBottom: '2%'
            }}>
                {'Cart'}
            </Typography>

            <Box>
                <Box sx={{display:'flex',flex:6,marginTop:'2%',alignItems: 'center',backgroundColor:'#F86338',paddingY:'2%',borderRadius:2}} >
                    <Box sx={{flex:0.6}}/>             
                    <Box sx={{flex:1.5}}>
                        <CustomText fontFamily={'Merriweather'} color={'white'}>
                            {'Product Name'}
                        </CustomText>
                    </Box>
                    <Box sx={{flex:1.6}}>
                        <CustomText fontFamily={'Merriweather'} color={'white'}>
                            {'Price'}
                        </CustomText>
                    </Box>
                    <Box sx={{flex:1}}>
                        <CustomText fontFamily={'Merriweather'} color={'white'}>
                            {'Quantity'}
                        </CustomText>
                    </Box>
                    <Box sx={{flex:0.9}}>
                        <CustomText fontFamily={'Merriweather'} textAlign={'center'} color={'white'}>
                            {'Total'}
                        </CustomText>
                    </Box>
                    <Box sx={{flex:0.4}}/>
                </Box>

                
                    {
                        cartItems.map((item,index)=>{
                            return(
                                <Box sx={{display:'flex',flex:6,marginTop:'2%',alignItems: 'center'}} key={index}>
                                    <Box sx={{
                                        display:'flex',
                                        flex:0.6,
                                        [theme.breakpoints.up('lg')]: {
                                            height:140
                                        },
                                        [theme.breakpoints.between('md','lg')]: {
                                            height:120
                                        },
                                        [theme.breakpoints.between('sm','md')]: {
                                            height:80
                                        },
                                        [theme.breakpoints.down('sm')]: {
                                            height:60
                                        },
                                        alignItems:'center',
                                        justifyContent:'center'
                                    }}>
                                        <img src={item?.images[0]} style={{width:'100%',height:'100%'}} />
                                    </Box>
                                    <Box sx={{flex:1.5,marginLeft:'2%'}}>
                                        <CustomText fontFamily={'Merriweather'}>
                                            {item?.name}
                                        </CustomText>
                                    </Box>
                                    <Box sx={{flex:1.6}}>
                                        <CustomText fontFamily={'Merriweather'}>
                                            {`$${item?.price}`}
                                        </CustomText>
                                    </Box>
                                    <Box sx={{flex:1}}>
                                        <CustomText fontFamily={'Merriweather'}>
                                            {item?.qty}
                                        </CustomText>
                                    </Box>
                                    <Box sx={{flex:0.9}}>
                                        <CustomText textAlign={'center'} fontFamily={'Merriweather'}>
                                            {`$${item?.price * item?.qty}`}
                                        </CustomText>

                                    </Box>
                                    <Box sx={{flex:0.4,alignItems:'center',justifyContent:'center'}}>
                                        <Button onClick={()=>deleteItem(item?.name)}>
                                            <img src={TrashIcon} style={{height:'50%',width:'50%'}} />
                                        </Button>
                                    </Box>
                                </Box>
                            )
                        })
                    }
            </Box>
            <Box sx={{display:'flex',flex:3.2,marginTop:'5%',
             
                [theme.breakpoints.up('lg')]: {
                    height:300
                },
                [theme.breakpoints.between('md','lg')]: {
                    height:250
                },
                [theme.breakpoints.between('sm','md')]: {
                    height:250 
                },
                [theme.breakpoints.down('sm')]: {
                    height:200
                },
                
                }}>
                <Box sx={{display:'flex',flexDirection:'column',flex: 1.5,backgroundColor:'#FFEFEB',borderRadius: 5}}>
                    <Container>
                        <CustomText fontFamily={'Merriweather'}
                            sx={{
                                [theme.breakpoints.up('lg')]: {
                                    marginTop: '10%',
                                    marginBottom: '5%' 
                                },
                                [theme.breakpoints.between('md','lg')]: {
                                    marginTop: '15%',
                                    marginBottom: '5%' 
                                },
                                [theme.breakpoints.between('sm','md')]: {
                                    marginTop: '15%',
                                    marginBottom: '5%' 
                                },
                                [theme.breakpoints.down('sm')]: {
                                    marginTop: '10%',
                                    marginBottom: '5%' 
                                }
                            }}
                        >
                            {'Have a Coupon?'}
                        </CustomText>

                        <TextField variant={'outlined'} color={'paginationColor'} focused placeholder={'Input your email here'} fullWidth
                         sx={{
                            [theme.breakpoints.up('lg')]: {
                                marginBottom: '5%' 
                            },
                            [theme.breakpoints.between('md','lg')]: {
                                marginBottom: '10%' 
                            },
                            [theme.breakpoints.between('sm','md')]: {
                                marginBottom: '10%' 
                            },
                            [theme.breakpoints.down('sm')]: {
                                marginBottom: '15%' 
                            }
                        }}/>

                        <Button variant={'outlined'} 
                            sx={{
                            color: 'white',
                            borderRadius: 2,
                            [theme.breakpoints.up('xl')]: {
                                width: 140,
                                height: 40
                            },
                            [theme.breakpoints.between('lg','xl')]: {
                                width: 160,
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
                                {'Apply Coupon'}
                            </Typography>  
                        </Button>
                    </Container>
                </Box>

                <Box sx={{flex:0.4}} />

                <Box sx={{flex:1.3}}>
                    <CustomText fontFamily={'Merriweather'} marginBottom={'4%'}>
                        {'Cart Totals'}
                    </CustomText>

                    <Box sx={{display:'flex',flex:3,marginBottom: '2%'}}>
                        <ResponsiveText flex={1}>
                            {'Subtotal'}
                        </ResponsiveText>

                        <ResponsiveText flex={2} color={'#515151'}>
                            {`$${totalPrice}`}
                        </ResponsiveText>
                    </Box>

                    <Box sx={{display:'flex',flex:3,marginBottom: '2%'}}>
                        <ResponsiveText flex={1}>
                            {'Shipping'}
                        </ResponsiveText>

                        <ResponsiveText flex={2} color={'#515151'}>
                            {'Free Shipping'}
                        </ResponsiveText>
                    </Box>

                    <Box sx={{display:'flex',flex:3,marginBottom: '2%'}}>
                        <Box flex={1}/>
                        <ResponsiveText flex={1}>
                            {'Shipping to Sidney'}
                        </ResponsiveText>

                        <ResponsiveText flex={1} color={'#F3692E'}>
                            {'Change'}
                        </ResponsiveText>
                    </Box>

                    <Box sx={{display:'flex',flex:3,marginBottom: '2%'}}>
                        <ResponsiveText flex={1}>
                            {'Total'}
                        </ResponsiveText>

                        <ResponsiveText flex={2} color={'#515151'} marginBottom={'4%'}>
                            {`$${totalPrice}`}
                        </ResponsiveText>
                    </Box>

                    <Button variant={'outlined'} 
                        sx={{
                        color: 'white',
                        borderRadius: 2,
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
                            {'Checkout'}
                        </Typography>  
                    </Button>
                </Box>
            </Box>
        </Box>
        
        <Box sx={{flex:0.3}}/>
    </Box>
  )
}

export default CartList