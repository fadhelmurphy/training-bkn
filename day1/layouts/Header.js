import React from "react";
import { Navbar,Container } from "react-bootstrap";
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
            
        <Link href="/">
          <Navbar.Brand>
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Bootstrap
            
          </Navbar.Brand>
        </Link>
        </Container>
      </Navbar>
    </>
  );
}
