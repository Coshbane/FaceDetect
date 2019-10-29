import React, { Component } from 'react';
import './App.css';
import './Components/Navigation/Nav.css';
import "./Components/Logo/Logo.css";
import './Components/ImageLinkForm/ImageLinkForm.css';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';


const app = new Clarifai.App({
  apiKey: '965580ccf58f48eab3dcf424c169d069'
 });

const particlesOptions = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 900
        }
      }
    }
  }


class App extends Component {
  constructor (){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
    }
  }

calculateFaceLocation = (data) => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById('inputimage');
  const width = Number(image.width);
  const height = Number(image.height);
  return {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - (clarifaiFace.right_col * width),
    bottomRow: height - (clarifaiFace.bottom_row * height)
  }
}

displayFaceBox = (box) => {
  this.setState({box: box});
}

onInputChange = (event) => {
  this.setState({input: event.target.value});
}

onSubmit = () => {
  this.setState({imageUrl: this.state.input})
  app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
  .then(response => this.displayFaceBox (this.calculateFaceLocation(response)))
  .catch(err => console.log(err));
}

  render() {
    return (
      <div className="App">
      <Particles className='particles' params={particlesOptions} />


      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onSubmit={this.onSubmit} onInputChange={this.onInputChange} />
      <FaceRecognition imageUrl={this.state.imageUrl} />
    </div>
    )
  }
}

export default App;
