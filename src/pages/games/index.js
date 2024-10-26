import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

export const Games = () => {
  return (
    <HelmetProvider>
      <Container className="Games-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Games | </title>
          {/* <meta name="description" content={meta.description} /> */}
        </Helmet>
        <Row>
          <p>Game links here(maze game, other godot games etc.)</p>
        </Row>
      </Container>
    </HelmetProvider>
  );


};