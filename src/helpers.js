import { useState, useEffect } from "react";

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
