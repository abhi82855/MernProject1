import React from 'react';
import Layout from '../../components/Layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductsBySlug } from '../../actions';
import { useSelector } from 'react-redux';
import './style.css'
const ProductListPage = (props) => {
  
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);
  return (

    <Layout>
      {
       // Object.keys(product.getProductsByPrice).map((key,index)=>{
         // return(
            <div className="card">
        <div className="cardHeader">
          <div>Samsung mobile under 10k </div>
          <button>view all </button>
        </div>
        <div>
          <div className="productContainer">
            <div className="productImgContainer">
              <img src="https://th.bing.com/th/id/OIP.OparwHiHhZVVhQIgYewH-QHaE8?pid=ImgDet&rs=1" alt="mobile" />
            </div>
            <div className="productInfo">
              <div style={{ margin: '5px 0' }}>Samsung 4 gb ram</div>
              <div>
                <span>4.5</span>&nbsp;
                <span>445678</span>
              </div>
              <div className="productPrice">price 1234</div>
            </div>
          </div>
        </div>

      </div>

         // );
       // }
        //)
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
