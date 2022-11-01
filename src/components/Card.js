import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardBootstrap(props) {
  return (
    <Card style={{ width: '18rem', height: '400px',padding:'10px' }}>
      <Card.Img 
      className='w-[200px] h-[200px] object-cover'
      variant="top" src={props.product.image} alt='image' />
      <Card.Body>
        <Card.Title>{props.product.title}</Card.Title>
        <Card.Text>
          {props.product.price}
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default CardBootstrap;