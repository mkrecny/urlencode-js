;!function(root) {

  // Check server side `require` availability.
  var req = (typeof require !== 'undefined');

  var UrlEncode = root.UrlEncode = function UrlEncode() {

   if (!(this instanceof UrlEncode)) {
     return new UrlEncode();
   }

    var stringifyPrimitive = function(v) {
      switch (typeof v) {
        case 'string':
          return v;

        case 'boolean':
          return v ? 'true' : 'false';

        case 'number':
          return isFinite(v) ? v : '';

        default:
          return '';
      }
    };

    var rStringify = function(node, tail, eq, sep){
      if (typeof node==='object'){
        var kids = [];
        Object.keys(node).forEach(function(k){
          k = escape(stringifyPrimitive(k));
          var suffix = tail==='' || undefined ? k : '['+k+']';
          kids.push(rStringify(node[k], tail+suffix, eq, sep));  
        });
        return kids.join(sep);
      } else {
        return tail+eq+escape(stringifyPrimitive(node));  
      }
    };

    var escape = function(str) {
      return encodeURIComponent(str);
    };

    UrlEncode.prototype.encode = function(obj, sep, eq) {
      var self = this;
      sep = sep || '&';
      eq = eq || '=';
      obj = (obj === null) ? undefined : obj;
      return rStringify(obj, '', eq, sep);
    };
  };

}(typeof exports === 'undefined' ? window : exports);
