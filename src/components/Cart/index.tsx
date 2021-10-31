import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useModalCart } from '../../Provider/ModalCart';
import { AppBar, Button, Divider, Toolbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ProductsFromCart from '../ProductsFromCart';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function Cart() {

  const {openModalCart, handleOpenModalCart} :any = useModalCart();

  return (
    <div>
        <Modal
        open={openModalCart}
        onClose={handleOpenModalCart}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <AppBar position="fixed">
                     <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Carrinho de compras
                        </Typography>
                        <Button color="inherit" onClick={handleOpenModalCart}><CloseIcon/></Button>
                    </Toolbar>
                </AppBar>
                {/* <Typography id="modal-modal-title" variant="h6" component="h2" sx={{mt:'50px'}}>
                    Sua sacola está vazia
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Adicione itens
                </Typography> */}
                <Box sx={{mt:'50px'}}>
                    <ProductsFromCart />
                    <Divider />
                </Box>
            </Box>
        </Modal>
    </div>
  );
}