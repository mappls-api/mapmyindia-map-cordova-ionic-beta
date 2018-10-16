# Sample Code Snippet for REACT - JS integration

[![N|Solid](https://www.mapmyindia.com/api/img/mapmyindia-api.png)](https://www.mapmyindia.com/api/)

For full documentation contact MapmyIndia here: 
[MapmyIndia: apisupport@mapmyindia.co.in](mailto:apisupport@mapmyindia.co.in).
You can get your api key to be used in this document here: [https://www.mapmyindia.com/api/signup](https://www.mapmyindia.com/api/signup)

## Steps to integrate

 1. Install MapmyIndia Maps NPM package.
 2. Import Map Object from MapmyIndia NPM package.
 3. Create map object in contructor function.
 4. Add the following code snippet in your own "app.js" to load maps within a DOM.
```js
componentDidMount()
{
    this.maps.loadMaps('map',{key:'<Licence Key>',zoom:{control:true,position:[]},search:{control:true,width:'calc(100vw - 92px)'},location:{control: true,initial:true,zoom:16,bounds:true,position:[]}})
}
render() 
{
    return(<div id="map" style={{width: "100%", height:'800px' }}/>);
  }
```

**Important Note**: This is  sample code snippet meant for reference implementation only. This does not contain nor describe all dependencies for this code snippet to run. 

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