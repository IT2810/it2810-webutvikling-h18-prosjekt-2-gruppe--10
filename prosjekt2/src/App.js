import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textCategory: "haiku",
      tabIndex: 0,
      text: false
    }
  }

    componentDidMount = () => {
    }

    fetchImage = (folder, filename) => {
      fetch(`SVG/${folder}/${filename}`)
    }

    // ATM henter denne hele fila, men kun en gang.
    // Skal høre med studass om fila burde deles opp elns
    fetchText = () => {
      fetch(`text.json`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          text: json
        })
      })
    }

    getText = (category, index) => {
      if (!this.state.text) {
        this.fetchText()
        return {}
      }
      return this.state.text[category][index]
    }

    handleClick = tabIndex => {
      if (this.state.tabIndex !== tabIndex) {
        this.setState({
          tabIndex
        })
      }
    }

    render() {
      // På load henter den korrekt tekst etter valgt kategori og tab
      const text = this.getText(this.state.textCategory, this.state.tabIndex);
        return (
            <div className="App">
                <div className="C1">
                    <header className="App-header">
                        <h1 className="App-title"> Utstillingstittel </h1>
                    </header>
                    <button className="Tabs" onClick={() => this.handleClick(0)}>
                        <p> Tab 1 </p>
                    </button>
                    <button className="Tabs" onClick={() => this.handleClick(1)}>
                        <p> Tab 2</p>
                    </button>
                    <button className="Tabs" onClick={() => this.handleClick(2)}>
                        <p> Tab 3 </p>
                    </button>
                    <button className="Tabs" onClick={() => this.handleClick(3)}>
                        <p> Tab 4 </p>
                    </button>
                </div>

                <div className="C2">
                    <div className="Svgs">
                        return fetchImage(Animal, Elephant_6711.svg);
                    </div>

                    <div className="Txts">
                      <p>{text.body}</p>
                      <p>{text.author}</p>
                    </div>

                    <div className="Sounds">
                        Lyd kommer her
                    </div>

                    <div>
                      <p> Animal </p> <input type="checkbox" name="animal" value="Animal"/>
                      <p> Food </p> <input type="checkbox" name="animal" value="Food"/>
                      <p> Transport </p> <input type="checkbox" name="animal" value="Transport"/>
                      
                      {/* 
                      Bare for testing av bytte av kategori egentlig.
                      */}
                      <form onChange={e => this.setState({textCategory: e.target.value})}>
                        <input type="radio" name="gender" value="haiku" defaultChecked /> Haiku<br/>
                        <input type="radio" name="gender" value="poems"/> Poems<br/>
                        <input type="radio" name="gender" value="quotes"/> Quotes<br/>  
                      </form>

                      <p> Lyd </p> <input type="checkbox" name="animal" value="Lyd"/>
                      <p> Lyd </p> <input type="checkbox" name="animal" value="Lyd"/>
                      <p> Lyd </p> <input type="checkbox" name="animal" value="Lyd"/>
                    </div>
                </div>


            </div>
        );
    }
}



export default App;
