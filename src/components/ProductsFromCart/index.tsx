import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import { Divider, IconButton, Typography } from '@mui/material';
import { useListCart } from '../../Provider/Cart';

export default function ProductsFromCart() {

    const { cart, removeFromCart }: any = useListCart();
    console.log("cart", cart)
    return (
        <>
            {
                cart.length !== 0 && cart.map((item: any, idx: number) => (
                    <span key={idx} >
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
                                    <Typography>{item.name}</Typography>
                                    <Typography>R$ {item.price}</Typography>
                                </Box>
                                <IconButton onClick={() => removeFromCart(item.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                        </Box>
                        <Divider />
                    </span>
                ))
            }
        </>
    );
}