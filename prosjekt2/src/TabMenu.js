import React from "react";

const TabMenu = () => {

    return (
      <div className="C1">
        <header className="App-header">
          <h1 className="App-title"> Utstillingstittel </h1>
        </header>

        <button className="Tabs" onClick={() => this.handleClick(0)}>
          <p> Galleri 1 </p>
        </button>

        <button className="Tabs" onClick={() => this.handleClick(1)}>
          <p> Galleri 2</p>
        </button>

        <button className="Tabs" onClick={() => this.handleClick(2)}>
          <p> Galleri 3 </p>
        </button>

        <button className="Tabs" onClick={() => this.handleClick(3)}>
          <p> Galleri 4 </p>
        </button>
      </div>
    )
}

export default TabMenu;
