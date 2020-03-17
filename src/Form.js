import React, {useState} from "react";


const Form = props =>{

    const [formState, setFormState] = useState ({
        name: "",
        email: "",
        role: ""
    });

    console.log(formState);

    return (
        <form>
            <label htmlFor="name">Name: </label>
            <input
            type="text"
            name="name"
            />
            <label htmlFor="email">Email: </label>
            <input
            type="text"
            name="email"
            />
            <label htmlFor="role">Role: </label>
            <input
            type="text"
            name="role"
            />

        </form>

    );

};

export default Form;