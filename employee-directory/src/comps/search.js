import React from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';


// search form/button
function Search ({handleSearchChange}) {
   return (
      <Form>
         <FormGroup>
         <Label for="exampleSearch">Search</Label>
         <Input
            type="search"
            name="search"
            id="exampleSearch"
            placeholder="Search Here"
            onChange={e => handleSearchChange(e)}
         />
         </FormGroup>
      </Form>
   );
}


export default Search;