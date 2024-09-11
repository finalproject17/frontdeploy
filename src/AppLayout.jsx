import React from 'react'
import Header from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    </>
  )
}
