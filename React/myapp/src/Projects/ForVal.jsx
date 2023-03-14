import React, { useEffect, useState } from 'react'

const ForVal = () => {
    let [comp, setcomp] = useState({
        name: "",
        email: "",
        password: "",
    })
    let [validate, setValidate] = useState({
        name: "",
        email: "",
        password: "",
    })

    let checkValidation = () => {
        let errors = validate;

        //Name
        if (!comp.name) {
            errors.name = "please enter a name"
        } else {
            errors.name = ""
        }

        //Email
        let condE = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";

        if (!comp.email) {
            errors.email = "please enter email id"
        } else if (!comp.email.match(condE)) {
            errors.email = "please use the format"
        } else {
            errors.email = ""
        }

        //password
        const cond1 = "/^(?=.*[a-z]).{6,20}$/";
        const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
        const cond3 = "/^(?=.*[0-9]).{6,20}$/";

        if (!comp.password) {
            errors.password = "please enter password "
        }
        else if (comp.password <= 12) {
            errors.password = "less than 12 char "

        }
        else if (comp.password >= 6) {
            errors.password = "more than 6 char  "

        }
        else if (!comp.password.match(cond1)) {
            errors.password = "please enter password using one small char "

        }
        else if (!comp.password.match(cond2)) {
            errors.password = "please enter password using one capital char "

        } else if (!comp.password.match(cond3)) {
            errors.password = "please enter password using one number"

        } else {
            errors.password = ""
        }

        setValidate(errors)
    }

    useEffect(() => {
        checkValidation()
    }, [comp]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    // (event) => setcomp({ ...comp, name: event.target.value })

    return (
        <div>
            <div className="container-mt-6">
                <div className="row">
                    <div className="col-mt-3">

                        <div className='card'>
                            <form onSubmit={handleSubmit}>

                                <div className='form-group'>
                                    <label>Name</label>
                                    <input type="text" className='form-control' placeholder='Please enter your name' onChange={(event) => setcomp({ ...comp, name: event.target.value })} value={comp.name} />
                                </div>
                                {validate.name && <h5 className='text-danger'>{validate.name}</h5>}

                                <div className='form-group'>
                                    <label>Email</label>
                                    <input type="text" className='form-control' placeholder='Please enter your email' onChange={(event) => setcomp({ ...comp, email: event.target.value })} value={comp.email} />
                                </div>
                                {validate.email && <h5 className='text-danger'>{validate.email}</h5>}

                                <div className='form-group'>
                                    <label>Password</label>
                                    <input type="text" className='form-control' placeholder='Please enter your password' onChange={(event) => setcomp({ ...comp, password: event.target.value })} value={comp.password} />
                                </div>
                                {validate.password && <h5 className='text-danger'>{validate.password}</h5>}

                                <div>
                                    <input type="submit" className='btn btn-primary' />
                                </div>

                            </form>
                        </div>
                    </div >
                </div>
            </div>
        </div>
    )
}

export default ForVal