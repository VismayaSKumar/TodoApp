import React from 'react'
import bgImg from '../assets/bg-desktop-dark.jpg'

function Background() {
  return (
    <div className="fixed z-[2] bg-no-repeat bg-cover bg-center h-50 w-full"
    style={{ backgroundImage: `url(${bgImg})` }}>
    </div>
  )
}

export default Background