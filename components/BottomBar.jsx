import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../theme'
import logo from '../assets/Group.png'
import locIcon from '../assets/locationIcon.png'
import mailIcon from '../assets/mailIcon.png'
import phoneIconWhite from '../assets/phoneIconWhite.png'

const BottomBar = () => {
    const OrangeBox = styled(Box)({
        backgroundColor:'#F86338'
    })

    const RowBox = styled(Box)({
        marginTop: '2%',
        display: 'flex',
        flexDirection: 'row',
        flex: 5
    })

    const FirstColumn = styled(Box)({
        flex: 2
    })

    const TempColumn = styled(Box)({
        flex: 0.5
    })

    const SecondColumn = styled(Box)({
        flex: 1.25
    })

    const ThirdColumn = styled(Box)({
        flex: 1.25
    })

    const CustomText = styled(Typography)({
        [theme.breakpoints.up('lg')]: {
            fontSize: 16,
            marginBottom: 12
        },
        [theme.breakpoints.between('md','lg')]: {
            fontSize: 12,
            marginBottom: 10
        },
        [theme.breakpoints.between('sm','md')]: {
            fontSize: 10,
            marginBottom: 8
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 8,
            marginBottom: 6
        },
        color: 'white'
    })

    const LogoRow = styled(Box)({
        display: 'flex',
        alignItems: 'flex-start',
        flex: 20,
        [theme.breakpoints.up('lg')]: {
            marginBottom: 14
        },
        [theme.breakpoints.between('md','lg')]: {
            marginBottom: 12
        },
        [theme.breakpoints.between('sm','md')]: {
            marginBottom: 8
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: 6
        }
    })



    

  return (
    <OrangeBox>
        
        <Box sx={{marginLeft: '6%',marginRight: '5%',paddingBottom: '5%'}}>
            <img src={logo} style={{marginTop: '5%'}} width={'20%'} height={'20%'}/>
            <RowBox>
                <FirstColumn>
                    <Typography sx={{
                        color: 'white',
                        fontFamily: 'DM Sans',
                        [theme.breakpoints.up('lg')]: {
                            fontSize: 16
                        },
                        [theme.breakpoints.between('md','lg')]: {
                            fontSize: 14
                        },
                        [theme.breakpoints.between('sm','md')]: {
                            fontSize: 12
                        },
                        [theme.breakpoints.down('sm')]: {
                            fontSize: 10
                        }
                    }}>
                        OurStudio is a digital agency UI / UX Design and Website Development located in Ohio. United States of America
                    </Typography>
                </FirstColumn>

                <TempColumn />

                <SecondColumn>
                    <CustomText sx={{fontWeight: '700'}}>Our Social Media</CustomText>

                    <CustomText>
                        Facebook
                    </CustomText>

                    <CustomText>
                        Twitter
                    </CustomText>

                    <CustomText>
                        Instagram
                    </CustomText>

                    <CustomText>
                        Youtube
                    </CustomText>
                
                </SecondColumn>

                <ThirdColumn>
                    <CustomText>
                        Contact
                    </CustomText>

                    <LogoRow>
                        <img src={locIcon} style={{flex:1, marginRight:12}} height={'5%'}/>
                        <CustomText sx={{flex:19}}>8819 Ohio St. South Gate, California 90280</CustomText>
                    </LogoRow>

                    <LogoRow>
                        <img src={mailIcon} style={{flex:1, marginRight:12}} height={'2%'}/>
                        <CustomText sx={{flex:19}}>ourstudio@hello.com</CustomText>
                    </LogoRow>

                    <LogoRow>
                        <img src={phoneIconWhite} style={{flex:1, marginRight:12}} height={'2%'}/>
                        <CustomText sx={{flex:19}}>+271 386-647-3637</CustomText>
                    </LogoRow>


                </ThirdColumn>


                
            </RowBox>
            <CustomText>Copyright Tanah Air Studio</CustomText>
        </Box>
        
    </OrangeBox>
  )
}

export default BottomBar