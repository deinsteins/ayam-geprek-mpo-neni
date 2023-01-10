import React from "react"

const Wrapper = ({ children, Background }) => {
    return (
       <div className="flex px-4 py-8" style={{ backgroundImage: "url(" + Background + ")", backgroundSize:"cover" }} >
            {children}
       </div>
    )
}

export default Wrapper;