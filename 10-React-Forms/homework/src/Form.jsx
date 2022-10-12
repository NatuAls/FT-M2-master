import React, {useState} from 'react';

export function validate(input){
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  if (!input.password) {
    errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid';
  }
  return errors;
}

export default function  Form() {
  const [input, setInput] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  function handleInputChange(e){
    const obj = {
      ...input,
      [e.target.name]: e.target.value
    }
    setInput(obj)
    setErrors(validate(obj));
  }

  return (
      <div>
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <input 
            type="text" 
            name='username' 
            value={input.username} 
            onChange={handleInputChange}
            className={errors.username ? 'danger' : null}
            />
            {errors.username ? <p className='danger'>{errors.username}</p> : null}
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input 
            type="password" 
            name='password' 
            value={input.password} 
            onChange={handleInputChange}
            className={errors.password && 'danger'}
            />
            {errors.password && <p className='danger'>{errors.password}</p>}
          </div>
          <input 
          type="submit" 
          value='Submit' 
          disabled={Object.keys(errors).length > 0 || !input.password || !input.username} 
          />  
        </form>
      </div>
  )
}
