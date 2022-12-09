import React from 'react'

const Header = (props) => {
  return (
    <div className='d-flex justify-content-between'>
      <h1 className='m-3 text-start'>New Years Resolutions</h1>
      <button className='me-5 mt-3'>{props.location}</button>
    </div>
  )
}

export default Header