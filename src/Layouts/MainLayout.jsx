import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
       
        <div className="flex flex-col min-h-screen h-full bg-gray-50 m-0">
            
            <Navbar />

        
            <main className="flex-grow w-full">
                
                
                <div className="mx-auto lg:max-w-[calc(100%-80px)] w-full 
                                px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12">
                    <Outlet />
                </div>
                
               <Toaster
                  position="top-center"
                  reverseOrder={false}
                  gutter={12}
                  toastOptions={{
        className: 'shadow-2xl rounded-3xl p-4 font-semibold text-white',
        duration: 4000,
        style: {
            fontSize: '16px',
            minWidth: '320px',
            maxWidth: '400px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
        },
        success: {
            icon: '✅',
            className: 'bg-gradient-to-r from-green-400 via-green-300 to-green-200 border-l-4 border-green-600',
        },
        error: {
            icon: '❌',
            className: 'bg-gradient-to-r from-red-400 via-red-300 to-red-200 border-l-4 border-red-600',
            duration: 5000,
        },
        loading: {
            icon: '⏳',
            className: 'bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 border-l-4 border-blue-600',
            duration: 0,
        },
        successStyle: {
            transition: 'transform 0.2s',
        },
    }}
/>
               
            </main>
            
            <Footer />
        </div>
    );
};

export default MainLayout;




