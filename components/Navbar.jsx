import React, { useState } from 'react'
import { AppBar, styled, SvgIcon, Toolbar, Box, Typography, Container, Badge, Menu, MenuItem, Button, Link} from '@mui/material'
import phoneIcon from '../assets/phoneIcon.png'
import logoIcon from '../assets/logoIcon.png'
import favIcon from '../assets/favIcon.png'
import cartIcon from '../assets/cartIcon.png'
import profileIcon from '../assets/profileIcon.png'
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material'
import '@fontsource/dm-sans'
import '@fontsource/merriweather'
import { theme } from '../theme'
import { Link as RouterLink} from 'react-router-dom' 

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'white'
})

const PhoneNumber = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    paddingLeft: '2%'
})

const SocialMedia = styled(Box)(({theme})=>({
    display: 'flex',
    paddingRight: '2%',
    [theme.breakpoints.up('sm')]: {
        gap: 30
    },
    [theme.breakpoints.down('sm')]: {
        gap: 10
    }
}))

const Dashboard = styled(Box)({
    display: 'flex',
    gap: 30,
    paddingLeft: '2%',
    [theme.breakpoints.down('sm')]: {
        display:'none'
    },
    [theme.breakpoints.up('sm')]: {
        display:'flex'
    }
})

const DashboardMenu = styled(Button)({
    paddingLeft: '2%',
    [theme.breakpoints.up('sm')]: {
        display:'none'
    },
    [theme.breakpoints.down('sm')]: {
        display:'block'
    },
    color: 'black',
    borderColor: 'black'
})

const Icons = styled(Box)({
    display: 'flex',
    paddingRight: '2%',
    [theme.breakpoints.up('md')]: {
        gap: 30
    },
    [theme.breakpoints.between('sm','md')]: {
        gap: 20
    },
    [theme.breakpoints.down('sm')]: {
        gap: 0
    }
})

const DashboardButton = styled(Typography)({
    fontFamily: 'DM Sans',
    color: 'black',
    fontSize: 16
})

const CustomButton = styled(Button)({
    [theme.breakpoints.between('sm','md')] :{
        
    },
    [theme.breakpoints.down('sm')] :{
        height: 20,
        width: 20
    },
})




const Navbar = () => {
    const [anchorEl,setAnchorEl] = useState(null)
    
    const handleClose = () => {
        setAnchorEl(null)
    }

    const openMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }
  return (
    <AppBar position='sticky' elevation={0} >
        <StyledToolbar>
            <PhoneNumber>
                <img src={phoneIcon}/>
                <Typography variant={'p'} sx={{color:'black',[theme.breakpoints.down('sm')]:{fontSize: 10},[theme.breakpoints.up('sm')]:{fontSize:16}, WebkitLineClamp:1,fontFamily:'DM Sans',fontWeight:'500'}} noWrap>+022 319 821 967</Typography>
            </PhoneNumber>
            <Box sx={{[theme.breakpoints.down('sm')]:{display:'none'},[theme.breakpoints.up('md')]:{display:'block'}}}>
                <img src={logoIcon}/>
            </Box>
            

            <SocialMedia>
                <Link href={'https://www.facebook.com/login/'} target={'_blank'}><Facebook color={'action'} /></Link>
                <Link href={'https://twitter.com/?lang=en'} target={'_blank'}><Twitter color={'action'}/></Link>
                <Link href={'https://www.instagram.com/'} target={'_blank'}><Instagram color={'action'}/></Link>
                <Link href={'https://www.youtube.com/'} target={'_blank'}><YouTube color={'action'}/></Link>
            </SocialMedia>

            
        </StyledToolbar>
        <StyledToolbar>
            <Dashboard>
                <RouterLink to={'/'} ><DashboardButton sx={{fontWeight:'bold'}}>Home</DashboardButton></RouterLink>
                <DashboardButton>About</DashboardButton>
                <DashboardButton>FAQ</DashboardButton>
                <DashboardButton>Blog</DashboardButton>
            </Dashboard>
            <DashboardMenu variant={'outlined'} onClick={openMenu}>Dashboard</DashboardMenu>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} keepMounted onClose={handleClose}>
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>FAQ</MenuItem>
                <MenuItem>Blog</MenuItem>
            </Menu>
            <Icons>
                <CustomButton>
                    <img src={favIcon} />
                </CustomButton>
                
                <CustomButton component={RouterLink} to={'/cart'}>
                    <Badge badgeContent={3} color={'badgeColor'}>
                        <img src={cartIcon} />
                    </Badge>
                </CustomButton>

                <CustomButton>
                    <img src={profileIcon} />
                </CustomButton>
                
                

            </Icons>
        </StyledToolbar>
        
    </AppBar>
  )
}

export default Navbar