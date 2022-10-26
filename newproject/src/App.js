
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form,Card, FormControl, FormGroup, FormLabel,Container,Row,Col, CardImg} from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <header className="App-header">

      <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>


        <h1>checkpoint </h1>
      <Container>
      <Form>
        <Row>
        <Col>
        <Form.Group controlId='formemail'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="exemple@gmail.com"/>
        </Form.Group>
        </Col>
        <Col>
        <FormGroup controlId='formpassword'>
          <FormLabel>Password</FormLabel>
          <FormControl type='password' placeholder='password'/>
        </FormGroup>
        </Col>
        </Row>
       
        <Button variant="secondary" type='submit'>login</Button>
      </Form>

</Container>
      </header>
      
      <body className='App-body'>
     
        <h1>Pourquoi notre méthodologie est efficace ?</h1>
      <Row>
        <Col>
<Card  className='"mb-3' style={{color:'#000'}}>
<CardImg src='https://gomycodewebsite.blob.core.windows.net/website/img/Accompagnement_personnalise_picto_3f668f1589.svg'/>
<Card.Body>GoMyCode </Card.Body>
<Card.Title>Accompagnement personnalisé</Card.Title>
<Card.Text>En plus de contenir un projet final, chaque parcours contient plusieurs projets et exercices pratiques pour donner la possibilité à l'étudiant de tester et construire par lui mêm</Card.Text>
</Card>
</Col>
<Col>
<Card  className='"mb-3' style={{color:'#000'}}>
<CardImg src='https://gomycodewebsite.blob.core.windows.net/website/img/communaute_picto_bdf74eeb40.svg'/>
<Card.Body>GoMyCode ..</Card.Body>
<Card.Title>La communauté GOMYCODE</Card.Title>
<Card.Text>En rejoignant GOMYCODE vous aurez accès au support de toute une communauté passionnée par le numérique pour vous motiver au quotidien. Nous organisons aussi différents événements: hackathons, talks, panels… pour notre communauté.</Card.Text>
</Card>
</Col>



        <Col>
<Card  className='"mb-3' style={{color:'#000'}}>
<CardImg src='https://gomycodewebsite.blob.core.windows.net/website/img/64c7ef25_fb63_4799_b544_4a11b99e2935_56a5f1d787.svg'/>
<Card.Body>GoMyCode </Card.Body>
<Card.Title>Un parcours orienté projets</Card.Title>
<Card.Text>En plus de contenir un projet final, chaque parcours contient plusieurs projets et exercices pratiques pour donner la possibilité à l'étudiant de tester et construire par lui mêm</Card.Text>
</Card>
</Col>
<Col>
<Card  className='"mb-3' style={{color:'#000'}}>
<CardImg src='https://gomycodewebsite.blob.core.windows.net/website/img/Contenu_riche_picto_6a43651e9f.svg'/>
<Card.Body>GoMyCode ..</Card.Body>
<Card.Title>Un contenu riche et interactif</Card.Title>
<Card.Text>En rejoignant GOMYCODE vous aurez accès au support de toute une communauté passionnée par le numérique pour vous motiver au quotidien. Nous organisons aussi différents événements: hackathons, talks, panels… pour notre communauté.</Card.Text>
</Card>
</Col>
<a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>
</Row>

      </body>
    </div>
  );
}

export default App;
