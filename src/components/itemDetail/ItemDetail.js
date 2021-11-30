import { Box, Button, Grid, Typography } from '@material-ui/core';

const ItemDetail = ({item}) => {
    return (
      <Grid container spacing={1} style={{maxWidth: 1100, margin: "0 auto"}}>
          <Grid item sm={5}>
            <img src={item.pictureUrl} alt={item.pictureUrl} height="300px" width="100%" style={{ border:"solid 1px #eee", cursor: "pointer"}}/>
          </Grid>
          <Grid item sm={7} >
              <Typography variant="subtitle1">Category: {item.category}</Typography>
              <Box mt={2}>
                <Typography variant="h4">{item.title}</Typography>
                <Typography variant="subtitle1">{item.description}</Typography>
                <Typography variant="h5">${item.price}</Typography>
               </Box>
               <Button variant="contained" style={{marginTop: "auto", background:"#fff9e7"}}>Add to cart</Button>
          </Grid>
      </Grid>
    );
  };
  export default ItemDetail;