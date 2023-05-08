import React from "react";
import { Container, Box, Grid } from '@mui/material';


export default function Maze() {

  const n = 8; // Change this value to adjust the grid size

  const renderGridItems = () => {
    const gridItems = [];

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        gridItems.push(
          <Grid key={`${i}-${j}`} item xs={12 / n}>
            <Box
              sx={{
                backgroundColor: 'green',
                color: 'black',
                height: 40,
                
              }}
            />
          </Grid>
        );
      }
    }

    return gridItems;
  };


  return (
    <Container maxWidth="sm">
      <Box
        sx={{
            backgroundColor: 'primary.dark',
            height: 1000,
            width: '100%',
            '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
            }
        }}
      >
        <Grid container spacing={0}>
          {renderGridItems()}
        </Grid>
      </Box>
    </Container>
      

      
  );
}