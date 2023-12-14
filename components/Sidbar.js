import Link from 'next/link';
import React, { useState } from 'react'

const Sidbar = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [btn, setBtn] = useState(false);
    
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    const Btn1 = () => {
        setBtn(!btn); // Toggling btn state between true and false
    };

  return (
    <div>
              <button  onClick={toggleSidebar} className="lg:hidden">
        <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            
            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
        <div id="sidebar" className={`lg:block ${sidebarVisible ? '' : 'hidden'} bg-white h-screen fixed rounded-none border-none`}>
        <div className="p-4 space-y-4 shadow-lg h-100" >
        
           <Link href={'/UserUpdate'}
                            onClick={Btn1}
                            aria-label="dashboard"
                            className={`relative  px-4 py-3 flex items-center space-x-4 rounded-lg from-sky-600 to-cyan-400 ${
                                btn ? 'text-gray-500 group bg-gradient-to-r text-white' : ''
                            }`}
                        >
                <i className="fas fa-gift"></i>
                <span>User update</span>
            </Link>
           <Link href={'/'}
                            onClick={Btn1}
                            aria-label="dashboard"
                            className={`relative  px-4 py-3 flex items-center space-x-4 rounded-lg from-sky-600 to-cyan-400 ${
                                btn ? 'text-gray-500 group bg-gradient-to-r text-white' : ''
                            }`}
                        >
                <i className="fas fa-gift"></i>
                <span>Recompensas</span>
            </Link>
            <a  onClick={Btn1} href="#" className={`relative  px-4 py-3 flex items-center space-x-4 rounded-lg from-sky-600 to-cyan-400 ${
                                btn === false ? '' : 'text-gray-500 group bg-gradient-to-r text-white from-sky-600 to-cyan-400 rounded-lg'
                            }`}>
                <i className="fas fa-store"></i>
                <span>Sucursalses</span>
            </a>

            <a  onClick={Btn1} href="#" className={`relative  px-4 py-3 flex items-center space-x-4 rounded-lg from-sky-600 to-cyan-400 ${
                                btn === false ? '' : 'text-gray-500 group bg-gradient-to-r text-white from-sky-600 to-cyan-400 rounded-lg'
                            }`}>
                <i className="fas fa-wallet"></i>
                <span>Billetera</span>
            </a>
            <a  onClick={Btn1} href="#" className={`relative  px-4 py-3 flex items-center space-x-4 rounded-lg from-sky-600 to-cyan-400 ${
                                btn === false ? '' : 'text-gray-500 group bg-gradient-to-r text-white from-sky-600 to-cyan-400 rounded-lg'
                            }`}>
                <i className="fas fa-exchange-alt"></i>
                <span>Transacciones</span>
            </a>
            <a  onClick={Btn1} href="#" className={`relative  px-4 py-3 flex items-center space-x-4 rounded-lg from-sky-600 to-cyan-400 ${
                                btn === false ? '' : 'text-gray-500 group bg-gradient-to-r text-white from-sky-600 to-cyan-400 rounded-lg'
                            }`}>
                <i className="fas fa-user"></i>
                <span>Mi cuenta</span>
            </a>
            <a  onClick={Btn1} href="#" className={`relative  px-4 py-3 flex items-center space-x-4 rounded-lg from-sky-600 to-cyan-400 ${
                                btn === false ? '' : 'text-gray-500 group bg-gradient-to-r text-white from-sky-600 to-cyan-400 rounded-lg'
                            }`}>
            <i className="fas fa-sign-out-alt"></i>
            <span>Cerrar sesión</span>
        </a>
        </div>
    </div>

    </div>
  )
}

export default Sidbar