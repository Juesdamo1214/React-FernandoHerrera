import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'strider',
    email: 'example@example.com'
  })

  const {username, email} = formState;

  const onInputChange = ( {target} ) => {
    const {value, name} = target;
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  useEffect(() => {
  },[]);

  useEffect(() => {
  },[formState]);

  useEffect(() => {
  },[email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className='form-control'
        placeholder="username"
        name="username"
        value ={ username}
        onChange={ onInputChange}
      />

      <input
        type="email"
        className='form-control mt-2'
        placeholder="example@example.com"
        name="email"
        value={email}
        onChange={ onInputChange}
      />

      {
        (username === 'strider2') && <Message/>
      }
    </>
  )
}
