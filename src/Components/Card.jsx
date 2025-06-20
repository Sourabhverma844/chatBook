import React from 'react'

function Card() {
  return (
    <div className='w-full h-screen bg-gray-200'>
        <div className='h-[250px] w-[250px] absolute left-1/2 top-1/2 bg-pink-200  -translate-x-[50%] -translate-y-[50%] rounded-lg overflow-hidden'>
        <div className='w-full h-1/2 bg-blue-300 overflow-hidden'>
        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1636743714639-9407ec7b4946?w=294&dpr=1&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0& ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjUzMzk2OXx8ZW58MHx8fHx8" alt=""/>
        </div>
        <div className='w-full px-3 py-4'>
            <h2 className='font-semibold'>Amazon Basics</h2>
            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </div>
        </div>
    </div>
  )
}

export default Card