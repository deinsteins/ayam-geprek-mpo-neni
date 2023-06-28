import React from "react";

const Wrapper = ({ children, Background }) => {
  return (
    <div className="flex flex-col px-4 py-8 md:flex-row" style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover" }}>
      {children}
    </div>
  );
};

export default Wrapper;
