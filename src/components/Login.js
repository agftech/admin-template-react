import React, { Component } from "react";
import { Link } from "react-router-dom";

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

export default class Login extends Component {
  render() {
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
                      <Button outline color="primary">
                        Go!
                      </Button>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Link to="">Back Home!</Link>
        </Container>
      </div>
    );
  }
}
