import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function TopBar() {
  return (
    <Box 
      sx={{ 
        position: 'fixed', 
        top: 0, //Asegura que este hasta arriba de la pg.
        width: '100%', 
        backgroundColor: 'primary.dark', 
        color: 'white', 
        py: 1, 
        textAlign: 'center', 
        zIndex: (theme) => theme.zIndex.appBar + 1 // Pone 'TopBar' un nivel superior de 'AppBar', asegurandose de que este arriba del mismo.   
      }}
    >
      <Typography variant="body2">
        Tel. Oficina: (81) 8129-6915 | Cel: 811-120-8920| Email: info@example.com
      </Typography>
    </Box>
  );
}

export default TopBar;
