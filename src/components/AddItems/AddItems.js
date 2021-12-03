import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'


 function AddItems(props){
     
     const [state, setState] =  useState({ first:"", last:"", number:"" })
      

     function handlesubmit(e){
         e.preventDefault();
         props.addContact(state)
         console.log(state, "handlesubmint")
         setState({
             first:"",
             last:"",
             number:""
         })

    }
    
    function handlechange(e){
       
       setState((prev)=>{ return {...prev, [e.target.id]: e.target.value}
       })
     }

   
        
     
    
        return (
            <div>
                  <Form className="form d-flex justify-contntent-space-between mt-5" gap={3} onSubmit={handlesubmit}>
                      <input type="text" className="form-control mb-2 mx-2" id="first" placeholder="First Name" onChange={handlechange}value={state.first} required></input>
                      <input type="text" className="form-control mb-2 mx-2" id="last" placeholder="Last Name" onChange={handlechange}value={state.last}></input>
                      <input type="text" className="form-control mb-2 mx-2" id="number" placeholder="Phone Number" onChange={handlechange}value={state.number} required></input>
                      <input type="Submit" className="form-control mb-2 mx-2 btn btn-dark" value="ADD"></input>
                    </Form>
                   

                                
                </div>
        )
    
}
export default AddItems;