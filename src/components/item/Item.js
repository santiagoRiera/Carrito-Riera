import { Link } from "react-router-dom";
import {  CardActionArea, Card, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        height: "100%",
    },
    link: {
        textDecoration: "none"
    }
})

const Item = ({product}) => {
    const classes = useStyles()
    return (   
    <Link to={`/item/${product.id}`} className={classes.link}>
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image={product.pictureUrl}
                    alt='Imagen de producto'
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="inherit">
                        {product.description}
                    </Typography>
                    <Typography variant="body2" color="inherit">
                        ${product.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Link>     
    );
}

export default Item