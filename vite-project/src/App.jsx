import React, { useState } from 'react'

const Tabs = () => {

    const [activeTab, setActiveTab] = useState(0)

    const foodData = [{
            food: 'Burger',
            image: '/public/burger.jpg'
        },{
            food: 'Fish',
            image: '/public/fish.jpg'
        },{
            food: 'Fruit Salad',
            image: '/public/fruit-salad.jpg'
        },{
            food: 'Pancake',
            image: '/public/pancake.jpg'
        },{
            food: 'Pizza',
            image: '/public/pizza.jpg'
        }]

  return (
    <div className='bg-gray-100 w-screen h-screen'>
        <h1 className='text-4xl text-orange-700 font-bold py-6 flex items-center justify-center'>Choose Your Food</h1>
        <div className='flex items-center justify-center gap-4'>
        {foodData.map((item,index) => (
            <button 
            key={index} 
            onClick={() => setActiveTab(index)} 
            className={index === activeTab 
                ? 'font-bold cursor-pointer my-4 list-none border border-red-900 rounded-md p-4 shadow-md bg-yellow-400' 
                : 'font-bold cursor-pointer my-4 list-none border border-red-900 rounded-md p-4 shadow-md bg-yellow-200'}>
                    {item.food}</button>
        ))}
    </div>
        <div className='flex items-center justify-center'>
            <img className='size-2/4 rounded-md flex items-center justify-center border border-gray-100 shadow-md my-10' 
                src={foodData[activeTab].image} 
                alt={foodData[activeTab].food}/>
        </div>
    </div>
  )
}

export default Tabs