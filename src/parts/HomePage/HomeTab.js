import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function HomeTab(props) {
    let [categories] = useState({
        Newest: [
            {
                id: 1,
                title: 'Happy Indonesia Independence Day 77th',
                author: 'Aidi Digital Global',
                shareCount: 0,
                date: '4 months ago',
            },
            {
                id: 2,
                title: "Dirgahayu Indonesia 77",
                author: 'Pranala Digital Global',
                shareCount: 0,
                date: '4 months ago',
            },
            {
                id: 3,
                title: 'Happy Indonesia Independence Day 77th',
                author: 'Aidi Digital Global',
                shareCount: 0,
                date: '4 months ago',
            },
            {
                id: 4,
                title: "Dirgahayu Indonesia 77",
                author: 'Pranala Digital Global',
                shareCount: 0,
                date: '4 months ago',
            },
        ],
        Trending: [
            {
                id: 1,
                title: 'Is tech making coffee better or worse?',
                author: 'Pranala Digital Global',
                shareCount: 0,
                date: '4 months ago',
            },
            {
                id: 2,
                title: 'The most innovative things happening in coffee',
                author: 'Pranala Digital Global',
                shareCount: 0,
                date: '4 months ago',
            },
        ],
        Popular: [
            {
                id: 1,
                title: 'Ask Me Anything: 10 answers to your questions about coffee',
                author: 'Pranala Digital Global',
                shareCount: 0,
                date: '4 months ago',
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                author: 'Pranala Digital Global',
                shareCount: 0,
                date: '4 months ago',
            },
        ],
    });

    return (
        <div className="w-full px-2 sm:px-0">
            <Tab.Group>
                <Tab.List className="flex mt-10 border-b border-gray-200">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Explore Campaigns</h3>
                    <div className="w-full max-w-md flex space-x-8 mt-1 sm:ml-10">
                        {Object.keys(categories).map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    classNames(
                                    'pb-4 px-1 text-sm font-medium leading-5 text-blue-700',
                                    'focus:outline-none',
                                    selected
                                        ? 'border-b-2 border-indigo-600'
                                        : 'text-gray-300 hover:text-gray-700'
                                    )
                                }
                            >
                                {category}
                            </Tab>
                        ))}
                    </div>
                </Tab.List>
                <Tab.Panels className="my-10">
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                '',
                                'focus:outline-none'
                            )}
                        >
                            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                                {posts.map((post) => (
                                    <li
                                        key={post.id}
                                        className="col-span-1 flex flex-col text-left bg-white rounded-lg shadow divide-y divide-gray-200"
                                    >
                                        <div className="overflow-hidden hover:opacity-75 relative w-full h-full bg-cover h-60">
                                            <img src="https://twib.id/storage/5/VIAN3Dp1DF8W9BnECGi2ose7qpwx6GytTc8fWx65.png" alt="img cover" />
                                            <span className="absolute bottom-4 py-2 px-5 bg-green-400 text-center shadow rounded-r-lg">Active</span>
                                        </div>

                                        <div className="flex-1 flex flex-col p-5">
                                            <h3 className="text-gray-900 text-medium font-bold">{post.title}</h3>
                                            <div className="mt-2 flex-grow flex flex-col justify-between">
                                                <div>
                                                    <p className="mt-2 flex items-center text-sm text-gray-500">
                                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z">
                                                            </path>
                                                        </svg>
                                                        <span className="ml-2">{post.author}</span>
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="mt-2 flex items-center text-sm text-gray-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                                        </svg>
                                                        <span className="ml-2">{post.shareCount} Supporters</span>
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="mt-2 flex items-center text-sm text-gray-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                        </svg>
                                                        <span className="ml-2">{post.date}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="-mt-px flex divide-x divide-gray-200">
                                                <div className="-ml-px w-0 flex-1 flex">
                                                    <Link
                                                        to="#" 
                                                        className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                                                    >
                                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                                        </svg>
                                                        <span className="ml-3">Join</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
