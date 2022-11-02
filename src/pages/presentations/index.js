import * as React from "react";

import Layout from "../../components/Layout";
import Video from "../../components/Video";

export default class Presentations extends React.Component {
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
              boxShadow: "0.5rem 0 0 rgba(218, 10, 0, .3), -0.5rem 0 0 rgba(218, 10, 0, .3)",
              backgroundColor: "rgba(218, 10, 0, .3)",
              color: "white",
              padding: "1rem",
            }}
          >
            Prezentácie knihy
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <h2>
                Hložany 26. októbra 2022
              </h2>
              <Video 
                videoSrcURL="https://www.youtube.com/embed/sRkFomI8mo4?start=1"
                videoTitle="Slovak Canadian Personalities"
              />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}