import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Table from '../components/table'
import { Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';
export default function Home() {
  return (
    <>
    <Row justify="center" align="middle">
    <Col span={12}>
    <Table/>
    </Col>
    </Row>
    </>
  )
}
