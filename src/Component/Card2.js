import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CustomCard2() {
    // Import the image using require 
    // const imagepath = require('C:\Users\CITY GOODS\Desktop\react js\react-js-checkpoint\public\images\stefan-unsplash.jpg')


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="react-js-checkpoint\public\images\unsplash.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard2;