import React from 'react'

const Clients = () => {
  return (
    <div>
        <h1 className='text-green-500  text-center py-10 text-5xl'>Our Clients <span className='font-serif font-bold'>.</span></h1>
      <div className="relative flex overflow-x-hidden">
        <div className="py-12 animate-marquee whitespace-nowrap text-gray-600 ">
            <span className="text-4xl mx-4">Aditya University</span>
            <span className="text-4xl mx-4">Adity College of Engineering</span>
            <span className="text-4xl mx-4">SNK solutions</span>

        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap text-gray-600">
            <span className="text-4xl mx-4">Aditya University</span>
            <span className="text-4xl mx-4">Adity College of Engineering</span>
            <span className="text-4xl mx-4">SNK solutions</span>
        </div>
    </div>
    </div>
  )
}

export default Clients
