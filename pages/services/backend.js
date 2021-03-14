import React from "react";
import styled from "styled-components";
import ContactSmallSection from "../../components/ContactSmallSection";

export default function frontend() {
  return (
    <div>
      <BoxesSer className="box">
        <Main>
          <Row1>
            <div className="column">
              <h1>Backend Development</h1>
              <p>
                As the user-facing part of a product, nailing the frontend is
                essential. We are building beautiful, responsive frontend
                interfaces. Our frontend development expertise enables our
                clients to differentiate themselves with digital products that
                are a delight to use
              </p>
            </div>
            <div className="column">
              <div className="heimage">
                <img src="/img/svg/backend-dev.svg" alt="" />
              </div>
            </div>
          </Row1>
        </Main>
      </BoxesSer>
      <Row2 className="row">
        <div className="maincol">
          <div className="column">
            <h1>Technology Focus</h1>
            <p>We focus on the most popular python frameworks: Django</p>
          </div>
          <div className="column">
            <div className="col">
              <img src="/img/svg/php.svg" alt="" />
            </div>
            <div className="col">
              <img src="/img/svg/python.svg" alt="" />
            </div>
          </div>
        </div>
      </Row2>
      <ContactSmallSection />
    </div>
  );
}
const BoxesSer = styled.div`
  position: relative;
  min-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main = styled.div`
  width: 90%;
  margin: 0 auto;
  background: #fff;
`;
const Row1 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow-y: hidden;
  background: #fff;

  .column {
    flex: 0.4;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    &:nth-child(1) {
      align-items: flex-start;

      h1 {
        font-family: var(--main-font);
        font-size: 40px;
        color: #3499cc;
        font-weight: normal;
      }
      p {
        font-family: var(--sub-font);
        font-size: 18px;
        margin-top: 18px;
        line-height: 35px;
      }
    }

    .heimage {
      img {
        width: 85%;
      }
    }
  }
`;
const Row2 = styled.div`
  width: 100%;
  background-color: #48484a;
  padding: 75px 0;
  margin-bottom: 45px;
  .maincol {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .column {
      flex-basis: 500px;
      h1 {
        color: #ffffff;
        font-family: var(--main-font);
        font-weight: normal;
        font-size: 40px;
        margin-bottom: 10px;
      }
      p {
        color: #ffffff;
        font-family: var(--sub-font);
        font-size: 20px;
      }

      &:nth-child(2) {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        img {
          width: 40px;
        }
      }
    }
  }
`;