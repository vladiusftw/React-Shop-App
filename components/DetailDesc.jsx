import { Box, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import Separator from '../assets/Separator.png'
import CheckIcon from '../assets/checkMark.png'
import { theme } from '../theme'

const DetailDesc = (props) => {
    const LeftBox = styled(Stack)({
        flex: 1.7,
        [theme.breakpoints.down('sm')]: {
            marginRight: '5%',
            marginLeft: '5%'
        },
    })

    const RightBox = styled(Stack)({
        flex: 1.1,
        [theme.breakpoints.down('sm')]: {
            marginRight: '5%',
            marginLeft: '5%'
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
            fontSize: 6
        },
    })
  return (
    <Box sx={{paddingBottom: '5%'}}>
        <Box sx={{display:'flex',flex:3}}>
            <Box sx={{flex:0.1}}/>
            <Box sx={{flex:2.8}}>
            <img src={Separator} style={{width:'100%'}}/>
            </Box>
            
            <Box sx={{flex:0.1}}/>
        </Box>

        <Box sx={{
            [theme.breakpoints.up('sm')]: {
                display: 'flex',
                flex: 3
            },
            [theme.breakpoints.down('sm')]: {
                display: 'block'
            },
        }}>
            <Box sx={{flex:0.1}} />
            <LeftBox direction={'column'} spacing={{xs:1,md:2,lg:2,xl:3}}>
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
                    {'Description'}
                </Typography>

                <ResponsiveText sx={{fontFamily:'DM Sans'}}>
                    {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur'}
                </ResponsiveText>
                
            </LeftBox>

            <Box sx={{flex:0.1}} />

            <RightBox>
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
                    {'Fabric Details'}
                </Typography>

                <Box sx={{display:'flex',marginTop: '1%',marginLeft:'4%',alignItems: 'center'}}>
                    <Box sx={{
                        [theme.breakpoints.down('sm')]:{
                            height: 10,
                            width: 10,
                            flex: 0.02
                        },
                        [theme.breakpoints.up('sm')]: {
                            flex: 0.05,
                            height: 15,
                        }
                    }}>
                        <img src={CheckIcon} style={{width:'100%',height:'100%'}}/>
                    </Box>

                    <ResponsiveText sx={{
                        fontFamily:'DM Sans',
                        [theme.breakpoints.down('sm')]: {
                            flex:0.58,
                            paddingTop: '2%'
                        },
                        [theme.breakpoints.up('sm')]: {
                            flex:0.55,
                        },
                        paddingLeft: '1%'
                    }}>
                        {'100% Cotton'}
                    </ResponsiveText>
                </Box>


                <Box sx={{display:'flex',marginTop: '1%',marginLeft:'4%',alignItems: 'center'}}>
                    <Box sx={{
                        [theme.breakpoints.down('sm')]:{
                            height: 10,
                            width: 10,
                            flex: 0.02
                        },
                        [theme.breakpoints.up('sm')]: {
                            flex: 0.05,
                            height: 15,
                        }
                    }}>
                        <img src={CheckIcon} style={{width:'100%',height:'100%'}}/>
                    </Box>

                    <ResponsiveText sx={{
                        fontFamily:'DM Sans',
                        [theme.breakpoints.down('sm')]: {
                            flex:0.58,
                            paddingTop: '2%'
                        },
                        [theme.breakpoints.up('sm')]: {
                            flex:0.55,
                        },
                        paddingLeft: '1%'
                    }}>
                        {'Quick Dry'}
                    </ResponsiveText>
                </Box>


                <Box sx={{display:'flex',marginTop: '1%',marginLeft:'4%',alignItems: 'center'}}>
                    <Box sx={{
                        [theme.breakpoints.down('sm')]:{
                            height: 10,
                            width: 10,
                            flex: 0.02
                        },
                        [theme.breakpoints.up('sm')]: {
                            flex: 0.05,
                            height: 15,
                        }
                    }}>
                        <img src={CheckIcon} style={{width:'100%',height:'100%'}}/>
                    </Box>

                    <ResponsiveText sx={{
                        fontFamily:'DM Sans',
                        [theme.breakpoints.down('sm')]: {
                            flex:0.58,
                            paddingTop: '2%'
                        },
                        [theme.breakpoints.up('sm')]: {
                            flex:0.55,
                        },
                        paddingLeft: '1%'
                    }}>
                        {'Ties as Shoulder'}
                    </ResponsiveText>
                </Box>


                <Box sx={{display:'flex',marginTop: '1%',marginLeft:'4%',alignItems: 'center'}}>
                    <Box sx={{
                        [theme.breakpoints.down('sm')]:{
                            height: 10,
                            width: 10,
                            flex: 0.02
                        },
                        [theme.breakpoints.up('sm')]: {
                            flex: 0.05,
                            height: 15,
                        }
                    }}>
                        <img src={CheckIcon} style={{width:'100%',height:'100%'}}/>
                    </Box>

                    <ResponsiveText sx={{
                        fontFamily:'DM Sans',
                        [theme.breakpoints.down('sm')]: {
                            flex:0.58,
                            paddingTop: '2%'
                        },
                        [theme.breakpoints.up('sm')]: {
                            flex:0.55,
                        },
                        paddingLeft: '1%'
                    }}>
                        {'Accusantium doloremque'}
                    </ResponsiveText>
                </Box>

                
            </RightBox>

            
        </Box>
        
       
    </Box>
  )
}

export default DetailDesc