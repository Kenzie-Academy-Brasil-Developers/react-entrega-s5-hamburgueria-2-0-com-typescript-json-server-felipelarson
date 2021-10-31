import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useModalCart } from '../../Provider/ModalCart';
import { AppBar } from '@mui/material';

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
                <AppBar>
                    <Typography>Carrinho de compras</Typography> 
                </AppBar>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Sua sacola está vazia
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Adicione itens
                </Typography>
            </Box>
        </Modal>
    </div>
  );
}