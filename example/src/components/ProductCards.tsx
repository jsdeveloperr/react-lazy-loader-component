import { LazyLoad } from "react-lazy-loader-component";

const ProductCards = () => {
    return (
        <LazyLoad className="container mx-auto mt-10" rootMargin="100px">
            <h1 className="md:col-span-2 xl:col-span-3 text-2xl md:text-4xl font-bold text-center text-gray-800 mb-10">Product clients review</h1>
            <div className="flex flex-wrap items-center justify-center">
                <div className="w-full px-2 my-2 sm:w-1/2 lg:w-1/4">
                    <div className="shadow-md overflow-hidden rounded-lg bg-white hover:shadow-lg">
                        <a href="#" className="block">
                            <img src="../assets/phone_1.jpeg" className="w-full object-cover block mx-auto" />
                        </a>

                        <a href="#" className="block text-left text-base font-normal mt-2 ml-4">
                            Samsung Z Fold 4 1TB Rose Gold
                        </a>

                        <div className="ml-4 my-2 text-yellow-500">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fal fa-star"></i>
                            <i className="fal fa-star"></i>
                        </div>

                        <h3 className="font-bold text-left text-3xl mb-1 ml-4">$1,799.00 </h3>

                        <span className="mb-4">
                            <span className="bg-red-600 text-white text-sm font-medium mr-1 ml-4 mb-4 px-2.5 py-0.5 p-1">Save
                                $100
                            </span>
                            <span className="text-gray-600">Was $1,899.00</span>
                        </span>

                        <div className="mx-auto px-4 my-4">
                            <button className="w-full py-2 border-2 border-blue-600 bg-blue-600 text-white rounded mr-2 uppercase hover:text-blue-700 hover:bg-transparent">
                                <i className="fad fa-shopping-cart mx-1"></i> <span className="mr-2">Add to cart</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full px-2 my-2 sm:w-1/2 lg:w-1/4">
                    <div className="shadow-md overflow-hidden rounded-lg bg-white hover:shadow-lg">
                        <a href="#" className="block">
                            <img src="../assets/phone_2.jpeg" className="w-full object-cover block mx-auto" />
                        </a>

                        <a href="#" className="block text-left text-base font-normal mt-2 ml-4">
                            Huawei Mate 50 Pro 512GB Orange
                        </a>

                        <div className="ml-4 my-2 text-yellow-500">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>

                        <h3 className="font-bold text-left text-3xl mb-1 ml-4">$1,199.00 </h3>

                        <span className="mb-4">
                            <span className="bg-red-600 text-white text-sm font-medium mr-1 ml-4 mb-4 px-2.5 py-0.5 p-1">Save
                                $200
                            </span>
                            <span className="text-gray-600">Was $1,399.00</span>
                        </span>

                        <div className="mx-auto px-4 my-4">
                            <button className="w-full py-2 border-2 border-blue-600 bg-blue-600 text-white rounded mr-2 uppercase hover:text-blue-700 hover:bg-transparent">
                                <i className="fad fa-shopping-cart mx-1"></i> <span className="mr-2">Add to cart</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full px-2 my-2 sm:w-1/2 lg:w-1/4">
                    <div className="shadow-md overflow-hidden rounded-lg bg-white hover:shadow-lg">
                        <a href="#" className="block">
                            <img src="../assets/phone_3.jpeg" className="w-full object-cover block mx-auto" />
                        </a>

                        <a href="#" className="block text-left text-base font-normal mt-2 ml-4">
                            IPhone 14 pro Max 256GB Rose Gold
                        </a>

                        <div className="ml-4 my-2 text-yellow-500">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fal fa-star"></i>
                        </div>

                        <h3 className="font-bold text-left text-3xl mb-1 ml-4">$1,199.00 </h3>

                        <span className="mb-4">
                            <span className="bg-red-600 text-white text-sm font-medium mr-1 ml-4 mb-4 px-2.5 py-0.5 p-1">Save
                                $50
                            </span>
                            <span className="text-gray-600">Was $1,249.00</span>
                        </span>

                        <div className="mx-auto px-4 my-4">
                            <button className="w-full py-2 border-2 border-blue-600 bg-blue-600 text-white rounded mr-2 uppercase hover:text-blue-700 hover:bg-transparent">
                                <i className="fad fa-shopping-cart mx-1"></i> <span className="mr-2">Add to cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </LazyLoad>
    )
}

export default ProductCards