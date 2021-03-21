import { Link } from "react-router-dom";
import useClass from "./../hooks/add-class-body";

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

const Register = () => {
  useClass("bg-blue");
  const handleRegister = () => {
    console.log("Make http request here....");
  };
  return (
    <div className="login mt-5 flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="6">
            <Card>
              <CardBody>
                <Form>
                  <h1>New account</h1>
                  <p>
                    Create account. Already registered?{" "}
                    <Link to="/Login">Login</Link>
                  </p>
                  <FormGroup className="mb-3">
                    <Label for="name">Name</Label>
                    <Input type="name" id="name" placeholder="E-mail" />
                  </FormGroup>
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
                    <Button outline color="primary" onClick={handleRegister}>
                      Go!
                    </Button>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
