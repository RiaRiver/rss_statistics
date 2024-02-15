var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
class Element {
  /**
   * Constructor for creating an Element instance.
   *
   * @param {string} tag - The tag of the element to create
   * @param {string} textContent - The text content to be added to the element
   * @param {object} props - The properties to be added to the element
   * @return {Element} An Element instance
   */
  constructor(tag, textContent, props) {
    this.create(tag, textContent, props);
  }
  /**
   * Creates an element with the given tag, text content, and properties.
   *
   * @param {string} tag - The tag of the element to create
   * @param {string} textContent - The text content to be added to the element
   * @param {object} props - The properties to be added to the element
   */
  create(tag, textContent, props) {
    const element = document.createElement(tag);
    Object.keys(props).forEach((key) => {
      element.setAttribute(key, props[key]);
    });
    if (textContent)
      element.textContent = textContent;
    this.element = element;
  }
  /**
   * Retrieve the DOM element.
   *
   * @return {HTMLElement} The DOM element to be retrieved.
   */
  getElement() {
    return this.element;
  }
  /**
   * Set the content of the element.
   *
   * @param {string} content - The content to set
   */
  setContent(content) {
    this.element.textContent = content;
  }
  /**
   * Set listeners for the given events and their corresponding handlers.
   *
   * @param {array} listeners - An array of objects containing event and handler properties.
   */
  setListeners(listeners) {
    listeners.forEach((listener) => {
      this.element.addEventListener(listener.event, listener.handler);
    });
  }
  /**
   * Mounts components to the element using the specified method.
   *
   * @param {array} components - Array of components to mount
   * @param {string} [method='append'] - Method to use for mounting
   */
  mountComponents(components, method = "append") {
    this.element[method](...components.map((component) => component.getElement()));
  }
  hide() {
    this.element.setAttribute("hidden", true);
  }
  view() {
    this.element.removeAttribute("hidden");
  }
  toggleView() {
    if (this.element.hasAttribute("hidden")) {
      this.view();
    } else {
      this.hide();
    }
  }
  setProperties(props) {
    Object.keys(props).forEach((key) => {
      this.element.setAttribute(key, props[key]);
    });
  }
  removeProperties(props) {
    props.forEach((key) => {
      this.element.removeAttribute(key);
    });
  }
}
class Store {
  constructor() {
    __publicField(this, "state", {});
  }
  /**
   * Updates the state with the provided state object.
   *
   * @param {Object} state - The state object to merge with the current state
   */
  updateState(state) {
    this.state = { ...this.state, ...state };
  }
  /**
   * Set the value of a specific state property.
   *
   * @param {string} name - The name of the state property
   * @param {any} value - The value to set for the state property
   */
  setState(name, value) {
    this.state[name] = value;
  }
  /**
   * Sets the state of a collection at a given index.
   *
   * @param {string} name - The name of the collection state property
   * @param {number} index - the index of the element to be updated
   * @param {any} value - the new value to be set at the specified index
   */
  setStateOfCollection(name, index, value) {
    if (!this.state[name])
      this.state[name] = {};
    this.state[name][index] = value;
  }
  /**
   * Get the state value based on the provided name,
   * or return the entire state if name is undefined.
   *
   * @param {string} name - The name of the state value to retrieve
   * @return {any} The state value corresponding to the provided name,
   * or the entire state if name is undefined
   */
  getState(name) {
    if (name !== void 0)
      return this.state[name];
    return this.state;
  }
}
const store = new Store();
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var canvasjs_min = { exports: {} };
(function(module) {
  (function() {
    function pa(h, l) {
      h.prototype = eb(l.prototype);
      h.prototype.constructor = h;
      h.base = l.prototype;
    }
    function eb(h) {
      function l() {
      }
      l.prototype = h;
      return new l();
    }
    function Ya(h, l, G) {
      "millisecond" === G ? h.setMilliseconds(h.getMilliseconds() + 1 * l) : "second" === G ? h.setSeconds(h.getSeconds() + 1 * l) : "minute" === G ? h.setMinutes(h.getMinutes() + 1 * l) : "hour" === G ? h.setHours(h.getHours() + 1 * l) : "day" === G ? h.setDate(h.getDate() + 1 * l) : "week" === G ? h.setDate(h.getDate() + 7 * l) : "month" === G ? h.setMonth(h.getMonth() + 1 * l) : "year" === G && h.setFullYear(h.getFullYear() + 1 * l);
      return h;
    }
    function da(h, l) {
      var G = false;
      0 > h && (G = true, h *= -1);
      h = "" + h;
      for (l = l ? l : 1; h.length < l; )
        h = "0" + h;
      return G ? "-" + h : h;
    }
    function Ia(h) {
      if (!h)
        return h;
      h = h.replace(/^\s\s*/, "");
      for (var l = /\s/, G = h.length; l.test(h.charAt(--G)); )
        ;
      return h.slice(0, G + 1);
    }
    function Aa(h) {
      h.roundRect = function(h2, G, r2, u2, ra, C, E2, z2) {
        E2 && (this.fillStyle = E2);
        z2 && (this.strokeStyle = z2);
        "undefined" === typeof ra && (ra = 5);
        this.lineWidth = C;
        this.beginPath();
        this.moveTo(h2 + ra, G);
        this.lineTo(h2 + r2 - ra, G);
        this.quadraticCurveTo(h2 + r2, G, h2 + r2, G + ra);
        this.lineTo(h2 + r2, G + u2 - ra);
        this.quadraticCurveTo(h2 + r2, G + u2, h2 + r2 - ra, G + u2);
        this.lineTo(h2 + ra, G + u2);
        this.quadraticCurveTo(h2, G + u2, h2, G + u2 - ra);
        this.lineTo(h2, G + ra);
        this.quadraticCurveTo(h2, G, h2 + ra, G);
        this.closePath();
        E2 && this.fill();
        z2 && 0 < C && this.stroke();
      };
    }
    function Sa(h, l) {
      return h - l;
    }
    function Z(h) {
      var l = ((h & 16711680) >> 16).toString(16), G = ((h & 65280) >> 8).toString(16);
      h = ((h & 255) >> 0).toString(16);
      l = 2 > l.length ? "0" + l : l;
      G = 2 > G.length ? "0" + G : G;
      h = 2 > h.length ? "0" + h : h;
      return "#" + l + G + h;
    }
    function fb(h, l) {
      var G = this.length >>> 0, r2 = Number(l) || 0, r2 = 0 > r2 ? Math.ceil(r2) : Math.floor(r2);
      for (0 > r2 && (r2 += G); r2 < G; r2++)
        if (r2 in this && this[r2] === h)
          return r2;
      return -1;
    }
    function r(h) {
      return null === h || "undefined" === typeof h;
    }
    function Fa(h) {
      h.indexOf || (h.indexOf = fb);
      return h;
    }
    function gb(h) {
      if (wa.fSDec)
        h[ja("`eeDwdouMhrudods")](ja("e`u`@ohl`uhnoHuds`uhnoDoe"), function() {
          wa._fTWm && wa._fTWm(h);
        });
    }
    function Za(h, l, G) {
      G = G || "normal";
      var r2 = h + "_" + l + "_" + G, u2 = $a[r2];
      if (isNaN(u2)) {
        try {
          if (!sa) {
            var ra = document.body;
            sa = document.createElement("span");
            sa.innerHTML = "";
            var C = document.createTextNode("Mpgyi");
            sa.appendChild(C);
            ra.appendChild(sa);
          }
          sa.style.display = "";
          X(sa, { position: "absolute", left: "0px", top: "-20000px", padding: "0px", margin: "0px", border: "none", whiteSpace: "pre", lineHeight: "normal", fontFamily: h, fontSize: l + "px", fontWeight: G });
          u2 = Math.round(sa.offsetHeight);
          sa.style.display = "none";
        } catch (E2) {
          u2 = Math.ceil(1.1 * l);
        }
        u2 = Math.max(u2, l);
        $a[r2] = u2;
      }
      return u2;
    }
    function K(h, l) {
      var G = [];
      if (G = { solid: [], shortDash: [3, 1], shortDot: [1, 1], shortDashDot: [3, 1, 1, 1], shortDashDotDot: [3, 1, 1, 1, 1, 1], dot: [1, 2], dash: [4, 2], dashDot: [
        4,
        2,
        1,
        2
      ], longDash: [8, 2], longDashDot: [8, 2, 1, 2], longDashDotDot: [8, 2, 1, 2, 1, 2] }[h || "solid"])
        for (var r2 = 0; r2 < G.length; r2++)
          G[r2] *= l;
      else
        G = [];
      return G;
    }
    function R(h, l, G, u2, ia) {
      u2 = u2 || [];
      ia = r(ia) ? hb ? { passive: false, capture: false } : false : ia;
      u2.push([h, l, G, ia]);
      return h.addEventListener ? (h.addEventListener(l, G, ia), G) : h.attachEvent ? (u2 = function(l2) {
        l2 = l2 || window.event;
        l2.preventDefault = l2.preventDefault || function() {
          l2.returnValue = false;
        };
        l2.stopPropagation = l2.stopPropagation || function() {
          l2.cancelBubble = true;
        };
        G.call(h, l2);
      }, h.attachEvent(
        "on" + l,
        u2
      ), u2) : false;
    }
    function ib(h) {
      if (h._menuButton)
        h.exportEnabled ? (X(h._menuButton, { backgroundColor: h.toolbar.itemBackgroundColor, color: h.toolbar.fontColor }), Na(h._menuButton), ta(h, h._menuButton, "menu")) : xa(h._menuButton);
      else if (h.exportEnabled && u) {
        var l = false;
        h._menuButton = document.createElement("button");
        ta(h, h._menuButton, "menu");
        h._toolBar.appendChild(h._menuButton);
        R(h._menuButton, "touchstart", function(h2) {
          l = true;
        }, h.allDOMEventHandlers);
        R(h._menuButton, "click", function() {
          "none" !== h._dropdownMenu.style.display || h._dropDownCloseTime && 500 >= (/* @__PURE__ */ new Date()).getTime() - h._dropDownCloseTime.getTime() || (h._dropdownMenu.style.display = "block", h._menuButton.blur(), h._dropdownMenu.focus());
        }, h.allDOMEventHandlers, true);
        R(h._menuButton, "mousemove", function() {
          l || (X(h._menuButton, { backgroundColor: h.toolbar.itemBackgroundColorOnHover, color: h.toolbar.fontColorOnHover }), 0 >= navigator.userAgent.search("MSIE") && X(h._menuButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }));
        }, h.allDOMEventHandlers, true);
        R(
          h._menuButton,
          "mouseout",
          function() {
            l || (X(h._menuButton, { backgroundColor: h.toolbar.itemBackgroundColor, color: h.toolbar.fontColor }), 0 >= navigator.userAgent.search("MSIE") && X(h._menuButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
          },
          h.allDOMEventHandlers,
          true
        );
      }
      if (h.exportEnabled && h._dropdownMenu) {
        X(h._dropdownMenu, { backgroundColor: h.toolbar.itemBackgroundColor, color: h.toolbar.fontColor });
        for (var G = h._dropdownMenu.childNodes, r2 = [h._cultureInfo.printText, h._cultureInfo.saveJPGText, h._cultureInfo.savePNGText], ia = 0; ia < G.length; ia++)
          X(G[ia], { backgroundColor: h.toolbar.itemBackgroundColor, color: h.toolbar.fontColor }), G[ia].innerHTML = r2[ia];
      } else
        !h._dropdownMenu && (h.exportEnabled && u) && (l = false, h._dropdownMenu = document.createElement("div"), h._dropdownMenu.setAttribute("tabindex", -1), G = -1 !== h.theme.indexOf("dark") ? "black" : "#888888", X(h._dropdownMenu, {
          position: "absolute",
          zIndex: 1,
          userSelect: "none",
          MozUserSeelct: "none",
          WebkitUserSelect: "none",
          msUserSelect: "none",
          cursor: "pointer",
          right: "0px",
          top: "25px",
          minWidth: "120px",
          outline: 0,
          fontSize: "14px",
          fontFamily: "Arial, Helvetica, sans-serif",
          padding: "5px 0px 5px 0px",
          textAlign: "left",
          lineHeight: "10px",
          backgroundColor: h.toolbar.itemBackgroundColor,
          boxShadow: "2px 2px 10px" + G
        }), h._dropdownMenu.style.display = "none", h._toolBar.appendChild(h._dropdownMenu), R(h._dropdownMenu, "blur", function() {
          xa(h._dropdownMenu);
          h._dropDownCloseTime = /* @__PURE__ */ new Date();
        }, h.allDOMEventHandlers, true), G = document.createElement("div"), X(G, { padding: "12px 8px 12px 8px" }), G.innerHTML = h._cultureInfo.printText, G.style.backgroundColor = h.toolbar.itemBackgroundColor, G.style.color = h.toolbar.fontColor, h._dropdownMenu.appendChild(G), R(G, "touchstart", function(h2) {
          l = true;
        }, h.allDOMEventHandlers), R(G, "mousemove", function() {
          l || (this.style.backgroundColor = h.toolbar.itemBackgroundColorOnHover, this.style.color = h.toolbar.fontColorOnHover);
        }, h.allDOMEventHandlers, true), R(G, "mouseout", function() {
          l || (this.style.backgroundColor = h.toolbar.itemBackgroundColor, this.style.color = h.toolbar.fontColor);
        }, h.allDOMEventHandlers, true), R(G, "click", function() {
          h.print();
          xa(h._dropdownMenu);
        }, h.allDOMEventHandlers, true), G = document.createElement("div"), X(G, { padding: "12px 8px 12px 8px" }), G.innerHTML = h._cultureInfo.saveJPGText, G.style.backgroundColor = h.toolbar.itemBackgroundColor, G.style.color = h.toolbar.fontColor, h._dropdownMenu.appendChild(G), R(G, "touchstart", function(h2) {
          l = true;
        }, h.allDOMEventHandlers), R(G, "mousemove", function() {
          l || (this.style.backgroundColor = h.toolbar.itemBackgroundColorOnHover, this.style.color = h.toolbar.fontColorOnHover);
        }, h.allDOMEventHandlers, true), R(
          G,
          "mouseout",
          function() {
            l || (this.style.backgroundColor = h.toolbar.itemBackgroundColor, this.style.color = h.toolbar.fontColor);
          },
          h.allDOMEventHandlers,
          true
        ), R(G, "click", function() {
          h.exportChart({ format: "jpeg", fileName: h.exportFileName });
          xa(h._dropdownMenu);
        }, h.allDOMEventHandlers, true), G = document.createElement("div"), X(G, { padding: "12px 8px 12px 8px" }), G.innerHTML = h._cultureInfo.savePNGText, G.style.backgroundColor = h.toolbar.itemBackgroundColor, G.style.color = h.toolbar.fontColor, h._dropdownMenu.appendChild(G), R(
          G,
          "touchstart",
          function(h2) {
            l = true;
          },
          h.allDOMEventHandlers
        ), R(G, "mousemove", function() {
          l || (this.style.backgroundColor = h.toolbar.itemBackgroundColorOnHover, this.style.color = h.toolbar.fontColorOnHover);
        }, h.allDOMEventHandlers, true), R(G, "mouseout", function() {
          l || (this.style.backgroundColor = h.toolbar.itemBackgroundColor, this.style.color = h.toolbar.fontColor);
        }, h.allDOMEventHandlers, true), R(G, "click", function() {
          h.exportChart({ format: "png", fileName: h.exportFileName });
          xa(h._dropdownMenu);
        }, h.allDOMEventHandlers, true));
    }
    function ab(h, l, G) {
      h *= ma;
      l *= ma;
      h = G.getImageData(h, l, 2, 2).data;
      l = true;
      for (G = 0; 4 > G; G++)
        if (h[G] !== h[G + 4] | h[G] !== h[G + 8] | h[G] !== h[G + 12]) {
          l = false;
          break;
        }
      return l ? h[0] << 16 | h[1] << 8 | h[2] : 0;
    }
    function na(h, l, G) {
      return h in l ? l[h] : G[h];
    }
    function Oa(h, l, G, ya) {
      u && bb ? (ya = !r(ya) && ya ? h.getContext("2d", { willReadFrequently: true }) : h.getContext("2d"), Pa = ya.webkitBackingStorePixelRatio || ya.mozBackingStorePixelRatio || ya.msBackingStorePixelRatio || ya.oBackingStorePixelRatio || ya.backingStorePixelRatio || 1, ma = Ta / Pa, h.width = l * ma, h.height = G * ma, Ta !== Pa && (h.style.width = l + "px", h.style.height = G + "px", ya.scale(ma, ma))) : (h.width = l, h.height = G);
    }
    function jb(h) {
      if (!kb) {
        var l = false, G = false;
        "undefined" === typeof qa.Chart.creditHref ? (h.creditHref = ja("iuuqr;..b`ow`rkr/bnl."), h.creditText = ja("B`ow`rKR/bnl")) : (l = h.updateOption("creditText"), G = h.updateOption("creditHref"));
        if (h.creditHref && h.creditText) {
          h._creditLink || (h._creditLink = document.createElement("a"), h._creditLink.setAttribute("class", "canvasjs-chart-credit"), h._creditLink.setAttribute("title", "JavaScript Charts"), X(h._creditLink, { outline: "none", margin: "0px", position: "absolute", right: "2px", top: h.height - 14 + "px", color: "dimgrey", textDecoration: "none", fontSize: "11px", fontFamily: "Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif" }), h._creditLink.setAttribute("tabIndex", -1), h._creditLink.setAttribute("target", "_blank"));
          if (0 === h.renderCount || l || G)
            h._creditLink.setAttribute("href", h.creditHref), h._creditLink.innerHTML = h.creditText;
          h._creditLink && h.creditHref && h.creditText ? (h._creditLink.parentElement || h._canvasJSContainer.appendChild(h._creditLink), h._creditLink.style.top = h.height - 14 + "px") : h._creditLink.parentElement && h._canvasJSContainer.removeChild(h._creditLink);
        }
      }
    }
    function va(h, l, G) {
      var r2 = document.createElement("canvas");
      r2.setAttribute("class", "canvasjs-chart-canvas");
      Oa(r2, h, l, G);
      u || "undefined" === typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement(r2);
      return r2;
    }
    function X(h, l) {
      for (var r2 in l)
        h.style[r2] = l[r2];
    }
    function ta(h, l, r2) {
      l.getAttribute("state") || (l.style.backgroundColor = h.toolbar.itemBackgroundColor, l.style.color = h.toolbar.fontColor, l.style.border = "none", X(l, { WebkitUserSelect: "none", MozUserSelect: "none", msUserSelect: "none", userSelect: "none" }));
      l.getAttribute("state") !== r2 && (l.setAttribute("state", r2), l.setAttribute("type", "button"), X(l, { padding: "5px 12px", cursor: "pointer", "float": "left", width: "40px", height: "25px", outline: "0px", verticalAlign: "baseline", lineHeight: "0" }), l.innerHTML = "<img src='" + lb[r2].image + "' alt='" + h._cultureInfo[r2 + "Text"] + "' />", X(l.childNodes[0], { height: "95%", pointerEvents: "none" }));
      l.setAttribute("title", h._cultureInfo[r2 + "Text"]);
    }
    function Na() {
      for (var h = null, l = 0; l < arguments.length; l++)
        h = arguments[l], h.style && (h.style.display = "inline");
    }
    function xa() {
      for (var h = null, l = 0; l < arguments.length; l++)
        (h = arguments[l]) && h.style && (h.style.display = "none");
    }
    function Ua(h, l, r2, u2, ia) {
      if (null === h || "undefined" === typeof h)
        return "undefined" === typeof r2 ? l : r2;
      h = parseFloat(h.toString()) * (0 <= h.toString().indexOf("%") ? l / 100 : 1);
      "undefined" !== typeof u2 && (h = Math.min(u2, h), "undefined" !== typeof ia && (h = Math.max(ia, h)));
      return !isNaN(h) && h <= l && 0 <= h ? h : "undefined" === typeof r2 ? l : r2;
    }
    function L(h, l, G, u2, ia) {
      this._defaultsKey = h;
      this._themeOptionsKey = l;
      this._index = u2;
      this.parent = ia;
      this._eventListeners = [];
      h = {};
      this.theme && r(this.parent) && r(l) && r(u2) ? h = r(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && (this.parent.themeOptions && this.parent.themeOptions[l]) && (null === u2 ? h = this.parent.themeOptions[l] : 0 < this.parent.themeOptions[l].length && (u2 = Math.min(this.parent.themeOptions[l].length - 1, u2), h = this.parent.themeOptions[l][u2]));
      this.themeOptions = h;
      this.options = G ? G : { _isPlaceholder: true };
      this.setOptions(this.options, h);
    }
    function Ga(h, l, r2, u2, ia) {
      "undefined" === typeof ia && (ia = 0);
      this._padding = ia;
      this._x1 = h;
      this._y1 = l;
      this._x2 = r2;
      this._y2 = u2;
      this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding;
    }
    function ka(h, l) {
      ka.base.constructor.call(this, "TextBlock", null, l, null, null);
      this.ctx = h;
      this._isDirty = true;
      this._wrappedText = null;
      this._initialize();
    }
    function Va(h, l) {
      Va.base.constructor.call(this, "Toolbar", "toolbar", l, null, h);
      this.chart = h;
      this.canvas = h.canvas;
      this.ctx = this.chart.ctx;
      this.optionsName = "toolbar";
    }
    function Ba(h, l) {
      Ba.base.constructor.call(this, "Title", "title", l, null, h);
      this.chart = h;
      this.canvas = h.canvas;
      this.ctx = this.chart.ctx;
      this.optionsName = "title";
      if (r(this.options.margin) && h.options.subtitles) {
        for (var G = h.options.subtitles, u2 = 0; u2 < G.length; u2++)
          if ((r(G[u2].horizontalAlign) && "center" === this.horizontalAlign || G[u2].horizontalAlign === this.horizontalAlign) && (r(G[u2].verticalAlign) && "top" === this.verticalAlign || G[u2].verticalAlign === this.verticalAlign) && !G[u2].dockInsidePlotArea === !this.dockInsidePlotArea) {
            this.margin = 0;
            break;
          }
      }
      "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
      this.height = this.width = null;
      this.bounds = { x1: null, y1: null, x2: null, y2: null };
    }
    function Ka(h, l, r2) {
      Ka.base.constructor.call(this, "Subtitle", "subtitles", l, r2, h);
      this.chart = h;
      this.canvas = h.canvas;
      this.ctx = this.chart.ctx;
      this.optionsName = "subtitles";
      this.isOptionsInArray = true;
      "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
      this.height = this.width = null;
      this.bounds = { x1: null, y1: null, x2: null, y2: null };
    }
    function Wa() {
      this.pool = [];
    }
    function La(h) {
      var l;
      h && Ma[h] && (l = Ma[h]);
      La.base.constructor.call(this, "CultureInfo", null, l, null, null);
    }
    var Ja = false, wa = {}, u = !!document.createElement("canvas").getContext, qa = {
      Chart: {
        width: 500,
        height: 400,
        zoomEnabled: false,
        zoomType: "x",
        backgroundColor: "white",
        theme: "light1",
        animationEnabled: false,
        animationDuration: 1200,
        dataPointWidth: null,
        dataPointMinWidth: null,
        dataPointMaxWidth: null,
        colorSet: "colorSet1",
        culture: "en",
        creditText: "CanvasJS",
        interactivityEnabled: true,
        exportEnabled: false,
        exportFileName: "Chart",
        rangeChanging: null,
        rangeChanged: null,
        publicProperties: {
          title: "readWrite",
          subtitles: "readWrite",
          toolbar: "readWrite",
          toolTip: "readWrite",
          legend: "readWrite",
          axisX: "readWrite",
          axisY: "readWrite",
          axisX2: "readWrite",
          axisY2: "readWrite",
          data: "readWrite",
          options: "readWrite",
          bounds: "readOnly",
          container: "readOnly",
          selectedColorSet: "readOnly"
        }
      },
      Title: { padding: 0, text: null, verticalAlign: "top", horizontalAlign: "center", fontSize: 20, fontFamily: "Calibri", fontWeight: "normal", fontColor: "black", fontStyle: "normal", borderThickness: 0, borderColor: "black", cornerRadius: 0, backgroundColor: u ? "transparent" : null, margin: 5, wrap: true, maxWidth: null, dockInsidePlotArea: false, publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" } },
      Subtitle: { padding: 0, text: null, verticalAlign: "top", horizontalAlign: "center", fontSize: 14, fontFamily: "Calibri", fontWeight: "normal", fontColor: "black", fontStyle: "normal", borderThickness: 0, borderColor: "black", cornerRadius: 0, backgroundColor: null, margin: 2, wrap: true, maxWidth: null, dockInsidePlotArea: false, publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" } },
      Toolbar: {
        itemBackgroundColor: "white",
        itemBackgroundColorOnHover: "#2196f3",
        buttonBorderColor: "#2196f3",
        buttonBorderThickness: 1,
        fontColor: "black",
        fontColorOnHover: "white",
        publicProperties: { options: "readWrite", chart: "readOnly" }
      },
      Legend: {
        name: null,
        verticalAlign: "center",
        horizontalAlign: "right",
        fontSize: 14,
        fontFamily: "calibri",
        fontWeight: "normal",
        fontColor: "black",
        fontStyle: "normal",
        cursor: null,
        itemmouseover: null,
        itemmouseout: null,
        itemmousemove: null,
        itemclick: null,
        dockInsidePlotArea: false,
        reversed: false,
        backgroundColor: u ? "transparent" : null,
        borderColor: u ? "transparent" : null,
        borderThickness: 0,
        cornerRadius: 0,
        maxWidth: null,
        maxHeight: null,
        markerMargin: null,
        itemMaxWidth: null,
        itemWidth: null,
        itemWrap: true,
        itemTextFormatter: null,
        publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" }
      },
      ToolTip: { enabled: true, shared: false, animationEnabled: true, content: null, contentFormatter: null, reversed: false, backgroundColor: u ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", borderColor: null, borderThickness: 2, cornerRadius: 5, fontSize: 14, fontColor: "black", fontFamily: "Calibri, Arial, Georgia, serif;", fontWeight: "normal", fontStyle: "italic", updated: null, hidden: null, publicProperties: {
        options: "readWrite",
        chart: "readOnly"
      } },
      Axis: {
        minimum: null,
        maximum: null,
        viewportMinimum: null,
        viewportMaximum: null,
        interval: null,
        intervalType: null,
        reversed: false,
        logarithmic: false,
        logarithmBase: 10,
        title: null,
        titleFontColor: "black",
        titleFontSize: 20,
        titleFontFamily: "arial",
        titleFontWeight: "normal",
        titleFontStyle: "normal",
        titleWrap: true,
        titleMaxWidth: null,
        titleBackgroundColor: u ? "transparent" : null,
        titleBorderColor: u ? "transparent" : null,
        titleBorderThickness: 0,
        titleCornerRadius: 0,
        labelAngle: 0,
        labelFontFamily: "arial",
        labelFontColor: "black",
        labelFontSize: 12,
        labelFontWeight: "normal",
        labelFontStyle: "normal",
        labelAutoFit: true,
        labelWrap: true,
        labelMaxWidth: null,
        labelFormatter: null,
        labelBackgroundColor: u ? "transparent" : null,
        labelBorderColor: u ? "transparent" : null,
        labelBorderThickness: 0,
        labelCornerRadius: 0,
        labelPlacement: "outside",
        labelTextAlign: "left",
        prefix: "",
        suffix: "",
        includeZero: false,
        tickLength: 5,
        tickColor: "black",
        tickThickness: 1,
        tickPlacement: "outside",
        lineColor: "black",
        lineThickness: 1,
        lineDashType: "solid",
        gridColor: "#A0A0A0",
        gridThickness: 0,
        gridDashType: "solid",
        interlacedColor: u ? "transparent" : null,
        valueFormatString: null,
        margin: 2,
        publicProperties: { options: "readWrite", stripLines: "readWrite", scaleBreaks: "readWrite", crosshair: "readWrite", bounds: "readOnly", chart: "readOnly" }
      },
      StripLine: {
        value: null,
        startValue: null,
        endValue: null,
        color: "orange",
        opacity: null,
        thickness: 2,
        lineDashType: "solid",
        label: "",
        labelPlacement: "inside",
        labelAlign: "far",
        labelWrap: true,
        labelMaxWidth: null,
        labelBackgroundColor: null,
        labelBorderColor: u ? "transparent" : null,
        labelBorderThickness: 0,
        labelCornerRadius: 0,
        labelFontFamily: "arial",
        labelFontColor: "orange",
        labelFontSize: 12,
        labelFontWeight: "normal",
        labelFontStyle: "normal",
        labelFormatter: null,
        showOnTop: false,
        publicProperties: { options: "readWrite", axis: "readOnly", bounds: "readOnly", chart: "readOnly" }
      },
      ScaleBreaks: { autoCalculate: false, collapsibleThreshold: "25%", maxNumberOfAutoBreaks: 2, spacing: 8, type: "straight", color: "#FFFFFF", fillOpacity: 0.9, lineThickness: 2, lineColor: "#E16E6E", lineDashType: "solid", publicProperties: {
        options: "readWrite",
        customBreaks: "readWrite",
        axis: "readOnly",
        autoBreaks: "readOnly",
        bounds: "readOnly",
        chart: "readOnly"
      } },
      Break: { startValue: null, endValue: null, spacing: 8, type: "straight", color: "#FFFFFF", fillOpacity: 0.9, lineThickness: 2, lineColor: "#E16E6E", lineDashType: "solid", publicProperties: { options: "readWrite", scaleBreaks: "readOnly", bounds: "readOnly", chart: "readOnly" } },
      Crosshair: {
        enabled: false,
        snapToDataPoint: false,
        color: "grey",
        opacity: null,
        thickness: 2,
        lineDashType: "solid",
        label: "",
        labelWrap: true,
        labelMaxWidth: null,
        labelBackgroundColor: u ? "grey" : null,
        labelBorderColor: u ? "grey" : null,
        labelBorderThickness: 0,
        labelCornerRadius: 0,
        labelFontFamily: u ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
        labelFontSize: 12,
        labelFontColor: "#fff",
        labelFontWeight: "normal",
        labelFontStyle: "normal",
        labelFormatter: null,
        valueFormatString: null,
        updated: null,
        hidden: null,
        publicProperties: { options: "readWrite", axis: "readOnly", bounds: "readOnly", chart: "readOnly" }
      },
      DataSeries: {
        name: null,
        dataPoints: null,
        label: "",
        bevelEnabled: false,
        highlightEnabled: true,
        cursor: "default",
        indexLabel: "",
        indexLabelPlacement: "auto",
        indexLabelOrientation: "horizontal",
        indexLabelTextAlign: "left",
        indexLabelFontColor: "black",
        indexLabelFontSize: 12,
        indexLabelFontStyle: "normal",
        indexLabelFontFamily: "Arial",
        indexLabelFontWeight: "normal",
        indexLabelBackgroundColor: null,
        indexLabelLineColor: "gray",
        indexLabelLineThickness: 1,
        indexLabelLineDashType: "solid",
        indexLabelMaxWidth: null,
        indexLabelWrap: true,
        indexLabelFormatter: null,
        lineThickness: 2,
        lineDashType: "solid",
        connectNullData: false,
        nullDataLineDashType: "dash",
        color: null,
        lineColor: null,
        risingColor: "white",
        fallingColor: "red",
        fillOpacity: null,
        startAngle: 0,
        radius: null,
        innerRadius: null,
        neckHeight: null,
        neckWidth: null,
        reversed: false,
        valueRepresents: null,
        linkedDataSeriesIndex: null,
        whiskerThickness: 2,
        whiskerDashType: "solid",
        whiskerColor: null,
        whiskerLength: null,
        stemThickness: 2,
        stemColor: null,
        stemDashType: "solid",
        upperBoxColor: "white",
        lowerBoxColor: "white",
        type: "column",
        xValueType: "number",
        axisXType: "primary",
        axisYType: "primary",
        axisXIndex: 0,
        axisYIndex: 0,
        xValueFormatString: null,
        yValueFormatString: null,
        zValueFormatString: null,
        percentFormatString: null,
        showInLegend: null,
        legendMarkerType: null,
        legendMarkerColor: null,
        legendText: null,
        legendMarkerBorderColor: u ? "transparent" : null,
        legendMarkerBorderThickness: 0,
        markerType: "circle",
        markerColor: null,
        markerSize: null,
        markerBorderColor: u ? "transparent" : null,
        markerBorderThickness: 0,
        mouseover: null,
        mouseout: null,
        mousemove: null,
        click: null,
        toolTipContent: null,
        visible: true,
        publicProperties: {
          options: "readWrite",
          axisX: "readWrite",
          axisY: "readWrite",
          chart: "readOnly"
        }
      },
      TextBlock: { x: 0, y: 0, width: null, height: null, maxWidth: null, maxHeight: null, padding: 0, angle: 0, text: "", horizontalAlign: "center", textAlign: "left", fontSize: 12, fontFamily: "calibri", fontWeight: "normal", fontColor: "black", fontStyle: "normal", borderThickness: 0, borderColor: "black", cornerRadius: 0, backgroundColor: null, textBaseline: "top" },
      CultureInfo: {
        decimalSeparator: ".",
        digitGroupSeparator: ",",
        zoomText: "Zoom",
        panText: "Pan",
        resetText: "Reset",
        menuText: "More Options",
        saveJPGText: "Save as JPEG",
        savePNGText: "Save as PNG",
        printText: "Print",
        days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        months: "January February March April May June July August September October November December".split(" "),
        shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")
      }
    }, Ma = { en: {} }, E = u ? "Trebuchet MS, Helvetica, sans-serif" : "Arial", Ha = u ? "Impact, Charcoal, sans-serif" : "Arial", Ca = {
      colorSet1: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(" "),
      colorSet2: "#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(" "),
      colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")
    }, M, ba, S, W, aa;
    ba = "#333333";
    S = "#000000";
    M = "#666666";
    aa = W = "#000000";
    var ga = 20, z = 14, Xa = {
      colorSet: "colorSet1",
      backgroundColor: "#FFFFFF",
      title: {
        fontFamily: Ha,
        fontSize: 32,
        fontColor: ba,
        fontWeight: "normal",
        verticalAlign: "top",
        margin: 5
      },
      subtitles: [{ fontFamily: Ha, fontSize: z, fontColor: ba, fontWeight: "normal", verticalAlign: "top", margin: 5 }],
      data: [{ indexLabelFontFamily: E, indexLabelFontSize: z, indexLabelFontColor: ba, indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }],
      axisX: [{ titleFontFamily: E, titleFontSize: ga, titleFontColor: ba, titleFontWeight: "normal", labelFontFamily: E, labelFontSize: z, labelFontColor: S, labelFontWeight: "normal", lineThickness: 1, lineColor: M, tickThickness: 1, tickColor: M, gridThickness: 0, gridColor: M, stripLines: [{
        labelFontFamily: E,
        labelFontSize: z,
        labelFontColor: "#FF7300",
        labelFontWeight: "normal",
        labelBackgroundColor: null,
        color: "#FF7300",
        thickness: 1
      }], crosshair: { labelFontFamily: E, labelFontSize: z, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: aa, color: W, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }],
      axisX2: [{
        titleFontFamily: E,
        titleFontSize: ga,
        titleFontColor: ba,
        titleFontWeight: "normal",
        labelFontFamily: E,
        labelFontSize: z,
        labelFontColor: S,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: M,
        tickThickness: 1,
        tickColor: M,
        gridThickness: 0,
        gridColor: M,
        stripLines: [{ labelFontFamily: E, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
        crosshair: { labelFontFamily: E, labelFontSize: z, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: aa, color: W, thickness: 1, lineDashType: "dash" },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#BBBBBB",
          lineThickness: 1,
          lineDashType: "solid"
        }
      }],
      axisY: [{ titleFontFamily: E, titleFontSize: ga, titleFontColor: ba, titleFontWeight: "normal", labelFontFamily: E, labelFontSize: z, labelFontColor: S, labelFontWeight: "normal", lineThickness: 1, lineColor: M, tickThickness: 1, tickColor: M, gridThickness: 1, gridColor: M, stripLines: [{ labelFontFamily: E, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
        labelFontFamily: E,
        labelFontSize: z,
        labelFontColor: "#EEEEEE",
        labelFontWeight: "normal",
        labelBackgroundColor: aa,
        color: W,
        thickness: 1,
        lineDashType: "dash"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }],
      axisY2: [{ titleFontFamily: E, titleFontSize: ga, titleFontColor: ba, titleFontWeight: "normal", labelFontFamily: E, labelFontSize: z, labelFontColor: S, labelFontWeight: "normal", lineThickness: 1, lineColor: M, tickThickness: 1, tickColor: M, gridThickness: 1, gridColor: M, stripLines: [{
        labelFontFamily: E,
        labelFontSize: z,
        labelFontColor: "#FF7300",
        labelFontWeight: "normal",
        labelBackgroundColor: null,
        color: "#FF7300",
        thickness: 1
      }], crosshair: { labelFontFamily: E, labelFontSize: z, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: aa, color: W, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }],
      legend: { fontFamily: E, fontSize: 14, fontColor: ba, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" },
      toolTip: { fontFamily: E, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1 },
      toolbar: { itemBackgroundColor: "white", itemBackgroundColorOnHover: "#2196f3", buttonBorderColor: "#2196f3", buttonBorderThickness: 1, fontColor: "black", fontColorOnHover: "white" }
    };
    S = ba = "#F5F5F5";
    M = "#FFFFFF";
    W = "#40BAF1";
    aa = "#F5F5F5";
    var ga = 20, z = 14, cb = { colorSet: "colorSet2", title: { fontFamily: E, fontSize: 33, fontColor: "#3A3A3A", fontWeight: "bold", verticalAlign: "top", margin: 5 }, subtitles: [{ fontFamily: E, fontSize: z, fontColor: "#3A3A3A", fontWeight: "normal", verticalAlign: "top", margin: 5 }], data: [{
      indexLabelFontFamily: E,
      indexLabelFontSize: z,
      indexLabelFontColor: "#666666",
      indexLabelFontWeight: "normal",
      indexLabelLineThickness: 1
    }], axisX: [{ titleFontFamily: E, titleFontSize: ga, titleFontColor: "#666666", titleFontWeight: "normal", labelFontFamily: E, labelFontSize: z, labelFontColor: "#666666", labelFontWeight: "normal", lineThickness: 1, lineColor: "#BBBBBB", tickThickness: 1, tickColor: "#BBBBBB", gridThickness: 1, gridColor: "#BBBBBB", stripLines: [{
      labelFontFamily: E,
      labelFontSize: z,
      labelFontColor: "#FFA500",
      labelFontWeight: "normal",
      labelBackgroundColor: null,
      color: "#FFA500",
      thickness: 1
    }], crosshair: { labelFontFamily: E, labelFontSize: z, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }], axisX2: [{
      titleFontFamily: E,
      titleFontSize: ga,
      titleFontColor: "#666666",
      titleFontWeight: "normal",
      labelFontFamily: E,
      labelFontSize: z,
      labelFontColor: "#666666",
      labelFontWeight: "normal",
      lineThickness: 1,
      lineColor: "#BBBBBB",
      tickColor: "#BBBBBB",
      tickThickness: 1,
      gridThickness: 1,
      gridColor: "#BBBBBB",
      stripLines: [{ labelFontFamily: E, labelFontSize: z, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
      crosshair: { labelFontFamily: E, labelFontSize: z, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
      scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" }
    }], axisY: [{
      titleFontFamily: E,
      titleFontSize: ga,
      titleFontColor: "#666666",
      titleFontWeight: "normal",
      labelFontFamily: E,
      labelFontSize: z,
      labelFontColor: "#666666",
      labelFontWeight: "normal",
      lineThickness: 0,
      lineColor: "#BBBBBB",
      tickColor: "#BBBBBB",
      tickThickness: 1,
      gridThickness: 1,
      gridColor: "#BBBBBB",
      stripLines: [{ labelFontFamily: E, labelFontSize: z, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
      crosshair: {
        labelFontFamily: E,
        labelFontSize: z,
        labelFontColor: "#EEEEEE",
        labelFontWeight: "normal",
        labelBackgroundColor: "black",
        color: "black",
        thickness: 1,
        lineDashType: "dot"
      },
      scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" }
    }], axisY2: [{ titleFontFamily: E, titleFontSize: ga, titleFontColor: "#666666", titleFontWeight: "normal", labelFontFamily: E, labelFontSize: z, labelFontColor: "#666666", labelFontWeight: "normal", lineThickness: 0, lineColor: "#BBBBBB", tickColor: "#BBBBBB", tickThickness: 1, gridThickness: 1, gridColor: "#BBBBBB", stripLines: [{
      labelFontFamily: E,
      labelFontSize: z,
      labelFontColor: "#FFA500",
      labelFontWeight: "normal",
      labelBackgroundColor: null,
      color: "#FFA500",
      thickness: 1
    }], crosshair: { labelFontFamily: E, labelFontSize: z, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }], legend: { fontFamily: E, fontSize: 14, fontColor: "#3A3A3A", fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" }, toolTip: {
      fontFamily: E,
      fontSize: 14,
      fontStyle: "normal",
      cornerRadius: 0,
      borderThickness: 1
    }, toolbar: { itemBackgroundColor: "white", itemBackgroundColorOnHover: "#2196f3", buttonBorderColor: "#2196f3", buttonBorderThickness: 1, fontColor: "black", fontColorOnHover: "white" } };
    S = ba = "#F5F5F5";
    M = "#FFFFFF";
    W = "#40BAF1";
    aa = "#F5F5F5";
    ga = 20;
    z = 14;
    Ha = { colorSet: "colorSet12", backgroundColor: "#2A2A2A", title: { fontFamily: Ha, fontSize: 32, fontColor: ba, fontWeight: "normal", verticalAlign: "top", margin: 5 }, subtitles: [{
      fontFamily: Ha,
      fontSize: z,
      fontColor: ba,
      fontWeight: "normal",
      verticalAlign: "top",
      margin: 5
    }], toolbar: { itemBackgroundColor: "#666666", itemBackgroundColorOnHover: "#FF7372", buttonBorderColor: "#FF7372", buttonBorderThickness: 1, fontColor: "#F5F5F5", fontColorOnHover: "#F5F5F5" }, data: [{ indexLabelFontFamily: E, indexLabelFontSize: z, indexLabelFontColor: S, indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }], axisX: [{
      titleFontFamily: E,
      titleFontSize: ga,
      titleFontColor: S,
      titleFontWeight: "normal",
      labelFontFamily: E,
      labelFontSize: z,
      labelFontColor: S,
      labelFontWeight: "normal",
      lineThickness: 1,
      lineColor: M,
      tickThickness: 1,
      tickColor: M,
      gridThickness: 0,
      gridColor: M,
      stripLines: [{ labelFontFamily: E, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
      crosshair: { labelFontFamily: E, labelFontSize: z, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: aa, color: W, thickness: 1, lineDashType: "dash" },
      scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" }
    }], axisX2: [{
      titleFontFamily: E,
      titleFontSize: ga,
      titleFontColor: S,
      titleFontWeight: "normal",
      labelFontFamily: E,
      labelFontSize: z,
      labelFontColor: S,
      labelFontWeight: "normal",
      lineThickness: 1,
      lineColor: M,
      tickThickness: 1,
      tickColor: M,
      gridThickness: 0,
      gridColor: M,
      stripLines: [{ labelFontFamily: E, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
      crosshair: {
        labelFontFamily: E,
        labelFontSize: z,
        labelFontColor: "#000000",
        labelFontWeight: "normal",
        labelBackgroundColor: aa,
        color: W,
        thickness: 1,
        lineDashType: "dash"
      },
      scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" }
    }], axisY: [{ titleFontFamily: E, titleFontSize: ga, titleFontColor: S, titleFontWeight: "normal", labelFontFamily: E, labelFontSize: z, labelFontColor: S, labelFontWeight: "normal", lineThickness: 1, lineColor: M, tickThickness: 1, tickColor: M, gridThickness: 1, gridColor: M, stripLines: [{
      labelFontFamily: E,
      labelFontSize: z,
      labelFontColor: "#FF7300",
      labelFontWeight: "normal",
      labelBackgroundColor: null,
      color: "#FF7300",
      thickness: 1
    }], crosshair: { labelFontFamily: E, labelFontSize: z, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: aa, color: W, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], axisY2: [{
      titleFontFamily: E,
      titleFontSize: ga,
      titleFontColor: S,
      titleFontWeight: "normal",
      labelFontFamily: E,
      labelFontSize: z,
      labelFontColor: S,
      labelFontWeight: "normal",
      lineThickness: 1,
      lineColor: M,
      tickThickness: 1,
      tickColor: M,
      gridThickness: 1,
      gridColor: M,
      stripLines: [{ labelFontFamily: E, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
      crosshair: { labelFontFamily: E, labelFontSize: z, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: aa, color: W, thickness: 1, lineDashType: "dash" },
      scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" }
    }], legend: {
      fontFamily: E,
      fontSize: 14,
      fontColor: ba,
      fontWeight: "bold",
      verticalAlign: "bottom",
      horizontalAlign: "center"
    }, toolTip: { fontFamily: E, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1, fontColor: S, backgroundColor: "rgba(0, 0, 0, .7)" } };
    M = "#FFFFFF";
    S = ba = "#FAFAFA";
    W = "#40BAF1";
    aa = "#F5F5F5";
    var ga = 20, z = 14, db = { light1: Xa, light2: cb, dark1: Ha, dark2: { colorSet: "colorSet2", backgroundColor: "#32373A", title: { fontFamily: E, fontSize: 32, fontColor: ba, fontWeight: "normal", verticalAlign: "top", margin: 5 }, subtitles: [{
      fontFamily: E,
      fontSize: z,
      fontColor: ba,
      fontWeight: "normal",
      verticalAlign: "top",
      margin: 5
    }], toolbar: { itemBackgroundColor: "#666666", itemBackgroundColorOnHover: "#FF7372", buttonBorderColor: "#FF7372", buttonBorderThickness: 1, fontColor: "#F5F5F5", fontColorOnHover: "#F5F5F5" }, data: [{ indexLabelFontFamily: E, indexLabelFontSize: z, indexLabelFontColor: S, indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }], axisX: [{
      titleFontFamily: E,
      titleFontSize: ga,
      titleFontColor: S,
      titleFontWeight: "normal",
      labelFontFamily: E,
      labelFontSize: z,
      labelFontColor: S,
      labelFontWeight: "normal",
      lineThickness: 1,
      lineColor: M,
      tickThickness: 1,
      tickColor: M,
      gridThickness: 0,
      gridColor: M,
      stripLines: [{ labelFontFamily: E, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
      crosshair: { labelFontFamily: E, labelFontSize: z, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: aa, color: W, thickness: 1, lineDashType: "dash" },
      scaleBreaks: {
        type: "zigzag",
        spacing: "2%",
        lineColor: "#777777",
        lineThickness: 1,
        lineDashType: "solid",
        color: "#111111"
      }
    }], axisX2: [{ titleFontFamily: E, titleFontSize: ga, titleFontColor: S, titleFontWeight: "normal", labelFontFamily: E, labelFontSize: z, labelFontColor: S, labelFontWeight: "normal", lineThickness: 1, lineColor: M, tickThickness: 1, tickColor: M, gridThickness: 0, gridColor: M, stripLines: [{ labelFontFamily: E, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
      labelFontFamily: E,
      labelFontSize: z,
      labelFontColor: "#000000",
      labelFontWeight: "normal",
      labelBackgroundColor: aa,
      color: W,
      thickness: 1,
      lineDashType: "dash"
    }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], axisY: [{ titleFontFamily: E, titleFontSize: ga, titleFontColor: S, titleFontWeight: "normal", labelFontFamily: E, labelFontSize: z, labelFontColor: S, labelFontWeight: "normal", lineThickness: 0, lineColor: M, tickThickness: 1, tickColor: M, gridThickness: 1, gridColor: M, stripLines: [{
      labelFontFamily: E,
      labelFontSize: z,
      labelFontColor: "#FF7300",
      labelFontWeight: "normal",
      labelBackgroundColor: null,
      color: "#FF7300",
      thickness: 1
    }], crosshair: { labelFontFamily: E, labelFontSize: z, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: aa, color: W, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], axisY2: [{
      titleFontFamily: E,
      titleFontSize: ga,
      titleFontColor: S,
      titleFontWeight: "normal",
      labelFontFamily: E,
      labelFontSize: z,
      labelFontColor: S,
      labelFontWeight: "normal",
      lineThickness: 0,
      lineColor: M,
      tickThickness: 1,
      tickColor: M,
      gridThickness: 1,
      gridColor: M,
      stripLines: [{ labelFontFamily: E, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
      crosshair: { labelFontFamily: E, labelFontSize: z, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: aa, color: W, thickness: 1, lineDashType: "dash" },
      scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" }
    }], legend: {
      fontFamily: E,
      fontSize: 14,
      fontColor: ba,
      fontWeight: "bold",
      verticalAlign: "bottom",
      horizontalAlign: "center"
    }, toolTip: { fontFamily: E, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1, fontColor: S, backgroundColor: "rgba(0, 0, 0, .7)" } }, theme1: Xa, theme2: cb, theme3: Xa }, V = { numberDuration: 1, yearDuration: 314496e5, monthDuration: 2592e6, weekDuration: 6048e5, dayDuration: 864e5, hourDuration: 36e5, minuteDuration: 6e4, secondDuration: 1e3, millisecondDuration: 1, dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ") };
    (function() {
      wa.fSDec = function(h) {
        for (var l = "", r2 = 0; r2 < h.length; r2++)
          l += String.fromCharCode(Math.ceil(h.length / 57 / 5) ^ h.charCodeAt(r2));
        return l;
      };
      delete qa[wa.fSDec("Bi`su")][wa.fSDec("bsdehuIsdg")];
      wa.pro = { sCH: qa[wa.fSDec("Bi`su")][wa.fSDec("bsdehuIsdg")] };
    })();
    var hb = function() {
      var h = false;
      try {
        var l = Object.defineProperty && Object.defineProperty({}, "passive", { get: function() {
          h = true;
          return false;
        } });
        window.addEventListener && (window.addEventListener("test", null, l), window.removeEventListener("test", null, l));
      } catch (r2) {
        h = false;
      }
      return h;
    }(), $a = {}, sa = null, mb = function() {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.backgroundColor && (this.ctx.fillStyle = this.backgroundColor, this.ctx.fillRect(0, 0, this.width, this.height));
    }, za = function(h) {
      h.width = 1;
      h.height = 1;
      h.getContext("2d") && h.getContext("2d").clearRect(0, 0, 1, 1);
    }, nb = function(h, l, r2) {
      l = Math.min(this.width, this.height);
      return Math.max("theme4" === this.theme ? 0 : 300 <= l ? 12 : 11, Math.round(l * (h / 400)));
    }, Da = function() {
      var h = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g, l = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), r2 = "Sun Mon Tue Wed Thu Fri Sat".split(" "), u2 = "January February March April May June July August September October November December".split(" "), ia = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), E2 = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, C = /[^-+\dA-Z]/g;
      return function(z2, K2, Q) {
        var M2 = Q ? Q.days : l, Z2 = Q ? Q.months : u2, R2 = Q ? Q.shortDays : r2, V2 = Q ? Q.shortMonths : ia;
        Q = "";
        var X2 = false;
        z2 = z2 && z2.getTime ? z2 : z2 ? new Date(z2) : /* @__PURE__ */ new Date();
        if (isNaN(z2))
          throw SyntaxError("invalid date");
        "UTC:" === K2.slice(0, 4) && (K2 = K2.slice(4), X2 = true);
        Q = X2 ? "getUTC" : "get";
        var L2 = z2[Q + "Date"](), P = z2[Q + "Day"](), Y = z2[Q + "Month"](), a = z2[Q + "FullYear"](), d = z2[Q + "Hours"](), c = z2[Q + "Minutes"](), b = z2[Q + "Seconds"](), e = z2[Q + "Milliseconds"](), g = X2 ? 0 : z2.getTimezoneOffset();
        return Q = K2.replace(h, function(p) {
          switch (p) {
            case "D":
              return L2;
            case "DD":
              return da(L2, 2);
            case "DDD":
              return R2[P];
            case "DDDD":
              return M2[P];
            case "M":
              return Y + 1;
            case "MM":
              return da(Y + 1, 2);
            case "MMM":
              return V2[Y];
            case "MMMM":
              return Z2[Y];
            case "Y":
              return parseInt(String(a).slice(-2));
            case "YY":
              return da(String(a).slice(-2), 2);
            case "YYY":
              return da(String(a).slice(-3), 3);
            case "YYYY":
              return da(a, 4);
            case "h":
              return d % 12 || 12;
            case "hh":
              return da(d % 12 || 12, 2);
            case "H":
              return d;
            case "HH":
              return da(d, 2);
            case "m":
              return c;
            case "mm":
              return da(c, 2);
            case "s":
              return b;
            case "ss":
              return da(b, 2);
            case "f":
              return da(String(e), 3).slice(0, 1);
            case "ff":
              return da(String(e), 3).slice(
                0,
                2
              );
            case "fff":
              return da(String(e), 3).slice(0, 3);
            case "t":
              return 12 > d ? "a" : "p";
            case "tt":
              return 12 > d ? "am" : "pm";
            case "T":
              return 12 > d ? "A" : "P";
            case "TT":
              return 12 > d ? "AM" : "PM";
            case "K":
              return X2 ? "UTC" : (String(z2).match(E2) || [""]).pop().replace(C, "");
            case "z":
              return (0 < g ? "-" : "+") + Math.floor(Math.abs(g) / 60);
            case "zz":
              return (0 < g ? "-" : "+") + da(Math.floor(Math.abs(g) / 60), 2);
            case "zzz":
              return (0 < g ? "-" : "+") + da(Math.floor(Math.abs(g) / 60), 2) + da(Math.abs(g) % 60, 2);
            default:
              return p.slice(1, p.length - 1);
          }
        });
      };
    }(), ob = function(h) {
      var l = 0 > h;
      if (1 > Math.abs(h)) {
        var r2 = parseInt(h.toString().split("e-")[1]);
        r2 && (h = (l ? -1 * h : h) * Math.pow(10, r2 - 1), h = "0." + Array(r2).join("0") + h.toString().substring(2), h = l ? "-" + h : h);
      } else
        r2 = parseInt(h.toString().split("+")[1]), 20 < r2 && (r2 -= 20, h /= Math.pow(10, r2), h = h.toString() + Array(r2 + 1).join("0"));
      return String(h);
    }, ea = function(h, l, r2) {
      if (null === h)
        return "";
      if (!isFinite(h))
        return h;
      h = Number(h);
      var u2 = 0 > h ? true : false;
      u2 && (h *= -1);
      var E2 = r2 ? r2.decimalSeparator : ".", z2 = r2 ? r2.digitGroupSeparator : ",", C = "";
      l = String(l);
      var C = 1, K2 = r2 = "", M2 = -1, Q = [], Z2 = [], R2 = 0, V2 = 0, X2 = 0, L2 = false, S2 = 0, K2 = l.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
      l = null;
      for (var P = 0; K2 && P < K2.length; P++)
        if (l = K2[P], "." === l && 0 > M2)
          M2 = P;
        else {
          if ("%" === l)
            C *= 100;
          else if ("‰" === l) {
            C *= 1e3;
            continue;
          } else if ("," === l[0] && "." === l[l.length - 1]) {
            C /= Math.pow(1e3, l.length - 1);
            M2 = P + l.length - 1;
            continue;
          } else
            "E" !== l[0] && "e" !== l[0] || "0" !== l[l.length - 1] || (L2 = true);
          0 > M2 ? (Q.push(l), "#" === l || "0" === l ? R2++ : "," === l && X2++) : (Z2.push(l), "#" !== l && "0" !== l || V2++);
        }
      L2 && (l = Math.floor(h), K2 = -Math.floor(Math.log(h) / Math.LN10 + 1), S2 = 0 === h ? 0 : 0 === l ? -(R2 + K2) : ob(l).length - R2, C /= Math.pow(10, S2));
      0 > M2 && (M2 = P);
      C = (h * C).toFixed(V2);
      l = C.split(".");
      C = (l[0] + "").split("");
      h = (l[1] + "").split("");
      C && "0" === C[0] && C.shift();
      for (L2 = K2 = P = V2 = M2 = 0; 0 < Q.length; )
        if (l = Q.pop(), "#" === l || "0" === l)
          if (M2++, M2 === R2) {
            var Y = C, C = [];
            if ("0" === l)
              for (l = R2 - V2 - (Y ? Y.length : 0); 0 < l; )
                Y.unshift("0"), l--;
            for (; 0 < Y.length; )
              r2 = Y.pop() + r2, L2++, 0 === L2 % K2 && (P === X2 && 0 < Y.length) && (r2 = z2 + r2);
          } else
            0 < C.length ? (r2 = C.pop() + r2, V2++, L2++) : "0" === l && (r2 = "0" + r2, V2++, L2++), 0 === L2 % K2 && (P === X2 && 0 < C.length) && (r2 = z2 + r2);
        else
          "E" !== l[0] && "e" !== l[0] || "0" !== l[l.length - 1] || !/[eE][+-]*[0]+/.test(l) ? "," === l ? (P++, K2 = L2, L2 = 0, 0 < C.length && (r2 = z2 + r2)) : r2 = 1 < l.length && ('"' === l[0] && '"' === l[l.length - 1] || "'" === l[0] && "'" === l[l.length - 1]) ? l.slice(1, l.length - 1) + r2 : l + r2 : (l = 0 > S2 ? l.replace("+", "").replace("-", "") : l.replace("-", ""), r2 += l.replace(/[0]+/, function(a) {
            return da(S2, a.length);
          }));
      z2 = "";
      for (Q = false; 0 < Z2.length; )
        l = Z2.shift(), "#" === l || "0" === l ? 0 < h.length && 0 !== Number(h.join("")) ? (z2 += h.shift(), Q = true) : "0" === l && (z2 += "0", Q = true) : 1 < l.length && ('"' === l[0] && '"' === l[l.length - 1] || "'" === l[0] && "'" === l[l.length - 1]) ? z2 += l.slice(1, l.length - 1) : "E" !== l[0] && "e" !== l[0] || "0" !== l[l.length - 1] || !/[eE][+-]*[0]+/.test(l) ? z2 += l : (l = 0 > S2 ? l.replace("+", "").replace("-", "") : l.replace("-", ""), z2 += l.replace(/[0]+/, function(a) {
          return da(S2, a.length);
        }));
      r2 += (Q ? E2 : "") + z2;
      return u2 ? "-" + r2 : r2;
    }, Qa = function(h) {
      var l = 0, r2 = 0;
      h = h || window.event;
      h.offsetX || 0 === h.offsetX ? (l = h.offsetX, r2 = h.offsetY) : h.layerX || 0 == h.layerX ? (l = h.layerX, r2 = h.layerY) : (l = h.pageX - h.target.offsetLeft, r2 = h.pageY - h.target.offsetTop);
      return { x: l, y: r2 };
    }, bb = true, Ta = window.devicePixelRatio || 1, Pa = 1, ma = Ta / Pa, $ = function(h, l, r2, u2, z2, E2, C, K2, M2, Q, Z2, V2, R2) {
      "undefined" === typeof R2 && (R2 = 1);
      C = C || 0;
      K2 = K2 || "black";
      var L2 = 15 < u2 - l && 15 < z2 - r2 ? 8 : 0.35 * Math.min(u2 - l, z2 - r2);
      h.beginPath();
      h.moveTo(l, r2);
      h.save();
      h.fillStyle = E2;
      h.globalAlpha = R2;
      h.fillRect(l, r2, u2 - l, z2 - r2);
      h.globalAlpha = 1;
      0 < C && (R2 = 0 === C % 2 ? 0 : 0.5, h.beginPath(), h.lineWidth = C, h.strokeStyle = K2, h.moveTo(l, r2), h.rect(l - R2, r2 - R2, u2 - l + 2 * R2, z2 - r2 + 2 * R2), h.stroke());
      h.restore();
      true === M2 && (h.save(), h.beginPath(), h.moveTo(l, r2), h.lineTo(l + L2, r2 + L2), h.lineTo(u2 - L2, r2 + L2), h.lineTo(u2, r2), h.closePath(), C = h.createLinearGradient((u2 + l) / 2, r2 + L2, (u2 + l) / 2, r2), C.addColorStop(0, E2), C.addColorStop(1, "rgba(255, 255, 255, .4)"), h.fillStyle = C, h.fill(), h.restore());
      true === Q && (h.save(), h.beginPath(), h.moveTo(l, z2), h.lineTo(l + L2, z2 - L2), h.lineTo(u2 - L2, z2 - L2), h.lineTo(u2, z2), h.closePath(), C = h.createLinearGradient((u2 + l) / 2, z2 - L2, (u2 + l) / 2, z2), C.addColorStop(0, E2), C.addColorStop(1, "rgba(255, 255, 255, .4)"), h.fillStyle = C, h.fill(), h.restore());
      true === Z2 && (h.save(), h.beginPath(), h.moveTo(l, r2), h.lineTo(l + L2, r2 + L2), h.lineTo(l + L2, z2 - L2), h.lineTo(l, z2), h.closePath(), C = h.createLinearGradient(l + L2, (z2 + r2) / 2, l, (z2 + r2) / 2), C.addColorStop(0, E2), C.addColorStop(1, "rgba(255, 255, 255, 0.1)"), h.fillStyle = C, h.fill(), h.restore());
      true === V2 && (h.save(), h.beginPath(), h.moveTo(u2, r2), h.lineTo(u2 - L2, r2 + L2), h.lineTo(u2 - L2, z2 - L2), h.lineTo(u2, z2), C = h.createLinearGradient(u2 - L2, (z2 + r2) / 2, u2, (z2 + r2) / 2), C.addColorStop(0, E2), C.addColorStop(1, "rgba(255, 255, 255, 0.1)"), h.fillStyle = C, C.addColorStop(0, E2), C.addColorStop(1, "rgba(255, 255, 255, 0.1)"), h.fillStyle = C, h.fill(), h.closePath(), h.restore());
    }, ja = function(h) {
      for (var l = "", r2 = 0; r2 < h.length; r2++)
        l += String.fromCharCode(Math.ceil(h.length / 57 / 5) ^ h.charCodeAt(r2));
      return l;
    }, kb = window && (window[ja("mnb`uhno")] && window[ja("mnb`uhno")].href && window[ja("mnb`uhno")].href.indexOf && (-1 !== window[ja("mnb`uhno")].href.indexOf(ja("b`ow`rkr/bnl")) || -1 !== window[ja("mnb`uhno")].href.indexOf(ja("gdonqhy/bnl")) || -1 !== window[ja("mnb`uhno")].href.indexOf(ja("gheemd")))) && -1 === window[ja("mnb`uhno")].href.indexOf(ja("gheemd")), lb = {
      reset: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg==" },
      pan: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC" },
      zoom: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVEhLvZZLaBNRFIabyftBIgEfqCCBoCC6MYqiXYiIj4U76U4X7sUHbhQhUBfixhZEUBDB16YuFERaUaQLK7ooCOJj4UKtYEFU0EptShO/A9Ph3js3k8lo/eHnP7n3nP/M3LlzMz1hkUwmNziOcyKRSFyFt+LxeD/c2Wq1Ym7Kv0M2m11Os1OxWGycn1OwZXCGuXfwIhezkd9/jRgNT2L4ldhs1pbkX5OLJe4euVxuGQaPCa3mnUjtJx7BDuKusJTCV6jVVGHTMuYRjxma7yIOhTgFY6jNaAKew2xPKpVay9ganmkvj+M448/MfJdT5K5Gg4HJacRngPFgqVRaRNwW1B4i7yehWfsEDdz1K+A01AoxPIqGAiuwGfkOTY8+1A6u7AyiFTB2Hu0KPIrdiOnzHLWDybeImvy+Wq2mZa5bUHsD0Zpz+KxHdWQymV6kAb1ElqeORgJLvgnRdj1+R1AfzkIvSUjxVjQSarVakrueIPT8+H1F5jSUy+WXiJrUYBVWyVxU4PEU8TzhfaijUqnMIWrjaY492eWRwdKOIqrnIxnXwLLeRLwk2GQzrEMjg0avEbXxkIxr4OoOImpj2QwyFgms1koa/SZUG8s+0iGnEhNfCNXEhzIXBVz0McTzEvJ+70P9oNFtxEzei3aFYrFYxmuSUPWSv9Yi9IMm2xE1We56Mp1OV4nDwqFmBDV9gk9AEh4gZtFHNt8W4kAUCoXF5MorY9Z/kDni9nDv7hc0i2fhgLvTtX8a99PoMPPagTFPxofRzmDJ9yM+AyEmTfgGysYbQcfhDzPPJDmX0c7gDg4gs9BqFIWhm/Nct5H8gtBq1I7UfIbtvmIuoaGQcp+fdpbbSM43eEH5wrwLbXmhm/fU63VHXjcuok7hEByFY/AeHGC8L5/PL3HT5xGH1uYwfPOICGo+CBcU0vwO1BqzUqILDl/z/9VYIMfpddiAc47jDP8BsUpb13wOLRwAAAAASUVORK5CYII=" },
      menu: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVFhH7dc9CsJAFATgRxIIBCwCqZKATX5sbawsY2MvWOtF9AB6AU8gguAJbD2AnZ2VXQT/Ko2TYGCL2OYtYQc+BuYA+1hCtnCVwMm27SGaXpDJIAiCvCkVR05hGOZNN3HkFMdx3nQRR06+76/R1IcFLJlNQEWlmWlBTwJtKLKHynehZqnjOGM0PYWRVXk61C37p7xlZ3Hk5HneCk1dmMH811xGoKLSzDiQwIBZB4ocoPJdqNkDt2yKlueWRVGUtzy3rPwo3sWRU3nLjuLI6OO67oZM00wMw3hrmpZx0XU9syxrR0T0BeMpb9dneSR2AAAAAElFTkSuQmCC" }
    };
    L.prototype.setOptions = function(h, l) {
      if (qa[this._defaultsKey]) {
        var r2 = qa[this._defaultsKey], u2;
        for (u2 in r2)
          "publicProperties" !== u2 && r2.hasOwnProperty(u2) && (this[u2] = h && u2 in h ? h[u2] : l && u2 in l ? l[u2] : r2[u2]);
      }
    };
    L.prototype.get = function(h) {
      var l = qa[this._defaultsKey];
      if ("options" === h)
        return this.options && this.options._isPlaceholder ? null : this.options;
      if (l.hasOwnProperty(h) || l.publicProperties && l.publicProperties.hasOwnProperty(h))
        return this[h];
      window.console && window.console.log('Property "' + h + `" doesn't exist. Please check for typo.`);
    };
    L.prototype.set = function(h, l, r2) {
      r2 = "undefined" === typeof r2 ? true : r2;
      var u2 = qa[this._defaultsKey];
      if ("options" === h)
        this.createUserOptions(l);
      else if (u2.hasOwnProperty(h) || u2.publicProperties && u2.publicProperties.hasOwnProperty(h) && "readWrite" === u2.publicProperties[h])
        this.options._isPlaceholder && this.createUserOptions(), this.options[h] = l;
      else {
        window.console && (u2.publicProperties && u2.publicProperties.hasOwnProperty(h) && "readOnly" === u2.publicProperties[h] ? window.console.log('Property "' + h + '" is read-only.') : window.console.log('Property "' + h + `" doesn't exist. Please check for typo.`));
        return;
      }
      r2 && (this.stockChart || this.chart || this).render();
    };
    L.prototype.addTo = function(h, l, r2, u2) {
      u2 = "undefined" === typeof u2 ? true : u2;
      var z2 = qa[this._defaultsKey];
      z2.hasOwnProperty(h) || z2.publicProperties && z2.publicProperties.hasOwnProperty(h) && "readWrite" === z2.publicProperties[h] ? (this.options._isPlaceholder && this.createUserOptions(), "undefined" === typeof this.options[h] && (this.options[h] = []), h = this.options[h], r2 = "undefined" === typeof r2 || null === r2 ? h.length : r2, h.splice(r2, 0, l), u2 && (this.stockChart || this.chart || this).render()) : window.console && (z2.publicProperties && z2.publicProperties.hasOwnProperty(h) && "readOnly" === z2.publicProperties[h] ? window.console.log('Property "' + h + '" is read-only.') : window.console.log('Property "' + h + `" doesn't exist. Please check for typo.`));
    };
    L.prototype.createUserOptions = function(h) {
      if ("undefined" !== typeof h || this.options._isPlaceholder)
        if (this.parent.options._isPlaceholder && this.parent.createUserOptions(), this.isOptionsInArray) {
          this.parent.options[this.optionsName] || (this.parent.options[this.optionsName] = []);
          var l = this.parent.options[this.optionsName], r2 = l.length;
          this.options._isPlaceholder || (Fa(l), r2 = l.indexOf(this.options));
          this.options = "undefined" === typeof h ? {} : h;
          l[r2] = this.options;
        } else
          this.options = "undefined" === typeof h ? {} : h, h = this.parent.options, this.optionsName ? l = this.optionsName : (l = this._defaultsKey) && 0 !== l.length ? (r2 = l.charAt(0).toLowerCase(), 1 < l.length && (r2 = r2.concat(l.slice(1))), l = r2) : l = void 0, h[l] = this.options;
    };
    L.prototype.remove = function(h) {
      h = "undefined" === typeof h ? true : h;
      if (this.isOptionsInArray) {
        var l = this.parent.options[this.optionsName];
        Fa(l);
        var r2 = l.indexOf(this.options);
        0 <= r2 && l.splice(r2, 1);
      } else
        delete this.parent.options[this.optionsName];
      h && (this.stockChart || this.chart || this).render();
    };
    L.prototype.updateOption = function(h) {
      !qa[this._defaultsKey] && Ja && console.log("defaults not set");
      var l = qa[this._defaultsKey], u2 = {}, z2 = this[h], E2 = this._themeOptionsKey, K2 = this._index;
      this.theme && r(this.parent) && r(E2) && r(K2) ? u2 = r(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && (this.parent.themeOptions && this.parent.themeOptions[E2]) && (null === K2 ? u2 = this.parent.themeOptions[E2] : 0 < this.parent.themeOptions[E2].length && (u2 = Math.min(this.parent.themeOptions[E2].length - 1, K2), u2 = this.parent.themeOptions[E2][u2]));
      this.themeOptions = u2;
      h in l && (z2 = h in this.options ? this.options[h] : u2 && h in u2 ? u2[h] : l[h]);
      if (z2 === this[h])
        return false;
      this[h] = z2;
      return true;
    };
    L.prototype.trackChanges = function(h) {
      if (!this.sessionVariables)
        throw "Session Variable Store not set";
      this.sessionVariables[h] = this.options[h];
    };
    L.prototype.isBeingTracked = function(h) {
      this.options._oldOptions || (this.options._oldOptions = {});
      return this.options._oldOptions[h] ? true : false;
    };
    L.prototype.hasOptionChanged = function(h) {
      if (!this.sessionVariables)
        throw "Session Variable Store not set";
      return this.sessionVariables[h] !== this.options[h];
    };
    L.prototype.addEventListener = function(h, l, r2) {
      h && l && (this._eventListeners[h] = this._eventListeners[h] || [], this._eventListeners[h].push({ context: r2 || this, eventHandler: l }));
    };
    L.prototype.removeEventListener = function(h, l) {
      if (h && l && this._eventListeners[h]) {
        for (var r2 = this._eventListeners[h], u2 = 0; u2 < r2.length; u2++)
          if (r2[u2].eventHandler === l) {
            r2[u2].splice(u2, 1);
            break;
          }
      }
    };
    L.prototype.removeAllEventListeners = function() {
      this._eventListeners = [];
    };
    L.prototype.dispatchEvent = function(h, l, r2) {
      if (h && this._eventListeners[h]) {
        l = l || {};
        for (var u2 = this._eventListeners[h], z2 = 0; z2 < u2.length; z2++)
          u2[z2].eventHandler.call(
            u2[z2].context,
            l
          );
      }
      "function" === typeof this[h] && this[h].call(r2 || this.chart, l);
    };
    Ga.prototype.registerSpace = function(h, l) {
      "top" === h ? this._topOccupied += l.height : "bottom" === h ? this._bottomOccupied += l.height : "left" === h ? this._leftOccupied += l.width : "right" === h && (this._rightOccupied += l.width);
    };
    Ga.prototype.unRegisterSpace = function(h, l) {
      "top" === h ? this._topOccupied -= l.height : "bottom" === h ? this._bottomOccupied -= l.height : "left" === h ? this._leftOccupied -= l.width : "right" === h && (this._rightOccupied -= l.width);
    };
    Ga.prototype.getFreeSpace = function() {
      return { x1: this._x1 + this._leftOccupied, y1: this._y1 + this._topOccupied, x2: this._x2 - this._rightOccupied, y2: this._y2 - this._bottomOccupied, width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied, height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied };
    };
    Ga.prototype.reset = function() {
      this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding;
    };
    pa(ka, L);
    ka.prototype._initialize = function() {
      r(this.padding) || "object" !== typeof this.padding ? this.topPadding = this.rightPadding = this.bottomPadding = this.leftPadding = Number(this.padding) | 0 : (this.topPadding = r(this.padding.top) ? 0 : Number(this.padding.top) | 0, this.rightPadding = r(this.padding.right) ? 0 : Number(this.padding.right) | 0, this.bottomPadding = r(this.padding.bottom) ? 0 : Number(this.padding.bottom) | 0, this.leftPadding = r(this.padding.left) ? 0 : Number(this.padding.left) | 0);
    };
    ka.prototype.render = function(h) {
      if (0 !== this.fontSize) {
        h && this.ctx.save();
        var l = this.ctx.font;
        this.ctx.textBaseline = this.textBaseline;
        var r2 = 0;
        this._isDirty && this.measureText(this.ctx);
        this.ctx.translate(this.x, this.y + r2);
        "middle" === this.textBaseline && (r2 = -this._lineHeight / 2);
        this.ctx.font = this._getFontString();
        this.ctx.rotate(Math.PI / 180 * this.angle);
        var u2 = 0, z2 = this.topPadding, E2 = null;
        this.ctx.roundRect || Aa(this.ctx);
        (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(0, r2, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
        this.ctx.fillStyle = this.fontColor;
        for (r2 = 0; r2 < this._wrappedText.lines.length; r2++) {
          E2 = this._wrappedText.lines[r2];
          if ("right" === this.horizontalAlign || "right" === this.textAlign)
            u2 = this.width - E2.width - this.rightPadding;
          else if ("left" === this.horizontalAlign || "left" === this.textAlign)
            u2 = this.leftPadding;
          else if ("center" === this.horizontalAlign || "center" === this.textAlign)
            u2 = (this.width - (this.leftPadding + this.rightPadding)) / 2 - E2.width / 2 + this.leftPadding;
          this.ctx.fillText(E2.text, u2, z2);
          z2 += E2.height;
        }
        this.ctx.font = l;
        h && this.ctx.restore();
      }
    };
    ka.prototype.setText = function(h) {
      this.text = h;
      this._isDirty = true;
      this._wrappedText = null;
    };
    ka.prototype.measureText = function() {
      this._lineHeight = Za(this.fontFamily, this.fontSize, this.fontWeight);
      if (null === this.maxWidth)
        throw "Please set maxWidth and height for TextBlock";
      this._wrapText(this.ctx);
      this._isDirty = false;
      return { width: this.width, height: this.height };
    };
    ka.prototype._getLineWithWidth = function(h, l, r2) {
      h = String(h);
      if (!h)
        return { text: "", width: 0 };
      var u2 = r2 = 0, z2 = h.length - 1, E2 = Infinity;
      for (this.ctx.font = this._getFontString(); u2 <= z2; ) {
        var E2 = Math.floor((u2 + z2) / 2), C = h.substr(0, E2 + 1);
        r2 = this.ctx.measureText(C).width;
        if (r2 < l)
          u2 = E2 + 1;
        else if (r2 > l)
          z2 = E2 - 1;
        else
          break;
      }
      r2 > l && 1 < C.length && (C = C.substr(0, C.length - 1), r2 = this.ctx.measureText(C).width);
      l = true;
      if (C.length === h.length || " " === h[C.length])
        l = false;
      l && (h = C.split(" "), 1 < h.length && h.pop(), C = h.join(" "), r2 = this.ctx.measureText(C).width);
      return { text: C, width: r2 };
    };
    ka.prototype._wrapText = function() {
      var h = new String(Ia(String(this.text))), r2 = [], u2 = this.ctx.font, z2 = 0, E2 = 0;
      this.ctx.font = this._getFontString();
      if (0 === this.frontSize)
        E2 = z2 = 0;
      else
        for (; 0 < h.length; ) {
          var K2 = this.maxHeight - (this.topPadding + this.bottomPadding), C = this._getLineWithWidth(h, this.maxWidth - (this.leftPadding + this.rightPadding), false);
          C.height = this._lineHeight;
          r2.push(C);
          var L2 = E2, E2 = Math.max(E2, C.width), z2 = z2 + C.height, h = Ia(h.slice(C.text.length, h.length));
          K2 && z2 > K2 && (C = r2.pop(), z2 -= C.height, E2 = L2);
        }
      this._wrappedText = { lines: r2, width: E2, height: z2 };
      this.width = E2 + (this.leftPadding + this.rightPadding);
      this.height = z2 + (this.topPadding + this.bottomPadding);
      this.ctx.font = u2;
    };
    ka.prototype._getFontString = function() {
      var h;
      h = this.fontStyle ? this.fontStyle + " " : "";
      h += this.fontWeight ? this.fontWeight + " " : "";
      h += this.fontSize ? this.fontSize + "px " : "";
      var r2 = this.fontFamily ? this.fontFamily + "" : "";
      !u && r2 && (r2 = r2.split(",")[0], "'" !== r2[0] && '"' !== r2[0] && (r2 = "'" + r2 + "'"));
      return h += r2;
    };
    pa(Va, L);
    pa(Ba, L);
    Ba.prototype.setLayout = function() {
      if (this.text) {
        var h = this.dockInsidePlotArea ? this.chart.plotArea : this.chart, l = h.layoutManager.getFreeSpace(), u2 = l.x1, z2 = l.y1, E2 = 0, K2 = 0, C = this.chart._menuButton && this.chart.exportEnabled && "top" === this.verticalAlign ? 40 : 0, L2, M2;
        "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (null === this.maxWidth && (this.maxWidth = l.width - 4 - C * ("center" === this.horizontalAlign ? 2 : 1)), K2 = 0.5 * l.height - this.margin - 2, E2 = 0) : "center" === this.verticalAlign && ("left" === this.horizontalAlign || "right" === this.horizontalAlign ? (null === this.maxWidth && (this.maxWidth = l.height - 4), K2 = 0.5 * l.width - this.margin - 2) : "center" === this.horizontalAlign && (null === this.maxWidth && (this.maxWidth = l.width - 4), K2 = 0.5 * l.height - 4));
        var Q;
        r(this.padding) || "number" !== typeof this.padding ? r(this.padding) || "object" !== typeof this.padding || (Q = this.padding.top ? this.padding.top : this.padding.bottom ? this.padding.bottom : 0, Q += this.padding.bottom ? this.padding.bottom : this.padding.top ? this.padding.top : 0) : Q = 2 * this.padding;
        this.wrap || (K2 = Math.min(K2, 1.5 * this.fontSize + Q));
        K2 = new ka(this.ctx, {
          fontSize: this.fontSize,
          fontFamily: this.fontFamily,
          fontColor: this.fontColor,
          fontStyle: this.fontStyle,
          fontWeight: this.fontWeight,
          horizontalAlign: this.horizontalAlign,
          textAlign: this.horizontalAlign,
          verticalAlign: this.verticalAlign,
          borderColor: this.borderColor,
          borderThickness: this.borderThickness,
          backgroundColor: this.backgroundColor,
          maxWidth: this.maxWidth,
          maxHeight: K2,
          cornerRadius: this.cornerRadius,
          text: this.text,
          padding: this.padding,
          textBaseline: "middle"
        });
        Q = K2.measureText();
        "top" === this.verticalAlign || "bottom" === this.verticalAlign ? ("top" === this.verticalAlign ? (z2 = l.y1 + 2 + this.fontSize / 2 + 4, M2 = "top") : "bottom" === this.verticalAlign && (z2 = l.y2 - 2 - Q.height + this.fontSize / 2 + 4, M2 = "bottom"), "left" === this.horizontalAlign ? u2 = l.x1 + 2 : "center" === this.horizontalAlign ? u2 = l.x1 + l.width / 2 - Q.width / 2 : "right" === this.horizontalAlign && (u2 = l.x2 - 2 - Q.width - C), L2 = this.horizontalAlign, this.width = Q.width, this.height = Q.height) : "center" === this.verticalAlign && ("left" === this.horizontalAlign ? (u2 = l.x1 + 2 + (this.fontSize / 2 + 4), z2 = l.y2 - 2 - (this.maxWidth / 2 - Q.width / 2), E2 = -90, M2 = "left", this.width = Q.height, this.height = Q.width) : "right" === this.horizontalAlign ? (u2 = l.x2 - 2 - (this.fontSize / 2 + 4), z2 = l.y1 + 2 + (this.maxWidth / 2 - Q.width / 2), E2 = 90, M2 = "right", this.width = Q.height, this.height = Q.width) : "center" === this.horizontalAlign && (z2 = h.y1 + (h.height / 2 - Q.height / 2) + this.fontSize / 2 + 4, u2 = h.x1 + (h.width / 2 - Q.width / 2), M2 = "center", this.width = Q.width, this.height = Q.height), L2 = "center");
        K2.x = u2;
        K2.y = z2;
        K2.angle = E2;
        K2.horizontalAlign = L2;
        this._textBlock = K2;
        h.layoutManager.registerSpace(M2, { width: this.width + ("left" === M2 || "right" === M2 ? this.margin + 2 : 0), height: this.height + ("top" === M2 || "bottom" === M2 ? this.margin + 2 : 0) });
        this.bounds = { x1: u2, y1: z2, x2: u2 + this.width, y2: z2 + this.height };
        this.ctx.textBaseline = "top";
      }
    };
    Ba.prototype.render = function() {
      this._textBlock && this._textBlock.render(true);
    };
    pa(Ka, L);
    Ka.prototype.setLayout = Ba.prototype.setLayout;
    Ka.prototype.render = Ba.prototype.render;
    Wa.prototype.get = function(h, r2) {
      var u2 = null;
      0 < this.pool.length ? (u2 = this.pool.pop(), Oa(u2, h, r2)) : u2 = va(h, r2);
      return u2;
    };
    Wa.prototype.release = function(h) {
      this.pool.push(h);
    };
    pa(La, L);
    var Ra = { addTheme: function(h, r2) {
      db[h] = r2;
    }, addColorSet: function(h, r2) {
      Ca[h] = r2;
    }, addCultureInfo: function(h, r2) {
      Ma[h] = r2;
    }, formatNumber: function(h, r2, u2) {
      u2 = u2 || "en";
      if (Ma[u2])
        return ea(h, r2 || "#,##0.##", new La(u2));
      throw "Unknown Culture Name";
    }, formatDate: function(h, r2, u2) {
      u2 = u2 || "en";
      if (Ma[u2])
        return Da(h, r2 || "DD MMM YYYY", new La(u2));
      throw "Unknown Culture Name";
    } };
    module.exports = Ra;
    E = Ra.Chart = function() {
      function h(a, d) {
        return a.x - d.x;
      }
      function l(a, d, c) {
        d = d || {};
        r(c) ? (this.predefinedThemes = db, this.optionsName = this.parent = this.index = null) : (this.parent = c.parent, this.index = c.index, this.predefinedThemes = c.predefinedThemes, this.optionsName = c.optionsName, this.stockChart = c.stockChart, this.panel = a, this.isOptionsInArray = c.isOptionsInArray);
        this.theme = r(d.theme) || r(this.predefinedThemes[d.theme]) ? "light1" : d.theme;
        l.base.constructor.call(this, "Chart", this.optionsName, d, this.index, this.parent);
        var b = this;
        this._containerId = a;
        this._objectsInitialized = false;
        this.overlaidCanvasCtx = this.ctx = null;
        this._indexLabels = [];
        this._panTimerId = 0;
        this._lastTouchEventType = "";
        this._lastTouchData = null;
        this.isAnimating = false;
        this.renderCount = 0;
        this.disableToolTip = this.animatedRender = false;
        this.canvasPool = new Wa();
        this.allDOMEventHandlers = [];
        this.panEnabled = false;
        this._defaultCursor = "default";
        this.plotArea = { canvas: null, ctx: null, x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 };
        this._dataInRenderedOrder = [];
        (this.container = "string" === typeof this._containerId ? document.getElementById(this._containerId) : this._containerId) ? (this.container.innerHTML = "", d = a = 0, a = this.options.width ? this.width : 0 < this.container.clientWidth ? this.container.clientWidth : this.width, d = this.options.height ? this.height : 0 < this.container.clientHeight ? this.container.clientHeight : this.height, this.width = a, this.height = d, this.x1 = this.y1 = 0, this.x2 = this.width, this.y2 = this.height, this.selectedColorSet = "undefined" !== typeof Ca[this.colorSet] ? Ca[this.colorSet] : Ca.colorSet1, this._canvasJSContainer = document.createElement("div"), this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container"), this._canvasJSContainer.style.position = "relative", this._canvasJSContainer.style.textAlign = "left", this._canvasJSContainer.style.cursor = "auto", this._canvasJSContainer.style.direction = "ltr", u || (this._canvasJSContainer.style.height = "0px"), this.container.appendChild(this._canvasJSContainer), this.canvas = va(a, d), this._preRenderCanvas = va(a, d), this.canvas.style.position = "absolute", this.canvas.style.WebkitUserSelect = "none", this.canvas.style.MozUserSelect = "none", this.canvas.style.msUserSelect = "none", this.canvas.style.userSelect = "none", this.canvas.getContext && (this._canvasJSContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", Aa(this.ctx), this._preRenderCtx = this._preRenderCanvas.getContext("2d"), this._preRenderCtx.textBaseline = "top", Aa(this._preRenderCtx), u ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = va(a, d), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas), this.plotArea.ctx = this.plotArea.canvas.getContext("2d")), this.overlaidCanvas = va(a, d), this.overlaidCanvas.style.position = "absolute", this.overlaidCanvas.style.webkitTapHighlightColor = "transparent", this.overlaidCanvas.style.WebkitUserSelect = "none", this.overlaidCanvas.style.MozUserSelect = "none", this.overlaidCanvas.style.msUserSelect = "none", this.overlaidCanvas.style.userSelect = "none", this.overlaidCanvas.getContext && (this._canvasJSContainer.appendChild(this.overlaidCanvas), this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline = "top", Aa(this.overlaidCanvasCtx)), this._eventManager = new aa2(this), this.windowResizeHandler = R(window, "resize", function() {
          b._updateSize() && b.render();
        }, this.allDOMEventHandlers), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"), X(this._toolBar, {
          position: "absolute",
          right: "1px",
          top: "1px"
        }), this._canvasJSContainer.appendChild(this._toolBar), this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height }, R(this.overlaidCanvas, "click", function(a2) {
          b._mouseEventHandler(a2);
        }, this.allDOMEventHandlers), R(this.overlaidCanvas, "mousemove", function(a2) {
          b._mouseEventHandler(a2);
        }, this.allDOMEventHandlers), R(this.overlaidCanvas, "mouseup", function(a2) {
          b._mouseEventHandler(a2);
        }, this.allDOMEventHandlers), R(
          this.overlaidCanvas,
          "mousedown",
          function(a2) {
            b._mouseEventHandler(a2);
            xa(b._dropdownMenu);
          },
          this.allDOMEventHandlers
        ), R(this.overlaidCanvas, "mouseout", function(a2) {
          b._mouseEventHandler(a2);
        }, this.allDOMEventHandlers), R(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(a2) {
          b._touchEventHandler(a2);
        }, this.allDOMEventHandlers), R(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(a2) {
          b._touchEventHandler(a2);
        }, this.allDOMEventHandlers), R(
          this.overlaidCanvas,
          window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend",
          function(a2) {
            b._touchEventHandler(a2);
          },
          this.allDOMEventHandlers
        ), R(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(a2) {
          b._touchEventHandler(a2);
        }, this.allDOMEventHandlers), this.toolTip = new W2(this, this.options.toolTip), this.data = null, this.axisX = [], this.axisX2 = [], this.axisY = [], this.axisY2 = [], this.sessionVariables = { axisX: [], axisX2: [], axisY: [], axisY2: [] })) : window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found');
      }
      function z2(a, d) {
        for (var c = [], b, e = 0; e < a.length; e++)
          if (0 == e)
            c.push(a[0]);
          else {
            var g, p, t;
            t = e - 1;
            g = 0 === t ? 0 : t - 1;
            p = t === a.length - 1 ? t : t + 1;
            b = Math.abs((a[p].x - a[g].x) / (0 === a[p].x - a[t].x ? 0.01 : a[p].x - a[t].x)) * (d - 1) / 2 + 1;
            var D = (a[p].x - a[g].x) / b;
            b = (a[p].y - a[g].y) / b;
            c[c.length] = a[t].x > a[g].x && 0 < D || a[t].x < a[g].x && 0 > D ? { x: a[t].x + D / 3, y: a[t].y + b / 3 } : { x: a[t].x, y: a[t].y + (1 === c.length ? 0 : b / 9) };
            t = e;
            g = 0 === t ? 0 : t - 1;
            p = t === a.length - 1 ? t : t + 1;
            b = Math.abs((a[p].x - a[g].x) / (0 === a[t].x - a[g].x ? 0.01 : a[t].x - a[g].x)) * (d - 1) / 2 + 1;
            D = (a[p].x - a[g].x) / b;
            b = (a[p].y - a[g].y) / b;
            c[c.length] = a[t].x > a[g].x && 0 < D || a[t].x < a[g].x && 0 > D ? { x: a[t].x - D / 3, y: a[t].y - b / 3 } : { x: a[t].x, y: a[t].y - b / 9 };
            c[c.length] = a[e];
          }
        return c;
      }
      function E2(a, d, c, b, e, g, p, t, D, k) {
        var m = 0;
        k ? (p.color = g, t.color = g) : k = 1;
        m = D ? Math.abs(e - c) : Math.abs(b - d);
        m = 0 < p.trimLength ? Math.abs(m * p.trimLength / 100) : Math.abs(m - p.length);
        D ? (c += m / 2, e -= m / 2) : (d += m / 2, b -= m / 2);
        var m = 1 === Math.round(p.thickness) % 2 ? 0.5 : 0, n = 1 === Math.round(t.thickness) % 2 ? 0.5 : 0;
        a.save();
        a.globalAlpha = k;
        a.strokeStyle = t.color || g;
        a.lineWidth = t.thickness || 2;
        a.setLineDash && a.setLineDash(K(t.dashType, t.thickness));
        a.beginPath();
        D && 0 < t.thickness ? (a.moveTo(b - p.thickness / 2, Math.round((c + e) / 2) - n), a.lineTo(d + p.thickness / 2, Math.round((c + e) / 2) - n)) : 0 < t.thickness && (a.moveTo(Math.round((d + b) / 2) - n, c + p.thickness / 2), a.lineTo(Math.round((d + b) / 2) - n, e - p.thickness / 2));
        a.stroke();
        a.strokeStyle = p.color || g;
        a.lineWidth = p.thickness || 2;
        a.setLineDash && a.setLineDash(K(p.dashType, p.thickness));
        a.beginPath();
        D && 0 < p.thickness ? (a.moveTo(b - m, c), a.lineTo(b - m, e), a.moveTo(d + m, c), a.lineTo(d + m, e)) : 0 < p.thickness && (a.moveTo(d, c + m), a.lineTo(b, c + m), a.moveTo(d, e - m), a.lineTo(b, e - m));
        a.stroke();
        a.restore();
      }
      function M2(a, d) {
        M2.base.constructor.call(this, "Legend", "legend", d, null, a);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        this.ghostCtx = this.chart._eventManager.ghostCtx;
        this.items = [];
        this.optionsName = "legend";
        this.height = this.width = 0;
        this.orientation = null;
        this.dataSeries = [];
        this.bounds = { x1: null, y1: null, x2: null, y2: null };
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.lineHeight = Za(this.fontFamily, this.fontSize, this.fontWeight);
        this.horizontalSpacing = this.fontSize;
      }
      function S2(a, d, c, b) {
        S2.base.constructor.call(this, "DataSeries", "data", d, c, a);
        this.chart = a;
        this.canvas = a.canvas;
        this._ctx = a.canvas.ctx;
        this.index = c;
        this.noDataPointsInPlotArea = 0;
        this.id = b;
        this.chart._eventManager.objectMap[b] = { id: b, objectType: "dataSeries", dataSeriesIndex: c };
        a = d.dataPoints ? d.dataPoints.length : 0;
        this.dataPointEOs = [];
        for (d = 0; d < a; d++)
          this.dataPointEOs[d] = {};
        this.dataPointIds = [];
        this.plotUnit = [];
        this.axisY = this.axisX = null;
        this.optionsName = "data";
        this.isOptionsInArray = true;
        null === this.fillOpacity && (this.type.match(/area/i) ? this.fillOpacity = 0.7 : this.fillOpacity = 1);
        this.axisPlacement = this.getDefaultAxisPlacement();
        "undefined" === typeof this.options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize));
      }
      function C(a, d, c, b, e, g) {
        C.base.constructor.call(this, "Axis", d, c, b, a);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = a.ctx;
        this.intervalStartPosition = this.maxHeight = this.maxWidth = 0;
        this.labels = [];
        this.dataSeries = [];
        this._stripLineLabels = this._ticks = this._labels = null;
        this.dataInfo = { min: Infinity, max: -Infinity, viewPortMin: Infinity, viewPortMax: -Infinity, minDiff: Infinity };
        this.isOptionsInArray = true;
        "axisX" === e ? ("left" === g || "bottom" === g ? (this.optionsName = "axisX", r(this.chart.sessionVariables.axisX[b]) && (this.chart.sessionVariables.axisX[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisX[b]) : (this.optionsName = "axisX2", r(this.chart.sessionVariables.axisX2[b]) && (this.chart.sessionVariables.axisX2[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisX2[b]), this.options.interval || (this.intervalType = null)) : "left" === g || "bottom" === g ? (this.optionsName = "axisY", r(this.chart.sessionVariables.axisY[b]) && (this.chart.sessionVariables.axisY[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisY[b]) : (this.optionsName = "axisY2", r(this.chart.sessionVariables.axisY2[b]) && (this.chart.sessionVariables.axisY2[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisY2[b]);
        "undefined" === typeof this.options.titleFontSize && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
        "undefined" === typeof this.options.labelFontSize && (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
        this.type = e;
        "axisX" !== e || c && "undefined" !== typeof c.gridThickness || (this.gridThickness = 0);
        this._position = g;
        this.lineCoordinates = { x1: null, y1: null, x2: null, y2: null, width: null };
        this.labelAngle = (this.labelAngle % 360 + 360) % 360;
        90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360);
        this.options.scaleBreaks && (this.scaleBreaks = new ga2(this.chart, this.options.scaleBreaks, ++this.chart._eventManager.lastObjectId, this));
        this.stripLines = [];
        if (this.options.stripLines && 0 < this.options.stripLines.length)
          for (a = 0; a < this.options.stripLines.length; a++)
            this.stripLines.push(new Q(this.chart, this.options.stripLines[a], a, ++this.chart._eventManager.lastObjectId, this));
        this.options.crosshair && (this.crosshair = new da2(
          this.chart,
          this.options.crosshair,
          this
        ));
        this._titleTextBlock = null;
        this.hasOptionChanged("viewportMinimum") && null === this.viewportMinimum && (this.options.viewportMinimum = void 0, this.sessionVariables.viewportMinimum = null);
        this.hasOptionChanged("viewportMinimum") || isNaN(this.sessionVariables.newViewportMinimum) || null === this.sessionVariables.newViewportMinimum ? this.sessionVariables.newViewportMinimum = null : this.viewportMinimum = this.sessionVariables.newViewportMinimum;
        this.hasOptionChanged("viewportMaximum") && null === this.viewportMaximum && (this.options.viewportMaximum = void 0, this.sessionVariables.viewportMaximum = null);
        this.hasOptionChanged("viewportMaximum") || isNaN(this.sessionVariables.newViewportMaximum) || null === this.sessionVariables.newViewportMaximum ? this.sessionVariables.newViewportMaximum = null : this.viewportMaximum = this.sessionVariables.newViewportMaximum;
        null !== this.minimum && null !== this.viewportMinimum && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
        null !== this.maximum && null !== this.viewportMaximum && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
        this.trackChanges("viewportMinimum");
        this.trackChanges("viewportMaximum");
      }
      function ga2(a, d, c, b) {
        ga2.base.constructor.call(this, "ScaleBreaks", "scaleBreaks", d, null, b);
        this.id = c;
        this.chart = a;
        this.ctx = this.chart.ctx;
        this.axis = b;
        this.optionsName = "scaleBreaks";
        this.isOptionsInArray = false;
        this._appliedBreaks = [];
        this.customBreaks = [];
        this.autoBreaks = [];
        "string" === typeof this.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 8 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.spacing && (this.spacing = 8);
        this.autoCalculate && (this.maxNumberOfAutoBreaks = Math.min(this.maxNumberOfAutoBreaks, 5));
        if (this.options.customBreaks && 0 < this.options.customBreaks.length) {
          for (a = 0; a < this.options.customBreaks.length; a++)
            this.customBreaks.push(new ba2(this.chart, "customBreaks", this.options.customBreaks[a], a, ++this.chart._eventManager.lastObjectId, this)), "number" === typeof this.customBreaks[a].startValue && ("number" === typeof this.customBreaks[a].endValue && this.customBreaks[a].endValue !== this.customBreaks[a].startValue) && this._appliedBreaks.push(this.customBreaks[a]);
          this._appliedBreaks.sort(function(a2, b2) {
            return a2.startValue - b2.startValue;
          });
          for (a = 0; a < this._appliedBreaks.length - 1; a++)
            this._appliedBreaks[a].endValue >= this._appliedBreaks[a + 1].startValue && (this._appliedBreaks[a].endValue = Math.max(this._appliedBreaks[a].endValue, this._appliedBreaks[a + 1].endValue), window.console && window.console.log("CanvasJS Error: Breaks " + a + " and " + (a + 1) + " are overlapping."), this._appliedBreaks.splice(a, 2), a--);
        }
      }
      function ba2(a, d, c, b, e, g) {
        ba2.base.constructor.call(this, "Break", d, c, b, g);
        this.id = e;
        this.chart = a;
        this.ctx = this.chart.ctx;
        this.scaleBreaks = g;
        this.optionsName = d;
        this.isOptionsInArray = true;
        this.type = c.type ? this.type : g.type;
        this.fillOpacity = r(c.fillOpacity) ? g.fillOpacity : this.fillOpacity;
        this.lineThickness = r(c.lineThickness) ? g.lineThickness : this.lineThickness;
        this.color = c.color ? this.color : g.color;
        this.lineColor = c.lineColor ? this.lineColor : g.lineColor;
        this.lineDashType = c.lineDashType ? this.lineDashType : g.lineDashType;
        !r(this.startValue) && this.startValue.getTime && (this.startValue = this.startValue.getTime());
        !r(this.endValue) && this.endValue.getTime && (this.endValue = this.endValue.getTime());
        "number" === typeof this.startValue && ("number" === typeof this.endValue && this.endValue < this.startValue) && (a = this.startValue, this.startValue = this.endValue, this.endValue = a);
        this.spacing = "undefined" === typeof c.spacing ? g.spacing : c.spacing;
        "string" === typeof this.options.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 0 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.options.spacing && (this.spacing = g.spacing);
        this.size = g.parent.logarithmic ? 1 : 0;
      }
      function Q(a, d, c, b, e) {
        Q.base.constructor.call(this, "StripLine", "stripLines", d, c, e);
        this.id = b;
        this.chart = a;
        this.ctx = this.chart.ctx;
        this.label = this.label;
        this.axis = e;
        this.optionsName = "stripLines";
        this.isOptionsInArray = true;
        this._thicknessType = "pixel";
        null !== this.startValue && null !== this.endValue && (this.value = e.logarithmic ? Math.sqrt((this.startValue.getTime ? this.startValue.getTime() : this.startValue) * (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) : ((this.startValue.getTime ? this.startValue.getTime() : this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2, this._thicknessType = null);
      }
      function da2(a, d, c) {
        da2.base.constructor.call(this, "Crosshair", "crosshair", d, null, c);
        this.chart = a;
        this.ctx = this.chart.ctx;
        this.axis = c;
        this.optionsName = "crosshair";
        this._thicknessType = "pixel";
      }
      function W2(a, d) {
        W2.base.constructor.call(this, "ToolTip", "toolTip", d, null, a);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        this.currentDataPointIndex = this.currentSeriesIndex = -1;
        this._prevY = this._prevX = NaN;
        this.containerTransitionDuration = 0.1;
        this.mozContainerTransition = this.getContainerTransition(this.containerTransitionDuration);
        this.optionsName = "toolTip";
        this._initialize();
      }
      function aa2(a) {
        this.chart = a;
        this.lastObjectId = 0;
        this.objectMap = [];
        this.rectangularRegionEventSubscriptions = [];
        this.previousDataPointEventObject = null;
        this.ghostCanvas = va(this.chart.width, this.chart.height, true);
        this.ghostCtx = this.ghostCanvas.getContext("2d");
        this.mouseoveredObjectMaps = [];
      }
      function ja2(a) {
        this.chart = a;
        this.ctx = this.chart.plotArea.ctx;
        this.animations = [];
        this.animationRequestId = null;
      }
      pa(l, L);
      l.prototype.destroy = function() {
        var a = this.allDOMEventHandlers;
        this._animator && this._animator.cancelAllAnimations();
        this._panTimerId && clearTimeout(this._panTimerId);
        for (var d = 0; d < a.length; d++) {
          var c = a[d][0], b = a[d][1], e = a[d][2], g = a[d][3], g = g || false;
          c.removeEventListener ? c.removeEventListener(b, e, g) : c.detachEvent && c.detachEvent("on" + b, e);
        }
        this.allDOMEventHandlers = [];
        for (this.removeAllEventListeners(); this._canvasJSContainer && this._canvasJSContainer.hasChildNodes(); )
          this._canvasJSContainer.removeChild(this._canvasJSContainer.lastChild);
        for (; this.container && this.container.hasChildNodes(); )
          this.container.removeChild(this.container.lastChild);
        for (; this._dropdownMenu && this._dropdownMenu.hasChildNodes(); )
          this._dropdownMenu.removeChild(this._dropdownMenu.lastChild);
        this.container = this._canvasJSContainer = null;
        this.toolTip.container = null;
        this.canvas && za(this.canvas);
        this.overlaidCanvas && za(this.overlaidCanvas);
        this._preRenderCanvas && za(this._preRenderCanvas);
        this._breaksCanvas && za(this._breaksCanvas);
        this._eventManager && this._eventManager.ghostCanvas && za(this._eventManager.ghostCanvas);
        this._toolBar = this._dropdownMenu = this._menuButton = this._resetButton = this._zoomButton = null;
      };
      l.prototype._updateOptions = function() {
        var a = this;
        this.updateOption("width");
        this.updateOption("height");
        this.updateOption("dataPointWidth");
        this.updateOption("dataPointMinWidth");
        this.updateOption("dataPointMaxWidth");
        this.updateOption("interactivityEnabled");
        this.updateOption("theme");
        this.updateOption("colorSet") && (this.selectedColorSet = "undefined" !== typeof Ca[this.colorSet] ? Ca[this.colorSet] : Ca.colorSet1);
        this.updateOption("backgroundColor");
        this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
        this.updateOption("culture");
        this._cultureInfo = new La(this.options.culture);
        this.updateOption("animationEnabled");
        this.animationEnabled = this.animationEnabled && u;
        this.updateOption("animationDuration");
        this.updateOption("rangeChanging");
        this.updateOption("rangeChanged");
        this.updateOption("exportEnabled");
        this.updateOption("exportFileName");
        this.updateOption("zoomType");
        this.toolbar = new Va(this, this.options.toolbar);
        if (this.options.zoomEnabled || this.panEnabled) {
          if (this._zoomButton)
            X(this._zoomButton, {
              borderRight: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor,
              backgroundColor: a.toolbar.itemBackgroundColor,
              color: a.toolbar.fontColor
            }), ta(this, this._zoomButton, "zoom");
          else {
            var d = false;
            xa(this._zoomButton = document.createElement("button"));
            ta(this, this._zoomButton, "pan");
            this._toolBar.appendChild(this._zoomButton);
            this._zoomButton.style.borderRight = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor;
            R(this._zoomButton, "touchstart", function(a2) {
              d = true;
            }, this.allDOMEventHandlers);
            R(this._zoomButton, "click", function() {
              a.zoomEnabled ? (a.zoomEnabled = false, a.panEnabled = true, ta(a, a._zoomButton, "zoom")) : (a.zoomEnabled = true, a.panEnabled = false, ta(a, a._zoomButton, "pan"));
              a.render();
            }, this.allDOMEventHandlers);
            R(this._zoomButton, "mousemove", function() {
              d ? d = false : (X(a._zoomButton, { backgroundColor: a.toolbar.itemBackgroundColorOnHover, color: a.toolbar.fontColorOnHover, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && X(a._zoomButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }));
            }, this.allDOMEventHandlers);
            R(this._zoomButton, "mouseout", function() {
              d || (X(
                a._zoomButton,
                { backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor, transition: "0.4s", WebkitTransition: "0.4s" }
              ), 0 >= navigator.userAgent.search("MSIE") && X(a._zoomButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
            }, this.allDOMEventHandlers);
          }
          this._resetButton ? (X(this._resetButton, { borderRight: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor }), this._resetButton.title = this._cultureInfo.resetText) : (d = false, xa(this._resetButton = document.createElement("button")), ta(this, this._resetButton, "reset"), this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.buttonBorderThickness : 0) + "px solid " + this.toolbar.buttonBorderColor, this._toolBar.appendChild(this._resetButton), R(this._resetButton, "touchstart", function(a2) {
            d = true;
          }, this.allDOMEventHandlers), R(this._resetButton, "click", function() {
            a.toolTip.hide();
            a.toolTip && a.toolTip.enabled && a.toolTip.dispatchEvent(
              "hidden",
              { chart: a, toolTip: a.toolTip },
              a.toolTip
            );
            a.zoomEnabled || a.panEnabled ? (a.zoomEnabled = true, a.panEnabled = false, ta(a, a._zoomButton, "pan"), a._defaultCursor = "default", a.overlaidCanvas.style.cursor = a._defaultCursor) : (a.zoomEnabled = false, a.panEnabled = false);
            if (a.sessionVariables.axisX)
              for (var b = 0; b < a.sessionVariables.axisX.length; b++)
                a.sessionVariables.axisX[b].newViewportMinimum = null, a.sessionVariables.axisX[b].newViewportMaximum = null;
            if (a.sessionVariables.axisX2)
              for (b = 0; b < a.sessionVariables.axisX2.length; b++)
                a.sessionVariables.axisX2[b].newViewportMinimum = null, a.sessionVariables.axisX2[b].newViewportMaximum = null;
            if (a.sessionVariables.axisY)
              for (b = 0; b < a.sessionVariables.axisY.length; b++)
                a.sessionVariables.axisY[b].newViewportMinimum = null, a.sessionVariables.axisY[b].newViewportMaximum = null;
            if (a.sessionVariables.axisY2)
              for (b = 0; b < a.sessionVariables.axisY2.length; b++)
                a.sessionVariables.axisY2[b].newViewportMinimum = null, a.sessionVariables.axisY2[b].newViewportMaximum = null;
            a.resetOverlayedCanvas();
            0 >= navigator.userAgent.search("MSIE") && X(
              a._resetButton.childNodes[0],
              { WebkitFilter: "invert(0%)", filter: "invert(0%)" }
            );
            xa(a._zoomButton, a._resetButton);
            a.stockChart && (a.stockChart._rangeEventParameter = { stockChart: a.stockChart, source: "chart", index: a.stockChart.charts.indexOf(a), minimum: null, maximum: null });
            a._dispatchRangeEvent("rangeChanging", "reset");
            a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanging", a.stockChart.dispatchEvent("rangeChanging", a.stockChart._rangeEventParameter, a.stockChart));
            a.render();
            a.syncCharts && a.syncCharts(null, null);
            a._dispatchRangeEvent(
              "rangeChanged",
              "reset"
            );
            a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanged", a.stockChart.dispatchEvent("rangeChanged", a.stockChart._rangeEventParameter, a.stockChart));
          }, this.allDOMEventHandlers), R(
            this._resetButton,
            "mousemove",
            function() {
              d || (X(a._resetButton, { backgroundColor: a.toolbar.itemBackgroundColorOnHover, color: a.toolbar.fontColorOnHover, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && X(a._resetButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }));
            },
            this.allDOMEventHandlers
          ), R(this._resetButton, "mouseout", function() {
            d || (X(a._resetButton, { backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && X(a._resetButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
          }, this.allDOMEventHandlers), this.overlaidCanvas.style.cursor = a._defaultCursor);
          this.zoomEnabled || this.panEnabled || (this._zoomButton ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText ? (this.panEnabled = true, this.zoomEnabled = false) : (this.zoomEnabled = true, this.panEnabled = false), Na(a._zoomButton, a._resetButton)) : (this.zoomEnabled = true, this.panEnabled = false));
        } else
          this.panEnabled = this.zoomEnabled = false;
        ib(this);
        "none" !== this._toolBar.style.display && this._zoomButton && (this.panEnabled ? ta(a, a._zoomButton, "zoom") : ta(a, a._zoomButton, "pan"), a._resetButton.getAttribute("state") !== a._cultureInfo.resetText && ta(a, a._resetButton, "reset"));
        this.options.toolTip && this.toolTip.options !== this.options.toolTip && (this.toolTip.options = this.options.toolTip);
        for (var c in this.toolTip.options)
          this.toolTip.options.hasOwnProperty(c) && this.toolTip.updateOption(c);
      };
      l.prototype._updateSize = function() {
        var a;
        a = [this.canvas, this.overlaidCanvas, this._eventManager.ghostCanvas];
        var d = 0, c = 0;
        this.options.width ? d = this.width : this.width = d = 0 < this.container.clientWidth ? this.container.clientWidth : this.width;
        this.options.height ? c = this.height : this.height = c = 0 < this.container.clientHeight ? this.container.clientHeight : this.height;
        if (this.canvas.width !== d * ma || this.canvas.height !== c * ma) {
          for (var b = 0; b < a.length; b++)
            Oa(a[b], d, c);
          this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height, width: this.width, height: this.height };
          a = true;
        } else
          a = false;
        return a;
      };
      l.prototype._initialize = function() {
        this.isNavigator = r(this.parent) || r(this.parent._defaultsKey) || "Navigator" !== this.parent._defaultsKey ? false : true;
        this._animator ? this._animator.cancelAllAnimations() : this._animator = new ja2(this);
        this.removeAllEventListeners();
        this.disableToolTip = false;
        this._axes = [];
        this.funnelPyramidClickHandler = this.pieDoughnutClickHandler = null;
        this._updateOptions();
        this.animatedRender = u && this.animationEnabled && 0 === this.renderCount;
        this._updateSize();
        this.clearCanvas();
        this.ctx.beginPath();
        this.axisX = [];
        this.axisX2 = [];
        this.axisY = [];
        this.axisY2 = [];
        this._indexLabels = [];
        this._dataInRenderedOrder = [];
        this._events = [];
        this._eventManager && this._eventManager.reset();
        this.plotInfo = { axisPlacement: null, plotTypes: [] };
        this.layoutManager = new Ga(0, 0, this.width, this.height, this.isNavigator ? 0 : 2);
        this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
        this.data = [];
        this.title = null;
        this.subtitles = [];
        var a = 0, d = null;
        if (this.options.data) {
          for (var c = 0; c < this.options.data.length; c++)
            if (a++, !this.options.data[c].type || 0 <= l._supportedChartTypes.indexOf(this.options.data[c].type)) {
              var b = new S2(this, this.options.data[c], a - 1, ++this._eventManager.lastObjectId);
              "error" === b.type && (b.linkedDataSeriesIndex = r(this.options.data[c].linkedDataSeriesIndex) ? c - 1 : this.options.data[c].linkedDataSeriesIndex, 0 > b.linkedDataSeriesIndex || b.linkedDataSeriesIndex >= this.options.data.length || "number" !== typeof b.linkedDataSeriesIndex || "error" === this.options.data[b.linkedDataSeriesIndex].type) && (b.linkedDataSeriesIndex = null);
              null === b.name && (b.name = "DataSeries " + a);
              null === b.color ? 1 < this.options.data.length ? (b._colorSet = [this.selectedColorSet[b.index % this.selectedColorSet.length]], b.color = this.selectedColorSet[b.index % this.selectedColorSet.length]) : b._colorSet = "line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "candlestick" === b.type || "ohlc" === b.type || "waterfall" === b.type || "boxAndWhisker" === b.type ? [this.selectedColorSet[0]] : this.selectedColorSet : b._colorSet = [b.color];
              null === b.markerSize && (("line" === b.type || "stepLine" === b.type || "spline" === b.type || 0 <= b.type.toLowerCase().indexOf("area")) && b.dataPoints && b.dataPoints.length < this.width / 16 || "scatter" === b.type) && (b.markerSize = 8);
              "bubble" !== b.type && "scatter" !== b.type || !b.dataPoints || (b.dataPoints.some ? b.dataPoints.some(function(a2) {
                return a2.x;
              }) && b.dataPoints.sort(h) : b.dataPoints.sort(h));
              this.data.push(b);
              var e = b.axisPlacement, d = d || e, g;
              "normal" === e ? "xySwapped" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + b.type + '" with bar chart' : "none" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "normal") : "xySwapped" === e ? "normal" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + b.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped") : "none" === e ? "normal" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + b.type + '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + b.type + '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none") : null === e && "none" === this.plotInfo.axisPlacement && (g = 'You cannot combine "' + b.type + '" with pie chart');
              if (g && window.console) {
                window.console.log(g);
                return;
              }
            }
          for (c = 0; c < this.data.length; c++) {
            if ("none" == d && "error" === this.data[c].type && window.console) {
              window.console.log('You cannot combine "' + b.type + '" with error chart');
              return;
            }
            "error" === this.data[c].type && (this.data[c].axisPlacement = this.plotInfo.axisPlacement = d || "normal", this.data[c]._linkedSeries = null === this.data[c].linkedDataSeriesIndex ? null : this.data[this.data[c].linkedDataSeriesIndex]);
          }
        }
        this._objectsInitialized = true;
        this._plotAreaElements = [];
      };
      l._supportedChartTypes = Fa("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeBar rangeArea rangeSplineArea pie doughnut funnel pyramid waterfall".split(" "));
      l.prototype.setLayout = function() {
        for (var a = this._plotAreaElements, d = 0; d < this.data.length; d++)
          if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) {
            if (!this.data[d].axisYType || "primary" === this.data[d].axisYType)
              if (this.options.axisY && 0 < this.options.axisY.length) {
                if (!this.axisY.length)
                  for (var c = 0; c < this.options.axisY.length; c++)
                    "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[c] = new C(this, "axisY", this.options.axisY[c], c, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[c] = new C(
                      this,
                      "axisY",
                      this.options.axisY[c],
                      c,
                      "axisY",
                      "bottom"
                    ));
                this.data[d].axisY = this.axisY[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY.length ? this.data[d].axisYIndex : 0];
                this.axisY[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY.length ? this.data[d].axisYIndex : 0].dataSeries.push(this.data[d]);
              } else
                this.axisY.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[0] = new C(this, "axisY", this.options.axisY, 0, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[0] = new C(
                  this,
                  "axisY",
                  this.options.axisY,
                  0,
                  "axisY",
                  "bottom"
                ))), this.data[d].axisY = this.axisY[0], this.axisY[0].dataSeries.push(this.data[d]);
            if ("secondary" === this.data[d].axisYType)
              if (this.options.axisY2 && 0 < this.options.axisY2.length) {
                if (!this.axisY2.length)
                  for (c = 0; c < this.options.axisY2.length; c++)
                    "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[c] = new C(this, "axisY2", this.options.axisY2[c], c, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[c] = new C(
                      this,
                      "axisY2",
                      this.options.axisY2[c],
                      c,
                      "axisY",
                      "top"
                    ));
                this.data[d].axisY = this.axisY2[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY2.length ? this.data[d].axisYIndex : 0];
                this.axisY2[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY2.length ? this.data[d].axisYIndex : 0].dataSeries.push(this.data[d]);
              } else
                this.axisY2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[0] = new C(this, "axisY2", this.options.axisY2, 0, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[0] = new C(this, "axisY2", this.options.axisY2, 0, "axisY", "top"))), this.data[d].axisY = this.axisY2[0], this.axisY2[0].dataSeries.push(this.data[d]);
            if (!this.data[d].axisXType || "primary" === this.data[d].axisXType)
              if (this.options.axisX && 0 < this.options.axisX.length) {
                if (!this.axisX.length)
                  for (c = 0; c < this.options.axisX.length; c++)
                    "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[c] = new C(this, "axisX", this.options.axisX[c], c, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[c] = new C(this, "axisX", this.options.axisX[c], c, "axisX", "left"));
                this.data[d].axisX = this.axisX[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX.length ? this.data[d].axisXIndex : 0];
                this.axisX[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX.length ? this.data[d].axisXIndex : 0].dataSeries.push(this.data[d]);
              } else
                this.axisX.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[0] = new C(this, "axisX", this.options.axisX, 0, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[0] = new C(this, "axisX", this.options.axisX, 0, "axisX", "left"))), this.data[d].axisX = this.axisX[0], this.axisX[0].dataSeries.push(this.data[d]);
            if ("secondary" === this.data[d].axisXType)
              if (this.options.axisX2 && 0 < this.options.axisX2.length) {
                if (!this.axisX2.length)
                  for (c = 0; c < this.options.axisX2.length; c++)
                    "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[c] = new C(this, "axisX2", this.options.axisX2[c], c, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[c] = new C(this, "axisX2", this.options.axisX2[c], c, "axisX", "right"));
                this.data[d].axisX = this.axisX2[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX2.length ? this.data[d].axisXIndex : 0];
                this.axisX2[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX2.length ? this.data[d].axisXIndex : 0].dataSeries.push(this.data[d]);
              } else
                this.axisX2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[0] = new C(
                  this,
                  "axisX2",
                  this.options.axisX2,
                  0,
                  "axisX",
                  "top"
                )) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[0] = new C(this, "axisX2", this.options.axisX2, 0, "axisX", "right"))), this.data[d].axisX = this.axisX2[0], this.axisX2[0].dataSeries.push(this.data[d]);
          }
        if (this.axisY) {
          for (c = 1; c < this.axisY.length; c++)
            "undefined" === typeof this.axisY[c].options.gridThickness && (this.axisY[c].gridThickness = 0);
          for (c = 0; c < this.axisY.length - 1; c++)
            "undefined" === typeof this.axisY[c].options.margin && (this.axisY[c].margin = 10);
        }
        if (this.axisY2) {
          for (c = 1; c < this.axisY2.length; c++)
            "undefined" === typeof this.axisY2[c].options.gridThickness && (this.axisY2[c].gridThickness = 0);
          for (c = 0; c < this.axisY2.length - 1; c++)
            "undefined" === typeof this.axisY2[c].options.margin && (this.axisY2[c].margin = 10);
        }
        this.axisY && 0 < this.axisY.length && (this.axisY2 && 0 < this.axisY2.length) && (0 < this.axisY[0].gridThickness && "undefined" === typeof this.axisY2[0].options.gridThickness ? this.axisY2[0].gridThickness = 0 : 0 < this.axisY2[0].gridThickness && "undefined" === typeof this.axisY[0].options.gridThickness && (this.axisY[0].gridThickness = 0));
        if (this.axisX)
          for (c = 0; c < this.axisX.length; c++)
            "undefined" === typeof this.axisX[c].options.gridThickness && (this.axisX[c].gridThickness = 0);
        if (this.axisX2)
          for (c = 0; c < this.axisX2.length; c++)
            "undefined" === typeof this.axisX2[c].options.gridThickness && (this.axisX2[c].gridThickness = 0);
        this.axisX && 0 < this.axisX.length && (this.axisX2 && 0 < this.axisX2.length) && (0 < this.axisX[0].gridThickness && "undefined" === typeof this.axisX2[0].options.gridThickness ? this.axisX2[0].gridThickness = 0 : 0 < this.axisX2[0].gridThickness && "undefined" === typeof this.axisX[0].options.gridThickness && (this.axisX[0].gridThickness = 0));
        c = false;
        if (0 < this._axes.length && this.options.zoomEnabled && (this.zoomEnabled || this.panEnabled)) {
          for (d = 0; d < this._axes.length; d++)
            if (!r(this._axes[d].viewportMinimum) || !r(this._axes[d].viewportMaximum)) {
              c = true;
              break;
            }
        }
        c ? (Na(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, this._zoomButton.style.borderRight = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.buttonBorderThickness : 0) + "px solid " + this.toolbar.buttonBorderColor) : (xa(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.buttonBorderThickness + "px solid transparent", this.options.zoomEnabled && (this.zoomEnabled = true, this.panEnabled = false));
        gb(this);
        this._processData();
        this.options.title && (this.title = new Ba(this, this.options.title), this.title.dockInsidePlotArea ? a.push(this.title) : this.title.setLayout());
        if (this.options.subtitles)
          for (d = 0; d < this.options.subtitles.length; d++)
            c = new Ka(this, this.options.subtitles[d], d), this.subtitles.push(c), c.dockInsidePlotArea ? a.push(c) : c.setLayout();
        this.legend = new M2(this, this.options.legend);
        for (d = 0; d < this.data.length; d++)
          (this.data[d].showInLegend || "pie" === this.data[d].type || "doughnut" === this.data[d].type || "funnel" === this.data[d].type || "pyramid" === this.data[d].type) && this.legend.dataSeries.push(this.data[d]);
        this.legend.dockInsidePlotArea ? a.push(this.legend) : this.legend.setLayout();
        for (d = 0; d < this._axes.length; d++)
          if (this._axes[d].scaleBreaks && this._axes[d].scaleBreaks._appliedBreaks.length) {
            u ? (this._breaksCanvas = va(this.width, this.height, true), this._breaksCanvasCtx = this._breaksCanvas.getContext("2d")) : (this._breaksCanvas = this.canvas, this._breaksCanvasCtx = this.ctx);
            break;
          }
        this._preRenderCanvas = va(this.width, this.height);
        this._preRenderCtx = this._preRenderCanvas.getContext("2d");
        "normal" !== this.plotInfo.axisPlacement && "xySwapped" !== this.plotInfo.axisPlacement || C.setLayout(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace());
      };
      l.prototype.renderElements = function() {
        if (this.height) {
          var a = this._plotAreaElements;
          this.title && !this.title.dockInsidePlotArea && this.title.render();
          for (var d = 0; d < this.subtitles.length; d++)
            this.subtitles[d].dockInsidePlotArea || this.subtitles[d].render();
          this.legend.dockInsidePlotArea || this.legend.render();
          if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement)
            C.render(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement);
          else if ("none" === this.plotInfo.axisPlacement)
            this.preparePlotArea();
          else
            return;
          for (d = 0; d < a.length; d++)
            a[d].setLayout(), a[d].render();
          var c = [];
          if (this.animatedRender) {
            var b = va(this.width, this.height);
            b.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height);
          }
          jb(this);
          var a = this.ctx.miterLimit, e;
          this.ctx.miterLimit = 3;
          u && this._breaksCanvas && (this._preRenderCtx.drawImage(
            this.canvas,
            0,
            0,
            this.width,
            this.height
          ), this._preRenderCtx.drawImage(this._breaksCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx.globalCompositeOperation = "source-atop", this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), this._preRenderCtx.clearRect(0, 0, this.width, this.height));
          for (d = 0; d < this.plotInfo.plotTypes.length; d++)
            for (var g = this.plotInfo.plotTypes[d], p = 0; p < g.plotUnits.length; p++) {
              var t = g.plotUnits[p], D = null;
              t.targetCanvas && za(t.targetCanvas);
              t.targetCanvas = null;
              this.animatedRender && (t.targetCanvas = va(this.width, this.height), t.targetCanvasCtx = t.targetCanvas.getContext("2d"), e = t.targetCanvasCtx.miterLimit, t.targetCanvasCtx.miterLimit = 3);
              "line" === t.type ? D = this.renderLine(t) : "stepLine" === t.type ? D = this.renderStepLine(t) : "spline" === t.type ? D = this.renderSpline(t) : "column" === t.type ? D = this.renderColumn(t) : "bar" === t.type ? D = this.renderBar(t) : "area" === t.type ? D = this.renderArea(t) : "stepArea" === t.type ? D = this.renderStepArea(t) : "splineArea" === t.type ? D = this.renderSplineArea(t) : "stackedColumn" === t.type ? D = this.renderStackedColumn(t) : "stackedColumn100" === t.type ? D = this.renderStackedColumn100(t) : "stackedBar" === t.type ? D = this.renderStackedBar(t) : "stackedBar100" === t.type ? D = this.renderStackedBar100(t) : "stackedArea" === t.type ? D = this.renderStackedArea(t) : "stackedArea100" === t.type ? D = this.renderStackedArea100(t) : "bubble" === t.type ? D = D = this.renderBubble(t) : "scatter" === t.type ? D = this.renderScatter(t) : "pie" === t.type ? this.renderPie(t) : "doughnut" === t.type ? this.renderPie(t) : "funnel" === t.type ? D = this.renderFunnel(t) : "pyramid" === t.type ? D = this.renderFunnel(t) : "candlestick" === t.type ? D = this.renderCandlestick(t) : "ohlc" === t.type ? D = this.renderCandlestick(t) : "rangeColumn" === t.type ? D = this.renderRangeColumn(t) : "error" === t.type ? D = this.renderError(t) : "rangeBar" === t.type ? D = this.renderRangeBar(t) : "rangeArea" === t.type ? D = this.renderRangeArea(t) : "rangeSplineArea" === t.type ? D = this.renderRangeSplineArea(t) : "waterfall" === t.type ? D = this.renderWaterfall(t) : "boxAndWhisker" === t.type && (D = this.renderBoxAndWhisker(t));
              for (var k = 0; k < t.dataSeriesIndexes.length; k++)
                this._dataInRenderedOrder.push(this.data[t.dataSeriesIndexes[k]]);
              this.animatedRender && (t.targetCanvasCtx.miterLimit = e, D && c.push(D));
            }
          this.ctx.miterLimit = a;
          this.animatedRender && this._breaksCanvasCtx && c.push({ source: this._breaksCanvasCtx, dest: this.plotArea.ctx, animationCallback: P.fadeInAnimation, easingFunction: P.easing.easeInQuad, animationBase: 0, startTimePercent: 0.7 });
          this.animatedRender && 0 < this._indexLabels.length && (e = va(this.width, this.height).getContext("2d"), Aa(e), c.push(this.renderIndexLabels(e)));
          var m = this;
          if (0 < c.length)
            m.disableToolTip = true, m._animator.animate(
              200,
              m.animationDuration,
              function(a2) {
                m.ctx.clearRect(0, 0, m.width, m.height);
                m.ctx.drawImage(b, 0, 0, Math.floor(m.width * ma), Math.floor(m.height * ma), 0, 0, m.width, m.height);
                for (var e2 = 0; e2 < c.length; e2++)
                  D = c[e2], 1 > a2 && "undefined" !== typeof D.startTimePercent ? a2 >= D.startTimePercent && D.animationCallback(D.easingFunction(a2 - D.startTimePercent, 0, 1, 1 - D.startTimePercent), D) : D.animationCallback(D.easingFunction(a2, 0, 1, 1), D);
                m.dispatchEvent("dataAnimationIterationEnd", { chart: m });
              },
              function() {
                c = [];
                for (var a2 = 0; a2 < m.plotInfo.plotTypes.length; a2++)
                  for (var e2 = m.plotInfo.plotTypes[a2], d2 = 0; d2 < e2.plotUnits.length; d2++) {
                    var g2 = e2.plotUnits[d2];
                    g2.targetCanvas && za(g2.targetCanvas);
                    g2.targetCanvas = null;
                  }
                b = null;
                m.disableToolTip = false;
                m.dispatchEvent("dataAnimationEnd", { chart: m });
              }
            );
          else {
            if (m._breaksCanvas)
              if (u)
                m.plotArea.ctx.drawImage(m._breaksCanvas, 0, 0, this.width, this.height);
              else
                for (k = 0; k < m._axes.length; k++)
                  m._axes[k].createMask();
            0 < m._indexLabels.length && m.renderIndexLabels();
            m.dispatchEvent("dataAnimationIterationEnd", { chart: m });
            m.dispatchEvent("dataAnimationEnd", { chart: m });
          }
          this.attachPlotAreaEventHandlers();
          this.zoomEnabled || (this.panEnabled || !this._zoomButton || "none" === this._zoomButton.style.display) || xa(this._zoomButton, this._resetButton);
          this.toolTip._updateToolTip();
          this.renderCount++;
          this._breaksCanvas && (delete this._breaksCanvas, delete this._breaksCanvasCtx);
          for (k = 0; k < this._axes.length; k++)
            this._axes[k].maskCanvas && (delete this._axes[k].maskCanvas, delete this._axes[k].maskCtx);
        }
      };
      l.prototype.render = function(a) {
        a && (this.options = a);
        this._initialize();
        this.setLayout();
        this.renderElements();
        this._preRenderCanvas && za(this._preRenderCanvas);
      };
      l.prototype.attachPlotAreaEventHandlers = function() {
        this.attachEvent({ context: this, chart: this, mousedown: this._plotAreaMouseDown, mouseup: this._plotAreaMouseUp, mousemove: this._plotAreaMouseMove, cursor: this.panEnabled ? "move" : "default", capture: true, bounds: this.plotArea });
      };
      l.prototype.categoriseDataSeries = function() {
        for (var a = "", d = 0; d < this.data.length; d++)
          if (a = this.data[d], a.dataPoints && (0 !== a.dataPoints.length && a.visible) && 0 <= l._supportedChartTypes.indexOf(a.type)) {
            for (var c = null, b = false, e = null, g = false, p = 0; p < this.plotInfo.plotTypes.length; p++)
              if (this.plotInfo.plotTypes[p].type === a.type) {
                b = true;
                c = this.plotInfo.plotTypes[p];
                break;
              }
            b || (c = { type: a.type, totalDataSeries: 0, plotUnits: [] }, this.plotInfo.plotTypes.push(c));
            for (p = 0; p < c.plotUnits.length; p++)
              if (c.plotUnits[p].axisYType === a.axisYType && c.plotUnits[p].axisXType === a.axisXType && c.plotUnits[p].axisYIndex === a.axisYIndex && c.plotUnits[p].axisXIndex === a.axisXIndex) {
                g = true;
                e = c.plotUnits[p];
                break;
              }
            g || (e = { type: a.type, previousDataSeriesCount: 0, index: c.plotUnits.length, plotType: c, axisXType: a.axisXType, axisYType: a.axisYType, axisYIndex: a.axisYIndex, axisXIndex: a.axisXIndex, axisY: "primary" === a.axisYType ? this.axisY[0 <= a.axisYIndex && a.axisYIndex < this.axisY.length ? a.axisYIndex : 0] : this.axisY2[0 <= a.axisYIndex && a.axisYIndex < this.axisY2.length ? a.axisYIndex : 0], axisX: "primary" === a.axisXType ? this.axisX[0 <= a.axisXIndex && a.axisXIndex < this.axisX.length ? a.axisXIndex : 0] : this.axisX2[0 <= a.axisXIndex && a.axisXIndex < this.axisX2.length ? a.axisXIndex : 0], dataSeriesIndexes: [], yTotals: [], yAbsTotals: [] }, c.plotUnits.push(e));
            c.totalDataSeries++;
            e.dataSeriesIndexes.push(d);
            a.plotUnit = e;
          }
        for (d = 0; d < this.plotInfo.plotTypes.length; d++)
          for (c = this.plotInfo.plotTypes[d], p = a = 0; p < c.plotUnits.length; p++)
            c.plotUnits[p].previousDataSeriesCount = a, a += c.plotUnits[p].dataSeriesIndexes.length;
      };
      l.prototype.assignIdToDataPoints = function() {
        for (var a = 0; a < this.data.length; a++) {
          var d = this.data[a];
          if (d.dataPoints)
            for (var c = d.dataPoints.length, b = 0; b < c; b++)
              d.dataPointIds[b] = ++this._eventManager.lastObjectId;
        }
      };
      l.prototype._processData = function() {
        this.assignIdToDataPoints();
        this.categoriseDataSeries();
        for (var a = 0; a < this.plotInfo.plotTypes.length; a++)
          for (var d = this.plotInfo.plotTypes[a], c = 0; c < d.plotUnits.length; c++) {
            var b = d.plotUnits[c];
            "line" === b.type || "stepLine" === b.type || "spline" === b.type || "column" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "bar" === b.type || "bubble" === b.type || "scatter" === b.type ? this._processMultiseriesPlotUnit(b) : "stackedColumn" === b.type || "stackedBar" === b.type || "stackedArea" === b.type ? this._processStackedPlotUnit(b) : "stackedColumn100" === b.type || "stackedBar100" === b.type || "stackedArea100" === b.type ? this._processStacked100PlotUnit(b) : "candlestick" === b.type || "ohlc" === b.type || "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type || "boxAndWhisker" === b.type ? this._processMultiYPlotUnit(b) : "waterfall" === b.type && this._processSpecificPlotUnit(b);
          }
        this.calculateAutoBreaks();
      };
      l.prototype._processMultiseriesPlotUnit = function(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
          for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, g = false, p = 0; p < a.dataSeriesIndexes.length; p++) {
            var t = this.data[a.dataSeriesIndexes[p]], D = 0, k = false, m = false, n;
            if ("normal" === t.axisPlacement || "xySwapped" === t.axisPlacement)
              var q = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : a.axisX.logarithmic ? 0 : -Infinity, f = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
            if (t.dataPoints[D].x && t.dataPoints[D].x.getTime || "dateTime" === t.xValueType)
              g = true;
            for (D = 0; D < t.dataPoints.length; D++) {
              "undefined" === typeof t.dataPoints[D].x && (t.dataPoints[D].x = D + (a.axisX.logarithmic ? 1 : 0));
              t.dataPoints[D].x.getTime ? (g = true, b = t.dataPoints[D].x.getTime()) : b = t.dataPoints[D].x;
              e = t.dataPoints[D].y;
              b < c.min && (c.min = b);
              b > c.max && (c.max = b);
              e < d.min && "number" === typeof e && (d.min = e);
              e > d.max && "number" === typeof e && (d.max = e);
              if (0 < D) {
                if (a.axisX.logarithmic) {
                  var F = b / t.dataPoints[D - 1].x;
                  1 > F && (F = 1 / F);
                  c.minDiff > F && 1 !== F && (c.minDiff = F);
                } else
                  F = b - t.dataPoints[D - 1].x, 0 > F && (F *= -1), c.minDiff > F && 0 !== F && (c.minDiff = F);
                null !== e && null !== t.dataPoints[D - 1].y && (a.axisY.logarithmic ? (F = e / t.dataPoints[D - 1].y, 1 > F && (F = 1 / F), d.minDiff > F && 1 !== F && (d.minDiff = F)) : (F = e - t.dataPoints[D - 1].y, 0 > F && (F *= -1), d.minDiff > F && 0 !== F && (d.minDiff = F)));
              }
              if (b < q && !k)
                null !== e && (n = b);
              else {
                if (!k && (k = true, 0 < D)) {
                  D -= 2;
                  continue;
                }
                if (b > f && !m)
                  m = true;
                else if (b > f && m)
                  continue;
                t.dataPoints[D].label && (a.axisX.labels[b] = t.dataPoints[D].label);
                b < c.viewPortMin && (c.viewPortMin = b);
                b > c.viewPortMax && (c.viewPortMax = b);
                null === e ? c.viewPortMin === b && n < b && (c.viewPortMin = n) : (e < d.viewPortMin && "number" === typeof e && (d.viewPortMin = e), e > d.viewPortMax && "number" === typeof e && (d.viewPortMax = e));
              }
            }
            t.axisX.valueType = t.xValueType = g ? "dateTime" : "number";
          }
      };
      l.prototype._processStackedPlotUnit = function(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
          for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, g = false, p = [], t = [], D = Infinity, k = -Infinity, m = 0; m < a.dataSeriesIndexes.length; m++) {
            var n = this.data[a.dataSeriesIndexes[m]], q = 0, f = false, F = false, h2;
            if ("normal" === n.axisPlacement || "xySwapped" === n.axisPlacement)
              var x = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : -Infinity, s = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
            if (n.dataPoints[q].x && n.dataPoints[q].x.getTime || "dateTime" === n.xValueType)
              g = true;
            for (q = 0; q < n.dataPoints.length; q++) {
              "undefined" === typeof n.dataPoints[q].x && (n.dataPoints[q].x = q + (a.axisX.logarithmic ? 1 : 0));
              n.dataPoints[q].x.getTime ? (g = true, b = n.dataPoints[q].x.getTime()) : b = n.dataPoints[q].x;
              e = r(n.dataPoints[q].y) ? 0 : n.dataPoints[q].y;
              b < c.min && (c.min = b);
              b > c.max && (c.max = b);
              if (0 < q) {
                if (a.axisX.logarithmic) {
                  var w = b / n.dataPoints[q - 1].x;
                  1 > w && (w = 1 / w);
                  c.minDiff > w && 1 !== w && (c.minDiff = w);
                } else
                  w = b - n.dataPoints[q - 1].x, 0 > w && (w *= -1), c.minDiff > w && 0 !== w && (c.minDiff = w);
                null !== e && null !== n.dataPoints[q - 1].y && (a.axisY.logarithmic ? 0 < e && (w = e / n.dataPoints[q - 1].y, 1 > w && (w = 1 / w), d.minDiff > w && 1 !== w && (d.minDiff = w)) : (w = e - n.dataPoints[q - 1].y, 0 > w && (w *= -1), d.minDiff > w && 0 !== w && (d.minDiff = w)));
              }
              if (b < x && !f)
                null !== n.dataPoints[q].y && (h2 = b);
              else {
                if (!f && (f = true, 0 < q)) {
                  q -= 2;
                  continue;
                }
                if (b > s && !F)
                  F = true;
                else if (b > s && F)
                  continue;
                n.dataPoints[q].label && (a.axisX.labels[b] = n.dataPoints[q].label);
                b < c.viewPortMin && (c.viewPortMin = b);
                b > c.viewPortMax && (c.viewPortMax = b);
                null === n.dataPoints[q].y ? c.viewPortMin === b && h2 < b && (c.viewPortMin = h2) : (a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + e, a.yAbsTotals[b] = (a.yAbsTotals[b] ? a.yAbsTotals[b] : 0) + Math.abs(e), 0 <= e ? p[b] ? p[b] += e : (p[b] = e, D = Math.min(e, D)) : t[b] ? t[b] += e : (t[b] = e, k = Math.max(e, k)));
              }
            }
            a.axisY.scaleBreaks && (a.axisY.scaleBreaks.autoCalculate && 1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks) && (d.dataPointYPositiveSums ? (d.dataPointYPositiveSums.push.apply(d.dataPointYPositiveSums, p), d.dataPointYNegativeSums.push.apply(d.dataPointYPositiveSums, t)) : (d.dataPointYPositiveSums = p, d.dataPointYNegativeSums = t));
            n.axisX.valueType = n.xValueType = g ? "dateTime" : "number";
          }
          for (q in p)
            p.hasOwnProperty(q) && !isNaN(q) && (a = p[q], a < d.min && (d.min = Math.min(a, D)), a > d.max && (d.max = a), q < c.viewPortMin || q > c.viewPortMax || (a < d.viewPortMin && (d.viewPortMin = Math.min(a, D)), a > d.viewPortMax && (d.viewPortMax = a)));
          for (q in t)
            t.hasOwnProperty(q) && !isNaN(q) && (a = t[q], a < d.min && (d.min = a), a > d.max && (d.max = Math.max(a, k)), q < c.viewPortMin || q > c.viewPortMax || (a < d.viewPortMin && (d.viewPortMin = a), a > d.viewPortMax && (d.viewPortMax = Math.max(a, k))));
        }
      };
      l.prototype._processStacked100PlotUnit = function(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
          for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, g = false, p = false, t = false, D = [], k = 0; k < a.dataSeriesIndexes.length; k++) {
            var m = this.data[a.dataSeriesIndexes[k]], n = 0, q = false, f = false, F;
            if ("normal" === m.axisPlacement || "xySwapped" === m.axisPlacement)
              var h2 = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : -Infinity, x = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
            if (m.dataPoints[n].x && m.dataPoints[n].x.getTime || "dateTime" === m.xValueType)
              g = true;
            for (n = 0; n < m.dataPoints.length; n++) {
              "undefined" === typeof m.dataPoints[n].x && (m.dataPoints[n].x = n + (a.axisX.logarithmic ? 1 : 0));
              m.dataPoints[n].x.getTime ? (g = true, b = m.dataPoints[n].x.getTime()) : b = m.dataPoints[n].x;
              e = r(m.dataPoints[n].y) ? null : m.dataPoints[n].y;
              b < c.min && (c.min = b);
              b > c.max && (c.max = b);
              if (0 < n) {
                if (a.axisX.logarithmic) {
                  var s = b / m.dataPoints[n - 1].x;
                  1 > s && (s = 1 / s);
                  c.minDiff > s && 1 !== s && (c.minDiff = s);
                } else
                  s = b - m.dataPoints[n - 1].x, 0 > s && (s *= -1), c.minDiff > s && 0 !== s && (c.minDiff = s);
                r(e) || null === m.dataPoints[n - 1].y || (a.axisY.logarithmic ? 0 < e && (s = e / m.dataPoints[n - 1].y, 1 > s && (s = 1 / s), d.minDiff > s && 1 !== s && (d.minDiff = s)) : (s = e - m.dataPoints[n - 1].y, 0 > s && (s *= -1), d.minDiff > s && 0 !== s && (d.minDiff = s)));
              }
              if (b < h2 && !q)
                null !== e && (F = b);
              else {
                if (!q && (q = true, 0 < n)) {
                  n -= 2;
                  continue;
                }
                if (b > x && !f)
                  f = true;
                else if (b > x && f)
                  continue;
                m.dataPoints[n].label && (a.axisX.labels[b] = m.dataPoints[n].label);
                b < c.viewPortMin && (c.viewPortMin = b);
                b > c.viewPortMax && (c.viewPortMax = b);
                null === e ? c.viewPortMin === b && F < b && (c.viewPortMin = F) : (a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + e, a.yAbsTotals[b] = (a.yAbsTotals[b] ? a.yAbsTotals[b] : 0) + Math.abs(e), 0 <= e ? p = true : 0 > e && (t = true), D[b] = D[b] ? D[b] + Math.abs(e) : Math.abs(e));
              }
            }
            m.axisX.valueType = m.xValueType = g ? "dateTime" : "number";
          }
          a.axisY.logarithmic ? (d.max = r(d.viewPortMax) ? 99 * Math.pow(a.axisY.logarithmBase, -0.05) : Math.max(d.viewPortMax, 99 * Math.pow(a.axisY.logarithmBase, -0.05)), d.min = r(d.viewPortMin) ? 1 : Math.min(d.viewPortMin, 1)) : p && !t ? (d.max = r(d.viewPortMax) ? 99 : Math.max(d.viewPortMax, 99), d.min = r(d.viewPortMin) ? 1 : Math.min(d.viewPortMin, 1)) : p && t ? (d.max = r(d.viewPortMax) ? 99 : Math.max(d.viewPortMax, 99), d.min = r(d.viewPortMin) ? -99 : Math.min(d.viewPortMin, -99)) : !p && t && (d.max = r(d.viewPortMax) ? -1 : Math.max(
            d.viewPortMax,
            -1
          ), d.min = r(d.viewPortMin) ? -99 : Math.min(d.viewPortMin, -99));
          d.viewPortMin = d.min;
          d.viewPortMax = d.max;
          a.dataPointYSums = D;
        }
      };
      l.prototype._processMultiYPlotUnit = function(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
          for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, g, p, t = false, D = 0; D < a.dataSeriesIndexes.length; D++) {
            var k = this.data[a.dataSeriesIndexes[D]], m = 0, n = false, q = false, f, F, h2;
            if ("normal" === k.axisPlacement || "xySwapped" === k.axisPlacement)
              var r2 = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : a.axisX.logarithmic ? 0 : -Infinity, s = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
            if (k.dataPoints[m].x && k.dataPoints[m].x.getTime || "dateTime" === k.xValueType)
              t = true;
            for (m = 0; m < k.dataPoints.length; m++) {
              "undefined" === typeof k.dataPoints[m].x && (k.dataPoints[m].x = m + (a.axisX.logarithmic ? 1 : 0));
              k.dataPoints[m].x.getTime ? (t = true, b = k.dataPoints[m].x.getTime()) : b = k.dataPoints[m].x;
              if ((e = k.dataPoints[m].y) && e.length) {
                g = Math.min.apply(null, e);
                p = Math.max.apply(null, e);
                F = true;
                for (var w = 0; w < e.length; w++)
                  null === e.k && (F = false);
                F && (n || (h2 = f), f = b);
              }
              b < c.min && (c.min = b);
              b > c.max && (c.max = b);
              g < d.min && (d.min = g);
              p > d.max && (d.max = p);
              0 < m && (a.axisX.logarithmic ? (F = b / k.dataPoints[m - 1].x, 1 > F && (F = 1 / F), c.minDiff > F && 1 !== F && (c.minDiff = F)) : (F = b - k.dataPoints[m - 1].x, 0 > F && (F *= -1), c.minDiff > F && 0 !== F && (c.minDiff = F)), e && (null !== e[0] && k.dataPoints[m - 1].y && null !== k.dataPoints[m - 1].y[0]) && (a.axisY.logarithmic ? (F = e[0] / k.dataPoints[m - 1].y[0], 1 > F && (F = 1 / F), d.minDiff > F && 1 !== F && (d.minDiff = F)) : (F = e[0] - k.dataPoints[m - 1].y[0], 0 > F && (F *= -1), d.minDiff > F && 0 !== F && (d.minDiff = F))));
              if (!(b < r2) || n) {
                if (!n && (n = true, 0 < m)) {
                  m -= 2;
                  f = h2;
                  continue;
                }
                if (b > s && !q)
                  q = true;
                else if (b > s && q)
                  continue;
                k.dataPoints[m].label && (a.axisX.labels[b] = k.dataPoints[m].label);
                b < c.viewPortMin && (c.viewPortMin = b);
                b > c.viewPortMax && (c.viewPortMax = b);
                if (c.viewPortMin === b && e) {
                  for (w = 0; w < e.length; w++)
                    if (null === e[w] && f < b) {
                      c.viewPortMin = f;
                      break;
                    }
                }
                null === e ? c.viewPortMin === b && f < b && (c.viewPortMin = f) : (g < d.viewPortMin && (d.viewPortMin = g), p > d.viewPortMax && (d.viewPortMax = p));
              }
            }
            k.axisX.valueType = k.xValueType = t ? "dateTime" : "number";
          }
      };
      l.prototype._processSpecificPlotUnit = function(a) {
        if ("waterfall" === a.type && a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
          for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, g = false, p = 0; p < a.dataSeriesIndexes.length; p++) {
            var t = this.data[a.dataSeriesIndexes[p]], D = 0, k = false, m = false, n = b = 0;
            if ("normal" === t.axisPlacement || "xySwapped" === t.axisPlacement)
              var q = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : a.axisX.logarithmic ? 0 : -Infinity, f = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
            if (t.dataPoints[D].x && t.dataPoints[D].x.getTime || "dateTime" === t.xValueType)
              g = true;
            for (D = 0; D < t.dataPoints.length; D++)
              "undefined" !== typeof t.dataPoints[D].isCumulativeSum && true === t.dataPoints[D].isCumulativeSum ? (t.dataPointEOs[D].cumulativeSumYStartValue = 0, t.dataPointEOs[D].cumulativeSum = 0 === D ? 0 : t.dataPointEOs[D - 1].cumulativeSum, t.dataPoints[D].y = 0 === D ? 0 : t.dataPointEOs[D - 1].cumulativeSum) : "undefined" !== typeof t.dataPoints[D].isIntermediateSum && true === t.dataPoints[D].isIntermediateSum ? (t.dataPointEOs[D].cumulativeSumYStartValue = n, t.dataPointEOs[D].cumulativeSum = 0 === D ? 0 : t.dataPointEOs[D - 1].cumulativeSum, t.dataPoints[D].y = 0 === D ? 0 : b, n = 0 === D ? 0 : t.dataPointEOs[D - 1].cumulativeSum, b = 0) : (e = "number" !== typeof t.dataPoints[D].y ? 0 : t.dataPoints[D].y, t.dataPointEOs[D].cumulativeSumYStartValue = 0 === D ? 0 : t.dataPointEOs[D - 1].cumulativeSum, t.dataPointEOs[D].cumulativeSum = 0 === D ? e : t.dataPointEOs[D - 1].cumulativeSum + e, b += e);
            for (D = 0; D < t.dataPoints.length; D++)
              if ("undefined" === typeof t.dataPoints[D].x && (t.dataPoints[D].x = D + (a.axisX.logarithmic ? 1 : 0)), t.dataPoints[D].x.getTime ? (g = true, b = t.dataPoints[D].x.getTime()) : b = t.dataPoints[D].x, e = t.dataPoints[D].y, b < c.min && (c.min = b), b > c.max && (c.max = b), t.dataPointEOs[D].cumulativeSum < d.min && (d.min = t.dataPointEOs[D].cumulativeSum), t.dataPointEOs[D].cumulativeSum > d.max && (d.max = t.dataPointEOs[D].cumulativeSum), 0 < D && (a.axisX.logarithmic ? (n = b / t.dataPoints[D - 1].x, 1 > n && (n = 1 / n), c.minDiff > n && 1 !== n && (c.minDiff = n)) : (n = b - t.dataPoints[D - 1].x, 0 > n && (n *= -1), c.minDiff > n && 0 !== n && (c.minDiff = n)), null !== e && null !== t.dataPoints[D - 1].y && (a.axisY.logarithmic ? (e = t.dataPointEOs[D].cumulativeSum / t.dataPointEOs[D - 1].cumulativeSum, 1 > e && (e = 1 / e), d.minDiff > e && 1 !== e && (d.minDiff = e)) : (e = t.dataPointEOs[D].cumulativeSum - t.dataPointEOs[D - 1].cumulativeSum, 0 > e && (e *= -1), d.minDiff > e && 0 !== e && (d.minDiff = e)))), !(b < q) || k) {
                if (!k && (k = true, 0 < D)) {
                  D -= 2;
                  continue;
                }
                if (b > f && !m)
                  m = true;
                else if (b > f && m)
                  continue;
                t.dataPoints[D].label && (a.axisX.labels[b] = t.dataPoints[D].label);
                b < c.viewPortMin && (c.viewPortMin = b);
                b > c.viewPortMax && (c.viewPortMax = b);
                0 < D && (t.dataPointEOs[D - 1].cumulativeSum < d.viewPortMin && (d.viewPortMin = t.dataPointEOs[D - 1].cumulativeSum), t.dataPointEOs[D - 1].cumulativeSum > d.viewPortMax && (d.viewPortMax = t.dataPointEOs[D - 1].cumulativeSum));
                t.dataPointEOs[D].cumulativeSum < d.viewPortMin && (d.viewPortMin = t.dataPointEOs[D].cumulativeSum);
                t.dataPointEOs[D].cumulativeSum > d.viewPortMax && (d.viewPortMax = t.dataPointEOs[D].cumulativeSum);
              }
            t.axisX.valueType = t.xValueType = g ? "dateTime" : "number";
          }
      };
      l.prototype.calculateAutoBreaks = function() {
        function a(a2, b2, c2, e2) {
          if (e2)
            return c2 = Math.pow(Math.min(c2 * a2 / b2, b2 / a2), 0.2), 1 >= c2 && (c2 = Math.pow(1 > a2 ? 1 / a2 : Math.min(b2 / a2, a2), 0.25)), { startValue: a2 * c2, endValue: b2 / c2 };
          c2 = 0.2 * Math.min(c2 - b2 + a2, b2 - a2);
          0 >= c2 && (c2 = 0.25 * Math.min(b2 - a2, Math.abs(a2)));
          return { startValue: a2 + c2, endValue: b2 - c2 };
        }
        function d(a2) {
          if (a2.dataSeriesIndexes && !(1 > a2.dataSeriesIndexes.length)) {
            var b2 = a2.axisX.scaleBreaks && a2.axisX.scaleBreaks.autoCalculate && 1 <= a2.axisX.scaleBreaks.maxNumberOfAutoBreaks, c2 = a2.axisY.scaleBreaks && a2.axisY.scaleBreaks.autoCalculate && 1 <= a2.axisY.scaleBreaks.maxNumberOfAutoBreaks;
            if (b2 || c2)
              for (var d2 = a2.axisY.dataInfo, f2 = a2.axisX.dataInfo, g2, p2 = f2.min, k2 = f2.max, m2 = d2.min, n2 = d2.max, f2 = f2._dataRanges, d2 = d2._dataRanges, t2, q2 = 0, D2 = 0; D2 < a2.dataSeriesIndexes.length; D2++) {
                var h2 = e.data[a2.dataSeriesIndexes[D2]];
                if (!(4 > h2.dataPoints.length)) {
                  for (q2 = 0; q2 < h2.dataPoints.length; q2++)
                    if (b2 && (t2 = (k2 + 1 - p2) * Math.max(parseFloat(a2.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, g2 = h2.dataPoints[q2].x.getTime ? h2.dataPoints[q2].x.getTime() : h2.dataPoints[q2].x, t2 = Math.floor((g2 - p2) / t2), g2 < f2[t2].min && (f2[t2].min = g2), g2 > f2[t2].max && (f2[t2].max = g2)), c2) {
                      var l2 = (n2 + 1 - m2) * Math.max(parseFloat(a2.axisY.scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                      if ((g2 = "waterfall" === a2.type ? h2.dataPointEOs[q2].cumulativeSum : h2.dataPoints[q2].y) && g2.length)
                        for (var u2 = 0; u2 < g2.length; u2++)
                          t2 = Math.floor((g2[u2] - m2) / l2), g2[u2] < d2[t2].min && (d2[t2].min = g2[u2]), g2[u2] > d2[t2].max && (d2[t2].max = g2[u2]);
                      else
                        r(g2) || (t2 = Math.floor((g2 - m2) / l2), g2 < d2[t2].min && (d2[t2].min = g2), g2 > d2[t2].max && (d2[t2].max = g2));
                    }
                }
              }
          }
        }
        function c(a2) {
          if (a2.dataSeriesIndexes && !(1 > a2.dataSeriesIndexes.length) && a2.axisX.scaleBreaks && a2.axisX.scaleBreaks.autoCalculate && 1 <= a2.axisX.scaleBreaks.maxNumberOfAutoBreaks)
            for (var b2 = a2.axisX.dataInfo, c2 = b2.min, d2 = b2.max, f2 = b2._dataRanges, g2, p2 = 0, k2 = 0; k2 < a2.dataSeriesIndexes.length; k2++) {
              var m2 = e.data[a2.dataSeriesIndexes[k2]];
              if (!(4 > m2.dataPoints.length))
                for (p2 = 0; p2 < m2.dataPoints.length; p2++)
                  g2 = (d2 + 1 - c2) * Math.max(parseFloat(a2.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, b2 = m2.dataPoints[p2].x.getTime ? m2.dataPoints[p2].x.getTime() : m2.dataPoints[p2].x, g2 = Math.floor((b2 - c2) / g2), b2 < f2[g2].min && (f2[g2].min = b2), b2 > f2[g2].max && (f2[g2].max = b2);
            }
        }
        for (var b, e = this, g = false, p = 0; p < this._axes.length; p++)
          if (this._axes[p].scaleBreaks && this._axes[p].scaleBreaks.autoCalculate && 1 <= this._axes[p].scaleBreaks.maxNumberOfAutoBreaks) {
            g = true;
            this._axes[p].dataInfo._dataRanges = [];
            for (var t = 0; t < 100 / Math.max(parseFloat(this._axes[p].scaleBreaks.collapsibleThreshold) || 10, 10); t++)
              this._axes[p].dataInfo._dataRanges.push({ min: Infinity, max: -Infinity });
          }
        if (g) {
          for (p = 0; p < this.plotInfo.plotTypes.length; p++)
            for (g = this.plotInfo.plotTypes[p], t = 0; t < g.plotUnits.length; t++)
              b = g.plotUnits[t], "line" === b.type || "stepLine" === b.type || "spline" === b.type || "column" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "bar" === b.type || "bubble" === b.type || "scatter" === b.type || "candlestick" === b.type || "ohlc" === b.type || "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "waterfall" === b.type || "error" === b.type || "boxAndWhisker" === b.type ? d(b) : 0 <= b.type.indexOf("stacked") && c(b);
          for (p = 0; p < this._axes.length; p++)
            if (this._axes[p].dataInfo._dataRanges) {
              var D = this._axes[p].dataInfo.min;
              b = (this._axes[p].dataInfo.max + 1 - D) * Math.max(parseFloat(this._axes[p].scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
              var k = this._axes[p].dataInfo._dataRanges, m, n, g = [];
              if (this._axes[p].dataInfo.dataPointYPositiveSums) {
                var q = this._axes[p].dataInfo.dataPointYPositiveSums;
                m = k;
                for (t in q)
                  if (q.hasOwnProperty(t) && !isNaN(t) && (n = q[t], !r(n))) {
                    var f = Math.floor((n - D) / b);
                    n < m[f].min && (m[f].min = n);
                    n > m[f].max && (m[f].max = n);
                  }
                delete this._axes[p].dataInfo.dataPointYPositiveSums;
              }
              if (this._axes[p].dataInfo.dataPointYNegativeSums) {
                q = this._axes[p].dataInfo.dataPointYNegativeSums;
                m = k;
                for (t in q)
                  q.hasOwnProperty(t) && !isNaN(t) && (n = -1 * q[t], r(n) || (f = Math.floor((n - D) / b), n < m[f].min && (m[f].min = n), n > m[f].max && (m[f].max = n)));
                delete this._axes[p].dataInfo.dataPointYNegativeSums;
              }
              for (t = 0; t < k.length - 1; t++)
                if (m = k[t].max, isFinite(m))
                  for (; t < k.length - 1; )
                    if (D = k[t + 1].min, isFinite(D)) {
                      n = D - m;
                      n > b && g.push({ diff: n, start: m, end: D });
                      break;
                    } else
                      t++;
              if (this._axes[p].scaleBreaks.customBreaks) {
                for (t = 0; t < this._axes[p].scaleBreaks.customBreaks.length; t++)
                  for (b = 0; b < g.length; b++)
                    if (this._axes[p].scaleBreaks.customBreaks[t].startValue <= g[b].start && g[b].start <= this._axes[p].scaleBreaks.customBreaks[t].endValue || this._axes[p].scaleBreaks.customBreaks[t].startValue <= g[b].start && g[b].start <= this._axes[p].scaleBreaks.customBreaks[t].endValue || g[b].start <= this._axes[p].scaleBreaks.customBreaks[t].startValue && this._axes[p].scaleBreaks.customBreaks[t].startValue <= g[b].end || g[b].start <= this._axes[p].scaleBreaks.customBreaks[t].endValue && this._axes[p].scaleBreaks.customBreaks[t].endValue <= g[b].end)
                      g.splice(b, 1), b--;
              }
              g.sort(function(a2, b2) {
                return b2.diff - a2.diff;
              });
              for (t = 0; t < Math.min(g.length, this._axes[p].scaleBreaks.maxNumberOfAutoBreaks); t++)
                b = a(g[t].start, g[t].end, this._axes[p].logarithmic ? this._axes[p].dataInfo.max / this._axes[p].dataInfo.min : this._axes[p].dataInfo.max - this._axes[p].dataInfo.min, this._axes[p].logarithmic), this._axes[p].scaleBreaks.autoBreaks.push(new ba2(this, "autoBreaks", b, t, ++this._eventManager.lastObjectId, this._axes[p].scaleBreaks)), this._axes[p].scaleBreaks._appliedBreaks.push(this._axes[p].scaleBreaks.autoBreaks[this._axes[p].scaleBreaks.autoBreaks.length - 1]);
              this._axes[p].scaleBreaks._appliedBreaks.sort(function(a2, b2) {
                return a2.startValue - b2.startValue;
              });
            }
        }
      };
      l.prototype.renderCrosshairs = function(a) {
        for (var d = 0; d < this.axisX.length; d++)
          this.axisX[d] != a && (this.axisX[d].crosshair && this.axisX[d].crosshair.enabled && !this.axisX[d].crosshair._hidden) && this.axisX[d].showCrosshair(this.axisX[d].crosshair._updatedValue);
        for (d = 0; d < this.axisX2.length; d++)
          this.axisX2[d] != a && (this.axisX2[d].crosshair && this.axisX2[d].crosshair.enabled && !this.axisX2[d].crosshair._hidden) && this.axisX2[d].showCrosshair(this.axisX2[d].crosshair._updatedValue);
        for (d = 0; d < this.axisY.length; d++)
          this.axisY[d] != a && (this.axisY[d].crosshair && this.axisY[d].crosshair.enabled && !this.axisY[d].crosshair._hidden) && this.axisY[d].showCrosshair(this.axisY[d].crosshair._updatedValue);
        for (d = 0; d < this.axisY2.length; d++)
          this.axisY2[d] != a && (this.axisY2[d].crosshair && this.axisY2[d].crosshair.enabled && !this.axisY2[d].crosshair._hidden) && this.axisY2[d].showCrosshair(this.axisY2[d].crosshair._updatedValue);
      };
      l.prototype.getDataPointAtXY = function(a, d, c) {
        c = c || false;
        for (var b = [], e = this._dataInRenderedOrder.length - 1; 0 <= e; e--) {
          var g = null;
          (g = this._dataInRenderedOrder[e].getDataPointAtXY(a, d, c)) && b.push(g);
        }
        a = null;
        d = false;
        for (c = 0; c < b.length; c++)
          if ("line" === b[c].dataSeries.type || "stepLine" === b[c].dataSeries.type || "area" === b[c].dataSeries.type || "stepArea" === b[c].dataSeries.type) {
            if (e = na("markerSize", b[c].dataPoint, b[c].dataSeries) || 8, b[c].distance <= e / 2) {
              d = true;
              break;
            }
          }
        for (c = 0; c < b.length; c++)
          d && "line" !== b[c].dataSeries.type && "stepLine" !== b[c].dataSeries.type && "area" !== b[c].dataSeries.type && "stepArea" !== b[c].dataSeries.type || (a ? b[c].distance <= a.distance && (a = b[c]) : a = b[c]);
        return a;
      };
      l.prototype.getObjectAtXY = function(a, d, c) {
        var b = null;
        if (c = this.getDataPointAtXY(a, d, c || false))
          b = c.dataSeries.dataPointIds[c.dataPointIndex];
        else if (u)
          b = ab(a, d, this._eventManager.ghostCtx);
        else
          for (c = 0; c < this.legend.items.length; c++) {
            var e = this.legend.items[c];
            a >= e.x1 && (a <= e.x2 && d >= e.y1 && d <= e.y2) && (b = e.id);
          }
        return b;
      };
      l.prototype.getAutoFontSize = nb;
      l.prototype.resetOverlayedCanvas = function() {
        this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height);
      };
      l.prototype.clearCanvas = mb;
      l.prototype.attachEvent = function(a) {
        this._events.push(a);
      };
      l.prototype._touchEventHandler = function(a) {
        if (a.changedTouches && this.interactivityEnabled) {
          var d = [], c = a.changedTouches, b = c ? c[0] : a, e = null;
          switch (a.type) {
            case "touchstart":
            case "MSPointerDown":
              d = ["mousemove", "mousedown"];
              this._lastTouchData = Qa(b);
              this._lastTouchData.time = /* @__PURE__ */ new Date();
              break;
            case "touchmove":
            case "MSPointerMove":
              d = ["mousemove"];
              break;
            case "touchend":
            case "MSPointerUp":
              var g = this._lastTouchData && this._lastTouchData.time ? /* @__PURE__ */ new Date() - this._lastTouchData.time : 0, d = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType || 300 > g ? ["mouseup", "click"] : ["mouseup"];
              break;
            default:
              return;
          }
          if (!(c && 1 < c.length)) {
            e = Qa(b);
            e.time = /* @__PURE__ */ new Date();
            try {
              var p = e.y - this._lastTouchData.y, g = e.time - this._lastTouchData.time;
              if (1 < Math.abs(p) && this._lastTouchData.scroll || 5 < Math.abs(p) && 250 > g)
                this._lastTouchData.scroll = true;
            } catch (t) {
            }
            this._lastTouchEventType = a.type;
            if (this._lastTouchData.scroll && this.zoomEnabled)
              this.isDrag && this.resetOverlayedCanvas(), this.isDrag = false;
            else
              for (c = 0; c < d.length; c++)
                if (e = d[c], p = document.createEvent("MouseEvent"), p.initMouseEvent(
                  e,
                  true,
                  true,
                  window,
                  1,
                  b.screenX,
                  b.screenY,
                  b.clientX,
                  b.clientY,
                  false,
                  false,
                  false,
                  false,
                  0,
                  null
                ), b.target.dispatchEvent(p), !r(this._lastTouchData.scroll) && !this._lastTouchData.scroll || !this._lastTouchData.scroll && 250 < g || "click" === e)
                  a.preventManipulation && a.preventManipulation(), a.preventDefault && a.cancelable && a.preventDefault();
          }
        }
      };
      l.prototype._dispatchRangeEvent = function(a, d) {
        var c = { chart: this };
        c.type = a;
        c.trigger = d;
        var b = [];
        this.axisX && 0 < this.axisX.length && b.push("axisX");
        this.axisX2 && 0 < this.axisX2.length && b.push("axisX2");
        this.axisY && 0 < this.axisY.length && b.push("axisY");
        this.axisY2 && 0 < this.axisY2.length && b.push("axisY2");
        for (var e = 0; e < b.length; e++)
          if (r(c[b[e]]) && (c[b[e]] = []), "axisY" === b[e])
            for (var g = 0; g < this.axisY.length; g++)
              c[b[e]].push({ viewportMinimum: this[b[e]][g].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][g].sessionVariables.newViewportMaximum });
          else if ("axisY2" === b[e])
            for (g = 0; g < this.axisY2.length; g++)
              c[b[e]].push({ viewportMinimum: this[b[e]][g].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][g].sessionVariables.newViewportMaximum });
          else if ("axisX" === b[e])
            for (g = 0; g < this.axisX.length; g++)
              c[b[e]].push({ viewportMinimum: this[b[e]][g].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][g].sessionVariables.newViewportMaximum });
          else if ("axisX2" === b[e])
            for (g = 0; g < this.axisX2.length; g++)
              c[b[e]].push({ viewportMinimum: this[b[e]][g].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][g].sessionVariables.newViewportMaximum });
        this.dispatchEvent(a, c, this);
      };
      l.prototype._mouseEventHandler = function(a) {
        "undefined" === typeof a.target && a.srcElement && (a.target = a.srcElement);
        var d = Qa(a), c = a.type, b, e;
        a.which ? e = 3 == a.which : a.button && (e = 2 == a.button);
        l.capturedEventParam && (b = l.capturedEventParam, "mouseup" === c && (l.capturedEventParam = null, b.chart.overlaidCanvas.releaseCapture ? b.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", b.chart._mouseEventHandler, false)), b.hasOwnProperty(c) && ("mouseup" !== c || b.chart.overlaidCanvas.releaseCapture ? a.target !== b.chart.overlaidCanvas && u || b[c].call(b.context, d.x, d.y) : a.target !== b.chart.overlaidCanvas && (b.chart.isDrag = false)));
        if (this.interactivityEnabled) {
          if (this._ignoreNextEvent)
            this._ignoreNextEvent = false;
          else if (a.preventManipulation && a.preventManipulation(), a.preventDefault && a.preventDefault(), !e) {
            if (!l.capturedEventParam && this._events) {
              for (var g = 0; g < this._events.length; g++)
                if (this._events[g].hasOwnProperty(c))
                  if (b = this._events[g], e = b.bounds, d.x >= e.x1 && d.x <= e.x2 && d.y >= e.y1 && d.y <= e.y2) {
                    b[c].call(b.context, d.x, d.y);
                    "mousedown" === c && true === b.capture ? (l.capturedEventParam = b, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.documentElement.addEventListener("mouseup", this._mouseEventHandler, false)) : "mouseup" === c && (b.chart.overlaidCanvas.releaseCapture ? b.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", this._mouseEventHandler, false));
                    break;
                  } else
                    b = null;
              a.target.style.cursor = b && b.cursor ? b.cursor : this._defaultCursor;
            }
            c = this.plotArea;
            if (d.x < c.x1 || d.x > c.x2 || d.y < c.y1 || d.y > c.y2) {
              this.toolTip && this.toolTip.enabled ? (this.toolTip.hide(), this.toolTip.dispatchEvent("hidden", { chart: this, toolTip: this.toolTip }, this.toolTip)) : this.resetOverlayedCanvas();
              for (g = 0; g < this.axisX.length; g++)
                this.axisX[g].crosshair && this.axisX[g].crosshair.enabled && (this.axisX[g].crosshair.hide(), this.axisX[g].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX[g].options }, this.axisX[g].crosshair));
              for (g = 0; g < this.axisX2.length; g++)
                this.axisX2[g].crosshair && this.axisX2[g].crosshair.enabled && (this.axisX2[g].crosshair.hide(), this.axisX2[g].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX2[g].options }, this.axisX2[g].crosshair));
              for (g = 0; g < this.axisY.length; g++)
                this.axisY[g].crosshair && this.axisY[g].crosshair.enabled && (this.axisY[g].crosshair.hide(), this.axisY[g].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY[g].options }, this.axisY[g].crosshair));
              for (g = 0; g < this.axisY2.length; g++)
                this.axisY2[g].crosshair && this.axisY2[g].crosshair.enabled && (this.axisY2[g].crosshair.hide(), this.axisY2[g].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY2[g].options }, this.axisY2[g].crosshair));
            }
            this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(a);
          }
        }
      };
      l.prototype._plotAreaMouseDown = function(a, d) {
        this.isDrag = true;
        this.dragStartPoint = { x: a, y: d };
      };
      l.prototype._plotAreaMouseUp = function(a, d) {
        if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
          var c = d - this.dragStartPoint.y, b = a - this.dragStartPoint.x, e = 0 <= this.zoomType.indexOf("x"), g = 0 <= this.zoomType.indexOf("y"), p = false;
          this.resetOverlayedCanvas();
          if ("xySwapped" === this.plotInfo.axisPlacement)
            var t = g, g = e, e = t;
          if (this.panEnabled || this.zoomEnabled) {
            if (this.panEnabled)
              for (e = g = 0; e < this._axes.length; e++)
                c = this._axes[e], c.logarithmic ? c.viewportMinimum < c.minimum ? (g = c.minimum / c.viewportMinimum, c.sessionVariables.newViewportMinimum = c.viewportMinimum * g, c.sessionVariables.newViewportMaximum = c.viewportMaximum * g, p = true) : c.viewportMaximum > c.maximum && (g = c.viewportMaximum / c.maximum, c.sessionVariables.newViewportMinimum = c.viewportMinimum / g, c.sessionVariables.newViewportMaximum = c.viewportMaximum / g, p = true) : c.viewportMinimum < c.minimum ? (g = c.minimum - c.viewportMinimum, c.sessionVariables.newViewportMinimum = c.viewportMinimum + g, c.sessionVariables.newViewportMaximum = c.viewportMaximum + g, p = true) : c.viewportMaximum > c.maximum && (g = c.viewportMaximum - c.maximum, c.sessionVariables.newViewportMinimum = c.viewportMinimum - g, c.sessionVariables.newViewportMaximum = c.viewportMaximum - g, p = true);
            else if ((!e || 2 < Math.abs(b)) && (!g || 2 < Math.abs(c)) && this.zoomEnabled) {
              if (!this.dragStartPoint)
                return;
              c = e ? this.dragStartPoint.x : this.plotArea.x1;
              b = g ? this.dragStartPoint.y : this.plotArea.y1;
              e = e ? a : this.plotArea.x2;
              g = g ? d : this.plotArea.y2;
              2 < Math.abs(c - e) && 2 < Math.abs(b - g) && this._zoomPanToSelectedRegion(c, b, e, g) && (p = true);
            }
            p && (this._ignoreNextEvent = true, this._dispatchRangeEvent("rangeChanging", "zoom"), this.stockChart && (this.stockChart.navigator && this.stockChart.navigator.enabled) && (this.stockChart._rangeEventParameter || (this.stockChart._rangeEventParameter = { stockChart: this.stockChart, source: "chart", index: this.stockChart.charts.indexOf(this), minimum: this.stockChart.sessionVariables._axisXMin, maximum: this.stockChart.sessionVariables._axisXMax }), this.stockChart._rangeEventParameter.type = "rangeChanging", this.stockChart.dispatchEvent("rangeChanging", this.stockChart._rangeEventParameter, this.stockChart)), this.render(), this._dispatchRangeEvent("rangeChanged", "zoom"), this.stockChart && (this.stockChart.navigator && this.stockChart.navigator.enabled) && (this.stockChart._rangeEventParameter.type = "rangeChanged", this.stockChart.dispatchEvent("rangeChanged", this.stockChart._rangeEventParameter, this.stockChart)), p && (this.zoomEnabled && "none" === this._zoomButton.style.display) && (Na(this._zoomButton, this._resetButton), ta(this, this._zoomButton, "pan"), ta(this, this._resetButton, "reset")));
          }
        }
        this.isDrag = false;
        if ("none" !== this.plotInfo.axisPlacement) {
          this.resetOverlayedCanvas();
          if (this.axisX && 0 < this.axisX.length)
            for (p = 0; p < this.axisX.length; p++)
              this.axisX[p].crosshair && this.axisX[p].crosshair.enabled && this.axisX[p].renderCrosshair(a, d);
          if (this.axisX2 && 0 < this.axisX2.length)
            for (p = 0; p < this.axisX2.length; p++)
              this.axisX2[p].crosshair && this.axisX2[p].crosshair.enabled && this.axisX2[p].renderCrosshair(a, d);
          if (this.axisY && 0 < this.axisY.length)
            for (p = 0; p < this.axisY.length; p++)
              this.axisY[p].crosshair && this.axisY[p].crosshair.enabled && this.axisY[p].renderCrosshair(a, d);
          if (this.axisY2 && 0 < this.axisY2.length)
            for (p = 0; p < this.axisY2.length; p++)
              this.axisY2[p].crosshair && this.axisY2[p].crosshair.enabled && this.axisY2[p].renderCrosshair(a, d);
          if (this.axisX && 0 < this.axisX.length)
            for (p = 0; p < this.axisX.length; p++)
              this.axisX[p].crosshair && this.axisX[p].crosshair.enabled && this.axisX[p].crosshair.renderLabel();
          if (this.axisX2 && 0 < this.axisX2.length)
            for (p = 0; p < this.axisX2.length; p++)
              this.axisX2[p].crosshair && this.axisX2[p].crosshair.enabled && this.axisX2[p].crosshair.renderLabel();
          if (this.axisY && 0 < this.axisY.length)
            for (p = 0; p < this.axisY.length; p++)
              this.axisY[p].crosshair && this.axisY[p].crosshair.enabled && this.axisY[p].crosshair.renderLabel();
          if (this.axisY2 && 0 < this.axisY2.length)
            for (p = 0; p < this.axisY2.length; p++)
              this.axisY2[p].crosshair && this.axisY2[p].crosshair.enabled && this.axisY2[p].crosshair.renderLabel();
        }
      };
      l.prototype._plotAreaMouseMove = function(a, d) {
        if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
          var c = 0, b = 0, e = c = null, e = 0 <= this.zoomType.indexOf("x"), g = 0 <= this.zoomType.indexOf("y"), p = this;
          "xySwapped" === this.plotInfo.axisPlacement && (c = g, g = e, e = c);
          c = this.dragStartPoint.x - a;
          b = this.dragStartPoint.y - d;
          if (2 < Math.abs(c) && 8 > Math.abs(c) && (this.panEnabled || this.zoomEnabled)) {
            this.toolTip.hide();
            this.toolTip && this.toolTip.enabled && this.toolTip.dispatchEvent("hidden", { chart: this, toolTip: this.toolTip }, this.toolTip);
            for (var t = 0; t < this.axisX.length; t++)
              this.axisX[t].crosshair && this.axisX[t].crosshair.enabled && (this.axisX[t].crosshair.hide(), this.axisX[t].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX[t].options }, this.axisX[t].crosshair));
            for (t = 0; t < this.axisX2.length; t++)
              this.axisX2[t].crosshair && this.axisX2[t].crosshair.enabled && (this.axisX2[t].crosshair.hide(), this.axisX2[t].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX2[t].options }, this.axisX2[t].crosshair));
            for (t = 0; t < this.axisY.length; t++)
              this.axisY[t].crosshair && this.axisY[t].crosshair.enabled && (this.axisY[t].crosshair.hide(), this.axisY[t].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY[t].options }, this.axisY[t].crosshair));
            for (t = 0; t < this.axisY2.length; t++)
              this.axisY2[t].crosshair && this.axisY2[t].crosshair.enabled && (this.axisY2[t].crosshair.hide(), this.axisY2[t].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY2[t].options }, this.axisY2[t].crosshair));
          } else
            this.panEnabled || this.zoomEnabled || this.toolTip.mouseMoveHandler(a, d);
          if ((!e || 2 < Math.abs(c) || !g || 2 < Math.abs(b)) && (this.panEnabled || this.zoomEnabled)) {
            if (this.panEnabled)
              e = { x1: e ? this.plotArea.x1 + c : this.plotArea.x1, y1: g ? this.plotArea.y1 + b : this.plotArea.y1, x2: e ? this.plotArea.x2 + c : this.plotArea.x2, y2: g ? this.plotArea.y2 + b : this.plotArea.y2 }, clearTimeout(p._panTimerId), p._panTimerId = setTimeout(/* @__PURE__ */ function(b2, c2, e2, f) {
                return function() {
                  p._zoomPanToSelectedRegion(b2, c2, e2, f, true) && (p._dispatchRangeEvent("rangeChanging", "pan"), p.stockChart && (p.stockChart.navigator && p.stockChart.navigator.enabled) && (p.stockChart._rangeEventParameter.type = "rangeChanging", p.stockChart.dispatchEvent("rangeChanging", p.stockChart._rangeEventParameter, p.stockChart)), p.render(), p._dispatchRangeEvent("rangeChanged", "pan"), p.stockChart && (p.stockChart.navigator && p.stockChart.navigator.enabled) && (p.stockChart._rangeEventParameter.type = "rangeChanged", p.stockChart.dispatchEvent("rangeChanged", p.stockChart._rangeEventParameter, p.stockChart)), p.dragStartPoint.x = a, p.dragStartPoint.y = d);
                };
              }(e.x1, e.y1, e.x2, e.y2), 0);
            else if (this.zoomEnabled) {
              this.resetOverlayedCanvas();
              c = this.overlaidCanvasCtx.globalAlpha;
              this.overlaidCanvasCtx.fillStyle = "#A89896";
              var b = e ? this.dragStartPoint.x : this.plotArea.x1, t = g ? this.dragStartPoint.y : this.plotArea.y1, D = e ? a - this.dragStartPoint.x : this.plotArea.x2 - this.plotArea.x1, k = g ? d - this.dragStartPoint.y : this.plotArea.y2 - this.plotArea.y1;
              this.validateRegion(b, t, e ? a : this.plotArea.x2 - this.plotArea.x1, g ? d : this.plotArea.y2 - this.plotArea.y1, "xy" !== this.zoomType).isValid && (this.resetOverlayedCanvas(), this.overlaidCanvasCtx.fillStyle = "#99B2B5");
              this.overlaidCanvasCtx.globalAlpha = 0.7;
              this.overlaidCanvasCtx.fillRect(b, t, D, k);
              this.overlaidCanvasCtx.globalAlpha = c;
            }
          }
        } else if (this.toolTip.mouseMoveHandler(a, d), "none" !== this.plotInfo.axisPlacement) {
          if (this.axisX && 0 < this.axisX.length)
            for (e = 0; e < this.axisX.length; e++)
              this.axisX[e].crosshair && this.axisX[e].crosshair.enabled && this.axisX[e].renderCrosshair(a, d);
          if (this.axisX2 && 0 < this.axisX2.length)
            for (e = 0; e < this.axisX2.length; e++)
              this.axisX2[e].crosshair && this.axisX2[e].crosshair.enabled && this.axisX2[e].renderCrosshair(a, d);
          if (this.axisY && 0 < this.axisY.length)
            for (e = 0; e < this.axisY.length; e++)
              this.axisY[e].crosshair && this.axisY[e].crosshair.enabled && this.axisY[e].renderCrosshair(a, d);
          if (this.axisY2 && 0 < this.axisY2.length)
            for (e = 0; e < this.axisY2.length; e++)
              this.axisY2[e].crosshair && this.axisY2[e].crosshair.enabled && this.axisY2[e].renderCrosshair(
                a,
                d
              );
          if (this.axisX && 0 < this.axisX.length)
            for (e = 0; e < this.axisX.length; e++)
              this.axisX[e].crosshair && this.axisX[e].crosshair.enabled && this.axisX[e].crosshair.renderLabel();
          if (this.axisX2 && 0 < this.axisX2.length)
            for (e = 0; e < this.axisX2.length; e++)
              this.axisX2[e].crosshair && this.axisX2[e].crosshair.enabled && this.axisX2[e].crosshair.renderLabel();
          if (this.axisY && 0 < this.axisY.length)
            for (e = 0; e < this.axisY.length; e++)
              this.axisY[e].crosshair && this.axisY[e].crosshair.enabled && this.axisY[e].crosshair.renderLabel();
          if (this.axisY2 && 0 < this.axisY2.length)
            for (e = 0; e < this.axisY2.length; e++)
              this.axisY2[e].crosshair && this.axisY2[e].crosshair.enabled && this.axisY2[e].crosshair.renderLabel();
        }
      };
      l.prototype._zoomPanToSelectedRegion = function(a, d, c, b, e) {
        a = this.validateRegion(a, d, c, b, e);
        d = a.axesWithValidRange;
        c = a.axesRanges;
        if (a.isValid)
          for (b = 0; b < d.length; b++)
            e = c[b], d[b].setViewPortRange(e.val1, e.val2), this.syncCharts && "y" != this.zoomType && this.syncCharts(e.val1, e.val2), this.stockChart && (this.stockChart._rangeEventParameter = {
              stockChart: this.stockChart,
              source: "chart",
              index: this.stockChart.charts.indexOf(this),
              minimum: e.val1,
              maximum: e.val2
            });
        return a.isValid;
      };
      l.prototype.validateRegion = function(a, d, c, b, e) {
        e = e || false;
        for (var g = 0 <= this.zoomType.indexOf("x"), p = 0 <= this.zoomType.indexOf("y"), t = false, D = [], k = [], m = [], n = 0; n < this._axes.length; n++)
          ("axisX" === this._axes[n].type && g || "axisY" === this._axes[n].type && p) && k.push(this._axes[n]);
        for (p = 0; p < k.length; p++) {
          var n = k[p], g = false, q = n.convertPixelToValue({ x: a, y: d }), f = n.convertPixelToValue({ x: c, y: b });
          if (q > f)
            var h2 = f, f = q, q = h2;
          if (n.scaleBreaks)
            for (h2 = 0; !g && h2 < n.scaleBreaks._appliedBreaks.length; h2++)
              g = n.scaleBreaks._appliedBreaks[h2].startValue <= q && n.scaleBreaks._appliedBreaks[h2].endValue >= f;
          if (isFinite(n.dataInfo.minDiff)) {
            if (h2 = n.getApparentDifference(q, f, null, true), !(g || !(this.panEnabled && n.scaleBreaks && n.scaleBreaks._appliedBreaks.length) && (n.logarithmic && h2 < Math.pow(n.dataInfo.minDiff, 3) || !n.logarithmic && h2 < 3 * Math.abs(n.dataInfo.minDiff)) || q < n.minimum || f > n.maximum))
              D.push(n), m.push({ val1: q, val2: f }), t = true;
            else if (!e) {
              t = false;
              break;
            }
          }
        }
        return { isValid: t, axesWithValidRange: D, axesRanges: m };
      };
      l.prototype.preparePlotArea = function() {
        var a = this.plotArea;
        !u && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
        if ((this.axisX[0] || this.axisX2[0]) && (this.axisY[0] || this.axisY2[0])) {
          var d = this.axisX[0] ? this.axisX[0].lineCoordinates : this.axisX2[0].lineCoordinates;
          if (this.axisY && 0 < this.axisY.length && this.axisY[0]) {
            var c = this.axisY[0];
            a.x1 = d.x1 < d.x2 ? d.x1 : c.lineCoordinates.x1;
            a.y1 = d.y1 < c.lineCoordinates.y1 ? d.y1 : c.lineCoordinates.y1;
            a.x2 = d.x2 > c.lineCoordinates.x2 ? d.x2 : c.lineCoordinates.x2;
            a.y2 = d.y1 > c.lineCoordinates.y2 ? d.y1 : c.lineCoordinates.y2;
            a.width = a.x2 - a.x1;
            a.height = a.y2 - a.y1;
          }
          this.axisY2 && 0 < this.axisY2.length && this.axisY2[0] && (c = this.axisY2[0], a.x1 = d.x1 < d.x2 ? d.x1 : c.lineCoordinates.x1, a.y1 = d.y1 < c.lineCoordinates.y1 ? d.y1 : c.lineCoordinates.y1, a.x2 = d.x2 > c.lineCoordinates.x2 ? d.x2 : c.lineCoordinates.x2, a.y2 = d.y2 > c.lineCoordinates.y2 ? d.y2 : c.lineCoordinates.y2, a.width = a.x2 - a.x1, a.height = a.y2 - a.y1);
        } else
          d = this.layoutManager.getFreeSpace(), a.x1 = d.x1, a.x2 = d.x2, a.y1 = d.y1, a.y2 = d.y2, a.width = d.width, a.height = d.height;
        u || (a.canvas.width = a.width, a.canvas.height = a.height, a.canvas.style.left = a.x1 + "px", a.canvas.style.top = a.y1 + "px", (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1));
        a.layoutManager = new Ga(a.x1, a.y1, a.x2, a.y2, 2);
      };
      l.prototype.renderIndexLabels = function(a) {
        var d = a || this.plotArea.ctx, c = this.plotArea, b = 0, e = 0, g = 0, p = g = e = 0, t = 0, D = b = 0, k = 0;
        for (a = 0; a < this._indexLabels.length; a++) {
          var m = this._indexLabels[a], n = m.chartType.toLowerCase(), q, f, p = na(
            "indexLabelFontColor",
            m.dataPoint,
            m.dataSeries
          ), h2 = na("indexLabelFontSize", m.dataPoint, m.dataSeries), t = na("indexLabelFontFamily", m.dataPoint, m.dataSeries), D = na("indexLabelFontStyle", m.dataPoint, m.dataSeries), k = na("indexLabelFontWeight", m.dataPoint, m.dataSeries), y = na("indexLabelBackgroundColor", m.dataPoint, m.dataSeries);
          q = na("indexLabelMaxWidth", m.dataPoint, m.dataSeries);
          f = na("indexLabelWrap", m.dataPoint, m.dataSeries);
          var x = na("indexLabelLineDashType", m.dataPoint, m.dataSeries), s = na("indexLabelLineColor", m.dataPoint, m.dataSeries), l2 = r(m.dataPoint.indexLabelLineThickness) ? r(m.dataSeries.options.indexLabelLineThickness) ? 0 : m.dataSeries.options.indexLabelLineThickness : m.dataPoint.indexLabelLineThickness, b = 0 < l2 ? Math.min(10, ("normal" === this.plotInfo.axisPlacement ? this.plotArea.height : this.plotArea.width) << 0) : 0, v = { percent: null, total: null }, A = null;
          if (0 <= m.dataSeries.type.indexOf("stacked") || "pie" === m.dataSeries.type || "doughnut" === m.dataSeries.type)
            v = this.getPercentAndTotal(m.dataSeries, m.dataPoint);
          if (m.dataSeries.indexLabelFormatter || m.dataPoint.indexLabelFormatter)
            A = { chart: this, dataSeries: m.dataSeries, dataPoint: m.dataPoint, index: m.indexKeyword, total: v.total, percent: v.percent };
          var B = m.dataPoint.indexLabelFormatter ? m.dataPoint.indexLabelFormatter(A) : m.dataPoint.indexLabel ? this.replaceKeywordsWithValue(m.dataPoint.indexLabel, m.dataPoint, m.dataSeries, null, m.indexKeyword) : m.dataSeries.indexLabelFormatter ? m.dataSeries.indexLabelFormatter(A) : m.dataSeries.indexLabel ? this.replaceKeywordsWithValue(
            m.dataSeries.indexLabel,
            m.dataPoint,
            m.dataSeries,
            null,
            m.indexKeyword
          ) : null;
          if (null !== B && "" !== B) {
            var v = na("indexLabelPlacement", m.dataPoint, m.dataSeries), A = na("indexLabelOrientation", m.dataPoint, m.dataSeries), J = na("indexLabelTextAlign", m.dataPoint, m.dataSeries), z3 = m.direction, e = m.dataSeries.axisX, g = m.dataSeries.axisY, C2 = false, y = new ka(d, { x: 0, y: 0, maxWidth: q ? q : 0.5 * this.width, maxHeight: f ? 5 * h2 : 1.5 * h2, angle: "horizontal" === A ? 0 : -90, text: B, padding: 0, backgroundColor: y, textAlign: J, fontSize: h2, fontFamily: t, fontWeight: k, fontColor: p, fontStyle: D, textBaseline: "middle" });
            y.measureText();
            m.dataSeries.indexLabelMaxWidth = y.maxWidth;
            if ("stackedarea100" === n) {
              if (m.point.x < c.x1 || m.point.x > c.x2 || m.point.y < c.y1 - 1 || m.point.y > c.y2 + 1)
                continue;
            } else if ("rangearea" === n || "rangesplinearea" === n) {
              if (m.dataPoint.x < e.viewportMinimum || m.dataPoint.x > e.viewportMaximum || Math.max.apply(null, m.dataPoint.y) < g.viewportMinimum || Math.min.apply(null, m.dataPoint.y) > g.viewportMaximum)
                continue;
            } else if (0 <= n.indexOf("line") || 0 <= n.indexOf("area") || 0 <= n.indexOf("bubble") || 0 <= n.indexOf("scatter")) {
              if (m.dataPoint.x < e.viewportMinimum || m.dataPoint.x > e.viewportMaximum || m.dataPoint.y < g.viewportMinimum || m.dataPoint.y > g.viewportMaximum)
                continue;
            } else if (0 <= n.indexOf("column") || "waterfall" === n || "error" === n && !m.axisSwapped) {
              if (m.dataPoint.x < e.viewportMinimum || m.dataPoint.x > e.viewportMaximum || m.bounds.y1 > c.y2 || m.bounds.y2 < c.y1)
                continue;
            } else if (0 <= n.indexOf("bar") || "error" === n) {
              if (m.dataPoint.x < e.viewportMinimum || m.dataPoint.x > e.viewportMaximum || m.bounds.x1 > c.x2 || m.bounds.x2 < c.x1)
                continue;
            } else if ("candlestick" === n || "ohlc" === n) {
              if (m.dataPoint.x < e.viewportMinimum || m.dataPoint.x > e.viewportMaximum || Math.max.apply(null, m.dataPoint.y) < g.viewportMinimum || Math.min.apply(null, m.dataPoint.y) > g.viewportMaximum)
                continue;
            } else if (m.dataPoint.x < e.viewportMinimum || m.dataPoint.x > e.viewportMaximum)
              continue;
            p = t = 2;
            "horizontal" === A ? (D = y.width, k = y.height) : (k = y.width, D = y.height);
            if ("normal" === this.plotInfo.axisPlacement) {
              if (0 <= n.indexOf("line") || 0 <= n.indexOf("area"))
                v = "auto", t = 4;
              else if (0 <= n.indexOf("stacked"))
                "auto" === v && (v = "inside");
              else if ("bubble" === n || "scatter" === n)
                v = "inside";
              q = m.point.x - ("horizontal" === A ? D / 2 : D / 2 - h2 / 2);
              "inside" !== v ? (e = c.y1, g = c.y2, 0 < z3 ? (f = m.point.y + ("horizontal" === A ? h2 / 2 : 0) - k - t - b, f < e && (f = "auto" === v ? Math.max(m.point.y, e) + h2 / 2 + t : e + h2 / 2 + t, C2 = f + k > m.point.y)) : (f = m.point.y + h2 / 2 + t + b, f > g - k && (f = "auto" === v ? Math.min(m.point.y, g) + h2 / 2 - k - t : g + h2 / 2 - k, C2 = f < m.point.y))) : (e = Math.max(m.bounds.y1, c.y1), g = Math.min(m.bounds.y2, c.y2 - k + h2 / 2), b = 0 <= n.indexOf("range") || "error" === n ? 0 < z3 ? Math.max(m.bounds.y1, c.y1) + h2 / 2 + t : Math.min(m.bounds.y2, c.y2) + h2 / 2 - k + t : (Math.max(
                m.bounds.y1,
                c.y1
              ) + Math.min(m.bounds.y2, c.y2)) / 2 - k / 2 + h2 / 2 + ("horizontal" === A ? t : 0), 0 < z3 ? (f = Math.max(m.point.y, b), f < e && ("bubble" === n || "scatter" === n) && (f = Math.max(m.point.y - k - t, c.y1 + t))) : (f = Math.min(m.point.y, b), f > g - k - t && ("bubble" === n || "scatter" === n) && (f = Math.min(m.point.y + t, c.y2 - k - t))), f = Math.min(f, g));
            } else
              0 <= n.indexOf("line") || 0 <= n.indexOf("area") || 0 <= n.indexOf("scatter") ? (v = "auto", p = 4) : 0 <= n.indexOf("stacked") ? "auto" === v && (v = "inside") : "bubble" === n && (v = "inside"), f = m.point.y + h2 / 2 - k / 2 + t, "inside" !== v ? (e = c.x1, g = c.x2, 0 > z3 ? (q = m.point.x - ("horizontal" === A ? D : D - h2 / 2) - p - b, q < e && (q = "auto" === v ? Math.max(m.point.x, e) + p : e + p, C2 = q + D > m.point.x)) : (q = m.point.x + ("horizontal" === A ? 0 : h2 / 2) + p + b, q > g - D - p - b && (q = "auto" === v ? Math.min(m.point.x, g) - ("horizontal" === A ? D : D / 2) - p : g - D - p, C2 = q < m.point.x))) : (e = Math.max(m.bounds.x1, c.x1), Math.min(m.bounds.x2, c.x2), b = 0 <= n.indexOf("range") || "error" === n ? 0 > z3 ? Math.max(m.bounds.x1, c.x1) + h2 / 2 + p : Math.min(m.bounds.x2, c.x2) - D / 2 - p + ("horizontal" === A ? 0 : h2 / 2) : (Math.max(m.bounds.x1, c.x1) + Math.min(m.bounds.x2, c.x2)) / 2 + ("horizontal" === A ? 0 : h2 / 2), q = 0 > z3 ? Math.max(m.point.x, b) - ("horizontal" === A ? D / 2 : 0) : Math.min(m.point.x, b) - D / 2, q = Math.max(q, e));
            "vertical" === A && (f += k - h2 / 2);
            y.x = q;
            y.y = f;
            y.render(true);
            l2 && ("inside" !== v && (0 > n.indexOf("bar") && ("error" !== n || !m.axisSwapped) && m.point.x > c.x1 && m.point.x < c.x2 || !C2) && (0 > n.indexOf("column") && ("error" !== n || m.axisSwapped) && m.point.y > c.y1 && m.point.y < c.y2 || !C2)) && (d.lineWidth = l2, d.strokeStyle = s ? s : "gray", d.setLineDash && d.setLineDash(K(x, l2)), d.beginPath(), d.moveTo(m.point.x, m.point.y), 0 <= n.indexOf("bar") || "error" === n && m.axisSwapped ? d.lineTo(q + (0 < m.direction ? -p : D + p) + ("vertical" === A ? -h2 / 2 : 0), f + ("vertical" === A ? -k / 2 : k / 2 - h2 / 2) - t) : 0 <= n.indexOf("column") || "error" === n && !m.axisSwapped ? d.lineTo(q + D / 2 - ("horizontal" === A ? 0 : h2 / 2), f + ("vertical" === A ? (f - k < m.point.y ? 0 : -k) + t : (f - h2 / 2 < m.point.y ? k : 0) - h2 / 2)) : 0 <= n.indexOf("waterfall") ? d.lineTo(q + D / 2 - ("horizontal" === A ? 0 : h2 / 2), "vertical" === A ? 0 < z3 && f < m.point.y ? f : 0 > z3 && f - k > m.point.y ? f - k : m.point.y : 0 < z3 && f + k - h2 / 2 < m.point.y ? f + k - h2 / 2 : 0 > z3 && f - h2 / 2 > m.point.y ? f - h2 / 2 - 2 : m.point.y) : d.lineTo(q + D / 2 - ("horizontal" === A ? 0 : h2 / 2), f + ("vertical" === A ? f - k < m.point.y ? 0 : -k : (f + k < m.point.y ? k : 0) - h2 / 2)), d.stroke());
          }
        }
        d = { source: d, dest: this.plotArea.ctx, animationCallback: P.fadeInAnimation, easingFunction: P.easing.easeInQuad, animationBase: 0, startTimePercent: 0.7 };
        for (a = 0; a < this._indexLabels.length; a++)
          m = this._indexLabels[a], y = na("indexLabelBackgroundColor", m.dataPoint, m.dataSeries), m.dataSeries.indexLabelBackgroundColor = r(y) ? u ? "transparent" : null : y;
        return d;
      };
      l.prototype.renderLine = function(a) {
        var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var b = this._eventManager.ghostCtx;
          c.save();
          var e = this.plotArea;
          c.beginPath();
          c.rect(e.x1, e.y1, e.width, e.height);
          c.clip();
          for (var g = [], p, t = 0; t < a.dataSeriesIndexes.length; t++) {
            var D = a.dataSeriesIndexes[t], k = this.data[D];
            c.lineWidth = k.lineThickness;
            var m = k.dataPoints, n = "solid";
            if (c.setLineDash) {
              var q = K(k.nullDataLineDashType, k.lineThickness), n = k.lineDashType, f = K(n, k.lineThickness);
              c.setLineDash(f);
            }
            var h2 = k.id;
            this._eventManager.objectMap[h2] = { objectType: "dataSeries", dataSeriesIndex: D };
            h2 = Z(h2);
            b.strokeStyle = h2;
            b.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
            var h2 = k._colorSet, r2 = h2 = k.lineColor = k.options.lineColor ? k.options.lineColor : h2[0];
            c.strokeStyle = h2;
            var x = true, s = 0, l2, v;
            c.beginPath();
            if (0 < m.length) {
              for (var A = false, s = 0; s < m.length; s++)
                if (l2 = m[s].x.getTime ? m[s].x.getTime() : m[s].x, !(l2 < a.axisX.dataInfo.viewPortMin || l2 > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !A)))
                  if ("number" !== typeof m[s].y)
                    0 < s && !(k.connectNullData || A || x) && (c.stroke(), u && b.stroke()), A = true;
                  else {
                    l2 = a.axisX.convertValueToPixel(l2);
                    v = a.axisY.convertValueToPixel(m[s].y);
                    var B = k.dataPointIds[s];
                    this._eventManager.objectMap[B] = { id: B, objectType: "dataPoint", dataSeriesIndex: D, dataPointIndex: s, x1: l2, y1: v };
                    x || A ? (!x && k.connectNullData ? (c.setLineDash && (k.options.nullDataLineDashType || n === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (c.stroke(), c.beginPath(), c.moveTo(p.x, p.y), n = k.nullDataLineDashType, c.setLineDash(q)), c.lineTo(l2, v), u && b.lineTo(l2, v)) : (c.beginPath(), c.moveTo(
                      l2,
                      v
                    ), u && (b.beginPath(), b.moveTo(l2, v))), A = x = false) : (c.lineTo(l2, v), u && b.lineTo(l2, v), 0 == s % 500 && (c.stroke(), c.beginPath(), c.moveTo(l2, v), u && (b.stroke(), b.beginPath(), b.moveTo(l2, v))));
                    p = { x: l2, y: v };
                    s < m.length - 1 && (r2 !== (m[s].lineColor || h2) || n !== (m[s].lineDashType || k.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(l2, v), r2 = m[s].lineColor || h2, c.strokeStyle = r2, c.setLineDash && (m[s].lineDashType ? (n = m[s].lineDashType, c.setLineDash(K(n, k.lineThickness))) : (n = k.lineDashType, c.setLineDash(f))));
                    if (0 !== m[s].markerSize && (0 < m[s].markerSize || 0 < k.markerSize)) {
                      var J = k.getMarkerProperties(s, l2, v, c);
                      g.push(J);
                      B = Z(B);
                      u && g.push({ x: l2, y: v, ctx: b, type: J.type, size: J.size, color: B, borderColor: B, borderThickness: J.borderThickness });
                    }
                    (m[s].indexLabel || k.indexLabel || m[s].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({ chartType: "line", dataPoint: m[s], dataSeries: k, point: { x: l2, y: v }, direction: 0 > m[s].y === a.axisY.reversed ? 1 : -1, color: h2 });
                  }
              c.stroke();
              u && b.stroke();
            }
          }
          Y.drawMarkers(g);
          u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), b.beginPath());
          c.restore();
          c.beginPath();
          return { source: d, dest: this.plotArea.ctx, animationCallback: P.xClipAnimation, easingFunction: P.easing.linear, animationBase: 0 };
        }
      };
      l.prototype.renderStepLine = function(a) {
        var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var b = this._eventManager.ghostCtx;
          c.save();
          var e = this.plotArea;
          c.beginPath();
          c.rect(e.x1, e.y1, e.width, e.height);
          c.clip();
          for (var g = [], p, t = 0; t < a.dataSeriesIndexes.length; t++) {
            var h2 = a.dataSeriesIndexes[t], k = this.data[h2];
            c.lineWidth = k.lineThickness;
            var m = k.dataPoints, n = "solid";
            if (c.setLineDash) {
              var q = K(k.nullDataLineDashType, k.lineThickness), n = k.lineDashType, f = K(n, k.lineThickness);
              c.setLineDash(f);
            }
            var F = k.id;
            this._eventManager.objectMap[F] = { objectType: "dataSeries", dataSeriesIndex: h2 };
            F = Z(F);
            b.strokeStyle = F;
            b.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
            var F = k._colorSet, r2 = F = k.lineColor = k.options.lineColor ? k.options.lineColor : F[0];
            c.strokeStyle = F;
            var l2 = true, s = 0, w, v;
            c.beginPath();
            if (0 < m.length) {
              for (var A = false, s = 0; s < m.length; s++)
                if (w = m[s].getTime ? m[s].x.getTime() : m[s].x, !(w < a.axisX.dataInfo.viewPortMin || w > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !A)))
                  if ("number" !== typeof m[s].y)
                    0 < s && !(k.connectNullData || A || l2) && (c.stroke(), u && b.stroke()), A = true;
                  else {
                    var B = v;
                    w = a.axisX.convertValueToPixel(w);
                    v = a.axisY.convertValueToPixel(m[s].y);
                    var J = k.dataPointIds[s];
                    this._eventManager.objectMap[J] = { id: J, objectType: "dataPoint", dataSeriesIndex: h2, dataPointIndex: s, x1: w, y1: v };
                    l2 || A ? (!l2 && k.connectNullData ? (c.setLineDash && (k.options.nullDataLineDashType || n === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (c.stroke(), c.beginPath(), c.moveTo(p.x, p.y), n = k.nullDataLineDashType, c.setLineDash(q)), c.lineTo(w, B), c.lineTo(w, v), u && (b.lineTo(w, B), b.lineTo(w, v))) : (c.beginPath(), c.moveTo(w, v), u && (b.beginPath(), b.moveTo(w, v))), A = l2 = false) : (c.lineTo(w, B), u && b.lineTo(w, B), c.lineTo(w, v), u && b.lineTo(w, v), 0 == s % 500 && (c.stroke(), c.beginPath(), c.moveTo(w, v), u && (b.stroke(), b.beginPath(), b.moveTo(w, v))));
                    p = { x: w, y: v };
                    s < m.length - 1 && (r2 !== (m[s].lineColor || F) || n !== (m[s].lineDashType || k.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(w, v), r2 = m[s].lineColor || F, c.strokeStyle = r2, c.setLineDash && (m[s].lineDashType ? (n = m[s].lineDashType, c.setLineDash(K(n, k.lineThickness))) : (n = k.lineDashType, c.setLineDash(f))));
                    0 !== m[s].markerSize && (0 < m[s].markerSize || 0 < k.markerSize) && (B = k.getMarkerProperties(s, w, v, c), g.push(B), J = Z(J), u && g.push({ x: w, y: v, ctx: b, type: B.type, size: B.size, color: J, borderColor: J, borderThickness: B.borderThickness }));
                    (m[s].indexLabel || k.indexLabel || m[s].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({ chartType: "stepLine", dataPoint: m[s], dataSeries: k, point: { x: w, y: v }, direction: 0 > m[s].y === a.axisY.reversed ? 1 : -1, color: F });
                  }
              c.stroke();
              u && b.stroke();
            }
          }
          Y.drawMarkers(g);
          u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), b.beginPath());
          c.restore();
          c.beginPath();
          return { source: d, dest: this.plotArea.ctx, animationCallback: P.xClipAnimation, easingFunction: P.easing.linear, animationBase: 0 };
        }
      };
      l.prototype.renderSpline = function(a) {
        function d(a2) {
          a2 = z2(a2, 2);
          if (0 < a2.length) {
            b.beginPath();
            u && e.beginPath();
            b.moveTo(a2[0].x, a2[0].y);
            a2[0].newStrokeStyle && (b.strokeStyle = a2[0].newStrokeStyle);
            a2[0].newLineDashArray && b.setLineDash(a2[0].newLineDashArray);
            u && e.moveTo(a2[0].x, a2[0].y);
            for (var c2 = 0; c2 < a2.length - 3; c2 += 3)
              if (b.bezierCurveTo(a2[c2 + 1].x, a2[c2 + 1].y, a2[c2 + 2].x, a2[c2 + 2].y, a2[c2 + 3].x, a2[c2 + 3].y), u && e.bezierCurveTo(a2[c2 + 1].x, a2[c2 + 1].y, a2[c2 + 2].x, a2[c2 + 2].y, a2[c2 + 3].x, a2[c2 + 3].y), 0 < c2 && 0 === c2 % 3e3 || a2[c2 + 3].newStrokeStyle || a2[c2 + 3].newLineDashArray)
                b.stroke(), b.beginPath(), b.moveTo(a2[c2 + 3].x, a2[c2 + 3].y), a2[c2 + 3].newStrokeStyle && (b.strokeStyle = a2[c2 + 3].newStrokeStyle), a2[c2 + 3].newLineDashArray && b.setLineDash(a2[c2 + 3].newLineDashArray), u && (e.stroke(), e.beginPath(), e.moveTo(a2[c2 + 3].x, a2[c2 + 3].y));
            b.stroke();
            u && e.stroke();
          }
        }
        var c = a.targetCanvasCtx || this.plotArea.ctx, b = u ? this._preRenderCtx : c;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var e = this._eventManager.ghostCtx;
          b.save();
          var g = this.plotArea;
          b.beginPath();
          b.rect(g.x1, g.y1, g.width, g.height);
          b.clip();
          for (var p = [], t = 0; t < a.dataSeriesIndexes.length; t++) {
            var h2 = a.dataSeriesIndexes[t], k = this.data[h2];
            b.lineWidth = k.lineThickness;
            var m = k.dataPoints, n = "solid";
            if (b.setLineDash) {
              var q = K(k.nullDataLineDashType, k.lineThickness), n = k.lineDashType, f = K(n, k.lineThickness);
              b.setLineDash(f);
            }
            var F = k.id;
            this._eventManager.objectMap[F] = { objectType: "dataSeries", dataSeriesIndex: h2 };
            F = Z(F);
            e.strokeStyle = F;
            e.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
            var F = k._colorSet, r2 = F = k.lineColor = k.options.lineColor ? k.options.lineColor : F[0];
            b.strokeStyle = F;
            var l2 = 0, s, w, v = [];
            b.beginPath();
            if (0 < m.length) {
              for (w = false, l2 = 0; l2 < m.length; l2++)
                if (s = m[l2].getTime ? m[l2].x.getTime() : m[l2].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !w)))
                  if ("number" !== typeof m[l2].y)
                    0 < l2 && !w && (k.connectNullData ? b.setLineDash && (0 < v.length && (k.options.nullDataLineDashType || !m[l2 - 1].lineDashType)) && (v[v.length - 1].newLineDashArray = q, n = k.nullDataLineDashType) : (d(v), v = [])), w = true;
                  else {
                    s = a.axisX.convertValueToPixel(s);
                    w = a.axisY.convertValueToPixel(m[l2].y);
                    var A = k.dataPointIds[l2];
                    this._eventManager.objectMap[A] = { id: A, objectType: "dataPoint", dataSeriesIndex: h2, dataPointIndex: l2, x1: s, y1: w };
                    v[v.length] = { x: s, y: w };
                    l2 < m.length - 1 && (r2 !== (m[l2].lineColor || F) || n !== (m[l2].lineDashType || k.lineDashType)) && (r2 = m[l2].lineColor || F, v[v.length - 1].newStrokeStyle = r2, b.setLineDash && (m[l2].lineDashType ? (n = m[l2].lineDashType, v[v.length - 1].newLineDashArray = K(n, k.lineThickness)) : (n = k.lineDashType, v[v.length - 1].newLineDashArray = f)));
                    if (0 !== m[l2].markerSize && (0 < m[l2].markerSize || 0 < k.markerSize)) {
                      var B = k.getMarkerProperties(l2, s, w, b);
                      p.push(B);
                      A = Z(A);
                      u && p.push({ x: s, y: w, ctx: e, type: B.type, size: B.size, color: A, borderColor: A, borderThickness: B.borderThickness });
                    }
                    (m[l2].indexLabel || k.indexLabel || m[l2].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({ chartType: "spline", dataPoint: m[l2], dataSeries: k, point: { x: s, y: w }, direction: 0 > m[l2].y === a.axisY.reversed ? 1 : -1, color: F });
                    w = false;
                  }
            }
            d(v);
          }
          Y.drawMarkers(p);
          u && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(g.x1, g.y1, g.width, g.height), e.beginPath());
          b.restore();
          b.beginPath();
          return {
            source: c,
            dest: this.plotArea.ctx,
            animationCallback: P.xClipAnimation,
            easingFunction: P.easing.linear,
            animationBase: 0
          };
        }
      };
      l.prototype.renderColumn = function(a) {
        var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var b = null, e = this.plotArea, g = 0, p, t, h2, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), g = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, m = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0, n = a.axisX.dataInfo.minDiff;
          isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
          n = this.dataPointWidth = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.range) : Math.abs(n) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
          this.dataPointMaxWidth && g > m && (g = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, m));
          !this.dataPointMaxWidth && (this.dataPointMinWidth && m < g) && (m = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, g));
          n < g && (n = g);
          n > m && (n = m);
          c.save();
          u && this._eventManager.ghostCtx.save();
          c.beginPath();
          c.rect(e.x1, e.y1, e.width, e.height);
          c.clip();
          u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
          for (m = 0; m < a.dataSeriesIndexes.length; m++) {
            var q = a.dataSeriesIndexes[m], f = this.data[q], F = f.dataPoints;
            if (0 < F.length) {
              for (var r2 = 5 < n && f.bevelEnabled ? true : false, g = 0; g < F.length; g++)
                if (F[g].getTime ? h2 = F[g].x.getTime() : h2 = F[g].x, !(h2 < a.axisX.dataInfo.viewPortMin || h2 > a.axisX.dataInfo.viewPortMax) && "number" === typeof F[g].y) {
                  p = a.axisX.convertValueToPixel(h2);
                  t = a.axisY.convertValueToPixel(F[g].y);
                  p = a.axisX.reversed ? p + a.plotType.totalDataSeries * n / 2 - (a.previousDataSeriesCount + m) * n << 0 : p - a.plotType.totalDataSeries * n / 2 + (a.previousDataSeriesCount + m) * n << 0;
                  var l2 = a.axisX.reversed ? p - n << 0 : p + n << 0, s;
                  0 <= F[g].y ? s = k : (s = t, t = k);
                  t > s && (b = t, t = s, s = b);
                  b = F[g].color ? F[g].color : f._colorSet[g % f._colorSet.length];
                  $(c, a.axisX.reversed ? l2 : p, t, a.axisX.reversed ? p : l2, s, b, 0, null, r2 && (a.axisY.reversed ? 0 > F[g].y : 0 <= F[g].y), (a.axisY.reversed ? 0 <= F[g].y : 0 > F[g].y) && r2, false, false, f.fillOpacity);
                  b = f.dataPointIds[g];
                  this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: g, x1: p, y1: t, x2: l2, y2: s };
                  b = Z(b);
                  u && $(
                    this._eventManager.ghostCtx,
                    a.axisX.reversed ? l2 : p,
                    t,
                    a.axisX.reversed ? p : l2,
                    s,
                    b,
                    0,
                    null,
                    false,
                    false,
                    false,
                    false
                  );
                  (F[g].indexLabel || f.indexLabel || F[g].indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({ chartType: "column", dataPoint: F[g], dataSeries: f, point: { x: p + (l2 - p) / 2, y: 0 > F[g].y === a.axisY.reversed ? t : s }, direction: 0 > F[g].y === a.axisY.reversed ? 1 : -1, bounds: { x1: p, y1: Math.min(t, s), x2: l2, y2: Math.max(t, s) }, color: b });
                }
            }
          }
          u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
          c.restore();
          return { source: d, dest: this.plotArea.ctx, animationCallback: P.yScaleAnimation, easingFunction: P.easing.easeOutQuart, animationBase: k < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : k > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : k };
        }
      };
      l.prototype.renderStackedColumn = function(a) {
        var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var b = null, e = this.plotArea, g = [], p = [], t = [], h2 = [], k = 0, m, n, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0, F = a.axisX.dataInfo.minDiff;
          isFinite(F) || (F = 0.3 * Math.abs(a.axisX.range));
          F = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(F) / Math.log(a.axisX.range) : Math.abs(F) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
          this.dataPointMaxWidth && k > f && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
          !this.dataPointMaxWidth && (this.dataPointMinWidth && f < k) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
          F < k && (F = k);
          F > f && (F = f);
          c.save();
          u && this._eventManager.ghostCtx.save();
          c.beginPath();
          c.rect(e.x1, e.y1, e.width, e.height);
          c.clip();
          u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
          for (f = 0; f < a.dataSeriesIndexes.length; f++) {
            var r2 = a.dataSeriesIndexes[f], l2 = this.data[r2], s = l2.dataPoints;
            if (0 < s.length) {
              var w = 5 < F && l2.bevelEnabled ? true : false;
              c.strokeStyle = "#4572A7 ";
              for (k = 0; k < s.length; k++)
                if (b = s[k].x.getTime ? s[k].x.getTime() : s[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y) {
                  m = a.axisX.convertValueToPixel(b);
                  m = m - a.plotType.plotUnits.length * F / 2 + a.index * F << 0;
                  var v = m + F << 0, A;
                  if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y)
                    t[b] = s[k].y + (t[b] ? t[b] : 0), 0 < t[b] && (n = a.axisY.convertValueToPixel(t[b]), A = "undefined" !== typeof g[b] ? g[b] : q, g[b] = n);
                  else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y)
                    h2[b] = s[k].y + (h2[b] ? h2[b] : 0), A = a.axisY.convertValueToPixel(h2[b]), n = "undefined" !== typeof p[b] ? p[b] : q, p[b] = A;
                  else if (n = a.axisY.convertValueToPixel(s[k].y), 0 <= s[k].y) {
                    var B = "undefined" !== typeof g[b] ? g[b] : 0;
                    n -= B;
                    A = q - B;
                    g[b] = B + (A - n);
                  } else
                    B = p[b] ? p[b] : 0, A = n + B, n = q + B, p[b] = B + (A - n);
                  b = s[k].color ? s[k].color : l2._colorSet[k % l2._colorSet.length];
                  $(c, m, a.axisY.reversed ? A : n, v, a.axisY.reversed ? n : A, b, 0, null, w && (a.axisY.reversed ? 0 > s[k].y : 0 <= s[k].y), (a.axisY.reversed ? 0 <= s[k].y : 0 > s[k].y) && w, false, false, l2.fillOpacity);
                  b = l2.dataPointIds[k];
                  this._eventManager.objectMap[b] = {
                    id: b,
                    objectType: "dataPoint",
                    dataSeriesIndex: r2,
                    dataPointIndex: k,
                    x1: m,
                    y1: n,
                    x2: v,
                    y2: A
                  };
                  b = Z(b);
                  u && $(this._eventManager.ghostCtx, m, n, v, A, b, 0, null, false, false, false, false);
                  (s[k].indexLabel || l2.indexLabel || s[k].indexLabelFormatter || l2.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedColumn", dataPoint: s[k], dataSeries: l2, point: { x: m + (v - m) / 2, y: 0 <= s[k].y ? n : A }, direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1, bounds: { x1: m, y1: Math.min(n, A), x2: v, y2: Math.max(n, A) }, color: b });
                }
            }
          }
          u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
          c.restore();
          return { source: d, dest: this.plotArea.ctx, animationCallback: P.yScaleAnimation, easingFunction: P.easing.easeOutQuart, animationBase: q < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : q > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : q };
        }
      };
      l.prototype.renderStackedColumn100 = function(a) {
        var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var b = null, e = this.plotArea, g = [], p = [], t = [], h2 = [], k = 0, m, n, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0, F = a.axisX.dataInfo.minDiff;
          isFinite(F) || (F = 0.3 * Math.abs(a.axisX.range));
          F = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(F) / Math.log(a.axisX.range) : Math.abs(F) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
          this.dataPointMaxWidth && k > f && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
          !this.dataPointMaxWidth && (this.dataPointMinWidth && f < k) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
          F < k && (F = k);
          F > f && (F = f);
          c.save();
          u && this._eventManager.ghostCtx.save();
          c.beginPath();
          c.rect(e.x1, e.y1, e.width, e.height);
          c.clip();
          u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
          for (f = 0; f < a.dataSeriesIndexes.length; f++) {
            var l2 = a.dataSeriesIndexes[f], r2 = this.data[l2], s = r2.dataPoints;
            if (0 < s.length) {
              for (var w = 5 < F && r2.bevelEnabled ? true : false, k = 0; k < s.length; k++)
                if (b = s[k].x.getTime ? s[k].x.getTime() : s[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y) {
                  m = a.axisX.convertValueToPixel(b);
                  n = 0 !== a.dataPointYSums[b] ? 100 * (s[k].y / a.dataPointYSums[b]) : 0;
                  m = m - a.plotType.plotUnits.length * F / 2 + a.index * F << 0;
                  var v = m + F << 0, A;
                  if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y) {
                    t[b] = n + ("undefined" !== typeof t[b] ? t[b] : 0);
                    if (0 >= t[b])
                      continue;
                    n = a.axisY.convertValueToPixel(t[b]);
                    A = g[b] ? g[b] : q;
                    g[b] = n;
                  } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y)
                    h2[b] = n + ("undefined" !== typeof h2[b] ? h2[b] : 0), A = a.axisY.convertValueToPixel(h2[b]), n = p[b] ? p[b] : q, p[b] = A;
                  else if (n = a.axisY.convertValueToPixel(n), 0 <= s[k].y) {
                    var B = "undefined" !== typeof g[b] ? g[b] : 0;
                    n -= B;
                    A = q - B;
                    a.dataSeriesIndexes.length - 1 === f && 1 >= Math.abs(e.y1 - n) && (n = e.y1);
                    g[b] = B + (A - n);
                  } else
                    B = "undefined" !== typeof p[b] ? p[b] : 0, A = n + B, n = q + B, a.dataSeriesIndexes.length - 1 === f && 1 >= Math.abs(e.y2 - A) && (A = e.y2), p[b] = B + (A - n);
                  b = s[k].color ? s[k].color : r2._colorSet[k % r2._colorSet.length];
                  $(
                    c,
                    m,
                    a.axisY.reversed ? A : n,
                    v,
                    a.axisY.reversed ? n : A,
                    b,
                    0,
                    null,
                    w && (a.axisY.reversed ? 0 > s[k].y : 0 <= s[k].y),
                    (a.axisY.reversed ? 0 <= s[k].y : 0 > s[k].y) && w,
                    false,
                    false,
                    r2.fillOpacity
                  );
                  b = r2.dataPointIds[k];
                  this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: l2, dataPointIndex: k, x1: m, y1: n, x2: v, y2: A };
                  b = Z(b);
                  u && $(this._eventManager.ghostCtx, m, n, v, A, b, 0, null, false, false, false, false);
                  (s[k].indexLabel || r2.indexLabel || s[k].indexLabelFormatter || r2.indexLabelFormatter) && this._indexLabels.push({
                    chartType: "stackedColumn100",
                    dataPoint: s[k],
                    dataSeries: r2,
                    point: { x: m + (v - m) / 2, y: 0 <= s[k].y ? n : A },
                    direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1,
                    bounds: { x1: m, y1: Math.min(n, A), x2: v, y2: Math.max(n, A) },
                    color: b
                  });
                }
            }
          }
          u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
          c.restore();
          return { source: d, dest: this.plotArea.ctx, animationCallback: P.yScaleAnimation, easingFunction: P.easing.easeOutQuart, animationBase: q < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : q > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : q };
        }
      };
      l.prototype.renderBar = function(a) {
        var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var b = null, e = this.plotArea, g = 0, p, t, h2, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), g = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, m = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0, n = a.axisX.dataInfo.minDiff;
          isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
          n = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.range) : Math.abs(n) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
          this.dataPointMaxWidth && g > m && (g = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, m));
          !this.dataPointMaxWidth && (this.dataPointMinWidth && m < g) && (m = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, g));
          n < g && (n = g);
          n > m && (n = m);
          c.save();
          u && this._eventManager.ghostCtx.save();
          c.beginPath();
          c.rect(e.x1, e.y1, e.width, e.height);
          c.clip();
          u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(
            e.x1,
            e.y1,
            e.width,
            e.height
          ), this._eventManager.ghostCtx.clip());
          for (m = 0; m < a.dataSeriesIndexes.length; m++) {
            var q = a.dataSeriesIndexes[m], f = this.data[q], F = f.dataPoints;
            if (0 < F.length) {
              var r2 = 5 < n && f.bevelEnabled ? true : false;
              c.strokeStyle = "#4572A7 ";
              for (g = 0; g < F.length; g++)
                if (F[g].getTime ? h2 = F[g].x.getTime() : h2 = F[g].x, !(h2 < a.axisX.dataInfo.viewPortMin || h2 > a.axisX.dataInfo.viewPortMax) && "number" === typeof F[g].y) {
                  t = a.axisX.convertValueToPixel(h2);
                  p = a.axisY.convertValueToPixel(F[g].y);
                  t = a.axisX.reversed ? t + a.plotType.totalDataSeries * n / 2 - (a.previousDataSeriesCount + m) * n << 0 : t - a.plotType.totalDataSeries * n / 2 + (a.previousDataSeriesCount + m) * n << 0;
                  var l2 = a.axisX.reversed ? t - n << 0 : t + n << 0, s;
                  0 <= F[g].y ? s = k : (s = p, p = k);
                  b = F[g].color ? F[g].color : f._colorSet[g % f._colorSet.length];
                  $(c, a.axisY.reversed ? p : s, a.axisX.reversed ? l2 : t, a.axisY.reversed ? s : p, a.axisX.reversed ? t : l2, b, 0, null, r2, false, false, false, f.fillOpacity);
                  b = f.dataPointIds[g];
                  this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: g, x1: s, y1: t, x2: p, y2: l2 };
                  b = Z(b);
                  u && $(
                    this._eventManager.ghostCtx,
                    s,
                    a.axisX.reversed ? l2 : t,
                    p,
                    a.axisX.reversed ? t : l2,
                    b,
                    0,
                    null,
                    false,
                    false,
                    false,
                    false
                  );
                  (F[g].indexLabel || f.indexLabel || F[g].indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({ chartType: "bar", dataPoint: F[g], dataSeries: f, point: { x: 0 <= F[g].y ? p : s, y: t + (l2 - t) / 2 }, direction: 0 > F[g].y === a.axisY.reversed ? 1 : -1, bounds: { x1: Math.min(s, p), y1: t, x2: Math.max(s, p), y2: l2 }, color: b });
                }
            }
          }
          u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(
            a.axisX.maskCanvas,
            0,
            0,
            this.width,
            this.height
          ), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
          c.restore();
          return { source: d, dest: this.plotArea.ctx, animationCallback: P.xScaleAnimation, easingFunction: P.easing.easeOutQuart, animationBase: k < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : k > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : k };
        }
      };
      l.prototype.renderStackedBar = function(a) {
        var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var b = null, e = this.plotArea, g = [], p = [], t = [], h2 = [], k = 0, m, n, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0, l2 = a.axisX.dataInfo.minDiff;
          isFinite(l2) || (l2 = 0.3 * Math.abs(a.axisX.range));
          l2 = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(l2) / Math.log(a.axisX.range) : Math.abs(l2) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
          this.dataPointMaxWidth && k > f && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
          !this.dataPointMaxWidth && (this.dataPointMinWidth && f < k) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
          l2 < k && (l2 = k);
          l2 > f && (l2 = f);
          c.save();
          u && this._eventManager.ghostCtx.save();
          c.beginPath();
          c.rect(e.x1, e.y1, e.width, e.height);
          c.clip();
          u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
          for (f = 0; f < a.dataSeriesIndexes.length; f++) {
            var r2 = a.dataSeriesIndexes[f], x = this.data[r2], s = x.dataPoints;
            if (0 < s.length) {
              var w = 5 < l2 && x.bevelEnabled ? true : false;
              c.strokeStyle = "#4572A7 ";
              for (k = 0; k < s.length; k++)
                if (b = s[k].x.getTime ? s[k].x.getTime() : s[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y) {
                  n = a.axisX.convertValueToPixel(b);
                  n = n - a.plotType.plotUnits.length * l2 / 2 + a.index * l2 << 0;
                  var v = n + l2 << 0, A;
                  if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y)
                    t[b] = s[k].y + (t[b] ? t[b] : 0), 0 < t[b] && (A = g[b] ? g[b] : q, g[b] = m = a.axisY.convertValueToPixel(t[b]));
                  else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y)
                    h2[b] = s[k].y + (h2[b] ? h2[b] : 0), m = p[b] ? p[b] : q, p[b] = A = a.axisY.convertValueToPixel(h2[b]);
                  else if (m = a.axisY.convertValueToPixel(s[k].y), 0 <= s[k].y) {
                    var B = g[b] ? g[b] : 0;
                    A = q + B;
                    m += B;
                    g[b] = B + (m - A);
                  } else
                    B = p[b] ? p[b] : 0, A = m - B, m = q - B, p[b] = B + (m - A);
                  b = s[k].color ? s[k].color : x._colorSet[k % x._colorSet.length];
                  $(c, a.axisY.reversed ? m : A, n, a.axisY.reversed ? A : m, v, b, 0, null, w, false, false, false, x.fillOpacity);
                  b = x.dataPointIds[k];
                  this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: r2, dataPointIndex: k, x1: A, y1: n, x2: m, y2: v };
                  b = Z(b);
                  u && $(
                    this._eventManager.ghostCtx,
                    A,
                    n,
                    m,
                    v,
                    b,
                    0,
                    null,
                    false,
                    false,
                    false,
                    false
                  );
                  (s[k].indexLabel || x.indexLabel || s[k].indexLabelFormatter || x.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedBar", dataPoint: s[k], dataSeries: x, point: { x: 0 <= s[k].y ? m : A, y: n + (v - n) / 2 }, direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1, bounds: { x1: Math.min(A, m), y1: n, x2: Math.max(A, m), y2: v }, color: b });
                }
            }
          }
          u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(
            a.axisX.maskCanvas,
            0,
            0,
            this.width,
            this.height
          ), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
          c.restore();
          return { source: d, dest: this.plotArea.ctx, animationCallback: P.xScaleAnimation, easingFunction: P.easing.easeOutQuart, animationBase: q < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : q > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : q };
        }
      };
      l.prototype.renderStackedBar100 = function(a) {
        var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var b = null, e = this.plotArea, g = [], p = [], t = [], h2 = [], k = 0, m, n, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0, l2 = a.axisX.dataInfo.minDiff;
          isFinite(l2) || (l2 = 0.3 * Math.abs(a.axisX.range));
          l2 = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(l2) / Math.log(a.axisX.range) : Math.abs(l2) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
          this.dataPointMaxWidth && k > f && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
          !this.dataPointMaxWidth && (this.dataPointMinWidth && f < k) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
          l2 < k && (l2 = k);
          l2 > f && (l2 = f);
          c.save();
          u && this._eventManager.ghostCtx.save();
          c.beginPath();
          c.rect(e.x1, e.y1, e.width, e.height);
          c.clip();
          u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
          for (f = 0; f < a.dataSeriesIndexes.length; f++) {
            var r2 = a.dataSeriesIndexes[f], x = this.data[r2], s = x.dataPoints;
            if (0 < s.length) {
              var w = 5 < l2 && x.bevelEnabled ? true : false;
              c.strokeStyle = "#4572A7 ";
              for (k = 0; k < s.length; k++)
                if (b = s[k].x.getTime ? s[k].x.getTime() : s[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y) {
                  n = a.axisX.convertValueToPixel(b);
                  var v;
                  v = 0 !== a.dataPointYSums[b] ? 100 * (s[k].y / a.dataPointYSums[b]) : 0;
                  n = n - a.plotType.plotUnits.length * l2 / 2 + a.index * l2 << 0;
                  var A = n + l2 << 0;
                  if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y) {
                    t[b] = v + (t[b] ? t[b] : 0);
                    if (0 >= t[b])
                      continue;
                    v = g[b] ? g[b] : q;
                    g[b] = m = a.axisY.convertValueToPixel(t[b]);
                  } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y)
                    h2[b] = v + (h2[b] ? h2[b] : 0), m = p[b] ? p[b] : q, p[b] = v = a.axisY.convertValueToPixel(h2[b]);
                  else if (m = a.axisY.convertValueToPixel(v), 0 <= s[k].y) {
                    var B = g[b] ? g[b] : 0;
                    v = q + B;
                    m += B;
                    a.dataSeriesIndexes.length - 1 === f && 1 >= Math.abs(e.x2 - m) && (m = e.x2);
                    g[b] = B + (m - v);
                  } else
                    B = p[b] ? p[b] : 0, v = m - B, m = q - B, a.dataSeriesIndexes.length - 1 === f && 1 >= Math.abs(e.x1 - v) && (v = e.x1), p[b] = B + (m - v);
                  b = s[k].color ? s[k].color : x._colorSet[k % x._colorSet.length];
                  $(c, a.axisY.reversed ? m : v, n, a.axisY.reversed ? v : m, A, b, 0, null, w, false, false, false, x.fillOpacity);
                  b = x.dataPointIds[k];
                  this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: r2, dataPointIndex: k, x1: v, y1: n, x2: m, y2: A };
                  b = Z(b);
                  u && $(this._eventManager.ghostCtx, v, n, m, A, b, 0, null, false, false, false, false);
                  (s[k].indexLabel || x.indexLabel || s[k].indexLabelFormatter || x.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedBar100", dataPoint: s[k], dataSeries: x, point: { x: 0 <= s[k].y ? m : v, y: n + (A - n) / 2 }, direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1, bounds: { x1: Math.min(v, m), y1: n, x2: Math.max(v, m), y2: A }, color: b });
                }
            }
          }
          u && (d.drawImage(
            this._preRenderCanvas,
            0,
            0,
            this.width,
            this.height
          ), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
          c.restore();
          return {
            source: d,
            dest: this.plotArea.ctx,
            animationCallback: P.xScaleAnimation,
            easingFunction: P.easing.easeOutQuart,
            animationBase: q < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : q > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : q
          };
        }
      };
      l.prototype.renderArea = function(a) {
        var d, c;
        function b() {
          B && (0 < f.lineThickness && g.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? A = v : 0 > a.axisY.viewportMaximum ? A = t.y1 : 0 < a.axisY.viewportMinimum && (A = v), g.lineTo(x, A), g.lineTo(B.x, A), g.closePath(), g.globalAlpha = f.fillOpacity, g.fill(), g.globalAlpha = 1, u && (p.lineTo(x, A), p.lineTo(B.x, A), p.closePath(), p.fill()), g.beginPath(), g.moveTo(
            x,
            s
          ), p.beginPath(), p.moveTo(x, s), B = { x, y: s });
        }
        var e = a.targetCanvasCtx || this.plotArea.ctx, g = u ? this._preRenderCtx : e;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var p = this._eventManager.ghostCtx, t = a.axisY.lineCoordinates, h2 = [], k = this.plotArea, m;
          g.save();
          u && p.save();
          g.beginPath();
          g.rect(k.x1, k.y1, k.width, k.height);
          g.clip();
          u && (p.beginPath(), p.rect(k.x1, k.y1, k.width, k.height), p.clip());
          for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
            var q = a.dataSeriesIndexes[n], f = this.data[q], l2 = f.dataPoints, h2 = f.id;
            this._eventManager.objectMap[h2] = { objectType: "dataSeries", dataSeriesIndex: q };
            h2 = Z(h2);
            p.fillStyle = h2;
            h2 = [];
            d = true;
            var r2 = 0, x, s, w, v = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), A, B = null;
            if (0 < l2.length) {
              var J = f._colorSet[r2 % f._colorSet.length], z3 = f.lineColor = f.options.lineColor || J, C2 = z3;
              g.fillStyle = J;
              g.strokeStyle = z3;
              g.lineWidth = f.lineThickness;
              c = "solid";
              if (g.setLineDash) {
                var N = K(f.nullDataLineDashType, f.lineThickness);
                c = f.lineDashType;
                var U = K(c, f.lineThickness);
                g.setLineDash(U);
              }
              for (var fa = true; r2 < l2.length; r2++)
                if (w = l2[r2].x.getTime ? l2[r2].x.getTime() : l2[r2].x, !(w < a.axisX.dataInfo.viewPortMin || w > a.axisX.dataInfo.viewPortMax && (!f.connectNullData || !fa)))
                  if ("number" !== typeof l2[r2].y)
                    f.connectNullData || (fa || d) || b(), fa = true;
                  else {
                    x = a.axisX.convertValueToPixel(w);
                    s = a.axisY.convertValueToPixel(l2[r2].y);
                    d || fa ? (!d && f.connectNullData ? (g.setLineDash && (f.options.nullDataLineDashType || c === f.lineDashType && f.lineDashType !== f.nullDataLineDashType) && (d = x, c = s, x = m.x, s = m.y, b(), g.moveTo(m.x, m.y), x = d, s = c, B = m, c = f.nullDataLineDashType, g.setLineDash(N)), g.lineTo(
                      x,
                      s
                    ), u && p.lineTo(x, s)) : (g.beginPath(), g.moveTo(x, s), u && (p.beginPath(), p.moveTo(x, s)), B = { x, y: s }), fa = d = false) : (g.lineTo(x, s), u && p.lineTo(x, s), 0 == r2 % 250 && b());
                    m = { x, y: s };
                    r2 < l2.length - 1 && (C2 !== (l2[r2].lineColor || z3) || c !== (l2[r2].lineDashType || f.lineDashType)) && (b(), C2 = l2[r2].lineColor || z3, g.strokeStyle = C2, g.setLineDash && (l2[r2].lineDashType ? (c = l2[r2].lineDashType, g.setLineDash(K(c, f.lineThickness))) : (c = f.lineDashType, g.setLineDash(U))));
                    var ca = f.dataPointIds[r2];
                    this._eventManager.objectMap[ca] = {
                      id: ca,
                      objectType: "dataPoint",
                      dataSeriesIndex: q,
                      dataPointIndex: r2,
                      x1: x,
                      y1: s
                    };
                    0 !== l2[r2].markerSize && (0 < l2[r2].markerSize || 0 < f.markerSize) && (w = f.getMarkerProperties(r2, x, s, g), h2.push(w), ca = Z(ca), u && h2.push({ x, y: s, ctx: p, type: w.type, size: w.size, color: ca, borderColor: ca, borderThickness: w.borderThickness }));
                    (l2[r2].indexLabel || f.indexLabel || l2[r2].indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({ chartType: "area", dataPoint: l2[r2], dataSeries: f, point: { x, y: s }, direction: 0 > l2[r2].y === a.axisY.reversed ? 1 : -1, color: J });
                  }
              b();
              Y.drawMarkers(h2);
            }
          }
          u && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), g.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && g.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && g.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), g.clearRect(k.x1, k.y1, k.width, k.height), this._eventManager.ghostCtx.restore());
          g.restore();
          return {
            source: e,
            dest: this.plotArea.ctx,
            animationCallback: P.xClipAnimation,
            easingFunction: P.easing.linear,
            animationBase: 0
          };
        }
      };
      l.prototype.renderSplineArea = function(a) {
        function d() {
          var c2 = z2(w, 2);
          if (0 < c2.length) {
            if (0 < m.lineThickness) {
              b.beginPath();
              b.moveTo(c2[0].x, c2[0].y);
              c2[0].newStrokeStyle && (b.strokeStyle = c2[0].newStrokeStyle);
              c2[0].newLineDashArray && b.setLineDash(c2[0].newLineDashArray);
              for (var d2 = 0; d2 < c2.length - 3; d2 += 3)
                if (b.bezierCurveTo(c2[d2 + 1].x, c2[d2 + 1].y, c2[d2 + 2].x, c2[d2 + 2].y, c2[d2 + 3].x, c2[d2 + 3].y), u && e.bezierCurveTo(c2[d2 + 1].x, c2[d2 + 1].y, c2[d2 + 2].x, c2[d2 + 2].y, c2[d2 + 3].x, c2[d2 + 3].y), c2[d2 + 3].newStrokeStyle || c2[d2 + 3].newLineDashArray)
                  b.stroke(), b.beginPath(), b.moveTo(c2[d2 + 3].x, c2[d2 + 3].y), c2[d2 + 3].newStrokeStyle && (b.strokeStyle = c2[d2 + 3].newStrokeStyle), c2[d2 + 3].newLineDashArray && b.setLineDash(c2[d2 + 3].newLineDashArray);
              b.stroke();
            }
            b.beginPath();
            b.moveTo(c2[0].x, c2[0].y);
            u && (e.beginPath(), e.moveTo(c2[0].x, c2[0].y));
            for (d2 = 0; d2 < c2.length - 3; d2 += 3)
              b.bezierCurveTo(c2[d2 + 1].x, c2[d2 + 1].y, c2[d2 + 2].x, c2[d2 + 2].y, c2[d2 + 3].x, c2[d2 + 3].y), u && e.bezierCurveTo(c2[d2 + 1].x, c2[d2 + 1].y, c2[d2 + 2].x, c2[d2 + 2].y, c2[d2 + 3].x, c2[d2 + 3].y);
            a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? x = r2 : 0 > a.axisY.viewportMaximum ? x = g.y1 : 0 < a.axisY.viewportMinimum && (x = r2);
            s = { x: c2[0].x, y: c2[0].y };
            b.lineTo(c2[c2.length - 1].x, x);
            b.lineTo(s.x, x);
            b.closePath();
            b.globalAlpha = m.fillOpacity;
            b.fill();
            b.globalAlpha = 1;
            u && (e.lineTo(c2[c2.length - 1].x, x), e.lineTo(s.x, x), e.closePath(), e.fill());
          }
        }
        var c = a.targetCanvasCtx || this.plotArea.ctx, b = u ? this._preRenderCtx : c;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var e = this._eventManager.ghostCtx, g = a.axisY.lineCoordinates, p = [], t = this.plotArea;
          b.save();
          u && e.save();
          b.beginPath();
          b.rect(t.x1, t.y1, t.width, t.height);
          b.clip();
          u && (e.beginPath(), e.rect(t.x1, t.y1, t.width, t.height), e.clip());
          for (var h2 = 0; h2 < a.dataSeriesIndexes.length; h2++) {
            var k = a.dataSeriesIndexes[h2], m = this.data[k], n = m.dataPoints, p = m.id;
            this._eventManager.objectMap[p] = { objectType: "dataSeries", dataSeriesIndex: k };
            p = Z(p);
            e.fillStyle = p;
            var p = [], q = 0, f, l2, r2 = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), x, s = null, w = [];
            if (0 < n.length) {
              var v = m._colorSet[q % m._colorSet.length], A = m.lineColor = m.options.lineColor || v, B = A;
              b.fillStyle = v;
              b.strokeStyle = A;
              b.lineWidth = m.lineThickness;
              var J = "solid";
              if (b.setLineDash) {
                var C2 = K(m.nullDataLineDashType, m.lineThickness), J = m.lineDashType, E3 = K(J, m.lineThickness);
                b.setLineDash(E3);
              }
              for (l2 = false; q < n.length; q++)
                if (f = n[q].x.getTime ? n[q].x.getTime() : n[q].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax && (!m.connectNullData || !l2)))
                  if ("number" !== typeof n[q].y)
                    0 < q && !l2 && (m.connectNullData ? b.setLineDash && (0 < w.length && (m.options.nullDataLineDashType || !n[q - 1].lineDashType)) && (w[w.length - 1].newLineDashArray = C2, J = m.nullDataLineDashType) : (d(), w = [])), l2 = true;
                  else {
                    f = a.axisX.convertValueToPixel(f);
                    l2 = a.axisY.convertValueToPixel(n[q].y);
                    var N = m.dataPointIds[q];
                    this._eventManager.objectMap[N] = { id: N, objectType: "dataPoint", dataSeriesIndex: k, dataPointIndex: q, x1: f, y1: l2 };
                    w[w.length] = { x: f, y: l2 };
                    q < n.length - 1 && (B !== (n[q].lineColor || A) || J !== (n[q].lineDashType || m.lineDashType)) && (B = n[q].lineColor || A, w[w.length - 1].newStrokeStyle = B, b.setLineDash && (n[q].lineDashType ? (J = n[q].lineDashType, w[w.length - 1].newLineDashArray = K(J, m.lineThickness)) : (J = m.lineDashType, w[w.length - 1].newLineDashArray = E3)));
                    if (0 !== n[q].markerSize && (0 < n[q].markerSize || 0 < m.markerSize)) {
                      var U = m.getMarkerProperties(q, f, l2, b);
                      p.push(U);
                      N = Z(N);
                      u && p.push({ x: f, y: l2, ctx: e, type: U.type, size: U.size, color: N, borderColor: N, borderThickness: U.borderThickness });
                    }
                    (n[q].indexLabel || m.indexLabel || n[q].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                      chartType: "splineArea",
                      dataPoint: n[q],
                      dataSeries: m,
                      point: { x: f, y: l2 },
                      direction: 0 > n[q].y === a.axisY.reversed ? 1 : -1,
                      color: v
                    });
                    l2 = false;
                  }
              d();
              Y.drawMarkers(p);
            }
          }
          u && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(t.x1, t.y1, t.width, t.height), this._eventManager.ghostCtx.restore());
          b.restore();
          return { source: c, dest: this.plotArea.ctx, animationCallback: P.xClipAnimation, easingFunction: P.easing.linear, animationBase: 0 };
        }
      };
      l.prototype.renderStepArea = function(a) {
        var d, c;
        function b() {
          B && (0 < f.lineThickness && g.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? A = v : 0 > a.axisY.viewportMaximum ? A = t.y1 : 0 < a.axisY.viewportMinimum && (A = v), g.lineTo(x, A), g.lineTo(B.x, A), g.closePath(), g.globalAlpha = f.fillOpacity, g.fill(), g.globalAlpha = 1, u && (p.lineTo(x, A), p.lineTo(B.x, A), p.closePath(), p.fill()), g.beginPath(), g.moveTo(x, s), p.beginPath(), p.moveTo(x, s), B = { x, y: s });
        }
        var e = a.targetCanvasCtx || this.plotArea.ctx, g = u ? this._preRenderCtx : e;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var p = this._eventManager.ghostCtx, t = a.axisY.lineCoordinates, h2 = [], k = this.plotArea, m;
          g.save();
          u && p.save();
          g.beginPath();
          g.rect(k.x1, k.y1, k.width, k.height);
          g.clip();
          u && (p.beginPath(), p.rect(k.x1, k.y1, k.width, k.height), p.clip());
          for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
            var q = a.dataSeriesIndexes[n], f = this.data[q], l2 = f.dataPoints, h2 = f.id;
            this._eventManager.objectMap[h2] = { objectType: "dataSeries", dataSeriesIndex: q };
            h2 = Z(h2);
            p.fillStyle = h2;
            h2 = [];
            d = true;
            var r2 = 0, x, s, w, v = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), A, B = null;
            c = false;
            if (0 < l2.length) {
              var J = f._colorSet[r2 % f._colorSet.length], z3 = f.lineColor = f.options.lineColor || J, C2 = z3;
              g.fillStyle = J;
              g.strokeStyle = z3;
              g.lineWidth = f.lineThickness;
              var N = "solid";
              if (g.setLineDash) {
                var U = K(f.nullDataLineDashType, f.lineThickness), N = f.lineDashType, E3 = K(N, f.lineThickness);
                g.setLineDash(E3);
              }
              for (; r2 < l2.length; r2++)
                if (w = l2[r2].x.getTime ? l2[r2].x.getTime() : l2[r2].x, !(w < a.axisX.dataInfo.viewPortMin || w > a.axisX.dataInfo.viewPortMax && (!f.connectNullData || !c))) {
                  var ca = s;
                  "number" !== typeof l2[r2].y ? (f.connectNullData || (c || d) || b(), c = true) : (x = a.axisX.convertValueToPixel(w), s = a.axisY.convertValueToPixel(l2[r2].y), d || c ? (!d && f.connectNullData ? (g.setLineDash && (f.options.nullDataLineDashType || N === f.lineDashType && f.lineDashType !== f.nullDataLineDashType) && (d = x, c = s, x = m.x, s = m.y, b(), g.moveTo(m.x, m.y), x = d, s = c, B = m, N = f.nullDataLineDashType, g.setLineDash(U)), g.lineTo(x, ca), g.lineTo(x, s), u && (p.lineTo(x, ca), p.lineTo(x, s))) : (g.beginPath(), g.moveTo(x, s), u && (p.beginPath(), p.moveTo(x, s)), B = { x, y: s }), c = d = false) : (g.lineTo(x, ca), u && p.lineTo(x, ca), g.lineTo(x, s), u && p.lineTo(x, s), 0 == r2 % 250 && b()), m = { x, y: s }, r2 < l2.length - 1 && (C2 !== (l2[r2].lineColor || z3) || N !== (l2[r2].lineDashType || f.lineDashType)) && (b(), C2 = l2[r2].lineColor || z3, g.strokeStyle = C2, g.setLineDash && (l2[r2].lineDashType ? (N = l2[r2].lineDashType, g.setLineDash(K(N, f.lineThickness))) : (N = f.lineDashType, g.setLineDash(E3)))), w = f.dataPointIds[r2], this._eventManager.objectMap[w] = { id: w, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: r2, x1: x, y1: s }, 0 !== l2[r2].markerSize && (0 < l2[r2].markerSize || 0 < f.markerSize) && (ca = f.getMarkerProperties(r2, x, s, g), h2.push(ca), w = Z(w), u && h2.push({ x, y: s, ctx: p, type: ca.type, size: ca.size, color: w, borderColor: w, borderThickness: ca.borderThickness })), (l2[r2].indexLabel || f.indexLabel || l2[r2].indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({ chartType: "stepArea", dataPoint: l2[r2], dataSeries: f, point: { x, y: s }, direction: 0 > l2[r2].y === a.axisY.reversed ? 1 : -1, color: J }));
                }
              b();
              Y.drawMarkers(h2);
            }
          }
          u && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), g.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && g.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && g.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(
            this._preRenderCanvas,
            0,
            0,
            this.width,
            this.height
          ), g.clearRect(k.x1, k.y1, k.width, k.height), this._eventManager.ghostCtx.restore());
          g.restore();
          return { source: e, dest: this.plotArea.ctx, animationCallback: P.xClipAnimation, easingFunction: P.easing.linear, animationBase: 0 };
        }
      };
      l.prototype.renderStackedArea = function(a) {
        function d() {
          if (!(1 > k.length)) {
            for (0 < J.lineThickness && b.stroke(); 0 < k.length; ) {
              var a2 = k.pop();
              b.lineTo(a2.x, a2.y);
              u && x.lineTo(a2.x, a2.y);
            }
            b.closePath();
            b.globalAlpha = J.fillOpacity;
            b.fill();
            b.globalAlpha = 1;
            b.beginPath();
            u && (x.closePath(), x.fill(), x.beginPath());
            k = [];
          }
        }
        var c = a.targetCanvasCtx || this.plotArea.ctx, b = u ? this._preRenderCtx : c;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var e = null, g = null, p = [], t = this.plotArea, h2 = [], k = [], m = [], n = [], q = 0, f, l2, r2 = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), x = this._eventManager.ghostCtx, s, w, v;
          u && x.beginPath();
          b.save();
          u && x.save();
          b.beginPath();
          b.rect(t.x1, t.y1, t.width, t.height);
          b.clip();
          u && (x.beginPath(), x.rect(t.x1, t.y1, t.width, t.height), x.clip());
          for (var e = [], A = 0; A < a.dataSeriesIndexes.length; A++) {
            var B = a.dataSeriesIndexes[A], J = this.data[B], z3 = J.dataPoints;
            J.dataPointIndexes = [];
            for (q = 0; q < z3.length; q++)
              B = z3[q].x.getTime ? z3[q].x.getTime() : z3[q].x, J.dataPointIndexes[B] = q, e[B] || (m.push(B), e[B] = true);
            m.sort(Sa);
          }
          for (A = 0; A < a.dataSeriesIndexes.length; A++) {
            B = a.dataSeriesIndexes[A];
            J = this.data[B];
            z3 = J.dataPoints;
            w = true;
            k = [];
            q = J.id;
            this._eventManager.objectMap[q] = { objectType: "dataSeries", dataSeriesIndex: B };
            q = Z(q);
            x.fillStyle = q;
            if (0 < m.length) {
              var e = J._colorSet[0], C2 = J.lineColor = J.options.lineColor || e, N = C2;
              b.fillStyle = e;
              b.strokeStyle = C2;
              b.lineWidth = J.lineThickness;
              v = "solid";
              if (b.setLineDash) {
                var U = K(J.nullDataLineDashType, J.lineThickness);
                v = J.lineDashType;
                var E3 = K(v, J.lineThickness);
                b.setLineDash(E3);
              }
              for (var ca = true, q = 0; q < m.length; q++) {
                var g = m[q], ha = null, ha = 0 <= J.dataPointIndexes[g] ? z3[J.dataPointIndexes[g]] : { x: g, y: null };
                if (!(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax && (!J.connectNullData || !ca)))
                  if ("number" !== typeof ha.y)
                    J.connectNullData || (ca || w) || d(), ca = true;
                  else {
                    f = a.axisX.convertValueToPixel(g);
                    var oa = h2[g] ? h2[g] : 0;
                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                      n[g] = ha.y + (n[g] ? n[g] : 0);
                      if (0 >= n[g] && a.axisY.logarithmic)
                        continue;
                      l2 = a.axisY.convertValueToPixel(n[g]);
                    } else
                      l2 = a.axisY.convertValueToPixel(ha.y), l2 -= oa;
                    k.push({ x: f, y: r2 - oa });
                    h2[g] = r2 - l2;
                    w || ca ? (!w && J.connectNullData ? (b.setLineDash && (J.options.nullDataLineDashType || v === J.lineDashType && J.lineDashType !== J.nullDataLineDashType) && (w = k.pop(), v = k[k.length - 1], d(), b.moveTo(s.x, s.y), k.push(v), k.push(w), v = J.nullDataLineDashType, b.setLineDash(U)), b.lineTo(f, l2), u && x.lineTo(f, l2)) : (b.beginPath(), b.moveTo(f, l2), u && (x.beginPath(), x.moveTo(f, l2))), ca = w = false) : (b.lineTo(f, l2), u && x.lineTo(f, l2), 0 == q % 250 && (d(), b.moveTo(f, l2), u && x.moveTo(f, l2), k.push({ x: f, y: r2 - oa })));
                    s = { x: f, y: l2 };
                    q < z3.length - 1 && (N !== (z3[q].lineColor || C2) || v !== (z3[q].lineDashType || J.lineDashType)) && (d(), b.beginPath(), b.moveTo(f, l2), k.push({ x: f, y: r2 - oa }), N = z3[q].lineColor || C2, b.strokeStyle = N, b.setLineDash && (z3[q].lineDashType ? (v = z3[q].lineDashType, b.setLineDash(K(v, J.lineThickness))) : (v = J.lineDashType, b.setLineDash(E3))));
                    if (0 <= J.dataPointIndexes[g]) {
                      var la = J.dataPointIds[J.dataPointIndexes[g]];
                      this._eventManager.objectMap[la] = { id: la, objectType: "dataPoint", dataSeriesIndex: B, dataPointIndex: J.dataPointIndexes[g], x1: f, y1: l2 };
                    }
                    0 <= J.dataPointIndexes[g] && 0 !== ha.markerSize && (0 < ha.markerSize || 0 < J.markerSize) && (oa = J.getMarkerProperties(J.dataPointIndexes[g], f, l2, b), p.push(oa), g = Z(la), u && p.push({ x: f, y: l2, ctx: x, type: oa.type, size: oa.size, color: g, borderColor: g, borderThickness: oa.borderThickness }));
                    (ha.indexLabel || J.indexLabel || ha.indexLabelFormatter || J.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedArea", dataPoint: ha, dataSeries: J, point: { x: f, y: l2 }, direction: 0 > z3[q].y === a.axisY.reversed ? 1 : -1, color: e });
                  }
              }
              d();
              b.moveTo(f, l2);
              u && x.moveTo(f, l2);
            }
            delete J.dataPointIndexes;
          }
          Y.drawMarkers(p);
          u && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(t.x1, t.y1, t.width, t.height), x.restore());
          b.restore();
          return { source: c, dest: this.plotArea.ctx, animationCallback: P.xClipAnimation, easingFunction: P.easing.linear, animationBase: 0 };
        }
      };
      l.prototype.renderStackedArea100 = function(a) {
        function d() {
          for (0 < J.lineThickness && b.stroke(); 0 < k.length; ) {
            var a2 = k.pop();
            b.lineTo(a2.x, a2.y);
            u && v.lineTo(
              a2.x,
              a2.y
            );
          }
          b.closePath();
          b.globalAlpha = J.fillOpacity;
          b.fill();
          b.globalAlpha = 1;
          b.beginPath();
          u && (v.closePath(), v.fill(), v.beginPath());
          k = [];
        }
        var c = a.targetCanvasCtx || this.plotArea.ctx, b = u ? this._preRenderCtx : c;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var e = null, g = null, p = this.plotArea, t = [], h2 = [], k = [], m = [], n = [], q = 0, f, l2, r2, x, s, w = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), v = this._eventManager.ghostCtx;
          b.save();
          u && v.save();
          b.beginPath();
          b.rect(p.x1, p.y1, p.width, p.height);
          b.clip();
          u && (v.beginPath(), v.rect(p.x1, p.y1, p.width, p.height), v.clip());
          for (var e = [], A = 0; A < a.dataSeriesIndexes.length; A++) {
            var B = a.dataSeriesIndexes[A], J = this.data[B], z3 = J.dataPoints;
            J.dataPointIndexes = [];
            for (q = 0; q < z3.length; q++)
              B = z3[q].x.getTime ? z3[q].x.getTime() : z3[q].x, J.dataPointIndexes[B] = q, e[B] || (m.push(B), e[B] = true);
            m.sort(Sa);
          }
          for (A = 0; A < a.dataSeriesIndexes.length; A++) {
            B = a.dataSeriesIndexes[A];
            J = this.data[B];
            z3 = J.dataPoints;
            x = true;
            e = J.id;
            this._eventManager.objectMap[e] = { objectType: "dataSeries", dataSeriesIndex: B };
            e = Z(e);
            v.fillStyle = e;
            k = [];
            if (0 < m.length) {
              var e = J._colorSet[q % J._colorSet.length], C2 = J.lineColor = J.options.lineColor || e, N = C2;
              b.fillStyle = e;
              b.strokeStyle = C2;
              b.lineWidth = J.lineThickness;
              s = "solid";
              if (b.setLineDash) {
                var U = K(J.nullDataLineDashType, J.lineThickness);
                s = J.lineDashType;
                var E3 = K(s, J.lineThickness);
                b.setLineDash(E3);
              }
              for (var ca = true, q = 0; q < m.length; q++) {
                var g = m[q], ha = null, ha = 0 <= J.dataPointIndexes[g] ? z3[J.dataPointIndexes[g]] : { x: g, y: null };
                if (!(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax && (!J.connectNullData || !ca)))
                  if ("number" !== typeof ha.y)
                    J.connectNullData || (ca || x) || d(), ca = true;
                  else {
                    var oa;
                    oa = 0 !== a.dataPointYSums[g] ? 100 * (ha.y / a.dataPointYSums[g]) : 0;
                    f = a.axisX.convertValueToPixel(g);
                    var la = h2[g] ? h2[g] : 0;
                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                      n[g] = oa + (n[g] ? n[g] : 0);
                      if (0 >= n[g] && a.axisY.logarithmic)
                        continue;
                      l2 = a.axisY.convertValueToPixel(n[g]);
                    } else
                      l2 = a.axisY.convertValueToPixel(oa), l2 -= la;
                    k.push({ x: f, y: w - la });
                    h2[g] = w - l2;
                    x || ca ? (!x && J.connectNullData ? (b.setLineDash && (J.options.nullDataLineDashType || s === J.lineDashType && J.lineDashType !== J.nullDataLineDashType) && (x = k.pop(), s = k[k.length - 1], d(), b.moveTo(r2.x, r2.y), k.push(s), k.push(x), s = J.nullDataLineDashType, b.setLineDash(U)), b.lineTo(f, l2), u && v.lineTo(f, l2)) : (b.beginPath(), b.moveTo(f, l2), u && (v.beginPath(), v.moveTo(f, l2))), ca = x = false) : (b.lineTo(f, l2), u && v.lineTo(f, l2), 0 == q % 250 && (d(), b.moveTo(f, l2), u && v.moveTo(f, l2), k.push({ x: f, y: w - la })));
                    r2 = { x: f, y: l2 };
                    q < z3.length - 1 && (N !== (z3[q].lineColor || C2) || s !== (z3[q].lineDashType || J.lineDashType)) && (d(), b.beginPath(), b.moveTo(f, l2), k.push({ x: f, y: w - la }), N = z3[q].lineColor || C2, b.strokeStyle = N, b.setLineDash && (z3[q].lineDashType ? (s = z3[q].lineDashType, b.setLineDash(K(s, J.lineThickness))) : (s = J.lineDashType, b.setLineDash(E3))));
                    if (0 <= J.dataPointIndexes[g]) {
                      var H = J.dataPointIds[J.dataPointIndexes[g]];
                      this._eventManager.objectMap[H] = { id: H, objectType: "dataPoint", dataSeriesIndex: B, dataPointIndex: J.dataPointIndexes[g], x1: f, y1: l2 };
                    }
                    0 <= J.dataPointIndexes[g] && 0 !== ha.markerSize && (0 < ha.markerSize || 0 < J.markerSize) && (la = J.getMarkerProperties(q, f, l2, b), t.push(la), g = Z(H), u && t.push({ x: f, y: l2, ctx: v, type: la.type, size: la.size, color: g, borderColor: g, borderThickness: la.borderThickness }));
                    (ha.indexLabel || J.indexLabel || ha.indexLabelFormatter || J.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedArea100", dataPoint: ha, dataSeries: J, point: { x: f, y: l2 }, direction: 0 > z3[q].y === a.axisY.reversed ? 1 : -1, color: e });
                  }
              }
              d();
              b.moveTo(f, l2);
              u && v.moveTo(f, l2);
            }
            delete J.dataPointIndexes;
          }
          Y.drawMarkers(t);
          u && (c.drawImage(
            this._preRenderCanvas,
            0,
            0,
            this.width,
            this.height
          ), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(p.x1, p.y1, p.width, p.height), v.restore());
          b.restore();
          return {
            source: c,
            dest: this.plotArea.ctx,
            animationCallback: P.xClipAnimation,
            easingFunction: P.easing.linear,
            animationBase: 0
          };
        }
      };
      l.prototype.renderBubble = function(a) {
        var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var b = this.plotArea, e = 0, g, p;
          c.save();
          u && this._eventManager.ghostCtx.save();
          c.beginPath();
          c.rect(b.x1, b.y1, b.width, b.height);
          c.clip();
          u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.clip());
          for (var t = -Infinity, h2 = Infinity, k = 0; k < a.dataSeriesIndexes.length; k++)
            for (var m = a.dataSeriesIndexes[k], n = this.data[m], q = n.dataPoints, f = 0, e = 0; e < q.length; e++)
              g = q[e].getTime ? g = q[e].x.getTime() : g = q[e].x, g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax || "undefined" === typeof q[e].z || (f = q[e].z, f > t && (t = f), f < h2 && (h2 = f));
          for (var l2 = 25 * Math.PI, r2 = Math.max(Math.pow(0.25 * Math.min(b.height, b.width) / 2, 2) * Math.PI, l2), k = 0; k < a.dataSeriesIndexes.length; k++)
            if (m = a.dataSeriesIndexes[k], n = this.data[m], q = n.dataPoints, 0 < q.length) {
              for (c.strokeStyle = "#4572A7 ", e = 0; e < q.length; e++)
                if (g = q[e].getTime ? g = q[e].x.getTime() : g = q[e].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[e].y) {
                  g = a.axisX.convertValueToPixel(g);
                  p = a.axisY.convertValueToPixel(q[e].y);
                  var f = q[e].z, x = 2 * Math.max(Math.sqrt((t === h2 ? r2 / 2 : l2 + (r2 - l2) / (t - h2) * (f - h2)) / Math.PI) << 0, 1), f = n.getMarkerProperties(e, c);
                  f.size = x;
                  c.globalAlpha = n.fillOpacity;
                  Y.drawMarker(g, p, c, f.type, f.size, f.color, f.borderColor, f.borderThickness);
                  c.globalAlpha = 1;
                  var s = n.dataPointIds[e];
                  this._eventManager.objectMap[s] = {
                    id: s,
                    objectType: "dataPoint",
                    dataSeriesIndex: m,
                    dataPointIndex: e,
                    x1: g,
                    y1: p,
                    size: x
                  };
                  x = Z(s);
                  u && Y.drawMarker(g, p, this._eventManager.ghostCtx, f.type, f.size, x, x, f.borderThickness);
                  (q[e].indexLabel || n.indexLabel || q[e].indexLabelFormatter || n.indexLabelFormatter) && this._indexLabels.push({ chartType: "bubble", dataPoint: q[e], dataSeries: n, point: { x: g, y: p }, direction: 1, bounds: { x1: g - f.size / 2, y1: p - f.size / 2, x2: g + f.size / 2, y2: p + f.size / 2 }, color: null });
                }
            }
          u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.restore());
          c.restore();
          return { source: d, dest: this.plotArea.ctx, animationCallback: P.fadeInAnimation, easingFunction: P.easing.easeInQuad, animationBase: 0 };
        }
      };
      l.prototype.renderScatter = function(a) {
        var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var b = this.plotArea, e = 0, g, p;
          c.save();
          u && this._eventManager.ghostCtx.save();
          c.beginPath();
          c.rect(b.x1, b.y1, b.width, b.height);
          c.clip();
          u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.clip());
          for (var t = 0; t < a.dataSeriesIndexes.length; t++) {
            var h2 = a.dataSeriesIndexes[t], k = this.data[h2], m = k.dataPoints;
            if (0 < m.length) {
              c.strokeStyle = "#4572A7 ";
              Math.pow(0.3 * Math.min(b.height, b.width) / 2, 2);
              for (var n = 0, q = 0, e = 0; e < m.length; e++)
                if (g = m[e].getTime ? g = m[e].x.getTime() : g = m[e].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) && "number" === typeof m[e].y) {
                  g = a.axisX.convertValueToPixel(g);
                  p = a.axisY.convertValueToPixel(m[e].y);
                  var f = k.getMarkerProperties(e, g, p, c);
                  c.globalAlpha = k.fillOpacity;
                  Y.drawMarker(f.x, f.y, f.ctx, f.type, f.size, f.color, f.borderColor, f.borderThickness);
                  c.globalAlpha = 1;
                  Math.sqrt((n - g) * (n - g) + (q - p) * (q - p)) < Math.min(f.size, 5) && m.length > Math.min(this.plotArea.width, this.plotArea.height) || (n = k.dataPointIds[e], this._eventManager.objectMap[n] = { id: n, objectType: "dataPoint", dataSeriesIndex: h2, dataPointIndex: e, x1: g, y1: p }, n = Z(n), u && Y.drawMarker(f.x, f.y, this._eventManager.ghostCtx, f.type, f.size, n, n, f.borderThickness), (m[e].indexLabel || k.indexLabel || m[e].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                    chartType: "scatter",
                    dataPoint: m[e],
                    dataSeries: k,
                    point: { x: g, y: p },
                    direction: 1,
                    bounds: { x1: g - f.size / 2, y1: p - f.size / 2, x2: g + f.size / 2, y2: p + f.size / 2 },
                    color: null
                  }), n = g, q = p);
                }
            }
          }
          u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.restore());
          c.restore();
          return { source: d, dest: this.plotArea.ctx, animationCallback: P.fadeInAnimation, easingFunction: P.easing.easeInQuad, animationBase: 0 };
        }
      };
      l.prototype.renderCandlestick = function(a) {
        var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d, b = this._eventManager.ghostCtx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var e = null, g = null, p = this.plotArea, t = 0, h2, k, m, n, q, f, e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, g = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width, l2 = a.axisX.dataInfo.minDiff;
          isFinite(l2) || (l2 = 0.3 * Math.abs(a.axisX.range));
          l2 = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * p.width * (a.axisX.logarithmic ? Math.log(l2) / Math.log(a.axisX.range) : Math.abs(l2) / Math.abs(a.axisX.range)) << 0;
          this.dataPointMaxWidth && e > g && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, g));
          !this.dataPointMaxWidth && (this.dataPointMinWidth && g < e) && (g = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
          l2 < e && (l2 = e);
          l2 > g && (l2 = g);
          c.save();
          u && b.save();
          c.beginPath();
          c.rect(p.x1, p.y1, p.width, p.height);
          c.clip();
          u && (b.beginPath(), b.rect(p.x1, p.y1, p.width, p.height), b.clip());
          for (var y = 0; y < a.dataSeriesIndexes.length; y++) {
            var x = a.dataSeriesIndexes[y], s = this.data[x], w = s.dataPoints;
            if (0 < w.length) {
              for (var v = 5 < l2 && s.bevelEnabled ? true : false, t = 0; t < w.length; t++)
                if (w[t].getTime ? f = w[t].x.getTime() : f = w[t].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && !r(w[t].y) && w[t].y.length && "number" === typeof w[t].y[0] && "number" === typeof w[t].y[1] && "number" === typeof w[t].y[2] && "number" === typeof w[t].y[3]) {
                  h2 = a.axisX.convertValueToPixel(f);
                  k = a.axisY.convertValueToPixel(w[t].y[0]);
                  m = a.axisY.convertValueToPixel(w[t].y[1]);
                  n = a.axisY.convertValueToPixel(w[t].y[2]);
                  q = a.axisY.convertValueToPixel(w[t].y[3]);
                  var A = h2 - l2 / 2 << 0, B = A + l2 << 0, g = s.options.fallingColor ? s.fallingColor : s._colorSet[0], e = w[t].color ? w[t].color : s._colorSet[0], J = Math.round(Math.max(1, 0.15 * l2)), z3 = 0 === J % 2 ? 0 : 0.5, C2 = s.dataPointIds[t];
                  this._eventManager.objectMap[C2] = { id: C2, objectType: "dataPoint", dataSeriesIndex: x, dataPointIndex: t, x1: A, y1: k, x2: B, y2: m, x3: h2, y3: n, x4: h2, y4: q, borderThickness: J, color: e };
                  c.strokeStyle = e;
                  c.beginPath();
                  c.lineWidth = J;
                  b.lineWidth = Math.max(J, 4);
                  "candlestick" === s.type ? (c.moveTo(h2 - z3, m), c.lineTo(h2 - z3, Math.min(k, q)), c.stroke(), c.moveTo(h2 - z3, Math.max(k, q)), c.lineTo(h2 - z3, n), c.stroke(), $(c, A, Math.min(k, q), B, Math.max(k, q), w[t].y[0] <= w[t].y[3] ? s.risingColor : g, J, e, v, v, false, false, s.fillOpacity), u && (e = Z(C2), b.strokeStyle = e, b.moveTo(h2 - z3, m), b.lineTo(h2 - z3, Math.min(
                    k,
                    q
                  )), b.stroke(), b.moveTo(h2 - z3, Math.max(k, q)), b.lineTo(h2 - z3, n), b.stroke(), $(b, A, Math.min(k, q), B, Math.max(k, q), e, 0, null, false, false, false, false))) : "ohlc" === s.type && (c.moveTo(h2 - z3, m), c.lineTo(h2 - z3, n), c.stroke(), c.beginPath(), c.moveTo(h2, k), c.lineTo(A, k), c.stroke(), c.beginPath(), c.moveTo(h2, q), c.lineTo(B, q), c.stroke(), u && (e = Z(C2), b.strokeStyle = e, b.moveTo(h2 - z3, m), b.lineTo(h2 - z3, n), b.stroke(), b.beginPath(), b.moveTo(h2, k), b.lineTo(A, k), b.stroke(), b.beginPath(), b.moveTo(h2, q), b.lineTo(B, q), b.stroke()));
                  (w[t].indexLabel || s.indexLabel || w[t].indexLabelFormatter || s.indexLabelFormatter) && this._indexLabels.push({ chartType: s.type, dataPoint: w[t], dataSeries: s, point: { x: A + (B - A) / 2, y: a.axisY.reversed ? n : m }, direction: 1, bounds: { x1: A, y1: Math.min(m, n), x2: B, y2: Math.max(m, n) }, color: e });
                }
            }
          }
          u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(p.x1, p.y1, p.width, p.height), b.restore());
          c.restore();
          return { source: d, dest: this.plotArea.ctx, animationCallback: P.fadeInAnimation, easingFunction: P.easing.easeInQuad, animationBase: 0 };
        }
      };
      l.prototype.renderBoxAndWhisker = function(a) {
        var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d, b = this._eventManager.ghostCtx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var e = null, g = this.plotArea, p = 0, t, h2, k, m, n, q, f, e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, p = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width, l2 = a.axisX.dataInfo.minDiff;
          isFinite(l2) || (l2 = 0.3 * Math.abs(a.axisX.range));
          l2 = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * g.width * (a.axisX.logarithmic ? Math.log(l2) / Math.log(a.axisX.range) : Math.abs(l2) / Math.abs(a.axisX.range)) << 0;
          this.dataPointMaxWidth && e > p && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, p));
          !this.dataPointMaxWidth && (this.dataPointMinWidth && p < e) && (p = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
          l2 < e && (l2 = e);
          l2 > p && (l2 = p);
          c.save();
          u && b.save();
          c.beginPath();
          c.rect(g.x1, g.y1, g.width, g.height);
          c.clip();
          u && (b.beginPath(), b.rect(g.x1, g.y1, g.width, g.height), b.clip());
          for (var y = false, y = !!a.axisY.reversed, x = 0; x < a.dataSeriesIndexes.length; x++) {
            var s = a.dataSeriesIndexes[x], w = this.data[s], v = w.dataPoints;
            if (0 < v.length) {
              for (var A = 5 < l2 && w.bevelEnabled ? true : false, p = 0; p < v.length; p++)
                if (v[p].getTime ? f = v[p].x.getTime() : f = v[p].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && !r(v[p].y) && v[p].y.length && "number" === typeof v[p].y[0] && "number" === typeof v[p].y[1] && "number" === typeof v[p].y[2] && "number" === typeof v[p].y[3] && "number" === typeof v[p].y[4] && 5 === v[p].y.length) {
                  t = a.axisX.convertValueToPixel(f);
                  h2 = a.axisY.convertValueToPixel(v[p].y[0]);
                  k = a.axisY.convertValueToPixel(v[p].y[1]);
                  m = a.axisY.convertValueToPixel(v[p].y[2]);
                  n = a.axisY.convertValueToPixel(v[p].y[3]);
                  q = a.axisY.convertValueToPixel(v[p].y[4]);
                  var B = t - l2 / 2 << 0, z3 = t + l2 / 2 << 0, e = v[p].color ? v[p].color : w._colorSet[0], C2 = Math.round(Math.max(1, 0.15 * l2)), E3 = 0 === C2 % 2 ? 0 : 0.5, N = v[p].whiskerColor ? v[p].whiskerColor : v[p].color ? w.whiskerColor ? w.whiskerColor : v[p].color : w.whiskerColor ? w.whiskerColor : e, U = "number" === typeof v[p].whiskerThickness ? v[p].whiskerThickness : "number" === typeof w.options.whiskerThickness ? w.whiskerThickness : C2, fa = v[p].whiskerDashType ? v[p].whiskerDashType : w.whiskerDashType, ca = r(v[p].whiskerLength) ? r(w.options.whiskerLength) ? l2 : w.whiskerLength : v[p].whiskerLength, ca = "number" === typeof ca ? 0 >= ca ? 0 : ca >= l2 ? l2 : ca : "string" === typeof ca ? parseInt(ca) * l2 / 100 > l2 ? l2 : parseInt(ca) * l2 / 100 : l2, ha = 1 === Math.round(U) % 2 ? 0.5 : 0, oa = v[p].stemColor ? v[p].stemColor : v[p].color ? w.stemColor ? w.stemColor : v[p].color : w.stemColor ? w.stemColor : e, la = "number" === typeof v[p].stemThickness ? v[p].stemThickness : "number" === typeof w.options.stemThickness ? w.stemThickness : C2, H = 1 === Math.round(la) % 2 ? 0.5 : 0, G = v[p].stemDashType ? v[p].stemDashType : w.stemDashType, M3 = v[p].lineColor ? v[p].lineColor : v[p].color ? w.lineColor ? w.lineColor : v[p].color : w.lineColor ? w.lineColor : e, L2 = "number" === typeof v[p].lineThickness ? v[p].lineThickness : "number" === typeof w.options.lineThickness ? w.lineThickness : C2, Q2 = v[p].lineDashType ? v[p].lineDashType : w.lineDashType, O = 1 === Math.round(L2) % 2 ? 0.5 : 0, R2 = w.upperBoxColor, S3 = w.lowerBoxColor, ua = r(w.options.fillOpacity) ? 1 : w.fillOpacity, T = w.dataPointIds[p];
                  this._eventManager.objectMap[T] = {
                    id: T,
                    objectType: "dataPoint",
                    dataSeriesIndex: s,
                    dataPointIndex: p,
                    x1: B,
                    y1: h2,
                    x2: z3,
                    y2: k,
                    x3: t,
                    y3: m,
                    x4: t,
                    y4: n,
                    y5: q,
                    borderThickness: C2,
                    color: e,
                    stemThickness: la,
                    stemColor: oa,
                    whiskerThickness: U,
                    whiskerLength: ca,
                    whiskerColor: N,
                    lineThickness: L2,
                    lineColor: M3
                  };
                  c.save();
                  0 < la && (c.beginPath(), c.strokeStyle = oa, c.lineWidth = la, c.setLineDash && c.setLineDash(K(G, la)), c.moveTo(t - H, k), c.lineTo(t - H, h2), c.stroke(), c.moveTo(t - H, n), c.lineTo(t - H, m), c.stroke());
                  c.restore();
                  b.lineWidth = Math.max(C2, 4);
                  c.beginPath();
                  $(c, B, Math.min(q, k), z3, Math.max(k, q), S3, 0, e, y ? A : false, y ? false : A, false, false, ua);
                  c.beginPath();
                  $(
                    c,
                    B,
                    Math.min(m, q),
                    z3,
                    Math.max(q, m),
                    R2,
                    0,
                    e,
                    y ? false : A,
                    y ? A : false,
                    false,
                    false,
                    ua
                  );
                  c.beginPath();
                  c.lineWidth = C2;
                  c.strokeStyle = e;
                  c.rect(B - E3, Math.min(k, m) - E3, z3 - B + 2 * E3, Math.max(k, m) - Math.min(k, m) + 2 * E3);
                  c.stroke();
                  c.save();
                  0 < L2 && (c.beginPath(), c.globalAlpha = 1, c.setLineDash && c.setLineDash(K(Q2, L2)), c.strokeStyle = M3, c.lineWidth = L2, c.moveTo(B, q - O), c.lineTo(z3, q - O), c.stroke());
                  c.restore();
                  c.save();
                  0 < U && (c.beginPath(), c.setLineDash && c.setLineDash(K(fa, U)), c.strokeStyle = N, c.lineWidth = U, c.moveTo(t - ca / 2 << 0, n - ha), c.lineTo(t + ca / 2 << 0, n - ha), c.stroke(), c.moveTo(t - ca / 2 << 0, h2 + ha), c.lineTo(t + ca / 2 << 0, h2 + ha), c.stroke());
                  c.restore();
                  u && (e = Z(T), b.strokeStyle = e, b.lineWidth = la, 0 < la && (b.moveTo(t - E3 - H, k), b.lineTo(t - E3 - H, Math.max(h2, n)), b.stroke(), b.moveTo(t - E3 - H, Math.min(h2, n)), b.lineTo(t - E3 - H, m), b.stroke()), $(b, B, Math.max(k, m), z3, Math.min(k, m), e, 0, null, false, false, false, false), 0 < U && (b.beginPath(), b.lineWidth = U, b.moveTo(t + ca / 2, n - ha), b.lineTo(t - ca / 2, n - ha), b.stroke(), b.moveTo(t + ca / 2, h2 + ha), b.lineTo(t - ca / 2, h2 + ha), b.stroke()));
                  (v[p].indexLabel || w.indexLabel || v[p].indexLabelFormatter || w.indexLabelFormatter) && this._indexLabels.push({ chartType: w.type, dataPoint: v[p], dataSeries: w, point: { x: B + (z3 - B) / 2, y: a.axisY.reversed ? h2 : n }, direction: 1, bounds: { x1: B, y1: Math.min(h2, n), x2: z3, y2: Math.max(h2, n) }, color: e });
                }
            }
          }
          u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(
            this._preRenderCanvas,
            0,
            0,
            this.width,
            this.height
          ), c.clearRect(g.x1, g.y1, g.width, g.height), b.restore());
          c.restore();
          return { source: d, dest: this.plotArea.ctx, animationCallback: P.fadeInAnimation, easingFunction: P.easing.easeInQuad, animationBase: 0 };
        }
      };
      l.prototype.renderRangeColumn = function(a) {
        var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var b = null, e = this.plotArea, g = 0, p, t, h2, g = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
          p = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.03 * this.width;
          var k = a.axisX.dataInfo.minDiff;
          isFinite(k) || (k = 0.3 * Math.abs(a.axisX.range));
          k = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(k) / Math.log(a.axisX.range) : Math.abs(k) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
          this.dataPointMaxWidth && g > p && (g = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, p));
          !this.dataPointMaxWidth && (this.dataPointMinWidth && p < g) && (p = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, g));
          k < g && (k = g);
          k > p && (k = p);
          c.save();
          u && this._eventManager.ghostCtx.save();
          c.beginPath();
          c.rect(e.x1, e.y1, e.width, e.height);
          c.clip();
          u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
          for (var m = 0; m < a.dataSeriesIndexes.length; m++) {
            var n = a.dataSeriesIndexes[m], q = this.data[n], f = q.dataPoints;
            if (0 < f.length) {
              for (var l2 = 5 < k && q.bevelEnabled ? true : false, g = 0; g < f.length; g++)
                if (f[g].getTime ? h2 = f[g].x.getTime() : h2 = f[g].x, !(h2 < a.axisX.dataInfo.viewPortMin || h2 > a.axisX.dataInfo.viewPortMax) && !r(f[g].y) && f[g].y.length && "number" === typeof f[g].y[0] && "number" === typeof f[g].y[1]) {
                  b = a.axisX.convertValueToPixel(h2);
                  p = a.axisY.convertValueToPixel(f[g].y[0]);
                  t = a.axisY.convertValueToPixel(f[g].y[1]);
                  var y = a.axisX.reversed ? b + a.plotType.totalDataSeries * k / 2 - (a.previousDataSeriesCount + m) * k << 0 : b - a.plotType.totalDataSeries * k / 2 + (a.previousDataSeriesCount + m) * k << 0, x = a.axisX.reversed ? y - k << 0 : y + k << 0, b = f[g].color ? f[g].color : q._colorSet[g % q._colorSet.length];
                  if (p > t) {
                    var s = p;
                    p = t;
                    t = s;
                  }
                  s = q.dataPointIds[g];
                  this._eventManager.objectMap[s] = { id: s, objectType: "dataPoint", dataSeriesIndex: n, dataPointIndex: g, x1: y, y1: p, x2: x, y2: t };
                  $(c, a.axisX.reversed ? x : y, p, a.axisX.reversed ? y : x, t, b, 0, b, l2, l2, false, false, q.fillOpacity);
                  b = Z(s);
                  u && $(this._eventManager.ghostCtx, a.axisX.reversed ? x : y, p, a.axisX.reversed ? y : x, t, b, 0, null, false, false, false, false);
                  if (f[g].indexLabel || q.indexLabel || f[g].indexLabelFormatter || q.indexLabelFormatter)
                    this._indexLabels.push({ chartType: "rangeColumn", dataPoint: f[g], dataSeries: q, indexKeyword: 0, point: { x: y + (x - y) / 2, y: f[g].y[1] >= f[g].y[0] ? t : p }, direction: f[g].y[1] >= f[g].y[0] ? -1 : 1, bounds: { x1: y, y1: Math.min(p, t), x2: x, y2: Math.max(p, t) }, color: b }), this._indexLabels.push({ chartType: "rangeColumn", dataPoint: f[g], dataSeries: q, indexKeyword: 1, point: { x: y + (x - y) / 2, y: f[g].y[1] >= f[g].y[0] ? p : t }, direction: f[g].y[1] >= f[g].y[0] ? 1 : -1, bounds: { x1: y, y1: Math.min(p, t), x2: x, y2: Math.max(p, t) }, color: b });
                }
            }
          }
          u && (d.drawImage(
            this._preRenderCanvas,
            0,
            0,
            this.width,
            this.height
          ), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
          c.restore();
          return {
            source: d,
            dest: this.plotArea.ctx,
            animationCallback: P.fadeInAnimation,
            easingFunction: P.easing.easeInQuad,
            animationBase: 0
          };
        }
      };
      l.prototype.renderError = function(a) {
        var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d, b = a.axisY._position ? "left" === a.axisY._position || "right" === a.axisY._position ? false : true : false;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var e = null, g = false, p = this.plotArea, t = 0, h2, k, m, n, q, f, l2, y = a.axisX.dataInfo.minDiff;
          isFinite(y) || (y = 0.3 * Math.abs(a.axisX.range));
          c.save();
          u && this._eventManager.ghostCtx.save();
          c.beginPath();
          c.rect(p.x1, p.y1, p.width, p.height);
          c.clip();
          u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(p.x1, p.y1, p.width, p.height), this._eventManager.ghostCtx.clip());
          for (var x = 0, s = 0; s < this.data.length; s++)
            !this.data[s].type.match(/(bar|column)/ig) || !this.data[s].visible || this.data[s].type.match(/(stacked)/ig) && x || x++;
          for (var w = 0; w < a.dataSeriesIndexes.length; w++) {
            var v = a.dataSeriesIndexes[w], A = this.data[v], B = A.dataPoints, z3 = r(A._linkedSeries) ? false : A._linkedSeries.type.match(/(bar|column)/ig) && A._linkedSeries.visible ? true : false, C2 = 0;
            if (z3)
              for (e = A._linkedSeries.id, s = 0; s < e; s++)
                !this.data[s].type.match(/(bar|column)/ig) || !this.data[s].visible || this.data[s].type.match(/(stacked)/ig) && C2 || (this.data[s].type.match(/(range)/ig) && (g = true), C2++);
            e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
            t = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : b ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (z3 ? x : 1))) << 0 : 0.3 * this.width;
            g && (t = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : b ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (z3 ? x : 1))) << 0 : 0.03 * this.width);
            s = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * ((b ? p.height : p.width) * (a.axisX.logarithmic ? Math.log(y) / Math.log(a.axisX.range) : Math.abs(y) / Math.abs(a.axisX.range)) / (z3 ? x : 1)) << 0;
            this.dataPointMaxWidth && e > t && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, t));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && t < e) && (t = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
            s < e && (s = e);
            s > t && (s = t);
            if (0 < B.length)
              for (var G = A._colorSet, t = 0; t < B.length; t++) {
                var e = A.lineColor = A.options.color ? A.options.color : G[0], N = {
                  color: B[t].whiskerColor ? B[t].whiskerColor : B[t].color ? A.whiskerColor ? A.whiskerColor : B[t].color : A.whiskerColor ? A.whiskerColor : e,
                  thickness: r(B[t].whiskerThickness) ? A.whiskerThickness : B[t].whiskerThickness,
                  dashType: B[t].whiskerDashType ? B[t].whiskerDashType : A.whiskerDashType,
                  length: r(B[t].whiskerLength) ? r(A.options.whiskerLength) ? s : A.options.whiskerLength : B[t].whiskerLength,
                  trimLength: r(B[t].whiskerLength) ? r(A.options.whiskerLength) ? 50 : 0 : 0
                };
                N.length = "number" === typeof N.length ? 0 >= N.length ? 0 : N.length >= s ? s : N.length : "string" === typeof N.length ? parseInt(N.length) * s / 100 > s ? s : parseInt(N.length) * s / 100 > s : s;
                N.thickness = "number" === typeof N.thickness ? 0 > N.thickness ? 0 : Math.round(N.thickness) : 2;
                var U = { color: B[t].stemColor ? B[t].stemColor : B[t].color ? A.stemColor ? A.stemColor : B[t].color : A.stemColor ? A.stemColor : e, thickness: B[t].stemThickness ? B[t].stemThickness : A.stemThickness, dashType: B[t].stemDashType ? B[t].stemDashType : A.stemDashType };
                U.thickness = "number" === typeof U.thickness ? 0 > U.thickness ? 0 : Math.round(U.thickness) : 2;
                B[t].getTime ? l2 = B[t].x.getTime() : l2 = B[t].x;
                if (!(l2 < a.axisX.dataInfo.viewPortMin || l2 > a.axisX.dataInfo.viewPortMax) && !r(B[t].y) && B[t].y.length && "number" === typeof B[t].y[0] && "number" === typeof B[t].y[1]) {
                  var fa = a.axisX.convertValueToPixel(l2);
                  b ? k = fa : h2 = fa;
                  fa = a.axisY.convertValueToPixel(B[t].y[0]);
                  b ? m = fa : q = fa;
                  fa = a.axisY.convertValueToPixel(B[t].y[1]);
                  b ? n = fa : f = fa;
                  b ? (q = a.axisX.reversed ? k + (z3 ? x : 1) * s / 2 - (z3 ? C2 - 1 : 0) * s << 0 : k - (z3 ? x : 1) * s / 2 + (z3 ? C2 - 1 : 0) * s << 0, f = a.axisX.reversed ? q - s << 0 : q + s << 0) : (m = a.axisX.reversed ? h2 + (z3 ? x : 1) * s / 2 - (z3 ? C2 - 1 : 0) * s << 0 : h2 - (z3 ? x : 1) * s / 2 + (z3 ? C2 - 1 : 0) * s << 0, n = a.axisX.reversed ? m - s << 0 : m + s << 0);
                  !b && q > f && (fa = q, q = f, f = fa);
                  b && m > n && (fa = m, m = n, n = fa);
                  fa = A.dataPointIds[t];
                  this._eventManager.objectMap[fa] = { id: fa, objectType: "dataPoint", dataSeriesIndex: v, dataPointIndex: t, x1: Math.min(m, n), y1: Math.min(q, f), x2: Math.max(n, m), y2: Math.max(f, q), isXYSwapped: b, stemProperties: U, whiskerProperties: N };
                  E2(
                    c,
                    Math.min(m, n),
                    Math.min(q, f),
                    Math.max(n, m),
                    Math.max(f, q),
                    e,
                    N,
                    U,
                    b
                  );
                  u && E2(this._eventManager.ghostCtx, m, q, n, f, e, N, U, b);
                  if (B[t].indexLabel || A.indexLabel || B[t].indexLabelFormatter || A.indexLabelFormatter)
                    this._indexLabels.push({ chartType: "error", dataPoint: B[t], dataSeries: A, indexKeyword: 0, point: { x: b ? B[t].y[1] >= B[t].y[0] ? m : n : m + (n - m) / 2, y: b ? q + (f - q) / 2 : B[t].y[1] >= B[t].y[0] ? f : q }, direction: B[t].y[1] >= B[t].y[0] ? -1 : 1, bounds: { x1: b ? Math.min(m, n) : m, y1: b ? q : Math.min(q, f), x2: b ? Math.max(m, n) : n, y2: b ? f : Math.max(q, f) }, color: e, axisSwapped: b }), this._indexLabels.push({ chartType: "error", dataPoint: B[t], dataSeries: A, indexKeyword: 1, point: { x: b ? B[t].y[1] >= B[t].y[0] ? n : m : m + (n - m) / 2, y: b ? q + (f - q) / 2 : B[t].y[1] >= B[t].y[0] ? q : f }, direction: B[t].y[1] >= B[t].y[0] ? 1 : -1, bounds: { x1: b ? Math.min(m, n) : m, y1: b ? q : Math.min(q, f), x2: b ? Math.max(m, n) : n, y2: b ? f : Math.max(q, f) }, color: e, axisSwapped: b });
                }
              }
          }
          u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(p.x1, p.y1, p.width, p.height), this._eventManager.ghostCtx.restore());
          c.restore();
          return { source: d, dest: this.plotArea.ctx, animationCallback: P.fadeInAnimation, easingFunction: P.easing.easeInQuad, animationBase: 0 };
        }
      };
      l.prototype.renderRangeBar = function(a) {
        var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var b = null, e = this.plotArea, g = 0, p, t, h2, k, g = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
          p = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0;
          var m = a.axisX.dataInfo.minDiff;
          isFinite(m) || (m = 0.3 * Math.abs(a.axisX.range));
          m = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(m) / Math.log(a.axisX.range) : Math.abs(m) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
          this.dataPointMaxWidth && g > p && (g = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, p));
          !this.dataPointMaxWidth && (this.dataPointMinWidth && p < g) && (p = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, g));
          m < g && (m = g);
          m > p && (m = p);
          c.save();
          u && this._eventManager.ghostCtx.save();
          c.beginPath();
          c.rect(e.x1, e.y1, e.width, e.height);
          c.clip();
          u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
          for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
            var q = a.dataSeriesIndexes[n], f = this.data[q], l2 = f.dataPoints;
            if (0 < l2.length) {
              var y = 5 < m && f.bevelEnabled ? true : false;
              c.strokeStyle = "#4572A7 ";
              for (g = 0; g < l2.length; g++)
                if (l2[g].getTime ? k = l2[g].x.getTime() : k = l2[g].x, !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) && !r(l2[g].y) && l2[g].y.length && "number" === typeof l2[g].y[0] && "number" === typeof l2[g].y[1]) {
                  p = a.axisY.convertValueToPixel(l2[g].y[0]);
                  t = a.axisY.convertValueToPixel(l2[g].y[1]);
                  h2 = a.axisX.convertValueToPixel(k);
                  h2 = a.axisX.reversed ? h2 + a.plotType.totalDataSeries * m / 2 - (a.previousDataSeriesCount + n) * m << 0 : h2 - a.plotType.totalDataSeries * m / 2 + (a.previousDataSeriesCount + n) * m << 0;
                  var x = a.axisX.reversed ? h2 - m << 0 : h2 + m << 0;
                  p > t && (b = p, p = t, t = b);
                  b = l2[g].color ? l2[g].color : f._colorSet[g % f._colorSet.length];
                  $(c, p, a.axisX.reversed ? x : h2, t, a.axisX.reversed ? h2 : x, b, 0, null, y, false, false, false, f.fillOpacity);
                  b = f.dataPointIds[g];
                  this._eventManager.objectMap[b] = {
                    id: b,
                    objectType: "dataPoint",
                    dataSeriesIndex: q,
                    dataPointIndex: g,
                    x1: p,
                    y1: h2,
                    x2: t,
                    y2: x
                  };
                  b = Z(b);
                  u && $(this._eventManager.ghostCtx, p, a.axisX.reversed ? x : h2, t, a.axisX.reversed ? h2 : x, b, 0, null, false, false, false, false);
                  if (l2[g].indexLabel || f.indexLabel || l2[g].indexLabelFormatter || f.indexLabelFormatter)
                    this._indexLabels.push({ chartType: "rangeBar", dataPoint: l2[g], dataSeries: f, indexKeyword: 0, point: { x: l2[g].y[1] >= l2[g].y[0] ? p : t, y: h2 + (x - h2) / 2 }, direction: l2[g].y[1] >= l2[g].y[0] ? -1 : 1, bounds: { x1: Math.min(p, t), y1: h2, x2: Math.max(p, t), y2: x }, color: b }), this._indexLabels.push({
                      chartType: "rangeBar",
                      dataPoint: l2[g],
                      dataSeries: f,
                      indexKeyword: 1,
                      point: { x: l2[g].y[1] >= l2[g].y[0] ? t : p, y: h2 + (x - h2) / 2 },
                      direction: l2[g].y[1] >= l2[g].y[0] ? 1 : -1,
                      bounds: { x1: Math.min(p, t), y1: h2, x2: Math.max(p, t), y2: x },
                      color: b
                    });
                }
            }
          }
          u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(
            this._preRenderCanvas,
            0,
            0,
            this.width,
            this.height
          ), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
          c.restore();
          return { source: d, dest: this.plotArea.ctx, animationCallback: P.fadeInAnimation, easingFunction: P.easing.easeInQuad, animationBase: 0 };
        }
      };
      l.prototype.renderRangeArea = function(a) {
        function d() {
          if (w) {
            for (var a2 = null, c2 = l2.length - 1; 0 <= c2; c2--)
              a2 = l2[c2], b.lineTo(a2.x, a2.y2), e.lineTo(a2.x, a2.y2);
            b.closePath();
            b.globalAlpha = m.fillOpacity;
            b.fill();
            b.globalAlpha = 1;
            e.fill();
            if (0 < m.lineThickness) {
              b.beginPath();
              b.moveTo(a2.x, a2.y2);
              for (c2 = 0; c2 < l2.length; c2++)
                a2 = l2[c2], b.lineTo(a2.x, a2.y2);
              b.moveTo(l2[0].x, l2[0].y1);
              for (c2 = 0; c2 < l2.length; c2++)
                a2 = l2[c2], b.lineTo(a2.x, a2.y1);
              b.stroke();
            }
            b.beginPath();
            b.moveTo(r2, y);
            e.beginPath();
            e.moveTo(r2, y);
            w = { x: r2, y };
            l2 = [];
            l2.push({ x: r2, y1: y, y2: x });
          }
        }
        var c = a.targetCanvasCtx || this.plotArea.ctx, b = u ? this._preRenderCtx : c;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var e = this._eventManager.ghostCtx, g = [], p = this.plotArea;
          b.save();
          u && e.save();
          b.beginPath();
          b.rect(p.x1, p.y1, p.width, p.height);
          b.clip();
          u && (e.beginPath(), e.rect(p.x1, p.y1, p.width, p.height), e.clip());
          for (var h2 = 0; h2 < a.dataSeriesIndexes.length; h2++) {
            var l2 = [], k = a.dataSeriesIndexes[h2], m = this.data[k], n = m.dataPoints, g = m.id;
            this._eventManager.objectMap[g] = { objectType: "dataSeries", dataSeriesIndex: k };
            g = Z(g);
            e.fillStyle = g;
            var g = [], q = true, f = 0, r2, y, x, s, w = null;
            if (0 < n.length) {
              var v = m._colorSet[f % m._colorSet.length], A = m.lineColor = m.options.lineColor || v, B = A;
              b.fillStyle = v;
              b.strokeStyle = A;
              b.lineWidth = m.lineThickness;
              var z3 = "solid";
              if (b.setLineDash) {
                var C2 = K(
                  m.nullDataLineDashType,
                  m.lineThickness
                ), z3 = m.lineDashType, E3 = K(z3, m.lineThickness);
                b.setLineDash(E3);
              }
              for (var N = true; f < n.length; f++)
                if (s = n[f].x.getTime ? n[f].x.getTime() : n[f].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax && (!m.connectNullData || !N)))
                  if (null !== n[f].y && n[f].y.length && "number" === typeof n[f].y[0] && "number" === typeof n[f].y[1]) {
                    r2 = a.axisX.convertValueToPixel(s);
                    y = a.axisY.convertValueToPixel(n[f].y[0]);
                    x = a.axisY.convertValueToPixel(n[f].y[1]);
                    q || N ? (m.connectNullData && !q ? (b.setLineDash && (m.options.nullDataLineDashType || z3 === m.lineDashType && m.lineDashType !== m.nullDataLineDashType) && (l2[l2.length - 1].newLineDashArray = E3, z3 = m.nullDataLineDashType, b.setLineDash(C2)), b.lineTo(r2, y), u && e.lineTo(r2, y), l2.push({ x: r2, y1: y, y2: x })) : (b.beginPath(), b.moveTo(r2, y), w = { x: r2, y }, l2 = [], l2.push({ x: r2, y1: y, y2: x }), u && (e.beginPath(), e.moveTo(r2, y))), N = q = false) : (b.lineTo(r2, y), l2.push({ x: r2, y1: y, y2: x }), u && e.lineTo(r2, y), 0 == f % 250 && d());
                    s = m.dataPointIds[f];
                    this._eventManager.objectMap[s] = {
                      id: s,
                      objectType: "dataPoint",
                      dataSeriesIndex: k,
                      dataPointIndex: f,
                      x1: r2,
                      y1: y,
                      y2: x
                    };
                    f < n.length - 1 && (B !== (n[f].lineColor || A) || z3 !== (n[f].lineDashType || m.lineDashType)) && (d(), B = n[f].lineColor || A, l2[l2.length - 1].newStrokeStyle = B, b.strokeStyle = B, b.setLineDash && (n[f].lineDashType ? (z3 = n[f].lineDashType, l2[l2.length - 1].newLineDashArray = K(z3, m.lineThickness), b.setLineDash(l2[l2.length - 1].newLineDashArray)) : (z3 = m.lineDashType, l2[l2.length - 1].newLineDashArray = E3, b.setLineDash(E3))));
                    if (0 !== n[f].markerSize && (0 < n[f].markerSize || 0 < m.markerSize)) {
                      var U = m.getMarkerProperties(f, r2, x, b);
                      g.push(U);
                      var fa = Z(s);
                      u && g.push({ x: r2, y: x, ctx: e, type: U.type, size: U.size, color: fa, borderColor: fa, borderThickness: U.borderThickness });
                      U = m.getMarkerProperties(f, r2, y, b);
                      g.push(U);
                      fa = Z(s);
                      u && g.push({ x: r2, y, ctx: e, type: U.type, size: U.size, color: fa, borderColor: fa, borderThickness: U.borderThickness });
                    }
                    if (n[f].indexLabel || m.indexLabel || n[f].indexLabelFormatter || m.indexLabelFormatter)
                      this._indexLabels.push({ chartType: "rangeArea", dataPoint: n[f], dataSeries: m, indexKeyword: 0, point: { x: r2, y }, direction: n[f].y[0] > n[f].y[1] === a.axisY.reversed ? -1 : 1, color: v }), this._indexLabels.push({ chartType: "rangeArea", dataPoint: n[f], dataSeries: m, indexKeyword: 1, point: { x: r2, y: x }, direction: n[f].y[0] > n[f].y[1] === a.axisY.reversed ? 1 : -1, color: v });
                  } else
                    N || q || d(), N = true;
              d();
              Y.drawMarkers(g);
            }
          }
          u && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(p.x1, p.y1, p.width, p.height), this._eventManager.ghostCtx.restore());
          b.restore();
          return { source: c, dest: this.plotArea.ctx, animationCallback: P.xClipAnimation, easingFunction: P.easing.linear, animationBase: 0 };
        }
      };
      l.prototype.renderRangeSplineArea = function(a) {
        function d(a2, c2) {
          var d2 = z2(y, 2);
          if (0 < d2.length) {
            if (0 < k.lineThickness) {
              b.strokeStyle = c2;
              b.setLineDash && b.setLineDash(a2);
              b.beginPath();
              b.moveTo(d2[0].x, d2[0].y);
              for (var f2 = 0; f2 < d2.length - 3; f2 += 3) {
                if (d2[f2].newStrokeStyle || d2[f2].newLineDashArray)
                  b.stroke(), b.beginPath(), b.moveTo(d2[f2].x, d2[f2].y), d2[f2].newStrokeStyle && (b.strokeStyle = d2[f2].newStrokeStyle), d2[f2].newLineDashArray && b.setLineDash(d2[f2].newLineDashArray);
                b.bezierCurveTo(d2[f2 + 1].x, d2[f2 + 1].y, d2[f2 + 2].x, d2[f2 + 2].y, d2[f2 + 3].x, d2[f2 + 3].y);
              }
            }
            b.beginPath();
            b.moveTo(d2[0].x, d2[0].y);
            u && (e.beginPath(), e.moveTo(d2[0].x, d2[0].y));
            for (f2 = 0; f2 < d2.length - 3; f2 += 3)
              b.bezierCurveTo(d2[f2 + 1].x, d2[f2 + 1].y, d2[f2 + 2].x, d2[f2 + 2].y, d2[f2 + 3].x, d2[f2 + 3].y), u && e.bezierCurveTo(d2[f2 + 1].x, d2[f2 + 1].y, d2[f2 + 2].x, d2[f2 + 2].y, d2[f2 + 3].x, d2[f2 + 3].y);
            d2 = z2(x, 2);
            b.lineTo(x[x.length - 1].x, x[x.length - 1].y);
            for (f2 = d2.length - 1; 2 < f2; f2 -= 3)
              b.bezierCurveTo(d2[f2 - 1].x, d2[f2 - 1].y, d2[f2 - 2].x, d2[f2 - 2].y, d2[f2 - 3].x, d2[f2 - 3].y), u && e.bezierCurveTo(d2[f2 - 1].x, d2[f2 - 1].y, d2[f2 - 2].x, d2[f2 - 2].y, d2[f2 - 3].x, d2[f2 - 3].y);
            b.closePath();
            b.globalAlpha = k.fillOpacity;
            b.fill();
            u && (e.closePath(), e.fill());
            b.globalAlpha = 1;
            if (0 < k.lineThickness) {
              b.strokeStyle = c2;
              b.setLineDash && b.setLineDash(a2);
              b.beginPath();
              b.moveTo(d2[0].x, d2[0].y);
              for (var g2 = f2 = 0; f2 < d2.length - 3; f2 += 3, g2++) {
                if (y[g2].newStrokeStyle || y[g2].newLineDashArray)
                  b.stroke(), b.beginPath(), b.moveTo(d2[f2].x, d2[f2].y), y[g2].newStrokeStyle && (b.strokeStyle = y[g2].newStrokeStyle), y[g2].newLineDashArray && b.setLineDash(y[g2].newLineDashArray);
                b.bezierCurveTo(d2[f2 + 1].x, d2[f2 + 1].y, d2[f2 + 2].x, d2[f2 + 2].y, d2[f2 + 3].x, d2[f2 + 3].y);
              }
              d2 = z2(y, 2);
              b.moveTo(d2[0].x, d2[0].y);
              for (g2 = f2 = 0; f2 < d2.length - 3; f2 += 3, g2++) {
                if (y[g2].newStrokeStyle || y[g2].newLineDashArray)
                  b.stroke(), b.beginPath(), b.moveTo(d2[f2].x, d2[f2].y), y[g2].newStrokeStyle && (b.strokeStyle = y[g2].newStrokeStyle), y[g2].newLineDashArray && b.setLineDash(y[g2].newLineDashArray);
                b.bezierCurveTo(d2[f2 + 1].x, d2[f2 + 1].y, d2[f2 + 2].x, d2[f2 + 2].y, d2[f2 + 3].x, d2[f2 + 3].y);
              }
              b.stroke();
            }
            b.beginPath();
          }
        }
        var c = a.targetCanvasCtx || this.plotArea.ctx, b = u ? this._preRenderCtx : c;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var e = this._eventManager.ghostCtx, g = [], p = this.plotArea;
          b.save();
          u && e.save();
          b.beginPath();
          b.rect(p.x1, p.y1, p.width, p.height);
          b.clip();
          u && (e.beginPath(), e.rect(p.x1, p.y1, p.width, p.height), e.clip());
          for (var h2 = 0; h2 < a.dataSeriesIndexes.length; h2++) {
            var l2 = a.dataSeriesIndexes[h2], k = this.data[l2], m = k.dataPoints, g = k.id;
            this._eventManager.objectMap[g] = { objectType: "dataSeries", dataSeriesIndex: l2 };
            g = Z(g);
            e.fillStyle = g;
            var g = [], n = 0, q, f, r2, y = [], x = [];
            if (0 < m.length) {
              var s = k._colorSet[n % k._colorSet.length], w = k.lineColor = k.options.lineColor || s, v = w;
              b.fillStyle = s;
              b.lineWidth = k.lineThickness;
              var A = "solid", B;
              if (b.setLineDash) {
                var J = K(k.nullDataLineDashType, k.lineThickness), A = k.lineDashType;
                B = K(A, k.lineThickness);
              }
              for (f = false; n < m.length; n++)
                if (q = m[n].x.getTime ? m[n].x.getTime() : m[n].x, !(q < a.axisX.dataInfo.viewPortMin || q > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !f)))
                  if (null !== m[n].y && m[n].y.length && "number" === typeof m[n].y[0] && "number" === typeof m[n].y[1]) {
                    q = a.axisX.convertValueToPixel(q);
                    f = a.axisY.convertValueToPixel(m[n].y[0]);
                    r2 = a.axisY.convertValueToPixel(m[n].y[1]);
                    var C2 = k.dataPointIds[n];
                    this._eventManager.objectMap[C2] = { id: C2, objectType: "dataPoint", dataSeriesIndex: l2, dataPointIndex: n, x1: q, y1: f, y2: r2 };
                    y[y.length] = { x: q, y: f };
                    x[x.length] = { x: q, y: r2 };
                    n < m.length - 1 && (v !== (m[n].lineColor || w) || A !== (m[n].lineDashType || k.lineDashType)) && (v = m[n].lineColor || w, y[y.length - 1].newStrokeStyle = v, b.setLineDash && (m[n].lineDashType ? (A = m[n].lineDashType, y[y.length - 1].newLineDashArray = K(A, k.lineThickness)) : (A = k.lineDashType, y[y.length - 1].newLineDashArray = B)));
                    if (0 !== m[n].markerSize && (0 < m[n].markerSize || 0 < k.markerSize)) {
                      var E3 = k.getMarkerProperties(n, q, f, b);
                      g.push(E3);
                      var N = Z(C2);
                      u && g.push({ x: q, y: f, ctx: e, type: E3.type, size: E3.size, color: N, borderColor: N, borderThickness: E3.borderThickness });
                      E3 = k.getMarkerProperties(n, q, r2, b);
                      g.push(E3);
                      N = Z(C2);
                      u && g.push({ x: q, y: r2, ctx: e, type: E3.type, size: E3.size, color: N, borderColor: N, borderThickness: E3.borderThickness });
                    }
                    if (m[n].indexLabel || k.indexLabel || m[n].indexLabelFormatter || k.indexLabelFormatter)
                      this._indexLabels.push({ chartType: "rangeSplineArea", dataPoint: m[n], dataSeries: k, indexKeyword: 0, point: { x: q, y: f }, direction: m[n].y[0] <= m[n].y[1] ? -1 : 1, color: s }), this._indexLabels.push({ chartType: "rangeSplineArea", dataPoint: m[n], dataSeries: k, indexKeyword: 1, point: {
                        x: q,
                        y: r2
                      }, direction: m[n].y[0] <= m[n].y[1] ? 1 : -1, color: s });
                    f = false;
                  } else
                    0 < n && !f && (k.connectNullData ? b.setLineDash && (0 < y.length && (k.options.nullDataLineDashType || !m[n - 1].lineDashType)) && (y[y.length - 1].newLineDashArray = J, A = k.nullDataLineDashType) : (d(B, w), y = [], x = [])), f = true;
              d(B, w);
              Y.drawMarkers(g);
            }
          }
          u && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(
            a.axisY.maskCanvas,
            0,
            0,
            this.width,
            this.height
          ), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(p.x1, p.y1, p.width, p.height), this._eventManager.ghostCtx.restore());
          b.restore();
          return { source: c, dest: this.plotArea.ctx, animationCallback: P.xClipAnimation, easingFunction: P.easing.linear, animationBase: 0 };
        }
      };
      l.prototype.renderWaterfall = function(a) {
        var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var b = this._eventManager.ghostCtx, e = null, g = this.plotArea, p = 0, h2, l2, k, m, n = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), p = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
          l2 = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0;
          var q = a.axisX.dataInfo.minDiff;
          isFinite(q) || (q = 0.3 * Math.abs(a.axisX.range));
          q = this.options.dataPointWidth ? this.dataPointWidth : 0.6 * (g.width * (a.axisX.logarithmic ? Math.log(q) / Math.log(a.axisX.range) : Math.abs(q) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
          this.dataPointMaxWidth && p > l2 && (p = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, l2));
          !this.dataPointMaxWidth && (this.dataPointMinWidth && l2 < p) && (l2 = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, p));
          q < p && (q = p);
          q > l2 && (q = l2);
          c.save();
          u && this._eventManager.ghostCtx.save();
          c.beginPath();
          c.rect(g.x1, g.y1, g.width, g.height);
          c.clip();
          u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.clip());
          for (var f = 0; f < a.dataSeriesIndexes.length; f++) {
            var r2 = a.dataSeriesIndexes[f], y = this.data[r2], x = y.dataPoints, e = y._colorSet[0];
            y.risingColor = y.options.risingColor ? y.options.risingColor : e;
            y.fallingColor = y.options.fallingColor ? y.options.fallingColor : "#e40a0a";
            var s = "number" === typeof y.options.lineThickness ? Math.round(y.lineThickness) : 1, w = 1 === Math.round(s) % 2 ? -0.5 : 0;
            if (0 < x.length)
              for (var v = 5 < q && y.bevelEnabled ? true : false, A = false, B = null, z3 = null, p = 0; p < x.length; p++)
                if (x[p].getTime ? m = x[p].x.getTime() : m = x[p].x, "number" !== typeof x[p].y) {
                  if (0 < p && !A && y.connectNullData)
                    var C2 = y.options.nullDataLineDashType || !x[p - 1].lineDashType ? y.nullDataLineDashType : x[p - 1].lineDashType;
                  A = true;
                } else {
                  h2 = a.axisX.convertValueToPixel(m);
                  l2 = 0 === y.dataPointEOs[p].cumulativeSum ? n : a.axisY.convertValueToPixel(y.dataPointEOs[p].cumulativeSum);
                  k = 0 === y.dataPointEOs[p].cumulativeSumYStartValue ? n : a.axisY.convertValueToPixel(y.dataPointEOs[p].cumulativeSumYStartValue);
                  h2 = a.axisX.reversed ? h2 + a.plotType.totalDataSeries * q / 2 - (a.previousDataSeriesCount + f) * q << 0 : h2 - a.plotType.totalDataSeries * q / 2 + (a.previousDataSeriesCount + f) * q << 0;
                  var E3 = a.axisX.reversed ? h2 - q << 0 : h2 + q << 0;
                  l2 > k && (e = l2, l2 = k, k = e);
                  a.axisY.reversed && (e = l2, l2 = k, k = e);
                  e = y.dataPointIds[p];
                  this._eventManager.objectMap[e] = { id: e, objectType: "dataPoint", dataSeriesIndex: r2, dataPointIndex: p, x1: h2, y1: l2, x2: E3, y2: k };
                  var N = x[p].color ? x[p].color : 0 < x[p].y ? y.risingColor : y.fallingColor;
                  $(c, a.axisX.reversed ? E3 : h2, a.axisY.reversed ? k : l2, a.axisX.reversed ? h2 : E3, a.axisY.reversed ? l2 : k, N, 0, N, v, v, false, false, y.fillOpacity);
                  e = Z(e);
                  u && $(this._eventManager.ghostCtx, a.axisX.reversed ? E3 : h2, l2, a.axisX.reversed ? h2 : E3, k, e, 0, null, false, false, false, false);
                  var U, N = h2;
                  U = "undefined" !== typeof x[p].isIntermediateSum && true === x[p].isIntermediateSum || "undefined" !== typeof x[p].isCumulativeSum && true === x[p].isCumulativeSum ? 0 < x[p].y ? l2 : k : 0 < x[p].y ? k : l2;
                  0 < p && B && (!A || y.connectNullData) && (A && c.setLineDash && c.setLineDash(K(C2, s)), c.beginPath(), c.moveTo(B, z3 - w), c.lineTo(N, U - w), 0 < s && c.stroke(), u && (b.beginPath(), b.moveTo(
                    B,
                    z3 - w
                  ), b.lineTo(N, U - w), 0 < s && b.stroke()));
                  A = false;
                  B = E3;
                  z3 = 0 < x[p].y ? l2 : k;
                  N = x[p].lineDashType ? x[p].lineDashType : y.options.lineDashType ? y.options.lineDashType : "shortDash";
                  c.strokeStyle = x[p].lineColor ? x[p].lineColor : y.options.lineColor ? y.options.lineColor : "#9e9e9e";
                  c.lineWidth = s;
                  c.setLineDash && (N = K(N, s), c.setLineDash(N));
                  (x[p].indexLabel || y.indexLabel || x[p].indexLabelFormatter || y.indexLabelFormatter) && this._indexLabels.push({
                    chartType: "waterfall",
                    dataPoint: x[p],
                    dataSeries: y,
                    point: { x: h2 + (E3 - h2) / 2, y: 0 <= x[p].y ? l2 : k },
                    direction: 0 > x[p].y === a.axisY.reversed ? 1 : -1,
                    bounds: { x1: h2, y1: Math.min(l2, k), x2: E3, y2: Math.max(l2, k) },
                    color: e
                  });
                }
          }
          u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(
            g.x1,
            g.y1,
            g.width,
            g.height
          ), this._eventManager.ghostCtx.restore());
          c.restore();
          return { source: d, dest: this.plotArea.ctx, animationCallback: P.fadeInAnimation, easingFunction: P.easing.easeInQuad, animationBase: 0 };
        }
      };
      var qa2 = function(a, d, c, b, e, g, p, h2, l2) {
        if (!(0 > c)) {
          "undefined" === typeof h2 && (h2 = 1);
          if (!u) {
            var k = Number((p % (2 * Math.PI)).toFixed(8));
            Number((g % (2 * Math.PI)).toFixed(8)) === k && (p -= 1e-4);
          }
          a.save();
          a.globalAlpha = h2;
          "pie" === e ? (a.beginPath(), a.moveTo(d.x, d.y), a.arc(d.x, d.y, c, g, p, false), a.fillStyle = b, a.strokeStyle = "white", a.lineWidth = 2, a.closePath(), a.fill()) : "doughnut" === e && (a.beginPath(), a.arc(d.x, d.y, c, g, p, false), 0 <= l2 && a.arc(d.x, d.y, l2 * c, p, g, true), a.closePath(), a.fillStyle = b, a.strokeStyle = "white", a.lineWidth = 2, a.fill());
          a.globalAlpha = 1;
          a.restore();
        }
      };
      l.prototype.renderPie = function(a) {
        function d() {
          if (k && m) {
            for (var a2 = 0, b2 = 0, c2 = 0, d2 = 0, e2 = 0; e2 < m.length; e2++) {
              var g2 = m[e2], p2 = k.dataPointIds[e2];
              f[e2].id = p2;
              f[e2].objectType = "dataPoint";
              f[e2].dataPointIndex = e2;
              f[e2].dataSeriesIndex = 0;
              var h3 = f[e2], n2 = { percent: null, total: null }, t = null, n2 = l2.getPercentAndTotal(
                k,
                g2
              );
              if (k.indexLabelFormatter || g2.indexLabelFormatter)
                t = { chart: l2.options, dataSeries: k, dataPoint: g2, total: n2.total, percent: n2.percent };
              n2 = g2.indexLabelFormatter ? g2.indexLabelFormatter(t) : g2.indexLabel ? l2.replaceKeywordsWithValue(g2.indexLabel, g2, k, e2) : k.indexLabelFormatter ? k.indexLabelFormatter(t) : k.indexLabel ? l2.replaceKeywordsWithValue(k.indexLabel, g2, k, e2) : g2.label ? g2.label : "";
              l2._eventManager.objectMap[p2] = h3;
              h3.center = { x: v.x, y: v.y };
              h3.y = g2.y;
              h3.radius = C2;
              h3.percentInnerRadius = G;
              h3.indexLabelText = n2;
              h3.indexLabelPlacement = k.indexLabelPlacement;
              h3.indexLabelLineColor = g2.indexLabelLineColor ? g2.indexLabelLineColor : k.options.indexLabelLineColor ? k.options.indexLabelLineColor : g2.color ? g2.color : k._colorSet[e2 % k._colorSet.length];
              h3.indexLabelLineThickness = r(g2.indexLabelLineThickness) ? k.indexLabelLineThickness : g2.indexLabelLineThickness;
              h3.indexLabelLineDashType = g2.indexLabelLineDashType ? g2.indexLabelLineDashType : k.indexLabelLineDashType;
              h3.indexLabelFontColor = g2.indexLabelFontColor ? g2.indexLabelFontColor : k.indexLabelFontColor;
              h3.indexLabelFontStyle = g2.indexLabelFontStyle ? g2.indexLabelFontStyle : k.indexLabelFontStyle;
              h3.indexLabelFontWeight = g2.indexLabelFontWeight ? g2.indexLabelFontWeight : k.indexLabelFontWeight;
              h3.indexLabelFontSize = r(g2.indexLabelFontSize) ? k.indexLabelFontSize : g2.indexLabelFontSize;
              h3.indexLabelFontFamily = g2.indexLabelFontFamily ? g2.indexLabelFontFamily : k.indexLabelFontFamily;
              h3.indexLabelBackgroundColor = g2.indexLabelBackgroundColor ? g2.indexLabelBackgroundColor : k.options.indexLabelBackgroundColor ? k.options.indexLabelBackgroundColor : k.indexLabelBackgroundColor;
              h3.indexLabelMaxWidth = g2.indexLabelMaxWidth ? g2.indexLabelMaxWidth : k.indexLabelMaxWidth ? k.indexLabelMaxWidth : 0.33 * q.width;
              h3.indexLabelWrap = "undefined" !== typeof g2.indexLabelWrap ? g2.indexLabelWrap : k.indexLabelWrap;
              h3.indexLabelTextAlign = g2.indexLabelTextAlign ? g2.indexLabelTextAlign : k.indexLabelTextAlign ? k.indexLabelTextAlign : "left";
              h3.startAngle = 0 === e2 ? k.startAngle ? k.startAngle / 180 * Math.PI : 0 : f[e2 - 1].endAngle;
              h3.startAngle = (h3.startAngle + 2 * Math.PI) % (2 * Math.PI);
              h3.endAngle = h3.startAngle + 2 * Math.PI / A * Math.abs(g2.y);
              g2 = (h3.endAngle + h3.startAngle) / 2;
              g2 = (g2 + 2 * Math.PI) % (2 * Math.PI);
              h3.midAngle = g2;
              if (h3.midAngle > Math.PI / 2 - s && h3.midAngle < Math.PI / 2 + s) {
                if (0 === a2 || f[c2].midAngle > h3.midAngle)
                  c2 = e2;
                a2++;
              } else if (h3.midAngle > 3 * Math.PI / 2 - s && h3.midAngle < 3 * Math.PI / 2 + s) {
                if (0 === b2 || f[d2].midAngle > h3.midAngle)
                  d2 = e2;
                b2++;
              }
              h3.hemisphere = g2 > Math.PI / 2 && g2 <= 3 * Math.PI / 2 ? "left" : "right";
              h3.indexLabelTextBlock = new ka(l2.plotArea.ctx, {
                fontSize: h3.indexLabelFontSize,
                fontFamily: h3.indexLabelFontFamily,
                fontColor: h3.indexLabelFontColor,
                fontStyle: h3.indexLabelFontStyle,
                fontWeight: h3.indexLabelFontWeight,
                textAlign: h3.indexLabelTextAlign,
                backgroundColor: h3.indexLabelBackgroundColor,
                maxWidth: h3.indexLabelMaxWidth,
                maxHeight: h3.indexLabelWrap ? 5 * h3.indexLabelFontSize : 1.5 * h3.indexLabelFontSize,
                text: h3.indexLabelText,
                padding: 0,
                textBaseline: "middle"
              });
              h3.indexLabelTextBlock.measureText();
            }
            p2 = g2 = 0;
            n2 = false;
            for (e2 = 0; e2 < m.length; e2++)
              h3 = f[(c2 + e2) % m.length], 1 < a2 && (h3.midAngle > Math.PI / 2 - s && h3.midAngle < Math.PI / 2 + s) && (g2 <= a2 / 2 && !n2 ? (h3.hemisphere = "right", g2++) : (h3.hemisphere = "left", n2 = true));
            n2 = false;
            for (e2 = 0; e2 < m.length; e2++)
              h3 = f[(d2 + e2) % m.length], 1 < b2 && (h3.midAngle > 3 * Math.PI / 2 - s && h3.midAngle < 3 * Math.PI / 2 + s) && (p2 <= b2 / 2 && !n2 ? (h3.hemisphere = "left", p2++) : (h3.hemisphere = "right", n2 = true));
          }
        }
        function c(a2) {
          var b2 = l2.plotArea.ctx;
          b2.clearRect(q.x1, q.y1, q.width, q.height);
          b2.fillStyle = l2.backgroundColor;
          b2.fillRect(q.x1, q.y1, q.width, q.height);
          for (b2 = 0; b2 < m.length; b2++) {
            var c2 = f[b2].startAngle, d2 = f[b2].endAngle;
            if (d2 > c2) {
              var e2 = 0.07 * C2 * Math.cos(f[b2].midAngle), g2 = 0.07 * C2 * Math.sin(f[b2].midAngle), p2 = false;
              if (m[b2].exploded) {
                if (1e-9 < Math.abs(f[b2].center.x - (v.x + e2)) || 1e-9 < Math.abs(f[b2].center.y - (v.y + g2)))
                  f[b2].center.x = v.x + e2 * a2, f[b2].center.y = v.y + g2 * a2, p2 = true;
              } else if (0 < Math.abs(f[b2].center.x - v.x) || 0 < Math.abs(f[b2].center.y - v.y))
                f[b2].center.x = v.x + e2 * (1 - a2), f[b2].center.y = v.y + g2 * (1 - a2), p2 = true;
              p2 && (e2 = {}, e2.dataSeries = k, e2.dataPoint = k.dataPoints[b2], e2.index = b2, l2.toolTip.highlightObjects([e2]));
              qa2(l2.plotArea.ctx, f[b2].center, f[b2].radius, m[b2].color ? m[b2].color : k._colorSet[b2 % k._colorSet.length], k.type, c2, d2, k.fillOpacity, f[b2].percentInnerRadius);
            }
          }
          a2 = l2.plotArea.ctx;
          a2.save();
          a2.fillStyle = "black";
          a2.strokeStyle = "grey";
          a2.textBaseline = "middle";
          a2.lineJoin = "round";
          for (b2 = b2 = 0; b2 < m.length; b2++)
            c2 = f[b2], c2.indexLabelText && (c2.indexLabelTextBlock.y -= c2.indexLabelTextBlock.height / 2 - c2.indexLabelTextBlock.fontSize / 2, d2 = 0, d2 = "left" === c2.hemisphere ? "inside" !== k.indexLabelPlacement ? -(c2.indexLabelTextBlock.width + n) : -c2.indexLabelTextBlock.width / 2 : "inside" !== k.indexLabelPlacement ? n : -c2.indexLabelTextBlock.width / 2, c2.indexLabelTextBlock.x += d2, c2.indexLabelTextBlock.render(true), c2.indexLabelTextBlock.x -= d2, c2.indexLabelTextBlock.y += c2.indexLabelTextBlock.height / 2 - c2.indexLabelTextBlock.fontSize / 2, "inside" !== c2.indexLabelPlacement && 0 < c2.indexLabelLineThickness && (d2 = c2.center.x + C2 * Math.cos(c2.midAngle), e2 = c2.center.y + C2 * Math.sin(c2.midAngle), a2.strokeStyle = c2.indexLabelLineColor, a2.lineWidth = c2.indexLabelLineThickness, a2.setLineDash && a2.setLineDash(K(c2.indexLabelLineDashType, c2.indexLabelLineThickness)), a2.beginPath(), a2.moveTo(d2, e2), a2.lineTo(c2.indexLabelTextBlock.x, c2.indexLabelTextBlock.y), a2.lineTo(c2.indexLabelTextBlock.x + ("left" === c2.hemisphere ? -n : n), c2.indexLabelTextBlock.y), a2.stroke()), a2.lineJoin = "miter");
          a2.save();
        }
        function b(a2, b2) {
          var c2 = 0, c2 = a2.indexLabelTextBlock.y - a2.indexLabelTextBlock.height / 2, d2 = a2.indexLabelTextBlock.y + a2.indexLabelTextBlock.height / 2, e2 = b2.indexLabelTextBlock.y - b2.indexLabelTextBlock.height / 2, f2 = b2.indexLabelTextBlock.y + b2.indexLabelTextBlock.height / 2;
          return c2 = b2.indexLabelTextBlock.y > a2.indexLabelTextBlock.y ? e2 - d2 : c2 - f2;
        }
        function e(a2) {
          for (var c2 = null, d2 = 1; d2 < m.length; d2++)
            if (c2 = (a2 + d2 + f.length) % f.length, f[c2].hemisphere !== f[a2].hemisphere) {
              c2 = null;
              break;
            } else if (f[c2].indexLabelText && c2 !== a2 && (0 > b(f[c2], f[a2]) || ("right" === f[a2].hemisphere ? f[c2].indexLabelTextBlock.y >= f[a2].indexLabelTextBlock.y : f[c2].indexLabelTextBlock.y <= f[a2].indexLabelTextBlock.y)))
              break;
            else
              c2 = null;
          return c2;
        }
        function g(a2, c2, d2) {
          d2 = (d2 || 0) + 1;
          if (1e3 < d2)
            return 0;
          c2 = c2 || 0;
          var p2 = 0, k2 = v.y - 1 * y, h3 = v.y + 1 * y;
          if (0 <= a2 && a2 < m.length) {
            var n2 = f[a2];
            if (0 > c2 && n2.indexLabelTextBlock.y < k2 || 0 < c2 && n2.indexLabelTextBlock.y > h3)
              return 0;
            var l3 = 0, q2 = 0, q2 = l3 = l3 = 0;
            0 > c2 ? n2.indexLabelTextBlock.y - n2.indexLabelTextBlock.height / 2 > k2 && n2.indexLabelTextBlock.y - n2.indexLabelTextBlock.height / 2 + c2 < k2 && (c2 = -(k2 - (n2.indexLabelTextBlock.y - n2.indexLabelTextBlock.height / 2 + c2))) : n2.indexLabelTextBlock.y + n2.indexLabelTextBlock.height / 2 < k2 && n2.indexLabelTextBlock.y + n2.indexLabelTextBlock.height / 2 + c2 > h3 && (c2 = n2.indexLabelTextBlock.y + n2.indexLabelTextBlock.height / 2 + c2 - h3);
            c2 = n2.indexLabelTextBlock.y + c2;
            k2 = 0;
            k2 = "right" === n2.hemisphere ? v.x + Math.sqrt(Math.pow(y, 2) - Math.pow(c2 - v.y, 2)) : v.x - Math.sqrt(Math.pow(y, 2) - Math.pow(c2 - v.y, 2));
            q2 = v.x + C2 * Math.cos(n2.midAngle);
            l3 = v.y + C2 * Math.sin(n2.midAngle);
            l3 = Math.sqrt(Math.pow(k2 - q2, 2) + Math.pow(c2 - l3, 2));
            q2 = Math.acos(C2 / y);
            l3 = Math.acos((y * y + C2 * C2 - l3 * l3) / (2 * C2 * y));
            c2 = l3 < q2 ? c2 - n2.indexLabelTextBlock.y : 0;
            k2 = null;
            for (h3 = 1; h3 < m.length; h3++)
              if (k2 = (a2 - h3 + f.length) % f.length, f[k2].hemisphere !== f[a2].hemisphere) {
                k2 = null;
                break;
              } else if (f[k2].indexLabelText && f[k2].hemisphere === f[a2].hemisphere && k2 !== a2 && (0 > b(f[k2], f[a2]) || ("right" === f[a2].hemisphere ? f[k2].indexLabelTextBlock.y <= f[a2].indexLabelTextBlock.y : f[k2].indexLabelTextBlock.y >= f[a2].indexLabelTextBlock.y)))
                break;
              else
                k2 = null;
            q2 = k2;
            l3 = e(a2);
            h3 = k2 = 0;
            0 > c2 ? (h3 = "right" === n2.hemisphere ? q2 : l3, p2 = c2, null !== h3 && (q2 = -c2, c2 = n2.indexLabelTextBlock.y - n2.indexLabelTextBlock.height / 2 - (f[h3].indexLabelTextBlock.y + f[h3].indexLabelTextBlock.height / 2), c2 - q2 < u2 && (k2 = -q2, h3 = g(h3, k2, d2 + 1), +h3.toFixed(w) > +k2.toFixed(w) && (p2 = c2 > u2 ? -(c2 - u2) : -(q2 - (h3 - k2)))))) : 0 < c2 && (h3 = "right" === n2.hemisphere ? l3 : q2, p2 = c2, null !== h3 && (q2 = c2, c2 = f[h3].indexLabelTextBlock.y - f[h3].indexLabelTextBlock.height / 2 - (n2.indexLabelTextBlock.y + n2.indexLabelTextBlock.height / 2), c2 - q2 < u2 && (k2 = q2, h3 = g(h3, k2, d2 + 1), +h3.toFixed(w) < +k2.toFixed(w) && (p2 = c2 > u2 ? c2 - u2 : q2 - (k2 - h3)))));
            p2 && (d2 = n2.indexLabelTextBlock.y + p2, c2 = 0, c2 = "right" === n2.hemisphere ? v.x + Math.sqrt(Math.pow(y, 2) - Math.pow(d2 - v.y, 2)) : v.x - Math.sqrt(Math.pow(y, 2) - Math.pow(d2 - v.y, 2)), n2.midAngle > Math.PI / 2 - s && n2.midAngle < Math.PI / 2 + s ? (k2 = (a2 - 1 + f.length) % f.length, k2 = f[k2], a2 = f[(a2 + 1 + f.length) % f.length], "left" === n2.hemisphere && "right" === k2.hemisphere && c2 > k2.indexLabelTextBlock.x ? c2 = k2.indexLabelTextBlock.x - 15 : "right" === n2.hemisphere && ("left" === a2.hemisphere && c2 < a2.indexLabelTextBlock.x) && (c2 = a2.indexLabelTextBlock.x + 15)) : n2.midAngle > 3 * Math.PI / 2 - s && n2.midAngle < 3 * Math.PI / 2 + s && (k2 = (a2 - 1 + f.length) % f.length, k2 = f[k2], a2 = f[(a2 + 1 + f.length) % f.length], "right" === n2.hemisphere && "left" === k2.hemisphere && c2 < k2.indexLabelTextBlock.x ? c2 = k2.indexLabelTextBlock.x + 15 : "left" === n2.hemisphere && ("right" === a2.hemisphere && c2 > a2.indexLabelTextBlock.x) && (c2 = a2.indexLabelTextBlock.x - 15)), n2.indexLabelTextBlock.y = d2, n2.indexLabelTextBlock.x = c2, n2.indexLabelAngle = Math.atan2(n2.indexLabelTextBlock.y - v.y, n2.indexLabelTextBlock.x - v.x));
          }
          return p2;
        }
        function p() {
          var a2 = l2.plotArea.ctx;
          a2.fillStyle = "grey";
          a2.strokeStyle = "grey";
          a2.font = "16px Arial";
          a2.textBaseline = "middle";
          for (var c2 = a2 = 0, d2 = 0, p2 = true, c2 = 0; 10 > c2 && (1 > c2 || 0 < d2); c2++) {
            if (k.radius || !k.radius && "undefined" !== typeof k.innerRadius && null !== k.innerRadius && C2 - d2 <= E3)
              p2 = false;
            p2 && (C2 -= d2);
            d2 = 0;
            if ("inside" !== k.indexLabelPlacement) {
              y = C2 * x;
              for (a2 = 0; a2 < m.length; a2++) {
                var h3 = f[a2];
                h3.indexLabelTextBlock.x = v.x + y * Math.cos(h3.midAngle);
                h3.indexLabelTextBlock.y = v.y + y * Math.sin(h3.midAngle);
                h3.indexLabelAngle = h3.midAngle;
                h3.radius = C2;
                h3.percentInnerRadius = G;
              }
              for (var t, r2, a2 = 0; a2 < m.length; a2++) {
                var h3 = f[a2], s2 = e(a2);
                if (null !== s2) {
                  t = f[a2];
                  r2 = f[s2];
                  var A2 = 0, A2 = b(t, r2) - u2;
                  if (0 > A2) {
                    for (var z4 = r2 = 0, B = 0; B < m.length; B++)
                      B !== a2 && f[B].hemisphere === h3.hemisphere && (f[B].indexLabelTextBlock.y < h3.indexLabelTextBlock.y ? r2++ : z4++);
                    r2 = A2 / (r2 + z4 || 1) * z4;
                    var z4 = -1 * (A2 - r2), K2 = B = 0;
                    "right" === h3.hemisphere ? (B = g(a2, r2), z4 = -1 * (A2 - B), K2 = g(s2, z4), +K2.toFixed(w) < +z4.toFixed(w) && +B.toFixed(w) <= +r2.toFixed(w) && g(a2, -(z4 - K2))) : (B = g(s2, r2), z4 = -1 * (A2 - B), K2 = g(a2, z4), +K2.toFixed(w) < +z4.toFixed(w) && +B.toFixed(w) <= +r2.toFixed(w) && g(s2, -(z4 - K2)));
                  }
                }
              }
            } else
              for (a2 = 0; a2 < m.length; a2++)
                h3 = f[a2], y = "pie" === k.type ? 0.7 * C2 : 0.85 * C2, s2 = v.x + y * Math.cos(h3.midAngle), r2 = v.y + y * Math.sin(h3.midAngle), h3.indexLabelTextBlock.x = s2, h3.indexLabelTextBlock.y = r2;
            for (a2 = 0; a2 < m.length; a2++)
              if (h3 = f[a2], s2 = h3.indexLabelTextBlock.measureText(), 0 !== s2.height && 0 !== s2.width)
                s2 = s2 = 0, "right" === h3.hemisphere ? (s2 = q.x2 - (h3.indexLabelTextBlock.x + h3.indexLabelTextBlock.width + n), s2 *= -1) : s2 = q.x1 - (h3.indexLabelTextBlock.x - h3.indexLabelTextBlock.width - n), 0 < s2 && (!p2 && h3.indexLabelText && (r2 = "right" === h3.hemisphere ? q.x2 - h3.indexLabelTextBlock.x : h3.indexLabelTextBlock.x - q.x1, 0.3 * h3.indexLabelTextBlock.maxWidth > r2 ? h3.indexLabelText = "" : h3.indexLabelTextBlock.maxWidth = 0.85 * r2, 0.3 * h3.indexLabelTextBlock.maxWidth < r2 && (h3.indexLabelTextBlock.x -= "right" === h3.hemisphere ? 2 : -2)), Math.abs(h3.indexLabelTextBlock.y - h3.indexLabelTextBlock.height / 2 - v.y) < C2 || Math.abs(h3.indexLabelTextBlock.y + h3.indexLabelTextBlock.height / 2 - v.y) < C2) && (s2 /= Math.abs(Math.cos(h3.indexLabelAngle)), 9 < s2 && (s2 *= 0.3), s2 > d2 && (d2 = s2)), s2 = s2 = 0, 0 < h3.indexLabelAngle && h3.indexLabelAngle < Math.PI ? (s2 = q.y2 - (h3.indexLabelTextBlock.y + h3.indexLabelTextBlock.height / 2 + 5), s2 *= -1) : s2 = q.y1 - (h3.indexLabelTextBlock.y - h3.indexLabelTextBlock.height / 2 - 5), 0 < s2 && (!p2 && h3.indexLabelText && (r2 = 0 < h3.indexLabelAngle && h3.indexLabelAngle < Math.PI ? -1 : 1, 0 === g(a2, s2 * r2) && g(a2, 2 * r2)), Math.abs(h3.indexLabelTextBlock.x - v.x) < C2 && (s2 /= Math.abs(Math.sin(h3.indexLabelAngle)), 9 < s2 && (s2 *= 0.3), s2 > d2 && (d2 = s2)));
            var O = function(a3, b2, c3) {
              for (var d3 = [], e2 = 0; d3.push(f[b2]), b2 !== c3; b2 = (b2 + 1 + m.length) % m.length)
                ;
              d3.sort(function(a4, b3) {
                return a4.y - b3.y;
              });
              for (b2 = 0; b2 < d3.length; b2++)
                if (c3 = d3[b2], e2 < 0.7 * a3)
                  e2 += c3.indexLabelTextBlock.height, c3.indexLabelTextBlock.text = "", c3.indexLabelText = "", c3.indexLabelTextBlock.measureText();
                else
                  break;
            };
            (function() {
              for (var a3 = -1, c3 = -1, d3 = 0, g2 = false, p3 = 0; p3 < m.length; p3++)
                if (g2 = false, t = f[p3], t.indexLabelText) {
                  var k2 = e(p3);
                  if (null !== k2) {
                    var h4 = f[k2];
                    A2 = 0;
                    A2 = b(t, h4);
                    var l3;
                    if (l3 = 0 > A2) {
                      l3 = t.indexLabelTextBlock.x;
                      var q2 = t.indexLabelTextBlock.y - t.indexLabelTextBlock.height / 2, r3 = t.indexLabelTextBlock.y + t.indexLabelTextBlock.height / 2, s3 = h4.indexLabelTextBlock.y - h4.indexLabelTextBlock.height / 2, D = h4.indexLabelTextBlock.x + h4.indexLabelTextBlock.width, v2 = h4.indexLabelTextBlock.y + h4.indexLabelTextBlock.height / 2;
                      l3 = t.indexLabelTextBlock.x + t.indexLabelTextBlock.width < h4.indexLabelTextBlock.x - n || l3 > D + n || q2 > v2 + n || r3 < s3 - n ? false : true;
                    }
                    l3 ? (0 > a3 && (a3 = p3), k2 !== a3 && (c3 = k2, d3 += -A2), 0 === p3 % Math.max(m.length / 10, 3) && (g2 = true)) : g2 = true;
                    g2 && (0 < d3 && 0 <= a3 && 0 <= c3) && (O(d3, a3, c3), c3 = a3 = -1, d3 = 0);
                  }
                }
              0 < d3 && O(d3, a3, c3);
            })();
          }
        }
        function h2() {
          l2.plotArea.layoutManager.reset();
          l2.title && (l2.title.dockInsidePlotArea || "center" === l2.title.horizontalAlign && "center" === l2.title.verticalAlign) && l2.title.render();
          if (l2.subtitles)
            for (var a2 = 0; a2 < l2.subtitles.length; a2++) {
              var b2 = l2.subtitles[a2];
              (b2.dockInsidePlotArea || "center" === b2.horizontalAlign && "center" === b2.verticalAlign) && b2.render();
            }
          l2.legend && (l2.legend.dockInsidePlotArea || "center" === l2.legend.horizontalAlign && "center" === l2.legend.verticalAlign) && (l2.legend.setLayout(), l2.legend.render());
        }
        var l2 = this;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var k = this.data[a.dataSeriesIndexes[0]], m = k.dataPoints, n = 10, q = this.plotArea, f = k.dataPointEOs, u2 = 2, y, x = 1.3, s = 20 / 180 * Math.PI, w = 6, v = { x: (q.x2 + q.x1) / 2, y: (q.y2 + q.y1) / 2 }, A = 0;
          a = false;
          for (var z3 = 0; z3 < m.length; z3++)
            A += Math.abs(m[z3].y), !a && ("undefined" !== typeof m[z3].indexLabel && null !== m[z3].indexLabel && 0 < m[z3].indexLabel.toString().length) && (a = true), !a && ("undefined" !== typeof m[z3].label && null !== m[z3].label && 0 < m[z3].label.toString().length) && (a = true);
          if (0 !== A) {
            a = a || "undefined" !== typeof k.indexLabel && null !== k.indexLabel && 0 < k.indexLabel.toString().length;
            var C2 = "inside" !== k.indexLabelPlacement && a ? 0.75 * Math.min(q.width, q.height) / 2 : 0.92 * Math.min(q.width, q.height) / 2;
            k.radius && (C2 = Ua(k.radius, C2));
            var E3 = "undefined" !== typeof k.innerRadius && null !== k.innerRadius ? Ua(k.innerRadius, C2) : 0.7 * C2;
            k.radius = C2;
            "doughnut" === k.type && (k.innerRadius = E3);
            var G = Math.min(E3 / C2, (C2 - 1) / C2);
            this.pieDoughnutClickHandler = function(a2) {
              l2.isAnimating || !r(a2.dataSeries.explodeOnClick) && !a2.dataSeries.explodeOnClick || (a2 = a2.dataPoint, a2.exploded = a2.exploded ? false : true, 1 < this.dataPoints.length && l2._animator.animate(0, 500, function(a3) {
                c(a3);
                h2();
                l2.dispatchEvent("dataAnimationIterationEnd", { chart: l2 });
                l2.dispatchEvent("dataAnimationEnd", { chart: l2 });
              }));
            };
            d();
            p();
            p();
            p();
            p();
            this.disableToolTip = true;
            this._animator.animate(0, this.animatedRender ? this.animationDuration : 0, function(a2) {
              var b2 = l2.plotArea.ctx;
              b2.clearRect(q.x1, q.y1, q.width, q.height);
              b2.fillStyle = l2.backgroundColor;
              b2.fillRect(q.x1, q.y1, q.width, q.height);
              for (var b2 = f[0].startAngle + 2 * Math.PI * a2, c2 = 0; c2 < m.length; c2++) {
                var d2 = 0 === c2 ? f[c2].startAngle : e2, e2 = d2 + (f[c2].endAngle - f[c2].startAngle), g2 = false;
                e2 > b2 && (e2 = b2, g2 = true);
                var p2 = m[c2].color ? m[c2].color : k._colorSet[c2 % k._colorSet.length];
                e2 > d2 && qa2(l2.plotArea.ctx, f[c2].center, f[c2].radius, p2, k.type, d2, e2, k.fillOpacity, f[c2].percentInnerRadius);
                if (g2)
                  break;
              }
              h2();
              l2.dispatchEvent(
                "dataAnimationIterationEnd",
                { chart: l2 }
              );
              1 <= a2 && l2.dispatchEvent("dataAnimationEnd", { chart: l2 });
            }, function() {
              l2.disableToolTip = false;
              l2._animator.animate(0, l2.animatedRender ? 500 : 0, function(a2) {
                c(a2);
                h2();
                l2.dispatchEvent("dataAnimationIterationEnd", { chart: l2 });
              });
              l2.dispatchEvent("dataAnimationEnd", { chart: l2 });
            });
          }
        }
      };
      var sa2 = function(a, d, c, b) {
        "undefined" === typeof c && (c = 1);
        0 >= Math.round(d.y4 - d.y1) || (a.save(), a.globalAlpha = c, a.beginPath(), a.moveTo(Math.round(d.x1), Math.round(d.y1)), a.lineTo(Math.round(d.x2), Math.round(d.y2)), a.lineTo(
          Math.round(d.x3),
          Math.round(d.y3)
        ), a.lineTo(Math.round(d.x4), Math.round(d.y4)), "undefined" !== d.x5 && (a.lineTo(Math.round(d.x5), Math.round(d.y5)), a.lineTo(Math.round(d.x6), Math.round(d.y6))), a.closePath(), a.fillStyle = b ? b : d.color, a.fill(), a.globalAplha = 1, a.restore());
      };
      l.prototype.renderFunnel = function(a) {
        function d() {
          for (var a2 = 0, b2 = [], c2 = 0; c2 < w.length; c2++) {
            if ("undefined" === typeof w[c2].y)
              return -1;
            w[c2].y = "number" === typeof w[c2].y ? w[c2].y : 0;
            a2 += Math.abs(w[c2].y);
          }
          if (0 === a2)
            return -1;
          for (c2 = b2[0] = 0; c2 < w.length; c2++)
            b2.push(Math.abs(w[c2].y) * E3 / a2);
          return b2;
        }
        function c() {
          var a2 = V2, b2 = X2, c2 = O, d2 = Y2, e2, f2;
          e2 = M3;
          f2 = Q2 - S3;
          d2 = Math.abs((f2 - e2) * (b2 - a2 + (d2 - c2)) / 2);
          c2 = Y2 - O;
          e2 = f2 - e2;
          f2 = c2 * (f2 - Q2);
          f2 = Math.abs(f2);
          f2 = d2 + f2;
          for (var d2 = [], g2 = 0, p2 = 0; p2 < w.length; p2++) {
            if ("undefined" === typeof w[p2].y)
              return -1;
            w[p2].y = "number" === typeof w[p2].y ? w[p2].y : 0;
            g2 += Math.abs(w[p2].y);
          }
          if (0 === g2)
            return -1;
          for (var k2 = d2[0] = 0, h3 = 0, m2, n2, b2 = b2 - a2, k2 = false, p2 = 0; p2 < w.length; p2++)
            a2 = Math.abs(w[p2].y) * f2 / g2, k2 ? m2 = 0 == Number(c2.toFixed(3)) ? 0 : a2 / c2 : (n2 = ba3 * ba3 * b2 * b2 - 4 * Math.abs(ba3) * a2, 0 > n2 ? (n2 = c2, k2 = (b2 + n2) * (e2 - h3) / 2, a2 -= k2, m2 = e2 - h3, h3 += e2 - h3, m2 += 0 == n2 ? 0 : a2 / n2, h3 += a2 / n2, k2 = true) : (m2 = (Math.abs(ba3) * b2 - Math.sqrt(n2)) / 2, n2 = b2 - 2 * m2 / Math.abs(ba3), h3 += m2, h3 > e2 && (h3 -= m2, n2 = c2, k2 = (b2 + n2) * (e2 - h3) / 2, a2 -= k2, m2 = e2 - h3, h3 += e2 - h3, m2 += a2 / n2, h3 += a2 / n2, k2 = true), b2 = n2)), d2.push(m2);
          return d2;
        }
        function b() {
          if (s && w) {
            for (var a2, b2, c2, d2, e2, g2, p2, k2, h3, m2, n2, l3, q2, t, D, v2 = [], y2 = [], A2 = { percent: null, total: null }, z4 = null, F = 0; F < w.length; F++)
              D = T[F], D = "undefined" !== typeof D.x5 ? (D.y2 + D.y4) / 2 : (D.y2 + D.y3) / 2, D = f(D).x2 + 1, v2[F] = L2 - D - Z2;
            D = 0.5 * Z2;
            for (var F = 0, B2 = w.length - 1; F < w.length || 0 <= B2; F++, B2--) {
              b2 = s.reversed ? w[B2] : w[F];
              a2 = b2.color ? b2.color : s.reversed ? s._colorSet[(w.length - 1 - F) % s._colorSet.length] : s._colorSet[F % s._colorSet.length];
              c2 = b2.indexLabelPlacement || s.indexLabelPlacement || "outside";
              t = b2.indexLabelTextAlign || s.indexLabelTextAlign || "left";
              d2 = b2.indexLabelBackgroundColor || s.indexLabelBackgroundColor || (u ? "transparent" : null);
              e2 = b2.indexLabelFontColor || s.indexLabelFontColor || "#979797";
              g2 = r(b2.indexLabelFontSize) ? s.indexLabelFontSize : b2.indexLabelFontSize;
              p2 = b2.indexLabelFontStyle || s.indexLabelFontStyle || "normal";
              k2 = b2.indexLabelFontFamily || s.indexLabelFontFamily || "arial";
              h3 = b2.indexLabelFontWeight || s.indexLabelFontWeight || "normal";
              a2 = b2.indexLabelLineColor || s.options.indexLabelLineColor || a2;
              m2 = "number" === typeof b2.indexLabelLineThickness ? b2.indexLabelLineThickness : "number" === typeof s.indexLabelLineThickness ? s.indexLabelLineThickness : 2;
              n2 = b2.indexLabelLineDashType || s.indexLabelLineDashType || "solid";
              l3 = "undefined" !== typeof b2.indexLabelWrap ? b2.indexLabelWrap : "undefined" !== typeof s.indexLabelWrap ? s.indexLabelWrap : true;
              q2 = s.dataPointIds[F];
              x._eventManager.objectMap[q2] = {
                id: q2,
                objectType: "dataPoint",
                dataPointIndex: F,
                dataSeriesIndex: 0,
                funnelSection: T[s.reversed ? w.length - 1 - F : F]
              };
              "inside" === s.indexLabelPlacement && (v2[F] = F !== da3 ? s.reversed ? T[F].x2 - T[F].x1 : T[F].x3 - T[F].x4 : T[F].x3 - T[F].x6, 20 > v2[F] && (v2[F] = F !== da3 ? s.reversed ? T[F].x3 - T[F].x4 : T[F].x2 - T[F].x1 : T[F].x2 - T[F].x1, v2[F] /= 2));
              q2 = b2.indexLabelMaxWidth ? b2.indexLabelMaxWidth : s.options.indexLabelMaxWidth ? s.indexLabelMaxWidth : v2[F];
              if (q2 > v2[F] || 0 > q2)
                q2 = v2[F];
              y2[F] = "inside" === s.indexLabelPlacement ? l3 ? Math.max(T[F].height, g2) : 1.5 * g2 : false;
              A2 = x.getPercentAndTotal(s, b2);
              if (s.indexLabelFormatter || b2.indexLabelFormatter)
                z4 = { chart: x.options, dataSeries: s, dataPoint: b2, total: A2.total, percent: A2.percent };
              b2 = b2.indexLabelFormatter ? b2.indexLabelFormatter(z4) : b2.indexLabel ? x.replaceKeywordsWithValue(b2.indexLabel, b2, s, F) : s.indexLabelFormatter ? s.indexLabelFormatter(z4) : s.indexLabel ? x.replaceKeywordsWithValue(s.indexLabel, b2, s, F) : b2.label ? b2.label : "";
              0 >= m2 && (m2 = 0);
              1e3 > q2 && 1e3 - q2 < D && (q2 += 1e3 - q2);
              R2.roundRect || Aa(R2);
              c2 = new ka(R2, {
                fontSize: g2,
                fontFamily: k2,
                fontColor: e2,
                fontStyle: p2,
                fontWeight: h3,
                horizontalAlign: c2,
                textAlign: t,
                backgroundColor: d2,
                maxWidth: q2,
                maxHeight: false === y2[F] ? l3 ? 4.28571429 * g2 : 1.5 * g2 : y2[F],
                text: b2,
                padding: ea2,
                textBaseline: "middle"
              });
              c2.measureText();
              c2.height = c2.height === 2 * c2.padding ? 0 : c2.height;
              c2.width = c2.width === 2 * c2.padding ? 0 : c2.width;
              I.push({ textBlock: c2, id: s.reversed ? B2 : F, isDirty: false, lineColor: a2, lineThickness: m2, lineDashType: n2, height: c2.height < c2.maxHeight ? c2.height : c2.maxHeight, width: c2.width < c2.maxWidth ? c2.width : c2.maxWidth });
            }
          }
        }
        function e() {
          var a2, b2, c2, d2, e2, f2 = [];
          e2 = false;
          c2 = 0;
          for (var g2, p2 = L2 - X2 - Z2 / 2, p2 = s.options.indexLabelMaxWidth ? s.indexLabelMaxWidth > p2 ? p2 : s.indexLabelMaxWidth : p2, k2 = I.length - 1; 0 <= k2; k2--) {
            g2 = w[I[k2].id];
            c2 = I[k2];
            d2 = c2.textBlock;
            b2 = (a2 = q(k2) < T.length ? I[q(k2)] : null) ? a2.textBlock : null;
            c2 = c2.height;
            a2 && d2.y + c2 + ea2 > b2.y && (e2 = true);
            c2 = g2.indexLabelMaxWidth || p2;
            if (c2 > p2 || 0 > c2)
              c2 = p2;
            f2.push(c2);
          }
          if (e2)
            for (k2 = I.length - 1; 0 <= k2; k2--)
              a2 = T[k2], I[k2].textBlock.maxWidth = f2[f2.length - (k2 + 1)], I[k2].textBlock.measureText(), I[k2].textBlock.height = I[k2].textBlock.height === 2 * I[k2].textBlock.padding ? 0 : I[k2].textBlock.height, I[k2].textBlock.width = I[k2].textBlock.width === 2 * I[k2].textBlock.padding ? 0 : I[k2].textBlock.width, I[k2].textBlock.x = L2 - p2, c2 = I[k2].textBlock.height < I[k2].textBlock.maxHeight ? I[k2].textBlock.height : I[k2].textBlock.maxHeight, e2 = I[k2].textBlock.width < I[k2].textBlock.maxWidth ? I[k2].textBlock.width : I[k2].textBlock.maxWidth, I[k2].height = c2, I[k2].width = e2, c2 = "undefined" !== typeof a2.x5 ? (a2.y2 + a2.y4) / 2 : (a2.y2 + a2.y3) / 2, I[k2].textBlock.y = c2 - I[k2].height / 2, s.reversed ? (I[k2].textBlock.y + I[k2].height > W3 + A && (I[k2].textBlock.y = W3 + A - I[k2].height), I[k2].textBlock.y < ua - A && (I[k2].textBlock.y = ua - A)) : (I[k2].textBlock.y < W3 - A && (I[k2].textBlock.y = W3 - A), I[k2].textBlock.y + I[k2].height > ua + A && (I[k2].textBlock.y = ua + A - I[k2].height));
        }
        function g() {
          var a2, b2, c2, d2;
          if ("inside" !== s.indexLabelPlacement)
            for (var e2 = 0; e2 < T.length; e2++)
              0 == I[e2].textBlock.text.length ? I[e2].isDirty = true : (a2 = T[e2], c2 = "undefined" !== typeof a2.x5 ? (a2.y2 + a2.y4) / 2 : (a2.y2 + a2.y3) / 2, b2 = s.reversed ? "undefined" !== typeof a2.x5 ? c2 > Ea ? f(c2).x2 + 1 : (a2.x2 + a2.x3) / 2 + 1 : (a2.x2 + a2.x3) / 2 + 1 : "undefined" !== typeof a2.x5 ? c2 < Ea ? f(c2).x2 + 1 : (a2.x4 + a2.x3) / 2 + 1 : (a2.x2 + a2.x3) / 2 + 1, I[e2].textBlock.x = b2 + Z2, I[e2].textBlock.y = c2 - I[e2].height / 2, s.reversed ? (I[e2].textBlock.y + I[e2].height > W3 + A && (I[e2].textBlock.y = W3 + A - I[e2].height), I[e2].textBlock.y < ua - A && (I[e2].textBlock.y = ua - A)) : (I[e2].textBlock.y < W3 - A && (I[e2].textBlock.y = W3 - A), I[e2].textBlock.y + I[e2].height > ua + A && (I[e2].textBlock.y = ua + A - I[e2].height)));
          else
            for (e2 = 0; e2 < T.length; e2++)
              0 == I[e2].textBlock.text.length ? I[e2].isDirty = true : (a2 = T[e2], b2 = a2.height, c2 = I[e2].height, d2 = I[e2].width, b2 >= c2 ? (b2 = e2 != da3 ? (a2.x4 + a2.x3) / 2 - d2 / 2 : (a2.x5 + a2.x4) / 2 - d2 / 2, c2 = e2 != da3 ? (a2.y1 + a2.y3) / 2 - c2 / 2 : (a2.y1 + a2.y4) / 2 - c2 / 2, I[e2].textBlock.x = b2, I[e2].textBlock.y = c2) : I[e2].isDirty = true);
        }
        function p() {
          function a2(b3, c3) {
            var d3;
            if (0 > b3 || b3 >= I.length)
              return 0;
            var e3, f3 = I[b3].textBlock;
            if (0 > c3) {
              c3 *= -1;
              e3 = n(b3);
              d3 = h2(e3, b3);
              if (d3 >= c3)
                return f3.y -= c3, c3;
              if (0 == b3)
                return 0 < d3 && (f3.y -= d3), d3;
              d3 += a2(e3, -(c3 - d3));
              0 < d3 && (f3.y -= d3);
              return d3;
            }
            e3 = q(b3);
            d3 = h2(b3, e3);
            if (d3 >= c3)
              return f3.y += c3, c3;
            if (b3 == T.length - 1)
              return 0 < d3 && (f3.y += d3), d3;
            d3 += a2(e3, c3 - d3);
            0 < d3 && (f3.y += d3);
            return d3;
          }
          function b2() {
            var a3, d3, e3, f3, g3 = 0, k3;
            f3 = (Q2 - M3 + 2 * A) / m2;
            k3 = m2;
            for (var p3, h3 = 1; h3 < k3; h3++) {
              e3 = h3 * f3;
              for (var l4 = I.length - 1; 0 <= l4; l4--)
                !I[l4].isDirty && (I[l4].textBlock.y < e3 && I[l4].textBlock.y + I[l4].height > e3) && (p3 = q(l4), !(p3 >= I.length - 1) && I[l4].textBlock.y + I[l4].height + ea2 > I[p3].textBlock.y && (I[l4].textBlock.y = I[l4].textBlock.y + I[l4].height - e3 > e3 - I[l4].textBlock.y ? e3 + 1 : e3 - I[l4].height - 1));
            }
            for (p3 = T.length - 1; 0 < p3; p3--)
              if (!I[p3].isDirty) {
                e3 = n(p3);
                if (0 > e3 && (e3 = 0, I[e3].isDirty))
                  break;
                if (I[p3].textBlock.y < I[e3].textBlock.y + I[e3].height) {
                  d3 = d3 || p3;
                  f3 = p3;
                  for (k3 = 0; I[f3].textBlock.y < I[e3].textBlock.y + I[e3].height + ea2; ) {
                    a3 = a3 || I[f3].textBlock.y + I[f3].height;
                    k3 += I[f3].height;
                    k3 += ea2;
                    f3 = e3;
                    if (0 >= f3) {
                      f3 = 0;
                      k3 += I[f3].height;
                      break;
                    }
                    e3 = n(f3);
                    if (0 > e3) {
                      f3 = 0;
                      k3 += I[f3].height;
                      break;
                    }
                  }
                  if (f3 != p3) {
                    g3 = I[f3].textBlock.y;
                    a3 -= g3;
                    a3 = k3 - a3;
                    g3 = c2(a3, d3, f3);
                    break;
                  }
                }
              }
            return g3;
          }
          function c2(a3, b3, d3) {
            var e3 = [], f3 = 0, g3 = 0;
            for (a3 = Math.abs(a3); d3 <= b3; d3++)
              e3.push(T[d3]);
            e3.sort(function(a4, b4) {
              return a4.height - b4.height;
            });
            for (d3 = 0; d3 < e3.length; d3++)
              if (b3 = e3[d3], f3 < a3)
                g3++, f3 += I[b3.id].height + ea2, I[b3.id].textBlock.text = "", I[b3.id].indexLabelText = "", I[b3.id].isDirty = true, I[b3.id].textBlock.measureText();
              else
                break;
            return g3;
          }
          for (var d2, e2, f2, g2, k2, p2, m2 = 1, l3 = 0; l3 < 2 * m2; l3++) {
            for (var r2 = I.length - 1; 0 <= r2 && !(0 <= n(r2) && n(r2), f2 = I[r2], g2 = f2.textBlock, p2 = (k2 = q(r2) < T.length ? I[q(r2)] : null) ? k2.textBlock : null, d2 = +f2.height.toFixed(6), e2 = +g2.y.toFixed(6), !f2.isDirty && (k2 && e2 + d2 + ea2 > +p2.y.toFixed(6)) && (d2 = g2.y + d2 + ea2 - p2.y, e2 = a2(r2, -d2), e2 < d2 && (0 < e2 && (d2 -= e2), e2 = a2(q(r2), d2), e2 != d2))); r2--)
              ;
            b2();
          }
        }
        function h2(a2, b2) {
          return (b2 < T.length ? I[b2].textBlock.y : s.reversed ? W3 + A : ua + A) - (0 > a2 ? s.reversed ? ua - A : W3 - A : I[a2].textBlock.y + I[a2].height + ea2);
        }
        function l2(a2, b2, c2) {
          var d2, e2, f2, p2 = [], h3 = A, n2 = [];
          -1 !== b2 && (0 <= aa3.indexOf(b2) ? (e2 = aa3.indexOf(b2), aa3.splice(e2, 1)) : (aa3.push(b2), aa3 = aa3.sort(function(a3, b3) {
            return a3 - b3;
          })));
          if (0 === aa3.length)
            p2 = ja3;
          else {
            e2 = A * (1 != aa3.length || 0 != aa3[0] && aa3[0] != T.length - 1 ? 2 : 1) / k();
            for (var q2 = 0; q2 < T.length; q2++) {
              if (1 == aa3.length && 0 == aa3[0]) {
                if (0 === q2) {
                  p2.push(ja3[q2]);
                  d2 = h3;
                  continue;
                }
              } else
                0 === q2 && (d2 = -1 * h3);
              p2.push(ja3[q2] + d2);
              if (0 <= aa3.indexOf(q2) || q2 < T.length && 0 <= aa3.indexOf(q2 + 1))
                d2 += e2;
            }
          }
          f2 = function() {
            for (var a3 = [], b3 = 0; b3 < T.length; b3++)
              a3.push(p2[b3] - T[b3].y1);
            return a3;
          }();
          var t = { startTime: (/* @__PURE__ */ new Date()).getTime(), duration: c2 || 500, easingFunction: function(a3, b3, c3, d3) {
            return P.easing.easeOutQuart(a3, b3, c3, d3);
          }, changeSection: function(a3) {
            for (var b3, c3, d3 = 0; d3 < T.length; d3++)
              b3 = f2[d3], c3 = T[d3], b3 *= a3, "undefined" === typeof n2[d3] && (n2[d3] = 0), 0 > n2 && (n2 *= -1), c3.y1 += b3 - n2[d3], c3.y2 += b3 - n2[d3], c3.y3 += b3 - n2[d3], c3.y4 += b3 - n2[d3], c3.y5 && (c3.y5 += b3 - n2[d3], c3.y6 += b3 - n2[d3]), n2[d3] = b3;
          } };
          a2._animator.animate(0, c2, function(c3) {
            var d3 = a2.plotArea.ctx || a2.ctx;
            ia = true;
            d3.clearRect(v.x1, v.y1, v.x2 - v.x1, v.y2 - v.y1);
            d3.fillStyle = a2.backgroundColor;
            d3.fillRect(v.x1, v.y1, v.width, v.height);
            t.changeSection(c3, b2);
            var e3 = {};
            e3.dataSeries = s;
            e3.dataPoint = s.reversed ? s.dataPoints[w.length - 1 - b2] : s.dataPoints[b2];
            e3.index = s.reversed ? w.length - 1 - b2 : b2;
            a2.toolTip.highlightObjects([e3]);
            for (e3 = 0; e3 < T.length; e3++)
              sa2(
                d3,
                T[e3],
                s.fillOpacity
              );
            y(d3);
            N && ("inside" !== s.indexLabelPlacement ? m(d3) : g(), z3(d3));
            1 <= c3 && (ia = false);
          }, null, P.easing.easeOutQuart);
        }
        function k() {
          for (var a2 = 0, b2 = 0; b2 < T.length - 1; b2++)
            (0 <= aa3.indexOf(b2) || 0 <= aa3.indexOf(b2 + 1)) && a2++;
          return a2;
        }
        function m(a2) {
          for (var b2, c2, d2, e2, g2 = 0; g2 < T.length; g2++)
            e2 = 1 === I[g2].lineThickness % 2 ? 0.5 : 0, c2 = ((T[g2].y2 + T[g2].y4) / 2 << 0) + e2, b2 = f(c2).x2 - 1, d2 = I[g2].textBlock.x, e2 = (I[g2].textBlock.y + I[g2].height / 2 << 0) + e2, I[g2].isDirty || 0 == I[g2].lineThickness || (a2.strokeStyle = I[g2].lineColor, a2.lineWidth = I[g2].lineThickness, a2.setLineDash && a2.setLineDash(K(I[g2].lineDashType, I[g2].lineThickness)), a2.beginPath(), a2.moveTo(b2, c2), a2.lineTo(d2, e2), a2.stroke());
        }
        function n(a2) {
          for (a2 -= 1; -1 <= a2 && -1 != a2 && I[a2].isDirty; a2--)
            ;
          return a2;
        }
        function q(a2) {
          for (a2 += 1; a2 <= T.length && a2 != T.length && I[a2].isDirty; a2++)
            ;
          return a2;
        }
        function f(a2) {
          for (var b2, c2 = 0; c2 < w.length; c2++)
            if (T[c2].y1 < a2 && T[c2].y4 > a2) {
              b2 = T[c2];
              break;
            }
          return b2 ? (a2 = b2.y6 ? a2 > b2.y6 ? b2.x3 + (b2.x4 - b2.x3) / (b2.y4 - b2.y3) * (a2 - b2.y3) : b2.x2 + (b2.x3 - b2.x2) / (b2.y3 - b2.y2) * (a2 - b2.y2) : b2.x2 + (b2.x3 - b2.x2) / (b2.y3 - b2.y2) * (a2 - b2.y2), { x1: a2, x2: a2 }) : -1;
        }
        function z3(a2) {
          for (var b2 = 0; b2 < T.length; b2++)
            I[b2].isDirty || (a2 && (I[b2].textBlock.ctx = a2), I[b2].textBlock.y += I[b2].textBlock._lineHeight / 2, I[b2].textBlock.render(true), I[b2].textBlock.y -= I[b2].textBlock._lineHeight / 2);
        }
        function y(a2) {
          x.plotArea.layoutManager.reset();
          a2.roundRect || Aa(a2);
          x.title && (x.title.dockInsidePlotArea || "center" === x.title.horizontalAlign && "center" === x.title.verticalAlign) && (x.title.ctx = a2, x.title.render());
          if (x.subtitles)
            for (var b2 = 0; b2 < x.subtitles.length; b2++) {
              var c2 = x.subtitles[b2];
              if (c2.dockInsidePlotArea || "center" === c2.horizontalAlign && "center" === c2.verticalAlign)
                x.subtitles.ctx = a2, c2.render();
            }
          x.legend && (x.legend.dockInsidePlotArea || "center" === x.legend.horizontalAlign && "center" === x.legend.verticalAlign) && (x.legend.ctx = a2, x.legend.setLayout(), x.legend.render());
          wa.fNg && wa.fNg(x);
        }
        var x = this;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          for (var s = this.data[a.dataSeriesIndexes[0]], w = s.dataPoints, v = this.plotArea, A = 0.025 * v.width, B = 0.01 * v.width, C2 = 0, E3 = v.height - 2 * A, G = Math.min(v.width - 2 * B, 2.8 * v.height), N = false, U = 0; U < w.length; U++)
            if (!N && ("undefined" !== typeof w[U].indexLabel && null !== w[U].indexLabel && 0 < w[U].indexLabel.toString().length) && (N = true), !N && ("undefined" !== typeof w[U].label && null !== w[U].label && 0 < w[U].label.toString().length) && (N = true), !N && "function" === typeof s.indexLabelFormatter || "function" === typeof w[U].indexLabelFormatter)
              N = true;
          N = N || "undefined" !== typeof s.indexLabel && null !== s.indexLabel && 0 < s.indexLabel.toString().length;
          "inside" !== s.indexLabelPlacement && N || (B = (v.width - 0.75 * G) / 2);
          var U = v.x1 + B, L2 = v.x2 - B, M3 = v.y1 + A, Q2 = v.y2 - A, R2 = a.targetCanvasCtx || this.plotArea.ctx || this.ctx;
          if (0 != s.length && (s.dataPoints && s.visible) && 0 !== w.length) {
            var S3, H;
            a = 75 * G / 100;
            var Z2 = 30 * (L2 - a) / 100;
            "funnel" === s.type ? (S3 = r(s.options.neckHeight) ? 0.35 * E3 : s.neckHeight, H = r(s.options.neckWidth) ? 0.25 * a : s.neckWidth, "string" === typeof S3 && S3.match(/%$/) ? (S3 = parseInt(S3), S3 = S3 * E3 / 100) : S3 = parseInt(S3), "string" === typeof H && H.match(/%$/) ? (H = parseInt(H), H = H * a / 100) : H = parseInt(H), S3 > E3 ? S3 = E3 : 0 >= S3 && (S3 = 0), H > a ? H = a - 0.5 : 0 >= H && (H = 0)) : "pyramid" === s.type && (H = S3 = 0, s.reversed = s.reversed ? false : true);
            var B = U + a / 2, V2 = U, X2 = U + a, W3 = s.reversed ? Q2 : M3, O = B - H / 2, Y2 = B + H / 2, Ea = s.reversed ? M3 + S3 : Q2 - S3, ua = s.reversed ? M3 : Q2;
            a = [];
            var B = [], T = [], G = [], $2 = M3, da3, ba3 = (Ea - W3) / (O - V2), ga3 = -ba3, U = "area" === (s.valueRepresents ? s.valueRepresents : "height") ? c() : d();
            if (-1 !== U) {
              if (s.reversed)
                for (G.push($2), H = U.length - 1; 0 < H; H--)
                  $2 += U[H], G.push($2);
              else
                for (H = 0; H < U.length; H++)
                  $2 += U[H], G.push($2);
              if (s.reversed)
                for (H = 0; H < U.length; H++)
                  G[H] < Ea ? (a.push(O), B.push(Y2), da3 = H) : (a.push((G[H] - W3 + ba3 * V2) / ba3), B.push((G[H] - W3 + ga3 * X2) / ga3));
              else
                for (H = 0; H < U.length; H++)
                  G[H] < Ea ? (a.push((G[H] - W3 + ba3 * V2) / ba3), B.push((G[H] - W3 + ga3 * X2) / ga3), da3 = H) : (a.push(O), B.push(Y2));
              for (H = 0; H < U.length - 1; H++)
                $2 = s.reversed ? w[w.length - 1 - H].color ? w[w.length - 1 - H].color : s._colorSet[(w.length - 1 - H) % s._colorSet.length] : w[H].color ? w[H].color : s._colorSet[H % s._colorSet.length], H === da3 ? T.push({ x1: a[H], y1: G[H], x2: B[H], y2: G[H], x3: Y2, y3: Ea, x4: B[H + 1], y4: G[H + 1], x5: a[H + 1], y5: G[H + 1], x6: O, y6: Ea, id: H, height: G[H + 1] - G[H], color: $2 }) : T.push({ x1: a[H], y1: G[H], x2: B[H], y2: G[H], x3: B[H + 1], y3: G[H + 1], x4: a[H + 1], y4: G[H + 1], id: H, height: G[H + 1] - G[H], color: $2 });
              var ea2 = 2, I = [], ia = false, aa3 = [], ja3 = [], U = false;
              a = a = 0;
              Fa(aa3);
              for (H = 0; H < w.length; H++)
                w[H].exploded && (U = true, s.reversed ? aa3.push(w.length - 1 - H) : aa3.push(H));
              R2.clearRect(v.x1, v.y1, v.width, v.height);
              R2.fillStyle = x.backgroundColor;
              R2.fillRect(v.x1, v.y1, v.width, v.height);
              if (N && s.visible && (b(), g(), "inside" !== s.indexLabelPlacement)) {
                e();
                p();
                for (H = 0; H < w.length; H++)
                  I[H].isDirty || (a = I[H].textBlock.x + I[H].width, a = (L2 - a) / 2, 0 == H && (C2 = a), C2 > a && (C2 = a));
                for (H = 0; H < T.length; H++)
                  T[H].x1 += C2, T[H].x2 += C2, T[H].x3 += C2, T[H].x4 += C2, T[H].x5 && (T[H].x5 += C2, T[H].x6 += C2), I[H].textBlock.x += C2;
              }
              for (H = 0; H < T.length; H++)
                C2 = T[H], sa2(R2, C2, s.fillOpacity), ja3.push(C2.y1);
              y(R2);
              N && s.visible && ("inside" === s.indexLabelPlacement || x.animationEnabled || m(R2), x.animationEnabled || z3());
              if (!N)
                for (H = 0; H < w.length; H++)
                  C2 = s.dataPointIds[H], a = { id: C2, objectType: "dataPoint", dataPointIndex: H, dataSeriesIndex: 0, funnelSection: T[s.reversed ? w.length - 1 - H : H] }, x._eventManager.objectMap[C2] = a;
              !x.animationEnabled && U ? l2(x, -1, 0) : x.animationEnabled && !x.animatedRender && l2(x, -1, 0);
              this.funnelPyramidClickHandler = function(a2) {
                var b2 = -1;
                if (!ia && !x.isAnimating && (r(a2.dataSeries.explodeOnClick) || a2.dataSeries.explodeOnClick) && (b2 = s.reversed ? w.length - 1 - a2.dataPointIndex : a2.dataPointIndex, 0 <= b2)) {
                  a2 = b2;
                  if ("funnel" === s.type || "pyramid" === s.type)
                    s.reversed ? w[w.length - 1 - a2].exploded = w[w.length - 1 - a2].exploded ? false : true : w[a2].exploded = w[a2].exploded ? false : true;
                  l2(x, b2, 500);
                }
              };
              return { source: R2, dest: this.plotArea.ctx, animationCallback: function(a2, b2) {
                P.fadeInAnimation(a2, b2);
                1 <= a2 && (l2(x, -1, 500), y(x.plotArea.ctx || x.ctx));
              }, easingFunction: P.easing.easeInQuad, animationBase: 0 };
            }
          }
        }
      };
      l.prototype.requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
          window.setTimeout(a, 1e3 / 60);
        };
      }();
      l.prototype.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
      l.prototype.set = function(a, d, c) {
        c = "undefined" === typeof c ? true : c;
        "options" === a ? (this.options = d, c && this.render()) : l.base.set.call(this, a, d, c);
      };
      l.prototype.exportChart = function(a) {
        a = "undefined" === typeof a ? {} : a;
        var d = a.format ? a.format : "png", c = a.fileName ? a.fileName : this.exportFileName;
        if (a.toDataURL)
          return this.canvas.toDataURL("image/" + d);
        var b = this.canvas;
        if (b && d && c) {
          c = c + "." + d;
          a = "image/" + d;
          var b = b.toDataURL(a), e = false, g = document.createElement("a");
          g.download = c;
          g.href = b;
          if ("undefined" !== typeof Blob && new Blob()) {
            for (var p = b.replace(
              /^data:[a-z\/]*;base64,/,
              ""
            ), p = atob(p), h2 = new ArrayBuffer(p.length), h2 = new Uint8Array(h2), l2 = 0; l2 < p.length; l2++)
              h2[l2] = p.charCodeAt(l2);
            d = new Blob([h2.buffer], { type: "image/" + d });
            try {
              window.navigator.msSaveBlob(d, c), e = true;
            } catch (k) {
              g.dataset.downloadurl = [a, g.download, g.href].join(":"), g.href = window.URL.createObjectURL(d);
            }
          }
          if (!e)
            try {
              event = document.createEvent("MouseEvents"), event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null), g.dispatchEvent ? g.dispatchEvent(event) : g.fireEvent && g.fireEvent("onclick");
            } catch (m) {
              d = window.open(), d.document.write("<img src='" + b + "'></img><div>Please right click on the image and save it to your device</div>"), d.document.close();
            }
        }
      };
      l.prototype.print = function() {
        var a = this.exportChart({ toDataURL: true }), d = document.createElement("iframe");
        d.setAttribute("class", "canvasjs-chart-print-frame");
        X(d, { position: "absolute", width: "100%", border: "0px", margin: "0px 0px 0px 0px", padding: "0px 0px 0px 0px" });
        d.style.height = this.height + "px";
        this._canvasJSContainer.appendChild(d);
        var c = this, b = d.contentWindow || d.contentDocument.document || d.contentDocument;
        b.document.open();
        b.document.write('<!DOCTYPE HTML>\n<html><body><img src="' + a + '"/><body/></html>');
        b.document.body && b.document.body.style && (b.document.body.style.margin = "0px 0px 0px 0px", b.document.body.style.padding = "0px 0px 0px 0px");
        b.document.close();
        setTimeout(function() {
          b.focus();
          b.print();
          setTimeout(function() {
            c._canvasJSContainer.removeChild(d);
          }, 1e3);
        }, 500);
      };
      l.prototype.getPercentAndTotal = function(a, d) {
        var c = null, b = null, e = c = null;
        if (0 <= a.type.indexOf("stacked"))
          b = 0, c = d.x.getTime ? d.x.getTime() : d.x, c in a.plotUnit.yTotals && (b = a.plotUnit.yTotals[c], c = a.plotUnit.yAbsTotals[c], e = isNaN(d.y) ? 0 : 0 === c ? 0 : 100 * (d.y / c));
        else if ("pie" === a.type || "doughnut" === a.type || "funnel" === a.type || "pyramid" === a.type) {
          for (c = b = 0; c < a.dataPoints.length; c++)
            isNaN(a.dataPoints[c].y) || (b += a.dataPoints[c].y);
          e = isNaN(d.y) ? 0 : 100 * (d.y / b);
        }
        return { percent: e, total: b };
      };
      l.prototype.replaceKeywordsWithValue = function(a, d, c, b, e) {
        var g = this;
        e = "undefined" === typeof e ? 0 : e;
        if ((0 <= c.type.indexOf("stacked") || "pie" === c.type || "doughnut" === c.type || "funnel" === c.type || "pyramid" === c.type) && (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))) {
          var p = "#percent", h2 = "#total", l2 = this.getPercentAndTotal(c, d), h2 = isNaN(l2.total) ? h2 : l2.total, p = isNaN(l2.percent) ? p : l2.percent;
          do {
            l2 = "";
            if (c.percentFormatString)
              l2 = c.percentFormatString;
            else {
              var l2 = "#,##0.", k = Math.max(Math.ceil(Math.log(1 / Math.abs(p)) / Math.LN10), 2);
              if (isNaN(k) || !isFinite(k))
                k = 2;
              for (var m = 0; m < k; m++)
                l2 += "#";
              c.percentFormatString = l2;
            }
            a = a.replace("#percent", ea(p, l2, g._cultureInfo));
            a = a.replace(
              "#total",
              ea(h2, c.yValueFormatString ? c.yValueFormatString : "#,##0.########", g._cultureInfo)
            );
          } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"));
        }
        return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, function(a2) {
          if ('"' === a2[0] && '"' === a2[a2.length - 1] || "'" === a2[0] && "'" === a2[a2.length - 1])
            return a2.slice(1, a2.length - 1);
          a2 = Ia(a2.slice(1, a2.length - 1));
          a2 = a2.replace("#index", e);
          var k2 = null;
          try {
            var f = a2.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
            f && 0 < f.length && (k2 = Ia(f[2]), a2 = Ia(f[1]));
          } catch (p2) {
          }
          f = null;
          if ("color" === a2)
            return "waterfall" === c.type ? d.color ? d.color : 0 < d.y ? c.risingColor : c.fallingColor : "error" === c.type ? c.color ? c.color : c._colorSet[k2 % c._colorSet.length] : d.color ? d.color : c.color ? c.color : c._colorSet[b % c._colorSet.length];
          if (d.hasOwnProperty(a2))
            f = d;
          else if (c.hasOwnProperty(a2))
            f = c;
          else
            return "";
          f = f[a2];
          null !== k2 && (f = f[k2]);
          return "x" === a2 ? (c.axisX && "dateTime" === c.axisX.valueType || "dateTime" === c.xValueType || d.x && d.x.getTime) && !c.axisX.logarithmic ? Da(f, d.xValueFormatString ? d.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : c.xValueFormatString = g.axisX && g.axisX.autoValueFormatString ? g.axisX.autoValueFormatString : "DD MMM YY", g._cultureInfo) : ea(f, d.xValueFormatString ? d.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : c.xValueFormatString = "#,##0.########", g._cultureInfo) : "y" === a2 ? ea(f, d.yValueFormatString ? d.yValueFormatString : c.yValueFormatString ? c.yValueFormatString : c.yValueFormatString = "#,##0.########", g._cultureInfo) : "z" === a2 ? ea(f, d.zValueFormatString ? d.zValueFormatString : c.zValueFormatString ? c.zValueFormatString : c.zValueFormatString = "#,##0.########", g._cultureInfo) : f;
        });
      };
      pa(M2, L);
      M2.prototype.setLayout = function() {
        var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart, d = a.layoutManager.getFreeSpace(), c = null, b = 0, e = 0, g = 0, p = 0, h2 = this.markerMargin = this.chart.options.legend && !r(this.chart.options.legend.markerMargin) ? this.chart.options.legend.markerMargin : 0.3 * this.fontSize;
        this.height = 0;
        var l2 = [], k = [];
        if ("top" === this.verticalAlign || "bottom" === this.verticalAlign)
          this.orientation = "horizontal", c = this.verticalAlign, g = this.maxWidth = null !== this.maxWidth ? this.maxWidth : d.width, p = this.maxHeight = null !== this.maxHeight ? this.maxHeight : 0.5 * d.height;
        else if ("center" === this.verticalAlign) {
          this.orientation = "vertical";
          if ("left" === this.horizontalAlign || "center" === this.horizontalAlign || "right" === this.horizontalAlign)
            c = this.horizontalAlign;
          g = this.maxWidth = null !== this.maxWidth ? this.maxWidth : 0.5 * d.width;
          p = this.maxHeight = null !== this.maxHeight ? this.maxHeight : d.height;
        }
        this.errorMarkerColor = [];
        for (var m = 0; m < this.dataSeries.length; m++) {
          var n = this.dataSeries[m];
          if (n.dataPoints && n.dataPoints.length)
            if ("pie" !== n.type && "doughnut" !== n.type && "funnel" !== n.type && "pyramid" !== n.type) {
              var q = n.legendMarkerType = n.legendMarkerType ? n.legendMarkerType : "line" !== n.type && "stepLine" !== n.type && "spline" !== n.type && "scatter" !== n.type && "bubble" !== n.type || !n.markerType ? "error" === n.type && n._linkedSeries ? n._linkedSeries.legendMarkerType ? n._linkedSeries.legendMarkerType : S2.getDefaultLegendMarker(n._linkedSeries.type) : S2.getDefaultLegendMarker(n.type) : n.markerType, f = n.legendText ? n.legendText : this.itemTextFormatter ? this.itemTextFormatter({ chart: this.chart, legend: this.options, dataSeries: n, dataPoint: null }) : n.name, u2 = n.legendMarkerColor = n.legendMarkerColor ? n.legendMarkerColor : n.markerColor ? n.markerColor : "error" === n.type ? r(n.whiskerColor) ? n._colorSet[0] : n.whiskerColor : n._colorSet[0], y = n.markerSize || "line" !== n.type && "stepLine" !== n.type && "spline" !== n.type ? 0.75 * this.lineHeight : 0, x = n.legendMarkerBorderColor ? n.legendMarkerBorderColor : n.markerBorderColor, s = n.legendMarkerBorderThickness ? n.legendMarkerBorderThickness : n.markerBorderThickness ? Math.max(1, Math.round(0.2 * y)) : 0;
              "error" === n.type && this.errorMarkerColor.push(u2);
              f = this.chart.replaceKeywordsWithValue(f, n.dataPoints[0], n, m);
              q = { markerType: q, markerColor: u2, text: f, textBlock: null, chartType: n.type, markerSize: y, lineColor: n._colorSet[0], dataSeriesIndex: n.index, dataPointIndex: null, markerBorderColor: x, markerBorderThickness: s };
              l2.push(q);
            } else
              for (var w = 0; w < n.dataPoints.length; w++) {
                var v = n.dataPoints[w], q = v.legendMarkerType ? v.legendMarkerType : n.legendMarkerType ? n.legendMarkerType : S2.getDefaultLegendMarker(n.type), f = v.legendText ? v.legendText : n.legendText ? n.legendText : this.itemTextFormatter ? this.itemTextFormatter({ chart: this.chart, legend: this.options, dataSeries: n, dataPoint: v }) : v.name ? v.name : "DataPoint: " + (w + 1), u2 = v.legendMarkerColor ? v.legendMarkerColor : n.legendMarkerColor ? n.legendMarkerColor : v.color ? v.color : n.color ? n.color : n._colorSet[w % n._colorSet.length], y = 0.75 * this.lineHeight, x = v.legendMarkerBorderColor ? v.legendMarkerBorderColor : n.legendMarkerBorderColor ? n.legendMarkerBorderColor : v.markerBorderColor ? v.markerBorderColor : n.markerBorderColor, s = v.legendMarkerBorderThickness ? v.legendMarkerBorderThickness : n.legendMarkerBorderThickness ? n.legendMarkerBorderThickness : v.markerBorderThickness || n.markerBorderThickness ? Math.max(1, Math.round(0.2 * y)) : 0, f = this.chart.replaceKeywordsWithValue(f, v, n, w), q = { markerType: q, markerColor: u2, text: f, textBlock: null, chartType: n.type, markerSize: y, dataSeriesIndex: m, dataPointIndex: w, markerBorderColor: x, markerBorderThickness: s };
                (v.showInLegend || n.showInLegend && false !== v.showInLegend) && l2.push(q);
              }
        }
        true === this.reversed && l2.reverse();
        if (0 < l2.length) {
          n = null;
          f = v = w = 0;
          v = null !== this.itemWidth ? null !== this.itemMaxWidth ? Math.min(this.itemWidth, this.itemMaxWidth, g) : this.itemMaxWidth = Math.min(this.itemWidth, g) : null !== this.itemMaxWidth ? Math.min(this.itemMaxWidth, g) : this.itemMaxWidth = g;
          y = 0 === y ? 0.75 * this.lineHeight : y;
          v = (this.itemMaxWidth ? this.itemMaxWidth : v) - (y + h2);
          for (m = 0; m < l2.length; m++) {
            q = l2[m];
            u2 = v;
            if ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType)
              u2 -= 2 * 0.1 * this.lineHeight;
            if (!(0 >= p || "undefined" === typeof p || 0 >= u2 || "undefined" === typeof u2))
              if ("horizontal" === this.orientation) {
                q.textBlock = new ka(this.ctx, { x: 0, y: 0, maxWidth: u2, maxHeight: this.itemWrap ? p : this.lineHeight, angle: 0, text: q.text, horizontalAlign: "left", fontSize: this.fontSize, fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontColor: this.fontColor, fontStyle: this.fontStyle, textBaseline: "middle" });
                q.textBlock.measureText();
                null !== this.itemWidth && (q.textBlock.width = this.itemWidth - (y + h2 + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)));
                if (!n || n.width + Math.round(q.textBlock.width + y + h2 + (0 === n.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)) > g)
                  n = { items: [], width: 0 }, k.push(n), this.height += f, f = 0;
                f = Math.max(f, q.textBlock.height ? q.textBlock.height : this.lineHeight);
                q.textBlock.x = n.width;
                q.textBlock.y = 0;
                n.width += Math.round(q.textBlock.width + y + h2 + (0 === n.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0));
                n.items.push(q);
                this.width = Math.max(n.width, this.width);
              } else
                q.textBlock = new ka(this.ctx, { x: 0, y: 0, maxWidth: v, maxHeight: true === this.itemWrap ? p : 1.5 * this.fontSize, angle: 0, text: q.text, horizontalAlign: "left", fontSize: this.fontSize, fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontColor: this.fontColor, fontStyle: this.fontStyle, textBaseline: "middle" }), q.textBlock.measureText(), null !== this.itemWidth && (q.textBlock.width = this.itemWidth - (y + h2 + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0))), this.height < p - this.lineHeight ? (n = { items: [], width: 0 }, k.push(n)) : (n = k[w], w = (w + 1) % k.length), n && (this.height += q.textBlock.height ? q.textBlock.height : this.lineHeight, q.textBlock.x = n.width, q.textBlock.y = 0, n.width += Math.round(q.textBlock.width + y + h2 + (0 === n.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)), n.items.push(q), this.width = Math.max(n.width, this.width));
          }
          this.height = false === this.itemWrap ? k.length * this.lineHeight : this.height + f;
          this.height = Math.min(p, this.height);
          this.width = Math.min(g, this.width);
        }
        "top" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2, b = d.y1) : "center" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2, b = d.y1 + d.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (e = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2, b = d.y2 - this.height);
        this.items = l2;
        for (m = 0; m < this.items.length; m++)
          q = l2[m], q.id = ++this.chart._eventManager.lastObjectId, this.chart._eventManager.objectMap[q.id] = { id: q.id, objectType: "legendItem", legendItemIndex: m, dataSeriesIndex: q.dataSeriesIndex, dataPointIndex: q.dataPointIndex };
        this.markerSize = y;
        this.rows = k;
        0 < l2.length && a.layoutManager.registerSpace(c, { width: this.width + 2 + 2, height: this.height + 5 + 5 });
        this.bounds = { x1: e, y1: b, x2: e + this.width, y2: b + this.height };
      };
      M2.prototype.render = function() {
        var a = this.bounds.x1, d = this.bounds.y1, c = this.markerMargin, b = this.maxWidth, e = this.maxHeight, g = this.markerSize, p = this.rows;
        (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(a, d, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
        for (var h2 = 0, l2 = 0; l2 < p.length; l2++) {
          for (var k = p[l2], m = 0, n = 0; n < k.items.length; n++) {
            var q = k.items[n], f = q.textBlock.x + a + (0 === n ? 0.2 * g : this.horizontalSpacing), r2 = d + h2, u2 = f;
            this.chart.data[q.dataSeriesIndex].visible || (this.ctx.globalAlpha = 0.5);
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.rect(a, d, b, Math.max(e - e % this.lineHeight, 0));
            this.ctx.clip();
            if ("line" === q.chartType || "stepLine" === q.chartType || "spline" === q.chartType)
              this.ctx.strokeStyle = q.lineColor, this.ctx.lineWidth = Math.ceil(this.lineHeight / 8), this.ctx.beginPath(), this.ctx.moveTo(f - 0.1 * this.lineHeight, r2 + this.lineHeight / 2), this.ctx.lineTo(f + 0.85 * this.lineHeight, r2 + this.lineHeight / 2), this.ctx.stroke(), u2 -= 0.1 * this.lineHeight;
            if ("error" === q.chartType) {
              this.ctx.strokeStyle = this.errorMarkerColor[0];
              this.ctx.lineWidth = g / 8;
              this.ctx.beginPath();
              var x = f - 0.08 * this.lineHeight + 0.1 * this.lineHeight, s = r2 + 0.15 * this.lineHeight, w = 0.7 * this.lineHeight, v = w + 0.02 * this.lineHeight;
              this.ctx.moveTo(x, s);
              this.ctx.lineTo(x + w, s);
              this.ctx.stroke();
              this.ctx.beginPath();
              this.ctx.moveTo(x + w / 2, s);
              this.ctx.lineTo(x + w / 2, s + v);
              this.ctx.stroke();
              this.ctx.beginPath();
              this.ctx.moveTo(
                x,
                s + v
              );
              this.ctx.lineTo(x + w, s + v);
              this.ctx.stroke();
              this.errorMarkerColor.shift();
            }
            Y.drawMarker(f + g / 2, r2 + this.lineHeight / 2, this.ctx, q.markerType, "error" === q.chartType || "line" === q.chartType || "spline" === q.chartType ? q.markerSize / 2 : q.markerSize, q.markerColor, q.markerBorderColor, q.markerBorderThickness);
            q.textBlock.x = f + c + g;
            if ("line" === q.chartType || "stepLine" === q.chartType || "spline" === q.chartType)
              q.textBlock.x += 0.1 * this.lineHeight;
            q.textBlock.y = Math.round(r2 + this.lineHeight / 2);
            q.textBlock.render(true);
            this.ctx.restore();
            m = 0 < n ? Math.max(m, q.textBlock.height ? q.textBlock.height : this.lineHeight) : q.textBlock.height ? q.textBlock.height : this.lineHeight;
            this.chart.data[q.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1);
            f = Z(q.id);
            this.ghostCtx.fillStyle = f;
            this.ghostCtx.beginPath();
            this.ghostCtx.fillRect(u2, q.textBlock.y - this.lineHeight / 2, q.textBlock.x + q.textBlock.width - u2, q.textBlock.height ? q.textBlock.height : this.lineHeight);
            q.x1 = this.chart._eventManager.objectMap[q.id].x1 = u2;
            q.y1 = this.chart._eventManager.objectMap[q.id].y1 = q.textBlock.y - this.lineHeight / 2;
            q.x2 = this.chart._eventManager.objectMap[q.id].x2 = q.textBlock.x + q.textBlock.width;
            q.y2 = this.chart._eventManager.objectMap[q.id].y2 = q.textBlock.y + (q.textBlock.height ? q.textBlock.height : this.lineHeight) - this.lineHeight / 2;
          }
          h2 += m;
        }
      };
      pa(S2, L);
      S2.prototype.getDefaultAxisPlacement = function() {
        var a = this.type;
        if ("column" === a || "line" === a || "stepLine" === a || "spline" === a || "area" === a || "stepArea" === a || "splineArea" === a || "stackedColumn" === a || "stackedLine" === a || "bubble" === a || "scatter" === a || "stackedArea" === a || "stackedColumn100" === a || "stackedLine100" === a || "stackedArea100" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a)
          return "normal";
        if ("bar" === a || "stackedBar" === a || "stackedBar100" === a || "rangeBar" === a)
          return "xySwapped";
        if ("pie" === a || "doughnut" === a || "funnel" === a || "pyramid" === a)
          return "none";
        "error" !== a && window.console.log("Unknown Chart Type: " + a);
        return null;
      };
      S2.getDefaultLegendMarker = function(a) {
        if ("column" === a || "stackedColumn" === a || "stackedLine" === a || "bar" === a || "stackedBar" === a || "stackedBar100" === a || "bubble" === a || "scatter" === a || "stackedColumn100" === a || "stackedLine100" === a || "stepArea" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeBar" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a)
          return "square";
        if ("line" === a || "stepLine" === a || "spline" === a || "pie" === a || "doughnut" === a)
          return "circle";
        if ("area" === a || "splineArea" === a || "stackedArea" === a || "stackedArea100" === a || "funnel" === a || "pyramid" === a)
          return "triangle";
        if ("error" === a)
          return "none";
        window.console.log("Unknown Chart Type: " + a);
        return null;
      };
      S2.prototype.getDataPointAtX = function(a, d) {
        if (!this.dataPoints || 0 === this.dataPoints.length)
          return null;
        var c = { dataPoint: null, distance: Infinity, index: NaN }, b = null, e = 0, g = 0, p = 1, h2 = Infinity, l2 = 0, k = 0, m = 0;
        "none" !== this.chart.plotInfo.axisPlacement && (this.axisX.logarithmic ? (m = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), m = 1 < m ? Math.min(Math.max((this.dataPoints.length - 1) / m * Math.log(a / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0) : (m = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, m = 0 < m ? Math.min(Math.max((this.dataPoints.length - 1) / m * (a - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0));
        for (; ; ) {
          g = 0 < p ? m + e : m - e;
          if (0 <= g && g < this.dataPoints.length) {
            var b = this.dataPoints[g], n = this.axisX.logarithmic ? b.x > a ? b.x / a : a / b.x : Math.abs(b.x - a);
            n < c.distance && (c.dataPoint = b, c.distance = n, c.index = g);
            b = n;
            b <= h2 ? h2 = b : 0 < p ? l2++ : k++;
            if (1e3 < l2 && 1e3 < k)
              break;
          } else if (0 > m - e && m + e >= this.dataPoints.length)
            break;
          -1 === p ? (e++, p = 1) : p = -1;
        }
        return d || (c.dataPoint.x.getTime ? c.dataPoint.x.getTime() : c.dataPoint.x) !== (a.getTime ? a.getTime() : a) ? d && null !== c.dataPoint ? c : null : c;
      };
      S2.prototype.getDataPointAtXY = function(a, d, c) {
        if (!this.dataPoints || 0 === this.dataPoints.length || a < this.chart.plotArea.x1 || a > this.chart.plotArea.x2 || d < this.chart.plotArea.y1 || d > this.chart.plotArea.y2)
          return null;
        c = c || false;
        var b = [], e = 0, g = 0, p = 1, h2 = false, l2 = Infinity, k = 0, m = 0, n = 0;
        if ("none" !== this.chart.plotInfo.axisPlacement)
          if (n = (this.chart.axisX[0] ? this.chart.axisX[0] : this.chart.axisX2[0]).getXValueAt({ x: a, y: d }), this.axisX.logarithmic)
            var q = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), n = 1 < q ? Math.min(Math.max((this.dataPoints.length - 1) / q * Math.log(n / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
          else
            q = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, n = 0 < q ? Math.min(Math.max((this.dataPoints.length - 1) / q * (n - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
        for (; ; ) {
          g = 0 < p ? n + e : n - e;
          if (0 <= g && g < this.dataPoints.length) {
            var q = this.chart._eventManager.objectMap[this.dataPointIds[g]], f = this.dataPoints[g], u2 = null;
            if (q) {
              switch (this.type) {
                case "column":
                case "stackedColumn":
                case "stackedColumn100":
                case "bar":
                case "stackedBar":
                case "stackedBar100":
                case "rangeColumn":
                case "rangeBar":
                case "waterfall":
                case "error":
                  a >= q.x1 && (a <= q.x2 && d >= q.y1 && d <= q.y2) && (b.push({ dataPoint: f, dataPointIndex: g, dataSeries: this, distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y1 - d), Math.abs(q.y2 - d)) }), h2 = true);
                  break;
                case "line":
                case "stepLine":
                case "spline":
                case "area":
                case "stepArea":
                case "stackedArea":
                case "stackedArea100":
                case "splineArea":
                case "scatter":
                  var y = na("markerSize", f, this) || 4, x = c ? 20 : y, u2 = Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - d, 2));
                  u2 <= x && b.push({ dataPoint: f, dataPointIndex: g, dataSeries: this, distance: u2 });
                  q = Math.abs(q.x1 - a);
                  q <= l2 ? l2 = q : 0 < p ? k++ : m++;
                  u2 <= y / 2 && (h2 = true);
                  break;
                case "rangeArea":
                case "rangeSplineArea":
                  y = na("markerSize", f, this) || 4;
                  x = c ? 20 : y;
                  u2 = Math.min(Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - d, 2)), Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y2 - d, 2)));
                  u2 <= x && b.push({ dataPoint: f, dataPointIndex: g, dataSeries: this, distance: u2 });
                  q = Math.abs(q.x1 - a);
                  q <= l2 ? l2 = q : 0 < p ? k++ : m++;
                  u2 <= y / 2 && (h2 = true);
                  break;
                case "bubble":
                  y = q.size;
                  u2 = Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - d, 2));
                  u2 <= y / 2 && (b.push({ dataPoint: f, dataPointIndex: g, dataSeries: this, distance: u2 }), h2 = true);
                  break;
                case "pie":
                case "doughnut":
                  y = q.center;
                  x = "doughnut" === this.type ? q.percentInnerRadius * q.radius : 0;
                  u2 = Math.sqrt(Math.pow(y.x - a, 2) + Math.pow(y.y - d, 2));
                  u2 < q.radius && u2 > x && (u2 = Math.atan2(d - y.y, a - y.x), 0 > u2 && (u2 += 2 * Math.PI), u2 = Number(((180 * (u2 / Math.PI) % 360 + 360) % 360).toFixed(12)), y = Number(((180 * (q.startAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), x = Number(((180 * (q.endAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), 0 === x && 1 < q.endAngle && (x = 360), y >= x && (0 !== f.y && !r(f.y)) && (x += 360, u2 < y && (u2 += 360)), u2 > y && u2 < x && (b.push({ dataPoint: f, dataPointIndex: g, dataSeries: this, distance: 0 }), h2 = true));
                  break;
                case "funnel":
                case "pyramid":
                  u2 = q.funnelSection;
                  d > u2.y1 && d < u2.y4 && (u2.y6 ? d > u2.y6 ? (g = u2.x6 + (u2.x5 - u2.x6) / (u2.y5 - u2.y6) * (d - u2.y6), u2 = u2.x3 + (u2.x4 - u2.x3) / (u2.y4 - u2.y3) * (d - u2.y3)) : (g = u2.x1 + (u2.x6 - u2.x1) / (u2.y6 - u2.y1) * (d - u2.y1), u2 = u2.x2 + (u2.x3 - u2.x2) / (u2.y3 - u2.y2) * (d - u2.y2)) : (g = u2.x1 + (u2.x4 - u2.x1) / (u2.y4 - u2.y1) * (d - u2.y1), u2 = u2.x2 + (u2.x3 - u2.x2) / (u2.y3 - u2.y2) * (d - u2.y2)), a > g && a < u2 && (b.push({ dataPoint: f, dataPointIndex: q.dataPointIndex, dataSeries: this, distance: 0 }), h2 = true));
                  break;
                case "boxAndWhisker":
                  if (a >= q.x1 - q.borderThickness / 2 && a <= q.x2 + q.borderThickness / 2 && d >= q.y4 - q.borderThickness / 2 && d <= q.y1 + q.borderThickness / 2 || Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && d >= q.y1 && d <= q.y4)
                    b.push({ dataPoint: f, dataPointIndex: g, dataSeries: this, distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - d), Math.abs(q.y3 - d)) }), h2 = true;
                  break;
                case "candlestick":
                  if (a >= q.x1 - q.borderThickness / 2 && a <= q.x2 + q.borderThickness / 2 && d >= q.y2 - q.borderThickness / 2 && d <= q.y3 + q.borderThickness / 2 || Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && d >= q.y1 && d <= q.y4)
                    b.push({ dataPoint: f, dataPointIndex: g, dataSeries: this, distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - d), Math.abs(q.y3 - d)) }), h2 = true;
                  break;
                case "ohlc":
                  if (Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && d >= q.y2 && d <= q.y3 || a >= q.x1 && a <= (q.x2 + q.x1) / 2 && d >= q.y1 - q.borderThickness / 2 && d <= q.y1 + q.borderThickness / 2 || a >= (q.x1 + q.x2) / 2 && a <= q.x2 && d >= q.y4 - q.borderThickness / 2 && d <= q.y4 + q.borderThickness / 2)
                    b.push({ dataPoint: f, dataPointIndex: g, dataSeries: this, distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - d), Math.abs(q.y3 - d)) }), h2 = true;
              }
              if (h2 || 1e3 < k && 1e3 < m)
                break;
            }
          } else if (0 > n - e && n + e >= this.dataPoints.length)
            break;
          -1 === p ? (e++, p = 1) : p = -1;
        }
        a = null;
        for (d = 0; d < b.length; d++)
          a ? b[d].distance <= a.distance && (a = b[d]) : a = b[d];
        return a;
      };
      S2.prototype.getMarkerProperties = function(a, d, c, b) {
        var e = this.dataPoints, g = e[a].markerColor ? e[a].markerColor : this.markerColor ? this.markerColor : e[a].color ? e[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length], p = e[a].markerBorderColor ? e[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null, h2 = r(e[a].markerBorderThickness) ? this.markerBorderThickness ? this.markerBorderThickness : null : e[a].markerBorderThickness, l2 = e[a].markerType ? e[a].markerType : this.markerType;
        a = r(e[a].markerSize) ? this.markerSize : e[a].markerSize;
        return { x: d, y: c, ctx: b, type: l2, size: a, color: g, borderColor: p, borderThickness: h2 };
      };
      pa(C, L);
      C.prototype.createExtraLabelsForLog = function(a) {
        a = (a || 0) + 1;
        if (!(5 < a)) {
          var d = this.logLabelValues[0] || this.intervalStartPosition;
          if (Math.log(this.range) / Math.log(d / this.viewportMinimum) < this.noTicks - 1) {
            for (var c = C.getNiceNumber((d - this.viewportMinimum) / Math.min(Math.max(2, this.noTicks - this.logLabelValues.length), 3), true), b = Math.ceil(this.viewportMinimum / c) * c; b < d; b += c)
              b < this.viewportMinimum || this.logLabelValues.push(b);
            this.logLabelValues.sort(Sa);
            this.createExtraLabelsForLog(a);
          }
        }
      };
      C.prototype.createLabels = function() {
        var a, d, c = 0, b = 0, e, g = 0, p = 0, b = 0, b = this.interval, h2 = 0, l2, k = 0.6 * this.chart.height, m;
        a = false;
        var n = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], q = n.length ? r(this.scaleBreaks.firstBreakIndex) ? 0 : this.scaleBreaks.firstBreakIndex : 0;
        if ("axisX" !== this.type || "dateTime" !== this.valueType || this.logarithmic) {
          e = this.viewportMaximum;
          if (this.labels) {
            a = Math.ceil(b);
            for (var b = Math.ceil(this.intervalStartPosition), f = false, c = b; c < this.viewportMaximum; c += a)
              if (this.labels[c])
                f = true;
              else {
                f = false;
                break;
              }
            f && (this.interval = a, this.intervalStartPosition = b);
          }
          if (this.logarithmic && !this.equidistantInterval)
            for (this.logLabelValues || (this.logLabelValues = [], this.createExtraLabelsForLog()), b = 0, f = q; b < this.logLabelValues.length; b++)
              if (c = this.logLabelValues[b], c < this.viewportMinimum)
                b++;
              else {
                for (; f < n.length && c > n[f].endValue; f++)
                  ;
                a = f < n.length && c >= n[f].startValue && c <= n[f].endValue;
                m = c;
                a || (a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.options, value: m, label: this.labels[m] ? this.labels[m] : null }) : "axisX" === this.type && this.labels[m] ? this.labels[m] : ea(m, this.valueFormatString, this.chart._cultureInfo), a = new ka(this.ctx, {
                  x: 0,
                  y: 0,
                  maxWidth: g,
                  maxHeight: p,
                  angle: this.labelAngle,
                  text: this.prefix + a + this.suffix,
                  backgroundColor: this.labelBackgroundColor,
                  borderColor: this.labelBorderColor,
                  cornerRadius: this.labelCornerRadius,
                  textAlign: this.labelTextAlign,
                  fontSize: this.labelFontSize,
                  fontFamily: this.labelFontFamily,
                  fontWeight: this.labelFontWeight,
                  fontColor: this.labelFontColor,
                  fontStyle: this.labelFontStyle,
                  textBaseline: "middle",
                  borderThickness: 0
                }), this._labels.push({ position: m, textBlock: a, effectiveHeight: null }));
              }
          f = q;
          for (c = this.intervalStartPosition; c <= e; c = parseFloat(1e-12 > this.interval ? this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase, this.interval) : c + this.interval : (this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase, this.interval) : c + this.interval).toFixed(12))) {
            for (; f < n.length && c > n[f].endValue; f++)
              ;
            a = f < n.length && c >= n[f].startValue && c <= n[f].endValue;
            m = c;
            a || (a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.options, value: m, label: this.labels[m] ? this.labels[m] : null }) : "axisX" === this.type && this.labels[m] ? this.labels[m] : ea(m, this.valueFormatString, this.chart._cultureInfo), a = new ka(this.ctx, {
              x: 0,
              y: 0,
              maxWidth: g,
              maxHeight: p,
              angle: this.labelAngle,
              text: this.prefix + a + this.suffix,
              textAlign: this.labelTextAlign,
              backgroundColor: this.labelBackgroundColor,
              borderColor: this.labelBorderColor,
              borderThickness: this.labelBorderThickness,
              cornerRadius: this.labelCornerRadius,
              fontSize: this.labelFontSize,
              fontFamily: this.labelFontFamily,
              fontWeight: this.labelFontWeight,
              fontColor: this.labelFontColor,
              fontStyle: this.labelFontStyle,
              textBaseline: "middle"
            }), this._labels.push({ position: m, textBlock: a, effectiveHeight: null }));
          }
        } else
          for (this.intervalStartPosition = this.getLabelStartPoint(
            new Date(this.viewportMinimum),
            this.intervalType,
            this.interval
          ), e = Ya(new Date(this.viewportMaximum), this.interval, this.intervalType), f = q, c = this.intervalStartPosition; c < e; Ya(c, b, this.intervalType)) {
            for (a = c.getTime(); f < n.length && a > n[f].endValue; f++)
              ;
            m = a;
            a = f < n.length && a >= n[f].startValue && a <= n[f].endValue;
            a || (a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.options, value: new Date(m), label: this.labels[m] ? this.labels[m] : null }) : "axisX" === this.type && this.labels[m] ? this.labels[m] : Da(m, this.valueFormatString, this.chart._cultureInfo), a = new ka(this.ctx, { x: 0, y: 0, maxWidth: g, backgroundColor: this.labelBackgroundColor, borderColor: this.labelBorderColor, borderThickness: this.labelBorderThickness, cornerRadius: this.labelCornerRadius, maxHeight: p, angle: this.labelAngle, text: this.prefix + a + this.suffix, textAlign: this.labelTextAlign, fontSize: this.labelFontSize, fontFamily: this.labelFontFamily, fontWeight: this.labelFontWeight, fontColor: this.labelFontColor, fontStyle: this.labelFontStyle, textBaseline: "middle" }), this._labels.push({
              position: m,
              textBlock: a,
              effectiveHeight: null,
              breaksLabelType: void 0
            }));
          }
        if ("bottom" === this._position || "top" === this._position)
          h2 = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.width * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.width / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * V[this.intervalType + "Duration"] * this.interval, g = "undefined" === typeof this.options.labelMaxWidth ? 0.5 * this.chart.width >> 0 : this.options.labelMaxWidth, this.chart.panEnabled || (p = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize);
        else if ("left" === this._position || "right" === this._position)
          h2 = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.height * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.height / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * V[this.intervalType + "Duration"] * this.interval, this.chart.panEnabled || (g = "undefined" === typeof this.options.labelMaxWidth ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth), p = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
        for (b = 0; b < this._labels.length; b++) {
          a = this._labels[b].textBlock;
          a.maxWidth = g;
          a.maxHeight = p;
          var z3 = a.measureText();
          l2 = z3.height;
        }
        e = [];
        q = n = 0;
        if (this.labelAutoFit || this.options.labelAutoFit) {
          if (r(this.labelAngle) || (this.labelAngle = (this.labelAngle % 360 + 360) % 360, 90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360)), "bottom" === this._position || "top" === this._position)
            if (g = 0.9 * h2 >> 0, q = 0, !this.chart.panEnabled && 1 <= this._labels.length) {
              this.sessionVariables.labelFontSize = this.labelFontSize;
              this.sessionVariables.labelMaxWidth = g;
              this.sessionVariables.labelMaxHeight = p;
              this.sessionVariables.labelAngle = this.labelAngle;
              this.sessionVariables.labelWrap = this.labelWrap;
              for (c = 0; c < this._labels.length; c++)
                if (!this._labels[c].breaksLabelType) {
                  a = this._labels[c].textBlock;
                  for (var y, f = a.text.split(" "), b = 0; b < f.length; b++)
                    m = f[b], this.ctx.font = a.fontStyle + " " + a.fontWeight + " " + a.fontSize + "px " + a.fontFamily, m = this.ctx.measureText(m), m.width > q && (y = c, q = m.width);
                }
              c = 0;
              for (c = this.intervalStartPosition < this.viewportMinimum ? 1 : 0; c < this._labels.length; c++)
                if (!this._labels[c].breaksLabelType) {
                  a = this._labels[c].textBlock;
                  z3 = a.measureText();
                  for (f = c + 1; f < this._labels.length; f++)
                    if (!this._labels[f].breaksLabelType) {
                      d = this._labels[f].textBlock;
                      d = d.measureText();
                      break;
                    }
                  e.push(a.height);
                  this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e);
                  Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                  Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                  b = g * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (p - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                  if (r(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle)
                    if (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? p : Math.min((b - g * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), b), m = (k - (l2 + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(-25))) / Math.sin(Math.PI / 180 * Math.abs(-25)), !r(this.options.labelWrap))
                      this.labelWrap ? r(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = Math.min(Math.max(g, q), m), this.sessionVariables.labelWrap = this.labelWrap, d && z3.width + d.width >> 0 > 2 * g && (this.sessionVariables.labelAngle = -25)) : (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > g ? -25 : this.sessionVariables.labelAngle) : r(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = p, this.sessionVariables.labelMaxWidth = g, d && z3.width + d.width >> 0 > 2 * g && (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = m)) : (this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > g ? -25 : this.sessionVariables.labelAngle, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = p, this.sessionVariables.labelWrap = this.labelWrap);
                    else {
                      if (r(this.options.labelWrap)) {
                        if (!r(this.options.labelMaxWidth))
                          this.options.labelMaxWidth < g ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = b) : (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = p);
                        else if (!r(d)) {
                          if (b = z3.width + d.width >> 0, f = this.labelFontSize, q < g)
                            b - 2 * g > n && (n = b - 2 * g, b >= 2 * g && b < 2.2 * g ? (this.sessionVariables.labelMaxWidth = g, r(this.options.labelFontSize) && 12 < f && (f = Math.floor(12 / 13 * f), a.measureText()), this.sessionVariables.labelFontSize = r(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : b >= 2.2 * g && b < 2.8 * g ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = m, this.sessionVariables.labelFontSize = f) : b >= 2.8 * g && b < 3.2 * g ? (this.sessionVariables.labelMaxWidth = Math.max(g, q), this.sessionVariables.labelWrap = true, r(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = r(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : b >= 3.2 * g && b < 3.6 * g ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelWrap = true, this.sessionVariables.labelMaxWidth = m, this.sessionVariables.labelFontSize = this.labelFontSize) : b > 3.6 * g && b < 5 * g ? (r(this.options.labelFontSize) && 12 < f && (f = Math.floor(12 / 13 * f), a.measureText()), this.sessionVariables.labelFontSize = r(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelWrap = true, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = m) : b > 5 * g && (this.sessionVariables.labelWrap = true, this.sessionVariables.labelMaxWidth = g, this.sessionVariables.labelFontSize = f, this.sessionVariables.labelMaxHeight = p, this.sessionVariables.labelAngle = this.labelAngle));
                          else if (y === c && (0 === y && q + this._labels[y + 1].textBlock.measureText().width - 2 * g > n || y === this._labels.length - 1 && q + this._labels[y - 1].textBlock.measureText().width - 2 * g > n || 0 < y && y < this._labels.length - 1 && q + this._labels[y + 1].textBlock.measureText().width - 2 * g > n && q + this._labels[y - 1].textBlock.measureText().width - 2 * g > n))
                            n = 0 === y ? q + this._labels[y + 1].textBlock.measureText().width - 2 * g : q + this._labels[y - 1].textBlock.measureText().width - 2 * g, this.sessionVariables.labelFontSize = r(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelWrap = true, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = m;
                          else if (0 === n)
                            for (this.sessionVariables.labelFontSize = r(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelWrap = true, b = 0; b < this._labels.length; b++)
                              a = this._labels[b].textBlock, a.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(g, q), m), z3 = a.measureText(), b < this._labels.length - 1 && (f = b + 1, d = this._labels[f].textBlock, d.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(g, q), m), d = d.measureText(), z3.width + d.width >> 0 > 2 * g && (this.sessionVariables.labelAngle = -25));
                        }
                      }
                    }
                  else
                    (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? p : Math.min((b - g * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), b), m = 0 != this.labelAngle ? (k - (l2 + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) : g, this.sessionVariables.labelMaxHeight = this.labelWrap ? (k - m * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) : 1.5 * this.labelFontSize, r(this.options.labelWrap)) ? r(this.options.labelWrap) && (this.labelWrap && !r(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : m, this.sessionVariables.labelMaxHeight = p) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = m, this.sessionVariables.labelMaxHeight = b < 0.9 * h2 ? 0.9 * h2 : b, this.sessionVariables.labelWrap = this.labelWrap)) : (this.options.labelWrap ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : m) : (r(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : m, this.sessionVariables.labelWrap = this.labelWrap), this.sessionVariables.labelMaxHeight = p);
                }
              for (b = 0; b < this._labels.length; b++)
                a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
            } else
              for (c = 0; c < this._labels.length; c++)
                a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = r(this.options.labelMaxWidth) ? r(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = g : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = r(this.options.labelFontSize) ? r(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = r(this.options.labelAngle) ? r(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = r(this.options.labelWrap) ? r(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = r(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = p : this.sessionVariables.labelMaxHeight, a.measureText();
          else if ("left" === this._position || "right" === this._position)
            if (g = r(this.options.labelMaxWidth) ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth, p = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize, !this.chart.panEnabled && 1 <= this._labels.length) {
              this.sessionVariables.labelFontSize = this.labelFontSize;
              this.sessionVariables.labelMaxWidth = g;
              this.sessionVariables.labelMaxHeight = p;
              this.sessionVariables.labelAngle = r(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle;
              this.sessionVariables.labelWrap = this.labelWrap;
              for (c = 0; c < this._labels.length; c++)
                if (!this._labels[c].breaksLabelType) {
                  a = this._labels[c].textBlock;
                  z3 = a.measureText();
                  for (f = c + 1; f < this._labels.length; f++)
                    if (!this._labels[f].breaksLabelType) {
                      d = this._labels[f].textBlock;
                      d = d.measureText();
                      break;
                    }
                  e.push(a.height);
                  this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e);
                  b = g * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (p - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                  Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                  Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                  r(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle ? r(this.options.labelWrap) ? r(this.options.labelWrap) && (r(this.options.labelMaxWidth) ? r(d) || (h2 = z3.height + d.height >> 0, h2 - 2 * p > q && (q = h2 - 2 * p, h2 >= 2 * p && h2 < 2.4 * p ? (r(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelMaxHeight = p, this.sessionVariables.labelFontSize = r(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize) : h2 >= 2.4 * p && h2 < 2.8 * p ? (this.sessionVariables.labelMaxHeight = b, this.sessionVariables.labelFontSize = this.labelFontSize, this.sessionVariables.labelWrap = true) : h2 >= 2.8 * p && h2 < 3.2 * p ? (this.sessionVariables.labelMaxHeight = p, this.sessionVariables.labelWrap = true, r(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = r(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelAngle = r(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : h2 >= 3.2 * p && h2 < 3.6 * p ? (this.sessionVariables.labelMaxHeight = b, this.sessionVariables.labelWrap = true, this.sessionVariables.labelFontSize = this.labelFontSize) : h2 > 3.6 * p && h2 < 10 * p ? (r(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = r(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxWidth = g, this.sessionVariables.labelMaxHeight = p, this.sessionVariables.labelAngle = r(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : h2 > 10 * p && h2 < 50 * p && (r(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = r(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxHeight = p, this.sessionVariables.labelMaxWidth = g, this.sessionVariables.labelAngle = r(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle))) : (this.sessionVariables.labelMaxHeight = p, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth)) : (this.sessionVariables.labelMaxWidth = this.labelWrap ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : this.labelMaxWidth ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : g, this.sessionVariables.labelMaxHeight = p) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = 0 === this.labelAngle ? g : Math.min((b - p * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), p), r(this.options.labelWrap)) ? r(this.options.labelWrap) && (this.labelWrap && !r(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = b) : (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : g, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? p : b, r(this.options.labelMaxWidth) && (this.sessionVariables.labelAngle = this.labelAngle))) : this.options.labelWrap ? (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? p : b, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = g) : (this.sessionVariables.labelMaxHeight = p, r(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap);
                }
              for (b = 0; b < this._labels.length; b++)
                a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.labelFontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
            } else
              for (c = 0; c < this._labels.length; c++)
                a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = r(this.options.labelMaxWidth) ? r(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = g : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = r(this.options.labelFontSize) ? r(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = r(this.options.labelAngle) ? r(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = r(this.options.labelWrap) ? r(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = r(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = p : this.sessionVariables.labelMaxHeight, a.measureText();
        }
        for (c = 0; c < this.stripLines.length; c++) {
          var g = this.stripLines[c], x;
          if ("outside" === g.labelPlacement) {
            p = this.sessionVariables.labelMaxWidth;
            if ("bottom" === this._position || "top" === this._position)
              r(g.options.labelWrap) && !r(this.sessionVariables.stripLineLabelMaxHeight) ? x = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = x = g.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
            if ("left" === this._position || "right" === this._position)
              r(g.options.labelWrap) && !r(this.sessionVariables.stripLineLabelMaxHeight) ? x = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = x = g.labelWrap ? 0.8 * this.chart.width >> 0 : 1.5 * this.labelFontSize;
            r(g.labelBackgroundColor) && (g.labelBackgroundColor = "#EEEEEE");
          } else
            p = "bottom" === this._position || "top" === this._position ? 0.9 * this.chart.width >> 0 : 0.9 * this.chart.height >> 0, x = r(g.options.labelWrap) || g.labelWrap ? "bottom" === this._position || "top" === this._position ? 0.8 * this.chart.width >> 0 : 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize, r(g.labelBackgroundColor) && (r(g.startValue) && 0 !== g.startValue ? g.labelBackgroundColor = u ? "transparent" : null : g.labelBackgroundColor = "#EEEEEE");
          a = new ka(this.ctx, { x: 0, y: 0, backgroundColor: g.labelBackgroundColor, borderColor: g.labelBorderColor, borderThickness: g.labelBorderThickness, cornerRadius: g.labelCornerRadius, maxWidth: g.options.labelMaxWidth ? g.options.labelMaxWidth : p, maxHeight: x, angle: this.labelAngle, text: g.labelFormatter ? g.labelFormatter({ chart: this.chart, axis: this, stripLine: g }) : g.label, textAlign: this.labelTextAlign, fontSize: "outside" === g.labelPlacement ? g.options.labelFontSize ? g.labelFontSize : this.labelFontSize : g.labelFontSize, fontFamily: "outside" === g.labelPlacement ? g.options.labelFontFamily ? g.labelFontFamily : this.labelFontFamily : g.labelFontFamily, fontWeight: "outside" === g.labelPlacement ? g.options.labelFontWeight ? g.labelFontWeight : this.labelFontWeight : g.labelFontWeight, fontColor: g.labelFontColor || g.color, fontStyle: "outside" === g.labelPlacement ? g.options.labelFontStyle ? g.labelFontStyle : this.fontWeight : g.labelFontStyle, textBaseline: "middle" });
          this._stripLineLabels.push({ position: g.value, textBlock: a, effectiveHeight: null, stripLine: g });
        }
      };
      C.prototype.createLabelsAndCalculateWidth = function() {
        var a = 0, d = 0;
        this._labels = [];
        this._stripLineLabels = [];
        var c = this.chart.isNavigator ? 0 : 5;
        if ("left" === this._position || "right" === this._position) {
          this.createLabels();
          if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index)
            for (d = 0; d < this._labels.length; d++) {
              var b = this._labels[d].textBlock, e = b.measureText(), g = 0, g = 0 === this.labelAngle ? e.width : e.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
              a < g && (this.labelEffectiveWidth = a = g);
              this._labels[d].effectiveWidth = g;
            }
          for (d = 0; d < this._stripLineLabels.length; d++)
            "outside" === this._stripLineLabels[d].stripLine.labelPlacement && (this._stripLineLabels[d].stripLine.value >= this.viewportMinimum && this._stripLineLabels[d].stripLine.value <= this.viewportMaximum) && (b = this._stripLineLabels[d].textBlock, e = b.measureText(), g = 0 === this.labelAngle ? e.width : e.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), "inside" === this.tickPlacement && (g += this.tickLength), "inside" === this.labelPlacement && (a += 0 < this._index ? g : 0), a < g && (a = g), this.stripLineLabelEffectiveWidth = this._stripLineLabels[d].effectiveWidth = g);
        }
        return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 < this._index ? this.tickLength : 0 : this.tickLength) + c;
      };
      C.prototype.createLabelsAndCalculateHeight = function() {
        var a = 0;
        this._labels = [];
        this._stripLineLabels = [];
        var d, c = 0, b = this.chart.isNavigator ? 0 : 5;
        if ("bottom" === this._position || "top" === this._position) {
          this.createLabels();
          if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index)
            for (c = 0; c < this._labels.length; c++) {
              d = this._labels[c].textBlock;
              var e = d.measureText(), g = 0, g = 0 === this.labelAngle ? e.height : e.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - d.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
              a < g && (this.labelEffectiveHeight = a = g);
              this._labels[c].effectiveHeight = g;
            }
          for (c = 0; c < this._stripLineLabels.length; c++)
            "outside" === this._stripLineLabels[c].stripLine.labelPlacement && (this._stripLineLabels[c].stripLine.value >= this.viewportMinimum && this._stripLineLabels[c].stripLine.value <= this.viewportMaximum) && (d = this._stripLineLabels[c].textBlock, e = d.measureText(), g = 0 === this.labelAngle ? e.height : e.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - d.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), "inside" === this.tickPlacement && (g += this.tickLength), "inside" === this.labelPlacement && (a += 0 < this._index ? g : 0), a < g && (a = g), this.stripLineLabelEffectiveHeight = this._stripLineLabels[c].effectiveHeight = g);
        }
        return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 < this._index ? this.tickLength : 0 : this.tickLength) + b;
      };
      C.setLayout = function(a, d, c, b, e, g) {
        var p, h2, l2, k, m = a[0] ? a[0].chart : d[0].chart, n = m.isNavigator ? 0 : 10, q = m._axes;
        if (a && 0 < a.length)
          for (var f = 0; f < a.length; f++)
            a[f] && a[f].calculateAxisParameters();
        if (d && 0 < d.length)
          for (f = 0; f < d.length; f++)
            d[f].calculateAxisParameters();
        if (c && 0 < c.length)
          for (f = 0; f < c.length; f++)
            c[f].calculateAxisParameters();
        if (b && 0 < b.length)
          for (f = 0; f < b.length; f++)
            b[f].calculateAxisParameters();
        for (f = 0; f < q.length; f++)
          if (q[f] && q[f].scaleBreaks && q[f].scaleBreaks._appliedBreaks.length)
            for (var u2 = q[f].scaleBreaks._appliedBreaks, y = 0; y < u2.length && !(u2[y].startValue > q[f].viewportMaximum); y++)
              u2[y].endValue < q[f].viewportMinimum || (r(q[f].scaleBreaks.firstBreakIndex) && (q[f].scaleBreaks.firstBreakIndex = y), u2[y].startValue >= q[f].viewPortMinimum && (q[f].scaleBreaks.lastBreakIndex = y));
        for (var x = y = 0, s = 0, w = 0, v = 0, z3 = 0, B = 0, C2, E3, G = h2 = 0, K2, L2, M3, u2 = K2 = L2 = M3 = false, f = 0; f < q.length; f++)
          q[f] && q[f].title && (q[f]._titleTextBlock = new ka(q[f].ctx, {
            text: q[f].title,
            horizontalAlign: "center",
            fontSize: q[f].titleFontSize,
            fontFamily: q[f].titleFontFamily,
            fontWeight: q[f].titleFontWeight,
            fontColor: q[f].titleFontColor,
            fontStyle: q[f].titleFontStyle,
            borderColor: q[f].titleBorderColor,
            borderThickness: q[f].titleBorderThickness,
            backgroundColor: q[f].titleBackgroundColor,
            cornerRadius: q[f].titleCornerRadius,
            textBaseline: "middle"
          }));
        for (f = 0; f < q.length; f++)
          if (q[f].title)
            switch (q[f]._position) {
              case "left":
                q[f]._titleTextBlock.maxWidth = q[f].titleMaxWidth || g.height;
                q[f]._titleTextBlock.maxHeight = q[f].titleWrap ? 0.8 * g.width : 1.5 * q[f].titleFontSize;
                q[f]._titleTextBlock.angle = -90;
                break;
              case "right":
                q[f]._titleTextBlock.maxWidth = q[f].titleMaxWidth || g.height;
                q[f]._titleTextBlock.maxHeight = q[f].titleWrap ? 0.8 * g.width : 1.5 * q[f].titleFontSize;
                q[f]._titleTextBlock.angle = 90;
                break;
              default:
                q[f]._titleTextBlock.maxWidth = q[f].titleMaxWidth || g.width, q[f]._titleTextBlock.maxHeight = q[f].titleWrap ? 0.8 * g.height : 1.5 * q[f].titleFontSize, q[f]._titleTextBlock.angle = 0;
            }
        if ("normal" === e) {
          for (var w = [], v = [], z3 = [], B = [], P2 = [], S3 = [], Q2 = [], R2 = []; 4 > y; ) {
            var H = 0, Z2 = 0, V2 = 0, W3 = 0, X2 = e = 0, O = 0, aa3 = 0, Y2 = 0, $2 = 0, T = 0, ba3 = 0;
            if (c && 0 < c.length)
              for (z3 = [], f = T = 0; f < c.length; f++)
                z3.push(Math.ceil(c[f] ? c[f].createLabelsAndCalculateWidth() : 0)), T += z3[f], O += c[f] && !m.isNavigator ? c[f].margin : 0;
            else
              z3.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateWidth() : 0));
            Q2.push(z3);
            if (b && 0 < b.length)
              for (B = [], f = ba3 = 0; f < b.length; f++)
                B.push(Math.ceil(b[f] ? b[f].createLabelsAndCalculateWidth() : 0)), ba3 += B[f], aa3 += b[f] ? b[f].margin : 0;
            else
              B.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateWidth() : 0));
            R2.push(B);
            p = Math.round(g.x1 + T + O);
            l2 = Math.round(g.x2 - ba3 - aa3 > m.width - n ? m.width - n : g.x2 - ba3 - aa3);
            if (a && 0 < a.length)
              for (w = [], f = Y2 = 0; f < a.length; f++)
                a[f] && (a[f].lineCoordinates = {}), a[f].lineCoordinates.width = Math.abs(l2 - p), a[f].title && (a[f]._titleTextBlock.maxWidth = 0 < a[f].titleMaxWidth && a[f].titleMaxWidth < a[f].lineCoordinates.width ? a[f].titleMaxWidth : a[f].lineCoordinates.width), w.push(Math.ceil(a[f] ? a[f].createLabelsAndCalculateHeight() : 0)), Y2 += w[f], e += a[f] && !m.isNavigator ? a[f].margin : 0;
            else
              w.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateHeight() : 0));
            P2.push(w);
            if (d && 0 < d.length)
              for (v = [], f = $2 = 0; f < d.length; f++)
                d[f] && (d[f].lineCoordinates = {}), d[f].lineCoordinates.width = Math.abs(l2 - p), d[f].title && (d[f]._titleTextBlock.maxWidth = 0 < d[f].titleMaxWidth && d[f].titleMaxWidth < d[f].lineCoordinates.width ? d[f].titleMaxWidth : d[f].lineCoordinates.width), v.push(Math.ceil(d[f] ? d[f].createLabelsAndCalculateHeight() : 0)), $2 += v[f], X2 += d[f] && !m.isNavigator ? d[f].margin : 0;
            else
              v.push(Math.ceil(d[0] ? d[0].createLabelsAndCalculateHeight() : 0));
            S3.push(v);
            if (a && 0 < a.length)
              for (f = 0; f < a.length; f++)
                a[f] && (a[f].lineCoordinates.x1 = p, l2 = Math.round(g.x2 - ba3 - aa3 > m.width - n ? m.width - n : g.x2 - ba3 - aa3), a[f]._labels && 1 < a[f]._labels.length && (h2 = k = 0, k = a[f]._labels[1], h2 = "dateTime" === a[f].valueType ? a[f]._labels[a[f]._labels.length - 2] : a[f]._labels[a[f]._labels.length - 1], x = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - h2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), s = h2.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h2.textBlock.angle)) + (h2.textBlock.height - h2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h2.textBlock.angle))), !a[f] || (!a[f].labelAutoFit || r(C2) || r(E3) || m.isNavigator || m.stockChart) || (h2 = 0, 0 < a[f].labelAngle ? E3 + s > l2 && (h2 += 0 < a[f].labelAngle ? E3 + s - l2 - ba3 : 0) : 0 > a[f].labelAngle ? C2 - x < p && C2 - x < a[f].viewportMinimum && (G = p - (O + a[f].tickLength + z3 + C2 - x + a[f].labelFontSize / 2)) : 0 === a[f].labelAngle && (E3 + s > l2 && (h2 = E3 + s / 2 - l2 - ba3), C2 - x < p && C2 - x < a[f].viewportMinimum && (G = p - O - a[f].tickLength - z3 - C2 + x / 2)), a[f].viewportMaximum === a[f].maximum && a[f].viewportMinimum === a[f].minimum && 0 < a[f].labelAngle && 0 < h2 ? l2 -= h2 : a[f].viewportMaximum === a[f].maximum && a[f].viewportMinimum === a[f].minimum && 0 > a[f].labelAngle && 0 < G ? p += G : a[f].viewportMaximum === a[f].maximum && a[f].viewportMinimum === a[f].minimum && 0 === a[f].labelAngle && (0 < G && (p += G), 0 < h2 && (l2 -= h2))), m.panEnabled ? Y2 = r(m.sessionVariables.axisX.height) ? m.sessionVariables.axisX.height = Y2 : m.sessionVariables.axisX.height : m.sessionVariables.axisX.height = Y2, h2 = Math.round(g.y2 - Y2 - e + H), k = Math.round(g.y2), a[f].lineCoordinates.x2 = l2, a[f].lineCoordinates.width = l2 - p, a[f].lineCoordinates.y1 = h2, a[f].lineCoordinates.y2 = h2, "inside" === a[f].labelPlacement && 0 < f && (a[f].lineCoordinates.y1 = a[f - 1].lineCoordinates.y2 + H + (a[f].labelEffectiveHeight || 0), a[f].lineCoordinates.y2 = a[f].lineCoordinates.y1 + a[f].lineThickness / 2), "inside" === a[f].tickPlacement && 0 < f && (a[f].lineCoordinates.y1 += a[f].tickLength, a[f].lineCoordinates.y2 = a[f].lineCoordinates.y1 + a[f].lineThickness / 2), a[f].bounds = { x1: p, y1: h2, x2: l2, y2: k - (Y2 + e - w[f] - H), width: l2 - p }, a[f].bounds.height = a[f].bounds.y2 - a[f].bounds.y1), H += w[f] + a[f].margin;
            if (d && 0 < d.length)
              for (f = 0; f < d.length; f++)
                d[f].lineCoordinates.x1 = Math.round(g.x1 + T + O), d[f].lineCoordinates.x2 = Math.round(g.x2 - ba3 - aa3 > m.width - n ? m.width - n : g.x2 - ba3 - aa3), d[f].lineCoordinates.width = Math.abs(l2 - p), d[f]._labels && 1 < d[f]._labels.length && (k = d[f]._labels[1], h2 = "dateTime" === d[f].valueType ? d[f]._labels[d[f]._labels.length - 2] : d[f]._labels[d[f]._labels.length - 1], x = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - h2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), s = h2.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h2.textBlock.angle)) + (h2.textBlock.height - h2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h2.textBlock.angle))), m.panEnabled ? $2 = r(m.sessionVariables.axisX2.height) ? m.sessionVariables.axisX2.height = $2 : m.sessionVariables.axisX2.height : m.sessionVariables.axisX2.height = $2, h2 = Math.round(g.y1), k = d[f].lineCoordinates.y1 = h2 + $2 + X2 - Z2, d[f].lineCoordinates.y2 = h2, "inside" === d[f].labelPlacement && 0 < f && (d[f].lineCoordinates.y1 = d[f - 1].lineCoordinates.y1 - Z2 - (d[f].labelEffectiveHeight || 0)), "inside" === d[f].tickPlacement && 0 < f && (d[f].lineCoordinates.y1 -= d[f].tickLength), d[f].bounds = {
                  x1: p,
                  y1: h2 + ($2 + X2 - v[f] - Z2),
                  x2: l2,
                  y2: k,
                  width: l2 - p
                }, d[f].bounds.height = d[f].bounds.y2 - d[f].bounds.y1, Z2 += v[f] + d[f].margin;
            if (c && 0 < c.length)
              for (f = 0; f < c.length; f++)
                O = m.isNavigator ? 0 : 10, c[f] && (p = Math.round(a[0] ? a[0].lineCoordinates.x1 : d[0].lineCoordinates.x1), O = c[f]._labels && 0 < c[f]._labels.length ? c[f]._labels[c[f]._labels.length - 1].textBlock.height / 2 : n, h2 = Math.round(g.y1 + $2 + X2 < Math.max(O, n) ? Math.max(O, n) : g.y1 + $2 + X2), l2 = Math.round(a[0] ? a[0].lineCoordinates.x1 : d[0].lineCoordinates.x1), O = 0 < a.length ? 0 : c[f]._labels && 0 < c[f]._labels.length ? c[f]._labels[0].textBlock.height / 2 : n, k = Math.round(g.y2 - Y2 - e - O), c[f].lineCoordinates = { x1: p - V2, y1: h2, x2: l2 - V2, y2: k, height: Math.abs(k - h2) }, "inside" === c[f].labelPlacement && 0 < f && (c[f].lineCoordinates.x1 = c[f - 1].lineCoordinates.x1 - V2 - (c[f].labelEffectiveWidth || 0), c[f].lineCoordinates.x2 = c[f].lineCoordinates.x1 + c[f].lineThickness / 2), "inside" === c[f].tickPlacement && 0 < f && (c[f].lineCoordinates.x1 -= c[f].tickLength, c[f].lineCoordinates.x2 = c[f].lineCoordinates.x1 + c[f].lineThickness / 2), c[f].bounds = { x1: p - (z3[f] + V2), y1: h2, x2: l2 - V2, y2: k, height: k - h2 }, c[f].bounds.width = c[f].bounds.x2 - c[f].bounds.x1, c[f].title && (c[f]._titleTextBlock.maxWidth = 0 < c[f].titleMaxWidth && c[f].titleMaxWidth < c[f].lineCoordinates.height ? c[f].titleMaxWidth : c[f].lineCoordinates.height), V2 += z3[f] + c[f].margin);
            if (b && 0 < b.length)
              for (f = 0; f < b.length; f++)
                b[f] && (p = Math.round(a[0] ? a[0].lineCoordinates.x2 : d[0].lineCoordinates.x2), l2 = Math.round(p), O = b[f]._labels && 0 < b[f]._labels.length ? b[f]._labels[b[f]._labels.length - 1].textBlock.height / 2 : 0, h2 = Math.round(g.y1 + $2 + X2 < Math.max(
                  O,
                  n
                ) ? Math.max(O, n) : g.y1 + $2 + X2), O = 0 < a.length ? 0 : b[f]._labels && 0 < b[f]._labels.length ? b[f]._labels[0].textBlock.height / 2 : 0, k = Math.round(g.y2 - (Y2 + e + O)), b[f].lineCoordinates = { x1: p + W3, y1: h2, x2: p + W3, y2: k, height: Math.abs(k - h2) }, "inside" === b[f].labelPlacement && 0 < f && (b[f].lineCoordinates.x1 = b[f - 1].lineCoordinates.x2 + W3 + (b[f].labelEffectiveWidth || 0), b[f].lineCoordinates.x2 = b[f].lineCoordinates.x1 + b[f].lineThickness / 2), "inside" === b[f].tickPlacement && 0 < f && (b[f].lineCoordinates.x1 += b[f].tickLength, b[f].lineCoordinates.x2 = b[f].lineCoordinates.x1 + b[f].lineThickness / 2), b[f].bounds = { x1: p + W3, y1: h2, x2: l2 + (B[f] + W3), y2: k, height: k - h2 }, b[f].bounds.width = b[f].bounds.x2 - b[f].bounds.x1, b[f].title && (b[f]._titleTextBlock.maxWidth = 0 < b[f].titleMaxWidth && b[f].titleMaxWidth < b[f].lineCoordinates.height ? b[f].titleMaxWidth : b[f].lineCoordinates.height), W3 += B[f] + b[f].margin);
            if (a && 0 < a.length)
              for (f = 0; f < a.length; f++)
                a[f] && (a[f].calculateValueToPixelConversionParameters(), a[f].calculateBreaksSizeInValues(), a[f]._labels && 1 < a[f]._labels.length && (C2 = (a[f].logarithmic ? Math.log(a[f]._labels[1].position / a[f].viewportMinimum) / a[f].conversionParameters.lnLogarithmBase : a[f]._labels[1].position - a[f].viewportMinimum) * Math.abs(a[f].conversionParameters.pixelPerUnit) + a[f].lineCoordinates.x1, p = a[f]._labels[a[f]._labels.length - ("dateTime" === a[f].valueType ? 2 : 1)].position, p = a[f].getApparentDifference(a[f].viewportMinimum, p), E3 = a[f].logarithmic ? (1 < p ? Math.log(p) / a[f].conversionParameters.lnLogarithmBase * Math.abs(a[f].conversionParameters.pixelPerUnit) : 0) + a[f].lineCoordinates.x1 : (0 < p ? p * Math.abs(a[f].conversionParameters.pixelPerUnit) : 0) + a[f].lineCoordinates.x1));
            if (d && 0 < d.length)
              for (f = 0; f < d.length; f++)
                d[f].calculateValueToPixelConversionParameters(), d[f].calculateBreaksSizeInValues(), d[f]._labels && 1 < d[f]._labels.length && (C2 = (d[f].logarithmic ? Math.log(d[f]._labels[1].position / d[f].viewportMinimum) / d[f].conversionParameters.lnLogarithmBase : d[f]._labels[1].position - d[f].viewportMinimum) * Math.abs(d[f].conversionParameters.pixelPerUnit) + d[f].lineCoordinates.x1, p = d[f]._labels[d[f]._labels.length - ("dateTime" === d[f].valueType ? 2 : 1)].position, p = d[f].getApparentDifference(d[f].viewportMinimum, p), E3 = d[f].logarithmic ? (1 < p ? Math.log(p) / d[f].conversionParameters.lnLogarithmBase * Math.abs(d[f].conversionParameters.pixelPerUnit) : 0) + d[f].lineCoordinates.x1 : (0 < p ? p * Math.abs(d[f].conversionParameters.pixelPerUnit) : 0) + d[f].lineCoordinates.x1);
            for (f = 0; f < q.length; f++)
              "axisY" === q[f].type && (q[f].calculateValueToPixelConversionParameters(), q[f].calculateBreaksSizeInValues());
            if (0 < y) {
              if (a && 0 < a.length)
                for (f = 0; f < a.length; f++)
                  u2 = P2[y - 1][f] === P2[y][f] ? true : false;
              else
                u2 = true;
              if (d && 0 < d.length)
                for (f = 0; f < d.length; f++)
                  K2 = S3[y - 1][f] === S3[y][f] ? true : false;
              else
                K2 = true;
              if (c && 0 < c.length)
                for (f = 0; f < c.length; f++)
                  L2 = Q2[y - 1][f] === Q2[y][f] ? true : false;
              else
                L2 = true;
              if (b && 0 < b.length)
                for (f = 0; f < b.length; f++)
                  M3 = R2[y - 1][f] === R2[y][f] ? true : false;
              else
                M3 = true;
            }
            if (u2 && K2 && L2 && M3)
              break;
            y++;
          }
          if (a && 0 < a.length)
            for (f = 0; f < a.length; f++)
              a[f].calculateStripLinesThicknessInValues(), a[f].calculateBreaksInPixels();
          if (d && 0 < d.length)
            for (f = 0; f < d.length; f++)
              d[f].calculateStripLinesThicknessInValues(), d[f].calculateBreaksInPixels();
          if (c && 0 < c.length)
            for (f = 0; f < c.length; f++)
              c[f].calculateStripLinesThicknessInValues(), c[f].calculateBreaksInPixels();
          if (b && 0 < b.length)
            for (f = 0; f < b.length; f++)
              b[f].calculateStripLinesThicknessInValues(), b[f].calculateBreaksInPixels();
        } else {
          n = [];
          C2 = [];
          G = [];
          x = [];
          E3 = [];
          s = [];
          P2 = [];
          for (S3 = []; 4 > y; ) {
            Y2 = W3 = V2 = aa3 = O = X2 = e = R2 = Q2 = H = $2 = 0;
            if (a && 0 < a.length)
              for (G = [], f = W3 = 0; f < a.length; f++)
                G.push(Math.ceil(a[f] ? a[f].createLabelsAndCalculateWidth() : 0)), W3 += G[f], e += a[f] && !m.isNavigator ? a[f].margin : 0;
            else
              G.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateWidth() : 0));
            P2.push(G);
            if (d && 0 < d.length)
              for (x = [], f = Y2 = 0; f < d.length; f++)
                x.push(Math.ceil(d[f] ? d[f].createLabelsAndCalculateWidth() : 0)), Y2 += x[f], X2 += d[f] ? d[f].margin : 0;
            else
              x.push(Math.ceil(d[0] ? d[0].createLabelsAndCalculateWidth() : 0));
            S3.push(x);
            if (c && 0 < c.length)
              for (f = 0; f < c.length; f++)
                c[f].lineCoordinates = {}, p = Math.round(g.x1 + W3 + e), l2 = Math.round(g.x2 - Y2 - X2 > m.width - 10 ? m.width - 10 : g.x2 - Y2 - X2), c[f].labelAutoFit && !r(w) && (0 < !a.length && (p = 0 > c[f].labelAngle ? Math.max(p, w) : 0 === c[f].labelAngle ? Math.max(p, w / 2) : p), 0 < !d.length && (l2 = 0 < c[f].labelAngle ? l2 - v / 2 : 0 === c[f].labelAngle ? l2 - v / 2 : l2)), c[f].lineCoordinates.x1 = p, c[f].lineCoordinates.x2 = l2, c[f].lineCoordinates.width = Math.abs(l2 - p), c[f].title && (c[f]._titleTextBlock.maxWidth = 0 < c[f].titleMaxWidth && c[f].titleMaxWidth < c[f].lineCoordinates.width ? c[f].titleMaxWidth : c[f].lineCoordinates.width);
            if (b && 0 < b.length)
              for (f = 0; f < b.length; f++)
                b[f].lineCoordinates = {}, p = Math.round(g.x1 + W3 + e), l2 = Math.round(g.x2 - Y2 - X2 > b[f].chart.width - 10 ? b[f].chart.width - 10 : g.x2 - Y2 - X2), b[f] && b[f].labelAutoFit && !r(z3) && (0 < !a.length && (p = 0 < b[f].labelAngle ? Math.max(p, z3) : 0 === b[f].labelAngle ? Math.max(p, z3 / 2) : p), 0 < !d.length && (l2 -= B / 2)), b[f].lineCoordinates.x1 = p, b[f].lineCoordinates.x2 = l2, b[f].lineCoordinates.width = Math.abs(l2 - p), b[f].title && (b[f]._titleTextBlock.maxWidth = 0 < b[f].titleMaxWidth && b[f].titleMaxWidth < b[f].lineCoordinates.width ? b[f].titleMaxWidth : b[f].lineCoordinates.width);
            if (c && 0 < c.length)
              for (n = [], f = V2 = 0; f < c.length; f++)
                n.push(Math.ceil(c[f] ? c[f].createLabelsAndCalculateHeight() : 0)), V2 += n[f] + c[f].margin, O += c[f].margin;
            else
              n.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateHeight() : 0));
            E3.push(n);
            if (b && 0 < b.length)
              for (C2 = [], f = 0; f < b.length; f++)
                C2.push(Math.ceil(b[f] ? b[f].createLabelsAndCalculateHeight() : 0)), aa3 += b[f].margin;
            else
              C2.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateHeight() : 0));
            s.push(C2);
            if (c && 0 < c.length)
              for (f = 0; f < c.length; f++)
                0 < c[f]._labels.length && (k = c[f]._labels[0], h2 = c[f]._labels[c[f]._labels.length - 1], w = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - h2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), v = h2.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h2.textBlock.angle)) + (h2.textBlock.height - h2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h2.textBlock.angle)));
            if (b && 0 < b.length)
              for (f = 0; f < b.length; f++)
                b[f] && 0 < b[f]._labels.length && (k = b[f]._labels[0], h2 = b[f]._labels[b[f]._labels.length - 1], z3 = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - h2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), B = h2.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h2.textBlock.angle)) + (h2.textBlock.height - h2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h2.textBlock.angle)));
            if (m.panEnabled)
              for (f = 0; f < c.length; f++)
                n[f] = r(m.sessionVariables.axisY[f].height) ? m.sessionVariables.axisY[f].height = n[f] : m.sessionVariables.axisY[f].height;
            else
              for (f = 0; f < c.length; f++)
                m.sessionVariables.axisY[f].height = n[f];
            if (c && 0 < c.length)
              for (f = c.length - 1; 0 <= f; f--)
                h2 = Math.round(g.y2), k = Math.round(g.y2 > c[f].chart.height ? c[f].chart.height : g.y2), c[f].lineCoordinates.y1 = h2 - (n[f] + c[f].margin + $2), c[f].lineCoordinates.y2 = h2 - (n[f] + c[f].margin + $2), "inside" === c[f].labelPlacement && 0 < f && (c[f].lineCoordinates.y1 = c[f].lineCoordinates.y1 + n[f] - (c[f]._titleTextBlock ? c[f]._titleTextBlock.height : 0) - c[f].tickLength - (c[f].stripLineLabelEffectiveHeight || 0) - 5, c[f].lineCoordinates.y2 = c[f].lineCoordinates.y1 + c[f].lineThickness / 2), "inside" === c[f].tickPlacement && 0 < f && (c[f].lineCoordinates.y1 += c[f].tickLength, c[f].lineCoordinates.y2 = c[f].lineCoordinates.y1 + c[f].lineThickness / 2), c[f].bounds = { x1: p, y1: h2 - (n[f] + $2 + c[f].margin), x2: l2, y2: k - ($2 + c[f].margin), width: l2 - p, height: n[f] }, c[f].title && (c[f]._titleTextBlock.maxWidth = 0 < c[f].titleMaxWidth && c[f].titleMaxWidth < c[f].lineCoordinates.width ? c[f].titleMaxWidth : c[f].lineCoordinates.width), $2 += n[f] + c[f].margin;
            if (b && 0 < b.length)
              for (f = b.length - 1; 0 <= f; f--)
                b[f] && (h2 = Math.round(g.y1), k = Math.round(g.y1 + (C2[f] + b[f].margin + H)), b[f].lineCoordinates.y1 = k, b[f].lineCoordinates.y2 = k, "inside" === b[f].labelPlacement && 0 < f && (b[f].lineCoordinates.y1 = k - C2[f] + (b[f]._titleTextBlock ? b[f]._titleTextBlock.height : 0) + b[f].tickLength + (b[f].stripLineLabelEffectiveHeight || 0), b[f].lineCoordinates.y2 = b[f].lineCoordinates.y1 - b[f].lineThickness / 2), "inside" === b[f].tickPlacement && 0 < f && (b[f].lineCoordinates.y1 -= b[f].tickLength, b[f].lineCoordinates.y2 = b[f].lineCoordinates.y1 - b[f].lineThickness / 2), b[f].bounds = { x1: p, y1: h2 + (b[f].margin + H), x2: l2, y2: k, width: l2 - p }, b[f].bounds.height = b[f].bounds.y2 - b[f].bounds.y1, b[f].title && (b[f]._titleTextBlock.maxWidth = 0 < b[f].titleMaxWidth && b[f].titleMaxWidth < b[f].lineCoordinates.width ? b[f].titleMaxWidth : b[f].lineCoordinates.width), H += C2[f] + b[f].margin);
            if (a && 0 < a.length)
              for (f = 0; f < a.length; f++) {
                O = a[f]._labels && 0 < a[f]._labels.length ? a[f]._labels[0].textBlock.fontSize / 2 : 0;
                p = Math.round(g.x1 + e);
                h2 = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : g.y1 < Math.max(O, 10) ? Math.max(O, 10) : g.y1) : g.y1 < Math.max(O, 10) ? Math.max(O, 10) : g.y1;
                l2 = Math.round(g.x1 + W3 + e);
                k = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y1 : g.y2 - V2 > m.height - Math.max(O, 10) ? m.height - Math.max(O, 10) : g.y2 - V2) : g.y2 > m.height - Math.max(
                  O,
                  10
                ) ? m.height - Math.max(O, 10) : g.y2;
                if (c && 0 < c.length)
                  for (O = 0; O < c.length; O++)
                    c[O] && c[O].labelAutoFit && (l2 = c[O].lineCoordinates.x1, p = 0 > c[O].labelAngle || 0 === c[O].labelAngle ? l2 - W3 : p);
                if (b && 0 < b.length)
                  for (O = 0; O < b.length; O++)
                    b[O] && b[O].labelAutoFit && (l2 = b[O].lineCoordinates.x1, p = l2 - W3);
                a[f].lineCoordinates = { x1: l2 - Q2, y1: h2, x2: l2 - Q2, y2: k, height: Math.abs(k - h2) };
                "inside" === a[f].labelPlacement && 0 < f && (a[f].lineCoordinates.x1 = a[f].lineCoordinates.x1 - (G[f] - (a[f]._titleTextBlock ? a[f]._titleTextBlock.height : 0)) + a[f].tickLength + (a[f].stripLineLabelEffectiveWidth || 0), a[f].lineCoordinates.x2 = a[f].lineCoordinates.x1 + a[f].lineThickness / 2);
                "inside" === a[f].tickPlacement && 0 < f && (a[f].lineCoordinates.x1 -= a[f].tickLength, a[f].lineCoordinates.x2 = a[f].lineCoordinates.x1 + a[f].lineThickness / 2);
                a[f].bounds = { x1: l2 - (G[f] + Q2), y1: h2, x2: l2 - Q2, y2: k, height: k - h2 };
                a[f].bounds.width = a[f].bounds.x2 - a[f].bounds.x1;
                a[f].title && (a[f]._titleTextBlock.maxWidth = 0 < a[f].titleMaxWidth && a[f].titleMaxWidth < a[f].lineCoordinates.height ? a[f].titleMaxWidth : a[f].lineCoordinates.height);
                a[f].calculateValueToPixelConversionParameters();
                a[f].calculateBreaksSizeInValues();
                Q2 += G[f] + a[f].margin;
              }
            if (d && 0 < d.length)
              for (f = 0; f < d.length; f++) {
                O = d[f]._labels && 0 < d[f]._labels.length ? d[f]._labels[0].textBlock.fontSize / 2 : 0;
                p = Math.round(g.x1 - e);
                h2 = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : g.y1 < Math.max(O, 10) ? Math.max(O, 10) : g.y1) : g.y1 < Math.max(O, 10) ? Math.max(O, 10) : g.y1;
                l2 = Math.round(g.x2 - Y2 - X2);
                k = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y1 : g.y2 - V2 > m.height - Math.max(O, 10) ? m.height - Math.max(
                  O,
                  10
                ) : g.y2 - V2) : g.y2 > m.height - Math.max(O, 10) ? m.height - Math.max(O, 10) : g.y2;
                if (c && 0 < c.length)
                  for (O = 0; O < c.length; O++)
                    c[O] && c[O].labelAutoFit && (l2 = 0 > c[O].labelAngle ? Math.max(l2, w) : 0 === c[O].labelAngle ? Math.max(l2, w / 2) : l2, p = 0 > c[O].labelAngle || 0 === c[O].labelAngle ? l2 - Y2 : p);
                if (b && 0 < b.length)
                  for (O = 0; O < b.length; O++)
                    b[O] && b[O].labelAutoFit && (l2 = b[O].lineCoordinates.x2, p = l2 - Y2);
                d[f].lineCoordinates = { x1: l2 + R2, y1: h2, x2: l2 + R2, y2: k, height: Math.abs(k - h2) };
                "inside" === d[f].labelPlacement && 0 < f && (d[f].lineCoordinates.x1 = d[f].lineCoordinates.x1 + (x[f] - (d[f]._titleTextBlock ? d[f]._titleTextBlock.height : 0) - 2) - d[f].tickLength - (d[f].stripLineLabelEffectiveWidth || 0), d[f].lineCoordinates.x2 = d[f].lineCoordinates.x1 + d[f].lineThickness / 2);
                "inside" === d[f].tickPlacement && 0 < f && (d[f].lineCoordinates.x1 += d[f].tickLength, d[f].lineCoordinates.x2 = d[f].lineCoordinates.x1 + d[f].lineThickness / 2);
                d[f].bounds = { x1: d[f].lineCoordinates.x1, y1: h2, x2: l2 + x[f] + R2, y2: k, width: l2 - p, height: k - h2 };
                d[f].bounds.width = d[f].bounds.x2 - d[f].bounds.x1;
                d[f].title && (d[f]._titleTextBlock.maxWidth = 0 < d[f].titleMaxWidth && d[f].titleMaxWidth < d[f].lineCoordinates.height ? d[f].titleMaxWidth : d[f].lineCoordinates.height);
                d[f].calculateValueToPixelConversionParameters();
                d[f].calculateBreaksSizeInValues();
                R2 += x[f] + d[f].margin;
              }
            for (f = 0; f < q.length; f++)
              "axisY" === q[f].type && (q[f].calculateValueToPixelConversionParameters(), q[f].calculateBreaksSizeInValues());
            if (0 < y) {
              if (a && 0 < a.length)
                for (f = 0; f < a.length; f++)
                  u2 = P2[y - 1][f] === P2[y][f] ? true : false;
              else
                u2 = true;
              if (d && 0 < d.length)
                for (f = 0; f < d.length; f++)
                  K2 = S3[y - 1][f] === S3[y][f] ? true : false;
              else
                K2 = true;
              if (c && 0 < c.length)
                for (f = 0; f < c.length; f++)
                  L2 = E3[y - 1][f] === E3[y][f] ? true : false;
              else
                L2 = true;
              if (b && 0 < b.length)
                for (f = 0; f < b.length; f++)
                  M3 = s[y - 1][f] === s[y][f] ? true : false;
              else
                M3 = true;
            }
            if (u2 && K2 && L2 && M3)
              break;
            y++;
          }
          if (c && 0 < c.length)
            for (f = 0; f < c.length; f++)
              c[f].calculateStripLinesThicknessInValues(), c[f].calculateBreaksInPixels();
          if (b && 0 < b.length)
            for (f = 0; f < b.length; f++)
              b[f].calculateStripLinesThicknessInValues(), b[f].calculateBreaksInPixels();
          if (a && 0 < a.length)
            for (f = 0; f < a.length; f++)
              a[f].calculateStripLinesThicknessInValues(), a[f].calculateBreaksInPixels();
          if (d && 0 < d.length)
            for (f = 0; f < d.length; f++)
              d[f].calculateStripLinesThicknessInValues(), d[f].calculateBreaksInPixels();
        }
      };
      C.render = function(a, d, c, b, e) {
        var g = a[0] ? a[0].chart : d[0].chart;
        e = g.ctx;
        g.alignVerticalAxes && g.alignVerticalAxes();
        e.save();
        e.beginPath();
        a && a.length && e.rect(5, a[0].bounds.y1, a[0].chart.width - 10, a[a.length - 1].bounds.y2);
        d && d.length && e.rect(5, d[d.length - 1].bounds.y1, d[0].chart.width - 10, d[0].bounds.y2);
        e.clip();
        if (a && 0 < a.length)
          for (var h2 = 0; h2 < a.length; h2++)
            a[h2].renderLabelsTicksAndTitle();
        if (d && 0 < d.length)
          for (h2 = 0; h2 < d.length; h2++)
            d[h2].renderLabelsTicksAndTitle();
        e.restore();
        if (c && 0 < c.length)
          for (h2 = 0; h2 < c.length; h2++)
            c[h2].renderLabelsTicksAndTitle();
        if (b && 0 < b.length)
          for (h2 = 0; h2 < b.length; h2++)
            b[h2].renderLabelsTicksAndTitle();
        g.preparePlotArea();
        g = g.plotArea;
        e.save();
        e.beginPath();
        e.rect(g.x1, g.y1, Math.abs(g.x2 - g.x1), Math.abs(g.y2 - g.y1));
        e.clip();
        if (a && 0 < a.length)
          for (h2 = 0; h2 < a.length; h2++)
            a[h2].renderStripLinesOfThicknessType("value");
        if (d && 0 < d.length)
          for (h2 = 0; h2 < d.length; h2++)
            d[h2].renderStripLinesOfThicknessType("value");
        if (c && 0 < c.length)
          for (h2 = 0; h2 < c.length; h2++)
            c[h2].renderStripLinesOfThicknessType("value");
        if (b && 0 < b.length)
          for (h2 = 0; h2 < b.length; h2++)
            b[h2].renderStripLinesOfThicknessType("value");
        if (a && 0 < a.length)
          for (h2 = 0; h2 < a.length; h2++)
            a[h2].renderInterlacedColors();
        if (d && 0 < d.length)
          for (h2 = 0; h2 < d.length; h2++)
            d[h2].renderInterlacedColors();
        if (c && 0 < c.length)
          for (h2 = 0; h2 < c.length; h2++)
            c[h2].renderInterlacedColors();
        if (b && 0 < b.length)
          for (h2 = 0; h2 < b.length; h2++)
            b[h2].renderInterlacedColors();
        e.restore();
        if (a && 0 < a.length)
          for (h2 = 0; h2 < a.length; h2++)
            a[h2].renderGrid(), u && (a[h2].createMask(), a[h2].renderBreaksBackground());
        if (d && 0 < d.length)
          for (h2 = 0; h2 < d.length; h2++)
            d[h2].renderGrid(), u && (d[h2].createMask(), d[h2].renderBreaksBackground());
        if (c && 0 < c.length)
          for (h2 = 0; h2 < c.length; h2++)
            c[h2].renderGrid(), u && (c[h2].createMask(), c[h2].renderBreaksBackground());
        if (b && 0 < b.length)
          for (h2 = 0; h2 < b.length; h2++)
            b[h2].renderGrid(), u && (b[h2].createMask(), b[h2].renderBreaksBackground());
        if (a && 0 < a.length)
          for (h2 = 0; h2 < a.length; h2++)
            a[h2].renderAxisLine();
        if (d && 0 < d.length)
          for (h2 = 0; h2 < d.length; h2++)
            d[h2].renderAxisLine();
        if (c && 0 < c.length)
          for (h2 = 0; h2 < c.length; h2++)
            c[h2].renderAxisLine();
        if (b && 0 < b.length)
          for (h2 = 0; h2 < b.length; h2++)
            b[h2].renderAxisLine();
        if (a && 0 < a.length)
          for (h2 = 0; h2 < a.length; h2++)
            a[h2].renderStripLinesOfThicknessType("pixel");
        if (d && 0 < d.length)
          for (h2 = 0; h2 < d.length; h2++)
            d[h2].renderStripLinesOfThicknessType("pixel");
        if (c && 0 < c.length)
          for (h2 = 0; h2 < c.length; h2++)
            c[h2].renderStripLinesOfThicknessType("pixel");
        if (b && 0 < b.length)
          for (h2 = 0; h2 < b.length; h2++)
            b[h2].renderStripLinesOfThicknessType("pixel");
      };
      C.prototype.calculateStripLinesThicknessInValues = function() {
        for (var a = 0; a < this.stripLines.length; a++)
          if (null !== this.stripLines[a].startValue && null !== this.stripLines[a].endValue) {
            var d = Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue), c = Math.max(this.stripLines[a].startValue, this.stripLines[a].endValue), b = this.getApparentDifference(d, c);
            this.stripLines[a].value = this.convertPixelToValue(Math.abs(this.convertValueToPixel(d) + this.convertValueToPixel(c)) / 2);
            this.stripLines[a].thickness = b;
            this.stripLines[a]._thicknessType = "value";
          }
      };
      C.prototype.calculateBreaksSizeInValues = function() {
        for (var a = "left" === this._position || "right" === this._position ? this.lineCoordinates.height || this.chart.height : this.lineCoordinates.width || this.chart.width, d = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], c = this.conversionParameters.pixelPerUnit || a / (this.logarithmic ? this.conversionParameters.maximum / this.conversionParameters.minimum : this.conversionParameters.maximum - this.conversionParameters.minimum), b = this.scaleBreaks && !r(this.scaleBreaks.options.spacing), e, g = 0; g < d.length; g++)
          e = b || !r(d[g].options.spacing), d[g].spacing = Ua(d[g].spacing, a, 8, e ? 0.1 * a : 8, e ? 0 : 3) << 0, d[g].size = 0 > d[g].spacing ? 0 : Math.abs(d[g].spacing / c), this.logarithmic && (d[g].size = Math.pow(this.logarithmBase, d[g].size));
      };
      C.prototype.calculateBreaksInPixels = function() {
        if (!(this.scaleBreaks && 0 >= this.scaleBreaks._appliedBreaks.length)) {
          var a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
          a.length && (this.scaleBreaks.firstBreakIndex = this.scaleBreaks.lastBreakIndex = null);
          for (var d = 0; d < a.length && !(a[d].startValue > this.conversionParameters.maximum); d++)
            a[d].endValue < this.conversionParameters.minimum || (r(this.scaleBreaks.firstBreakIndex) && (this.scaleBreaks.firstBreakIndex = d), a[d].startValue >= this.conversionParameters.minimum && (a[d].startPixel = this.convertValueToPixel(a[d].startValue), this.scaleBreaks.lastBreakIndex = d), a[d].endValue <= this.conversionParameters.maximum && (a[d].endPixel = this.convertValueToPixel(a[d].endValue)));
        }
      };
      C.prototype.renderLabelsTicksAndTitle = function() {
        var a = this, d = false, c = 0, b = 0, e = 1, g = 0;
        0 !== this.labelAngle && 360 !== this.labelAngle && (e = 1.2);
        if ("undefined" === typeof this.options.interval) {
          if ("bottom" === this._position || "top" === this._position)
            if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
              for (var c = [], e = 0 !== this.labelAngle && 360 !== this.labelAngle ? 1 : 1.2, h2, l2 = this.viewportMaximum, r2 = this.lineCoordinates.width / Math.log(this.range), k = this._labels.length - 1; 0 <= k; k--) {
                n = this._labels[k];
                if (n.position < this.viewportMinimum)
                  break;
                n.position > this.viewportMaximum || !(k === this._labels.length - 1 || h2 < Math.log(l2 / n.position) * r2 / e) || (c.push(n), l2 = n.position, h2 = n.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)));
              }
              this._labels = c;
            } else {
              for (k = 0; k < this._labels.length; k++)
                n = this._labels[k], n.position < this.viewportMinimum || (h2 = n.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), c += h2);
              c > this.lineCoordinates.width * e && this.labelAutoFit && (d = true);
            }
          if ("left" === this._position || "right" === this._position)
            if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
              for (var c = [], m, l2 = this.viewportMaximum, r2 = this.lineCoordinates.height / Math.log(this.range), k = this._labels.length - 1; 0 <= k; k--) {
                n = this._labels[k];
                if (n.position < this.viewportMinimum)
                  break;
                n.position > this.viewportMaximum || !(k === this._labels.length - 1 || m < Math.log(l2 / n.position) * r2) || (c.push(n), l2 = n.position, m = n.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)));
              }
              this._labels = c;
            } else {
              for (k = 0; k < this._labels.length; k++)
                n = this._labels[k], n.position < this.viewportMinimum || (m = n.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), b += m);
              b > this.lineCoordinates.height * e && this.labelAutoFit && (d = true);
            }
        }
        this.logarithmic && (!this.equidistantInterval && this.labelAutoFit) && this._labels.sort(function(a2, b2) {
          return a2.position - b2.position;
        });
        var k = 0, n, q;
        if ("bottom" === this._position) {
          for (k = 0; k < this._labels.length; k++)
            n = this._labels[k], n.position < this.viewportMinimum || n.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(n.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0, this.ctx.beginPath(), this.ctx.moveTo(b, q.y << 0), this.ctx.lineTo(b, q.y + this.tickLength << 0), this.ctx.stroke()), d && 0 !== g++ % 2 && this.labelAutoFit || (0 === n.textBlock.angle ? (q.x -= n.textBlock.width / 2, q.y = "inside" === this.labelPlacement ? q.y - (("inside" === this.tickPlacement ? this.tickLength : 0) + n.textBlock.height - n.textBlock.fontSize / 2) : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + n.textBlock.fontSize / 2 + 5) : (q.x = "inside" === this.labelPlacement ? 0 > this.labelAngle ? q.x : q.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : q.x - (0 > this.labelAngle ? n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), q.y = "inside" === this.labelPlacement ? 0 > this.labelAngle ? q.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - Math.abs(n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + 5) : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + Math.abs(0 > this.labelAngle ? n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5)), n.textBlock.x = q.x, n.textBlock.y = q.y));
          "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
            for (k = 0; k < a._labels.length; k++)
              if (n = a._labels[k], !(n.position < a.viewportMinimum || n.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(n.position), a.tickThickness)) {
                a.ctx.lineWidth = a.tickThickness;
                a.ctx.strokeStyle = a.tickColor;
                var b2 = 1 === a.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0;
                a.ctx.save();
                a.ctx.beginPath();
                a.ctx.moveTo(b2, q.y << 0);
                a.ctx.lineTo(b2, q.y - a.tickLength << 0);
                a.ctx.stroke();
                a.ctx.restore();
              }
          }, this);
          this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y2 - this._titleTextBlock.height + this._titleTextBlock.fontSize / 2 - 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
        } else if ("top" === this._position) {
          for (k = 0; k < this._labels.length; k++)
            n = this._labels[k], n.position < this.viewportMinimum || n.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(n.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0, this.ctx.beginPath(), this.ctx.moveTo(b, q.y << 0), this.ctx.lineTo(b, q.y - this.tickLength << 0), this.ctx.stroke()), d && 0 !== g++ % 2 && this.labelAutoFit || (0 === n.textBlock.angle ? (q.x -= n.textBlock.width / 2, q.y = "inside" === this.labelPlacement ? q.y + this.labelFontSize / 2 + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) + n.textBlock.height - n.textBlock.fontSize / 2)) : (q.x = "inside" === this.labelPlacement ? 0 < this.labelAngle ? q.x : q.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : q.x + (n.textBlock.height - this.labelFontSize) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), q.y = "inside" === this.labelPlacement ? 0 < this.labelAngle ? q.y + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) + ((n.textBlock.height - n.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))), n.textBlock.x = q.x, n.textBlock.y = q.y));
          "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
            for (k = 0; k < a._labels.length; k++)
              if (n = a._labels[k], !(n.position < a.viewportMinimum || n.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(n.position), a.tickThickness)) {
                a.ctx.lineWidth = a.tickThickness;
                a.ctx.strokeStyle = a.tickColor;
                var b2 = 1 === a.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0;
                a.ctx.save();
                a.ctx.beginPath();
                a.ctx.moveTo(b2, q.y << 0);
                a.ctx.lineTo(b2, q.y + a.tickLength << 0);
                a.ctx.stroke();
                a.ctx.restore();
              }
          }, this);
          this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y1 + this._titleTextBlock.fontSize / 2 + 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
        } else if ("left" === this._position) {
          for (k = 0; k < this._labels.length; k++)
            n = this._labels[k], n.position < this.viewportMinimum || n.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(n.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0, this.ctx.beginPath(), this.ctx.moveTo(q.x << 0, b), this.ctx.lineTo(q.x - this.tickLength << 0, b), this.ctx.stroke()), d && 0 !== g++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (n.textBlock.y = q.y, n.textBlock.x = "inside" === this.labelPlacement ? q.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5) : (n.textBlock.y = "inside" === this.labelPlacement ? q.y : q.y - n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), n.textBlock.x = "inside" === this.labelPlacement ? q.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : 0 < this.labelAngle ? q.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5 : q.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (n.textBlock.height - n.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength))));
          "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
            for (k = 0; k < a._labels.length; k++)
              if (n = a._labels[k], !(n.position < a.viewportMinimum || n.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(n.position), a.tickThickness)) {
                a.ctx.lineWidth = a.tickThickness;
                a.ctx.strokeStyle = a.tickColor;
                var b2 = 1 === a.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0;
                a.ctx.save();
                a.ctx.beginPath();
                a.ctx.moveTo(q.x << 0, b2);
                a.ctx.lineTo(q.x + a.tickLength << 0, b2);
                a.ctx.stroke();
                a.ctx.restore();
              }
          }, this);
          this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x1 + this._titleTextBlock.fontSize / 2 + 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
        } else if ("right" === this._position) {
          for (k = 0; k < this._labels.length; k++)
            n = this._labels[k], n.position < this.viewportMinimum || n.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(n.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0, this.ctx.beginPath(), this.ctx.moveTo(q.x << 0, b), this.ctx.lineTo(q.x + this.tickLength << 0, b), this.ctx.stroke()), d && 0 !== g++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (n.textBlock.y = q.y, n.textBlock.x = "inside" === this.labelPlacement ? q.x - n.textBlock.width - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5) : (n.textBlock.y = "inside" === this.labelPlacement ? q.y - n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0 > this.labelAngle ? q.y : q.y - (n.textBlock.height - n.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), n.textBlock.x = "inside" === this.labelPlacement ? q.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : 0 < this.labelAngle ? q.x + (n.textBlock.height - n.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? 0 : this.tickLength) : q.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5)));
          "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
            for (k = 0; k < a._labels.length; k++)
              if (n = a._labels[k], !(n.position < a.viewportMinimum || n.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(n.position), a.tickThickness)) {
                a.ctx.lineWidth = a.tickThickness;
                a.ctx.strokeStyle = a.tickColor;
                var b2 = 1 === a.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0;
                a.ctx.save();
                a.ctx.beginPath();
                a.ctx.moveTo(q.x << 0, b2);
                a.ctx.lineTo(q.x - a.tickLength << 0, b2);
                a.ctx.stroke();
                a.ctx.restore();
              }
          }, this);
          this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x2 - this._titleTextBlock.fontSize / 2 - 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
        }
        g = 0;
        if ("inside" === this.labelPlacement)
          this.chart.addEventListener("dataAnimationIterationEnd", function() {
            for (k = 0; k < a._labels.length; k++)
              n = a._labels[k], n.position < a.viewportMinimum || (n.position > a.viewportMaximum || d && 0 !== g++ % 2 && a.labelAutoFit) || (a.ctx.save(), a.ctx.beginPath(), n.textBlock.render(true), a.ctx.restore());
          }, this);
        else
          for (k = 0; k < this._labels.length; k++)
            n = this._labels[k], n.position < this.viewportMinimum || (n.position > this.viewportMaximum || d && 0 !== g++ % 2 && this.labelAutoFit) || n.textBlock.render(true);
      };
      C.prototype.renderInterlacedColors = function() {
        var a = this.chart.plotArea.ctx, d, c, b = this.chart.plotArea, e = 0;
        d = true;
        if (("bottom" === this._position || "top" === this._position) && this.interlacedColor)
          for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++)
            d ? (d = this.getPixelCoordinatesOnAxis(this._labels[e].position), c = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(Math.min(c.x, d.x), b.y1, Math.abs(c.x - d.x), Math.abs(b.y1 - b.y2)), d = false) : d = true;
        else if (("left" === this._position || "right" === this._position) && this.interlacedColor)
          for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++)
            d ? (c = this.getPixelCoordinatesOnAxis(this._labels[e].position), d = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(b.x1, Math.min(c.y, d.y), Math.abs(b.x1 - b.x2), Math.abs(d.y - c.y)), d = false) : d = true;
        a.beginPath();
      };
      C.prototype.renderStripLinesOfThicknessType = function(a) {
        if (this.stripLines && 0 < this.stripLines.length && a) {
          var d = this, c, b, e = 0, g = 0, h2 = false;
          b = false;
          for (var l2 = [], u2 = [], k = false, e = 0; e < this.stripLines.length; e++) {
            var m = this.stripLines[e];
            m._thicknessType === a && ("pixel" === a && (m.value < this.viewportMinimum || m.value > this.viewportMaximum || r(m.value) || isNaN(this.range)) || "value" === a && (m.startValue <= this.viewportMinimum && m.endValue <= this.viewportMinimum || m.startValue >= this.viewportMaximum && m.endValue >= this.viewportMaximum || r(m.startValue) || r(m.endValue) || isNaN(this.range)) || l2.push(m));
          }
          for (e = 0; e < this._stripLineLabels.length; e++)
            if (m = this.stripLines[e], c = this._stripLineLabels[e], !(c.position < this.viewportMinimum || c.position > this.viewportMaximum || isNaN(this.range)))
              if (b = this.getPixelCoordinatesOnAxis(c.position), "outside" === c.stripLine.labelPlacement) {
                m && (this.ctx.strokeStyle = m.color, this.ctx.lineWidth = "pixel" === m._thicknessType ? m.thickness : this.tickThickness);
                if ("bottom" === this._position) {
                  var n = 1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0;
                  this.ctx.beginPath();
                  this.ctx.moveTo(n, b.y << 0);
                  this.ctx.lineTo(n, b.y + this.tickLength << 0);
                  this.ctx.stroke();
                  0 === this.labelAngle ? (b.x -= c.textBlock.width / 2, b.y += this.tickLength + c.textBlock.fontSize / 2 + 5) : (b.x -= 0 > this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, b.y += this.tickLength + Math.abs(0 > this.labelAngle ? c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5));
                } else
                  "top" === this._position ? (n = 1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0, this.ctx.beginPath(), this.ctx.moveTo(n, b.y << 0), this.ctx.lineTo(n, b.y - this.tickLength << 0), this.ctx.stroke(), 0 === this.labelAngle ? (b.x -= c.textBlock.width / 2, b.y -= this.tickLength + c.textBlock.height - c.textBlock.fontSize / 2) : (b.x += (c.textBlock.height - this.tickLength - this.labelFontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), b.y -= this.tickLength + (c.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))) : "left" === this._position ? (n = 1 === this.ctx.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, this.ctx.beginPath(), this.ctx.moveTo(b.x << 0, n), this.ctx.lineTo(b.x - this.tickLength << 0, n), this.ctx.stroke(), 0 === this.labelAngle ? b.x = b.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : (b.y -= c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), b.x = 0 < this.labelAngle ? b.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : b.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (c.textBlock.height - c.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - this.tickLength)) : "right" === this._position && (n = 1 === this.ctx.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, this.ctx.beginPath(), this.ctx.moveTo(b.x << 0, n), this.ctx.lineTo(b.x + this.tickLength << 0, n), this.ctx.stroke(), 0 === this.labelAngle ? b.x = b.x + this.tickLength + 5 : (b.y = 0 > this.labelAngle ? b.y : b.y - (c.textBlock.height - c.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), b.x = 0 < this.labelAngle ? b.x + (c.textBlock.height - c.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + this.tickLength : b.x + this.tickLength + 5));
                c.textBlock.x = b.x;
                c.textBlock.y = b.y;
                u2.push(c);
              } else
                m._thicknessType === a && (c.textBlock.angle = -90, "bottom" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[e].labelMaxWidth ? this.options.stripLines[e].labelMaxWidth : this.chart.plotArea.height - 3, c.textBlock.measureText(), b.x - c.textBlock.height - m.thickness / 2 > this.chart.plotArea.x1 ? r(m.startValue) ? b.x -= c.textBlock.height - c.textBlock.fontSize / 2 + m.thickness / 2 : b.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : (c.textBlock.angle = 90, r(m.startValue) ? b.x += c.textBlock.height - c.textBlock.fontSize / 2 + m.thickness / 2 : b.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2), b.y = -90 === c.textBlock.angle ? "near" === c.stripLine.labelAlign ? this.chart.plotArea.y2 - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + c.textBlock.width) / 2 : this.chart.plotArea.y1 + c.textBlock.width + 3 : "near" === c.stripLine.labelAlign ? this.chart.plotArea.y2 - c.textBlock.width - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2 : this.chart.plotArea.y1 + 3) : "top" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[e].labelMaxWidth ? this.options.stripLines[e].labelMaxWidth : this.chart.plotArea.height - 3, c.textBlock.measureText(), b.x - c.textBlock.height - m.thickness / 2 > this.chart.plotArea.x1 ? r(m.startValue) ? b.x -= c.textBlock.height - c.textBlock.fontSize / 2 + m.thickness / 2 : b.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : (c.textBlock.angle = 90, r(m.startValue) ? b.x += c.textBlock.height - c.textBlock.fontSize / 2 + m.thickness / 2 : b.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2), b.y = -90 === c.textBlock.angle ? "near" === c.stripLine.labelAlign ? this.chart.plotArea.y1 + c.textBlock.width + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + c.textBlock.width) / 2 : this.chart.plotArea.y2 - 3 : "near" === c.stripLine.labelAlign ? this.chart.plotArea.y1 + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2 : this.chart.plotArea.y2 - c.textBlock.width - 3) : "left" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[e].labelMaxWidth ? this.options.stripLines[e].labelMaxWidth : this.chart.plotArea.width - 3, c.textBlock.angle = 0, c.textBlock.measureText(), b.y - c.textBlock.height - m.thickness / 2 > this.chart.plotArea.y1 ? r(m.startValue) ? b.y -= c.textBlock.height - c.textBlock.fontSize / 2 + m.thickness / 2 : b.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : r(m.startValue) ? b.y += c.textBlock.height - c.textBlock.fontSize / 2 + m.thickness / 2 : b.y += c.textBlock.height / 2 - c.textBlock.fontSize + 3, b.x = "near" === c.stripLine.labelAlign ? this.chart.plotArea.x1 + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2 : this.chart.plotArea.x2 - c.textBlock.width - 3) : "right" === this._position && (c.textBlock.maxWidth = this.options.stripLines[e].labelMaxWidth ? this.options.stripLines[e].labelMaxWidth : this.chart.plotArea.width - 3, c.textBlock.angle = 0, c.textBlock.measureText(), b.y - c.textBlock.height - m.thickness / 2 > this.chart.plotArea.y1 ? r(m.startValue) ? b.y -= c.textBlock.height - c.textBlock.fontSize / 2 + m.thickness / 2 : b.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : r(m.startValue) ? b.y += c.textBlock.height - c.textBlock.fontSize / 2 + m.thickness / 2 : b.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3, b.x = "near" === c.stripLine.labelAlign ? this.chart.plotArea.x2 - c.textBlock.width - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2 : this.chart.plotArea.x1 + 3), c.textBlock.x = b.x, c.textBlock.y = b.y, u2.push(c));
          if (!k) {
            b = false;
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
            this.ctx.clip();
            for (e = 0; e < l2.length; e++)
              m = l2[e], m.showOnTop ? h2 || (h2 = true, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                this.ctx.save();
                this.ctx.beginPath();
                this.ctx.rect(
                  this.chart.plotArea.x1,
                  this.chart.plotArea.y1,
                  this.chart.plotArea.width,
                  this.chart.plotArea.height
                );
                this.ctx.clip();
                for (g = 0; g < l2.length; g++)
                  m = l2[g], m.showOnTop && m.render();
                this.ctx.restore();
              }, m)) : m.render();
            for (e = 0; e < u2.length; e++)
              c = u2[e], c.stripLine.showOnTop ? b || (b = true, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                for (g = 0; g < u2.length; g++)
                  c = u2[g], "inside" === c.stripLine.labelPlacement && c.stripLine.showOnTop && (d.ctx.save(), d.ctx.beginPath(), d.ctx.rect(d.chart.plotArea.x1, d.chart.plotArea.y1, d.chart.plotArea.width, d.chart.plotArea.height), d.ctx.clip(), c.textBlock.render(true), d.ctx.restore());
              }, c.textBlock)) : "inside" === c.stripLine.labelPlacement && c.textBlock.render(true);
            this.ctx.restore();
            k = true;
          }
          if (k)
            for (b = false, e = 0; e < u2.length; e++)
              c = u2[e], "outside" === c.stripLine.labelPlacement && c.textBlock.render(true);
        }
      };
      C.prototype.renderBreaksBackground = function() {
        this.chart._breaksCanvas && (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length && this.maskCanvas) && (this.chart._breaksCanvasCtx.save(), this.chart._breaksCanvasCtx.beginPath(), this.chart._breaksCanvasCtx.rect(
          this.chart.plotArea.x1,
          this.chart.plotArea.y1,
          this.chart.plotArea.width,
          this.chart.plotArea.height
        ), this.chart._breaksCanvasCtx.clip(), this.chart._breaksCanvasCtx.drawImage(this.maskCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx.restore());
      };
      C.prototype.createMask = function() {
        if (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length) {
          var a = this.scaleBreaks._appliedBreaks;
          u ? (this.maskCanvas = va(this.chart.width, this.chart.height), this.maskCtx = this.maskCanvas.getContext("2d")) : (this.maskCanvas = this.chart.plotArea.canvas, this.maskCtx = this.chart.plotArea.ctx);
          this.maskCtx.save();
          this.maskCtx.beginPath();
          this.maskCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
          this.maskCtx.clip();
          for (var d = 0; d < a.length; d++)
            a[d].endValue < this.viewportMinimum || (a[d].startValue > this.viewportMaximum || isNaN(this.range)) || a[d].render(this.maskCtx);
          this.maskCtx.restore();
        }
      };
      C.prototype.renderCrosshair = function(a, d) {
        isFinite(this.minimum) && isFinite(this.maximum) && this.crosshair.render(a, d);
      };
      C.prototype.showCrosshair = function(a) {
        r(a) || (a < this.viewportMinimum || a > this.viewportMaximum) || ("top" === this._position || "bottom" === this._position ? this.crosshair.render(this.convertValueToPixel(a), null, a) : this.crosshair.render(null, this.convertValueToPixel(a), a));
      };
      C.prototype.renderGrid = function() {
        if (this.gridThickness && 0 < this.gridThickness) {
          var a = this.chart.ctx;
          a.save();
          var d, c = this.chart.plotArea;
          a.lineWidth = this.gridThickness;
          a.strokeStyle = this.gridColor;
          a.setLineDash && a.setLineDash(K(this.gridDashType, this.gridThickness));
          if ("bottom" === this._position || "top" === this._position)
            for (b = 0; b < this._labels.length; b++)
              this._labels[b].position < this.viewportMinimum || (this._labels[b].position > this.viewportMaximum || this._labels[b].breaksLabelType) || (a.beginPath(), d = this.getPixelCoordinatesOnAxis(this._labels[b].position), d = 1 === a.lineWidth % 2 ? (d.x << 0) + 0.5 : d.x << 0, a.moveTo(d, c.y1 << 0), a.lineTo(d, c.y2 << 0), a.stroke());
          else if ("left" === this._position || "right" === this._position)
            for (var b = 0; b < this._labels.length; b++)
              this._labels[b].position < this.viewportMinimum || (this._labels[b].position > this.viewportMaximum || this._labels[b].breaksLabelType) || (a.beginPath(), d = this.getPixelCoordinatesOnAxis(this._labels[b].position), d = 1 === a.lineWidth % 2 ? (d.y << 0) + 0.5 : d.y << 0, a.moveTo(c.x1 << 0, d), a.lineTo(c.x2 << 0, d), a.stroke());
          a.restore();
        }
      };
      C.prototype.renderAxisLine = function() {
        var a = this.chart.ctx, d = u ? this.chart._preRenderCtx : a, c = Math.ceil(this.tickThickness / (this.reversed ? -2 : 2)), b = Math.ceil(this.tickThickness / (this.reversed ? 2 : -2)), e, g;
        d.save();
        if ("bottom" === this._position || "top" === this._position) {
          if (this.lineThickness) {
            this.reversed ? (e = this.lineCoordinates.x2, g = this.lineCoordinates.x1) : (e = this.lineCoordinates.x1, g = this.lineCoordinates.x2);
            d.lineWidth = this.lineThickness;
            d.strokeStyle = this.lineColor ? this.lineColor : "black";
            d.setLineDash && d.setLineDash(K(this.lineDashType, this.lineThickness));
            var h2 = 1 === this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + 0.5 : this.lineCoordinates.y1 << 0;
            d.beginPath();
            if (this.scaleBreaks && !r(this.scaleBreaks.firstBreakIndex))
              if (r(this.scaleBreaks.lastBreakIndex))
                e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + b;
              else
                for (var l2 = this.scaleBreaks.firstBreakIndex; l2 <= this.scaleBreaks.lastBreakIndex; l2++)
                  d.moveTo(e, h2), d.lineTo(this.scaleBreaks._appliedBreaks[l2].startPixel + c, h2), e = this.scaleBreaks._appliedBreaks[l2].endPixel + b;
            e && (d.moveTo(e, h2), d.lineTo(g, h2));
            d.stroke();
          }
        } else if (("left" === this._position || "right" === this._position) && this.lineThickness) {
          this.reversed ? (e = this.lineCoordinates.y1, g = this.lineCoordinates.y2) : (e = this.lineCoordinates.y2, g = this.lineCoordinates.y1);
          d.lineWidth = this.lineThickness;
          d.strokeStyle = this.lineColor;
          d.setLineDash && d.setLineDash(K(this.lineDashType, this.lineThickness));
          h2 = 1 === this.lineThickness % 2 ? (this.lineCoordinates.x1 << 0) + 0.5 : this.lineCoordinates.x1 << 0;
          d.beginPath();
          if (this.scaleBreaks && !r(this.scaleBreaks.firstBreakIndex))
            if (r(this.scaleBreaks.lastBreakIndex))
              e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + c;
            else
              for (l2 = this.scaleBreaks.firstBreakIndex; l2 <= this.scaleBreaks.lastBreakIndex; l2++)
                d.moveTo(h2, e), d.lineTo(h2, this.scaleBreaks._appliedBreaks[l2].startPixel + b), e = this.scaleBreaks._appliedBreaks[l2].endPixel + c;
          e && (d.moveTo(h2, e), d.lineTo(h2, g));
          d.stroke();
        }
        u && (a.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx && this.chart._breaksCanvasCtx.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), d.clearRect(
          0,
          0,
          this.chart.width,
          this.chart.height
        ));
        d.restore();
      };
      C.prototype.getPixelCoordinatesOnAxis = function(a) {
        var d = {};
        if ("bottom" === this._position || "top" === this._position)
          d.x = this.convertValueToPixel(a), d.y = this.lineCoordinates.y1;
        if ("left" === this._position || "right" === this._position)
          d.y = this.convertValueToPixel(a), d.x = this.lineCoordinates.x2;
        return d;
      };
      C.prototype.convertPixelToValue = function(a) {
        if ("undefined" === typeof a)
          return null;
        var d = 0, c = 0, b, d = true, e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], c = "number" === typeof a ? a : "left" === this._position || "right" === this._position ? a.y : a.x;
        if (this.logarithmic) {
          a = b = Math.pow(this.logarithmBase, (c - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit);
          if (c <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed)
            for (c = 0; c < e.length; c++) {
              if (!(e[c].endValue < this.conversionParameters.minimum))
                if (d)
                  if (e[c].startValue < this.conversionParameters.minimum) {
                    if (1 < e[c].size && this.conversionParameters.minimum * Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size)) < e[c].endValue) {
                      a = Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size));
                      break;
                    } else
                      a *= e[c].endValue / this.conversionParameters.minimum / Math.pow(e[c].size, Math.log(e[c].endValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue)), b /= Math.pow(e[c].size, Math.log(e[c].endValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue));
                    d = false;
                  } else if (b > e[c].startValue / this.conversionParameters.minimum) {
                    b /= e[c].startValue / this.conversionParameters.minimum;
                    if (b < e[c].size) {
                      a *= Math.pow(e[c].endValue / e[c].startValue, 1 === e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) / b;
                      break;
                    } else
                      a *= e[c].endValue / e[c].startValue / e[c].size;
                    b /= e[c].size;
                    d = false;
                  } else
                    break;
                else if (b > e[c].startValue / e[c - 1].endValue) {
                  b /= e[c].startValue / e[c - 1].endValue;
                  if (b < e[c].size) {
                    a *= Math.pow(e[c].endValue / e[c].startValue, 1 === e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) / b;
                    break;
                  } else
                    a *= e[c].endValue / e[c].startValue / e[c].size;
                  b /= e[c].size;
                } else
                  break;
            }
          else
            for (c = e.length - 1; 0 <= c; c--)
              if (!(e[c].startValue > this.conversionParameters.minimum))
                if (d)
                  if (e[c].endValue > this.conversionParameters.minimum) {
                    if (1 < e[c].size && this.conversionParameters.minimum * Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size)) > e[c].startValue) {
                      a = Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size));
                      break;
                    } else
                      a *= e[c].startValue / this.conversionParameters.minimum * Math.pow(e[c].size, Math.log(e[c].startValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue)) * b, b *= Math.pow(e[c].size, Math.log(this.conversionParameters.minimum / e[c].startValue) / Math.log(e[c].endValue / e[c].startValue));
                    d = false;
                  } else if (b < e[c].endValue / this.conversionParameters.minimum) {
                    b /= e[c].endValue / this.conversionParameters.minimum;
                    if (b > 1 / e[c].size) {
                      a *= Math.pow(e[c].endValue / e[c].startValue, 1 >= e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) * b;
                      break;
                    } else
                      a /= e[c].endValue / e[c].startValue / e[c].size;
                    b *= e[c].size;
                    d = false;
                  } else
                    break;
                else if (b < e[c].endValue / e[c + 1].startValue) {
                  b /= e[c].endValue / e[c + 1].startValue;
                  if (b > 1 / e[c].size) {
                    a *= Math.pow(e[c].endValue / e[c].startValue, 1 >= e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) * b;
                    break;
                  } else
                    a /= e[c].endValue / e[c].startValue / e[c].size;
                  b *= e[c].size;
                } else
                  break;
          d = a * this.viewportMinimum;
        } else {
          a = b = (c - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit;
          if (c <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed)
            for (c = 0; c < e.length; c++) {
              if (!(e[c].endValue < this.conversionParameters.minimum))
                if (d)
                  if (e[c].startValue < this.conversionParameters.minimum) {
                    if (e[c].size && this.conversionParameters.minimum + b * (e[c].endValue - e[c].startValue) / e[c].size < e[c].endValue) {
                      a = 0 >= e[c].size ? 0 : b * (e[c].endValue - e[c].startValue) / e[c].size;
                      break;
                    } else
                      a += e[c].endValue - this.conversionParameters.minimum - e[c].size * (e[c].endValue - this.conversionParameters.minimum) / (e[c].endValue - e[c].startValue), b -= e[c].size * (e[c].endValue - this.conversionParameters.minimum) / (e[c].endValue - e[c].startValue);
                    d = false;
                  } else if (b > e[c].startValue - this.conversionParameters.minimum) {
                    b -= e[c].startValue - this.conversionParameters.minimum;
                    if (b < e[c].size) {
                      a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) - b;
                      break;
                    } else
                      a += e[c].endValue - e[c].startValue - e[c].size;
                    b -= e[c].size;
                    d = false;
                  } else
                    break;
                else if (b > e[c].startValue - e[c - 1].endValue) {
                  b -= e[c].startValue - e[c - 1].endValue;
                  if (b < e[c].size) {
                    a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) - b;
                    break;
                  } else
                    a += e[c].endValue - e[c].startValue - e[c].size;
                  b -= e[c].size;
                } else
                  break;
            }
          else
            for (c = e.length - 1; 0 <= c; c--)
              if (!(e[c].startValue > this.conversionParameters.minimum))
                if (d)
                  if (e[c].endValue > this.conversionParameters.minimum)
                    if (e[c].size && this.conversionParameters.minimum + b * (e[c].endValue - e[c].startValue) / e[c].size > e[c].startValue) {
                      a = 0 >= e[c].size ? 0 : b * (e[c].endValue - e[c].startValue) / e[c].size;
                      break;
                    } else
                      a += e[c].startValue - this.conversionParameters.minimum + e[c].size * (this.conversionParameters.minimum - e[c].startValue) / (e[c].endValue - e[c].startValue), b += e[c].size * (this.conversionParameters.minimum - e[c].startValue) / (e[c].endValue - e[c].startValue), d = false;
                  else if (b < e[c].endValue - this.conversionParameters.minimum) {
                    b -= e[c].endValue - this.conversionParameters.minimum;
                    if (b > -1 * e[c].size) {
                      a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) + b;
                      break;
                    } else
                      a -= e[c].endValue - e[c].startValue - e[c].size;
                    b += e[c].size;
                    d = false;
                  } else
                    break;
                else if (b < e[c].endValue - e[c + 1].startValue) {
                  b -= e[c].endValue - e[c + 1].startValue;
                  if (b > -1 * e[c].size) {
                    a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) + b;
                    break;
                  } else
                    a -= e[c].endValue - e[c].startValue - e[c].size;
                  b += e[c].size;
                } else
                  break;
          d = this.conversionParameters.minimum + a;
        }
        return d;
      };
      C.prototype.convertValueToPixel = function(a) {
        a = this.getApparentDifference(this.conversionParameters.minimum, a, a);
        return this.logarithmic ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * Math.log(a / this.conversionParameters.minimum) / this.conversionParameters.lnLogarithmBase + 0.5 << 0 : "axisX" === this.type ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5 << 0 : this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5;
      };
      C.prototype.getApparentDifference = function(a, d, c, b) {
        var e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
        if (this.logarithmic) {
          c = r(c) ? d / a : c;
          for (var g = 0; g < e.length && !(d < e[g].startValue); g++)
            a > e[g].endValue || (a <= e[g].startValue && d >= e[g].endValue ? c = c / e[g].endValue * e[g].startValue * e[g].size : a >= e[g].startValue && d >= e[g].endValue ? c = c / e[g].endValue * a * Math.pow(e[g].size, Math.log(e[g].endValue / a) / Math.log(e[g].endValue / e[g].startValue)) : a <= e[g].startValue && d <= e[g].endValue ? c = c / d * e[g].startValue * Math.pow(e[g].size, Math.log(d / e[g].startValue) / Math.log(e[g].endValue / e[g].startValue)) : !b && (a > e[g].startValue && d < e[g].endValue) && (c = a * Math.pow(e[g].size, Math.log(d / a) / Math.log(e[g].endValue / e[g].startValue))));
        } else
          for (c = r(c) ? Math.abs(d - a) : c, g = 0; g < e.length && !(d < e[g].startValue); g++)
            a > e[g].endValue || (a <= e[g].startValue && d >= e[g].endValue ? c = c - e[g].endValue + e[g].startValue + e[g].size : a > e[g].startValue && d >= e[g].endValue ? c = c - e[g].endValue + a + e[g].size * (e[g].endValue - a) / (e[g].endValue - e[g].startValue) : a <= e[g].startValue && d < e[g].endValue ? c = c - d + e[g].startValue + e[g].size * (d - e[g].startValue) / (e[g].endValue - e[g].startValue) : !b && (a > e[g].startValue && d < e[g].endValue) && (c = a + e[g].size * (d - a) / (e[g].endValue - e[g].startValue)));
        return c;
      };
      C.prototype.setViewPortRange = function(a, d) {
        this.sessionVariables.newViewportMinimum = this.viewportMinimum = Math.min(a, d);
        this.sessionVariables.newViewportMaximum = this.viewportMaximum = Math.max(a, d);
      };
      C.prototype.getXValueAt = function(a) {
        if (!a)
          return null;
        var d = null;
        "left" === this._position ? d = this.convertPixelToValue(a.y) : "bottom" === this._position && (d = this.convertPixelToValue(a.x));
        return d;
      };
      C.prototype.calculateValueToPixelConversionParameters = function(a) {
        a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
        var d = { pixelPerUnit: null, minimum: null, reference: null }, c = this.lineCoordinates.width, b = this.lineCoordinates.height, c = "bottom" === this._position || "top" === this._position ? c : b, b = Math.abs(this.range);
        if (this.logarithmic)
          for (var e = 0; e < a.length && !(this.viewportMaximum < a[e].startValue); e++)
            this.viewportMinimum > a[e].endValue || (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue ? c = 0 : this.viewportMinimum <= a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b / a[e].endValue * a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100) : c - Math.min(a[e].spacing, 0.1 * c)) : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b / a[e].endValue * this.viewportMinimum, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * Math.log(a[e].endValue / this.viewportMinimum) / Math.log(a[e].endValue / a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * Math.log(a[e].endValue / this.viewportMinimum) / Math.log(a[e].endValue / a[e].startValue)) : this.viewportMinimum <= a[e].startValue && this.viewportMaximum < a[e].endValue && (b = b / this.viewportMaximum * a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * Math.log(this.viewportMaximum / a[e].startValue) / Math.log(a[e].endValue / a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * Math.log(this.viewportMaximum / a[e].startValue) / Math.log(a[e].endValue / a[e].startValue)));
        else
          for (e = 0; e < a.length && !(this.viewportMaximum < a[e].startValue); e++)
            this.viewportMinimum > a[e].endValue || (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue ? c = 0 : this.viewportMinimum <= a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b - a[e].endValue + a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100) : c - Math.min(a[e].spacing, 0.1 * c)) : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b - a[e].endValue + this.viewportMinimum, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * (a[e].endValue - this.viewportMinimum) / (a[e].endValue - a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * (a[e].endValue - this.viewportMinimum) / (a[e].endValue - a[e].startValue)) : this.viewportMinimum <= a[e].startValue && this.viewportMaximum < a[e].endValue && (b = b - this.viewportMaximum + a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * (this.viewportMaximum - a[e].startValue) / (a[e].endValue - a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * (this.viewportMaximum - a[e].startValue) / (a[e].endValue - a[e].startValue)));
        d.minimum = this.viewportMinimum;
        d.maximum = this.viewportMaximum;
        d.range = b;
        if ("bottom" === this._position || "top" === this._position)
          this.logarithmic ? (d.lnLogarithmBase = Math.log(this.logarithmBase), d.pixelPerUnit = (this.reversed ? -1 : 1) * c * d.lnLogarithmBase / Math.log(Math.abs(b))) : d.pixelPerUnit = (this.reversed ? -1 : 1) * c / Math.abs(b), d.reference = this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1;
        if ("left" === this._position || "right" === this._position)
          this.logarithmic ? (d.lnLogarithmBase = Math.log(this.logarithmBase), d.pixelPerUnit = (this.reversed ? 1 : -1) * c * d.lnLogarithmBase / Math.log(Math.abs(b))) : d.pixelPerUnit = (this.reversed ? 1 : -1) * c / Math.abs(b), d.reference = this.reversed ? this.lineCoordinates.y1 : this.lineCoordinates.y2;
        this.conversionParameters = d;
      };
      C.prototype.calculateAxisParameters = function() {
        if (this.logarithmic)
          this.calculateLogarithmicAxisParameters();
        else {
          var a = this.chart.layoutManager.getFreeSpace(), d = false, c = false;
          "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
          var a = "axisX" === this.type ? "xySwapped" === this.chart.plotInfo.axisPlacement ? 62 : 70 : "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 : 40, b = 4;
          "axisX" === this.type && (b = 600 > this.maxWidth ? 8 : 6);
          var a = Math.max(b, Math.floor(this.maxWidth / a)), e, g, h2, b = 0;
          !r(this.options.viewportMinimum) && (!r(this.options.viewportMaximum) && this.options.viewportMinimum >= this.options.viewportMaximum) && (this.viewportMinimum = this.viewportMaximum = null);
          if (r(this.options.viewportMinimum) && !r(this.sessionVariables.newViewportMinimum) && !isNaN(this.sessionVariables.newViewportMinimum))
            this.viewportMinimum = this.sessionVariables.newViewportMinimum;
          else if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
            this.viewportMinimum = this.minimum;
          if (r(this.options.viewportMaximum) && !r(this.sessionVariables.newViewportMaximum) && !isNaN(this.sessionVariables.newViewportMaximum))
            this.viewportMaximum = this.sessionVariables.newViewportMaximum;
          else if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
            this.viewportMaximum = this.maximum;
          if (this.scaleBreaks) {
            for (b = 0; b < this.scaleBreaks._appliedBreaks.length; b++)
              if ((!r(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue || !r(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[b].startValue || !r(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue) && (!r(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue || !r(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[b].endValue || !r(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue)) {
                this.scaleBreaks._appliedBreaks.splice(
                  b,
                  1
                );
                break;
              }
          }
          if ("axisX" === this.type) {
            if (this.dataSeries && 0 < this.dataSeries.length)
              for (e = 0; e < this.dataSeries.length; e++)
                "dateTime" === this.dataSeries[e].xValueType && (c = true);
            e = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin;
            g = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax;
            0 === g - e && (b = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, g += b, e -= b);
            Infinity !== this.dataInfo.minDiff ? h2 = this.dataInfo.minDiff : 1 < g - e ? h2 = 0.5 * Math.abs(g - e) : (h2 = 1, c && (d = true));
          } else
            "axisY" === this.type && (e = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, g = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, isFinite(e) || isFinite(g) ? isFinite(e) ? isFinite(g) || (g = e) : e = g : (g = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, e = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), 0 === e && 0 === g ? (g += 9, e = 0) : 0 === g - e ? (b = Math.min(Math.abs(0.01 * Math.abs(g)), 5), g += b, e -= b) : e > g ? (b = Math.min(0.01 * Math.abs(this.getApparentDifference(g, e, null, true)), 5), 0 <= g ? e = g - b : g = isFinite(e) ? e + b : 0) : (b = Math.min(0.01 * Math.abs(this.getApparentDifference(e, g, null, true)), 0.05), 0 !== g && (g += b), 0 !== e && (e -= b)), h2 = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < g - e ? 0.5 * Math.abs(g - e) : 1, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 0 < e && (e = 0), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 0 > g && (g = 0));
          b = this.getApparentDifference(isNaN(this.viewportMinimum) || null === this.viewportMinimum ? e : this.viewportMinimum, isNaN(this.viewportMaximum) || null === this.viewportMaximum ? g : this.viewportMaximum, null, true);
          if ("axisX" === this.type && c) {
            this.valueType = "dateTime";
            this.intervalType || (b / 1 <= a ? (this.interval = 1, this.intervalType = "millisecond") : b / 2 <= a ? (this.interval = 2, this.intervalType = "millisecond") : b / 5 <= a ? (this.interval = 5, this.intervalType = "millisecond") : b / 10 <= a ? (this.interval = 10, this.intervalType = "millisecond") : b / 20 <= a ? (this.interval = 20, this.intervalType = "millisecond") : b / 50 <= a ? (this.interval = 50, this.intervalType = "millisecond") : b / 100 <= a ? (this.interval = 100, this.intervalType = "millisecond") : b / 200 <= a ? (this.interval = 200, this.intervalType = "millisecond") : b / 250 <= a ? (this.interval = 250, this.intervalType = "millisecond") : b / 300 <= a ? (this.interval = 300, this.intervalType = "millisecond") : b / 400 <= a ? (this.interval = 400, this.intervalType = "millisecond") : b / 500 <= a ? (this.interval = 500, this.intervalType = "millisecond") : b / (1 * V.secondDuration) <= a ? (this.interval = 1, this.intervalType = "second") : b / (2 * V.secondDuration) <= a ? (this.interval = 2, this.intervalType = "second") : b / (5 * V.secondDuration) <= a ? (this.interval = 5, this.intervalType = "second") : b / (10 * V.secondDuration) <= a ? (this.interval = 10, this.intervalType = "second") : b / (15 * V.secondDuration) <= a ? (this.interval = 15, this.intervalType = "second") : b / (20 * V.secondDuration) <= a ? (this.interval = 20, this.intervalType = "second") : b / (30 * V.secondDuration) <= a ? (this.interval = 30, this.intervalType = "second") : b / (1 * V.minuteDuration) <= a ? (this.interval = 1, this.intervalType = "minute") : b / (2 * V.minuteDuration) <= a ? (this.interval = 2, this.intervalType = "minute") : b / (5 * V.minuteDuration) <= a ? (this.interval = 5, this.intervalType = "minute") : b / (10 * V.minuteDuration) <= a ? (this.interval = 10, this.intervalType = "minute") : b / (15 * V.minuteDuration) <= a ? (this.interval = 15, this.intervalType = "minute") : b / (20 * V.minuteDuration) <= a ? (this.interval = 20, this.intervalType = "minute") : b / (30 * V.minuteDuration) <= a ? (this.interval = 30, this.intervalType = "minute") : b / (1 * V.hourDuration) <= a ? (this.interval = 1, this.intervalType = "hour") : b / (2 * V.hourDuration) <= a ? (this.interval = 2, this.intervalType = "hour") : b / (3 * V.hourDuration) <= a ? (this.interval = 3, this.intervalType = "hour") : b / (6 * V.hourDuration) <= a ? (this.interval = 6, this.intervalType = "hour") : b / (1 * V.dayDuration) <= a ? (this.interval = 1, this.intervalType = "day") : b / (2 * V.dayDuration) <= a ? (this.interval = 2, this.intervalType = "day") : b / (4 * V.dayDuration) <= a ? (this.interval = 4, this.intervalType = "day") : b / (1 * V.weekDuration) <= a ? (this.interval = 1, this.intervalType = "week") : b / (2 * V.weekDuration) <= a ? (this.interval = 2, this.intervalType = "week") : b / (3 * V.weekDuration) <= a ? (this.interval = 3, this.intervalType = "week") : b / (1 * V.monthDuration) <= a ? (this.interval = 1, this.intervalType = "month") : b / (2 * V.monthDuration) <= a ? (this.interval = 2, this.intervalType = "month") : b / (3 * V.monthDuration) <= a ? (this.interval = 3, this.intervalType = "month") : b / (6 * V.monthDuration) <= a ? (this.interval = 6, this.intervalType = "month") : (this.interval = b / (1 * V.yearDuration) <= a ? 1 : b / (2 * V.yearDuration) <= a ? 2 : b / (4 * V.yearDuration) <= a ? 4 : Math.floor(C.getNiceNumber(b / (a - 1), true) / V.yearDuration), this.intervalType = "year"));
            if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
              this.viewportMinimum = e - h2 / 2;
            if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
              this.viewportMaximum = g + h2 / 2;
            d ? this.autoValueFormatString = "MMM DD YYYY HH:mm" : "year" === this.intervalType ? this.autoValueFormatString = "YYYY" : "month" === this.intervalType ? this.autoValueFormatString = "MMM YYYY" : "week" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "day" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "hour" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "minute" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.autoValueFormatString = "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.autoValueFormatString = "fff'ms'");
            this.valueFormatString || (this.valueFormatString = this.autoValueFormatString);
          } else {
            this.intervalType = "number";
            b = C.getNiceNumber(b, false);
            this.interval = this.options && 0 < this.options.interval ? this.options.interval : C.getNiceNumber(b / (a - 1), true);
            if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
              this.viewportMinimum = "axisX" === this.type ? e - h2 / 2 : Math.floor(e / this.interval) * this.interval;
            if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
              this.viewportMaximum = "axisX" === this.type ? g + h2 / 2 : Math.ceil(g / this.interval) * this.interval;
            0 === this.viewportMaximum && 0 === this.viewportMinimum && (0 === this.options.viewportMinimum ? this.viewportMaximum += 10 : 0 === this.options.viewportMaximum && (this.viewportMinimum -= 10), this.options && "undefined" === typeof this.options.interval && (this.interval = C.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), true)));
          }
          if (null === this.minimum || null === this.maximum)
            if ("axisX" === this.type ? (e = null !== this.minimum ? this.minimum : this.dataInfo.min, g = null !== this.maximum ? this.maximum : this.dataInfo.max, 0 === g - e && (b = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, g += b, e -= b), h2 = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < g - e ? 0.5 * Math.abs(g - e) : 1) : "axisY" === this.type && (e = null !== this.minimum ? this.minimum : this.dataInfo.min, g = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(e) || isFinite(g) ? 0 === e && 0 === g ? (g += 9, e = 0) : 0 === g - e ? (b = Math.min(Math.abs(0.01 * Math.abs(g)), 5), g += b, e -= b) : e > g ? (b = Math.min(0.01 * Math.abs(this.getApparentDifference(g, e, null, true)), 5), 0 <= g ? e = g - b : g = isFinite(e) ? e + b : 0) : (b = Math.min(0.01 * Math.abs(this.getApparentDifference(e, g, null, true)), 0.05), 0 !== g && (g += b), 0 !== e && (e -= b)) : (g = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, e = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), h2 = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < g - e ? 0.5 * Math.abs(g - e) : 1, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 0 < e && (e = 0), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 0 > g && (g = 0)), Math.abs(this.getApparentDifference(e, g, null, true)), "axisX" === this.type && c) {
              this.valueType = "dateTime";
              if (null === this.minimum || isNaN(this.minimum))
                this.minimum = e - h2 / 2, this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum);
              if (null === this.maximum || isNaN(this.maximum))
                this.maximum = g + h2 / 2, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum);
            } else
              this.intervalType = this.valueType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? e - h2 / 2 : Math.floor(e / this.interval) * this.interval, this.minimum = Math.min(
                this.minimum,
                null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum
              )), null === this.maximum && (this.maximum = "axisX" === this.type ? g + h2 / 2 : Math.ceil(g / this.interval) * this.interval, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum)), 0 === this.maximum && 0 === this.minimum && (0 === this.options.minimum ? this.maximum += 10 : 0 === this.options.maximum && (this.minimum -= 10));
          r(this.sessionVariables.newViewportMinimum) && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
          r(this.sessionVariables.newViewportMaximum) && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
          this.range = this.viewportMaximum - this.viewportMinimum;
          this.intervalStartPosition = "axisX" === this.type && c ? this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval) : Math.floor((this.viewportMinimum + 0.2 * this.interval) / this.interval) * this.interval;
          this.valueFormatString || (this.valueFormatString = C.generateValueFormatString(this.range, 2));
        }
      };
      C.prototype.calculateLogarithmicAxisParameters = function() {
        var a = this.chart.layoutManager.getFreeSpace(), d = Math.log(this.logarithmBase), c;
        "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
        var a = "axisX" === this.type ? 500 > this.maxWidth ? 7 : Math.max(7, Math.floor(this.maxWidth / 100)) : Math.max(Math.floor(this.maxWidth / 50), 3), b, e, g, h2;
        h2 = 1;
        if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
          this.viewportMinimum = this.minimum;
        if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
          this.viewportMaximum = this.maximum;
        if (this.scaleBreaks) {
          for (h2 = 0; h2 < this.scaleBreaks._appliedBreaks.length; h2++)
            if ((!r(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[h2].startValue || !r(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[h2].startValue || !r(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[h2].startValue) && (!r(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[h2].endValue || !r(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[h2].endValue || !r(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[h2].endValue)) {
              this.scaleBreaks._appliedBreaks.splice(h2, 1);
              break;
            }
        }
        "axisX" === this.type ? (b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 1 === e / b && (h2 = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), e *= h2, b /= h2), g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 0 >= b && !isFinite(e) ? (e = "undefined" === typeof this.options.interval ? 0 : this.options.interval, b = 1) : 0 >= b ? b = e : isFinite(e) || (e = b), 1 === b && 1 === e ? (e *= this.logarithmBase - 1 / this.logarithmBase, b = 1) : 1 === e / b ? (h2 = Math.min(e * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), e *= h2, b /= h2) : b > e ? (h2 = Math.min(b / e * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), 1 <= e ? b = e / h2 : e = b * h2) : (h2 = Math.min(e / b * Math.pow(
          this.logarithmBase,
          0.01
        ), Math.pow(this.logarithmBase, 0.04)), 1 !== e && (e *= h2), 1 !== b && (b /= h2)), g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 1 < b && (b = 1), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 1 > e && (e = 1));
        h2 = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) / (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? b : this.viewportMinimum);
        var l2 = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) - (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? b : this.viewportMinimum);
        this.intervalType = "number";
        h2 = Math.pow(this.logarithmBase, C.getNiceNumber(Math.abs(Math.log(h2) / d), false));
        this.options && 0 < this.options.interval ? this.interval = this.options.interval : (this.interval = C.getNiceExponent(Math.log(h2) / d / (a - 1), true), c = C.getNiceNumber(l2 / (a - 1), true));
        if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
          this.viewportMinimum = "axisX" === this.type ? b / Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(b) / d / this.interval));
        if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
          this.viewportMaximum = "axisX" === this.type ? e * Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / d / this.interval));
        1 === this.viewportMaximum && 1 === this.viewportMinimum && (1 === this.options.viewportMinimum ? this.viewportMaximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.viewportMaximum && (this.viewportMinimum /= this.logarithmBase - 1 / this.logarithmBase), this.options && "undefined" === typeof this.options.interval && (this.interval = C.getNiceExponent(Math.ceil(Math.log(h2) / d) / (a - 1)), c = C.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), true)));
        if (null === this.minimum || null === this.maximum)
          "axisX" === this.type ? (b = null !== this.minimum ? this.minimum : this.dataInfo.min, e = null !== this.maximum ? this.maximum : this.dataInfo.max, 1 === e / b && (h2 = Math.pow(
            this.logarithmBase,
            "undefined" === typeof this.options.interval ? 0.4 : this.options.interval
          ), e *= h2, b /= h2), g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (b = null !== this.minimum ? this.minimum : this.dataInfo.min, e = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(b) || isFinite(e) ? 1 === b && 1 === e ? (e *= this.logarithmBase, b /= this.logarithmBase) : 1 === e / b ? (h2 = Math.pow(this.logarithmBase, this.interval), e *= h2, b /= h2) : b > e ? (h2 = Math.min(0.01 * (b / e), 5), 1 <= e ? b = e / h2 : e = b * h2) : (h2 = Math.min(e / b * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== e && (e *= h2), 1 !== b && (b /= h2)) : (e = "undefined" === typeof this.options.interval ? 0 : this.options.interval, b = 1), g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 1 < b && (b = 1), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 1 > e && (e = 1)), this.intervalType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? b / Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(b) / d / this.interval)), r(null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum) || (this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum))), null === this.maximum && (this.maximum = "axisX" === this.type ? e * Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / d / this.interval)), r(null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum) || (this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum))), 1 === this.maximum && 1 === this.minimum && (1 === this.options.minimum ? this.maximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.maximum && (this.minimum /= this.logarithmBase - 1 / this.logarithmBase));
        this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
        this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum);
        this.viewportMinimum > this.viewportMaximum && (!this.options.viewportMinimum && !this.options.minimum || this.options.viewportMaximum || this.options.maximum ? this.options.viewportMinimum || this.options.minimum || !this.options.viewportMaximum && !this.options.maximum || (this.viewportMinimum = this.minimum = (this.options.viewportMaximum || this.options.maximum) / Math.pow(this.logarithmBase, 2 * Math.ceil(this.interval))) : this.viewportMaximum = this.maximum = this.options.viewportMinimum || this.options.minimum);
        b = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (d * this.interval) + 0.2) * this.interval);
        this.range = this.viewportMaximum / this.viewportMinimum;
        this.noTicks = a;
        if (!this.options.interval && this.range < Math.pow(this.logarithmBase, 8 > this.viewportMaximum || 3 > a ? 2 : 3)) {
          for (d = Math.floor(this.viewportMinimum / c + 0.5) * c; d < this.viewportMinimum; )
            d += c;
          this.equidistantInterval = false;
          this.intervalStartPosition = d;
          this.interval = c;
        } else
          this.options.interval || (c = Math.ceil(this.interval), this.range > this.interval && (this.interval = c, b = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (d * this.interval) + 0.2) * this.interval))), this.equidistantInterval = true, this.intervalStartPosition = b;
        if (!this.valueFormatString && (this.valueFormatString = "#,##0.##", 1 > this.viewportMinimum)) {
          d = Math.floor(Math.abs(Math.log(this.viewportMinimum) / Math.LN10)) + 2;
          if (isNaN(d) || !isFinite(d))
            d = 2;
          if (2 < d)
            for (h2 = 0; h2 < d - 2; h2++)
              this.valueFormatString += "#";
        }
      };
      C.generateValueFormatString = function(a, d) {
        var c = "#,##0.", b = d;
        1 > a && (b += Math.floor(Math.abs(Math.log(a) / Math.LN10)), isNaN(b) || !isFinite(b)) && (b = d);
        for (var e = 0; e < b; e++)
          c += "#";
        return c;
      };
      C.getNiceExponent = function(a, d) {
        var c = Math.floor(Math.log(a) / Math.LN10), b = a / Math.pow(10, c), b = 0 > c ? 1 >= b ? 1 : 5 >= b ? 5 : 10 : Math.max(Math.floor(b), 1);
        return -20 > c ? Number(b * Math.pow(10, c)) : Number((b * Math.pow(10, c)).toFixed(20));
      };
      C.getNiceNumber = function(a, d) {
        var c = Math.floor(Math.log(a) / Math.LN10), b = a / Math.pow(10, c), b = d ? 1.5 > b ? 1 : 3 > b ? 2 : 7 > b ? 5 : 10 : 1 >= b ? 1 : 2 >= b ? 2 : 5 >= b ? 5 : 10;
        return -20 > c ? Number(b * Math.pow(10, c)) : Number((b * Math.pow(10, c)).toFixed(20));
      };
      C.prototype.getLabelStartPoint = function() {
        var a = V[this.intervalType + "Duration"] * this.interval, a = new Date(Math.floor(this.viewportMinimum / a) * a);
        if ("millisecond" !== this.intervalType)
          if ("second" === this.intervalType)
            0 < a.getMilliseconds() && (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
          else if ("minute" === this.intervalType) {
            if (0 < a.getSeconds() || 0 < a.getMilliseconds())
              a.setMinutes(a.getMinutes() + 1), a.setSeconds(0), a.setMilliseconds(0);
          } else if ("hour" === this.intervalType) {
            if (0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
              a.setHours(a.getHours() + 1), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
          } else if ("day" === this.intervalType) {
            if (0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
              a.setDate(a.getDate() + 1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
          } else if ("week" === this.intervalType) {
            if (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
              a.setDate(a.getDate() + (7 - a.getDay())), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
          } else if ("month" === this.intervalType) {
            if (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
              a.setMonth(a.getMonth() + 1), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
          } else
            "year" === this.intervalType && (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setFullYear(a.getFullYear() + 1), a.setMonth(0), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0));
        return a;
      };
      pa(ga2, L);
      pa(ba2, L);
      ba2.prototype.createUserOptions = function(a) {
        if ("undefined" !== typeof a || this.options._isPlaceholder) {
          var d = 0;
          this.parent.options._isPlaceholder && this.parent.createUserOptions();
          this.options._isPlaceholder || (Fa(this.parent[this.optionsName]), d = this.parent.options[this.optionsName].indexOf(this.options));
          this.options = "undefined" === typeof a ? {} : a;
          this.parent.options[this.optionsName][d] = this.options;
        }
      };
      ba2.prototype.render = function(a) {
        if (0 !== this.spacing || 0 !== this.options.lineThickness && ("undefined" !== typeof this.options.lineThickness || 0 !== this.parent.lineThickness)) {
          var d = this.ctx, c = this.ctx.globalAlpha;
          this.ctx = a || this.ctx;
          this.ctx.save();
          this.ctx.beginPath();
          this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
          this.ctx.clip();
          var b = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.startValue), e = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.endValue);
          this.ctx.strokeStyle = this.lineColor;
          this.ctx.fillStyle = this.color;
          this.ctx.beginPath();
          this.ctx.globalAlpha = 1;
          Z(this.id);
          var g, h2, l2, r2, k, m;
          a = Math.max(this.spacing, 3);
          var n = Math.max(0, this.lineThickness);
          this.ctx.lineWidth = n;
          this.ctx.setLineDash && this.ctx.setLineDash(K(this.lineDashType, n));
          if ("bottom" === this.scaleBreaks.parent._position || "top" === this.scaleBreaks.parent._position)
            if (b = 1 === n % 2 ? (b.x << 0) + 0.5 : b.x << 0, h2 = 1 === n % 2 ? (e.x << 0) + 0.5 : e.x << 0, "top" === this.scaleBreaks.parent._position ? (e = this.chart.plotArea.y1, l2 = this.chart.plotArea.y2 + n / 2 + 0.5 << 0) : (e = this.chart.plotArea.y2, l2 = this.chart.plotArea.y1 - n / 2 + 0.5 << 0, a *= -1), this.bounds = { x1: b - n / 2, y1: e, x2: h2 + n / 2, y2: l2 }, this.ctx.moveTo(b, e), "straight" === this.type || "top" === this.scaleBreaks.parent._position && 0 >= a || "bottom" === this.scaleBreaks.parent._position && 0 <= a)
              this.ctx.lineTo(b, l2), this.ctx.lineTo(h2, l2), this.ctx.lineTo(h2, e);
            else if ("wavy" === this.type) {
              r2 = b;
              k = e;
              g = 0.5;
              m = (l2 - k) / a / 3;
              for (var q = 0; q < m; q++)
                this.ctx.bezierCurveTo(r2 + g * a, k + a, r2 + g * a, k + 2 * a, r2, k + 3 * a), k += 3 * a, g *= -1;
              this.ctx.bezierCurveTo(r2 + g * a, k + a, r2 + g * a, k + 2 * a, r2, k + 3 * a);
              r2 = h2;
              g *= -1;
              this.ctx.lineTo(r2, k);
              for (q = 0; q < m; q++)
                this.ctx.bezierCurveTo(r2 + g * a, k - a, r2 + g * a, k - 2 * a, r2, k - 3 * a), k -= 3 * a, g *= -1;
            } else {
              if ("zigzag" === this.type) {
                g = -1;
                k = e + a;
                r2 = b + a;
                m = (l2 - k) / a / 2;
                for (q = 0; q < m; q++)
                  this.ctx.lineTo(r2, k), r2 += 2 * g * a, k += 2 * a, g *= -1;
                this.ctx.lineTo(r2, k);
                r2 += h2 - b;
                for (q = 0; q < m + 1; q++)
                  this.ctx.lineTo(r2, k), r2 += 2 * g * a, k -= 2 * a, g *= -1;
                this.ctx.lineTo(r2 + g * a, k + a);
              }
            }
          else if ("left" === this.scaleBreaks.parent._position || "right" === this.scaleBreaks.parent._position) {
            if (e = 1 === n % 2 ? (e.y << 0) + 0.5 : e.y << 0, l2 = 1 === n % 2 ? (b.y << 0) + 0.5 : b.y << 0, "left" === this.scaleBreaks.parent._position ? (b = this.chart.plotArea.x1, h2 = this.chart.plotArea.x2 + n / 2 + 0.5 << 0) : (b = this.chart.plotArea.x2, h2 = this.chart.plotArea.x1 - n / 2 + 0.5 << 0, a *= -1), this.bounds = { x1: b, y1: e - n / 2, x2: h2, y2: l2 + n / 2 }, this.ctx.moveTo(b, e), "straight" === this.type || "left" === this.scaleBreaks.parent._position && 0 >= a || "right" === this.scaleBreaks.parent._position && 0 <= a)
              this.ctx.lineTo(h2, e), this.ctx.lineTo(h2, l2), this.ctx.lineTo(b, l2);
            else if ("wavy" === this.type) {
              r2 = b;
              k = e;
              g = 0.5;
              m = (h2 - r2) / a / 3;
              for (q = 0; q < m; q++)
                this.ctx.bezierCurveTo(r2 + a, k + g * a, r2 + 2 * a, k + g * a, r2 + 3 * a, k), r2 += 3 * a, g *= -1;
              this.ctx.bezierCurveTo(r2 + a, k + g * a, r2 + 2 * a, k + g * a, r2 + 3 * a, k);
              k = l2;
              g *= -1;
              this.ctx.lineTo(r2, k);
              for (q = 0; q < m; q++)
                this.ctx.bezierCurveTo(r2 - a, k + g * a, r2 - 2 * a, k + g * a, r2 - 3 * a, k), r2 -= 3 * a, g *= -1;
            } else if ("zigzag" === this.type) {
              g = 1;
              k = e - a;
              r2 = b + a;
              m = (h2 - r2) / a / 2;
              for (q = 0; q < m; q++)
                this.ctx.lineTo(r2, k), k += 2 * g * a, r2 += 2 * a, g *= -1;
              this.ctx.lineTo(r2, k);
              k += l2 - e;
              for (q = 0; q < m + 1; q++)
                this.ctx.lineTo(
                  r2,
                  k
                ), k += 2 * g * a, r2 -= 2 * a, g *= -1;
              this.ctx.lineTo(r2 + a, k + g * a);
            }
          }
          0 < n && this.ctx.stroke();
          this.ctx.closePath();
          this.ctx.globalAlpha = this.fillOpacity;
          this.ctx.globalCompositeOperation = "destination-over";
          this.ctx.fill();
          this.ctx.restore();
          this.ctx.globalAlpha = c;
          this.ctx = d;
        }
      };
      pa(Q, L);
      Q.prototype.createUserOptions = function(a) {
        if ("undefined" !== typeof a || this.options._isPlaceholder) {
          var d = 0;
          this.parent.options._isPlaceholder && this.parent.createUserOptions();
          this.options._isPlaceholder || (Fa(this.parent.stripLines), d = this.parent.options.stripLines.indexOf(this.options));
          this.options = "undefined" === typeof a ? {} : a;
          this.parent.options.stripLines[d] = this.options;
        }
      };
      Q.prototype.render = function() {
        this.ctx.save();
        var a = this.parent.getPixelCoordinatesOnAxis(this.value), d = Math.abs("pixel" === this._thicknessType ? this.thickness : Math.abs(this.parent.convertValueToPixel(this.endValue) - this.parent.convertValueToPixel(this.startValue)));
        if (0 < d) {
          var c = null === this.opacity ? 1 : this.opacity;
          this.ctx.strokeStyle = this.color;
          this.ctx.beginPath();
          var b = this.ctx.globalAlpha;
          this.ctx.globalAlpha = c;
          Z(this.id);
          var e, g, h2, l2;
          this.ctx.lineWidth = d;
          this.ctx.setLineDash && this.ctx.setLineDash(K(this.lineDashType, d));
          if ("bottom" === this.parent._position || "top" === this.parent._position)
            e = g = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, h2 = this.chart.plotArea.y1, l2 = this.chart.plotArea.y2, this.bounds = { x1: e - d / 2, y1: h2, x2: g + d / 2, y2: l2 };
          else if ("left" === this.parent._position || "right" === this.parent._position)
            h2 = l2 = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, e = this.chart.plotArea.x1, g = this.chart.plotArea.x2, this.bounds = { x1: e, y1: h2 - d / 2, x2: g, y2: l2 + d / 2 };
          this.ctx.moveTo(e, h2);
          this.ctx.lineTo(g, l2);
          this.ctx.stroke();
          this.ctx.globalAlpha = b;
        }
        this.ctx.restore();
      };
      pa(da2, L);
      da2.prototype.showAt = function(a) {
        if (!this.enabled)
          return false;
        var d = this.chart, c = false;
        d.resetOverlayedCanvas();
        d.clearedOverlayedCanvas = this.parent.type;
        this.chart.renderCrosshairs(this.parent);
        if ("xySwapped" === d.plotInfo.axisPlacement)
          if ("bottom" === this.parent._position)
            for (var b = 0; b < d.axisY.length; b++)
              this.parent === d.axisY[b] && (d.axisY[b]._crosshairValue = a >= d.axisY[b].viewportMinimum && a <= d.axisY[b].viewportMaximum ? a : null);
          else if ("top" === this.parent._position)
            for (b = 0; b < d.axisY2.length; b++)
              this.parent === d.axisY2[b] && (d.axisY2[b]._crosshairValue = a >= d.axisY2[b].viewportMinimum && a <= d.axisY2[b].viewportMaximum ? a : null);
          else if ("left" === this.parent._position)
            for (b = 0; b < d.axisX.length; b++)
              this.parent === d.axisX[b] && (d.axisX[b]._crosshairValue = a >= d.axisX[b].viewportMinimum && a <= d.axisX[b].viewportMaximum ? a : null);
          else {
            if ("right" === this.parent._position)
              for (b = 0; b < d.axisX2.length; b++)
                this.parent === d.axisX2[b] && (d.axisX2[b]._crosshairValue = a >= d.axisX2[b].viewportMinimum && a <= d.axisX2[b].viewportMaximum ? a : null);
          }
        else if ("bottom" === this.parent._position)
          for (b = 0; b < d.axisX.length; b++)
            this.parent === d.axisX[b] && (d.axisX[b]._crosshairValue = a >= d.axisX[b].viewportMinimum && a <= d.axisX[b].viewportMaximum ? a : null);
        else if ("top" === this.parent._position)
          for (b = 0; b < d.axisX2.length; b++)
            this.parent === d.axisX2[b] && (d.axisX2[b]._crosshairValue = a >= d.axisX2[b].viewportMinimum && a <= d.axisX2[b].viewportMaximum ? a : null);
        else if ("left" === this.parent._position)
          for (b = 0; b < d.axisY.length; b++)
            this.parent === d.axisY[b] && (d.axisY[b]._crosshairValue = a >= d.axisY[b].viewportMinimum && a <= d.axisY[b].viewportMaximum ? a : null);
        else if ("right" === this.parent._position)
          for (b = 0; b < d.axisY2.length; b++)
            this.parent === d.axisY2[b] && (d.axisY2[b]._crosshairValue = a >= d.axisY2[b].viewportMinimum && a <= d.axisY2[b].viewportMaximum ? a : null);
        for (b = 0; b < d.axisX.length; b++)
          a = d.axisX[b]._crosshairValue, d.axisX[b].crosshair && (d.axisX[b].crosshair.enabled && !r(a) && a >= d.axisX[b].viewportMinimum && a <= d.axisX[b].viewportMaximum) && (d.axisX[b].showCrosshair(a), d.axisX[b].crosshair._updatedValue = a, this === d.axisX[b].crosshair && (c = true));
        for (b = 0; b < d.axisX2.length; b++)
          a = d.axisX2[b]._crosshairValue, d.axisX2[b].crosshair && (d.axisX2[b].crosshair.enabled && !r(a) && a >= d.axisX2[b].viewportMinimum && a <= d.axisX2[b].viewportMaximum) && (d.axisX2[b].showCrosshair(a), d.axisX2[b].crosshair._updatedValue = a, this === d.axisX2[b].crosshair && (c = true));
        for (b = 0; b < d.axisY.length; b++)
          a = d.axisY[b]._crosshairValue, d.axisY[b].crosshair && (d.axisY[b].crosshair.enabled && !r(a) && a >= d.axisY[b].viewportMinimum && a <= d.axisY[b].viewportMaximum) && (d.axisY[b].showCrosshair(a), d.axisY[b].crosshair._updatedValue = a, this === d.axisY[b].crosshair && (c = true));
        for (b = 0; b < d.axisY2.length; b++)
          a = d.axisY2[b]._crosshairValue, d.axisY2[b].crosshair && (d.axisY2[b].crosshair.enabled && !r(a) && a >= d.axisY2[b].viewportMinimum && a <= d.axisY2[b].viewportMaximum) && (d.axisY2[b].showCrosshair(a), d.axisY2[b].crosshair._updatedValue = a, this === d.axisY2[b].crosshair && (c = true));
        this.chart.toolTip && this.chart.toolTip._entries && this.chart.toolTip.highlightObjects(this.chart.toolTip._entries);
        return c;
      };
      da2.prototype.hide = function() {
        this.chart.resetOverlayedCanvas();
        this.chart.renderCrosshairs(this.parent);
        this._hidden = true;
      };
      da2.prototype.render = function(a, d, c) {
        var b, e, g, h2, l2 = null, u2 = null, k = null, m = "";
        this.valueFormatString || ("dateTime" === this.parent.valueType ? this.valueFormatString = this.parent.valueFormatString : (k = 0, k = "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 < this.parent.range ? 0 : 500 < this.chart.width && 25 > this.parent.range ? 2 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0) : 50 < this.parent.range ? 0 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0), this.valueFormatString = C.generateValueFormatString(this.parent.range, k)));
        var n = null === this.opacity ? 1 : this.opacity, q = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit * this.thickness), f = this.chart.overlaidCanvasCtx, z3 = f.globalAlpha;
        f.beginPath();
        f.strokeStyle = this.color;
        f.lineWidth = q;
        f.save();
        this.labelFontSize = Math.abs(r(this.options.labelFontSize) ? this.parent.labelFontSize : this.labelFontSize);
        this.labelMaxWidth = r(this.options.labelMaxWidth) ? 0.3 * this.chart.width : this.labelMaxWidth;
        this.labelMaxHeight = r(this.options.labelWrap) || this.labelWrap ? 0.3 * this.chart.height : 2 * this.labelFontSize;
        0 < q && f.setLineDash && f.setLineDash(K(this.lineDashType, q));
        k = new ka(f, {
          x: 0,
          y: 0,
          padding: { top: 2, right: 3, bottom: 2, left: 4 },
          backgroundColor: this.labelBackgroundColor,
          borderColor: this.labelBorderColor,
          borderThickness: this.labelBorderThickness,
          cornerRadius: this.labelCornerRadius,
          maxWidth: this.labelMaxWidth,
          maxHeight: this.labelMaxHeight,
          angle: this.labelAngle,
          text: m,
          horizontalAlign: "left",
          fontSize: this.labelFontSize,
          fontFamily: this.labelFontFamily,
          fontWeight: this.labelFontWeight,
          fontColor: this.labelFontColor,
          fontStyle: this.labelFontStyle,
          textBaseline: "middle"
        });
        if (this.snapToDataPoint) {
          var y = 0, m = [];
          if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
            var x = null;
            if ("bottom" === this.parent._position || "top" === this.parent._position)
              y = this.parent.dataSeries[0].axisX.convertPixelToValue({ y: d });
            else if ("left" === this.parent._position || "right" === this.parent._position)
              y = this.parent.convertPixelToValue({ y: d });
            for (var s = 0; s < this.parent.dataSeries.length; s++)
              (x = this.parent.dataSeries[s].getDataPointAtX(y, true)) && 0 <= x.index && (x.dataSeries = this.parent.dataSeries[s], null !== x.dataPoint.y && x.dataSeries.visible && m.push(x));
            x = null;
            if (0 === m.length)
              return;
            m.sort(function(a2, b2) {
              return a2.distance - b2.distance;
            });
            x = Math.abs(a - this.parent.convertValueToPixel(m[0].dataPoint.y));
            s = 0;
            if ("rangeBar" === m[0].dataSeries.type || "error" === m[0].dataSeries.type)
              for (var x = Math.abs(a - this.parent.convertValueToPixel(m[s].dataPoint.y[0])), w = 0, y = 0; y < m.length; y++)
                if (m[y].dataPoint.y && m[y].dataPoint.y.length)
                  for (var v = 0; v < m[y].dataPoint.y.length; v++)
                    w = Math.abs(a - this.parent.convertValueToPixel(m[y].dataPoint.y[v])), w < x && (x = w, s = y);
                else
                  w = Math.abs(a - this.parent.convertValueToPixel(m[y].dataPoint.y)), w < x && (x = w, s = y);
            else if ("stackedBar" === m[0].dataSeries.type)
              for (var x = Math.abs(a - this.parent.convertValueToPixel(m[0].dataPoint.y)), A = w = 0, y = s = 0; y < m.length; y++)
                if (m[y].dataPoint.y && m[y].dataPoint.y.length)
                  for (v = 0; v < m[y].dataPoint.y.length; v++)
                    w = Math.abs(a - this.parent.convertValueToPixel(m[y].dataPoint.y[v])), w < x && (x = w, s = y);
                else
                  A += m[y].dataPoint.y, w = Math.abs(a - this.parent.convertValueToPixel(A)), w < x && (x = w, s = y);
            else if ("stackedBar100" === m[0].dataSeries.type)
              for (var x = Math.abs(a - this.parent.convertValueToPixel(m[0].dataPoint.y)), B = A = w = 0, y = 0; y < m.length; y++)
                if (m[y].dataPoint.y && m[y].dataPoint.y.length)
                  for (v = 0; v < m[y].dataPoint.y.length; v++)
                    w = Math.abs(a - this.parent.convertValueToPixel(m[y].dataPoint.y[v])), w < x && (x = w, s = y);
                else
                  A += m[y].dataPoint.y, B = m[y].dataPoint.x.getTime ? m[y].dataPoint.x.getTime() : m[y].dataPoint.x, B = 100 * (A / m[y].dataSeries.plotUnit.dataPointYSums[B]), w = Math.abs(a - this.parent.convertValueToPixel(B)), w < x && (x = w, s = y);
            else
              for (x = Math.abs(a - this.parent.convertValueToPixel(m[0].dataPoint.y)), y = s = w = 0; y < m.length; y++)
                if (m[y].dataPoint.y && m[y].dataPoint.y.length)
                  for (v = 0; v < m[y].dataPoint.y.length; v++)
                    w = Math.abs(a - this.parent.convertValueToPixel(m[y].dataPoint.y[v])), w < x && (x = w, s = y);
                else
                  w = Math.abs(a - this.parent.convertValueToPixel(m[y].dataPoint.y)), w < x && (x = w, s = y);
            v = m[s];
            if ("bottom" === this.parent._position || "top" === this.parent._position) {
              b = 0;
              if ("rangeBar" === this.parent.dataSeries[s].type || "error" === this.parent.dataSeries[s].type) {
                x = Math.abs(a - this.parent.convertValueToPixel(v.dataPoint.y[0]));
                for (y = w = 0; y < v.dataPoint.y.length; y++)
                  w = Math.abs(a - this.parent.convertValueToPixel(v.dataPoint.y[y])), w < x && (x = w, b = y);
                l2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.y[b]) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.y[b]) << 0;
                this.value = v.dataPoint.y[b];
                k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.y[b] }) : r(this.options.label) ? ea(r(c) ? v.dataPoint.y[b] : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
              } else if ("stackedBar" === this.parent.dataSeries[s].type) {
                x = Math.abs(a - this.parent.convertValueToPixel(m[0].dataPoint.y));
                A = w = 0;
                for (y = s; 0 <= y; y--)
                  A += m[y].dataPoint.y, w = Math.abs(a - this.parent.convertValueToPixel(A)), w < x && (x = w, b = y);
                l2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(A) << 0) + 0.5 : this.parent.convertValueToPixel(A) << 0;
                this.value = A;
                k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.y }) : r(this.options.label) ? ea(r(c) ? v.dataPoint.y : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
              } else if ("stackedBar100" === this.parent.dataSeries[s].type) {
                x = Math.abs(a - this.parent.convertValueToPixel(m[0].dataPoint.y));
                B = A = w = 0;
                for (y = s; 0 <= y; y--)
                  A += m[y].dataPoint.y, B = m[y].dataPoint.x.getTime ? m[y].dataPoint.x.getTime() : m[y].dataPoint.x, B = 100 * (A / m[y].dataSeries.plotUnit.dataPointYSums[B]), w = Math.abs(a - this.parent.convertValueToPixel(B)), w < x && (x = w, b = y);
                l2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(B) << 0) + 0.5 : this.parent.convertValueToPixel(B) << 0;
                this.value = B;
                k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: B }) : r(this.options.label) ? ea(r(c) ? B : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
              } else
                l2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.y) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.y) << 0, this.value = v.dataPoint.y, k.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: v.dataPoint.y
                }) : r(this.options.label) ? ea(r(c) ? v.dataPoint.y : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
              b = e = l2;
              g = this.chart.plotArea.y1;
              h2 = this.chart.plotArea.y2;
              this.bounds = { x1: b - q / 2, y1: g, x2: e + q / 2, y2: h2 };
              k.x = b - k.measureText().width / 2;
              k.x + k.width > this.chart.bounds.x2 ? k.x = this.chart.bounds.x2 - k.width : k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
              k.y = this.parent.lineCoordinates.y2 + ("top" === this.parent._position ? -k.height + this.parent.tickLength : k.fontSize / 2) + 2;
              k.y + k.height > this.chart.bounds.y2 ? k.y = this.chart.bounds.y2 - k.height : k.y < this.chart.bounds.y1 && (k.y = this.chart.bounds.y1);
            } else if ("left" === this.parent._position || "right" === this.parent._position) {
              g = h2 = u2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.x) << 0;
              b = this.chart.plotArea.x1;
              e = this.chart.plotArea.x2;
              this.bounds = { x1: b, y1: g - q / 2, x2: e, y2: h2 + q / 2 };
              B = false;
              if (this.parent.labels)
                for (m = Math.ceil(this.parent.interval), y = 0; y < this.parent.viewportMaximum; y += m)
                  if (this.parent.labels[y])
                    B = true;
                  else {
                    B = false;
                    break;
                  }
              if (B) {
                if ("axisX" === this.parent.type)
                  for (y = this.parent.convertPixelToValue({ y: d }), x = null, s = 0; s < this.parent.dataSeries.length; s++)
                    (x = this.parent.dataSeries[s].getDataPointAtX(y, true)) && 0 <= x.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.x }) : r(this.options.label) ? x.dataPoint.label : this.label);
              } else
                k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.x }) : r(this.options.label) ? ea(v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.x }) : r(this.options.label) ? Da(v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label;
              this.value = v.dataPoint.x;
              k.y = h2 + k.fontSize / 2 - k.measureText().height / 2 + 2;
              k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
              "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
            }
          } else if ("bottom" === this.parent._position || "top" === this.parent._position) {
            y = this.parent.convertPixelToValue({ x: a });
            for (s = 0; s < this.parent.dataSeries.length; s++)
              (x = this.parent.dataSeries[s].getDataPointAtX(y, true)) && 0 <= x.index && (x.dataSeries = this.parent.dataSeries[s], null !== x.dataPoint.y && x.dataSeries.visible && m.push(x));
            if (0 === m.length)
              return;
            m.sort(function(a2, b2) {
              return a2.distance - b2.distance;
            });
            v = m[0];
            b = e = l2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.x) << 0;
            g = this.chart.plotArea.y1;
            h2 = this.chart.plotArea.y2;
            this.bounds = { x1: b - q / 2, y1: g, x2: e + q / 2, y2: h2 };
            B = false;
            if (this.parent.labels)
              for (m = Math.ceil(this.parent.interval), y = 0; y < this.parent.viewportMaximum; y += m)
                if (this.parent.labels[y])
                  B = true;
                else {
                  B = false;
                  break;
                }
            if (B) {
              if ("axisX" === this.parent.type)
                for (y = this.parent.convertPixelToValue({ x: a }), x = null, s = 0; s < this.parent.dataSeries.length; s++)
                  (x = this.parent.dataSeries[s].getDataPointAtX(y, true)) && 0 <= x.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.x }) : r(this.options.label) ? x.dataPoint.label : this.label);
            } else
              k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.x }) : r(this.options.label) ? ea(v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.x }) : r(this.options.label) ? Da(v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label;
            this.value = v.dataPoint.x;
            k.x = b - k.measureText().width / 2;
            k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width);
            k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
            "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
          } else if ("left" === this.parent._position || "right" === this.parent._position) {
            !r(this.parent.dataSeries) && 0 < this.parent.dataSeries.length && (y = this.parent.dataSeries[0].axisX.convertPixelToValue({ x: a }));
            for (s = 0; s < this.parent.dataSeries.length; s++)
              (x = this.parent.dataSeries[s].getDataPointAtX(y, true)) && 0 <= x.index && (x.dataSeries = this.parent.dataSeries[s], null !== x.dataPoint.y && x.dataSeries.visible && m.push(x));
            if (0 === m.length)
              return;
            m.sort(function(a2, b2) {
              return a2.distance - b2.distance;
            });
            s = 0;
            if ("rangeColumn" === m[0].dataSeries.type || "rangeArea" === m[0].dataSeries.type || "error" === m[0].dataSeries.type || "rangeSplineArea" === m[0].dataSeries.type || "candlestick" === m[0].dataSeries.type || "ohlc" === m[0].dataSeries.type || "boxAndWhisker" === m[0].dataSeries.type)
              for (x = Math.abs(d - this.parent.convertValueToPixel(m[0].dataPoint.y[0])), y = w = 0; y < m.length; y++)
                if (m[y].dataPoint.y && m[y].dataPoint.y.length)
                  for (v = 0; v < m[y].dataPoint.y.length; v++)
                    w = Math.abs(d - this.parent.convertValueToPixel(m[y].dataPoint.y[v])), w < x && (x = w, s = y);
                else
                  w = Math.abs(d - this.parent.convertValueToPixel(m[y].dataPoint.y)), w < x && (x = w, s = y);
            else if ("stackedColumn" === m[0].dataSeries.type || "stackedArea" === m[0].dataSeries.type)
              for (x = Math.abs(d - this.parent.convertValueToPixel(m[0].dataPoint.y)), y = A = w = 0; y < m.length; y++)
                if (m[y].dataPoint.y && m[y].dataPoint.y.length)
                  for (v = 0; v < m[y].dataPoint.y.length; v++)
                    w = Math.abs(d - this.parent.convertValueToPixel(m[y].dataPoint.y[v])), w < x && (x = w, s = y);
                else
                  A += m[y].dataPoint.y, w = Math.abs(d - this.parent.convertValueToPixel(A)), w < x && (x = w, s = y);
            else if ("stackedColumn100" === m[0].dataSeries.type || "stackedArea100" === m[0].dataSeries.type)
              for (x = Math.abs(d - this.parent.convertValueToPixel(m[0].dataPoint.y)), y = B = A = w = 0; y < m.length; y++)
                if (m[y].dataPoint.y && m[y].dataPoint.y.length)
                  for (v = 0; v < m[y].dataPoint.y.length; v++)
                    w = Math.abs(d - this.parent.convertValueToPixel(m[y].dataPoint.y[v])), w < x && (x = w, s = y);
                else
                  A += m[y].dataPoint.y, B = m[y].dataPoint.x.getTime ? m[y].dataPoint.x.getTime() : m[y].dataPoint.x, B = 100 * (A / m[y].dataSeries.plotUnit.dataPointYSums[B]), w = Math.abs(d - this.parent.convertValueToPixel(B)), w < x && (x = w, s = y);
            else
              for (x = Math.abs(d - this.parent.convertValueToPixel(m[0].dataPoint.y)), y = w = 0; y < m.length; y++)
                if (m[y].dataPoint.y && m[y].dataPoint.y.length)
                  for (v = 0; v < m[y].dataPoint.y.length; v++)
                    w = Math.abs(d - this.parent.convertValueToPixel(m[y].dataPoint.y[v])), w < x && (x = w, s = y);
                else
                  w = Math.abs(d - this.parent.convertValueToPixel(m[y].dataPoint.y)), w < x && (x = w, s = y);
            v = m[s];
            b = 0;
            if ("rangeColumn" === this.parent.dataSeries[s].type || "rangeArea" === this.parent.dataSeries[s].type || "error" === this.parent.dataSeries[s].type || "rangeSplineArea" === this.parent.dataSeries[s].type || "candlestick" === this.parent.dataSeries[s].type || "ohlc" === this.parent.dataSeries[s].type || "boxAndWhisker" === this.parent.dataSeries[s].type) {
              x = Math.abs(d - this.parent.convertValueToPixel(v.dataPoint.y[0]));
              for (y = w = 0; y < v.dataPoint.y.length; y++)
                w = Math.abs(d - this.parent.convertValueToPixel(v.dataPoint.y[y])), w < x && (x = w, b = y);
              u2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.y[b]) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.y[b]) << 0;
              k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.y[b] }) : r(this.options.label) ? ea(
                r(c) ? v.dataPoint.y[b] : c,
                this.valueFormatString,
                this.chart._cultureInfo
              ) : this.label;
              this.value = v.dataPoint.y[b];
            } else if ("stackedColumn" === this.parent.dataSeries[s].type || "stackedArea" === this.parent.dataSeries[s].type) {
              x = Math.abs(d - this.parent.convertValueToPixel(m[0].dataPoint.y));
              A = w = 0;
              for (y = s; 0 <= y; y--)
                A += m[y].dataPoint.y, w = Math.abs(d - this.parent.convertValueToPixel(A)), w < x && (x = w, b = y);
              u2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(A) << 0) + 0.5 : this.parent.convertValueToPixel(A) << 0;
              k.text = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.parent.options,
                crosshair: this.options,
                value: v.dataPoint.y
              }) : r(this.options.label) ? ea(r(c) ? v.dataPoint.y : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
              this.value = A;
            } else if ("stackedColumn100" === this.parent.dataSeries[s].type || "stackedArea100" === this.parent.dataSeries[s].type) {
              x = Math.abs(d - this.parent.convertValueToPixel(m[0].dataPoint.y));
              A = w = 0;
              for (y = s; 0 <= y; y--)
                A += m[y].dataPoint.y, B = m[y].dataPoint.x.getTime ? m[y].dataPoint.x.getTime() : m[y].dataPoint.x, B = 100 * (A / m[y].dataSeries.plotUnit.dataPointYSums[B]), w = Math.abs(d - this.parent.convertValueToPixel(B)), w < x && (x = w, b = y);
              u2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(B) << 0) + 0.5 : this.parent.convertValueToPixel(B) << 0;
              k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: B }) : r(this.options.label) ? ea(r(c) ? B : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
              this.value = B;
            } else
              "waterfall" === this.parent.dataSeries[s].type ? (u2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataSeries.dataPointEOs[v.index].cumulativeSum) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataSeries.dataPointEOs[v.index].cumulativeSum) << 0, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataSeries.dataPointEOs[v.index].cumulativeSum }) : r(this.options.label) ? ea(r(c) ? v.dataSeries.dataPointEOs[v.index].cumulativeSum : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = v.dataSeries.dataPointEOs[v.index].cumulativeSum) : (u2 = 1 === f.lineWidth % 2 ? (r(a) ? d : this.parent.convertValueToPixel(v.dataPoint.y) << 0) + 0.5 : r(a) ? d : this.parent.convertValueToPixel(v.dataPoint.y) << 0, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: r(c) ? v.dataPoint.y : c }) : r(this.options.label) ? ea(r(c) ? v.dataPoint.y : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = v.dataPoint.y);
            g = h2 = u2;
            b = this.chart.plotArea.x1;
            e = this.chart.plotArea.x2;
            this.bounds = { x1: b, y1: g - q / 2, x2: e, y2: h2 + q / 2 };
            k.y = h2 + k.fontSize / 2 - k.measureText().height / 2 + 2;
            k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
            "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
          }
          m = null;
          f.globalAlpha = n;
          if ("bottom" === this.parent._position || "top" === this.parent._position)
            "top" === this.parent._position && k.y - k.fontSize / 2 < this.chart.bounds.y1 && (k.y = this.chart.bounds.y1 + k.fontSize / 2), "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - k.fontSize / 2 + k.measureText().height > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2), b >= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMaximum : this.parent.viewportMinimum) && e <= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMinimum : this.parent.viewportMaximum) && (0 < q && (f.moveTo(b, g), f.lineTo(e, h2), f.stroke(), this._hidden = false), f.restore());
          if ("left" === this.parent._position || "right" === this.parent._position)
            "left" === this.parent._position && k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1), "right" === this.parent._position && k.x + k.measureText().width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.measureText().width), h2 >= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMinimum : this.parent.viewportMaximum) && g <= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMaximum : this.parent.viewportMinimum) && (0 < q && (f.moveTo(b, g), f.lineTo(e, h2), f.stroke(), this._hidden = false), f.restore());
        } else {
          if ("bottom" === this.parent._position || "top" === this.parent._position)
            b = e = l2 = 1 === f.lineWidth % 2 ? (a << 0) + 0.5 : a << 0, g = this.chart.plotArea.y1, h2 = this.chart.plotArea.y2, this.bounds = { x1: b - q / 2, y1: g, x2: e + q / 2, y2: h2 };
          else if ("left" === this.parent._position || "right" === this.parent._position)
            g = h2 = u2 = 1 === f.lineWidth % 2 ? (d << 0) + 0.5 : d << 0, b = this.chart.plotArea.x1, e = this.chart.plotArea.x2, this.bounds = { x1: b, y1: g - q / 2, x2: e, y2: h2 + q / 2 };
          if ("xySwapped" === this.chart.plotInfo.axisPlacement)
            if ("left" === this.parent._position || "right" === this.parent._position) {
              B = false;
              if (this.parent.labels)
                for (m = Math.ceil(this.parent.interval), y = 0; y < this.parent.viewportMaximum; y += m)
                  if (this.parent.labels[y])
                    B = true;
                  else {
                    B = false;
                    break;
                  }
              if (B) {
                if ("axisX" === this.parent.type)
                  for (y = this.parent.convertPixelToValue({ y: d }), x = null, s = 0; s < this.parent.dataSeries.length; s++)
                    (x = this.parent.dataSeries[s].getDataPointAtX(y, true)) && 0 <= x.index && (k.text = this.labelFormatter ? this.labelFormatter({
                      chart: this.chart,
                      axis: this.parent.options,
                      crosshair: this.options,
                      value: r(c) ? this.parent.convertPixelToValue(a) : c
                    }) : r(this.options.label) ? x.dataPoint.label : this.label);
              } else
                k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: r(c) ? this.parent.convertPixelToValue(d) : c }) : r(this.options.label) ? ea(r(c) ? this.parent.convertPixelToValue(d) : c, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: r(c) ? this.parent.convertPixelToValue(d) : c
                }) : r(this.options.label) ? Da(r(c) ? this.parent.convertPixelToValue(d) : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
              k.y = d + k.fontSize / 2 - k.measureText().height / 2 + 2;
              k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
              "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x1 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
            } else {
              if ("bottom" === this.parent._position || "top" === this.parent._position)
                k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: r(c) ? this.parent.convertPixelToValue(a) : c }) : r(this.options.label) ? ea(r(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo) : this.label, k.x = b - k.measureText().width / 2, k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width), k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1), "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
            }
          else if ("bottom" === this.parent._position || "top" === this.parent._position) {
            B = false;
            m = "";
            if (this.parent.labels)
              for (m = Math.ceil(this.parent.interval), y = 0; y < this.parent.viewportMaximum; y += m)
                if (this.parent.labels[y])
                  B = true;
                else {
                  B = false;
                  break;
                }
            if (B) {
              if ("axisX" === this.parent.type)
                for (y = this.parent.convertPixelToValue({ x: a }), x = null, s = 0; s < this.parent.dataSeries.length; s++)
                  (x = this.parent.dataSeries[s].getDataPointAtX(y, true)) && 0 <= x.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: r(c) ? this.parent.convertPixelToValue(a) : c }) : r(this.options.label) ? r(c) ? x.dataPoint.label : c : this.label);
            } else
              k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: r(c) ? 0 < this.parent.dataSeries.length ? this.parent.convertPixelToValue(a) : "" : c }) : r(this.options.label) ? ea(r(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: r(c) ? this.parent.convertPixelToValue(a) : c }) : r(this.options.label) ? Da(r(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
            k.x = b - k.measureText().width / 2;
            k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width);
            k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
            "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
          } else if ("left" === this.parent._position || "right" === this.parent._position)
            k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: r(c) ? this.parent.convertPixelToValue(d) : c }) : r(this.options.label) ? ea(r(c) ? this.parent.convertPixelToValue(d) : c, this.valueFormatString, this.chart._cultureInfo) : this.label, k.y = d + k.fontSize / 2 - k.measureText().height / 2 + 2, k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2), "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
          "left" === this.parent._position && k.x < this.chart.bounds.x1 ? k.x = this.chart.bounds.x1 : "right" === this.parent._position && k.x + k.measureText().width > this.chart.bounds.x2 ? k.x = this.chart.bounds.x2 - k.measureText().width : "top" === this.parent._position && k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 : "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - k.fontSize / 2 + k.measureText().height > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2);
          f.globalAlpha = n;
          0 < q && (f.moveTo(b, g), f.lineTo(e, h2), f.stroke(), this._hidden = false);
          f.restore();
          this.value = "bottom" === this.parent._position || "top" === this.parent._position ? this.parent.convertPixelToValue(a) : this.parent.convertPixelToValue(d);
        }
        if ("bottom" === this.parent._position || "top" === this.parent._position)
          this._updatedValue = this.parent.convertPixelToValue(l2);
        if ("left" === this.parent._position || "right" === this.parent._position)
          this._updatedValue = this.parent.convertPixelToValue(u2);
        this._textBlock = k;
        this._label = c;
        r(c) || this.renderLabel();
        f.globalAlpha = z3;
      };
      da2.prototype.renderLabel = function() {
        r(this._textBlock) || (r(this._textBlock.text) || !("number" === typeof this._textBlock.text.valueOf() || 0 < this._textBlock.text.length) || this._hidden) || this._textBlock.render(true);
        r(this._label) && this.dispatchEvent(
          "updated",
          { chart: this.chart, crosshair: this.options, axis: this.parent, value: this.value },
          this.parent
        );
      };
      pa(W2, L);
      W2.prototype._initialize = function() {
        this.updateOption("updated");
        this.updateOption("hidden");
        if (this.enabled) {
          this.container = document.createElement("div");
          this.container.setAttribute("class", "canvasjs-chart-tooltip");
          this.container.style.position = "absolute";
          this.container.style.height = "auto";
          this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
          this.container.style.zIndex = "1000";
          this.container.style.pointerEvents = "none";
          this.container.style.display = "none";
          var a = document.createElement("div");
          a.style.width = "auto";
          a.style.height = "auto";
          a.style.minWidth = "50px";
          a.style.lineHeight = "normal";
          a.style.margin = "0px 0px 0px 0px";
          a.style.padding = "5px";
          a.style.fontFamily = "Calibri, Arial, Georgia, serif";
          a.style.fontWeight = "normal";
          a.style.fontStyle = u ? "italic" : "normal";
          a.style.fontSize = "14px";
          a.style.color = "#000000";
          a.style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.1)";
          a.style.textAlign = "left";
          a.style.border = "2px solid gray";
          a.style.background = u ? "rgba(255,255,255,.9)" : "rgb(255,255,255)";
          a.style.textIndent = "0px";
          a.style.whiteSpace = "nowrap";
          a.style.borderRadius = "5px";
          a.style.MozUserSelect = "none";
          a.style.WebkitUserSelect = "none";
          a.style.msUserSelect = "none";
          a.style.userSelect = "none";
          u || (a.style.filter = "alpha(opacity = 90)", a.style.filter = "progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666')");
          a.innerText = "Sample Tooltip";
          this.container.appendChild(a);
          this.contentDiv = this.container.firstChild;
          this.container.style.borderRadius = this.contentDiv.style.borderRadius;
          this.chart._canvasJSContainer.appendChild(this.container);
        }
      };
      W2.prototype.mouseMoveHandler = function(a, d) {
        this._lastUpdated && 4 > (/* @__PURE__ */ new Date()).getTime() - this._lastUpdated || (this._lastUpdated = (/* @__PURE__ */ new Date()).getTime(), this.chart.resetOverlayedCanvas(), this._updateToolTip(a, d), !this._updatedEventParameters || (isNaN(this._prevX) || isNaN(this._prevY)) || this.dispatchEvent("updated", this._updatedEventParameters, this));
      };
      W2.prototype._updateToolTip = function(a, d, c) {
        c = "undefined" === typeof c ? true : c;
        this.container || this._initialize();
        this.enabled || this.hide();
        if (!this.chart.disableToolTip) {
          if ("undefined" === typeof a || "undefined" === typeof d) {
            if (isNaN(this._prevX) || isNaN(this._prevY))
              return;
            a = this._prevX;
            d = this._prevY;
          } else
            this._prevX = a, this._prevY = d;
          var b = null, e = null, g = [], h2 = 0;
          if (this.shared && this.enabled && "none" !== this.chart.plotInfo.axisPlacement) {
            var l2 = [];
            if (this.chart.axisX)
              for (var z3 = 0; z3 < this.chart.axisX.length; z3++) {
                for (var h2 = "xySwapped" === this.chart.plotInfo.axisPlacement ? this.chart.axisX[z3].convertPixelToValue({ y: d }) : this.chart.axisX[z3].convertPixelToValue({ x: a }), k = null, b = 0; b < this.chart.axisX[z3].dataSeries.length; b++)
                  (k = this.chart.axisX[z3].dataSeries[b].getDataPointAtX(h2, c)) && 0 <= k.index && (k.dataSeries = this.chart.axisX[z3].dataSeries[b], null !== k.dataPoint.y && k.dataSeries.visible && l2.push(k));
                k = null;
              }
            if (this.chart.axisX2)
              for (z3 = 0; z3 < this.chart.axisX2.length; z3++) {
                h2 = "xySwapped" === this.chart.plotInfo.axisPlacement ? this.chart.axisX2[z3].convertPixelToValue({ y: d }) : this.chart.axisX2[z3].convertPixelToValue({ x: a });
                k = null;
                for (b = 0; b < this.chart.axisX2[z3].dataSeries.length; b++)
                  (k = this.chart.axisX2[z3].dataSeries[b].getDataPointAtX(
                    h2,
                    c
                  )) && 0 <= k.index && (k.dataSeries = this.chart.axisX2[z3].dataSeries[b], null !== k.dataPoint.y && k.dataSeries.visible && l2.push(k));
                k = null;
              }
            if (0 === l2.length)
              return;
            l2.sort(function(a2, b2) {
              return a2.distance - b2.distance;
            });
            c = l2[0];
            for (b = 0; b < l2.length; b++)
              l2[b].dataPoint.x.valueOf() === c.dataPoint.x.valueOf() && g.push(l2[b]);
            l2 = null;
          } else {
            if (b = this.chart.getDataPointAtXY(a, d, c))
              this.currentDataPointIndex = b.dataPointIndex, this.currentSeriesIndex = b.dataSeries.index;
            else if (u)
              if (b = ab(a, d, this.chart._eventManager.ghostCtx), 0 < b && "undefined" !== typeof this.chart._eventManager.objectMap[b]) {
                b = this.chart._eventManager.objectMap[b];
                if ("legendItem" === b.objectType)
                  return;
                this.currentSeriesIndex = b.dataSeriesIndex;
                this.currentDataPointIndex = 0 <= b.dataPointIndex ? b.dataPointIndex : -1;
              } else
                this.currentDataPointIndex = -1;
            else
              this.currentDataPointIndex = -1;
            if (0 <= this.currentSeriesIndex) {
              e = this.chart.data[this.currentSeriesIndex];
              k = {};
              if (0 <= this.currentDataPointIndex)
                b = e.dataPoints[this.currentDataPointIndex], k.dataSeries = e, k.dataPoint = b, k.index = this.currentDataPointIndex, k.distance = Math.abs(b.x - h2), "waterfall" === e.type && (k.cumulativeSumYStartValue = e.dataPointEOs[this.currentDataPointIndex].cumulativeSumYStartValue, k.cumulativeSum = e.dataPointEOs[this.currentDataPointIndex].cumulativeSum);
              else {
                if (!this.enabled || "line" !== e.type && "stepLine" !== e.type && "spline" !== e.type && "area" !== e.type && "stepArea" !== e.type && "splineArea" !== e.type && "stackedArea" !== e.type && "stackedArea100" !== e.type && "rangeArea" !== e.type && "rangeSplineArea" !== e.type && "candlestick" !== e.type && "ohlc" !== e.type && "boxAndWhisker" !== e.type)
                  return;
                h2 = e.axisX.convertPixelToValue({ x: a });
                k = e.getDataPointAtX(h2, c);
                r(k) || (k.dataSeries = e, this.currentDataPointIndex = k.index, b = k.dataPoint);
              }
              if (!r(k) && !r(k.dataPoint) && !r(k.dataPoint.y))
                if (k.dataSeries.axisY)
                  if (0 < k.dataPoint.y.length) {
                    for (b = c = 0; b < k.dataPoint.y.length; b++)
                      k.dataPoint.y[b] < k.dataSeries.axisY.viewportMinimum ? c-- : k.dataPoint.y[b] > k.dataSeries.axisY.viewportMaximum && c++;
                    c < k.dataPoint.y.length && c > -k.dataPoint.y.length && g.push(k);
                  } else
                    "column" === e.type || "bar" === e.type ? 0 > k.dataPoint.y ? 0 > k.dataSeries.axisY.viewportMinimum && k.dataSeries.axisY.viewportMaximum >= k.dataPoint.y && g.push(k) : k.dataSeries.axisY.viewportMinimum <= k.dataPoint.y && 0 <= k.dataSeries.axisY.viewportMaximum && g.push(k) : "bubble" === e.type ? (c = this.chart._eventManager.objectMap[e.dataPointIds[k.index]].size / 2, k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum - c && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum + c && g.push(k)) : "waterfall" === e.type ? (c = 0, k.cumulativeSumYStartValue < k.dataSeries.axisY.viewportMinimum ? c-- : k.cumulativeSumYStartValue > k.dataSeries.axisY.viewportMaximum && c++, k.cumulativeSum < k.dataSeries.axisY.viewportMinimum ? c-- : k.cumulativeSum > k.dataSeries.axisY.viewportMaximum && c++, 2 > c && -2 < c && g.push(k)) : (0 <= k.dataSeries.type.indexOf("100") || "stackedColumn" === e.type || "stackedBar" === e.type || k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum) && g.push(k);
                else
                  g.push(k);
            }
          }
          if (0 < g.length) {
            if (this.highlightObjects(g), this.enabled) {
              c = "";
              c = this.getToolTipInnerHTML({ entries: g });
              if (null !== c) {
                this.contentDiv.innerHTML = c;
                if (this.isToolTipDefinedInData && r(this.options.content) && r(this.options.contentFormatter))
                  for (h2 = this.contentDiv.getElementsByTagName("span"), b = 0; b < h2.length; b++)
                    h2[b] && (h2[b].style.color = h2[b].getAttribute("data-color"));
                h2 = false;
                "none" === this.container.style.display && (h2 = true, this.container.style.display = "block");
                try {
                  this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : u ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = "waterfall" === g[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : g[0].dataPoint.color ? g[0].dataPoint.color : 0 < g[0].dataPoint.y ? g[0].dataSeries.risingColor : g[0].dataSeries.fallingColor : "error" === g[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : g[0].dataSeries.color ? g[0].dataSeries.color : g[0].dataSeries._colorSet[e.index % g[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : g[0].dataPoint.color ? g[0].dataPoint.color : g[0].dataSeries.color ? g[0].dataSeries.color : g[0].dataSeries._colorSet[g[0].index % g[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : u ? "italic" : "normal";
                } catch (m) {
                }
                "pie" === g[0].dataSeries.type || "doughnut" === g[0].dataSeries.type || "funnel" === g[0].dataSeries.type || "pyramid" === g[0].dataSeries.type || "bar" === g[0].dataSeries.type || "rangeBar" === g[0].dataSeries.type || "stackedBar" === g[0].dataSeries.type || "stackedBar100" === g[0].dataSeries.type ? a = a - 10 - this.container.clientWidth : (a = g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x) - this.container.clientWidth << 0, a -= 10);
                0 > a && (a += this.container.clientWidth + 20);
                a + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (a = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                d = 1 !== g.length || this.shared || "line" !== g[0].dataSeries.type && "stepLine" !== g[0].dataSeries.type && "spline" !== g[0].dataSeries.type && "area" !== g[0].dataSeries.type && "stepArea" !== g[0].dataSeries.type && "splineArea" !== g[0].dataSeries.type ? "bar" === g[0].dataSeries.type || "rangeBar" === g[0].dataSeries.type || "stackedBar" === g[0].dataSeries.type || "stackedBar100" === g[0].dataSeries.type ? g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x) : d : g[0].dataSeries.axisY.convertValueToPixel(g[0].dataPoint.y);
                d = -d + 10;
                0 < d + this.container.clientHeight + 5 && (d -= d + this.container.clientHeight + 5 - 0);
                this.fixMozTransitionDelay(a, d);
                !this.animationEnabled || h2 ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
                this.positionLeft = a;
                this.positionBottom = d;
                this.container.style.left = a + "px";
                this.container.style.bottom = d + "px";
              } else
                this.hide(false), this.enabled && this.dispatchEvent("hidden", { chart: this.chart, toolTip: this }, this);
              d = [];
              for (b = 0; b < g.length; b++)
                d.push({ xValue: g[b].dataPoint.x, dataPoint: g[b].dataPoint, dataSeries: g[b].dataSeries, dataPointIndex: g[b].index, dataSeriesIndex: g[b].dataSeries._index });
              this._updatedEventParameters = { chart: this.chart, toolTip: this.options, content: c, entries: d };
              this._entries = g;
            }
          } else
            this.hide(), this.enabled && this.dispatchEvent("hidden", {
              chart: this.chart,
              toolTip: this
            }, this);
        }
      };
      W2.prototype.highlightObjects = function(a) {
        var d = this.chart.overlaidCanvasCtx;
        if (r(this.chart.clearedOverlayedCanvas) || "toolTip" === this.chart.clearedOverlayedCanvas)
          this.chart.resetOverlayedCanvas(), d.clearRect(0, 0, this.chart.width, this.chart.height), this.chart.clearedOverlayedCanvas = "toolTip";
        d.save();
        var c = this.chart.plotArea, b = 0;
        d.beginPath();
        d.rect(c.x1, c.y1, c.x2 - c.x1, c.y2 - c.y1);
        d.clip();
        for (c = 0; c < a.length; c++) {
          var e = a[c];
          if ((e = this.chart._eventManager.objectMap[e.dataSeries.dataPointIds[e.index]]) && e.objectType && "dataPoint" === e.objectType) {
            var b = this.chart.data[e.dataSeriesIndex], g = b.dataPoints[e.dataPointIndex], h2 = e.dataPointIndex;
            false === g.highlightEnabled || true !== b.highlightEnabled && true !== g.highlightEnabled || ("line" === b.type || "stepLine" === b.type || "spline" === b.type || "scatter" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type ? (g = b.getMarkerProperties(h2, e.x1, e.y1, this.chart.overlaidCanvasCtx), g.size = Math.max(1.5 * g.size << 0, 10), g.borderColor = g.borderColor || "#FFFFFF", g.borderThickness = g.borderThickness || Math.ceil(0.1 * g.size), Y.drawMarkers([g]), "undefined" !== typeof e.y2 && (g = b.getMarkerProperties(h2, e.x1, e.y2, this.chart.overlaidCanvasCtx), g.size = Math.max(1.5 * g.size << 0, 10), g.borderColor = g.borderColor || "#FFFFFF", g.borderThickness = g.borderThickness || Math.ceil(0.1 * g.size), Y.drawMarkers([g]))) : "bubble" === b.type ? (g = b.getMarkerProperties(h2, e.x1, e.y1, this.chart.overlaidCanvasCtx), g.size = e.size, g.color = "white", g.borderColor = "white", d.globalAlpha = 0.3, Y.drawMarkers([g]), d.globalAlpha = 1) : "column" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "bar" === b.type || "rangeBar" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "rangeColumn" === b.type || "waterfall" === b.type ? $(d, e.x1, e.y1, e.x2, e.y2, "white", 0, null, false, false, false, false, 0.3) : "pie" === b.type || "doughnut" === b.type ? qa2(d, e.center, e.radius, "white", b.type, e.startAngle, e.endAngle, 0.3, e.percentInnerRadius) : "funnel" === b.type || "pyramid" === b.type ? sa2(d, e.funnelSection, 0.3, "white") : "candlestick" === b.type ? (d.globalAlpha = 1, d.strokeStyle = e.color, d.lineWidth = 2 * e.borderThickness, b = 0 === d.lineWidth % 2 ? 0 : 0.5, d.beginPath(), d.moveTo(e.x3 - b, Math.min(e.y2, e.y3)), d.lineTo(e.x3 - b, Math.min(e.y1, e.y4)), d.stroke(), d.beginPath(), d.moveTo(e.x3 - b, Math.max(e.y1, e.y4)), d.lineTo(e.x3 - b, Math.max(e.y2, e.y3)), d.stroke(), $(d, e.x1, Math.min(e.y1, e.y4), e.x2, Math.max(e.y1, e.y4), "transparent", 2 * e.borderThickness, e.color, false, false, false, false), d.globalAlpha = 1) : "ohlc" === b.type ? (d.globalAlpha = 1, d.strokeStyle = e.color, d.lineWidth = 2 * e.borderThickness, b = 0 === d.lineWidth % 2 ? 0 : 0.5, d.beginPath(), d.moveTo(e.x3 - b, e.y2), d.lineTo(e.x3 - b, e.y3), d.stroke(), d.beginPath(), d.moveTo(e.x3, e.y1), d.lineTo(e.x1, e.y1), d.stroke(), d.beginPath(), d.moveTo(e.x3, e.y4), d.lineTo(e.x2, e.y4), d.stroke(), d.globalAlpha = 1) : "boxAndWhisker" === b.type ? (d.save(), d.globalAlpha = 1, d.strokeStyle = e.stemColor, d.lineWidth = 2 * e.stemThickness, 0 < e.stemThickness && (d.beginPath(), d.moveTo(e.x3, e.y2 + e.borderThickness / 2), d.lineTo(e.x3, e.y1 + e.whiskerThickness / 2), d.stroke(), d.beginPath(), d.moveTo(e.x3, e.y4 - e.whiskerThickness / 2), d.lineTo(e.x3, e.y3 - e.borderThickness / 2), d.stroke()), d.beginPath(), $(d, e.x1 - e.borderThickness / 2, Math.max(e.y2 + e.borderThickness / 2, e.y3 + e.borderThickness / 2), e.x2 + e.borderThickness / 2, Math.min(e.y2 - e.borderThickness / 2, e.y3 - e.borderThickness / 2), "transparent", e.borderThickness, e.color, false, false, false, false), d.globalAlpha = 1, d.strokeStyle = e.whiskerColor, d.lineWidth = 2 * e.whiskerThickness, 0 < e.whiskerThickness && (d.beginPath(), d.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y4), d.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y4), d.stroke(), d.beginPath(), d.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y1), d.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y1), d.stroke()), d.globalAlpha = 1, d.strokeStyle = e.lineColor, d.lineWidth = 2 * e.lineThickness, 0 < e.lineThickness && (d.beginPath(), d.moveTo(e.x1, e.y5), d.lineTo(e.x2, e.y5), d.stroke()), d.restore(), d.globalAlpha = 1) : "error" === b.type && E2(d, e.x1, e.y1, e.x2, e.y2, "white", e.whiskerProperties, e.stemProperties, e.isXYSwapped, 0.3));
          }
        }
        d.restore();
        d.globalAlpha = 1;
        d.beginPath();
      };
      W2.prototype.getToolTipInnerHTML = function(a) {
        a = a.entries;
        var d = null, c = null, b = null, e = 0, g = "";
        this.isToolTipDefinedInData = true;
        for (var h2 = 0; h2 < a.length; h2++)
          if (a[h2].dataSeries.toolTipContent || a[h2].dataPoint.toolTipContent) {
            this.isToolTipDefinedInData = false;
            break;
          }
        if (this.isToolTipDefinedInData && (this.content && "function" === typeof this.content || this.contentFormatter))
          a = { chart: this.chart, toolTip: this.options, entries: a }, d = this.contentFormatter ? this.contentFormatter(a) : this.content(a);
        else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
          for (var l2 = null, r2 = "", h2 = 0; h2 < a.length; h2++) {
            c = a[h2].dataSeries;
            b = a[h2].dataPoint;
            e = a[h2].index;
            g = "";
            if (0 === h2 && this.isToolTipDefinedInData && !this.content) {
              this.chart.axisX && 0 < this.chart.axisX.length ? r2 += "undefined" !== typeof this.chart.axisX[0].labels[b.x] ? this.chart.axisX[0].labels[b.x] : "{x}" : this.chart.axisX2 && 0 < this.chart.axisX2.length && (r2 += "undefined" !== typeof this.chart.axisX2[0].labels[b.x] ? this.chart.axisX2[0].labels[b.x] : "{x}");
              r2 += "</br>";
              if (!c.visible)
                continue;
              r2 = this.chart.replaceKeywordsWithValue(r2, b, c, e);
            }
            null === b.toolTipContent || "undefined" === typeof b.toolTipContent && null === c.options.toolTipContent || ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "waterfall" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (g += l2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span>&nbsp;&nbsp;{y}`, l2 = c.axisXIndex) : "bubble" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (g += l2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}`) : "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (g += l2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}`) : "candlestick" === c.type || "ohlc" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (g += l2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}`) : "boxAndWhisker" === c.type && (this.chart.axisX && 1 < this.chart.axisX.length && (g += l2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span><br/>Minimum: &nbsp;{y[0]}<br/>Q1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}`), null === d && (d = ""), c.visible && (true === this.reversed ? (d = this.chart.replaceKeywordsWithValue(
              g,
              b,
              c,
              e
            ) + d, h2 < a.length - 1 && (d = "</br>" + d)) : (d += this.chart.replaceKeywordsWithValue(g, b, c, e), h2 < a.length - 1 && (d += "</br>"))));
          }
          null !== d && (d = r2 + d);
        } else {
          c = a[0].dataSeries;
          b = a[0].dataPoint;
          e = a[0].index;
          if (null === b.toolTipContent || "undefined" === typeof b.toolTipContent && null === c.options.toolTipContent)
            return null;
          "line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "waterfall" === c.type ? g = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}" : "bubble" === c.type ? g = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}" : "pie" === c.type || "doughnut" === c.type || "funnel" === c.type || "pyramid" === c.type ? g = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.name ? "{name}:</span>&nbsp;&nbsp;" : b.label ? "{label}:</span>&nbsp;&nbsp;" : "</span>") + "{y}" : "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type ? g = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}" : "candlestick" === c.type || "ohlc" === c.type ? g = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}" : "boxAndWhisker" === c.type && (g = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + "</span><br/>Minimum: &nbsp;{y[0]}<br/>Q1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}");
          null === d && (d = "");
          d += this.chart.replaceKeywordsWithValue(g, b, c, e);
        }
        return d;
      };
      W2.prototype.enableAnimation = function() {
        if (!this.container.style.WebkitTransition) {
          var a = this.getContainerTransition(this.containerTransitionDuration);
          this.container.style.WebkitTransition = a;
          this.container.style.MsTransition = a;
          this.container.style.transition = a;
          this.container.style.MozTransition = this.mozContainerTransition;
        }
      };
      W2.prototype.disableAnimation = function() {
        this.container.style.WebkitTransition && (this.container.style.WebkitTransition = "", this.container.style.MozTransition = "", this.container.style.MsTransition = "", this.container.style.transition = "");
      };
      W2.prototype.hide = function(a) {
        this.container && (this.container.style.display = "none", this.currentSeriesIndex = -1, this._prevY = this._prevX = NaN, ("undefined" === typeof a || a) && this.chart.resetOverlayedCanvas());
      };
      W2.prototype.show = function(a, d, c) {
        this._updateToolTip(a, d, "undefined" === typeof c ? false : c);
      };
      W2.prototype.showAtIndex = function(a, d) {
      };
      W2.prototype.showAtX = function(a, d) {
        if (!this.enabled)
          return false;
        this.chart.clearedOverlayedCanvas = null;
        var c, b, e, g = [];
        e = false;
        d = !r(d) && 0 <= d && d < this.chart.data.length ? d : 0;
        if (this.shared)
          for (var h2 = 0; h2 < this.chart.data.length; h2++)
            c = this.chart.data[h2], (b = c.getDataPointAtX(a, false)) && (b.dataPoint && !r(b.dataPoint.y) && c.visible) && (b.dataSeries = c, g.push(b));
        else
          c = this.chart.data[d], (b = c.getDataPointAtX(a, false)) && (b.dataPoint && !r(b.dataPoint.y) && c.visible) && (b.dataSeries = c, g.push(b));
        if (0 < g.length) {
          for (h2 = 0; h2 < g.length; h2++)
            if (b = g[h2], (this.shared || 0 <= b.dataSeries.type.indexOf("100")) && b.dataPoint.x >= b.dataSeries.axisX.viewportMinimum && b.dataPoint.x <= b.dataSeries.axisX.viewportMaximum) {
              e = false;
              break;
            } else if (b.dataPoint.x < b.dataSeries.axisX.viewportMinimum || b.dataPoint.x > b.dataSeries.axisX.viewportMaximum || b.dataPoint.y < b.dataSeries.axisY.viewportMinimum || b.dataPoint.y > b.dataSeries.axisY.viewportMaximum)
              e = true;
            else {
              e = false;
              break;
            }
          if (e)
            return this.hide(), false;
          this.highlightObjects(g);
          this._entries = g;
          h2 = "";
          h2 = this.getToolTipInnerHTML({ entries: g });
          if (null !== h2) {
            this.contentDiv.innerHTML = h2;
            if (this.isToolTipDefinedInData && r(this.options.content) && r(this.options.contentFormatter))
              for (b = this.contentDiv.getElementsByTagName("span"), h2 = 0; h2 < b.length; h2++)
                b[h2] && (b[h2].style.color = b[h2].getAttribute("data-color"));
            h2 = false;
            "none" === this.container.style.display && (h2 = true, this.container.style.display = "block");
            try {
              this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : u ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = "waterfall" === g[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : g[0].dataPoint.color ? g[0].dataPoint.color : 0 < g[0].dataPoint.y ? g[0].dataSeries.risingColor : g[0].dataSeries.fallingColor : "error" === g[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : g[0].dataSeries.color ? g[0].dataSeries.color : g[0].dataSeries._colorSet[c.index % g[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : g[0].dataPoint.color ? g[0].dataPoint.color : g[0].dataSeries.color ? g[0].dataSeries.color : g[0].dataSeries._colorSet[g[0].index % g[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : u ? "italic" : "normal";
            } catch (l2) {
            }
            "pie" === g[0].dataSeries.type || "doughnut" === g[0].dataSeries.type || "funnel" === g[0].dataSeries.type || "pyramid" === g[0].dataSeries.type ? c = mouseX - 10 - this.container.clientWidth : (c = "bar" === g[0].dataSeries.type || "rangeBar" === g[0].dataSeries.type || "stackedBar" === g[0].dataSeries.type || "stackedBar100" === g[0].dataSeries.type ? g[0].dataSeries.axisY.convertValueToPixel(g[0].dataPoint.y) - this.container.clientWidth << 0 : g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x) - this.container.clientWidth << 0, c -= 10);
            0 > c && (c += this.container.clientWidth + 20);
            c + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (c = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
            g = 1 !== g.length || this.shared || "line" !== g[0].dataSeries.type && "stepLine" !== g[0].dataSeries.type && "spline" !== g[0].dataSeries.type && "area" !== g[0].dataSeries.type && "stepArea" !== g[0].dataSeries.type && "splineArea" !== g[0].dataSeries.type ? "bar" === g[0].dataSeries.type || "rangeBar" === g[0].dataSeries.type || "stackedBar" === g[0].dataSeries.type || "stackedBar100" === g[0].dataSeries.type ? g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x) : g[0].dataSeries.axisY.convertValueToPixel(g[0].dataPoint.y) : g[0].dataSeries.axisY.convertValueToPixel(g[0].dataPoint.y);
            g = -g + 10;
            0 < g + this.container.clientHeight + 5 && (g -= g + this.container.clientHeight + 5 - 0);
            this.fixMozTransitionDelay(c, g);
            !this.animationEnabled || h2 ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
            this.container.style.left = c + "px";
            this.container.style.bottom = g + "px";
          } else
            return this.hide(false), false;
        } else
          return this.hide(), false;
        return true;
      };
      W2.prototype.fixMozTransitionDelay = function(a, d) {
        if (20 < this.chart._eventManager.lastObjectId)
          this.mozContainerTransition = this.getContainerTransition(0);
        else {
          var c = parseFloat(this.container.style.left), c = isNaN(c) ? 0 : c, b = parseFloat(this.container.style.bottom), b = isNaN(b) ? 0 : b;
          10 < Math.sqrt(Math.pow(c - a, 2) + Math.pow(b - d, 2)) ? this.mozContainerTransition = this.getContainerTransition(0.1) : this.mozContainerTransition = this.getContainerTransition(0);
        }
      };
      W2.prototype.getContainerTransition = function(a) {
        return "left " + a + "s ease-out 0s, bottom " + a + "s ease-out 0s";
      };
      aa2.prototype.reset = function() {
        this.lastObjectId = 0;
        this.objectMap = [];
        this.rectangularRegionEventSubscriptions = [];
        this.previousDataPointEventObject = null;
        this.eventObjects = [];
        u && (this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height), this.ghostCtx.beginPath());
      };
      aa2.prototype.getNewObjectTrackingId = function() {
        return ++this.lastObjectId;
      };
      aa2.prototype.mouseEventHandler = function(a) {
        if ("mousemove" === a.type || "click" === a.type) {
          var d = [], c = Qa(a), b = null;
          if ((b = this.chart.getObjectAtXY(c.x, c.y, false)) && "undefined" !== typeof this.objectMap[b])
            if (b = this.objectMap[b], "dataPoint" === b.objectType) {
              var e = this.chart.data[b.dataSeriesIndex], g = e.dataPoints[b.dataPointIndex], h2 = b.dataPointIndex;
              b.eventParameter = { x: c.x, y: c.y, dataPoint: g, dataSeries: e.options, dataPointIndex: h2, dataSeriesIndex: e.index, chart: this.chart };
              b.eventContext = { context: g, userContext: g, mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", click: "click" };
              d.push(b);
              b = this.objectMap[e.id];
              b.eventParameter = { x: c.x, y: c.y, dataPoint: g, dataSeries: e.options, dataPointIndex: h2, dataSeriesIndex: e.index, chart: this.chart };
              b.eventContext = { context: e, userContext: e.options, mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", click: "click" };
              d.push(this.objectMap[e.id]);
            } else
              "legendItem" === b.objectType && (e = this.chart.data[b.dataSeriesIndex], g = null !== b.dataPointIndex ? e.dataPoints[b.dataPointIndex] : null, b.eventParameter = {
                x: c.x,
                y: c.y,
                dataSeries: e.options,
                dataPoint: g,
                dataPointIndex: b.dataPointIndex,
                dataSeriesIndex: b.dataSeriesIndex,
                chart: this.chart
              }, b.eventContext = { context: this.chart.legend, userContext: this.chart.legend.options, mouseover: "itemmouseover", mousemove: "itemmousemove", mouseout: "itemmouseout", click: "itemclick" }, d.push(b));
          e = [];
          for (c = 0; c < this.mouseoveredObjectMaps.length; c++) {
            g = true;
            for (b = 0; b < d.length; b++)
              if (d[b].id === this.mouseoveredObjectMaps[c].id) {
                g = false;
                break;
              }
            g ? this.fireEvent(this.mouseoveredObjectMaps[c], "mouseout", a) : e.push(this.mouseoveredObjectMaps[c]);
          }
          this.mouseoveredObjectMaps = e;
          for (c = 0; c < d.length; c++) {
            e = false;
            for (b = 0; b < this.mouseoveredObjectMaps.length; b++)
              if (d[c].id === this.mouseoveredObjectMaps[b].id) {
                e = true;
                break;
              }
            e || (this.fireEvent(d[c], "mouseover", a), this.mouseoveredObjectMaps.push(d[c]));
            "click" === a.type ? this.fireEvent(d[c], "click", a) : "mousemove" === a.type && this.fireEvent(d[c], "mousemove", a);
          }
        }
      };
      aa2.prototype.fireEvent = function(a, d, c) {
        if (a && d) {
          var b = a.eventParameter, e = a.eventContext, g = a.eventContext.userContext;
          g && (e && g[e[d]]) && g[e[d]].call(g, b);
          "mouseout" !== d ? g.cursor && g.cursor !== c.target.style.cursor && (c.target.style.cursor = g.cursor) : (c.target.style.cursor = this.chart._defaultCursor, delete a.eventParameter, delete a.eventContext);
          "click" === d && ("dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler) && this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex], b);
          "click" === d && ("dataPoint" === a.objectType && this.chart.funnelPyramidClickHandler) && this.chart.funnelPyramidClickHandler.call(this.chart.data[a.dataSeriesIndex], b);
        }
      };
      ja2.prototype.animate = function(a, d, c, b, e) {
        var g = this;
        this.chart.isAnimating = true;
        e = e || P.easing.linear;
        c && this.animations.push({ startTime: (/* @__PURE__ */ new Date()).getTime() + (a ? a : 0), duration: d, animationCallback: c, onComplete: b });
        for (a = []; 0 < this.animations.length; )
          if (d = this.animations.shift(), c = (/* @__PURE__ */ new Date()).getTime(), b = 0, d.startTime <= c && (b = e(Math.min(c - d.startTime, d.duration), 0, 1, d.duration), b = Math.min(b, 1), isNaN(b) || !isFinite(b)) && (b = 1), 1 > b && a.push(d), d.animationCallback(b), 1 <= b && d.onComplete)
            d.onComplete();
        this.animations = a;
        0 < this.animations.length ? this.animationRequestId = this.chart.requestAnimFrame.call(window, function() {
          g.animate.call(g);
        }) : this.chart.isAnimating = false;
      };
      ja2.prototype.cancelAllAnimations = function() {
        this.animations = [];
        this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
        this.animationRequestId = null;
        this.chart.isAnimating = false;
      };
      var P = { yScaleAnimation: function(a, d) {
        if (0 !== a) {
          var c = d.dest, b = d.source.canvas, e = d.animationBase;
          c.drawImage(b, 0, 0, b.width, b.height, 0, e - e * a, c.canvas.width / ma, a * c.canvas.height / ma);
        }
      }, xScaleAnimation: function(a, d) {
        if (0 !== a) {
          var c = d.dest, b = d.source.canvas, e = d.animationBase;
          c.drawImage(b, 0, 0, b.width, b.height, e - e * a, 0, a * c.canvas.width / ma, c.canvas.height / ma);
        }
      }, xClipAnimation: function(a, d) {
        if (0 !== a) {
          var c = d.dest, b = d.source.canvas;
          c.save();
          0 < a && c.drawImage(b, 0, 0, b.width * a, b.height, 0, 0, b.width * a / ma, b.height / ma);
          c.restore();
        }
      }, fadeInAnimation: function(a, d) {
        if (0 !== a) {
          var c = d.dest, b = d.source.canvas;
          c.save();
          c.globalAlpha = a;
          c.drawImage(b, 0, 0, b.width, b.height, 0, 0, c.canvas.width / ma, c.canvas.height / ma);
          c.restore();
        }
      }, easing: { linear: function(a, d, c, b) {
        return c * a / b + d;
      }, easeOutQuad: function(a, d, c, b) {
        return -c * (a /= b) * (a - 2) + d;
      }, easeOutQuart: function(a, d, c, b) {
        return -c * ((a = a / b - 1) * a * a * a - 1) + d;
      }, easeInQuad: function(a, d, c, b) {
        return c * (a /= b) * a + d;
      }, easeInQuart: function(a, d, c, b) {
        return c * (a /= b) * a * a * a + d;
      } } }, Y = { drawMarker: function(a, d, c, b, e, g, h2, l2) {
        if (c) {
          var r2 = 1;
          c.fillStyle = g ? g : "#000000";
          c.strokeStyle = h2 ? h2 : "#000000";
          c.lineWidth = l2 ? l2 : 0;
          c.setLineDash && c.setLineDash(K("solid", l2));
          "circle" === b ? (c.moveTo(a, d), c.beginPath(), c.arc(a, d, e / 2, 0, 2 * Math.PI, false), g && c.fill(), l2 && (h2 ? c.stroke() : (r2 = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = r2))) : "square" === b ? (c.beginPath(), c.rect(a - e / 2, d - e / 2, e, e), g && c.fill(), l2 && (h2 ? c.stroke() : (r2 = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = r2))) : "triangle" === b ? (c.beginPath(), c.moveTo(a - e / 2, d + e / 2), c.lineTo(a + e / 2, d + e / 2), c.lineTo(a, d - e / 2), c.closePath(), g && c.fill(), l2 && (h2 ? c.stroke() : (r2 = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = r2)), c.beginPath()) : "cross" === b && (c.strokeStyle = g, c.lineWidth = e / 4, c.beginPath(), c.moveTo(a - e / 2, d - e / 2), c.lineTo(a + e / 2, d + e / 2), c.stroke(), c.moveTo(a + e / 2, d - e / 2), c.lineTo(a - e / 2, d + e / 2), c.stroke());
        }
      }, drawMarkers: function(a) {
        for (var d = 0; d < a.length; d++) {
          var c = a[d];
          Y.drawMarker(c.x, c.y, c.ctx, c.type, c.size, c.color, c.borderColor, c.borderThickness);
        }
      } };
      return l;
    }();
    E.version = "v3.7.38 GA";
    window.CanvasJS && (E && !window.CanvasJS.Chart) && (window.CanvasJS.Chart = E);
  })();
  document.createElement("canvas").getContext || function() {
    function V() {
      return this.context_ || (this.context_ = new C(this));
    }
    function W(a, b, c) {
      var g = M.call(arguments, 2);
      return function() {
        return a.apply(b, g.concat(M.call(arguments)));
      };
    }
    function N(a) {
      return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
    }
    function O(a) {
      a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
      a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
      a.styleSheets.ex_canvas_ || (a = a.createStyleSheet(), a.owningElement.id = "ex_canvas_", a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}");
    }
    function X(a) {
      var b = a.srcElement;
      switch (a.propertyName) {
        case "width":
          b.getContext().clearRect();
          b.style.width = b.attributes.width.nodeValue + "px";
          b.firstChild.style.width = b.clientWidth + "px";
          break;
        case "height":
          b.getContext().clearRect(), b.style.height = b.attributes.height.nodeValue + "px", b.firstChild.style.height = b.clientHeight + "px";
      }
    }
    function Y(a) {
      a = a.srcElement;
      a.firstChild && (a.firstChild.style.width = a.clientWidth + "px", a.firstChild.style.height = a.clientHeight + "px");
    }
    function D() {
      return [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
    }
    function t(a, b) {
      for (var c = D(), g = 0; 3 > g; g++)
        for (var e = 0; 3 > e; e++) {
          for (var f = 0, d2 = 0; 3 > d2; d2++)
            f += a[g][d2] * b[d2][e];
          c[g][e] = f;
        }
      return c;
    }
    function P(a, b) {
      b.fillStyle = a.fillStyle;
      b.lineCap = a.lineCap;
      b.lineJoin = a.lineJoin;
      b.lineWidth = a.lineWidth;
      b.miterLimit = a.miterLimit;
      b.shadowBlur = a.shadowBlur;
      b.shadowColor = a.shadowColor;
      b.shadowOffsetX = a.shadowOffsetX;
      b.shadowOffsetY = a.shadowOffsetY;
      b.strokeStyle = a.strokeStyle;
      b.globalAlpha = a.globalAlpha;
      b.font = a.font;
      b.textAlign = a.textAlign;
      b.textBaseline = a.textBaseline;
      b.arcScaleX_ = a.arcScaleX_;
      b.arcScaleY_ = a.arcScaleY_;
      b.lineScale_ = a.lineScale_;
    }
    function Q(a) {
      var b = a.indexOf("(", 3), c = a.indexOf(")", b + 1), b = a.substring(b + 1, c).split(",");
      if (4 != b.length || "a" != a.charAt(3))
        b[3] = 1;
      return b;
    }
    function E(a, b, c) {
      return Math.min(c, Math.max(b, a));
    }
    function F(a, b, c) {
      0 > c && c++;
      1 < c && c--;
      return 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a;
    }
    function G(a) {
      if (a in H)
        return H[a];
      var b, c = 1;
      a = String(a);
      if ("#" == a.charAt(0))
        b = a;
      else if (/^rgb/.test(a)) {
        c = Q(a);
        b = "#";
        for (var g, e = 0; 3 > e; e++)
          g = -1 != c[e].indexOf("%") ? Math.floor(255 * (parseFloat(c[e]) / 100)) : +c[e], b += v[E(g, 0, 255)];
        c = +c[3];
      } else if (/^hsl/.test(a)) {
        e = c = Q(a);
        b = parseFloat(e[0]) / 360 % 360;
        0 > b && b++;
        g = E(parseFloat(e[1]) / 100, 0, 1);
        e = E(parseFloat(e[2]) / 100, 0, 1);
        if (0 == g)
          g = e = b = e;
        else {
          var f = 0.5 > e ? e * (1 + g) : e + g - e * g, d2 = 2 * e - f;
          g = F(d2, f, b + 1 / 3);
          e = F(d2, f, b);
          b = F(d2, f, b - 1 / 3);
        }
        b = "#" + v[Math.floor(255 * g)] + v[Math.floor(255 * e)] + v[Math.floor(255 * b)];
        c = c[3];
      } else
        b = Z[a] || a;
      return H[a] = { color: b, alpha: c };
    }
    function C(a) {
      this.m_ = D();
      this.mStack_ = [];
      this.aStack_ = [];
      this.currentPath_ = [];
      this.fillStyle = this.strokeStyle = "#000";
      this.lineWidth = 1;
      this.lineJoin = "miter";
      this.lineCap = "butt";
      this.miterLimit = 1 * q;
      this.globalAlpha = 1;
      this.font = "10px sans-serif";
      this.textAlign = "left";
      this.textBaseline = "alphabetic";
      this.canvas = a;
      var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute", c = a.ownerDocument.createElement("div");
      c.style.cssText = b;
      a.appendChild(c);
      b = c.cloneNode(false);
      b.style.backgroundColor = "red";
      b.style.filter = "alpha(opacity=0)";
      a.appendChild(b);
      this.element_ = c;
      this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1;
    }
    function R(a, b, c, g) {
      a.currentPath_.push({ type: "bezierCurveTo", cp1x: b.x, cp1y: b.y, cp2x: c.x, cp2y: c.y, x: g.x, y: g.y });
      a.currentX_ = g.x;
      a.currentY_ = g.y;
    }
    function S(a, b) {
      var c = G(a.strokeStyle), g = c.color, c = c.alpha * a.globalAlpha, e = a.lineScale_ * a.lineWidth;
      1 > e && (c *= e);
      b.push(
        "<g_vml_:stroke",
        ' opacity="',
        c,
        '"',
        ' joinstyle="',
        a.lineJoin,
        '"',
        ' miterlimit="',
        a.miterLimit,
        '"',
        ' endcap="',
        $[a.lineCap] || "square",
        '"',
        ' weight="',
        e,
        'px"',
        ' color="',
        g,
        '" />'
      );
    }
    function T(a, b, c, g) {
      var e = a.fillStyle, f = a.arcScaleX_, d2 = a.arcScaleY_, k2 = g.x - c.x, n = g.y - c.y;
      if (e instanceof w) {
        var h = 0, l = g = 0, u = 0, m = 1;
        if ("gradient" == e.type_) {
          h = e.x1_ / f;
          c = e.y1_ / d2;
          var p = s(a, e.x0_ / f, e.y0_ / d2), h = s(a, h, c), h = 180 * Math.atan2(h.x - p.x, h.y - p.y) / Math.PI;
          0 > h && (h += 360);
          1e-6 > h && (h = 0);
        } else
          p = s(a, e.x0_, e.y0_), g = (p.x - c.x) / k2, l = (p.y - c.y) / n, k2 /= f * q, n /= d2 * q, m = x.max(k2, n), u = 2 * e.r0_ / m, m = 2 * e.r1_ / m - u;
        f = e.colors_;
        f.sort(function(a2, b2) {
          return a2.offset - b2.offset;
        });
        d2 = f.length;
        p = f[0].color;
        c = f[d2 - 1].color;
        k2 = f[0].alpha * a.globalAlpha;
        a = f[d2 - 1].alpha * a.globalAlpha;
        for (var n = [], r2 = 0; r2 < d2; r2++) {
          var t2 = f[r2];
          n.push(t2.offset * m + u + " " + t2.color);
        }
        b.push('<g_vml_:fill type="', e.type_, '"', ' method="none" focus="100%"', ' color="', p, '"', ' color2="', c, '"', ' colors="', n.join(","), '"', ' opacity="', a, '"', ' g_o_:opacity2="', k2, '"', ' angle="', h, '"', ' focusposition="', g, ",", l, '" />');
      } else
        e instanceof I ? k2 && n && b.push("<g_vml_:fill", ' position="', -c.x / k2 * f * f, ",", -c.y / n * d2 * d2, '"', ' type="tile"', ' src="', e.src_, '" />') : (e = G(a.fillStyle), b.push('<g_vml_:fill color="', e.color, '" opacity="', e.alpha * a.globalAlpha, '" />'));
    }
    function s(a, b, c) {
      a = a.m_;
      return { x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r, y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r };
    }
    function z(a, b, c) {
      isFinite(b[0][0]) && (isFinite(b[0][1]) && isFinite(b[1][0]) && isFinite(b[1][1]) && isFinite(b[2][0]) && isFinite(b[2][1])) && (a.m_ = b, c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] * b[1][0]))));
    }
    function w(a) {
      this.type_ = a;
      this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
      this.colors_ = [];
    }
    function I(a, b) {
      if (!a || 1 != a.nodeType || "IMG" != a.tagName)
        throw new A("TYPE_MISMATCH_ERR");
      if ("complete" != a.readyState)
        throw new A("INVALID_STATE_ERR");
      switch (b) {
        case "repeat":
        case null:
        case "":
          this.repetition_ = "repeat";
          break;
        case "repeat-x":
        case "repeat-y":
        case "no-repeat":
          this.repetition_ = b;
          break;
        default:
          throw new A("SYNTAX_ERR");
      }
      this.src_ = a.src;
      this.width_ = a.width;
      this.height_ = a.height;
    }
    function A(a) {
      this.code = this[a];
      this.message = a + ": DOM Exception " + this.code;
    }
    var x = Math, k = x.round, J = x.sin, K = x.cos, ba = x.abs, aa = x.sqrt, q = 10, r = q / 2;
    navigator.userAgent.match(/MSIE ([\d.]+)?/);
    var M = Array.prototype.slice;
    O(document);
    var U = { init: function(a) {
      a = a || document;
      a.createElement("canvas");
      a.attachEvent("onreadystatechange", W(this.init_, this, a));
    }, init_: function(a) {
      a = a.getElementsByTagName("canvas");
      for (var b = 0; b < a.length; b++)
        this.initElement(a[b]);
    }, initElement: function(a) {
      if (!a.getContext) {
        a.getContext = V;
        O(a.ownerDocument);
        a.innerHTML = "";
        a.attachEvent("onpropertychange", X);
        a.attachEvent("onresize", Y);
        var b = a.attributes;
        b.width && b.width.specified ? a.style.width = b.width.nodeValue + "px" : a.width = a.clientWidth;
        b.height && b.height.specified ? a.style.height = b.height.nodeValue + "px" : a.height = a.clientHeight;
      }
      return a;
    } };
    U.init();
    for (var v = [], d = 0; 16 > d; d++)
      for (var B = 0; 16 > B; B++)
        v[16 * d + B] = d.toString(16) + B.toString(16);
    var Z = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      grey: "#808080",
      greenyellow: "#ADFF2F",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      oldlace: "#FDF5E6",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      whitesmoke: "#F5F5F5",
      yellowgreen: "#9ACD32"
    }, H = {}, L = {}, $ = { butt: "flat", round: "round" }, d = C.prototype;
    d.clearRect = function() {
      this.textMeasureEl_ && (this.textMeasureEl_.removeNode(true), this.textMeasureEl_ = null);
      this.element_.innerHTML = "";
    };
    d.beginPath = function() {
      this.currentPath_ = [];
    };
    d.moveTo = function(a, b) {
      var c = s(this, a, b);
      this.currentPath_.push({ type: "moveTo", x: c.x, y: c.y });
      this.currentX_ = c.x;
      this.currentY_ = c.y;
    };
    d.lineTo = function(a, b) {
      var c = s(this, a, b);
      this.currentPath_.push({ type: "lineTo", x: c.x, y: c.y });
      this.currentX_ = c.x;
      this.currentY_ = c.y;
    };
    d.bezierCurveTo = function(a, b, c, g, e, f) {
      e = s(this, e, f);
      a = s(this, a, b);
      c = s(this, c, g);
      R(this, a, c, e);
    };
    d.quadraticCurveTo = function(a, b, c, g) {
      a = s(this, a, b);
      c = s(this, c, g);
      g = { x: this.currentX_ + 2 / 3 * (a.x - this.currentX_), y: this.currentY_ + 2 / 3 * (a.y - this.currentY_) };
      R(this, g, { x: g.x + (c.x - this.currentX_) / 3, y: g.y + (c.y - this.currentY_) / 3 }, c);
    };
    d.arc = function(a, b, c, g, e, f) {
      c *= q;
      var d2 = f ? "at" : "wa", k2 = a + K(g) * c - r, n = b + J(g) * c - r;
      g = a + K(e) * c - r;
      e = b + J(e) * c - r;
      k2 != g || f || (k2 += 0.125);
      a = s(this, a, b);
      k2 = s(this, k2, n);
      g = s(this, g, e);
      this.currentPath_.push({
        type: d2,
        x: a.x,
        y: a.y,
        radius: c,
        xStart: k2.x,
        yStart: k2.y,
        xEnd: g.x,
        yEnd: g.y
      });
    };
    d.rect = function(a, b, c, g) {
      this.moveTo(a, b);
      this.lineTo(a + c, b);
      this.lineTo(a + c, b + g);
      this.lineTo(a, b + g);
      this.closePath();
    };
    d.strokeRect = function(a, b, c, g) {
      var e = this.currentPath_;
      this.beginPath();
      this.moveTo(a, b);
      this.lineTo(a + c, b);
      this.lineTo(a + c, b + g);
      this.lineTo(a, b + g);
      this.closePath();
      this.stroke();
      this.currentPath_ = e;
    };
    d.fillRect = function(a, b, c, g) {
      var e = this.currentPath_;
      this.beginPath();
      this.moveTo(a, b);
      this.lineTo(a + c, b);
      this.lineTo(a + c, b + g);
      this.lineTo(a, b + g);
      this.closePath();
      this.fill();
      this.currentPath_ = e;
    };
    d.createLinearGradient = function(a, b, c, g) {
      var e = new w("gradient");
      e.x0_ = a;
      e.y0_ = b;
      e.x1_ = c;
      e.y1_ = g;
      return e;
    };
    d.createRadialGradient = function(a, b, c, g, e, f) {
      var d2 = new w("gradientradial");
      d2.x0_ = a;
      d2.y0_ = b;
      d2.r0_ = c;
      d2.x1_ = g;
      d2.y1_ = e;
      d2.r1_ = f;
      return d2;
    };
    d.drawImage = function(a, b) {
      var c, g, e, d2, r2, y, n, h;
      e = a.runtimeStyle.width;
      d2 = a.runtimeStyle.height;
      a.runtimeStyle.width = "auto";
      a.runtimeStyle.height = "auto";
      var l = a.width, u = a.height;
      a.runtimeStyle.width = e;
      a.runtimeStyle.height = d2;
      if (3 == arguments.length)
        c = arguments[1], g = arguments[2], r2 = y = 0, n = e = l, h = d2 = u;
      else if (5 == arguments.length)
        c = arguments[1], g = arguments[2], e = arguments[3], d2 = arguments[4], r2 = y = 0, n = l, h = u;
      else if (9 == arguments.length)
        r2 = arguments[1], y = arguments[2], n = arguments[3], h = arguments[4], c = arguments[5], g = arguments[6], e = arguments[7], d2 = arguments[8];
      else
        throw Error("Invalid number of arguments");
      var m = s(this, c, g), p = [];
      p.push(
        " <g_vml_:group",
        ' coordsize="',
        10 * q,
        ",",
        10 * q,
        '"',
        ' coordorigin="0,0"',
        ' style="width:',
        10,
        "px;height:",
        10,
        "px;position:absolute;"
      );
      if (1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
        var t2 = [];
        t2.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", k(m.x / q), ",", "Dy=", k(m.y / q), "");
        var v2 = s(this, c + e, g), w2 = s(this, c, g + d2);
        c = s(this, c + e, g + d2);
        m.x = x.max(m.x, v2.x, w2.x, c.x);
        m.y = x.max(m.y, v2.y, w2.y, c.y);
        p.push("padding:0 ", k(m.x / q), "px ", k(m.y / q), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", t2.join(""), ", sizingmethod='clip');");
      } else
        p.push(
          "top:",
          k(m.y / q),
          "px;left:",
          k(m.x / q),
          "px;"
        );
      p.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', q * e, "px;", " height:", q * d2, 'px"', ' cropleft="', r2 / l, '"', ' croptop="', y / u, '"', ' cropright="', (l - r2 - n) / l, '"', ' cropbottom="', (u - y - h) / u, '"', " />", "</g_vml_:group>");
      this.element_.insertAdjacentHTML("BeforeEnd", p.join(""));
    };
    d.stroke = function(a) {
      var b = [];
      b.push(
        "<g_vml_:shape",
        ' filled="',
        !!a,
        '"',
        ' style="position:absolute;width:',
        10,
        "px;height:",
        10,
        'px;"',
        ' coordorigin="0,0"',
        ' coordsize="',
        10 * q,
        ",",
        10 * q,
        '"',
        ' stroked="',
        !a,
        '"',
        ' path="'
      );
      for (var c = { x: null, y: null }, d2 = { x: null, y: null }, e = 0; e < this.currentPath_.length; e++) {
        var f = this.currentPath_[e];
        switch (f.type) {
          case "moveTo":
            b.push(" m ", k(f.x), ",", k(f.y));
            break;
          case "lineTo":
            b.push(" l ", k(f.x), ",", k(f.y));
            break;
          case "close":
            b.push(" x ");
            f = null;
            break;
          case "bezierCurveTo":
            b.push(" c ", k(f.cp1x), ",", k(f.cp1y), ",", k(f.cp2x), ",", k(f.cp2y), ",", k(f.x), ",", k(f.y));
            break;
          case "at":
          case "wa":
            b.push(" ", f.type, " ", k(f.x - this.arcScaleX_ * f.radius), ",", k(f.y - this.arcScaleY_ * f.radius), " ", k(f.x + this.arcScaleX_ * f.radius), ",", k(f.y + this.arcScaleY_ * f.radius), " ", k(f.xStart), ",", k(f.yStart), " ", k(f.xEnd), ",", k(f.yEnd));
        }
        if (f) {
          if (null == c.x || f.x < c.x)
            c.x = f.x;
          if (null == d2.x || f.x > d2.x)
            d2.x = f.x;
          if (null == c.y || f.y < c.y)
            c.y = f.y;
          if (null == d2.y || f.y > d2.y)
            d2.y = f.y;
        }
      }
      b.push(' ">');
      a ? T(this, b, c, d2) : S(this, b);
      b.push("</g_vml_:shape>");
      this.element_.insertAdjacentHTML("beforeEnd", b.join(""));
    };
    d.fill = function() {
      this.stroke(true);
    };
    d.closePath = function() {
      this.currentPath_.push({ type: "close" });
    };
    d.save = function() {
      var a = {};
      P(this, a);
      this.aStack_.push(a);
      this.mStack_.push(this.m_);
      this.m_ = t(D(), this.m_);
    };
    d.restore = function() {
      this.aStack_.length && (P(this.aStack_.pop(), this), this.m_ = this.mStack_.pop());
    };
    d.translate = function(a, b) {
      z(this, t([[1, 0, 0], [0, 1, 0], [a, b, 1]], this.m_), false);
    };
    d.rotate = function(a) {
      var b = K(a);
      a = J(a);
      z(this, t([[b, a, 0], [-a, b, 0], [0, 0, 1]], this.m_), false);
    };
    d.scale = function(a, b) {
      this.arcScaleX_ *= a;
      this.arcScaleY_ *= b;
      z(this, t([[a, 0, 0], [0, b, 0], [0, 0, 1]], this.m_), true);
    };
    d.transform = function(a, b, c, d2, e, f) {
      z(this, t([[
        a,
        b,
        0
      ], [c, d2, 0], [e, f, 1]], this.m_), true);
    };
    d.setTransform = function(a, b, c, d2, e, f) {
      z(this, [[a, b, 0], [c, d2, 0], [e, f, 1]], true);
    };
    d.drawText_ = function(a, b, c, d2, e) {
      var f = this.m_;
      d2 = 0;
      var r2 = 1e3, t2 = 0, n = [], h;
      h = this.font;
      if (L[h])
        h = L[h];
      else {
        var l = document.createElement("div").style;
        try {
          l.font = h;
        } catch (u) {
        }
        h = L[h] = { style: l.fontStyle || "normal", variant: l.fontVariant || "normal", weight: l.fontWeight || "normal", size: l.fontSize || 10, family: l.fontFamily || "sans-serif" };
      }
      var l = h, m = this.element_;
      h = {};
      for (var p in l)
        h[p] = l[p];
      p = parseFloat(m.currentStyle.fontSize);
      m = parseFloat(l.size);
      "number" == typeof l.size ? h.size = l.size : -1 != l.size.indexOf("px") ? h.size = m : -1 != l.size.indexOf("em") ? h.size = p * m : -1 != l.size.indexOf("%") ? h.size = p / 100 * m : -1 != l.size.indexOf("pt") ? h.size = m / 0.75 : h.size = p;
      h.size *= 0.981;
      p = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family;
      m = this.element_.currentStyle;
      l = this.textAlign.toLowerCase();
      switch (l) {
        case "left":
        case "center":
        case "right":
          break;
        case "end":
          l = "ltr" == m.direction ? "right" : "left";
          break;
        case "start":
          l = "rtl" == m.direction ? "right" : "left";
          break;
        default:
          l = "left";
      }
      switch (this.textBaseline) {
        case "hanging":
        case "top":
          t2 = h.size / 1.75;
          break;
        case "middle":
          break;
        default:
        case null:
        case "alphabetic":
        case "ideographic":
        case "bottom":
          t2 = -h.size / 2.25;
      }
      switch (l) {
        case "right":
          d2 = 1e3;
          r2 = 0.05;
          break;
        case "center":
          d2 = r2 = 500;
      }
      b = s(this, b + 0, c + t2);
      n.push('<g_vml_:line from="', -d2, ' 0" to="', r2, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !e, '" stroked="', !!e, '" style="position:absolute;width:1px;height:1px;">');
      e ? S(this, n) : T(
        this,
        n,
        { x: -d2, y: 0 },
        { x: r2, y: h.size }
      );
      e = f[0][0].toFixed(3) + "," + f[1][0].toFixed(3) + "," + f[0][1].toFixed(3) + "," + f[1][1].toFixed(3) + ",0,0";
      b = k(b.x / q) + "," + k(b.y / q);
      n.push('<g_vml_:skew on="t" matrix="', e, '" ', ' offset="', b, '" origin="', d2, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', N(a), '" style="v-text-align:', l, ";font:", N(p), '" /></g_vml_:line>');
      this.element_.insertAdjacentHTML("beforeEnd", n.join(""));
    };
    d.fillText = function(a, b, c, d2) {
      this.drawText_(a, b, c, d2, false);
    };
    d.strokeText = function(a, b, c, d2) {
      this.drawText_(a, b, c, d2, true);
    };
    d.measureText = function(a) {
      this.textMeasureEl_ || (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'), this.textMeasureEl_ = this.element_.lastChild);
      var b = this.element_.ownerDocument;
      this.textMeasureEl_.innerHTML = "";
      this.textMeasureEl_.style.font = this.font;
      this.textMeasureEl_.appendChild(b.createTextNode(a));
      return { width: this.textMeasureEl_.offsetWidth };
    };
    d.clip = function() {
    };
    d.arcTo = function() {
    };
    d.createPattern = function(a, b) {
      return new I(a, b);
    };
    w.prototype.addColorStop = function(a, b) {
      b = G(b);
      this.colors_.push({ offset: a, color: b.color, alpha: b.alpha });
    };
    d = A.prototype = Error();
    d.INDEX_SIZE_ERR = 1;
    d.DOMSTRING_SIZE_ERR = 2;
    d.HIERARCHY_REQUEST_ERR = 3;
    d.WRONG_DOCUMENT_ERR = 4;
    d.INVALID_CHARACTER_ERR = 5;
    d.NO_DATA_ALLOWED_ERR = 6;
    d.NO_MODIFICATION_ALLOWED_ERR = 7;
    d.NOT_FOUND_ERR = 8;
    d.NOT_SUPPORTED_ERR = 9;
    d.INUSE_ATTRIBUTE_ERR = 10;
    d.INVALID_STATE_ERR = 11;
    d.SYNTAX_ERR = 12;
    d.INVALID_MODIFICATION_ERR = 13;
    d.NAMESPACE_ERR = 14;
    d.INVALID_ACCESS_ERR = 15;
    d.VALIDATION_ERR = 16;
    d.TYPE_MISMATCH_ERR = 17;
    G_vmlCanvasManager = U;
    CanvasRenderingContext2D = C;
    CanvasGradient = w;
    CanvasPattern = I;
    DOMException = A;
  }();
})(canvasjs_min);
var canvasjs_minExports = canvasjs_min.exports;
const CanvasJS = /* @__PURE__ */ getDefaultExportFromCjs(canvasjs_minExports);
CanvasJS.addColorSet(
  "colorSet",
  [
    // colorSet Array
    "#393b38",
    "#ed8796",
    "#f5a97f",
    "#eed49f",
    "#a6da95",
    "#7de4db",
    "#7dc4e4",
    "#a0a1f6",
    "#c6a0f6",
    "#f6a0f6"
  ]
);
class Chart extends Element {
  constructor(taskId, chartData) {
    super("div", "", { class: "chart", id: `chart-${taskId}`, hidden: true });
    this.taskId = taskId;
    this.chartData = chartData;
    document.body.append(this.element);
    this.render();
  }
  render() {
    const dataPoints = this.chartData.map((obj) => ({ label: `${obj.range[0]}-${obj.range[1]}`, y: obj.count }));
    const chart = new CanvasJS.Chart(`chart-${this.taskId}`, {
      colorSet: "colorSet",
      backgroundColor: "transparent",
      data: [{
        type: "doughnut",
        startAngle: 272,
        radius: "70%",
        innerRadius: "40%",
        indexLabelFontSize: 16,
        indexLabel: "{label}: {y} (#percent%)",
        dataPoints
      }]
    });
    chart.render();
  }
}
class StatTable extends Element {
  constructor(taskId, stat) {
    super("div", "", {
      class: "stat-table"
    });
    this.taskId = taskId;
    this.stat = stat;
    this.render();
  }
  render() {
    this.renderPercentTable();
  }
  renderPercentTable() {
    const headerRow = new Element("li", "", {
      class: "stat-table__row"
    });
    const scoreHeader = new Element("span", "Score", {
      class: "cell stat-table__score"
    });
    const countHeader = new Element("span", "Count", {
      class: "cell stat-table__count"
    });
    const percentHeader = new Element("span", "Percentage", {
      class: "cell stat-table__percent"
    });
    headerRow.mountComponents([scoreHeader, countHeader, percentHeader]);
    this.mountComponents([headerRow]);
    this.stat.forEach((item) => {
      const row = new Element("li", "", {
        class: "stat-table__row"
      });
      const score = new Element("span", "", {
        class: "cell stat-table__score"
      });
      score.element.textContent = `${item.range[0]} - ${item.range[1]}`;
      const count = new Element("span", "", {
        class: "cell stat-table__count"
      });
      count.element.textContent = `${item.count}`;
      const percent = new Element("span", "", {
        class: "cell stat-table__percent"
      });
      percent.element.textContent = `(${item.percentage}%)`;
      row.mountComponents([score, count, percent]);
      this.mountComponents([row]);
    });
  }
}
class Button extends Element {
  constructor(text, className) {
    super("button", text, {
      class: `btn ${className}`
    });
  }
  setText(text) {
    this.element.textContent = text;
  }
}
const getDefaultRanges = (max) => {
  const percents = [0, 25, 50, 60, 70, 80, 90, 95, 98, 100];
  return percents.map((percent, ind, arr) => {
    const start = Math.floor(max / 100 * percent) || 1;
    const next = arr[ind + 1];
    const end = Math.floor(max / 100 * next - 1) || max;
    return { percentRange: [percent, next], range: [start, end] };
  });
};
const getDozenRanges = (max) => {
  let start = 0;
  const ranges = [];
  ranges.push({ range: [start + 1, start + 9] });
  start += 10;
  while (start <= max) {
    const end = start !== max ? start + 9 : max;
    ranges.push({ range: [start, end] });
    start += 10;
  }
  return ranges;
};
const getTaskScores = (students, taskId, withoutZeros = true) => students.map((student) => student.taskResults.find((task) => task.courseTaskId === taskId)).filter((item) => item).map(({ score }) => score).filter((score) => score || !withoutZeros);
const getScoreStat = (ranges, scores, passCountTotal, percentFlag) => {
  const scoreStat = ranges.map((range) => {
    const [min, max] = range.range;
    const count = scores.filter((score) => min <= score && score <= max).length;
    return {
      // range: `${min}-${max}`,
      // percentRange: `[${percentMin};${percentMax})`,
      ...range,
      count,
      ...percentFlag && {
        percentage: (count / passCountTotal * 100).toFixed(2)
      }
    };
  });
  return scoreStat;
};
const getStat = (taskId, percentFlag) => {
  const students = store.getState("score");
  const studentsActive = students.filter((student) => student.active);
  const scoresTotal = getTaskScores(students, taskId);
  const passCountTotal = scoresTotal.length;
  const passCountActive = getTaskScores(studentsActive, taskId).length;
  const maxScore = Math.max(...scoresTotal);
  const rangesPercent = getDefaultRanges(maxScore);
  const rangesDozen = getDozenRanges(maxScore);
  const scoreStatPercent = getScoreStat(rangesPercent, scoresTotal, passCountTotal, percentFlag);
  const scoreStatDozens = getScoreStat(rangesDozen, scoresTotal, passCountTotal, percentFlag);
  return {
    passCountTotal,
    passCountActive,
    scoreStatPercent,
    scoreStatDozens
  };
};
const getTaskStat = (taskId) => {
  const stat = store.getState("taskStat");
  if (stat && stat[taskId])
    return stat[taskId];
  const newStat = getStat(taskId, true);
  store.setStateOfCollection("taskStat", taskId, newStat);
  return newStat;
};
class Task extends Element {
  constructor(taskId) {
    super("div", "", {
      class: "task"
    });
    this.taskId = taskId;
    this.render();
  }
  render() {
    this.renderTitle();
    const {
      scoreStatPercent: stat = {},
      scoreStatDozens: statDozen = {}
    } = getTaskStat(this.taskId);
    this.chart = new Chart(this.taskId, stat);
    this.table = new StatTable(this.taskId, stat);
    this.tableDozen = new StatTable(this.taskId, statDozen);
    this.table.hide();
    this.tableDozen.hide();
    this.mountComponents([this.chart, this.table, this.tableDozen]);
    this.chart.view();
  }
  renderTitle() {
    this.title = new Element("h2", "", { class: "task__title" });
    this.name = new Element("span", "", { class: "task__name" });
    this.total = new Element("span", "", { class: "task__total" });
    this.active = new Element("span", "", { class: "task__active" });
    const { name } = store.getState("tasks").find((task) => task.id === this.taskId);
    const { passCountTotal, passCountActive } = getTaskStat(this.taskId);
    const { total, totalActive } = store.getState();
    const percentTotal = (passCountTotal / total * 100).toFixed(2);
    const percentActive = (passCountActive / totalActive * 100).toFixed(2);
    this.name.element.textContent = name;
    this.total.element.textContent = `Total: (${passCountTotal} / ${total}) (${percentTotal}%)`;
    this.active.element.textContent = `Active: (${passCountActive} / ${totalActive}) (${percentActive}%)`;
    this.title.mountComponents([this.name, this.total, this.active]);
    const button = new Button("Show table", "task__btn");
    button.setListeners([
      {
        event: "click",
        handler: () => {
          this.table.toggleView();
          this.tableDozen.toggleView();
          this.chart.toggleView();
          button.setText(button.element.textContent === "Show table" ? "Show chart" : "Show table");
        }
      }
    ]);
    this.mountComponents([this.title]);
    this.mountComponents([button]);
  }
}
class TasksBlock extends Element {
  constructor(type) {
    super("div", "", {
      class: "tasks"
    });
    this.type = type;
    this.render();
    this.renderTask(this.tasks[0].id);
  }
  render() {
    const tasksWrapper = new Element("div", "", { class: "tasks__wrapper " });
    const tasksTitle = new Element("h2", `${this.type}`, { class: "tasks__title " });
    const tasksList = new Element("ul", "", { class: "tasks__list " });
    this.taskContainer = new Element("div", "", {
      class: "task__container"
    });
    const tasks = this.getTaskList();
    this.tasks = tasks.map((task) => {
      const taskItem = new Element("li", `${task.name}`, {
        class: "tasks__item",
        "data-task-id": task.id
      });
      taskItem.id = task.id;
      taskItem.setListeners([{
        event: "click",
        handler: () => {
          this.renderTask(taskItem.id);
        }
      }]);
      return taskItem;
    });
    tasksList.mountComponents(this.tasks);
    tasksWrapper.mountComponents([tasksTitle, tasksList]);
    this.mountComponents([tasksWrapper, this.taskContainer]);
  }
  getTaskList() {
    switch (this.type) {
      case "Test": {
        return store.getState("tasks").filter((task) => task.type === "selfeducation");
      }
      case "Crosscheck": {
        return store.getState("tasks").filter((task) => task.checker === "crossCheck");
      }
      default: {
        return store.getState("tasks").filter((task) => task.type !== "selfeducation" && task.checker !== "crossCheck");
      }
    }
  }
  renderTask(taskId) {
    this.updateTasksListView(taskId);
    this.taskElem = new Task(taskId);
    this.taskContainer.mountComponents([this.taskElem], "replaceChildren");
  }
  updateTasksListView(activeTask) {
    this.tasks.forEach((task) => {
      if (task.id === activeTask) {
        task.setProperties({ "data-active": "" });
      } else {
        task.removeProperties(["data-active"]);
      }
    });
  }
}
class MainPage extends Element {
  constructor() {
    super("main", "", { class: "main" });
    this.render();
  }
  render() {
    const title = new Element("h1", "RSS Statistics FE2023Q3", {});
    const tasksTest = new TasksBlock("Test");
    const tasksCrosscheck = new TasksBlock("Crosscheck");
    const tasksOther = new TasksBlock("Other");
    this.mountComponents([title, tasksCrosscheck, tasksTest, tasksOther]);
  }
}
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}
const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const kindOf = /* @__PURE__ */ ((cache) => (thing) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null));
const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type;
};
const typeOfTest = (type) => (thing) => typeof thing === type;
const { isArray } = Array;
const isUndefined = typeOfTest("undefined");
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
const isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
const isString = typeOfTest("string");
const isFunction = typeOfTest("function");
const isNumber = typeOfTest("number");
const isObject = (thing) => thing !== null && typeof thing === "object";
const isBoolean = (thing) => thing === true || thing === false;
const isPlainObject = (val) => {
  if (kindOf(val) !== "object") {
    return false;
  }
  const prototype2 = getPrototypeOf(val);
  return (prototype2 === null || prototype2 === Object.prototype || Object.getPrototypeOf(prototype2) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
const isDate = kindOfTest("Date");
const isFile = kindOfTest("File");
const isBlob = kindOfTest("Blob");
const isFileList = kindOfTest("FileList");
const isStream = (val) => isObject(val) && isFunction(val.pipe);
const isFormData = (thing) => {
  let kind;
  return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
  kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
};
const isURLSearchParams = kindOfTest("URLSearchParams");
const trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(obj, fn, { allOwnKeys = false } = {}) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  let i;
  let l;
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
const _global = (() => {
  if (typeof globalThis !== "undefined")
    return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
const isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge() {
  const { caseless } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };
  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}
const extend = (a, b, thisArg, { allOwnKeys } = {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, { allOwnKeys });
  return a;
};
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
};
const inherits = (constructor, superConstructor, props, descriptors2) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};
const toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};
  destObj = destObj || {};
  if (sourceObj == null)
    return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};
const toArray = (thing) => {
  if (!thing)
    return null;
  if (isArray(thing))
    return thing;
  let i = thing.length;
  if (!isNumber(i))
    return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};
const isTypedArray = /* @__PURE__ */ ((TypedArray) => {
  return (thing) => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];
  const iterator = generator.call(obj);
  let result;
  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};
const isHTMLForm = kindOfTest("HTMLFormElement");
const toCamelCase = (str) => {
  return str.toLowerCase().replace(
    /[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};
const hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
const isRegExp = kindOfTest("RegExp");
const reduceDescriptors = (obj, reducer) => {
  const descriptors2 = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors2, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};
const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
      return false;
    }
    const value = obj[name];
    if (!isFunction(value))
      return;
    descriptor.enumerable = false;
    if ("writable" in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      };
    }
  });
};
const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define = (arr) => {
    arr.forEach((value) => {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
const noop = () => {
};
const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
};
const ALPHA = "abcdefghijklmnopqrstuvwxyz";
const DIGIT = "0123456789";
const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = "";
  const { length } = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length | 0];
  }
  return str;
};
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
const toJSONObject = (obj) => {
  const stack = new Array(10);
  const visit = (source, i) => {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (!("toJSON" in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};
        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i] = void 0;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
const isAsyncFn = kindOfTest("AsyncFunction");
const isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
const utils$1 = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
};
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = "AxiosError";
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}
utils$1.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils$1.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const prototype$1 = AxiosError.prototype;
const descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((code) => {
  descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype$1, "isAxiosError", { value: true });
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype$1);
  utils$1.toFlatObject(error, axiosError, function filter2(obj) {
    return obj !== Error.prototype;
  }, (prop) => {
    return prop !== "isAxiosError";
  });
  AxiosError.call(axiosError, error.message, code, config, request, response);
  axiosError.cause = error;
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
const httpAdapter = null;
function isVisitable(thing) {
  return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
}
function removeBrackets(key) {
  return utils$1.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
  if (!path)
    return key;
  return path.concat(key).map(function each(token, i) {
    token = removeBrackets(token);
    return !dots && i ? "[" + token + "]" : token;
  }).join(dots ? "." : "");
}
function isFlatArray(arr) {
  return utils$1.isArray(arr) && !arr.some(isVisitable);
}
const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});
function toFormData(obj, formData, options2) {
  if (!utils$1.isObject(obj)) {
    throw new TypeError("target must be an object");
  }
  formData = formData || new FormData();
  options2 = utils$1.toFlatObject(options2, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    return !utils$1.isUndefined(source[option]);
  });
  const metaTokens = options2.metaTokens;
  const visitor = options2.visitor || defaultVisitor;
  const dots = options2.dots;
  const indexes = options2.indexes;
  const _Blob = options2.Blob || typeof Blob !== "undefined" && Blob;
  const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
  if (!utils$1.isFunction(visitor)) {
    throw new TypeError("visitor must be a function");
  }
  function convertValue(value) {
    if (value === null)
      return "";
    if (utils$1.isDate(value)) {
      return value.toISOString();
    }
    if (!useBlob && utils$1.isBlob(value)) {
      throw new AxiosError("Blob is not supported. Use a Buffer instead.");
    }
    if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
      return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value === "object") {
      if (utils$1.endsWith(key, "{}")) {
        key = metaTokens ? key : key.slice(0, -2);
        value = JSON.stringify(value);
      } else if (utils$1.isArray(value) && isFlatArray(value) || (utils$1.isFileList(value) || utils$1.endsWith(key, "[]")) && (arr = utils$1.toArray(value))) {
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(utils$1.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
            convertValue(el)
          );
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (utils$1.isUndefined(value))
      return;
    if (stack.indexOf(value) !== -1) {
      throw Error("Circular reference detected in " + path.join("."));
    }
    stack.push(value);
    utils$1.forEach(value, function each(el, key) {
      const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(
        formData,
        el,
        utils$1.isString(key) ? key.trim() : key,
        path,
        exposedHelpers
      );
      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!utils$1.isObject(obj)) {
    throw new TypeError("data must be an object");
  }
  build(obj);
  return formData;
}
function encode$1(str) {
  const charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}
function AxiosURLSearchParams(params, options2) {
  this._pairs = [];
  params && toFormData(params, this, options2);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype.toString = function toString2(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url, params, options2) {
  if (!params) {
    return url;
  }
  const _encode = options2 && options2.encode || encode;
  const serializeFn = options2 && options2.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options2);
  } else {
    serializedParams = utils$1.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options2).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
}
class InterceptorManager {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options2) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options2 ? options2.synchronous : false,
      runWhen: options2 ? options2.runWhen : null
    });
    return this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils$1.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}
const transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};
const URLSearchParams$1 = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams;
const FormData$1 = typeof FormData !== "undefined" ? FormData : null;
const Blob$1 = typeof Blob !== "undefined" ? Blob : null;
const platform$1 = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
const hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
const hasStandardBrowserEnv = ((product) => {
  return hasBrowserEnv && ["ReactNative", "NativeScript", "NS"].indexOf(product) < 0;
})(typeof navigator !== "undefined" && navigator.product);
const hasStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
const utils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv,
  hasStandardBrowserEnv,
  hasStandardBrowserWebWorkerEnv
}, Symbol.toStringTag, { value: "Module" }));
const platform = {
  ...utils,
  ...platform$1
};
function toURLEncodedForm(data, options2) {
  return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils$1.isBuffer(value)) {
        this.append(key, value.toString("base64"));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options2));
}
function parsePropPath(name) {
  return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
    return match[0] === "[]" ? "" : match[1] || match[0];
  });
}
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    if (name === "__proto__")
      return true;
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils$1.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils$1.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !utils$1.isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path, value, target[name], index);
    if (result && utils$1.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
    const obj = {};
    utils$1.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils$1.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$1.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
  transitional: transitionalDefaults,
  adapter: ["xhr", "http"],
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || "";
    const hasJSONContentType = contentType.indexOf("application/json") > -1;
    const isObjectPayload = utils$1.isObject(data);
    if (isObjectPayload && utils$1.isHTMLForm(data)) {
      data = new FormData(data);
    }
    const isFormData2 = utils$1.isFormData(data);
    if (isFormData2) {
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }
    if (utils$1.isArrayBuffer(data) || utils$1.isBuffer(data) || utils$1.isStream(data) || utils$1.isFile(data) || utils$1.isBlob(data)) {
      return data;
    }
    if (utils$1.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$1.isURLSearchParams(data)) {
      headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
      return data.toString();
    }
    let isFileList2;
    if (isObjectPayload) {
      if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }
      if ((isFileList2 = utils$1.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
        const _FormData = this.env && this.env.FormData;
        return toFormData(
          isFileList2 ? { "files[]": data } : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType("application/json", false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    const transitional2 = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    const JSONRequested = this.responseType === "json";
    if (data && utils$1.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
utils$1.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
  defaults.headers[method] = {};
});
const defaults$1 = defaults;
const ignoreDuplicateOf = utils$1.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]);
const parseHeaders = (rawHeaders) => {
  const parsed = {};
  let key;
  let val;
  let i;
  rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
    i = line.indexOf(":");
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === "set-cookie") {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    }
  });
  return parsed;
};
const $internals = Symbol("internals");
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  const tokens = /* @__PURE__ */ Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
  if (utils$1.isFunction(filter2)) {
    return filter2.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils$1.isString(value))
    return;
  if (utils$1.isString(filter2)) {
    return value.indexOf(filter2) !== -1;
  }
  if (utils$1.isRegExp(filter2)) {
    return filter2.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = utils$1.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self2 = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error("header name must be a non-empty string");
      }
      const key = utils$1.findKey(self2, lHeader);
      if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
        self2[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils$1.findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (utils$1.isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (utils$1.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils$1.findKey(this, header);
      return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self2 = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = utils$1.findKey(self2, _header);
        if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
          delete self2[key];
          deleted = true;
        }
      }
    }
    if (utils$1.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;
    while (i--) {
      const key = keys[i];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self2 = this;
    const headers = {};
    utils$1.forEach(this, (value, header) => {
      const key = utils$1.findKey(headers, header);
      if (key) {
        self2[key] = normalizeValue(value);
        delete self2[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self2[header];
      }
      self2[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = /* @__PURE__ */ Object.create(null);
    utils$1.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(", ") : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed = new this(first);
    targets.forEach((target) => computed.set(target));
    return computed;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype2 = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype2, _header);
        accessors[lHeader] = true;
      }
    }
    utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
}
AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
utils$1.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1);
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  };
});
utils$1.freezeMethods(AxiosHeaders);
const AxiosHeaders$1 = AxiosHeaders;
function transformData(fns, response) {
  const config = this || defaults$1;
  const context = response || config;
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;
  utils$1.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
  });
  headers.normalize();
  return data;
}
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}
function CanceledError(message, config, request) {
  AxiosError.call(this, message == null ? "canceled" : message, AxiosError.ERR_CANCELED, config, request);
  this.name = "CanceledError";
}
utils$1.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});
function settle(resolve, reject, response) {
  const validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError(
      "Request failed with status code " + response.status,
      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}
const cookies = platform.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      const cookie = [name + "=" + encodeURIComponent(value)];
      utils$1.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
      utils$1.isString(path) && cookie.push("path=" + path);
      utils$1.isString(domain) && cookie.push("domain=" + domain);
      secure === true && cookie.push("secure");
      document.cookie = cookie.join("; ");
    },
    read(name) {
      const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove(name) {
      this.write(name, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}
const isURLSameOrigin = platform.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement("a");
    let originURL;
    function resolveURL(url) {
      let href = url;
      if (msie) {
        urlParsingNode.setAttribute("href", href);
        href = urlParsingNode.href;
      }
      urlParsingNode.setAttribute("href", href);
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
      };
    }
    originURL = resolveURL(window.location.href);
    return function isURLSameOrigin2(requestURL) {
      const parsed = utils$1.isString(requestURL) ? resolveURL(requestURL) : requestURL;
      return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function nonStandardBrowserEnv() {
    return function isURLSameOrigin2() {
      return true;
    };
  }()
);
function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || "";
}
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== void 0 ? min : 1e3;
  return function push(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i = tail;
    let bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    const passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
  };
}
function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);
  return (e) => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : void 0;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : void 0,
      bytes: progressBytes,
      rate: rate ? rate : void 0,
      estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
      event: e
    };
    data[isDownloadStream ? "download" : "upload"] = true;
    listener(data);
  };
}
const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
const xhrAdapter = isXHRAdapterSupported && function(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = AxiosHeaders$1.from(config.headers).normalize();
    let { responseType, withXSRFToken } = config;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }
      if (config.signal) {
        config.signal.removeEventListener("abort", onCanceled);
      }
    }
    let contentType;
    if (utils$1.isFormData(requestData)) {
      if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false);
      } else if ((contentType = requestHeaders.getContentType()) !== false) {
        const [type, ...tokens] = contentType ? contentType.split(";").map((token) => token.trim()).filter(Boolean) : [];
        requestHeaders.setContentType([type || "multipart/form-data", ...tokens].join("; "));
      }
    }
    let request = new XMLHttpRequest();
    if (config.auth) {
      const username = config.auth.username || "";
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
      requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
    }
    const fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
    request.timeout = config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      const responseHeaders = AxiosHeaders$1.from(
        "getAllResponseHeaders" in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request = null;
    }
    if ("onloadend" in request) {
      request.onloadend = onloadend;
    } else {
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, config, request));
      request = null;
    };
    request.onerror = function handleError() {
      reject(new AxiosError("Network Error", AxiosError.ERR_NETWORK, config, request));
      request = null;
    };
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
      const transitional2 = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new AxiosError(
        timeoutErrorMessage,
        transitional2.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
        config,
        request
      ));
      request = null;
    };
    if (platform.hasStandardBrowserEnv) {
      withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(config));
      if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin(fullPath)) {
        const xsrfValue = config.xsrfHeaderName && config.xsrfCookieName && cookies.read(config.xsrfCookieName);
        if (xsrfValue) {
          requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
      }
    }
    requestData === void 0 && requestHeaders.setContentType(null);
    if ("setRequestHeader" in request) {
      utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }
    if (!utils$1.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request.responseType = config.responseType;
    }
    if (typeof config.onDownloadProgress === "function") {
      request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
    }
    if (typeof config.onUploadProgress === "function" && request.upload) {
      request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
    }
    if (config.cancelToken || config.signal) {
      onCanceled = (cancel) => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };
      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
      }
    }
    const protocol = parseProtocol(fullPath);
    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError("Unsupported protocol " + protocol + ":", AxiosError.ERR_BAD_REQUEST, config));
      return;
    }
    request.send(requestData || null);
  });
};
const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter
};
utils$1.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, "name", { value });
    } catch (e) {
    }
    Object.defineProperty(fn, "adapterName", { value });
  }
});
const renderReason = (reason) => `- ${reason}`;
const isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;
const adapters = {
  getAdapter: (adapters2) => {
    adapters2 = utils$1.isArray(adapters2) ? adapters2 : [adapters2];
    const { length } = adapters2;
    let nameOrAdapter;
    let adapter;
    const rejectedReasons = {};
    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters2[i];
      let id;
      adapter = nameOrAdapter;
      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
        if (adapter === void 0) {
          throw new AxiosError(`Unknown adapter '${id}'`);
        }
      }
      if (adapter) {
        break;
      }
      rejectedReasons[id || "#" + i] = adapter;
    }
    if (!adapter) {
      const reasons = Object.entries(rejectedReasons).map(
        ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
      );
      let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
      throw new AxiosError(
        `There is no suitable adapter to dispatch the request ` + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return adapter;
  },
  adapters: knownAdapters
};
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new CanceledError(null, config);
  }
}
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = AxiosHeaders$1.from(config.headers);
  config.data = transformData.call(
    config,
    config.transformRequest
  );
  if (["post", "put", "patch"].indexOf(config.method) !== -1) {
    config.headers.setContentType("application/x-www-form-urlencoded", false);
  }
  const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );
    response.headers = AxiosHeaders$1.from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}
const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? thing.toJSON() : thing;
function mergeConfig(config1, config2) {
  config2 = config2 || {};
  const config = {};
  function getMergedValue(target, source, caseless) {
    if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
      return utils$1.merge.call({ caseless }, target, source);
    } else if (utils$1.isPlainObject(source)) {
      return utils$1.merge({}, source);
    } else if (utils$1.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(a, b, caseless) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(void 0, a, caseless);
    }
  }
  function valueFromConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(void 0, b);
    }
  }
  function defaultToConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(void 0, b);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(void 0, a);
    }
  }
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(void 0, a);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };
  utils$1.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge2 = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge2(config1[prop], config2[prop], prop);
    utils$1.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
}
const VERSION = "1.6.7";
const validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
  validators$1[type] = function validator2(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
const deprecatedWarnings = {};
validators$1.transitional = function transitional(validator2, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator2 === false) {
      throw new AxiosError(
        formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
        AxiosError.ERR_DEPRECATED
      );
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(
        formatMessage(
          opt,
          " has been deprecated since v" + version + " and will be removed in the near future"
        )
      );
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
function assertOptions(options2, schema, allowUnknown) {
  if (typeof options2 !== "object") {
    throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options2);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator2 = schema[opt];
    if (validator2) {
      const value = options2[opt];
      const result = value === void 0 || validator2(value, opt, options2);
      if (result !== true) {
        throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}
const validator = {
  assertOptions,
  validators: validators$1
};
const validators = validator.validators;
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy;
        Error.captureStackTrace ? Error.captureStackTrace(dummy = {}) : dummy = new Error();
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
        if (!err.stack) {
          err.stack = stack;
        } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) {
          err.stack += "\n" + stack;
        }
      }
      throw err;
    }
  }
  _request(configOrUrl, config) {
    if (typeof configOrUrl === "string") {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = mergeConfig(this.defaults, config);
    const { transitional: transitional2, paramsSerializer, headers } = config;
    if (transitional2 !== void 0) {
      validator.assertOptions(transitional2, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }
    if (paramsSerializer != null) {
      if (utils$1.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }
    config.method = (config.method || this.defaults.method || "get").toLowerCase();
    let contextHeaders = headers && utils$1.merge(
      headers.common,
      headers[config.method]
    );
    headers && utils$1.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (method) => {
        delete headers[method];
      }
    );
    config.headers = AxiosHeaders$1.concat(contextHeaders, headers);
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), void 0];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config);
      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    i = 0;
    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    i = 0;
    len = responseInterceptorChain.length;
    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }
    return promise;
  }
  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}
utils$1.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
utils$1.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
const Axios$1 = Axios;
class CancelToken {
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this;
    this.promise.then((cancel) => {
      if (!token._listeners)
        return;
      let i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });
    this.promise.then = (onfulfilled) => {
      let _resolve;
      const promise = new Promise((resolve) => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        return;
      }
      token.reason = new CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}
const CancelToken$1 = CancelToken;
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}
function isAxiosError(payload) {
  return utils$1.isObject(payload) && payload.isAxiosError === true;
}
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
const HttpStatusCode$1 = HttpStatusCode;
function createInstance(defaultConfig) {
  const context = new Axios$1(defaultConfig);
  const instance = bind(Axios$1.prototype.request, context);
  utils$1.extend(instance, Axios$1.prototype, context, { allOwnKeys: true });
  utils$1.extend(instance, context, null, { allOwnKeys: true });
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}
const axios = createInstance(defaults$1);
axios.Axios = Axios$1;
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;
axios.AxiosError = AxiosError;
axios.Cancel = axios.CanceledError;
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders$1;
axios.formToJSON = (thing) => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters.getAdapter;
axios.HttpStatusCode = HttpStatusCode$1;
axios.default = axios;
const options = {
  url: "https://rss-stats-app.ahapxor.xyz/rss_stat_full",
  method: "get"
  // cache: 'default',
};
const getData = async () => (await axios(options)).data;
(async () => {
  const app = document.getElementById("app");
  const data = await getData();
  store.setState("total", data.score.length);
  store.updateState(data);
  store.setState("totalActive", data.score.filter((student) => student.active).length);
  const main = new MainPage().getElement();
  app.append(main);
})();
//# sourceMappingURL=main-lCS0IE5D.js.map
