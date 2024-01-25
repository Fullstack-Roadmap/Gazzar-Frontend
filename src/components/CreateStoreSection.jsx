import React from 'react'
import Button from './Button';

const CreateStoreSection = () => {
   return (
     <div className="h-screen w-5/6 shadow-custom my-40 flex justify-between items-center p-8 rounded-xl">
       <div className="w-full h-full bg-blue rounded-lg"></div>
       <div className='p-20 flex justify-center items-center flex-col gap-12'>
         <header className='text-6xl font-bold'>Create Your Own Online Store</header>
         <p>
           Create an online store for your business, so users can easily see
           what you sell and buy products from you.
         </p>
         <Button/>
       </div>
     </div>
   );
}

export default CreateStoreSection