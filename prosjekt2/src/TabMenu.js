import React from "react";

const TabMenu = ({handleClick, activeTab}) => {

    return (
      <div className="C1">
        <header className="App-header">
          <h1 className="App-title"> Utstillingstittel </h1>
        </header>

        <button className={activeTab === 0 ? "active" : "inactive"} onClick={() => handleClick(0)} >
          <p> Galleri 1 </p>
        </button>

        <button className={activeTab === 1 ? "active" : "inactive"} onClick={() => handleClick(1)}>
          <p> Galleri 2</p>
        </button>

        <button className={activeTab === 2 ? "active" : "inactive"} onClick={() => handleClick(2)}>
          <p> Galleri 3 </p>
        </button>

        <button className={activeTab === 3 ? "active" : "inactive"} onClick={() => handleClick(3)} >
          <p> Galleri 4 </p>
        </button>
      </div>
    )
}

export default TabMenu;
