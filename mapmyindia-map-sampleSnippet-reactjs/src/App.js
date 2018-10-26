import React, { Component } from 'react';
import './App.css';
import  {mmi}  from 'mapmyindia-map-cordova-ionic-beta';
class App extends Component {
  constructor(props) {
    super(props);
    this.maps=new mmi();

  }
  componentDidMount(){
    this.maps.loadMaps('map',{key:'<Licence Key>',zoom:{control:true,position:[]},search:{control:true,width:'calc(100vw - 92px)'},location:{control: true,initial:true,zoom:16,bounds:true,position:[]}})
  }
render() {
    return (
      <div id="map" style={{width: "100%", height:'800px' }}/>
    );
  }
}

export default App;
