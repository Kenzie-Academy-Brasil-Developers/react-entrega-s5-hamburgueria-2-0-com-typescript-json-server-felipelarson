import { Container, Grid } from '@mui/material';
import { Redirect } from 'react-router-dom';
import CardShow from '../../components/CardShow';
import Cart from '../../components/Cart';
import Navbar from '../../components/Navbar';
import { useAuth } from '../../Provider/Auth';
import { useModalCart } from '../../Provider/ModalCart';
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
  const {openModalCart} :any = useModalCart()

  if(!authToken) return <Redirect to="/login"/>

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 20, mb: 4 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {listProducts && listProducts.map((item :any)  => (
          <Grid key={item.id} item xs={12} sm={6} md={3}>
            <CardShow item={item}/>
          </Grid>
        ))
        }
        </Grid>
        {
          openModalCart &&
          <Cart />
        }   
      </Container>
    </>
  )
}