import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {BsArrowLeft} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import image from '../assets/rice.jpg'
const Cartitems = () => {
  return (
    <div>
      <div className='w-11/12 m-auto py-10'>
        <h1 className='text-3xl font-bold'>Shopping Cart</h1>
        <p className='text-sm text-gray-400'>There are 1 Items in your cart</p>
        <section className='flex justify-between items-center space-x-10'>
          <div className='w-[60%] space-y-3'>
            <table className='w-full'>
              <thead className='border-b'>
                <tr>
                  <td className='text-gray-40 py-2'>Product</td>
                  <td className='text-gray-40 py-2'>Price</td>
                  <td className='text-gray-40 py-2'>Quantity</td>
                  <td className='text-gray-40 py-2'>Total</td>
                  <td className='text-gray-40 py-2'>Delete</td>
                </tr>
              </thead>
              <tbody className='space-y-10'>
                <tr className='border-dashed border-b'>
                  <td className='py-5'>
                    <div className='flex items-center space-x-3 py-2'>
                      <img src={image} alt="" className='w-[100px] h-[100px] border rounded p-2'/>
                      <div>
                      <h1 className='text-xl font-bold'>Rice</h1>
                    </div>
                    </div>
                    
                  </td>
                  <td>$24.00</td>
                  <td>
                    <div className='border w-24 p-2'>
                      <input type="number" className='w-full outline-0' />
                    </div>
                  </td>
                  <td>$200.00</td>
                  <td>
                    <button>
                      <AiFillDelete size={"1.5rem"}/>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='my-5'>
            <NavLink to='/'>
              <button className='flex items-center space-x-3 bg-gray-200 font-semibold rounded p-2'>
                <BsArrowLeft/>
                <span>Continue Shopping</span>
              </button>
            </NavLink>
            </div>
          </div>
          <div className='w-[40%] h-fit border rounded p-5 space-y-5'>
            <div className='flex justify-between items-center border-b border-dashed p-2'>
              <h1 className='text-xl'>Sub Totoal</h1>
              <p>$200.00</p>
            </div>
            <div className='flex justify-between items-center border-b p-2'>
              <h1 className='text-xl'>shipping</h1>
              <p>$20.00</p>
            </div>
            <div className='flex justify-between items-center p-2'>
              <h1 className='text-xl'>Sub Totoal</h1>
              <p>$220.00</p>
            </div>
            <button className='w-full p-2 bg-gray-800 text-center text-white rounded'>
              checkOut
            </button>
          </div>
        </section>
      </div>

    </div>
  )
}

export default Cartitems