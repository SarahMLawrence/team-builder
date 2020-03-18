import React, { useState } from "react";

import { FormGroup, Label, Input } from "../components/Styles";


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
            <Label htmlFor="name">Name: </Label>
            <Input
                type="text"
                name="name"
                value={formState.name}
                onChange={changeHandler}
                placeholder="Full Name (Required)"
            />


            <Label htmlFor="email">Email: </Label>
            <Input
                type="text"
                name="email"
                id="input-id"
                value={formState.email}
                onChange={changeHandler}
                placeholder="Email"
            />
            <Label htmlFor="role">Role: </Label>
            <Input
                type="text"
                name="role"
                placeholder="Role"
                value={formState.role}
                onChange={changeHandler}
            />

            <button type="submit">Add</button>
        </form>

    )



}

export default MemberForm;