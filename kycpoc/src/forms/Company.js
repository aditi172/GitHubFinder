import React from 'react';
import organization from './Company.json';
import Form from 'react-jsonschema-form';

const Company = () => {
    const onSubmit=({formData})=> {
        console.log(formData);
    }
    return (
        <div>
            <Form className="form-container" schema={organization} onSubmit={onSubmit}></Form>
        </div>
    )
}
export default Company;