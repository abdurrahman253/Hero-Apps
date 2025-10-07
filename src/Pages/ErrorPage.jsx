import React from 'react';
import Navbar from '../Components/Navbar';
import { useRouteError } from 'react-router';
import Footer from '../Components/Footer';

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <>
        <Navbar />
        <div className='min-h-screen flex flex-col justify-center items-center text-center '>
          <h1 className='text-4xl font-bold text-red-500 mb-4'>Oops!</h1>
          <p className='text-lg mb-2'>Something went wrong.</p>
          <p className='text-gray-600'> {error.statusText || error.message} </p>
        </div>
        <Footer />       
        
        </>
    );
};

export default ErrorPage;