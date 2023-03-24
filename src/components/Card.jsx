import React from 'react'
// const desc=[
//   "500 GB Storage",
//   "1 Granted User",
//   "Send up to 2 GB"]
function Card({img,head,price,desc,bgColor}) {
  return (
    <div className={`w-full shadow-xl rounded-lg ${bgColor} hover:scale-110 duration-300`}>
      <img className="w-20  mx-auto mt-[-3rem] bg-white"  src={img} alt="/" />
      <div className='flex flex-col items-center'>
      {<h2 className='font-bold py-8 text-2xl'>{head}</h2>}
      {<p className='text-4xl font-bold mb-2'>{price}</p>}
      {desc?.map(
        (x,i)=>{
          return (
            <p className='border-b py-2'>{x}</p>
          )
        }
      )}
      <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3  text-[#00df9a]'>Start Trial</button>
      </div>
    </div>
  )
}

export default Card