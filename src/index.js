import React from 'react';
import { render } from 'react-dom';
import axios from 'axios'

class App extends React.Component{
  constructor(){
    super();
    this.breeds = ['','labrador', 'doberman', 'setter']
    this.state={
      breed:" ",
      imgURL:" "
    }
  }
  componentDidMount(){
    this.getRandomImage();
  }
  handleSelectImage = e =>{
    this.setState({
      breed:e.target.value
    })
  }
  getRandomImage = (e) =>{
    const url = "https://dog.ceo/api/breed/"
    axios
      .get(url + this.state.breed + "/images/random")
      .then(response =>{
        this.setState({
          imgURL:response.data.message
        })
      })
  }
  render(){
    const {imgURL} = this.state
    const styles = {
      img:{
        height:"15em"
      }
    }
    return(
      <div>
        <center><h1>Random Dog Images</h1></center>
        Select Your Favorite Dog:{" "}
        <select onChange={this.handleSelectImage}>
          {this.breeds.map(el => <option value={el}>{el}</option>)}
        </select><br/><br/>
        <img style={styles.img} alt="" src={imgURL} /><br/><br/>
        <button onClick={this.getRandomImage}>Click Me!</button>
      </div>
    )
  }
}
render(<App />, document.getElementById('root'));
