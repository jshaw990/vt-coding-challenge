import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' sx={{ p: 2, bgcolor: '#17173A' }}>
                <a href='/'>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                        Vivid Theory Coding Challenge
                    </Typography>
                </a>
            </AppBar>
        </Box>
    )
}