import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderNav from "./Components/HeaderNav";
import Container from "./Components/Container";
import Home from "./Views/Home";
import Team from "./Views/Team";
import Review from "./Views/Review";
import Health from "./Views/Health";
import ActionItems from "./Views/ActionItems";
import ActionItem from "./Views/ActionItem";
import Discussion from "./Views/Discussion";
import { useMemberList } from "./helpers";

export default function Routes() {
  const members = useMemberList([
    { id: 1, name: "Matt" },
    { id: 2, name: "Maria" },
    { id: 3, name: "Rebecca" }
  ]);

  return (
    <Router>
      <Container>
        <HeaderNav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/team" render={() => <Team members={members} />} />
          <Route path="/review" component={Review} />
          <Route path="/health" component={Health} />
          <Route
            path="/action-item"
            render={() => <ActionItem members={members} />}
          />
          <Route path={"/action-items"} component={ActionItems} />
          <Route path="/discussion" component={Discussion} />
          <Route component={Home} />
        </Switch>
      </Container>
    </Router>
  );
}
