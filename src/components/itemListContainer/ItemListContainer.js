import * as React from 'react';
import { Box, Grid, Paper, styled } from '@material-ui/core';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ListItemContainer() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid item xs>
          <Item style={{marginTop: '75px'}}>Example</Item>
        </Grid>
        <Grid item xs={6}>
          <Item style={{marginTop: '75px'}}>Content</Item>
        </Grid>
        <Grid item xs>
          <Item style={{marginTop: '75px'}}>Example</Item>
        </Grid>
        <Grid item xs={12}>
          <Item>Example</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
  
