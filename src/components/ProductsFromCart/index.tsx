import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, ButtonGroup, Divider, IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useListCart } from '../../Provider/Cart';

export default function ProductsFromCart() {

    const { cart, removeFromCart } :any = useListCart();
    console.log(cart)
  return (
    <>
        <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: 'background.paper',
            overflow: 'hidden',
            fontWeight: 'bold',
        }}
        >
            <Box
                component="img"
                sx={{
                height: 80,
                width: 80,
                }}
                alt="The house from the offer."
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            />
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                m: 3,
                minWidth: 'calc(100% - 30%)',
                }}
            >
                <Box component="span" sx={{ fontSize: 16, mt: 1, display: 'flex', flexDirection: 'column', }}>
                Título
                <ButtonGroup variant="contained" size="small" aria-label="outlined primary button group" sx={{mt:2,boxShadow: 0}}>
                    <Button><RemoveIcon/></Button>
                    <Button variant="outlined">1</Button>
                    <Button><AddIcon /></Button>
                </ButtonGroup>
                </Box>
                <IconButton onClick={removeFromCart}>
                    <DeleteIcon />
                </IconButton>
            </Box>
        </Box>
        <Divider />
    </>
  );
}