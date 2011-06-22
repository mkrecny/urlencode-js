var url = require('../lib/urlencode-js.js');
var assert = require('assert');

var objects = {
  twodthreed: {
    expected: 'k1[k11]=11&k1[k12]=true&k2[k21]=v21&k2[k22]=v22&k3[k31][k311]=v311&k3[k32]=v32',
    input:{
      k1:{k11:11, k12:true},
      k2:{k21:'v21', k22:'v22'},
      k3:{k31:{k311:'v311'}, k32:'v32'}
    }
  },

  simple:{
    expected:'k1=v1&k2=v2&k3=v3',
    input:{
      k1:'v1',
      k2:'v2',
      k3:'v3'
    }
  },

  mixed:{
    expected:'k1[k11]=v11&k1[k12]=v12&k2[k21]=v21&k2[k22]=v22&k3=v3',
    input:{
      k1:{k11:'v11', k12:'v12'},
      k2:{k21:'v21', k22:'v22'},
      k3:'v3'
    }
  },

  array:{
    expected:'k1[0]=a&k1[1]=b&k1[2]=c&k2=v2',
    input:{
      k1:['a', 'b', 'c'],
      k2:'v2'
    }
  },
};  

var test = url.UrlEncode();

Object.keys(objects).forEach(function(k){
  assert.ok(test.encode(objects[k].input)==objects[k].expected, console.log('PASS', k, objects[k].expected));
});





