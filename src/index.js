"use strict";
exports.__esModule = true;
var css = `
.cur_loc {
    background: #33b5e5;
    border: 2px solid #fff;
    box-shadow: 0px 1px 1px #333;
    border-radius: 10px/50%;
    width: 20px;
    height: 20px;
}
.on div{
	background:#33b5e5 !important;
	
}
.mload {
	animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
	0% {
	  color: #001F3F;
	}
	50% {
	  background-color: #222;
	}
  }
#geo_location div{
	background: #4e4a4a;
    margin: 11px;
    width: 8px;
    position: relative;
    height: 8px;
    border-radius: 100%;
    display: inline-block;
	box-shadow: 0 0 0 1px #CCC, 0 0 0 2px #888, 0 0 0 3px #444, 0 0 0 4px #c5b2b2;
}
.leaflet-pane,
.leaflet-tile,
.leaflet-marker-icon,
.leaflet-marker-shadow,
.leaflet-tile-container,
.leaflet-map-pane svg,
.leaflet-map-pane canvas,
.leaflet-zoom-box,
.leaflet-image-layer,
.leaflet-layer {
	position: absolute;
	left: 0;
	top: 0;
	}
.leaflet-container {
	overflow: hidden;
	}
.leaflet-tile,
.leaflet-marker-icon,
.leaflet-marker-shadow {
	-webkit-user-select: none;
	   -moz-user-select: none;
	        user-select: none;
	  -webkit-user-drag: none;
	}
	
.leaflet-safari .leaflet-tile {
	image-rendering: -webkit-optimize-contrast;
	}

.leaflet-safari .leaflet-tile-container {
	width: 1600px;
	height: 1600px;
	-webkit-transform-origin: 0 0;
	}
.leaflet-marker-icon,
.leaflet-marker-shadow {
	display: block;
	}
/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */
/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */
.leaflet-container .leaflet-overlay-pane svg,
.leaflet-container .leaflet-marker-pane img,
.leaflet-container .leaflet-tile-pane img,
.leaflet-container img.leaflet-image-layer {
	max-width: none !important;
	}

.leaflet-container.leaflet-touch-zoom {
	-ms-touch-action: pan-x pan-y;
	touch-action: pan-x pan-y;
	}
.leaflet-container.leaflet-touch-drag {
	-ms-touch-action: pinch-zoom;
	}
.leaflet-container.leaflet-touch-drag.leaflet-touch-drag {
	-ms-touch-action: none;
	touch-action: none;
}
.leaflet-tile {
	filter: inherit;
	visibility: hidden;
	}
.leaflet-tile-loaded {
	visibility: inherit;
	}
.leaflet-zoom-box {
	width: 0;
	height: 0;
	-moz-box-sizing: border-box;
	     box-sizing: border-box;
	z-index: 800;
	}
/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */
.leaflet-overlay-pane svg {
	-moz-user-select: none;
	}

.leaflet-pane         { z-index: 400; }

.leaflet-tile-pane    { z-index: 200; }
.leaflet-overlay-pane { z-index: 400; }
.leaflet-shadow-pane  { z-index: 500; }
.leaflet-marker-pane  { z-index: 600; }
.leaflet-tooltip-pane   { z-index: 650; }
.leaflet-popup-pane   { z-index: 700; }

.leaflet-map-pane canvas { z-index: 100; }
.leaflet-map-pane svg    { z-index: 200; }

.leaflet-vml-shape {
	width: 1px;
	height: 1px;
	}
.lvml {
	behavior: url(#default#VML);
	display: inline-block;
	position: absolute;
	}


/* control positioning */

.leaflet-control {
	position: relative;
	z-index: 800;
	pointer-events: visiblePainted; /* IE 9-10 doesn't have auto */
	pointer-events: auto;
	}
.leaflet-top,
.leaflet-bottom {
	position: absolute;
	z-index: 1000;
	pointer-events: none;
	}
.leaflet-top {
	top: 0;
	}
.leaflet-right {
	right: 0;
	}
.leaflet-bottom {
	bottom: 0;
	}
.leaflet-left {
	left: 0;
	}
.leaflet-control {
	float: left;
	clear: both;
	}
.leaflet-right .leaflet-control {
	float: right;
	}
.leaflet-top .leaflet-control {
	margin-top: 2px;
	}
.leaflet-bottom .leaflet-control {
	margin-bottom: 10px;
	}
.leaflet-left .leaflet-control {
	margin-left: 10px;
	}
.leaflet-right .leaflet-control {
	margin-right: 1px;
	}


/* zoom and fade animations */

.leaflet-fade-anim .leaflet-tile {
	will-change: opacity;
	}
.leaflet-fade-anim .leaflet-popup {
	opacity: 0;
	-webkit-transition: opacity 0.2s linear;
	   -moz-transition: opacity 0.2s linear;
	     -o-transition: opacity 0.2s linear;
	        transition: opacity 0.2s linear;
	}
.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {
	opacity: 1;
	}
.leaflet-zoom-animated {
	-webkit-transform-origin: 0 0;
	    -ms-transform-origin: 0 0;
	        transform-origin: 0 0;
	}
.leaflet-zoom-anim .leaflet-zoom-animated {
	will-change: transform;
	}
.leaflet-zoom-anim .leaflet-zoom-animated {
	-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);
	   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);
	     -o-transition:      -o-transform 0.25s cubic-bezier(0,0,0.25,1);
	        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);
	}
.leaflet-zoom-anim .leaflet-tile,
.leaflet-pan-anim .leaflet-tile {
	-webkit-transition: none;
	   -moz-transition: none;
	     -o-transition: none;
	        transition: none;
	}

.leaflet-zoom-anim .leaflet-zoom-hide {
	visibility: hidden;
	}


/* cursors */

.leaflet-interactive {
	cursor: pointer;
	}
.leaflet-grab {
	cursor: -webkit-grab;
	cursor:    -moz-grab;
	}
.leaflet-crosshair,
.leaflet-crosshair .leaflet-interactive {
	cursor: crosshair;
	}
.leaflet-popup-pane,
.leaflet-control {
	cursor: auto;
	}
.leaflet-dragging .leaflet-grab,
.leaflet-dragging .leaflet-grab .leaflet-interactive,
.leaflet-dragging .leaflet-marker-draggable {
	cursor: move;
	cursor: -webkit-grabbing;
	cursor:    -moz-grabbing;
	}

/* marker & overlays interactivity */
.leaflet-marker-icon,
.leaflet-marker-shadow,
.leaflet-image-layer,
.leaflet-pane > svg path,
.leaflet-tile-container {
	pointer-events: none;
	}

.leaflet-marker-icon.leaflet-interactive,
.leaflet-image-layer.leaflet-interactive,
.leaflet-pane > svg path.leaflet-interactive {
	pointer-events: visiblePainted; /* IE 9-10 doesn't have auto */
	pointer-events: auto;
	}

/* visual tweaks */

.leaflet-container {
	background: #e9e9e9;;
	outline: 0;
	}
.leaflet-container a {
	color: #0078A8;
	}
.leaflet-container a.leaflet-active {
	outline: 2px solid orange;
	}
.leaflet-zoom-box {
	border: 2px dotted #38f;
	background: rgba(255,255,255,0.5);
	}


/* general typography */
.leaflet-container {
	font: 12px/1.5 "Helvetica Neue", Arial, Helvetica, sans-serif;
	}


/* general toolbar styles */

.leaflet-bar {
	box-shadow: 0 1px 5px rgba(0,0,0,0.65);
	border-radius: 4px;
	}
.leaflet-bar a,
.leaflet-bar a:hover {
	background-color: #fff;
	border-bottom: 1px solid #ccc;
	width: 26px;
	height: 26px;
	line-height: 26px;
	display: block;
	text-align: center;
	text-decoration: none;
	color: black;
	}
.leaflet-bar a,
.leaflet-control-layers-toggle {
	background-position: 50% 50%;
	background-repeat: no-repeat;
	display: block;
	}
.leaflet-bar a:hover {
	background-color: #f4f4f4;
	}
.leaflet-bar a:first-child {
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	}
.leaflet-bar a:last-child {
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	border-bottom: none;
	}
.leaflet-bar a.leaflet-disabled {
	cursor: default;
	background-color: #f4f4f4;
	color: #bbb;
	}

.leaflet-touch .leaflet-bar a {
	width: 30px;
	height: 30px;
	line-height: 30px;
	}


/* zoom control */

.leaflet-control-zoom-in,
.leaflet-control-zoom-out {
	font: bold 18px 'Lucida Console', Monaco, monospace;
	text-indent: 1px;
	}
.leaflet-control-zoom-out {
	font-size: 20px;
	}

.leaflet-touch .leaflet-control-zoom-in {
	font-size: 22px;
	}
.leaflet-touch .leaflet-control-zoom-out {
	font-size: 24px;
	}


/* layers control */

.leaflet-control-layers {
	box-shadow: 0 1px 5px rgba(0,0,0,0.4);
	background: #fff;
	border-radius: 5px;
	}
.leaflet-control-layers-toggle {
	background-image: url(https://maps.mapmyindia.com/images/layers.png) ;
	width: 36px;
    	height: 36px;
	}
.leaflet-retina .leaflet-control-layers-toggle {
	background-image: url(https://maps.mapmyindia.com/images/layers.png);
	background-size: 26px 26px;
	}
.leaflet-touch .leaflet-control-layers-toggle {
	width: 44px;
	height: 44px;
	}
.leaflet-control-layers .leaflet-control-layers-list,
.leaflet-control-layers-expanded .leaflet-control-layers-toggle {
	display: none;
	}
.leaflet-control-layers-expanded .leaflet-control-layers-list {
	display: block;
	position: relative;
	}
.leaflet-control-layers-expanded {
	padding: 6px 10px 6px 6px;
	color: #333;
	background: #fff;
	}
.leaflet-control-layers-scrollbar {
	overflow-y: scroll;
	padding-right: 5px;
	}
.leaflet-control-layers-selector {
	margin-top: 2px;
	position: relative;
	top: 1px;
	}
.leaflet-control-layers label {
	display: block;
	}
.leaflet-control-layers-separator {
	height: 0;
	border-top: 1px solid #ddd;
	margin: 5px -10px 5px -6px;
	}


/* attribution and scale controls */

.leaflet-container .leaflet-control-attribution {
	/*background: #fff;
	background: rgba(255, 255, 255, 0.7);*/
	margin: 0;
	}
.leaflet-control-attribution,
.leaflet-control-scale-line {
	padding: 0 5px;
	color: #333;
	}
.leaflet-control-attribution a {
	text-decoration: none;
	}
.leaflet-control-attribution a:hover {
	text-decoration: underline;
	}
.leaflet-container .leaflet-control-attribution,
.leaflet-container .leaflet-control-scale {
	font-size: 11px;
	}
.leaflet-left .leaflet-control-scale {
	margin-left: 5px;
	}
.leaflet-bottom .leaflet-control-scale {
	margin-bottom: 5px;
	}
.leaflet-control-scale-line {
	border: 1px solid #efba7f;
	border-top: none;
	line-height: 1.1;
	padding: 2px 5px 1px;
	font-size: 11px;
	white-space: nowrap;
	overflow: hidden;
	-moz-box-sizing: border-box;
	     box-sizing: border-box;
	width:auto !important;
	background: #fff;
	background: rgba(255, 255, 255, 0.5);
	}
.leaflet-control-scale-line:not(:first-child) {
	border-top: 2px solid #777;
	border-bottom: none;
	margin-top: -2px;
	display:none;
	}
.leaflet-control-scale-line:not(:first-child):not(:last-child) {
	border-bottom: 2px solid #ddd;
	}

.leaflet-touch .leaflet-control-attribution,
.leaflet-touch .leaflet-control-layers,
.leaflet-touch .leaflet-bar {
	box-shadow: none;
	}
.leaflet-touch .leaflet-control-layers,
.leaflet-touch .leaflet-bar {
	border: 2px solid rgba(0,0,0,0.2);
	background-clip: padding-box;
	}


/* popup */

.leaflet-popup {
	position: absolute;
	text-align: center;
	margin-bottom: 20px;
	}
.leaflet-popup-content-wrapper {
	padding: 1px;
	text-align: left;
	border-radius: 12px;
	}
.leaflet-popup-content {
	margin: 13px 19px;
	line-height: 1.4;
	}
.leaflet-popup-content p {
	margin: 18px 0;
	}
.leaflet-popup-tip-container {
	width: 40px;
	height: 20px;
	position: absolute;
	left: 50%;
	margin-left: -20px;
	overflow: hidden;
	pointer-events: none;
	}
.leaflet-popup-tip {
	width: 17px;
	height: 17px;
	padding: 1px;

	margin: -10px auto 0;

	-webkit-transform: rotate(45deg);
	   -moz-transform: rotate(45deg);
	    -ms-transform: rotate(45deg);
	     -o-transform: rotate(45deg);
	        transform: rotate(45deg);
	}
.leaflet-popup-content-wrapper,
.leaflet-popup-tip {
	background: white;
	color: #333;
	box-shadow: 0 3px 14px rgba(0,0,0,0.4);
	}
.leaflet-container a.leaflet-popup-close-button {
	position: absolute;
	top: 0;
	right: 0;
	padding: 4px 4px 0 0;
	border: none;
	text-align: center;
	width: 18px;
	height: 14px;
	font: 16px/14px Tahoma, Verdana, sans-serif;
	color: #c3c3c3;
	text-decoration: none;
	font-weight: bold;
	background: transparent;
	}
.leaflet-container a.leaflet-popup-close-button:hover {
	color: #999;
	}
.leaflet-popup-scrolled {
	overflow: auto;
	border-bottom: 1px solid #ddd;
	border-top: 1px solid #ddd;
	}

.leaflet-oldie .leaflet-popup-content-wrapper {
	zoom: 1;
	}
.leaflet-oldie .leaflet-popup-tip {
	width: 24px;
	margin: 0 auto;

	-ms-filter: "progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";
	filter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);
	}
.leaflet-oldie .leaflet-popup-tip-container {
	margin-top: -1px;
	}

.leaflet-oldie .leaflet-control-zoom,
.leaflet-oldie .leaflet-control-layers,
.leaflet-oldie .leaflet-popup-content-wrapper,
.leaflet-oldie .leaflet-popup-tip {
	border: 1px solid #999;
	}


/* div icon */

.leaflet-div-icon {
	/*background: #fff;
	border: 1px solid #666;*/
	}


/* Tooltip */
/* Base styles for the element that has a tooltip */
.leaflet-tooltip {
	position: absolute;
	padding: 6px;
	background-color: #fff;
	border: 1px solid #fff;
	border-radius: 3px;
	color: #222;
	white-space: nowrap;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	pointer-events: none;
	box-shadow: 0 1px 3px rgba(0,0,0,0.4);
	}
.leaflet-tooltip.leaflet-clickable {
	cursor: pointer;
	pointer-events: auto;
	}
.leaflet-tooltip-top:before,
.leaflet-tooltip-bottom:before,
.leaflet-tooltip-left:before,
.leaflet-tooltip-right:before {
	position: absolute;
	pointer-events: none;
	border: 6px solid transparent;
	background: transparent;
	content: "";
	}

/* Directions */

.leaflet-tooltip-bottom {
	margin-top: 6px;
}
.leaflet-tooltip-top {
	margin-top: -6px;
}
.leaflet-tooltip-bottom:before,
.leaflet-tooltip-top:before {
	left: 50%;
	margin-left: -6px;
	}
.leaflet-tooltip-top:before {
	bottom: 0;
	margin-bottom: -12px;
	border-top-color: #fff;
	}
.leaflet-tooltip-bottom:before {
	top: 0;
	margin-top: -12px;
	margin-left: -6px;
	border-bottom-color: #fff;
	}
.leaflet-tooltip-left {
	margin-left: -6px;
}
.leaflet-tooltip-right {
	margin-left: 6px;
}
.leaflet-tooltip-left:before,
.leaflet-tooltip-right:before {
	top: 50%;
	margin-top: -6px;
	}
.leaflet-tooltip-left:before {
	right: 0;
	margin-right: -12px;
	border-left-color: #fff;
	}
.leaflet-tooltip-right:before {
	left: 0;
	margin-left: -12px;
	border-right-color: #fff;
	}
	body .leaflet-right .leaflet-control {
		float: none;
		width: 100%;margin:0px;
	}
  
        .srch_dv,.cur_dv{    background: #fff;position:relative;
			background-clip: padding-box;
			border-radius: 5px;
			margin: 5px;
			transition: all 0.6s;
		    box-shadow: 0 0 0 1px #dbdedc, 0 0 0 2px #f5f3f3, 0 0 0 1px #f3ecec, 0 0 0 4px #fff;
		}
        .cur_dv{padding:3px 3px 0px 3px;}
        .cur{ z-index:0;top: -55px !important; left: -55px !important;}
        .ms_icon{    padding: 7px 3px 0px 3px;
			cursor: pointer;
			width: 35px;
			height: 38px;
			text-align: center;
		}
        .search_dv{ z-index:0;top: 0 !important; left: 0 !important;}
		/*.m_aus{height: 32px;padding-left:4px !important;border:none !important;margin-top:2px !important;display: inline-block;outline: none !important;}*/
		.m_aus{    height: 38px;    background: transparent;
			padding-left: 10px !important;
			border: none !important;
			display: inline-block;
			outline: none !important;
			width: calc(100vw - 67px);}
        .m_aus::-ms-clear { display: none;}
        .m_clss {display: inline-block;height: 16px;width:23px;border: none; background-color: transparent; cursor: pointer;}
        .m_results{position: absolute; width: 100%; background: #fff; left: 0; top: 38px; border-radius:0px 0px 5px 5px;border-top: 0;font-size:12px;}
        .m_results .m_resu{ border: 0px solid #ddd;border-radius:0 0 5px 5px;   border-top: 0;   margin: 0;        }
        .m_results .m_resu li { padding: 4px 5px 2px 2px;}
        .m_resu{;margin:0 0 0 -7px;padding:0;list-style: none}
        .m_resu li{border-top:1px solid #eee;padding:4px 4px 2px 4px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;color:#666}
        .m_resu li:hover{text-decoration: none;color:#00adff;cursor:pointer}
        .m_img{float: left;height:20px;width:22px;background: url(https://maps.mapmyindia.com/images/search_loc.png);}
        .m_a_img{float: left;height:16px;width:17px;background: url(https://maps.mapmyindia.com/images/addp_icon.png) 0 0;    margin: 2px;}
        
        .m_dvs{ width: 200px;white-space:nowrap}

		.mmarker {
			width: 30px;
			height: 30px;
			border-radius: 50% 50% 50% 0;
			background: #00cae9;
			position: absolute;
			transform: rotate(-45deg);
			left: 50%;
			top: 50%;
			margin: -20px 0 0 -20px;
		  }
		  .mmarker:after {
			content: "";
			width: 14px;
			height: 14px;
			margin: 8px 0 0 8px;
			background: #e6e6e6;
			position: absolute;
			border-radius: 50%;
		  }
		  
.map-control{
  position:absolute;
  box-sizing:border-box;
  z-index:999;
  margin-top: -100px;
  display:block;
}

.map-control .expand-map-control {
    margin: 0;
    padding: 0;
    display: block;
    list-style:none;

}
.map-control .expand-map-control > li{
  position:relative;
  padding:0;
  margin-top: 5px;
}
.map-control .expand-map-control > li > a{
  background: #fff;
	font-size: 20px;
	margin-right:2px;
    width: 30px;
    height: 30px;
    color: #111 ;
    text-align: center;
    display: block;
    line-height: 31px;
	border-radius: 50%;
	font-size:22px
	box-shadow: 0 2px 6px 0 rgba(0,0,0,.2);
}

.map-control .expand-map-control > li:last-child{
  border-bottom:none;
}
.map-control a.collapse-map-control{
  background:#50798d;
  font-size:18px;
  width:30px;
  height:30px;
  color:#fff;
  text-align:center;
  display:block;
  top: 92px;
    position: relative;
  z-index:1;
  line-height: 31px;
}

.map-control a.collapse-map-control.active{
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
.map-control a.collapse-map-control.active .ti-shift-right-alt:before{
      content: "\e6da";
}

.expand-map-control > li .ft-layer-link{
    position: absolute;
    right: 30px;
    top: -146px;
  display:none;
list-style:none;
}
.expand-map-control > li .ft-layer-link > li{
  float: right; 
  border-bottom: 1px solid #fff;
padding:0;
}
.expand-map-control > li .ft-layer-link > li:last-child{
  border-bottom: 0;
}
.expand-map-control > li .ft-layer-link > li > a{
    font-size: 14px !important;
    width: 190px !important;
    color: #fff;
    text-align: left !important;
    display: block;
    line-height: 31px;
    height: 75px !important;
    line-height: 75px !important;
        padding: 5px 5px 5px 2px;
  background: #d26d00 !important;
}
.expand-map-control > li .ft-layer-link > li > a:hover{
  background: #50798d !important;
}
.expand-map-control > li > .ft-layer-link > li > a .layer-item-img{
  width:75px;
  height:75px;
  float:left;
  margin-right:10px;
    padding: 0 5px;
} 


.map-control .expand-map-control > li.layer-item-wrap:hover > .ft-layer-link{
	display:block;
}

.ti{
	width:18px;
	height:18px;
	display: inline-block;
	background: url(https://maps.mapmyindia.com/images/sprite_api.png) no-repeat;
        margin-top:5px;
}
.ti.ti-zoom-in{
	background-position: 0 0;
}
.ti.ti-zoom-out{
	background-position: -18px 0;
}
.ti.ti-target{
	background-position: -72px 0;
}
.ti.ti-layers-alt{
	background-position: -116px 0;
}

@media screen and (max-width: 1024px) {
.expand-map-control > li > .ft-layer-link {
    top: -96px;
    right: 29px;
    width: 300px;
    height: 100%;
  z-index: 1;
}

.expand-map-control > li > .ft-layer-link > li {
    margin-right:1px;
}
.expand-map-control > li > .ft-layer-link > li > a {
    font-size: 12px !important;
    width: 82px !important;
    color: #fff;
    text-align: center !important;
    display: block;
    line-height: 31px;
    height: 123px !important;
    line-height: 20px !important;
    padding-left: 0;
    background: rgba(0, 0, 0, 0.95);
    padding: 3px;
}
.expand-map-control > li > .ft-layer-link > li > a .layer-item-img{
  width: 75px;
    height: 75px;
    margin-top: 0;
    padding: 0px;
    display: inline-block;
}
.login .custom-form-group:last-child {
    padding: 5px 0 15px;
}
}
/*cluster marker*/
.marker-cluster-small {
	background-color: rgba(181, 226, 140, 0.6);color:#0B78BB;text-decoration: bold;font-size:16px !important;
	}
.marker-cluster-small div {
	background-color: rgb(145, 177, 102);
	}

.marker-cluster-medium {
	background-color: rgba(181, 226, 140, 0.6);
	}
.marker-cluster-medium div {
	background-color: rgb(145, 177, 102);color:rgba(115, 0, 84, 0.91);text-decoration: bold;font-size:16px !important;
	}

.marker-cluster-large {
	background-color: rgba(253, 156, 115, 0.6);
	}
.marker-cluster-large div {
	background-color: rgba(241, 128, 23, 0.6);
	}

	/* IE 6-8 fallback colors */
.leaflet-oldie .marker-cluster-small {
	background-color: rgb(181, 226, 140);
	}
.leaflet-oldie .marker-cluster-small div {
	background-color: rgb(110, 204, 57);
	}

.leaflet-oldie .marker-cluster-medium {
	background-color: rgb(241, 211, 87);
	}
.leaflet-oldie .marker-cluster-medium div {
	background-color: rgb(240, 194, 12);
	}

.leaflet-oldie .marker-cluster-large {
	background-color: rgb(253, 156, 115);
	}
.leaflet-oldie .marker-cluster-large div {
	background-color: rgb(241, 128, 23);
}

.marker-cluster {
	background-clip: padding-box;
	border-radius: 20px;
	}
.marker-cluster div {
	width: 30px;
	height: 30px;
	margin-left: 5px;
	margin-top: 5px;

	text-align: center;
	border-radius: 15px;
	font: 12px "Helvetica Neue", Arial, Helvetica, sans-serif;
	}
.marker-cluster span {
	line-height: 30px;
	}
        .leaflet-cluster-anim .leaflet-marker-icon, .leaflet-cluster-anim .leaflet-marker-shadow {
	-webkit-transition: -webkit-transform 0.3s ease-out, opacity 0.3s ease-in;
	-moz-transition: -moz-transform 0.3s ease-out, opacity 0.3s ease-in;
	-o-transition: -o-transform 0.3s ease-out, opacity 0.3s ease-in;
	transition: transform 0.3s ease-out, opacity 0.3s ease-in;
	}
.grp div{background:cyan !important;}
`; 
require("./config-js");
var sdk=0,map_sdk,xyzzz,cr,g_watch=0,auto_pval,map_tile='https://mt{s}.mapmyindia.com/advancedmaps/v1/',subd=[0,1,2,3,4,5],auto_req=0,m_marker=0,mmi_tl,hyd_tl,hyd_base,traffic_tl=0,s_icn='https://maps.mapmyindia.com/images/srarch1.png';
var global=this;
var mmi = (function () {
    function mmi() {
        var styleNode = document.createElement('style');
        styleNode.type = "text/css";
        if(!!(window.attachEvent && !window.opera)) {
            styleNode.styleSheet.cssText = css;
        } 
        else 
        {
            var styleText = document.createTextNode(css);
            styleNode.appendChild(styleText);
        }
        document.getElementsByTagName('head')[0].appendChild(styleNode);
        
    }
   
    mmi.prototype.loadMaps = function (id,params) {
        if (params.key) { 
			var center=[28.61, 77.23],mhy=false,zm=15,mizm=4,mxzm=18;try{if(params.center) center=params.center;}catch(e){}try{zm=params.zoom.zoom;if(zm>18 || !zm) zm=16;}catch(e){}
            map_sdk = L.map(id, { zoomControl:false }).setView(center, zm);
	        eval("window.map_sdk = map_sdk,window.auto = mmi.prototype.auto,window.geo=mmi.prototype.geo,window.auto_pval=auto_pval,window.auto_req=auto_req,window.s_icn=s_icn");
            var att='<div id="att_txt"><img src="data:image/png;base64,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" style="height: 30px;border-radius: 30%;padding: 5px;border: 1px solid #f1c9a2;"><div>';
            global.mmi_tl=L.tileLayer((map_tile=map_tile.indexOf(params.key)==-1?map_tile+params.key:map_tile) +"/"+(L.Browser.retina?'retina_map':'still_map')+'/{z}/{x}/{y}.png', {subdomains:subd,maxZoom: 18,  minZoom: 4});map_sdk.addLayer(global.mmi_tl);
            var element = L.DomUtil.create("div","m_ctr_"+id);
            var innerHTML='<div class="map-control"><ul class="expand-map-control">';
            element.innerHTML=innerHTML;
            if(id.id !==undefined)  id=id.id;
			document.getElementById(id).appendChild(element);
			var search=false,scale=false,zmm=false,locc=false;
			try{search=params.search.control;}catch(e){}try{scale=params.scale.control;}catch(e){}try{zmm=params.zoom.control;}catch(e){}try{locc=params.location.control;}catch(e){}
            if(search!==false){ 
                var search_dv = L.control({position: 'topright'});
                var cls="search_dv";if(params.location===false) var cls="cur"; ;
                search_dv.onAdd = function (map) {var div = L.DomUtil.create('div', cls);
                div.innerHTML = "<div class='srch_dv'><table ><tr><td class='m_dvs' id='m_dv"+id+"' style='display:none'><input type='text' class='m_aus' id='m_auto"+id+"' placeholder='Search places or eLoc..' onkeyUp=\"auto('map_sdk','"+id+"','"+id+"','','','','','"+params.key+"')\" onclick=\"document.getElementById('m_result"+id+"').style.display='inline';\" style=\"width:"+(params.search.width?params.search.width:'calc(100vh-67px)')+"\" autofocus><input type='button' class='m_clss' id='m_cls"+id+"' value='X' onclick=\"var ma=document.getElementById('m_auto"+id+"');if(!ma.value){document.getElementById('m_dv"+id+"').style.display='none';return false}ma.value='';ma.focus();console.log(m_marker);if(m_marker) map_sdk.removeLayer(m_marker);document.getElementById('m_result"+id+"').innerHTML='';document.getElementById('bt_srch"+id+"').src='"+s_icn+"';\"><div class='m_results' id='m_result"+id+"'></div></td><td title='Search to re center map'  class='ms_icon' id='srch_clk' valign='middle'   onclick=\"auto('map_sdk','"+id+"','"+id+"','','','','')\"><img height=20 id='bt_srch"+id+"' src='https://maps.mapmyindia.com/images/srarch1.png'></td></tr></table></div>";
                return div;};
                search_dv.addTo(map_sdk);
               // map.on('click', function(){document.getElementById("m_result"+dis).style.display='none';});
            }
            if (scale!==false) L.control.scale({position:(params.scale.position=='topright' || params.scale.position=='topleft' || params.scale.position=='bottomright'?params.scale.position:'bottomleft')}).addTo(map_sdk);
            var element = L.DomUtil.create("div","m_ctr"+id);
            var innerHTML='';
            if(zmm!==false) 
            {
                var style="bottom:50%;right:0"; try{if(params.zoom.position[0] && params.zoom.position[1]!==null) var style="top:"+params.zoom.position[0]+";right:"+params.zoom.position[1];}catch(e){}
                innerHTML+='<div class="map-control" style="'+style+'" id="m_ctrl"><ul class="expand-map-control"><li><a alt="Zoom In" title="Zoom In" class="map-zoom-in" onclick="map_sdk.zoomIn()">+</a></li><li><a alt="Zoom Out" title="Zoom Out" class="map-zoom-out" onclick="map_sdk.zoomOut()">-</a></li></ul></div>';
            }
            if(locc!==false)
            {
                var style="bottom: calc(50% - 3em);right:0"; try{if(params.location.position[0] && params.location.position[1]!==null) var style="top:"+params.location.position[0]+";right:"+params.location.position[1];}catch(e){}
                innerHTML+='<div class="map-control" style="'+style+'"><ul class="expand-map-control"><li onclick="geo(map_sdk,1);"><a id="geo_location" alt="Current Location" title="Current Location" class=""><div></div></a></li></ul></div>';
            } 

           // if(mhy==true) innerHTML+='<li class="layer-item-wrap" alt="Map Layers" title="Map Layers" ><a><i class="ti ti-layers-alt"></i></a><ul class="ft-layer-link"><li id="m_t'+id+'" onclick="MapmyIndia.tls(map,'+id+',\'\')"><a><span class="layer-item-img"><img src="https://maps.mapmyindia.com/images/mapview.jpg" alt=""></span>MapmyIndia</a></li><li id="h_t'+id+'" onclick=" MapmyIndia.tls(map_o['+id+'],'+id+',\'h\')"><a><span class="layer-item-img"><img src="https://maps.mapmyindia.com/images/hybridview.jpg" alt=""></span>Hybrid</a></li>';
           
            innerHTML+='</li></ul></div>';element.innerHTML=innerHTML;
            if(id.id !==undefined)  id=id.id;
            document.getElementById(id).appendChild(element);
            document.getElementById(id).ontouchend = function(e){ 
               document.getElementById('geo_location').className='';
               navigator.geolocation.clearWatch(g_watch);
            };
            //map_sdk.on('touchend', function(e) {document.getElementById('geo_location').classList.remove('on');});
            mmi.prototype.layer = map_sdk;
            if(params.location.initial!==false) geo(map_sdk,0,params.location.center,params.location.zoom,params.location.bounds,params.location.html);
            setTimeout(function () {map_sdk.invalidateSize();}, 100);
            return map_sdk;
        }
        else {
            return alert('key required');
        }
    };
    mmi.prototype.geo = function (mpp,load,center,zoom,bound,html)
    {
        eval("window.xyzzz = xyzzz,window.cr = cr,window.g_watch=g_watch");
		var clsid=document.getElementById('geo_location');
		if(clsid && mpp){
			if(clsid.className.indexOf('on')!=-1 && xyzzz) 
			{
				if(cr) mpp.removeLayer(cr);if(xyzzz) mpp.removeLayer(xyzzz);
				clsid.classList.remove('on');clsid.classList.remove('mload');
				navigator.geolocation.clearWatch(g_watch);return false;
			}
			if(load) clsid.classList.add('mload');
			else clsid.classList.remove('mload');clsid.classList.add('on');
				g_watch=navigator.geolocation.watchPosition(function(position){ console.log(clsid.className);
				if(mpp.getPanes().length==0 || (clsid.className!='on' && clsid.className!='mload on' && clsid.className!='activated mload on'))
				{
					navigator.geolocation.clearWatch(g_watch);return false;
				}
				if(!html) html="<div><div class='cur_loc'></div></div>";
				var search = L.divIcon({iconAnchor: [10, 10],className: 'bfont',html: html});
				if(cr) mpp.removeLayer(cr);if(xyzzz) mpp.removeLayer(xyzzz);
				xyzzz = L.circle([position.coords.latitude, position.coords.longitude], position.coords.accuracy/2, {weight: 1, fillOpacity: 0.1,color:'#ccc',fillColor:'#58ACFA'});
				mpp.addLayer(xyzzz);
				var map_zm=zoom;if(!zoom && load) map_zm=16;else if(!zoom) map_zm=map_sdk.getZoom();
				cr=L.marker([position.coords.latitude, position.coords.longitude], {icon: search});mpp.addLayer(cr);
				if(bound || load) mpp.setView(new L.LatLng(position.coords.latitude,position.coords.longitude), map_zm); 
				clsid.classList.add('on');clsid.classList.remove('mload');         
				},function(error) {clsid.classList.remove('on');if(load){ alert('MapmyIndia does not have permission to view your location.');navigator.geolocation.clearWatch(g_watch);clsid.classList.remove('mload');}
			},{ timeout: 10000,enableHighAccuracy: true });
		}
    };
    mmi.prototype.removeLayer=function(layerid,map_id)
    {
        if(!map_id) map_id=map_sdk;if(layerid) map_id.removeLayer(layerid);else console.log(layerid+" not found");
	};
	mmi.prototype.fetch=function (url,success_callback, error_callback) {
		var script,callback_name="response";
		function after() {
			setTimeout(function () {
				document.getElementsByTagName("head")[0].removeChild(script);
			}, 1);
		}
		script = document.createElement('script');
		window[callback_name] = function (response) {
			after();success_callback(response);
		};
		script.type = 'text/javascript';
		script.src = url+"&callback="+callback_name
		script.async = true;
		script.addEventListener('error', function () {
			after();error_callback();
		});
		document.getElementsByTagName("head")[0].appendChild(script);
	};
    mmi.prototype.traffic=function(status,map_id){        
        if(!map_id) map_id=map_sdk;
        if(!map_id._leaflet_id){console.log('View@incorrectmapid');return false;}
        if(global.traffic_tl) map_id.removeLayer(global.traffic_tl);
        if(status)
        {
          global.traffic_tl=L.tileLayer(map_tile + '/traffic_tile/{z}/{x}/{y}.png', {subdomains:subd,maxZoom: 18,  minZoom: 4});map_id.addLayer(global.traffic_tl);
          return global.traffic_tl;
        }
    };
    mmi.prototype.hybrid=function(status,map_id)
    {
        if(!map_id) map_id=map_sdk;
        if(!map_id._leaflet_id){console.log('View@incorrectmapid');return false;}
        if(status)
        {
          if(global.hyd_base) map_id.removeLayer(global.hyd_base);if(global.hyd_tl) map_id.removeLayer(global.hyd_tl);
          global.mmi_tl.setUrl(map_tile + '/bhuvan_imagery/{z}/{x}/{y}.png', {subdomains:subd,maxZoom: 18,  minZoom: 4});map_id.addLayer(global.mmi_tl);
          global.hyd_base=L.tileLayer(map_tile +"/"+(L.Browser.retina?'retina_hybrid':'base_hybrid')+'/{z}/{x}/{y}.png', {subdomains:subd,maxZoom: 18,  minZoom: 4});map_id.addLayer(global.hyd_base);
          global.hyd_tl=L.tileLayer(map_tile + '/hybrid_label/{z}/{x}/{y}.png', {subdomains:subd,maxZoom: 18,  minZoom: 4});map_id.addLayer(global.hyd_tl);
        }
        else
        {
            if(global.hyd_base) map_id.removeLayer(global.hyd_base);if(global.hyd_tl) map_id.addLayer(global.hyd_tl);
            global.mmi_tl.setUrl(map_tile + '/still_map/{z}/{x}/{y}.png', {subdomains:subd,maxZoom: 18,  minZoom: 4});map_id.addLayer(global.mmi_tl);
        }
    };
    mmi.prototype.auto=function(mps,cnt,id,poi,lat,lng,eloc,map_key)
    {
        if(lat && lng)
        {
            var xhttp; xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var ltn=this.responseText.split(',');
                /*MapmyIndia.poi(mps,cnt,poi,ltn[0],ltn[1],eloc);*/
                document.getElementById('m_auto'+cnt).value=poi.split(',')[0];document.getElementById('m_result'+cnt).style.display='none';
                var html="<table width='200px' style='font-size:13px'><tr><td><b>"+poi.replace(',','</b><br>').replace('</b><br>','</b></td><tr><td colspan=2>')+"<br>eLoc:</b> "+eloc+"</td></tr></table>";
                if(global.m_marker) map_sdk.removeLayer(global.m_marker);global.m_marker = new L.Marker(new L.LatLng(ltn[1],ltn[0]),{icon:L.divIcon({iconAnchor: [0, 0],html: "<div class='mmarker'></div>"})}).bindPopup(html,{minWidth:"120px",maxWidth:"120px"}); global.m_marker.addTo(map_sdk);setTimeout(function(){map_sdk.setView(new L.LatLng(ltn[1],ltn[0]),16); global.m_marker.openPopup();}, 100);
                document.getElementById('geo_location').classList.remove('on');
                }
            };
        xhttp.open("GET", "https://apis.mapmyindia.com/map_v3/?lat="+lat+"&lng="+lng, true);xhttp.send();return false;
        }
      
        var did=document.getElementById("m_dv"+cnt);var vid=document.getElementById("m_auto"+cnt);if(did.style.display == "none") {did.style.display= "inline";vid.select();L.DomEvent.disableClickPropagation(did);}
        var dsp="";
        var val=vid.value;

        if(val.length>1 && val!=auto_pval)
        {
            if(auto_req) {auto_req.abort();document.getElementById("bt_srch"+cnt).src=s_icn}
            auto_req = new XMLHttpRequest();
            if ('withCredentials' in auto_req) {
                    document.getElementById("bt_srch"+cnt).src="https://maps.mapmyindia.com/images/load.gif";
                    auto_req.open('GET', 'https://apis.mapmyindia.com/advancedmaps/v1/'+map_key+'/map_search?q='+val, true);
                    auto_req.onreadystatechange = function() {
                    if (auto_req.status >= 200 && auto_req.status < 400 && auto_req.readyState === 4) {
                            var res=auto_req.responseText;
                                if(res)
                                {
                                var json=JSON.parse(res);var json_arr=json.results;if(!json_arr) return false;
                                var div="<ul class='m_ress"+cnt+" m_resu'>";
                                auto_pval=val;document.getElementById('m_result'+cnt).style.display='inline';
                                for(var i=0;i<json_arr.length;i++){
                                var cl='m_a_img';var x=json_arr[i].x;var y=json_arr[i].y;var eloc=json_arr[i].elc;var method="MapmyIndia.poi";if(!json_arr[i].user){var cl='m_img';method="auto";}
                                div+="<li onclick=\""+method+"('"+mps+"','"+cnt+"','"+id+"','"+json_arr[i].addr+"','"+x+"','"+y+"','"+eloc+"');"+dsp+"return false;\"><div class='"+cl+"'></div><b>"+json_arr[i].addr.replace(',','</b></br>')+"</li>";                   
                                }    
                                document.getElementById("m_result"+cnt).innerHTML=div;document.getElementById("bt_srch"+cnt).src=s_icn;
                                }
                            }
                    };
                auto_req.onerror = function() { document.getElementById("m_result"+cnt).innerHTML="<ul class='m_ress"+cnt+" m_resu'><li>Connection Issue</li></ul>";document.getElementById("bt_srch"+cnt).src=s_icn;; }
                auto_req.send();
            }
        }
        return false;
    };
    mmi.prototype.marker = function (m_arr,options) {
        var mrk=[],cluster=0,OpT=[],mrkgrp,bound=0;try{cluster=options.cluster;bound=options.fitbounds;}catch(e){}
		if(options.iconUrl) options['icon']=L.icon(options);
		if(cluster) mrkgrp=L.markerClusterGroup(cluster);
		if(m_arr.features){ /*geojson */
			var gson=new L.GeoJSON(m_arr,{pointToLayer: function (feature, latlng) {return L.marker(latlng,options).bindPopup(feature.properties.popup);} });
			if(!cluster) mrkgrp=gson;
			else mrkgrp.addLayer(gson);
		}
		else{
			if(!Array.isArray(m_arr[0])){var tem=m_arr;m_arr=[];m_arr[0]=tem;}
			for (var i = 0; i < m_arr.length; i++) {
				var pop_html='',openpop='',dicon='',tooltip='',evt='',evt_method='',opacity='';
				try{tooltip=m_arr[i][2].tooltip;pop_html=m_arr[i][2].popup;openpop=m_arr[i][2].openpopup;opacity=m_arr[i][2].opacity;dicon=m_arr[i][2].divicon;evt=m_arr[i][2].event[0];evt_method=m_arr[i][2].event[1];}catch(e){}
				OpT=options;
				if(dicon)
				{
					options['html']=dicon;
					OpT['icon']=L.divIcon(options)
				}
				mrk[i]= new L.marker([m_arr[i][0],m_arr[i][1]],OpT);
				if(pop_html) mrk[i].bindPopup(pop_html);if(tooltip) mrk[i].bindTooltip(pop_html);
				if(evt && evt_method) mrk[i].on(evt,eval(evt_method));
				if(cluster) mrkgrp.addLayer(mrk[i]);if(dicon) {delete OpT['icon'];delete options['html'];}
			}
			if(!cluster || m_arr.length==1) mrkgrp=L.featureGroup(mrk);
		}
        map_sdk.addLayer(mrkgrp); 
		if(bound) {map_sdk.fitBounds(mrkgrp.getBounds());document.getElementById('geo_location').classList.remove('on');}
        return mrkgrp;
	};
	mmi.prototype.polyline = function (pts,options) {
		var bound=false,tooltip,pop_html,openpop,decorator=false;
		try{bound=options.fitbounds;tooltip=options.tooltip;pop_html=options.popup;openpop=options.openpopup;decorator=options.decorator;}catch(e){}
		if(pts)
		{
			if(pts.features){ /*geojson */
			
				var clr="";try{}catch(e){}console.log(options);
				var polyline=new L.GeoJSON(pts,options);
			}
			else var polyline = L.polyline(pts, options);
			map_sdk.addLayer(polyline); 
			if(pop_html) polyline.bindPopup(pop_html);if(openpop===true) polyline.openPopup();if(tooltip) polyline.bindTooltip(pop_html);
			if(bound===true) {map_sdk.fitBounds(polyline.getBounds());document.getElementById('geo_location').classList.remove('on');}
			if(decorator){ var icon=decorator.icon;var speed=10;try{speed=decorator.speed}catch(e){}
			var decorator = L.polylineDecorator(polyline).addTo(map_sdk),offset=0,w = 14, h = 33; 
            var interval = window.setInterval(function () { 
                decorator.setPatterns([{ offset: offset + '%', symbol: L.Symbol.marker({rotate: true, markerOptions: {icon: L.icon(icon)}})}]);
                if ((offset += 0.03) > 100) offset = 0;
			}, speed);
		}
		return polyline;
		}
		var addTo=function()
		{
			alert('ddd');
		}
	}
   mmi.prototype.L = L;
    return mmi;
}());
exports.mmi = mmi;
var mmiPlugin = (function () {
function mmiPlugin(key) {
if(key){
var req = new XMLHttpRequest();
req.open('GET', "https://apis.mapmyindia.com/advancedmaps/api/"+key+"/map_sdk_plugins", false);
req.onreadystatechange = function(){
if (req.readyState == 4) {
var s = document.createElement("script");
s.appendChild(document.createTextNode(req.responseText));
document.getElementsByTagName("head")[0].appendChild(s);
}
};
req.send(null);
}else{
alert('key required');
}
}
return mmiPlugin;
}());
exports.mmiPlugin = mmiPlugin;


