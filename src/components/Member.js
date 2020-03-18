import React from "react";



const Member = props => {
    return (
        <div className="member-list">

            {props.members.map(list => (

                <div className="note" key={list.id} >
                    <h2 className="memberName">{list.name}</h2>
                    <h2 className="memberEmail">{list.email}</h2>
                    <h2>{list.role}</h2>
                    <div className="edit">
                        <button
                            className="editBtn"

                        >Edit </button>
                    </div>
                </div>


            ))}
        </div>

    );
};

export default Member;
