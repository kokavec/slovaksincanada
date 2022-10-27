import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class Personalities extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/background_4.jpg')`, 'backgrounPosition': 'center',
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 rgb(218, 10, 0), -0.5rem 0 0 rgb(218, 10, 0)",
              backgroundColor: "rgb(218, 10, 0)",
              color: "white",
              padding: "1rem",
            }}
          >
            Slovenské osobnosti v Kanade
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
