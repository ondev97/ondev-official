import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function Nav({ navType }) {
  const [isMobNav, setisMobNav] = useState(false);

  //animation
  const fade = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transision: { duration: 0.2 } },
    exit: {
      opacity: 0,
      transision: { duration: 0.3 },
    },
  };
  const listItems = {
    hidden: { y: 100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transision: { ease: "easeOut" },
    },
    exit: {
      y: 100,
      opacity: 0,
      transision: { ease: "easeOut" },
    },
  };
  const stagger = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const menumob = useRef();

  //when body click menu hidden

  useEffect(() => {
    const body = document.querySelector("body");
    body.addEventListener("click", exitmobNav);
  });

  const exitmobNav = (e) => {
    if (!menumob.current.contains(e.target)) {
      setisMobNav(false);
    }
  };

  return (
    <NAV>
      <NavMain>
        <Log className="log">
          <Link href="/">
            <StyledImage
              src={navType ? "/img/L2.png" : "/img/L1.png"}
              alt="logo"
            />
          </Link>
        </Log>
        <List className="list-col">
          <Ul>
            <Link href="/">
              <li className={!navType ? "listSt" : ""}>HOME</li>
            </Link>
            <Link href="/about">
              <li className={!navType ? "listSt" : ""}>ABOUT</li>
            </Link>
            <Link href="/services/">
              <li className={!navType ? "listSt" : ""}>SERVICES</li>
            </Link>
            <Link href="/contact">
              <li className={!navType ? "listSt" : ""}>CONTACT</li>
            </Link>
            <Link href="#">
              <li className={!navType ? "listSt" : ""}>OnDev SHOP</li>
            </Link>
          </Ul>
          <Link href="/contact">
            <button className={!navType ? "myStyle" : ""}>LET'S TALK</button>
          </Link>
        </List>
        <Mobilenav className="mobmenu" ref={menumob}>
          <button onClick={() => setisMobNav(!isMobNav)}>
            <div className={!navType ? "myBar menubar1" : "menubar1"}></div>
            <div className={!navType ? "myBar menubar2" : "menubar2"}></div>
            <div className={!navType ? "myBar menubar3" : "menubar3"}></div>
          </button>
          <AnimatePresence exitBeforeEnter>
            {isMobNav && (
              <motion.div
                variants={fade}
                animate="show"
                initial="hidden"
                exit="exit"
                className="menu"
              >
                <motion.ul variants={stagger}>
                  <Link href="/">
                    <motion.li
                      variants={listItems}
                      className={!navType ? "listSt" : ""}
                    >
                      HOME
                    </motion.li>
                  </Link>
                  <Link href="/about">
                    <motion.li
                      variants={listItems}
                      className={!navType ? "listSt" : ""}
                    >
                      ABOUT
                    </motion.li>
                  </Link>
                  <Link href="/services/">
                    <motion.li
                      variants={listItems}
                      className={!navType ? "listSt" : ""}
                    >
                      SERVICES
                    </motion.li>
                  </Link>
                  <Link href="/contact">
                    <motion.li
                      variants={listItems}
                      className={!navType ? "listSt" : ""}
                    >
                      CONTACT
                    </motion.li>
                  </Link>
                  <Link href="#">
                    <motion.li
                      variants={listItems}
                      className={!navType ? "listSt" : ""}
                    >
                      OnDev SHOP
                    </motion.li>
                  </Link>
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </Mobilenav>
      </NavMain>
    </NAV>
  );
}

const NAV = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 5px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;
const NavMain = styled.div`
  position: relative;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1040px) {
    width: 95%;
  }
  @media (max-width: 250px) {
    display: block;
    text-align: center;
  }
`;
const Log = styled.div`
  flex: 0.2;
`;
const List = styled.div`
  flex: 0.8;
  font-family: "ubuntu", sans-serif;
  font-size: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    width: 150px;
    padding: 12px 0;
    background: transparent;
    border: 2px solid #2039cc;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    outline: none;
    transition: 0.3s ease-in;

    &:hover {
      box-shadow: 0px 0px 8px 1px #2039cc;
      background: #47518b47;
    }
    @media (max-width: 450px) {
      display: none;
    }
  }
  .myStyle {
    color: #48484a;
    font-weight: bold;
    &:hover {
      background-color: #2039cc;
      color: #fff;
    }
  }
  .listSt {
    color: #48484a;
    font-weight: bold;
    &:hover {
      color: #2039cc;
    }
  }
`;
const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  li {
    padding: 0 28px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #1bb3ff;
    }
  }

  @media (max-width: 980px) {
    display: none;
  }
`;
const StyledImage = styled.img`
  width: 150px !important;
  @media (max-width: 160px) {
    width: 110px !important;
  }
`;
const Mobilenav = styled.div`
  position: relative;
  display: none;
  margin-left: 25px;
  @media (max-width: 980px) {
    display: block;
  }
  @media (max-width: 250px) {
    display: flex;
    margin-left: 0;
    margin-top: 5px;
    justify-content: center;
    align-items: center;
  }
  button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    width: 25px;
    height: 25px;
    display: flex;
    flex-direction: Column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    &:hover .menubar2 {
      transform: translateX(0);
    }
    .myBar {
      background-color: #000 !important;
    }
    .menubar1,
    .menubar2,
    .menubar3 {
      background-color: rgb(255, 255, 255);
      width: 100%;
      height: 2.5px;
    }
    .menubar2 {
      transition: transform 0.3s ease;
      margin: 7px 0;
      transform: translateX(10px);
    }
  }
  .menu {
    position: absolute;
    display: block;
    background-color: rgba(255, 255, 255, 95%);
    top: 180%;
    right: 0;
    width: 230px;
    min-height: 45vh;
    z-index: 2;
    padding: 15px;
    overflow-y: auto;
    border: 1px solid #34408a;
    border-radius: 3px;
    overflow-y: hidden;
    box-shadow: 0px 0px 8px 1px #eee;

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      list-style: none;
      li {
        width: 100%;
        font-family: var(--main-font);
        color: #000;
        padding: 18px 0;
        text-align: left;
        cursor: pointer;
        font-size: 14px;
        transition: transform 0.8s ease-in, color 0.5s ease;
        &:hover {
          color: #3499cc;
          transform: translateX(5px);
        }
      }
    }
    @media (max-width: 450px) {
      width: 200px;
    }
    @media (max-width: 220px) {
      width: 120px;
    }
  }
`;
