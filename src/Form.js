import React, { useState } from "react";


const Form = props => {

  // const [titleState, setTitleState] = useState("");

  // const [bodyState, setBodyState] = useState("");

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    role: ""
  });
  console.log(formState);
  // const titleChange = event => {
  //   setTitleState(event.target.value);
  // };

  // const bodyChange = event => {
  //   setBodyState(event.target.value);
  // };

  const changeHandler = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    props.addNote({
      ...formState,
      id: Date.now()
    });

    /*I added this after class, 
    but it simply clears the user data and resets the form!*/
    setFormState({
      name: "",
      email: "",
      role: ""
    });
  };


    return (
        <form onSubmit={formSubmitHandler}>
            <label htmlFor="name">Name: </label>
            <input
                type="text"
                name="name"
                value={formState.name}
                onChange={changeHandler}
                placeholder="Enter your Name!"

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
            <button type="submit">Add Team Member</button>

        </form>

    );

};

export default Form;