import * as React from 'react';
import {  CardActionArea, Card, CardContent, CardMedia, Typography } from '@material-ui/core';

const Item = ({product}) => {
    return (        
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image={product.pictureUrl}
                    alt='Imagen de producto'
                />
                <CardContent>
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
    );
}

export default Item