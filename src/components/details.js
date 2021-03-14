import React,{useContext, useState, useRef} from 'react'
import { useParams } from 'react-router-dom';
import { DataContext } from './dataProvider';
import DetailsThumbPic from './detailsThumbPic';
import {Link} from 'react-router-dom';

const Details = () => {

    const {id} = useParams();
    const value = useContext(DataContext);
    const [products] = value.products;
    const addCart = value.addCart

    const [index,setIndex] = useState(0);
    const imgRef = useRef();
   

    const details = products.filter((products, index) => {
        return products._id == id
    })
    const handleMouseMove = e =>{
        const {left, top, width, height} = e.target.getBoundingClientRect();
        const x = (e.pageX -left) / width * 100;
        const y = (e.pageY -top) /height * 100; 
        imgRef.current.style.backgroundPosition = `${x}% ${y}%`;
    }
    console.log(details);
    return (
        <>
            {
                details.map(product => (
                    <div className="details" key={product._id}>
                        <div className="img-container" onMouseMove={handleMouseMove}
                        style={{ backgroundImage: `url(${product.images[index]})` }}
                        ref={imgRef}
                        onMouseLeave={()=> imgRef.current.style.backgroundPosition = `center`}/>
                            <div className="box-details" >
                                <h2 title={product.title}>{product.title}</h2>
                                <h3 >$ {product.price}</h3>
                                <p>{product.description}</p>
                                <DetailsThumbPic images={product.images} setIndex={setIndex}/>                             
                                <Link to="/cart" className="cart" onClick={() => addCart(product._id)}>
                               Add to cart
                            </Link>
                            </div>
                        </div>
                   
                ))}
        </>
    );
};

export default Details;