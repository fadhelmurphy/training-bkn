import React from "react";
import { Navbar,Container } from "react-bootstrap";
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
            
          <Navbar.Brand>
        <Link href="/">
            React Bootstrap
            
        </Link>
          </Navbar.Brand>
        <Link href="/registration">
            Register
        </Link>
        </Container>
      </Navbar>
    </>
  );
}
