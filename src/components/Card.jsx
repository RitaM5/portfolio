import { Fragment, useState } from 'react';
import { Transition } from '@headlessui/react';
const Card = ({ project, handleLink1Click, handleLink2Click, seeDemo }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { id, src, client, server, livesite, details } = project;
    return (
        <>
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                />
                <p className='my-5 px-2'># {details}</p>
                <hr className='mt-5'/>
                <div className="flex items-center justify-center">
                    <button onClick={() => seeDemo(livesite)} className="w-1/2 font-semibold px-6 py-3 m-4 duration-200 hover:scale-105">
                        Demo
                    </button>
                    <button onClick={() => setIsOpen(true)} className="w-1/2 font-semibold px-6 py-3 m-4 duration-200 hover:scale-105">
                        Code
                    </button>
                </div>
            </div>
            <Transition show={isOpen} as={Fragment}>
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <Transition.Child
                        enter="transition-opacity ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        className="fixed inset-0"
                    >
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </Transition.Child>

                    <Transition.Child
                        enter="transition ease-out duration-300 transform"
                        enterFrom="translate-y-4 opacity-0"
                        enterTo="translate-y-0 opacity-100"
                        leave="transition ease-in duration-200 transform"
                        leaveFrom="translate-y-0 opacity-100"
                        leaveTo="translate-y-4 opacity-0"
                        className="w-64 bg-white rounded-lg shadow-lg"
                    >
                        <div className="p-6 text-blue-700">
                            <button className='font-semibold underline underline-offset-4' onClick={() => handleLink1Click(client)}>Client-Site</button>
                            <button className='ml-6 font-semibold underline underline-offset-4' onClick={() => handleLink2Click(server)}>Server-Site</button><br />
                            <button className='mt-8 bg-red-500 text-white px-3 py-1 rounded-lg' onClick={() => setIsOpen(false)}>Close Modal</button>
                        </div>
                    </Transition.Child>
                </div>
            </Transition>
        </>
    );
};

export default Card;