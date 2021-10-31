import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

export default function ProductsFromCart() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        bgcolor: 'background.paper',
        overflow: 'hidden',
        borderRadius: '12px',
        fontWeight: 'bold',
      }}
    >
      <Box
        component="img"
        sx={{
          height: 80,
          width: 80,
          maxHeight: { xs: 80, md: 80 },
          maxWidth: { xs: 80, md: 80 },
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: { xs: 'center', md: 'flex-start' },
          m: 3,
          minWidth: { md: 350 },
        }}
      >
        <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
          Título
        </Box>
        <IconButton>
            <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
}