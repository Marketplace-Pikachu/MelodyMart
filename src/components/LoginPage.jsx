import React from 'react';
import { TextField, Button, Paper, Box, Typography } from '@mui/material';

const LoginPage = () => {

    return (
        <Box className='loginPage'>
            <Paper elevation={3} className='paper'>
                <Typography variant='h6'>Login</Typography>
                <Box component='form' onSubmit={handleSubmit} noValidate className='form'>
                    <TextField/>
                    <TextField/>
                    <Button type='submit' fullWidth variant='contained' className='submit'>
                        Sign In
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}

export default LoginPage;