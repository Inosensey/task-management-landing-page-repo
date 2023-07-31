import React from 'react'

interface props {
  clickEvent: () => void
}

const Overlay = ({clickEvent}:props) => {
  return (
    <div onClick={clickEvent} className='phone:block w-full h-screen fixed top-0 left-0 z-10 bg-black/[.5]'></div>
  )
}

export default Overlay