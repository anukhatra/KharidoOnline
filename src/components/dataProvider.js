import React, { createContext, useState ,useEffect} from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            "_id": "1",
            "title": "House 01",
            "images": [
                "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
                "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg",
                "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg",
                "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg",

            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "price": 401000,
            "count" : 1
        },
        {
            "_id": "2",
            "title": "House 02",
            "images": [
                "https://res.cloudinary.com/dvcywi3uf/image/upload/v1520014276/chatbot-imoveis/casa-costa-silva.jpg",
                "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg",
                "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
                "https://images.pexels.com/photos/349749/kitchen-stove-sink-kitchen-counter-349749.jpeg"
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "price": 350000,
            "count" : 1
        },
        {
            "_id": "3",
            "title": "House 03",
            "images": [
                "https://res.cloudinary.com/dvcywi3uf/image/upload/v1520014434/chatbot-imoveis/ap-america.jpg",
                "https://images.pexels.com/photos/279607/pexels-photo-279607.jpeg",
                "https://res.cloudinary.com/dvcywi3uf/image/upload/v1520011556/chatbot-imoveis/casa-centro.jpg",
                "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg"

            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "price": 460000,
            "count" : 1
        },
        {
            "_id": "4",
            "title": "House 04",
            "images": [
                "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
                "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg",
                "https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg",
                "https://res.cloudinary.com/dvcywi3uf/image/upload/v1520011556/chatbot-imoveis/casa-centro.jpg"
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "price": 2000000,
            "count" : 1
        },
        {
            "_id": "5",
            "title": "House 05",
            "images": [
                "https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg",
                "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
                "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
                "https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg",
                "https://images.pexels.com/photos/892618/pexels-photo-892618.jpeg"

            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "price": 2500000, 
             "count" : 1
        },
        {
            "_id": "6",
            "title": "House 06",
            "images": [

                "https://images.pexels.com/photos/1212053/pexels-photo-1212053.jpeg",
                "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg",
                "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg",
                "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg"

            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "price": 3500000,
            "count" : 1

        }])

        const [cart, setCart] = useState([])

        const addCart = (id) =>{
            const check = cart.every(item =>{
                return item._id !== id
            })
            if(check){
                const data = products.filter(product =>{
                    return product._id === id
                })
                setCart([...cart, ...data])
            }else{
                alert("The product has been added to cart.")
            }
        }
    
        useEffect(() =>{
           const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
           if(dataCart) setCart(dataCart)
        },[])
    
        useEffect(() =>{
            localStorage.setItem('dataCart', JSON.stringify(cart))
        },[cart])
    
    
        const value = {
            products: [products, setProducts],
            cart: [cart, setCart],
            addCart: addCart
        }
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    );
};

