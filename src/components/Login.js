import React from 'react';
import { Link } from 'react-router-dom';
import useClass from './../hooks/add-class-body'

import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const Login = (props) => {
    useClass('bg-blue')
    const handleLogin = () => {
        console.log('Make http request here....')
    }    
    return (
      <div className="login mt-5 flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Card>
                <CardBody>
                  <Form>
                    <h1>Login</h1>
                    <FormGroup className="mb-3">
                      <Label for="email">Email</Label>
                      <Input type="email" id="email" placeholder="E-mail" />
                    </FormGroup>
                    <FormGroup className="mb-3">
                      <Label for="password">Password</Label>
                      <Input
                        type="password"
                        id="password"
                        placeholder="Password"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Button outline color="primary" onClick={handleLogin}>
                        Go!
                      </Button>
                    </FormGroup>
                    <FormGroup>
	                    <Link to="forgot">
	                        <Button color="link">
	                            Forgot Password?
	                        </Button>
	                    </Link>
	                    <span>
	                       	New? <Link to="/register">Sign-up</Link>
	                     </span>
                    </FormGroup>                   
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Login;