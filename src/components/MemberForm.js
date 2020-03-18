import React, { useState } from "react";

const MemberForm = props => {

    const [formState, setFormState] = useState({
        id: "",
        name: "",
        body: "",
        email: "",
    });
    console.log(formState);

    const changeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });


    };

    const formSubmitHandler = event => {
        event.preventDefault();

        props.addMember({
            ...formState,
            id: Date.now()
        });
    };



    return (

        <form onSubmit={formSubmitHandler}>
            <div className="title">
                <h1>Team Builder</h1>
            </div>
            <label htmlFor="name"></label>
            <input
                type="text"
                name="name"
                value={formState.name}
                onChange={changeHandler}
                placeholder="Full Name (Required)"
            />
            <label htmlFor="email"></label>
            <input
                type="text"
                name="email"
                id="input-id"
                value={formState.email}
                onChange={changeHandler}
                placeholder="Email"
            />
            <label htmlFor="role"></label>
            <input
                type="text"
                name="role"
                placeholder="Role"
                value={formState.role}
                onChange={changeHandler}
            />
            <button type="submit">Add Team Member!</button>
        </form>
    )


}

export default MemberForm