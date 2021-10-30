import * as React from 'react';
import {Link, Paper, Box, Grid, TextField, CssBaseline, Button} from '@mui/material';
// import { LockOutlinedIcon } from '@mui/icons-material';
import Typography from '@mui/material/Typography';

import brand from './../../assets/BurguerKenzie.png'

export default function Login() {
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
      <Grid container component="main" sx={{ height: '100vh', display: 'flex',  }}>
        <CssBaseline />
        
        <Grid 
          item 
          xs={12} 
          sm={8} 
          md={6} 
          component={Paper} 
          elevation={6} 
          square 
          sx={{height: '460px', width: '500px'}}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%'
            }}
          >
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <Typography component="h1" variant="h5" sx={{mt: 1}}>
                Login
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="nome"
                label="Nome"
                name="nome"
                autoComplete="nome"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Logar
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/signup" variant="subtitle1">
                    Crie sua conta para saborear muitas delícias e matar sua fome
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          <img src={brand} alt="Brand"/>
        </Grid>
      </Grid>
  );
}