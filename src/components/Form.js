import React, { useState } from 'react';

function Form(props){
    let [member, setMember] = useState(
        {
            name: '',
            email: '',
            role: '',
            hobby: '',
            favquote: ''
        }
    );

    //onChange handler for form input
    let handleChanges = event => {
        setMember({...member, [event.target.name]: event.target.value})
        console.log(member)
    }

    //onSubmit for preventing default and adding new member
    let submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({name: '', email: '', role: '', hobby:'', favquote: ''});
    }

    //returning the form for the viewer
    return (
        <form className='member-form' onSubmit={submitForm}>
            <label htmlFor='name'>Name: </label>
            <input id='name' type='text' name='name' value={member.name} onChange={handleChanges}/>

            <label htmlFor='email'>Email: </label>
            <input id='email' type='text' name='email' value={member.email} onChange={handleChanges}/>

            <label htmlFor='role'>Role: </label>
            <input id='role' type='text' name='role' value={member.role} onChange={handleChanges}/>

            <label htmlFor='hobby'>Hobby: </label>
            <input id='hobby' type='text' name='hobby' value={member.hobby} onChange={handleChanges}/>

            <label htmlFor='favquote'>Favorite Quote: </label>
            <textarea id='favquote' name='favquote' value={member.favquote} onChange={handleChanges}/>

            <button type='submit'>Add New Member</button>

        </form>
    )
}

export default Form;