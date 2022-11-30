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
              <h3>
                23. novembra 2022 o 17:00h, V zborovej sieni farského úradu, Farský úrad Slovenského ev. a.v. cirkevného zboru v Silbaši, ulica Masarykova 59, Silbaš, Srbsko
              </h3>
              <img
                src="/img/prezentacia_silbas.jpg"
                alt="Silbaš"
              />
              <h3>
                28. novembra 2022 o 18:30h, V sieni Spolku petrovských žien, ulica Maršala Tita 2, Báčsky Petrovec, Srbsko
              </h3>
              <img
                src="/img/prezentacia_bacsky_petrovec_1.jpeg"
                alt="Báčsky Petrovec"
              />
              <h3>
                29. novembra 2022 o 19:00h, V malej sieni SKC Pavel Jozef Šafárik, ulica Vuka Karadžića 2/a Novi Sad, Srbsko
              </h3>
              <img
                src="/img/prezentacia_novy_sad_1.jpeg"
                alt="Silbaš"
              />
              <h2>Už uskutočnené</h2>
              <h3>
                26. októbra 2022, Hložany, Srbsko
              </h3>
              <Video 
                videoSrcURL="https://www.youtube.com/embed/yE9nI2n_wWQ"
                videoTitle="Hlozany prezentation"
              />
              <h3>
                10. novembra 2022 o 16:30h Krajská knižnica v Žiline, Slovensko
              </h3>
              <img
                src="/img/prezentacia_zilina.jpeg"
                alt="Žilina"
              />
              <Video 
                videoSrcURL="https://www.youtube.com/embed/JbqBtZ53Gs4"
                videoTitle="Zilina prezentation"
              />
              <h3>
                15. novembra 2022 o 17:00h, V Prednáškovej sále  Univezitnej knižnice v Bratislave Ventúrska 11, Bratislava
              </h3>
              <img
                src="/img/prezentacia_bratislava.jpeg"
                alt="Bratislava"
              />
              <h3>
                16. novembra 2022 o 11:00h, Univezitná knižnica Prešovskej univerzity v Prešove ul. 17. novembra 1, Prešov
              </h3>
              <img
                src="/img/prezentacia_presov.jpeg"
                alt="Prešov"
              />
              <Video 
                videoSrcURL="https://www.youtube.com/embed/PkrTejtwyEs"
                videoTitle="Presov"
              />
              <h3>
                20. novembra 2022 o 15:00h, KD Zuberec
              </h3>
              <img
                src="/img/prezentacia_zuberec.jpeg"
                alt="Zuberec"
              />
              <Video 
                videoSrcURL="https://www.youtube.com/embed/THxdI528ANo"
                videoTitle="Zuberec prvi priekopnici"
              />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}