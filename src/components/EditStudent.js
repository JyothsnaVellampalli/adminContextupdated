import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import {StudentContext} from '../App';

function EditStudent() {
    let context=useContext(StudentContext);
    let navigate=useNavigate("");
    let params=useParams();
      console.log(params);
    
    useEffect(()=>{
      let setdata=()=>{
        setName(context.students[params.id].name);
          setEmail(context.students[params.id].email);
          setMobile(context.students[params.id].mobile);
          setCls(context.students[params.id].class);
      }
        setdata();
        
      },[context,params.id])
     
    
      let [name,setName]=useState("");
      let [email,setEmail]=useState("");
      let [mobile,setMobile]=useState("");
      let [cls,setCls]=useState("");
    
    function update(){
        let arrupdate={name,email,mobile,"class":cls};
        let newarr=[...context.students];
        newarr.splice(params.id,1,arrupdate);
        context.setStudents(newarr);
        navigate("/allstudents");
      }
      
      
      return (
        <div>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} placeholder="Enter Name" onChange={b=>setName(b.target.value)} />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="Email" value={email} placeholder="Email" onChange={b=>setEmail(b.target.value)}/>
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicmobile">
        <Form.Label>mobile</Form.Label>
        <Form.Control type="text" value={mobile} placeholder="mobile" onChange={b=>setMobile(b.target.value)}/>
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicclass">
        <Form.Label>Class</Form.Label>
        <Form.Control type="text" value={cls} placeholder="Class" onChange={b=>setCls(b.target.value)} />
      </Form.Group>
        </Form> 
        
        <Button variant="primary" onClick={update}>
        Update
      </Button>
     
        </div>
      )
  
}

export default EditStudent
