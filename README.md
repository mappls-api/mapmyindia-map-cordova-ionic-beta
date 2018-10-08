
# MapmyIndia Map SDK for Cordova/Ionic - Beta 1

[![N|Solid](https://www.mapmyindia.com/api/img/mapmyindia-api.png)](https://www.mapmyindia.com/api/)

For full documentation contact MapmyIndia here: 
[MapmyIndia: apisupport@mapmyindia.co.in](mailto:apisupport@mapmyindia.co.in).
You can get your api key to be used in this document here: [https://www.mapmyindia.com/api/signup](https://www.mapmyindia.com/api/signup)

## Version History

| Version | Last Updated | Author |
| ---- | ---- | ---- |
| 0.0.8 | October 2018 | MapmyIndia API Team (BM) |

## Introduction
This is a NPM based packaged SDK which can be installed directly through NPM.

Create your own **Cordova Based native app** powered by MapmyIndia Maps and deploy them to various native **mobile** platforms.

Package name: mapmyindia-map-cordova-ionic-beta

### Technologies
Node.js, Javascript, Cordova, Ionic, leaflet

## Supported Platforms
- Android
- IOS
## Installation
```js
    npm i mapmyindia-map-cordova-ionic-beta 
```
```js
    import { mmi } from 'mapmyindia-map-cordova-ionic-beta';
```
> Add this plugin to your app's module and also include as a provider

## Features

### General Usage
```js
import { mmi } from 'mapmyindia-map-cordova-ionic-beta';

...

constructor(private maps: mmi) {} //Useful for Ionic/Cordova

or 

this.maps=new mmi(); //Useful for other platforms like React.JS
```

### Events

#### 1. MapLoad
 `loadmap` method needs two parameters to initialize a map in SDK
1) Map div #id
2) Map parameters
    - `Key<sup>*</sup>`: your api map key from [Mapmyindia](https://www.mapmyindia.com/api/dashboard) `(mandatory)`
    - `Zoomcontrol`
    - `Search control`
    - `Location control`
        - For better GPS location add cordova geolocation plugin: 
             `cordova plugin add cordova-plugin-geolocation`
```js
    var load_maps=this.maps.loadMaps('map',{key:'<map key>',zoom:{control:true},location:{control:true,initial:true,bounds:true}});
```

<div style="text-align:center">
<img src ="https://www.mapmyindia.com/api/img/map.png" />
</div>

### Controls

#### 1. Zoom

Zoom control can be controlled by using the following parameter: 

 - `control` //To show or hide the zoom control; takes boolean values
 e.g. `control:true`
 - `position` //To change the position of the control
e.g. `position:[top,left]`
Valid options are: 

| 1st variable | 2nd variable |
| ---- | ---- |
| bottom | right |
| top | left | 


 #### 2. Location
 A location control provides a button that uses the GPS geolocation API to locate the user on the map.

- `control` //To show or hide the zoom control; takes boolean values.
 e.g. `control:true`
 - `initial` default false; to call location on map load; takes boolean values.
e.g. `initial:true`
- `zoom` set any any initial zoom on location; takes integer zoom levels from 4 to 17.
- `bounds` set location bound with center to default level zoom 16.
- `html` icon (html) for showing location on map.
- `position` //To change the position of the control
e.g. `position:[top,left]`
Valid options are: 

| 1st variable | 2nd variable |
| ---- | ---- |
| bottom | right |
| top | left | 


##### Example of using location
location:{control:true, initial:true, zoom:12}

*Tip: For better GPS location use cordova geolocation plugin*
`cordova plugin add cordova-plugin-geolocation`

#### 3. Scale
A map scale represented as a unitless factor (e.g. 1:50000) means that a single map unit represents X real world units (e.g. a meter in the map = 50 km in reality).
To show scale on the maps, scale control can be used; which has the following parameters: 

- `scale`default false; to show scale; takes boolean values.
e.g. `initial:true`
- `position` //To change the position of the control
e.g. `position:[top,left]`
Valid options are: 

| 1st variable | 2nd variable |
| ---- | ---- |
| bottom | right |
| top | left |
#### 4. Map Layers

##### 1. Hybrid
Hybrid maps can be shown or hidden with the help of a method call. Hybrid maps are satellite maps overlayed with MapmyIndia Map labels and transportation network.

- Show hybrid map
```js
this.maps.hybrid (true);
```
- Hide hybrid maps
```js
this.maps.hybrid (false);
```

##### 2. Traffic
Traffic layer can be shown or hidden with the help of a method call. Traffic layer is the traffic flow overlay within MapmyIndia Maps that shows the flow of traffic on road segments.

- Show traffic layer
```js
this.maps.traffic (true);
```
- Hide traffic layer
```js
this.maps.traffic (false);
```

##### 3. Removing Map layers
Removing a layer can be made possible by default leaflet method or by MapmyIndia SDK method 
- By leaflet method:
```js
mapss.removeLayer(map_marker);
```
- By SDK method: 
```js
this.maps.removeLayer(map_marker);
```
or
```js
map_marker.remove();
```

### Overlays

#### 1. Markers

We support leaflet marker method for adding markers in app.

```js
this.maps.L.marker([28.5, 77.5]).addTo(map object);
```

##### Adding markers via Custom marker method

````javascript
var marker=this.maps.marker(mrker_arr,
    {
	    iconUrl:"assets/imgs/logo.png", iconSize:[36,51],popupAnchor:[0,-16],draggable:true,fitbounds:true,cluster:true
	 });
````
##### Parameters:

 1. Marker Object: (mandatory)
 it can be *single array* with lat, long;
 ```js
 var mrker_arr= [28.5454,77.545454];
 ```

Other Optional Parameters within array for single & group markers:

-  tooltip
- popup
- divicon
- events

example: 

````js
var mrker_arr= [28.5454,77.545454,{tooltip:"this is first popup",popup:"this is first popup",divicon:"<img src='https://maps.mapmyindia.com/images/3.png'>",event:["click",function(e){console.log(e)}]}];
````

*With multiple markers array*

```js
var mrker_arr= [
[28.5454,77.545454,{tooltip:"this is first popup",popup:"this is first popup",divicon:"<img src='https://maps.mapmyindia.com/images/3.png'>",event:["click",function(e){console.log(e)}]}]
[28.5454,77.145454],
[28.5450,77.145450],
[28.2454,77.145454],
[26.5454,77.145454]
];
```
*Marker By GeoJSON array*

```js
var mrker_arr = {
"type":"FeatureCollection",
"features":[
{
"type":"Feature",
"geometry":{
"type":"Point",
"coordinates":[
78.3613558,
28.8044875
]
},
"properties":{
"popup":"this is geojson point 1",
"icon":{
"icon_url":"assets/imgs/logo.png"
}
}
},
{
"type":"Feature",
"geometry":{
"type":"Point",
"coordinates":[
78.3613558,
27.8044875
]
},
"properties":{
"popup":"this is geojson point 2",
"icon":{
"icon_url":"assets/imgs/logo.png"
}
}
}
]
};
```

2. Marker Options

You can use all leaflet option for marker like: 
```js
{iconUrl:"assets/imgs/logo.png", iconSize:[36,51],popupAnchor: [0,-16],draggable:true,fitbounds:true,cluster:true}
```
Example:
```js
var marker=this.maps.marker(mrker_arr,{iconUrl:"assets/imgs/logo.png", iconSize:[36,51],popupAnchor:[0, -16],draggable:true,fitbounds:true,cluster:true});
```

**Icon**: Supported leaflet Icon method with all options

i.e.  
```js
icon:this.maps.L.icon({iconUrl: 'assets/imgs/logo.png',iconSize:[36, 51]})
```
Or
```js
iconUrl:"assets/imgs/logo.png"
```
```js
fitbounds:true/false** /*to fit map bounds  according to all markers*/
```
```js
cluster:true/false
```
Or use custom options for clustering
```js
cluster:{
className:"grp"/*to all css accordingly*/,
polygonOptions: {
fillColor: '#111',
color: '#000',
weight: 0.5,
opacity: 1,
fillOpacity: 0.5
}
}
```

You can Add Tooltip & Info Window separately: 

- Add tooltip: 
```js
marker.bindTooltip("my tooltip text").openTooltip();
```
- Add Popup: 
```js
marker.bindPopup("my tooltip text");
```

3. Marker Events: 

| Event | Description |
| ---- | ---- |
| `dragstart` | Fired when the user starts dragging the marker. |
| `movestart` | Fired when the marker starts moving (because of dragging). |
| `drag` | Fired repeatedly while the user drags the marker. |
| `dragend` | Fired when the drag event ends. |
| `moveend` | Fired when movement of the map under marker stops. |
| `click` | Fired when the user taps on the marker on map. |

Example: 
```js
marker.on('click',function(e){console.log(e)})
```

#### 2. Polylines

MapmyIndia Hybrid SDK offers a class for drawing polyline overlays on a map.
Leaflet Properties & Events are also supported in our Hybrid SDK as illustrated in the following code snippet. 

```js
var pts = [
[28.51, 78.68],
[27.77, 77.43],
[28.04, 78.2]
];

var polyline = this.maps.L.polyline(pts, {color: 'red'}).addTo(mapss);
mapss.fitBounds(polyline.getBounds());
```

##### Using Custom method for Polylines

This has some additional parameters to manage: 

 1. Points: it can be simple points array or geoJSON array.
 2. Options: All Leaflet options with additional parameters.
	 - fitbounds:true/false (can take either boolean value)
	- tooltip:text (replace 'text' with whatever tooltip you wish to use.
	- popup:text/html (Use a simple text or HTML as popup)
	- openpopup:true/false (control the behaviour of pop when HTML `onload` event is fired)
	- decorator

Example: 

```js
var pts = [[28.551042,77.268953],[28.551005,77.268649],[28.550986,77.268392],[28.550967,77.268231],[28.550967,77.268177],[28.550958,77.268016],
[28.55092,77.267587],[28.550722,77.267651],[28.55042,77.267823],[28.550128,77.267802],[28.549751,77.267995],[28.549652,77.268039]];

var polyline=this.maps.polyline(pts,{weight:7,color:"green",fitbounds:true,tooltip:"polyline tooltip",popup:"this is first popup",openpopup:false});
```

##### Events on Polylines

All Leaflet Events supported.

Example: 

```js
polyline.on('click',function(e){alert(e)})
```

##### GeoJSON Polyline
GeoJSON format for Polylines is also supported with MapmyIndia Hybrid Maps SDK.

Sample code snippet for GeoJSON polyline: 
```js
var latlngs={
"type": "FeatureCollection",
"features": [
{"type": "Feature","geometry": {"type": "LineString","coordinates": [[77.26823,28.550976],[77.268394,28.55099]]},"properties": {"tType": "medium","len": 16.376389,"time":8}},
{"type": "Feature","geometry": {"type": "LineString","coordinates": [[77.26817,28.550972],[77.26802,28.550959]]},"properties": {"tType": "slow", "len": 15.199708,"time": 12}},
{"type": "Feature","geometry": {"type": "LineString","coordinates": [[77.267586,28.550922],[77.26802,28.550959]]},"properties": {"tType": "medium", "len": 42.652176,"time": 20}},
{"type": "Feature","geometry": {"type": "LineString","coordinates": [[77.267654,28.550726],[77.26781,28.550491],[77.26782,28.550425],[77.2678,28.550133]]},"properties": {"tType": "fast", "len": 70.012444,"time": 13}},
{"type": "Feature","geometry": {"type": "LineString","coordinates": [[77.26865,28.55101],[77.268394,28.55099]]},"properties": {"tType": "slow", "len": 24.613169,"time": 18}}]
};
```

##### Style for geoJSON polyline

Sample code snippet for styling a GeoJSON polyline 
```js
var style=function(feature) 
{
switch (feature.properties.tType) {
case 'slow': return {color: "red"};
case 'medium':  return {color: "yellow"};
default:return {color: "green"};}
};

var polyline=this.maps.polyline(latlngs,{style:style,weight:5,fitbounds:true});
```

##### Removing a polyline

```js
polyline.remove();
```

##### Animated / Decorated Polyline
Use below option to show decorated polyline: 
```js
decorator:{icon:{iconUrl:'assets/imgs/car.png',iconSize:[14, 33]}}
var polyline=this.maps.polyline(pts,{weight:7,color:"green",fitbounds:true,decorator:{icon:{iconUrl: 'assets/imgs/car.png',iconSize: [14, 33]}}});
```

#### 3. Circles

MapmyIndia Hybrid SDK offers a class for drawing circle overlays on a map.

##### Addition of Circles

Code Snippet: 
```js
this.maps.L.circle([27.11, 77.5], {radius: 200}).addTo(mapss);
```

Leaflet Properties & Events related to circles are also supported in our Hybrid SDK.

#### 4. Polygons

MapmyIndia Hybrid SDK offers a class for drawing polygon overlays on a map.

##### Addition of Polygons

Code Snippet: 
```js
var pl_pts = [[27, 79.05],[26.767, 78.03],[26.545, 78.05],[27.5454, 77.04]];

var polygon = this.maps.L.polygon(pl_pts, {color: 'red'}).addTo(mapss);

mapss.fitBounds(polygon.getBounds());
```

Leaflet Properties & Events for polygons thus added are also supported in our Hybrid SDK.

##### Adding tooltips to Polygons
```js
polygon.bindTooltip("This is first tooltip");
polygon.closeTooltip();
```

For any queries and support, please contact: 

![Email](https://www.google.com/a/cpanel/mapmyindia.co.in/images/logo.gif?service=google_gsuite) 
Email us at [apisupport@mapmyindia.co.in](mailto:apisupport@mapmyindia.co.in)

![](https://www.mapmyindia.com/api/img/icons/stack-overflow.png)
[Stack Overflow](https://stackoverflow.com/questions/tagged/mapmyindia-api)
Ask a question under the mapmyindia-api

![](https://www.mapmyindia.com/api/img/icons/support.png)
[Support](https://www.mapmyindia.com/api/index.php#f_cont)
Need support? contact us!

![](https://www.mapmyindia.com/api/img/icons/blog.png)
[Blog](http://www.mapmyindia.com/blog/)
Read about the latest updates & customer stories


> © Copyright 2018. CE Info Systems Pvt. Ltd. All Rights Reserved. | [Terms & Conditions](http://www.mapmyindia.com/api/terms-&-conditions)
>  Written with [StackEdit](https://stackedit.io/) by MapmyIndia.