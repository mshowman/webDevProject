import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStethoscope,
  faHome,
  faUsers,
  faExclamationCircle,
  faComments,
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  background-color: darkgreen;
  width: 100%;
  height: 50px;
  flex: 2 100%;
  margin: 0 auto;
  padding: 0;
  justify-content: space-evenly;

  @media (min-width: 992px) {
    min-height: 40px;
  }

  a:hover {
    background: rgba(38, 166, 91, 0.4);
  }

  .active {
    background: rgba(38, 166, 91, 1);
  }
`;

const NavItem = styled(Link)`
  display: flex;
  font-weight: normal;
  font-size: 16px;
  text-decoration: none;
  font-family: Arial, sans-serif;
  color: white;
  text-shadow: 2px 2px black;
  padding: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;

  &.active {
    font-weight: bold;
    border-bottom: 2px;
    border-bottom-color: white;
  }

  @media (min-width: 992px) {
    height: 100%;

    &:hover {
      font-weight: bold;
      padding: 0 10px;
    }

    &.active {
      text-decoration: underline;
    }
  }

  @media (min-width: 1100px) {
    > svg {
      display: inline-block;
      padding-right: 8px;
    }
  }
`;

function getTitle(activeTab) {
  switch (activeTab) {
    case "home":
      return "Home";
    case "team":
      return "Team Members";
    case "review":
      return "Review Past Sprints";
    case "action":
      return "Review Action Items";
    case "health":
      return "Happy, Meh, Sad";
    case "discussion":
      return "Discussion";
    default:
      return "Error";
  }
}

const HeaderNav = () => {
  const [activeTab, setActiveTab] = useState("home");
  let isDesktop = window.innerWidth >= 992;

  useEffect(() => {
    document.title = `RetroBash | ${getTitle(activeTab)}`;
  });

  return (
    <Navbar id="navbar">
      <NavItem
        to="/"
        className={activeTab === "home" ? "active" : ""}
        onClick={() => setActiveTab("home")}
      >
        <FontAwesomeIcon icon={faHome} />
        {isDesktop && <span>Home</span>}
      </NavItem>
      <NavItem
        to="/team"
        className={activeTab === "team" ? "active" : ""}
        onClick={() => setActiveTab("team")}
      >
        <FontAwesomeIcon icon={faUsers} />
        {isDesktop && <span>Team Members</span>}
      </NavItem>
      <NavItem
        to="/review"
        className={activeTab === "review" ? "active" : ""}
        onClick={() => setActiveTab("review")}
      >
        <FontAwesomeIcon icon={faCalendarAlt} />
        {isDesktop && <span>Review Past Sprints</span>}
      </NavItem>
      <NavItem
        to="/action-items"
        className={activeTab === "action" ? "active" : ""}
        onClick={() => setActiveTab("action")}
      >
        <FontAwesomeIcon icon={faExclamationCircle} />
        {isDesktop && <span>Review Action Items</span>}
      </NavItem>
      <NavItem
        to="/health"
        className={activeTab === "health" ? "active" : ""}
        onClick={() => setActiveTab("health")}
      >
        <FontAwesomeIcon icon={faStethoscope} />
        {isDesktop && <span>Happy, Meh, Sad</span>}
      </NavItem>
      <NavItem
        to="/discussion"
        className={activeTab === "discussion" ? "active" : ""}
        onClick={() => setActiveTab("discussion")}
      >
        <FontAwesomeIcon icon={faComments} />
        {isDesktop && <span>Discussion</span>}
      </NavItem>
    </Navbar>
  );
};

export default HeaderNav;
