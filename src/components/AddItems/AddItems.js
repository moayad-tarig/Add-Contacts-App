import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from '@restart/ui/esm/Button';
import Stack from 'react-bootstrap/Stack'

 class AddItems extends Component {
     state = {
        first : "",
        last : "",
        number : "",
        emptyFirst:false
     }


     handlesubmit = (e) => {
         e.preventDefault();
        if(e.target.first.value === ""){
            this.setState({emptyFirst: true})
            if(this.state.emptyFirst === true){
               
                return(

                <div className="alert alert-danger" role="alert">
                      A simple danger alert—check it out!
                </div>
                )
            }
            
        }else {

        
                this.props.addContact(this.state)
                this.setState({
                    first : "",
                    last : "",
                    number : ""
                })
      } 
    }
    
     handlechange = (e) => {
        
            this.setState({
                [e.target.id] : e.target.value
            })
         
     }

     isItEmpty = () =>  {
        if(this.state.emptyFirst === false){
            
        }else {
            
        }

        
     }
    render() {
        return (
            <div>
                  <Form className="form d-flex justify-contntent-space-between mt-5" gap={3} onSubmit={this.handlesubmit}>
                      <input type="text" className="form-control mb-2 mx-2" id="first" placeholder="First Name" onChange={this.handlechange}value={this.state.first} required></input>
                      <input type="text" className="form-control mb-2 mx-2" id="last" placeholder="Last Name" onChange={this.handlechange}value={this.state.last}></input>
                      <input type="text" className="form-control mb-2 mx-2" id="number" placeholder="Phone Number" onChange={this.handlechange}value={this.state.number} required></input>
                      <input type="Submit" className="form-control mb-2 mx-2 btn btn-dark" value="ADD"></input>
                    </Form>

                    {this.handlesubmit}               
                </div>
        )
    }
}
export default AddItems;