import { host } from "../configs";
import Header from "../layouts/Header";
import Layout from "../layouts/Layout";
import UserLists from "../components/user-lists";
import Pagination from "../components/pagination";
import { Form, Row, Col, Button, Modal,Alert } from "react-bootstrap";
import { useState } from "react";
// import styles from '../styles/Home.module.css'

export default function Home({ usersApi }) {
  // const data = users.data
  const [users, setUsers] = useState(usersApi.data);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState({});
  const [alert, setAlert] = useState('');
  const [sort, setSort] = useState('desc');

  const handleShow = () => setShowModal(!showModal);

  const funcFilter = (e) => {
    const value = e.target.value;

    const filterData = users.filter((user) => {
      return (
        user.first_name.toLowerCase().search(value.toLowerCase()) != -1 ||
        user.last_name.toLowerCase().search(value.toLowerCase()) != -1
      );
    });

    if (value.length == 0) {
      (async function () {
        const res = await host.get("users?page=2");
        const { data } = await res.data;
        setUsers(data);
      })();
    }

    setUsers(filterData);
  };

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const CheckError = (...args)=>{
    const canSubmit = []
    const custError = (cust) => `Mohon ${cust} diisi terlebih dahulu`;
    args.forEach(arg=>{
      if(formData[arg] === undefined ||  formData[arg] === ''){
        setError((prevState) => ({
          ...prevState,
          [arg]: custError(arg)
        }))
        canSubmit.push(false)
      }else {
        setError((prevState) => ({
          ...prevState,
          [arg]: ''
        }));
        canSubmit.push(true)
      }
    })
    return canSubmit.every(v => v === true)
  }

  const handleFilter =async() => {
    var newuser = users
    const asc = (a, b) => a.first_name.toLowerCase() > b.first_name.toLowerCase() ? 1 : -1 
    const desc = (a, b) => a.first_name.toLowerCase() < b.first_name.toLowerCase() ? 1 : -1 
    if(sort=='desc'){
    newuser.sort( asc );
    setSort('asc')
    }else{
    newuser.sort( desc );
    setSort('desc')
    }
    setUsers([...newuser]);
  }
  
  const onSubmit = async () => {
    const letSubmit = await CheckError('email','first_name','last_name')
    if (letSubmit){
      
  const res = await host.post("users");
  res.status >= 200 && res.status < 300 && setAlert(
  <Alert variant="success">
  <p>
    Aww yeah, you successfully send data
  </p>
</Alert>)
    }
  };
  return (
    <Layout>
      <Row className="justify-content-md-end my-5">
        <Col md="4">
          <Button variant="primary" onClick={handleShow}>
            + Tambahkan
          </Button>
        </Col>
        <Col md="4">
          <Button variant="primary" onClick={handleFilter}>
            Sort Asc/Desc
          </Button>
        </Col>
        <Col md="4">
          <Form.Control
            type="text"
            onChange={funcFilter}
            placeholder="Search Users..."
          />
        </Col>
      </Row>
      <Modal show={showModal} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {alert}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Nama awal</Form.Label>
              <Form.Control
                name="first_name"
                type="text"
                placeholder="Nama awal"
                onChange={inputChange}
              />
              <Form.Text className="text-muted">
                {error["first_name"]}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Nama akhir</Form.Label>
              <Form.Control
                name="last_name"
                type="text"
                placeholder="Nama akhir"
                onChange={inputChange}
              />
              <Form.Text className="text-muted">
                {error["last_name"]}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                onChange={inputChange}
              />
              <Form.Text className="text-muted">
                {error["email"]}
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Close
          </Button>
          <Button variant="primary" onClick={onSubmit}>
            Tambahkan
          </Button>
        </Modal.Footer>
      </Modal>
      {users.length > 0 ? (
        <>
          <Pagination
            data={users}
            RenderComponent={UserLists}
            title="Posts"
            pageLimit={5}
            dataLimit={3}
          />
        </>
      ) : (
       <h1>No Posts to display</h1>
      )}
      {/* <UserLists users={users} /> */}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const res = await host.get("users?page=2");
  const data = await res.data;
  return {
    props: { usersApi: data } // will be passed to the page component as props
  };
}
