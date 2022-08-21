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

const ShopPage = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate()

    const [categories,setCategories] = useState([])

    useEffect(()=>{
        getCategories()
    },[])

    const getCategories = () => {
        const temp = []
        Items.forEach(function(item){
            if(!temp.includes(item.category)) temp.push(item.category)
        })
        setCategories(temp)
    }

    const [totItems,setTotalItems] = useState([...Items])

    const [indices,setIndicies] = useState({
        from: 0,
        to: 9
    })

    const [tempItems,setTempItems] = useState([
        ...totItems.slice(indices.from,indices.to)
    ])

    const [currPage,setCurrPage] = useState(1)

    const handlePageChange = (event,page) => {
        const from = (page - 1 ) * 9
        const to = (page - 1) * 9 + 9
        setIndicies({from:from,to:to})
        setTempItems(totItems.slice(from,to))
        setCurrPage(page)
    }

    const [priceFilter, setPriceFilter] = useState([0,1000]);

    const handlePriceChange = (event, newValue) => {
        setPriceFilter(newValue)
        setTotalItems([...Items.filter(item=>item.price >= newValue[0] && item.price <= newValue[1])])
    };

    useEffect(()=>{
        setTempItems([...totItems.slice(indices.from,indices.to)])
    },[totItems])

    const filterByCategory = (category) => {
        setTotalItems([...Items.filter(item=>item.category == category && item.price >= priceFilter[0] && item.price <= priceFilter[1])])
    }

    const sortByNameAsc = () => {
        setTotalItems([...totItems.sort((a,b) => a.name > b.name ? 1 : -1)])
        handleClose()
    }

    const sortByNameDesc = () => {
        setTotalItems([...totItems.sort((a,b) => a.name > b.name ? -1 : 1)])
        handleClose()
    }

    const sortByPriceAsc = () => {
        setTotalItems([...totItems.sort((a,b) => a.price - b.price)])
        handleClose()
    }

    const sortByPriceDesc = () => {
        setTotalItems([...totItems.sort((a,b) => b.price - a.price)])
        handleClose()
    }

        



    const LeftBox = styled(Box)({
        flex: 1,
        marginLeft: '3%'
    })

    const RightBox = styled(Box)({
        flex: 3,
        paddingLeft: '1%',
        paddingRight: '2%'
    })

    const ColorCircle = styled(Box)({
        backgroundColor: '#E2E2EA',
        [theme.breakpoints.up('xl')]: {
            height: 40
        },
        [theme.breakpoints.between('md','xl')]: {
            height: 35
        },
        [theme.breakpoints.between('sm','md')]: {
            height: 30
        },
        [theme.breakpoints.down('sm')]: {
            height: 15
        },
        borderRadius: 100
    })

    const OrangeBox = styled(Box)({
        backgroundColor:'#F86338',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            height: 450
        },
        [theme.breakpoints.down('md')]: {
            height: 200
        },
        marginLeft: '2%',
        marginRight: '2%',
        marginTop: '15%',
        paddingLeft: '4%',
        paddingRight: '4%'
    })

    const CustomButton = styled(Button)({
        alignItems: 'center',
        textTransform: 'none',
        backgroundColor: 'white',
        [theme.breakpoints.down('md')]: {
            width: 70,
            height: 28
        },
        [theme.breakpoints.up('md')]:{
            width: 120,
            height: 40
        },
        WebkitLineClamp:1
    })

    const Item = styled(Box)({
        [theme.breakpoints.up('xl')]: {
            height: 450
        },
        [theme.breakpoints.between('lg','xl')]: {
            height: 350
        },
        [theme.breakpoints.between('md','lg')]: {
            height: 350
        },
        [theme.breakpoints.between('sm','md')]: {
            height: 250
        },
        [theme.breakpoints.down('sm')]: {
            height: 200
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
    <Box sx={{display:'flex',flex:4}}>
        <LeftBox>
            <Box sx={{display:'flex',justifyContent:'space-between'}}>
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
                    Price
                </Typography>

                <Tooltip title={'Filter Price'}>
                    <img src={FilterIcon} height={'50%'}/>
                </Tooltip>
                
            </Box>

            <Slider 
                value={priceFilter}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                min={0}
                max={1000}
            />

            <Box sx={{display:'flex',justifyContent:'space-between',marginBottom: '10%'}}>
                <Typography sx={{
                    [theme.breakpoints.up('xl')]: {
                        fontSize: 22
                    },
                    [theme.breakpoints.between('lg','xl')]: {
                        fontSize: 18
                    },
                    [theme.breakpoints.between('md','lg')]: {
                        fontSize: 16
                    },
                    [theme.breakpoints.down('md')]: {
                        fontSize: 12
                    },
                    fontFamily: 'DM Sans',
                    marginTop: '4%',
                    fontWeight: '400'
                }}>
                    Range
                </Typography>
                
                <Typography sx={{
                     [theme.breakpoints.up('xl')]: {
                        fontSize: 22
                    },
                    [theme.breakpoints.between('lg','xl')]: {
                        fontSize: 18
                    },
                    [theme.breakpoints.between('md','lg')]: {
                        fontSize: 16
                    },
                    [theme.breakpoints.down('md')]: {
                        fontSize: 12
                    },
                    fontFamily: 'DM Sans',
                    marginTop: '4%',
                    fontWeight: '400'
                }}>
                    {`$${priceFilter[0]}-$${priceFilter[1]}`}
                </Typography>
            </Box>

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
                    Color
                </Typography>
            
            <Grid container columnSpacing={{xs:1,sm:2,md:4,lg:6,xl:8}} rowSpacing={{xs:1,sm:2,md:2,lg:4,xl:4}}>
                <Grid item={true} xl={3} lg={3} md={3} sm={3} xs={3}>
                    <ColorCircle/>
                </Grid>

                <Grid item={true} xl={3} lg={3} md={3} sm={3} xs={3}>
                    <ColorCircle/>
                </Grid>

                <Grid item={true} xl={3} lg={3} md={3} sm={3} xs={3}>
                    <ColorCircle/>
                </Grid>

                <Grid item={true} xl={3} lg={3} md={3} sm={3} xs={3}>
                    <ColorCircle/>
                </Grid>

            </Grid>

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
                    marginTop: '10%',
                    fontWeight: '700'
                }}>
                Categories
            </Typography>

            <Box sx={{display: 'flex',justifyContent: 'space-between'}} >
                <Typography sx={{
                [theme.breakpoints.up('xl')]: {
                    fontSize: 22
                },
                [theme.breakpoints.between('lg','xl')]: {
                    fontSize: 18
                },
                [theme.breakpoints.between('md','lg')]: {
                    fontSize: 16
                },
                [theme.breakpoints.down('md')]: {
                    fontSize: 12
                },
                fontFamily: 'DM Sans',
                marginTop: '4%',
                fontWeight: '400'
            }}>
                {'All Categories'}
            </Typography>
            <Button 
                sx={{color:'black'}}
                onClick={() => setTotalItems([...Items.filter(item=>item.price >= priceFilter[0] && item.price <= priceFilter[1])]) }
            >
                <Typography sx={{
                    [theme.breakpoints.up('xl')]: {
                        fontSize: 22
                    },
                    [theme.breakpoints.between('lg','xl')]: {
                        fontSize: 18
                    },
                    [theme.breakpoints.between('md','lg')]: {
                        fontSize: 16
                    },
                    [theme.breakpoints.down('md')]: {
                        fontSize: 12
                    },
                    fontFamily: 'DM Sans',
                    marginTop: '4%',
                    fontWeight: '400'
                }}>
                    {'>'}
                </Typography>
            </Button>
            
        </Box>
                    
            {
                categories.map((category,index) => {
                    return(
                        <Box sx={{display: 'flex',justifyContent: 'space-between'}} key={index}>
                             <Typography sx={{
                                [theme.breakpoints.up('xl')]: {
                                    fontSize: 22
                                },
                                [theme.breakpoints.between('lg','xl')]: {
                                    fontSize: 18
                                },
                                [theme.breakpoints.between('md','lg')]: {
                                    fontSize: 16
                                },
                                [theme.breakpoints.down('md')]: {
                                    fontSize: 12
                                },
                                fontFamily: 'DM Sans',
                                marginTop: '4%',
                                fontWeight: '400'
                            }}>
                                {category}
                            </Typography>
                            <Button 
                                sx={{color:'black'}}
                                onClick={() => filterByCategory(category)}
                            >
                                <Typography sx={{
                                    [theme.breakpoints.up('xl')]: {
                                        fontSize: 22
                                    },
                                    [theme.breakpoints.between('lg','xl')]: {
                                        fontSize: 18
                                    },
                                    [theme.breakpoints.between('md','lg')]: {
                                        fontSize: 16
                                    },
                                    [theme.breakpoints.down('md')]: {
                                        fontSize: 12
                                    },
                                    fontFamily: 'DM Sans',
                                    marginTop: '4%',
                                    fontWeight: '400'
                                }}>
                                    {'>'}
                                </Typography>
                            </Button>
                            
                        </Box>
                    )
                })
            }

            <Typography sx={{
                [theme.breakpoints.up('xl')]: {
                    fontSize: 22
                },
                [theme.breakpoints.between('lg','xl')]: {
                    fontSize: 18
                },
                [theme.breakpoints.between('md','lg')]: {
                    fontSize: 16
                },
                [theme.breakpoints.down('md')]: {
                    fontSize: 12
                },
                fontFamily: 'DM Sans',
                marginTop: '4%',
                fontWeight: '400',
                color: '#F3692E',
                textAlign: 'center'
            }}>
                {'Load more'}
            </Typography>

            <OrangeBox>
                <Typography sx={{
                    [theme.breakpoints.down('sm')]:{
                        fontSize:20,
                        marginBottom: 0
                    },
                    [theme.breakpoints.between('sm','md')]:{
                        fontSize:20,
                        marginBottom: 2
                    },
                    [theme.breakpoints.up('md')]:{
                        fontSize:40,
                        marginBottom: 5
                    },
                    color: 'white',
                    fontFamily: 'Merriweather'
                }}>
                    {'March Discount'}
                </Typography>

                <Typography sx={{
                    [theme.breakpoints.down('sm')]:{
                        fontSize:10,
                        marginBottom: 0
                    },
                    [theme.breakpoints.between('sm','md')]:{
                        fontSize:16,
                        marginBottom: 2
                    },
                    [theme.breakpoints.up('md')]:{
                        fontSize:24,
                        marginBottom: 4
                    },
                    color: 'white',
                    fontFamily: 'Merriweather'
                }}>
                    {'Up to 70% Off for All Items in March'}
                </Typography>

                <CustomButton variant={'contained'}>
                    <Typography sx={{
                        color: '#7A6005',
                        [theme.breakpoints.down('md')]:{
                            fontSize:10
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

            

        </LeftBox>

        <RightBox>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={totItems}
                sx={{width:'100%'}}
                getOptionLabel={(option)=>option.name}
                renderInput={(params) => <TextField {...params} sx={{}} label="Search Products" />}
                onChange={(event,newVal)=>navigate('/Detail',{state:newVal})}
            />

            <Box sx={{display: 'flex',justifyContent: 'space-between', marginTop: '3%', alignItems: 'center'}}>
                <Typography sx={{
                    [theme.breakpoints.up('xl')]: {
                        fontSize: 20
                    },
                    [theme.breakpoints.between('lg','xl')]: {
                        fontSize: 16
                    },
                    [theme.breakpoints.between('md','lg')]: {
                        fontSize: 14
                    },
                    [theme.breakpoints.down('md')]: {
                        fontSize: 12
                    },
                    fontFamily: 'DM Sans',
                    fontWeight: '400',
                    color: '#9A9AB0'
                }}>
                    {`Showing ${totItems.length == 0 ? 0 : indices.from + 1}-${totItems.length < 9 ? totItems.length : indices.to} Results`}
                </Typography>

                <Box sx={{
                    display:'flex', 
                    alignItems: 'center',
                    justifyContent: 'flex-end', 
                    [theme.breakpoints.up('xl')]: {
                        gap: 4
                    },
                    [theme.breakpoints.between('lg','xl')]: {
                        gap: 3
                    },
                    [theme.breakpoints.between('md','lg')]: {
                        gap: 2
                    },
                    [theme.breakpoints.between('sm','md')]: {
                        gap: 2
                    },
                    [theme.breakpoints.down('sm')]: {
                        gap: 2
                    },
                }}>
                    <Typography sx={{
                        [theme.breakpoints.up('xl')]: {
                            fontSize: 22
                        },
                        [theme.breakpoints.between('lg','xl')]: {
                            fontSize: 18
                        },
                        [theme.breakpoints.between('md','lg')]: {
                            fontSize: 16
                        },
                        [theme.breakpoints.between('sm','md')]: {
                            fontSize: 14
                        },
                        [theme.breakpoints.down('sm')]: {
                            fontSize: 10
                        },
                        fontFamily: 'DM Sans',
                        fontWeight: '400',
                        textAlign: 'center'
                    }}>
                        {'Sort by'}
                    </Typography>

                    <Button variant={'outlined'} endIcon={<KeyboardArrowDown/>} onClick={handleClick}
                        sx={{
                        color: 'black',
                        borderColor: 'black',
                        borderRadius: 2,
                        [theme.breakpoints.up('xl')]: {
                            fontSize: 16,
                            width: 120
                        },
                        [theme.breakpoints.between('lg','xl')]: {
                            fontSize: 10,
                            width: 100
                        },
                        [theme.breakpoints.between('md','lg')]: {
                            fontSize: 10,
                            width: 100
                        },
                        [theme.breakpoints.between('sm','md')]: {
                            fontSize: 10,
                            width: 80
                        },
                        [theme.breakpoints.down('sm')]: {
                            fontSize: 8,
                            width: 50
                        }

                    }}>
                        {'Newest'}
                    </Button>

                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={sortByNameAsc}>{'A-Z'}</MenuItem>
                        <MenuItem onClick={sortByNameDesc}>{'Z-A'}</MenuItem>
                        <MenuItem onClick={sortByPriceDesc}>{'High to Low'}</MenuItem>
                        <MenuItem onClick={sortByPriceAsc}>{'Low to High'}</MenuItem>
                    </Menu>
                    

                    <Box  sx={{
                        [theme.breakpoints.up('xl')]: {
                            fontSize: 10,
                            width: 40
                        },
                        [theme.breakpoints.between('lg','xl')]: {
                            fontSize: 10,
                            width: 30
                        },
                        [theme.breakpoints.between('md','lg')]: {
                            fontSize: 10,
                            width: 30
                        },
                        [theme.breakpoints.between('sm','md')]: {
                            fontSize: 10,
                            width: 20
                        },
                        [theme.breakpoints.down('sm')]: {
                            fontSize: 8,
                            width: 10
                        },
                    }}>
                        <img src={ListIcon} width={'100%'}/>
                    </Box>

                    <Box  sx={{
                        [theme.breakpoints.up('xl')]: {
                            fontSize: 10,
                            width: 40
                        },
                        [theme.breakpoints.between('lg','xl')]: {
                            fontSize: 10,
                            width: 30
                        },
                        [theme.breakpoints.between('md','lg')]: {
                            fontSize: 10,
                            width: 30
                        },
                        [theme.breakpoints.between('sm','md')]: {
                            fontSize: 10,
                            width: 20
                        },
                        [theme.breakpoints.down('sm')]: {
                            fontSize: 8,
                            width: 10
                        },
                    }}>
                        <img src={GridIcon} width={'100%'}/>
                    </Box>
                </Box>
            </Box>

            <Grid container spacing={2} direction={'row'} sx={{marginTop:'5%'}}>
                {
                    tempItems.map((item,index)=>{
                        return(
                            <Grid item={true} xl={4} lg={4} md={4} sm={4} xs={6} key={index} sx={{
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
                                    <Link to={'/detail'} state={item}>
                                        <img src={item.images[0]} style={{width:'100%',height:'100%'}}/>
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

            <Box sx={{display: 'flex', justifyContent: 'center', [theme.breakpoints.down('md')]:{marginTop:5}}}>
                <Pagination 
                    count={Math.ceil(totItems.length/(indices.to - indices.from))}
                    onChange={handlePageChange}
                    color={'paginationColor'}
                    page={currPage}
                    showFirstButton
                    showLastButton
                />
            </Box>
            

        </RightBox>
    </Box>
  )
}

export default ShopPage