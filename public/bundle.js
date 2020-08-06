
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  var camelToDashMap = new Map();
  function camelToDash(str) {
    var result = camelToDashMap.get(str);

    if (result === undefined) {
      result = str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      camelToDashMap.set(str, result);
    }

    return result;
  }
  function pascalToDash(str) {
    return camelToDash(str.replace(/((?!([A-Z]{2}|^))[A-Z])/g, "-$1"));
  }
  function shadyCSS(fn, fallback) {
    var shady = window.ShadyCSS;
    /* istanbul ignore next */

    if (shady && !shady.nativeShadow) {
      return fn(shady);
    }

    return fallback;
  }
  function stringifyElement(target) {
    return "<".concat(String(target.tagName).toLowerCase(), ">");
  }
  var IS_IE = ("ActiveXObject" in window);
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJjYW1lbFRvRGFzaE1hcCIsIk1hcCIsImNhbWVsVG9EYXNoIiwic3RyIiwicmVzdWx0IiwiZ2V0IiwidW5kZWZpbmVkIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwic2V0IiwicGFzY2FsVG9EYXNoIiwiZGlzcGF0Y2giLCJob3N0IiwiZXZlbnRUeXBlIiwib3B0aW9ucyIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJzaGFkeUNTUyIsImZuIiwiZmFsbGJhY2siLCJzaGFkeSIsIndpbmRvdyIsIlNoYWR5Q1NTIiwibmF0aXZlU2hhZG93Iiwic3RyaW5naWZ5RWxlbWVudCIsInRhcmdldCIsIlN0cmluZyIsInRhZ05hbWUiLCJJU19JRSIsImRlZmVycmVkIiwiUHJvbWlzZSIsInJlc29sdmUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLGNBQWMsR0FBRyxJQUFJQyxHQUFKLEVBQXZCO0FBQ0EsT0FBTyxTQUFTQyxXQUFULENBQXFCQyxHQUFyQixFQUEwQjtBQUMvQixNQUFJQyxNQUFNLEdBQUdKLGNBQWMsQ0FBQ0ssR0FBZixDQUFtQkYsR0FBbkIsQ0FBYjs7QUFDQSxNQUFJQyxNQUFNLEtBQUtFLFNBQWYsRUFBMEI7QUFDeEJGLElBQUFBLE1BQU0sR0FBR0QsR0FBRyxDQUFDSSxPQUFKLENBQVksaUJBQVosRUFBK0IsT0FBL0IsRUFBd0NDLFdBQXhDLEVBQVQ7QUFDQVIsSUFBQUEsY0FBYyxDQUFDUyxHQUFmLENBQW1CTixHQUFuQixFQUF3QkMsTUFBeEI7QUFDRDs7QUFDRCxTQUFPQSxNQUFQO0FBQ0Q7QUFFRCxPQUFPLFNBQVNNLFlBQVQsQ0FBc0JQLEdBQXRCLEVBQTJCO0FBQ2hDLFNBQU9ELFdBQVcsQ0FBQ0MsR0FBRyxDQUFDSSxPQUFKLENBQVksMEJBQVosRUFBd0MsS0FBeEMsQ0FBRCxDQUFsQjtBQUNEO0FBRUQsT0FBTyxTQUFTSSxRQUFULENBQWtCQyxJQUFsQixFQUF3QkMsU0FBeEIsRUFBaUQ7QUFBQSxNQUFkQyxPQUFjLHVFQUFKLEVBQUk7QUFDdEQsU0FBT0YsSUFBSSxDQUFDRyxhQUFMLENBQ0wsSUFBSUMsV0FBSixDQUFnQkgsU0FBaEI7QUFBNkJJLElBQUFBLE9BQU8sRUFBRTtBQUF0QyxLQUFnREgsT0FBaEQsRUFESyxDQUFQO0FBR0Q7QUFFRCxPQUFPLFNBQVNJLFFBQVQsQ0FBa0JDLEVBQWxCLEVBQXNCQyxRQUF0QixFQUFnQztBQUNyQyxNQUFNQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBckI7QUFFQTs7QUFDQSxNQUFJRixLQUFLLElBQUksQ0FBQ0EsS0FBSyxDQUFDRyxZQUFwQixFQUFrQztBQUNoQyxXQUFPTCxFQUFFLENBQUNFLEtBQUQsQ0FBVDtBQUNEOztBQUVELFNBQU9ELFFBQVA7QUFDRDtBQUVELE9BQU8sU0FBU0ssZ0JBQVQsQ0FBMEJDLE1BQTFCLEVBQWtDO0FBQ3ZDLG9CQUFXQyxNQUFNLENBQUNELE1BQU0sQ0FBQ0UsT0FBUixDQUFOLENBQXVCcEIsV0FBdkIsRUFBWDtBQUNEO0FBRUQsT0FBTyxJQUFNcUIsS0FBSyxJQUFHLG1CQUFtQlAsTUFBdEIsQ0FBWDtBQUNQLE9BQU8sSUFBTVEsUUFBUSxHQUFHQyxPQUFPLENBQUNDLE9BQVIsRUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYW1lbFRvRGFzaE1hcCA9IG5ldyBNYXAoKTtcbmV4cG9ydCBmdW5jdGlvbiBjYW1lbFRvRGFzaChzdHIpIHtcbiAgbGV0IHJlc3VsdCA9IGNhbWVsVG9EYXNoTWFwLmdldChzdHIpO1xuICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXN1bHQgPSBzdHIucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMS0kMlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgIGNhbWVsVG9EYXNoTWFwLnNldChzdHIsIHJlc3VsdCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhc2NhbFRvRGFzaChzdHIpIHtcbiAgcmV0dXJuIGNhbWVsVG9EYXNoKHN0ci5yZXBsYWNlKC8oKD8hKFtBLVpdezJ9fF4pKVtBLVpdKS9nLCBcIi0kMVwiKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaChob3N0LCBldmVudFR5cGUsIG9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4gaG9zdC5kaXNwYXRjaEV2ZW50KFxuICAgIG5ldyBDdXN0b21FdmVudChldmVudFR5cGUsIHsgYnViYmxlczogZmFsc2UsIC4uLm9wdGlvbnMgfSksXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGFkeUNTUyhmbiwgZmFsbGJhY2spIHtcbiAgY29uc3Qgc2hhZHkgPSB3aW5kb3cuU2hhZHlDU1M7XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKHNoYWR5ICYmICFzaGFkeS5uYXRpdmVTaGFkb3cpIHtcbiAgICByZXR1cm4gZm4oc2hhZHkpO1xuICB9XG5cbiAgcmV0dXJuIGZhbGxiYWNrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5RWxlbWVudCh0YXJnZXQpIHtcbiAgcmV0dXJuIGA8JHtTdHJpbmcodGFyZ2V0LnRhZ05hbWUpLnRvTG93ZXJDYXNlKCl9PmA7XG59XG5cbmV4cG9ydCBjb25zdCBJU19JRSA9IFwiQWN0aXZlWE9iamVjdFwiIGluIHdpbmRvdztcbmV4cG9ydCBjb25zdCBkZWZlcnJlZCA9IFByb21pc2UucmVzb2x2ZSgpO1xuIl19

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  var defaultTransform = function defaultTransform(v) {
    return v;
  };

  var objectTransform = function objectTransform(value) {
    if (_typeof(value) !== "object") {
      throw TypeError("Assigned value must be an object: ".concat(_typeof(value)));
    }

    return value && Object.freeze(value);
  };

  function property(value, connect) {
    var type = _typeof(value);

    var transform = defaultTransform;

    switch (type) {
      case "string":
        transform = String;
        break;

      case "number":
        transform = Number;
        break;

      case "boolean":
        transform = Boolean;
        break;

      case "function":
        transform = value;
        value = transform();
        break;

      case "object":
        if (value) Object.freeze(value);
        transform = objectTransform;
        break;
    }

    return {
      get: function get(host) {
        var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value;
        return val;
      },
      set: function set(host, val, oldValue) {
        return transform(val, oldValue);
      },
      connect: type !== "object" && type !== "undefined" ? function (host, key, invalidate) {
        if (host[key] === value) {
          var attrName = camelToDash(key);

          if (host.hasAttribute(attrName)) {
            var attrValue = host.getAttribute(attrName);
            host[key] = attrValue === "" && transform === Boolean ? true : attrValue;
          }
        }

        return connect && connect(host, key, invalidate);
      } : connect
    };
  }
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9wZXJ0eS5qcyJdLCJuYW1lcyI6WyJjYW1lbFRvRGFzaCIsImRlZmF1bHRUcmFuc2Zvcm0iLCJ2Iiwib2JqZWN0VHJhbnNmb3JtIiwidmFsdWUiLCJUeXBlRXJyb3IiLCJPYmplY3QiLCJmcmVlemUiLCJwcm9wZXJ0eSIsImNvbm5lY3QiLCJ0eXBlIiwidHJhbnNmb3JtIiwiU3RyaW5nIiwiTnVtYmVyIiwiQm9vbGVhbiIsImdldCIsImhvc3QiLCJ2YWwiLCJzZXQiLCJvbGRWYWx1ZSIsImtleSIsImludmFsaWRhdGUiLCJhdHRyTmFtZSIsImhhc0F0dHJpYnV0ZSIsImF0dHJWYWx1ZSIsImdldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxXQUFULFFBQTRCLFlBQTVCOztBQUVBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsQ0FBQztBQUFBLFNBQUlBLENBQUo7QUFBQSxDQUExQjs7QUFFQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUssRUFBSTtBQUMvQixNQUFJLFFBQU9BLEtBQVAsTUFBaUIsUUFBckIsRUFBK0I7QUFDN0IsVUFBTUMsU0FBUyxxREFBNkNELEtBQTdDLEdBQWY7QUFDRDs7QUFDRCxTQUFPQSxLQUFLLElBQUlFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxLQUFkLENBQWhCO0FBQ0QsQ0FMRDs7QUFPQSxlQUFlLFNBQVNJLFFBQVQsQ0FBa0JKLEtBQWxCLEVBQXlCSyxPQUF6QixFQUFrQztBQUMvQyxNQUFNQyxJQUFJLFdBQVVOLEtBQVYsQ0FBVjs7QUFDQSxNQUFJTyxTQUFTLEdBQUdWLGdCQUFoQjs7QUFFQSxVQUFRUyxJQUFSO0FBQ0UsU0FBSyxRQUFMO0FBQ0VDLE1BQUFBLFNBQVMsR0FBR0MsTUFBWjtBQUNBOztBQUNGLFNBQUssUUFBTDtBQUNFRCxNQUFBQSxTQUFTLEdBQUdFLE1BQVo7QUFDQTs7QUFDRixTQUFLLFNBQUw7QUFDRUYsTUFBQUEsU0FBUyxHQUFHRyxPQUFaO0FBQ0E7O0FBQ0YsU0FBSyxVQUFMO0FBQ0VILE1BQUFBLFNBQVMsR0FBR1AsS0FBWjtBQUNBQSxNQUFBQSxLQUFLLEdBQUdPLFNBQVMsRUFBakI7QUFDQTs7QUFDRixTQUFLLFFBQUw7QUFDRSxVQUFJUCxLQUFKLEVBQVdFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxLQUFkO0FBQ1hPLE1BQUFBLFNBQVMsR0FBR1IsZUFBWjtBQUNBOztBQUNGO0FBQ0U7QUFuQko7O0FBc0JBLFNBQU87QUFDTFksSUFBQUEsR0FBRyxFQUFFLGFBQUNDLElBQUQ7QUFBQSxVQUFPQyxHQUFQLHVFQUFhYixLQUFiO0FBQUEsYUFBdUJhLEdBQXZCO0FBQUEsS0FEQTtBQUVMQyxJQUFBQSxHQUFHLEVBQUUsYUFBQ0YsSUFBRCxFQUFPQyxHQUFQLEVBQVlFLFFBQVo7QUFBQSxhQUF5QlIsU0FBUyxDQUFDTSxHQUFELEVBQU1FLFFBQU4sQ0FBbEM7QUFBQSxLQUZBO0FBR0xWLElBQUFBLE9BQU8sRUFDTEMsSUFBSSxLQUFLLFFBQVQsSUFBcUJBLElBQUksS0FBSyxXQUE5QixHQUNJLFVBQUNNLElBQUQsRUFBT0ksR0FBUCxFQUFZQyxVQUFaLEVBQTJCO0FBQ3pCLFVBQUlMLElBQUksQ0FBQ0ksR0FBRCxDQUFKLEtBQWNoQixLQUFsQixFQUF5QjtBQUN2QixZQUFNa0IsUUFBUSxHQUFHdEIsV0FBVyxDQUFDb0IsR0FBRCxDQUE1Qjs7QUFFQSxZQUFJSixJQUFJLENBQUNPLFlBQUwsQ0FBa0JELFFBQWxCLENBQUosRUFBaUM7QUFDL0IsY0FBTUUsU0FBUyxHQUFHUixJQUFJLENBQUNTLFlBQUwsQ0FBa0JILFFBQWxCLENBQWxCO0FBQ0FOLFVBQUFBLElBQUksQ0FBQ0ksR0FBRCxDQUFKLEdBQ0VJLFNBQVMsS0FBSyxFQUFkLElBQW9CYixTQUFTLEtBQUtHLE9BQWxDLEdBQTRDLElBQTVDLEdBQW1EVSxTQURyRDtBQUVEO0FBQ0Y7O0FBRUQsYUFBT2YsT0FBTyxJQUFJQSxPQUFPLENBQUNPLElBQUQsRUFBT0ksR0FBUCxFQUFZQyxVQUFaLENBQXpCO0FBQ0QsS0FiTCxHQWNJWjtBQWxCRCxHQUFQO0FBb0JEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FtZWxUb0Rhc2ggfSBmcm9tIFwiLi91dGlscy5qc1wiO1xuXG5jb25zdCBkZWZhdWx0VHJhbnNmb3JtID0gdiA9PiB2O1xuXG5jb25zdCBvYmplY3RUcmFuc2Zvcm0gPSB2YWx1ZSA9PiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoYEFzc2lnbmVkIHZhbHVlIG11c3QgYmUgYW4gb2JqZWN0OiAke3R5cGVvZiB2YWx1ZX1gKTtcbiAgfVxuICByZXR1cm4gdmFsdWUgJiYgT2JqZWN0LmZyZWV6ZSh2YWx1ZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9wZXJ0eSh2YWx1ZSwgY29ubmVjdCkge1xuICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBsZXQgdHJhbnNmb3JtID0gZGVmYXVsdFRyYW5zZm9ybTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICB0cmFuc2Zvcm0gPSBTdHJpbmc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICB0cmFuc2Zvcm0gPSBOdW1iZXI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgdHJhbnNmb3JtID0gQm9vbGVhbjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJmdW5jdGlvblwiOlxuICAgICAgdHJhbnNmb3JtID0gdmFsdWU7XG4gICAgICB2YWx1ZSA9IHRyYW5zZm9ybSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgaWYgKHZhbHVlKSBPYmplY3QuZnJlZXplKHZhbHVlKTtcbiAgICAgIHRyYW5zZm9ybSA9IG9iamVjdFRyYW5zZm9ybTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0OiAoaG9zdCwgdmFsID0gdmFsdWUpID0+IHZhbCxcbiAgICBzZXQ6IChob3N0LCB2YWwsIG9sZFZhbHVlKSA9PiB0cmFuc2Zvcm0odmFsLCBvbGRWYWx1ZSksXG4gICAgY29ubmVjdDpcbiAgICAgIHR5cGUgIT09IFwib2JqZWN0XCIgJiYgdHlwZSAhPT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICA/IChob3N0LCBrZXksIGludmFsaWRhdGUpID0+IHtcbiAgICAgICAgICAgIGlmIChob3N0W2tleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGF0dHJOYW1lID0gY2FtZWxUb0Rhc2goa2V5KTtcblxuICAgICAgICAgICAgICBpZiAoaG9zdC5oYXNBdHRyaWJ1dGUoYXR0ck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0clZhbHVlID0gaG9zdC5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICAgICAgICAgIGhvc3Rba2V5XSA9XG4gICAgICAgICAgICAgICAgICBhdHRyVmFsdWUgPT09IFwiXCIgJiYgdHJhbnNmb3JtID09PSBCb29sZWFuID8gdHJ1ZSA6IGF0dHJWYWx1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY29ubmVjdCAmJiBjb25uZWN0KGhvc3QsIGtleSwgaW52YWxpZGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICA6IGNvbm5lY3QsXG4gIH07XG59XG4iXX0=

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

  function render(fn) {
    var customOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (typeof fn !== "function") {
      throw TypeError("The first argument must be a function: ".concat(_typeof$1(fn)));
    }

    var options = _objectSpread({
      shadowRoot: true
    }, customOptions);

    var shadowRootInit = {
      mode: "open"
    };

    if (_typeof$1(options.shadowRoot) === "object") {
      Object.assign(shadowRootInit, options.shadowRoot);
    }

    return {
      get: function get(host) {
        var update = fn(host);
        var target = host;

        if (options.shadowRoot) {
          if (!host.shadowRoot) host.attachShadow(shadowRootInit);
          target = host.shadowRoot;
        }

        return function flush() {
          update(host, target);
          return target;
        };
      },
      observe: function observe(host, flush) {
        flush();
      }
    };
  }
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW5kZXIuanMiXSwibmFtZXMiOlsicmVuZGVyIiwiZm4iLCJjdXN0b21PcHRpb25zIiwiVHlwZUVycm9yIiwib3B0aW9ucyIsInNoYWRvd1Jvb3QiLCJzaGFkb3dSb290SW5pdCIsIm1vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXQiLCJob3N0IiwidXBkYXRlIiwidGFyZ2V0IiwiYXR0YWNoU2hhZG93IiwiZmx1c2giLCJvYnNlcnZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLGVBQWUsU0FBU0EsTUFBVCxDQUFnQkMsRUFBaEIsRUFBd0M7QUFBQSxNQUFwQkMsYUFBb0IsdUVBQUosRUFBSTs7QUFDckQsTUFBSSxPQUFPRCxFQUFQLEtBQWMsVUFBbEIsRUFBOEI7QUFDNUIsVUFBTUUsU0FBUywwREFBa0RGLEVBQWxELEdBQWY7QUFDRDs7QUFFRCxNQUFNRyxPQUFPO0FBQUtDLElBQUFBLFVBQVUsRUFBRTtBQUFqQixLQUEwQkgsYUFBMUIsQ0FBYjs7QUFDQSxNQUFNSSxjQUFjLEdBQUc7QUFBRUMsSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FBdkI7O0FBRUEsTUFBSSxRQUFPSCxPQUFPLENBQUNDLFVBQWYsTUFBOEIsUUFBbEMsRUFBNEM7QUFDMUNHLElBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxjQUFkLEVBQThCRixPQUFPLENBQUNDLFVBQXRDO0FBQ0Q7O0FBRUQsU0FBTztBQUNMSyxJQUFBQSxHQURLLGVBQ0RDLElBREMsRUFDSztBQUNSLFVBQU1DLE1BQU0sR0FBR1gsRUFBRSxDQUFDVSxJQUFELENBQWpCO0FBQ0EsVUFBSUUsTUFBTSxHQUFHRixJQUFiOztBQUVBLFVBQUlQLE9BQU8sQ0FBQ0MsVUFBWixFQUF3QjtBQUN0QixZQUFJLENBQUNNLElBQUksQ0FBQ04sVUFBVixFQUFzQk0sSUFBSSxDQUFDRyxZQUFMLENBQWtCUixjQUFsQjtBQUN0Qk8sUUFBQUEsTUFBTSxHQUFHRixJQUFJLENBQUNOLFVBQWQ7QUFDRDs7QUFFRCxhQUFPLFNBQVNVLEtBQVQsR0FBaUI7QUFDdEJILFFBQUFBLE1BQU0sQ0FBQ0QsSUFBRCxFQUFPRSxNQUFQLENBQU47QUFDQSxlQUFPQSxNQUFQO0FBQ0QsT0FIRDtBQUlELEtBZEk7QUFlTEcsSUFBQUEsT0FmSyxtQkFlR0wsSUFmSCxFQWVTSSxLQWZULEVBZWdCO0FBQ25CQSxNQUFBQSxLQUFLO0FBQ047QUFqQkksR0FBUDtBQW1CRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcihmbiwgY3VzdG9tT3B0aW9ucyA9IHt9KSB7XG4gIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHRocm93IFR5cGVFcnJvcihgVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvbjogJHt0eXBlb2YgZm59YCk7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0geyBzaGFkb3dSb290OiB0cnVlLCAuLi5jdXN0b21PcHRpb25zIH07XG4gIGNvbnN0IHNoYWRvd1Jvb3RJbml0ID0geyBtb2RlOiBcIm9wZW5cIiB9O1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5zaGFkb3dSb290ID09PSBcIm9iamVjdFwiKSB7XG4gICAgT2JqZWN0LmFzc2lnbihzaGFkb3dSb290SW5pdCwgb3B0aW9ucy5zaGFkb3dSb290KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0KGhvc3QpIHtcbiAgICAgIGNvbnN0IHVwZGF0ZSA9IGZuKGhvc3QpO1xuICAgICAgbGV0IHRhcmdldCA9IGhvc3Q7XG5cbiAgICAgIGlmIChvcHRpb25zLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgaWYgKCFob3N0LnNoYWRvd1Jvb3QpIGhvc3QuYXR0YWNoU2hhZG93KHNoYWRvd1Jvb3RJbml0KTtcbiAgICAgICAgdGFyZ2V0ID0gaG9zdC5zaGFkb3dSb290O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgICAgIHVwZGF0ZShob3N0LCB0YXJnZXQpO1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgfTtcbiAgICB9LFxuICAgIG9ic2VydmUoaG9zdCwgZmx1c2gpIHtcbiAgICAgIGZsdXNoKCk7XG4gICAgfSxcbiAgfTtcbn1cbiJdfQ==

  var callbacks = new WeakMap();
  var queue = new Set();

  function execute() {
    try {
      queue.forEach(function (target) {
        try {
          callbacks.get(target)();
          queue.delete(target);
        } catch (e) {
          queue.delete(target);
          throw e;
        }
      });
    } catch (e) {
      if (queue.size) execute();
      throw e;
    }
  }

  function dispatch(target) {
    if (!queue.size) {
      requestAnimationFrame(execute);
    }

    queue.add(target);
  }
  function subscribe(target, cb) {
    callbacks.set(target, cb);
    dispatch(target);
    return function unsubscribe() {
      queue.delete(target);
      callbacks.delete(target);
    };
  }
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbWl0dGVyLmpzIl0sIm5hbWVzIjpbImNhbGxiYWNrcyIsIldlYWtNYXAiLCJxdWV1ZSIsIlNldCIsImV4ZWN1dGUiLCJmb3JFYWNoIiwidGFyZ2V0IiwiZ2V0IiwiZGVsZXRlIiwiZSIsInNpemUiLCJkaXNwYXRjaCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFkZCIsInN1YnNjcmliZSIsImNiIiwic2V0IiwidW5zdWJzY3JpYmUiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLFNBQVMsR0FBRyxJQUFJQyxPQUFKLEVBQWxCO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLElBQUlDLEdBQUosRUFBZDs7QUFFQSxTQUFTQyxPQUFULEdBQW1CO0FBQ2pCLE1BQUk7QUFDRkYsSUFBQUEsS0FBSyxDQUFDRyxPQUFOLENBQWMsVUFBQUMsTUFBTSxFQUFJO0FBQ3RCLFVBQUk7QUFDRk4sUUFBQUEsU0FBUyxDQUFDTyxHQUFWLENBQWNELE1BQWQ7QUFDQUosUUFBQUEsS0FBSyxDQUFDTSxNQUFOLENBQWFGLE1BQWI7QUFDRCxPQUhELENBR0UsT0FBT0csQ0FBUCxFQUFVO0FBQ1ZQLFFBQUFBLEtBQUssQ0FBQ00sTUFBTixDQUFhRixNQUFiO0FBQ0EsY0FBTUcsQ0FBTjtBQUNEO0FBQ0YsS0FSRDtBQVNELEdBVkQsQ0FVRSxPQUFPQSxDQUFQLEVBQVU7QUFDVixRQUFJUCxLQUFLLENBQUNRLElBQVYsRUFBZ0JOLE9BQU87QUFDdkIsVUFBTUssQ0FBTjtBQUNEO0FBQ0Y7O0FBRUQsT0FBTyxTQUFTRSxRQUFULENBQWtCTCxNQUFsQixFQUEwQjtBQUMvQixNQUFJLENBQUNKLEtBQUssQ0FBQ1EsSUFBWCxFQUFpQjtBQUNmRSxJQUFBQSxxQkFBcUIsQ0FBQ1IsT0FBRCxDQUFyQjtBQUNEOztBQUNERixFQUFBQSxLQUFLLENBQUNXLEdBQU4sQ0FBVVAsTUFBVjtBQUNEO0FBRUQsT0FBTyxTQUFTUSxTQUFULENBQW1CUixNQUFuQixFQUEyQlMsRUFBM0IsRUFBK0I7QUFDcENmLEVBQUFBLFNBQVMsQ0FBQ2dCLEdBQVYsQ0FBY1YsTUFBZCxFQUFzQlMsRUFBdEI7QUFDQUosRUFBQUEsUUFBUSxDQUFDTCxNQUFELENBQVI7QUFFQSxTQUFPLFNBQVNXLFdBQVQsR0FBdUI7QUFDNUJmLElBQUFBLEtBQUssQ0FBQ00sTUFBTixDQUFhRixNQUFiO0FBQ0FOLElBQUFBLFNBQVMsQ0FBQ1EsTUFBVixDQUFpQkYsTUFBakI7QUFDRCxHQUhEO0FBSUQiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYWxsYmFja3MgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgcXVldWUgPSBuZXcgU2V0KCk7XG5cbmZ1bmN0aW9uIGV4ZWN1dGUoKSB7XG4gIHRyeSB7XG4gICAgcXVldWUuZm9yRWFjaCh0YXJnZXQgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2FsbGJhY2tzLmdldCh0YXJnZXQpKCk7XG4gICAgICAgIHF1ZXVlLmRlbGV0ZSh0YXJnZXQpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBxdWV1ZS5kZWxldGUodGFyZ2V0KTtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChxdWV1ZS5zaXplKSBleGVjdXRlKCk7XG4gICAgdGhyb3cgZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2godGFyZ2V0KSB7XG4gIGlmICghcXVldWUuc2l6ZSkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShleGVjdXRlKTtcbiAgfVxuICBxdWV1ZS5hZGQodGFyZ2V0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZSh0YXJnZXQsIGNiKSB7XG4gIGNhbGxiYWNrcy5zZXQodGFyZ2V0LCBjYik7XG4gIGRpc3BhdGNoKHRhcmdldCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgIHF1ZXVlLmRlbGV0ZSh0YXJnZXQpO1xuICAgIGNhbGxiYWNrcy5kZWxldGUodGFyZ2V0KTtcbiAgfTtcbn1cbiJdfQ==

  var entries = new WeakMap();
  function getEntry(target, key) {
    var targetMap = entries.get(target);

    if (!targetMap) {
      targetMap = new Map();
      entries.set(target, targetMap);
    }

    var entry = targetMap.get(key);

    if (!entry) {
      entry = {
        target: target,
        key: key,
        value: undefined,
        contexts: undefined,
        deps: undefined,
        state: 0,
        checksum: 0,
        observed: false
      };
      targetMap.set(key, entry);
    }

    return entry;
  }

  function calculateChecksum(entry) {
    var checksum = entry.state;

    if (entry.deps) {
      entry.deps.forEach(function (depEntry) {
        checksum += depEntry.state;
      });
    }

    return checksum;
  }

  function dispatchDeep(entry) {
    if (entry.observed) dispatch(entry);
    if (entry.contexts) entry.contexts.forEach(dispatchDeep);
  }

  function restoreDeepDeps(entry, deps) {
    if (deps) {
      deps.forEach(function (depEntry) {
        entry.deps.add(depEntry);

        if (entry.observed) {
          /* istanbul ignore if */
          if (!depEntry.contexts) depEntry.contexts = new Set();
          depEntry.contexts.add(entry);
        }

        restoreDeepDeps(entry, depEntry.deps);
      });
    }
  }

  var contextStack = new Set();
  function get(target, key, getter) {
    var entry = getEntry(target, key);

    if (contextStack.size && contextStack.has(entry)) {
      throw Error("Circular get invocation is forbidden: '".concat(key, "'"));
    }

    contextStack.forEach(function (context) {
      if (!context.deps) context.deps = new Set();
      context.deps.add(entry);

      if (context.observed) {
        if (!entry.contexts) entry.contexts = new Set();
        entry.contexts.add(context);
      }
    });

    if (entry.checksum && entry.checksum === calculateChecksum(entry)) {
      return entry.value;
    }

    try {
      contextStack.add(entry);

      if (entry.observed && entry.deps && entry.deps.size) {
        entry.deps.forEach(function (depEntry) {
          /* istanbul ignore else */
          if (depEntry.contexts) depEntry.contexts.delete(entry);
        });
      }

      entry.deps = undefined;
      var nextValue = getter(target, entry.value);

      if (entry.deps) {
        entry.deps.forEach(function (depEntry) {
          restoreDeepDeps(entry, depEntry.deps);
        });
      }

      if (nextValue !== entry.value) {
        entry.state += 1;
        entry.value = nextValue;
        dispatchDeep(entry);
      }

      entry.checksum = calculateChecksum(entry);
      contextStack.delete(entry);
    } catch (e) {
      entry.checksum = 0;
      contextStack.delete(entry);
      contextStack.forEach(function (context) {
        context.deps.delete(entry);
        if (context.observed) entry.contexts.delete(context);
      });
      throw e;
    }

    return entry.value;
  }
  function set(target, key, setter, value) {
    var entry = getEntry(target, key);
    var newValue = setter(target, value, entry.value);

    if (newValue !== entry.value) {
      entry.checksum = 0;
      entry.state += 1;
      entry.value = newValue;
      dispatchDeep(entry);
    }
  }
  function invalidate(target, key, clearValue) {
    if (contextStack.size) {
      throw Error("Invalidating property in chain of get calls is forbidden: '".concat(key, "'"));
    }

    var entry = getEntry(target, key);
    entry.checksum = 0;
    entry.state += 1;
    dispatchDeep(entry);

    if (clearValue) {
      entry.value = undefined;
    }
  }
  function observe(target, key, getter, fn) {
    var entry = getEntry(target, key);
    entry.observed = true;
    var lastValue;
    var unsubscribe = subscribe(entry, function () {
      var value = get(target, key, getter);

      if (value !== lastValue) {
        fn(target, value, lastValue);
        lastValue = value;
      }
    });

    if (entry.deps) {
      entry.deps.forEach(function (depEntry) {
        /* istanbul ignore else */
        if (!depEntry.contexts) depEntry.contexts = new Set();
        depEntry.contexts.add(entry);
      });
    }

    return function unobserve() {
      unsubscribe();
      entry.observed = false;

      if (entry.deps && entry.deps.size) {
        entry.deps.forEach(function (depEntry) {
          /* istanbul ignore else */
          if (depEntry.contexts) depEntry.contexts.delete(entry);
        });
      }
    };
  }
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jYWNoZS5qcyJdLCJuYW1lcyI6WyJlbWl0dGVyIiwiZW50cmllcyIsIldlYWtNYXAiLCJnZXRFbnRyeSIsInRhcmdldCIsImtleSIsInRhcmdldE1hcCIsImdldCIsIk1hcCIsInNldCIsImVudHJ5IiwidmFsdWUiLCJ1bmRlZmluZWQiLCJjb250ZXh0cyIsImRlcHMiLCJzdGF0ZSIsImNoZWNrc3VtIiwib2JzZXJ2ZWQiLCJjYWxjdWxhdGVDaGVja3N1bSIsImZvckVhY2giLCJkZXBFbnRyeSIsImRpc3BhdGNoRGVlcCIsImRpc3BhdGNoIiwicmVzdG9yZURlZXBEZXBzIiwiYWRkIiwiU2V0IiwiY29udGV4dFN0YWNrIiwiZ2V0dGVyIiwic2l6ZSIsImhhcyIsIkVycm9yIiwiY29udGV4dCIsImRlbGV0ZSIsIm5leHRWYWx1ZSIsImUiLCJzZXR0ZXIiLCJuZXdWYWx1ZSIsImludmFsaWRhdGUiLCJjbGVhclZhbHVlIiwib2JzZXJ2ZSIsImZuIiwibGFzdFZhbHVlIiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJ1bm9ic2VydmUiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBS0EsT0FBWixNQUF5QixjQUF6QjtBQUVBLElBQU1DLE9BQU8sR0FBRyxJQUFJQyxPQUFKLEVBQWhCO0FBQ0EsT0FBTyxTQUFTQyxRQUFULENBQWtCQyxNQUFsQixFQUEwQkMsR0FBMUIsRUFBK0I7QUFDcEMsTUFBSUMsU0FBUyxHQUFHTCxPQUFPLENBQUNNLEdBQVIsQ0FBWUgsTUFBWixDQUFoQjs7QUFDQSxNQUFJLENBQUNFLFNBQUwsRUFBZ0I7QUFDZEEsSUFBQUEsU0FBUyxHQUFHLElBQUlFLEdBQUosRUFBWjtBQUNBUCxJQUFBQSxPQUFPLENBQUNRLEdBQVIsQ0FBWUwsTUFBWixFQUFvQkUsU0FBcEI7QUFDRDs7QUFFRCxNQUFJSSxLQUFLLEdBQUdKLFNBQVMsQ0FBQ0MsR0FBVixDQUFjRixHQUFkLENBQVo7O0FBRUEsTUFBSSxDQUFDSyxLQUFMLEVBQVk7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QUNkSixJQUFBQSxLQUFLLENBQUNJLElBQU4sQ0FBV0ssT0FBWCxDQUFtQixVQUFBQyxRQUFRLEVBQUk7QUFDN0I7QUFDQSxVQUFJLENBQUNBLFFBQVEsQ0FBQ1AsUUFBZCxFQUF3Qk8sUUFBUSxDQUFDUCxRQUFULEdBQW9CLElBQUlZLEdBQUosRUFBcEI7QUFDeEJMLE1BQUFBLFFBQVEsQ0FBQ1AsUUFBVCxDQUFrQlcsR0FBbEIsQ0FBc0JkLEtBQXRCO0FBQ0QsS0FKRDtBQUtEOztBQUVELFNBQU8sU0FBU2tDLFNBQVQsR0FBcUI7QUFDMUJGLElBQUFBLFdBQVc7QUFDWGhDLElBQUFBLEtBQUssQ0FBQ08sUUFBTixHQUFpQixLQUFqQjs7QUFDQSxRQUFJUCxLQUFLLENBQUNJLElBQU4sSUFBY0osS0FBSyxDQUFDSSxJQUFOLENBQVdjLElBQTdCLEVBQW1DO0FBQ2pDbEIsTUFBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVdLLE9BQVgsQ0FBbUIsVUFBQUMsUUFBUSxFQUFJO0FBQzdCO0FBQ0EsWUFBSUEsUUFBUSxDQUFDUCxRQUFiLEVBQXVCTyxRQUFRLENBQUNQLFFBQVQsQ0FBa0JtQixNQUFsQixDQUF5QnRCLEtBQXpCO0FBQ3hCLE9BSEQ7QUFJRDtBQUNGLEdBVEQ7QUFVRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGVtaXR0ZXIgZnJvbSBcIi4vZW1pdHRlci5qc1wiO1xuXG5jb25zdCBlbnRyaWVzID0gbmV3IFdlYWtNYXAoKTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbnRyeSh0YXJnZXQsIGtleSkge1xuICBsZXQgdGFyZ2V0TWFwID0gZW50cmllcy5nZXQodGFyZ2V0KTtcbiAgaWYgKCF0YXJnZXRNYXApIHtcbiAgICB0YXJnZXRNYXAgPSBuZXcgTWFwKCk7XG4gICAgZW50cmllcy5zZXQodGFyZ2V0LCB0YXJnZXRNYXApO1xuICB9XG5cbiAgbGV0IGVudHJ5ID0gdGFyZ2V0TWFwLmdldChrZXkpO1xuXG4gIGlmICghZW50cnkpIHtcbiAgICBlbnRyeSA9IHtcbiAgICAgIHRhcmdldCxcbiAgICAgIGtleSxcbiAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICBjb250ZXh0czogdW5kZWZpbmVkLFxuICAgICAgZGVwczogdW5kZWZpbmVkLFxuICAgICAgc3RhdGU6IDAsXG4gICAgICBjaGVja3N1bTogMCxcbiAgICAgIG9ic2VydmVkOiBmYWxzZSxcbiAgICB9O1xuICAgIHRhcmdldE1hcC5zZXQoa2V5LCBlbnRyeSk7XG4gIH1cblxuICByZXR1cm4gZW50cnk7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUNoZWNrc3VtKGVudHJ5KSB7XG4gIGxldCBjaGVja3N1bSA9IGVudHJ5LnN0YXRlO1xuICBpZiAoZW50cnkuZGVwcykge1xuICAgIGVudHJ5LmRlcHMuZm9yRWFjaChkZXBFbnRyeSA9PiB7XG4gICAgICBjaGVja3N1bSArPSBkZXBFbnRyeS5zdGF0ZTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjaGVja3N1bTtcbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hEZWVwKGVudHJ5KSB7XG4gIGlmIChlbnRyeS5vYnNlcnZlZCkgZW1pdHRlci5kaXNwYXRjaChlbnRyeSk7XG4gIGlmIChlbnRyeS5jb250ZXh0cykgZW50cnkuY29udGV4dHMuZm9yRWFjaChkaXNwYXRjaERlZXApO1xufVxuXG5mdW5jdGlvbiByZXN0b3JlRGVlcERlcHMoZW50cnksIGRlcHMpIHtcbiAgaWYgKGRlcHMpIHtcbiAgICBkZXBzLmZvckVhY2goZGVwRW50cnkgPT4ge1xuICAgICAgZW50cnkuZGVwcy5hZGQoZGVwRW50cnkpO1xuXG4gICAgICBpZiAoZW50cnkub2JzZXJ2ZWQpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmICghZGVwRW50cnkuY29udGV4dHMpIGRlcEVudHJ5LmNvbnRleHRzID0gbmV3IFNldCgpO1xuICAgICAgICBkZXBFbnRyeS5jb250ZXh0cy5hZGQoZW50cnkpO1xuICAgICAgfVxuXG4gICAgICByZXN0b3JlRGVlcERlcHMoZW50cnksIGRlcEVudHJ5LmRlcHMpO1xuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IGNvbnRleHRTdGFjayA9IG5ldyBTZXQoKTtcbmV4cG9ydCBmdW5jdGlvbiBnZXQodGFyZ2V0LCBrZXksIGdldHRlcikge1xuICBjb25zdCBlbnRyeSA9IGdldEVudHJ5KHRhcmdldCwga2V5KTtcblxuICBpZiAoY29udGV4dFN0YWNrLnNpemUgJiYgY29udGV4dFN0YWNrLmhhcyhlbnRyeSkpIHtcbiAgICB0aHJvdyBFcnJvcihgQ2lyY3VsYXIgZ2V0IGludm9jYXRpb24gaXMgZm9yYmlkZGVuOiAnJHtrZXl9J2ApO1xuICB9XG5cbiAgY29udGV4dFN0YWNrLmZvckVhY2goY29udGV4dCA9PiB7XG4gICAgaWYgKCFjb250ZXh0LmRlcHMpIGNvbnRleHQuZGVwcyA9IG5ldyBTZXQoKTtcbiAgICBjb250ZXh0LmRlcHMuYWRkKGVudHJ5KTtcblxuICAgIGlmIChjb250ZXh0Lm9ic2VydmVkKSB7XG4gICAgICBpZiAoIWVudHJ5LmNvbnRleHRzKSBlbnRyeS5jb250ZXh0cyA9IG5ldyBTZXQoKTtcbiAgICAgIGVudHJ5LmNvbnRleHRzLmFkZChjb250ZXh0KTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChlbnRyeS5jaGVja3N1bSAmJiBlbnRyeS5jaGVja3N1bSA9PT0gY2FsY3VsYXRlQ2hlY2tzdW0oZW50cnkpKSB7XG4gICAgcmV0dXJuIGVudHJ5LnZhbHVlO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb250ZXh0U3RhY2suYWRkKGVudHJ5KTtcblxuICAgIGlmIChlbnRyeS5vYnNlcnZlZCAmJiBlbnRyeS5kZXBzICYmIGVudHJ5LmRlcHMuc2l6ZSkge1xuICAgICAgZW50cnkuZGVwcy5mb3JFYWNoKGRlcEVudHJ5ID0+IHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKGRlcEVudHJ5LmNvbnRleHRzKSBkZXBFbnRyeS5jb250ZXh0cy5kZWxldGUoZW50cnkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZW50cnkuZGVwcyA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBuZXh0VmFsdWUgPSBnZXR0ZXIodGFyZ2V0LCBlbnRyeS52YWx1ZSk7XG5cbiAgICBpZiAoZW50cnkuZGVwcykge1xuICAgICAgZW50cnkuZGVwcy5mb3JFYWNoKGRlcEVudHJ5ID0+IHtcbiAgICAgICAgcmVzdG9yZURlZXBEZXBzKGVudHJ5LCBkZXBFbnRyeS5kZXBzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChuZXh0VmFsdWUgIT09IGVudHJ5LnZhbHVlKSB7XG4gICAgICBlbnRyeS5zdGF0ZSArPSAxO1xuICAgICAgZW50cnkudmFsdWUgPSBuZXh0VmFsdWU7XG5cbiAgICAgIGRpc3BhdGNoRGVlcChlbnRyeSk7XG4gICAgfVxuXG4gICAgZW50cnkuY2hlY2tzdW0gPSBjYWxjdWxhdGVDaGVja3N1bShlbnRyeSk7XG4gICAgY29udGV4dFN0YWNrLmRlbGV0ZShlbnRyeSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBlbnRyeS5jaGVja3N1bSA9IDA7XG5cbiAgICBjb250ZXh0U3RhY2suZGVsZXRlKGVudHJ5KTtcbiAgICBjb250ZXh0U3RhY2suZm9yRWFjaChjb250ZXh0ID0+IHtcbiAgICAgIGNvbnRleHQuZGVwcy5kZWxldGUoZW50cnkpO1xuICAgICAgaWYgKGNvbnRleHQub2JzZXJ2ZWQpIGVudHJ5LmNvbnRleHRzLmRlbGV0ZShjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRocm93IGU7XG4gIH1cblxuICByZXR1cm4gZW50cnkudmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQodGFyZ2V0LCBrZXksIHNldHRlciwgdmFsdWUpIHtcbiAgY29uc3QgZW50cnkgPSBnZXRFbnRyeSh0YXJnZXQsIGtleSk7XG4gIGNvbnN0IG5ld1ZhbHVlID0gc2V0dGVyKHRhcmdldCwgdmFsdWUsIGVudHJ5LnZhbHVlKTtcblxuICBpZiAobmV3VmFsdWUgIT09IGVudHJ5LnZhbHVlKSB7XG4gICAgZW50cnkuY2hlY2tzdW0gPSAwO1xuICAgIGVudHJ5LnN0YXRlICs9IDE7XG4gICAgZW50cnkudmFsdWUgPSBuZXdWYWx1ZTtcblxuICAgIGRpc3BhdGNoRGVlcChlbnRyeSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWRhdGUodGFyZ2V0LCBrZXksIGNsZWFyVmFsdWUpIHtcbiAgaWYgKGNvbnRleHRTdGFjay5zaXplKSB7XG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICBgSW52YWxpZGF0aW5nIHByb3BlcnR5IGluIGNoYWluIG9mIGdldCBjYWxscyBpcyBmb3JiaWRkZW46ICcke2tleX0nYCxcbiAgICApO1xuICB9XG5cbiAgY29uc3QgZW50cnkgPSBnZXRFbnRyeSh0YXJnZXQsIGtleSk7XG5cbiAgZW50cnkuY2hlY2tzdW0gPSAwO1xuICBlbnRyeS5zdGF0ZSArPSAxO1xuXG4gIGRpc3BhdGNoRGVlcChlbnRyeSk7XG5cbiAgaWYgKGNsZWFyVmFsdWUpIHtcbiAgICBlbnRyeS52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZSh0YXJnZXQsIGtleSwgZ2V0dGVyLCBmbikge1xuICBjb25zdCBlbnRyeSA9IGdldEVudHJ5KHRhcmdldCwga2V5KTtcbiAgZW50cnkub2JzZXJ2ZWQgPSB0cnVlO1xuXG4gIGxldCBsYXN0VmFsdWU7XG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gZW1pdHRlci5zdWJzY3JpYmUoZW50cnksICgpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGdldCh0YXJnZXQsIGtleSwgZ2V0dGVyKTtcbiAgICBpZiAodmFsdWUgIT09IGxhc3RWYWx1ZSkge1xuICAgICAgZm4odGFyZ2V0LCB2YWx1ZSwgbGFzdFZhbHVlKTtcbiAgICAgIGxhc3RWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGVudHJ5LmRlcHMpIHtcbiAgICBlbnRyeS5kZXBzLmZvckVhY2goZGVwRW50cnkgPT4ge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmICghZGVwRW50cnkuY29udGV4dHMpIGRlcEVudHJ5LmNvbnRleHRzID0gbmV3IFNldCgpO1xuICAgICAgZGVwRW50cnkuY29udGV4dHMuYWRkKGVudHJ5KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgdW5zdWJzY3JpYmUoKTtcbiAgICBlbnRyeS5vYnNlcnZlZCA9IGZhbHNlO1xuICAgIGlmIChlbnRyeS5kZXBzICYmIGVudHJ5LmRlcHMuc2l6ZSkge1xuICAgICAgZW50cnkuZGVwcy5mb3JFYWNoKGRlcEVudHJ5ID0+IHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKGRlcEVudHJ5LmNvbnRleHRzKSBkZXBFbnRyeS5jb250ZXh0cy5kZWxldGUoZW50cnkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuIl19

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof$2(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _typeof$2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }
  /* istanbul ignore next */

  try {
    process.env.NODE_ENV;
  } catch (e) {
    var process = {
      env: {
        NODE_ENV: 'production'
      }
    };
  } // eslint-disable-line


  var defaultMethod = function defaultMethod(host, value) {
    return value;
  };

  var callbacksMap = new WeakMap();
  var propsMap = new WeakMap();

  function compile(Hybrid, descriptors) {
    Hybrid.hybrids = descriptors;
    var callbacks = [];
    var props = Object.keys(descriptors);
    callbacksMap.set(Hybrid, callbacks);
    propsMap.set(Hybrid, props);
    props.forEach(function (key) {
      var desc = descriptors[key];

      var type = _typeof$2(desc);

      var config;

      if (type === "function") {
        config = key === "render" ? render(desc) : {
          get: desc
        };
      } else if (type !== "object" || desc === null || Array.isArray(desc)) {
        config = property(desc);
      } else {
        config = {
          get: desc.get || defaultMethod,
          set: desc.set || !desc.get && defaultMethod || undefined,
          connect: desc.connect,
          observe: desc.observe
        };
      }

      Object.defineProperty(Hybrid.prototype, key, {
        get: function get$1() {
          return get(this, key, config.get);
        },
        set: config.set && function set$1(newValue) {
          set(this, key, config.set, newValue);
        },
        enumerable: true,
        configurable: process.env.NODE_ENV !== "production"
      });

      if (config.observe) {
        callbacks.unshift(function (host) {
          return observe(host, key, config.get, config.observe);
        });
      }

      if (config.connect) {
        callbacks.push(function (host) {
          return config.connect(host, key, function () {
            invalidate(host, key);
          });
        });
      }
    });
  }

  var disconnects = new WeakMap();

  function defineElement(tagName, hybridsOrConstructor) {
    var type = _typeof$2(hybridsOrConstructor);

    if (type !== "object" && type !== "function") {
      throw TypeError("Second argument must be an object or a function: ".concat(type));
    }

    var CustomElement = window.customElements.get(tagName);

    if (type === "function") {
      if (CustomElement !== hybridsOrConstructor) {
        return window.customElements.define(tagName, hybridsOrConstructor);
      }

      return CustomElement;
    }

    if (CustomElement) {
      if (CustomElement.hybrids === hybridsOrConstructor) {
        return CustomElement;
      }

      throw Error("Element '".concat(tagName, "' already defined"));
    }

    var Hybrid = /*#__PURE__*/function (_HTMLElement) {
      _inherits(Hybrid, _HTMLElement);

      var _super = _createSuper(Hybrid);

      _createClass(Hybrid, null, [{
        key: "name",
        get: function get() {
          return tagName;
        }
      }]);

      function Hybrid() {
        var _this;

        _classCallCheck(this, Hybrid);

        _this = _super.call(this);
        var props = propsMap.get(Hybrid);

        for (var index = 0; index < props.length; index += 1) {
          var key = props[index];

          if (Object.prototype.hasOwnProperty.call(_assertThisInitialized(_this), key)) {
            var value = _this[key];
            delete _this[key];
            _this[key] = value;
          }
        }

        return _this;
      }

      _createClass(Hybrid, [{
        key: "connectedCallback",
        value: function connectedCallback() {
          var callbacks = callbacksMap.get(Hybrid);
          var list = [];

          for (var index = 0; index < callbacks.length; index += 1) {
            var cb = callbacks[index](this);
            if (cb) list.push(cb);
          }

          disconnects.set(this, list);
        }
      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          var list = disconnects.get(this);

          for (var index = 0; index < list.length; index += 1) {
            list[index]();
          }
        }
      }]);

      return Hybrid;
    }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

    compile(Hybrid, hybridsOrConstructor);
    customElements.define(tagName, Hybrid);
    return Hybrid;
  }

  function defineMap(elements) {
    return Object.keys(elements).reduce(function (acc, key) {
      var tagName = pascalToDash(key);
      acc[key] = defineElement(tagName, elements[key]);
      return acc;
    }, {});
  }

  function define() {
    if (_typeof$2(arguments.length <= 0 ? undefined : arguments[0]) === "object") {
      return defineMap(arguments.length <= 0 ? undefined : arguments[0]);
    }

    return defineElement.apply(void 0, arguments);
  }
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZpbmUuanMiXSwibmFtZXMiOlsicHJvcGVydHkiLCJyZW5kZXIiLCJjYWNoZSIsInBhc2NhbFRvRGFzaCIsImRlZmVycmVkIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiZSIsImRlZmF1bHRNZXRob2QiLCJob3N0IiwidmFsdWUiLCJjYWxsYmFja3NNYXAiLCJXZWFrTWFwIiwicHJvcHNNYXAiLCJjb21waWxlIiwiSHlicmlkIiwiZGVzY3JpcHRvcnMiLCJoeWJyaWRzIiwiY2FsbGJhY2tzIiwicHJvcHMiLCJPYmplY3QiLCJrZXlzIiwic2V0IiwiZm9yRWFjaCIsImtleSIsImRlc2MiLCJ0eXBlIiwiY29uZmlnIiwiZ2V0IiwiQXJyYXkiLCJpc0FycmF5IiwidW5kZWZpbmVkIiwiY29ubmVjdCIsIm9ic2VydmUiLCJkZWZpbmVQcm9wZXJ0eSIsInByb3RvdHlwZSIsIm5ld1ZhbHVlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsInVuc2hpZnQiLCJwdXNoIiwiaW52YWxpZGF0ZSIsInVwZGF0ZSIsIndhbGtJblNoYWRvdyIsIm5vZGUiLCJmbiIsImZyb20iLCJjaGlsZHJlbiIsImVsIiwic2hhZG93Um9vdCIsInVwZGF0ZVF1ZXVlIiwiTWFwIiwibGFzdEh5YnJpZHMiLCJzaXplIiwidGhlbiIsImRvY3VtZW50IiwiYm9keSIsImhhcyIsImNvbnN0cnVjdG9yIiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJjb25uZWN0ZWRDYWxsYmFjayIsImNsZWFyIiwiZGlzY29ubmVjdHMiLCJkZWZpbmVFbGVtZW50IiwidGFnTmFtZSIsImh5YnJpZHNPckNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiQ3VzdG9tRWxlbWVudCIsIndpbmRvdyIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiRXJyb3IiLCJpbmRleCIsImxlbmd0aCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImxpc3QiLCJjYiIsIkhUTUxFbGVtZW50IiwiZGVmaW5l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LENBQUgsR0FBV3VDLGFBQWEsQ0FBQ0MsT0FBRCxFQUFVZ0IsUUFBUSxDQUFDeEQsR0FBRCxDQUFsQixDQUF4QjtBQUVBLFdBQU8wRCxHQUFQO0FBQ0QsR0FMTSxFQUtKLEVBTEksQ0FBUDtBQU1EOztBQUVELGVBQWUsU0FBU1osTUFBVCxHQUF5QjtBQUN0QyxNQUFJLDhEQUFtQixRQUF2QixFQUFpQztBQUMvQixXQUFPUyxTQUFTLGtEQUFoQjtBQUNEOztBQUVELFNBQU9oQixhQUFhLE1BQWIsbUJBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9wZXJ0eSBmcm9tIFwiLi9wcm9wZXJ0eS5qc1wiO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9yZW5kZXIuanNcIjtcblxuaW1wb3J0ICogYXMgY2FjaGUgZnJvbSBcIi4vY2FjaGUuanNcIjtcbmltcG9ydCB7IHBhc2NhbFRvRGFzaCwgZGVmZXJyZWQgfSBmcm9tIFwiLi91dGlscy5qc1wiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xudHJ5IHsgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfSBjYXRjaChlKSB7IHZhciBwcm9jZXNzID0geyBlbnY6IHsgTk9ERV9FTlY6ICdwcm9kdWN0aW9uJyB9IH07IH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5jb25zdCBkZWZhdWx0TWV0aG9kID0gKGhvc3QsIHZhbHVlKSA9PiB2YWx1ZTtcblxuY29uc3QgY2FsbGJhY2tzTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHByb3BzTWFwID0gbmV3IFdlYWtNYXAoKTtcblxuZnVuY3Rpb24gY29tcGlsZShIeWJyaWQsIGRlc2NyaXB0b3JzKSB7XG4gIEh5YnJpZC5oeWJyaWRzID0gZGVzY3JpcHRvcnM7XG5cbiAgY29uc3QgY2FsbGJhY2tzID0gW107XG4gIGNvbnN0IHByb3BzID0gT2JqZWN0LmtleXMoZGVzY3JpcHRvcnMpO1xuXG4gIGNhbGxiYWNrc01hcC5zZXQoSHlicmlkLCBjYWxsYmFja3MpO1xuICBwcm9wc01hcC5zZXQoSHlicmlkLCBwcm9wcyk7XG5cbiAgcHJvcHMuZm9yRWFjaChrZXkgPT4ge1xuICAgIGNvbnN0IGRlc2MgPSBkZXNjcmlwdG9yc1trZXldO1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgZGVzYztcblxuICAgIGxldCBjb25maWc7XG5cbiAgICBpZiAodHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBjb25maWcgPSBrZXkgPT09IFwicmVuZGVyXCIgPyByZW5kZXIoZGVzYykgOiB7IGdldDogZGVzYyB9O1xuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gXCJvYmplY3RcIiB8fCBkZXNjID09PSBudWxsIHx8IEFycmF5LmlzQXJyYXkoZGVzYykpIHtcbiAgICAgIGNvbmZpZyA9IHByb3BlcnR5KGRlc2MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcgPSB7XG4gICAgICAgIGdldDogZGVzYy5nZXQgfHwgZGVmYXVsdE1ldGhvZCxcbiAgICAgICAgc2V0OiBkZXNjLnNldCB8fCAoIWRlc2MuZ2V0ICYmIGRlZmF1bHRNZXRob2QpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgY29ubmVjdDogZGVzYy5jb25uZWN0LFxuICAgICAgICBvYnNlcnZlOiBkZXNjLm9ic2VydmUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShIeWJyaWQucHJvdG90eXBlLCBrZXksIHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gY2FjaGUuZ2V0KHRoaXMsIGtleSwgY29uZmlnLmdldCk7XG4gICAgICB9LFxuICAgICAgc2V0OlxuICAgICAgICBjb25maWcuc2V0ICYmXG4gICAgICAgIGZ1bmN0aW9uIHNldChuZXdWYWx1ZSkge1xuICAgICAgICAgIGNhY2hlLnNldCh0aGlzLCBrZXksIGNvbmZpZy5zZXQsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIixcbiAgICB9KTtcblxuICAgIGlmIChjb25maWcub2JzZXJ2ZSkge1xuICAgICAgY2FsbGJhY2tzLnVuc2hpZnQoaG9zdCA9PlxuICAgICAgICBjYWNoZS5vYnNlcnZlKGhvc3QsIGtleSwgY29uZmlnLmdldCwgY29uZmlnLm9ic2VydmUpLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNvbm5lY3QpIHtcbiAgICAgIGNhbGxiYWNrcy5wdXNoKGhvc3QgPT5cbiAgICAgICAgY29uZmlnLmNvbm5lY3QoaG9zdCwga2V5LCAoKSA9PiB7XG4gICAgICAgICAgY2FjaGUuaW52YWxpZGF0ZShob3N0LCBrZXkpO1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfVxuICB9KTtcbn1cblxubGV0IHVwZGF0ZTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIGNvbnN0IHdhbGtJblNoYWRvdyA9IChub2RlLCBmbikgPT4ge1xuICAgIGZuKG5vZGUpO1xuXG4gICAgQXJyYXkuZnJvbShub2RlLmNoaWxkcmVuKS5mb3JFYWNoKGVsID0+IHdhbGtJblNoYWRvdyhlbCwgZm4pKTtcblxuICAgIGlmIChub2RlLnNoYWRvd1Jvb3QpIHtcbiAgICAgIEFycmF5LmZyb20obm9kZS5zaGFkb3dSb290LmNoaWxkcmVuKS5mb3JFYWNoKGVsID0+IHdhbGtJblNoYWRvdyhlbCwgZm4pKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlUXVldWUgPSBuZXcgTWFwKCk7XG4gIHVwZGF0ZSA9IChIeWJyaWQsIGxhc3RIeWJyaWRzKSA9PiB7XG4gICAgaWYgKCF1cGRhdGVRdWV1ZS5zaXplKSB7XG4gICAgICBkZWZlcnJlZC50aGVuKCgpID0+IHtcbiAgICAgICAgd2Fsa0luU2hhZG93KGRvY3VtZW50LmJvZHksIG5vZGUgPT4ge1xuICAgICAgICAgIGlmICh1cGRhdGVRdWV1ZS5oYXMobm9kZS5jb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGNvbnN0IGh5YnJpZHMgPSB1cGRhdGVRdWV1ZS5nZXQobm9kZS5jb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICBub2RlLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG5vZGUuY29uc3RydWN0b3IuaHlicmlkcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICBjYWNoZS5pbnZhbGlkYXRlKFxuICAgICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIG5vZGUuY29uc3RydWN0b3IuaHlicmlkc1trZXldICE9PSBoeWJyaWRzW2tleV0sXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbm9kZS5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHVwZGF0ZVF1ZXVlLmNsZWFyKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdXBkYXRlUXVldWUuc2V0KEh5YnJpZCwgbGFzdEh5YnJpZHMpO1xuICB9O1xufVxuXG5jb25zdCBkaXNjb25uZWN0cyA9IG5ldyBXZWFrTWFwKCk7XG5cbmZ1bmN0aW9uIGRlZmluZUVsZW1lbnQodGFnTmFtZSwgaHlicmlkc09yQ29uc3RydWN0b3IpIHtcbiAgY29uc3QgdHlwZSA9IHR5cGVvZiBoeWJyaWRzT3JDb25zdHJ1Y3RvcjtcbiAgaWYgKHR5cGUgIT09IFwib2JqZWN0XCIgJiYgdHlwZSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKGBTZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbjogJHt0eXBlfWApO1xuICB9XG5cbiAgY29uc3QgQ3VzdG9tRWxlbWVudCA9IHdpbmRvdy5jdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSk7XG5cbiAgaWYgKHR5cGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGlmIChDdXN0b21FbGVtZW50ICE9PSBoeWJyaWRzT3JDb25zdHJ1Y3Rvcikge1xuICAgICAgcmV0dXJuIHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgaHlicmlkc09yQ29uc3RydWN0b3IpO1xuICAgIH1cbiAgICByZXR1cm4gQ3VzdG9tRWxlbWVudDtcbiAgfVxuXG4gIGlmIChDdXN0b21FbGVtZW50KSB7XG4gICAgaWYgKEN1c3RvbUVsZW1lbnQuaHlicmlkcyA9PT0gaHlicmlkc09yQ29uc3RydWN0b3IpIHtcbiAgICAgIHJldHVybiBDdXN0b21FbGVtZW50O1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIEN1c3RvbUVsZW1lbnQuaHlicmlkcykge1xuICAgICAgT2JqZWN0LmtleXMoQ3VzdG9tRWxlbWVudC5oeWJyaWRzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGRlbGV0ZSBDdXN0b21FbGVtZW50LnByb3RvdHlwZVtrZXldO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGxhc3RIeWJyaWRzID0gQ3VzdG9tRWxlbWVudC5oeWJyaWRzO1xuXG4gICAgICBjb21waWxlKEN1c3RvbUVsZW1lbnQsIGh5YnJpZHNPckNvbnN0cnVjdG9yKTtcbiAgICAgIHVwZGF0ZShDdXN0b21FbGVtZW50LCBsYXN0SHlicmlkcyk7XG5cbiAgICAgIHJldHVybiBDdXN0b21FbGVtZW50O1xuICAgIH1cblxuICAgIHRocm93IEVycm9yKGBFbGVtZW50ICcke3RhZ05hbWV9JyBhbHJlYWR5IGRlZmluZWRgKTtcbiAgfVxuXG4gIGNsYXNzIEh5YnJpZCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBzdGF0aWMgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gdGFnTmFtZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG5cbiAgICAgIGNvbnN0IHByb3BzID0gcHJvcHNNYXAuZ2V0KEh5YnJpZCk7XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwcm9wcy5sZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gcHJvcHNbaW5kZXhdO1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsIGtleSkpIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXNba2V5XTtcbiAgICAgICAgICBkZWxldGUgdGhpc1trZXldO1xuICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBjb25zdCBjYWxsYmFja3MgPSBjYWxsYmFja3NNYXAuZ2V0KEh5YnJpZCk7XG4gICAgICBjb25zdCBsaXN0ID0gW107XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjYWxsYmFja3MubGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNiID0gY2FsbGJhY2tzW2luZGV4XSh0aGlzKTtcbiAgICAgICAgaWYgKGNiKSBsaXN0LnB1c2goY2IpO1xuICAgICAgfVxuXG4gICAgICBkaXNjb25uZWN0cy5zZXQodGhpcywgbGlzdCk7XG4gICAgfVxuXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBjb25zdCBsaXN0ID0gZGlzY29ubmVjdHMuZ2V0KHRoaXMpO1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpc3QubGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgICAgIGxpc3RbaW5kZXhdKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcGlsZShIeWJyaWQsIGh5YnJpZHNPckNvbnN0cnVjdG9yKTtcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIEh5YnJpZCk7XG5cbiAgcmV0dXJuIEh5YnJpZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lTWFwKGVsZW1lbnRzKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhlbGVtZW50cykucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGNvbnN0IHRhZ05hbWUgPSBwYXNjYWxUb0Rhc2goa2V5KTtcbiAgICBhY2Nba2V5XSA9IGRlZmluZUVsZW1lbnQodGFnTmFtZSwgZWxlbWVudHNba2V5XSk7XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmluZSguLi5hcmdzKSB7XG4gIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gXCJvYmplY3RcIikge1xuICAgIHJldHVybiBkZWZpbmVNYXAoYXJnc1swXSk7XG4gIH1cblxuICByZXR1cm4gZGVmaW5lRWxlbWVudCguLi5hcmdzKTtcbn1cbiJdfQ==

  var map = new WeakMap();
  var dataMap = {
    get: function get(key, defaultValue) {
      var value = map.get(key);
      if (value) return value;

      if (defaultValue) {
        map.set(key, defaultValue);
      }

      return defaultValue;
    },
    set: function set(key, value) {
      map.set(key, value);
      return value;
    }
  };
  function getTemplateEnd(node) {
    var data; // eslint-disable-next-line no-cond-assign

    while (node && (data = dataMap.get(node)) && data.endNode) {
      node = data.endNode;
    }

    return node;
  }
  function removeTemplate(target) {
    if (target.nodeType !== Node.TEXT_NODE) {
      var child = target.childNodes[0];

      while (child) {
        target.removeChild(child);
        child = target.childNodes[0];
      }
    } else {
      var data = dataMap.get(target);

      if (data.startNode) {
        var endNode = getTemplateEnd(data.endNode);
        var node = data.startNode;
        var lastNextSibling = endNode.nextSibling;

        while (node) {
          var nextSibling = node.nextSibling;
          node.parentNode.removeChild(node);
          node = nextSibling !== lastNextSibling && nextSibling;
        }
      }
    }
  }
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZS91dGlscy5qcyJdLCJuYW1lcyI6WyJtYXAiLCJXZWFrTWFwIiwiZGF0YU1hcCIsImdldCIsImtleSIsImRlZmF1bHRWYWx1ZSIsInZhbHVlIiwic2V0IiwiZ2V0VGVtcGxhdGVFbmQiLCJub2RlIiwiZGF0YSIsImVuZE5vZGUiLCJyZW1vdmVUZW1wbGF0ZSIsInRhcmdldCIsIm5vZGVUeXBlIiwiTm9kZSIsIlRFWFRfTk9ERSIsImNoaWxkIiwiY2hpbGROb2RlcyIsInJlbW92ZUNoaWxkIiwic3RhcnROb2RlIiwibGFzdE5leHRTaWJsaW5nIiwibmV4dFNpYmxpbmciLCJwYXJlbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxHQUFHLEdBQUcsSUFBSUMsT0FBSixFQUFaO0FBQ0EsT0FBTyxJQUFNQyxPQUFPLEdBQUc7QUFDckJDLEVBQUFBLEdBRHFCLGVBQ2pCQyxHQURpQixFQUNaQyxZQURZLEVBQ0U7QUFDckIsUUFBTUMsS0FBSyxHQUFHTixHQUFHLENBQUNHLEdBQUosQ0FBUUMsR0FBUixDQUFkO0FBQ0EsUUFBSUUsS0FBSixFQUFXLE9BQU9BLEtBQVA7O0FBRVgsUUFBSUQsWUFBSixFQUFrQjtBQUNoQkwsTUFBQUEsR0FBRyxDQUFDTyxHQUFKLENBQVFILEdBQVIsRUFBYUMsWUFBYjtBQUNEOztBQUVELFdBQU9BLFlBQVA7QUFDRCxHQVZvQjtBQVdyQkUsRUFBQUEsR0FYcUIsZUFXakJILEdBWGlCLEVBV1pFLEtBWFksRUFXTDtBQUNkTixJQUFBQSxHQUFHLENBQUNPLEdBQUosQ0FBUUgsR0FBUixFQUFhRSxLQUFiO0FBQ0EsV0FBT0EsS0FBUDtBQUNEO0FBZG9CLENBQWhCO0FBaUJQLE9BQU8sU0FBU0UsY0FBVCxDQUF3QkMsSUFBeEIsRUFBOEI7QUFDbkMsTUFBSUMsSUFBSixDQURtQyxDQUVuQzs7QUFDQSxTQUFPRCxJQUFJLEtBQUtDLElBQUksR0FBR1IsT0FBTyxDQUFDQyxHQUFSLENBQVlNLElBQVosQ0FBWixDQUFKLElBQXNDQyxJQUFJLENBQUNDLE9BQWxELEVBQTJEO0FBQ3pERixJQUFBQSxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsT0FBWjtBQUNEOztBQUVELFNBQU9GLElBQVA7QUFDRDtBQUVELE9BQU8sU0FBU0csY0FBVCxDQUF3QkMsTUFBeEIsRUFBZ0M7QUFDckMsTUFBSUEsTUFBTSxDQUFDQyxRQUFQLEtBQW9CQyxJQUFJLENBQUNDLFNBQTdCLEVBQXdDO0FBQ3RDLFFBQUlDLEtBQUssR0FBR0osTUFBTSxDQUFDSyxVQUFQLENBQWtCLENBQWxCLENBQVo7O0FBQ0EsV0FBT0QsS0FBUCxFQUFjO0FBQ1pKLE1BQUFBLE1BQU0sQ0FBQ00sV0FBUCxDQUFtQkYsS0FBbkI7QUFDQUEsTUFBQUEsS0FBSyxHQUFHSixNQUFNLENBQUNLLFVBQVAsQ0FBa0IsQ0FBbEIsQ0FBUjtBQUNEO0FBQ0YsR0FORCxNQU1PO0FBQ0wsUUFBTVIsSUFBSSxHQUFHUixPQUFPLENBQUNDLEdBQVIsQ0FBWVUsTUFBWixDQUFiOztBQUVBLFFBQUlILElBQUksQ0FBQ1UsU0FBVCxFQUFvQjtBQUNsQixVQUFNVCxPQUFPLEdBQUdILGNBQWMsQ0FBQ0UsSUFBSSxDQUFDQyxPQUFOLENBQTlCO0FBRUEsVUFBSUYsSUFBSSxHQUFHQyxJQUFJLENBQUNVLFNBQWhCO0FBQ0EsVUFBTUMsZUFBZSxHQUFHVixPQUFPLENBQUNXLFdBQWhDOztBQUVBLGFBQU9iLElBQVAsRUFBYTtBQUNYLFlBQU1hLFdBQVcsR0FBR2IsSUFBSSxDQUFDYSxXQUF6QjtBQUNBYixRQUFBQSxJQUFJLENBQUNjLFVBQUwsQ0FBZ0JKLFdBQWhCLENBQTRCVixJQUE1QjtBQUNBQSxRQUFBQSxJQUFJLEdBQUdhLFdBQVcsS0FBS0QsZUFBaEIsSUFBbUNDLFdBQTFDO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtYXAgPSBuZXcgV2Vha01hcCgpO1xuZXhwb3J0IGNvbnN0IGRhdGFNYXAgPSB7XG4gIGdldChrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlID0gbWFwLmdldChrZXkpO1xuICAgIGlmICh2YWx1ZSkgcmV0dXJuIHZhbHVlO1xuXG4gICAgaWYgKGRlZmF1bHRWYWx1ZSkge1xuICAgICAgbWFwLnNldChrZXksIGRlZmF1bHRWYWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgfSxcbiAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICBtYXAuc2V0KGtleSwgdmFsdWUpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZW1wbGF0ZUVuZChub2RlKSB7XG4gIGxldCBkYXRhO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uZC1hc3NpZ25cbiAgd2hpbGUgKG5vZGUgJiYgKGRhdGEgPSBkYXRhTWFwLmdldChub2RlKSkgJiYgZGF0YS5lbmROb2RlKSB7XG4gICAgbm9kZSA9IGRhdGEuZW5kTm9kZTtcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGVtcGxhdGUodGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQubm9kZVR5cGUgIT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgbGV0IGNoaWxkID0gdGFyZ2V0LmNoaWxkTm9kZXNbMF07XG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICB0YXJnZXQucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgY2hpbGQgPSB0YXJnZXQuY2hpbGROb2Rlc1swXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZGF0YSA9IGRhdGFNYXAuZ2V0KHRhcmdldCk7XG5cbiAgICBpZiAoZGF0YS5zdGFydE5vZGUpIHtcbiAgICAgIGNvbnN0IGVuZE5vZGUgPSBnZXRUZW1wbGF0ZUVuZChkYXRhLmVuZE5vZGUpO1xuXG4gICAgICBsZXQgbm9kZSA9IGRhdGEuc3RhcnROb2RlO1xuICAgICAgY29uc3QgbGFzdE5leHRTaWJsaW5nID0gZW5kTm9kZS5uZXh0U2libGluZztcblxuICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgY29uc3QgbmV4dFNpYmxpbmcgPSBub2RlLm5leHRTaWJsaW5nO1xuICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgIG5vZGUgPSBuZXh0U2libGluZyAhPT0gbGFzdE5leHRTaWJsaW5nICYmIG5leHRTaWJsaW5nO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19

  var arrayMap = new WeakMap();

  function movePlaceholder(target, previousSibling) {
    var data = dataMap.get(target);
    var startNode = data.startNode;
    var endNode = getTemplateEnd(data.endNode);
    previousSibling.parentNode.insertBefore(target, previousSibling.nextSibling);
    var prevNode = target;
    var node = startNode;

    while (node) {
      var nextNode = node.nextSibling;
      prevNode.parentNode.insertBefore(node, prevNode.nextSibling);
      prevNode = node;
      node = nextNode !== endNode.nextSibling && nextNode;
    }
  }

  function resolveArray(host, target, value, resolveValue) {
    var lastEntries = arrayMap.get(target);
    var entries = value.map(function (item, index) {
      return {
        id: Object.prototype.hasOwnProperty.call(item, "id") ? item.id : index,
        value: item,
        placeholder: null,
        available: true
      };
    });
    arrayMap.set(target, entries);

    if (lastEntries) {
      var ids = new Set();
      entries.forEach(function (entry) {
        return ids.add(entry.id);
      });
      lastEntries = lastEntries.filter(function (entry) {
        if (!ids.has(entry.id)) {
          removeTemplate(entry.placeholder);
          entry.placeholder.parentNode.removeChild(entry.placeholder);
          return false;
        }

        return true;
      });
    }

    var previousSibling = target;
    var lastIndex = value.length - 1;
    var data = dataMap.get(target);

    for (var index = 0; index < entries.length; index += 1) {
      var entry = entries[index];
      var matchedEntry = void 0;

      if (lastEntries) {
        for (var i = 0; i < lastEntries.length; i += 1) {
          if (lastEntries[i].available && lastEntries[i].id === entry.id) {
            matchedEntry = lastEntries[i];
            break;
          }
        }
      }

      var placeholder = void 0;

      if (matchedEntry) {
        matchedEntry.available = false;
        placeholder = matchedEntry.placeholder;

        if (placeholder.previousSibling !== previousSibling) {
          movePlaceholder(placeholder, previousSibling);
        }

        if (matchedEntry.value !== entry.value) {
          resolveValue(host, placeholder, entry.value);
        }
      } else {
        placeholder = document.createTextNode("");
        previousSibling.parentNode.insertBefore(placeholder, previousSibling.nextSibling);
        resolveValue(host, placeholder, entry.value);
      }

      previousSibling = getTemplateEnd(dataMap.get(placeholder).endNode || placeholder);
      if (index === 0) data.startNode = placeholder;
      if (index === lastIndex) data.endNode = previousSibling;
      entry.placeholder = placeholder;
    }

    if (lastEntries) {
      lastEntries.forEach(function (entry) {
        if (entry.available) {
          removeTemplate(entry.placeholder);
          entry.placeholder.parentNode.removeChild(entry.placeholder);
        }
      });
    }
  }
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvYXJyYXkuanMiXSwibmFtZXMiOlsiZGF0YU1hcCIsInJlbW92ZVRlbXBsYXRlIiwiZ2V0VGVtcGxhdGVFbmQiLCJhcnJheU1hcCIsIldlYWtNYXAiLCJtb3ZlUGxhY2Vob2xkZXIiLCJ0YXJnZXQiLCJwcmV2aW91c1NpYmxpbmciLCJkYXRhIiwiZ2V0Iiwic3RhcnROb2RlIiwiZW5kTm9kZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsInByZXZOb2RlIiwibm9kZSIsIm5leHROb2RlIiwicmVzb2x2ZUFycmF5IiwiaG9zdCIsInZhbHVlIiwicmVzb2x2ZVZhbHVlIiwibGFzdEVudHJpZXMiLCJlbnRyaWVzIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWQiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJwbGFjZWhvbGRlciIsImF2YWlsYWJsZSIsInNldCIsImlkcyIsIlNldCIsImZvckVhY2giLCJlbnRyeSIsImFkZCIsImZpbHRlciIsImhhcyIsInJlbW92ZUNoaWxkIiwibGFzdEluZGV4IiwibGVuZ3RoIiwibWF0Y2hlZEVudHJ5IiwiaSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLE9BQVQsRUFBa0JDLGNBQWxCLEVBQWtDQyxjQUFsQyxRQUF3RCxhQUF4RDtBQUVBLE9BQU8sSUFBTUMsUUFBUSxHQUFHLElBQUlDLE9BQUosRUFBakI7O0FBRVAsU0FBU0MsZUFBVCxDQUF5QkMsTUFBekIsRUFBaUNDLGVBQWpDLEVBQWtEO0FBQ2hELE1BQU1DLElBQUksR0FBR1IsT0FBTyxDQUFDUyxHQUFSLENBQVlILE1BQVosQ0FBYjtBQUNBLE1BQU1JLFNBQVMsR0FBR0YsSUFBSSxDQUFDRSxTQUF2QjtBQUNBLE1BQU1DLE9BQU8sR0FBR1QsY0FBYyxDQUFDTSxJQUFJLENBQUNHLE9BQU4s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SUFBSSxDQUFDRSxTQUFMLEdBQWlCc0IsV0FBakI7QUFDakIsUUFBSU4sS0FBSyxLQUFLaUIsU0FBZCxFQUF5Qm5DLElBQUksQ0FBQ0csT0FBTCxHQUFlSixlQUFmO0FBRXpCK0IsSUFBQUEsS0FBSyxDQUFDTixXQUFOLEdBQW9CQSxXQUFwQjtBQUNEOztBQUVELE1BQUlWLFdBQUosRUFBaUI7QUFDZkEsSUFBQUEsV0FBVyxDQUFDZSxPQUFaLENBQW9CLFVBQUFDLEtBQUssRUFBSTtBQUMzQixVQUFJQSxLQUFLLENBQUNMLFNBQVYsRUFBcUI7QUFDbkJoQyxRQUFBQSxjQUFjLENBQUNxQyxLQUFLLENBQUNOLFdBQVAsQ0FBZDtBQUNBTSxRQUFBQSxLQUFLLENBQUNOLFdBQU4sQ0FBa0JwQixVQUFsQixDQUE2QjhCLFdBQTdCLENBQXlDSixLQUFLLENBQUNOLFdBQS9DO0FBQ0Q7QUFDRixLQUxEO0FBTUQ7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRhdGFNYXAsIHJlbW92ZVRlbXBsYXRlLCBnZXRUZW1wbGF0ZUVuZCB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuXG5leHBvcnQgY29uc3QgYXJyYXlNYXAgPSBuZXcgV2Vha01hcCgpO1xuXG5mdW5jdGlvbiBtb3ZlUGxhY2Vob2xkZXIodGFyZ2V0LCBwcmV2aW91c1NpYmxpbmcpIHtcbiAgY29uc3QgZGF0YSA9IGRhdGFNYXAuZ2V0KHRhcmdldCk7XG4gIGNvbnN0IHN0YXJ0Tm9kZSA9IGRhdGEuc3RhcnROb2RlO1xuICBjb25zdCBlbmROb2RlID0gZ2V0VGVtcGxhdGVFbmQoZGF0YS5lbmROb2RlKTtcblxuICBwcmV2aW91c1NpYmxpbmcucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGFyZ2V0LCBwcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcpO1xuXG4gIGxldCBwcmV2Tm9kZSA9IHRhcmdldDtcbiAgbGV0IG5vZGUgPSBzdGFydE5vZGU7XG4gIHdoaWxlIChub2RlKSB7XG4gICAgY29uc3QgbmV4dE5vZGUgPSBub2RlLm5leHRTaWJsaW5nO1xuICAgIHByZXZOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIHByZXZOb2RlLm5leHRTaWJsaW5nKTtcbiAgICBwcmV2Tm9kZSA9IG5vZGU7XG4gICAgbm9kZSA9IG5leHROb2RlICE9PSBlbmROb2RlLm5leHRTaWJsaW5nICYmIG5leHROb2RlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVBcnJheShob3N0LCB0YXJnZXQsIHZhbHVlLCByZXNvbHZlVmFsdWUpIHtcbiAgbGV0IGxhc3RFbnRyaWVzID0gYXJyYXlNYXAuZ2V0KHRhcmdldCk7XG4gIGNvbnN0IGVudHJpZXMgPSB2YWx1ZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoe1xuICAgIGlkOiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaXRlbSwgXCJpZFwiKSA/IGl0ZW0uaWQgOiBpbmRleCxcbiAgICB2YWx1ZTogaXRlbSxcbiAgICBwbGFjZWhvbGRlcjogbnVsbCxcbiAgICBhdmFpbGFibGU6IHRydWUsXG4gIH0pKTtcblxuICBhcnJheU1hcC5zZXQodGFyZ2V0LCBlbnRyaWVzKTtcblxuICBpZiAobGFzdEVudHJpZXMpIHtcbiAgICBjb25zdCBpZHMgPSBuZXcgU2V0KCk7XG4gICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IGlkcy5hZGQoZW50cnkuaWQpKTtcblxuICAgIGxhc3RFbnRyaWVzID0gbGFzdEVudHJpZXMuZmlsdGVyKGVudHJ5ID0+IHtcbiAgICAgIGlmICghaWRzLmhhcyhlbnRyeS5pZCkpIHtcbiAgICAgICAgcmVtb3ZlVGVtcGxhdGUoZW50cnkucGxhY2Vob2xkZXIpO1xuICAgICAgICBlbnRyeS5wbGFjZWhvbGRlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVudHJ5LnBsYWNlaG9sZGVyKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGxldCBwcmV2aW91c1NpYmxpbmcgPSB0YXJnZXQ7XG4gIGNvbnN0IGxhc3RJbmRleCA9IHZhbHVlLmxlbmd0aCAtIDE7XG4gIGNvbnN0IGRhdGEgPSBkYXRhTWFwLmdldCh0YXJnZXQpO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbnRyaWVzLmxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIGNvbnN0IGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgbGV0IG1hdGNoZWRFbnRyeTtcbiAgICBpZiAobGFzdEVudHJpZXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFzdEVudHJpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGxhc3RFbnRyaWVzW2ldLmF2YWlsYWJsZSAmJiBsYXN0RW50cmllc1tpXS5pZCA9PT0gZW50cnkuaWQpIHtcbiAgICAgICAgICBtYXRjaGVkRW50cnkgPSBsYXN0RW50cmllc1tpXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBwbGFjZWhvbGRlcjtcbiAgICBpZiAobWF0Y2hlZEVudHJ5KSB7XG4gICAgICBtYXRjaGVkRW50cnkuYXZhaWxhYmxlID0gZmFsc2U7XG4gICAgICBwbGFjZWhvbGRlciA9IG1hdGNoZWRFbnRyeS5wbGFjZWhvbGRlcjtcblxuICAgICAgaWYgKHBsYWNlaG9sZGVyLnByZXZpb3VzU2libGluZyAhPT0gcHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgIG1vdmVQbGFjZWhvbGRlcihwbGFjZWhvbGRlciwgcHJldmlvdXNTaWJsaW5nKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXRjaGVkRW50cnkudmFsdWUgIT09IGVudHJ5LnZhbHVlKSB7XG4gICAgICAgIHJlc29sdmVWYWx1ZShob3N0LCBwbGFjZWhvbGRlciwgZW50cnkudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO1xuICAgICAgcHJldmlvdXNTaWJsaW5nLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKFxuICAgICAgICBwbGFjZWhvbGRlcixcbiAgICAgICAgcHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nLFxuICAgICAgKTtcbiAgICAgIHJlc29sdmVWYWx1ZShob3N0LCBwbGFjZWhvbGRlciwgZW50cnkudmFsdWUpO1xuICAgIH1cblxuICAgIHByZXZpb3VzU2libGluZyA9IGdldFRlbXBsYXRlRW5kKFxuICAgICAgZGF0YU1hcC5nZXQocGxhY2Vob2xkZXIpLmVuZE5vZGUgfHwgcGxhY2Vob2xkZXIsXG4gICAgKTtcblxuICAgIGlmIChpbmRleCA9PT0gMCkgZGF0YS5zdGFydE5vZGUgPSBwbGFjZWhvbGRlcjtcbiAgICBpZiAoaW5kZXggPT09IGxhc3RJbmRleCkgZGF0YS5lbmROb2RlID0gcHJldmlvdXNTaWJsaW5nO1xuXG4gICAgZW50cnkucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgfVxuXG4gIGlmIChsYXN0RW50cmllcykge1xuICAgIGxhc3RFbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgaWYgKGVudHJ5LmF2YWlsYWJsZSkge1xuICAgICAgICByZW1vdmVUZW1wbGF0ZShlbnRyeS5wbGFjZWhvbGRlcik7XG4gICAgICAgIGVudHJ5LnBsYWNlaG9sZGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZW50cnkucGxhY2Vob2xkZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=

  function _typeof$3(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$3 = function _typeof(obj) { return typeof obj; }; } else { _typeof$3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$3(obj); }
  function resolveValue(host, target, value) {
    var type = Array.isArray(value) ? "array" : _typeof$3(value);
    var data = dataMap.get(target, {});

    if (data.type !== type) {
      removeTemplate(target);
      if (type === "array") arrayMap.delete(target);
      data = dataMap.set(target, {
        type: type
      });

      if (target.textContent !== "") {
        target.textContent = "";
      }
    }

    switch (type) {
      case "function":
        value(host, target);
        break;

      case "array":
        resolveArray(host, target, value, resolveValue);
        break;

      default:
        target.textContent = type === "number" || value ? value : "";
    }
  }
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvdmFsdWUuanMiXSwibmFtZXMiOlsiZGF0YU1hcCIsInJlbW92ZVRlbXBsYXRlIiwicmVzb2x2ZUFycmF5IiwiYXJyYXlNYXAiLCJyZXNvbHZlVmFsdWUiLCJob3N0IiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwiQXJyYXkiLCJpc0FycmF5IiwiZGF0YSIsImdldCIsImRlbGV0ZSIsInNldCIsInRleHRDb250ZW50Il0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLE9BQVQsRUFBa0JDLGNBQWxCLFFBQXdDLGFBQXhDO0FBQ0EsT0FBT0MsWUFBUCxJQUF1QkMsUUFBdkIsUUFBdUMsWUFBdkM7QUFFQSxlQUFlLFNBQVNDLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCQyxNQUE1QixFQUFvQ0MsS0FBcEMsRUFBMkM7QUFDeEQsTUFBTUMsSUFBSSxHQUFHQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0gsS0FBZCxJQUF1QixPQUF2QixXQUF3Q0EsS0FBeEMsQ0FBYjtBQUNBLE1BQUlJLElBQUksR0FBR1gsT0FBTyxDQUFDWSxHQUFSLENBQVlOLE1BQVosRUFBb0IsRUFBcEIsQ0FBWDs7QUFFQSxNQUFJSyxJQUFJLENBQUNILElBQUwsS0FBY0EsSUFBbEIsRUFBd0I7QUFDdEJQLElBQUFBLGNBQWMsQ0FBQ0ssTUFBRCxDQUFkO0FBQ0EsUUFBSUUsSUFBSSxLQUFLLE9BQWIsRUFBc0JMLFFBQVEsQ0FBQ1UsTUFBVCxDQUFnQlAsTUFBaEI7QUFFdEJLLElBQUFBLElBQUksR0FBR1gsT0FBTyxDQUFDYyxHQUFSLENBQVlSLE1BQVosRUFBb0I7QUFBRUUsTUFBQUEsSUFBSSxFQUFKQTtBQUFGLEtBQXBCLENBQVA7O0FBRUEsUUFBSUYsTUFBTSxDQUFDUyxXQUFQLEtBQXVCLEVBQTNCLEVBQStCO0FBQzdCVCxNQUFBQSxNQUFNLENBQUNTLFdBQVAsR0FBcUIsRUFBckI7QUFDRDtBQUNGOztBQUVELFVBQVFQLElBQVI7QUFDRSxTQUFLLFVBQUw7QUFDRUQsTUFBQUEsS0FBSyxDQUFDRixJQUFELEVBQU9DLE1BQVAsQ0FBTDtBQUNBOztBQUNGLFNBQUssT0FBTDtBQUNFSixNQUFBQSxZQUFZLENBQUNHLElBQUQsRUFBT0MsTUFBUCxFQUFlQyxLQUFmLEVBQXNCSCxZQUF0QixDQUFaO0FBQ0E7O0FBQ0Y7QUFDRUUsTUFBQUEsTUFBTSxDQUFDUyxXQUFQLEdBQXFCUCxJQUFJLEtBQUssUUFBVCxJQUFxQkQsS0FBckIsR0FBNkJBLEtBQTdCLEdBQXFDLEVBQTFEO0FBUko7QUFVRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRhdGFNYXAsIHJlbW92ZVRlbXBsYXRlIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XG5pbXBvcnQgcmVzb2x2ZUFycmF5LCB7IGFycmF5TWFwIH0gZnJvbSBcIi4vYXJyYXkuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVZhbHVlKGhvc3QsIHRhcmdldCwgdmFsdWUpIHtcbiAgY29uc3QgdHlwZSA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gXCJhcnJheVwiIDogdHlwZW9mIHZhbHVlO1xuICBsZXQgZGF0YSA9IGRhdGFNYXAuZ2V0KHRhcmdldCwge30pO1xuXG4gIGlmIChkYXRhLnR5cGUgIT09IHR5cGUpIHtcbiAgICByZW1vdmVUZW1wbGF0ZSh0YXJnZXQpO1xuICAgIGlmICh0eXBlID09PSBcImFycmF5XCIpIGFycmF5TWFwLmRlbGV0ZSh0YXJnZXQpO1xuXG4gICAgZGF0YSA9IGRhdGFNYXAuc2V0KHRhcmdldCwgeyB0eXBlIH0pO1xuXG4gICAgaWYgKHRhcmdldC50ZXh0Q29udGVudCAhPT0gXCJcIikge1xuICAgICAgdGFyZ2V0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFwiZnVuY3Rpb25cIjpcbiAgICAgIHZhbHVlKGhvc3QsIHRhcmdldCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYXJyYXlcIjpcbiAgICAgIHJlc29sdmVBcnJheShob3N0LCB0YXJnZXQsIHZhbHVlLCByZXNvbHZlVmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRhcmdldC50ZXh0Q29udGVudCA9IHR5cGUgPT09IFwibnVtYmVyXCIgfHwgdmFsdWUgPyB2YWx1ZSA6IFwiXCI7XG4gIH1cbn1cbiJdfQ==

  function _typeof$4(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$4 = function _typeof(obj) { return typeof obj; }; } else { _typeof$4 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$4(obj); }

  var targets = new WeakMap();
  function resolveEventListener(eventType) {
    return function (host, target, value, lastValue) {
      if (lastValue) {
        var eventMap = targets.get(target);

        if (eventMap) {
          target.removeEventListener(eventType, eventMap.get(lastValue), lastValue.options !== undefined ? lastValue.options : false);
        }
      }

      if (value) {
        if (typeof value !== "function") {
          throw Error("Event listener must be a function: ".concat(_typeof$4(value)));
        }

        var _eventMap = targets.get(target);

        if (!_eventMap) {
          _eventMap = new WeakMap();
          targets.set(target, _eventMap);
        }

        var callback = value.bind(null, host);

        _eventMap.set(value, callback);

        target.addEventListener(eventType, callback, value.options !== undefined ? value.options : false);
      }
    };
  }
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvZXZlbnQuanMiXSwibmFtZXMiOlsidGFyZ2V0cyIsIldlYWtNYXAiLCJyZXNvbHZlRXZlbnRMaXN0ZW5lciIsImV2ZW50VHlwZSIsImhvc3QiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxhc3RWYWx1ZSIsImV2ZW50TWFwIiwiZ2V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9wdGlvbnMiLCJ1bmRlZmluZWQiLCJFcnJvciIsInNldCIsImNhbGxiYWNrIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsT0FBTyxHQUFHLElBQUlDLE9BQUosRUFBaEI7QUFFQSxlQUFlLFNBQVNDLG9CQUFULENBQThCQyxTQUE5QixFQUF5QztBQUN0RCxTQUFPLFVBQUNDLElBQUQsRUFBT0MsTUFBUCxFQUFlQyxLQUFmLEVBQXNCQyxTQUF0QixFQUFvQztBQUN6QyxRQUFJQSxTQUFKLEVBQWU7QUFDYixVQUFNQyxRQUFRLEdBQUdSLE9BQU8sQ0FBQ1MsR0FBUixDQUFZSixNQUFaLENBQWpCOztBQUNBLFVBQUlHLFFBQUosRUFBYztBQUNaSCxRQUFBQSxNQUFNLENBQUNLLG1CQUFQLENBQ0VQLFNBREYsRUFFRUssUUFBUSxDQUFDQyxHQUFULENBQWFGLFNBQWIsQ0FGRixFQUdFQSxTQUFTLENBQUNJLE9BQVYsS0FBc0JDLFNBQXRCLEdBQWtDTCxTQUFTLENBQUNJLE9BQTVDLEdBQXNELEtBSHhEO0FBS0Q7QUFDRjs7QUFFRCxRQUFJTCxLQUFKLEVBQVc7QUFDVCxVQUFJLE9BQU9BLEtBQVAsS0FBaUIsVUFBckIsRUFBaUM7QUFDL0IsY0FBTU8sS0FBSyxzREFBOENQLEtBQTlDLEdBQVg7QUFDRDs7QUFFRCxVQUFJRSxTQUFRLEdBQUdSLE9BQU8sQ0FBQ1MsR0FBUixDQUFZSixNQUFaLENBQWY7O0FBQ0EsVUFBSSxDQUFDRyxTQUFMLEVBQWU7QUFDYkEsUUFBQUEsU0FBUSxHQUFHLElBQUlQLE9BQUosRUFBWDtBQUNBRCxRQUFBQSxPQUFPLENBQUNjLEdBQVIsQ0FBWVQsTUFBWixFQUFvQkcsU0FBcEI7QUFDRDs7QUFFRCxVQUFNTyxRQUFRLEdBQUdULEtBQUssQ0FBQ1UsSUFBTixDQUFXLElBQVgsRUFBaUJaLElBQWpCLENBQWpCOztBQUNBSSxNQUFBQSxTQUFRLENBQUNNLEdBQVQsQ0FBYVIsS0FBYixFQUFvQlMsUUFBcEI7O0FBRUFWLE1BQUFBLE1BQU0sQ0FBQ1ksZ0JBQVAsQ0FDRWQsU0FERixFQUVFWSxRQUZGLEVBR0VULEtBQUssQ0FBQ0ssT0FBTixLQUFrQkMsU0FBbEIsR0FBOEJOLEtBQUssQ0FBQ0ssT0FBcEMsR0FBOEMsS0FIaEQ7QUFLRDtBQUNGLEdBaENEO0FBaUNEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGFyZ2V0cyA9IG5ldyBXZWFrTWFwKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSkge1xuICByZXR1cm4gKGhvc3QsIHRhcmdldCwgdmFsdWUsIGxhc3RWYWx1ZSkgPT4ge1xuICAgIGlmIChsYXN0VmFsdWUpIHtcbiAgICAgIGNvbnN0IGV2ZW50TWFwID0gdGFyZ2V0cy5nZXQodGFyZ2V0KTtcbiAgICAgIGlmIChldmVudE1hcCkge1xuICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBldmVudFR5cGUsXG4gICAgICAgICAgZXZlbnRNYXAuZ2V0KGxhc3RWYWx1ZSksXG4gICAgICAgICAgbGFzdFZhbHVlLm9wdGlvbnMgIT09IHVuZGVmaW5lZCA/IGxhc3RWYWx1ZS5vcHRpb25zIDogZmFsc2UsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYEV2ZW50IGxpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbjogJHt0eXBlb2YgdmFsdWV9YCk7XG4gICAgICB9XG5cbiAgICAgIGxldCBldmVudE1hcCA9IHRhcmdldHMuZ2V0KHRhcmdldCk7XG4gICAgICBpZiAoIWV2ZW50TWFwKSB7XG4gICAgICAgIGV2ZW50TWFwID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgdGFyZ2V0cy5zZXQodGFyZ2V0LCBldmVudE1hcCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gdmFsdWUuYmluZChudWxsLCBob3N0KTtcbiAgICAgIGV2ZW50TWFwLnNldCh2YWx1ZSwgY2FsbGJhY2spO1xuXG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgZXZlbnRUeXBlLFxuICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgdmFsdWUub3B0aW9ucyAhPT0gdW5kZWZpbmVkID8gdmFsdWUub3B0aW9ucyA6IGZhbHNlLFxuICAgICAgKTtcbiAgICB9XG4gIH07XG59XG4iXX0=

  function _typeof$5(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$5 = function _typeof(obj) { return typeof obj; }; } else { _typeof$5 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$5(obj); }

  function normalizeValue(value) {
    var set = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set();

    if (Array.isArray(value)) {
      value.forEach(function (className) {
        return set.add(className);
      });
    } else if (value !== null && _typeof$5(value) === "object") {
      Object.keys(value).forEach(function (key) {
        return value[key] && set.add(key);
      });
    } else {
      set.add(value);
    }

    return set;
  }

  var classMap = new WeakMap();
  function resolveClassList(host, target, value) {
    var previousList = classMap.get(target) || new Set();
    var list = normalizeValue(value);
    classMap.set(target, list);
    list.forEach(function (className) {
      target.classList.add(className);
      previousList.delete(className);
    });
    previousList.forEach(function (className) {
      target.classList.remove(className);
    });
  }
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvY2xhc3MuanMiXSwibmFtZXMiOlsibm9ybWFsaXplVmFsdWUiLCJ2YWx1ZSIsInNldCIsIlNldCIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJjbGFzc05hbWUiLCJhZGQiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiY2xhc3NNYXAiLCJXZWFrTWFwIiwicmVzb2x2ZUNsYXNzTGlzdCIsImhvc3QiLCJ0YXJnZXQiLCJwcmV2aW91c0xpc3QiLCJnZXQiLCJsaXN0IiwiY2xhc3NMaXN0IiwiZGVsZXRlIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQWdEO0FBQUEsTUFBakJDLEdBQWlCLHVFQUFYLElBQUlDLEdBQUosRUFBVzs7QUFDOUMsTUFBSUMsS0FBSyxDQUFDQyxPQUFOLENBQWNKLEtBQWQsQ0FBSixFQUEwQjtBQUN4QkEsSUFBQUEsS0FBSyxDQUFDSyxPQUFOLENBQWMsVUFBQUMsU0FBUztBQUFBLGFBQUlMLEdBQUcsQ0FBQ00sR0FBSixDQUFRRCxTQUFSLENBQUo7QUFBQSxLQUF2QjtBQUNELEdBRkQsTUFFTyxJQUFJTixLQUFLLEtBQUssSUFBVixJQUFrQixRQUFPQSxLQUFQLE1BQWlCLFFBQXZDLEVBQWlEO0FBQ3REUSxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWVQsS0FBWixFQUFtQkssT0FBbkIsQ0FBMkIsVUFBQUssR0FBRztBQUFBLGFBQUlWLEtBQUssQ0FBQ1UsR0FBRCxDQUFMLElBQWNULEdBQUcsQ0FBQ00sR0FBSixDQUFRRyxHQUFSLENBQWxCO0FBQUEsS0FBOUI7QUFDRCxHQUZNLE1BRUE7QUFDTFQsSUFBQUEsR0FBRyxDQUFDTSxHQUFKLENBQVFQLEtBQVI7QUFDRDs7QUFFRCxTQUFPQyxHQUFQO0FBQ0Q7O0FBRUQsSUFBTVUsUUFBUSxHQUFHLElBQUlDLE9BQUosRUFBakI7QUFFQSxlQUFlLFNBQVNDLGdCQUFULENBQTBCQyxJQUExQixFQUFnQ0MsTUFBaEMsRUFBd0NmLEtBQXhDLEVBQStDO0FBQzVELE1BQU1nQixZQUFZLEdBQUdMLFFBQVEsQ0FBQ00sR0FBVCxDQUFhRixNQUFiLEtBQXdCLElBQUliLEdBQUosRUFBN0M7QUFDQSxNQUFNZ0IsSUFBSSxHQUFHbkIsY0FBYyxDQUFDQyxLQUFELENBQTNCO0FBRUFXLEVBQUFBLFFBQVEsQ0FBQ1YsR0FBVCxDQUFhYyxNQUFiLEVBQXFCRyxJQUFyQjtBQUVBQSxFQUFBQSxJQUFJLENBQUNiLE9BQUwsQ0FBYSxVQUFBQyxTQUFTLEVBQUk7QUFDeEJTLElBQUFBLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQlosR0FBakIsQ0FBcUJELFNBQXJCO0FBQ0FVLElBQUFBLFlBQVksQ0FBQ0ksTUFBYixDQUFvQmQsU0FBcEI7QUFDRCxHQUhEO0FBS0FVLEVBQUFBLFlBQVksQ0FBQ1gsT0FBYixDQUFxQixVQUFBQyxTQUFTLEVBQUk7QUFDaENTLElBQUFBLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQkUsTUFBakIsQ0FBd0JmLFNBQXhCO0FBQ0QsR0FGRDtBQUdEIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUsIHNldCA9IG5ldyBTZXQoKSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKGNsYXNzTmFtZSA9PiBzZXQuYWRkKGNsYXNzTmFtZSkpO1xuICB9IGVsc2UgaWYgKHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKGtleSA9PiB2YWx1ZVtrZXldICYmIHNldC5hZGQoa2V5KSk7XG4gIH0gZWxzZSB7XG4gICAgc2V0LmFkZCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gc2V0O1xufVxuXG5jb25zdCBjbGFzc01hcCA9IG5ldyBXZWFrTWFwKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVDbGFzc0xpc3QoaG9zdCwgdGFyZ2V0LCB2YWx1ZSkge1xuICBjb25zdCBwcmV2aW91c0xpc3QgPSBjbGFzc01hcC5nZXQodGFyZ2V0KSB8fCBuZXcgU2V0KCk7XG4gIGNvbnN0IGxpc3QgPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG5cbiAgY2xhc3NNYXAuc2V0KHRhcmdldCwgbGlzdCk7XG5cbiAgbGlzdC5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBwcmV2aW91c0xpc3QuZGVsZXRlKGNsYXNzTmFtZSk7XG4gIH0pO1xuXG4gIHByZXZpb3VzTGlzdC5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfSk7XG59XG4iXX0=

  function _typeof$6(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$6 = function _typeof(obj) { return typeof obj; }; } else { _typeof$6 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$6(obj); }
  var styleMap = new WeakMap();
  function resolveStyle(host, target, value) {
    if (value === null || _typeof$6(value) !== "object") {
      throw TypeError("Style value must be an object in ".concat(stringifyElement(target), ":"), value);
    }

    var previousMap = styleMap.get(target) || new Map();
    var nextMap = Object.keys(value).reduce(function (map, key) {
      var dashKey = camelToDash(key);
      var styleValue = value[key];

      if (!styleValue && styleValue !== 0) {
        target.style.removeProperty(dashKey);
      } else {
        target.style.setProperty(dashKey, styleValue);
      }

      map.set(dashKey, styleValue);
      previousMap.delete(dashKey);
      return map;
    }, new Map());
    previousMap.forEach(function (styleValue, key) {
      target.style[key] = "";
    });
    styleMap.set(target, nextMap);
  }
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvc3R5bGUuanMiXSwibmFtZXMiOlsiY2FtZWxUb0Rhc2giLCJzdHJpbmdpZnlFbGVtZW50Iiwic3R5bGVNYXAiLCJXZWFrTWFwIiwicmVzb2x2ZVN0eWxlIiwiaG9zdCIsInRhcmdldCIsInZhbHVlIiwiVHlwZUVycm9yIiwicHJldmlvdXNNYXAiLCJnZXQiLCJNYXAiLCJuZXh0TWFwIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsIm1hcCIsImtleSIsImRhc2hLZXkiLCJzdHlsZVZhbHVlIiwic3R5bGUiLCJyZW1vdmVQcm9wZXJ0eSIsInNldFByb3BlcnR5Iiwic2V0IiwiZGVsZXRlIiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxXQUFULEVBQXNCQyxnQkFBdEIsUUFBOEMsZ0JBQTlDO0FBRUEsSUFBTUMsUUFBUSxHQUFHLElBQUlDLE9BQUosRUFBakI7QUFFQSxlQUFlLFNBQVNDLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCQyxNQUE1QixFQUFvQ0MsS0FBcEMsRUFBMkM7QUFDeEQsTUFBSUEsS0FBSyxLQUFLLElBQVYsSUFBa0IsUUFBT0EsS0FBUCxNQUFpQixRQUF2QyxFQUFpRDtBQUMvQyxVQUFNQyxTQUFTLDRDQUN1QlAsZ0JBQWdCLENBQUNLLE1BQUQsQ0FEdkMsUUFFYkMsS0FGYSxDQUFmO0FBSUQ7O0FBRUQsTUFBTUUsV0FBVyxHQUFHUCxRQUFRLENBQUNRLEdBQVQsQ0FBYUosTUFBYixLQUF3QixJQUFJSyxHQUFKLEVBQTVDO0FBRUEsTUFBTUMsT0FBTyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWVAsS0FBWixFQUFtQlEsTUFBbkIsQ0FBMEIsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDdEQsUUFBTUMsT0FBTyxHQUFHbEIsV0FBVyxDQUFDaUIsR0FBRCxDQUEzQjtBQUNBLFFBQU1FLFVBQVUsR0FBR1osS0FBSyxDQUFDVSxHQUFELENBQXhCOztBQUVBLFFBQUksQ0FBQ0UsVUFBRCxJQUFlQSxVQUFVLEtBQUssQ0FBbEMsRUFBcUM7QUFDbkNiLE1BQUFBLE1BQU0sQ0FBQ2MsS0FBUCxDQUFhQyxjQUFiLENBQTRCSCxPQUE1QjtBQUNELEtBRkQsTUFFTztBQUNMWixNQUFBQSxNQUFNLENBQUNjLEtBQVAsQ0FBYUUsV0FBYixDQUF5QkosT0FBekIsRUFBa0NDLFVBQWxDO0FBQ0Q7O0FBRURILElBQUFBLEdBQUcsQ0FBQ08sR0FBSixDQUFRTCxPQUFSLEVBQWlCQyxVQUFqQjtBQUNBVixJQUFBQSxXQUFXLENBQUNlLE1BQVosQ0FBbUJOLE9BQW5CO0FBRUEsV0FBT0YsR0FBUDtBQUNELEdBZGUsRUFjYixJQUFJTCxHQUFKLEVBZGEsQ0FBaEI7QUFnQkFGLEVBQUFBLFdBQVcsQ0FBQ2dCLE9BQVosQ0FBb0IsVUFBQ04sVUFBRCxFQUFhRixHQUFiLEVBQXFCO0FBQ3ZDWCxJQUFBQSxNQUFNLENBQUNjLEtBQVAsQ0FBYUgsR0FBYixJQUFvQixFQUFwQjtBQUNELEdBRkQ7QUFJQWYsRUFBQUEsUUFBUSxDQUFDcUIsR0FBVCxDQUFhakIsTUFBYixFQUFxQk0sT0FBckI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbWVsVG9EYXNoLCBzdHJpbmdpZnlFbGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzLmpzXCI7XG5cbmNvbnN0IHN0eWxlTWFwID0gbmV3IFdlYWtNYXAoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVN0eWxlKGhvc3QsIHRhcmdldCwgdmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIikge1xuICAgIHRocm93IFR5cGVFcnJvcihcbiAgICAgIGBTdHlsZSB2YWx1ZSBtdXN0IGJlIGFuIG9iamVjdCBpbiAke3N0cmluZ2lmeUVsZW1lbnQodGFyZ2V0KX06YCxcbiAgICAgIHZhbHVlLFxuICAgICk7XG4gIH1cblxuICBjb25zdCBwcmV2aW91c01hcCA9IHN0eWxlTWFwLmdldCh0YXJnZXQpIHx8IG5ldyBNYXAoKTtcblxuICBjb25zdCBuZXh0TWFwID0gT2JqZWN0LmtleXModmFsdWUpLnJlZHVjZSgobWFwLCBrZXkpID0+IHtcbiAgICBjb25zdCBkYXNoS2V5ID0gY2FtZWxUb0Rhc2goa2V5KTtcbiAgICBjb25zdCBzdHlsZVZhbHVlID0gdmFsdWVba2V5XTtcblxuICAgIGlmICghc3R5bGVWYWx1ZSAmJiBzdHlsZVZhbHVlICE9PSAwKSB7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoZGFzaEtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eShkYXNoS2V5LCBzdHlsZVZhbHVlKTtcbiAgICB9XG5cbiAgICBtYXAuc2V0KGRhc2hLZXksIHN0eWxlVmFsdWUpO1xuICAgIHByZXZpb3VzTWFwLmRlbGV0ZShkYXNoS2V5KTtcblxuICAgIHJldHVybiBtYXA7XG4gIH0sIG5ldyBNYXAoKSk7XG5cbiAgcHJldmlvdXNNYXAuZm9yRWFjaCgoc3R5bGVWYWx1ZSwga2V5KSA9PiB7XG4gICAgdGFyZ2V0LnN0eWxlW2tleV0gPSBcIlwiO1xuICB9KTtcblxuICBzdHlsZU1hcC5zZXQodGFyZ2V0LCBuZXh0TWFwKTtcbn1cbiJdfQ==

  function resolveProperty(attrName, propertyName, isSVG) {
    if (propertyName.substr(0, 2) === "on") {
      var eventType = propertyName.substr(2);
      return resolveEventListener(eventType);
    }

    switch (attrName) {
      case "class":
        return resolveClassList;

      case "style":
        return resolveStyle;

      default:
        return function (host, target, value) {
          if (!isSVG && !(target instanceof SVGElement) && propertyName in target) {
            if (target[propertyName] !== value) {
              target[propertyName] = value;
            }
          } else if (value === false || value === undefined || value === null) {
            target.removeAttribute(attrName);
          } else {
            var attrValue = value === true ? "" : String(value);
            target.setAttribute(attrName, attrValue);
          }
        };
    }
  }
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvcHJvcGVydHkuanMiXSwibmFtZXMiOlsicmVzb2x2ZUV2ZW50TGlzdGVuZXIiLCJyZXNvbHZlQ2xhc3NMaXN0IiwicmVzb2x2ZVN0eWxlTGlzdCIsInJlc29sdmVQcm9wZXJ0eSIsImF0dHJOYW1lIiwicHJvcGVydHlOYW1lIiwiaXNTVkciLCJzdWJzdHIiLCJldmVudFR5cGUiLCJob3N0IiwidGFyZ2V0IiwidmFsdWUiLCJTVkdFbGVtZW50IiwidW5kZWZpbmVkIiwicmVtb3ZlQXR0cmlidXRlIiwiYXR0clZhbHVlIiwiU3RyaW5nIiwic2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxvQkFBUCxNQUFpQyxZQUFqQztBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLFlBQTdCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsWUFBN0I7QUFFQSxlQUFlLFNBQVNDLGVBQVQsQ0FBeUJDLFFBQXpCLEVBQW1DQyxZQUFuQyxFQUFpREMsS0FBakQsRUFBd0Q7QUFDckUsTUFBSUQsWUFBWSxDQUFDRSxNQUFiLENBQW9CLENBQXBCLEVBQXVCLENBQXZCLE1BQThCLElBQWxDLEVBQXdDO0FBQ3RDLFFBQU1DLFNBQVMsR0FBR0gsWUFBWSxDQUFDRSxNQUFiLENBQW9CLENBQXBCLENBQWxCO0FBQ0EsV0FBT1Asb0JBQW9CLENBQUNRLFNBQUQsQ0FBM0I7QUFDRDs7QUFFRCxVQUFRSixRQUFSO0FBQ0UsU0FBSyxPQUFMO0FBQ0UsYUFBT0gsZ0JBQVA7O0FBQ0YsU0FBSyxPQUFMO0FBQ0UsYUFBT0MsZ0JBQVA7O0FBQ0Y7QUFDRSxhQUFPLFVBQUNPLElBQUQsRUFBT0MsTUFBUCxFQUFlQyxLQUFmLEVBQXlCO0FBQzlCLFlBQ0UsQ0FBQ0wsS0FBRCxJQUNBLEVBQUVJLE1BQU0sWUFBWUUsVUFBcEIsQ0FEQSxJQUVBUCxZQUFZLElBQUlLLE1BSGxCLEVBSUU7QUFDQSxjQUFJQSxNQUFNLENBQUNMLFlBQUQsQ0FBTixLQUF5Qk0sS0FBN0IsRUFBb0M7QUFDbENELFlBQUFBLE1BQU0sQ0FBQ0wsWUFBRCxDQUFOLEdBQXVCTSxLQUF2QjtBQUNEO0FBQ0YsU0FSRCxNQVFPLElBQUlBLEtBQUssS0FBSyxLQUFWLElBQW1CQSxLQUFLLEtBQUtFLFNBQTdCLElBQTBDRixLQUFLLEtBQUssSUFBeEQsRUFBOEQ7QUFDbkVELFVBQUFBLE1BQU0sQ0FBQ0ksZUFBUCxDQUF1QlYsUUFBdkI7QUFDRCxTQUZNLE1BRUE7QUFDTCxjQUFNVyxTQUFTLEdBQUdKLEtBQUssS0FBSyxJQUFWLEdBQWlCLEVBQWpCLEdBQXNCSyxNQUFNLENBQUNMLEtBQUQsQ0FBOUM7QUFDQUQsVUFBQUEsTUFBTSxDQUFDTyxZQUFQLENBQW9CYixRQUFwQixFQUE4QlcsU0FBOUI7QUFDRDtBQUNGLE9BZkQ7QUFOSjtBQXVCRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXNvbHZlRXZlbnRMaXN0ZW5lciBmcm9tIFwiLi9ldmVudC5qc1wiO1xuaW1wb3J0IHJlc29sdmVDbGFzc0xpc3QgZnJvbSBcIi4vY2xhc3MuanNcIjtcbmltcG9ydCByZXNvbHZlU3R5bGVMaXN0IGZyb20gXCIuL3N0eWxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVQcm9wZXJ0eShhdHRyTmFtZSwgcHJvcGVydHlOYW1lLCBpc1NWRykge1xuICBpZiAocHJvcGVydHlOYW1lLnN1YnN0cigwLCAyKSA9PT0gXCJvblwiKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gcHJvcGVydHlOYW1lLnN1YnN0cigyKTtcbiAgICByZXR1cm4gcmVzb2x2ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAoYXR0ck5hbWUpIHtcbiAgICBjYXNlIFwiY2xhc3NcIjpcbiAgICAgIHJldHVybiByZXNvbHZlQ2xhc3NMaXN0O1xuICAgIGNhc2UgXCJzdHlsZVwiOlxuICAgICAgcmV0dXJuIHJlc29sdmVTdHlsZUxpc3Q7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAoaG9zdCwgdGFyZ2V0LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIWlzU1ZHICYmXG4gICAgICAgICAgISh0YXJnZXQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSAmJlxuICAgICAgICAgIHByb3BlcnR5TmFtZSBpbiB0YXJnZXRcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKHRhcmdldFtwcm9wZXJ0eU5hbWVdICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5TmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IGZhbHNlIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSB2YWx1ZSA9PT0gdHJ1ZSA/IFwiXCIgOiBTdHJpbmcodmFsdWUpO1xuICAgICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gIH1cbn1cbiJdfQ==

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _typeof$7(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$7 = function _typeof(obj) { return typeof obj; }; } else { _typeof$7 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$7(obj); }
  /* istanbul ignore next */

  try {
    process$1.env.NODE_ENV;
  } catch (e) {
    var process$1 = {
      env: {
        NODE_ENV: 'production'
      }
    };
  } // eslint-disable-line


  var TIMESTAMP = Date.now();
  var getPlaceholder = function getPlaceholder() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return "{{h-".concat(TIMESTAMP, "-").concat(id, "}}");
  };
  var PLACEHOLDER_REGEXP_TEXT = getPlaceholder("(\\d+)");
  var PLACEHOLDER_REGEXP_EQUAL = new RegExp("^".concat(PLACEHOLDER_REGEXP_TEXT, "$"));
  var PLACEHOLDER_REGEXP_ALL = new RegExp(PLACEHOLDER_REGEXP_TEXT, "g");
  var ATTR_PREFIX = "--".concat(TIMESTAMP, "--");
  var ATTR_REGEXP = new RegExp(ATTR_PREFIX, "g");
  var preparedTemplates = new WeakMap();
  /* istanbul ignore next */

  function applyShadyCSS(template, tagName) {
    if (!tagName) return template;
    return shadyCSS(function (shady) {
      var map = preparedTemplates.get(template);

      if (!map) {
        map = new Map();
        preparedTemplates.set(template, map);
      }

      var clone = map.get(tagName);

      if (!clone) {
        clone = document.createElement("template");
        clone.content.appendChild(template.content.cloneNode(true));
        map.set(tagName, clone);
        var styles = clone.content.querySelectorAll("style");
        Array.from(styles).forEach(function (style) {
          var count = style.childNodes.length + 1;

          for (var i = 0; i < count; i += 1) {
            style.parentNode.insertBefore(document.createTextNode(getPlaceholder()), style);
          }
        });
        shady.prepareTemplate(clone, tagName.toLowerCase());
      }

      return clone;
    }, template);
  }

  function createSignature(parts, styles) {
    var signature = parts.reduce(function (acc, part, index) {
      if (index === 0) {
        return part;
      }

      if (parts.slice(index).join("").match(/^\s*<\/\s*(table|tr|thead|tbody|tfoot|colgroup)>/)) {
        return "".concat(acc, "<!--").concat(getPlaceholder(index - 1), "-->").concat(part);
      }

      return acc + getPlaceholder(index - 1) + part;
    }, "");

    if (styles) {
      signature += "<style>\n".concat(styles.join("\n/*------*/\n"), "\n</style>");
    }
    /* istanbul ignore if */


    if (IS_IE) {
      return signature.replace(/style\s*=\s*(["][^"]+["]|['][^']+[']|[^\s"'<>/]+)/g, function (match) {
        return "".concat(ATTR_PREFIX).concat(match);
      });
    }

    return signature;
  }

  function getPropertyName(string) {
    return string.replace(/\s*=\s*['"]*$/g, "").split(/\s+/).pop();
  }

  function replaceComments(fragment) {
    var iterator = document.createNodeIterator(fragment, NodeFilter.SHOW_COMMENT, null, false);
    var node; // eslint-disable-next-line no-cond-assign

    while (node = iterator.nextNode()) {
      if (PLACEHOLDER_REGEXP_EQUAL.test(node.textContent)) {
        node.parentNode.insertBefore(document.createTextNode(node.textContent), node);
        node.parentNode.removeChild(node);
      }
    }
  }

  function createInternalWalker(context) {
    var node;
    return {
      get currentNode() {
        return node;
      },

      nextNode: function nextNode() {
        if (node === undefined) {
          node = context.childNodes[0];
        } else if (node.childNodes.length) {
          node = node.childNodes[0];
        } else if (node.nextSibling) {
          node = node.nextSibling;
        } else {
          var parentNode = node.parentNode;
          node = parentNode.nextSibling;

          while (!node && parentNode !== context) {
            parentNode = parentNode.parentNode;
            node = parentNode.nextSibling;
          }
        }

        return !!node;
      }
    };
  }

  function createExternalWalker(context) {
    return document.createTreeWalker(context, // eslint-disable-next-line no-bitwise
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, false);
  }
  /* istanbul ignore next */


  var createWalker = _typeof$7(window.ShadyDOM) === "object" && window.ShadyDOM.inUse ? createInternalWalker : createExternalWalker;
  var container = document.createElement("div");
  var styleSheetsMap = new Map();
  function compileTemplate(rawParts, isSVG, styles) {
    var template = document.createElement("template");
    var parts = [];
    var signature = createSignature(rawParts, styles);
    if (isSVG) signature = "<svg>".concat(signature, "</svg>");
    /* istanbul ignore if */

    if (IS_IE) {
      template.innerHTML = signature;
    } else {
      container.innerHTML = "<template>".concat(signature, "</template>");
      template.content.appendChild(container.children[0].content);
    }

    if (isSVG) {
      var svgRoot = template.content.firstChild;
      template.content.removeChild(svgRoot);
      Array.from(svgRoot.childNodes).forEach(function (node) {
        return template.content.appendChild(node);
      });
    }

    replaceComments(template.content);
    var compileWalker = createWalker(template.content);
    var compileIndex = 0;

    var _loop = function _loop() {
      var node = compileWalker.currentNode;

      if (node.nodeType === Node.TEXT_NODE) {
        var text = node.textContent;

        if (!text.match(PLACEHOLDER_REGEXP_EQUAL)) {
          var results = text.match(PLACEHOLDER_REGEXP_ALL);

          if (results) {
            var currentNode = node;
            results.reduce(function (acc, placeholder) {
              var _acc$pop$split = acc.pop().split(placeholder),
                  _acc$pop$split2 = _slicedToArray(_acc$pop$split, 2),
                  before = _acc$pop$split2[0],
                  next = _acc$pop$split2[1];

              if (before) acc.push(before);
              acc.push(placeholder);
              if (next) acc.push(next);
              return acc;
            }, [text]).forEach(function (part, index) {
              if (index === 0) {
                currentNode.textContent = part;
              } else {
                currentNode = currentNode.parentNode.insertBefore(document.createTextNode(part), currentNode.nextSibling);
              }
            });
          }
        }

        var equal = node.textContent.match(PLACEHOLDER_REGEXP_EQUAL);

        if (equal) {
          /* istanbul ignore else */
          if (!IS_IE) node.textContent = "";
          parts[equal[1]] = [compileIndex, resolveValue];
        }
      } else {
        /* istanbul ignore else */
        // eslint-disable-next-line no-lonely-if
        if (node.nodeType === Node.ELEMENT_NODE) {
          Array.from(node.attributes).forEach(function (attr) {
            var value = attr.value.trim();
            /* istanbul ignore next */

            var name = IS_IE ? attr.name.replace(ATTR_PREFIX, "") : attr.name;
            var equal = value.match(PLACEHOLDER_REGEXP_EQUAL);

            if (equal) {
              var propertyName = getPropertyName(rawParts[equal[1]]);
              parts[equal[1]] = [compileIndex, resolveProperty(name, propertyName, isSVG)];
              node.removeAttribute(attr.name);
            } else {
              var _results = value.match(PLACEHOLDER_REGEXP_ALL);

              if (_results) {
                var partialName = "attr__".concat(name);

                _results.forEach(function (placeholder, index) {
                  var _placeholder$match = placeholder.match(PLACEHOLDER_REGEXP_EQUAL),
                      _placeholder$match2 = _slicedToArray(_placeholder$match, 2),
                      id = _placeholder$match2[1];

                  parts[id] = [compileIndex, function (host, target, attrValue) {
                    var data = dataMap.get(target, {});
                    data[partialName] = (data[partialName] || value).replace(placeholder, attrValue == null ? "" : attrValue);

                    if (_results.length === 1 || index + 1 === _results.length) {
                      target.setAttribute(name, data[partialName]);
                      data[partialName] = undefined;
                    }
                  }];
                });

                attr.value = "";
                /* istanbul ignore next */

                if (IS_IE && name !== attr.name) {
                  node.removeAttribute(attr.name);
                  node.setAttribute(name, "");
                }
              }
            }
          });
        }
      }

      compileIndex += 1;
    };

    while (compileWalker.nextNode()) {
      _loop();
    }

    return function updateTemplateInstance(host, target, args, styleSheets) {
      var data = dataMap.get(target, {
        type: "function"
      });

      if (template !== data.template) {
        if (data.template || target.nodeType === Node.ELEMENT_NODE) {
          removeTemplate(target);
        }

        data.prevArgs = null;
        var fragment = document.importNode(applyShadyCSS(template, host.tagName).content, true);
        var renderWalker = createWalker(fragment);
        var clonedParts = parts.slice(0);
        var renderIndex = 0;
        var currentPart = clonedParts.shift();
        var markers = [];
        data.template = template;
        data.markers = markers;

        while (renderWalker.nextNode()) {
          var node = renderWalker.currentNode;

          if (node.nodeType === Node.TEXT_NODE) {
            /* istanbul ignore next */
            if (PLACEHOLDER_REGEXP_EQUAL.test(node.textContent)) {
              node.textContent = "";
            } else if (IS_IE) {
              node.textContent = node.textContent.replace(ATTR_REGEXP, "");
            }
          }

          while (currentPart && currentPart[0] === renderIndex) {
            markers.push([node, currentPart[1]]);
            currentPart = clonedParts.shift();
          }

          renderIndex += 1;
        }

        if (target.nodeType === Node.TEXT_NODE) {
          data.startNode = fragment.childNodes[0];
          data.endNode = fragment.childNodes[fragment.childNodes.length - 1];
          var previousChild = target;
          var child = fragment.childNodes[0];

          while (child) {
            target.parentNode.insertBefore(child, previousChild.nextSibling);
            previousChild = child;
            child = fragment.childNodes[0];
          }
        } else {
          target.appendChild(fragment);
        }
      }

      var adoptedStyleSheets = target.adoptedStyleSheets;

      if (styleSheets) {
        var isEqual = false;
        styleSheets = styleSheets.map(function (style) {
          if (style instanceof CSSStyleSheet) return style;
          var styleSheet = styleSheetsMap.get(style);

          if (!styleSheet) {
            styleSheet = new CSSStyleSheet();
            styleSheet.replaceSync(style);
            styleSheetsMap.set(style, styleSheet);
          }

          return styleSheet;
        });

        if (styleSheets.length === adoptedStyleSheets.length) {
          isEqual = true;

          for (var i = 0; i < styleSheets.length; i += 1) {
            if (styleSheets[i] !== adoptedStyleSheets[i]) {
              isEqual = false;
              break;
            }
          }
        }

        if (!isEqual) target.adoptedStyleSheets = styleSheets;
      } else if (adoptedStyleSheets && adoptedStyleSheets.length) {
        target.adoptedStyleSheets = [];
      }

      var prevArgs = data.prevArgs;
      data.prevArgs = args;

      for (var index = 0; index < data.markers.length; index += 1) {
        var _data$markers$index = _slicedToArray(data.markers[index], 2),
            _node = _data$markers$index[0],
            marker = _data$markers$index[1];

        if (!prevArgs || prevArgs[index] !== args[index]) {
          marker(host, _node, args[index], prevArgs ? prevArgs[index] : undefined);
        }
      }

      if (target.nodeType !== Node.TEXT_NODE) {
        shadyCSS(function (shady) {
          if (host.shadowRoot) {
            if (prevArgs) {
              shady.styleSubtree(host);
            } else {
              shady.styleElement(host);
            }
          }
        });
      }
    };
  }
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZS9jb3JlLmpzIl0sIm5hbWVzIjpbInN0cmluZ2lmeUVsZW1lbnQiLCJzaGFkeUNTUyIsIklTX0lFIiwiZGF0YU1hcCIsInJlbW92ZVRlbXBsYXRlIiwicmVzb2x2ZVZhbHVlIiwicmVzb2x2ZVByb3BlcnR5IiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiZSIsIlRJTUVTVEFNUCIsIkRhdGUiLCJub3ciLCJnZXRQbGFjZWhvbGRlciIsImlkIiwiUExBQ0VIT0xERVJfUkVHRVhQX1RFWFQiLCJQTEFDRUhPTERFUl9SRUdFWFBfRVFVQUwiLCJSZWdFeHAiLCJQTEFDRUhPTERFUl9SRUdFWFBfQUxMIiwiQVRUUl9QUkVGSVgiLCJBVFRSX1JFR0VYUCIsInByZXBhcmVkVGVtcGxhdGVzIiwiV2Vha01hcCIsImFwcGx5U2hhZHlDU1MiLCJ0ZW1wbGF0ZSIsInRhZ05hbWUiLCJzaGFkeSIsIm1hcCIsImdldCIsIk1hcCIsInNldCIsImNsb25lIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udGVudCIsImFwcGVuZENoaWxkIiwiY2xvbmVOb2RlIiwic3R5bGVzIiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJzdHlsZSIsImNvdW50IiwiY2hpbGROb2RlcyIsImxlbmd0aCIsImkiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiY3JlYXRlVGV4dE5vZGUiLCJwcmVwYXJlVGVtcGxhdGUiLCJ0b0xvd2VyQ2FzZSIsImNyZWF0ZVNpZ25hdHVyZSIsInBhcnRzIiwic2lnbmF0dXJlIiwicmVkdWNlIiwiYWNjIiwicGFydCIsImluZGV4Iiwic2xpY2UiLCJqb2luIiwibWF0Y2giLCJyZXBsYWNlIiwiZ2V0UHJvcGVydHlOYW1lIiwic3RyaW5nIiwic3BsaXQiLCJwb3AiLCJyZXBsYWNlQ29tbWVudHMiLCJmcmFnbWVudCIsIml0ZXJhdG9yIiwiY3JlYXRlTm9kZUl0ZXJhdG9yIiwiTm9kZUZpbHRlciIsIlNIT1dfQ09NTUVOVCIsIm5vZGUiLCJuZXh0Tm9kZSIsInRlc3QiLCJ0ZXh0Q29udGVudCIsInJlbW92ZUNoaWxkIiwiY3JlYXRlSW50ZXJuYWxXYWxrZXIiLCJjb250ZXh0IiwiY3VycmVudE5vZGUiLCJ1bmRlZmluZWQiLCJuZXh0U2libGluZyIsImNyZWF0ZUV4dGVybmFsV2Fsa2VyIiwiY3JlYXRlVHJlZVdhbGtlciIsIlNIT1dfRUxFTUVOVCIsIlNIT1dfVEVYVCIsImNyZWF0ZVdhbGtlciIsIndpbmRvdyIsIlNoYWR5RE9NIiwiaW5Vc2UiLCJjb250YWluZXIiLCJzdHlsZVNoZWV0c01hcCIsImNvbXBpbGVUZW1wbGF0ZSIsInJhd1BhcnRzIiwiaXNTVkciLCJpbm5lckhUTUwiLCJjaGlsZHJlbiIsInN2Z1Jvb3QiLCJmaXJzdENoaWxkIiwiY29tcGlsZVdhbGtlciIsImNvbXBpbGVJbmRleCIsIm5vZGVUeXBlIiwiTm9kZSIsIlRFWFRfTk9ERSIsInRleHQiLCJyZXN1bHRzIiwicGxhY2Vob2xkZXIiLCJiZWZvcmUiLCJuZXh0IiwicHVzaCIsImVxdWFsIiwiRUxFTUVOVF9OT0RFIiwiYXR0cmlidXRlcyIsImF0dHIiLCJ2YWx1ZSIsInRyaW0iLCJuYW1lIiwicHJvcGVydHlOYW1lIiwicmVtb3ZlQXR0cmlidXRlIiwicGFydGlhbE5hbWUiLCJob3N0IiwidGFyZ2V0IiwiYXR0clZhbHVlIiwiZGF0YSIsInNldEF0dHJpYnV0ZSIsInVwZGF0ZVRlbXBsYXRlSW5zdGFuY2UiLCJhcmdzIiwic3R5bGVTaGVldHMiLCJ0eXBlIiwicHJldkFyZ3MiLCJpbXBvcnROb2RlIiwicmVuZGVyV2Fsa2VyIiwiY2xvbmVkUGFydHMiLCJyZW5kZXJJbmRleCIsImN1cnJlbnRQYXJ0Iiwic2hpZnQiLCJtYXJrZXJzIiwiaW5kZXhPZiIsImN1c3RvbUVsZW1lbnRzIiwiRXJyb3IiLCJzdGFydE5vZGUiLCJlbmROb2RlIiwicHJldmlvdXNDaGlsZCIsImNoaWxkIiwiYWRvcHRlZFN0eWxlU2hlZXRzIiwiaXNFcXVhbCIsIkNTU1N0eWxlU2hlZXQiLCJzdHlsZVNoZWV0IiwicmVwbGFjZVN5bmMiLCJtYXJrZXIiLCJzaGFkb3dSb290Iiwic3R5bGVTdWJ0cmVlIiwic3R5bGVFbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLGdCQUFULEVBQTJCQyxRQUEzQixFQUFxQ0MsS0FBckMsUUFBa0QsYUFBbEQ7QUFDQSxTQUFTQyxPQUFULEVBQWtCQyxjQUFsQixRQUF3QyxZQUF4QztBQUVBLE9BQU9DLFlBQVAsTUFBeUIsc0JBQXpCO0FBQ0EsT0FBT0MsZUFBUCxNQUE0Qix5QkFBNUI7QUFFQTs7QUFDQSxJQUFJO0FBQUVDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaO0FBQXNCLENBQTVCLENBQTZCLE9BQU1DLENBQU4sRUFBUztBQUFFLE1BQUlILE9BQU8sR0FBRztBQUFFQyxJQUFBQSxHQUFHLEVBQUU7QUFBRUMsTUFBQUEsUUFBUSxFQUFFO0FBQVo7QUFBUCxHQUFkO0FBQW9ELEMsQ0FBQzs7O0FBRTdGLElBQU1FLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLEVBQWxCO0FBRUEsT0FBTyxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsTUFBQ0MsRUFBRCx1RUFBTSxDQUFOO0FBQUEsdUJBQW1CSixTQUFuQixjQUFnQ0ksRUFBaEM7QUFBQSxDQUF2QjtBQUVQLElBQU1DLHVCQUF1QixHQUFHRixjQUFjLENBQUMsUUFBRCxDQUE5QztBQUNBLElBQU1HLHdCQUF3QixHQUFHLElBQUlDLE1BQUosWUFBZUYsdUJBQWYsT0FBakM7QUFDQSxJQUFNRyxzQkFBc0IsR0FBRyxJQUFJRCxNQUFKLENBQVdGLHVCQUFYLEVBQW9DLEdBQXBDLENBQS9CO0FBRUEsSUFBTUksV0FBVyxlQUFRVCxTQUFSLE9BQWpCO0FBQ0EsSUFBTVUsV0FBVyxHQUFHLElBQUlILE1BQUosQ0FBV0UsV0FBWCxFQUF3QixHQUF4QixDQUFwQjtBQUVBLElBQU1FLGlC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QUssQ0FBQytILFlBQU4sQ0FBbUJoQyxJQUFuQjtBQUNEO0FBQ0Y7QUFDRixPQVJPLENBQVI7QUFTRDtBQUNGLEdBaklEO0FBa0lEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3RyaW5naWZ5RWxlbWVudCwgc2hhZHlDU1MsIElTX0lFIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XG5pbXBvcnQgeyBkYXRhTWFwLCByZW1vdmVUZW1wbGF0ZSB9IGZyb20gXCIuL3V0aWxzLmpzXCI7XG5cbmltcG9ydCByZXNvbHZlVmFsdWUgZnJvbSBcIi4vcmVzb2x2ZXJzL3ZhbHVlLmpzXCI7XG5pbXBvcnQgcmVzb2x2ZVByb3BlcnR5IGZyb20gXCIuL3Jlc29sdmVycy9wcm9wZXJ0eS5qc1wiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xudHJ5IHsgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfSBjYXRjaChlKSB7IHZhciBwcm9jZXNzID0geyBlbnY6IHsgTk9ERV9FTlY6ICdwcm9kdWN0aW9uJyB9IH07IH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5jb25zdCBUSU1FU1RBTVAgPSBEYXRlLm5vdygpO1xuXG5leHBvcnQgY29uc3QgZ2V0UGxhY2Vob2xkZXIgPSAoaWQgPSAwKSA9PiBge3toLSR7VElNRVNUQU1QfS0ke2lkfX19YDtcblxuY29uc3QgUExBQ0VIT0xERVJfUkVHRVhQX1RFWFQgPSBnZXRQbGFjZWhvbGRlcihcIihcXFxcZCspXCIpO1xuY29uc3QgUExBQ0VIT0xERVJfUkVHRVhQX0VRVUFMID0gbmV3IFJlZ0V4cChgXiR7UExBQ0VIT0xERVJfUkVHRVhQX1RFWFR9JGApO1xuY29uc3QgUExBQ0VIT0xERVJfUkVHRVhQX0FMTCA9IG5ldyBSZWdFeHAoUExBQ0VIT0xERVJfUkVHRVhQX1RFWFQsIFwiZ1wiKTtcblxuY29uc3QgQVRUUl9QUkVGSVggPSBgLS0ke1RJTUVTVEFNUH0tLWA7XG5jb25zdCBBVFRSX1JFR0VYUCA9IG5ldyBSZWdFeHAoQVRUUl9QUkVGSVgsIFwiZ1wiKTtcblxuY29uc3QgcHJlcGFyZWRUZW1wbGF0ZXMgPSBuZXcgV2Vha01hcCgpO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gYXBwbHlTaGFkeUNTUyh0ZW1wbGF0ZSwgdGFnTmFtZSkge1xuICBpZiAoIXRhZ05hbWUpIHJldHVybiB0ZW1wbGF0ZTtcblxuICByZXR1cm4gc2hhZHlDU1Moc2hhZHkgPT4ge1xuICAgIGxldCBtYXAgPSBwcmVwYXJlZFRlbXBsYXRlcy5nZXQodGVtcGxhdGUpO1xuICAgIGlmICghbWFwKSB7XG4gICAgICBtYXAgPSBuZXcgTWFwKCk7XG4gICAgICBwcmVwYXJlZFRlbXBsYXRlcy5zZXQodGVtcGxhdGUsIG1hcCk7XG4gICAgfVxuXG4gICAgbGV0IGNsb25lID0gbWFwLmdldCh0YWdOYW1lKTtcblxuICAgIGlmICghY2xvbmUpIHtcbiAgICAgIGNsb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuICAgICAgY2xvbmUuY29udGVudC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG5cbiAgICAgIG1hcC5zZXQodGFnTmFtZSwgY2xvbmUpO1xuXG4gICAgICBjb25zdCBzdHlsZXMgPSBjbG9uZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVwiKTtcblxuICAgICAgQXJyYXkuZnJvbShzdHlsZXMpLmZvckVhY2goc3R5bGUgPT4ge1xuICAgICAgICBjb25zdCBjb3VudCA9IHN0eWxlLmNoaWxkTm9kZXMubGVuZ3RoICsgMTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgc3R5bGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShnZXRQbGFjZWhvbGRlcigpKSxcbiAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzaGFkeS5wcmVwYXJlVGVtcGxhdGUoY2xvbmUsIHRhZ05hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuICAgIHJldHVybiBjbG9uZTtcbiAgfSwgdGVtcGxhdGUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaWduYXR1cmUocGFydHMsIHN0eWxlcykge1xuICBsZXQgc2lnbmF0dXJlID0gcGFydHMucmVkdWNlKChhY2MsIHBhcnQsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICByZXR1cm4gcGFydDtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBwYXJ0c1xuICAgICAgICAuc2xpY2UoaW5kZXgpXG4gICAgICAgIC5qb2luKFwiXCIpXG4gICAgICAgIC5tYXRjaCgvXlxccyo8XFwvXFxzKih0YWJsZXx0cnx0aGVhZHx0Ym9keXx0Zm9vdHxjb2xncm91cCk+LylcbiAgICApIHtcbiAgICAgIHJldHVybiBgJHthY2N9PCEtLSR7Z2V0UGxhY2Vob2xkZXIoaW5kZXggLSAxKX0tLT4ke3BhcnR9YDtcbiAgICB9XG4gICAgcmV0dXJuIGFjYyArIGdldFBsYWNlaG9sZGVyKGluZGV4IC0gMSkgKyBwYXJ0O1xuICB9LCBcIlwiKTtcblxuICBpZiAoc3R5bGVzKSB7XG4gICAgc2lnbmF0dXJlICs9IGA8c3R5bGU+XFxuJHtzdHlsZXMuam9pbihcIlxcbi8qLS0tLS0tKi9cXG5cIil9XFxuPC9zdHlsZT5gO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChJU19JRSkge1xuICAgIHJldHVybiBzaWduYXR1cmUucmVwbGFjZShcbiAgICAgIC9zdHlsZVxccyo9XFxzKihbXCJdW15cIl0rW1wiXXxbJ11bXiddK1snXXxbXlxcc1wiJzw+L10rKS9nLFxuICAgICAgbWF0Y2ggPT4gYCR7QVRUUl9QUkVGSVh9JHttYXRjaH1gLFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eU5hbWUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmdcbiAgICAucmVwbGFjZSgvXFxzKj1cXHMqWydcIl0qJC9nLCBcIlwiKVxuICAgIC5zcGxpdCgvXFxzKy8pXG4gICAgLnBvcCgpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQ29tbWVudHMoZnJhZ21lbnQpIHtcbiAgY29uc3QgaXRlcmF0b3IgPSBkb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3IoXG4gICAgZnJhZ21lbnQsXG4gICAgTm9kZUZpbHRlci5TSE9XX0NPTU1FTlQsXG4gICAgbnVsbCxcbiAgICBmYWxzZSxcbiAgKTtcbiAgbGV0IG5vZGU7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25kLWFzc2lnblxuICB3aGlsZSAoKG5vZGUgPSBpdGVyYXRvci5uZXh0Tm9kZSgpKSkge1xuICAgIGlmIChQTEFDRUhPTERFUl9SRUdFWFBfRVFVQUwudGVzdChub2RlLnRleHRDb250ZW50KSkge1xuICAgICAgbm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcbiAgICAgICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobm9kZS50ZXh0Q29udGVudCksXG4gICAgICAgIG5vZGUsXG4gICAgICApO1xuICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW50ZXJuYWxXYWxrZXIoY29udGV4dCkge1xuICBsZXQgbm9kZTtcblxuICByZXR1cm4ge1xuICAgIGdldCBjdXJyZW50Tm9kZSgpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH0sXG4gICAgbmV4dE5vZGUoKSB7XG4gICAgICBpZiAobm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5vZGUgPSBjb250ZXh0LmNoaWxkTm9kZXNbMF07XG4gICAgICB9IGVsc2UgaWYgKG5vZGUuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgbm9kZSA9IG5vZGUuY2hpbGROb2Rlc1swXTtcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5uZXh0U2libGluZykge1xuICAgICAgICBub2RlID0gbm9kZS5uZXh0U2libGluZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBub2RlID0gcGFyZW50Tm9kZS5uZXh0U2libGluZztcblxuICAgICAgICB3aGlsZSAoIW5vZGUgJiYgcGFyZW50Tm9kZSAhPT0gY29udGV4dCkge1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgbm9kZSA9IHBhcmVudE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuICEhbm9kZTtcbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFeHRlcm5hbFdhbGtlcihjb250ZXh0KSB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgIGNvbnRleHQsXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCB8IE5vZGVGaWx0ZXIuU0hPV19URVhULFxuICAgIG51bGwsXG4gICAgZmFsc2UsXG4gICk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBjcmVhdGVXYWxrZXIgPVxuICB0eXBlb2Ygd2luZG93LlNoYWR5RE9NID09PSBcIm9iamVjdFwiICYmIHdpbmRvdy5TaGFkeURPTS5pblVzZVxuICAgID8gY3JlYXRlSW50ZXJuYWxXYWxrZXJcbiAgICA6IGNyZWF0ZUV4dGVybmFsV2Fsa2VyO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3Qgc3R5bGVTaGVldHNNYXAgPSBuZXcgTWFwKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlVGVtcGxhdGUocmF3UGFydHMsIGlzU1ZHLCBzdHlsZXMpIHtcbiAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG4gIGNvbnN0IHBhcnRzID0gW107XG5cbiAgbGV0IHNpZ25hdHVyZSA9IGNyZWF0ZVNpZ25hdHVyZShyYXdQYXJ0cywgc3R5bGVzKTtcbiAgaWYgKGlzU1ZHKSBzaWduYXR1cmUgPSBgPHN2Zz4ke3NpZ25hdHVyZX08L3N2Zz5gO1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoSVNfSUUpIHtcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBzaWduYXR1cmU7XG4gIH0gZWxzZSB7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGA8dGVtcGxhdGU+JHtzaWduYXR1cmV9PC90ZW1wbGF0ZT5gO1xuICAgIHRlbXBsYXRlLmNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyLmNoaWxkcmVuWzBdLmNvbnRlbnQpO1xuICB9XG5cbiAgaWYgKGlzU1ZHKSB7XG4gICAgY29uc3Qgc3ZnUm9vdCA9IHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICB0ZW1wbGF0ZS5jb250ZW50LnJlbW92ZUNoaWxkKHN2Z1Jvb3QpO1xuICAgIEFycmF5LmZyb20oc3ZnUm9vdC5jaGlsZE5vZGVzKS5mb3JFYWNoKG5vZGUgPT5cbiAgICAgIHRlbXBsYXRlLmNvbnRlbnQuYXBwZW5kQ2hpbGQobm9kZSksXG4gICAgKTtcbiAgfVxuXG4gIHJlcGxhY2VDb21tZW50cyh0ZW1wbGF0ZS5jb250ZW50KTtcblxuICBjb25zdCBjb21waWxlV2Fsa2VyID0gY3JlYXRlV2Fsa2VyKHRlbXBsYXRlLmNvbnRlbnQpO1xuICBsZXQgY29tcGlsZUluZGV4ID0gMDtcblxuICB3aGlsZSAoY29tcGlsZVdhbGtlci5uZXh0Tm9kZSgpKSB7XG4gICAgY29uc3Qgbm9kZSA9IGNvbXBpbGVXYWxrZXIuY3VycmVudE5vZGU7XG5cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgIGNvbnN0IHRleHQgPSBub2RlLnRleHRDb250ZW50O1xuXG4gICAgICBpZiAoIXRleHQubWF0Y2goUExBQ0VIT0xERVJfUkVHRVhQX0VRVUFMKSkge1xuICAgICAgICBjb25zdCByZXN1bHRzID0gdGV4dC5tYXRjaChQTEFDRUhPTERFUl9SRUdFWFBfQUxMKTtcbiAgICAgICAgaWYgKHJlc3VsdHMpIHtcbiAgICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBub2RlO1xuICAgICAgICAgIHJlc3VsdHNcbiAgICAgICAgICAgIC5yZWR1Y2UoXG4gICAgICAgICAgICAgIChhY2MsIHBsYWNlaG9sZGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2JlZm9yZSwgbmV4dF0gPSBhY2MucG9wKCkuc3BsaXQocGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgICAgIGlmIChiZWZvcmUpIGFjYy5wdXNoKGJlZm9yZSk7XG4gICAgICAgICAgICAgICAgYWNjLnB1c2gocGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgICAgIGlmIChuZXh0KSBhY2MucHVzaChuZXh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbdGV4dF0sXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuZm9yRWFjaCgocGFydCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudE5vZGUudGV4dENvbnRlbnQgPSBwYXJ0O1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwYXJ0KSxcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlLm5leHRTaWJsaW5nLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVxdWFsID0gbm9kZS50ZXh0Q29udGVudC5tYXRjaChQTEFDRUhPTERFUl9SRUdFWFBfRVFVQUwpO1xuICAgICAgaWYgKGVxdWFsKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgIGlmICghSVNfSUUpIG5vZGUudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBwYXJ0c1tlcXVhbFsxXV0gPSBbY29tcGlsZUluZGV4LCByZXNvbHZlVmFsdWVdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqLyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZWx5LWlmXG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgQXJyYXkuZnJvbShub2RlLmF0dHJpYnV0ZXMpLmZvckVhY2goYXR0ciA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBhdHRyLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBJU19JRSA/IGF0dHIubmFtZS5yZXBsYWNlKEFUVFJfUFJFRklYLCBcIlwiKSA6IGF0dHIubmFtZTtcbiAgICAgICAgICBjb25zdCBlcXVhbCA9IHZhbHVlLm1hdGNoKFBMQUNFSE9MREVSX1JFR0VYUF9FUVVBTCk7XG4gICAgICAgICAgaWYgKGVxdWFsKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBnZXRQcm9wZXJ0eU5hbWUocmF3UGFydHNbZXF1YWxbMV1dKTtcbiAgICAgICAgICAgIHBhcnRzW2VxdWFsWzFdXSA9IFtcbiAgICAgICAgICAgICAgY29tcGlsZUluZGV4LFxuICAgICAgICAgICAgICByZXNvbHZlUHJvcGVydHkobmFtZSwgcHJvcGVydHlOYW1lLCBpc1NWRyksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0ci5uYW1lKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IHZhbHVlLm1hdGNoKFBMQUNFSE9MREVSX1JFR0VYUF9BTEwpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgY29uc3QgcGFydGlhbE5hbWUgPSBgYXR0cl9fJHtuYW1lfWA7XG5cbiAgICAgICAgICAgICAgcmVzdWx0cy5mb3JFYWNoKChwbGFjZWhvbGRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbLCBpZF0gPSBwbGFjZWhvbGRlci5tYXRjaChQTEFDRUhPTERFUl9SRUdFWFBfRVFVQUwpO1xuICAgICAgICAgICAgICAgIHBhcnRzW2lkXSA9IFtcbiAgICAgICAgICAgICAgICAgIGNvbXBpbGVJbmRleCxcbiAgICAgICAgICAgICAgICAgIChob3N0LCB0YXJnZXQsIGF0dHJWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gZGF0YU1hcC5nZXQodGFyZ2V0LCB7fSk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFbcGFydGlhbE5hbWVdID0gKGRhdGFbcGFydGlhbE5hbWVdIHx8IHZhbHVlKS5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJWYWx1ZSA9PSBudWxsID8gXCJcIiA6IGF0dHJWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPT09IDEgfHwgaW5kZXggKyAxID09PSByZXN1bHRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUobmFtZSwgZGF0YVtwYXJ0aWFsTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGFbcGFydGlhbE5hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGF0dHIudmFsdWUgPSBcIlwiO1xuXG4gICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgICAgIGlmIChJU19JRSAmJiBuYW1lICE9PSBhdHRyLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyLm5hbWUpO1xuICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIFwiXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21waWxlSW5kZXggKz0gMTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVUZW1wbGF0ZUluc3RhbmNlKGhvc3QsIHRhcmdldCwgYXJncywgc3R5bGVTaGVldHMpIHtcbiAgICBjb25zdCBkYXRhID0gZGF0YU1hcC5nZXQodGFyZ2V0LCB7IHR5cGU6IFwiZnVuY3Rpb25cIiB9KTtcblxuICAgIGlmICh0ZW1wbGF0ZSAhPT0gZGF0YS50ZW1wbGF0ZSkge1xuICAgICAgaWYgKGRhdGEudGVtcGxhdGUgfHwgdGFyZ2V0Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICByZW1vdmVUZW1wbGF0ZSh0YXJnZXQpO1xuICAgICAgfVxuXG4gICAgICBkYXRhLnByZXZBcmdzID0gbnVsbDtcblxuICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5pbXBvcnROb2RlKFxuICAgICAgICBhcHBseVNoYWR5Q1NTKHRlbXBsYXRlLCBob3N0LnRhZ05hbWUpLmNvbnRlbnQsXG4gICAgICAgIHRydWUsXG4gICAgICApO1xuXG4gICAgICBjb25zdCByZW5kZXJXYWxrZXIgPSBjcmVhdGVXYWxrZXIoZnJhZ21lbnQpO1xuICAgICAgY29uc3QgY2xvbmVkUGFydHMgPSBwYXJ0cy5zbGljZSgwKTtcblxuICAgICAgbGV0IHJlbmRlckluZGV4ID0gMDtcbiAgICAgIGxldCBjdXJyZW50UGFydCA9IGNsb25lZFBhcnRzLnNoaWZ0KCk7XG5cbiAgICAgIGNvbnN0IG1hcmtlcnMgPSBbXTtcblxuICAgICAgZGF0YS50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgZGF0YS5tYXJrZXJzID0gbWFya2VycztcblxuICAgICAgd2hpbGUgKHJlbmRlcldhbGtlci5uZXh0Tm9kZSgpKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSByZW5kZXJXYWxrZXIuY3VycmVudE5vZGU7XG5cbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICBpZiAoUExBQ0VIT0xERVJfUkVHRVhQX0VRVUFMLnRlc3Qobm9kZS50ZXh0Q29udGVudCkpIHtcbiAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgIH0gZWxzZSBpZiAoSVNfSUUpIHtcbiAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSBub2RlLnRleHRDb250ZW50LnJlcGxhY2UoQVRUUl9SRUdFWFAsIFwiXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICBub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBub2RlLnRhZ05hbWUuaW5kZXhPZihcIi1cIikgPiAtMSAmJlxuICAgICAgICAgICAgIWN1c3RvbUVsZW1lbnRzLmdldChub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgICBgTWlzc2luZyAnJHtzdHJpbmdpZnlFbGVtZW50KFxuICAgICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAgICl9JyBlbGVtZW50IGRlZmluaXRpb24gaW4gJyR7c3RyaW5naWZ5RWxlbWVudChob3N0KX0nYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGN1cnJlbnRQYXJ0ICYmIGN1cnJlbnRQYXJ0WzBdID09PSByZW5kZXJJbmRleCkge1xuICAgICAgICAgIG1hcmtlcnMucHVzaChbbm9kZSwgY3VycmVudFBhcnRbMV1dKTtcbiAgICAgICAgICBjdXJyZW50UGFydCA9IGNsb25lZFBhcnRzLnNoaWZ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXJJbmRleCArPSAxO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0Lm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICBkYXRhLnN0YXJ0Tm9kZSA9IGZyYWdtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgICAgIGRhdGEuZW5kTm9kZSA9IGZyYWdtZW50LmNoaWxkTm9kZXNbZnJhZ21lbnQuY2hpbGROb2Rlcy5sZW5ndGggLSAxXTtcblxuICAgICAgICBsZXQgcHJldmlvdXNDaGlsZCA9IHRhcmdldDtcblxuICAgICAgICBsZXQgY2hpbGQgPSBmcmFnbWVudC5jaGlsZE5vZGVzWzBdO1xuICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICB0YXJnZXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2hpbGQsIHByZXZpb3VzQ2hpbGQubmV4dFNpYmxpbmcpO1xuICAgICAgICAgIHByZXZpb3VzQ2hpbGQgPSBjaGlsZDtcbiAgICAgICAgICBjaGlsZCA9IGZyYWdtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWRvcHRlZFN0eWxlU2hlZXRzID0gdGFyZ2V0LmFkb3B0ZWRTdHlsZVNoZWV0cztcbiAgICBpZiAoc3R5bGVTaGVldHMpIHtcbiAgICAgIGxldCBpc0VxdWFsID0gZmFsc2U7XG5cbiAgICAgIHN0eWxlU2hlZXRzID0gc3R5bGVTaGVldHMubWFwKHN0eWxlID0+IHtcbiAgICAgICAgaWYgKHN0eWxlIGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldCkgcmV0dXJuIHN0eWxlO1xuXG4gICAgICAgIGxldCBzdHlsZVNoZWV0ID0gc3R5bGVTaGVldHNNYXAuZ2V0KHN0eWxlKTtcbiAgICAgICAgaWYgKCFzdHlsZVNoZWV0KSB7XG4gICAgICAgICAgc3R5bGVTaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG4gICAgICAgICAgc3R5bGVTaGVldC5yZXBsYWNlU3luYyhzdHlsZSk7XG4gICAgICAgICAgc3R5bGVTaGVldHNNYXAuc2V0KHN0eWxlLCBzdHlsZVNoZWV0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGVTaGVldDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3R5bGVTaGVldHMubGVuZ3RoID09PSBhZG9wdGVkU3R5bGVTaGVldHMubGVuZ3RoKSB7XG4gICAgICAgIGlzRXF1YWwgPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0eWxlU2hlZXRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgaWYgKHN0eWxlU2hlZXRzW2ldICE9PSBhZG9wdGVkU3R5bGVTaGVldHNbaV0pIHtcbiAgICAgICAgICAgIGlzRXF1YWwgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzRXF1YWwpIHRhcmdldC5hZG9wdGVkU3R5bGVTaGVldHMgPSBzdHlsZVNoZWV0cztcbiAgICB9IGVsc2UgaWYgKGFkb3B0ZWRTdHlsZVNoZWV0cyAmJiBhZG9wdGVkU3R5bGVTaGVldHMubGVuZ3RoKSB7XG4gICAgICB0YXJnZXQuYWRvcHRlZFN0eWxlU2hlZXRzID0gW107XG4gICAgfVxuXG4gICAgY29uc3QgcHJldkFyZ3MgPSBkYXRhLnByZXZBcmdzO1xuICAgIGRhdGEucHJldkFyZ3MgPSBhcmdzO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhdGEubWFya2Vycy5sZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICAgIGNvbnN0IFtub2RlLCBtYXJrZXJdID0gZGF0YS5tYXJrZXJzW2luZGV4XTtcbiAgICAgIGlmICghcHJldkFyZ3MgfHwgcHJldkFyZ3NbaW5kZXhdICE9PSBhcmdzW2luZGV4XSkge1xuICAgICAgICBtYXJrZXIoaG9zdCwgbm9kZSwgYXJnc1tpbmRleF0sIHByZXZBcmdzID8gcHJldkFyZ3NbaW5kZXhdIDogdW5kZWZpbmVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0Lm5vZGVUeXBlICE9PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgc2hhZHlDU1Moc2hhZHkgPT4ge1xuICAgICAgICBpZiAoaG9zdC5zaGFkb3dSb290KSB7XG4gICAgICAgICAgaWYgKHByZXZBcmdzKSB7XG4gICAgICAgICAgICBzaGFkeS5zdHlsZVN1YnRyZWUoaG9zdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoYWR5LnN0eWxlRWxlbWVudChob3N0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==

  var setCache = new Map();
  function set$1(propertyName, value) {
    if (!propertyName) throw Error("Target property name missing: ".concat(propertyName));

    if (arguments.length === 2) {
      return function (host) {
        host[propertyName] = value;
      };
    }

    var fn = setCache.get(propertyName);

    if (!fn) {
      fn = function fn(host, _ref) {
        var target = _ref.target;
        host[propertyName] = target.value;
      };

      setCache.set(propertyName, fn);
    }

    return fn;
  }
  var promiseMap = new WeakMap();
  function resolve(promise, placeholder) {
    var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
    return function (host, target) {
      var timeout;

      if (placeholder) {
        timeout = setTimeout(function () {
          timeout = undefined;
          requestAnimationFrame(function () {
            placeholder(host, target);
          });
        }, delay);
      }

      promiseMap.set(target, promise);
      promise.then(function (template) {
        if (timeout) clearTimeout(timeout);

        if (promiseMap.get(target) === promise) {
          template(host, target);
          promiseMap.set(target, null);
        }
      });
    };
  }
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZS9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbInNldENhY2hlIiwiTWFwIiwic2V0IiwicHJvcGVydHlOYW1lIiwidmFsdWUiLCJFcnJvciIsImFyZ3VtZW50cyIsImxlbmd0aCIsImhvc3QiLCJmbiIsImdldCIsInRhcmdldCIsInByb21pc2VNYXAiLCJXZWFrTWFwIiwicmVzb2x2ZSIsInByb21pc2UiLCJwbGFjZWhvbGRlciIsImRlbGF5IiwidGltZW91dCIsInNldFRpbWVvdXQiLCJ1bmRlZmluZWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0aGVuIiwidGVtcGxhdGUiLCJjbGVhclRpbWVvdXQiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLFFBQVEsR0FBRyxJQUFJQyxHQUFKLEVBQWpCO0FBQ0EsT0FBTyxTQUFTQyxHQUFULENBQWFDLFlBQWIsRUFBMkJDLEtBQTNCLEVBQWtDO0FBQ3ZDLE1BQUksQ0FBQ0QsWUFBTCxFQUNFLE1BQU1FLEtBQUsseUNBQWtDRixZQUFsQyxFQUFYOztBQUVGLE1BQUlHLFNBQVMsQ0FBQ0MsTUFBVixLQUFxQixDQUF6QixFQUE0QjtBQUMxQixXQUFPLFVBQUFDLElBQUksRUFBSTtBQUNiQSxNQUFBQSxJQUFJLENBQUNMLFlBQUQsQ0FBSixHQUFxQkMsS0FBckI7QUFDRCxLQUZEO0FBR0Q7O0FBRUQsTUFBSUssRUFBRSxHQUFHVCxRQUFRLENBQUNVLEdBQVQsQ0FBYVAsWUFBYixDQUFUOztBQUVBLE1BQUksQ0FBQ00sRUFBTCxFQUFTO0FBQ1BBLElBQUFBLEVBQUUsR0FBRyxZQUFDRCxJQUFELFFBQXNCO0FBQUEsVUFBYkcsTUFBYSxRQUFiQSxNQUFhO0FBQ3pCSCxNQUFBQSxJQUFJLENBQUNMLFlBQUQsQ0FBSixHQUFxQlEsTUFBTSxDQUFDUCxLQUE1QjtBQUNELEtBRkQ7O0FBR0FKLElBQUFBLFFBQVEsQ0FBQ0UsR0FBVCxDQUFhQyxZQUFiLEVBQTJCTSxFQUEzQjtBQUNEOztBQUVELFNBQU9BLEVBQVA7QUFDRDtBQUVELElBQU1HLFVBQVUsR0FBRyxJQUFJQyxPQUFKLEVBQW5CO0FBQ0EsT0FBTyxTQUFTQyxPQUFULENBQWlCQyxPQUFqQixFQUEwQkMsV0FBMUIsRUFBb0Q7QUFBQSxNQUFiQyxLQUFhLHVFQUFMLEdBQUs7QUFDekQsU0FBTyxVQUFDVCxJQUFELEVBQU9HLE1BQVAsRUFBa0I7QUFDdkIsUUFBSU8sT0FBSjs7QUFFQSxRQUFJRixXQUFKLEVBQWlCO0FBQ2ZFLE1BQUFBLE9BQU8sR0FBR0MsVUFBVSxDQUFDLFlBQU07QUFDekJELFFBQUFBLE9BQU8sR0FBR0UsU0FBVjtBQUVBQyxRQUFBQSxxQkFBcUIsQ0FBQyxZQUFNO0FBQzFCTCxVQUFBQSxXQUFXLENBQUNSLElBQUQsRUFBT0csTUFBUCxDQUFYO0FBQ0QsU0FGb0IsQ0FBckI7QUFHRCxPQU5tQixFQU1qQk0sS0FOaUIsQ0FBcEI7QUFPRDs7QUFFREwsSUFBQUEsVUFBVSxDQUFDVixHQUFYLENBQWVTLE1BQWYsRUFBdUJJLE9BQXZCO0FBRUFBLElBQUFBLE9BQU8sQ0FBQ08sSUFBUixDQUFhLFVBQUFDLFFBQVEsRUFBSTtBQUN2QixVQUFJTCxPQUFKLEVBQWFNLFlBQVksQ0FBQ04sT0FBRCxDQUFaOztBQUViLFVBQUlOLFVBQVUsQ0FBQ0YsR0FBWCxDQUFlQyxNQUFmLE1BQTJCSSxPQUEvQixFQUF3QztBQUN0Q1EsUUFBQUEsUUFBUSxDQUFDZixJQUFELEVBQU9HLE1BQVAsQ0FBUjtBQUNBQyxRQUFBQSxVQUFVLENBQUNWLEdBQVgsQ0FBZVMsTUFBZixFQUF1QixJQUF2QjtBQUNEO0FBQ0YsS0FQRDtBQVFELEdBdkJEO0FBd0JEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2V0Q2FjaGUgPSBuZXcgTWFwKCk7XG5leHBvcnQgZnVuY3Rpb24gc2V0KHByb3BlcnR5TmFtZSwgdmFsdWUpIHtcbiAgaWYgKCFwcm9wZXJ0eU5hbWUpXG4gICAgdGhyb3cgRXJyb3IoYFRhcmdldCBwcm9wZXJ0eSBuYW1lIG1pc3Npbmc6ICR7cHJvcGVydHlOYW1lfWApO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgcmV0dXJuIGhvc3QgPT4ge1xuICAgICAgaG9zdFtwcm9wZXJ0eU5hbWVdID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGxldCBmbiA9IHNldENhY2hlLmdldChwcm9wZXJ0eU5hbWUpO1xuXG4gIGlmICghZm4pIHtcbiAgICBmbiA9IChob3N0LCB7IHRhcmdldCB9KSA9PiB7XG4gICAgICBob3N0W3Byb3BlcnR5TmFtZV0gPSB0YXJnZXQudmFsdWU7XG4gICAgfTtcbiAgICBzZXRDYWNoZS5zZXQocHJvcGVydHlOYW1lLCBmbik7XG4gIH1cblxuICByZXR1cm4gZm47XG59XG5cbmNvbnN0IHByb21pc2VNYXAgPSBuZXcgV2Vha01hcCgpO1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmUocHJvbWlzZSwgcGxhY2Vob2xkZXIsIGRlbGF5ID0gMjAwKSB7XG4gIHJldHVybiAoaG9zdCwgdGFyZ2V0KSA9PiB7XG4gICAgbGV0IHRpbWVvdXQ7XG5cbiAgICBpZiAocGxhY2Vob2xkZXIpIHtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGltZW91dCA9IHVuZGVmaW5lZDtcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHBsYWNlaG9sZGVyKGhvc3QsIHRhcmdldCk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH1cblxuICAgIHByb21pc2VNYXAuc2V0KHRhcmdldCwgcHJvbWlzZSk7XG5cbiAgICBwcm9taXNlLnRoZW4odGVtcGxhdGUgPT4ge1xuICAgICAgaWYgKHRpbWVvdXQpIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblxuICAgICAgaWYgKHByb21pc2VNYXAuZ2V0KHRhcmdldCkgPT09IHByb21pc2UpIHtcbiAgICAgICAgdGVtcGxhdGUoaG9zdCwgdGFyZ2V0KTtcbiAgICAgICAgcHJvbWlzZU1hcC5zZXQodGFyZ2V0LCBudWxsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cbiJdfQ==

  var helpers = /*#__PURE__*/Object.freeze({
    __proto__: null,
    set: set$1,
    resolve: resolve
  });

  var PLACEHOLDER = getPlaceholder();
  var SVG_PLACEHOLDER = getPlaceholder("svg");
  var STYLE_IMPORT_REGEXP = /@import/;
  var templatesMap = new Map();
  var stylesMap = new WeakMap();
  var methods = {
    define: function define$1(elements) {
      define(elements);
      return this;
    },
    key: function key(id) {
      this.id = id;
      return this;
    },
    style: function style() {
      for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
        styles[_key] = arguments[_key];
      }

      stylesMap.set(this, styles.filter(function (style) {
        return style;
      }));
      return this;
    }
  };

  function create(parts, args, isSVG) {
    var createTemplate = function createTemplate(host) {
      var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : host;
      var styles = stylesMap.get(createTemplate);
      var hasAdoptedStyleSheets;
      var id = parts.join(PLACEHOLDER);

      if (styles) {
        var joinedStyles = styles.join(PLACEHOLDER);
        hasAdoptedStyleSheets = !!target.adoptedStyleSheets && !STYLE_IMPORT_REGEXP.test(joinedStyles);
        if (!hasAdoptedStyleSheets) id += joinedStyles;
      }

      if (isSVG) id += SVG_PLACEHOLDER;
      var render = templatesMap.get(id);

      if (!render) {
        render = compileTemplate(parts, isSVG, !hasAdoptedStyleSheets && styles);
        templatesMap.set(id, render);
      }

      render(host, target, args, hasAdoptedStyleSheets && styles);
    };

    return Object.assign(createTemplate, methods);
  }

  function html(parts) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return create(parts, args);
  }
  function svg(parts) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return create(parts, args, true);
  }
  Object.assign(html, helpers);
  Object.assign(svg, helpers);
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZpbmVFbGVtZW50cyIsImNvbXBpbGVUZW1wbGF0ZSIsImdldFBsYWNlaG9sZGVyIiwiaGVscGVycyIsIlBMQUNFSE9MREVSIiwiU1ZHX1BMQUNFSE9MREVSIiwiU1RZTEVfSU1QT1JUX1JFR0VYUCIsInRlbXBsYXRlc01hcCIsIk1hcCIsInN0eWxlc01hcCIsIldlYWtNYXAiLCJtZXRob2RzIiwiZGVmaW5lIiwiZWxlbWVudHMiLCJrZXkiLCJpZCIsInN0eWxlIiwic3R5bGVzIiwic2V0IiwiZmlsdGVyIiwiY3JlYXRlIiwicGFydHMiLCJhcmdzIiwiaXNTVkciLCJjcmVhdGVUZW1wbGF0ZSIsImhvc3QiLCJ0YXJnZXQiLCJnZXQiLCJoYXNBZG9wdGVkU3R5bGVTaGVldHMiLCJqb2luIiwiam9pbmVkU3R5bGVzIiwiYWRvcHRlZFN0eWxlU2hlZXRzIiwidGVzdCIsInJlbmRlciIsIk9iamVjdCIsImFzc2lnbiIsImh0bWwiLCJzdmciXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLGNBQVAsTUFBMkIsY0FBM0I7QUFFQSxTQUFTQyxlQUFULEVBQTBCQyxjQUExQixRQUFnRCxXQUFoRDtBQUNBLE9BQU8sS0FBS0MsT0FBWixNQUF5QixjQUF6QjtBQUVBLElBQU1DLFdBQVcsR0FBR0YsY0FBYyxFQUFsQztBQUNBLElBQU1HLGVBQWUsR0FBR0gsY0FBYyxDQUFDLEtBQUQsQ0FBdEM7QUFDQSxJQUFNSSxtQkFBbUIsR0FBRyxTQUE1QjtBQUVBLElBQU1DLFlBQVksR0FBRyxJQUFJQyxHQUFKLEVBQXJCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLElBQUlDLE9BQUosRUFBbEI7QUFFQSxJQUFNQyxPQUFPLEdBQUc7QUFDZEMsRUFBQUEsTUFEYyxrQkFDUEMsUUFETyxFQUNHO0FBQ2ZiLElBQUFBLGNBQWMsQ0FBQ2EsUUFBRCxDQUFkO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsR0FKYTtBQUtkQyxFQUFBQSxHQUxjLGVBS1ZDLEVBTFUsRUFLTjtBQUNOLFNBQUtBLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFdBQU8sSUFBUDtBQUNELEdBUmE7QUFTZEMsRUFBQUEsS0FUYyxtQkFTRztBQUFBLHNDQUFSQyxNQUFRO0FBQVJBLE1BQUFBLE1BQVE7QUFBQTs7QUFDZlIsSUFBQUEsU0FBUyxDQUFDUyxHQUFWLENBQ0UsSUFERixFQUVFRCxNQUFNLENBQUNFLE1BQVAsQ0FBYyxVQUFBSCxLQUFLO0FBQUEsYUFBSUEsS0FBSjtBQUFBLEtBQW5CLENBRkY7QUFJQSxXQUFPLElBQVA7QUFDRDtBQWZhLENBQWhCOztBQWtCQSxTQUFTSSxNQUFULENBQWdCQyxLQUFoQixFQUF1QkMsSUFBdkIsRUFBNkJDLEtBQTdCLEVBQW9DO0FBQ2xDLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsSUFBRCxFQUF5QjtBQUFBLFFBQWxCQyxNQUFrQix1RUFBVEQsSUFBUztBQUM5QyxRQUFNUixNQUFNLEdBQUdSLFNBQVMsQ0FBQ2tCLEdBQVYsQ0FBY0gsY0FBZCxDQUFmO0FBQ0EsUUFBSUkscUJBQUo7QUFDQSxRQUFJYixFQUFFLEdBQUdNLEtBQUssQ0FBQ1EsSUFBTixDQUFXekIsV0FBWCxDQUFUOztBQUVBLFFBQUlhLE1BQUosRUFBWTtBQUNWLFVBQU1hLFlBQVksR0FBR2IsTUFBTSxDQUFDWSxJQUFQLENBQVl6QixXQUFaLENBQXJCO0FBQ0F3QixNQUFBQSxxQkFBcUIsR0FDbkIsQ0FBQyxDQUFDRixNQUFNLENBQUNLLGtCQUFULElBQStCLENBQUN6QixtQkFBbUIsQ0FBQzBCLElBQXBCLENBQXlCRixZQUF6QixDQURsQztBQUVBLFVBQUksQ0FBQ0YscUJBQUwsRUFBNEJiLEVBQUUsSUFBSWUsWUFBTjtBQUM3Qjs7QUFFRCxRQUFJUCxLQUFKLEVBQVdSLEVBQUUsSUFBSVYsZUFBTjtBQUVYLFFBQUk0QixNQUFNLEdBQUcxQixZQUFZLENBQUNvQixHQUFiLENBQWlCWixFQUFqQixDQUFiOztBQUNBLFFBQUksQ0FBQ2tCLE1BQUwsRUFBYTtBQUNYQSxNQUFBQSxNQUFNLEdBQUdoQyxlQUFlLENBQUNvQixLQUFELEVBQVFFLEtBQVIsRUFBZSxDQUFDSyxxQkFBRCxJQUEwQlgsTUFBekMsQ0FBeEI7QUFDQVYsTUFBQUEsWUFBWSxDQUFDVyxHQUFiLENBQWlCSCxFQUFqQixFQUFxQmtCLE1BQXJCO0FBQ0Q7O0FBRURBLElBQUFBLE1BQU0sQ0FBQ1IsSUFBRCxFQUFPQyxNQUFQLEVBQWVKLElBQWYsRUFBcUJNLHFCQUFxQixJQUFJWCxNQUE5QyxDQUFOO0FBQ0QsR0FyQkQ7O0FBdUJBLFNBQU9pQixNQUFNLENBQUNDLE1BQVAsQ0FBY1gsY0FBZCxFQUE4QmIsT0FBOUIsQ0FBUDtBQUNEOztBQUVELE9BQU8sU0FBU3lCLElBQVQsQ0FBY2YsS0FBZCxFQUE4QjtBQUFBLHFDQUFOQyxJQUFNO0FBQU5BLElBQUFBLElBQU07QUFBQTs7QUFDbkMsU0FBT0YsTUFBTSxDQUFDQyxLQUFELEVBQVFDLElBQVIsQ0FBYjtBQUNEO0FBRUQsT0FBTyxTQUFTZSxHQUFULENBQWFoQixLQUFiLEVBQTZCO0FBQUEscUNBQU5DLElBQU07QUFBTkEsSUFBQUEsSUFBTTtBQUFBOztBQUNsQyxTQUFPRixNQUFNLENBQUNDLEtBQUQsRUFBUUMsSUFBUixFQUFjLElBQWQsQ0FBYjtBQUNEO0FBRURZLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxJQUFkLEVBQW9CakMsT0FBcEI7QUFDQStCLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRSxHQUFkLEVBQW1CbEMsT0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGVmaW5lRWxlbWVudHMgZnJvbSBcIi4uL2RlZmluZS5qc1wiO1xuXG5pbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGdldFBsYWNlaG9sZGVyIH0gZnJvbSBcIi4vY29yZS5qc1wiO1xuaW1wb3J0ICogYXMgaGVscGVycyBmcm9tIFwiLi9oZWxwZXJzLmpzXCI7XG5cbmNvbnN0IFBMQUNFSE9MREVSID0gZ2V0UGxhY2Vob2xkZXIoKTtcbmNvbnN0IFNWR19QTEFDRUhPTERFUiA9IGdldFBsYWNlaG9sZGVyKFwic3ZnXCIpO1xuY29uc3QgU1RZTEVfSU1QT1JUX1JFR0VYUCA9IC9AaW1wb3J0LztcblxuY29uc3QgdGVtcGxhdGVzTWFwID0gbmV3IE1hcCgpO1xuY29uc3Qgc3R5bGVzTWFwID0gbmV3IFdlYWtNYXAoKTtcblxuY29uc3QgbWV0aG9kcyA9IHtcbiAgZGVmaW5lKGVsZW1lbnRzKSB7XG4gICAgZGVmaW5lRWxlbWVudHMoZWxlbWVudHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBrZXkoaWQpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIHN0eWxlKC4uLnN0eWxlcykge1xuICAgIHN0eWxlc01hcC5zZXQoXG4gICAgICB0aGlzLFxuICAgICAgc3R5bGVzLmZpbHRlcihzdHlsZSA9PiBzdHlsZSksXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZShwYXJ0cywgYXJncywgaXNTVkcpIHtcbiAgY29uc3QgY3JlYXRlVGVtcGxhdGUgPSAoaG9zdCwgdGFyZ2V0ID0gaG9zdCkgPT4ge1xuICAgIGNvbnN0IHN0eWxlcyA9IHN0eWxlc01hcC5nZXQoY3JlYXRlVGVtcGxhdGUpO1xuICAgIGxldCBoYXNBZG9wdGVkU3R5bGVTaGVldHM7XG4gICAgbGV0IGlkID0gcGFydHMuam9pbihQTEFDRUhPTERFUik7XG5cbiAgICBpZiAoc3R5bGVzKSB7XG4gICAgICBjb25zdCBqb2luZWRTdHlsZXMgPSBzdHlsZXMuam9pbihQTEFDRUhPTERFUik7XG4gICAgICBoYXNBZG9wdGVkU3R5bGVTaGVldHMgPVxuICAgICAgICAhIXRhcmdldC5hZG9wdGVkU3R5bGVTaGVldHMgJiYgIVNUWUxFX0lNUE9SVF9SRUdFWFAudGVzdChqb2luZWRTdHlsZXMpO1xuICAgICAgaWYgKCFoYXNBZG9wdGVkU3R5bGVTaGVldHMpIGlkICs9IGpvaW5lZFN0eWxlcztcbiAgICB9XG5cbiAgICBpZiAoaXNTVkcpIGlkICs9IFNWR19QTEFDRUhPTERFUjtcblxuICAgIGxldCByZW5kZXIgPSB0ZW1wbGF0ZXNNYXAuZ2V0KGlkKTtcbiAgICBpZiAoIXJlbmRlcikge1xuICAgICAgcmVuZGVyID0gY29tcGlsZVRlbXBsYXRlKHBhcnRzLCBpc1NWRywgIWhhc0Fkb3B0ZWRTdHlsZVNoZWV0cyAmJiBzdHlsZXMpO1xuICAgICAgdGVtcGxhdGVzTWFwLnNldChpZCwgcmVuZGVyKTtcbiAgICB9XG5cbiAgICByZW5kZXIoaG9zdCwgdGFyZ2V0LCBhcmdzLCBoYXNBZG9wdGVkU3R5bGVTaGVldHMgJiYgc3R5bGVzKTtcbiAgfTtcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihjcmVhdGVUZW1wbGF0ZSwgbWV0aG9kcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodG1sKHBhcnRzLCAuLi5hcmdzKSB7XG4gIHJldHVybiBjcmVhdGUocGFydHMsIGFyZ3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3ZnKHBhcnRzLCAuLi5hcmdzKSB7XG4gIHJldHVybiBjcmVhdGUocGFydHMsIGFyZ3MsIHRydWUpO1xufVxuXG5PYmplY3QuYXNzaWduKGh0bWwsIGhlbHBlcnMpO1xuT2JqZWN0LmFzc2lnbihzdmcsIGhlbHBlcnMpO1xuIl19

  const PaneView = {
    render: () => html`
    <slot name="content">Default content</slot>
  `
  };

  define ('e-pane', PaneView);

  /**
   * A special placeholder value used to specify "gaps" within curried functions,
   * allowing partial application of any combination of arguments, regardless of
   * their positions.
   *
   * If `g` is a curried ternary function and `_` is `R.__`, the following are
   * equivalent:
   *
   *   - `g(1, 2, 3)`
   *   - `g(_, 2, 3)(1)`
   *   - `g(_, _, 3)(1)(2)`
   *   - `g(_, _, 3)(1, 2)`
   *   - `g(_, 2, _)(1, 3)`
   *   - `g(_, 2)(1)(3)`
   *   - `g(_, 2)(1, 3)`
   *   - `g(_, 2)(_, 3)(1)`
   *
   * @name __
   * @constant
   * @memberOf R
   * @since v0.6.0
   * @category Function
   * @example
   *
   *      const greet = R.replace('{name}', R.__, 'Hello, {name}!');
   *      greet('Alice'); //=> 'Hello, Alice!'
   */
  var __ = {
    '@@functional/placeholder': true
  };

  function _isPlaceholder(a) {
    return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
  }

  /**
   * Optimized internal one-arity curry function.
   *
   * @private
   * @category Function
   * @param {Function} fn The function to curry.
   * @return {Function} The curried function.
   */

  function _curry1(fn) {
    return function f1(a) {
      if (arguments.length === 0 || _isPlaceholder(a)) {
        return f1;
      } else {
        return fn.apply(this, arguments);
      }
    };
  }

  /**
   * Optimized internal two-arity curry function.
   *
   * @private
   * @category Function
   * @param {Function} fn The function to curry.
   * @return {Function} The curried function.
   */

  function _curry2(fn) {
    return function f2(a, b) {
      switch (arguments.length) {
        case 0:
          return f2;

        case 1:
          return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
            return fn(a, _b);
          });

        default:
          return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
            return fn(_a, b);
          }) : _isPlaceholder(b) ? _curry1(function (_b) {
            return fn(a, _b);
          }) : fn(a, b);
      }
    };
  }

  /**
   * Adds two values.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Math
   * @sig Number -> Number -> Number
   * @param {Number} a
   * @param {Number} b
   * @return {Number}
   * @see R.subtract
   * @example
   *
   *      R.add(2, 3);       //=>  5
   *      R.add(7)(10);      //=> 17
   */

  var add =
  /*#__PURE__*/
  _curry2(function add(a, b) {
    return Number(a) + Number(b);
  });

  /**
   * Private `concat` function to merge two array-like objects.
   *
   * @private
   * @param {Array|Arguments} [set1=[]] An array-like object.
   * @param {Array|Arguments} [set2=[]] An array-like object.
   * @return {Array} A new, merged array.
   * @example
   *
   *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
   */
  function _concat(set1, set2) {
    set1 = set1 || [];
    set2 = set2 || [];
    var idx;
    var len1 = set1.length;
    var len2 = set2.length;
    var result = [];
    idx = 0;

    while (idx < len1) {
      result[result.length] = set1[idx];
      idx += 1;
    }

    idx = 0;

    while (idx < len2) {
      result[result.length] = set2[idx];
      idx += 1;
    }

    return result;
  }

  function _arity(n, fn) {
    /* eslint-disable no-unused-vars */
    switch (n) {
      case 0:
        return function () {
          return fn.apply(this, arguments);
        };

      case 1:
        return function (a0) {
          return fn.apply(this, arguments);
        };

      case 2:
        return function (a0, a1) {
          return fn.apply(this, arguments);
        };

      case 3:
        return function (a0, a1, a2) {
          return fn.apply(this, arguments);
        };

      case 4:
        return function (a0, a1, a2, a3) {
          return fn.apply(this, arguments);
        };

      case 5:
        return function (a0, a1, a2, a3, a4) {
          return fn.apply(this, arguments);
        };

      case 6:
        return function (a0, a1, a2, a3, a4, a5) {
          return fn.apply(this, arguments);
        };

      case 7:
        return function (a0, a1, a2, a3, a4, a5, a6) {
          return fn.apply(this, arguments);
        };

      case 8:
        return function (a0, a1, a2, a3, a4, a5, a6, a7) {
          return fn.apply(this, arguments);
        };

      case 9:
        return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
          return fn.apply(this, arguments);
        };

      case 10:
        return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
          return fn.apply(this, arguments);
        };

      default:
        throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
    }
  }

  /**
   * Internal curryN function.
   *
   * @private
   * @category Function
   * @param {Number} length The arity of the curried function.
   * @param {Array} received An array of arguments received thus far.
   * @param {Function} fn The function to curry.
   * @return {Function} The curried function.
   */

  function _curryN(length, received, fn) {
    return function () {
      var combined = [];
      var argsIdx = 0;
      var left = length;
      var combinedIdx = 0;

      while (combinedIdx < received.length || argsIdx < arguments.length) {
        var result;

        if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
          result = received[combinedIdx];
        } else {
          result = arguments[argsIdx];
          argsIdx += 1;
        }

        combined[combinedIdx] = result;

        if (!_isPlaceholder(result)) {
          left -= 1;
        }

        combinedIdx += 1;
      }

      return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
    };
  }

  /**
   * Returns a curried equivalent of the provided function, with the specified
   * arity. The curried function has two unusual capabilities. First, its
   * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
   * following are equivalent:
   *
   *   - `g(1)(2)(3)`
   *   - `g(1)(2, 3)`
   *   - `g(1, 2)(3)`
   *   - `g(1, 2, 3)`
   *
   * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
   * "gaps", allowing partial application of any combination of arguments,
   * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
   * the following are equivalent:
   *
   *   - `g(1, 2, 3)`
   *   - `g(_, 2, 3)(1)`
   *   - `g(_, _, 3)(1)(2)`
   *   - `g(_, _, 3)(1, 2)`
   *   - `g(_, 2)(1)(3)`
   *   - `g(_, 2)(1, 3)`
   *   - `g(_, 2)(_, 3)(1)`
   *
   * @func
   * @memberOf R
   * @since v0.5.0
   * @category Function
   * @sig Number -> (* -> a) -> (* -> a)
   * @param {Number} length The arity for the returned function.
   * @param {Function} fn The function to curry.
   * @return {Function} A new, curried function.
   * @see R.curry
   * @example
   *
   *      const sumArgs = (...args) => R.sum(args);
   *
   *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
   *      const f = curriedAddFourNumbers(1, 2);
   *      const g = f(3);
   *      g(4); //=> 10
   */

  var curryN =
  /*#__PURE__*/
  _curry2(function curryN(length, fn) {
    if (length === 1) {
      return _curry1(fn);
    }

    return _arity(length, _curryN(length, [], fn));
  });

  /**
   * Creates a new list iteration function from an existing one by adding two new
   * parameters to its callback function: the current index, and the entire list.
   *
   * This would turn, for instance, [`R.map`](#map) function into one that
   * more closely resembles `Array.prototype.map`. Note that this will only work
   * for functions in which the iteration callback function is the first
   * parameter, and where the list is the last parameter. (This latter might be
   * unimportant if the list parameter is not used.)
   *
   * @func
   * @memberOf R
   * @since v0.15.0
   * @category Function
   * @category List
   * @sig ((a ... -> b) ... -> [a] -> *) -> ((a ..., Int, [a] -> b) ... -> [a] -> *)
   * @param {Function} fn A list iteration function that does not pass index or list to its callback
   * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
   * @example
   *
   *      const mapIndexed = R.addIndex(R.map);
   *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
   *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
   */

  var addIndex =
  /*#__PURE__*/
  _curry1(function addIndex(fn) {
    return curryN(fn.length, function () {
      var idx = 0;
      var origFn = arguments[0];
      var list = arguments[arguments.length - 1];
      var args = Array.prototype.slice.call(arguments, 0);

      args[0] = function () {
        var result = origFn.apply(this, _concat(arguments, [idx, list]));
        idx += 1;
        return result;
      };

      return fn.apply(this, args);
    });
  });

  /**
   * Optimized internal three-arity curry function.
   *
   * @private
   * @category Function
   * @param {Function} fn The function to curry.
   * @return {Function} The curried function.
   */

  function _curry3(fn) {
    return function f3(a, b, c) {
      switch (arguments.length) {
        case 0:
          return f3;

        case 1:
          return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
            return fn(a, _b, _c);
          });

        case 2:
          return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
            return fn(_a, b, _c);
          }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
            return fn(a, _b, _c);
          }) : _curry1(function (_c) {
            return fn(a, b, _c);
          });

        default:
          return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
            return fn(_a, _b, c);
          }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
            return fn(_a, b, _c);
          }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
            return fn(a, _b, _c);
          }) : _isPlaceholder(a) ? _curry1(function (_a) {
            return fn(_a, b, c);
          }) : _isPlaceholder(b) ? _curry1(function (_b) {
            return fn(a, _b, c);
          }) : _isPlaceholder(c) ? _curry1(function (_c) {
            return fn(a, b, _c);
          }) : fn(a, b, c);
      }
    };
  }

  /**
   * Applies a function to the value at the given index of an array, returning a
   * new copy of the array with the element at the given index replaced with the
   * result of the function application.
   *
   * @func
   * @memberOf R
   * @since v0.14.0
   * @category List
   * @sig Number -> (a -> a) -> [a] -> [a]
   * @param {Number} idx The index.
   * @param {Function} fn The function to apply.
   * @param {Array|Arguments} list An array-like object whose value
   *        at the supplied index will be replaced.
   * @return {Array} A copy of the supplied array-like object with
   *         the element at index `idx` replaced with the value
   *         returned by applying `fn` to the existing element.
   * @see R.update
   * @example
   *
   *      R.adjust(1, R.toUpper, ['a', 'b', 'c', 'd']);      //=> ['a', 'B', 'c', 'd']
   *      R.adjust(-1, R.toUpper, ['a', 'b', 'c', 'd']);     //=> ['a', 'b', 'c', 'D']
   * @symb R.adjust(-1, f, [a, b]) = [a, f(b)]
   * @symb R.adjust(0, f, [a, b]) = [f(a), b]
   */

  var adjust =
  /*#__PURE__*/
  _curry3(function adjust(idx, fn, list) {
    if (idx >= list.length || idx < -list.length) {
      return list;
    }

    var start = idx < 0 ? list.length : 0;

    var _idx = start + idx;

    var _list = _concat(list);

    _list[_idx] = fn(list[_idx]);
    return _list;
  });

  /**
   * Tests whether or not an object is an array.
   *
   * @private
   * @param {*} val The object to test.
   * @return {Boolean} `true` if `val` is an array, `false` otherwise.
   * @example
   *
   *      _isArray([]); //=> true
   *      _isArray(null); //=> false
   *      _isArray({}); //=> false
   */
  var _isArray = Array.isArray || function _isArray(val) {
    return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
  };

  function _isTransformer(obj) {
    return obj != null && typeof obj['@@transducer/step'] === 'function';
  }

  /**
   * Returns a function that dispatches with different strategies based on the
   * object in list position (last argument). If it is an array, executes [fn].
   * Otherwise, if it has a function with one of the given method names, it will
   * execute that function (functor case). Otherwise, if it is a transformer,
   * uses transducer [xf] to return a new transformer (transducer case).
   * Otherwise, it will default to executing [fn].
   *
   * @private
   * @param {Array} methodNames properties to check for a custom implementation
   * @param {Function} xf transducer to initialize if object is transformer
   * @param {Function} fn default ramda implementation
   * @return {Function} A function that dispatches on object in list position
   */

  function _dispatchable(methodNames, xf, fn) {
    return function () {
      if (arguments.length === 0) {
        return fn();
      }

      var args = Array.prototype.slice.call(arguments, 0);
      var obj = args.pop();

      if (!_isArray(obj)) {
        var idx = 0;

        while (idx < methodNames.length) {
          if (typeof obj[methodNames[idx]] === 'function') {
            return obj[methodNames[idx]].apply(obj, args);
          }

          idx += 1;
        }

        if (_isTransformer(obj)) {
          var transducer = xf.apply(null, args);
          return transducer(obj);
        }
      }

      return fn.apply(this, arguments);
    };
  }

  var _xfBase = {
    init: function () {
      return this.xf['@@transducer/init']();
    },
    result: function (result) {
      return this.xf['@@transducer/result'](result);
    }
  };

  /**
   * Returns the larger of its two arguments.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig Ord a => a -> a -> a
   * @param {*} a
   * @param {*} b
   * @return {*}
   * @see R.maxBy, R.min
   * @example
   *
   *      R.max(789, 123); //=> 789
   *      R.max('a', 'b'); //=> 'b'
   */

  var max =
  /*#__PURE__*/
  _curry2(function max(a, b) {
    return b > a ? b : a;
  });

  function _map(fn, functor) {
    var idx = 0;
    var len = functor.length;
    var result = Array(len);

    while (idx < len) {
      result[idx] = fn(functor[idx]);
      idx += 1;
    }

    return result;
  }

  function _isString(x) {
    return Object.prototype.toString.call(x) === '[object String]';
  }

  /**
   * Tests whether or not an object is similar to an array.
   *
   * @private
   * @category Type
   * @category List
   * @sig * -> Boolean
   * @param {*} x The object to test.
   * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
   * @example
   *
   *      _isArrayLike([]); //=> true
   *      _isArrayLike(true); //=> false
   *      _isArrayLike({}); //=> false
   *      _isArrayLike({length: 10}); //=> false
   *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
   */

  var _isArrayLike =
  /*#__PURE__*/
  _curry1(function isArrayLike(x) {
    if (_isArray(x)) {
      return true;
    }

    if (!x) {
      return false;
    }

    if (typeof x !== 'object') {
      return false;
    }

    if (_isString(x)) {
      return false;
    }

    if (x.nodeType === 1) {
      return !!x.length;
    }

    if (x.length === 0) {
      return true;
    }

    if (x.length > 0) {
      return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
    }

    return false;
  });

  var XWrap =
  /*#__PURE__*/
  function () {
    function XWrap(fn) {
      this.f = fn;
    }

    XWrap.prototype['@@transducer/init'] = function () {
      throw new Error('init not implemented on XWrap');
    };

    XWrap.prototype['@@transducer/result'] = function (acc) {
      return acc;
    };

    XWrap.prototype['@@transducer/step'] = function (acc, x) {
      return this.f(acc, x);
    };

    return XWrap;
  }();

  function _xwrap(fn) {
    return new XWrap(fn);
  }

  /**
   * Creates a function that is bound to a context.
   * Note: `R.bind` does not provide the additional argument-binding capabilities of
   * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
   *
   * @func
   * @memberOf R
   * @since v0.6.0
   * @category Function
   * @category Object
   * @sig (* -> *) -> {*} -> (* -> *)
   * @param {Function} fn The function to bind to context
   * @param {Object} thisObj The context to bind `fn` to
   * @return {Function} A function that will execute in the context of `thisObj`.
   * @see R.partial
   * @example
   *
   *      const log = R.bind(console.log, console);
   *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
   *      // logs {a: 2}
   * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
   */

  var bind =
  /*#__PURE__*/
  _curry2(function bind(fn, thisObj) {
    return _arity(fn.length, function () {
      return fn.apply(thisObj, arguments);
    });
  });

  function _arrayReduce(xf, acc, list) {
    var idx = 0;
    var len = list.length;

    while (idx < len) {
      acc = xf['@@transducer/step'](acc, list[idx]);

      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }

      idx += 1;
    }

    return xf['@@transducer/result'](acc);
  }

  function _iterableReduce(xf, acc, iter) {
    var step = iter.next();

    while (!step.done) {
      acc = xf['@@transducer/step'](acc, step.value);

      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }

      step = iter.next();
    }

    return xf['@@transducer/result'](acc);
  }

  function _methodReduce(xf, acc, obj, methodName) {
    return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc));
  }

  var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
  function _reduce(fn, acc, list) {
    if (typeof fn === 'function') {
      fn = _xwrap(fn);
    }

    if (_isArrayLike(list)) {
      return _arrayReduce(fn, acc, list);
    }

    if (typeof list['fantasy-land/reduce'] === 'function') {
      return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
    }

    if (list[symIterator] != null) {
      return _iterableReduce(fn, acc, list[symIterator]());
    }

    if (typeof list.next === 'function') {
      return _iterableReduce(fn, acc, list);
    }

    if (typeof list.reduce === 'function') {
      return _methodReduce(fn, acc, list, 'reduce');
    }

    throw new TypeError('reduce: list must be array or iterable');
  }

  var XMap =
  /*#__PURE__*/
  function () {
    function XMap(f, xf) {
      this.xf = xf;
      this.f = f;
    }

    XMap.prototype['@@transducer/init'] = _xfBase.init;
    XMap.prototype['@@transducer/result'] = _xfBase.result;

    XMap.prototype['@@transducer/step'] = function (result, input) {
      return this.xf['@@transducer/step'](result, this.f(input));
    };

    return XMap;
  }();

  var _xmap =
  /*#__PURE__*/
  _curry2(function _xmap(f, xf) {
    return new XMap(f, xf);
  });

  function _has(prop, obj) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

  var toString = Object.prototype.toString;

  var _isArguments =
  /*#__PURE__*/
  function () {
    return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
      return toString.call(x) === '[object Arguments]';
    } : function _isArguments(x) {
      return _has('callee', x);
    };
  }();

  var hasEnumBug = !
  /*#__PURE__*/
  {
    toString: null
  }.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString']; // Safari bug

  var hasArgsEnumBug =
  /*#__PURE__*/
  function () {

    return arguments.propertyIsEnumerable('length');
  }();

  var contains = function contains(list, item) {
    var idx = 0;

    while (idx < list.length) {
      if (list[idx] === item) {
        return true;
      }

      idx += 1;
    }

    return false;
  };
  /**
   * Returns a list containing the names of all the enumerable own properties of
   * the supplied object.
   * Note that the order of the output array is not guaranteed to be consistent
   * across different JS platforms.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Object
   * @sig {k: v} -> [k]
   * @param {Object} obj The object to extract properties from
   * @return {Array} An array of the object's own properties.
   * @see R.keysIn, R.values
   * @example
   *
   *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
   */


  var keys = typeof Object.keys === 'function' && !hasArgsEnumBug ?
  /*#__PURE__*/
  _curry1(function keys(obj) {
    return Object(obj) !== obj ? [] : Object.keys(obj);
  }) :
  /*#__PURE__*/
  _curry1(function keys(obj) {
    if (Object(obj) !== obj) {
      return [];
    }

    var prop, nIdx;
    var ks = [];

    var checkArgsLength = hasArgsEnumBug && _isArguments(obj);

    for (prop in obj) {
      if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
        ks[ks.length] = prop;
      }
    }

    if (hasEnumBug) {
      nIdx = nonEnumerableProps.length - 1;

      while (nIdx >= 0) {
        prop = nonEnumerableProps[nIdx];

        if (_has(prop, obj) && !contains(ks, prop)) {
          ks[ks.length] = prop;
        }

        nIdx -= 1;
      }
    }

    return ks;
  });

  /**
   * Takes a function and
   * a [functor](https://github.com/fantasyland/fantasy-land#functor),
   * applies the function to each of the functor's values, and returns
   * a functor of the same shape.
   *
   * Ramda provides suitable `map` implementations for `Array` and `Object`,
   * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
   *
   * Dispatches to the `map` method of the second argument, if present.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * Also treats functions as functors and will compose them together.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig Functor f => (a -> b) -> f a -> f b
   * @param {Function} fn The function to be called on every element of the input `list`.
   * @param {Array} list The list to be iterated over.
   * @return {Array} The new list.
   * @see R.transduce, R.addIndex
   * @example
   *
   *      const double = x => x * 2;
   *
   *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
   *
   *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
   * @symb R.map(f, [a, b]) = [f(a), f(b)]
   * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
   * @symb R.map(f, functor_o) = functor_o.map(f)
   */

  var map$1 =
  /*#__PURE__*/
  _curry2(
  /*#__PURE__*/
  _dispatchable(['fantasy-land/map', 'map'], _xmap, function map(fn, functor) {
    switch (Object.prototype.toString.call(functor)) {
      case '[object Function]':
        return curryN(functor.length, function () {
          return fn.call(this, functor.apply(this, arguments));
        });

      case '[object Object]':
        return _reduce(function (acc, key) {
          acc[key] = fn(functor[key]);
          return acc;
        }, {}, keys(functor));

      default:
        return _map(fn, functor);
    }
  }));

  /**
   * Returns a single item by iterating through the list, successively calling
   * the iterator function and passing it an accumulator value and the current
   * value from the array, and then passing the result to the next call.
   *
   * The iterator function receives two values: *(acc, value)*. It may use
   * [`R.reduced`](#reduced) to shortcut the iteration.
   *
   * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
   * is *(value, acc)*.
   *
   * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
   * arrays), unlike the native `Array.prototype.reduce` method. For more details
   * on this behavior, see:
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
   *
   * Dispatches to the `reduce` method of the third argument, if present. When
   * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
   * shortcuting, as this is not implemented by `reduce`.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig ((a, b) -> a) -> a -> [b] -> a
   * @param {Function} fn The iterator function. Receives two values, the accumulator and the
   *        current element from the array.
   * @param {*} acc The accumulator value.
   * @param {Array} list The list to iterate over.
   * @return {*} The final, accumulated value.
   * @see R.reduced, R.addIndex, R.reduceRight
   * @example
   *
   *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
   *      //          -               -10
   *      //         / \              / \
   *      //        -   4           -6   4
   *      //       / \              / \
   *      //      -   3   ==>     -3   3
   *      //     / \              / \
   *      //    -   2           -1   2
   *      //   / \              / \
   *      //  0   1            0   1
   *
   * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
   */

  var reduce =
  /*#__PURE__*/
  _curry3(_reduce);

  /**
   * Returns a function that always returns the given value. Note that for
   * non-primitives the value returned is a reference to the original value.
   *
   * This function is known as `const`, `constant`, or `K` (for K combinator) in
   * other languages and libraries.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig a -> (* -> a)
   * @param {*} val The value to wrap in a function
   * @return {Function} A Function :: * -> val.
   * @example
   *
   *      const t = R.always('Tee');
   *      t(); //=> 'Tee'
   */

  var always =
  /*#__PURE__*/
  _curry1(function always(val) {
    return function () {
      return val;
    };
  });

  function _isFunction(x) {
    var type = Object.prototype.toString.call(x);
    return type === '[object Function]' || type === '[object AsyncFunction]' || type === '[object GeneratorFunction]' || type === '[object AsyncGeneratorFunction]';
  }

  /**
   * Gives a single-word string description of the (native) type of a value,
   * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
   * attempt to distinguish user Object types any further, reporting them all as
   * 'Object'.
   *
   * @func
   * @memberOf R
   * @since v0.8.0
   * @category Type
   * @sig (* -> {*}) -> String
   * @param {*} val The value to test
   * @return {String}
   * @example
   *
   *      R.type({}); //=> "Object"
   *      R.type(1); //=> "Number"
   *      R.type(false); //=> "Boolean"
   *      R.type('s'); //=> "String"
   *      R.type(null); //=> "Null"
   *      R.type([]); //=> "Array"
   *      R.type(/[A-z]/); //=> "RegExp"
   *      R.type(() => {}); //=> "Function"
   *      R.type(undefined); //=> "Undefined"
   */

  var type =
  /*#__PURE__*/
  _curry1(function type(val) {
    return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
  });

  function _pipe(f, g) {
    return function () {
      return g.call(this, f.apply(this, arguments));
    };
  }

  /**
   * This checks whether a function has a [methodname] function. If it isn't an
   * array it will execute that function otherwise it will default to the ramda
   * implementation.
   *
   * @private
   * @param {Function} fn ramda implemtation
   * @param {String} methodname property to check for a custom implementation
   * @return {Object} Whatever the return value of the method is.
   */

  function _checkForMethod(methodname, fn) {
    return function () {
      var length = arguments.length;

      if (length === 0) {
        return fn();
      }

      var obj = arguments[length - 1];
      return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
    };
  }

  /**
   * Returns the elements of the given list or string (or object with a `slice`
   * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
   *
   * Dispatches to the `slice` method of the third argument, if present.
   *
   * @func
   * @memberOf R
   * @since v0.1.4
   * @category List
   * @sig Number -> Number -> [a] -> [a]
   * @sig Number -> Number -> String -> String
   * @param {Number} fromIndex The start index (inclusive).
   * @param {Number} toIndex The end index (exclusive).
   * @param {*} list
   * @return {*}
   * @example
   *
   *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
   *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
   *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
   *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
   *      R.slice(0, 3, 'ramda');                     //=> 'ram'
   */

  var slice =
  /*#__PURE__*/
  _curry3(
  /*#__PURE__*/
  _checkForMethod('slice', function slice(fromIndex, toIndex, list) {
    return Array.prototype.slice.call(list, fromIndex, toIndex);
  }));

  /**
   * Returns all but the first element of the given list or string (or object
   * with a `tail` method).
   *
   * Dispatches to the `slice` method of the first argument, if present.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig [a] -> [a]
   * @sig String -> String
   * @param {*} list
   * @return {*}
   * @see R.head, R.init, R.last
   * @example
   *
   *      R.tail([1, 2, 3]);  //=> [2, 3]
   *      R.tail([1, 2]);     //=> [2]
   *      R.tail([1]);        //=> []
   *      R.tail([]);         //=> []
   *
   *      R.tail('abc');  //=> 'bc'
   *      R.tail('ab');   //=> 'b'
   *      R.tail('a');    //=> ''
   *      R.tail('');     //=> ''
   */

  var tail =
  /*#__PURE__*/
  _curry1(
  /*#__PURE__*/
  _checkForMethod('tail',
  /*#__PURE__*/
  slice(1, Infinity)));

  /**
   * Performs left-to-right function composition. The first argument may have
   * any arity; the remaining arguments must be unary.
   *
   * In some libraries this function is named `sequence`.
   *
   * **Note:** The result of pipe is not automatically curried.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
   * @param {...Function} functions
   * @return {Function}
   * @see R.compose
   * @example
   *
   *      const f = R.pipe(Math.pow, R.negate, R.inc);
   *
   *      f(3, 4); // -(3^4) + 1
   * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
   */

  function pipe() {
    if (arguments.length === 0) {
      throw new Error('pipe requires at least one argument');
    }

    return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
  }

  function _arrayFromIterator(iter) {
    var list = [];
    var next;

    while (!(next = iter.next()).done) {
      list.push(next.value);
    }

    return list;
  }

  function _includesWith(pred, x, list) {
    var idx = 0;
    var len = list.length;

    while (idx < len) {
      if (pred(x, list[idx])) {
        return true;
      }

      idx += 1;
    }

    return false;
  }

  function _functionName(f) {
    // String(x => x) evaluates to "x => x", so the pattern may not match.
    var match = String(f).match(/^function (\w*)/);
    return match == null ? '' : match[1];
  }

  // Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
  function _objectIs(a, b) {
    // SameValue algorithm
    if (a === b) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return a !== 0 || 1 / a === 1 / b;
    } else {
      // Step 6.a: NaN == NaN
      return a !== a && b !== b;
    }
  }

  var _objectIs$1 = typeof Object.is === 'function' ? Object.is : _objectIs;

  /**
   * private _uniqContentEquals function.
   * That function is checking equality of 2 iterator contents with 2 assumptions
   * - iterators lengths are the same
   * - iterators values are unique
   *
   * false-positive result will be returned for comparision of, e.g.
   * - [1,2,3] and [1,2,3,4]
   * - [1,1,1] and [1,2,3]
   * */

  function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
    var a = _arrayFromIterator(aIterator);

    var b = _arrayFromIterator(bIterator);

    function eq(_a, _b) {
      return _equals(_a, _b, stackA.slice(), stackB.slice());
    } // if *a* array contains any element that is not included in *b*


    return !_includesWith(function (b, aItem) {
      return !_includesWith(eq, aItem, b);
    }, b, a);
  }

  function _equals(a, b, stackA, stackB) {
    if (_objectIs$1(a, b)) {
      return true;
    }

    var typeA = type(a);

    if (typeA !== type(b)) {
      return false;
    }

    if (a == null || b == null) {
      return false;
    }

    if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
      return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
    }

    if (typeof a.equals === 'function' || typeof b.equals === 'function') {
      return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
    }

    switch (typeA) {
      case 'Arguments':
      case 'Array':
      case 'Object':
        if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
          return a === b;
        }

        break;

      case 'Boolean':
      case 'Number':
      case 'String':
        if (!(typeof a === typeof b && _objectIs$1(a.valueOf(), b.valueOf()))) {
          return false;
        }

        break;

      case 'Date':
        if (!_objectIs$1(a.valueOf(), b.valueOf())) {
          return false;
        }

        break;

      case 'Error':
        return a.name === b.name && a.message === b.message;

      case 'RegExp':
        if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
          return false;
        }

        break;
    }

    var idx = stackA.length - 1;

    while (idx >= 0) {
      if (stackA[idx] === a) {
        return stackB[idx] === b;
      }

      idx -= 1;
    }

    switch (typeA) {
      case 'Map':
        if (a.size !== b.size) {
          return false;
        }

        return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));

      case 'Set':
        if (a.size !== b.size) {
          return false;
        }

        return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));

      case 'Arguments':
      case 'Array':
      case 'Object':
      case 'Boolean':
      case 'Number':
      case 'String':
      case 'Date':
      case 'Error':
      case 'RegExp':
      case 'Int8Array':
      case 'Uint8Array':
      case 'Uint8ClampedArray':
      case 'Int16Array':
      case 'Uint16Array':
      case 'Int32Array':
      case 'Uint32Array':
      case 'Float32Array':
      case 'Float64Array':
      case 'ArrayBuffer':
        break;

      default:
        // Values of other types are only equal if identical.
        return false;
    }

    var keysA = keys(a);

    if (keysA.length !== keys(b).length) {
      return false;
    }

    var extendedStackA = stackA.concat([a]);
    var extendedStackB = stackB.concat([b]);
    idx = keysA.length - 1;

    while (idx >= 0) {
      var key = keysA[idx];

      if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
        return false;
      }

      idx -= 1;
    }

    return true;
  }

  /**
   * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
   * cyclical data structures.
   *
   * Dispatches symmetrically to the `equals` methods of both arguments, if
   * present.
   *
   * @func
   * @memberOf R
   * @since v0.15.0
   * @category Relation
   * @sig a -> b -> Boolean
   * @param {*} a
   * @param {*} b
   * @return {Boolean}
   * @example
   *
   *      R.equals(1, 1); //=> true
   *      R.equals(1, '1'); //=> false
   *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
   *
   *      const a = {}; a.v = a;
   *      const b = {}; b.v = b;
   *      R.equals(a, b); //=> true
   */

  var equals =
  /*#__PURE__*/
  _curry2(function equals(a, b) {
    return _equals(a, b, [], []);
  });

  function _indexOf(list, a, idx) {
    var inf, item; // Array.prototype.indexOf doesn't exist below IE9

    if (typeof list.indexOf === 'function') {
      switch (typeof a) {
        case 'number':
          if (a === 0) {
            // manually crawl the list to distinguish between +0 and -0
            inf = 1 / a;

            while (idx < list.length) {
              item = list[idx];

              if (item === 0 && 1 / item === inf) {
                return idx;
              }

              idx += 1;
            }

            return -1;
          } else if (a !== a) {
            // NaN
            while (idx < list.length) {
              item = list[idx];

              if (typeof item === 'number' && item !== item) {
                return idx;
              }

              idx += 1;
            }

            return -1;
          } // non-zero numbers can utilise Set


          return list.indexOf(a, idx);
        // all these types can utilise Set

        case 'string':
        case 'boolean':
        case 'function':
        case 'undefined':
          return list.indexOf(a, idx);

        case 'object':
          if (a === null) {
            // null can utilise Set
            return list.indexOf(a, idx);
          }

      }
    } // anything else not covered above, defer to R.equals


    while (idx < list.length) {
      if (equals(list[idx], a)) {
        return idx;
      }

      idx += 1;
    }

    return -1;
  }

  function _includes(a, list) {
    return _indexOf(list, a, 0) >= 0;
  }

  function _quote(s) {
    var escaped = s.replace(/\\/g, '\\\\').replace(/[\b]/g, '\\b') // \b matches word boundary; [\b] matches backspace
    .replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\0/g, '\\0');
    return '"' + escaped.replace(/"/g, '\\"') + '"';
  }

  /**
   * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
   */
  var pad = function pad(n) {
    return (n < 10 ? '0' : '') + n;
  };

  var _toISOString = typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {
    return d.toISOString();
  } : function _toISOString(d) {
    return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
  };

  function _complement(f) {
    return function () {
      return !f.apply(this, arguments);
    };
  }

  function _filter(fn, list) {
    var idx = 0;
    var len = list.length;
    var result = [];

    while (idx < len) {
      if (fn(list[idx])) {
        result[result.length] = list[idx];
      }

      idx += 1;
    }

    return result;
  }

  function _isObject(x) {
    return Object.prototype.toString.call(x) === '[object Object]';
  }

  var XFilter =
  /*#__PURE__*/
  function () {
    function XFilter(f, xf) {
      this.xf = xf;
      this.f = f;
    }

    XFilter.prototype['@@transducer/init'] = _xfBase.init;
    XFilter.prototype['@@transducer/result'] = _xfBase.result;

    XFilter.prototype['@@transducer/step'] = function (result, input) {
      return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
    };

    return XFilter;
  }();

  var _xfilter =
  /*#__PURE__*/
  _curry2(function _xfilter(f, xf) {
    return new XFilter(f, xf);
  });

  /**
   * Takes a predicate and a `Filterable`, and returns a new filterable of the
   * same type containing the members of the given filterable which satisfy the
   * given predicate. Filterable objects include plain objects or any object
   * that has a filter method such as `Array`.
   *
   * Dispatches to the `filter` method of the second argument, if present.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig Filterable f => (a -> Boolean) -> f a -> f a
   * @param {Function} pred
   * @param {Array} filterable
   * @return {Array} Filterable
   * @see R.reject, R.transduce, R.addIndex
   * @example
   *
   *      const isEven = n => n % 2 === 0;
   *
   *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
   *
   *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
   */

  var filter =
  /*#__PURE__*/
  _curry2(
  /*#__PURE__*/
  _dispatchable(['filter'], _xfilter, function (pred, filterable) {
    return _isObject(filterable) ? _reduce(function (acc, key) {
      if (pred(filterable[key])) {
        acc[key] = filterable[key];
      }

      return acc;
    }, {}, keys(filterable)) : // else
    _filter(pred, filterable);
  }));

  /**
   * The complement of [`filter`](#filter).
   *
   * Acts as a transducer if a transformer is given in list position. Filterable
   * objects include plain objects or any object that has a filter method such
   * as `Array`.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig Filterable f => (a -> Boolean) -> f a -> f a
   * @param {Function} pred
   * @param {Array} filterable
   * @return {Array}
   * @see R.filter, R.transduce, R.addIndex
   * @example
   *
   *      const isOdd = (n) => n % 2 === 1;
   *
   *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
   *
   *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
   */

  var reject =
  /*#__PURE__*/
  _curry2(function reject(pred, filterable) {
    return filter(_complement(pred), filterable);
  });

  function _toString(x, seen) {
    var recur = function recur(y) {
      var xs = seen.concat([x]);
      return _includes(y, xs) ? '<Circular>' : _toString(y, xs);
    }; //  mapPairs :: (Object, [String]) -> [String]


    var mapPairs = function (obj, keys) {
      return _map(function (k) {
        return _quote(k) + ': ' + recur(obj[k]);
      }, keys.slice().sort());
    };

    switch (Object.prototype.toString.call(x)) {
      case '[object Arguments]':
        return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))';

      case '[object Array]':
        return '[' + _map(recur, x).concat(mapPairs(x, reject(function (k) {
          return /^\d+$/.test(k);
        }, keys(x)))).join(', ') + ']';

      case '[object Boolean]':
        return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();

      case '[object Date]':
        return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ')';

      case '[object Null]':
        return 'null';

      case '[object Number]':
        return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);

      case '[object String]':
        return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x);

      case '[object Undefined]':
        return 'undefined';

      default:
        if (typeof x.toString === 'function') {
          var repr = x.toString();

          if (repr !== '[object Object]') {
            return repr;
          }
        }

        return '{' + mapPairs(x, keys(x)).join(', ') + '}';
    }
  }

  /**
   * Returns the string representation of the given value. `eval`'ing the output
   * should result in a value equivalent to the input value. Many of the built-in
   * `toString` methods do not satisfy this requirement.
   *
   * If the given value is an `[object Object]` with a `toString` method other
   * than `Object.prototype.toString`, this method is invoked with no arguments
   * to produce the return value. This means user-defined constructor functions
   * can provide a suitable `toString` method. For example:
   *
   *     function Point(x, y) {
   *       this.x = x;
   *       this.y = y;
   *     }
   *
   *     Point.prototype.toString = function() {
   *       return 'new Point(' + this.x + ', ' + this.y + ')';
   *     };
   *
   *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
   *
   * @func
   * @memberOf R
   * @since v0.14.0
   * @category String
   * @sig * -> String
   * @param {*} val
   * @return {String}
   * @example
   *
   *      R.toString(42); //=> '42'
   *      R.toString('abc'); //=> '"abc"'
   *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
   *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
   *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
   */

  var toString$1 =
  /*#__PURE__*/
  _curry1(function toString(val) {
    return _toString(val, []);
  });

  /**
   * Returns the result of concatenating the given lists or strings.
   *
   * Note: `R.concat` expects both arguments to be of the same type,
   * unlike the native `Array.prototype.concat` method. It will throw
   * an error if you `concat` an Array with a non-Array value.
   *
   * Dispatches to the `concat` method of the first argument, if present.
   * Can also concatenate two members of a [fantasy-land
   * compatible semigroup](https://github.com/fantasyland/fantasy-land#semigroup).
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig [a] -> [a] -> [a]
   * @sig String -> String -> String
   * @param {Array|String} firstList The first list
   * @param {Array|String} secondList The second list
   * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of
   * `secondList`.
   *
   * @example
   *
   *      R.concat('ABC', 'DEF'); // 'ABCDEF'
   *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
   *      R.concat([], []); //=> []
   */

  var concat =
  /*#__PURE__*/
  _curry2(function concat(a, b) {
    if (_isArray(a)) {
      if (_isArray(b)) {
        return a.concat(b);
      }

      throw new TypeError(toString$1(b) + ' is not an array');
    }

    if (_isString(a)) {
      if (_isString(b)) {
        return a + b;
      }

      throw new TypeError(toString$1(b) + ' is not a string');
    }

    if (a != null && _isFunction(a['fantasy-land/concat'])) {
      return a['fantasy-land/concat'](b);
    }

    if (a != null && _isFunction(a.concat)) {
      return a.concat(b);
    }

    throw new TypeError(toString$1(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
  });

  /**
   * Removes the sub-list of `list` starting at index `start` and containing
   * `count` elements. _Note that this is not destructive_: it returns a copy of
   * the list with the changes.
   * <small>No lists have been harmed in the application of this function.</small>
   *
   * @func
   * @memberOf R
   * @since v0.2.2
   * @category List
   * @sig Number -> Number -> [a] -> [a]
   * @param {Number} start The position to start removing elements
   * @param {Number} count The number of elements to remove
   * @param {Array} list The list to remove from
   * @return {Array} A new Array with `count` elements from `start` removed.
   * @see R.without
   * @example
   *
   *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
   */

  var remove =
  /*#__PURE__*/
  _curry3(function remove(start, count, list) {
    var result = Array.prototype.slice.call(list, 0);
    result.splice(start, count);
    return result;
  });

  /**
   * Returns a new copy of the array with the element at the provided index
   * replaced with the given value.
   *
   * @func
   * @memberOf R
   * @since v0.14.0
   * @category List
   * @sig Number -> a -> [a] -> [a]
   * @param {Number} idx The index to update.
   * @param {*} x The value to exist at the given index of the returned array.
   * @param {Array|Arguments} list The source array-like object to be updated.
   * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`.
   * @see R.adjust
   * @example
   *
   *      R.update(1, '_', ['a', 'b', 'c']);      //=> ['a', '_', 'c']
   *      R.update(-1, '_', ['a', 'b', 'c']);     //=> ['a', 'b', '_']
   * @symb R.update(-1, a, [b, c]) = [b, a]
   * @symb R.update(0, a, [b, c]) = [a, c]
   * @symb R.update(1, a, [b, c]) = [b, a]
   */

  var update =
  /*#__PURE__*/
  _curry3(function update(idx, x, list) {
    return adjust(idx, always(x), list);
  });

  /**
   * Creates a new object by recursively evolving a shallow copy of `object`,
   * according to the `transformation` functions. All non-primitive properties
   * are copied by reference.
   *
   * A `transformation` function will not be invoked if its corresponding key
   * does not exist in the evolved object.
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Object
   * @sig {k: (v -> v)} -> {k: v} -> {k: v}
   * @param {Object} transformations The object specifying transformation functions to apply
   *        to the object.
   * @param {Object} object The object to be transformed.
   * @return {Object} The transformed object.
   * @example
   *
   *      const tomato = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
   *      const transformations = {
   *        firstName: R.trim,
   *        lastName: R.trim, // Will not get invoked.
   *        data: {elapsed: R.add(1), remaining: R.add(-1)}
   *      };
   *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
   */

  var evolve =
  /*#__PURE__*/
  _curry2(function evolve(transformations, object) {
    var result = object instanceof Array ? [] : {};
    var transformation, key, type;

    for (key in object) {
      transformation = transformations[key];
      type = typeof transformation;
      result[key] = type === 'function' ? transformation(object[key]) : transformation && type === 'object' ? evolve(transformation, object[key]) : object[key];
    }

    return result;
  });

  /**
   * Inserts the supplied element into the list, at the specified `index`. _Note that

   * this is not destructive_: it returns a copy of the list with the changes.
   * <small>No lists have been harmed in the application of this function.</small>
   *
   * @func
   * @memberOf R
   * @since v0.2.2
   * @category List
   * @sig Number -> a -> [a] -> [a]
   * @param {Number} index The position to insert the element
   * @param {*} elt The element to insert into the Array
   * @param {Array} list The list to insert into
   * @return {Array} A new Array with `elt` inserted at `index`.
   * @example
   *
   *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
   */

  var insert =
  /*#__PURE__*/
  _curry3(function insert(idx, elt, list) {
    idx = idx < list.length && idx >= 0 ? idx : list.length;
    var result = Array.prototype.slice.call(list, 0);
    result.splice(idx, 0, elt);
    return result;
  });

  /**
   * Turns a named method with a specified arity into a function that can be
   * called directly supplied with arguments and a target object.
   *
   * The returned function is curried and accepts `arity + 1` parameters where
   * the final parameter is the target object.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
   * @param {Number} arity Number of arguments the returned function should take
   *        before the target object.
   * @param {String} method Name of any of the target object's methods to call.
   * @return {Function} A new curried function.
   * @see R.construct
   * @example
   *
   *      const sliceFrom = R.invoker(1, 'slice');
   *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
   *      const sliceFrom6 = R.invoker(2, 'slice')(6);
   *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
   *
   *      const dog = {
   *        speak: async () => 'Woof!'
   *      };
   *      const speak = R.invoker(0, 'speak');
   *      speak(dog).then(console.log) //~> 'Woof!'
   *
   * @symb R.invoker(0, 'method')(o) = o['method']()
   * @symb R.invoker(1, 'method')(a, o) = o['method'](a)
   * @symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)
   */

  var invoker =
  /*#__PURE__*/
  _curry2(function invoker(arity, method) {
    return curryN(arity + 1, function () {
      var target = arguments[arity];

      if (target != null && _isFunction(target[method])) {
        return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
      }

      throw new TypeError(toString$1(target) + ' does not have a method named "' + method + '"');
    });
  });

  /**
   * Returns a string made by inserting the `separator` between each element and
   * concatenating all the elements into a single string.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig String -> [a] -> String
   * @param {Number|String} separator The string used to separate the elements.
   * @param {Array} xs The elements to join into a string.
   * @return {String} str The string made by concatenating `xs` with `separator`.
   * @see R.split
   * @example
   *
   *      const spacer = R.join(' ');
   *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
   *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
   */

  var join =
  /*#__PURE__*/
  invoker(1, 'join');

  function _isNumber(x) {
    return Object.prototype.toString.call(x) === '[object Number]';
  }

  /**
   * Returns the number of elements in the array by returning `list.length`.
   *
   * @func
   * @memberOf R
   * @since v0.3.0
   * @category List
   * @sig [a] -> Number
   * @param {Array} list The array to inspect.
   * @return {Number} The length of the array.
   * @example
   *
   *      R.length([]); //=> 0
   *      R.length([1, 2, 3]); //=> 3
   */

  var length =
  /*#__PURE__*/
  _curry1(function length(list) {
    return list != null && _isNumber(list.length) ? list.length : NaN;
  });

  /**
   * Returns the smaller of its two arguments.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig Ord a => a -> a -> a
   * @param {*} a
   * @param {*} b
   * @return {*}
   * @see R.minBy, R.max
   * @example
   *
   *      R.min(789, 123); //=> 123
   *      R.min('a', 'b'); //=> 'a'
   */

  var min =
  /*#__PURE__*/
  _curry2(function min(a, b) {
    return b < a ? b : a;
  });

  /**
   * Splits a given list or string at a given index.
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category List
   * @sig Number -> [a] -> [[a], [a]]
   * @sig Number -> String -> [String, String]
   * @param {Number} index The index where the array/string is split.
   * @param {Array|String} array The array/string to be split.
   * @return {Array}
   * @example
   *
   *      R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
   *      R.splitAt(5, 'hello world');      //=> ['hello', ' world']
   *      R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
   */

  var splitAt =
  /*#__PURE__*/
  _curry2(function splitAt(index, array) {
    return [slice(0, index, array), slice(index, length(array), array)];
  });

  /**
   * Subtracts its second argument from its first argument.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Math
   * @sig Number -> Number -> Number
   * @param {Number} a The first value.
   * @param {Number} b The second value.
   * @return {Number} The result of `a - b`.
   * @see R.add
   * @example
   *
   *      R.subtract(10, 8); //=> 2
   *
   *      const minus5 = R.subtract(R.__, 5);
   *      minus5(17); //=> 12
   *
   *      const complementaryAngle = R.subtract(90);
   *      complementaryAngle(30); //=> 60
   *      complementaryAngle(72); //=> 18
   */

  var subtract =
  /*#__PURE__*/
  _curry2(function subtract(a, b) {
    return Number(a) - Number(b);
  });

  const init = (p, f) => ({
    get: (host, lastValue) => lastValue,
    set: (host, value, lastValue) => value,
    connect: (host, key, invalidate) => { host [p] = f (host, key, invalidate); }
  });

  // A block is a single/multiline text with editing capabilities.

  // ------------------------------- Caret -------------------------------------

  const getYCaret = (block) =>
    Math.min (Math.max (block.cursor [1], 0), length (block.lines) - 1);

  const caret = (block) =>
    [ Math.min (Math.max (block.cursor [0], 0), 
                length (block.lines [getYCaret (block)])),
      getYCaret (block)];

  // -------------------------- Cursor movement --------------------------------

  const moveCursorDown = (block) =>
    evolve ({
      cursor: adjust (1) 
                     (pipe (add (1), 
                            min (length (block.lines) - 1)))
    }) (block);

  const moveCursorUp = 
    evolve ({
      cursor: adjust (1)
                     (pipe (subtract (__, 1),
                            max (0)))
    });

  const moveCursorRight = (block) =>
    evolve ({
      cursor: adjust (0)
                     (pipe (add (1),
                            min (length (block.lines [block.cursor [1]]))))
    }) (block);

  const moveCursorLeft = (block) => 
    evolve ({
      cursor: update (0)
                     (min (max (0, block.cursor [0] - 1))
                          (length (block.lines [block.cursor [1]]) - 1))
    }) (block);

  // -------------------------- Text modification ------------------------------

  const insertText = (text) => (block) =>
    evolve ({
      lines: update
               (block.cursor [1])
               (join ('') 
                     (insert (1) 
                             (text) 
                             (splitAt (block.cursor [0]) 
                             (block.lines [block.cursor [1]])))),
      cursor: adjust (0) (add (length (text)))
    }) (block);

  const removeText = (n) => (block) => 
    (caret (block) [0] === 0 && caret (block) [1] === 0) || n === 0 ?
      block
      : n <= caret (block) [0] ?
        evolve ({
          lines: 
            update
              (caret (block) [1])
              (join ('')
                ([slice (0, caret (block) [0] - n, block.lines [caret (block) [1]]),
                  slice (caret (block) [0], Infinity, block.lines [caret (block) [1]])])),
          cursor: always ([caret (block) [0] - n, caret (block) [1]])
        }) (block)
        : caret (block) [0] === 0 ?
          removeText (n - 1)
                     (evolve ({
                        lines: 
                          always (
                            remove (caret (block) [1], 1)
                                   (update (caret (block) [1] - 1)
                                           (concat (block.lines [caret (block) [1] - 1])
                                                   (block.lines [caret (block) [1]]))
                                           (block.lines))),
                        cursor: always ([length (block.lines [caret (block) [1] - 1]),
                                         caret (block) [1] - 1])
                      }) (block))
          : removeText (n - caret (block) [0]) (removeText (caret (block) [0]) (block));

  const insertLine = (block) =>
    evolve ({
      lines: pipe (insert (block.cursor [1] + 1) 
                          (block.lines [block.cursor [1]]),
                   adjust (block.cursor [1] + 1)
                          (slice (block.cursor [0]) (Infinity)),
                   adjust (block.cursor [1]) 
                          (slice (0) (block.cursor [0]))),
      cursor: pipe (update (0) (0), adjust (1) (add (1)))
    }) (block);

  // ------------------------------ Block creation ------------------------------

  const createBlock = (text = ['']) => ({
    lines: text === null ? [''] : text,
    cursor: [0, 0], // x -position on current line-, y -number of current line-
  });

  // A block renderer renders a block content and possibly

  const styles = `
.line {
  line-height: 1;
  padding: 0em;
  margin: 0em;
}

.caret {
  min-width: 0.5em;
  animation: blink .75s step-end infinite;
}

@keyframes blink {
  from, to { background-color: white; 
             color: black; }
  50% { background-color: black;
        color: white; }
}
`;

  const renderNoCaretLine = (line) => html`
  <div class="line">
    ${line}
  </div>
`;

  const renderCaretLine = (l, c) => 
    length (l) <= c [0] ?
      html`
      <div class="line">
        ${slice (0) (c [0]) (l)}<span class="caret">&nbsp;</span>
      </div>`
      : html`
        <div class="line">
          ${slice (0) (c [0]) (l)}<span class="caret">${l [c [0]] }</span>${slice (c [0] + 1) (Infinity) (l)}
         </div>`;


  const renderLines = (block) => 
    addIndex (map$1)
             ((line, idx) => idx === block.cursor [1] ?
                               renderCaretLine (line, caret (block))
                               : renderNoCaretLine (line))
             (block.lines);

  const createRenderer = () => ({
    render: (block) => html`
    ${renderLines (block)}
  `.style (styles)
  });

  const createListener = () => ({
    onkeydown: (host, evt) => {
      if (evt.key === 'Backspace') {
        host.block = removeText (1) (host.block);
      } else if (evt.key === 'Enter') {
        host.block = insertLine (host.block);
      } else if (evt.key === 'ArrowLeft') {
        host.block = moveCursorLeft (host.block);
      } else if (evt.key === 'ArrowRight') {
        host.block = moveCursorRight (host.block);
      } else if (evt.key === 'ArrowUp') {
        host.block = moveCursorUp (host.block);
      } else if (evt.key === 'ArrowDown') {
        host.block = moveCursorDown (host.block);
      } else {
        return true
      }

      evt.preventDefault ();
      return false
    },
    onkeypress: (host, evt) => {
      host.block = insertText (evt.key) (host.block);
    }
  });

  // InputView renders a Block using a BlockRenderer

  const styles$1 = `
#block-input-container {
  min-height: 1rem;
}
`;

  const InputView = {
    block: init ('block', () => createBlock ()),
    renderer: init ('renderer', createRenderer),
    listener: init ('listener', createListener),
    render: ({ block, renderer, listener }) => html`
    <div id="block-input-container" 
         tabindex="0" 
         onkeydown="${listener.onkeydown}"
         onkeypress="${listener.onkeypress}">
      ${renderer.render (block)}
    </div>
  `.style (styles$1)
  };

  define ('e-input', InputView);

  const TermView = {
    render: () => html`
    <e-input></e-input> 
  `
  };

  define ('e-term', TermView);

  const SessionView = {
    render: () => html`
    <e-pane>
      <span slot="content">
        <e-term />
      </slot>
    </e-pane>
  ` 
  };

  define ('e-session', SessionView);

})));
//# sourceMappingURL=bundle.js.map
