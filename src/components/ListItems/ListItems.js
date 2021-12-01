import Button from '@restart/ui/esm/Button';
import React from 'react'
import Table from 'react-bootstrap/Table'





const ListItems = (props) => {
    const {contacts, DeleteContact, FilterFirst} = props;

    const Length = contacts.length
    const Fucklenth = FilterFirst.length

    const test = FilterFirst.map(e => {
        return(
            <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.first}</td>
            <td>{e.last}</td>
            <td>{e.number}</td>
            <td><Button className="btn btn-danger" onClick={()=>{ DeleteContact(e.id)}}>Delete <i className="fas fa-trash-alt"></i></Button></td>
        </tr>
        )
    })
        
        const view = Length ? (contacts.map((e) => {
            return(
                <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.first}</td>
                    <td>{e.last}</td>
                    <td>{e.number}</td>
                    <td><Button className="btn btn-danger" onClick={()=>{ DeleteContact(e.id)}}>Delete <i className="fas fa-trash-alt"></i></Button></td>
                </tr>
    
            )
        })) : (<tr className="text-center bold"><td colSpan="5">there is no Contact , please add ..</td></tr>)
   
   

   
    return (
        <div>
       
             <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Number</th>
                    <th>Del</th>
                </tr>
                </thead>
                <tbody>
                  {Fucklenth ? test : view}
                 
                  
                </tbody>
             </Table>   

                  
        </div>
    )

    }
export default ListItems;