import React from 'react';
import Layout from '../../components/Layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductsBySlug } from '../../actions';
import './style.css'
const ProductListPage=(props)=> {
  const img="https://www.amazon.in/Durian-Berry-Three-Seater-Brown/dp/B011YIZFZ6";
  const dispatch =useDispatch();

  useEffect(()=>{
  const {match}=props;
    dispatch(getProductsBySlug(match.params.slug));
  },[]);
  return (
    
    <Layout>
      <div className="card">
        <div className="cardHeader">
          <div>Samsung mobile under 10k </div>
          <button>view all </button>
        </div>
        <div>
          <div className="productContainer">
            <div className="productImgContainer">
              <img src="https://th.bing.com/th/id/OIP.OparwHiHhZVVhQIgYewH-QHaE8?pid=ImgDet&rs=1" alt="mobile"/>
            </div>
                  <div className="productInfo">
                    <div>Samsung 4 gb ram</div>
                    <div>
                      <span>4.5</span>
                      <span>4.5</span>
                      </div>
                      <div>price 1234</div>
                  </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}
export default ProductListPage
