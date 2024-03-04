'use client'
// Components
import List from '../sub-components/List';
// ICON
import { PiStudent } from "react-icons/pi";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FiDownload } from "react-icons/fi";

import Link from 'next/link';
import { useState, useEffect } from 'react';
useEffect(async () => {
    const res = await fetch()
    result = await res.json()
    console.log(result);
}, [])
export function Dashboard() {
    const [users, setUsers] = useState([])
    sd

    return (
        <div className='w-full bg-base-100'>
            <div>
                {/* Navbar */}
                <div className="navbar bg-base-200">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">Dashboard</a>
                    </div>
                    <div className='flex-none'>
                    <ul className="menu menu-vertical lg:menu-horizontal bg-base-300 rounded-box gap-2">
                        <button className="btn btn-success">
                            <Link href='/' >Create</Link>
                        </button>
                    </ul>
                    </div>
                </div>
                {/* Dashboard */}
                <div className='p-[20px]'>
                    <div className='grid grid-cols-4 gap-4'>

                        <div className="stat bg-base-300 rounded">
                            <div className="stat-figure text-secondary text-4xl">
                                <PiStudent />
                            </div>
                            <div className="stat-title">All Students</div>
                            <div className="stat-value">200</div>
                            <div className="stat-desc"></div>
                        </div>

                        <div>

                            <div className="stat bg-base-300 rounded">
                                <div className="stat-figure text-accent">
                                    <FaCheck />
                                </div>
                                <div className="stat-title">Checked</div>
                                <div className="stat-value">100</div>
                            </div>

                            <div className="stat bg-base-300 rounded">
                                <div className="stat-figure text-error">
                                    <ImCross />
                                </div>
                                <div className="stat-title">Not Checked</div>
                                <div className="stat-value">100</div>
                            </div>

                        </div>

                        <div className="stat bg-base-300 rounded">

                            <div className="stat-title">Choose a time</div>
                            <div className="stat-value">
                                <div className="dropdown w-full">
                                    <div tabIndex={0} role="button" className="btn w-full">00:00 - 00:00</div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] text-center p-2 shadow bg-base-100 rounded-box w-full">
                                        <li><a className='btn w-full'>09:30 - 12:30</a></li>
                                        <li><a className='btn w-full'>14:00 - 17:00</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="stat-desc"></div>
                        </div>

                        <div className="stat bg-base-300 rounded">
                            <div className="stat-figure text-3xl text-info">
                                <FiDownload />
                            </div>
                            <div className="stat-title mb-[10px]">Download to PDF</div>
                            <button className="btn btn-info">Download</button>
                        </div>

                    </div>
                </div>
                {/* List Student */}
                <div className='p-[20px] pt-0'>
                    <div className="overflow-x-auto">
                        <table className='table table-fixed'>
                            <thead>
                                <tr className='text-center'>
                                    <th>ID</th>
                                    <th>Nisit Number</th>
                                    <th>Name</th>
                                    <th>time</th>
                                </tr>
                            </thead>
                            <tbody>
                            
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard