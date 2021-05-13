import style from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SidemenuContainer = style.div`
  display: none;

  @media screen and (max-width: 768px){
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #000;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ open }) => (open ? "100%" : "0")};
    top: ${({ open }) => (open ? "62px" : "-100%")};
}
`
export const SidemenuItems = style.ul`
  display: grid;
  grid-template-column: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
`
export const SidemenuLink = style(LinkS)`
  display: flex;
  position: relative;
  top: 80px;
  align-items: center;
  left: 44%;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
      color: #6d7471;
      transition: 0.2s ease-in-out;
  }
`
export const PortfolioSideLink = style(LinkR)`
  position: absolute;
  top: 400px;
  width: 50%;
  left: 44%;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  &:hover {
    color: #6d7471;
    transition: 0.2s ease-in-out;
}
`
export const SocialIcons = style.ul`
  display: flex;
  grid-gap: 20px;
  list-style: none;
  justify-content: center;
`