import React from "react";
import styled from "@emotion/styled";

export const Header = () => {

       return (
              <SHeader>
                     <SLogo>
                            <h1>logo</h1>
                     </SLogo>
                     <SNav>
                            <SUl>
                                   <li>ABOUT</li>
                                   <li>WORKS</li>
                                   <li>WORKS</li>
                                   <li>WORKS</li>
                                   <li>CONTACT</li>
                            </SUl>
                     </SNav>
              </SHeader>
       )
}

const SHeader = styled.header`
    display: flex;
    justify-content: space-between;
    height: 80px;
    padding: 0 40px;
    font-size: 1.6rem;
    pointer-events: auto;
`
const SLogo = styled.div`
    position: relative;
    left: 0;
    margin-bottom: 0;
    justify-content: flex-start;
    margin-right: 10px;
    padding: 0;
    height: 100%;
`
const SNav = styled.nav`
       width: 50%;
       line-height: 5;
       margin: 0 auto;
       font-size: 1rem;
`

const SUl = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-around;

`