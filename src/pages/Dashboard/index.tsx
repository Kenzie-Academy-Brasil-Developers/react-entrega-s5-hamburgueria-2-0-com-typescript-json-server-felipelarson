import { Container, Grid } from '@mui/material';
import { Redirect } from 'react-router-dom';
import CardShow from '../../components/CardShow';
import Navbar from '../../components/Navbar';
import { useAuth } from '../../Provider/Auth';
import { useProducts } from '../../Provider/Products';

// interface dashboardProps {
//   id: number;
//   name: string;
//   category: string;
//   price: number;
//   userId: number;
// }

export default function Dashboard() {

  const {listProducts}:any  = useProducts()
  const {authToken} :any = useAuth()

  if(!authToken) return <Redirect to="/login"/>

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 20, mb: 4 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {listProducts && listProducts.map((item :any)  => (
          <Grid item xs={12} sm={6} md={3}>
            <CardShow key={item.id} item={item}/>
          </Grid>
        ))
        }
        </Grid>    
      </Container>
    </>
  )
}