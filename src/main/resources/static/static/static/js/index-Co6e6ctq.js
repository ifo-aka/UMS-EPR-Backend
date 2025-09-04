(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) o(f);
  new MutationObserver((f) => {
    for (const h of f)
      if (h.type === "childList")
        for (const g of h.addedNodes)
          g.tagName === "LINK" && g.rel === "modulepreload" && o(g);
  }).observe(document, { childList: !0, subtree: !0 });
  function c(f) {
    const h = {};
    return (
      f.integrity && (h.integrity = f.integrity),
      f.referrerPolicy && (h.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (h.credentials = "include")
        : f.crossOrigin === "anonymous"
        ? (h.credentials = "omit")
        : (h.credentials = "same-origin"),
      h
    );
  }
  function o(f) {
    if (f.ep) return;
    f.ep = !0;
    const h = c(f);
    fetch(f.href, h);
  }
})();
function $y(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default")
    ? u.default
    : u;
}
var Oo = { exports: {} },
  wu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uh;
function Fy() {
  if (Uh) return wu;
  Uh = 1;
  var u = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.fragment");
  function c(o, f, h) {
    var g = null;
    if (
      (h !== void 0 && (g = "" + h),
      f.key !== void 0 && (g = "" + f.key),
      "key" in f)
    ) {
      h = {};
      for (var b in f) b !== "key" && (h[b] = f[b]);
    } else h = f;
    return (
      (f = h.ref),
      { $$typeof: u, type: o, key: g, ref: f !== void 0 ? f : null, props: h }
    );
  }
  return (wu.Fragment = r), (wu.jsx = c), (wu.jsxs = c), wu;
}
var Hh;
function Wy() {
  return Hh || ((Hh = 1), (Oo.exports = Fy())), Oo.exports;
}
var m = Wy(),
  wo = { exports: {} },
  Ee = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lh;
function Py() {
  if (Lh) return Ee;
  Lh = 1;
  var u = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    c = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    h = Symbol.for("react.consumer"),
    g = Symbol.for("react.context"),
    b = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    v = Symbol.for("react.memo"),
    E = Symbol.for("react.lazy"),
    C = Symbol.iterator;
  function A(S) {
    return S === null || typeof S != "object"
      ? null
      : ((S = (C && S[C]) || S["@@iterator"]),
        typeof S == "function" ? S : null);
  }
  var H = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Q = Object.assign,
    J = {};
  function k(S, B, F) {
    (this.props = S),
      (this.context = B),
      (this.refs = J),
      (this.updater = F || H);
  }
  (k.prototype.isReactComponent = {}),
    (k.prototype.setState = function (S, B) {
      if (typeof S != "object" && typeof S != "function" && S != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, S, B, "setState");
    }),
    (k.prototype.forceUpdate = function (S) {
      this.updater.enqueueForceUpdate(this, S, "forceUpdate");
    });
  function X() {}
  X.prototype = k.prototype;
  function ce(S, B, F) {
    (this.props = S),
      (this.context = B),
      (this.refs = J),
      (this.updater = F || H);
  }
  var $ = (ce.prototype = new X());
  ($.constructor = ce), Q($, k.prototype), ($.isPureReactComponent = !0);
  var oe = Array.isArray,
    W = { H: null, A: null, T: null, S: null, V: null },
    O = Object.prototype.hasOwnProperty;
  function be(S, B, F, K, ae, Ae) {
    return (
      (F = Ae.ref),
      { $$typeof: u, type: S, key: B, ref: F !== void 0 ? F : null, props: Ae }
    );
  }
  function _e(S, B) {
    return be(S.type, B, void 0, void 0, void 0, S.props);
  }
  function ve(S) {
    return typeof S == "object" && S !== null && S.$$typeof === u;
  }
  function de(S) {
    var B = { "=": "=0", ":": "=2" };
    return (
      "$" +
      S.replace(/[=:]/g, function (F) {
        return B[F];
      })
    );
  }
  var We = /\/+/g;
  function Be(S, B) {
    return typeof S == "object" && S !== null && S.key != null
      ? de("" + S.key)
      : B.toString(36);
  }
  function Oe() {}
  function ge(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (
          (typeof S.status == "string"
            ? S.then(Oe, Oe)
            : ((S.status = "pending"),
              S.then(
                function (B) {
                  S.status === "pending" &&
                    ((S.status = "fulfilled"), (S.value = B));
                },
                function (B) {
                  S.status === "pending" &&
                    ((S.status = "rejected"), (S.reason = B));
                }
              )),
          S.status)
        ) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function pe(S, B, F, K, ae) {
    var Ae = typeof S;
    (Ae === "undefined" || Ae === "boolean") && (S = null);
    var he = !1;
    if (S === null) he = !0;
    else
      switch (Ae) {
        case "bigint":
        case "string":
        case "number":
          he = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case u:
            case r:
              he = !0;
              break;
            case E:
              return (he = S._init), pe(he(S._payload), B, F, K, ae);
          }
      }
    if (he)
      return (
        (ae = ae(S)),
        (he = K === "" ? "." + Be(S, 0) : K),
        oe(ae)
          ? ((F = ""),
            he != null && (F = he.replace(We, "$&/") + "/"),
            pe(ae, B, F, "", function (ml) {
              return ml;
            }))
          : ae != null &&
            (ve(ae) &&
              (ae = _e(
                ae,
                F +
                  (ae.key == null || (S && S.key === ae.key)
                    ? ""
                    : ("" + ae.key).replace(We, "$&/") + "/") +
                  he
              )),
            B.push(ae)),
        1
      );
    he = 0;
    var Rt = K === "" ? "." : K + ":";
    if (oe(S))
      for (var Je = 0; Je < S.length; Je++)
        (K = S[Je]), (Ae = Rt + Be(K, Je)), (he += pe(K, B, F, Ae, ae));
    else if (((Je = A(S)), typeof Je == "function"))
      for (S = Je.call(S), Je = 0; !(K = S.next()).done; )
        (K = K.value), (Ae = Rt + Be(K, Je++)), (he += pe(K, B, F, Ae, ae));
    else if (Ae === "object") {
      if (typeof S.then == "function") return pe(ge(S), B, F, K, ae);
      throw (
        ((B = String(S)),
        Error(
          "Objects are not valid as a React child (found: " +
            (B === "[object Object]"
              ? "object with keys {" + Object.keys(S).join(", ") + "}"
              : B) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return he;
  }
  function M(S, B, F) {
    if (S == null) return S;
    var K = [],
      ae = 0;
    return (
      pe(S, K, "", "", function (Ae) {
        return B.call(F, Ae, ae++);
      }),
      K
    );
  }
  function V(S) {
    if (S._status === -1) {
      var B = S._result;
      (B = B()),
        B.then(
          function (F) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 1), (S._result = F));
          },
          function (F) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 2), (S._result = F));
          }
        ),
        S._status === -1 && ((S._status = 0), (S._result = B));
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var P =
    typeof reportError == "function"
      ? reportError
      : function (S) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var B = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof S == "object" &&
                S !== null &&
                typeof S.message == "string"
                  ? String(S.message)
                  : String(S),
              error: S,
            });
            if (!window.dispatchEvent(B)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", S);
            return;
          }
          console.error(S);
        };
  function xe() {}
  return (
    (Ee.Children = {
      map: M,
      forEach: function (S, B, F) {
        M(
          S,
          function () {
            B.apply(this, arguments);
          },
          F
        );
      },
      count: function (S) {
        var B = 0;
        return (
          M(S, function () {
            B++;
          }),
          B
        );
      },
      toArray: function (S) {
        return (
          M(S, function (B) {
            return B;
          }) || []
        );
      },
      only: function (S) {
        if (!ve(S))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return S;
      },
    }),
    (Ee.Component = k),
    (Ee.Fragment = c),
    (Ee.Profiler = f),
    (Ee.PureComponent = ce),
    (Ee.StrictMode = o),
    (Ee.Suspense = y),
    (Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W),
    (Ee.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (S) {
        return W.H.useMemoCache(S);
      },
    }),
    (Ee.cache = function (S) {
      return function () {
        return S.apply(null, arguments);
      };
    }),
    (Ee.cloneElement = function (S, B, F) {
      if (S == null)
        throw Error(
          "The argument must be a React element, but you passed " + S + "."
        );
      var K = Q({}, S.props),
        ae = S.key,
        Ae = void 0;
      if (B != null)
        for (he in (B.ref !== void 0 && (Ae = void 0),
        B.key !== void 0 && (ae = "" + B.key),
        B))
          !O.call(B, he) ||
            he === "key" ||
            he === "__self" ||
            he === "__source" ||
            (he === "ref" && B.ref === void 0) ||
            (K[he] = B[he]);
      var he = arguments.length - 2;
      if (he === 1) K.children = F;
      else if (1 < he) {
        for (var Rt = Array(he), Je = 0; Je < he; Je++)
          Rt[Je] = arguments[Je + 2];
        K.children = Rt;
      }
      return be(S.type, ae, void 0, void 0, Ae, K);
    }),
    (Ee.createContext = function (S) {
      return (
        (S = {
          $$typeof: g,
          _currentValue: S,
          _currentValue2: S,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (S.Provider = S),
        (S.Consumer = { $$typeof: h, _context: S }),
        S
      );
    }),
    (Ee.createElement = function (S, B, F) {
      var K,
        ae = {},
        Ae = null;
      if (B != null)
        for (K in (B.key !== void 0 && (Ae = "" + B.key), B))
          O.call(B, K) &&
            K !== "key" &&
            K !== "__self" &&
            K !== "__source" &&
            (ae[K] = B[K]);
      var he = arguments.length - 2;
      if (he === 1) ae.children = F;
      else if (1 < he) {
        for (var Rt = Array(he), Je = 0; Je < he; Je++)
          Rt[Je] = arguments[Je + 2];
        ae.children = Rt;
      }
      if (S && S.defaultProps)
        for (K in ((he = S.defaultProps), he))
          ae[K] === void 0 && (ae[K] = he[K]);
      return be(S, Ae, void 0, void 0, null, ae);
    }),
    (Ee.createRef = function () {
      return { current: null };
    }),
    (Ee.forwardRef = function (S) {
      return { $$typeof: b, render: S };
    }),
    (Ee.isValidElement = ve),
    (Ee.lazy = function (S) {
      return { $$typeof: E, _payload: { _status: -1, _result: S }, _init: V };
    }),
    (Ee.memo = function (S, B) {
      return { $$typeof: v, type: S, compare: B === void 0 ? null : B };
    }),
    (Ee.startTransition = function (S) {
      var B = W.T,
        F = {};
      W.T = F;
      try {
        var K = S(),
          ae = W.S;
        ae !== null && ae(F, K),
          typeof K == "object" &&
            K !== null &&
            typeof K.then == "function" &&
            K.then(xe, P);
      } catch (Ae) {
        P(Ae);
      } finally {
        W.T = B;
      }
    }),
    (Ee.unstable_useCacheRefresh = function () {
      return W.H.useCacheRefresh();
    }),
    (Ee.use = function (S) {
      return W.H.use(S);
    }),
    (Ee.useActionState = function (S, B, F) {
      return W.H.useActionState(S, B, F);
    }),
    (Ee.useCallback = function (S, B) {
      return W.H.useCallback(S, B);
    }),
    (Ee.useContext = function (S) {
      return W.H.useContext(S);
    }),
    (Ee.useDebugValue = function () {}),
    (Ee.useDeferredValue = function (S, B) {
      return W.H.useDeferredValue(S, B);
    }),
    (Ee.useEffect = function (S, B, F) {
      var K = W.H;
      if (typeof F == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return K.useEffect(S, B);
    }),
    (Ee.useId = function () {
      return W.H.useId();
    }),
    (Ee.useImperativeHandle = function (S, B, F) {
      return W.H.useImperativeHandle(S, B, F);
    }),
    (Ee.useInsertionEffect = function (S, B) {
      return W.H.useInsertionEffect(S, B);
    }),
    (Ee.useLayoutEffect = function (S, B) {
      return W.H.useLayoutEffect(S, B);
    }),
    (Ee.useMemo = function (S, B) {
      return W.H.useMemo(S, B);
    }),
    (Ee.useOptimistic = function (S, B) {
      return W.H.useOptimistic(S, B);
    }),
    (Ee.useReducer = function (S, B, F) {
      return W.H.useReducer(S, B, F);
    }),
    (Ee.useRef = function (S) {
      return W.H.useRef(S);
    }),
    (Ee.useState = function (S) {
      return W.H.useState(S);
    }),
    (Ee.useSyncExternalStore = function (S, B, F) {
      return W.H.useSyncExternalStore(S, B, F);
    }),
    (Ee.useTransition = function () {
      return W.H.useTransition();
    }),
    (Ee.version = "19.1.1"),
    Ee
  );
}
var Bh;
function ko() {
  return Bh || ((Bh = 1), (wo.exports = Py())), wo.exports;
}
var R = ko();
const Za = $y(R);
var Co = { exports: {} },
  Cu = {},
  Uo = { exports: {} },
  Ho = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qh;
function Iy() {
  return (
    qh ||
      ((qh = 1),
      (function (u) {
        function r(M, V) {
          var P = M.length;
          M.push(V);
          e: for (; 0 < P; ) {
            var xe = (P - 1) >>> 1,
              S = M[xe];
            if (0 < f(S, V)) (M[xe] = V), (M[P] = S), (P = xe);
            else break e;
          }
        }
        function c(M) {
          return M.length === 0 ? null : M[0];
        }
        function o(M) {
          if (M.length === 0) return null;
          var V = M[0],
            P = M.pop();
          if (P !== V) {
            M[0] = P;
            e: for (var xe = 0, S = M.length, B = S >>> 1; xe < B; ) {
              var F = 2 * (xe + 1) - 1,
                K = M[F],
                ae = F + 1,
                Ae = M[ae];
              if (0 > f(K, P))
                ae < S && 0 > f(Ae, K)
                  ? ((M[xe] = Ae), (M[ae] = P), (xe = ae))
                  : ((M[xe] = K), (M[F] = P), (xe = F));
              else if (ae < S && 0 > f(Ae, P))
                (M[xe] = Ae), (M[ae] = P), (xe = ae);
              else break e;
            }
          }
          return V;
        }
        function f(M, V) {
          var P = M.sortIndex - V.sortIndex;
          return P !== 0 ? P : M.id - V.id;
        }
        if (
          ((u.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var h = performance;
          u.unstable_now = function () {
            return h.now();
          };
        } else {
          var g = Date,
            b = g.now();
          u.unstable_now = function () {
            return g.now() - b;
          };
        }
        var y = [],
          v = [],
          E = 1,
          C = null,
          A = 3,
          H = !1,
          Q = !1,
          J = !1,
          k = !1,
          X = typeof setTimeout == "function" ? setTimeout : null,
          ce = typeof clearTimeout == "function" ? clearTimeout : null,
          $ = typeof setImmediate < "u" ? setImmediate : null;
        function oe(M) {
          for (var V = c(v); V !== null; ) {
            if (V.callback === null) o(v);
            else if (V.startTime <= M)
              o(v), (V.sortIndex = V.expirationTime), r(y, V);
            else break;
            V = c(v);
          }
        }
        function W(M) {
          if (((J = !1), oe(M), !Q))
            if (c(y) !== null) (Q = !0), O || ((O = !0), Be());
            else {
              var V = c(v);
              V !== null && pe(W, V.startTime - M);
            }
        }
        var O = !1,
          be = -1,
          _e = 5,
          ve = -1;
        function de() {
          return k ? !0 : !(u.unstable_now() - ve < _e);
        }
        function We() {
          if (((k = !1), O)) {
            var M = u.unstable_now();
            ve = M;
            var V = !0;
            try {
              e: {
                (Q = !1), J && ((J = !1), ce(be), (be = -1)), (H = !0);
                var P = A;
                try {
                  t: {
                    for (
                      oe(M), C = c(y);
                      C !== null && !(C.expirationTime > M && de());

                    ) {
                      var xe = C.callback;
                      if (typeof xe == "function") {
                        (C.callback = null), (A = C.priorityLevel);
                        var S = xe(C.expirationTime <= M);
                        if (((M = u.unstable_now()), typeof S == "function")) {
                          (C.callback = S), oe(M), (V = !0);
                          break t;
                        }
                        C === c(y) && o(y), oe(M);
                      } else o(y);
                      C = c(y);
                    }
                    if (C !== null) V = !0;
                    else {
                      var B = c(v);
                      B !== null && pe(W, B.startTime - M), (V = !1);
                    }
                  }
                  break e;
                } finally {
                  (C = null), (A = P), (H = !1);
                }
                V = void 0;
              }
            } finally {
              V ? Be() : (O = !1);
            }
          }
        }
        var Be;
        if (typeof $ == "function")
          Be = function () {
            $(We);
          };
        else if (typeof MessageChannel < "u") {
          var Oe = new MessageChannel(),
            ge = Oe.port2;
          (Oe.port1.onmessage = We),
            (Be = function () {
              ge.postMessage(null);
            });
        } else
          Be = function () {
            X(We, 0);
          };
        function pe(M, V) {
          be = X(function () {
            M(u.unstable_now());
          }, V);
        }
        (u.unstable_IdlePriority = 5),
          (u.unstable_ImmediatePriority = 1),
          (u.unstable_LowPriority = 4),
          (u.unstable_NormalPriority = 3),
          (u.unstable_Profiling = null),
          (u.unstable_UserBlockingPriority = 2),
          (u.unstable_cancelCallback = function (M) {
            M.callback = null;
          }),
          (u.unstable_forceFrameRate = function (M) {
            0 > M || 125 < M
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (_e = 0 < M ? Math.floor(1e3 / M) : 5);
          }),
          (u.unstable_getCurrentPriorityLevel = function () {
            return A;
          }),
          (u.unstable_next = function (M) {
            switch (A) {
              case 1:
              case 2:
              case 3:
                var V = 3;
                break;
              default:
                V = A;
            }
            var P = A;
            A = V;
            try {
              return M();
            } finally {
              A = P;
            }
          }),
          (u.unstable_requestPaint = function () {
            k = !0;
          }),
          (u.unstable_runWithPriority = function (M, V) {
            switch (M) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                M = 3;
            }
            var P = A;
            A = M;
            try {
              return V();
            } finally {
              A = P;
            }
          }),
          (u.unstable_scheduleCallback = function (M, V, P) {
            var xe = u.unstable_now();
            switch (
              (typeof P == "object" && P !== null
                ? ((P = P.delay),
                  (P = typeof P == "number" && 0 < P ? xe + P : xe))
                : (P = xe),
              M)
            ) {
              case 1:
                var S = -1;
                break;
              case 2:
                S = 250;
                break;
              case 5:
                S = 1073741823;
                break;
              case 4:
                S = 1e4;
                break;
              default:
                S = 5e3;
            }
            return (
              (S = P + S),
              (M = {
                id: E++,
                callback: V,
                priorityLevel: M,
                startTime: P,
                expirationTime: S,
                sortIndex: -1,
              }),
              P > xe
                ? ((M.sortIndex = P),
                  r(v, M),
                  c(y) === null &&
                    M === c(v) &&
                    (J ? (ce(be), (be = -1)) : (J = !0), pe(W, P - xe)))
                : ((M.sortIndex = S),
                  r(y, M),
                  Q || H || ((Q = !0), O || ((O = !0), Be()))),
              M
            );
          }),
          (u.unstable_shouldYield = de),
          (u.unstable_wrapCallback = function (M) {
            var V = A;
            return function () {
              var P = A;
              A = V;
              try {
                return M.apply(this, arguments);
              } finally {
                A = P;
              }
            };
          });
      })(Ho)),
    Ho
  );
}
var Yh;
function e0() {
  return Yh || ((Yh = 1), (Uo.exports = Iy())), Uo.exports;
}
var Lo = { exports: {} },
  _t = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gh;
function t0() {
  if (Gh) return _t;
  Gh = 1;
  var u = ko();
  function r(y) {
    var v = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var E = 2; E < arguments.length; E++)
        v += "&args[]=" + encodeURIComponent(arguments[E]);
    }
    return (
      "Minified React error #" +
      y +
      "; visit " +
      v +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c() {}
  var o = {
      d: {
        f: c,
        r: function () {
          throw Error(r(522));
        },
        D: c,
        C: c,
        L: c,
        m: c,
        X: c,
        S: c,
        M: c,
      },
      p: 0,
      findDOMNode: null,
    },
    f = Symbol.for("react.portal");
  function h(y, v, E) {
    var C =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: C == null ? null : "" + C,
      children: y,
      containerInfo: v,
      implementation: E,
    };
  }
  var g = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function b(y, v) {
    if (y === "font") return "";
    if (typeof v == "string") return v === "use-credentials" ? v : "";
  }
  return (
    (_t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (_t.createPortal = function (y, v) {
      var E =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!v || (v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11))
        throw Error(r(299));
      return h(y, v, null, E);
    }),
    (_t.flushSync = function (y) {
      var v = g.T,
        E = o.p;
      try {
        if (((g.T = null), (o.p = 2), y)) return y();
      } finally {
        (g.T = v), (o.p = E), o.d.f();
      }
    }),
    (_t.preconnect = function (y, v) {
      typeof y == "string" &&
        (v
          ? ((v = v.crossOrigin),
            (v =
              typeof v == "string"
                ? v === "use-credentials"
                  ? v
                  : ""
                : void 0))
          : (v = null),
        o.d.C(y, v));
    }),
    (_t.prefetchDNS = function (y) {
      typeof y == "string" && o.d.D(y);
    }),
    (_t.preinit = function (y, v) {
      if (typeof y == "string" && v && typeof v.as == "string") {
        var E = v.as,
          C = b(E, v.crossOrigin),
          A = typeof v.integrity == "string" ? v.integrity : void 0,
          H = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
        E === "style"
          ? o.d.S(y, typeof v.precedence == "string" ? v.precedence : void 0, {
              crossOrigin: C,
              integrity: A,
              fetchPriority: H,
            })
          : E === "script" &&
            o.d.X(y, {
              crossOrigin: C,
              integrity: A,
              fetchPriority: H,
              nonce: typeof v.nonce == "string" ? v.nonce : void 0,
            });
      }
    }),
    (_t.preinitModule = function (y, v) {
      if (typeof y == "string")
        if (typeof v == "object" && v !== null) {
          if (v.as == null || v.as === "script") {
            var E = b(v.as, v.crossOrigin);
            o.d.M(y, {
              crossOrigin: E,
              integrity: typeof v.integrity == "string" ? v.integrity : void 0,
              nonce: typeof v.nonce == "string" ? v.nonce : void 0,
            });
          }
        } else v == null && o.d.M(y);
    }),
    (_t.preload = function (y, v) {
      if (
        typeof y == "string" &&
        typeof v == "object" &&
        v !== null &&
        typeof v.as == "string"
      ) {
        var E = v.as,
          C = b(E, v.crossOrigin);
        o.d.L(y, E, {
          crossOrigin: C,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0,
          nonce: typeof v.nonce == "string" ? v.nonce : void 0,
          type: typeof v.type == "string" ? v.type : void 0,
          fetchPriority:
            typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
          referrerPolicy:
            typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
          imageSrcSet:
            typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
          imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
          media: typeof v.media == "string" ? v.media : void 0,
        });
      }
    }),
    (_t.preloadModule = function (y, v) {
      if (typeof y == "string")
        if (v) {
          var E = b(v.as, v.crossOrigin);
          o.d.m(y, {
            as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
            crossOrigin: E,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
          });
        } else o.d.m(y);
    }),
    (_t.requestFormReset = function (y) {
      o.d.r(y);
    }),
    (_t.unstable_batchedUpdates = function (y, v) {
      return y(v);
    }),
    (_t.useFormState = function (y, v, E) {
      return g.H.useFormState(y, v, E);
    }),
    (_t.useFormStatus = function () {
      return g.H.useHostTransitionStatus();
    }),
    (_t.version = "19.1.1"),
    _t
  );
}
var Xh;
function vm() {
  if (Xh) return Lo.exports;
  Xh = 1;
  function u() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), (Lo.exports = t0()), Lo.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vh;
function l0() {
  if (Vh) return Cu;
  Vh = 1;
  var u = e0(),
    r = ko(),
    c = vm();
  function o(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function f(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function h(e) {
    var t = e,
      l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function g(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function b(e) {
    if (h(e) !== e) throw Error(o(188));
  }
  function y(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = h(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var n = l.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === i.child) {
        for (i = n.child; i; ) {
          if (i === l) return b(n), e;
          if (i === a) return b(n), t;
          i = i.sibling;
        }
        throw Error(o(188));
      }
      if (l.return !== a.return) (l = n), (a = i);
      else {
        for (var s = !1, d = n.child; d; ) {
          if (d === l) {
            (s = !0), (l = n), (a = i);
            break;
          }
          if (d === a) {
            (s = !0), (a = n), (l = i);
            break;
          }
          d = d.sibling;
        }
        if (!s) {
          for (d = i.child; d; ) {
            if (d === l) {
              (s = !0), (l = i), (a = n);
              break;
            }
            if (d === a) {
              (s = !0), (a = i), (l = n);
              break;
            }
            d = d.sibling;
          }
          if (!s) throw Error(o(189));
        }
      }
      if (l.alternate !== a) throw Error(o(190));
    }
    if (l.tag !== 3) throw Error(o(188));
    return l.stateNode.current === l ? e : t;
  }
  function v(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = v(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var E = Object.assign,
    C = Symbol.for("react.element"),
    A = Symbol.for("react.transitional.element"),
    H = Symbol.for("react.portal"),
    Q = Symbol.for("react.fragment"),
    J = Symbol.for("react.strict_mode"),
    k = Symbol.for("react.profiler"),
    X = Symbol.for("react.provider"),
    ce = Symbol.for("react.consumer"),
    $ = Symbol.for("react.context"),
    oe = Symbol.for("react.forward_ref"),
    W = Symbol.for("react.suspense"),
    O = Symbol.for("react.suspense_list"),
    be = Symbol.for("react.memo"),
    _e = Symbol.for("react.lazy"),
    ve = Symbol.for("react.activity"),
    de = Symbol.for("react.memo_cache_sentinel"),
    We = Symbol.iterator;
  function Be(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (We && e[We]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Oe = Symbol.for("react.client.reference");
  function ge(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Oe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Q:
        return "Fragment";
      case k:
        return "Profiler";
      case J:
        return "StrictMode";
      case W:
        return "Suspense";
      case O:
        return "SuspenseList";
      case ve:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case H:
          return "Portal";
        case $:
          return (e.displayName || "Context") + ".Provider";
        case ce:
          return (e._context.displayName || "Context") + ".Consumer";
        case oe:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case be:
          return (
            (t = e.displayName || null), t !== null ? t : ge(e.type) || "Memo"
          );
        case _e:
          (t = e._payload), (e = e._init);
          try {
            return ge(e(t));
          } catch {}
      }
    return null;
  }
  var pe = Array.isArray,
    M = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    V = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    P = { pending: !1, data: null, method: null, action: null },
    xe = [],
    S = -1;
  function B(e) {
    return { current: e };
  }
  function F(e) {
    0 > S || ((e.current = xe[S]), (xe[S] = null), S--);
  }
  function K(e, t) {
    S++, (xe[S] = e.current), (e.current = t);
  }
  var ae = B(null),
    Ae = B(null),
    he = B(null),
    Rt = B(null);
  function Je(e, t) {
    switch ((K(he, t), K(Ae, e), K(ae, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? oh(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          (t = oh(t)), (e = sh(t, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    F(ae), K(ae, e);
  }
  function ml() {
    F(ae), F(Ae), F(he);
  }
  function ct(e) {
    e.memoizedState !== null && K(Rt, e);
    var t = ae.current,
      l = sh(t, e.type);
    t !== l && (K(Ae, e), K(ae, l));
  }
  function il(e) {
    Ae.current === e && (F(ae), F(Ae)),
      Rt.current === e && (F(Rt), (ju._currentValue = P));
  }
  var ka = Object.prototype.hasOwnProperty,
    Ln = u.unstable_scheduleCallback,
    rl = u.unstable_cancelCallback,
    Rr = u.unstable_shouldYield,
    Tr = u.unstable_requestPaint,
    wt = u.unstable_now,
    Dr = u.unstable_getCurrentPriorityLevel,
    Zu = u.unstable_ImmediatePriority,
    Ku = u.unstable_UserBlockingPriority,
    $a = u.unstable_NormalPriority,
    Tl = u.unstable_LowPriority,
    Zl = u.unstable_IdlePriority,
    Ju = u.log,
    Bn = u.unstable_setDisableYieldValue,
    Mt = null,
    Pe = null;
  function cl(e) {
    if (
      (typeof Ju == "function" && Bn(e),
      Pe && typeof Pe.setStrictMode == "function")
    )
      try {
        Pe.setStrictMode(Mt, e);
      } catch {}
  }
  var pt = Math.clz32 ? Math.clz32 : ku,
    Mr = Math.log,
    vl = Math.LN2;
  function ku(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Mr(e) / vl) | 0)) | 0;
  }
  var xa = 256,
    Ea = 4194304;
  function Dl(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
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
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
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
        return e;
    }
  }
  function _a(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      i = e.suspendedLanes,
      s = e.pingedLanes;
    e = e.warmLanes;
    var d = a & 134217727;
    return (
      d !== 0
        ? ((a = d & ~i),
          a !== 0
            ? (n = Dl(a))
            : ((s &= d),
              s !== 0
                ? (n = Dl(s))
                : l || ((l = d & ~e), l !== 0 && (n = Dl(l)))))
        : ((d = a & ~i),
          d !== 0
            ? (n = Dl(d))
            : s !== 0
            ? (n = Dl(s))
            : l || ((l = a & ~e), l !== 0 && (n = Dl(l)))),
      n === 0
        ? 0
        : t !== 0 &&
          t !== n &&
          (t & i) === 0 &&
          ((i = n & -n),
          (l = t & -t),
          i >= l || (i === 32 && (l & 4194048) !== 0))
        ? t
        : n
    );
  }
  function yl(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function $u(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
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
        return t + 5e3;
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
  function Fa() {
    var e = xa;
    return (xa <<= 1), (xa & 4194048) === 0 && (xa = 256), e;
  }
  function Fu() {
    var e = Ea;
    return (Ea <<= 1), (Ea & 62914560) === 0 && (Ea = 4194304), e;
  }
  function Wa(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Ra(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Wu(e, t, l, a, n, i) {
    var s = e.pendingLanes;
    (e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0);
    var d = e.entanglements,
      p = e.expirationTimes,
      N = e.hiddenUpdates;
    for (l = s & ~l; 0 < l; ) {
      var L = 31 - pt(l),
        Y = 1 << L;
      (d[L] = 0), (p[L] = -1);
      var z = N[L];
      if (z !== null)
        for (N[L] = null, L = 0; L < z.length; L++) {
          var w = z[L];
          w !== null && (w.lane &= -536870913);
        }
      l &= ~Y;
    }
    a !== 0 && Ta(e, a, 0),
      i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(s & ~t));
  }
  function Ta(e, t, l) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var a = 31 - pt(t);
    (e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 4194090));
  }
  function Da(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var a = 31 - pt(l),
        n = 1 << a;
      (n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n);
    }
  }
  function qn(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Yn(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function x() {
    var e = V.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Ah(e.type));
  }
  function D(e, t) {
    var l = V.p;
    try {
      return (V.p = e), t();
    } finally {
      V.p = l;
    }
  }
  var U = Math.random().toString(36).slice(2),
    G = "__reactFiber$" + U,
    Z = "__reactProps$" + U,
    ee = "__reactContainer$" + U,
    ne = "__reactEvents$" + U,
    te = "__reactListeners$" + U,
    re = "__reactHandles$" + U,
    se = "__reactResources$" + U,
    le = "__reactMarker$" + U;
  function ue(e) {
    delete e[G], delete e[Z], delete e[ne], delete e[te], delete e[re];
  }
  function Re(e) {
    var t = e[G];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[ee] || l[G])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (e = mh(e); e !== null; ) {
            if ((l = e[G])) return l;
            e = mh(e);
          }
        return t;
      }
      (e = l), (l = e.parentNode);
    }
    return null;
  }
  function qe(e) {
    if ((e = e[G] || e[ee])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function tt(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function lt(e) {
    var t = e[se];
    return (
      t ||
        (t = e[se] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Se(e) {
    e[le] = !0;
  }
  var Xe = new Set(),
    gl = {};
  function Ct(e, t) {
    Tt(e, t), Tt(e + "Capture", t);
  }
  function Tt(e, t) {
    for (gl[e] = t, e = 0; e < t.length; e++) Xe.add(t[e]);
  }
  var Zt = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Pa = {},
    Kl = {};
  function Ml(e) {
    return ka.call(Kl, e)
      ? !0
      : ka.call(Pa, e)
      ? !1
      : Zt.test(e)
      ? (Kl[e] = !0)
      : ((Pa[e] = !0), !1);
  }
  function jl(e, t, l) {
    if (Ml(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function Al(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function Te(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + a);
    }
  }
  var ot, Ma;
  function Kt(e) {
    if (ot === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        (ot = (t && t[1]) || ""),
          (Ma =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      ot +
      e +
      Ma
    );
  }
  var Ie = !1;
  function Jl(e, t) {
    if (!e || Ie) return "";
    Ie = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var Y = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(Y.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(Y, []);
                } catch (w) {
                  var z = w;
                }
                Reflect.construct(e, [], Y);
              } else {
                try {
                  Y.call();
                } catch (w) {
                  z = w;
                }
                e.call(Y.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (w) {
                z = w;
              }
              (Y = e()) &&
                typeof Y.catch == "function" &&
                Y.catch(function () {});
            }
          } catch (w) {
            if (w && z && typeof w.stack == "string") return [w.stack, z.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var i = a.DetermineComponentFrameRoot(),
        s = i[0],
        d = i[1];
      if (s && d) {
        var p = s.split(`
`),
          N = d.split(`
`);
        for (
          n = a = 0;
          a < p.length && !p[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; n < N.length && !N[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === p.length || n === N.length)
          for (
            a = p.length - 1, n = N.length - 1;
            1 <= a && 0 <= n && p[a] !== N[n];

          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (p[a] !== N[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || p[a] !== N[n])) {
                  var L =
                    `
` + p[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      L.includes("<anonymous>") &&
                      (L = L.replace("<anonymous>", e.displayName)),
                    L
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      (Ie = !1), (Error.prepareStackTrace = l);
    }
    return (l = e ? e.displayName || e.name : "") ? Kt(l) : "";
  }
  function Pu(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Kt(e.type);
      case 16:
        return Kt("Lazy");
      case 13:
        return Kt("Suspense");
      case 19:
        return Kt("SuspenseList");
      case 0:
      case 15:
        return Jl(e.type, !1);
      case 11:
        return Jl(e.type.render, !1);
      case 1:
        return Jl(e.type, !0);
      case 31:
        return Kt("Activity");
      default:
        return "";
    }
  }
  function Iu(e) {
    try {
      var t = "";
      do (t += Pu(e)), (e = e.return);
      while (e);
      return t;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function Jt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function as(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Qm(e) {
    var t = as(e) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      a = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var n = l.get,
        i = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (s) {
            (a = "" + s), i.call(this, s);
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (s) {
            a = "" + s;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function ei(e) {
    e._valueTracker || (e._valueTracker = Qm(e));
  }
  function ns(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = "";
    return (
      e && (a = as(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function ti(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Zm = /[\n"\\]/g;
  function kt(e) {
    return e.replace(Zm, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function jr(e, t, l, a, n, i, s, d) {
    (e.name = ""),
      s != null &&
      typeof s != "function" &&
      typeof s != "symbol" &&
      typeof s != "boolean"
        ? (e.type = s)
        : e.removeAttribute("type"),
      t != null
        ? s === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + Jt(t))
          : e.value !== "" + Jt(t) && (e.value = "" + Jt(t))
        : (s !== "submit" && s !== "reset") || e.removeAttribute("value"),
      t != null
        ? Ar(e, s, Jt(t))
        : l != null
        ? Ar(e, s, Jt(l))
        : a != null && e.removeAttribute("value"),
      n == null && i != null && (e.defaultChecked = !!i),
      n != null &&
        (e.checked = n && typeof n != "function" && typeof n != "symbol"),
      d != null &&
      typeof d != "function" &&
      typeof d != "symbol" &&
      typeof d != "boolean"
        ? (e.name = "" + Jt(d))
        : e.removeAttribute("name");
  }
  function us(e, t, l, a, n, i, s, d) {
    if (
      (i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (e.type = i),
      t != null || l != null)
    ) {
      if (!((i !== "submit" && i !== "reset") || t != null)) return;
      (l = l != null ? "" + Jt(l) : ""),
        (t = t != null ? "" + Jt(t) : l),
        d || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (e.checked = d ? e.checked : !!a),
      (e.defaultChecked = !!a),
      s != null &&
        typeof s != "function" &&
        typeof s != "symbol" &&
        typeof s != "boolean" &&
        (e.name = s);
  }
  function Ar(e, t, l) {
    (t === "number" && ti(e.ownerDocument) === e) ||
      e.defaultValue === "" + l ||
      (e.defaultValue = "" + l);
  }
  function Ia(e, t, l, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var n = 0; n < l.length; n++) t["$" + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        (n = t.hasOwnProperty("$" + e[l].value)),
          e[l].selected !== n && (e[l].selected = n),
          n && a && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + Jt(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          (e[n].selected = !0), a && (e[n].defaultSelected = !0);
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function is(e, t, l) {
    if (
      t != null &&
      ((t = "" + Jt(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + Jt(l) : "";
  }
  function rs(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(o(92));
        if (pe(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), (t = l);
    }
    (l = Jt(t)),
      (e.defaultValue = l),
      (a = e.textContent),
      a === l && a !== "" && a !== null && (e.value = a);
  }
  function en(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Km = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function cs(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? e.setProperty(t, "")
        : t === "float"
        ? (e.cssFloat = "")
        : (e[t] = "")
      : a
      ? e.setProperty(t, l)
      : typeof l != "number" || l === 0 || Km.has(t)
      ? t === "float"
        ? (e.cssFloat = l)
        : (e[t] = ("" + l).trim())
      : (e[t] = l + "px");
  }
  function os(e, t, l) {
    if (t != null && typeof t != "object") throw Error(o(62));
    if (((e = e.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? e.setProperty(a, "")
            : a === "float"
            ? (e.cssFloat = "")
            : (e[a] = ""));
      for (var n in t)
        (a = t[n]), t.hasOwnProperty(n) && l[n] !== a && cs(e, n, a);
    } else for (var i in t) t.hasOwnProperty(i) && cs(e, i, t[i]);
  }
  function Nr(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
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
  var Jm = new Map([
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
    km =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function li(e) {
    return km.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var zr = null;
  function Or(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var tn = null,
    ln = null;
  function ss(e) {
    var t = qe(e);
    if (t && (e = t.stateNode)) {
      var l = e[Z] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (jr(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (t = l.name),
            l.type === "radio" && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + kt("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[Z] || null;
                if (!n) throw Error(o(90));
                jr(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (t = 0; t < l.length; t++)
              (a = l[t]), a.form === e.form && ns(a);
          }
          break e;
        case "textarea":
          is(e, l.value, l.defaultValue);
          break e;
        case "select":
          (t = l.value), t != null && Ia(e, !!l.multiple, t, !1);
      }
    }
  }
  var wr = !1;
  function fs(e, t, l) {
    if (wr) return e(t, l);
    wr = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((wr = !1),
        (tn !== null || ln !== null) &&
          (Gi(), tn && ((t = tn), (e = ln), (ln = tn = null), ss(t), e)))
      )
        for (t = 0; t < e.length; t++) ss(e[t]);
    }
  }
  function Gn(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[Z] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
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
        (a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !a);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(o(231, t, typeof l));
    return l;
  }
  var Nl = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Cr = !1;
  if (Nl)
    try {
      var Xn = {};
      Object.defineProperty(Xn, "passive", {
        get: function () {
          Cr = !0;
        },
      }),
        window.addEventListener("test", Xn, Xn),
        window.removeEventListener("test", Xn, Xn);
    } catch {
      Cr = !1;
    }
  var kl = null,
    Ur = null,
    ai = null;
  function ds() {
    if (ai) return ai;
    var e,
      t = Ur,
      l = t.length,
      a,
      n = "value" in kl ? kl.value : kl.textContent,
      i = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++);
    var s = l - e;
    for (a = 1; a <= s && t[l - a] === n[i - a]; a++);
    return (ai = n.slice(e, 1 < a ? 1 - a : void 0));
  }
  function ni(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ui() {
    return !0;
  }
  function hs() {
    return !1;
  }
  function jt(e) {
    function t(l, a, n, i, s) {
      (this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = i),
        (this.target = s),
        (this.currentTarget = null);
      for (var d in e)
        e.hasOwnProperty(d) && ((l = e[d]), (this[d] = l ? l(i) : i[d]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? ui
          : hs),
        (this.isPropagationStopped = hs),
        this
      );
    }
    return (
      E(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = ui));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = ui));
        },
        persist: function () {},
        isPersistent: ui,
      }),
      t
    );
  }
  var ja = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ii = jt(ja),
    Vn = E({}, ja, { view: 0, detail: 0 }),
    $m = jt(Vn),
    Hr,
    Lr,
    Qn,
    ri = E({}, Vn, {
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
      getModifierState: qr,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Qn &&
              (Qn && e.type === "mousemove"
                ? ((Hr = e.screenX - Qn.screenX), (Lr = e.screenY - Qn.screenY))
                : (Lr = Hr = 0),
              (Qn = e)),
            Hr);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Lr;
      },
    }),
    ms = jt(ri),
    Fm = E({}, ri, { dataTransfer: 0 }),
    Wm = jt(Fm),
    Pm = E({}, Vn, { relatedTarget: 0 }),
    Br = jt(Pm),
    Im = E({}, ja, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ev = jt(Im),
    tv = E({}, ja, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    lv = jt(tv),
    av = E({}, ja, { data: 0 }),
    vs = jt(av),
    nv = {
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
    uv = {
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
    iv = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function rv(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = iv[e])
      ? !!t[e]
      : !1;
  }
  function qr() {
    return rv;
  }
  var cv = E({}, Vn, {
      key: function (e) {
        if (e.key) {
          var t = nv[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = ni(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? uv[e.keyCode] || "Unidentified"
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
      getModifierState: qr,
      charCode: function (e) {
        return e.type === "keypress" ? ni(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? ni(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    ov = jt(cv),
    sv = E({}, ri, {
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
    ys = jt(sv),
    fv = E({}, Vn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: qr,
    }),
    dv = jt(fv),
    hv = E({}, ja, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    mv = jt(hv),
    vv = E({}, ri, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    yv = jt(vv),
    gv = E({}, ja, { newState: 0, oldState: 0 }),
    pv = jt(gv),
    bv = [9, 13, 27, 32],
    Yr = Nl && "CompositionEvent" in window,
    Zn = null;
  Nl && "documentMode" in document && (Zn = document.documentMode);
  var Sv = Nl && "TextEvent" in window && !Zn,
    gs = Nl && (!Yr || (Zn && 8 < Zn && 11 >= Zn)),
    ps = " ",
    bs = !1;
  function Ss(e, t) {
    switch (e) {
      case "keyup":
        return bv.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function xs(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var an = !1;
  function xv(e, t) {
    switch (e) {
      case "compositionend":
        return xs(t);
      case "keypress":
        return t.which !== 32 ? null : ((bs = !0), ps);
      case "textInput":
        return (e = t.data), e === ps && bs ? null : e;
      default:
        return null;
    }
  }
  function Ev(e, t) {
    if (an)
      return e === "compositionend" || (!Yr && Ss(e, t))
        ? ((e = ds()), (ai = Ur = kl = null), (an = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return gs && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var _v = {
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
  function Es(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!_v[e.type] : t === "textarea";
  }
  function _s(e, t, l, a) {
    tn ? (ln ? ln.push(a) : (ln = [a])) : (tn = a),
      (t = Ji(t, "onChange")),
      0 < t.length &&
        ((l = new ii("onChange", "change", null, l, a)),
        e.push({ event: l, listeners: t }));
  }
  var Kn = null,
    Jn = null;
  function Rv(e) {
    nh(e, 0);
  }
  function ci(e) {
    var t = tt(e);
    if (ns(t)) return e;
  }
  function Rs(e, t) {
    if (e === "change") return t;
  }
  var Ts = !1;
  if (Nl) {
    var Gr;
    if (Nl) {
      var Xr = "oninput" in document;
      if (!Xr) {
        var Ds = document.createElement("div");
        Ds.setAttribute("oninput", "return;"),
          (Xr = typeof Ds.oninput == "function");
      }
      Gr = Xr;
    } else Gr = !1;
    Ts = Gr && (!document.documentMode || 9 < document.documentMode);
  }
  function Ms() {
    Kn && (Kn.detachEvent("onpropertychange", js), (Jn = Kn = null));
  }
  function js(e) {
    if (e.propertyName === "value" && ci(Jn)) {
      var t = [];
      _s(t, Jn, e, Or(e)), fs(Rv, t);
    }
  }
  function Tv(e, t, l) {
    e === "focusin"
      ? (Ms(), (Kn = t), (Jn = l), Kn.attachEvent("onpropertychange", js))
      : e === "focusout" && Ms();
  }
  function Dv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ci(Jn);
  }
  function Mv(e, t) {
    if (e === "click") return ci(t);
  }
  function jv(e, t) {
    if (e === "input" || e === "change") return ci(t);
  }
  function Av(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Ut = typeof Object.is == "function" ? Object.is : Av;
  function kn(e, t) {
    if (Ut(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var l = Object.keys(e),
      a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!ka.call(t, n) || !Ut(e[n], t[n])) return !1;
    }
    return !0;
  }
  function As(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ns(e, t) {
    var l = As(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = e + l.textContent.length), e <= t && a >= t))
          return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = As(l);
    }
  }
  function zs(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? zs(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Os(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = ti(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = ti(e.document);
    }
    return t;
  }
  function Vr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var Nv = Nl && "documentMode" in document && 11 >= document.documentMode,
    nn = null,
    Qr = null,
    $n = null,
    Zr = !1;
  function ws(e, t, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Zr ||
      nn == null ||
      nn !== ti(a) ||
      ((a = nn),
      "selectionStart" in a && Vr(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      ($n && kn($n, a)) ||
        (($n = a),
        (a = Ji(Qr, "onSelect")),
        0 < a.length &&
          ((t = new ii("onSelect", "select", null, t, l)),
          e.push({ event: t, listeners: a }),
          (t.target = nn))));
  }
  function Aa(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l["Webkit" + e] = "webkit" + t),
      (l["Moz" + e] = "moz" + t),
      l
    );
  }
  var un = {
      animationend: Aa("Animation", "AnimationEnd"),
      animationiteration: Aa("Animation", "AnimationIteration"),
      animationstart: Aa("Animation", "AnimationStart"),
      transitionrun: Aa("Transition", "TransitionRun"),
      transitionstart: Aa("Transition", "TransitionStart"),
      transitioncancel: Aa("Transition", "TransitionCancel"),
      transitionend: Aa("Transition", "TransitionEnd"),
    },
    Kr = {},
    Cs = {};
  Nl &&
    ((Cs = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete un.animationend.animation,
      delete un.animationiteration.animation,
      delete un.animationstart.animation),
    "TransitionEvent" in window || delete un.transitionend.transition);
  function Na(e) {
    if (Kr[e]) return Kr[e];
    if (!un[e]) return e;
    var t = un[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in Cs) return (Kr[e] = t[l]);
    return e;
  }
  var Us = Na("animationend"),
    Hs = Na("animationiteration"),
    Ls = Na("animationstart"),
    zv = Na("transitionrun"),
    Ov = Na("transitionstart"),
    wv = Na("transitioncancel"),
    Bs = Na("transitionend"),
    qs = new Map(),
    Jr =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Jr.push("scrollEnd");
  function ol(e, t) {
    qs.set(e, t), Ct(t, [e]);
  }
  var Ys = new WeakMap();
  function $t(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = Ys.get(e);
      return l !== void 0
        ? l
        : ((t = { value: e, source: t, stack: Iu(t) }), Ys.set(e, t), t);
    }
    return { value: e, source: t, stack: Iu(t) };
  }
  var Ft = [],
    rn = 0,
    kr = 0;
  function oi() {
    for (var e = rn, t = (kr = rn = 0); t < e; ) {
      var l = Ft[t];
      Ft[t++] = null;
      var a = Ft[t];
      Ft[t++] = null;
      var n = Ft[t];
      Ft[t++] = null;
      var i = Ft[t];
      if (((Ft[t++] = null), a !== null && n !== null)) {
        var s = a.pending;
        s === null ? (n.next = n) : ((n.next = s.next), (s.next = n)),
          (a.pending = n);
      }
      i !== 0 && Gs(l, n, i);
    }
  }
  function si(e, t, l, a) {
    (Ft[rn++] = e),
      (Ft[rn++] = t),
      (Ft[rn++] = l),
      (Ft[rn++] = a),
      (kr |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a);
  }
  function $r(e, t, l, a) {
    return si(e, t, l, a), fi(e);
  }
  function cn(e, t) {
    return si(e, null, null, t), fi(e);
  }
  function Gs(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, i = e.return; i !== null; )
      (i.childLanes |= l),
        (a = i.alternate),
        a !== null && (a.childLanes |= l),
        i.tag === 22 &&
          ((e = i.stateNode), e === null || e._visibility & 1 || (n = !0)),
        (e = i),
        (i = i.return);
    return e.tag === 3
      ? ((i = e.stateNode),
        n &&
          t !== null &&
          ((n = 31 - pt(l)),
          (e = i.hiddenUpdates),
          (a = e[n]),
          a === null ? (e[n] = [t]) : a.push(t),
          (t.lane = l | 536870912)),
        i)
      : null;
  }
  function fi(e) {
    if (50 < Su) throw ((Su = 0), (to = null), Error(o(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var on = {};
  function Cv(e, t, l, a) {
    (this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Ht(e, t, l, a) {
    return new Cv(e, t, l, a);
  }
  function Fr(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function zl(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = Ht(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function Xs(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function di(e, t, l, a, n, i) {
    var s = 0;
    if (((a = e), typeof e == "function")) Fr(e) && (s = 1);
    else if (typeof e == "string")
      s = Hy(e, l, ae.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case ve:
          return (e = Ht(31, l, t, n)), (e.elementType = ve), (e.lanes = i), e;
        case Q:
          return za(l.children, n, i, t);
        case J:
          (s = 8), (n |= 24);
          break;
        case k:
          return (
            (e = Ht(12, l, t, n | 2)), (e.elementType = k), (e.lanes = i), e
          );
        case W:
          return (e = Ht(13, l, t, n)), (e.elementType = W), (e.lanes = i), e;
        case O:
          return (e = Ht(19, l, t, n)), (e.elementType = O), (e.lanes = i), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case X:
              case $:
                s = 10;
                break e;
              case ce:
                s = 9;
                break e;
              case oe:
                s = 11;
                break e;
              case be:
                s = 14;
                break e;
              case _e:
                (s = 16), (a = null);
                break e;
            }
          (s = 29),
            (l = Error(o(130, e === null ? "null" : typeof e, ""))),
            (a = null);
      }
    return (
      (t = Ht(s, l, t, n)), (t.elementType = e), (t.type = a), (t.lanes = i), t
    );
  }
  function za(e, t, l, a) {
    return (e = Ht(7, e, a, t)), (e.lanes = l), e;
  }
  function Wr(e, t, l) {
    return (e = Ht(6, e, null, t)), (e.lanes = l), e;
  }
  function Pr(e, t, l) {
    return (
      (t = Ht(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var sn = [],
    fn = 0,
    hi = null,
    mi = 0,
    Wt = [],
    Pt = 0,
    Oa = null,
    Ol = 1,
    wl = "";
  function wa(e, t) {
    (sn[fn++] = mi), (sn[fn++] = hi), (hi = e), (mi = t);
  }
  function Vs(e, t, l) {
    (Wt[Pt++] = Ol), (Wt[Pt++] = wl), (Wt[Pt++] = Oa), (Oa = e);
    var a = Ol;
    e = wl;
    var n = 32 - pt(a) - 1;
    (a &= ~(1 << n)), (l += 1);
    var i = 32 - pt(t) + n;
    if (30 < i) {
      var s = n - (n % 5);
      (i = (a & ((1 << s) - 1)).toString(32)),
        (a >>= s),
        (n -= s),
        (Ol = (1 << (32 - pt(t) + n)) | (l << n) | a),
        (wl = i + e);
    } else (Ol = (1 << i) | (l << n) | a), (wl = e);
  }
  function Ir(e) {
    e.return !== null && (wa(e, 1), Vs(e, 1, 0));
  }
  function ec(e) {
    for (; e === hi; )
      (hi = sn[--fn]), (sn[fn] = null), (mi = sn[--fn]), (sn[fn] = null);
    for (; e === Oa; )
      (Oa = Wt[--Pt]),
        (Wt[Pt] = null),
        (wl = Wt[--Pt]),
        (Wt[Pt] = null),
        (Ol = Wt[--Pt]),
        (Wt[Pt] = null);
  }
  var Dt = null,
    at = null,
    He = !1,
    Ca = null,
    pl = !1,
    tc = Error(o(519));
  function Ua(e) {
    var t = Error(o(418, ""));
    throw (Pn($t(t, e)), tc);
  }
  function Qs(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps;
    switch (((t[G] = e), (t[Z] = a), l)) {
      case "dialog":
        ze("cancel", t), ze("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        ze("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Eu.length; l++) ze(Eu[l], t);
        break;
      case "source":
        ze("error", t);
        break;
      case "img":
      case "image":
      case "link":
        ze("error", t), ze("load", t);
        break;
      case "details":
        ze("toggle", t);
        break;
      case "input":
        ze("invalid", t),
          us(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ),
          ei(t);
        break;
      case "select":
        ze("invalid", t);
        break;
      case "textarea":
        ze("invalid", t), rs(t, a.value, a.defaultValue, a.children), ei(t);
    }
    (l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      t.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      ch(t.textContent, l)
        ? (a.popover != null && (ze("beforetoggle", t), ze("toggle", t)),
          a.onScroll != null && ze("scroll", t),
          a.onScrollEnd != null && ze("scrollend", t),
          a.onClick != null && (t.onclick = ki),
          (t = !0))
        : (t = !1),
      t || Ua(e);
  }
  function Zs(e) {
    for (Dt = e.return; Dt; )
      switch (Dt.tag) {
        case 5:
        case 13:
          pl = !1;
          return;
        case 27:
        case 3:
          pl = !0;
          return;
        default:
          Dt = Dt.return;
      }
  }
  function Fn(e) {
    if (e !== Dt) return !1;
    if (!He) return Zs(e), (He = !0), !1;
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type),
          (l =
            !(l !== "form" && l !== "button") || po(e.type, e.memoizedProps))),
        (l = !l)),
      l && at && Ua(e),
      Zs(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((l = e.data), l === "/$")) {
              if (t === 0) {
                at = fl(e.nextSibling);
                break e;
              }
              t--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || t++;
          e = e.nextSibling;
        }
        at = null;
      }
    } else
      t === 27
        ? ((t = at), sa(e.type) ? ((e = Eo), (Eo = null), (at = e)) : (at = t))
        : (at = Dt ? fl(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Wn() {
    (at = Dt = null), (He = !1);
  }
  function Ks() {
    var e = Ca;
    return (
      e !== null &&
        (zt === null ? (zt = e) : zt.push.apply(zt, e), (Ca = null)),
      e
    );
  }
  function Pn(e) {
    Ca === null ? (Ca = [e]) : Ca.push(e);
  }
  var lc = B(null),
    Ha = null,
    Cl = null;
  function $l(e, t, l) {
    K(lc, t._currentValue), (t._currentValue = l);
  }
  function Ul(e) {
    (e._currentValue = lc.current), F(lc);
  }
  function ac(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function nc(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var s = n.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var d = i;
          i = n;
          for (var p = 0; p < t.length; p++)
            if (d.context === t[p]) {
              (i.lanes |= l),
                (d = i.alternate),
                d !== null && (d.lanes |= l),
                ac(i.return, l, e),
                a || (s = null);
              break e;
            }
          i = d.next;
        }
      } else if (n.tag === 18) {
        if (((s = n.return), s === null)) throw Error(o(341));
        (s.lanes |= l),
          (i = s.alternate),
          i !== null && (i.lanes |= l),
          ac(s, l, e),
          (s = null);
      } else s = n.child;
      if (s !== null) s.return = n;
      else
        for (s = n; s !== null; ) {
          if (s === e) {
            s = null;
            break;
          }
          if (((n = s.sibling), n !== null)) {
            (n.return = s.return), (s = n);
            break;
          }
          s = s.return;
        }
      n = s;
    }
  }
  function In(e, t, l, a) {
    e = null;
    for (var n = t, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var s = n.alternate;
        if (s === null) throw Error(o(387));
        if (((s = s.memoizedProps), s !== null)) {
          var d = n.type;
          Ut(n.pendingProps.value, s.value) ||
            (e !== null ? e.push(d) : (e = [d]));
        }
      } else if (n === Rt.current) {
        if (((s = n.alternate), s === null)) throw Error(o(387));
        s.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(ju) : (e = [ju]));
      }
      n = n.return;
    }
    e !== null && nc(t, e, l, a), (t.flags |= 262144);
  }
  function vi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ut(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function La(e) {
    (Ha = e),
      (Cl = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function Et(e) {
    return Js(Ha, e);
  }
  function yi(e, t) {
    return Ha === null && La(e), Js(e, t);
  }
  function Js(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), Cl === null)) {
      if (e === null) throw Error(o(308));
      (Cl = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else Cl = Cl.next = t;
    return l;
  }
  var Uv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  e.push(a);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (l) {
                  return l();
                });
            };
          },
    Hv = u.unstable_scheduleCallback,
    Lv = u.unstable_NormalPriority,
    dt = {
      $$typeof: $,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function uc() {
    return { controller: new Uv(), data: new Map(), refCount: 0 };
  }
  function eu(e) {
    e.refCount--,
      e.refCount === 0 &&
        Hv(Lv, function () {
          e.controller.abort();
        });
  }
  var tu = null,
    ic = 0,
    dn = 0,
    hn = null;
  function Bv(e, t) {
    if (tu === null) {
      var l = (tu = []);
      (ic = 0),
        (dn = co()),
        (hn = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        });
    }
    return ic++, t.then(ks, ks), t;
  }
  function ks() {
    if (--ic === 0 && tu !== null) {
      hn !== null && (hn.status = "fulfilled");
      var e = tu;
      (tu = null), (dn = 0), (hn = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function qv(e, t) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      e.then(
        function () {
          (a.status = "fulfilled"), (a.value = t);
          for (var n = 0; n < l.length; n++) (0, l[n])(t);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        }
      ),
      a
    );
  }
  var $s = M.S;
  M.S = function (e, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      Bv(e, t),
      $s !== null && $s(e, t);
  };
  var Ba = B(null);
  function rc() {
    var e = Ba.current;
    return e !== null ? e : ke.pooledCache;
  }
  function gi(e, t) {
    t === null ? K(Ba, Ba.current) : K(Ba, t.pool);
  }
  function Fs() {
    var e = rc();
    return e === null ? null : { parent: dt._currentValue, pool: e };
  }
  var lu = Error(o(460)),
    Ws = Error(o(474)),
    pi = Error(o(542)),
    cc = { then: function () {} };
  function Ps(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function bi() {}
  function Is(e, t, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then(bi, bi), (t = l)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), tf(e), e);
      default:
        if (typeof t.status == "string") t.then(bi, bi);
        else {
          if (((e = ke), e !== null && 100 < e.shellSuspendCounter))
            throw Error(o(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  (n.status = "fulfilled"), (n.value = a);
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  (n.status = "rejected"), (n.reason = a);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), tf(e), e);
        }
        throw ((au = t), lu);
    }
  }
  var au = null;
  function ef() {
    if (au === null) throw Error(o(459));
    var e = au;
    return (au = null), e;
  }
  function tf(e) {
    if (e === lu || e === pi) throw Error(o(483));
  }
  var Fl = !1;
  function oc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function sc(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function Wl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Pl(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (Ye & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = fi(e)),
        Gs(e, null, l),
        t
      );
    }
    return si(e, a, t, l), fi(e);
  }
  function nu(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))
    ) {
      var a = t.lanes;
      (a &= e.pendingLanes), (l |= a), (t.lanes = l), Da(e, l);
    }
  }
  function fc(e, t) {
    var l = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        i = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var s = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          i === null ? (n = i = s) : (i = i.next = s), (l = l.next);
        } while (l !== null);
        i === null ? (n = i = t) : (i = i.next = t);
      } else n = i = t;
      (l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = l);
      return;
    }
    (e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t);
  }
  var dc = !1;
  function uu() {
    if (dc) {
      var e = hn;
      if (e !== null) throw e;
    }
  }
  function iu(e, t, l, a) {
    dc = !1;
    var n = e.updateQueue;
    Fl = !1;
    var i = n.firstBaseUpdate,
      s = n.lastBaseUpdate,
      d = n.shared.pending;
    if (d !== null) {
      n.shared.pending = null;
      var p = d,
        N = p.next;
      (p.next = null), s === null ? (i = N) : (s.next = N), (s = p);
      var L = e.alternate;
      L !== null &&
        ((L = L.updateQueue),
        (d = L.lastBaseUpdate),
        d !== s &&
          (d === null ? (L.firstBaseUpdate = N) : (d.next = N),
          (L.lastBaseUpdate = p)));
    }
    if (i !== null) {
      var Y = n.baseState;
      (s = 0), (L = N = p = null), (d = i);
      do {
        var z = d.lane & -536870913,
          w = z !== d.lane;
        if (w ? (Ce & z) === z : (a & z) === z) {
          z !== 0 && z === dn && (dc = !0),
            L !== null &&
              (L = L.next =
                {
                  lane: 0,
                  tag: d.tag,
                  payload: d.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var ye = e,
              fe = d;
            z = t;
            var Ze = l;
            switch (fe.tag) {
              case 1:
                if (((ye = fe.payload), typeof ye == "function")) {
                  Y = ye.call(Ze, Y, z);
                  break e;
                }
                Y = ye;
                break e;
              case 3:
                ye.flags = (ye.flags & -65537) | 128;
              case 0:
                if (
                  ((ye = fe.payload),
                  (z = typeof ye == "function" ? ye.call(Ze, Y, z) : ye),
                  z == null)
                )
                  break e;
                Y = E({}, Y, z);
                break e;
              case 2:
                Fl = !0;
            }
          }
          (z = d.callback),
            z !== null &&
              ((e.flags |= 64),
              w && (e.flags |= 8192),
              (w = n.callbacks),
              w === null ? (n.callbacks = [z]) : w.push(z));
        } else
          (w = {
            lane: z,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null,
          }),
            L === null ? ((N = L = w), (p = Y)) : (L = L.next = w),
            (s |= z);
        if (((d = d.next), d === null)) {
          if (((d = n.shared.pending), d === null)) break;
          (w = d),
            (d = w.next),
            (w.next = null),
            (n.lastBaseUpdate = w),
            (n.shared.pending = null);
        }
      } while (!0);
      L === null && (p = Y),
        (n.baseState = p),
        (n.firstBaseUpdate = N),
        (n.lastBaseUpdate = L),
        i === null && (n.shared.lanes = 0),
        (ia |= s),
        (e.lanes = s),
        (e.memoizedState = Y);
    }
  }
  function lf(e, t) {
    if (typeof e != "function") throw Error(o(191, e));
    e.call(t);
  }
  function af(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) lf(l[e], t);
  }
  var mn = B(null),
    Si = B(0);
  function nf(e, t) {
    (e = Xl), K(Si, e), K(mn, t), (Xl = e | t.baseLanes);
  }
  function hc() {
    K(Si, Xl), K(mn, mn.current);
  }
  function mc() {
    (Xl = Si.current), F(mn), F(Si);
  }
  var Il = 0,
    De = null,
    Ve = null,
    st = null,
    xi = !1,
    vn = !1,
    qa = !1,
    Ei = 0,
    ru = 0,
    yn = null,
    Yv = 0;
  function ut() {
    throw Error(o(321));
  }
  function vc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!Ut(e[l], t[l])) return !1;
    return !0;
  }
  function yc(e, t, l, a, n, i) {
    return (
      (Il = i),
      (De = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (M.H = e === null || e.memoizedState === null ? Xf : Vf),
      (qa = !1),
      (i = l(a, n)),
      (qa = !1),
      vn && (i = rf(t, l, a, n)),
      uf(e),
      i
    );
  }
  function uf(e) {
    M.H = ji;
    var t = Ve !== null && Ve.next !== null;
    if (((Il = 0), (st = Ve = De = null), (xi = !1), (ru = 0), (yn = null), t))
      throw Error(o(300));
    e === null ||
      vt ||
      ((e = e.dependencies), e !== null && vi(e) && (vt = !0));
  }
  function rf(e, t, l, a) {
    De = e;
    var n = 0;
    do {
      if ((vn && (yn = null), (ru = 0), (vn = !1), 25 <= n))
        throw Error(o(301));
      if (((n += 1), (st = Ve = null), e.updateQueue != null)) {
        var i = e.updateQueue;
        (i.lastEffect = null),
          (i.events = null),
          (i.stores = null),
          i.memoCache != null && (i.memoCache.index = 0);
      }
      (M.H = Jv), (i = t(l, a));
    } while (vn);
    return i;
  }
  function Gv() {
    var e = M.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? cu(t) : t),
      (e = e.useState()[0]),
      (Ve !== null ? Ve.memoizedState : null) !== e && (De.flags |= 1024),
      t
    );
  }
  function gc() {
    var e = Ei !== 0;
    return (Ei = 0), e;
  }
  function pc(e, t, l) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l);
  }
  function bc(e) {
    if (xi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      xi = !1;
    }
    (Il = 0), (st = Ve = De = null), (vn = !1), (ru = Ei = 0), (yn = null);
  }
  function At() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return st === null ? (De.memoizedState = st = e) : (st = st.next = e), st;
  }
  function ft() {
    if (Ve === null) {
      var e = De.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ve.next;
    var t = st === null ? De.memoizedState : st.next;
    if (t !== null) (st = t), (Ve = e);
    else {
      if (e === null)
        throw De.alternate === null ? Error(o(467)) : Error(o(310));
      (Ve = e),
        (e = {
          memoizedState: Ve.memoizedState,
          baseState: Ve.baseState,
          baseQueue: Ve.baseQueue,
          queue: Ve.queue,
          next: null,
        }),
        st === null ? (De.memoizedState = st = e) : (st = st.next = e);
    }
    return st;
  }
  function Sc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function cu(e) {
    var t = ru;
    return (
      (ru += 1),
      yn === null && (yn = []),
      (e = Is(yn, e, t)),
      (t = De),
      (st === null ? t.memoizedState : st.next) === null &&
        ((t = t.alternate),
        (M.H = t === null || t.memoizedState === null ? Xf : Vf)),
      e
    );
  }
  function _i(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return cu(e);
      if (e.$$typeof === $) return Et(e);
    }
    throw Error(o(438, String(e)));
  }
  function xc(e) {
    var t = null,
      l = De.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var a = De.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = Sc()), (De.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = de;
    return t.index++, l;
  }
  function Hl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ri(e) {
    var t = ft();
    return Ec(t, Ve, e);
  }
  function Ec(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue,
      i = a.pending;
    if (i !== null) {
      if (n !== null) {
        var s = n.next;
        (n.next = i.next), (i.next = s);
      }
      (t.baseQueue = n = i), (a.pending = null);
    }
    if (((i = e.baseState), n === null)) e.memoizedState = i;
    else {
      t = n.next;
      var d = (s = null),
        p = null,
        N = t,
        L = !1;
      do {
        var Y = N.lane & -536870913;
        if (Y !== N.lane ? (Ce & Y) === Y : (Il & Y) === Y) {
          var z = N.revertLane;
          if (z === 0)
            p !== null &&
              (p = p.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: N.action,
                  hasEagerState: N.hasEagerState,
                  eagerState: N.eagerState,
                  next: null,
                }),
              Y === dn && (L = !0);
          else if ((Il & z) === z) {
            (N = N.next), z === dn && (L = !0);
            continue;
          } else
            (Y = {
              lane: 0,
              revertLane: N.revertLane,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null,
            }),
              p === null ? ((d = p = Y), (s = i)) : (p = p.next = Y),
              (De.lanes |= z),
              (ia |= z);
          (Y = N.action),
            qa && l(i, Y),
            (i = N.hasEagerState ? N.eagerState : l(i, Y));
        } else
          (z = {
            lane: Y,
            revertLane: N.revertLane,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null,
          }),
            p === null ? ((d = p = z), (s = i)) : (p = p.next = z),
            (De.lanes |= Y),
            (ia |= Y);
        N = N.next;
      } while (N !== null && N !== t);
      if (
        (p === null ? (s = i) : (p.next = d),
        !Ut(i, e.memoizedState) && ((vt = !0), L && ((l = hn), l !== null)))
      )
        throw l;
      (e.memoizedState = i),
        (e.baseState = s),
        (e.baseQueue = p),
        (a.lastRenderedState = i);
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function _c(e) {
    var t = ft(),
      l = t.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch,
      n = l.pending,
      i = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var s = (n = n.next);
      do (i = e(i, s.action)), (s = s.next);
      while (s !== n);
      Ut(i, t.memoizedState) || (vt = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (l.lastRenderedState = i);
    }
    return [i, a];
  }
  function cf(e, t, l) {
    var a = De,
      n = ft(),
      i = He;
    if (i) {
      if (l === void 0) throw Error(o(407));
      l = l();
    } else l = t();
    var s = !Ut((Ve || n).memoizedState, l);
    s && ((n.memoizedState = l), (vt = !0)), (n = n.queue);
    var d = ff.bind(null, a, n, e);
    if (
      (ou(2048, 8, d, [e]),
      n.getSnapshot !== t || s || (st !== null && st.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        gn(9, Ti(), sf.bind(null, a, n, l, t), null),
        ke === null)
      )
        throw Error(o(349));
      i || (Il & 124) !== 0 || of(a, t, l);
    }
    return l;
  }
  function of(e, t, l) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = De.updateQueue),
      t === null
        ? ((t = Sc()), (De.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e));
  }
  function sf(e, t, l, a) {
    (t.value = l), (t.getSnapshot = a), df(t) && hf(e);
  }
  function ff(e, t, l) {
    return l(function () {
      df(t) && hf(e);
    });
  }
  function df(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !Ut(e, l);
    } catch {
      return !0;
    }
  }
  function hf(e) {
    var t = cn(e, 2);
    t !== null && Gt(t, e, 2);
  }
  function Rc(e) {
    var t = At();
    if (typeof e == "function") {
      var l = e;
      if (((e = l()), qa)) {
        cl(!0);
        try {
          l();
        } finally {
          cl(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Hl,
        lastRenderedState: e,
      }),
      t
    );
  }
  function mf(e, t, l, a) {
    return (e.baseState = l), Ec(e, Ve, typeof a == "function" ? a : Hl);
  }
  function Xv(e, t, l, a, n) {
    if (Mi(e)) throw Error(o(485));
    if (((e = t.action), e !== null)) {
      var i = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (s) {
          i.listeners.push(s);
        },
      };
      M.T !== null ? l(!0) : (i.isTransition = !1),
        a(i),
        (l = t.pending),
        l === null
          ? ((i.next = t.pending = i), vf(t, i))
          : ((i.next = l.next), (t.pending = l.next = i));
    }
  }
  function vf(e, t) {
    var l = t.action,
      a = t.payload,
      n = e.state;
    if (t.isTransition) {
      var i = M.T,
        s = {};
      M.T = s;
      try {
        var d = l(n, a),
          p = M.S;
        p !== null && p(s, d), yf(e, t, d);
      } catch (N) {
        Tc(e, t, N);
      } finally {
        M.T = i;
      }
    } else
      try {
        (i = l(n, a)), yf(e, t, i);
      } catch (N) {
        Tc(e, t, N);
      }
  }
  function yf(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            gf(e, t, a);
          },
          function (a) {
            return Tc(e, t, a);
          }
        )
      : gf(e, t, l);
  }
  function gf(e, t, l) {
    (t.status = "fulfilled"),
      (t.value = l),
      pf(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), vf(e, l)));
  }
  function Tc(e, t, l) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do (t.status = "rejected"), (t.reason = l), pf(t), (t = t.next);
      while (t !== a);
    }
    e.action = null;
  }
  function pf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function bf(e, t) {
    return t;
  }
  function Sf(e, t) {
    if (He) {
      var l = ke.formState;
      if (l !== null) {
        e: {
          var a = De;
          if (He) {
            if (at) {
              t: {
                for (var n = at, i = pl; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break t;
                  }
                  if (((n = fl(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                (i = n.data), (n = i === "F!" || i === "F" ? n : null);
              }
              if (n) {
                (at = fl(n.nextSibling)), (a = n.data === "F!");
                break e;
              }
            }
            Ua(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return (
      (l = At()),
      (l.memoizedState = l.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: bf,
        lastRenderedState: t,
      }),
      (l.queue = a),
      (l = qf.bind(null, De, a)),
      (a.dispatch = l),
      (a = Rc(!1)),
      (i = Nc.bind(null, De, !1, a.queue)),
      (a = At()),
      (n = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = n),
      (l = Xv.bind(null, De, n, i, l)),
      (n.dispatch = l),
      (a.memoizedState = e),
      [t, l, !1]
    );
  }
  function xf(e) {
    var t = ft();
    return Ef(t, Ve, e);
  }
  function Ef(e, t, l) {
    if (
      ((t = Ec(e, t, bf)[0]),
      (e = Ri(Hl)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = cu(t);
      } catch (s) {
        throw s === lu ? pi : s;
      }
    else a = t;
    t = ft();
    var n = t.queue,
      i = n.dispatch;
    return (
      l !== t.memoizedState &&
        ((De.flags |= 2048), gn(9, Ti(), Vv.bind(null, n, l), null)),
      [a, i, e]
    );
  }
  function Vv(e, t) {
    e.action = t;
  }
  function _f(e) {
    var t = ft(),
      l = Ve;
    if (l !== null) return Ef(t, l, e);
    ft(), (t = t.memoizedState), (l = ft());
    var a = l.queue.dispatch;
    return (l.memoizedState = e), [t, a, !1];
  }
  function gn(e, t, l, a) {
    return (
      (e = { tag: e, create: l, deps: a, inst: t, next: null }),
      (t = De.updateQueue),
      t === null && ((t = Sc()), (De.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function Ti() {
    return { destroy: void 0, resource: void 0 };
  }
  function Rf() {
    return ft().memoizedState;
  }
  function Di(e, t, l, a) {
    var n = At();
    (a = a === void 0 ? null : a),
      (De.flags |= e),
      (n.memoizedState = gn(1 | t, Ti(), l, a));
  }
  function ou(e, t, l, a) {
    var n = ft();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    Ve !== null && a !== null && vc(a, Ve.memoizedState.deps)
      ? (n.memoizedState = gn(t, i, l, a))
      : ((De.flags |= e), (n.memoizedState = gn(1 | t, i, l, a)));
  }
  function Tf(e, t) {
    Di(8390656, 8, e, t);
  }
  function Df(e, t) {
    ou(2048, 8, e, t);
  }
  function Mf(e, t) {
    return ou(4, 2, e, t);
  }
  function jf(e, t) {
    return ou(4, 4, e, t);
  }
  function Af(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function () {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Nf(e, t, l) {
    (l = l != null ? l.concat([e]) : null), ou(4, 4, Af.bind(null, t, e), l);
  }
  function Dc() {}
  function zf(e, t) {
    var l = ft();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && vc(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
  }
  function Of(e, t) {
    var l = ft();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && vc(t, a[1])) return a[0];
    if (((a = e()), qa)) {
      cl(!0);
      try {
        e();
      } finally {
        cl(!1);
      }
    }
    return (l.memoizedState = [a, t]), a;
  }
  function Mc(e, t, l) {
    return l === void 0 || (Il & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = Ud()), (De.lanes |= e), (ia |= e), l);
  }
  function wf(e, t, l, a) {
    return Ut(l, t)
      ? l
      : mn.current !== null
      ? ((e = Mc(e, l, a)), Ut(e, t) || (vt = !0), e)
      : (Il & 42) === 0
      ? ((vt = !0), (e.memoizedState = l))
      : ((e = Ud()), (De.lanes |= e), (ia |= e), t);
  }
  function Cf(e, t, l, a, n) {
    var i = V.p;
    V.p = i !== 0 && 8 > i ? i : 8;
    var s = M.T,
      d = {};
    (M.T = d), Nc(e, !1, t, l);
    try {
      var p = n(),
        N = M.S;
      if (
        (N !== null && N(d, p),
        p !== null && typeof p == "object" && typeof p.then == "function")
      ) {
        var L = qv(p, a);
        su(e, t, L, Yt(e));
      } else su(e, t, a, Yt(e));
    } catch (Y) {
      su(e, t, { then: function () {}, status: "rejected", reason: Y }, Yt());
    } finally {
      (V.p = i), (M.T = s);
    }
  }
  function Qv() {}
  function jc(e, t, l, a) {
    if (e.tag !== 5) throw Error(o(476));
    var n = Uf(e).queue;
    Cf(
      e,
      n,
      t,
      P,
      l === null
        ? Qv
        : function () {
            return Hf(e), l(a);
          }
    );
  }
  function Uf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: P,
      baseState: P,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Hl,
        lastRenderedState: P,
      },
      next: null,
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Hl,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Hf(e) {
    var t = Uf(e).next.queue;
    su(e, t, {}, Yt());
  }
  function Ac() {
    return Et(ju);
  }
  function Lf() {
    return ft().memoizedState;
  }
  function Bf() {
    return ft().memoizedState;
  }
  function Zv(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Yt();
          e = Wl(l);
          var a = Pl(t, e, l);
          a !== null && (Gt(a, t, l), nu(a, t, l)),
            (t = { cache: uc() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function Kv(e, t, l) {
    var a = Yt();
    (l = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Mi(e)
        ? Yf(t, l)
        : ((l = $r(e, t, l, a)), l !== null && (Gt(l, e, a), Gf(l, t, a)));
  }
  function qf(e, t, l) {
    var a = Yt();
    su(e, t, l, a);
  }
  function su(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Mi(e)) Yf(t, n);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var s = t.lastRenderedState,
            d = i(s, l);
          if (((n.hasEagerState = !0), (n.eagerState = d), Ut(d, s)))
            return si(e, t, n, 0), ke === null && oi(), !1;
        } catch {
        } finally {
        }
      if (((l = $r(e, t, n, a)), l !== null))
        return Gt(l, e, a), Gf(l, t, a), !0;
    }
    return !1;
  }
  function Nc(e, t, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: co(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Mi(e))
    ) {
      if (t) throw Error(o(479));
    } else (t = $r(e, l, a, 2)), t !== null && Gt(t, e, 2);
  }
  function Mi(e) {
    var t = e.alternate;
    return e === De || (t !== null && t === De);
  }
  function Yf(e, t) {
    vn = xi = !0;
    var l = e.pending;
    l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t);
  }
  function Gf(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      (a &= e.pendingLanes), (l |= a), (t.lanes = l), Da(e, l);
    }
  }
  var ji = {
      readContext: Et,
      use: _i,
      useCallback: ut,
      useContext: ut,
      useEffect: ut,
      useImperativeHandle: ut,
      useLayoutEffect: ut,
      useInsertionEffect: ut,
      useMemo: ut,
      useReducer: ut,
      useRef: ut,
      useState: ut,
      useDebugValue: ut,
      useDeferredValue: ut,
      useTransition: ut,
      useSyncExternalStore: ut,
      useId: ut,
      useHostTransitionStatus: ut,
      useFormState: ut,
      useActionState: ut,
      useOptimistic: ut,
      useMemoCache: ut,
      useCacheRefresh: ut,
    },
    Xf = {
      readContext: Et,
      use: _i,
      useCallback: function (e, t) {
        return (At().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Et,
      useEffect: Tf,
      useImperativeHandle: function (e, t, l) {
        (l = l != null ? l.concat([e]) : null),
          Di(4194308, 4, Af.bind(null, t, e), l);
      },
      useLayoutEffect: function (e, t) {
        return Di(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Di(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = At();
        t = t === void 0 ? null : t;
        var a = e();
        if (qa) {
          cl(!0);
          try {
            e();
          } finally {
            cl(!1);
          }
        }
        return (l.memoizedState = [a, t]), a;
      },
      useReducer: function (e, t, l) {
        var a = At();
        if (l !== void 0) {
          var n = l(t);
          if (qa) {
            cl(!0);
            try {
              l(t);
            } finally {
              cl(!1);
            }
          }
        } else n = t;
        return (
          (a.memoizedState = a.baseState = n),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (a.queue = e),
          (e = e.dispatch = Kv.bind(null, De, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = At();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = Rc(e);
        var t = e.queue,
          l = qf.bind(null, De, t);
        return (t.dispatch = l), [e.memoizedState, l];
      },
      useDebugValue: Dc,
      useDeferredValue: function (e, t) {
        var l = At();
        return Mc(l, e, t);
      },
      useTransition: function () {
        var e = Rc(!1);
        return (
          (e = Cf.bind(null, De, e.queue, !0, !1)),
          (At().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, l) {
        var a = De,
          n = At();
        if (He) {
          if (l === void 0) throw Error(o(407));
          l = l();
        } else {
          if (((l = t()), ke === null)) throw Error(o(349));
          (Ce & 124) !== 0 || of(a, t, l);
        }
        n.memoizedState = l;
        var i = { value: l, getSnapshot: t };
        return (
          (n.queue = i),
          Tf(ff.bind(null, a, i, e), [e]),
          (a.flags |= 2048),
          gn(9, Ti(), sf.bind(null, a, i, l, t), null),
          l
        );
      },
      useId: function () {
        var e = At(),
          t = ke.identifierPrefix;
        if (He) {
          var l = wl,
            a = Ol;
          (l = (a & ~(1 << (32 - pt(a) - 1))).toString(32) + l),
            (t = "«" + t + "R" + l),
            (l = Ei++),
            0 < l && (t += "H" + l.toString(32)),
            (t += "»");
        } else (l = Yv++), (t = "«" + t + "r" + l.toString(32) + "»");
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Ac,
      useFormState: Sf,
      useActionState: Sf,
      useOptimistic: function (e) {
        var t = At();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = l),
          (t = Nc.bind(null, De, !0, l)),
          (l.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: xc,
      useCacheRefresh: function () {
        return (At().memoizedState = Zv.bind(null, De));
      },
    },
    Vf = {
      readContext: Et,
      use: _i,
      useCallback: zf,
      useContext: Et,
      useEffect: Df,
      useImperativeHandle: Nf,
      useInsertionEffect: Mf,
      useLayoutEffect: jf,
      useMemo: Of,
      useReducer: Ri,
      useRef: Rf,
      useState: function () {
        return Ri(Hl);
      },
      useDebugValue: Dc,
      useDeferredValue: function (e, t) {
        var l = ft();
        return wf(l, Ve.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Ri(Hl)[0],
          t = ft().memoizedState;
        return [typeof e == "boolean" ? e : cu(e), t];
      },
      useSyncExternalStore: cf,
      useId: Lf,
      useHostTransitionStatus: Ac,
      useFormState: xf,
      useActionState: xf,
      useOptimistic: function (e, t) {
        var l = ft();
        return mf(l, Ve, e, t);
      },
      useMemoCache: xc,
      useCacheRefresh: Bf,
    },
    Jv = {
      readContext: Et,
      use: _i,
      useCallback: zf,
      useContext: Et,
      useEffect: Df,
      useImperativeHandle: Nf,
      useInsertionEffect: Mf,
      useLayoutEffect: jf,
      useMemo: Of,
      useReducer: _c,
      useRef: Rf,
      useState: function () {
        return _c(Hl);
      },
      useDebugValue: Dc,
      useDeferredValue: function (e, t) {
        var l = ft();
        return Ve === null ? Mc(l, e, t) : wf(l, Ve.memoizedState, e, t);
      },
      useTransition: function () {
        var e = _c(Hl)[0],
          t = ft().memoizedState;
        return [typeof e == "boolean" ? e : cu(e), t];
      },
      useSyncExternalStore: cf,
      useId: Lf,
      useHostTransitionStatus: Ac,
      useFormState: _f,
      useActionState: _f,
      useOptimistic: function (e, t) {
        var l = ft();
        return Ve !== null
          ? mf(l, Ve, e, t)
          : ((l.baseState = e), [e, l.queue.dispatch]);
      },
      useMemoCache: xc,
      useCacheRefresh: Bf,
    },
    pn = null,
    fu = 0;
  function Ai(e) {
    var t = fu;
    return (fu += 1), pn === null && (pn = []), Is(pn, e, t);
  }
  function du(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function Ni(e, t) {
    throw t.$$typeof === C
      ? Error(o(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          o(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function Qf(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Zf(e) {
    function t(T, _) {
      if (e) {
        var j = T.deletions;
        j === null ? ((T.deletions = [_]), (T.flags |= 16)) : j.push(_);
      }
    }
    function l(T, _) {
      if (!e) return null;
      for (; _ !== null; ) t(T, _), (_ = _.sibling);
      return null;
    }
    function a(T) {
      for (var _ = new Map(); T !== null; )
        T.key !== null ? _.set(T.key, T) : _.set(T.index, T), (T = T.sibling);
      return _;
    }
    function n(T, _) {
      return (T = zl(T, _)), (T.index = 0), (T.sibling = null), T;
    }
    function i(T, _, j) {
      return (
        (T.index = j),
        e
          ? ((j = T.alternate),
            j !== null
              ? ((j = j.index), j < _ ? ((T.flags |= 67108866), _) : j)
              : ((T.flags |= 67108866), _))
          : ((T.flags |= 1048576), _)
      );
    }
    function s(T) {
      return e && T.alternate === null && (T.flags |= 67108866), T;
    }
    function d(T, _, j, q) {
      return _ === null || _.tag !== 6
        ? ((_ = Wr(j, T.mode, q)), (_.return = T), _)
        : ((_ = n(_, j)), (_.return = T), _);
    }
    function p(T, _, j, q) {
      var I = j.type;
      return I === Q
        ? L(T, _, j.props.children, q, j.key)
        : _ !== null &&
          (_.elementType === I ||
            (typeof I == "object" &&
              I !== null &&
              I.$$typeof === _e &&
              Qf(I) === _.type))
        ? ((_ = n(_, j.props)), du(_, j), (_.return = T), _)
        : ((_ = di(j.type, j.key, j.props, null, T.mode, q)),
          du(_, j),
          (_.return = T),
          _);
    }
    function N(T, _, j, q) {
      return _ === null ||
        _.tag !== 4 ||
        _.stateNode.containerInfo !== j.containerInfo ||
        _.stateNode.implementation !== j.implementation
        ? ((_ = Pr(j, T.mode, q)), (_.return = T), _)
        : ((_ = n(_, j.children || [])), (_.return = T), _);
    }
    function L(T, _, j, q, I) {
      return _ === null || _.tag !== 7
        ? ((_ = za(j, T.mode, q, I)), (_.return = T), _)
        : ((_ = n(_, j)), (_.return = T), _);
    }
    function Y(T, _, j) {
      if (
        (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
      )
        return (_ = Wr("" + _, T.mode, j)), (_.return = T), _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case A:
            return (
              (j = di(_.type, _.key, _.props, null, T.mode, j)),
              du(j, _),
              (j.return = T),
              j
            );
          case H:
            return (_ = Pr(_, T.mode, j)), (_.return = T), _;
          case _e:
            var q = _._init;
            return (_ = q(_._payload)), Y(T, _, j);
        }
        if (pe(_) || Be(_))
          return (_ = za(_, T.mode, j, null)), (_.return = T), _;
        if (typeof _.then == "function") return Y(T, Ai(_), j);
        if (_.$$typeof === $) return Y(T, yi(T, _), j);
        Ni(T, _);
      }
      return null;
    }
    function z(T, _, j, q) {
      var I = _ !== null ? _.key : null;
      if (
        (typeof j == "string" && j !== "") ||
        typeof j == "number" ||
        typeof j == "bigint"
      )
        return I !== null ? null : d(T, _, "" + j, q);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case A:
            return j.key === I ? p(T, _, j, q) : null;
          case H:
            return j.key === I ? N(T, _, j, q) : null;
          case _e:
            return (I = j._init), (j = I(j._payload)), z(T, _, j, q);
        }
        if (pe(j) || Be(j)) return I !== null ? null : L(T, _, j, q, null);
        if (typeof j.then == "function") return z(T, _, Ai(j), q);
        if (j.$$typeof === $) return z(T, _, yi(T, j), q);
        Ni(T, j);
      }
      return null;
    }
    function w(T, _, j, q, I) {
      if (
        (typeof q == "string" && q !== "") ||
        typeof q == "number" ||
        typeof q == "bigint"
      )
        return (T = T.get(j) || null), d(_, T, "" + q, I);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case A:
            return (
              (T = T.get(q.key === null ? j : q.key) || null), p(_, T, q, I)
            );
          case H:
            return (
              (T = T.get(q.key === null ? j : q.key) || null), N(_, T, q, I)
            );
          case _e:
            var Me = q._init;
            return (q = Me(q._payload)), w(T, _, j, q, I);
        }
        if (pe(q) || Be(q)) return (T = T.get(j) || null), L(_, T, q, I, null);
        if (typeof q.then == "function") return w(T, _, j, Ai(q), I);
        if (q.$$typeof === $) return w(T, _, j, yi(_, q), I);
        Ni(_, q);
      }
      return null;
    }
    function ye(T, _, j, q) {
      for (
        var I = null, Me = null, ie = _, me = (_ = 0), gt = null;
        ie !== null && me < j.length;
        me++
      ) {
        ie.index > me ? ((gt = ie), (ie = null)) : (gt = ie.sibling);
        var Ue = z(T, ie, j[me], q);
        if (Ue === null) {
          ie === null && (ie = gt);
          break;
        }
        e && ie && Ue.alternate === null && t(T, ie),
          (_ = i(Ue, _, me)),
          Me === null ? (I = Ue) : (Me.sibling = Ue),
          (Me = Ue),
          (ie = gt);
      }
      if (me === j.length) return l(T, ie), He && wa(T, me), I;
      if (ie === null) {
        for (; me < j.length; me++)
          (ie = Y(T, j[me], q)),
            ie !== null &&
              ((_ = i(ie, _, me)),
              Me === null ? (I = ie) : (Me.sibling = ie),
              (Me = ie));
        return He && wa(T, me), I;
      }
      for (ie = a(ie); me < j.length; me++)
        (gt = w(ie, T, me, j[me], q)),
          gt !== null &&
            (e &&
              gt.alternate !== null &&
              ie.delete(gt.key === null ? me : gt.key),
            (_ = i(gt, _, me)),
            Me === null ? (I = gt) : (Me.sibling = gt),
            (Me = gt));
      return (
        e &&
          ie.forEach(function (va) {
            return t(T, va);
          }),
        He && wa(T, me),
        I
      );
    }
    function fe(T, _, j, q) {
      if (j == null) throw Error(o(151));
      for (
        var I = null, Me = null, ie = _, me = (_ = 0), gt = null, Ue = j.next();
        ie !== null && !Ue.done;
        me++, Ue = j.next()
      ) {
        ie.index > me ? ((gt = ie), (ie = null)) : (gt = ie.sibling);
        var va = z(T, ie, Ue.value, q);
        if (va === null) {
          ie === null && (ie = gt);
          break;
        }
        e && ie && va.alternate === null && t(T, ie),
          (_ = i(va, _, me)),
          Me === null ? (I = va) : (Me.sibling = va),
          (Me = va),
          (ie = gt);
      }
      if (Ue.done) return l(T, ie), He && wa(T, me), I;
      if (ie === null) {
        for (; !Ue.done; me++, Ue = j.next())
          (Ue = Y(T, Ue.value, q)),
            Ue !== null &&
              ((_ = i(Ue, _, me)),
              Me === null ? (I = Ue) : (Me.sibling = Ue),
              (Me = Ue));
        return He && wa(T, me), I;
      }
      for (ie = a(ie); !Ue.done; me++, Ue = j.next())
        (Ue = w(ie, T, me, Ue.value, q)),
          Ue !== null &&
            (e &&
              Ue.alternate !== null &&
              ie.delete(Ue.key === null ? me : Ue.key),
            (_ = i(Ue, _, me)),
            Me === null ? (I = Ue) : (Me.sibling = Ue),
            (Me = Ue));
      return (
        e &&
          ie.forEach(function (ky) {
            return t(T, ky);
          }),
        He && wa(T, me),
        I
      );
    }
    function Ze(T, _, j, q) {
      if (
        (typeof j == "object" &&
          j !== null &&
          j.type === Q &&
          j.key === null &&
          (j = j.props.children),
        typeof j == "object" && j !== null)
      ) {
        switch (j.$$typeof) {
          case A:
            e: {
              for (var I = j.key; _ !== null; ) {
                if (_.key === I) {
                  if (((I = j.type), I === Q)) {
                    if (_.tag === 7) {
                      l(T, _.sibling),
                        (q = n(_, j.props.children)),
                        (q.return = T),
                        (T = q);
                      break e;
                    }
                  } else if (
                    _.elementType === I ||
                    (typeof I == "object" &&
                      I !== null &&
                      I.$$typeof === _e &&
                      Qf(I) === _.type)
                  ) {
                    l(T, _.sibling),
                      (q = n(_, j.props)),
                      du(q, j),
                      (q.return = T),
                      (T = q);
                    break e;
                  }
                  l(T, _);
                  break;
                } else t(T, _);
                _ = _.sibling;
              }
              j.type === Q
                ? ((q = za(j.props.children, T.mode, q, j.key)),
                  (q.return = T),
                  (T = q))
                : ((q = di(j.type, j.key, j.props, null, T.mode, q)),
                  du(q, j),
                  (q.return = T),
                  (T = q));
            }
            return s(T);
          case H:
            e: {
              for (I = j.key; _ !== null; ) {
                if (_.key === I)
                  if (
                    _.tag === 4 &&
                    _.stateNode.containerInfo === j.containerInfo &&
                    _.stateNode.implementation === j.implementation
                  ) {
                    l(T, _.sibling),
                      (q = n(_, j.children || [])),
                      (q.return = T),
                      (T = q);
                    break e;
                  } else {
                    l(T, _);
                    break;
                  }
                else t(T, _);
                _ = _.sibling;
              }
              (q = Pr(j, T.mode, q)), (q.return = T), (T = q);
            }
            return s(T);
          case _e:
            return (I = j._init), (j = I(j._payload)), Ze(T, _, j, q);
        }
        if (pe(j)) return ye(T, _, j, q);
        if (Be(j)) {
          if (((I = Be(j)), typeof I != "function")) throw Error(o(150));
          return (j = I.call(j)), fe(T, _, j, q);
        }
        if (typeof j.then == "function") return Ze(T, _, Ai(j), q);
        if (j.$$typeof === $) return Ze(T, _, yi(T, j), q);
        Ni(T, j);
      }
      return (typeof j == "string" && j !== "") ||
        typeof j == "number" ||
        typeof j == "bigint"
        ? ((j = "" + j),
          _ !== null && _.tag === 6
            ? (l(T, _.sibling), (q = n(_, j)), (q.return = T), (T = q))
            : (l(T, _), (q = Wr(j, T.mode, q)), (q.return = T), (T = q)),
          s(T))
        : l(T, _);
    }
    return function (T, _, j, q) {
      try {
        fu = 0;
        var I = Ze(T, _, j, q);
        return (pn = null), I;
      } catch (ie) {
        if (ie === lu || ie === pi) throw ie;
        var Me = Ht(29, ie, null, T.mode);
        return (Me.lanes = q), (Me.return = T), Me;
      } finally {
      }
    };
  }
  var bn = Zf(!0),
    Kf = Zf(!1),
    It = B(null),
    bl = null;
  function ea(e) {
    var t = e.alternate;
    K(ht, ht.current & 1),
      K(It, e),
      bl === null &&
        (t === null || mn.current !== null || t.memoizedState !== null) &&
        (bl = e);
  }
  function Jf(e) {
    if (e.tag === 22) {
      if ((K(ht, ht.current), K(It, e), bl === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (bl = e);
      }
    } else ta();
  }
  function ta() {
    K(ht, ht.current), K(It, It.current);
  }
  function Ll(e) {
    F(It), bl === e && (bl = null), F(ht);
  }
  var ht = B(0);
  function zi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === "$?" || xo(l))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function zc(e, t, l, a) {
    (t = e.memoizedState),
      (l = l(a, t)),
      (l = l == null ? t : E({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Oc = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var a = Yt(),
        n = Wl(a);
      (n.payload = t),
        l != null && (n.callback = l),
        (t = Pl(e, n, a)),
        t !== null && (Gt(t, e, a), nu(t, e, a));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var a = Yt(),
        n = Wl(a);
      (n.tag = 1),
        (n.payload = t),
        l != null && (n.callback = l),
        (t = Pl(e, n, a)),
        t !== null && (Gt(t, e, a), nu(t, e, a));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = Yt(),
        a = Wl(l);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = Pl(e, a, l)),
        t !== null && (Gt(t, e, l), nu(t, e, l));
    },
  };
  function kf(e, t, l, a, n, i, s) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, i, s)
        : t.prototype && t.prototype.isPureReactComponent
        ? !kn(l, a) || !kn(n, i)
        : !0
    );
  }
  function $f(e, t, l, a) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(l, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(l, a),
      t.state !== e && Oc.enqueueReplaceState(t, t.state, null);
  }
  function Ya(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t) a !== "ref" && (l[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = E({}, l));
      for (var n in e) l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  var Oi =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function Ff(e) {
    Oi(e);
  }
  function Wf(e) {
    console.error(e);
  }
  function Pf(e) {
    Oi(e);
  }
  function wi(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function If(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function wc(e, t, l) {
    return (
      (l = Wl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        wi(e, t);
      }),
      l
    );
  }
  function ed(e) {
    return (e = Wl(e)), (e.tag = 3), e;
  }
  function td(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = a.value;
      (e.payload = function () {
        return n(i);
      }),
        (e.callback = function () {
          If(t, l, a);
        });
    }
    var s = l.stateNode;
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (e.callback = function () {
        If(t, l, a),
          typeof n != "function" &&
            (ra === null ? (ra = new Set([this])) : ra.add(this));
        var d = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: d !== null ? d : "",
        });
      });
  }
  function kv(e, t, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = l.alternate),
        t !== null && In(t, l, n, !0),
        (l = It.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 13:
            return (
              bl === null ? ao() : l.alternate === null && nt === 0 && (nt = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === cc
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                  uo(e, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === cc
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue),
                      l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                  uo(e, a, n)),
              !1
            );
        }
        throw Error(o(435, l.tag));
      }
      return uo(e, a, n), ao(), !1;
    }
    if (He)
      return (
        (t = It.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            a !== tc && ((e = Error(o(422), { cause: a })), Pn($t(e, l))))
          : (a !== tc && ((t = Error(o(423), { cause: a })), Pn($t(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (n &= -n),
            (e.lanes |= n),
            (a = $t(a, l)),
            (n = wc(e.stateNode, a, n)),
            fc(e, n),
            nt !== 4 && (nt = 2)),
        !1
      );
    var i = Error(o(520), { cause: a });
    if (
      ((i = $t(i, l)),
      bu === null ? (bu = [i]) : bu.push(i),
      nt !== 4 && (nt = 2),
      t === null)
    )
      return !0;
    (a = $t(a, l)), (l = t);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = n & -n),
            (l.lanes |= e),
            (e = wc(l.stateNode, a, e)),
            fc(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
            (i = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (i !== null &&
                  typeof i.componentDidCatch == "function" &&
                  (ra === null || !ra.has(i)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = ed(n)),
              td(n, e, l, a),
              fc(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var ld = Error(o(461)),
    vt = !1;
  function bt(e, t, l, a) {
    t.child = e === null ? Kf(t, null, l, a) : bn(t, e.child, l, a);
  }
  function ad(e, t, l, a, n) {
    l = l.render;
    var i = t.ref;
    if ("ref" in a) {
      var s = {};
      for (var d in a) d !== "ref" && (s[d] = a[d]);
    } else s = a;
    return (
      La(t),
      (a = yc(e, t, l, s, i, n)),
      (d = gc()),
      e !== null && !vt
        ? (pc(e, t, n), Bl(e, t, n))
        : (He && d && Ir(t), (t.flags |= 1), bt(e, t, a, n), t.child)
    );
  }
  function nd(e, t, l, a, n) {
    if (e === null) {
      var i = l.type;
      return typeof i == "function" &&
        !Fr(i) &&
        i.defaultProps === void 0 &&
        l.compare === null
        ? ((t.tag = 15), (t.type = i), ud(e, t, i, a, n))
        : ((e = di(l.type, null, a, t, t.mode, n)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !Gc(e, n))) {
      var s = i.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : kn), l(s, a) && e.ref === t.ref)
      )
        return Bl(e, t, n);
    }
    return (
      (t.flags |= 1),
      (e = zl(i, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function ud(e, t, l, a, n) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (kn(i, a) && e.ref === t.ref)
        if (((vt = !1), (t.pendingProps = a = i), Gc(e, n)))
          (e.flags & 131072) !== 0 && (vt = !0);
        else return (t.lanes = e.lanes), Bl(e, t, n);
    }
    return Cc(e, t, l, a, n);
  }
  function id(e, t, l) {
    var a = t.pendingProps,
      n = a.children,
      i = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((a = i !== null ? i.baseLanes | l : l), e !== null)) {
          for (n = t.child = e.child, i = 0; n !== null; )
            (i = i | n.lanes | n.childLanes), (n = n.sibling);
          t.childLanes = i & ~a;
        } else (t.childLanes = 0), (t.child = null);
        return rd(e, t, a, l);
      }
      if ((l & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && gi(t, i !== null ? i.cachePool : null),
          i !== null ? nf(t, i) : hc(),
          Jf(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          rd(e, t, i !== null ? i.baseLanes | l : l, l)
        );
    } else
      i !== null
        ? (gi(t, i.cachePool), nf(t, i), ta(), (t.memoizedState = null))
        : (e !== null && gi(t, null), hc(), ta());
    return bt(e, t, n, l), t.child;
  }
  function rd(e, t, l, a) {
    var n = rc();
    return (
      (n = n === null ? null : { parent: dt._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: l, cachePool: n }),
      e !== null && gi(t, null),
      hc(),
      Jf(t),
      e !== null && In(e, t, a, !0),
      null
    );
  }
  function Ci(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(o(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Cc(e, t, l, a, n) {
    return (
      La(t),
      (l = yc(e, t, l, a, void 0, n)),
      (a = gc()),
      e !== null && !vt
        ? (pc(e, t, n), Bl(e, t, n))
        : (He && a && Ir(t), (t.flags |= 1), bt(e, t, l, n), t.child)
    );
  }
  function cd(e, t, l, a, n, i) {
    return (
      La(t),
      (t.updateQueue = null),
      (l = rf(t, a, l, n)),
      uf(e),
      (a = gc()),
      e !== null && !vt
        ? (pc(e, t, i), Bl(e, t, i))
        : (He && a && Ir(t), (t.flags |= 1), bt(e, t, l, i), t.child)
    );
  }
  function od(e, t, l, a, n) {
    if ((La(t), t.stateNode === null)) {
      var i = on,
        s = l.contextType;
      typeof s == "object" && s !== null && (i = Et(s)),
        (i = new l(a, i)),
        (t.memoizedState =
          i.state !== null && i.state !== void 0 ? i.state : null),
        (i.updater = Oc),
        (t.stateNode = i),
        (i._reactInternals = t),
        (i = t.stateNode),
        (i.props = a),
        (i.state = t.memoizedState),
        (i.refs = {}),
        oc(t),
        (s = l.contextType),
        (i.context = typeof s == "object" && s !== null ? Et(s) : on),
        (i.state = t.memoizedState),
        (s = l.getDerivedStateFromProps),
        typeof s == "function" && (zc(t, l, s, a), (i.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function" ||
          (typeof i.UNSAFE_componentWillMount != "function" &&
            typeof i.componentWillMount != "function") ||
          ((s = i.state),
          typeof i.componentWillMount == "function" && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == "function" &&
            i.UNSAFE_componentWillMount(),
          s !== i.state && Oc.enqueueReplaceState(i, i.state, null),
          iu(t, a, i, n),
          uu(),
          (i.state = t.memoizedState)),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0);
    } else if (e === null) {
      i = t.stateNode;
      var d = t.memoizedProps,
        p = Ya(l, d);
      i.props = p;
      var N = i.context,
        L = l.contextType;
      (s = on), typeof L == "object" && L !== null && (s = Et(L));
      var Y = l.getDerivedStateFromProps;
      (L =
        typeof Y == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function"),
        (d = t.pendingProps !== d),
        L ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((d || N !== s) && $f(t, i, a, s)),
        (Fl = !1);
      var z = t.memoizedState;
      (i.state = z),
        iu(t, a, i, n),
        uu(),
        (N = t.memoizedState),
        d || z !== N || Fl
          ? (typeof Y == "function" && (zc(t, l, Y, a), (N = t.memoizedState)),
            (p = Fl || kf(t, l, p, a, z, N, s))
              ? (L ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = N)),
            (i.props = a),
            (i.state = N),
            (i.context = s),
            (a = p))
          : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1));
    } else {
      (i = t.stateNode),
        sc(e, t),
        (s = t.memoizedProps),
        (L = Ya(l, s)),
        (i.props = L),
        (Y = t.pendingProps),
        (z = i.context),
        (N = l.contextType),
        (p = on),
        typeof N == "object" && N !== null && (p = Et(N)),
        (d = l.getDerivedStateFromProps),
        (N =
          typeof d == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function") ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((s !== Y || z !== p) && $f(t, i, a, p)),
        (Fl = !1),
        (z = t.memoizedState),
        (i.state = z),
        iu(t, a, i, n),
        uu();
      var w = t.memoizedState;
      s !== Y ||
      z !== w ||
      Fl ||
      (e !== null && e.dependencies !== null && vi(e.dependencies))
        ? (typeof d == "function" && (zc(t, l, d, a), (w = t.memoizedState)),
          (L =
            Fl ||
            kf(t, l, L, a, z, w, p) ||
            (e !== null && e.dependencies !== null && vi(e.dependencies)))
            ? (N ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(a, w, p),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(a, w, p)),
              typeof i.componentDidUpdate == "function" && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (s === e.memoizedProps && z === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (s === e.memoizedProps && z === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = w)),
          (i.props = a),
          (i.state = w),
          (i.context = p),
          (a = L))
        : (typeof i.componentDidUpdate != "function" ||
            (s === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (s === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (i = a),
      Ci(e, t),
      (a = (t.flags & 128) !== 0),
      i || a
        ? ((i = t.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : i.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = bn(t, e.child, null, n)),
              (t.child = bn(t, null, l, n)))
            : bt(e, t, l, n),
          (t.memoizedState = i.state),
          (e = t.child))
        : (e = Bl(e, t, n)),
      e
    );
  }
  function sd(e, t, l, a) {
    return Wn(), (t.flags |= 256), bt(e, t, l, a), t.child;
  }
  var Uc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Hc(e) {
    return { baseLanes: e, cachePool: Fs() };
  }
  function Lc(e, t, l) {
    return (e = e !== null ? e.childLanes & ~l : 0), t && (e |= el), e;
  }
  function fd(e, t, l) {
    var a = t.pendingProps,
      n = !1,
      i = (t.flags & 128) !== 0,
      s;
    if (
      ((s = i) ||
        (s =
          e !== null && e.memoizedState === null ? !1 : (ht.current & 2) !== 0),
      s && ((n = !0), (t.flags &= -129)),
      (s = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (He) {
        if ((n ? ea(t) : ta(), He)) {
          var d = at,
            p;
          if ((p = d)) {
            e: {
              for (p = d, d = pl; p.nodeType !== 8; ) {
                if (!d) {
                  d = null;
                  break e;
                }
                if (((p = fl(p.nextSibling)), p === null)) {
                  d = null;
                  break e;
                }
              }
              d = p;
            }
            d !== null
              ? ((t.memoizedState = {
                  dehydrated: d,
                  treeContext: Oa !== null ? { id: Ol, overflow: wl } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (p = Ht(18, null, null, 0)),
                (p.stateNode = d),
                (p.return = t),
                (t.child = p),
                (Dt = t),
                (at = null),
                (p = !0))
              : (p = !1);
          }
          p || Ua(t);
        }
        if (
          ((d = t.memoizedState),
          d !== null && ((d = d.dehydrated), d !== null))
        )
          return xo(d) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        Ll(t);
      }
      return (
        (d = a.children),
        (a = a.fallback),
        n
          ? (ta(),
            (n = t.mode),
            (d = Ui({ mode: "hidden", children: d }, n)),
            (a = za(a, n, l, null)),
            (d.return = t),
            (a.return = t),
            (d.sibling = a),
            (t.child = d),
            (n = t.child),
            (n.memoizedState = Hc(l)),
            (n.childLanes = Lc(e, s, l)),
            (t.memoizedState = Uc),
            a)
          : (ea(t), Bc(t, d))
      );
    }
    if (
      ((p = e.memoizedState), p !== null && ((d = p.dehydrated), d !== null))
    ) {
      if (i)
        t.flags & 256
          ? (ea(t), (t.flags &= -257), (t = qc(e, t, l)))
          : t.memoizedState !== null
          ? (ta(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (ta(),
            (n = a.fallback),
            (d = t.mode),
            (a = Ui({ mode: "visible", children: a.children }, d)),
            (n = za(n, d, l, null)),
            (n.flags |= 2),
            (a.return = t),
            (n.return = t),
            (a.sibling = n),
            (t.child = a),
            bn(t, e.child, null, l),
            (a = t.child),
            (a.memoizedState = Hc(l)),
            (a.childLanes = Lc(e, s, l)),
            (t.memoizedState = Uc),
            (t = n));
      else if ((ea(t), xo(d))) {
        if (((s = d.nextSibling && d.nextSibling.dataset), s)) var N = s.dgst;
        (s = N),
          (a = Error(o(419))),
          (a.stack = ""),
          (a.digest = s),
          Pn({ value: a, source: null, stack: null }),
          (t = qc(e, t, l));
      } else if (
        (vt || In(e, t, l, !1), (s = (l & e.childLanes) !== 0), vt || s)
      ) {
        if (
          ((s = ke),
          s !== null &&
            ((a = l & -l),
            (a = (a & 42) !== 0 ? 1 : qn(a)),
            (a = (a & (s.suspendedLanes | l)) !== 0 ? 0 : a),
            a !== 0 && a !== p.retryLane))
        )
          throw ((p.retryLane = a), cn(e, a), Gt(s, e, a), ld);
        d.data === "$?" || ao(), (t = qc(e, t, l));
      } else
        d.data === "$?"
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = p.treeContext),
            (at = fl(d.nextSibling)),
            (Dt = t),
            (He = !0),
            (Ca = null),
            (pl = !1),
            e !== null &&
              ((Wt[Pt++] = Ol),
              (Wt[Pt++] = wl),
              (Wt[Pt++] = Oa),
              (Ol = e.id),
              (wl = e.overflow),
              (Oa = t)),
            (t = Bc(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return n
      ? (ta(),
        (n = a.fallback),
        (d = t.mode),
        (p = e.child),
        (N = p.sibling),
        (a = zl(p, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = p.subtreeFlags & 65011712),
        N !== null ? (n = zl(N, n)) : ((n = za(n, d, l, null)), (n.flags |= 2)),
        (n.return = t),
        (a.return = t),
        (a.sibling = n),
        (t.child = a),
        (a = n),
        (n = t.child),
        (d = e.child.memoizedState),
        d === null
          ? (d = Hc(l))
          : ((p = d.cachePool),
            p !== null
              ? ((N = dt._currentValue),
                (p = p.parent !== N ? { parent: N, pool: N } : p))
              : (p = Fs()),
            (d = { baseLanes: d.baseLanes | l, cachePool: p })),
        (n.memoizedState = d),
        (n.childLanes = Lc(e, s, l)),
        (t.memoizedState = Uc),
        a)
      : (ea(t),
        (l = e.child),
        (e = l.sibling),
        (l = zl(l, { mode: "visible", children: a.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((s = t.deletions),
          s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function Bc(e, t) {
    return (
      (t = Ui({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Ui(e, t) {
    return (
      (e = Ht(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function qc(e, t, l) {
    return (
      bn(t, e.child, null, l),
      (e = Bc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function dd(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), ac(e.return, t, l);
  }
  function Yc(e, t, l, a, n) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = l),
        (i.tailMode = n));
  }
  function hd(e, t, l) {
    var a = t.pendingProps,
      n = a.revealOrder,
      i = a.tail;
    if ((bt(e, t, a.children, l), (a = ht.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && dd(e, l, t);
          else if (e.tag === 19) dd(e, l, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      a &= 1;
    }
    switch ((K(ht, a), n)) {
      case "forwards":
        for (l = t.child, n = null; l !== null; )
          (e = l.alternate),
            e !== null && zi(e) === null && (n = l),
            (l = l.sibling);
        (l = n),
          l === null
            ? ((n = t.child), (t.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          Yc(t, !1, n, l, i);
        break;
      case "backwards":
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (((e = n.alternate), e !== null && zi(e) === null)) {
            t.child = n;
            break;
          }
          (e = n.sibling), (n.sibling = l), (l = n), (n = e);
        }
        Yc(t, !0, l, null, i);
        break;
      case "together":
        Yc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Bl(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (ia |= t.lanes),
      (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((In(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        e = t.child, l = zl(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (l = l.sibling = zl(e, e.pendingProps)),
          (l.return = t);
      l.sibling = null;
    }
    return t.child;
  }
  function Gc(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && vi(e)));
  }
  function $v(e, t, l) {
    switch (t.tag) {
      case 3:
        Je(t, t.stateNode.containerInfo),
          $l(t, dt, e.memoizedState.cache),
          Wn();
        break;
      case 27:
      case 5:
        ct(t);
        break;
      case 4:
        Je(t, t.stateNode.containerInfo);
        break;
      case 10:
        $l(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (ea(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
            ? fd(e, t, l)
            : (ea(t), (e = Bl(e, t, l)), e !== null ? e.sibling : null);
        ea(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (
          ((a = (l & t.childLanes) !== 0),
          a || (In(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return hd(e, t, l);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          K(ht, ht.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), id(e, t, l);
      case 24:
        $l(t, dt, e.memoizedState.cache);
    }
    return Bl(e, t, l);
  }
  function md(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) vt = !0;
      else {
        if (!Gc(e, l) && (t.flags & 128) === 0) return (vt = !1), $v(e, t, l);
        vt = (e.flags & 131072) !== 0;
      }
    else (vt = !1), He && (t.flags & 1048576) !== 0 && Vs(t, mi, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var a = t.elementType,
            n = a._init;
          if (((a = n(a._payload)), (t.type = a), typeof a == "function"))
            Fr(a)
              ? ((e = Ya(a, e)), (t.tag = 1), (t = od(null, t, a, e, l)))
              : ((t.tag = 0), (t = Cc(null, t, a, e, l)));
          else {
            if (a != null) {
              if (((n = a.$$typeof), n === oe)) {
                (t.tag = 11), (t = ad(null, t, a, e, l));
                break e;
              } else if (n === be) {
                (t.tag = 14), (t = nd(null, t, a, e, l));
                break e;
              }
            }
            throw ((t = ge(a) || a), Error(o(306, t, "")));
          }
        }
        return t;
      case 0:
        return Cc(e, t, t.type, t.pendingProps, l);
      case 1:
        return (a = t.type), (n = Ya(a, t.pendingProps)), od(e, t, a, n, l);
      case 3:
        e: {
          if ((Je(t, t.stateNode.containerInfo), e === null))
            throw Error(o(387));
          a = t.pendingProps;
          var i = t.memoizedState;
          (n = i.element), sc(e, t), iu(t, a, null, l);
          var s = t.memoizedState;
          if (
            ((a = s.cache),
            $l(t, dt, a),
            a !== i.cache && nc(t, [dt], l, !0),
            uu(),
            (a = s.element),
            i.isDehydrated)
          )
            if (
              ((i = { element: a, isDehydrated: !1, cache: s.cache }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              t = sd(e, t, a, l);
              break e;
            } else if (a !== n) {
              (n = $t(Error(o(424)), t)), Pn(n), (t = sd(e, t, a, l));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                at = fl(e.firstChild),
                  Dt = t,
                  He = !0,
                  Ca = null,
                  pl = !0,
                  l = Kf(t, null, a, l),
                  t.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
            }
          else {
            if ((Wn(), a === n)) {
              t = Bl(e, t, l);
              break e;
            }
            bt(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Ci(e, t),
          e === null
            ? (l = ph(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : He ||
                ((l = t.type),
                (e = t.pendingProps),
                (a = $i(he.current).createElement(l)),
                (a[G] = t),
                (a[Z] = e),
                xt(a, l, e),
                Se(a),
                (t.stateNode = a))
            : (t.memoizedState = ph(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          ct(t),
          e === null &&
            He &&
            ((a = t.stateNode = vh(t.type, t.pendingProps, he.current)),
            (Dt = t),
            (pl = !0),
            (n = at),
            sa(t.type) ? ((Eo = n), (at = fl(a.firstChild))) : (at = n)),
          bt(e, t, t.pendingProps.children, l),
          Ci(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            He &&
            ((n = a = at) &&
              ((a = _y(a, t.type, t.pendingProps, pl)),
              a !== null
                ? ((t.stateNode = a),
                  (Dt = t),
                  (at = fl(a.firstChild)),
                  (pl = !1),
                  (n = !0))
                : (n = !1)),
            n || Ua(t)),
          ct(t),
          (n = t.type),
          (i = t.pendingProps),
          (s = e !== null ? e.memoizedProps : null),
          (a = i.children),
          po(n, i) ? (a = null) : s !== null && po(n, s) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((n = yc(e, t, Gv, null, null, l)), (ju._currentValue = n)),
          Ci(e, t),
          bt(e, t, a, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            He &&
            ((e = l = at) &&
              ((l = Ry(l, t.pendingProps, pl)),
              l !== null
                ? ((t.stateNode = l), (Dt = t), (at = null), (e = !0))
                : (e = !1)),
            e || Ua(t)),
          null
        );
      case 13:
        return fd(e, t, l);
      case 4:
        return (
          Je(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = bn(t, null, a, l)) : bt(e, t, a, l),
          t.child
        );
      case 11:
        return ad(e, t, t.type, t.pendingProps, l);
      case 7:
        return bt(e, t, t.pendingProps, l), t.child;
      case 8:
        return bt(e, t, t.pendingProps.children, l), t.child;
      case 12:
        return bt(e, t, t.pendingProps.children, l), t.child;
      case 10:
        return (
          (a = t.pendingProps),
          $l(t, t.type, a.value),
          bt(e, t, a.children, l),
          t.child
        );
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          La(t),
          (n = Et(n)),
          (a = a(n)),
          (t.flags |= 1),
          bt(e, t, a, l),
          t.child
        );
      case 14:
        return nd(e, t, t.type, t.pendingProps, l);
      case 15:
        return ud(e, t, t.type, t.pendingProps, l);
      case 19:
        return hd(e, t, l);
      case 31:
        return (
          (a = t.pendingProps),
          (l = t.mode),
          (a = { mode: a.mode, children: a.children }),
          e === null
            ? ((l = Ui(a, l)),
              (l.ref = t.ref),
              (t.child = l),
              (l.return = t),
              (t = l))
            : ((l = zl(e.child, a)),
              (l.ref = t.ref),
              (t.child = l),
              (l.return = t),
              (t = l)),
          t
        );
      case 22:
        return id(e, t, l);
      case 24:
        return (
          La(t),
          (a = Et(dt)),
          e === null
            ? ((n = rc()),
              n === null &&
                ((n = ke),
                (i = uc()),
                (n.pooledCache = i),
                i.refCount++,
                i !== null && (n.pooledCacheLanes |= l),
                (n = i)),
              (t.memoizedState = { parent: a, cache: n }),
              oc(t),
              $l(t, dt, n))
            : ((e.lanes & l) !== 0 && (sc(e, t), iu(t, null, null, l), uu()),
              (n = e.memoizedState),
              (i = t.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (t.memoizedState = n),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = n),
                  $l(t, dt, a))
                : ((a = i.cache),
                  $l(t, dt, a),
                  a !== n.cache && nc(t, [dt], l, !0))),
          bt(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function ql(e) {
    e.flags |= 4;
  }
  function vd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !_h(t))) {
      if (
        ((t = It.current),
        t !== null &&
          ((Ce & 4194048) === Ce
            ? bl !== null
            : ((Ce & 62914560) !== Ce && (Ce & 536870912) === 0) || t !== bl))
      )
        throw ((au = cc), Ws);
      e.flags |= 8192;
    }
  }
  function Hi(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Fu() : 536870912), (e.lanes |= t), (_n |= t));
  }
  function hu(e, t) {
    if (!He)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), (t = t.sibling);
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = e.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), (l = l.sibling);
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function et(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = e),
          (n = n.sibling);
    else
      for (n = e.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = e),
          (n = n.sibling);
    return (e.subtreeFlags |= a), (e.childLanes = l), t;
  }
  function Fv(e, t, l) {
    var a = t.pendingProps;
    switch ((ec(t), t.tag)) {
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
        return et(t), null;
      case 1:
        return et(t), null;
      case 3:
        return (
          (l = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Ul(dt),
          ml(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (Fn(t)
              ? ql(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Ks())),
          et(t),
          null
        );
      case 26:
        return (
          (l = t.memoizedState),
          e === null
            ? (ql(t),
              l !== null ? (et(t), vd(t, l)) : (et(t), (t.flags &= -16777217)))
            : l
            ? l !== e.memoizedState
              ? (ql(t), et(t), vd(t, l))
              : (et(t), (t.flags &= -16777217))
            : (e.memoizedProps !== a && ql(t), et(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        il(t), (l = he.current);
        var n = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== a && ql(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(o(166));
            return et(t), null;
          }
          (e = ae.current),
            Fn(t) ? Qs(t) : ((e = vh(n, a, l)), (t.stateNode = e), ql(t));
        }
        return et(t), null;
      case 5:
        if ((il(t), (l = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && ql(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(o(166));
            return et(t), null;
          }
          if (((e = ae.current), Fn(t))) Qs(t);
          else {
            switch (((n = $i(he.current)), e)) {
              case 1:
                e = n.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                e = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    e = n.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    e = n.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    (e = n.createElement("div")),
                      (e.innerHTML = "<script></script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof a.is == "string"
                        ? n.createElement("select", { is: a.is })
                        : n.createElement("select")),
                      a.multiple
                        ? (e.multiple = !0)
                        : a.size && (e.size = a.size);
                    break;
                  default:
                    e =
                      typeof a.is == "string"
                        ? n.createElement(l, { is: a.is })
                        : n.createElement(l);
                }
            }
            (e[G] = t), (e[Z] = a);
            e: for (n = t.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                (n.child.return = n), (n = n.child);
                continue;
              }
              if (n === t) break e;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === t) break e;
                n = n.return;
              }
              (n.sibling.return = n.return), (n = n.sibling);
            }
            t.stateNode = e;
            e: switch ((xt(e, l, a), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!a.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && ql(t);
          }
        }
        return et(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && ql(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(o(166));
          if (((e = he.current), Fn(t))) {
            if (
              ((e = t.stateNode),
              (l = t.memoizedProps),
              (a = null),
              (n = Dt),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            (e[G] = t),
              (e = !!(
                e.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                ch(e.nodeValue, l)
              )),
              e || Ua(t);
          } else (e = $i(e).createTextNode(a)), (e[G] = t), (t.stateNode = e);
        }
        return et(t), null;
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((n = Fn(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!n) throw Error(o(318));
              if (
                ((n = t.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(o(317));
              n[G] = t;
            } else
              Wn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            et(t), (n = !1);
          } else
            (n = Ks()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (n = !0);
          if (!n) return t.flags & 256 ? (Ll(t), t) : (Ll(t), null);
        }
        if ((Ll(t), (t.flags & 128) !== 0)) return (t.lanes = l), t;
        if (
          ((l = a !== null), (e = e !== null && e.memoizedState !== null), l)
        ) {
          (a = t.child),
            (n = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (n = a.alternate.memoizedState.cachePool.pool);
          var i = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (i = a.memoizedState.cachePool.pool),
            i !== n && (a.flags |= 2048);
        }
        return (
          l !== e && l && (t.child.flags |= 8192),
          Hi(t, t.updateQueue),
          et(t),
          null
        );
      case 4:
        return ml(), e === null && ho(t.stateNode.containerInfo), et(t), null;
      case 10:
        return Ul(t.type), et(t), null;
      case 19:
        if ((F(ht), (n = t.memoizedState), n === null)) return et(t), null;
        if (((a = (t.flags & 128) !== 0), (i = n.rendering), i === null))
          if (a) hu(n, !1);
          else {
            if (nt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = zi(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      hu(n, !1),
                      e = i.updateQueue,
                      t.updateQueue = e,
                      Hi(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;

                  )
                    Xs(l, e), (l = l.sibling);
                  return K(ht, (ht.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null &&
              wt() > qi &&
              ((t.flags |= 128), (a = !0), hu(n, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = zi(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Hi(t, e),
                hu(n, !0),
                n.tail === null &&
                  n.tailMode === "hidden" &&
                  !i.alternate &&
                  !He)
              )
                return et(t), null;
            } else
              2 * wt() - n.renderingStartTime > qi &&
                l !== 536870912 &&
                ((t.flags |= 128), (a = !0), hu(n, !1), (t.lanes = 4194304));
          n.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((e = n.last),
              e !== null ? (e.sibling = i) : (t.child = i),
              (n.last = i));
        }
        return n.tail !== null
          ? ((t = n.tail),
            (n.rendering = t),
            (n.tail = t.sibling),
            (n.renderingStartTime = wt()),
            (t.sibling = null),
            (e = ht.current),
            K(ht, a ? (e & 1) | 2 : e & 1),
            t)
          : (et(t), null);
      case 22:
      case 23:
        return (
          Ll(t),
          mc(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (et(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : et(t),
          (l = t.updateQueue),
          l !== null && Hi(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== l && (t.flags |= 2048),
          e !== null && F(Ba),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Ul(dt),
          et(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Wv(e, t) {
    switch ((ec(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Ul(dt),
          ml(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return il(t), null;
      case 13:
        if (
          (Ll(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          Wn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return F(ht), null;
      case 4:
        return ml(), null;
      case 10:
        return Ul(t.type), null;
      case 22:
      case 23:
        return (
          Ll(t),
          mc(),
          e !== null && F(Ba),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return Ul(dt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function yd(e, t) {
    switch ((ec(t), t.tag)) {
      case 3:
        Ul(dt), ml();
        break;
      case 26:
      case 27:
      case 5:
        il(t);
        break;
      case 4:
        ml();
        break;
      case 13:
        Ll(t);
        break;
      case 19:
        F(ht);
        break;
      case 10:
        Ul(t.type);
        break;
      case 22:
      case 23:
        Ll(t), mc(), e !== null && F(Ba);
        break;
      case 24:
        Ul(dt);
    }
  }
  function mu(e, t) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var i = l.create,
              s = l.inst;
            (a = i()), (s.destroy = a);
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (d) {
      Ke(t, t.return, d);
    }
  }
  function la(e, t, l) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            var s = a.inst,
              d = s.destroy;
            if (d !== void 0) {
              (s.destroy = void 0), (n = t);
              var p = l,
                N = d;
              try {
                N();
              } catch (L) {
                Ke(n, p, L);
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (L) {
      Ke(t, t.return, L);
    }
  }
  function gd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        af(t, l);
      } catch (a) {
        Ke(e, e.return, a);
      }
    }
  }
  function pd(e, t, l) {
    (l.props = Ya(e.type, e.memoizedProps)), (l.state = e.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (a) {
      Ke(e, t, a);
    }
  }
  function vu(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == "function" ? (e.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      Ke(e, t, n);
    }
  }
  function Sl(e, t) {
    var l = e.ref,
      a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          Ke(e, t, n);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          Ke(e, t, n);
        }
      else l.current = null;
  }
  function bd(e) {
    var t = e.type,
      l = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      Ke(e, e.return, n);
    }
  }
  function Xc(e, t, l) {
    try {
      var a = e.stateNode;
      py(a, e.type, l, t), (a[Z] = t);
    } catch (n) {
      Ke(e, e.return, n);
    }
  }
  function Sd(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && sa(e.type)) ||
      e.tag === 4
    );
  }
  function Vc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Sd(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && sa(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Qc(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode),
        t
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
              ? l.ownerDocument.body
              : l
            ).insertBefore(e, t)
          : ((t =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l),
            t.appendChild(e),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = ki));
    else if (
      a !== 4 &&
      (a === 27 && sa(e.type) && ((l = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (Qc(e, t, l), e = e.sibling; e !== null; )
        Qc(e, t, l), (e = e.sibling);
  }
  function Li(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (
      a !== 4 &&
      (a === 27 && sa(e.type) && (l = e.stateNode), (e = e.child), e !== null)
    )
      for (Li(e, t, l), e = e.sibling; e !== null; )
        Li(e, t, l), (e = e.sibling);
  }
  function xd(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      xt(t, a, l), (t[G] = e), (t[Z] = l);
    } catch (i) {
      Ke(e, e.return, i);
    }
  }
  var Yl = !1,
    it = !1,
    Zc = !1,
    Ed = typeof WeakSet == "function" ? WeakSet : Set,
    yt = null;
  function Pv(e, t) {
    if (((e = e.containerInfo), (yo = tr), (e = Os(e)), Vr(e))) {
      if ("selectionStart" in e)
        var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              i = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, i.nodeType;
            } catch {
              l = null;
              break e;
            }
            var s = 0,
              d = -1,
              p = -1,
              N = 0,
              L = 0,
              Y = e,
              z = null;
            t: for (;;) {
              for (
                var w;
                Y !== l || (n !== 0 && Y.nodeType !== 3) || (d = s + n),
                  Y !== i || (a !== 0 && Y.nodeType !== 3) || (p = s + a),
                  Y.nodeType === 3 && (s += Y.nodeValue.length),
                  (w = Y.firstChild) !== null;

              )
                (z = Y), (Y = w);
              for (;;) {
                if (Y === e) break t;
                if (
                  (z === l && ++N === n && (d = s),
                  z === i && ++L === a && (p = s),
                  (w = Y.nextSibling) !== null)
                )
                  break;
                (Y = z), (z = Y.parentNode);
              }
              Y = w;
            }
            l = d === -1 || p === -1 ? null : { start: d, end: p };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      go = { focusedElem: e, selectionRange: l }, tr = !1, yt = t;
      yt !== null;

    )
      if (
        ((t = yt), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
      )
        (e.return = t), (yt = e);
      else
        for (; yt !== null; ) {
          switch (((t = yt), (i = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                (e = void 0),
                  (l = t),
                  (n = i.memoizedProps),
                  (i = i.memoizedState),
                  (a = l.stateNode);
                try {
                  var ye = Ya(l.type, n, l.elementType === l.type);
                  (e = a.getSnapshotBeforeUpdate(ye, i)),
                    (a.__reactInternalSnapshotBeforeUpdate = e);
                } catch (fe) {
                  Ke(l, l.return, fe);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)
                )
                  So(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      So(e);
                      break;
                    default:
                      e.textContent = "";
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
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (yt = e);
            break;
          }
          yt = t.return;
        }
  }
  function _d(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        aa(e, l), a & 4 && mu(5, l);
        break;
      case 1:
        if ((aa(e, l), a & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (s) {
              Ke(l, l.return, s);
            }
          else {
            var n = Ya(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (s) {
              Ke(l, l.return, s);
            }
          }
        a & 64 && gd(l), a & 512 && vu(l, l.return);
        break;
      case 3:
        if ((aa(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            af(e, t);
          } catch (s) {
            Ke(l, l.return, s);
          }
        }
        break;
      case 27:
        t === null && a & 4 && xd(l);
      case 26:
      case 5:
        aa(e, l), t === null && a & 4 && bd(l), a & 512 && vu(l, l.return);
        break;
      case 12:
        aa(e, l);
        break;
      case 13:
        aa(e, l),
          a & 4 && Dd(e, l),
          a & 64 &&
            ((e = l.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((l = ry.bind(null, l)), Ty(e, l))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || Yl), !a)) {
          (t = (t !== null && t.memoizedState !== null) || it), (n = Yl);
          var i = it;
          (Yl = a),
            (it = t) && !i ? na(e, l, (l.subtreeFlags & 8772) !== 0) : aa(e, l),
            (Yl = n),
            (it = i);
        }
        break;
      case 30:
        break;
      default:
        aa(e, l);
    }
  }
  function Rd(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Rd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && ue(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var $e = null,
    Nt = !1;
  function Gl(e, t, l) {
    for (l = l.child; l !== null; ) Td(e, t, l), (l = l.sibling);
  }
  function Td(e, t, l) {
    if (Pe && typeof Pe.onCommitFiberUnmount == "function")
      try {
        Pe.onCommitFiberUnmount(Mt, l);
      } catch {}
    switch (l.tag) {
      case 26:
        it || Sl(l, t),
          Gl(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        it || Sl(l, t);
        var a = $e,
          n = Nt;
        sa(l.type) && (($e = l.stateNode), (Nt = !1)),
          Gl(e, t, l),
          Ru(l.stateNode),
          ($e = a),
          (Nt = n);
        break;
      case 5:
        it || Sl(l, t);
      case 6:
        if (
          ((a = $e),
          (n = Nt),
          ($e = null),
          Gl(e, t, l),
          ($e = a),
          (Nt = n),
          $e !== null)
        )
          if (Nt)
            try {
              ($e.nodeType === 9
                ? $e.body
                : $e.nodeName === "HTML"
                ? $e.ownerDocument.body
                : $e
              ).removeChild(l.stateNode);
            } catch (i) {
              Ke(l, t, i);
            }
          else
            try {
              $e.removeChild(l.stateNode);
            } catch (i) {
              Ke(l, t, i);
            }
        break;
      case 18:
        $e !== null &&
          (Nt
            ? ((e = $e),
              hh(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e,
                l.stateNode
              ),
              Ou(e))
            : hh($e, l.stateNode));
        break;
      case 4:
        (a = $e),
          (n = Nt),
          ($e = l.stateNode.containerInfo),
          (Nt = !0),
          Gl(e, t, l),
          ($e = a),
          (Nt = n);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        it || la(2, l, t), it || la(4, l, t), Gl(e, t, l);
        break;
      case 1:
        it ||
          (Sl(l, t),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && pd(l, t, a)),
          Gl(e, t, l);
        break;
      case 21:
        Gl(e, t, l);
        break;
      case 22:
        (it = (a = it) || l.memoizedState !== null), Gl(e, t, l), (it = a);
        break;
      default:
        Gl(e, t, l);
    }
  }
  function Dd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Ou(e);
      } catch (l) {
        Ke(t, t.return, l);
      }
  }
  function Iv(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Ed()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Ed()),
          t
        );
      default:
        throw Error(o(435, e.tag));
    }
  }
  function Kc(e, t) {
    var l = Iv(e);
    t.forEach(function (a) {
      var n = cy.bind(null, e, a);
      l.has(a) || (l.add(a), a.then(n, n));
    });
  }
  function Lt(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          i = e,
          s = t,
          d = s;
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (sa(d.type)) {
                ($e = d.stateNode), (Nt = !1);
                break e;
              }
              break;
            case 5:
              ($e = d.stateNode), (Nt = !1);
              break e;
            case 3:
            case 4:
              ($e = d.stateNode.containerInfo), (Nt = !0);
              break e;
          }
          d = d.return;
        }
        if ($e === null) throw Error(o(160));
        Td(i, s, n),
          ($e = null),
          (Nt = !1),
          (i = n.alternate),
          i !== null && (i.return = null),
          (n.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) Md(t, e), (t = t.sibling);
  }
  var sl = null;
  function Md(e, t) {
    var l = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Lt(t, e),
          Bt(e),
          a & 4 && (la(3, e, e.return), mu(3, e), la(5, e, e.return));
        break;
      case 1:
        Lt(t, e),
          Bt(e),
          a & 512 && (it || l === null || Sl(l, l.return)),
          a & 64 &&
            Yl &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? a : l.concat(a)))));
        break;
      case 26:
        var n = sl;
        if (
          (Lt(t, e),
          Bt(e),
          a & 512 && (it || l === null || Sl(l, l.return)),
          a & 4)
        ) {
          var i = l !== null ? l.memoizedState : null;
          if (((a = e.memoizedState), l === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  (a = e.type),
                    (l = e.memoizedProps),
                    (n = n.ownerDocument || n);
                  t: switch (a) {
                    case "title":
                      (i = n.getElementsByTagName("title")[0]),
                        (!i ||
                          i[le] ||
                          i[G] ||
                          i.namespaceURI === "http://www.w3.org/2000/svg" ||
                          i.hasAttribute("itemprop")) &&
                          ((i = n.createElement(a)),
                          n.head.insertBefore(
                            i,
                            n.querySelector("head > title")
                          )),
                        xt(i, a, l),
                        (i[G] = e),
                        Se(i),
                        (a = i);
                      break e;
                    case "link":
                      var s = xh("link", "href", n).get(a + (l.href || ""));
                      if (s) {
                        for (var d = 0; d < s.length; d++)
                          if (
                            ((i = s[d]),
                            i.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              i.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              i.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              i.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            s.splice(d, 1);
                            break t;
                          }
                      }
                      (i = n.createElement(a)),
                        xt(i, a, l),
                        n.head.appendChild(i);
                      break;
                    case "meta":
                      if (
                        (s = xh("meta", "content", n).get(
                          a + (l.content || "")
                        ))
                      ) {
                        for (d = 0; d < s.length; d++)
                          if (
                            ((i = s[d]),
                            i.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              i.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              i.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              i.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              i.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            s.splice(d, 1);
                            break t;
                          }
                      }
                      (i = n.createElement(a)),
                        xt(i, a, l),
                        n.head.appendChild(i);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  (i[G] = e), Se(i), (a = i);
                }
                e.stateNode = a;
              } else Eh(n, e.type, e.stateNode);
            else e.stateNode = Sh(n, a, e.memoizedProps);
          else
            i !== a
              ? (i === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : i.count--,
                a === null
                  ? Eh(n, e.type, e.stateNode)
                  : Sh(n, a, e.memoizedProps))
              : a === null &&
                e.stateNode !== null &&
                Xc(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        Lt(t, e),
          Bt(e),
          a & 512 && (it || l === null || Sl(l, l.return)),
          l !== null && a & 4 && Xc(e, e.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (
          (Lt(t, e),
          Bt(e),
          a & 512 && (it || l === null || Sl(l, l.return)),
          e.flags & 32)
        ) {
          n = e.stateNode;
          try {
            en(n, "");
          } catch (w) {
            Ke(e, e.return, w);
          }
        }
        a & 4 &&
          e.stateNode != null &&
          ((n = e.memoizedProps), Xc(e, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (Zc = !0);
        break;
      case 6:
        if ((Lt(t, e), Bt(e), a & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          (a = e.memoizedProps), (l = e.stateNode);
          try {
            l.nodeValue = a;
          } catch (w) {
            Ke(e, e.return, w);
          }
        }
        break;
      case 3:
        if (
          ((Pi = null),
          (n = sl),
          (sl = Fi(t.containerInfo)),
          Lt(t, e),
          (sl = n),
          Bt(e),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Ou(t.containerInfo);
          } catch (w) {
            Ke(e, e.return, w);
          }
        Zc && ((Zc = !1), jd(e));
        break;
      case 4:
        (a = sl),
          (sl = Fi(e.stateNode.containerInfo)),
          Lt(t, e),
          Bt(e),
          (sl = a);
        break;
      case 12:
        Lt(t, e), Bt(e);
        break;
      case 13:
        Lt(t, e),
          Bt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Pc = wt()),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Kc(e, a)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var p = l !== null && l.memoizedState !== null,
          N = Yl,
          L = it;
        if (
          ((Yl = N || n),
          (it = L || p),
          Lt(t, e),
          (it = L),
          (Yl = N),
          Bt(e),
          a & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = n ? t._visibility & -2 : t._visibility | 1,
              n && (l === null || p || Yl || it || Ga(e)),
              l = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                p = l = t;
                try {
                  if (((i = p.stateNode), n))
                    (s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none");
                  else {
                    d = p.stateNode;
                    var Y = p.memoizedProps.style,
                      z =
                        Y != null && Y.hasOwnProperty("display")
                          ? Y.display
                          : null;
                    d.style.display =
                      z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (w) {
                  Ke(p, p.return, w);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                p = t;
                try {
                  p.stateNode.nodeValue = n ? "" : p.memoizedProps;
                } catch (w) {
                  Ke(p, p.return, w);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), (t = t.return);
            }
            l === t && (l = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), Kc(e, l))));
        break;
      case 19:
        Lt(t, e),
          Bt(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Kc(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Lt(t, e), Bt(e);
    }
  }
  function Bt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (Sd(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(o(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              i = Vc(e);
            Li(e, i, n);
            break;
          case 5:
            var s = l.stateNode;
            l.flags & 32 && (en(s, ""), (l.flags &= -33));
            var d = Vc(e);
            Li(e, d, s);
            break;
          case 3:
          case 4:
            var p = l.stateNode.containerInfo,
              N = Vc(e);
            Qc(e, N, p);
            break;
          default:
            throw Error(o(161));
        }
      } catch (L) {
        Ke(e, e.return, L);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function jd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        jd(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function aa(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) _d(e, t.alternate, t), (t = t.sibling);
  }
  function Ga(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          la(4, t, t.return), Ga(t);
          break;
        case 1:
          Sl(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && pd(t, t.return, l),
            Ga(t);
          break;
        case 27:
          Ru(t.stateNode);
        case 26:
        case 5:
          Sl(t, t.return), Ga(t);
          break;
        case 22:
          t.memoizedState === null && Ga(t);
          break;
        case 30:
          Ga(t);
          break;
        default:
          Ga(t);
      }
      e = e.sibling;
    }
  }
  function na(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        n = e,
        i = t,
        s = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          na(n, i, l), mu(4, i);
          break;
        case 1:
          if (
            (na(n, i, l),
            (a = i),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (N) {
              Ke(a, a.return, N);
            }
          if (((a = i), (n = a.updateQueue), n !== null)) {
            var d = a.stateNode;
            try {
              var p = n.shared.hiddenCallbacks;
              if (p !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < p.length; n++)
                  lf(p[n], d);
            } catch (N) {
              Ke(a, a.return, N);
            }
          }
          l && s & 64 && gd(i), vu(i, i.return);
          break;
        case 27:
          xd(i);
        case 26:
        case 5:
          na(n, i, l), l && a === null && s & 4 && bd(i), vu(i, i.return);
          break;
        case 12:
          na(n, i, l);
          break;
        case 13:
          na(n, i, l), l && s & 4 && Dd(n, i);
          break;
        case 22:
          i.memoizedState === null && na(n, i, l), vu(i, i.return);
          break;
        case 30:
          break;
        default:
          na(n, i, l);
      }
      t = t.sibling;
    }
  }
  function Jc(e, t) {
    var l = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && eu(l));
  }
  function kc(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && eu(e));
  }
  function xl(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Ad(e, t, l, a), (t = t.sibling);
  }
  function Ad(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        xl(e, t, l, a), n & 2048 && mu(9, t);
        break;
      case 1:
        xl(e, t, l, a);
        break;
      case 3:
        xl(e, t, l, a),
          n & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && eu(e)));
        break;
      case 12:
        if (n & 2048) {
          xl(e, t, l, a), (e = t.stateNode);
          try {
            var i = t.memoizedProps,
              s = i.id,
              d = i.onPostCommit;
            typeof d == "function" &&
              d(
                s,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (p) {
            Ke(t, t.return, p);
          }
        } else xl(e, t, l, a);
        break;
      case 13:
        xl(e, t, l, a);
        break;
      case 23:
        break;
      case 22:
        (i = t.stateNode),
          (s = t.alternate),
          t.memoizedState !== null
            ? i._visibility & 2
              ? xl(e, t, l, a)
              : yu(e, t)
            : i._visibility & 2
            ? xl(e, t, l, a)
            : ((i._visibility |= 2),
              Sn(e, t, l, a, (t.subtreeFlags & 10256) !== 0)),
          n & 2048 && Jc(s, t);
        break;
      case 24:
        xl(e, t, l, a), n & 2048 && kc(t.alternate, t);
        break;
      default:
        xl(e, t, l, a);
    }
  }
  function Sn(e, t, l, a, n) {
    for (n = n && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var i = e,
        s = t,
        d = l,
        p = a,
        N = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Sn(i, s, d, p, n), mu(8, s);
          break;
        case 23:
          break;
        case 22:
          var L = s.stateNode;
          s.memoizedState !== null
            ? L._visibility & 2
              ? Sn(i, s, d, p, n)
              : yu(i, s)
            : ((L._visibility |= 2), Sn(i, s, d, p, n)),
            n && N & 2048 && Jc(s.alternate, s);
          break;
        case 24:
          Sn(i, s, d, p, n), n && N & 2048 && kc(s.alternate, s);
          break;
        default:
          Sn(i, s, d, p, n);
      }
      t = t.sibling;
    }
  }
  function yu(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            yu(l, a), n & 2048 && Jc(a.alternate, a);
            break;
          case 24:
            yu(l, a), n & 2048 && kc(a.alternate, a);
            break;
          default:
            yu(l, a);
        }
        t = t.sibling;
      }
  }
  var gu = 8192;
  function xn(e) {
    if (e.subtreeFlags & gu)
      for (e = e.child; e !== null; ) Nd(e), (e = e.sibling);
  }
  function Nd(e) {
    switch (e.tag) {
      case 26:
        xn(e),
          e.flags & gu &&
            e.memoizedState !== null &&
            By(sl, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        xn(e);
        break;
      case 3:
      case 4:
        var t = sl;
        (sl = Fi(e.stateNode.containerInfo)), xn(e), (sl = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = gu), (gu = 16777216), xn(e), (gu = t))
            : xn(e));
        break;
      default:
        xn(e);
    }
  }
  function zd(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function pu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          (yt = a), wd(a, e);
        }
      zd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Od(e), (e = e.sibling);
  }
  function Od(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        pu(e), e.flags & 2048 && la(9, e, e.return);
        break;
      case 3:
        pu(e);
        break;
      case 12:
        pu(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Bi(e))
          : pu(e);
        break;
      default:
        pu(e);
    }
  }
  function Bi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          (yt = a), wd(a, e);
        }
      zd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          la(8, t, t.return), Bi(t);
          break;
        case 22:
          (l = t.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Bi(t));
          break;
        default:
          Bi(t);
      }
      e = e.sibling;
    }
  }
  function wd(e, t) {
    for (; yt !== null; ) {
      var l = yt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          la(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          eu(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) (a.return = l), (yt = a);
      else
        e: for (l = e; yt !== null; ) {
          a = yt;
          var n = a.sibling,
            i = a.return;
          if ((Rd(a), a === l)) {
            yt = null;
            break e;
          }
          if (n !== null) {
            (n.return = i), (yt = n);
            break e;
          }
          yt = i;
        }
    }
  }
  var ey = {
      getCacheForType: function (e) {
        var t = Et(dt),
          l = t.data.get(e);
        return l === void 0 && ((l = e()), t.data.set(e, l)), l;
      },
    },
    ty = typeof WeakMap == "function" ? WeakMap : Map,
    Ye = 0,
    ke = null,
    Ne = null,
    Ce = 0,
    Ge = 0,
    qt = null,
    ua = !1,
    En = !1,
    $c = !1,
    Xl = 0,
    nt = 0,
    ia = 0,
    Xa = 0,
    Fc = 0,
    el = 0,
    _n = 0,
    bu = null,
    zt = null,
    Wc = !1,
    Pc = 0,
    qi = 1 / 0,
    Yi = null,
    ra = null,
    St = 0,
    ca = null,
    Rn = null,
    Tn = 0,
    Ic = 0,
    eo = null,
    Cd = null,
    Su = 0,
    to = null;
  function Yt() {
    if ((Ye & 2) !== 0 && Ce !== 0) return Ce & -Ce;
    if (M.T !== null) {
      var e = dn;
      return e !== 0 ? e : co();
    }
    return x();
  }
  function Ud() {
    el === 0 && (el = (Ce & 536870912) === 0 || He ? Fa() : 536870912);
    var e = It.current;
    return e !== null && (e.flags |= 32), el;
  }
  function Gt(e, t, l) {
    ((e === ke && (Ge === 2 || Ge === 9)) || e.cancelPendingCommit !== null) &&
      (Dn(e, 0), oa(e, Ce, el, !1)),
      Ra(e, l),
      ((Ye & 2) === 0 || e !== ke) &&
        (e === ke &&
          ((Ye & 2) === 0 && (Xa |= l), nt === 4 && oa(e, Ce, el, !1)),
        El(e));
  }
  function Hd(e, t, l) {
    if ((Ye & 6) !== 0) throw Error(o(327));
    var a = (!l && (t & 124) === 0 && (t & e.expiredLanes) === 0) || yl(e, t),
      n = a ? ny(e, t) : no(e, t, !0),
      i = a;
    do {
      if (n === 0) {
        En && !a && oa(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), i && !ly(l))) {
          (n = no(e, t, !1)), (i = !1);
          continue;
        }
        if (n === 2) {
          if (((i = t), e.errorRecoveryDisabledLanes & i)) var s = 0;
          else
            (s = e.pendingLanes & -536870913),
              (s = s !== 0 ? s : s & 536870912 ? 536870912 : 0);
          if (s !== 0) {
            t = s;
            e: {
              var d = e;
              n = bu;
              var p = d.current.memoizedState.isDehydrated;
              if ((p && (Dn(d, s).flags |= 256), (s = no(d, s, !1)), s !== 2)) {
                if ($c && !p) {
                  (d.errorRecoveryDisabledLanes |= i), (Xa |= i), (n = 4);
                  break e;
                }
                (i = zt),
                  (zt = n),
                  i !== null && (zt === null ? (zt = i) : zt.push.apply(zt, i));
              }
              n = s;
            }
            if (((i = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          Dn(e, 0), oa(e, t, 0, !0);
          break;
        }
        e: {
          switch (((a = e), (i = n), i)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              oa(a, t, el, !ua);
              break e;
            case 2:
              zt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && ((n = Pc + 300 - wt()), 10 < n)) {
            if ((oa(a, t, el, !ua), _a(a, 0, !0) !== 0)) break e;
            a.timeoutHandle = fh(
              Ld.bind(null, a, l, zt, Yi, Wc, t, el, Xa, _n, ua, i, 2, -0, 0),
              n
            );
            break e;
          }
          Ld(a, l, zt, Yi, Wc, t, el, Xa, _n, ua, i, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    El(e);
  }
  function Ld(e, t, l, a, n, i, s, d, p, N, L, Y, z, w) {
    if (
      ((e.timeoutHandle = -1),
      (Y = t.subtreeFlags),
      (Y & 8192 || (Y & 16785408) === 16785408) &&
        ((Mu = { stylesheets: null, count: 0, unsuspend: Ly }),
        Nd(t),
        (Y = qy()),
        Y !== null))
    ) {
      (e.cancelPendingCommit = Y(
        Qd.bind(null, e, t, i, l, a, n, s, d, p, L, 1, z, w)
      )),
        oa(e, i, s, !N);
      return;
    }
    Qd(e, t, i, l, a, n, s, d, p);
  }
  function ly(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            i = n.getSnapshot;
          n = n.value;
          try {
            if (!Ut(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
        (l.return = t), (t = l);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function oa(e, t, l, a) {
    (t &= ~Fc),
      (t &= ~Xa),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes);
    for (var n = t; 0 < n; ) {
      var i = 31 - pt(n),
        s = 1 << i;
      (a[i] = -1), (n &= ~s);
    }
    l !== 0 && Ta(e, l, t);
  }
  function Gi() {
    return (Ye & 6) === 0 ? (xu(0), !1) : !0;
  }
  function lo() {
    if (Ne !== null) {
      if (Ge === 0) var e = Ne.return;
      else (e = Ne), (Cl = Ha = null), bc(e), (pn = null), (fu = 0), (e = Ne);
      for (; e !== null; ) yd(e.alternate, e), (e = e.return);
      Ne = null;
    }
  }
  function Dn(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && ((e.timeoutHandle = -1), Sy(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      lo(),
      (ke = e),
      (Ne = l = zl(e.current, null)),
      (Ce = t),
      (Ge = 0),
      (qt = null),
      (ua = !1),
      (En = yl(e, t)),
      ($c = !1),
      (_n = el = Fc = Xa = ia = nt = 0),
      (zt = bu = null),
      (Wc = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - pt(a),
          i = 1 << n;
        (t |= e[n]), (a &= ~i);
      }
    return (Xl = t), oi(), l;
  }
  function Bd(e, t) {
    (De = null),
      (M.H = ji),
      t === lu || t === pi
        ? ((t = ef()), (Ge = 3))
        : t === Ws
        ? ((t = ef()), (Ge = 4))
        : (Ge =
            t === ld
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (qt = t),
      Ne === null && ((nt = 1), wi(e, $t(t, e.current)));
  }
  function qd() {
    var e = M.H;
    return (M.H = ji), e === null ? ji : e;
  }
  function Yd() {
    var e = M.A;
    return (M.A = ey), e;
  }
  function ao() {
    (nt = 4),
      ua || ((Ce & 4194048) !== Ce && It.current !== null) || (En = !0),
      ((ia & 134217727) === 0 && (Xa & 134217727) === 0) ||
        ke === null ||
        oa(ke, Ce, el, !1);
  }
  function no(e, t, l) {
    var a = Ye;
    Ye |= 2;
    var n = qd(),
      i = Yd();
    (ke !== e || Ce !== t) && ((Yi = null), Dn(e, t)), (t = !1);
    var s = nt;
    e: do
      try {
        if (Ge !== 0 && Ne !== null) {
          var d = Ne,
            p = qt;
          switch (Ge) {
            case 8:
              lo(), (s = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              It.current === null && (t = !0);
              var N = Ge;
              if (((Ge = 0), (qt = null), Mn(e, d, p, N), l && En)) {
                s = 0;
                break e;
              }
              break;
            default:
              (N = Ge), (Ge = 0), (qt = null), Mn(e, d, p, N);
          }
        }
        ay(), (s = nt);
        break;
      } catch (L) {
        Bd(e, L);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Cl = Ha = null),
      (Ye = a),
      (M.H = n),
      (M.A = i),
      Ne === null && ((ke = null), (Ce = 0), oi()),
      s
    );
  }
  function ay() {
    for (; Ne !== null; ) Gd(Ne);
  }
  function ny(e, t) {
    var l = Ye;
    Ye |= 2;
    var a = qd(),
      n = Yd();
    ke !== e || Ce !== t
      ? ((Yi = null), (qi = wt() + 500), Dn(e, t))
      : (En = yl(e, t));
    e: do
      try {
        if (Ge !== 0 && Ne !== null) {
          t = Ne;
          var i = qt;
          t: switch (Ge) {
            case 1:
              (Ge = 0), (qt = null), Mn(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (Ps(i)) {
                (Ge = 0), (qt = null), Xd(t);
                break;
              }
              (t = function () {
                (Ge !== 2 && Ge !== 9) || ke !== e || (Ge = 7), El(e);
              }),
                i.then(t, t);
              break e;
            case 3:
              Ge = 7;
              break e;
            case 4:
              Ge = 5;
              break e;
            case 7:
              Ps(i)
                ? ((Ge = 0), (qt = null), Xd(t))
                : ((Ge = 0), (qt = null), Mn(e, t, i, 7));
              break;
            case 5:
              var s = null;
              switch (Ne.tag) {
                case 26:
                  s = Ne.memoizedState;
                case 5:
                case 27:
                  var d = Ne;
                  if (!s || _h(s)) {
                    (Ge = 0), (qt = null);
                    var p = d.sibling;
                    if (p !== null) Ne = p;
                    else {
                      var N = d.return;
                      N !== null ? ((Ne = N), Xi(N)) : (Ne = null);
                    }
                    break t;
                  }
              }
              (Ge = 0), (qt = null), Mn(e, t, i, 5);
              break;
            case 6:
              (Ge = 0), (qt = null), Mn(e, t, i, 6);
              break;
            case 8:
              lo(), (nt = 6);
              break e;
            default:
              throw Error(o(462));
          }
        }
        uy();
        break;
      } catch (L) {
        Bd(e, L);
      }
    while (!0);
    return (
      (Cl = Ha = null),
      (M.H = a),
      (M.A = n),
      (Ye = l),
      Ne !== null ? 0 : ((ke = null), (Ce = 0), oi(), nt)
    );
  }
  function uy() {
    for (; Ne !== null && !Rr(); ) Gd(Ne);
  }
  function Gd(e) {
    var t = md(e.alternate, e, Xl);
    (e.memoizedProps = e.pendingProps), t === null ? Xi(e) : (Ne = t);
  }
  function Xd(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = cd(l, t, t.pendingProps, t.type, void 0, Ce);
        break;
      case 11:
        t = cd(l, t, t.pendingProps, t.type.render, t.ref, Ce);
        break;
      case 5:
        bc(t);
      default:
        yd(l, t), (t = Ne = Xs(t, Xl)), (t = md(l, t, Xl));
    }
    (e.memoizedProps = e.pendingProps), t === null ? Xi(e) : (Ne = t);
  }
  function Mn(e, t, l, a) {
    (Cl = Ha = null), bc(t), (pn = null), (fu = 0);
    var n = t.return;
    try {
      if (kv(e, n, t, l, Ce)) {
        (nt = 1), wi(e, $t(l, e.current)), (Ne = null);
        return;
      }
    } catch (i) {
      if (n !== null) throw ((Ne = n), i);
      (nt = 1), wi(e, $t(l, e.current)), (Ne = null);
      return;
    }
    t.flags & 32768
      ? (He || a === 1
          ? (e = !0)
          : En || (Ce & 536870912) !== 0
          ? (e = !1)
          : ((ua = e = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = It.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        Vd(t, e))
      : Xi(t);
  }
  function Xi(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Vd(t, ua);
        return;
      }
      e = t.return;
      var l = Fv(t.alternate, t, Xl);
      if (l !== null) {
        Ne = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ne = t;
        return;
      }
      Ne = t = e;
    } while (t !== null);
    nt === 0 && (nt = 5);
  }
  function Vd(e, t) {
    do {
      var l = Wv(e.alternate, e);
      if (l !== null) {
        (l.flags &= 32767), (Ne = l);
        return;
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Ne = e;
        return;
      }
      Ne = e = l;
    } while (e !== null);
    (nt = 6), (Ne = null);
  }
  function Qd(e, t, l, a, n, i, s, d, p) {
    e.cancelPendingCommit = null;
    do Vi();
    while (St !== 0);
    if ((Ye & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (
        ((i = t.lanes | t.childLanes),
        (i |= kr),
        Wu(e, l, i, s, d, p),
        e === ke && ((Ne = ke = null), (Ce = 0)),
        (Rn = t),
        (ca = e),
        (Tn = l),
        (Ic = i),
        (eo = n),
        (Cd = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            oy($a, function () {
              return $d(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = M.T), (M.T = null), (n = V.p), (V.p = 2), (s = Ye), (Ye |= 4);
        try {
          Pv(e, t, l);
        } finally {
          (Ye = s), (V.p = n), (M.T = a);
        }
      }
      (St = 1), Zd(), Kd(), Jd();
    }
  }
  function Zd() {
    if (St === 1) {
      St = 0;
      var e = ca,
        t = Rn,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        (l = M.T), (M.T = null);
        var a = V.p;
        V.p = 2;
        var n = Ye;
        Ye |= 4;
        try {
          Md(t, e);
          var i = go,
            s = Os(e.containerInfo),
            d = i.focusedElem,
            p = i.selectionRange;
          if (
            s !== d &&
            d &&
            d.ownerDocument &&
            zs(d.ownerDocument.documentElement, d)
          ) {
            if (p !== null && Vr(d)) {
              var N = p.start,
                L = p.end;
              if ((L === void 0 && (L = N), "selectionStart" in d))
                (d.selectionStart = N),
                  (d.selectionEnd = Math.min(L, d.value.length));
              else {
                var Y = d.ownerDocument || document,
                  z = (Y && Y.defaultView) || window;
                if (z.getSelection) {
                  var w = z.getSelection(),
                    ye = d.textContent.length,
                    fe = Math.min(p.start, ye),
                    Ze = p.end === void 0 ? fe : Math.min(p.end, ye);
                  !w.extend && fe > Ze && ((s = Ze), (Ze = fe), (fe = s));
                  var T = Ns(d, fe),
                    _ = Ns(d, Ze);
                  if (
                    T &&
                    _ &&
                    (w.rangeCount !== 1 ||
                      w.anchorNode !== T.node ||
                      w.anchorOffset !== T.offset ||
                      w.focusNode !== _.node ||
                      w.focusOffset !== _.offset)
                  ) {
                    var j = Y.createRange();
                    j.setStart(T.node, T.offset),
                      w.removeAllRanges(),
                      fe > Ze
                        ? (w.addRange(j), w.extend(_.node, _.offset))
                        : (j.setEnd(_.node, _.offset), w.addRange(j));
                  }
                }
              }
            }
            for (Y = [], w = d; (w = w.parentNode); )
              w.nodeType === 1 &&
                Y.push({ element: w, left: w.scrollLeft, top: w.scrollTop });
            for (
              typeof d.focus == "function" && d.focus(), d = 0;
              d < Y.length;
              d++
            ) {
              var q = Y[d];
              (q.element.scrollLeft = q.left), (q.element.scrollTop = q.top);
            }
          }
          (tr = !!yo), (go = yo = null);
        } finally {
          (Ye = n), (V.p = a), (M.T = l);
        }
      }
      (e.current = t), (St = 2);
    }
  }
  function Kd() {
    if (St === 2) {
      St = 0;
      var e = ca,
        t = Rn,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        (l = M.T), (M.T = null);
        var a = V.p;
        V.p = 2;
        var n = Ye;
        Ye |= 4;
        try {
          _d(e, t.alternate, t);
        } finally {
          (Ye = n), (V.p = a), (M.T = l);
        }
      }
      St = 3;
    }
  }
  function Jd() {
    if (St === 4 || St === 3) {
      (St = 0), Tr();
      var e = ca,
        t = Rn,
        l = Tn,
        a = Cd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (St = 5)
        : ((St = 0), (Rn = ca = null), kd(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (
        (n === 0 && (ra = null),
        Yn(l),
        (t = t.stateNode),
        Pe && typeof Pe.onCommitFiberRoot == "function")
      )
        try {
          Pe.onCommitFiberRoot(Mt, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (t = M.T), (n = V.p), (V.p = 2), (M.T = null);
        try {
          for (var i = e.onRecoverableError, s = 0; s < a.length; s++) {
            var d = a[s];
            i(d.value, { componentStack: d.stack });
          }
        } finally {
          (M.T = t), (V.p = n);
        }
      }
      (Tn & 3) !== 0 && Vi(),
        El(e),
        (n = e.pendingLanes),
        (l & 4194090) !== 0 && (n & 42) !== 0
          ? e === to
            ? Su++
            : ((Su = 0), (to = e))
          : (Su = 0),
        xu(0);
    }
  }
  function kd(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), eu(t)));
  }
  function Vi(e) {
    return Zd(), Kd(), Jd(), $d();
  }
  function $d() {
    if (St !== 5) return !1;
    var e = ca,
      t = Ic;
    Ic = 0;
    var l = Yn(Tn),
      a = M.T,
      n = V.p;
    try {
      (V.p = 32 > l ? 32 : l), (M.T = null), (l = eo), (eo = null);
      var i = ca,
        s = Tn;
      if (((St = 0), (Rn = ca = null), (Tn = 0), (Ye & 6) !== 0))
        throw Error(o(331));
      var d = Ye;
      if (
        ((Ye |= 4),
        Od(i.current),
        Ad(i, i.current, s, l),
        (Ye = d),
        xu(0, !1),
        Pe && typeof Pe.onPostCommitFiberRoot == "function")
      )
        try {
          Pe.onPostCommitFiberRoot(Mt, i);
        } catch {}
      return !0;
    } finally {
      (V.p = n), (M.T = a), kd(e, t);
    }
  }
  function Fd(e, t, l) {
    (t = $t(l, t)),
      (t = wc(e.stateNode, t, 2)),
      (e = Pl(e, t, 2)),
      e !== null && (Ra(e, 2), El(e));
  }
  function Ke(e, t, l) {
    if (e.tag === 3) Fd(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Fd(t, e, l);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (ra === null || !ra.has(a)))
          ) {
            (e = $t(l, e)),
              (l = ed(2)),
              (a = Pl(t, l, 2)),
              a !== null && (td(l, a, t, e), Ra(a, 2), El(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function uo(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new ty();
      var n = new Set();
      a.set(t, n);
    } else (n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n));
    n.has(l) ||
      (($c = !0), n.add(l), (e = iy.bind(null, e, t, l)), t.then(e, e));
  }
  function iy(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      ke === e &&
        (Ce & l) === l &&
        (nt === 4 || (nt === 3 && (Ce & 62914560) === Ce && 300 > wt() - Pc)
          ? (Ye & 2) === 0 && Dn(e, 0)
          : (Fc |= l),
        _n === Ce && (_n = 0)),
      El(e);
  }
  function Wd(e, t) {
    t === 0 && (t = Fu()), (e = cn(e, t)), e !== null && (Ra(e, t), El(e));
  }
  function ry(e) {
    var t = e.memoizedState,
      l = 0;
    t !== null && (l = t.retryLane), Wd(e, l);
  }
  function cy(e, t) {
    var l = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode,
          n = e.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    a !== null && a.delete(t), Wd(e, l);
  }
  function oy(e, t) {
    return Ln(e, t);
  }
  var Qi = null,
    jn = null,
    io = !1,
    Zi = !1,
    ro = !1,
    Va = 0;
  function El(e) {
    e !== jn &&
      e.next === null &&
      (jn === null ? (Qi = jn = e) : (jn = jn.next = e)),
      (Zi = !0),
      io || ((io = !0), fy());
  }
  function xu(e, t) {
    if (!ro && Zi) {
      ro = !0;
      do
        for (var l = !1, a = Qi; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var s = a.suspendedLanes,
                d = a.pingedLanes;
              (i = (1 << (31 - pt(42 | e) + 1)) - 1),
                (i &= n & ~(s & ~d)),
                (i = i & 201326741 ? (i & 201326741) | 1 : i ? i | 2 : 0);
            }
            i !== 0 && ((l = !0), th(a, i));
          } else
            (i = Ce),
              (i = _a(
                a,
                a === ke ? i : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (i & 3) === 0 || yl(a, i) || ((l = !0), th(a, i));
          a = a.next;
        }
      while (l);
      ro = !1;
    }
  }
  function sy() {
    Pd();
  }
  function Pd() {
    Zi = io = !1;
    var e = 0;
    Va !== 0 && (by() && (e = Va), (Va = 0));
    for (var t = wt(), l = null, a = Qi; a !== null; ) {
      var n = a.next,
        i = Id(a, t);
      i === 0
        ? ((a.next = null),
          l === null ? (Qi = n) : (l.next = n),
          n === null && (jn = l))
        : ((l = a), (e !== 0 || (i & 3) !== 0) && (Zi = !0)),
        (a = n);
    }
    xu(e);
  }
  function Id(e, t) {
    for (
      var l = e.suspendedLanes,
        a = e.pingedLanes,
        n = e.expirationTimes,
        i = e.pendingLanes & -62914561;
      0 < i;

    ) {
      var s = 31 - pt(i),
        d = 1 << s,
        p = n[s];
      p === -1
        ? ((d & l) === 0 || (d & a) !== 0) && (n[s] = $u(d, t))
        : p <= t && (e.expiredLanes |= d),
        (i &= ~d);
    }
    if (
      ((t = ke),
      (l = Ce),
      (l = _a(
        e,
        e === t ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (a = e.callbackNode),
      l === 0 ||
        (e === t && (Ge === 2 || Ge === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && rl(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((l & 3) === 0 || yl(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((a !== null && rl(a), Yn(l))) {
        case 2:
        case 8:
          l = Ku;
          break;
        case 32:
          l = $a;
          break;
        case 268435456:
          l = Zl;
          break;
        default:
          l = $a;
      }
      return (
        (a = eh.bind(null, e)),
        (l = Ln(l, a)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      a !== null && a !== null && rl(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function eh(e, t) {
    if (St !== 0 && St !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var l = e.callbackNode;
    if (Vi() && e.callbackNode !== l) return null;
    var a = Ce;
    return (
      (a = _a(
        e,
        e === ke ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (Hd(e, a, t),
          Id(e, wt()),
          e.callbackNode != null && e.callbackNode === l
            ? eh.bind(null, e)
            : null)
    );
  }
  function th(e, t) {
    if (Vi()) return null;
    Hd(e, t, !0);
  }
  function fy() {
    xy(function () {
      (Ye & 6) !== 0 ? Ln(Zu, sy) : Pd();
    });
  }
  function co() {
    return Va === 0 && (Va = Fa()), Va;
  }
  function lh(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : li("" + e);
  }
  function ah(e, t) {
    var l = t.ownerDocument.createElement("input");
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute("form", e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function dy(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var i = lh((n[Z] || null).action),
        s = a.submitter;
      s &&
        ((t = (t = s[Z] || null)
          ? lh(t.formAction)
          : s.getAttribute("formAction")),
        t !== null && ((i = t), (s = null)));
      var d = new ii("action", "action", null, a, n);
      e.push({
        event: d,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Va !== 0) {
                  var p = s ? ah(n, s) : new FormData(n);
                  jc(
                    l,
                    { pending: !0, data: p, method: n.method, action: i },
                    null,
                    p
                  );
                }
              } else
                typeof i == "function" &&
                  (d.preventDefault(),
                  (p = s ? ah(n, s) : new FormData(n)),
                  jc(
                    l,
                    { pending: !0, data: p, method: n.method, action: i },
                    i,
                    p
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var oo = 0; oo < Jr.length; oo++) {
    var so = Jr[oo],
      hy = so.toLowerCase(),
      my = so[0].toUpperCase() + so.slice(1);
    ol(hy, "on" + my);
  }
  ol(Us, "onAnimationEnd"),
    ol(Hs, "onAnimationIteration"),
    ol(Ls, "onAnimationStart"),
    ol("dblclick", "onDoubleClick"),
    ol("focusin", "onFocus"),
    ol("focusout", "onBlur"),
    ol(zv, "onTransitionRun"),
    ol(Ov, "onTransitionStart"),
    ol(wv, "onTransitionCancel"),
    ol(Bs, "onTransitionEnd"),
    Tt("onMouseEnter", ["mouseout", "mouseover"]),
    Tt("onMouseLeave", ["mouseout", "mouseover"]),
    Tt("onPointerEnter", ["pointerout", "pointerover"]),
    Tt("onPointerLeave", ["pointerout", "pointerover"]),
    Ct(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Ct(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Ct("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ct(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ct(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ct(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Eu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    vy = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Eu)
    );
  function nh(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        n = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var s = a.length - 1; 0 <= s; s--) {
            var d = a[s],
              p = d.instance,
              N = d.currentTarget;
            if (((d = d.listener), p !== i && n.isPropagationStopped()))
              break e;
            (i = d), (n.currentTarget = N);
            try {
              i(n);
            } catch (L) {
              Oi(L);
            }
            (n.currentTarget = null), (i = p);
          }
        else
          for (s = 0; s < a.length; s++) {
            if (
              ((d = a[s]),
              (p = d.instance),
              (N = d.currentTarget),
              (d = d.listener),
              p !== i && n.isPropagationStopped())
            )
              break e;
            (i = d), (n.currentTarget = N);
            try {
              i(n);
            } catch (L) {
              Oi(L);
            }
            (n.currentTarget = null), (i = p);
          }
      }
    }
  }
  function ze(e, t) {
    var l = t[ne];
    l === void 0 && (l = t[ne] = new Set());
    var a = e + "__bubble";
    l.has(a) || (uh(t, e, 2, !1), l.add(a));
  }
  function fo(e, t, l) {
    var a = 0;
    t && (a |= 4), uh(l, e, a, t);
  }
  var Ki = "_reactListening" + Math.random().toString(36).slice(2);
  function ho(e) {
    if (!e[Ki]) {
      (e[Ki] = !0),
        Xe.forEach(function (l) {
          l !== "selectionchange" && (vy.has(l) || fo(l, !1, e), fo(l, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ki] || ((t[Ki] = !0), fo("selectionchange", !1, t));
    }
  }
  function uh(e, t, l, a) {
    switch (Ah(t)) {
      case 2:
        var n = Xy;
        break;
      case 8:
        n = Vy;
        break;
      default:
        n = Mo;
    }
    (l = n.bind(null, t, l, e)),
      (n = void 0),
      !Cr ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: n })
          : e.addEventListener(t, l, !0)
        : n !== void 0
        ? e.addEventListener(t, l, { passive: n })
        : e.addEventListener(t, l, !1);
  }
  function mo(e, t, l, a, n) {
    var i = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var s = a.tag;
        if (s === 3 || s === 4) {
          var d = a.stateNode.containerInfo;
          if (d === n) break;
          if (s === 4)
            for (s = a.return; s !== null; ) {
              var p = s.tag;
              if ((p === 3 || p === 4) && s.stateNode.containerInfo === n)
                return;
              s = s.return;
            }
          for (; d !== null; ) {
            if (((s = Re(d)), s === null)) return;
            if (((p = s.tag), p === 5 || p === 6 || p === 26 || p === 27)) {
              a = i = s;
              continue e;
            }
            d = d.parentNode;
          }
        }
        a = a.return;
      }
    fs(function () {
      var N = i,
        L = Or(l),
        Y = [];
      e: {
        var z = qs.get(e);
        if (z !== void 0) {
          var w = ii,
            ye = e;
          switch (e) {
            case "keypress":
              if (ni(l) === 0) break e;
            case "keydown":
            case "keyup":
              w = ov;
              break;
            case "focusin":
              (ye = "focus"), (w = Br);
              break;
            case "focusout":
              (ye = "blur"), (w = Br);
              break;
            case "beforeblur":
            case "afterblur":
              w = Br;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              w = ms;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              w = Wm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              w = dv;
              break;
            case Us:
            case Hs:
            case Ls:
              w = ev;
              break;
            case Bs:
              w = mv;
              break;
            case "scroll":
            case "scrollend":
              w = $m;
              break;
            case "wheel":
              w = yv;
              break;
            case "copy":
            case "cut":
            case "paste":
              w = lv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              w = ys;
              break;
            case "toggle":
            case "beforetoggle":
              w = pv;
          }
          var fe = (t & 4) !== 0,
            Ze = !fe && (e === "scroll" || e === "scrollend"),
            T = fe ? (z !== null ? z + "Capture" : null) : z;
          fe = [];
          for (var _ = N, j; _ !== null; ) {
            var q = _;
            if (
              ((j = q.stateNode),
              (q = q.tag),
              (q !== 5 && q !== 26 && q !== 27) ||
                j === null ||
                T === null ||
                ((q = Gn(_, T)), q != null && fe.push(_u(_, q, j))),
              Ze)
            )
              break;
            _ = _.return;
          }
          0 < fe.length &&
            ((z = new w(z, ye, null, l, L)),
            Y.push({ event: z, listeners: fe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((z = e === "mouseover" || e === "pointerover"),
            (w = e === "mouseout" || e === "pointerout"),
            z &&
              l !== zr &&
              (ye = l.relatedTarget || l.fromElement) &&
              (Re(ye) || ye[ee]))
          )
            break e;
          if (
            (w || z) &&
            ((z =
              L.window === L
                ? L
                : (z = L.ownerDocument)
                ? z.defaultView || z.parentWindow
                : window),
            w
              ? ((ye = l.relatedTarget || l.toElement),
                (w = N),
                (ye = ye ? Re(ye) : null),
                ye !== null &&
                  ((Ze = h(ye)),
                  (fe = ye.tag),
                  ye !== Ze || (fe !== 5 && fe !== 27 && fe !== 6)) &&
                  (ye = null))
              : ((w = null), (ye = N)),
            w !== ye)
          ) {
            if (
              ((fe = ms),
              (q = "onMouseLeave"),
              (T = "onMouseEnter"),
              (_ = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((fe = ys),
                (q = "onPointerLeave"),
                (T = "onPointerEnter"),
                (_ = "pointer")),
              (Ze = w == null ? z : tt(w)),
              (j = ye == null ? z : tt(ye)),
              (z = new fe(q, _ + "leave", w, l, L)),
              (z.target = Ze),
              (z.relatedTarget = j),
              (q = null),
              Re(L) === N &&
                ((fe = new fe(T, _ + "enter", ye, l, L)),
                (fe.target = j),
                (fe.relatedTarget = Ze),
                (q = fe)),
              (Ze = q),
              w && ye)
            )
              t: {
                for (fe = w, T = ye, _ = 0, j = fe; j; j = An(j)) _++;
                for (j = 0, q = T; q; q = An(q)) j++;
                for (; 0 < _ - j; ) (fe = An(fe)), _--;
                for (; 0 < j - _; ) (T = An(T)), j--;
                for (; _--; ) {
                  if (fe === T || (T !== null && fe === T.alternate)) break t;
                  (fe = An(fe)), (T = An(T));
                }
                fe = null;
              }
            else fe = null;
            w !== null && ih(Y, z, w, fe, !1),
              ye !== null && Ze !== null && ih(Y, Ze, ye, fe, !0);
          }
        }
        e: {
          if (
            ((z = N ? tt(N) : window),
            (w = z.nodeName && z.nodeName.toLowerCase()),
            w === "select" || (w === "input" && z.type === "file"))
          )
            var I = Rs;
          else if (Es(z))
            if (Ts) I = jv;
            else {
              I = Dv;
              var Me = Tv;
            }
          else
            (w = z.nodeName),
              !w ||
              w.toLowerCase() !== "input" ||
              (z.type !== "checkbox" && z.type !== "radio")
                ? N && Nr(N.elementType) && (I = Rs)
                : (I = Mv);
          if (I && (I = I(e, N))) {
            _s(Y, I, l, L);
            break e;
          }
          Me && Me(e, z, N),
            e === "focusout" &&
              N &&
              z.type === "number" &&
              N.memoizedProps.value != null &&
              Ar(z, "number", z.value);
        }
        switch (((Me = N ? tt(N) : window), e)) {
          case "focusin":
            (Es(Me) || Me.contentEditable === "true") &&
              ((nn = Me), (Qr = N), ($n = null));
            break;
          case "focusout":
            $n = Qr = nn = null;
            break;
          case "mousedown":
            Zr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Zr = !1), ws(Y, l, L);
            break;
          case "selectionchange":
            if (Nv) break;
          case "keydown":
          case "keyup":
            ws(Y, l, L);
        }
        var ie;
        if (Yr)
          e: {
            switch (e) {
              case "compositionstart":
                var me = "onCompositionStart";
                break e;
              case "compositionend":
                me = "onCompositionEnd";
                break e;
              case "compositionupdate":
                me = "onCompositionUpdate";
                break e;
            }
            me = void 0;
          }
        else
          an
            ? Ss(e, l) && (me = "onCompositionEnd")
            : e === "keydown" &&
              l.keyCode === 229 &&
              (me = "onCompositionStart");
        me &&
          (gs &&
            l.locale !== "ko" &&
            (an || me !== "onCompositionStart"
              ? me === "onCompositionEnd" && an && (ie = ds())
              : ((kl = L),
                (Ur = "value" in kl ? kl.value : kl.textContent),
                (an = !0))),
          (Me = Ji(N, me)),
          0 < Me.length &&
            ((me = new vs(me, e, null, l, L)),
            Y.push({ event: me, listeners: Me }),
            ie
              ? (me.data = ie)
              : ((ie = xs(l)), ie !== null && (me.data = ie)))),
          (ie = Sv ? xv(e, l) : Ev(e, l)) &&
            ((me = Ji(N, "onBeforeInput")),
            0 < me.length &&
              ((Me = new vs("onBeforeInput", "beforeinput", null, l, L)),
              Y.push({ event: Me, listeners: me }),
              (Me.data = ie))),
          dy(Y, e, N, l, L);
      }
      nh(Y, t);
    });
  }
  function _u(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function Ji(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var n = e,
        i = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          i === null ||
          ((n = Gn(e, l)),
          n != null && a.unshift(_u(e, n, i)),
          (n = Gn(e, t)),
          n != null && a.push(_u(e, n, i))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function An(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function ih(e, t, l, a, n) {
    for (var i = t._reactName, s = []; l !== null && l !== a; ) {
      var d = l,
        p = d.alternate,
        N = d.stateNode;
      if (((d = d.tag), p !== null && p === a)) break;
      (d !== 5 && d !== 26 && d !== 27) ||
        N === null ||
        ((p = N),
        n
          ? ((N = Gn(l, i)), N != null && s.unshift(_u(l, N, p)))
          : n || ((N = Gn(l, i)), N != null && s.push(_u(l, N, p)))),
        (l = l.return);
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var yy = /\r\n?/g,
    gy = /\u0000|\uFFFD/g;
  function rh(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        yy,
        `
`
      )
      .replace(gy, "");
  }
  function ch(e, t) {
    return (t = rh(t)), rh(e) === t;
  }
  function ki() {}
  function Qe(e, t, l, a, n, i) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || en(e, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            en(e, "" + a);
        break;
      case "className":
        Al(e, "class", a);
        break;
      case "tabIndex":
        Al(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Al(e, l, a);
        break;
      case "style":
        os(e, a, i);
        break;
      case "data":
        if (t !== "object") {
          Al(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          e.removeAttribute(l);
          break;
        }
        (a = li("" + a)), e.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" &&
            (l === "formAction"
              ? (t !== "input" && Qe(e, t, "name", n.name, n, null),
                Qe(e, t, "formEncType", n.formEncType, n, null),
                Qe(e, t, "formMethod", n.formMethod, n, null),
                Qe(e, t, "formTarget", n.formTarget, n, null))
              : (Qe(e, t, "encType", n.encType, n, null),
                Qe(e, t, "method", n.method, n, null),
                Qe(e, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        (a = li("" + a)), e.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (e.onclick = ki);
        break;
      case "onScroll":
        a != null && ze("scroll", e);
        break;
      case "onScrollEnd":
        a != null && ze("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(o(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
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
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (l = li("" + a)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "" + a)
          : e.removeAttribute(l);
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
        a && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "")
          : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? e.setAttribute(l, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? e.setAttribute(l, a)
          : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? e.setAttribute(l, a)
          : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? e.removeAttribute(l)
          : e.setAttribute(l, a);
        break;
      case "popover":
        ze("beforetoggle", e), ze("toggle", e), jl(e, "popover", a);
        break;
      case "xlinkActuate":
        Te(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Te(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Te(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Te(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Te(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Te(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Te(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Te(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Te(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        jl(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = Jm.get(l) || l), jl(e, l, a));
    }
  }
  function vo(e, t, l, a, n, i) {
    switch (l) {
      case "style":
        os(e, a, i);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(o(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? en(e, a)
          : (typeof a == "number" || typeof a == "bigint") && en(e, "" + a);
        break;
      case "onScroll":
        a != null && ze("scroll", e);
        break;
      case "onScrollEnd":
        a != null && ze("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = ki);
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
        if (!gl.hasOwnProperty(l))
          e: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((n = l.endsWith("Capture")),
              (t = l.slice(2, n ? l.length - 7 : void 0)),
              (i = e[Z] || null),
              (i = i != null ? i[l] : null),
              typeof i == "function" && e.removeEventListener(t, i, n),
              typeof a == "function")
            ) {
              typeof i != "function" &&
                i !== null &&
                (l in e
                  ? (e[l] = null)
                  : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, a, n);
              break e;
            }
            l in e
              ? (e[l] = a)
              : a === !0
              ? e.setAttribute(l, "")
              : jl(e, l, a);
          }
    }
  }
  function xt(e, t, l) {
    switch (t) {
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
        ze("error", e), ze("load", e);
        var a = !1,
          n = !1,
          i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var s = l[i];
            if (s != null)
              switch (i) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  Qe(e, t, i, s, l, null);
              }
          }
        n && Qe(e, t, "srcSet", l.srcSet, l, null),
          a && Qe(e, t, "src", l.src, l, null);
        return;
      case "input":
        ze("invalid", e);
        var d = (i = s = n = null),
          p = null,
          N = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var L = l[a];
            if (L != null)
              switch (a) {
                case "name":
                  n = L;
                  break;
                case "type":
                  s = L;
                  break;
                case "checked":
                  p = L;
                  break;
                case "defaultChecked":
                  N = L;
                  break;
                case "value":
                  i = L;
                  break;
                case "defaultValue":
                  d = L;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (L != null) throw Error(o(137, t));
                  break;
                default:
                  Qe(e, t, a, L, l, null);
              }
          }
        us(e, i, d, p, N, s, n, !1), ei(e);
        return;
      case "select":
        ze("invalid", e), (a = s = i = null);
        for (n in l)
          if (l.hasOwnProperty(n) && ((d = l[n]), d != null))
            switch (n) {
              case "value":
                i = d;
                break;
              case "defaultValue":
                s = d;
                break;
              case "multiple":
                a = d;
              default:
                Qe(e, t, n, d, l, null);
            }
        (t = i),
          (l = s),
          (e.multiple = !!a),
          t != null ? Ia(e, !!a, t, !1) : l != null && Ia(e, !!a, l, !0);
        return;
      case "textarea":
        ze("invalid", e), (i = n = a = null);
        for (s in l)
          if (l.hasOwnProperty(s) && ((d = l[s]), d != null))
            switch (s) {
              case "value":
                a = d;
                break;
              case "defaultValue":
                n = d;
                break;
              case "children":
                i = d;
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(o(91));
                break;
              default:
                Qe(e, t, s, d, l, null);
            }
        rs(e, a, n, i), ei(e);
        return;
      case "option":
        for (p in l)
          if (l.hasOwnProperty(p) && ((a = l[p]), a != null))
            switch (p) {
              case "selected":
                e.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                Qe(e, t, p, a, l, null);
            }
        return;
      case "dialog":
        ze("beforetoggle", e), ze("toggle", e), ze("cancel", e), ze("close", e);
        break;
      case "iframe":
      case "object":
        ze("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Eu.length; a++) ze(Eu[a], e);
        break;
      case "image":
        ze("error", e), ze("load", e);
        break;
      case "details":
        ze("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        ze("error", e), ze("load", e);
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
        for (N in l)
          if (l.hasOwnProperty(N) && ((a = l[N]), a != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                Qe(e, t, N, a, l, null);
            }
        return;
      default:
        if (Nr(t)) {
          for (L in l)
            l.hasOwnProperty(L) &&
              ((a = l[L]), a !== void 0 && vo(e, t, L, a, l, void 0));
          return;
        }
    }
    for (d in l)
      l.hasOwnProperty(d) && ((a = l[d]), a != null && Qe(e, t, d, a, l, null));
  }
  function py(e, t, l, a) {
    switch (t) {
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
        var n = null,
          i = null,
          s = null,
          d = null,
          p = null,
          N = null,
          L = null;
        for (w in l) {
          var Y = l[w];
          if (l.hasOwnProperty(w) && Y != null)
            switch (w) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                p = Y;
              default:
                a.hasOwnProperty(w) || Qe(e, t, w, null, a, Y);
            }
        }
        for (var z in a) {
          var w = a[z];
          if (((Y = l[z]), a.hasOwnProperty(z) && (w != null || Y != null)))
            switch (z) {
              case "type":
                i = w;
                break;
              case "name":
                n = w;
                break;
              case "checked":
                N = w;
                break;
              case "defaultChecked":
                L = w;
                break;
              case "value":
                s = w;
                break;
              case "defaultValue":
                d = w;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(o(137, t));
                break;
              default:
                w !== Y && Qe(e, t, z, w, a, Y);
            }
        }
        jr(e, s, d, p, N, L, i, n);
        return;
      case "select":
        w = s = d = z = null;
        for (i in l)
          if (((p = l[i]), l.hasOwnProperty(i) && p != null))
            switch (i) {
              case "value":
                break;
              case "multiple":
                w = p;
              default:
                a.hasOwnProperty(i) || Qe(e, t, i, null, a, p);
            }
        for (n in a)
          if (
            ((i = a[n]),
            (p = l[n]),
            a.hasOwnProperty(n) && (i != null || p != null))
          )
            switch (n) {
              case "value":
                z = i;
                break;
              case "defaultValue":
                d = i;
                break;
              case "multiple":
                s = i;
              default:
                i !== p && Qe(e, t, n, i, a, p);
            }
        (t = d),
          (l = s),
          (a = w),
          z != null
            ? Ia(e, !!l, z, !1)
            : !!a != !!l &&
              (t != null ? Ia(e, !!l, t, !0) : Ia(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        w = z = null;
        for (d in l)
          if (
            ((n = l[d]),
            l.hasOwnProperty(d) && n != null && !a.hasOwnProperty(d))
          )
            switch (d) {
              case "value":
                break;
              case "children":
                break;
              default:
                Qe(e, t, d, null, a, n);
            }
        for (s in a)
          if (
            ((n = a[s]),
            (i = l[s]),
            a.hasOwnProperty(s) && (n != null || i != null))
          )
            switch (s) {
              case "value":
                z = n;
                break;
              case "defaultValue":
                w = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(o(91));
                break;
              default:
                n !== i && Qe(e, t, s, n, a, i);
            }
        is(e, z, w);
        return;
      case "option":
        for (var ye in l)
          if (
            ((z = l[ye]),
            l.hasOwnProperty(ye) && z != null && !a.hasOwnProperty(ye))
          )
            switch (ye) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Qe(e, t, ye, null, a, z);
            }
        for (p in a)
          if (
            ((z = a[p]),
            (w = l[p]),
            a.hasOwnProperty(p) && z !== w && (z != null || w != null))
          )
            switch (p) {
              case "selected":
                e.selected =
                  z && typeof z != "function" && typeof z != "symbol";
                break;
              default:
                Qe(e, t, p, z, a, w);
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
        for (var fe in l)
          (z = l[fe]),
            l.hasOwnProperty(fe) &&
              z != null &&
              !a.hasOwnProperty(fe) &&
              Qe(e, t, fe, null, a, z);
        for (N in a)
          if (
            ((z = a[N]),
            (w = l[N]),
            a.hasOwnProperty(N) && z !== w && (z != null || w != null))
          )
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(o(137, t));
                break;
              default:
                Qe(e, t, N, z, a, w);
            }
        return;
      default:
        if (Nr(t)) {
          for (var Ze in l)
            (z = l[Ze]),
              l.hasOwnProperty(Ze) &&
                z !== void 0 &&
                !a.hasOwnProperty(Ze) &&
                vo(e, t, Ze, void 0, a, z);
          for (L in a)
            (z = a[L]),
              (w = l[L]),
              !a.hasOwnProperty(L) ||
                z === w ||
                (z === void 0 && w === void 0) ||
                vo(e, t, L, z, a, w);
          return;
        }
    }
    for (var T in l)
      (z = l[T]),
        l.hasOwnProperty(T) &&
          z != null &&
          !a.hasOwnProperty(T) &&
          Qe(e, t, T, null, a, z);
    for (Y in a)
      (z = a[Y]),
        (w = l[Y]),
        !a.hasOwnProperty(Y) ||
          z === w ||
          (z == null && w == null) ||
          Qe(e, t, Y, z, a, w);
  }
  var yo = null,
    go = null;
  function $i(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function oh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function sh(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function po(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var bo = null;
  function by() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === bo
        ? !1
        : ((bo = e), !0)
      : ((bo = null), !1);
  }
  var fh = typeof setTimeout == "function" ? setTimeout : void 0,
    Sy = typeof clearTimeout == "function" ? clearTimeout : void 0,
    dh = typeof Promise == "function" ? Promise : void 0,
    xy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof dh < "u"
        ? function (e) {
            return dh.resolve(null).then(e).catch(Ey);
          }
        : fh;
  function Ey(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function sa(e) {
    return e === "head";
  }
  function hh(e, t) {
    var l = t,
      a = 0,
      n = 0;
    do {
      var i = l.nextSibling;
      if ((e.removeChild(l), i && i.nodeType === 8))
        if (((l = i.data), l === "/$")) {
          if (0 < a && 8 > a) {
            l = a;
            var s = e.ownerDocument;
            if ((l & 1 && Ru(s.documentElement), l & 2 && Ru(s.body), l & 4))
              for (l = s.head, Ru(l), s = l.firstChild; s; ) {
                var d = s.nextSibling,
                  p = s.nodeName;
                s[le] ||
                  p === "SCRIPT" ||
                  p === "STYLE" ||
                  (p === "LINK" && s.rel.toLowerCase() === "stylesheet") ||
                  l.removeChild(s),
                  (s = d);
              }
          }
          if (n === 0) {
            e.removeChild(i), Ou(t);
            return;
          }
          n--;
        } else
          l === "$" || l === "$?" || l === "$!"
            ? n++
            : (a = l.charCodeAt(0) - 48);
      else a = 0;
      l = i;
    } while (l);
    Ou(t);
  }
  function So(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          So(l), ue(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function _y(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (a) {
        if (!e[le])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((i = e.getAttribute("rel")),
                i === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                i !== n.rel ||
                e.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                e.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                e.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((i = e.getAttribute("src")),
                (i !== (n.src == null ? null : n.src) ||
                  e.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  e.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  i &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === i) return e;
      } else return e;
      if (((e = fl(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Ry(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !l) ||
        ((e = fl(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function xo(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState === "complete")
    );
  }
  function Ty(e, t) {
    var l = e.ownerDocument;
    if (e.data !== "$?" || l.readyState === "complete") t();
    else {
      var a = function () {
        t(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), (e._reactRetry = a);
    }
  }
  function fl(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var Eo = null;
  function mh(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (t === 0) return e;
          t--;
        } else l === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function vh(e, t, l) {
    switch (((t = $i(l)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(o(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(o(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function Ru(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    ue(e);
  }
  var tl = new Map(),
    yh = new Set();
  function Fi(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
      ? e
      : e.ownerDocument;
  }
  var Vl = V.d;
  V.d = { f: Dy, r: My, D: jy, C: Ay, L: Ny, m: zy, X: wy, S: Oy, M: Cy };
  function Dy() {
    var e = Vl.f(),
      t = Gi();
    return e || t;
  }
  function My(e) {
    var t = qe(e);
    t !== null && t.tag === 5 && t.type === "form" ? Hf(t) : Vl.r(e);
  }
  var Nn = typeof document > "u" ? null : document;
  function gh(e, t, l) {
    var a = Nn;
    if (a && typeof t == "string" && t) {
      var n = kt(t);
      (n = 'link[rel="' + e + '"][href="' + n + '"]'),
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        yh.has(n) ||
          (yh.add(n),
          (e = { rel: e, crossOrigin: l, href: t }),
          a.querySelector(n) === null &&
            ((t = a.createElement("link")),
            xt(t, "link", e),
            Se(t),
            a.head.appendChild(t)));
    }
  }
  function jy(e) {
    Vl.D(e), gh("dns-prefetch", e, null);
  }
  function Ay(e, t) {
    Vl.C(e, t), gh("preconnect", e, t);
  }
  function Ny(e, t, l) {
    Vl.L(e, t, l);
    var a = Nn;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + kt(t) + '"]';
      t === "image" && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + kt(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (n += '[imagesizes="' + kt(l.imageSizes) + '"]'))
        : (n += '[href="' + kt(e) + '"]');
      var i = n;
      switch (t) {
        case "style":
          i = zn(e);
          break;
        case "script":
          i = On(e);
      }
      tl.has(i) ||
        ((e = E(
          {
            rel: "preload",
            href: t === "image" && l && l.imageSrcSet ? void 0 : e,
            as: t,
          },
          l
        )),
        tl.set(i, e),
        a.querySelector(n) !== null ||
          (t === "style" && a.querySelector(Tu(i))) ||
          (t === "script" && a.querySelector(Du(i))) ||
          ((t = a.createElement("link")),
          xt(t, "link", e),
          Se(t),
          a.head.appendChild(t)));
    }
  }
  function zy(e, t) {
    Vl.m(e, t);
    var l = Nn;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        n =
          'link[rel="modulepreload"][as="' + kt(a) + '"][href="' + kt(e) + '"]',
        i = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = On(e);
      }
      if (
        !tl.has(i) &&
        ((e = E({ rel: "modulepreload", href: e }, t)),
        tl.set(i, e),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Du(i))) return;
        }
        (a = l.createElement("link")),
          xt(a, "link", e),
          Se(a),
          l.head.appendChild(a);
      }
    }
  }
  function Oy(e, t, l) {
    Vl.S(e, t, l);
    var a = Nn;
    if (a && e) {
      var n = lt(a).hoistableStyles,
        i = zn(e);
      t = t || "default";
      var s = n.get(i);
      if (!s) {
        var d = { loading: 0, preload: null };
        if ((s = a.querySelector(Tu(i)))) d.loading = 5;
        else {
          (e = E({ rel: "stylesheet", href: e, "data-precedence": t }, l)),
            (l = tl.get(i)) && _o(e, l);
          var p = (s = a.createElement("link"));
          Se(p),
            xt(p, "link", e),
            (p._p = new Promise(function (N, L) {
              (p.onload = N), (p.onerror = L);
            })),
            p.addEventListener("load", function () {
              d.loading |= 1;
            }),
            p.addEventListener("error", function () {
              d.loading |= 2;
            }),
            (d.loading |= 4),
            Wi(s, t, a);
        }
        (s = { type: "stylesheet", instance: s, count: 1, state: d }),
          n.set(i, s);
      }
    }
  }
  function wy(e, t) {
    Vl.X(e, t);
    var l = Nn;
    if (l && e) {
      var a = lt(l).hoistableScripts,
        n = On(e),
        i = a.get(n);
      i ||
        ((i = l.querySelector(Du(n))),
        i ||
          ((e = E({ src: e, async: !0 }, t)),
          (t = tl.get(n)) && Ro(e, t),
          (i = l.createElement("script")),
          Se(i),
          xt(i, "link", e),
          l.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        a.set(n, i));
    }
  }
  function Cy(e, t) {
    Vl.M(e, t);
    var l = Nn;
    if (l && e) {
      var a = lt(l).hoistableScripts,
        n = On(e),
        i = a.get(n);
      i ||
        ((i = l.querySelector(Du(n))),
        i ||
          ((e = E({ src: e, async: !0, type: "module" }, t)),
          (t = tl.get(n)) && Ro(e, t),
          (i = l.createElement("script")),
          Se(i),
          xt(i, "link", e),
          l.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        a.set(n, i));
    }
  }
  function ph(e, t, l, a) {
    var n = (n = he.current) ? Fi(n) : null;
    if (!n) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((t = zn(l.href)),
            (l = lt(n).hoistableStyles),
            (a = l.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          e = zn(l.href);
          var i = lt(n).hoistableStyles,
            s = i.get(e);
          if (
            (s ||
              ((n = n.ownerDocument || n),
              (s = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              i.set(e, s),
              (i = n.querySelector(Tu(e))) &&
                !i._p &&
                ((s.instance = i), (s.state.loading = 5)),
              tl.has(e) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                tl.set(e, l),
                i || Uy(n, e, l, s.state))),
            t && a === null)
          )
            throw Error(o(528, ""));
          return s;
        }
        if (t && a !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (t = l.async),
          (l = l.src),
          typeof l == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = On(l)),
              (l = lt(n).hoistableScripts),
              (a = l.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, e));
    }
  }
  function zn(e) {
    return 'href="' + kt(e) + '"';
  }
  function Tu(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function bh(e) {
    return E({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Uy(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = e.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        xt(t, "link", l),
        Se(t),
        e.head.appendChild(t));
  }
  function On(e) {
    return '[src="' + kt(e) + '"]';
  }
  function Du(e) {
    return "script[async]" + e;
  }
  function Sh(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + kt(l.href) + '"]');
          if (a) return (t.instance = a), Se(a), a;
          var n = E({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement("style")),
            Se(a),
            xt(a, "style", n),
            Wi(a, l.precedence, e),
            (t.instance = a)
          );
        case "stylesheet":
          n = zn(l.href);
          var i = e.querySelector(Tu(n));
          if (i) return (t.state.loading |= 4), (t.instance = i), Se(i), i;
          (a = bh(l)),
            (n = tl.get(n)) && _o(a, n),
            (i = (e.ownerDocument || e).createElement("link")),
            Se(i);
          var s = i;
          return (
            (s._p = new Promise(function (d, p) {
              (s.onload = d), (s.onerror = p);
            })),
            xt(i, "link", a),
            (t.state.loading |= 4),
            Wi(i, l.precedence, e),
            (t.instance = i)
          );
        case "script":
          return (
            (i = On(l.src)),
            (n = e.querySelector(Du(i)))
              ? ((t.instance = n), Se(n), n)
              : ((a = l),
                (n = tl.get(i)) && ((a = E({}, l)), Ro(a, n)),
                (e = e.ownerDocument || e),
                (n = e.createElement("script")),
                Se(n),
                xt(n, "link", a),
                e.head.appendChild(n),
                (t.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), Wi(a, l.precedence, e));
    return t.instance;
  }
  function Wi(e, t, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        n = a.length ? a[a.length - 1] : null,
        i = n,
        s = 0;
      s < a.length;
      s++
    ) {
      var d = a[s];
      if (d.dataset.precedence === t) i = d;
      else if (i !== n) break;
    }
    i
      ? i.parentNode.insertBefore(e, i.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function _o(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function Ro(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var Pi = null;
  function xh(e, t, l) {
    if (Pi === null) {
      var a = new Map(),
        n = (Pi = new Map());
      n.set(l, a);
    } else (n = Pi), (a = n.get(l)), a || ((a = new Map()), n.set(l, a));
    if (a.has(e)) return a;
    for (
      a.set(e, null), l = l.getElementsByTagName(e), n = 0;
      n < l.length;
      n++
    ) {
      var i = l[n];
      if (
        !(
          i[le] ||
          i[G] ||
          (e === "link" && i.getAttribute("rel") === "stylesheet")
        ) &&
        i.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var s = i.getAttribute(t) || "";
        s = e + s;
        var d = a.get(s);
        d ? d.push(i) : a.set(s, [i]);
      }
    }
    return a;
  }
  function Eh(e, t, l) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === "title" ? e.querySelector("head > title") : null
      );
  }
  function Hy(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled), typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function _h(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Mu = null;
  function Ly() {}
  function By(e, t, l) {
    if (Mu === null) throw Error(o(475));
    var a = Mu;
    if (
      t.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var n = zn(l.href),
          i = e.querySelector(Tu(n));
        if (i) {
          (e = i._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (a.count++, (a = Ii.bind(a)), e.then(a, a)),
            (t.state.loading |= 4),
            (t.instance = i),
            Se(i);
          return;
        }
        (i = e.ownerDocument || e),
          (l = bh(l)),
          (n = tl.get(n)) && _o(l, n),
          (i = i.createElement("link")),
          Se(i);
        var s = i;
        (s._p = new Promise(function (d, p) {
          (s.onload = d), (s.onerror = p);
        })),
          xt(i, "link", l),
          (t.instance = i);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (a.count++,
          (t = Ii.bind(a)),
          e.addEventListener("load", t),
          e.addEventListener("error", t));
    }
  }
  function qy() {
    if (Mu === null) throw Error(o(475));
    var e = Mu;
    return (
      e.stylesheets && e.count === 0 && To(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var l = setTimeout(function () {
              if ((e.stylesheets && To(e, e.stylesheets), e.unsuspend)) {
                var a = e.unsuspend;
                (e.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(l);
              }
            );
          }
        : null
    );
  }
  function Ii() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) To(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var er = null;
  function To(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (er = new Map()),
        t.forEach(Yy, e),
        (er = null),
        Ii.call(e));
  }
  function Yy(e, t) {
    if (!(t.state.loading & 4)) {
      var l = er.get(e);
      if (l) var a = l.get(null);
      else {
        (l = new Map()), er.set(e, l);
        for (
          var n = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            i = 0;
          i < n.length;
          i++
        ) {
          var s = n[i];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") &&
            (l.set(s.dataset.precedence, s), (a = s));
        }
        a && l.set(null, a);
      }
      (n = t.instance),
        (s = n.getAttribute("data-precedence")),
        (i = l.get(s) || a),
        i === a && l.set(null, n),
        l.set(s, n),
        this.count++,
        (a = Ii.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        i
          ? i.parentNode.insertBefore(n, i.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(n, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var ju = {
    $$typeof: $,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0,
  };
  function Gy(e, t, l, a, n, i, s, d) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Wa(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Wa(0)),
      (this.hiddenUpdates = Wa(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = i),
      (this.onRecoverableError = s),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = d),
      (this.incompleteTransitions = new Map());
  }
  function Rh(e, t, l, a, n, i, s, d, p, N, L, Y) {
    return (
      (e = new Gy(e, t, l, s, d, p, N, Y)),
      (t = 1),
      i === !0 && (t |= 24),
      (i = Ht(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (t = uc()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (i.memoizedState = { element: a, isDehydrated: l, cache: t }),
      oc(i),
      e
    );
  }
  function Th(e) {
    return e ? ((e = on), e) : on;
  }
  function Dh(e, t, l, a, n, i) {
    (n = Th(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = Wl(t)),
      (a.payload = { element: l }),
      (i = i === void 0 ? null : i),
      i !== null && (a.callback = i),
      (l = Pl(e, a, t)),
      l !== null && (Gt(l, e, t), nu(l, e, t));
  }
  function Mh(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Do(e, t) {
    Mh(e, t), (e = e.alternate) && Mh(e, t);
  }
  function jh(e) {
    if (e.tag === 13) {
      var t = cn(e, 67108864);
      t !== null && Gt(t, e, 67108864), Do(e, 67108864);
    }
  }
  var tr = !0;
  function Xy(e, t, l, a) {
    var n = M.T;
    M.T = null;
    var i = V.p;
    try {
      (V.p = 2), Mo(e, t, l, a);
    } finally {
      (V.p = i), (M.T = n);
    }
  }
  function Vy(e, t, l, a) {
    var n = M.T;
    M.T = null;
    var i = V.p;
    try {
      (V.p = 8), Mo(e, t, l, a);
    } finally {
      (V.p = i), (M.T = n);
    }
  }
  function Mo(e, t, l, a) {
    if (tr) {
      var n = jo(a);
      if (n === null) mo(e, t, a, lr, l), Nh(e, a);
      else if (Zy(n, e, t, l, a)) a.stopPropagation();
      else if ((Nh(e, a), t & 4 && -1 < Qy.indexOf(e))) {
        for (; n !== null; ) {
          var i = qe(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                  var s = Dl(i.pendingLanes);
                  if (s !== 0) {
                    var d = i;
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; s; ) {
                      var p = 1 << (31 - pt(s));
                      (d.entanglements[1] |= p), (s &= ~p);
                    }
                    El(i), (Ye & 6) === 0 && ((qi = wt() + 500), xu(0));
                  }
                }
                break;
              case 13:
                (d = cn(i, 2)), d !== null && Gt(d, i, 2), Gi(), Do(i, 2);
            }
          if (((i = jo(a)), i === null && mo(e, t, a, lr, l), i === n)) break;
          n = i;
        }
        n !== null && a.stopPropagation();
      } else mo(e, t, a, null, l);
    }
  }
  function jo(e) {
    return (e = Or(e)), Ao(e);
  }
  var lr = null;
  function Ao(e) {
    if (((lr = null), (e = Re(e)), e !== null)) {
      var t = h(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = g(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (lr = e), null;
  }
  function Ah(e) {
    switch (e) {
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
        switch (Dr()) {
          case Zu:
            return 2;
          case Ku:
            return 8;
          case $a:
          case Tl:
            return 32;
          case Zl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var No = !1,
    fa = null,
    da = null,
    ha = null,
    Au = new Map(),
    Nu = new Map(),
    ma = [],
    Qy =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Nh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        fa = null;
        break;
      case "dragenter":
      case "dragleave":
        da = null;
        break;
      case "mouseover":
      case "mouseout":
        ha = null;
        break;
      case "pointerover":
      case "pointerout":
        Au.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Nu.delete(t.pointerId);
    }
  }
  function zu(e, t, l, a, n, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: i,
          targetContainers: [n],
        }),
        t !== null && ((t = qe(t)), t !== null && jh(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e);
  }
  function Zy(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return (fa = zu(fa, e, t, l, a, n)), !0;
      case "dragenter":
        return (da = zu(da, e, t, l, a, n)), !0;
      case "mouseover":
        return (ha = zu(ha, e, t, l, a, n)), !0;
      case "pointerover":
        var i = n.pointerId;
        return Au.set(i, zu(Au.get(i) || null, e, t, l, a, n)), !0;
      case "gotpointercapture":
        return (
          (i = n.pointerId), Nu.set(i, zu(Nu.get(i) || null, e, t, l, a, n)), !0
        );
    }
    return !1;
  }
  function zh(e) {
    var t = Re(e.target);
    if (t !== null) {
      var l = h(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = g(l)), t !== null)) {
            (e.blockedOn = t),
              D(e.priority, function () {
                if (l.tag === 13) {
                  var a = Yt();
                  a = qn(a);
                  var n = cn(l, a);
                  n !== null && Gt(n, l, a), Do(l, a);
                }
              });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ar(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = jo(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        (zr = a), l.target.dispatchEvent(a), (zr = null);
      } else return (t = qe(l)), t !== null && jh(t), (e.blockedOn = l), !1;
      t.shift();
    }
    return !0;
  }
  function Oh(e, t, l) {
    ar(e) && l.delete(t);
  }
  function Ky() {
    (No = !1),
      fa !== null && ar(fa) && (fa = null),
      da !== null && ar(da) && (da = null),
      ha !== null && ar(ha) && (ha = null),
      Au.forEach(Oh),
      Nu.forEach(Oh);
  }
  function nr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      No ||
        ((No = !0),
        u.unstable_scheduleCallback(u.unstable_NormalPriority, Ky)));
  }
  var ur = null;
  function wh(e) {
    ur !== e &&
      ((ur = e),
      u.unstable_scheduleCallback(u.unstable_NormalPriority, function () {
        ur === e && (ur = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            a = e[t + 1],
            n = e[t + 2];
          if (typeof a != "function") {
            if (Ao(a || l) === null) continue;
            break;
          }
          var i = qe(l);
          i !== null &&
            (e.splice(t, 3),
            (t -= 3),
            jc(i, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function Ou(e) {
    function t(p) {
      return nr(p, e);
    }
    fa !== null && nr(fa, e),
      da !== null && nr(da, e),
      ha !== null && nr(ha, e),
      Au.forEach(t),
      Nu.forEach(t);
    for (var l = 0; l < ma.length; l++) {
      var a = ma[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < ma.length && ((l = ma[0]), l.blockedOn === null); )
      zh(l), l.blockedOn === null && ma.shift();
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          i = l[a + 1],
          s = n[Z] || null;
        if (typeof i == "function") s || wh(l);
        else if (s) {
          var d = null;
          if (i && i.hasAttribute("formAction")) {
            if (((n = i), (s = i[Z] || null))) d = s.formAction;
            else if (Ao(n) !== null) continue;
          } else d = s.action;
          typeof d == "function" ? (l[a + 1] = d) : (l.splice(a, 3), (a -= 3)),
            wh(l);
        }
      }
  }
  function zo(e) {
    this._internalRoot = e;
  }
  (ir.prototype.render = zo.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      var l = t.current,
        a = Yt();
      Dh(l, a, e, t, null, null);
    }),
    (ir.prototype.unmount = zo.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Dh(e.current, 2, null, e, null, null), Gi(), (t[ee] = null);
        }
      });
  function ir(e) {
    this._internalRoot = e;
  }
  ir.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = x();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < ma.length && t !== 0 && t < ma[l].priority; l++);
      ma.splice(l, 0, e), l === 0 && zh(e);
    }
  };
  var Ch = r.version;
  if (Ch !== "19.1.1") throw Error(o(527, Ch, "19.1.1"));
  V.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(o(188))
        : ((e = Object.keys(e).join(",")), Error(o(268, e)));
    return (
      (e = y(t)),
      (e = e !== null ? v(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Jy = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.1.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!rr.isDisabled && rr.supportsFiber)
      try {
        (Mt = rr.inject(Jy)), (Pe = rr);
      } catch {}
  }
  return (
    (Cu.createRoot = function (e, t) {
      if (!f(e)) throw Error(o(299));
      var l = !1,
        a = "",
        n = Ff,
        i = Wf,
        s = Pf,
        d = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (i = t.onCaughtError),
          t.onRecoverableError !== void 0 && (s = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (d = t.unstable_transitionCallbacks)),
        (t = Rh(e, 1, !1, null, null, l, a, n, i, s, d, null)),
        (e[ee] = t.current),
        ho(e),
        new zo(t)
      );
    }),
    (Cu.hydrateRoot = function (e, t, l) {
      if (!f(e)) throw Error(o(299));
      var a = !1,
        n = "",
        i = Ff,
        s = Wf,
        d = Pf,
        p = null,
        N = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (i = l.onUncaughtError),
          l.onCaughtError !== void 0 && (s = l.onCaughtError),
          l.onRecoverableError !== void 0 && (d = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (p = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (N = l.formState)),
        (t = Rh(e, 1, !0, t, l ?? null, a, n, i, s, d, p, N)),
        (t.context = Th(null)),
        (l = t.current),
        (a = Yt()),
        (a = qn(a)),
        (n = Wl(a)),
        (n.callback = null),
        Pl(l, n, a),
        (l = a),
        (t.current.lanes = l),
        Ra(t, l),
        El(t),
        (e[ee] = t.current),
        ho(e),
        new ir(t)
      );
    }),
    (Cu.version = "19.1.1"),
    Cu
  );
}
var Qh;
function a0() {
  if (Qh) return Co.exports;
  Qh = 1;
  function u() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), (Co.exports = l0()), Co.exports;
}
var n0 = a0();
/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var ym = (u) => {
    throw TypeError(u);
  },
  u0 = (u, r, c) => r.has(u) || ym("Cannot " + c),
  Bo = (u, r, c) => (
    u0(u, r, "read from private field"), c ? c.call(u) : r.get(u)
  ),
  i0 = (u, r, c) =>
    r.has(u)
      ? ym("Cannot add the same private member more than once")
      : r instanceof WeakSet
      ? r.add(u)
      : r.set(u, c),
  Zh = "popstate";
function r0(u = {}) {
  function r(o, f) {
    let { pathname: h, search: g, hash: b } = o.location;
    return qu(
      "",
      { pathname: h, search: g, hash: b },
      (f.state && f.state.usr) || null,
      (f.state && f.state.key) || "default"
    );
  }
  function c(o, f) {
    return typeof f == "string" ? f : ba(f);
  }
  return o0(r, c, null, u);
}
function je(u, r) {
  if (u === !1 || u === null || typeof u > "u") throw new Error(r);
}
function rt(u, r) {
  if (!u) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {}
  }
}
function c0() {
  return Math.random().toString(36).substring(2, 10);
}
function Kh(u, r) {
  return { usr: u.state, key: u.key, idx: r };
}
function qu(u, r, c = null, o) {
  return {
    pathname: typeof u == "string" ? u : u.pathname,
    search: "",
    hash: "",
    ...(typeof r == "string" ? Sa(r) : r),
    state: c,
    key: (r && r.key) || o || c0(),
  };
}
function ba({ pathname: u = "/", search: r = "", hash: c = "" }) {
  return (
    r && r !== "?" && (u += r.charAt(0) === "?" ? r : "?" + r),
    c && c !== "#" && (u += c.charAt(0) === "#" ? c : "#" + c),
    u
  );
}
function Sa(u) {
  let r = {};
  if (u) {
    let c = u.indexOf("#");
    c >= 0 && ((r.hash = u.substring(c)), (u = u.substring(0, c)));
    let o = u.indexOf("?");
    o >= 0 && ((r.search = u.substring(o)), (u = u.substring(0, o))),
      u && (r.pathname = u);
  }
  return r;
}
function o0(u, r, c, o = {}) {
  let { window: f = document.defaultView, v5Compat: h = !1 } = o,
    g = f.history,
    b = "POP",
    y = null,
    v = E();
  v == null && ((v = 0), g.replaceState({ ...g.state, idx: v }, ""));
  function E() {
    return (g.state || { idx: null }).idx;
  }
  function C() {
    b = "POP";
    let k = E(),
      X = k == null ? null : k - v;
    (v = k), y && y({ action: b, location: J.location, delta: X });
  }
  function A(k, X) {
    b = "PUSH";
    let ce = qu(J.location, k, X);
    v = E() + 1;
    let $ = Kh(ce, v),
      oe = J.createHref(ce);
    try {
      g.pushState($, "", oe);
    } catch (W) {
      if (W instanceof DOMException && W.name === "DataCloneError") throw W;
      f.location.assign(oe);
    }
    h && y && y({ action: b, location: J.location, delta: 1 });
  }
  function H(k, X) {
    b = "REPLACE";
    let ce = qu(J.location, k, X);
    v = E();
    let $ = Kh(ce, v),
      oe = J.createHref(ce);
    g.replaceState($, "", oe),
      h && y && y({ action: b, location: J.location, delta: 0 });
  }
  function Q(k) {
    return gm(k);
  }
  let J = {
    get action() {
      return b;
    },
    get location() {
      return u(f, g);
    },
    listen(k) {
      if (y) throw new Error("A history only accepts one active listener");
      return (
        f.addEventListener(Zh, C),
        (y = k),
        () => {
          f.removeEventListener(Zh, C), (y = null);
        }
      );
    },
    createHref(k) {
      return r(f, k);
    },
    createURL: Q,
    encodeLocation(k) {
      let X = Q(k);
      return { pathname: X.pathname, search: X.search, hash: X.hash };
    },
    push: A,
    replace: H,
    go(k) {
      return g.go(k);
    },
  };
  return J;
}
function gm(u, r = !1) {
  let c = "http://localhost";
  typeof window < "u" &&
    (c =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    je(c, "No window.location.(origin|href) available to create URL");
  let o = typeof u == "string" ? u : ba(u);
  return (
    (o = o.replace(/ $/, "%20")),
    !r && o.startsWith("//") && (o = c + o),
    new URL(o, c)
  );
}
var Bu,
  Jh = class {
    constructor(u) {
      if ((i0(this, Bu, new Map()), u)) for (let [r, c] of u) this.set(r, c);
    }
    get(u) {
      if (Bo(this, Bu).has(u)) return Bo(this, Bu).get(u);
      if (u.defaultValue !== void 0) return u.defaultValue;
      throw new Error("No value found for context");
    }
    set(u, r) {
      Bo(this, Bu).set(u, r);
    }
  };
Bu = new WeakMap();
var s0 = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function f0(u) {
  return s0.has(u);
}
var d0 = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "unstable_middleware",
  "children",
]);
function h0(u) {
  return d0.has(u);
}
function m0(u) {
  return u.index === !0;
}
function Yu(u, r, c = [], o = {}, f = !1) {
  return u.map((h, g) => {
    let b = [...c, String(g)],
      y = typeof h.id == "string" ? h.id : b.join("-");
    if (
      (je(
        h.index !== !0 || !h.children,
        "Cannot specify children on an index route"
      ),
      je(
        f || !o[y],
        `Found a route id collision on id "${y}".  Route id's must be globally unique within Data Router usages`
      ),
      m0(h))
    ) {
      let v = { ...h, ...r(h), id: y };
      return (o[y] = v), v;
    } else {
      let v = { ...h, ...r(h), id: y, children: void 0 };
      return (
        (o[y] = v), h.children && (v.children = Yu(h.children, r, b, o, f)), v
      );
    }
  });
}
function ga(u, r, c = "/") {
  return sr(u, r, c, !1);
}
function sr(u, r, c, o) {
  let f = typeof r == "string" ? Sa(r) : r,
    h = ul(f.pathname || "/", c);
  if (h == null) return null;
  let g = pm(u);
  y0(g);
  let b = null;
  for (let y = 0; b == null && y < g.length; ++y) {
    let v = M0(h);
    b = T0(g[y], v, o);
  }
  return b;
}
function v0(u, r) {
  let { route: c, pathname: o, params: f } = u;
  return {
    id: c.id,
    pathname: o,
    params: f,
    data: r[c.id],
    loaderData: r[c.id],
    handle: c.handle,
  };
}
function pm(u, r = [], c = [], o = "") {
  let f = (h, g, b) => {
    let y = {
      relativePath: b === void 0 ? h.path || "" : b,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: g,
      route: h,
    };
    y.relativePath.startsWith("/") &&
      (je(
        y.relativePath.startsWith(o),
        `Absolute route path "${y.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (y.relativePath = y.relativePath.slice(o.length)));
    let v = _l([o, y.relativePath]),
      E = c.concat(y);
    h.children &&
      h.children.length > 0 &&
      (je(
        h.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${v}".`
      ),
      pm(h.children, r, E, v)),
      !(h.path == null && !h.index) &&
        r.push({ path: v, score: _0(v, h.index), routesMeta: E });
  };
  return (
    u.forEach((h, g) => {
      if (h.path === "" || !h.path?.includes("?")) f(h, g);
      else for (let b of bm(h.path)) f(h, g, b);
    }),
    r
  );
}
function bm(u) {
  let r = u.split("/");
  if (r.length === 0) return [];
  let [c, ...o] = r,
    f = c.endsWith("?"),
    h = c.replace(/\?$/, "");
  if (o.length === 0) return f ? [h, ""] : [h];
  let g = bm(o.join("/")),
    b = [];
  return (
    b.push(...g.map((y) => (y === "" ? h : [h, y].join("/")))),
    f && b.push(...g),
    b.map((y) => (u.startsWith("/") && y === "" ? "/" : y))
  );
}
function y0(u) {
  u.sort((r, c) =>
    r.score !== c.score
      ? c.score - r.score
      : R0(
          r.routesMeta.map((o) => o.childrenIndex),
          c.routesMeta.map((o) => o.childrenIndex)
        )
  );
}
var g0 = /^:[\w-]+$/,
  p0 = 3,
  b0 = 2,
  S0 = 1,
  x0 = 10,
  E0 = -2,
  kh = (u) => u === "*";
function _0(u, r) {
  let c = u.split("/"),
    o = c.length;
  return (
    c.some(kh) && (o += E0),
    r && (o += b0),
    c
      .filter((f) => !kh(f))
      .reduce((f, h) => f + (g0.test(h) ? p0 : h === "" ? S0 : x0), o)
  );
}
function R0(u, r) {
  return u.length === r.length && u.slice(0, -1).every((o, f) => o === r[f])
    ? u[u.length - 1] - r[r.length - 1]
    : 0;
}
function T0(u, r, c = !1) {
  let { routesMeta: o } = u,
    f = {},
    h = "/",
    g = [];
  for (let b = 0; b < o.length; ++b) {
    let y = o[b],
      v = b === o.length - 1,
      E = h === "/" ? r : r.slice(h.length) || "/",
      C = mr(
        { path: y.relativePath, caseSensitive: y.caseSensitive, end: v },
        E
      ),
      A = y.route;
    if (
      (!C &&
        v &&
        c &&
        !o[o.length - 1].route.index &&
        (C = mr(
          { path: y.relativePath, caseSensitive: y.caseSensitive, end: !1 },
          E
        )),
      !C)
    )
      return null;
    Object.assign(f, C.params),
      g.push({
        params: f,
        pathname: _l([h, C.pathname]),
        pathnameBase: z0(_l([h, C.pathnameBase])),
        route: A,
      }),
      C.pathnameBase !== "/" && (h = _l([h, C.pathnameBase]));
  }
  return g;
}
function mr(u, r) {
  typeof u == "string" && (u = { path: u, caseSensitive: !1, end: !0 });
  let [c, o] = D0(u.path, u.caseSensitive, u.end),
    f = r.match(c);
  if (!f) return null;
  let h = f[0],
    g = h.replace(/(.)\/+$/, "$1"),
    b = f.slice(1);
  return {
    params: o.reduce((v, { paramName: E, isOptional: C }, A) => {
      if (E === "*") {
        let Q = b[A] || "";
        g = h.slice(0, h.length - Q.length).replace(/(.)\/+$/, "$1");
      }
      const H = b[A];
      return (
        C && !H ? (v[E] = void 0) : (v[E] = (H || "").replace(/%2F/g, "/")), v
      );
    }, {}),
    pathname: h,
    pathnameBase: g,
    pattern: u,
  };
}
function D0(u, r = !1, c = !0) {
  rt(
    u === "*" || !u.endsWith("*") || u.endsWith("/*"),
    `Route path "${u}" will be treated as if it were "${u.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let o = [],
    f =
      "^" +
      u
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (g, b, y) => (
            o.push({ paramName: b, isOptional: y != null }),
            y ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    u.endsWith("*")
      ? (o.push({ paramName: "*" }),
        (f += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : c
      ? (f += "\\/*$")
      : u !== "" && u !== "/" && (f += "(?:(?=\\/|$))"),
    [new RegExp(f, r ? void 0 : "i"), o]
  );
}
function M0(u) {
  try {
    return u
      .split("/")
      .map((r) => decodeURIComponent(r).replace(/\//g, "%2F"))
      .join("/");
  } catch (r) {
    return (
      rt(
        !1,
        `The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
      ),
      u
    );
  }
}
function ul(u, r) {
  if (r === "/") return u;
  if (!u.toLowerCase().startsWith(r.toLowerCase())) return null;
  let c = r.endsWith("/") ? r.length - 1 : r.length,
    o = u.charAt(c);
  return o && o !== "/" ? null : u.slice(c) || "/";
}
function j0({ basename: u, pathname: r }) {
  return r === "/" ? u : _l([u, r]);
}
function A0(u, r = "/") {
  let {
    pathname: c,
    search: o = "",
    hash: f = "",
  } = typeof u == "string" ? Sa(u) : u;
  return {
    pathname: c ? (c.startsWith("/") ? c : N0(c, r)) : r,
    search: O0(o),
    hash: w0(f),
  };
}
function N0(u, r) {
  let c = r.replace(/\/+$/, "").split("/");
  return (
    u.split("/").forEach((f) => {
      f === ".." ? c.length > 1 && c.pop() : f !== "." && c.push(f);
    }),
    c.length > 1 ? c.join("/") : "/"
  );
}
function qo(u, r, c, o) {
  return `Cannot include a '${u}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    o
  )}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Sm(u) {
  return u.filter(
    (r, c) => c === 0 || (r.route.path && r.route.path.length > 0)
  );
}
function br(u) {
  let r = Sm(u);
  return r.map((c, o) => (o === r.length - 1 ? c.pathname : c.pathnameBase));
}
function Sr(u, r, c, o = !1) {
  let f;
  typeof u == "string"
    ? (f = Sa(u))
    : ((f = { ...u }),
      je(
        !f.pathname || !f.pathname.includes("?"),
        qo("?", "pathname", "search", f)
      ),
      je(
        !f.pathname || !f.pathname.includes("#"),
        qo("#", "pathname", "hash", f)
      ),
      je(!f.search || !f.search.includes("#"), qo("#", "search", "hash", f)));
  let h = u === "" || f.pathname === "",
    g = h ? "/" : f.pathname,
    b;
  if (g == null) b = c;
  else {
    let C = r.length - 1;
    if (!o && g.startsWith("..")) {
      let A = g.split("/");
      for (; A[0] === ".."; ) A.shift(), (C -= 1);
      f.pathname = A.join("/");
    }
    b = C >= 0 ? r[C] : "/";
  }
  let y = A0(f, b),
    v = g && g !== "/" && g.endsWith("/"),
    E = (h || g === ".") && c.endsWith("/");
  return !y.pathname.endsWith("/") && (v || E) && (y.pathname += "/"), y;
}
var _l = (u) => u.join("/").replace(/\/\/+/g, "/"),
  z0 = (u) => u.replace(/\/+$/, "").replace(/^\/*/, "/"),
  O0 = (u) => (!u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u),
  w0 = (u) => (!u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u),
  vr = class {
    constructor(u, r, c, o = !1) {
      (this.status = u),
        (this.statusText = r || ""),
        (this.internal = o),
        c instanceof Error
          ? ((this.data = c.toString()), (this.error = c))
          : (this.data = c);
    }
  };
function Gu(u) {
  return (
    u != null &&
    typeof u.status == "number" &&
    typeof u.statusText == "string" &&
    typeof u.internal == "boolean" &&
    "data" in u
  );
}
var xm = ["POST", "PUT", "PATCH", "DELETE"],
  C0 = new Set(xm),
  U0 = ["GET", ...xm],
  H0 = new Set(U0),
  L0 = new Set([301, 302, 303, 307, 308]),
  B0 = new Set([307, 308]),
  Yo = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  q0 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Uu = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Y0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  $o = (u) => Y0.test(u),
  G0 = (u) => ({ hasErrorBoundary: !!u.hasErrorBoundary }),
  Em = "remix-router-transitions",
  _m = Symbol("ResetLoaderData");
function X0(u) {
  const r = u.window ? u.window : typeof window < "u" ? window : void 0,
    c =
      typeof r < "u" &&
      typeof r.document < "u" &&
      typeof r.document.createElement < "u";
  je(
    u.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let o = u.hydrationRouteProperties || [],
    f = u.mapRouteProperties || G0,
    h = {},
    g = Yu(u.routes, f, void 0, h),
    b,
    y = u.basename || "/",
    v = u.dataStrategy || J0,
    E = { unstable_middleware: !1, ...u.future },
    C = null,
    A = new Set(),
    H = null,
    Q = null,
    J = null,
    k = u.hydrationData != null,
    X = ga(g, u.history.location, y),
    ce = !1,
    $ = null,
    oe;
  if (X == null && !u.patchRoutesOnNavigation) {
    let x = nl(404, { pathname: u.history.location.pathname }),
      { matches: D, route: U } = im(g);
    (oe = !0), (X = D), ($ = { [U.id]: x });
  } else if (
    (X &&
      !u.hydrationData &&
      Ta(X, g, u.history.location.pathname).active &&
      (X = null),
    X)
  )
    if (X.some((x) => x.route.lazy)) oe = !1;
    else if (!X.some((x) => x.route.loader)) oe = !0;
    else {
      let x = u.hydrationData ? u.hydrationData.loaderData : null,
        D = u.hydrationData ? u.hydrationData.errors : null;
      if (D) {
        let U = X.findIndex((G) => D[G.route.id] !== void 0);
        oe = X.slice(0, U + 1).every((G) => !Zo(G.route, x, D));
      } else oe = X.every((U) => !Zo(U.route, x, D));
    }
  else {
    (oe = !1), (X = []);
    let x = Ta(null, g, u.history.location.pathname);
    x.active && x.matches && ((ce = !0), (X = x.matches));
  }
  let W,
    O = {
      historyAction: u.history.action,
      location: u.history.location,
      matches: X,
      initialized: oe,
      navigation: Yo,
      restoreScrollPosition: u.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (u.hydrationData && u.hydrationData.loaderData) || {},
      actionData: (u.hydrationData && u.hydrationData.actionData) || null,
      errors: (u.hydrationData && u.hydrationData.errors) || $,
      fetchers: new Map(),
      blockers: new Map(),
    },
    be = "POP",
    _e = !1,
    ve,
    de = !1,
    We = new Map(),
    Be = null,
    Oe = !1,
    ge = !1,
    pe = new Set(),
    M = new Map(),
    V = 0,
    P = -1,
    xe = new Map(),
    S = new Set(),
    B = new Map(),
    F = new Map(),
    K = new Set(),
    ae = new Map(),
    Ae,
    he = null;
  function Rt() {
    if (
      ((C = u.history.listen(({ action: x, location: D, delta: U }) => {
        if (Ae) {
          Ae(), (Ae = void 0);
          return;
        }
        rt(
          ae.size === 0 || U != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let G = $u({
          currentLocation: O.location,
          nextLocation: D,
          historyAction: x,
        });
        if (G && U != null) {
          let Z = new Promise((ee) => {
            Ae = ee;
          });
          u.history.go(U * -1),
            yl(G, {
              state: "blocked",
              location: D,
              proceed() {
                yl(G, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: D,
                }),
                  Z.then(() => u.history.go(U));
              },
              reset() {
                let ee = new Map(O.blockers);
                ee.set(G, Uu), ct({ blockers: ee });
              },
            });
          return;
        }
        return rl(x, D);
      })),
      c)
    ) {
      ng(r, We);
      let x = () => ug(r, We);
      r.addEventListener("pagehide", x),
        (Be = () => r.removeEventListener("pagehide", x));
    }
    return O.initialized || rl("POP", O.location, { initialHydration: !0 }), W;
  }
  function Je() {
    C && C(),
      Be && Be(),
      A.clear(),
      ve && ve.abort(),
      O.fetchers.forEach((x, D) => pt(D)),
      O.blockers.forEach((x, D) => _a(D));
  }
  function ml(x) {
    return A.add(x), () => A.delete(x);
  }
  function ct(x, D = {}) {
    x.matches &&
      (x.matches = x.matches.map((Z) => {
        let ee = h[Z.route.id],
          ne = Z.route;
        return ne.element !== ee.element ||
          ne.errorElement !== ee.errorElement ||
          ne.hydrateFallbackElement !== ee.hydrateFallbackElement
          ? { ...Z, route: ee }
          : Z;
      })),
      (O = { ...O, ...x });
    let U = [],
      G = [];
    O.fetchers.forEach((Z, ee) => {
      Z.state === "idle" && (K.has(ee) ? U.push(ee) : G.push(ee));
    }),
      K.forEach((Z) => {
        !O.fetchers.has(Z) && !M.has(Z) && U.push(Z);
      }),
      [...A].forEach((Z) =>
        Z(O, {
          deletedFetchers: U,
          viewTransitionOpts: D.viewTransitionOpts,
          flushSync: D.flushSync === !0,
        })
      ),
      U.forEach((Z) => pt(Z)),
      G.forEach((Z) => O.fetchers.delete(Z));
  }
  function il(x, D, { flushSync: U } = {}) {
    let G =
        O.actionData != null &&
        O.navigation.formMethod != null &&
        Ot(O.navigation.formMethod) &&
        O.navigation.state === "loading" &&
        x.state?._isRedirect !== !0,
      Z;
    D.actionData
      ? Object.keys(D.actionData).length > 0
        ? (Z = D.actionData)
        : (Z = null)
      : G
      ? (Z = O.actionData)
      : (Z = null);
    let ee = D.loaderData
        ? nm(O.loaderData, D.loaderData, D.matches || [], D.errors)
        : O.loaderData,
      ne = O.blockers;
    ne.size > 0 && ((ne = new Map(ne)), ne.forEach((le, ue) => ne.set(ue, Uu)));
    let te = Oe ? !1 : Wu(x, D.matches || O.matches),
      re =
        _e === !0 ||
        (O.navigation.formMethod != null &&
          Ot(O.navigation.formMethod) &&
          x.state?._isRedirect !== !0);
    b && ((g = b), (b = void 0)),
      Oe ||
        be === "POP" ||
        (be === "PUSH"
          ? u.history.push(x, x.state)
          : be === "REPLACE" && u.history.replace(x, x.state));
    let se;
    if (be === "POP") {
      let le = We.get(O.location.pathname);
      le && le.has(x.pathname)
        ? (se = { currentLocation: O.location, nextLocation: x })
        : We.has(x.pathname) &&
          (se = { currentLocation: x, nextLocation: O.location });
    } else if (de) {
      let le = We.get(O.location.pathname);
      le
        ? le.add(x.pathname)
        : ((le = new Set([x.pathname])), We.set(O.location.pathname, le)),
        (se = { currentLocation: O.location, nextLocation: x });
    }
    ct(
      {
        ...D,
        actionData: Z,
        loaderData: ee,
        historyAction: be,
        location: x,
        initialized: !0,
        navigation: Yo,
        revalidation: "idle",
        restoreScrollPosition: te,
        preventScrollReset: re,
        blockers: ne,
      },
      { viewTransitionOpts: se, flushSync: U === !0 }
    ),
      (be = "POP"),
      (_e = !1),
      (de = !1),
      (Oe = !1),
      (ge = !1),
      he?.resolve(),
      (he = null);
  }
  async function ka(x, D) {
    if (typeof x == "number") {
      u.history.go(x);
      return;
    }
    let U = Qo(O.location, O.matches, y, x, D?.fromRouteId, D?.relative),
      { path: G, submission: Z, error: ee } = $h(!1, U, D),
      ne = O.location,
      te = qu(O.location, G, D && D.state);
    te = { ...te, ...u.history.encodeLocation(te) };
    let re = D && D.replace != null ? D.replace : void 0,
      se = "PUSH";
    re === !0
      ? (se = "REPLACE")
      : re === !1 ||
        (Z != null &&
          Ot(Z.formMethod) &&
          Z.formAction === O.location.pathname + O.location.search &&
          (se = "REPLACE"));
    let le =
        D && "preventScrollReset" in D ? D.preventScrollReset === !0 : void 0,
      ue = (D && D.flushSync) === !0,
      Re = $u({ currentLocation: ne, nextLocation: te, historyAction: se });
    if (Re) {
      yl(Re, {
        state: "blocked",
        location: te,
        proceed() {
          yl(Re, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: te,
          }),
            ka(x, D);
        },
        reset() {
          let qe = new Map(O.blockers);
          qe.set(Re, Uu), ct({ blockers: qe });
        },
      });
      return;
    }
    await rl(se, te, {
      submission: Z,
      pendingError: ee,
      preventScrollReset: le,
      replace: D && D.replace,
      enableViewTransition: D && D.viewTransition,
      flushSync: ue,
    });
  }
  function Ln() {
    he || (he = ig()), Bn(), ct({ revalidation: "loading" });
    let x = he.promise;
    return O.navigation.state === "submitting"
      ? x
      : O.navigation.state === "idle"
      ? (rl(O.historyAction, O.location, {
          startUninterruptedRevalidation: !0,
        }),
        x)
      : (rl(be || O.historyAction, O.navigation.location, {
          overrideNavigation: O.navigation,
          enableViewTransition: de === !0,
        }),
        x);
  }
  async function rl(x, D, U) {
    ve && ve.abort(),
      (ve = null),
      (be = x),
      (Oe = (U && U.startUninterruptedRevalidation) === !0),
      Ra(O.location, O.matches),
      (_e = (U && U.preventScrollReset) === !0),
      (de = (U && U.enableViewTransition) === !0);
    let G = b || g,
      Z = U && U.overrideNavigation,
      ee =
        U?.initialHydration && O.matches && O.matches.length > 0 && !ce
          ? O.matches
          : ga(G, D, y),
      ne = (U && U.flushSync) === !0;
    if (
      ee &&
      O.initialized &&
      !ge &&
      I0(O.location, D) &&
      !(U && U.submission && Ot(U.submission.formMethod))
    ) {
      il(D, { matches: ee }, { flushSync: ne });
      return;
    }
    let te = Ta(ee, G, D.pathname);
    if ((te.active && te.matches && (ee = te.matches), !ee)) {
      let { error: lt, notFoundMatches: Se, route: Xe } = Fa(D.pathname);
      il(
        D,
        { matches: Se, loaderData: {}, errors: { [Xe.id]: lt } },
        { flushSync: ne }
      );
      return;
    }
    ve = new AbortController();
    let re = Cn(u.history, D, ve.signal, U && U.submission),
      se = u.unstable_getContext ? await u.unstable_getContext() : new Jh(),
      le;
    if (U && U.pendingError)
      le = [pa(ee).route.id, { type: "error", error: U.pendingError }];
    else if (U && U.submission && Ot(U.submission.formMethod)) {
      let lt = await Rr(
        re,
        D,
        U.submission,
        ee,
        se,
        te.active,
        U && U.initialHydration === !0,
        { replace: U.replace, flushSync: ne }
      );
      if (lt.shortCircuited) return;
      if (lt.pendingActionResult) {
        let [Se, Xe] = lt.pendingActionResult;
        if (Vt(Xe) && Gu(Xe.error) && Xe.error.status === 404) {
          (ve = null),
            il(D, {
              matches: lt.matches,
              loaderData: {},
              errors: { [Se]: Xe.error },
            });
          return;
        }
      }
      (ee = lt.matches || ee),
        (le = lt.pendingActionResult),
        (Z = Go(D, U.submission)),
        (ne = !1),
        (te.active = !1),
        (re = Cn(u.history, re.url, re.signal));
    }
    let {
      shortCircuited: ue,
      matches: Re,
      loaderData: qe,
      errors: tt,
    } = await Tr(
      re,
      D,
      ee,
      se,
      te.active,
      Z,
      U && U.submission,
      U && U.fetcherSubmission,
      U && U.replace,
      U && U.initialHydration === !0,
      ne,
      le
    );
    ue ||
      ((ve = null),
      il(D, { matches: Re || ee, ...um(le), loaderData: qe, errors: tt }));
  }
  async function Rr(x, D, U, G, Z, ee, ne, te = {}) {
    Bn();
    let re = lg(D, U);
    if ((ct({ navigation: re }, { flushSync: te.flushSync === !0 }), ee)) {
      let ue = await Da(G, D.pathname, x.signal);
      if (ue.type === "aborted") return { shortCircuited: !0 };
      if (ue.type === "error") {
        let Re = pa(ue.partialMatches).route.id;
        return {
          matches: ue.partialMatches,
          pendingActionResult: [Re, { type: "error", error: ue.error }],
        };
      } else if (ue.matches) G = ue.matches;
      else {
        let { notFoundMatches: Re, error: qe, route: tt } = Fa(D.pathname);
        return {
          matches: Re,
          pendingActionResult: [tt.id, { type: "error", error: qe }],
        };
      }
    }
    let se,
      le = fr(G, D);
    if (!le.route.action && !le.route.lazy)
      se = {
        type: "error",
        error: nl(405, {
          method: x.method,
          pathname: D.pathname,
          routeId: le.route.id,
        }),
      };
    else {
      let ue = Un(f, h, x, G, le, ne ? [] : o, Z),
        Re = await Zl(x, ue, Z, null);
      if (((se = Re[le.route.id]), !se)) {
        for (let qe of G)
          if (Re[qe.route.id]) {
            se = Re[qe.route.id];
            break;
          }
      }
      if (x.signal.aborted) return { shortCircuited: !0 };
    }
    if (Qa(se)) {
      let ue;
      return (
        te && te.replace != null
          ? (ue = te.replace)
          : (ue =
              tm(se.response.headers.get("Location"), new URL(x.url), y) ===
              O.location.pathname + O.location.search),
        await Tl(x, se, !0, { submission: U, replace: ue }),
        { shortCircuited: !0 }
      );
    }
    if (Vt(se)) {
      let ue = pa(G, le.route.id);
      return (
        (te && te.replace) !== !0 && (be = "PUSH"),
        { matches: G, pendingActionResult: [ue.route.id, se, le.route.id] }
      );
    }
    return { matches: G, pendingActionResult: [le.route.id, se] };
  }
  async function Tr(x, D, U, G, Z, ee, ne, te, re, se, le, ue) {
    let Re = ee || Go(D, ne),
      qe = ne || te || cm(Re),
      tt = !Oe && !se;
    if (Z) {
      if (tt) {
        let ot = wt(ue);
        ct(
          { navigation: Re, ...(ot !== void 0 ? { actionData: ot } : {}) },
          { flushSync: le }
        );
      }
      let Te = await Da(U, D.pathname, x.signal);
      if (Te.type === "aborted") return { shortCircuited: !0 };
      if (Te.type === "error") {
        let ot = pa(Te.partialMatches).route.id;
        return {
          matches: Te.partialMatches,
          loaderData: {},
          errors: { [ot]: Te.error },
        };
      } else if (Te.matches) U = Te.matches;
      else {
        let { error: ot, notFoundMatches: Ma, route: Kt } = Fa(D.pathname);
        return { matches: Ma, loaderData: {}, errors: { [Kt.id]: ot } };
      }
    }
    let lt = b || g,
      { dsMatches: Se, revalidatingFetchers: Xe } = Fh(
        x,
        G,
        f,
        h,
        u.history,
        O,
        U,
        qe,
        D,
        se ? [] : o,
        se === !0,
        ge,
        pe,
        K,
        B,
        S,
        lt,
        y,
        u.patchRoutesOnNavigation != null,
        ue
      );
    if (
      ((P = ++V),
      !u.dataStrategy &&
        !Se.some((Te) => Te.shouldLoad) &&
        !Se.some((Te) => Te.route.unstable_middleware) &&
        Xe.length === 0)
    ) {
      let Te = xa();
      return (
        il(
          D,
          {
            matches: U,
            loaderData: {},
            errors: ue && Vt(ue[1]) ? { [ue[0]]: ue[1].error } : null,
            ...um(ue),
            ...(Te ? { fetchers: new Map(O.fetchers) } : {}),
          },
          { flushSync: le }
        ),
        { shortCircuited: !0 }
      );
    }
    if (tt) {
      let Te = {};
      if (!Z) {
        Te.navigation = Re;
        let ot = wt(ue);
        ot !== void 0 && (Te.actionData = ot);
      }
      Xe.length > 0 && (Te.fetchers = Dr(Xe)), ct(Te, { flushSync: le });
    }
    Xe.forEach((Te) => {
      vl(Te.key), Te.controller && M.set(Te.key, Te.controller);
    });
    let gl = () => Xe.forEach((Te) => vl(Te.key));
    ve && ve.signal.addEventListener("abort", gl);
    let { loaderResults: Ct, fetcherResults: Tt } = await Ju(Se, Xe, x, G);
    if (x.signal.aborted) return { shortCircuited: !0 };
    ve && ve.signal.removeEventListener("abort", gl),
      Xe.forEach((Te) => M.delete(Te.key));
    let Zt = cr(Ct);
    if (Zt)
      return (
        await Tl(x, Zt.result, !0, { replace: re }), { shortCircuited: !0 }
      );
    if (((Zt = cr(Tt)), Zt))
      return (
        S.add(Zt.key),
        await Tl(x, Zt.result, !0, { replace: re }),
        { shortCircuited: !0 }
      );
    let { loaderData: Pa, errors: Kl } = am(O, U, Ct, ue, Xe, Tt);
    se && O.errors && (Kl = { ...O.errors, ...Kl });
    let Ml = xa(),
      jl = Ea(P),
      Al = Ml || jl || Xe.length > 0;
    return {
      matches: U,
      loaderData: Pa,
      errors: Kl,
      ...(Al ? { fetchers: new Map(O.fetchers) } : {}),
    };
  }
  function wt(x) {
    if (x && !Vt(x[1])) return { [x[0]]: x[1].data };
    if (O.actionData)
      return Object.keys(O.actionData).length === 0 ? null : O.actionData;
  }
  function Dr(x) {
    return (
      x.forEach((D) => {
        let U = O.fetchers.get(D.key),
          G = Hu(void 0, U ? U.data : void 0);
        O.fetchers.set(D.key, G);
      }),
      new Map(O.fetchers)
    );
  }
  async function Zu(x, D, U, G) {
    vl(x);
    let Z = (G && G.flushSync) === !0,
      ee = b || g,
      ne = Qo(O.location, O.matches, y, U, D, G?.relative),
      te = ga(ee, ne, y),
      re = Ta(te, ee, ne);
    if ((re.active && re.matches && (te = re.matches), !te)) {
      Pe(x, D, nl(404, { pathname: ne }), { flushSync: Z });
      return;
    }
    let { path: se, submission: le, error: ue } = $h(!0, ne, G);
    if (ue) {
      Pe(x, D, ue, { flushSync: Z });
      return;
    }
    let Re = u.unstable_getContext ? await u.unstable_getContext() : new Jh(),
      qe = (G && G.preventScrollReset) === !0;
    if (le && Ot(le.formMethod)) {
      await Ku(x, D, se, te, Re, re.active, Z, qe, le);
      return;
    }
    B.set(x, { routeId: D, path: se }),
      await $a(x, D, se, te, Re, re.active, Z, qe, le);
  }
  async function Ku(x, D, U, G, Z, ee, ne, te, re) {
    Bn(), B.delete(x);
    let se = O.fetchers.get(x);
    Mt(x, ag(re, se), { flushSync: ne });
    let le = new AbortController(),
      ue = Cn(u.history, U, le.signal, re);
    if (ee) {
      let Ie = await Da(G, new URL(ue.url).pathname, ue.signal, x);
      if (Ie.type === "aborted") return;
      if (Ie.type === "error") {
        Pe(x, D, Ie.error, { flushSync: ne });
        return;
      } else if (Ie.matches) G = Ie.matches;
      else {
        Pe(x, D, nl(404, { pathname: U }), { flushSync: ne });
        return;
      }
    }
    let Re = fr(G, U);
    if (!Re.route.action && !Re.route.lazy) {
      let Ie = nl(405, { method: re.formMethod, pathname: U, routeId: D });
      Pe(x, D, Ie, { flushSync: ne });
      return;
    }
    M.set(x, le);
    let qe = V,
      tt = Un(f, h, ue, G, Re, o, Z),
      Se = (await Zl(ue, tt, Z, x))[Re.route.id];
    if (ue.signal.aborted) {
      M.get(x) === le && M.delete(x);
      return;
    }
    if (K.has(x)) {
      if (Qa(Se) || Vt(Se)) {
        Mt(x, ya(void 0));
        return;
      }
    } else {
      if (Qa(Se))
        if ((M.delete(x), P > qe)) {
          Mt(x, ya(void 0));
          return;
        } else
          return (
            S.add(x),
            Mt(x, Hu(re)),
            Tl(ue, Se, !1, { fetcherSubmission: re, preventScrollReset: te })
          );
      if (Vt(Se)) {
        Pe(x, D, Se.error);
        return;
      }
    }
    let Xe = O.navigation.location || O.location,
      gl = Cn(u.history, Xe, le.signal),
      Ct = b || g,
      Tt =
        O.navigation.state !== "idle"
          ? ga(Ct, O.navigation.location, y)
          : O.matches;
    je(Tt, "Didn't find any matches after fetcher action");
    let Zt = ++V;
    xe.set(x, Zt);
    let Pa = Hu(re, Se.data);
    O.fetchers.set(x, Pa);
    let { dsMatches: Kl, revalidatingFetchers: Ml } = Fh(
      gl,
      Z,
      f,
      h,
      u.history,
      O,
      Tt,
      re,
      Xe,
      o,
      !1,
      ge,
      pe,
      K,
      B,
      S,
      Ct,
      y,
      u.patchRoutesOnNavigation != null,
      [Re.route.id, Se]
    );
    Ml.filter((Ie) => Ie.key !== x).forEach((Ie) => {
      let Jl = Ie.key,
        Pu = O.fetchers.get(Jl),
        Iu = Hu(void 0, Pu ? Pu.data : void 0);
      O.fetchers.set(Jl, Iu), vl(Jl), Ie.controller && M.set(Jl, Ie.controller);
    }),
      ct({ fetchers: new Map(O.fetchers) });
    let jl = () => Ml.forEach((Ie) => vl(Ie.key));
    le.signal.addEventListener("abort", jl);
    let { loaderResults: Al, fetcherResults: Te } = await Ju(Kl, Ml, gl, Z);
    if (le.signal.aborted) return;
    if (
      (le.signal.removeEventListener("abort", jl),
      xe.delete(x),
      M.delete(x),
      Ml.forEach((Ie) => M.delete(Ie.key)),
      O.fetchers.has(x))
    ) {
      let Ie = ya(Se.data);
      O.fetchers.set(x, Ie);
    }
    let ot = cr(Al);
    if (ot) return Tl(gl, ot.result, !1, { preventScrollReset: te });
    if (((ot = cr(Te)), ot))
      return S.add(ot.key), Tl(gl, ot.result, !1, { preventScrollReset: te });
    let { loaderData: Ma, errors: Kt } = am(O, Tt, Al, void 0, Ml, Te);
    Ea(Zt),
      O.navigation.state === "loading" && Zt > P
        ? (je(be, "Expected pending action"),
          ve && ve.abort(),
          il(O.navigation.location, {
            matches: Tt,
            loaderData: Ma,
            errors: Kt,
            fetchers: new Map(O.fetchers),
          }))
        : (ct({
            errors: Kt,
            loaderData: nm(O.loaderData, Ma, Tt, Kt),
            fetchers: new Map(O.fetchers),
          }),
          (ge = !1));
  }
  async function $a(x, D, U, G, Z, ee, ne, te, re) {
    let se = O.fetchers.get(x);
    Mt(x, Hu(re, se ? se.data : void 0), { flushSync: ne });
    let le = new AbortController(),
      ue = Cn(u.history, U, le.signal);
    if (ee) {
      let Xe = await Da(G, new URL(ue.url).pathname, ue.signal, x);
      if (Xe.type === "aborted") return;
      if (Xe.type === "error") {
        Pe(x, D, Xe.error, { flushSync: ne });
        return;
      } else if (Xe.matches) G = Xe.matches;
      else {
        Pe(x, D, nl(404, { pathname: U }), { flushSync: ne });
        return;
      }
    }
    let Re = fr(G, U);
    M.set(x, le);
    let qe = V,
      tt = Un(f, h, ue, G, Re, o, Z),
      Se = (await Zl(ue, tt, Z, x))[Re.route.id];
    if ((M.get(x) === le && M.delete(x), !ue.signal.aborted)) {
      if (K.has(x)) {
        Mt(x, ya(void 0));
        return;
      }
      if (Qa(Se))
        if (P > qe) {
          Mt(x, ya(void 0));
          return;
        } else {
          S.add(x), await Tl(ue, Se, !1, { preventScrollReset: te });
          return;
        }
      if (Vt(Se)) {
        Pe(x, D, Se.error);
        return;
      }
      Mt(x, ya(Se.data));
    }
  }
  async function Tl(
    x,
    D,
    U,
    {
      submission: G,
      fetcherSubmission: Z,
      preventScrollReset: ee,
      replace: ne,
    } = {}
  ) {
    D.response.headers.has("X-Remix-Revalidate") && (ge = !0);
    let te = D.response.headers.get("Location");
    je(te, "Expected a Location header on the redirect Response"),
      (te = tm(te, new URL(x.url), y));
    let re = qu(O.location, te, { _isRedirect: !0 });
    if (c) {
      let tt = !1;
      if (D.response.headers.has("X-Remix-Reload-Document")) tt = !0;
      else if ($o(te)) {
        const lt = gm(te, !0);
        tt = lt.origin !== r.location.origin || ul(lt.pathname, y) == null;
      }
      if (tt) {
        ne ? r.location.replace(te) : r.location.assign(te);
        return;
      }
    }
    ve = null;
    let se =
        ne === !0 || D.response.headers.has("X-Remix-Replace")
          ? "REPLACE"
          : "PUSH",
      { formMethod: le, formAction: ue, formEncType: Re } = O.navigation;
    !G && !Z && le && ue && Re && (G = cm(O.navigation));
    let qe = G || Z;
    if (B0.has(D.response.status) && qe && Ot(qe.formMethod))
      await rl(se, re, {
        submission: { ...qe, formAction: te },
        preventScrollReset: ee || _e,
        enableViewTransition: U ? de : void 0,
      });
    else {
      let tt = Go(re, G);
      await rl(se, re, {
        overrideNavigation: tt,
        fetcherSubmission: Z,
        preventScrollReset: ee || _e,
        enableViewTransition: U ? de : void 0,
      });
    }
  }
  async function Zl(x, D, U, G) {
    let Z,
      ee = {};
    try {
      Z = await k0(v, x, D, G, U, !1);
    } catch (ne) {
      return (
        D.filter((te) => te.shouldLoad).forEach((te) => {
          ee[te.route.id] = { type: "error", error: ne };
        }),
        ee
      );
    }
    if (x.signal.aborted) return ee;
    for (let [ne, te] of Object.entries(Z))
      if (eg(te)) {
        let re = te.result;
        ee[ne] = { type: "redirect", response: W0(re, x, ne, D, y) };
      } else ee[ne] = await F0(te);
    return ee;
  }
  async function Ju(x, D, U, G) {
    let Z = Zl(U, x, G, null),
      ee = Promise.all(
        D.map(async (re) => {
          if (re.matches && re.match && re.request && re.controller) {
            let le = (await Zl(re.request, re.matches, G, re.key))[
              re.match.route.id
            ];
            return { [re.key]: le };
          } else
            return Promise.resolve({
              [re.key]: {
                type: "error",
                error: nl(404, { pathname: re.path }),
              },
            });
        })
      ),
      ne = await Z,
      te = (await ee).reduce((re, se) => Object.assign(re, se), {});
    return { loaderResults: ne, fetcherResults: te };
  }
  function Bn() {
    (ge = !0),
      B.forEach((x, D) => {
        M.has(D) && pe.add(D), vl(D);
      });
  }
  function Mt(x, D, U = {}) {
    O.fetchers.set(x, D),
      ct(
        { fetchers: new Map(O.fetchers) },
        { flushSync: (U && U.flushSync) === !0 }
      );
  }
  function Pe(x, D, U, G = {}) {
    let Z = pa(O.matches, D);
    pt(x),
      ct(
        { errors: { [Z.route.id]: U }, fetchers: new Map(O.fetchers) },
        { flushSync: (G && G.flushSync) === !0 }
      );
  }
  function cl(x) {
    return (
      F.set(x, (F.get(x) || 0) + 1),
      K.has(x) && K.delete(x),
      O.fetchers.get(x) || q0
    );
  }
  function pt(x) {
    let D = O.fetchers.get(x);
    M.has(x) && !(D && D.state === "loading" && xe.has(x)) && vl(x),
      B.delete(x),
      xe.delete(x),
      S.delete(x),
      K.delete(x),
      pe.delete(x),
      O.fetchers.delete(x);
  }
  function Mr(x) {
    let D = (F.get(x) || 0) - 1;
    D <= 0 ? (F.delete(x), K.add(x)) : F.set(x, D),
      ct({ fetchers: new Map(O.fetchers) });
  }
  function vl(x) {
    let D = M.get(x);
    D && (D.abort(), M.delete(x));
  }
  function ku(x) {
    for (let D of x) {
      let U = cl(D),
        G = ya(U.data);
      O.fetchers.set(D, G);
    }
  }
  function xa() {
    let x = [],
      D = !1;
    for (let U of S) {
      let G = O.fetchers.get(U);
      je(G, `Expected fetcher: ${U}`),
        G.state === "loading" && (S.delete(U), x.push(U), (D = !0));
    }
    return ku(x), D;
  }
  function Ea(x) {
    let D = [];
    for (let [U, G] of xe)
      if (G < x) {
        let Z = O.fetchers.get(U);
        je(Z, `Expected fetcher: ${U}`),
          Z.state === "loading" && (vl(U), xe.delete(U), D.push(U));
      }
    return ku(D), D.length > 0;
  }
  function Dl(x, D) {
    let U = O.blockers.get(x) || Uu;
    return ae.get(x) !== D && ae.set(x, D), U;
  }
  function _a(x) {
    O.blockers.delete(x), ae.delete(x);
  }
  function yl(x, D) {
    let U = O.blockers.get(x) || Uu;
    je(
      (U.state === "unblocked" && D.state === "blocked") ||
        (U.state === "blocked" && D.state === "blocked") ||
        (U.state === "blocked" && D.state === "proceeding") ||
        (U.state === "blocked" && D.state === "unblocked") ||
        (U.state === "proceeding" && D.state === "unblocked"),
      `Invalid blocker state transition: ${U.state} -> ${D.state}`
    );
    let G = new Map(O.blockers);
    G.set(x, D), ct({ blockers: G });
  }
  function $u({ currentLocation: x, nextLocation: D, historyAction: U }) {
    if (ae.size === 0) return;
    ae.size > 1 && rt(!1, "A router only supports one blocker at a time");
    let G = Array.from(ae.entries()),
      [Z, ee] = G[G.length - 1],
      ne = O.blockers.get(Z);
    if (
      !(ne && ne.state === "proceeding") &&
      ee({ currentLocation: x, nextLocation: D, historyAction: U })
    )
      return Z;
  }
  function Fa(x) {
    let D = nl(404, { pathname: x }),
      U = b || g,
      { matches: G, route: Z } = im(U);
    return { notFoundMatches: G, route: Z, error: D };
  }
  function Fu(x, D, U) {
    if (((H = x), (J = D), (Q = U || null), !k && O.navigation === Yo)) {
      k = !0;
      let G = Wu(O.location, O.matches);
      G != null && ct({ restoreScrollPosition: G });
    }
    return () => {
      (H = null), (J = null), (Q = null);
    };
  }
  function Wa(x, D) {
    return (
      (Q &&
        Q(
          x,
          D.map((G) => v0(G, O.loaderData))
        )) ||
      x.key
    );
  }
  function Ra(x, D) {
    if (H && J) {
      let U = Wa(x, D);
      H[U] = J();
    }
  }
  function Wu(x, D) {
    if (H) {
      let U = Wa(x, D),
        G = H[U];
      if (typeof G == "number") return G;
    }
    return null;
  }
  function Ta(x, D, U) {
    if (u.patchRoutesOnNavigation)
      if (x) {
        if (Object.keys(x[0].params).length > 0)
          return { active: !0, matches: sr(D, U, y, !0) };
      } else return { active: !0, matches: sr(D, U, y, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Da(x, D, U, G) {
    if (!u.patchRoutesOnNavigation) return { type: "success", matches: x };
    let Z = x;
    for (;;) {
      let ee = b == null,
        ne = b || g,
        te = h;
      try {
        await u.patchRoutesOnNavigation({
          signal: U,
          path: D,
          matches: Z,
          fetcherKey: G,
          patch: (le, ue) => {
            U.aborted || Wh(le, ue, ne, te, f, !1);
          },
        });
      } catch (le) {
        return { type: "error", error: le, partialMatches: Z };
      } finally {
        ee && !U.aborted && (g = [...g]);
      }
      if (U.aborted) return { type: "aborted" };
      let re = ga(ne, D, y);
      if (re) return { type: "success", matches: re };
      let se = sr(ne, D, y, !0);
      if (
        !se ||
        (Z.length === se.length &&
          Z.every((le, ue) => le.route.id === se[ue].route.id))
      )
        return { type: "success", matches: null };
      Z = se;
    }
  }
  function qn(x) {
    (h = {}), (b = Yu(x, f, void 0, h));
  }
  function Yn(x, D, U = !1) {
    let G = b == null;
    Wh(x, D, b || g, h, f, U), G && ((g = [...g]), ct({}));
  }
  return (
    (W = {
      get basename() {
        return y;
      },
      get future() {
        return E;
      },
      get state() {
        return O;
      },
      get routes() {
        return g;
      },
      get window() {
        return r;
      },
      initialize: Rt,
      subscribe: ml,
      enableScrollRestoration: Fu,
      navigate: ka,
      fetch: Zu,
      revalidate: Ln,
      createHref: (x) => u.history.createHref(x),
      encodeLocation: (x) => u.history.encodeLocation(x),
      getFetcher: cl,
      deleteFetcher: Mr,
      dispose: Je,
      getBlocker: Dl,
      deleteBlocker: _a,
      patchRoutes: Yn,
      _internalFetchControllers: M,
      _internalSetRoutes: qn,
      _internalSetStateDoNotUseOrYouWillBreakYourApp(x) {
        ct(x);
      },
    }),
    W
  );
}
function V0(u) {
  return (
    u != null &&
    (("formData" in u && u.formData != null) ||
      ("body" in u && u.body !== void 0))
  );
}
function Qo(u, r, c, o, f, h) {
  let g, b;
  if (f) {
    g = [];
    for (let v of r)
      if ((g.push(v), v.route.id === f)) {
        b = v;
        break;
      }
  } else (g = r), (b = r[r.length - 1]);
  let y = Sr(o || ".", br(g), ul(u.pathname, c) || u.pathname, h === "path");
  if (
    (o == null && ((y.search = u.search), (y.hash = u.hash)),
    (o == null || o === "" || o === ".") && b)
  ) {
    let v = Fo(y.search);
    if (b.route.index && !v)
      y.search = y.search ? y.search.replace(/^\?/, "?index&") : "?index";
    else if (!b.route.index && v) {
      let E = new URLSearchParams(y.search),
        C = E.getAll("index");
      E.delete("index"),
        C.filter((H) => H).forEach((H) => E.append("index", H));
      let A = E.toString();
      y.search = A ? `?${A}` : "";
    }
  }
  return (
    c !== "/" && (y.pathname = j0({ basename: c, pathname: y.pathname })), ba(y)
  );
}
function $h(u, r, c) {
  if (!c || !V0(c)) return { path: r };
  if (c.formMethod && !tg(c.formMethod))
    return { path: r, error: nl(405, { method: c.formMethod }) };
  let o = () => ({ path: r, error: nl(400, { type: "invalid-body" }) }),
    h = (c.formMethod || "get").toUpperCase(),
    g = Nm(r);
  if (c.body !== void 0) {
    if (c.formEncType === "text/plain") {
      if (!Ot(h)) return o();
      let C =
        typeof c.body == "string"
          ? c.body
          : c.body instanceof FormData || c.body instanceof URLSearchParams
          ? Array.from(c.body.entries()).reduce(
              (A, [H, Q]) => `${A}${H}=${Q}
`,
              ""
            )
          : String(c.body);
      return {
        path: r,
        submission: {
          formMethod: h,
          formAction: g,
          formEncType: c.formEncType,
          formData: void 0,
          json: void 0,
          text: C,
        },
      };
    } else if (c.formEncType === "application/json") {
      if (!Ot(h)) return o();
      try {
        let C = typeof c.body == "string" ? JSON.parse(c.body) : c.body;
        return {
          path: r,
          submission: {
            formMethod: h,
            formAction: g,
            formEncType: c.formEncType,
            formData: void 0,
            json: C,
            text: void 0,
          },
        };
      } catch {
        return o();
      }
    }
  }
  je(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let b, y;
  if (c.formData) (b = Jo(c.formData)), (y = c.formData);
  else if (c.body instanceof FormData) (b = Jo(c.body)), (y = c.body);
  else if (c.body instanceof URLSearchParams) (b = c.body), (y = lm(b));
  else if (c.body == null) (b = new URLSearchParams()), (y = new FormData());
  else
    try {
      (b = new URLSearchParams(c.body)), (y = lm(b));
    } catch {
      return o();
    }
  let v = {
    formMethod: h,
    formAction: g,
    formEncType: (c && c.formEncType) || "application/x-www-form-urlencoded",
    formData: y,
    json: void 0,
    text: void 0,
  };
  if (Ot(v.formMethod)) return { path: r, submission: v };
  let E = Sa(r);
  return (
    u && E.search && Fo(E.search) && b.append("index", ""),
    (E.search = `?${b}`),
    { path: ba(E), submission: v }
  );
}
function Fh(u, r, c, o, f, h, g, b, y, v, E, C, A, H, Q, J, k, X, ce, $) {
  let oe = $ ? (Vt($[1]) ? $[1].error : $[1].data) : void 0,
    W = f.createURL(h.location),
    O = f.createURL(y),
    be;
  if (E && h.errors) {
    let Oe = Object.keys(h.errors)[0];
    be = g.findIndex((ge) => ge.route.id === Oe);
  } else if ($ && Vt($[1])) {
    let Oe = $[0];
    be = g.findIndex((ge) => ge.route.id === Oe) - 1;
  }
  let _e = $ ? $[1].statusCode : void 0,
    ve = _e && _e >= 400,
    de = {
      currentUrl: W,
      currentParams: h.matches[0]?.params || {},
      nextUrl: O,
      nextParams: g[0].params,
      ...b,
      actionResult: oe,
      actionStatus: _e,
    },
    We = g.map((Oe, ge) => {
      let { route: pe } = Oe,
        M = null;
      if (
        (be != null && ge > be
          ? (M = !1)
          : pe.lazy
          ? (M = !0)
          : pe.loader == null
          ? (M = !1)
          : E
          ? (M = Zo(pe, h.loaderData, h.errors))
          : Q0(h.loaderData, h.matches[ge], Oe) && (M = !0),
        M !== null)
      )
        return Ko(c, o, u, Oe, v, r, M);
      let V = ve
          ? !1
          : C ||
            W.pathname + W.search === O.pathname + O.search ||
            W.search !== O.search ||
            Z0(h.matches[ge], Oe),
        P = { ...de, defaultShouldRevalidate: V },
        xe = yr(Oe, P);
      return Ko(c, o, u, Oe, v, r, xe, P);
    }),
    Be = [];
  return (
    Q.forEach((Oe, ge) => {
      if (E || !g.some((F) => F.route.id === Oe.routeId) || H.has(ge)) return;
      let pe = h.fetchers.get(ge),
        M = pe && pe.state !== "idle" && pe.data === void 0,
        V = ga(k, Oe.path, X);
      if (!V) {
        if (ce && M) return;
        Be.push({
          key: ge,
          routeId: Oe.routeId,
          path: Oe.path,
          matches: null,
          match: null,
          request: null,
          controller: null,
        });
        return;
      }
      if (J.has(ge)) return;
      let P = fr(V, Oe.path),
        xe = new AbortController(),
        S = Cn(f, Oe.path, xe.signal),
        B = null;
      if (A.has(ge)) A.delete(ge), (B = Un(c, o, S, V, P, v, r));
      else if (M) C && (B = Un(c, o, S, V, P, v, r));
      else {
        let F = { ...de, defaultShouldRevalidate: ve ? !1 : C };
        yr(P, F) && (B = Un(c, o, S, V, P, v, r, F));
      }
      B &&
        Be.push({
          key: ge,
          routeId: Oe.routeId,
          path: Oe.path,
          matches: B,
          match: P,
          request: S,
          controller: xe,
        });
    }),
    { dsMatches: We, revalidatingFetchers: Be }
  );
}
function Zo(u, r, c) {
  if (u.lazy) return !0;
  if (!u.loader) return !1;
  let o = r != null && u.id in r,
    f = c != null && c[u.id] !== void 0;
  return !o && f
    ? !1
    : typeof u.loader == "function" && u.loader.hydrate === !0
    ? !0
    : !o && !f;
}
function Q0(u, r, c) {
  let o = !r || c.route.id !== r.route.id,
    f = !u.hasOwnProperty(c.route.id);
  return o || f;
}
function Z0(u, r) {
  let c = u.route.path;
  return (
    u.pathname !== r.pathname ||
    (c != null && c.endsWith("*") && u.params["*"] !== r.params["*"])
  );
}
function yr(u, r) {
  if (u.route.shouldRevalidate) {
    let c = u.route.shouldRevalidate(r);
    if (typeof c == "boolean") return c;
  }
  return r.defaultShouldRevalidate;
}
function Wh(u, r, c, o, f, h) {
  let g;
  if (u) {
    let v = o[u];
    je(v, `No route found to patch children into: routeId = ${u}`),
      v.children || (v.children = []),
      (g = v.children);
  } else g = c;
  let b = [],
    y = [];
  if (
    (r.forEach((v) => {
      let E = g.find((C) => Rm(v, C));
      E ? y.push({ existingRoute: E, newRoute: v }) : b.push(v);
    }),
    b.length > 0)
  ) {
    let v = Yu(b, f, [u || "_", "patch", String(g?.length || "0")], o);
    g.push(...v);
  }
  if (h && y.length > 0)
    for (let v = 0; v < y.length; v++) {
      let { existingRoute: E, newRoute: C } = y[v],
        A = E,
        [H] = Yu([C], f, [], {}, !0);
      Object.assign(A, {
        element: H.element ? H.element : A.element,
        errorElement: H.errorElement ? H.errorElement : A.errorElement,
        hydrateFallbackElement: H.hydrateFallbackElement
          ? H.hydrateFallbackElement
          : A.hydrateFallbackElement,
      });
    }
}
function Rm(u, r) {
  return "id" in u && "id" in r && u.id === r.id
    ? !0
    : u.index === r.index &&
      u.path === r.path &&
      u.caseSensitive === r.caseSensitive
    ? (!u.children || u.children.length === 0) &&
      (!r.children || r.children.length === 0)
      ? !0
      : u.children.every((c, o) => r.children?.some((f) => Rm(c, f)))
    : !1;
}
var Ph = new WeakMap(),
  Tm = ({ key: u, route: r, manifest: c, mapRouteProperties: o }) => {
    let f = c[r.id];
    if (
      (je(f, "No route found in manifest"),
      !f.lazy || typeof f.lazy != "object")
    )
      return;
    let h = f.lazy[u];
    if (!h) return;
    let g = Ph.get(f);
    g || ((g = {}), Ph.set(f, g));
    let b = g[u];
    if (b) return b;
    let y = (async () => {
      let v = f0(u),
        C = f[u] !== void 0 && u !== "hasErrorBoundary";
      if (v)
        rt(
          !v,
          "Route property " +
            u +
            " is not a supported lazy route property. This property will be ignored."
        ),
          (g[u] = Promise.resolve());
      else if (C)
        rt(
          !1,
          `Route "${f.id}" has a static property "${u}" defined. The lazy property will be ignored.`
        );
      else {
        let A = await h();
        A != null && (Object.assign(f, { [u]: A }), Object.assign(f, o(f)));
      }
      typeof f.lazy == "object" &&
        ((f.lazy[u] = void 0),
        Object.values(f.lazy).every((A) => A === void 0) && (f.lazy = void 0));
    })();
    return (g[u] = y), y;
  },
  Ih = new WeakMap();
function K0(u, r, c, o, f) {
  let h = c[u.id];
  if ((je(h, "No route found in manifest"), !u.lazy))
    return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
  if (typeof u.lazy == "function") {
    let E = Ih.get(h);
    if (E) return { lazyRoutePromise: E, lazyHandlerPromise: E };
    let C = (async () => {
      je(typeof u.lazy == "function", "No lazy route function found");
      let A = await u.lazy(),
        H = {};
      for (let Q in A) {
        let J = A[Q];
        if (J === void 0) continue;
        let k = h0(Q),
          ce = h[Q] !== void 0 && Q !== "hasErrorBoundary";
        k
          ? rt(
              !k,
              "Route property " +
                Q +
                " is not a supported property to be returned from a lazy route function. This property will be ignored."
            )
          : ce
          ? rt(
              !ce,
              `Route "${h.id}" has a static property "${Q}" defined but its lazy function is also returning a value for this property. The lazy route property "${Q}" will be ignored.`
            )
          : (H[Q] = J);
      }
      Object.assign(h, H), Object.assign(h, { ...o(h), lazy: void 0 });
    })();
    return (
      Ih.set(h, C),
      C.catch(() => {}),
      { lazyRoutePromise: C, lazyHandlerPromise: C }
    );
  }
  let g = Object.keys(u.lazy),
    b = [],
    y;
  for (let E of g) {
    if (f && f.includes(E)) continue;
    let C = Tm({ key: E, route: u, manifest: c, mapRouteProperties: o });
    C && (b.push(C), E === r && (y = C));
  }
  let v = b.length > 0 ? Promise.all(b).then(() => {}) : void 0;
  return (
    v?.catch(() => {}),
    y?.catch(() => {}),
    { lazyRoutePromise: v, lazyHandlerPromise: y }
  );
}
async function em(u) {
  let r = u.matches.filter((f) => f.shouldLoad),
    c = {};
  return (
    (await Promise.all(r.map((f) => f.resolve()))).forEach((f, h) => {
      c[r[h].route.id] = f;
    }),
    c
  );
}
async function J0(u) {
  if (!u.matches.some((c) => c.route.unstable_middleware)) return em(u);
  let r = !1;
  return Mm(
    u,
    () => ((r = !0), em(u)),
    (c, o) => Dm(c, o, u.matches, r)
  );
}
function Dm(u, r, c, o) {
  return o
    ? { [r]: { type: "error", result: u } }
    : {
        [pa(c, c.find((h) => h.route.id === r || h.route.loader)?.route.id || r)
          .route.id]: { type: "error", result: u },
      };
}
async function Mm(u, r, c) {
  let { matches: o, request: f, params: h, context: g } = u,
    b = o.flatMap((v) =>
      v.route.unstable_middleware
        ? v.route.unstable_middleware.map((E) => [v.route.id, E])
        : []
    ),
    y = {};
  return await jm({ request: f, params: h, context: g }, b, r, c, y), y;
}
async function jm(u, r, c, o, f = {}, h = 0) {
  let { request: g } = u;
  if (g.signal.aborted)
    throw g.signal.reason
      ? g.signal.reason
      : new Error(
          `Request aborted without an \`AbortSignal.reason\`: ${g.method} ${g.url}`
        );
  let b = r[h];
  if (!b) {
    let A = await c();
    Object.assign(f, A);
    return;
  }
  let [y, v] = b,
    E = !1,
    C = async () => {
      if (E) throw new Error("You may only call `next()` once per middleware");
      E = !0;
      try {
        let A = await jm(u, r, c, o, f, h + 1);
        Object.assign(f, A);
      } catch (A) {
        let H = await o(A, y);
        Object.assign(f, H);
      }
    };
  try {
    let A = await v(
      { request: u.request, params: u.params, context: u.context },
      C
    );
    typeof A < "u" &&
      console.warn(
        "client middlewares are not intended to return values, the value will be ignored",
        A
      ),
      E || (await C());
  } catch (A) {
    let H = await o(A, y);
    Object.assign(f, H);
  }
}
function Am(u, r, c, o, f) {
  let h = Tm({
      key: "unstable_middleware",
      route: o.route,
      manifest: r,
      mapRouteProperties: u,
    }),
    g = K0(o.route, Ot(c.method) ? "action" : "loader", r, u, f);
  return {
    middleware: h,
    route: g.lazyRoutePromise,
    handler: g.lazyHandlerPromise,
  };
}
function Ko(u, r, c, o, f, h, g, b = null) {
  let y = !1,
    v = Am(u, r, c, o, f);
  return {
    ...o,
    _lazyPromises: v,
    shouldLoad: g,
    unstable_shouldRevalidateArgs: b,
    unstable_shouldCallHandler(E) {
      return (
        (y = !0),
        b
          ? typeof E == "boolean"
            ? yr(o, { ...b, defaultShouldRevalidate: E })
            : yr(o, b)
          : g
      );
    },
    resolve(E) {
      return y || g || (E && !Ot(c.method) && (o.route.lazy || o.route.loader))
        ? $0({
            request: c,
            match: o,
            lazyHandlerPromise: v?.handler,
            lazyRoutePromise: v?.route,
            handlerOverride: E,
            scopedContext: h,
          })
        : Promise.resolve({ type: "data", result: void 0 });
    },
  };
}
function Un(u, r, c, o, f, h, g, b = null) {
  return o.map((y) =>
    y.route.id !== f.route.id
      ? {
          ...y,
          shouldLoad: !1,
          unstable_shouldRevalidateArgs: b,
          unstable_shouldCallHandler: () => !1,
          _lazyPromises: Am(u, r, c, y, h),
          resolve: () => Promise.resolve({ type: "data", result: void 0 }),
        }
      : Ko(u, r, c, y, h, g, !0, b)
  );
}
async function k0(u, r, c, o, f, h) {
  c.some((v) => v._lazyPromises?.middleware) &&
    (await Promise.all(c.map((v) => v._lazyPromises?.middleware)));
  let g = { request: r, params: c[0].params, context: f, matches: c },
    y = await u({
      ...g,
      fetcherKey: o,
      unstable_runClientMiddleware: (v) => {
        let E = g,
          C = !1;
        return Mm(
          E,
          () => (
            (C = !0),
            v({
              ...E,
              fetcherKey: o,
              unstable_runClientMiddleware: () => {
                throw new Error(
                  "Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler"
                );
              },
            })
          ),
          (A, H) => Dm(A, H, c, C)
        );
      },
    });
  try {
    await Promise.all(
      c.flatMap((v) => [v._lazyPromises?.handler, v._lazyPromises?.route])
    );
  } catch {}
  return y;
}
async function $0({
  request: u,
  match: r,
  lazyHandlerPromise: c,
  lazyRoutePromise: o,
  handlerOverride: f,
  scopedContext: h,
}) {
  let g,
    b,
    y = Ot(u.method),
    v = y ? "action" : "loader",
    E = (C) => {
      let A,
        H = new Promise((k, X) => (A = X));
      (b = () => A()), u.signal.addEventListener("abort", b);
      let Q = (k) =>
          typeof C != "function"
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${v}" [routeId: ${r.route.id}]`
                )
              )
            : C(
                { request: u, params: r.params, context: h },
                ...(k !== void 0 ? [k] : [])
              ),
        J = (async () => {
          try {
            return { type: "data", result: await (f ? f((X) => Q(X)) : Q()) };
          } catch (k) {
            return { type: "error", result: k };
          }
        })();
      return Promise.race([J, H]);
    };
  try {
    let C = y ? r.route.action : r.route.loader;
    if (c || o)
      if (C) {
        let A,
          [H] = await Promise.all([
            E(C).catch((Q) => {
              A = Q;
            }),
            c,
            o,
          ]);
        if (A !== void 0) throw A;
        g = H;
      } else {
        await c;
        let A = y ? r.route.action : r.route.loader;
        if (A) [g] = await Promise.all([E(A), o]);
        else if (v === "action") {
          let H = new URL(u.url),
            Q = H.pathname + H.search;
          throw nl(405, { method: u.method, pathname: Q, routeId: r.route.id });
        } else return { type: "data", result: void 0 };
      }
    else if (C) g = await E(C);
    else {
      let A = new URL(u.url),
        H = A.pathname + A.search;
      throw nl(404, { pathname: H });
    }
  } catch (C) {
    return { type: "error", result: C };
  } finally {
    b && u.signal.removeEventListener("abort", b);
  }
  return g;
}
async function F0(u) {
  let { result: r, type: c } = u;
  if (zm(r)) {
    let o;
    try {
      let f = r.headers.get("Content-Type");
      f && /\bapplication\/json\b/.test(f)
        ? r.body == null
          ? (o = null)
          : (o = await r.json())
        : (o = await r.text());
    } catch (f) {
      return { type: "error", error: f };
    }
    return c === "error"
      ? {
          type: "error",
          error: new vr(r.status, r.statusText, o),
          statusCode: r.status,
          headers: r.headers,
        }
      : { type: "data", data: o, statusCode: r.status, headers: r.headers };
  }
  return c === "error"
    ? rm(r)
      ? r.data instanceof Error
        ? {
            type: "error",
            error: r.data,
            statusCode: r.init?.status,
            headers: r.init?.headers ? new Headers(r.init.headers) : void 0,
          }
        : {
            type: "error",
            error: new vr(r.init?.status || 500, void 0, r.data),
            statusCode: Gu(r) ? r.status : void 0,
            headers: r.init?.headers ? new Headers(r.init.headers) : void 0,
          }
      : { type: "error", error: r, statusCode: Gu(r) ? r.status : void 0 }
    : rm(r)
    ? {
        type: "data",
        data: r.data,
        statusCode: r.init?.status,
        headers: r.init?.headers ? new Headers(r.init.headers) : void 0,
      }
    : { type: "data", data: r };
}
function W0(u, r, c, o, f) {
  let h = u.headers.get("Location");
  if (
    (je(
      h,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !$o(h))
  ) {
    let g = o.slice(0, o.findIndex((b) => b.route.id === c) + 1);
    (h = Qo(new URL(r.url), g, f, h)), u.headers.set("Location", h);
  }
  return u;
}
function tm(u, r, c) {
  if ($o(u)) {
    let o = u,
      f = o.startsWith("//") ? new URL(r.protocol + o) : new URL(o),
      h = ul(f.pathname, c) != null;
    if (f.origin === r.origin && h) return f.pathname + f.search + f.hash;
  }
  return u;
}
function Cn(u, r, c, o) {
  let f = u.createURL(Nm(r)).toString(),
    h = { signal: c };
  if (o && Ot(o.formMethod)) {
    let { formMethod: g, formEncType: b } = o;
    (h.method = g.toUpperCase()),
      b === "application/json"
        ? ((h.headers = new Headers({ "Content-Type": b })),
          (h.body = JSON.stringify(o.json)))
        : b === "text/plain"
        ? (h.body = o.text)
        : b === "application/x-www-form-urlencoded" && o.formData
        ? (h.body = Jo(o.formData))
        : (h.body = o.formData);
  }
  return new Request(f, h);
}
function Jo(u) {
  let r = new URLSearchParams();
  for (let [c, o] of u.entries())
    r.append(c, typeof o == "string" ? o : o.name);
  return r;
}
function lm(u) {
  let r = new FormData();
  for (let [c, o] of u.entries()) r.append(c, o);
  return r;
}
function P0(u, r, c, o = !1, f = !1) {
  let h = {},
    g = null,
    b,
    y = !1,
    v = {},
    E = c && Vt(c[1]) ? c[1].error : void 0;
  return (
    u.forEach((C) => {
      if (!(C.route.id in r)) return;
      let A = C.route.id,
        H = r[A];
      if (
        (je(!Qa(H), "Cannot handle redirect results in processLoaderData"),
        Vt(H))
      ) {
        let Q = H.error;
        if ((E !== void 0 && ((Q = E), (E = void 0)), (g = g || {}), f))
          g[A] = Q;
        else {
          let J = pa(u, A);
          g[J.route.id] == null && (g[J.route.id] = Q);
        }
        o || (h[A] = _m),
          y || ((y = !0), (b = Gu(H.error) ? H.error.status : 500)),
          H.headers && (v[A] = H.headers);
      } else
        (h[A] = H.data),
          H.statusCode && H.statusCode !== 200 && !y && (b = H.statusCode),
          H.headers && (v[A] = H.headers);
    }),
    E !== void 0 && c && ((g = { [c[0]]: E }), c[2] && (h[c[2]] = void 0)),
    { loaderData: h, errors: g, statusCode: b || 200, loaderHeaders: v }
  );
}
function am(u, r, c, o, f, h) {
  let { loaderData: g, errors: b } = P0(r, c, o);
  return (
    f
      .filter((y) => !y.matches || y.matches.some((v) => v.shouldLoad))
      .forEach((y) => {
        let { key: v, match: E, controller: C } = y;
        if (C && C.signal.aborted) return;
        let A = h[v];
        if ((je(A, "Did not find corresponding fetcher result"), Vt(A))) {
          let H = pa(u.matches, E?.route.id);
          (b && b[H.route.id]) || (b = { ...b, [H.route.id]: A.error }),
            u.fetchers.delete(v);
        } else if (Qa(A)) je(!1, "Unhandled fetcher revalidation redirect");
        else {
          let H = ya(A.data);
          u.fetchers.set(v, H);
        }
      }),
    { loaderData: g, errors: b }
  );
}
function nm(u, r, c, o) {
  let f = Object.entries(r)
    .filter(([, h]) => h !== _m)
    .reduce((h, [g, b]) => ((h[g] = b), h), {});
  for (let h of c) {
    let g = h.route.id;
    if (
      (!r.hasOwnProperty(g) &&
        u.hasOwnProperty(g) &&
        h.route.loader &&
        (f[g] = u[g]),
      o && o.hasOwnProperty(g))
    )
      break;
  }
  return f;
}
function um(u) {
  return u
    ? Vt(u[1])
      ? { actionData: {} }
      : { actionData: { [u[0]]: u[1].data } }
    : {};
}
function pa(u, r) {
  return (
    (r ? u.slice(0, u.findIndex((o) => o.route.id === r) + 1) : [...u])
      .reverse()
      .find((o) => o.route.hasErrorBoundary === !0) || u[0]
  );
}
function im(u) {
  let r =
    u.length === 1
      ? u[0]
      : u.find((c) => c.index || !c.path || c.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: r }],
    route: r,
  };
}
function nl(
  u,
  { pathname: r, routeId: c, method: o, type: f, message: h } = {}
) {
  let g = "Unknown Server Error",
    b = "Unknown @remix-run/router error";
  return (
    u === 400
      ? ((g = "Bad Request"),
        o && r && c
          ? (b = `You made a ${o} request to "${r}" but did not provide a \`loader\` for route "${c}", so there is no way to handle the request.`)
          : f === "invalid-body" && (b = "Unable to encode submission body"))
      : u === 403
      ? ((g = "Forbidden"), (b = `Route "${c}" does not match URL "${r}"`))
      : u === 404
      ? ((g = "Not Found"), (b = `No route matches URL "${r}"`))
      : u === 405 &&
        ((g = "Method Not Allowed"),
        o && r && c
          ? (b = `You made a ${o.toUpperCase()} request to "${r}" but did not provide an \`action\` for route "${c}", so there is no way to handle the request.`)
          : o && (b = `Invalid request method "${o.toUpperCase()}"`)),
    new vr(u || 500, g, new Error(b), !0)
  );
}
function cr(u) {
  let r = Object.entries(u);
  for (let c = r.length - 1; c >= 0; c--) {
    let [o, f] = r[c];
    if (Qa(f)) return { key: o, result: f };
  }
}
function Nm(u) {
  let r = typeof u == "string" ? Sa(u) : u;
  return ba({ ...r, hash: "" });
}
function I0(u, r) {
  return u.pathname !== r.pathname || u.search !== r.search
    ? !1
    : u.hash === ""
    ? r.hash !== ""
    : u.hash === r.hash
    ? !0
    : r.hash !== "";
}
function eg(u) {
  return zm(u.result) && L0.has(u.result.status);
}
function Vt(u) {
  return u.type === "error";
}
function Qa(u) {
  return (u && u.type) === "redirect";
}
function rm(u) {
  return (
    typeof u == "object" &&
    u != null &&
    "type" in u &&
    "data" in u &&
    "init" in u &&
    u.type === "DataWithResponseInit"
  );
}
function zm(u) {
  return (
    u != null &&
    typeof u.status == "number" &&
    typeof u.statusText == "string" &&
    typeof u.headers == "object" &&
    typeof u.body < "u"
  );
}
function tg(u) {
  return H0.has(u.toUpperCase());
}
function Ot(u) {
  return C0.has(u.toUpperCase());
}
function Fo(u) {
  return new URLSearchParams(u).getAll("index").some((r) => r === "");
}
function fr(u, r) {
  let c = typeof r == "string" ? Sa(r).search : r.search;
  if (u[u.length - 1].route.index && Fo(c || "")) return u[u.length - 1];
  let o = Sm(u);
  return o[o.length - 1];
}
function cm(u) {
  let {
    formMethod: r,
    formAction: c,
    formEncType: o,
    text: f,
    formData: h,
    json: g,
  } = u;
  if (!(!r || !c || !o)) {
    if (f != null)
      return {
        formMethod: r,
        formAction: c,
        formEncType: o,
        formData: void 0,
        json: void 0,
        text: f,
      };
    if (h != null)
      return {
        formMethod: r,
        formAction: c,
        formEncType: o,
        formData: h,
        json: void 0,
        text: void 0,
      };
    if (g !== void 0)
      return {
        formMethod: r,
        formAction: c,
        formEncType: o,
        formData: void 0,
        json: g,
        text: void 0,
      };
  }
}
function Go(u, r) {
  return r
    ? {
        state: "loading",
        location: u,
        formMethod: r.formMethod,
        formAction: r.formAction,
        formEncType: r.formEncType,
        formData: r.formData,
        json: r.json,
        text: r.text,
      }
    : {
        state: "loading",
        location: u,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function lg(u, r) {
  return {
    state: "submitting",
    location: u,
    formMethod: r.formMethod,
    formAction: r.formAction,
    formEncType: r.formEncType,
    formData: r.formData,
    json: r.json,
    text: r.text,
  };
}
function Hu(u, r) {
  return u
    ? {
        state: "loading",
        formMethod: u.formMethod,
        formAction: u.formAction,
        formEncType: u.formEncType,
        formData: u.formData,
        json: u.json,
        text: u.text,
        data: r,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: r,
      };
}
function ag(u, r) {
  return {
    state: "submitting",
    formMethod: u.formMethod,
    formAction: u.formAction,
    formEncType: u.formEncType,
    formData: u.formData,
    json: u.json,
    text: u.text,
    data: r ? r.data : void 0,
  };
}
function ya(u) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: u,
  };
}
function ng(u, r) {
  try {
    let c = u.sessionStorage.getItem(Em);
    if (c) {
      let o = JSON.parse(c);
      for (let [f, h] of Object.entries(o || {}))
        h && Array.isArray(h) && r.set(f, new Set(h || []));
    }
  } catch {}
}
function ug(u, r) {
  if (r.size > 0) {
    let c = {};
    for (let [o, f] of r) c[o] = [...f];
    try {
      u.sessionStorage.setItem(Em, JSON.stringify(c));
    } catch (o) {
      rt(
        !1,
        `Failed to save applied view transitions in sessionStorage (${o}).`
      );
    }
  }
}
function ig() {
  let u,
    r,
    c = new Promise((o, f) => {
      (u = async (h) => {
        o(h);
        try {
          await c;
        } catch {}
      }),
        (r = async (h) => {
          f(h);
          try {
            await c;
          } catch {}
        });
    });
  return { promise: c, resolve: u, reject: r };
}
var Ka = R.createContext(null);
Ka.displayName = "DataRouter";
var Xu = R.createContext(null);
Xu.displayName = "DataRouterState";
R.createContext(!1);
var Wo = R.createContext({ isTransitioning: !1 });
Wo.displayName = "ViewTransition";
var Om = R.createContext(new Map());
Om.displayName = "Fetchers";
var rg = R.createContext(null);
rg.displayName = "Await";
var dl = R.createContext(null);
dl.displayName = "Navigation";
var xr = R.createContext(null);
xr.displayName = "Location";
var hl = R.createContext({ outlet: null, matches: [], isDataRoute: !1 });
hl.displayName = "Route";
var Po = R.createContext(null);
Po.displayName = "RouteError";
function cg(u, { relative: r } = {}) {
  je(
    Hn(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: c, navigator: o } = R.useContext(dl),
    { hash: f, pathname: h, search: g } = Qu(u, { relative: r }),
    b = h;
  return (
    c !== "/" && (b = h === "/" ? c : _l([c, h])),
    o.createHref({ pathname: b, search: g, hash: f })
  );
}
function Hn() {
  return R.useContext(xr) != null;
}
function Ql() {
  return (
    je(
      Hn(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    R.useContext(xr).location
  );
}
var wm =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Cm(u) {
  R.useContext(dl).static || R.useLayoutEffect(u);
}
function Vu() {
  let { isDataRoute: u } = R.useContext(hl);
  return u ? _g() : og();
}
function og() {
  je(
    Hn(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let u = R.useContext(Ka),
    { basename: r, navigator: c } = R.useContext(dl),
    { matches: o } = R.useContext(hl),
    { pathname: f } = Ql(),
    h = JSON.stringify(br(o)),
    g = R.useRef(!1);
  return (
    Cm(() => {
      g.current = !0;
    }),
    R.useCallback(
      (y, v = {}) => {
        if ((rt(g.current, wm), !g.current)) return;
        if (typeof y == "number") {
          c.go(y);
          return;
        }
        let E = Sr(y, JSON.parse(h), f, v.relative === "path");
        u == null &&
          r !== "/" &&
          (E.pathname = E.pathname === "/" ? r : _l([r, E.pathname])),
          (v.replace ? c.replace : c.push)(E, v.state, v);
      },
      [r, c, h, f, u]
    )
  );
}
var sg = R.createContext(null);
function fg(u) {
  let r = R.useContext(hl).outlet;
  return r && R.createElement(sg.Provider, { value: u }, r);
}
function Qu(u, { relative: r } = {}) {
  let { matches: c } = R.useContext(hl),
    { pathname: o } = Ql(),
    f = JSON.stringify(br(c));
  return R.useMemo(() => Sr(u, JSON.parse(f), o, r === "path"), [u, f, o, r]);
}
function dg(u, r, c, o) {
  je(
    Hn(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: f } = R.useContext(dl),
    { matches: h } = R.useContext(hl),
    g = h[h.length - 1],
    b = g ? g.params : {},
    y = g ? g.pathname : "/",
    v = g ? g.pathnameBase : "/",
    E = g && g.route;
  {
    let X = (E && E.path) || "";
    Um(
      y,
      !E || X.endsWith("*") || X.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${
        X === "/" ? "*" : `${X}/*`
      }">.`
    );
  }
  let C = Ql(),
    A;
  A = C;
  let H = A.pathname || "/",
    Q = H;
  if (v !== "/") {
    let X = v.replace(/^\//, "").split("/");
    Q = "/" + H.replace(/^\//, "").split("/").slice(X.length).join("/");
  }
  let J = ga(u, { pathname: Q });
  return (
    rt(
      E || J != null,
      `No routes matched location "${A.pathname}${A.search}${A.hash}" `
    ),
    rt(
      J == null ||
        J[J.length - 1].route.element !== void 0 ||
        J[J.length - 1].route.Component !== void 0 ||
        J[J.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ),
    gg(
      J &&
        J.map((X) =>
          Object.assign({}, X, {
            params: Object.assign({}, b, X.params),
            pathname: _l([
              v,
              f.encodeLocation
                ? f.encodeLocation(X.pathname).pathname
                : X.pathname,
            ]),
            pathnameBase:
              X.pathnameBase === "/"
                ? v
                : _l([
                    v,
                    f.encodeLocation
                      ? f.encodeLocation(X.pathnameBase).pathname
                      : X.pathnameBase,
                  ]),
          })
        ),
      h,
      c,
      o
    )
  );
}
function hg() {
  let u = Eg(),
    r = Gu(u)
      ? `${u.status} ${u.statusText}`
      : u instanceof Error
      ? u.message
      : JSON.stringify(u),
    c = u instanceof Error ? u.stack : null,
    o = "rgba(200,200,200, 0.5)",
    f = { padding: "0.5rem", backgroundColor: o },
    h = { padding: "2px 4px", backgroundColor: o },
    g = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", u),
    (g = R.createElement(
      R.Fragment,
      null,
      R.createElement("p", null, "💿 Hey developer 👋"),
      R.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        R.createElement("code", { style: h }, "ErrorBoundary"),
        " or",
        " ",
        R.createElement("code", { style: h }, "errorElement"),
        " prop on your route."
      )
    )),
    R.createElement(
      R.Fragment,
      null,
      R.createElement("h2", null, "Unexpected Application Error!"),
      R.createElement("h3", { style: { fontStyle: "italic" } }, r),
      c ? R.createElement("pre", { style: f }, c) : null,
      g
    )
  );
}
var mg = R.createElement(hg, null),
  vg = class extends R.Component {
    constructor(u) {
      super(u),
        (this.state = {
          location: u.location,
          revalidation: u.revalidation,
          error: u.error,
        });
    }
    static getDerivedStateFromError(u) {
      return { error: u };
    }
    static getDerivedStateFromProps(u, r) {
      return r.location !== u.location ||
        (r.revalidation !== "idle" && u.revalidation === "idle")
        ? { error: u.error, location: u.location, revalidation: u.revalidation }
        : {
            error: u.error !== void 0 ? u.error : r.error,
            location: r.location,
            revalidation: u.revalidation || r.revalidation,
          };
    }
    componentDidCatch(u, r) {
      console.error(
        "React Router caught the following error during render",
        u,
        r
      );
    }
    render() {
      return this.state.error !== void 0
        ? R.createElement(
            hl.Provider,
            { value: this.props.routeContext },
            R.createElement(Po.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function yg({ routeContext: u, match: r, children: c }) {
  let o = R.useContext(Ka);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = r.route.id),
    R.createElement(hl.Provider, { value: u }, c)
  );
}
function gg(u, r = [], c = null, o = null) {
  if (u == null) {
    if (!c) return null;
    if (c.errors) u = c.matches;
    else if (r.length === 0 && !c.initialized && c.matches.length > 0)
      u = c.matches;
    else return null;
  }
  let f = u,
    h = c?.errors;
  if (h != null) {
    let y = f.findIndex((v) => v.route.id && h?.[v.route.id] !== void 0);
    je(
      y >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        h
      ).join(",")}`
    ),
      (f = f.slice(0, Math.min(f.length, y + 1)));
  }
  let g = !1,
    b = -1;
  if (c)
    for (let y = 0; y < f.length; y++) {
      let v = f[y];
      if (
        ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (b = y),
        v.route.id)
      ) {
        let { loaderData: E, errors: C } = c,
          A =
            v.route.loader &&
            !E.hasOwnProperty(v.route.id) &&
            (!C || C[v.route.id] === void 0);
        if (v.route.lazy || A) {
          (g = !0), b >= 0 ? (f = f.slice(0, b + 1)) : (f = [f[0]]);
          break;
        }
      }
    }
  return f.reduceRight((y, v, E) => {
    let C,
      A = !1,
      H = null,
      Q = null;
    c &&
      ((C = h && v.route.id ? h[v.route.id] : void 0),
      (H = v.route.errorElement || mg),
      g &&
        (b < 0 && E === 0
          ? (Um(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (A = !0),
            (Q = null))
          : b === E &&
            ((A = !0), (Q = v.route.hydrateFallbackElement || null))));
    let J = r.concat(f.slice(0, E + 1)),
      k = () => {
        let X;
        return (
          C
            ? (X = H)
            : A
            ? (X = Q)
            : v.route.Component
            ? (X = R.createElement(v.route.Component, null))
            : v.route.element
            ? (X = v.route.element)
            : (X = y),
          R.createElement(yg, {
            match: v,
            routeContext: { outlet: y, matches: J, isDataRoute: c != null },
            children: X,
          })
        );
      };
    return c && (v.route.ErrorBoundary || v.route.errorElement || E === 0)
      ? R.createElement(vg, {
          location: c.location,
          revalidation: c.revalidation,
          component: H,
          error: C,
          children: k(),
          routeContext: { outlet: null, matches: J, isDataRoute: !0 },
        })
      : k();
  }, null);
}
function Io(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function pg(u) {
  let r = R.useContext(Ka);
  return je(r, Io(u)), r;
}
function bg(u) {
  let r = R.useContext(Xu);
  return je(r, Io(u)), r;
}
function Sg(u) {
  let r = R.useContext(hl);
  return je(r, Io(u)), r;
}
function es(u) {
  let r = Sg(u),
    c = r.matches[r.matches.length - 1];
  return (
    je(
      c.route.id,
      `${u} can only be used on routes that contain a unique "id"`
    ),
    c.route.id
  );
}
function xg() {
  return es("useRouteId");
}
function Eg() {
  let u = R.useContext(Po),
    r = bg("useRouteError"),
    c = es("useRouteError");
  return u !== void 0 ? u : r.errors?.[c];
}
function _g() {
  let { router: u } = pg("useNavigate"),
    r = es("useNavigate"),
    c = R.useRef(!1);
  return (
    Cm(() => {
      c.current = !0;
    }),
    R.useCallback(
      async (f, h = {}) => {
        rt(c.current, wm),
          c.current &&
            (typeof f == "number"
              ? u.navigate(f)
              : await u.navigate(f, { fromRouteId: r, ...h }));
      },
      [u, r]
    )
  );
}
var om = {};
function Um(u, r, c) {
  !r && !om[u] && ((om[u] = !0), rt(!1, c));
}
var sm = {};
function fm(u, r) {
  !u && !sm[r] && ((sm[r] = !0), console.warn(r));
}
function Rg(u) {
  let r = {
    hasErrorBoundary:
      u.hasErrorBoundary || u.ErrorBoundary != null || u.errorElement != null,
  };
  return (
    u.Component &&
      (u.element &&
        rt(
          !1,
          "You should not include both `Component` and `element` on your route - `Component` will be used."
        ),
      Object.assign(r, {
        element: R.createElement(u.Component),
        Component: void 0,
      })),
    u.HydrateFallback &&
      (u.hydrateFallbackElement &&
        rt(
          !1,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
        ),
      Object.assign(r, {
        hydrateFallbackElement: R.createElement(u.HydrateFallback),
        HydrateFallback: void 0,
      })),
    u.ErrorBoundary &&
      (u.errorElement &&
        rt(
          !1,
          "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
        ),
      Object.assign(r, {
        errorElement: R.createElement(u.ErrorBoundary),
        ErrorBoundary: void 0,
      })),
    r
  );
}
var Tg = ["HydrateFallback", "hydrateFallbackElement"],
  Dg = class {
    constructor() {
      (this.status = "pending"),
        (this.promise = new Promise((u, r) => {
          (this.resolve = (c) => {
            this.status === "pending" && ((this.status = "resolved"), u(c));
          }),
            (this.reject = (c) => {
              this.status === "pending" && ((this.status = "rejected"), r(c));
            });
        }));
    }
  };
function Mg({ router: u, flushSync: r }) {
  let [c, o] = R.useState(u.state),
    [f, h] = R.useState(),
    [g, b] = R.useState({ isTransitioning: !1 }),
    [y, v] = R.useState(),
    [E, C] = R.useState(),
    [A, H] = R.useState(),
    Q = R.useRef(new Map()),
    J = R.useCallback(
      ($, { deletedFetchers: oe, flushSync: W, viewTransitionOpts: O }) => {
        $.fetchers.forEach((_e, ve) => {
          _e.data !== void 0 && Q.current.set(ve, _e.data);
        }),
          oe.forEach((_e) => Q.current.delete(_e)),
          fm(
            W === !1 || r != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
          );
        let be =
          u.window != null &&
          u.window.document != null &&
          typeof u.window.document.startViewTransition == "function";
        if (
          (fm(
            O == null || be,
            "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
          ),
          !O || !be)
        ) {
          r && W ? r(() => o($)) : R.startTransition(() => o($));
          return;
        }
        if (r && W) {
          r(() => {
            E && (y && y.resolve(), E.skipTransition()),
              b({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: O.currentLocation,
                nextLocation: O.nextLocation,
              });
          });
          let _e = u.window.document.startViewTransition(() => {
            r(() => o($));
          });
          _e.finished.finally(() => {
            r(() => {
              v(void 0), C(void 0), h(void 0), b({ isTransitioning: !1 });
            });
          }),
            r(() => C(_e));
          return;
        }
        E
          ? (y && y.resolve(),
            E.skipTransition(),
            H({
              state: $,
              currentLocation: O.currentLocation,
              nextLocation: O.nextLocation,
            }))
          : (h($),
            b({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: O.currentLocation,
              nextLocation: O.nextLocation,
            }));
      },
      [u.window, r, E, y]
    );
  R.useLayoutEffect(() => u.subscribe(J), [u, J]),
    R.useEffect(() => {
      g.isTransitioning && !g.flushSync && v(new Dg());
    }, [g]),
    R.useEffect(() => {
      if (y && f && u.window) {
        let $ = f,
          oe = y.promise,
          W = u.window.document.startViewTransition(async () => {
            R.startTransition(() => o($)), await oe;
          });
        W.finished.finally(() => {
          v(void 0), C(void 0), h(void 0), b({ isTransitioning: !1 });
        }),
          C(W);
      }
    }, [f, y, u.window]),
    R.useEffect(() => {
      y && f && c.location.key === f.location.key && y.resolve();
    }, [y, E, c.location, f]),
    R.useEffect(() => {
      !g.isTransitioning &&
        A &&
        (h(A.state),
        b({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: A.currentLocation,
          nextLocation: A.nextLocation,
        }),
        H(void 0));
    }, [g.isTransitioning, A]);
  let k = R.useMemo(
      () => ({
        createHref: u.createHref,
        encodeLocation: u.encodeLocation,
        go: ($) => u.navigate($),
        push: ($, oe, W) =>
          u.navigate($, {
            state: oe,
            preventScrollReset: W?.preventScrollReset,
          }),
        replace: ($, oe, W) =>
          u.navigate($, {
            replace: !0,
            state: oe,
            preventScrollReset: W?.preventScrollReset,
          }),
      }),
      [u]
    ),
    X = u.basename || "/",
    ce = R.useMemo(
      () => ({ router: u, navigator: k, static: !1, basename: X }),
      [u, k, X]
    );
  return R.createElement(
    R.Fragment,
    null,
    R.createElement(
      Ka.Provider,
      { value: ce },
      R.createElement(
        Xu.Provider,
        { value: c },
        R.createElement(
          Om.Provider,
          { value: Q.current },
          R.createElement(
            Wo.Provider,
            { value: g },
            R.createElement(
              Og,
              {
                basename: X,
                location: c.location,
                navigationType: c.historyAction,
                navigator: k,
              },
              R.createElement(jg, {
                routes: u.routes,
                future: u.future,
                state: c,
              })
            )
          )
        )
      )
    ),
    null
  );
}
var jg = R.memo(Ag);
function Ag({ routes: u, future: r, state: c }) {
  return dg(u, void 0, c, r);
}
function Ng({ to: u, replace: r, state: c, relative: o }) {
  je(
    Hn(),
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: f } = R.useContext(dl);
  rt(
    !f,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: h } = R.useContext(hl),
    { pathname: g } = Ql(),
    b = Vu(),
    y = Sr(u, br(h), g, o === "path"),
    v = JSON.stringify(y);
  return (
    R.useEffect(() => {
      b(JSON.parse(v), { replace: r, state: c, relative: o });
    }, [b, v, o, r, c]),
    null
  );
}
function zg(u) {
  return fg(u.context);
}
function Og({
  basename: u = "/",
  children: r = null,
  location: c,
  navigationType: o = "POP",
  navigator: f,
  static: h = !1,
}) {
  je(
    !Hn(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let g = u.replace(/^\/*/, "/"),
    b = R.useMemo(
      () => ({ basename: g, navigator: f, static: h, future: {} }),
      [g, f, h]
    );
  typeof c == "string" && (c = Sa(c));
  let {
      pathname: y = "/",
      search: v = "",
      hash: E = "",
      state: C = null,
      key: A = "default",
    } = c,
    H = R.useMemo(() => {
      let Q = ul(y, g);
      return Q == null
        ? null
        : {
            location: { pathname: Q, search: v, hash: E, state: C, key: A },
            navigationType: o,
          };
    }, [g, y, v, E, C, A, o]);
  return (
    rt(
      H != null,
      `<Router basename="${g}"> is not able to match the URL "${y}${v}${E}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    H == null
      ? null
      : R.createElement(
          dl.Provider,
          { value: b },
          R.createElement(xr.Provider, { children: r, value: H })
        )
  );
}
var dr = "get",
  hr = "application/x-www-form-urlencoded";
function Er(u) {
  return u != null && typeof u.tagName == "string";
}
function wg(u) {
  return Er(u) && u.tagName.toLowerCase() === "button";
}
function Cg(u) {
  return Er(u) && u.tagName.toLowerCase() === "form";
}
function Ug(u) {
  return Er(u) && u.tagName.toLowerCase() === "input";
}
function Hg(u) {
  return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
}
function Lg(u, r) {
  return u.button === 0 && (!r || r === "_self") && !Hg(u);
}
var or = null;
function Bg() {
  if (or === null)
    try {
      new FormData(document.createElement("form"), 0), (or = !1);
    } catch {
      or = !0;
    }
  return or;
}
var qg = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Xo(u) {
  return u != null && !qg.has(u)
    ? (rt(
        !1,
        `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${hr}"`
      ),
      null)
    : u;
}
function Yg(u, r) {
  let c, o, f, h, g;
  if (Cg(u)) {
    let b = u.getAttribute("action");
    (o = b ? ul(b, r) : null),
      (c = u.getAttribute("method") || dr),
      (f = Xo(u.getAttribute("enctype")) || hr),
      (h = new FormData(u));
  } else if (wg(u) || (Ug(u) && (u.type === "submit" || u.type === "image"))) {
    let b = u.form;
    if (b == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let y = u.getAttribute("formaction") || b.getAttribute("action");
    if (
      ((o = y ? ul(y, r) : null),
      (c = u.getAttribute("formmethod") || b.getAttribute("method") || dr),
      (f =
        Xo(u.getAttribute("formenctype")) ||
        Xo(b.getAttribute("enctype")) ||
        hr),
      (h = new FormData(b, u)),
      !Bg())
    ) {
      let { name: v, type: E, value: C } = u;
      if (E === "image") {
        let A = v ? `${v}.` : "";
        h.append(`${A}x`, "0"), h.append(`${A}y`, "0");
      } else v && h.append(v, C);
    }
  } else {
    if (Er(u))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (c = dr), (o = null), (f = hr), (g = u);
  }
  return (
    h && f === "text/plain" && ((g = h), (h = void 0)),
    { action: o, method: c.toLowerCase(), encType: f, formData: h, body: g }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function ts(u, r) {
  if (u === !1 || u === null || typeof u > "u") throw new Error(r);
}
function Gg(u, r, c) {
  let o =
    typeof u == "string"
      ? new URL(
          u,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : u;
  return (
    o.pathname === "/"
      ? (o.pathname = `_root.${c}`)
      : r && ul(o.pathname, r) === "/"
      ? (o.pathname = `${r.replace(/\/$/, "")}/_root.${c}`)
      : (o.pathname = `${o.pathname.replace(/\/$/, "")}.${c}`),
    o
  );
}
async function Xg(u, r) {
  if (u.id in r) return r[u.id];
  try {
    let c = await import(u.module);
    return (r[u.id] = c), c;
  } catch (c) {
    return (
      console.error(
        `Error loading route module \`${u.module}\`, reloading page...`
      ),
      console.error(c),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Vg(u) {
  return u == null
    ? !1
    : u.href == null
    ? u.rel === "preload" &&
      typeof u.imageSrcSet == "string" &&
      typeof u.imageSizes == "string"
    : typeof u.rel == "string" && typeof u.href == "string";
}
async function Qg(u, r, c) {
  let o = await Promise.all(
    u.map(async (f) => {
      let h = r.routes[f.route.id];
      if (h) {
        let g = await Xg(h, c);
        return g.links ? g.links() : [];
      }
      return [];
    })
  );
  return kg(
    o
      .flat(1)
      .filter(Vg)
      .filter((f) => f.rel === "stylesheet" || f.rel === "preload")
      .map((f) =>
        f.rel === "stylesheet"
          ? { ...f, rel: "prefetch", as: "style" }
          : { ...f, rel: "prefetch" }
      )
  );
}
function dm(u, r, c, o, f, h) {
  let g = (y, v) => (c[v] ? y.route.id !== c[v].route.id : !0),
    b = (y, v) =>
      c[v].pathname !== y.pathname ||
      (c[v].route.path?.endsWith("*") && c[v].params["*"] !== y.params["*"]);
  return h === "assets"
    ? r.filter((y, v) => g(y, v) || b(y, v))
    : h === "data"
    ? r.filter((y, v) => {
        let E = o.routes[y.route.id];
        if (!E || !E.hasLoader) return !1;
        if (g(y, v) || b(y, v)) return !0;
        if (y.route.shouldRevalidate) {
          let C = y.route.shouldRevalidate({
            currentUrl: new URL(f.pathname + f.search + f.hash, window.origin),
            currentParams: c[0]?.params || {},
            nextUrl: new URL(u, window.origin),
            nextParams: y.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof C == "boolean") return C;
        }
        return !0;
      })
    : [];
}
function Zg(u, r, { includeHydrateFallback: c } = {}) {
  return Kg(
    u
      .map((o) => {
        let f = r.routes[o.route.id];
        if (!f) return [];
        let h = [f.module];
        return (
          f.clientActionModule && (h = h.concat(f.clientActionModule)),
          f.clientLoaderModule && (h = h.concat(f.clientLoaderModule)),
          c &&
            f.hydrateFallbackModule &&
            (h = h.concat(f.hydrateFallbackModule)),
          f.imports && (h = h.concat(f.imports)),
          h
        );
      })
      .flat(1)
  );
}
function Kg(u) {
  return [...new Set(u)];
}
function Jg(u) {
  let r = {},
    c = Object.keys(u).sort();
  for (let o of c) r[o] = u[o];
  return r;
}
function kg(u, r) {
  let c = new Set();
  return (
    new Set(r),
    u.reduce((o, f) => {
      let h = JSON.stringify(Jg(f));
      return c.has(h) || (c.add(h), o.push({ key: h, link: f })), o;
    }, [])
  );
}
function Hm() {
  let u = R.useContext(Ka);
  return (
    ts(
      u,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    u
  );
}
function $g() {
  let u = R.useContext(Xu);
  return (
    ts(
      u,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    u
  );
}
var ls = R.createContext(void 0);
ls.displayName = "FrameworkContext";
function Lm() {
  let u = R.useContext(ls);
  return (
    ts(u, "You must render this element inside a <HydratedRouter> element"), u
  );
}
function Fg(u, r) {
  let c = R.useContext(ls),
    [o, f] = R.useState(!1),
    [h, g] = R.useState(!1),
    {
      onFocus: b,
      onBlur: y,
      onMouseEnter: v,
      onMouseLeave: E,
      onTouchStart: C,
    } = r,
    A = R.useRef(null);
  R.useEffect(() => {
    if ((u === "render" && g(!0), u === "viewport")) {
      let J = (X) => {
          X.forEach((ce) => {
            g(ce.isIntersecting);
          });
        },
        k = new IntersectionObserver(J, { threshold: 0.5 });
      return (
        A.current && k.observe(A.current),
        () => {
          k.disconnect();
        }
      );
    }
  }, [u]),
    R.useEffect(() => {
      if (o) {
        let J = setTimeout(() => {
          g(!0);
        }, 100);
        return () => {
          clearTimeout(J);
        };
      }
    }, [o]);
  let H = () => {
      f(!0);
    },
    Q = () => {
      f(!1), g(!1);
    };
  return c
    ? u !== "intent"
      ? [h, A, {}]
      : [
          h,
          A,
          {
            onFocus: Lu(b, H),
            onBlur: Lu(y, Q),
            onMouseEnter: Lu(v, H),
            onMouseLeave: Lu(E, Q),
            onTouchStart: Lu(C, H),
          },
        ]
    : [!1, A, {}];
}
function Lu(u, r) {
  return (c) => {
    u && u(c), c.defaultPrevented || r(c);
  };
}
function Wg({ page: u, ...r }) {
  let { router: c } = Hm(),
    o = R.useMemo(() => ga(c.routes, u, c.basename), [c.routes, u, c.basename]);
  return o ? R.createElement(Ig, { page: u, matches: o, ...r }) : null;
}
function Pg(u) {
  let { manifest: r, routeModules: c } = Lm(),
    [o, f] = R.useState([]);
  return (
    R.useEffect(() => {
      let h = !1;
      return (
        Qg(u, r, c).then((g) => {
          h || f(g);
        }),
        () => {
          h = !0;
        }
      );
    }, [u, r, c]),
    o
  );
}
function Ig({ page: u, matches: r, ...c }) {
  let o = Ql(),
    { manifest: f, routeModules: h } = Lm(),
    { basename: g } = Hm(),
    { loaderData: b, matches: y } = $g(),
    v = R.useMemo(() => dm(u, r, y, f, o, "data"), [u, r, y, f, o]),
    E = R.useMemo(() => dm(u, r, y, f, o, "assets"), [u, r, y, f, o]),
    C = R.useMemo(() => {
      if (u === o.pathname + o.search + o.hash) return [];
      let Q = new Set(),
        J = !1;
      if (
        (r.forEach((X) => {
          let ce = f.routes[X.route.id];
          !ce ||
            !ce.hasLoader ||
            ((!v.some(($) => $.route.id === X.route.id) &&
              X.route.id in b &&
              h[X.route.id]?.shouldRevalidate) ||
            ce.hasClientLoader
              ? (J = !0)
              : Q.add(X.route.id));
        }),
        Q.size === 0)
      )
        return [];
      let k = Gg(u, g, "data");
      return (
        J &&
          Q.size > 0 &&
          k.searchParams.set(
            "_routes",
            r
              .filter((X) => Q.has(X.route.id))
              .map((X) => X.route.id)
              .join(",")
          ),
        [k.pathname + k.search]
      );
    }, [g, b, o, f, v, r, u, h]),
    A = R.useMemo(() => Zg(E, f), [E, f]),
    H = Pg(E);
  return R.createElement(
    R.Fragment,
    null,
    C.map((Q) =>
      R.createElement("link", {
        key: Q,
        rel: "prefetch",
        as: "fetch",
        href: Q,
        ...c,
      })
    ),
    A.map((Q) =>
      R.createElement("link", { key: Q, rel: "modulepreload", href: Q, ...c })
    ),
    H.map(({ key: Q, link: J }) =>
      R.createElement("link", { key: Q, nonce: c.nonce, ...J })
    )
  );
}
function e1(...u) {
  return (r) => {
    u.forEach((c) => {
      typeof c == "function" ? c(r) : c != null && (c.current = r);
    });
  };
}
var Bm =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Bm && (window.__reactRouterVersion = "7.8.0");
} catch {}
function t1(u, r) {
  return X0({
    basename: r?.basename,
    unstable_getContext: r?.unstable_getContext,
    future: r?.future,
    history: r0({ window: r?.window }),
    hydrationData: l1(),
    routes: u,
    mapRouteProperties: Rg,
    hydrationRouteProperties: Tg,
    dataStrategy: r?.dataStrategy,
    patchRoutesOnNavigation: r?.patchRoutesOnNavigation,
    window: r?.window,
  }).initialize();
}
function l1() {
  let u = window?.__staticRouterHydrationData;
  return u && u.errors && (u = { ...u, errors: a1(u.errors) }), u;
}
function a1(u) {
  if (!u) return null;
  let r = Object.entries(u),
    c = {};
  for (let [o, f] of r)
    if (f && f.__type === "RouteErrorResponse")
      c[o] = new vr(f.status, f.statusText, f.data, f.internal === !0);
    else if (f && f.__type === "Error") {
      if (f.__subType) {
        let h = window[f.__subType];
        if (typeof h == "function")
          try {
            let g = new h(f.message);
            (g.stack = ""), (c[o] = g);
          } catch {}
      }
      if (c[o] == null) {
        let h = new Error(f.message);
        (h.stack = ""), (c[o] = h);
      }
    } else c[o] = f;
  return c;
}
var qm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Qt = R.forwardRef(function (
    {
      onClick: r,
      discover: c = "render",
      prefetch: o = "none",
      relative: f,
      reloadDocument: h,
      replace: g,
      state: b,
      target: y,
      to: v,
      preventScrollReset: E,
      viewTransition: C,
      ...A
    },
    H
  ) {
    let { basename: Q } = R.useContext(dl),
      J = typeof v == "string" && qm.test(v),
      k,
      X = !1;
    if (typeof v == "string" && J && ((k = v), Bm))
      try {
        let ve = new URL(window.location.href),
          de = v.startsWith("//") ? new URL(ve.protocol + v) : new URL(v),
          We = ul(de.pathname, Q);
        de.origin === ve.origin && We != null
          ? (v = We + de.search + de.hash)
          : (X = !0);
      } catch {
        rt(
          !1,
          `<Link to="${v}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let ce = cg(v, { relative: f }),
      [$, oe, W] = Fg(o, A),
      O = i1(v, {
        replace: g,
        state: b,
        target: y,
        preventScrollReset: E,
        relative: f,
        viewTransition: C,
      });
    function be(ve) {
      r && r(ve), ve.defaultPrevented || O(ve);
    }
    let _e = R.createElement("a", {
      ...A,
      ...W,
      href: k || ce,
      onClick: X || h ? r : be,
      ref: e1(H, oe),
      target: y,
      "data-discover": !J && c === "render" ? "true" : void 0,
    });
    return $ && !J
      ? R.createElement(R.Fragment, null, _e, R.createElement(Wg, { page: ce }))
      : _e;
  });
Qt.displayName = "Link";
var n1 = R.forwardRef(function (
  {
    "aria-current": r = "page",
    caseSensitive: c = !1,
    className: o = "",
    end: f = !1,
    style: h,
    to: g,
    viewTransition: b,
    children: y,
    ...v
  },
  E
) {
  let C = Qu(g, { relative: v.relative }),
    A = Ql(),
    H = R.useContext(Xu),
    { navigator: Q, basename: J } = R.useContext(dl),
    k = H != null && f1(C) && b === !0,
    X = Q.encodeLocation ? Q.encodeLocation(C).pathname : C.pathname,
    ce = A.pathname,
    $ =
      H && H.navigation && H.navigation.location
        ? H.navigation.location.pathname
        : null;
  c ||
    ((ce = ce.toLowerCase()),
    ($ = $ ? $.toLowerCase() : null),
    (X = X.toLowerCase())),
    $ && J && ($ = ul($, J) || $);
  const oe = X !== "/" && X.endsWith("/") ? X.length - 1 : X.length;
  let W = ce === X || (!f && ce.startsWith(X) && ce.charAt(oe) === "/"),
    O =
      $ != null &&
      ($ === X || (!f && $.startsWith(X) && $.charAt(X.length) === "/")),
    be = { isActive: W, isPending: O, isTransitioning: k },
    _e = W ? r : void 0,
    ve;
  typeof o == "function"
    ? (ve = o(be))
    : (ve = [
        o,
        W ? "active" : null,
        O ? "pending" : null,
        k ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let de = typeof h == "function" ? h(be) : h;
  return R.createElement(
    Qt,
    {
      ...v,
      "aria-current": _e,
      className: ve,
      ref: E,
      style: de,
      to: g,
      viewTransition: b,
    },
    typeof y == "function" ? y(be) : y
  );
});
n1.displayName = "NavLink";
var _r = R.forwardRef(
  (
    {
      discover: u = "render",
      fetcherKey: r,
      navigate: c,
      reloadDocument: o,
      replace: f,
      state: h,
      method: g = dr,
      action: b,
      onSubmit: y,
      relative: v,
      preventScrollReset: E,
      viewTransition: C,
      ...A
    },
    H
  ) => {
    let Q = o1(),
      J = s1(b, { relative: v }),
      k = g.toLowerCase() === "get" ? "get" : "post",
      X = typeof b == "string" && qm.test(b),
      ce = ($) => {
        if ((y && y($), $.defaultPrevented)) return;
        $.preventDefault();
        let oe = $.nativeEvent.submitter,
          W = oe?.getAttribute("formmethod") || g;
        Q(oe || $.currentTarget, {
          fetcherKey: r,
          method: W,
          navigate: c,
          replace: f,
          state: h,
          relative: v,
          preventScrollReset: E,
          viewTransition: C,
        });
      };
    return R.createElement("form", {
      ref: H,
      method: k,
      action: J,
      onSubmit: o ? y : ce,
      ...A,
      "data-discover": !X && u === "render" ? "true" : void 0,
    });
  }
);
_r.displayName = "Form";
function u1(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ym(u) {
  let r = R.useContext(Ka);
  return je(r, u1(u)), r;
}
function i1(
  u,
  {
    target: r,
    replace: c,
    state: o,
    preventScrollReset: f,
    relative: h,
    viewTransition: g,
  } = {}
) {
  let b = Vu(),
    y = Ql(),
    v = Qu(u, { relative: h });
  return R.useCallback(
    (E) => {
      if (Lg(E, r)) {
        E.preventDefault();
        let C = c !== void 0 ? c : ba(y) === ba(v);
        b(u, {
          replace: C,
          state: o,
          preventScrollReset: f,
          relative: h,
          viewTransition: g,
        });
      }
    },
    [y, b, v, c, o, r, u, f, h, g]
  );
}
var r1 = 0,
  c1 = () => `__${String(++r1)}__`;
function o1() {
  let { router: u } = Ym("useSubmit"),
    { basename: r } = R.useContext(dl),
    c = xg();
  return R.useCallback(
    async (o, f = {}) => {
      let { action: h, method: g, encType: b, formData: y, body: v } = Yg(o, r);
      if (f.navigate === !1) {
        let E = f.fetcherKey || c1();
        await u.fetch(E, c, f.action || h, {
          preventScrollReset: f.preventScrollReset,
          formData: y,
          body: v,
          formMethod: f.method || g,
          formEncType: f.encType || b,
          flushSync: f.flushSync,
        });
      } else
        await u.navigate(f.action || h, {
          preventScrollReset: f.preventScrollReset,
          formData: y,
          body: v,
          formMethod: f.method || g,
          formEncType: f.encType || b,
          replace: f.replace,
          state: f.state,
          fromRouteId: c,
          flushSync: f.flushSync,
          viewTransition: f.viewTransition,
        });
    },
    [u, r, c]
  );
}
function s1(u, { relative: r } = {}) {
  let { basename: c } = R.useContext(dl),
    o = R.useContext(hl);
  je(o, "useFormAction must be used inside a RouteContext");
  let [f] = o.matches.slice(-1),
    h = { ...Qu(u || ".", { relative: r }) },
    g = Ql();
  if (u == null) {
    h.search = g.search;
    let b = new URLSearchParams(h.search),
      y = b.getAll("index");
    if (y.some((E) => E === "")) {
      b.delete("index"),
        y.filter((C) => C).forEach((C) => b.append("index", C));
      let E = b.toString();
      h.search = E ? `?${E}` : "";
    }
  }
  return (
    (!u || u === ".") &&
      f.route.index &&
      (h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index"),
    c !== "/" && (h.pathname = h.pathname === "/" ? c : _l([c, h.pathname])),
    ba(h)
  );
}
function f1(u, { relative: r } = {}) {
  let c = R.useContext(Wo);
  je(
    c != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = Ym("useViewTransitionState"),
    f = Qu(u, { relative: r });
  if (!c.isTransitioning) return !1;
  let h = ul(c.currentLocation.pathname, o) || c.currentLocation.pathname,
    g = ul(c.nextLocation.pathname, o) || c.nextLocation.pathname;
  return mr(f.pathname, g) != null || mr(f.pathname, h) != null;
}
var d1 = vm();
function h1(u) {
  return R.createElement(Mg, { flushSync: d1.flushSync, ...u });
}
const Rl = R.createContext({
    studentPaginationObject: {
      studentList: [],
      currentPage: 0,
      totalPages: 0,
      totalElements: 0,
    },
    authChecked: !1,
    isAuthenticated: !1,
    showSpinner: !1,
    sideBarActiveLink: "/",
    studentObject: { id: null, name: "", age: null, department: "" },
    isAdmin: !1,
    isMobileDimention: !1,
    isDesktopDimention: !1,
    recentStudents: [],
    role: "",
    login: () => {},
    fetchStudents: () => {},
    setSideBarActiveLink: () => {},
    logout: () => {},
    setStudentObject: () => {},
    addStudent: () => {},
    setRecentStudents: () => {},
  }),
  { setIsAuthenticated: m1 } = Rl,
  v1 = async (u) => {
    console.log(JSON.stringify(u));
    const r = "http://localhost:8080/student",
      c = localStorage.getItem("token");
    if (c)
      try {
        const o = await fetch(r, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${c}`,
          },
          body: JSON.stringify(u),
        });
        if (o.status === 401)
          return (
            m1(!1),
            localStorage.removeItem("token"),
            localStorage.removeItem("role"),
            { error: "Unauthorized", status: 401 }
          );
        if (o.status == 400)
          return (
            console.log("bad request"), { error: "Bad Request", status: 400 }
          );
        const f = await o.json();
        return console.log(f), f;
      } catch (o) {
        console.error(o);
      }
  },
  y1 = async (u = 0, r = 5, c = "id") => {
    const o = `http://localhost:8080/student/students?page=${u}&size=${r}&sortBy=${c}`,
      f = localStorage.getItem("token");
    if (f)
      try {
        const h = await fetch(o, { headers: { Authorization: `Bearer ${f}` } });
        return h.status === 401
          ? (localStorage.removeItem("token"),
            { error: "Unauthorized", status: 401 })
          : h.status === 403
          ? (localStorage.removeItem("token"),
            { error: "Forbidden", status: 403 })
          : await h.json();
      } catch (h) {
        return console.error("Error fetching data:", h), { error: h.message };
      }
  },
  g1 = async (u, r) => {
    try {
      const c = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: u, password: r }),
      });
      if (!c.ok) throw (console.log(c), new Error("Login failed"));
      return await c.json();
    } catch (c) {
      return { success: !1, error: c.message };
    }
  },
  p1 = async (u) => {
    const c = `http://localhost:8080/student/students?page=${Math.max(
        u - 1,
        0
      )}&size=5&sortBy=id`,
      o = localStorage.getItem("token");
    if (o)
      try {
        const f = await fetch(c, { headers: { Authorization: `Bearer ${o}` } });
        return f.status === 401 ? void 0 : await f.json();
      } catch (f) {
        return (
          console.error("Error fetching last page:", f), { error: f.message }
        );
      }
  },
  b1 = async (u, r) => {
    const c = `http://localhost:8080/student/search?filterType=${u}&value=${r}`,
      o = localStorage.getItem("token");
    if (o)
      try {
        const f = await fetch(c, { headers: { Authorization: `Bearer ${o}` } });
        if (f.status === 401) return;
        const h = await f.json();
        return console.log(h), h;
      } catch (f) {
        return (
          console.error("Error searching students:", f), { error: f.message }
        );
      }
  },
  Gm = ({ children: u }) => {
    const [r, c] = R.useState(!1),
      [o, f] = R.useState(!1),
      [h, g] = R.useState(!1),
      [b, y] = R.useState(!1),
      [v, E] = R.useState(null),
      [C, A] = R.useState("DEAN"),
      [H, Q] = R.useState("/"),
      [J, k] = R.useState(!1),
      [X, ce] = R.useState(!0),
      [$, oe] = R.useState([]),
      [W, O] = R.useState({
        studentList: [],
        currentPage: 0,
        totalPages: 0,
        totalElements: 0,
      }),
      [be, _e] = R.useState({ id: null, name: "", age: null, department: "" }),
      ve = (ge) => v1(ge),
      de = R.useRef(window.innerWidth),
      We = async (ge, pe) => {
        f(!1), c(!0);
        try {
          const M = await g1(ge, pe);
          if ((console.log("Login response:", M), M?.data?.token)) {
            const V = M.data.token,
              P = M.data.role;
            A("DEAN"),
              localStorage.setItem("token", V),
              g(!0),
              f(!0),
              c(!1),
              y((P || "").toUpperCase() === "ADMIN"),
              await Be(0, 10, "id");
          } else g(!1), y(!1), f(!0);
          return M;
        } catch (M) {
          return g(!1), y(!1), f(!0), { success: !1, error: M.message };
        } finally {
          c(!1), f(!0);
        }
      },
      Be = async (ge = 0, pe = 5, M = "id") => {
        const V = await y1(ge, pe, M);
        if (V && V.data?.studentList) {
          const {
            studentList: P,
            currentPage: xe,
            totalPages: S,
            totalElements: B,
          } = V.data;
          return (
            O({
              studentList: P,
              currentPage: xe,
              totalPages: S,
              totalElements: B,
            }),
            V
          );
        }
        return V && V.error && (g(!1), localStorage.removeItem("token")), V;
      };
    R.useEffect(() => {
      c(!0), f(!1);
      const ge = localStorage.getItem("token");
      ge
        ? (E(ge),
          g(!0),
          y((C || "").toUpperCase() === "ADMIN"),
          A("DEAN"),
          Be(0, 10, "id"))
        : (g(!1), y(!1)),
        f(!0),
        c(!1);
    }, []),
      R.useEffect(() => {
        (async () => {
          const pe = await Be(0, 5, "id");
          if (pe && pe.data?.totalPages > 1) {
            const M = pe.data.totalPages,
              V = await p1(M);
            V && V.data?.studentList ? oe(V.data.studentList) : oe([]);
          } else pe && pe.data?.studentList ? oe(pe.data.studentList) : oe([]);
        })();
      }, []),
      R.useLayoutEffect(() => {
        window.innerWidth < 950 ? (k(!0), ce(!1)) : (ce(!0), k(!1));
      }, []);
    const Oe = () => {
      localStorage.removeItem("token"),
        localStorage.removeItem("role"),
        E(null),
        A(null),
        g(!1);
    };
    return (
      R.useEffect(() => {
        const ge = () => {
          const pe = window.innerWidth,
            M = de.current < 950,
            V = pe < 950;
          M !== V && (V ? (k(!0), ce(!1)) : (ce(!0), k(!1))), (de.current = pe);
        };
        return (
          window.addEventListener("resize", ge),
          () => window.removeEventListener("resize", ge)
        );
      }, [de.current]),
      m.jsx(Rl.Provider, {
        value: {
          studentPaginationObject: W,
          authChecked: o,
          isAuthenticated: h,
          isAdmin: b,
          showSpinner: r,
          sideBarActiveLink: H,
          studentObject: be,
          isMobileDimention: J,
          isDesktopDimention: X,
          recentStudents: $,
          role: C,
          login: We,
          setSideBarActiveLink: Q,
          fetchStudents: Be,
          logout: Oe,
          setStudentObject: _e,
          addStudent: ve,
          setRecentStudents: oe,
        },
        children: u,
      })
    );
  },
  S1 = "_header_106tq_1",
  x1 = "_HeadingCont_106tq_27",
  E1 = "_profile_106tq_49",
  _1 = "_logo_106tq_71",
  R1 = "_nav_106tq_85",
  T1 = "_ul_106tq_105",
  D1 = "_li_106tq_171",
  ll = {
    header: S1,
    HeadingCont: x1,
    profile: E1,
    logo: _1,
    nav: R1,
    ul: T1,
    li: D1,
  };
var Xm = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  hm = Za.createContext && Za.createContext(Xm),
  M1 = ["attr", "size", "title"];
function j1(u, r) {
  if (u == null) return {};
  var c = A1(u, r),
    o,
    f;
  if (Object.getOwnPropertySymbols) {
    var h = Object.getOwnPropertySymbols(u);
    for (f = 0; f < h.length; f++)
      (o = h[f]),
        !(r.indexOf(o) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(u, o) &&
          (c[o] = u[o]);
  }
  return c;
}
function A1(u, r) {
  if (u == null) return {};
  var c = {};
  for (var o in u)
    if (Object.prototype.hasOwnProperty.call(u, o)) {
      if (r.indexOf(o) >= 0) continue;
      c[o] = u[o];
    }
  return c;
}
function gr() {
  return (
    (gr = Object.assign
      ? Object.assign.bind()
      : function (u) {
          for (var r = 1; r < arguments.length; r++) {
            var c = arguments[r];
            for (var o in c)
              Object.prototype.hasOwnProperty.call(c, o) && (u[o] = c[o]);
          }
          return u;
        }),
    gr.apply(this, arguments)
  );
}
function mm(u, r) {
  var c = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(u);
    r &&
      (o = o.filter(function (f) {
        return Object.getOwnPropertyDescriptor(u, f).enumerable;
      })),
      c.push.apply(c, o);
  }
  return c;
}
function pr(u) {
  for (var r = 1; r < arguments.length; r++) {
    var c = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? mm(Object(c), !0).forEach(function (o) {
          N1(u, o, c[o]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c))
      : mm(Object(c)).forEach(function (o) {
          Object.defineProperty(u, o, Object.getOwnPropertyDescriptor(c, o));
        });
  }
  return u;
}
function N1(u, r, c) {
  return (
    (r = z1(r)),
    r in u
      ? Object.defineProperty(u, r, {
          value: c,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (u[r] = c),
    u
  );
}
function z1(u) {
  var r = O1(u, "string");
  return typeof r == "symbol" ? r : r + "";
}
function O1(u, r) {
  if (typeof u != "object" || !u) return u;
  var c = u[Symbol.toPrimitive];
  if (c !== void 0) {
    var o = c.call(u, r);
    if (typeof o != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(u);
}
function Vm(u) {
  return (
    u &&
    u.map((r, c) =>
      Za.createElement(r.tag, pr({ key: c }, r.attr), Vm(r.child))
    )
  );
}
function Ja(u) {
  return (r) =>
    Za.createElement(w1, gr({ attr: pr({}, u.attr) }, r), Vm(u.child));
}
function w1(u) {
  var r = (c) => {
    var { attr: o, size: f, title: h } = u,
      g = j1(u, M1),
      b = f || c.size || "1em",
      y;
    return (
      c.className && (y = c.className),
      u.className && (y = (y ? y + " " : "") + u.className),
      Za.createElement(
        "svg",
        gr(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          c.attr,
          o,
          g,
          {
            className: y,
            style: pr(pr({ color: u.color || c.color }, c.style), u.style),
            height: b,
            width: b,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        h && Za.createElement("title", null, h),
        u.children
      )
    );
  };
  return hm !== void 0
    ? Za.createElement(hm.Consumer, null, (c) => r(c))
    : r(Xm);
}
function C1(u) {
  return Ja({
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",
          clipRule: "evenodd",
        },
        child: [],
      },
    ],
  })(u);
}
function U1(u) {
  return Ja({
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z",
        },
        child: [],
      },
    ],
  })(u);
}
function H1(u) {
  return Ja({
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
          clipRule: "evenodd",
        },
        child: [],
      },
    ],
  })(u);
}
function L1(u) {
  return Ja({
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z",
          clipRule: "evenodd",
        },
        child: [],
      },
    ],
  })(u);
}
function B1(u) {
  return Ja({
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z",
          clipRule: "evenodd",
        },
        child: [],
      },
    ],
  })(u);
}
function q1(u) {
  return Ja({
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z",
        },
        child: [],
      },
    ],
  })(u);
}
function Y1(u) {
  return Ja({
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
          clipRule: "evenodd",
        },
        child: [],
      },
    ],
  })(u);
}
const G1 = () => {
    const {
      isAuthenticated: u,
      logout: r,
      isMobileDimention: c,
    } = R.useContext(Rl);
    return m.jsxs("div", {
      className: ll.header,
      children: [
        m.jsxs("div", {
          className: ll.HeadingCont,
          children: [
            m.jsx("h2", {
              className: ll.logo,
              children: "University Manegement (... University)",
            }),
            m.jsx("div", {
              className: ll.profile,
              children: m.jsx(Y1, { size: 24, color: "rgb(230, 97, 173)" }),
            }),
          ],
        }),
        m.jsx("nav", {
          className: ll.nav,
          children: m.jsxs("ul", {
            className: ll.ul,
            children: [
              m.jsx(Qt, {
                to: "/",
                children: m.jsx("li", {
                  className: ll.li,
                  children: c ? m.jsx(U1, { size: 20 }) : "Home",
                }),
              }),
              m.jsx(Qt, {
                to: "/about",
                children: m.jsx("li", {
                  className: ll.li,
                  children: c ? m.jsx(H1, { size: 20 }) : "About",
                }),
              }),
              m.jsx(Qt, {
                to: "/version",
                children: m.jsx("li", {
                  className: ll.li,
                  children: c ? m.jsx(C1, { size: 20 }) : "Version",
                }),
              }),
              u
                ? m.jsx("button", {
                    onClick: r,
                    className: ll.li,
                    children: c ? m.jsx(B1, { size: 20 }) : "Logout",
                  })
                : m.jsxs(m.Fragment, {
                    children: [
                      m.jsx(Qt, {
                        to: "/login",
                        children: m.jsx("li", {
                          className: ll.li,
                          children: c ? m.jsx(L1, { size: 20 }) : "Login",
                        }),
                      }),
                      m.jsx(Qt, {
                        to: "/signup",
                        children: m.jsx("li", {
                          className: ll.li,
                          children: c ? m.jsx(q1, { size: 20 }) : "SignUp",
                        }),
                      }),
                    ],
                  }),
            ],
          }),
        }),
      ],
    });
  },
  X1 = "_sidebarContainer_4n828_3",
  V1 = "_sidebar_4n828_3",
  Q1 = "_title_4n828_53",
  Z1 = "_sideBarContent_4n828_71",
  K1 = "_list_4n828_87",
  J1 = "_linkclass_4n828_107",
  k1 = "_sideBarItem_4n828_145",
  $1 = "_activeLink_4n828_167",
  F1 = "_hamburger_4n828_201",
  W1 = "_bar_4n828_227",
  al = {
    sidebarContainer: X1,
    sidebar: V1,
    title: Q1,
    sideBarContent: Z1,
    list: K1,
    linkclass: J1,
    sideBarItem: k1,
    activeLink: $1,
    hamburger: F1,
    bar: W1,
  },
  P1 = () => {
    const {
        sideBarActiveLink: u,
        setSideBarActiveLink: r,
        isDesktopDimention: c,
        isMobileDimention: o,
        role: f,
      } = R.useContext(Rl),
      h = (y) => r(y),
      g = {
        STUDENT: [
          { to: "/", label: "Home" },
          { to: "/dashboard", label: "Dashboard" },
          { to: "/assignments", label: "Assignments" },
        ],
        TEACHER: [
          { to: "/", label: "Home" },
          { to: "/dashboard", label: "Dashboard" },
          { to: "/classes", label: "My Classes" },
          { to: "/gradebook", label: "Gradebook" },
        ],
        DEAN: [
          { to: "/", label: "Home" },
          { to: "/dashboard", label: "Dean Dashboard" },
          { to: "/faculty", label: "Faculty Management" },
          { to: "/reports", label: "Reports" },
          { to: "/settings", label: "System Settings" },
        ],
      },
      b = g[f] || g.STUDENT;
    return m.jsx(m.Fragment, {
      children: c
        ? m.jsx("div", {
            className: al.sidebarContainer,
            children: m.jsxs("div", {
              className: al.sidebar,
              children: [
                m.jsx("h2", {
                  className: al.title,
                  children: "Student Management",
                }),
                m.jsx("div", {
                  className: al.sideBarContent,
                  children: m.jsx("ul", {
                    className: al.list,
                    children: b.map((y) =>
                      m.jsx(
                        Qt,
                        {
                          to: y.to,
                          className: `${al.linkclass} ${
                            u === y.to ? al.activeLink : ""
                          }`,
                          onClick: () => h(y.to),
                          children: m.jsx("li", {
                            className: al.sideBarItem,
                            children: y.label,
                          }),
                        },
                        y.to
                      )
                    ),
                  }),
                }),
              ],
            }),
          })
        : m.jsxs("div", {
            className: al.hamburger,
            children: [
              m.jsx("span", { className: al.bar }),
              m.jsx("span", { className: al.bar }),
              m.jsx("span", { className: al.bar }),
            ],
          }),
    });
  },
  I1 = "_footer_fm8uy_1",
  ep = "_footerContainer_fm8uy_37",
  tp = "_left_fm8uy_63",
  lp = "_logo_fm8uy_77",
  ap = "_brandName_fm8uy_87",
  np = "_tagline_fm8uy_101",
  up = "_center_fm8uy_111",
  ip = "_link_fm8uy_125",
  rp = "_right_fm8uy_147",
  cp = "_versionText_fm8uy_157",
  Xt = {
    footer: I1,
    footerContainer: ep,
    left: tp,
    logo: lp,
    brandName: ap,
    tagline: np,
    center: up,
    link: ip,
    right: rp,
    versionText: cp,
  },
  op = () => {
    const u = new Date().getFullYear();
    return m.jsx("footer", {
      className: Xt.footer,
      role: "contentinfo",
      children: m.jsxs("div", {
        className: Xt.footerContainer,
        children: [
          m.jsxs("div", {
            className: Xt.left,
            children: [
              m.jsx("img", {
                src: "/assets/spring-logo.png",
                alt: "Spring Logo",
                className: Xt.logo,
              }),
              m.jsxs("div", {
                children: [
                  m.jsx("h4", {
                    className: Xt.brandName,
                    children: "StudentApp",
                  }),
                  m.jsx("p", {
                    className: Xt.tagline,
                    children: "Efficient. Organized. Reliable.",
                  }),
                ],
              }),
            ],
          }),
          m.jsxs("div", {
            className: Xt.center,
            children: [
              m.jsx("a", { href: "#", className: Xt.link, children: "About" }),
              m.jsx("a", {
                href: "#",
                className: Xt.link,
                children: "Contact",
              }),
              m.jsx("a", {
                href: "#",
                className: Xt.link,
                children: "Privacy",
              }),
              m.jsx("a", { href: "#", className: Xt.link, children: "GitHub" }),
            ],
          }),
          m.jsx("div", {
            className: Xt.right,
            children: m.jsxs("p", {
              className: Xt.versionText,
              children: [
                "© ",
                u,
                " Ifham Inc. ",
                m.jsx("br", {}),
                "Version ",
                m.jsx("strong", { children: "1.0.0" }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  sp = "_container_1b8al_1",
  fp = { container: sp },
  dp = ({ children: u }) =>
    m.jsx("div", { className: fp.container, children: u }),
  hp = "_container_1atsw_1",
  mp = { container: hp },
  vp = ({ children: u }) =>
    m.jsx("div", { className: mp.container, children: u });
function yp() {
  return m.jsx(m.Fragment, {
    children: m.jsxs(Gm, {
      children: [
        m.jsxs(vp, {
          children: [
            m.jsx(P1, {}),
            m.jsxs(dp, { children: [m.jsx(G1, {}), m.jsx(zg, {})] }),
          ],
        }),
        m.jsx(op, {}),
      ],
    }),
  });
}
const gp = "_container_dxonj_3",
  pp = "_hero_dxonj_23",
  bp = "_title_dxonj_41",
  Sp = "_subtitle_dxonj_53",
  xp = "_actions_dxonj_65",
  Ep = "_button_dxonj_77",
  _p = "_buttonSecondary_dxonj_105",
  Rp = "_features_dxonj_137",
  Tp = "_featuresTitle_dxonj_147",
  Dp = "_featuresList_dxonj_159",
  mt = {
    container: gp,
    hero: pp,
    title: bp,
    subtitle: Sp,
    actions: xp,
    button: Ep,
    buttonSecondary: _p,
    features: Rp,
    featuresTitle: Tp,
    featuresList: Dp,
  },
  Mp = () => {
    const { isAuthenticated: u, logout: r, role: c } = R.useContext(Rl),
      o = () => {
        switch (c) {
          case "STUDENT":
            return m.jsxs("section", {
              className: mt.roleSection,
              children: [
                m.jsx("h2", { children: "Welcome Student 🎓" }),
                m.jsxs("ul", {
                  children: [
                    m.jsx("li", {
                      children: "📚 View your courses & timetable",
                    }),
                    m.jsx("li", { children: "📝 Check grades & assignments" }),
                    m.jsx("li", { children: "📢 University announcements" }),
                  ],
                }),
              ],
            });
          case "TEACHER":
            return m.jsxs("section", {
              className: mt.roleSection,
              children: [
                m.jsx("h2", { children: "Welcome Teacher 👨‍🏫" }),
                m.jsxs("ul", {
                  children: [
                    m.jsx("li", { children: "📘 Manage your classes" }),
                    m.jsx("li", { children: "📝 Upload grades & attendance" }),
                    m.jsx("li", { children: "📢 Post announcements" }),
                  ],
                }),
              ],
            });
          case "DEAN":
            return m.jsxs("section", {
              className: mt.roleSection,
              children: [
                m.jsx("h2", { children: "Welcome Dean 🎓🏛️" }),
                m.jsxs("ul", {
                  children: [
                    m.jsx("li", {
                      children: "📊 View university-wide reports",
                    }),
                    m.jsx("li", { children: "👨‍🏫 Manage faculty & courses" }),
                    m.jsx("li", { children: "✔ Approve results & notices" }),
                  ],
                }),
              ],
            });
          default:
            return m.jsxs("section", {
              className: mt.hero,
              children: [
                m.jsx("h1", {
                  className: mt.title,
                  children: "Welcome to Student Management App",
                }),
                m.jsxs("p", {
                  className: mt.subtitle,
                  children: [
                    "Manage your students efficiently and securely.",
                    !u && " Please login or sign up to continue.",
                  ],
                }),
                !u &&
                  m.jsxs("div", {
                    className: mt.actions,
                    children: [
                      m.jsx(Qt, {
                        to: "/login",
                        className: mt.button,
                        children: "Login",
                      }),
                      m.jsx(Qt, {
                        to: "/signup",
                        className: mt.buttonSecondary,
                        children: "Sign Up",
                      }),
                    ],
                  }),
              ],
            });
        }
      };
    return m.jsxs("div", {
      className: mt.container,
      children: [
        o(),
        u &&
          m.jsx("div", {
            className: mt.actions,
            children: m.jsx("button", {
              onClick: r,
              className: mt.button,
              children: "Logout",
            }),
          }),
        m.jsxs("section", {
          className: mt.features,
          children: [
            m.jsx("h2", {
              className: mt.featuresTitle,
              children: "General Features",
            }),
            m.jsxs("ul", {
              className: mt.featuresList,
              children: [
                m.jsx("li", {
                  className: mt.feature,
                  children: "View and organize student data",
                }),
                m.jsx("li", {
                  className: mt.feature,
                  children: "Secure sessions and data protection",
                }),
                m.jsx("li", {
                  className: mt.feature,
                  children: "Easy-to-use interface",
                }),
                m.jsx("li", {
                  className: mt.feature,
                  children: "Responsive design for any device",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  jp = "_loginContainer_6t81r_1",
  Ap = "_loginForm_6t81r_19",
  Np = "_loginTitle_6t81r_47",
  zp = "_loginInput_6t81r_63",
  Op = "_loginButton_6t81r_97",
  wn = {
    loginContainer: jp,
    loginForm: Ap,
    loginTitle: Np,
    loginInput: zp,
    loginButton: Op,
  },
  wp = () => {
    const u = Vu(),
      { login: r, setSideBarActiveLink: c } = R.useContext(Rl),
      o = R.useRef(),
      f = R.useRef(),
      h = async (g) => {
        g.preventDefault();
        const b = o.current.value,
          y = f.current.value;
        console.log(g), r(b, y)?.success !== !1 && u("/", { replace: !0 });
      };
    return m.jsx("div", {
      className: wn.loginContainer,
      children: m.jsxs(_r, {
        className: wn.loginForm,
        onSubmit: h,
        children: [
          m.jsx("h2", {
            className: wn.loginTitle,
            children: "Login Here To Continue",
          }),
          m.jsx("input", {
            type: "email",
            placeholder: "Email",
            required: !0,
            className: wn.loginInput,
            ref: o,
          }),
          m.jsx("input", {
            type: "password",
            placeholder: "Password",
            required: !0,
            className: wn.loginInput,
            ref: f,
          }),
          m.jsx("button", {
            type: "submit",
            className: wn.loginButton,
            children: "Login",
          }),
          m.jsxs("div", {
            className: "signup",
            style: {
              display: "flex",
              width: "100%",
              justifyContent: "center",
              gap: "10px",
            },
            children: [
              m.jsx("p", { children: "Don't  have an account ? " }),
              m.jsx(Qt, { to: "/signup", children: "signup" }),
            ],
          }),
        ],
      }),
    });
  },
  Cp = "_container_em27d_1",
  Up = "_dashboard_em27d_11",
  Hp = "_herocont_em27d_27",
  Lp = "_searchicon_em27d_49",
  Bp = "_btns_em27d_67",
  qp = "_recentBtn_em27d_85",
  Yp = "_filterSelect_em27d_113",
  Gp = "_filterBtn_em27d_137",
  Xp = "_allBtn_em27d_163",
  Vp = "_paginationControls_em27d_187",
  Qp = "_headingTop_em27d_245",
  Zp = "_addStudentbtn_em27d_257",
  Kp = "_totalStudent_em27d_279",
  Jp = "_totalPages_em27d_299",
  kp = "_totalDepartments_em27d_319",
  $p = "_searchInput_em27d_349",
  Fp = "_search_em27d_49",
  Wp = "_studentToshowHeading_em27d_397",
  Pp = "_tableContainer_em27d_407",
  Ip = "_studentsTable_em27d_421",
  eb = "_roleIndicator_em27d_491",
  tb = "_totalStudentValue_em27d_499",
  lb = "_totalStudentLabel_em27d_507",
  ab = "_totalPagesValue_em27d_513",
  nb = "_totalPagesLabel_em27d_521",
  ub = "_totalDepartmentsLabel_em27d_527",
  ib = "_tableActions_em27d_553",
  rb = "_actionBtn_em27d_563",
  cb = "_noDataCell_em27d_573",
  Le = {
    container: Cp,
    dashboard: Up,
    herocont: Hp,
    searchicon: Lp,
    btns: Bp,
    recentBtn: qp,
    filterSelect: Yp,
    filterBtn: Gp,
    allBtn: Xp,
    paginationControls: Vp,
    headingTop: Qp,
    addStudentbtn: Zp,
    totalStudent: Kp,
    totalPages: Jp,
    totalDepartments: kp,
    searchInput: $p,
    search: Fp,
    studentToshowHeading: Wp,
    tableContainer: Pp,
    studentsTable: Ip,
    roleIndicator: eb,
    totalStudentValue: tb,
    totalStudentLabel: lb,
    totalPagesValue: ab,
    totalPagesLabel: nb,
    totalDepartmentsLabel: ub,
    tableActions: ib,
    actionBtn: rb,
    noDataCell: cb,
  },
  ob = ({ color: u }) =>
    m.jsxs("svg", {
      width: "24",
      height: "24",
      fill: `${u}`,
      viewBox: "0 0 24 24",
      children: [
        m.jsx("circle", { cx: "12", cy: "8", r: "4" }),
        m.jsx("path", {
          d: "M12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z",
        }),
      ],
    }),
  sb = () =>
    m.jsx("svg", {
      width: "20",
      height: "20",
      fill: "#e661ad",
      viewBox: "0 0 24 24",
      children: m.jsx("path", {
        d: "M3 17.25V21h3.75l11.06-11.06-3.75-3.75L3 17.25zm14.71-10.04a1.003 1.003 0 0 0 0-1.42l-2.5-2.5a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.83-1.83z",
      }),
    }),
  fb = () =>
    m.jsx("svg", {
      width: "20",
      height: "20",
      fill: "#db38b5",
      viewBox: "0 0 24 24",
      children: m.jsx("path", {
        d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
      }),
    }),
  db = () =>
    m.jsx("svg", {
      width: "18",
      height: "18",
      fill: "#e661ad",
      viewBox: "0 0 24 24",
      children: m.jsx("path", {
        d: "M21 20l-5.197-5.197A7.92 7.92 0 0 0 17 10a8 8 0 1 0-8 8c1.61 0 3.09-.49 4.303-1.324L20 21zM10 16a6 6 0 1 1 0-12 6 6 0 0 1 0 12z",
      }),
    });
function hb(u, r = 500) {
  const [c, o] = R.useState(u);
  return (
    R.useEffect(() => {
      const f = setTimeout(() => {
        o(u);
      }, r);
      return () => {
        clearTimeout(f);
      };
    }, [u, r]),
    c
  );
}
let mb = () => {
  const {
    studentPaginationObject: u,
    isAdmin: r,
    recentStudents: c,
    fetchStudents: o,
    role: f,
  } = R.useContext(Rl);
  console.log(f);
  let { studentList: h, currentPage: g, totalElements: b, totalPages: y } = u;
  const [v, E] = R.useState(h);
  let [C, A] = R.useState("All"),
    [H, Q] = R.useState("id");
  const [J, k] = R.useState("");
  let [X, ce] = R.useState(["All Students"]);
  const [$, oe] = R.useState("");
  let W = (de) => {
    o(de, 10, "id");
  };
  const O = hb(J, 500);
  R.useEffect(() => {
    oe(O);
  }, [O]),
    R.useEffect(() => {
      $ && (console.log("Searching for:", $), be());
    }, [$]),
    R.useEffect(() => {
      !J.length > 0 && (E(h), ce("All Students"), A("All"));
    }, [J]),
    R.useEffect(() => {
      h && E(h);
    }, [h]);
  const be = async () => {
      console.log(J);
      const de = await b1(H, $);
      de && de.data
        ? (E(de.data), A("Search Results"))
        : (console.error("Search failed or no data returned"),
          C == "Recent" ? E(c) : E(h));
    },
    _e = (de) => {
      alert(`Edit student: ${de.name}`);
    },
    ve = (de) => {
      window.confirm(`Delete student ${de.name}?`) &&
        alert(`Deleted student: ${de.name}`);
    };
  return m.jsx("div", {
    className: Le.container,
    children: m.jsxs("div", {
      className: Le.dashboard,
      children: [
        m.jsxs("div", {
          className: Le.herocont,
          children: [
            m.jsxs("div", {
              className: Le.Usericon,
              children: [
                m.jsx(ob, { color: " white" }),
                m.jsxs("div", {
                  children: [
                    m.jsx("h1", {
                      className: Le.headingTop,
                      children: "Admin Dashboard",
                    }),
                    m.jsx("span", { className: Le.roleIndicator, children: f }),
                  ],
                }),
              ],
            }),
            m.jsx(Qt, {
              to: "/addStudentForm",
              children: m.jsx("button", {
                className: Le.addStudentbtn,
                children: "+ Add",
              }),
            }),
          ],
        }),
        m.jsxs("div", {
          className:
            "d-flex justify-content-space-between mb-4 gap-2 flex-wrap ",
          children: [
            m.jsxs("div", {
              className: Le.totalStudent,
              children: [
                m.jsx("div", {
                  className: Le.totalStudentValue,
                  children: u.totalElements,
                }),
                m.jsx("div", {
                  className: Le.totalStudentLabel,
                  children: "Total Students",
                }),
              ],
            }),
            m.jsxs("div", {
              className: Le.totalPages,
              children: [
                m.jsx("div", {
                  className: Le.totalPagesValue,
                  children: u.totalPages,
                }),
                m.jsx("div", {
                  className: Le.totalPagesLabel,
                  children: "Total Pages",
                }),
              ],
            }),
            m.jsx("div", {
              className: Le.totalDepartments,
              children: m.jsxs("span", {
                className: Le.totalDepartmentsLabel,
                children: ["Departments: ", m.jsx("b", { children: "3+" })],
              }),
            }),
          ],
        }),
        m.jsxs("div", {
          className: Le.searchicon,
          children: [
            m.jsxs("div", {
              className: Le.searchInput,
              children: [
                m.jsx("input", {
                  className: Le.search,
                  type: H === "id" ? "number" : "text",
                  placeholder: "Select filter and search...",
                  value: J,
                  onChange: (de) => {
                    k(de.target.value), ce("Search Results");
                  },
                }),
                m.jsxs("button", {
                  className: Le.filterBtn,
                  onClick: be,
                  children: [" ", m.jsx(db, {})],
                }),
              ],
            }),
            m.jsxs("select", {
              className: Le.filterSelect,
              onChange: (de) => Q(de.target.value),
              children: [
                m.jsx("option", { value: "id", children: "id" }),
                m.jsx("option", { value: "name", children: "name" }),
                m.jsx("option", {
                  value: "department",
                  children: "department",
                }),
              ],
            }),
            m.jsxs("div", {
              className: Le.btns,
              children: [
                m.jsx("button", {
                  className: Le.recentBtn,
                  onClick: () => {
                    A("Recent"), E(c), ce("Recent Students");
                  },
                  children: "Recent",
                }),
                m.jsx("button", {
                  className: Le.allBtn,
                  onClick: () => {
                    A("All"), E(h), ce("All Students");
                  },
                  children: "All",
                }),
              ],
            }),
          ],
        }),
        m.jsxs(m.Fragment, {
          children: [
            m.jsx("h2", { className: Le.studentToshowHeading, children: X }),
            m.jsx("div", {
              className: Le.tableContainer,
              children: m.jsxs("table", {
                className: Le.studentsTable,
                children: [
                  m.jsx("thead", {
                    children: m.jsxs("tr", {
                      children: [
                        m.jsx("th", { children: "Id" }),
                        m.jsx("th", { children: "Name" }),
                        m.jsx("th", { children: "Age" }),
                        m.jsx("th", { children: "Department" }),
                        m.jsx("th", { children: "Actions" }),
                      ],
                    }),
                  }),
                  m.jsx("tbody", {
                    children:
                      v && v.length > 0
                        ? v.map((de) =>
                            m.jsxs(
                              "tr",
                              {
                                children: [
                                  m.jsx("td", { children: de.id }),
                                  m.jsx("td", { children: de.name }),
                                  m.jsx("td", { children: de.age }),
                                  m.jsx("td", { children: de.department }),
                                  m.jsxs("td", {
                                    className: Le.tableActions,
                                    children: [
                                      m.jsx("button", {
                                        title: "Edit",
                                        className: Le.actionBtn,
                                        onClick: () => _e(de),
                                        children: m.jsx(sb, {}),
                                      }),
                                      m.jsx("button", {
                                        title: "Delete",
                                        className: Le.actionBtn,
                                        onClick: () => ve(de),
                                        children: m.jsx(fb, {}),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              de.id
                            )
                          )
                        : m.jsx("tr", {
                            children: m.jsx("td", {
                              colSpan: 5,
                              className: Le.noDataCell,
                              children: "No student data available",
                            }),
                          }),
                  }),
                ],
              }),
            }),
            C === "All" &&
              m.jsxs("div", {
                className: Le.paginationControls,
                children: [
                  m.jsx("button", {
                    disabled: g === 0,
                    onClick: () => W(g - 1),
                    children: "Prev",
                  }),
                  m.jsx("button", {
                    disabled: g === y - 1,
                    onClick: () => W(g + 1),
                    children: "Next",
                  }),
                ],
              }),
          ],
        }),
      ],
    }),
  });
};
const Vo = ({ children: u }) => {
    const { isAuthenticated: r, authChecked: c } = R.useContext(Rl);
    return c
      ? r
        ? u
        : m.jsx(Ng, { to: "/login", replace: !0 })
      : m.jsx("div", {
          className: "spinner-border",
          style: {
            width: "4rem",
            height: "4rem",
            position: "absolute",
            top: "50%",
            left: "55%",
          },
          role: "status",
          children: m.jsx("span", {
            className: "visually-hidden",
            children: "Loading...",
          }),
        });
  },
  vb = "_container_1gs9r_1",
  yb = "_form_1gs9r_13",
  gb = "_field_1gs9r_41",
  pb = "_warning_1gs9r_83",
  bb = "_passwordMisMatch_1gs9r_91",
  Sb = "_button_1gs9r_109",
  xb = "_errorMsg_1gs9r_139",
  we = {
    container: vb,
    form: yb,
    field: gb,
    warning: pb,
    passwordMisMatch: bb,
    button: Sb,
    errorMsg: xb,
  },
  Eb = () => {
    let [u, r] = R.useState(!1),
      [c, o] = R.useState(null),
      [f, h] = R.useState(null),
      [g, b] = R.useState(null),
      [y, v] = R.useState(null),
      [E, C] = R.useState(null),
      [A, H] = R.useState(null);
    const [Q, J] = R.useState(!1),
      k = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    R.useEffect(() => {
      y || H(null),
        y &&
          y.length >= 8 &&
          (H(k.test(y)),
          k.test(y) ||
            (h("Weak password"), b("please pick strong password"), $()));
    }, [y]),
      console.log(A);
    const X = R.useRef(null);
    R.useEffect(() => {
      if (!y || !E) {
        o(null);
        return;
      }
      if (y !== E && !y.startsWith(E)) {
        o(!1), J(!1), h("Password Mismatch"), b("Passwords do not match");
        return;
      }
      y == E && (o(!0), J(!0));
    }, [y, E]),
      R.useEffect(() => {}, [c]);
    const ce = async (oe) => {
        if (
          (oe.preventDefault(),
          X.current.elements.name.value,
          X.current.elements.email.value,
          X.current.elements.role.value,
          X.current.elements.password.value,
          console.log("ok" + Q),
          !Q)
        ) {
          h("Password Mismatch"), b("please match your password "), $();
          return;
        }
      },
      $ = () => {
        r(!0),
          setTimeout(() => {
            r(!1);
          }, 3e3);
      };
    return m.jsxs("div", {
      className: we.container,
      children: [
        m.jsxs(_r, {
          className: we.form,
          onSubmit: ce,
          ref: X,
          children: [
            m.jsx("h2", { children: "Lets make your account" }),
            m.jsxs("div", {
              className: we.field,
              children: [
                m.jsx("label", { htmlFor: "name", children: "Name" }),
                m.jsx("input", {
                  type: "text",
                  id: "name",
                  name: "name",
                  required: !0,
                }),
              ],
            }),
            m.jsxs("div", {
              className: we.field,
              children: [
                m.jsx("label", { htmlFor: "email", children: "Email" }),
                m.jsx("input", {
                  type: "email",
                  id: "email",
                  name: "email",
                  required: !0,
                }),
              ],
            }),
            m.jsxs("div", {
              className: we.field,
              children: [
                m.jsx("label", {
                  htmlFor: "role",
                  children:
                    "Select Role ( If you are teacher or Dean select user )",
                }),
                m.jsxs("select", {
                  id: "role",
                  name: "role",
                  required: !0,
                  children: [
                    m.jsx("option", { value: "student", children: "Student" }),
                    m.jsx("option", {
                      value: "user",
                      children: "User(admin will choose your role)",
                    }),
                  ],
                }),
              ],
            }),
            m.jsxs("div", {
              className: we.field,
              children: [
                m.jsx("label", {
                  htmlFor: "password",
                  children:
                    "Password (at least 1 uppercase, 1 special character, 1 number, min 8 chars)",
                }),
                m.jsx("input", {
                  type: "password",
                  id: "password",
                  name: "password",
                  required: !0,
                  onChange: (oe) => v(oe.target.value),
                  className: A === !1 ? we.warning : A === !0 ? we.success : "",
                }),
                A === !1 &&
                  A != null &&
                  m.jsx("p", {
                    className: we.warningText,
                    children:
                      "Password must contain an uppercase, number, special char, and 8+ length",
                  }),
              ],
            }),
            m.jsxs("div", {
              className: we.field,
              children: [
                m.jsx("label", {
                  htmlFor: "confirmPassword",
                  children: "Confirm Password",
                }),
                m.jsx("input", {
                  type: "password",
                  id: "confirmPassword",
                  name: "confirmPassword",
                  className: !c && c !== null ? we.warning : "",
                  required: !0,
                  onChange: (oe) => C(oe.target.value),
                }),
                !c &&
                  c !== null &&
                  m.jsx("p", {
                    className: we.passwordMisMatch,
                    children: "Passwords do not match",
                  }),
              ],
            }),
            m.jsx("button", {
              type: "submit",
              className: we.button,
              children: "Sign Up",
            }),
          ],
        }),
        u &&
          m.jsxs("div", {
            className: we.errorMsg,
            children: [
              m.jsx("h3", { children: f }),
              m.jsx("p", { children: g }),
            ],
          }),
      ],
    });
  },
  _b = "_container_1467o_1",
  Rb = "_form_1467o_17",
  Tb = "_formGroup_1467o_37",
  Db = "_label_1467o_49",
  Mb = "_input_1467o_61",
  jb = "_button_1467o_89",
  Fe = {
    container: _b,
    form: Rb,
    formGroup: Tb,
    label: Db,
    input: Mb,
    button: jb,
  };
let Ab = () => {
  const u = Vu(),
    r = R.useRef(),
    c = R.useRef(),
    o = R.useRef(),
    { studentObject: f, setStudentObject: h, addStudent: g } = R.useContext(Rl),
    b = async (y) => {
      y.preventDefault();
      const v = r.current.value,
        E = Number.parseInt(c.current.value),
        C = o.current.value;
      if (!v || v.length < 4) {
        alert("Name must be at least 4 characters and not empty.");
        return;
      }
      if (!C) {
        alert("Department must not be empty.");
        return;
      }
      if (isNaN(E) || E < 17 || E > 100) {
        alert("Age must be a number between 17 and 100.");
        return;
      }
      const A = { name: v, age: E, department: C };
      console.log("Sending student:", A);
      try {
        const H = await g(A);
        console.log("Response from backend:", H),
          H && H.success && H.data
            ? (alert("Student added successfully! ID: " + H.data.id),
              (r.current.value = ""),
              (c.current.value = ""),
              (o.current.value = ""),
              h(H.data),
              u("/"))
            : (alert(
                "Failed to add student. Please check your input or try again."
              ),
              console.error("Failed to add student", H));
      } catch (H) {
        alert("Error occurred while adding student."), console.error(H);
      }
    };
  return m.jsx("div", {
    className: Fe.container,
    children: m.jsxs(_r, {
      className: Fe.form,
      onSubmit: b,
      children: [
        m.jsxs("div", {
          className: Fe.formGroup,
          children: [
            m.jsx("label", { className: Fe.label, children: "Student Name:" }),
            m.jsx("input", {
              type: "text",
              name: "name",
              className: Fe.input,
              ref: r,
            }),
          ],
        }),
        m.jsxs("div", {
          className: Fe.formGroup,
          children: [
            m.jsx("label", { className: Fe.label, children: "Age:" }),
            m.jsx("input", {
              type: "number",
              name: "age",
              className: Fe.input,
              ref: c,
            }),
          ],
        }),
        m.jsxs("div", {
          className: Fe.formGroup,
          children: [
            m.jsx("label", { className: Fe.label, children: "Department:" }),
            m.jsx("input", {
              type: "text",
              name: "department",
              className: Fe.input,
              ref: o,
            }),
          ],
        }),
        m.jsxs("div", {
          className: Fe.formGroup,
          children: [
            m.jsx("label", { className: Fe.label, children: "Father Name:" }),
            m.jsx("input", {
              type: "text",
              name: "fatherName",
              className: Fe.input,
              ref: o,
            }),
          ],
        }),
        m.jsxs("div", {
          className: Fe.formGroup,
          children: [
            m.jsx("label", { className: Fe.label, children: "Email:" }),
            m.jsx("input", {
              type: "text",
              name: "email",
              className: Fe.input,
              ref: o,
            }),
          ],
        }),
        m.jsxs("div", {
          className: Fe.formGroup,
          children: [
            m.jsx("label", { className: Fe.label, children: "Password:" }),
            m.jsx("input", {
              type: "text",
              name: "Password",
              className: Fe.input,
              ref: o,
            }),
          ],
        }),
        m.jsxs("div", {
          className: Fe.formGroup,
          children: [
            m.jsx("label", {
              className: Fe.label,
              children: "Confirm Password:",
            }),
            m.jsx("input", {
              type: "text",
              name: "confirmPassword",
              className: Fe.input,
              ref: o,
            }),
          ],
        }),
        m.jsx("button", {
          type: "submit",
          className: Fe.button,
          children: "Add Student",
        }),
      ],
    }),
  });
};
const Nb = () => {
    const u = Vu();
    Ql();
    const r = R.useRef(null),
      c = (o) => {
        o.preventDefault();
        const f = {
          fullName: r.current.elements.fullName.value,
          fatherName: r.current.elements.fatherName.value,
          dob: r.current.elements.dob.value,
          cnic: r.current.elements.cnic.value,
          gender: r.current.elements.gender.value,
          domicile: r.current.elements.domicile.value,
          phone: r.current.elements.phone.value,
          email: r.current.elements.email.value,
          matricRoll: r.current.elements.matricRoll.value,
          matricBoard: r.current.elements.matricBoard.value,
          matricYear: r.current.elements.matricYear.value,
          matricMarks: r.current.elements.matricMarks.value,
          interRoll: r.current.elements.interRoll.value,
          interBoard: r.current.elements.interBoard.value,
          interYear: r.current.elements.interYear.value,
          interMarks: r.current.elements.interMarks.value,
          program: r.current.elements.program.value,
          hostel: r.current.elements.hostel.checked,
          transport: r.current.elements.transport.checked,
          scholarship: r.current.elements.scholarship.checked,
        };
        u("/signup", { state: { studentDetails: f } });
      };
    return m.jsx("div", {
      className: we.container,
      children: m.jsxs("form", {
        className: we.form,
        ref: r,
        onSubmit: c,
        children: [
          m.jsx("h2", { children: "Student Admission Details" }),
          m.jsxs("div", {
            className: we.field,
            children: [
              m.jsx("label", { children: "Full Name" }),
              m.jsx("input", { type: "text", name: "fullName", required: !0 }),
            ],
          }),
          m.jsxs("div", {
            className: we.field,
            children: [
              m.jsx("label", { children: "Father / Guardian Name" }),
              m.jsx("input", {
                type: "text",
                name: "fatherName",
                required: !0,
              }),
            ],
          }),
          m.jsxs("div", {
            className: we.field,
            children: [
              m.jsx("label", { children: "Date of Birth" }),
              m.jsx("input", { type: "date", name: "dob", required: !0 }),
            ],
          }),
          m.jsxs("div", {
            className: we.field,
            children: [
              m.jsx("label", { children: "CNIC / B-Form" }),
              m.jsx("input", { type: "text", name: "cnic", required: !0 }),
            ],
          }),
          m.jsxs("div", {
            className: we.field,
            children: [
              m.jsx("label", { children: "Gender" }),
              m.jsxs("select", {
                name: "gender",
                required: !0,
                children: [
                  m.jsx("option", { value: "", children: "--Select--" }),
                  m.jsx("option", { value: "male", children: "Male" }),
                  m.jsx("option", { value: "female", children: "Female" }),
                ],
              }),
            ],
          }),
          m.jsxs("div", {
            className: we.field,
            children: [
              m.jsx("label", { children: "Domicile" }),
              m.jsx("input", { type: "text", name: "domicile", required: !0 }),
            ],
          }),
          m.jsxs("div", {
            className: we.field,
            children: [
              m.jsx("label", { children: "Contact Number" }),
              m.jsx("input", { type: "tel", name: "phone", required: !0 }),
            ],
          }),
          m.jsxs("div", {
            className: we.field,
            children: [
              m.jsx("label", { children: "Email" }),
              m.jsx("input", { type: "email", name: "email", required: !0 }),
            ],
          }),
          m.jsx("h3", { children: "Matriculation Details" }),
          m.jsxs("div", {
            className: we.field,
            children: [
              m.jsx("label", { children: "Roll Number" }),
              m.jsx("input", {
                type: "text",
                name: "matricRoll",
                required: !0,
              }),
            ],
          }),
          m.jsxs("div", {
            className: we.field,
            children: [
              m.jsx("label", { children: "Board" }),
              m.jsx("input", {
                type: "text",
                name: "matricBoard",
                required: !0,
              }),
            ],
          }),
          m.jsxs("div", {
            className: we.field,
            children: [
              m.jsx("label", { children: "Passing Year" }),
              m.jsx("input", {
                type: "number",
                name: "matricYear",
                required: !0,
              }),
            ],
          }),
          m.jsxs("div", {
            className: we.field,
            children: [
              m.jsx("label", { children: "Marks / Grade" }),
              m.jsx("input", {
                type: "text",
                name: "matricMarks",
                required: !0,
              }),
            ],
          }),
          m.jsx("h3", { children: "Intermediate / A-Level Details" }),
          m.jsxs("div", {
            className: we.field,
            children: [
              m.jsx("label", { children: "Roll Number" }),
              m.jsx("input", { type: "text", name: "interRoll", required: !0 }),
            ],
          }),
          m.jsxs("div", {
            className: we.field,
            children: [
              m.jsx("label", { children: "Board" }),
              m.jsx("input", {
                type: "text",
                name: "interBoard",
                required: !0,
              }),
            ],
          }),
          m.jsxs("div", {
            className: we.field,
            children: [
              m.jsx("label", { children: "Passing Year" }),
              m.jsx("input", {
                type: "number",
                name: "interYear",
                required: !0,
              }),
            ],
          }),
          m.jsxs("div", {
            className: we.field,
            children: [
              m.jsx("label", { children: "Marks / Grade" }),
              m.jsx("input", {
                type: "text",
                name: "interMarks",
                required: !0,
              }),
            ],
          }),
          m.jsx("h3", { children: "Program Choice" }),
          m.jsxs("div", {
            className: we.field,
            children: [
              m.jsx("label", { children: "Program Applied For" }),
              m.jsxs("select", {
                name: "program",
                required: !0,
                children: [
                  m.jsx("option", { value: "", children: "--Select--" }),
                  m.jsx("option", {
                    value: "bs-cs",
                    children: "BS Computer Science",
                  }),
                  m.jsx("option", { value: "bba", children: "BBA" }),
                  m.jsx("option", {
                    value: "bs-english",
                    children: "BS English",
                  }),
                  m.jsx("option", {
                    value: "bs-physics",
                    children: "BS Physics",
                  }),
                ],
              }),
            ],
          }),
          m.jsx("h3", { children: "Additional Options" }),
          m.jsxs("div", {
            className: we.field,
            children: [
              m.jsxs("label", {
                children: [
                  m.jsx("input", { type: "checkbox", name: "hostel" }),
                  " Need Hostel",
                ],
              }),
              m.jsxs("label", {
                children: [
                  m.jsx("input", { type: "checkbox", name: "transport" }),
                  " Need Transport",
                ],
              }),
              m.jsxs("label", {
                children: [
                  m.jsx("input", { type: "checkbox", name: "scholarship" }),
                  " Apply for Scholarship",
                ],
              }),
            ],
          }),
          m.jsx("button", {
            type: "submit",
            className: we.button,
            children: "Continue to Signup",
          }),
        ],
      }),
    });
  },
  zb = () =>
    m.jsxs("div", {
      style: { textAlign: "center", marginTop: "50px" },
      children: [
        m.jsx("h1", { children: "404 - Page Not Found" }),
        m.jsx("p", {
          children: "Sorry, the page you are looking for does not exist.",
        }),
        m.jsx(Qt, { to: "/", children: "Go back Home" }),
      ],
    });
function Ob() {
  const { isAuthenticated: u } = R.useContext(Rl),
    r = t1([
      {
        path: "/",
        element: m.jsx(yp, {}),
        children: [
          { path: "", element: m.jsx(Mp, {}) },
          { path: "login", element: m.jsx(wp, {}) },
          { path: "signup", element: m.jsx(Eb, {}) },
          {
            path: "addStudentForm",
            element: m.jsx(Vo, { isAuthenticated: u, children: m.jsx(Ab, {}) }),
          },
          {
            path: "dashboard",
            element: m.jsx(Vo, { isAuthenticated: u, children: m.jsx(mb, {}) }),
          },
          {
            path: "studentDetail",
            element: m.jsx(Vo, { isAuthenticated: u, children: m.jsx(Nb, {}) }),
          },
        ],
      },
      { path: "*", element: m.jsx(zb, {}) },
    ]);
  return m.jsx(h1, { router: r });
}
n0.createRoot(document.getElementById("root")).render(
  m.jsx(R.StrictMode, { children: m.jsx(Gm, { children: m.jsx(Ob, {}) }) })
);
