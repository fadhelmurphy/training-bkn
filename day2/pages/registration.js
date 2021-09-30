import { useCallback, useState } from "react";
import { Form, Row, Col,Button } from "react-bootstrap";
import { host } from "../configs";
import Layout from "../layouts/Layout";

export default function Registration() {
  const [error, setError] = useState({});
  const [formData, setFormData] = useState({});
  const [alert, setAlert] = useState('');

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

  const DynamicForm = () => {
    const data = [
      [
        {
          name: "first_name",
          type: "text",
          placeholder: "Nama Awal"
        },
        {
          name: "last_name",
          type: "text",
          placeholder: "Nama Akhir"
        }
      ],
      [
        {
          name: "alamat",
          type: "textarea",
          placeholder: "Alamat"
        }
      ],
      [
          
        {
            name: "kelurahan",
            type: "text",
            placeholder: "Kelurahan"
          },
          {
            name: "kecamatan",
            type: "text",
            placeholder: "Kecamatan"
          }
      ],
      [
          
        {
            name: "kota",
            type: "text",
            placeholder: "kota"
          },
          {
            name: "provinsi",
            type: "text",
            placeholder: "Provinsi"
          }
      ],
      [
          
        {
            name: "notelp",
            type: "text",
            placeholder: "No. Telp"
          },
          {
            name: "nohp",
            type: "text",
            placeholder: "No. HP"
          }
      ]
    ];
    return data.map((el,index) => 
        <>
      <Row key={index}>
        {el.length > 1 &&
          el.map((ele,indextwo) => 
            <Col xs={12} md={6} key={indextwo}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>{ele.placeholder}</Form.Label>
                <Form.Control
                  name={ele.name}
                  type={ele.type}
                  placeholder={ele.placeholder}
                  onChange={inputChange}
                />
                <Form.Text className="text-danger">{error[ele.name]!==undefined&&error[ele.name]}</Form.Text>
              </Form.Group>
            </Col>
          )}
        {el.length === 1 &&
          el.map((ele,indexone) => 
            <Col xs={12} key={indexone}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>{ele.placeholder}</Form.Label>
                <Form.Control
                  name={ele.name}
                  as={ele.type}
                  placeholder={ele.placeholder}
                  onChange={inputChange}
                />
                <Form.Text className="text-danger">{error[ele.name]!==undefined&&error[ele.name]}</Form.Text>
              </Form.Group>
            </Col>
          )}
      </Row>
      </>
      );
  };

  const onSubmit = async () => {
    const letSubmit = await CheckError(
        'first_name','last_name',
        'alamat',
        'kelurahan','kecamatan',
        'kota','provinsi',
        'notelp','nohp')
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
    <>
      <Layout>
        <Form>
            {alert}
            <DynamicForm/>
          <Button variant="primary" onClick={onSubmit}>
            Tambahkan
          </Button>
        </Form>
      </Layout>
    </>
  );
}
