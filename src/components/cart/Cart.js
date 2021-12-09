import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography, makeStyles, IconButton } from '@material-ui/core'
import DeleteIcon from '@mui/icons-material/Delete';
import { Fragment } from 'react'
import { Link } from "react-router-dom"
import { useCart } from '../../contexts/CartContext'

const useStyles = makeStyles({
    image: {
        borderRadius: '8px',
        height: '20%',
        maxHeight: '150px',
        maxWidth: '250px',
        width: '100%'
    },
    listItem:{
        marginLeft: '50px'
    },
    item:{
        marginLeft: '10px',
        marginRight: '10px'
    },
    summary: {
        postion: 'fixed',  
        top: '-55px'
    }
})

const Cart = () => {
    const {products, totalItems, totalPrice, removeItem} = useCart()
    const classes = useStyles()
    function handleRemove (id){
        removeItem(id)
    }
    
    return(
        <Grid container spacing={1} style={{marginTop: '75px'}}>
            <ListItem className={classes.listItem}>
                <Typography variant='h5'>Bag</Typography>
            </ListItem>
            {products <= 0 ? 
                 <>
                 <Grid item md={6} className={classes.item}>
                     <List>
                         <ListItem alignItems="center" divider>
                            <ListItemText>
                                <Typography>There are not items in your bag</Typography>
                            </ListItemText>
                        </ListItem>
                     </List>
                 </Grid>
                 </> : (
                     products.map(products => {
                         return(
                             <>
                             <Grid item md={6} className={classes.item}>
                                 <List>
                                     <ListItem alignItems="center" divider>
                                         <ListItemAvatar>
                                            <Link to={`/item/${products.id}`} style={{textDecoration: "none", color:'inherit'}} >
                                                <Avatar alt={products.title} src={products.pictureUrl} className={classes.image} />
                                            </Link>
                                         </ListItemAvatar>
                                         <ListItemText
                                             className={classes.listItem}
                                             primary={
                                                 <Fragment>
                                                     <Typography variant='h5' align='justfy'>
                                                         <Link to={`/item/${products.id}`} style={{textDecoration: "none", color:'inherit'}} >
                                                            {products.title} - 
                                                           $ {products.price}
                                                         </Link>
                                                     </Typography>
                                                 </Fragment>}
                                             secondary={
                                                 <Fragment>
                                                     <Typography
                                                         sx={{ display: 'inline' }}
                                                         component="span"
                                                         variant="subtitle2"
                                                         color="text.primary"
                                                     >
                                                     {products.category}
                                                     </Typography>
                                                 </Fragment>
                                             }
                                         />
                                         <IconButton >
                                             <DeleteIcon onClick={() => handleRemove(products.id)} style={{color: '#161412'}}/>
                                         </IconButton>
                                         </ListItem>
                                 </List>
                             </Grid>
                             </>
                         )
                     })
                 )}
            <Grid item md={5} className={classes.item}>
                <List className={classes.summary}>
                    <ListItem alignItems="center">
                        <Typography variant='h5'>Summary</Typography>
                    </ListItem>
                    {totalItems() === 0 ? 
                        <ListItem alignItems="center" divider>
                            <Typography variant='body1'>0 products added</Typography>
                        </ListItem> : (
                        <ListItem alignItems="center" divider>
                            <Typography variant='body1'>Products: {totalItems()}</Typography>
                        </ListItem>
                    )}
                    {totalPrice() === 0 ? 
                        <ListItem alignItems="center" divider>
                            <Typography variant='body1'>Total: $0</Typography>
                        </ListItem> : (
                        <ListItem alignItems="center" divider>
                            <Typography variant='body1'>Total: ${totalPrice()}</Typography>
                        </ListItem>
                    )}
                </List>
            </Grid>
        </Grid>
    )
}

export default Cart