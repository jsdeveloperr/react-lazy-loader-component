import { LazyLoad } from "../../../src";

const Shop = () => {
    return (
        <LazyLoad tag="main" className="grid grid-cols-12 md:container mx-auto md:px-5" rootMargin="100px">
            <section className="col-span-12 relative md:h-[calc(480px+5vw)]">
                <img src="https://images.unsplash.com/photo-1530538095376-a4936b35b5f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="Cliffs of Moher" className="w-full h-full object-cover" />

                <div className="absolute inset-0 px-5 flex items-center h-full w-full justify-center flex-col">
                    <span className="w-40 h-0.5 bg-white block mb-7"></span>
                    <h1 className="text-2xl md:text-4xl xl:text-5xl tracking-wider uppercase font-semibold text-white">ireland views</h1>
                    <span className="w-40 h-0.5 bg-white block mt-7"></span>
                </div>
            </section>
        </LazyLoad>
    )
}

export default Shop