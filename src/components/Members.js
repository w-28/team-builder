import React from 'react';

function Members(props){
    return(
        <div className='member-list'>
            {props.members.map(member => (
                <div className='note' key={member.id}>
                    <h3>Name: {member.name}</h3>
                    <p>E-mail: {member.email}</p>
                    <p>Role: {member.role}</p>
                    <p>Hobby: {member.hobby}</p>
                    <p>Favorite Quote: {member.favquote}</p>
                </div>
            ))}
        </div>
    )
}

export default Members;