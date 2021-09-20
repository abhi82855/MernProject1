import React from 'react';
import Layout from '../../components/Layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductsBySlug } from '../../actions';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import generatePublicUrl from '../../urlConfig'
import generatePublicUrl from '../../urlConfig';
import './style.css'
const ProductListPage = (props) => {

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [priceRange, setPriceRange] = useState({
    under5k:5000,
    under10k:10000,
    under15k:15000,
    under20k:20000,
    under25k:25000,
    under30k:30000,
    under35k:35000,
    under40k:40000,
    under45k:45000,
    under50k:50000,
    under55k:55000,
    under60k:60000,
    under65k:65000,
    under70k:70000,
    under75k:75000,
    under80k:80000,
    under85k:85000,
    under90k:90000,
  })

  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);
  const path="http://localhost:2000/public/";
  return (

    <Layout>
      {
        Object.keys(product.productsByPrice).map((key,index)=>{
          return(

            <div className="card">
          <div className="cardHeader">
          
            <div>{props.match.params.slug } under {priceRange[key]}</div>
            <button>view all </button>
             
          </div>
          <div style={{display:'flex'}}>
            {
              product.productsByPrice[key].map(product=><Link
                Link style={{display:'block', listStyle:'none',listStyleType:'none'}}
                to={`/${product.slug}/${product._id}/p`}
              className="productContainer">
              <div className="productImgContainer">
                <img src={`${path}${product.productPictures[0].img}`} alt="mobile" />
                {/* <img src={generatePublicUrl(product.productPictures[0].img)} alt="mobile" /> */}
                 
               
              </div>
              <div className="productInfo">
                <div style={{ margin: '5px 0' }}>{product.name}</div>
                <div>
                  <span>4.5</span>&nbsp;
                  <span>445678</span>
                </div>
                <div className="productPrice">Rs{product.price}</div>
              </div>
            </Link>)
            }
            
          </div>

        </div>

          );
        })
      }

        


      

    </Layout>



    //   <Layout>
    //   {
    //     Object.keys(product.products).map((key,index)=>{
    //       return(
    //         <div className="card">
    //     <div className="cardHeader">
    //       <div>Samsung mobile under 10k </div>
    //       <button>view all </button>
    //     </div>
    //     <div>
    //       {
    //         product.products[key].map(product=><div className="productContainer">
    //         <div className="productImgContainer">
    //           <img src={product.productPictures[0].img} alt="mobile" />
    //         </div>
    //         <div className="productInfo">
    //           <div style={{ margin: '5px 0' }}>{product.name}</div>
    //           <div>
    //             <span>4.5</span>&nbsp;
    //             <span>445678</span>
    //           </div>
    //           <div className="productPrice">{product.price}</div>
    //         </div>
    //       </div>)
    //       }

    //     </div>

    //   </div>

    //       );
    //     })
    //   }

    // </Layout>
  );
}
export default ProductListPage
