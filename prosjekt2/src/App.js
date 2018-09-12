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

    componentDidMount = () => {

    }

    fetchImage = (folder, filename) => {
        fetch(`SVG/${folder}/${filename}.svg`)
        .then(response => response.text())
        .then(text => {
          let image = this.state.image
          image[folder][filename] = text
          this.setState({
            image
          })
          //let parser = new DOMParser();
          //let doc = parser.parseFromString(text, "image/svg+xml");
        })
    }

    getImage = (category, index) => {
      if (!this.state.image[category][index]) {
        this.fetchImage(category, index)
        return false
      }

      return this.state.image[category][index]
    }

    handleClick = tabIndex => {
      if (this.state.tabIndex !== tabIndex) {
        this.setState({
          tabIndex
        })
      }
    }

    parseSvgText = (text) => {
      let parser = new DOMParser();
      let doc = parser.parseFromString(text, "image/svg+xml");
      return doc;
    }


    render() {
        const image = this.getImage(this.state.imageCategory, this.state.tabIndex)
        let svggg = "Bildet kommer her"
        if (image) {
          svggg = this.parseSvgText(image)
        }
        console.log(svggg)
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
                        {image}
                    </div>

                    <div className="Txts">
                        Tekst kommer her
                    </div>

                    <div className="Sounds">
                        Lyd kommer her
                    </div>

                    <div className="Categor">
                      <p> Animal </p> <input type="checkbox" name="animal" value="Animal"/>
                      <p> Food </p> <input type="checkbox" name="animal" value="Food"/>
                      <p> Transport </p> <input type="checkbox" name="animal" value="Transport"/>

                      <p> Tekst </p> <input type="checkbox" name="animal" value="Tekst"/>
                      <p> Tekst </p> <input type="checkbox" name="animal" value="Tekst"/>
                      <p> Tekst </p> <input type="checkbox" name="animal" value="Tekst"/>

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
