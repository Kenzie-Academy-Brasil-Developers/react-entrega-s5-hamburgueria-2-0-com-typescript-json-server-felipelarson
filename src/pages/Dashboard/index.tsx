import { Container, Grid } from '@mui/material';
import CardShow from '../../components/CardShow';
import Navbar from '../../components/Navbar';
import { useProducts } from '../../Provider/Products';


export default function Dashboard() {

  const {listProducts, getAllProducts} = useProducts()

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 20, mb: 4 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6} md={3}>
            <CardShow />
          </Grid>
        </Grid>    
      </Container>
    </>
  )
}