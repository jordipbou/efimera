
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.efimera = {}));
}(this, (function (exports) { 'use strict';

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  function dispatch(host, eventType) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return host.dispatchEvent(new CustomEvent(eventType, _objectSpread({
      bubbles: false
    }, options)));
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
  var storePointer = new WeakMap();
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJjYW1lbFRvRGFzaE1hcCIsIk1hcCIsImNhbWVsVG9EYXNoIiwic3RyIiwicmVzdWx0IiwiZ2V0IiwidW5kZWZpbmVkIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwic2V0IiwicGFzY2FsVG9EYXNoIiwiZGlzcGF0Y2giLCJob3N0IiwiZXZlbnRUeXBlIiwib3B0aW9ucyIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJzaGFkeUNTUyIsImZuIiwiZmFsbGJhY2siLCJzaGFkeSIsIndpbmRvdyIsIlNoYWR5Q1NTIiwibmF0aXZlU2hhZG93Iiwic3RyaW5naWZ5RWxlbWVudCIsInRhcmdldCIsIlN0cmluZyIsInRhZ05hbWUiLCJJU19JRSIsImRlZmVycmVkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzdG9yZVBvaW50ZXIiLCJXZWFrTWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxjQUFjLEdBQUcsSUFBSUMsR0FBSixFQUF2QjtBQUNBLE9BQU8sU0FBU0MsV0FBVCxDQUFxQkMsR0FBckIsRUFBMEI7QUFDL0IsTUFBSUMsTUFBTSxHQUFHSixjQUFjLENBQUNLLEdBQWYsQ0FBbUJGLEdBQW5CLENBQWI7O0FBQ0EsTUFBSUMsTUFBTSxLQUFLRSxTQUFmLEVBQTBCO0FBQ3hCRixJQUFBQSxNQUFNLEdBQUdELEdBQUcsQ0FBQ0ksT0FBSixDQUFZLGlCQUFaLEVBQStCLE9BQS9CLEVBQXdDQyxXQUF4QyxFQUFUO0FBQ0FSLElBQUFBLGNBQWMsQ0FBQ1MsR0FBZixDQUFtQk4sR0FBbkIsRUFBd0JDLE1BQXhCO0FBQ0Q7O0FBQ0QsU0FBT0EsTUFBUDtBQUNEO0FBRUQsT0FBTyxTQUFTTSxZQUFULENBQXNCUCxHQUF0QixFQUEyQjtBQUNoQyxTQUFPRCxXQUFXLENBQUNDLEdBQUcsQ0FBQ0ksT0FBSixDQUFZLDBCQUFaLEVBQXdDLEtBQXhDLENBQUQsQ0FBbEI7QUFDRDtBQUVELE9BQU8sU0FBU0ksUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0JDLFNBQXhCLEVBQWlEO0FBQUEsTUFBZEMsT0FBYyx1RUFBSixFQUFJO0FBQ3RELFNBQU9GLElBQUksQ0FBQ0csYUFBTCxDQUNMLElBQUlDLFdBQUosQ0FBZ0JILFNBQWhCO0FBQTZCSSxJQUFBQSxPQUFPLEVBQUU7QUFBdEMsS0FBZ0RILE9BQWhELEVBREssQ0FBUDtBQUdEO0FBRUQsT0FBTyxTQUFTSSxRQUFULENBQWtCQyxFQUFsQixFQUFzQkMsUUFBdEIsRUFBZ0M7QUFDckMsTUFBTUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLFFBQXJCO0FBRUE7O0FBQ0EsTUFBSUYsS0FBSyxJQUFJLENBQUNBLEtBQUssQ0FBQ0csWUFBcEIsRUFBa0M7QUFDaEMsV0FBT0wsRUFBRSxDQUFDRSxLQUFELENBQVQ7QUFDRDs7QUFFRCxTQUFPRCxRQUFQO0FBQ0Q7QUFFRCxPQUFPLFNBQVNLLGdCQUFULENBQTBCQyxNQUExQixFQUFrQztBQUN2QyxvQkFBV0MsTUFBTSxDQUFDRCxNQUFNLENBQUNFLE9BQVIsQ0FBTixDQUF1QnBCLFdBQXZCLEVBQVg7QUFDRDtBQUVELE9BQU8sSUFBTXFCLEtBQUssSUFBRyxtQkFBbUJQLE1BQXRCLENBQVg7QUFDUCxPQUFPLElBQU1RLFFBQVEsR0FBR0MsT0FBTyxDQUFDQyxPQUFSLEVBQWpCO0FBRVAsT0FBTyxJQUFNQyxZQUFZLEdBQUcsSUFBSUMsT0FBSixFQUFyQiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhbWVsVG9EYXNoTWFwID0gbmV3IE1hcCgpO1xuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsVG9EYXNoKHN0cikge1xuICBsZXQgcmVzdWx0ID0gY2FtZWxUb0Rhc2hNYXAuZ2V0KHN0cik7XG4gIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJlc3VsdCA9IHN0ci5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCBcIiQxLSQyXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgY2FtZWxUb0Rhc2hNYXAuc2V0KHN0ciwgcmVzdWx0KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFzY2FsVG9EYXNoKHN0cikge1xuICByZXR1cm4gY2FtZWxUb0Rhc2goc3RyLnJlcGxhY2UoLygoPyEoW0EtWl17Mn18XikpW0EtWl0pL2csIFwiLSQxXCIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoKGhvc3QsIGV2ZW50VHlwZSwgb3B0aW9ucyA9IHt9KSB7XG4gIHJldHVybiBob3N0LmRpc3BhdGNoRXZlbnQoXG4gICAgbmV3IEN1c3RvbUV2ZW50KGV2ZW50VHlwZSwgeyBidWJibGVzOiBmYWxzZSwgLi4ub3B0aW9ucyB9KSxcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoYWR5Q1NTKGZuLCBmYWxsYmFjaykge1xuICBjb25zdCBzaGFkeSA9IHdpbmRvdy5TaGFkeUNTUztcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAoc2hhZHkgJiYgIXNoYWR5Lm5hdGl2ZVNoYWRvdykge1xuICAgIHJldHVybiBmbihzaGFkeSk7XG4gIH1cblxuICByZXR1cm4gZmFsbGJhY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnlFbGVtZW50KHRhcmdldCkge1xuICByZXR1cm4gYDwke1N0cmluZyh0YXJnZXQudGFnTmFtZSkudG9Mb3dlckNhc2UoKX0+YDtcbn1cblxuZXhwb3J0IGNvbnN0IElTX0lFID0gXCJBY3RpdmVYT2JqZWN0XCIgaW4gd2luZG93O1xuZXhwb3J0IGNvbnN0IGRlZmVycmVkID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbmV4cG9ydCBjb25zdCBzdG9yZVBvaW50ZXIgPSBuZXcgV2Vha01hcCgpO1xuIl19

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

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

  function render(fn) {
    var customOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (typeof fn !== "function") {
      throw TypeError("The first argument must be a function: ".concat(_typeof$1(fn)));
    }

    var options = _objectSpread$1({
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

  function dispatch$1(target) {
    if (!queue.size) {
      requestAnimationFrame(execute);
    }

    queue.add(target);
  }
  function subscribe(target, cb) {
    callbacks.set(target, cb);
    dispatch$1(target);
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
  function getEntries(target) {
    var result = [];
    var targetMap = entries.get(target);

    if (targetMap) {
      targetMap.forEach(function (entry) {
        result.push(entry);
      });
    }

    return result;
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
    if (entry.observed) dispatch$1(entry);
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
  function get(target, key, getter, validate) {
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

    if ((validate && validate(entry.value) || !validate) && entry.checksum && entry.checksum === calculateChecksum(entry)) {
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
  var gcList = new Set();

  function deleteEntry(entry) {
    if (!gcList.size) {
      requestAnimationFrame(function () {
        gcList.forEach(function (e) {
          if (!e.contexts || e.contexts && e.contexts.size === 0) {
            var targetMap = entries.get(e.target);
            targetMap.delete(e.key);
          }
        });
        gcList.clear();
      });
    }

    gcList.add(entry);
  }

  function invalidateEntry(entry, clearValue, deleteValue) {
    entry.checksum = 0;
    entry.state += 1;
    dispatchDeep(entry);
    if (deleteValue) deleteEntry(entry);

    if (clearValue) {
      entry.value = undefined;
    }
  }

  function invalidate(target, key, clearValue, deleteValue) {
    if (contextStack.size) {
      throw Error("Invalidating property in chain of get calls is forbidden: '".concat(key, "'"));
    }

    var entry = getEntry(target, key);
    invalidateEntry(entry, clearValue, deleteValue);
  }
  function invalidateAll(target, clearValue, deleteValue) {
    if (contextStack.size) {
      throw Error("Invalidating all properties in chain of get calls is forbidden");
    }

    var targetMap = entries.get(target);

    if (targetMap) {
      targetMap.forEach(function (entry) {
        invalidateEntry(entry, clearValue, deleteValue);
      });
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
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jYWNoZS5qcyJdLCJuYW1lcyI6WyJlbWl0dGVyIiwiZW50cmllcyIsIldlYWtNYXAiLCJnZXRFbnRyeSIsInRhcmdldCIsImtleSIsInRhcmdldE1hcCIsImdldCIsIk1hcCIsInNldCIsImVudHJ5IiwidmFsdWUiLCJ1bmRlZmluZWQiLCJjb250ZXh0cyIsImRlcHMiLCJzdGF0ZSIsImNoZWNrc3VtIiwib2JzZXJ2ZWQiLCJnZXRFbnRyaWVzIiwicmVzdWx0IiwiZm9yRWFjaCIsInB1c2giLCJjYWxjdWxhdGVDaGVja3N1bSIsImRlcEVudHJ5IiwiZGlzcGF0Y2hEZWVwIiwiZGlzcGF0Y2giLCJyZXN0b3JlRGVlcERlcHMiLCJhZGQiLCJTZXQiLCJjb250ZXh0U3RhY2siLCJnZXR0ZXIiLCJ2YWxpZGF0ZSIsInNpemUiLCJoYXMiLCJFcnJvciIsImNvbnRleHQiLCJkZWxldGUiLCJuZXh0VmFsdWUiLCJlIiwic2V0dGVyIiwibmV3VmFsdWUiLCJnY0xpc3QiLCJkZWxldGVFbnRyeSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNsZWFyIiwiaW52YWxpZGF0ZUVudHJ5IiwiY2xlYXJWYWx1ZSIsImRlbGV0ZVZhbHVlIiwiaW52YWxpZGF0ZSIsImludmFsaWRhdGVBbGwiLCJvYnNlcnZlIiwiZm4iLCJsYXN0VmFsdWUiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsInVub2JzZXJ2ZSJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLQSxPQUFaLE1BQXlCLGNBQXpCO0FBRUEsSUFBTUMsT0FBTyxHQUFHLElBQUlDLE9BQUosRUFBaEI7QUFDQSxPQUFPLFNBQVNDLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCQyxHQUExQixFQUErQjtBQUNwQyxNQUFJQyxTQUFTLEdBQUdMLE9BQU8sQ0FBQ00sR0FBUixDQUFZSCxNQUFaLENBQWhCOztBQUNBLE1BQUksQ0FBQ0UsU0FBTCxFQUFnQjtBQUNkQSxJQUFBQSxTQUFTLEdBQUcsSUFBSUUsR0FBSixF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QXRCO0FBQ0QsS0FKRDtBQUtEOztBQUVELFNBQU8sU0FBUzZDLFNBQVQsR0FBcUI7QUFDMUJGLElBQUFBLFdBQVc7QUFDWDNDLElBQUFBLEtBQUssQ0FBQ08sUUFBTixHQUFpQixLQUFqQjs7QUFDQSxRQUFJUCxLQUFLLENBQUNJLElBQU4sSUFBY0osS0FBSyxDQUFDSSxJQUFOLENBQVdrQixJQUE3QixFQUFtQztBQUNqQ3RCLE1BQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXTSxPQUFYLENBQW1CLFVBQUFHLFFBQVEsRUFBSTtBQUM3QjtBQUNBLFlBQUlBLFFBQVEsQ0FBQ1YsUUFBYixFQUF1QlUsUUFBUSxDQUFDVixRQUFULENBQWtCdUIsTUFBbEIsQ0FBeUIxQixLQUF6QjtBQUN4QixPQUhEO0FBSUQ7QUFDRixHQVREO0FBVUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBlbWl0dGVyIGZyb20gXCIuL2VtaXR0ZXIuanNcIjtcblxuY29uc3QgZW50cmllcyA9IG5ldyBXZWFrTWFwKCk7XG5leHBvcnQgZnVuY3Rpb24gZ2V0RW50cnkodGFyZ2V0LCBrZXkpIHtcbiAgbGV0IHRhcmdldE1hcCA9IGVudHJpZXMuZ2V0KHRhcmdldCk7XG4gIGlmICghdGFyZ2V0TWFwKSB7XG4gICAgdGFyZ2V0TWFwID0gbmV3IE1hcCgpO1xuICAgIGVudHJpZXMuc2V0KHRhcmdldCwgdGFyZ2V0TWFwKTtcbiAgfVxuXG4gIGxldCBlbnRyeSA9IHRhcmdldE1hcC5nZXQoa2V5KTtcblxuICBpZiAoIWVudHJ5KSB7XG4gICAgZW50cnkgPSB7XG4gICAgICB0YXJnZXQsXG4gICAgICBrZXksXG4gICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgY29udGV4dHM6IHVuZGVmaW5lZCxcbiAgICAgIGRlcHM6IHVuZGVmaW5lZCxcbiAgICAgIHN0YXRlOiAwLFxuICAgICAgY2hlY2tzdW06IDAsXG4gICAgICBvYnNlcnZlZDogZmFsc2UsXG4gICAgfTtcbiAgICB0YXJnZXRNYXAuc2V0KGtleSwgZW50cnkpO1xuICB9XG5cbiAgcmV0dXJuIGVudHJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW50cmllcyh0YXJnZXQpIHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGNvbnN0IHRhcmdldE1hcCA9IGVudHJpZXMuZ2V0KHRhcmdldCk7XG4gIGlmICh0YXJnZXRNYXApIHtcbiAgICB0YXJnZXRNYXAuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICByZXN1bHQucHVzaChlbnRyeSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlQ2hlY2tzdW0oZW50cnkpIHtcbiAgbGV0IGNoZWNrc3VtID0gZW50cnkuc3RhdGU7XG4gIGlmIChlbnRyeS5kZXBzKSB7XG4gICAgZW50cnkuZGVwcy5mb3JFYWNoKGRlcEVudHJ5ID0+IHtcbiAgICAgIGNoZWNrc3VtICs9IGRlcEVudHJ5LnN0YXRlO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNoZWNrc3VtO1xufVxuXG5mdW5jdGlvbiBkaXNwYXRjaERlZXAoZW50cnkpIHtcbiAgaWYgKGVudHJ5Lm9ic2VydmVkKSBlbWl0dGVyLmRpc3BhdGNoKGVudHJ5KTtcbiAgaWYgKGVudHJ5LmNvbnRleHRzKSBlbnRyeS5jb250ZXh0cy5mb3JFYWNoKGRpc3BhdGNoRGVlcCk7XG59XG5cbmZ1bmN0aW9uIHJlc3RvcmVEZWVwRGVwcyhlbnRyeSwgZGVwcykge1xuICBpZiAoZGVwcykge1xuICAgIGRlcHMuZm9yRWFjaChkZXBFbnRyeSA9PiB7XG4gICAgICBlbnRyeS5kZXBzLmFkZChkZXBFbnRyeSk7XG5cbiAgICAgIGlmIChlbnRyeS5vYnNlcnZlZCkge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKCFkZXBFbnRyeS5jb250ZXh0cykgZGVwRW50cnkuY29udGV4dHMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGRlcEVudHJ5LmNvbnRleHRzLmFkZChlbnRyeSk7XG4gICAgICB9XG5cbiAgICAgIHJlc3RvcmVEZWVwRGVwcyhlbnRyeSwgZGVwRW50cnkuZGVwcyk7XG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgY29udGV4dFN0YWNrID0gbmV3IFNldCgpO1xuZXhwb3J0IGZ1bmN0aW9uIGdldCh0YXJnZXQsIGtleSwgZ2V0dGVyLCB2YWxpZGF0ZSkge1xuICBjb25zdCBlbnRyeSA9IGdldEVudHJ5KHRhcmdldCwga2V5KTtcblxuICBpZiAoY29udGV4dFN0YWNrLnNpemUgJiYgY29udGV4dFN0YWNrLmhhcyhlbnRyeSkpIHtcbiAgICB0aHJvdyBFcnJvcihgQ2lyY3VsYXIgZ2V0IGludm9jYXRpb24gaXMgZm9yYmlkZGVuOiAnJHtrZXl9J2ApO1xuICB9XG5cbiAgY29udGV4dFN0YWNrLmZvckVhY2goY29udGV4dCA9PiB7XG4gICAgaWYgKCFjb250ZXh0LmRlcHMpIGNvbnRleHQuZGVwcyA9IG5ldyBTZXQoKTtcbiAgICBjb250ZXh0LmRlcHMuYWRkKGVudHJ5KTtcblxuICAgIGlmIChjb250ZXh0Lm9ic2VydmVkKSB7XG4gICAgICBpZiAoIWVudHJ5LmNvbnRleHRzKSBlbnRyeS5jb250ZXh0cyA9IG5ldyBTZXQoKTtcbiAgICAgIGVudHJ5LmNvbnRleHRzLmFkZChjb250ZXh0KTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChcbiAgICAoKHZhbGlkYXRlICYmIHZhbGlkYXRlKGVudHJ5LnZhbHVlKSkgfHwgIXZhbGlkYXRlKSAmJlxuICAgIGVudHJ5LmNoZWNrc3VtICYmXG4gICAgZW50cnkuY2hlY2tzdW0gPT09IGNhbGN1bGF0ZUNoZWNrc3VtKGVudHJ5KVxuICApIHtcbiAgICByZXR1cm4gZW50cnkudmFsdWU7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnRleHRTdGFjay5hZGQoZW50cnkpO1xuXG4gICAgaWYgKGVudHJ5Lm9ic2VydmVkICYmIGVudHJ5LmRlcHMgJiYgZW50cnkuZGVwcy5zaXplKSB7XG4gICAgICBlbnRyeS5kZXBzLmZvckVhY2goZGVwRW50cnkgPT4ge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICBpZiAoZGVwRW50cnkuY29udGV4dHMpIGRlcEVudHJ5LmNvbnRleHRzLmRlbGV0ZShlbnRyeSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBlbnRyeS5kZXBzID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IG5leHRWYWx1ZSA9IGdldHRlcih0YXJnZXQsIGVudHJ5LnZhbHVlKTtcblxuICAgIGlmIChlbnRyeS5kZXBzKSB7XG4gICAgICBlbnRyeS5kZXBzLmZvckVhY2goZGVwRW50cnkgPT4ge1xuICAgICAgICByZXN0b3JlRGVlcERlcHMoZW50cnksIGRlcEVudHJ5LmRlcHMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG5leHRWYWx1ZSAhPT0gZW50cnkudmFsdWUpIHtcbiAgICAgIGVudHJ5LnN0YXRlICs9IDE7XG4gICAgICBlbnRyeS52YWx1ZSA9IG5leHRWYWx1ZTtcblxuICAgICAgZGlzcGF0Y2hEZWVwKGVudHJ5KTtcbiAgICB9XG5cbiAgICBlbnRyeS5jaGVja3N1bSA9IGNhbGN1bGF0ZUNoZWNrc3VtKGVudHJ5KTtcbiAgICBjb250ZXh0U3RhY2suZGVsZXRlKGVudHJ5KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGVudHJ5LmNoZWNrc3VtID0gMDtcblxuICAgIGNvbnRleHRTdGFjay5kZWxldGUoZW50cnkpO1xuICAgIGNvbnRleHRTdGFjay5mb3JFYWNoKGNvbnRleHQgPT4ge1xuICAgICAgY29udGV4dC5kZXBzLmRlbGV0ZShlbnRyeSk7XG4gICAgICBpZiAoY29udGV4dC5vYnNlcnZlZCkgZW50cnkuY29udGV4dHMuZGVsZXRlKGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhyb3cgZTtcbiAgfVxuXG4gIHJldHVybiBlbnRyeS52YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldCh0YXJnZXQsIGtleSwgc2V0dGVyLCB2YWx1ZSkge1xuICBjb25zdCBlbnRyeSA9IGdldEVudHJ5KHRhcmdldCwga2V5KTtcbiAgY29uc3QgbmV3VmFsdWUgPSBzZXR0ZXIodGFyZ2V0LCB2YWx1ZSwgZW50cnkudmFsdWUpO1xuXG4gIGlmIChuZXdWYWx1ZSAhPT0gZW50cnkudmFsdWUpIHtcbiAgICBlbnRyeS5jaGVja3N1bSA9IDA7XG4gICAgZW50cnkuc3RhdGUgKz0gMTtcbiAgICBlbnRyeS52YWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgZGlzcGF0Y2hEZWVwKGVudHJ5KTtcbiAgfVxufVxuXG5jb25zdCBnY0xpc3QgPSBuZXcgU2V0KCk7XG5mdW5jdGlvbiBkZWxldGVFbnRyeShlbnRyeSkge1xuICBpZiAoIWdjTGlzdC5zaXplKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGdjTGlzdC5mb3JFYWNoKGUgPT4ge1xuICAgICAgICBpZiAoIWUuY29udGV4dHMgfHwgKGUuY29udGV4dHMgJiYgZS5jb250ZXh0cy5zaXplID09PSAwKSkge1xuICAgICAgICAgIGNvbnN0IHRhcmdldE1hcCA9IGVudHJpZXMuZ2V0KGUudGFyZ2V0KTtcbiAgICAgICAgICB0YXJnZXRNYXAuZGVsZXRlKGUua2V5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBnY0xpc3QuY2xlYXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdjTGlzdC5hZGQoZW50cnkpO1xufVxuXG5mdW5jdGlvbiBpbnZhbGlkYXRlRW50cnkoZW50cnksIGNsZWFyVmFsdWUsIGRlbGV0ZVZhbHVlKSB7XG4gIGVudHJ5LmNoZWNrc3VtID0gMDtcbiAgZW50cnkuc3RhdGUgKz0gMTtcblxuICBkaXNwYXRjaERlZXAoZW50cnkpO1xuICBpZiAoZGVsZXRlVmFsdWUpIGRlbGV0ZUVudHJ5KGVudHJ5KTtcblxuICBpZiAoY2xlYXJWYWx1ZSkge1xuICAgIGVudHJ5LnZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkYXRlKHRhcmdldCwga2V5LCBjbGVhclZhbHVlLCBkZWxldGVWYWx1ZSkge1xuICBpZiAoY29udGV4dFN0YWNrLnNpemUpIHtcbiAgICB0aHJvdyBFcnJvcihcbiAgICAgIGBJbnZhbGlkYXRpbmcgcHJvcGVydHkgaW4gY2hhaW4gb2YgZ2V0IGNhbGxzIGlzIGZvcmJpZGRlbjogJyR7a2V5fSdgLFxuICAgICk7XG4gIH1cblxuICBjb25zdCBlbnRyeSA9IGdldEVudHJ5KHRhcmdldCwga2V5KTtcbiAgaW52YWxpZGF0ZUVudHJ5KGVudHJ5LCBjbGVhclZhbHVlLCBkZWxldGVWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkYXRlQWxsKHRhcmdldCwgY2xlYXJWYWx1ZSwgZGVsZXRlVmFsdWUpIHtcbiAgaWYgKGNvbnRleHRTdGFjay5zaXplKSB7XG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICBcIkludmFsaWRhdGluZyBhbGwgcHJvcGVydGllcyBpbiBjaGFpbiBvZiBnZXQgY2FsbHMgaXMgZm9yYmlkZGVuXCIsXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IHRhcmdldE1hcCA9IGVudHJpZXMuZ2V0KHRhcmdldCk7XG4gIGlmICh0YXJnZXRNYXApIHtcbiAgICB0YXJnZXRNYXAuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICBpbnZhbGlkYXRlRW50cnkoZW50cnksIGNsZWFyVmFsdWUsIGRlbGV0ZVZhbHVlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZSh0YXJnZXQsIGtleSwgZ2V0dGVyLCBmbikge1xuICBjb25zdCBlbnRyeSA9IGdldEVudHJ5KHRhcmdldCwga2V5KTtcbiAgZW50cnkub2JzZXJ2ZWQgPSB0cnVlO1xuXG4gIGxldCBsYXN0VmFsdWU7XG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gZW1pdHRlci5zdWJzY3JpYmUoZW50cnksICgpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGdldCh0YXJnZXQsIGtleSwgZ2V0dGVyKTtcbiAgICBpZiAodmFsdWUgIT09IGxhc3RWYWx1ZSkge1xuICAgICAgZm4odGFyZ2V0LCB2YWx1ZSwgbGFzdFZhbHVlKTtcbiAgICAgIGxhc3RWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGVudHJ5LmRlcHMpIHtcbiAgICBlbnRyeS5kZXBzLmZvckVhY2goZGVwRW50cnkgPT4ge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmICghZGVwRW50cnkuY29udGV4dHMpIGRlcEVudHJ5LmNvbnRleHRzID0gbmV3IFNldCgpO1xuICAgICAgZGVwRW50cnkuY29udGV4dHMuYWRkKGVudHJ5KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgdW5zdWJzY3JpYmUoKTtcbiAgICBlbnRyeS5vYnNlcnZlZCA9IGZhbHNlO1xuICAgIGlmIChlbnRyeS5kZXBzICYmIGVudHJ5LmRlcHMuc2l6ZSkge1xuICAgICAgZW50cnkuZGVwcy5mb3JFYWNoKGRlcEVudHJ5ID0+IHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKGRlcEVudHJ5LmNvbnRleHRzKSBkZXBFbnRyeS5jb250ZXh0cy5kZWxldGUoZW50cnkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuIl19

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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

    if (tagName !== null) {
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
    }

    var Hybrid = /*#__PURE__*/function (_HTMLElement) {
      _inherits(Hybrid, _HTMLElement);

      var _super = _createSuper(Hybrid);

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

    if (tagName !== null) {
      Object.defineProperty(Hybrid, "name", {
        get: function get() {
          return tagName;
        }
      });
      customElements.define(tagName, Hybrid);
    }

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
    if (_typeof$2(arguments.length <= 0 ? undefined : arguments[0]) === "object" && (arguments.length <= 0 ? undefined : arguments[0]) !== null) {
      return defineMap(arguments.length <= 0 ? undefined : arguments[0]);
    }

    return defineElement.apply(void 0, arguments);
  }
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZpbmUuanMiXSwibmFtZXMiOlsicHJvcGVydHkiLCJyZW5kZXIiLCJjYWNoZSIsInBhc2NhbFRvRGFzaCIsImRlZmVycmVkIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiZSIsImRlZmF1bHRNZXRob2QiLCJob3N0IiwidmFsdWUiLCJjYWxsYmFja3NNYXAiLCJXZWFrTWFwIiwicHJvcHNNYXAiLCJjb21waWxlIiwiSHlicmlkIiwiZGVzY3JpcHRvcnMiLCJoeWJyaWRzIiwiY2FsbGJhY2tzIiwicHJvcHMiLCJPYmplY3QiLCJrZXlzIiwic2V0IiwiZm9yRWFjaCIsImtleSIsImRlc2MiLCJ0eXBlIiwiY29uZmlnIiwiZ2V0IiwiQXJyYXkiLCJpc0FycmF5IiwidW5kZWZpbmVkIiwiY29ubmVjdCIsIm9ic2VydmUiLCJkZWZpbmVQcm9wZXJ0eSIsInByb3RvdHlwZSIsIm5ld1ZhbHVlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsInVuc2hpZnQiLCJwdXNoIiwiaW52YWxpZGF0ZSIsInVwZGF0ZSIsIndhbGtJblNoYWRvdyIsIm5vZGUiLCJmbiIsImZyb20iLCJjaGlsZHJlbiIsImVsIiwic2hhZG93Um9vdCIsInVwZGF0ZVF1ZXVlIiwiTWFwIiwibGFzdEh5YnJpZHMiLCJzaXplIiwidGhlbiIsImRvY3VtZW50IiwiYm9keSIsImhhcyIsImNvbnN0cnVjdG9yIiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJjb25uZWN0ZWRDYWxsYmFjayIsImNsZWFyIiwiZGlzY29ubmVjdHMiLCJkZWZpbmVFbGVtZW50IiwidGFnTmFtZSIsImh5YnJpZHNPckNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiQ3VzdG9tRWxlbWVudCIsIndpbmRvdyIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiRXJyb3IiLCJpbmRleCIsImxlbmd0aCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImxpc3QiLCJjYiIsIkhUTUxFbGVtZW50IiwiZGVmaW5l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Q0MsSUFBUCxDQUFZMkQsUUFBWixFQUFzQkMsTUFBdEIsQ0FBNkIsVUFBQ0MsR0FBRCxFQUFNMUQsR0FBTixFQUFjO0FBQ2hELFFBQU13QyxPQUFPLEdBQUc5RCxZQUFZLENBQUNzQixHQUFELENBQTVCO0FBQ0EwRCxJQUFBQSxHQUFHLENBQUMxRCxHQUFELENBQUgsR0FBV3VDLGFBQWEsQ0FBQ0MsT0FBRCxFQUFVZ0IsUUFBUSxDQUFDeEQsR0FBRCxDQUFsQixDQUF4QjtBQUVBLFdBQU8wRCxHQUFQO0FBQ0QsR0FMTSxFQUtKLEVBTEksQ0FBUDtBQU1EOztBQUVELGVBQWUsU0FBU1osTUFBVCxHQUF5QjtBQUN0QyxNQUFJLDhEQUFtQixRQUFuQixJQUErQix1REFBWSxJQUEvQyxFQUFxRDtBQUNuRCxXQUFPUyxTQUFTLGtEQUFoQjtBQUNEOztBQUVELFNBQU9oQixhQUFhLE1BQWIsbUJBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9wZXJ0eSBmcm9tIFwiLi9wcm9wZXJ0eS5qc1wiO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9yZW5kZXIuanNcIjtcblxuaW1wb3J0ICogYXMgY2FjaGUgZnJvbSBcIi4vY2FjaGUuanNcIjtcbmltcG9ydCB7IHBhc2NhbFRvRGFzaCwgZGVmZXJyZWQgfSBmcm9tIFwiLi91dGlscy5qc1wiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xudHJ5IHsgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfSBjYXRjaChlKSB7IHZhciBwcm9jZXNzID0geyBlbnY6IHsgTk9ERV9FTlY6ICdwcm9kdWN0aW9uJyB9IH07IH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5jb25zdCBkZWZhdWx0TWV0aG9kID0gKGhvc3QsIHZhbHVlKSA9PiB2YWx1ZTtcblxuY29uc3QgY2FsbGJhY2tzTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHByb3BzTWFwID0gbmV3IFdlYWtNYXAoKTtcblxuZnVuY3Rpb24gY29tcGlsZShIeWJyaWQsIGRlc2NyaXB0b3JzKSB7XG4gIEh5YnJpZC5oeWJyaWRzID0gZGVzY3JpcHRvcnM7XG5cbiAgY29uc3QgY2FsbGJhY2tzID0gW107XG4gIGNvbnN0IHByb3BzID0gT2JqZWN0LmtleXMoZGVzY3JpcHRvcnMpO1xuXG4gIGNhbGxiYWNrc01hcC5zZXQoSHlicmlkLCBjYWxsYmFja3MpO1xuICBwcm9wc01hcC5zZXQoSHlicmlkLCBwcm9wcyk7XG5cbiAgcHJvcHMuZm9yRWFjaChrZXkgPT4ge1xuICAgIGNvbnN0IGRlc2MgPSBkZXNjcmlwdG9yc1trZXldO1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgZGVzYztcblxuICAgIGxldCBjb25maWc7XG5cbiAgICBpZiAodHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBjb25maWcgPSBrZXkgPT09IFwicmVuZGVyXCIgPyByZW5kZXIoZGVzYykgOiB7IGdldDogZGVzYyB9O1xuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gXCJvYmplY3RcIiB8fCBkZXNjID09PSBudWxsIHx8IEFycmF5LmlzQXJyYXkoZGVzYykpIHtcbiAgICAgIGNvbmZpZyA9IHByb3BlcnR5KGRlc2MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcgPSB7XG4gICAgICAgIGdldDogZGVzYy5nZXQgfHwgZGVmYXVsdE1ldGhvZCxcbiAgICAgICAgc2V0OiBkZXNjLnNldCB8fCAoIWRlc2MuZ2V0ICYmIGRlZmF1bHRNZXRob2QpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgY29ubmVjdDogZGVzYy5jb25uZWN0LFxuICAgICAgICBvYnNlcnZlOiBkZXNjLm9ic2VydmUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShIeWJyaWQucHJvdG90eXBlLCBrZXksIHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gY2FjaGUuZ2V0KHRoaXMsIGtleSwgY29uZmlnLmdldCk7XG4gICAgICB9LFxuICAgICAgc2V0OlxuICAgICAgICBjb25maWcuc2V0ICYmXG4gICAgICAgIGZ1bmN0aW9uIHNldChuZXdWYWx1ZSkge1xuICAgICAgICAgIGNhY2hlLnNldCh0aGlzLCBrZXksIGNvbmZpZy5zZXQsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIixcbiAgICB9KTtcblxuICAgIGlmIChjb25maWcub2JzZXJ2ZSkge1xuICAgICAgY2FsbGJhY2tzLnVuc2hpZnQoaG9zdCA9PlxuICAgICAgICBjYWNoZS5vYnNlcnZlKGhvc3QsIGtleSwgY29uZmlnLmdldCwgY29uZmlnLm9ic2VydmUpLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNvbm5lY3QpIHtcbiAgICAgIGNhbGxiYWNrcy5wdXNoKGhvc3QgPT5cbiAgICAgICAgY29uZmlnLmNvbm5lY3QoaG9zdCwga2V5LCAoKSA9PiB7XG4gICAgICAgICAgY2FjaGUuaW52YWxpZGF0ZShob3N0LCBrZXkpO1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfVxuICB9KTtcbn1cblxubGV0IHVwZGF0ZTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIGNvbnN0IHdhbGtJblNoYWRvdyA9IChub2RlLCBmbikgPT4ge1xuICAgIGZuKG5vZGUpO1xuXG4gICAgQXJyYXkuZnJvbShub2RlLmNoaWxkcmVuKS5mb3JFYWNoKGVsID0+IHdhbGtJblNoYWRvdyhlbCwgZm4pKTtcblxuICAgIGlmIChub2RlLnNoYWRvd1Jvb3QpIHtcbiAgICAgIEFycmF5LmZyb20obm9kZS5zaGFkb3dSb290LmNoaWxkcmVuKS5mb3JFYWNoKGVsID0+IHdhbGtJblNoYWRvdyhlbCwgZm4pKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlUXVldWUgPSBuZXcgTWFwKCk7XG4gIHVwZGF0ZSA9IChIeWJyaWQsIGxhc3RIeWJyaWRzKSA9PiB7XG4gICAgaWYgKCF1cGRhdGVRdWV1ZS5zaXplKSB7XG4gICAgICBkZWZlcnJlZC50aGVuKCgpID0+IHtcbiAgICAgICAgd2Fsa0luU2hhZG93KGRvY3VtZW50LmJvZHksIG5vZGUgPT4ge1xuICAgICAgICAgIGlmICh1cGRhdGVRdWV1ZS5oYXMobm9kZS5jb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGNvbnN0IGh5YnJpZHMgPSB1cGRhdGVRdWV1ZS5nZXQobm9kZS5jb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICBub2RlLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG5vZGUuY29uc3RydWN0b3IuaHlicmlkcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICBjYWNoZS5pbnZhbGlkYXRlKFxuICAgICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIG5vZGUuY29uc3RydWN0b3IuaHlicmlkc1trZXldICE9PSBoeWJyaWRzW2tleV0sXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbm9kZS5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHVwZGF0ZVF1ZXVlLmNsZWFyKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdXBkYXRlUXVldWUuc2V0KEh5YnJpZCwgbGFzdEh5YnJpZHMpO1xuICB9O1xufVxuXG5jb25zdCBkaXNjb25uZWN0cyA9IG5ldyBXZWFrTWFwKCk7XG5cbmZ1bmN0aW9uIGRlZmluZUVsZW1lbnQodGFnTmFtZSwgaHlicmlkc09yQ29uc3RydWN0b3IpIHtcbiAgY29uc3QgdHlwZSA9IHR5cGVvZiBoeWJyaWRzT3JDb25zdHJ1Y3RvcjtcbiAgaWYgKHR5cGUgIT09IFwib2JqZWN0XCIgJiYgdHlwZSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKGBTZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbjogJHt0eXBlfWApO1xuICB9XG5cbiAgaWYgKHRhZ05hbWUgIT09IG51bGwpIHtcbiAgICBjb25zdCBDdXN0b21FbGVtZW50ID0gd2luZG93LmN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKTtcblxuICAgIGlmICh0eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGlmIChDdXN0b21FbGVtZW50ICE9PSBoeWJyaWRzT3JDb25zdHJ1Y3Rvcikge1xuICAgICAgICByZXR1cm4gd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBoeWJyaWRzT3JDb25zdHJ1Y3Rvcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gQ3VzdG9tRWxlbWVudDtcbiAgICB9XG5cbiAgICBpZiAoQ3VzdG9tRWxlbWVudCkge1xuICAgICAgaWYgKEN1c3RvbUVsZW1lbnQuaHlicmlkcyA9PT0gaHlicmlkc09yQ29uc3RydWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIEN1c3RvbUVsZW1lbnQ7XG4gICAgICB9XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIEN1c3RvbUVsZW1lbnQuaHlicmlkcykge1xuICAgICAgICBPYmplY3Qua2V5cyhDdXN0b21FbGVtZW50Lmh5YnJpZHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICBkZWxldGUgQ3VzdG9tRWxlbWVudC5wcm90b3R5cGVba2V5XTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgbGFzdEh5YnJpZHMgPSBDdXN0b21FbGVtZW50Lmh5YnJpZHM7XG5cbiAgICAgICAgY29tcGlsZShDdXN0b21FbGVtZW50LCBoeWJyaWRzT3JDb25zdHJ1Y3Rvcik7XG4gICAgICAgIHVwZGF0ZShDdXN0b21FbGVtZW50LCBsYXN0SHlicmlkcyk7XG5cbiAgICAgICAgcmV0dXJuIEN1c3RvbUVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIHRocm93IEVycm9yKGBFbGVtZW50ICcke3RhZ05hbWV9JyBhbHJlYWR5IGRlZmluZWRgKTtcbiAgICB9XG4gIH1cblxuICBjbGFzcyBIeWJyaWQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuXG4gICAgICBjb25zdCBwcm9wcyA9IHByb3BzTWFwLmdldChIeWJyaWQpO1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJvcHMubGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IHByb3BzW2luZGV4XTtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLCBrZXkpKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzW2tleV07XG4gICAgICAgICAgZGVsZXRlIHRoaXNba2V5XTtcbiAgICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgY29uc3QgY2FsbGJhY2tzID0gY2FsbGJhY2tzTWFwLmdldChIeWJyaWQpO1xuICAgICAgY29uc3QgbGlzdCA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2FsbGJhY2tzLmxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgICBjb25zdCBjYiA9IGNhbGxiYWNrc1tpbmRleF0odGhpcyk7XG4gICAgICAgIGlmIChjYikgbGlzdC5wdXNoKGNiKTtcbiAgICAgIH1cblxuICAgICAgZGlzY29ubmVjdHMuc2V0KHRoaXMsIGxpc3QpO1xuICAgIH1cblxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgY29uc3QgbGlzdCA9IGRpc2Nvbm5lY3RzLmdldCh0aGlzKTtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaXN0Lmxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgICBsaXN0W2luZGV4XSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBpbGUoSHlicmlkLCBoeWJyaWRzT3JDb25zdHJ1Y3Rvcik7XG5cbiAgaWYgKHRhZ05hbWUgIT09IG51bGwpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSHlicmlkLCBcIm5hbWVcIiwge1xuICAgICAgZ2V0OiAoKSA9PiB0YWdOYW1lLFxuICAgIH0pO1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBIeWJyaWQpO1xuICB9XG5cbiAgcmV0dXJuIEh5YnJpZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lTWFwKGVsZW1lbnRzKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhlbGVtZW50cykucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGNvbnN0IHRhZ05hbWUgPSBwYXNjYWxUb0Rhc2goa2V5KTtcbiAgICBhY2Nba2V5XSA9IGRlZmluZUVsZW1lbnQodGFnTmFtZSwgZWxlbWVudHNba2V5XSk7XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmluZSguLi5hcmdzKSB7XG4gIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gXCJvYmplY3RcIiAmJiBhcmdzWzBdICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGRlZmluZU1hcChhcmdzWzBdKTtcbiAgfVxuXG4gIHJldHVybiBkZWZpbmVFbGVtZW50KC4uLmFyZ3MpO1xufVxuIl19

  function _typeof$3(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$3 = function _typeof(obj) { return typeof obj; }; } else { _typeof$3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$3(obj); }

  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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


  var connect = "__store__connect__".concat(Date.now(), "__");
  var definitions = new WeakMap();

  function resolve(config, model, lastModel) {
    if (lastModel) definitions.set(lastModel, null);
    definitions.set(model, config);
    return model;
  }

  function resolveWithInvalidate(config, model, lastModel) {
    resolve(config, model, lastModel);

    if (config.external && model || !lastModel || error(model)) {
      config.invalidate();
    }

    return model;
  }

  function sync(config, id, model, invalidate) {
    set(config, id, invalidate ? resolveWithInvalidate : resolve, model);
    return model;
  }

  var currentTimestamp;

  function getCurrentTimestamp() {
    if (!currentTimestamp) {
      currentTimestamp = Date.now();
      requestAnimationFrame(function () {
        currentTimestamp = undefined;
      });
    }

    return currentTimestamp;
  }

  var timestamps = new WeakMap();

  function getTimestamp(model) {
    var timestamp = timestamps.get(model);

    if (!timestamp) {
      timestamp = getCurrentTimestamp();
      timestamps.set(model, timestamp);
    }

    return timestamp;
  }

  function setTimestamp(model) {
    timestamps.set(model, getCurrentTimestamp());
    return model;
  }

  function setupStorage(storage) {
    if (typeof storage === "function") storage = {
      get: storage
    };

    var result = _objectSpread$2({
      cache: true
    }, storage);

    if (result.cache === false || result.cache === 0) {
      result.validate = function (cachedModel) {
        return !cachedModel || getTimestamp(cachedModel) === getCurrentTimestamp();
      };
    } else if (typeof result.cache === "number") {
      result.validate = function (cachedModel) {
        return !cachedModel || getTimestamp(cachedModel) + result.cache > getCurrentTimestamp();
      };
    } else if (result.cache !== true) {
      throw TypeError("Storage cache property must be a boolean or number: ".concat(_typeof$3(result.cache)));
    }

    return Object.freeze(result);
  }

  function memoryStorage(config) {
    return {
      get: config.enumerable ? function () {} : function () {
        return config.create({});
      },
      set: config.enumerable ? function (id, values) {
        return values;
      } : function (id, values) {
        return values === null ? {
          id: id
        } : values;
      },
      list: config.enumerable && function list(id) {
        if (id) {
          throw TypeError("Memory-based model definition does not support id");
        }

        return getEntries(config).reduce(function (acc, _ref) {
          var key = _ref.key,
              value = _ref.value;
          if (key === config) return acc;
          if (value && !error(value)) acc.push(key);
          return acc;
        }, []);
      }
    };
  }

  function bootstrap(Model, nested) {
    if (Array.isArray(Model)) {
      return setupListModel(Model[0], nested);
    }

    return setupModel(Model, nested);
  }

  function getTypeConstructor(type, key) {
    switch (type) {
      case "string":
        return function (v) {
          return v !== undefined && v !== null ? String(v) : "";
        };

      case "number":
        return Number;

      case "boolean":
        return Boolean;

      default:
        throw TypeError("The value of the '".concat(key, "' must be a string, number or boolean: ").concat(type));
    }
  }

  var stateSetter = function stateSetter(h, v) {
    return v;
  };

  function setModelState(model, state) {
    var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : model;
    set(model, "state", stateSetter, {
      state: state,
      value: value
    });
    return model;
  }

  var stateGetter = function stateGetter(model) {
    var v = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      state: "ready",
      value: model
    };
    return v;
  };

  function getModelState(model) {
    return get(model, "state", stateGetter);
  } // UUID v4 generator thanks to https://gist.github.com/jed/982883


  function uuid(temp) {
    return temp ? // eslint-disable-next-line no-bitwise, no-mixed-operators
    (temp ^ Math.random() * 16 >> temp / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);
  }

  var validationMap = new WeakMap();

  function resolveKey(Model, key, config) {
    var defaultValue = config.model[key];

    var type = _typeof$3(config.model[key]);

    if (defaultValue instanceof String || defaultValue instanceof Number) {
      var check = validationMap.get(defaultValue);

      if (!check) {
        throw TypeError(stringifyModel(Model, "You must use primitive ".concat(_typeof$3(defaultValue.valueOf()), " value for '").concat(key, "' property of the provided model definition")));
      }

      defaultValue = defaultValue.valueOf();
      type = _typeof$3(defaultValue);
      config.checks.set(key, check);
    }

    return {
      defaultValue: defaultValue,
      type: type
    };
  }

  function stringifyModel(Model, msg) {
    return "".concat(msg, ":\n\n").concat(JSON.stringify(Model, function (key, value) {
      if (key === connect) return undefined;
      return value;
    }, 2), "\n\n");
  }

  var _ = function _(h, v) {
    return v;
  };

  var resolvedPromise = Promise.resolve();
  var configs = new WeakMap();

  function setupModel(Model, nested) {
    if (_typeof$3(Model) !== "object" || Model === null) {
      throw TypeError("Model definition must be an object: ".concat(_typeof$3(Model)));
    }

    var config = configs.get(Model);

    if (config && !config.enumerable) {
      if (nested && !config.nested) {
        throw TypeError(stringifyModel(Model, "Provided model definition for nested object already used as a root definition"));
      }

      if (!nested && config.nested) {
        throw TypeError(stringifyModel(Model, "Nested model definition cannot be used outside of the parent definition"));
      }
    }

    if (!config) {
      var storage = Model[connect];
      if (_typeof$3(storage) === "object") Object.freeze(storage);
      var invalidatePromise;
      var _placeholder = {};
      var enumerable = hasOwnProperty.call(Model, "id");
      var checks = new Map();
      config = {
        model: Model,
        external: !!storage,
        enumerable: enumerable,
        nested: !enumerable && nested,
        placeholder: function placeholder(id) {
          return Object.freeze(Object.assign(Object.create(_placeholder), {
            id: id
          }));
        },
        isInstance: function isInstance(model) {
          return Object.getPrototypeOf(model) !== _placeholder;
        },
        invalidate: function invalidate$1() {
          if (!invalidatePromise) {
            invalidatePromise = resolvedPromise.then(function () {
              invalidate(config, config, true);
              invalidatePromise = null;
            });
          }
        },
        checks: checks
      };
      config.storage = setupStorage(storage || memoryStorage(config));
      var transform = Object.keys(Object.freeze(Model)).filter(function (key) {
        return key !== connect;
      }).map(function (key) {
        if (key !== "id") {
          Object.defineProperty(_placeholder, key, {
            get: function get() {
              throw Error("Model instance in ".concat(getModelState(this).state, " state - use store.pending(), store.error(), or store.ready() guards"));
            },
            enumerable: true
          });
        }

        if (key === "id") {
          if (Model[key] !== true) {
            throw TypeError("The 'id' property in model definition must be set to 'true' or not be defined");
          }

          return function (model, data, lastModel) {
            var id;

            if (lastModel) {
              id = lastModel.id;
            } else if (hasOwnProperty.call(data, "id")) {
              id = String(data.id);
            } else {
              id = uuid();
            }

            Object.defineProperty(model, "id", {
              value: id,
              enumerable: true
            });
          };
        }

        var _resolveKey = resolveKey(Model, key, config),
            defaultValue = _resolveKey.defaultValue,
            type = _resolveKey.type;

        switch (type) {
          case "function":
            return function (model) {
              Object.defineProperty(model, key, {
                get: function get$1() {
                  return get(this, key, defaultValue);
                }
              });
            };

          case "object":
            {
              if (defaultValue === null) {
                throw TypeError("The value for the '".concat(key, "' must be an object instance: ").concat(defaultValue));
              }

              var isArray = Array.isArray(defaultValue);

              if (isArray) {
                var nestedType = _typeof$3(defaultValue[0]);

                if (nestedType !== "object") {
                  var Constructor = getTypeConstructor(nestedType, key);
                  var defaultArray = Object.freeze(defaultValue.map(Constructor));
                  return function (model, data, lastModel) {
                    if (hasOwnProperty.call(data, key)) {
                      if (!Array.isArray(data[key])) {
                        throw TypeError("The value for '".concat(key, "' property must be an array: ").concat(_typeof$3(data[key])));
                      }

                      model[key] = Object.freeze(data[key].map(Constructor));
                    } else if (lastModel && hasOwnProperty.call(lastModel, key)) {
                      model[key] = lastModel[key];
                    } else {
                      model[key] = defaultArray;
                    }
                  };
                }

                var localConfig = bootstrap(defaultValue, true);

                if (localConfig.enumerable && defaultValue[1]) {
                  var nestedOptions = defaultValue[1];

                  if (_typeof$3(nestedOptions) !== "object") {
                    throw TypeError("Options for '".concat(key, "' array property must be an object instance: ").concat(_typeof$3(nestedOptions)));
                  }

                  if (nestedOptions.loose) {
                    config.contexts = config.contexts || new Set();
                    config.contexts.add(bootstrap(defaultValue[0]));
                  }
                }

                return function (model, data, lastModel) {
                  if (hasOwnProperty.call(data, key)) {
                    if (!Array.isArray(data[key])) {
                      throw TypeError("The value for '".concat(key, "' property must be an array: ").concat(_typeof$3(data[key])));
                    }

                    model[key] = localConfig.create(data[key]);
                  } else {
                    model[key] = lastModel && lastModel[key] || !localConfig.enumerable && localConfig.create(defaultValue) || [];
                  }
                };
              }

              var nestedConfig = bootstrap(defaultValue, true);

              if (nestedConfig.enumerable || nestedConfig.external) {
                return function (model, data, lastModel) {
                  var resultModel;

                  if (hasOwnProperty.call(data, key)) {
                    var nestedData = data[key];

                    if (_typeof$3(nestedData) !== "object" || nestedData === null) {
                      if (nestedData !== undefined && nestedData !== null) {
                        resultModel = {
                          id: nestedData
                        };
                      }
                    } else {
                      var dataConfig = definitions.get(nestedData);

                      if (dataConfig) {
                        if (dataConfig.model !== defaultValue) {
                          throw TypeError("Model instance must match the definition");
                        }

                        resultModel = nestedData;
                      } else {
                        resultModel = nestedConfig.create(nestedData);
                        sync(nestedConfig, resultModel.id, resultModel);
                      }
                    }
                  } else {
                    resultModel = lastModel && lastModel[key];
                  }

                  if (resultModel) {
                    var id = resultModel.id;
                    Object.defineProperty(model, key, {
                      get: function get$1() {
                        return get(this, key, pending(this) ? _ : function () {
                          return _get(defaultValue, id);
                        });
                      },
                      enumerable: true
                    });
                  } else {
                    model[key] = undefined;
                  }
                };
              }

              return function (model, data, lastModel) {
                if (hasOwnProperty.call(data, key)) {
                  model[key] = nestedConfig.create(data[key], lastModel && lastModel[key]);
                } else {
                  model[key] = lastModel ? lastModel[key] : nestedConfig.create({});
                }
              };
            }
          // eslint-disable-next-line no-fallthrough

          default:
            {
              var _Constructor = getTypeConstructor(type, key);

              return function (model, data, lastModel) {
                if (hasOwnProperty.call(data, key)) {
                  model[key] = _Constructor(data[key]);
                } else if (lastModel && hasOwnProperty.call(lastModel, key)) {
                  model[key] = lastModel[key];
                } else {
                  model[key] = defaultValue;
                }
              };
            }
        }
      });

      config.create = function create(data, lastModel) {
        if (data === null) return null;

        if (_typeof$3(data) !== "object") {
          throw TypeError("Model values must be an object instance: ".concat(data));
        }

        var model = transform.reduce(function (acc, fn) {
          fn(acc, data, lastModel);
          return acc;
        }, {});
        definitions.set(model, config);
        storePointer.set(model, store);
        return Object.freeze(model);
      };

      Object.freeze(_placeholder);
      configs.set(Model, Object.freeze(config));
    }

    return config;
  }

  var listPlaceholderPrototype = Object.getOwnPropertyNames(Array.prototype).reduce(function (acc, key) {
    if (key === "length" || key === "constructor") return acc;
    Object.defineProperty(acc, key, {
      get: function get() {
        throw Error("Model list instance in ".concat(getModelState(this).state, " state - use store.pending(), store.error(), or store.ready() guards"));
      }
    });
    return acc;
  }, []);
  var lists = new WeakMap();

  function setupListModel(Model, nested) {
    var config = lists.get(Model);

    if (config && !config.enumerable) {
      if (!nested && config.nested) {
        throw TypeError(stringifyModel(Model, "Nested model definition cannot be used outside of the parent definition"));
      }
    }

    if (!config) {
      var modelConfig = setupModel(Model);
      var contexts = new Set();
      contexts.add(modelConfig);

      if (!nested) {
        if (!modelConfig.enumerable) {
          throw TypeError(stringifyModel(Model, "Provided model definition does not support listing (it must be enumerable - set `id` property to `true`)"));
        }

        if (!modelConfig.storage.list) {
          throw TypeError(stringifyModel(Model, "Provided model definition storage does not support `list` action"));
        }
      }

      config = {
        list: true,
        nested: !modelConfig.enumerable && nested,
        model: Model,
        contexts: contexts,
        enumerable: modelConfig.enumerable,
        storage: setupStorage({
          cache: modelConfig.storage.cache,
          get: !nested && function (id) {
            return modelConfig.storage.list(id);
          }
        }),
        placeholder: function placeholder() {
          return Object.freeze(Object.create(listPlaceholderPrototype));
        },
        isInstance: function isInstance(model) {
          return Object.getPrototypeOf(model) !== listPlaceholderPrototype;
        },
        create: function create(items) {
          var result = items.reduce(function (acc, data) {
            var id = data;

            if (_typeof$3(data) === "object" && data !== null) {
              id = data.id;
              var dataConfig = definitions.get(data);
              var model = data;

              if (dataConfig) {
                if (dataConfig.model !== Model) {
                  throw TypeError("Model instance must match the definition");
                }
              } else {
                model = modelConfig.create(data);

                if (modelConfig.enumerable) {
                  id = model.id;
                  sync(modelConfig, id, model);
                }
              }

              if (!modelConfig.enumerable) {
                acc.push(model);
              }
            } else if (!modelConfig.enumerable) {
              throw TypeError("Model instance must be an object: ".concat(_typeof$3(data)));
            }

            if (modelConfig.enumerable) {
              var key = acc.length;
              Object.defineProperty(acc, key, {
                get: function get$1() {
                  return get(this, key, pending(this) ? _ : function () {
                    return _get(Model, id);
                  });
                },
                enumerable: true
              });
            }

            return acc;
          }, []);
          definitions.set(result, config);
          storePointer.set(result, store);
          return Object.freeze(result);
        }
      };
      lists.set(Model, Object.freeze(config));
    }

    return config;
  }

  function resolveTimestamp(h, v) {
    return v || getCurrentTimestamp();
  }

  function stringifyId(id) {
    switch (_typeof$3(id)) {
      case "object":
        return JSON.stringify(Object.keys(id).sort().reduce(function (acc, key) {
          if (_typeof$3(id[key]) === "object" && id[key] !== null) {
            throw TypeError("You must use primitive value for '".concat(key, "' key: ").concat(_typeof$3(id[key])));
          }

          acc[key] = id[key];
          return acc;
        }, {}));

      case "undefined":
        return undefined;

      default:
        return String(id);
    }
  }

  function mapError(model, err, suppressLog) {

    return setModelState(model, "error", err);
  }

  function _get(Model, id) {
    var config = bootstrap(Model);
    var stringId;

    if (!config.storage.get) {
      throw TypeError(stringifyModel(Model, "Provided model definition does not support 'get' method"));
    }

    if (config.enumerable) {
      stringId = stringifyId(id);

      if (!config.list && !stringId) {
        throw TypeError(stringifyModel(Model, "Provided model definition requires non-empty id: \"".concat(stringId, "\"")));
      }
    } else if (id !== undefined) {
      throw TypeError(stringifyModel(Model, "Provided model definition does not support id"));
    }

    return get(config, stringId, function (h, cachedModel) {
      if (cachedModel && pending(cachedModel)) return cachedModel;
      var validContexts = true;

      if (config.contexts) {
        config.contexts.forEach(function (context) {
          if (get(context, context, resolveTimestamp) === getCurrentTimestamp()) {
            validContexts = false;
          }
        });
      }

      if (validContexts && cachedModel && (config.storage.cache === true || config.storage.validate(cachedModel))) {
        return cachedModel;
      }

      try {
        var result = config.storage.get(id);

        if (_typeof$3(result) !== "object" || result === null) {
          throw Error("Model instance ".concat(stringId !== undefined ? "with '".concat(stringId, "' id") : "", " does not exist: ").concat(result));
        }

        if (result instanceof Promise) {
          result = result.then(function (data) {
            if (_typeof$3(data) !== "object" || data === null) {
              throw Error("Model instance ".concat(stringId !== undefined ? "with '".concat(stringId, "' id") : "", " does not exist: ").concat(result));
            }

            return sync(config, stringId, config.create(stringId ? _objectSpread$2({}, data, {
              id: stringId
            }) : data));
          }).catch(function (e) {
            return sync(config, stringId, mapError(cachedModel || config.placeholder(stringId), e));
          });
          return setModelState(cachedModel || config.placeholder(stringId), "pending", result);
        }

        if (cachedModel) definitions.set(cachedModel, null);
        return setTimestamp(config.create(stringId ? _objectSpread$2({}, result, {
          id: stringId
        }) : result));
      } catch (e) {
        return setTimestamp(mapError(cachedModel || config.placeholder(stringId), e));
      }
    }, config.storage.validate);
  }

  var draftMap = new WeakMap();

  function getValidationError(errors) {
    var keys = Object.keys(errors);
    var e = Error("Model validation failed (".concat(keys.join(", "), ") - read the details from 'errors' property"));
    e.errors = errors;
    return e;
  }

  function set$1(model) {
    var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var config = definitions.get(model);
    var isInstance = !!config;

    if (config === null) {
      throw Error("Provided model instance has expired. Haven't you used stale value?");
    }

    if (!config) config = bootstrap(model);

    if (config.nested) {
      throw stringifyModel(config.model, TypeError("Setting provided nested model instance is not supported, use the root model instance"));
    }

    if (config.list) {
      throw TypeError("Listing model definition does not support 'set' method");
    }

    if (!config.storage.set) {
      throw stringifyModel(config.model, TypeError("Provided model definition storage does not support 'set' method"));
    }

    if (isInstance && pending(model)) {
      throw Error("Provided model instance is in pending state");
    }

    var id;

    var setState = function setState(state, value) {
      if (isInstance) {
        setModelState(model, state, value);
      } else {
        var entry = getEntry(config, id);

        if (entry.value) {
          setModelState(entry.value, state, value);
        }
      }
    };

    try {
      if (config.enumerable && !isInstance && (!values || _typeof$3(values) !== "object")) {
        throw TypeError("Values must be an object instance: ".concat(values));
      }

      if (values && hasOwnProperty.call(values, "id")) {
        throw TypeError("Values must not contain 'id' property: ".concat(values.id));
      }

      var localModel = config.create(values, isInstance ? model : undefined);
      var keys = values ? Object.keys(values) : [];
      var isDraft = draftMap.get(config);
      var errors = {};
      var lastError = isInstance && isDraft && error(model);
      var hasErrors = false;

      if (localModel) {
        config.checks.forEach(function (fn, key) {
          if (keys.indexOf(key) === -1) {
            if (lastError && lastError.errors && lastError.errors[key]) {
              hasErrors = true;
              errors[key] = lastError.errors[key];
            } // eslint-disable-next-line eqeqeq


            if (isDraft && localModel[key] == config.model[key]) {
              return;
            }
          }

          var checkResult;

          try {
            checkResult = fn(localModel[key], key, localModel);
          } catch (e) {
            checkResult = e;
          }

          if (checkResult !== true && checkResult !== undefined) {
            hasErrors = true;
            errors[key] = checkResult || true;
          }
        });

        if (hasErrors && !isDraft) {
          throw getValidationError(errors);
        }
      }

      id = localModel ? localModel.id : model.id;
      var result = Promise.resolve(config.storage.set(isInstance ? id : undefined, localModel, keys)).then(function (data) {
        var resultModel = data === localModel ? localModel : config.create(data);

        if (isInstance && resultModel && id !== resultModel.id) {
          throw TypeError("Local and storage data must have the same id: '".concat(id, "', '").concat(resultModel.id, "'"));
        }

        var resultId = resultModel ? resultModel.id : id;

        if (hasErrors && isDraft) {
          setModelState(resultModel, "error", getValidationError(errors));
        }

        return sync(config, resultId, resultModel || mapError(config.placeholder(resultId), Error("Model instance ".concat(id !== undefined ? "with '".concat(id, "' id") : "", " does not exist: ").concat(resultModel)), false), true);
      }).catch(function (err) {
        err = err !== undefined ? err : Error("Undefined error");
        setState("error", err);
        throw err;
      });
      setState("pending", result);
      return result;
    } catch (e) {
      setState("error", e);
      return Promise.reject(e);
    }
  }

  function clear(model) {
    var clearValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (_typeof$3(model) !== "object" || model === null) {
      throw TypeError("The first argument must be a model instance or a model definition: ".concat(model));
    }

    var config = definitions.get(model);

    if (config === null) {
      throw Error("Provided model instance has expired. Haven't you used stale value from the outer scope?");
    }

    if (config) {
      invalidate(config, model.id, clearValue, true);
    } else {
      if (!configs.get(model) && !lists.get(model[0])) {
        throw Error("Model definition must be used before - passed argument is probably not a model definition");
      }

      invalidateAll(bootstrap(model), clearValue, true);
    }
  }

  function pending(model) {
    if (model === null || _typeof$3(model) !== "object") return false;

    var _getModelState = getModelState(model),
        state = _getModelState.state,
        value = _getModelState.value;

    return state === "pending" && value;
  }

  function error(model, property) {
    if (model === null || _typeof$3(model) !== "object") return false;

    var _getModelState2 = getModelState(model),
        state = _getModelState2.state,
        value = _getModelState2.value;

    var result = state === "error" && value;

    if (result && property !== undefined) {
      return result.errors && result.errors[property];
    }

    return result;
  }

  function ready(model) {
    if (model === null || _typeof$3(model) !== "object") return false;
    var config = definitions.get(model);
    return !!(config && config.isInstance(model));
  }

  function mapValueWithState(lastValue, nextValue) {
    var result = Object.freeze(Object.keys(lastValue).reduce(function (acc, key) {
      Object.defineProperty(acc, key, {
        get: function get() {
          return lastValue[key];
        },
        enumerable: true
      });
      return acc;
    }, Object.create(lastValue)));
    definitions.set(result, definitions.get(lastValue));

    var _getModelState3 = getModelState(nextValue),
        state = _getModelState3.state,
        value = _getModelState3.value;

    return setModelState(result, state, value);
  }

  function getValuesFromModel(model) {
    var values = _objectSpread$2({}, model);

    delete values.id;
    return values;
  }

  function submit(draft) {
    var config = definitions.get(draft);

    if (!config || !draftMap.has(config)) {
      throw TypeError("Provided model instance is not a draft: ".concat(draft));
    }

    if (pending(draft)) {
      throw Error("Model draft in pending state");
    }

    var options = draftMap.get(config);
    var result;

    if (!options.id) {
      result = store.set(options.model, getValuesFromModel(draft));
    } else {
      var model = store.get(options.model, draft.id);
      result = Promise.resolve(pending(model) || model).then(function (resolvedModel) {
        return store.set(resolvedModel, getValuesFromModel(draft));
      });
    }

    result = result.then(function (resultModel) {
      setModelState(draft, "ready");
      return store.set(draft, getValuesFromModel(resultModel)).then(function () {
        return resultModel;
      });
    }).catch(function (e) {
      setModelState(draft, "error", e);
      return Promise.reject(e);
    });
    setModelState(draft, "pending", result);
    return result;
  }

  function required(value, key) {
    return !!value || "".concat(key, " is required");
  }

  function valueWithValidation(defaultValue) {
    var validate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : required;
    var errorMessage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

    switch (_typeof$3(defaultValue)) {
      case "string":
        // eslint-disable-next-line no-new-wrappers
        defaultValue = new String(defaultValue);
        break;

      case "number":
        // eslint-disable-next-line no-new-wrappers
        defaultValue = new Number(defaultValue);
        break;

      default:
        throw TypeError("Default value must be a string or a number: ".concat(_typeof$3(defaultValue)));
    }

    var fn;

    if (validate instanceof RegExp) {
      fn = function fn(value) {
        return validate.test(value) || errorMessage;
      };
    } else if (typeof validate === "function") {
      fn = function fn() {
        var result = validate.apply(void 0, arguments);
        return result !== true && result !== undefined ? result || errorMessage : result;
      };
    } else {
      throw TypeError("The second argument must be a RegExp instance or a function: ".concat(_typeof$3(validate)));
    }

    validationMap.set(defaultValue, fn);
    return defaultValue;
  }

  function store(Model) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var config = bootstrap(Model);

    if (_typeof$3(options) !== "object") {
      options = {
        id: options
      };
    }

    if (options.id !== undefined && typeof options.id !== "function") {
      var id = options.id;

      options.id = function (host) {
        return host[id];
      };
    }

    if (options.draft) {
      if (config.list) {
        throw TypeError("Draft mode is not supported for listing model definition");
      }

      Model = _objectSpread$2({}, Model, _defineProperty$2({}, store.connect, {
        get: function get(id) {
          var model = store.get(config.model, id);
          return ready(model) ? model : pending(model);
        },
        set: function set(id, values) {
          return values === null ? {
            id: id
          } : values;
        }
      }));
      options.draft = bootstrap(Model);
      draftMap.set(options.draft, {
        model: config.model,
        id: options.id
      });
    }

    var createMode = options.draft && config.enumerable && !options.id;
    var desc = {
      get: function get(host, lastValue) {
        if (createMode && !lastValue) {
          var _nextValue = options.draft.create({});

          sync(options.draft, _nextValue.id, _nextValue);
          return store.get(Model, _nextValue.id);
        }

        var id = options.draft && lastValue ? lastValue.id : options.id && options.id(host);
        var nextValue = store.get(Model, id);

        if (lastValue && nextValue !== lastValue && !ready(nextValue)) {
          return mapValueWithState(lastValue, nextValue);
        }

        return nextValue;
      },
      set: config.list ? undefined : function (host, values, lastValue) {
        if (!lastValue || !ready(lastValue)) lastValue = desc.get(host);
        store.set(lastValue, values).catch(
        /* istanbul ignore next */
        function () {});
        return lastValue;
      },
      connect: options.draft ? function () {
        return function () {
          return clear(Model, false);
        };
      } : undefined
    };
    return desc;
  }

  Object.assign(store, {
    // storage
    connect: connect,
    // actions
    get: _get,
    set: set$1,
    clear: clear,
    // guards
    pending: pending,
    error: error,
    ready: ready,
    // helpers
    submit: submit,
    value: valueWithValidation
  });
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJjYWNoZSIsInN0b3JlUG9pbnRlciIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImUiLCJjb25uZWN0IiwiRGF0ZSIsIm5vdyIsImRlZmluaXRpb25zIiwiV2Vha01hcCIsInJlc29sdmUiLCJjb25maWciLCJtb2RlbCIsImxhc3RNb2RlbCIsInNldCIsInJlc29sdmVXaXRoSW52YWxpZGF0ZSIsImV4dGVybmFsIiwiZXJyb3IiLCJpbnZhbGlkYXRlIiwic3luYyIsImlkIiwiY3VycmVudFRpbWVzdGFtcCIsImdldEN1cnJlbnRUaW1lc3RhbXAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1bmRlZmluZWQiLCJ0aW1lc3RhbXBzIiwiZ2V0VGltZXN0YW1wIiwidGltZXN0YW1wIiwiZ2V0Iiwic2V0VGltZXN0YW1wIiwic2V0dXBTdG9yYWdlIiwic3RvcmFnZSIsInJlc3VsdCIsInZhbGlkYXRlIiwiY2FjaGVkTW9kZWwiLCJUeXBlRXJyb3IiLCJPYmplY3QiLCJmcmVlemUiLCJtZW1vcnlTdG9yYWdlIiwiZW51bWVyYWJsZSIsImNyZWF0ZSIsInZhbHVlcyIsImxpc3QiLCJnZXRFbnRyaWVzIiwicmVkdWNlIiwiYWNjIiwia2V5IiwidmFsdWUiLCJwdXNoIiwiYm9vdHN0cmFwIiwiTW9kZWwiLCJuZXN0ZWQiLCJBcnJheSIsImlzQXJyYXkiLCJzZXR1cExpc3RNb2RlbCIsInNldHVwTW9kZWwiLCJnZXRUeXBlQ29uc3RydWN0b3IiLCJ0eXBlIiwidiIsIlN0cmluZyIsIk51bWJlciIsIkJvb2xlYW4iLCJzdGF0ZVNldHRlciIsImgiLCJzZXRNb2RlbFN0YXRlIiwic3RhdGUiLCJzdGF0ZUdldHRlciIsImdldE1vZGVsU3RhdGUiLCJ1dWlkIiwidGVtcCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJ2YWxpZGF0aW9uTWFwIiwicmVzb2x2ZUtleSIsImRlZmF1bHRWYWx1ZSIsImNoZWNrIiwic3RyaW5naWZ5TW9kZWwiLCJ2YWx1ZU9mIiwiY2hlY2tzIiwibXNnIiwiSlNPTiIsInN0cmluZ2lmeSIsIl8iLCJyZXNvbHZlZFByb21pc2UiLCJQcm9taXNlIiwiY29uZmlncyIsImludmFsaWRhdGVQcm9taXNlIiwicGxhY2Vob2xkZXIiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJNYXAiLCJhc3NpZ24iLCJpc0luc3RhbmNlIiwiZ2V0UHJvdG90eXBlT2YiLCJ0aGVuIiwidHJhbnNmb3JtIiwia2V5cyIsImZpbHRlciIsIm1hcCIsImRlZmluZVByb3BlcnR5IiwiRXJyb3IiLCJkYXRhIiwibmVzdGVkVHlwZSIsIkNvbnN0cnVjdG9yIiwiZGVmYXVsdEFycmF5IiwibG9jYWxDb25maWciLCJuZXN0ZWRPcHRpb25zIiwibG9vc2UiLCJjb250ZXh0cyIsIlNldCIsImFkZCIsIm5lc3RlZENvbmZpZyIsInJlc3VsdE1vZGVsIiwibmVzdGVkRGF0YSIsImRhdGFDb25maWciLCJwZW5kaW5nIiwiZm4iLCJzdG9yZSIsImxpc3RQbGFjZWhvbGRlclByb3RvdHlwZSIsImdldE93blByb3BlcnR5TmFtZXMiLCJwcm90b3R5cGUiLCJsaXN0cyIsIm1vZGVsQ29uZmlnIiwiaXRlbXMiLCJsZW5ndGgiLCJyZXNvbHZlVGltZXN0YW1wIiwic3RyaW5naWZ5SWQiLCJzb3J0IiwibWFwRXJyb3IiLCJlcnIiLCJzdXBwcmVzc0xvZyIsImNvbnNvbGUiLCJzdHJpbmdJZCIsInZhbGlkQ29udGV4dHMiLCJmb3JFYWNoIiwiY29udGV4dCIsImNhdGNoIiwiZHJhZnRNYXAiLCJnZXRWYWxpZGF0aW9uRXJyb3IiLCJlcnJvcnMiLCJqb2luIiwic2V0U3RhdGUiLCJlbnRyeSIsImdldEVudHJ5IiwibG9jYWxNb2RlbCIsImlzRHJhZnQiLCJsYXN0RXJyb3IiLCJoYXNFcnJvcnMiLCJpbmRleE9mIiwiY2hlY2tSZXN1bHQiLCJyZXN1bHRJZCIsInJlamVjdCIsImNsZWFyIiwiY2xlYXJWYWx1ZSIsImludmFsaWRhdGVBbGwiLCJwcm9wZXJ0eSIsInJlYWR5IiwibWFwVmFsdWVXaXRoU3RhdGUiLCJsYXN0VmFsdWUiLCJuZXh0VmFsdWUiLCJnZXRWYWx1ZXNGcm9tTW9kZWwiLCJzdWJtaXQiLCJkcmFmdCIsImhhcyIsIm9wdGlvbnMiLCJyZXNvbHZlZE1vZGVsIiwicmVxdWlyZWQiLCJ2YWx1ZVdpdGhWYWxpZGF0aW9uIiwiZXJyb3JNZXNzYWdlIiwiUmVnRXhwIiwidGVzdCIsImhvc3QiLCJjcmVhdGVNb2RlIiwiZGVzYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBLE9BQU8sS0FBS0EsS0FBWixNQUF1QixZQUF2QjtBQUNBLFNBQVNDLFlBQVQsUUFBNkIsWUFBN0I7QUFFQTs7QUFDQSxJQUFJO0FBQUVDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaO0FBQXNCLENBQTVCLENBQTZCLE9BQU1DLENBQU4sRUFBUztBQUFFLE1BQUlILE9BQU8sR0FBRztBQUFFQyxJQUFBQSxHQUFHLEVBQUU7QUFBRUMsTUFBQUEsUUFBUSxFQUFFO0FBQVo7QUFBUCxHQUFkO0FBQW9ELEMsQ0FBQzs7O0FBRTdGLE9BQU8sSUFBTUUsT0FBTywrQkFBd0JDLElBQUksQ0FBQ0MsR0FBTCxFQUF4QixPQUFiO0FBQ1AsSUFBTUMsV0FBVyxHQUFHLElBQUlDLE9BQUosRUFBcEI7O0FBRUEsU0FBU0MsT0FBVCxDQUFpQkMsTUFBakIsRUFBeUJDLEtBQXpCLEVBQWdDQyxTQUFoQyxFQUEyQztBQUN6QyxNQUFJQSxTQUFKLEVBQWVMLFdBQVcsQ0FBQ00sR0FBWixDQUFnQkQsU0FBaEIsRUFBMkIsSUFBM0I7QUFDZkwsRUFBQUEsV0FBVyxDQUFDTSxHQUFaLENBQWdCRixLQUFoQixFQUF1QkQsTUFBdkI7QUFFQSxTQUFPQyxLQUFQO0FBQ0Q7O0FBRUQsU0FBU0cscUJBQVQsQ0FBK0JKLE1BQS9CLEVBQXVDQyxLQUF2QyxFQUE4Q0MsU0FBOUMsRUFBeUQ7QUFDdkRILEVBQUFBLE9BQU8sQ0FBQ0MsTUFBRCxFQUFTQyxL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QUEsZUFBTVYsS0FBSyxDQUFDeEcsS0FBRCxFQUFRLEtBQVIsQ0FBWDtBQUFBLE9BQU47QUFBQSxLQUFoQixHQUFrRDFCO0FBaENoRCxHQUFiO0FBbUNBLFNBQU91SixJQUFQO0FBQ0Q7O0FBRUQsZUFBZTNJLE1BQU0sQ0FBQ3lELE1BQVAsQ0FBYzBCLEtBQWQsRUFBcUI7QUFDbEM7QUFDQWxILEVBQUFBLE9BQU8sRUFBUEEsT0FGa0M7QUFJbEM7QUFDQXVCLEVBQUFBLEdBQUcsRUFBSEEsSUFMa0M7QUFNbENkLEVBQUFBLEdBQUcsRUFBSEEsR0FOa0M7QUFPbEM0SSxFQUFBQSxLQUFLLEVBQUxBLEtBUGtDO0FBU2xDO0FBQ0FyQyxFQUFBQSxPQUFPLEVBQVBBLE9BVmtDO0FBV2xDcEcsRUFBQUEsS0FBSyxFQUFMQSxLQVhrQztBQVlsQzZJLEVBQUFBLEtBQUssRUFBTEEsS0Faa0M7QUFjbEM7QUFDQUssRUFBQUEsTUFBTSxFQUFOQSxNQWZrQztBQWdCbENwSCxFQUFBQSxLQUFLLEVBQUUwSDtBQWhCMkIsQ0FBckIsQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5pbXBvcnQgKiBhcyBjYWNoZSBmcm9tIFwiLi9jYWNoZS5qc1wiO1xuaW1wb3J0IHsgc3RvcmVQb2ludGVyIH0gZnJvbSBcIi4vdXRpbHMuanNcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbnRyeSB7IHByb2Nlc3MuZW52Lk5PREVfRU5WIH0gY2F0Y2goZSkgeyB2YXIgcHJvY2VzcyA9IHsgZW52OiB7IE5PREVfRU5WOiAncHJvZHVjdGlvbicgfSB9OyB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuZXhwb3J0IGNvbnN0IGNvbm5lY3QgPSBgX19zdG9yZV9fY29ubmVjdF9fJHtEYXRlLm5vdygpfV9fYDtcbmNvbnN0IGRlZmluaXRpb25zID0gbmV3IFdlYWtNYXAoKTtcblxuZnVuY3Rpb24gcmVzb2x2ZShjb25maWcsIG1vZGVsLCBsYXN0TW9kZWwpIHtcbiAgaWYgKGxhc3RNb2RlbCkgZGVmaW5pdGlvbnMuc2V0KGxhc3RNb2RlbCwgbnVsbCk7XG4gIGRlZmluaXRpb25zLnNldChtb2RlbCwgY29uZmlnKTtcblxuICByZXR1cm4gbW9kZWw7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVXaXRoSW52YWxpZGF0ZShjb25maWcsIG1vZGVsLCBsYXN0TW9kZWwpIHtcbiAgcmVzb2x2ZShjb25maWcsIG1vZGVsLCBsYXN0TW9kZWwpO1xuXG4gIGlmICgoY29uZmlnLmV4dGVybmFsICYmIG1vZGVsKSB8fCAhbGFzdE1vZGVsIHx8IGVycm9yKG1vZGVsKSkge1xuICAgIGNvbmZpZy5pbnZhbGlkYXRlKCk7XG4gIH1cblxuICByZXR1cm4gbW9kZWw7XG59XG5cbmZ1bmN0aW9uIHN5bmMoY29uZmlnLCBpZCwgbW9kZWwsIGludmFsaWRhdGUpIHtcbiAgY2FjaGUuc2V0KFxuICAgIGNvbmZpZyxcbiAgICBpZCxcbiAgICBpbnZhbGlkYXRlID8gcmVzb2x2ZVdpdGhJbnZhbGlkYXRlIDogcmVzb2x2ZSxcbiAgICBtb2RlbCxcbiAgICB0cnVlLFxuICApO1xuICByZXR1cm4gbW9kZWw7XG59XG5cbmxldCBjdXJyZW50VGltZXN0YW1wO1xuZnVuY3Rpb24gZ2V0Q3VycmVudFRpbWVzdGFtcCgpIHtcbiAgaWYgKCFjdXJyZW50VGltZXN0YW1wKSB7XG4gICAgY3VycmVudFRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGN1cnJlbnRUaW1lc3RhbXAgPSB1bmRlZmluZWQ7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGN1cnJlbnRUaW1lc3RhbXA7XG59XG5cbmNvbnN0IHRpbWVzdGFtcHMgPSBuZXcgV2Vha01hcCgpO1xuXG5mdW5jdGlvbiBnZXRUaW1lc3RhbXAobW9kZWwpIHtcbiAgbGV0IHRpbWVzdGFtcCA9IHRpbWVzdGFtcHMuZ2V0KG1vZGVsKTtcblxuICBpZiAoIXRpbWVzdGFtcCkge1xuICAgIHRpbWVzdGFtcCA9IGdldEN1cnJlbnRUaW1lc3RhbXAoKTtcbiAgICB0aW1lc3RhbXBzLnNldChtb2RlbCwgdGltZXN0YW1wKTtcbiAgfVxuXG4gIHJldHVybiB0aW1lc3RhbXA7XG59XG5cbmZ1bmN0aW9uIHNldFRpbWVzdGFtcChtb2RlbCkge1xuICB0aW1lc3RhbXBzLnNldChtb2RlbCwgZ2V0Q3VycmVudFRpbWVzdGFtcCgpKTtcbiAgcmV0dXJuIG1vZGVsO1xufVxuXG5mdW5jdGlvbiBzZXR1cFN0b3JhZ2Uoc3RvcmFnZSkge1xuICBpZiAodHlwZW9mIHN0b3JhZ2UgPT09IFwiZnVuY3Rpb25cIikgc3RvcmFnZSA9IHsgZ2V0OiBzdG9yYWdlIH07XG5cbiAgY29uc3QgcmVzdWx0ID0geyBjYWNoZTogdHJ1ZSwgLi4uc3RvcmFnZSB9O1xuXG4gIGlmIChyZXN1bHQuY2FjaGUgPT09IGZhbHNlIHx8IHJlc3VsdC5jYWNoZSA9PT0gMCkge1xuICAgIHJlc3VsdC52YWxpZGF0ZSA9IGNhY2hlZE1vZGVsID0+XG4gICAgICAhY2FjaGVkTW9kZWwgfHwgZ2V0VGltZXN0YW1wKGNhY2hlZE1vZGVsKSA9PT0gZ2V0Q3VycmVudFRpbWVzdGFtcCgpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiByZXN1bHQuY2FjaGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICByZXN1bHQudmFsaWRhdGUgPSBjYWNoZWRNb2RlbCA9PlxuICAgICAgIWNhY2hlZE1vZGVsIHx8XG4gICAgICBnZXRUaW1lc3RhbXAoY2FjaGVkTW9kZWwpICsgcmVzdWx0LmNhY2hlID4gZ2V0Q3VycmVudFRpbWVzdGFtcCgpO1xuICB9IGVsc2UgaWYgKHJlc3VsdC5jYWNoZSAhPT0gdHJ1ZSkge1xuICAgIHRocm93IFR5cGVFcnJvcihcbiAgICAgIGBTdG9yYWdlIGNhY2hlIHByb3BlcnR5IG11c3QgYmUgYSBib29sZWFuIG9yIG51bWJlcjogJHt0eXBlb2YgcmVzdWx0LmNhY2hlfWAsXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHJlc3VsdCk7XG59XG5cbmZ1bmN0aW9uIG1lbW9yeVN0b3JhZ2UoY29uZmlnKSB7XG4gIHJldHVybiB7XG4gICAgZ2V0OiBjb25maWcuZW51bWVyYWJsZSA/ICgpID0+IHt9IDogKCkgPT4gY29uZmlnLmNyZWF0ZSh7fSksXG4gICAgc2V0OiBjb25maWcuZW51bWVyYWJsZVxuICAgICAgPyAoaWQsIHZhbHVlcykgPT4gdmFsdWVzXG4gICAgICA6IChpZCwgdmFsdWVzKSA9PiAodmFsdWVzID09PSBudWxsID8geyBpZCB9IDogdmFsdWVzKSxcbiAgICBsaXN0OlxuICAgICAgY29uZmlnLmVudW1lcmFibGUgJiZcbiAgICAgIGZ1bmN0aW9uIGxpc3QoaWQpIHtcbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgdGhyb3cgVHlwZUVycm9yKGBNZW1vcnktYmFzZWQgbW9kZWwgZGVmaW5pdGlvbiBkb2VzIG5vdCBzdXBwb3J0IGlkYCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2FjaGUuZ2V0RW50cmllcyhjb25maWcpLnJlZHVjZSgoYWNjLCB7IGtleSwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgIGlmIChrZXkgPT09IGNvbmZpZykgcmV0dXJuIGFjYztcbiAgICAgICAgICBpZiAodmFsdWUgJiYgIWVycm9yKHZhbHVlKSkgYWNjLnB1c2goa2V5KTtcbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCBbXSk7XG4gICAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBib290c3RyYXAoTW9kZWwsIG5lc3RlZCkge1xuICBpZiAoQXJyYXkuaXNBcnJheShNb2RlbCkpIHtcbiAgICByZXR1cm4gc2V0dXBMaXN0TW9kZWwoTW9kZWxbMF0sIG5lc3RlZCk7XG4gIH1cbiAgcmV0dXJuIHNldHVwTW9kZWwoTW9kZWwsIG5lc3RlZCk7XG59XG5cbmZ1bmN0aW9uIGdldFR5cGVDb25zdHJ1Y3Rvcih0eXBlLCBrZXkpIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgcmV0dXJuIHYgPT4gKHYgIT09IHVuZGVmaW5lZCAmJiB2ICE9PSBudWxsID8gU3RyaW5nKHYpIDogXCJcIik7XG4gICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgcmV0dXJuIE51bWJlcjtcbiAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgcmV0dXJuIEJvb2xlYW47XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IFR5cGVFcnJvcihcbiAgICAgICAgYFRoZSB2YWx1ZSBvZiB0aGUgJyR7a2V5fScgbXVzdCBiZSBhIHN0cmluZywgbnVtYmVyIG9yIGJvb2xlYW46ICR7dHlwZX1gLFxuICAgICAgKTtcbiAgfVxufVxuXG5jb25zdCBzdGF0ZVNldHRlciA9IChoLCB2KSA9PiB2O1xuZnVuY3Rpb24gc2V0TW9kZWxTdGF0ZShtb2RlbCwgc3RhdGUsIHZhbHVlID0gbW9kZWwpIHtcbiAgY2FjaGUuc2V0KG1vZGVsLCBcInN0YXRlXCIsIHN0YXRlU2V0dGVyLCB7IHN0YXRlLCB2YWx1ZSB9LCB0cnVlKTtcbiAgcmV0dXJuIG1vZGVsO1xufVxuXG5jb25zdCBzdGF0ZUdldHRlciA9IChtb2RlbCwgdiA9IHsgc3RhdGU6IFwicmVhZHlcIiwgdmFsdWU6IG1vZGVsIH0pID0+IHY7XG5mdW5jdGlvbiBnZXRNb2RlbFN0YXRlKG1vZGVsKSB7XG4gIHJldHVybiBjYWNoZS5nZXQobW9kZWwsIFwic3RhdGVcIiwgc3RhdGVHZXR0ZXIpO1xufVxuXG4vLyBVVUlEIHY0IGdlbmVyYXRvciB0aGFua3MgdG8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vamVkLzk4Mjg4M1xuZnVuY3Rpb24gdXVpZCh0ZW1wKSB7XG4gIHJldHVybiB0ZW1wXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZSwgbm8tbWl4ZWQtb3BlcmF0b3JzXG4gICAgICAodGVtcCBeICgoTWF0aC5yYW5kb20oKSAqIDE2KSA+PiAodGVtcCAvIDQpKSkudG9TdHJpbmcoMTYpXG4gICAgOiAoWzFlN10gKyAtMWUzICsgLTRlMyArIC04ZTMgKyAtMWUxMSkucmVwbGFjZSgvWzAxOF0vZywgdXVpZCk7XG59XG5cbmNvbnN0IHZhbGlkYXRpb25NYXAgPSBuZXcgV2Vha01hcCgpO1xuXG5mdW5jdGlvbiByZXNvbHZlS2V5KE1vZGVsLCBrZXksIGNvbmZpZykge1xuICBsZXQgZGVmYXVsdFZhbHVlID0gY29uZmlnLm1vZGVsW2tleV07XG4gIGxldCB0eXBlID0gdHlwZW9mIGNvbmZpZy5tb2RlbFtrZXldO1xuXG4gIGlmIChkZWZhdWx0VmFsdWUgaW5zdGFuY2VvZiBTdHJpbmcgfHwgZGVmYXVsdFZhbHVlIGluc3RhbmNlb2YgTnVtYmVyKSB7XG4gICAgY29uc3QgY2hlY2sgPSB2YWxpZGF0aW9uTWFwLmdldChkZWZhdWx0VmFsdWUpO1xuICAgIGlmICghY2hlY2spIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcihcbiAgICAgICAgc3RyaW5naWZ5TW9kZWwoXG4gICAgICAgICAgTW9kZWwsXG4gICAgICAgICAgYFlvdSBtdXN0IHVzZSBwcmltaXRpdmUgJHt0eXBlb2YgZGVmYXVsdFZhbHVlLnZhbHVlT2YoKX0gdmFsdWUgZm9yICcke2tleX0nIHByb3BlcnR5IG9mIHRoZSBwcm92aWRlZCBtb2RlbCBkZWZpbml0aW9uYCxcbiAgICAgICAgKSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZGVmYXVsdFZhbHVlID0gZGVmYXVsdFZhbHVlLnZhbHVlT2YoKTtcbiAgICB0eXBlID0gdHlwZW9mIGRlZmF1bHRWYWx1ZTtcblxuICAgIGNvbmZpZy5jaGVja3Muc2V0KGtleSwgY2hlY2spO1xuICB9XG5cbiAgcmV0dXJuIHsgZGVmYXVsdFZhbHVlLCB0eXBlIH07XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeU1vZGVsKE1vZGVsLCBtc2cpIHtcbiAgcmV0dXJuIGAke21zZ306XFxuXFxuJHtKU09OLnN0cmluZ2lmeShcbiAgICBNb2RlbCxcbiAgICAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gY29ubmVjdCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIDIsXG4gICl9XFxuXFxuYDtcbn1cblxuY29uc3QgXyA9IChoLCB2KSA9PiB2O1xuXG5jb25zdCByZXNvbHZlZFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbmNvbnN0IGNvbmZpZ3MgPSBuZXcgV2Vha01hcCgpO1xuZnVuY3Rpb24gc2V0dXBNb2RlbChNb2RlbCwgbmVzdGVkKSB7XG4gIGlmICh0eXBlb2YgTW9kZWwgIT09IFwib2JqZWN0XCIgfHwgTW9kZWwgPT09IG51bGwpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoYE1vZGVsIGRlZmluaXRpb24gbXVzdCBiZSBhbiBvYmplY3Q6ICR7dHlwZW9mIE1vZGVsfWApO1xuICB9XG5cbiAgbGV0IGNvbmZpZyA9IGNvbmZpZ3MuZ2V0KE1vZGVsKTtcblxuICBpZiAoY29uZmlnICYmICFjb25maWcuZW51bWVyYWJsZSkge1xuICAgIGlmIChuZXN0ZWQgJiYgIWNvbmZpZy5uZXN0ZWQpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcihcbiAgICAgICAgc3RyaW5naWZ5TW9kZWwoXG4gICAgICAgICAgTW9kZWwsXG4gICAgICAgICAgXCJQcm92aWRlZCBtb2RlbCBkZWZpbml0aW9uIGZvciBuZXN0ZWQgb2JqZWN0IGFscmVhZHkgdXNlZCBhcyBhIHJvb3QgZGVmaW5pdGlvblwiLFxuICAgICAgICApLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIW5lc3RlZCAmJiBjb25maWcubmVzdGVkKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoXG4gICAgICAgIHN0cmluZ2lmeU1vZGVsKFxuICAgICAgICAgIE1vZGVsLFxuICAgICAgICAgIFwiTmVzdGVkIG1vZGVsIGRlZmluaXRpb24gY2Fubm90IGJlIHVzZWQgb3V0c2lkZSBvZiB0aGUgcGFyZW50IGRlZmluaXRpb25cIixcbiAgICAgICAgKSxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25maWcpIHtcbiAgICBjb25zdCBzdG9yYWdlID0gTW9kZWxbY29ubmVjdF07XG4gICAgaWYgKHR5cGVvZiBzdG9yYWdlID09PSBcIm9iamVjdFwiKSBPYmplY3QuZnJlZXplKHN0b3JhZ2UpO1xuXG4gICAgbGV0IGludmFsaWRhdGVQcm9taXNlO1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0ge307XG4gICAgY29uc3QgZW51bWVyYWJsZSA9IGhhc093blByb3BlcnR5LmNhbGwoTW9kZWwsIFwiaWRcIik7XG4gICAgY29uc3QgY2hlY2tzID0gbmV3IE1hcCgpO1xuXG4gICAgY29uZmlnID0ge1xuICAgICAgbW9kZWw6IE1vZGVsLFxuICAgICAgZXh0ZXJuYWw6ICEhc3RvcmFnZSxcbiAgICAgIGVudW1lcmFibGUsXG4gICAgICBuZXN0ZWQ6ICFlbnVtZXJhYmxlICYmIG5lc3RlZCxcbiAgICAgIHBsYWNlaG9sZGVyOiBpZCA9PlxuICAgICAgICBPYmplY3QuZnJlZXplKE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShwbGFjZWhvbGRlciksIHsgaWQgfSkpLFxuICAgICAgaXNJbnN0YW5jZTogbW9kZWwgPT4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG1vZGVsKSAhPT0gcGxhY2Vob2xkZXIsXG4gICAgICBpbnZhbGlkYXRlOiAoKSA9PiB7XG4gICAgICAgIGlmICghaW52YWxpZGF0ZVByb21pc2UpIHtcbiAgICAgICAgICBpbnZhbGlkYXRlUHJvbWlzZSA9IHJlc29sdmVkUHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNhY2hlLmludmFsaWRhdGUoY29uZmlnLCBjb25maWcsIHRydWUpO1xuICAgICAgICAgICAgaW52YWxpZGF0ZVByb21pc2UgPSBudWxsO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY2hlY2tzLFxuICAgIH07XG5cbiAgICBjb25maWcuc3RvcmFnZSA9IHNldHVwU3RvcmFnZShzdG9yYWdlIHx8IG1lbW9yeVN0b3JhZ2UoY29uZmlnLCBNb2RlbCkpO1xuXG4gICAgY29uc3QgdHJhbnNmb3JtID0gT2JqZWN0LmtleXMoT2JqZWN0LmZyZWV6ZShNb2RlbCkpXG4gICAgICAuZmlsdGVyKGtleSA9PiBrZXkgIT09IGNvbm5lY3QpXG4gICAgICAubWFwKGtleSA9PiB7XG4gICAgICAgIGlmIChrZXkgIT09IFwiaWRcIikge1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwbGFjZWhvbGRlciwga2V5LCB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgICAgIGBNb2RlbCBpbnN0YW5jZSBpbiAke1xuICAgICAgICAgICAgICAgICAgZ2V0TW9kZWxTdGF0ZSh0aGlzKS5zdGF0ZVxuICAgICAgICAgICAgICAgIH0gc3RhdGUgLSB1c2Ugc3RvcmUucGVuZGluZygpLCBzdG9yZS5lcnJvcigpLCBvciBzdG9yZS5yZWFkeSgpIGd1YXJkc2AsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT09IFwiaWRcIikge1xuICAgICAgICAgIGlmIChNb2RlbFtrZXldICE9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAgIFwiVGhlICdpZCcgcHJvcGVydHkgaW4gbW9kZWwgZGVmaW5pdGlvbiBtdXN0IGJlIHNldCB0byAndHJ1ZScgb3Igbm90IGJlIGRlZmluZWRcIixcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAobW9kZWwsIGRhdGEsIGxhc3RNb2RlbCkgPT4ge1xuICAgICAgICAgICAgbGV0IGlkO1xuICAgICAgICAgICAgaWYgKGxhc3RNb2RlbCkge1xuICAgICAgICAgICAgICBpZCA9IGxhc3RNb2RlbC5pZDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBcImlkXCIpKSB7XG4gICAgICAgICAgICAgIGlkID0gU3RyaW5nKGRhdGEuaWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWQgPSB1dWlkKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2RlbCwgXCJpZFwiLCB7IHZhbHVlOiBpZCwgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBkZWZhdWx0VmFsdWUsIHR5cGUgfSA9IHJlc29sdmVLZXkoTW9kZWwsIGtleSwgY29uZmlnKTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFwiZnVuY3Rpb25cIjpcbiAgICAgICAgICAgIHJldHVybiBtb2RlbCA9PiB7XG4gICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2RlbCwga2V5LCB7XG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlLmdldCh0aGlzLCBrZXksIGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIGNhc2UgXCJvYmplY3RcIjoge1xuICAgICAgICAgICAgaWYgKGRlZmF1bHRWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAgICAgYFRoZSB2YWx1ZSBmb3IgdGhlICcke2tleX0nIG11c3QgYmUgYW4gb2JqZWN0IGluc3RhbmNlOiAke2RlZmF1bHRWYWx1ZX1gLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShkZWZhdWx0VmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAoaXNBcnJheSkge1xuICAgICAgICAgICAgICBjb25zdCBuZXN0ZWRUeXBlID0gdHlwZW9mIGRlZmF1bHRWYWx1ZVswXTtcblxuICAgICAgICAgICAgICBpZiAobmVzdGVkVHlwZSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IENvbnN0cnVjdG9yID0gZ2V0VHlwZUNvbnN0cnVjdG9yKG5lc3RlZFR5cGUsIGtleSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdEFycmF5ID0gT2JqZWN0LmZyZWV6ZShcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZS5tYXAoQ29uc3RydWN0b3IpLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChtb2RlbCwgZGF0YSwgbGFzdE1vZGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgYFRoZSB2YWx1ZSBmb3IgJyR7a2V5fScgcHJvcGVydHkgbXVzdCBiZSBhbiBhcnJheTogJHt0eXBlb2YgZGF0YVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgICAgICAgICBdfWAsXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtb2RlbFtrZXldID0gT2JqZWN0LmZyZWV6ZShkYXRhW2tleV0ubWFwKENvbnN0cnVjdG9yKSk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxhc3RNb2RlbCAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGxhc3RNb2RlbCwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBtb2RlbFtrZXldID0gbGFzdE1vZGVsW2tleV07XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtb2RlbFtrZXldID0gZGVmYXVsdEFycmF5O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb25zdCBsb2NhbENvbmZpZyA9IGJvb3RzdHJhcChkZWZhdWx0VmFsdWUsIHRydWUpO1xuXG4gICAgICAgICAgICAgIGlmIChsb2NhbENvbmZpZy5lbnVtZXJhYmxlICYmIGRlZmF1bHRWYWx1ZVsxXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5lc3RlZE9wdGlvbnMgPSBkZWZhdWx0VmFsdWVbMV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXN0ZWRPcHRpb25zICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIGBPcHRpb25zIGZvciAnJHtrZXl9JyBhcnJheSBwcm9wZXJ0eSBtdXN0IGJlIGFuIG9iamVjdCBpbnN0YW5jZTogJHt0eXBlb2YgbmVzdGVkT3B0aW9uc31gLFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5lc3RlZE9wdGlvbnMubG9vc2UpIHtcbiAgICAgICAgICAgICAgICAgIGNvbmZpZy5jb250ZXh0cyA9IGNvbmZpZy5jb250ZXh0cyB8fCBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgICBjb25maWcuY29udGV4dHMuYWRkKGJvb3RzdHJhcChkZWZhdWx0VmFsdWVbMF0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIChtb2RlbCwgZGF0YSwgbGFzdE1vZGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGFba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgIGBUaGUgdmFsdWUgZm9yICcke2tleX0nIHByb3BlcnR5IG11c3QgYmUgYW4gYXJyYXk6ICR7dHlwZW9mIGRhdGFbXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgICAgICAgICBdfWAsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBtb2RlbFtrZXldID0gbG9jYWxDb25maWcuY3JlYXRlKGRhdGFba2V5XSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG1vZGVsW2tleV0gPVxuICAgICAgICAgICAgICAgICAgICAobGFzdE1vZGVsICYmIGxhc3RNb2RlbFtrZXldKSB8fFxuICAgICAgICAgICAgICAgICAgICAoIWxvY2FsQ29uZmlnLmVudW1lcmFibGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICBsb2NhbENvbmZpZy5jcmVhdGUoZGVmYXVsdFZhbHVlKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBuZXN0ZWRDb25maWcgPSBib290c3RyYXAoZGVmYXVsdFZhbHVlLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChuZXN0ZWRDb25maWcuZW51bWVyYWJsZSB8fCBuZXN0ZWRDb25maWcuZXh0ZXJuYWwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChtb2RlbCwgZGF0YSwgbGFzdE1vZGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdE1vZGVsO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgbmVzdGVkRGF0YSA9IGRhdGFba2V5XTtcblxuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXN0ZWREYXRhICE9PSBcIm9iamVjdFwiIHx8IG5lc3RlZERhdGEgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5lc3RlZERhdGEgIT09IHVuZGVmaW5lZCAmJiBuZXN0ZWREYXRhICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVzdWx0TW9kZWwgPSB7IGlkOiBuZXN0ZWREYXRhIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFDb25maWcgPSBkZWZpbml0aW9ucy5nZXQobmVzdGVkRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhQ29uZmlnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFDb25maWcubW9kZWwgIT09IGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1vZGVsIGluc3RhbmNlIG11c3QgbWF0Y2ggdGhlIGRlZmluaXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdE1vZGVsID0gbmVzdGVkRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXN1bHRNb2RlbCA9IG5lc3RlZENvbmZpZy5jcmVhdGUobmVzdGVkRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgc3luYyhuZXN0ZWRDb25maWcsIHJlc3VsdE1vZGVsLmlkLCByZXN1bHRNb2RlbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0TW9kZWwgPSBsYXN0TW9kZWwgJiYgbGFzdE1vZGVsW2tleV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdE1vZGVsKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHJlc3VsdE1vZGVsLmlkO1xuICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZGVsLCBrZXksIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWNoZS5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZyh0aGlzKSA/IF8gOiAoKSA9PiBnZXQoZGVmYXVsdFZhbHVlLCBpZCksXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBtb2RlbFtrZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIChtb2RlbCwgZGF0YSwgbGFzdE1vZGVsKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBtb2RlbFtrZXldID0gbmVzdGVkQ29uZmlnLmNyZWF0ZShcbiAgICAgICAgICAgICAgICAgIGRhdGFba2V5XSxcbiAgICAgICAgICAgICAgICAgIGxhc3RNb2RlbCAmJiBsYXN0TW9kZWxba2V5XSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vZGVsW2tleV0gPSBsYXN0TW9kZWxcbiAgICAgICAgICAgICAgICAgID8gbGFzdE1vZGVsW2tleV1cbiAgICAgICAgICAgICAgICAgIDogbmVzdGVkQ29uZmlnLmNyZWF0ZSh7fSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1mYWxsdGhyb3VnaFxuICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIGNvbnN0IENvbnN0cnVjdG9yID0gZ2V0VHlwZUNvbnN0cnVjdG9yKHR5cGUsIGtleSk7XG4gICAgICAgICAgICByZXR1cm4gKG1vZGVsLCBkYXRhLCBsYXN0TW9kZWwpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSkge1xuICAgICAgICAgICAgICAgIG1vZGVsW2tleV0gPSBDb25zdHJ1Y3RvcihkYXRhW2tleV0pO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxhc3RNb2RlbCAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGxhc3RNb2RlbCwga2V5KSkge1xuICAgICAgICAgICAgICAgIG1vZGVsW2tleV0gPSBsYXN0TW9kZWxba2V5XTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb2RlbFtrZXldID0gZGVmYXVsdFZhbHVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICBjb25maWcuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGRhdGEsIGxhc3RNb2RlbCkge1xuICAgICAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiBudWxsO1xuXG4gICAgICBpZiAodHlwZW9mIGRhdGEgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKGBNb2RlbCB2YWx1ZXMgbXVzdCBiZSBhbiBvYmplY3QgaW5zdGFuY2U6ICR7ZGF0YX1gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbW9kZWwgPSB0cmFuc2Zvcm0ucmVkdWNlKChhY2MsIGZuKSA9PiB7XG4gICAgICAgIGZuKGFjYywgZGF0YSwgbGFzdE1vZGVsKTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcblxuICAgICAgZGVmaW5pdGlvbnMuc2V0KG1vZGVsLCBjb25maWcpO1xuICAgICAgc3RvcmVQb2ludGVyLnNldChtb2RlbCwgc3RvcmUpO1xuXG4gICAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShtb2RlbCk7XG4gICAgfTtcblxuICAgIE9iamVjdC5mcmVlemUocGxhY2Vob2xkZXIpO1xuXG4gICAgY29uZmlncy5zZXQoTW9kZWwsIE9iamVjdC5mcmVlemUoY29uZmlnKSk7XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufVxuXG5jb25zdCBsaXN0UGxhY2Vob2xkZXJQcm90b3R5cGUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhcbiAgQXJyYXkucHJvdG90eXBlLFxuKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gIGlmIChrZXkgPT09IFwibGVuZ3RoXCIgfHwga2V5ID09PSBcImNvbnN0cnVjdG9yXCIpIHJldHVybiBhY2M7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFjYywga2V5LCB7XG4gICAgZ2V0KCkge1xuICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgIGBNb2RlbCBsaXN0IGluc3RhbmNlIGluICR7XG4gICAgICAgICAgZ2V0TW9kZWxTdGF0ZSh0aGlzKS5zdGF0ZVxuICAgICAgICB9IHN0YXRlIC0gdXNlIHN0b3JlLnBlbmRpbmcoKSwgc3RvcmUuZXJyb3IoKSwgb3Igc3RvcmUucmVhZHkoKSBndWFyZHNgLFxuICAgICAgKTtcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIGFjYztcbn0sIFtdKTtcblxuY29uc3QgbGlzdHMgPSBuZXcgV2Vha01hcCgpO1xuZnVuY3Rpb24gc2V0dXBMaXN0TW9kZWwoTW9kZWwsIG5lc3RlZCkge1xuICBsZXQgY29uZmlnID0gbGlzdHMuZ2V0KE1vZGVsKTtcblxuICBpZiAoY29uZmlnICYmICFjb25maWcuZW51bWVyYWJsZSkge1xuICAgIGlmICghbmVzdGVkICYmIGNvbmZpZy5uZXN0ZWQpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcihcbiAgICAgICAgc3RyaW5naWZ5TW9kZWwoXG4gICAgICAgICAgTW9kZWwsXG4gICAgICAgICAgXCJOZXN0ZWQgbW9kZWwgZGVmaW5pdGlvbiBjYW5ub3QgYmUgdXNlZCBvdXRzaWRlIG9mIHRoZSBwYXJlbnQgZGVmaW5pdGlvblwiLFxuICAgICAgICApLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmZpZykge1xuICAgIGNvbnN0IG1vZGVsQ29uZmlnID0gc2V0dXBNb2RlbChNb2RlbCk7XG5cbiAgICBjb25zdCBjb250ZXh0cyA9IG5ldyBTZXQoKTtcbiAgICBjb250ZXh0cy5hZGQobW9kZWxDb25maWcpO1xuXG4gICAgaWYgKCFuZXN0ZWQpIHtcbiAgICAgIGlmICghbW9kZWxDb25maWcuZW51bWVyYWJsZSkge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoXG4gICAgICAgICAgc3RyaW5naWZ5TW9kZWwoXG4gICAgICAgICAgICBNb2RlbCxcbiAgICAgICAgICAgIFwiUHJvdmlkZWQgbW9kZWwgZGVmaW5pdGlvbiBkb2VzIG5vdCBzdXBwb3J0IGxpc3RpbmcgKGl0IG11c3QgYmUgZW51bWVyYWJsZSAtIHNldCBgaWRgIHByb3BlcnR5IHRvIGB0cnVlYClcIixcbiAgICAgICAgICApLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKCFtb2RlbENvbmZpZy5zdG9yYWdlLmxpc3QpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKFxuICAgICAgICAgIHN0cmluZ2lmeU1vZGVsKFxuICAgICAgICAgICAgTW9kZWwsXG4gICAgICAgICAgICBcIlByb3ZpZGVkIG1vZGVsIGRlZmluaXRpb24gc3RvcmFnZSBkb2VzIG5vdCBzdXBwb3J0IGBsaXN0YCBhY3Rpb25cIixcbiAgICAgICAgICApLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbmZpZyA9IHtcbiAgICAgIGxpc3Q6IHRydWUsXG4gICAgICBuZXN0ZWQ6ICFtb2RlbENvbmZpZy5lbnVtZXJhYmxlICYmIG5lc3RlZCxcbiAgICAgIG1vZGVsOiBNb2RlbCxcbiAgICAgIGNvbnRleHRzLFxuICAgICAgZW51bWVyYWJsZTogbW9kZWxDb25maWcuZW51bWVyYWJsZSxcbiAgICAgIHN0b3JhZ2U6IHNldHVwU3RvcmFnZSh7XG4gICAgICAgIGNhY2hlOiBtb2RlbENvbmZpZy5zdG9yYWdlLmNhY2hlLFxuICAgICAgICBnZXQ6XG4gICAgICAgICAgIW5lc3RlZCAmJlxuICAgICAgICAgIChpZCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbW9kZWxDb25maWcuc3RvcmFnZS5saXN0KGlkKTtcbiAgICAgICAgICB9KSxcbiAgICAgIH0pLFxuICAgICAgcGxhY2Vob2xkZXI6ICgpID0+IE9iamVjdC5mcmVlemUoT2JqZWN0LmNyZWF0ZShsaXN0UGxhY2Vob2xkZXJQcm90b3R5cGUpKSxcbiAgICAgIGlzSW5zdGFuY2U6IG1vZGVsID0+XG4gICAgICAgIE9iamVjdC5nZXRQcm90b3R5cGVPZihtb2RlbCkgIT09IGxpc3RQbGFjZWhvbGRlclByb3RvdHlwZSxcbiAgICAgIGNyZWF0ZShpdGVtcykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBpdGVtcy5yZWR1Y2UoKGFjYywgZGF0YSkgPT4ge1xuICAgICAgICAgIGxldCBpZCA9IGRhdGE7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiICYmIGRhdGEgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlkID0gZGF0YS5pZDtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFDb25maWcgPSBkZWZpbml0aW9ucy5nZXQoZGF0YSk7XG4gICAgICAgICAgICBsZXQgbW9kZWwgPSBkYXRhO1xuICAgICAgICAgICAgaWYgKGRhdGFDb25maWcpIHtcbiAgICAgICAgICAgICAgaWYgKGRhdGFDb25maWcubW9kZWwgIT09IE1vZGVsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiTW9kZWwgaW5zdGFuY2UgbXVzdCBtYXRjaCB0aGUgZGVmaW5pdGlvblwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbW9kZWwgPSBtb2RlbENvbmZpZy5jcmVhdGUoZGF0YSk7XG4gICAgICAgICAgICAgIGlmIChtb2RlbENvbmZpZy5lbnVtZXJhYmxlKSB7XG4gICAgICAgICAgICAgICAgaWQgPSBtb2RlbC5pZDtcbiAgICAgICAgICAgICAgICBzeW5jKG1vZGVsQ29uZmlnLCBpZCwgbW9kZWwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW1vZGVsQ29uZmlnLmVudW1lcmFibGUpIHtcbiAgICAgICAgICAgICAgYWNjLnB1c2gobW9kZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoIW1vZGVsQ29uZmlnLmVudW1lcmFibGUpIHtcbiAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcihgTW9kZWwgaW5zdGFuY2UgbXVzdCBiZSBhbiBvYmplY3Q6ICR7dHlwZW9mIGRhdGF9YCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChtb2RlbENvbmZpZy5lbnVtZXJhYmxlKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBhY2MubGVuZ3RoO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFjYywga2V5LCB7XG4gICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FjaGUuZ2V0KFxuICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgIHBlbmRpbmcodGhpcykgPyBfIDogKCkgPT4gZ2V0KE1vZGVsLCBpZCksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCBbXSk7XG5cbiAgICAgICAgZGVmaW5pdGlvbnMuc2V0KHJlc3VsdCwgY29uZmlnKTtcbiAgICAgICAgc3RvcmVQb2ludGVyLnNldChyZXN1bHQsIHN0b3JlKTtcblxuICAgICAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShyZXN1bHQpO1xuICAgICAgfSxcbiAgICB9O1xuXG4gICAgbGlzdHMuc2V0KE1vZGVsLCBPYmplY3QuZnJlZXplKGNvbmZpZykpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVRpbWVzdGFtcChoLCB2KSB7XG4gIHJldHVybiB2IHx8IGdldEN1cnJlbnRUaW1lc3RhbXAoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5SWQoaWQpIHtcbiAgc3dpdGNoICh0eXBlb2YgaWQpIHtcbiAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgIE9iamVjdC5rZXlzKGlkKVxuICAgICAgICAgIC5zb3J0KClcbiAgICAgICAgICAucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpZFtrZXldID09PSBcIm9iamVjdFwiICYmIGlkW2tleV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFxuICAgICAgICAgICAgICAgIGBZb3UgbXVzdCB1c2UgcHJpbWl0aXZlIHZhbHVlIGZvciAnJHtrZXl9JyBrZXk6ICR7dHlwZW9mIGlkW1xuICAgICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICAgICAgXX1gLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWNjW2tleV0gPSBpZFtrZXldO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LCB7fSksXG4gICAgICApO1xuICAgIGNhc2UgXCJ1bmRlZmluZWRcIjpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBTdHJpbmcoaWQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcEVycm9yKG1vZGVsLCBlcnIsIHN1cHByZXNzTG9nKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgc3VwcHJlc3NMb2cgIT09IGZhbHNlKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cblxuICByZXR1cm4gc2V0TW9kZWxTdGF0ZShtb2RlbCwgXCJlcnJvclwiLCBlcnIpO1xufVxuXG5mdW5jdGlvbiBnZXQoTW9kZWwsIGlkKSB7XG4gIGNvbnN0IGNvbmZpZyA9IGJvb3RzdHJhcChNb2RlbCk7XG4gIGxldCBzdHJpbmdJZDtcblxuICBpZiAoIWNvbmZpZy5zdG9yYWdlLmdldCkge1xuICAgIHRocm93IFR5cGVFcnJvcihcbiAgICAgIHN0cmluZ2lmeU1vZGVsKFxuICAgICAgICBNb2RlbCxcbiAgICAgICAgXCJQcm92aWRlZCBtb2RlbCBkZWZpbml0aW9uIGRvZXMgbm90IHN1cHBvcnQgJ2dldCcgbWV0aG9kXCIsXG4gICAgICApLFxuICAgICk7XG4gIH1cblxuICBpZiAoY29uZmlnLmVudW1lcmFibGUpIHtcbiAgICBzdHJpbmdJZCA9IHN0cmluZ2lmeUlkKGlkKTtcblxuICAgIGlmICghY29uZmlnLmxpc3QgJiYgIXN0cmluZ0lkKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoXG4gICAgICAgIHN0cmluZ2lmeU1vZGVsKFxuICAgICAgICAgIE1vZGVsLFxuICAgICAgICAgIGBQcm92aWRlZCBtb2RlbCBkZWZpbml0aW9uIHJlcXVpcmVzIG5vbi1lbXB0eSBpZDogXCIke3N0cmluZ0lkfVwiYCxcbiAgICAgICAgKSxcbiAgICAgICk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlkICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoXG4gICAgICBzdHJpbmdpZnlNb2RlbChNb2RlbCwgXCJQcm92aWRlZCBtb2RlbCBkZWZpbml0aW9uIGRvZXMgbm90IHN1cHBvcnQgaWRcIiksXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZS5nZXQoXG4gICAgY29uZmlnLFxuICAgIHN0cmluZ0lkLFxuICAgIChoLCBjYWNoZWRNb2RlbCkgPT4ge1xuICAgICAgaWYgKGNhY2hlZE1vZGVsICYmIHBlbmRpbmcoY2FjaGVkTW9kZWwpKSByZXR1cm4gY2FjaGVkTW9kZWw7XG5cbiAgICAgIGxldCB2YWxpZENvbnRleHRzID0gdHJ1ZTtcbiAgICAgIGlmIChjb25maWcuY29udGV4dHMpIHtcbiAgICAgICAgY29uZmlnLmNvbnRleHRzLmZvckVhY2goY29udGV4dCA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgY2FjaGUuZ2V0KGNvbnRleHQsIGNvbnRleHQsIHJlc29sdmVUaW1lc3RhbXApID09PVxuICAgICAgICAgICAgZ2V0Q3VycmVudFRpbWVzdGFtcCgpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB2YWxpZENvbnRleHRzID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICB2YWxpZENvbnRleHRzICYmXG4gICAgICAgIGNhY2hlZE1vZGVsICYmXG4gICAgICAgIChjb25maWcuc3RvcmFnZS5jYWNoZSA9PT0gdHJ1ZSB8fCBjb25maWcuc3RvcmFnZS52YWxpZGF0ZShjYWNoZWRNb2RlbCkpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZE1vZGVsO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gY29uZmlnLnN0b3JhZ2UuZ2V0KGlkKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCAhPT0gXCJvYmplY3RcIiB8fCByZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICAgIGBNb2RlbCBpbnN0YW5jZSAke1xuICAgICAgICAgICAgICBzdHJpbmdJZCAhPT0gdW5kZWZpbmVkID8gYHdpdGggJyR7c3RyaW5nSWR9JyBpZGAgOiBcIlwiXG4gICAgICAgICAgICB9IGRvZXMgbm90IGV4aXN0OiAke3Jlc3VsdH1gLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSAhPT0gXCJvYmplY3RcIiB8fCBkYXRhID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgICAgICAgICBgTW9kZWwgaW5zdGFuY2UgJHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nSWQgIT09IHVuZGVmaW5lZCA/IGB3aXRoICcke3N0cmluZ0lkfScgaWRgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgfSBkb2VzIG5vdCBleGlzdDogJHtyZXN1bHR9YCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHN5bmMoXG4gICAgICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgICAgICAgIHN0cmluZ0lkLFxuICAgICAgICAgICAgICAgIGNvbmZpZy5jcmVhdGUoc3RyaW5nSWQgPyB7IC4uLmRhdGEsIGlkOiBzdHJpbmdJZCB9IDogZGF0YSksXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gc3luYyhcbiAgICAgICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgICAgICAgc3RyaW5nSWQsXG4gICAgICAgICAgICAgICAgbWFwRXJyb3IoY2FjaGVkTW9kZWwgfHwgY29uZmlnLnBsYWNlaG9sZGVyKHN0cmluZ0lkKSwgZSksXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiBzZXRNb2RlbFN0YXRlKFxuICAgICAgICAgICAgY2FjaGVkTW9kZWwgfHwgY29uZmlnLnBsYWNlaG9sZGVyKHN0cmluZ0lkKSxcbiAgICAgICAgICAgIFwicGVuZGluZ1wiLFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FjaGVkTW9kZWwpIGRlZmluaXRpb25zLnNldChjYWNoZWRNb2RlbCwgbnVsbCk7XG4gICAgICAgIHJldHVybiBzZXRUaW1lc3RhbXAoXG4gICAgICAgICAgY29uZmlnLmNyZWF0ZShzdHJpbmdJZCA/IHsgLi4ucmVzdWx0LCBpZDogc3RyaW5nSWQgfSA6IHJlc3VsdCksXG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBzZXRUaW1lc3RhbXAoXG4gICAgICAgICAgbWFwRXJyb3IoY2FjaGVkTW9kZWwgfHwgY29uZmlnLnBsYWNlaG9sZGVyKHN0cmluZ0lkKSwgZSksXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjb25maWcuc3RvcmFnZS52YWxpZGF0ZSxcbiAgKTtcbn1cblxuY29uc3QgZHJhZnRNYXAgPSBuZXcgV2Vha01hcCgpO1xuXG5mdW5jdGlvbiBnZXRWYWxpZGF0aW9uRXJyb3IoZXJyb3JzKSB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhlcnJvcnMpO1xuICBjb25zdCBlID0gRXJyb3IoXG4gICAgYE1vZGVsIHZhbGlkYXRpb24gZmFpbGVkICgke2tleXMuam9pbihcbiAgICAgIFwiLCBcIixcbiAgICApfSkgLSByZWFkIHRoZSBkZXRhaWxzIGZyb20gJ2Vycm9ycycgcHJvcGVydHlgLFxuICApO1xuXG4gIGUuZXJyb3JzID0gZXJyb3JzO1xuXG4gIHJldHVybiBlO1xufVxuXG5mdW5jdGlvbiBzZXQobW9kZWwsIHZhbHVlcyA9IHt9KSB7XG4gIGxldCBjb25maWcgPSBkZWZpbml0aW9ucy5nZXQobW9kZWwpO1xuICBjb25zdCBpc0luc3RhbmNlID0gISFjb25maWc7XG5cbiAgaWYgKGNvbmZpZyA9PT0gbnVsbCkge1xuICAgIHRocm93IEVycm9yKFxuICAgICAgXCJQcm92aWRlZCBtb2RlbCBpbnN0YW5jZSBoYXMgZXhwaXJlZC4gSGF2ZW4ndCB5b3UgdXNlZCBzdGFsZSB2YWx1ZT9cIixcbiAgICApO1xuICB9XG5cbiAgaWYgKCFjb25maWcpIGNvbmZpZyA9IGJvb3RzdHJhcChtb2RlbCk7XG5cbiAgaWYgKGNvbmZpZy5uZXN0ZWQpIHtcbiAgICB0aHJvdyBzdHJpbmdpZnlNb2RlbChcbiAgICAgIGNvbmZpZy5tb2RlbCxcbiAgICAgIFR5cGVFcnJvcihcbiAgICAgICAgXCJTZXR0aW5nIHByb3ZpZGVkIG5lc3RlZCBtb2RlbCBpbnN0YW5jZSBpcyBub3Qgc3VwcG9ydGVkLCB1c2UgdGhlIHJvb3QgbW9kZWwgaW5zdGFuY2VcIixcbiAgICAgICksXG4gICAgKTtcbiAgfVxuXG4gIGlmIChjb25maWcubGlzdCkge1xuICAgIHRocm93IFR5cGVFcnJvcihcIkxpc3RpbmcgbW9kZWwgZGVmaW5pdGlvbiBkb2VzIG5vdCBzdXBwb3J0ICdzZXQnIG1ldGhvZFwiKTtcbiAgfVxuXG4gIGlmICghY29uZmlnLnN0b3JhZ2Uuc2V0KSB7XG4gICAgdGhyb3cgc3RyaW5naWZ5TW9kZWwoXG4gICAgICBjb25maWcubW9kZWwsXG4gICAgICBUeXBlRXJyb3IoXG4gICAgICAgIFwiUHJvdmlkZWQgbW9kZWwgZGVmaW5pdGlvbiBzdG9yYWdlIGRvZXMgbm90IHN1cHBvcnQgJ3NldCcgbWV0aG9kXCIsXG4gICAgICApLFxuICAgICk7XG4gIH1cblxuICBpZiAoaXNJbnN0YW5jZSAmJiBwZW5kaW5nKG1vZGVsKSkge1xuICAgIHRocm93IEVycm9yKFwiUHJvdmlkZWQgbW9kZWwgaW5zdGFuY2UgaXMgaW4gcGVuZGluZyBzdGF0ZVwiKTtcbiAgfVxuXG4gIGxldCBpZDtcbiAgY29uc3Qgc2V0U3RhdGUgPSAoc3RhdGUsIHZhbHVlKSA9PiB7XG4gICAgaWYgKGlzSW5zdGFuY2UpIHtcbiAgICAgIHNldE1vZGVsU3RhdGUobW9kZWwsIHN0YXRlLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVudHJ5ID0gY2FjaGUuZ2V0RW50cnkoY29uZmlnLCBpZCk7XG4gICAgICBpZiAoZW50cnkudmFsdWUpIHtcbiAgICAgICAgc2V0TW9kZWxTdGF0ZShlbnRyeS52YWx1ZSwgc3RhdGUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdHJ5IHtcbiAgICBpZiAoXG4gICAgICBjb25maWcuZW51bWVyYWJsZSAmJlxuICAgICAgIWlzSW5zdGFuY2UgJiZcbiAgICAgICghdmFsdWVzIHx8IHR5cGVvZiB2YWx1ZXMgIT09IFwib2JqZWN0XCIpXG4gICAgKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoYFZhbHVlcyBtdXN0IGJlIGFuIG9iamVjdCBpbnN0YW5jZTogJHt2YWx1ZXN9YCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlcyAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlcywgXCJpZFwiKSkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKGBWYWx1ZXMgbXVzdCBub3QgY29udGFpbiAnaWQnIHByb3BlcnR5OiAke3ZhbHVlcy5pZH1gKTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2NhbE1vZGVsID0gY29uZmlnLmNyZWF0ZSh2YWx1ZXMsIGlzSW5zdGFuY2UgPyBtb2RlbCA6IHVuZGVmaW5lZCk7XG4gICAgY29uc3Qga2V5cyA9IHZhbHVlcyA/IE9iamVjdC5rZXlzKHZhbHVlcykgOiBbXTtcbiAgICBjb25zdCBpc0RyYWZ0ID0gZHJhZnRNYXAuZ2V0KGNvbmZpZyk7XG4gICAgY29uc3QgZXJyb3JzID0ge307XG4gICAgY29uc3QgbGFzdEVycm9yID0gaXNJbnN0YW5jZSAmJiBpc0RyYWZ0ICYmIGVycm9yKG1vZGVsKTtcblxuICAgIGxldCBoYXNFcnJvcnMgPSBmYWxzZTtcblxuICAgIGlmIChsb2NhbE1vZGVsKSB7XG4gICAgICBjb25maWcuY2hlY2tzLmZvckVhY2goKGZuLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKGtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGlmIChsYXN0RXJyb3IgJiYgbGFzdEVycm9yLmVycm9ycyAmJiBsYXN0RXJyb3IuZXJyb3JzW2tleV0pIHtcbiAgICAgICAgICAgIGhhc0Vycm9ycyA9IHRydWU7XG4gICAgICAgICAgICBlcnJvcnNba2V5XSA9IGxhc3RFcnJvci5lcnJvcnNba2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG4gICAgICAgICAgaWYgKGlzRHJhZnQgJiYgbG9jYWxNb2RlbFtrZXldID09IGNvbmZpZy5tb2RlbFtrZXldKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNoZWNrUmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNoZWNrUmVzdWx0ID0gZm4obG9jYWxNb2RlbFtrZXldLCBrZXksIGxvY2FsTW9kZWwpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY2hlY2tSZXN1bHQgPSBlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoZWNrUmVzdWx0ICE9PSB0cnVlICYmIGNoZWNrUmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBoYXNFcnJvcnMgPSB0cnVlO1xuICAgICAgICAgIGVycm9yc1trZXldID0gY2hlY2tSZXN1bHQgfHwgdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChoYXNFcnJvcnMgJiYgIWlzRHJhZnQpIHtcbiAgICAgICAgdGhyb3cgZ2V0VmFsaWRhdGlvbkVycm9yKGVycm9ycyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWQgPSBsb2NhbE1vZGVsID8gbG9jYWxNb2RlbC5pZCA6IG1vZGVsLmlkO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gUHJvbWlzZS5yZXNvbHZlKFxuICAgICAgY29uZmlnLnN0b3JhZ2Uuc2V0KGlzSW5zdGFuY2UgPyBpZCA6IHVuZGVmaW5lZCwgbG9jYWxNb2RlbCwga2V5cyksXG4gICAgKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdE1vZGVsID1cbiAgICAgICAgICBkYXRhID09PSBsb2NhbE1vZGVsID8gbG9jYWxNb2RlbCA6IGNvbmZpZy5jcmVhdGUoZGF0YSk7XG5cbiAgICAgICAgaWYgKGlzSW5zdGFuY2UgJiYgcmVzdWx0TW9kZWwgJiYgaWQgIT09IHJlc3VsdE1vZGVsLmlkKSB7XG4gICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFxuICAgICAgICAgICAgYExvY2FsIGFuZCBzdG9yYWdlIGRhdGEgbXVzdCBoYXZlIHRoZSBzYW1lIGlkOiAnJHtpZH0nLCAnJHtyZXN1bHRNb2RlbC5pZH0nYCxcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0SWQgPSByZXN1bHRNb2RlbCA/IHJlc3VsdE1vZGVsLmlkIDogaWQ7XG5cbiAgICAgICAgaWYgKGhhc0Vycm9ycyAmJiBpc0RyYWZ0KSB7XG4gICAgICAgICAgc2V0TW9kZWxTdGF0ZShyZXN1bHRNb2RlbCwgXCJlcnJvclwiLCBnZXRWYWxpZGF0aW9uRXJyb3IoZXJyb3JzKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3luYyhcbiAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgcmVzdWx0SWQsXG4gICAgICAgICAgcmVzdWx0TW9kZWwgfHxcbiAgICAgICAgICAgIG1hcEVycm9yKFxuICAgICAgICAgICAgICBjb25maWcucGxhY2Vob2xkZXIocmVzdWx0SWQpLFxuICAgICAgICAgICAgICBFcnJvcihcbiAgICAgICAgICAgICAgICBgTW9kZWwgaW5zdGFuY2UgJHtcbiAgICAgICAgICAgICAgICAgIGlkICE9PSB1bmRlZmluZWQgPyBgd2l0aCAnJHtpZH0nIGlkYCA6IFwiXCJcbiAgICAgICAgICAgICAgICB9IGRvZXMgbm90IGV4aXN0OiAke3Jlc3VsdE1vZGVsfWAsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICApO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBlcnIgPSBlcnIgIT09IHVuZGVmaW5lZCA/IGVyciA6IEVycm9yKFwiVW5kZWZpbmVkIGVycm9yXCIpO1xuICAgICAgICBzZXRTdGF0ZShcImVycm9yXCIsIGVycik7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH0pO1xuXG4gICAgc2V0U3RhdGUoXCJwZW5kaW5nXCIsIHJlc3VsdCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgc2V0U3RhdGUoXCJlcnJvclwiLCBlKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXIobW9kZWwsIGNsZWFyVmFsdWUgPSB0cnVlKSB7XG4gIGlmICh0eXBlb2YgbW9kZWwgIT09IFwib2JqZWN0XCIgfHwgbW9kZWwgPT09IG51bGwpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoXG4gICAgICBgVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBtb2RlbCBpbnN0YW5jZSBvciBhIG1vZGVsIGRlZmluaXRpb246ICR7bW9kZWx9YCxcbiAgICApO1xuICB9XG5cbiAgY29uc3QgY29uZmlnID0gZGVmaW5pdGlvbnMuZ2V0KG1vZGVsKTtcblxuICBpZiAoY29uZmlnID09PSBudWxsKSB7XG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICBcIlByb3ZpZGVkIG1vZGVsIGluc3RhbmNlIGhhcyBleHBpcmVkLiBIYXZlbid0IHlvdSB1c2VkIHN0YWxlIHZhbHVlIGZyb20gdGhlIG91dGVyIHNjb3BlP1wiLFxuICAgICk7XG4gIH1cblxuICBpZiAoY29uZmlnKSB7XG4gICAgY2FjaGUuaW52YWxpZGF0ZShjb25maWcsIG1vZGVsLmlkLCBjbGVhclZhbHVlLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWNvbmZpZ3MuZ2V0KG1vZGVsKSAmJiAhbGlzdHMuZ2V0KG1vZGVsWzBdKSkge1xuICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgIFwiTW9kZWwgZGVmaW5pdGlvbiBtdXN0IGJlIHVzZWQgYmVmb3JlIC0gcGFzc2VkIGFyZ3VtZW50IGlzIHByb2JhYmx5IG5vdCBhIG1vZGVsIGRlZmluaXRpb25cIixcbiAgICAgICk7XG4gICAgfVxuICAgIGNhY2hlLmludmFsaWRhdGVBbGwoYm9vdHN0cmFwKG1vZGVsKSwgY2xlYXJWYWx1ZSwgdHJ1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGVuZGluZyhtb2RlbCkge1xuICBpZiAobW9kZWwgPT09IG51bGwgfHwgdHlwZW9mIG1vZGVsICE9PSBcIm9iamVjdFwiKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IHsgc3RhdGUsIHZhbHVlIH0gPSBnZXRNb2RlbFN0YXRlKG1vZGVsKTtcbiAgcmV0dXJuIHN0YXRlID09PSBcInBlbmRpbmdcIiAmJiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZXJyb3IobW9kZWwsIHByb3BlcnR5KSB7XG4gIGlmIChtb2RlbCA9PT0gbnVsbCB8fCB0eXBlb2YgbW9kZWwgIT09IFwib2JqZWN0XCIpIHJldHVybiBmYWxzZTtcbiAgY29uc3QgeyBzdGF0ZSwgdmFsdWUgfSA9IGdldE1vZGVsU3RhdGUobW9kZWwpO1xuICBjb25zdCByZXN1bHQgPSBzdGF0ZSA9PT0gXCJlcnJvclwiICYmIHZhbHVlO1xuXG4gIGlmIChyZXN1bHQgJiYgcHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiByZXN1bHQuZXJyb3JzICYmIHJlc3VsdC5lcnJvcnNbcHJvcGVydHldO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcmVhZHkobW9kZWwpIHtcbiAgaWYgKG1vZGVsID09PSBudWxsIHx8IHR5cGVvZiBtb2RlbCAhPT0gXCJvYmplY3RcIikgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBjb25maWcgPSBkZWZpbml0aW9ucy5nZXQobW9kZWwpO1xuICByZXR1cm4gISEoY29uZmlnICYmIGNvbmZpZy5pc0luc3RhbmNlKG1vZGVsKSk7XG59XG5cbmZ1bmN0aW9uIG1hcFZhbHVlV2l0aFN0YXRlKGxhc3RWYWx1ZSwgbmV4dFZhbHVlKSB7XG4gIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5mcmVlemUoXG4gICAgT2JqZWN0LmtleXMobGFzdFZhbHVlKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYWNjLCBrZXksIHtcbiAgICAgICAgZ2V0OiAoKSA9PiBsYXN0VmFsdWVba2V5XSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBPYmplY3QuY3JlYXRlKGxhc3RWYWx1ZSkpLFxuICApO1xuXG4gIGRlZmluaXRpb25zLnNldChyZXN1bHQsIGRlZmluaXRpb25zLmdldChsYXN0VmFsdWUpKTtcblxuICBjb25zdCB7IHN0YXRlLCB2YWx1ZSB9ID0gZ2V0TW9kZWxTdGF0ZShuZXh0VmFsdWUpO1xuICByZXR1cm4gc2V0TW9kZWxTdGF0ZShyZXN1bHQsIHN0YXRlLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlc0Zyb21Nb2RlbChtb2RlbCkge1xuICBjb25zdCB2YWx1ZXMgPSB7IC4uLm1vZGVsIH07XG4gIGRlbGV0ZSB2YWx1ZXMuaWQ7XG4gIHJldHVybiB2YWx1ZXM7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdChkcmFmdCkge1xuICBjb25zdCBjb25maWcgPSBkZWZpbml0aW9ucy5nZXQoZHJhZnQpO1xuICBpZiAoIWNvbmZpZyB8fCAhZHJhZnRNYXAuaGFzKGNvbmZpZykpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoYFByb3ZpZGVkIG1vZGVsIGluc3RhbmNlIGlzIG5vdCBhIGRyYWZ0OiAke2RyYWZ0fWApO1xuICB9XG5cbiAgaWYgKHBlbmRpbmcoZHJhZnQpKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJNb2RlbCBkcmFmdCBpbiBwZW5kaW5nIHN0YXRlXCIpO1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IGRyYWZ0TWFwLmdldChjb25maWcpO1xuICBsZXQgcmVzdWx0O1xuXG4gIGlmICghb3B0aW9ucy5pZCkge1xuICAgIHJlc3VsdCA9IHN0b3JlLnNldChvcHRpb25zLm1vZGVsLCBnZXRWYWx1ZXNGcm9tTW9kZWwoZHJhZnQpKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtb2RlbCA9IHN0b3JlLmdldChvcHRpb25zLm1vZGVsLCBkcmFmdC5pZCk7XG4gICAgcmVzdWx0ID0gUHJvbWlzZS5yZXNvbHZlKHBlbmRpbmcobW9kZWwpIHx8IG1vZGVsKS50aGVuKHJlc29sdmVkTW9kZWwgPT5cbiAgICAgIHN0b3JlLnNldChyZXNvbHZlZE1vZGVsLCBnZXRWYWx1ZXNGcm9tTW9kZWwoZHJhZnQpKSxcbiAgICApO1xuICB9XG5cbiAgcmVzdWx0ID0gcmVzdWx0XG4gICAgLnRoZW4ocmVzdWx0TW9kZWwgPT4ge1xuICAgICAgc2V0TW9kZWxTdGF0ZShkcmFmdCwgXCJyZWFkeVwiKTtcbiAgICAgIHJldHVybiBzdG9yZVxuICAgICAgICAuc2V0KGRyYWZ0LCBnZXRWYWx1ZXNGcm9tTW9kZWwocmVzdWx0TW9kZWwpKVxuICAgICAgICAudGhlbigoKSA9PiByZXN1bHRNb2RlbCk7XG4gICAgfSlcbiAgICAuY2F0Y2goZSA9PiB7XG4gICAgICBzZXRNb2RlbFN0YXRlKGRyYWZ0LCBcImVycm9yXCIsIGUpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgIH0pO1xuXG4gIHNldE1vZGVsU3RhdGUoZHJhZnQsIFwicGVuZGluZ1wiLCByZXN1bHQpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHJlcXVpcmVkKHZhbHVlLCBrZXkpIHtcbiAgcmV0dXJuICEhdmFsdWUgfHwgYCR7a2V5fSBpcyByZXF1aXJlZGA7XG59XG5cbmZ1bmN0aW9uIHZhbHVlV2l0aFZhbGlkYXRpb24oXG4gIGRlZmF1bHRWYWx1ZSxcbiAgdmFsaWRhdGUgPSByZXF1aXJlZCxcbiAgZXJyb3JNZXNzYWdlID0gXCJcIixcbikge1xuICBzd2l0Y2ggKHR5cGVvZiBkZWZhdWx0VmFsdWUpIHtcbiAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LXdyYXBwZXJzXG4gICAgICBkZWZhdWx0VmFsdWUgPSBuZXcgU3RyaW5nKGRlZmF1bHRWYWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LXdyYXBwZXJzXG4gICAgICBkZWZhdWx0VmFsdWUgPSBuZXcgTnVtYmVyKGRlZmF1bHRWYWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgVHlwZUVycm9yKFxuICAgICAgICBgRGVmYXVsdCB2YWx1ZSBtdXN0IGJlIGEgc3RyaW5nIG9yIGEgbnVtYmVyOiAke3R5cGVvZiBkZWZhdWx0VmFsdWV9YCxcbiAgICAgICk7XG4gIH1cblxuICBsZXQgZm47XG4gIGlmICh2YWxpZGF0ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIGZuID0gdmFsdWUgPT4gdmFsaWRhdGUudGVzdCh2YWx1ZSkgfHwgZXJyb3JNZXNzYWdlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWxpZGF0ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm4gPSAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdmFsaWRhdGUoLi4uYXJncyk7XG4gICAgICByZXR1cm4gcmVzdWx0ICE9PSB0cnVlICYmIHJlc3VsdCAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gcmVzdWx0IHx8IGVycm9yTWVzc2FnZVxuICAgICAgICA6IHJlc3VsdDtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHRocm93IFR5cGVFcnJvcihcbiAgICAgIGBUaGUgc2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYSBSZWdFeHAgaW5zdGFuY2Ugb3IgYSBmdW5jdGlvbjogJHt0eXBlb2YgdmFsaWRhdGV9YCxcbiAgICApO1xuICB9XG5cbiAgdmFsaWRhdGlvbk1hcC5zZXQoZGVmYXVsdFZhbHVlLCBmbik7XG4gIHJldHVybiBkZWZhdWx0VmFsdWU7XG59XG5cbmZ1bmN0aW9uIHN0b3JlKE1vZGVsLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgY29uZmlnID0gYm9vdHN0cmFwKE1vZGVsKTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09IFwib2JqZWN0XCIpIHtcbiAgICBvcHRpb25zID0geyBpZDogb3B0aW9ucyB9O1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaWQgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0aW9ucy5pZCAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29uc3QgaWQgPSBvcHRpb25zLmlkO1xuICAgIG9wdGlvbnMuaWQgPSBob3N0ID0+IGhvc3RbaWRdO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuZHJhZnQpIHtcbiAgICBpZiAoY29uZmlnLmxpc3QpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcihcbiAgICAgICAgXCJEcmFmdCBtb2RlIGlzIG5vdCBzdXBwb3J0ZWQgZm9yIGxpc3RpbmcgbW9kZWwgZGVmaW5pdGlvblwiLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBNb2RlbCA9IHtcbiAgICAgIC4uLk1vZGVsLFxuICAgICAgW3N0b3JlLmNvbm5lY3RdOiB7XG4gICAgICAgIGdldChpZCkge1xuICAgICAgICAgIGNvbnN0IG1vZGVsID0gc3RvcmUuZ2V0KGNvbmZpZy5tb2RlbCwgaWQpO1xuICAgICAgICAgIHJldHVybiByZWFkeShtb2RlbCkgPyBtb2RlbCA6IHBlbmRpbmcobW9kZWwpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQoaWQsIHZhbHVlcykge1xuICAgICAgICAgIHJldHVybiB2YWx1ZXMgPT09IG51bGwgPyB7IGlkIH0gOiB2YWx1ZXM7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBvcHRpb25zLmRyYWZ0ID0gYm9vdHN0cmFwKE1vZGVsKTtcbiAgICBkcmFmdE1hcC5zZXQob3B0aW9ucy5kcmFmdCwgeyBtb2RlbDogY29uZmlnLm1vZGVsLCBpZDogb3B0aW9ucy5pZCB9KTtcbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZU1vZGUgPSBvcHRpb25zLmRyYWZ0ICYmIGNvbmZpZy5lbnVtZXJhYmxlICYmICFvcHRpb25zLmlkO1xuXG4gIGNvbnN0IGRlc2MgPSB7XG4gICAgZ2V0OiAoaG9zdCwgbGFzdFZhbHVlKSA9PiB7XG4gICAgICBpZiAoY3JlYXRlTW9kZSAmJiAhbGFzdFZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IG9wdGlvbnMuZHJhZnQuY3JlYXRlKHt9KTtcbiAgICAgICAgc3luYyhvcHRpb25zLmRyYWZ0LCBuZXh0VmFsdWUuaWQsIG5leHRWYWx1ZSk7XG4gICAgICAgIHJldHVybiBzdG9yZS5nZXQoTW9kZWwsIG5leHRWYWx1ZS5pZCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlkID1cbiAgICAgICAgb3B0aW9ucy5kcmFmdCAmJiBsYXN0VmFsdWVcbiAgICAgICAgICA/IGxhc3RWYWx1ZS5pZFxuICAgICAgICAgIDogb3B0aW9ucy5pZCAmJiBvcHRpb25zLmlkKGhvc3QpO1xuXG4gICAgICBjb25zdCBuZXh0VmFsdWUgPSBzdG9yZS5nZXQoTW9kZWwsIGlkKTtcblxuICAgICAgaWYgKGxhc3RWYWx1ZSAmJiBuZXh0VmFsdWUgIT09IGxhc3RWYWx1ZSAmJiAhcmVhZHkobmV4dFZhbHVlKSkge1xuICAgICAgICByZXR1cm4gbWFwVmFsdWVXaXRoU3RhdGUobGFzdFZhbHVlLCBuZXh0VmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV4dFZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBjb25maWcubGlzdFxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogKGhvc3QsIHZhbHVlcywgbGFzdFZhbHVlKSA9PiB7XG4gICAgICAgICAgaWYgKCFsYXN0VmFsdWUgfHwgIXJlYWR5KGxhc3RWYWx1ZSkpIGxhc3RWYWx1ZSA9IGRlc2MuZ2V0KGhvc3QpO1xuXG4gICAgICAgICAgc3RvcmVcbiAgICAgICAgICAgIC5zZXQobGFzdFZhbHVlLCB2YWx1ZXMpXG4gICAgICAgICAgICAuY2F0Y2goLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gKCkgPT4ge30pO1xuXG4gICAgICAgICAgcmV0dXJuIGxhc3RWYWx1ZTtcbiAgICAgICAgfSxcbiAgICBjb25uZWN0OiBvcHRpb25zLmRyYWZ0ID8gKCkgPT4gKCkgPT4gY2xlYXIoTW9kZWwsIGZhbHNlKSA6IHVuZGVmaW5lZCxcbiAgfTtcblxuICByZXR1cm4gZGVzYztcbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmFzc2lnbihzdG9yZSwge1xuICAvLyBzdG9yYWdlXG4gIGNvbm5lY3QsXG5cbiAgLy8gYWN0aW9uc1xuICBnZXQsXG4gIHNldCxcbiAgY2xlYXIsXG5cbiAgLy8gZ3VhcmRzXG4gIHBlbmRpbmcsXG4gIGVycm9yLFxuICByZWFkeSxcblxuICAvLyBoZWxwZXJzXG4gIHN1Ym1pdCxcbiAgdmFsdWU6IHZhbHVlV2l0aFZhbGlkYXRpb24sXG59KTtcbiJdfQ==

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

      if (matchedEntry) {
        matchedEntry.available = false;
        entry.placeholder = matchedEntry.placeholder;

        if (entry.placeholder.previousSibling !== previousSibling) {
          movePlaceholder(entry.placeholder, previousSibling);
        }

        if (matchedEntry.value !== entry.value) {
          resolveValue(host, entry.placeholder, entry.value);
        }
      } else {
        entry.placeholder = document.createTextNode("");
        previousSibling.parentNode.insertBefore(entry.placeholder, previousSibling.nextSibling);
        resolveValue(host, entry.placeholder, entry.value);
      }

      previousSibling = getTemplateEnd(dataMap.get(entry.placeholder).endNode || entry.placeholder);
      if (index === 0) data.startNode = entry.placeholder;
      if (index === lastIndex) data.endNode = previousSibling;
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
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvYXJyYXkuanMiXSwibmFtZXMiOlsiZGF0YU1hcCIsInJlbW92ZVRlbXBsYXRlIiwiZ2V0VGVtcGxhdGVFbmQiLCJhcnJheU1hcCIsIldlYWtNYXAiLCJtb3ZlUGxhY2Vob2xkZXIiLCJ0YXJnZXQiLCJwcmV2aW91c1NpYmxpbmciLCJkYXRhIiwiZ2V0Iiwic3RhcnROb2RlIiwiZW5kTm9kZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsInByZXZOb2RlIiwibm9kZSIsIm5leHROb2RlIiwicmVzb2x2ZUFycmF5IiwiaG9zdCIsInZhbHVlIiwicmVzb2x2ZVZhbHVlIiwibGFzdEVudHJpZXMiLCJlbnRyaWVzIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWQiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJwbGFjZWhvbGRlciIsImF2YWlsYWJsZSIsInNldCIsImlkcyIsIlNldCIsImZvckVhY2giLCJlbnRyeSIsImFkZCIsImZpbHRlciIsImhhcyIsInJlbW92ZUNoaWxkIiwibGFzdEluZGV4IiwibGVuZ3RoIiwibWF0Y2hlZEVudHJ5IiwiaSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLE9BQVQsRUFBa0JDLGNBQWxCLEVBQWtDQyxjQUFsQyxRQUF3RCxhQUF4RDtBQUVBLE9BQU8sSUFBTUMsUUFBUSxHQUFHLElBQUlDLE9BQUosRUFBakI7O0FBRVAsU0FBU0MsZUFBVCxDQUF5QkMsTUFBekIsRUFBaUNDLGVBQWpDLEVBQWtEO0FBQ2hELE1BQU1DLElBQUksR0FBR1IsT0FBTyxDQUFDUyxHQUFSLENBQVlILE1BQVosQ0FBYjtBQUNBLE1BQU1JLFNBQVMsR0FBR0YsSUFBSSxDQUFDRSxTQUF2QjtBQUNBLE1BQU1DLE9BQU8sR0FBR1QsY0FBYyxDQUFDTSxJQUFJLENBQUNHLE9BQU4s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QUNOLFdBQWxCLEVBQStCckIsT0FBL0IsSUFBMEMyQixLQUFLLENBQUNOLFdBRGxCLENBQWhDO0FBSUEsUUFBSU4sS0FBSyxLQUFLLENBQWQsRUFBaUJsQixJQUFJLENBQUNFLFNBQUwsR0FBaUI0QixLQUFLLENBQUNOLFdBQXZCO0FBQ2pCLFFBQUlOLEtBQUssS0FBS2lCLFNBQWQsRUFBeUJuQyxJQUFJLENBQUNHLE9BQUwsR0FBZUosZUFBZjtBQUMxQjs7QUFFRCxNQUFJZSxXQUFKLEVBQWlCO0FBQ2ZBLElBQUFBLFdBQVcsQ0FBQ2UsT0FBWixDQUFvQixVQUFBQyxLQUFLLEVBQUk7QUFDM0IsVUFBSUEsS0FBSyxDQUFDTCxTQUFWLEVBQXFCO0FBQ25CaEMsUUFBQUEsY0FBYyxDQUFDcUMsS0FBSyxDQUFDTixXQUFQLENBQWQ7QUFDQU0sUUFBQUEsS0FBSyxDQUFDTixXQUFOLENBQWtCcEIsVUFBbEIsQ0FBNkI4QixXQUE3QixDQUF5Q0osS0FBSyxDQUFDTixXQUEvQztBQUNEO0FBQ0YsS0FMRDtBQU1EO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRhTWFwLCByZW1vdmVUZW1wbGF0ZSwgZ2V0VGVtcGxhdGVFbmQgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcblxuZXhwb3J0IGNvbnN0IGFycmF5TWFwID0gbmV3IFdlYWtNYXAoKTtcblxuZnVuY3Rpb24gbW92ZVBsYWNlaG9sZGVyKHRhcmdldCwgcHJldmlvdXNTaWJsaW5nKSB7XG4gIGNvbnN0IGRhdGEgPSBkYXRhTWFwLmdldCh0YXJnZXQpO1xuICBjb25zdCBzdGFydE5vZGUgPSBkYXRhLnN0YXJ0Tm9kZTtcbiAgY29uc3QgZW5kTm9kZSA9IGdldFRlbXBsYXRlRW5kKGRhdGEuZW5kTm9kZSk7XG5cbiAgcHJldmlvdXNTaWJsaW5nLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhcmdldCwgcHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nKTtcblxuICBsZXQgcHJldk5vZGUgPSB0YXJnZXQ7XG4gIGxldCBub2RlID0gc3RhcnROb2RlO1xuICB3aGlsZSAobm9kZSkge1xuICAgIGNvbnN0IG5leHROb2RlID0gbm9kZS5uZXh0U2libGluZztcbiAgICBwcmV2Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCBwcmV2Tm9kZS5uZXh0U2libGluZyk7XG4gICAgcHJldk5vZGUgPSBub2RlO1xuICAgIG5vZGUgPSBuZXh0Tm9kZSAhPT0gZW5kTm9kZS5uZXh0U2libGluZyAmJiBuZXh0Tm9kZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlQXJyYXkoaG9zdCwgdGFyZ2V0LCB2YWx1ZSwgcmVzb2x2ZVZhbHVlKSB7XG4gIGxldCBsYXN0RW50cmllcyA9IGFycmF5TWFwLmdldCh0YXJnZXQpO1xuICBjb25zdCBlbnRyaWVzID0gdmFsdWUubWFwKChpdGVtLCBpbmRleCkgPT4gKHtcbiAgICBpZDogT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGl0ZW0sIFwiaWRcIikgPyBpdGVtLmlkIDogaW5kZXgsXG4gICAgdmFsdWU6IGl0ZW0sXG4gICAgcGxhY2Vob2xkZXI6IG51bGwsXG4gICAgYXZhaWxhYmxlOiB0cnVlLFxuICB9KSk7XG5cbiAgYXJyYXlNYXAuc2V0KHRhcmdldCwgZW50cmllcyk7XG5cbiAgaWYgKGxhc3RFbnRyaWVzKSB7XG4gICAgY29uc3QgaWRzID0gbmV3IFNldCgpO1xuICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiBpZHMuYWRkKGVudHJ5LmlkKSk7XG5cbiAgICBsYXN0RW50cmllcyA9IGxhc3RFbnRyaWVzLmZpbHRlcihlbnRyeSA9PiB7XG4gICAgICBpZiAoIWlkcy5oYXMoZW50cnkuaWQpKSB7XG4gICAgICAgIHJlbW92ZVRlbXBsYXRlKGVudHJ5LnBsYWNlaG9sZGVyKTtcbiAgICAgICAgZW50cnkucGxhY2Vob2xkZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbnRyeS5wbGFjZWhvbGRlcik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBsZXQgcHJldmlvdXNTaWJsaW5nID0gdGFyZ2V0O1xuICBjb25zdCBsYXN0SW5kZXggPSB2YWx1ZS5sZW5ndGggLSAxO1xuICBjb25zdCBkYXRhID0gZGF0YU1hcC5nZXQodGFyZ2V0KTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZW50cmllcy5sZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBjb25zdCBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIGxldCBtYXRjaGVkRW50cnk7XG4gICAgaWYgKGxhc3RFbnRyaWVzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhc3RFbnRyaWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChsYXN0RW50cmllc1tpXS5hdmFpbGFibGUgJiYgbGFzdEVudHJpZXNbaV0uaWQgPT09IGVudHJ5LmlkKSB7XG4gICAgICAgICAgbWF0Y2hlZEVudHJ5ID0gbGFzdEVudHJpZXNbaV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWF0Y2hlZEVudHJ5KSB7XG4gICAgICBtYXRjaGVkRW50cnkuYXZhaWxhYmxlID0gZmFsc2U7XG4gICAgICBlbnRyeS5wbGFjZWhvbGRlciA9IG1hdGNoZWRFbnRyeS5wbGFjZWhvbGRlcjtcblxuICAgICAgaWYgKGVudHJ5LnBsYWNlaG9sZGVyLnByZXZpb3VzU2libGluZyAhPT0gcHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgIG1vdmVQbGFjZWhvbGRlcihlbnRyeS5wbGFjZWhvbGRlciwgcHJldmlvdXNTaWJsaW5nKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXRjaGVkRW50cnkudmFsdWUgIT09IGVudHJ5LnZhbHVlKSB7XG4gICAgICAgIHJlc29sdmVWYWx1ZShob3N0LCBlbnRyeS5wbGFjZWhvbGRlciwgZW50cnkudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbnRyeS5wbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO1xuICAgICAgcHJldmlvdXNTaWJsaW5nLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKFxuICAgICAgICBlbnRyeS5wbGFjZWhvbGRlcixcbiAgICAgICAgcHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nLFxuICAgICAgKTtcbiAgICAgIHJlc29sdmVWYWx1ZShob3N0LCBlbnRyeS5wbGFjZWhvbGRlciwgZW50cnkudmFsdWUpO1xuICAgIH1cblxuICAgIHByZXZpb3VzU2libGluZyA9IGdldFRlbXBsYXRlRW5kKFxuICAgICAgZGF0YU1hcC5nZXQoZW50cnkucGxhY2Vob2xkZXIpLmVuZE5vZGUgfHwgZW50cnkucGxhY2Vob2xkZXIsXG4gICAgKTtcblxuICAgIGlmIChpbmRleCA9PT0gMCkgZGF0YS5zdGFydE5vZGUgPSBlbnRyeS5wbGFjZWhvbGRlcjtcbiAgICBpZiAoaW5kZXggPT09IGxhc3RJbmRleCkgZGF0YS5lbmROb2RlID0gcHJldmlvdXNTaWJsaW5nO1xuICB9XG5cbiAgaWYgKGxhc3RFbnRyaWVzKSB7XG4gICAgbGFzdEVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICBpZiAoZW50cnkuYXZhaWxhYmxlKSB7XG4gICAgICAgIHJlbW92ZVRlbXBsYXRlKGVudHJ5LnBsYWNlaG9sZGVyKTtcbiAgICAgICAgZW50cnkucGxhY2Vob2xkZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbnRyeS5wbGFjZWhvbGRlcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==

  function _typeof$4(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$4 = function _typeof(obj) { return typeof obj; }; } else { _typeof$4 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$4(obj); }
  function resolveValue(host, target, value) {
    var type = Array.isArray(value) ? "array" : _typeof$4(value);
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

  function _typeof$5(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$5 = function _typeof(obj) { return typeof obj; }; } else { _typeof$5 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$5(obj); }

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
          throw Error("Event listener must be a function: ".concat(_typeof$5(value)));
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

  function _typeof$6(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$6 = function _typeof(obj) { return typeof obj; }; } else { _typeof$6 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$6(obj); }

  function normalizeValue(value) {
    var set = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set();

    if (Array.isArray(value)) {
      value.forEach(function (className) {
        return set.add(className);
      });
    } else if (value !== null && _typeof$6(value) === "object") {
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

  function _typeof$7(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$7 = function _typeof(obj) { return typeof obj; }; } else { _typeof$7 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$7(obj); }
  var styleMap = new WeakMap();
  function resolveStyle(host, target, value) {
    if (value === null || _typeof$7(value) !== "object") {
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

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _typeof$8(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$8 = function _typeof(obj) { return typeof obj; }; } else { _typeof$8 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$8(obj); }
  /* istanbul ignore next */

  try {
    process$2.env.NODE_ENV;
  } catch (e) {
    var process$2 = {
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


  var createWalker = _typeof$8(window.ShadyDOM) === "object" && window.ShadyDOM.inUse ? createInternalWalker : createExternalWalker;
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
          try {
            marker(host, _node, args[index], prevArgs ? prevArgs[index] : undefined);
          } catch (error) {

            throw error;
          }
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
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZS9jb3JlLmpzIl0sIm5hbWVzIjpbInN0cmluZ2lmeUVsZW1lbnQiLCJzaGFkeUNTUyIsIklTX0lFIiwiZGF0YU1hcCIsInJlbW92ZVRlbXBsYXRlIiwicmVzb2x2ZVZhbHVlIiwicmVzb2x2ZVByb3BlcnR5IiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiZSIsIlRJTUVTVEFNUCIsIkRhdGUiLCJub3ciLCJnZXRQbGFjZWhvbGRlciIsImlkIiwiUExBQ0VIT0xERVJfUkVHRVhQX1RFWFQiLCJQTEFDRUhPTERFUl9SRUdFWFBfRVFVQUwiLCJSZWdFeHAiLCJQTEFDRUhPTERFUl9SRUdFWFBfQUxMIiwiQVRUUl9QUkVGSVgiLCJBVFRSX1JFR0VYUCIsInByZXBhcmVkVGVtcGxhdGVzIiwiV2Vha01hcCIsImFwcGx5U2hhZHlDU1MiLCJ0ZW1wbGF0ZSIsInRhZ05hbWUiLCJzaGFkeSIsIm1hcCIsImdldCIsIk1hcCIsInNldCIsImNsb25lIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udGVudCIsImFwcGVuZENoaWxkIiwiY2xvbmVOb2RlIiwic3R5bGVzIiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJzdHlsZSIsImNvdW50IiwiY2hpbGROb2RlcyIsImxlbmd0aCIsImkiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiY3JlYXRlVGV4dE5vZGUiLCJwcmVwYXJlVGVtcGxhdGUiLCJ0b0xvd2VyQ2FzZSIsImNyZWF0ZVNpZ25hdHVyZSIsInBhcnRzIiwic2lnbmF0dXJlIiwicmVkdWNlIiwiYWNjIiwicGFydCIsImluZGV4Iiwic2xpY2UiLCJqb2luIiwibWF0Y2giLCJyZXBsYWNlIiwiZ2V0UHJvcGVydHlOYW1lIiwic3RyaW5nIiwic3BsaXQiLCJwb3AiLCJyZXBsYWNlQ29tbWVudHMiLCJmcmFnbWVudCIsIml0ZXJhdG9yIiwiY3JlYXRlTm9kZUl0ZXJhdG9yIiwiTm9kZUZpbHRlciIsIlNIT1dfQ09NTUVOVCIsIm5vZGUiLCJuZXh0Tm9kZSIsInRlc3QiLCJ0ZXh0Q29udGVudCIsInJlbW92ZUNoaWxkIiwiY3JlYXRlSW50ZXJuYWxXYWxrZXIiLCJjb250ZXh0IiwiY3VycmVudE5vZGUiLCJ1bmRlZmluZWQiLCJuZXh0U2libGluZyIsImNyZWF0ZUV4dGVybmFsV2Fsa2VyIiwiY3JlYXRlVHJlZVdhbGtlciIsIlNIT1dfRUxFTUVOVCIsIlNIT1dfVEVYVCIsImNyZWF0ZVdhbGtlciIsIndpbmRvdyIsIlNoYWR5RE9NIiwiaW5Vc2UiLCJjb250YWluZXIiLCJzdHlsZVNoZWV0c01hcCIsIm5vcm1hbGl6ZVdoaXRlc3BhY2UiLCJpbnB1dCIsInN0YXJ0SW5kZW50IiwiaW5kZXhPZiIsImluZGVudCIsInQiLCJzdWJzdHIiLCJNYXRoIiwibWF4IiwiYmVhdXRpZnlUZW1wbGF0ZUxvZyIsInBsYWNlaG9sZGVyIiwib3V0cHV0IiwiZmlsdGVyIiwibGluZSIsInN0YXJ0SW5kZXgiLCJyZXBlYXQiLCJjb21waWxlVGVtcGxhdGUiLCJyYXdQYXJ0cyIsImlzU1ZHIiwiaW5uZXJIVE1MIiwiY2hpbGRyZW4iLCJzdmdSb290IiwiZmlyc3RDaGlsZCIsImNvbXBpbGVXYWxrZXIiLCJjb21waWxlSW5kZXgiLCJub2RlVHlwZSIsIk5vZGUiLCJURVhUX05PREUiLCJ0ZXh0IiwicmVzdWx0cyIsImJlZm9yZSIsIm5leHQiLCJwdXNoIiwiZXF1YWwiLCJFTEVNRU5UX05PREUiLCJhdHRyaWJ1dGVzIiwiYXR0ciIsInZhbHVlIiwidHJpbSIsIm5hbWUiLCJwcm9wZXJ0eU5hbWUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJwYXJ0aWFsTmFtZSIsImhvc3QiLCJ0YXJnZXQiLCJhdHRyVmFsdWUiLCJkYXRhIiwic2V0QXR0cmlidXRlIiwidXBkYXRlVGVtcGxhdGVJbnN0YW5jZSIsImFyZ3MiLCJzdHlsZVNoZWV0cyIsInR5cGUiLCJwcmV2QXJncyIsImltcG9ydE5vZGUiLCJyZW5kZXJXYWxrZXIiLCJjbG9uZWRQYXJ0cyIsInJlbmRlckluZGV4IiwiY3VycmVudFBhcnQiLCJzaGlmdCIsIm1hcmtlcnMiLCJjdXN0b21FbGVtZW50cyIsIkVycm9yIiwic3RhcnROb2RlIiwiZW5kTm9kZSIsInByZXZpb3VzQ2hpbGQiLCJjaGlsZCIsImFkb3B0ZWRTdHlsZVNoZWV0cyIsImlzRXF1YWwiLCJDU1NTdHlsZVNoZWV0Iiwic3R5bGVTaGVldCIsInJlcGxhY2VTeW5jIiwibWFya2VyIiwiZXJyb3IiLCJjb25zb2xlIiwic2hhZG93Um9vdCIsInN0eWxlU3VidHJlZSIsInN0eWxlRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxnQkFBVCxFQUEyQkMsUUFBM0IsRUFBcUNDLEtBQXJDLFFBQWtELGFBQWxEO0FBQ0EsU0FBU0MsT0FBVCxFQUFrQkMsY0FBbEIsUUFBd0MsWUFBeEM7QUFFQSxPQUFPQyxZQUFQLE1BQXlCLHNCQUF6QjtBQUNBLE9BQU9DLGVBQVAsTUFBNEIseUJBQTVCO0FBRUE7O0FBQ0EsSUFBSTtBQUFFQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWjtBQUFzQixDQUE1QixDQUE2QixPQUFNQyxDQUFOLEVBQVM7QUFBRSxNQUFJSCxPQUFPLEdBQUc7QUFBRUMsSUFBQUEsR0FBRyxFQUFFO0FBQUVDLE1BQUFBLFFBQVEsRUFBRTtBQUFaO0FBQVAsR0FBZDtBQUFvRCxDLENBQUM7OztBQUU3RixJQUFNRSxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxFQUFsQjtBQUVBLE9BQU8sSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLE1BQUNDLEVBQUQsdUVBQU0sQ0FBTjtBQUFBLHVCQUFtQkosU0FBbkIsY0FBZ0NJLEVBQWhDO0FBQUEsQ0FBdkI7QUFFUCxJQUFNQyx1QkFBdUIsR0FBR0YsY0FBYyxDQUFDLFFBQUQsQ0FBOUM7QUFDQSxJQUFNRyx3QkFBd0IsR0FBRyxJQUFJQyxNQUFKLFlBQWVGLHVCQUFmLE9BQWpDO0FBQ0Es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LFVBQ3BEZSxLQURvRDtBQUFBLFVBQzlDMkYsTUFEOEM7O0FBRTNELFVBQUksQ0FBQ25CLFFBQUQsSUFBYUEsUUFBUSxDQUFDdkYsS0FBRCxDQUFSLEtBQW9Cb0YsSUFBSSxDQUFDcEYsS0FBRCxDQUF6QyxFQUFrRDtBQUNoRCxZQUFJO0FBQ0YwRyxVQUFBQSxNQUFNLENBQ0o1QixJQURJLEVBRUovRCxLQUZJLEVBR0pxRSxJQUFJLENBQUNwRixLQUFELENBSEEsRUFJSnVGLFFBQVEsR0FBR0EsUUFBUSxDQUFDdkYsS0FBRCxDQUFYLEdBQXFCdUIsU0FKekIsQ0FBTjtBQU1ELFNBUEQsQ0FPRSxPQUFPb0YsS0FBUCxFQUFjO0FBQ2QsY0FBSS9KLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO0FBQ3pDO0FBQ0E4SixZQUFBQSxPQUFPLENBQUNELEtBQVIsNkVBQ3VFdEssZ0JBQWdCLENBQ25GeUksSUFEbUYsQ0FEdkYsZUFHUWxDLG1CQUFtQixDQUFDaEQsU0FBRCxFQUFZSSxLQUFaLENBSDNCO0FBS0Q7O0FBQ0QsZ0JBQU0yRyxLQUFOO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFFBQUk1QixNQUFNLENBQUNuQixRQUFQLEtBQW9CQyxJQUFJLENBQUNDLFNBQTdCLEVBQXdDO0FBQ3RDeEgsTUFBQUEsUUFBUSxDQUFDLFVBQUEwQixLQUFLLEVBQUk7QUFDaEIsWUFBSThHLElBQUksQ0FBQytCLFVBQVQsRUFBcUI7QUFDbkIsY0FBSXRCLFFBQUosRUFBYztBQUNadkgsWUFBQUEsS0FBSyxDQUFDOEksWUFBTixDQUFtQmhDLElBQW5CO0FBQ0QsV0FGRCxNQUVPO0FBQ0w5RyxZQUFBQSxLQUFLLENBQUMrSSxZQUFOLENBQW1CakMsSUFBbkI7QUFDRDtBQUNGO0FBQ0YsT0FSTyxDQUFSO0FBU0Q7QUFDRixHQWxKRDtBQW1KRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZ2lmeUVsZW1lbnQsIHNoYWR5Q1NTLCBJU19JRSB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuaW1wb3J0IHsgZGF0YU1hcCwgcmVtb3ZlVGVtcGxhdGUgfSBmcm9tIFwiLi91dGlscy5qc1wiO1xuXG5pbXBvcnQgcmVzb2x2ZVZhbHVlIGZyb20gXCIuL3Jlc29sdmVycy92YWx1ZS5qc1wiO1xuaW1wb3J0IHJlc29sdmVQcm9wZXJ0eSBmcm9tIFwiLi9yZXNvbHZlcnMvcHJvcGVydHkuanNcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbnRyeSB7IHByb2Nlc3MuZW52Lk5PREVfRU5WIH0gY2F0Y2goZSkgeyB2YXIgcHJvY2VzcyA9IHsgZW52OiB7IE5PREVfRU5WOiAncHJvZHVjdGlvbicgfSB9OyB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuY29uc3QgVElNRVNUQU1QID0gRGF0ZS5ub3coKTtcblxuZXhwb3J0IGNvbnN0IGdldFBsYWNlaG9sZGVyID0gKGlkID0gMCkgPT4gYHt7aC0ke1RJTUVTVEFNUH0tJHtpZH19fWA7XG5cbmNvbnN0IFBMQUNFSE9MREVSX1JFR0VYUF9URVhUID0gZ2V0UGxhY2Vob2xkZXIoXCIoXFxcXGQrKVwiKTtcbmNvbnN0IFBMQUNFSE9MREVSX1JFR0VYUF9FUVVBTCA9IG5ldyBSZWdFeHAoYF4ke1BMQUNFSE9MREVSX1JFR0VYUF9URVhUfSRgKTtcbmNvbnN0IFBMQUNFSE9MREVSX1JFR0VYUF9BTEwgPSBuZXcgUmVnRXhwKFBMQUNFSE9MREVSX1JFR0VYUF9URVhULCBcImdcIik7XG5cbmNvbnN0IEFUVFJfUFJFRklYID0gYC0tJHtUSU1FU1RBTVB9LS1gO1xuY29uc3QgQVRUUl9SRUdFWFAgPSBuZXcgUmVnRXhwKEFUVFJfUFJFRklYLCBcImdcIik7XG5cbmNvbnN0IHByZXBhcmVkVGVtcGxhdGVzID0gbmV3IFdlYWtNYXAoKTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIGFwcGx5U2hhZHlDU1ModGVtcGxhdGUsIHRhZ05hbWUpIHtcbiAgaWYgKCF0YWdOYW1lKSByZXR1cm4gdGVtcGxhdGU7XG5cbiAgcmV0dXJuIHNoYWR5Q1NTKHNoYWR5ID0+IHtcbiAgICBsZXQgbWFwID0gcHJlcGFyZWRUZW1wbGF0ZXMuZ2V0KHRlbXBsYXRlKTtcbiAgICBpZiAoIW1hcCkge1xuICAgICAgbWFwID0gbmV3IE1hcCgpO1xuICAgICAgcHJlcGFyZWRUZW1wbGF0ZXMuc2V0KHRlbXBsYXRlLCBtYXApO1xuICAgIH1cblxuICAgIGxldCBjbG9uZSA9IG1hcC5nZXQodGFnTmFtZSk7XG5cbiAgICBpZiAoIWNsb25lKSB7XG4gICAgICBjbG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbiAgICAgIGNsb25lLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuXG4gICAgICBtYXAuc2V0KHRhZ05hbWUsIGNsb25lKTtcblxuICAgICAgY29uc3Qgc3R5bGVzID0gY2xvbmUuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3R5bGVcIik7XG5cbiAgICAgIEFycmF5LmZyb20oc3R5bGVzKS5mb3JFYWNoKHN0eWxlID0+IHtcbiAgICAgICAgY29uc3QgY291bnQgPSBzdHlsZS5jaGlsZE5vZGVzLmxlbmd0aCArIDE7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkgKz0gMSkge1xuICAgICAgICAgIHN0eWxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZ2V0UGxhY2Vob2xkZXIoKSksXG4gICAgICAgICAgICBzdHlsZSxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgc2hhZHkucHJlcGFyZVRlbXBsYXRlKGNsb25lLCB0YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbiAgICByZXR1cm4gY2xvbmU7XG4gIH0sIHRlbXBsYXRlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lnbmF0dXJlKHBhcnRzLCBzdHlsZXMpIHtcbiAgbGV0IHNpZ25hdHVyZSA9IHBhcnRzLnJlZHVjZSgoYWNjLCBwYXJ0LCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHBhcnQ7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgcGFydHNcbiAgICAgICAgLnNsaWNlKGluZGV4KVxuICAgICAgICAuam9pbihcIlwiKVxuICAgICAgICAubWF0Y2goL15cXHMqPFxcL1xccyoodGFibGV8dHJ8dGhlYWR8dGJvZHl8dGZvb3R8Y29sZ3JvdXApPi8pXG4gICAgKSB7XG4gICAgICByZXR1cm4gYCR7YWNjfTwhLS0ke2dldFBsYWNlaG9sZGVyKGluZGV4IC0gMSl9LS0+JHtwYXJ0fWA7XG4gICAgfVxuICAgIHJldHVybiBhY2MgKyBnZXRQbGFjZWhvbGRlcihpbmRleCAtIDEpICsgcGFydDtcbiAgfSwgXCJcIik7XG5cbiAgaWYgKHN0eWxlcykge1xuICAgIHNpZ25hdHVyZSArPSBgPHN0eWxlPlxcbiR7c3R5bGVzLmpvaW4oXCJcXG4vKi0tLS0tLSovXFxuXCIpfVxcbjwvc3R5bGU+YDtcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoSVNfSUUpIHtcbiAgICByZXR1cm4gc2lnbmF0dXJlLnJlcGxhY2UoXG4gICAgICAvc3R5bGVcXHMqPVxccyooW1wiXVteXCJdK1tcIl18WyddW14nXStbJ118W15cXHNcIic8Pi9dKykvZyxcbiAgICAgIG1hdGNoID0+IGAke0FUVFJfUFJFRklYfSR7bWF0Y2h9YCxcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydHlOYW1lKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nXG4gICAgLnJlcGxhY2UoL1xccyo9XFxzKlsnXCJdKiQvZywgXCJcIilcbiAgICAuc3BsaXQoL1xccysvKVxuICAgIC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNvbW1lbnRzKGZyYWdtZW50KSB7XG4gIGNvbnN0IGl0ZXJhdG9yID0gZG9jdW1lbnQuY3JlYXRlTm9kZUl0ZXJhdG9yKFxuICAgIGZyYWdtZW50LFxuICAgIE5vZGVGaWx0ZXIuU0hPV19DT01NRU5ULFxuICAgIG51bGwsXG4gICAgZmFsc2UsXG4gICk7XG4gIGxldCBub2RlO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uZC1hc3NpZ25cbiAgd2hpbGUgKChub2RlID0gaXRlcmF0b3IubmV4dE5vZGUoKSkpIHtcbiAgICBpZiAoUExBQ0VIT0xERVJfUkVHRVhQX0VRVUFMLnRlc3Qobm9kZS50ZXh0Q29udGVudCkpIHtcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXG4gICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5vZGUudGV4dENvbnRlbnQpLFxuICAgICAgICBub2RlLFxuICAgICAgKTtcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUludGVybmFsV2Fsa2VyKGNvbnRleHQpIHtcbiAgbGV0IG5vZGU7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgY3VycmVudE5vZGUoKSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9LFxuICAgIG5leHROb2RlKCkge1xuICAgICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBub2RlID0gY29udGV4dC5jaGlsZE5vZGVzWzBdO1xuICAgICAgfSBlbHNlIGlmIChub2RlLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIG5vZGUgPSBub2RlLmNoaWxkTm9kZXNbMF07XG4gICAgICB9IGVsc2UgaWYgKG5vZGUubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgbm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgbm9kZSA9IHBhcmVudE5vZGUubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgd2hpbGUgKCFub2RlICYmIHBhcmVudE5vZGUgIT09IGNvbnRleHQpIHtcbiAgICAgICAgICBwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgIG5vZGUgPSBwYXJlbnROb2RlLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAhIW5vZGU7XG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXh0ZXJuYWxXYWxrZXIoY29udGV4dCkge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihcbiAgICBjb250ZXh0LFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQgfCBOb2RlRmlsdGVyLlNIT1dfVEVYVCxcbiAgICBudWxsLFxuICAgIGZhbHNlLFxuICApO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgY3JlYXRlV2Fsa2VyID1cbiAgdHlwZW9mIHdpbmRvdy5TaGFkeURPTSA9PT0gXCJvYmplY3RcIiAmJiB3aW5kb3cuU2hhZHlET00uaW5Vc2VcbiAgICA/IGNyZWF0ZUludGVybmFsV2Fsa2VyXG4gICAgOiBjcmVhdGVFeHRlcm5hbFdhbGtlcjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHN0eWxlU2hlZXRzTWFwID0gbmV3IE1hcCgpO1xuXG5mdW5jdGlvbiBub3JtYWxpemVXaGl0ZXNwYWNlKGlucHV0LCBzdGFydEluZGVudCA9IDApIHtcbiAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC8oXltcXG5cXHNcXHQgXSspfChbXFxuXFxzXFx0IF0rJCkrL2csIFwiXCIpO1xuXG4gIGxldCBpID0gaW5wdXQuaW5kZXhPZihcIlxcblwiKTtcbiAgaWYgKGkgPiAtMSkge1xuICAgIGxldCBpbmRlbnQgPSAwIC0gc3RhcnRJbmRlbnQgLSAyO1xuICAgIGZvciAoaSArPSAxOyBpbnB1dFtpXSA9PT0gXCIgXCIgJiYgaSA8IGlucHV0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpbmRlbnQgKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL1xcbiArL2csIHQgPT5cbiAgICAgIHQuc3Vic3RyKDAsIE1hdGgubWF4KHQubGVuZ3RoIC0gaW5kZW50LCAxKSksXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBpbnB1dDtcbn1cblxuZnVuY3Rpb24gYmVhdXRpZnlUZW1wbGF0ZUxvZyhpbnB1dCwgaW5kZXgpIHtcbiAgY29uc3QgcGxhY2Vob2xkZXIgPSBnZXRQbGFjZWhvbGRlcihpbmRleCk7XG5cbiAgY29uc3Qgb3V0cHV0ID0gbm9ybWFsaXplV2hpdGVzcGFjZShpbnB1dClcbiAgICAuc3BsaXQoXCJcXG5cIilcbiAgICAuZmlsdGVyKGkgPT4gaSlcbiAgICAubWFwKGxpbmUgPT4ge1xuICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IGxpbmUuaW5kZXhPZihwbGFjZWhvbGRlcik7XG5cbiAgICAgIGlmIChzdGFydEluZGV4ID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIGB8ICR7bGluZX1cXG4tLSR7XCItXCIucmVwZWF0KHN0YXJ0SW5kZXgpfSR7XCJeXCIucmVwZWF0KDYpfWA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBgfCAke2xpbmV9YDtcbiAgICB9KVxuICAgIC5qb2luKFwiXFxuXCIpXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRlbXBsYXRlLWN1cmx5LWluLXN0cmluZ1xuICAgIC5yZXBsYWNlKFBMQUNFSE9MREVSX1JFR0VYUF9BTEwsIFwiJHsuLi59XCIpO1xuXG4gIHJldHVybiBgJHtvdXRwdXR9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVUZW1wbGF0ZShyYXdQYXJ0cywgaXNTVkcsIHN0eWxlcykge1xuICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbiAgY29uc3QgcGFydHMgPSBbXTtcblxuICBsZXQgc2lnbmF0dXJlID0gY3JlYXRlU2lnbmF0dXJlKHJhd1BhcnRzLCBzdHlsZXMpO1xuICBpZiAoaXNTVkcpIHNpZ25hdHVyZSA9IGA8c3ZnPiR7c2lnbmF0dXJlfTwvc3ZnPmA7XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChJU19JRSkge1xuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IHNpZ25hdHVyZTtcbiAgfSBlbHNlIHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYDx0ZW1wbGF0ZT4ke3NpZ25hdHVyZX08L3RlbXBsYXRlPmA7XG4gICAgdGVtcGxhdGUuY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIuY2hpbGRyZW5bMF0uY29udGVudCk7XG4gIH1cblxuICBpZiAoaXNTVkcpIHtcbiAgICBjb25zdCBzdmdSb290ID0gdGVtcGxhdGUuY29udGVudC5maXJzdENoaWxkO1xuICAgIHRlbXBsYXRlLmNvbnRlbnQucmVtb3ZlQ2hpbGQoc3ZnUm9vdCk7XG4gICAgQXJyYXkuZnJvbShzdmdSb290LmNoaWxkTm9kZXMpLmZvckVhY2gobm9kZSA9PlxuICAgICAgdGVtcGxhdGUuY29udGVudC5hcHBlbmRDaGlsZChub2RlKSxcbiAgICApO1xuICB9XG5cbiAgcmVwbGFjZUNvbW1lbnRzKHRlbXBsYXRlLmNvbnRlbnQpO1xuXG4gIGNvbnN0IGNvbXBpbGVXYWxrZXIgPSBjcmVhdGVXYWxrZXIodGVtcGxhdGUuY29udGVudCk7XG4gIGxldCBjb21waWxlSW5kZXggPSAwO1xuXG4gIHdoaWxlIChjb21waWxlV2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICBjb25zdCBub2RlID0gY29tcGlsZVdhbGtlci5jdXJyZW50Tm9kZTtcblxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgY29uc3QgdGV4dCA9IG5vZGUudGV4dENvbnRlbnQ7XG5cbiAgICAgIGlmICghdGV4dC5tYXRjaChQTEFDRUhPTERFUl9SRUdFWFBfRVFVQUwpKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSB0ZXh0Lm1hdGNoKFBMQUNFSE9MREVSX1JFR0VYUF9BTEwpO1xuICAgICAgICBpZiAocmVzdWx0cykge1xuICAgICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IG5vZGU7XG4gICAgICAgICAgcmVzdWx0c1xuICAgICAgICAgICAgLnJlZHVjZShcbiAgICAgICAgICAgICAgKGFjYywgcGxhY2Vob2xkZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbYmVmb3JlLCBuZXh0XSA9IGFjYy5wb3AoKS5zcGxpdChwbGFjZWhvbGRlcik7XG4gICAgICAgICAgICAgICAgaWYgKGJlZm9yZSkgYWNjLnB1c2goYmVmb3JlKTtcbiAgICAgICAgICAgICAgICBhY2MucHVzaChwbGFjZWhvbGRlcik7XG4gICAgICAgICAgICAgICAgaWYgKG5leHQpIGFjYy5wdXNoKG5leHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFt0ZXh0XSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5mb3JFYWNoKChwYXJ0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZS50ZXh0Q29udGVudCA9IHBhcnQ7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHBhcnQpLFxuICAgICAgICAgICAgICAgICAgY3VycmVudE5vZGUubmV4dFNpYmxpbmcsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZXF1YWwgPSBub2RlLnRleHRDb250ZW50Lm1hdGNoKFBMQUNFSE9MREVSX1JFR0VYUF9FUVVBTCk7XG4gICAgICBpZiAoZXF1YWwpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKCFJU19JRSkgbm9kZS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIHBhcnRzW2VxdWFsWzFdXSA9IFtjb21waWxlSW5kZXgsIHJlc29sdmVWYWx1ZV07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lbHktaWZcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICBBcnJheS5mcm9tKG5vZGUuYXR0cmlidXRlcykuZm9yRWFjaChhdHRyID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHIudmFsdWUudHJpbSgpO1xuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgY29uc3QgbmFtZSA9IElTX0lFID8gYXR0ci5uYW1lLnJlcGxhY2UoQVRUUl9QUkVGSVgsIFwiXCIpIDogYXR0ci5uYW1lO1xuICAgICAgICAgIGNvbnN0IGVxdWFsID0gdmFsdWUubWF0Y2goUExBQ0VIT0xERVJfUkVHRVhQX0VRVUFMKTtcbiAgICAgICAgICBpZiAoZXF1YWwpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IGdldFByb3BlcnR5TmFtZShyYXdQYXJ0c1tlcXVhbFsxXV0pO1xuICAgICAgICAgICAgcGFydHNbZXF1YWxbMV1dID0gW1xuICAgICAgICAgICAgICBjb21waWxlSW5kZXgsXG4gICAgICAgICAgICAgIHJlc29sdmVQcm9wZXJ0eShuYW1lLCBwcm9wZXJ0eU5hbWUsIGlzU1ZHKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyLm5hbWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHRzID0gdmFsdWUubWF0Y2goUExBQ0VIT0xERVJfUkVHRVhQX0FMTCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0cykge1xuICAgICAgICAgICAgICBjb25zdCBwYXJ0aWFsTmFtZSA9IGBhdHRyX18ke25hbWV9YDtcblxuICAgICAgICAgICAgICByZXN1bHRzLmZvckVhY2goKHBsYWNlaG9sZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFssIGlkXSA9IHBsYWNlaG9sZGVyLm1hdGNoKFBMQUNFSE9MREVSX1JFR0VYUF9FUVVBTCk7XG4gICAgICAgICAgICAgICAgcGFydHNbaWRdID0gW1xuICAgICAgICAgICAgICAgICAgY29tcGlsZUluZGV4LFxuICAgICAgICAgICAgICAgICAgKGhvc3QsIHRhcmdldCwgYXR0clZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBkYXRhTWFwLmdldCh0YXJnZXQsIHt9KTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtwYXJ0aWFsTmFtZV0gPSAoZGF0YVtwYXJ0aWFsTmFtZV0gfHwgdmFsdWUpLnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0clZhbHVlID09IG51bGwgPyBcIlwiIDogYXR0clZhbHVlLFxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA9PT0gMSB8fCBpbmRleCArIDEgPT09IHJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShuYW1lLCBkYXRhW3BhcnRpYWxOYW1lXSk7XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YVtwYXJ0aWFsTmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgYXR0ci52YWx1ZSA9IFwiXCI7XG5cbiAgICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICAgICAgaWYgKElTX0lFICYmIG5hbWUgIT09IGF0dHIubmFtZSkge1xuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHIubmFtZSk7XG4gICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgXCJcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBpbGVJbmRleCArPSAxO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVRlbXBsYXRlSW5zdGFuY2UoaG9zdCwgdGFyZ2V0LCBhcmdzLCBzdHlsZVNoZWV0cykge1xuICAgIGNvbnN0IGRhdGEgPSBkYXRhTWFwLmdldCh0YXJnZXQsIHsgdHlwZTogXCJmdW5jdGlvblwiIH0pO1xuXG4gICAgaWYgKHRlbXBsYXRlICE9PSBkYXRhLnRlbXBsYXRlKSB7XG4gICAgICBpZiAoZGF0YS50ZW1wbGF0ZSB8fCB0YXJnZXQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIHJlbW92ZVRlbXBsYXRlKHRhcmdldCk7XG4gICAgICB9XG5cbiAgICAgIGRhdGEucHJldkFyZ3MgPSBudWxsO1xuXG4gICAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUoXG4gICAgICAgIGFwcGx5U2hhZHlDU1ModGVtcGxhdGUsIGhvc3QudGFnTmFtZSkuY29udGVudCxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHJlbmRlcldhbGtlciA9IGNyZWF0ZVdhbGtlcihmcmFnbWVudCk7XG4gICAgICBjb25zdCBjbG9uZWRQYXJ0cyA9IHBhcnRzLnNsaWNlKDApO1xuXG4gICAgICBsZXQgcmVuZGVySW5kZXggPSAwO1xuICAgICAgbGV0IGN1cnJlbnRQYXJ0ID0gY2xvbmVkUGFydHMuc2hpZnQoKTtcblxuICAgICAgY29uc3QgbWFya2VycyA9IFtdO1xuXG4gICAgICBkYXRhLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICBkYXRhLm1hcmtlcnMgPSBtYXJrZXJzO1xuXG4gICAgICB3aGlsZSAocmVuZGVyV2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHJlbmRlcldhbGtlci5jdXJyZW50Tm9kZTtcblxuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgIGlmIChQTEFDRUhPTERFUl9SRUdFWFBfRVFVQUwudGVzdChub2RlLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChJU19JRSkge1xuICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IG5vZGUudGV4dENvbnRlbnQucmVwbGFjZShBVFRSX1JFR0VYUCwgXCJcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgIG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFXG4gICAgICAgICkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIG5vZGUudGFnTmFtZS5pbmRleE9mKFwiLVwiKSA+IC0xICYmXG4gICAgICAgICAgICAhY3VzdG9tRWxlbWVudHMuZ2V0KG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgICAgIGBNaXNzaW5nICR7c3RyaW5naWZ5RWxlbWVudChcbiAgICAgICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgICApfSBlbGVtZW50IGRlZmluaXRpb24gaW4gJHtzdHJpbmdpZnlFbGVtZW50KGhvc3QpfWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChjdXJyZW50UGFydCAmJiBjdXJyZW50UGFydFswXSA9PT0gcmVuZGVySW5kZXgpIHtcbiAgICAgICAgICBtYXJrZXJzLnB1c2goW25vZGUsIGN1cnJlbnRQYXJ0WzFdXSk7XG4gICAgICAgICAgY3VycmVudFBhcnQgPSBjbG9uZWRQYXJ0cy5zaGlmdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVySW5kZXggKz0gMTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldC5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgZGF0YS5zdGFydE5vZGUgPSBmcmFnbWVudC5jaGlsZE5vZGVzWzBdO1xuICAgICAgICBkYXRhLmVuZE5vZGUgPSBmcmFnbWVudC5jaGlsZE5vZGVzW2ZyYWdtZW50LmNoaWxkTm9kZXMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgbGV0IHByZXZpb3VzQ2hpbGQgPSB0YXJnZXQ7XG5cbiAgICAgICAgbGV0IGNoaWxkID0gZnJhZ21lbnQuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNoaWxkLCBwcmV2aW91c0NoaWxkLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICBwcmV2aW91c0NoaWxkID0gY2hpbGQ7XG4gICAgICAgICAgY2hpbGQgPSBmcmFnbWVudC5jaGlsZE5vZGVzWzBdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFkb3B0ZWRTdHlsZVNoZWV0cyA9IHRhcmdldC5hZG9wdGVkU3R5bGVTaGVldHM7XG4gICAgaWYgKHN0eWxlU2hlZXRzKSB7XG4gICAgICBsZXQgaXNFcXVhbCA9IGZhbHNlO1xuXG4gICAgICBzdHlsZVNoZWV0cyA9IHN0eWxlU2hlZXRzLm1hcChzdHlsZSA9PiB7XG4gICAgICAgIGlmIChzdHlsZSBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQpIHJldHVybiBzdHlsZTtcblxuICAgICAgICBsZXQgc3R5bGVTaGVldCA9IHN0eWxlU2hlZXRzTWFwLmdldChzdHlsZSk7XG4gICAgICAgIGlmICghc3R5bGVTaGVldCkge1xuICAgICAgICAgIHN0eWxlU2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICAgIHN0eWxlU2hlZXQucmVwbGFjZVN5bmMoc3R5bGUpO1xuICAgICAgICAgIHN0eWxlU2hlZXRzTWFwLnNldChzdHlsZSwgc3R5bGVTaGVldCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlU2hlZXQ7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN0eWxlU2hlZXRzLmxlbmd0aCA9PT0gYWRvcHRlZFN0eWxlU2hlZXRzLmxlbmd0aCkge1xuICAgICAgICBpc0VxdWFsID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHlsZVNoZWV0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGlmIChzdHlsZVNoZWV0c1tpXSAhPT0gYWRvcHRlZFN0eWxlU2hlZXRzW2ldKSB7XG4gICAgICAgICAgICBpc0VxdWFsID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc0VxdWFsKSB0YXJnZXQuYWRvcHRlZFN0eWxlU2hlZXRzID0gc3R5bGVTaGVldHM7XG4gICAgfSBlbHNlIGlmIChhZG9wdGVkU3R5bGVTaGVldHMgJiYgYWRvcHRlZFN0eWxlU2hlZXRzLmxlbmd0aCkge1xuICAgICAgdGFyZ2V0LmFkb3B0ZWRTdHlsZVNoZWV0cyA9IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHByZXZBcmdzID0gZGF0YS5wcmV2QXJncztcbiAgICBkYXRhLnByZXZBcmdzID0gYXJncztcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLm1hcmtlcnMubGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgICBjb25zdCBbbm9kZSwgbWFya2VyXSA9IGRhdGEubWFya2Vyc1tpbmRleF07XG4gICAgICBpZiAoIXByZXZBcmdzIHx8IHByZXZBcmdzW2luZGV4XSAhPT0gYXJnc1tpbmRleF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBtYXJrZXIoXG4gICAgICAgICAgICBob3N0LFxuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgIGFyZ3NbaW5kZXhdLFxuICAgICAgICAgICAgcHJldkFyZ3MgPyBwcmV2QXJnc1tpbmRleF0gOiB1bmRlZmluZWQsXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgYEZvbGxvd2luZyBlcnJvciB3YXMgdGhyb3duIHdoZW4gdXBkYXRpbmcgYSB0ZW1wbGF0ZSBleHByZXNzaW9uIGluICR7c3RyaW5naWZ5RWxlbWVudChcbiAgICAgICAgICAgICAgICBob3N0LFxuICAgICAgICAgICAgICApfVxcbiR7YmVhdXRpZnlUZW1wbGF0ZUxvZyhzaWduYXR1cmUsIGluZGV4KX1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0Lm5vZGVUeXBlICE9PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgc2hhZHlDU1Moc2hhZHkgPT4ge1xuICAgICAgICBpZiAoaG9zdC5zaGFkb3dSb290KSB7XG4gICAgICAgICAgaWYgKHByZXZBcmdzKSB7XG4gICAgICAgICAgICBzaGFkeS5zdHlsZVN1YnRyZWUoaG9zdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoYWR5LnN0eWxlRWxlbWVudChob3N0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==

  function _typeof$9(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$9 = function _typeof(obj) { return typeof obj; }; } else { _typeof$9 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$9(obj); }

  function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function resolveValue$1(_ref, setter) {
    var target = _ref.target;
    var value;

    switch (target.type) {
      case "radio":
      case "checkbox":
        value = target.checked && target.value;
        break;

      case "file":
        value = target.files;
        break;

      default:
        value = target.value;
    }

    setter(value);
  }

  function getPartialObject(name, value) {
    return name.split(".").reverse().reduce(function (acc, key) {
      if (!acc) return _defineProperty$3({}, key, value);
      return _defineProperty$3({}, key, acc);
    }, null);
  }

  var stringCache = new Map();
  function set$2(property, valueOrPath) {
    if (!property) {
      throw Error("The first argument must be a property name or an object instance: ".concat(property));
    }

    if (_typeof$9(property) === "object") {
      if (valueOrPath === undefined) {
        throw Error("For model instance property the second argument must be defined");
      }

      var store = storePointer.get(property);

      if (!store) {
        throw Error("Provided object must be a model instance of the store");
      }

      return function (host, event) {
        resolveValue$1(event, function (value) {
          store.set(property, valueOrPath !== null ? getPartialObject(valueOrPath, value) : valueOrPath);
        });
      };
    }

    if (arguments.length === 2) {
      return function (host) {
        host[property] = valueOrPath;
      };
    }

    var fn = stringCache.get(property);

    if (!fn) {
      fn = function fn(host, event) {
        resolveValue$1(event, function (value) {
          host[property] = value;
        });
      };

      stringCache.set(property, fn);
    }

    return fn;
  }
  var promiseMap = new WeakMap();
  function resolve$1(promise, placeholder) {
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
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZS9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbInN0b3JlUG9pbnRlciIsInJlc29sdmVWYWx1ZSIsInNldHRlciIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsImNoZWNrZWQiLCJmaWxlcyIsImdldFBhcnRpYWxPYmplY3QiLCJuYW1lIiwic3BsaXQiLCJyZXZlcnNlIiwicmVkdWNlIiwiYWNjIiwia2V5Iiwic3RyaW5nQ2FjaGUiLCJNYXAiLCJzZXQiLCJwcm9wZXJ0eSIsInZhbHVlT3JQYXRoIiwiRXJyb3IiLCJ1bmRlZmluZWQiLCJzdG9yZSIsImdldCIsImhvc3QiLCJldmVudCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImZuIiwicHJvbWlzZU1hcCIsIldlYWtNYXAiLCJyZXNvbHZlIiwicHJvbWlzZSIsInBsYWNlaG9sZGVyIiwiZGVsYXkiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRoZW4iLCJ0ZW1wbGF0ZSIsImNsZWFyVGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLFNBQVNBLFlBQVQsUUFBNkIsYUFBN0I7O0FBRUEsU0FBU0MsWUFBVCxPQUFrQ0MsTUFBbEMsRUFBMEM7QUFBQSxNQUFsQkMsTUFBa0IsUUFBbEJBLE1BQWtCO0FBQ3hDLE1BQUlDLEtBQUo7O0FBRUEsVUFBUUQsTUFBTSxDQUFDRSxJQUFmO0FBQ0UsU0FBSyxPQUFMO0FBQ0EsU0FBSyxVQUFMO0FBQ0VELE1BQUFBLEtBQUssR0FBR0QsTUFBTSxDQUFDRyxPQUFQLElBQWtCSCxNQUFNLENBQUNDLEtBQWpDO0FBQ0E7O0FBQ0YsU0FBSyxNQUFMO0FBQ0VBLE1BQUFBLEtBQUssR0FBR0QsTUFBTSxDQUFDSSxLQUFmO0FBQ0E7O0FBQ0Y7QUFDRUgsTUFBQUEsS0FBSyxHQUFHRCxNQUFNLENBQUNDLEtBQWY7QUFUSjs7QUFZQUYsRUFBQUEsTUFBTSxDQUFDRSxLQUFELENBQU47QUFDRDs7QUFFRCxTQUFTSSxn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QSxJQUFBQSxPQUFPLENBQUNNLElBQVIsQ0FBYSxVQUFBQyxRQUFRLEVBQUk7QUFDdkIsVUFBSUosT0FBSixFQUFhSyxZQUFZLENBQUNMLE9BQUQsQ0FBWjs7QUFFYixVQUFJTixVQUFVLENBQUNOLEdBQVgsQ0FBZXBCLE1BQWYsTUFBMkI2QixPQUEvQixFQUF3QztBQUN0Q08sUUFBQUEsUUFBUSxDQUFDZixJQUFELEVBQU9yQixNQUFQLENBQVI7QUFDQTBCLFFBQUFBLFVBQVUsQ0FBQ1osR0FBWCxDQUFlZCxNQUFmLEVBQXVCLElBQXZCO0FBQ0Q7QUFDRixLQVBEO0FBUUQsR0F2QkQ7QUF3QkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdG9yZVBvaW50ZXIgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcblxuZnVuY3Rpb24gcmVzb2x2ZVZhbHVlKHsgdGFyZ2V0IH0sIHNldHRlcikge1xuICBsZXQgdmFsdWU7XG5cbiAgc3dpdGNoICh0YXJnZXQudHlwZSkge1xuICAgIGNhc2UgXCJyYWRpb1wiOlxuICAgIGNhc2UgXCJjaGVja2JveFwiOlxuICAgICAgdmFsdWUgPSB0YXJnZXQuY2hlY2tlZCAmJiB0YXJnZXQudmFsdWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZmlsZVwiOlxuICAgICAgdmFsdWUgPSB0YXJnZXQuZmlsZXM7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gIH1cblxuICBzZXR0ZXIodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBnZXRQYXJ0aWFsT2JqZWN0KG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBuYW1lXG4gICAgLnNwbGl0KFwiLlwiKVxuICAgIC5yZXZlcnNlKClcbiAgICAucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgaWYgKCFhY2MpIHJldHVybiB7IFtrZXldOiB2YWx1ZSB9O1xuICAgICAgcmV0dXJuIHsgW2tleV06IGFjYyB9O1xuICAgIH0sIG51bGwpO1xufVxuXG5jb25zdCBzdHJpbmdDYWNoZSA9IG5ldyBNYXAoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldChwcm9wZXJ0eSwgdmFsdWVPclBhdGgpIHtcbiAgaWYgKCFwcm9wZXJ0eSkge1xuICAgIHRocm93IEVycm9yKFxuICAgICAgYFRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgcHJvcGVydHkgbmFtZSBvciBhbiBvYmplY3QgaW5zdGFuY2U6ICR7cHJvcGVydHl9YCxcbiAgICApO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gXCJvYmplY3RcIikge1xuICAgIGlmICh2YWx1ZU9yUGF0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgXCJGb3IgbW9kZWwgaW5zdGFuY2UgcHJvcGVydHkgdGhlIHNlY29uZCBhcmd1bWVudCBtdXN0IGJlIGRlZmluZWRcIixcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RvcmUgPSBzdG9yZVBvaW50ZXIuZ2V0KHByb3BlcnR5KTtcblxuICAgIGlmICghc3RvcmUpIHtcbiAgICAgIHRocm93IEVycm9yKFwiUHJvdmlkZWQgb2JqZWN0IG11c3QgYmUgYSBtb2RlbCBpbnN0YW5jZSBvZiB0aGUgc3RvcmVcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChob3N0LCBldmVudCkgPT4ge1xuICAgICAgcmVzb2x2ZVZhbHVlKGV2ZW50LCB2YWx1ZSA9PiB7XG4gICAgICAgIHN0b3JlLnNldChcbiAgICAgICAgICBwcm9wZXJ0eSxcbiAgICAgICAgICB2YWx1ZU9yUGF0aCAhPT0gbnVsbFxuICAgICAgICAgICAgPyBnZXRQYXJ0aWFsT2JqZWN0KHZhbHVlT3JQYXRoLCB2YWx1ZSlcbiAgICAgICAgICAgIDogdmFsdWVPclBhdGgsXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICByZXR1cm4gaG9zdCA9PiB7XG4gICAgICBob3N0W3Byb3BlcnR5XSA9IHZhbHVlT3JQYXRoO1xuICAgIH07XG4gIH1cblxuICBsZXQgZm4gPSBzdHJpbmdDYWNoZS5nZXQocHJvcGVydHkpO1xuXG4gIGlmICghZm4pIHtcbiAgICBmbiA9IChob3N0LCBldmVudCkgPT4ge1xuICAgICAgcmVzb2x2ZVZhbHVlKGV2ZW50LCB2YWx1ZSA9PiB7XG4gICAgICAgIGhvc3RbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgc3RyaW5nQ2FjaGUuc2V0KHByb3BlcnR5LCBmbik7XG4gIH1cblxuICByZXR1cm4gZm47XG59XG5cbmNvbnN0IHByb21pc2VNYXAgPSBuZXcgV2Vha01hcCgpO1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmUocHJvbWlzZSwgcGxhY2Vob2xkZXIsIGRlbGF5ID0gMjAwKSB7XG4gIHJldHVybiAoaG9zdCwgdGFyZ2V0KSA9PiB7XG4gICAgbGV0IHRpbWVvdXQ7XG5cbiAgICBpZiAocGxhY2Vob2xkZXIpIHtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGltZW91dCA9IHVuZGVmaW5lZDtcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHBsYWNlaG9sZGVyKGhvc3QsIHRhcmdldCk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH1cblxuICAgIHByb21pc2VNYXAuc2V0KHRhcmdldCwgcHJvbWlzZSk7XG5cbiAgICBwcm9taXNlLnRoZW4odGVtcGxhdGUgPT4ge1xuICAgICAgaWYgKHRpbWVvdXQpIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblxuICAgICAgaWYgKHByb21pc2VNYXAuZ2V0KHRhcmdldCkgPT09IHByb21pc2UpIHtcbiAgICAgICAgdGVtcGxhdGUoaG9zdCwgdGFyZ2V0KTtcbiAgICAgICAgcHJvbWlzZU1hcC5zZXQodGFyZ2V0LCBudWxsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cbiJdfQ==

  var helpers = /*#__PURE__*/Object.freeze({
    __proto__: null,
    set: set$2,
    resolve: resolve$1
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

  /**
   * A function that always returns `true`. Any passed in parameters are ignored.
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Function
   * @sig * -> Boolean
   * @param {*}
   * @return {Boolean}
   * @see R.F
   * @example
   *
   *      R.T(); //=> true
   */
  var T = function () {
    return true;
  };

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

  function _reduced(x) {
    return x && x['@@transducer/reduced'] ? x : {
      '@@transducer/value': x,
      '@@transducer/reduced': true
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
   * Determine if the passed argument is an integer.
   *
   * @private
   * @param {*} n
   * @category Type
   * @return {Boolean}
   */
  var _isInteger = Number.isInteger || function _isInteger(n) {
    return n << 0 === n;
  };

  /**
   * Returns the nth element of the given list or string. If n is negative the
   * element at index length + n is returned.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig Number -> [a] -> a | Undefined
   * @sig Number -> String -> String
   * @param {Number} offset
   * @param {*} list
   * @return {*}
   * @example
   *
   *      const list = ['foo', 'bar', 'baz', 'quux'];
   *      R.nth(1, list); //=> 'bar'
   *      R.nth(-1, list); //=> 'quux'
   *      R.nth(-99, list); //=> undefined
   *
   *      R.nth(2, 'abc'); //=> 'c'
   *      R.nth(3, 'abc'); //=> ''
   * @symb R.nth(-1, [a, b, c]) = c
   * @symb R.nth(0, [a, b, c]) = a
   * @symb R.nth(1, [a, b, c]) = b
   */

  var nth =
  /*#__PURE__*/
  _curry2(function nth(offset, list) {
    var idx = offset < 0 ? list.length + offset : offset;
    return _isString(list) ? list.charAt(idx) : list[idx];
  });

  /**
   * Retrieves the values at given paths of an object.
   *
   * @func
   * @memberOf R
   * @since v0.27.1
   * @category Object
   * @typedefn Idx = [String | Int]
   * @sig [Idx] -> {a} -> [a | Undefined]
   * @param {Array} pathsArray The array of paths to be fetched.
   * @param {Object} obj The object to retrieve the nested properties from.
   * @return {Array} A list consisting of values at paths specified by "pathsArray".
   * @see R.path
   * @example
   *
   *      R.paths([['a', 'b'], ['p', 0, 'q']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, 3]
   *      R.paths([['a', 'b'], ['p', 'r']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, undefined]
   */

  var paths =
  /*#__PURE__*/
  _curry2(function paths(pathsArray, obj) {
    return pathsArray.map(function (paths) {
      var val = obj;
      var idx = 0;
      var p;

      while (idx < paths.length) {
        if (val == null) {
          return;
        }

        p = paths[idx];
        val = _isInteger(p) ? nth(p, val) : val[p];
        idx += 1;
      }

      return val;
    });
  });

  /**
   * Retrieve the value at a given path.
   *
   * @func
   * @memberOf R
   * @since v0.2.0
   * @category Object
   * @typedefn Idx = String | Int
   * @sig [Idx] -> {a} -> a | Undefined
   * @param {Array} path The path to use.
   * @param {Object} obj The object to retrieve the nested property from.
   * @return {*} The data at `path`.
   * @see R.prop, R.nth
   * @example
   *
   *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
   *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
   *      R.path(['a', 'b', 0], {a: {b: [1, 2, 3]}}); //=> 1
   *      R.path(['a', 'b', -2], {a: {b: [1, 2, 3]}}); //=> 2
   */

  var path =
  /*#__PURE__*/
  _curry2(function path(pathAr, obj) {
    return paths([pathAr], obj)[0];
  });

  /**
   * Returns a function that when supplied an object returns the indicated
   * property of that object, if it exists.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Object
   * @typedefn Idx = String | Int
   * @sig Idx -> {s: a} -> a | Undefined
   * @param {String|Number} p The property name or array index
   * @param {Object} obj The object to query
   * @return {*} The value at `obj.p`.
   * @see R.path, R.nth
   * @example
   *
   *      R.prop('x', {x: 100}); //=> 100
   *      R.prop('x', {}); //=> undefined
   *      R.prop(0, [100]); //=> 100
   *      R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4
   */

  var prop =
  /*#__PURE__*/
  _curry2(function prop(p, obj) {
    return path([p], obj);
  });

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

  /**
   * Returns a new list containing the contents of the given list, followed by
   * the given element.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig a -> [a] -> [a]
   * @param {*} el The element to add to the end of the new list.
   * @param {Array} list The list of elements to add a new item to.
   *        list.
   * @return {Array} A new list containing the elements of the old list followed by `el`.
   * @see R.prepend
   * @example
   *
   *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
   *      R.append('tests', []); //=> ['tests']
   *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
   */

  var append =
  /*#__PURE__*/
  _curry2(function append(el, list) {
    return _concat(list, [el]);
  });

  /**
   * Checks if the input value is `null` or `undefined`.
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Type
   * @sig * -> Boolean
   * @param {*} x The value to test.
   * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
   * @example
   *
   *      R.isNil(null); //=> true
   *      R.isNil(undefined); //=> true
   *      R.isNil(0); //=> false
   *      R.isNil([]); //=> false
   */

  var isNil =
  /*#__PURE__*/
  _curry1(function isNil(x) {
    return x == null;
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

  /**
   * Returns the first element of the given list or string. In some libraries
   * this function is named `first`.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig [a] -> a | Undefined
   * @sig String -> String
   * @param {Array|String} list
   * @return {*}
   * @see R.tail, R.init, R.last
   * @example
   *
   *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
   *      R.head([]); //=> undefined
   *
   *      R.head('abc'); //=> 'a'
   *      R.head(''); //=> ''
   */

  var head =
  /*#__PURE__*/
  nth(0);

  function _identity(x) {
    return x;
  }

  /**
   * A function that does nothing but return the parameter supplied to it. Good
   * as a default or placeholder function.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig a -> a
   * @param {*} x The value to return.
   * @return {*} The input value, `x`.
   * @example
   *
   *      R.identity(1); //=> 1
   *
   *      const obj = {};
   *      R.identity(obj) === obj; //=> true
   * @symb R.identity(a) = a
   */

  var identity =
  /*#__PURE__*/
  _curry1(_identity);

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
   * Returns a function, `fn`, which encapsulates `if/else, if/else, ...` logic.
   * `R.cond` takes a list of [predicate, transformer] pairs. All of the arguments
   * to `fn` are applied to each of the predicates in turn until one returns a
   * "truthy" value, at which point `fn` returns the result of applying its
   * arguments to the corresponding transformer. If none of the predicates
   * matches, `fn` returns undefined.
   *
   * @func
   * @memberOf R
   * @since v0.6.0
   * @category Logic
   * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
   * @param {Array} pairs A list of [predicate, transformer]
   * @return {Function}
   * @see R.ifElse, R.unless, R.when
   * @example
   *
   *      const fn = R.cond([
   *        [R.equals(0),   R.always('water freezes at 0°C')],
   *        [R.equals(100), R.always('water boils at 100°C')],
   *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
   *      ]);
   *      fn(0); //=> 'water freezes at 0°C'
   *      fn(50); //=> 'nothing special happens at 50°C'
   *      fn(100); //=> 'water boils at 100°C'
   */

  var cond =
  /*#__PURE__*/
  _curry1(function cond(pairs) {
    var arity = reduce(max, 0, map$1(function (pair) {
      return pair[0].length;
    }, pairs));
    return _arity(arity, function () {
      var idx = 0;

      while (idx < pairs.length) {
        if (pairs[idx][0].apply(this, arguments)) {
          return pairs[idx][1].apply(this, arguments);
        }

        idx += 1;
      }
    });
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

  var XDrop =
  /*#__PURE__*/
  function () {
    function XDrop(n, xf) {
      this.xf = xf;
      this.n = n;
    }

    XDrop.prototype['@@transducer/init'] = _xfBase.init;
    XDrop.prototype['@@transducer/result'] = _xfBase.result;

    XDrop.prototype['@@transducer/step'] = function (result, input) {
      if (this.n > 0) {
        this.n -= 1;
        return result;
      }

      return this.xf['@@transducer/step'](result, input);
    };

    return XDrop;
  }();

  var _xdrop =
  /*#__PURE__*/
  _curry2(function _xdrop(n, xf) {
    return new XDrop(n, xf);
  });

  /**
   * Returns all but the first `n` elements of the given list, string, or
   * transducer/transformer (or object with a `drop` method).
   *
   * Dispatches to the `drop` method of the second argument, if present.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig Number -> [a] -> [a]
   * @sig Number -> String -> String
   * @param {Number} n
   * @param {*} list
   * @return {*} A copy of list without the first `n` elements
   * @see R.take, R.transduce, R.dropLast, R.dropWhile
   * @example
   *
   *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
   *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
   *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
   *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
   *      R.drop(3, 'ramda');               //=> 'da'
   */

  var drop =
  /*#__PURE__*/
  _curry2(
  /*#__PURE__*/
  _dispatchable(['drop'], _xdrop, function drop(n, xs) {
    return slice(Math.max(0, n), Infinity, xs);
  }));

  var XTake =
  /*#__PURE__*/
  function () {
    function XTake(n, xf) {
      this.xf = xf;
      this.n = n;
      this.i = 0;
    }

    XTake.prototype['@@transducer/init'] = _xfBase.init;
    XTake.prototype['@@transducer/result'] = _xfBase.result;

    XTake.prototype['@@transducer/step'] = function (result, input) {
      this.i += 1;
      var ret = this.n === 0 ? result : this.xf['@@transducer/step'](result, input);
      return this.n >= 0 && this.i >= this.n ? _reduced(ret) : ret;
    };

    return XTake;
  }();

  var _xtake =
  /*#__PURE__*/
  _curry2(function _xtake(n, xf) {
    return new XTake(n, xf);
  });

  /**
   * Returns the first `n` elements of the given list, string, or
   * transducer/transformer (or object with a `take` method).
   *
   * Dispatches to the `take` method of the second argument, if present.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig Number -> [a] -> [a]
   * @sig Number -> String -> String
   * @param {Number} n
   * @param {*} list
   * @return {*}
   * @see R.drop
   * @example
   *
   *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
   *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
   *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
   *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
   *      R.take(3, 'ramda');               //=> 'ram'
   *
   *      const personnel = [
   *        'Dave Brubeck',
   *        'Paul Desmond',
   *        'Eugene Wright',
   *        'Joe Morello',
   *        'Gerry Mulligan',
   *        'Bob Bates',
   *        'Joe Dodge',
   *        'Ron Crotty'
   *      ];
   *
   *      const takeFive = R.take(5);
   *      takeFive(personnel);
   *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
   * @symb R.take(-1, [a, b]) = [a, b]
   * @symb R.take(0, [a, b]) = []
   * @symb R.take(1, [a, b]) = [a]
   * @symb R.take(2, [a, b]) = [a, b]
   */

  var take =
  /*#__PURE__*/
  _curry2(
  /*#__PURE__*/
  _dispatchable(['take'], _xtake, function take(n, xs) {
    return slice(0, n < 0 ? Infinity : n, xs);
  }));

  /**
   * Returns the last element of the given list or string.
   *
   * @func
   * @memberOf R
   * @since v0.1.4
   * @category List
   * @sig [a] -> a | Undefined
   * @sig String -> String
   * @param {*} list
   * @return {*}
   * @see R.init, R.head, R.tail
   * @example
   *
   *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
   *      R.last([]); //=> undefined
   *
   *      R.last('abc'); //=> 'c'
   *      R.last(''); //=> ''
   */

  var last =
  /*#__PURE__*/
  nth(-1);

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
   * Returns a new function much like the supplied one, except that the first two
   * arguments' order is reversed.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig ((a, b, c, ...) -> z) -> (b -> a -> c -> ... -> z)
   * @param {Function} fn The function to invoke with its first two parameters reversed.
   * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
   * @example
   *
   *      const mergeThree = (a, b, c) => [].concat(a, b, c);
   *
   *      mergeThree(1, 2, 3); //=> [1, 2, 3]
   *
   *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
   * @symb R.flip(f)(a, b, c) = f(b, a, c)
   */

  var flip =
  /*#__PURE__*/
  _curry1(function flip(fn) {
    return curryN(fn.length, function (a, b) {
      var args = Array.prototype.slice.call(arguments, 0);
      args[0] = b;
      args[1] = a;
      return fn.apply(this, args);
    });
  });

  /**
   * Returns `true` if the first argument is greater than or equal to the second;
   * `false` otherwise.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig Ord a => a -> a -> Boolean
   * @param {Number} a
   * @param {Number} b
   * @return {Boolean}
   * @see R.lte
   * @example
   *
   *      R.gte(2, 1); //=> true
   *      R.gte(2, 2); //=> true
   *      R.gte(2, 3); //=> false
   *      R.gte('a', 'z'); //=> false
   *      R.gte('z', 'a'); //=> true
   */

  var gte =
  /*#__PURE__*/
  _curry2(function gte(a, b) {
    return a >= b;
  });

  /**
   * Returns whether or not a path exists in an object. Only the object's
   * own properties are checked.
   *
   * @func
   * @memberOf R
   * @since v0.26.0
   * @category Object
   * @typedefn Idx = String | Int
   * @sig [Idx] -> {a} -> Boolean
   * @param {Array} path The path to use.
   * @param {Object} obj The object to check the path in.
   * @return {Boolean} Whether the path exists.
   * @see R.has
   * @example
   *
   *      R.hasPath(['a', 'b'], {a: {b: 2}});         // => true
   *      R.hasPath(['a', 'b'], {a: {b: undefined}}); // => true
   *      R.hasPath(['a', 'b'], {a: {c: 2}});         // => false
   *      R.hasPath(['a', 'b'], {});                  // => false
   */

  var hasPath =
  /*#__PURE__*/
  _curry2(function hasPath(_path, obj) {
    if (_path.length === 0 || isNil(obj)) {
      return false;
    }

    var val = obj;
    var idx = 0;

    while (idx < _path.length) {
      if (!isNil(val) && _has(_path[idx], val)) {
        val = val[_path[idx]];
        idx += 1;
      } else {
        return false;
      }
    }

    return true;
  });

  /**
   * Returns whether or not an object has an own property with the specified name
   *
   * @func
   * @memberOf R
   * @since v0.7.0
   * @category Object
   * @sig s -> {s: x} -> Boolean
   * @param {String} prop The name of the property to check for.
   * @param {Object} obj The object to query.
   * @return {Boolean} Whether the property exists.
   * @example
   *
   *      const hasName = R.has('name');
   *      hasName({name: 'alice'});   //=> true
   *      hasName({name: 'bob'});     //=> true
   *      hasName({});                //=> false
   *
   *      const point = {x: 0, y: 0};
   *      const pointHas = R.has(R.__, point);
   *      pointHas('x');  //=> true
   *      pointHas('y');  //=> true
   *      pointHas('z');  //=> false
   */

  var has =
  /*#__PURE__*/
  _curry2(function has(prop, obj) {
    return hasPath([prop], obj);
  });

  /**
   * Returns all but the last element of the given list or string.
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category List
   * @sig [a] -> [a]
   * @sig String -> String
   * @param {*} list
   * @return {*}
   * @see R.last, R.head, R.tail
   * @example
   *
   *      R.init([1, 2, 3]);  //=> [1, 2]
   *      R.init([1, 2]);     //=> [1]
   *      R.init([1]);        //=> []
   *      R.init([]);         //=> []
   *
   *      R.init('abc');  //=> 'ab'
   *      R.init('ab');   //=> 'a'
   *      R.init('a');    //=> ''
   *      R.init('');     //=> ''
   */

  var init =
  /*#__PURE__*/
  slice(0, -1);

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
   * See if an object (`val`) is an instance of the supplied constructor. This
   * function will check up the inheritance chain, if any.
   *
   * @func
   * @memberOf R
   * @since v0.3.0
   * @category Type
   * @sig (* -> {*}) -> a -> Boolean
   * @param {Object} ctor A constructor
   * @param {*} val The value to test
   * @return {Boolean}
   * @example
   *
   *      R.is(Object, {}); //=> true
   *      R.is(Number, 1); //=> true
   *      R.is(Object, 1); //=> false
   *      R.is(String, 's'); //=> true
   *      R.is(String, new String('')); //=> true
   *      R.is(Object, new String('')); //=> true
   *      R.is(Object, 's'); //=> false
   *      R.is(Number, {}); //=> false
   */

  var is =
  /*#__PURE__*/
  _curry2(function is(Ctor, val) {
    return val != null && val.constructor === Ctor || val instanceof Ctor;
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
   * Returns a new list with the given element at the front, followed by the
   * contents of the list.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig a -> [a] -> [a]
   * @param {*} el The item to add to the head of the output list.
   * @param {Array} list The array to add to the tail of the output list.
   * @return {Array} A new array.
   * @see R.append
   * @example
   *
   *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
   */

  var prepend =
  /*#__PURE__*/
  _curry2(function prepend(el, list) {
    return _concat([el], list);
  });

  /**
   * Returns `true` if the specified object property is equal, in
   * [`R.equals`](#equals) terms, to the given value; `false` otherwise.
   * You can test multiple properties with [`R.whereEq`](#whereEq).
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig String -> a -> Object -> Boolean
   * @param {String} name
   * @param {*} val
   * @param {*} obj
   * @return {Boolean}
   * @see R.whereEq, R.propSatisfies, R.equals
   * @example
   *
   *      const abby = {name: 'Abby', age: 7, hair: 'blond'};
   *      const fred = {name: 'Fred', age: 12, hair: 'brown'};
   *      const rusty = {name: 'Rusty', age: 10, hair: 'brown'};
   *      const alois = {name: 'Alois', age: 15, disposition: 'surly'};
   *      const kids = [abby, fred, rusty, alois];
   *      const hasBrownHair = R.propEq('hair', 'brown');
   *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
   */

  var propEq =
  /*#__PURE__*/
  _curry3(function propEq(name, val, obj) {
    return equals(val, obj[name]);
  });

  /**
   * Calls an input function `n` times, returning an array containing the results
   * of those function calls.
   *
   * `fn` is passed one argument: The current value of `n`, which begins at `0`
   * and is gradually incremented to `n - 1`.
   *
   * @func
   * @memberOf R
   * @since v0.2.3
   * @category List
   * @sig (Number -> a) -> Number -> [a]
   * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
   * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.
   * @return {Array} An array containing the return values of all calls to `fn`.
   * @see R.repeat
   * @example
   *
   *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
   * @symb R.times(f, 0) = []
   * @symb R.times(f, 1) = [f(0)]
   * @symb R.times(f, 2) = [f(0), f(1)]
   */

  var times =
  /*#__PURE__*/
  _curry2(function times(fn, n) {
    var len = Number(n);
    var idx = 0;
    var list;

    if (len < 0 || isNaN(len)) {
      throw new RangeError('n must be a non-negative number');
    }

    list = new Array(len);

    while (idx < len) {
      list[idx] = fn(idx);
      idx += 1;
    }

    return list;
  });

  /**
   * Returns a fixed list of size `n` containing a specified identical value.
   *
   * @func
   * @memberOf R
   * @since v0.1.1
   * @category List
   * @sig a -> n -> [a]
   * @param {*} value The value to repeat.
   * @param {Number} n The desired size of the output list.
   * @return {Array} A new array containing `n` `value`s.
   * @see R.times
   * @example
   *
   *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
   *
   *      const obj = {};
   *      const repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
   *      repeatedObjs[0] === repeatedObjs[1]; //=> true
   * @symb R.repeat(a, 0) = []
   * @symb R.repeat(a, 1) = [a]
   * @symb R.repeat(a, 2) = [a, a]
   */

  var repeat =
  /*#__PURE__*/
  _curry2(function repeat(value, n) {
    return times(always(value), n);
  });

  /**
   * Replace a substring or regex match in a string with a replacement.
   *
   * The first two parameters correspond to the parameters of the
   * `String.prototype.replace()` function, so the second parameter can also be a
   * function.
   *
   * @func
   * @memberOf R
   * @since v0.7.0
   * @category String
   * @sig RegExp|String -> String -> String -> String
   * @param {RegExp|String} pattern A regular expression or a substring to match.
   * @param {String} replacement The string to replace the matches with.
   * @param {String} str The String to do the search and replacement in.
   * @return {String} The result.
   * @example
   *
   *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
   *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
   *
   *      // Use the "g" (global) flag to replace all occurrences:
   *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
   */

  var replace =
  /*#__PURE__*/
  _curry3(function replace(regex, replacement, str) {
    return str.replace(regex, replacement);
  });

  /**
   * Returns a copy of the list, sorted according to the comparator function,
   * which should accept two values at a time and return a negative number if the
   * first value is smaller, a positive number if it's larger, and zero if they
   * are equal. Please note that this is a **copy** of the list. It does not
   * modify the original.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig ((a, a) -> Number) -> [a] -> [a]
   * @param {Function} comparator A sorting function :: a -> b -> Int
   * @param {Array} list The list to sort
   * @return {Array} a new array with its elements sorted by the comparator function.
   * @example
   *
   *      const diff = function(a, b) { return a - b; };
   *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
   */

  var sort =
  /*#__PURE__*/
  _curry2(function sort(comparator, list) {
    return Array.prototype.slice.call(list, 0).sort(comparator);
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
   * Checks if a list starts with the provided sublist.
   *
   * Similarly, checks if a string starts with the provided substring.
   *
   * @func
   * @memberOf R
   * @since v0.24.0
   * @category List
   * @sig [a] -> [a] -> Boolean
   * @sig String -> String -> Boolean
   * @param {*} prefix
   * @param {*} list
   * @return {Boolean}
   * @see R.endsWith
   * @example
   *
   *      R.startsWith('a', 'abc')                //=> true
   *      R.startsWith('b', 'abc')                //=> false
   *      R.startsWith(['a'], ['a', 'b', 'c'])    //=> true
   *      R.startsWith(['b'], ['a', 'b', 'c'])    //=> false
   */

  var startsWith =
  /*#__PURE__*/
  _curry2(function (prefix, list) {
    return equals(take(prefix.length, list), prefix);
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

  /**
   * Returns a new list without values in the first argument.
   * [`R.equals`](#equals) is used to determine equality.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category List
   * @sig [a] -> [a] -> [a]
   * @param {Array} list1 The values to be removed from `list2`.
   * @param {Array} list2 The array to remove values from.
   * @return {Array} The new array without values in `list1`.
   * @see R.transduce, R.difference, R.remove
   * @example
   *
   *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
   */

  var without =
  /*#__PURE__*/
  _curry2(function (xs, list) {
    return reject(flip(_includes)(xs), list);
  });

  const ref = 
    (query) => 
      ({ render }) => 
        is (Function, render) ? 
          render ().querySelector (query) 
          : null;

  const noShadow = (r) => render(r, { shadowRoot: false });
    

  const onCloseDialog = (host) => (evt) =>
    dispatch (host, 
              'refocus', 
              { bubbles: true, composed: true });

  const setOnCloseListener = (host) => (dialog) => {
    dialog.removeEventListener ('close', onCloseDialog (host));
    dialog.addEventListener ('close', onCloseDialog (host));
  };

  // A block is a single/multiline text with editing capabilities.

  // -------------------------- Predicates ---------------------------------

  const emptyBlock = (block) =>
    length (block.lines) === 1 && length (block.lines[0]) === 0;

  // ----------------------------- Caret -----------------------------------

  const caret = (block) => {
    let cursor = block.cursor;
    let lines = block.lines;
    let y = Math.min (Math.max (cursor [1], 0), length (lines) - 1);

    return [ Math.min (Math.max (cursor [0], 0), length (lines [y])), y ]
  };

  // ------------------------ Cursor movement ------------------------------

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

  const moveCursorTo = (cursor) => (block) =>
    evolve ({
      cursor: always (caret (evolve ({ cursor: always (cursor) }) (block)))
    }) (block);

  const moveCursorToEnd = (block) =>
    evolve ({
      cursor: update (0) (length (block.lines [block.cursor [1]]))
    }) (block);

  const moveCursorToStart = (block) =>
    evolve ({
      cursor: update (0) (0)
    }) (block);

  // ------------------------ Text modification ----------------------------

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

  const deleteText = (n) => (block) => {
    let cursor = caret (block);
    let height = length (block.lines) - 1;
    let width = length (block.lines [cursor [1]]);
    let line = block.lines [cursor [1]];
    let next_line = block.lines [cursor [1] + 1];

    return (cursor [1] === height && cursor [0] === width) || n === 0 ?
             block
             : n <= width - cursor [0] ?
               evolve ({ lines: update (cursor [1])
                                       (join 
                                          ('') 
                                          (remove (cursor [0]) 
                                                  (n) 
                                                  (line))),
                         cursor: always (cursor)})
                      (block)
               : cursor [0] === width ?
                 deleteText (n - 1)
                            (evolve ({
                               lines: 
                                 pipe (
                                   update (cursor [1])
                                          (line + next_line),
                                   remove (cursor [1] + 1) (1)),
                               cursor: always (cursor)}) (block))
                   : deleteText (n - (width - cursor [0]))
                                (deleteText (width - cursor [0])
                                            (block))
  };

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

  const deleteLine = (block) =>
    length (block.lines) === 1 ?
      evolve ({
        lines: always (['']),
        cursor: always ([0, 0])
      }) (block)
      : block.cursor [1] === 0 ?
        evolve ({
          lines: tail,
          cursor: always ([0, 0])
        }) (block)
        : evolve ({
            lines: addIndex (reject) ((l, idx) => idx === block.cursor [1]),
            cursor: always ([
                      length 
                        (block.lines 
                          [min (block.cursor [1] - 1) 
                               (length (block.lines) - 2)]), 
                      min (block.cursor [1]) (length (block.lines) - 2)
                    ])
          }) (block);
  // --------------------------- Autocompletion ----------------------------

  const willAutocomplete = (block) => {
    if (block.autocompletion !== '...' && block.autocompletion !== '') {
      let start = caret (block) [0];
      let end = start + length (block.autocompletion);
      let current_line = caret (block) [1];
      let text_after = slice (start) (end) (block.lines [current_line]);

      return text_after !== block.autocompletion
    } else {
      return false
    }
  };

  const autocomplete = (block) => {
    if (block.autocompletion !== '...' && block.autocompletion !== '') {
      let start = caret (block) [0];
      let end = start + length (block.autocompletion);
      let current_line = caret (block) [1];
      let text_after = slice (start) (end) (block.lines [current_line]);

      if (text_after !== block.autocompletion) {
        return insertText (block.autocompletion) (block)
      } else {
        return moveCursorTo ([end, current_line]) (block)
      }
    } else {
      return block
    }
  };

  // --------------------------- Block creation ----------------------------

  const createBlock = (text = ['']) => ({
    lines: text === null ? [''] : text,
    history: [],
    completions: [],
    autocompletion: '',
    cursor: [0, 0] // x -position on current line-
                   // y -number of current line-
  });

  // A document is made up of single/multiline blocks of text.

  const appendBlock = (block = createBlock ()) => (doc) =>
    evolve ({
      blocks: append (block),
      focused: always (length (doc.blocks))
    }) (doc);

  const insertBlockAfter = (block = createBlock ()) => (doc) =>
    evolve ({
      blocks: insert (doc.focused + 1) (block),
      focused: always (doc.focused + 1)
    }) (doc);

  const removeBlock = (idx) => (doc) =>
    evolve ({
      blocks: remove (idx) (1),
      focused: cond ([
                 [gte (length (doc.blocks) - 1), 
                    always (length (doc.blocks) - 2)],
                 [T, identity]])
    }) (doc);

  const updateBlock = (idx) => (block) => (doc) =>
    evolve ({
      blocks: update (idx) (block)
    }) (doc);

  const focusBlock = (idx) => (doc) =>
    evolve ({
      focused: idx >= 0 && idx < length (doc.blocks) ? always (idx) : identity
    }) (doc);

  const focusPreviousBlock = (doc) =>
    evolve ({
      focused: always (max (subtract (doc.focused) (1)) (0))
    }) (doc);

  const focusNextBlock = (doc) =>
    evolve ({
      focused: always (min (add (1) (doc.focused)) (length (doc.blocks) - 1))
    }) (doc);

  const focusedBlock = (doc) =>
    [doc.blocks [doc.focused], doc.focused];

  const createDocument = (blocks = [createBlock ()]) => ({
    blocks: blocks,
    focused: length (blocks) - 1
  });

  // A block renderer renders a block content and possibly


  // -------------------- Line rendering utilities -------------------------

  const htmlEntities = (t) => 
    replace (/</g) 
            ('&gt;') 
            (replace (/</g)
                     ('&lt;')
                     (replace (/ /g) ('&nbsp;') (t)));

  const lineDiv = (i) => (p) => (e) => (c) => (t) =>
     html`<div class="line" onclick=${ onclick (i) }>${ html ([p]) }${ html ([htmlEntities (e)]) }${ html ([c]) }${ html ([htmlEntities (t)]) }</div>`;

  const promptSpan = (first) =>
    first ?
      '<span class="prompt">&gt;&nbsp;</span>'
      : '<span class="prompt">…&nbsp;</span>';

  const caretSpan = (c) => {
    let character = 
      (c === ' ' || c === '' || c === undefined) ?
        '&nbsp;'
        : c;
    return '<span class="caret">' + character + '</span>'
  };

  const autocompletionSpan = (a) => (c) => 
    '<span class="autocompletion">' + caretSpan(c) +  a + '</span>';

  const renderLine = (idx) => (line) =>
    lineDiv (idx) 
            (promptSpan (idx === 0)) 
            ('') 
            ('') 
            (line);

  const renderCaretLine = 
    (idx) => (line) => (caret) => (autocompletion) => {
      let character = line [caret [0]];
      let isSpace = character === undefined 
                 || character === ' ' 
                 || character === '';
      let pre = slice (0) (caret [0]) (line);
      let post = slice (caret [0] + 1) (Infinity) (line);

      if (isSpace && length (autocompletion) > 0) {
        return lineDiv (idx)
                       (promptSpan (idx === 0)) 
                       (pre)
                       (autocompletionSpan 
                         (tail (autocompletion))
                         (head (autocompletion)))
                       (post)
      } else {
        return lineDiv (idx)
                       (promptSpan (idx === 0))
                       (pre)
                       (caretSpan (character))
                       (post)
      }
    };
   
  const renderLines = (block, focus = true) =>
    addIndex
      (map$1)
      ((line, idx) => focus && idx === block.cursor [1] ?
                        renderCaretLine (idx) 
                                        (line) 
                                        (caret (block))
                                        (block.autocompletion)
                        : renderLine (idx) (line))
      (block.lines);

  // ----------------------- Input block rendering -------------------------

  const onclick = (idx) => (host, evt) => {
    let charwidth = host.render ().querySelector ('.line').clientHeight / 2;
    let x = Math.floor (evt.x / charwidth) - 2; // 2 for prompt size
    dispatch (host, 'movecursorto', { detail: { line: idx, x: x },
                                      bubbles: true,
                                      composed: true });
  };

  const createRenderer = () => ({
    render: (block, focused) => html`
    ${ renderLines (block, focused) }
  `
  });

  // Reserved word lists for various dialects of the language

  var reservedWords = {
    3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
    5: "class enum extends super const export import",
    6: "enum",
    strict: "implements interface let package private protected public static yield",
    strictBind: "eval arguments"
  };

  // And the keywords

  var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";

  var keywords = {
    5: ecma5AndLessKeywords,
    "5module": ecma5AndLessKeywords + " export import",
    6: ecma5AndLessKeywords + " const class extends export import super"
  };

  var keywordRelationalOperator = /^in(stanceof)?$/;

  // ## Character categories

  // Big ugly regular expressions that match characters in the
  // whitespace, identifier, and identifier-start categories. These
  // are only applied when a character is found to actually have a
  // code point above 128.
  // Generated by `bin/generate-identifier-regex.js`.
  var nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u08a0-\u08b4\u08b6-\u08c7\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\u9ffc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7bf\ua7c2-\ua7ca\ua7f5-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
  var nonASCIIidentifierChars = "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08d3-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf\u1ac0\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1df9\u1dfb-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";

  var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
  var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

  nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;

  // These are a run-length and offset encoded representation of the
  // >0xffff code points that are a valid part of identifiers. The
  // offset starts at 0x10000, and each pair of numbers represents an
  // offset to the next range, and then a size of the range. They were
  // generated by bin/generate-identifier-regex.js

  // eslint-disable-next-line comma-spacing
  var astralIdentifierStartCodes = [0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,349,41,7,1,79,28,11,0,9,21,107,20,28,22,13,52,76,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,230,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,190,0,80,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,1237,43,8,8952,286,50,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,2357,44,11,6,17,0,370,43,1301,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42717,35,4148,12,221,3,5761,15,7472,3104,541,1507,4938];

  // eslint-disable-next-line comma-spacing
  var astralIdentifierCodes = [509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,370,1,154,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1014,0,2,54,8,3,82,0,12,1,19628,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,419,13,1495,6,110,6,6,9,4759,9,787719,239];

  // This has a complexity linear to the value of the code. The
  // assumption is that looking up astral identifier characters is
  // rare.
  function isInAstralSet(code, set) {
    var pos = 0x10000;
    for (var i = 0; i < set.length; i += 2) {
      pos += set[i];
      if (pos > code) { return false }
      pos += set[i + 1];
      if (pos >= code) { return true }
    }
  }

  // Test whether a given character code starts an identifier.

  function isIdentifierStart(code, astral) {
    if (code < 65) { return code === 36 }
    if (code < 91) { return true }
    if (code < 97) { return code === 95 }
    if (code < 123) { return true }
    if (code <= 0xffff) { return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code)) }
    if (astral === false) { return false }
    return isInAstralSet(code, astralIdentifierStartCodes)
  }

  // Test whether a given character is part of an identifier.

  function isIdentifierChar(code, astral) {
    if (code < 48) { return code === 36 }
    if (code < 58) { return true }
    if (code < 65) { return false }
    if (code < 91) { return true }
    if (code < 97) { return code === 95 }
    if (code < 123) { return true }
    if (code <= 0xffff) { return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code)) }
    if (astral === false) { return false }
    return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes)
  }

  // ## Token types

  // The assignment of fine-grained, information-carrying type objects
  // allows the tokenizer to store the information it has about a
  // token in a way that is very cheap for the parser to look up.

  // All token type variables start with an underscore, to make them
  // easy to recognize.

  // The `beforeExpr` property is used to disambiguate between regular
  // expressions and divisions. It is set on all token types that can
  // be followed by an expression (thus, a slash after them would be a
  // regular expression).
  //
  // The `startsExpr` property is used to check if the token ends a
  // `yield` expression. It is set on all token types that either can
  // directly start an expression (like a quotation mark) or can
  // continue an expression (like the body of a string).
  //
  // `isLoop` marks a keyword as starting a loop, which is important
  // to know when parsing a label, in order to allow or disallow
  // continue jumps to that label.

  var TokenType = function TokenType(label, conf) {
    if ( conf === void 0 ) conf = {};

    this.label = label;
    this.keyword = conf.keyword;
    this.beforeExpr = !!conf.beforeExpr;
    this.startsExpr = !!conf.startsExpr;
    this.isLoop = !!conf.isLoop;
    this.isAssign = !!conf.isAssign;
    this.prefix = !!conf.prefix;
    this.postfix = !!conf.postfix;
    this.binop = conf.binop || null;
    this.updateContext = null;
  };

  function binop(name, prec) {
    return new TokenType(name, {beforeExpr: true, binop: prec})
  }
  var beforeExpr = {beforeExpr: true}, startsExpr = {startsExpr: true};

  // Map keyword names to token types.

  var keywords$1 = {};

  // Succinct definitions of keyword token types
  function kw(name, options) {
    if ( options === void 0 ) options = {};

    options.keyword = name;
    return keywords$1[name] = new TokenType(name, options)
  }

  var types = {
    num: new TokenType("num", startsExpr),
    regexp: new TokenType("regexp", startsExpr),
    string: new TokenType("string", startsExpr),
    name: new TokenType("name", startsExpr),
    eof: new TokenType("eof"),

    // Punctuation token types.
    bracketL: new TokenType("[", {beforeExpr: true, startsExpr: true}),
    bracketR: new TokenType("]"),
    braceL: new TokenType("{", {beforeExpr: true, startsExpr: true}),
    braceR: new TokenType("}"),
    parenL: new TokenType("(", {beforeExpr: true, startsExpr: true}),
    parenR: new TokenType(")"),
    comma: new TokenType(",", beforeExpr),
    semi: new TokenType(";", beforeExpr),
    colon: new TokenType(":", beforeExpr),
    dot: new TokenType("."),
    question: new TokenType("?", beforeExpr),
    questionDot: new TokenType("?."),
    arrow: new TokenType("=>", beforeExpr),
    template: new TokenType("template"),
    invalidTemplate: new TokenType("invalidTemplate"),
    ellipsis: new TokenType("...", beforeExpr),
    backQuote: new TokenType("`", startsExpr),
    dollarBraceL: new TokenType("${", {beforeExpr: true, startsExpr: true}),

    // Operators. These carry several kinds of properties to help the
    // parser use them properly (the presence of these properties is
    // what categorizes them as operators).
    //
    // `binop`, when present, specifies that this operator is a binary
    // operator, and will refer to its precedence.
    //
    // `prefix` and `postfix` mark the operator as a prefix or postfix
    // unary operator.
    //
    // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
    // binary operators with a very low precedence, that should result
    // in AssignmentExpression nodes.

    eq: new TokenType("=", {beforeExpr: true, isAssign: true}),
    assign: new TokenType("_=", {beforeExpr: true, isAssign: true}),
    incDec: new TokenType("++/--", {prefix: true, postfix: true, startsExpr: true}),
    prefix: new TokenType("!/~", {beforeExpr: true, prefix: true, startsExpr: true}),
    logicalOR: binop("||", 1),
    logicalAND: binop("&&", 2),
    bitwiseOR: binop("|", 3),
    bitwiseXOR: binop("^", 4),
    bitwiseAND: binop("&", 5),
    equality: binop("==/!=/===/!==", 6),
    relational: binop("</>/<=/>=", 7),
    bitShift: binop("<</>>/>>>", 8),
    plusMin: new TokenType("+/-", {beforeExpr: true, binop: 9, prefix: true, startsExpr: true}),
    modulo: binop("%", 10),
    star: binop("*", 10),
    slash: binop("/", 10),
    starstar: new TokenType("**", {beforeExpr: true}),
    coalesce: binop("??", 1),

    // Keyword token types.
    _break: kw("break"),
    _case: kw("case", beforeExpr),
    _catch: kw("catch"),
    _continue: kw("continue"),
    _debugger: kw("debugger"),
    _default: kw("default", beforeExpr),
    _do: kw("do", {isLoop: true, beforeExpr: true}),
    _else: kw("else", beforeExpr),
    _finally: kw("finally"),
    _for: kw("for", {isLoop: true}),
    _function: kw("function", startsExpr),
    _if: kw("if"),
    _return: kw("return", beforeExpr),
    _switch: kw("switch"),
    _throw: kw("throw", beforeExpr),
    _try: kw("try"),
    _var: kw("var"),
    _const: kw("const"),
    _while: kw("while", {isLoop: true}),
    _with: kw("with"),
    _new: kw("new", {beforeExpr: true, startsExpr: true}),
    _this: kw("this", startsExpr),
    _super: kw("super", startsExpr),
    _class: kw("class", startsExpr),
    _extends: kw("extends", beforeExpr),
    _export: kw("export"),
    _import: kw("import", startsExpr),
    _null: kw("null", startsExpr),
    _true: kw("true", startsExpr),
    _false: kw("false", startsExpr),
    _in: kw("in", {beforeExpr: true, binop: 7}),
    _instanceof: kw("instanceof", {beforeExpr: true, binop: 7}),
    _typeof: kw("typeof", {beforeExpr: true, prefix: true, startsExpr: true}),
    _void: kw("void", {beforeExpr: true, prefix: true, startsExpr: true}),
    _delete: kw("delete", {beforeExpr: true, prefix: true, startsExpr: true})
  };

  // Matches a whole line break (where CRLF is considered a single
  // line break). Used to count lines.

  var lineBreak = /\r\n?|\n|\u2028|\u2029/;
  var lineBreakG = new RegExp(lineBreak.source, "g");

  function isNewLine(code, ecma2019String) {
    return code === 10 || code === 13 || (!ecma2019String && (code === 0x2028 || code === 0x2029))
  }

  var nonASCIIwhitespace = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;

  var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;

  var ref$1 = Object.prototype;
  var hasOwnProperty$1 = ref$1.hasOwnProperty;
  var toString$2 = ref$1.toString;

  // Checks if an object has a property.

  function has$1(obj, propName) {
    return hasOwnProperty$1.call(obj, propName)
  }

  var isArray = Array.isArray || (function (obj) { return (
    toString$2.call(obj) === "[object Array]"
  ); });

  function wordsRegexp(words) {
    return new RegExp("^(?:" + words.replace(/ /g, "|") + ")$")
  }

  // These are used when `options.locations` is on, for the
  // `startLoc` and `endLoc` properties.

  var Position = function Position(line, col) {
    this.line = line;
    this.column = col;
  };

  Position.prototype.offset = function offset (n) {
    return new Position(this.line, this.column + n)
  };

  var SourceLocation = function SourceLocation(p, start, end) {
    this.start = start;
    this.end = end;
    if (p.sourceFile !== null) { this.source = p.sourceFile; }
  };

  // The `getLineInfo` function is mostly useful when the
  // `locations` option is off (for performance reasons) and you
  // want to find the line/column position for a given character
  // offset. `input` should be the code string that the offset refers
  // into.

  function getLineInfo(input, offset) {
    for (var line = 1, cur = 0;;) {
      lineBreakG.lastIndex = cur;
      var match = lineBreakG.exec(input);
      if (match && match.index < offset) {
        ++line;
        cur = match.index + match[0].length;
      } else {
        return new Position(line, offset - cur)
      }
    }
  }

  // A second optional argument can be given to further configure
  // the parser process. These options are recognized:

  var defaultOptions = {
    // `ecmaVersion` indicates the ECMAScript version to parse. Must be
    // either 3, 5, 6 (2015), 7 (2016), 8 (2017), 9 (2018), or 10
    // (2019). This influences support for strict mode, the set of
    // reserved words, and support for new syntax features. The default
    // is 10.
    ecmaVersion: 10,
    // `sourceType` indicates the mode the code should be parsed in.
    // Can be either `"script"` or `"module"`. This influences global
    // strict mode and parsing of `import` and `export` declarations.
    sourceType: "script",
    // `onInsertedSemicolon` can be a callback that will be called
    // when a semicolon is automatically inserted. It will be passed
    // the position of the comma as an offset, and if `locations` is
    // enabled, it is given the location as a `{line, column}` object
    // as second argument.
    onInsertedSemicolon: null,
    // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
    // trailing commas.
    onTrailingComma: null,
    // By default, reserved words are only enforced if ecmaVersion >= 5.
    // Set `allowReserved` to a boolean value to explicitly turn this on
    // an off. When this option has the value "never", reserved words
    // and keywords can also not be used as property names.
    allowReserved: null,
    // When enabled, a return at the top level is not considered an
    // error.
    allowReturnOutsideFunction: false,
    // When enabled, import/export statements are not constrained to
    // appearing at the top of the program.
    allowImportExportEverywhere: false,
    // When enabled, await identifiers are allowed to appear at the top-level scope,
    // but they are still not allowed in non-async functions.
    allowAwaitOutsideFunction: false,
    // When enabled, hashbang directive in the beginning of file
    // is allowed and treated as a line comment.
    allowHashBang: false,
    // When `locations` is on, `loc` properties holding objects with
    // `start` and `end` properties in `{line, column}` form (with
    // line being 1-based and column 0-based) will be attached to the
    // nodes.
    locations: false,
    // A function can be passed as `onToken` option, which will
    // cause Acorn to call that function with object in the same
    // format as tokens returned from `tokenizer().getToken()`. Note
    // that you are not allowed to call the parser from the
    // callback—that will corrupt its internal state.
    onToken: null,
    // A function can be passed as `onComment` option, which will
    // cause Acorn to call that function with `(block, text, start,
    // end)` parameters whenever a comment is skipped. `block` is a
    // boolean indicating whether this is a block (`/* */`) comment,
    // `text` is the content of the comment, and `start` and `end` are
    // character offsets that denote the start and end of the comment.
    // When the `locations` option is on, two more parameters are
    // passed, the full `{line, column}` locations of the start and
    // end of the comments. Note that you are not allowed to call the
    // parser from the callback—that will corrupt its internal state.
    onComment: null,
    // Nodes have their start and end characters offsets recorded in
    // `start` and `end` properties (directly on the node, rather than
    // the `loc` object, which holds line/column data. To also add a
    // [semi-standardized][range] `range` property holding a `[start,
    // end]` array with the same numbers, set the `ranges` option to
    // `true`.
    //
    // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
    ranges: false,
    // It is possible to parse multiple files into a single AST by
    // passing the tree produced by parsing the first file as
    // `program` option in subsequent parses. This will add the
    // toplevel forms of the parsed file to the `Program` (top) node
    // of an existing parse tree.
    program: null,
    // When `locations` is on, you can pass this to record the source
    // file in every node's `loc` object.
    sourceFile: null,
    // This value, if given, is stored in every node, whether
    // `locations` is on or off.
    directSourceFile: null,
    // When enabled, parenthesized expressions are represented by
    // (non-standard) ParenthesizedExpression nodes
    preserveParens: false
  };

  // Interpret and default an options object

  function getOptions(opts) {
    var options = {};

    for (var opt in defaultOptions)
      { options[opt] = opts && has$1(opts, opt) ? opts[opt] : defaultOptions[opt]; }

    if (options.ecmaVersion >= 2015)
      { options.ecmaVersion -= 2009; }

    if (options.allowReserved == null)
      { options.allowReserved = options.ecmaVersion < 5; }

    if (isArray(options.onToken)) {
      var tokens = options.onToken;
      options.onToken = function (token) { return tokens.push(token); };
    }
    if (isArray(options.onComment))
      { options.onComment = pushComment(options, options.onComment); }

    return options
  }

  function pushComment(options, array) {
    return function(block, text, start, end, startLoc, endLoc) {
      var comment = {
        type: block ? "Block" : "Line",
        value: text,
        start: start,
        end: end
      };
      if (options.locations)
        { comment.loc = new SourceLocation(this, startLoc, endLoc); }
      if (options.ranges)
        { comment.range = [start, end]; }
      array.push(comment);
    }
  }

  // Each scope gets a bitset that may contain these flags
  var
      SCOPE_TOP = 1,
      SCOPE_FUNCTION = 2,
      SCOPE_VAR = SCOPE_TOP | SCOPE_FUNCTION,
      SCOPE_ASYNC = 4,
      SCOPE_GENERATOR = 8,
      SCOPE_ARROW = 16,
      SCOPE_SIMPLE_CATCH = 32,
      SCOPE_SUPER = 64,
      SCOPE_DIRECT_SUPER = 128;

  function functionFlags(async, generator) {
    return SCOPE_FUNCTION | (async ? SCOPE_ASYNC : 0) | (generator ? SCOPE_GENERATOR : 0)
  }

  // Used in checkLVal and declareName to determine the type of a binding
  var
      BIND_NONE = 0, // Not a binding
      BIND_VAR = 1, // Var-style binding
      BIND_LEXICAL = 2, // Let- or const-style binding
      BIND_FUNCTION = 3, // Function declaration
      BIND_SIMPLE_CATCH = 4, // Simple (identifier pattern) catch binding
      BIND_OUTSIDE = 5; // Special case for function names as bound inside the function

  var Parser = function Parser(options, input, startPos) {
    this.options = options = getOptions(options);
    this.sourceFile = options.sourceFile;
    this.keywords = wordsRegexp(keywords[options.ecmaVersion >= 6 ? 6 : options.sourceType === "module" ? "5module" : 5]);
    var reserved = "";
    if (options.allowReserved !== true) {
      for (var v = options.ecmaVersion;; v--)
        { if (reserved = reservedWords[v]) { break } }
      if (options.sourceType === "module") { reserved += " await"; }
    }
    this.reservedWords = wordsRegexp(reserved);
    var reservedStrict = (reserved ? reserved + " " : "") + reservedWords.strict;
    this.reservedWordsStrict = wordsRegexp(reservedStrict);
    this.reservedWordsStrictBind = wordsRegexp(reservedStrict + " " + reservedWords.strictBind);
    this.input = String(input);

    // Used to signal to callers of `readWord1` whether the word
    // contained any escape sequences. This is needed because words with
    // escape sequences must not be interpreted as keywords.
    this.containsEsc = false;

    // Set up token state

    // The current position of the tokenizer in the input.
    if (startPos) {
      this.pos = startPos;
      this.lineStart = this.input.lastIndexOf("\n", startPos - 1) + 1;
      this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;
    } else {
      this.pos = this.lineStart = 0;
      this.curLine = 1;
    }

    // Properties of the current token:
    // Its type
    this.type = types.eof;
    // For tokens that include more information than their type, the value
    this.value = null;
    // Its start and end offset
    this.start = this.end = this.pos;
    // And, if locations are used, the {line, column} object
    // corresponding to those offsets
    this.startLoc = this.endLoc = this.curPosition();

    // Position information for the previous token
    this.lastTokEndLoc = this.lastTokStartLoc = null;
    this.lastTokStart = this.lastTokEnd = this.pos;

    // The context stack is used to superficially track syntactic
    // context to predict whether a regular expression is allowed in a
    // given position.
    this.context = this.initialContext();
    this.exprAllowed = true;

    // Figure out if it's a module code.
    this.inModule = options.sourceType === "module";
    this.strict = this.inModule || this.strictDirective(this.pos);

    // Used to signify the start of a potential arrow function
    this.potentialArrowAt = -1;

    // Positions to delayed-check that yield/await does not exist in default parameters.
    this.yieldPos = this.awaitPos = this.awaitIdentPos = 0;
    // Labels in scope.
    this.labels = [];
    // Thus-far undefined exports.
    this.undefinedExports = {};

    // If enabled, skip leading hashbang line.
    if (this.pos === 0 && options.allowHashBang && this.input.slice(0, 2) === "#!")
      { this.skipLineComment(2); }

    // Scope tracking for duplicate variable names (see scope.js)
    this.scopeStack = [];
    this.enterScope(SCOPE_TOP);

    // For RegExp validation
    this.regexpState = null;
  };

  var prototypeAccessors = { inFunction: { configurable: true },inGenerator: { configurable: true },inAsync: { configurable: true },allowSuper: { configurable: true },allowDirectSuper: { configurable: true },treatFunctionsAsVar: { configurable: true } };

  Parser.prototype.parse = function parse () {
    var node = this.options.program || this.startNode();
    this.nextToken();
    return this.parseTopLevel(node)
  };

  prototypeAccessors.inFunction.get = function () { return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0 };
  prototypeAccessors.inGenerator.get = function () { return (this.currentVarScope().flags & SCOPE_GENERATOR) > 0 };
  prototypeAccessors.inAsync.get = function () { return (this.currentVarScope().flags & SCOPE_ASYNC) > 0 };
  prototypeAccessors.allowSuper.get = function () { return (this.currentThisScope().flags & SCOPE_SUPER) > 0 };
  prototypeAccessors.allowDirectSuper.get = function () { return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0 };
  prototypeAccessors.treatFunctionsAsVar.get = function () { return this.treatFunctionsAsVarInScope(this.currentScope()) };

  // Switch to a getter for 7.0.0.
  Parser.prototype.inNonArrowFunction = function inNonArrowFunction () { return (this.currentThisScope().flags & SCOPE_FUNCTION) > 0 };

  Parser.extend = function extend () {
      var plugins = [], len = arguments.length;
      while ( len-- ) plugins[ len ] = arguments[ len ];

    var cls = this;
    for (var i = 0; i < plugins.length; i++) { cls = plugins[i](cls); }
    return cls
  };

  Parser.parse = function parse (input, options) {
    return new this(options, input).parse()
  };

  Parser.parseExpressionAt = function parseExpressionAt (input, pos, options) {
    var parser = new this(options, input, pos);
    parser.nextToken();
    return parser.parseExpression()
  };

  Parser.tokenizer = function tokenizer (input, options) {
    return new this(options, input)
  };

  Object.defineProperties( Parser.prototype, prototypeAccessors );

  var pp = Parser.prototype;

  // ## Parser utilities

  var literal = /^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)")/;
  pp.strictDirective = function(start) {
    for (;;) {
      // Try to find string literal.
      skipWhiteSpace.lastIndex = start;
      start += skipWhiteSpace.exec(this.input)[0].length;
      var match = literal.exec(this.input.slice(start));
      if (!match) { return false }
      if ((match[1] || match[2]) === "use strict") {
        skipWhiteSpace.lastIndex = start + match[0].length;
        var spaceAfter = skipWhiteSpace.exec(this.input), end = spaceAfter.index + spaceAfter[0].length;
        var next = this.input.charAt(end);
        return next === ";" || next === "}" ||
          (lineBreak.test(spaceAfter[0]) &&
           !(/[(`.[+\-/*%<>=,?^&]/.test(next) || next === "!" && this.input.charAt(end + 1) === "="))
      }
      start += match[0].length;

      // Skip semicolon, if any.
      skipWhiteSpace.lastIndex = start;
      start += skipWhiteSpace.exec(this.input)[0].length;
      if (this.input[start] === ";")
        { start++; }
    }
  };

  // Predicate that tests whether the next token is of the given
  // type, and if yes, consumes it as a side effect.

  pp.eat = function(type) {
    if (this.type === type) {
      this.next();
      return true
    } else {
      return false
    }
  };

  // Tests whether parsed token is a contextual keyword.

  pp.isContextual = function(name) {
    return this.type === types.name && this.value === name && !this.containsEsc
  };

  // Consumes contextual keyword if possible.

  pp.eatContextual = function(name) {
    if (!this.isContextual(name)) { return false }
    this.next();
    return true
  };

  // Asserts that following token is given contextual keyword.

  pp.expectContextual = function(name) {
    if (!this.eatContextual(name)) { this.unexpected(); }
  };

  // Test whether a semicolon can be inserted at the current position.

  pp.canInsertSemicolon = function() {
    return this.type === types.eof ||
      this.type === types.braceR ||
      lineBreak.test(this.input.slice(this.lastTokEnd, this.start))
  };

  pp.insertSemicolon = function() {
    if (this.canInsertSemicolon()) {
      if (this.options.onInsertedSemicolon)
        { this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc); }
      return true
    }
  };

  // Consume a semicolon, or, failing that, see if we are allowed to
  // pretend that there is a semicolon at this position.

  pp.semicolon = function() {
    if (!this.eat(types.semi) && !this.insertSemicolon()) { this.unexpected(); }
  };

  pp.afterTrailingComma = function(tokType, notNext) {
    if (this.type === tokType) {
      if (this.options.onTrailingComma)
        { this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc); }
      if (!notNext)
        { this.next(); }
      return true
    }
  };

  // Expect a token of a given type. If found, consume it, otherwise,
  // raise an unexpected token error.

  pp.expect = function(type) {
    this.eat(type) || this.unexpected();
  };

  // Raise an unexpected token error.

  pp.unexpected = function(pos) {
    this.raise(pos != null ? pos : this.start, "Unexpected token");
  };

  function DestructuringErrors() {
    this.shorthandAssign =
    this.trailingComma =
    this.parenthesizedAssign =
    this.parenthesizedBind =
    this.doubleProto =
      -1;
  }

  pp.checkPatternErrors = function(refDestructuringErrors, isAssign) {
    if (!refDestructuringErrors) { return }
    if (refDestructuringErrors.trailingComma > -1)
      { this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element"); }
    var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
    if (parens > -1) { this.raiseRecoverable(parens, "Parenthesized pattern"); }
  };

  pp.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
    if (!refDestructuringErrors) { return false }
    var shorthandAssign = refDestructuringErrors.shorthandAssign;
    var doubleProto = refDestructuringErrors.doubleProto;
    if (!andThrow) { return shorthandAssign >= 0 || doubleProto >= 0 }
    if (shorthandAssign >= 0)
      { this.raise(shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns"); }
    if (doubleProto >= 0)
      { this.raiseRecoverable(doubleProto, "Redefinition of __proto__ property"); }
  };

  pp.checkYieldAwaitInDefaultParams = function() {
    if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos))
      { this.raise(this.yieldPos, "Yield expression cannot be a default value"); }
    if (this.awaitPos)
      { this.raise(this.awaitPos, "Await expression cannot be a default value"); }
  };

  pp.isSimpleAssignTarget = function(expr) {
    if (expr.type === "ParenthesizedExpression")
      { return this.isSimpleAssignTarget(expr.expression) }
    return expr.type === "Identifier" || expr.type === "MemberExpression"
  };

  var pp$1 = Parser.prototype;

  // ### Statement parsing

  // Parse a program. Initializes the parser, reads any number of
  // statements, and wraps them in a Program node.  Optionally takes a
  // `program` argument.  If present, the statements will be appended
  // to its body instead of creating a new node.

  pp$1.parseTopLevel = function(node) {
    var exports = {};
    if (!node.body) { node.body = []; }
    while (this.type !== types.eof) {
      var stmt = this.parseStatement(null, true, exports);
      node.body.push(stmt);
    }
    if (this.inModule)
      { for (var i = 0, list = Object.keys(this.undefinedExports); i < list.length; i += 1)
        {
          var name = list[i];

          this.raiseRecoverable(this.undefinedExports[name].start, ("Export '" + name + "' is not defined"));
        } }
    this.adaptDirectivePrologue(node.body);
    this.next();
    node.sourceType = this.options.sourceType;
    return this.finishNode(node, "Program")
  };

  var loopLabel = {kind: "loop"}, switchLabel = {kind: "switch"};

  pp$1.isLet = function(context) {
    if (this.options.ecmaVersion < 6 || !this.isContextual("let")) { return false }
    skipWhiteSpace.lastIndex = this.pos;
    var skip = skipWhiteSpace.exec(this.input);
    var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
    // For ambiguous cases, determine if a LexicalDeclaration (or only a
    // Statement) is allowed here. If context is not empty then only a Statement
    // is allowed. However, `let [` is an explicit negative lookahead for
    // ExpressionStatement, so special-case it first.
    if (nextCh === 91) { return true } // '['
    if (context) { return false }

    if (nextCh === 123) { return true } // '{'
    if (isIdentifierStart(nextCh, true)) {
      var pos = next + 1;
      while (isIdentifierChar(this.input.charCodeAt(pos), true)) { ++pos; }
      var ident = this.input.slice(next, pos);
      if (!keywordRelationalOperator.test(ident)) { return true }
    }
    return false
  };

  // check 'async [no LineTerminator here] function'
  // - 'async /*foo*/ function' is OK.
  // - 'async /*\n*/ function' is invalid.
  pp$1.isAsyncFunction = function() {
    if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
      { return false }

    skipWhiteSpace.lastIndex = this.pos;
    var skip = skipWhiteSpace.exec(this.input);
    var next = this.pos + skip[0].length;
    return !lineBreak.test(this.input.slice(this.pos, next)) &&
      this.input.slice(next, next + 8) === "function" &&
      (next + 8 === this.input.length || !isIdentifierChar(this.input.charAt(next + 8)))
  };

  // Parse a single statement.
  //
  // If expecting a statement and finding a slash operator, parse a
  // regular expression literal. This is to handle cases like
  // `if (foo) /blah/.exec(foo)`, where looking at the previous token
  // does not help.

  pp$1.parseStatement = function(context, topLevel, exports) {
    var starttype = this.type, node = this.startNode(), kind;

    if (this.isLet(context)) {
      starttype = types._var;
      kind = "let";
    }

    // Most types of statements are recognized by the keyword they
    // start with. Many are trivial to parse, some require a bit of
    // complexity.

    switch (starttype) {
    case types._break: case types._continue: return this.parseBreakContinueStatement(node, starttype.keyword)
    case types._debugger: return this.parseDebuggerStatement(node)
    case types._do: return this.parseDoStatement(node)
    case types._for: return this.parseForStatement(node)
    case types._function:
      // Function as sole body of either an if statement or a labeled statement
      // works, but not when it is part of a labeled statement that is the sole
      // body of an if statement.
      if ((context && (this.strict || context !== "if" && context !== "label")) && this.options.ecmaVersion >= 6) { this.unexpected(); }
      return this.parseFunctionStatement(node, false, !context)
    case types._class:
      if (context) { this.unexpected(); }
      return this.parseClass(node, true)
    case types._if: return this.parseIfStatement(node)
    case types._return: return this.parseReturnStatement(node)
    case types._switch: return this.parseSwitchStatement(node)
    case types._throw: return this.parseThrowStatement(node)
    case types._try: return this.parseTryStatement(node)
    case types._const: case types._var:
      kind = kind || this.value;
      if (context && kind !== "var") { this.unexpected(); }
      return this.parseVarStatement(node, kind)
    case types._while: return this.parseWhileStatement(node)
    case types._with: return this.parseWithStatement(node)
    case types.braceL: return this.parseBlock(true, node)
    case types.semi: return this.parseEmptyStatement(node)
    case types._export:
    case types._import:
      if (this.options.ecmaVersion > 10 && starttype === types._import) {
        skipWhiteSpace.lastIndex = this.pos;
        var skip = skipWhiteSpace.exec(this.input);
        var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
        if (nextCh === 40 || nextCh === 46) // '(' or '.'
          { return this.parseExpressionStatement(node, this.parseExpression()) }
      }

      if (!this.options.allowImportExportEverywhere) {
        if (!topLevel)
          { this.raise(this.start, "'import' and 'export' may only appear at the top level"); }
        if (!this.inModule)
          { this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'"); }
      }
      return starttype === types._import ? this.parseImport(node) : this.parseExport(node, exports)

      // If the statement does not start with a statement keyword or a
      // brace, it's an ExpressionStatement or LabeledStatement. We
      // simply start parsing an expression, and afterwards, if the
      // next token is a colon and the expression was a simple
      // Identifier node, we switch to interpreting it as a label.
    default:
      if (this.isAsyncFunction()) {
        if (context) { this.unexpected(); }
        this.next();
        return this.parseFunctionStatement(node, true, !context)
      }

      var maybeName = this.value, expr = this.parseExpression();
      if (starttype === types.name && expr.type === "Identifier" && this.eat(types.colon))
        { return this.parseLabeledStatement(node, maybeName, expr, context) }
      else { return this.parseExpressionStatement(node, expr) }
    }
  };

  pp$1.parseBreakContinueStatement = function(node, keyword) {
    var isBreak = keyword === "break";
    this.next();
    if (this.eat(types.semi) || this.insertSemicolon()) { node.label = null; }
    else if (this.type !== types.name) { this.unexpected(); }
    else {
      node.label = this.parseIdent();
      this.semicolon();
    }

    // Verify that there is an actual destination to break or
    // continue to.
    var i = 0;
    for (; i < this.labels.length; ++i) {
      var lab = this.labels[i];
      if (node.label == null || lab.name === node.label.name) {
        if (lab.kind != null && (isBreak || lab.kind === "loop")) { break }
        if (node.label && isBreak) { break }
      }
    }
    if (i === this.labels.length) { this.raise(node.start, "Unsyntactic " + keyword); }
    return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement")
  };

  pp$1.parseDebuggerStatement = function(node) {
    this.next();
    this.semicolon();
    return this.finishNode(node, "DebuggerStatement")
  };

  pp$1.parseDoStatement = function(node) {
    this.next();
    this.labels.push(loopLabel);
    node.body = this.parseStatement("do");
    this.labels.pop();
    this.expect(types._while);
    node.test = this.parseParenExpression();
    if (this.options.ecmaVersion >= 6)
      { this.eat(types.semi); }
    else
      { this.semicolon(); }
    return this.finishNode(node, "DoWhileStatement")
  };

  // Disambiguating between a `for` and a `for`/`in` or `for`/`of`
  // loop is non-trivial. Basically, we have to parse the init `var`
  // statement or expression, disallowing the `in` operator (see
  // the second parameter to `parseExpression`), and then check
  // whether the next token is `in` or `of`. When there is no init
  // part (semicolon immediately after the opening parenthesis), it
  // is a regular `for` loop.

  pp$1.parseForStatement = function(node) {
    this.next();
    var awaitAt = (this.options.ecmaVersion >= 9 && (this.inAsync || (!this.inFunction && this.options.allowAwaitOutsideFunction)) && this.eatContextual("await")) ? this.lastTokStart : -1;
    this.labels.push(loopLabel);
    this.enterScope(0);
    this.expect(types.parenL);
    if (this.type === types.semi) {
      if (awaitAt > -1) { this.unexpected(awaitAt); }
      return this.parseFor(node, null)
    }
    var isLet = this.isLet();
    if (this.type === types._var || this.type === types._const || isLet) {
      var init$1 = this.startNode(), kind = isLet ? "let" : this.value;
      this.next();
      this.parseVar(init$1, true, kind);
      this.finishNode(init$1, "VariableDeclaration");
      if ((this.type === types._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))) && init$1.declarations.length === 1) {
        if (this.options.ecmaVersion >= 9) {
          if (this.type === types._in) {
            if (awaitAt > -1) { this.unexpected(awaitAt); }
          } else { node.await = awaitAt > -1; }
        }
        return this.parseForIn(node, init$1)
      }
      if (awaitAt > -1) { this.unexpected(awaitAt); }
      return this.parseFor(node, init$1)
    }
    var refDestructuringErrors = new DestructuringErrors;
    var init = this.parseExpression(true, refDestructuringErrors);
    if (this.type === types._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
      if (this.options.ecmaVersion >= 9) {
        if (this.type === types._in) {
          if (awaitAt > -1) { this.unexpected(awaitAt); }
        } else { node.await = awaitAt > -1; }
      }
      this.toAssignable(init, false, refDestructuringErrors);
      this.checkLVal(init);
      return this.parseForIn(node, init)
    } else {
      this.checkExpressionErrors(refDestructuringErrors, true);
    }
    if (awaitAt > -1) { this.unexpected(awaitAt); }
    return this.parseFor(node, init)
  };

  pp$1.parseFunctionStatement = function(node, isAsync, declarationPosition) {
    this.next();
    return this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), false, isAsync)
  };

  pp$1.parseIfStatement = function(node) {
    this.next();
    node.test = this.parseParenExpression();
    // allow function declarations in branches, but only in non-strict mode
    node.consequent = this.parseStatement("if");
    node.alternate = this.eat(types._else) ? this.parseStatement("if") : null;
    return this.finishNode(node, "IfStatement")
  };

  pp$1.parseReturnStatement = function(node) {
    if (!this.inFunction && !this.options.allowReturnOutsideFunction)
      { this.raise(this.start, "'return' outside of function"); }
    this.next();

    // In `return` (and `break`/`continue`), the keywords with
    // optional arguments, we eagerly look for a semicolon or the
    // possibility to insert one.

    if (this.eat(types.semi) || this.insertSemicolon()) { node.argument = null; }
    else { node.argument = this.parseExpression(); this.semicolon(); }
    return this.finishNode(node, "ReturnStatement")
  };

  pp$1.parseSwitchStatement = function(node) {
    this.next();
    node.discriminant = this.parseParenExpression();
    node.cases = [];
    this.expect(types.braceL);
    this.labels.push(switchLabel);
    this.enterScope(0);

    // Statements under must be grouped (by label) in SwitchCase
    // nodes. `cur` is used to keep the node that we are currently
    // adding statements to.

    var cur;
    for (var sawDefault = false; this.type !== types.braceR;) {
      if (this.type === types._case || this.type === types._default) {
        var isCase = this.type === types._case;
        if (cur) { this.finishNode(cur, "SwitchCase"); }
        node.cases.push(cur = this.startNode());
        cur.consequent = [];
        this.next();
        if (isCase) {
          cur.test = this.parseExpression();
        } else {
          if (sawDefault) { this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"); }
          sawDefault = true;
          cur.test = null;
        }
        this.expect(types.colon);
      } else {
        if (!cur) { this.unexpected(); }
        cur.consequent.push(this.parseStatement(null));
      }
    }
    this.exitScope();
    if (cur) { this.finishNode(cur, "SwitchCase"); }
    this.next(); // Closing brace
    this.labels.pop();
    return this.finishNode(node, "SwitchStatement")
  };

  pp$1.parseThrowStatement = function(node) {
    this.next();
    if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start)))
      { this.raise(this.lastTokEnd, "Illegal newline after throw"); }
    node.argument = this.parseExpression();
    this.semicolon();
    return this.finishNode(node, "ThrowStatement")
  };

  // Reused empty array added for node fields that are always empty.

  var empty = [];

  pp$1.parseTryStatement = function(node) {
    this.next();
    node.block = this.parseBlock();
    node.handler = null;
    if (this.type === types._catch) {
      var clause = this.startNode();
      this.next();
      if (this.eat(types.parenL)) {
        clause.param = this.parseBindingAtom();
        var simple = clause.param.type === "Identifier";
        this.enterScope(simple ? SCOPE_SIMPLE_CATCH : 0);
        this.checkLVal(clause.param, simple ? BIND_SIMPLE_CATCH : BIND_LEXICAL);
        this.expect(types.parenR);
      } else {
        if (this.options.ecmaVersion < 10) { this.unexpected(); }
        clause.param = null;
        this.enterScope(0);
      }
      clause.body = this.parseBlock(false);
      this.exitScope();
      node.handler = this.finishNode(clause, "CatchClause");
    }
    node.finalizer = this.eat(types._finally) ? this.parseBlock() : null;
    if (!node.handler && !node.finalizer)
      { this.raise(node.start, "Missing catch or finally clause"); }
    return this.finishNode(node, "TryStatement")
  };

  pp$1.parseVarStatement = function(node, kind) {
    this.next();
    this.parseVar(node, false, kind);
    this.semicolon();
    return this.finishNode(node, "VariableDeclaration")
  };

  pp$1.parseWhileStatement = function(node) {
    this.next();
    node.test = this.parseParenExpression();
    this.labels.push(loopLabel);
    node.body = this.parseStatement("while");
    this.labels.pop();
    return this.finishNode(node, "WhileStatement")
  };

  pp$1.parseWithStatement = function(node) {
    if (this.strict) { this.raise(this.start, "'with' in strict mode"); }
    this.next();
    node.object = this.parseParenExpression();
    node.body = this.parseStatement("with");
    return this.finishNode(node, "WithStatement")
  };

  pp$1.parseEmptyStatement = function(node) {
    this.next();
    return this.finishNode(node, "EmptyStatement")
  };

  pp$1.parseLabeledStatement = function(node, maybeName, expr, context) {
    for (var i$1 = 0, list = this.labels; i$1 < list.length; i$1 += 1)
      {
      var label = list[i$1];

      if (label.name === maybeName)
        { this.raise(expr.start, "Label '" + maybeName + "' is already declared");
    } }
    var kind = this.type.isLoop ? "loop" : this.type === types._switch ? "switch" : null;
    for (var i = this.labels.length - 1; i >= 0; i--) {
      var label$1 = this.labels[i];
      if (label$1.statementStart === node.start) {
        // Update information about previous labels on this node
        label$1.statementStart = this.start;
        label$1.kind = kind;
      } else { break }
    }
    this.labels.push({name: maybeName, kind: kind, statementStart: this.start});
    node.body = this.parseStatement(context ? context.indexOf("label") === -1 ? context + "label" : context : "label");
    this.labels.pop();
    node.label = expr;
    return this.finishNode(node, "LabeledStatement")
  };

  pp$1.parseExpressionStatement = function(node, expr) {
    node.expression = expr;
    this.semicolon();
    return this.finishNode(node, "ExpressionStatement")
  };

  // Parse a semicolon-enclosed block of statements, handling `"use
  // strict"` declarations when `allowStrict` is true (used for
  // function bodies).

  pp$1.parseBlock = function(createNewLexicalScope, node, exitStrict) {
    if ( createNewLexicalScope === void 0 ) createNewLexicalScope = true;
    if ( node === void 0 ) node = this.startNode();

    node.body = [];
    this.expect(types.braceL);
    if (createNewLexicalScope) { this.enterScope(0); }
    while (this.type !== types.braceR) {
      var stmt = this.parseStatement(null);
      node.body.push(stmt);
    }
    if (exitStrict) { this.strict = false; }
    this.next();
    if (createNewLexicalScope) { this.exitScope(); }
    return this.finishNode(node, "BlockStatement")
  };

  // Parse a regular `for` loop. The disambiguation code in
  // `parseStatement` will already have parsed the init statement or
  // expression.

  pp$1.parseFor = function(node, init) {
    node.init = init;
    this.expect(types.semi);
    node.test = this.type === types.semi ? null : this.parseExpression();
    this.expect(types.semi);
    node.update = this.type === types.parenR ? null : this.parseExpression();
    this.expect(types.parenR);
    node.body = this.parseStatement("for");
    this.exitScope();
    this.labels.pop();
    return this.finishNode(node, "ForStatement")
  };

  // Parse a `for`/`in` and `for`/`of` loop, which are almost
  // same from parser's perspective.

  pp$1.parseForIn = function(node, init) {
    var isForIn = this.type === types._in;
    this.next();

    if (
      init.type === "VariableDeclaration" &&
      init.declarations[0].init != null &&
      (
        !isForIn ||
        this.options.ecmaVersion < 8 ||
        this.strict ||
        init.kind !== "var" ||
        init.declarations[0].id.type !== "Identifier"
      )
    ) {
      this.raise(
        init.start,
        ((isForIn ? "for-in" : "for-of") + " loop variable declaration may not have an initializer")
      );
    } else if (init.type === "AssignmentPattern") {
      this.raise(init.start, "Invalid left-hand side in for-loop");
    }
    node.left = init;
    node.right = isForIn ? this.parseExpression() : this.parseMaybeAssign();
    this.expect(types.parenR);
    node.body = this.parseStatement("for");
    this.exitScope();
    this.labels.pop();
    return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement")
  };

  // Parse a list of variable declarations.

  pp$1.parseVar = function(node, isFor, kind) {
    node.declarations = [];
    node.kind = kind;
    for (;;) {
      var decl = this.startNode();
      this.parseVarId(decl, kind);
      if (this.eat(types.eq)) {
        decl.init = this.parseMaybeAssign(isFor);
      } else if (kind === "const" && !(this.type === types._in || (this.options.ecmaVersion >= 6 && this.isContextual("of")))) {
        this.unexpected();
      } else if (decl.id.type !== "Identifier" && !(isFor && (this.type === types._in || this.isContextual("of")))) {
        this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value");
      } else {
        decl.init = null;
      }
      node.declarations.push(this.finishNode(decl, "VariableDeclarator"));
      if (!this.eat(types.comma)) { break }
    }
    return node
  };

  pp$1.parseVarId = function(decl, kind) {
    decl.id = this.parseBindingAtom();
    this.checkLVal(decl.id, kind === "var" ? BIND_VAR : BIND_LEXICAL, false);
  };

  var FUNC_STATEMENT = 1, FUNC_HANGING_STATEMENT = 2, FUNC_NULLABLE_ID = 4;

  // Parse a function declaration or literal (depending on the
  // `statement & FUNC_STATEMENT`).

  // Remove `allowExpressionBody` for 7.0.0, as it is only called with false
  pp$1.parseFunction = function(node, statement, allowExpressionBody, isAsync) {
    this.initFunction(node);
    if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync) {
      if (this.type === types.star && (statement & FUNC_HANGING_STATEMENT))
        { this.unexpected(); }
      node.generator = this.eat(types.star);
    }
    if (this.options.ecmaVersion >= 8)
      { node.async = !!isAsync; }

    if (statement & FUNC_STATEMENT) {
      node.id = (statement & FUNC_NULLABLE_ID) && this.type !== types.name ? null : this.parseIdent();
      if (node.id && !(statement & FUNC_HANGING_STATEMENT))
        // If it is a regular function declaration in sloppy mode, then it is
        // subject to Annex B semantics (BIND_FUNCTION). Otherwise, the binding
        // mode depends on properties of the current scope (see
        // treatFunctionsAsVar).
        { this.checkLVal(node.id, (this.strict || node.generator || node.async) ? this.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION); }
    }

    var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
    this.yieldPos = 0;
    this.awaitPos = 0;
    this.awaitIdentPos = 0;
    this.enterScope(functionFlags(node.async, node.generator));

    if (!(statement & FUNC_STATEMENT))
      { node.id = this.type === types.name ? this.parseIdent() : null; }

    this.parseFunctionParams(node);
    this.parseFunctionBody(node, allowExpressionBody, false);

    this.yieldPos = oldYieldPos;
    this.awaitPos = oldAwaitPos;
    this.awaitIdentPos = oldAwaitIdentPos;
    return this.finishNode(node, (statement & FUNC_STATEMENT) ? "FunctionDeclaration" : "FunctionExpression")
  };

  pp$1.parseFunctionParams = function(node) {
    this.expect(types.parenL);
    node.params = this.parseBindingList(types.parenR, false, this.options.ecmaVersion >= 8);
    this.checkYieldAwaitInDefaultParams();
  };

  // Parse a class declaration or literal (depending on the
  // `isStatement` parameter).

  pp$1.parseClass = function(node, isStatement) {
    this.next();

    // ecma-262 14.6 Class Definitions
    // A class definition is always strict mode code.
    var oldStrict = this.strict;
    this.strict = true;

    this.parseClassId(node, isStatement);
    this.parseClassSuper(node);
    var classBody = this.startNode();
    var hadConstructor = false;
    classBody.body = [];
    this.expect(types.braceL);
    while (this.type !== types.braceR) {
      var element = this.parseClassElement(node.superClass !== null);
      if (element) {
        classBody.body.push(element);
        if (element.type === "MethodDefinition" && element.kind === "constructor") {
          if (hadConstructor) { this.raise(element.start, "Duplicate constructor in the same class"); }
          hadConstructor = true;
        }
      }
    }
    this.strict = oldStrict;
    this.next();
    node.body = this.finishNode(classBody, "ClassBody");
    return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression")
  };

  pp$1.parseClassElement = function(constructorAllowsSuper) {
    var this$1 = this;

    if (this.eat(types.semi)) { return null }

    var method = this.startNode();
    var tryContextual = function (k, noLineBreak) {
      if ( noLineBreak === void 0 ) noLineBreak = false;

      var start = this$1.start, startLoc = this$1.startLoc;
      if (!this$1.eatContextual(k)) { return false }
      if (this$1.type !== types.parenL && (!noLineBreak || !this$1.canInsertSemicolon())) { return true }
      if (method.key) { this$1.unexpected(); }
      method.computed = false;
      method.key = this$1.startNodeAt(start, startLoc);
      method.key.name = k;
      this$1.finishNode(method.key, "Identifier");
      return false
    };

    method.kind = "method";
    method.static = tryContextual("static");
    var isGenerator = this.eat(types.star);
    var isAsync = false;
    if (!isGenerator) {
      if (this.options.ecmaVersion >= 8 && tryContextual("async", true)) {
        isAsync = true;
        isGenerator = this.options.ecmaVersion >= 9 && this.eat(types.star);
      } else if (tryContextual("get")) {
        method.kind = "get";
      } else if (tryContextual("set")) {
        method.kind = "set";
      }
    }
    if (!method.key) { this.parsePropertyName(method); }
    var key = method.key;
    var allowsDirectSuper = false;
    if (!method.computed && !method.static && (key.type === "Identifier" && key.name === "constructor" ||
        key.type === "Literal" && key.value === "constructor")) {
      if (method.kind !== "method") { this.raise(key.start, "Constructor can't have get/set modifier"); }
      if (isGenerator) { this.raise(key.start, "Constructor can't be a generator"); }
      if (isAsync) { this.raise(key.start, "Constructor can't be an async method"); }
      method.kind = "constructor";
      allowsDirectSuper = constructorAllowsSuper;
    } else if (method.static && key.type === "Identifier" && key.name === "prototype") {
      this.raise(key.start, "Classes may not have a static property named prototype");
    }
    this.parseClassMethod(method, isGenerator, isAsync, allowsDirectSuper);
    if (method.kind === "get" && method.value.params.length !== 0)
      { this.raiseRecoverable(method.value.start, "getter should have no params"); }
    if (method.kind === "set" && method.value.params.length !== 1)
      { this.raiseRecoverable(method.value.start, "setter should have exactly one param"); }
    if (method.kind === "set" && method.value.params[0].type === "RestElement")
      { this.raiseRecoverable(method.value.params[0].start, "Setter cannot use rest params"); }
    return method
  };

  pp$1.parseClassMethod = function(method, isGenerator, isAsync, allowsDirectSuper) {
    method.value = this.parseMethod(isGenerator, isAsync, allowsDirectSuper);
    return this.finishNode(method, "MethodDefinition")
  };

  pp$1.parseClassId = function(node, isStatement) {
    if (this.type === types.name) {
      node.id = this.parseIdent();
      if (isStatement)
        { this.checkLVal(node.id, BIND_LEXICAL, false); }
    } else {
      if (isStatement === true)
        { this.unexpected(); }
      node.id = null;
    }
  };

  pp$1.parseClassSuper = function(node) {
    node.superClass = this.eat(types._extends) ? this.parseExprSubscripts() : null;
  };

  // Parses module export declaration.

  pp$1.parseExport = function(node, exports) {
    this.next();
    // export * from '...'
    if (this.eat(types.star)) {
      if (this.options.ecmaVersion >= 11) {
        if (this.eatContextual("as")) {
          node.exported = this.parseIdent(true);
          this.checkExport(exports, node.exported.name, this.lastTokStart);
        } else {
          node.exported = null;
        }
      }
      this.expectContextual("from");
      if (this.type !== types.string) { this.unexpected(); }
      node.source = this.parseExprAtom();
      this.semicolon();
      return this.finishNode(node, "ExportAllDeclaration")
    }
    if (this.eat(types._default)) { // export default ...
      this.checkExport(exports, "default", this.lastTokStart);
      var isAsync;
      if (this.type === types._function || (isAsync = this.isAsyncFunction())) {
        var fNode = this.startNode();
        this.next();
        if (isAsync) { this.next(); }
        node.declaration = this.parseFunction(fNode, FUNC_STATEMENT | FUNC_NULLABLE_ID, false, isAsync);
      } else if (this.type === types._class) {
        var cNode = this.startNode();
        node.declaration = this.parseClass(cNode, "nullableID");
      } else {
        node.declaration = this.parseMaybeAssign();
        this.semicolon();
      }
      return this.finishNode(node, "ExportDefaultDeclaration")
    }
    // export var|const|let|function|class ...
    if (this.shouldParseExportStatement()) {
      node.declaration = this.parseStatement(null);
      if (node.declaration.type === "VariableDeclaration")
        { this.checkVariableExport(exports, node.declaration.declarations); }
      else
        { this.checkExport(exports, node.declaration.id.name, node.declaration.id.start); }
      node.specifiers = [];
      node.source = null;
    } else { // export { x, y as z } [from '...']
      node.declaration = null;
      node.specifiers = this.parseExportSpecifiers(exports);
      if (this.eatContextual("from")) {
        if (this.type !== types.string) { this.unexpected(); }
        node.source = this.parseExprAtom();
      } else {
        for (var i = 0, list = node.specifiers; i < list.length; i += 1) {
          // check for keywords used as local names
          var spec = list[i];

          this.checkUnreserved(spec.local);
          // check if export is defined
          this.checkLocalExport(spec.local);
        }

        node.source = null;
      }
      this.semicolon();
    }
    return this.finishNode(node, "ExportNamedDeclaration")
  };

  pp$1.checkExport = function(exports, name, pos) {
    if (!exports) { return }
    if (has$1(exports, name))
      { this.raiseRecoverable(pos, "Duplicate export '" + name + "'"); }
    exports[name] = true;
  };

  pp$1.checkPatternExport = function(exports, pat) {
    var type = pat.type;
    if (type === "Identifier")
      { this.checkExport(exports, pat.name, pat.start); }
    else if (type === "ObjectPattern")
      { for (var i = 0, list = pat.properties; i < list.length; i += 1)
        {
          var prop = list[i];

          this.checkPatternExport(exports, prop);
        } }
    else if (type === "ArrayPattern")
      { for (var i$1 = 0, list$1 = pat.elements; i$1 < list$1.length; i$1 += 1) {
        var elt = list$1[i$1];

          if (elt) { this.checkPatternExport(exports, elt); }
      } }
    else if (type === "Property")
      { this.checkPatternExport(exports, pat.value); }
    else if (type === "AssignmentPattern")
      { this.checkPatternExport(exports, pat.left); }
    else if (type === "RestElement")
      { this.checkPatternExport(exports, pat.argument); }
    else if (type === "ParenthesizedExpression")
      { this.checkPatternExport(exports, pat.expression); }
  };

  pp$1.checkVariableExport = function(exports, decls) {
    if (!exports) { return }
    for (var i = 0, list = decls; i < list.length; i += 1)
      {
      var decl = list[i];

      this.checkPatternExport(exports, decl.id);
    }
  };

  pp$1.shouldParseExportStatement = function() {
    return this.type.keyword === "var" ||
      this.type.keyword === "const" ||
      this.type.keyword === "class" ||
      this.type.keyword === "function" ||
      this.isLet() ||
      this.isAsyncFunction()
  };

  // Parses a comma-separated list of module exports.

  pp$1.parseExportSpecifiers = function(exports) {
    var nodes = [], first = true;
    // export { x, y as z } [from '...']
    this.expect(types.braceL);
    while (!this.eat(types.braceR)) {
      if (!first) {
        this.expect(types.comma);
        if (this.afterTrailingComma(types.braceR)) { break }
      } else { first = false; }

      var node = this.startNode();
      node.local = this.parseIdent(true);
      node.exported = this.eatContextual("as") ? this.parseIdent(true) : node.local;
      this.checkExport(exports, node.exported.name, node.exported.start);
      nodes.push(this.finishNode(node, "ExportSpecifier"));
    }
    return nodes
  };

  // Parses import declaration.

  pp$1.parseImport = function(node) {
    this.next();
    // import '...'
    if (this.type === types.string) {
      node.specifiers = empty;
      node.source = this.parseExprAtom();
    } else {
      node.specifiers = this.parseImportSpecifiers();
      this.expectContextual("from");
      node.source = this.type === types.string ? this.parseExprAtom() : this.unexpected();
    }
    this.semicolon();
    return this.finishNode(node, "ImportDeclaration")
  };

  // Parses a comma-separated list of module imports.

  pp$1.parseImportSpecifiers = function() {
    var nodes = [], first = true;
    if (this.type === types.name) {
      // import defaultObj, { x, y as z } from '...'
      var node = this.startNode();
      node.local = this.parseIdent();
      this.checkLVal(node.local, BIND_LEXICAL);
      nodes.push(this.finishNode(node, "ImportDefaultSpecifier"));
      if (!this.eat(types.comma)) { return nodes }
    }
    if (this.type === types.star) {
      var node$1 = this.startNode();
      this.next();
      this.expectContextual("as");
      node$1.local = this.parseIdent();
      this.checkLVal(node$1.local, BIND_LEXICAL);
      nodes.push(this.finishNode(node$1, "ImportNamespaceSpecifier"));
      return nodes
    }
    this.expect(types.braceL);
    while (!this.eat(types.braceR)) {
      if (!first) {
        this.expect(types.comma);
        if (this.afterTrailingComma(types.braceR)) { break }
      } else { first = false; }

      var node$2 = this.startNode();
      node$2.imported = this.parseIdent(true);
      if (this.eatContextual("as")) {
        node$2.local = this.parseIdent();
      } else {
        this.checkUnreserved(node$2.imported);
        node$2.local = node$2.imported;
      }
      this.checkLVal(node$2.local, BIND_LEXICAL);
      nodes.push(this.finishNode(node$2, "ImportSpecifier"));
    }
    return nodes
  };

  // Set `ExpressionStatement#directive` property for directive prologues.
  pp$1.adaptDirectivePrologue = function(statements) {
    for (var i = 0; i < statements.length && this.isDirectiveCandidate(statements[i]); ++i) {
      statements[i].directive = statements[i].expression.raw.slice(1, -1);
    }
  };
  pp$1.isDirectiveCandidate = function(statement) {
    return (
      statement.type === "ExpressionStatement" &&
      statement.expression.type === "Literal" &&
      typeof statement.expression.value === "string" &&
      // Reject parenthesized strings.
      (this.input[statement.start] === "\"" || this.input[statement.start] === "'")
    )
  };

  var pp$2 = Parser.prototype;

  // Convert existing expression atom to assignable pattern
  // if possible.

  pp$2.toAssignable = function(node, isBinding, refDestructuringErrors) {
    if (this.options.ecmaVersion >= 6 && node) {
      switch (node.type) {
      case "Identifier":
        if (this.inAsync && node.name === "await")
          { this.raise(node.start, "Cannot use 'await' as identifier inside an async function"); }
        break

      case "ObjectPattern":
      case "ArrayPattern":
      case "RestElement":
        break

      case "ObjectExpression":
        node.type = "ObjectPattern";
        if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
        for (var i = 0, list = node.properties; i < list.length; i += 1) {
          var prop = list[i];

        this.toAssignable(prop, isBinding);
          // Early error:
          //   AssignmentRestProperty[Yield, Await] :
          //     `...` DestructuringAssignmentTarget[Yield, Await]
          //
          //   It is a Syntax Error if |DestructuringAssignmentTarget| is an |ArrayLiteral| or an |ObjectLiteral|.
          if (
            prop.type === "RestElement" &&
            (prop.argument.type === "ArrayPattern" || prop.argument.type === "ObjectPattern")
          ) {
            this.raise(prop.argument.start, "Unexpected token");
          }
        }
        break

      case "Property":
        // AssignmentProperty has type === "Property"
        if (node.kind !== "init") { this.raise(node.key.start, "Object pattern can't contain getter or setter"); }
        this.toAssignable(node.value, isBinding);
        break

      case "ArrayExpression":
        node.type = "ArrayPattern";
        if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
        this.toAssignableList(node.elements, isBinding);
        break

      case "SpreadElement":
        node.type = "RestElement";
        this.toAssignable(node.argument, isBinding);
        if (node.argument.type === "AssignmentPattern")
          { this.raise(node.argument.start, "Rest elements cannot have a default value"); }
        break

      case "AssignmentExpression":
        if (node.operator !== "=") { this.raise(node.left.end, "Only '=' operator can be used for specifying default value."); }
        node.type = "AssignmentPattern";
        delete node.operator;
        this.toAssignable(node.left, isBinding);
        // falls through to AssignmentPattern

      case "AssignmentPattern":
        break

      case "ParenthesizedExpression":
        this.toAssignable(node.expression, isBinding, refDestructuringErrors);
        break

      case "ChainExpression":
        this.raiseRecoverable(node.start, "Optional chaining cannot appear in left-hand side");
        break

      case "MemberExpression":
        if (!isBinding) { break }

      default:
        this.raise(node.start, "Assigning to rvalue");
      }
    } else if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
    return node
  };

  // Convert list of expression atoms to binding list.

  pp$2.toAssignableList = function(exprList, isBinding) {
    var end = exprList.length;
    for (var i = 0; i < end; i++) {
      var elt = exprList[i];
      if (elt) { this.toAssignable(elt, isBinding); }
    }
    if (end) {
      var last = exprList[end - 1];
      if (this.options.ecmaVersion === 6 && isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier")
        { this.unexpected(last.argument.start); }
    }
    return exprList
  };

  // Parses spread element.

  pp$2.parseSpread = function(refDestructuringErrors) {
    var node = this.startNode();
    this.next();
    node.argument = this.parseMaybeAssign(false, refDestructuringErrors);
    return this.finishNode(node, "SpreadElement")
  };

  pp$2.parseRestBinding = function() {
    var node = this.startNode();
    this.next();

    // RestElement inside of a function parameter must be an identifier
    if (this.options.ecmaVersion === 6 && this.type !== types.name)
      { this.unexpected(); }

    node.argument = this.parseBindingAtom();

    return this.finishNode(node, "RestElement")
  };

  // Parses lvalue (assignable) atom.

  pp$2.parseBindingAtom = function() {
    if (this.options.ecmaVersion >= 6) {
      switch (this.type) {
      case types.bracketL:
        var node = this.startNode();
        this.next();
        node.elements = this.parseBindingList(types.bracketR, true, true);
        return this.finishNode(node, "ArrayPattern")

      case types.braceL:
        return this.parseObj(true)
      }
    }
    return this.parseIdent()
  };

  pp$2.parseBindingList = function(close, allowEmpty, allowTrailingComma) {
    var elts = [], first = true;
    while (!this.eat(close)) {
      if (first) { first = false; }
      else { this.expect(types.comma); }
      if (allowEmpty && this.type === types.comma) {
        elts.push(null);
      } else if (allowTrailingComma && this.afterTrailingComma(close)) {
        break
      } else if (this.type === types.ellipsis) {
        var rest = this.parseRestBinding();
        this.parseBindingListItem(rest);
        elts.push(rest);
        if (this.type === types.comma) { this.raise(this.start, "Comma is not permitted after the rest element"); }
        this.expect(close);
        break
      } else {
        var elem = this.parseMaybeDefault(this.start, this.startLoc);
        this.parseBindingListItem(elem);
        elts.push(elem);
      }
    }
    return elts
  };

  pp$2.parseBindingListItem = function(param) {
    return param
  };

  // Parses assignment pattern around given atom if possible.

  pp$2.parseMaybeDefault = function(startPos, startLoc, left) {
    left = left || this.parseBindingAtom();
    if (this.options.ecmaVersion < 6 || !this.eat(types.eq)) { return left }
    var node = this.startNodeAt(startPos, startLoc);
    node.left = left;
    node.right = this.parseMaybeAssign();
    return this.finishNode(node, "AssignmentPattern")
  };

  // Verify that a node is an lval — something that can be assigned
  // to.
  // bindingType can be either:
  // 'var' indicating that the lval creates a 'var' binding
  // 'let' indicating that the lval creates a lexical ('let' or 'const') binding
  // 'none' indicating that the binding should be checked for illegal identifiers, but not for duplicate references

  pp$2.checkLVal = function(expr, bindingType, checkClashes) {
    if ( bindingType === void 0 ) bindingType = BIND_NONE;

    switch (expr.type) {
    case "Identifier":
      if (bindingType === BIND_LEXICAL && expr.name === "let")
        { this.raiseRecoverable(expr.start, "let is disallowed as a lexically bound name"); }
      if (this.strict && this.reservedWordsStrictBind.test(expr.name))
        { this.raiseRecoverable(expr.start, (bindingType ? "Binding " : "Assigning to ") + expr.name + " in strict mode"); }
      if (checkClashes) {
        if (has$1(checkClashes, expr.name))
          { this.raiseRecoverable(expr.start, "Argument name clash"); }
        checkClashes[expr.name] = true;
      }
      if (bindingType !== BIND_NONE && bindingType !== BIND_OUTSIDE) { this.declareName(expr.name, bindingType, expr.start); }
      break

    case "ChainExpression":
      this.raiseRecoverable(expr.start, "Optional chaining cannot appear in left-hand side");
      break

    case "MemberExpression":
      if (bindingType) { this.raiseRecoverable(expr.start, "Binding member expression"); }
      break

    case "ObjectPattern":
      for (var i = 0, list = expr.properties; i < list.length; i += 1)
        {
      var prop = list[i];

      this.checkLVal(prop, bindingType, checkClashes);
    }
      break

    case "Property":
      // AssignmentProperty has type === "Property"
      this.checkLVal(expr.value, bindingType, checkClashes);
      break

    case "ArrayPattern":
      for (var i$1 = 0, list$1 = expr.elements; i$1 < list$1.length; i$1 += 1) {
        var elem = list$1[i$1];

      if (elem) { this.checkLVal(elem, bindingType, checkClashes); }
      }
      break

    case "AssignmentPattern":
      this.checkLVal(expr.left, bindingType, checkClashes);
      break

    case "RestElement":
      this.checkLVal(expr.argument, bindingType, checkClashes);
      break

    case "ParenthesizedExpression":
      this.checkLVal(expr.expression, bindingType, checkClashes);
      break

    default:
      this.raise(expr.start, (bindingType ? "Binding" : "Assigning to") + " rvalue");
    }
  };

  // A recursive descent parser operates by defining functions for all

  var pp$3 = Parser.prototype;

  // Check if property name clashes with already added.
  // Object/class getters and setters are not allowed to clash —
  // either with each other or with an init property — and in
  // strict mode, init properties are also not allowed to be repeated.

  pp$3.checkPropClash = function(prop, propHash, refDestructuringErrors) {
    if (this.options.ecmaVersion >= 9 && prop.type === "SpreadElement")
      { return }
    if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand))
      { return }
    var key = prop.key;
    var name;
    switch (key.type) {
    case "Identifier": name = key.name; break
    case "Literal": name = String(key.value); break
    default: return
    }
    var kind = prop.kind;
    if (this.options.ecmaVersion >= 6) {
      if (name === "__proto__" && kind === "init") {
        if (propHash.proto) {
          if (refDestructuringErrors) {
            if (refDestructuringErrors.doubleProto < 0)
              { refDestructuringErrors.doubleProto = key.start; }
            // Backwards-compat kludge. Can be removed in version 6.0
          } else { this.raiseRecoverable(key.start, "Redefinition of __proto__ property"); }
        }
        propHash.proto = true;
      }
      return
    }
    name = "$" + name;
    var other = propHash[name];
    if (other) {
      var redefinition;
      if (kind === "init") {
        redefinition = this.strict && other.init || other.get || other.set;
      } else {
        redefinition = other.init || other[kind];
      }
      if (redefinition)
        { this.raiseRecoverable(key.start, "Redefinition of property"); }
    } else {
      other = propHash[name] = {
        init: false,
        get: false,
        set: false
      };
    }
    other[kind] = true;
  };

  // ### Expression parsing

  // These nest, from the most general expression type at the top to
  // 'atomic', nondivisible expression types at the bottom. Most of
  // the functions will simply let the function(s) below them parse,
  // and, *if* the syntactic construct they handle is present, wrap
  // the AST node that the inner parser gave them in another node.

  // Parse a full expression. The optional arguments are used to
  // forbid the `in` operator (in for loops initalization expressions)
  // and provide reference for storing '=' operator inside shorthand
  // property assignment in contexts where both object expression
  // and object pattern might appear (so it's possible to raise
  // delayed syntax error at correct position).

  pp$3.parseExpression = function(noIn, refDestructuringErrors) {
    var startPos = this.start, startLoc = this.startLoc;
    var expr = this.parseMaybeAssign(noIn, refDestructuringErrors);
    if (this.type === types.comma) {
      var node = this.startNodeAt(startPos, startLoc);
      node.expressions = [expr];
      while (this.eat(types.comma)) { node.expressions.push(this.parseMaybeAssign(noIn, refDestructuringErrors)); }
      return this.finishNode(node, "SequenceExpression")
    }
    return expr
  };

  // Parse an assignment expression. This includes applications of
  // operators like `+=`.

  pp$3.parseMaybeAssign = function(noIn, refDestructuringErrors, afterLeftParse) {
    if (this.isContextual("yield")) {
      if (this.inGenerator) { return this.parseYield(noIn) }
      // The tokenizer will assume an expression is allowed after
      // `yield`, but this isn't that kind of yield
      else { this.exprAllowed = false; }
    }

    var ownDestructuringErrors = false, oldParenAssign = -1, oldTrailingComma = -1;
    if (refDestructuringErrors) {
      oldParenAssign = refDestructuringErrors.parenthesizedAssign;
      oldTrailingComma = refDestructuringErrors.trailingComma;
      refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = -1;
    } else {
      refDestructuringErrors = new DestructuringErrors;
      ownDestructuringErrors = true;
    }

    var startPos = this.start, startLoc = this.startLoc;
    if (this.type === types.parenL || this.type === types.name)
      { this.potentialArrowAt = this.start; }
    var left = this.parseMaybeConditional(noIn, refDestructuringErrors);
    if (afterLeftParse) { left = afterLeftParse.call(this, left, startPos, startLoc); }
    if (this.type.isAssign) {
      var node = this.startNodeAt(startPos, startLoc);
      node.operator = this.value;
      node.left = this.type === types.eq ? this.toAssignable(left, false, refDestructuringErrors) : left;
      if (!ownDestructuringErrors) {
        refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = refDestructuringErrors.doubleProto = -1;
      }
      if (refDestructuringErrors.shorthandAssign >= node.left.start)
        { refDestructuringErrors.shorthandAssign = -1; } // reset because shorthand default was used correctly
      this.checkLVal(left);
      this.next();
      node.right = this.parseMaybeAssign(noIn);
      return this.finishNode(node, "AssignmentExpression")
    } else {
      if (ownDestructuringErrors) { this.checkExpressionErrors(refDestructuringErrors, true); }
    }
    if (oldParenAssign > -1) { refDestructuringErrors.parenthesizedAssign = oldParenAssign; }
    if (oldTrailingComma > -1) { refDestructuringErrors.trailingComma = oldTrailingComma; }
    return left
  };

  // Parse a ternary conditional (`?:`) operator.

  pp$3.parseMaybeConditional = function(noIn, refDestructuringErrors) {
    var startPos = this.start, startLoc = this.startLoc;
    var expr = this.parseExprOps(noIn, refDestructuringErrors);
    if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
    if (this.eat(types.question)) {
      var node = this.startNodeAt(startPos, startLoc);
      node.test = expr;
      node.consequent = this.parseMaybeAssign();
      this.expect(types.colon);
      node.alternate = this.parseMaybeAssign(noIn);
      return this.finishNode(node, "ConditionalExpression")
    }
    return expr
  };

  // Start the precedence parser.

  pp$3.parseExprOps = function(noIn, refDestructuringErrors) {
    var startPos = this.start, startLoc = this.startLoc;
    var expr = this.parseMaybeUnary(refDestructuringErrors, false);
    if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
    return expr.start === startPos && expr.type === "ArrowFunctionExpression" ? expr : this.parseExprOp(expr, startPos, startLoc, -1, noIn)
  };

  // Parse binary operators with the operator precedence parsing
  // algorithm. `left` is the left-hand side of the operator.
  // `minPrec` provides context that allows the function to stop and
  // defer further parser to one of its callers when it encounters an
  // operator that has a lower precedence than the set it is parsing.

  pp$3.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, noIn) {
    var prec = this.type.binop;
    if (prec != null && (!noIn || this.type !== types._in)) {
      if (prec > minPrec) {
        var logical = this.type === types.logicalOR || this.type === types.logicalAND;
        var coalesce = this.type === types.coalesce;
        if (coalesce) {
          // Handle the precedence of `tt.coalesce` as equal to the range of logical expressions.
          // In other words, `node.right` shouldn't contain logical expressions in order to check the mixed error.
          prec = types.logicalAND.binop;
        }
        var op = this.value;
        this.next();
        var startPos = this.start, startLoc = this.startLoc;
        var right = this.parseExprOp(this.parseMaybeUnary(null, false), startPos, startLoc, prec, noIn);
        var node = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical || coalesce);
        if ((logical && this.type === types.coalesce) || (coalesce && (this.type === types.logicalOR || this.type === types.logicalAND))) {
          this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses");
        }
        return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, noIn)
      }
    }
    return left
  };

  pp$3.buildBinary = function(startPos, startLoc, left, right, op, logical) {
    var node = this.startNodeAt(startPos, startLoc);
    node.left = left;
    node.operator = op;
    node.right = right;
    return this.finishNode(node, logical ? "LogicalExpression" : "BinaryExpression")
  };

  // Parse unary operators, both prefix and postfix.

  pp$3.parseMaybeUnary = function(refDestructuringErrors, sawUnary) {
    var startPos = this.start, startLoc = this.startLoc, expr;
    if (this.isContextual("await") && (this.inAsync || (!this.inFunction && this.options.allowAwaitOutsideFunction))) {
      expr = this.parseAwait();
      sawUnary = true;
    } else if (this.type.prefix) {
      var node = this.startNode(), update = this.type === types.incDec;
      node.operator = this.value;
      node.prefix = true;
      this.next();
      node.argument = this.parseMaybeUnary(null, true);
      this.checkExpressionErrors(refDestructuringErrors, true);
      if (update) { this.checkLVal(node.argument); }
      else if (this.strict && node.operator === "delete" &&
               node.argument.type === "Identifier")
        { this.raiseRecoverable(node.start, "Deleting local variable in strict mode"); }
      else { sawUnary = true; }
      expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
    } else {
      expr = this.parseExprSubscripts(refDestructuringErrors);
      if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
      while (this.type.postfix && !this.canInsertSemicolon()) {
        var node$1 = this.startNodeAt(startPos, startLoc);
        node$1.operator = this.value;
        node$1.prefix = false;
        node$1.argument = expr;
        this.checkLVal(expr);
        this.next();
        expr = this.finishNode(node$1, "UpdateExpression");
      }
    }

    if (!sawUnary && this.eat(types.starstar))
      { return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false), "**", false) }
    else
      { return expr }
  };

  // Parse call, dot, and `[]`-subscript expressions.

  pp$3.parseExprSubscripts = function(refDestructuringErrors) {
    var startPos = this.start, startLoc = this.startLoc;
    var expr = this.parseExprAtom(refDestructuringErrors);
    if (expr.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")")
      { return expr }
    var result = this.parseSubscripts(expr, startPos, startLoc);
    if (refDestructuringErrors && result.type === "MemberExpression") {
      if (refDestructuringErrors.parenthesizedAssign >= result.start) { refDestructuringErrors.parenthesizedAssign = -1; }
      if (refDestructuringErrors.parenthesizedBind >= result.start) { refDestructuringErrors.parenthesizedBind = -1; }
    }
    return result
  };

  pp$3.parseSubscripts = function(base, startPos, startLoc, noCalls) {
    var maybeAsyncArrow = this.options.ecmaVersion >= 8 && base.type === "Identifier" && base.name === "async" &&
        this.lastTokEnd === base.end && !this.canInsertSemicolon() && base.end - base.start === 5 &&
        this.potentialArrowAt === base.start;
    var optionalChained = false;

    while (true) {
      var element = this.parseSubscript(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained);

      if (element.optional) { optionalChained = true; }
      if (element === base || element.type === "ArrowFunctionExpression") {
        if (optionalChained) {
          var chainNode = this.startNodeAt(startPos, startLoc);
          chainNode.expression = element;
          element = this.finishNode(chainNode, "ChainExpression");
        }
        return element
      }

      base = element;
    }
  };

  pp$3.parseSubscript = function(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained) {
    var optionalSupported = this.options.ecmaVersion >= 11;
    var optional = optionalSupported && this.eat(types.questionDot);
    if (noCalls && optional) { this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions"); }

    var computed = this.eat(types.bracketL);
    if (computed || (optional && this.type !== types.parenL && this.type !== types.backQuote) || this.eat(types.dot)) {
      var node = this.startNodeAt(startPos, startLoc);
      node.object = base;
      node.property = computed ? this.parseExpression() : this.parseIdent(this.options.allowReserved !== "never");
      node.computed = !!computed;
      if (computed) { this.expect(types.bracketR); }
      if (optionalSupported) {
        node.optional = optional;
      }
      base = this.finishNode(node, "MemberExpression");
    } else if (!noCalls && this.eat(types.parenL)) {
      var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
      this.yieldPos = 0;
      this.awaitPos = 0;
      this.awaitIdentPos = 0;
      var exprList = this.parseExprList(types.parenR, this.options.ecmaVersion >= 8, false, refDestructuringErrors);
      if (maybeAsyncArrow && !optional && !this.canInsertSemicolon() && this.eat(types.arrow)) {
        this.checkPatternErrors(refDestructuringErrors, false);
        this.checkYieldAwaitInDefaultParams();
        if (this.awaitIdentPos > 0)
          { this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"); }
        this.yieldPos = oldYieldPos;
        this.awaitPos = oldAwaitPos;
        this.awaitIdentPos = oldAwaitIdentPos;
        return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, true)
      }
      this.checkExpressionErrors(refDestructuringErrors, true);
      this.yieldPos = oldYieldPos || this.yieldPos;
      this.awaitPos = oldAwaitPos || this.awaitPos;
      this.awaitIdentPos = oldAwaitIdentPos || this.awaitIdentPos;
      var node$1 = this.startNodeAt(startPos, startLoc);
      node$1.callee = base;
      node$1.arguments = exprList;
      if (optionalSupported) {
        node$1.optional = optional;
      }
      base = this.finishNode(node$1, "CallExpression");
    } else if (this.type === types.backQuote) {
      if (optional || optionalChained) {
        this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
      }
      var node$2 = this.startNodeAt(startPos, startLoc);
      node$2.tag = base;
      node$2.quasi = this.parseTemplate({isTagged: true});
      base = this.finishNode(node$2, "TaggedTemplateExpression");
    }
    return base
  };

  // Parse an atomic expression — either a single token that is an
  // expression, an expression started by a keyword like `function` or
  // `new`, or an expression wrapped in punctuation like `()`, `[]`,
  // or `{}`.

  pp$3.parseExprAtom = function(refDestructuringErrors) {
    // If a division operator appears in an expression position, the
    // tokenizer got confused, and we force it to read a regexp instead.
    if (this.type === types.slash) { this.readRegexp(); }

    var node, canBeArrow = this.potentialArrowAt === this.start;
    switch (this.type) {
    case types._super:
      if (!this.allowSuper)
        { this.raise(this.start, "'super' keyword outside a method"); }
      node = this.startNode();
      this.next();
      if (this.type === types.parenL && !this.allowDirectSuper)
        { this.raise(node.start, "super() call outside constructor of a subclass"); }
      // The `super` keyword can appear at below:
      // SuperProperty:
      //     super [ Expression ]
      //     super . IdentifierName
      // SuperCall:
      //     super ( Arguments )
      if (this.type !== types.dot && this.type !== types.bracketL && this.type !== types.parenL)
        { this.unexpected(); }
      return this.finishNode(node, "Super")

    case types._this:
      node = this.startNode();
      this.next();
      return this.finishNode(node, "ThisExpression")

    case types.name:
      var startPos = this.start, startLoc = this.startLoc, containsEsc = this.containsEsc;
      var id = this.parseIdent(false);
      if (this.options.ecmaVersion >= 8 && !containsEsc && id.name === "async" && !this.canInsertSemicolon() && this.eat(types._function))
        { return this.parseFunction(this.startNodeAt(startPos, startLoc), 0, false, true) }
      if (canBeArrow && !this.canInsertSemicolon()) {
        if (this.eat(types.arrow))
          { return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], false) }
        if (this.options.ecmaVersion >= 8 && id.name === "async" && this.type === types.name && !containsEsc) {
          id = this.parseIdent(false);
          if (this.canInsertSemicolon() || !this.eat(types.arrow))
            { this.unexpected(); }
          return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], true)
        }
      }
      return id

    case types.regexp:
      var value = this.value;
      node = this.parseLiteral(value.value);
      node.regex = {pattern: value.pattern, flags: value.flags};
      return node

    case types.num: case types.string:
      return this.parseLiteral(this.value)

    case types._null: case types._true: case types._false:
      node = this.startNode();
      node.value = this.type === types._null ? null : this.type === types._true;
      node.raw = this.type.keyword;
      this.next();
      return this.finishNode(node, "Literal")

    case types.parenL:
      var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow);
      if (refDestructuringErrors) {
        if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr))
          { refDestructuringErrors.parenthesizedAssign = start; }
        if (refDestructuringErrors.parenthesizedBind < 0)
          { refDestructuringErrors.parenthesizedBind = start; }
      }
      return expr

    case types.bracketL:
      node = this.startNode();
      this.next();
      node.elements = this.parseExprList(types.bracketR, true, true, refDestructuringErrors);
      return this.finishNode(node, "ArrayExpression")

    case types.braceL:
      return this.parseObj(false, refDestructuringErrors)

    case types._function:
      node = this.startNode();
      this.next();
      return this.parseFunction(node, 0)

    case types._class:
      return this.parseClass(this.startNode(), false)

    case types._new:
      return this.parseNew()

    case types.backQuote:
      return this.parseTemplate()

    case types._import:
      if (this.options.ecmaVersion >= 11) {
        return this.parseExprImport()
      } else {
        return this.unexpected()
      }

    default:
      this.unexpected();
    }
  };

  pp$3.parseExprImport = function() {
    var node = this.startNode();

    // Consume `import` as an identifier for `import.meta`.
    // Because `this.parseIdent(true)` doesn't check escape sequences, it needs the check of `this.containsEsc`.
    if (this.containsEsc) { this.raiseRecoverable(this.start, "Escape sequence in keyword import"); }
    var meta = this.parseIdent(true);

    switch (this.type) {
    case types.parenL:
      return this.parseDynamicImport(node)
    case types.dot:
      node.meta = meta;
      return this.parseImportMeta(node)
    default:
      this.unexpected();
    }
  };

  pp$3.parseDynamicImport = function(node) {
    this.next(); // skip `(`

    // Parse node.source.
    node.source = this.parseMaybeAssign();

    // Verify ending.
    if (!this.eat(types.parenR)) {
      var errorPos = this.start;
      if (this.eat(types.comma) && this.eat(types.parenR)) {
        this.raiseRecoverable(errorPos, "Trailing comma is not allowed in import()");
      } else {
        this.unexpected(errorPos);
      }
    }

    return this.finishNode(node, "ImportExpression")
  };

  pp$3.parseImportMeta = function(node) {
    this.next(); // skip `.`

    var containsEsc = this.containsEsc;
    node.property = this.parseIdent(true);

    if (node.property.name !== "meta")
      { this.raiseRecoverable(node.property.start, "The only valid meta property for import is 'import.meta'"); }
    if (containsEsc)
      { this.raiseRecoverable(node.start, "'import.meta' must not contain escaped characters"); }
    if (this.options.sourceType !== "module")
      { this.raiseRecoverable(node.start, "Cannot use 'import.meta' outside a module"); }

    return this.finishNode(node, "MetaProperty")
  };

  pp$3.parseLiteral = function(value) {
    var node = this.startNode();
    node.value = value;
    node.raw = this.input.slice(this.start, this.end);
    if (node.raw.charCodeAt(node.raw.length - 1) === 110) { node.bigint = node.raw.slice(0, -1).replace(/_/g, ""); }
    this.next();
    return this.finishNode(node, "Literal")
  };

  pp$3.parseParenExpression = function() {
    this.expect(types.parenL);
    var val = this.parseExpression();
    this.expect(types.parenR);
    return val
  };

  pp$3.parseParenAndDistinguishExpression = function(canBeArrow) {
    var startPos = this.start, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8;
    if (this.options.ecmaVersion >= 6) {
      this.next();

      var innerStartPos = this.start, innerStartLoc = this.startLoc;
      var exprList = [], first = true, lastIsComma = false;
      var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart;
      this.yieldPos = 0;
      this.awaitPos = 0;
      // Do not save awaitIdentPos to allow checking awaits nested in parameters
      while (this.type !== types.parenR) {
        first ? first = false : this.expect(types.comma);
        if (allowTrailingComma && this.afterTrailingComma(types.parenR, true)) {
          lastIsComma = true;
          break
        } else if (this.type === types.ellipsis) {
          spreadStart = this.start;
          exprList.push(this.parseParenItem(this.parseRestBinding()));
          if (this.type === types.comma) { this.raise(this.start, "Comma is not permitted after the rest element"); }
          break
        } else {
          exprList.push(this.parseMaybeAssign(false, refDestructuringErrors, this.parseParenItem));
        }
      }
      var innerEndPos = this.start, innerEndLoc = this.startLoc;
      this.expect(types.parenR);

      if (canBeArrow && !this.canInsertSemicolon() && this.eat(types.arrow)) {
        this.checkPatternErrors(refDestructuringErrors, false);
        this.checkYieldAwaitInDefaultParams();
        this.yieldPos = oldYieldPos;
        this.awaitPos = oldAwaitPos;
        return this.parseParenArrowList(startPos, startLoc, exprList)
      }

      if (!exprList.length || lastIsComma) { this.unexpected(this.lastTokStart); }
      if (spreadStart) { this.unexpected(spreadStart); }
      this.checkExpressionErrors(refDestructuringErrors, true);
      this.yieldPos = oldYieldPos || this.yieldPos;
      this.awaitPos = oldAwaitPos || this.awaitPos;

      if (exprList.length > 1) {
        val = this.startNodeAt(innerStartPos, innerStartLoc);
        val.expressions = exprList;
        this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
      } else {
        val = exprList[0];
      }
    } else {
      val = this.parseParenExpression();
    }

    if (this.options.preserveParens) {
      var par = this.startNodeAt(startPos, startLoc);
      par.expression = val;
      return this.finishNode(par, "ParenthesizedExpression")
    } else {
      return val
    }
  };

  pp$3.parseParenItem = function(item) {
    return item
  };

  pp$3.parseParenArrowList = function(startPos, startLoc, exprList) {
    return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList)
  };

  // New's precedence is slightly tricky. It must allow its argument to
  // be a `[]` or dot subscript expression, but not a call — at least,
  // not without wrapping it in parentheses. Thus, it uses the noCalls
  // argument to parseSubscripts to prevent it from consuming the
  // argument list.

  var empty$1 = [];

  pp$3.parseNew = function() {
    if (this.containsEsc) { this.raiseRecoverable(this.start, "Escape sequence in keyword new"); }
    var node = this.startNode();
    var meta = this.parseIdent(true);
    if (this.options.ecmaVersion >= 6 && this.eat(types.dot)) {
      node.meta = meta;
      var containsEsc = this.containsEsc;
      node.property = this.parseIdent(true);
      if (node.property.name !== "target")
        { this.raiseRecoverable(node.property.start, "The only valid meta property for new is 'new.target'"); }
      if (containsEsc)
        { this.raiseRecoverable(node.start, "'new.target' must not contain escaped characters"); }
      if (!this.inNonArrowFunction())
        { this.raiseRecoverable(node.start, "'new.target' can only be used in functions"); }
      return this.finishNode(node, "MetaProperty")
    }
    var startPos = this.start, startLoc = this.startLoc, isImport = this.type === types._import;
    node.callee = this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true);
    if (isImport && node.callee.type === "ImportExpression") {
      this.raise(startPos, "Cannot use new with import()");
    }
    if (this.eat(types.parenL)) { node.arguments = this.parseExprList(types.parenR, this.options.ecmaVersion >= 8, false); }
    else { node.arguments = empty$1; }
    return this.finishNode(node, "NewExpression")
  };

  // Parse template expression.

  pp$3.parseTemplateElement = function(ref) {
    var isTagged = ref.isTagged;

    var elem = this.startNode();
    if (this.type === types.invalidTemplate) {
      if (!isTagged) {
        this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
      }
      elem.value = {
        raw: this.value,
        cooked: null
      };
    } else {
      elem.value = {
        raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
        cooked: this.value
      };
    }
    this.next();
    elem.tail = this.type === types.backQuote;
    return this.finishNode(elem, "TemplateElement")
  };

  pp$3.parseTemplate = function(ref) {
    if ( ref === void 0 ) ref = {};
    var isTagged = ref.isTagged; if ( isTagged === void 0 ) isTagged = false;

    var node = this.startNode();
    this.next();
    node.expressions = [];
    var curElt = this.parseTemplateElement({isTagged: isTagged});
    node.quasis = [curElt];
    while (!curElt.tail) {
      if (this.type === types.eof) { this.raise(this.pos, "Unterminated template literal"); }
      this.expect(types.dollarBraceL);
      node.expressions.push(this.parseExpression());
      this.expect(types.braceR);
      node.quasis.push(curElt = this.parseTemplateElement({isTagged: isTagged}));
    }
    this.next();
    return this.finishNode(node, "TemplateLiteral")
  };

  pp$3.isAsyncProp = function(prop) {
    return !prop.computed && prop.key.type === "Identifier" && prop.key.name === "async" &&
      (this.type === types.name || this.type === types.num || this.type === types.string || this.type === types.bracketL || this.type.keyword || (this.options.ecmaVersion >= 9 && this.type === types.star)) &&
      !lineBreak.test(this.input.slice(this.lastTokEnd, this.start))
  };

  // Parse an object literal or binding pattern.

  pp$3.parseObj = function(isPattern, refDestructuringErrors) {
    var node = this.startNode(), first = true, propHash = {};
    node.properties = [];
    this.next();
    while (!this.eat(types.braceR)) {
      if (!first) {
        this.expect(types.comma);
        if (this.options.ecmaVersion >= 5 && this.afterTrailingComma(types.braceR)) { break }
      } else { first = false; }

      var prop = this.parseProperty(isPattern, refDestructuringErrors);
      if (!isPattern) { this.checkPropClash(prop, propHash, refDestructuringErrors); }
      node.properties.push(prop);
    }
    return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression")
  };

  pp$3.parseProperty = function(isPattern, refDestructuringErrors) {
    var prop = this.startNode(), isGenerator, isAsync, startPos, startLoc;
    if (this.options.ecmaVersion >= 9 && this.eat(types.ellipsis)) {
      if (isPattern) {
        prop.argument = this.parseIdent(false);
        if (this.type === types.comma) {
          this.raise(this.start, "Comma is not permitted after the rest element");
        }
        return this.finishNode(prop, "RestElement")
      }
      // To disallow parenthesized identifier via `this.toAssignable()`.
      if (this.type === types.parenL && refDestructuringErrors) {
        if (refDestructuringErrors.parenthesizedAssign < 0) {
          refDestructuringErrors.parenthesizedAssign = this.start;
        }
        if (refDestructuringErrors.parenthesizedBind < 0) {
          refDestructuringErrors.parenthesizedBind = this.start;
        }
      }
      // Parse argument.
      prop.argument = this.parseMaybeAssign(false, refDestructuringErrors);
      // To disallow trailing comma via `this.toAssignable()`.
      if (this.type === types.comma && refDestructuringErrors && refDestructuringErrors.trailingComma < 0) {
        refDestructuringErrors.trailingComma = this.start;
      }
      // Finish
      return this.finishNode(prop, "SpreadElement")
    }
    if (this.options.ecmaVersion >= 6) {
      prop.method = false;
      prop.shorthand = false;
      if (isPattern || refDestructuringErrors) {
        startPos = this.start;
        startLoc = this.startLoc;
      }
      if (!isPattern)
        { isGenerator = this.eat(types.star); }
    }
    var containsEsc = this.containsEsc;
    this.parsePropertyName(prop);
    if (!isPattern && !containsEsc && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
      isAsync = true;
      isGenerator = this.options.ecmaVersion >= 9 && this.eat(types.star);
      this.parsePropertyName(prop, refDestructuringErrors);
    } else {
      isAsync = false;
    }
    this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc);
    return this.finishNode(prop, "Property")
  };

  pp$3.parsePropertyValue = function(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
    if ((isGenerator || isAsync) && this.type === types.colon)
      { this.unexpected(); }

    if (this.eat(types.colon)) {
      prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors);
      prop.kind = "init";
    } else if (this.options.ecmaVersion >= 6 && this.type === types.parenL) {
      if (isPattern) { this.unexpected(); }
      prop.kind = "init";
      prop.method = true;
      prop.value = this.parseMethod(isGenerator, isAsync);
    } else if (!isPattern && !containsEsc &&
               this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" &&
               (prop.key.name === "get" || prop.key.name === "set") &&
               (this.type !== types.comma && this.type !== types.braceR && this.type !== types.eq)) {
      if (isGenerator || isAsync) { this.unexpected(); }
      prop.kind = prop.key.name;
      this.parsePropertyName(prop);
      prop.value = this.parseMethod(false);
      var paramCount = prop.kind === "get" ? 0 : 1;
      if (prop.value.params.length !== paramCount) {
        var start = prop.value.start;
        if (prop.kind === "get")
          { this.raiseRecoverable(start, "getter should have no params"); }
        else
          { this.raiseRecoverable(start, "setter should have exactly one param"); }
      } else {
        if (prop.kind === "set" && prop.value.params[0].type === "RestElement")
          { this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params"); }
      }
    } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
      if (isGenerator || isAsync) { this.unexpected(); }
      this.checkUnreserved(prop.key);
      if (prop.key.name === "await" && !this.awaitIdentPos)
        { this.awaitIdentPos = startPos; }
      prop.kind = "init";
      if (isPattern) {
        prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key);
      } else if (this.type === types.eq && refDestructuringErrors) {
        if (refDestructuringErrors.shorthandAssign < 0)
          { refDestructuringErrors.shorthandAssign = this.start; }
        prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key);
      } else {
        prop.value = prop.key;
      }
      prop.shorthand = true;
    } else { this.unexpected(); }
  };

  pp$3.parsePropertyName = function(prop) {
    if (this.options.ecmaVersion >= 6) {
      if (this.eat(types.bracketL)) {
        prop.computed = true;
        prop.key = this.parseMaybeAssign();
        this.expect(types.bracketR);
        return prop.key
      } else {
        prop.computed = false;
      }
    }
    return prop.key = this.type === types.num || this.type === types.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never")
  };

  // Initialize empty function node.

  pp$3.initFunction = function(node) {
    node.id = null;
    if (this.options.ecmaVersion >= 6) { node.generator = node.expression = false; }
    if (this.options.ecmaVersion >= 8) { node.async = false; }
  };

  // Parse object or class method.

  pp$3.parseMethod = function(isGenerator, isAsync, allowDirectSuper) {
    var node = this.startNode(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;

    this.initFunction(node);
    if (this.options.ecmaVersion >= 6)
      { node.generator = isGenerator; }
    if (this.options.ecmaVersion >= 8)
      { node.async = !!isAsync; }

    this.yieldPos = 0;
    this.awaitPos = 0;
    this.awaitIdentPos = 0;
    this.enterScope(functionFlags(isAsync, node.generator) | SCOPE_SUPER | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));

    this.expect(types.parenL);
    node.params = this.parseBindingList(types.parenR, false, this.options.ecmaVersion >= 8);
    this.checkYieldAwaitInDefaultParams();
    this.parseFunctionBody(node, false, true);

    this.yieldPos = oldYieldPos;
    this.awaitPos = oldAwaitPos;
    this.awaitIdentPos = oldAwaitIdentPos;
    return this.finishNode(node, "FunctionExpression")
  };

  // Parse arrow function expression with given parameters.

  pp$3.parseArrowExpression = function(node, params, isAsync) {
    var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;

    this.enterScope(functionFlags(isAsync, false) | SCOPE_ARROW);
    this.initFunction(node);
    if (this.options.ecmaVersion >= 8) { node.async = !!isAsync; }

    this.yieldPos = 0;
    this.awaitPos = 0;
    this.awaitIdentPos = 0;

    node.params = this.toAssignableList(params, true);
    this.parseFunctionBody(node, true, false);

    this.yieldPos = oldYieldPos;
    this.awaitPos = oldAwaitPos;
    this.awaitIdentPos = oldAwaitIdentPos;
    return this.finishNode(node, "ArrowFunctionExpression")
  };

  // Parse function body and check parameters.

  pp$3.parseFunctionBody = function(node, isArrowFunction, isMethod) {
    var isExpression = isArrowFunction && this.type !== types.braceL;
    var oldStrict = this.strict, useStrict = false;

    if (isExpression) {
      node.body = this.parseMaybeAssign();
      node.expression = true;
      this.checkParams(node, false);
    } else {
      var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node.params);
      if (!oldStrict || nonSimple) {
        useStrict = this.strictDirective(this.end);
        // If this is a strict mode function, verify that argument names
        // are not repeated, and it does not try to bind the words `eval`
        // or `arguments`.
        if (useStrict && nonSimple)
          { this.raiseRecoverable(node.start, "Illegal 'use strict' directive in function with non-simple parameter list"); }
      }
      // Start a new scope with regard to labels and the `inFunction`
      // flag (restore them to their old value afterwards).
      var oldLabels = this.labels;
      this.labels = [];
      if (useStrict) { this.strict = true; }

      // Add the params to varDeclaredNames to ensure that an error is thrown
      // if a let/const declaration in the function clashes with one of the params.
      this.checkParams(node, !oldStrict && !useStrict && !isArrowFunction && !isMethod && this.isSimpleParamList(node.params));
      // Ensure the function name isn't a forbidden identifier in strict mode, e.g. 'eval'
      if (this.strict && node.id) { this.checkLVal(node.id, BIND_OUTSIDE); }
      node.body = this.parseBlock(false, undefined, useStrict && !oldStrict);
      node.expression = false;
      this.adaptDirectivePrologue(node.body.body);
      this.labels = oldLabels;
    }
    this.exitScope();
  };

  pp$3.isSimpleParamList = function(params) {
    for (var i = 0, list = params; i < list.length; i += 1)
      {
      var param = list[i];

      if (param.type !== "Identifier") { return false
    } }
    return true
  };

  // Checks function params for various disallowed patterns such as using "eval"
  // or "arguments" and duplicate parameters.

  pp$3.checkParams = function(node, allowDuplicates) {
    var nameHash = {};
    for (var i = 0, list = node.params; i < list.length; i += 1)
      {
      var param = list[i];

      this.checkLVal(param, BIND_VAR, allowDuplicates ? null : nameHash);
    }
  };

  // Parses a comma-separated list of expressions, and returns them as
  // an array. `close` is the token type that ends the list, and
  // `allowEmpty` can be turned on to allow subsequent commas with
  // nothing in between them to be parsed as `null` (which is needed
  // for array literals).

  pp$3.parseExprList = function(close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
    var elts = [], first = true;
    while (!this.eat(close)) {
      if (!first) {
        this.expect(types.comma);
        if (allowTrailingComma && this.afterTrailingComma(close)) { break }
      } else { first = false; }

      var elt = (void 0);
      if (allowEmpty && this.type === types.comma)
        { elt = null; }
      else if (this.type === types.ellipsis) {
        elt = this.parseSpread(refDestructuringErrors);
        if (refDestructuringErrors && this.type === types.comma && refDestructuringErrors.trailingComma < 0)
          { refDestructuringErrors.trailingComma = this.start; }
      } else {
        elt = this.parseMaybeAssign(false, refDestructuringErrors);
      }
      elts.push(elt);
    }
    return elts
  };

  pp$3.checkUnreserved = function(ref) {
    var start = ref.start;
    var end = ref.end;
    var name = ref.name;

    if (this.inGenerator && name === "yield")
      { this.raiseRecoverable(start, "Cannot use 'yield' as identifier inside a generator"); }
    if (this.inAsync && name === "await")
      { this.raiseRecoverable(start, "Cannot use 'await' as identifier inside an async function"); }
    if (this.keywords.test(name))
      { this.raise(start, ("Unexpected keyword '" + name + "'")); }
    if (this.options.ecmaVersion < 6 &&
      this.input.slice(start, end).indexOf("\\") !== -1) { return }
    var re = this.strict ? this.reservedWordsStrict : this.reservedWords;
    if (re.test(name)) {
      if (!this.inAsync && name === "await")
        { this.raiseRecoverable(start, "Cannot use keyword 'await' outside an async function"); }
      this.raiseRecoverable(start, ("The keyword '" + name + "' is reserved"));
    }
  };

  // Parse the next token as an identifier. If `liberal` is true (used
  // when parsing properties), it will also convert keywords into
  // identifiers.

  pp$3.parseIdent = function(liberal, isBinding) {
    var node = this.startNode();
    if (this.type === types.name) {
      node.name = this.value;
    } else if (this.type.keyword) {
      node.name = this.type.keyword;

      // To fix https://github.com/acornjs/acorn/issues/575
      // `class` and `function` keywords push new context into this.context.
      // But there is no chance to pop the context if the keyword is consumed as an identifier such as a property name.
      // If the previous token is a dot, this does not apply because the context-managing code already ignored the keyword
      if ((node.name === "class" || node.name === "function") &&
          (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) {
        this.context.pop();
      }
    } else {
      this.unexpected();
    }
    this.next(!!liberal);
    this.finishNode(node, "Identifier");
    if (!liberal) {
      this.checkUnreserved(node);
      if (node.name === "await" && !this.awaitIdentPos)
        { this.awaitIdentPos = node.start; }
    }
    return node
  };

  // Parses yield expression inside generator.

  pp$3.parseYield = function(noIn) {
    if (!this.yieldPos) { this.yieldPos = this.start; }

    var node = this.startNode();
    this.next();
    if (this.type === types.semi || this.canInsertSemicolon() || (this.type !== types.star && !this.type.startsExpr)) {
      node.delegate = false;
      node.argument = null;
    } else {
      node.delegate = this.eat(types.star);
      node.argument = this.parseMaybeAssign(noIn);
    }
    return this.finishNode(node, "YieldExpression")
  };

  pp$3.parseAwait = function() {
    if (!this.awaitPos) { this.awaitPos = this.start; }

    var node = this.startNode();
    this.next();
    node.argument = this.parseMaybeUnary(null, false);
    return this.finishNode(node, "AwaitExpression")
  };

  var pp$4 = Parser.prototype;

  // This function is used to raise exceptions on parse errors. It
  // takes an offset integer (into the current `input`) to indicate
  // the location of the error, attaches the position to the end
  // of the error message, and then raises a `SyntaxError` with that
  // message.

  pp$4.raise = function(pos, message) {
    var loc = getLineInfo(this.input, pos);
    message += " (" + loc.line + ":" + loc.column + ")";
    var err = new SyntaxError(message);
    err.pos = pos; err.loc = loc; err.raisedAt = this.pos;
    throw err
  };

  pp$4.raiseRecoverable = pp$4.raise;

  pp$4.curPosition = function() {
    if (this.options.locations) {
      return new Position(this.curLine, this.pos - this.lineStart)
    }
  };

  var pp$5 = Parser.prototype;

  var Scope = function Scope(flags) {
    this.flags = flags;
    // A list of var-declared names in the current lexical scope
    this.var = [];
    // A list of lexically-declared names in the current lexical scope
    this.lexical = [];
    // A list of lexically-declared FunctionDeclaration names in the current lexical scope
    this.functions = [];
  };

  // The functions in this module keep track of declared variables in the current scope in order to detect duplicate variable names.

  pp$5.enterScope = function(flags) {
    this.scopeStack.push(new Scope(flags));
  };

  pp$5.exitScope = function() {
    this.scopeStack.pop();
  };

  // The spec says:
  // > At the top level of a function, or script, function declarations are
  // > treated like var declarations rather than like lexical declarations.
  pp$5.treatFunctionsAsVarInScope = function(scope) {
    return (scope.flags & SCOPE_FUNCTION) || !this.inModule && (scope.flags & SCOPE_TOP)
  };

  pp$5.declareName = function(name, bindingType, pos) {
    var redeclared = false;
    if (bindingType === BIND_LEXICAL) {
      var scope = this.currentScope();
      redeclared = scope.lexical.indexOf(name) > -1 || scope.functions.indexOf(name) > -1 || scope.var.indexOf(name) > -1;
      scope.lexical.push(name);
      if (this.inModule && (scope.flags & SCOPE_TOP))
        { delete this.undefinedExports[name]; }
    } else if (bindingType === BIND_SIMPLE_CATCH) {
      var scope$1 = this.currentScope();
      scope$1.lexical.push(name);
    } else if (bindingType === BIND_FUNCTION) {
      var scope$2 = this.currentScope();
      if (this.treatFunctionsAsVar)
        { redeclared = scope$2.lexical.indexOf(name) > -1; }
      else
        { redeclared = scope$2.lexical.indexOf(name) > -1 || scope$2.var.indexOf(name) > -1; }
      scope$2.functions.push(name);
    } else {
      for (var i = this.scopeStack.length - 1; i >= 0; --i) {
        var scope$3 = this.scopeStack[i];
        if (scope$3.lexical.indexOf(name) > -1 && !((scope$3.flags & SCOPE_SIMPLE_CATCH) && scope$3.lexical[0] === name) ||
            !this.treatFunctionsAsVarInScope(scope$3) && scope$3.functions.indexOf(name) > -1) {
          redeclared = true;
          break
        }
        scope$3.var.push(name);
        if (this.inModule && (scope$3.flags & SCOPE_TOP))
          { delete this.undefinedExports[name]; }
        if (scope$3.flags & SCOPE_VAR) { break }
      }
    }
    if (redeclared) { this.raiseRecoverable(pos, ("Identifier '" + name + "' has already been declared")); }
  };

  pp$5.checkLocalExport = function(id) {
    // scope.functions must be empty as Module code is always strict.
    if (this.scopeStack[0].lexical.indexOf(id.name) === -1 &&
        this.scopeStack[0].var.indexOf(id.name) === -1) {
      this.undefinedExports[id.name] = id;
    }
  };

  pp$5.currentScope = function() {
    return this.scopeStack[this.scopeStack.length - 1]
  };

  pp$5.currentVarScope = function() {
    for (var i = this.scopeStack.length - 1;; i--) {
      var scope = this.scopeStack[i];
      if (scope.flags & SCOPE_VAR) { return scope }
    }
  };

  // Could be useful for `this`, `new.target`, `super()`, `super.property`, and `super[property]`.
  pp$5.currentThisScope = function() {
    for (var i = this.scopeStack.length - 1;; i--) {
      var scope = this.scopeStack[i];
      if (scope.flags & SCOPE_VAR && !(scope.flags & SCOPE_ARROW)) { return scope }
    }
  };

  var Node$1 = function Node(parser, pos, loc) {
    this.type = "";
    this.start = pos;
    this.end = 0;
    if (parser.options.locations)
      { this.loc = new SourceLocation(parser, loc); }
    if (parser.options.directSourceFile)
      { this.sourceFile = parser.options.directSourceFile; }
    if (parser.options.ranges)
      { this.range = [pos, 0]; }
  };

  // Start an AST node, attaching a start offset.

  var pp$6 = Parser.prototype;

  pp$6.startNode = function() {
    return new Node$1(this, this.start, this.startLoc)
  };

  pp$6.startNodeAt = function(pos, loc) {
    return new Node$1(this, pos, loc)
  };

  // Finish an AST node, adding `type` and `end` properties.

  function finishNodeAt(node, type, pos, loc) {
    node.type = type;
    node.end = pos;
    if (this.options.locations)
      { node.loc.end = loc; }
    if (this.options.ranges)
      { node.range[1] = pos; }
    return node
  }

  pp$6.finishNode = function(node, type) {
    return finishNodeAt.call(this, node, type, this.lastTokEnd, this.lastTokEndLoc)
  };

  // Finish node at given position

  pp$6.finishNodeAt = function(node, type, pos, loc) {
    return finishNodeAt.call(this, node, type, pos, loc)
  };

  // The algorithm used to determine whether a regexp can appear at a

  var TokContext = function TokContext(token, isExpr, preserveSpace, override, generator) {
    this.token = token;
    this.isExpr = !!isExpr;
    this.preserveSpace = !!preserveSpace;
    this.override = override;
    this.generator = !!generator;
  };

  var types$1 = {
    b_stat: new TokContext("{", false),
    b_expr: new TokContext("{", true),
    b_tmpl: new TokContext("${", false),
    p_stat: new TokContext("(", false),
    p_expr: new TokContext("(", true),
    q_tmpl: new TokContext("`", true, true, function (p) { return p.tryReadTemplateToken(); }),
    f_stat: new TokContext("function", false),
    f_expr: new TokContext("function", true),
    f_expr_gen: new TokContext("function", true, false, null, true),
    f_gen: new TokContext("function", false, false, null, true)
  };

  var pp$7 = Parser.prototype;

  pp$7.initialContext = function() {
    return [types$1.b_stat]
  };

  pp$7.braceIsBlock = function(prevType) {
    var parent = this.curContext();
    if (parent === types$1.f_expr || parent === types$1.f_stat)
      { return true }
    if (prevType === types.colon && (parent === types$1.b_stat || parent === types$1.b_expr))
      { return !parent.isExpr }

    // The check for `tt.name && exprAllowed` detects whether we are
    // after a `yield` or `of` construct. See the `updateContext` for
    // `tt.name`.
    if (prevType === types._return || prevType === types.name && this.exprAllowed)
      { return lineBreak.test(this.input.slice(this.lastTokEnd, this.start)) }
    if (prevType === types._else || prevType === types.semi || prevType === types.eof || prevType === types.parenR || prevType === types.arrow)
      { return true }
    if (prevType === types.braceL)
      { return parent === types$1.b_stat }
    if (prevType === types._var || prevType === types._const || prevType === types.name)
      { return false }
    return !this.exprAllowed
  };

  pp$7.inGeneratorContext = function() {
    for (var i = this.context.length - 1; i >= 1; i--) {
      var context = this.context[i];
      if (context.token === "function")
        { return context.generator }
    }
    return false
  };

  pp$7.updateContext = function(prevType) {
    var update, type = this.type;
    if (type.keyword && prevType === types.dot)
      { this.exprAllowed = false; }
    else if (update = type.updateContext)
      { update.call(this, prevType); }
    else
      { this.exprAllowed = type.beforeExpr; }
  };

  // Token-specific context update code

  types.parenR.updateContext = types.braceR.updateContext = function() {
    if (this.context.length === 1) {
      this.exprAllowed = true;
      return
    }
    var out = this.context.pop();
    if (out === types$1.b_stat && this.curContext().token === "function") {
      out = this.context.pop();
    }
    this.exprAllowed = !out.isExpr;
  };

  types.braceL.updateContext = function(prevType) {
    this.context.push(this.braceIsBlock(prevType) ? types$1.b_stat : types$1.b_expr);
    this.exprAllowed = true;
  };

  types.dollarBraceL.updateContext = function() {
    this.context.push(types$1.b_tmpl);
    this.exprAllowed = true;
  };

  types.parenL.updateContext = function(prevType) {
    var statementParens = prevType === types._if || prevType === types._for || prevType === types._with || prevType === types._while;
    this.context.push(statementParens ? types$1.p_stat : types$1.p_expr);
    this.exprAllowed = true;
  };

  types.incDec.updateContext = function() {
    // tokExprAllowed stays unchanged
  };

  types._function.updateContext = types._class.updateContext = function(prevType) {
    if (prevType.beforeExpr && prevType !== types.semi && prevType !== types._else &&
        !(prevType === types._return && lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) &&
        !((prevType === types.colon || prevType === types.braceL) && this.curContext() === types$1.b_stat))
      { this.context.push(types$1.f_expr); }
    else
      { this.context.push(types$1.f_stat); }
    this.exprAllowed = false;
  };

  types.backQuote.updateContext = function() {
    if (this.curContext() === types$1.q_tmpl)
      { this.context.pop(); }
    else
      { this.context.push(types$1.q_tmpl); }
    this.exprAllowed = false;
  };

  types.star.updateContext = function(prevType) {
    if (prevType === types._function) {
      var index = this.context.length - 1;
      if (this.context[index] === types$1.f_expr)
        { this.context[index] = types$1.f_expr_gen; }
      else
        { this.context[index] = types$1.f_gen; }
    }
    this.exprAllowed = true;
  };

  types.name.updateContext = function(prevType) {
    var allowed = false;
    if (this.options.ecmaVersion >= 6 && prevType !== types.dot) {
      if (this.value === "of" && !this.exprAllowed ||
          this.value === "yield" && this.inGeneratorContext())
        { allowed = true; }
    }
    this.exprAllowed = allowed;
  };

  // This file contains Unicode properties extracted from the ECMAScript
  // specification. The lists are extracted like so:
  // $$('#table-binary-unicode-properties > figure > table > tbody > tr > td:nth-child(1) code').map(el => el.innerText)

  // #table-binary-unicode-properties
  var ecma9BinaryProperties = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";
  var ecma10BinaryProperties = ecma9BinaryProperties + " Extended_Pictographic";
  var ecma11BinaryProperties = ecma10BinaryProperties;
  var unicodeBinaryProperties = {
    9: ecma9BinaryProperties,
    10: ecma10BinaryProperties,
    11: ecma11BinaryProperties
  };

  // #table-unicode-general-category-values
  var unicodeGeneralCategoryValues = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";

  // #table-unicode-script-values
  var ecma9ScriptValues = "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";
  var ecma10ScriptValues = ecma9ScriptValues + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";
  var ecma11ScriptValues = ecma10ScriptValues + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho";
  var unicodeScriptValues = {
    9: ecma9ScriptValues,
    10: ecma10ScriptValues,
    11: ecma11ScriptValues
  };

  var data = {};
  function buildUnicodeData(ecmaVersion) {
    var d = data[ecmaVersion] = {
      binary: wordsRegexp(unicodeBinaryProperties[ecmaVersion] + " " + unicodeGeneralCategoryValues),
      nonBinary: {
        General_Category: wordsRegexp(unicodeGeneralCategoryValues),
        Script: wordsRegexp(unicodeScriptValues[ecmaVersion])
      }
    };
    d.nonBinary.Script_Extensions = d.nonBinary.Script;

    d.nonBinary.gc = d.nonBinary.General_Category;
    d.nonBinary.sc = d.nonBinary.Script;
    d.nonBinary.scx = d.nonBinary.Script_Extensions;
  }
  buildUnicodeData(9);
  buildUnicodeData(10);
  buildUnicodeData(11);

  var pp$8 = Parser.prototype;

  var RegExpValidationState = function RegExpValidationState(parser) {
    this.parser = parser;
    this.validFlags = "gim" + (parser.options.ecmaVersion >= 6 ? "uy" : "") + (parser.options.ecmaVersion >= 9 ? "s" : "");
    this.unicodeProperties = data[parser.options.ecmaVersion >= 11 ? 11 : parser.options.ecmaVersion];
    this.source = "";
    this.flags = "";
    this.start = 0;
    this.switchU = false;
    this.switchN = false;
    this.pos = 0;
    this.lastIntValue = 0;
    this.lastStringValue = "";
    this.lastAssertionIsQuantifiable = false;
    this.numCapturingParens = 0;
    this.maxBackReference = 0;
    this.groupNames = [];
    this.backReferenceNames = [];
  };

  RegExpValidationState.prototype.reset = function reset (start, pattern, flags) {
    var unicode = flags.indexOf("u") !== -1;
    this.start = start | 0;
    this.source = pattern + "";
    this.flags = flags;
    this.switchU = unicode && this.parser.options.ecmaVersion >= 6;
    this.switchN = unicode && this.parser.options.ecmaVersion >= 9;
  };

  RegExpValidationState.prototype.raise = function raise (message) {
    this.parser.raiseRecoverable(this.start, ("Invalid regular expression: /" + (this.source) + "/: " + message));
  };

  // If u flag is given, this returns the code point at the index (it combines a surrogate pair).
  // Otherwise, this returns the code unit of the index (can be a part of a surrogate pair).
  RegExpValidationState.prototype.at = function at (i, forceU) {
      if ( forceU === void 0 ) forceU = false;

    var s = this.source;
    var l = s.length;
    if (i >= l) {
      return -1
    }
    var c = s.charCodeAt(i);
    if (!(forceU || this.switchU) || c <= 0xD7FF || c >= 0xE000 || i + 1 >= l) {
      return c
    }
    var next = s.charCodeAt(i + 1);
    return next >= 0xDC00 && next <= 0xDFFF ? (c << 10) + next - 0x35FDC00 : c
  };

  RegExpValidationState.prototype.nextIndex = function nextIndex (i, forceU) {
      if ( forceU === void 0 ) forceU = false;

    var s = this.source;
    var l = s.length;
    if (i >= l) {
      return l
    }
    var c = s.charCodeAt(i), next;
    if (!(forceU || this.switchU) || c <= 0xD7FF || c >= 0xE000 || i + 1 >= l ||
        (next = s.charCodeAt(i + 1)) < 0xDC00 || next > 0xDFFF) {
      return i + 1
    }
    return i + 2
  };

  RegExpValidationState.prototype.current = function current (forceU) {
      if ( forceU === void 0 ) forceU = false;

    return this.at(this.pos, forceU)
  };

  RegExpValidationState.prototype.lookahead = function lookahead (forceU) {
      if ( forceU === void 0 ) forceU = false;

    return this.at(this.nextIndex(this.pos, forceU), forceU)
  };

  RegExpValidationState.prototype.advance = function advance (forceU) {
      if ( forceU === void 0 ) forceU = false;

    this.pos = this.nextIndex(this.pos, forceU);
  };

  RegExpValidationState.prototype.eat = function eat (ch, forceU) {
      if ( forceU === void 0 ) forceU = false;

    if (this.current(forceU) === ch) {
      this.advance(forceU);
      return true
    }
    return false
  };

  function codePointToString(ch) {
    if (ch <= 0xFFFF) { return String.fromCharCode(ch) }
    ch -= 0x10000;
    return String.fromCharCode((ch >> 10) + 0xD800, (ch & 0x03FF) + 0xDC00)
  }

  /**
   * Validate the flags part of a given RegExpLiteral.
   *
   * @param {RegExpValidationState} state The state to validate RegExp.
   * @returns {void}
   */
  pp$8.validateRegExpFlags = function(state) {
    var validFlags = state.validFlags;
    var flags = state.flags;

    for (var i = 0; i < flags.length; i++) {
      var flag = flags.charAt(i);
      if (validFlags.indexOf(flag) === -1) {
        this.raise(state.start, "Invalid regular expression flag");
      }
      if (flags.indexOf(flag, i + 1) > -1) {
        this.raise(state.start, "Duplicate regular expression flag");
      }
    }
  };

  /**
   * Validate the pattern part of a given RegExpLiteral.
   *
   * @param {RegExpValidationState} state The state to validate RegExp.
   * @returns {void}
   */
  pp$8.validateRegExpPattern = function(state) {
    this.regexp_pattern(state);

    // The goal symbol for the parse is |Pattern[~U, ~N]|. If the result of
    // parsing contains a |GroupName|, reparse with the goal symbol
    // |Pattern[~U, +N]| and use this result instead. Throw a *SyntaxError*
    // exception if _P_ did not conform to the grammar, if any elements of _P_
    // were not matched by the parse, or if any Early Error conditions exist.
    if (!state.switchN && this.options.ecmaVersion >= 9 && state.groupNames.length > 0) {
      state.switchN = true;
      this.regexp_pattern(state);
    }
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-Pattern
  pp$8.regexp_pattern = function(state) {
    state.pos = 0;
    state.lastIntValue = 0;
    state.lastStringValue = "";
    state.lastAssertionIsQuantifiable = false;
    state.numCapturingParens = 0;
    state.maxBackReference = 0;
    state.groupNames.length = 0;
    state.backReferenceNames.length = 0;

    this.regexp_disjunction(state);

    if (state.pos !== state.source.length) {
      // Make the same messages as V8.
      if (state.eat(0x29 /* ) */)) {
        state.raise("Unmatched ')'");
      }
      if (state.eat(0x5D /* ] */) || state.eat(0x7D /* } */)) {
        state.raise("Lone quantifier brackets");
      }
    }
    if (state.maxBackReference > state.numCapturingParens) {
      state.raise("Invalid escape");
    }
    for (var i = 0, list = state.backReferenceNames; i < list.length; i += 1) {
      var name = list[i];

      if (state.groupNames.indexOf(name) === -1) {
        state.raise("Invalid named capture referenced");
      }
    }
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-Disjunction
  pp$8.regexp_disjunction = function(state) {
    this.regexp_alternative(state);
    while (state.eat(0x7C /* | */)) {
      this.regexp_alternative(state);
    }

    // Make the same message as V8.
    if (this.regexp_eatQuantifier(state, true)) {
      state.raise("Nothing to repeat");
    }
    if (state.eat(0x7B /* { */)) {
      state.raise("Lone quantifier brackets");
    }
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-Alternative
  pp$8.regexp_alternative = function(state) {
    while (state.pos < state.source.length && this.regexp_eatTerm(state))
      { }
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-Term
  pp$8.regexp_eatTerm = function(state) {
    if (this.regexp_eatAssertion(state)) {
      // Handle `QuantifiableAssertion Quantifier` alternative.
      // `state.lastAssertionIsQuantifiable` is true if the last eaten Assertion
      // is a QuantifiableAssertion.
      if (state.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(state)) {
        // Make the same message as V8.
        if (state.switchU) {
          state.raise("Invalid quantifier");
        }
      }
      return true
    }

    if (state.switchU ? this.regexp_eatAtom(state) : this.regexp_eatExtendedAtom(state)) {
      this.regexp_eatQuantifier(state);
      return true
    }

    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-Assertion
  pp$8.regexp_eatAssertion = function(state) {
    var start = state.pos;
    state.lastAssertionIsQuantifiable = false;

    // ^, $
    if (state.eat(0x5E /* ^ */) || state.eat(0x24 /* $ */)) {
      return true
    }

    // \b \B
    if (state.eat(0x5C /* \ */)) {
      if (state.eat(0x42 /* B */) || state.eat(0x62 /* b */)) {
        return true
      }
      state.pos = start;
    }

    // Lookahead / Lookbehind
    if (state.eat(0x28 /* ( */) && state.eat(0x3F /* ? */)) {
      var lookbehind = false;
      if (this.options.ecmaVersion >= 9) {
        lookbehind = state.eat(0x3C /* < */);
      }
      if (state.eat(0x3D /* = */) || state.eat(0x21 /* ! */)) {
        this.regexp_disjunction(state);
        if (!state.eat(0x29 /* ) */)) {
          state.raise("Unterminated group");
        }
        state.lastAssertionIsQuantifiable = !lookbehind;
        return true
      }
    }

    state.pos = start;
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-Quantifier
  pp$8.regexp_eatQuantifier = function(state, noError) {
    if ( noError === void 0 ) noError = false;

    if (this.regexp_eatQuantifierPrefix(state, noError)) {
      state.eat(0x3F /* ? */);
      return true
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-QuantifierPrefix
  pp$8.regexp_eatQuantifierPrefix = function(state, noError) {
    return (
      state.eat(0x2A /* * */) ||
      state.eat(0x2B /* + */) ||
      state.eat(0x3F /* ? */) ||
      this.regexp_eatBracedQuantifier(state, noError)
    )
  };
  pp$8.regexp_eatBracedQuantifier = function(state, noError) {
    var start = state.pos;
    if (state.eat(0x7B /* { */)) {
      var min = 0, max = -1;
      if (this.regexp_eatDecimalDigits(state)) {
        min = state.lastIntValue;
        if (state.eat(0x2C /* , */) && this.regexp_eatDecimalDigits(state)) {
          max = state.lastIntValue;
        }
        if (state.eat(0x7D /* } */)) {
          // SyntaxError in https://www.ecma-international.org/ecma-262/8.0/#sec-term
          if (max !== -1 && max < min && !noError) {
            state.raise("numbers out of order in {} quantifier");
          }
          return true
        }
      }
      if (state.switchU && !noError) {
        state.raise("Incomplete quantifier");
      }
      state.pos = start;
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-Atom
  pp$8.regexp_eatAtom = function(state) {
    return (
      this.regexp_eatPatternCharacters(state) ||
      state.eat(0x2E /* . */) ||
      this.regexp_eatReverseSolidusAtomEscape(state) ||
      this.regexp_eatCharacterClass(state) ||
      this.regexp_eatUncapturingGroup(state) ||
      this.regexp_eatCapturingGroup(state)
    )
  };
  pp$8.regexp_eatReverseSolidusAtomEscape = function(state) {
    var start = state.pos;
    if (state.eat(0x5C /* \ */)) {
      if (this.regexp_eatAtomEscape(state)) {
        return true
      }
      state.pos = start;
    }
    return false
  };
  pp$8.regexp_eatUncapturingGroup = function(state) {
    var start = state.pos;
    if (state.eat(0x28 /* ( */)) {
      if (state.eat(0x3F /* ? */) && state.eat(0x3A /* : */)) {
        this.regexp_disjunction(state);
        if (state.eat(0x29 /* ) */)) {
          return true
        }
        state.raise("Unterminated group");
      }
      state.pos = start;
    }
    return false
  };
  pp$8.regexp_eatCapturingGroup = function(state) {
    if (state.eat(0x28 /* ( */)) {
      if (this.options.ecmaVersion >= 9) {
        this.regexp_groupSpecifier(state);
      } else if (state.current() === 0x3F /* ? */) {
        state.raise("Invalid group");
      }
      this.regexp_disjunction(state);
      if (state.eat(0x29 /* ) */)) {
        state.numCapturingParens += 1;
        return true
      }
      state.raise("Unterminated group");
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ExtendedAtom
  pp$8.regexp_eatExtendedAtom = function(state) {
    return (
      state.eat(0x2E /* . */) ||
      this.regexp_eatReverseSolidusAtomEscape(state) ||
      this.regexp_eatCharacterClass(state) ||
      this.regexp_eatUncapturingGroup(state) ||
      this.regexp_eatCapturingGroup(state) ||
      this.regexp_eatInvalidBracedQuantifier(state) ||
      this.regexp_eatExtendedPatternCharacter(state)
    )
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-InvalidBracedQuantifier
  pp$8.regexp_eatInvalidBracedQuantifier = function(state) {
    if (this.regexp_eatBracedQuantifier(state, true)) {
      state.raise("Nothing to repeat");
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-SyntaxCharacter
  pp$8.regexp_eatSyntaxCharacter = function(state) {
    var ch = state.current();
    if (isSyntaxCharacter(ch)) {
      state.lastIntValue = ch;
      state.advance();
      return true
    }
    return false
  };
  function isSyntaxCharacter(ch) {
    return (
      ch === 0x24 /* $ */ ||
      ch >= 0x28 /* ( */ && ch <= 0x2B /* + */ ||
      ch === 0x2E /* . */ ||
      ch === 0x3F /* ? */ ||
      ch >= 0x5B /* [ */ && ch <= 0x5E /* ^ */ ||
      ch >= 0x7B /* { */ && ch <= 0x7D /* } */
    )
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-PatternCharacter
  // But eat eager.
  pp$8.regexp_eatPatternCharacters = function(state) {
    var start = state.pos;
    var ch = 0;
    while ((ch = state.current()) !== -1 && !isSyntaxCharacter(ch)) {
      state.advance();
    }
    return state.pos !== start
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ExtendedPatternCharacter
  pp$8.regexp_eatExtendedPatternCharacter = function(state) {
    var ch = state.current();
    if (
      ch !== -1 &&
      ch !== 0x24 /* $ */ &&
      !(ch >= 0x28 /* ( */ && ch <= 0x2B /* + */) &&
      ch !== 0x2E /* . */ &&
      ch !== 0x3F /* ? */ &&
      ch !== 0x5B /* [ */ &&
      ch !== 0x5E /* ^ */ &&
      ch !== 0x7C /* | */
    ) {
      state.advance();
      return true
    }
    return false
  };

  // GroupSpecifier ::
  //   [empty]
  //   `?` GroupName
  pp$8.regexp_groupSpecifier = function(state) {
    if (state.eat(0x3F /* ? */)) {
      if (this.regexp_eatGroupName(state)) {
        if (state.groupNames.indexOf(state.lastStringValue) !== -1) {
          state.raise("Duplicate capture group name");
        }
        state.groupNames.push(state.lastStringValue);
        return
      }
      state.raise("Invalid group");
    }
  };

  // GroupName ::
  //   `<` RegExpIdentifierName `>`
  // Note: this updates `state.lastStringValue` property with the eaten name.
  pp$8.regexp_eatGroupName = function(state) {
    state.lastStringValue = "";
    if (state.eat(0x3C /* < */)) {
      if (this.regexp_eatRegExpIdentifierName(state) && state.eat(0x3E /* > */)) {
        return true
      }
      state.raise("Invalid capture group name");
    }
    return false
  };

  // RegExpIdentifierName ::
  //   RegExpIdentifierStart
  //   RegExpIdentifierName RegExpIdentifierPart
  // Note: this updates `state.lastStringValue` property with the eaten name.
  pp$8.regexp_eatRegExpIdentifierName = function(state) {
    state.lastStringValue = "";
    if (this.regexp_eatRegExpIdentifierStart(state)) {
      state.lastStringValue += codePointToString(state.lastIntValue);
      while (this.regexp_eatRegExpIdentifierPart(state)) {
        state.lastStringValue += codePointToString(state.lastIntValue);
      }
      return true
    }
    return false
  };

  // RegExpIdentifierStart ::
  //   UnicodeIDStart
  //   `$`
  //   `_`
  //   `\` RegExpUnicodeEscapeSequence[+U]
  pp$8.regexp_eatRegExpIdentifierStart = function(state) {
    var start = state.pos;
    var forceU = this.options.ecmaVersion >= 11;
    var ch = state.current(forceU);
    state.advance(forceU);

    if (ch === 0x5C /* \ */ && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
      ch = state.lastIntValue;
    }
    if (isRegExpIdentifierStart(ch)) {
      state.lastIntValue = ch;
      return true
    }

    state.pos = start;
    return false
  };
  function isRegExpIdentifierStart(ch) {
    return isIdentifierStart(ch, true) || ch === 0x24 /* $ */ || ch === 0x5F /* _ */
  }

  // RegExpIdentifierPart ::
  //   UnicodeIDContinue
  //   `$`
  //   `_`
  //   `\` RegExpUnicodeEscapeSequence[+U]
  //   <ZWNJ>
  //   <ZWJ>
  pp$8.regexp_eatRegExpIdentifierPart = function(state) {
    var start = state.pos;
    var forceU = this.options.ecmaVersion >= 11;
    var ch = state.current(forceU);
    state.advance(forceU);

    if (ch === 0x5C /* \ */ && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
      ch = state.lastIntValue;
    }
    if (isRegExpIdentifierPart(ch)) {
      state.lastIntValue = ch;
      return true
    }

    state.pos = start;
    return false
  };
  function isRegExpIdentifierPart(ch) {
    return isIdentifierChar(ch, true) || ch === 0x24 /* $ */ || ch === 0x5F /* _ */ || ch === 0x200C /* <ZWNJ> */ || ch === 0x200D /* <ZWJ> */
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-AtomEscape
  pp$8.regexp_eatAtomEscape = function(state) {
    if (
      this.regexp_eatBackReference(state) ||
      this.regexp_eatCharacterClassEscape(state) ||
      this.regexp_eatCharacterEscape(state) ||
      (state.switchN && this.regexp_eatKGroupName(state))
    ) {
      return true
    }
    if (state.switchU) {
      // Make the same message as V8.
      if (state.current() === 0x63 /* c */) {
        state.raise("Invalid unicode escape");
      }
      state.raise("Invalid escape");
    }
    return false
  };
  pp$8.regexp_eatBackReference = function(state) {
    var start = state.pos;
    if (this.regexp_eatDecimalEscape(state)) {
      var n = state.lastIntValue;
      if (state.switchU) {
        // For SyntaxError in https://www.ecma-international.org/ecma-262/8.0/#sec-atomescape
        if (n > state.maxBackReference) {
          state.maxBackReference = n;
        }
        return true
      }
      if (n <= state.numCapturingParens) {
        return true
      }
      state.pos = start;
    }
    return false
  };
  pp$8.regexp_eatKGroupName = function(state) {
    if (state.eat(0x6B /* k */)) {
      if (this.regexp_eatGroupName(state)) {
        state.backReferenceNames.push(state.lastStringValue);
        return true
      }
      state.raise("Invalid named reference");
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-CharacterEscape
  pp$8.regexp_eatCharacterEscape = function(state) {
    return (
      this.regexp_eatControlEscape(state) ||
      this.regexp_eatCControlLetter(state) ||
      this.regexp_eatZero(state) ||
      this.regexp_eatHexEscapeSequence(state) ||
      this.regexp_eatRegExpUnicodeEscapeSequence(state, false) ||
      (!state.switchU && this.regexp_eatLegacyOctalEscapeSequence(state)) ||
      this.regexp_eatIdentityEscape(state)
    )
  };
  pp$8.regexp_eatCControlLetter = function(state) {
    var start = state.pos;
    if (state.eat(0x63 /* c */)) {
      if (this.regexp_eatControlLetter(state)) {
        return true
      }
      state.pos = start;
    }
    return false
  };
  pp$8.regexp_eatZero = function(state) {
    if (state.current() === 0x30 /* 0 */ && !isDecimalDigit(state.lookahead())) {
      state.lastIntValue = 0;
      state.advance();
      return true
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-ControlEscape
  pp$8.regexp_eatControlEscape = function(state) {
    var ch = state.current();
    if (ch === 0x74 /* t */) {
      state.lastIntValue = 0x09; /* \t */
      state.advance();
      return true
    }
    if (ch === 0x6E /* n */) {
      state.lastIntValue = 0x0A; /* \n */
      state.advance();
      return true
    }
    if (ch === 0x76 /* v */) {
      state.lastIntValue = 0x0B; /* \v */
      state.advance();
      return true
    }
    if (ch === 0x66 /* f */) {
      state.lastIntValue = 0x0C; /* \f */
      state.advance();
      return true
    }
    if (ch === 0x72 /* r */) {
      state.lastIntValue = 0x0D; /* \r */
      state.advance();
      return true
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-ControlLetter
  pp$8.regexp_eatControlLetter = function(state) {
    var ch = state.current();
    if (isControlLetter(ch)) {
      state.lastIntValue = ch % 0x20;
      state.advance();
      return true
    }
    return false
  };
  function isControlLetter(ch) {
    return (
      (ch >= 0x41 /* A */ && ch <= 0x5A /* Z */) ||
      (ch >= 0x61 /* a */ && ch <= 0x7A /* z */)
    )
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-RegExpUnicodeEscapeSequence
  pp$8.regexp_eatRegExpUnicodeEscapeSequence = function(state, forceU) {
    if ( forceU === void 0 ) forceU = false;

    var start = state.pos;
    var switchU = forceU || state.switchU;

    if (state.eat(0x75 /* u */)) {
      if (this.regexp_eatFixedHexDigits(state, 4)) {
        var lead = state.lastIntValue;
        if (switchU && lead >= 0xD800 && lead <= 0xDBFF) {
          var leadSurrogateEnd = state.pos;
          if (state.eat(0x5C /* \ */) && state.eat(0x75 /* u */) && this.regexp_eatFixedHexDigits(state, 4)) {
            var trail = state.lastIntValue;
            if (trail >= 0xDC00 && trail <= 0xDFFF) {
              state.lastIntValue = (lead - 0xD800) * 0x400 + (trail - 0xDC00) + 0x10000;
              return true
            }
          }
          state.pos = leadSurrogateEnd;
          state.lastIntValue = lead;
        }
        return true
      }
      if (
        switchU &&
        state.eat(0x7B /* { */) &&
        this.regexp_eatHexDigits(state) &&
        state.eat(0x7D /* } */) &&
        isValidUnicode(state.lastIntValue)
      ) {
        return true
      }
      if (switchU) {
        state.raise("Invalid unicode escape");
      }
      state.pos = start;
    }

    return false
  };
  function isValidUnicode(ch) {
    return ch >= 0 && ch <= 0x10FFFF
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-IdentityEscape
  pp$8.regexp_eatIdentityEscape = function(state) {
    if (state.switchU) {
      if (this.regexp_eatSyntaxCharacter(state)) {
        return true
      }
      if (state.eat(0x2F /* / */)) {
        state.lastIntValue = 0x2F; /* / */
        return true
      }
      return false
    }

    var ch = state.current();
    if (ch !== 0x63 /* c */ && (!state.switchN || ch !== 0x6B /* k */)) {
      state.lastIntValue = ch;
      state.advance();
      return true
    }

    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-DecimalEscape
  pp$8.regexp_eatDecimalEscape = function(state) {
    state.lastIntValue = 0;
    var ch = state.current();
    if (ch >= 0x31 /* 1 */ && ch <= 0x39 /* 9 */) {
      do {
        state.lastIntValue = 10 * state.lastIntValue + (ch - 0x30 /* 0 */);
        state.advance();
      } while ((ch = state.current()) >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */)
      return true
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-CharacterClassEscape
  pp$8.regexp_eatCharacterClassEscape = function(state) {
    var ch = state.current();

    if (isCharacterClassEscape(ch)) {
      state.lastIntValue = -1;
      state.advance();
      return true
    }

    if (
      state.switchU &&
      this.options.ecmaVersion >= 9 &&
      (ch === 0x50 /* P */ || ch === 0x70 /* p */)
    ) {
      state.lastIntValue = -1;
      state.advance();
      if (
        state.eat(0x7B /* { */) &&
        this.regexp_eatUnicodePropertyValueExpression(state) &&
        state.eat(0x7D /* } */)
      ) {
        return true
      }
      state.raise("Invalid property name");
    }

    return false
  };
  function isCharacterClassEscape(ch) {
    return (
      ch === 0x64 /* d */ ||
      ch === 0x44 /* D */ ||
      ch === 0x73 /* s */ ||
      ch === 0x53 /* S */ ||
      ch === 0x77 /* w */ ||
      ch === 0x57 /* W */
    )
  }

  // UnicodePropertyValueExpression ::
  //   UnicodePropertyName `=` UnicodePropertyValue
  //   LoneUnicodePropertyNameOrValue
  pp$8.regexp_eatUnicodePropertyValueExpression = function(state) {
    var start = state.pos;

    // UnicodePropertyName `=` UnicodePropertyValue
    if (this.regexp_eatUnicodePropertyName(state) && state.eat(0x3D /* = */)) {
      var name = state.lastStringValue;
      if (this.regexp_eatUnicodePropertyValue(state)) {
        var value = state.lastStringValue;
        this.regexp_validateUnicodePropertyNameAndValue(state, name, value);
        return true
      }
    }
    state.pos = start;

    // LoneUnicodePropertyNameOrValue
    if (this.regexp_eatLoneUnicodePropertyNameOrValue(state)) {
      var nameOrValue = state.lastStringValue;
      this.regexp_validateUnicodePropertyNameOrValue(state, nameOrValue);
      return true
    }
    return false
  };
  pp$8.regexp_validateUnicodePropertyNameAndValue = function(state, name, value) {
    if (!has$1(state.unicodeProperties.nonBinary, name))
      { state.raise("Invalid property name"); }
    if (!state.unicodeProperties.nonBinary[name].test(value))
      { state.raise("Invalid property value"); }
  };
  pp$8.regexp_validateUnicodePropertyNameOrValue = function(state, nameOrValue) {
    if (!state.unicodeProperties.binary.test(nameOrValue))
      { state.raise("Invalid property name"); }
  };

  // UnicodePropertyName ::
  //   UnicodePropertyNameCharacters
  pp$8.regexp_eatUnicodePropertyName = function(state) {
    var ch = 0;
    state.lastStringValue = "";
    while (isUnicodePropertyNameCharacter(ch = state.current())) {
      state.lastStringValue += codePointToString(ch);
      state.advance();
    }
    return state.lastStringValue !== ""
  };
  function isUnicodePropertyNameCharacter(ch) {
    return isControlLetter(ch) || ch === 0x5F /* _ */
  }

  // UnicodePropertyValue ::
  //   UnicodePropertyValueCharacters
  pp$8.regexp_eatUnicodePropertyValue = function(state) {
    var ch = 0;
    state.lastStringValue = "";
    while (isUnicodePropertyValueCharacter(ch = state.current())) {
      state.lastStringValue += codePointToString(ch);
      state.advance();
    }
    return state.lastStringValue !== ""
  };
  function isUnicodePropertyValueCharacter(ch) {
    return isUnicodePropertyNameCharacter(ch) || isDecimalDigit(ch)
  }

  // LoneUnicodePropertyNameOrValue ::
  //   UnicodePropertyValueCharacters
  pp$8.regexp_eatLoneUnicodePropertyNameOrValue = function(state) {
    return this.regexp_eatUnicodePropertyValue(state)
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-CharacterClass
  pp$8.regexp_eatCharacterClass = function(state) {
    if (state.eat(0x5B /* [ */)) {
      state.eat(0x5E /* ^ */);
      this.regexp_classRanges(state);
      if (state.eat(0x5D /* ] */)) {
        return true
      }
      // Unreachable since it threw "unterminated regular expression" error before.
      state.raise("Unterminated character class");
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-ClassRanges
  // https://www.ecma-international.org/ecma-262/8.0/#prod-NonemptyClassRanges
  // https://www.ecma-international.org/ecma-262/8.0/#prod-NonemptyClassRangesNoDash
  pp$8.regexp_classRanges = function(state) {
    while (this.regexp_eatClassAtom(state)) {
      var left = state.lastIntValue;
      if (state.eat(0x2D /* - */) && this.regexp_eatClassAtom(state)) {
        var right = state.lastIntValue;
        if (state.switchU && (left === -1 || right === -1)) {
          state.raise("Invalid character class");
        }
        if (left !== -1 && right !== -1 && left > right) {
          state.raise("Range out of order in character class");
        }
      }
    }
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-ClassAtom
  // https://www.ecma-international.org/ecma-262/8.0/#prod-ClassAtomNoDash
  pp$8.regexp_eatClassAtom = function(state) {
    var start = state.pos;

    if (state.eat(0x5C /* \ */)) {
      if (this.regexp_eatClassEscape(state)) {
        return true
      }
      if (state.switchU) {
        // Make the same message as V8.
        var ch$1 = state.current();
        if (ch$1 === 0x63 /* c */ || isOctalDigit(ch$1)) {
          state.raise("Invalid class escape");
        }
        state.raise("Invalid escape");
      }
      state.pos = start;
    }

    var ch = state.current();
    if (ch !== 0x5D /* ] */) {
      state.lastIntValue = ch;
      state.advance();
      return true
    }

    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ClassEscape
  pp$8.regexp_eatClassEscape = function(state) {
    var start = state.pos;

    if (state.eat(0x62 /* b */)) {
      state.lastIntValue = 0x08; /* <BS> */
      return true
    }

    if (state.switchU && state.eat(0x2D /* - */)) {
      state.lastIntValue = 0x2D; /* - */
      return true
    }

    if (!state.switchU && state.eat(0x63 /* c */)) {
      if (this.regexp_eatClassControlLetter(state)) {
        return true
      }
      state.pos = start;
    }

    return (
      this.regexp_eatCharacterClassEscape(state) ||
      this.regexp_eatCharacterEscape(state)
    )
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ClassControlLetter
  pp$8.regexp_eatClassControlLetter = function(state) {
    var ch = state.current();
    if (isDecimalDigit(ch) || ch === 0x5F /* _ */) {
      state.lastIntValue = ch % 0x20;
      state.advance();
      return true
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-HexEscapeSequence
  pp$8.regexp_eatHexEscapeSequence = function(state) {
    var start = state.pos;
    if (state.eat(0x78 /* x */)) {
      if (this.regexp_eatFixedHexDigits(state, 2)) {
        return true
      }
      if (state.switchU) {
        state.raise("Invalid escape");
      }
      state.pos = start;
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-DecimalDigits
  pp$8.regexp_eatDecimalDigits = function(state) {
    var start = state.pos;
    var ch = 0;
    state.lastIntValue = 0;
    while (isDecimalDigit(ch = state.current())) {
      state.lastIntValue = 10 * state.lastIntValue + (ch - 0x30 /* 0 */);
      state.advance();
    }
    return state.pos !== start
  };
  function isDecimalDigit(ch) {
    return ch >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-HexDigits
  pp$8.regexp_eatHexDigits = function(state) {
    var start = state.pos;
    var ch = 0;
    state.lastIntValue = 0;
    while (isHexDigit(ch = state.current())) {
      state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
      state.advance();
    }
    return state.pos !== start
  };
  function isHexDigit(ch) {
    return (
      (ch >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */) ||
      (ch >= 0x41 /* A */ && ch <= 0x46 /* F */) ||
      (ch >= 0x61 /* a */ && ch <= 0x66 /* f */)
    )
  }
  function hexToInt(ch) {
    if (ch >= 0x41 /* A */ && ch <= 0x46 /* F */) {
      return 10 + (ch - 0x41 /* A */)
    }
    if (ch >= 0x61 /* a */ && ch <= 0x66 /* f */) {
      return 10 + (ch - 0x61 /* a */)
    }
    return ch - 0x30 /* 0 */
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-LegacyOctalEscapeSequence
  // Allows only 0-377(octal) i.e. 0-255(decimal).
  pp$8.regexp_eatLegacyOctalEscapeSequence = function(state) {
    if (this.regexp_eatOctalDigit(state)) {
      var n1 = state.lastIntValue;
      if (this.regexp_eatOctalDigit(state)) {
        var n2 = state.lastIntValue;
        if (n1 <= 3 && this.regexp_eatOctalDigit(state)) {
          state.lastIntValue = n1 * 64 + n2 * 8 + state.lastIntValue;
        } else {
          state.lastIntValue = n1 * 8 + n2;
        }
      } else {
        state.lastIntValue = n1;
      }
      return true
    }
    return false
  };

  // https://www.ecma-international.org/ecma-262/8.0/#prod-OctalDigit
  pp$8.regexp_eatOctalDigit = function(state) {
    var ch = state.current();
    if (isOctalDigit(ch)) {
      state.lastIntValue = ch - 0x30; /* 0 */
      state.advance();
      return true
    }
    state.lastIntValue = 0;
    return false
  };
  function isOctalDigit(ch) {
    return ch >= 0x30 /* 0 */ && ch <= 0x37 /* 7 */
  }

  // https://www.ecma-international.org/ecma-262/8.0/#prod-Hex4Digits
  // https://www.ecma-international.org/ecma-262/8.0/#prod-HexDigit
  // And HexDigit HexDigit in https://www.ecma-international.org/ecma-262/8.0/#prod-HexEscapeSequence
  pp$8.regexp_eatFixedHexDigits = function(state, length) {
    var start = state.pos;
    state.lastIntValue = 0;
    for (var i = 0; i < length; ++i) {
      var ch = state.current();
      if (!isHexDigit(ch)) {
        state.pos = start;
        return false
      }
      state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
      state.advance();
    }
    return true
  };

  // Object type used to represent tokens. Note that normally, tokens
  // simply exist as properties on the parser object. This is only
  // used for the onToken callback and the external tokenizer.

  var Token = function Token(p) {
    this.type = p.type;
    this.value = p.value;
    this.start = p.start;
    this.end = p.end;
    if (p.options.locations)
      { this.loc = new SourceLocation(p, p.startLoc, p.endLoc); }
    if (p.options.ranges)
      { this.range = [p.start, p.end]; }
  };

  // ## Tokenizer

  var pp$9 = Parser.prototype;

  // Move to the next token

  pp$9.next = function(ignoreEscapeSequenceInKeyword) {
    if (!ignoreEscapeSequenceInKeyword && this.type.keyword && this.containsEsc)
      { this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword); }
    if (this.options.onToken)
      { this.options.onToken(new Token(this)); }

    this.lastTokEnd = this.end;
    this.lastTokStart = this.start;
    this.lastTokEndLoc = this.endLoc;
    this.lastTokStartLoc = this.startLoc;
    this.nextToken();
  };

  pp$9.getToken = function() {
    this.next();
    return new Token(this)
  };

  // If we're in an ES6 environment, make parsers iterable
  if (typeof Symbol !== "undefined")
    { pp$9[Symbol.iterator] = function() {
      var this$1 = this;

      return {
        next: function () {
          var token = this$1.getToken();
          return {
            done: token.type === types.eof,
            value: token
          }
        }
      }
    }; }

  // Toggle strict mode. Re-reads the next number or string to please
  // pedantic tests (`"use strict"; 010;` should fail).

  pp$9.curContext = function() {
    return this.context[this.context.length - 1]
  };

  // Read a single token, updating the parser object's token-related
  // properties.

  pp$9.nextToken = function() {
    var curContext = this.curContext();
    if (!curContext || !curContext.preserveSpace) { this.skipSpace(); }

    this.start = this.pos;
    if (this.options.locations) { this.startLoc = this.curPosition(); }
    if (this.pos >= this.input.length) { return this.finishToken(types.eof) }

    if (curContext.override) { return curContext.override(this) }
    else { this.readToken(this.fullCharCodeAtPos()); }
  };

  pp$9.readToken = function(code) {
    // Identifier or keyword. '\uXXXX' sequences are allowed in
    // identifiers, so '\' also dispatches to that.
    if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || code === 92 /* '\' */)
      { return this.readWord() }

    return this.getTokenFromCode(code)
  };

  pp$9.fullCharCodeAtPos = function() {
    var code = this.input.charCodeAt(this.pos);
    if (code <= 0xd7ff || code >= 0xe000) { return code }
    var next = this.input.charCodeAt(this.pos + 1);
    return (code << 10) + next - 0x35fdc00
  };

  pp$9.skipBlockComment = function() {
    var startLoc = this.options.onComment && this.curPosition();
    var start = this.pos, end = this.input.indexOf("*/", this.pos += 2);
    if (end === -1) { this.raise(this.pos - 2, "Unterminated comment"); }
    this.pos = end + 2;
    if (this.options.locations) {
      lineBreakG.lastIndex = start;
      var match;
      while ((match = lineBreakG.exec(this.input)) && match.index < this.pos) {
        ++this.curLine;
        this.lineStart = match.index + match[0].length;
      }
    }
    if (this.options.onComment)
      { this.options.onComment(true, this.input.slice(start + 2, end), start, this.pos,
                             startLoc, this.curPosition()); }
  };

  pp$9.skipLineComment = function(startSkip) {
    var start = this.pos;
    var startLoc = this.options.onComment && this.curPosition();
    var ch = this.input.charCodeAt(this.pos += startSkip);
    while (this.pos < this.input.length && !isNewLine(ch)) {
      ch = this.input.charCodeAt(++this.pos);
    }
    if (this.options.onComment)
      { this.options.onComment(false, this.input.slice(start + startSkip, this.pos), start, this.pos,
                             startLoc, this.curPosition()); }
  };

  // Called at the start of the parse and after every token. Skips
  // whitespace and comments, and.

  pp$9.skipSpace = function() {
    loop: while (this.pos < this.input.length) {
      var ch = this.input.charCodeAt(this.pos);
      switch (ch) {
      case 32: case 160: // ' '
        ++this.pos;
        break
      case 13:
        if (this.input.charCodeAt(this.pos + 1) === 10) {
          ++this.pos;
        }
      case 10: case 8232: case 8233:
        ++this.pos;
        if (this.options.locations) {
          ++this.curLine;
          this.lineStart = this.pos;
        }
        break
      case 47: // '/'
        switch (this.input.charCodeAt(this.pos + 1)) {
        case 42: // '*'
          this.skipBlockComment();
          break
        case 47:
          this.skipLineComment(2);
          break
        default:
          break loop
        }
        break
      default:
        if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
          ++this.pos;
        } else {
          break loop
        }
      }
    }
  };

  // Called at the end of every token. Sets `end`, `val`, and
  // maintains `context` and `exprAllowed`, and skips the space after
  // the token, so that the next one's `start` will point at the
  // right position.

  pp$9.finishToken = function(type, val) {
    this.end = this.pos;
    if (this.options.locations) { this.endLoc = this.curPosition(); }
    var prevType = this.type;
    this.type = type;
    this.value = val;

    this.updateContext(prevType);
  };

  // ### Token reading

  // This is the function that is called to fetch the next token. It
  // is somewhat obscure, because it works in character codes rather
  // than characters, and because operator parsing has been inlined
  // into it.
  //
  // All in the name of speed.
  //
  pp$9.readToken_dot = function() {
    var next = this.input.charCodeAt(this.pos + 1);
    if (next >= 48 && next <= 57) { return this.readNumber(true) }
    var next2 = this.input.charCodeAt(this.pos + 2);
    if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) { // 46 = dot '.'
      this.pos += 3;
      return this.finishToken(types.ellipsis)
    } else {
      ++this.pos;
      return this.finishToken(types.dot)
    }
  };

  pp$9.readToken_slash = function() { // '/'
    var next = this.input.charCodeAt(this.pos + 1);
    if (this.exprAllowed) { ++this.pos; return this.readRegexp() }
    if (next === 61) { return this.finishOp(types.assign, 2) }
    return this.finishOp(types.slash, 1)
  };

  pp$9.readToken_mult_modulo_exp = function(code) { // '%*'
    var next = this.input.charCodeAt(this.pos + 1);
    var size = 1;
    var tokentype = code === 42 ? types.star : types.modulo;

    // exponentiation operator ** and **=
    if (this.options.ecmaVersion >= 7 && code === 42 && next === 42) {
      ++size;
      tokentype = types.starstar;
      next = this.input.charCodeAt(this.pos + 2);
    }

    if (next === 61) { return this.finishOp(types.assign, size + 1) }
    return this.finishOp(tokentype, size)
  };

  pp$9.readToken_pipe_amp = function(code) { // '|&'
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === code) {
      if (this.options.ecmaVersion >= 12) {
        var next2 = this.input.charCodeAt(this.pos + 2);
        if (next2 === 61) { return this.finishOp(types.assign, 3) }
      }
      return this.finishOp(code === 124 ? types.logicalOR : types.logicalAND, 2)
    }
    if (next === 61) { return this.finishOp(types.assign, 2) }
    return this.finishOp(code === 124 ? types.bitwiseOR : types.bitwiseAND, 1)
  };

  pp$9.readToken_caret = function() { // '^'
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === 61) { return this.finishOp(types.assign, 2) }
    return this.finishOp(types.bitwiseXOR, 1)
  };

  pp$9.readToken_plus_min = function(code) { // '+-'
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === code) {
      if (next === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 &&
          (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) {
        // A `-->` line comment
        this.skipLineComment(3);
        this.skipSpace();
        return this.nextToken()
      }
      return this.finishOp(types.incDec, 2)
    }
    if (next === 61) { return this.finishOp(types.assign, 2) }
    return this.finishOp(types.plusMin, 1)
  };

  pp$9.readToken_lt_gt = function(code) { // '<>'
    var next = this.input.charCodeAt(this.pos + 1);
    var size = 1;
    if (next === code) {
      size = code === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
      if (this.input.charCodeAt(this.pos + size) === 61) { return this.finishOp(types.assign, size + 1) }
      return this.finishOp(types.bitShift, size)
    }
    if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 &&
        this.input.charCodeAt(this.pos + 3) === 45) {
      // `<!--`, an XML-style comment that should be interpreted as a line comment
      this.skipLineComment(4);
      this.skipSpace();
      return this.nextToken()
    }
    if (next === 61) { size = 2; }
    return this.finishOp(types.relational, size)
  };

  pp$9.readToken_eq_excl = function(code) { // '=!'
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === 61) { return this.finishOp(types.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) }
    if (code === 61 && next === 62 && this.options.ecmaVersion >= 6) { // '=>'
      this.pos += 2;
      return this.finishToken(types.arrow)
    }
    return this.finishOp(code === 61 ? types.eq : types.prefix, 1)
  };

  pp$9.readToken_question = function() { // '?'
    var ecmaVersion = this.options.ecmaVersion;
    if (ecmaVersion >= 11) {
      var next = this.input.charCodeAt(this.pos + 1);
      if (next === 46) {
        var next2 = this.input.charCodeAt(this.pos + 2);
        if (next2 < 48 || next2 > 57) { return this.finishOp(types.questionDot, 2) }
      }
      if (next === 63) {
        if (ecmaVersion >= 12) {
          var next2$1 = this.input.charCodeAt(this.pos + 2);
          if (next2$1 === 61) { return this.finishOp(types.assign, 3) }
        }
        return this.finishOp(types.coalesce, 2)
      }
    }
    return this.finishOp(types.question, 1)
  };

  pp$9.getTokenFromCode = function(code) {
    switch (code) {
    // The interpretation of a dot depends on whether it is followed
    // by a digit or another two dots.
    case 46: // '.'
      return this.readToken_dot()

    // Punctuation tokens.
    case 40: ++this.pos; return this.finishToken(types.parenL)
    case 41: ++this.pos; return this.finishToken(types.parenR)
    case 59: ++this.pos; return this.finishToken(types.semi)
    case 44: ++this.pos; return this.finishToken(types.comma)
    case 91: ++this.pos; return this.finishToken(types.bracketL)
    case 93: ++this.pos; return this.finishToken(types.bracketR)
    case 123: ++this.pos; return this.finishToken(types.braceL)
    case 125: ++this.pos; return this.finishToken(types.braceR)
    case 58: ++this.pos; return this.finishToken(types.colon)

    case 96: // '`'
      if (this.options.ecmaVersion < 6) { break }
      ++this.pos;
      return this.finishToken(types.backQuote)

    case 48: // '0'
      var next = this.input.charCodeAt(this.pos + 1);
      if (next === 120 || next === 88) { return this.readRadixNumber(16) } // '0x', '0X' - hex number
      if (this.options.ecmaVersion >= 6) {
        if (next === 111 || next === 79) { return this.readRadixNumber(8) } // '0o', '0O' - octal number
        if (next === 98 || next === 66) { return this.readRadixNumber(2) } // '0b', '0B' - binary number
      }

    // Anything else beginning with a digit is an integer, octal
    // number, or float.
    case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57: // 1-9
      return this.readNumber(false)

    // Quotes produce strings.
    case 34: case 39: // '"', "'"
      return this.readString(code)

    // Operators are parsed inline in tiny state machines. '=' (61) is
    // often referred to. `finishOp` simply skips the amount of
    // characters it is given as second argument, and returns a token
    // of the type given by its first argument.

    case 47: // '/'
      return this.readToken_slash()

    case 37: case 42: // '%*'
      return this.readToken_mult_modulo_exp(code)

    case 124: case 38: // '|&'
      return this.readToken_pipe_amp(code)

    case 94: // '^'
      return this.readToken_caret()

    case 43: case 45: // '+-'
      return this.readToken_plus_min(code)

    case 60: case 62: // '<>'
      return this.readToken_lt_gt(code)

    case 61: case 33: // '=!'
      return this.readToken_eq_excl(code)

    case 63: // '?'
      return this.readToken_question()

    case 126: // '~'
      return this.finishOp(types.prefix, 1)
    }

    this.raise(this.pos, "Unexpected character '" + codePointToString$1(code) + "'");
  };

  pp$9.finishOp = function(type, size) {
    var str = this.input.slice(this.pos, this.pos + size);
    this.pos += size;
    return this.finishToken(type, str)
  };

  pp$9.readRegexp = function() {
    var escaped, inClass, start = this.pos;
    for (;;) {
      if (this.pos >= this.input.length) { this.raise(start, "Unterminated regular expression"); }
      var ch = this.input.charAt(this.pos);
      if (lineBreak.test(ch)) { this.raise(start, "Unterminated regular expression"); }
      if (!escaped) {
        if (ch === "[") { inClass = true; }
        else if (ch === "]" && inClass) { inClass = false; }
        else if (ch === "/" && !inClass) { break }
        escaped = ch === "\\";
      } else { escaped = false; }
      ++this.pos;
    }
    var pattern = this.input.slice(start, this.pos);
    ++this.pos;
    var flagsStart = this.pos;
    var flags = this.readWord1();
    if (this.containsEsc) { this.unexpected(flagsStart); }

    // Validate pattern
    var state = this.regexpState || (this.regexpState = new RegExpValidationState(this));
    state.reset(start, pattern, flags);
    this.validateRegExpFlags(state);
    this.validateRegExpPattern(state);

    // Create Literal#value property value.
    var value = null;
    try {
      value = new RegExp(pattern, flags);
    } catch (e) {
      // ESTree requires null if it failed to instantiate RegExp object.
      // https://github.com/estree/estree/blob/a27003adf4fd7bfad44de9cef372a2eacd527b1c/es5.md#regexpliteral
    }

    return this.finishToken(types.regexp, {pattern: pattern, flags: flags, value: value})
  };

  // Read an integer in the given radix. Return null if zero digits
  // were read, the integer value otherwise. When `len` is given, this
  // will return `null` unless the integer has exactly `len` digits.

  pp$9.readInt = function(radix, len, maybeLegacyOctalNumericLiteral) {
    // `len` is used for character escape sequences. In that case, disallow separators.
    var allowSeparators = this.options.ecmaVersion >= 12 && len === undefined;

    // `maybeLegacyOctalNumericLiteral` is true if it doesn't have prefix (0x,0o,0b)
    // and isn't fraction part nor exponent part. In that case, if the first digit
    // is zero then disallow separators.
    var isLegacyOctalNumericLiteral = maybeLegacyOctalNumericLiteral && this.input.charCodeAt(this.pos) === 48;

    var start = this.pos, total = 0, lastCode = 0;
    for (var i = 0, e = len == null ? Infinity : len; i < e; ++i, ++this.pos) {
      var code = this.input.charCodeAt(this.pos), val = (void 0);

      if (allowSeparators && code === 95) {
        if (isLegacyOctalNumericLiteral) { this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"); }
        if (lastCode === 95) { this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"); }
        if (i === 0) { this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"); }
        lastCode = code;
        continue
      }

      if (code >= 97) { val = code - 97 + 10; } // a
      else if (code >= 65) { val = code - 65 + 10; } // A
      else if (code >= 48 && code <= 57) { val = code - 48; } // 0-9
      else { val = Infinity; }
      if (val >= radix) { break }
      lastCode = code;
      total = total * radix + val;
    }

    if (allowSeparators && lastCode === 95) { this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"); }
    if (this.pos === start || len != null && this.pos - start !== len) { return null }

    return total
  };

  function stringToNumber(str, isLegacyOctalNumericLiteral) {
    if (isLegacyOctalNumericLiteral) {
      return parseInt(str, 8)
    }

    // `parseFloat(value)` stops parsing at the first numeric separator then returns a wrong value.
    return parseFloat(str.replace(/_/g, ""))
  }

  function stringToBigInt(str) {
    if (typeof BigInt !== "function") {
      return null
    }

    // `BigInt(value)` throws syntax error if the string contains numeric separators.
    return BigInt(str.replace(/_/g, ""))
  }

  pp$9.readRadixNumber = function(radix) {
    var start = this.pos;
    this.pos += 2; // 0x
    var val = this.readInt(radix);
    if (val == null) { this.raise(this.start + 2, "Expected number in radix " + radix); }
    if (this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110) {
      val = stringToBigInt(this.input.slice(start, this.pos));
      ++this.pos;
    } else if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }
    return this.finishToken(types.num, val)
  };

  // Read an integer, octal integer, or floating-point number.

  pp$9.readNumber = function(startsWithDot) {
    var start = this.pos;
    if (!startsWithDot && this.readInt(10, undefined, true) === null) { this.raise(start, "Invalid number"); }
    var octal = this.pos - start >= 2 && this.input.charCodeAt(start) === 48;
    if (octal && this.strict) { this.raise(start, "Invalid number"); }
    var next = this.input.charCodeAt(this.pos);
    if (!octal && !startsWithDot && this.options.ecmaVersion >= 11 && next === 110) {
      var val$1 = stringToBigInt(this.input.slice(start, this.pos));
      ++this.pos;
      if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }
      return this.finishToken(types.num, val$1)
    }
    if (octal && /[89]/.test(this.input.slice(start, this.pos))) { octal = false; }
    if (next === 46 && !octal) { // '.'
      ++this.pos;
      this.readInt(10);
      next = this.input.charCodeAt(this.pos);
    }
    if ((next === 69 || next === 101) && !octal) { // 'eE'
      next = this.input.charCodeAt(++this.pos);
      if (next === 43 || next === 45) { ++this.pos; } // '+-'
      if (this.readInt(10) === null) { this.raise(start, "Invalid number"); }
    }
    if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }

    var val = stringToNumber(this.input.slice(start, this.pos), octal);
    return this.finishToken(types.num, val)
  };

  // Read a string value, interpreting backslash-escapes.

  pp$9.readCodePoint = function() {
    var ch = this.input.charCodeAt(this.pos), code;

    if (ch === 123) { // '{'
      if (this.options.ecmaVersion < 6) { this.unexpected(); }
      var codePos = ++this.pos;
      code = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
      ++this.pos;
      if (code > 0x10FFFF) { this.invalidStringToken(codePos, "Code point out of bounds"); }
    } else {
      code = this.readHexChar(4);
    }
    return code
  };

  function codePointToString$1(code) {
    // UTF-16 Decoding
    if (code <= 0xFFFF) { return String.fromCharCode(code) }
    code -= 0x10000;
    return String.fromCharCode((code >> 10) + 0xD800, (code & 1023) + 0xDC00)
  }

  pp$9.readString = function(quote) {
    var out = "", chunkStart = ++this.pos;
    for (;;) {
      if (this.pos >= this.input.length) { this.raise(this.start, "Unterminated string constant"); }
      var ch = this.input.charCodeAt(this.pos);
      if (ch === quote) { break }
      if (ch === 92) { // '\'
        out += this.input.slice(chunkStart, this.pos);
        out += this.readEscapedChar(false);
        chunkStart = this.pos;
      } else {
        if (isNewLine(ch, this.options.ecmaVersion >= 10)) { this.raise(this.start, "Unterminated string constant"); }
        ++this.pos;
      }
    }
    out += this.input.slice(chunkStart, this.pos++);
    return this.finishToken(types.string, out)
  };

  // Reads template string tokens.

  var INVALID_TEMPLATE_ESCAPE_ERROR = {};

  pp$9.tryReadTemplateToken = function() {
    this.inTemplateElement = true;
    try {
      this.readTmplToken();
    } catch (err) {
      if (err === INVALID_TEMPLATE_ESCAPE_ERROR) {
        this.readInvalidTemplateToken();
      } else {
        throw err
      }
    }

    this.inTemplateElement = false;
  };

  pp$9.invalidStringToken = function(position, message) {
    if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
      throw INVALID_TEMPLATE_ESCAPE_ERROR
    } else {
      this.raise(position, message);
    }
  };

  pp$9.readTmplToken = function() {
    var out = "", chunkStart = this.pos;
    for (;;) {
      if (this.pos >= this.input.length) { this.raise(this.start, "Unterminated template"); }
      var ch = this.input.charCodeAt(this.pos);
      if (ch === 96 || ch === 36 && this.input.charCodeAt(this.pos + 1) === 123) { // '`', '${'
        if (this.pos === this.start && (this.type === types.template || this.type === types.invalidTemplate)) {
          if (ch === 36) {
            this.pos += 2;
            return this.finishToken(types.dollarBraceL)
          } else {
            ++this.pos;
            return this.finishToken(types.backQuote)
          }
        }
        out += this.input.slice(chunkStart, this.pos);
        return this.finishToken(types.template, out)
      }
      if (ch === 92) { // '\'
        out += this.input.slice(chunkStart, this.pos);
        out += this.readEscapedChar(true);
        chunkStart = this.pos;
      } else if (isNewLine(ch)) {
        out += this.input.slice(chunkStart, this.pos);
        ++this.pos;
        switch (ch) {
        case 13:
          if (this.input.charCodeAt(this.pos) === 10) { ++this.pos; }
        case 10:
          out += "\n";
          break
        default:
          out += String.fromCharCode(ch);
          break
        }
        if (this.options.locations) {
          ++this.curLine;
          this.lineStart = this.pos;
        }
        chunkStart = this.pos;
      } else {
        ++this.pos;
      }
    }
  };

  // Reads a template token to search for the end, without validating any escape sequences
  pp$9.readInvalidTemplateToken = function() {
    for (; this.pos < this.input.length; this.pos++) {
      switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break

      case "$":
        if (this.input[this.pos + 1] !== "{") {
          break
        }
      // falls through

      case "`":
        return this.finishToken(types.invalidTemplate, this.input.slice(this.start, this.pos))

      // no default
      }
    }
    this.raise(this.start, "Unterminated template");
  };

  // Used to read escaped characters

  pp$9.readEscapedChar = function(inTemplate) {
    var ch = this.input.charCodeAt(++this.pos);
    ++this.pos;
    switch (ch) {
    case 110: return "\n" // 'n' -> '\n'
    case 114: return "\r" // 'r' -> '\r'
    case 120: return String.fromCharCode(this.readHexChar(2)) // 'x'
    case 117: return codePointToString$1(this.readCodePoint()) // 'u'
    case 116: return "\t" // 't' -> '\t'
    case 98: return "\b" // 'b' -> '\b'
    case 118: return "\u000b" // 'v' -> '\u000b'
    case 102: return "\f" // 'f' -> '\f'
    case 13: if (this.input.charCodeAt(this.pos) === 10) { ++this.pos; } // '\r\n'
    case 10: // ' \n'
      if (this.options.locations) { this.lineStart = this.pos; ++this.curLine; }
      return ""
    case 56:
    case 57:
      if (inTemplate) {
        var codePos = this.pos - 1;

        this.invalidStringToken(
          codePos,
          "Invalid escape sequence in template string"
        );

        return null
      }
    default:
      if (ch >= 48 && ch <= 55) {
        var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
        var octal = parseInt(octalStr, 8);
        if (octal > 255) {
          octalStr = octalStr.slice(0, -1);
          octal = parseInt(octalStr, 8);
        }
        this.pos += octalStr.length - 1;
        ch = this.input.charCodeAt(this.pos);
        if ((octalStr !== "0" || ch === 56 || ch === 57) && (this.strict || inTemplate)) {
          this.invalidStringToken(
            this.pos - 1 - octalStr.length,
            inTemplate
              ? "Octal literal in template string"
              : "Octal literal in strict mode"
          );
        }
        return String.fromCharCode(octal)
      }
      if (isNewLine(ch)) {
        // Unicode new line characters after \ get removed from output in both
        // template literals and strings
        return ""
      }
      return String.fromCharCode(ch)
    }
  };

  // Used to read character escape sequences ('\x', '\u', '\U').

  pp$9.readHexChar = function(len) {
    var codePos = this.pos;
    var n = this.readInt(16, len);
    if (n === null) { this.invalidStringToken(codePos, "Bad character escape sequence"); }
    return n
  };

  // Read an identifier, and return it as a string. Sets `this.containsEsc`
  // to whether the word contained a '\u' escape.
  //
  // Incrementally adds only escaped chars, adding other chunks as-is
  // as a micro-optimization.

  pp$9.readWord1 = function() {
    this.containsEsc = false;
    var word = "", first = true, chunkStart = this.pos;
    var astral = this.options.ecmaVersion >= 6;
    while (this.pos < this.input.length) {
      var ch = this.fullCharCodeAtPos();
      if (isIdentifierChar(ch, astral)) {
        this.pos += ch <= 0xffff ? 1 : 2;
      } else if (ch === 92) { // "\"
        this.containsEsc = true;
        word += this.input.slice(chunkStart, this.pos);
        var escStart = this.pos;
        if (this.input.charCodeAt(++this.pos) !== 117) // "u"
          { this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"); }
        ++this.pos;
        var esc = this.readCodePoint();
        if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral))
          { this.invalidStringToken(escStart, "Invalid Unicode escape"); }
        word += codePointToString$1(esc);
        chunkStart = this.pos;
      } else {
        break
      }
      first = false;
    }
    return word + this.input.slice(chunkStart, this.pos)
  };

  // Read an identifier or keyword token. Will check for reserved
  // words when necessary.

  pp$9.readWord = function() {
    var word = this.readWord1();
    var type = types.name;
    if (this.keywords.test(word)) {
      type = keywords$1[word];
    }
    return this.finishToken(type, word)
  };

  // Acorn is a tiny, fast JavaScript parser written in JavaScript.

  var version = "7.4.0";

  Parser.acorn = {
    Parser: Parser,
    version: version,
    defaultOptions: defaultOptions,
    Position: Position,
    SourceLocation: SourceLocation,
    getLineInfo: getLineInfo,
    Node: Node$1,
    TokenType: TokenType,
    tokTypes: types,
    keywordTypes: keywords$1,
    TokContext: TokContext,
    tokContexts: types$1,
    isIdentifierChar: isIdentifierChar,
    isIdentifierStart: isIdentifierStart,
    Token: Token,
    isNewLine: isNewLine,
    lineBreak: lineBreak,
    lineBreakG: lineBreakG,
    nonASCIIwhitespace: nonASCIIwhitespace
  };

  // The main exported interface (under `self.acorn` when in the
  // browser) is a `parse` function that takes a code string and
  // returns an abstract syntax tree as specified by [Mozilla parser
  // API][api].
  //
  // [api]: https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API

  function parse(input, options) {
    return Parser.parse(input, options)
  }

  // Acorn is organized as a tokenizer and a recursive-descent parser.
  // The `tokenizer` export provides an interface to the tokenizer.

  function tokenizer(input, options) {
    return Parser.tokenizer(input, options)
  }

  // -------------- Import modules from npm directly from eval -------------

  const populateWindowNamespace = (module) => {
    for (let p in module) window[p] = module[p];
  };

  const ownNamespace = (namespace, d) => (module) =>
    window[namespace] = d ? module.default : module;

  const populateOn = (namespace, d) =>
    namespace === null ?
      populateWindowNamespace
      : ownNamespace (namespace, d);

  const cdnImport = (cdn) => (pkg, ns, d = false) =>
    import (cdn + pkg)
      .then (populateOn (ns !== undefined ? ns : pkg, d));

  const unpkgImport = 
  	cdnImport ('https://unpkg.com/');

  const skypackImport = 
    cdnImport ('https://cdn.skypack.dev/');

  const npmImport = (pkg, ns) => {
    // By using null as namespace, all names
    // from package namespace will be populated into
    // window namespace.
    if (pkg === 'frmidi') {
      return unpkgImport ('frmidi', ns)
    } else if (pkg === 'ramda') {
      return skypackImport ('ramda', ns)
    } else if (pkg === 'hybrids') {
      return unpkgImport ('hybrids', ns)
    } else if (pkg === 'rxjs') {
      return skypackImport ('rxjs', ns)
    } else if (pkg === 'rxjs/operators') {
      return skypackImport ('rxjs/operators', ns)
    } else {
      return unpkgImport (pkg, ns)
    }
  };

  // Importing npm packages ------------------------------------------------

  // ---------------------------------------------------- import '<package>'

  const regex1 = /import\s*['|"](?<package>.*)['|"]/;
  const subst1 = "efimera.npmImport ('$<package>')"; 

  // ------------------------------- import * as <namespace> from '<package>'

  const regex2 = /import\s*\*\s*as\s*(?<namespace>[^\s]*)\s*from\s*['|"](?<package>.*)['|"]/;
  const subst2 = "efimera.npmImport ('$<package>', '$<namespace>')";

  // --------------------------------  import { <exports> } from '<package>'

  const regex3 = /import\s*{(?<exports>.*)}\s*from\s*['|"](?<package>.*)['|"]/;
  const subst3 = "efimera.npmImport ('$<package>').then (m => '$<exports>'.split (',').map ((s) => { let p = s.trim (); window[p] = m[p] }))";

  // ------------------------------- import * from '<package>'

  // This is not correct Javascript syntax, but I find it pretty useful.

  const regex4 = /import\s*\*\s*from\s*['|"](?<package>.*)['|"]/;
  const subst4 = "efimera.npmImport ('$<package>', null)";

  const replaceImports = (line) =>
      line.replace (regex1, subst1)
          .replace (regex2, subst2)
          .replace (regex3, subst3)
          .replace (regex4, subst4);

  // Referring efimera objects ---------------------------------------------

  // --------------------------------------- Efimera session (Global object)

  const regex01 = /@efimera/;
  const subst01 = "document.querySelector ('e-session')";

  // ------------------------------------------ Render view of current block

  const regex02 = /@out/;
  const subst02 = "document.querySelector ('e-block:nth-of-type(' + (document.querySelector ('e-term').doc.focused + 1) + ')').preview";

  // ---------------------------------------- Render view of block by number

  const regex03 = /@(\d*)out/;
  const subst03 = "document.querySelector ('e-block:nth-of-type($1)').preview";

  // ------------------------------------------- Input view of current block

  const regex04 = /@in/;
  const subst04 = "document.querySelector ('e-block:nth-of-type(' + (document.querySelector ('e-term').doc.focused + 1) + ')').input";

  // ----------------------------------------- Input view of block by number

  const regex05 = /@(\d*)in/;
  const subst05 = "document.querySelector ('e-block:nth-of-type($1)').input";

  // ------------- Result (output view) of two blocks before the current one

  const regex06 = /@@@/;
  const subst06 = "document.querySelector ('e-block:nth-of-type(' + (document.querySelector ('e-term').doc.focused - 1) + ')').output.result";

  // --------------------------------- Result (output view) of previous block

  const regex07 = /@@/;
  const subst07 = "document.querySelector ('e-block:nth-of-type(' + (document.querySelector ('e-term').doc.focused) + ')').output.result";


  // ------------------------------- Result (output view) of block by number

  const regex08 = /@(\d*)@/;
  const subst08 = "document.querySelector ('e-block:nth-of-type($1)').output.result";

  // ----------------------------------------------------------- Term object

  const regex09 = /@term/;
  const subst09 = "document.querySelector ('e-term')";

  // -------------------------------------------------- Current block object

  const regex010 = /@block/;
  const subst010 = "document.querySelector ('e-block:nth-of-type(' + (document.querySelector ('e-term').doc.focused + 1) + ')')";

  // ------------------------------------------------ Block object by number

  const regex011 = /@(\d*)block/;
  const subst011 = "document.querySelector ('e-block:nth-of-type($1)')";

  const replaceEfimeraObjects = (line) =>
    line.replace (regex01, subst01)
        .replace (regex02, subst02)
        .replace (regex03, subst03)
        .replace (regex04, subst04)
        .replace (regex05, subst05)
        .replace (regex06, subst06)
        .replace (regex07, subst07)
        .replace (regex08, subst08)
        .replace (regex09, subst09)
        .replace (regex010, subst010)
        .replace (regex011, subst011);

  // ------------------------------------------------------------- Show help
  const regex001 = /^\.help$/;
  const subst001 = "efimera.showHelpDialog (document.querySelector ('e-session').help_dialog)";

  const replaceReplInstructions = (line) =>
    line.replace (regex001, subst001);

  const applyReplacements = 
    map$1 (
      pipe (replaceImports,
            replaceEfimeraObjects,
            replaceReplInstructions));

  // ----------------------- Check if code is evaluable --------------------
  // It's used on block listener to know if enter means evaluate or
  // add new line (when code is still not evaluable)

  const is_evaluable = (code) => {
    let modified = applyReplacements (code);
    let source_code = join ('\n') (modified);
    try {
      parse (source_code); 
      return true
    } catch (error) {
      return false
    }
  };

  // ---------------------------- Code evaluation --------------------------

  const evaluate_code = (host) => (code) => {
    let modified = applyReplacements (code);

    let strcode = join ('\n') (modified);

    let result = ['ok', undefined, null];
    try {
      result [1] = window.eval (strcode);
    } catch (e) {
      result [0] = 'error';
      result [2] = e;
      console.error (e);
    }

    return result
  };

  const update$1 = (host) => (detail) =>
    dispatch (host,
              'updateblock', 
              { detail: detail,
                bubbles: true,
                composed: true });

  const createListener = () => ({
    onkeydown: (host, evt) => {
      if (evt.key === 'Backspace') {
        if (emptyBlock (host.block) && evt.ctrlKey) {
          dispatch (host, 'deleteblock', { bubbles: true, composed: true });
        } else if (evt.ctrlKey) {
          update$1 (host) (deleteLine (host.block));
          if (length (host.block.lines) === 1) {
            dispatch (host, 'deleteresult', { bubbles: true, composed: true });
          }
        } else {
          if (emptyBlock (host.block)) {
            dispatch (host, 'deleteresult', { bubbles: true, composed: true });
          } else {
            update$1 (host) (removeText (1) (host.block));
          }
        }
      } else if (evt.key === 'Delete') {
        if (evt.ctrlKey) {
          dispatch (host, 'deleteblock', { bubbles: true, composed: true });
        } else {
          update$1 (host) (deleteText (1) (host.block));
        }
      } else if (evt.key === 'Insert') {
        if (evt.ctrlKey) {
          dispatch (host, 'insertblockafter', { bubbles: true, 
                                                composed: true });
        } else {
          return true
        }
      } else if (evt.key === 'Enter') {
        let singleline = length (host.block.lines) === 1;
        let valid_code = is_evaluable (host.block.lines);
        let do_evaluate = evt.ctrlKey || (singleline && valid_code);

        if (evt.shiftKey || !do_evaluate) {
          update$1 (host) (insertLine (host.block));
        } else {
          if (!equals (host.block.lines, [''])) {
            let [st, result, e] = evaluate_code () (host.block.lines);
            if (st === 'ok') {
              dispatch (host, 'error', { detail: { noerror: true },
                                         bubbles: true, 
                                         composed: true });
              dispatch (host, 
                        'blockevaluated', 
                        { detail: result, 
                          bubbles: true, 
                          composed: true });
            } else {
              dispatch (host, 'error', { detail: e,
                                         bubbles: true, 
                                         composed: true });
            }
          } else {
            dispatch (host, 'error', { detail: { noerror: true },
                                       bubbles: true,
                                       composed: true });
            dispatch (host, 'blockevaluated', { detail: undefined,
                                                bubbles: true,
                                                composed: true });
          }
        }
      } else if (evt.key === 'ArrowLeft') {
        update$1 (host) (moveCursorLeft (host.block));
      } else if (evt.key === 'ArrowRight') {
        if (willAutocomplete (host.block)) {
          update$1 (host) (autocomplete (host.block));
        } else {
          update$1 (host) (moveCursorRight (host.block));
        }
      } else if (evt.key === 'ArrowUp') {
        let b = moveCursorUp (host.block);
        if (equals (host.block.cursor) (b.cursor)) {
          dispatch (host, 'blocktop', { bubbles: true, composed: true });
        } else {
          update$1 (host) (b);
        }
      } else if (evt.key === 'ArrowDown') {
        let b = moveCursorDown (host.block);
        if (equals (host.block.cursor) (b.cursor)) {
          dispatch (host, 'blockbottom', { bubbles: true, composed: true });
        } else {
          update$1 (host) (moveCursorDown (host.block));
        }
      } else if (evt.key === 'End') {
        update$1 (host) (moveCursorToEnd (host.block));
      } else if (evt.key === 'Home') {
        update$1 (host) (moveCursorToStart (host.block));
      } else if (evt.key === 'Tab') {
        if (evt.ctrlKey) {
          // Maintain Ctrl+Tab for changing browser tabs
          return true
        }

        update$1 (host) (autocomplete (host.block));
      } else if ((evt.key === 's' || evt.key === 'S') && evt.ctrlKey) {
        dispatch (host, 'save', { bubbles: true, composed: true });
      } else if ((evt.key === 'o' || evt.key === 'O') && evt.ctrlKey) {
        dispatch (host, 'load', { bubbles: true, composed: true });
      } else if ((evt.key === 'l' || evt.key === 'L')) {
        if (evt.ctrlKey) {
          console.clear ();
          dispatch (host, 'error', { detail: { noerror: true },
                                     bubbles: true,
                                     composed: true });
          if (evt.shiftKey) {
            dispatch (host, 'cleardocument', { bubbles: true, composed: true });
          }
        } else {
          return true
        }
      } else {
        return true
      }

      evt.preventDefault ();
      return false
    },
    onkeypress: (host, evt) => {
      cond ([
        [propEq ('key') ('Tab'), () => {}],
        [T, () => update$1 (host) (insertText (evt.key) (host.block))]
      ]) (evt);
    }
  });

  // InputView renders a Block using a BlockRenderer

  const InputView = {
    block: {},
    container: ref ('#block-input-container'),
    focused: {
      set: (host, value, lastValue) => {
        if (value) host.container.focus ();
        return value
      }
    },
    renderer: { 
      connect: (host, key, invalidate) => { 
        host.renderer = createRenderer ();
    }},
    listener: {
      connect: (host, key, invalidate) => {
        host.listener = createListener ();
    }},
    render: render(({ block, focused, renderer, listener }) => html`
    <div id="block-input-container" 
         tabindex="0" 
         onkeydown=${listener.onkeydown}
         onkeypress=${listener.onkeypress}>
      ${ renderer.render (block, focused) }
    </div>
  `, 
    { shadowRoot: false })
  };

  // Objects have three possible states:

  // ----------------------------------------------------- On click callback

  // TODO: On click, set page scroll to click position (or
  // around that object)

  const noClick = (host, evt) => {
    if (evt.cancelBubble !== null) evt.cancelBubble = true;
    dispatch (host, 'refocus', { bubbles: true, composed: true });
    evt.preventDefault ();
    return false
  };

  const expandTag = (host, evt) => {
    host._expanded = true;
    host._hasExpanded = true;
    if (evt.cancelBubble !== null) evt.cancelBubble = true;
    dispatch (host, 'refocus', { bubbles: true, composed: true });
    evt.preventDefault ();
    return false
  };

  const collapseTag = (host, evt) => {
    host._expanded = false;
    if (evt.cancelBubble !== null) evt.cancelBubble = true;
    dispatch (host, 'refocus', { bubbles: true, composed: true });
    evt.preventDefault ();
    return false
  };

  // --------------------------------------------------------- HTML Elements

  const HTMLBaseElement = (value) =>
    ({ value: value,
       full_line: true,
       _expanded: false,
       _hasExpanded: false,
       prefix: '' });

  const ContainerClasses = (full_line) => (expanded) =>
    ({ 'pp-container': true,
       'condensed': !full_line,
       'collapsed': full_line && !expanded,
       'expanded': full_line && expanded });

  // Undefined

  const HTMLUndefinedTag = (full_line) => (prefix) =>
    html`<e-undefined class="result pp-undefined"
                    full_line="${ full_line }"
                    prefix="${ prefix }">
       </e-undefined>`;

  const HTMLUndefined = {
    ...HTMLBaseElement (undefined),
    render: noShadow(({ full_line, _expanded, prefix }) => html`
    <span class="${ ContainerClasses (full_line) (_expanded) }">
      ${ !full_line && html`
        <span class="condensed">
          ${ (prefix !== '') && html`
            <span class="pp-key">
              ${ prefix }:
            </span>`}
          undefined
        </span>`}
      ${ full_line && html`
        <span class="collapsed" onclick="${ noClick }">
          ${ (prefix !== '') && html`
            <span class="pp-key">
              ${ prefix }:
            </span>`}
          undefined
        </span>`}
    </span>
  `)};

  // Boolean

  const HTMLBooleanTag = (full_line) => (prefix) => (value) =>
    html`<e-boolean class="result pp-boolean" 
                  full_line="${ full_line }"
                  value="${ value }"
                  prefix="${ prefix }">
       </e-boolean>`;

  const HTMLBoolean = {
    ...HTMLBaseElement (true),
    render: noShadow(({ value, full_line, _expanded, prefix }) => html`
    <span class="${ ContainerClasses (full_line) (_expanded) }">
      ${ !full_line && html`
        <span class="condensed">
          ${ (prefix !== '') && html`
            <span class="pp-key">
              ${ prefix }:
            </span>`}
          ${ value ? 'true' : 'false' }
        </span>`}
      ${ full_line && html`
        <span class="collapsed" onclick="${ noClick }">
          ${ (prefix !== '') && html`
            <span class="pp-key">
              ${ prefix }:
            </span>`}
          ${ value ? 'true' : 'false' }
        </span>`}
      </span>
    </span>
  `)};

  // Number

  const HTMLNumberTag = (full_line) => (prefix) => (value) =>
    html`<e-number class="result pp-number" 
                 full_line="${ full_line }"
                 value="${ value }"
                 prefix="${ prefix }">
       </e-number`;

  const HTMLNumber = {
    ...HTMLBaseElement (0),
    render: noShadow (
      ({value, full_line, _expanded, _hasExpanded, prefix}) => html`
      <span class="${ ContainerClasses (full_line) (_expanded) }">
        ${ !full_line && html`
          <span class="condensed">
            ${ (prefix !== '') && html`
              <span class="pp-key">
                ${ prefix }:
              </span>`}
            ${ value }
          </span>`}
        ${ (full_line && !_expanded) && html`
          <span class="collapsed" onclick="${ expandTag }">
            ${ (prefix !== '') && html`
              <span class="pp-key">
                ${ prefix }:
              </span>`}
            ${ value }
          </span>`}
        ${ (full_line && _expanded) && html`
        <span class="expanded" onclick="${ collapseTag }">
          ${ (prefix !== '') && html`
            <span class="pp-key">
              ${ prefix }:
            </span>`}
          <span class="label decimal">DEC</span>
          <span class="decimal">${ value }</span>
          <span class="label hexadecimal">HEX</span>
          <span class="hexadecimal">${ value.toString (16) }</span>
          <span class="label binary">BIN</span>
          <span class="binary">${ value.toString (2) }</span>
        </span>`}
      </span>
    `)};

  // String

  const HTMLStringTag = (full_line) => (prefix) => (value) =>
    html`<e-string class="result pp-string"
                 full_line="${ full_line }"
                 value="${ value }"
                 prefix="${ prefix }">
       </e-string>`;

  const HTMLString = {
    ...HTMLBaseElement (''),
    render: noShadow (
      ({value, full_line, _expanded, _hasExpanded, prefix }) => html`
      <span class="${ ContainerClasses (full_line) (_expanded) }">
        ${ !full_line && html`
          <span class="condensed">
            ${ (prefix !== '') && html`
              <span class="pp-key">
                ${ prefix }:
              </span>`}
            '${ length (value) < 11 ? 
                  value
                  : value.slice (0, 10) + '…' }'
          </span>`}
        ${ full_line && !_expanded && html`
          <span class="collapsed" onclick="${ expandTag }">
            ${ (prefix !== '') && html`
              <span class="pp-key">
                ${ prefix }:
              </span>`}
            '${ value }'
          </span>`}
        ${ full_line && _expanded && html`
          <span class="expanded" onclick="${ collapseTag }">
            ${ (prefix !== '') && html`
              <span class="pp-key">
                ${ prefix }:
              </span>`}
            '${ value }'
          </span>`}
      </span>
    `)};

  // Array

  const HTMLArrayTag = (full_line) => (prefix) => (value) =>
    html`<e-array class="result pp-array"
                full_line="${ full_line }"
                value="${ value }"
                prefix="${ prefix }">
       </e-array>`;

  const HTMLArray = {
    ...HTMLBaseElement ([]),
    render: noShadow (
      ({value, full_line, _expanded, _hasExpanded, prefix}) => html`
      <span class="${ ContainerClasses (full_line) (_expanded) }">
        ${ !full_line && html`
          <span class="condensed">
            ${ (prefix !== '') && html`
              <span class="pp-key">
                ${ prefix }:
              </span>`}
            Array (${ length (value) })
          </span>`}
        ${ full_line && !_expanded && html`
          <span class="collapsed" onclick="${ expandTag }">
            <span class="pp-array-header">
            ${ (prefix !== '') && html`
              <span class="pp-key">
                ${ prefix }:
              </span>`}
              Array (${ length (value) }) [
            </span>
            ${ addIndex 
                 (map$1) 
                 ((i, idx) => html`
                   ${ toBlocks (false) ('') (i) }
                   ${ idx !== (length (value) - 1) ? ',' : '' }
                 `) 
                 (value) }
            <span class="pp-array-footer">]</span>
          </span>`}
        ${ ((full_line && _expanded) || _hasExpanded) && html`
          <span class="expanded" onclick="${ collapseTag }">
            <span class="pp-array-header">
              <span class="pp-array-header">
              ${ (prefix !== '') && html`
                <span class="pp-key">
                  ${ prefix }:
                </span>`}
                Array (${ length (value) }) [
              </span>
            </span>
            ${ addIndex 
                 (map$1)
                 ((i, idx) => html`
                   <span class="pp-array-item">
                     ${ toBlocks (true) (idx) (i) }
                   </span>`)
                 (value) }
            <span class="pp-array-footer">]</span>
          </span>`}
      </span>
    `)};

  // Promise

  const HTMLPromiseTag = (full_line) => (prefix) => (value) =>
    html`<e-promise class="result pp-promise"
                  full_line="${ full_line }"
                  value="${ value }"
                  prefix="${ prefix }">
       </e-promise>`;

  const HTMLPromise = {
    ...HTMLBaseElement ({}),
    render: noShadow (
      ({value, full_line, _expanded, _hasExpanded, prefix}) => html`
      ${ html.resolve (
        value.then ((x) => html`
                <span class="${ ContainerClasses (full_line) (_expanded) }">
                  ${ !full_line && html`
                    <span class="condensed">
                    ${ (prefix !== '') && html`
                      <span class="pp-key">
                        ${ prefix }:
                      </span>`}
                      ${ toBlocks (false) ('[[Resolved]]') (x) }
                    </span>
                  `}
                  ${ full_line && !_expanded && html`
                    <span class="collapsed" onclick="${ expandTag }">
                      ${ (prefix !== '') && html`
                        <span class="pp-key">
                          ${ prefix }:
                        </span>`}
                      ${ toBlocks (true) ('[[Resolved]]') (x) }
                    </span>
                  `}
                  ${ full_line && _expanded && html`
                    <span class="expanded" onclick="${ collapseTag }">
                      ${ (prefix !== '') && html`
                        <span class="pp-key">
                          ${ prefix }:
                        </span>`}
                      ${ toBlocks (true) ('[[Resolved]]') (x) }
                    </span>
                  `}
                </span>`)
             .catch ((e) => html`
                <span class="${ ContainerClasses (full_line) (_expanded) }">
                  ${ !full_line && html`
                    <span class="condensed">
                      ${ (prefix !== '') && html`
                        <span class="pp-key">
                          ${ prefix }:
                        </span>`}
                      ${ toBlocks (false) ('[[Rejected]]') (e) }
                    </span>
                  `}
                  ${ full_line && !_expanded && html`
                    <span class="collapsed" onclick="${ expandTag }">
                      ${ (prefix !== '') && html`
                        <span class="pp-key">
                          ${ prefix }:
                        </span>`}
                      ${ toBlocks (true) ('[[Rejected]]') (e) }
                    </span>
                  `}
                  ${ full_line && _expanded && html`
                    <span class="expanded" onclick="${ collapseTag }">
                      ${ (prefix !== '') && html`
                        <span class="pp-key">
                          ${ prefix }:
                        </span>`}
                      ${ toBlocks (true) ('[[Rejected]]') (e) }
                    </span>
                  `}
                </span>`),
        html`
          <span class="${ ContainerClasses (full_line) (_expanded) }">
            ${ !full_line && html`
              <span class="condensed">
                ${ (prefix !== '') && html`
                  <span class="pp-key">
                    ${ prefix }:
                  </span>`}
                [[Pending]]
              </span>`}
            ${ full_line && !_expanded && html`
              <span class="collapsed" onclick="${ expandTag }">
                ${ (prefix !== '') && html`
                  <span class="pp-key">
                    ${ prefix }:
                  </span>`}
                [[Pending]]
              </span>`}
            ${ full_line && _expanded && html`
              <span class="expanded" onclick="${ collapseTag }">
                ${ (prefix !== '') && html`
                  <span class="pp-key">
                    ${ prefix }:
                  </span>`}
                [[Pending]]
              </span>`}
        `)}`)};

  // Object

  const HTMLObjectTag = (full_line) => (prefix) => (value) =>
    html`<e-object class="result pp-object"
                 full_line="${ full_line }"
                 value="${ value }"
                 prefix="${ prefix }">
       </e-object>`;

  const HTMLObject = {
    ...HTMLBaseElement ({}),
    render: noShadow (
      ({value, full_line, _expanded, _hasExpanded, prefix}) => html`
      <span class="${ ContainerClasses (full_line) (_expanded) }">
        ${ !full_line && html`
          <span class="condensed">
            ${ (prefix !== '') && html`
              <span class="pp-key">
                ${ prefix }:
              </span>`}
            ${ value.constructor.name } {…}
          </span>
        `}
        ${ full_line && !_expanded && html`
          <span class="collapsed" onclick="${ expandTag }">
            <span class="pp-object-header">
              ${ (prefix !== '') && html`
                <span class="pp-key">
                  ${ prefix }:
                </span>`}
              ${ value.constructor.name } {
            </span>
            ${ addIndex 
                 (map$1) 
                 ((k, idx) => html`
                   <span class="pp-object-property">
                     ${ toBlocks (false) (k) (value[k]) }
                     ${ idx !== (length (keys (value)) - 1) ? ',' : '' }
                   </span>`)
                 (keys (value)) }
            <span class="pp-object-footer">}</span>
          </span>
        `}
        ${ full_line && _expanded && html`
          <span class="expanded" onclick="${ collapseTag }">
            <span class="pp-object-header">
              ${ (prefix !== '') && html`
                <span class="pp-key">
                  ${ prefix }:
                </span>`}
              ${ value.constructor.name } {
            </span>
            ${ map$1
                 ((k) => html`
                   <span class="pp-object-property">
                     ${ toBlocks (true) (k) (value[k]) }
                   </span>`)
                 (keys (value)) }
            <span class="pp-object-footer">}</span>
          </span>
        `}
      </span>
    `)};

  // Function

  const HTMLFunctionTag = (full_line) => (prefix) => (value) =>
    html`<e-function class="result pp-function"
                   full_line="${ full_line }"
                   prefix="${ prefix }"
                   value="${ value }">
       </e-function>`;

  const HTMLFunction = {
    ...HTMLBaseElement ({
      get: (host, lastValue) => lastValue,
      set: (host, value, lastValue) => value
    }),
    render: noShadow (
      ({value, full_line, _expanded, _hasExpanded, prefix}) => html`
      <span class="${ ContainerClasses (full_line) (_expanded) }">
        ${ !full_line && html`
          <span class="condensed">
            ${ (prefix !== '') && html`
              <span class="pp-key">
                ${ prefix }:
              </span>`}
            ${ value.toString () }  
          </span>
        `}
        ${ (full_line && !_expanded) && html`
          <span class="collapsed" onclick="${ expandTag }">
            ${ (prefix !== '') && html`
              <span class="pp-key">
                ${ prefix }:
              </span>`}
            ${ value.toString () }
          </span>
        `}
        ${ (full_line && _expanded) && html`
          <span class="expanded" onclick="${ collapseTag }">
            ${ (prefix !== '') && html`
              <span class="pp-key">
                ${ prefix }:
              </span>`}
            <span class="pp-code">${ value.toString () }</code>
          </span>
      </span>`}`)};

  const toBlocks = (full_line) => (prefix) => (value) => 
    cond ([
      [isNil, always (HTMLUndefinedTag (full_line) (prefix))],
      [equals (true), always (HTMLBooleanTag (full_line) (prefix) (true))],
      [equals (false), always (HTMLBooleanTag (full_line) (prefix) (false))],
      [is (Number), always (HTMLNumberTag (full_line) (prefix) (value))],
      [is (String), always (HTMLStringTag (full_line) (prefix) (value))],
      [is (Array), always (HTMLArrayTag (full_line) (prefix) (value))],
      [is (Promise), always (HTMLPromiseTag (full_line) (prefix) (value))],
      [is (Function), always (HTMLFunctionTag (full_line) (prefix) (value))],
      [is (Object), always (HTMLObjectTag (full_line) (prefix) (value))],
      // Regular Expression,
      // Module!!
    ]) (value);

  const ResultDefines = {
    EUndefined: HTMLUndefined,
    EBoolean: HTMLBoolean,
    ENumber: HTMLNumber,
    EString: HTMLString,
    EArray: HTMLArray,
    EPromise: HTMLPromise,
    EFunction: HTMLFunction,
    EObject: HTMLObject,
  };

  const OutputView = {
    result: { evaluated: false, value: undefined },
    render: noShadow (
      ({ result }) => 
        html`${ result.evaluated && toBlocks (true) ('') (result.value) }`
          .define (ResultDefines))
  };

  const styles = `
:host { display: block; }
`;

  const RenderView = {
    render: render((host) => html``.style (styles), { shadowRoot: false })
  };

  const inputRefocus = (host) => {
    host.input.focused = true;
  };

  const BlockView = {
    block: {},
    result: { evaluated: false, value: undefined },
    focused: false,
    input: ref ('e-input'),
    output: ref ('e-output'),
    preview: ref ('e-render'),
    render: render(({ block, result, focused }) => html`
    <e-input block=${block}
             focused=${focused}>
    </e-input>
    <e-output result=${result}></e-output>
    <e-render></e-render>
  `.define ({
      EInput: InputView,
      EOutput: OutputView,
      ERender: RenderView
    }), { shadowRoot: false })
  };

  let keywords$2 = [
    'await', 'break', 'case', 'catch', 'class', 'const', 'continue', 
    'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 
    'extends', 'finally', 'for', 'function', 'if', 'implements', 'import', 
    'in', 'interface', 'instanceof', 'let', 'new', 'package', 'private', 
    'protected', 'public', 'return', 'static', 'super', 'switch', 'this', 
    'throw', 'try', 'typeof', 'var', 'void', 'while', 'with', 'yield' ];

  // As seen on:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
  let builtInObjects = [
    'Infinity', 'NaN', 'undefined', 'globalThis', 'eval', 'uneval', 
    'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'encodeURI', 
    'encodeURIComponent', 'decodeURI', 'decodeURIComponent', 'Object', 
    'Function', 'Boolean', 'Symbol', 'Error', 'AggregateError', 
    'EvalError', 'InternalError', 'RangeError', 'ReferenceError', 
    'SyntaxError', 'TypeError', 'URIError', 'Number', 'BigInt', 'Math', 
    'Date', 'String', 'RegExp', 'Array', 'Int8Array', 'Uint8Array', 
    'Uint8ClampedArray', 'Int16Array', 'Uint16Array', 'Int32Array', 
    'Uint32Array', 'Float32Array', 'Float64Array', 'BigInt64Array', 
    'BigUint64Array', 'Map', 'Set', 'WeakMap', 'WeakSet', 'ArrayBuffer', 
    'SharedArrayBuffer', 'Atomics', 'DataView', 'JSON', 'Promise', 
    'Generator', 'GeneratorFunction', 'AsyncFunction', 'Reflection', 
    'Reflect', 'Proxy', 'Intl', 'WebAssembly', 'arguments' ];

  // The pattern has to be consistent:
  // name dot name dot name dot
  // It can end at any level:
  // name
  // name dot
  // name dot name
  const innerGetScope = (tokens) => (from_name) => (scope) => {
    if (length (tokens) > 0) {
      let last_token = last (tokens);
      if (last_token.type.label === 'name') {
        if (from_name) {
          return scope
        } else {
          return innerGetScope (init (tokens)) 
                               (true) 
                               (prepend (last_token.value) (scope))
        }
      } else if (last_token.type.label === '.') {
        if (from_name === false) {
          return scope
        } else {
          return innerGetScope (init (tokens)) 
                               (false) 
                               (prepend ('.') (scope))
        }
      }
    }

    return scope
  };

  const getScope = (tokens) => {
    let result = innerGetScope (tokens) (undefined) ([]);
    let scope = without ('.') (init (result));
    let name = last (result);
    name = name === '.' ? '' : name;
    return [scope, name]
  };

  const autocomplete$1 = (block) => {
    let code =
      join ('\n')
           (take (caret (block) [1] + 1)
                 (prop ('lines')
                       (evolve ({ lines: adjust (caret (block) [1])
                                                (take (caret (block) [0])) })
                               (block))));

    try {
      let tokens = [...tokenizer (code)];
      let [scope, name] = getScope (tokens);

      let completions = [];
      if (name !== undefined && (last (code) === last (name) || (length (scope) > 0 && name === ''))) {
        // Search on scope
        for (let p in path (scope) (window)) {
          if (startsWith (name) (p)) {
            completions = append (p) (completions);
          }
        }
      }

      if (length (name) > 0 && length (scope) === 0) {
        // Search on keywords
        completions = concat (completions) (filter (startsWith (name)) (keywords$2));
        // Search on built in objects
        completions = concat (completions) (filter (startsWith (name)) (builtInObjects));
      }

      completions = sort ((a, b) => a.localeCompare (b)) (completions);

      let autocompletion = longestCommonSubstring (completions);
      autocompletion = autocompletion === undefined ? '' : autocompletion;
      autocompletion = drop (length (name)) (autocompletion);

      if (autocompletion === '' && length (completions) > 1) {
        autocompletion = '...';
      }

      return [completions, name, autocompletion]
    } catch {
      return [[], '', '']
    }
  };

  const longestCommonSubstring = (s1) => 
    is (Array, s1) ?
      reduce ((acc, value) => longestCommonSubstring (acc) (value))
             (head (s1))
             (tail (s1))
      : (s2) =>
          head (s1) === head (s2) && length (s1) > 0 && length (s2) > 0 ?
            head (s1) + longestCommonSubstring (tail (s1)) (tail (s2))
            : '';

  const autocompletionItem = (completion) =>
    html`<span class="completion">${ completion }</span>`;

  const AutocompletionView = {
    completions: [],
    render: render(({ completions }) => html`
    ${ map$1 (autocompletionItem) (completions) }
  `, { shadowRoot: false })
  };

  const moreInfo = (host, evt) =>
    dispatch (host, 'help', { bubbles: true, composed: true });

  const WelcomeBlockView = {
    render: () => html`
    <div class="welcome">
      <div class="line">Welcome to Efimera v1.0.18</div>
      <div class="line">Type ".help" or press <a href="#" onclick=${moreInfo}>here</a> for more information.</div>
    </div>
  `
  };

  const ErrorView = {
    error: property(null),
    render: render(({ error }) => html`
    ${ error && !has ('noerror') (error) ? error.toString () : '' }
  `, { shadowRoot: false })};

  // ---------------- Block modification / Autocompletion ------------------

  const onUpdateBlock = (idx) => (host, evt) => {
    host.doc = updateBlock (idx) (evt.detail) (host.doc); 
    doAutocompletion (host);
  };

  const onDeleteBlock = (idx) => (host, evt) => {
    if (length (host.doc.blocks) > 1) {
      host.doc = removeBlock (idx) (host.doc);
      host.results = remove (idx) (1) (host.results);
      doAutocompletion (host);
    } else {
      host.results = [{ evaluated: false, value: undefined }];
      host.doc = createDocument ();
    }
  };

  const onDeleteResult = (idx) => (host, evt) => {
    host.results = update (idx) 
                          ([{ evaluated: false, value: undefined }]) 
                          (host.results);
  };

  const onInsertBlockAfter = (idx) => (host, evt) => {
    host.doc = insertBlockAfter () (host.doc);
    host.results = insert (idx + 1) 
                          ({ evaluated: false, value: undefined })
                          (host.results);
  };

  const doAutocompletion = (host) => {
    let [block, idx] = focusedBlock (host.doc);
    let [completions, name, autocompletion] = autocomplete$1 (block);
    host.doc = updateBlock (idx)
                           (evolve ({ 
                             autocompletion: always (autocompletion),
                             completions: always (completions)
                            }) (block))
                           (host.doc);

    host.completions = completions;
  };

  // ------------------------- Code evaluation -----------------------------

  const blockEvaluated = (idx) => (host, evt) => {
    host.results = update (idx) 
                          ({ evaluated: true, value: evt.detail }) 
                          (host.results);
    if (idx === length (host.doc.blocks) - 1) {
      host.doc = appendBlock () (host.doc);
      host.results = append ({ evaluated: false, value: undefined }) 
                            (host.results);
      host.completions = [];
    }
  };

  const blockTop = (host, evt) => {
    host.doc = focusPreviousBlock (host.doc); 
    doAutocompletion (host);
  };

  const blockBottom = (host, evt) => {
    host.doc = focusNextBlock (host.doc);
    doAutocompletion (host);
  };

  const termRefocus = (host) => (evt) =>
    inputRefocus (
      host
        .render ()
        .querySelector ('e-block:nth-of-type(' + (host.doc.focused + 1) + ')'));

  const onBlockClick = (idx) => (host, evt) =>
    host.doc = 
      focusBlock (idx)
                 (updateBlock (idx) 
                              (moveCursorTo ([evt.detail.x, evt.detail.line])
                                            (host.doc.blocks [idx]))
                              (host.doc));

  // ----------------------- Manage evaluation errors ----------------------

  const onError = (host, evt) =>
    host.error = evt.detail;

  const clearDocument = (host, evt) => {
    host.results = [{ evaluated: false, value: undefined }];
    host.doc = createDocument ();
  };

  const TermView = {
    doc: { 
      connect: (host, key, invalidate) => { 
        host.doc = createDocument (); 

        // Add onclick event listener to host
        host.addEventListener ('click', termRefocus (host));
        return () => host.removeEventListener ('click', termRefocus (host))
      }
    },
    results: [{ evaluated: false, value: undefined }],
    completions: [],
    error: property(null),
    render: noShadow ((host) => {
      let { doc, completions, results, error } = host;
      return html`
    <e-welcome></e-welcome>
    ${addIndex (map$1) 
               ((b, idx) => 
                  html`
                    <e-block block=${b}
                             onmovecursorto=${onBlockClick (idx)}
                             ondeleteblock=${onDeleteBlock (idx)}
                             ondeleteresult=${onDeleteResult (idx)}
                             oninsertblockafter=${onInsertBlockAfter (idx)}
                             onupdateblock=${onUpdateBlock (idx)}
                             onblockevaluated=${blockEvaluated (idx)}
                             onblocktop=${blockTop}
                             onblockbottom=${blockBottom}
                             onerror=${ onError }
                             oncleardocument=${ clearDocument }
                             onrefocus=${ termRefocus (host) }
                             focused=${doc.focused === idx}
                             result=${results [idx]}>
                    </e-block>`) 
               (doc.blocks)}
    <div class="info-bars">
      <e-error error=${ error }></e-error>
      <e-completions completions=${ completions }></e-completions>
    </div>
  `.define ({ 
        EBlock: BlockView, 
        ECompletions: AutocompletionView,
        EWelcome: WelcomeBlockView,
        EError: ErrorView })})};

  // nb. This is for IE10 and lower _only_.
  var supportCustomEvent = window.CustomEvent;
  if (!supportCustomEvent || typeof supportCustomEvent === 'object') {
    supportCustomEvent = function CustomEvent(event, x) {
      x = x || {};
      var ev = document.createEvent('CustomEvent');
      ev.initCustomEvent(event, !!x.bubbles, !!x.cancelable, x.detail || null);
      return ev;
    };
    supportCustomEvent.prototype = window.Event.prototype;
  }

  /**
   * Dispatches the passed event to both an "on<type>" handler as well as via the
   * normal dispatch operation. Does not bubble.
   *
   * @param {!EventTarget} target
   * @param {!Event} event
   * @return {boolean}
   */
  function safeDispatchEvent(target, event) {
    var check = 'on' + event.type.toLowerCase();
    if (typeof target[check] === 'function') {
      target[check](event);
    }
    return target.dispatchEvent(event);
  }

  /**
   * @param {Element} el to check for stacking context
   * @return {boolean} whether this el or its parents creates a stacking context
   */
  function createsStackingContext(el) {
    while (el && el !== document.body) {
      var s = window.getComputedStyle(el);
      var invalid = function(k, ok) {
        return !(s[k] === undefined || s[k] === ok);
      };

      if (s.opacity < 1 ||
          invalid('zIndex', 'auto') ||
          invalid('transform', 'none') ||
          invalid('mixBlendMode', 'normal') ||
          invalid('filter', 'none') ||
          invalid('perspective', 'none') ||
          s['isolation'] === 'isolate' ||
          s.position === 'fixed' ||
          s.webkitOverflowScrolling === 'touch') {
        return true;
      }
      el = el.parentElement;
    }
    return false;
  }

  /**
   * Finds the nearest <dialog> from the passed element.
   *
   * @param {Element} el to search from
   * @return {HTMLDialogElement} dialog found
   */
  function findNearestDialog(el) {
    while (el) {
      if (el.localName === 'dialog') {
        return /** @type {HTMLDialogElement} */ (el);
      }
      el = el.parentElement;
    }
    return null;
  }

  /**
   * Blur the specified element, as long as it's not the HTML body element.
   * This works around an IE9/10 bug - blurring the body causes Windows to
   * blur the whole application.
   *
   * @param {Element} el to blur
   */
  function safeBlur(el) {
    // Find the actual focused element when the active element is inside a shadow root
    while (el && el.shadowRoot && el.shadowRoot.activeElement) {
      el = el.shadowRoot.activeElement;
    }

    if (el && el.blur && el !== document.body) {
      el.blur();
    }
  }

  /**
   * @param {!NodeList} nodeList to search
   * @param {Node} node to find
   * @return {boolean} whether node is inside nodeList
   */
  function inNodeList(nodeList, node) {
    for (var i = 0; i < nodeList.length; ++i) {
      if (nodeList[i] === node) {
        return true;
      }
    }
    return false;
  }

  /**
   * @param {HTMLFormElement} el to check
   * @return {boolean} whether this form has method="dialog"
   */
  function isFormMethodDialog(el) {
    if (!el || !el.hasAttribute('method')) {
      return false;
    }
    return el.getAttribute('method').toLowerCase() === 'dialog';
  }

  /**
   * @param {!DocumentFragment|!Element} hostElement
   * @return {?Element}
   */
  function findFocusableElementWithin(hostElement) {
    // Note that this is 'any focusable area'. This list is probably not exhaustive, but the
    // alternative involves stepping through and trying to focus everything.
    var opts = ['button', 'input', 'keygen', 'select', 'textarea'];
    var query = opts.map(function(el) {
      return el + ':not([disabled])';
    });
    // TODO(samthor): tabindex values that are not numeric are not focusable.
    query.push('[tabindex]:not([disabled]):not([tabindex=""])');  // tabindex != "", not disabled
    var target = hostElement.querySelector(query.join(', '));

    if (!target && 'attachShadow' in Element.prototype) {
      // If we haven't found a focusable target, see if the host element contains an element
      // which has a shadowRoot.
      // Recursively search for the first focusable item in shadow roots.
      var elems = hostElement.querySelectorAll('*');
      for (var i = 0; i < elems.length; i++) {
        if (elems[i].tagName && elems[i].shadowRoot) {
          target = findFocusableElementWithin(elems[i].shadowRoot);
          if (target) {
            break;
          }
        }
      }
    }
    return target;
  }

  /**
   * Determines if an element is attached to the DOM.
   * @param {Element} element to check
   * @return {Boolean} whether the element is in DOM
   */
  function isConnected(element) {
    return element.isConnected || document.body.contains(element);
  }

  /**
   * @param {!HTMLDialogElement} dialog to upgrade
   * @constructor
   */
  function dialogPolyfillInfo(dialog) {
    this.dialog_ = dialog;
    this.replacedStyleTop_ = false;
    this.openAsModal_ = false;

    // Set a11y role. Browsers that support dialog implicitly know this already.
    if (!dialog.hasAttribute('role')) {
      dialog.setAttribute('role', 'dialog');
    }

    dialog.show = this.show.bind(this);
    dialog.showModal = this.showModal.bind(this);
    dialog.close = this.close.bind(this);

    if (!('returnValue' in dialog)) {
      dialog.returnValue = '';
    }

    if ('MutationObserver' in window) {
      var mo = new MutationObserver(this.maybeHideModal.bind(this));
      mo.observe(dialog, {attributes: true, attributeFilter: ['open']});
    } else {
      // IE10 and below support. Note that DOMNodeRemoved etc fire _before_ removal. They also
      // seem to fire even if the element was removed as part of a parent removal. Use the removed
      // events to force downgrade (useful if removed/immediately added).
      var removed = false;
      var cb = function() {
        removed ? this.downgradeModal() : this.maybeHideModal();
        removed = false;
      }.bind(this);
      var timeout;
      var delayModel = function(ev) {
        if (ev.target !== dialog) { return; }  // not for a child element
        var cand = 'DOMNodeRemoved';
        removed |= (ev.type.substr(0, cand.length) === cand);
        window.clearTimeout(timeout);
        timeout = window.setTimeout(cb, 0);
      };
      ['DOMAttrModified', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument'].forEach(function(name) {
        dialog.addEventListener(name, delayModel);
      });
    }
    // Note that the DOM is observed inside DialogManager while any dialog
    // is being displayed as a modal, to catch modal removal from the DOM.

    Object.defineProperty(dialog, 'open', {
      set: this.setOpen.bind(this),
      get: dialog.hasAttribute.bind(dialog, 'open')
    });

    this.backdrop_ = document.createElement('div');
    this.backdrop_.className = 'backdrop';
    this.backdrop_.addEventListener('mouseup'  , this.backdropMouseEvent_.bind(this));
    this.backdrop_.addEventListener('mousedown', this.backdropMouseEvent_.bind(this));
    this.backdrop_.addEventListener('click'    , this.backdropMouseEvent_.bind(this));
  }

  dialogPolyfillInfo.prototype = /** @type {HTMLDialogElement.prototype} */ ({

    get dialog() {
      return this.dialog_;
    },

    /**
     * Maybe remove this dialog from the modal top layer. This is called when
     * a modal dialog may no longer be tenable, e.g., when the dialog is no
     * longer open or is no longer part of the DOM.
     */
    maybeHideModal: function() {
      if (this.dialog_.hasAttribute('open') && isConnected(this.dialog_)) { return; }
      this.downgradeModal();
    },

    /**
     * Remove this dialog from the modal top layer, leaving it as a non-modal.
     */
    downgradeModal: function() {
      if (!this.openAsModal_) { return; }
      this.openAsModal_ = false;
      this.dialog_.style.zIndex = '';

      // This won't match the native <dialog> exactly because if the user set top on a centered
      // polyfill dialog, that top gets thrown away when the dialog is closed. Not sure it's
      // possible to polyfill this perfectly.
      if (this.replacedStyleTop_) {
        this.dialog_.style.top = '';
        this.replacedStyleTop_ = false;
      }

      // Clear the backdrop and remove from the manager.
      this.backdrop_.parentNode && this.backdrop_.parentNode.removeChild(this.backdrop_);
      dialogPolyfill.dm.removeDialog(this);
    },

    /**
     * @param {boolean} value whether to open or close this dialog
     */
    setOpen: function(value) {
      if (value) {
        this.dialog_.hasAttribute('open') || this.dialog_.setAttribute('open', '');
      } else {
        this.dialog_.removeAttribute('open');
        this.maybeHideModal();  // nb. redundant with MutationObserver
      }
    },

    /**
     * Handles mouse events ('mouseup', 'mousedown', 'click') on the fake .backdrop element, redirecting them as if
     * they were on the dialog itself.
     *
     * @param {!Event} e to redirect
     */
    backdropMouseEvent_: function(e) {
      if (!this.dialog_.hasAttribute('tabindex')) {
        // Clicking on the backdrop should move the implicit cursor, even if dialog cannot be
        // focused. Create a fake thing to focus on. If the backdrop was _before_ the dialog, this
        // would not be needed - clicks would move the implicit cursor there.
        var fake = document.createElement('div');
        this.dialog_.insertBefore(fake, this.dialog_.firstChild);
        fake.tabIndex = -1;
        fake.focus();
        this.dialog_.removeChild(fake);
      } else {
        this.dialog_.focus();
      }

      var redirectedEvent = document.createEvent('MouseEvents');
      redirectedEvent.initMouseEvent(e.type, e.bubbles, e.cancelable, window,
          e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey,
          e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget);
      this.dialog_.dispatchEvent(redirectedEvent);
      e.stopPropagation();
    },

    /**
     * Focuses on the first focusable element within the dialog. This will always blur the current
     * focus, even if nothing within the dialog is found.
     */
    focus_: function() {
      // Find element with `autofocus` attribute, or fall back to the first form/tabindex control.
      var target = this.dialog_.querySelector('[autofocus]:not([disabled])');
      if (!target && this.dialog_.tabIndex >= 0) {
        target = this.dialog_;
      }
      if (!target) {
        target = findFocusableElementWithin(this.dialog_);
      }
      safeBlur(document.activeElement);
      target && target.focus();
    },

    /**
     * Sets the zIndex for the backdrop and dialog.
     *
     * @param {number} dialogZ
     * @param {number} backdropZ
     */
    updateZIndex: function(dialogZ, backdropZ) {
      if (dialogZ < backdropZ) {
        throw new Error('dialogZ should never be < backdropZ');
      }
      this.dialog_.style.zIndex = dialogZ;
      this.backdrop_.style.zIndex = backdropZ;
    },

    /**
     * Shows the dialog. If the dialog is already open, this does nothing.
     */
    show: function() {
      if (!this.dialog_.open) {
        this.setOpen(true);
        this.focus_();
      }
    },

    /**
     * Show this dialog modally.
     */
    showModal: function() {
      if (this.dialog_.hasAttribute('open')) {
        throw new Error('Failed to execute \'showModal\' on dialog: The element is already open, and therefore cannot be opened modally.');
      }
      if (!isConnected(this.dialog_)) {
        throw new Error('Failed to execute \'showModal\' on dialog: The element is not in a Document.');
      }
      if (!dialogPolyfill.dm.pushDialog(this)) {
        throw new Error('Failed to execute \'showModal\' on dialog: There are too many open modal dialogs.');
      }

      if (createsStackingContext(this.dialog_.parentElement)) {
        console.warn('A dialog is being shown inside a stacking context. ' +
            'This may cause it to be unusable. For more information, see this link: ' +
            'https://github.com/GoogleChrome/dialog-polyfill/#stacking-context');
      }

      this.setOpen(true);
      this.openAsModal_ = true;

      // Optionally center vertically, relative to the current viewport.
      if (dialogPolyfill.needsCentering(this.dialog_)) {
        dialogPolyfill.reposition(this.dialog_);
        this.replacedStyleTop_ = true;
      } else {
        this.replacedStyleTop_ = false;
      }

      // Insert backdrop.
      this.dialog_.parentNode.insertBefore(this.backdrop_, this.dialog_.nextSibling);

      // Focus on whatever inside the dialog.
      this.focus_();
    },

    /**
     * Closes this HTMLDialogElement. This is optional vs clearing the open
     * attribute, however this fires a 'close' event.
     *
     * @param {string=} opt_returnValue to use as the returnValue
     */
    close: function(opt_returnValue) {
      if (!this.dialog_.hasAttribute('open')) {
        throw new Error('Failed to execute \'close\' on dialog: The element does not have an \'open\' attribute, and therefore cannot be closed.');
      }
      this.setOpen(false);

      // Leave returnValue untouched in case it was set directly on the element
      if (opt_returnValue !== undefined) {
        this.dialog_.returnValue = opt_returnValue;
      }

      // Triggering "close" event for any attached listeners on the <dialog>.
      var closeEvent = new supportCustomEvent('close', {
        bubbles: false,
        cancelable: false
      });
      safeDispatchEvent(this.dialog_, closeEvent);
    }

  });

  var dialogPolyfill = {};

  dialogPolyfill.reposition = function(element) {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var topValue = scrollTop + (window.innerHeight - element.offsetHeight) / 2;
    element.style.top = Math.max(scrollTop, topValue) + 'px';
  };

  dialogPolyfill.isInlinePositionSetByStylesheet = function(element) {
    for (var i = 0; i < document.styleSheets.length; ++i) {
      var styleSheet = document.styleSheets[i];
      var cssRules = null;
      // Some browsers throw on cssRules.
      try {
        cssRules = styleSheet.cssRules;
      } catch (e) {}
      if (!cssRules) { continue; }
      for (var j = 0; j < cssRules.length; ++j) {
        var rule = cssRules[j];
        var selectedNodes = null;
        // Ignore errors on invalid selector texts.
        try {
          selectedNodes = document.querySelectorAll(rule.selectorText);
        } catch(e) {}
        if (!selectedNodes || !inNodeList(selectedNodes, element)) {
          continue;
        }
        var cssTop = rule.style.getPropertyValue('top');
        var cssBottom = rule.style.getPropertyValue('bottom');
        if ((cssTop && cssTop !== 'auto') || (cssBottom && cssBottom !== 'auto')) {
          return true;
        }
      }
    }
    return false;
  };

  dialogPolyfill.needsCentering = function(dialog) {
    var computedStyle = window.getComputedStyle(dialog);
    if (computedStyle.position !== 'absolute') {
      return false;
    }

    // We must determine whether the top/bottom specified value is non-auto.  In
    // WebKit/Blink, checking computedStyle.top == 'auto' is sufficient, but
    // Firefox returns the used value. So we do this crazy thing instead: check
    // the inline style and then go through CSS rules.
    if ((dialog.style.top !== 'auto' && dialog.style.top !== '') ||
        (dialog.style.bottom !== 'auto' && dialog.style.bottom !== '')) {
      return false;
    }
    return !dialogPolyfill.isInlinePositionSetByStylesheet(dialog);
  };

  /**
   * @param {!Element} element to force upgrade
   */
  dialogPolyfill.forceRegisterDialog = function(element) {
    if (window.HTMLDialogElement || element.showModal) {
      console.warn('This browser already supports <dialog>, the polyfill ' +
          'may not work correctly', element);
    }
    if (element.localName !== 'dialog') {
      throw new Error('Failed to register dialog: The element is not a dialog.');
    }
    new dialogPolyfillInfo(/** @type {!HTMLDialogElement} */ (element));
  };

  /**
   * @param {!Element} element to upgrade, if necessary
   */
  dialogPolyfill.registerDialog = function(element) {
    if (!element.showModal) {
      dialogPolyfill.forceRegisterDialog(element);
    }
  };

  /**
   * @constructor
   */
  dialogPolyfill.DialogManager = function() {
    /** @type {!Array<!dialogPolyfillInfo>} */
    this.pendingDialogStack = [];

    var checkDOM = this.checkDOM_.bind(this);

    // The overlay is used to simulate how a modal dialog blocks the document.
    // The blocking dialog is positioned on top of the overlay, and the rest of
    // the dialogs on the pending dialog stack are positioned below it. In the
    // actual implementation, the modal dialog stacking is controlled by the
    // top layer, where z-index has no effect.
    this.overlay = document.createElement('div');
    this.overlay.className = '_dialog_overlay';
    this.overlay.addEventListener('click', function(e) {
      this.forwardTab_ = undefined;
      e.stopPropagation();
      checkDOM([]);  // sanity-check DOM
    }.bind(this));

    this.handleKey_ = this.handleKey_.bind(this);
    this.handleFocus_ = this.handleFocus_.bind(this);

    this.zIndexLow_ = 100000;
    this.zIndexHigh_ = 100000 + 150;

    this.forwardTab_ = undefined;

    if ('MutationObserver' in window) {
      this.mo_ = new MutationObserver(function(records) {
        var removed = [];
        records.forEach(function(rec) {
          for (var i = 0, c; c = rec.removedNodes[i]; ++i) {
            if (!(c instanceof Element)) {
              continue;
            } else if (c.localName === 'dialog') {
              removed.push(c);
            }
            removed = removed.concat(c.querySelectorAll('dialog'));
          }
        });
        removed.length && checkDOM(removed);
      });
    }
  };

  /**
   * Called on the first modal dialog being shown. Adds the overlay and related
   * handlers.
   */
  dialogPolyfill.DialogManager.prototype.blockDocument = function() {
    document.documentElement.addEventListener('focus', this.handleFocus_, true);
    document.addEventListener('keydown', this.handleKey_);
    this.mo_ && this.mo_.observe(document, {childList: true, subtree: true});
  };

  /**
   * Called on the first modal dialog being removed, i.e., when no more modal
   * dialogs are visible.
   */
  dialogPolyfill.DialogManager.prototype.unblockDocument = function() {
    document.documentElement.removeEventListener('focus', this.handleFocus_, true);
    document.removeEventListener('keydown', this.handleKey_);
    this.mo_ && this.mo_.disconnect();
  };

  /**
   * Updates the stacking of all known dialogs.
   */
  dialogPolyfill.DialogManager.prototype.updateStacking = function() {
    var zIndex = this.zIndexHigh_;

    for (var i = 0, dpi; dpi = this.pendingDialogStack[i]; ++i) {
      dpi.updateZIndex(--zIndex, --zIndex);
      if (i === 0) {
        this.overlay.style.zIndex = --zIndex;
      }
    }

    // Make the overlay a sibling of the dialog itself.
    var last = this.pendingDialogStack[0];
    if (last) {
      var p = last.dialog.parentNode || document.body;
      p.appendChild(this.overlay);
    } else if (this.overlay.parentNode) {
      this.overlay.parentNode.removeChild(this.overlay);
    }
  };

  /**
   * @param {Element} candidate to check if contained or is the top-most modal dialog
   * @return {boolean} whether candidate is contained in top dialog
   */
  dialogPolyfill.DialogManager.prototype.containedByTopDialog_ = function(candidate) {
    while (candidate = findNearestDialog(candidate)) {
      for (var i = 0, dpi; dpi = this.pendingDialogStack[i]; ++i) {
        if (dpi.dialog === candidate) {
          return i === 0;  // only valid if top-most
        }
      }
      candidate = candidate.parentElement;
    }
    return false;
  };

  dialogPolyfill.DialogManager.prototype.handleFocus_ = function(event) {
    var target = event.composedPath ? event.composedPath()[0] : event.target;

    if (this.containedByTopDialog_(target)) { return; }

    if (document.activeElement === document.documentElement) { return; }

    event.preventDefault();
    event.stopPropagation();
    safeBlur(/** @type {Element} */ (target));

    if (this.forwardTab_ === undefined) { return; }  // move focus only from a tab key

    var dpi = this.pendingDialogStack[0];
    var dialog = dpi.dialog;
    var position = dialog.compareDocumentPosition(target);
    if (position & Node.DOCUMENT_POSITION_PRECEDING) {
      if (this.forwardTab_) {
        // forward
        dpi.focus_();
      } else if (target !== document.documentElement) {
        // backwards if we're not already focused on <html>
        document.documentElement.focus();
      }
    }

    return false;
  };

  dialogPolyfill.DialogManager.prototype.handleKey_ = function(event) {
    this.forwardTab_ = undefined;
    if (event.keyCode === 27) {
      event.preventDefault();
      event.stopPropagation();
      var cancelEvent = new supportCustomEvent('cancel', {
        bubbles: false,
        cancelable: true
      });
      var dpi = this.pendingDialogStack[0];
      if (dpi && safeDispatchEvent(dpi.dialog, cancelEvent)) {
        dpi.dialog.close();
      }
    } else if (event.keyCode === 9) {
      this.forwardTab_ = !event.shiftKey;
    }
  };

  /**
   * Finds and downgrades any known modal dialogs that are no longer displayed. Dialogs that are
   * removed and immediately readded don't stay modal, they become normal.
   *
   * @param {!Array<!HTMLDialogElement>} removed that have definitely been removed
   */
  dialogPolyfill.DialogManager.prototype.checkDOM_ = function(removed) {
    // This operates on a clone because it may cause it to change. Each change also calls
    // updateStacking, which only actually needs to happen once. But who removes many modal dialogs
    // at a time?!
    var clone = this.pendingDialogStack.slice();
    clone.forEach(function(dpi) {
      if (removed.indexOf(dpi.dialog) !== -1) {
        dpi.downgradeModal();
      } else {
        dpi.maybeHideModal();
      }
    });
  };

  /**
   * @param {!dialogPolyfillInfo} dpi
   * @return {boolean} whether the dialog was allowed
   */
  dialogPolyfill.DialogManager.prototype.pushDialog = function(dpi) {
    var allowed = (this.zIndexHigh_ - this.zIndexLow_) / 2 - 1;
    if (this.pendingDialogStack.length >= allowed) {
      return false;
    }
    if (this.pendingDialogStack.unshift(dpi) === 1) {
      this.blockDocument();
    }
    this.updateStacking();
    return true;
  };

  /**
   * @param {!dialogPolyfillInfo} dpi
   */
  dialogPolyfill.DialogManager.prototype.removeDialog = function(dpi) {
    var index = this.pendingDialogStack.indexOf(dpi);
    if (index === -1) { return; }

    this.pendingDialogStack.splice(index, 1);
    if (this.pendingDialogStack.length === 0) {
      this.unblockDocument();
    }
    this.updateStacking();
  };

  dialogPolyfill.dm = new dialogPolyfill.DialogManager();
  dialogPolyfill.formSubmitter = null;
  dialogPolyfill.useValue = null;

  /**
   * Installs global handlers, such as click listers and native method overrides. These are needed
   * even if a no dialog is registered, as they deal with <form method="dialog">.
   */
  if (window.HTMLDialogElement === undefined) {

    /**
     * If HTMLFormElement translates method="DIALOG" into 'get', then replace the descriptor with
     * one that returns the correct value.
     */
    var testForm = document.createElement('form');
    testForm.setAttribute('method', 'dialog');
    if (testForm.method !== 'dialog') {
      var methodDescriptor = Object.getOwnPropertyDescriptor(HTMLFormElement.prototype, 'method');
      if (methodDescriptor) {
        // nb. Some older iOS and older PhantomJS fail to return the descriptor. Don't do anything
        // and don't bother to update the element.
        var realGet = methodDescriptor.get;
        methodDescriptor.get = function() {
          if (isFormMethodDialog(this)) {
            return 'dialog';
          }
          return realGet.call(this);
        };
        var realSet = methodDescriptor.set;
        /** @this {HTMLElement} */
        methodDescriptor.set = function(v) {
          if (typeof v === 'string' && v.toLowerCase() === 'dialog') {
            return this.setAttribute('method', v);
          }
          return realSet.call(this, v);
        };
        Object.defineProperty(HTMLFormElement.prototype, 'method', methodDescriptor);
      }
    }

    /**
     * Global 'click' handler, to capture the <input type="submit"> or <button> element which has
     * submitted a <form method="dialog">. Needed as Safari and others don't report this inside
     * document.activeElement.
     */
    document.addEventListener('click', function(ev) {
      dialogPolyfill.formSubmitter = null;
      dialogPolyfill.useValue = null;
      if (ev.defaultPrevented) { return; }  // e.g. a submit which prevents default submission

      var target = /** @type {Element} */ (ev.target);
      if (!target || !isFormMethodDialog(target.form)) { return; }

      var valid = (target.type === 'submit' && ['button', 'input'].indexOf(target.localName) > -1);
      if (!valid) {
        if (!(target.localName === 'input' && target.type === 'image')) { return; }
        // this is a <input type="image">, which can submit forms
        dialogPolyfill.useValue = ev.offsetX + ',' + ev.offsetY;
      }

      var dialog = findNearestDialog(target);
      if (!dialog) { return; }

      dialogPolyfill.formSubmitter = target;

    }, false);

    /**
     * Replace the native HTMLFormElement.submit() method, as it won't fire the
     * submit event and give us a chance to respond.
     */
    var nativeFormSubmit = HTMLFormElement.prototype.submit;
    var replacementFormSubmit = function () {
      if (!isFormMethodDialog(this)) {
        return nativeFormSubmit.call(this);
      }
      var dialog = findNearestDialog(this);
      dialog && dialog.close();
    };
    HTMLFormElement.prototype.submit = replacementFormSubmit;

    /**
     * Global form 'dialog' method handler. Closes a dialog correctly on submit
     * and possibly sets its return value.
     */
    document.addEventListener('submit', function(ev) {
      if (ev.defaultPrevented) { return; }  // e.g. a submit which prevents default submission

      var form = /** @type {HTMLFormElement} */ (ev.target);
      if (!isFormMethodDialog(form)) { return; }
      ev.preventDefault();

      var dialog = findNearestDialog(form);
      if (!dialog) { return; }

      // Forms can only be submitted via .submit() or a click (?), but anyway: sanity-check that
      // the submitter is correct before using its value as .returnValue.
      var s = dialogPolyfill.formSubmitter;
      if (s && s.form === form) {
        dialog.close(dialogPolyfill.useValue || s.value);
      } else {
        dialog.close();
      }
      dialogPolyfill.formSubmitter = null;

    }, false);
  }

  const showExportDialog = (json) => (host) => {
    setOnCloseListener (host) (host.dialog);
    host.json = json;
    host.dialog.showModal ();
  };

  const copyToClipboard = (host, evt) => {
    navigator.clipboard.writeText (host.json);
    host.dialog.close ();
  };

  const formatLink = (json) =>
    'https://jordipbou.github.com/efimera/?json=' + encodeURI (json);

  const copyLinkToClipboard = (host, evt) => {
    navigator.clipboard.writeText (formatLink (host.json));
    host.dialog.close ();
  };

  const formatText = (blocks) =>
      join ('\n')
           (map$1 (join ('\n'))
             (map$1 
               (addIndex (map$1)
                         ((l, i) => i === 0 ? '> ' + l : '… ' + l))
               (map$1 (prop ('lines')) (blocks))));

  const copyTextToClipboard = (host, evt) => {
    let object = JSON.parse (host.json);
    let text = formatText (object.blocks);
    navigator.clipboard.writeText (text);
  };

  const copyTextAndLinkToClipboard = (host, evt) => {
    let object = JSON.parse (host.json);
    let text = formatText (object.blocks);
    let link = formatLink (host.json);

    navigator.clipboard.writeText (
      text + '\n[Load on Efimera](' + link + ')');
  };

  const ExportJSONView = {
    init: {
      connect: (host, key, invalidate) => {
        dialogPolyfill.registerDialog (host.dialog);
      },
    },
    json: '',
    dialog: ref ('dialog'),
    render: render(({ json }) => html`
    <dialog>
      <div class="json-export-header">
        <h3>Export to JSON</h3>
        <div>
          <button onclick=${ copyToClipboard }>Copy</button>
          <button onclick=${ copyLinkToClipboard }>Copy link</button>
          <button onclick=${ copyTextToClipboard }>Only text</button>
          <button onclick=${ copyTextAndLinkToClipboard }>Text and link</button>
        </div>
      </div>
      <div class="json-export-preview">${ json }</div>
    </dialog>
  `, { shadowRoot: false })
  };

  const showImportDialog = (host) => {
    setOnCloseListener (host) (host.dialog);
    host.dialog.showModal ();
  };

  const hideImportDialog = (host) =>
    host.dialog.close ();

  const showClipboardError = (host) => () =>
    host.error.innerHTML = 'You need to grant permission for clipboard access';

  const importFromJSON = (host, evt) =>
    navigator
      .permissions
      .query ({name: 'clipboard-read'})
      .then ((result) => 
        result.state === 'granted' || result.state === 'prompt' ?
          navigator
            .clipboard
            .readText ()
            .then (json =>
              dispatch (host, 
                        'import', 
                        { detail: json,
                          bubbles: true, 
                          composed: true }))
            .catch (showClipboardError (host))
          : showClipboardError (host) ());

  const ImportJSONView = {
    init: {
      connect: (host, key, invalidate) => {
        dialogPolyfill.registerDialog (host.dialog);
      },
    },
    textarea: ref ('textarea'),
    dialog: ref ('dialog'),
    error: ref ('p'),
    render: render(({ json }) => html`
    <dialog>
      <h3>Import from JSON</h3>
      <p></p>
      <div>
        <button onclick=${importFromJSON}>Import from clipboard</button>
      </div>
    </dialog>
  `, { shadowRoot: false })
  };

  const showHelpDialog = (host) => {
    setOnCloseListener (host) (host.dialog);
    host.dialog.showModal ();
  };

  const HelpView = {
    init: {
      connect: (host, key, invalidate) => {
        dialogPolyfill.registerDialog (host.dialog);
      },
    },
    dialog: ref ('dialog'),
    render: render(() => html`
    <dialog>
      <section>
        <header>Introduction</header>
        <p>
          Efimera is a Javascript repl/live coding environment.
        </p>
      </section>
      <section>
        <header>Import packages from npm</header>
        <p>
          Importing ES6 packages directly from npm by using standard
          import statements inside efimera is allowed.
        </p>
        <p>
          Examples:
        </p>
        <pre>
          > import * as R from 'ramda'
          > R.head ([1, 2, 3])
          1
        </pre>
        <pre>
          > import { head, tail } from 'ramda'
          > head ([1, 2, 3])
          1
          > tail ([1, 2, 3])
          [Array] [2, 3]
        </pre>
      </section>
    </dialog>
  `, { shadowRoot: false })};

  // ------------------------ Save / Load session --------------------------

  const onSave = (host, evt) => {
    let json = JSON.stringify (host.term.doc);
    showExportDialog (json) (host.export_dialog);
  };

  const onLoad = (host, evt) => 
    showImportDialog (host.import_dialog);

  const onImportJSON = (host, evt) => {
    let doc = JSON.parse (evt.detail);
    let n = length (doc.blocks);
    host.term.results = repeat ({ evaluated: false, value: undefined }, n);
    host.term.doc = doc;
    hideImportDialog (host.import_dialog);
  };

  // ----------------------------- Show help -------------------------------

  const onHelp = (host, evt) =>
    showHelpDialog (host.help_dialog);

  // --------------------------- Refocus block -----------------------------
  // After closing one of the export/import modals, focus is returned
  // to currently 'focused' block to be able to type without touching the
  // mouse.

  const refocus = (host, evt) =>
    termRefocus (host.term) (evt);

  // ---------------------------- Session View -----------------------------

  const SessionView = {
    url_params: {
      connect: (host, key, invalidate) => {
        let params = new URLSearchParams (window.location.search);
        if (params.has ('json')) {
          try {
            // TODO: Add JSON validation !!
            host.term.doc = JSON.parse (params.get ('json')); 
          } catch (e) {
            console.error (e); 
          }
        }
      }
    },
    term: ref ('e-term'),
    export_dialog: ref ('e-export-json'),
    import_dialog: ref ('e-import-json'),
    help_dialog: ref ('e-help'),
    render: render(() => html`
    <e-term onsave=${ onSave } 
            onload=${ onLoad } 
            onhelp=${ onHelp }></e-term>
    <e-export-json onrefocus=${ refocus }></e-export-json>
    <e-import-json onimport=${ onImportJSON }
                   onrefocus=${ refocus }>
    </e-import-json>
    <e-help onrefocus=${ refocus }></e-help>
  `.define ({
      ETerm: TermView,
      EExportJson: ExportJSONView,
      EImportJson: ImportJSONView,
      EHelp: HelpView
    }), { shadowRoot: false })
  };

  define ('e-session', SessionView);

  /**
   * A function that always returns `false`. Any passed in parameters are ignored.
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Function
   * @sig * -> Boolean
   * @param {*}
   * @return {Boolean}
   * @see R.T
   * @example
   *
   *      R.F(); //=> false
   */
  var F = function () {
    return false;
  };

  /**
   * A function that always returns `true`. Any passed in parameters are ignored.
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Function
   * @sig * -> Boolean
   * @param {*}
   * @return {Boolean}
   * @see R.F
   * @example
   *
   *      R.T(); //=> true
   */
  var T$1 = function () {
    return true;
  };

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
  var __$1 = {
    '@@functional/placeholder': true
  };

  function _isPlaceholder$1(a) {
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

  function _curry1$1(fn) {
    return function f1(a) {
      if (arguments.length === 0 || _isPlaceholder$1(a)) {
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

  function _curry2$1(fn) {
    return function f2(a, b) {
      switch (arguments.length) {
        case 0:
          return f2;

        case 1:
          return _isPlaceholder$1(a) ? f2 : _curry1$1(function (_b) {
            return fn(a, _b);
          });

        default:
          return _isPlaceholder$1(a) && _isPlaceholder$1(b) ? f2 : _isPlaceholder$1(a) ? _curry1$1(function (_a) {
            return fn(_a, b);
          }) : _isPlaceholder$1(b) ? _curry1$1(function (_b) {
            return fn(a, _b);
          }) : fn(a, b);
      }
    };
  }

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
  function _concat$1(set1, set2) {
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

  function _arity$1(n, fn) {
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

  function _curryN$1(length, received, fn) {
    return function () {
      var combined = [];
      var argsIdx = 0;
      var left = length;
      var combinedIdx = 0;

      while (combinedIdx < received.length || argsIdx < arguments.length) {
        var result;

        if (combinedIdx < received.length && (!_isPlaceholder$1(received[combinedIdx]) || argsIdx >= arguments.length)) {
          result = received[combinedIdx];
        } else {
          result = arguments[argsIdx];
          argsIdx += 1;
        }

        combined[combinedIdx] = result;

        if (!_isPlaceholder$1(result)) {
          left -= 1;
        }

        combinedIdx += 1;
      }

      return left <= 0 ? fn.apply(this, combined) : _arity$1(left, _curryN$1(length, combined, fn));
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

  var curryN$1 =
  /*#__PURE__*/
  _curry2$1(function curryN(length, fn) {
    if (length === 1) {
      return _curry1$1(fn);
    }

    return _arity$1(length, _curryN$1(length, [], fn));
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

  var addIndex$1 =
  /*#__PURE__*/
  _curry1$1(function addIndex(fn) {
    return curryN$1(fn.length, function () {
      var idx = 0;
      var origFn = arguments[0];
      var list = arguments[arguments.length - 1];
      var args = Array.prototype.slice.call(arguments, 0);

      args[0] = function () {
        var result = origFn.apply(this, _concat$1(arguments, [idx, list]));
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

  function _curry3$1(fn) {
    return function f3(a, b, c) {
      switch (arguments.length) {
        case 0:
          return f3;

        case 1:
          return _isPlaceholder$1(a) ? f3 : _curry2$1(function (_b, _c) {
            return fn(a, _b, _c);
          });

        case 2:
          return _isPlaceholder$1(a) && _isPlaceholder$1(b) ? f3 : _isPlaceholder$1(a) ? _curry2$1(function (_a, _c) {
            return fn(_a, b, _c);
          }) : _isPlaceholder$1(b) ? _curry2$1(function (_b, _c) {
            return fn(a, _b, _c);
          }) : _curry1$1(function (_c) {
            return fn(a, b, _c);
          });

        default:
          return _isPlaceholder$1(a) && _isPlaceholder$1(b) && _isPlaceholder$1(c) ? f3 : _isPlaceholder$1(a) && _isPlaceholder$1(b) ? _curry2$1(function (_a, _b) {
            return fn(_a, _b, c);
          }) : _isPlaceholder$1(a) && _isPlaceholder$1(c) ? _curry2$1(function (_a, _c) {
            return fn(_a, b, _c);
          }) : _isPlaceholder$1(b) && _isPlaceholder$1(c) ? _curry2$1(function (_b, _c) {
            return fn(a, _b, _c);
          }) : _isPlaceholder$1(a) ? _curry1$1(function (_a) {
            return fn(_a, b, c);
          }) : _isPlaceholder$1(b) ? _curry1$1(function (_b) {
            return fn(a, _b, c);
          }) : _isPlaceholder$1(c) ? _curry1$1(function (_c) {
            return fn(a, b, _c);
          }) : fn(a, b, c);
      }
    };
  }

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
  var _isArray$1 = Array.isArray || function _isArray(val) {
    return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
  };

  function _isTransformer$1(obj) {
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

  function _dispatchable$1(methodNames, xf, fn) {
    return function () {
      if (arguments.length === 0) {
        return fn();
      }

      var args = Array.prototype.slice.call(arguments, 0);
      var obj = args.pop();

      if (!_isArray$1(obj)) {
        var idx = 0;

        while (idx < methodNames.length) {
          if (typeof obj[methodNames[idx]] === 'function') {
            return obj[methodNames[idx]].apply(obj, args);
          }

          idx += 1;
        }

        if (_isTransformer$1(obj)) {
          var transducer = xf.apply(null, args);
          return transducer(obj);
        }
      }

      return fn.apply(this, arguments);
    };
  }

  function _reduced$1(x) {
    return x && x['@@transducer/reduced'] ? x : {
      '@@transducer/value': x,
      '@@transducer/reduced': true
    };
  }

  var _xfBase$1 = {
    init: function () {
      return this.xf['@@transducer/init']();
    },
    result: function (result) {
      return this.xf['@@transducer/result'](result);
    }
  };

  var XAll =
  /*#__PURE__*/
  function () {
    function XAll(f, xf) {
      this.xf = xf;
      this.f = f;
      this.all = true;
    }

    XAll.prototype['@@transducer/init'] = _xfBase$1.init;

    XAll.prototype['@@transducer/result'] = function (result) {
      if (this.all) {
        result = this.xf['@@transducer/step'](result, true);
      }

      return this.xf['@@transducer/result'](result);
    };

    XAll.prototype['@@transducer/step'] = function (result, input) {
      if (!this.f(input)) {
        this.all = false;
        result = _reduced$1(this.xf['@@transducer/step'](result, false));
      }

      return result;
    };

    return XAll;
  }();

  var _xall =
  /*#__PURE__*/
  _curry2$1(function _xall(f, xf) {
    return new XAll(f, xf);
  });

  /**
   * Returns `true` if all elements of the list match the predicate, `false` if
   * there are any that don't.
   *
   * Dispatches to the `all` method of the second argument, if present.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig (a -> Boolean) -> [a] -> Boolean
   * @param {Function} fn The predicate function.
   * @param {Array} list The array to consider.
   * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
   *         otherwise.
   * @see R.any, R.none, R.transduce
   * @example
   *
   *      const equals3 = R.equals(3);
   *      R.all(equals3)([3, 3, 3, 3]); //=> true
   *      R.all(equals3)([3, 3, 1, 3]); //=> false
   */

  var all =
  /*#__PURE__*/
  _curry2$1(
  /*#__PURE__*/
  _dispatchable$1(['all'], _xall, function all(fn, list) {
    var idx = 0;

    while (idx < list.length) {
      if (!fn(list[idx])) {
        return false;
      }

      idx += 1;
    }

    return true;
  }));

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

  var max$1 =
  /*#__PURE__*/
  _curry2$1(function max(a, b) {
    return b > a ? b : a;
  });

  function _map$1(fn, functor) {
    var idx = 0;
    var len = functor.length;
    var result = Array(len);

    while (idx < len) {
      result[idx] = fn(functor[idx]);
      idx += 1;
    }

    return result;
  }

  function _isString$1(x) {
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

  var _isArrayLike$1 =
  /*#__PURE__*/
  _curry1$1(function isArrayLike(x) {
    if (_isArray$1(x)) {
      return true;
    }

    if (!x) {
      return false;
    }

    if (typeof x !== 'object') {
      return false;
    }

    if (_isString$1(x)) {
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

  var XWrap$1 =
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

  function _xwrap$1(fn) {
    return new XWrap$1(fn);
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

  var bind$1 =
  /*#__PURE__*/
  _curry2$1(function bind(fn, thisObj) {
    return _arity$1(fn.length, function () {
      return fn.apply(thisObj, arguments);
    });
  });

  function _arrayReduce$1(xf, acc, list) {
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

  function _iterableReduce$1(xf, acc, iter) {
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

  function _methodReduce$1(xf, acc, obj, methodName) {
    return xf['@@transducer/result'](obj[methodName](bind$1(xf['@@transducer/step'], xf), acc));
  }

  var symIterator$1 = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
  function _reduce$1(fn, acc, list) {
    if (typeof fn === 'function') {
      fn = _xwrap$1(fn);
    }

    if (_isArrayLike$1(list)) {
      return _arrayReduce$1(fn, acc, list);
    }

    if (typeof list['fantasy-land/reduce'] === 'function') {
      return _methodReduce$1(fn, acc, list, 'fantasy-land/reduce');
    }

    if (list[symIterator$1] != null) {
      return _iterableReduce$1(fn, acc, list[symIterator$1]());
    }

    if (typeof list.next === 'function') {
      return _iterableReduce$1(fn, acc, list);
    }

    if (typeof list.reduce === 'function') {
      return _methodReduce$1(fn, acc, list, 'reduce');
    }

    throw new TypeError('reduce: list must be array or iterable');
  }

  var XMap$1 =
  /*#__PURE__*/
  function () {
    function XMap(f, xf) {
      this.xf = xf;
      this.f = f;
    }

    XMap.prototype['@@transducer/init'] = _xfBase$1.init;
    XMap.prototype['@@transducer/result'] = _xfBase$1.result;

    XMap.prototype['@@transducer/step'] = function (result, input) {
      return this.xf['@@transducer/step'](result, this.f(input));
    };

    return XMap;
  }();

  var _xmap$1 =
  /*#__PURE__*/
  _curry2$1(function _xmap(f, xf) {
    return new XMap$1(f, xf);
  });

  function _has$1(prop, obj) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

  var toString$3 = Object.prototype.toString;

  var _isArguments$1 =
  /*#__PURE__*/
  function () {
    return toString$3.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
      return toString$3.call(x) === '[object Arguments]';
    } : function _isArguments(x) {
      return _has$1('callee', x);
    };
  }();

  var hasEnumBug$1 = !
  /*#__PURE__*/
  {
    toString: null
  }.propertyIsEnumerable('toString');
  var nonEnumerableProps$1 = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString']; // Safari bug

  var hasArgsEnumBug$1 =
  /*#__PURE__*/
  function () {

    return arguments.propertyIsEnumerable('length');
  }();

  var contains$1 = function contains(list, item) {
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


  var keys$1 = typeof Object.keys === 'function' && !hasArgsEnumBug$1 ?
  /*#__PURE__*/
  _curry1$1(function keys(obj) {
    return Object(obj) !== obj ? [] : Object.keys(obj);
  }) :
  /*#__PURE__*/
  _curry1$1(function keys(obj) {
    if (Object(obj) !== obj) {
      return [];
    }

    var prop, nIdx;
    var ks = [];

    var checkArgsLength = hasArgsEnumBug$1 && _isArguments$1(obj);

    for (prop in obj) {
      if (_has$1(prop, obj) && (!checkArgsLength || prop !== 'length')) {
        ks[ks.length] = prop;
      }
    }

    if (hasEnumBug$1) {
      nIdx = nonEnumerableProps$1.length - 1;

      while (nIdx >= 0) {
        prop = nonEnumerableProps$1[nIdx];

        if (_has$1(prop, obj) && !contains$1(ks, prop)) {
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

  var map$2 =
  /*#__PURE__*/
  _curry2$1(
  /*#__PURE__*/
  _dispatchable$1(['fantasy-land/map', 'map'], _xmap$1, function map(fn, functor) {
    switch (Object.prototype.toString.call(functor)) {
      case '[object Function]':
        return curryN$1(functor.length, function () {
          return fn.call(this, functor.apply(this, arguments));
        });

      case '[object Object]':
        return _reduce$1(function (acc, key) {
          acc[key] = fn(functor[key]);
          return acc;
        }, {}, keys$1(functor));

      default:
        return _map$1(fn, functor);
    }
  }));

  /**
   * Determine if the passed argument is an integer.
   *
   * @private
   * @param {*} n
   * @category Type
   * @return {Boolean}
   */
  var _isInteger$1 = Number.isInteger || function _isInteger(n) {
    return n << 0 === n;
  };

  /**
   * Returns the nth element of the given list or string. If n is negative the
   * element at index length + n is returned.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig Number -> [a] -> a | Undefined
   * @sig Number -> String -> String
   * @param {Number} offset
   * @param {*} list
   * @return {*}
   * @example
   *
   *      const list = ['foo', 'bar', 'baz', 'quux'];
   *      R.nth(1, list); //=> 'bar'
   *      R.nth(-1, list); //=> 'quux'
   *      R.nth(-99, list); //=> undefined
   *
   *      R.nth(2, 'abc'); //=> 'c'
   *      R.nth(3, 'abc'); //=> ''
   * @symb R.nth(-1, [a, b, c]) = c
   * @symb R.nth(0, [a, b, c]) = a
   * @symb R.nth(1, [a, b, c]) = b
   */

  var nth$1 =
  /*#__PURE__*/
  _curry2$1(function nth(offset, list) {
    var idx = offset < 0 ? list.length + offset : offset;
    return _isString$1(list) ? list.charAt(idx) : list[idx];
  });

  /**
   * Retrieves the values at given paths of an object.
   *
   * @func
   * @memberOf R
   * @since v0.27.1
   * @category Object
   * @typedefn Idx = [String | Int]
   * @sig [Idx] -> {a} -> [a | Undefined]
   * @param {Array} pathsArray The array of paths to be fetched.
   * @param {Object} obj The object to retrieve the nested properties from.
   * @return {Array} A list consisting of values at paths specified by "pathsArray".
   * @see R.path
   * @example
   *
   *      R.paths([['a', 'b'], ['p', 0, 'q']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, 3]
   *      R.paths([['a', 'b'], ['p', 'r']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, undefined]
   */

  var paths$1 =
  /*#__PURE__*/
  _curry2$1(function paths(pathsArray, obj) {
    return pathsArray.map(function (paths) {
      var val = obj;
      var idx = 0;
      var p;

      while (idx < paths.length) {
        if (val == null) {
          return;
        }

        p = paths[idx];
        val = _isInteger$1(p) ? nth$1(p, val) : val[p];
        idx += 1;
      }

      return val;
    });
  });

  /**
   * Retrieve the value at a given path.
   *
   * @func
   * @memberOf R
   * @since v0.2.0
   * @category Object
   * @typedefn Idx = String | Int
   * @sig [Idx] -> {a} -> a | Undefined
   * @param {Array} path The path to use.
   * @param {Object} obj The object to retrieve the nested property from.
   * @return {*} The data at `path`.
   * @see R.prop, R.nth
   * @example
   *
   *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
   *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
   *      R.path(['a', 'b', 0], {a: {b: [1, 2, 3]}}); //=> 1
   *      R.path(['a', 'b', -2], {a: {b: [1, 2, 3]}}); //=> 2
   */

  var path$1 =
  /*#__PURE__*/
  _curry2$1(function path(pathAr, obj) {
    return paths$1([pathAr], obj)[0];
  });

  /**
   * Returns a function that when supplied an object returns the indicated
   * property of that object, if it exists.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Object
   * @typedefn Idx = String | Int
   * @sig Idx -> {s: a} -> a | Undefined
   * @param {String|Number} p The property name or array index
   * @param {Object} obj The object to query
   * @return {*} The value at `obj.p`.
   * @see R.path, R.nth
   * @example
   *
   *      R.prop('x', {x: 100}); //=> 100
   *      R.prop('x', {}); //=> undefined
   *      R.prop(0, [100]); //=> 100
   *      R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4
   */

  var prop$1 =
  /*#__PURE__*/
  _curry2$1(function prop(p, obj) {
    return path$1([p], obj);
  });

  /**
   * Returns a new list by plucking the same named property off all objects in
   * the list supplied.
   *
   * `pluck` will work on
   * any [functor](https://github.com/fantasyland/fantasy-land#functor) in
   * addition to arrays, as it is equivalent to `R.map(R.prop(k), f)`.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig Functor f => k -> f {k: v} -> f v
   * @param {Number|String} key The key name to pluck off of each object.
   * @param {Array} f The array or functor to consider.
   * @return {Array} The list of values for the given key.
   * @see R.props
   * @example
   *
   *      var getAges = R.pluck('age');
   *      getAges([{name: 'fred', age: 29}, {name: 'wilma', age: 27}]); //=> [29, 27]
   *
   *      R.pluck(0, [[1, 2], [3, 4]]);               //=> [1, 3]
   *      R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
   * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
   * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
   */

  var pluck =
  /*#__PURE__*/
  _curry2$1(function pluck(p, list) {
    return map$2(prop$1(p), list);
  });

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

  var reduce$1 =
  /*#__PURE__*/
  _curry3$1(_reduce$1);

  /**
   * Takes a list of predicates and returns a predicate that returns true for a
   * given list of arguments if every one of the provided predicates is satisfied
   * by those arguments.
   *
   * The function returned is a curried function whose arity matches that of the
   * highest-arity predicate.
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Logic
   * @sig [(*... -> Boolean)] -> (*... -> Boolean)
   * @param {Array} predicates An array of predicates to check
   * @return {Function} The combined predicate
   * @see R.anyPass
   * @example
   *
   *      const isQueen = R.propEq('rank', 'Q');
   *      const isSpade = R.propEq('suit', '♠︎');
   *      const isQueenOfSpades = R.allPass([isQueen, isSpade]);
   *
   *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
   *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
   */

  var allPass =
  /*#__PURE__*/
  _curry1$1(function allPass(preds) {
    return curryN$1(reduce$1(max$1, 0, pluck('length', preds)), function () {
      var idx = 0;
      var len = preds.length;

      while (idx < len) {
        if (!preds[idx].apply(this, arguments)) {
          return false;
        }

        idx += 1;
      }

      return true;
    });
  });

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

  var always$1 =
  /*#__PURE__*/
  _curry1$1(function always(val) {
    return function () {
      return val;
    };
  });

  /**
   * Returns `true` if both arguments are `true`; `false` otherwise.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Logic
   * @sig a -> b -> a | b
   * @param {Any} a
   * @param {Any} b
   * @return {Any} the first argument if it is falsy, otherwise the second argument.
   * @see R.both, R.xor
   * @example
   *
   *      R.and(true, true); //=> true
   *      R.and(true, false); //=> false
   *      R.and(false, true); //=> false
   *      R.and(false, false); //=> false
   */

  var and =
  /*#__PURE__*/
  _curry2$1(function and(a, b) {
    return a && b;
  });

  var XAny =
  /*#__PURE__*/
  function () {
    function XAny(f, xf) {
      this.xf = xf;
      this.f = f;
      this.any = false;
    }

    XAny.prototype['@@transducer/init'] = _xfBase$1.init;

    XAny.prototype['@@transducer/result'] = function (result) {
      if (!this.any) {
        result = this.xf['@@transducer/step'](result, false);
      }

      return this.xf['@@transducer/result'](result);
    };

    XAny.prototype['@@transducer/step'] = function (result, input) {
      if (this.f(input)) {
        this.any = true;
        result = _reduced$1(this.xf['@@transducer/step'](result, true));
      }

      return result;
    };

    return XAny;
  }();

  var _xany =
  /*#__PURE__*/
  _curry2$1(function _xany(f, xf) {
    return new XAny(f, xf);
  });

  /**
   * Returns `true` if at least one of the elements of the list match the predicate,
   * `false` otherwise.
   *
   * Dispatches to the `any` method of the second argument, if present.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig (a -> Boolean) -> [a] -> Boolean
   * @param {Function} fn The predicate function.
   * @param {Array} list The array to consider.
   * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
   *         otherwise.
   * @see R.all, R.none, R.transduce
   * @example
   *
   *      const lessThan0 = R.flip(R.lt)(0);
   *      const lessThan2 = R.flip(R.lt)(2);
   *      R.any(lessThan0)([1, 2]); //=> false
   *      R.any(lessThan2)([1, 2]); //=> true
   */

  var any =
  /*#__PURE__*/
  _curry2$1(
  /*#__PURE__*/
  _dispatchable$1(['any'], _xany, function any(fn, list) {
    var idx = 0;

    while (idx < list.length) {
      if (fn(list[idx])) {
        return true;
      }

      idx += 1;
    }

    return false;
  }));

  /**
   * Takes a list of predicates and returns a predicate that returns true for a
   * given list of arguments if at least one of the provided predicates is
   * satisfied by those arguments.
   *
   * The function returned is a curried function whose arity matches that of the
   * highest-arity predicate.
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Logic
   * @sig [(*... -> Boolean)] -> (*... -> Boolean)
   * @param {Array} predicates An array of predicates to check
   * @return {Function} The combined predicate
   * @see R.allPass
   * @example
   *
   *      const isClub = R.propEq('suit', '♣');
   *      const isSpade = R.propEq('suit', '♠');
   *      const isBlackCard = R.anyPass([isClub, isSpade]);
   *
   *      isBlackCard({rank: '10', suit: '♣'}); //=> true
   *      isBlackCard({rank: 'Q', suit: '♠'}); //=> true
   *      isBlackCard({rank: 'Q', suit: '♦'}); //=> false
   */

  var anyPass =
  /*#__PURE__*/
  _curry1$1(function anyPass(preds) {
    return curryN$1(reduce$1(max$1, 0, pluck('length', preds)), function () {
      var idx = 0;
      var len = preds.length;

      while (idx < len) {
        if (preds[idx].apply(this, arguments)) {
          return true;
        }

        idx += 1;
      }

      return false;
    });
  });

  /**
   * ap applies a list of functions to a list of values.
   *
   * Dispatches to the `ap` method of the second argument, if present. Also
   * treats curried functions as applicatives.
   *
   * @func
   * @memberOf R
   * @since v0.3.0
   * @category Function
   * @sig [a -> b] -> [a] -> [b]
   * @sig Apply f => f (a -> b) -> f a -> f b
   * @sig (r -> a -> b) -> (r -> a) -> (r -> b)
   * @param {*} applyF
   * @param {*} applyX
   * @return {*}
   * @example
   *
   *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
   *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
   *
   *      // R.ap can also be used as S combinator
   *      // when only two functions are passed
   *      R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'
   * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]
   */

  var ap =
  /*#__PURE__*/
  _curry2$1(function ap(applyF, applyX) {
    return typeof applyX['fantasy-land/ap'] === 'function' ? applyX['fantasy-land/ap'](applyF) : typeof applyF.ap === 'function' ? applyF.ap(applyX) : typeof applyF === 'function' ? function (x) {
      return applyF(x)(applyX(x));
    } : _reduce$1(function (acc, f) {
      return _concat$1(acc, map$2(f, applyX));
    }, [], applyF);
  });

  /**
   * Returns a new list containing the contents of the given list, followed by
   * the given element.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig a -> [a] -> [a]
   * @param {*} el The element to add to the end of the new list.
   * @param {Array} list The list of elements to add a new item to.
   *        list.
   * @return {Array} A new list containing the elements of the old list followed by `el`.
   * @see R.prepend
   * @example
   *
   *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
   *      R.append('tests', []); //=> ['tests']
   *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
   */

  var append$1 =
  /*#__PURE__*/
  _curry2$1(function append(el, list) {
    return _concat$1(list, [el]);
  });

  /**
   * Makes a shallow clone of an object, setting or overriding the specified
   * property with the given value. Note that this copies and flattens prototype
   * properties onto the new object as well. All non-primitive properties are
   * copied by reference.
   *
   * @func
   * @memberOf R
   * @since v0.8.0
   * @category Object
   * @sig String -> a -> {k: v} -> {k: v}
   * @param {String} prop The property name to set
   * @param {*} val The new value
   * @param {Object} obj The object to clone
   * @return {Object} A new object equivalent to the original except for the changed property.
   * @see R.dissoc, R.pick
   * @example
   *
   *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
   */

  var assoc =
  /*#__PURE__*/
  _curry3$1(function assoc(prop, val, obj) {
    var result = {};

    for (var p in obj) {
      result[p] = obj[p];
    }

    result[prop] = val;
    return result;
  });

  /**
   * Checks if the input value is `null` or `undefined`.
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Type
   * @sig * -> Boolean
   * @param {*} x The value to test.
   * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
   * @example
   *
   *      R.isNil(null); //=> true
   *      R.isNil(undefined); //=> true
   *      R.isNil(0); //=> false
   *      R.isNil([]); //=> false
   */

  var isNil$1 =
  /*#__PURE__*/
  _curry1$1(function isNil(x) {
    return x == null;
  });

  function _isFunction$1(x) {
    var type = Object.prototype.toString.call(x);
    return type === '[object Function]' || type === '[object AsyncFunction]' || type === '[object GeneratorFunction]' || type === '[object AsyncGeneratorFunction]';
  }

  /**
   * "lifts" a function to be the specified arity, so that it may "map over" that
   * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
   *
   * @func
   * @memberOf R
   * @since v0.7.0
   * @category Function
   * @sig Number -> (*... -> *) -> ([*]... -> [*])
   * @param {Function} fn The function to lift into higher context
   * @return {Function} The lifted function.
   * @see R.lift, R.ap
   * @example
   *
   *      const madd3 = R.liftN(3, (...args) => R.sum(args));
   *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
   */

  var liftN =
  /*#__PURE__*/
  _curry2$1(function liftN(arity, fn) {
    var lifted = curryN$1(arity, fn);
    return curryN$1(arity, function () {
      return _reduce$1(ap, map$2(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
    });
  });

  /**
   * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other
   * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
   *
   * @func
   * @memberOf R
   * @since v0.7.0
   * @category Function
   * @sig (*... -> *) -> ([*]... -> [*])
   * @param {Function} fn The function to lift into higher context
   * @return {Function} The lifted function.
   * @see R.liftN
   * @example
   *
   *      const madd3 = R.lift((a, b, c) => a + b + c);
   *
   *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
   *
   *      const madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
   *
   *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
   */

  var lift =
  /*#__PURE__*/
  _curry1$1(function lift(fn) {
    return liftN(fn.length, fn);
  });

  /**
   * A function which calls the two provided functions and returns the `&&`
   * of the results.
   * It returns the result of the first function if it is false-y and the result
   * of the second function otherwise. Note that this is short-circuited,
   * meaning that the second function will not be invoked if the first returns a
   * false-y value.
   *
   * In addition to functions, `R.both` also accepts any fantasy-land compatible
   * applicative functor.
   *
   * @func
   * @memberOf R
   * @since v0.12.0
   * @category Logic
   * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
   * @param {Function} f A predicate
   * @param {Function} g Another predicate
   * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
   * @see R.and
   * @example
   *
   *      const gt10 = R.gt(R.__, 10)
   *      const lt20 = R.lt(R.__, 20)
   *      const f = R.both(gt10, lt20);
   *      f(15); //=> true
   *      f(30); //=> false
   *
   *      R.both(Maybe.Just(false), Maybe.Just(55)); // => Maybe.Just(false)
   *      R.both([false, false, 'a'], [11]); //=> [false, false, 11]
   */

  var both =
  /*#__PURE__*/
  _curry2$1(function both(f, g) {
    return _isFunction$1(f) ? function _both() {
      return f.apply(this, arguments) && g.apply(this, arguments);
    } : lift(and)(f, g);
  });

  /**
   * Returns a curried equivalent of the provided function. The curried function
   * has two unusual capabilities. First, its arguments needn't be provided one
   * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
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
   * @since v0.1.0
   * @category Function
   * @sig (* -> a) -> (* -> a)
   * @param {Function} fn The function to curry.
   * @return {Function} A new, curried function.
   * @see R.curryN, R.partial
   * @example
   *
   *      const addFourNumbers = (a, b, c, d) => a + b + c + d;
   *
   *      const curriedAddFourNumbers = R.curry(addFourNumbers);
   *      const f = curriedAddFourNumbers(1, 2);
   *      const g = f(3);
   *      g(4); //=> 10
   */

  var curry =
  /*#__PURE__*/
  _curry1$1(function curry(fn) {
    return curryN$1(fn.length, fn);
  });

  /**
   * `_makeFlat` is a helper function that returns a one-level or fully recursive
   * function based on the flag passed in.
   *
   * @private
   */

  function _makeFlat(recursive) {
    return function flatt(list) {
      var value, jlen, j;
      var result = [];
      var idx = 0;
      var ilen = list.length;

      while (idx < ilen) {
        if (_isArrayLike$1(list[idx])) {
          value = recursive ? flatt(list[idx]) : list[idx];
          j = 0;
          jlen = value.length;

          while (j < jlen) {
            result[result.length] = value[j];
            j += 1;
          }
        } else {
          result[result.length] = list[idx];
        }

        idx += 1;
      }

      return result;
    };
  }

  function _cloneRegExp(pattern) {
    return new RegExp(pattern.source, (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '') + (pattern.sticky ? 'y' : '') + (pattern.unicode ? 'u' : ''));
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

  var type$1 =
  /*#__PURE__*/
  _curry1$1(function type(val) {
    return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
  });

  /**
   * Copies an object.
   *
   * @private
   * @param {*} value The value to be copied
   * @param {Array} refFrom Array containing the source references
   * @param {Array} refTo Array containing the copied source references
   * @param {Boolean} deep Whether or not to perform deep cloning.
   * @return {*} The copied value.
   */

  function _clone(value, refFrom, refTo, deep) {
    var copy = function copy(copiedValue) {
      var len = refFrom.length;
      var idx = 0;

      while (idx < len) {
        if (value === refFrom[idx]) {
          return refTo[idx];
        }

        idx += 1;
      }

      refFrom[idx + 1] = value;
      refTo[idx + 1] = copiedValue;

      for (var key in value) {
        copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
      }

      return copiedValue;
    };

    switch (type$1(value)) {
      case 'Object':
        return copy({});

      case 'Array':
        return copy([]);

      case 'Date':
        return new Date(value.valueOf());

      case 'RegExp':
        return _cloneRegExp(value);

      default:
        return value;
    }
  }

  /**
   * Creates a deep copy of the value which may contain (nested) `Array`s and
   * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are
   * assigned by reference rather than copied
   *
   * Dispatches to a `clone` method if present.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Object
   * @sig {*} -> {*}
   * @param {*} value The object or array to clone
   * @return {*} A deeply cloned copy of `val`
   * @example
   *
   *      const objects = [{}, {}, {}];
   *      const objectsClone = R.clone(objects);
   *      objects === objectsClone; //=> false
   *      objects[0] === objectsClone[0]; //=> false
   */

  var clone =
  /*#__PURE__*/
  _curry1$1(function clone(value) {
    return value != null && typeof value.clone === 'function' ? value.clone() : _clone(value, [], [], true);
  });

  /**
   * A function that returns the `!` of its argument. It will return `true` when
   * passed false-y value, and `false` when passed a truth-y one.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Logic
   * @sig * -> Boolean
   * @param {*} a any value
   * @return {Boolean} the logical inverse of passed argument.
   * @see R.complement
   * @example
   *
   *      R.not(true); //=> false
   *      R.not(false); //=> true
   *      R.not(0); //=> true
   *      R.not(1); //=> false
   */

  var not =
  /*#__PURE__*/
  _curry1$1(function not(a) {
    return !a;
  });

  /**
   * Takes a function `f` and returns a function `g` such that if called with the same arguments
   * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
   *
   * `R.complement` may be applied to any functor
   *
   * @func
   * @memberOf R
   * @since v0.12.0
   * @category Logic
   * @sig (*... -> *) -> (*... -> Boolean)
   * @param {Function} f
   * @return {Function}
   * @see R.not
   * @example
   *
   *      const isNotNil = R.complement(R.isNil);
   *      isNil(null); //=> true
   *      isNotNil(null); //=> false
   *      isNil(7); //=> false
   *      isNotNil(7); //=> true
   */

  var complement =
  /*#__PURE__*/
  lift(not);

  function _pipe$1(f, g) {
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

  function _checkForMethod$1(methodname, fn) {
    return function () {
      var length = arguments.length;

      if (length === 0) {
        return fn();
      }

      var obj = arguments[length - 1];
      return _isArray$1(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
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

  var slice$1 =
  /*#__PURE__*/
  _curry3$1(
  /*#__PURE__*/
  _checkForMethod$1('slice', function slice(fromIndex, toIndex, list) {
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

  var tail$1 =
  /*#__PURE__*/
  _curry1$1(
  /*#__PURE__*/
  _checkForMethod$1('tail',
  /*#__PURE__*/
  slice$1(1, Infinity)));

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

  function pipe$1() {
    if (arguments.length === 0) {
      throw new Error('pipe requires at least one argument');
    }

    return _arity$1(arguments[0].length, reduce$1(_pipe$1, arguments[0], tail$1(arguments)));
  }

  /**
   * Returns the first element of the given list or string. In some libraries
   * this function is named `first`.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig [a] -> a | Undefined
   * @sig String -> String
   * @param {Array|String} list
   * @return {*}
   * @see R.tail, R.init, R.last
   * @example
   *
   *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
   *      R.head([]); //=> undefined
   *
   *      R.head('abc'); //=> 'a'
   *      R.head(''); //=> ''
   */

  var head$1 =
  /*#__PURE__*/
  nth$1(0);

  function _arrayFromIterator$1(iter) {
    var list = [];
    var next;

    while (!(next = iter.next()).done) {
      list.push(next.value);
    }

    return list;
  }

  function _includesWith$1(pred, x, list) {
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

  function _functionName$1(f) {
    // String(x => x) evaluates to "x => x", so the pattern may not match.
    var match = String(f).match(/^function (\w*)/);
    return match == null ? '' : match[1];
  }

  // Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
  function _objectIs$2(a, b) {
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

  var _objectIs$3 = typeof Object.is === 'function' ? Object.is : _objectIs$2;

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

  function _uniqContentEquals$1(aIterator, bIterator, stackA, stackB) {
    var a = _arrayFromIterator$1(aIterator);

    var b = _arrayFromIterator$1(bIterator);

    function eq(_a, _b) {
      return _equals$1(_a, _b, stackA.slice(), stackB.slice());
    } // if *a* array contains any element that is not included in *b*


    return !_includesWith$1(function (b, aItem) {
      return !_includesWith$1(eq, aItem, b);
    }, b, a);
  }

  function _equals$1(a, b, stackA, stackB) {
    if (_objectIs$3(a, b)) {
      return true;
    }

    var typeA = type$1(a);

    if (typeA !== type$1(b)) {
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
        if (typeof a.constructor === 'function' && _functionName$1(a.constructor) === 'Promise') {
          return a === b;
        }

        break;

      case 'Boolean':
      case 'Number':
      case 'String':
        if (!(typeof a === typeof b && _objectIs$3(a.valueOf(), b.valueOf()))) {
          return false;
        }

        break;

      case 'Date':
        if (!_objectIs$3(a.valueOf(), b.valueOf())) {
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

        return _uniqContentEquals$1(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));

      case 'Set':
        if (a.size !== b.size) {
          return false;
        }

        return _uniqContentEquals$1(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));

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

    var keysA = keys$1(a);

    if (keysA.length !== keys$1(b).length) {
      return false;
    }

    var extendedStackA = stackA.concat([a]);
    var extendedStackB = stackB.concat([b]);
    idx = keysA.length - 1;

    while (idx >= 0) {
      var key = keysA[idx];

      if (!(_has$1(key, b) && _equals$1(b[key], a[key], extendedStackA, extendedStackB))) {
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

  var equals$1 =
  /*#__PURE__*/
  _curry2$1(function equals(a, b) {
    return _equals$1(a, b, [], []);
  });

  function _indexOf$1(list, a, idx) {
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
      if (equals$1(list[idx], a)) {
        return idx;
      }

      idx += 1;
    }

    return -1;
  }

  function _includes$1(a, list) {
    return _indexOf$1(list, a, 0) >= 0;
  }

  function _quote$1(s) {
    var escaped = s.replace(/\\/g, '\\\\').replace(/[\b]/g, '\\b') // \b matches word boundary; [\b] matches backspace
    .replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\0/g, '\\0');
    return '"' + escaped.replace(/"/g, '\\"') + '"';
  }

  /**
   * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
   */
  var pad$1 = function pad(n) {
    return (n < 10 ? '0' : '') + n;
  };

  var _toISOString$1 = typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {
    return d.toISOString();
  } : function _toISOString(d) {
    return d.getUTCFullYear() + '-' + pad$1(d.getUTCMonth() + 1) + '-' + pad$1(d.getUTCDate()) + 'T' + pad$1(d.getUTCHours()) + ':' + pad$1(d.getUTCMinutes()) + ':' + pad$1(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
  };

  function _complement$1(f) {
    return function () {
      return !f.apply(this, arguments);
    };
  }

  function _filter$1(fn, list) {
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

  function _isObject$1(x) {
    return Object.prototype.toString.call(x) === '[object Object]';
  }

  var XFilter$1 =
  /*#__PURE__*/
  function () {
    function XFilter(f, xf) {
      this.xf = xf;
      this.f = f;
    }

    XFilter.prototype['@@transducer/init'] = _xfBase$1.init;
    XFilter.prototype['@@transducer/result'] = _xfBase$1.result;

    XFilter.prototype['@@transducer/step'] = function (result, input) {
      return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
    };

    return XFilter;
  }();

  var _xfilter$1 =
  /*#__PURE__*/
  _curry2$1(function _xfilter(f, xf) {
    return new XFilter$1(f, xf);
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

  var filter$1 =
  /*#__PURE__*/
  _curry2$1(
  /*#__PURE__*/
  _dispatchable$1(['filter'], _xfilter$1, function (pred, filterable) {
    return _isObject$1(filterable) ? _reduce$1(function (acc, key) {
      if (pred(filterable[key])) {
        acc[key] = filterable[key];
      }

      return acc;
    }, {}, keys$1(filterable)) : // else
    _filter$1(pred, filterable);
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

  var reject$1 =
  /*#__PURE__*/
  _curry2$1(function reject(pred, filterable) {
    return filter$1(_complement$1(pred), filterable);
  });

  function _toString$1(x, seen) {
    var recur = function recur(y) {
      var xs = seen.concat([x]);
      return _includes$1(y, xs) ? '<Circular>' : _toString$1(y, xs);
    }; //  mapPairs :: (Object, [String]) -> [String]


    var mapPairs = function (obj, keys) {
      return _map$1(function (k) {
        return _quote$1(k) + ': ' + recur(obj[k]);
      }, keys.slice().sort());
    };

    switch (Object.prototype.toString.call(x)) {
      case '[object Arguments]':
        return '(function() { return arguments; }(' + _map$1(recur, x).join(', ') + '))';

      case '[object Array]':
        return '[' + _map$1(recur, x).concat(mapPairs(x, reject$1(function (k) {
          return /^\d+$/.test(k);
        }, keys$1(x)))).join(', ') + ']';

      case '[object Boolean]':
        return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();

      case '[object Date]':
        return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote$1(_toISOString$1(x))) + ')';

      case '[object Null]':
        return 'null';

      case '[object Number]':
        return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);

      case '[object String]':
        return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote$1(x);

      case '[object Undefined]':
        return 'undefined';

      default:
        if (typeof x.toString === 'function') {
          var repr = x.toString();

          if (repr !== '[object Object]') {
            return repr;
          }
        }

        return '{' + mapPairs(x, keys$1(x)).join(', ') + '}';
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

  var toString$4 =
  /*#__PURE__*/
  _curry1$1(function toString(val) {
    return _toString$1(val, []);
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

  var concat$1 =
  /*#__PURE__*/
  _curry2$1(function concat(a, b) {
    if (_isArray$1(a)) {
      if (_isArray$1(b)) {
        return a.concat(b);
      }

      throw new TypeError(toString$4(b) + ' is not an array');
    }

    if (_isString$1(a)) {
      if (_isString$1(b)) {
        return a + b;
      }

      throw new TypeError(toString$4(b) + ' is not a string');
    }

    if (a != null && _isFunction$1(a['fantasy-land/concat'])) {
      return a['fantasy-land/concat'](b);
    }

    if (a != null && _isFunction$1(a.concat)) {
      return a.concat(b);
    }

    throw new TypeError(toString$4(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
  });

  /**
   * Returns a function, `fn`, which encapsulates `if/else, if/else, ...` logic.
   * `R.cond` takes a list of [predicate, transformer] pairs. All of the arguments
   * to `fn` are applied to each of the predicates in turn until one returns a
   * "truthy" value, at which point `fn` returns the result of applying its
   * arguments to the corresponding transformer. If none of the predicates
   * matches, `fn` returns undefined.
   *
   * @func
   * @memberOf R
   * @since v0.6.0
   * @category Logic
   * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
   * @param {Array} pairs A list of [predicate, transformer]
   * @return {Function}
   * @see R.ifElse, R.unless, R.when
   * @example
   *
   *      const fn = R.cond([
   *        [R.equals(0),   R.always('water freezes at 0°C')],
   *        [R.equals(100), R.always('water boils at 100°C')],
   *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
   *      ]);
   *      fn(0); //=> 'water freezes at 0°C'
   *      fn(50); //=> 'nothing special happens at 50°C'
   *      fn(100); //=> 'water boils at 100°C'
   */

  var cond$1 =
  /*#__PURE__*/
  _curry1$1(function cond(pairs) {
    var arity = reduce$1(max$1, 0, map$2(function (pair) {
      return pair[0].length;
    }, pairs));
    return _arity$1(arity, function () {
      var idx = 0;

      while (idx < pairs.length) {
        if (pairs[idx][0].apply(this, arguments)) {
          return pairs[idx][1].apply(this, arguments);
        }

        idx += 1;
      }
    });
  });

  /**
   * Returns the last element of the given list or string.
   *
   * @func
   * @memberOf R
   * @since v0.1.4
   * @category List
   * @sig [a] -> a | Undefined
   * @sig String -> String
   * @param {*} list
   * @return {*}
   * @see R.init, R.head, R.tail
   * @example
   *
   *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
   *      R.last([]); //=> undefined
   *
   *      R.last('abc'); //=> 'c'
   *      R.last(''); //=> ''
   */

  var last$1 =
  /*#__PURE__*/
  nth$1(-1);

  /**
   * Returns `true` if one or both of its arguments are `true`. Returns `false`
   * if both arguments are `false`.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Logic
   * @sig a -> b -> a | b
   * @param {Any} a
   * @param {Any} b
   * @return {Any} the first argument if truthy, otherwise the second argument.
   * @see R.either, R.xor
   * @example
   *
   *      R.or(true, true); //=> true
   *      R.or(true, false); //=> true
   *      R.or(false, true); //=> true
   *      R.or(false, false); //=> false
   */

  var or =
  /*#__PURE__*/
  _curry2$1(function or(a, b) {
    return a || b;
  });

  /**
   * A function wrapping calls to the two functions in an `||` operation,
   * returning the result of the first function if it is truth-y and the result
   * of the second function otherwise. Note that this is short-circuited,
   * meaning that the second function will not be invoked if the first returns a
   * truth-y value.
   *
   * In addition to functions, `R.either` also accepts any fantasy-land compatible
   * applicative functor.
   *
   * @func
   * @memberOf R
   * @since v0.12.0
   * @category Logic
   * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
   * @param {Function} f a predicate
   * @param {Function} g another predicate
   * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
   * @see R.or
   * @example
   *
   *      const gt10 = x => x > 10;
   *      const even = x => x % 2 === 0;
   *      const f = R.either(gt10, even);
   *      f(101); //=> true
   *      f(8); //=> true
   *
   *      R.either(Maybe.Just(false), Maybe.Just(55)); // => Maybe.Just(55)
   *      R.either([false, false, 'a'], [11]) // => [11, 11, "a"]
   */

  var either =
  /*#__PURE__*/
  _curry2$1(function either(f, g) {
    return _isFunction$1(f) ? function _either() {
      return f.apply(this, arguments) || g.apply(this, arguments);
    } : lift(or)(f, g);
  });

  /**
   * Returns the empty value of its argument's type. Ramda defines the empty
   * value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other
   * types are supported if they define `<Type>.empty`,
   * `<Type>.prototype.empty` or implement the
   * [FantasyLand Monoid spec](https://github.com/fantasyland/fantasy-land#monoid).
   *
   * Dispatches to the `empty` method of the first argument, if present.
   *
   * @func
   * @memberOf R
   * @since v0.3.0
   * @category Function
   * @sig a -> a
   * @param {*} x
   * @return {*}
   * @example
   *
   *      R.empty(Just(42));      //=> Nothing()
   *      R.empty([1, 2, 3]);     //=> []
   *      R.empty('unicorns');    //=> ''
   *      R.empty({x: 1, y: 2});  //=> {}
   */

  var empty$2 =
  /*#__PURE__*/
  _curry1$1(function empty(x) {
    return x != null && typeof x['fantasy-land/empty'] === 'function' ? x['fantasy-land/empty']() : x != null && x.constructor != null && typeof x.constructor['fantasy-land/empty'] === 'function' ? x.constructor['fantasy-land/empty']() : x != null && typeof x.empty === 'function' ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === 'function' ? x.constructor.empty() : _isArray$1(x) ? [] : _isString$1(x) ? '' : _isObject$1(x) ? {} : _isArguments$1(x) ? function () {
      return arguments;
    }() : void 0 // else
    ;
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

  var evolve$1 =
  /*#__PURE__*/
  _curry2$1(function evolve(transformations, object) {
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
   * Returns a new list by pulling every item out of it (and all its sub-arrays)
   * and putting them in a new array, depth-first.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig [a] -> [b]
   * @param {Array} list The array to consider.
   * @return {Array} The flattened list.
   * @see R.unnest
   * @example
   *
   *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
   *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
   */

  var flatten =
  /*#__PURE__*/
  _curry1$1(
  /*#__PURE__*/
  _makeFlat(true));

  /**
   * Returns a new function much like the supplied one, except that the first two
   * arguments' order is reversed.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig ((a, b, c, ...) -> z) -> (b -> a -> c -> ... -> z)
   * @param {Function} fn The function to invoke with its first two parameters reversed.
   * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
   * @example
   *
   *      const mergeThree = (a, b, c) => [].concat(a, b, c);
   *
   *      mergeThree(1, 2, 3); //=> [1, 2, 3]
   *
   *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
   * @symb R.flip(f)(a, b, c) = f(b, a, c)
   */

  var flip$1 =
  /*#__PURE__*/
  _curry1$1(function flip(fn) {
    return curryN$1(fn.length, function (a, b) {
      var args = Array.prototype.slice.call(arguments, 0);
      args[0] = b;
      args[1] = a;
      return fn.apply(this, args);
    });
  });

  /**
   * Iterate over an input `list`, calling a provided function `fn` for each
   * element in the list.
   *
   * `fn` receives one argument: *(value)*.
   *
   * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
   * arrays), unlike the native `Array.prototype.forEach` method. For more
   * details on this behavior, see:
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
   *
   * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
   * the original array. In some libraries this function is named `each`.
   *
   * Dispatches to the `forEach` method of the second argument, if present.
   *
   * @func
   * @memberOf R
   * @since v0.1.1
   * @category List
   * @sig (a -> *) -> [a] -> [a]
   * @param {Function} fn The function to invoke. Receives one argument, `value`.
   * @param {Array} list The list to iterate over.
   * @return {Array} The original list.
   * @see R.addIndex
   * @example
   *
   *      const printXPlusFive = x => console.log(x + 5);
   *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
   *      // logs 6
   *      // logs 7
   *      // logs 8
   * @symb R.forEach(f, [a, b, c]) = [a, b, c]
   */

  var forEach =
  /*#__PURE__*/
  _curry2$1(
  /*#__PURE__*/
  _checkForMethod$1('forEach', function forEach(fn, list) {
    var len = list.length;
    var idx = 0;

    while (idx < len) {
      fn(list[idx]);
      idx += 1;
    }

    return list;
  }));

  /**
   * Creates a new object from a list key-value pairs. If a key appears in
   * multiple pairs, the rightmost pair is included in the object.
   *
   * @func
   * @memberOf R
   * @since v0.3.0
   * @category List
   * @sig [[k,v]] -> {k: v}
   * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
   * @return {Object} The object made by pairing up `keys` and `values`.
   * @see R.toPairs, R.pair
   * @example
   *
   *      R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
   */

  var fromPairs =
  /*#__PURE__*/
  _curry1$1(function fromPairs(pairs) {
    var result = {};
    var idx = 0;

    while (idx < pairs.length) {
      result[pairs[idx][0]] = pairs[idx][1];
      idx += 1;
    }

    return result;
  });

  /**
   * Returns whether or not a path exists in an object. Only the object's
   * own properties are checked.
   *
   * @func
   * @memberOf R
   * @since v0.26.0
   * @category Object
   * @typedefn Idx = String | Int
   * @sig [Idx] -> {a} -> Boolean
   * @param {Array} path The path to use.
   * @param {Object} obj The object to check the path in.
   * @return {Boolean} Whether the path exists.
   * @see R.has
   * @example
   *
   *      R.hasPath(['a', 'b'], {a: {b: 2}});         // => true
   *      R.hasPath(['a', 'b'], {a: {b: undefined}}); // => true
   *      R.hasPath(['a', 'b'], {a: {c: 2}});         // => false
   *      R.hasPath(['a', 'b'], {});                  // => false
   */

  var hasPath$1 =
  /*#__PURE__*/
  _curry2$1(function hasPath(_path, obj) {
    if (_path.length === 0 || isNil$1(obj)) {
      return false;
    }

    var val = obj;
    var idx = 0;

    while (idx < _path.length) {
      if (!isNil$1(val) && _has$1(_path[idx], val)) {
        val = val[_path[idx]];
        idx += 1;
      } else {
        return false;
      }
    }

    return true;
  });

  /**
   * Returns whether or not an object has an own property with the specified name
   *
   * @func
   * @memberOf R
   * @since v0.7.0
   * @category Object
   * @sig s -> {s: x} -> Boolean
   * @param {String} prop The name of the property to check for.
   * @param {Object} obj The object to query.
   * @return {Boolean} Whether the property exists.
   * @example
   *
   *      const hasName = R.has('name');
   *      hasName({name: 'alice'});   //=> true
   *      hasName({name: 'bob'});     //=> true
   *      hasName({});                //=> false
   *
   *      const point = {x: 0, y: 0};
   *      const pointHas = R.has(R.__, point);
   *      pointHas('x');  //=> true
   *      pointHas('y');  //=> true
   *      pointHas('z');  //=> false
   */

  var has$2 =
  /*#__PURE__*/
  _curry2$1(function has(prop, obj) {
    return hasPath$1([prop], obj);
  });

  /**
   * Creates a function that will process either the `onTrue` or the `onFalse`
   * function depending upon the result of the `condition` predicate.
   *
   * @func
   * @memberOf R
   * @since v0.8.0
   * @category Logic
   * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
   * @param {Function} condition A predicate function
   * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
   * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
   * @return {Function} A new function that will process either the `onTrue` or the `onFalse`
   *                    function depending upon the result of the `condition` predicate.
   * @see R.unless, R.when, R.cond
   * @example
   *
   *      const incCount = R.ifElse(
   *        R.has('count'),
   *        R.over(R.lensProp('count'), R.inc),
   *        R.assoc('count', 1)
   *      );
   *      incCount({});           //=> { count: 1 }
   *      incCount({ count: 1 }); //=> { count: 2 }
   */

  var ifElse =
  /*#__PURE__*/
  _curry3$1(function ifElse(condition, onTrue, onFalse) {
    return curryN$1(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
      return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
    });
  });

  /**
   * Returns `true` if the specified value is equal, in [`R.equals`](#equals)
   * terms, to at least one element of the given list; `false` otherwise.
   * Works also with strings.
   *
   * @func
   * @memberOf R
   * @since v0.26.0
   * @category List
   * @sig a -> [a] -> Boolean
   * @param {Object} a The item to compare against.
   * @param {Array} list The array to consider.
   * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
   * @see R.any
   * @example
   *
   *      R.includes(3, [1, 2, 3]); //=> true
   *      R.includes(4, [1, 2, 3]); //=> false
   *      R.includes({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
   *      R.includes([42], [[42]]); //=> true
   *      R.includes('ba', 'banana'); //=>true
   */

  var includes =
  /*#__PURE__*/
  _curry2$1(_includes$1);

  function _objectAssign(target) {
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var output = Object(target);
    var idx = 1;
    var length = arguments.length;

    while (idx < length) {
      var source = arguments[idx];

      if (source != null) {
        for (var nextKey in source) {
          if (_has$1(nextKey, source)) {
            output[nextKey] = source[nextKey];
          }
        }
      }

      idx += 1;
    }

    return output;
  }

  var _objectAssign$1 = typeof Object.assign === 'function' ? Object.assign : _objectAssign;

  /**
   * Creates an object containing a single key:value pair.
   *
   * @func
   * @memberOf R
   * @since v0.18.0
   * @category Object
   * @sig String -> a -> {String:a}
   * @param {String} key
   * @param {*} val
   * @return {Object}
   * @see R.pair
   * @example
   *
   *      const matchPhrases = R.compose(
   *        R.objOf('must'),
   *        R.map(R.objOf('match_phrase'))
   *      );
   *      matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
   */

  var objOf =
  /*#__PURE__*/
  _curry2$1(function objOf(key, val) {
    var obj = {};
    obj[key] = val;
    return obj;
  });

  /**
   * See if an object (`val`) is an instance of the supplied constructor. This
   * function will check up the inheritance chain, if any.
   *
   * @func
   * @memberOf R
   * @since v0.3.0
   * @category Type
   * @sig (* -> {*}) -> a -> Boolean
   * @param {Object} ctor A constructor
   * @param {*} val The value to test
   * @return {Boolean}
   * @example
   *
   *      R.is(Object, {}); //=> true
   *      R.is(Number, 1); //=> true
   *      R.is(Object, 1); //=> false
   *      R.is(String, 's'); //=> true
   *      R.is(String, new String('')); //=> true
   *      R.is(Object, new String('')); //=> true
   *      R.is(Object, 's'); //=> false
   *      R.is(Number, {}); //=> false
   */

  var is$1 =
  /*#__PURE__*/
  _curry2$1(function is(Ctor, val) {
    return val != null && val.constructor === Ctor || val instanceof Ctor;
  });

  /**
   * Returns `true` if the given value is its type's empty value; `false`
   * otherwise.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Logic
   * @sig a -> Boolean
   * @param {*} x
   * @return {Boolean}
   * @see R.empty
   * @example
   *
   *      R.isEmpty([1, 2, 3]);   //=> false
   *      R.isEmpty([]);          //=> true
   *      R.isEmpty('');          //=> true
   *      R.isEmpty(null);        //=> false
   *      R.isEmpty({});          //=> true
   *      R.isEmpty({length: 0}); //=> false
   */

  var isEmpty =
  /*#__PURE__*/
  _curry1$1(function isEmpty(x) {
    return x != null && equals$1(x, empty$2(x));
  });

  function _isNumber$1(x) {
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

  var length$1 =
  /*#__PURE__*/
  _curry1$1(function length(list) {
    return list != null && _isNumber$1(list.length) ? list.length : NaN;
  });

  /**
   * Returns a lens for the given getter and setter functions. The getter "gets"
   * the value of the focus; the setter "sets" the value of the focus. The setter
   * should not mutate the data structure.
   *
   * @func
   * @memberOf R
   * @since v0.8.0
   * @category Object
   * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
   * @sig (s -> a) -> ((a, s) -> s) -> Lens s a
   * @param {Function} getter
   * @param {Function} setter
   * @return {Lens}
   * @see R.view, R.set, R.over, R.lensIndex, R.lensProp
   * @example
   *
   *      const xLens = R.lens(R.prop('x'), R.assoc('x'));
   *
   *      R.view(xLens, {x: 1, y: 2});            //=> 1
   *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
   *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
   */

  var lens =
  /*#__PURE__*/
  _curry2$1(function lens(getter, setter) {
    return function (toFunctorFn) {
      return function (target) {
        return map$2(function (focus) {
          return setter(focus, target);
        }, toFunctorFn(getter(target)));
      };
    };
  });

  /**
   * Create a new object with the own properties of the first object merged with
   * the own properties of the second object. If a key exists in both objects,
   * the value from the first object will be used.
   *
   * @func
   * @memberOf R
   * @since v0.26.0
   * @category Object
   * @sig {k: v} -> {k: v} -> {k: v}
   * @param {Object} l
   * @param {Object} r
   * @return {Object}
   * @see R.mergeRight, R.mergeDeepLeft, R.mergeWith, R.mergeWithKey
   * @example
   *
   *      R.mergeLeft({ 'age': 40 }, { 'name': 'fred', 'age': 10 });
   *      //=> { 'name': 'fred', 'age': 40 }
   *
   *      const resetToDefault = R.mergeLeft({x: 0});
   *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
   * @symb R.mergeLeft(a, b) = {...b, ...a}
   */

  var mergeLeft =
  /*#__PURE__*/
  _curry2$1(function mergeLeft(l, r) {
    return _objectAssign$1({}, r, l);
  });

  // transforms the held value with the provided function.

  var Identity = function (x) {
    return {
      value: x,
      map: function (f) {
        return Identity(f(x));
      }
    };
  };
  /**
   * Returns the result of "setting" the portion of the given data structure
   * focused by the given lens to the result of applying the given function to
   * the focused value.
   *
   * @func
   * @memberOf R
   * @since v0.16.0
   * @category Object
   * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
   * @sig Lens s a -> (a -> a) -> s -> s
   * @param {Lens} lens
   * @param {*} v
   * @param {*} x
   * @return {*}
   * @see R.prop, R.lensIndex, R.lensProp
   * @example
   *
   *      const headLens = R.lensIndex(0);
   *
   *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
   */


  var over =
  /*#__PURE__*/
  _curry3$1(function over(lens, f, x) {
    // The value returned by the getter function is first transformed with `f`,
    // then set as the value of an `Identity`. This is then mapped over with the
    // setter function of the lens.
    return lens(function (y) {
      return Identity(f(y));
    })(x).value;
  });

  /**
   * Determines whether a nested path on an object has a specific value, in
   * [`R.equals`](#equals) terms. Most likely used to filter a list.
   *
   * @func
   * @memberOf R
   * @since v0.7.0
   * @category Relation
   * @typedefn Idx = String | Int
   * @sig [Idx] -> a -> {a} -> Boolean
   * @param {Array} path The path of the nested property to use
   * @param {*} val The value to compare the nested property with
   * @param {Object} obj The object to check the nested property in
   * @return {Boolean} `true` if the value equals the nested object property,
   *         `false` otherwise.
   * @example
   *
   *      const user1 = { address: { zipCode: 90210 } };
   *      const user2 = { address: { zipCode: 55555 } };
   *      const user3 = { name: 'Bob' };
   *      const users = [ user1, user2, user3 ];
   *      const isFamous = R.pathEq(['address', 'zipCode'], 90210);
   *      R.filter(isFamous, users); //=> [ user1 ]
   */

  var pathEq =
  /*#__PURE__*/
  _curry3$1(function pathEq(_path, val, obj) {
    return equals$1(path$1(_path, obj), val);
  });

  /**
   * Returns `true` if the specified object property is equal, in
   * [`R.equals`](#equals) terms, to the given value; `false` otherwise.
   * You can test multiple properties with [`R.whereEq`](#whereEq).
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig String -> a -> Object -> Boolean
   * @param {String} name
   * @param {*} val
   * @param {*} obj
   * @return {Boolean}
   * @see R.whereEq, R.propSatisfies, R.equals
   * @example
   *
   *      const abby = {name: 'Abby', age: 7, hair: 'blond'};
   *      const fred = {name: 'Fred', age: 12, hair: 'brown'};
   *      const rusty = {name: 'Rusty', age: 10, hair: 'brown'};
   *      const alois = {name: 'Alois', age: 15, disposition: 'surly'};
   *      const kids = [abby, fred, rusty, alois];
   *      const hasBrownHair = R.propEq('hair', 'brown');
   *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
   */

  var propEq$1 =
  /*#__PURE__*/
  _curry3$1(function propEq(name, val, obj) {
    return equals$1(val, obj[name]);
  });

  /**
   * Returns `true` if the specified object property is of the given type;
   * `false` otherwise.
   *
   * @func
   * @memberOf R
   * @since v0.16.0
   * @category Type
   * @sig Type -> String -> Object -> Boolean
   * @param {Function} type
   * @param {String} name
   * @param {*} obj
   * @return {Boolean}
   * @see R.is, R.propSatisfies
   * @example
   *
   *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
   *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
   *      R.propIs(Number, 'x', {});            //=> false
   */

  var propIs =
  /*#__PURE__*/
  _curry3$1(function propIs(type, name, obj) {
    return is$1(type, obj[name]);
  });

  /**
   * Returns `true` if the specified object property satisfies the given
   * predicate; `false` otherwise. You can test multiple properties with
   * [`R.where`](#where).
   *
   * @func
   * @memberOf R
   * @since v0.16.0
   * @category Logic
   * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
   * @param {Function} pred
   * @param {String} name
   * @param {*} obj
   * @return {Boolean}
   * @see R.where, R.propEq, R.propIs
   * @example
   *
   *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
   */

  var propSatisfies =
  /*#__PURE__*/
  _curry3$1(function propSatisfies(pred, name, obj) {
    return pred(obj[name]);
  });

  /**
   * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig Number -> Number -> [Number]
   * @param {Number} from The first number in the list.
   * @param {Number} to One more than the last number in the list.
   * @return {Array} The list of numbers in the set `[a, b)`.
   * @example
   *
   *      R.range(1, 5);    //=> [1, 2, 3, 4]
   *      R.range(50, 53);  //=> [50, 51, 52]
   */

  var range =
  /*#__PURE__*/
  _curry2$1(function range(from, to) {
    if (!(_isNumber$1(from) && _isNumber$1(to))) {
      throw new TypeError('Both arguments to range must be numbers');
    }

    var result = [];
    var n = from;

    while (n < to) {
      result.push(n);
      n += 1;
    }

    return result;
  });

  /**
   * Like [`reduce`](#reduce), `reduceWhile` returns a single item by iterating
   * through the list, successively calling the iterator function. `reduceWhile`
   * also takes a predicate that is evaluated before each step. If the predicate
   * returns `false`, it "short-circuits" the iteration and returns the current
   * value of the accumulator.
   *
   * @func
   * @memberOf R
   * @since v0.22.0
   * @category List
   * @sig ((a, b) -> Boolean) -> ((a, b) -> a) -> a -> [b] -> a
   * @param {Function} pred The predicate. It is passed the accumulator and the
   *        current element.
   * @param {Function} fn The iterator function. Receives two values, the
   *        accumulator and the current element.
   * @param {*} a The accumulator value.
   * @param {Array} list The list to iterate over.
   * @return {*} The final, accumulated value.
   * @see R.reduce, R.reduced
   * @example
   *
   *      const isOdd = (acc, x) => x % 2 === 1;
   *      const xs = [1, 3, 5, 60, 777, 800];
   *      R.reduceWhile(isOdd, R.add, 0, xs); //=> 9
   *
   *      const ys = [2, 4, 6]
   *      R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
   */

  var reduceWhile =
  /*#__PURE__*/
  _curryN$1(4, [], function _reduceWhile(pred, fn, a, list) {
    return _reduce$1(function (acc, x) {
      return pred(acc, x) ? fn(acc, x) : _reduced$1(acc);
    }, a, list);
  });

  /**
   * Scan is similar to [`reduce`](#reduce), but returns a list of successively
   * reduced values from the left
   *
   * @func
   * @memberOf R
   * @since v0.10.0
   * @category List
   * @sig ((a, b) -> a) -> a -> [b] -> [a]
   * @param {Function} fn The iterator function. Receives two values, the accumulator and the
   *        current element from the array
   * @param {*} acc The accumulator value.
   * @param {Array} list The list to iterate over.
   * @return {Array} A list of all intermediately reduced values.
   * @see R.reduce, R.mapAccum
   * @example
   *
   *      const numbers = [1, 2, 3, 4];
   *      const factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
   * @symb R.scan(f, a, [b, c]) = [a, f(a, b), f(f(a, b), c)]
   */

  var scan =
  /*#__PURE__*/
  _curry3$1(function scan(fn, acc, list) {
    var idx = 0;
    var len = list.length;
    var result = [acc];

    while (idx < len) {
      acc = fn(acc, list[idx]);
      result[idx + 1] = acc;
      idx += 1;
    }

    return result;
  });

  /**
   * Returns the result of "setting" the portion of the given data structure
   * focused by the given lens to the given value.
   *
   * @func
   * @memberOf R
   * @since v0.16.0
   * @category Object
   * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
   * @sig Lens s a -> a -> s -> s
   * @param {Lens} lens
   * @param {*} v
   * @param {*} x
   * @return {*}
   * @see R.prop, R.lensIndex, R.lensProp
   * @example
   *
   *      const xLens = R.lensProp('x');
   *
   *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
   *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
   */

  var set$3 =
  /*#__PURE__*/
  _curry3$1(function set(lens, v, x) {
    return over(lens, always$1(v), x);
  });

  /**
   * Returns a copy of the list, sorted according to the comparator function,
   * which should accept two values at a time and return a negative number if the
   * first value is smaller, a positive number if it's larger, and zero if they
   * are equal. Please note that this is a **copy** of the list. It does not
   * modify the original.
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig ((a, a) -> Number) -> [a] -> [a]
   * @param {Function} comparator A sorting function :: a -> b -> Int
   * @param {Array} list The list to sort
   * @return {Array} a new array with its elements sorted by the comparator function.
   * @example
   *
   *      const diff = function(a, b) { return a - b; };
   *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
   */

  var sort$1 =
  /*#__PURE__*/
  _curry2$1(function sort(comparator, list) {
    return Array.prototype.slice.call(list, 0).sort(comparator);
  });

  var Const = function (x) {
    return {
      value: x,
      'fantasy-land/map': function () {
        return this;
      }
    };
  };
  /**
   * Returns a "view" of the given data structure, determined by the given lens.
   * The lens's focus determines which portion of the data structure is visible.
   *
   * @func
   * @memberOf R
   * @since v0.16.0
   * @category Object
   * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
   * @sig Lens s a -> s -> a
   * @param {Lens} lens
   * @param {*} x
   * @return {*}
   * @see R.prop, R.lensIndex, R.lensProp
   * @example
   *
   *      const xLens = R.lensProp('x');
   *
   *      R.view(xLens, {x: 1, y: 2});  //=> 1
   *      R.view(xLens, {x: 4, y: 2});  //=> 4
   */


  var view =
  /*#__PURE__*/
  _curry2$1(function view(lens, x) {
    // Using `Const` effectively ignores the setter function of the `lens`,
    // leaving the value returned by the getter function unmodified.
    return lens(Const)(x).value;
  });

  /**
   * Returns a new list without values in the first argument.
   * [`R.equals`](#equals) is used to determine equality.
   *
   * Acts as a transducer if a transformer is given in list position.
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category List
   * @sig [a] -> [a] -> [a]
   * @param {Array} list1 The values to be removed from `list2`.
   * @param {Array} list2 The array to remove values from.
   * @return {Array} The new array without values in `list1`.
   * @see R.transduce, R.difference, R.remove
   * @example
   *
   *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
   */

  var without$1 =
  /*#__PURE__*/
  _curry2$1(function (xs, list) {
    return reject$1(flip$1(_includes$1)(xs), list);
  });

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };

  function __extends(d, b) {
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  function isFunction(x) {
      return typeof x === 'function';
  }
  //# sourceMappingURL=isFunction.js.map

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  var _enable_super_gross_mode_that_will_cause_bad_things = false;
  var config = {
      Promise: undefined,
      set useDeprecatedSynchronousErrorHandling(value) {
          if (value) {
              var error = /*@__PURE__*/ new Error();
              /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
          }
          _enable_super_gross_mode_that_will_cause_bad_things = value;
      },
      get useDeprecatedSynchronousErrorHandling() {
          return _enable_super_gross_mode_that_will_cause_bad_things;
      },
  };
  //# sourceMappingURL=config.js.map

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  function hostReportError(err) {
      setTimeout(function () { throw err; }, 0);
  }
  //# sourceMappingURL=hostReportError.js.map

  /** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */
  var empty$3 = {
      closed: true,
      next: function (value) { },
      error: function (err) {
          if (config.useDeprecatedSynchronousErrorHandling) {
              throw err;
          }
          else {
              hostReportError(err);
          }
      },
      complete: function () { }
  };
  //# sourceMappingURL=Observer.js.map

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  var isArray$1 = /*@__PURE__*/ (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();
  //# sourceMappingURL=isArray.js.map

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  function isObject(x) {
      return x !== null && typeof x === 'object';
  }
  //# sourceMappingURL=isObject.js.map

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  var UnsubscriptionErrorImpl = /*@__PURE__*/ (function () {
      function UnsubscriptionErrorImpl(errors) {
          Error.call(this);
          this.message = errors ?
              errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
          this.name = 'UnsubscriptionError';
          this.errors = errors;
          return this;
      }
      UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
      return UnsubscriptionErrorImpl;
  })();
  var UnsubscriptionError = UnsubscriptionErrorImpl;
  //# sourceMappingURL=UnsubscriptionError.js.map

  /** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */
  var Subscription = /*@__PURE__*/ (function () {
      function Subscription(unsubscribe) {
          this.closed = false;
          this._parentOrParents = null;
          this._subscriptions = null;
          if (unsubscribe) {
              this._ctorUnsubscribe = true;
              this._unsubscribe = unsubscribe;
          }
      }
      Subscription.prototype.unsubscribe = function () {
          var errors;
          if (this.closed) {
              return;
          }
          var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
          this.closed = true;
          this._parentOrParents = null;
          this._subscriptions = null;
          if (_parentOrParents instanceof Subscription) {
              _parentOrParents.remove(this);
          }
          else if (_parentOrParents !== null) {
              for (var index = 0; index < _parentOrParents.length; ++index) {
                  var parent_1 = _parentOrParents[index];
                  parent_1.remove(this);
              }
          }
          if (isFunction(_unsubscribe)) {
              if (_ctorUnsubscribe) {
                  this._unsubscribe = undefined;
              }
              try {
                  _unsubscribe.call(this);
              }
              catch (e) {
                  errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
              }
          }
          if (isArray$1(_subscriptions)) {
              var index = -1;
              var len = _subscriptions.length;
              while (++index < len) {
                  var sub = _subscriptions[index];
                  if (isObject(sub)) {
                      try {
                          sub.unsubscribe();
                      }
                      catch (e) {
                          errors = errors || [];
                          if (e instanceof UnsubscriptionError) {
                              errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                          }
                          else {
                              errors.push(e);
                          }
                      }
                  }
              }
          }
          if (errors) {
              throw new UnsubscriptionError(errors);
          }
      };
      Subscription.prototype.add = function (teardown) {
          var subscription = teardown;
          if (!teardown) {
              return Subscription.EMPTY;
          }
          switch (typeof teardown) {
              case 'function':
                  subscription = new Subscription(teardown);
              case 'object':
                  if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                      return subscription;
                  }
                  else if (this.closed) {
                      subscription.unsubscribe();
                      return subscription;
                  }
                  else if (!(subscription instanceof Subscription)) {
                      var tmp = subscription;
                      subscription = new Subscription();
                      subscription._subscriptions = [tmp];
                  }
                  break;
              default: {
                  throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
              }
          }
          var _parentOrParents = subscription._parentOrParents;
          if (_parentOrParents === null) {
              subscription._parentOrParents = this;
          }
          else if (_parentOrParents instanceof Subscription) {
              if (_parentOrParents === this) {
                  return subscription;
              }
              subscription._parentOrParents = [_parentOrParents, this];
          }
          else if (_parentOrParents.indexOf(this) === -1) {
              _parentOrParents.push(this);
          }
          else {
              return subscription;
          }
          var subscriptions = this._subscriptions;
          if (subscriptions === null) {
              this._subscriptions = [subscription];
          }
          else {
              subscriptions.push(subscription);
          }
          return subscription;
      };
      Subscription.prototype.remove = function (subscription) {
          var subscriptions = this._subscriptions;
          if (subscriptions) {
              var subscriptionIndex = subscriptions.indexOf(subscription);
              if (subscriptionIndex !== -1) {
                  subscriptions.splice(subscriptionIndex, 1);
              }
          }
      };
      Subscription.EMPTY = (function (empty) {
          empty.closed = true;
          return empty;
      }(new Subscription()));
      return Subscription;
  }());
  function flattenUnsubscriptionErrors(errors) {
      return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError) ? err.errors : err); }, []);
  }
  //# sourceMappingURL=Subscription.js.map

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  var rxSubscriber = /*@__PURE__*/ (function () {
      return typeof Symbol === 'function'
          ? /*@__PURE__*/ Symbol('rxSubscriber')
          : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();
  })();
  //# sourceMappingURL=rxSubscriber.js.map

  /** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */
  var Subscriber = /*@__PURE__*/ (function (_super) {
      __extends(Subscriber, _super);
      function Subscriber(destinationOrNext, error, complete) {
          var _this = _super.call(this) || this;
          _this.syncErrorValue = null;
          _this.syncErrorThrown = false;
          _this.syncErrorThrowable = false;
          _this.isStopped = false;
          switch (arguments.length) {
              case 0:
                  _this.destination = empty$3;
                  break;
              case 1:
                  if (!destinationOrNext) {
                      _this.destination = empty$3;
                      break;
                  }
                  if (typeof destinationOrNext === 'object') {
                      if (destinationOrNext instanceof Subscriber) {
                          _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                          _this.destination = destinationOrNext;
                          destinationOrNext.add(_this);
                      }
                      else {
                          _this.syncErrorThrowable = true;
                          _this.destination = new SafeSubscriber(_this, destinationOrNext);
                      }
                      break;
                  }
              default:
                  _this.syncErrorThrowable = true;
                  _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                  break;
          }
          return _this;
      }
      Subscriber.prototype[rxSubscriber] = function () { return this; };
      Subscriber.create = function (next, error, complete) {
          var subscriber = new Subscriber(next, error, complete);
          subscriber.syncErrorThrowable = false;
          return subscriber;
      };
      Subscriber.prototype.next = function (value) {
          if (!this.isStopped) {
              this._next(value);
          }
      };
      Subscriber.prototype.error = function (err) {
          if (!this.isStopped) {
              this.isStopped = true;
              this._error(err);
          }
      };
      Subscriber.prototype.complete = function () {
          if (!this.isStopped) {
              this.isStopped = true;
              this._complete();
          }
      };
      Subscriber.prototype.unsubscribe = function () {
          if (this.closed) {
              return;
          }
          this.isStopped = true;
          _super.prototype.unsubscribe.call(this);
      };
      Subscriber.prototype._next = function (value) {
          this.destination.next(value);
      };
      Subscriber.prototype._error = function (err) {
          this.destination.error(err);
          this.unsubscribe();
      };
      Subscriber.prototype._complete = function () {
          this.destination.complete();
          this.unsubscribe();
      };
      Subscriber.prototype._unsubscribeAndRecycle = function () {
          var _parentOrParents = this._parentOrParents;
          this._parentOrParents = null;
          this.unsubscribe();
          this.closed = false;
          this.isStopped = false;
          this._parentOrParents = _parentOrParents;
          return this;
      };
      return Subscriber;
  }(Subscription));
  var SafeSubscriber = /*@__PURE__*/ (function (_super) {
      __extends(SafeSubscriber, _super);
      function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
          var _this = _super.call(this) || this;
          _this._parentSubscriber = _parentSubscriber;
          var next;
          var context = _this;
          if (isFunction(observerOrNext)) {
              next = observerOrNext;
          }
          else if (observerOrNext) {
              next = observerOrNext.next;
              error = observerOrNext.error;
              complete = observerOrNext.complete;
              if (observerOrNext !== empty$3) {
                  context = Object.create(observerOrNext);
                  if (isFunction(context.unsubscribe)) {
                      _this.add(context.unsubscribe.bind(context));
                  }
                  context.unsubscribe = _this.unsubscribe.bind(_this);
              }
          }
          _this._context = context;
          _this._next = next;
          _this._error = error;
          _this._complete = complete;
          return _this;
      }
      SafeSubscriber.prototype.next = function (value) {
          if (!this.isStopped && this._next) {
              var _parentSubscriber = this._parentSubscriber;
              if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                  this.__tryOrUnsub(this._next, value);
              }
              else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                  this.unsubscribe();
              }
          }
      };
      SafeSubscriber.prototype.error = function (err) {
          if (!this.isStopped) {
              var _parentSubscriber = this._parentSubscriber;
              var useDeprecatedSynchronousErrorHandling = config.useDeprecatedSynchronousErrorHandling;
              if (this._error) {
                  if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                      this.__tryOrUnsub(this._error, err);
                      this.unsubscribe();
                  }
                  else {
                      this.__tryOrSetError(_parentSubscriber, this._error, err);
                      this.unsubscribe();
                  }
              }
              else if (!_parentSubscriber.syncErrorThrowable) {
                  this.unsubscribe();
                  if (useDeprecatedSynchronousErrorHandling) {
                      throw err;
                  }
                  hostReportError(err);
              }
              else {
                  if (useDeprecatedSynchronousErrorHandling) {
                      _parentSubscriber.syncErrorValue = err;
                      _parentSubscriber.syncErrorThrown = true;
                  }
                  else {
                      hostReportError(err);
                  }
                  this.unsubscribe();
              }
          }
      };
      SafeSubscriber.prototype.complete = function () {
          var _this = this;
          if (!this.isStopped) {
              var _parentSubscriber = this._parentSubscriber;
              if (this._complete) {
                  var wrappedComplete = function () { return _this._complete.call(_this._context); };
                  if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                      this.__tryOrUnsub(wrappedComplete);
                      this.unsubscribe();
                  }
                  else {
                      this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                      this.unsubscribe();
                  }
              }
              else {
                  this.unsubscribe();
              }
          }
      };
      SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
          try {
              fn.call(this._context, value);
          }
          catch (err) {
              this.unsubscribe();
              if (config.useDeprecatedSynchronousErrorHandling) {
                  throw err;
              }
              else {
                  hostReportError(err);
              }
          }
      };
      SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
          if (!config.useDeprecatedSynchronousErrorHandling) {
              throw new Error('bad call');
          }
          try {
              fn.call(this._context, value);
          }
          catch (err) {
              if (config.useDeprecatedSynchronousErrorHandling) {
                  parent.syncErrorValue = err;
                  parent.syncErrorThrown = true;
                  return true;
              }
              else {
                  hostReportError(err);
                  return true;
              }
          }
          return false;
      };
      SafeSubscriber.prototype._unsubscribe = function () {
          var _parentSubscriber = this._parentSubscriber;
          this._context = null;
          this._parentSubscriber = null;
          _parentSubscriber.unsubscribe();
      };
      return SafeSubscriber;
  }(Subscriber));
  //# sourceMappingURL=Subscriber.js.map

  /** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */
  function canReportError(observer) {
      while (observer) {
          var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
          if (closed_1 || isStopped) {
              return false;
          }
          else if (destination && destination instanceof Subscriber) {
              observer = destination;
          }
          else {
              observer = null;
          }
      }
      return true;
  }
  //# sourceMappingURL=canReportError.js.map

  /** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */
  function toSubscriber(nextOrObserver, error, complete) {
      if (nextOrObserver) {
          if (nextOrObserver instanceof Subscriber) {
              return nextOrObserver;
          }
          if (nextOrObserver[rxSubscriber]) {
              return nextOrObserver[rxSubscriber]();
          }
      }
      if (!nextOrObserver && !error && !complete) {
          return new Subscriber(empty$3);
      }
      return new Subscriber(nextOrObserver, error, complete);
  }
  //# sourceMappingURL=toSubscriber.js.map

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  var observable = /*@__PURE__*/ (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();
  //# sourceMappingURL=observable.js.map

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  function identity$1(x) {
      return x;
  }
  //# sourceMappingURL=identity.js.map

  /** PURE_IMPORTS_START _identity PURE_IMPORTS_END */
  function pipe$2() {
      var fns = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          fns[_i] = arguments[_i];
      }
      return pipeFromArray(fns);
  }
  function pipeFromArray(fns) {
      if (fns.length === 0) {
          return identity$1;
      }
      if (fns.length === 1) {
          return fns[0];
      }
      return function piped(input) {
          return fns.reduce(function (prev, fn) { return fn(prev); }, input);
      };
  }
  //# sourceMappingURL=pipe.js.map

  /** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */
  var Observable = /*@__PURE__*/ (function () {
      function Observable(subscribe) {
          this._isScalar = false;
          if (subscribe) {
              this._subscribe = subscribe;
          }
      }
      Observable.prototype.lift = function (operator) {
          var observable = new Observable();
          observable.source = this;
          observable.operator = operator;
          return observable;
      };
      Observable.prototype.subscribe = function (observerOrNext, error, complete) {
          var operator = this.operator;
          var sink = toSubscriber(observerOrNext, error, complete);
          if (operator) {
              sink.add(operator.call(sink, this.source));
          }
          else {
              sink.add(this.source || (config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                  this._subscribe(sink) :
                  this._trySubscribe(sink));
          }
          if (config.useDeprecatedSynchronousErrorHandling) {
              if (sink.syncErrorThrowable) {
                  sink.syncErrorThrowable = false;
                  if (sink.syncErrorThrown) {
                      throw sink.syncErrorValue;
                  }
              }
          }
          return sink;
      };
      Observable.prototype._trySubscribe = function (sink) {
          try {
              return this._subscribe(sink);
          }
          catch (err) {
              if (config.useDeprecatedSynchronousErrorHandling) {
                  sink.syncErrorThrown = true;
                  sink.syncErrorValue = err;
              }
              if (canReportError(sink)) {
                  sink.error(err);
              }
              else {
                  console.warn(err);
              }
          }
      };
      Observable.prototype.forEach = function (next, promiseCtor) {
          var _this = this;
          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function (resolve, reject) {
              var subscription;
              subscription = _this.subscribe(function (value) {
                  try {
                      next(value);
                  }
                  catch (err) {
                      reject(err);
                      if (subscription) {
                          subscription.unsubscribe();
                      }
                  }
              }, reject, resolve);
          });
      };
      Observable.prototype._subscribe = function (subscriber) {
          var source = this.source;
          return source && source.subscribe(subscriber);
      };
      Observable.prototype[observable] = function () {
          return this;
      };
      Observable.prototype.pipe = function () {
          var operations = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              operations[_i] = arguments[_i];
          }
          if (operations.length === 0) {
              return this;
          }
          return pipeFromArray(operations)(this);
      };
      Observable.prototype.toPromise = function (promiseCtor) {
          var _this = this;
          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function (resolve, reject) {
              var value;
              _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
          });
      };
      Observable.create = function (subscribe) {
          return new Observable(subscribe);
      };
      return Observable;
  }());
  function getPromiseCtor(promiseCtor) {
      if (!promiseCtor) {
          promiseCtor =  Promise;
      }
      if (!promiseCtor) {
          throw new Error('no Promise impl found');
      }
      return promiseCtor;
  }
  //# sourceMappingURL=Observable.js.map

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  var subscribeToArray = function (array) {
      return function (subscriber) {
          for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
              subscriber.next(array[i]);
          }
          subscriber.complete();
      };
  };
  //# sourceMappingURL=subscribeToArray.js.map

  /** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */
  var subscribeToPromise = function (promise) {
      return function (subscriber) {
          promise.then(function (value) {
              if (!subscriber.closed) {
                  subscriber.next(value);
                  subscriber.complete();
              }
          }, function (err) { return subscriber.error(err); })
              .then(null, hostReportError);
          return subscriber;
      };
  };
  //# sourceMappingURL=subscribeToPromise.js.map

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  function getSymbolIterator() {
      if (typeof Symbol !== 'function' || !Symbol.iterator) {
          return '@@iterator';
      }
      return Symbol.iterator;
  }
  var iterator = /*@__PURE__*/ getSymbolIterator();
  //# sourceMappingURL=iterator.js.map

  /** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
  var subscribeToIterable = function (iterable) {
      return function (subscriber) {
          var iterator$1 = iterable[iterator]();
          do {
              var item = void 0;
              try {
                  item = iterator$1.next();
              }
              catch (err) {
                  subscriber.error(err);
                  return subscriber;
              }
              if (item.done) {
                  subscriber.complete();
                  break;
              }
              subscriber.next(item.value);
              if (subscriber.closed) {
                  break;
              }
          } while (true);
          if (typeof iterator$1.return === 'function') {
              subscriber.add(function () {
                  if (iterator$1.return) {
                      iterator$1.return();
                  }
              });
          }
          return subscriber;
      };
  };
  //# sourceMappingURL=subscribeToIterable.js.map

  /** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
  var subscribeToObservable = function (obj) {
      return function (subscriber) {
          var obs = obj[observable]();
          if (typeof obs.subscribe !== 'function') {
              throw new TypeError('Provided object does not correctly implement Symbol.observable');
          }
          else {
              return obs.subscribe(subscriber);
          }
      };
  };
  //# sourceMappingURL=subscribeToObservable.js.map

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
  //# sourceMappingURL=isArrayLike.js.map

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  function isPromise(value) {
      return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
  }
  //# sourceMappingURL=isPromise.js.map

  /** PURE_IMPORTS_START _subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */
  var subscribeTo = function (result) {
      if (!!result && typeof result[observable] === 'function') {
          return subscribeToObservable(result);
      }
      else if (isArrayLike(result)) {
          return subscribeToArray(result);
      }
      else if (isPromise(result)) {
          return subscribeToPromise(result);
      }
      else if (!!result && typeof result[iterator] === 'function') {
          return subscribeToIterable(result);
      }
      else {
          var value = isObject(result) ? 'an invalid object' : "'" + result + "'";
          var msg = "You provided " + value + " where a stream was expected."
              + ' You can provide an Observable, Promise, Array, or Iterable.';
          throw new TypeError(msg);
      }
  };
  //# sourceMappingURL=subscribeTo.js.map

  /** PURE_IMPORTS_START tslib,_Subscriber,_Observable,_util_subscribeTo PURE_IMPORTS_END */
  var SimpleInnerSubscriber = /*@__PURE__*/ (function (_super) {
      __extends(SimpleInnerSubscriber, _super);
      function SimpleInnerSubscriber(parent) {
          var _this = _super.call(this) || this;
          _this.parent = parent;
          return _this;
      }
      SimpleInnerSubscriber.prototype._next = function (value) {
          this.parent.notifyNext(value);
      };
      SimpleInnerSubscriber.prototype._error = function (error) {
          this.parent.notifyError(error);
          this.unsubscribe();
      };
      SimpleInnerSubscriber.prototype._complete = function () {
          this.parent.notifyComplete();
          this.unsubscribe();
      };
      return SimpleInnerSubscriber;
  }(Subscriber));
  var SimpleOuterSubscriber = /*@__PURE__*/ (function (_super) {
      __extends(SimpleOuterSubscriber, _super);
      function SimpleOuterSubscriber() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      SimpleOuterSubscriber.prototype.notifyNext = function (innerValue) {
          this.destination.next(innerValue);
      };
      SimpleOuterSubscriber.prototype.notifyError = function (err) {
          this.destination.error(err);
      };
      SimpleOuterSubscriber.prototype.notifyComplete = function () {
          this.destination.complete();
      };
      return SimpleOuterSubscriber;
  }(Subscriber));
  function innerSubscribe(result, innerSubscriber) {
      if (innerSubscriber.closed) {
          return undefined;
      }
      if (result instanceof Observable) {
          return result.subscribe(innerSubscriber);
      }
      return subscribeTo(result)(innerSubscriber);
  }
  //# sourceMappingURL=innerSubscribe.js.map

  /** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
  var Action = /*@__PURE__*/ (function (_super) {
      __extends(Action, _super);
      function Action(scheduler, work) {
          return _super.call(this) || this;
      }
      Action.prototype.schedule = function (state, delay) {
          return this;
      };
      return Action;
  }(Subscription));
  //# sourceMappingURL=Action.js.map

  /** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */
  var AsyncAction = /*@__PURE__*/ (function (_super) {
      __extends(AsyncAction, _super);
      function AsyncAction(scheduler, work) {
          var _this = _super.call(this, scheduler, work) || this;
          _this.scheduler = scheduler;
          _this.work = work;
          _this.pending = false;
          return _this;
      }
      AsyncAction.prototype.schedule = function (state, delay) {
          if (delay === void 0) {
              delay = 0;
          }
          if (this.closed) {
              return this;
          }
          this.state = state;
          var id = this.id;
          var scheduler = this.scheduler;
          if (id != null) {
              this.id = this.recycleAsyncId(scheduler, id, delay);
          }
          this.pending = true;
          this.delay = delay;
          this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
          return this;
      };
      AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
          if (delay === void 0) {
              delay = 0;
          }
          return setInterval(scheduler.flush.bind(scheduler, this), delay);
      };
      AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
          if (delay === void 0) {
              delay = 0;
          }
          if (delay !== null && this.delay === delay && this.pending === false) {
              return id;
          }
          clearInterval(id);
          return undefined;
      };
      AsyncAction.prototype.execute = function (state, delay) {
          if (this.closed) {
              return new Error('executing a cancelled action');
          }
          this.pending = false;
          var error = this._execute(state, delay);
          if (error) {
              return error;
          }
          else if (this.pending === false && this.id != null) {
              this.id = this.recycleAsyncId(this.scheduler, this.id, null);
          }
      };
      AsyncAction.prototype._execute = function (state, delay) {
          var errored = false;
          var errorValue = undefined;
          try {
              this.work(state);
          }
          catch (e) {
              errored = true;
              errorValue = !!e && e || new Error(e);
          }
          if (errored) {
              this.unsubscribe();
              return errorValue;
          }
      };
      AsyncAction.prototype._unsubscribe = function () {
          var id = this.id;
          var scheduler = this.scheduler;
          var actions = scheduler.actions;
          var index = actions.indexOf(this);
          this.work = null;
          this.state = null;
          this.pending = false;
          this.scheduler = null;
          if (index !== -1) {
              actions.splice(index, 1);
          }
          if (id != null) {
              this.id = this.recycleAsyncId(scheduler, id, null);
          }
          this.delay = null;
      };
      return AsyncAction;
  }(Action));
  //# sourceMappingURL=AsyncAction.js.map

  var Scheduler = /*@__PURE__*/ (function () {
      function Scheduler(SchedulerAction, now) {
          if (now === void 0) {
              now = Scheduler.now;
          }
          this.SchedulerAction = SchedulerAction;
          this.now = now;
      }
      Scheduler.prototype.schedule = function (work, delay, state) {
          if (delay === void 0) {
              delay = 0;
          }
          return new this.SchedulerAction(this, work).schedule(state, delay);
      };
      Scheduler.now = function () { return Date.now(); };
      return Scheduler;
  }());
  //# sourceMappingURL=Scheduler.js.map

  /** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */
  var AsyncScheduler = /*@__PURE__*/ (function (_super) {
      __extends(AsyncScheduler, _super);
      function AsyncScheduler(SchedulerAction, now) {
          if (now === void 0) {
              now = Scheduler.now;
          }
          var _this = _super.call(this, SchedulerAction, function () {
              if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                  return AsyncScheduler.delegate.now();
              }
              else {
                  return now();
              }
          }) || this;
          _this.actions = [];
          _this.active = false;
          _this.scheduled = undefined;
          return _this;
      }
      AsyncScheduler.prototype.schedule = function (work, delay, state) {
          if (delay === void 0) {
              delay = 0;
          }
          if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
              return AsyncScheduler.delegate.schedule(work, delay, state);
          }
          else {
              return _super.prototype.schedule.call(this, work, delay, state);
          }
      };
      AsyncScheduler.prototype.flush = function (action) {
          var actions = this.actions;
          if (this.active) {
              actions.push(action);
              return;
          }
          var error;
          this.active = true;
          do {
              if (error = action.execute(action.state, action.delay)) {
                  break;
              }
          } while (action = actions.shift());
          this.active = false;
          if (error) {
              while (action = actions.shift()) {
                  action.unsubscribe();
              }
              throw error;
          }
      };
      return AsyncScheduler;
  }(Scheduler));
  //# sourceMappingURL=AsyncScheduler.js.map

  /** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */
  var asyncScheduler = /*@__PURE__*/ new AsyncScheduler(AsyncAction);
  var async = asyncScheduler;
  //# sourceMappingURL=async.js.map

  /** PURE_IMPORTS_START _isArray PURE_IMPORTS_END */
  function isNumeric(val) {
      return !isArray$1(val) && (val - parseFloat(val) + 1) >= 0;
  }
  //# sourceMappingURL=isNumeric.js.map

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  function isScheduler(value) {
      return value && typeof value.schedule === 'function';
  }
  //# sourceMappingURL=isScheduler.js.map

  /** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */
  function timer(dueTime, periodOrScheduler, scheduler) {
      if (dueTime === void 0) {
          dueTime = 0;
      }
      var period = -1;
      if (isNumeric(periodOrScheduler)) {
          period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
      }
      else if (isScheduler(periodOrScheduler)) {
          scheduler = periodOrScheduler;
      }
      if (!isScheduler(scheduler)) {
          scheduler = async;
      }
      return new Observable(function (subscriber) {
          var due = isNumeric(dueTime)
              ? dueTime
              : (+dueTime - scheduler.now());
          return scheduler.schedule(dispatch$2, due, {
              index: 0, period: period, subscriber: subscriber
          });
      });
  }
  function dispatch$2(state) {
      var index = state.index, period = state.period, subscriber = state.subscriber;
      subscriber.next(index);
      if (subscriber.closed) {
          return;
      }
      else if (period === -1) {
          return subscriber.complete();
      }
      state.index = index + 1;
      this.schedule(state, period);
  }
  //# sourceMappingURL=timer.js.map

  /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
  var InnerSubscriber = /*@__PURE__*/ (function (_super) {
      __extends(InnerSubscriber, _super);
      function InnerSubscriber(parent, outerValue, outerIndex) {
          var _this = _super.call(this) || this;
          _this.parent = parent;
          _this.outerValue = outerValue;
          _this.outerIndex = outerIndex;
          _this.index = 0;
          return _this;
      }
      InnerSubscriber.prototype._next = function (value) {
          this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
      };
      InnerSubscriber.prototype._error = function (error) {
          this.parent.notifyError(error, this);
          this.unsubscribe();
      };
      InnerSubscriber.prototype._complete = function () {
          this.parent.notifyComplete(this);
          this.unsubscribe();
      };
      return InnerSubscriber;
  }(Subscriber));
  //# sourceMappingURL=InnerSubscriber.js.map

  /** PURE_IMPORTS_START _InnerSubscriber,_subscribeTo,_Observable PURE_IMPORTS_END */
  function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, innerSubscriber) {
      if (innerSubscriber === void 0) {
          innerSubscriber = new InnerSubscriber(outerSubscriber, outerValue, outerIndex);
      }
      if (innerSubscriber.closed) {
          return undefined;
      }
      if (result instanceof Observable) {
          return result.subscribe(innerSubscriber);
      }
      return subscribeTo(result)(innerSubscriber);
  }
  //# sourceMappingURL=subscribeToResult.js.map

  /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
  var OuterSubscriber = /*@__PURE__*/ (function (_super) {
      __extends(OuterSubscriber, _super);
      function OuterSubscriber() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
          this.destination.next(innerValue);
      };
      OuterSubscriber.prototype.notifyError = function (error, innerSub) {
          this.destination.error(error);
      };
      OuterSubscriber.prototype.notifyComplete = function (innerSub) {
          this.destination.complete();
      };
      return OuterSubscriber;
  }(Subscriber));
  //# sourceMappingURL=OuterSubscriber.js.map

  /** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
  function scheduleArray(input, scheduler) {
      return new Observable(function (subscriber) {
          var sub = new Subscription();
          var i = 0;
          sub.add(scheduler.schedule(function () {
              if (i === input.length) {
                  subscriber.complete();
                  return;
              }
              subscriber.next(input[i++]);
              if (!subscriber.closed) {
                  sub.add(this.schedule());
              }
          }));
          return sub;
      });
  }
  //# sourceMappingURL=scheduleArray.js.map

  /** PURE_IMPORTS_START _Observable,_util_subscribeToArray,_scheduled_scheduleArray PURE_IMPORTS_END */
  function fromArray(input, scheduler) {
      if (!scheduler) {
          return new Observable(subscribeToArray(input));
      }
      else {
          return scheduleArray(input, scheduler);
      }
  }
  //# sourceMappingURL=fromArray.js.map

  /** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable PURE_IMPORTS_END */
  function scheduleObservable(input, scheduler) {
      return new Observable(function (subscriber) {
          var sub = new Subscription();
          sub.add(scheduler.schedule(function () {
              var observable$1 = input[observable]();
              sub.add(observable$1.subscribe({
                  next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },
                  error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },
                  complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },
              }));
          }));
          return sub;
      });
  }
  //# sourceMappingURL=scheduleObservable.js.map

  /** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
  function schedulePromise(input, scheduler) {
      return new Observable(function (subscriber) {
          var sub = new Subscription();
          sub.add(scheduler.schedule(function () {
              return input.then(function (value) {
                  sub.add(scheduler.schedule(function () {
                      subscriber.next(value);
                      sub.add(scheduler.schedule(function () { return subscriber.complete(); }));
                  }));
              }, function (err) {
                  sub.add(scheduler.schedule(function () { return subscriber.error(err); }));
              });
          }));
          return sub;
      });
  }
  //# sourceMappingURL=schedulePromise.js.map

  /** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator PURE_IMPORTS_END */
  function scheduleIterable(input, scheduler) {
      if (!input) {
          throw new Error('Iterable cannot be null');
      }
      return new Observable(function (subscriber) {
          var sub = new Subscription();
          var iterator$1;
          sub.add(function () {
              if (iterator$1 && typeof iterator$1.return === 'function') {
                  iterator$1.return();
              }
          });
          sub.add(scheduler.schedule(function () {
              iterator$1 = input[iterator]();
              sub.add(scheduler.schedule(function () {
                  if (subscriber.closed) {
                      return;
                  }
                  var value;
                  var done;
                  try {
                      var result = iterator$1.next();
                      value = result.value;
                      done = result.done;
                  }
                  catch (err) {
                      subscriber.error(err);
                      return;
                  }
                  if (done) {
                      subscriber.complete();
                  }
                  else {
                      subscriber.next(value);
                      this.schedule();
                  }
              }));
          }));
          return sub;
      });
  }
  //# sourceMappingURL=scheduleIterable.js.map

  /** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
  function isInteropObservable(input) {
      return input && typeof input[observable] === 'function';
  }
  //# sourceMappingURL=isInteropObservable.js.map

  /** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
  function isIterable(input) {
      return input && typeof input[iterator] === 'function';
  }
  //# sourceMappingURL=isIterable.js.map

  /** PURE_IMPORTS_START _scheduleObservable,_schedulePromise,_scheduleArray,_scheduleIterable,_util_isInteropObservable,_util_isPromise,_util_isArrayLike,_util_isIterable PURE_IMPORTS_END */
  function scheduled(input, scheduler) {
      if (input != null) {
          if (isInteropObservable(input)) {
              return scheduleObservable(input, scheduler);
          }
          else if (isPromise(input)) {
              return schedulePromise(input, scheduler);
          }
          else if (isArrayLike(input)) {
              return scheduleArray(input, scheduler);
          }
          else if (isIterable(input) || typeof input === 'string') {
              return scheduleIterable(input, scheduler);
          }
      }
      throw new TypeError((input !== null && typeof input || input) + ' is not observable');
  }
  //# sourceMappingURL=scheduled.js.map

  /** PURE_IMPORTS_START _Observable,_util_subscribeTo,_scheduled_scheduled PURE_IMPORTS_END */
  function from(input, scheduler) {
      if (!scheduler) {
          if (input instanceof Observable) {
              return input;
          }
          return new Observable(subscribeTo(input));
      }
      else {
          return scheduled(input, scheduler);
      }
  }
  //# sourceMappingURL=from.js.map

  /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
  function map$3(project, thisArg) {
      return function mapOperation(source) {
          if (typeof project !== 'function') {
              throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
          }
          return source.lift(new MapOperator(project, thisArg));
      };
  }
  var MapOperator = /*@__PURE__*/ (function () {
      function MapOperator(project, thisArg) {
          this.project = project;
          this.thisArg = thisArg;
      }
      MapOperator.prototype.call = function (subscriber, source) {
          return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
      };
      return MapOperator;
  }());
  var MapSubscriber = /*@__PURE__*/ (function (_super) {
      __extends(MapSubscriber, _super);
      function MapSubscriber(destination, project, thisArg) {
          var _this = _super.call(this, destination) || this;
          _this.project = project;
          _this.count = 0;
          _this.thisArg = thisArg || _this;
          return _this;
      }
      MapSubscriber.prototype._next = function (value) {
          var result;
          try {
              result = this.project.call(this.thisArg, value, this.count++);
          }
          catch (err) {
              this.destination.error(err);
              return;
          }
          this.destination.next(result);
      };
      return MapSubscriber;
  }(Subscriber));
  //# sourceMappingURL=map.js.map

  /** PURE_IMPORTS_START tslib,_map,_observable_from,_innerSubscribe PURE_IMPORTS_END */
  function mergeMap(project, resultSelector, concurrent) {
      if (concurrent === void 0) {
          concurrent = Number.POSITIVE_INFINITY;
      }
      if (typeof resultSelector === 'function') {
          return function (source) { return source.pipe(mergeMap(function (a, i) { return from(project(a, i)).pipe(map$3(function (b, ii) { return resultSelector(a, b, i, ii); })); }, concurrent)); };
      }
      else if (typeof resultSelector === 'number') {
          concurrent = resultSelector;
      }
      return function (source) { return source.lift(new MergeMapOperator(project, concurrent)); };
  }
  var MergeMapOperator = /*@__PURE__*/ (function () {
      function MergeMapOperator(project, concurrent) {
          if (concurrent === void 0) {
              concurrent = Number.POSITIVE_INFINITY;
          }
          this.project = project;
          this.concurrent = concurrent;
      }
      MergeMapOperator.prototype.call = function (observer, source) {
          return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
      };
      return MergeMapOperator;
  }());
  var MergeMapSubscriber = /*@__PURE__*/ (function (_super) {
      __extends(MergeMapSubscriber, _super);
      function MergeMapSubscriber(destination, project, concurrent) {
          if (concurrent === void 0) {
              concurrent = Number.POSITIVE_INFINITY;
          }
          var _this = _super.call(this, destination) || this;
          _this.project = project;
          _this.concurrent = concurrent;
          _this.hasCompleted = false;
          _this.buffer = [];
          _this.active = 0;
          _this.index = 0;
          return _this;
      }
      MergeMapSubscriber.prototype._next = function (value) {
          if (this.active < this.concurrent) {
              this._tryNext(value);
          }
          else {
              this.buffer.push(value);
          }
      };
      MergeMapSubscriber.prototype._tryNext = function (value) {
          var result;
          var index = this.index++;
          try {
              result = this.project(value, index);
          }
          catch (err) {
              this.destination.error(err);
              return;
          }
          this.active++;
          this._innerSub(result);
      };
      MergeMapSubscriber.prototype._innerSub = function (ish) {
          var innerSubscriber = new SimpleInnerSubscriber(this);
          var destination = this.destination;
          destination.add(innerSubscriber);
          var innerSubscription = innerSubscribe(ish, innerSubscriber);
          if (innerSubscription !== innerSubscriber) {
              destination.add(innerSubscription);
          }
      };
      MergeMapSubscriber.prototype._complete = function () {
          this.hasCompleted = true;
          if (this.active === 0 && this.buffer.length === 0) {
              this.destination.complete();
          }
          this.unsubscribe();
      };
      MergeMapSubscriber.prototype.notifyNext = function (innerValue) {
          this.destination.next(innerValue);
      };
      MergeMapSubscriber.prototype.notifyComplete = function () {
          var buffer = this.buffer;
          this.active--;
          if (buffer.length > 0) {
              this._next(buffer.shift());
          }
          else if (this.active === 0 && this.hasCompleted) {
              this.destination.complete();
          }
      };
      return MergeMapSubscriber;
  }(SimpleOuterSubscriber));
  //# sourceMappingURL=mergeMap.js.map

  /** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */
  function mergeAll(concurrent) {
      if (concurrent === void 0) {
          concurrent = Number.POSITIVE_INFINITY;
      }
      return mergeMap(identity$1, concurrent);
  }
  //# sourceMappingURL=mergeAll.js.map

  /** PURE_IMPORTS_START  PURE_IMPORTS_END */
  var ObjectUnsubscribedErrorImpl = /*@__PURE__*/ (function () {
      function ObjectUnsubscribedErrorImpl() {
          Error.call(this);
          this.message = 'object unsubscribed';
          this.name = 'ObjectUnsubscribedError';
          return this;
      }
      ObjectUnsubscribedErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
      return ObjectUnsubscribedErrorImpl;
  })();
  var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
  //# sourceMappingURL=ObjectUnsubscribedError.js.map

  /** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
  var SubjectSubscription = /*@__PURE__*/ (function (_super) {
      __extends(SubjectSubscription, _super);
      function SubjectSubscription(subject, subscriber) {
          var _this = _super.call(this) || this;
          _this.subject = subject;
          _this.subscriber = subscriber;
          _this.closed = false;
          return _this;
      }
      SubjectSubscription.prototype.unsubscribe = function () {
          if (this.closed) {
              return;
          }
          this.closed = true;
          var subject = this.subject;
          var observers = subject.observers;
          this.subject = null;
          if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
              return;
          }
          var subscriberIndex = observers.indexOf(this.subscriber);
          if (subscriberIndex !== -1) {
              observers.splice(subscriberIndex, 1);
          }
      };
      return SubjectSubscription;
  }(Subscription));
  //# sourceMappingURL=SubjectSubscription.js.map

  /** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */
  var SubjectSubscriber = /*@__PURE__*/ (function (_super) {
      __extends(SubjectSubscriber, _super);
      function SubjectSubscriber(destination) {
          var _this = _super.call(this, destination) || this;
          _this.destination = destination;
          return _this;
      }
      return SubjectSubscriber;
  }(Subscriber));
  var Subject = /*@__PURE__*/ (function (_super) {
      __extends(Subject, _super);
      function Subject() {
          var _this = _super.call(this) || this;
          _this.observers = [];
          _this.closed = false;
          _this.isStopped = false;
          _this.hasError = false;
          _this.thrownError = null;
          return _this;
      }
      Subject.prototype[rxSubscriber] = function () {
          return new SubjectSubscriber(this);
      };
      Subject.prototype.lift = function (operator) {
          var subject = new AnonymousSubject(this, this);
          subject.operator = operator;
          return subject;
      };
      Subject.prototype.next = function (value) {
          if (this.closed) {
              throw new ObjectUnsubscribedError();
          }
          if (!this.isStopped) {
              var observers = this.observers;
              var len = observers.length;
              var copy = observers.slice();
              for (var i = 0; i < len; i++) {
                  copy[i].next(value);
              }
          }
      };
      Subject.prototype.error = function (err) {
          if (this.closed) {
              throw new ObjectUnsubscribedError();
          }
          this.hasError = true;
          this.thrownError = err;
          this.isStopped = true;
          var observers = this.observers;
          var len = observers.length;
          var copy = observers.slice();
          for (var i = 0; i < len; i++) {
              copy[i].error(err);
          }
          this.observers.length = 0;
      };
      Subject.prototype.complete = function () {
          if (this.closed) {
              throw new ObjectUnsubscribedError();
          }
          this.isStopped = true;
          var observers = this.observers;
          var len = observers.length;
          var copy = observers.slice();
          for (var i = 0; i < len; i++) {
              copy[i].complete();
          }
          this.observers.length = 0;
      };
      Subject.prototype.unsubscribe = function () {
          this.isStopped = true;
          this.closed = true;
          this.observers = null;
      };
      Subject.prototype._trySubscribe = function (subscriber) {
          if (this.closed) {
              throw new ObjectUnsubscribedError();
          }
          else {
              return _super.prototype._trySubscribe.call(this, subscriber);
          }
      };
      Subject.prototype._subscribe = function (subscriber) {
          if (this.closed) {
              throw new ObjectUnsubscribedError();
          }
          else if (this.hasError) {
              subscriber.error(this.thrownError);
              return Subscription.EMPTY;
          }
          else if (this.isStopped) {
              subscriber.complete();
              return Subscription.EMPTY;
          }
          else {
              this.observers.push(subscriber);
              return new SubjectSubscription(this, subscriber);
          }
      };
      Subject.prototype.asObservable = function () {
          var observable = new Observable();
          observable.source = this;
          return observable;
      };
      Subject.create = function (destination, source) {
          return new AnonymousSubject(destination, source);
      };
      return Subject;
  }(Observable));
  var AnonymousSubject = /*@__PURE__*/ (function (_super) {
      __extends(AnonymousSubject, _super);
      function AnonymousSubject(destination, source) {
          var _this = _super.call(this) || this;
          _this.destination = destination;
          _this.source = source;
          return _this;
      }
      AnonymousSubject.prototype.next = function (value) {
          var destination = this.destination;
          if (destination && destination.next) {
              destination.next(value);
          }
      };
      AnonymousSubject.prototype.error = function (err) {
          var destination = this.destination;
          if (destination && destination.error) {
              this.destination.error(err);
          }
      };
      AnonymousSubject.prototype.complete = function () {
          var destination = this.destination;
          if (destination && destination.complete) {
              this.destination.complete();
          }
      };
      AnonymousSubject.prototype._subscribe = function (subscriber) {
          var source = this.source;
          if (source) {
              return this.source.subscribe(subscriber);
          }
          else {
              return Subscription.EMPTY;
          }
      };
      return AnonymousSubject;
  }(Subject));
  //# sourceMappingURL=Subject.js.map

  /** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
  function scan$1(accumulator, seed) {
      var hasSeed = false;
      if (arguments.length >= 2) {
          hasSeed = true;
      }
      return function scanOperatorFunction(source) {
          return source.lift(new ScanOperator(accumulator, seed, hasSeed));
      };
  }
  var ScanOperator = /*@__PURE__*/ (function () {
      function ScanOperator(accumulator, seed, hasSeed) {
          if (hasSeed === void 0) {
              hasSeed = false;
          }
          this.accumulator = accumulator;
          this.seed = seed;
          this.hasSeed = hasSeed;
      }
      ScanOperator.prototype.call = function (subscriber, source) {
          return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
      };
      return ScanOperator;
  }());
  var ScanSubscriber = /*@__PURE__*/ (function (_super) {
      __extends(ScanSubscriber, _super);
      function ScanSubscriber(destination, accumulator, _seed, hasSeed) {
          var _this = _super.call(this, destination) || this;
          _this.accumulator = accumulator;
          _this._seed = _seed;
          _this.hasSeed = hasSeed;
          _this.index = 0;
          return _this;
      }
      Object.defineProperty(ScanSubscriber.prototype, "seed", {
          get: function () {
              return this._seed;
          },
          set: function (value) {
              this.hasSeed = true;
              this._seed = value;
          },
          enumerable: true,
          configurable: true
      });
      ScanSubscriber.prototype._next = function (value) {
          if (!this.hasSeed) {
              this.seed = value;
              this.destination.next(value);
          }
          else {
              return this._tryNext(value);
          }
      };
      ScanSubscriber.prototype._tryNext = function (value) {
          var index = this.index++;
          var result;
          try {
              result = this.accumulator(this.seed, value, index);
          }
          catch (err) {
              this.destination.error(err);
          }
          this.seed = result;
          this.destination.next(result);
      };
      return ScanSubscriber;
  }(Subscriber));
  //# sourceMappingURL=scan.js.map

  /** PURE_IMPORTS_START _Observable,_util_isScheduler,_operators_mergeAll,_fromArray PURE_IMPORTS_END */
  function merge() {
      var observables = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          observables[_i] = arguments[_i];
      }
      var concurrent = Number.POSITIVE_INFINITY;
      var scheduler = null;
      var last = observables[observables.length - 1];
      if (isScheduler(last)) {
          scheduler = observables.pop();
          if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
              concurrent = observables.pop();
          }
      }
      else if (typeof last === 'number') {
          concurrent = observables.pop();
      }
      if (scheduler === null && observables.length === 1 && observables[0] instanceof Observable) {
          return observables[0];
      }
      return mergeAll(concurrent)(fromArray(observables, scheduler));
  }
  //# sourceMappingURL=merge.js.map

  /** PURE_IMPORTS_START tslib,_Subject,_util_ObjectUnsubscribedError PURE_IMPORTS_END */
  var BehaviorSubject = /*@__PURE__*/ (function (_super) {
      __extends(BehaviorSubject, _super);
      function BehaviorSubject(_value) {
          var _this = _super.call(this) || this;
          _this._value = _value;
          return _this;
      }
      Object.defineProperty(BehaviorSubject.prototype, "value", {
          get: function () {
              return this.getValue();
          },
          enumerable: true,
          configurable: true
      });
      BehaviorSubject.prototype._subscribe = function (subscriber) {
          var subscription = _super.prototype._subscribe.call(this, subscriber);
          if (subscription && !subscription.closed) {
              subscriber.next(this._value);
          }
          return subscription;
      };
      BehaviorSubject.prototype.getValue = function () {
          if (this.hasError) {
              throw this.thrownError;
          }
          else if (this.closed) {
              throw new ObjectUnsubscribedError();
          }
          else {
              return this._value;
          }
      };
      BehaviorSubject.prototype.next = function (value) {
          _super.prototype.next.call(this, this._value = value);
      };
      return BehaviorSubject;
  }(Subject));
  //# sourceMappingURL=BehaviorSubject.js.map

  /** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
  function withLatestFrom() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
      }
      return function (source) {
          var project;
          if (typeof args[args.length - 1] === 'function') {
              project = args.pop();
          }
          var observables = args;
          return source.lift(new WithLatestFromOperator(observables, project));
      };
  }
  var WithLatestFromOperator = /*@__PURE__*/ (function () {
      function WithLatestFromOperator(observables, project) {
          this.observables = observables;
          this.project = project;
      }
      WithLatestFromOperator.prototype.call = function (subscriber, source) {
          return source.subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
      };
      return WithLatestFromOperator;
  }());
  var WithLatestFromSubscriber = /*@__PURE__*/ (function (_super) {
      __extends(WithLatestFromSubscriber, _super);
      function WithLatestFromSubscriber(destination, observables, project) {
          var _this = _super.call(this, destination) || this;
          _this.observables = observables;
          _this.project = project;
          _this.toRespond = [];
          var len = observables.length;
          _this.values = new Array(len);
          for (var i = 0; i < len; i++) {
              _this.toRespond.push(i);
          }
          for (var i = 0; i < len; i++) {
              var observable = observables[i];
              _this.add(subscribeToResult(_this, observable, undefined, i));
          }
          return _this;
      }
      WithLatestFromSubscriber.prototype.notifyNext = function (_outerValue, innerValue, outerIndex) {
          this.values[outerIndex] = innerValue;
          var toRespond = this.toRespond;
          if (toRespond.length > 0) {
              var found = toRespond.indexOf(outerIndex);
              if (found !== -1) {
                  toRespond.splice(found, 1);
              }
          }
      };
      WithLatestFromSubscriber.prototype.notifyComplete = function () {
      };
      WithLatestFromSubscriber.prototype._next = function (value) {
          if (this.toRespond.length === 0) {
              var args = [value].concat(this.values);
              if (this.project) {
                  this._tryProject(args);
              }
              else {
                  this.destination.next(args);
              }
          }
      };
      WithLatestFromSubscriber.prototype._tryProject = function (args) {
          var result;
          try {
              result = this.project.apply(this, args);
          }
          catch (err) {
              this.destination.error(err);
              return;
          }
          this.destination.next(result);
      };
      return WithLatestFromSubscriber;
  }(OuterSubscriber));
  //# sourceMappingURL=withLatestFrom.js.map

  // ================= MIDI Messages predicates ======================

  const seemsMIDIMessageAsArray = (msg) => 
    allPass ([either (is$1 (Array)) (is$1 (Uint8Array)),
              complement (isEmpty),
              all (is$1 (Number))]) (msg);

  const seemsMIDIMessage = (msg) =>
    allPass ([is$1 (Object),
              propEq$1 ('type', 'midimessage'),
              propSatisfies (seemsMIDIMessageAsArray, 'data')]) (msg);

  const seemsArrayOfMIDIMessages =
    both (is$1 (Array))
         (all (seemsMIDIMessage));

  const dataEq = curry ((data, msg) =>
    seemsMIDIMessage (msg) ?
      equals$1 (data) (msg.data)
      : false);

  const byteEq = curry ((n, data, msg) =>
    seemsMIDIMessage (msg) ?
      pathEq ([n]) (data) (msg.data)
      : false);

  const dataEqBy = curry ((pred, msg) =>
    seemsMIDIMessage (msg) ? 
      pred (msg.data)
      : false);

  const byteEqBy = curry ((n, pred, msg) =>
    seemsMIDIMessage (msg) ?
      pred (path$1 ([n]) (msg.data))
      : false);


  // ------------------ Channel Voice Messages -----------------------

  const isChannelVoiceMessageOfType = curry((type, msg) =>
    both (seemsMIDIMessage)
         (dataEqBy 
           (p => includes (type, [8, 9, 10, 11, 14]) ?
                   length$1 (p) === 3 && p [0] >> 4 === type
                   : length$1 (p) === 2 && p [0] >> 4 === type)) (msg));

  const isNoteOff = (msg) =>
    isChannelVoiceMessageOfType (8) (msg);

  const isNoteOn = (msg) =>
    isChannelVoiceMessageOfType (9) (msg);

  const asNoteOn = (msg) =>
    both (isNoteOn) (complement (byteEq (2) (0))) (msg);

  const asNoteOff = (msg) =>
    either (isNoteOff) (both (isNoteOn) (byteEq (2) (0))) (msg);

  const isNote = (msg) =>
    either (isNoteOff) (isNoteOn) (msg);

  const hasVelocity = (msg) =>
    isNote (msg);

  const velocityEq = curry((v, msg) =>
    both (hasVelocity)
         (byteEq (2) (v))
         (msg));

  const isPolyPressure = (msg) =>
    isChannelVoiceMessageOfType (10) (msg);

  const hasNote = (msg) =>
    either (isNote) (isPolyPressure) (msg);

  const noteEq = curry((n, msg) =>
    both (hasNote)
         (byteEq (1) (n))
         (msg));

  const isControlChange = (msg) =>
    isChannelVoiceMessageOfType (11) (msg);

  const controlEq = curry((c, msg) =>
    both (isControlChange)
         (byteEq (1) (c))
         (msg));

  const valueEq = curry((v, msg) =>
    both (isControlChange)
         (byteEq (2) (v))
         (msg));

  // Some CC messages by name
  const isTimbreChange = (msg) =>
    both (isControlChange)
         (controlEq (74))
         (msg);

  const isProgramChange = (msg) =>
    isChannelVoiceMessageOfType (12) (msg);

  const programEq = curry((p, msg) =>
    both (isProgramChange)
         (byteEq (1) (p))
         (msg));

  const isChannelPressure = (msg) =>
    isChannelVoiceMessageOfType (13) (msg);

  const hasPressure = (msg) =>
    either (isPolyPressure) (isChannelPressure) (msg);

  const pressureEq = curry((p, msg) =>
    cond$1 ([[isPolyPressure, byteEq (2) (p)],
           [isChannelPressure, byteEq (1) (p)],
           [T$1, F]])
         (msg));

  const isPitchBend = (msg) =>
    isChannelVoiceMessageOfType (14) (msg);

  const pitchBendEq = curry((pb, msg) =>
    allPass ([isPitchBend,
              byteEq (1) (pb & 0x7F),
              byteEq (2) (pb >> 7)])
            (msg));


  // ------------ Channel Mode Messages ----------------

  const isChannelModeMessage = (d1, d2) => (msg) => 
    d2 === undefined ?
      both (isControlChange) (byteEq (1) (d1)) (msg)
      : allPass ([isControlChange,
                  byteEq (1) (d1),
                  byteEq (2) (d2)])
                (msg);

  const isAllSoundOff = (msg) =>
    isChannelModeMessage (120, 0) (msg);

  const isResetAll = (msg) =>
    isChannelModeMessage (121) (msg);

  const isLocalControlOff = (msg) =>
    isChannelModeMessage (122, 0) (msg);

  const isLocalControlOn = (msg) =>
    isChannelModeMessage (122, 127) (msg);

  const isAllNotesOff = (msg) =>
    isChannelModeMessage (123, 0) (msg);

  const isOmniModeOff = (msg) =>
    isChannelModeMessage (124, 0) (msg);

  const isOmniModeOn = (msg) =>
    isChannelModeMessage (125, 0) (msg);

  const isMonoModeOn = (msg) =>
    isChannelModeMessage (126) (msg);

  const isPolyModeOn = (msg) =>
    isChannelModeMessage (127, 0) (msg);

  const isChannelMode = (msg) =>
    anyPass ([isAllSoundOff,
              isResetAll,
              isLocalControlOff,
              isLocalControlOn,
              isAllNotesOff,
              isOmniModeOff,
              isOmniModeOn,
              isMonoModeOn,
              isPolyModeOn])
            (msg);

  const isChannelVoice = (msg) =>
    anyPass ([isNote,
              isPolyPressure,
              both (isControlChange) 
                   (complement (isChannelMode)),
              isProgramChange,
              isChannelPressure,
              isPitchBend])
            (msg);

  // -------------------- RPN & NRPN predicates ----------------------

  const isRPN = (msg) =>
    allPass ([seemsMIDIMessage,
              byteEq (1) (101),
              byteEq (4) (100),
              byteEq (7) (6),
              byteEq (-5) (101),
              byteEq (-4) (127),
              byteEq (-2) (100),
              byteEq (-1) (127)])
            (msg);

  const isNRPN = (msg) =>
    allPass ([seemsMIDIMessage,
              byteEq (1) (99),
              byteEq (4) (98),
              byteEq (7) (6),
              byteEq (-5) (101),
              byteEq (-4) (127),
              byteEq (-2) (100),
              byteEq (-1) (127)])
            (msg);

  const isChannelMessage = (msg) =>
    anyPass ([ isChannelMode, isChannelVoice, isRPN, isNRPN ])
            (msg);

  const isOnChannel = curry((ch, msg) =>
    both (isChannelMessage)
         (byteEqBy (0) (v => (v & 0xF) === ch))
         (msg));

  const isOnChannels = curry((chs, msg) =>
    both (isChannelMessage)
         (byteEqBy (0) (v => includes (v & 0xF, chs)))
         (msg));

  // =============== System Common message predicates ================

  const isSystemExclusive = (msg) =>
    allPass ([seemsMIDIMessage,
              byteEq (0) (240),
              byteEq (-1) (247)])
            (msg);

  const isMIDITimeCodeQuarterFrame = (msg) =>
    both (seemsMIDIMessage) (byteEq (0) (241)) (msg);

  const isSongPositionPointer = (msg) =>
    both (seemsMIDIMessage) (byteEq (0) (242)) (msg);

  const isSongSelect = (msg) =>
    both (seemsMIDIMessage) (byteEq (0) (243)) (msg);

  const isTuneRequest = (msg) =>
    both (seemsMIDIMessage) (dataEq ([246])) (msg);

  const isEndOfExclusive = (msg) =>
    both (seemsMIDIMessage) (dataEq ([247])) (msg);

  // ============= System Real Time message predicates ===============

  const isMIDIClock = (msg) =>
    both (seemsMIDIMessage) (dataEq ([248])) (msg);

  const isStart = (msg) =>
    both (seemsMIDIMessage) (dataEq ([250])) (msg);

  const isContinue = (msg) =>
    both (seemsMIDIMessage) (dataEq ([251])) (msg);

  const isStop = (msg) =>
    both (seemsMIDIMessage) (dataEq ([252])) (msg);

  const isActiveSensing = (msg) =>
    both (seemsMIDIMessage) (dataEq ([254])) (msg);

  // Reset and MIDI File Meta Events have the same value on
  // their first byte: 0xFF.
  // Reset message is just one byte long and MIDI File Meta
  // Events are several bytes long. It's not possible to
  // differentiate them based on first byte, it's the
  // programmer responsability to only use isReset outside
  // MIDI Files and seemsMIDIMetaEvent inside MIDI Files.
  const isReset = (msg) =>
    both (seemsMIDIMessage)
         (dataEq ([255]))
         (msg);


  // ============== MIDI File Meta Events predicates =================

  // TODO: Check that length is correct !!!
  const seemsMIDIMetaEventArray = (msg) =>
    allPass ([is$1 (Array),
              complement (isEmpty),
              all (is$1 (Number)),
              pathEq ([0]) (255)])
            (msg);

  const seemsMIDIMetaEventObject = (msg) =>
    allPass ([is$1 (Object),
              propEq$1 ('type', 'metaevent'),
              has$2 ('metaType'),
              has$2 ('data')])
            (msg);

  const seemsMIDIMetaEvent = (msg) =>
    either (seemsMIDIMetaEventArray) (seemsMIDIMetaEventObject) (msg);

  const metaTypeEq = curry((type, msg) => 
    seemsMIDIMetaEventArray (msg) ?
      pathEq ([1]) (type) (msg)
      : seemsMIDIMetaEventObject (msg) ?
        metaTypeEq (type, msg.data) 
        : false);

  const isTempoChange = (msg) =>
    both (seemsMIDIMetaEvent) (metaTypeEq (81)) (msg);

  // =================== MIDI Message creation =======================

  // Converts a byte array to a MIDIMessageEvent compatible object.

  let msg = (data, timeStamp = 0, deltaTime = 0) => 
  ({ 
  	type: 'midimessage', 
  	timeStamp: timeStamp,
  	deltaTime: deltaTime,
  	data: [ ...data ],
  });

  let from$1 = (msg) =>
    is$1 (Array, msg) ?
      assoc ('data')
            (flatten (map$2 (prop$1 ('data'), msg)))
            (clone (head$1 (msg)))
      : clone (msg);

  // =================== MIDI Messages definition ====================

  // -------------- Channel Voice messages generation ----------------

  let off = (n = 64, v = 96, ch = 0) => 
    msg ([128 + ch, n, v]);

  let on = (n = 64, v = 96, ch = 0) => 
    msg ([144 + ch, n, v]);

  let pp$a = (n = 64, p = 96, ch = 0) => 
    msg ([160 + ch, n, p]);

  let cc = (c = 1, v = 127, ch = 0) => 
    msg ([176 + ch, c, v]);

  let pc = (p = 0, ch = 0) => 
    msg ([192 + ch, p]);

  let cp = (p = 96, ch = 0) => 
    msg ([208 + ch, p]);

  let pb = (v = 8192, ch = 0) => 
    msg ([224 + ch, v & 0x7F, v >> 7]);

  let rpn = (n = 0, v = 8192, ch = 0) => 
    from$1 ([
    	cc (101, n >> 7, ch),
    	cc (100, n % 128, ch), 
    	cc (6, v >> 7, ch),
    	cc (38, v % 128, ch),
    	cc (101, 127, ch),
    	cc (100, 127, ch)
    ]);

  let nrpn = (n = 0, v = 8192, ch = 0) => 
  from$1 ([
  	cc(99, n >> 7, ch),
  	cc(98, n % 128, ch),
  	cc(6, v >> 7, ch),
  	cc(38, v % 128, ch),
  	cc(101, 127, ch),
  	cc(100, 127, ch)
  ]);

  // -------------- System common messages generation ----------------

  let syx = (b) => 
    msg ([240, ...b, 247]);

  let tc = (t, v) => 
    msg ([241, (t << 4) + v]);

  let spp = (b) => 
    msg ([242, b % 128, b >> 7]);

  let ss = (s) => 
    msg ([243, s]);

  let tun = () => 
    msg ([246]);

  // ------------- System real time messages generation --------------

  let mc = () => 
    msg ([248]);

  let start = () => 
    msg ([250]);

  let cont = () => 
    msg ([251]);

  let stop = () => 
    msg ([252]);

  let as = () => 
    msg ([254]);

  let rst = () => 
    msg ([255]);

  let panic = () => 
  {
  	let panic_msgs = [];
  	for (let ch = 0; ch < 16; ch++) {
  		panic_msgs.push (cc (64, 0, ch));
  		panic_msgs.push (cc (120, 0, ch));
  		panic_msgs.push (cc (123, 0, ch));
  		for (let n = 0; n < 128; n++) {
  			panic_msgs.push (off (n, 0, ch));
  		}
  	}

  	return from$1 (panic_msgs)
  };

  // ------------- Generic property modification helpers -------------

  let getByte = curry ((n, msg) =>
    msg.data [n]);

  let setByte = curry ((n, v, msg) => 
    evolve$1 ({
      data: ((d) => [...slice$1 (0, n, d), v, ...slice$1 (n + 1, Infinity, d)])
    }) (msg));

  // --------------------------- Lenses ------------------------------

  let lensWhen = curry ((p, v, s) =>
    lens (
      (msg) => p (msg) ? v (msg) : undefined,
      (v, msg) => p (msg) ? s (v, msg) : msg)
  );

  let timeStamp =
    lensWhen (seemsMIDIMessage)
             (prop$1 ('timeStamp')) 
             (assoc ('timeStamp'));

  let deltaTime =
    lensWhen (seemsMIDIMessage)
             (prop$1 ('deltaTime'))
             (assoc ('deltaTime'));

  let channel =
    lensWhen (isChannelMessage) 
             ((m) => getByte (0) (m) & 0xF)
             ((v, m) => setByte (0) ((getByte (0, m) & 0xF0) + v) (m));

  let note =
    lensWhen (hasNote) (getByte (1)) (setByte (1));

  let velocity =
    lensWhen (hasVelocity) (getByte (2)) (setByte (2));

  let pressure =
    lensWhen (hasPressure)
             (ifElse (isPolyPressure) (getByte (2)) (getByte (1)))
             ((v, m) => isPolyPressure (m) ?
                          setByte (2) (v) (m)
                          : setByte (1) (v) (m));

  let control =
    lensWhen (isControlChange) (getByte (1)) (setByte (1));

  let value =
    lensWhen (isControlChange) (getByte (2)) (setByte (2));

  let program =
    lensWhen (isProgramChange) (getByte (1)) (setByte (1));

  let pitchBend =
    lensWhen (isPitchBend)
             ((m) => (getByte (2) (m) << 7) + getByte (1) (m))
             ((v, m) => setByte (1) (v & 0x7F) (setByte (2) (v >> 7) (m)));

  // ------------------------ MPE State Objects ----------------------------

  const mpeNote = (msg) => ({
    note: view (note) (msg),
    channel: view (channel) (msg),
    velocity: view (velocity) (msg),
    pitchBend: 0,
    timbre: 0,
    pressure: view (velocity) (msg)
  });

  const mpeZone = (m, n) =>
    m === 0 && n < 16 ?
      { // Lower Zone
        masterChannel: 0,
        memberChannels: n,
        zoneSize: n + 1,
        channels: range (1, n + 1),
        activeNotes: [] // In order as they arrive
      }
      : m === 15 && n < 16 ?
        { // Upper zone
          masterChannel: 15,
          memberChannels: n,
          zoneSize: n + 1,
          channels: range (15 - n, 15),
          activeNotes: []
        }
        : undefined;

  // ------------------------- MPE Predicates ------------------------------

  const isLowerZone = (mpeZone) =>
    mpeZone.masterChannel === 0;

  const isUpperZone = (mpeZone) =>
    mpeZone.masterChannel === 15;

  const isOnZone = (mpeZone) => (msg) =>
    includes (view (channel) (msg)) (mpeZone.channels);

  const isOnMasterChannel = (mpeZone) => (msg) =>
    view (channel) (msg) === mpeZone.masterChannel;

  const isActiveNote = (mpeZone) => (msg) => 
    isNote (msg) ?
      any (both (propEq$1 ('note') (view (note) (msg)))
                (propEq$1 ('channel') (view (channel) (msg))))
          (mpeZone.activeNotes)
      : false;

  const seemsActiveNote = (mpeZone) => (msg) =>
    isNote (msg) ?
      any (propEq$1 ('note') (view (note) (msg))) 
          (mpeZone.activeNotes)
      : false;

  // ---------------------- Processing functions ---------------------------

  const processNoteOnMessage = (mpeZone) => (msg) =>
    isActiveNote (mpeZone) (msg) ?
      evolve$1 ({
        activeNotes:
          map$2 (
            (n) => 
              n.note === view (note) (msg) 
              && n.channel === view (channel) (msg) ?
                evolve$1 ({
                  velocity: always$1 (view (velocity) (msg)),
                  pressure: always$1 (view (velocity) (msg))
                }) (n)
                : n)
      }) (mpeZone)
      : evolve$1 ({
          activeNotes: append$1 (mpeNote (msg))
        }) (mpeZone);

  const processNoteOffMessage = (mpeZone) => (msg) =>
    evolve$1 ({
      activeNotes:
        without$1 
          ([head$1 
            (filter$1 
              (both (propEq$1 ('note') (view (note) (msg)))
                    (propEq$1 ('channel') (view (channel) (msg))))
              (mpeZone.activeNotes))])
    }) (mpeZone);

  const processChannelPressureMessage = (mpeZone) => (msg) =>
    evolve$1 ({
      activeNotes:
        map$2 ((n) => n.channel === view (channel) (msg) ?
                      evolve$1 ({ 
                        pressure: always$1 (view (pressure) (msg)) 
                      }) (n)
                      : n)
    }) (mpeZone);

  const processTimbreMessage = (mpeZone) => (msg) =>
    evolve$1 ({
      activeNotes:
        map$2 ((n) => n.channel === view (channel) (msg) ?
                      evolve$1 ({
                        timbre: always$1 (view (value) (msg))
                      }) (n)
                      : n)
    }) (mpeZone);

  const processPitchBendMessage = (mpeZone) => (msg) =>
    evolve$1 ({
      activeNotes:
        map$2 ((n) => n.channel === view (channel) (msg) ?
                      evolve$1 ({
                        pitchBend: always$1 (view (pitchBend) (msg))
                      }) (n)
                      : n)
    }) (mpeZone);

  const zonePred = (mpeZone) => (predicate) =>
    allPass ([
      isOnZone (mpeZone), 
      complement (isOnMasterChannel (mpeZone)),
      predicate ]);

  const processMessage = (mpeZone) => 
    (msg, pred = zonePred (mpeZone)) =>
      cond$1 ([
        [pred (isNoteOn), processNoteOnMessage (mpeZone)],
        [pred (asNoteOff), processNoteOffMessage (mpeZone)],
        [pred (isChannelPressure), processChannelPressureMessage (mpeZone)],
        [pred (isTimbreChange), processTimbreMessage (mpeZone)],
        [pred (isPitchBend), processPitchBendMessage (mpeZone)],
        [T$1, always$1 (mpeZone)]
      ]) (msg);

  // ------------------------ toMPE algorithms -----------------------------

  // Helper function to find notes per channel on mpe zone
  const notesPerChannel = (mpeZone) =>
    map$2 ((c) => [c, length$1 (filter$1 ((n) => n.channel === c)
                                   (mpeZone.activeNotes))])
        (mpeZone.channels);

  // Algorithm: select channel on mpe zone as the one with least notes -----

  // Sort channels by note usage (ascending) and use first one 
  const leastNotesChannel = (mpeZone) => (msg) =>
    head$1 (
      head$1 (
        sort$1 ((a, b) => a [1] - b [1])
             (notesPerChannel (mpeZone))));


  // Algorithm: select channel based on key ranges with priorities ---------

  // Uses the following data structure to define key ranges:
  // [{ channel: n, min: n, max: n, weight: n }]
  // Where:
  // - channel -> the channel of the mpe zone that this key range will
  //              be mapped to
  // - min -> minimum note value that this range represents (included)
  // - max -> maximum note value that this range represents (included)
  // - weight -> relative priority to sort key ranges 

  // Helper function to add notes per channel to key ranges
  const addNotes = (notesxchannel) => (v) => 
    assoc ('notes') 
          (fromPairs (notesxchannel) [v.channel]) (v);

  // Always prefer empty channels to weight
  const byNotesAndWeight = (a, b) =>
    a.notes === b.notes ?
      b.weight - a.weight
      : a.notes - b.notes;

  // Select channel filtering key ranges that the note belongs to and
  // then sort by weight and number of notes on the channel.
  const channelByKeyRange = (keyRanges) => (mpeZone) => (msg) => {
    let msg_note = view (note) (msg);
    let noteInRange = (n) => (v) => v.min <= n && v.max >= n;

    return path$1 ([0, 'channel'])
                (sort$1 (byNotesAndWeight)
                      (map$2 (addNotes (notesPerChannel (mpeZone)))
                           (filter$1 (noteInRange (msg_note)) 
                                   (keyRanges))))
  };

  /** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */
  function fromEvent(target, eventName, options, resultSelector) {
      if (isFunction(options)) {
          resultSelector = options;
          options = undefined;
      }
      if (resultSelector) {
          return fromEvent(target, eventName, options).pipe(map$3(function (args) { return isArray$1(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
      }
      return new Observable(function (subscriber) {
          function handler(e) {
              if (arguments.length > 1) {
                  subscriber.next(Array.prototype.slice.call(arguments));
              }
              else {
                  subscriber.next(e);
              }
          }
          setupSubscription(target, eventName, handler, subscriber, options);
      });
  }
  function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
      var unsubscribe;
      if (isEventTarget(sourceObj)) {
          var source_1 = sourceObj;
          sourceObj.addEventListener(eventName, handler, options);
          unsubscribe = function () { return source_1.removeEventListener(eventName, handler, options); };
      }
      else if (isJQueryStyleEventEmitter(sourceObj)) {
          var source_2 = sourceObj;
          sourceObj.on(eventName, handler);
          unsubscribe = function () { return source_2.off(eventName, handler); };
      }
      else if (isNodeStyleEventEmitter(sourceObj)) {
          var source_3 = sourceObj;
          sourceObj.addListener(eventName, handler);
          unsubscribe = function () { return source_3.removeListener(eventName, handler); };
      }
      else if (sourceObj && sourceObj.length) {
          for (var i = 0, len = sourceObj.length; i < len; i++) {
              setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
          }
      }
      else {
          throw new TypeError('Invalid event target');
      }
      subscriber.add(unsubscribe);
  }
  function isNodeStyleEventEmitter(sourceObj) {
      return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
  }
  function isJQueryStyleEventEmitter(sourceObj) {
      return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
  }
  function isEventTarget(sourceObj) {
      return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
  }
  //# sourceMappingURL=fromEvent.js.map

  // ======================= Predicate helpers =============================

  const lensP = curry((lens, pred, v) => 
    (msg) => pred (view (lens) (msg)) (v)
  );

  const toMPE = curry((m, c, findChannel = leastNotesChannel) =>
    pipe$2 (
      scan$1 (([z, _], msg) => {
        if (isNoteOn (msg)) {
          let ch = findChannel (z) (msg);
          let mod_msg = set$3 (channel) (ch) (msg);
          return [processMessage (z) (mod_msg), mod_msg]
        } else if (isNoteOff (msg)) {
          let n = view (note) (msg);
          let ch = prop$1 ('channel') (head$1 (filter$1 ((an) => an.note === n)
                                                  (z.activeNotes)));
          let mod_msg = set$3 (channel) (ch) (msg);
          return [processMessage (z) (mod_msg), mod_msg]
        } else {
          return [z, msg]
        }
      }, [mpeZone (m, c), null]),
      map$3 (([x, msg]) => msg)));

  // ----------------- MIDI Clock message generation -----------------

  let lookAheadClock$1 = 
    curry ((time_division, bpm, last_tick_time, now, look_ahead) => {
      let ms_per_tick = 60000 / (bpm * time_division);
      let look_ahead_end = now + look_ahead;

      let events = [];

      last_tick_time = last_tick_time + ms_per_tick;
      while (last_tick_time < look_ahead_end) {
        if (last_tick_time >= now) {
          events.push (set$3 (timeStamp) (last_tick_time) (mc ()));
        }
        last_tick_time = last_tick_time + ms_per_tick;
      }

      return events
    });

  // ------------------------- Predicates ----------------------------

  let seemsMIDIFile = 
    allPass ([is$1 (Object),
              has$2 ('formatType'),
              has$2 ('timeDivision'),
              has$2 ('tracks'),
              has$2 ('track'),
              propIs (Array, 'track')]);

  let seemsMIDILoop =
    both (seemsMIDIFile)
         (propEq$1 ('loop', true));

  // -------------------------- Helpers ------------------------------

  let withAbsoluteDeltaTimes =
  	evolve$1 ({
  		track: map$2 (
  			evolve$1 ({
  				event: pipe$1 (
  					scan 
              (([tick, _], msg) => [tick + msg.deltaTime, msg])
              ([0, null]),
  					map$2
              (([tick, msg]) => 
                msg !== null ?
                  from$1 (mergeLeft ({ absoluteDeltaTime: tick }, msg))
                  : null),
  					tail$1)}))});

  let mergeTracks =
  	evolve$1 ({
  		tracks: always$1 (1),
  		track: pipe$1 (
  			reduce$1 ((acc, v) => concat$1(acc, v.event), []),
        map$2 (v => from$1 (v)),
  			objOf ('event'),
  			append$1 (__$1, []))});

  let sortEvents = 
      evolve$1 ({
  		track: pipe$1 (
  			map$2 (v => 
          pipe$1 (
            sort$1 ((a, b) => a.absoluteDeltaTime - b.absoluteDeltaTime),
            map$2 (v => from$1 (v))
          )(v.event)),
  			head$1,
  			objOf ('event'),
  			append$1 (__$1, []))});

  let filterIndexed = 
    addIndex$1 (filter$1);

  let filterTracks =	(tracks, midiFile) => 
  		evolve$1 ({
  			tracks: () => tracks.length,
  			track: pipe$1 (
          filterIndexed ((v, k) => tracks.includes (k)),
          map$2 (v => objOf ('event', map$2 (from$1, v.event)))
        )
  		}, midiFile);

  // TODO
  //export let addTrack/s = (midiFile, tracks) => 

  // TODO
  //export let changeTimeDivision = (midiFile, newTimeDivision) =>

  // TODO
  // export let commonTimeDivision = (midiFile1, midiFile2, ...) => 

  let createMIDIFile =	(track, timeDivision = 24) => ({
    formatType: 1,
  	tracks: 1,
  	timeDivision: timeDivision,
  	track: [{ event: map$2 (from$1, track) }]
  });

  let createLoop =	(midifile) => ({
    ...midifile,
    loop: true,
    track: map$2 (
      pipe$1 (
        prop$1 ('event'),
        map$2 (from$1),
        objOf ('event')
      )
    ) (midifile.track)
  });

  // TODO: MIDIPlayer should have state, extract inner function
  // to be easily testeable.
  let MIDIFilePlayer$1 = (midifile, tick, midi_clocks) => {
    let playable = pipe$1 (
      withAbsoluteDeltaTimes,
      mergeTracks,
      sortEvents
    ) (midifile);

    let track = playable.track [0].event;
    let loop = playable.loop;
    let maxTick = last$1 (track).absoluteDeltaTime;

    let func = (tick, midi_clocks) => 
      slice$1 
        (0, 2)
        (reduceWhile 
          (([events, tick, bpm_not_found], midi_clock) => bpm_not_found)
          (([events, tick, bpm_not_found], midi_clock) => {
            let tick_events = pipe$1 (
              filter$1 (e => 
                e.absoluteDeltaTime === tick ||
                (loop &&  e.absoluteDeltaTime === (tick % maxTick))),
              map$2 (set$3 (timeStamp) (midi_clock.timeStamp)),
            ) (track);

            return [
              concat$1 (events, tick_events), 
              loop ? (tick + 1) % maxTick : tick + 1,
              isEmpty (filter$1 (isTempoChange) (tick_events))
            ]
          })
          ([[], tick, true])
          (midi_clocks));

      if (tick === undefined || midi_clocks === undefined) 
        return func
      else
        return func (tick, midi_clocks)
  };

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var main = createCommonjsModule(function (module) {
  /*
      Project Name : midi-parser-js
      Project Url  : https://github.com/colxi/midi-parser-js/
      Author       : colxi
      Author URL   : http://www.colxi.info/
      Description  : MidiParser library reads .MID binary files, Base64 encoded MIDI Data,
      or UInt8 Arrays, and outputs as a readable and structured JS object.
  */

  (function(){

      /**
       * CROSSBROWSER & NODEjs POLYFILL for ATOB() -
       * By: https://github.com/MaxArt2501 (modified)
       * @param  {string} string [description]
       * @return {[type]}        [description]
       */
      const _atob = function(string) {
          // base64 character set, plus padding character (=)
          let b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
          // Regular expression to check formal correctness of base64 encoded strings
          let b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
          // remove data type signatures at the begining of the string
          // eg :  "data:audio/mid;base64,"
          string = string.replace( /^.*?base64,/ , '');
          // atob can work with strings with whitespaces, even inside the encoded part,
          // but only \t, \n, \f, \r and ' ', which can be stripped.
          string = String(string).replace(/[\t\n\f\r ]+/g, '');
          if (!b64re.test(string))
              throw new TypeError('Failed to execute _atob() : The string to be decoded is not correctly encoded.');

          // Adding the padding if missing, for semplicity
          string += '=='.slice(2 - (string.length & 3));
          let bitmap, result = '';
          let r1, r2, i = 0;
          for (; i < string.length;) {
              bitmap = b64.indexOf(string.charAt(i++)) << 18 | b64.indexOf(string.charAt(i++)) << 12
                      | (r1 = b64.indexOf(string.charAt(i++))) << 6 | (r2 = b64.indexOf(string.charAt(i++)));

              result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255)
                      : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255)
                      : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
          }
          return result;
      };


      /**
       * [MidiParser description]
       * @type {Object}
       */
      const MidiParser  = {
          // debug (bool), when enabled will log in console unimplemented events
          // warnings and internal handled errors.
          debug: false,

          /**
           * [parse description]
           * @param  {[type]} input     [description]
           * @param  {[type]} _callback [description]
           * @return {[type]}           [description]
           */
          parse: function(input, _callback){
              if(input instanceof Uint8Array) return MidiParser.Uint8(input);
              else if(typeof input === 'string') return MidiParser.Base64(input);
              else if(input instanceof HTMLElement && input.type === 'file') return MidiParser.addListener(input , _callback);
              else throw new Error('MidiParser.parse() : Invalid input provided');
          },

          /**
           * addListener() should be called in order attach a listener to the INPUT HTML element
           * that will provide the binary data automating the conversion, and returning
           * the structured data to the provided callback function.
           */
          addListener: function(_fileElement, _callback){
              if(!File || !FileReader) throw new Error('The File|FileReader APIs are not supported in this browser. Use instead MidiParser.Base64() or MidiParser.Uint8()');

              // validate provided element
              if( _fileElement === undefined ||
                  !(_fileElement instanceof HTMLElement) ||
                  _fileElement.tagName !== 'INPUT' ||
                  _fileElement.type.toLowerCase() !== 'file' 
              ){
                  console.warn('MidiParser.addListener() : Provided element is not a valid FILE INPUT element');
                  return false;
              }
              _callback = _callback || function(){};

              _fileElement.addEventListener('change', function(InputEvt){             // set the 'file selected' event handler
                  if (!InputEvt.target.files.length) return false;                    // return false if no elements where selected
                  console.log('MidiParser.addListener() : File detected in INPUT ELEMENT processing data..');
                  let reader = new FileReader();                                      // prepare the file Reader
                  reader.readAsArrayBuffer(InputEvt.target.files[0]);                 // read the binary data
                  reader.onload =  function(e){
                      _callback( MidiParser.Uint8(new Uint8Array(e.target.result)));  // encode data with Uint8Array and call the parser
                  };
              });
          },

          /**
           * Base64() : convert baset4 string into uint8 array buffer, before performing the
           * parsing subroutine.
           */
          Base64 : function(b64String){
              b64String = String(b64String);

              let raw = _atob(b64String);
              let rawLength = raw.length;
              let t_array = new Uint8Array(new ArrayBuffer(rawLength));

              for(let i=0; i<rawLength; i++) t_array[i] = raw.charCodeAt(i);
              return  MidiParser.Uint8(t_array) ;
          },

          /**
           * parse() : function reads the binary data, interpreting and spliting each chuck
           * and parsing it to a structured Object. When job is finised returns the object
           * or 'false' if any error was generated.
           */
          Uint8: function(FileAsUint8Array){
              let file = {
                  data: null,
                  pointer: 0,
                  movePointer: function(_bytes){                                      // move the pointer negative and positive direction
                      this.pointer += _bytes;
                      return this.pointer;
                  },
                  readInt: function(_bytes){                                          // get integer from next _bytes group (big-endian)
                      _bytes = Math.min(_bytes, this.data.byteLength-this.pointer);
                      if (_bytes < 1) return -1;                                                                      // EOF
                      let value = 0;
                      if(_bytes > 1){
                          for(let i=1; i<= (_bytes-1); i++){
                              value += this.data.getUint8(this.pointer) * Math.pow(256, (_bytes - i));
                              this.pointer++;
                          }
                      }
                      value += this.data.getUint8(this.pointer);
                      this.pointer++;
                      return value;
                  },
                  readStr: function(_bytes){                                          // read as ASCII chars, the followoing _bytes
                      let text = '';
                      for(let char=1; char <= _bytes; char++) text +=  String.fromCharCode(this.readInt(1));
                      return text;
                  },
                  readIntVLV: function(){                                             // read a variable length value
                      let value = 0;
                      if ( this.pointer >= this.data.byteLength ){
                          return -1;                                                  // EOF
                      }else if(this.data.getUint8(this.pointer) < 128){               // ...value in a single byte
                          value = this.readInt(1);
                      }else {                                                          // ...value in multiple bytes
                          let FirstBytes = [];
                          while(this.data.getUint8(this.pointer) >= 128){
                              FirstBytes.push(this.readInt(1) - 128);
                          }
                          let lastByte  = this.readInt(1);
                          for(let dt = 1; dt <= FirstBytes.length; dt++){
                              value += FirstBytes[FirstBytes.length - dt] * Math.pow(128, dt);
                          }
                          value += lastByte;
                      }
                      return value;
                  }
              };

              file.data = new DataView(FileAsUint8Array.buffer, FileAsUint8Array.byteOffset, FileAsUint8Array.byteLength);                                            // 8 bits bytes file data array
              //  ** read FILE HEADER
              if(file.readInt(4) !== 0x4D546864){
                  console.warn('Header validation failed (not MIDI standard or file corrupt.)');
                  return false;                                                       // Header validation failed (not MIDI standard or file corrupt.)
              }
              let headerSize          = file.readInt(4);                              // header size (unused var), getted just for read pointer movement
              let MIDI                = {};                                           // create new midi object
              MIDI.formatType         = file.readInt(2);                              // get MIDI Format Type
              MIDI.tracks             = file.readInt(2);                              // get ammount of track chunks
              MIDI.track              = [];                                           // create array key for track data storing
              let timeDivisionByte1   = file.readInt(1);                              // get Time Division first byte
              let timeDivisionByte2   = file.readInt(1);                              // get Time Division second byte
              if(timeDivisionByte1 >= 128){                                           // discover Time Division mode (fps or tpf)
                  MIDI.timeDivision    = [];
                  MIDI.timeDivision[0] = timeDivisionByte1 - 128;                     // frames per second MODE  (1st byte)
                  MIDI.timeDivision[1] = timeDivisionByte2;                           // ticks in each frame     (2nd byte)
              }else MIDI.timeDivision  = (timeDivisionByte1 * 256) + timeDivisionByte2;// else... ticks per beat MODE  (2 bytes value)

              //  ** read TRACK CHUNK
              for(let t=1; t <= MIDI.tracks; t++){
                  MIDI.track[t-1]     = {event: []};                                  // create new Track entry in Array
                  let headerValidation = file.readInt(4);
                  if ( headerValidation === -1 ) break;                               // EOF
                  if(headerValidation !== 0x4D54726B) return false;                   // Track chunk header validation failed.
                  file.readInt(4);                                                    // move pointer. get chunk size (bytes length)
                  let e               = 0;                                            // init event counter
                  let endOfTrack      = false;                                        // FLAG for track reading secuence breaking
                  // ** read EVENT CHUNK
                  let statusByte;
                  let laststatusByte;
                  while(!endOfTrack){
                      e++;                                                            // increase by 1 event counter
                      MIDI.track[t-1].event[e-1] = {};                                // create new event object, in events array
                      MIDI.track[t-1].event[e-1].deltaTime  = file.readIntVLV();      // get DELTA TIME OF MIDI event (Variable Length Value)
                      statusByte = file.readInt(1);                                   // read EVENT TYPE (STATUS BYTE)
                      if(statusByte === -1) break;                                    // EOF
                      else if(statusByte >= 128) laststatusByte = statusByte;         // NEW STATUS BYTE DETECTED
                      else {                                                           // 'RUNNING STATUS' situation detected
                          statusByte = laststatusByte;                                // apply last loop, Status Byte
                          file.movePointer(-1);                                       // move back the pointer (cause readed byte is not status byte)
                      }


                      //
                      // ** IS META EVENT
                      //
                      if(statusByte === 0xFF){                                        // Meta Event type
                          MIDI.track[t-1].event[e-1].type = 0xFF;                     // assign metaEvent code to array
                          MIDI.track[t-1].event[e-1].metaType =  file.readInt(1);     // assign metaEvent subtype
                          let metaEventLength = file.readIntVLV();                    // get the metaEvent length
                          switch(MIDI.track[t-1].event[e-1].metaType){
                              case 0x2F:                                              // end of track, has no data byte
                              case -1:                                                // EOF
                                  endOfTrack = true;                                  // change FLAG to force track reading loop breaking
                                  break;
                              case 0x01:                                              // Text Event
                              case 0x02:                                              // Copyright Notice
                              case 0x03:
                              case 0x04:                                              // Instrument Name
                              case 0x05:                                              // Lyrics)
                              case 0x07:                                              // Cue point                                         // Sequence/Track Name (documentation: http://www.ta7.de/txt/musik/musi0006.htm)
                              case 0x06:                                              // Marker
                                  MIDI.track[t-1].event[e-1].data = file.readStr(metaEventLength);
                                  break;
                              case 0x21:                                              // MIDI PORT
                              case 0x59:                                              // Key Signature
                              case 0x51:                                              // Set Tempo
                                  MIDI.track[t-1].event[e-1].data = file.readInt(metaEventLength);
                                  break;
                              case 0x54:                                              // SMPTE Offset
                                  MIDI.track[t-1].event[e-1].data    = [];
                                  MIDI.track[t-1].event[e-1].data[0] = file.readInt(1);
                                  MIDI.track[t-1].event[e-1].data[1] = file.readInt(1);
                                  MIDI.track[t-1].event[e-1].data[2] = file.readInt(1);
                                  MIDI.track[t-1].event[e-1].data[3] = file.readInt(1);
                                  MIDI.track[t-1].event[e-1].data[4] = file.readInt(1);
                                  break;
                              case 0x58:                                              // Time Signature
                                  MIDI.track[t-1].event[e-1].data    = [];
                                  MIDI.track[t-1].event[e-1].data[0] = file.readInt(1);
                                  MIDI.track[t-1].event[e-1].data[1] = file.readInt(1);
                                  MIDI.track[t-1].event[e-1].data[2] = file.readInt(1);
                                  MIDI.track[t-1].event[e-1].data[3] = file.readInt(1);
                                  break;
                              default :
                                  // if user provided a custom interpreter, call it
                                  // and assign to event the returned data
                                  if( this.customInterpreter !== null){
                                      MIDI.track[t-1].event[e-1].data = this.customInterpreter( MIDI.track[t-1].event[e-1].metaType, file, metaEventLength);
                                  }
                                  // if no customInterpretr is provided, or returned
                                  // false (=apply default), perform default action
                                  if(this.customInterpreter === null || MIDI.track[t-1].event[e-1].data === false){
                                      file.readInt(metaEventLength);
                                      MIDI.track[t-1].event[e-1].data = file.readInt(metaEventLength);
                                      if (this.debug) console.info('Unimplemented 0xFF meta event! data block readed as Integer');
                                  }
                          }
                      }

                      //
                      // IS REGULAR EVENT
                      //
                      else {                                                           // MIDI Control Events OR System Exclusive Events
                          statusByte = statusByte.toString(16).split('');             // split the status byte HEX representation, to obtain 4 bits values
                          if(!statusByte[1]) statusByte.unshift('0');                 // force 2 digits
                          MIDI.track[t-1].event[e-1].type = parseInt(statusByte[0], 16);// first byte is EVENT TYPE ID
                          MIDI.track[t-1].event[e-1].channel = parseInt(statusByte[1], 16);// second byte is channel
                          switch(MIDI.track[t-1].event[e-1].type){
                              case 0xF:{                                              // System Exclusive Events

                                  // if user provided a custom interpreter, call it
                                  // and assign to event the returned data
                                  if( this.customInterpreter !== null){
                                      MIDI.track[t-1].event[e-1].data = this.customInterpreter( MIDI.track[t-1].event[e-1].type, file , false);
                                  }

                                  // if no customInterpretr is provided, or returned
                                  // false (=apply default), perform default action
                                  if(this.customInterpreter === null || MIDI.track[t-1].event[e-1].data === false){
                                      let event_length = file.readIntVLV();
                                      MIDI.track[t-1].event[e-1].data = file.readInt(event_length);
                                      if (this.debug) console.info('Unimplemented 0xF exclusive events! data block readed as Integer');
                                  }
                                  break;
                              }
                              case 0xA:                                               // Note Aftertouch
                              case 0xB:                                               // Controller
                              case 0xE:                                               // Pitch Bend Event
                              case 0x8:                                               // Note off
                              case 0x9:                                               // Note On
                                  MIDI.track[t-1].event[e-1].data = [];
                                  MIDI.track[t-1].event[e-1].data[0] = file.readInt(1);
                                  MIDI.track[t-1].event[e-1].data[1] = file.readInt(1);
                                  break;
                              case 0xC:                                               // Program Change
                              case 0xD:                                               // Channel Aftertouch
                                  MIDI.track[t-1].event[e-1].data = file.readInt(1);
                                  break;
                              case -1:                                                // EOF
                                  endOfTrack = true;                                  // change FLAG to force track reading loop breaking
                                  break;
                              default:
                                  // if user provided a custom interpreter, call it
                                  // and assign to event the returned data
                                  if( this.customInterpreter !== null){
                                      MIDI.track[t-1].event[e-1].data = this.customInterpreter( MIDI.track[t-1].event[e-1].metaType, file , false);
                                  }

                                  // if no customInterpretr is provided, or returned
                                  // false (=apply default), perform default action
                                  if(this.customInterpreter === null || MIDI.track[t-1].event[e-1].data === false){
                                      console.log('Unknown EVENT detected... reading cancelled!');
                                      return false;
                                  }
                          }
                      }
                  }
              }
              return MIDI;
          },

          /**
           * custom function to handle unimplemented, or custom midi messages.
           * If message is a meta-event, the value of metaEventLength will be >0.
           * Function must return the value to store, and pointer of dataView needs
           * to be manually increased
           * If you want default action to be performed, return false
           */
          customInterpreter : null // function( e_type , arrayByffer, metaEventLength){ return e_data_int }
      };


      // if running in NODE export module
      module.exports = MidiParser;


      
  })();
  });

  // import midi parser (will create a reference in the global scope)

  // identify the global scope
  let _global = typeof window === 'object' && window.self === window && window ||
              typeof self === 'object' && self.self === self && self ||
              typeof global === 'object' && global.global === global && global;

  // retrieve a copy of the MidiParser reference and store it
  let _MidiParser = _global.MidiParser;

  // delete the global scope reference
  delete _global.MidiParser;

  let midiAccess;

  // ------------------- WebMidi initialization ----------------------

  // Initializes WebMIDI API and saves midiAccess object for later
  // use of frMIDI library.
  // MidiAccess object is also returned in the case it's needed by
  // the user.
  // 
  // A custom_navigator parameter is used to allow testing without
  // a defined window object.

  const initialize = 
    (sysex = false, custom_navigator = window.navigator) =>
  		custom_navigator
  			.requestMIDIAccess ({ sysex: sysex })
  			.then (m => midiAccess = m);

  // Writes every input and output port name to the console for reference
  // when instatiating input and output objects.
  //
  // Parameter logfn is used to pass a different logger for testing
  // purposes.

  const inputsAsText = () =>
  	map$2 (
  		i => i [1].name + '  -in->', 
  		[...midiAccess.inputs.entries ()]);

  const outputsAsText = () =>
  	map$2 (
  		o => '-out->  ' + o [1].name, 
  		[...midiAccess.outputs.entries ()]);

  const logPorts = () => {
    forEach (console.log) (inputsAsText ());
    forEach (console.log) (outputsAsText ());
  };

  // ------------------------- MIDI Input ----------------------------

  // Return an observable created from WebMIDI input onmidimessage event.
  // Name is matched against available input ports and first one that
  // contains it is used.

  const inputFrom = (i) => {
    let emitter = new Subject ();
    if (i) {
      let input = merge (
        fromEvent (i, 'midimessage'),
        emitter );
      input.name = i.name;
      input.id = i.id;
      input.manufacturer = i.manufacturer;
      input.version = i.version;
      input.next = bind$1 (emitter.next, emitter);

      return input
    } else {
      let input = emitter;
      input.name = 'Dummy input';
      input.id = 'DIn';
      input.manufacturer = 'frMIDI';
      input.version = 'dummy0.0';

      return input
    }
  };

  const input = (n = '') => 
    n === 'dummy' ?
      inputFrom ()
      : head$1 (
    	    pipe$1 (
    	    	filter$1 ( ([id, i]) => i.name.includes (n) ),
    	    	map$2 ( ([id, i]) => inputFrom (i) )
    	    ) ([...midiAccess.inputs.entries()]));

  // ------------------------- MIDI Output ---------------------------

  // Send function accepts midi messages as:
  // - byte array
  // - MIDIMessage object
  // - array of byte arrays
  // - array of MIDIMessage objects
  // - observable emitting any of the above

  const send = (sendfn) => (msg) => 
  //  seemsArrayOfMIDIMessagesAsObjects (msg) ?
  //    forEach (m => sendfn (m.data, m.timeStamp)) (msg)
  //    : seemsArrayOfMIDIMessagesAsArrays (msg) ?
  //      forEach (m => sendfn (m)) (msg)
  //      : seemsMIDIMessageAsObject (msg) ?
  //        sendfn (msg.data, msg.timeStamp)
  //        : seemsMIDIMessageAsArray (msg) ?
  //          sendfn (msg)
  //          : is (rx.Observable) (msg) ?
  //            msg.subscribe (send (sendfn))
  //            : null
    seemsArrayOfMIDIMessages (msg) ?
      forEach (m => sendfn (m.data, m.timeStamp)) (msg)
      : seemsMIDIMessage (msg) ?
        sendfn (msg.data, msg.timeStamp)
        : is$1 (Observable) (msg) ?
          msg.subscribe (send (sendfn))
          : null;

  // Sends first output that matches indicated name as argument and
  // returns send function instantiated with selected output.
  // Some properties are added for inspection purposes.

  const outputFrom = (o) => {
    let receiver = new Subject ();
    if (o) {
      let sendfn = (d, t) => { o.send (d, t); receiver.next (msg (d, t)); };
      let output = send (sendfn);
      Object.defineProperty (output, 'name', { value: o.name });
      output.id = o.id;
      output.manufacturer = o.manufacturer;
      output.version = o.version;
      output.subscribe = bind$1 (receiver.subscribe, receiver);

      return output
    } else {
      let sendfn = (d, t) => receiver.next (msg (d, t));
      let output = send (sendfn);
      Object.defineProperty (output, 'name', { value: 'Dummy output' });
      output.id = 'DOut';
      output.manufacturer = 'frMIDI';
      output.version = 'dummy0.0';
      output.subscribe = bind$1 (receiver.subscribe, receiver);

      return output
    }
  };

  const output = (n = '') =>
    n === 'dummy' ?
      outputFrom ()
      : head$1 (
  		    pipe$1 (
  		    	map$2 ( ([k, v]) => v ),
  		    	filter$1 ( ({ name }) => name.includes (n) ),
  		    	map$2 ( v => { v.open(); return v; } ),
  		    	map$2 ( v => outputFrom (v) )
  		    ) ([ ...midiAccess.outputs.entries () ]));

  // ---------------------- MIDI File loading ------------------------

  // Opens a file selection dialog to load a MIDI file and then parse
  // it using midi-parser-js library. Converts messages to be
  // compatible with rest of library.
  //
  // Returns a promise that returns parsed MIDI file as object.

  const loadMidiFile =	() => {
    let input_file_element = document.createElement ('input');
    let type = document.createAttribute ('type');
    type.value = 'file';
    input_file_element.setAttributeNode (type);

  	let promise = 
  		new Promise((s, r) => 
  			_MidiParser.parse(input_file_element, o => { 
  				// Convert data from each event to a format compatible
  				// with rest of library
  				for (let t of o.track) {
  					for (let e of t.event) {
  						e.timeStamp = 0;
  						if (e.type > 7 && e.type < 14) {
  							if (e.data instanceof Array) {
  								e.data = [(e.type << 4) + e.channel, ...e.data];
  							} else {
  								e.data = [(e.type << 4) + e.channel, e.data];
  							}
  							e.type = 'midimessage';
  						} else if (e.type === 255) {
  							e.type = 'metaevent';
                e.data = [ e.data ];
  						}
  					}
  				}

  				return s (o)
  			}));

  	input_file_element.click();

  	return promise
  };

  // ------------------------ MIDI Clock -----------------------------

  // TODO: Make this part better

  const createTimer = (resolution = 25, look_ahead = 150) =>
    timer (0, resolution).pipe (
      map$3(v => [performance.now (), look_ahead])
    );

  const MIDIClock = curry ((time_division, bpm) => {
    let timeDivisionSubject = new BehaviorSubject (time_division);
    let bpmSubject = new BehaviorSubject (bpm);
    
    let op = pipe$2(
      withLatestFrom (
        timeDivisionSubject,
        bpmSubject
      ),
      scan$1 ((events, [[now, look_ahead], time_division, bpm]) => {
        let last_tick_time = prop$1 ('timeStamp', last$1 (events)) || now;
    
        return lookAheadClock (
          time_division, 
          bpm, 
          last_tick_time,
          now,
          look_ahead)
      }, [[], null])
    );

    op.timeDivision = (v) => timeDivisionSubject.next (v);
    op.bpm = (v) => bpmSubject.next (v);

    return op
  });

  const MIDIPlayer = (midifile) => {
    let player = MIDIFilePlayer (midifile);

    return pipe$2 (
      scan$1 (([events, tick], midi_clocks) => {
        return player (tick, midi_clocks)
      }, [null, 0]),
      map$3(([events, tick]) => events)
    )
  };

  const version$1 = '1.0.39';

  //// --------------------- Other utilities -------------------------

  let QNPM2BPM = (qnpm) => 60 * 1000000 / qnpm;

  let midiToHzs = (n, tuning = 440) => 
  	((tuning / 32) * (Math.pow(((n - 9) / 12), 2)));

  // -------------------- Main element definition --------------------------

  define ('e-session', SessionView);

  exports.MIDIClock = MIDIClock;
  exports.MIDIFilePlayer = MIDIFilePlayer$1;
  exports.MIDIPlayer = MIDIPlayer;
  exports.MidiParser = _MidiParser;
  exports.QNPM2BPM = QNPM2BPM;
  exports.addNotes = addNotes;
  exports.as = as;
  exports.asNoteOff = asNoteOff;
  exports.asNoteOn = asNoteOn;
  exports.autocompletionSpan = autocompletionSpan;
  exports.byNotesAndWeight = byNotesAndWeight;
  exports.byteEq = byteEq;
  exports.byteEqBy = byteEqBy;
  exports.caretSpan = caretSpan;
  exports.cc = cc;
  exports.channel = channel;
  exports.channelByKeyRange = channelByKeyRange;
  exports.cont = cont;
  exports.control = control;
  exports.controlEq = controlEq;
  exports.cp = cp;
  exports.createLoop = createLoop;
  exports.createMIDIFile = createMIDIFile;
  exports.createRenderer = createRenderer;
  exports.createTimer = createTimer;
  exports.dataEq = dataEq;
  exports.dataEqBy = dataEqBy;
  exports.deltaTime = deltaTime;
  exports.filterTracks = filterTracks;
  exports.from = from$1;
  exports.getByte = getByte;
  exports.hasNote = hasNote;
  exports.hasPressure = hasPressure;
  exports.hasVelocity = hasVelocity;
  exports.htmlEntities = htmlEntities;
  exports.initialize = initialize;
  exports.input = input;
  exports.inputFrom = inputFrom;
  exports.inputsAsText = inputsAsText;
  exports.isActiveNote = isActiveNote;
  exports.isActiveSensing = isActiveSensing;
  exports.isAllNotesOff = isAllNotesOff;
  exports.isAllSoundOff = isAllSoundOff;
  exports.isChannelMessage = isChannelMessage;
  exports.isChannelMode = isChannelMode;
  exports.isChannelModeMessage = isChannelModeMessage;
  exports.isChannelPressure = isChannelPressure;
  exports.isChannelVoice = isChannelVoice;
  exports.isChannelVoiceMessageOfType = isChannelVoiceMessageOfType;
  exports.isContinue = isContinue;
  exports.isControlChange = isControlChange;
  exports.isEndOfExclusive = isEndOfExclusive;
  exports.isLocalControlOff = isLocalControlOff;
  exports.isLocalControlOn = isLocalControlOn;
  exports.isLowerZone = isLowerZone;
  exports.isMIDIClock = isMIDIClock;
  exports.isMIDITimeCodeQuarterFrame = isMIDITimeCodeQuarterFrame;
  exports.isMonoModeOn = isMonoModeOn;
  exports.isNRPN = isNRPN;
  exports.isNote = isNote;
  exports.isNoteOff = isNoteOff;
  exports.isNoteOn = isNoteOn;
  exports.isOmniModeOff = isOmniModeOff;
  exports.isOmniModeOn = isOmniModeOn;
  exports.isOnChannel = isOnChannel;
  exports.isOnChannels = isOnChannels;
  exports.isOnMasterChannel = isOnMasterChannel;
  exports.isOnZone = isOnZone;
  exports.isPitchBend = isPitchBend;
  exports.isPolyModeOn = isPolyModeOn;
  exports.isPolyPressure = isPolyPressure;
  exports.isProgramChange = isProgramChange;
  exports.isRPN = isRPN;
  exports.isReset = isReset;
  exports.isResetAll = isResetAll;
  exports.isSongPositionPointer = isSongPositionPointer;
  exports.isSongSelect = isSongSelect;
  exports.isStart = isStart;
  exports.isStop = isStop;
  exports.isSystemExclusive = isSystemExclusive;
  exports.isTempoChange = isTempoChange;
  exports.isTimbreChange = isTimbreChange;
  exports.isTuneRequest = isTuneRequest;
  exports.isUpperZone = isUpperZone;
  exports.leastNotesChannel = leastNotesChannel;
  exports.lensP = lensP;
  exports.lineDiv = lineDiv;
  exports.loadMidiFile = loadMidiFile;
  exports.logPorts = logPorts;
  exports.lookAheadClock = lookAheadClock$1;
  exports.mc = mc;
  exports.mergeTracks = mergeTracks;
  exports.metaTypeEq = metaTypeEq;
  exports.midiToHzs = midiToHzs;
  exports.mpeNote = mpeNote;
  exports.mpeZone = mpeZone;
  exports.msg = msg;
  exports.note = note;
  exports.noteEq = noteEq;
  exports.notesPerChannel = notesPerChannel;
  exports.npmImport = npmImport;
  exports.nrpn = nrpn;
  exports.off = off;
  exports.on = on;
  exports.output = output;
  exports.outputFrom = outputFrom;
  exports.outputsAsText = outputsAsText;
  exports.panic = panic;
  exports.pb = pb;
  exports.pc = pc;
  exports.pitchBend = pitchBend;
  exports.pitchBendEq = pitchBendEq;
  exports.pp = pp$a;
  exports.pressure = pressure;
  exports.pressureEq = pressureEq;
  exports.processChannelPressureMessage = processChannelPressureMessage;
  exports.processMessage = processMessage;
  exports.processNoteOffMessage = processNoteOffMessage;
  exports.processNoteOnMessage = processNoteOnMessage;
  exports.processPitchBendMessage = processPitchBendMessage;
  exports.processTimbreMessage = processTimbreMessage;
  exports.program = program;
  exports.programEq = programEq;
  exports.promptSpan = promptSpan;
  exports.renderCaretLine = renderCaretLine;
  exports.renderLine = renderLine;
  exports.renderLines = renderLines;
  exports.rpn = rpn;
  exports.rst = rst;
  exports.seemsActiveNote = seemsActiveNote;
  exports.seemsArrayOfMIDIMessages = seemsArrayOfMIDIMessages;
  exports.seemsMIDIFile = seemsMIDIFile;
  exports.seemsMIDILoop = seemsMIDILoop;
  exports.seemsMIDIMessage = seemsMIDIMessage;
  exports.seemsMIDIMessageAsArray = seemsMIDIMessageAsArray;
  exports.seemsMIDIMetaEvent = seemsMIDIMetaEvent;
  exports.seemsMIDIMetaEventArray = seemsMIDIMetaEventArray;
  exports.seemsMIDIMetaEventObject = seemsMIDIMetaEventObject;
  exports.send = send;
  exports.setByte = setByte;
  exports.showHelpDialog = showHelpDialog;
  exports.sortEvents = sortEvents;
  exports.spp = spp;
  exports.ss = ss;
  exports.start = start;
  exports.stop = stop;
  exports.syx = syx;
  exports.tc = tc;
  exports.timeStamp = timeStamp;
  exports.toMPE = toMPE;
  exports.tun = tun;
  exports.value = value;
  exports.valueEq = valueEq;
  exports.velocity = velocity;
  exports.velocityEq = velocityEq;
  exports.version = version$1;
  exports.withAbsoluteDeltaTimes = withAbsoluteDeltaTimes;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bundle.js.map
