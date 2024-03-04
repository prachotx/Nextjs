import Image from 'next/image'
import Photo from '../../public/cat.jpg'
// ICON
import { MdLogout } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import Header from "../sub-components/Header";

function Sidebar() {
    return (
        <div className='w-[270px] bg-neutral p-[20px]'>
            <div>
                {/* Header */}
                <Header />
                {/* Proflie */}
                <div className='mt-[55px]'>
                    <div className='overflow-hidden mx-auto bg-green-400 w-[150px] h-[150px] rounded-full'>
                        <Image src={Photo}
                            width={150}
                            height={150}
                            className='cursor-pointer hover:scale-110 hover:transition duration-300'
                            alt='Proflie'
                            priority={true}
                        />
                    </div>
                    <div className='text-center mt-[20px]'>
                        <span className='text-white text-lg font-medium'>Prachot Chaimontree</span>
                        <button className="btn btn-error btn-sm mt-[10px]">Admin</button>
                    </div>
                </div>
                {/* Menu */}
                <div className='mt-[77px]'>
                    <ul className="menu text-white bg-gray-600 w-56 rounded-box">
                        <li>
                            <a className='text-base'>
                                <MdSpaceDashboard className='text-xl' />
                                Dashboard
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Footer */}
                <div className='text-center mt-[360px]'>
                    <button className='btn btn-error'>
                        Logout
                        <MdLogout className='text-xl' /></button>
                </div>

            </div>
        </div>
    )
}

export default Sidebar