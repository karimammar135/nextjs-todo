"use client";

import React from 'react'
import { useRouter } from "next/navigation"
import toast from 'react-hot-toast';
import axios from 'axios';

export default function ProfileDefault() {
  const router = useRouter(); 

  const logout = async () => {
    try {
      await axios.get("/api/users/logout")
      toast.success("logged out")
      router.push('/login')
    } catch(error: any){
      console.error(error);
      toast.error(error.message)
    }
  }

  return (
    <div className='bg-black min-h-[100vh]'>
      <h1 className='text-white'>Profile Page</h1>
      <button onClick={logout} className='bg-blue-600 text-white'>Log out</button>
    </div>
  )
}
