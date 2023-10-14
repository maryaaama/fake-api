import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap'; 

function FormApi() {
  const [validated, setValidated] = useState(false);
  const [firstName,setFirstName]= useState('');
  const [lastName,setLastName]= useState('');
  const [email,setEmail]= useState('');

  const handleSubmit = (event) => {
       event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
   let userInfo ={
    firstName,
    lastName,
    email
   }
   fetch('https://jsonplaceholder.typicode.com/posts',{
    method :'post',
    body : JSON.stringify(userInfo)
   }).then(response=>console.log(response))

};

  return (
    <Container className='bg-success-subtle mb-4 mt-4 p-3'>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
          value={firstName}
          onChange={(event)=>setFirstName(event.target.value)}
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
          value={lastName}
          onChange={(event)=>setLastName(event.target.value)}
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
     
      <Button type="submit" className='bg-light text-black'>Submit form</Button>
    </Form>
    </Container>
  );
}

export default FormApi;