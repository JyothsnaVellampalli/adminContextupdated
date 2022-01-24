import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {StudentContext} from '../App';

function AllStudents() {
    let context=useContext(StudentContext);
    function DeleteStudent(i){
        let newdata=[...context.students];
        newdata.splice(i,1);
        context.setStudents(newdata);
      }
      return<>
       <Table hover className="highlight">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>email</th>
            <th>mobile</th>
            <th>class</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            context.students.map((b,i)=>{
              return <tr key={i}>
                <td>{i+1}</td>
                <td>{b.name}</td>
                <td>{b.email}</td>
                <td>{b.mobile}</td>
                <td>{b.class}</td>
                <td>
                <Button variant="danger" size="sm" onClick={()=>DeleteStudent(i)}>DELETE</Button>
                <span>  </span>
                <Link to={`/editstudent/${i}`}>
                <Button variant="primary" size="sm">EDIT</Button>
                </Link>
                </td>
               
              </tr>
            })
          }
        </tbody>
      </Table>
      </>
  
}

export default AllStudents
