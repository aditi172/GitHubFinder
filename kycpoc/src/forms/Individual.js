import React from 'react';
import individual from './Individual.json';
import Form from 'react-jsonschema-form';
import Display from '../pages/Display';

const Individual = (props) => {
    var formdata=null;
    const onSubmit=({formData})=> {
        console.log(formData);
        formdata=formData;
        props.history.push({
            pathname:"/success",
            state: {
                formData: formData
            }
        })};
    if(!formdata) {
        return (
            <div>
                <Form className="form-container" schema={individual} onSubmit={onSubmit}></Form>
            </div>
        )
    }
        return(
            <div>
                <Display formData={formdata}></Display>
            </div>
        )
}
export default Individual;