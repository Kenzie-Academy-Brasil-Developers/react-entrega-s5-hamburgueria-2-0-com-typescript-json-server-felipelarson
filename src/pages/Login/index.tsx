import { Link, Paper, Box, Grid, TextField, CssBaseline, Button } from '@mui/material';
import Typography from '@mui/material/Typography';

import brand from './../../assets/BurguerKenzie.png'
import { useAuth } from '../../Provider/Auth';

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Redirect } from "react-router-dom";

interface RegisterForm {
  email: string;
  password: string;
}

export default function Login() {

  const { signIn, authToken }: any = useAuth();

  const formSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Email Obrigatório"),
    password: yup.string().required("Senha Obrigatória"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({ resolver: yupResolver(formSchema) })

  if (authToken) return <Redirect to="/dashboard" />

  return (
    <Grid container component="main" sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
      <CssBaseline />

      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        component={Paper}
        elevation={6}
        square
        sx={{ height: '460px', width: '500px' }}
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
          <Box component="form" noValidate onSubmit={handleSubmit(signIn)} sx={{ mt: 1 }}>
            <Typography component="h1" variant="h5" sx={{ mt: 1 }}>
              Login
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              autoComplete="email"
              autoFocus
              {...register("email")}
            />
            <small>{errors.email?.message}</small>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("password")}
            />
            <small>{errors.password?.message}</small>
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
        <img src={brand} alt="Brand" />
      </Grid>
    </Grid>
  );
}