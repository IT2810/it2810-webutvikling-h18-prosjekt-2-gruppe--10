import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      imageCategory: "Animal",
      textCategory: "haiku",
      tabIndex: 0,
      text: false,
      image: {
          "Animal": {},
          "Food": {},
          "Transport": {},
        }
      }
    }

    componentDidMount = () => {}

    fetchImage = (category, index) => {
        fetch(`SVG/${category}/${index}.svg`)
        .then(response => response.text())
        .then(text => {
          let image = this.state.image
          image[category][index] = text
          this.setState({
            image
          })
        })
    }

    getImage = (category, index) => {
      if (!this.state.image[category][index]) {
        this.fetchImage(category, index)
        return false
      }
      return this.state.image[category][index]
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
        const image = this.getImage(this.state.imageCategory, this.state.tabIndex)
        
        // På load henter den korrekt tekst etter valgt kategori og tab
        const text = this.getText(this.state.textCategory, this.state.tabIndex);

        return (
            <div className="App">
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


              <div className="C2">
                  <div className="Svgs">
                      <span dangerouslySetInnerHTML={{__html: image}} />
                  </div>

                  <div className="Txts">
                    <p>{text.body}</p>
                    <p>{text.author}</p>
                  </div>

                  <div className="Sounds">
                      Lyd kommer her
                  </div>

                  <div className="Categories">
                    <p> Bilder </p>
                    <form onChange={e => this.setState({imageCategory: e.target.value})}>
                      <input type="radio" name="gender" value="Animal" defaultChecked /> Animal<br/>
                      <input type="radio" name="gender" value="Food"/> Food<br/>
                      <input type="radio" name="gender" value="Transport"/> Transport<br/>
                    </form>

                    <p> Tekst </p>
                    <form onChange={e => this.setState({textCategory: e.target.value})}>
                      <input type="radio" name="gender" value="haiku" defaultChecked /> Haiku<br/>
                      <input type="radio" name="gender" value="poems"/> Poems<br/>
                      <input type="radio" name="gender" value="quotes"/> Quotes<br/>
                    </form>

                    <p> Lyd </p>
                    <form onChange={e => this.setState({soundCategory: e.target.value})}>
                      <input type="radio" name="gender" value="animal" defaultChecked /> Animal<br/>
                      <input type="radio" name="gender" value="horn"/> Horn<br/>
                      <input type="radio" name="gender" value="laughter"/> Laughter<br/>
                    </form>
                  </div>
              </div>
            </div>
        );
    }
}


export default App;
