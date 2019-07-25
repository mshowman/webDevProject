import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
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
  background-color: darkgreen;
  flex-direction: column;
  width: 100%;
  height: 24px;
  flex: 2 100%;

  @media (min-width: 917px) {
    min-height: 40px;
    flex-direction: row;
    margin: 0 auto;
    padding: 0;
    justify-content: space-evenly;
  }

  a:hover {
    background: rgba(38, 166, 91, 0.4);
  }

  a.active {
    background: rgba(38, 166, 91, 1);
  }
`;

const NavItem = styled(Link)`
  display: flex;
  font-weight: normal;
  font-size: 16px;
  text-decoration: none;
  font-family: Arial;
  color: white;
  text-shadow: 2px 2px black;
  padding: 0;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 20px;
  align-items: center;

  &.active {
    font-weight: bold;
    border-bottom: 2px;
    border-bottom-color: white;
    padding: 0 10px;
  }

  > svg {
    display: none;
  }

  @media (min-width: 917px) {
    justify-content: center;
    height: 100%;
    flex-direction: row;

    :hover {
      font-weight: bold;
      padding: 0 10px;
    }

    &.active {
      text-decoration: underline;
    }
  }

  @media (min-width: 1100px){
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
        Home
      </NavItem>
      <NavItem
        to="/team"
        className={activeTab === "team" ? "active" : ""}
        onClick={() => setActiveTab("team")}
      >
        <FontAwesomeIcon icon={faUsers} />
        Team Members
      </NavItem>
      <NavItem
        to="/review"
        className={activeTab === "review" ? "active" : ""}
        onClick={() => setActiveTab("review")}
      >
        <FontAwesomeIcon icon={faCalendarAlt} />
        Review Past Sprints
      </NavItem>
      <NavItem
        to="/action-items"
        className={activeTab === "action" ? "active" : ""}
        onClick={() => setActiveTab("action")}
      >
        <FontAwesomeIcon icon={faExclamationCircle} />
        Review Action Items
      </NavItem>
      <NavItem
        to="/health"
        className={activeTab === "health" ? "active" : ""}
        onClick={() => setActiveTab("health")}
      >
        <FontAwesomeIcon icon={faStethoscope} />
        Happy, Meh, Sad
      </NavItem>
      <NavItem
        to="/discussion"
        className={activeTab === "discussion" ? "active" : ""}
        onClick={() => setActiveTab("discussion")}
      >
        <FontAwesomeIcon icon={faComments} />
        Discussion
      </NavItem>
    </Navbar>
  );
};

export default HeaderNav;
