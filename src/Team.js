import React from "react";

const Team = props => {

    return (
    <div className="team-list">

<h1>Team Member List</h1>
        {props.notes.map(note => (
            <div className="note" key={note.name}>

                
                <h4>Name: {note.name}</h4>
                <h4>Email: {note.email}</h4>
                <h4>Role: {note.role}</h4>

          </div>

        ))}
    </div>
    );

}

export default Team;