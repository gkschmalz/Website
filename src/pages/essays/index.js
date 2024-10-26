import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

export const Essays = () => {
  return (
    <HelmetProvider>
      <Container className="Essays-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Essays | </title>
          {/* <meta name="description" content={meta.description} /> */}
        </Helmet>
        <Row>
          <p>Essays here</p>
        </Row>
      </Container>
    </HelmetProvider>
  );


};