(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function i(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = a(r);
    fetch(r.href, s);
  }
})();
var ph = { exports: {} },
  Fr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _g;
function Xy() {
  if (_g) return Fr;
  _g = 1;
  var d = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.fragment");
  function a(i, r, s) {
    var o = null;
    if (
      (s !== void 0 && (o = "" + s),
      r.key !== void 0 && (o = "" + r.key),
      "key" in r)
    ) {
      s = {};
      for (var h in r) h !== "key" && (s[h] = r[h]);
    } else s = r;
    return (
      (r = s.ref),
      { $$typeof: d, type: i, key: o, ref: r !== void 0 ? r : null, props: s }
    );
  }
  return (Fr.Fragment = l), (Fr.jsx = a), (Fr.jsxs = a), Fr;
}
var Dg;
function Gy() {
  return Dg || ((Dg = 1), (ph.exports = Xy())), ph.exports;
}
var et = Gy(),
  mh = { exports: {} },
  Hr = {},
  yh = { exports: {} },
  vh = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gg;
function jy() {
  return (
    gg ||
      ((gg = 1),
      (function (d) {
        function l(R, L) {
          var tt = R.length;
          R.push(L);
          t: for (; 0 < tt; ) {
            var ct = (tt - 1) >>> 1,
              p = R[ct];
            if (0 < r(p, L)) (R[ct] = L), (R[tt] = p), (tt = ct);
            else break t;
          }
        }
        function a(R) {
          return R.length === 0 ? null : R[0];
        }
        function i(R) {
          if (R.length === 0) return null;
          var L = R[0],
            tt = R.pop();
          if (tt !== L) {
            R[0] = tt;
            t: for (var ct = 0, p = R.length, q = p >>> 1; ct < q; ) {
              var I = 2 * (ct + 1) - 1,
                P = R[I],
                ut = I + 1,
                _t = R[ut];
              if (0 > r(P, tt))
                ut < p && 0 > r(_t, P)
                  ? ((R[ct] = _t), (R[ut] = tt), (ct = ut))
                  : ((R[ct] = P), (R[I] = tt), (ct = I));
              else if (ut < p && 0 > r(_t, tt))
                (R[ct] = _t), (R[ut] = tt), (ct = ut);
              else break t;
            }
          }
          return L;
        }
        function r(R, L) {
          var tt = R.sortIndex - L.sortIndex;
          return tt !== 0 ? tt : R.id - L.id;
        }
        if (
          ((d.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var s = performance;
          d.unstable_now = function () {
            return s.now();
          };
        } else {
          var o = Date,
            h = o.now();
          d.unstable_now = function () {
            return o.now() - h;
          };
        }
        var D = [],
          _ = [],
          m = 1,
          S = null,
          T = 3,
          v = !1,
          x = !1,
          b = !1,
          A = !1,
          G = typeof setTimeout == "function" ? setTimeout : null,
          H = typeof clearTimeout == "function" ? clearTimeout : null,
          X = typeof setImmediate < "u" ? setImmediate : null;
        function U(R) {
          for (var L = a(_); L !== null; ) {
            if (L.callback === null) i(_);
            else if (L.startTime <= R)
              i(_), (L.sortIndex = L.expirationTime), l(D, L);
            else break;
            L = a(_);
          }
        }
        function F(R) {
          if (((b = !1), U(R), !x))
            if (a(D) !== null) (x = !0), Z || ((Z = !0), $());
            else {
              var L = a(_);
              L !== null && ot(F, L.startTime - R);
            }
        }
        var Z = !1,
          Y = -1,
          K = 5,
          k = -1;
        function J() {
          return A ? !0 : !(d.unstable_now() - k < K);
        }
        function st() {
          if (((A = !1), Z)) {
            var R = d.unstable_now();
            k = R;
            var L = !0;
            try {
              t: {
                (x = !1), b && ((b = !1), H(Y), (Y = -1)), (v = !0);
                var tt = T;
                try {
                  e: {
                    for (
                      U(R), S = a(D);
                      S !== null && !(S.expirationTime > R && J());

                    ) {
                      var ct = S.callback;
                      if (typeof ct == "function") {
                        (S.callback = null), (T = S.priorityLevel);
                        var p = ct(S.expirationTime <= R);
                        if (((R = d.unstable_now()), typeof p == "function")) {
                          (S.callback = p), U(R), (L = !0);
                          break e;
                        }
                        S === a(D) && i(D), U(R);
                      } else i(D);
                      S = a(D);
                    }
                    if (S !== null) L = !0;
                    else {
                      var q = a(_);
                      q !== null && ot(F, q.startTime - R), (L = !1);
                    }
                  }
                  break t;
                } finally {
                  (S = null), (T = tt), (v = !1);
                }
                L = void 0;
              }
            } finally {
              L ? $() : (Z = !1);
            }
          }
        }
        var $;
        if (typeof X == "function")
          $ = function () {
            X(st);
          };
        else if (typeof MessageChannel < "u") {
          var vt = new MessageChannel(),
            mt = vt.port2;
          (vt.port1.onmessage = st),
            ($ = function () {
              mt.postMessage(null);
            });
        } else
          $ = function () {
            G(st, 0);
          };
        function ot(R, L) {
          Y = G(function () {
            R(d.unstable_now());
          }, L);
        }
        (d.unstable_IdlePriority = 5),
          (d.unstable_ImmediatePriority = 1),
          (d.unstable_LowPriority = 4),
          (d.unstable_NormalPriority = 3),
          (d.unstable_Profiling = null),
          (d.unstable_UserBlockingPriority = 2),
          (d.unstable_cancelCallback = function (R) {
            R.callback = null;
          }),
          (d.unstable_forceFrameRate = function (R) {
            0 > R || 125 < R
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (K = 0 < R ? Math.floor(1e3 / R) : 5);
          }),
          (d.unstable_getCurrentPriorityLevel = function () {
            return T;
          }),
          (d.unstable_next = function (R) {
            switch (T) {
              case 1:
              case 2:
              case 3:
                var L = 3;
                break;
              default:
                L = T;
            }
            var tt = T;
            T = L;
            try {
              return R();
            } finally {
              T = tt;
            }
          }),
          (d.unstable_requestPaint = function () {
            A = !0;
          }),
          (d.unstable_runWithPriority = function (R, L) {
            switch (R) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                R = 3;
            }
            var tt = T;
            T = R;
            try {
              return L();
            } finally {
              T = tt;
            }
          }),
          (d.unstable_scheduleCallback = function (R, L, tt) {
            var ct = d.unstable_now();
            switch (
              (typeof tt == "object" && tt !== null
                ? ((tt = tt.delay),
                  (tt = typeof tt == "number" && 0 < tt ? ct + tt : ct))
                : (tt = ct),
              R)
            ) {
              case 1:
                var p = -1;
                break;
              case 2:
                p = 250;
                break;
              case 5:
                p = 1073741823;
                break;
              case 4:
                p = 1e4;
                break;
              default:
                p = 5e3;
            }
            return (
              (p = tt + p),
              (R = {
                id: m++,
                callback: L,
                priorityLevel: R,
                startTime: tt,
                expirationTime: p,
                sortIndex: -1,
              }),
              tt > ct
                ? ((R.sortIndex = tt),
                  l(_, R),
                  a(D) === null &&
                    R === a(_) &&
                    (b ? (H(Y), (Y = -1)) : (b = !0), ot(F, tt - ct)))
                : ((R.sortIndex = p),
                  l(D, R),
                  x || v || ((x = !0), Z || ((Z = !0), $()))),
              R
            );
          }),
          (d.unstable_shouldYield = J),
          (d.unstable_wrapCallback = function (R) {
            var L = T;
            return function () {
              var tt = T;
              T = L;
              try {
                return R.apply(this, arguments);
              } finally {
                T = tt;
              }
            };
          });
      })(vh)),
    vh
  );
}
var pg;
function Ly() {
  return pg || ((pg = 1), (yh.exports = jy())), yh.exports;
}
var bh = { exports: {} },
  bt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mg;
function Vy() {
  if (mg) return bt;
  mg = 1;
  var d = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    r = Symbol.for("react.profiler"),
    s = Symbol.for("react.consumer"),
    o = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    D = Symbol.for("react.suspense"),
    _ = Symbol.for("react.memo"),
    m = Symbol.for("react.lazy"),
    S = Symbol.iterator;
  function T(p) {
    return p === null || typeof p != "object"
      ? null
      : ((p = (S && p[S]) || p["@@iterator"]),
        typeof p == "function" ? p : null);
  }
  var v = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    x = Object.assign,
    b = {};
  function A(p, q, I) {
    (this.props = p),
      (this.context = q),
      (this.refs = b),
      (this.updater = I || v);
  }
  (A.prototype.isReactComponent = {}),
    (A.prototype.setState = function (p, q) {
      if (typeof p != "object" && typeof p != "function" && p != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, p, q, "setState");
    }),
    (A.prototype.forceUpdate = function (p) {
      this.updater.enqueueForceUpdate(this, p, "forceUpdate");
    });
  function G() {}
  G.prototype = A.prototype;
  function H(p, q, I) {
    (this.props = p),
      (this.context = q),
      (this.refs = b),
      (this.updater = I || v);
  }
  var X = (H.prototype = new G());
  (X.constructor = H), x(X, A.prototype), (X.isPureReactComponent = !0);
  var U = Array.isArray,
    F = { H: null, A: null, T: null, S: null, V: null },
    Z = Object.prototype.hasOwnProperty;
  function Y(p, q, I, P, ut, _t) {
    return (
      (I = _t.ref),
      { $$typeof: d, type: p, key: q, ref: I !== void 0 ? I : null, props: _t }
    );
  }
  function K(p, q) {
    return Y(p.type, q, void 0, void 0, void 0, p.props);
  }
  function k(p) {
    return typeof p == "object" && p !== null && p.$$typeof === d;
  }
  function J(p) {
    var q = { "=": "=0", ":": "=2" };
    return (
      "$" +
      p.replace(/[=:]/g, function (I) {
        return q[I];
      })
    );
  }
  var st = /\/+/g;
  function $(p, q) {
    return typeof p == "object" && p !== null && p.key != null
      ? J("" + p.key)
      : q.toString(36);
  }
  function vt() {}
  function mt(p) {
    switch (p.status) {
      case "fulfilled":
        return p.value;
      case "rejected":
        throw p.reason;
      default:
        switch (
          (typeof p.status == "string"
            ? p.then(vt, vt)
            : ((p.status = "pending"),
              p.then(
                function (q) {
                  p.status === "pending" &&
                    ((p.status = "fulfilled"), (p.value = q));
                },
                function (q) {
                  p.status === "pending" &&
                    ((p.status = "rejected"), (p.reason = q));
                }
              )),
          p.status)
        ) {
          case "fulfilled":
            return p.value;
          case "rejected":
            throw p.reason;
        }
    }
    throw p;
  }
  function ot(p, q, I, P, ut) {
    var _t = typeof p;
    (_t === "undefined" || _t === "boolean") && (p = null);
    var it = !1;
    if (p === null) it = !0;
    else
      switch (_t) {
        case "bigint":
        case "string":
        case "number":
          it = !0;
          break;
        case "object":
          switch (p.$$typeof) {
            case d:
            case l:
              it = !0;
              break;
            case m:
              return (it = p._init), ot(it(p._payload), q, I, P, ut);
          }
      }
    if (it)
      return (
        (ut = ut(p)),
        (it = P === "" ? "." + $(p, 0) : P),
        U(ut)
          ? ((I = ""),
            it != null && (I = it.replace(st, "$&/") + "/"),
            ot(ut, q, I, "", function (ne) {
              return ne;
            }))
          : ut != null &&
            (k(ut) &&
              (ut = K(
                ut,
                I +
                  (ut.key == null || (p && p.key === ut.key)
                    ? ""
                    : ("" + ut.key).replace(st, "$&/") + "/") +
                  it
              )),
            q.push(ut)),
        1
      );
    it = 0;
    var Ht = P === "" ? "." : P + ":";
    if (U(p))
      for (var St = 0; St < p.length; St++)
        (P = p[St]), (_t = Ht + $(P, St)), (it += ot(P, q, I, _t, ut));
    else if (((St = T(p)), typeof St == "function"))
      for (p = St.call(p), St = 0; !(P = p.next()).done; )
        (P = P.value), (_t = Ht + $(P, St++)), (it += ot(P, q, I, _t, ut));
    else if (_t === "object") {
      if (typeof p.then == "function") return ot(mt(p), q, I, P, ut);
      throw (
        ((q = String(p)),
        Error(
          "Objects are not valid as a React child (found: " +
            (q === "[object Object]"
              ? "object with keys {" + Object.keys(p).join(", ") + "}"
              : q) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return it;
  }
  function R(p, q, I) {
    if (p == null) return p;
    var P = [],
      ut = 0;
    return (
      ot(p, P, "", "", function (_t) {
        return q.call(I, _t, ut++);
      }),
      P
    );
  }
  function L(p) {
    if (p._status === -1) {
      var q = p._result;
      (q = q()),
        q.then(
          function (I) {
            (p._status === 0 || p._status === -1) &&
              ((p._status = 1), (p._result = I));
          },
          function (I) {
            (p._status === 0 || p._status === -1) &&
              ((p._status = 2), (p._result = I));
          }
        ),
        p._status === -1 && ((p._status = 0), (p._result = q));
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var tt =
    typeof reportError == "function"
      ? reportError
      : function (p) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var q = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof p == "object" &&
                p !== null &&
                typeof p.message == "string"
                  ? String(p.message)
                  : String(p),
              error: p,
            });
            if (!window.dispatchEvent(q)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", p);
            return;
          }
          console.error(p);
        };
  function ct() {}
  return (
    (bt.Children = {
      map: R,
      forEach: function (p, q, I) {
        R(
          p,
          function () {
            q.apply(this, arguments);
          },
          I
        );
      },
      count: function (p) {
        var q = 0;
        return (
          R(p, function () {
            q++;
          }),
          q
        );
      },
      toArray: function (p) {
        return (
          R(p, function (q) {
            return q;
          }) || []
        );
      },
      only: function (p) {
        if (!k(p))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return p;
      },
    }),
    (bt.Component = A),
    (bt.Fragment = a),
    (bt.Profiler = r),
    (bt.PureComponent = H),
    (bt.StrictMode = i),
    (bt.Suspense = D),
    (bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F),
    (bt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (p) {
        return F.H.useMemoCache(p);
      },
    }),
    (bt.cache = function (p) {
      return function () {
        return p.apply(null, arguments);
      };
    }),
    (bt.cloneElement = function (p, q, I) {
      if (p == null)
        throw Error(
          "The argument must be a React element, but you passed " + p + "."
        );
      var P = x({}, p.props),
        ut = p.key,
        _t = void 0;
      if (q != null)
        for (it in (q.ref !== void 0 && (_t = void 0),
        q.key !== void 0 && (ut = "" + q.key),
        q))
          !Z.call(q, it) ||
            it === "key" ||
            it === "__self" ||
            it === "__source" ||
            (it === "ref" && q.ref === void 0) ||
            (P[it] = q[it]);
      var it = arguments.length - 2;
      if (it === 1) P.children = I;
      else if (1 < it) {
        for (var Ht = Array(it), St = 0; St < it; St++)
          Ht[St] = arguments[St + 2];
        P.children = Ht;
      }
      return Y(p.type, ut, void 0, void 0, _t, P);
    }),
    (bt.createContext = function (p) {
      return (
        (p = {
          $$typeof: o,
          _currentValue: p,
          _currentValue2: p,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (p.Provider = p),
        (p.Consumer = { $$typeof: s, _context: p }),
        p
      );
    }),
    (bt.createElement = function (p, q, I) {
      var P,
        ut = {},
        _t = null;
      if (q != null)
        for (P in (q.key !== void 0 && (_t = "" + q.key), q))
          Z.call(q, P) &&
            P !== "key" &&
            P !== "__self" &&
            P !== "__source" &&
            (ut[P] = q[P]);
      var it = arguments.length - 2;
      if (it === 1) ut.children = I;
      else if (1 < it) {
        for (var Ht = Array(it), St = 0; St < it; St++)
          Ht[St] = arguments[St + 2];
        ut.children = Ht;
      }
      if (p && p.defaultProps)
        for (P in ((it = p.defaultProps), it))
          ut[P] === void 0 && (ut[P] = it[P]);
      return Y(p, _t, void 0, void 0, null, ut);
    }),
    (bt.createRef = function () {
      return { current: null };
    }),
    (bt.forwardRef = function (p) {
      return { $$typeof: h, render: p };
    }),
    (bt.isValidElement = k),
    (bt.lazy = function (p) {
      return { $$typeof: m, _payload: { _status: -1, _result: p }, _init: L };
    }),
    (bt.memo = function (p, q) {
      return { $$typeof: _, type: p, compare: q === void 0 ? null : q };
    }),
    (bt.startTransition = function (p) {
      var q = F.T,
        I = {};
      F.T = I;
      try {
        var P = p(),
          ut = F.S;
        ut !== null && ut(I, P),
          typeof P == "object" &&
            P !== null &&
            typeof P.then == "function" &&
            P.then(ct, tt);
      } catch (_t) {
        tt(_t);
      } finally {
        F.T = q;
      }
    }),
    (bt.unstable_useCacheRefresh = function () {
      return F.H.useCacheRefresh();
    }),
    (bt.use = function (p) {
      return F.H.use(p);
    }),
    (bt.useActionState = function (p, q, I) {
      return F.H.useActionState(p, q, I);
    }),
    (bt.useCallback = function (p, q) {
      return F.H.useCallback(p, q);
    }),
    (bt.useContext = function (p) {
      return F.H.useContext(p);
    }),
    (bt.useDebugValue = function () {}),
    (bt.useDeferredValue = function (p, q) {
      return F.H.useDeferredValue(p, q);
    }),
    (bt.useEffect = function (p, q, I) {
      var P = F.H;
      if (typeof I == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return P.useEffect(p, q);
    }),
    (bt.useId = function () {
      return F.H.useId();
    }),
    (bt.useImperativeHandle = function (p, q, I) {
      return F.H.useImperativeHandle(p, q, I);
    }),
    (bt.useInsertionEffect = function (p, q) {
      return F.H.useInsertionEffect(p, q);
    }),
    (bt.useLayoutEffect = function (p, q) {
      return F.H.useLayoutEffect(p, q);
    }),
    (bt.useMemo = function (p, q) {
      return F.H.useMemo(p, q);
    }),
    (bt.useOptimistic = function (p, q) {
      return F.H.useOptimistic(p, q);
    }),
    (bt.useReducer = function (p, q, I) {
      return F.H.useReducer(p, q, I);
    }),
    (bt.useRef = function (p) {
      return F.H.useRef(p);
    }),
    (bt.useState = function (p) {
      return F.H.useState(p);
    }),
    (bt.useSyncExternalStore = function (p, q, I) {
      return F.H.useSyncExternalStore(p, q, I);
    }),
    (bt.useTransition = function () {
      return F.H.useTransition();
    }),
    (bt.version = "19.1.0"),
    bt
  );
}
var yg;
function c0() {
  return yg || ((yg = 1), (bh.exports = Vy())), bh.exports;
}
var Sh = { exports: {} },
  nu = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vg;
function Qy() {
  if (vg) return nu;
  vg = 1;
  var d = c0();
  function l(D) {
    var _ = "https://react.dev/errors/" + D;
    if (1 < arguments.length) {
      _ += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var m = 2; m < arguments.length; m++)
        _ += "&args[]=" + encodeURIComponent(arguments[m]);
    }
    return (
      "Minified React error #" +
      D +
      "; visit " +
      _ +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function a() {}
  var i = {
      d: {
        f: a,
        r: function () {
          throw Error(l(522));
        },
        D: a,
        C: a,
        L: a,
        m: a,
        X: a,
        S: a,
        M: a,
      },
      p: 0,
      findDOMNode: null,
    },
    r = Symbol.for("react.portal");
  function s(D, _, m) {
    var S =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: r,
      key: S == null ? null : "" + S,
      children: D,
      containerInfo: _,
      implementation: m,
    };
  }
  var o = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(D, _) {
    if (D === "font") return "";
    if (typeof _ == "string") return _ === "use-credentials" ? _ : "";
  }
  return (
    (nu.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (nu.createPortal = function (D, _) {
      var m =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!_ || (_.nodeType !== 1 && _.nodeType !== 9 && _.nodeType !== 11))
        throw Error(l(299));
      return s(D, _, null, m);
    }),
    (nu.flushSync = function (D) {
      var _ = o.T,
        m = i.p;
      try {
        if (((o.T = null), (i.p = 2), D)) return D();
      } finally {
        (o.T = _), (i.p = m), i.d.f();
      }
    }),
    (nu.preconnect = function (D, _) {
      typeof D == "string" &&
        (_
          ? ((_ = _.crossOrigin),
            (_ =
              typeof _ == "string"
                ? _ === "use-credentials"
                  ? _
                  : ""
                : void 0))
          : (_ = null),
        i.d.C(D, _));
    }),
    (nu.prefetchDNS = function (D) {
      typeof D == "string" && i.d.D(D);
    }),
    (nu.preinit = function (D, _) {
      if (typeof D == "string" && _ && typeof _.as == "string") {
        var m = _.as,
          S = h(m, _.crossOrigin),
          T = typeof _.integrity == "string" ? _.integrity : void 0,
          v = typeof _.fetchPriority == "string" ? _.fetchPriority : void 0;
        m === "style"
          ? i.d.S(D, typeof _.precedence == "string" ? _.precedence : void 0, {
              crossOrigin: S,
              integrity: T,
              fetchPriority: v,
            })
          : m === "script" &&
            i.d.X(D, {
              crossOrigin: S,
              integrity: T,
              fetchPriority: v,
              nonce: typeof _.nonce == "string" ? _.nonce : void 0,
            });
      }
    }),
    (nu.preinitModule = function (D, _) {
      if (typeof D == "string")
        if (typeof _ == "object" && _ !== null) {
          if (_.as == null || _.as === "script") {
            var m = h(_.as, _.crossOrigin);
            i.d.M(D, {
              crossOrigin: m,
              integrity: typeof _.integrity == "string" ? _.integrity : void 0,
              nonce: typeof _.nonce == "string" ? _.nonce : void 0,
            });
          }
        } else _ == null && i.d.M(D);
    }),
    (nu.preload = function (D, _) {
      if (
        typeof D == "string" &&
        typeof _ == "object" &&
        _ !== null &&
        typeof _.as == "string"
      ) {
        var m = _.as,
          S = h(m, _.crossOrigin);
        i.d.L(D, m, {
          crossOrigin: S,
          integrity: typeof _.integrity == "string" ? _.integrity : void 0,
          nonce: typeof _.nonce == "string" ? _.nonce : void 0,
          type: typeof _.type == "string" ? _.type : void 0,
          fetchPriority:
            typeof _.fetchPriority == "string" ? _.fetchPriority : void 0,
          referrerPolicy:
            typeof _.referrerPolicy == "string" ? _.referrerPolicy : void 0,
          imageSrcSet:
            typeof _.imageSrcSet == "string" ? _.imageSrcSet : void 0,
          imageSizes: typeof _.imageSizes == "string" ? _.imageSizes : void 0,
          media: typeof _.media == "string" ? _.media : void 0,
        });
      }
    }),
    (nu.preloadModule = function (D, _) {
      if (typeof D == "string")
        if (_) {
          var m = h(_.as, _.crossOrigin);
          i.d.m(D, {
            as: typeof _.as == "string" && _.as !== "script" ? _.as : void 0,
            crossOrigin: m,
            integrity: typeof _.integrity == "string" ? _.integrity : void 0,
          });
        } else i.d.m(D);
    }),
    (nu.requestFormReset = function (D) {
      i.d.r(D);
    }),
    (nu.unstable_batchedUpdates = function (D, _) {
      return D(_);
    }),
    (nu.useFormState = function (D, _, m) {
      return o.H.useFormState(D, _, m);
    }),
    (nu.useFormStatus = function () {
      return o.H.useHostTransitionStatus();
    }),
    (nu.version = "19.1.0"),
    nu
  );
}
var bg;
function Zy() {
  if (bg) return Sh.exports;
  bg = 1;
  function d() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d);
      } catch (l) {
        console.error(l);
      }
  }
  return d(), (Sh.exports = Qy()), Sh.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sg;
function ky() {
  if (Sg) return Hr;
  Sg = 1;
  var d = Ly(),
    l = c0(),
    a = Zy();
  function i(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        e += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function s(t) {
    var e = t,
      u = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (u = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? u : null;
  }
  function o(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function h(t) {
    if (s(t) !== t) throw Error(i(188));
  }
  function D(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = s(t)), e === null)) throw Error(i(188));
      return e !== t ? null : t;
    }
    for (var u = t, n = e; ; ) {
      var f = u.return;
      if (f === null) break;
      var c = f.alternate;
      if (c === null) {
        if (((n = f.return), n !== null)) {
          u = n;
          continue;
        }
        break;
      }
      if (f.child === c.child) {
        for (c = f.child; c; ) {
          if (c === u) return h(f), t;
          if (c === n) return h(f), e;
          c = c.sibling;
        }
        throw Error(i(188));
      }
      if (u.return !== n.return) (u = f), (n = c);
      else {
        for (var g = !1, y = f.child; y; ) {
          if (y === u) {
            (g = !0), (u = f), (n = c);
            break;
          }
          if (y === n) {
            (g = !0), (n = f), (u = c);
            break;
          }
          y = y.sibling;
        }
        if (!g) {
          for (y = c.child; y; ) {
            if (y === u) {
              (g = !0), (u = c), (n = f);
              break;
            }
            if (y === n) {
              (g = !0), (n = c), (u = f);
              break;
            }
            y = y.sibling;
          }
          if (!g) throw Error(i(189));
        }
      }
      if (u.alternate !== n) throw Error(i(190));
    }
    if (u.tag !== 3) throw Error(i(188));
    return u.stateNode.current === u ? t : e;
  }
  function _(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = _(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var m = Object.assign,
    S = Symbol.for("react.element"),
    T = Symbol.for("react.transitional.element"),
    v = Symbol.for("react.portal"),
    x = Symbol.for("react.fragment"),
    b = Symbol.for("react.strict_mode"),
    A = Symbol.for("react.profiler"),
    G = Symbol.for("react.provider"),
    H = Symbol.for("react.consumer"),
    X = Symbol.for("react.context"),
    U = Symbol.for("react.forward_ref"),
    F = Symbol.for("react.suspense"),
    Z = Symbol.for("react.suspense_list"),
    Y = Symbol.for("react.memo"),
    K = Symbol.for("react.lazy"),
    k = Symbol.for("react.activity"),
    J = Symbol.for("react.memo_cache_sentinel"),
    st = Symbol.iterator;
  function $(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (st && t[st]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var vt = Symbol.for("react.client.reference");
  function mt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === vt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case x:
        return "Fragment";
      case A:
        return "Profiler";
      case b:
        return "StrictMode";
      case F:
        return "Suspense";
      case Z:
        return "SuspenseList";
      case k:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case v:
          return "Portal";
        case X:
          return (t.displayName || "Context") + ".Provider";
        case H:
          return (t._context.displayName || "Context") + ".Consumer";
        case U:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case Y:
          return (
            (e = t.displayName || null), e !== null ? e : mt(t.type) || "Memo"
          );
        case K:
          (e = t._payload), (t = t._init);
          try {
            return mt(t(e));
          } catch {}
      }
    return null;
  }
  var ot = Array.isArray,
    R = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    L = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    tt = { pending: !1, data: null, method: null, action: null },
    ct = [],
    p = -1;
  function q(t) {
    return { current: t };
  }
  function I(t) {
    0 > p || ((t.current = ct[p]), (ct[p] = null), p--);
  }
  function P(t, e) {
    p++, (ct[p] = t.current), (t.current = e);
  }
  var ut = q(null),
    _t = q(null),
    it = q(null),
    Ht = q(null);
  function St(t, e) {
    switch ((P(it, e), P(_t, t), P(ut, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? jD(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = jD(e)), (t = LD(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    I(ut), P(ut, t);
  }
  function ne() {
    I(ut), I(_t), I(it);
  }
  function nl(t) {
    t.memoizedState !== null && P(Ht, t);
    var e = ut.current,
      u = LD(e, t.type);
    e !== u && (P(_t, t), P(ut, u));
  }
  function Ae(t) {
    _t.current === t && (I(ut), I(_t)),
      Ht.current === t && (I(Ht), (Rr._currentValue = tt));
  }
  var je = Object.prototype.hasOwnProperty,
    zt = d.unstable_scheduleCallback,
    ie = d.unstable_cancelCallback,
    uu = d.unstable_shouldYield,
    ou = d.unstable_requestPaint,
    w = d.unstable_now,
    hu = d.unstable_getCurrentPriorityLevel,
    il = d.unstable_ImmediatePriority,
    Sl = d.unstable_UserBlockingPriority,
    It = d.unstable_NormalPriority,
    Tl = d.unstable_LowPriority,
    El = d.unstable_IdlePriority,
    kl = d.log,
    Oe = d.unstable_setDisableYieldValue,
    Tu = null,
    wt = null;
  function Me(t) {
    if (
      (typeof kl == "function" && Oe(t),
      wt && typeof wt.setStrictMode == "function")
    )
      try {
        wt.setStrictMode(Tu, t);
      } catch {}
  }
  var te = Math.clz32 ? Math.clz32 : De,
    xl = Math.log,
    ai = Math.LN2;
  function De(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((xl(t) / ai) | 0)) | 0;
  }
  var Kl = 256,
    Eu = 4194304;
  function xu(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Cl(t, e, u) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var f = 0,
      c = t.suspendedLanes,
      g = t.pingedLanes;
    t = t.warmLanes;
    var y = n & 134217727;
    return (
      y !== 0
        ? ((n = y & ~c),
          n !== 0
            ? (f = xu(n))
            : ((g &= y),
              g !== 0
                ? (f = xu(g))
                : u || ((u = y & ~t), u !== 0 && (f = xu(u)))))
        : ((y = n & ~c),
          y !== 0
            ? (f = xu(y))
            : g !== 0
            ? (f = xu(g))
            : u || ((u = n & ~t), u !== 0 && (f = xu(u)))),
      f === 0
        ? 0
        : e !== 0 &&
          e !== f &&
          (e & c) === 0 &&
          ((c = f & -f),
          (u = e & -e),
          c >= u || (c === 32 && (u & 4194048) !== 0))
        ? e
        : f
    );
  }
  function Cu(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Jl(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Tt() {
    var t = Kl;
    return (Kl <<= 1), (Kl & 4194048) === 0 && (Kl = 256), t;
  }
  function Rl() {
    var t = Eu;
    return (Eu <<= 1), (Eu & 62914560) === 0 && (Eu = 4194304), t;
  }
  function du(t) {
    for (var e = [], u = 0; 31 > u; u++) e.push(t);
    return e;
  }
  function Je(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function Hu(t, e, u, n, f, c) {
    var g = t.pendingLanes;
    (t.pendingLanes = u),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= u),
      (t.entangledLanes &= u),
      (t.errorRecoveryDisabledLanes &= u),
      (t.shellSuspendCounter = 0);
    var y = t.entanglements,
      E = t.expirationTimes,
      z = t.hiddenUpdates;
    for (u = g & ~u; 0 < u; ) {
      var j = 31 - te(u),
        Q = 1 << j;
      (y[j] = 0), (E[j] = -1);
      var B = z[j];
      if (B !== null)
        for (z[j] = null, j = 0; j < B.length; j++) {
          var N = B[j];
          N !== null && (N.lane &= -536870913);
        }
      u &= ~Q;
    }
    n !== 0 && Bl(t, n, 0),
      c !== 0 && f === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(g & ~e));
  }
  function Bl(t, e, u) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var n = 31 - te(e);
    (t.entangledLanes |= e),
      (t.entanglements[n] = t.entanglements[n] | 1073741824 | (u & 4194090));
  }
  function $l(t, e) {
    var u = (t.entangledLanes |= e);
    for (t = t.entanglements; u; ) {
      var n = 31 - te(u),
        f = 1 << n;
      (f & e) | (t[n] & e) && (t[n] |= e), (u &= ~f);
    }
  }
  function Yu(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Wl(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function yt() {
    var t = L.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : fg(t.type));
  }
  function ht(t, e) {
    var u = L.p;
    try {
      return (L.p = t), e();
    } finally {
      L.p = u;
    }
  }
  var Et = Math.random().toString(36).slice(2),
    W = "__reactFiber$" + Et,
    rt = "__reactProps$" + Et,
    at = "__reactContainer$" + Et,
    pt = "__reactEvents$" + Et,
    ze = "__reactListeners$" + Et,
    Rt = "__reactHandles$" + Et,
    fe = "__reactResources$" + Et,
    ge = "__reactMarker$" + Et;
  function ee(t) {
    delete t[W], delete t[rt], delete t[pt], delete t[ze], delete t[Rt];
  }
  function jt(t) {
    var e = t[W];
    if (e) return e;
    for (var u = t.parentNode; u; ) {
      if ((e = u[at] || u[W])) {
        if (
          ((u = e.alternate),
          e.child !== null || (u !== null && u.child !== null))
        )
          for (t = kD(t); t !== null; ) {
            if ((u = t[W])) return u;
            t = kD(t);
          }
        return e;
      }
      (t = u), (u = t.parentNode);
    }
    return null;
  }
  function Yt(t) {
    if ((t = t[W] || t[at])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function $e(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(i(33));
  }
  function Vt(t) {
    var e = t[fe];
    return (
      e ||
        (e = t[fe] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Xt(t) {
    t[ge] = !0;
  }
  var qu = new Set(),
    Re = {};
  function ae(t, e) {
    oe(t, e), oe(t + "Capture", e);
  }
  function oe(t, e) {
    for (Re[t] = e, t = 0; t < e.length; t++) qu.add(e[t]);
  }
  var Pl = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    ri = {},
    He = {};
  function Se(t) {
    return je.call(He, t)
      ? !0
      : je.call(ri, t)
      ? !1
      : Pl.test(t)
      ? (He[t] = !0)
      : ((ri[t] = !0), !1);
  }
  function _u(t, e, u) {
    if (Se(e))
      if (u === null) t.removeAttribute(e);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var n = e.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + u);
      }
  }
  function Tn(t, e, u) {
    if (u === null) t.removeAttribute(e);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + u);
    }
  }
  function al(t, e, u, n) {
    if (n === null) t.removeAttribute(u);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(u);
          return;
      }
      t.setAttributeNS(e, u, "" + n);
    }
  }
  var Il, Xu;
  function rl(t) {
    if (Il === void 0)
      try {
        throw Error();
      } catch (u) {
        var e = u.stack.trim().match(/\n( *(at )?)/);
        (Il = (e && e[1]) || ""),
          (Xu =
            -1 <
            u.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < u.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Il +
      t +
      Xu
    );
  }
  var En = !1;
  function tn(t, e) {
    if (!t || En) return "";
    En = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var Q = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(Q.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(Q, []);
                } catch (N) {
                  var B = N;
                }
                Reflect.construct(t, [], Q);
              } else {
                try {
                  Q.call();
                } catch (N) {
                  B = N;
                }
                t.call(Q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                B = N;
              }
              (Q = t()) &&
                typeof Q.catch == "function" &&
                Q.catch(function () {});
            }
          } catch (N) {
            if (N && B && typeof N.stack == "string") return [N.stack, B.stack];
          }
          return [null, null];
        },
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var f = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name"
      );
      f &&
        f.configurable &&
        Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var c = n.DetermineComponentFrameRoot(),
        g = c[0],
        y = c[1];
      if (g && y) {
        var E = g.split(`
`),
          z = y.split(`
`);
        for (
          f = n = 0;
          n < E.length && !E[n].includes("DetermineComponentFrameRoot");

        )
          n++;
        for (; f < z.length && !z[f].includes("DetermineComponentFrameRoot"); )
          f++;
        if (n === E.length || f === z.length)
          for (
            n = E.length - 1, f = z.length - 1;
            1 <= n && 0 <= f && E[n] !== z[f];

          )
            f--;
        for (; 1 <= n && 0 <= f; n--, f--)
          if (E[n] !== z[f]) {
            if (n !== 1 || f !== 1)
              do
                if ((n--, f--, 0 > f || E[n] !== z[f])) {
                  var j =
                    `
` + E[n].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      j.includes("<anonymous>") &&
                      (j = j.replace("<anonymous>", t.displayName)),
                    j
                  );
                }
              while (1 <= n && 0 <= f);
            break;
          }
      }
    } finally {
      (En = !1), (Error.prepareStackTrace = u);
    }
    return (u = t ? t.displayName || t.name : "") ? rl(u) : "";
  }
  function U1(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return rl(t.type);
      case 16:
        return rl("Lazy");
      case 13:
        return rl("Suspense");
      case 19:
        return rl("SuspenseList");
      case 0:
      case 15:
        return tn(t.type, !1);
      case 11:
        return tn(t.type.render, !1);
      case 1:
        return tn(t.type, !0);
      case 31:
        return rl("Activity");
      default:
        return "";
    }
  }
  function F0(t) {
    try {
      var e = "";
      do (e += U1(t)), (t = t.return);
      while (t);
      return e;
    } catch (u) {
      return (
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack
      );
    }
  }
  function fl(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function H0(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function w1(t) {
    var e = H0(t) ? "checked" : "value",
      u = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      n = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof u < "u" &&
      typeof u.get == "function" &&
      typeof u.set == "function"
    ) {
      var f = u.get,
        c = u.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return f.call(this);
          },
          set: function (g) {
            (n = "" + g), c.call(this, g);
          },
        }),
        Object.defineProperty(t, e, { enumerable: u.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (g) {
            n = "" + g;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function yf(t) {
    t._valueTracker || (t._valueTracker = w1(t));
  }
  function Y0(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var u = e.getValue(),
      n = "";
    return (
      t && (n = H0(t) ? (t.checked ? "true" : "false") : t.value),
      (t = n),
      t !== u ? (e.setValue(t), !0) : !1
    );
  }
  function vf(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var F1 = /[\n"\\]/g;
  function sl(t) {
    return t.replace(F1, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function dc(t, e, u, n, f, c, g, y) {
    (t.name = ""),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (t.type = g)
        : t.removeAttribute("type"),
      e != null
        ? g === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + fl(e))
          : t.value !== "" + fl(e) && (t.value = "" + fl(e))
        : (g !== "submit" && g !== "reset") || t.removeAttribute("value"),
      e != null
        ? _c(t, g, fl(e))
        : u != null
        ? _c(t, g, fl(u))
        : n != null && t.removeAttribute("value"),
      f == null && c != null && (t.defaultChecked = !!c),
      f != null &&
        (t.checked = f && typeof f != "function" && typeof f != "symbol"),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (t.name = "" + fl(y))
        : t.removeAttribute("name");
  }
  function q0(t, e, u, n, f, c, g, y) {
    if (
      (c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (t.type = c),
      e != null || u != null)
    ) {
      if (!((c !== "submit" && c !== "reset") || e != null)) return;
      (u = u != null ? "" + fl(u) : ""),
        (e = e != null ? "" + fl(e) : u),
        y || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (n = n ?? f),
      (n = typeof n != "function" && typeof n != "symbol" && !!n),
      (t.checked = y ? t.checked : !!n),
      (t.defaultChecked = !!n),
      g != null &&
        typeof g != "function" &&
        typeof g != "symbol" &&
        typeof g != "boolean" &&
        (t.name = g);
  }
  function _c(t, e, u) {
    (e === "number" && vf(t.ownerDocument) === t) ||
      t.defaultValue === "" + u ||
      (t.defaultValue = "" + u);
  }
  function Vi(t, e, u, n) {
    if (((t = t.options), e)) {
      e = {};
      for (var f = 0; f < u.length; f++) e["$" + u[f]] = !0;
      for (u = 0; u < t.length; u++)
        (f = e.hasOwnProperty("$" + t[u].value)),
          t[u].selected !== f && (t[u].selected = f),
          f && n && (t[u].defaultSelected = !0);
    } else {
      for (u = "" + fl(u), e = null, f = 0; f < t.length; f++) {
        if (t[f].value === u) {
          (t[f].selected = !0), n && (t[f].defaultSelected = !0);
          return;
        }
        e !== null || t[f].disabled || (e = t[f]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function X0(t, e, u) {
    if (
      e != null &&
      ((e = "" + fl(e)), e !== t.value && (t.value = e), u == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = u != null ? "" + fl(u) : "";
  }
  function G0(t, e, u, n) {
    if (e == null) {
      if (n != null) {
        if (u != null) throw Error(i(92));
        if (ot(n)) {
          if (1 < n.length) throw Error(i(93));
          n = n[0];
        }
        u = n;
      }
      u == null && (u = ""), (e = u);
    }
    (u = fl(e)),
      (t.defaultValue = u),
      (n = t.textContent),
      n === u && n !== "" && n !== null && (t.value = n);
  }
  function Qi(t, e) {
    if (e) {
      var u = t.firstChild;
      if (u && u === t.lastChild && u.nodeType === 3) {
        u.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var H1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function j0(t, e, u) {
    var n = e.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === ""
      ? n
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : n
      ? t.setProperty(e, u)
      : typeof u != "number" || u === 0 || H1.has(e)
      ? e === "float"
        ? (t.cssFloat = u)
        : (t[e] = ("" + u).trim())
      : (t[e] = u + "px");
  }
  function L0(t, e, u) {
    if (e != null && typeof e != "object") throw Error(i(62));
    if (((t = t.style), u != null)) {
      for (var n in u)
        !u.hasOwnProperty(n) ||
          (e != null && e.hasOwnProperty(n)) ||
          (n.indexOf("--") === 0
            ? t.setProperty(n, "")
            : n === "float"
            ? (t.cssFloat = "")
            : (t[n] = ""));
      for (var f in e)
        (n = e[f]), e.hasOwnProperty(f) && u[f] !== n && j0(t, f, n);
    } else for (var c in e) e.hasOwnProperty(c) && j0(t, c, e[c]);
  }
  function Dc(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Y1 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    q1 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function bf(t) {
    return q1.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var gc = null;
  function pc(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Zi = null,
    ki = null;
  function V0(t) {
    var e = Yt(t);
    if (e && (t = e.stateNode)) {
      var u = t[rt] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (dc(
              t,
              u.value,
              u.defaultValue,
              u.defaultValue,
              u.checked,
              u.defaultChecked,
              u.type,
              u.name
            ),
            (e = u.name),
            u.type === "radio" && e != null)
          ) {
            for (u = t; u.parentNode; ) u = u.parentNode;
            for (
              u = u.querySelectorAll(
                'input[name="' + sl("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < u.length;
              e++
            ) {
              var n = u[e];
              if (n !== t && n.form === t.form) {
                var f = n[rt] || null;
                if (!f) throw Error(i(90));
                dc(
                  n,
                  f.value,
                  f.defaultValue,
                  f.defaultValue,
                  f.checked,
                  f.defaultChecked,
                  f.type,
                  f.name
                );
              }
            }
            for (e = 0; e < u.length; e++)
              (n = u[e]), n.form === t.form && Y0(n);
          }
          break t;
        case "textarea":
          X0(t, u.value, u.defaultValue);
          break t;
        case "select":
          (e = u.value), e != null && Vi(t, !!u.multiple, e, !1);
      }
    }
  }
  var mc = !1;
  function Q0(t, e, u) {
    if (mc) return t(e, u);
    mc = !0;
    try {
      var n = t(e);
      return n;
    } finally {
      if (
        ((mc = !1),
        (Zi !== null || ki !== null) &&
          (as(), Zi && ((e = Zi), (t = ki), (ki = Zi = null), V0(e), t)))
      )
        for (e = 0; e < t.length; e++) V0(t[e]);
    }
  }
  function Va(t, e) {
    var u = t.stateNode;
    if (u === null) return null;
    var n = u[rt] || null;
    if (n === null) return null;
    u = n[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (n = !n.disabled) ||
          ((t = t.type),
          (n = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !n);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (u && typeof u != "function") throw Error(i(231, e, typeof u));
    return u;
  }
  var en = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    yc = !1;
  if (en)
    try {
      var Qa = {};
      Object.defineProperty(Qa, "passive", {
        get: function () {
          yc = !0;
        },
      }),
        window.addEventListener("test", Qa, Qa),
        window.removeEventListener("test", Qa, Qa);
    } catch {
      yc = !1;
    }
  var xn = null,
    vc = null,
    Sf = null;
  function Z0() {
    if (Sf) return Sf;
    var t,
      e = vc,
      u = e.length,
      n,
      f = "value" in xn ? xn.value : xn.textContent,
      c = f.length;
    for (t = 0; t < u && e[t] === f[t]; t++);
    var g = u - t;
    for (n = 1; n <= g && e[u - n] === f[c - n]; n++);
    return (Sf = f.slice(t, 1 < n ? 1 - n : void 0));
  }
  function Tf(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Ef() {
    return !0;
  }
  function k0() {
    return !1;
  }
  function Au(t) {
    function e(u, n, f, c, g) {
      (this._reactName = u),
        (this._targetInst = f),
        (this.type = n),
        (this.nativeEvent = c),
        (this.target = g),
        (this.currentTarget = null);
      for (var y in t)
        t.hasOwnProperty(y) && ((u = t[y]), (this[y] = u ? u(c) : c[y]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? Ef
          : k0),
        (this.isPropagationStopped = k0),
        this
      );
    }
    return (
      m(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var u = this.nativeEvent;
          u &&
            (u.preventDefault
              ? u.preventDefault()
              : typeof u.returnValue != "unknown" && (u.returnValue = !1),
            (this.isDefaultPrevented = Ef));
        },
        stopPropagation: function () {
          var u = this.nativeEvent;
          u &&
            (u.stopPropagation
              ? u.stopPropagation()
              : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0),
            (this.isPropagationStopped = Ef));
        },
        persist: function () {},
        isPersistent: Ef,
      }),
      e
    );
  }
  var fi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    xf = Au(fi),
    Za = m({}, fi, { view: 0, detail: 0 }),
    X1 = Au(Za),
    bc,
    Sc,
    ka,
    Cf = m({}, Za, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ec,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== ka &&
              (ka && t.type === "mousemove"
                ? ((bc = t.screenX - ka.screenX), (Sc = t.screenY - ka.screenY))
                : (Sc = bc = 0),
              (ka = t)),
            bc);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Sc;
      },
    }),
    K0 = Au(Cf),
    G1 = m({}, Cf, { dataTransfer: 0 }),
    j1 = Au(G1),
    L1 = m({}, Za, { relatedTarget: 0 }),
    Tc = Au(L1),
    V1 = m({}, fi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Q1 = Au(V1),
    Z1 = m({}, fi, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    k1 = Au(Z1),
    K1 = m({}, fi, { data: 0 }),
    J0 = Au(K1),
    J1 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    $1 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    W1 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function P1(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = W1[t])
      ? !!e[t]
      : !1;
  }
  function Ec() {
    return P1;
  }
  var I1 = m({}, Za, {
      key: function (t) {
        if (t.key) {
          var e = J1[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Tf(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? $1[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ec,
      charCode: function (t) {
        return t.type === "keypress" ? Tf(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Tf(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    tm = Au(I1),
    em = m({}, Cf, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    $0 = Au(em),
    um = m({}, Za, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ec,
    }),
    lm = Au(um),
    nm = m({}, fi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    im = Au(nm),
    am = m({}, Cf, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    rm = Au(am),
    fm = m({}, fi, { newState: 0, oldState: 0 }),
    sm = Au(fm),
    cm = [9, 13, 27, 32],
    xc = en && "CompositionEvent" in window,
    Ka = null;
  en && "documentMode" in document && (Ka = document.documentMode);
  var om = en && "TextEvent" in window && !Ka,
    W0 = en && (!xc || (Ka && 8 < Ka && 11 >= Ka)),
    P0 = " ",
    I0 = !1;
  function td(t, e) {
    switch (t) {
      case "keyup":
        return cm.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ed(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ki = !1;
  function hm(t, e) {
    switch (t) {
      case "compositionend":
        return ed(e);
      case "keypress":
        return e.which !== 32 ? null : ((I0 = !0), P0);
      case "textInput":
        return (t = e.data), t === P0 && I0 ? null : t;
      default:
        return null;
    }
  }
  function dm(t, e) {
    if (Ki)
      return t === "compositionend" || (!xc && td(t, e))
        ? ((t = Z0()), (Sf = vc = xn = null), (Ki = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return W0 && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var _m = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ud(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!_m[t.type] : e === "textarea";
  }
  function ld(t, e, u, n) {
    Zi ? (ki ? ki.push(n) : (ki = [n])) : (Zi = n),
      (e = hs(e, "onChange")),
      0 < e.length &&
        ((u = new xf("onChange", "change", null, u, n)),
        t.push({ event: u, listeners: e }));
  }
  var Ja = null,
    $a = null;
  function Dm(t) {
    HD(t, 0);
  }
  function Af(t) {
    var e = $e(t);
    if (Y0(e)) return t;
  }
  function nd(t, e) {
    if (t === "change") return e;
  }
  var id = !1;
  if (en) {
    var Cc;
    if (en) {
      var Ac = "oninput" in document;
      if (!Ac) {
        var ad = document.createElement("div");
        ad.setAttribute("oninput", "return;"),
          (Ac = typeof ad.oninput == "function");
      }
      Cc = Ac;
    } else Cc = !1;
    id = Cc && (!document.documentMode || 9 < document.documentMode);
  }
  function rd() {
    Ja && (Ja.detachEvent("onpropertychange", fd), ($a = Ja = null));
  }
  function fd(t) {
    if (t.propertyName === "value" && Af($a)) {
      var e = [];
      ld(e, $a, t, pc(t)), Q0(Dm, e);
    }
  }
  function gm(t, e, u) {
    t === "focusin"
      ? (rd(), (Ja = e), ($a = u), Ja.attachEvent("onpropertychange", fd))
      : t === "focusout" && rd();
  }
  function pm(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Af($a);
  }
  function mm(t, e) {
    if (t === "click") return Af(e);
  }
  function ym(t, e) {
    if (t === "input" || t === "change") return Af(e);
  }
  function vm(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Gu = typeof Object.is == "function" ? Object.is : vm;
  function Wa(t, e) {
    if (Gu(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var u = Object.keys(t),
      n = Object.keys(e);
    if (u.length !== n.length) return !1;
    for (n = 0; n < u.length; n++) {
      var f = u[n];
      if (!je.call(e, f) || !Gu(t[f], e[f])) return !1;
    }
    return !0;
  }
  function sd(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function cd(t, e) {
    var u = sd(t);
    t = 0;
    for (var n; u; ) {
      if (u.nodeType === 3) {
        if (((n = t + u.textContent.length), t <= e && n >= e))
          return { node: u, offset: e - t };
        t = n;
      }
      t: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break t;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = sd(u);
    }
  }
  function od(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? od(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function hd(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = vf(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var u = typeof e.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) t = e.contentWindow;
      else break;
      e = vf(t.document);
    }
    return e;
  }
  function Oc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var bm = en && "documentMode" in document && 11 >= document.documentMode,
    Ji = null,
    Mc = null,
    Pa = null,
    zc = !1;
  function dd(t, e, u) {
    var n =
      u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    zc ||
      Ji == null ||
      Ji !== vf(n) ||
      ((n = Ji),
      "selectionStart" in n && Oc(n)
        ? (n = { start: n.selectionStart, end: n.selectionEnd })
        : ((n = (
            (n.ownerDocument && n.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset,
          })),
      (Pa && Wa(Pa, n)) ||
        ((Pa = n),
        (n = hs(Mc, "onSelect")),
        0 < n.length &&
          ((e = new xf("onSelect", "select", null, e, u)),
          t.push({ event: e, listeners: n }),
          (e.target = Ji))));
  }
  function si(t, e) {
    var u = {};
    return (
      (u[t.toLowerCase()] = e.toLowerCase()),
      (u["Webkit" + t] = "webkit" + e),
      (u["Moz" + t] = "moz" + e),
      u
    );
  }
  var $i = {
      animationend: si("Animation", "AnimationEnd"),
      animationiteration: si("Animation", "AnimationIteration"),
      animationstart: si("Animation", "AnimationStart"),
      transitionrun: si("Transition", "TransitionRun"),
      transitionstart: si("Transition", "TransitionStart"),
      transitioncancel: si("Transition", "TransitionCancel"),
      transitionend: si("Transition", "TransitionEnd"),
    },
    Rc = {},
    _d = {};
  en &&
    ((_d = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete $i.animationend.animation,
      delete $i.animationiteration.animation,
      delete $i.animationstart.animation),
    "TransitionEvent" in window || delete $i.transitionend.transition);
  function ci(t) {
    if (Rc[t]) return Rc[t];
    if (!$i[t]) return t;
    var e = $i[t],
      u;
    for (u in e) if (e.hasOwnProperty(u) && u in _d) return (Rc[t] = e[u]);
    return t;
  }
  var Dd = ci("animationend"),
    gd = ci("animationiteration"),
    pd = ci("animationstart"),
    Sm = ci("transitionrun"),
    Tm = ci("transitionstart"),
    Em = ci("transitioncancel"),
    md = ci("transitionend"),
    yd = new Map(),
    Bc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Bc.push("scrollEnd");
  function Al(t, e) {
    yd.set(t, e), ae(e, [t]);
  }
  var vd = new WeakMap();
  function cl(t, e) {
    if (typeof t == "object" && t !== null) {
      var u = vd.get(t);
      return u !== void 0
        ? u
        : ((e = { value: t, source: e, stack: F0(e) }), vd.set(t, e), e);
    }
    return { value: t, source: e, stack: F0(e) };
  }
  var ol = [],
    Wi = 0,
    Nc = 0;
  function Of() {
    for (var t = Wi, e = (Nc = Wi = 0); e < t; ) {
      var u = ol[e];
      ol[e++] = null;
      var n = ol[e];
      ol[e++] = null;
      var f = ol[e];
      ol[e++] = null;
      var c = ol[e];
      if (((ol[e++] = null), n !== null && f !== null)) {
        var g = n.pending;
        g === null ? (f.next = f) : ((f.next = g.next), (g.next = f)),
          (n.pending = f);
      }
      c !== 0 && bd(u, f, c);
    }
  }
  function Mf(t, e, u, n) {
    (ol[Wi++] = t),
      (ol[Wi++] = e),
      (ol[Wi++] = u),
      (ol[Wi++] = n),
      (Nc |= n),
      (t.lanes |= n),
      (t = t.alternate),
      t !== null && (t.lanes |= n);
  }
  function Uc(t, e, u, n) {
    return Mf(t, e, u, n), zf(t);
  }
  function Pi(t, e) {
    return Mf(t, null, null, e), zf(t);
  }
  function bd(t, e, u) {
    t.lanes |= u;
    var n = t.alternate;
    n !== null && (n.lanes |= u);
    for (var f = !1, c = t.return; c !== null; )
      (c.childLanes |= u),
        (n = c.alternate),
        n !== null && (n.childLanes |= u),
        c.tag === 22 &&
          ((t = c.stateNode), t === null || t._visibility & 1 || (f = !0)),
        (t = c),
        (c = c.return);
    return t.tag === 3
      ? ((c = t.stateNode),
        f &&
          e !== null &&
          ((f = 31 - te(u)),
          (t = c.hiddenUpdates),
          (n = t[f]),
          n === null ? (t[f] = [e]) : n.push(e),
          (e.lane = u | 536870912)),
        c)
      : null;
  }
  function zf(t) {
    if (50 < Tr) throw ((Tr = 0), (Go = null), Error(i(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ii = {};
  function xm(t, e, u, n) {
    (this.tag = t),
      (this.key = u),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = n),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ju(t, e, u, n) {
    return new xm(t, e, u, n);
  }
  function wc(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function un(t, e) {
    var u = t.alternate;
    return (
      u === null
        ? ((u = ju(t.tag, e, t.key, t.mode)),
          (u.elementType = t.elementType),
          (u.type = t.type),
          (u.stateNode = t.stateNode),
          (u.alternate = t),
          (t.alternate = u))
        : ((u.pendingProps = e),
          (u.type = t.type),
          (u.flags = 0),
          (u.subtreeFlags = 0),
          (u.deletions = null)),
      (u.flags = t.flags & 65011712),
      (u.childLanes = t.childLanes),
      (u.lanes = t.lanes),
      (u.child = t.child),
      (u.memoizedProps = t.memoizedProps),
      (u.memoizedState = t.memoizedState),
      (u.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (u.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (u.sibling = t.sibling),
      (u.index = t.index),
      (u.ref = t.ref),
      (u.refCleanup = t.refCleanup),
      u
    );
  }
  function Sd(t, e) {
    t.flags &= 65011714;
    var u = t.alternate;
    return (
      u === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = u.childLanes),
          (t.lanes = u.lanes),
          (t.child = u.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = u.memoizedProps),
          (t.memoizedState = u.memoizedState),
          (t.updateQueue = u.updateQueue),
          (t.type = u.type),
          (e = u.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Rf(t, e, u, n, f, c) {
    var g = 0;
    if (((n = t), typeof t == "function")) wc(t) && (g = 1);
    else if (typeof t == "string")
      g = Ay(t, u, ut.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case k:
          return (t = ju(31, u, e, f)), (t.elementType = k), (t.lanes = c), t;
        case x:
          return oi(u.children, f, c, e);
        case b:
          (g = 8), (f |= 24);
          break;
        case A:
          return (
            (t = ju(12, u, e, f | 2)), (t.elementType = A), (t.lanes = c), t
          );
        case F:
          return (t = ju(13, u, e, f)), (t.elementType = F), (t.lanes = c), t;
        case Z:
          return (t = ju(19, u, e, f)), (t.elementType = Z), (t.lanes = c), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case G:
              case X:
                g = 10;
                break t;
              case H:
                g = 9;
                break t;
              case U:
                g = 11;
                break t;
              case Y:
                g = 14;
                break t;
              case K:
                (g = 16), (n = null);
                break t;
            }
          (g = 29),
            (u = Error(i(130, t === null ? "null" : typeof t, ""))),
            (n = null);
      }
    return (
      (e = ju(g, u, e, f)), (e.elementType = t), (e.type = n), (e.lanes = c), e
    );
  }
  function oi(t, e, u, n) {
    return (t = ju(7, t, n, e)), (t.lanes = u), t;
  }
  function Fc(t, e, u) {
    return (t = ju(6, t, null, e)), (t.lanes = u), t;
  }
  function Hc(t, e, u) {
    return (
      (e = ju(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = u),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var ta = [],
    ea = 0,
    Bf = null,
    Nf = 0,
    hl = [],
    dl = 0,
    hi = null,
    ln = 1,
    nn = "";
  function di(t, e) {
    (ta[ea++] = Nf), (ta[ea++] = Bf), (Bf = t), (Nf = e);
  }
  function Td(t, e, u) {
    (hl[dl++] = ln), (hl[dl++] = nn), (hl[dl++] = hi), (hi = t);
    var n = ln;
    t = nn;
    var f = 32 - te(n) - 1;
    (n &= ~(1 << f)), (u += 1);
    var c = 32 - te(e) + f;
    if (30 < c) {
      var g = f - (f % 5);
      (c = (n & ((1 << g) - 1)).toString(32)),
        (n >>= g),
        (f -= g),
        (ln = (1 << (32 - te(e) + f)) | (u << f) | n),
        (nn = c + t);
    } else (ln = (1 << c) | (u << f) | n), (nn = t);
  }
  function Yc(t) {
    t.return !== null && (di(t, 1), Td(t, 1, 0));
  }
  function qc(t) {
    for (; t === Bf; )
      (Bf = ta[--ea]), (ta[ea] = null), (Nf = ta[--ea]), (ta[ea] = null);
    for (; t === hi; )
      (hi = hl[--dl]),
        (hl[dl] = null),
        (nn = hl[--dl]),
        (hl[dl] = null),
        (ln = hl[--dl]),
        (hl[dl] = null);
  }
  var Du = null,
    pe = null,
    Lt = !1,
    _i = null,
    Nl = !1,
    Xc = Error(i(519));
  function Di(t) {
    var e = Error(i(418, ""));
    throw (er(cl(e, t)), Xc);
  }
  function Ed(t) {
    var e = t.stateNode,
      u = t.type,
      n = t.memoizedProps;
    switch (((e[W] = t), (e[rt] = n), u)) {
      case "dialog":
        Nt("cancel", e), Nt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        Nt("load", e);
        break;
      case "video":
      case "audio":
        for (u = 0; u < xr.length; u++) Nt(xr[u], e);
        break;
      case "source":
        Nt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        Nt("error", e), Nt("load", e);
        break;
      case "details":
        Nt("toggle", e);
        break;
      case "input":
        Nt("invalid", e),
          q0(
            e,
            n.value,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name,
            !0
          ),
          yf(e);
        break;
      case "select":
        Nt("invalid", e);
        break;
      case "textarea":
        Nt("invalid", e), G0(e, n.value, n.defaultValue, n.children), yf(e);
    }
    (u = n.children),
      (typeof u != "string" && typeof u != "number" && typeof u != "bigint") ||
      e.textContent === "" + u ||
      n.suppressHydrationWarning === !0 ||
      GD(e.textContent, u)
        ? (n.popover != null && (Nt("beforetoggle", e), Nt("toggle", e)),
          n.onScroll != null && Nt("scroll", e),
          n.onScrollEnd != null && Nt("scrollend", e),
          n.onClick != null && (e.onclick = ds),
          (e = !0))
        : (e = !1),
      e || Di(t);
  }
  function xd(t) {
    for (Du = t.return; Du; )
      switch (Du.tag) {
        case 5:
        case 13:
          Nl = !1;
          return;
        case 27:
        case 3:
          Nl = !0;
          return;
        default:
          Du = Du.return;
      }
  }
  function Ia(t) {
    if (t !== Du) return !1;
    if (!Lt) return xd(t), (Lt = !0), !1;
    var e = t.tag,
      u;
    if (
      ((u = e !== 3 && e !== 27) &&
        ((u = e === 5) &&
          ((u = t.type),
          (u =
            !(u !== "form" && u !== "button") || lh(t.type, t.memoizedProps))),
        (u = !u)),
      u && pe && Di(t),
      xd(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(i(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((u = t.data), u === "/$")) {
              if (e === 0) {
                pe = Ml(t.nextSibling);
                break t;
              }
              e--;
            } else (u !== "$" && u !== "$!" && u !== "$?") || e++;
          t = t.nextSibling;
        }
        pe = null;
      }
    } else
      e === 27
        ? ((e = pe), Gn(t.type) ? ((t = rh), (rh = null), (pe = t)) : (pe = e))
        : (pe = Du ? Ml(t.stateNode.nextSibling) : null);
    return !0;
  }
  function tr() {
    (pe = Du = null), (Lt = !1);
  }
  function Cd() {
    var t = _i;
    return (
      t !== null &&
        (zu === null ? (zu = t) : zu.push.apply(zu, t), (_i = null)),
      t
    );
  }
  function er(t) {
    _i === null ? (_i = [t]) : _i.push(t);
  }
  var Gc = q(null),
    gi = null,
    an = null;
  function Cn(t, e, u) {
    P(Gc, e._currentValue), (e._currentValue = u);
  }
  function rn(t) {
    (t._currentValue = Gc.current), I(Gc);
  }
  function jc(t, e, u) {
    for (; t !== null; ) {
      var n = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), n !== null && (n.childLanes |= e))
          : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e),
        t === u)
      )
        break;
      t = t.return;
    }
  }
  function Lc(t, e, u, n) {
    var f = t.child;
    for (f !== null && (f.return = t); f !== null; ) {
      var c = f.dependencies;
      if (c !== null) {
        var g = f.child;
        c = c.firstContext;
        t: for (; c !== null; ) {
          var y = c;
          c = f;
          for (var E = 0; E < e.length; E++)
            if (y.context === e[E]) {
              (c.lanes |= u),
                (y = c.alternate),
                y !== null && (y.lanes |= u),
                jc(c.return, u, t),
                n || (g = null);
              break t;
            }
          c = y.next;
        }
      } else if (f.tag === 18) {
        if (((g = f.return), g === null)) throw Error(i(341));
        (g.lanes |= u),
          (c = g.alternate),
          c !== null && (c.lanes |= u),
          jc(g, u, t),
          (g = null);
      } else g = f.child;
      if (g !== null) g.return = f;
      else
        for (g = f; g !== null; ) {
          if (g === t) {
            g = null;
            break;
          }
          if (((f = g.sibling), f !== null)) {
            (f.return = g.return), (g = f);
            break;
          }
          g = g.return;
        }
      f = g;
    }
  }
  function ur(t, e, u, n) {
    t = null;
    for (var f = e, c = !1; f !== null; ) {
      if (!c) {
        if ((f.flags & 524288) !== 0) c = !0;
        else if ((f.flags & 262144) !== 0) break;
      }
      if (f.tag === 10) {
        var g = f.alternate;
        if (g === null) throw Error(i(387));
        if (((g = g.memoizedProps), g !== null)) {
          var y = f.type;
          Gu(f.pendingProps.value, g.value) ||
            (t !== null ? t.push(y) : (t = [y]));
        }
      } else if (f === Ht.current) {
        if (((g = f.alternate), g === null)) throw Error(i(387));
        g.memoizedState.memoizedState !== f.memoizedState.memoizedState &&
          (t !== null ? t.push(Rr) : (t = [Rr]));
      }
      f = f.return;
    }
    t !== null && Lc(e, t, u, n), (e.flags |= 262144);
  }
  function Uf(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Gu(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function pi(t) {
    (gi = t),
      (an = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function lu(t) {
    return Ad(gi, t);
  }
  function wf(t, e) {
    return gi === null && pi(t), Ad(t, e);
  }
  function Ad(t, e) {
    var u = e._currentValue;
    if (((e = { context: e, memoizedValue: u, next: null }), an === null)) {
      if (t === null) throw Error(i(308));
      (an = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else an = an.next = e;
    return u;
  }
  var Cm =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (u, n) {
                  t.push(n);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (u) {
                  return u();
                });
            };
          },
    Am = d.unstable_scheduleCallback,
    Om = d.unstable_NormalPriority,
    Ye = {
      $$typeof: X,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Vc() {
    return { controller: new Cm(), data: new Map(), refCount: 0 };
  }
  function lr(t) {
    t.refCount--,
      t.refCount === 0 &&
        Am(Om, function () {
          t.controller.abort();
        });
  }
  var nr = null,
    Qc = 0,
    ua = 0,
    la = null;
  function Mm(t, e) {
    if (nr === null) {
      var u = (nr = []);
      (Qc = 0),
        (ua = Ko()),
        (la = {
          status: "pending",
          value: void 0,
          then: function (n) {
            u.push(n);
          },
        });
    }
    return Qc++, e.then(Od, Od), e;
  }
  function Od() {
    if (--Qc === 0 && nr !== null) {
      la !== null && (la.status = "fulfilled");
      var t = nr;
      (nr = null), (ua = 0), (la = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function zm(t, e) {
    var u = [],
      n = {
        status: "pending",
        value: null,
        reason: null,
        then: function (f) {
          u.push(f);
        },
      };
    return (
      t.then(
        function () {
          (n.status = "fulfilled"), (n.value = e);
          for (var f = 0; f < u.length; f++) (0, u[f])(e);
        },
        function (f) {
          for (n.status = "rejected", n.reason = f, f = 0; f < u.length; f++)
            (0, u[f])(void 0);
        }
      ),
      n
    );
  }
  var Md = R.S;
  R.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      Mm(t, e),
      Md !== null && Md(t, e);
  };
  var mi = q(null);
  function Zc() {
    var t = mi.current;
    return t !== null ? t : ue.pooledCache;
  }
  function Ff(t, e) {
    e === null ? P(mi, mi.current) : P(mi, e.pool);
  }
  function zd() {
    var t = Zc();
    return t === null ? null : { parent: Ye._currentValue, pool: t };
  }
  var ir = Error(i(460)),
    Rd = Error(i(474)),
    Hf = Error(i(542)),
    kc = { then: function () {} };
  function Bd(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function Yf() {}
  function Nd(t, e, u) {
    switch (
      ((u = t[u]),
      u === void 0 ? t.push(e) : u !== e && (e.then(Yf, Yf), (e = u)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), wd(t), t);
      default:
        if (typeof e.status == "string") e.then(Yf, Yf);
        else {
          if (((t = ue), t !== null && 100 < t.shellSuspendCounter))
            throw Error(i(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (n) {
                if (e.status === "pending") {
                  var f = e;
                  (f.status = "fulfilled"), (f.value = n);
                }
              },
              function (n) {
                if (e.status === "pending") {
                  var f = e;
                  (f.status = "rejected"), (f.reason = n);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), wd(t), t);
        }
        throw ((ar = e), ir);
    }
  }
  var ar = null;
  function Ud() {
    if (ar === null) throw Error(i(459));
    var t = ar;
    return (ar = null), t;
  }
  function wd(t) {
    if (t === ir || t === Hf) throw Error(i(483));
  }
  var An = !1;
  function Kc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Jc(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function On(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Mn(t, e, u) {
    var n = t.updateQueue;
    if (n === null) return null;
    if (((n = n.shared), (Zt & 2) !== 0)) {
      var f = n.pending;
      return (
        f === null ? (e.next = e) : ((e.next = f.next), (f.next = e)),
        (n.pending = e),
        (e = zf(t)),
        bd(t, null, u),
        e
      );
    }
    return Mf(t, n, e, u), zf(t);
  }
  function rr(t, e, u) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (u & 4194048) !== 0))
    ) {
      var n = e.lanes;
      (n &= t.pendingLanes), (u |= n), (e.lanes = u), $l(t, u);
    }
  }
  function $c(t, e) {
    var u = t.updateQueue,
      n = t.alternate;
    if (n !== null && ((n = n.updateQueue), u === n)) {
      var f = null,
        c = null;
      if (((u = u.firstBaseUpdate), u !== null)) {
        do {
          var g = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null,
          };
          c === null ? (f = c = g) : (c = c.next = g), (u = u.next);
        } while (u !== null);
        c === null ? (f = c = e) : (c = c.next = e);
      } else f = c = e;
      (u = {
        baseState: n.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: c,
        shared: n.shared,
        callbacks: n.callbacks,
      }),
        (t.updateQueue = u);
      return;
    }
    (t = u.lastBaseUpdate),
      t === null ? (u.firstBaseUpdate = e) : (t.next = e),
      (u.lastBaseUpdate = e);
  }
  var Wc = !1;
  function fr() {
    if (Wc) {
      var t = la;
      if (t !== null) throw t;
    }
  }
  function sr(t, e, u, n) {
    Wc = !1;
    var f = t.updateQueue;
    An = !1;
    var c = f.firstBaseUpdate,
      g = f.lastBaseUpdate,
      y = f.shared.pending;
    if (y !== null) {
      f.shared.pending = null;
      var E = y,
        z = E.next;
      (E.next = null), g === null ? (c = z) : (g.next = z), (g = E);
      var j = t.alternate;
      j !== null &&
        ((j = j.updateQueue),
        (y = j.lastBaseUpdate),
        y !== g &&
          (y === null ? (j.firstBaseUpdate = z) : (y.next = z),
          (j.lastBaseUpdate = E)));
    }
    if (c !== null) {
      var Q = f.baseState;
      (g = 0), (j = z = E = null), (y = c);
      do {
        var B = y.lane & -536870913,
          N = B !== y.lane;
        if (N ? (qt & B) === B : (n & B) === B) {
          B !== 0 && B === ua && (Wc = !0),
            j !== null &&
              (j = j.next =
                {
                  lane: 0,
                  tag: y.tag,
                  payload: y.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var gt = t,
              dt = y;
            B = e;
            var $t = u;
            switch (dt.tag) {
              case 1:
                if (((gt = dt.payload), typeof gt == "function")) {
                  Q = gt.call($t, Q, B);
                  break t;
                }
                Q = gt;
                break t;
              case 3:
                gt.flags = (gt.flags & -65537) | 128;
              case 0:
                if (
                  ((gt = dt.payload),
                  (B = typeof gt == "function" ? gt.call($t, Q, B) : gt),
                  B == null)
                )
                  break t;
                Q = m({}, Q, B);
                break t;
              case 2:
                An = !0;
            }
          }
          (B = y.callback),
            B !== null &&
              ((t.flags |= 64),
              N && (t.flags |= 8192),
              (N = f.callbacks),
              N === null ? (f.callbacks = [B]) : N.push(B));
        } else
          (N = {
            lane: B,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null,
          }),
            j === null ? ((z = j = N), (E = Q)) : (j = j.next = N),
            (g |= B);
        if (((y = y.next), y === null)) {
          if (((y = f.shared.pending), y === null)) break;
          (N = y),
            (y = N.next),
            (N.next = null),
            (f.lastBaseUpdate = N),
            (f.shared.pending = null);
        }
      } while (!0);
      j === null && (E = Q),
        (f.baseState = E),
        (f.firstBaseUpdate = z),
        (f.lastBaseUpdate = j),
        c === null && (f.shared.lanes = 0),
        (Hn |= g),
        (t.lanes = g),
        (t.memoizedState = Q);
    }
  }
  function Fd(t, e) {
    if (typeof t != "function") throw Error(i(191, t));
    t.call(e);
  }
  function Hd(t, e) {
    var u = t.callbacks;
    if (u !== null)
      for (t.callbacks = null, t = 0; t < u.length; t++) Fd(u[t], e);
  }
  var na = q(null),
    qf = q(0);
  function Yd(t, e) {
    (t = _n), P(qf, t), P(na, e), (_n = t | e.baseLanes);
  }
  function Pc() {
    P(qf, _n), P(na, na.current);
  }
  function Ic() {
    (_n = qf.current), I(na), I(qf);
  }
  var zn = 0,
    xt = null,
    Kt = null,
    Be = null,
    Xf = !1,
    ia = !1,
    yi = !1,
    Gf = 0,
    cr = 0,
    aa = null,
    Rm = 0;
  function Te() {
    throw Error(i(321));
  }
  function to(t, e) {
    if (e === null) return !1;
    for (var u = 0; u < e.length && u < t.length; u++)
      if (!Gu(t[u], e[u])) return !1;
    return !0;
  }
  function eo(t, e, u, n, f, c) {
    return (
      (zn = c),
      (xt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (R.H = t === null || t.memoizedState === null ? b_ : S_),
      (yi = !1),
      (c = u(n, f)),
      (yi = !1),
      ia && (c = Xd(e, u, n, f)),
      qd(t),
      c
    );
  }
  function qd(t) {
    R.H = kf;
    var e = Kt !== null && Kt.next !== null;
    if (((zn = 0), (Be = Kt = xt = null), (Xf = !1), (cr = 0), (aa = null), e))
      throw Error(i(300));
    t === null ||
      Le ||
      ((t = t.dependencies), t !== null && Uf(t) && (Le = !0));
  }
  function Xd(t, e, u, n) {
    xt = t;
    var f = 0;
    do {
      if ((ia && (aa = null), (cr = 0), (ia = !1), 25 <= f))
        throw Error(i(301));
      if (((f += 1), (Be = Kt = null), t.updateQueue != null)) {
        var c = t.updateQueue;
        (c.lastEffect = null),
          (c.events = null),
          (c.stores = null),
          c.memoCache != null && (c.memoCache.index = 0);
      }
      (R.H = Ym), (c = e(u, n));
    } while (ia);
    return c;
  }
  function Bm() {
    var t = R.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? or(e) : e),
      (t = t.useState()[0]),
      (Kt !== null ? Kt.memoizedState : null) !== t && (xt.flags |= 1024),
      e
    );
  }
  function uo() {
    var t = Gf !== 0;
    return (Gf = 0), t;
  }
  function lo(t, e, u) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~u);
  }
  function no(t) {
    if (Xf) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      Xf = !1;
    }
    (zn = 0), (Be = Kt = xt = null), (ia = !1), (cr = Gf = 0), (aa = null);
  }
  function Ou() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Be === null ? (xt.memoizedState = Be = t) : (Be = Be.next = t), Be;
  }
  function Ne() {
    if (Kt === null) {
      var t = xt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Kt.next;
    var e = Be === null ? xt.memoizedState : Be.next;
    if (e !== null) (Be = e), (Kt = t);
    else {
      if (t === null)
        throw xt.alternate === null ? Error(i(467)) : Error(i(310));
      (Kt = t),
        (t = {
          memoizedState: Kt.memoizedState,
          baseState: Kt.baseState,
          baseQueue: Kt.baseQueue,
          queue: Kt.queue,
          next: null,
        }),
        Be === null ? (xt.memoizedState = Be = t) : (Be = Be.next = t);
    }
    return Be;
  }
  function io() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function or(t) {
    var e = cr;
    return (
      (cr += 1),
      aa === null && (aa = []),
      (t = Nd(aa, t, e)),
      (e = xt),
      (Be === null ? e.memoizedState : Be.next) === null &&
        ((e = e.alternate),
        (R.H = e === null || e.memoizedState === null ? b_ : S_)),
      t
    );
  }
  function jf(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return or(t);
      if (t.$$typeof === X) return lu(t);
    }
    throw Error(i(438, String(t)));
  }
  function ao(t) {
    var e = null,
      u = xt.updateQueue;
    if ((u !== null && (e = u.memoCache), e == null)) {
      var n = xt.alternate;
      n !== null &&
        ((n = n.updateQueue),
        n !== null &&
          ((n = n.memoCache),
          n != null &&
            (e = {
              data: n.data.map(function (f) {
                return f.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      u === null && ((u = io()), (xt.updateQueue = u)),
      (u.memoCache = e),
      (u = e.data[e.index]),
      u === void 0)
    )
      for (u = e.data[e.index] = Array(t), n = 0; n < t; n++) u[n] = J;
    return e.index++, u;
  }
  function fn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Lf(t) {
    var e = Ne();
    return ro(e, Kt, t);
  }
  function ro(t, e, u) {
    var n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = u;
    var f = t.baseQueue,
      c = n.pending;
    if (c !== null) {
      if (f !== null) {
        var g = f.next;
        (f.next = c.next), (c.next = g);
      }
      (e.baseQueue = f = c), (n.pending = null);
    }
    if (((c = t.baseState), f === null)) t.memoizedState = c;
    else {
      e = f.next;
      var y = (g = null),
        E = null,
        z = e,
        j = !1;
      do {
        var Q = z.lane & -536870913;
        if (Q !== z.lane ? (qt & Q) === Q : (zn & Q) === Q) {
          var B = z.revertLane;
          if (B === 0)
            E !== null &&
              (E = E.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: z.action,
                  hasEagerState: z.hasEagerState,
                  eagerState: z.eagerState,
                  next: null,
                }),
              Q === ua && (j = !0);
          else if ((zn & B) === B) {
            (z = z.next), B === ua && (j = !0);
            continue;
          } else
            (Q = {
              lane: 0,
              revertLane: z.revertLane,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null,
            }),
              E === null ? ((y = E = Q), (g = c)) : (E = E.next = Q),
              (xt.lanes |= B),
              (Hn |= B);
          (Q = z.action),
            yi && u(c, Q),
            (c = z.hasEagerState ? z.eagerState : u(c, Q));
        } else
          (B = {
            lane: Q,
            revertLane: z.revertLane,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null,
          }),
            E === null ? ((y = E = B), (g = c)) : (E = E.next = B),
            (xt.lanes |= Q),
            (Hn |= Q);
        z = z.next;
      } while (z !== null && z !== e);
      if (
        (E === null ? (g = c) : (E.next = y),
        !Gu(c, t.memoizedState) && ((Le = !0), j && ((u = la), u !== null)))
      )
        throw u;
      (t.memoizedState = c),
        (t.baseState = g),
        (t.baseQueue = E),
        (n.lastRenderedState = c);
    }
    return f === null && (n.lanes = 0), [t.memoizedState, n.dispatch];
  }
  function fo(t) {
    var e = Ne(),
      u = e.queue;
    if (u === null) throw Error(i(311));
    u.lastRenderedReducer = t;
    var n = u.dispatch,
      f = u.pending,
      c = e.memoizedState;
    if (f !== null) {
      u.pending = null;
      var g = (f = f.next);
      do (c = t(c, g.action)), (g = g.next);
      while (g !== f);
      Gu(c, e.memoizedState) || (Le = !0),
        (e.memoizedState = c),
        e.baseQueue === null && (e.baseState = c),
        (u.lastRenderedState = c);
    }
    return [c, n];
  }
  function Gd(t, e, u) {
    var n = xt,
      f = Ne(),
      c = Lt;
    if (c) {
      if (u === void 0) throw Error(i(407));
      u = u();
    } else u = e();
    var g = !Gu((Kt || f).memoizedState, u);
    g && ((f.memoizedState = u), (Le = !0)), (f = f.queue);
    var y = Vd.bind(null, n, f, t);
    if (
      (hr(2048, 8, y, [t]),
      f.getSnapshot !== e || g || (Be !== null && Be.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        ra(9, Vf(), Ld.bind(null, n, f, u, e), null),
        ue === null)
      )
        throw Error(i(349));
      c || (zn & 124) !== 0 || jd(n, e, u);
    }
    return u;
  }
  function jd(t, e, u) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: u }),
      (e = xt.updateQueue),
      e === null
        ? ((e = io()), (xt.updateQueue = e), (e.stores = [t]))
        : ((u = e.stores), u === null ? (e.stores = [t]) : u.push(t));
  }
  function Ld(t, e, u, n) {
    (e.value = u), (e.getSnapshot = n), Qd(e) && Zd(t);
  }
  function Vd(t, e, u) {
    return u(function () {
      Qd(e) && Zd(t);
    });
  }
  function Qd(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var u = e();
      return !Gu(t, u);
    } catch {
      return !0;
    }
  }
  function Zd(t) {
    var e = Pi(t, 2);
    e !== null && ku(e, t, 2);
  }
  function so(t) {
    var e = Ou();
    if (typeof t == "function") {
      var u = t;
      if (((t = u()), yi)) {
        Me(!0);
        try {
          u();
        } finally {
          Me(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function kd(t, e, u, n) {
    return (t.baseState = u), ro(t, Kt, typeof n == "function" ? n : fn);
  }
  function Nm(t, e, u, n, f) {
    if (Zf(t)) throw Error(i(485));
    if (((t = e.action), t !== null)) {
      var c = {
        payload: f,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (g) {
          c.listeners.push(g);
        },
      };
      R.T !== null ? u(!0) : (c.isTransition = !1),
        n(c),
        (u = e.pending),
        u === null
          ? ((c.next = e.pending = c), Kd(e, c))
          : ((c.next = u.next), (e.pending = u.next = c));
    }
  }
  function Kd(t, e) {
    var u = e.action,
      n = e.payload,
      f = t.state;
    if (e.isTransition) {
      var c = R.T,
        g = {};
      R.T = g;
      try {
        var y = u(f, n),
          E = R.S;
        E !== null && E(g, y), Jd(t, e, y);
      } catch (z) {
        co(t, e, z);
      } finally {
        R.T = c;
      }
    } else
      try {
        (c = u(f, n)), Jd(t, e, c);
      } catch (z) {
        co(t, e, z);
      }
  }
  function Jd(t, e, u) {
    u !== null && typeof u == "object" && typeof u.then == "function"
      ? u.then(
          function (n) {
            $d(t, e, n);
          },
          function (n) {
            return co(t, e, n);
          }
        )
      : $d(t, e, u);
  }
  function $d(t, e, u) {
    (e.status = "fulfilled"),
      (e.value = u),
      Wd(e),
      (t.state = u),
      (e = t.pending),
      e !== null &&
        ((u = e.next),
        u === e ? (t.pending = null) : ((u = u.next), (e.next = u), Kd(t, u)));
  }
  function co(t, e, u) {
    var n = t.pending;
    if (((t.pending = null), n !== null)) {
      n = n.next;
      do (e.status = "rejected"), (e.reason = u), Wd(e), (e = e.next);
      while (e !== n);
    }
    t.action = null;
  }
  function Wd(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Pd(t, e) {
    return e;
  }
  function Id(t, e) {
    if (Lt) {
      var u = ue.formState;
      if (u !== null) {
        t: {
          var n = xt;
          if (Lt) {
            if (pe) {
              e: {
                for (var f = pe, c = Nl; f.nodeType !== 8; ) {
                  if (!c) {
                    f = null;
                    break e;
                  }
                  if (((f = Ml(f.nextSibling)), f === null)) {
                    f = null;
                    break e;
                  }
                }
                (c = f.data), (f = c === "F!" || c === "F" ? f : null);
              }
              if (f) {
                (pe = Ml(f.nextSibling)), (n = f.data === "F!");
                break t;
              }
            }
            Di(n);
          }
          n = !1;
        }
        n && (e = u[0]);
      }
    }
    return (
      (u = Ou()),
      (u.memoizedState = u.baseState = e),
      (n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Pd,
        lastRenderedState: e,
      }),
      (u.queue = n),
      (u = m_.bind(null, xt, n)),
      (n.dispatch = u),
      (n = so(!1)),
      (c = go.bind(null, xt, !1, n.queue)),
      (n = Ou()),
      (f = { state: e, dispatch: null, action: t, pending: null }),
      (n.queue = f),
      (u = Nm.bind(null, xt, f, c, u)),
      (f.dispatch = u),
      (n.memoizedState = t),
      [e, u, !1]
    );
  }
  function t_(t) {
    var e = Ne();
    return e_(e, Kt, t);
  }
  function e_(t, e, u) {
    if (
      ((e = ro(t, e, Pd)[0]),
      (t = Lf(fn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var n = or(e);
      } catch (g) {
        throw g === ir ? Hf : g;
      }
    else n = e;
    e = Ne();
    var f = e.queue,
      c = f.dispatch;
    return (
      u !== e.memoizedState &&
        ((xt.flags |= 2048), ra(9, Vf(), Um.bind(null, f, u), null)),
      [n, c, t]
    );
  }
  function Um(t, e) {
    t.action = e;
  }
  function u_(t) {
    var e = Ne(),
      u = Kt;
    if (u !== null) return e_(e, u, t);
    Ne(), (e = e.memoizedState), (u = Ne());
    var n = u.queue.dispatch;
    return (u.memoizedState = t), [e, n, !1];
  }
  function ra(t, e, u, n) {
    return (
      (t = { tag: t, create: u, deps: n, inst: e, next: null }),
      (e = xt.updateQueue),
      e === null && ((e = io()), (xt.updateQueue = e)),
      (u = e.lastEffect),
      u === null
        ? (e.lastEffect = t.next = t)
        : ((n = u.next), (u.next = t), (t.next = n), (e.lastEffect = t)),
      t
    );
  }
  function Vf() {
    return { destroy: void 0, resource: void 0 };
  }
  function l_() {
    return Ne().memoizedState;
  }
  function Qf(t, e, u, n) {
    var f = Ou();
    (n = n === void 0 ? null : n),
      (xt.flags |= t),
      (f.memoizedState = ra(1 | e, Vf(), u, n));
  }
  function hr(t, e, u, n) {
    var f = Ne();
    n = n === void 0 ? null : n;
    var c = f.memoizedState.inst;
    Kt !== null && n !== null && to(n, Kt.memoizedState.deps)
      ? (f.memoizedState = ra(e, c, u, n))
      : ((xt.flags |= t), (f.memoizedState = ra(1 | e, c, u, n)));
  }
  function n_(t, e) {
    Qf(8390656, 8, t, e);
  }
  function i_(t, e) {
    hr(2048, 8, t, e);
  }
  function a_(t, e) {
    return hr(4, 2, t, e);
  }
  function r_(t, e) {
    return hr(4, 4, t, e);
  }
  function f_(t, e) {
    if (typeof e == "function") {
      t = t();
      var u = e(t);
      return function () {
        typeof u == "function" ? u() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function s_(t, e, u) {
    (u = u != null ? u.concat([t]) : null), hr(4, 4, f_.bind(null, e, t), u);
  }
  function oo() {}
  function c_(t, e) {
    var u = Ne();
    e = e === void 0 ? null : e;
    var n = u.memoizedState;
    return e !== null && to(e, n[1]) ? n[0] : ((u.memoizedState = [t, e]), t);
  }
  function o_(t, e) {
    var u = Ne();
    e = e === void 0 ? null : e;
    var n = u.memoizedState;
    if (e !== null && to(e, n[1])) return n[0];
    if (((n = t()), yi)) {
      Me(!0);
      try {
        t();
      } finally {
        Me(!1);
      }
    }
    return (u.memoizedState = [n, e]), n;
  }
  function ho(t, e, u) {
    return u === void 0 || (zn & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = u), (t = _D()), (xt.lanes |= t), (Hn |= t), u);
  }
  function h_(t, e, u, n) {
    return Gu(u, e)
      ? u
      : na.current !== null
      ? ((t = ho(t, u, n)), Gu(t, e) || (Le = !0), t)
      : (zn & 42) === 0
      ? ((Le = !0), (t.memoizedState = u))
      : ((t = _D()), (xt.lanes |= t), (Hn |= t), e);
  }
  function d_(t, e, u, n, f) {
    var c = L.p;
    L.p = c !== 0 && 8 > c ? c : 8;
    var g = R.T,
      y = {};
    (R.T = y), go(t, !1, e, u);
    try {
      var E = f(),
        z = R.S;
      if (
        (z !== null && z(y, E),
        E !== null && typeof E == "object" && typeof E.then == "function")
      ) {
        var j = zm(E, n);
        dr(t, e, j, Zu(t));
      } else dr(t, e, n, Zu(t));
    } catch (Q) {
      dr(t, e, { then: function () {}, status: "rejected", reason: Q }, Zu());
    } finally {
      (L.p = c), (R.T = g);
    }
  }
  function wm() {}
  function _o(t, e, u, n) {
    if (t.tag !== 5) throw Error(i(476));
    var f = __(t).queue;
    d_(
      t,
      f,
      e,
      tt,
      u === null
        ? wm
        : function () {
            return D_(t), u(n);
          }
    );
  }
  function __(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: tt,
      baseState: tt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fn,
        lastRenderedState: tt,
      },
      next: null,
    };
    var u = {};
    return (
      (e.next = {
        memoizedState: u,
        baseState: u,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: fn,
          lastRenderedState: u,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function D_(t) {
    var e = __(t).next.queue;
    dr(t, e, {}, Zu());
  }
  function Do() {
    return lu(Rr);
  }
  function g_() {
    return Ne().memoizedState;
  }
  function p_() {
    return Ne().memoizedState;
  }
  function Fm(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var u = Zu();
          t = On(u);
          var n = Mn(e, t, u);
          n !== null && (ku(n, e, u), rr(n, e, u)),
            (e = { cache: Vc() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function Hm(t, e, u) {
    var n = Zu();
    (u = {
      lane: n,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Zf(t)
        ? y_(e, u)
        : ((u = Uc(t, e, u, n)), u !== null && (ku(u, t, n), v_(u, e, n)));
  }
  function m_(t, e, u) {
    var n = Zu();
    dr(t, e, u, n);
  }
  function dr(t, e, u, n) {
    var f = {
      lane: n,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Zf(t)) y_(e, f);
    else {
      var c = t.alternate;
      if (
        t.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = e.lastRenderedReducer), c !== null)
      )
        try {
          var g = e.lastRenderedState,
            y = c(g, u);
          if (((f.hasEagerState = !0), (f.eagerState = y), Gu(y, g)))
            return Mf(t, e, f, 0), ue === null && Of(), !1;
        } catch {
        } finally {
        }
      if (((u = Uc(t, e, f, n)), u !== null))
        return ku(u, t, n), v_(u, e, n), !0;
    }
    return !1;
  }
  function go(t, e, u, n) {
    if (
      ((n = {
        lane: 2,
        revertLane: Ko(),
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Zf(t))
    ) {
      if (e) throw Error(i(479));
    } else (e = Uc(t, u, n, 2)), e !== null && ku(e, t, 2);
  }
  function Zf(t) {
    var e = t.alternate;
    return t === xt || (e !== null && e === xt);
  }
  function y_(t, e) {
    ia = Xf = !0;
    var u = t.pending;
    u === null ? (e.next = e) : ((e.next = u.next), (u.next = e)),
      (t.pending = e);
  }
  function v_(t, e, u) {
    if ((u & 4194048) !== 0) {
      var n = e.lanes;
      (n &= t.pendingLanes), (u |= n), (e.lanes = u), $l(t, u);
    }
  }
  var kf = {
      readContext: lu,
      use: jf,
      useCallback: Te,
      useContext: Te,
      useEffect: Te,
      useImperativeHandle: Te,
      useLayoutEffect: Te,
      useInsertionEffect: Te,
      useMemo: Te,
      useReducer: Te,
      useRef: Te,
      useState: Te,
      useDebugValue: Te,
      useDeferredValue: Te,
      useTransition: Te,
      useSyncExternalStore: Te,
      useId: Te,
      useHostTransitionStatus: Te,
      useFormState: Te,
      useActionState: Te,
      useOptimistic: Te,
      useMemoCache: Te,
      useCacheRefresh: Te,
    },
    b_ = {
      readContext: lu,
      use: jf,
      useCallback: function (t, e) {
        return (Ou().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: lu,
      useEffect: n_,
      useImperativeHandle: function (t, e, u) {
        (u = u != null ? u.concat([t]) : null),
          Qf(4194308, 4, f_.bind(null, e, t), u);
      },
      useLayoutEffect: function (t, e) {
        return Qf(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        Qf(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var u = Ou();
        e = e === void 0 ? null : e;
        var n = t();
        if (yi) {
          Me(!0);
          try {
            t();
          } finally {
            Me(!1);
          }
        }
        return (u.memoizedState = [n, e]), n;
      },
      useReducer: function (t, e, u) {
        var n = Ou();
        if (u !== void 0) {
          var f = u(e);
          if (yi) {
            Me(!0);
            try {
              u(e);
            } finally {
              Me(!1);
            }
          }
        } else f = e;
        return (
          (n.memoizedState = n.baseState = f),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: f,
          }),
          (n.queue = t),
          (t = t.dispatch = Hm.bind(null, xt, t)),
          [n.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = Ou();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = so(t);
        var e = t.queue,
          u = m_.bind(null, xt, e);
        return (e.dispatch = u), [t.memoizedState, u];
      },
      useDebugValue: oo,
      useDeferredValue: function (t, e) {
        var u = Ou();
        return ho(u, t, e);
      },
      useTransition: function () {
        var t = so(!1);
        return (
          (t = d_.bind(null, xt, t.queue, !0, !1)),
          (Ou().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, u) {
        var n = xt,
          f = Ou();
        if (Lt) {
          if (u === void 0) throw Error(i(407));
          u = u();
        } else {
          if (((u = e()), ue === null)) throw Error(i(349));
          (qt & 124) !== 0 || jd(n, e, u);
        }
        f.memoizedState = u;
        var c = { value: u, getSnapshot: e };
        return (
          (f.queue = c),
          n_(Vd.bind(null, n, c, t), [t]),
          (n.flags |= 2048),
          ra(9, Vf(), Ld.bind(null, n, c, u, e), null),
          u
        );
      },
      useId: function () {
        var t = Ou(),
          e = ue.identifierPrefix;
        if (Lt) {
          var u = nn,
            n = ln;
          (u = (n & ~(1 << (32 - te(n) - 1))).toString(32) + u),
            (e = "«" + e + "R" + u),
            (u = Gf++),
            0 < u && (e += "H" + u.toString(32)),
            (e += "»");
        } else (u = Rm++), (e = "«" + e + "r" + u.toString(32) + "»");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Do,
      useFormState: Id,
      useActionState: Id,
      useOptimistic: function (t) {
        var e = Ou();
        e.memoizedState = e.baseState = t;
        var u = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = u),
          (e = go.bind(null, xt, !0, u)),
          (u.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: ao,
      useCacheRefresh: function () {
        return (Ou().memoizedState = Fm.bind(null, xt));
      },
    },
    S_ = {
      readContext: lu,
      use: jf,
      useCallback: c_,
      useContext: lu,
      useEffect: i_,
      useImperativeHandle: s_,
      useInsertionEffect: a_,
      useLayoutEffect: r_,
      useMemo: o_,
      useReducer: Lf,
      useRef: l_,
      useState: function () {
        return Lf(fn);
      },
      useDebugValue: oo,
      useDeferredValue: function (t, e) {
        var u = Ne();
        return h_(u, Kt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Lf(fn)[0],
          e = Ne().memoizedState;
        return [typeof t == "boolean" ? t : or(t), e];
      },
      useSyncExternalStore: Gd,
      useId: g_,
      useHostTransitionStatus: Do,
      useFormState: t_,
      useActionState: t_,
      useOptimistic: function (t, e) {
        var u = Ne();
        return kd(u, Kt, t, e);
      },
      useMemoCache: ao,
      useCacheRefresh: p_,
    },
    Ym = {
      readContext: lu,
      use: jf,
      useCallback: c_,
      useContext: lu,
      useEffect: i_,
      useImperativeHandle: s_,
      useInsertionEffect: a_,
      useLayoutEffect: r_,
      useMemo: o_,
      useReducer: fo,
      useRef: l_,
      useState: function () {
        return fo(fn);
      },
      useDebugValue: oo,
      useDeferredValue: function (t, e) {
        var u = Ne();
        return Kt === null ? ho(u, t, e) : h_(u, Kt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = fo(fn)[0],
          e = Ne().memoizedState;
        return [typeof t == "boolean" ? t : or(t), e];
      },
      useSyncExternalStore: Gd,
      useId: g_,
      useHostTransitionStatus: Do,
      useFormState: u_,
      useActionState: u_,
      useOptimistic: function (t, e) {
        var u = Ne();
        return Kt !== null
          ? kd(u, Kt, t, e)
          : ((u.baseState = t), [t, u.queue.dispatch]);
      },
      useMemoCache: ao,
      useCacheRefresh: p_,
    },
    fa = null,
    _r = 0;
  function Kf(t) {
    var e = _r;
    return (_r += 1), fa === null && (fa = []), Nd(fa, t, e);
  }
  function Dr(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function Jf(t, e) {
    throw e.$$typeof === S
      ? Error(i(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          i(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function T_(t) {
    var e = t._init;
    return e(t._payload);
  }
  function E_(t) {
    function e(O, C) {
      if (t) {
        var M = O.deletions;
        M === null ? ((O.deletions = [C]), (O.flags |= 16)) : M.push(C);
      }
    }
    function u(O, C) {
      if (!t) return null;
      for (; C !== null; ) e(O, C), (C = C.sibling);
      return null;
    }
    function n(O) {
      for (var C = new Map(); O !== null; )
        O.key !== null ? C.set(O.key, O) : C.set(O.index, O), (O = O.sibling);
      return C;
    }
    function f(O, C) {
      return (O = un(O, C)), (O.index = 0), (O.sibling = null), O;
    }
    function c(O, C, M) {
      return (
        (O.index = M),
        t
          ? ((M = O.alternate),
            M !== null
              ? ((M = M.index), M < C ? ((O.flags |= 67108866), C) : M)
              : ((O.flags |= 67108866), C))
          : ((O.flags |= 1048576), C)
      );
    }
    function g(O) {
      return t && O.alternate === null && (O.flags |= 67108866), O;
    }
    function y(O, C, M, V) {
      return C === null || C.tag !== 6
        ? ((C = Fc(M, O.mode, V)), (C.return = O), C)
        : ((C = f(C, M)), (C.return = O), C);
    }
    function E(O, C, M, V) {
      var nt = M.type;
      return nt === x
        ? j(O, C, M.props.children, V, M.key)
        : C !== null &&
          (C.elementType === nt ||
            (typeof nt == "object" &&
              nt !== null &&
              nt.$$typeof === K &&
              T_(nt) === C.type))
        ? ((C = f(C, M.props)), Dr(C, M), (C.return = O), C)
        : ((C = Rf(M.type, M.key, M.props, null, O.mode, V)),
          Dr(C, M),
          (C.return = O),
          C);
    }
    function z(O, C, M, V) {
      return C === null ||
        C.tag !== 4 ||
        C.stateNode.containerInfo !== M.containerInfo ||
        C.stateNode.implementation !== M.implementation
        ? ((C = Hc(M, O.mode, V)), (C.return = O), C)
        : ((C = f(C, M.children || [])), (C.return = O), C);
    }
    function j(O, C, M, V, nt) {
      return C === null || C.tag !== 7
        ? ((C = oi(M, O.mode, V, nt)), (C.return = O), C)
        : ((C = f(C, M)), (C.return = O), C);
    }
    function Q(O, C, M) {
      if (
        (typeof C == "string" && C !== "") ||
        typeof C == "number" ||
        typeof C == "bigint"
      )
        return (C = Fc("" + C, O.mode, M)), (C.return = O), C;
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case T:
            return (
              (M = Rf(C.type, C.key, C.props, null, O.mode, M)),
              Dr(M, C),
              (M.return = O),
              M
            );
          case v:
            return (C = Hc(C, O.mode, M)), (C.return = O), C;
          case K:
            var V = C._init;
            return (C = V(C._payload)), Q(O, C, M);
        }
        if (ot(C) || $(C))
          return (C = oi(C, O.mode, M, null)), (C.return = O), C;
        if (typeof C.then == "function") return Q(O, Kf(C), M);
        if (C.$$typeof === X) return Q(O, wf(O, C), M);
        Jf(O, C);
      }
      return null;
    }
    function B(O, C, M, V) {
      var nt = C !== null ? C.key : null;
      if (
        (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
      )
        return nt !== null ? null : y(O, C, "" + M, V);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case T:
            return M.key === nt ? E(O, C, M, V) : null;
          case v:
            return M.key === nt ? z(O, C, M, V) : null;
          case K:
            return (nt = M._init), (M = nt(M._payload)), B(O, C, M, V);
        }
        if (ot(M) || $(M)) return nt !== null ? null : j(O, C, M, V, null);
        if (typeof M.then == "function") return B(O, C, Kf(M), V);
        if (M.$$typeof === X) return B(O, C, wf(O, M), V);
        Jf(O, M);
      }
      return null;
    }
    function N(O, C, M, V, nt) {
      if (
        (typeof V == "string" && V !== "") ||
        typeof V == "number" ||
        typeof V == "bigint"
      )
        return (O = O.get(M) || null), y(C, O, "" + V, nt);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case T:
            return (
              (O = O.get(V.key === null ? M : V.key) || null), E(C, O, V, nt)
            );
          case v:
            return (
              (O = O.get(V.key === null ? M : V.key) || null), z(C, O, V, nt)
            );
          case K:
            var At = V._init;
            return (V = At(V._payload)), N(O, C, M, V, nt);
        }
        if (ot(V) || $(V)) return (O = O.get(M) || null), j(C, O, V, nt, null);
        if (typeof V.then == "function") return N(O, C, M, Kf(V), nt);
        if (V.$$typeof === X) return N(O, C, M, wf(C, V), nt);
        Jf(C, V);
      }
      return null;
    }
    function gt(O, C, M, V) {
      for (
        var nt = null, At = null, ft = C, Dt = (C = 0), Qe = null;
        ft !== null && Dt < M.length;
        Dt++
      ) {
        ft.index > Dt ? ((Qe = ft), (ft = null)) : (Qe = ft.sibling);
        var Gt = B(O, ft, M[Dt], V);
        if (Gt === null) {
          ft === null && (ft = Qe);
          break;
        }
        t && ft && Gt.alternate === null && e(O, ft),
          (C = c(Gt, C, Dt)),
          At === null ? (nt = Gt) : (At.sibling = Gt),
          (At = Gt),
          (ft = Qe);
      }
      if (Dt === M.length) return u(O, ft), Lt && di(O, Dt), nt;
      if (ft === null) {
        for (; Dt < M.length; Dt++)
          (ft = Q(O, M[Dt], V)),
            ft !== null &&
              ((C = c(ft, C, Dt)),
              At === null ? (nt = ft) : (At.sibling = ft),
              (At = ft));
        return Lt && di(O, Dt), nt;
      }
      for (ft = n(ft); Dt < M.length; Dt++)
        (Qe = N(ft, O, Dt, M[Dt], V)),
          Qe !== null &&
            (t &&
              Qe.alternate !== null &&
              ft.delete(Qe.key === null ? Dt : Qe.key),
            (C = c(Qe, C, Dt)),
            At === null ? (nt = Qe) : (At.sibling = Qe),
            (At = Qe));
      return (
        t &&
          ft.forEach(function (Zn) {
            return e(O, Zn);
          }),
        Lt && di(O, Dt),
        nt
      );
    }
    function dt(O, C, M, V) {
      if (M == null) throw Error(i(151));
      for (
        var nt = null,
          At = null,
          ft = C,
          Dt = (C = 0),
          Qe = null,
          Gt = M.next();
        ft !== null && !Gt.done;
        Dt++, Gt = M.next()
      ) {
        ft.index > Dt ? ((Qe = ft), (ft = null)) : (Qe = ft.sibling);
        var Zn = B(O, ft, Gt.value, V);
        if (Zn === null) {
          ft === null && (ft = Qe);
          break;
        }
        t && ft && Zn.alternate === null && e(O, ft),
          (C = c(Zn, C, Dt)),
          At === null ? (nt = Zn) : (At.sibling = Zn),
          (At = Zn),
          (ft = Qe);
      }
      if (Gt.done) return u(O, ft), Lt && di(O, Dt), nt;
      if (ft === null) {
        for (; !Gt.done; Dt++, Gt = M.next())
          (Gt = Q(O, Gt.value, V)),
            Gt !== null &&
              ((C = c(Gt, C, Dt)),
              At === null ? (nt = Gt) : (At.sibling = Gt),
              (At = Gt));
        return Lt && di(O, Dt), nt;
      }
      for (ft = n(ft); !Gt.done; Dt++, Gt = M.next())
        (Gt = N(ft, O, Dt, Gt.value, V)),
          Gt !== null &&
            (t &&
              Gt.alternate !== null &&
              ft.delete(Gt.key === null ? Dt : Gt.key),
            (C = c(Gt, C, Dt)),
            At === null ? (nt = Gt) : (At.sibling = Gt),
            (At = Gt));
      return (
        t &&
          ft.forEach(function (qy) {
            return e(O, qy);
          }),
        Lt && di(O, Dt),
        nt
      );
    }
    function $t(O, C, M, V) {
      if (
        (typeof M == "object" &&
          M !== null &&
          M.type === x &&
          M.key === null &&
          (M = M.props.children),
        typeof M == "object" && M !== null)
      ) {
        switch (M.$$typeof) {
          case T:
            t: {
              for (var nt = M.key; C !== null; ) {
                if (C.key === nt) {
                  if (((nt = M.type), nt === x)) {
                    if (C.tag === 7) {
                      u(O, C.sibling),
                        (V = f(C, M.props.children)),
                        (V.return = O),
                        (O = V);
                      break t;
                    }
                  } else if (
                    C.elementType === nt ||
                    (typeof nt == "object" &&
                      nt !== null &&
                      nt.$$typeof === K &&
                      T_(nt) === C.type)
                  ) {
                    u(O, C.sibling),
                      (V = f(C, M.props)),
                      Dr(V, M),
                      (V.return = O),
                      (O = V);
                    break t;
                  }
                  u(O, C);
                  break;
                } else e(O, C);
                C = C.sibling;
              }
              M.type === x
                ? ((V = oi(M.props.children, O.mode, V, M.key)),
                  (V.return = O),
                  (O = V))
                : ((V = Rf(M.type, M.key, M.props, null, O.mode, V)),
                  Dr(V, M),
                  (V.return = O),
                  (O = V));
            }
            return g(O);
          case v:
            t: {
              for (nt = M.key; C !== null; ) {
                if (C.key === nt)
                  if (
                    C.tag === 4 &&
                    C.stateNode.containerInfo === M.containerInfo &&
                    C.stateNode.implementation === M.implementation
                  ) {
                    u(O, C.sibling),
                      (V = f(C, M.children || [])),
                      (V.return = O),
                      (O = V);
                    break t;
                  } else {
                    u(O, C);
                    break;
                  }
                else e(O, C);
                C = C.sibling;
              }
              (V = Hc(M, O.mode, V)), (V.return = O), (O = V);
            }
            return g(O);
          case K:
            return (nt = M._init), (M = nt(M._payload)), $t(O, C, M, V);
        }
        if (ot(M)) return gt(O, C, M, V);
        if ($(M)) {
          if (((nt = $(M)), typeof nt != "function")) throw Error(i(150));
          return (M = nt.call(M)), dt(O, C, M, V);
        }
        if (typeof M.then == "function") return $t(O, C, Kf(M), V);
        if (M.$$typeof === X) return $t(O, C, wf(O, M), V);
        Jf(O, M);
      }
      return (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
        ? ((M = "" + M),
          C !== null && C.tag === 6
            ? (u(O, C.sibling), (V = f(C, M)), (V.return = O), (O = V))
            : (u(O, C), (V = Fc(M, O.mode, V)), (V.return = O), (O = V)),
          g(O))
        : u(O, C);
    }
    return function (O, C, M, V) {
      try {
        _r = 0;
        var nt = $t(O, C, M, V);
        return (fa = null), nt;
      } catch (ft) {
        if (ft === ir || ft === Hf) throw ft;
        var At = ju(29, ft, null, O.mode);
        return (At.lanes = V), (At.return = O), At;
      } finally {
      }
    };
  }
  var sa = E_(!0),
    x_ = E_(!1),
    _l = q(null),
    Ul = null;
  function Rn(t) {
    var e = t.alternate;
    P(qe, qe.current & 1),
      P(_l, t),
      Ul === null &&
        (e === null || na.current !== null || e.memoizedState !== null) &&
        (Ul = t);
  }
  function C_(t) {
    if (t.tag === 22) {
      if ((P(qe, qe.current), P(_l, t), Ul === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Ul = t);
      }
    } else Bn();
  }
  function Bn() {
    P(qe, qe.current), P(_l, _l.current);
  }
  function sn(t) {
    I(_l), Ul === t && (Ul = null), I(qe);
  }
  var qe = q(0);
  function $f(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var u = e.memoizedState;
        if (
          u !== null &&
          ((u = u.dehydrated), u === null || u.data === "$?" || ah(u))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  function po(t, e, u, n) {
    (e = t.memoizedState),
      (u = u(n, e)),
      (u = u == null ? e : m({}, e, u)),
      (t.memoizedState = u),
      t.lanes === 0 && (t.updateQueue.baseState = u);
  }
  var mo = {
    enqueueSetState: function (t, e, u) {
      t = t._reactInternals;
      var n = Zu(),
        f = On(n);
      (f.payload = e),
        u != null && (f.callback = u),
        (e = Mn(t, f, n)),
        e !== null && (ku(e, t, n), rr(e, t, n));
    },
    enqueueReplaceState: function (t, e, u) {
      t = t._reactInternals;
      var n = Zu(),
        f = On(n);
      (f.tag = 1),
        (f.payload = e),
        u != null && (f.callback = u),
        (e = Mn(t, f, n)),
        e !== null && (ku(e, t, n), rr(e, t, n));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var u = Zu(),
        n = On(u);
      (n.tag = 2),
        e != null && (n.callback = e),
        (e = Mn(t, n, u)),
        e !== null && (ku(e, t, u), rr(e, t, u));
    },
  };
  function A_(t, e, u, n, f, c, g) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(n, c, g)
        : e.prototype && e.prototype.isPureReactComponent
        ? !Wa(u, n) || !Wa(f, c)
        : !0
    );
  }
  function O_(t, e, u, n) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(u, n),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(u, n),
      e.state !== t && mo.enqueueReplaceState(e, e.state, null);
  }
  function vi(t, e) {
    var u = e;
    if ("ref" in e) {
      u = {};
      for (var n in e) n !== "ref" && (u[n] = e[n]);
    }
    if ((t = t.defaultProps)) {
      u === e && (u = m({}, u));
      for (var f in t) u[f] === void 0 && (u[f] = t[f]);
    }
    return u;
  }
  var Wf =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function M_(t) {
    Wf(t);
  }
  function z_(t) {
    console.error(t);
  }
  function R_(t) {
    Wf(t);
  }
  function Pf(t, e) {
    try {
      var u = t.onUncaughtError;
      u(e.value, { componentStack: e.stack });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function B_(t, e, u) {
    try {
      var n = t.onCaughtError;
      n(u.value, {
        componentStack: u.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (f) {
      setTimeout(function () {
        throw f;
      });
    }
  }
  function yo(t, e, u) {
    return (
      (u = On(u)),
      (u.tag = 3),
      (u.payload = { element: null }),
      (u.callback = function () {
        Pf(t, e);
      }),
      u
    );
  }
  function N_(t) {
    return (t = On(t)), (t.tag = 3), t;
  }
  function U_(t, e, u, n) {
    var f = u.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var c = n.value;
      (t.payload = function () {
        return f(c);
      }),
        (t.callback = function () {
          B_(e, u, n);
        });
    }
    var g = u.stateNode;
    g !== null &&
      typeof g.componentDidCatch == "function" &&
      (t.callback = function () {
        B_(e, u, n),
          typeof f != "function" &&
            (Yn === null ? (Yn = new Set([this])) : Yn.add(this));
        var y = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: y !== null ? y : "",
        });
      });
  }
  function qm(t, e, u, n, f) {
    if (
      ((u.flags |= 32768),
      n !== null && typeof n == "object" && typeof n.then == "function")
    ) {
      if (
        ((e = u.alternate),
        e !== null && ur(e, u, f, !0),
        (u = _l.current),
        u !== null)
      ) {
        switch (u.tag) {
          case 13:
            return (
              Ul === null ? Lo() : u.alternate === null && me === 0 && (me = 3),
              (u.flags &= -257),
              (u.flags |= 65536),
              (u.lanes = f),
              n === kc
                ? (u.flags |= 16384)
                : ((e = u.updateQueue),
                  e === null ? (u.updateQueue = new Set([n])) : e.add(n),
                  Qo(t, n, f)),
              !1
            );
          case 22:
            return (
              (u.flags |= 65536),
              n === kc
                ? (u.flags |= 16384)
                : ((e = u.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([n]),
                      }),
                      (u.updateQueue = e))
                    : ((u = e.retryQueue),
                      u === null ? (e.retryQueue = new Set([n])) : u.add(n)),
                  Qo(t, n, f)),
              !1
            );
        }
        throw Error(i(435, u.tag));
      }
      return Qo(t, n, f), Lo(), !1;
    }
    if (Lt)
      return (
        (e = _l.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = f),
            n !== Xc && ((t = Error(i(422), { cause: n })), er(cl(t, u))))
          : (n !== Xc && ((e = Error(i(423), { cause: n })), er(cl(e, u))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (f &= -f),
            (t.lanes |= f),
            (n = cl(n, u)),
            (f = yo(t.stateNode, n, f)),
            $c(t, f),
            me !== 4 && (me = 2)),
        !1
      );
    var c = Error(i(520), { cause: n });
    if (
      ((c = cl(c, u)),
      Sr === null ? (Sr = [c]) : Sr.push(c),
      me !== 4 && (me = 2),
      e === null)
    )
      return !0;
    (n = cl(n, u)), (u = e);
    do {
      switch (u.tag) {
        case 3:
          return (
            (u.flags |= 65536),
            (t = f & -f),
            (u.lanes |= t),
            (t = yo(u.stateNode, n, t)),
            $c(u, t),
            !1
          );
        case 1:
          if (
            ((e = u.type),
            (c = u.stateNode),
            (u.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (c !== null &&
                  typeof c.componentDidCatch == "function" &&
                  (Yn === null || !Yn.has(c)))))
          )
            return (
              (u.flags |= 65536),
              (f &= -f),
              (u.lanes |= f),
              (f = N_(f)),
              U_(f, t, u, n),
              $c(u, f),
              !1
            );
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var w_ = Error(i(461)),
    Le = !1;
  function We(t, e, u, n) {
    e.child = t === null ? x_(e, null, u, n) : sa(e, t.child, u, n);
  }
  function F_(t, e, u, n, f) {
    u = u.render;
    var c = e.ref;
    if ("ref" in n) {
      var g = {};
      for (var y in n) y !== "ref" && (g[y] = n[y]);
    } else g = n;
    return (
      pi(e),
      (n = eo(t, e, u, g, c, f)),
      (y = uo()),
      t !== null && !Le
        ? (lo(t, e, f), cn(t, e, f))
        : (Lt && y && Yc(e), (e.flags |= 1), We(t, e, n, f), e.child)
    );
  }
  function H_(t, e, u, n, f) {
    if (t === null) {
      var c = u.type;
      return typeof c == "function" &&
        !wc(c) &&
        c.defaultProps === void 0 &&
        u.compare === null
        ? ((e.tag = 15), (e.type = c), Y_(t, e, c, n, f))
        : ((t = Rf(u.type, null, n, e, e.mode, f)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((c = t.child), !Ao(t, f))) {
      var g = c.memoizedProps;
      if (
        ((u = u.compare), (u = u !== null ? u : Wa), u(g, n) && t.ref === e.ref)
      )
        return cn(t, e, f);
    }
    return (
      (e.flags |= 1),
      (t = un(c, n)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Y_(t, e, u, n, f) {
    if (t !== null) {
      var c = t.memoizedProps;
      if (Wa(c, n) && t.ref === e.ref)
        if (((Le = !1), (e.pendingProps = n = c), Ao(t, f)))
          (t.flags & 131072) !== 0 && (Le = !0);
        else return (e.lanes = t.lanes), cn(t, e, f);
    }
    return vo(t, e, u, n, f);
  }
  function q_(t, e, u) {
    var n = e.pendingProps,
      f = n.children,
      c = t !== null ? t.memoizedState : null;
    if (n.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((n = c !== null ? c.baseLanes | u : u), t !== null)) {
          for (f = e.child = t.child, c = 0; f !== null; )
            (c = c | f.lanes | f.childLanes), (f = f.sibling);
          e.childLanes = c & ~n;
        } else (e.childLanes = 0), (e.child = null);
        return X_(t, e, n, u);
      }
      if ((u & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Ff(e, c !== null ? c.cachePool : null),
          c !== null ? Yd(e, c) : Pc(),
          C_(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          X_(t, e, c !== null ? c.baseLanes | u : u, u)
        );
    } else
      c !== null
        ? (Ff(e, c.cachePool), Yd(e, c), Bn(), (e.memoizedState = null))
        : (t !== null && Ff(e, null), Pc(), Bn());
    return We(t, e, f, u), e.child;
  }
  function X_(t, e, u, n) {
    var f = Zc();
    return (
      (f = f === null ? null : { parent: Ye._currentValue, pool: f }),
      (e.memoizedState = { baseLanes: u, cachePool: f }),
      t !== null && Ff(e, null),
      Pc(),
      C_(e),
      t !== null && ur(t, e, n, !0),
      null
    );
  }
  function If(t, e) {
    var u = e.ref;
    if (u === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object") throw Error(i(284));
      (t === null || t.ref !== u) && (e.flags |= 4194816);
    }
  }
  function vo(t, e, u, n, f) {
    return (
      pi(e),
      (u = eo(t, e, u, n, void 0, f)),
      (n = uo()),
      t !== null && !Le
        ? (lo(t, e, f), cn(t, e, f))
        : (Lt && n && Yc(e), (e.flags |= 1), We(t, e, u, f), e.child)
    );
  }
  function G_(t, e, u, n, f, c) {
    return (
      pi(e),
      (e.updateQueue = null),
      (u = Xd(e, n, u, f)),
      qd(t),
      (n = uo()),
      t !== null && !Le
        ? (lo(t, e, c), cn(t, e, c))
        : (Lt && n && Yc(e), (e.flags |= 1), We(t, e, u, c), e.child)
    );
  }
  function j_(t, e, u, n, f) {
    if ((pi(e), e.stateNode === null)) {
      var c = Ii,
        g = u.contextType;
      typeof g == "object" && g !== null && (c = lu(g)),
        (c = new u(n, c)),
        (e.memoizedState =
          c.state !== null && c.state !== void 0 ? c.state : null),
        (c.updater = mo),
        (e.stateNode = c),
        (c._reactInternals = e),
        (c = e.stateNode),
        (c.props = n),
        (c.state = e.memoizedState),
        (c.refs = {}),
        Kc(e),
        (g = u.contextType),
        (c.context = typeof g == "object" && g !== null ? lu(g) : Ii),
        (c.state = e.memoizedState),
        (g = u.getDerivedStateFromProps),
        typeof g == "function" && (po(e, u, g, n), (c.state = e.memoizedState)),
        typeof u.getDerivedStateFromProps == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function" ||
          (typeof c.UNSAFE_componentWillMount != "function" &&
            typeof c.componentWillMount != "function") ||
          ((g = c.state),
          typeof c.componentWillMount == "function" && c.componentWillMount(),
          typeof c.UNSAFE_componentWillMount == "function" &&
            c.UNSAFE_componentWillMount(),
          g !== c.state && mo.enqueueReplaceState(c, c.state, null),
          sr(e, n, c, f),
          fr(),
          (c.state = e.memoizedState)),
        typeof c.componentDidMount == "function" && (e.flags |= 4194308),
        (n = !0);
    } else if (t === null) {
      c = e.stateNode;
      var y = e.memoizedProps,
        E = vi(u, y);
      c.props = E;
      var z = c.context,
        j = u.contextType;
      (g = Ii), typeof j == "object" && j !== null && (g = lu(j));
      var Q = u.getDerivedStateFromProps;
      (j =
        typeof Q == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function"),
        (y = e.pendingProps !== y),
        j ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((y || z !== g) && O_(e, c, n, g)),
        (An = !1);
      var B = e.memoizedState;
      (c.state = B),
        sr(e, n, c, f),
        fr(),
        (z = e.memoizedState),
        y || B !== z || An
          ? (typeof Q == "function" && (po(e, u, Q, n), (z = e.memoizedState)),
            (E = An || A_(e, u, E, n, B, z, g))
              ? (j ||
                  (typeof c.UNSAFE_componentWillMount != "function" &&
                    typeof c.componentWillMount != "function") ||
                  (typeof c.componentWillMount == "function" &&
                    c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == "function" &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof c.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = n),
                (e.memoizedState = z)),
            (c.props = n),
            (c.state = z),
            (c.context = g),
            (n = E))
          : (typeof c.componentDidMount == "function" && (e.flags |= 4194308),
            (n = !1));
    } else {
      (c = e.stateNode),
        Jc(t, e),
        (g = e.memoizedProps),
        (j = vi(u, g)),
        (c.props = j),
        (Q = e.pendingProps),
        (B = c.context),
        (z = u.contextType),
        (E = Ii),
        typeof z == "object" && z !== null && (E = lu(z)),
        (y = u.getDerivedStateFromProps),
        (z =
          typeof y == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function") ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((g !== Q || B !== E) && O_(e, c, n, E)),
        (An = !1),
        (B = e.memoizedState),
        (c.state = B),
        sr(e, n, c, f),
        fr();
      var N = e.memoizedState;
      g !== Q ||
      B !== N ||
      An ||
      (t !== null && t.dependencies !== null && Uf(t.dependencies))
        ? (typeof y == "function" && (po(e, u, y, n), (N = e.memoizedState)),
          (j =
            An ||
            A_(e, u, j, n, B, N, E) ||
            (t !== null && t.dependencies !== null && Uf(t.dependencies)))
            ? (z ||
                (typeof c.UNSAFE_componentWillUpdate != "function" &&
                  typeof c.componentWillUpdate != "function") ||
                (typeof c.componentWillUpdate == "function" &&
                  c.componentWillUpdate(n, N, E),
                typeof c.UNSAFE_componentWillUpdate == "function" &&
                  c.UNSAFE_componentWillUpdate(n, N, E)),
              typeof c.componentDidUpdate == "function" && (e.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof c.componentDidUpdate != "function" ||
                (g === t.memoizedProps && B === t.memoizedState) ||
                (e.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != "function" ||
                (g === t.memoizedProps && B === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = n),
              (e.memoizedState = N)),
          (c.props = n),
          (c.state = N),
          (c.context = E),
          (n = j))
        : (typeof c.componentDidUpdate != "function" ||
            (g === t.memoizedProps && B === t.memoizedState) ||
            (e.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != "function" ||
            (g === t.memoizedProps && B === t.memoizedState) ||
            (e.flags |= 1024),
          (n = !1));
    }
    return (
      (c = n),
      If(t, e),
      (n = (e.flags & 128) !== 0),
      c || n
        ? ((c = e.stateNode),
          (u =
            n && typeof u.getDerivedStateFromError != "function"
              ? null
              : c.render()),
          (e.flags |= 1),
          t !== null && n
            ? ((e.child = sa(e, t.child, null, f)),
              (e.child = sa(e, null, u, f)))
            : We(t, e, u, f),
          (e.memoizedState = c.state),
          (t = e.child))
        : (t = cn(t, e, f)),
      t
    );
  }
  function L_(t, e, u, n) {
    return tr(), (e.flags |= 256), We(t, e, u, n), e.child;
  }
  var bo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function So(t) {
    return { baseLanes: t, cachePool: zd() };
  }
  function To(t, e, u) {
    return (t = t !== null ? t.childLanes & ~u : 0), e && (t |= Dl), t;
  }
  function V_(t, e, u) {
    var n = e.pendingProps,
      f = !1,
      c = (e.flags & 128) !== 0,
      g;
    if (
      ((g = c) ||
        (g =
          t !== null && t.memoizedState === null ? !1 : (qe.current & 2) !== 0),
      g && ((f = !0), (e.flags &= -129)),
      (g = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (Lt) {
        if ((f ? Rn(e) : Bn(), Lt)) {
          var y = pe,
            E;
          if ((E = y)) {
            t: {
              for (E = y, y = Nl; E.nodeType !== 8; ) {
                if (!y) {
                  y = null;
                  break t;
                }
                if (((E = Ml(E.nextSibling)), E === null)) {
                  y = null;
                  break t;
                }
              }
              y = E;
            }
            y !== null
              ? ((e.memoizedState = {
                  dehydrated: y,
                  treeContext: hi !== null ? { id: ln, overflow: nn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (E = ju(18, null, null, 0)),
                (E.stateNode = y),
                (E.return = e),
                (e.child = E),
                (Du = e),
                (pe = null),
                (E = !0))
              : (E = !1);
          }
          E || Di(e);
        }
        if (
          ((y = e.memoizedState),
          y !== null && ((y = y.dehydrated), y !== null))
        )
          return ah(y) ? (e.lanes = 32) : (e.lanes = 536870912), null;
        sn(e);
      }
      return (
        (y = n.children),
        (n = n.fallback),
        f
          ? (Bn(),
            (f = e.mode),
            (y = ts({ mode: "hidden", children: y }, f)),
            (n = oi(n, f, u, null)),
            (y.return = e),
            (n.return = e),
            (y.sibling = n),
            (e.child = y),
            (f = e.child),
            (f.memoizedState = So(u)),
            (f.childLanes = To(t, g, u)),
            (e.memoizedState = bo),
            n)
          : (Rn(e), Eo(e, y))
      );
    }
    if (
      ((E = t.memoizedState), E !== null && ((y = E.dehydrated), y !== null))
    ) {
      if (c)
        e.flags & 256
          ? (Rn(e), (e.flags &= -257), (e = xo(t, e, u)))
          : e.memoizedState !== null
          ? (Bn(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (Bn(),
            (f = n.fallback),
            (y = e.mode),
            (n = ts({ mode: "visible", children: n.children }, y)),
            (f = oi(f, y, u, null)),
            (f.flags |= 2),
            (n.return = e),
            (f.return = e),
            (n.sibling = f),
            (e.child = n),
            sa(e, t.child, null, u),
            (n = e.child),
            (n.memoizedState = So(u)),
            (n.childLanes = To(t, g, u)),
            (e.memoizedState = bo),
            (e = f));
      else if ((Rn(e), ah(y))) {
        if (((g = y.nextSibling && y.nextSibling.dataset), g)) var z = g.dgst;
        (g = z),
          (n = Error(i(419))),
          (n.stack = ""),
          (n.digest = g),
          er({ value: n, source: null, stack: null }),
          (e = xo(t, e, u));
      } else if (
        (Le || ur(t, e, u, !1), (g = (u & t.childLanes) !== 0), Le || g)
      ) {
        if (
          ((g = ue),
          g !== null &&
            ((n = u & -u),
            (n = (n & 42) !== 0 ? 1 : Yu(n)),
            (n = (n & (g.suspendedLanes | u)) !== 0 ? 0 : n),
            n !== 0 && n !== E.retryLane))
        )
          throw ((E.retryLane = n), Pi(t, n), ku(g, t, n), w_);
        y.data === "$?" || Lo(), (e = xo(t, e, u));
      } else
        y.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = E.treeContext),
            (pe = Ml(y.nextSibling)),
            (Du = e),
            (Lt = !0),
            (_i = null),
            (Nl = !1),
            t !== null &&
              ((hl[dl++] = ln),
              (hl[dl++] = nn),
              (hl[dl++] = hi),
              (ln = t.id),
              (nn = t.overflow),
              (hi = e)),
            (e = Eo(e, n.children)),
            (e.flags |= 4096));
      return e;
    }
    return f
      ? (Bn(),
        (f = n.fallback),
        (y = e.mode),
        (E = t.child),
        (z = E.sibling),
        (n = un(E, { mode: "hidden", children: n.children })),
        (n.subtreeFlags = E.subtreeFlags & 65011712),
        z !== null ? (f = un(z, f)) : ((f = oi(f, y, u, null)), (f.flags |= 2)),
        (f.return = e),
        (n.return = e),
        (n.sibling = f),
        (e.child = n),
        (n = f),
        (f = e.child),
        (y = t.child.memoizedState),
        y === null
          ? (y = So(u))
          : ((E = y.cachePool),
            E !== null
              ? ((z = Ye._currentValue),
                (E = E.parent !== z ? { parent: z, pool: z } : E))
              : (E = zd()),
            (y = { baseLanes: y.baseLanes | u, cachePool: E })),
        (f.memoizedState = y),
        (f.childLanes = To(t, g, u)),
        (e.memoizedState = bo),
        n)
      : (Rn(e),
        (u = t.child),
        (t = u.sibling),
        (u = un(u, { mode: "visible", children: n.children })),
        (u.return = e),
        (u.sibling = null),
        t !== null &&
          ((g = e.deletions),
          g === null ? ((e.deletions = [t]), (e.flags |= 16)) : g.push(t)),
        (e.child = u),
        (e.memoizedState = null),
        u);
  }
  function Eo(t, e) {
    return (
      (e = ts({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function ts(t, e) {
    return (
      (t = ju(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function xo(t, e, u) {
    return (
      sa(e, t.child, null, u),
      (t = Eo(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Q_(t, e, u) {
    t.lanes |= e;
    var n = t.alternate;
    n !== null && (n.lanes |= e), jc(t.return, e, u);
  }
  function Co(t, e, u, n, f) {
    var c = t.memoizedState;
    c === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: n,
          tail: u,
          tailMode: f,
        })
      : ((c.isBackwards = e),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = n),
        (c.tail = u),
        (c.tailMode = f));
  }
  function Z_(t, e, u) {
    var n = e.pendingProps,
      f = n.revealOrder,
      c = n.tail;
    if ((We(t, e, n.children, u), (n = qe.current), (n & 2) !== 0))
      (n = (n & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Q_(t, u, e);
          else if (t.tag === 19) Q_(t, u, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      n &= 1;
    }
    switch ((P(qe, n), f)) {
      case "forwards":
        for (u = e.child, f = null; u !== null; )
          (t = u.alternate),
            t !== null && $f(t) === null && (f = u),
            (u = u.sibling);
        (u = f),
          u === null
            ? ((f = e.child), (e.child = null))
            : ((f = u.sibling), (u.sibling = null)),
          Co(e, !1, f, u, c);
        break;
      case "backwards":
        for (u = null, f = e.child, e.child = null; f !== null; ) {
          if (((t = f.alternate), t !== null && $f(t) === null)) {
            e.child = f;
            break;
          }
          (t = f.sibling), (f.sibling = u), (u = f), (f = t);
        }
        Co(e, !0, u, null, c);
        break;
      case "together":
        Co(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function cn(t, e, u) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Hn |= e.lanes),
      (u & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((ur(t, e, u, !1), (u & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(i(153));
    if (e.child !== null) {
      for (
        t = e.child, u = un(t, t.pendingProps), e.child = u, u.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (u = u.sibling = un(t, t.pendingProps)),
          (u.return = e);
      u.sibling = null;
    }
    return e.child;
  }
  function Ao(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Uf(t)));
  }
  function Xm(t, e, u) {
    switch (e.tag) {
      case 3:
        St(e, e.stateNode.containerInfo),
          Cn(e, Ye, t.memoizedState.cache),
          tr();
        break;
      case 27:
      case 5:
        nl(e);
        break;
      case 4:
        St(e, e.stateNode.containerInfo);
        break;
      case 10:
        Cn(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var n = e.memoizedState;
        if (n !== null)
          return n.dehydrated !== null
            ? (Rn(e), (e.flags |= 128), null)
            : (u & e.child.childLanes) !== 0
            ? V_(t, e, u)
            : (Rn(e), (t = cn(t, e, u)), t !== null ? t.sibling : null);
        Rn(e);
        break;
      case 19:
        var f = (t.flags & 128) !== 0;
        if (
          ((n = (u & e.childLanes) !== 0),
          n || (ur(t, e, u, !1), (n = (u & e.childLanes) !== 0)),
          f)
        ) {
          if (n) return Z_(t, e, u);
          e.flags |= 128;
        }
        if (
          ((f = e.memoizedState),
          f !== null &&
            ((f.rendering = null), (f.tail = null), (f.lastEffect = null)),
          P(qe, qe.current),
          n)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), q_(t, e, u);
      case 24:
        Cn(e, Ye, t.memoizedState.cache);
    }
    return cn(t, e, u);
  }
  function k_(t, e, u) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Le = !0;
      else {
        if (!Ao(t, u) && (e.flags & 128) === 0) return (Le = !1), Xm(t, e, u);
        Le = (t.flags & 131072) !== 0;
      }
    else (Le = !1), Lt && (e.flags & 1048576) !== 0 && Td(e, Nf, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var n = e.elementType,
            f = n._init;
          if (((n = f(n._payload)), (e.type = n), typeof n == "function"))
            wc(n)
              ? ((t = vi(n, t)), (e.tag = 1), (e = j_(null, e, n, t, u)))
              : ((e.tag = 0), (e = vo(null, e, n, t, u)));
          else {
            if (n != null) {
              if (((f = n.$$typeof), f === U)) {
                (e.tag = 11), (e = F_(null, e, n, t, u));
                break t;
              } else if (f === Y) {
                (e.tag = 14), (e = H_(null, e, n, t, u));
                break t;
              }
            }
            throw ((e = mt(n) || n), Error(i(306, e, "")));
          }
        }
        return e;
      case 0:
        return vo(t, e, e.type, e.pendingProps, u);
      case 1:
        return (n = e.type), (f = vi(n, e.pendingProps)), j_(t, e, n, f, u);
      case 3:
        t: {
          if ((St(e, e.stateNode.containerInfo), t === null))
            throw Error(i(387));
          n = e.pendingProps;
          var c = e.memoizedState;
          (f = c.element), Jc(t, e), sr(e, n, null, u);
          var g = e.memoizedState;
          if (
            ((n = g.cache),
            Cn(e, Ye, n),
            n !== c.cache && Lc(e, [Ye], u, !0),
            fr(),
            (n = g.element),
            c.isDehydrated)
          )
            if (
              ((c = { element: n, isDehydrated: !1, cache: g.cache }),
              (e.updateQueue.baseState = c),
              (e.memoizedState = c),
              e.flags & 256)
            ) {
              e = L_(t, e, n, u);
              break t;
            } else if (n !== f) {
              (f = cl(Error(i(424)), e)), er(f), (e = L_(t, e, n, u));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                pe = Ml(t.firstChild),
                  Du = e,
                  Lt = !0,
                  _i = null,
                  Nl = !0,
                  u = x_(e, null, n, u),
                  e.child = u;
                u;

              )
                (u.flags = (u.flags & -3) | 4096), (u = u.sibling);
            }
          else {
            if ((tr(), n === f)) {
              e = cn(t, e, u);
              break t;
            }
            We(t, e, n, u);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          If(t, e),
          t === null
            ? (u = WD(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = u)
              : Lt ||
                ((u = e.type),
                (t = e.pendingProps),
                (n = _s(it.current).createElement(u)),
                (n[W] = e),
                (n[rt] = t),
                Ie(n, u, t),
                Xt(n),
                (e.stateNode = n))
            : (e.memoizedState = WD(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          nl(e),
          t === null &&
            Lt &&
            ((n = e.stateNode = KD(e.type, e.pendingProps, it.current)),
            (Du = e),
            (Nl = !0),
            (f = pe),
            Gn(e.type) ? ((rh = f), (pe = Ml(n.firstChild))) : (pe = f)),
          We(t, e, e.pendingProps.children, u),
          If(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            Lt &&
            ((f = n = pe) &&
              ((n = _y(n, e.type, e.pendingProps, Nl)),
              n !== null
                ? ((e.stateNode = n),
                  (Du = e),
                  (pe = Ml(n.firstChild)),
                  (Nl = !1),
                  (f = !0))
                : (f = !1)),
            f || Di(e)),
          nl(e),
          (f = e.type),
          (c = e.pendingProps),
          (g = t !== null ? t.memoizedProps : null),
          (n = c.children),
          lh(f, c) ? (n = null) : g !== null && lh(f, g) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((f = eo(t, e, Bm, null, null, u)), (Rr._currentValue = f)),
          If(t, e),
          We(t, e, n, u),
          e.child
        );
      case 6:
        return (
          t === null &&
            Lt &&
            ((t = u = pe) &&
              ((u = Dy(u, e.pendingProps, Nl)),
              u !== null
                ? ((e.stateNode = u), (Du = e), (pe = null), (t = !0))
                : (t = !1)),
            t || Di(e)),
          null
        );
      case 13:
        return V_(t, e, u);
      case 4:
        return (
          St(e, e.stateNode.containerInfo),
          (n = e.pendingProps),
          t === null ? (e.child = sa(e, null, n, u)) : We(t, e, n, u),
          e.child
        );
      case 11:
        return F_(t, e, e.type, e.pendingProps, u);
      case 7:
        return We(t, e, e.pendingProps, u), e.child;
      case 8:
        return We(t, e, e.pendingProps.children, u), e.child;
      case 12:
        return We(t, e, e.pendingProps.children, u), e.child;
      case 10:
        return (
          (n = e.pendingProps),
          Cn(e, e.type, n.value),
          We(t, e, n.children, u),
          e.child
        );
      case 9:
        return (
          (f = e.type._context),
          (n = e.pendingProps.children),
          pi(e),
          (f = lu(f)),
          (n = n(f)),
          (e.flags |= 1),
          We(t, e, n, u),
          e.child
        );
      case 14:
        return H_(t, e, e.type, e.pendingProps, u);
      case 15:
        return Y_(t, e, e.type, e.pendingProps, u);
      case 19:
        return Z_(t, e, u);
      case 31:
        return (
          (n = e.pendingProps),
          (u = e.mode),
          (n = { mode: n.mode, children: n.children }),
          t === null
            ? ((u = ts(n, u)),
              (u.ref = e.ref),
              (e.child = u),
              (u.return = e),
              (e = u))
            : ((u = un(t.child, n)),
              (u.ref = e.ref),
              (e.child = u),
              (u.return = e),
              (e = u)),
          e
        );
      case 22:
        return q_(t, e, u);
      case 24:
        return (
          pi(e),
          (n = lu(Ye)),
          t === null
            ? ((f = Zc()),
              f === null &&
                ((f = ue),
                (c = Vc()),
                (f.pooledCache = c),
                c.refCount++,
                c !== null && (f.pooledCacheLanes |= u),
                (f = c)),
              (e.memoizedState = { parent: n, cache: f }),
              Kc(e),
              Cn(e, Ye, f))
            : ((t.lanes & u) !== 0 && (Jc(t, e), sr(e, null, null, u), fr()),
              (f = t.memoizedState),
              (c = e.memoizedState),
              f.parent !== n
                ? ((f = { parent: n, cache: n }),
                  (e.memoizedState = f),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = f),
                  Cn(e, Ye, n))
                : ((n = c.cache),
                  Cn(e, Ye, n),
                  n !== f.cache && Lc(e, [Ye], u, !0))),
          We(t, e, e.pendingProps.children, u),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(i(156, e.tag));
  }
  function on(t) {
    t.flags |= 4;
  }
  function K_(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !ug(e))) {
      if (
        ((e = _l.current),
        e !== null &&
          ((qt & 4194048) === qt
            ? Ul !== null
            : ((qt & 62914560) !== qt && (qt & 536870912) === 0) || e !== Ul))
      )
        throw ((ar = kc), Rd);
      t.flags |= 8192;
    }
  }
  function es(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Rl() : 536870912), (t.lanes |= e), (da |= e));
  }
  function gr(t, e) {
    if (!Lt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var u = null; e !== null; )
            e.alternate !== null && (u = e), (e = e.sibling);
          u === null ? (t.tail = null) : (u.sibling = null);
          break;
        case "collapsed":
          u = t.tail;
          for (var n = null; u !== null; )
            u.alternate !== null && (n = u), (u = u.sibling);
          n === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (n.sibling = null);
      }
  }
  function he(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      u = 0,
      n = 0;
    if (e)
      for (var f = t.child; f !== null; )
        (u |= f.lanes | f.childLanes),
          (n |= f.subtreeFlags & 65011712),
          (n |= f.flags & 65011712),
          (f.return = t),
          (f = f.sibling);
    else
      for (f = t.child; f !== null; )
        (u |= f.lanes | f.childLanes),
          (n |= f.subtreeFlags),
          (n |= f.flags),
          (f.return = t),
          (f = f.sibling);
    return (t.subtreeFlags |= n), (t.childLanes = u), e;
  }
  function Gm(t, e, u) {
    var n = e.pendingProps;
    switch ((qc(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return he(e), null;
      case 1:
        return he(e), null;
      case 3:
        return (
          (u = e.stateNode),
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          rn(Ye),
          ne(),
          u.pendingContext &&
            ((u.context = u.pendingContext), (u.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ia(e)
              ? on(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Cd())),
          he(e),
          null
        );
      case 26:
        return (
          (u = e.memoizedState),
          t === null
            ? (on(e),
              u !== null ? (he(e), K_(e, u)) : (he(e), (e.flags &= -16777217)))
            : u
            ? u !== t.memoizedState
              ? (on(e), he(e), K_(e, u))
              : (he(e), (e.flags &= -16777217))
            : (t.memoizedProps !== n && on(e), he(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        Ae(e), (u = it.current);
        var f = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== n && on(e);
        else {
          if (!n) {
            if (e.stateNode === null) throw Error(i(166));
            return he(e), null;
          }
          (t = ut.current),
            Ia(e) ? Ed(e) : ((t = KD(f, n, u)), (e.stateNode = t), on(e));
        }
        return he(e), null;
      case 5:
        if ((Ae(e), (u = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== n && on(e);
        else {
          if (!n) {
            if (e.stateNode === null) throw Error(i(166));
            return he(e), null;
          }
          if (((t = ut.current), Ia(e))) Ed(e);
          else {
            switch (((f = _s(it.current)), t)) {
              case 1:
                t = f.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                t = f.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    t = f.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    t = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    (t = f.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof n.is == "string"
                        ? f.createElement("select", { is: n.is })
                        : f.createElement("select")),
                      n.multiple
                        ? (t.multiple = !0)
                        : n.size && (t.size = n.size);
                    break;
                  default:
                    t =
                      typeof n.is == "string"
                        ? f.createElement(u, { is: n.is })
                        : f.createElement(u);
                }
            }
            (t[W] = e), (t[rt] = n);
            t: for (f = e.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) t.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                (f.child.return = f), (f = f.child);
                continue;
              }
              if (f === e) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e) break t;
                f = f.return;
              }
              (f.sibling.return = f.return), (f = f.sibling);
            }
            e.stateNode = t;
            t: switch ((Ie(t, u, n), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!n.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && on(e);
          }
        }
        return he(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== n && on(e);
        else {
          if (typeof n != "string" && e.stateNode === null) throw Error(i(166));
          if (((t = it.current), Ia(e))) {
            if (
              ((t = e.stateNode),
              (u = e.memoizedProps),
              (n = null),
              (f = Du),
              f !== null)
            )
              switch (f.tag) {
                case 27:
                case 5:
                  n = f.memoizedProps;
              }
            (t[W] = e),
              (t = !!(
                t.nodeValue === u ||
                (n !== null && n.suppressHydrationWarning === !0) ||
                GD(t.nodeValue, u)
              )),
              t || Di(e);
          } else (t = _s(t).createTextNode(n)), (t[W] = e), (e.stateNode = t);
        }
        return he(e), null;
      case 13:
        if (
          ((n = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((f = Ia(e)), n !== null && n.dehydrated !== null)) {
            if (t === null) {
              if (!f) throw Error(i(318));
              if (
                ((f = e.memoizedState),
                (f = f !== null ? f.dehydrated : null),
                !f)
              )
                throw Error(i(317));
              f[W] = e;
            } else
              tr(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            he(e), (f = !1);
          } else
            (f = Cd()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = f),
              (f = !0);
          if (!f) return e.flags & 256 ? (sn(e), e) : (sn(e), null);
        }
        if ((sn(e), (e.flags & 128) !== 0)) return (e.lanes = u), e;
        if (
          ((u = n !== null), (t = t !== null && t.memoizedState !== null), u)
        ) {
          (n = e.child),
            (f = null),
            n.alternate !== null &&
              n.alternate.memoizedState !== null &&
              n.alternate.memoizedState.cachePool !== null &&
              (f = n.alternate.memoizedState.cachePool.pool);
          var c = null;
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (c = n.memoizedState.cachePool.pool),
            c !== f && (n.flags |= 2048);
        }
        return (
          u !== t && u && (e.child.flags |= 8192),
          es(e, e.updateQueue),
          he(e),
          null
        );
      case 4:
        return ne(), t === null && Po(e.stateNode.containerInfo), he(e), null;
      case 10:
        return rn(e.type), he(e), null;
      case 19:
        if ((I(qe), (f = e.memoizedState), f === null)) return he(e), null;
        if (((n = (e.flags & 128) !== 0), (c = f.rendering), c === null))
          if (n) gr(f, !1);
          else {
            if (me !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((c = $f(t)), c !== null)) {
                  for (
                    e.flags |= 128,
                      gr(f, !1),
                      t = c.updateQueue,
                      e.updateQueue = t,
                      es(e, t),
                      e.subtreeFlags = 0,
                      t = u,
                      u = e.child;
                    u !== null;

                  )
                    Sd(u, t), (u = u.sibling);
                  return P(qe, (qe.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            f.tail !== null &&
              w() > ns &&
              ((e.flags |= 128), (n = !0), gr(f, !1), (e.lanes = 4194304));
          }
        else {
          if (!n)
            if (((t = $f(c)), t !== null)) {
              if (
                ((e.flags |= 128),
                (n = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                es(e, t),
                gr(f, !0),
                f.tail === null &&
                  f.tailMode === "hidden" &&
                  !c.alternate &&
                  !Lt)
              )
                return he(e), null;
            } else
              2 * w() - f.renderingStartTime > ns &&
                u !== 536870912 &&
                ((e.flags |= 128), (n = !0), gr(f, !1), (e.lanes = 4194304));
          f.isBackwards
            ? ((c.sibling = e.child), (e.child = c))
            : ((t = f.last),
              t !== null ? (t.sibling = c) : (e.child = c),
              (f.last = c));
        }
        return f.tail !== null
          ? ((e = f.tail),
            (f.rendering = e),
            (f.tail = e.sibling),
            (f.renderingStartTime = w()),
            (e.sibling = null),
            (t = qe.current),
            P(qe, n ? (t & 1) | 2 : t & 1),
            e)
          : (he(e), null);
      case 22:
      case 23:
        return (
          sn(e),
          Ic(),
          (n = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== n && (e.flags |= 8192)
            : n && (e.flags |= 8192),
          n
            ? (u & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (he(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : he(e),
          (u = e.updateQueue),
          u !== null && es(e, u.retryQueue),
          (u = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (u = t.memoizedState.cachePool.pool),
          (n = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          n !== u && (e.flags |= 2048),
          t !== null && I(mi),
          null
        );
      case 24:
        return (
          (u = null),
          t !== null && (u = t.memoizedState.cache),
          e.memoizedState.cache !== u && (e.flags |= 2048),
          rn(Ye),
          he(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, e.tag));
  }
  function jm(t, e) {
    switch ((qc(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          rn(Ye),
          ne(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Ae(e), null;
      case 13:
        if (
          (sn(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(i(340));
          tr();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return I(qe), null;
      case 4:
        return ne(), null;
      case 10:
        return rn(e.type), null;
      case 22:
      case 23:
        return (
          sn(e),
          Ic(),
          t !== null && I(mi),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return rn(Ye), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function J_(t, e) {
    switch ((qc(e), e.tag)) {
      case 3:
        rn(Ye), ne();
        break;
      case 26:
      case 27:
      case 5:
        Ae(e);
        break;
      case 4:
        ne();
        break;
      case 13:
        sn(e);
        break;
      case 19:
        I(qe);
        break;
      case 10:
        rn(e.type);
        break;
      case 22:
      case 23:
        sn(e), Ic(), t !== null && I(mi);
        break;
      case 24:
        rn(Ye);
    }
  }
  function pr(t, e) {
    try {
      var u = e.updateQueue,
        n = u !== null ? u.lastEffect : null;
      if (n !== null) {
        var f = n.next;
        u = f;
        do {
          if ((u.tag & t) === t) {
            n = void 0;
            var c = u.create,
              g = u.inst;
            (n = c()), (g.destroy = n);
          }
          u = u.next;
        } while (u !== f);
      }
    } catch (y) {
      Wt(e, e.return, y);
    }
  }
  function Nn(t, e, u) {
    try {
      var n = e.updateQueue,
        f = n !== null ? n.lastEffect : null;
      if (f !== null) {
        var c = f.next;
        n = c;
        do {
          if ((n.tag & t) === t) {
            var g = n.inst,
              y = g.destroy;
            if (y !== void 0) {
              (g.destroy = void 0), (f = e);
              var E = u,
                z = y;
              try {
                z();
              } catch (j) {
                Wt(f, E, j);
              }
            }
          }
          n = n.next;
        } while (n !== c);
      }
    } catch (j) {
      Wt(e, e.return, j);
    }
  }
  function $_(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var u = t.stateNode;
      try {
        Hd(e, u);
      } catch (n) {
        Wt(t, t.return, n);
      }
    }
  }
  function W_(t, e, u) {
    (u.props = vi(t.type, t.memoizedProps)), (u.state = t.memoizedState);
    try {
      u.componentWillUnmount();
    } catch (n) {
      Wt(t, e, n);
    }
  }
  function mr(t, e) {
    try {
      var u = t.ref;
      if (u !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var n = t.stateNode;
            break;
          case 30:
            n = t.stateNode;
            break;
          default:
            n = t.stateNode;
        }
        typeof u == "function" ? (t.refCleanup = u(n)) : (u.current = n);
      }
    } catch (f) {
      Wt(t, e, f);
    }
  }
  function wl(t, e) {
    var u = t.ref,
      n = t.refCleanup;
    if (u !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (f) {
          Wt(t, e, f);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (f) {
          Wt(t, e, f);
        }
      else u.current = null;
  }
  function P_(t) {
    var e = t.type,
      u = t.memoizedProps,
      n = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && n.focus();
          break t;
        case "img":
          u.src ? (n.src = u.src) : u.srcSet && (n.srcset = u.srcSet);
      }
    } catch (f) {
      Wt(t, t.return, f);
    }
  }
  function Oo(t, e, u) {
    try {
      var n = t.stateNode;
      sy(n, t.type, u, e), (n[rt] = e);
    } catch (f) {
      Wt(t, t.return, f);
    }
  }
  function I_(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Gn(t.type)) ||
      t.tag === 4
    );
  }
  function Mo(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || I_(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && Gn(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function zo(t, e, u) {
    var n = t.tag;
    if (n === 5 || n === 6)
      (t = t.stateNode),
        e
          ? (u.nodeType === 9
              ? u.body
              : u.nodeName === "HTML"
              ? u.ownerDocument.body
              : u
            ).insertBefore(t, e)
          : ((e =
              u.nodeType === 9
                ? u.body
                : u.nodeName === "HTML"
                ? u.ownerDocument.body
                : u),
            e.appendChild(t),
            (u = u._reactRootContainer),
            u != null || e.onclick !== null || (e.onclick = ds));
    else if (
      n !== 4 &&
      (n === 27 && Gn(t.type) && ((u = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (zo(t, e, u), t = t.sibling; t !== null; )
        zo(t, e, u), (t = t.sibling);
  }
  function us(t, e, u) {
    var n = t.tag;
    if (n === 5 || n === 6)
      (t = t.stateNode), e ? u.insertBefore(t, e) : u.appendChild(t);
    else if (
      n !== 4 &&
      (n === 27 && Gn(t.type) && (u = t.stateNode), (t = t.child), t !== null)
    )
      for (us(t, e, u), t = t.sibling; t !== null; )
        us(t, e, u), (t = t.sibling);
  }
  function tD(t) {
    var e = t.stateNode,
      u = t.memoizedProps;
    try {
      for (var n = t.type, f = e.attributes; f.length; )
        e.removeAttributeNode(f[0]);
      Ie(e, n, u), (e[W] = t), (e[rt] = u);
    } catch (c) {
      Wt(t, t.return, c);
    }
  }
  var hn = !1,
    Ee = !1,
    Ro = !1,
    eD = typeof WeakSet == "function" ? WeakSet : Set,
    Ve = null;
  function Lm(t, e) {
    if (((t = t.containerInfo), (eh = vs), (t = hd(t)), Oc(t))) {
      if ("selectionStart" in t)
        var u = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          u = ((u = t.ownerDocument) && u.defaultView) || window;
          var n = u.getSelection && u.getSelection();
          if (n && n.rangeCount !== 0) {
            u = n.anchorNode;
            var f = n.anchorOffset,
              c = n.focusNode;
            n = n.focusOffset;
            try {
              u.nodeType, c.nodeType;
            } catch {
              u = null;
              break t;
            }
            var g = 0,
              y = -1,
              E = -1,
              z = 0,
              j = 0,
              Q = t,
              B = null;
            e: for (;;) {
              for (
                var N;
                Q !== u || (f !== 0 && Q.nodeType !== 3) || (y = g + f),
                  Q !== c || (n !== 0 && Q.nodeType !== 3) || (E = g + n),
                  Q.nodeType === 3 && (g += Q.nodeValue.length),
                  (N = Q.firstChild) !== null;

              )
                (B = Q), (Q = N);
              for (;;) {
                if (Q === t) break e;
                if (
                  (B === u && ++z === f && (y = g),
                  B === c && ++j === n && (E = g),
                  (N = Q.nextSibling) !== null)
                )
                  break;
                (Q = B), (B = Q.parentNode);
              }
              Q = N;
            }
            u = y === -1 || E === -1 ? null : { start: y, end: E };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (
      uh = { focusedElem: t, selectionRange: u }, vs = !1, Ve = e;
      Ve !== null;

    )
      if (
        ((e = Ve), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = e), (Ve = t);
      else
        for (; Ve !== null; ) {
          switch (((e = Ve), (c = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && c !== null) {
                (t = void 0),
                  (u = e),
                  (f = c.memoizedProps),
                  (c = c.memoizedState),
                  (n = u.stateNode);
                try {
                  var gt = vi(u.type, f, u.elementType === u.type);
                  (t = n.getSnapshotBeforeUpdate(gt, c)),
                    (n.__reactInternalSnapshotBeforeUpdate = t);
                } catch (dt) {
                  Wt(u, u.return, dt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (u = t.nodeType), u === 9)
                )
                  ih(t);
                else if (u === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ih(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(i(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (Ve = t);
            break;
          }
          Ve = e.return;
        }
  }
  function uD(t, e, u) {
    var n = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Un(t, u), n & 4 && pr(5, u);
        break;
      case 1:
        if ((Un(t, u), n & 4))
          if (((t = u.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (g) {
              Wt(u, u.return, g);
            }
          else {
            var f = vi(u.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(f, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (g) {
              Wt(u, u.return, g);
            }
          }
        n & 64 && $_(u), n & 512 && mr(u, u.return);
        break;
      case 3:
        if ((Un(t, u), n & 64 && ((t = u.updateQueue), t !== null))) {
          if (((e = null), u.child !== null))
            switch (u.child.tag) {
              case 27:
              case 5:
                e = u.child.stateNode;
                break;
              case 1:
                e = u.child.stateNode;
            }
          try {
            Hd(t, e);
          } catch (g) {
            Wt(u, u.return, g);
          }
        }
        break;
      case 27:
        e === null && n & 4 && tD(u);
      case 26:
      case 5:
        Un(t, u), e === null && n & 4 && P_(u), n & 512 && mr(u, u.return);
        break;
      case 12:
        Un(t, u);
        break;
      case 13:
        Un(t, u),
          n & 4 && iD(t, u),
          n & 64 &&
            ((t = u.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((u = Pm.bind(null, u)), gy(t, u))));
        break;
      case 22:
        if (((n = u.memoizedState !== null || hn), !n)) {
          (e = (e !== null && e.memoizedState !== null) || Ee), (f = hn);
          var c = Ee;
          (hn = n),
            (Ee = e) && !c ? wn(t, u, (u.subtreeFlags & 8772) !== 0) : Un(t, u),
            (hn = f),
            (Ee = c);
        }
        break;
      case 30:
        break;
      default:
        Un(t, u);
    }
  }
  function lD(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), lD(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && ee(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var se = null,
    Mu = !1;
  function dn(t, e, u) {
    for (u = u.child; u !== null; ) nD(t, e, u), (u = u.sibling);
  }
  function nD(t, e, u) {
    if (wt && typeof wt.onCommitFiberUnmount == "function")
      try {
        wt.onCommitFiberUnmount(Tu, u);
      } catch {}
    switch (u.tag) {
      case 26:
        Ee || wl(u, e),
          dn(t, e, u),
          u.memoizedState
            ? u.memoizedState.count--
            : u.stateNode && ((u = u.stateNode), u.parentNode.removeChild(u));
        break;
      case 27:
        Ee || wl(u, e);
        var n = se,
          f = Mu;
        Gn(u.type) && ((se = u.stateNode), (Mu = !1)),
          dn(t, e, u),
          Ar(u.stateNode),
          (se = n),
          (Mu = f);
        break;
      case 5:
        Ee || wl(u, e);
      case 6:
        if (
          ((n = se),
          (f = Mu),
          (se = null),
          dn(t, e, u),
          (se = n),
          (Mu = f),
          se !== null)
        )
          if (Mu)
            try {
              (se.nodeType === 9
                ? se.body
                : se.nodeName === "HTML"
                ? se.ownerDocument.body
                : se
              ).removeChild(u.stateNode);
            } catch (c) {
              Wt(u, e, c);
            }
          else
            try {
              se.removeChild(u.stateNode);
            } catch (c) {
              Wt(u, e, c);
            }
        break;
      case 18:
        se !== null &&
          (Mu
            ? ((t = se),
              ZD(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                u.stateNode
              ),
              wr(t))
            : ZD(se, u.stateNode));
        break;
      case 4:
        (n = se),
          (f = Mu),
          (se = u.stateNode.containerInfo),
          (Mu = !0),
          dn(t, e, u),
          (se = n),
          (Mu = f);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ee || Nn(2, u, e), Ee || Nn(4, u, e), dn(t, e, u);
        break;
      case 1:
        Ee ||
          (wl(u, e),
          (n = u.stateNode),
          typeof n.componentWillUnmount == "function" && W_(u, e, n)),
          dn(t, e, u);
        break;
      case 21:
        dn(t, e, u);
        break;
      case 22:
        (Ee = (n = Ee) || u.memoizedState !== null), dn(t, e, u), (Ee = n);
        break;
      default:
        dn(t, e, u);
    }
  }
  function iD(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        wr(t);
      } catch (u) {
        Wt(e, e.return, u);
      }
  }
  function Vm(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new eD()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new eD()),
          e
        );
      default:
        throw Error(i(435, t.tag));
    }
  }
  function Bo(t, e) {
    var u = Vm(t);
    e.forEach(function (n) {
      var f = Im.bind(null, t, n);
      u.has(n) || (u.add(n), n.then(f, f));
    });
  }
  function Lu(t, e) {
    var u = e.deletions;
    if (u !== null)
      for (var n = 0; n < u.length; n++) {
        var f = u[n],
          c = t,
          g = e,
          y = g;
        t: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (Gn(y.type)) {
                (se = y.stateNode), (Mu = !1);
                break t;
              }
              break;
            case 5:
              (se = y.stateNode), (Mu = !1);
              break t;
            case 3:
            case 4:
              (se = y.stateNode.containerInfo), (Mu = !0);
              break t;
          }
          y = y.return;
        }
        if (se === null) throw Error(i(160));
        nD(c, g, f),
          (se = null),
          (Mu = !1),
          (c = f.alternate),
          c !== null && (c.return = null),
          (f.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) aD(e, t), (e = e.sibling);
  }
  var Ol = null;
  function aD(t, e) {
    var u = t.alternate,
      n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Lu(e, t),
          Vu(t),
          n & 4 && (Nn(3, t, t.return), pr(3, t), Nn(5, t, t.return));
        break;
      case 1:
        Lu(e, t),
          Vu(t),
          n & 512 && (Ee || u === null || wl(u, u.return)),
          n & 64 &&
            hn &&
            ((t = t.updateQueue),
            t !== null &&
              ((n = t.callbacks),
              n !== null &&
                ((u = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = u === null ? n : u.concat(n)))));
        break;
      case 26:
        var f = Ol;
        if (
          (Lu(e, t),
          Vu(t),
          n & 512 && (Ee || u === null || wl(u, u.return)),
          n & 4)
        ) {
          var c = u !== null ? u.memoizedState : null;
          if (((n = t.memoizedState), u === null))
            if (n === null)
              if (t.stateNode === null) {
                t: {
                  (n = t.type),
                    (u = t.memoizedProps),
                    (f = f.ownerDocument || f);
                  e: switch (n) {
                    case "title":
                      (c = f.getElementsByTagName("title")[0]),
                        (!c ||
                          c[ge] ||
                          c[W] ||
                          c.namespaceURI === "http://www.w3.org/2000/svg" ||
                          c.hasAttribute("itemprop")) &&
                          ((c = f.createElement(n)),
                          f.head.insertBefore(
                            c,
                            f.querySelector("head > title")
                          )),
                        Ie(c, n, u),
                        (c[W] = t),
                        Xt(c),
                        (n = c);
                      break t;
                    case "link":
                      var g = tg("link", "href", f).get(n + (u.href || ""));
                      if (g) {
                        for (var y = 0; y < g.length; y++)
                          if (
                            ((c = g[y]),
                            c.getAttribute("href") ===
                              (u.href == null || u.href === ""
                                ? null
                                : u.href) &&
                              c.getAttribute("rel") ===
                                (u.rel == null ? null : u.rel) &&
                              c.getAttribute("title") ===
                                (u.title == null ? null : u.title) &&
                              c.getAttribute("crossorigin") ===
                                (u.crossOrigin == null ? null : u.crossOrigin))
                          ) {
                            g.splice(y, 1);
                            break e;
                          }
                      }
                      (c = f.createElement(n)),
                        Ie(c, n, u),
                        f.head.appendChild(c);
                      break;
                    case "meta":
                      if (
                        (g = tg("meta", "content", f).get(
                          n + (u.content || "")
                        ))
                      ) {
                        for (y = 0; y < g.length; y++)
                          if (
                            ((c = g[y]),
                            c.getAttribute("content") ===
                              (u.content == null ? null : "" + u.content) &&
                              c.getAttribute("name") ===
                                (u.name == null ? null : u.name) &&
                              c.getAttribute("property") ===
                                (u.property == null ? null : u.property) &&
                              c.getAttribute("http-equiv") ===
                                (u.httpEquiv == null ? null : u.httpEquiv) &&
                              c.getAttribute("charset") ===
                                (u.charSet == null ? null : u.charSet))
                          ) {
                            g.splice(y, 1);
                            break e;
                          }
                      }
                      (c = f.createElement(n)),
                        Ie(c, n, u),
                        f.head.appendChild(c);
                      break;
                    default:
                      throw Error(i(468, n));
                  }
                  (c[W] = t), Xt(c), (n = c);
                }
                t.stateNode = n;
              } else eg(f, t.type, t.stateNode);
            else t.stateNode = ID(f, n, t.memoizedProps);
          else
            c !== n
              ? (c === null
                  ? u.stateNode !== null &&
                    ((u = u.stateNode), u.parentNode.removeChild(u))
                  : c.count--,
                n === null
                  ? eg(f, t.type, t.stateNode)
                  : ID(f, n, t.memoizedProps))
              : n === null &&
                t.stateNode !== null &&
                Oo(t, t.memoizedProps, u.memoizedProps);
        }
        break;
      case 27:
        Lu(e, t),
          Vu(t),
          n & 512 && (Ee || u === null || wl(u, u.return)),
          u !== null && n & 4 && Oo(t, t.memoizedProps, u.memoizedProps);
        break;
      case 5:
        if (
          (Lu(e, t),
          Vu(t),
          n & 512 && (Ee || u === null || wl(u, u.return)),
          t.flags & 32)
        ) {
          f = t.stateNode;
          try {
            Qi(f, "");
          } catch (N) {
            Wt(t, t.return, N);
          }
        }
        n & 4 &&
          t.stateNode != null &&
          ((f = t.memoizedProps), Oo(t, f, u !== null ? u.memoizedProps : f)),
          n & 1024 && (Ro = !0);
        break;
      case 6:
        if ((Lu(e, t), Vu(t), n & 4)) {
          if (t.stateNode === null) throw Error(i(162));
          (n = t.memoizedProps), (u = t.stateNode);
          try {
            u.nodeValue = n;
          } catch (N) {
            Wt(t, t.return, N);
          }
        }
        break;
      case 3:
        if (
          ((ps = null),
          (f = Ol),
          (Ol = Ds(e.containerInfo)),
          Lu(e, t),
          (Ol = f),
          Vu(t),
          n & 4 && u !== null && u.memoizedState.isDehydrated)
        )
          try {
            wr(e.containerInfo);
          } catch (N) {
            Wt(t, t.return, N);
          }
        Ro && ((Ro = !1), rD(t));
        break;
      case 4:
        (n = Ol),
          (Ol = Ds(t.stateNode.containerInfo)),
          Lu(e, t),
          Vu(t),
          (Ol = n);
        break;
      case 12:
        Lu(e, t), Vu(t);
        break;
      case 13:
        Lu(e, t),
          Vu(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (u !== null && u.memoizedState !== null) &&
            (Yo = w()),
          n & 4 &&
            ((n = t.updateQueue),
            n !== null && ((t.updateQueue = null), Bo(t, n)));
        break;
      case 22:
        f = t.memoizedState !== null;
        var E = u !== null && u.memoizedState !== null,
          z = hn,
          j = Ee;
        if (
          ((hn = z || f),
          (Ee = j || E),
          Lu(e, t),
          (Ee = j),
          (hn = z),
          Vu(t),
          n & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = f ? e._visibility & -2 : e._visibility | 1,
              f && (u === null || E || hn || Ee || bi(t)),
              u = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (u === null) {
                E = u = e;
                try {
                  if (((c = E.stateNode), f))
                    (g = c.style),
                      typeof g.setProperty == "function"
                        ? g.setProperty("display", "none", "important")
                        : (g.display = "none");
                  else {
                    y = E.stateNode;
                    var Q = E.memoizedProps.style,
                      B =
                        Q != null && Q.hasOwnProperty("display")
                          ? Q.display
                          : null;
                    y.style.display =
                      B == null || typeof B == "boolean" ? "" : ("" + B).trim();
                  }
                } catch (N) {
                  Wt(E, E.return, N);
                }
              }
            } else if (e.tag === 6) {
              if (u === null) {
                E = e;
                try {
                  E.stateNode.nodeValue = f ? "" : E.memoizedProps;
                } catch (N) {
                  Wt(E, E.return, N);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              u === e && (u = null), (e = e.return);
            }
            u === e && (u = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        n & 4 &&
          ((n = t.updateQueue),
          n !== null &&
            ((u = n.retryQueue),
            u !== null && ((n.retryQueue = null), Bo(t, u))));
        break;
      case 19:
        Lu(e, t),
          Vu(t),
          n & 4 &&
            ((n = t.updateQueue),
            n !== null && ((t.updateQueue = null), Bo(t, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Lu(e, t), Vu(t);
    }
  }
  function Vu(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var u, n = t.return; n !== null; ) {
          if (I_(n)) {
            u = n;
            break;
          }
          n = n.return;
        }
        if (u == null) throw Error(i(160));
        switch (u.tag) {
          case 27:
            var f = u.stateNode,
              c = Mo(t);
            us(t, c, f);
            break;
          case 5:
            var g = u.stateNode;
            u.flags & 32 && (Qi(g, ""), (u.flags &= -33));
            var y = Mo(t);
            us(t, y, g);
            break;
          case 3:
          case 4:
            var E = u.stateNode.containerInfo,
              z = Mo(t);
            zo(t, z, E);
            break;
          default:
            throw Error(i(161));
        }
      } catch (j) {
        Wt(t, t.return, j);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function rD(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        rD(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function Un(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) uD(t, e.alternate, e), (e = e.sibling);
  }
  function bi(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Nn(4, e, e.return), bi(e);
          break;
        case 1:
          wl(e, e.return);
          var u = e.stateNode;
          typeof u.componentWillUnmount == "function" && W_(e, e.return, u),
            bi(e);
          break;
        case 27:
          Ar(e.stateNode);
        case 26:
        case 5:
          wl(e, e.return), bi(e);
          break;
        case 22:
          e.memoizedState === null && bi(e);
          break;
        case 30:
          bi(e);
          break;
        default:
          bi(e);
      }
      t = t.sibling;
    }
  }
  function wn(t, e, u) {
    for (u = u && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var n = e.alternate,
        f = t,
        c = e,
        g = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          wn(f, c, u), pr(4, c);
          break;
        case 1:
          if (
            (wn(f, c, u),
            (n = c),
            (f = n.stateNode),
            typeof f.componentDidMount == "function")
          )
            try {
              f.componentDidMount();
            } catch (z) {
              Wt(n, n.return, z);
            }
          if (((n = c), (f = n.updateQueue), f !== null)) {
            var y = n.stateNode;
            try {
              var E = f.shared.hiddenCallbacks;
              if (E !== null)
                for (f.shared.hiddenCallbacks = null, f = 0; f < E.length; f++)
                  Fd(E[f], y);
            } catch (z) {
              Wt(n, n.return, z);
            }
          }
          u && g & 64 && $_(c), mr(c, c.return);
          break;
        case 27:
          tD(c);
        case 26:
        case 5:
          wn(f, c, u), u && n === null && g & 4 && P_(c), mr(c, c.return);
          break;
        case 12:
          wn(f, c, u);
          break;
        case 13:
          wn(f, c, u), u && g & 4 && iD(f, c);
          break;
        case 22:
          c.memoizedState === null && wn(f, c, u), mr(c, c.return);
          break;
        case 30:
          break;
        default:
          wn(f, c, u);
      }
      e = e.sibling;
    }
  }
  function No(t, e) {
    var u = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (u = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== u && (t != null && t.refCount++, u != null && lr(u));
  }
  function Uo(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && lr(t));
  }
  function Fl(t, e, u, n) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) fD(t, e, u, n), (e = e.sibling);
  }
  function fD(t, e, u, n) {
    var f = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Fl(t, e, u, n), f & 2048 && pr(9, e);
        break;
      case 1:
        Fl(t, e, u, n);
        break;
      case 3:
        Fl(t, e, u, n),
          f & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && lr(t)));
        break;
      case 12:
        if (f & 2048) {
          Fl(t, e, u, n), (t = e.stateNode);
          try {
            var c = e.memoizedProps,
              g = c.id,
              y = c.onPostCommit;
            typeof y == "function" &&
              y(
                g,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (E) {
            Wt(e, e.return, E);
          }
        } else Fl(t, e, u, n);
        break;
      case 13:
        Fl(t, e, u, n);
        break;
      case 23:
        break;
      case 22:
        (c = e.stateNode),
          (g = e.alternate),
          e.memoizedState !== null
            ? c._visibility & 2
              ? Fl(t, e, u, n)
              : yr(t, e)
            : c._visibility & 2
            ? Fl(t, e, u, n)
            : ((c._visibility |= 2),
              ca(t, e, u, n, (e.subtreeFlags & 10256) !== 0)),
          f & 2048 && No(g, e);
        break;
      case 24:
        Fl(t, e, u, n), f & 2048 && Uo(e.alternate, e);
        break;
      default:
        Fl(t, e, u, n);
    }
  }
  function ca(t, e, u, n, f) {
    for (f = f && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var c = t,
        g = e,
        y = u,
        E = n,
        z = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          ca(c, g, y, E, f), pr(8, g);
          break;
        case 23:
          break;
        case 22:
          var j = g.stateNode;
          g.memoizedState !== null
            ? j._visibility & 2
              ? ca(c, g, y, E, f)
              : yr(c, g)
            : ((j._visibility |= 2), ca(c, g, y, E, f)),
            f && z & 2048 && No(g.alternate, g);
          break;
        case 24:
          ca(c, g, y, E, f), f && z & 2048 && Uo(g.alternate, g);
          break;
        default:
          ca(c, g, y, E, f);
      }
      e = e.sibling;
    }
  }
  function yr(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var u = t,
          n = e,
          f = n.flags;
        switch (n.tag) {
          case 22:
            yr(u, n), f & 2048 && No(n.alternate, n);
            break;
          case 24:
            yr(u, n), f & 2048 && Uo(n.alternate, n);
            break;
          default:
            yr(u, n);
        }
        e = e.sibling;
      }
  }
  var vr = 8192;
  function oa(t) {
    if (t.subtreeFlags & vr)
      for (t = t.child; t !== null; ) sD(t), (t = t.sibling);
  }
  function sD(t) {
    switch (t.tag) {
      case 26:
        oa(t),
          t.flags & vr &&
            t.memoizedState !== null &&
            My(Ol, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        oa(t);
        break;
      case 3:
      case 4:
        var e = Ol;
        (Ol = Ds(t.stateNode.containerInfo)), oa(t), (Ol = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = vr), (vr = 16777216), oa(t), (vr = e))
            : oa(t));
        break;
      default:
        oa(t);
    }
  }
  function cD(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function br(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var u = 0; u < e.length; u++) {
          var n = e[u];
          (Ve = n), hD(n, t);
        }
      cD(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) oD(t), (t = t.sibling);
  }
  function oD(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        br(t), t.flags & 2048 && Nn(9, t, t.return);
        break;
      case 3:
        br(t);
        break;
      case 12:
        br(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), ls(t))
          : br(t);
        break;
      default:
        br(t);
    }
  }
  function ls(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var u = 0; u < e.length; u++) {
          var n = e[u];
          (Ve = n), hD(n, t);
        }
      cD(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          Nn(8, e, e.return), ls(e);
          break;
        case 22:
          (u = e.stateNode),
            u._visibility & 2 && ((u._visibility &= -3), ls(e));
          break;
        default:
          ls(e);
      }
      t = t.sibling;
    }
  }
  function hD(t, e) {
    for (; Ve !== null; ) {
      var u = Ve;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Nn(8, u, e);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var n = u.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          lr(u.memoizedState.cache);
      }
      if (((n = u.child), n !== null)) (n.return = u), (Ve = n);
      else
        t: for (u = t; Ve !== null; ) {
          n = Ve;
          var f = n.sibling,
            c = n.return;
          if ((lD(n), n === u)) {
            Ve = null;
            break t;
          }
          if (f !== null) {
            (f.return = c), (Ve = f);
            break t;
          }
          Ve = c;
        }
    }
  }
  var Qm = {
      getCacheForType: function (t) {
        var e = lu(Ye),
          u = e.data.get(t);
        return u === void 0 && ((u = t()), e.data.set(t, u)), u;
      },
    },
    Zm = typeof WeakMap == "function" ? WeakMap : Map,
    Zt = 0,
    ue = null,
    Bt = null,
    qt = 0,
    kt = 0,
    Qu = null,
    Fn = !1,
    ha = !1,
    wo = !1,
    _n = 0,
    me = 0,
    Hn = 0,
    Si = 0,
    Fo = 0,
    Dl = 0,
    da = 0,
    Sr = null,
    zu = null,
    Ho = !1,
    Yo = 0,
    ns = 1 / 0,
    is = null,
    Yn = null,
    Pe = 0,
    qn = null,
    _a = null,
    Da = 0,
    qo = 0,
    Xo = null,
    dD = null,
    Tr = 0,
    Go = null;
  function Zu() {
    if ((Zt & 2) !== 0 && qt !== 0) return qt & -qt;
    if (R.T !== null) {
      var t = ua;
      return t !== 0 ? t : Ko();
    }
    return yt();
  }
  function _D() {
    Dl === 0 && (Dl = (qt & 536870912) === 0 || Lt ? Tt() : 536870912);
    var t = _l.current;
    return t !== null && (t.flags |= 32), Dl;
  }
  function ku(t, e, u) {
    ((t === ue && (kt === 2 || kt === 9)) || t.cancelPendingCommit !== null) &&
      (ga(t, 0), Xn(t, qt, Dl, !1)),
      Je(t, u),
      ((Zt & 2) === 0 || t !== ue) &&
        (t === ue &&
          ((Zt & 2) === 0 && (Si |= u), me === 4 && Xn(t, qt, Dl, !1)),
        Hl(t));
  }
  function DD(t, e, u) {
    if ((Zt & 6) !== 0) throw Error(i(327));
    var n = (!u && (e & 124) === 0 && (e & t.expiredLanes) === 0) || Cu(t, e),
      f = n ? Jm(t, e) : Vo(t, e, !0),
      c = n;
    do {
      if (f === 0) {
        ha && !n && Xn(t, e, 0, !1);
        break;
      } else {
        if (((u = t.current.alternate), c && !km(u))) {
          (f = Vo(t, e, !1)), (c = !1);
          continue;
        }
        if (f === 2) {
          if (((c = e), t.errorRecoveryDisabledLanes & c)) var g = 0;
          else
            (g = t.pendingLanes & -536870913),
              (g = g !== 0 ? g : g & 536870912 ? 536870912 : 0);
          if (g !== 0) {
            e = g;
            t: {
              var y = t;
              f = Sr;
              var E = y.current.memoizedState.isDehydrated;
              if ((E && (ga(y, g).flags |= 256), (g = Vo(y, g, !1)), g !== 2)) {
                if (wo && !E) {
                  (y.errorRecoveryDisabledLanes |= c), (Si |= c), (f = 4);
                  break t;
                }
                (c = zu),
                  (zu = f),
                  c !== null && (zu === null ? (zu = c) : zu.push.apply(zu, c));
              }
              f = g;
            }
            if (((c = !1), f !== 2)) continue;
          }
        }
        if (f === 1) {
          ga(t, 0), Xn(t, e, 0, !0);
          break;
        }
        t: {
          switch (((n = t), (c = f), c)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Xn(n, e, Dl, !Fn);
              break t;
            case 2:
              zu = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((e & 62914560) === e && ((f = Yo + 300 - w()), 10 < f)) {
            if ((Xn(n, e, Dl, !Fn), Cl(n, 0, !0) !== 0)) break t;
            n.timeoutHandle = VD(
              gD.bind(null, n, u, zu, is, Ho, e, Dl, Si, da, Fn, c, 2, -0, 0),
              f
            );
            break t;
          }
          gD(n, u, zu, is, Ho, e, Dl, Si, da, Fn, c, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Hl(t);
  }
  function gD(t, e, u, n, f, c, g, y, E, z, j, Q, B, N) {
    if (
      ((t.timeoutHandle = -1),
      (Q = e.subtreeFlags),
      (Q & 8192 || (Q & 16785408) === 16785408) &&
        ((zr = { stylesheets: null, count: 0, unsuspend: Oy }),
        sD(e),
        (Q = zy()),
        Q !== null))
    ) {
      (t.cancelPendingCommit = Q(
        TD.bind(null, t, e, c, u, n, f, g, y, E, j, 1, B, N)
      )),
        Xn(t, c, g, !z);
      return;
    }
    TD(t, e, c, u, n, f, g, y, E);
  }
  function km(t) {
    for (var e = t; ; ) {
      var u = e.tag;
      if (
        (u === 0 || u === 11 || u === 15) &&
        e.flags & 16384 &&
        ((u = e.updateQueue), u !== null && ((u = u.stores), u !== null))
      )
        for (var n = 0; n < u.length; n++) {
          var f = u[n],
            c = f.getSnapshot;
          f = f.value;
          try {
            if (!Gu(c(), f)) return !1;
          } catch {
            return !1;
          }
        }
      if (((u = e.child), e.subtreeFlags & 16384 && u !== null))
        (u.return = e), (e = u);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function Xn(t, e, u, n) {
    (e &= ~Fo),
      (e &= ~Si),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      n && (t.warmLanes |= e),
      (n = t.expirationTimes);
    for (var f = e; 0 < f; ) {
      var c = 31 - te(f),
        g = 1 << c;
      (n[c] = -1), (f &= ~g);
    }
    u !== 0 && Bl(t, u, e);
  }
  function as() {
    return (Zt & 6) === 0 ? (Er(0), !1) : !0;
  }
  function jo() {
    if (Bt !== null) {
      if (kt === 0) var t = Bt.return;
      else (t = Bt), (an = gi = null), no(t), (fa = null), (_r = 0), (t = Bt);
      for (; t !== null; ) J_(t.alternate, t), (t = t.return);
      Bt = null;
    }
  }
  function ga(t, e) {
    var u = t.timeoutHandle;
    u !== -1 && ((t.timeoutHandle = -1), oy(u)),
      (u = t.cancelPendingCommit),
      u !== null && ((t.cancelPendingCommit = null), u()),
      jo(),
      (ue = t),
      (Bt = u = un(t.current, null)),
      (qt = e),
      (kt = 0),
      (Qu = null),
      (Fn = !1),
      (ha = Cu(t, e)),
      (wo = !1),
      (da = Dl = Fo = Si = Hn = me = 0),
      (zu = Sr = null),
      (Ho = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var f = 31 - te(n),
          c = 1 << f;
        (e |= t[f]), (n &= ~c);
      }
    return (_n = e), Of(), u;
  }
  function pD(t, e) {
    (xt = null),
      (R.H = kf),
      e === ir || e === Hf
        ? ((e = Ud()), (kt = 3))
        : e === Rd
        ? ((e = Ud()), (kt = 4))
        : (kt =
            e === w_
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (Qu = e),
      Bt === null && ((me = 1), Pf(t, cl(e, t.current)));
  }
  function mD() {
    var t = R.H;
    return (R.H = kf), t === null ? kf : t;
  }
  function yD() {
    var t = R.A;
    return (R.A = Qm), t;
  }
  function Lo() {
    (me = 4),
      Fn || ((qt & 4194048) !== qt && _l.current !== null) || (ha = !0),
      ((Hn & 134217727) === 0 && (Si & 134217727) === 0) ||
        ue === null ||
        Xn(ue, qt, Dl, !1);
  }
  function Vo(t, e, u) {
    var n = Zt;
    Zt |= 2;
    var f = mD(),
      c = yD();
    (ue !== t || qt !== e) && ((is = null), ga(t, e)), (e = !1);
    var g = me;
    t: do
      try {
        if (kt !== 0 && Bt !== null) {
          var y = Bt,
            E = Qu;
          switch (kt) {
            case 8:
              jo(), (g = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              _l.current === null && (e = !0);
              var z = kt;
              if (((kt = 0), (Qu = null), pa(t, y, E, z), u && ha)) {
                g = 0;
                break t;
              }
              break;
            default:
              (z = kt), (kt = 0), (Qu = null), pa(t, y, E, z);
          }
        }
        Km(), (g = me);
        break;
      } catch (j) {
        pD(t, j);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (an = gi = null),
      (Zt = n),
      (R.H = f),
      (R.A = c),
      Bt === null && ((ue = null), (qt = 0), Of()),
      g
    );
  }
  function Km() {
    for (; Bt !== null; ) vD(Bt);
  }
  function Jm(t, e) {
    var u = Zt;
    Zt |= 2;
    var n = mD(),
      f = yD();
    ue !== t || qt !== e
      ? ((is = null), (ns = w() + 500), ga(t, e))
      : (ha = Cu(t, e));
    t: do
      try {
        if (kt !== 0 && Bt !== null) {
          e = Bt;
          var c = Qu;
          e: switch (kt) {
            case 1:
              (kt = 0), (Qu = null), pa(t, e, c, 1);
              break;
            case 2:
            case 9:
              if (Bd(c)) {
                (kt = 0), (Qu = null), bD(e);
                break;
              }
              (e = function () {
                (kt !== 2 && kt !== 9) || ue !== t || (kt = 7), Hl(t);
              }),
                c.then(e, e);
              break t;
            case 3:
              kt = 7;
              break t;
            case 4:
              kt = 5;
              break t;
            case 7:
              Bd(c)
                ? ((kt = 0), (Qu = null), bD(e))
                : ((kt = 0), (Qu = null), pa(t, e, c, 7));
              break;
            case 5:
              var g = null;
              switch (Bt.tag) {
                case 26:
                  g = Bt.memoizedState;
                case 5:
                case 27:
                  var y = Bt;
                  if (!g || ug(g)) {
                    (kt = 0), (Qu = null);
                    var E = y.sibling;
                    if (E !== null) Bt = E;
                    else {
                      var z = y.return;
                      z !== null ? ((Bt = z), rs(z)) : (Bt = null);
                    }
                    break e;
                  }
              }
              (kt = 0), (Qu = null), pa(t, e, c, 5);
              break;
            case 6:
              (kt = 0), (Qu = null), pa(t, e, c, 6);
              break;
            case 8:
              jo(), (me = 6);
              break t;
            default:
              throw Error(i(462));
          }
        }
        $m();
        break;
      } catch (j) {
        pD(t, j);
      }
    while (!0);
    return (
      (an = gi = null),
      (R.H = n),
      (R.A = f),
      (Zt = u),
      Bt !== null ? 0 : ((ue = null), (qt = 0), Of(), me)
    );
  }
  function $m() {
    for (; Bt !== null && !uu(); ) vD(Bt);
  }
  function vD(t) {
    var e = k_(t.alternate, t, _n);
    (t.memoizedProps = t.pendingProps), e === null ? rs(t) : (Bt = e);
  }
  function bD(t) {
    var e = t,
      u = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = G_(u, e, e.pendingProps, e.type, void 0, qt);
        break;
      case 11:
        e = G_(u, e, e.pendingProps, e.type.render, e.ref, qt);
        break;
      case 5:
        no(e);
      default:
        J_(u, e), (e = Bt = Sd(e, _n)), (e = k_(u, e, _n));
    }
    (t.memoizedProps = t.pendingProps), e === null ? rs(t) : (Bt = e);
  }
  function pa(t, e, u, n) {
    (an = gi = null), no(e), (fa = null), (_r = 0);
    var f = e.return;
    try {
      if (qm(t, f, e, u, qt)) {
        (me = 1), Pf(t, cl(u, t.current)), (Bt = null);
        return;
      }
    } catch (c) {
      if (f !== null) throw ((Bt = f), c);
      (me = 1), Pf(t, cl(u, t.current)), (Bt = null);
      return;
    }
    e.flags & 32768
      ? (Lt || n === 1
          ? (t = !0)
          : ha || (qt & 536870912) !== 0
          ? (t = !1)
          : ((Fn = t = !0),
            (n === 2 || n === 9 || n === 3 || n === 6) &&
              ((n = _l.current),
              n !== null && n.tag === 13 && (n.flags |= 16384))),
        SD(e, t))
      : rs(e);
  }
  function rs(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        SD(e, Fn);
        return;
      }
      t = e.return;
      var u = Gm(e.alternate, e, _n);
      if (u !== null) {
        Bt = u;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        Bt = e;
        return;
      }
      Bt = e = t;
    } while (e !== null);
    me === 0 && (me = 5);
  }
  function SD(t, e) {
    do {
      var u = jm(t.alternate, t);
      if (u !== null) {
        (u.flags &= 32767), (Bt = u);
        return;
      }
      if (
        ((u = t.return),
        u !== null &&
          ((u.flags |= 32768), (u.subtreeFlags = 0), (u.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        Bt = t;
        return;
      }
      Bt = t = u;
    } while (t !== null);
    (me = 6), (Bt = null);
  }
  function TD(t, e, u, n, f, c, g, y, E) {
    t.cancelPendingCommit = null;
    do fs();
    while (Pe !== 0);
    if ((Zt & 6) !== 0) throw Error(i(327));
    if (e !== null) {
      if (e === t.current) throw Error(i(177));
      if (
        ((c = e.lanes | e.childLanes),
        (c |= Nc),
        Hu(t, u, c, g, y, E),
        t === ue && ((Bt = ue = null), (qt = 0)),
        (_a = e),
        (qn = t),
        (Da = u),
        (qo = c),
        (Xo = f),
        (dD = n),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            ty(It, function () {
              return OD(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (n = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || n)
      ) {
        (n = R.T), (R.T = null), (f = L.p), (L.p = 2), (g = Zt), (Zt |= 4);
        try {
          Lm(t, e, u);
        } finally {
          (Zt = g), (L.p = f), (R.T = n);
        }
      }
      (Pe = 1), ED(), xD(), CD();
    }
  }
  function ED() {
    if (Pe === 1) {
      Pe = 0;
      var t = qn,
        e = _a,
        u = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || u) {
        (u = R.T), (R.T = null);
        var n = L.p;
        L.p = 2;
        var f = Zt;
        Zt |= 4;
        try {
          aD(e, t);
          var c = uh,
            g = hd(t.containerInfo),
            y = c.focusedElem,
            E = c.selectionRange;
          if (
            g !== y &&
            y &&
            y.ownerDocument &&
            od(y.ownerDocument.documentElement, y)
          ) {
            if (E !== null && Oc(y)) {
              var z = E.start,
                j = E.end;
              if ((j === void 0 && (j = z), "selectionStart" in y))
                (y.selectionStart = z),
                  (y.selectionEnd = Math.min(j, y.value.length));
              else {
                var Q = y.ownerDocument || document,
                  B = (Q && Q.defaultView) || window;
                if (B.getSelection) {
                  var N = B.getSelection(),
                    gt = y.textContent.length,
                    dt = Math.min(E.start, gt),
                    $t = E.end === void 0 ? dt : Math.min(E.end, gt);
                  !N.extend && dt > $t && ((g = $t), ($t = dt), (dt = g));
                  var O = cd(y, dt),
                    C = cd(y, $t);
                  if (
                    O &&
                    C &&
                    (N.rangeCount !== 1 ||
                      N.anchorNode !== O.node ||
                      N.anchorOffset !== O.offset ||
                      N.focusNode !== C.node ||
                      N.focusOffset !== C.offset)
                  ) {
                    var M = Q.createRange();
                    M.setStart(O.node, O.offset),
                      N.removeAllRanges(),
                      dt > $t
                        ? (N.addRange(M), N.extend(C.node, C.offset))
                        : (M.setEnd(C.node, C.offset), N.addRange(M));
                  }
                }
              }
            }
            for (Q = [], N = y; (N = N.parentNode); )
              N.nodeType === 1 &&
                Q.push({ element: N, left: N.scrollLeft, top: N.scrollTop });
            for (
              typeof y.focus == "function" && y.focus(), y = 0;
              y < Q.length;
              y++
            ) {
              var V = Q[y];
              (V.element.scrollLeft = V.left), (V.element.scrollTop = V.top);
            }
          }
          (vs = !!eh), (uh = eh = null);
        } finally {
          (Zt = f), (L.p = n), (R.T = u);
        }
      }
      (t.current = e), (Pe = 2);
    }
  }
  function xD() {
    if (Pe === 2) {
      Pe = 0;
      var t = qn,
        e = _a,
        u = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || u) {
        (u = R.T), (R.T = null);
        var n = L.p;
        L.p = 2;
        var f = Zt;
        Zt |= 4;
        try {
          uD(t, e.alternate, e);
        } finally {
          (Zt = f), (L.p = n), (R.T = u);
        }
      }
      Pe = 3;
    }
  }
  function CD() {
    if (Pe === 4 || Pe === 3) {
      (Pe = 0), ou();
      var t = qn,
        e = _a,
        u = Da,
        n = dD;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Pe = 5)
        : ((Pe = 0), (_a = qn = null), AD(t, t.pendingLanes));
      var f = t.pendingLanes;
      if (
        (f === 0 && (Yn = null),
        Wl(u),
        (e = e.stateNode),
        wt && typeof wt.onCommitFiberRoot == "function")
      )
        try {
          wt.onCommitFiberRoot(Tu, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (n !== null) {
        (e = R.T), (f = L.p), (L.p = 2), (R.T = null);
        try {
          for (var c = t.onRecoverableError, g = 0; g < n.length; g++) {
            var y = n[g];
            c(y.value, { componentStack: y.stack });
          }
        } finally {
          (R.T = e), (L.p = f);
        }
      }
      (Da & 3) !== 0 && fs(),
        Hl(t),
        (f = t.pendingLanes),
        (u & 4194090) !== 0 && (f & 42) !== 0
          ? t === Go
            ? Tr++
            : ((Tr = 0), (Go = t))
          : (Tr = 0),
        Er(0);
    }
  }
  function AD(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), lr(e)));
  }
  function fs(t) {
    return ED(), xD(), CD(), OD();
  }
  function OD() {
    if (Pe !== 5) return !1;
    var t = qn,
      e = qo;
    qo = 0;
    var u = Wl(Da),
      n = R.T,
      f = L.p;
    try {
      (L.p = 32 > u ? 32 : u), (R.T = null), (u = Xo), (Xo = null);
      var c = qn,
        g = Da;
      if (((Pe = 0), (_a = qn = null), (Da = 0), (Zt & 6) !== 0))
        throw Error(i(331));
      var y = Zt;
      if (
        ((Zt |= 4),
        oD(c.current),
        fD(c, c.current, g, u),
        (Zt = y),
        Er(0, !1),
        wt && typeof wt.onPostCommitFiberRoot == "function")
      )
        try {
          wt.onPostCommitFiberRoot(Tu, c);
        } catch {}
      return !0;
    } finally {
      (L.p = f), (R.T = n), AD(t, e);
    }
  }
  function MD(t, e, u) {
    (e = cl(u, e)),
      (e = yo(t.stateNode, e, 2)),
      (t = Mn(t, e, 2)),
      t !== null && (Je(t, 2), Hl(t));
  }
  function Wt(t, e, u) {
    if (t.tag === 3) MD(t, t, u);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          MD(e, t, u);
          break;
        } else if (e.tag === 1) {
          var n = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof n.componentDidCatch == "function" &&
              (Yn === null || !Yn.has(n)))
          ) {
            (t = cl(u, t)),
              (u = N_(2)),
              (n = Mn(e, u, 2)),
              n !== null && (U_(u, n, e, t), Je(n, 2), Hl(n));
            break;
          }
        }
        e = e.return;
      }
  }
  function Qo(t, e, u) {
    var n = t.pingCache;
    if (n === null) {
      n = t.pingCache = new Zm();
      var f = new Set();
      n.set(e, f);
    } else (f = n.get(e)), f === void 0 && ((f = new Set()), n.set(e, f));
    f.has(u) ||
      ((wo = !0), f.add(u), (t = Wm.bind(null, t, e, u)), e.then(t, t));
  }
  function Wm(t, e, u) {
    var n = t.pingCache;
    n !== null && n.delete(e),
      (t.pingedLanes |= t.suspendedLanes & u),
      (t.warmLanes &= ~u),
      ue === t &&
        (qt & u) === u &&
        (me === 4 || (me === 3 && (qt & 62914560) === qt && 300 > w() - Yo)
          ? (Zt & 2) === 0 && ga(t, 0)
          : (Fo |= u),
        da === qt && (da = 0)),
      Hl(t);
  }
  function zD(t, e) {
    e === 0 && (e = Rl()), (t = Pi(t, e)), t !== null && (Je(t, e), Hl(t));
  }
  function Pm(t) {
    var e = t.memoizedState,
      u = 0;
    e !== null && (u = e.retryLane), zD(t, u);
  }
  function Im(t, e) {
    var u = 0;
    switch (t.tag) {
      case 13:
        var n = t.stateNode,
          f = t.memoizedState;
        f !== null && (u = f.retryLane);
        break;
      case 19:
        n = t.stateNode;
        break;
      case 22:
        n = t.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    n !== null && n.delete(e), zD(t, u);
  }
  function ty(t, e) {
    return zt(t, e);
  }
  var ss = null,
    ma = null,
    Zo = !1,
    cs = !1,
    ko = !1,
    Ti = 0;
  function Hl(t) {
    t !== ma &&
      t.next === null &&
      (ma === null ? (ss = ma = t) : (ma = ma.next = t)),
      (cs = !0),
      Zo || ((Zo = !0), uy());
  }
  function Er(t, e) {
    if (!ko && cs) {
      ko = !0;
      do
        for (var u = !1, n = ss; n !== null; ) {
          if (t !== 0) {
            var f = n.pendingLanes;
            if (f === 0) var c = 0;
            else {
              var g = n.suspendedLanes,
                y = n.pingedLanes;
              (c = (1 << (31 - te(42 | t) + 1)) - 1),
                (c &= f & ~(g & ~y)),
                (c = c & 201326741 ? (c & 201326741) | 1 : c ? c | 2 : 0);
            }
            c !== 0 && ((u = !0), UD(n, c));
          } else
            (c = qt),
              (c = Cl(
                n,
                n === ue ? c : 0,
                n.cancelPendingCommit !== null || n.timeoutHandle !== -1
              )),
              (c & 3) === 0 || Cu(n, c) || ((u = !0), UD(n, c));
          n = n.next;
        }
      while (u);
      ko = !1;
    }
  }
  function ey() {
    RD();
  }
  function RD() {
    cs = Zo = !1;
    var t = 0;
    Ti !== 0 && (cy() && (t = Ti), (Ti = 0));
    for (var e = w(), u = null, n = ss; n !== null; ) {
      var f = n.next,
        c = BD(n, e);
      c === 0
        ? ((n.next = null),
          u === null ? (ss = f) : (u.next = f),
          f === null && (ma = u))
        : ((u = n), (t !== 0 || (c & 3) !== 0) && (cs = !0)),
        (n = f);
    }
    Er(t);
  }
  function BD(t, e) {
    for (
      var u = t.suspendedLanes,
        n = t.pingedLanes,
        f = t.expirationTimes,
        c = t.pendingLanes & -62914561;
      0 < c;

    ) {
      var g = 31 - te(c),
        y = 1 << g,
        E = f[g];
      E === -1
        ? ((y & u) === 0 || (y & n) !== 0) && (f[g] = Jl(y, e))
        : E <= e && (t.expiredLanes |= y),
        (c &= ~y);
    }
    if (
      ((e = ue),
      (u = qt),
      (u = Cl(
        t,
        t === e ? u : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (n = t.callbackNode),
      u === 0 ||
        (t === e && (kt === 2 || kt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        n !== null && n !== null && ie(n),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((u & 3) === 0 || Cu(t, u)) {
      if (((e = u & -u), e === t.callbackPriority)) return e;
      switch ((n !== null && ie(n), Wl(u))) {
        case 2:
        case 8:
          u = Sl;
          break;
        case 32:
          u = It;
          break;
        case 268435456:
          u = El;
          break;
        default:
          u = It;
      }
      return (
        (n = ND.bind(null, t)),
        (u = zt(u, n)),
        (t.callbackPriority = e),
        (t.callbackNode = u),
        e
      );
    }
    return (
      n !== null && n !== null && ie(n),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function ND(t, e) {
    if (Pe !== 0 && Pe !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var u = t.callbackNode;
    if (fs() && t.callbackNode !== u) return null;
    var n = qt;
    return (
      (n = Cl(
        t,
        t === ue ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      n === 0
        ? null
        : (DD(t, n, e),
          BD(t, w()),
          t.callbackNode != null && t.callbackNode === u
            ? ND.bind(null, t)
            : null)
    );
  }
  function UD(t, e) {
    if (fs()) return null;
    DD(t, e, !0);
  }
  function uy() {
    hy(function () {
      (Zt & 6) !== 0 ? zt(il, ey) : RD();
    });
  }
  function Ko() {
    return Ti === 0 && (Ti = Tt()), Ti;
  }
  function wD(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : bf("" + t);
  }
  function FD(t, e) {
    var u = e.ownerDocument.createElement("input");
    return (
      (u.name = e.name),
      (u.value = e.value),
      t.id && u.setAttribute("form", t.id),
      e.parentNode.insertBefore(u, e),
      (t = new FormData(t)),
      u.parentNode.removeChild(u),
      t
    );
  }
  function ly(t, e, u, n, f) {
    if (e === "submit" && u && u.stateNode === f) {
      var c = wD((f[rt] || null).action),
        g = n.submitter;
      g &&
        ((e = (e = g[rt] || null)
          ? wD(e.formAction)
          : g.getAttribute("formAction")),
        e !== null && ((c = e), (g = null)));
      var y = new xf("action", "action", null, n, f);
      t.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (n.defaultPrevented) {
                if (Ti !== 0) {
                  var E = g ? FD(f, g) : new FormData(f);
                  _o(
                    u,
                    { pending: !0, data: E, method: f.method, action: c },
                    null,
                    E
                  );
                }
              } else
                typeof c == "function" &&
                  (y.preventDefault(),
                  (E = g ? FD(f, g) : new FormData(f)),
                  _o(
                    u,
                    { pending: !0, data: E, method: f.method, action: c },
                    c,
                    E
                  ));
            },
            currentTarget: f,
          },
        ],
      });
    }
  }
  for (var Jo = 0; Jo < Bc.length; Jo++) {
    var $o = Bc[Jo],
      ny = $o.toLowerCase(),
      iy = $o[0].toUpperCase() + $o.slice(1);
    Al(ny, "on" + iy);
  }
  Al(Dd, "onAnimationEnd"),
    Al(gd, "onAnimationIteration"),
    Al(pd, "onAnimationStart"),
    Al("dblclick", "onDoubleClick"),
    Al("focusin", "onFocus"),
    Al("focusout", "onBlur"),
    Al(Sm, "onTransitionRun"),
    Al(Tm, "onTransitionStart"),
    Al(Em, "onTransitionCancel"),
    Al(md, "onTransitionEnd"),
    oe("onMouseEnter", ["mouseout", "mouseover"]),
    oe("onMouseLeave", ["mouseout", "mouseover"]),
    oe("onPointerEnter", ["pointerout", "pointerover"]),
    oe("onPointerLeave", ["pointerout", "pointerover"]),
    ae(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    ae(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    ae("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ae(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    ae(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    ae(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var xr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    ay = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(xr)
    );
  function HD(t, e) {
    e = (e & 4) !== 0;
    for (var u = 0; u < t.length; u++) {
      var n = t[u],
        f = n.event;
      n = n.listeners;
      t: {
        var c = void 0;
        if (e)
          for (var g = n.length - 1; 0 <= g; g--) {
            var y = n[g],
              E = y.instance,
              z = y.currentTarget;
            if (((y = y.listener), E !== c && f.isPropagationStopped()))
              break t;
            (c = y), (f.currentTarget = z);
            try {
              c(f);
            } catch (j) {
              Wf(j);
            }
            (f.currentTarget = null), (c = E);
          }
        else
          for (g = 0; g < n.length; g++) {
            if (
              ((y = n[g]),
              (E = y.instance),
              (z = y.currentTarget),
              (y = y.listener),
              E !== c && f.isPropagationStopped())
            )
              break t;
            (c = y), (f.currentTarget = z);
            try {
              c(f);
            } catch (j) {
              Wf(j);
            }
            (f.currentTarget = null), (c = E);
          }
      }
    }
  }
  function Nt(t, e) {
    var u = e[pt];
    u === void 0 && (u = e[pt] = new Set());
    var n = t + "__bubble";
    u.has(n) || (YD(e, t, 2, !1), u.add(n));
  }
  function Wo(t, e, u) {
    var n = 0;
    e && (n |= 4), YD(u, t, n, e);
  }
  var os = "_reactListening" + Math.random().toString(36).slice(2);
  function Po(t) {
    if (!t[os]) {
      (t[os] = !0),
        qu.forEach(function (u) {
          u !== "selectionchange" && (ay.has(u) || Wo(u, !1, t), Wo(u, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[os] || ((e[os] = !0), Wo("selectionchange", !1, e));
    }
  }
  function YD(t, e, u, n) {
    switch (fg(e)) {
      case 2:
        var f = Ny;
        break;
      case 8:
        f = Uy;
        break;
      default:
        f = hh;
    }
    (u = f.bind(null, e, u, t)),
      (f = void 0),
      !yc ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (f = !0),
      n
        ? f !== void 0
          ? t.addEventListener(e, u, { capture: !0, passive: f })
          : t.addEventListener(e, u, !0)
        : f !== void 0
        ? t.addEventListener(e, u, { passive: f })
        : t.addEventListener(e, u, !1);
  }
  function Io(t, e, u, n, f) {
    var c = n;
    if ((e & 1) === 0 && (e & 2) === 0 && n !== null)
      t: for (;;) {
        if (n === null) return;
        var g = n.tag;
        if (g === 3 || g === 4) {
          var y = n.stateNode.containerInfo;
          if (y === f) break;
          if (g === 4)
            for (g = n.return; g !== null; ) {
              var E = g.tag;
              if ((E === 3 || E === 4) && g.stateNode.containerInfo === f)
                return;
              g = g.return;
            }
          for (; y !== null; ) {
            if (((g = jt(y)), g === null)) return;
            if (((E = g.tag), E === 5 || E === 6 || E === 26 || E === 27)) {
              n = c = g;
              continue t;
            }
            y = y.parentNode;
          }
        }
        n = n.return;
      }
    Q0(function () {
      var z = c,
        j = pc(u),
        Q = [];
      t: {
        var B = yd.get(t);
        if (B !== void 0) {
          var N = xf,
            gt = t;
          switch (t) {
            case "keypress":
              if (Tf(u) === 0) break t;
            case "keydown":
            case "keyup":
              N = tm;
              break;
            case "focusin":
              (gt = "focus"), (N = Tc);
              break;
            case "focusout":
              (gt = "blur"), (N = Tc);
              break;
            case "beforeblur":
            case "afterblur":
              N = Tc;
              break;
            case "click":
              if (u.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              N = K0;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = j1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = lm;
              break;
            case Dd:
            case gd:
            case pd:
              N = Q1;
              break;
            case md:
              N = im;
              break;
            case "scroll":
            case "scrollend":
              N = X1;
              break;
            case "wheel":
              N = rm;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = k1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = $0;
              break;
            case "toggle":
            case "beforetoggle":
              N = sm;
          }
          var dt = (e & 4) !== 0,
            $t = !dt && (t === "scroll" || t === "scrollend"),
            O = dt ? (B !== null ? B + "Capture" : null) : B;
          dt = [];
          for (var C = z, M; C !== null; ) {
            var V = C;
            if (
              ((M = V.stateNode),
              (V = V.tag),
              (V !== 5 && V !== 26 && V !== 27) ||
                M === null ||
                O === null ||
                ((V = Va(C, O)), V != null && dt.push(Cr(C, V, M))),
              $t)
            )
              break;
            C = C.return;
          }
          0 < dt.length &&
            ((B = new N(B, gt, null, u, j)),
            Q.push({ event: B, listeners: dt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((B = t === "mouseover" || t === "pointerover"),
            (N = t === "mouseout" || t === "pointerout"),
            B &&
              u !== gc &&
              (gt = u.relatedTarget || u.fromElement) &&
              (jt(gt) || gt[at]))
          )
            break t;
          if (
            (N || B) &&
            ((B =
              j.window === j
                ? j
                : (B = j.ownerDocument)
                ? B.defaultView || B.parentWindow
                : window),
            N
              ? ((gt = u.relatedTarget || u.toElement),
                (N = z),
                (gt = gt ? jt(gt) : null),
                gt !== null &&
                  (($t = s(gt)),
                  (dt = gt.tag),
                  gt !== $t || (dt !== 5 && dt !== 27 && dt !== 6)) &&
                  (gt = null))
              : ((N = null), (gt = z)),
            N !== gt)
          ) {
            if (
              ((dt = K0),
              (V = "onMouseLeave"),
              (O = "onMouseEnter"),
              (C = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((dt = $0),
                (V = "onPointerLeave"),
                (O = "onPointerEnter"),
                (C = "pointer")),
              ($t = N == null ? B : $e(N)),
              (M = gt == null ? B : $e(gt)),
              (B = new dt(V, C + "leave", N, u, j)),
              (B.target = $t),
              (B.relatedTarget = M),
              (V = null),
              jt(j) === z &&
                ((dt = new dt(O, C + "enter", gt, u, j)),
                (dt.target = M),
                (dt.relatedTarget = $t),
                (V = dt)),
              ($t = V),
              N && gt)
            )
              e: {
                for (dt = N, O = gt, C = 0, M = dt; M; M = ya(M)) C++;
                for (M = 0, V = O; V; V = ya(V)) M++;
                for (; 0 < C - M; ) (dt = ya(dt)), C--;
                for (; 0 < M - C; ) (O = ya(O)), M--;
                for (; C--; ) {
                  if (dt === O || (O !== null && dt === O.alternate)) break e;
                  (dt = ya(dt)), (O = ya(O));
                }
                dt = null;
              }
            else dt = null;
            N !== null && qD(Q, B, N, dt, !1),
              gt !== null && $t !== null && qD(Q, $t, gt, dt, !0);
          }
        }
        t: {
          if (
            ((B = z ? $e(z) : window),
            (N = B.nodeName && B.nodeName.toLowerCase()),
            N === "select" || (N === "input" && B.type === "file"))
          )
            var nt = nd;
          else if (ud(B))
            if (id) nt = ym;
            else {
              nt = pm;
              var At = gm;
            }
          else
            (N = B.nodeName),
              !N ||
              N.toLowerCase() !== "input" ||
              (B.type !== "checkbox" && B.type !== "radio")
                ? z && Dc(z.elementType) && (nt = nd)
                : (nt = mm);
          if (nt && (nt = nt(t, z))) {
            ld(Q, nt, u, j);
            break t;
          }
          At && At(t, B, z),
            t === "focusout" &&
              z &&
              B.type === "number" &&
              z.memoizedProps.value != null &&
              _c(B, "number", B.value);
        }
        switch (((At = z ? $e(z) : window), t)) {
          case "focusin":
            (ud(At) || At.contentEditable === "true") &&
              ((Ji = At), (Mc = z), (Pa = null));
            break;
          case "focusout":
            Pa = Mc = Ji = null;
            break;
          case "mousedown":
            zc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (zc = !1), dd(Q, u, j);
            break;
          case "selectionchange":
            if (bm) break;
          case "keydown":
          case "keyup":
            dd(Q, u, j);
        }
        var ft;
        if (xc)
          t: {
            switch (t) {
              case "compositionstart":
                var Dt = "onCompositionStart";
                break t;
              case "compositionend":
                Dt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                Dt = "onCompositionUpdate";
                break t;
            }
            Dt = void 0;
          }
        else
          Ki
            ? td(t, u) && (Dt = "onCompositionEnd")
            : t === "keydown" &&
              u.keyCode === 229 &&
              (Dt = "onCompositionStart");
        Dt &&
          (W0 &&
            u.locale !== "ko" &&
            (Ki || Dt !== "onCompositionStart"
              ? Dt === "onCompositionEnd" && Ki && (ft = Z0())
              : ((xn = j),
                (vc = "value" in xn ? xn.value : xn.textContent),
                (Ki = !0))),
          (At = hs(z, Dt)),
          0 < At.length &&
            ((Dt = new J0(Dt, t, null, u, j)),
            Q.push({ event: Dt, listeners: At }),
            ft
              ? (Dt.data = ft)
              : ((ft = ed(u)), ft !== null && (Dt.data = ft)))),
          (ft = om ? hm(t, u) : dm(t, u)) &&
            ((Dt = hs(z, "onBeforeInput")),
            0 < Dt.length &&
              ((At = new J0("onBeforeInput", "beforeinput", null, u, j)),
              Q.push({ event: At, listeners: Dt }),
              (At.data = ft))),
          ly(Q, t, z, u, j);
      }
      HD(Q, e);
    });
  }
  function Cr(t, e, u) {
    return { instance: t, listener: e, currentTarget: u };
  }
  function hs(t, e) {
    for (var u = e + "Capture", n = []; t !== null; ) {
      var f = t,
        c = f.stateNode;
      if (
        ((f = f.tag),
        (f !== 5 && f !== 26 && f !== 27) ||
          c === null ||
          ((f = Va(t, u)),
          f != null && n.unshift(Cr(t, f, c)),
          (f = Va(t, e)),
          f != null && n.push(Cr(t, f, c))),
        t.tag === 3)
      )
        return n;
      t = t.return;
    }
    return [];
  }
  function ya(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function qD(t, e, u, n, f) {
    for (var c = e._reactName, g = []; u !== null && u !== n; ) {
      var y = u,
        E = y.alternate,
        z = y.stateNode;
      if (((y = y.tag), E !== null && E === n)) break;
      (y !== 5 && y !== 26 && y !== 27) ||
        z === null ||
        ((E = z),
        f
          ? ((z = Va(u, c)), z != null && g.unshift(Cr(u, z, E)))
          : f || ((z = Va(u, c)), z != null && g.push(Cr(u, z, E)))),
        (u = u.return);
    }
    g.length !== 0 && t.push({ event: e, listeners: g });
  }
  var ry = /\r\n?/g,
    fy = /\u0000|\uFFFD/g;
  function XD(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        ry,
        `
`
      )
      .replace(fy, "");
  }
  function GD(t, e) {
    return (e = XD(e)), XD(t) === e;
  }
  function ds() {}
  function Jt(t, e, u, n, f, c) {
    switch (u) {
      case "children":
        typeof n == "string"
          ? e === "body" || (e === "textarea" && n === "") || Qi(t, n)
          : (typeof n == "number" || typeof n == "bigint") &&
            e !== "body" &&
            Qi(t, "" + n);
        break;
      case "className":
        Tn(t, "class", n);
        break;
      case "tabIndex":
        Tn(t, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Tn(t, u, n);
        break;
      case "style":
        L0(t, n, c);
        break;
      case "data":
        if (e !== "object") {
          Tn(t, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (e !== "a" || u !== "href")) {
          t.removeAttribute(u);
          break;
        }
        if (
          n == null ||
          typeof n == "function" ||
          typeof n == "symbol" ||
          typeof n == "boolean"
        ) {
          t.removeAttribute(u);
          break;
        }
        (n = bf("" + n)), t.setAttribute(u, n);
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          t.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof c == "function" &&
            (u === "formAction"
              ? (e !== "input" && Jt(t, e, "name", f.name, f, null),
                Jt(t, e, "formEncType", f.formEncType, f, null),
                Jt(t, e, "formMethod", f.formMethod, f, null),
                Jt(t, e, "formTarget", f.formTarget, f, null))
              : (Jt(t, e, "encType", f.encType, f, null),
                Jt(t, e, "method", f.method, f, null),
                Jt(t, e, "target", f.target, f, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(u);
          break;
        }
        (n = bf("" + n)), t.setAttribute(u, n);
        break;
      case "onClick":
        n != null && (t.onclick = ds);
        break;
      case "onScroll":
        n != null && Nt("scroll", t);
        break;
      case "onScrollEnd":
        n != null && Nt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(i(61));
          if (((u = n.__html), u != null)) {
            if (f.children != null) throw Error(i(60));
            t.innerHTML = u;
          }
        }
        break;
      case "multiple":
        t.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        t.muted = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          n == null ||
          typeof n == "function" ||
          typeof n == "boolean" ||
          typeof n == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (u = bf("" + n)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", u);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        n != null && typeof n != "function" && typeof n != "symbol"
          ? t.setAttribute(u, "" + n)
          : t.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        n && typeof n != "function" && typeof n != "symbol"
          ? t.setAttribute(u, "")
          : t.removeAttribute(u);
        break;
      case "capture":
      case "download":
        n === !0
          ? t.setAttribute(u, "")
          : n !== !1 &&
            n != null &&
            typeof n != "function" &&
            typeof n != "symbol"
          ? t.setAttribute(u, n)
          : t.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        !isNaN(n) &&
        1 <= n
          ? t.setAttribute(u, n)
          : t.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n)
          ? t.removeAttribute(u)
          : t.setAttribute(u, n);
        break;
      case "popover":
        Nt("beforetoggle", t), Nt("toggle", t), _u(t, "popover", n);
        break;
      case "xlinkActuate":
        al(t, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
        break;
      case "xlinkArcrole":
        al(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
        break;
      case "xlinkRole":
        al(t, "http://www.w3.org/1999/xlink", "xlink:role", n);
        break;
      case "xlinkShow":
        al(t, "http://www.w3.org/1999/xlink", "xlink:show", n);
        break;
      case "xlinkTitle":
        al(t, "http://www.w3.org/1999/xlink", "xlink:title", n);
        break;
      case "xlinkType":
        al(t, "http://www.w3.org/1999/xlink", "xlink:type", n);
        break;
      case "xmlBase":
        al(t, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
        break;
      case "xmlLang":
        al(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
        break;
      case "xmlSpace":
        al(t, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
        break;
      case "is":
        _u(t, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) ||
          (u[0] !== "o" && u[0] !== "O") ||
          (u[1] !== "n" && u[1] !== "N")) &&
          ((u = Y1.get(u) || u), _u(t, u, n));
    }
  }
  function th(t, e, u, n, f, c) {
    switch (u) {
      case "style":
        L0(t, n, c);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(i(61));
          if (((u = n.__html), u != null)) {
            if (f.children != null) throw Error(i(60));
            t.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof n == "string"
          ? Qi(t, n)
          : (typeof n == "number" || typeof n == "bigint") && Qi(t, "" + n);
        break;
      case "onScroll":
        n != null && Nt("scroll", t);
        break;
      case "onScrollEnd":
        n != null && Nt("scrollend", t);
        break;
      case "onClick":
        n != null && (t.onclick = ds);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Re.hasOwnProperty(u))
          t: {
            if (
              u[0] === "o" &&
              u[1] === "n" &&
              ((f = u.endsWith("Capture")),
              (e = u.slice(2, f ? u.length - 7 : void 0)),
              (c = t[rt] || null),
              (c = c != null ? c[u] : null),
              typeof c == "function" && t.removeEventListener(e, c, f),
              typeof n == "function")
            ) {
              typeof c != "function" &&
                c !== null &&
                (u in t
                  ? (t[u] = null)
                  : t.hasAttribute(u) && t.removeAttribute(u)),
                t.addEventListener(e, n, f);
              break t;
            }
            u in t
              ? (t[u] = n)
              : n === !0
              ? t.setAttribute(u, "")
              : _u(t, u, n);
          }
    }
  }
  function Ie(t, e, u) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Nt("error", t), Nt("load", t);
        var n = !1,
          f = !1,
          c;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var g = u[c];
            if (g != null)
              switch (c) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  f = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, e));
                default:
                  Jt(t, e, c, g, u, null);
              }
          }
        f && Jt(t, e, "srcSet", u.srcSet, u, null),
          n && Jt(t, e, "src", u.src, u, null);
        return;
      case "input":
        Nt("invalid", t);
        var y = (c = g = f = null),
          E = null,
          z = null;
        for (n in u)
          if (u.hasOwnProperty(n)) {
            var j = u[n];
            if (j != null)
              switch (n) {
                case "name":
                  f = j;
                  break;
                case "type":
                  g = j;
                  break;
                case "checked":
                  E = j;
                  break;
                case "defaultChecked":
                  z = j;
                  break;
                case "value":
                  c = j;
                  break;
                case "defaultValue":
                  y = j;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (j != null) throw Error(i(137, e));
                  break;
                default:
                  Jt(t, e, n, j, u, null);
              }
          }
        q0(t, c, y, E, z, g, f, !1), yf(t);
        return;
      case "select":
        Nt("invalid", t), (n = g = c = null);
        for (f in u)
          if (u.hasOwnProperty(f) && ((y = u[f]), y != null))
            switch (f) {
              case "value":
                c = y;
                break;
              case "defaultValue":
                g = y;
                break;
              case "multiple":
                n = y;
              default:
                Jt(t, e, f, y, u, null);
            }
        (e = c),
          (u = g),
          (t.multiple = !!n),
          e != null ? Vi(t, !!n, e, !1) : u != null && Vi(t, !!n, u, !0);
        return;
      case "textarea":
        Nt("invalid", t), (c = f = n = null);
        for (g in u)
          if (u.hasOwnProperty(g) && ((y = u[g]), y != null))
            switch (g) {
              case "value":
                n = y;
                break;
              case "defaultValue":
                f = y;
                break;
              case "children":
                c = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(i(91));
                break;
              default:
                Jt(t, e, g, y, u, null);
            }
        G0(t, n, f, c), yf(t);
        return;
      case "option":
        for (E in u)
          if (u.hasOwnProperty(E) && ((n = u[E]), n != null))
            switch (E) {
              case "selected":
                t.selected =
                  n && typeof n != "function" && typeof n != "symbol";
                break;
              default:
                Jt(t, e, E, n, u, null);
            }
        return;
      case "dialog":
        Nt("beforetoggle", t), Nt("toggle", t), Nt("cancel", t), Nt("close", t);
        break;
      case "iframe":
      case "object":
        Nt("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < xr.length; n++) Nt(xr[n], t);
        break;
      case "image":
        Nt("error", t), Nt("load", t);
        break;
      case "details":
        Nt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Nt("error", t), Nt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (z in u)
          if (u.hasOwnProperty(z) && ((n = u[z]), n != null))
            switch (z) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, e));
              default:
                Jt(t, e, z, n, u, null);
            }
        return;
      default:
        if (Dc(e)) {
          for (j in u)
            u.hasOwnProperty(j) &&
              ((n = u[j]), n !== void 0 && th(t, e, j, n, u, void 0));
          return;
        }
    }
    for (y in u)
      u.hasOwnProperty(y) && ((n = u[y]), n != null && Jt(t, e, y, n, u, null));
  }
  function sy(t, e, u, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var f = null,
          c = null,
          g = null,
          y = null,
          E = null,
          z = null,
          j = null;
        for (N in u) {
          var Q = u[N];
          if (u.hasOwnProperty(N) && Q != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                E = Q;
              default:
                n.hasOwnProperty(N) || Jt(t, e, N, null, n, Q);
            }
        }
        for (var B in n) {
          var N = n[B];
          if (((Q = u[B]), n.hasOwnProperty(B) && (N != null || Q != null)))
            switch (B) {
              case "type":
                c = N;
                break;
              case "name":
                f = N;
                break;
              case "checked":
                z = N;
                break;
              case "defaultChecked":
                j = N;
                break;
              case "value":
                g = N;
                break;
              case "defaultValue":
                y = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null) throw Error(i(137, e));
                break;
              default:
                N !== Q && Jt(t, e, B, N, n, Q);
            }
        }
        dc(t, g, y, E, z, j, c, f);
        return;
      case "select":
        N = g = y = B = null;
        for (c in u)
          if (((E = u[c]), u.hasOwnProperty(c) && E != null))
            switch (c) {
              case "value":
                break;
              case "multiple":
                N = E;
              default:
                n.hasOwnProperty(c) || Jt(t, e, c, null, n, E);
            }
        for (f in n)
          if (
            ((c = n[f]),
            (E = u[f]),
            n.hasOwnProperty(f) && (c != null || E != null))
          )
            switch (f) {
              case "value":
                B = c;
                break;
              case "defaultValue":
                y = c;
                break;
              case "multiple":
                g = c;
              default:
                c !== E && Jt(t, e, f, c, n, E);
            }
        (e = y),
          (u = g),
          (n = N),
          B != null
            ? Vi(t, !!u, B, !1)
            : !!n != !!u &&
              (e != null ? Vi(t, !!u, e, !0) : Vi(t, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        N = B = null;
        for (y in u)
          if (
            ((f = u[y]),
            u.hasOwnProperty(y) && f != null && !n.hasOwnProperty(y))
          )
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                Jt(t, e, y, null, n, f);
            }
        for (g in n)
          if (
            ((f = n[g]),
            (c = u[g]),
            n.hasOwnProperty(g) && (f != null || c != null))
          )
            switch (g) {
              case "value":
                B = f;
                break;
              case "defaultValue":
                N = f;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(i(91));
                break;
              default:
                f !== c && Jt(t, e, g, f, n, c);
            }
        X0(t, B, N);
        return;
      case "option":
        for (var gt in u)
          if (
            ((B = u[gt]),
            u.hasOwnProperty(gt) && B != null && !n.hasOwnProperty(gt))
          )
            switch (gt) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Jt(t, e, gt, null, n, B);
            }
        for (E in n)
          if (
            ((B = n[E]),
            (N = u[E]),
            n.hasOwnProperty(E) && B !== N && (B != null || N != null))
          )
            switch (E) {
              case "selected":
                t.selected =
                  B && typeof B != "function" && typeof B != "symbol";
                break;
              default:
                Jt(t, e, E, B, n, N);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var dt in u)
          (B = u[dt]),
            u.hasOwnProperty(dt) &&
              B != null &&
              !n.hasOwnProperty(dt) &&
              Jt(t, e, dt, null, n, B);
        for (z in n)
          if (
            ((B = n[z]),
            (N = u[z]),
            n.hasOwnProperty(z) && B !== N && (B != null || N != null))
          )
            switch (z) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (B != null) throw Error(i(137, e));
                break;
              default:
                Jt(t, e, z, B, n, N);
            }
        return;
      default:
        if (Dc(e)) {
          for (var $t in u)
            (B = u[$t]),
              u.hasOwnProperty($t) &&
                B !== void 0 &&
                !n.hasOwnProperty($t) &&
                th(t, e, $t, void 0, n, B);
          for (j in n)
            (B = n[j]),
              (N = u[j]),
              !n.hasOwnProperty(j) ||
                B === N ||
                (B === void 0 && N === void 0) ||
                th(t, e, j, B, n, N);
          return;
        }
    }
    for (var O in u)
      (B = u[O]),
        u.hasOwnProperty(O) &&
          B != null &&
          !n.hasOwnProperty(O) &&
          Jt(t, e, O, null, n, B);
    for (Q in n)
      (B = n[Q]),
        (N = u[Q]),
        !n.hasOwnProperty(Q) ||
          B === N ||
          (B == null && N == null) ||
          Jt(t, e, Q, B, n, N);
  }
  var eh = null,
    uh = null;
  function _s(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function jD(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function LD(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function lh(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var nh = null;
  function cy() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === nh
        ? !1
        : ((nh = t), !0)
      : ((nh = null), !1);
  }
  var VD = typeof setTimeout == "function" ? setTimeout : void 0,
    oy = typeof clearTimeout == "function" ? clearTimeout : void 0,
    QD = typeof Promise == "function" ? Promise : void 0,
    hy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof QD < "u"
        ? function (t) {
            return QD.resolve(null).then(t).catch(dy);
          }
        : VD;
  function dy(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Gn(t) {
    return t === "head";
  }
  function ZD(t, e) {
    var u = e,
      n = 0,
      f = 0;
    do {
      var c = u.nextSibling;
      if ((t.removeChild(u), c && c.nodeType === 8))
        if (((u = c.data), u === "/$")) {
          if (0 < n && 8 > n) {
            u = n;
            var g = t.ownerDocument;
            if ((u & 1 && Ar(g.documentElement), u & 2 && Ar(g.body), u & 4))
              for (u = g.head, Ar(u), g = u.firstChild; g; ) {
                var y = g.nextSibling,
                  E = g.nodeName;
                g[ge] ||
                  E === "SCRIPT" ||
                  E === "STYLE" ||
                  (E === "LINK" && g.rel.toLowerCase() === "stylesheet") ||
                  u.removeChild(g),
                  (g = y);
              }
          }
          if (f === 0) {
            t.removeChild(c), wr(e);
            return;
          }
          f--;
        } else
          u === "$" || u === "$?" || u === "$!"
            ? f++
            : (n = u.charCodeAt(0) - 48);
      else n = 0;
      u = c;
    } while (u);
    wr(e);
  }
  function ih(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var u = e;
      switch (((e = e.nextSibling), u.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ih(u), ee(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(u);
    }
  }
  function _y(t, e, u, n) {
    for (; t.nodeType === 1; ) {
      var f = u;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!n && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (n) {
        if (!t[ge])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((c = t.getAttribute("rel")),
                c === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                c !== f.rel ||
                t.getAttribute("href") !==
                  (f.href == null || f.href === "" ? null : f.href) ||
                t.getAttribute("crossorigin") !==
                  (f.crossOrigin == null ? null : f.crossOrigin) ||
                t.getAttribute("title") !== (f.title == null ? null : f.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((c = t.getAttribute("src")),
                (c !== (f.src == null ? null : f.src) ||
                  t.getAttribute("type") !== (f.type == null ? null : f.type) ||
                  t.getAttribute("crossorigin") !==
                    (f.crossOrigin == null ? null : f.crossOrigin)) &&
                  c &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var c = f.name == null ? null : "" + f.name;
        if (f.type === "hidden" && t.getAttribute("name") === c) return t;
      } else return t;
      if (((t = Ml(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Dy(t, e, u) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !u) ||
        ((t = Ml(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function ah(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function gy(t, e) {
    var u = t.ownerDocument;
    if (t.data !== "$?" || u.readyState === "complete") e();
    else {
      var n = function () {
        e(), u.removeEventListener("DOMContentLoaded", n);
      };
      u.addEventListener("DOMContentLoaded", n), (t._reactRetry = n);
    }
  }
  function Ml(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var rh = null;
  function kD(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var u = t.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (e === 0) return t;
          e--;
        } else u === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function KD(t, e, u) {
    switch (((e = _s(u)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(i(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(i(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(i(454));
        return t;
      default:
        throw Error(i(451));
    }
  }
  function Ar(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    ee(t);
  }
  var gl = new Map(),
    JD = new Set();
  function Ds(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var Dn = L.d;
  L.d = { f: py, r: my, D: yy, C: vy, L: by, m: Sy, X: Ey, S: Ty, M: xy };
  function py() {
    var t = Dn.f(),
      e = as();
    return t || e;
  }
  function my(t) {
    var e = Yt(t);
    e !== null && e.tag === 5 && e.type === "form" ? D_(e) : Dn.r(t);
  }
  var va = typeof document > "u" ? null : document;
  function $D(t, e, u) {
    var n = va;
    if (n && typeof e == "string" && e) {
      var f = sl(e);
      (f = 'link[rel="' + t + '"][href="' + f + '"]'),
        typeof u == "string" && (f += '[crossorigin="' + u + '"]'),
        JD.has(f) ||
          (JD.add(f),
          (t = { rel: t, crossOrigin: u, href: e }),
          n.querySelector(f) === null &&
            ((e = n.createElement("link")),
            Ie(e, "link", t),
            Xt(e),
            n.head.appendChild(e)));
    }
  }
  function yy(t) {
    Dn.D(t), $D("dns-prefetch", t, null);
  }
  function vy(t, e) {
    Dn.C(t, e), $D("preconnect", t, e);
  }
  function by(t, e, u) {
    Dn.L(t, e, u);
    var n = va;
    if (n && t && e) {
      var f = 'link[rel="preload"][as="' + sl(e) + '"]';
      e === "image" && u && u.imageSrcSet
        ? ((f += '[imagesrcset="' + sl(u.imageSrcSet) + '"]'),
          typeof u.imageSizes == "string" &&
            (f += '[imagesizes="' + sl(u.imageSizes) + '"]'))
        : (f += '[href="' + sl(t) + '"]');
      var c = f;
      switch (e) {
        case "style":
          c = ba(t);
          break;
        case "script":
          c = Sa(t);
      }
      gl.has(c) ||
        ((t = m(
          {
            rel: "preload",
            href: e === "image" && u && u.imageSrcSet ? void 0 : t,
            as: e,
          },
          u
        )),
        gl.set(c, t),
        n.querySelector(f) !== null ||
          (e === "style" && n.querySelector(Or(c))) ||
          (e === "script" && n.querySelector(Mr(c))) ||
          ((e = n.createElement("link")),
          Ie(e, "link", t),
          Xt(e),
          n.head.appendChild(e)));
    }
  }
  function Sy(t, e) {
    Dn.m(t, e);
    var u = va;
    if (u && t) {
      var n = e && typeof e.as == "string" ? e.as : "script",
        f =
          'link[rel="modulepreload"][as="' + sl(n) + '"][href="' + sl(t) + '"]',
        c = f;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = Sa(t);
      }
      if (
        !gl.has(c) &&
        ((t = m({ rel: "modulepreload", href: t }, e)),
        gl.set(c, t),
        u.querySelector(f) === null)
      ) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Mr(c))) return;
        }
        (n = u.createElement("link")),
          Ie(n, "link", t),
          Xt(n),
          u.head.appendChild(n);
      }
    }
  }
  function Ty(t, e, u) {
    Dn.S(t, e, u);
    var n = va;
    if (n && t) {
      var f = Vt(n).hoistableStyles,
        c = ba(t);
      e = e || "default";
      var g = f.get(c);
      if (!g) {
        var y = { loading: 0, preload: null };
        if ((g = n.querySelector(Or(c)))) y.loading = 5;
        else {
          (t = m({ rel: "stylesheet", href: t, "data-precedence": e }, u)),
            (u = gl.get(c)) && fh(t, u);
          var E = (g = n.createElement("link"));
          Xt(E),
            Ie(E, "link", t),
            (E._p = new Promise(function (z, j) {
              (E.onload = z), (E.onerror = j);
            })),
            E.addEventListener("load", function () {
              y.loading |= 1;
            }),
            E.addEventListener("error", function () {
              y.loading |= 2;
            }),
            (y.loading |= 4),
            gs(g, e, n);
        }
        (g = { type: "stylesheet", instance: g, count: 1, state: y }),
          f.set(c, g);
      }
    }
  }
  function Ey(t, e) {
    Dn.X(t, e);
    var u = va;
    if (u && t) {
      var n = Vt(u).hoistableScripts,
        f = Sa(t),
        c = n.get(f);
      c ||
        ((c = u.querySelector(Mr(f))),
        c ||
          ((t = m({ src: t, async: !0 }, e)),
          (e = gl.get(f)) && sh(t, e),
          (c = u.createElement("script")),
          Xt(c),
          Ie(c, "link", t),
          u.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        n.set(f, c));
    }
  }
  function xy(t, e) {
    Dn.M(t, e);
    var u = va;
    if (u && t) {
      var n = Vt(u).hoistableScripts,
        f = Sa(t),
        c = n.get(f);
      c ||
        ((c = u.querySelector(Mr(f))),
        c ||
          ((t = m({ src: t, async: !0, type: "module" }, e)),
          (e = gl.get(f)) && sh(t, e),
          (c = u.createElement("script")),
          Xt(c),
          Ie(c, "link", t),
          u.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        n.set(f, c));
    }
  }
  function WD(t, e, u, n) {
    var f = (f = it.current) ? Ds(f) : null;
    if (!f) throw Error(i(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string"
          ? ((e = ba(u.href)),
            (u = Vt(f).hoistableStyles),
            (n = u.get(e)),
            n ||
              ((n = { type: "style", instance: null, count: 0, state: null }),
              u.set(e, n)),
            n)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          u.rel === "stylesheet" &&
          typeof u.href == "string" &&
          typeof u.precedence == "string"
        ) {
          t = ba(u.href);
          var c = Vt(f).hoistableStyles,
            g = c.get(t);
          if (
            (g ||
              ((f = f.ownerDocument || f),
              (g = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              c.set(t, g),
              (c = f.querySelector(Or(t))) &&
                !c._p &&
                ((g.instance = c), (g.state.loading = 5)),
              gl.has(t) ||
                ((u = {
                  rel: "preload",
                  as: "style",
                  href: u.href,
                  crossOrigin: u.crossOrigin,
                  integrity: u.integrity,
                  media: u.media,
                  hrefLang: u.hrefLang,
                  referrerPolicy: u.referrerPolicy,
                }),
                gl.set(t, u),
                c || Cy(f, t, u, g.state))),
            e && n === null)
          )
            throw Error(i(528, ""));
          return g;
        }
        if (e && n !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return (
          (e = u.async),
          (u = u.src),
          typeof u == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Sa(u)),
              (u = Vt(f).hoistableScripts),
              (n = u.get(e)),
              n ||
                ((n = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                u.set(e, n)),
              n)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, t));
    }
  }
  function ba(t) {
    return 'href="' + sl(t) + '"';
  }
  function Or(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function PD(t) {
    return m({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Cy(t, e, u, n) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (n.loading = 1)
      : ((e = t.createElement("link")),
        (n.preload = e),
        e.addEventListener("load", function () {
          return (n.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (n.loading |= 2);
        }),
        Ie(e, "link", u),
        Xt(e),
        t.head.appendChild(e));
  }
  function Sa(t) {
    return '[src="' + sl(t) + '"]';
  }
  function Mr(t) {
    return "script[async]" + t;
  }
  function ID(t, e, u) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var n = t.querySelector('style[data-href~="' + sl(u.href) + '"]');
          if (n) return (e.instance = n), Xt(n), n;
          var f = m({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null,
          });
          return (
            (n = (t.ownerDocument || t).createElement("style")),
            Xt(n),
            Ie(n, "style", f),
            gs(n, u.precedence, t),
            (e.instance = n)
          );
        case "stylesheet":
          f = ba(u.href);
          var c = t.querySelector(Or(f));
          if (c) return (e.state.loading |= 4), (e.instance = c), Xt(c), c;
          (n = PD(u)),
            (f = gl.get(f)) && fh(n, f),
            (c = (t.ownerDocument || t).createElement("link")),
            Xt(c);
          var g = c;
          return (
            (g._p = new Promise(function (y, E) {
              (g.onload = y), (g.onerror = E);
            })),
            Ie(c, "link", n),
            (e.state.loading |= 4),
            gs(c, u.precedence, t),
            (e.instance = c)
          );
        case "script":
          return (
            (c = Sa(u.src)),
            (f = t.querySelector(Mr(c)))
              ? ((e.instance = f), Xt(f), f)
              : ((n = u),
                (f = gl.get(c)) && ((n = m({}, u)), sh(n, f)),
                (t = t.ownerDocument || t),
                (f = t.createElement("script")),
                Xt(f),
                Ie(f, "link", n),
                t.head.appendChild(f),
                (e.instance = f))
          );
        case "void":
          return null;
        default:
          throw Error(i(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((n = e.instance), (e.state.loading |= 4), gs(n, u.precedence, t));
    return e.instance;
  }
  function gs(t, e, u) {
    for (
      var n = u.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        f = n.length ? n[n.length - 1] : null,
        c = f,
        g = 0;
      g < n.length;
      g++
    ) {
      var y = n[g];
      if (y.dataset.precedence === e) c = y;
      else if (c !== f) break;
    }
    c
      ? c.parentNode.insertBefore(t, c.nextSibling)
      : ((e = u.nodeType === 9 ? u.head : u), e.insertBefore(t, e.firstChild));
  }
  function fh(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function sh(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var ps = null;
  function tg(t, e, u) {
    if (ps === null) {
      var n = new Map(),
        f = (ps = new Map());
      f.set(u, n);
    } else (f = ps), (n = f.get(u)), n || ((n = new Map()), f.set(u, n));
    if (n.has(t)) return n;
    for (
      n.set(t, null), u = u.getElementsByTagName(t), f = 0;
      f < u.length;
      f++
    ) {
      var c = u[f];
      if (
        !(
          c[ge] ||
          c[W] ||
          (t === "link" && c.getAttribute("rel") === "stylesheet")
        ) &&
        c.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var g = c.getAttribute(e) || "";
        g = t + g;
        var y = n.get(g);
        y ? y.push(c) : n.set(g, [c]);
      }
    }
    return n;
  }
  function eg(t, e, u) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        u,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function Ay(t, e, u) {
    if (u === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function ug(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var zr = null;
  function Oy() {}
  function My(t, e, u) {
    if (zr === null) throw Error(i(475));
    var n = zr;
    if (
      e.type === "stylesheet" &&
      (typeof u.media != "string" || matchMedia(u.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var f = ba(u.href),
          c = t.querySelector(Or(f));
        if (c) {
          (t = c._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (n.count++, (n = ms.bind(n)), t.then(n, n)),
            (e.state.loading |= 4),
            (e.instance = c),
            Xt(c);
          return;
        }
        (c = t.ownerDocument || t),
          (u = PD(u)),
          (f = gl.get(f)) && fh(u, f),
          (c = c.createElement("link")),
          Xt(c);
        var g = c;
        (g._p = new Promise(function (y, E) {
          (g.onload = y), (g.onerror = E);
        })),
          Ie(c, "link", u),
          (e.instance = c);
      }
      n.stylesheets === null && (n.stylesheets = new Map()),
        n.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (n.count++,
          (e = ms.bind(n)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function zy() {
    if (zr === null) throw Error(i(475));
    var t = zr;
    return (
      t.stylesheets && t.count === 0 && ch(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var u = setTimeout(function () {
              if ((t.stylesheets && ch(t, t.stylesheets), t.unsuspend)) {
                var n = t.unsuspend;
                (t.unsuspend = null), n();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(u);
              }
            );
          }
        : null
    );
  }
  function ms() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) ch(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var ys = null;
  function ch(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (ys = new Map()),
        e.forEach(Ry, t),
        (ys = null),
        ms.call(t));
  }
  function Ry(t, e) {
    if (!(e.state.loading & 4)) {
      var u = ys.get(t);
      if (u) var n = u.get(null);
      else {
        (u = new Map()), ys.set(t, u);
        for (
          var f = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            c = 0;
          c < f.length;
          c++
        ) {
          var g = f[c];
          (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") &&
            (u.set(g.dataset.precedence, g), (n = g));
        }
        n && u.set(null, n);
      }
      (f = e.instance),
        (g = f.getAttribute("data-precedence")),
        (c = u.get(g) || n),
        c === n && u.set(null, f),
        u.set(g, f),
        this.count++,
        (n = ms.bind(this)),
        f.addEventListener("load", n),
        f.addEventListener("error", n),
        c
          ? c.parentNode.insertBefore(f, c.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(f, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var Rr = {
    $$typeof: X,
    Provider: null,
    Consumer: null,
    _currentValue: tt,
    _currentValue2: tt,
    _threadCount: 0,
  };
  function By(t, e, u, n, f, c, g, y) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = du(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = du(0)),
      (this.hiddenUpdates = du(null)),
      (this.identifierPrefix = n),
      (this.onUncaughtError = f),
      (this.onCaughtError = c),
      (this.onRecoverableError = g),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = y),
      (this.incompleteTransitions = new Map());
  }
  function lg(t, e, u, n, f, c, g, y, E, z, j, Q) {
    return (
      (t = new By(t, e, u, g, y, E, z, Q)),
      (e = 1),
      c === !0 && (e |= 24),
      (c = ju(3, null, null, e)),
      (t.current = c),
      (c.stateNode = t),
      (e = Vc()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (c.memoizedState = { element: n, isDehydrated: u, cache: e }),
      Kc(c),
      t
    );
  }
  function ng(t) {
    return t ? ((t = Ii), t) : Ii;
  }
  function ig(t, e, u, n, f, c) {
    (f = ng(f)),
      n.context === null ? (n.context = f) : (n.pendingContext = f),
      (n = On(e)),
      (n.payload = { element: u }),
      (c = c === void 0 ? null : c),
      c !== null && (n.callback = c),
      (u = Mn(t, n, e)),
      u !== null && (ku(u, t, e), rr(u, t, e));
  }
  function ag(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var u = t.retryLane;
      t.retryLane = u !== 0 && u < e ? u : e;
    }
  }
  function oh(t, e) {
    ag(t, e), (t = t.alternate) && ag(t, e);
  }
  function rg(t) {
    if (t.tag === 13) {
      var e = Pi(t, 67108864);
      e !== null && ku(e, t, 67108864), oh(t, 67108864);
    }
  }
  var vs = !0;
  function Ny(t, e, u, n) {
    var f = R.T;
    R.T = null;
    var c = L.p;
    try {
      (L.p = 2), hh(t, e, u, n);
    } finally {
      (L.p = c), (R.T = f);
    }
  }
  function Uy(t, e, u, n) {
    var f = R.T;
    R.T = null;
    var c = L.p;
    try {
      (L.p = 8), hh(t, e, u, n);
    } finally {
      (L.p = c), (R.T = f);
    }
  }
  function hh(t, e, u, n) {
    if (vs) {
      var f = dh(n);
      if (f === null) Io(t, e, n, bs, u), sg(t, n);
      else if (Fy(f, t, e, u, n)) n.stopPropagation();
      else if ((sg(t, n), e & 4 && -1 < wy.indexOf(t))) {
        for (; f !== null; ) {
          var c = Yt(f);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (((c = c.stateNode), c.current.memoizedState.isDehydrated)) {
                  var g = xu(c.pendingLanes);
                  if (g !== 0) {
                    var y = c;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; g; ) {
                      var E = 1 << (31 - te(g));
                      (y.entanglements[1] |= E), (g &= ~E);
                    }
                    Hl(c), (Zt & 6) === 0 && ((ns = w() + 500), Er(0));
                  }
                }
                break;
              case 13:
                (y = Pi(c, 2)), y !== null && ku(y, c, 2), as(), oh(c, 2);
            }
          if (((c = dh(n)), c === null && Io(t, e, n, bs, u), c === f)) break;
          f = c;
        }
        f !== null && n.stopPropagation();
      } else Io(t, e, n, null, u);
    }
  }
  function dh(t) {
    return (t = pc(t)), _h(t);
  }
  var bs = null;
  function _h(t) {
    if (((bs = null), (t = jt(t)), t !== null)) {
      var e = s(t);
      if (e === null) t = null;
      else {
        var u = e.tag;
        if (u === 13) {
          if (((t = o(e)), t !== null)) return t;
          t = null;
        } else if (u === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (bs = t), null;
  }
  function fg(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (hu()) {
          case il:
            return 2;
          case Sl:
            return 8;
          case It:
          case Tl:
            return 32;
          case El:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Dh = !1,
    jn = null,
    Ln = null,
    Vn = null,
    Br = new Map(),
    Nr = new Map(),
    Qn = [],
    wy =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function sg(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        jn = null;
        break;
      case "dragenter":
      case "dragleave":
        Ln = null;
        break;
      case "mouseover":
      case "mouseout":
        Vn = null;
        break;
      case "pointerover":
      case "pointerout":
        Br.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Nr.delete(e.pointerId);
    }
  }
  function Ur(t, e, u, n, f, c) {
    return t === null || t.nativeEvent !== c
      ? ((t = {
          blockedOn: e,
          domEventName: u,
          eventSystemFlags: n,
          nativeEvent: c,
          targetContainers: [f],
        }),
        e !== null && ((e = Yt(e)), e !== null && rg(e)),
        t)
      : ((t.eventSystemFlags |= n),
        (e = t.targetContainers),
        f !== null && e.indexOf(f) === -1 && e.push(f),
        t);
  }
  function Fy(t, e, u, n, f) {
    switch (e) {
      case "focusin":
        return (jn = Ur(jn, t, e, u, n, f)), !0;
      case "dragenter":
        return (Ln = Ur(Ln, t, e, u, n, f)), !0;
      case "mouseover":
        return (Vn = Ur(Vn, t, e, u, n, f)), !0;
      case "pointerover":
        var c = f.pointerId;
        return Br.set(c, Ur(Br.get(c) || null, t, e, u, n, f)), !0;
      case "gotpointercapture":
        return (
          (c = f.pointerId), Nr.set(c, Ur(Nr.get(c) || null, t, e, u, n, f)), !0
        );
    }
    return !1;
  }
  function cg(t) {
    var e = jt(t.target);
    if (e !== null) {
      var u = s(e);
      if (u !== null) {
        if (((e = u.tag), e === 13)) {
          if (((e = o(u)), e !== null)) {
            (t.blockedOn = e),
              ht(t.priority, function () {
                if (u.tag === 13) {
                  var n = Zu();
                  n = Yu(n);
                  var f = Pi(u, n);
                  f !== null && ku(f, u, n), oh(u, n);
                }
              });
            return;
          }
        } else if (e === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Ss(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var u = dh(t.nativeEvent);
      if (u === null) {
        u = t.nativeEvent;
        var n = new u.constructor(u.type, u);
        (gc = n), u.target.dispatchEvent(n), (gc = null);
      } else return (e = Yt(u)), e !== null && rg(e), (t.blockedOn = u), !1;
      e.shift();
    }
    return !0;
  }
  function og(t, e, u) {
    Ss(t) && u.delete(e);
  }
  function Hy() {
    (Dh = !1),
      jn !== null && Ss(jn) && (jn = null),
      Ln !== null && Ss(Ln) && (Ln = null),
      Vn !== null && Ss(Vn) && (Vn = null),
      Br.forEach(og),
      Nr.forEach(og);
  }
  function Ts(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Dh ||
        ((Dh = !0),
        d.unstable_scheduleCallback(d.unstable_NormalPriority, Hy)));
  }
  var Es = null;
  function hg(t) {
    Es !== t &&
      ((Es = t),
      d.unstable_scheduleCallback(d.unstable_NormalPriority, function () {
        Es === t && (Es = null);
        for (var e = 0; e < t.length; e += 3) {
          var u = t[e],
            n = t[e + 1],
            f = t[e + 2];
          if (typeof n != "function") {
            if (_h(n || u) === null) continue;
            break;
          }
          var c = Yt(u);
          c !== null &&
            (t.splice(e, 3),
            (e -= 3),
            _o(c, { pending: !0, data: f, method: u.method, action: n }, n, f));
        }
      }));
  }
  function wr(t) {
    function e(E) {
      return Ts(E, t);
    }
    jn !== null && Ts(jn, t),
      Ln !== null && Ts(Ln, t),
      Vn !== null && Ts(Vn, t),
      Br.forEach(e),
      Nr.forEach(e);
    for (var u = 0; u < Qn.length; u++) {
      var n = Qn[u];
      n.blockedOn === t && (n.blockedOn = null);
    }
    for (; 0 < Qn.length && ((u = Qn[0]), u.blockedOn === null); )
      cg(u), u.blockedOn === null && Qn.shift();
    if (((u = (t.ownerDocument || t).$$reactFormReplay), u != null))
      for (n = 0; n < u.length; n += 3) {
        var f = u[n],
          c = u[n + 1],
          g = f[rt] || null;
        if (typeof c == "function") g || hg(u);
        else if (g) {
          var y = null;
          if (c && c.hasAttribute("formAction")) {
            if (((f = c), (g = c[rt] || null))) y = g.formAction;
            else if (_h(f) !== null) continue;
          } else y = g.action;
          typeof y == "function" ? (u[n + 1] = y) : (u.splice(n, 3), (n -= 3)),
            hg(u);
        }
      }
  }
  function gh(t) {
    this._internalRoot = t;
  }
  (xs.prototype.render = gh.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(i(409));
      var u = e.current,
        n = Zu();
      ig(u, n, t, e, null, null);
    }),
    (xs.prototype.unmount = gh.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          ig(t.current, 2, null, t, null, null), as(), (e[at] = null);
        }
      });
  function xs(t) {
    this._internalRoot = t;
  }
  xs.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = yt();
      t = { blockedOn: null, target: t, priority: e };
      for (var u = 0; u < Qn.length && e !== 0 && e < Qn[u].priority; u++);
      Qn.splice(u, 0, t), u === 0 && cg(t);
    }
  };
  var dg = l.version;
  if (dg !== "19.1.0") throw Error(i(527, dg, "19.1.0"));
  L.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(i(188))
        : ((t = Object.keys(t).join(",")), Error(i(268, t)));
    return (
      (t = D(e)),
      (t = t !== null ? _(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Yy = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Cs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Cs.isDisabled && Cs.supportsFiber)
      try {
        (Tu = Cs.inject(Yy)), (wt = Cs);
      } catch {}
  }
  return (
    (Hr.createRoot = function (t, e) {
      if (!r(t)) throw Error(i(299));
      var u = !1,
        n = "",
        f = M_,
        c = z_,
        g = R_,
        y = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (u = !0),
          e.identifierPrefix !== void 0 && (n = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (f = e.onUncaughtError),
          e.onCaughtError !== void 0 && (c = e.onCaughtError),
          e.onRecoverableError !== void 0 && (g = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (y = e.unstable_transitionCallbacks)),
        (e = lg(t, 1, !1, null, null, u, n, f, c, g, y, null)),
        (t[at] = e.current),
        Po(t),
        new gh(e)
      );
    }),
    (Hr.hydrateRoot = function (t, e, u) {
      if (!r(t)) throw Error(i(299));
      var n = !1,
        f = "",
        c = M_,
        g = z_,
        y = R_,
        E = null,
        z = null;
      return (
        u != null &&
          (u.unstable_strictMode === !0 && (n = !0),
          u.identifierPrefix !== void 0 && (f = u.identifierPrefix),
          u.onUncaughtError !== void 0 && (c = u.onUncaughtError),
          u.onCaughtError !== void 0 && (g = u.onCaughtError),
          u.onRecoverableError !== void 0 && (y = u.onRecoverableError),
          u.unstable_transitionCallbacks !== void 0 &&
            (E = u.unstable_transitionCallbacks),
          u.formState !== void 0 && (z = u.formState)),
        (e = lg(t, 1, !0, e, u ?? null, n, f, c, g, y, E, z)),
        (e.context = ng(null)),
        (u = e.current),
        (n = Zu()),
        (n = Yu(n)),
        (f = On(n)),
        (f.callback = null),
        Mn(u, f, n),
        (u = n),
        (e.current.lanes = u),
        Je(e, u),
        Hl(e),
        (t[at] = e.current),
        Po(t),
        new xs(e)
      );
    }),
    (Hr.version = "19.1.0"),
    Hr
  );
}
var Tg;
function Ky() {
  if (Tg) return mh.exports;
  Tg = 1;
  function d() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d);
      } catch (l) {
        console.error(l);
      }
  }
  return d(), (mh.exports = ky()), mh.exports;
}
var Jy = Ky(),
  re = c0();
const $y = ({ text: d, activeTab: l, index: a }) =>
    et.jsxs("a", {
      href: `#${d.replace(" ", "_").replace(" ", "_")}`,
      className: `NavBtn ${l === a + 1 && `NavBtn_${a + 1} NavBtn_activated`}`,
      children: [
        et.jsx("div", { className: "NavBtn_text", children: d }),
        et.jsx("div", {
          className: "NavBtn_anim free_img ",
          children: et.jsx("div", {
            className: `NavBtn_anim_black ${
              l === a + 1 && `NavBtn_anim_black_${a + 1}`
            }`,
          }),
        }),
        et.jsx("div", {
          className: "NavBtn_anim free_img",
          children: et.jsx("div", { className: "NavBtn_anim_white" }),
        }),
      ],
    }),
  Wy = ({ activeTab: d, secactiveTab: l, theactiveTab: a }) => {
    const i = [
      { text: "ABOUT" },
      { text: "HOW TO BUY" },
      { text: "TOKENOMICS" },
      { text: "SOCIALS" },
    ];
    return et.jsx("div", {
      className: "Nav",
      children: i.map((r, s) =>
        et.jsx($y, { index: s, text: r.text, activeTab: d }, s)
      ),
    });
  },
  Py = ({ index: d, title: l, description: a, currentSlide: i }) =>
    et.jsx("div", {
      className: "AboutSliderItem_wrapper free_img",
      style: {
        transform: `translate(${
          window.innerWidth > 700 ? (i - d) * 1200 * -1 : 0
        }px,0px) `,
        opacity: window.innerWidth > 700 ? (i === d ? 1 : 0.5) : 1,
        filter:
          window.innerWidth > 700 ? `blur(${i === d ? 0 : 10}px)` : "blur(0px)",
      },
      children: et.jsxs("div", {
        className: "AboutSliderItem ",
        children: [
          et.jsxs("div", {
            className: "AboutSliderItem__img",
            children: [
              et.jsx("div", {
                className: "AboutSliderItem__img_wrapper free_img",
                children: et.jsx("img", {
                  src: `/img/dogs/${d}.webp`,
                  alt: "",
                  className: `img ${
                    d === 1
                      ? "img1"
                      : d === 2
                      ? "img2"
                      : d === 3
                      ? "img3"
                      : d === 4
                      ? "img4"
                      : ""
                  }`,
                }),
              }),
              et.jsxs("div", {
                className: "AboutSliderItem__title free_img",
                children: [
                  et.jsx("div", {
                    className: "AboutSliderItem__title_index",
                    children: d,
                  }),
                  et.jsx("div", {
                    className: `AboutSliderItem__title_title  AboutSliderItem__title_title_${d}`,
                    children: l,
                  }),
                ],
              }),
            ],
          }),
          et.jsx("div", {
            className: "AboutSliderItem__description",
            children: a,
          }),
        ],
      }),
    });
function gn(d) {
  if (d === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return d;
}
function rp(d, l) {
  (d.prototype = Object.create(l.prototype)),
    (d.prototype.constructor = d),
    (d.__proto__ = l);
}
/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var el = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  Ha = { duration: 0.5, overwrite: !1, delay: 0 },
  o0,
  eu,
  ce,
  Ll = 1e8,
  su = 1 / Ll,
  Yh = Math.PI * 2,
  Iy = Yh / 4,
  tv = 0,
  fp = Math.sqrt,
  ev = Math.cos,
  uv = Math.sin,
  Ke = function (l) {
    return typeof l == "string";
  },
  be = function (l) {
    return typeof l == "function";
  },
  bn = function (l) {
    return typeof l == "number";
  },
  h0 = function (l) {
    return typeof l > "u";
  },
  Zl = function (l) {
    return typeof l == "object";
  },
  Bu = function (l) {
    return l !== !1;
  },
  d0 = function () {
    return typeof window < "u";
  },
  As = function (l) {
    return be(l) || Ke(l);
  },
  sp =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  cu = Array.isArray,
  qh = /(?:-?\.?\d|\.)+/gi,
  cp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Oa = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Th = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  op = /[+-]=-?[.\d]+/,
  hp = /[^,'"\[\]\s]+/gi,
  lv = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  de,
  Yl,
  Xh,
  _0,
  ul = {},
  Ws = {},
  dp,
  _p = function (l) {
    return (Ws = Ya(l, ul)) && Fu;
  },
  D0 = function (l, a) {
    return console.warn(
      "Invalid property",
      l,
      "set to",
      a,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  ff = function (l, a) {
    return !a && console.warn(l);
  },
  Dp = function (l, a) {
    return (l && (ul[l] = a) && Ws && (Ws[l] = a)) || ul;
  },
  sf = function () {
    return 0;
  },
  nv = { suppressEvents: !0, isStart: !0, kill: !1 },
  js = { suppressEvents: !0, kill: !1 },
  iv = { suppressEvents: !0 },
  g0 = {},
  In = [],
  Gh = {},
  gp,
  $u = {},
  Eh = {},
  Eg = 30,
  Ls = [],
  p0 = "",
  m0 = function (l) {
    var a = l[0],
      i,
      r;
    if ((Zl(a) || be(a) || (l = [l]), !(i = (a._gsap || {}).harness))) {
      for (r = Ls.length; r-- && !Ls[r].targetTest(a); );
      i = Ls[r];
    }
    for (r = l.length; r--; )
      (l[r] && (l[r]._gsap || (l[r]._gsap = new Xp(l[r], i)))) ||
        l.splice(r, 1);
    return l;
  },
  Ri = function (l) {
    return l._gsap || m0(vl(l))[0]._gsap;
  },
  pp = function (l, a, i) {
    return (i = l[a]) && be(i)
      ? l[a]()
      : (h0(i) && l.getAttribute && l.getAttribute(a)) || i;
  },
  Nu = function (l, a) {
    return (l = l.split(",")).forEach(a) || l;
  },
  xe = function (l) {
    return Math.round(l * 1e5) / 1e5 || 0;
  },
  Fe = function (l) {
    return Math.round(l * 1e7) / 1e7 || 0;
  },
  Ra = function (l, a) {
    var i = a.charAt(0),
      r = parseFloat(a.substr(2));
    return (
      (l = parseFloat(l)),
      i === "+" ? l + r : i === "-" ? l - r : i === "*" ? l * r : l / r
    );
  },
  av = function (l, a) {
    for (var i = a.length, r = 0; l.indexOf(a[r]) < 0 && ++r < i; );
    return r < i;
  },
  Ps = function () {
    var l = In.length,
      a = In.slice(0),
      i,
      r;
    for (Gh = {}, In.length = 0, i = 0; i < l; i++)
      (r = a[i]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
  },
  mp = function (l, a, i, r) {
    In.length && !eu && Ps(),
      l.render(a, i, eu && a < 0 && (l._initted || l._startAt)),
      In.length && !eu && Ps();
  },
  yp = function (l) {
    var a = parseFloat(l);
    return (a || a === 0) && (l + "").match(hp).length < 2
      ? a
      : Ke(l)
      ? l.trim()
      : l;
  },
  vp = function (l) {
    return l;
  },
  ll = function (l, a) {
    for (var i in a) i in l || (l[i] = a[i]);
    return l;
  },
  rv = function (l) {
    return function (a, i) {
      for (var r in i)
        r in a || (r === "duration" && l) || r === "ease" || (a[r] = i[r]);
    };
  },
  Ya = function (l, a) {
    for (var i in a) l[i] = a[i];
    return l;
  },
  xg = function d(l, a) {
    for (var i in a)
      i !== "__proto__" &&
        i !== "constructor" &&
        i !== "prototype" &&
        (l[i] = Zl(a[i]) ? d(l[i] || (l[i] = {}), a[i]) : a[i]);
    return l;
  },
  Is = function (l, a) {
    var i = {},
      r;
    for (r in l) r in a || (i[r] = l[r]);
    return i;
  },
  Jr = function (l) {
    var a = l.parent || de,
      i = l.keyframes ? rv(cu(l.keyframes)) : ll;
    if (Bu(l.inherit))
      for (; a; ) i(l, a.vars.defaults), (a = a.parent || a._dp);
    return l;
  },
  fv = function (l, a) {
    for (var i = l.length, r = i === a.length; r && i-- && l[i] === a[i]; );
    return i < 0;
  },
  bp = function (l, a, i, r, s) {
    var o = l[r],
      h;
    if (s) for (h = a[s]; o && o[s] > h; ) o = o._prev;
    return (
      o ? ((a._next = o._next), (o._next = a)) : ((a._next = l[i]), (l[i] = a)),
      a._next ? (a._next._prev = a) : (l[r] = a),
      (a._prev = o),
      (a.parent = a._dp = l),
      a
    );
  },
  sc = function (l, a, i, r) {
    i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
    var s = a._prev,
      o = a._next;
    s ? (s._next = o) : l[i] === a && (l[i] = o),
      o ? (o._prev = s) : l[r] === a && (l[r] = s),
      (a._next = a._prev = a.parent = null);
  },
  ui = function (l, a) {
    l.parent &&
      (!a || l.parent.autoRemoveChildren) &&
      l.parent.remove &&
      l.parent.remove(l),
      (l._act = 0);
  },
  Bi = function (l, a) {
    if (l && (!a || a._end > l._dur || a._start < 0))
      for (var i = l; i; ) (i._dirty = 1), (i = i.parent);
    return l;
  },
  sv = function (l) {
    for (var a = l.parent; a && a.parent; )
      (a._dirty = 1), a.totalDuration(), (a = a.parent);
    return l;
  },
  jh = function (l, a, i, r) {
    return (
      l._startAt &&
      (eu
        ? l._startAt.revert(js)
        : (l.vars.immediateRender && !l.vars.autoRevert) ||
          l._startAt.render(a, !0, r))
    );
  },
  cv = function d(l) {
    return !l || (l._ts && d(l.parent));
  },
  Cg = function (l) {
    return l._repeat ? qa(l._tTime, (l = l.duration() + l._rDelay)) * l : 0;
  },
  qa = function (l, a) {
    var i = Math.floor((l = Fe(l / a)));
    return l && i === l ? i - 1 : i;
  },
  tc = function (l, a) {
    return (
      (l - a._start) * a._ts +
      (a._ts >= 0 ? 0 : a._dirty ? a.totalDuration() : a._tDur)
    );
  },
  cc = function (l) {
    return (l._end = Fe(
      l._start + (l._tDur / Math.abs(l._ts || l._rts || su) || 0)
    ));
  },
  oc = function (l, a) {
    var i = l._dp;
    return (
      i &&
        i.smoothChildTiming &&
        l._ts &&
        ((l._start = Fe(
          i._time -
            (l._ts > 0
              ? a / l._ts
              : ((l._dirty ? l.totalDuration() : l._tDur) - a) / -l._ts)
        )),
        cc(l),
        i._dirty || Bi(i, l)),
      l
    );
  },
  Sp = function (l, a) {
    var i;
    if (
      ((a._time ||
        (!a._dur && a._initted) ||
        (a._start < l._time && (a._dur || !a.add))) &&
        ((i = tc(l.rawTime(), a)),
        (!a._dur || pf(0, a.totalDuration(), i) - a._tTime > su) &&
          a.render(i, !0)),
      Bi(l, a)._dp && l._initted && l._time >= l._dur && l._ts)
    ) {
      if (l._dur < l.duration())
        for (i = l; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
      l._zTime = -1e-8;
    }
  },
  Xl = function (l, a, i, r) {
    return (
      a.parent && ui(a),
      (a._start = Fe(
        (bn(i) ? i : i || l !== de ? pl(l, i, a) : l._time) + a._delay
      )),
      (a._end = Fe(
        a._start + (a.totalDuration() / Math.abs(a.timeScale()) || 0)
      )),
      bp(l, a, "_first", "_last", l._sort ? "_start" : 0),
      Lh(a) || (l._recent = a),
      r || Sp(l, a),
      l._ts < 0 && oc(l, l._tTime),
      l
    );
  },
  Tp = function (l, a) {
    return (
      (ul.ScrollTrigger || D0("scrollTrigger", a)) &&
      ul.ScrollTrigger.create(a, l)
    );
  },
  Ep = function (l, a, i, r, s) {
    if ((v0(l, a, s), !l._initted)) return 1;
    if (
      !i &&
      l._pt &&
      !eu &&
      ((l._dur && l.vars.lazy !== !1) || (!l._dur && l.vars.lazy)) &&
      gp !== Pu.frame
    )
      return In.push(l), (l._lazy = [s, r]), 1;
  },
  ov = function d(l) {
    var a = l.parent;
    return a && a._ts && a._initted && !a._lock && (a.rawTime() < 0 || d(a));
  },
  Lh = function (l) {
    var a = l.data;
    return a === "isFromStart" || a === "isStart";
  },
  hv = function (l, a, i, r) {
    var s = l.ratio,
      o =
        a < 0 ||
        (!a &&
          ((!l._start && ov(l) && !(!l._initted && Lh(l))) ||
            ((l._ts < 0 || l._dp._ts < 0) && !Lh(l))))
          ? 0
          : 1,
      h = l._rDelay,
      D = 0,
      _,
      m,
      S;
    if (
      (h &&
        l._repeat &&
        ((D = pf(0, l._tDur, a)),
        (m = qa(D, h)),
        l._yoyo && m & 1 && (o = 1 - o),
        m !== qa(l._tTime, h) &&
          ((s = 1 - o), l.vars.repeatRefresh && l._initted && l.invalidate())),
      o !== s || eu || r || l._zTime === su || (!a && l._zTime))
    ) {
      if (!l._initted && Ep(l, a, r, i, D)) return;
      for (
        S = l._zTime,
          l._zTime = a || (i ? su : 0),
          i || (i = a && !S),
          l.ratio = o,
          l._from && (o = 1 - o),
          l._time = 0,
          l._tTime = D,
          _ = l._pt;
        _;

      )
        _.r(o, _.d), (_ = _._next);
      a < 0 && jh(l, a, i, !0),
        l._onUpdate && !i && tl(l, "onUpdate"),
        D && l._repeat && !i && l.parent && tl(l, "onRepeat"),
        (a >= l._tDur || a < 0) &&
          l.ratio === o &&
          (o && ui(l, 1),
          !i &&
            !eu &&
            (tl(l, o ? "onComplete" : "onReverseComplete", !0),
            l._prom && l._prom()));
    } else l._zTime || (l._zTime = a);
  },
  dv = function (l, a, i) {
    var r;
    if (i > a)
      for (r = l._first; r && r._start <= i; ) {
        if (r.data === "isPause" && r._start > a) return r;
        r = r._next;
      }
    else
      for (r = l._last; r && r._start >= i; ) {
        if (r.data === "isPause" && r._start < a) return r;
        r = r._prev;
      }
  },
  Xa = function (l, a, i, r) {
    var s = l._repeat,
      o = Fe(a) || 0,
      h = l._tTime / l._tDur;
    return (
      h && !r && (l._time *= o / l._dur),
      (l._dur = o),
      (l._tDur = s ? (s < 0 ? 1e10 : Fe(o * (s + 1) + l._rDelay * s)) : o),
      h > 0 && !r && oc(l, (l._tTime = l._tDur * h)),
      l.parent && cc(l),
      i || Bi(l.parent, l),
      l
    );
  },
  Ag = function (l) {
    return l instanceof bu ? Bi(l) : Xa(l, l._dur);
  },
  _v = { _start: 0, endTime: sf, totalDuration: sf },
  pl = function d(l, a, i) {
    var r = l.labels,
      s = l._recent || _v,
      o = l.duration() >= Ll ? s.endTime(!1) : l._dur,
      h,
      D,
      _;
    return Ke(a) && (isNaN(a) || a in r)
      ? ((D = a.charAt(0)),
        (_ = a.substr(-1) === "%"),
        (h = a.indexOf("=")),
        D === "<" || D === ">"
          ? (h >= 0 && (a = a.replace(/=/, "")),
            (D === "<" ? s._start : s.endTime(s._repeat >= 0)) +
              (parseFloat(a.substr(1)) || 0) *
                (_ ? (h < 0 ? s : i).totalDuration() / 100 : 1))
          : h < 0
          ? (a in r || (r[a] = o), r[a])
          : ((D = parseFloat(a.charAt(h - 1) + a.substr(h + 1))),
            _ && i && (D = (D / 100) * (cu(i) ? i[0] : i).totalDuration()),
            h > 1 ? d(l, a.substr(0, h - 1), i) + D : o + D))
      : a == null
      ? o
      : +a;
  },
  $r = function (l, a, i) {
    var r = bn(a[1]),
      s = (r ? 2 : 1) + (l < 2 ? 0 : 1),
      o = a[s],
      h,
      D;
    if ((r && (o.duration = a[1]), (o.parent = i), l)) {
      for (h = o, D = i; D && !("immediateRender" in h); )
        (h = D.vars.defaults || {}), (D = Bu(D.vars.inherit) && D.parent);
      (o.immediateRender = Bu(h.immediateRender)),
        l < 2 ? (o.runBackwards = 1) : (o.startAt = a[s - 1]);
    }
    return new we(a[0], o, a[s + 1]);
  },
  ii = function (l, a) {
    return l || l === 0 ? a(l) : a;
  },
  pf = function (l, a, i) {
    return i < l ? l : i > a ? a : i;
  },
  ru = function (l, a) {
    return !Ke(l) || !(a = lv.exec(l)) ? "" : a[1];
  },
  Dv = function (l, a, i) {
    return ii(i, function (r) {
      return pf(l, a, r);
    });
  },
  Vh = [].slice,
  xp = function (l, a) {
    return (
      l &&
      Zl(l) &&
      "length" in l &&
      ((!a && !l.length) || (l.length - 1 in l && Zl(l[0]))) &&
      !l.nodeType &&
      l !== Yl
    );
  },
  gv = function (l, a, i) {
    return (
      i === void 0 && (i = []),
      l.forEach(function (r) {
        var s;
        return (Ke(r) && !a) || xp(r, 1)
          ? (s = i).push.apply(s, vl(r))
          : i.push(r);
      }) || i
    );
  },
  vl = function (l, a, i) {
    return ce && !a && ce.selector
      ? ce.selector(l)
      : Ke(l) && !i && (Xh || !Ga())
      ? Vh.call((a || _0).querySelectorAll(l), 0)
      : cu(l)
      ? gv(l, i)
      : xp(l)
      ? Vh.call(l, 0)
      : l
      ? [l]
      : [];
  },
  Qh = function (l) {
    return (
      (l = vl(l)[0] || ff("Invalid scope") || {}),
      function (a) {
        var i = l.current || l.nativeElement || l;
        return vl(
          a,
          i.querySelectorAll
            ? i
            : i === l
            ? ff("Invalid scope") || _0.createElement("div")
            : l
        );
      }
    );
  },
  Cp = function (l) {
    return l.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Ap = function (l) {
    if (be(l)) return l;
    var a = Zl(l) ? l : { each: l },
      i = Ni(a.ease),
      r = a.from || 0,
      s = parseFloat(a.base) || 0,
      o = {},
      h = r > 0 && r < 1,
      D = isNaN(r) || h,
      _ = a.axis,
      m = r,
      S = r;
    return (
      Ke(r)
        ? (m = S = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !h && D && ((m = r[0]), (S = r[1])),
      function (T, v, x) {
        var b = (x || a).length,
          A = o[b],
          G,
          H,
          X,
          U,
          F,
          Z,
          Y,
          K,
          k;
        if (!A) {
          if (((k = a.grid === "auto" ? 0 : (a.grid || [1, Ll])[1]), !k)) {
            for (
              Y = -1e8;
              Y < (Y = x[k++].getBoundingClientRect().left) && k < b;

            );
            k < b && k--;
          }
          for (
            A = o[b] = [],
              G = D ? Math.min(k, b) * m - 0.5 : r % k,
              H = k === Ll ? 0 : D ? (b * S) / k - 0.5 : (r / k) | 0,
              Y = 0,
              K = Ll,
              Z = 0;
            Z < b;
            Z++
          )
            (X = (Z % k) - G),
              (U = H - ((Z / k) | 0)),
              (A[Z] = F = _ ? Math.abs(_ === "y" ? U : X) : fp(X * X + U * U)),
              F > Y && (Y = F),
              F < K && (K = F);
          r === "random" && Cp(A),
            (A.max = Y - K),
            (A.min = K),
            (A.v = b =
              (parseFloat(a.amount) ||
                parseFloat(a.each) *
                  (k > b
                    ? b - 1
                    : _
                    ? _ === "y"
                      ? b / k
                      : k
                    : Math.max(k, b / k)) ||
                0) * (r === "edges" ? -1 : 1)),
            (A.b = b < 0 ? s - b : s),
            (A.u = ru(a.amount || a.each) || 0),
            (i = i && b < 0 ? Hp(i) : i);
        }
        return (
          (b = (A[T] - A.min) / A.max || 0),
          Fe(A.b + (i ? i(b) : b) * A.v) + A.u
        );
      }
    );
  },
  Zh = function (l) {
    var a = Math.pow(10, ((l + "").split(".")[1] || "").length);
    return function (i) {
      var r = Fe(Math.round(parseFloat(i) / l) * l * a);
      return (r - (r % 1)) / a + (bn(i) ? 0 : ru(i));
    };
  },
  Op = function (l, a) {
    var i = cu(l),
      r,
      s;
    return (
      !i &&
        Zl(l) &&
        ((r = i = l.radius || Ll),
        l.values
          ? ((l = vl(l.values)), (s = !bn(l[0])) && (r *= r))
          : (l = Zh(l.increment))),
      ii(
        a,
        i
          ? be(l)
            ? function (o) {
                return (s = l(o)), Math.abs(s - o) <= r ? s : o;
              }
            : function (o) {
                for (
                  var h = parseFloat(s ? o.x : o),
                    D = parseFloat(s ? o.y : 0),
                    _ = Ll,
                    m = 0,
                    S = l.length,
                    T,
                    v;
                  S--;

                )
                  s
                    ? ((T = l[S].x - h), (v = l[S].y - D), (T = T * T + v * v))
                    : (T = Math.abs(l[S] - h)),
                    T < _ && ((_ = T), (m = S));
                return (
                  (m = !r || _ <= r ? l[m] : o),
                  s || m === o || bn(o) ? m : m + ru(o)
                );
              }
          : Zh(l)
      )
    );
  },
  Mp = function (l, a, i, r) {
    return ii(cu(l) ? !a : i === !0 ? !!(i = 0) : !r, function () {
      return cu(l)
        ? l[~~(Math.random() * l.length)]
        : (i = i || 1e-5) &&
            (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((l - i / 2 + Math.random() * (a - l + i * 0.99)) / i) *
                i *
                r
            ) / r;
    });
  },
  pv = function () {
    for (var l = arguments.length, a = new Array(l), i = 0; i < l; i++)
      a[i] = arguments[i];
    return function (r) {
      return a.reduce(function (s, o) {
        return o(s);
      }, r);
    };
  },
  mv = function (l, a) {
    return function (i) {
      return l(parseFloat(i)) + (a || ru(i));
    };
  },
  yv = function (l, a, i) {
    return Rp(l, a, 0, 1, i);
  },
  zp = function (l, a, i) {
    return ii(i, function (r) {
      return l[~~a(r)];
    });
  },
  vv = function d(l, a, i) {
    var r = a - l;
    return cu(l)
      ? zp(l, d(0, l.length), a)
      : ii(i, function (s) {
          return ((r + ((s - l) % r)) % r) + l;
        });
  },
  bv = function d(l, a, i) {
    var r = a - l,
      s = r * 2;
    return cu(l)
      ? zp(l, d(0, l.length - 1), a)
      : ii(i, function (o) {
          return (o = (s + ((o - l) % s)) % s || 0), l + (o > r ? s - o : o);
        });
  },
  cf = function (l) {
    for (var a = 0, i = "", r, s, o, h; ~(r = l.indexOf("random(", a)); )
      (o = l.indexOf(")", r)),
        (h = l.charAt(r + 7) === "["),
        (s = l.substr(r + 7, o - r - 7).match(h ? hp : qh)),
        (i +=
          l.substr(a, r - a) + Mp(h ? s : +s[0], h ? 0 : +s[1], +s[2] || 1e-5)),
        (a = o + 1);
    return i + l.substr(a, l.length - a);
  },
  Rp = function (l, a, i, r, s) {
    var o = a - l,
      h = r - i;
    return ii(s, function (D) {
      return i + (((D - l) / o) * h || 0);
    });
  },
  Sv = function d(l, a, i, r) {
    var s = isNaN(l + a)
      ? 0
      : function (v) {
          return (1 - v) * l + v * a;
        };
    if (!s) {
      var o = Ke(l),
        h = {},
        D,
        _,
        m,
        S,
        T;
      if ((i === !0 && (r = 1) && (i = null), o))
        (l = { p: l }), (a = { p: a });
      else if (cu(l) && !cu(a)) {
        for (m = [], S = l.length, T = S - 2, _ = 1; _ < S; _++)
          m.push(d(l[_ - 1], l[_]));
        S--,
          (s = function (x) {
            x *= S;
            var b = Math.min(T, ~~x);
            return m[b](x - b);
          }),
          (i = a);
      } else r || (l = Ya(cu(l) ? [] : {}, l));
      if (!m) {
        for (D in a) y0.call(h, l, D, "get", a[D]);
        s = function (x) {
          return T0(x, h) || (o ? l.p : l);
        };
      }
    }
    return ii(i, s);
  },
  Og = function (l, a, i) {
    var r = l.labels,
      s = Ll,
      o,
      h,
      D;
    for (o in r)
      (h = r[o] - a),
        h < 0 == !!i && h && s > (h = Math.abs(h)) && ((D = o), (s = h));
    return D;
  },
  tl = function (l, a, i) {
    var r = l.vars,
      s = r[a],
      o = ce,
      h = l._ctx,
      D,
      _,
      m;
    if (s)
      return (
        (D = r[a + "Params"]),
        (_ = r.callbackScope || l),
        i && In.length && Ps(),
        h && (ce = h),
        (m = D ? s.apply(_, D) : s.call(_)),
        (ce = o),
        m
      );
  },
  Gr = function (l) {
    return (
      ui(l),
      l.scrollTrigger && l.scrollTrigger.kill(!!eu),
      l.progress() < 1 && tl(l, "onInterrupt"),
      l
    );
  },
  Ma,
  Bp = [],
  Np = function (l) {
    if (l)
      if (((l = (!l.name && l.default) || l), d0() || l.headless)) {
        var a = l.name,
          i = be(l),
          r =
            a && !i && l.init
              ? function () {
                  this._props = [];
                }
              : l,
          s = {
            init: sf,
            render: T0,
            add: y0,
            kill: Yv,
            modifier: Hv,
            rawVars: 0,
          },
          o = {
            targetTest: 0,
            get: 0,
            getSetter: S0,
            aliases: {},
            register: 0,
          };
        if ((Ga(), l !== r)) {
          if ($u[a]) return;
          ll(r, ll(Is(l, s), o)),
            Ya(r.prototype, Ya(s, Is(l, o))),
            ($u[(r.prop = a)] = r),
            l.targetTest && (Ls.push(r), (g0[a] = 1)),
            (a =
              (a === "css" ? "CSS" : a.charAt(0).toUpperCase() + a.substr(1)) +
              "Plugin");
        }
        Dp(a, r), l.register && l.register(Fu, r, Uu);
      } else Bp.push(l);
  },
  Pt = 255,
  jr = {
    aqua: [0, Pt, Pt],
    lime: [0, Pt, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, Pt],
    navy: [0, 0, 128],
    white: [Pt, Pt, Pt],
    olive: [128, 128, 0],
    yellow: [Pt, Pt, 0],
    orange: [Pt, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [Pt, 0, 0],
    pink: [Pt, 192, 203],
    cyan: [0, Pt, Pt],
    transparent: [Pt, Pt, Pt, 0],
  },
  xh = function (l, a, i) {
    return (
      (l += l < 0 ? 1 : l > 1 ? -1 : 0),
      ((l * 6 < 1
        ? a + (i - a) * l * 6
        : l < 0.5
        ? i
        : l * 3 < 2
        ? a + (i - a) * (2 / 3 - l) * 6
        : a) *
        Pt +
        0.5) |
        0
    );
  },
  Up = function (l, a, i) {
    var r = l ? (bn(l) ? [l >> 16, (l >> 8) & Pt, l & Pt] : 0) : jr.black,
      s,
      o,
      h,
      D,
      _,
      m,
      S,
      T,
      v,
      x;
    if (!r) {
      if ((l.substr(-1) === "," && (l = l.substr(0, l.length - 1)), jr[l]))
        r = jr[l];
      else if (l.charAt(0) === "#") {
        if (
          (l.length < 6 &&
            ((s = l.charAt(1)),
            (o = l.charAt(2)),
            (h = l.charAt(3)),
            (l =
              "#" +
              s +
              s +
              o +
              o +
              h +
              h +
              (l.length === 5 ? l.charAt(4) + l.charAt(4) : ""))),
          l.length === 9)
        )
          return (
            (r = parseInt(l.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & Pt, r & Pt, parseInt(l.substr(7), 16) / 255]
          );
        (l = parseInt(l.substr(1), 16)), (r = [l >> 16, (l >> 8) & Pt, l & Pt]);
      } else if (l.substr(0, 3) === "hsl") {
        if (((r = x = l.match(qh)), !a))
          (D = (+r[0] % 360) / 360),
            (_ = +r[1] / 100),
            (m = +r[2] / 100),
            (o = m <= 0.5 ? m * (_ + 1) : m + _ - m * _),
            (s = m * 2 - o),
            r.length > 3 && (r[3] *= 1),
            (r[0] = xh(D + 1 / 3, s, o)),
            (r[1] = xh(D, s, o)),
            (r[2] = xh(D - 1 / 3, s, o));
        else if (~l.indexOf("="))
          return (r = l.match(cp)), i && r.length < 4 && (r[3] = 1), r;
      } else r = l.match(qh) || jr.transparent;
      r = r.map(Number);
    }
    return (
      a &&
        !x &&
        ((s = r[0] / Pt),
        (o = r[1] / Pt),
        (h = r[2] / Pt),
        (S = Math.max(s, o, h)),
        (T = Math.min(s, o, h)),
        (m = (S + T) / 2),
        S === T
          ? (D = _ = 0)
          : ((v = S - T),
            (_ = m > 0.5 ? v / (2 - S - T) : v / (S + T)),
            (D =
              S === s
                ? (o - h) / v + (o < h ? 6 : 0)
                : S === o
                ? (h - s) / v + 2
                : (s - o) / v + 4),
            (D *= 60)),
        (r[0] = ~~(D + 0.5)),
        (r[1] = ~~(_ * 100 + 0.5)),
        (r[2] = ~~(m * 100 + 0.5))),
      i && r.length < 4 && (r[3] = 1),
      r
    );
  },
  wp = function (l) {
    var a = [],
      i = [],
      r = -1;
    return (
      l.split(ti).forEach(function (s) {
        var o = s.match(Oa) || [];
        a.push.apply(a, o), i.push((r += o.length + 1));
      }),
      (a.c = i),
      a
    );
  },
  Mg = function (l, a, i) {
    var r = "",
      s = (l + r).match(ti),
      o = a ? "hsla(" : "rgba(",
      h = 0,
      D,
      _,
      m,
      S;
    if (!s) return l;
    if (
      ((s = s.map(function (T) {
        return (
          (T = Up(T, a, 1)) &&
          o +
            (a ? T[0] + "," + T[1] + "%," + T[2] + "%," + T[3] : T.join(",")) +
            ")"
        );
      })),
      i && ((m = wp(l)), (D = i.c), D.join(r) !== m.c.join(r)))
    )
      for (_ = l.replace(ti, "1").split(Oa), S = _.length - 1; h < S; h++)
        r +=
          _[h] +
          (~D.indexOf(h)
            ? s.shift() || o + "0,0,0,0)"
            : (m.length ? m : s.length ? s : i).shift());
    if (!_)
      for (_ = l.split(ti), S = _.length - 1; h < S; h++) r += _[h] + s[h];
    return r + _[S];
  },
  ti = (function () {
    var d =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      l;
    for (l in jr) d += "|" + l + "\\b";
    return new RegExp(d + ")", "gi");
  })(),
  Tv = /hsl[a]?\(/,
  Fp = function (l) {
    var a = l.join(" "),
      i;
    if (((ti.lastIndex = 0), ti.test(a)))
      return (
        (i = Tv.test(a)),
        (l[1] = Mg(l[1], i)),
        (l[0] = Mg(l[0], i, wp(l[1]))),
        !0
      );
  },
  of,
  Pu = (function () {
    var d = Date.now,
      l = 500,
      a = 33,
      i = d(),
      r = i,
      s = 1e3 / 240,
      o = s,
      h = [],
      D,
      _,
      m,
      S,
      T,
      v,
      x = function b(A) {
        var G = d() - r,
          H = A === !0,
          X,
          U,
          F,
          Z;
        if (
          ((G > l || G < 0) && (i += G - a),
          (r += G),
          (F = r - i),
          (X = F - o),
          (X > 0 || H) &&
            ((Z = ++S.frame),
            (T = F - S.time * 1e3),
            (S.time = F = F / 1e3),
            (o += X + (X >= s ? 4 : s - X)),
            (U = 1)),
          H || (D = _(b)),
          U)
        )
          for (v = 0; v < h.length; v++) h[v](F, T, Z, A);
      };
    return (
      (S = {
        time: 0,
        frame: 0,
        tick: function () {
          x(!0);
        },
        deltaRatio: function (A) {
          return T / (1e3 / (A || 60));
        },
        wake: function () {
          dp &&
            (!Xh &&
              d0() &&
              ((Yl = Xh = window),
              (_0 = Yl.document || {}),
              (ul.gsap = Fu),
              (Yl.gsapVersions || (Yl.gsapVersions = [])).push(Fu.version),
              _p(Ws || Yl.GreenSockGlobals || (!Yl.gsap && Yl) || {}),
              Bp.forEach(Np)),
            (m = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            D && S.sleep(),
            (_ =
              m ||
              function (A) {
                return setTimeout(A, (o - S.time * 1e3 + 1) | 0);
              }),
            (of = 1),
            x(2));
        },
        sleep: function () {
          (m ? cancelAnimationFrame : clearTimeout)(D), (of = 0), (_ = sf);
        },
        lagSmoothing: function (A, G) {
          (l = A || 1 / 0), (a = Math.min(G || 33, l));
        },
        fps: function (A) {
          (s = 1e3 / (A || 240)), (o = S.time * 1e3 + s);
        },
        add: function (A, G, H) {
          var X = G
            ? function (U, F, Z, Y) {
                A(U, F, Z, Y), S.remove(X);
              }
            : A;
          return S.remove(A), h[H ? "unshift" : "push"](X), Ga(), X;
        },
        remove: function (A, G) {
          ~(G = h.indexOf(A)) && h.splice(G, 1) && v >= G && v--;
        },
        _listeners: h,
      }),
      S
    );
  })(),
  Ga = function () {
    return !of && Pu.wake();
  },
  Ft = {},
  Ev = /^[\d.\-M][\d.\-,\s]/,
  xv = /["']/g,
  Cv = function (l) {
    for (
      var a = {},
        i = l.substr(1, l.length - 3).split(":"),
        r = i[0],
        s = 1,
        o = i.length,
        h,
        D,
        _;
      s < o;
      s++
    )
      (D = i[s]),
        (h = s !== o - 1 ? D.lastIndexOf(",") : D.length),
        (_ = D.substr(0, h)),
        (a[r] = isNaN(_) ? _.replace(xv, "").trim() : +_),
        (r = D.substr(h + 1).trim());
    return a;
  },
  Av = function (l) {
    var a = l.indexOf("(") + 1,
      i = l.indexOf(")"),
      r = l.indexOf("(", a);
    return l.substring(a, ~r && r < i ? l.indexOf(")", i + 1) : i);
  },
  Ov = function (l) {
    var a = (l + "").split("("),
      i = Ft[a[0]];
    return i && a.length > 1 && i.config
      ? i.config.apply(
          null,
          ~l.indexOf("{") ? [Cv(a[1])] : Av(l).split(",").map(yp)
        )
      : Ft._CE && Ev.test(l)
      ? Ft._CE("", l)
      : i;
  },
  Hp = function (l) {
    return function (a) {
      return 1 - l(1 - a);
    };
  },
  Yp = function d(l, a) {
    for (var i = l._first, r; i; )
      i instanceof bu
        ? d(i, a)
        : i.vars.yoyoEase &&
          (!i._yoyo || !i._repeat) &&
          i._yoyo !== a &&
          (i.timeline
            ? d(i.timeline, a)
            : ((r = i._ease),
              (i._ease = i._yEase),
              (i._yEase = r),
              (i._yoyo = a))),
        (i = i._next);
  },
  Ni = function (l, a) {
    return (l && (be(l) ? l : Ft[l] || Ov(l))) || a;
  },
  ji = function (l, a, i, r) {
    i === void 0 &&
      (i = function (D) {
        return 1 - a(1 - D);
      }),
      r === void 0 &&
        (r = function (D) {
          return D < 0.5 ? a(D * 2) / 2 : 1 - a((1 - D) * 2) / 2;
        });
    var s = { easeIn: a, easeOut: i, easeInOut: r },
      o;
    return (
      Nu(l, function (h) {
        (Ft[h] = ul[h] = s), (Ft[(o = h.toLowerCase())] = i);
        for (var D in s)
          Ft[
            o + (D === "easeIn" ? ".in" : D === "easeOut" ? ".out" : ".inOut")
          ] = Ft[h + "." + D] = s[D];
      }),
      s
    );
  },
  qp = function (l) {
    return function (a) {
      return a < 0.5 ? (1 - l(1 - a * 2)) / 2 : 0.5 + l((a - 0.5) * 2) / 2;
    };
  },
  Ch = function d(l, a, i) {
    var r = a >= 1 ? a : 1,
      s = (i || (l ? 0.3 : 0.45)) / (a < 1 ? a : 1),
      o = (s / Yh) * (Math.asin(1 / r) || 0),
      h = function (m) {
        return m === 1 ? 1 : r * Math.pow(2, -10 * m) * uv((m - o) * s) + 1;
      },
      D =
        l === "out"
          ? h
          : l === "in"
          ? function (_) {
              return 1 - h(1 - _);
            }
          : qp(h);
    return (
      (s = Yh / s),
      (D.config = function (_, m) {
        return d(l, _, m);
      }),
      D
    );
  },
  Ah = function d(l, a) {
    a === void 0 && (a = 1.70158);
    var i = function (o) {
        return o ? --o * o * ((a + 1) * o + a) + 1 : 0;
      },
      r =
        l === "out"
          ? i
          : l === "in"
          ? function (s) {
              return 1 - i(1 - s);
            }
          : qp(i);
    return (
      (r.config = function (s) {
        return d(l, s);
      }),
      r
    );
  };
Nu("Linear,Quad,Cubic,Quart,Quint,Strong", function (d, l) {
  var a = l < 5 ? l + 1 : l;
  ji(
    d + ",Power" + (a - 1),
    l
      ? function (i) {
          return Math.pow(i, a);
        }
      : function (i) {
          return i;
        },
    function (i) {
      return 1 - Math.pow(1 - i, a);
    },
    function (i) {
      return i < 0.5
        ? Math.pow(i * 2, a) / 2
        : 1 - Math.pow((1 - i) * 2, a) / 2;
    }
  );
});
Ft.Linear.easeNone = Ft.none = Ft.Linear.easeIn;
ji("Elastic", Ch("in"), Ch("out"), Ch());
(function (d, l) {
  var a = 1 / l,
    i = 2 * a,
    r = 2.5 * a,
    s = function (h) {
      return h < a
        ? d * h * h
        : h < i
        ? d * Math.pow(h - 1.5 / l, 2) + 0.75
        : h < r
        ? d * (h -= 2.25 / l) * h + 0.9375
        : d * Math.pow(h - 2.625 / l, 2) + 0.984375;
    };
  ji(
    "Bounce",
    function (o) {
      return 1 - s(1 - o);
    },
    s
  );
})(7.5625, 2.75);
ji("Expo", function (d) {
  return Math.pow(2, 10 * (d - 1)) * d + d * d * d * d * d * d * (1 - d);
});
ji("Circ", function (d) {
  return -(fp(1 - d * d) - 1);
});
ji("Sine", function (d) {
  return d === 1 ? 1 : -ev(d * Iy) + 1;
});
ji("Back", Ah("in"), Ah("out"), Ah());
Ft.SteppedEase =
  Ft.steps =
  ul.SteppedEase =
    {
      config: function (l, a) {
        l === void 0 && (l = 1);
        var i = 1 / l,
          r = l + (a ? 0 : 1),
          s = a ? 1 : 0,
          o = 1 - su;
        return function (h) {
          return (((r * pf(0, o, h)) | 0) + s) * i;
        };
      },
    };
Ha.ease = Ft["quad.out"];
Nu(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (d) {
    return (p0 += d + "," + d + "Params,");
  }
);
var Xp = function (l, a) {
    (this.id = tv++),
      (l._gsap = this),
      (this.target = l),
      (this.harness = a),
      (this.get = a ? a.get : pp),
      (this.set = a ? a.getSetter : S0);
  },
  hf = (function () {
    function d(a) {
      (this.vars = a),
        (this._delay = +a.delay || 0),
        (this._repeat = a.repeat === 1 / 0 ? -2 : a.repeat || 0) &&
          ((this._rDelay = a.repeatDelay || 0),
          (this._yoyo = !!a.yoyo || !!a.yoyoEase)),
        (this._ts = 1),
        Xa(this, +a.duration, 1, 1),
        (this.data = a.data),
        ce && ((this._ctx = ce), ce.data.push(this)),
        of || Pu.wake();
    }
    var l = d.prototype;
    return (
      (l.delay = function (i) {
        return i || i === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + i - this._delay),
            (this._delay = i),
            this)
          : this._delay;
      }),
      (l.duration = function (i) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
            )
          : this.totalDuration() && this._dur;
      }),
      (l.totalDuration = function (i) {
        return arguments.length
          ? ((this._dirty = 0),
            Xa(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (l.totalTime = function (i, r) {
        if ((Ga(), !arguments.length)) return this._tTime;
        var s = this._dp;
        if (s && s.smoothChildTiming && this._ts) {
          for (oc(this, i), !s._dp || s.parent || Sp(s, this); s && s.parent; )
            s.parent._time !==
              s._start +
                (s._ts >= 0
                  ? s._tTime / s._ts
                  : (s.totalDuration() - s._tTime) / -s._ts) &&
              s.totalTime(s._tTime, !0),
              (s = s.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && i < this._tDur) ||
              (this._ts < 0 && i > 0) ||
              (!this._tDur && !i)) &&
            Xl(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !r) ||
            (this._initted && Math.abs(this._zTime) === su) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), mp(this, i, r)),
          this
        );
      }),
      (l.time = function (i, r) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + Cg(this)) %
                (this._dur + this._rDelay) || (i ? this._dur : 0),
              r
            )
          : this._time;
      }),
      (l.totalProgress = function (i, r) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * i, r)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() >= 0 && this._initted
          ? 1
          : 0;
      }),
      (l.progress = function (i, r) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                Cg(this),
              r
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (l.iteration = function (i, r) {
        var s = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (i - 1) * s, r)
          : this._repeat
          ? qa(this._tTime, s) + 1
          : 1;
      }),
      (l.timeScale = function (i, r) {
        if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
        if (this._rts === i) return this;
        var s =
          this.parent && this._ts ? tc(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -1e-8 ? 0 : this._rts),
          this.totalTime(pf(-Math.abs(this._delay), this._tDur, s), r !== !1),
          cc(this),
          sv(this)
        );
      }),
      (l.paused = function (i) {
        return arguments.length
          ? (this._ps !== i &&
              ((this._ps = i),
              i
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Ga(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== su &&
                      (this._tTime -= su)
                  ))),
            this)
          : this._ps;
      }),
      (l.startTime = function (i) {
        if (arguments.length) {
          this._start = i;
          var r = this.parent || this._dp;
          return (
            r && (r._sort || !this.parent) && Xl(r, this, i - this._delay), this
          );
        }
        return this._start;
      }),
      (l.endTime = function (i) {
        return (
          this._start +
          (Bu(i) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (l.rawTime = function (i) {
        var r = this.parent || this._dp;
        return r
          ? i &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? tc(r.rawTime(i), this)
            : this._tTime
          : this._tTime;
      }),
      (l.revert = function (i) {
        i === void 0 && (i = iv);
        var r = eu;
        return (
          (eu = i),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(i),
            this.totalTime(-0.01, i.suppressEvents)),
          this.data !== "nested" && i.kill !== !1 && this.kill(),
          (eu = r),
          this
        );
      }),
      (l.globalTime = function (i) {
        for (var r = this, s = arguments.length ? i : r.rawTime(); r; )
          (s = r._start + s / (Math.abs(r._ts) || 1)), (r = r._dp);
        return !this.parent && this._sat ? this._sat.globalTime(i) : s;
      }),
      (l.repeat = function (i) {
        return arguments.length
          ? ((this._repeat = i === 1 / 0 ? -2 : i), Ag(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (l.repeatDelay = function (i) {
        if (arguments.length) {
          var r = this._time;
          return (this._rDelay = i), Ag(this), r ? this.time(r) : this;
        }
        return this._rDelay;
      }),
      (l.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }),
      (l.seek = function (i, r) {
        return this.totalTime(pl(this, i), Bu(r));
      }),
      (l.restart = function (i, r) {
        return (
          this.play().totalTime(i ? -this._delay : 0, Bu(r)),
          this._dur || (this._zTime = -1e-8),
          this
        );
      }),
      (l.play = function (i, r) {
        return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
      }),
      (l.reverse = function (i, r) {
        return (
          i != null && this.seek(i || this.totalDuration(), r),
          this.reversed(!0).paused(!1)
        );
      }),
      (l.pause = function (i, r) {
        return i != null && this.seek(i, r), this.paused(!0);
      }),
      (l.resume = function () {
        return this.paused(!1);
      }),
      (l.reversed = function (i) {
        return arguments.length
          ? (!!i !== this.reversed() &&
              this.timeScale(-this._rts || (i ? -1e-8 : 0)),
            this)
          : this._rts < 0;
      }),
      (l.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
      }),
      (l.isActive = function () {
        var i = this.parent || this._dp,
          r = this._start,
          s;
        return !!(
          !i ||
          (this._ts &&
            this._initted &&
            i.isActive() &&
            (s = i.rawTime(!0)) >= r &&
            s < this.endTime(!0) - su)
        );
      }),
      (l.eventCallback = function (i, r, s) {
        var o = this.vars;
        return arguments.length > 1
          ? (r
              ? ((o[i] = r),
                s && (o[i + "Params"] = s),
                i === "onUpdate" && (this._onUpdate = r))
              : delete o[i],
            this)
          : o[i];
      }),
      (l.then = function (i) {
        var r = this;
        return new Promise(function (s) {
          var o = be(i) ? i : vp,
            h = function () {
              var _ = r.then;
              (r.then = null),
                be(o) && (o = o(r)) && (o.then || o === r) && (r.then = _),
                s(o),
                (r.then = _);
            };
          (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
          (!r._tTime && r._ts < 0)
            ? h()
            : (r._prom = h);
        });
      }),
      (l.kill = function () {
        Gr(this);
      }),
      d
    );
  })();
ll(hf.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -1e-8,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var bu = (function (d) {
  rp(l, d);
  function l(i, r) {
    var s;
    return (
      i === void 0 && (i = {}),
      (s = d.call(this, i) || this),
      (s.labels = {}),
      (s.smoothChildTiming = !!i.smoothChildTiming),
      (s.autoRemoveChildren = !!i.autoRemoveChildren),
      (s._sort = Bu(i.sortChildren)),
      de && Xl(i.parent || de, gn(s), r),
      i.reversed && s.reverse(),
      i.paused && s.paused(!0),
      i.scrollTrigger && Tp(gn(s), i.scrollTrigger),
      s
    );
  }
  var a = l.prototype;
  return (
    (a.to = function (r, s, o) {
      return $r(0, arguments, this), this;
    }),
    (a.from = function (r, s, o) {
      return $r(1, arguments, this), this;
    }),
    (a.fromTo = function (r, s, o, h) {
      return $r(2, arguments, this), this;
    }),
    (a.set = function (r, s, o) {
      return (
        (s.duration = 0),
        (s.parent = this),
        Jr(s).repeatDelay || (s.repeat = 0),
        (s.immediateRender = !!s.immediateRender),
        new we(r, s, pl(this, o), 1),
        this
      );
    }),
    (a.call = function (r, s, o) {
      return Xl(this, we.delayedCall(0, r, s), o);
    }),
    (a.staggerTo = function (r, s, o, h, D, _, m) {
      return (
        (o.duration = s),
        (o.stagger = o.stagger || h),
        (o.onComplete = _),
        (o.onCompleteParams = m),
        (o.parent = this),
        new we(r, o, pl(this, D)),
        this
      );
    }),
    (a.staggerFrom = function (r, s, o, h, D, _, m) {
      return (
        (o.runBackwards = 1),
        (Jr(o).immediateRender = Bu(o.immediateRender)),
        this.staggerTo(r, s, o, h, D, _, m)
      );
    }),
    (a.staggerFromTo = function (r, s, o, h, D, _, m, S) {
      return (
        (h.startAt = o),
        (Jr(h).immediateRender = Bu(h.immediateRender)),
        this.staggerTo(r, s, h, D, _, m, S)
      );
    }),
    (a.render = function (r, s, o) {
      var h = this._time,
        D = this._dirty ? this.totalDuration() : this._tDur,
        _ = this._dur,
        m = r <= 0 ? 0 : Fe(r),
        S = this._zTime < 0 != r < 0 && (this._initted || !_),
        T,
        v,
        x,
        b,
        A,
        G,
        H,
        X,
        U,
        F,
        Z,
        Y;
      if (
        (this !== de && m > D && r >= 0 && (m = D), m !== this._tTime || o || S)
      ) {
        if (
          (h !== this._time &&
            _ &&
            ((m += this._time - h), (r += this._time - h)),
          (T = m),
          (U = this._start),
          (X = this._ts),
          (G = !X),
          S && (_ || (h = this._zTime), (r || !s) && (this._zTime = r)),
          this._repeat)
        ) {
          if (
            ((Z = this._yoyo),
            (A = _ + this._rDelay),
            this._repeat < -1 && r < 0)
          )
            return this.totalTime(A * 100 + r, s, o);
          if (
            ((T = Fe(m % A)),
            m === D
              ? ((b = this._repeat), (T = _))
              : ((F = Fe(m / A)),
                (b = ~~F),
                b && b === F && ((T = _), b--),
                T > _ && (T = _)),
            (F = qa(this._tTime, A)),
            !h &&
              this._tTime &&
              F !== b &&
              this._tTime - F * A - this._dur <= 0 &&
              (F = b),
            Z && b & 1 && ((T = _ - T), (Y = 1)),
            b !== F && !this._lock)
          ) {
            var K = Z && F & 1,
              k = K === (Z && b & 1);
            if (
              (b < F && (K = !K),
              (h = K ? 0 : m % _ ? _ : m),
              (this._lock = 1),
              (this.render(h || (Y ? 0 : Fe(b * A)), s, !_)._lock = 0),
              (this._tTime = m),
              !s && this.parent && tl(this, "onRepeat"),
              this.vars.repeatRefresh && !Y && (this.invalidate()._lock = 1),
              (h && h !== this._time) ||
                G !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((_ = this._dur),
              (D = this._tDur),
              k &&
                ((this._lock = 2),
                (h = K ? _ : -1e-4),
                this.render(h, !0),
                this.vars.repeatRefresh && !Y && this.invalidate()),
              (this._lock = 0),
              !this._ts && !G)
            )
              return this;
            Yp(this, Y);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((H = dv(this, Fe(h), Fe(T))), H && (m -= T - (T = H._start))),
          (this._tTime = m),
          (this._time = T),
          (this._act = !X),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = r),
            (h = 0)),
          !h && T && !s && !b && (tl(this, "onStart"), this._tTime !== m))
        )
          return this;
        if (T >= h && r >= 0)
          for (v = this._first; v; ) {
            if (
              ((x = v._next), (v._act || T >= v._start) && v._ts && H !== v)
            ) {
              if (v.parent !== this) return this.render(r, s, o);
              if (
                (v.render(
                  v._ts > 0
                    ? (T - v._start) * v._ts
                    : (v._dirty ? v.totalDuration() : v._tDur) +
                        (T - v._start) * v._ts,
                  s,
                  o
                ),
                T !== this._time || (!this._ts && !G))
              ) {
                (H = 0), x && (m += this._zTime = -1e-8);
                break;
              }
            }
            v = x;
          }
        else {
          v = this._last;
          for (var J = r < 0 ? r : T; v; ) {
            if (((x = v._prev), (v._act || J <= v._end) && v._ts && H !== v)) {
              if (v.parent !== this) return this.render(r, s, o);
              if (
                (v.render(
                  v._ts > 0
                    ? (J - v._start) * v._ts
                    : (v._dirty ? v.totalDuration() : v._tDur) +
                        (J - v._start) * v._ts,
                  s,
                  o || (eu && (v._initted || v._startAt))
                ),
                T !== this._time || (!this._ts && !G))
              ) {
                (H = 0), x && (m += this._zTime = J ? -1e-8 : su);
                break;
              }
            }
            v = x;
          }
        }
        if (
          H &&
          !s &&
          (this.pause(),
          (H.render(T >= h ? 0 : -1e-8)._zTime = T >= h ? 1 : -1),
          this._ts)
        )
          return (this._start = U), cc(this), this.render(r, s, o);
        this._onUpdate && !s && tl(this, "onUpdate", !0),
          ((m === D && this._tTime >= this.totalDuration()) || (!m && h)) &&
            (U === this._start || Math.abs(X) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !_) &&
                ((m === D && this._ts > 0) || (!m && this._ts < 0)) &&
                ui(this, 1),
              !s &&
                !(r < 0 && !h) &&
                (m || h || !D) &&
                (tl(
                  this,
                  m === D && r >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(m < D && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (a.add = function (r, s) {
      var o = this;
      if ((bn(s) || (s = pl(this, s, r)), !(r instanceof hf))) {
        if (cu(r))
          return (
            r.forEach(function (h) {
              return o.add(h, s);
            }),
            this
          );
        if (Ke(r)) return this.addLabel(r, s);
        if (be(r)) r = we.delayedCall(0, r);
        else return this;
      }
      return this !== r ? Xl(this, r, s) : this;
    }),
    (a.getChildren = function (r, s, o, h) {
      r === void 0 && (r = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = !0),
        h === void 0 && (h = -1e8);
      for (var D = [], _ = this._first; _; )
        _._start >= h &&
          (_ instanceof we
            ? s && D.push(_)
            : (o && D.push(_), r && D.push.apply(D, _.getChildren(!0, s, o)))),
          (_ = _._next);
      return D;
    }),
    (a.getById = function (r) {
      for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
        if (s[o].vars.id === r) return s[o];
    }),
    (a.remove = function (r) {
      return Ke(r)
        ? this.removeLabel(r)
        : be(r)
        ? this.killTweensOf(r)
        : (r.parent === this && sc(this, r),
          r === this._recent && (this._recent = this._last),
          Bi(this));
    }),
    (a.totalTime = function (r, s) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Fe(
              Pu.time -
                (this._ts > 0
                  ? r / this._ts
                  : (this.totalDuration() - r) / -this._ts)
            )),
          d.prototype.totalTime.call(this, r, s),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (a.addLabel = function (r, s) {
      return (this.labels[r] = pl(this, s)), this;
    }),
    (a.removeLabel = function (r) {
      return delete this.labels[r], this;
    }),
    (a.addPause = function (r, s, o) {
      var h = we.delayedCall(0, s || sf, o);
      return (
        (h.data = "isPause"), (this._hasPause = 1), Xl(this, h, pl(this, r))
      );
    }),
    (a.removePause = function (r) {
      var s = this._first;
      for (r = pl(this, r); s; )
        s._start === r && s.data === "isPause" && ui(s), (s = s._next);
    }),
    (a.killTweensOf = function (r, s, o) {
      for (var h = this.getTweensOf(r, o), D = h.length; D--; )
        Kn !== h[D] && h[D].kill(r, s);
      return this;
    }),
    (a.getTweensOf = function (r, s) {
      for (var o = [], h = vl(r), D = this._first, _ = bn(s), m; D; )
        D instanceof we
          ? av(D._targets, h) &&
            (_
              ? (!Kn || (D._initted && D._ts)) &&
                D.globalTime(0) <= s &&
                D.globalTime(D.totalDuration()) > s
              : !s || D.isActive()) &&
            o.push(D)
          : (m = D.getTweensOf(h, s)).length && o.push.apply(o, m),
          (D = D._next);
      return o;
    }),
    (a.tweenTo = function (r, s) {
      s = s || {};
      var o = this,
        h = pl(o, r),
        D = s,
        _ = D.startAt,
        m = D.onStart,
        S = D.onStartParams,
        T = D.immediateRender,
        v,
        x = we.to(
          o,
          ll(
            {
              ease: s.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: h,
              overwrite: "auto",
              duration:
                s.duration ||
                Math.abs(
                  (h - (_ && "time" in _ ? _.time : o._time)) / o.timeScale()
                ) ||
                su,
              onStart: function () {
                if ((o.pause(), !v)) {
                  var A =
                    s.duration ||
                    Math.abs(
                      (h - (_ && "time" in _ ? _.time : o._time)) /
                        o.timeScale()
                    );
                  x._dur !== A && Xa(x, A, 0, 1).render(x._time, !0, !0),
                    (v = 1);
                }
                m && m.apply(x, S || []);
              },
            },
            s
          )
        );
      return T ? x.render(0) : x;
    }),
    (a.tweenFromTo = function (r, s, o) {
      return this.tweenTo(s, ll({ startAt: { time: pl(this, r) } }, o));
    }),
    (a.recent = function () {
      return this._recent;
    }),
    (a.nextLabel = function (r) {
      return r === void 0 && (r = this._time), Og(this, pl(this, r));
    }),
    (a.previousLabel = function (r) {
      return r === void 0 && (r = this._time), Og(this, pl(this, r), 1);
    }),
    (a.currentLabel = function (r) {
      return arguments.length
        ? this.seek(r, !0)
        : this.previousLabel(this._time + su);
    }),
    (a.shiftChildren = function (r, s, o) {
      o === void 0 && (o = 0);
      for (var h = this._first, D = this.labels, _; h; )
        h._start >= o && ((h._start += r), (h._end += r)), (h = h._next);
      if (s) for (_ in D) D[_] >= o && (D[_] += r);
      return Bi(this);
    }),
    (a.invalidate = function (r) {
      var s = this._first;
      for (this._lock = 0; s; ) s.invalidate(r), (s = s._next);
      return d.prototype.invalidate.call(this, r);
    }),
    (a.clear = function (r) {
      r === void 0 && (r = !0);
      for (var s = this._first, o; s; ) (o = s._next), this.remove(s), (s = o);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        Bi(this)
      );
    }),
    (a.totalDuration = function (r) {
      var s = 0,
        o = this,
        h = o._last,
        D = Ll,
        _,
        m,
        S;
      if (arguments.length)
        return o.timeScale(
          (o._repeat < 0 ? o.duration() : o.totalDuration()) /
            (o.reversed() ? -r : r)
        );
      if (o._dirty) {
        for (S = o.parent; h; )
          (_ = h._prev),
            h._dirty && h.totalDuration(),
            (m = h._start),
            m > D && o._sort && h._ts && !o._lock
              ? ((o._lock = 1), (Xl(o, h, m - h._delay, 1)._lock = 0))
              : (D = m),
            m < 0 &&
              h._ts &&
              ((s -= m),
              ((!S && !o._dp) || (S && S.smoothChildTiming)) &&
                ((o._start += m / o._ts), (o._time -= m), (o._tTime -= m)),
              o.shiftChildren(-m, !1, -1 / 0),
              (D = 0)),
            h._end > s && h._ts && (s = h._end),
            (h = _);
        Xa(o, o === de && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
      }
      return o._tDur;
    }),
    (l.updateRoot = function (r) {
      if ((de._ts && (mp(de, tc(r, de)), (gp = Pu.frame)), Pu.frame >= Eg)) {
        Eg += el.autoSleep || 120;
        var s = de._first;
        if ((!s || !s._ts) && el.autoSleep && Pu._listeners.length < 2) {
          for (; s && !s._ts; ) s = s._next;
          s || Pu.sleep();
        }
      }
    }),
    l
  );
})(hf);
ll(bu.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Mv = function (l, a, i, r, s, o, h) {
    var D = new Uu(this._pt, l, a, 0, 1, Zp, null, s),
      _ = 0,
      m = 0,
      S,
      T,
      v,
      x,
      b,
      A,
      G,
      H;
    for (
      D.b = i,
        D.e = r,
        i += "",
        r += "",
        (G = ~r.indexOf("random(")) && (r = cf(r)),
        o && ((H = [i, r]), o(H, l, a), (i = H[0]), (r = H[1])),
        T = i.match(Th) || [];
      (S = Th.exec(r));

    )
      (x = S[0]),
        (b = r.substring(_, S.index)),
        v ? (v = (v + 1) % 5) : b.substr(-5) === "rgba(" && (v = 1),
        x !== T[m++] &&
          ((A = parseFloat(T[m - 1]) || 0),
          (D._pt = {
            _next: D._pt,
            p: b || m === 1 ? b : ",",
            s: A,
            c: x.charAt(1) === "=" ? Ra(A, x) - A : parseFloat(x) - A,
            m: v && v < 4 ? Math.round : 0,
          }),
          (_ = Th.lastIndex));
    return (
      (D.c = _ < r.length ? r.substring(_, r.length) : ""),
      (D.fp = h),
      (op.test(r) || G) && (D.e = 0),
      (this._pt = D),
      D
    );
  },
  y0 = function (l, a, i, r, s, o, h, D, _, m) {
    be(r) && (r = r(s || 0, l, o));
    var S = l[a],
      T =
        i !== "get"
          ? i
          : be(S)
          ? _
            ? l[
                a.indexOf("set") || !be(l["get" + a.substr(3)])
                  ? a
                  : "get" + a.substr(3)
              ](_)
            : l[a]()
          : S,
      v = be(S) ? (_ ? Uv : Vp) : b0,
      x;
    if (
      (Ke(r) &&
        (~r.indexOf("random(") && (r = cf(r)),
        r.charAt(1) === "=" &&
          ((x = Ra(T, r) + (ru(T) || 0)), (x || x === 0) && (r = x))),
      !m || T !== r || kh)
    )
      return !isNaN(T * r) && r !== ""
        ? ((x = new Uu(
            this._pt,
            l,
            a,
            +T || 0,
            r - (T || 0),
            typeof S == "boolean" ? Fv : Qp,
            0,
            v
          )),
          _ && (x.fp = _),
          h && x.modifier(h, this, l),
          (this._pt = x))
        : (!S && !(a in l) && D0(a, r),
          Mv.call(this, l, a, T, r, v, D || el.stringFilter, _));
  },
  zv = function (l, a, i, r, s) {
    if (
      (be(l) && (l = Wr(l, s, a, i, r)),
      !Zl(l) || (l.style && l.nodeType) || cu(l) || sp(l))
    )
      return Ke(l) ? Wr(l, s, a, i, r) : l;
    var o = {},
      h;
    for (h in l) o[h] = Wr(l[h], s, a, i, r);
    return o;
  },
  Gp = function (l, a, i, r, s, o) {
    var h, D, _, m;
    if (
      $u[l] &&
      (h = new $u[l]()).init(
        s,
        h.rawVars ? a[l] : zv(a[l], r, s, o, i),
        i,
        r,
        o
      ) !== !1 &&
      ((i._pt = D = new Uu(i._pt, s, l, 0, 1, h.render, h, 0, h.priority)),
      i !== Ma)
    )
      for (_ = i._ptLookup[i._targets.indexOf(s)], m = h._props.length; m--; )
        _[h._props[m]] = D;
    return h;
  },
  Kn,
  kh,
  v0 = function d(l, a, i) {
    var r = l.vars,
      s = r.ease,
      o = r.startAt,
      h = r.immediateRender,
      D = r.lazy,
      _ = r.onUpdate,
      m = r.runBackwards,
      S = r.yoyoEase,
      T = r.keyframes,
      v = r.autoRevert,
      x = l._dur,
      b = l._startAt,
      A = l._targets,
      G = l.parent,
      H = G && G.data === "nested" ? G.vars.targets : A,
      X = l._overwrite === "auto" && !o0,
      U = l.timeline,
      F,
      Z,
      Y,
      K,
      k,
      J,
      st,
      $,
      vt,
      mt,
      ot,
      R,
      L;
    if (
      (U && (!T || !s) && (s = "none"),
      (l._ease = Ni(s, Ha.ease)),
      (l._yEase = S ? Hp(Ni(S === !0 ? s : S, Ha.ease)) : 0),
      S &&
        l._yoyo &&
        !l._repeat &&
        ((S = l._yEase), (l._yEase = l._ease), (l._ease = S)),
      (l._from = !U && !!r.runBackwards),
      !U || (T && !r.stagger))
    ) {
      if (
        (($ = A[0] ? Ri(A[0]).harness : 0),
        (R = $ && r[$.prop]),
        (F = Is(r, g0)),
        b &&
          (b._zTime < 0 && b.progress(1),
          a < 0 && m && h && !v ? b.render(-1, !0) : b.revert(m && x ? js : nv),
          (b._lazy = 0)),
        o)
      ) {
        if (
          (ui(
            (l._startAt = we.set(
              A,
              ll(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: G,
                  immediateRender: !0,
                  lazy: !b && Bu(D),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    _ &&
                    function () {
                      return tl(l, "onUpdate");
                    },
                  stagger: 0,
                },
                o
              )
            ))
          ),
          (l._startAt._dp = 0),
          (l._startAt._sat = l),
          a < 0 && (eu || (!h && !v)) && l._startAt.revert(js),
          h && x && a <= 0 && i <= 0)
        ) {
          a && (l._zTime = a);
          return;
        }
      } else if (m && x && !b) {
        if (
          (a && (h = !1),
          (Y = ll(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: h && !b && Bu(D),
              immediateRender: h,
              stagger: 0,
              parent: G,
            },
            F
          )),
          R && (Y[$.prop] = R),
          ui((l._startAt = we.set(A, Y))),
          (l._startAt._dp = 0),
          (l._startAt._sat = l),
          a < 0 && (eu ? l._startAt.revert(js) : l._startAt.render(-1, !0)),
          (l._zTime = a),
          !h)
        )
          d(l._startAt, su, su);
        else if (!a) return;
      }
      for (
        l._pt = l._ptCache = 0, D = (x && Bu(D)) || (D && !x), Z = 0;
        Z < A.length;
        Z++
      ) {
        if (
          ((k = A[Z]),
          (st = k._gsap || m0(A)[Z]._gsap),
          (l._ptLookup[Z] = mt = {}),
          Gh[st.id] && In.length && Ps(),
          (ot = H === A ? Z : H.indexOf(k)),
          $ &&
            (vt = new $()).init(k, R || F, l, ot, H) !== !1 &&
            ((l._pt = K =
              new Uu(l._pt, k, vt.name, 0, 1, vt.render, vt, 0, vt.priority)),
            vt._props.forEach(function (tt) {
              mt[tt] = K;
            }),
            vt.priority && (J = 1)),
          !$ || R)
        )
          for (Y in F)
            $u[Y] && (vt = Gp(Y, F, l, ot, k, H))
              ? vt.priority && (J = 1)
              : (mt[Y] = K =
                  y0.call(l, k, Y, "get", F[Y], ot, H, 0, r.stringFilter));
        l._op && l._op[Z] && l.kill(k, l._op[Z]),
          X &&
            l._pt &&
            ((Kn = l),
            de.killTweensOf(k, mt, l.globalTime(a)),
            (L = !l.parent),
            (Kn = 0)),
          l._pt && D && (Gh[st.id] = 1);
      }
      J && kp(l), l._onInit && l._onInit(l);
    }
    (l._onUpdate = _),
      (l._initted = (!l._op || l._pt) && !L),
      T && a <= 0 && U.render(Ll, !0, !0);
  },
  Rv = function (l, a, i, r, s, o, h, D) {
    var _ = ((l._pt && l._ptCache) || (l._ptCache = {}))[a],
      m,
      S,
      T,
      v;
    if (!_)
      for (
        _ = l._ptCache[a] = [], T = l._ptLookup, v = l._targets.length;
        v--;

      ) {
        if (((m = T[v][a]), m && m.d && m.d._pt))
          for (m = m.d._pt; m && m.p !== a && m.fp !== a; ) m = m._next;
        if (!m)
          return (
            (kh = 1),
            (l.vars[a] = "+=0"),
            v0(l, h),
            (kh = 0),
            D ? ff(a + " not eligible for reset") : 1
          );
        _.push(m);
      }
    for (v = _.length; v--; )
      (S = _[v]),
        (m = S._pt || S),
        (m.s = (r || r === 0) && !s ? r : m.s + (r || 0) + o * m.c),
        (m.c = i - m.s),
        S.e && (S.e = xe(i) + ru(S.e)),
        S.b && (S.b = m.s + ru(S.b));
  },
  Bv = function (l, a) {
    var i = l[0] ? Ri(l[0]).harness : 0,
      r = i && i.aliases,
      s,
      o,
      h,
      D;
    if (!r) return a;
    s = Ya({}, a);
    for (o in r)
      if (o in s) for (D = r[o].split(","), h = D.length; h--; ) s[D[h]] = s[o];
    return s;
  },
  Nv = function (l, a, i, r) {
    var s = a.ease || r || "power1.inOut",
      o,
      h;
    if (cu(a))
      (h = i[l] || (i[l] = [])),
        a.forEach(function (D, _) {
          return h.push({ t: (_ / (a.length - 1)) * 100, v: D, e: s });
        });
    else
      for (o in a)
        (h = i[o] || (i[o] = [])),
          o === "ease" || h.push({ t: parseFloat(l), v: a[o], e: s });
  },
  Wr = function (l, a, i, r, s) {
    return be(l)
      ? l.call(a, i, r, s)
      : Ke(l) && ~l.indexOf("random(")
      ? cf(l)
      : l;
  },
  jp = p0 + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  Lp = {};
Nu(jp + ",id,stagger,delay,duration,paused,scrollTrigger", function (d) {
  return (Lp[d] = 1);
});
var we = (function (d) {
  rp(l, d);
  function l(i, r, s, o) {
    var h;
    typeof r == "number" && ((s.duration = r), (r = s), (s = null)),
      (h = d.call(this, o ? r : Jr(r)) || this);
    var D = h.vars,
      _ = D.duration,
      m = D.delay,
      S = D.immediateRender,
      T = D.stagger,
      v = D.overwrite,
      x = D.keyframes,
      b = D.defaults,
      A = D.scrollTrigger,
      G = D.yoyoEase,
      H = r.parent || de,
      X = (cu(i) || sp(i) ? bn(i[0]) : "length" in r) ? [i] : vl(i),
      U,
      F,
      Z,
      Y,
      K,
      k,
      J,
      st;
    if (
      ((h._targets = X.length
        ? m0(X)
        : ff(
            "GSAP target " + i + " not found. https://gsap.com",
            !el.nullTargetWarn
          ) || []),
      (h._ptLookup = []),
      (h._overwrite = v),
      x || T || As(_) || As(m))
    ) {
      if (
        ((r = h.vars),
        (U = h.timeline =
          new bu({
            data: "nested",
            defaults: b || {},
            targets: H && H.data === "nested" ? H.vars.targets : X,
          })),
        U.kill(),
        (U.parent = U._dp = gn(h)),
        (U._start = 0),
        T || As(_) || As(m))
      ) {
        if (((Y = X.length), (J = T && Ap(T)), Zl(T)))
          for (K in T) ~jp.indexOf(K) && (st || (st = {}), (st[K] = T[K]));
        for (F = 0; F < Y; F++)
          (Z = Is(r, Lp)),
            (Z.stagger = 0),
            G && (Z.yoyoEase = G),
            st && Ya(Z, st),
            (k = X[F]),
            (Z.duration = +Wr(_, gn(h), F, k, X)),
            (Z.delay = (+Wr(m, gn(h), F, k, X) || 0) - h._delay),
            !T &&
              Y === 1 &&
              Z.delay &&
              ((h._delay = m = Z.delay), (h._start += m), (Z.delay = 0)),
            U.to(k, Z, J ? J(F, k, X) : 0),
            (U._ease = Ft.none);
        U.duration() ? (_ = m = 0) : (h.timeline = 0);
      } else if (x) {
        Jr(ll(U.vars.defaults, { ease: "none" })),
          (U._ease = Ni(x.ease || r.ease || "none"));
        var $ = 0,
          vt,
          mt,
          ot;
        if (cu(x))
          x.forEach(function (R) {
            return U.to(X, R, ">");
          }),
            U.duration();
        else {
          Z = {};
          for (K in x)
            K === "ease" || K === "easeEach" || Nv(K, x[K], Z, x.easeEach);
          for (K in Z)
            for (
              vt = Z[K].sort(function (R, L) {
                return R.t - L.t;
              }),
                $ = 0,
                F = 0;
              F < vt.length;
              F++
            )
              (mt = vt[F]),
                (ot = {
                  ease: mt.e,
                  duration: ((mt.t - (F ? vt[F - 1].t : 0)) / 100) * _,
                }),
                (ot[K] = mt.v),
                U.to(X, ot, $),
                ($ += ot.duration);
          U.duration() < _ && U.to({}, { duration: _ - U.duration() });
        }
      }
      _ || h.duration((_ = U.duration()));
    } else h.timeline = 0;
    return (
      v === !0 && !o0 && ((Kn = gn(h)), de.killTweensOf(X), (Kn = 0)),
      Xl(H, gn(h), s),
      r.reversed && h.reverse(),
      r.paused && h.paused(!0),
      (S ||
        (!_ &&
          !x &&
          h._start === Fe(H._time) &&
          Bu(S) &&
          cv(gn(h)) &&
          H.data !== "nested")) &&
        ((h._tTime = -1e-8), h.render(Math.max(0, -m) || 0)),
      A && Tp(gn(h), A),
      h
    );
  }
  var a = l.prototype;
  return (
    (a.render = function (r, s, o) {
      var h = this._time,
        D = this._tDur,
        _ = this._dur,
        m = r < 0,
        S = r > D - su && !m ? D : r < su ? 0 : r,
        T,
        v,
        x,
        b,
        A,
        G,
        H,
        X,
        U;
      if (!_) hv(this, r, s, o);
      else if (
        S !== this._tTime ||
        !r ||
        o ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== m) ||
        this._lazy
      ) {
        if (((T = S), (X = this.timeline), this._repeat)) {
          if (((b = _ + this._rDelay), this._repeat < -1 && m))
            return this.totalTime(b * 100 + r, s, o);
          if (
            ((T = Fe(S % b)),
            S === D
              ? ((x = this._repeat), (T = _))
              : ((A = Fe(S / b)),
                (x = ~~A),
                x && x === A ? ((T = _), x--) : T > _ && (T = _)),
            (G = this._yoyo && x & 1),
            G && ((U = this._yEase), (T = _ - T)),
            (A = qa(this._tTime, b)),
            T === h && !o && this._initted && x === A)
          )
            return (this._tTime = S), this;
          x !== A &&
            (X && this._yEase && Yp(X, G),
            this.vars.repeatRefresh &&
              !G &&
              !this._lock &&
              T !== b &&
              this._initted &&
              ((this._lock = o = 1),
              (this.render(Fe(b * x), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (Ep(this, m ? r : T, o, s, S)) return (this._tTime = 0), this;
          if (h !== this._time && !(o && this.vars.repeatRefresh && x !== A))
            return this;
          if (_ !== this._dur) return this.render(r, s, o);
        }
        if (
          ((this._tTime = S),
          (this._time = T),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = H = (U || this._ease)(T / _)),
          this._from && (this.ratio = H = 1 - H),
          T && !h && !s && !x && (tl(this, "onStart"), this._tTime !== S))
        )
          return this;
        for (v = this._pt; v; ) v.r(H, v.d), (v = v._next);
        (X && X.render(r < 0 ? r : X._dur * X._ease(T / this._dur), s, o)) ||
          (this._startAt && (this._zTime = r)),
          this._onUpdate &&
            !s &&
            (m && jh(this, r, s, o), tl(this, "onUpdate")),
          this._repeat &&
            x !== A &&
            this.vars.onRepeat &&
            !s &&
            this.parent &&
            tl(this, "onRepeat"),
          (S === this._tDur || !S) &&
            this._tTime === S &&
            (m && !this._onUpdate && jh(this, r, !0, !0),
            (r || !_) &&
              ((S === this._tDur && this._ts > 0) || (!S && this._ts < 0)) &&
              ui(this, 1),
            !s &&
              !(m && !h) &&
              (S || h || G) &&
              (tl(this, S === D ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(S < D && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (a.targets = function () {
      return this._targets;
    }),
    (a.invalidate = function (r) {
      return (
        (!r || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(r),
        d.prototype.invalidate.call(this, r)
      );
    }),
    (a.resetTo = function (r, s, o, h, D) {
      of || Pu.wake(), this._ts || this.play();
      var _ = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        m;
      return (
        this._initted || v0(this, _),
        (m = this._ease(_ / this._dur)),
        Rv(this, r, s, o, h, m, _, D)
          ? this.resetTo(r, s, o, h, 1)
          : (oc(this, 0),
            this.parent ||
              bp(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (a.kill = function (r, s) {
      if ((s === void 0 && (s = "all"), !r && (!s || s === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? Gr(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!eu),
          this
        );
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(r, s, Kn && Kn.vars.overwrite !== !0)
            ._first || Gr(this),
          this.parent &&
            o !== this.timeline.totalDuration() &&
            Xa(this, (this._dur * this.timeline._tDur) / o, 0, 1),
          this
        );
      }
      var h = this._targets,
        D = r ? vl(r) : h,
        _ = this._ptLookup,
        m = this._pt,
        S,
        T,
        v,
        x,
        b,
        A,
        G;
      if ((!s || s === "all") && fv(h, D))
        return s === "all" && (this._pt = 0), Gr(this);
      for (
        S = this._op = this._op || [],
          s !== "all" &&
            (Ke(s) &&
              ((b = {}),
              Nu(s, function (H) {
                return (b[H] = 1);
              }),
              (s = b)),
            (s = Bv(h, s))),
          G = h.length;
        G--;

      )
        if (~D.indexOf(h[G])) {
          (T = _[G]),
            s === "all"
              ? ((S[G] = s), (x = T), (v = {}))
              : ((v = S[G] = S[G] || {}), (x = s));
          for (b in x)
            (A = T && T[b]),
              A &&
                ((!("kill" in A.d) || A.d.kill(b) === !0) && sc(this, A, "_pt"),
                delete T[b]),
              v !== "all" && (v[b] = 1);
        }
      return this._initted && !this._pt && m && Gr(this), this;
    }),
    (l.to = function (r, s) {
      return new l(r, s, arguments[2]);
    }),
    (l.from = function (r, s) {
      return $r(1, arguments);
    }),
    (l.delayedCall = function (r, s, o, h) {
      return new l(s, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: r,
        onComplete: s,
        onReverseComplete: s,
        onCompleteParams: o,
        onReverseCompleteParams: o,
        callbackScope: h,
      });
    }),
    (l.fromTo = function (r, s, o) {
      return $r(2, arguments);
    }),
    (l.set = function (r, s) {
      return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new l(r, s);
    }),
    (l.killTweensOf = function (r, s, o) {
      return de.killTweensOf(r, s, o);
    }),
    l
  );
})(hf);
ll(we.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Nu("staggerTo,staggerFrom,staggerFromTo", function (d) {
  we[d] = function () {
    var l = new bu(),
      a = Vh.call(arguments, 0);
    return a.splice(d === "staggerFromTo" ? 5 : 4, 0, 0), l[d].apply(l, a);
  };
});
var b0 = function (l, a, i) {
    return (l[a] = i);
  },
  Vp = function (l, a, i) {
    return l[a](i);
  },
  Uv = function (l, a, i, r) {
    return l[a](r.fp, i);
  },
  wv = function (l, a, i) {
    return l.setAttribute(a, i);
  },
  S0 = function (l, a) {
    return be(l[a]) ? Vp : h0(l[a]) && l.setAttribute ? wv : b0;
  },
  Qp = function (l, a) {
    return a.set(a.t, a.p, Math.round((a.s + a.c * l) * 1e6) / 1e6, a);
  },
  Fv = function (l, a) {
    return a.set(a.t, a.p, !!(a.s + a.c * l), a);
  },
  Zp = function (l, a) {
    var i = a._pt,
      r = "";
    if (!l && a.b) r = a.b;
    else if (l === 1 && a.e) r = a.e;
    else {
      for (; i; )
        (r =
          i.p +
          (i.m ? i.m(i.s + i.c * l) : Math.round((i.s + i.c * l) * 1e4) / 1e4) +
          r),
          (i = i._next);
      r += a.c;
    }
    a.set(a.t, a.p, r, a);
  },
  T0 = function (l, a) {
    for (var i = a._pt; i; ) i.r(l, i.d), (i = i._next);
  },
  Hv = function (l, a, i, r) {
    for (var s = this._pt, o; s; )
      (o = s._next), s.p === r && s.modifier(l, a, i), (s = o);
  },
  Yv = function (l) {
    for (var a = this._pt, i, r; a; )
      (r = a._next),
        (a.p === l && !a.op) || a.op === l
          ? sc(this, a, "_pt")
          : a.dep || (i = 1),
        (a = r);
    return !i;
  },
  qv = function (l, a, i, r) {
    r.mSet(l, a, r.m.call(r.tween, i, r.mt), r);
  },
  kp = function (l) {
    for (var a = l._pt, i, r, s, o; a; ) {
      for (i = a._next, r = s; r && r.pr > a.pr; ) r = r._next;
      (a._prev = r ? r._prev : o) ? (a._prev._next = a) : (s = a),
        (a._next = r) ? (r._prev = a) : (o = a),
        (a = i);
    }
    l._pt = s;
  },
  Uu = (function () {
    function d(a, i, r, s, o, h, D, _, m) {
      (this.t = i),
        (this.s = s),
        (this.c = o),
        (this.p = r),
        (this.r = h || Qp),
        (this.d = D || this),
        (this.set = _ || b0),
        (this.pr = m || 0),
        (this._next = a),
        a && (a._prev = this);
    }
    var l = d.prototype;
    return (
      (l.modifier = function (i, r, s) {
        (this.mSet = this.mSet || this.set),
          (this.set = qv),
          (this.m = i),
          (this.mt = s),
          (this.tween = r);
      }),
      d
    );
  })();
Nu(
  p0 +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (d) {
    return (g0[d] = 1);
  }
);
ul.TweenMax = ul.TweenLite = we;
ul.TimelineLite = ul.TimelineMax = bu;
de = new bu({
  sortChildren: !1,
  defaults: Ha,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
el.stringFilter = Fp;
var Ui = [],
  Vs = {},
  Xv = [],
  zg = 0,
  Gv = 0,
  Oh = function (l) {
    return (Vs[l] || Xv).map(function (a) {
      return a();
    });
  },
  Kh = function () {
    var l = Date.now(),
      a = [];
    l - zg > 2 &&
      (Oh("matchMediaInit"),
      Ui.forEach(function (i) {
        var r = i.queries,
          s = i.conditions,
          o,
          h,
          D,
          _;
        for (h in r)
          (o = Yl.matchMedia(r[h]).matches),
            o && (D = 1),
            o !== s[h] && ((s[h] = o), (_ = 1));
        _ && (i.revert(), D && a.push(i));
      }),
      Oh("matchMediaRevert"),
      a.forEach(function (i) {
        return i.onMatch(i, function (r) {
          return i.add(null, r);
        });
      }),
      (zg = l),
      Oh("matchMedia"));
  },
  Kp = (function () {
    function d(a, i) {
      (this.selector = i && Qh(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Gv++),
        a && this.add(a);
    }
    var l = d.prototype;
    return (
      (l.add = function (i, r, s) {
        be(i) && ((s = r), (r = i), (i = be));
        var o = this,
          h = function () {
            var _ = ce,
              m = o.selector,
              S;
            return (
              _ && _ !== o && _.data.push(o),
              s && (o.selector = Qh(s)),
              (ce = o),
              (S = r.apply(o, arguments)),
              be(S) && o._r.push(S),
              (ce = _),
              (o.selector = m),
              (o.isReverted = !1),
              S
            );
          };
        return (
          (o.last = h),
          i === be
            ? h(o, function (D) {
                return o.add(null, D);
              })
            : i
            ? (o[i] = h)
            : h
        );
      }),
      (l.ignore = function (i) {
        var r = ce;
        (ce = null), i(this), (ce = r);
      }),
      (l.getTweens = function () {
        var i = [];
        return (
          this.data.forEach(function (r) {
            return r instanceof d
              ? i.push.apply(i, r.getTweens())
              : r instanceof we &&
                  !(r.parent && r.parent.data === "nested") &&
                  i.push(r);
          }),
          i
        );
      }),
      (l.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (l.kill = function (i, r) {
        var s = this;
        if (
          (i
            ? (function () {
                for (var h = s.getTweens(), D = s.data.length, _; D--; )
                  (_ = s.data[D]),
                    _.data === "isFlip" &&
                      (_.revert(),
                      _.getChildren(!0, !0, !1).forEach(function (m) {
                        return h.splice(h.indexOf(m), 1);
                      }));
                for (
                  h
                    .map(function (m) {
                      return {
                        g:
                          m._dur ||
                          m._delay ||
                          (m._sat && !m._sat.vars.immediateRender)
                            ? m.globalTime(0)
                            : -1 / 0,
                        t: m,
                      };
                    })
                    .sort(function (m, S) {
                      return S.g - m.g || -1 / 0;
                    })
                    .forEach(function (m) {
                      return m.t.revert(i);
                    }),
                    D = s.data.length;
                  D--;

                )
                  (_ = s.data[D]),
                    _ instanceof bu
                      ? _.data !== "nested" &&
                        (_.scrollTrigger && _.scrollTrigger.revert(), _.kill())
                      : !(_ instanceof we) && _.revert && _.revert(i);
                s._r.forEach(function (m) {
                  return m(i, s);
                }),
                  (s.isReverted = !0);
              })()
            : this.data.forEach(function (h) {
                return h.kill && h.kill();
              }),
          this.clear(),
          r)
        )
          for (var o = Ui.length; o--; )
            Ui[o].id === this.id && Ui.splice(o, 1);
      }),
      (l.revert = function (i) {
        this.kill(i || {});
      }),
      d
    );
  })(),
  jv = (function () {
    function d(a) {
      (this.contexts = []), (this.scope = a), ce && ce.data.push(this);
    }
    var l = d.prototype;
    return (
      (l.add = function (i, r, s) {
        Zl(i) || (i = { matches: i });
        var o = new Kp(0, s || this.scope),
          h = (o.conditions = {}),
          D,
          _,
          m;
        ce && !o.selector && (o.selector = ce.selector),
          this.contexts.push(o),
          (r = o.add("onMatch", r)),
          (o.queries = i);
        for (_ in i)
          _ === "all"
            ? (m = 1)
            : ((D = Yl.matchMedia(i[_])),
              D &&
                (Ui.indexOf(o) < 0 && Ui.push(o),
                (h[_] = D.matches) && (m = 1),
                D.addListener
                  ? D.addListener(Kh)
                  : D.addEventListener("change", Kh)));
        return (
          m &&
            r(o, function (S) {
              return o.add(null, S);
            }),
          this
        );
      }),
      (l.revert = function (i) {
        this.kill(i || {});
      }),
      (l.kill = function (i) {
        this.contexts.forEach(function (r) {
          return r.kill(i, !0);
        });
      }),
      d
    );
  })(),
  ec = {
    registerPlugin: function () {
      for (var l = arguments.length, a = new Array(l), i = 0; i < l; i++)
        a[i] = arguments[i];
      a.forEach(function (r) {
        return Np(r);
      });
    },
    timeline: function (l) {
      return new bu(l);
    },
    getTweensOf: function (l, a) {
      return de.getTweensOf(l, a);
    },
    getProperty: function (l, a, i, r) {
      Ke(l) && (l = vl(l)[0]);
      var s = Ri(l || {}).get,
        o = i ? vp : yp;
      return (
        i === "native" && (i = ""),
        l &&
          (a
            ? o((($u[a] && $u[a].get) || s)(l, a, i, r))
            : function (h, D, _) {
                return o((($u[h] && $u[h].get) || s)(l, h, D, _));
              })
      );
    },
    quickSetter: function (l, a, i) {
      if (((l = vl(l)), l.length > 1)) {
        var r = l.map(function (m) {
            return Fu.quickSetter(m, a, i);
          }),
          s = r.length;
        return function (m) {
          for (var S = s; S--; ) r[S](m);
        };
      }
      l = l[0] || {};
      var o = $u[a],
        h = Ri(l),
        D = (h.harness && (h.harness.aliases || {})[a]) || a,
        _ = o
          ? function (m) {
              var S = new o();
              (Ma._pt = 0),
                S.init(l, i ? m + i : m, Ma, 0, [l]),
                S.render(1, S),
                Ma._pt && T0(1, Ma);
            }
          : h.set(l, D);
      return o
        ? _
        : function (m) {
            return _(l, D, i ? m + i : m, h, 1);
          };
    },
    quickTo: function (l, a, i) {
      var r,
        s = Fu.to(
          l,
          ll(
            ((r = {}), (r[a] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r),
            i || {}
          )
        ),
        o = function (D, _, m) {
          return s.resetTo(a, D, _, m);
        };
      return (o.tween = s), o;
    },
    isTweening: function (l) {
      return de.getTweensOf(l, !0).length > 0;
    },
    defaults: function (l) {
      return l && l.ease && (l.ease = Ni(l.ease, Ha.ease)), xg(Ha, l || {});
    },
    config: function (l) {
      return xg(el, l || {});
    },
    registerEffect: function (l) {
      var a = l.name,
        i = l.effect,
        r = l.plugins,
        s = l.defaults,
        o = l.extendTimeline;
      (r || "").split(",").forEach(function (h) {
        return (
          h && !$u[h] && !ul[h] && ff(a + " effect requires " + h + " plugin.")
        );
      }),
        (Eh[a] = function (h, D, _) {
          return i(vl(h), ll(D || {}, s), _);
        }),
        o &&
          (bu.prototype[a] = function (h, D, _) {
            return this.add(Eh[a](h, Zl(D) ? D : (_ = D) && {}, this), _);
          });
    },
    registerEase: function (l, a) {
      Ft[l] = Ni(a);
    },
    parseEase: function (l, a) {
      return arguments.length ? Ni(l, a) : Ft;
    },
    getById: function (l) {
      return de.getById(l);
    },
    exportRoot: function (l, a) {
      l === void 0 && (l = {});
      var i = new bu(l),
        r,
        s;
      for (
        i.smoothChildTiming = Bu(l.smoothChildTiming),
          de.remove(i),
          i._dp = 0,
          i._time = i._tTime = de._time,
          r = de._first;
        r;

      )
        (s = r._next),
          (a ||
            !(
              !r._dur &&
              r instanceof we &&
              r.vars.onComplete === r._targets[0]
            )) &&
            Xl(i, r, r._start - r._delay),
          (r = s);
      return Xl(de, i, 0), i;
    },
    context: function (l, a) {
      return l ? new Kp(l, a) : ce;
    },
    matchMedia: function (l) {
      return new jv(l);
    },
    matchMediaRefresh: function () {
      return (
        Ui.forEach(function (l) {
          var a = l.conditions,
            i,
            r;
          for (r in a) a[r] && ((a[r] = !1), (i = 1));
          i && l.revert();
        }) || Kh()
      );
    },
    addEventListener: function (l, a) {
      var i = Vs[l] || (Vs[l] = []);
      ~i.indexOf(a) || i.push(a);
    },
    removeEventListener: function (l, a) {
      var i = Vs[l],
        r = i && i.indexOf(a);
      r >= 0 && i.splice(r, 1);
    },
    utils: {
      wrap: vv,
      wrapYoyo: bv,
      distribute: Ap,
      random: Mp,
      snap: Op,
      normalize: yv,
      getUnit: ru,
      clamp: Dv,
      splitColor: Up,
      toArray: vl,
      selector: Qh,
      mapRange: Rp,
      pipe: pv,
      unitize: mv,
      interpolate: Sv,
      shuffle: Cp,
    },
    install: _p,
    effects: Eh,
    ticker: Pu,
    updateRoot: bu.updateRoot,
    plugins: $u,
    globalTimeline: de,
    core: {
      PropTween: Uu,
      globals: Dp,
      Tween: we,
      Timeline: bu,
      Animation: hf,
      getCache: Ri,
      _removeLinkedListItem: sc,
      reverting: function () {
        return eu;
      },
      context: function (l) {
        return l && ce && (ce.data.push(l), (l._ctx = ce)), ce;
      },
      suppressOverwrites: function (l) {
        return (o0 = l);
      },
    },
  };
Nu("to,from,fromTo,delayedCall,set,killTweensOf", function (d) {
  return (ec[d] = we[d]);
});
Pu.add(bu.updateRoot);
Ma = ec.to({}, { duration: 0 });
var Lv = function (l, a) {
    for (var i = l._pt; i && i.p !== a && i.op !== a && i.fp !== a; )
      i = i._next;
    return i;
  },
  Vv = function (l, a) {
    var i = l._targets,
      r,
      s,
      o;
    for (r in a)
      for (s = i.length; s--; )
        (o = l._ptLookup[s][r]),
          o &&
            (o = o.d) &&
            (o._pt && (o = Lv(o, r)),
            o && o.modifier && o.modifier(a[r], l, i[s], r));
  },
  Mh = function (l, a) {
    return {
      name: l,
      rawVars: 1,
      init: function (r, s, o) {
        o._onInit = function (h) {
          var D, _;
          if (
            (Ke(s) &&
              ((D = {}),
              Nu(s, function (m) {
                return (D[m] = 1);
              }),
              (s = D)),
            a)
          ) {
            D = {};
            for (_ in s) D[_] = a(s[_]);
            s = D;
          }
          Vv(h, s);
        };
      },
    };
  },
  Fu =
    ec.registerPlugin(
      {
        name: "attr",
        init: function (l, a, i, r, s) {
          var o, h, D;
          this.tween = i;
          for (o in a)
            (D = l.getAttribute(o) || ""),
              (h = this.add(
                l,
                "setAttribute",
                (D || 0) + "",
                a[o],
                r,
                s,
                0,
                0,
                o
              )),
              (h.op = o),
              (h.b = D),
              this._props.push(o);
        },
        render: function (l, a) {
          for (var i = a._pt; i; )
            eu ? i.set(i.t, i.p, i.b, i) : i.r(l, i.d), (i = i._next);
        },
      },
      {
        name: "endArray",
        init: function (l, a) {
          for (var i = a.length; i--; )
            this.add(l, i, l[i] || 0, a[i], 0, 0, 0, 0, 0, 1);
        },
      },
      Mh("roundProps", Zh),
      Mh("modifiers"),
      Mh("snap", Op)
    ) || ec;
we.version = bu.version = Fu.version = "3.12.7";
dp = 1;
d0() && Ga();
Ft.Power0;
Ft.Power1;
Ft.Power2;
Ft.Power3;
Ft.Power4;
Ft.Linear;
Ft.Quad;
Ft.Cubic;
Ft.Quart;
Ft.Quint;
Ft.Strong;
Ft.Elastic;
Ft.Back;
Ft.SteppedEase;
Ft.Bounce;
Ft.Sine;
Ft.Expo;
Ft.Circ;
/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Rg,
  Jn,
  Ba,
  E0,
  Mi,
  Bg,
  x0,
  Qv = function () {
    return typeof window < "u";
  },
  Sn = {},
  Ci = 180 / Math.PI,
  Na = Math.PI / 180,
  Ta = Math.atan2,
  Ng = 1e8,
  C0 = /([A-Z])/g,
  Zv = /(left|right|width|margin|padding|x)/i,
  kv = /[\s,\(]\S/,
  Gl = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Jh = function (l, a) {
    return a.set(a.t, a.p, Math.round((a.s + a.c * l) * 1e4) / 1e4 + a.u, a);
  },
  Kv = function (l, a) {
    return a.set(
      a.t,
      a.p,
      l === 1 ? a.e : Math.round((a.s + a.c * l) * 1e4) / 1e4 + a.u,
      a
    );
  },
  Jv = function (l, a) {
    return a.set(
      a.t,
      a.p,
      l ? Math.round((a.s + a.c * l) * 1e4) / 1e4 + a.u : a.b,
      a
    );
  },
  $v = function (l, a) {
    var i = a.s + a.c * l;
    a.set(a.t, a.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + a.u, a);
  },
  Jp = function (l, a) {
    return a.set(a.t, a.p, l ? a.e : a.b, a);
  },
  $p = function (l, a) {
    return a.set(a.t, a.p, l !== 1 ? a.b : a.e, a);
  },
  Wv = function (l, a, i) {
    return (l.style[a] = i);
  },
  Pv = function (l, a, i) {
    return l.style.setProperty(a, i);
  },
  Iv = function (l, a, i) {
    return (l._gsap[a] = i);
  },
  t2 = function (l, a, i) {
    return (l._gsap.scaleX = l._gsap.scaleY = i);
  },
  e2 = function (l, a, i, r, s) {
    var o = l._gsap;
    (o.scaleX = o.scaleY = i), o.renderTransform(s, o);
  },
  u2 = function (l, a, i, r, s) {
    var o = l._gsap;
    (o[a] = i), o.renderTransform(s, o);
  },
  _e = "transform",
  wu = _e + "Origin",
  l2 = function d(l, a) {
    var i = this,
      r = this.target,
      s = r.style,
      o = r._gsap;
    if (l in Sn && s) {
      if (((this.tfm = this.tfm || {}), l !== "transform"))
        (l = Gl[l] || l),
          ~l.indexOf(",")
            ? l.split(",").forEach(function (h) {
                return (i.tfm[h] = pn(r, h));
              })
            : (this.tfm[l] = o.x ? o[l] : pn(r, l)),
          l === wu && (this.tfm.zOrigin = o.zOrigin);
      else
        return Gl.transform.split(",").forEach(function (h) {
          return d.call(i, h, a);
        });
      if (this.props.indexOf(_e) >= 0) return;
      o.svg &&
        ((this.svgo = r.getAttribute("data-svg-origin")),
        this.props.push(wu, a, "")),
        (l = _e);
    }
    (s || a) && this.props.push(l, a, s[l]);
  },
  Wp = function (l) {
    l.translate &&
      (l.removeProperty("translate"),
      l.removeProperty("scale"),
      l.removeProperty("rotate"));
  },
  n2 = function () {
    var l = this.props,
      a = this.target,
      i = a.style,
      r = a._gsap,
      s,
      o;
    for (s = 0; s < l.length; s += 3)
      l[s + 1]
        ? l[s + 1] === 2
          ? a[l[s]](l[s + 2])
          : (a[l[s]] = l[s + 2])
        : l[s + 2]
        ? (i[l[s]] = l[s + 2])
        : i.removeProperty(
            l[s].substr(0, 2) === "--"
              ? l[s]
              : l[s].replace(C0, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (o in this.tfm) r[o] = this.tfm[o];
      r.svg &&
        (r.renderTransform(),
        a.setAttribute("data-svg-origin", this.svgo || "")),
        (s = x0()),
        (!s || !s.isStart) &&
          !i[_e] &&
          (Wp(i),
          r.zOrigin &&
            i[wu] &&
            ((i[wu] += " " + r.zOrigin + "px"),
            (r.zOrigin = 0),
            r.renderTransform()),
          (r.uncache = 1));
    }
  },
  Pp = function (l, a) {
    var i = { target: l, props: [], revert: n2, save: l2 };
    return (
      l._gsap || Fu.core.getCache(l),
      a &&
        l.style &&
        l.nodeType &&
        a.split(",").forEach(function (r) {
          return i.save(r);
        }),
      i
    );
  },
  Ip,
  $h = function (l, a) {
    var i = Jn.createElementNS
      ? Jn.createElementNS(
          (a || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          l
        )
      : Jn.createElement(l);
    return i && i.style ? i : Jn.createElement(l);
  },
  Vl = function d(l, a, i) {
    var r = getComputedStyle(l);
    return (
      r[a] ||
      r.getPropertyValue(a.replace(C0, "-$1").toLowerCase()) ||
      r.getPropertyValue(a) ||
      (!i && d(l, ja(a) || a, 1)) ||
      ""
    );
  },
  Ug = "O,Moz,ms,Ms,Webkit".split(","),
  ja = function (l, a, i) {
    var r = a || Mi,
      s = r.style,
      o = 5;
    if (l in s && !i) return l;
    for (
      l = l.charAt(0).toUpperCase() + l.substr(1);
      o-- && !(Ug[o] + l in s);

    );
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Ug[o] : "") + l;
  },
  Wh = function () {
    Qv() &&
      window.document &&
      ((Rg = window),
      (Jn = Rg.document),
      (Ba = Jn.documentElement),
      (Mi = $h("div") || { style: {} }),
      $h("div"),
      (_e = ja(_e)),
      (wu = _e + "Origin"),
      (Mi.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Ip = !!ja("perspective")),
      (x0 = Fu.core.reverting),
      (E0 = 1));
  },
  wg = function (l) {
    var a = l.ownerSVGElement,
      i = $h(
        "svg",
        (a && a.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
      ),
      r = l.cloneNode(!0),
      s;
    (r.style.display = "block"), i.appendChild(r), Ba.appendChild(i);
    try {
      s = r.getBBox();
    } catch {}
    return i.removeChild(r), Ba.removeChild(i), s;
  },
  Fg = function (l, a) {
    for (var i = a.length; i--; )
      if (l.hasAttribute(a[i])) return l.getAttribute(a[i]);
  },
  t1 = function (l) {
    var a, i;
    try {
      a = l.getBBox();
    } catch {
      (a = wg(l)), (i = 1);
    }
    return (
      (a && (a.width || a.height)) || i || (a = wg(l)),
      a && !a.width && !a.x && !a.y
        ? {
            x: +Fg(l, ["x", "cx", "x1"]) || 0,
            y: +Fg(l, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : a
    );
  },
  e1 = function (l) {
    return !!(l.getCTM && (!l.parentNode || l.ownerSVGElement) && t1(l));
  },
  Yi = function (l, a) {
    if (a) {
      var i = l.style,
        r;
      a in Sn && a !== wu && (a = _e),
        i.removeProperty
          ? ((r = a.substr(0, 2)),
            (r === "ms" || a.substr(0, 6) === "webkit") && (a = "-" + a),
            i.removeProperty(
              r === "--" ? a : a.replace(C0, "-$1").toLowerCase()
            ))
          : i.removeAttribute(a);
    }
  },
  $n = function (l, a, i, r, s, o) {
    var h = new Uu(l._pt, a, i, 0, 1, o ? $p : Jp);
    return (l._pt = h), (h.b = r), (h.e = s), l._props.push(i), h;
  },
  Hg = { deg: 1, rad: 1, turn: 1 },
  i2 = { grid: 1, flex: 1 },
  li = function d(l, a, i, r) {
    var s = parseFloat(i) || 0,
      o = (i + "").trim().substr((s + "").length) || "px",
      h = Mi.style,
      D = Zv.test(a),
      _ = l.tagName.toLowerCase() === "svg",
      m = (_ ? "client" : "offset") + (D ? "Width" : "Height"),
      S = 100,
      T = r === "px",
      v = r === "%",
      x,
      b,
      A,
      G;
    if (r === o || !s || Hg[r] || Hg[o]) return s;
    if (
      (o !== "px" && !T && (s = d(l, a, i, "px")),
      (G = l.getCTM && e1(l)),
      (v || o === "%") && (Sn[a] || ~a.indexOf("adius")))
    )
      return (
        (x = G ? l.getBBox()[D ? "width" : "height"] : l[m]),
        xe(v ? (s / x) * S : (s / 100) * x)
      );
    if (
      ((h[D ? "width" : "height"] = S + (T ? o : r)),
      (b =
        (r !== "rem" && ~a.indexOf("adius")) ||
        (r === "em" && l.appendChild && !_)
          ? l
          : l.parentNode),
      G && (b = (l.ownerSVGElement || {}).parentNode),
      (!b || b === Jn || !b.appendChild) && (b = Jn.body),
      (A = b._gsap),
      A && v && A.width && D && A.time === Pu.time && !A.uncache)
    )
      return xe((s / A.width) * S);
    if (v && (a === "height" || a === "width")) {
      var H = l.style[a];
      (l.style[a] = S + r), (x = l[m]), H ? (l.style[a] = H) : Yi(l, a);
    } else
      (v || o === "%") &&
        !i2[Vl(b, "display")] &&
        (h.position = Vl(l, "position")),
        b === l && (h.position = "static"),
        b.appendChild(Mi),
        (x = Mi[m]),
        b.removeChild(Mi),
        (h.position = "absolute");
    return (
      D && v && ((A = Ri(b)), (A.time = Pu.time), (A.width = b[m])),
      xe(T ? (x * s) / S : x && s ? (S / x) * s : 0)
    );
  },
  pn = function (l, a, i, r) {
    var s;
    return (
      E0 || Wh(),
      a in Gl &&
        a !== "transform" &&
        ((a = Gl[a]), ~a.indexOf(",") && (a = a.split(",")[0])),
      Sn[a] && a !== "transform"
        ? ((s = _f(l, r)),
          (s =
            a !== "transformOrigin"
              ? s[a]
              : s.svg
              ? s.origin
              : lc(Vl(l, wu)) + " " + s.zOrigin + "px"))
        : ((s = l.style[a]),
          (!s || s === "auto" || r || ~(s + "").indexOf("calc(")) &&
            (s =
              (uc[a] && uc[a](l, a, i)) ||
              Vl(l, a) ||
              pp(l, a) ||
              (a === "opacity" ? 1 : 0))),
      i && !~(s + "").trim().indexOf(" ") ? li(l, a, s, i) + i : s
    );
  },
  a2 = function (l, a, i, r) {
    if (!i || i === "none") {
      var s = ja(a, l, 1),
        o = s && Vl(l, s, 1);
      o && o !== i
        ? ((a = s), (i = o))
        : a === "borderColor" && (i = Vl(l, "borderTopColor"));
    }
    var h = new Uu(this._pt, l.style, a, 0, 1, Zp),
      D = 0,
      _ = 0,
      m,
      S,
      T,
      v,
      x,
      b,
      A,
      G,
      H,
      X,
      U,
      F;
    if (
      ((h.b = i),
      (h.e = r),
      (i += ""),
      (r += ""),
      r === "auto" &&
        ((b = l.style[a]),
        (l.style[a] = r),
        (r = Vl(l, a) || r),
        b ? (l.style[a] = b) : Yi(l, a)),
      (m = [i, r]),
      Fp(m),
      (i = m[0]),
      (r = m[1]),
      (T = i.match(Oa) || []),
      (F = r.match(Oa) || []),
      F.length)
    ) {
      for (; (S = Oa.exec(r)); )
        (A = S[0]),
          (H = r.substring(D, S.index)),
          x
            ? (x = (x + 1) % 5)
            : (H.substr(-5) === "rgba(" || H.substr(-5) === "hsla(") && (x = 1),
          A !== (b = T[_++] || "") &&
            ((v = parseFloat(b) || 0),
            (U = b.substr((v + "").length)),
            A.charAt(1) === "=" && (A = Ra(v, A) + U),
            (G = parseFloat(A)),
            (X = A.substr((G + "").length)),
            (D = Oa.lastIndex - X.length),
            X ||
              ((X = X || el.units[a] || U),
              D === r.length && ((r += X), (h.e += X))),
            U !== X && (v = li(l, a, b, X) || 0),
            (h._pt = {
              _next: h._pt,
              p: H || _ === 1 ? H : ",",
              s: v,
              c: G - v,
              m: (x && x < 4) || a === "zIndex" ? Math.round : 0,
            }));
      h.c = D < r.length ? r.substring(D, r.length) : "";
    } else h.r = a === "display" && r === "none" ? $p : Jp;
    return op.test(r) && (h.e = 0), (this._pt = h), h;
  },
  Yg = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  r2 = function (l) {
    var a = l.split(" "),
      i = a[0],
      r = a[1] || "50%";
    return (
      (i === "top" || i === "bottom" || r === "left" || r === "right") &&
        ((l = i), (i = r), (r = l)),
      (a[0] = Yg[i] || i),
      (a[1] = Yg[r] || r),
      a.join(" ")
    );
  },
  f2 = function (l, a) {
    if (a.tween && a.tween._time === a.tween._dur) {
      var i = a.t,
        r = i.style,
        s = a.u,
        o = i._gsap,
        h,
        D,
        _;
      if (s === "all" || s === !0) (r.cssText = ""), (D = 1);
      else
        for (s = s.split(","), _ = s.length; --_ > -1; )
          (h = s[_]),
            Sn[h] && ((D = 1), (h = h === "transformOrigin" ? wu : _e)),
            Yi(i, h);
      D &&
        (Yi(i, _e),
        o &&
          (o.svg && i.removeAttribute("transform"),
          (r.scale = r.rotate = r.translate = "none"),
          _f(i, 1),
          (o.uncache = 1),
          Wp(r)));
    }
  },
  uc = {
    clearProps: function (l, a, i, r, s) {
      if (s.data !== "isFromStart") {
        var o = (l._pt = new Uu(l._pt, a, i, 0, 0, f2));
        return (o.u = r), (o.pr = -10), (o.tween = s), l._props.push(i), 1;
      }
    },
  },
  df = [1, 0, 0, 1, 0, 0],
  u1 = {},
  l1 = function (l) {
    return l === "matrix(1, 0, 0, 1, 0, 0)" || l === "none" || !l;
  },
  qg = function (l) {
    var a = Vl(l, _e);
    return l1(a) ? df : a.substr(7).match(cp).map(xe);
  },
  A0 = function (l, a) {
    var i = l._gsap || Ri(l),
      r = l.style,
      s = qg(l),
      o,
      h,
      D,
      _;
    return i.svg && l.getAttribute("transform")
      ? ((D = l.transform.baseVal.consolidate().matrix),
        (s = [D.a, D.b, D.c, D.d, D.e, D.f]),
        s.join(",") === "1,0,0,1,0,0" ? df : s)
      : (s === df &&
          !l.offsetParent &&
          l !== Ba &&
          !i.svg &&
          ((D = r.display),
          (r.display = "block"),
          (o = l.parentNode),
          (!o || (!l.offsetParent && !l.getBoundingClientRect().width)) &&
            ((_ = 1), (h = l.nextElementSibling), Ba.appendChild(l)),
          (s = qg(l)),
          D ? (r.display = D) : Yi(l, "display"),
          _ &&
            (h
              ? o.insertBefore(l, h)
              : o
              ? o.appendChild(l)
              : Ba.removeChild(l))),
        a && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
  },
  Ph = function (l, a, i, r, s, o) {
    var h = l._gsap,
      D = s || A0(l, !0),
      _ = h.xOrigin || 0,
      m = h.yOrigin || 0,
      S = h.xOffset || 0,
      T = h.yOffset || 0,
      v = D[0],
      x = D[1],
      b = D[2],
      A = D[3],
      G = D[4],
      H = D[5],
      X = a.split(" "),
      U = parseFloat(X[0]) || 0,
      F = parseFloat(X[1]) || 0,
      Z,
      Y,
      K,
      k;
    i
      ? D !== df &&
        (Y = v * A - x * b) &&
        ((K = U * (A / Y) + F * (-b / Y) + (b * H - A * G) / Y),
        (k = U * (-x / Y) + F * (v / Y) - (v * H - x * G) / Y),
        (U = K),
        (F = k))
      : ((Z = t1(l)),
        (U = Z.x + (~X[0].indexOf("%") ? (U / 100) * Z.width : U)),
        (F = Z.y + (~(X[1] || X[0]).indexOf("%") ? (F / 100) * Z.height : F))),
      r || (r !== !1 && h.smooth)
        ? ((G = U - _),
          (H = F - m),
          (h.xOffset = S + (G * v + H * b) - G),
          (h.yOffset = T + (G * x + H * A) - H))
        : (h.xOffset = h.yOffset = 0),
      (h.xOrigin = U),
      (h.yOrigin = F),
      (h.smooth = !!r),
      (h.origin = a),
      (h.originIsAbsolute = !!i),
      (l.style[wu] = "0px 0px"),
      o &&
        ($n(o, h, "xOrigin", _, U),
        $n(o, h, "yOrigin", m, F),
        $n(o, h, "xOffset", S, h.xOffset),
        $n(o, h, "yOffset", T, h.yOffset)),
      l.setAttribute("data-svg-origin", U + " " + F);
  },
  _f = function (l, a) {
    var i = l._gsap || new Xp(l);
    if ("x" in i && !a && !i.uncache) return i;
    var r = l.style,
      s = i.scaleX < 0,
      o = "px",
      h = "deg",
      D = getComputedStyle(l),
      _ = Vl(l, wu) || "0",
      m,
      S,
      T,
      v,
      x,
      b,
      A,
      G,
      H,
      X,
      U,
      F,
      Z,
      Y,
      K,
      k,
      J,
      st,
      $,
      vt,
      mt,
      ot,
      R,
      L,
      tt,
      ct,
      p,
      q,
      I,
      P,
      ut,
      _t;
    return (
      (m = S = T = b = A = G = H = X = U = 0),
      (v = x = 1),
      (i.svg = !!(l.getCTM && e1(l))),
      D.translate &&
        ((D.translate !== "none" ||
          D.scale !== "none" ||
          D.rotate !== "none") &&
          (r[_e] =
            (D.translate !== "none"
              ? "translate3d(" +
                (D.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (D.rotate !== "none" ? "rotate(" + D.rotate + ") " : "") +
            (D.scale !== "none"
              ? "scale(" + D.scale.split(" ").join(",") + ") "
              : "") +
            (D[_e] !== "none" ? D[_e] : "")),
        (r.scale = r.rotate = r.translate = "none")),
      (Y = A0(l, i.svg)),
      i.svg &&
        (i.uncache
          ? ((tt = l.getBBox()),
            (_ = i.xOrigin - tt.x + "px " + (i.yOrigin - tt.y) + "px"),
            (L = ""))
          : (L = !a && l.getAttribute("data-svg-origin")),
        Ph(l, L || _, !!L || i.originIsAbsolute, i.smooth !== !1, Y)),
      (F = i.xOrigin || 0),
      (Z = i.yOrigin || 0),
      Y !== df &&
        ((st = Y[0]),
        ($ = Y[1]),
        (vt = Y[2]),
        (mt = Y[3]),
        (m = ot = Y[4]),
        (S = R = Y[5]),
        Y.length === 6
          ? ((v = Math.sqrt(st * st + $ * $)),
            (x = Math.sqrt(mt * mt + vt * vt)),
            (b = st || $ ? Ta($, st) * Ci : 0),
            (H = vt || mt ? Ta(vt, mt) * Ci + b : 0),
            H && (x *= Math.abs(Math.cos(H * Na))),
            i.svg &&
              ((m -= F - (F * st + Z * vt)), (S -= Z - (F * $ + Z * mt))))
          : ((_t = Y[6]),
            (P = Y[7]),
            (p = Y[8]),
            (q = Y[9]),
            (I = Y[10]),
            (ut = Y[11]),
            (m = Y[12]),
            (S = Y[13]),
            (T = Y[14]),
            (K = Ta(_t, I)),
            (A = K * Ci),
            K &&
              ((k = Math.cos(-K)),
              (J = Math.sin(-K)),
              (L = ot * k + p * J),
              (tt = R * k + q * J),
              (ct = _t * k + I * J),
              (p = ot * -J + p * k),
              (q = R * -J + q * k),
              (I = _t * -J + I * k),
              (ut = P * -J + ut * k),
              (ot = L),
              (R = tt),
              (_t = ct)),
            (K = Ta(-vt, I)),
            (G = K * Ci),
            K &&
              ((k = Math.cos(-K)),
              (J = Math.sin(-K)),
              (L = st * k - p * J),
              (tt = $ * k - q * J),
              (ct = vt * k - I * J),
              (ut = mt * J + ut * k),
              (st = L),
              ($ = tt),
              (vt = ct)),
            (K = Ta($, st)),
            (b = K * Ci),
            K &&
              ((k = Math.cos(K)),
              (J = Math.sin(K)),
              (L = st * k + $ * J),
              (tt = ot * k + R * J),
              ($ = $ * k - st * J),
              (R = R * k - ot * J),
              (st = L),
              (ot = tt)),
            A &&
              Math.abs(A) + Math.abs(b) > 359.9 &&
              ((A = b = 0), (G = 180 - G)),
            (v = xe(Math.sqrt(st * st + $ * $ + vt * vt))),
            (x = xe(Math.sqrt(R * R + _t * _t))),
            (K = Ta(ot, R)),
            (H = Math.abs(K) > 2e-4 ? K * Ci : 0),
            (U = ut ? 1 / (ut < 0 ? -ut : ut) : 0)),
        i.svg &&
          ((L = l.getAttribute("transform")),
          (i.forceCSS = l.setAttribute("transform", "") || !l1(Vl(l, _e))),
          L && l.setAttribute("transform", L))),
      Math.abs(H) > 90 &&
        Math.abs(H) < 270 &&
        (s
          ? ((v *= -1), (H += b <= 0 ? 180 : -180), (b += b <= 0 ? 180 : -180))
          : ((x *= -1), (H += H <= 0 ? 180 : -180))),
      (a = a || i.uncache),
      (i.x =
        m -
        ((i.xPercent =
          m &&
          ((!a && i.xPercent) ||
            (Math.round(l.offsetWidth / 2) === Math.round(-m) ? -50 : 0)))
          ? (l.offsetWidth * i.xPercent) / 100
          : 0) +
        o),
      (i.y =
        S -
        ((i.yPercent =
          S &&
          ((!a && i.yPercent) ||
            (Math.round(l.offsetHeight / 2) === Math.round(-S) ? -50 : 0)))
          ? (l.offsetHeight * i.yPercent) / 100
          : 0) +
        o),
      (i.z = T + o),
      (i.scaleX = xe(v)),
      (i.scaleY = xe(x)),
      (i.rotation = xe(b) + h),
      (i.rotationX = xe(A) + h),
      (i.rotationY = xe(G) + h),
      (i.skewX = H + h),
      (i.skewY = X + h),
      (i.transformPerspective = U + o),
      (i.zOrigin = parseFloat(_.split(" ")[2]) || (!a && i.zOrigin) || 0) &&
        (r[wu] = lc(_)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = el.force3D),
      (i.renderTransform = i.svg ? c2 : Ip ? n1 : s2),
      (i.uncache = 0),
      i
    );
  },
  lc = function (l) {
    return (l = l.split(" "))[0] + " " + l[1];
  },
  zh = function (l, a, i) {
    var r = ru(a);
    return xe(parseFloat(a) + parseFloat(li(l, "x", i + "px", r))) + r;
  },
  s2 = function (l, a) {
    (a.z = "0px"),
      (a.rotationY = a.rotationX = "0deg"),
      (a.force3D = 0),
      n1(l, a);
  },
  Ei = "0deg",
  Yr = "0px",
  xi = ") ",
  n1 = function (l, a) {
    var i = a || this,
      r = i.xPercent,
      s = i.yPercent,
      o = i.x,
      h = i.y,
      D = i.z,
      _ = i.rotation,
      m = i.rotationY,
      S = i.rotationX,
      T = i.skewX,
      v = i.skewY,
      x = i.scaleX,
      b = i.scaleY,
      A = i.transformPerspective,
      G = i.force3D,
      H = i.target,
      X = i.zOrigin,
      U = "",
      F = (G === "auto" && l && l !== 1) || G === !0;
    if (X && (S !== Ei || m !== Ei)) {
      var Z = parseFloat(m) * Na,
        Y = Math.sin(Z),
        K = Math.cos(Z),
        k;
      (Z = parseFloat(S) * Na),
        (k = Math.cos(Z)),
        (o = zh(H, o, Y * k * -X)),
        (h = zh(H, h, -Math.sin(Z) * -X)),
        (D = zh(H, D, K * k * -X + X));
    }
    A !== Yr && (U += "perspective(" + A + xi),
      (r || s) && (U += "translate(" + r + "%, " + s + "%) "),
      (F || o !== Yr || h !== Yr || D !== Yr) &&
        (U +=
          D !== Yr || F
            ? "translate3d(" + o + ", " + h + ", " + D + ") "
            : "translate(" + o + ", " + h + xi),
      _ !== Ei && (U += "rotate(" + _ + xi),
      m !== Ei && (U += "rotateY(" + m + xi),
      S !== Ei && (U += "rotateX(" + S + xi),
      (T !== Ei || v !== Ei) && (U += "skew(" + T + ", " + v + xi),
      (x !== 1 || b !== 1) && (U += "scale(" + x + ", " + b + xi),
      (H.style[_e] = U || "translate(0, 0)");
  },
  c2 = function (l, a) {
    var i = a || this,
      r = i.xPercent,
      s = i.yPercent,
      o = i.x,
      h = i.y,
      D = i.rotation,
      _ = i.skewX,
      m = i.skewY,
      S = i.scaleX,
      T = i.scaleY,
      v = i.target,
      x = i.xOrigin,
      b = i.yOrigin,
      A = i.xOffset,
      G = i.yOffset,
      H = i.forceCSS,
      X = parseFloat(o),
      U = parseFloat(h),
      F,
      Z,
      Y,
      K,
      k;
    (D = parseFloat(D)),
      (_ = parseFloat(_)),
      (m = parseFloat(m)),
      m && ((m = parseFloat(m)), (_ += m), (D += m)),
      D || _
        ? ((D *= Na),
          (_ *= Na),
          (F = Math.cos(D) * S),
          (Z = Math.sin(D) * S),
          (Y = Math.sin(D - _) * -T),
          (K = Math.cos(D - _) * T),
          _ &&
            ((m *= Na),
            (k = Math.tan(_ - m)),
            (k = Math.sqrt(1 + k * k)),
            (Y *= k),
            (K *= k),
            m &&
              ((k = Math.tan(m)),
              (k = Math.sqrt(1 + k * k)),
              (F *= k),
              (Z *= k))),
          (F = xe(F)),
          (Z = xe(Z)),
          (Y = xe(Y)),
          (K = xe(K)))
        : ((F = S), (K = T), (Z = Y = 0)),
      ((X && !~(o + "").indexOf("px")) || (U && !~(h + "").indexOf("px"))) &&
        ((X = li(v, "x", o, "px")), (U = li(v, "y", h, "px"))),
      (x || b || A || G) &&
        ((X = xe(X + x - (x * F + b * Y) + A)),
        (U = xe(U + b - (x * Z + b * K) + G))),
      (r || s) &&
        ((k = v.getBBox()),
        (X = xe(X + (r / 100) * k.width)),
        (U = xe(U + (s / 100) * k.height))),
      (k =
        "matrix(" + F + "," + Z + "," + Y + "," + K + "," + X + "," + U + ")"),
      v.setAttribute("transform", k),
      H && (v.style[_e] = k);
  },
  o2 = function (l, a, i, r, s) {
    var o = 360,
      h = Ke(s),
      D = parseFloat(s) * (h && ~s.indexOf("rad") ? Ci : 1),
      _ = D - r,
      m = r + _ + "deg",
      S,
      T;
    return (
      h &&
        ((S = s.split("_")[1]),
        S === "short" &&
          ((_ %= o), _ !== _ % (o / 2) && (_ += _ < 0 ? o : -360)),
        S === "cw" && _ < 0
          ? (_ = ((_ + o * Ng) % o) - ~~(_ / o) * o)
          : S === "ccw" && _ > 0 && (_ = ((_ - o * Ng) % o) - ~~(_ / o) * o)),
      (l._pt = T = new Uu(l._pt, a, i, r, _, Kv)),
      (T.e = m),
      (T.u = "deg"),
      l._props.push(i),
      T
    );
  },
  Xg = function (l, a) {
    for (var i in a) l[i] = a[i];
    return l;
  },
  h2 = function (l, a, i) {
    var r = Xg({}, i._gsap),
      s = "perspective,force3D,transformOrigin,svgOrigin",
      o = i.style,
      h,
      D,
      _,
      m,
      S,
      T,
      v,
      x;
    r.svg
      ? ((_ = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (o[_e] = a),
        (h = _f(i, 1)),
        Yi(i, _e),
        i.setAttribute("transform", _))
      : ((_ = getComputedStyle(i)[_e]),
        (o[_e] = a),
        (h = _f(i, 1)),
        (o[_e] = _));
    for (D in Sn)
      (_ = r[D]),
        (m = h[D]),
        _ !== m &&
          s.indexOf(D) < 0 &&
          ((v = ru(_)),
          (x = ru(m)),
          (S = v !== x ? li(i, D, _, x) : parseFloat(_)),
          (T = parseFloat(m)),
          (l._pt = new Uu(l._pt, h, D, S, T - S, Jh)),
          (l._pt.u = x || 0),
          l._props.push(D));
    Xg(h, r);
  };
Nu("padding,margin,Width,Radius", function (d, l) {
  var a = "Top",
    i = "Right",
    r = "Bottom",
    s = "Left",
    o = (l < 3 ? [a, i, r, s] : [a + s, a + i, r + i, r + s]).map(function (h) {
      return l < 2 ? d + h : "border" + h + d;
    });
  uc[l > 1 ? "border" + d : d] = function (h, D, _, m, S) {
    var T, v;
    if (arguments.length < 4)
      return (
        (T = o.map(function (x) {
          return pn(h, x, _);
        })),
        (v = T.join(" ")),
        v.split(T[0]).length === 5 ? T[0] : v
      );
    (T = (m + "").split(" ")),
      (v = {}),
      o.forEach(function (x, b) {
        return (v[x] = T[b] = T[b] || T[((b - 1) / 2) | 0]);
      }),
      h.init(D, v, S);
  };
});
var i1 = {
  name: "css",
  register: Wh,
  targetTest: function (l) {
    return l.style && l.nodeType;
  },
  init: function (l, a, i, r, s) {
    var o = this._props,
      h = l.style,
      D = i.vars.startAt,
      _,
      m,
      S,
      T,
      v,
      x,
      b,
      A,
      G,
      H,
      X,
      U,
      F,
      Z,
      Y,
      K;
    E0 || Wh(),
      (this.styles = this.styles || Pp(l)),
      (K = this.styles.props),
      (this.tween = i);
    for (b in a)
      if (b !== "autoRound" && ((m = a[b]), !($u[b] && Gp(b, a, i, r, l, s)))) {
        if (
          ((v = typeof m),
          (x = uc[b]),
          v === "function" && ((m = m.call(i, r, l, s)), (v = typeof m)),
          v === "string" && ~m.indexOf("random(") && (m = cf(m)),
          x)
        )
          x(this, l, b, m, i) && (Y = 1);
        else if (b.substr(0, 2) === "--")
          (_ = (getComputedStyle(l).getPropertyValue(b) + "").trim()),
            (m += ""),
            (ti.lastIndex = 0),
            ti.test(_) || ((A = ru(_)), (G = ru(m))),
            G ? A !== G && (_ = li(l, b, _, G) + G) : A && (m += A),
            this.add(h, "setProperty", _, m, r, s, 0, 0, b),
            o.push(b),
            K.push(b, 0, h[b]);
        else if (v !== "undefined") {
          if (
            (D && b in D
              ? ((_ = typeof D[b] == "function" ? D[b].call(i, r, l, s) : D[b]),
                Ke(_) && ~_.indexOf("random(") && (_ = cf(_)),
                ru(_ + "") ||
                  _ === "auto" ||
                  (_ += el.units[b] || ru(pn(l, b)) || ""),
                (_ + "").charAt(1) === "=" && (_ = pn(l, b)))
              : (_ = pn(l, b)),
            (T = parseFloat(_)),
            (H = v === "string" && m.charAt(1) === "=" && m.substr(0, 2)),
            H && (m = m.substr(2)),
            (S = parseFloat(m)),
            b in Gl &&
              (b === "autoAlpha" &&
                (T === 1 && pn(l, "visibility") === "hidden" && S && (T = 0),
                K.push("visibility", 0, h.visibility),
                $n(
                  this,
                  h,
                  "visibility",
                  T ? "inherit" : "hidden",
                  S ? "inherit" : "hidden",
                  !S
                )),
              b !== "scale" &&
                b !== "transform" &&
                ((b = Gl[b]), ~b.indexOf(",") && (b = b.split(",")[0]))),
            (X = b in Sn),
            X)
          ) {
            if (
              (this.styles.save(b),
              U ||
                ((F = l._gsap),
                (F.renderTransform && !a.parseTransform) ||
                  _f(l, a.parseTransform),
                (Z = a.smoothOrigin !== !1 && F.smooth),
                (U = this._pt =
                  new Uu(this._pt, h, _e, 0, 1, F.renderTransform, F, 0, -1)),
                (U.dep = 1)),
              b === "scale")
            )
              (this._pt = new Uu(
                this._pt,
                F,
                "scaleY",
                F.scaleY,
                (H ? Ra(F.scaleY, H + S) : S) - F.scaleY || 0,
                Jh
              )),
                (this._pt.u = 0),
                o.push("scaleY", b),
                (b += "X");
            else if (b === "transformOrigin") {
              K.push(wu, 0, h[wu]),
                (m = r2(m)),
                F.svg
                  ? Ph(l, m, 0, Z, 0, this)
                  : ((G = parseFloat(m.split(" ")[2]) || 0),
                    G !== F.zOrigin && $n(this, F, "zOrigin", F.zOrigin, G),
                    $n(this, h, b, lc(_), lc(m)));
              continue;
            } else if (b === "svgOrigin") {
              Ph(l, m, 1, Z, 0, this);
              continue;
            } else if (b in u1) {
              o2(this, F, b, T, H ? Ra(T, H + m) : m);
              continue;
            } else if (b === "smoothOrigin") {
              $n(this, F, "smooth", F.smooth, m);
              continue;
            } else if (b === "force3D") {
              F[b] = m;
              continue;
            } else if (b === "transform") {
              h2(this, m, l);
              continue;
            }
          } else b in h || (b = ja(b) || b);
          if (X || ((S || S === 0) && (T || T === 0) && !kv.test(m) && b in h))
            (A = (_ + "").substr((T + "").length)),
              S || (S = 0),
              (G = ru(m) || (b in el.units ? el.units[b] : A)),
              A !== G && (T = li(l, b, _, G)),
              (this._pt = new Uu(
                this._pt,
                X ? F : h,
                b,
                T,
                (H ? Ra(T, H + S) : S) - T,
                !X && (G === "px" || b === "zIndex") && a.autoRound !== !1
                  ? $v
                  : Jh
              )),
              (this._pt.u = G || 0),
              A !== G && G !== "%" && ((this._pt.b = _), (this._pt.r = Jv));
          else if (b in h) a2.call(this, l, b, _, H ? H + m : m);
          else if (b in l) this.add(l, b, _ || l[b], H ? H + m : m, r, s);
          else if (b !== "parseTransform") {
            D0(b, m);
            continue;
          }
          X ||
            (b in h
              ? K.push(b, 0, h[b])
              : typeof l[b] == "function"
              ? K.push(b, 2, l[b]())
              : K.push(b, 1, _ || l[b])),
            o.push(b);
        }
      }
    Y && kp(this);
  },
  render: function (l, a) {
    if (a.tween._time || !x0())
      for (var i = a._pt; i; ) i.r(l, i.d), (i = i._next);
    else a.styles.revert();
  },
  get: pn,
  aliases: Gl,
  getSetter: function (l, a, i) {
    var r = Gl[a];
    return (
      r && r.indexOf(",") < 0 && (a = r),
      a in Sn && a !== wu && (l._gsap.x || pn(l, "x"))
        ? i && Bg === i
          ? a === "scale"
            ? t2
            : Iv
          : (Bg = i || {}) && (a === "scale" ? e2 : u2)
        : l.style && !h0(l.style[a])
        ? Wv
        : ~a.indexOf("-")
        ? Pv
        : S0(l, a)
    );
  },
  core: { _removeProperty: Yi, _getMatrix: A0 },
};
Fu.utils.checkPrefix = ja;
Fu.core.getStyleSaver = Pp;
(function (d, l, a, i) {
  var r = Nu(d + "," + l + "," + a, function (s) {
    Sn[s] = 1;
  });
  Nu(l, function (s) {
    (el.units[s] = "deg"), (u1[s] = 1);
  }),
    (Gl[r[13]] = d + "," + l),
    Nu(i, function (s) {
      var o = s.split(":");
      Gl[o[1]] = r[o[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
Nu(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (d) {
    el.units[d] = "px";
  }
);
Fu.registerPlugin(i1);
var ve = Fu.registerPlugin(i1) || Fu;
ve.core.Tween;
/*!
 * @gsap/react 2.1.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ let Gg = typeof document < "u" ? re.useLayoutEffect : re.useEffect,
  jg = (d) => d && !Array.isArray(d) && typeof d == "object",
  Os = [],
  d2 = {},
  a1 = ve;
const Li = (d, l = Os) => {
  let a = d2;
  jg(d)
    ? ((a = d), (d = null), (l = "dependencies" in a ? a.dependencies : Os))
    : jg(l) && ((a = l), (l = "dependencies" in a ? a.dependencies : Os)),
    d &&
      typeof d != "function" &&
      console.warn("First parameter must be a function or config object");
  const { scope: i, revertOnUpdate: r } = a,
    s = re.useRef(!1),
    o = re.useRef(a1.context(() => {}, i)),
    h = re.useRef((_) => o.current.add(null, _)),
    D = l && l.length && !r;
  return (
    D && Gg(() => ((s.current = !0), () => o.current.revert()), Os),
    Gg(() => {
      if ((d && o.current.add(d, i), !D || !s.current))
        return () => o.current.revert();
    }, l),
    { context: o.current, contextSafe: h.current }
  );
};
Li.register = (d) => {
  a1 = d;
};
Li.headless = !0;
const _2 = () => {
    const d = [
        {
          img: "/img/bear1.webp",
          title: "Wait, this ain't grass",
          description:
            "Get your eyes off the screen. Go outside. Call your mom. This page was not meant to be found.",
        },
        {
          img: "/img/bear2.webp",
          title: "Still here?",
          description:
            "Alright grass-toucher. Guess it's time to teach you how to buy $MOMO. Don't say we didn't warn you and prepare ETH.",
        },
        {
          img: "/img/bear3.webp",
          title: "Go to app.uniswap.org",
          description:
            "Now that you have some Solana, head to app.uniswap.org to be able to swap your ETH for some $MOMO.",
        },
        {
          img: "/img/bear4.webp",
          title: "Buy $MOMO",
          description:
            "And that's how you ended up holding 8 figures of $MOMO. Congrats.",
        },
      ],
      [l, a] = re.useState(1),
      i = re.useRef(null);
    return (
      Li(
        () => {
          window.innerWidth > 700 &&
            ve.to(".About__slider", {
              y: "0px",
              ease: "none",
              scrollTrigger: {
                trigger: ".About__slider_wrapper",
                scrub: 0,
                pin: ".About__slider",
                pinSpacing: !1,
                anticipatePin: 2,
                start: "top 0%",
                end: "bottom 100%",
                onUpdate: (r) => {
                  const s = Math.round(r.progress * 100);
                  a(Math.max(Math.ceil(s / (100 / 4)), 1));
                },
              },
            });
        },
        { scope: i }
      ),
      et.jsx("div", {
        ref: i,
        className: "Slider",
        children: et.jsx("div", {
          className: "About__slider_wrapper",
          id: "HOW_TO_BUY",
          children: et.jsx("div", {
            className: "About__slider",
            children: d.map((r, s) =>
              et.jsx(
                Py,
                {
                  currentSlide: l,
                  index: s + 1,
                  title: r.title,
                  description: r.description,
                },
                s
              )
            ),
          }),
        }),
      })
    );
  },
  ye = 90,
  D2 = ({ setactiveBlock: d }) => {
    const l = re.useRef(null);
    return (
      Li(
        () => {
          ve.fromTo(
            ".Tokenomics_bits",
            { y: "300px", x: "500px" },
            {
              y: "0px",
              x: "0px",
              ease: "none",
              scrollTrigger: {
                trigger: ".Tokenomics",
                scrub: 3,
                start: `top ${ye}%`,
                end: `50% ${ye}%`,
              },
            }
          ),
            ve.fromTo(
              ".Tokenomics_bonePart_0",
              { rotate: "20deg", y: "100px", x: "-200px" },
              {
                rotate: "0deg",
                y: "0px",
                x: "0px",
                ease: "none",
                scrollTrigger: {
                  trigger: ".Tokenomics",
                  scrub: 1,
                  start: `top ${ye}%`,
                  end: `50% ${ye}%`,
                },
              }
            ),
            ve.fromTo(
              ".Tokenomics_bonePart_1",
              { rotate: "50deg", y: "300px", x: "-50px" },
              {
                rotate: "0deg",
                y: "0px",
                x: "0px",
                ease: "none",
                scrollTrigger: {
                  trigger: ".Tokenomics",
                  scrub: 2,
                  start: `top ${ye}%`,
                  end: `50% ${ye}%`,
                },
              }
            ),
            ve.fromTo(
              ".Tokenomics_bonePart_2",
              { rotate: "-100deg", y: "600px", x: "00px" },
              {
                rotate: "0deg",
                y: "0px",
                x: "0px",
                ease: "none",
                scrollTrigger: {
                  trigger: ".Tokenomics",
                  scrub: 1,
                  start: `top ${ye}%`,
                  end: `50% ${ye}%`,
                },
              }
            ),
            ve.fromTo(
              ".Tokenomics_bonePart_3",
              { rotate: "-50deg", y: "500px", x: "200px" },
              {
                rotate: "0deg",
                y: "0px",
                x: "0px",
                ease: "none",
                scrollTrigger: {
                  trigger: ".Tokenomics",
                  scrub: 2,
                  start: `top ${ye}%`,
                  end: `50% ${ye}%`,
                },
              }
            ),
            ve.fromTo(
              ".Tokenomics_bonePart_4",
              { rotate: "30deg", y: "-200px", x: "300px" },
              {
                rotate: "0deg",
                y: "0px",
                x: "0px",
                ease: "none",
                scrollTrigger: {
                  trigger: ".Tokenomics",
                  scrub: 2,
                  start: `top ${ye}%`,
                  end: `50% ${ye}%`,
                },
              }
            ),
            ve.fromTo(
              ".Tokenomics_bonePart_5",
              { rotate: "30deg", y: "300px", x: "200px" },
              {
                rotate: "0deg",
                y: "0px",
                x: "0px",
                ease: "none",
                scrollTrigger: {
                  trigger: ".Tokenomics",
                  scrub: 2,
                  start: `top ${ye}%`,
                  end: `50% ${ye}%`,
                },
              }
            ),
            ve.fromTo(
              ".Tokenomics_bonePart_6",
              { rotate: "-30deg", y: "-200px", x: "100px" },
              {
                rotate: "0deg",
                y: "0px",
                x: "0px",
                ease: "none",
                scrollTrigger: {
                  trigger: ".Tokenomics",
                  scrub: 2,
                  start: `top ${ye}%`,
                  end: `50% ${ye}%`,
                },
              }
            ),
            ve.fromTo(
              ".Tokenomics_char",
              { y: "200px" },
              {
                rotate: "0deg",
                y: "0px",
                ease: "none",
                scrollTrigger: {
                  trigger: ".Tokenomics",
                  scrub: 2,
                  start: `30% ${ye}%`,
                  end: `50% ${ye}%`,
                },
              }
            ),
            ve.fromTo(
              ".Tokenomics_boneLeft",
              { y: "200px", x: "-100px" },
              {
                rotate: "0deg",
                x: "0px",
                y: "0px",
                ease: "none",
                scrollTrigger: {
                  trigger: ".Tokenomics",
                  scrub: 3,
                  start: `40% ${ye}%`,
                  end: `50% ${ye}%`,
                },
              }
            ),
            ve.fromTo(
              ".Tokenomics_boneRight",
              { y: "200px", x: "100px" },
              {
                rotate: "0deg",
                y: "0px",
                x: "0px",
                ease: "none",
                scrollTrigger: {
                  trigger: ".Tokenomics",
                  scrub: 3,
                  start: `49% ${ye}%`,
                  end: `50% ${ye}%`,
                },
              }
            );
        },
        { scope: l }
      ),
      et.jsx("div", {
        className: "Tokenomics_wrapper",
        ref: l,
        id: "TOKENOMICS",
        children: et.jsxs("div", {
          className: "Tokenomics",
          children: [
            et.jsx("div", {
              className: "Tokenomics_boneLeft free_img",
              children: et.jsx("img", {
                src: "/img/tokenomics/resized_boneLeft.webp",
                alt: "",
              }),
            }),
            et.jsx("div", {
              className: "Tokenomics_boneRight free_img",
              children: et.jsx("img", {
                src: "/img/tokenomics/resized_boneRight.webp",
                alt: "",
              }),
            }),
            et.jsx("div", {
              className: "Tokenomics_char free_img",
              children: et.jsx("img", {
                src: "/img/tokenomics/resized_char.webp",
                alt: "",
              }),
            }),
            et.jsx("div", {
              className: "Tokenomics_bits free_img",
              children: et.jsx("img", {
                src: "/img/tokenomics/resized_bits.webp",
                alt: "",
              }),
            }),
            Array(5)
              .fill(0)
              .map((a, i) =>
                et.jsx(
                  "div",
                  {
                    className: `Tokenomics_bonePart_${i} free_img`,
                    children: et.jsx("img", {
                      src: `/img/tokenomics/resized_bonePart${i}.webp`,
                      alt: "",
                    }),
                  },
                  `Tokenomics_bonePart_${i}`
                )
              ),
          ],
        }),
      })
    );
  },
  g2 = ({ setactiveBlock: d }) =>
    et.jsxs("div", {
      className: "About",
      children: [
        et.jsxs("div", {
          className: "About_content",
          children: [
            et.jsx("div", {
              className: "About__paper",
              children: et.jsx("img", { src: "/img/paperpawse.webp", alt: "" }),
            }),
            et.jsx(_2, {}),
          ],
        }),
        et.jsx(D2, {}),
      ],
    }),
  r1 = ({ large: d }) =>
    et.jsxs("div", {
      className: `MediaLinks ${d && "MediaLinks_large"}`,
      children: [
        et.jsx("a", {
          href: "https://t.me/momoonErc",
          children: et.jsx("img", { src: "/img/tg.png", alt: "" }),
        }),
        et.jsx("a", {
          href: "https://x.com/momoonErc",
          children: et.jsx("img", { src: "/img/x.png", alt: "" }),
        }),
        et.jsx("a", {
          href: "https://dexscreener.com/ethereum/0xComingSoon",
          children: et.jsx("img", { src: "/img/dex.png", alt: "" }),
        }),
      ],
    }),
  p2 = ({ setactiveBlock: d }) =>
    et.jsx("div", {
      className: "Footer",
      id: "SOCIALS",
      children: et.jsx(r1, { large: !0 }),
    }),
  m2 = ({ showContent: d }) =>
    et.jsx("div", {
      className: "Header",
      style: { transition: "opacity 500ms", opacity: d ? 1 : 0 },
      children: et.jsxs("div", {
        className: "container",
        children: [
          et.jsx("div", {
            className: "Header__logo",
            children: et.jsx("img", { src: "/img/pawse.webp", alt: "" }),
          }),
          et.jsx(r1, {}),
        ],
      }),
    }),
  y2 = ({ setshowContent: d, showContent: l }) => {
    const a = re.useRef(null),
      i = re.useRef(null),
      r = () => {
        a.current && (a.current.style.opacity = 0),
          i.current && (i.current.play(), (i.current.style.opacity = 1), d(!0));
      };
    return (
      re.useEffect(() => {
        const s = a.current;
        s &&
          (async () => {
            try {
              await s.play();
            } catch (h) {
              console.warn("Autoplay failed:", h);
            }
          })();
      }, []),
      et.jsxs("div", {
        className: "Hero",
        id: "#ABOUT",
        children: [
          et.jsx("div", {
            className: "Hero_video",
            style: { overflow: "hidden" },
            children: et.jsx("video", {
              ref: a,
              src: "/vid_hor.mp4",
              autoPlay: !0,
              muted: !0,
              playsInline: !0,
              onEnded: r,
              style: { transition: "opacity 500ms" },
              onLoadedMetadata: async (s) => {
                const o = a.current;
                o && (await o.play());
              },
            }),
          }),
          et.jsx("div", {
            className: "Hero_video",
            style: { overflow: l ? "visible" : "hidden" },
            children: et.jsx("video", {
              ref: i,
              src: "/cycle_hor.mp4",
              muted: !0,
              playsInline: !0,
              loop: !0,
              style: { transition: "opacity 500ms", opacity: 0 },
            }),
          }),
        ],
      })
    );
  },
  v2 = ({ setshowContent: d, showContent: l }) => {
    const s = re.useRef([]),
      o = re.useRef([]),
      h = re.useRef(null),
      [D, _] = re.useState(!1),
      [m, S] = re.useState(!1);
    return (
      re.useEffect(() => {
        const T = (v, x) =>
          Promise.all(
            Array.from({ length: v }, (b, A) => {
              const G = String(A + 1).padStart(4, "0"),
                H = `/heroMobVid/${x}/frame_${G}.webp`;
              return new Promise((X) => {
                const U = new Image();
                (U.src = H), (U.onload = () => X(U));
              });
            })
          );
        (async () => {
          const [v, x] = await Promise.all([T(210, "intro"), T(31, "loop")]);
          (s.current = v), (o.current = x), _(!0);
        })();
      }, []),
      re.useEffect(() => {
        if (!D) return;
        let T = 0,
          v = 0,
          x = !1;
        const A = setInterval(() => {
          h.current &&
            (x
              ? ((h.current.src = o.current[v].src), (v = (v + 1) % 31))
              : ((h.current.src = s.current[T].src),
                T++,
                T >= 210 && ((x = !0), S(!0), d(!0))));
        }, 1e3 / 18);
        return () => clearInterval(A);
      }, [D]),
      et.jsx("div", {
        className: "Hero",
        id: "#ABOUT",
        children: et.jsx("div", {
          className: "Hero_video",
          style: { overflow: "hidden" },
          children: et.jsx("img", {
            ref: h,
            style: { transition: "opacity 500ms", width: "100%" },
            draggable: !1,
            alt: "",
          }),
        }),
      })
    );
  },
  b2 = ({ setactiveBlock: d }) => {
    const l = { 4: 1, 145: 2, 109: 3, 96: 4, 55: 5 },
      [a, i] = re.useState(!1),
      r = re.useRef(null);
    return (
      Li(
        () => {
          ve.to(".Hero__title_text", {
            y: "0px",
            ease: "none",
            scrollTrigger: {
              trigger: ".Hero__title_text",
              start: "0% 60%",
              end: "100% 60%",
            },
            onUpdate: () => {
              i(!0);
            },
          });
        },
        { scope: r }
      ),
      et.jsx("div", {
        ref: r,
        className: "HeroText",
        id: "Hero",
        children: et.jsx("div", {
          className: "Hero__title",
          id: "ABOUT",
          children: et.jsx("div", {
            className: "Hero__title_text",
            children:
              "A gentle, cozy feeling that's like a snuggly blanket wrapped around your soul. To MOMO is to melt into a state of pure chill where everything is soft and easy."
                .split("")
                .map((s, o) =>
                  et.jsxs(et.Fragment, {
                    children: [
                      !!l[o] &&
                        et.jsx("div", {
                          className: "free_img Hero__title_text_img",
                          children: et.jsx("img", {
                            src: `/img/dogs/hero_text_dog_${l[o]}.webp`,
                            alt: "",
                            style: {
                              transition: `opacity 200ms ${o * 3 + 1e3}ms`,
                              opacity: a ? 1 : 0,
                            },
                          }),
                        }),
                      et.jsx("span", {
                        style: {
                          transition: `opacity 200ms ${o * 3}ms`,
                          opacity: a ? 1 : 0,
                        },
                        children: s,
                      }),
                    ],
                  })
                ),
          }),
        }),
      })
    );
  };
/*!
 * strings: 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var S2 = /(?:^\s+|\s+$)/g,
  T2 =
    /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
function f1(d) {
  var l = d.nodeType,
    a = "";
  if (l === 1 || l === 9 || l === 11) {
    if (typeof d.textContent == "string") return d.textContent;
    for (d = d.firstChild; d; d = d.nextSibling) a += f1(d);
  } else if (l === 3 || l === 4) return d.nodeValue;
  return a;
}
function Ih(d, l, a, i, r) {
  for (var s = d.firstChild, o = [], h; s; )
    s.nodeType === 3
      ? ((h = (s.nodeValue + "").replace(/^\n+/g, "")),
        i || (h = h.replace(/\s+/g, " ")),
        o.push.apply(o, s1(h, l, a, i, r)))
      : (s.nodeName + "").toLowerCase() === "br"
      ? (o[o.length - 1] += "<br>")
      : o.push(s.outerHTML),
      (s = s.nextSibling);
  if (!r) for (h = o.length; h--; ) o[h] === "&" && o.splice(h, 1, "&amp;");
  return o;
}
function s1(d, l, a, i, r) {
  if (
    ((d += ""), a && (d = d.trim ? d.trim() : d.replace(S2, "")), l && l !== "")
  )
    return d.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(l);
  for (var s = [], o = d.length, h = 0, D, _; h < o; h++)
    (_ = d.charAt(h)),
      ((_.charCodeAt(0) >= 55296 && _.charCodeAt(0) <= 56319) ||
        (d.charCodeAt(h + 1) >= 65024 && d.charCodeAt(h + 1) <= 65039)) &&
        ((D = ((d.substr(h, 12).split(T2) || [])[1] || "").length || 2),
        (_ = d.substr(h, D)),
        (s.emoji = 1),
        (h += D - 1)),
      s.push(
        r
          ? _
          : _ === ">"
          ? "&gt;"
          : _ === "<"
          ? "&lt;"
          : i &&
            _ === " " &&
            (d.charAt(h - 1) === " " || d.charAt(h + 1) === " ")
          ? "&nbsp;"
          : _
      );
  return s;
}
/*!
 * TextPlugin 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Lr,
  Ms,
  E2 = function () {
    return (
      Lr ||
      (typeof window < "u" && (Lr = window.gsap) && Lr.registerPlugin && Lr)
    );
  },
  mf = {
    version: "3.12.7",
    name: "text",
    init: function (l, a, i) {
      typeof a != "object" && (a = { value: a });
      var r = l.nodeName.toUpperCase(),
        s = this,
        o = a,
        h = o.newClass,
        D = o.oldClass,
        _ = o.preserveSpaces,
        m = o.rtl,
        S = (s.delimiter = a.delimiter || ""),
        T = (s.fillChar = a.fillChar || (a.padSpace ? "&nbsp;" : "")),
        v,
        x,
        b,
        A,
        G,
        H,
        X,
        U;
      if (
        ((s.svg = l.getBBox && (r === "TEXT" || r === "TSPAN")),
        !("innerHTML" in l) && !s.svg)
      )
        return !1;
      if (((s.target = l), !("value" in a))) {
        s.text = s.original = [""];
        return;
      }
      for (
        b = Ih(l, S, !1, _, s.svg),
          Ms || (Ms = document.createElement("div")),
          Ms.innerHTML = a.value,
          x = Ih(Ms, S, !1, _, s.svg),
          s.from = i._from,
          (s.from || m) && !(m && s.from) && ((r = b), (b = x), (x = r)),
          s.hasClass = !!(h || D),
          s.newClass = m ? D : h,
          s.oldClass = m ? h : D,
          r = b.length - x.length,
          v = r < 0 ? b : x,
          r < 0 && (r = -r);
        --r > -1;

      )
        v.push(T);
      if (a.type === "diff") {
        for (A = 0, G = [], H = [], X = "", r = 0; r < x.length; r++)
          (U = x[r]),
            U === b[r]
              ? (X += U)
              : ((G[A] = X + U), (H[A++] = X + b[r]), (X = ""));
        (x = G), (b = H), X && (x.push(X), b.push(X));
      }
      a.speed &&
        i.duration(
          Math.min((0.05 / a.speed) * v.length, a.maxDuration || 9999)
        ),
        (s.rtl = m),
        (s.original = b),
        (s.text = x),
        s._props.push("text");
    },
    render: function (l, a) {
      l > 1 ? (l = 1) : l < 0 && (l = 0), a.from && (l = 1 - l);
      var i = a.text,
        r = a.hasClass,
        s = a.newClass,
        o = a.oldClass,
        h = a.delimiter,
        D = a.target,
        _ = a.fillChar,
        m = a.original,
        S = a.rtl,
        T = i.length,
        v = ((S ? 1 - l : l) * T + 0.5) | 0,
        x,
        b,
        A;
      r && l
        ? ((x = s && v),
          (b = o && v !== T),
          (A =
            (x ? "<span class='" + s + "'>" : "") +
            i.slice(0, v).join(h) +
            (x ? "</span>" : "") +
            (b ? "<span class='" + o + "'>" : "") +
            h +
            m.slice(v).join(h) +
            (b ? "</span>" : "")))
        : (A = i.slice(0, v).join(h) + h + m.slice(v).join(h)),
        a.svg
          ? (D.textContent = A)
          : (D.innerHTML =
              _ === "&nbsp;" && ~A.indexOf("  ")
                ? A.split("  ").join("&nbsp;&nbsp;")
                : A);
    },
  };
mf.splitInnerHTML = Ih;
mf.emojiSafeSplit = s1;
mf.getText = f1;
E2() && Lr.registerPlugin(mf);
function x2(d, l) {
  for (var a = 0; a < l.length; a++) {
    var i = l[a];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(d, i.key, i);
  }
}
function C2(d, l, a) {
  return l && x2(d.prototype, l), d;
}
/*!
 * Observer 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var tu,
  Qs,
  Iu,
  Wn,
  Pn,
  Ua,
  c1,
  Ai,
  Pr,
  o1,
  yn,
  zl,
  h1,
  d1 = function () {
    return (
      tu ||
      (typeof window < "u" && (tu = window.gsap) && tu.registerPlugin && tu)
    );
  },
  _1 = 1,
  za = [],
  Mt = [],
  Ql = [],
  Ir = Date.now,
  t0 = function (l, a) {
    return a;
  },
  A2 = function () {
    var l = Pr.core,
      a = l.bridge || {},
      i = l._scrollers,
      r = l._proxies;
    i.push.apply(i, Mt),
      r.push.apply(r, Ql),
      (Mt = i),
      (Ql = r),
      (t0 = function (o, h) {
        return a[o](h);
      });
  },
  ei = function (l, a) {
    return ~Ql.indexOf(l) && Ql[Ql.indexOf(l) + 1][a];
  },
  tf = function (l) {
    return !!~o1.indexOf(l);
  },
  pu = function (l, a, i, r, s) {
    return l.addEventListener(a, i, { passive: r !== !1, capture: !!s });
  },
  gu = function (l, a, i, r) {
    return l.removeEventListener(a, i, !!r);
  },
  zs = "scrollLeft",
  Rs = "scrollTop",
  e0 = function () {
    return (yn && yn.isPressed) || Mt.cache++;
  },
  nc = function (l, a) {
    var i = function r(s) {
      if (s || s === 0) {
        _1 && (Iu.history.scrollRestoration = "manual");
        var o = yn && yn.isPressed;
        (s = r.v = Math.round(s) || (yn && yn.iOS ? 1 : 0)),
          l(s),
          (r.cacheID = Mt.cache),
          o && t0("ss", s);
      } else
        (a || Mt.cache !== r.cacheID || t0("ref")) &&
          ((r.cacheID = Mt.cache), (r.v = l()));
      return r.v + r.offset;
    };
    return (i.offset = 0), l && i;
  },
  Su = {
    s: zs,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: nc(function (d) {
      return arguments.length
        ? Iu.scrollTo(d, Ge.sc())
        : Iu.pageXOffset || Wn[zs] || Pn[zs] || Ua[zs] || 0;
    }),
  },
  Ge = {
    s: Rs,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Su,
    sc: nc(function (d) {
      return arguments.length
        ? Iu.scrollTo(Su.sc(), d)
        : Iu.pageYOffset || Wn[Rs] || Pn[Rs] || Ua[Rs] || 0;
    }),
  },
  Ru = function (l, a) {
    return (
      ((a && a._ctx && a._ctx.selector) || tu.utils.toArray)(l)[0] ||
      (typeof l == "string" && tu.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", l)
        : null)
    );
  },
  ni = function (l, a) {
    var i = a.s,
      r = a.sc;
    tf(l) && (l = Wn.scrollingElement || Pn);
    var s = Mt.indexOf(l),
      o = r === Ge.sc ? 1 : 2;
    !~s && (s = Mt.push(l) - 1), Mt[s + o] || pu(l, "scroll", e0);
    var h = Mt[s + o],
      D =
        h ||
        (Mt[s + o] =
          nc(ei(l, i), !0) ||
          (tf(l)
            ? r
            : nc(function (_) {
                return arguments.length ? (l[i] = _) : l[i];
              })));
    return (
      (D.target = l),
      h || (D.smooth = tu.getProperty(l, "scrollBehavior") === "smooth"),
      D
    );
  },
  u0 = function (l, a, i) {
    var r = l,
      s = l,
      o = Ir(),
      h = o,
      D = a || 50,
      _ = Math.max(500, D * 3),
      m = function (x, b) {
        var A = Ir();
        b || A - o > D
          ? ((s = r), (r = x), (h = o), (o = A))
          : i
          ? (r += x)
          : (r = s + ((x - s) / (A - h)) * (o - h));
      },
      S = function () {
        (s = r = i ? 0 : r), (h = o = 0);
      },
      T = function (x) {
        var b = h,
          A = s,
          G = Ir();
        return (
          (x || x === 0) && x !== r && m(x),
          o === h || G - h > _
            ? 0
            : ((r + (i ? A : -A)) / ((i ? G : o) - b)) * 1e3
        );
      };
    return { update: m, reset: S, getVelocity: T };
  },
  qr = function (l, a) {
    return (
      a && !l._gsapAllow && l.preventDefault(),
      l.changedTouches ? l.changedTouches[0] : l
    );
  },
  Lg = function (l) {
    var a = Math.max.apply(Math, l),
      i = Math.min.apply(Math, l);
    return Math.abs(a) >= Math.abs(i) ? a : i;
  },
  D1 = function () {
    (Pr = tu.core.globals().ScrollTrigger), Pr && Pr.core && A2();
  },
  g1 = function (l) {
    return (
      (tu = l || d1()),
      !Qs &&
        tu &&
        typeof document < "u" &&
        document.body &&
        ((Iu = window),
        (Wn = document),
        (Pn = Wn.documentElement),
        (Ua = Wn.body),
        (o1 = [Iu, Wn, Pn, Ua]),
        tu.utils.clamp,
        (h1 = tu.core.context || function () {}),
        (Ai = "onpointerenter" in Ua ? "pointer" : "mouse"),
        (c1 = Ce.isTouch =
          Iu.matchMedia &&
          Iu.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Iu ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (zl = Ce.eventTypes =
          (
            "ontouchstart" in Pn
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Pn
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (_1 = 0);
        }, 500),
        D1(),
        (Qs = 1)),
      Qs
    );
  };
Su.op = Ge;
Mt.cache = 0;
var Ce = (function () {
  function d(a) {
    this.init(a);
  }
  var l = d.prototype;
  return (
    (l.init = function (i) {
      Qs || g1(tu) || console.warn("Please gsap.registerPlugin(Observer)"),
        Pr || D1();
      var r = i.tolerance,
        s = i.dragMinimum,
        o = i.type,
        h = i.target,
        D = i.lineHeight,
        _ = i.debounce,
        m = i.preventDefault,
        S = i.onStop,
        T = i.onStopDelay,
        v = i.ignore,
        x = i.wheelSpeed,
        b = i.event,
        A = i.onDragStart,
        G = i.onDragEnd,
        H = i.onDrag,
        X = i.onPress,
        U = i.onRelease,
        F = i.onRight,
        Z = i.onLeft,
        Y = i.onUp,
        K = i.onDown,
        k = i.onChangeX,
        J = i.onChangeY,
        st = i.onChange,
        $ = i.onToggleX,
        vt = i.onToggleY,
        mt = i.onHover,
        ot = i.onHoverEnd,
        R = i.onMove,
        L = i.ignoreCheck,
        tt = i.isNormalizer,
        ct = i.onGestureStart,
        p = i.onGestureEnd,
        q = i.onWheel,
        I = i.onEnable,
        P = i.onDisable,
        ut = i.onClick,
        _t = i.scrollSpeed,
        it = i.capture,
        Ht = i.allowClicks,
        St = i.lockAxis,
        ne = i.onLockAxis;
      (this.target = h = Ru(h) || Pn),
        (this.vars = i),
        v && (v = tu.utils.toArray(v)),
        (r = r || 1e-9),
        (s = s || 0),
        (x = x || 1),
        (_t = _t || 1),
        (o = o || "wheel,touch,pointer"),
        (_ = _ !== !1),
        D || (D = parseFloat(Iu.getComputedStyle(Ua).lineHeight) || 22);
      var nl,
        Ae,
        je,
        zt,
        ie,
        uu,
        ou,
        w = this,
        hu = 0,
        il = 0,
        Sl = i.passive || (!m && i.passive !== !1),
        It = ni(h, Su),
        Tl = ni(h, Ge),
        El = It(),
        kl = Tl(),
        Oe =
          ~o.indexOf("touch") &&
          !~o.indexOf("pointer") &&
          zl[0] === "pointerdown",
        Tu = tf(h),
        wt = h.ownerDocument || Wn,
        Me = [0, 0, 0],
        te = [0, 0, 0],
        xl = 0,
        ai = function () {
          return (xl = Ir());
        },
        De = function (ht, Et) {
          return (
            ((w.event = ht) && v && ~v.indexOf(ht.target)) ||
            (Et && Oe && ht.pointerType !== "touch") ||
            (L && L(ht, Et))
          );
        },
        Kl = function () {
          w._vx.reset(), w._vy.reset(), Ae.pause(), S && S(w);
        },
        Eu = function () {
          var ht = (w.deltaX = Lg(Me)),
            Et = (w.deltaY = Lg(te)),
            W = Math.abs(ht) >= r,
            rt = Math.abs(Et) >= r;
          st && (W || rt) && st(w, ht, Et, Me, te),
            W &&
              (F && w.deltaX > 0 && F(w),
              Z && w.deltaX < 0 && Z(w),
              k && k(w),
              $ && w.deltaX < 0 != hu < 0 && $(w),
              (hu = w.deltaX),
              (Me[0] = Me[1] = Me[2] = 0)),
            rt &&
              (K && w.deltaY > 0 && K(w),
              Y && w.deltaY < 0 && Y(w),
              J && J(w),
              vt && w.deltaY < 0 != il < 0 && vt(w),
              (il = w.deltaY),
              (te[0] = te[1] = te[2] = 0)),
            (zt || je) &&
              (R && R(w),
              je && (A && je === 1 && A(w), H && H(w), (je = 0)),
              (zt = !1)),
            uu && !(uu = !1) && ne && ne(w),
            ie && (q(w), (ie = !1)),
            (nl = 0);
        },
        xu = function (ht, Et, W) {
          (Me[W] += ht),
            (te[W] += Et),
            w._vx.update(ht),
            w._vy.update(Et),
            _ ? nl || (nl = requestAnimationFrame(Eu)) : Eu();
        },
        Cl = function (ht, Et) {
          St &&
            !ou &&
            ((w.axis = ou = Math.abs(ht) > Math.abs(Et) ? "x" : "y"),
            (uu = !0)),
            ou !== "y" && ((Me[2] += ht), w._vx.update(ht, !0)),
            ou !== "x" && ((te[2] += Et), w._vy.update(Et, !0)),
            _ ? nl || (nl = requestAnimationFrame(Eu)) : Eu();
        },
        Cu = function (ht) {
          if (!De(ht, 1)) {
            ht = qr(ht, m);
            var Et = ht.clientX,
              W = ht.clientY,
              rt = Et - w.x,
              at = W - w.y,
              pt = w.isDragging;
            (w.x = Et),
              (w.y = W),
              (pt ||
                ((rt || at) &&
                  (Math.abs(w.startX - Et) >= s ||
                    Math.abs(w.startY - W) >= s))) &&
                ((je = pt ? 2 : 1), pt || (w.isDragging = !0), Cl(rt, at));
          }
        },
        Jl = (w.onPress = function (yt) {
          De(yt, 1) ||
            (yt && yt.button) ||
            ((w.axis = ou = null),
            Ae.pause(),
            (w.isPressed = !0),
            (yt = qr(yt)),
            (hu = il = 0),
            (w.startX = w.x = yt.clientX),
            (w.startY = w.y = yt.clientY),
            w._vx.reset(),
            w._vy.reset(),
            pu(tt ? h : wt, zl[1], Cu, Sl, !0),
            (w.deltaX = w.deltaY = 0),
            X && X(w));
        }),
        Tt = (w.onRelease = function (yt) {
          if (!De(yt, 1)) {
            gu(tt ? h : wt, zl[1], Cu, !0);
            var ht = !isNaN(w.y - w.startY),
              Et = w.isDragging,
              W =
                Et &&
                (Math.abs(w.x - w.startX) > 3 || Math.abs(w.y - w.startY) > 3),
              rt = qr(yt);
            !W &&
              ht &&
              (w._vx.reset(),
              w._vy.reset(),
              m &&
                Ht &&
                tu.delayedCall(0.08, function () {
                  if (Ir() - xl > 300 && !yt.defaultPrevented) {
                    if (yt.target.click) yt.target.click();
                    else if (wt.createEvent) {
                      var at = wt.createEvent("MouseEvents");
                      at.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        Iu,
                        1,
                        rt.screenX,
                        rt.screenY,
                        rt.clientX,
                        rt.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        yt.target.dispatchEvent(at);
                    }
                  }
                })),
              (w.isDragging = w.isGesturing = w.isPressed = !1),
              S && Et && !tt && Ae.restart(!0),
              je && Eu(),
              G && Et && G(w),
              U && U(w, W);
          }
        }),
        Rl = function (ht) {
          return (
            ht.touches &&
            ht.touches.length > 1 &&
            (w.isGesturing = !0) &&
            ct(ht, w.isDragging)
          );
        },
        du = function () {
          return (w.isGesturing = !1) || p(w);
        },
        Je = function (ht) {
          if (!De(ht)) {
            var Et = It(),
              W = Tl();
            xu((Et - El) * _t, (W - kl) * _t, 1),
              (El = Et),
              (kl = W),
              S && Ae.restart(!0);
          }
        },
        Hu = function (ht) {
          if (!De(ht)) {
            (ht = qr(ht, m)), q && (ie = !0);
            var Et =
              (ht.deltaMode === 1
                ? D
                : ht.deltaMode === 2
                ? Iu.innerHeight
                : 1) * x;
            xu(ht.deltaX * Et, ht.deltaY * Et, 0), S && !tt && Ae.restart(!0);
          }
        },
        Bl = function (ht) {
          if (!De(ht)) {
            var Et = ht.clientX,
              W = ht.clientY,
              rt = Et - w.x,
              at = W - w.y;
            (w.x = Et),
              (w.y = W),
              (zt = !0),
              S && Ae.restart(!0),
              (rt || at) && Cl(rt, at);
          }
        },
        $l = function (ht) {
          (w.event = ht), mt(w);
        },
        Yu = function (ht) {
          (w.event = ht), ot(w);
        },
        Wl = function (ht) {
          return De(ht) || (qr(ht, m) && ut(w));
        };
      (Ae = w._dc = tu.delayedCall(T || 0.25, Kl).pause()),
        (w.deltaX = w.deltaY = 0),
        (w._vx = u0(0, 50, !0)),
        (w._vy = u0(0, 50, !0)),
        (w.scrollX = It),
        (w.scrollY = Tl),
        (w.isDragging = w.isGesturing = w.isPressed = !1),
        h1(this),
        (w.enable = function (yt) {
          return (
            w.isEnabled ||
              (pu(Tu ? wt : h, "scroll", e0),
              o.indexOf("scroll") >= 0 && pu(Tu ? wt : h, "scroll", Je, Sl, it),
              o.indexOf("wheel") >= 0 && pu(h, "wheel", Hu, Sl, it),
              ((o.indexOf("touch") >= 0 && c1) || o.indexOf("pointer") >= 0) &&
                (pu(h, zl[0], Jl, Sl, it),
                pu(wt, zl[2], Tt),
                pu(wt, zl[3], Tt),
                Ht && pu(h, "click", ai, !0, !0),
                ut && pu(h, "click", Wl),
                ct && pu(wt, "gesturestart", Rl),
                p && pu(wt, "gestureend", du),
                mt && pu(h, Ai + "enter", $l),
                ot && pu(h, Ai + "leave", Yu),
                R && pu(h, Ai + "move", Bl)),
              (w.isEnabled = !0),
              (w.isDragging = w.isGesturing = w.isPressed = zt = je = !1),
              w._vx.reset(),
              w._vy.reset(),
              (El = It()),
              (kl = Tl()),
              yt && yt.type && Jl(yt),
              I && I(w)),
            w
          );
        }),
        (w.disable = function () {
          w.isEnabled &&
            (za.filter(function (yt) {
              return yt !== w && tf(yt.target);
            }).length || gu(Tu ? wt : h, "scroll", e0),
            w.isPressed &&
              (w._vx.reset(), w._vy.reset(), gu(tt ? h : wt, zl[1], Cu, !0)),
            gu(Tu ? wt : h, "scroll", Je, it),
            gu(h, "wheel", Hu, it),
            gu(h, zl[0], Jl, it),
            gu(wt, zl[2], Tt),
            gu(wt, zl[3], Tt),
            gu(h, "click", ai, !0),
            gu(h, "click", Wl),
            gu(wt, "gesturestart", Rl),
            gu(wt, "gestureend", du),
            gu(h, Ai + "enter", $l),
            gu(h, Ai + "leave", Yu),
            gu(h, Ai + "move", Bl),
            (w.isEnabled = w.isPressed = w.isDragging = !1),
            P && P(w));
        }),
        (w.kill = w.revert =
          function () {
            w.disable();
            var yt = za.indexOf(w);
            yt >= 0 && za.splice(yt, 1), yn === w && (yn = 0);
          }),
        za.push(w),
        tt && tf(h) && (yn = w),
        w.enable(b);
    }),
    C2(d, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    d
  );
})();
Ce.version = "3.12.7";
Ce.create = function (d) {
  return new Ce(d);
};
Ce.register = g1;
Ce.getAll = function () {
  return za.slice();
};
Ce.getById = function (d) {
  return za.filter(function (l) {
    return l.vars.id === d;
  })[0];
};
d1() && tu.registerPlugin(Ce);
/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var lt,
  Ca,
  Ot,
  le,
  Wu,
  Qt,
  O0,
  ic,
  Df,
  ef,
  Vr,
  Bs,
  iu,
  hc,
  l0,
  yu,
  Vg,
  Qg,
  Aa,
  p1,
  Rh,
  m1,
  mu,
  n0,
  y1,
  v1,
  kn,
  i0,
  M0,
  wa,
  z0,
  ac,
  a0,
  Bh,
  Ns = 1,
  au = Date.now,
  Nh = au(),
  bl = 0,
  Qr = 0,
  Zg = function (l, a, i) {
    var r = Ju(l) && (l.substr(0, 6) === "clamp(" || l.indexOf("max") > -1);
    return (i["_" + a + "Clamp"] = r), r ? l.substr(6, l.length - 7) : l;
  },
  kg = function (l, a) {
    return a && (!Ju(l) || l.substr(0, 6) !== "clamp(")
      ? "clamp(" + l + ")"
      : l;
  },
  O2 = function d() {
    return Qr && requestAnimationFrame(d);
  },
  Kg = function () {
    return (hc = 1);
  },
  Jg = function () {
    return (hc = 0);
  },
  ql = function (l) {
    return l;
  },
  Zr = function (l) {
    return Math.round(l * 1e5) / 1e5 || 0;
  },
  b1 = function () {
    return typeof window < "u";
  },
  S1 = function () {
    return lt || (b1() && (lt = window.gsap) && lt.registerPlugin && lt);
  },
  qi = function (l) {
    return !!~O0.indexOf(l);
  },
  T1 = function (l) {
    return (
      (l === "Height" ? z0 : Ot["inner" + l]) ||
      Wu["client" + l] ||
      Qt["client" + l]
    );
  },
  E1 = function (l) {
    return (
      ei(l, "getBoundingClientRect") ||
      (qi(l)
        ? function () {
            return ($s.width = Ot.innerWidth), ($s.height = z0), $s;
          }
        : function () {
            return mn(l);
          })
    );
  },
  M2 = function (l, a, i) {
    var r = i.d,
      s = i.d2,
      o = i.a;
    return (o = ei(l, "getBoundingClientRect"))
      ? function () {
          return o()[r];
        }
      : function () {
          return (a ? T1(s) : l["client" + s]) || 0;
        };
  },
  z2 = function (l, a) {
    return !a || ~Ql.indexOf(l)
      ? E1(l)
      : function () {
          return $s;
        };
  },
  jl = function (l, a) {
    var i = a.s,
      r = a.d2,
      s = a.d,
      o = a.a;
    return Math.max(
      0,
      (i = "scroll" + r) && (o = ei(l, i))
        ? o() - E1(l)()[s]
        : qi(l)
        ? (Wu[i] || Qt[i]) - T1(r)
        : l[i] - l["offset" + r]
    );
  },
  Us = function (l, a) {
    for (var i = 0; i < Aa.length; i += 3)
      (!a || ~a.indexOf(Aa[i + 1])) && l(Aa[i], Aa[i + 1], Aa[i + 2]);
  },
  Ju = function (l) {
    return typeof l == "string";
  },
  fu = function (l) {
    return typeof l == "function";
  },
  kr = function (l) {
    return typeof l == "number";
  },
  Oi = function (l) {
    return typeof l == "object";
  },
  Xr = function (l, a, i) {
    return l && l.progress(a ? 0 : 1) && i && l.pause();
  },
  Uh = function (l, a) {
    if (l.enabled) {
      var i = l._ctx
        ? l._ctx.add(function () {
            return a(l);
          })
        : a(l);
      i && i.totalTime && (l.callbackAnimation = i);
    }
  },
  Ea = Math.abs,
  x1 = "left",
  C1 = "top",
  R0 = "right",
  B0 = "bottom",
  wi = "width",
  Fi = "height",
  uf = "Right",
  lf = "Left",
  nf = "Top",
  af = "Bottom",
  Ue = "padding",
  ml = "margin",
  La = "Width",
  N0 = "Height",
  Xe = "px",
  yl = function (l) {
    return Ot.getComputedStyle(l);
  },
  R2 = function (l) {
    var a = yl(l).position;
    l.style.position = a === "absolute" || a === "fixed" ? a : "relative";
  },
  $g = function (l, a) {
    for (var i in a) i in l || (l[i] = a[i]);
    return l;
  },
  mn = function (l, a) {
    var i =
        a &&
        yl(l)[l0] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        lt
          .to(l, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          })
          .progress(1),
      r = l.getBoundingClientRect();
    return i && i.progress(0).kill(), r;
  },
  rc = function (l, a) {
    var i = a.d2;
    return l["offset" + i] || l["client" + i] || 0;
  },
  A1 = function (l) {
    var a = [],
      i = l.labels,
      r = l.duration(),
      s;
    for (s in i) a.push(i[s] / r);
    return a;
  },
  B2 = function (l) {
    return function (a) {
      return lt.utils.snap(A1(l), a);
    };
  },
  U0 = function (l) {
    var a = lt.utils.snap(l),
      i =
        Array.isArray(l) &&
        l.slice(0).sort(function (r, s) {
          return r - s;
        });
    return i
      ? function (r, s, o) {
          o === void 0 && (o = 0.001);
          var h;
          if (!s) return a(r);
          if (s > 0) {
            for (r -= o, h = 0; h < i.length; h++) if (i[h] >= r) return i[h];
            return i[h - 1];
          } else for (h = i.length, r += o; h--; ) if (i[h] <= r) return i[h];
          return i[0];
        }
      : function (r, s, o) {
          o === void 0 && (o = 0.001);
          var h = a(r);
          return !s || Math.abs(h - r) < o || h - r < 0 == s < 0
            ? h
            : a(s < 0 ? r - l : r + l);
        };
  },
  N2 = function (l) {
    return function (a, i) {
      return U0(A1(l))(a, i.direction);
    };
  },
  ws = function (l, a, i, r) {
    return i.split(",").forEach(function (s) {
      return l(a, s, r);
    });
  },
  ke = function (l, a, i, r, s) {
    return l.addEventListener(a, i, { passive: !r, capture: !!s });
  },
  Ze = function (l, a, i, r) {
    return l.removeEventListener(a, i, !!r);
  },
  Fs = function (l, a, i) {
    (i = i && i.wheelHandler), i && (l(a, "wheel", i), l(a, "touchmove", i));
  },
  Wg = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  Hs = { toggleActions: "play", anticipatePin: 0 },
  fc = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  Zs = function (l, a) {
    if (Ju(l)) {
      var i = l.indexOf("="),
        r = ~i ? +(l.charAt(i - 1) + 1) * parseFloat(l.substr(i + 1)) : 0;
      ~i && (l.indexOf("%") > i && (r *= a / 100), (l = l.substr(0, i - 1))),
        (l =
          r +
          (l in fc
            ? fc[l] * a
            : ~l.indexOf("%")
            ? (parseFloat(l) * a) / 100
            : parseFloat(l) || 0));
    }
    return l;
  },
  Ys = function (l, a, i, r, s, o, h, D) {
    var _ = s.startColor,
      m = s.endColor,
      S = s.fontSize,
      T = s.indent,
      v = s.fontWeight,
      x = le.createElement("div"),
      b = qi(i) || ei(i, "pinType") === "fixed",
      A = l.indexOf("scroller") !== -1,
      G = b ? Qt : i,
      H = l.indexOf("start") !== -1,
      X = H ? _ : m,
      U =
        "border-color:" +
        X +
        ";font-size:" +
        S +
        ";color:" +
        X +
        ";font-weight:" +
        v +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (U += "position:" + ((A || D) && b ? "fixed;" : "absolute;")),
      (A || D || !b) &&
        (U += (r === Ge ? R0 : B0) + ":" + (o + parseFloat(T)) + "px;"),
      h &&
        (U +=
          "box-sizing:border-box;text-align:left;width:" +
          h.offsetWidth +
          "px;"),
      (x._isStart = H),
      x.setAttribute("class", "gsap-marker-" + l + (a ? " marker-" + a : "")),
      (x.style.cssText = U),
      (x.innerText = a || a === 0 ? l + "-" + a : l),
      G.children[0] ? G.insertBefore(x, G.children[0]) : G.appendChild(x),
      (x._offset = x["offset" + r.op.d2]),
      ks(x, 0, r, H),
      x
    );
  },
  ks = function (l, a, i, r) {
    var s = { display: "block" },
      o = i[r ? "os2" : "p2"],
      h = i[r ? "p2" : "os2"];
    (l._isFlipped = r),
      (s[i.a + "Percent"] = r ? -100 : 0),
      (s[i.a] = r ? "1px" : 0),
      (s["border" + o + La] = 1),
      (s["border" + h + La] = 0),
      (s[i.p] = a + "px"),
      lt.set(l, s);
  },
  Ct = [],
  r0 = {},
  gf,
  Pg = function () {
    return au() - bl > 34 && (gf || (gf = requestAnimationFrame(vn)));
  },
  xa = function () {
    (!mu || !mu.isPressed || mu.startX > Qt.clientWidth) &&
      (Mt.cache++,
      mu ? gf || (gf = requestAnimationFrame(vn)) : vn(),
      bl || Gi("scrollStart"),
      (bl = au()));
  },
  wh = function () {
    (v1 = Ot.innerWidth), (y1 = Ot.innerHeight);
  },
  Kr = function (l) {
    Mt.cache++,
      (l === !0 ||
        (!iu &&
          !m1 &&
          !le.fullscreenElement &&
          !le.webkitFullscreenElement &&
          (!n0 ||
            v1 !== Ot.innerWidth ||
            Math.abs(Ot.innerHeight - y1) > Ot.innerHeight * 0.25))) &&
        ic.restart(!0);
  },
  Xi = {},
  U2 = [],
  O1 = function d() {
    return Ze(Ut, "scrollEnd", d) || zi(!0);
  },
  Gi = function (l) {
    return (
      (Xi[l] &&
        Xi[l].map(function (a) {
          return a();
        })) ||
      U2
    );
  },
  Ku = [],
  M1 = function (l) {
    for (var a = 0; a < Ku.length; a += 5)
      (!l || (Ku[a + 4] && Ku[a + 4].query === l)) &&
        ((Ku[a].style.cssText = Ku[a + 1]),
        Ku[a].getBBox && Ku[a].setAttribute("transform", Ku[a + 2] || ""),
        (Ku[a + 3].uncache = 1));
  },
  w0 = function (l, a) {
    var i;
    for (yu = 0; yu < Ct.length; yu++)
      (i = Ct[yu]),
        i && (!a || i._ctx === a) && (l ? i.kill(1) : i.revert(!0, !0));
    (ac = !0), a && M1(a), a || Gi("revert");
  },
  z1 = function (l, a) {
    Mt.cache++,
      (a || !vu) &&
        Mt.forEach(function (i) {
          return fu(i) && i.cacheID++ && (i.rec = 0);
        }),
      Ju(l) && (Ot.history.scrollRestoration = M0 = l);
  },
  vu,
  Hi = 0,
  Ig,
  w2 = function () {
    if (Ig !== Hi) {
      var l = (Ig = Hi);
      requestAnimationFrame(function () {
        return l === Hi && zi(!0);
      });
    }
  },
  R1 = function () {
    Qt.appendChild(wa),
      (z0 = (!mu && wa.offsetHeight) || Ot.innerHeight),
      Qt.removeChild(wa);
  },
  tp = function (l) {
    return Df(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (a) {
      return (a.style.display = l ? "none" : "block");
    });
  },
  zi = function (l, a) {
    if (
      ((Wu = le.documentElement),
      (Qt = le.body),
      (O0 = [Ot, le, Wu, Qt]),
      bl && !l && !ac)
    ) {
      ke(Ut, "scrollEnd", O1);
      return;
    }
    R1(),
      (vu = Ut.isRefreshing = !0),
      Mt.forEach(function (r) {
        return fu(r) && ++r.cacheID && (r.rec = r());
      });
    var i = Gi("refreshInit");
    p1 && Ut.sort(),
      a || w0(),
      Mt.forEach(function (r) {
        fu(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
      }),
      Ct.slice(0).forEach(function (r) {
        return r.refresh();
      }),
      (ac = !1),
      Ct.forEach(function (r) {
        if (r._subPinOffset && r.pin) {
          var s = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
            o = r.pin[s];
          r.revert(!0, 1), r.adjustPinSpacing(r.pin[s] - o), r.refresh();
        }
      }),
      (a0 = 1),
      tp(!0),
      Ct.forEach(function (r) {
        var s = jl(r.scroller, r._dir),
          o = r.vars.end === "max" || (r._endClamp && r.end > s),
          h = r._startClamp && r.start >= s;
        (o || h) &&
          r.setPositions(
            h ? s - 1 : r.start,
            o ? Math.max(h ? s : r.start + 1, s) : r.end,
            !0
          );
      }),
      tp(!1),
      (a0 = 0),
      i.forEach(function (r) {
        return r && r.render && r.render(-1);
      }),
      Mt.forEach(function (r) {
        fu(r) &&
          (r.smooth &&
            requestAnimationFrame(function () {
              return (r.target.style.scrollBehavior = "smooth");
            }),
          r.rec && r(r.rec));
      }),
      z1(M0, 1),
      ic.pause(),
      Hi++,
      (vu = 2),
      vn(2),
      Ct.forEach(function (r) {
        return fu(r.vars.onRefresh) && r.vars.onRefresh(r);
      }),
      (vu = Ut.isRefreshing = !1),
      Gi("refresh");
  },
  f0 = 0,
  Ks = 1,
  rf,
  vn = function (l) {
    if (l === 2 || (!vu && !ac)) {
      (Ut.isUpdating = !0), rf && rf.update(0);
      var a = Ct.length,
        i = au(),
        r = i - Nh >= 50,
        s = a && Ct[0].scroll();
      if (
        ((Ks = f0 > s ? -1 : 1),
        vu || (f0 = s),
        r &&
          (bl && !hc && i - bl > 200 && ((bl = 0), Gi("scrollEnd")),
          (Vr = Nh),
          (Nh = i)),
        Ks < 0)
      ) {
        for (yu = a; yu-- > 0; ) Ct[yu] && Ct[yu].update(0, r);
        Ks = 1;
      } else for (yu = 0; yu < a; yu++) Ct[yu] && Ct[yu].update(0, r);
      Ut.isUpdating = !1;
    }
    gf = 0;
  },
  s0 = [
    x1,
    C1,
    B0,
    R0,
    ml + af,
    ml + uf,
    ml + nf,
    ml + lf,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  Js = s0.concat([
    wi,
    Fi,
    "boxSizing",
    "max" + La,
    "max" + N0,
    "position",
    ml,
    Ue,
    Ue + nf,
    Ue + uf,
    Ue + af,
    Ue + lf,
  ]),
  F2 = function (l, a, i) {
    Fa(i);
    var r = l._gsap;
    if (r.spacerIsNative) Fa(r.spacerState);
    else if (l._gsap.swappedIn) {
      var s = a.parentNode;
      s && (s.insertBefore(l, a), s.removeChild(a));
    }
    l._gsap.swappedIn = !1;
  },
  Fh = function (l, a, i, r) {
    if (!l._gsap.swappedIn) {
      for (var s = s0.length, o = a.style, h = l.style, D; s--; )
        (D = s0[s]), (o[D] = i[D]);
      (o.position = i.position === "absolute" ? "absolute" : "relative"),
        i.display === "inline" && (o.display = "inline-block"),
        (h[B0] = h[R0] = "auto"),
        (o.flexBasis = i.flexBasis || "auto"),
        (o.overflow = "visible"),
        (o.boxSizing = "border-box"),
        (o[wi] = rc(l, Su) + Xe),
        (o[Fi] = rc(l, Ge) + Xe),
        (o[Ue] = h[ml] = h[C1] = h[x1] = "0"),
        Fa(r),
        (h[wi] = h["max" + La] = i[wi]),
        (h[Fi] = h["max" + N0] = i[Fi]),
        (h[Ue] = i[Ue]),
        l.parentNode !== a &&
          (l.parentNode.insertBefore(a, l), a.appendChild(l)),
        (l._gsap.swappedIn = !0);
    }
  },
  H2 = /([A-Z])/g,
  Fa = function (l) {
    if (l) {
      var a = l.t.style,
        i = l.length,
        r = 0,
        s,
        o;
      for ((l.t._gsap || lt.core.getCache(l.t)).uncache = 1; r < i; r += 2)
        (o = l[r + 1]),
          (s = l[r]),
          o
            ? (a[s] = o)
            : a[s] && a.removeProperty(s.replace(H2, "-$1").toLowerCase());
    }
  },
  qs = function (l) {
    for (var a = Js.length, i = l.style, r = [], s = 0; s < a; s++)
      r.push(Js[s], i[Js[s]]);
    return (r.t = l), r;
  },
  Y2 = function (l, a, i) {
    for (var r = [], s = l.length, o = i ? 8 : 0, h; o < s; o += 2)
      (h = l[o]), r.push(h, h in a ? a[h] : l[o + 1]);
    return (r.t = l.t), r;
  },
  $s = { left: 0, top: 0 },
  ep = function (l, a, i, r, s, o, h, D, _, m, S, T, v, x) {
    fu(l) && (l = l(D)),
      Ju(l) &&
        l.substr(0, 3) === "max" &&
        (l = T + (l.charAt(4) === "=" ? Zs("0" + l.substr(3), i) : 0));
    var b = v ? v.time() : 0,
      A,
      G,
      H;
    if ((v && v.seek(0), isNaN(l) || (l = +l), kr(l)))
      v &&
        (l = lt.utils.mapRange(
          v.scrollTrigger.start,
          v.scrollTrigger.end,
          0,
          T,
          l
        )),
        h && ks(h, i, r, !0);
    else {
      fu(a) && (a = a(D));
      var X = (l || "0").split(" "),
        U,
        F,
        Z,
        Y;
      (H = Ru(a, D) || Qt),
        (U = mn(H) || {}),
        (!U || (!U.left && !U.top)) &&
          yl(H).display === "none" &&
          ((Y = H.style.display),
          (H.style.display = "block"),
          (U = mn(H)),
          Y ? (H.style.display = Y) : H.style.removeProperty("display")),
        (F = Zs(X[0], U[r.d])),
        (Z = Zs(X[1] || "0", i)),
        (l = U[r.p] - _[r.p] - m + F + s - Z),
        h && ks(h, Z, r, i - Z < 20 || (h._isStart && Z > 20)),
        (i -= i - Z);
    }
    if ((x && ((D[x] = l || -0.001), l < 0 && (l = 0)), o)) {
      var K = l + i,
        k = o._isStart;
      (A = "scroll" + r.d2),
        ks(
          o,
          K,
          r,
          (k && K > 20) ||
            (!k && (S ? Math.max(Qt[A], Wu[A]) : o.parentNode[A]) <= K + 1)
        ),
        S &&
          ((_ = mn(h)),
          S && (o.style[r.op.p] = _[r.op.p] - r.op.m - o._offset + Xe));
    }
    return (
      v &&
        H &&
        ((A = mn(H)),
        v.seek(T),
        (G = mn(H)),
        (v._caScrollDist = A[r.p] - G[r.p]),
        (l = (l / v._caScrollDist) * T)),
      v && v.seek(b),
      v ? l : Math.round(l)
    );
  },
  q2 = /(webkit|moz|length|cssText|inset)/i,
  up = function (l, a, i, r) {
    if (l.parentNode !== a) {
      var s = l.style,
        o,
        h;
      if (a === Qt) {
        (l._stOrig = s.cssText), (h = yl(l));
        for (o in h)
          !+o &&
            !q2.test(o) &&
            h[o] &&
            typeof s[o] == "string" &&
            o !== "0" &&
            (s[o] = h[o]);
        (s.top = i), (s.left = r);
      } else s.cssText = l._stOrig;
      (lt.core.getCache(l).uncache = 1), a.appendChild(l);
    }
  },
  B1 = function (l, a, i) {
    var r = a,
      s = r;
    return function (o) {
      var h = Math.round(l());
      return (
        h !== r &&
          h !== s &&
          Math.abs(h - r) > 3 &&
          Math.abs(h - s) > 3 &&
          ((o = h), i && i()),
        (s = r),
        (r = Math.round(o)),
        r
      );
    };
  },
  Xs = function (l, a, i) {
    var r = {};
    (r[a.p] = "+=" + i), lt.set(l, r);
  },
  lp = function (l, a) {
    var i = ni(l, a),
      r = "_scroll" + a.p2,
      s = function o(h, D, _, m, S) {
        var T = o.tween,
          v = D.onComplete,
          x = {};
        _ = _ || i();
        var b = B1(i, _, function () {
          T.kill(), (o.tween = 0);
        });
        return (
          (S = (m && S) || 0),
          (m = m || h - _),
          T && T.kill(),
          (D[r] = h),
          (D.inherit = !1),
          (D.modifiers = x),
          (x[r] = function () {
            return b(_ + m * T.ratio + S * T.ratio * T.ratio);
          }),
          (D.onUpdate = function () {
            Mt.cache++, o.tween && vn();
          }),
          (D.onComplete = function () {
            (o.tween = 0), v && v.call(T);
          }),
          (T = o.tween = lt.to(l, D)),
          T
        );
      };
    return (
      (l[r] = i),
      (i.wheelHandler = function () {
        return s.tween && s.tween.kill() && (s.tween = 0);
      }),
      ke(l, "wheel", i.wheelHandler),
      Ut.isTouch && ke(l, "touchmove", i.wheelHandler),
      s
    );
  },
  Ut = (function () {
    function d(a, i) {
      Ca ||
        d.register(lt) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        i0(this),
        this.init(a, i);
    }
    var l = d.prototype;
    return (
      (l.init = function (i, r) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !Qr)
        ) {
          this.update = this.refresh = this.kill = ql;
          return;
        }
        i = $g(Ju(i) || kr(i) || i.nodeType ? { trigger: i } : i, Hs);
        var s = i,
          o = s.onUpdate,
          h = s.toggleClass,
          D = s.id,
          _ = s.onToggle,
          m = s.onRefresh,
          S = s.scrub,
          T = s.trigger,
          v = s.pin,
          x = s.pinSpacing,
          b = s.invalidateOnRefresh,
          A = s.anticipatePin,
          G = s.onScrubComplete,
          H = s.onSnapComplete,
          X = s.once,
          U = s.snap,
          F = s.pinReparent,
          Z = s.pinSpacer,
          Y = s.containerAnimation,
          K = s.fastScrollEnd,
          k = s.preventOverlaps,
          J =
            i.horizontal || (i.containerAnimation && i.horizontal !== !1)
              ? Su
              : Ge,
          st = !S && S !== 0,
          $ = Ru(i.scroller || Ot),
          vt = lt.core.getCache($),
          mt = qi($),
          ot =
            ("pinType" in i
              ? i.pinType
              : ei($, "pinType") || (mt && "fixed")) === "fixed",
          R = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
          L = st && i.toggleActions.split(" "),
          tt = "markers" in i ? i.markers : Hs.markers,
          ct = mt ? 0 : parseFloat(yl($)["border" + J.p2 + La]) || 0,
          p = this,
          q =
            i.onRefreshInit &&
            function () {
              return i.onRefreshInit(p);
            },
          I = M2($, mt, J),
          P = z2($, mt),
          ut = 0,
          _t = 0,
          it = 0,
          Ht = ni($, J),
          St,
          ne,
          nl,
          Ae,
          je,
          zt,
          ie,
          uu,
          ou,
          w,
          hu,
          il,
          Sl,
          It,
          Tl,
          El,
          kl,
          Oe,
          Tu,
          wt,
          Me,
          te,
          xl,
          ai,
          De,
          Kl,
          Eu,
          xu,
          Cl,
          Cu,
          Jl,
          Tt,
          Rl,
          du,
          Je,
          Hu,
          Bl,
          $l,
          Yu;
        if (
          ((p._startClamp = p._endClamp = !1),
          (p._dir = J),
          (A *= 45),
          (p.scroller = $),
          (p.scroll = Y ? Y.time.bind(Y) : Ht),
          (Ae = Ht()),
          (p.vars = i),
          (r = r || i.animation),
          "refreshPriority" in i &&
            ((p1 = 1), i.refreshPriority === -9999 && (rf = p)),
          (vt.tweenScroll = vt.tweenScroll || {
            top: lp($, Ge),
            left: lp($, Su),
          }),
          (p.tweenTo = St = vt.tweenScroll[J.p]),
          (p.scrubDuration = function (W) {
            (Rl = kr(W) && W),
              Rl
                ? Tt
                  ? Tt.duration(W)
                  : (Tt = lt.to(r, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: Rl,
                      paused: !0,
                      onComplete: function () {
                        return G && G(p);
                      },
                    }))
                : (Tt && Tt.progress(1).kill(), (Tt = 0));
          }),
          r &&
            ((r.vars.lazy = !1),
            (r._initted && !p.isReverted) ||
              (r.vars.immediateRender !== !1 &&
                i.immediateRender !== !1 &&
                r.duration() &&
                r.render(0, !0, !0)),
            (p.animation = r.pause()),
            (r.scrollTrigger = p),
            p.scrubDuration(S),
            (Cu = 0),
            D || (D = r.vars.id)),
          U &&
            ((!Oi(U) || U.push) && (U = { snapTo: U }),
            "scrollBehavior" in Qt.style &&
              lt.set(mt ? [Qt, Wu] : $, { scrollBehavior: "auto" }),
            Mt.forEach(function (W) {
              return (
                fu(W) &&
                W.target === (mt ? le.scrollingElement || Wu : $) &&
                (W.smooth = !1)
              );
            }),
            (nl = fu(U.snapTo)
              ? U.snapTo
              : U.snapTo === "labels"
              ? B2(r)
              : U.snapTo === "labelsDirectional"
              ? N2(r)
              : U.directional !== !1
              ? function (W, rt) {
                  return U0(U.snapTo)(W, au() - _t < 500 ? 0 : rt.direction);
                }
              : lt.utils.snap(U.snapTo)),
            (du = U.duration || { min: 0.1, max: 2 }),
            (du = Oi(du) ? ef(du.min, du.max) : ef(du, du)),
            (Je = lt
              .delayedCall(U.delay || Rl / 2 || 0.1, function () {
                var W = Ht(),
                  rt = au() - _t < 500,
                  at = St.tween;
                if (
                  (rt || Math.abs(p.getVelocity()) < 10) &&
                  !at &&
                  !hc &&
                  ut !== W
                ) {
                  var pt = (W - zt) / It,
                    ze = r && !st ? r.totalProgress() : pt,
                    Rt = rt ? 0 : ((ze - Jl) / (au() - Vr)) * 1e3 || 0,
                    fe = lt.utils.clamp(-pt, 1 - pt, (Ea(Rt / 2) * Rt) / 0.185),
                    ge = pt + (U.inertia === !1 ? 0 : fe),
                    ee,
                    jt,
                    Yt = U,
                    $e = Yt.onStart,
                    Vt = Yt.onInterrupt,
                    Xt = Yt.onComplete;
                  if (
                    ((ee = nl(ge, p)),
                    kr(ee) || (ee = ge),
                    (jt = Math.max(0, Math.round(zt + ee * It))),
                    W <= ie && W >= zt && jt !== W)
                  ) {
                    if (at && !at._initted && at.data <= Ea(jt - W)) return;
                    U.inertia === !1 && (fe = ee - pt),
                      St(
                        jt,
                        {
                          duration: du(
                            Ea(
                              (Math.max(Ea(ge - ze), Ea(ee - ze)) * 0.185) /
                                Rt /
                                0.05 || 0
                            )
                          ),
                          ease: U.ease || "power3",
                          data: Ea(jt - W),
                          onInterrupt: function () {
                            return Je.restart(!0) && Vt && Vt(p);
                          },
                          onComplete: function () {
                            p.update(),
                              (ut = Ht()),
                              r &&
                                !st &&
                                (Tt
                                  ? Tt.resetTo(
                                      "totalProgress",
                                      ee,
                                      r._tTime / r._tDur
                                    )
                                  : r.progress(ee)),
                              (Cu = Jl =
                                r && !st ? r.totalProgress() : p.progress),
                              H && H(p),
                              Xt && Xt(p);
                          },
                        },
                        W,
                        fe * It,
                        jt - W - fe * It
                      ),
                      $e && $e(p, St.tween);
                  }
                } else p.isActive && ut !== W && Je.restart(!0);
              })
              .pause())),
          D && (r0[D] = p),
          (T = p.trigger = Ru(T || (v !== !0 && v))),
          (Yu = T && T._gsap && T._gsap.stRevert),
          Yu && (Yu = Yu(p)),
          (v = v === !0 ? T : Ru(v)),
          Ju(h) && (h = { targets: T, className: h }),
          v &&
            (x === !1 ||
              x === ml ||
              (x =
                !x &&
                v.parentNode &&
                v.parentNode.style &&
                yl(v.parentNode).display === "flex"
                  ? !1
                  : Ue),
            (p.pin = v),
            (ne = lt.core.getCache(v)),
            ne.spacer
              ? (Tl = ne.pinState)
              : (Z &&
                  ((Z = Ru(Z)),
                  Z && !Z.nodeType && (Z = Z.current || Z.nativeElement),
                  (ne.spacerIsNative = !!Z),
                  Z && (ne.spacerState = qs(Z))),
                (ne.spacer = Oe = Z || le.createElement("div")),
                Oe.classList.add("pin-spacer"),
                D && Oe.classList.add("pin-spacer-" + D),
                (ne.pinState = Tl = qs(v))),
            i.force3D !== !1 && lt.set(v, { force3D: !0 }),
            (p.spacer = Oe = ne.spacer),
            (Cl = yl(v)),
            (ai = Cl[x + J.os2]),
            (wt = lt.getProperty(v)),
            (Me = lt.quickSetter(v, J.a, Xe)),
            Fh(v, Oe, Cl),
            (kl = qs(v))),
          tt)
        ) {
          (il = Oi(tt) ? $g(tt, Wg) : Wg),
            (w = Ys("scroller-start", D, $, J, il, 0)),
            (hu = Ys("scroller-end", D, $, J, il, 0, w)),
            (Tu = w["offset" + J.op.d2]);
          var Wl = Ru(ei($, "content") || $);
          (uu = this.markerStart = Ys("start", D, Wl, J, il, Tu, 0, Y)),
            (ou = this.markerEnd = Ys("end", D, Wl, J, il, Tu, 0, Y)),
            Y && ($l = lt.quickSetter([uu, ou], J.a, Xe)),
            !ot &&
              !(Ql.length && ei($, "fixedMarkers") === !0) &&
              (R2(mt ? Qt : $),
              lt.set([w, hu], { force3D: !0 }),
              (Kl = lt.quickSetter(w, J.a, Xe)),
              (xu = lt.quickSetter(hu, J.a, Xe)));
        }
        if (Y) {
          var yt = Y.vars.onUpdate,
            ht = Y.vars.onUpdateParams;
          Y.eventCallback("onUpdate", function () {
            p.update(0, 0, 1), yt && yt.apply(Y, ht || []);
          });
        }
        if (
          ((p.previous = function () {
            return Ct[Ct.indexOf(p) - 1];
          }),
          (p.next = function () {
            return Ct[Ct.indexOf(p) + 1];
          }),
          (p.revert = function (W, rt) {
            if (!rt) return p.kill(!0);
            var at = W !== !1 || !p.enabled,
              pt = iu;
            at !== p.isReverted &&
              (at &&
                ((Hu = Math.max(Ht(), p.scroll.rec || 0)),
                (it = p.progress),
                (Bl = r && r.progress())),
              uu &&
                [uu, ou, w, hu].forEach(function (ze) {
                  return (ze.style.display = at ? "none" : "block");
                }),
              at && ((iu = p), p.update(at)),
              v &&
                (!F || !p.isActive) &&
                (at ? F2(v, Oe, Tl) : Fh(v, Oe, yl(v), De)),
              at || p.update(at),
              (iu = pt),
              (p.isReverted = at));
          }),
          (p.refresh = function (W, rt, at, pt) {
            if (!((iu || !p.enabled) && !rt)) {
              if (v && W && bl) {
                ke(d, "scrollEnd", O1);
                return;
              }
              !vu && q && q(p),
                (iu = p),
                St.tween && !at && (St.tween.kill(), (St.tween = 0)),
                Tt && Tt.pause(),
                b && r && r.revert({ kill: !1 }).invalidate(),
                p.isReverted || p.revert(!0, !0),
                (p._subPinOffset = !1);
              var ze = I(),
                Rt = P(),
                fe = Y ? Y.duration() : jl($, J),
                ge = It <= 0.01,
                ee = 0,
                jt = pt || 0,
                Yt = Oi(at) ? at.end : i.end,
                $e = i.endTrigger || T,
                Vt = Oi(at)
                  ? at.start
                  : i.start || (i.start === 0 || !T ? 0 : v ? "0 0" : "0 100%"),
                Xt = (p.pinnedContainer =
                  i.pinnedContainer && Ru(i.pinnedContainer, p)),
                qu = (T && Math.max(0, Ct.indexOf(p))) || 0,
                Re = qu,
                ae,
                oe,
                Pl,
                ri,
                He,
                Se,
                _u,
                Tn,
                al,
                Il,
                Xu,
                rl,
                En;
              for (
                tt &&
                Oi(at) &&
                ((rl = lt.getProperty(w, J.p)), (En = lt.getProperty(hu, J.p)));
                Re-- > 0;

              )
                (Se = Ct[Re]),
                  Se.end || Se.refresh(0, 1) || (iu = p),
                  (_u = Se.pin),
                  _u &&
                    (_u === T || _u === v || _u === Xt) &&
                    !Se.isReverted &&
                    (Il || (Il = []), Il.unshift(Se), Se.revert(!0, !0)),
                  Se !== Ct[Re] && (qu--, Re--);
              for (
                fu(Vt) && (Vt = Vt(p)),
                  Vt = Zg(Vt, "start", p),
                  zt =
                    ep(
                      Vt,
                      T,
                      ze,
                      J,
                      Ht(),
                      uu,
                      w,
                      p,
                      Rt,
                      ct,
                      ot,
                      fe,
                      Y,
                      p._startClamp && "_startClamp"
                    ) || (v ? -0.001 : 0),
                  fu(Yt) && (Yt = Yt(p)),
                  Ju(Yt) &&
                    !Yt.indexOf("+=") &&
                    (~Yt.indexOf(" ")
                      ? (Yt = (Ju(Vt) ? Vt.split(" ")[0] : "") + Yt)
                      : ((ee = Zs(Yt.substr(2), ze)),
                        (Yt = Ju(Vt)
                          ? Vt
                          : (Y
                              ? lt.utils.mapRange(
                                  0,
                                  Y.duration(),
                                  Y.scrollTrigger.start,
                                  Y.scrollTrigger.end,
                                  zt
                                )
                              : zt) + ee),
                        ($e = T))),
                  Yt = Zg(Yt, "end", p),
                  ie =
                    Math.max(
                      zt,
                      ep(
                        Yt || ($e ? "100% 0" : fe),
                        $e,
                        ze,
                        J,
                        Ht() + ee,
                        ou,
                        hu,
                        p,
                        Rt,
                        ct,
                        ot,
                        fe,
                        Y,
                        p._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  ee = 0,
                  Re = qu;
                Re--;

              )
                (Se = Ct[Re]),
                  (_u = Se.pin),
                  _u &&
                    Se.start - Se._pinPush <= zt &&
                    !Y &&
                    Se.end > 0 &&
                    ((ae =
                      Se.end -
                      (p._startClamp ? Math.max(0, Se.start) : Se.start)),
                    ((_u === T && Se.start - Se._pinPush < zt) || _u === Xt) &&
                      isNaN(Vt) &&
                      (ee += ae * (1 - Se.progress)),
                    _u === v && (jt += ae));
              if (
                ((zt += ee),
                (ie += ee),
                p._startClamp && (p._startClamp += ee),
                p._endClamp &&
                  !vu &&
                  ((p._endClamp = ie || -0.001), (ie = Math.min(ie, jl($, J)))),
                (It = ie - zt || ((zt -= 0.01) && 0.001)),
                ge &&
                  (it = lt.utils.clamp(0, 1, lt.utils.normalize(zt, ie, Hu))),
                (p._pinPush = jt),
                uu &&
                  ee &&
                  ((ae = {}),
                  (ae[J.a] = "+=" + ee),
                  Xt && (ae[J.p] = "-=" + Ht()),
                  lt.set([uu, ou], ae)),
                v && !(a0 && p.end >= jl($, J)))
              )
                (ae = yl(v)),
                  (ri = J === Ge),
                  (Pl = Ht()),
                  (te = parseFloat(wt(J.a)) + jt),
                  !fe &&
                    ie > 1 &&
                    ((Xu = (mt ? le.scrollingElement || Wu : $).style),
                    (Xu = {
                      style: Xu,
                      value: Xu["overflow" + J.a.toUpperCase()],
                    }),
                    mt &&
                      yl(Qt)["overflow" + J.a.toUpperCase()] !== "scroll" &&
                      (Xu.style["overflow" + J.a.toUpperCase()] = "scroll")),
                  Fh(v, Oe, ae),
                  (kl = qs(v)),
                  (oe = mn(v, !0)),
                  (Tn = ot && ni($, ri ? Su : Ge)()),
                  x
                    ? ((De = [x + J.os2, It + jt + Xe]),
                      (De.t = Oe),
                      (Re = x === Ue ? rc(v, J) + It + jt : 0),
                      Re &&
                        (De.push(J.d, Re + Xe),
                        Oe.style.flexBasis !== "auto" &&
                          (Oe.style.flexBasis = Re + Xe)),
                      Fa(De),
                      Xt &&
                        Ct.forEach(function (tn) {
                          tn.pin === Xt &&
                            tn.vars.pinSpacing !== !1 &&
                            (tn._subPinOffset = !0);
                        }),
                      ot && Ht(Hu))
                    : ((Re = rc(v, J)),
                      Re &&
                        Oe.style.flexBasis !== "auto" &&
                        (Oe.style.flexBasis = Re + Xe)),
                  ot &&
                    ((He = {
                      top: oe.top + (ri ? Pl - zt : Tn) + Xe,
                      left: oe.left + (ri ? Tn : Pl - zt) + Xe,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (He[wi] = He["max" + La] = Math.ceil(oe.width) + Xe),
                    (He[Fi] = He["max" + N0] = Math.ceil(oe.height) + Xe),
                    (He[ml] =
                      He[ml + nf] =
                      He[ml + uf] =
                      He[ml + af] =
                      He[ml + lf] =
                        "0"),
                    (He[Ue] = ae[Ue]),
                    (He[Ue + nf] = ae[Ue + nf]),
                    (He[Ue + uf] = ae[Ue + uf]),
                    (He[Ue + af] = ae[Ue + af]),
                    (He[Ue + lf] = ae[Ue + lf]),
                    (El = Y2(Tl, He, F)),
                    vu && Ht(0)),
                  r
                    ? ((al = r._initted),
                      Rh(1),
                      r.render(r.duration(), !0, !0),
                      (xl = wt(J.a) - te + It + jt),
                      (Eu = Math.abs(It - xl) > 1),
                      ot && Eu && El.splice(El.length - 2, 2),
                      r.render(0, !0, !0),
                      al || r.invalidate(!0),
                      r.parent || r.totalTime(r.totalTime()),
                      Rh(0))
                    : (xl = It),
                  Xu &&
                    (Xu.value
                      ? (Xu.style["overflow" + J.a.toUpperCase()] = Xu.value)
                      : Xu.style.removeProperty("overflow-" + J.a));
              else if (T && Ht() && !Y)
                for (oe = T.parentNode; oe && oe !== Qt; )
                  oe._pinOffset &&
                    ((zt -= oe._pinOffset), (ie -= oe._pinOffset)),
                    (oe = oe.parentNode);
              Il &&
                Il.forEach(function (tn) {
                  return tn.revert(!1, !0);
                }),
                (p.start = zt),
                (p.end = ie),
                (Ae = je = vu ? Hu : Ht()),
                !Y && !vu && (Ae < Hu && Ht(Hu), (p.scroll.rec = 0)),
                p.revert(!1, !0),
                (_t = au()),
                Je && ((ut = -1), Je.restart(!0)),
                (iu = 0),
                r &&
                  st &&
                  (r._initted || Bl) &&
                  r.progress() !== Bl &&
                  r.progress(Bl || 0, !0).render(r.time(), !0, !0),
                (ge || it !== p.progress || Y || b || (r && !r._initted)) &&
                  (r &&
                    !st &&
                    r.totalProgress(
                      Y && zt < -0.001 && !it
                        ? lt.utils.normalize(zt, ie, 0)
                        : it,
                      !0
                    ),
                  (p.progress = ge || (Ae - zt) / It === it ? 0 : it)),
                v && x && (Oe._pinOffset = Math.round(p.progress * xl)),
                Tt && Tt.invalidate(),
                isNaN(rl) ||
                  ((rl -= lt.getProperty(w, J.p)),
                  (En -= lt.getProperty(hu, J.p)),
                  Xs(w, J, rl),
                  Xs(uu, J, rl - (pt || 0)),
                  Xs(hu, J, En),
                  Xs(ou, J, En - (pt || 0))),
                ge && !vu && p.update(),
                m && !vu && !Sl && ((Sl = !0), m(p), (Sl = !1));
            }
          }),
          (p.getVelocity = function () {
            return ((Ht() - je) / (au() - Vr)) * 1e3 || 0;
          }),
          (p.endAnimation = function () {
            Xr(p.callbackAnimation),
              r &&
                (Tt
                  ? Tt.progress(1)
                  : r.paused()
                  ? st || Xr(r, p.direction < 0, 1)
                  : Xr(r, r.reversed()));
          }),
          (p.labelToScroll = function (W) {
            return (
              (r &&
                r.labels &&
                (zt || p.refresh() || zt) +
                  (r.labels[W] / r.duration()) * It) ||
              0
            );
          }),
          (p.getTrailing = function (W) {
            var rt = Ct.indexOf(p),
              at =
                p.direction > 0 ? Ct.slice(0, rt).reverse() : Ct.slice(rt + 1);
            return (
              Ju(W)
                ? at.filter(function (pt) {
                    return pt.vars.preventOverlaps === W;
                  })
                : at
            ).filter(function (pt) {
              return p.direction > 0 ? pt.end <= zt : pt.start >= ie;
            });
          }),
          (p.update = function (W, rt, at) {
            if (!(Y && !at && !W)) {
              var pt = vu === !0 ? Hu : p.scroll(),
                ze = W ? 0 : (pt - zt) / It,
                Rt = ze < 0 ? 0 : ze > 1 ? 1 : ze || 0,
                fe = p.progress,
                ge,
                ee,
                jt,
                Yt,
                $e,
                Vt,
                Xt,
                qu;
              if (
                (rt &&
                  ((je = Ae),
                  (Ae = Y ? Ht() : pt),
                  U && ((Jl = Cu), (Cu = r && !st ? r.totalProgress() : Rt))),
                A &&
                  v &&
                  !iu &&
                  !Ns &&
                  bl &&
                  (!Rt && zt < pt + ((pt - je) / (au() - Vr)) * A
                    ? (Rt = 1e-4)
                    : Rt === 1 &&
                      ie > pt + ((pt - je) / (au() - Vr)) * A &&
                      (Rt = 0.9999)),
                Rt !== fe && p.enabled)
              ) {
                if (
                  ((ge = p.isActive = !!Rt && Rt < 1),
                  (ee = !!fe && fe < 1),
                  (Vt = ge !== ee),
                  ($e = Vt || !!Rt != !!fe),
                  (p.direction = Rt > fe ? 1 : -1),
                  (p.progress = Rt),
                  $e &&
                    !iu &&
                    ((jt = Rt && !fe ? 0 : Rt === 1 ? 1 : fe === 1 ? 2 : 3),
                    st &&
                      ((Yt =
                        (!Vt && L[jt + 1] !== "none" && L[jt + 1]) || L[jt]),
                      (qu =
                        r &&
                        (Yt === "complete" || Yt === "reset" || Yt in r)))),
                  k &&
                    (Vt || qu) &&
                    (qu || S || !r) &&
                    (fu(k)
                      ? k(p)
                      : p.getTrailing(k).forEach(function (Pl) {
                          return Pl.endAnimation();
                        })),
                  st ||
                    (Tt && !iu && !Ns
                      ? (Tt._dp._time - Tt._start !== Tt._time &&
                          Tt.render(Tt._dp._time - Tt._start),
                        Tt.resetTo
                          ? Tt.resetTo("totalProgress", Rt, r._tTime / r._tDur)
                          : ((Tt.vars.totalProgress = Rt),
                            Tt.invalidate().restart()))
                      : r && r.totalProgress(Rt, !!(iu && (_t || W)))),
                  v)
                ) {
                  if ((W && x && (Oe.style[x + J.os2] = ai), !ot))
                    Me(Zr(te + xl * Rt));
                  else if ($e) {
                    if (
                      ((Xt =
                        !W && Rt > fe && ie + 1 > pt && pt + 1 >= jl($, J)),
                      F)
                    )
                      if (!W && (ge || Xt)) {
                        var Re = mn(v, !0),
                          ae = pt - zt;
                        up(
                          v,
                          Qt,
                          Re.top + (J === Ge ? ae : 0) + Xe,
                          Re.left + (J === Ge ? 0 : ae) + Xe
                        );
                      } else up(v, Oe);
                    Fa(ge || Xt ? El : kl),
                      (Eu && Rt < 1 && ge) ||
                        Me(te + (Rt === 1 && !Xt ? xl : 0));
                  }
                }
                U && !St.tween && !iu && !Ns && Je.restart(!0),
                  h &&
                    (Vt || (X && Rt && (Rt < 1 || !Bh))) &&
                    Df(h.targets).forEach(function (Pl) {
                      return Pl.classList[ge || X ? "add" : "remove"](
                        h.className
                      );
                    }),
                  o && !st && !W && o(p),
                  $e && !iu
                    ? (st &&
                        (qu &&
                          (Yt === "complete"
                            ? r.pause().totalProgress(1)
                            : Yt === "reset"
                            ? r.restart(!0).pause()
                            : Yt === "restart"
                            ? r.restart(!0)
                            : r[Yt]()),
                        o && o(p)),
                      (Vt || !Bh) &&
                        (_ && Vt && Uh(p, _),
                        R[jt] && Uh(p, R[jt]),
                        X && (Rt === 1 ? p.kill(!1, 1) : (R[jt] = 0)),
                        Vt || ((jt = Rt === 1 ? 1 : 3), R[jt] && Uh(p, R[jt]))),
                      K &&
                        !ge &&
                        Math.abs(p.getVelocity()) > (kr(K) ? K : 2500) &&
                        (Xr(p.callbackAnimation),
                        Tt
                          ? Tt.progress(1)
                          : Xr(r, Yt === "reverse" ? 1 : !Rt, 1)))
                    : st && o && !iu && o(p);
              }
              if (xu) {
                var oe = Y ? (pt / Y.duration()) * (Y._caScrollDist || 0) : pt;
                Kl(oe + (w._isFlipped ? 1 : 0)), xu(oe);
              }
              $l && $l((-pt / Y.duration()) * (Y._caScrollDist || 0));
            }
          }),
          (p.enable = function (W, rt) {
            p.enabled ||
              ((p.enabled = !0),
              ke($, "resize", Kr),
              mt || ke($, "scroll", xa),
              q && ke(d, "refreshInit", q),
              W !== !1 && ((p.progress = it = 0), (Ae = je = ut = Ht())),
              rt !== !1 && p.refresh());
          }),
          (p.getTween = function (W) {
            return W && St ? St.tween : Tt;
          }),
          (p.setPositions = function (W, rt, at, pt) {
            if (Y) {
              var ze = Y.scrollTrigger,
                Rt = Y.duration(),
                fe = ze.end - ze.start;
              (W = ze.start + (fe * W) / Rt), (rt = ze.start + (fe * rt) / Rt);
            }
            p.refresh(
              !1,
              !1,
              {
                start: kg(W, at && !!p._startClamp),
                end: kg(rt, at && !!p._endClamp),
              },
              pt
            ),
              p.update();
          }),
          (p.adjustPinSpacing = function (W) {
            if (De && W) {
              var rt = De.indexOf(J.d) + 1;
              (De[rt] = parseFloat(De[rt]) + W + Xe),
                (De[1] = parseFloat(De[1]) + W + Xe),
                Fa(De);
            }
          }),
          (p.disable = function (W, rt) {
            if (
              p.enabled &&
              (W !== !1 && p.revert(!0, !0),
              (p.enabled = p.isActive = !1),
              rt || (Tt && Tt.pause()),
              (Hu = 0),
              ne && (ne.uncache = 1),
              q && Ze(d, "refreshInit", q),
              Je && (Je.pause(), St.tween && St.tween.kill() && (St.tween = 0)),
              !mt)
            ) {
              for (var at = Ct.length; at--; )
                if (Ct[at].scroller === $ && Ct[at] !== p) return;
              Ze($, "resize", Kr), mt || Ze($, "scroll", xa);
            }
          }),
          (p.kill = function (W, rt) {
            p.disable(W, rt), Tt && !rt && Tt.kill(), D && delete r0[D];
            var at = Ct.indexOf(p);
            at >= 0 && Ct.splice(at, 1),
              at === yu && Ks > 0 && yu--,
              (at = 0),
              Ct.forEach(function (pt) {
                return pt.scroller === p.scroller && (at = 1);
              }),
              at || vu || (p.scroll.rec = 0),
              r &&
                ((r.scrollTrigger = null),
                W && r.revert({ kill: !1 }),
                rt || r.kill()),
              uu &&
                [uu, ou, w, hu].forEach(function (pt) {
                  return pt.parentNode && pt.parentNode.removeChild(pt);
                }),
              rf === p && (rf = 0),
              v &&
                (ne && (ne.uncache = 1),
                (at = 0),
                Ct.forEach(function (pt) {
                  return pt.pin === v && at++;
                }),
                at || (ne.spacer = 0)),
              i.onKill && i.onKill(p);
          }),
          Ct.push(p),
          p.enable(!1, !1),
          Yu && Yu(p),
          r && r.add && !It)
        ) {
          var Et = p.update;
          (p.update = function () {
            (p.update = Et), Mt.cache++, zt || ie || p.refresh();
          }),
            lt.delayedCall(0.01, p.update),
            (It = 0.01),
            (zt = ie = 0);
        } else p.refresh();
        v && w2();
      }),
      (d.register = function (i) {
        return (
          Ca ||
            ((lt = i || S1()),
            b1() && window.document && d.enable(),
            (Ca = Qr)),
          Ca
        );
      }),
      (d.defaults = function (i) {
        if (i) for (var r in i) Hs[r] = i[r];
        return Hs;
      }),
      (d.disable = function (i, r) {
        (Qr = 0),
          Ct.forEach(function (o) {
            return o[r ? "kill" : "disable"](i);
          }),
          Ze(Ot, "wheel", xa),
          Ze(le, "scroll", xa),
          clearInterval(Bs),
          Ze(le, "touchcancel", ql),
          Ze(Qt, "touchstart", ql),
          ws(Ze, le, "pointerdown,touchstart,mousedown", Kg),
          ws(Ze, le, "pointerup,touchend,mouseup", Jg),
          ic.kill(),
          Us(Ze);
        for (var s = 0; s < Mt.length; s += 3)
          Fs(Ze, Mt[s], Mt[s + 1]), Fs(Ze, Mt[s], Mt[s + 2]);
      }),
      (d.enable = function () {
        if (
          ((Ot = window),
          (le = document),
          (Wu = le.documentElement),
          (Qt = le.body),
          lt &&
            ((Df = lt.utils.toArray),
            (ef = lt.utils.clamp),
            (i0 = lt.core.context || ql),
            (Rh = lt.core.suppressOverwrites || ql),
            (M0 = Ot.history.scrollRestoration || "auto"),
            (f0 = Ot.pageYOffset || 0),
            lt.core.globals("ScrollTrigger", d),
            Qt))
        ) {
          (Qr = 1),
            (wa = document.createElement("div")),
            (wa.style.height = "100vh"),
            (wa.style.position = "absolute"),
            R1(),
            O2(),
            Ce.register(lt),
            (d.isTouch = Ce.isTouch),
            (kn =
              Ce.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (n0 = Ce.isTouch === 1),
            ke(Ot, "wheel", xa),
            (O0 = [Ot, le, Wu, Qt]),
            lt.matchMedia
              ? ((d.matchMedia = function (_) {
                  var m = lt.matchMedia(),
                    S;
                  for (S in _) m.add(S, _[S]);
                  return m;
                }),
                lt.addEventListener("matchMediaInit", function () {
                  return w0();
                }),
                lt.addEventListener("matchMediaRevert", function () {
                  return M1();
                }),
                lt.addEventListener("matchMedia", function () {
                  zi(0, 1), Gi("matchMedia");
                }),
                lt.matchMedia().add("(orientation: portrait)", function () {
                  return wh(), wh;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            wh(),
            ke(le, "scroll", xa);
          var i = Qt.hasAttribute("style"),
            r = Qt.style,
            s = r.borderTopStyle,
            o = lt.core.Animation.prototype,
            h,
            D;
          for (
            o.revert ||
              Object.defineProperty(o, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              r.borderTopStyle = "solid",
              h = mn(Qt),
              Ge.m = Math.round(h.top + Ge.sc()) || 0,
              Su.m = Math.round(h.left + Su.sc()) || 0,
              s ? (r.borderTopStyle = s) : r.removeProperty("border-top-style"),
              i || (Qt.setAttribute("style", ""), Qt.removeAttribute("style")),
              Bs = setInterval(Pg, 250),
              lt.delayedCall(0.5, function () {
                return (Ns = 0);
              }),
              ke(le, "touchcancel", ql),
              ke(Qt, "touchstart", ql),
              ws(ke, le, "pointerdown,touchstart,mousedown", Kg),
              ws(ke, le, "pointerup,touchend,mouseup", Jg),
              l0 = lt.utils.checkPrefix("transform"),
              Js.push(l0),
              Ca = au(),
              ic = lt.delayedCall(0.2, zi).pause(),
              Aa = [
                le,
                "visibilitychange",
                function () {
                  var _ = Ot.innerWidth,
                    m = Ot.innerHeight;
                  le.hidden
                    ? ((Vg = _), (Qg = m))
                    : (Vg !== _ || Qg !== m) && Kr();
                },
                le,
                "DOMContentLoaded",
                zi,
                Ot,
                "load",
                zi,
                Ot,
                "resize",
                Kr,
              ],
              Us(ke),
              Ct.forEach(function (_) {
                return _.enable(0, 1);
              }),
              D = 0;
            D < Mt.length;
            D += 3
          )
            Fs(Ze, Mt[D], Mt[D + 1]), Fs(Ze, Mt[D], Mt[D + 2]);
        }
      }),
      (d.config = function (i) {
        "limitCallbacks" in i && (Bh = !!i.limitCallbacks);
        var r = i.syncInterval;
        (r && clearInterval(Bs)) || ((Bs = r) && setInterval(Pg, r)),
          "ignoreMobileResize" in i &&
            (n0 = d.isTouch === 1 && i.ignoreMobileResize),
          "autoRefreshEvents" in i &&
            (Us(Ze) || Us(ke, i.autoRefreshEvents || "none"),
            (m1 = (i.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (d.scrollerProxy = function (i, r) {
        var s = Ru(i),
          o = Mt.indexOf(s),
          h = qi(s);
        ~o && Mt.splice(o, h ? 6 : 2),
          r && (h ? Ql.unshift(Ot, r, Qt, r, Wu, r) : Ql.unshift(s, r));
      }),
      (d.clearMatchMedia = function (i) {
        Ct.forEach(function (r) {
          return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0);
        });
      }),
      (d.isInViewport = function (i, r, s) {
        var o = (Ju(i) ? Ru(i) : i).getBoundingClientRect(),
          h = o[s ? wi : Fi] * r || 0;
        return s
          ? o.right - h > 0 && o.left + h < Ot.innerWidth
          : o.bottom - h > 0 && o.top + h < Ot.innerHeight;
      }),
      (d.positionInViewport = function (i, r, s) {
        Ju(i) && (i = Ru(i));
        var o = i.getBoundingClientRect(),
          h = o[s ? wi : Fi],
          D =
            r == null
              ? h / 2
              : r in fc
              ? fc[r] * h
              : ~r.indexOf("%")
              ? (parseFloat(r) * h) / 100
              : parseFloat(r) || 0;
        return s ? (o.left + D) / Ot.innerWidth : (o.top + D) / Ot.innerHeight;
      }),
      (d.killAll = function (i) {
        if (
          (Ct.slice(0).forEach(function (s) {
            return s.vars.id !== "ScrollSmoother" && s.kill();
          }),
          i !== !0)
        ) {
          var r = Xi.killAll || [];
          (Xi = {}),
            r.forEach(function (s) {
              return s();
            });
        }
      }),
      d
    );
  })();
Ut.version = "3.12.7";
Ut.saveStyles = function (d) {
  return d
    ? Df(d).forEach(function (l) {
        if (l && l.style) {
          var a = Ku.indexOf(l);
          a >= 0 && Ku.splice(a, 5),
            Ku.push(
              l,
              l.style.cssText,
              l.getBBox && l.getAttribute("transform"),
              lt.core.getCache(l),
              i0()
            );
        }
      })
    : Ku;
};
Ut.revert = function (d, l) {
  return w0(!d, l);
};
Ut.create = function (d, l) {
  return new Ut(d, l);
};
Ut.refresh = function (d) {
  return d ? Kr(!0) : (Ca || Ut.register()) && zi(!0);
};
Ut.update = function (d) {
  return ++Mt.cache && vn(d === !0 ? 2 : 0);
};
Ut.clearScrollMemory = z1;
Ut.maxScroll = function (d, l) {
  return jl(d, l ? Su : Ge);
};
Ut.getScrollFunc = function (d, l) {
  return ni(Ru(d), l ? Su : Ge);
};
Ut.getById = function (d) {
  return r0[d];
};
Ut.getAll = function () {
  return Ct.filter(function (d) {
    return d.vars.id !== "ScrollSmoother";
  });
};
Ut.isScrolling = function () {
  return !!bl;
};
Ut.snapDirectional = U0;
Ut.addEventListener = function (d, l) {
  var a = Xi[d] || (Xi[d] = []);
  ~a.indexOf(l) || a.push(l);
};
Ut.removeEventListener = function (d, l) {
  var a = Xi[d],
    i = a && a.indexOf(l);
  i >= 0 && a.splice(i, 1);
};
Ut.batch = function (d, l) {
  var a = [],
    i = {},
    r = l.interval || 0.016,
    s = l.batchMax || 1e9,
    o = function (_, m) {
      var S = [],
        T = [],
        v = lt
          .delayedCall(r, function () {
            m(S, T), (S = []), (T = []);
          })
          .pause();
      return function (x) {
        S.length || v.restart(!0),
          S.push(x.trigger),
          T.push(x),
          s <= S.length && v.progress(1);
      };
    },
    h;
  for (h in l)
    i[h] =
      h.substr(0, 2) === "on" && fu(l[h]) && h !== "onRefreshInit"
        ? o(h, l[h])
        : l[h];
  return (
    fu(s) &&
      ((s = s()),
      ke(Ut, "refresh", function () {
        return (s = l.batchMax());
      })),
    Df(d).forEach(function (D) {
      var _ = {};
      for (h in i) _[h] = i[h];
      (_.trigger = D), a.push(Ut.create(_));
    }),
    a
  );
};
var np = function (l, a, i, r) {
    return (
      a > r ? l(r) : a < 0 && l(0),
      i > r ? (r - a) / (i - a) : i < 0 ? a / (a - i) : 1
    );
  },
  Hh = function d(l, a) {
    a === !0
      ? l.style.removeProperty("touch-action")
      : (l.style.touchAction =
          a === !0
            ? "auto"
            : a
            ? "pan-" + a + (Ce.isTouch ? " pinch-zoom" : "")
            : "none"),
      l === Wu && d(Qt, a);
  },
  Gs = { auto: 1, scroll: 1 },
  X2 = function (l) {
    var a = l.event,
      i = l.target,
      r = l.axis,
      s = (a.changedTouches ? a.changedTouches[0] : a).target,
      o = s._gsap || lt.core.getCache(s),
      h = au(),
      D;
    if (!o._isScrollT || h - o._isScrollT > 2e3) {
      for (
        ;
        s &&
        s !== Qt &&
        ((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) ||
          !(Gs[(D = yl(s)).overflowY] || Gs[D.overflowX]));

      )
        s = s.parentNode;
      (o._isScroll =
        s &&
        s !== i &&
        !qi(s) &&
        (Gs[(D = yl(s)).overflowY] || Gs[D.overflowX])),
        (o._isScrollT = h);
    }
    (o._isScroll || r === "x") && (a.stopPropagation(), (a._gsapAllow = !0));
  },
  N1 = function (l, a, i, r) {
    return Ce.create({
      target: l,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: a,
      onWheel: (r = r && X2),
      onPress: r,
      onDrag: r,
      onScroll: r,
      onEnable: function () {
        return i && ke(le, Ce.eventTypes[0], ap, !1, !0);
      },
      onDisable: function () {
        return Ze(le, Ce.eventTypes[0], ap, !0);
      },
    });
  },
  G2 = /(input|label|select|textarea)/i,
  ip,
  ap = function (l) {
    var a = G2.test(l.target.tagName);
    (a || ip) && ((l._gsapAllow = !0), (ip = a));
  },
  j2 = function (l) {
    Oi(l) || (l = {}),
      (l.preventDefault = l.isNormalizer = l.allowClicks = !0),
      l.type || (l.type = "wheel,touch"),
      (l.debounce = !!l.debounce),
      (l.id = l.id || "normalizer");
    var a = l,
      i = a.normalizeScrollX,
      r = a.momentum,
      s = a.allowNestedScroll,
      o = a.onRelease,
      h,
      D,
      _ = Ru(l.target) || Wu,
      m = lt.core.globals().ScrollSmoother,
      S = m && m.get(),
      T =
        kn &&
        ((l.content && Ru(l.content)) ||
          (S && l.content !== !1 && !S.smooth() && S.content())),
      v = ni(_, Ge),
      x = ni(_, Su),
      b = 1,
      A =
        (Ce.isTouch && Ot.visualViewport
          ? Ot.visualViewport.scale * Ot.visualViewport.width
          : Ot.outerWidth) / Ot.innerWidth,
      G = 0,
      H = fu(r)
        ? function () {
            return r(h);
          }
        : function () {
            return r || 2.8;
          },
      X,
      U,
      F = N1(_, l.type, !0, s),
      Z = function () {
        return (U = !1);
      },
      Y = ql,
      K = ql,
      k = function () {
        (D = jl(_, Ge)),
          (K = ef(kn ? 1 : 0, D)),
          i && (Y = ef(0, jl(_, Su))),
          (X = Hi);
      },
      J = function () {
        (T._gsap.y = Zr(parseFloat(T._gsap.y) + v.offset) + "px"),
          (T.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(T._gsap.y) +
            ", 0, 1)"),
          (v.offset = v.cacheID = 0);
      },
      st = function () {
        if (U) {
          requestAnimationFrame(Z);
          var tt = Zr(h.deltaY / 2),
            ct = K(v.v - tt);
          if (T && ct !== v.v + v.offset) {
            v.offset = ct - v.v;
            var p = Zr((parseFloat(T && T._gsap.y) || 0) - v.offset);
            (T.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              p +
              ", 0, 1)"),
              (T._gsap.y = p + "px"),
              (v.cacheID = Mt.cache),
              vn();
          }
          return !0;
        }
        v.offset && J(), (U = !0);
      },
      $,
      vt,
      mt,
      ot,
      R = function () {
        k(),
          $.isActive() &&
            $.vars.scrollY > D &&
            (v() > D ? $.progress(1) && v(D) : $.resetTo("scrollY", D));
      };
    return (
      T && lt.set(T, { y: "+=0" }),
      (l.ignoreCheck = function (L) {
        return (
          (kn && L.type === "touchmove" && st()) ||
          (b > 1.05 && L.type !== "touchstart") ||
          h.isGesturing ||
          (L.touches && L.touches.length > 1)
        );
      }),
      (l.onPress = function () {
        U = !1;
        var L = b;
        (b = Zr(((Ot.visualViewport && Ot.visualViewport.scale) || 1) / A)),
          $.pause(),
          L !== b && Hh(_, b > 1.01 ? !0 : i ? !1 : "x"),
          (vt = x()),
          (mt = v()),
          k(),
          (X = Hi);
      }),
      (l.onRelease = l.onGestureStart =
        function (L, tt) {
          if ((v.offset && J(), !tt)) ot.restart(!0);
          else {
            Mt.cache++;
            var ct = H(),
              p,
              q;
            i &&
              ((p = x()),
              (q = p + (ct * 0.05 * -L.velocityX) / 0.227),
              (ct *= np(x, p, q, jl(_, Su))),
              ($.vars.scrollX = Y(q))),
              (p = v()),
              (q = p + (ct * 0.05 * -L.velocityY) / 0.227),
              (ct *= np(v, p, q, jl(_, Ge))),
              ($.vars.scrollY = K(q)),
              $.invalidate().duration(ct).play(0.01),
              ((kn && $.vars.scrollY >= D) || p >= D - 1) &&
                lt.to({}, { onUpdate: R, duration: ct });
          }
          o && o(L);
        }),
      (l.onWheel = function () {
        $._ts && $.pause(), au() - G > 1e3 && ((X = 0), (G = au()));
      }),
      (l.onChange = function (L, tt, ct, p, q) {
        if (
          (Hi !== X && k(),
          tt &&
            i &&
            x(Y(p[2] === tt ? vt + (L.startX - L.x) : x() + tt - p[1])),
          ct)
        ) {
          v.offset && J();
          var I = q[2] === ct,
            P = I ? mt + L.startY - L.y : v() + ct - q[1],
            ut = K(P);
          I && P !== ut && (mt += ut - P), v(ut);
        }
        (ct || tt) && vn();
      }),
      (l.onEnable = function () {
        Hh(_, i ? !1 : "x"),
          Ut.addEventListener("refresh", R),
          ke(Ot, "resize", R),
          v.smooth &&
            ((v.target.style.scrollBehavior = "auto"),
            (v.smooth = x.smooth = !1)),
          F.enable();
      }),
      (l.onDisable = function () {
        Hh(_, !0),
          Ze(Ot, "resize", R),
          Ut.removeEventListener("refresh", R),
          F.kill();
      }),
      (l.lockAxis = l.lockAxis !== !1),
      (h = new Ce(l)),
      (h.iOS = kn),
      kn && !v() && v(1),
      kn && lt.ticker.add(ql),
      (ot = h._dc),
      ($ = lt.to(h, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: i ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: B1(v, v(), function () {
            return $.pause();
          }),
        },
        onUpdate: vn,
        onComplete: ot.vars.onComplete,
      })),
      h
    );
  };
Ut.sort = function (d) {
  if (fu(d)) return Ct.sort(d);
  var l = Ot.pageYOffset || 0;
  return (
    Ut.getAll().forEach(function (a) {
      return (a._sortY = a.trigger
        ? l + a.trigger.getBoundingClientRect().top
        : a.start + Ot.innerHeight);
    }),
    Ct.sort(
      d ||
        function (a, i) {
          return (
            (a.vars.refreshPriority || 0) * -1e6 +
            (a.vars.containerAnimation ? 1e6 : a._sortY) -
            ((i.vars.containerAnimation ? 1e6 : i._sortY) +
              (i.vars.refreshPriority || 0) * -1e6)
          );
        }
    )
  );
};
Ut.observe = function (d) {
  return new Ce(d);
};
Ut.normalizeScroll = function (d) {
  if (typeof d > "u") return mu;
  if (d === !0 && mu) return mu.enable();
  if (d === !1) {
    mu && mu.kill(), (mu = d);
    return;
  }
  var l = d instanceof Ce ? d : j2(d);
  return mu && mu.target === l.target && mu.kill(), qi(l.target) && (mu = l), l;
};
Ut.core = {
  _getVelocityProp: u0,
  _inputObserver: N1,
  _scrollers: Mt,
  _proxies: Ql,
  bridge: {
    ss: function () {
      bl || Gi("scrollStart"), (bl = au());
    },
    ref: function () {
      return iu;
    },
  },
};
S1() && lt.registerPlugin(Ut);
ve.registerPlugin(Li);
ve.registerPlugin(mf);
ve.registerPlugin(Ut);
function L2() {
  const [d, l] = re.useState(!1),
    [a, i] = re.useState(0);
  re.useEffect(() => {
    setTimeout(() => {
      i(0);
    }, 1e3);
  }, []),
    re.useEffect(
      () => (
        (document.body.style.overflow = d ? "" : "hidden"),
        () => {
          document.body.style.overflow = "";
        }
      ),
      [d]
    );
  const r = re.useRef(null);
  return (
    Li(
      () => {
        ve.to(".HeroText", {
          scrollTrigger: {
            trigger: ".HeroText",
            start: "0% 0%",
            end: "100% 100%",
            onUpdate: () => {
              console.log("enter to 1"), i(1);
            },
          },
        }),
          ve.to(".Slider", {
            scrollTrigger: {
              trigger: ".Slider",
              start: "0% 0%",
              end: "100% 100%",
              onUpdate: () => {
                console.log("enter to 2"), i(2);
              },
            },
          }),
          ve.to(".Tokenomics_wrapper", {
            scrollTrigger: {
              trigger: ".Tokenomics_wrapper",
              start: "0% 100%",
              end: "100% 100%",
              onUpdate: () => {
                console.log("enter to 3"), i(3);
              },
            },
          }),
          ve.to(".Footer", {
            scrollTrigger: {
              trigger: ".Footer",
              start: "0% 100%",
              end: "0% 100%",
              onUpdate: () => {
                console.log("enter to 4"), i(4);
              },
            },
          });
      },
      { scope: r }
    ),
    et.jsxs("div", {
      className: "App",
      style: {
        width: "100%",
        overflow: "hidden",
        maxHeight: d ? "none" : "100dvh",
      },
      ref: r,
      children: [
        et.jsx("div", { className: "App_noise" }),
        et.jsx("div", {
          className: "Header__nav",
          style: { opacity: d ? 1 : 0 },
          children: et.jsx(Wy, { activeTab: a }),
        }),
        et.jsx(m2, { showContent: d }),
        window.innerWidth > window.innerHeight
          ? et.jsx(y2, { showContent: d, setshowContent: l })
          : et.jsx(v2, { showContent: d, setshowContent: l }),
        et.jsx(b2, { setactiveBlock: i }),
        et.jsx(g2, { setactiveBlock: i }),
        et.jsx(p2, { setactiveBlock: i }),
      ],
    })
  );
}
Jy.createRoot(document.getElementById("root")).render(et.jsx(L2, {}));
