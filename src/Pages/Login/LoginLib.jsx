import React from 'react'
import { useForm } from "react-hook-form"


export default function LoginLib() {
const {register, handleSubmit, formState:{errors}}=useForm({mode:'onBlur'})
//console.log(register("test"));


const login=(user)=>{
console.log(user)
}


  return (
    <>
      <form onSubmit={handleSubmit(login)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            {...register('email',{required:true,pattern:/^[a-zA-Z]{3,8}[0-9]{1,5}(@)(gmail|yahoo)(.com)$/})}
              className="form-control"
              
          />
       {errors.email &&  <p className="text-danger"> invalid email</p>} 
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            {...register('password',{required:true})}

            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
       {errors.password &&  <p className="text-danger"> invalid password</p>} 
       
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  )
}
