import {useState} from 'react'

function Register() {
  let [name, setName] = useState("")
  let [emailId, setEmailId] = useState("")
  let [password, setPassword] = useState("")
  let [age, setAge] = useState("")

  let handleRegister = (e) => {
    e.preventDefault()
    console.log("Name:", name)
    console.log("Email:", emailId)
    console.log("Password:", password)
    console.log("Age:", age)
  }

  return(
    <div>
      <form onSubmit={handleRegister}>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter name'></input> <br/>
        <input type='text' value={emailId} onChange={(e) => setEmailId(e.target.value)} placeholder='Enter emailId'></input> <br/>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password'></input> <br/>
        <input type='number' value={age} onChange={(e) => setAge(e.target.value)} placeholder='Enter age'></input> <br/>
        <button type="submit">Register</button>
      </form>

      <br/>
      Name: {name}
      <br/>
      Email: {emailId}
      <br/>
      Password: {password}
      <br/>
      Age: {age}
    </div>
  )
}

export default Register