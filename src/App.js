import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component{
  constructor() {
    super()

  }
  state = {
    Person:{
      fullName: 'Ismail Halouani',
      bio:'A web designer',
      imgSrc:'',
      profession:''
    },
    boolean: true,
    timer: 0,
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
    alert(this.state.timer)
  }
  tick() {
    this.setState(state => ({
      timer: state.timer + 1
    }));
  }

  render() {
    let styler = {color: 'black', fontFamily:'Montserrat', visibility: 'visible'}
    const btnStyle = {color: 'white', backgroundColor:'#0763e5', borderRadius:'2em', border:'transparent', padding:'.75em 1.25em', marginTop:'1.5rem', fontSize:'1em', cursor: 'pointer', fontFamily:'Montez'}

    return (
      <div className="App">
        <header className="App-header">
          {(this.state.boolean) ? (          
          <div className="profile" style={styler}>
                {this.state.Person.imgSrc}
                <h1 className="name">{this.state.Person.fullName}</h1>
                <p className="bio">{this.state.Person.bio}</p>
                <span className="pro">{this.state.Person.profession}</span>
          </div>) : ("")}
          <button className="btn" onClick={() => this.setState({boolean: !this.state.boolean})} style={btnStyle} >Show hide</button>
        </header>
      </div>
    )};
};
export default App;
