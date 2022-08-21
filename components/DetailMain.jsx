import { KeyboardArrowDown } from '@mui/icons-material'
import { Box, Button, Stack, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import { theme } from '../theme'
import CartIcon from '../assets/cartLogoWhite.png'
import StarIcon from '../assets/starIcon.png'
import { doc, setDoc, getDoc} from "firebase/firestore"; 
import {db} from '../Firebase'


const DetailMain = (props) => {
    const [currImage,setCurrImage] = useState(props.item?.images[0])
    const [counter,setCounter] = useState(0)
    const LeftBox = styled(Box)({
        flex: 1.7,
        [theme.breakpoints.up('lg')]:{
            height: 600
        },
        [theme.breakpoints.between('md','lg')]: {
            height: 450
        },
        [theme.breakpoints.between('sm','md')]: {
            height: 350
        },
        [theme.breakpoints.down('sm')]: {
            height: 250
        },
        paddingLeft: '4%' 
    })

    const RightBox = styled(Stack)({
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
            height: 250,
            paddingLeft: '5%',
            paddingTop: '2%'
        },

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
    })
    const CustomButton = styled(Button)({
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
        color: 'black'
    })

    const purchaseItem = async() => {
        if(counter == 0) return
        const item = props.item
        item.qty = counter
        const tempDoc = await getDoc(doc(db,"items",item.name))
        if(tempDoc.exists()) item.qty += tempDoc.data().qty
        await setDoc(doc(db, "items",item.name),item);
        console.log('item added')
    }
  return (
    <Box sx={{
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            alignItems: 'center'
        },
        [theme.breakpoints.up('sm')]: {
            display: 'flex'
        },
        flex:3, 
        marginTop:'10%'
    }}>
        <LeftBox sx={{display: 'flex'}}>
            <Box sx={{height:'100%',width:'18%',marginRight: '2%'}}>
                <img src={props.item?.images[0]} style={{width: '100%',height:'24.25%'}} />
                <img src={props.item?.images[1]} style={{width: '100%',height:'24.25%'}} />
                <img src={props.item?.images[2]} style={{width: '100%',height:'24.25%'}} />
                <img src={props.item?.images[3]} style={{width: '100%',height:'24.25%'}} />
            </Box>

            <Box sx={{height:'100%',width:'82%'}}>
                <img src={currImage} style={{width: '100%',height:'100%'}} />
            </Box>
            
        </LeftBox>

        <Box sx={{flex:0.1}}>

        </Box>
        <RightBox direction={'column'} spacing={{xs:1,md:2,lg:2,xl:3}}>
            <Typography sx={{
                [theme.breakpoints.up('lg')]:{
                    fontSize: 48,
                    
                },
                [theme.breakpoints.between('md','lg')]: {
                    fontSize: 36,
                    
                },
                [theme.breakpoints.between('sm','md')]: {
                    fontSize: 20,
                   
                },
                [theme.breakpoints.down('sm')]: {
                    fontSize: 16,
                    
                },
                fontFamily: 'Merriweather',
                fontWeight: '700'
            }}>
                {props.item?.name}
            </Typography>

            <Box sx={{display: 'flex'}}>
                <ResponsiveText sx={{color:'#515151',fontFamily:'Merriweather'}}>
                    {'Availability:'}
                </ResponsiveText>

                <ResponsiveText sx={{color:'#11142D',fontFamily:'Merriweather'}}>
                    {'48 in stocks'}
                </ResponsiveText>
            </Box>

            <Box sx={{display:'flex', alignItems: 'center'}}>
                <Typography sx={{
                    [theme.breakpoints.up('lg')]:{
                        fontSize: 40
                    },
                    [theme.breakpoints.between('md','lg')]: {
                        fontSize: 34
                    },
                    [theme.breakpoints.between('sm','md')]: {
                        fontSize: 24
                    },
                    [theme.breakpoints.down('sm')]: {
                        fontSize: 20
                    },
                    fontFamily: 'Merriweather',
                    fontWeight: '700',
                    color: '#F3692E'
                }}>
                    {`$${props.item?.price}`}
                </Typography>

                <ResponsiveText sx={{textDecoration:'line-through', paddingLeft: '2%', color:'#9A9AB0'}}>
                    {'$1500'}
                </ResponsiveText>
            </Box>

            <Box sx={{display: 'flex'}}>
                <ResponsiveText sx={{color:'#11142D',fontFamily:'Merriweather',flex:0.275}}>
                    {'SKU'}
                </ResponsiveText>

                <ResponsiveText sx={{color:'#515151',fontFamily:'Merriweather',flex:0.825}}>
                    {': AA0031'}
                </ResponsiveText>
            </Box>

            <Box sx={{display: 'flex'}}>
                <ResponsiveText sx={{color:'#11142D',fontFamily:'Merriweather',flex:0.275}}>
                    {'Category'}
                </ResponsiveText>

                <ResponsiveText sx={{color:'#515151',fontFamily:'Merriweather',flex:0.825}}>
                    {`: ${props.item?.category}`}
                </ResponsiveText>
            </Box>

            <Box sx={{display: 'flex'}}>
                <ResponsiveText sx={{color:'#11142D',fontFamily:'Merriweather',flex:0.275}}>
                    {'Tags'}
                </ResponsiveText>

                <ResponsiveText sx={{color:'#515151',fontFamily:'Merriweather',flex:0.825}}>
                    {`: Fashion, Classic, Blouses, Dresses`}
                </ResponsiveText>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Button variant={'outlined'} endIcon={<KeyboardArrowDown/>}
                    sx={{
                    color: 'black',
                    borderColor: 'black',
                    borderRadius: 2,
                    [theme.breakpoints.up('xl')]: {
                        fontSize: 16,
                        width: 140
                    },
                    [theme.breakpoints.between('lg','xl')]: {
                        fontSize: 10,
                        width: 140
                    },
                    [theme.breakpoints.between('md','lg')]: {
                        fontSize: 10,
                        width: 140
                    },
                    [theme.breakpoints.between('sm','md')]: {
                        fontSize: 6,
                        width: 95
                    },
                    [theme.breakpoints.down('sm')]: {
                        fontSize: 8,
                        width: 60,
                        height: 30
                    },
                    fontFamily: 'DM Sans'

                }}>
                    {'Select Size'}
                </Button>

                <CustomButton onClick={() => setCounter(counter == 0 ? 0 : counter - 1)}>
                    {'-'}
                </CustomButton>

                <ResponsiveText>
                    {counter}
                </ResponsiveText>

                <CustomButton onClick={() => setCounter(counter+1)}>
                    {'+'}
                </CustomButton>

                <CustomButton sx={{textTransform: 'none',color:'#F3692E'}}>
                    {'Add note'}
                </CustomButton>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Button variant={'outlined'} onClick={purchaseItem}
                    sx={{
                    color: 'white',
                    borderColor: 'black',
                    borderRadius: 2,
                    [theme.breakpoints.up('xl')]: {
                        width: 140,
                        height: 60
                    },
                    [theme.breakpoints.between('lg','xl')]: {
                        width: 160,
                        height: 50
                    },
                    [theme.breakpoints.between('md','lg')]: {
                        fontSize: 10,
                        width: 140,
                        height: 40
                    },
                    [theme.breakpoints.between('sm','md')]: {
                        width: 120,
                        height: 30
                    },
                    [theme.breakpoints.down('sm')]: {
                        width: 60,
                        height: 30
                    },
                    fontFamily: 'DM Sans',
                    backgroundColor: '#F86338',
                    textTransform: 'none'

                }}>
                    <Box sx={{display: 'flex',justifyContent:'space-between', alignItems: 'center'}}>
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
                            {'Add to Cart'}
                        </Typography>

                        <img src={CartIcon} style={{width:'20%',height:'90%'}}/>
                    </Box>
                    
                </Button>

                <Button variant={'outlined'} 
                    sx={{
                    color: 'white',
                    borderColor: 'black',
                    borderRadius: 2,
                    [theme.breakpoints.up('xl')]: {
                        fontSize: 16,
                        width: 80,
                        height: 60
                    },
                    [theme.breakpoints.between('lg','xl')]: {
                        fontSize: 10,
                        width: 30,
                        height: 40
                    },
                    [theme.breakpoints.between('md','lg')]: {
                        fontSize: 10,
                        width: 30,
                        height: 40
                    },
                    [theme.breakpoints.between('sm','md')]: {
                        fontSize: 6,
                        width: 30,
                        height: 30
                    },
                    [theme.breakpoints.down('sm')]: {
                        fontSize: 8,
                        width: 10,
                        height: 30
                    },
                    fontFamily: 'DM Sans',
                    backgroundColor: 'white',
                    borderColor: '#F86338',
                    marginLeft: '2%'

                }}>
                
                    <img src={StarIcon} style={{width:'50%',height:'50%'}}/> 
                    
                </Button>

                
            </Box>

        </RightBox>
    </Box>
  )
}

export default DetailMain