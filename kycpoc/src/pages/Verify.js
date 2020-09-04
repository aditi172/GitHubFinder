import React, { useState } from 'react';
// import initMB from 'messagebird';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


const Verify = (props) => {
    // const messagebird = initMB('RSBdL3dft4DSMDW9WgshRlycp');
    const [number, setNumber] = useState('');
    const [code, setCode]= useState('');
    // const onSubmit=(e)=> {
    //     [e.target.name]=e.target.value;
    // }
    // const onVerify=async (e)=> {
    //     [e.target.name]=e.target.value;
    //     try {
    //         const res= await messagebird.verify.create(number, {
    //             template: "Your verification code is %token"
    //         })

    //         const id=res.id;
    //         const token=res.token;
    //         const ans=await messagebird.verify.verify(id, token);
    //         if(ans) {
    //             props.history.push("/select");
    //         }
    //     } catch( err ) {
    //         console.log(err);
    //     }
    // }
    const onSubmit2=(e)=> {
        e.preventDefault();
        props.history.push("/select");
    }
    const onSubmit1=(e)=> {
        e.preventDefault();
        console.log(number);
    }
    const onChange=(e)=> {
        setCode(e.target.value);
    }
    
    return (
        <div className="form-container">
            <form onSubmit={onSubmit1}>
                <label htmlFor="number"><h3>Enter Your Phone Number here: </h3></label>
                <PhoneInput
                    placeholder="Enter phone number"
                    value={number}
                    name="number"
                    onChange={setNumber}/>
                <input type="submit" name="submit" value="Submit"></input>
            </form>
            <br></br>
            <form onSubmit={onSubmit2}>
                <label htmlFor="code"><h3>Enter the Code received on the given number here:</h3></label>
                <input 
                    type="text"
                    name="code"
                    value={code}
                    onChange={onChange}>
                </input>
                <input type="submit" name="submit" value="Verify"></input>
            </form>
        </div>
    )
}
export default Verify;
