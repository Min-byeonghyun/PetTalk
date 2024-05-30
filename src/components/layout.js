import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase";
import { LuDog } from "react-icons/lu";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background-color: #f8f9fa;
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  background-color: #343a40;
  padding: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const MenuItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100px; 
  border-radius: 10px; 
  transition: all 0.3s ease;
  position: relative;
  margin-left: 20px; 

  &:hover {
    background-color: #495057;
    transform: scale(1.05); 
  }

  &.log-out {
    margin-left: auto;
    border: 2px solid transparent;
    background-color: #dc3545;
    svg {
      fill: white;
    }
  }
`;

const MenuName = styled.div`
  color: white;
  font-size: 16px; 
  margin-left: 10px; 
`;

const DogIcon = styled(LuDog)`
  width: 40px;
  height: 40px;
`;

export default function Layout() {
  const navigate = useNavigate();
  const onLogOut = async () => {
    const ok = window.confirm("로그아웃 하시겠습니까?");
    if (ok) {
      await auth.signOut();
      navigate("/login");
    }
  };
  return (
    <Wrapper>
      <Menu>
        <Link to="/" style={{textDecoration : "none"}}>
          <MenuItem>
            <DogIcon color="white"  />
            <MenuName>PetTalk</MenuName>
          </MenuItem>
        </Link>
        <Link to="/board" style={{textDecoration : "none"}}>
          <MenuItem>
            <MenuName>Board</MenuName>
          </MenuItem>
        </Link>
        <Link to="/info" style={{textDecoration : "none"}}>
          <MenuItem>
            <MenuName>Info</MenuName>
          </MenuItem>
        </Link>
        <Link to="/profile" style={{textDecoration : "none"}}>
          <MenuItem>
            <MenuName>Profile</MenuName>
          </MenuItem>
        </Link>
        <MenuItem onClick={onLogOut} className="log-out">
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 10.75 18h-5.5A2.25 2.25 0 0 1 3 15.75V4.25Z"
            />
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M6 10a.75.75 0 0 1 .75-.75h9.546l-1.048-.943a.75.75 0 1 1 1.004-1.114l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 1 1-1.004-1.114l1.048-.943H6.75A.75.75 0 0 1 6 10Z"
            />
          </svg>
          <MenuName>Logout</MenuName>
        </MenuItem>
      </Menu>
      <Outlet />
    </Wrapper>
  );
}
