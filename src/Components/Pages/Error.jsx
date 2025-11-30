import React from 'react'

const Error = (className) => {
  return (
    <div className={`bg-gray-600 text-6xl text-white mt-2 p-61 text-center ${className}`}> 
    <h1 className={`font-bold text-red-400 font-papika ${className}`}>4 0 4</h1>
    <p className={`font-papika pt-5 ${className}`}>The Pages Is Not Found</p>
    </div>
  )
}

export default Error