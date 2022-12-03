const Header = () => {
    return (
        <header>
            <div className="container mx-auto flex flex-wrap px-5 py-8 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <a href="#" className="text-xl uppercase font-bold md:text-3xl">React Lazy Components</a>
                </a>
                <nav className="text-gray-600 body-font font-medium md:ml-auto flex flex-wrap items-center text-base justify-center mt-2 md:mt-0">
                    <a className="mr-5 hover:text-indigo-900 uppercase" href="#">home</a>
                    <a className="mr-5 hover:text-indigo-900 uppercase" href="#">Product</a>
                    <a className="mr-5 hover:text-indigo-900 uppercase" href="#">Our satisfied</a>
                    <a className="hover:text-indigo-900 uppercase" href="#">shop</a>
                </nav>
            </div>
        </header>
    )
}

export default Header