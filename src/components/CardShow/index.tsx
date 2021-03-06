import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imgDefault from '../../assets/default.png'
import { useListCart } from '../../Provider/Cart';

interface ItemProps {
  category: string;
  id: number;
  name: string
  price: number;
  userId: number;
}

interface IProps {
  item: ItemProps;
}

export default function CardShow({ item }: IProps) {
  const { addToCart }: any = useListCart()

  return (

    <Card sx={{ maxWidth: 345, border: "2px solid grey", ":hover": { border: "2px solid #27AE60" } }}>
      <CardMedia
        component="img"
        height="140"
        image={imgDefault} alt="Produtos"
        sx={{ background: '#e0e0e0' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          R$ {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={() => addToCart(item)}>Adicionar</Button>
      </CardActions>
    </Card >
  );
}