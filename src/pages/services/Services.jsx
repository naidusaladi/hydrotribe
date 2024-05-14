import React from 'react'
import { CardWithLink } from '../../components/card/Card'
const Services = () => {
    const data=[
        {
            title:'Farm CRM',
            icon:'src/assets/crm1.png',

        },
        {
            title:'Farm Automation',
            icon:'src/assets/rocket.png',
        },
        {
            title:'Farm ERP',
            icon:'src/assets/erp1.png',

        },
        {
            title:'Virtual Farm Design',
            icon:'src/assets/design.png',

        },
        {
            title:'Farm Management',
            icon:'src/assets/manage.png',

        },
        {
            title:'Custom Garden Design',
            icon:'src/assets/design.png',

        },
    ]

    
      return (
    <>
        <div className='py-10' id='services'></div>
        <h1 className='text-center text-5xl py-10 text-green-500 ' >Services <span className='font-serif font-bold text-5xl'>.</span></h1>
        <div className='flex flex-wrap justify-evenly px-10 '>
            {
                    data.map((service, index) =>(
                        <CardWithLink service={service} key={index}/>
                    ))
            }

        


        </div>
    </>
  )
}

export default Services
