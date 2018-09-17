import React, { Component } from "react";
import CategoryMenu from './CategoryMenu';
import "./App.css";
import TabMenu from "./TabMenu.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageCategory: "Animal",
      textCategory: "haiku",
      soundCategory: "animal",
      tabIndex: 0,
      text: false,
      image: {
        Animal: {},
        Food: {},
        Transport: {}
      }
    };
  }

  componentDidMount = () => {};

  // Henter inn bildet og legger det i en lagret state
  fetchImage = (category, index) => {
    fetch(`SVG/${category}/${index}.svg`)
      .then(response => response.text())
      .then(text => {
        let image = this.state.image;
        image[category][index] = text;
        this.setState({
          image
        });
      });
  };

  // Sjekker om bildet er blitt lastet inn før, hvis ikke fetcher den bildet
  getImage = (category, index) => {
    if (!this.state.image[category][index]) {
      this.fetchImage(category, index);
      return false;
    }
    return this.state.image[category][index];
  };

  // Henter inn tekstfila og legger den i en lagret state
  fetchText = () => {
    fetch(`text.json`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          text: json
        });
      });
  };

  // Sjekker om tekstfila har blitt hentet før, hvis ikke fetcher den fila
  getText = (category, index) => {
    if (!this.state.text) {
      this.fetchText();
      return {};
    }
    return this.state.text[category][index];
  };

  // Brukes når en tab endres for å skifte index til hvilket medie som skal vises
  handleClick = tabIndex => {
    if (this.state.tabIndex !== tabIndex) {
      this.setState({
        tabIndex
      });
    }
  };

  handleCategoryChange = (category, value) => {
    this.setState({
      [category]: value
    })
  }

  render() {
    // På load henter den korrekt bilde etter valgt kategori og tab
    const image = this.getImage(this.state.imageCategory, this.state.tabIndex);
    // På load henter den korrekt tekst etter valgt kategori og tab
    const text = this.getText(this.state.textCategory, this.state.tabIndex);

    return (
      <div className="App">
        <TabMenu handleClick={this.handleClick} activeTab={this.state.tabIndex}/>

        <div className="C2">
          <div className="Svgs">
            <span dangerouslySetInnerHTML={{ __html: image }} />
          </div>

          <div className="Txts">
            <p>{text.body}</p>
            <p>{text.author}</p>
          </div>

          <div className="Sounds">
            {/* På load henter den ut korrekt lydfil etter valgt kategori og tab */}
            <audio ref="audio_tag" src={`sound/${this.state.soundCategory}/${this.state.tabIndex}.mp3`} controls/>
          </div>

          <CategoryMenu onChangeFunc={this.handleCategoryChange}/>
        </div>
      </div>
    );
  }
}

export default App;
