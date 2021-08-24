import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../components/Layout/index";
import Input from "../../components/UI/Input";
import { login } from "../../action";

const Signin = () => {
  const userlogin = (e) => {
    e.preventDefault();
    const user = {
      eamil: "riz@SpeechGrammarList.com",
      password: "123456",
    };
    login(user);
  };
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userlogin}>
              <Input
                label="Email Name"
                placeholder="Email Name"
                value=""
                type="email"
                onChange={() => {}}
              />
              <Input
                label="Password"
                placeholder="Password"
                value=""
                type="Password"
                onChange={() => {}}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signin;
