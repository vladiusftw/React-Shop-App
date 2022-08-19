import { Box, Button, styled, Typography } from '@mui/material'
import React from 'react'

const DiscountBox = () => {
    const OrangeBox = styled(Box)({
        backgroundColor:'#F86338',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    })

  return (
    <OrangeBox>
        <Typography>
            March Discount
        </Typography>

        <Typography>
            Up to 70% off
        </Typography>

        <Button>
            Got it {'>'}
        </Button>
    </OrangeBox>
  )
}

export default DiscountBox