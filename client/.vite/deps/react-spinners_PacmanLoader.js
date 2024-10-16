import {
  require_react
} from "./chunk-MOERMBVA.js";
import {
  __commonJS
} from "./chunk-BQWMX7FD.js";

// node_modules/react-spinners/helpers/unitConverter.js
var require_unitConverter = __commonJS({
  "node_modules/react-spinners/helpers/unitConverter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.cssValue = exports.parseLengthAndUnit = void 0;
    var cssUnit = {
      cm: true,
      mm: true,
      in: true,
      px: true,
      pt: true,
      pc: true,
      em: true,
      ex: true,
      ch: true,
      rem: true,
      vw: true,
      vh: true,
      vmin: true,
      vmax: true,
      "%": true
    };
    function parseLengthAndUnit(size) {
      if (typeof size === "number") {
        return {
          value: size,
          unit: "px"
        };
      }
      var value;
      var valueString = (size.match(/^[0-9.]*/) || "").toString();
      if (valueString.includes(".")) {
        value = parseFloat(valueString);
      } else {
        value = parseInt(valueString, 10);
      }
      var unit = (size.match(/[^0-9]*$/) || "").toString();
      if (cssUnit[unit]) {
        return {
          value,
          unit
        };
      }
      console.warn("React Spinners: ".concat(size, " is not a valid css value. Defaulting to ").concat(value, "px."));
      return {
        value,
        unit: "px"
      };
    }
    exports.parseLengthAndUnit = parseLengthAndUnit;
    function cssValue(value) {
      var lengthWithunit = parseLengthAndUnit(value);
      return "".concat(lengthWithunit.value).concat(lengthWithunit.unit);
    }
    exports.cssValue = cssValue;
  }
});

// node_modules/react-spinners/helpers/animation.js
var require_animation = __commonJS({
  "node_modules/react-spinners/helpers/animation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createAnimation = void 0;
    var createAnimation = function(loaderName, frames, suffix) {
      var animationName = "react-spinners-".concat(loaderName, "-").concat(suffix);
      if (typeof window == "undefined" || !window.document) {
        return animationName;
      }
      var styleEl = document.createElement("style");
      document.head.appendChild(styleEl);
      var styleSheet = styleEl.sheet;
      var keyFrames = "\n    @keyframes ".concat(animationName, " {\n      ").concat(frames, "\n    }\n  ");
      if (styleSheet) {
        styleSheet.insertRule(keyFrames, 0);
      }
      return animationName;
    };
    exports.createAnimation = createAnimation;
  }
});

// node_modules/react-spinners/PacmanLoader.js
var require_PacmanLoader = __commonJS({
  "node_modules/react-spinners/PacmanLoader.js"(exports) {
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __rest = exports && exports.__rest || function(s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var React = __importStar(require_react());
    var unitConverter_1 = require_unitConverter();
    var animation_1 = require_animation();
    var pacman = [
      (0, animation_1.createAnimation)("PacmanLoader", "0% {transform: rotate(0deg)} 50% {transform: rotate(-44deg)}", "pacman-1"),
      (0, animation_1.createAnimation)("PacmanLoader", "0% {transform: rotate(0deg)} 50% {transform: rotate(44deg)}", "pacman-2")
    ];
    function PacmanLoader(_a) {
      var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 25 : _f, _g = _a.margin, margin = _g === void 0 ? 2 : _g, additionalprops = __rest(_a, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]);
      var _h = (0, unitConverter_1.parseLengthAndUnit)(size), value = _h.value, unit = _h.unit;
      var wrapper = __assign({ display: "inherit", position: "relative", fontSize: 0, height: "".concat(value * 2).concat(unit), width: "".concat(value * 2).concat(unit) }, cssOverride);
      var ball = (0, animation_1.createAnimation)("PacmanLoader", "75% {opacity: 0.7}\n    100% {transform: translate(".concat("".concat(-4 * value).concat(unit), ", ").concat("".concat(-value / 4).concat(unit), ")}"), "ball");
      var ballStyle = function(i) {
        return {
          width: "".concat(value / 3).concat(unit),
          height: "".concat(value / 3).concat(unit),
          backgroundColor: color,
          margin: (0, unitConverter_1.cssValue)(margin),
          borderRadius: "100%",
          transform: "translate(0, ".concat("".concat(-value / 4).concat(unit), ")"),
          position: "absolute",
          top: "".concat(value).concat(unit),
          left: "".concat(value * 4).concat(unit),
          animation: "".concat(ball, " ").concat(1 / speedMultiplier, "s ").concat(i * 0.25, "s infinite linear"),
          animationFillMode: "both"
        };
      };
      var s1 = "".concat((0, unitConverter_1.cssValue)(size), " solid transparent");
      var s2 = "".concat((0, unitConverter_1.cssValue)(size), " solid ").concat(color);
      var pacmanStyle = function(i) {
        return {
          width: 0,
          height: 0,
          borderRight: s1,
          borderTop: i === 0 ? s1 : s2,
          borderLeft: s2,
          borderBottom: i === 0 ? s2 : s1,
          borderRadius: (0, unitConverter_1.cssValue)(size),
          position: "absolute",
          animation: "".concat(pacman[i], " ").concat(0.8 / speedMultiplier, "s infinite ease-in-out"),
          animationFillMode: "both"
        };
      };
      var pac = pacmanStyle(0);
      var man = pacmanStyle(1);
      if (!loading) {
        return null;
      }
      return React.createElement(
        "span",
        __assign({ style: wrapper }, additionalprops),
        React.createElement("span", { style: pac }),
        React.createElement("span", { style: man }),
        React.createElement("span", { style: ballStyle(2) }),
        React.createElement("span", { style: ballStyle(3) }),
        React.createElement("span", { style: ballStyle(4) }),
        React.createElement("span", { style: ballStyle(5) })
      );
    }
    exports.default = PacmanLoader;
  }
});
export default require_PacmanLoader();
//# sourceMappingURL=react-spinners_PacmanLoader.js.map
