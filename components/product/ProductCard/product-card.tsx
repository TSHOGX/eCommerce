import { Product, Products } from "@/lib/types";
import AddToCartButton from "../add-to-cart-button";
import Link from "next/link";
import './product-card.css';

export default async function ProductCard({
    product
  }: {
    product: Product
  }) {

  return (
    // <div className = 'product-card flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4' key = {product.id} >
                
    //     <img
    //         key={product.id}
    //         className=" h-64 w-56 rounded-lg"
    //         src={product.images[0]}
    //         alt= {product.name}
    //     />  

    //     <div className=" product-info flex flex-col gap-2 items-center">             
    //         <div className=" text-black font-semibold">{product.name}</div>

    //         <div className= 'flex flex-row gap-2'>                  
    //             <AddToCartButton
    //             productID={product.id}
    //             productTitle={product.name}
    //             />
    //             <Link
    //                 className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-full text-sm px-4 py-2"
    //                 href={`/product/${product.id}`}
    //             >
    //                 View More
    //             </Link>
    //         </div>
    //         <div className= "left-0 text-white bg-gray-800 font-semibold rounded-full text-sm px-2 py-2"> 
    //             ${product.price} 
    //         </div>
            
    //     </div>
    // </div>

    <div className = 'product-card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4' key = {product.id}>
        <div className = "relative">
            <Link
                className="hover:bg-gray-900"
                href={`/product/${product.id}`}
            >
                    
                <img 
                    className = "h-64 w-56 mx-auto rounded-lg shadow-lg" 
                    key={product.id}
                    src={product.images[0]}
                    alt= {product.name}
                />
            </Link>  
        </div>

        <div className = "relative px-4 -mt-6 mx-auto w-56">
            <div className = "text-center h-32 border-black border bg-white p-6 rounded-lg shadow-xl">
                <h4 className = "mt-2 font-semibold text-lg leading-tight truncate">{ product.name }</h4>
                <span className = "absolute top-0 left-0 ml-6 mt-2 bg-teal-500 text-white w-1-4 text-xs  px-2 rounded-full font-semibold">${product.price}</span>
              
                <div className = "mb-3 ml-4 absolute bottom-0">
                    <AddToCartButton
                        productID={product.id}
                        productTitle={product.name}
                    />
                
                </div>
            </div>
        </div>
    </div>

  );
}