import { LazyLoad } from "../../../src";

const OurSatisfiedClients = () => {
    return (
        <LazyLoad tag="section" className="grid md:grid-cols-2 xl:grid-cols-3 max-w-screen-xl mx-auto py-24 px-5 lg:px-10 gap-5" rootMargin="100px">
            <h1 className="md:col-span-2 xl:col-span-3 text-2xl md:text-4xl font-bold text-center text-gray-800 mb-10">Our satisfied clients review</h1>
            <div className="bg-yellow-100 relative p-5 md:p-9 rounded-lg">
                <div className="bg-white pt-8 lg:pt-0 pb-8 px-5 md:px-8 rounded-md">
                    <div className="flex flex-col lg:flex-row items-center gap-4">
                        <img className="w-16 h-16 object-cover rounded-full border-4 border-white shadow-md" src="https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="James Connor" />
                        <div>
                            <h2 className="text-lg font-semibold lg:mt-10">- @jamesConnor</h2>
                            <div className="flex items-center mt-2">
                                <span className="shadow-lg bg-white rounded-full inline-flex items-center px-3 py-1.5 text-gray-500 text-xs"><svg className="mr-1 w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>5</span>
                                <span className="ml-2.5 text-sm text-gray-400 mt-2.5">Excellent</span>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold mt-7 mb-2.5">Still happy with Freelo</h3>
                    <p className="leading-loose">I owe these guys my life. Already used their landing page templates for my latest two projects.</p>
                    <div className="md:flex items-center gap-5 mt-4">
                        <span className="mb-3 md:mb-0 flex items-center text-gray-400 text-sm">  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-1.5 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>2 days ago</span>
                        <span className="flex items-center text-gray-400 text-sm">  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-1.5 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>6 min read</span>
                    </div>

                </div>
            </div>
            <div className="bg-blue-100 relative p-5 md:p-9 rounded-lg">
                <div className="bg-white pt-8 lg:pt-0 pb-8 px-5 md:px-8 rounded-md">
                    <div className="flex flex-col lg:flex-row items-center gap-4">
                        <img className="w-16 h-16 object-cover rounded-full border-4 border-white shadow-md" src="https://images.pexels.com/photos/3283568/pexels-photo-3283568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Claire Smith" />
                        <div>
                            <h2 className="text-lg font-semibold lg:mt-10">- @SmithClaire</h2>
                            <div className="flex items-center mt-2">
                                <span className="shadow-lg bg-white rounded-full inline-flex items-center px-3 py-1.5 text-gray-500 text-xs"><svg className="mr-1 w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>5</span>
                                <span className="ml-2.5 text-sm text-gray-400 mt-2.5">Excellent</span>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold mt-7 mb-2.5">Still happy with Freelo</h3>
                    <p className="leading-loose">I owe these guys my life. Already used their landing page templates for my latest two projects.</p>
                    <div className="md:flex items-center gap-5 mt-4">
                        <span className="mb-3 md:mb-0 flex items-center text-gray-400 text-sm">  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-1.5 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>2 days ago</span>
                        <span className="flex items-center text-gray-400 text-sm">  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-1.5 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>6 min read</span>
                    </div>

                </div>
            </div>
            <div className="bg-green-100 relative p-5 md:p-9 rounded-lg">
                <div className="bg-white pt-8 lg:pt-0 pb-8 px-5 md:px-8 rounded-md">
                    <div className="flex flex-col lg:flex-row items-center gap-4">
                        <img className="w-16 h-16 object-cover rounded-full border-4 border-white shadow-md" src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Chris Newton" />
                        <div>
                            <h2 className="text-lg font-semibold lg:mt-10">- @chris_newton</h2>
                            <div className="flex items-center mt-2">
                                <span className="shadow-lg bg-white rounded-full inline-flex items-center px-3 py-1.5 text-gray-500 text-xs"><svg className="mr-1 w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>5</span>
                                <span className="ml-2.5 text-sm text-gray-400 mt-2.5">Excellent</span>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold mt-7 mb-2.5">Still happy with Freelo</h3>
                    <p className="leading-loose">I owe these guys my life. Already used their landing page templates for my latest two projects.</p>
                    <div className="md:flex items-center gap-5 mt-4">
                        <span className="mb-3 md:mb-0 flex items-center text-gray-400 text-sm">  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-1.5 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>2 days ago</span>
                        <span className="flex items-center text-gray-400 text-sm">  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-1.5 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>6 min read</span>
                    </div>

                </div>
            </div>
        </LazyLoad>
    )
}

export default OurSatisfiedClients;