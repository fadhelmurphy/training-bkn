import { useRouter } from "next/router";
import React from "react";
import { Col, Card, Button } from "react-bootstrap";

export default function SingleUser({ user }) {

  return (
    <Col md={4}>
      <Card>
        <Card.Img variant="top" src={user.avatar} />
        <Card.Body>
          <Card.Title>
            {user.first_name} {user.last_name}
          </Card.Title>
          <Card.Text>{user.email}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
