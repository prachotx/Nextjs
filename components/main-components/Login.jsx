import React from 'react'
import Header from '../sub-components/Header'

function Login() {
    return (
        <div className='max-w-[475px] h-[550px] bg-base-300 mx-auto mt-[50px] rounded-2xl p-[40px]'>
            <div>
                
                <div className='max-w-[300px] mx-auto'>
                    <h1 className='text-white text-3xl cursor-pointer border-l-4 border-green-500 pl-[12px]'>CRUD OPERATIONS</h1>
                </div>

                <div className='text-center my-[40px]'>
                    <h2 className='uppercase text-[22px] text-white mb-[8px]'>Sign In</h2>
                    <p></p>
                </div>

                <form action="">
                    <div className='flex flex-col mb-[20px]'>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='Enter your email' className='mt-[6px] focus:outline-none p-[10px] rounded' />
                    </div>
                    <div  className='flex flex-col'>
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='Enter your password' className='mt-[6px] focus:outline-none p-[10px] rounded' />
                    </div>
                    <div className='mt-[30px]'>
                        <button className="btn btn-success w-full text-white uppercase">Sign In</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login