import React, { useState } from 'react';

const Select = (props) => {
    const [value, setValue]=useState('Individual KYC');
    // var schema=individual;
    const handleSubmit=(e)=> {
        e.preventDefault();
        if(value==="Individual KYC") {
            props.history.push("/individual");
        }
        else {
            props.history.push("/company");
        }
    }
    const onChange=(e)=> {
        console.log(e.target.value);
        setValue(e.target.value);
        console.log(value); 
    }
        return(
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    Select an option:
                    <select value={value} onChange={onChange} style={{width: "100%", height: "2.5rem"}}>
                        <option value="Individual KYC">Individual KYC</option>
                        <option value="Organization KYC">Organization KYC</option>
                    </select>
                    <input type="submit" value="Submit" />
                </form>  
            </div>
        )
    }
export default Select;