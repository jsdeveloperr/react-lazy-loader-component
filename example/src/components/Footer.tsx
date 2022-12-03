import { LazyLoad } from "../../../src";

const Footer = () => {
    return (
        <LazyLoad tag="footer" className="bg-white body-font">
            <div className="container px-5 py-36 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 text-center">
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h4 className="font-bold tracking-wider text-sm mb-3 uppercase">Phone</h4>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">+ 080-5555-333-000</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h4 className="font-bold tracking-wider text-sm mb-3 uppercase">Email</h4>
                        <nav className="list-none mb-10">
                            <li className="flex flex-col">
                                <a className="text-gray-600 cursor-pointer hover:text-indigo-600">example@example.com </a>
                                <span className="inline-flex mt-14 gap-5 justify-center">

                                    <a className="text-gray-500 cursor-pointer hover:text-indigo-600">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500 cursor-pointer hover:text-indigo-600">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500 cursor-pointer hover:text-indigo-600">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </a>
                                </span>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h4 className="font-bold tracking-wider text-sm mb-3 uppercase">Address</h4>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Example, st. 15, 200</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
        </LazyLoad>
    )
}

export default Footer