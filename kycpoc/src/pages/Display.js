import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';

const Display = (props) => {
    const form=Object.values(props.history.location.state)[0];
    console.log(form);
    return (
        <div className="container">
            {/* <ul className="list">
                {Object.keys(form).map((key)=>
                    <li className="list li">{key}{": "}{form.key}</li>
                )}
            </ul> */}
            <div>
                <div className="alert alert-success">
                    <i className="fas fa-check-circle"></i>{" "}Successfully added the details
                </div>
            </div>
            <div className="card">
                <ReactBootStrap.Table>
                    <tbody>
                        {Object.keys(form).map((key)=> 
                            <tr>
                                <td>{key}</td>
                                <td>{form[key]}</td>
                            </tr>
                        )}
                    </tbody>
                </ReactBootStrap.Table>
            </div>
        </div>
    )
}
export default Display;
