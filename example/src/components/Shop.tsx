import { LazyLoad } from "../../../src";

const Shop = () => {
    return (
        <LazyLoad tag="main" className="grid grid-cols-12 md:container mx-auto md:px-5" rootMargin="100px">
            <section className="col-span-12 relative md:h-[calc(480px+5vw)]">
                <img src="https://img.freepik.com/free-vector/template-banner-online-store-with-shopping-cart-with-purchases-boxes-delivery-from-supermarket-vector-illustration_548887-104.jpg?w=2000" alt="Cliffs of Moher" className="w-full h-full object-cover" />
            </section>
        </LazyLoad>
    )
}

export default Shop