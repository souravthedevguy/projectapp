import React, { useState } from 'react';
import { Button, Card, Placeholder } from 'react-bootstrap';

const Product = ({ id, title, price, description, category, image, rating, actionAddToCart }) => {

  const [ showMore, setShowMore ] = useState(false);

  return (
    <Card style={{ width: '18rem' }} className='mb-5'>
        <Card.Img style={{ maxWidth: "80%" }} variant="top" src={image} />
        <Card.Body>
        <Card.Title style={{marginBottom: "1rem"}}>{ title }</Card.Title>
        <Card.Subtitle style={{marginBottom: "1rem"}}>Price: ${ price }</Card.Subtitle>

        <Card.Text>
          { showMore 
            ? description 
            : `${ description.substring(0, 100) }`
          }
          <a type="button" onClick={ () => setShowMore(!showMore) }> { showMore ? "...less" : "...more" } </a>
        </Card.Text>

        <Button 
        variant="primary" 
        type='button' 
        onClick={() => actionAddToCart(id, title, price)}>Add to cart</Button>
        </Card.Body>
    </Card>
  )
};

export default Product;
