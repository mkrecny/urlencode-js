# Synopsis

### urlencode-js takes nested javascript objects and turns them into url-encoded querystrings

# Motivation

 - Node's querystring.stringify doesn't support objects nested deeper than 1 dimension

# Usage

```javascript
  var url = require('./path/to/urlencode-js/')
	var demo = url.UrlEncode();
	var obj = {
	  k1:{k11:11, k12:true},
	  k2:{k21:'v21', k22:'v22'},
	  k3:{k31:{k311:'v311'}, k32:'v32'}
	};
	
  var querystring = demo.encode(obj);

	//should output k1[k11]=11&k1[k12]=true&k2[k21]=v21&k2[k22]=v22&k3[k31][k311]=v311&k3[k32]=v32
	
	//Optionally you can pass is a custom assignment operator and separator:
	
	var _querystring = demo.encode(obj, ';', '>');
	
	//should output k1[k11]>11;k1[k12]>true;k2[k21]>v21;k2[k22]>v22;k3[k31][k311]>v311;k3[k32]>v32
```
# Licence

(The MIT License)

Copyright (c) 2010 mkrecny <http://www.twitter.com/mkrecny>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.