import React from 'react'
import {
    FaPencilRuler,
    FaLaptopCode,
    FaMobileAlt,
    FaPaintBrush,
    FaServer,
    FaCloud,
    FaDatabase,
    FaLock
} from 'react-icons/fa';


const servicesData = [
    {
        id: 1,
        icon: <FaPencilRuler size={40} className="text-amber-500" />,
        title: 'UI/UX Design',
        description: 'We enhance user experience by creating visually appealing interfaces with the latest trends and techniques. Our design process is tailored to meet both user needs and market requirements.'
    },
    {
        id: 2,
        icon: <FaLaptopCode size={40} className="text-amber-500" />,
        title: 'Frontend Development',
        description: 'We develop responsive and interactive user interfaces using modern web technologies. Our projects often incorporate popular frameworks such as React and Vue.'
    },
    {
        id: 3,
        icon: <FaMobileAlt size={40} className="text-amber-500" />,
        title: 'Mobile App Development',
        description: 'We build native and cross-platform mobile applications for both Android and iOS platforms. Our apps offer high performance and an intuitive user experience.'
    },
    {
        id: 4,
        icon: <FaPaintBrush size={40} className="text-amber-500" />,
        title: 'Graphic & Visual Design',
        description: 'We deliver striking graphic design solutions that reflect your brand identity. From logos to brochures and social media content, our services cover a wide range of design needs.'
    },
    {
        id: 5,
        icon: <FaServer size={40} className="text-amber-500" />,
        title: 'Backend Development',
        description: 'We create scalable and secure backend solutions using modern technologies for database management, API development, and server-side applications.'
    },
    {
        id: 6,
        icon: <FaCloud size={40} className="text-amber-500" />,
        title: 'Cloud Services',
        description: 'We offer cloud migration, management, and optimization services to make your infrastructure more flexible and reliable. Our experience spans AWS, Azure, and Google Cloud.'
    },
    {
        id: 7,
        icon: <FaDatabase size={40} className="text-amber-500" />,
        title: 'Data Engineering',
        description: 'We provide modern data engineering solutions to manage and analyze large datasets. Our comprehensive services include data processing, modeling, and reporting.'
    },
    {
        id: 8,
        icon: <FaLock size={40} className="text-amber-500" />,
        title: 'Cybersecurity',
        description: 'We develop comprehensive security solutions to protect your systems against cyber threats. Our services include security testing, intrusion detection, and data encryption.'
    },
];
const Service = () => {
    return (
        <section className='py-10' id='services'>
            <div className='max-w-6xl mx-auto px-4'>
                <div className='text-center mb-10'>
                    <h2 className='text-4xl text-amber-500 font-bold'>Services</h2>
                    <p className='text-gray-500 mt-2'>
                    With our software development, design, and infrastructure solutions, we take your projects to the next level.
            Discover the services we offer to support your digital transformation.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {servicesData.map((service)=>(
                        <div key={service.id}
                         className='border rounded-lg p-6 flex flex-col items-start transform transition duration-500 hover:scale-105'
                        >
                            <div className='mb-4'>{service.icon}</div>
                            <h3 className='text-2xl font-semibold mb-4'>{service.title}</h3>
                            <p className='text-gray-500'>{service.description}</p>

                        </div>
                    ))}

                </div>

            </div>


        </section>
    )
}

export default Service