import React from "react";
import styled from "@emotion/styled";

export const Header = () => {

       return (
              <SHeader>
                     <SLogo>
                            <h1>
                                   {/* <i class="fab fa-github"></i> */}
                                   Ts
                            </h1>
                     </SLogo>
                     <SNav>
                            <SUl>
                                   <SLi>About</SLi>
                                   <SLi>Profile</SLi>
                                   <SLi>Works</SLi>
                                   <SLi>Skils</SLi>
                                   <SLi>Blog</SLi>
                                   <SLi>Contact</SLi>
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
    opacity: 0.8;
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

const SLi = styled.li`
     cursor: pointer;
     height: 50px;
     transition: all 0.5s;
     &:hover {
            border-bottom: 1px solid black;
            font-size: 20px;
     }
`