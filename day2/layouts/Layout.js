import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Row, Col} from "react-bootstrap";
import Sidebar from './Sidebar';
export default function Layout(props){
    return (
        <>
        <Header/>
        <Row className="container mx-auto flex-column-reverse flex-md-row">
            <Col xs={12} md={9}>
            <main className='my-5'>{props.children}</main>
            </Col>
            <Col md={3}>
                <Sidebar/>
            </Col>
        </Row>
        <Footer/>
        </>
    )
}