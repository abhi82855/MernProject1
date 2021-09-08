import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getAllCategory } from "../../actions/category.action";
import Layout from "../../components/Layout";

const Category = (props) => {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const renderCategories = (categories) => {
    let categories = [];
    for (let category of categories) {
      categories.push();
    }
  };

  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <h3>Category</h3>
              <button>Add</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}></Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Category;
