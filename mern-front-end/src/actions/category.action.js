import axios from "../helpers/axios";
 import { categoryConstansts, categoryConstants } from "./constants";
 

// const getAllCategory = () => {
//     return async dispatch => {

//         dispatch({ type: categoryConstansts.GET_ALL_CATEGORIES_REQUEST });
//         const res = await axios.get(`category/getcategory`);
//         console.log(res);
//         if (res.status === 200) {

//             const { categoryList } = res.data;

//             dispatch({
//                 type: categoryConstansts.GET_ALL_CATEGORIES_SUCCESS,
//                 payload: { categories: categoryList }
//             });
//         } else {
//             dispatch({
//                 type: categoryConstansts.GET_ALL_CATEGORIES_FAILURE,
//                 payload: { error: res.data.error }
//             });
//         }


//     }
// }

export const getAllCategory = () => {
    return async dispatch => {
             dispatch({type:categoryConstants.GET_ALL_CATEGORIES_REQUEST})
             const res = await axios.get('category/getcategory');
             console.log(res);
             if(res.status==200)
             {
                 const {categoryList}=res.data;
                 console.log(categoryList);
                 dispatch({
                     type:categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                     payload:{categories:categoryList}
                 });
                
             }
             else
             {   dispatch({
                 type:categoryConstants.GET_ALL_CATEGORIES_FAILURE,
                 payload:{error:res.data.error}
                  })
             }


    }
}