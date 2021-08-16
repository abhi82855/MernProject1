import React from "react";
import { Jumbotron } from "react-bootstrap";
import Layout from "../../components/Layout";

const Home = () => {
  return (
    <div>
      <Layout>
        <Jumbotron
          style={{ margin: "6rem", background: "#fff" }}
          className="text-center"
        >
          <h1>Welcome to admin Dashboard</h1>
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally or one who
            avoids a pain that produces no resultant pleasure
          </p>
        </Jumbotron>
      </Layout>
    </div>
  );
};

export default Home;
