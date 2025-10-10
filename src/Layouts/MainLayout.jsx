import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">

            
            <Navbar />

           
            <main className="flex-grow mx-auto lg:max-w-[calc(100%-80px)] w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12">
                <Outlet />

                <Toaster
                    position="top-center"
                    reverseOrder={false}
                    gutter={12}
                    toastOptions={{
                        className: 'shadow-xl rounded-2xl bg-white border-l-4 border-green-500 p-4 text-gray-900 font-semibold',
                        duration: 4000,
                        style: {
                            fontSize: '16px',
                            minWidth: '300px',
                            maxWidth: '350px',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
                        },
                        success: {
                            icon: '✅',
                            className: 'bg-gradient-to-r from-green-100 to-green-50 border-l-4 border-green-500',
                        },
                        error: {
                            duration: 0,
                        },
                        loading: {
                            duration: 0,
                        },
                    }}
                />
            </main>

           
            <Footer />
        </div>
    );
};

export default MainLayout;
