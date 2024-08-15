import React from 'react'
import NavOptions from './NavOptions'
import Logo from '../Logo'
import Button from '../Button'

const Navbar = () => {
  return (
    <div className='w-full px-[10vw] flex items-center justify-between py-4'>
    <Logo height={"30"} width={"120"}/>
    <div className="flex md:gap-8 gap-2 items-center">
      <div className="md:flex items-center gap-6 hidden">

      <NavOptions/>
      </div>
    <Button text="Download CV"/>
    </div>

    </div>
  )
}

export default Navbar