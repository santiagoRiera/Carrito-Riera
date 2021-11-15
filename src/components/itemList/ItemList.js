import Item from './../item/Item'
import { Grid } from '@material-ui/core'

const ItemList = ({products}) => {
    console.log('Productos en el itemList', products)
    return(
        <Grid container spacing={3}>
            {products.map(product => {
                return(
                    <Grid item xs={12} sm={6} md={4}>
                        <Item key={product.id} product={product}/>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default ItemList