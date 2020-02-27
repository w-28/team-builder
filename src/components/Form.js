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

    //onSubmit for preventing default and adding new member

    //returning the form for the viewer
    return (
        <form className='member-form'>
            <label htmlFor='name'>Name: </label>
            <input id='name' type='text' name='name'/>

            <label htmlFor='email'>Email: </label>
            <input id='email' type='text' name='email'/>

            <label htmlFor='role'>Role: </label>
            <input id='role' type='text' name='role'/>

            <label htmlFor='hobby'>Hobby: </label>
            <input id='hobby' type='text' name='hobby'/>

            <label htmlFor='favquote'>Favorite Quote: </label>
            <textarea id='favquote' name='favquote'/>

        </form>
    )
}

export default Form;