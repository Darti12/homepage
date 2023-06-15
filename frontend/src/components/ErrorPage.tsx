import React from 'react'
import { Box, Typography } from '@mui/material'

const ErrorPage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
            }}
        >
            <Typography variant="h1" style={{ color: 'white' }}>
                404
            </Typography>
        </Box>
    )
}

export default ErrorPage
