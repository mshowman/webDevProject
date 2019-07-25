import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ActionItem from "./Views/ActionItem";

export function useMemberList(members) {
  const [memberList, setMemberList] = useState(null);

  useEffect(() => {
    function updateMemberList(list) {
      setMemberList(list);
    }

    updateMemberList(members);
  });

  return memberList;
}

export function Modal(props) {
  return ReactDOM.createPortal(ActionItem, document.querySelector("#modal"));
}
