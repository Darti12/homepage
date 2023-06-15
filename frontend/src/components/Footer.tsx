import { Box, Paper, Typography } from '@mui/material'

const Footer = () => {
    return (
        <Paper
            sx={{
                marginTop: 'calc(10% + 60px)',
                position: 'fixed',
                bottom: 0,
                width: '100%',
            }}
            component="footer"
            square
            variant="outlined"
        >
            <Box
                sx={{
                    flexGrow: 1,
                    justifyContent: 'center',
                    display: 'flex',
                    my: 1,
                }}
            >
                <img src="../logo.svg" width={75} height={30} alt="Logo" />
            </Box>

            <Box
                sx={{
                    flexGrow: 1,
                    justifyContent: 'center',
                    display: 'flex',
                    mb: 2,
                }}
            >
                <Typography variant="caption" color="initial">
                    Copyright ©2023. Unlimited
                </Typography>
            </Box>
        </Paper>
    )
}

export default Footer
