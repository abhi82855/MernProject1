// import  {useState}from "react";

// const Newpage = (props) => {
//   const [createModal, setModel] = useState(false);
//   const [title,settitle] = useState('');
//   const category=useSelector(state=>state.category)
//   const [categories,setCategories]=useState([])
//   const [categoryId,setCategoryId]=useState([])
//   const [desc,setdesc]=useState('')
//   const [banners,setBanners]=useState([])
//   const [products,setproducts]=useState([])

//   useEffect(() => {
//       setCategories(linearCategories(category.categories))
//       }, [category])

//   const handleBannerImages = (e) =>{
//       console.log(e);
//   }

//   const handleProductImages = () =>{
//       console.log(e);
//   }
//   const renderCreatePageModal = (e) =>{
//  return(<>
//      <Model show={createModal}
//      modalTitle={'create New Page'}
//      handleClose={()=> setCreateModal(false)}
//      ></Model>

//      <conatiner>
//      <Row>
//          <Col>
//              <select
//              className="form-control"
//              value={categoryId}
//              onChange={(e) =>setCategoryId(e.target.value)
//              }>
//              <Option value=''>select category</Option>
//              {
//                  categories.map (cat=>{

//                  }
//                  )
//              }
//          </Col>
//      </Row>

//      </conatiner>
//      </>
//  )

//   }
// };
