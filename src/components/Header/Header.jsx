import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { FormControl, Form } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import "./Header.style.css"
import { render } from '@testing-library/react'


 class Header extends Component{
     
   

   
        render(){
        return (
            <div>
                
                    <Navbar expand="lg" variant="light" bg="dark" className="align-center d-flex align-item-center justify-content-center">
                        
                        <Navbar.Brand href="#" className="text-center text-white fontW " >ADD YOUR CONTACTS APP</Navbar.Brand>
                       
                       
                    </Navbar>
                            
            </div>
        )
    }
}

export default Header;