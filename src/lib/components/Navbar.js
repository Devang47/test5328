import React, { useEffect, useState } from 'react'

function Navbar({ navOpen, setNavOpen }) {
    return (
        <nav className=' py-6 bg-white shadow-md px-8'>
            <div className="flex items-center gap-12 max-w-7xl mx-auto font-lato text-lg">
                <div className=" font-semibold text-[25px]">Logo</div>


                <button onClick={() => setNavOpen(!navOpen)} className="md:hidden ml-auto">
                    {
                        !navOpen ?
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[24px] h-[24px]' aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" /></svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[24px] h-[24px]' aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M20 20L4 4m16 0L4 20" /></svg>
                    }
                </button>

                <div className="ml-auto items-center justify-start gap-12 hidden md:flex">

                    <div className="  font-semibold text-[#292929]">
                        Home
                    </div>
                    <div className=" font-semibold text-[#292929]">
                        Explore medical bills
                    </div>
                    <div className=" font-semibold text-[#292929]">
                        My account
                    </div>
                </div>

            </div>

        </nav>
    )
}

export default Navbar