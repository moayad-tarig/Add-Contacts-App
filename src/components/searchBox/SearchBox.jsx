import React from 'react'
import "./SearchBox.style.css"
import { FormControl, Form } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'



 function SearchBox(props) {
     const { handleSearch , handleTyping} = props;
    return (
        <div>
              <Form className="d-flex formE" onSubmit={handleSearch}>
                        <FormControl
                            type="search"
                            placeholder="Search In Content .."
                            className="me-2"
                            aria-label="Search"
                            onChange={handleTyping}
                        />
                             <input type="submit" className="btn btn-dark text-white" />
                         </Form>  
        </div>
    )
}
export default SearchBox;