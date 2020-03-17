import React from "react";

const Team = props => {
    <div className="team-list">
        {props.notes.map(note => (
            <div className="note" key={note.name}>

                <h2>{note.name}</h2>
                <h2>{note.email}</h2>

          </div>

        ))}
    </div>
}

export default Team;