import React from 'react'

const Courses = ({course}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4 md:p-16 ">
      <header className="text-center lg:max-w-6xl">
        <h1 className="text-4xl font-bold font-poppins text-gray-800">{course.title}</h1>
        <p className="mt-4 text-gray-500 font-poppins font-semibold ">
          {course.description}
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-black text-white py-2 px-6 rounded-full">Get Started</button>
          
        </div>
      </header>
      <div className="mt-12 grid grid-cols-2  lg:grid-cols-4 gap-4 lg:max-w-6xl   ">
        {course.points.map((item) => (
          <div key={item} className="bg-white p-6  rounded-full shadow-lg flex items-center justify-center text-center text-xl font-bold font-poppins hover:scale-110 ">
            <span className='h-8 w-8 mr-2 '>
              
                <img src={item.split("$")[1]} alt='' className='h-full w-full'  />

              </span>
              <span  className='text-sm md:text-md'  >{item.split("$")[0]} </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses