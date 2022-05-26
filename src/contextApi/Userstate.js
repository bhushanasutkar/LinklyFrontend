import React from "react";
import LinkContext from "./Linkcontext";
const Userstate = (props) => {
  return (
    <LinkContext.Provider value={{}}>{props.children}</LinkContext.Provider>
  );
};

export default Userstate;
