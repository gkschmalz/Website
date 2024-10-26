import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

export const Blog = () => {
  return (
    <HelmetProvider>
      <Container className="Blog-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Blog | </title>
          {/* <meta name="description" content={meta.description} /> */}
        </Helmet>
        <Row>
          <p>Blog posts here</p>
        </Row>
      </Container>
    </HelmetProvider>
  );


};