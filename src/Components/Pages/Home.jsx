import React from 'react'
import data from '../image.json'


const Home = () => {

  const homeImage= data.pageImage.find(item => item.name === 'Home');

  return (
    <div className=' pt-[200px] ml-[100px]'>
      <h1 className='text-4xl text-cyan-400'> Dataism Laboratory for Quantitative Finance</h1>
      <p className='text-3xl w-[840px] text-white mt-[90px]' >
        Established in 2024, The Dataism Lab at Virginia Tech is an interdisciplinary 
        hub focused on advancing Quantitative Finance and Econometrics through cutting-edge technologies. 
        Our mission centers on exploring AI/Machine Learning, Big Data Analytics, 
        and High Performance Computing for transformative applications in this field.
      </p>
      <img src={homeImage.image} />
      <button className='mt-[400px]'> Meet the Team </button>
      <div className='h-[200px] w-full bg-gray-850'></div>

    </div>
  )
}

export default Home