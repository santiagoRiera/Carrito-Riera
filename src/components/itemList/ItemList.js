import Item from './../item/Item'
import { Grid } from '@material-ui/core'

const ItemList = ({products}) => {
    return(
        <Grid container spacing={2}>
            
            {products.map(product => {
                return(
                    <Grid item xs={12} sm={6} md={4}>
                        <Item product={product}/>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default ItemList