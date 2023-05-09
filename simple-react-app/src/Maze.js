import React from "react";
import { Grid, Paper } from '@mui/material';



export default function Maze() {

  const gridValue = 4; // Change this value to adjust the grid size
  const grids = [];

    function createGrid(n) {
      const totalGrids = n*n
      
      for (let i = 0; i < totalGrids; i++) {
        grids.push(
          <Grid item xs={3} key={i}>
              <Paper sx={{ height: '100%', border: 1, gap: 0, borderRadius: 0 }}></Paper>
            </Grid>
        )
      }
      return grids
    }
  
    return (
      <div style={{ backgroundColor: 'orange', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'space-evenly', alignItems: 'start' }}>
        <div style={{position: 'relative', top: '20%'}}>
          <Grid container spacing={0} style={{ width: '200px', height: '200px' }}>
            {createGrid(gridValue)}
          </Grid>
        </div>
      </div>
    );
  
  

  
}