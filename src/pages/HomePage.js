import React from 'react'

import Header from '../parts/Header'
import HomeIndex from '../parts/HomePage/index'
import Footer from '../parts/Footer'

export default function HomePage(props) {
    return (
        <div className="font-sans text-gray-900 antialiased bg-gray-100">
            <div className="relative">
                <div className="mx-auto py-3 px-3 sm:px-6 lg:px-8 bg-red-600">
                    <div className="pr-16 sm:text-center sm:px-16">
                        <p className="font-medium text-white">
                            <span className="md:hidden">All Data Will Be Removed</span>
                            <span className="hidden md:inline">Closed Version! All Data Will Be Removed</span>
                        </p>
                    </div>

                </div>
            </div>
            <Header theme="white" position="absolute"></Header>
            <HomeIndex></HomeIndex>
            <Footer></Footer>
        </div>
    )
}
