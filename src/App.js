import React from 'react';
import {Helmet} from 'react-helmet';
import Layout from './Layout';
import { Card, Button } from 'react-bootstrap';

function App() {
  return (
    <>
    <Helmet>
      <title>Homepage</title>
    </Helmet>
      <Layout>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Test content
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Layout>
    </>
  );
}

export default App;
