import React from "react";

const TabMenu = ({handleClick, activeTab}) => {

    return (
      <div className="tabContainer">
        {/* Bruker className activeTab for å skille hvilken tab som er aktiv eller ikke i CSS */}
        {/* onClick brukes når en tab endres for å skifte index til hvilket medie som skal vises */}
        <button className={activeTab === 0 ? "active" : "inactive"} onClick={() => handleClick(0)} >
          Gallery 1
        </button>

        <button className={activeTab === 1 ? "active" : "inactive"} onClick={() => handleClick(1)}>
          Gallery 2
        </button>

        <button className={activeTab === 2 ? "active" : "inactive"} onClick={() => handleClick(2)}>
          Gallery 3
        </button>

        <button className={activeTab === 3 ? "active" : "inactive"} onClick={() => handleClick(3)} >
          Gallery 4
        </button>
      </div>
    )
}

export default TabMenu;
