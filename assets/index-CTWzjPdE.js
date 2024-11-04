function Xs(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const l in r)
        if (l !== 'default' && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === 'childList')
        for (const o of i.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : l.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function Js(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Zs = { exports: {} },
  hi = {},
  qs = { exports: {} },
  Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nl = Symbol.for('react.element'),
  $d = Symbol.for('react.portal'),
  Wd = Symbol.for('react.fragment'),
  Qd = Symbol.for('react.strict_mode'),
  Kd = Symbol.for('react.profiler'),
  Yd = Symbol.for('react.provider'),
  Gd = Symbol.for('react.context'),
  Xd = Symbol.for('react.forward_ref'),
  Jd = Symbol.for('react.suspense'),
  Zd = Symbol.for('react.memo'),
  qd = Symbol.for('react.lazy'),
  xu = Symbol.iterator;
function bd(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (xu && e[xu]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var bs = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ec = Object.assign,
  tc = {};
function rr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = tc),
    (this.updater = n || bs);
}
rr.prototype.isReactComponent = {};
rr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
rr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function nc() {}
nc.prototype = rr.prototype;
function fa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = tc),
    (this.updater = n || bs);
}
var da = (fa.prototype = new nc());
da.constructor = fa;
ec(da, rr.prototype);
da.isPureReactComponent = !0;
var Su = Array.isArray,
  rc = Object.prototype.hasOwnProperty,
  pa = { current: null },
  lc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ic(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      rc.call(t, r) && !lc.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: nl,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: pa.current,
  };
}
function ep(e, t) {
  return {
    $$typeof: nl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ha(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === nl;
}
function tp(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Eu = /\/+/g;
function Oi(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? tp('' + e.key)
    : t.toString(36);
}
function Ll(e, t, n, r, l) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        o = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case nl:
          case $d:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === '' ? '.' + Oi(o, 0) : r),
      Su(l)
        ? ((n = ''),
          e != null && (n = e.replace(Eu, '$&/') + '/'),
          Ll(l, t, n, '', function (s) {
            return s;
          }))
        : l != null &&
          (ha(l) &&
            (l = ep(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ''
                  : ('' + l.key).replace(Eu, '$&/') + '/') +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === '' ? '.' : r + ':'), Su(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var u = r + Oi(i, a);
      o += Ll(i, t, n, u, l);
    }
  else if (((u = bd(e)), typeof u == 'function'))
    for (e = u.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + Oi(i, a++)), (o += Ll(i, t, n, u, l));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return o;
}
function pl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Ll(e, r, '', '', function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function np(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Fe = { current: null },
  Tl = { transition: null },
  rp = {
    ReactCurrentDispatcher: Fe,
    ReactCurrentBatchConfig: Tl,
    ReactCurrentOwner: pa,
  };
Q.Children = {
  map: pl,
  forEach: function (e, t, n) {
    pl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      pl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      pl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ha(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
Q.Component = rr;
Q.Fragment = Wd;
Q.Profiler = Kd;
Q.PureComponent = fa;
Q.StrictMode = Qd;
Q.Suspense = Jd;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rp;
Q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = ec({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = pa.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      rc.call(t, u) &&
        !lc.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: nl, type: e.type, key: l, ref: i, props: r, _owner: o };
};
Q.createContext = function (e) {
  return (
    (e = {
      $$typeof: Gd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Yd, _context: e }),
    (e.Consumer = e)
  );
};
Q.createElement = ic;
Q.createFactory = function (e) {
  var t = ic.bind(null, e);
  return (t.type = e), t;
};
Q.createRef = function () {
  return { current: null };
};
Q.forwardRef = function (e) {
  return { $$typeof: Xd, render: e };
};
Q.isValidElement = ha;
Q.lazy = function (e) {
  return { $$typeof: qd, _payload: { _status: -1, _result: e }, _init: np };
};
Q.memo = function (e, t) {
  return { $$typeof: Zd, type: e, compare: t === void 0 ? null : t };
};
Q.startTransition = function (e) {
  var t = Tl.transition;
  Tl.transition = {};
  try {
    e();
  } finally {
    Tl.transition = t;
  }
};
Q.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
Q.useCallback = function (e, t) {
  return Fe.current.useCallback(e, t);
};
Q.useContext = function (e) {
  return Fe.current.useContext(e);
};
Q.useDebugValue = function () {};
Q.useDeferredValue = function (e) {
  return Fe.current.useDeferredValue(e);
};
Q.useEffect = function (e, t) {
  return Fe.current.useEffect(e, t);
};
Q.useId = function () {
  return Fe.current.useId();
};
Q.useImperativeHandle = function (e, t, n) {
  return Fe.current.useImperativeHandle(e, t, n);
};
Q.useInsertionEffect = function (e, t) {
  return Fe.current.useInsertionEffect(e, t);
};
Q.useLayoutEffect = function (e, t) {
  return Fe.current.useLayoutEffect(e, t);
};
Q.useMemo = function (e, t) {
  return Fe.current.useMemo(e, t);
};
Q.useReducer = function (e, t, n) {
  return Fe.current.useReducer(e, t, n);
};
Q.useRef = function (e) {
  return Fe.current.useRef(e);
};
Q.useState = function (e) {
  return Fe.current.useState(e);
};
Q.useSyncExternalStore = function (e, t, n) {
  return Fe.current.useSyncExternalStore(e, t, n);
};
Q.useTransition = function () {
  return Fe.current.useTransition();
};
Q.version = '18.2.0';
qs.exports = Q;
var j = qs.exports;
const oc = Js(j),
  lp = Xs({ __proto__: null, default: oc }, [j]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ip = j,
  op = Symbol.for('react.element'),
  ap = Symbol.for('react.fragment'),
  up = Object.prototype.hasOwnProperty,
  sp = ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  cp = { key: !0, ref: !0, __self: !0, __source: !0 };
function ac(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) up.call(t, r) && !cp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: op,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: sp.current,
  };
}
hi.Fragment = ap;
hi.jsx = ac;
hi.jsxs = ac;
Zs.exports = hi;
var g = Zs.exports,
  po = {},
  uc = { exports: {} },
  Je = {},
  sc = { exports: {} },
  cc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, B) {
    var V = M.length;
    M.push(B);
    e: for (; 0 < V; ) {
      var J = (V - 1) >>> 1,
        ne = M[J];
      if (0 < l(ne, B)) (M[J] = B), (M[V] = ne), (V = J);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var B = M[0],
      V = M.pop();
    if (V !== B) {
      M[0] = V;
      e: for (var J = 0, ne = M.length, mt = ne >>> 1; J < mt; ) {
        var Ce = 2 * (J + 1) - 1,
          ot = M[Ce],
          ze = Ce + 1,
          zt = M[ze];
        if (0 > l(ot, V))
          ze < ne && 0 > l(zt, ot)
            ? ((M[J] = zt), (M[ze] = V), (J = ze))
            : ((M[J] = ot), (M[Ce] = V), (J = Ce));
        else if (ze < ne && 0 > l(zt, V)) (M[J] = zt), (M[ze] = V), (J = ze);
        else break e;
      }
    }
    return B;
  }
  function l(M, B) {
    var V = M.sortIndex - B.sortIndex;
    return V !== 0 ? V : M.id - B.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var u = [],
    s = [],
    f = 1,
    h = null,
    p = 3,
    S = !1,
    E = !1,
    x = !1,
    N = typeof setTimeout == 'function' ? setTimeout : null,
    d = typeof clearTimeout == 'function' ? clearTimeout : null,
    c = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(M) {
    for (var B = n(s); B !== null; ) {
      if (B.callback === null) r(s);
      else if (B.startTime <= M)
        r(s), (B.sortIndex = B.expirationTime), t(u, B);
      else break;
      B = n(s);
    }
  }
  function C(M) {
    if (((x = !1), m(M), !E))
      if (n(u) !== null) (E = !0), Mt(L);
      else {
        var B = n(s);
        B !== null && ie(C, B.startTime - M);
      }
  }
  function L(M, B) {
    (E = !1), x && ((x = !1), d(T), (T = -1)), (S = !0);
    var V = p;
    try {
      for (
        m(B), h = n(u);
        h !== null && (!(h.expirationTime > B) || (M && !X()));

      ) {
        var J = h.callback;
        if (typeof J == 'function') {
          (h.callback = null), (p = h.priorityLevel);
          var ne = J(h.expirationTime <= B);
          (B = e.unstable_now()),
            typeof ne == 'function' ? (h.callback = ne) : h === n(u) && r(u),
            m(B);
        } else r(u);
        h = n(u);
      }
      if (h !== null) var mt = !0;
      else {
        var Ce = n(s);
        Ce !== null && ie(C, Ce.startTime - B), (mt = !1);
      }
      return mt;
    } finally {
      (h = null), (p = V), (S = !1);
    }
  }
  var v = !1,
    R = null,
    T = -1,
    F = 5,
    I = -1;
  function X() {
    return !(e.unstable_now() - I < F);
  }
  function ye() {
    if (R !== null) {
      var M = e.unstable_now();
      I = M;
      var B = !0;
      try {
        B = R(!0, M);
      } finally {
        B ? me() : ((v = !1), (R = null));
      }
    } else v = !1;
  }
  var me;
  if (typeof c == 'function')
    me = function () {
      c(ye);
    };
  else if (typeof MessageChannel < 'u') {
    var qe = new MessageChannel(),
      Nn = qe.port2;
    (qe.port1.onmessage = ye),
      (me = function () {
        Nn.postMessage(null);
      });
  } else
    me = function () {
      N(ye, 0);
    };
  function Mt(M) {
    (R = M), v || ((v = !0), me());
  }
  function ie(M, B) {
    T = N(function () {
      M(e.unstable_now());
    }, B);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      E || S || ((E = !0), Mt(L));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (F = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (M) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = p;
      }
      var V = p;
      p = B;
      try {
        return M();
      } finally {
        p = V;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, B) {
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
      var V = p;
      p = M;
      try {
        return B();
      } finally {
        p = V;
      }
    }),
    (e.unstable_scheduleCallback = function (M, B, V) {
      var J = e.unstable_now();
      switch (
        (typeof V == 'object' && V !== null
          ? ((V = V.delay), (V = typeof V == 'number' && 0 < V ? J + V : J))
          : (V = J),
        M)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = V + ne),
        (M = {
          id: f++,
          callback: B,
          priorityLevel: M,
          startTime: V,
          expirationTime: ne,
          sortIndex: -1,
        }),
        V > J
          ? ((M.sortIndex = V),
            t(s, M),
            n(u) === null &&
              M === n(s) &&
              (x ? (d(T), (T = -1)) : (x = !0), ie(C, V - J)))
          : ((M.sortIndex = ne), t(u, M), E || S || ((E = !0), Mt(L))),
        M
      );
    }),
    (e.unstable_shouldYield = X),
    (e.unstable_wrapCallback = function (M) {
      var B = p;
      return function () {
        var V = p;
        p = B;
        try {
          return M.apply(this, arguments);
        } finally {
          p = V;
        }
      };
    });
})(cc);
sc.exports = cc;
var fp = sc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fc = j,
  Xe = fp;
function P(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var dc = new Set(),
  Ir = {};
function kn(e, t) {
  Jn(e, t), Jn(e + 'Capture', t);
}
function Jn(e, t) {
  for (Ir[e] = t, e = 0; e < t.length; e++) dc.add(t[e]);
}
var jt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  ho = Object.prototype.hasOwnProperty,
  dp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ku = {},
  Cu = {};
function pp(e) {
  return ho.call(Cu, e)
    ? !0
    : ho.call(ku, e)
      ? !1
      : dp.test(e)
        ? (Cu[e] = !0)
        : ((ku[e] = !0), !1);
}
function hp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function mp(e, t, n, r) {
  if (t === null || typeof t > 'u' || hp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Oe(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var Pe = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Pe[e] = new Oe(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Pe[t] = new Oe(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Pe[e] = new Oe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Pe[e] = new Oe(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Pe[e] = new Oe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Pe[e] = new Oe(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Pe[e] = new Oe(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Pe[e] = new Oe(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Pe[e] = new Oe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ma = /[\-:]([a-z])/g;
function va(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ma, va);
    Pe[t] = new Oe(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ma, va);
    Pe[t] = new Oe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(ma, va);
  Pe[t] = new Oe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Pe[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Pe.xlinkHref = new Oe(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Pe[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ya(e, t, n, r) {
  var l = Pe.hasOwnProperty(t) ? Pe[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (mp(t, n, l, r) && (n = null),
    r || l === null
      ? pp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Tt = fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  hl = Symbol.for('react.element'),
  Ln = Symbol.for('react.portal'),
  Tn = Symbol.for('react.fragment'),
  ga = Symbol.for('react.strict_mode'),
  mo = Symbol.for('react.profiler'),
  pc = Symbol.for('react.provider'),
  hc = Symbol.for('react.context'),
  wa = Symbol.for('react.forward_ref'),
  vo = Symbol.for('react.suspense'),
  yo = Symbol.for('react.suspense_list'),
  xa = Symbol.for('react.memo'),
  Ut = Symbol.for('react.lazy'),
  mc = Symbol.for('react.offscreen'),
  Nu = Symbol.iterator;
function fr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Nu && e[Nu]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var se = Object.assign,
  Ii;
function Cr(e) {
  if (Ii === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ii = (t && t[1]) || '';
    }
  return (
    `
` +
    Ii +
    e
  );
}
var Ui = !1;
function Bi(e, t) {
  if (!e || Ui) return '';
  Ui = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == 'string') {
      for (
        var l = s.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && l[o] !== i[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (l[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || l[o] !== i[a])) {
                var u =
                  `
` + l[o].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    u.includes('<anonymous>') &&
                    (u = u.replace('<anonymous>', e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (Ui = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Cr(e) : '';
}
function vp(e) {
  switch (e.tag) {
    case 5:
      return Cr(e.type);
    case 16:
      return Cr('Lazy');
    case 13:
      return Cr('Suspense');
    case 19:
      return Cr('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Bi(e.type, !1)), e;
    case 11:
      return (e = Bi(e.type.render, !1)), e;
    case 1:
      return (e = Bi(e.type, !0)), e;
    default:
      return '';
  }
}
function go(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Tn:
      return 'Fragment';
    case Ln:
      return 'Portal';
    case mo:
      return 'Profiler';
    case ga:
      return 'StrictMode';
    case vo:
      return 'Suspense';
    case yo:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case hc:
        return (e.displayName || 'Context') + '.Consumer';
      case pc:
        return (e._context.displayName || 'Context') + '.Provider';
      case wa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case xa:
        return (
          (t = e.displayName || null), t !== null ? t : go(e.type) || 'Memo'
        );
      case Ut:
        (t = e._payload), (e = e._init);
        try {
          return go(e(t));
        } catch {}
    }
  return null;
}
function yp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return go(t);
    case 8:
      return t === ga ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function bt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function vc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function gp(e) {
  var t = vc(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = '' + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = '' + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ml(e) {
  e._valueTracker || (e._valueTracker = gp(e));
}
function yc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = vc(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Vl(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function wo(e, t) {
  var n = t.checked;
  return se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ru(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = bt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function gc(e, t) {
  (t = t.checked), t != null && ya(e, 'checked', t, !1);
}
function xo(e, t) {
  gc(e, t);
  var n = bt(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? So(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && So(e, t.type, bt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ju(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function So(e, t, n) {
  (t !== 'number' || Vl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Nr = Array.isArray;
function Wn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + bt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Eo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Pu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(P(92));
      if (Nr(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: bt(n) };
}
function wc(e, t) {
  var n = bt(t.value),
    r = bt(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function _u(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function xc(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function ko(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? xc(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var vl,
  Sc = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        vl = vl || document.createElement('div'),
          vl.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = vl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ur(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Pr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  wp = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Pr).forEach(function (e) {
  wp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Pr[t] = Pr[e]);
  });
});
function Ec(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Pr.hasOwnProperty(e) && Pr[e])
      ? ('' + t).trim()
      : t + 'px';
}
function kc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = Ec(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var xp = se(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Co(e, t) {
  if (t) {
    if (xp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(P(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(P(62));
  }
}
function No(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Ro = null;
function Sa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var jo = null,
  Qn = null,
  Kn = null;
function Lu(e) {
  if ((e = il(e))) {
    if (typeof jo != 'function') throw Error(P(280));
    var t = e.stateNode;
    t && ((t = wi(t)), jo(e.stateNode, e.type, t));
  }
}
function Cc(e) {
  Qn ? (Kn ? Kn.push(e) : (Kn = [e])) : (Qn = e);
}
function Nc() {
  if (Qn) {
    var e = Qn,
      t = Kn;
    if (((Kn = Qn = null), Lu(e), t)) for (e = 0; e < t.length; e++) Lu(t[e]);
  }
}
function Rc(e, t) {
  return e(t);
}
function jc() {}
var Hi = !1;
function Pc(e, t, n) {
  if (Hi) return e(t, n);
  Hi = !0;
  try {
    return Rc(e, t, n);
  } finally {
    (Hi = !1), (Qn !== null || Kn !== null) && (jc(), Nc());
  }
}
function Br(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = wi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(P(231, t, typeof n));
  return n;
}
var Po = !1;
if (jt)
  try {
    var dr = {};
    Object.defineProperty(dr, 'passive', {
      get: function () {
        Po = !0;
      },
    }),
      window.addEventListener('test', dr, dr),
      window.removeEventListener('test', dr, dr);
  } catch {
    Po = !1;
  }
function Sp(e, t, n, r, l, i, o, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (f) {
    this.onError(f);
  }
}
var _r = !1,
  $l = null,
  Wl = !1,
  _o = null,
  Ep = {
    onError: function (e) {
      (_r = !0), ($l = e);
    },
  };
function kp(e, t, n, r, l, i, o, a, u) {
  (_r = !1), ($l = null), Sp.apply(Ep, arguments);
}
function Cp(e, t, n, r, l, i, o, a, u) {
  if ((kp.apply(this, arguments), _r)) {
    if (_r) {
      var s = $l;
      (_r = !1), ($l = null);
    } else throw Error(P(198));
    Wl || ((Wl = !0), (_o = s));
  }
}
function Cn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function _c(e) {
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
function Tu(e) {
  if (Cn(e) !== e) throw Error(P(188));
}
function Np(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Cn(e)), t === null)) throw Error(P(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Tu(l), e;
        if (i === r) return Tu(l), t;
        i = i.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, a = l.child; a; ) {
        if (a === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (a === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (a === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function Lc(e) {
  return (e = Np(e)), e !== null ? Tc(e) : null;
}
function Tc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Tc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Mc = Xe.unstable_scheduleCallback,
  Mu = Xe.unstable_cancelCallback,
  Rp = Xe.unstable_shouldYield,
  jp = Xe.unstable_requestPaint,
  he = Xe.unstable_now,
  Pp = Xe.unstable_getCurrentPriorityLevel,
  Ea = Xe.unstable_ImmediatePriority,
  zc = Xe.unstable_UserBlockingPriority,
  Ql = Xe.unstable_NormalPriority,
  _p = Xe.unstable_LowPriority,
  Dc = Xe.unstable_IdlePriority,
  mi = null,
  wt = null;
function Lp(e) {
  if (wt && typeof wt.onCommitFiberRoot == 'function')
    try {
      wt.onCommitFiberRoot(mi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var dt = Math.clz32 ? Math.clz32 : zp,
  Tp = Math.log,
  Mp = Math.LN2;
function zp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Tp(e) / Mp) | 0)) | 0;
}
var yl = 64,
  gl = 4194304;
function Rr(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Kl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~l;
    a !== 0 ? (r = Rr(a)) : ((i &= o), i !== 0 && (r = Rr(i)));
  } else (o = n & ~l), o !== 0 ? (r = Rr(o)) : i !== 0 && (r = Rr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - dt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Dp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Ap(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - dt(i),
      a = 1 << o,
      u = l[o];
    u === -1
      ? (!(a & n) || a & r) && (l[o] = Dp(a, t))
      : u <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Lo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ac() {
  var e = yl;
  return (yl <<= 1), !(yl & 4194240) && (yl = 64), e;
}
function Vi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function rl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - dt(t)),
    (e[t] = n);
}
function Fp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - dt(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function ka(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - dt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var q = 0;
function Fc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Oc,
  Ca,
  Ic,
  Uc,
  Bc,
  To = !1,
  wl = [],
  Qt = null,
  Kt = null,
  Yt = null,
  Hr = new Map(),
  Vr = new Map(),
  Ht = [],
  Op =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function zu(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Qt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Kt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Yt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Hr.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Vr.delete(t.pointerId);
  }
}
function pr(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = il(t)), t !== null && Ca(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Ip(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (Qt = pr(Qt, e, t, n, r, l)), !0;
    case 'dragenter':
      return (Kt = pr(Kt, e, t, n, r, l)), !0;
    case 'mouseover':
      return (Yt = pr(Yt, e, t, n, r, l)), !0;
    case 'pointerover':
      var i = l.pointerId;
      return Hr.set(i, pr(Hr.get(i) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (
        (i = l.pointerId), Vr.set(i, pr(Vr.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Hc(e) {
  var t = sn(e.target);
  if (t !== null) {
    var n = Cn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = _c(n)), t !== null)) {
          (e.blockedOn = t),
            Bc(e.priority, function () {
              Ic(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ml(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Mo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ro = r), n.target.dispatchEvent(r), (Ro = null);
    } else return (t = il(n)), t !== null && Ca(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Du(e, t, n) {
  Ml(e) && n.delete(t);
}
function Up() {
  (To = !1),
    Qt !== null && Ml(Qt) && (Qt = null),
    Kt !== null && Ml(Kt) && (Kt = null),
    Yt !== null && Ml(Yt) && (Yt = null),
    Hr.forEach(Du),
    Vr.forEach(Du);
}
function hr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    To ||
      ((To = !0),
      Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, Up)));
}
function $r(e) {
  function t(l) {
    return hr(l, e);
  }
  if (0 < wl.length) {
    hr(wl[0], e);
    for (var n = 1; n < wl.length; n++) {
      var r = wl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Qt !== null && hr(Qt, e),
      Kt !== null && hr(Kt, e),
      Yt !== null && hr(Yt, e),
      Hr.forEach(t),
      Vr.forEach(t),
      n = 0;
    n < Ht.length;
    n++
  )
    (r = Ht[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ht.length && ((n = Ht[0]), n.blockedOn === null); )
    Hc(n), n.blockedOn === null && Ht.shift();
}
var Yn = Tt.ReactCurrentBatchConfig,
  Yl = !0;
function Bp(e, t, n, r) {
  var l = q,
    i = Yn.transition;
  Yn.transition = null;
  try {
    (q = 1), Na(e, t, n, r);
  } finally {
    (q = l), (Yn.transition = i);
  }
}
function Hp(e, t, n, r) {
  var l = q,
    i = Yn.transition;
  Yn.transition = null;
  try {
    (q = 4), Na(e, t, n, r);
  } finally {
    (q = l), (Yn.transition = i);
  }
}
function Na(e, t, n, r) {
  if (Yl) {
    var l = Mo(e, t, n, r);
    if (l === null) qi(e, t, r, Gl, n), zu(e, r);
    else if (Ip(l, e, t, n, r)) r.stopPropagation();
    else if ((zu(e, r), t & 4 && -1 < Op.indexOf(e))) {
      for (; l !== null; ) {
        var i = il(l);
        if (
          (i !== null && Oc(i),
          (i = Mo(e, t, n, r)),
          i === null && qi(e, t, r, Gl, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else qi(e, t, r, null, n);
  }
}
var Gl = null;
function Mo(e, t, n, r) {
  if (((Gl = null), (e = Sa(r)), (e = sn(e)), e !== null))
    if (((t = Cn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = _c(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Gl = e), null;
}
function Vc(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Pp()) {
        case Ea:
          return 1;
        case zc:
          return 4;
        case Ql:
        case _p:
          return 16;
        case Dc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var $t = null,
  Ra = null,
  zl = null;
function $c() {
  if (zl) return zl;
  var e,
    t = Ra,
    n = t.length,
    r,
    l = 'value' in $t ? $t.value : $t.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (zl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Dl(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function xl() {
  return !0;
}
function Au() {
  return !1;
}
function Ze(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? xl
        : Au),
      (this.isPropagationStopped = Au),
      this
    );
  }
  return (
    se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = xl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = xl));
      },
      persist: function () {},
      isPersistent: xl,
    }),
    t
  );
}
var lr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ja = Ze(lr),
  ll = se({}, lr, { view: 0, detail: 0 }),
  Vp = Ze(ll),
  $i,
  Wi,
  mr,
  vi = se({}, ll, {
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
    getModifierState: Pa,
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
      return 'movementX' in e
        ? e.movementX
        : (e !== mr &&
            (mr && e.type === 'mousemove'
              ? (($i = e.screenX - mr.screenX), (Wi = e.screenY - mr.screenY))
              : (Wi = $i = 0),
            (mr = e)),
          $i);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Wi;
    },
  }),
  Fu = Ze(vi),
  $p = se({}, vi, { dataTransfer: 0 }),
  Wp = Ze($p),
  Qp = se({}, ll, { relatedTarget: 0 }),
  Qi = Ze(Qp),
  Kp = se({}, lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yp = Ze(Kp),
  Gp = se({}, lr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Xp = Ze(Gp),
  Jp = se({}, lr, { data: 0 }),
  Ou = Ze(Jp),
  Zp = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  qp = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  bp = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function eh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = bp[e]) ? !!t[e] : !1;
}
function Pa() {
  return eh;
}
var th = se({}, ll, {
    key: function (e) {
      if (e.key) {
        var t = Zp[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Dl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? qp[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Pa,
    charCode: function (e) {
      return e.type === 'keypress' ? Dl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Dl(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  nh = Ze(th),
  rh = se({}, vi, {
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
  Iu = Ze(rh),
  lh = se({}, ll, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pa,
  }),
  ih = Ze(lh),
  oh = se({}, lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ah = Ze(oh),
  uh = se({}, vi, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  sh = Ze(uh),
  ch = [9, 13, 27, 32],
  _a = jt && 'CompositionEvent' in window,
  Lr = null;
jt && 'documentMode' in document && (Lr = document.documentMode);
var fh = jt && 'TextEvent' in window && !Lr,
  Wc = jt && (!_a || (Lr && 8 < Lr && 11 >= Lr)),
  Uu = ' ',
  Bu = !1;
function Qc(e, t) {
  switch (e) {
    case 'keyup':
      return ch.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Kc(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Mn = !1;
function dh(e, t) {
  switch (e) {
    case 'compositionend':
      return Kc(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Bu = !0), Uu);
    case 'textInput':
      return (e = t.data), e === Uu && Bu ? null : e;
    default:
      return null;
  }
}
function ph(e, t) {
  if (Mn)
    return e === 'compositionend' || (!_a && Qc(e, t))
      ? ((e = $c()), (zl = Ra = $t = null), (Mn = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Wc && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var hh = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
function Hu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!hh[e.type] : t === 'textarea';
}
function Yc(e, t, n, r) {
  Cc(r),
    (t = Xl(t, 'onChange')),
    0 < t.length &&
      ((n = new ja('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Tr = null,
  Wr = null;
function mh(e) {
  lf(e, 0);
}
function yi(e) {
  var t = An(e);
  if (yc(t)) return e;
}
function vh(e, t) {
  if (e === 'change') return t;
}
var Gc = !1;
if (jt) {
  var Ki;
  if (jt) {
    var Yi = 'oninput' in document;
    if (!Yi) {
      var Vu = document.createElement('div');
      Vu.setAttribute('oninput', 'return;'),
        (Yi = typeof Vu.oninput == 'function');
    }
    Ki = Yi;
  } else Ki = !1;
  Gc = Ki && (!document.documentMode || 9 < document.documentMode);
}
function $u() {
  Tr && (Tr.detachEvent('onpropertychange', Xc), (Wr = Tr = null));
}
function Xc(e) {
  if (e.propertyName === 'value' && yi(Wr)) {
    var t = [];
    Yc(t, Wr, e, Sa(e)), Pc(mh, t);
  }
}
function yh(e, t, n) {
  e === 'focusin'
    ? ($u(), (Tr = t), (Wr = n), Tr.attachEvent('onpropertychange', Xc))
    : e === 'focusout' && $u();
}
function gh(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return yi(Wr);
}
function wh(e, t) {
  if (e === 'click') return yi(t);
}
function xh(e, t) {
  if (e === 'input' || e === 'change') return yi(t);
}
function Sh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ht = typeof Object.is == 'function' ? Object.is : Sh;
function Qr(e, t) {
  if (ht(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ho.call(t, l) || !ht(e[l], t[l])) return !1;
  }
  return !0;
}
function Wu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Qu(e, t) {
  var n = Wu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Wu(n);
  }
}
function Jc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Jc(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Zc() {
  for (var e = window, t = Vl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Vl(e.document);
  }
  return t;
}
function La(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Eh(e) {
  var t = Zc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Jc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && La(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Qu(n, i));
        var o = Qu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var kh = jt && 'documentMode' in document && 11 >= document.documentMode,
  zn = null,
  zo = null,
  Mr = null,
  Do = !1;
function Ku(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Do ||
    zn == null ||
    zn !== Vl(r) ||
    ((r = zn),
    'selectionStart' in r && La(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Mr && Qr(Mr, r)) ||
      ((Mr = r),
      (r = Xl(zo, 'onSelect')),
      0 < r.length &&
        ((t = new ja('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = zn))));
}
function Sl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Dn = {
    animationend: Sl('Animation', 'AnimationEnd'),
    animationiteration: Sl('Animation', 'AnimationIteration'),
    animationstart: Sl('Animation', 'AnimationStart'),
    transitionend: Sl('Transition', 'TransitionEnd'),
  },
  Gi = {},
  qc = {};
jt &&
  ((qc = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Dn.animationend.animation,
    delete Dn.animationiteration.animation,
    delete Dn.animationstart.animation),
  'TransitionEvent' in window || delete Dn.transitionend.transition);
function gi(e) {
  if (Gi[e]) return Gi[e];
  if (!Dn[e]) return e;
  var t = Dn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in qc) return (Gi[e] = t[n]);
  return e;
}
var bc = gi('animationend'),
  ef = gi('animationiteration'),
  tf = gi('animationstart'),
  nf = gi('transitionend'),
  rf = new Map(),
  Yu =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function tn(e, t) {
  rf.set(e, t), kn(t, [e]);
}
for (var Xi = 0; Xi < Yu.length; Xi++) {
  var Ji = Yu[Xi],
    Ch = Ji.toLowerCase(),
    Nh = Ji[0].toUpperCase() + Ji.slice(1);
  tn(Ch, 'on' + Nh);
}
tn(bc, 'onAnimationEnd');
tn(ef, 'onAnimationIteration');
tn(tf, 'onAnimationStart');
tn('dblclick', 'onDoubleClick');
tn('focusin', 'onFocus');
tn('focusout', 'onBlur');
tn(nf, 'onTransitionEnd');
Jn('onMouseEnter', ['mouseout', 'mouseover']);
Jn('onMouseLeave', ['mouseout', 'mouseover']);
Jn('onPointerEnter', ['pointerout', 'pointerover']);
Jn('onPointerLeave', ['pointerout', 'pointerover']);
kn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
kn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
kn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
kn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
kn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
kn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var jr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Rh = new Set('cancel close invalid load scroll toggle'.split(' ').concat(jr));
function Gu(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Cp(r, t, void 0, e), (e.currentTarget = null);
}
function lf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== i && l.isPropagationStopped())) break e;
          Gu(l, a, s), (i = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== i && l.isPropagationStopped())
          )
            break e;
          Gu(l, a, s), (i = u);
        }
    }
  }
  if (Wl) throw ((e = _o), (Wl = !1), (_o = null), e);
}
function re(e, t) {
  var n = t[Uo];
  n === void 0 && (n = t[Uo] = new Set());
  var r = e + '__bubble';
  n.has(r) || (of(t, e, 2, !1), n.add(r));
}
function Zi(e, t, n) {
  var r = 0;
  t && (r |= 4), of(n, e, r, t);
}
var El = '_reactListening' + Math.random().toString(36).slice(2);
function Kr(e) {
  if (!e[El]) {
    (e[El] = !0),
      dc.forEach(function (n) {
        n !== 'selectionchange' && (Rh.has(n) || Zi(n, !1, e), Zi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[El] || ((t[El] = !0), Zi('selectionchange', !1, t));
  }
}
function of(e, t, n, r) {
  switch (Vc(t)) {
    case 1:
      var l = Bp;
      break;
    case 4:
      l = Hp;
      break;
    default:
      l = Na;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Po ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function qi(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = sn(a)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Pc(function () {
    var s = i,
      f = Sa(n),
      h = [];
    e: {
      var p = rf.get(e);
      if (p !== void 0) {
        var S = ja,
          E = e;
        switch (e) {
          case 'keypress':
            if (Dl(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            S = nh;
            break;
          case 'focusin':
            (E = 'focus'), (S = Qi);
            break;
          case 'focusout':
            (E = 'blur'), (S = Qi);
            break;
          case 'beforeblur':
          case 'afterblur':
            S = Qi;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            S = Fu;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            S = Wp;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            S = ih;
            break;
          case bc:
          case ef:
          case tf:
            S = Yp;
            break;
          case nf:
            S = ah;
            break;
          case 'scroll':
            S = Vp;
            break;
          case 'wheel':
            S = sh;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            S = Xp;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            S = Iu;
        }
        var x = (t & 4) !== 0,
          N = !x && e === 'scroll',
          d = x ? (p !== null ? p + 'Capture' : null) : p;
        x = [];
        for (var c = s, m; c !== null; ) {
          m = c;
          var C = m.stateNode;
          if (
            (m.tag === 5 &&
              C !== null &&
              ((m = C),
              d !== null && ((C = Br(c, d)), C != null && x.push(Yr(c, C, m)))),
            N)
          )
            break;
          c = c.return;
        }
        0 < x.length &&
          ((p = new S(p, E, null, n, f)), h.push({ event: p, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (S = e === 'mouseout' || e === 'pointerout'),
          p &&
            n !== Ro &&
            (E = n.relatedTarget || n.fromElement) &&
            (sn(E) || E[Pt]))
        )
          break e;
        if (
          (S || p) &&
          ((p =
            f.window === f
              ? f
              : (p = f.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          S
            ? ((E = n.relatedTarget || n.toElement),
              (S = s),
              (E = E ? sn(E) : null),
              E !== null &&
                ((N = Cn(E)), E !== N || (E.tag !== 5 && E.tag !== 6)) &&
                (E = null))
            : ((S = null), (E = s)),
          S !== E)
        ) {
          if (
            ((x = Fu),
            (C = 'onMouseLeave'),
            (d = 'onMouseEnter'),
            (c = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((x = Iu),
              (C = 'onPointerLeave'),
              (d = 'onPointerEnter'),
              (c = 'pointer')),
            (N = S == null ? p : An(S)),
            (m = E == null ? p : An(E)),
            (p = new x(C, c + 'leave', S, n, f)),
            (p.target = N),
            (p.relatedTarget = m),
            (C = null),
            sn(f) === s &&
              ((x = new x(d, c + 'enter', E, n, f)),
              (x.target = m),
              (x.relatedTarget = N),
              (C = x)),
            (N = C),
            S && E)
          )
            t: {
              for (x = S, d = E, c = 0, m = x; m; m = _n(m)) c++;
              for (m = 0, C = d; C; C = _n(C)) m++;
              for (; 0 < c - m; ) (x = _n(x)), c--;
              for (; 0 < m - c; ) (d = _n(d)), m--;
              for (; c--; ) {
                if (x === d || (d !== null && x === d.alternate)) break t;
                (x = _n(x)), (d = _n(d));
              }
              x = null;
            }
          else x = null;
          S !== null && Xu(h, p, S, x, !1),
            E !== null && N !== null && Xu(h, N, E, x, !0);
        }
      }
      e: {
        if (
          ((p = s ? An(s) : window),
          (S = p.nodeName && p.nodeName.toLowerCase()),
          S === 'select' || (S === 'input' && p.type === 'file'))
        )
          var L = vh;
        else if (Hu(p))
          if (Gc) L = xh;
          else {
            L = gh;
            var v = yh;
          }
        else
          (S = p.nodeName) &&
            S.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (L = wh);
        if (L && (L = L(e, s))) {
          Yc(h, L, n, f);
          break e;
        }
        v && v(e, p, s),
          e === 'focusout' &&
            (v = p._wrapperState) &&
            v.controlled &&
            p.type === 'number' &&
            So(p, 'number', p.value);
      }
      switch (((v = s ? An(s) : window), e)) {
        case 'focusin':
          (Hu(v) || v.contentEditable === 'true') &&
            ((zn = v), (zo = s), (Mr = null));
          break;
        case 'focusout':
          Mr = zo = zn = null;
          break;
        case 'mousedown':
          Do = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Do = !1), Ku(h, n, f);
          break;
        case 'selectionchange':
          if (kh) break;
        case 'keydown':
        case 'keyup':
          Ku(h, n, f);
      }
      var R;
      if (_a)
        e: {
          switch (e) {
            case 'compositionstart':
              var T = 'onCompositionStart';
              break e;
            case 'compositionend':
              T = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              T = 'onCompositionUpdate';
              break e;
          }
          T = void 0;
        }
      else
        Mn
          ? Qc(e, n) && (T = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (T = 'onCompositionStart');
      T &&
        (Wc &&
          n.locale !== 'ko' &&
          (Mn || T !== 'onCompositionStart'
            ? T === 'onCompositionEnd' && Mn && (R = $c())
            : (($t = f),
              (Ra = 'value' in $t ? $t.value : $t.textContent),
              (Mn = !0))),
        (v = Xl(s, T)),
        0 < v.length &&
          ((T = new Ou(T, e, null, n, f)),
          h.push({ event: T, listeners: v }),
          R ? (T.data = R) : ((R = Kc(n)), R !== null && (T.data = R)))),
        (R = fh ? dh(e, n) : ph(e, n)) &&
          ((s = Xl(s, 'onBeforeInput')),
          0 < s.length &&
            ((f = new Ou('onBeforeInput', 'beforeinput', null, n, f)),
            h.push({ event: f, listeners: s }),
            (f.data = R)));
    }
    lf(h, t);
  });
}
function Yr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Xl(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Br(e, n)),
      i != null && r.unshift(Yr(e, i, l)),
      (i = Br(e, t)),
      i != null && r.push(Yr(e, i, l))),
      (e = e.return);
  }
  return r;
}
function _n(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Xu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      l
        ? ((u = Br(n, i)), u != null && o.unshift(Yr(n, u, a)))
        : l || ((u = Br(n, i)), u != null && o.push(Yr(n, u, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var jh = /\r\n?/g,
  Ph = /\u0000|\uFFFD/g;
function Ju(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      jh,
      `
`
    )
    .replace(Ph, '');
}
function kl(e, t, n) {
  if (((t = Ju(t)), Ju(e) !== t && n)) throw Error(P(425));
}
function Jl() {}
var Ao = null,
  Fo = null;
function Oo(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Io = typeof setTimeout == 'function' ? setTimeout : void 0,
  _h = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Zu = typeof Promise == 'function' ? Promise : void 0,
  Lh =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Zu < 'u'
        ? function (e) {
            return Zu.resolve(null).then(e).catch(Th);
          }
        : Io;
function Th(e) {
  setTimeout(function () {
    throw e;
  });
}
function bi(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), $r(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  $r(t);
}
function Gt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function qu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ir = Math.random().toString(36).slice(2),
  gt = '__reactFiber$' + ir,
  Gr = '__reactProps$' + ir,
  Pt = '__reactContainer$' + ir,
  Uo = '__reactEvents$' + ir,
  Mh = '__reactListeners$' + ir,
  zh = '__reactHandles$' + ir;
function sn(e) {
  var t = e[gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Pt] || n[gt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = qu(e); e !== null; ) {
          if ((n = e[gt])) return n;
          e = qu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function il(e) {
  return (
    (e = e[gt] || e[Pt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function An(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function wi(e) {
  return e[Gr] || null;
}
var Bo = [],
  Fn = -1;
function nn(e) {
  return { current: e };
}
function le(e) {
  0 > Fn || ((e.current = Bo[Fn]), (Bo[Fn] = null), Fn--);
}
function te(e, t) {
  Fn++, (Bo[Fn] = e.current), (e.current = t);
}
var en = {},
  Me = nn(en),
  He = nn(!1),
  yn = en;
function Zn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return en;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Ve(e) {
  return (e = e.childContextTypes), e != null;
}
function Zl() {
  le(He), le(Me);
}
function bu(e, t, n) {
  if (Me.current !== en) throw Error(P(168));
  te(Me, t), te(He, n);
}
function af(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(P(108, yp(e) || 'Unknown', l));
  return se({}, n, r);
}
function ql(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || en),
    (yn = Me.current),
    te(Me, e),
    te(He, He.current),
    !0
  );
}
function es(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n
    ? ((e = af(e, t, yn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      le(He),
      le(Me),
      te(Me, e))
    : le(He),
    te(He, n);
}
var kt = null,
  xi = !1,
  eo = !1;
function uf(e) {
  kt === null ? (kt = [e]) : kt.push(e);
}
function Dh(e) {
  (xi = !0), uf(e);
}
function rn() {
  if (!eo && kt !== null) {
    eo = !0;
    var e = 0,
      t = q;
    try {
      var n = kt;
      for (q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (kt = null), (xi = !1);
    } catch (l) {
      throw (kt !== null && (kt = kt.slice(e + 1)), Mc(Ea, rn), l);
    } finally {
      (q = t), (eo = !1);
    }
  }
  return null;
}
var On = [],
  In = 0,
  bl = null,
  ei = 0,
  et = [],
  tt = 0,
  gn = null,
  Ct = 1,
  Nt = '';
function an(e, t) {
  (On[In++] = ei), (On[In++] = bl), (bl = e), (ei = t);
}
function sf(e, t, n) {
  (et[tt++] = Ct), (et[tt++] = Nt), (et[tt++] = gn), (gn = e);
  var r = Ct;
  e = Nt;
  var l = 32 - dt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - dt(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Ct = (1 << (32 - dt(t) + l)) | (n << l) | r),
      (Nt = i + e);
  } else (Ct = (1 << i) | (n << l) | r), (Nt = e);
}
function Ta(e) {
  e.return !== null && (an(e, 1), sf(e, 1, 0));
}
function Ma(e) {
  for (; e === bl; )
    (bl = On[--In]), (On[In] = null), (ei = On[--In]), (On[In] = null);
  for (; e === gn; )
    (gn = et[--tt]),
      (et[tt] = null),
      (Nt = et[--tt]),
      (et[tt] = null),
      (Ct = et[--tt]),
      (et[tt] = null);
}
var Ge = null,
  Ye = null,
  oe = !1,
  ft = null;
function cf(e, t) {
  var n = nt(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ts(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ge = e), (Ye = Gt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ge = e), (Ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = gn !== null ? { id: Ct, overflow: Nt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = nt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ge = e),
            (Ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ho(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Vo(e) {
  if (oe) {
    var t = Ye;
    if (t) {
      var n = t;
      if (!ts(e, t)) {
        if (Ho(e)) throw Error(P(418));
        t = Gt(n.nextSibling);
        var r = Ge;
        t && ts(e, t)
          ? cf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (oe = !1), (Ge = e));
      }
    } else {
      if (Ho(e)) throw Error(P(418));
      (e.flags = (e.flags & -4097) | 2), (oe = !1), (Ge = e);
    }
  }
}
function ns(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ge = e;
}
function Cl(e) {
  if (e !== Ge) return !1;
  if (!oe) return ns(e), (oe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Oo(e.type, e.memoizedProps))),
    t && (t = Ye))
  ) {
    if (Ho(e)) throw (ff(), Error(P(418)));
    for (; t; ) cf(e, t), (t = Gt(t.nextSibling));
  }
  if ((ns(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Ye = Gt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Ye = null;
    }
  } else Ye = Ge ? Gt(e.stateNode.nextSibling) : null;
  return !0;
}
function ff() {
  for (var e = Ye; e; ) e = Gt(e.nextSibling);
}
function qn() {
  (Ye = Ge = null), (oe = !1);
}
function za(e) {
  ft === null ? (ft = [e]) : ft.push(e);
}
var Ah = Tt.ReactCurrentBatchConfig;
function ut(e, t) {
  if (e && e.defaultProps) {
    (t = se({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ti = nn(null),
  ni = null,
  Un = null,
  Da = null;
function Aa() {
  Da = Un = ni = null;
}
function Fa(e) {
  var t = ti.current;
  le(ti), (e._currentValue = t);
}
function $o(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Gn(e, t) {
  (ni = e),
    (Da = Un = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Be = !0), (e.firstContext = null));
}
function lt(e) {
  var t = e._currentValue;
  if (Da !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Un === null)) {
      if (ni === null) throw Error(P(308));
      (Un = e), (ni.dependencies = { lanes: 0, firstContext: e });
    } else Un = Un.next = e;
  return t;
}
var cn = null;
function Oa(e) {
  cn === null ? (cn = [e]) : cn.push(e);
}
function df(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Oa(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    _t(e, r)
  );
}
function _t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Bt = !1;
function Ia(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function pf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Rt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Xt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), G & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      _t(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Oa(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    _t(e, n)
  );
}
function Al(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ka(e, n);
  }
}
function rs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ri(e, t, n, r) {
  var l = e.updateQueue;
  Bt = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), o === null ? (i = s) : (o.next = s), (o = u);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== o &&
        (a === null ? (f.firstBaseUpdate = s) : (a.next = s),
        (f.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var h = l.baseState;
    (o = 0), (f = s = u = null), (a = i);
    do {
      var p = a.lane,
        S = a.eventTime;
      if ((r & p) === p) {
        f !== null &&
          (f = f.next =
            {
              eventTime: S,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var E = e,
            x = a;
          switch (((p = t), (S = n), x.tag)) {
            case 1:
              if (((E = x.payload), typeof E == 'function')) {
                h = E.call(S, h, p);
                break e;
              }
              h = E;
              break e;
            case 3:
              E.flags = (E.flags & -65537) | 128;
            case 0:
              if (
                ((E = x.payload),
                (p = typeof E == 'function' ? E.call(S, h, p) : E),
                p == null)
              )
                break e;
              h = se({}, h, p);
              break e;
            case 2:
              Bt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [a]) : p.push(a));
      } else
        (S = {
          eventTime: S,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((s = f = S), (u = h)) : (f = f.next = S),
          (o |= p);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (p = a),
          (a = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (u = h),
      (l.baseState = u),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = f),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (xn |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function ls(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(P(191, l));
        l.call(r);
      }
    }
}
var hf = new fc.Component().refs;
function Wo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : se({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Si = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Cn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      l = Zt(e),
      i = Rt(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Xt(e, i, l)),
      t !== null && (pt(t, e, l, r), Al(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      l = Zt(e),
      i = Rt(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Xt(e, i, l)),
      t !== null && (pt(t, e, l, r), Al(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ae(),
      r = Zt(e),
      l = Rt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Xt(e, l, r)),
      t !== null && (pt(t, e, r, n), Al(t, e, r));
  },
};
function is(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Qr(n, r) || !Qr(l, i)
        : !0
  );
}
function mf(e, t, n) {
  var r = !1,
    l = en,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = lt(i))
      : ((l = Ve(t) ? yn : Me.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Zn(e, l) : en)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Si),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function os(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Si.enqueueReplaceState(t, t.state, null);
}
function Qo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = hf), Ia(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (l.context = lt(i))
    : ((i = Ve(t) ? yn : Me.current), (l.context = Zn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Wo(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Si.enqueueReplaceState(l, l.state, null),
      ri(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function vr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var l = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = l.refs;
            a === hf && (a = l.refs = {}),
              o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function Nl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      P(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function as(e) {
  var t = e._init;
  return t(e._payload);
}
function vf(e) {
  function t(d, c) {
    if (e) {
      var m = d.deletions;
      m === null ? ((d.deletions = [c]), (d.flags |= 16)) : m.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function l(d, c) {
    return (d = qt(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function i(d, c, m) {
    return (
      (d.index = m),
      e
        ? ((m = d.alternate),
          m !== null
            ? ((m = m.index), m < c ? ((d.flags |= 2), c) : m)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function o(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function a(d, c, m, C) {
    return c === null || c.tag !== 6
      ? ((c = ao(m, d.mode, C)), (c.return = d), c)
      : ((c = l(c, m)), (c.return = d), c);
  }
  function u(d, c, m, C) {
    var L = m.type;
    return L === Tn
      ? f(d, c, m.props.children, C, m.key)
      : c !== null &&
          (c.elementType === L ||
            (typeof L == 'object' &&
              L !== null &&
              L.$$typeof === Ut &&
              as(L) === c.type))
        ? ((C = l(c, m.props)), (C.ref = vr(d, c, m)), (C.return = d), C)
        : ((C = Hl(m.type, m.key, m.props, null, d.mode, C)),
          (C.ref = vr(d, c, m)),
          (C.return = d),
          C);
  }
  function s(d, c, m, C) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== m.containerInfo ||
      c.stateNode.implementation !== m.implementation
      ? ((c = uo(m, d.mode, C)), (c.return = d), c)
      : ((c = l(c, m.children || [])), (c.return = d), c);
  }
  function f(d, c, m, C, L) {
    return c === null || c.tag !== 7
      ? ((c = mn(m, d.mode, C, L)), (c.return = d), c)
      : ((c = l(c, m)), (c.return = d), c);
  }
  function h(d, c, m) {
    if ((typeof c == 'string' && c !== '') || typeof c == 'number')
      return (c = ao('' + c, d.mode, m)), (c.return = d), c;
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case hl:
          return (
            (m = Hl(c.type, c.key, c.props, null, d.mode, m)),
            (m.ref = vr(d, null, c)),
            (m.return = d),
            m
          );
        case Ln:
          return (c = uo(c, d.mode, m)), (c.return = d), c;
        case Ut:
          var C = c._init;
          return h(d, C(c._payload), m);
      }
      if (Nr(c) || fr(c))
        return (c = mn(c, d.mode, m, null)), (c.return = d), c;
      Nl(d, c);
    }
    return null;
  }
  function p(d, c, m, C) {
    var L = c !== null ? c.key : null;
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return L !== null ? null : a(d, c, '' + m, C);
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case hl:
          return m.key === L ? u(d, c, m, C) : null;
        case Ln:
          return m.key === L ? s(d, c, m, C) : null;
        case Ut:
          return (L = m._init), p(d, c, L(m._payload), C);
      }
      if (Nr(m) || fr(m)) return L !== null ? null : f(d, c, m, C, null);
      Nl(d, m);
    }
    return null;
  }
  function S(d, c, m, C, L) {
    if ((typeof C == 'string' && C !== '') || typeof C == 'number')
      return (d = d.get(m) || null), a(c, d, '' + C, L);
    if (typeof C == 'object' && C !== null) {
      switch (C.$$typeof) {
        case hl:
          return (d = d.get(C.key === null ? m : C.key) || null), u(c, d, C, L);
        case Ln:
          return (d = d.get(C.key === null ? m : C.key) || null), s(c, d, C, L);
        case Ut:
          var v = C._init;
          return S(d, c, m, v(C._payload), L);
      }
      if (Nr(C) || fr(C)) return (d = d.get(m) || null), f(c, d, C, L, null);
      Nl(c, C);
    }
    return null;
  }
  function E(d, c, m, C) {
    for (
      var L = null, v = null, R = c, T = (c = 0), F = null;
      R !== null && T < m.length;
      T++
    ) {
      R.index > T ? ((F = R), (R = null)) : (F = R.sibling);
      var I = p(d, R, m[T], C);
      if (I === null) {
        R === null && (R = F);
        break;
      }
      e && R && I.alternate === null && t(d, R),
        (c = i(I, c, T)),
        v === null ? (L = I) : (v.sibling = I),
        (v = I),
        (R = F);
    }
    if (T === m.length) return n(d, R), oe && an(d, T), L;
    if (R === null) {
      for (; T < m.length; T++)
        (R = h(d, m[T], C)),
          R !== null &&
            ((c = i(R, c, T)), v === null ? (L = R) : (v.sibling = R), (v = R));
      return oe && an(d, T), L;
    }
    for (R = r(d, R); T < m.length; T++)
      (F = S(R, d, T, m[T], C)),
        F !== null &&
          (e && F.alternate !== null && R.delete(F.key === null ? T : F.key),
          (c = i(F, c, T)),
          v === null ? (L = F) : (v.sibling = F),
          (v = F));
    return (
      e &&
        R.forEach(function (X) {
          return t(d, X);
        }),
      oe && an(d, T),
      L
    );
  }
  function x(d, c, m, C) {
    var L = fr(m);
    if (typeof L != 'function') throw Error(P(150));
    if (((m = L.call(m)), m == null)) throw Error(P(151));
    for (
      var v = (L = null), R = c, T = (c = 0), F = null, I = m.next();
      R !== null && !I.done;
      T++, I = m.next()
    ) {
      R.index > T ? ((F = R), (R = null)) : (F = R.sibling);
      var X = p(d, R, I.value, C);
      if (X === null) {
        R === null && (R = F);
        break;
      }
      e && R && X.alternate === null && t(d, R),
        (c = i(X, c, T)),
        v === null ? (L = X) : (v.sibling = X),
        (v = X),
        (R = F);
    }
    if (I.done) return n(d, R), oe && an(d, T), L;
    if (R === null) {
      for (; !I.done; T++, I = m.next())
        (I = h(d, I.value, C)),
          I !== null &&
            ((c = i(I, c, T)), v === null ? (L = I) : (v.sibling = I), (v = I));
      return oe && an(d, T), L;
    }
    for (R = r(d, R); !I.done; T++, I = m.next())
      (I = S(R, d, T, I.value, C)),
        I !== null &&
          (e && I.alternate !== null && R.delete(I.key === null ? T : I.key),
          (c = i(I, c, T)),
          v === null ? (L = I) : (v.sibling = I),
          (v = I));
    return (
      e &&
        R.forEach(function (ye) {
          return t(d, ye);
        }),
      oe && an(d, T),
      L
    );
  }
  function N(d, c, m, C) {
    if (
      (typeof m == 'object' &&
        m !== null &&
        m.type === Tn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case hl:
          e: {
            for (var L = m.key, v = c; v !== null; ) {
              if (v.key === L) {
                if (((L = m.type), L === Tn)) {
                  if (v.tag === 7) {
                    n(d, v.sibling),
                      (c = l(v, m.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  v.elementType === L ||
                  (typeof L == 'object' &&
                    L !== null &&
                    L.$$typeof === Ut &&
                    as(L) === v.type)
                ) {
                  n(d, v.sibling),
                    (c = l(v, m.props)),
                    (c.ref = vr(d, v, m)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, v);
                break;
              } else t(d, v);
              v = v.sibling;
            }
            m.type === Tn
              ? ((c = mn(m.props.children, d.mode, C, m.key)),
                (c.return = d),
                (d = c))
              : ((C = Hl(m.type, m.key, m.props, null, d.mode, C)),
                (C.ref = vr(d, c, m)),
                (C.return = d),
                (d = C));
          }
          return o(d);
        case Ln:
          e: {
            for (v = m.key; c !== null; ) {
              if (c.key === v)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === m.containerInfo &&
                  c.stateNode.implementation === m.implementation
                ) {
                  n(d, c.sibling),
                    (c = l(c, m.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = uo(m, d.mode, C)), (c.return = d), (d = c);
          }
          return o(d);
        case Ut:
          return (v = m._init), N(d, c, v(m._payload), C);
      }
      if (Nr(m)) return E(d, c, m, C);
      if (fr(m)) return x(d, c, m, C);
      Nl(d, m);
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = l(c, m)), (c.return = d), (d = c))
          : (n(d, c), (c = ao(m, d.mode, C)), (c.return = d), (d = c)),
        o(d))
      : n(d, c);
  }
  return N;
}
var bn = vf(!0),
  yf = vf(!1),
  ol = {},
  xt = nn(ol),
  Xr = nn(ol),
  Jr = nn(ol);
function fn(e) {
  if (e === ol) throw Error(P(174));
  return e;
}
function Ua(e, t) {
  switch ((te(Jr, t), te(Xr, e), te(xt, ol), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ko(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ko(t, e));
  }
  le(xt), te(xt, t);
}
function er() {
  le(xt), le(Xr), le(Jr);
}
function gf(e) {
  fn(Jr.current);
  var t = fn(xt.current),
    n = ko(t, e.type);
  t !== n && (te(Xr, e), te(xt, n));
}
function Ba(e) {
  Xr.current === e && (le(xt), le(Xr));
}
var ae = nn(0);
function li(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
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
var to = [];
function Ha() {
  for (var e = 0; e < to.length; e++)
    to[e]._workInProgressVersionPrimary = null;
  to.length = 0;
}
var Fl = Tt.ReactCurrentDispatcher,
  no = Tt.ReactCurrentBatchConfig,
  wn = 0,
  ue = null,
  ge = null,
  Ee = null,
  ii = !1,
  zr = !1,
  Zr = 0,
  Fh = 0;
function _e() {
  throw Error(P(321));
}
function Va(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ht(e[n], t[n])) return !1;
  return !0;
}
function $a(e, t, n, r, l, i) {
  if (
    ((wn = i),
    (ue = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Fl.current = e === null || e.memoizedState === null ? Bh : Hh),
    (e = n(r, l)),
    zr)
  ) {
    i = 0;
    do {
      if (((zr = !1), (Zr = 0), 25 <= i)) throw Error(P(301));
      (i += 1),
        (Ee = ge = null),
        (t.updateQueue = null),
        (Fl.current = Vh),
        (e = n(r, l));
    } while (zr);
  }
  if (
    ((Fl.current = oi),
    (t = ge !== null && ge.next !== null),
    (wn = 0),
    (Ee = ge = ue = null),
    (ii = !1),
    t)
  )
    throw Error(P(300));
  return e;
}
function Wa() {
  var e = Zr !== 0;
  return (Zr = 0), e;
}
function yt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ee === null ? (ue.memoizedState = Ee = e) : (Ee = Ee.next = e), Ee;
}
function it() {
  if (ge === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ge.next;
  var t = Ee === null ? ue.memoizedState : Ee.next;
  if (t !== null) (Ee = t), (ge = e);
  else {
    if (e === null) throw Error(P(310));
    (ge = e),
      (e = {
        memoizedState: ge.memoizedState,
        baseState: ge.baseState,
        baseQueue: ge.baseQueue,
        queue: ge.queue,
        next: null,
      }),
      Ee === null ? (ue.memoizedState = Ee = e) : (Ee = Ee.next = e);
  }
  return Ee;
}
function qr(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function ro(e) {
  var t = it(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = ge,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var a = (o = null),
      u = null,
      s = i;
    do {
      var f = s.lane;
      if ((wn & f) === f)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var h = {
          lane: f,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = h), (o = r)) : (u = u.next = h),
          (ue.lanes |= f),
          (xn |= f);
      }
      s = s.next;
    } while (s !== null && s !== i);
    u === null ? (o = r) : (u.next = a),
      ht(r, t.memoizedState) || (Be = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (ue.lanes |= i), (xn |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function lo(e) {
  var t = it(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    ht(i, t.memoizedState) || (Be = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function wf() {}
function xf(e, t) {
  var n = ue,
    r = it(),
    l = t(),
    i = !ht(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (Be = !0)),
    (r = r.queue),
    Qa(kf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Ee !== null && Ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      br(9, Ef.bind(null, n, r, l, t), void 0, null),
      ke === null)
    )
      throw Error(P(349));
    wn & 30 || Sf(n, t, l);
  }
  return l;
}
function Sf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ef(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Cf(t) && Nf(e);
}
function kf(e, t, n) {
  return n(function () {
    Cf(t) && Nf(e);
  });
}
function Cf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ht(e, n);
  } catch {
    return !0;
  }
}
function Nf(e) {
  var t = _t(e, 1);
  t !== null && pt(t, e, 1, -1);
}
function us(e) {
  var t = yt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Uh.bind(null, ue, e)),
    [t.memoizedState, e]
  );
}
function br(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Rf() {
  return it().memoizedState;
}
function Ol(e, t, n, r) {
  var l = yt();
  (ue.flags |= e),
    (l.memoizedState = br(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ei(e, t, n, r) {
  var l = it();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ge !== null) {
    var o = ge.memoizedState;
    if (((i = o.destroy), r !== null && Va(r, o.deps))) {
      l.memoizedState = br(t, n, i, r);
      return;
    }
  }
  (ue.flags |= e), (l.memoizedState = br(1 | t, n, i, r));
}
function ss(e, t) {
  return Ol(8390656, 8, e, t);
}
function Qa(e, t) {
  return Ei(2048, 8, e, t);
}
function jf(e, t) {
  return Ei(4, 2, e, t);
}
function Pf(e, t) {
  return Ei(4, 4, e, t);
}
function _f(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Lf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ei(4, 4, _f.bind(null, t, e), n)
  );
}
function Ka() {}
function Tf(e, t) {
  var n = it();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Va(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Mf(e, t) {
  var n = it();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Va(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function zf(e, t, n) {
  return wn & 21
    ? (ht(n, t) || ((n = Ac()), (ue.lanes |= n), (xn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Be = !0)), (e.memoizedState = n));
}
function Oh(e, t) {
  var n = q;
  (q = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = no.transition;
  no.transition = {};
  try {
    e(!1), t();
  } finally {
    (q = n), (no.transition = r);
  }
}
function Df() {
  return it().memoizedState;
}
function Ih(e, t, n) {
  var r = Zt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Af(e))
  )
    Ff(t, n);
  else if (((n = df(e, t, n, r)), n !== null)) {
    var l = Ae();
    pt(n, e, r, l), Of(n, t, r);
  }
}
function Uh(e, t, n) {
  var r = Zt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Af(e)) Ff(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), ht(a, o))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), Oa(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = df(e, t, l, r)),
      n !== null && ((l = Ae()), pt(n, e, r, l), Of(n, t, r));
  }
}
function Af(e) {
  var t = e.alternate;
  return e === ue || (t !== null && t === ue);
}
function Ff(e, t) {
  zr = ii = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Of(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ka(e, n);
  }
}
var oi = {
    readContext: lt,
    useCallback: _e,
    useContext: _e,
    useEffect: _e,
    useImperativeHandle: _e,
    useInsertionEffect: _e,
    useLayoutEffect: _e,
    useMemo: _e,
    useReducer: _e,
    useRef: _e,
    useState: _e,
    useDebugValue: _e,
    useDeferredValue: _e,
    useTransition: _e,
    useMutableSource: _e,
    useSyncExternalStore: _e,
    useId: _e,
    unstable_isNewReconciler: !1,
  },
  Bh = {
    readContext: lt,
    useCallback: function (e, t) {
      return (yt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: lt,
    useEffect: ss,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ol(4194308, 4, _f.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ol(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ol(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = yt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = yt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Ih.bind(null, ue, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = yt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: us,
    useDebugValue: Ka,
    useDeferredValue: function (e) {
      return (yt().memoizedState = e);
    },
    useTransition: function () {
      var e = us(!1),
        t = e[0];
      return (e = Oh.bind(null, e[1])), (yt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ue,
        l = yt();
      if (oe) {
        if (n === void 0) throw Error(P(407));
        n = n();
      } else {
        if (((n = t()), ke === null)) throw Error(P(349));
        wn & 30 || Sf(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        ss(kf.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        br(9, Ef.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = yt(),
        t = ke.identifierPrefix;
      if (oe) {
        var n = Nt,
          r = Ct;
        (n = (r & ~(1 << (32 - dt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Zr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Fh++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Hh = {
    readContext: lt,
    useCallback: Tf,
    useContext: lt,
    useEffect: Qa,
    useImperativeHandle: Lf,
    useInsertionEffect: jf,
    useLayoutEffect: Pf,
    useMemo: Mf,
    useReducer: ro,
    useRef: Rf,
    useState: function () {
      return ro(qr);
    },
    useDebugValue: Ka,
    useDeferredValue: function (e) {
      var t = it();
      return zf(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = ro(qr)[0],
        t = it().memoizedState;
      return [e, t];
    },
    useMutableSource: wf,
    useSyncExternalStore: xf,
    useId: Df,
    unstable_isNewReconciler: !1,
  },
  Vh = {
    readContext: lt,
    useCallback: Tf,
    useContext: lt,
    useEffect: Qa,
    useImperativeHandle: Lf,
    useInsertionEffect: jf,
    useLayoutEffect: Pf,
    useMemo: Mf,
    useReducer: lo,
    useRef: Rf,
    useState: function () {
      return lo(qr);
    },
    useDebugValue: Ka,
    useDeferredValue: function (e) {
      var t = it();
      return ge === null ? (t.memoizedState = e) : zf(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = lo(qr)[0],
        t = it().memoizedState;
      return [e, t];
    },
    useMutableSource: wf,
    useSyncExternalStore: xf,
    useId: Df,
    unstable_isNewReconciler: !1,
  };
function tr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += vp(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function io(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ko(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var $h = typeof WeakMap == 'function' ? WeakMap : Map;
function If(e, t, n) {
  (n = Rt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ui || ((ui = !0), (na = r)), Ko(e, t);
    }),
    n
  );
}
function Uf(e, t, n) {
  (n = Rt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ko(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Ko(e, t),
          typeof r != 'function' &&
            (Jt === null ? (Jt = new Set([this])) : Jt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : '',
        });
      }),
    n
  );
}
function cs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new $h();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = rm.bind(null, e, t, n)), t.then(e, e));
}
function fs(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ds(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Rt(-1, 1)), (t.tag = 2), Xt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Wh = Tt.ReactCurrentOwner,
  Be = !1;
function De(e, t, n, r) {
  t.child = e === null ? yf(t, null, n, r) : bn(t, e.child, n, r);
}
function ps(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    Gn(t, l),
    (r = $a(e, t, n, r, i, l)),
    (n = Wa()),
    e !== null && !Be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Lt(e, t, l))
      : (oe && n && Ta(t), (t.flags |= 1), De(e, t, r, l), t.child)
  );
}
function hs(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !eu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Bf(e, t, i, r, l))
      : ((e = Hl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Qr), n(o, r) && e.ref === t.ref)
    )
      return Lt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = qt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Bf(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Qr(i, r) && e.ref === t.ref)
      if (((Be = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (Be = !0);
      else return (t.lanes = e.lanes), Lt(e, t, l);
  }
  return Yo(e, t, n, r, l);
}
function Hf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        te(Hn, Ke),
        (Ke |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          te(Hn, Ke),
          (Ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        te(Hn, Ke),
        (Ke |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      te(Hn, Ke),
      (Ke |= r);
  return De(e, t, l, n), t.child;
}
function Vf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Yo(e, t, n, r, l) {
  var i = Ve(n) ? yn : Me.current;
  return (
    (i = Zn(t, i)),
    Gn(t, l),
    (n = $a(e, t, n, r, i, l)),
    (r = Wa()),
    e !== null && !Be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Lt(e, t, l))
      : (oe && r && Ta(t), (t.flags |= 1), De(e, t, n, l), t.child)
  );
}
function ms(e, t, n, r, l) {
  if (Ve(n)) {
    var i = !0;
    ql(t);
  } else i = !1;
  if ((Gn(t, l), t.stateNode === null))
    Il(e, t), mf(t, n, r), Qo(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var u = o.context,
      s = n.contextType;
    typeof s == 'object' && s !== null
      ? (s = lt(s))
      : ((s = Ve(n) ? yn : Me.current), (s = Zn(t, s)));
    var f = n.getDerivedStateFromProps,
      h =
        typeof f == 'function' ||
        typeof o.getSnapshotBeforeUpdate == 'function';
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== r || u !== s) && os(t, o, r, s)),
      (Bt = !1);
    var p = t.memoizedState;
    (o.state = p),
      ri(t, r, o, l),
      (u = t.memoizedState),
      a !== r || p !== u || He.current || Bt
        ? (typeof f == 'function' && (Wo(t, n, f, r), (u = t.memoizedState)),
          (a = Bt || is(t, n, a, r, p, u, s))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = s),
          (r = a))
        : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      pf(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : ut(t.type, a)),
      (o.props = s),
      (h = t.pendingProps),
      (p = o.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null
        ? (u = lt(u))
        : ((u = Ve(n) ? yn : Me.current), (u = Zn(t, u)));
    var S = n.getDerivedStateFromProps;
    (f =
      typeof S == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((a !== h || p !== u) && os(t, o, r, u)),
      (Bt = !1),
      (p = t.memoizedState),
      (o.state = p),
      ri(t, r, o, l);
    var E = t.memoizedState;
    a !== h || p !== E || He.current || Bt
      ? (typeof S == 'function' && (Wo(t, n, S, r), (E = t.memoizedState)),
        (s = Bt || is(t, n, s, r, p, E, u) || !1)
          ? (f ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' &&
                o.componentWillUpdate(r, E, u),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, E, u)),
            typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = E)),
        (o.props = r),
        (o.state = E),
        (o.context = u),
        (r = s))
      : (typeof o.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Go(e, t, n, r, i, l);
}
function Go(e, t, n, r, l, i) {
  Vf(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && es(t, n, !1), Lt(e, t, i);
  (r = t.stateNode), (Wh.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = bn(t, e.child, null, i)), (t.child = bn(t, null, a, i)))
      : De(e, t, a, i),
    (t.memoizedState = r.state),
    l && es(t, n, !0),
    t.child
  );
}
function $f(e) {
  var t = e.stateNode;
  t.pendingContext
    ? bu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && bu(e, t.context, !1),
    Ua(e, t.containerInfo);
}
function vs(e, t, n, r, l) {
  return qn(), za(l), (t.flags |= 256), De(e, t, n, r), t.child;
}
var Xo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Jo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Wf(e, t, n) {
  var r = t.pendingProps,
    l = ae.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    te(ae, l & 1),
    e === null)
  )
    return (
      Vo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Ni(o, r, 0, null)),
              (e = mn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Jo(n)),
              (t.memoizedState = Xo),
              e)
            : Ya(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return Qh(e, t, o, r, a, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: 'hidden', children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = qt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (i = qt(a, i)) : ((i = mn(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Jo(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Xo),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = qt(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ya(e, t) {
  return (
    (t = Ni({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Rl(e, t, n, r) {
  return (
    r !== null && za(r),
    bn(t, e.child, null, n),
    (e = Ya(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Qh(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = io(Error(P(422)))), Rl(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = Ni({ mode: 'visible', children: r.children }, l, 0, null)),
          (i = mn(i, l, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && bn(t, e.child, null, o),
          (t.child.memoizedState = Jo(o)),
          (t.memoizedState = Xo),
          i);
  if (!(t.mode & 1)) return Rl(e, t, o, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(P(419))), (r = io(i, r, void 0)), Rl(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), Be || a)) {
    if (((r = ke), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), _t(e, l), pt(r, e, l, -1));
    }
    return ba(), (r = io(Error(P(421)))), Rl(e, t, o, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = lm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ye = Gt(l.nextSibling)),
      (Ge = t),
      (oe = !0),
      (ft = null),
      e !== null &&
        ((et[tt++] = Ct),
        (et[tt++] = Nt),
        (et[tt++] = gn),
        (Ct = e.id),
        (Nt = e.overflow),
        (gn = t)),
      (t = Ya(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ys(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), $o(e.return, t, n);
}
function oo(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Qf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((De(e, t, r.children, n), (r = ae.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ys(e, n, t);
        else if (e.tag === 19) ys(e, n, t);
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
    r &= 1;
  }
  if ((te(ae, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && li(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          oo(t, !1, l, n, i);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && li(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        oo(t, !0, n, null, i);
        break;
      case 'together':
        oo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Il(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Lt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (xn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (
      e = t.child, n = qt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = qt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Kh(e, t, n) {
  switch (t.tag) {
    case 3:
      $f(t), qn();
      break;
    case 5:
      gf(t);
      break;
    case 1:
      Ve(t.type) && ql(t);
      break;
    case 4:
      Ua(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      te(ti, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (te(ae, ae.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Wf(e, t, n)
            : (te(ae, ae.current & 1),
              (e = Lt(e, t, n)),
              e !== null ? e.sibling : null);
      te(ae, ae.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Qf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        te(ae, ae.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Hf(e, t, n);
  }
  return Lt(e, t, n);
}
var Kf, Zo, Yf, Gf;
Kf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Zo = function () {};
Yf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), fn(xt.current);
    var i = null;
    switch (n) {
      case 'input':
        (l = wo(e, l)), (r = wo(e, r)), (i = []);
        break;
      case 'select':
        (l = se({}, l, { value: void 0 })),
          (r = se({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (l = Eo(e, l)), (r = Eo(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Jl);
    }
    Co(n, r);
    var o;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === 'style') {
          var a = l[s];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
        } else
          s !== 'dangerouslySetInnerHTML' &&
            s !== 'children' &&
            s !== 'suppressContentEditableWarning' &&
            s !== 'suppressHydrationWarning' &&
            s !== 'autoFocus' &&
            (Ir.hasOwnProperty(s)
              ? i || (i = [])
              : (i = i || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((a = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === 'style')
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ''));
            for (o in u)
              u.hasOwnProperty(o) &&
                a[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (i || (i = []), i.push(s, n)), (n = u);
        else
          s === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (i = i || []).push(s, u))
            : s === 'children'
              ? (typeof u != 'string' && typeof u != 'number') ||
                (i = i || []).push(s, '' + u)
              : s !== 'suppressContentEditableWarning' &&
                s !== 'suppressHydrationWarning' &&
                (Ir.hasOwnProperty(s)
                  ? (u != null && s === 'onScroll' && re('scroll', e),
                    i || a === u || (i = []))
                  : (i = i || []).push(s, u));
    }
    n && (i = i || []).push('style', n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Gf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yr(e, t) {
  if (!oe)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Yh(e, t, n) {
  var r = t.pendingProps;
  switch ((Ma(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Le(t), null;
    case 1:
      return Ve(t.type) && Zl(), Le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        er(),
        le(He),
        le(Me),
        Ha(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Cl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ft !== null && (ia(ft), (ft = null)))),
        Zo(e, t),
        Le(t),
        null
      );
    case 5:
      Ba(t);
      var l = fn(Jr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Yf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return Le(t), null;
        }
        if (((e = fn(xt.current)), Cl(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[gt] = t), (r[Gr] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              re('cancel', r), re('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              re('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < jr.length; l++) re(jr[l], r);
              break;
            case 'source':
              re('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              re('error', r), re('load', r);
              break;
            case 'details':
              re('toggle', r);
              break;
            case 'input':
              Ru(r, i), re('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                re('invalid', r);
              break;
            case 'textarea':
              Pu(r, i), re('invalid', r);
          }
          Co(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      kl(r.textContent, a, e),
                    (l = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      kl(r.textContent, a, e),
                    (l = ['children', '' + a]))
                : Ir.hasOwnProperty(o) &&
                  a != null &&
                  o === 'onScroll' &&
                  re('scroll', r);
            }
          switch (n) {
            case 'input':
              ml(r), ju(r, i, !0);
              break;
            case 'textarea':
              ml(r), _u(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = Jl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = xc(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = o.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === 'select' &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[gt] = t),
            (e[Gr] = r),
            Kf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = No(n, r)), n)) {
              case 'dialog':
                re('cancel', e), re('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                re('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < jr.length; l++) re(jr[l], e);
                l = r;
                break;
              case 'source':
                re('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                re('error', e), re('load', e), (l = r);
                break;
              case 'details':
                re('toggle', e), (l = r);
                break;
              case 'input':
                Ru(e, r), (l = wo(e, r)), re('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = se({}, r, { value: void 0 })),
                  re('invalid', e);
                break;
              case 'textarea':
                Pu(e, r), (l = Eo(e, r)), re('invalid', e);
                break;
              default:
                l = r;
            }
            Co(n, l), (a = l);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var u = a[i];
                i === 'style'
                  ? kc(e, u)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((u = u ? u.__html : void 0), u != null && Sc(e, u))
                    : i === 'children'
                      ? typeof u == 'string'
                        ? (n !== 'textarea' || u !== '') && Ur(e, u)
                        : typeof u == 'number' && Ur(e, '' + u)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (Ir.hasOwnProperty(i)
                          ? u != null && i === 'onScroll' && re('scroll', e)
                          : u != null && ya(e, i, u, o));
              }
            switch (n) {
              case 'input':
                ml(e), ju(e, r, !1);
                break;
              case 'textarea':
                ml(e), _u(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + bt(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Wn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Wn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = Jl);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Le(t), null;
    case 6:
      if (e && t.stateNode != null) Gf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(P(166));
        if (((n = fn(Jr.current)), fn(xt.current), Cl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[gt] = t),
            (i = r.nodeValue !== n) && ((e = Ge), e !== null))
          )
            switch (e.tag) {
              case 3:
                kl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  kl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[gt] = t),
            (t.stateNode = r);
      }
      return Le(t), null;
    case 13:
      if (
        (le(ae),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (oe && Ye !== null && t.mode & 1 && !(t.flags & 128))
          ff(), qn(), (t.flags |= 98560), (i = !1);
        else if (((i = Cl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(P(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(P(317));
            i[gt] = t;
          } else
            qn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Le(t), (i = !1);
        } else ft !== null && (ia(ft), (ft = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ae.current & 1 ? we === 0 && (we = 3) : ba())),
          t.updateQueue !== null && (t.flags |= 4),
          Le(t),
          null);
    case 4:
      return (
        er(), Zo(e, t), e === null && Kr(t.stateNode.containerInfo), Le(t), null
      );
    case 10:
      return Fa(t.type._context), Le(t), null;
    case 17:
      return Ve(t.type) && Zl(), Le(t), null;
    case 19:
      if ((le(ae), (i = t.memoizedState), i === null)) return Le(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) yr(i, !1);
        else {
          if (we !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = li(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    yr(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return te(ae, (ae.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            he() > nr &&
            ((t.flags |= 128), (r = !0), yr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = li(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yr(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !o.alternate && !oe)
            )
              return Le(t), null;
          } else
            2 * he() - i.renderingStartTime > nr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), yr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = he()),
          (t.sibling = null),
          (n = ae.current),
          te(ae, r ? (n & 1) | 2 : n & 1),
          t)
        : (Le(t), null);
    case 22:
    case 23:
      return (
        qa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ke & 1073741824 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function Gh(e, t) {
  switch ((Ma(t), t.tag)) {
    case 1:
      return (
        Ve(t.type) && Zl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        er(),
        le(He),
        le(Me),
        Ha(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ba(t), null;
    case 13:
      if (
        (le(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(P(340));
        qn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return le(ae), null;
    case 4:
      return er(), null;
    case 10:
      return Fa(t.type._context), null;
    case 22:
    case 23:
      return qa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var jl = !1,
  Te = !1,
  Xh = typeof WeakSet == 'function' ? WeakSet : Set,
  z = null;
function Bn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        fe(e, t, r);
      }
    else n.current = null;
}
function qo(e, t, n) {
  try {
    n();
  } catch (r) {
    fe(e, t, r);
  }
}
var gs = !1;
function Jh(e, t) {
  if (((Ao = Yl), (e = Zc()), La(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            u = -1,
            s = 0,
            f = 0,
            h = e,
            p = null;
          t: for (;;) {
            for (
              var S;
              h !== n || (l !== 0 && h.nodeType !== 3) || (a = o + l),
                h !== i || (r !== 0 && h.nodeType !== 3) || (u = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (S = h.firstChild) !== null;

            )
              (p = h), (h = S);
            for (;;) {
              if (h === e) break t;
              if (
                (p === n && ++s === l && (a = o),
                p === i && ++f === r && (u = o),
                (S = h.nextSibling) !== null)
              )
                break;
              (h = p), (p = h.parentNode);
            }
            h = S;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Fo = { focusedElem: e, selectionRange: n }, Yl = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var E = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (E !== null) {
                  var x = E.memoizedProps,
                    N = E.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : ut(t.type, x),
                      N
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = '')
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(P(163));
            }
        } catch (C) {
          fe(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (E = gs), (gs = !1), E;
}
function Dr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && qo(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function ki(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function bo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Xf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Xf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[gt], delete t[Gr], delete t[Uo], delete t[Mh], delete t[zh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Jf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ws(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Jf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ea(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Jl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ea(e, t, n), e = e.sibling; e !== null; ) ea(e, t, n), (e = e.sibling);
}
function ta(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ta(e, t, n), e = e.sibling; e !== null; ) ta(e, t, n), (e = e.sibling);
}
var Re = null,
  st = !1;
function Ot(e, t, n) {
  for (n = n.child; n !== null; ) Zf(e, t, n), (n = n.sibling);
}
function Zf(e, t, n) {
  if (wt && typeof wt.onCommitFiberUnmount == 'function')
    try {
      wt.onCommitFiberUnmount(mi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Te || Bn(n, t);
    case 6:
      var r = Re,
        l = st;
      (Re = null),
        Ot(e, t, n),
        (Re = r),
        (st = l),
        Re !== null &&
          (st
            ? ((e = Re),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Re.removeChild(n.stateNode));
      break;
    case 18:
      Re !== null &&
        (st
          ? ((e = Re),
            (n = n.stateNode),
            e.nodeType === 8
              ? bi(e.parentNode, n)
              : e.nodeType === 1 && bi(e, n),
            $r(e))
          : bi(Re, n.stateNode));
      break;
    case 4:
      (r = Re),
        (l = st),
        (Re = n.stateNode.containerInfo),
        (st = !0),
        Ot(e, t, n),
        (Re = r),
        (st = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Te &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && qo(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Ot(e, t, n);
      break;
    case 1:
      if (
        !Te &&
        (Bn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          fe(n, t, a);
        }
      Ot(e, t, n);
      break;
    case 21:
      Ot(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Te = (r = Te) || n.memoizedState !== null), Ot(e, t, n), (Te = r))
        : Ot(e, t, n);
      break;
    default:
      Ot(e, t, n);
  }
}
function xs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Xh()),
      t.forEach(function (r) {
        var l = im.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function at(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Re = a.stateNode), (st = !1);
              break e;
            case 3:
              (Re = a.stateNode.containerInfo), (st = !0);
              break e;
            case 4:
              (Re = a.stateNode.containerInfo), (st = !0);
              break e;
          }
          a = a.return;
        }
        if (Re === null) throw Error(P(160));
        Zf(i, o, l), (Re = null), (st = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (s) {
        fe(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) qf(t, e), (t = t.sibling);
}
function qf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((at(t, e), vt(e), r & 4)) {
        try {
          Dr(3, e, e.return), ki(3, e);
        } catch (x) {
          fe(e, e.return, x);
        }
        try {
          Dr(5, e, e.return);
        } catch (x) {
          fe(e, e.return, x);
        }
      }
      break;
    case 1:
      at(t, e), vt(e), r & 512 && n !== null && Bn(n, n.return);
      break;
    case 5:
      if (
        (at(t, e),
        vt(e),
        r & 512 && n !== null && Bn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Ur(l, '');
        } catch (x) {
          fe(e, e.return, x);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === 'input' && i.type === 'radio' && i.name != null && gc(l, i),
              No(a, o);
            var s = No(a, i);
            for (o = 0; o < u.length; o += 2) {
              var f = u[o],
                h = u[o + 1];
              f === 'style'
                ? kc(l, h)
                : f === 'dangerouslySetInnerHTML'
                  ? Sc(l, h)
                  : f === 'children'
                    ? Ur(l, h)
                    : ya(l, f, h, s);
            }
            switch (a) {
              case 'input':
                xo(l, i);
                break;
              case 'textarea':
                wc(l, i);
                break;
              case 'select':
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var S = i.value;
                S != null
                  ? Wn(l, !!i.multiple, S, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Wn(l, !!i.multiple, i.defaultValue, !0)
                      : Wn(l, !!i.multiple, i.multiple ? [] : '', !1));
            }
            l[Gr] = i;
          } catch (x) {
            fe(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((at(t, e), vt(e), r & 4)) {
        if (e.stateNode === null) throw Error(P(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (x) {
          fe(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (at(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          $r(t.containerInfo);
        } catch (x) {
          fe(e, e.return, x);
        }
      break;
    case 4:
      at(t, e), vt(e);
      break;
    case 13:
      at(t, e),
        vt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ja = he())),
        r & 4 && xs(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Te = (s = Te) || f), at(t, e), (Te = s)) : at(t, e),
        vt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !f && e.mode & 1)
        )
          for (z = e, f = e.child; f !== null; ) {
            for (h = z = f; z !== null; ) {
              switch (((p = z), (S = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Dr(4, p, p.return);
                  break;
                case 1:
                  Bn(p, p.return);
                  var E = p.stateNode;
                  if (typeof E.componentWillUnmount == 'function') {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (E.props = t.memoizedProps),
                        (E.state = t.memoizedState),
                        E.componentWillUnmount();
                    } catch (x) {
                      fe(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Bn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Es(h);
                    continue;
                  }
              }
              S !== null ? ((S.return = p), (z = S)) : Es(h);
            }
            f = f.sibling;
          }
        e: for (f = null, h = e; ; ) {
          if (h.tag === 5) {
            if (f === null) {
              f = h;
              try {
                (l = h.stateNode),
                  s
                    ? ((i = l.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((a = h.stateNode),
                      (u = h.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty('display')
                          ? u.display
                          : null),
                      (a.style.display = Ec('display', o)));
              } catch (x) {
                fe(e, e.return, x);
              }
            }
          } else if (h.tag === 6) {
            if (f === null)
              try {
                h.stateNode.nodeValue = s ? '' : h.memoizedProps;
              } catch (x) {
                fe(e, e.return, x);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            f === h && (f = null), (h = h.return);
          }
          f === h && (f = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      at(t, e), vt(e), r & 4 && xs(e);
      break;
    case 21:
      break;
    default:
      at(t, e), vt(e);
  }
}
function vt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Jf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Ur(l, ''), (r.flags &= -33));
          var i = ws(e);
          ta(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = ws(e);
          ea(e, a, o);
          break;
        default:
          throw Error(P(161));
      }
    } catch (u) {
      fe(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Zh(e, t, n) {
  (z = e), bf(e);
}
function bf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var l = z,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || jl;
      if (!o) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || Te;
        a = jl;
        var s = Te;
        if (((jl = o), (Te = u) && !s))
          for (z = l; z !== null; )
            (o = z),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? ks(l)
                : u !== null
                  ? ((u.return = o), (z = u))
                  : ks(l);
        for (; i !== null; ) (z = i), bf(i), (i = i.sibling);
        (z = l), (jl = a), (Te = s);
      }
      Ss(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (z = i)) : Ss(e);
  }
}
function Ss(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Te || ki(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Te)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ut(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && ls(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ls(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    u.autoFocus && n.focus();
                    break;
                  case 'img':
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var f = s.memoizedState;
                  if (f !== null) {
                    var h = f.dehydrated;
                    h !== null && $r(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(P(163));
          }
        Te || (t.flags & 512 && bo(t));
      } catch (p) {
        fe(t, t.return, p);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Es(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function ks(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ki(4, t);
          } catch (u) {
            fe(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              fe(t, l, u);
            }
          }
          var i = t.return;
          try {
            bo(t);
          } catch (u) {
            fe(t, i, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            bo(t);
          } catch (u) {
            fe(t, o, u);
          }
      }
    } catch (u) {
      fe(t, t.return, u);
    }
    if (t === e) {
      z = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (z = a);
      break;
    }
    z = t.return;
  }
}
var qh = Math.ceil,
  ai = Tt.ReactCurrentDispatcher,
  Ga = Tt.ReactCurrentOwner,
  rt = Tt.ReactCurrentBatchConfig,
  G = 0,
  ke = null,
  ve = null,
  je = 0,
  Ke = 0,
  Hn = nn(0),
  we = 0,
  el = null,
  xn = 0,
  Ci = 0,
  Xa = 0,
  Ar = null,
  Ue = null,
  Ja = 0,
  nr = 1 / 0,
  Et = null,
  ui = !1,
  na = null,
  Jt = null,
  Pl = !1,
  Wt = null,
  si = 0,
  Fr = 0,
  ra = null,
  Ul = -1,
  Bl = 0;
function Ae() {
  return G & 6 ? he() : Ul !== -1 ? Ul : (Ul = he());
}
function Zt(e) {
  return e.mode & 1
    ? G & 2 && je !== 0
      ? je & -je
      : Ah.transition !== null
        ? (Bl === 0 && (Bl = Ac()), Bl)
        : ((e = q),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Vc(e.type))),
          e)
    : 1;
}
function pt(e, t, n, r) {
  if (50 < Fr) throw ((Fr = 0), (ra = null), Error(P(185)));
  rl(e, n, r),
    (!(G & 2) || e !== ke) &&
      (e === ke && (!(G & 2) && (Ci |= n), we === 4 && Vt(e, je)),
      $e(e, r),
      n === 1 && G === 0 && !(t.mode & 1) && ((nr = he() + 500), xi && rn()));
}
function $e(e, t) {
  var n = e.callbackNode;
  Ap(e, t);
  var r = Kl(e, e === ke ? je : 0);
  if (r === 0)
    n !== null && Mu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Mu(n), t === 1))
      e.tag === 0 ? Dh(Cs.bind(null, e)) : uf(Cs.bind(null, e)),
        Lh(function () {
          !(G & 6) && rn();
        }),
        (n = null);
    else {
      switch (Fc(r)) {
        case 1:
          n = Ea;
          break;
        case 4:
          n = zc;
          break;
        case 16:
          n = Ql;
          break;
        case 536870912:
          n = Dc;
          break;
        default:
          n = Ql;
      }
      n = ad(n, ed.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ed(e, t) {
  if (((Ul = -1), (Bl = 0), G & 6)) throw Error(P(327));
  var n = e.callbackNode;
  if (Xn() && e.callbackNode !== n) return null;
  var r = Kl(e, e === ke ? je : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ci(e, r);
  else {
    t = r;
    var l = G;
    G |= 2;
    var i = nd();
    (ke !== e || je !== t) && ((Et = null), (nr = he() + 500), hn(e, t));
    do
      try {
        tm();
        break;
      } catch (a) {
        td(e, a);
      }
    while (!0);
    Aa(),
      (ai.current = i),
      (G = l),
      ve !== null ? (t = 0) : ((ke = null), (je = 0), (t = we));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Lo(e)), l !== 0 && ((r = l), (t = la(e, l)))), t === 1)
    )
      throw ((n = el), hn(e, 0), Vt(e, r), $e(e, he()), n);
    if (t === 6) Vt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !bh(l) &&
          ((t = ci(e, r)),
          t === 2 && ((i = Lo(e)), i !== 0 && ((r = i), (t = la(e, i)))),
          t === 1))
      )
        throw ((n = el), hn(e, 0), Vt(e, r), $e(e, he()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          un(e, Ue, Et);
          break;
        case 3:
          if (
            (Vt(e, r), (r & 130023424) === r && ((t = Ja + 500 - he()), 10 < t))
          ) {
            if (Kl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Ae(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Io(un.bind(null, e, Ue, Et), t);
            break;
          }
          un(e, Ue, Et);
          break;
        case 4:
          if ((Vt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - dt(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = he() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * qh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Io(un.bind(null, e, Ue, Et), r);
            break;
          }
          un(e, Ue, Et);
          break;
        case 5:
          un(e, Ue, Et);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return $e(e, he()), e.callbackNode === n ? ed.bind(null, e) : null;
}
function la(e, t) {
  var n = Ar;
  return (
    e.current.memoizedState.isDehydrated && (hn(e, t).flags |= 256),
    (e = ci(e, t)),
    e !== 2 && ((t = Ue), (Ue = n), t !== null && ia(t)),
    e
  );
}
function ia(e) {
  Ue === null ? (Ue = e) : Ue.push.apply(Ue, e);
}
function bh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!ht(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
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
function Vt(e, t) {
  for (
    t &= ~Xa,
      t &= ~Ci,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - dt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Cs(e) {
  if (G & 6) throw Error(P(327));
  Xn();
  var t = Kl(e, 0);
  if (!(t & 1)) return $e(e, he()), null;
  var n = ci(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Lo(e);
    r !== 0 && ((t = r), (n = la(e, r)));
  }
  if (n === 1) throw ((n = el), hn(e, 0), Vt(e, t), $e(e, he()), n);
  if (n === 6) throw Error(P(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    un(e, Ue, Et),
    $e(e, he()),
    null
  );
}
function Za(e, t) {
  var n = G;
  G |= 1;
  try {
    return e(t);
  } finally {
    (G = n), G === 0 && ((nr = he() + 500), xi && rn());
  }
}
function Sn(e) {
  Wt !== null && Wt.tag === 0 && !(G & 6) && Xn();
  var t = G;
  G |= 1;
  var n = rt.transition,
    r = q;
  try {
    if (((rt.transition = null), (q = 1), e)) return e();
  } finally {
    (q = r), (rt.transition = n), (G = t), !(G & 6) && rn();
  }
}
function qa() {
  (Ke = Hn.current), le(Hn);
}
function hn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), _h(n)), ve !== null))
    for (n = ve.return; n !== null; ) {
      var r = n;
      switch ((Ma(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Zl();
          break;
        case 3:
          er(), le(He), le(Me), Ha();
          break;
        case 5:
          Ba(r);
          break;
        case 4:
          er();
          break;
        case 13:
          le(ae);
          break;
        case 19:
          le(ae);
          break;
        case 10:
          Fa(r.type._context);
          break;
        case 22:
        case 23:
          qa();
      }
      n = n.return;
    }
  if (
    ((ke = e),
    (ve = e = qt(e.current, null)),
    (je = Ke = t),
    (we = 0),
    (el = null),
    (Xa = Ci = xn = 0),
    (Ue = Ar = null),
    cn !== null)
  ) {
    for (t = 0; t < cn.length; t++)
      if (((n = cn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    cn = null;
  }
  return e;
}
function td(e, t) {
  do {
    var n = ve;
    try {
      if ((Aa(), (Fl.current = oi), ii)) {
        for (var r = ue.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        ii = !1;
      }
      if (
        ((wn = 0),
        (Ee = ge = ue = null),
        (zr = !1),
        (Zr = 0),
        (Ga.current = null),
        n === null || n.return === null)
      ) {
        (we = 1), (el = t), (ve = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          u = t;
        if (
          ((t = je),
          (a.flags |= 32768),
          u !== null && typeof u == 'object' && typeof u.then == 'function')
        ) {
          var s = u,
            f = a,
            h = f.tag;
          if (!(f.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = f.alternate;
            p
              ? ((f.updateQueue = p.updateQueue),
                (f.memoizedState = p.memoizedState),
                (f.lanes = p.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var S = fs(o);
          if (S !== null) {
            (S.flags &= -257),
              ds(S, o, a, i, t),
              S.mode & 1 && cs(i, s, t),
              (t = S),
              (u = s);
            var E = t.updateQueue;
            if (E === null) {
              var x = new Set();
              x.add(u), (t.updateQueue = x);
            } else E.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              cs(i, s, t), ba();
              break e;
            }
            u = Error(P(426));
          }
        } else if (oe && a.mode & 1) {
          var N = fs(o);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256),
              ds(N, o, a, i, t),
              za(tr(u, a));
            break e;
          }
        }
        (i = u = tr(u, a)),
          we !== 4 && (we = 2),
          Ar === null ? (Ar = [i]) : Ar.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var d = If(i, u, t);
              rs(i, d);
              break e;
            case 1:
              a = u;
              var c = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == 'function' ||
                  (m !== null &&
                    typeof m.componentDidCatch == 'function' &&
                    (Jt === null || !Jt.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var C = Uf(i, a, t);
                rs(i, C);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ld(n);
    } catch (L) {
      (t = L), ve === n && n !== null && (ve = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function nd() {
  var e = ai.current;
  return (ai.current = oi), e === null ? oi : e;
}
function ba() {
  (we === 0 || we === 3 || we === 2) && (we = 4),
    ke === null || (!(xn & 268435455) && !(Ci & 268435455)) || Vt(ke, je);
}
function ci(e, t) {
  var n = G;
  G |= 2;
  var r = nd();
  (ke !== e || je !== t) && ((Et = null), hn(e, t));
  do
    try {
      em();
      break;
    } catch (l) {
      td(e, l);
    }
  while (!0);
  if ((Aa(), (G = n), (ai.current = r), ve !== null)) throw Error(P(261));
  return (ke = null), (je = 0), we;
}
function em() {
  for (; ve !== null; ) rd(ve);
}
function tm() {
  for (; ve !== null && !Rp(); ) rd(ve);
}
function rd(e) {
  var t = od(e.alternate, e, Ke);
  (e.memoizedProps = e.pendingProps),
    t === null ? ld(e) : (ve = t),
    (Ga.current = null);
}
function ld(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Gh(n, t)), n !== null)) {
        (n.flags &= 32767), (ve = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (we = 6), (ve = null);
        return;
      }
    } else if (((n = Yh(n, t, Ke)), n !== null)) {
      ve = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ve = t;
      return;
    }
    ve = t = e;
  } while (t !== null);
  we === 0 && (we = 5);
}
function un(e, t, n) {
  var r = q,
    l = rt.transition;
  try {
    (rt.transition = null), (q = 1), nm(e, t, n, r);
  } finally {
    (rt.transition = l), (q = r);
  }
  return null;
}
function nm(e, t, n, r) {
  do Xn();
  while (Wt !== null);
  if (G & 6) throw Error(P(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(P(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Fp(e, i),
    e === ke && ((ve = ke = null), (je = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Pl ||
      ((Pl = !0),
      ad(Ql, function () {
        return Xn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = rt.transition), (rt.transition = null);
    var o = q;
    q = 1;
    var a = G;
    (G |= 4),
      (Ga.current = null),
      Jh(e, n),
      qf(n, e),
      Eh(Fo),
      (Yl = !!Ao),
      (Fo = Ao = null),
      (e.current = n),
      Zh(n),
      jp(),
      (G = a),
      (q = o),
      (rt.transition = i);
  } else e.current = n;
  if (
    (Pl && ((Pl = !1), (Wt = e), (si = l)),
    (i = e.pendingLanes),
    i === 0 && (Jt = null),
    Lp(n.stateNode),
    $e(e, he()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ui) throw ((ui = !1), (e = na), (na = null), e);
  return (
    si & 1 && e.tag !== 0 && Xn(),
    (i = e.pendingLanes),
    i & 1 ? (e === ra ? Fr++ : ((Fr = 0), (ra = e))) : (Fr = 0),
    rn(),
    null
  );
}
function Xn() {
  if (Wt !== null) {
    var e = Fc(si),
      t = rt.transition,
      n = q;
    try {
      if (((rt.transition = null), (q = 16 > e ? 16 : e), Wt === null))
        var r = !1;
      else {
        if (((e = Wt), (Wt = null), (si = 0), G & 6)) throw Error(P(331));
        var l = G;
        for (G |= 4, z = e.current; z !== null; ) {
          var i = z,
            o = i.child;
          if (z.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (z = s; z !== null; ) {
                  var f = z;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Dr(8, f, i);
                  }
                  var h = f.child;
                  if (h !== null) (h.return = f), (z = h);
                  else
                    for (; z !== null; ) {
                      f = z;
                      var p = f.sibling,
                        S = f.return;
                      if ((Xf(f), f === s)) {
                        z = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = S), (z = p);
                        break;
                      }
                      z = S;
                    }
                }
              }
              var E = i.alternate;
              if (E !== null) {
                var x = E.child;
                if (x !== null) {
                  E.child = null;
                  do {
                    var N = x.sibling;
                    (x.sibling = null), (x = N);
                  } while (x !== null);
                }
              }
              z = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (z = o);
          else
            e: for (; z !== null; ) {
              if (((i = z), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Dr(9, i, i.return);
                }
              var d = i.sibling;
              if (d !== null) {
                (d.return = i.return), (z = d);
                break e;
              }
              z = i.return;
            }
        }
        var c = e.current;
        for (z = c; z !== null; ) {
          o = z;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (z = m);
          else
            e: for (o = c; z !== null; ) {
              if (((a = z), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ki(9, a);
                  }
                } catch (L) {
                  fe(a, a.return, L);
                }
              if (a === o) {
                z = null;
                break e;
              }
              var C = a.sibling;
              if (C !== null) {
                (C.return = a.return), (z = C);
                break e;
              }
              z = a.return;
            }
        }
        if (
          ((G = l), rn(), wt && typeof wt.onPostCommitFiberRoot == 'function')
        )
          try {
            wt.onPostCommitFiberRoot(mi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (q = n), (rt.transition = t);
    }
  }
  return !1;
}
function Ns(e, t, n) {
  (t = tr(n, t)),
    (t = If(e, t, 1)),
    (e = Xt(e, t, 1)),
    (t = Ae()),
    e !== null && (rl(e, 1, t), $e(e, t));
}
function fe(e, t, n) {
  if (e.tag === 3) Ns(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ns(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Jt === null || !Jt.has(r)))
        ) {
          (e = tr(n, e)),
            (e = Uf(t, e, 1)),
            (t = Xt(t, e, 1)),
            (e = Ae()),
            t !== null && (rl(t, 1, e), $e(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function rm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ke === e &&
      (je & n) === n &&
      (we === 4 || (we === 3 && (je & 130023424) === je && 500 > he() - Ja)
        ? hn(e, 0)
        : (Xa |= n)),
    $e(e, t);
}
function id(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = gl), (gl <<= 1), !(gl & 130023424) && (gl = 4194304))
      : (t = 1));
  var n = Ae();
  (e = _t(e, t)), e !== null && (rl(e, t, n), $e(e, n));
}
function lm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), id(e, n);
}
function im(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(P(314));
  }
  r !== null && r.delete(t), id(e, n);
}
var od;
od = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || He.current) Be = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Be = !1), Kh(e, t, n);
      Be = !!(e.flags & 131072);
    }
  else (Be = !1), oe && t.flags & 1048576 && sf(t, ei, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Il(e, t), (e = t.pendingProps);
      var l = Zn(t, Me.current);
      Gn(t, n), (l = $a(null, t, r, e, l, n));
      var i = Wa();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ve(r) ? ((i = !0), ql(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ia(t),
            (l.updater = Si),
            (t.stateNode = l),
            (l._reactInternals = t),
            Qo(t, r, e, n),
            (t = Go(null, t, r, !0, i, n)))
          : ((t.tag = 0), oe && i && Ta(t), De(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Il(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = am(r)),
          (e = ut(r, e)),
          l)
        ) {
          case 0:
            t = Yo(null, t, r, e, n);
            break e;
          case 1:
            t = ms(null, t, r, e, n);
            break e;
          case 11:
            t = ps(null, t, r, e, n);
            break e;
          case 14:
            t = hs(null, t, r, ut(r.type, e), n);
            break e;
        }
        throw Error(P(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ut(r, l)),
        Yo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ut(r, l)),
        ms(e, t, r, l, n)
      );
    case 3:
      e: {
        if (($f(t), e === null)) throw Error(P(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          pf(e, t),
          ri(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = tr(Error(P(423)), t)), (t = vs(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = tr(Error(P(424)), t)), (t = vs(e, t, r, n, l));
            break e;
          } else
            for (
              Ye = Gt(t.stateNode.containerInfo.firstChild),
                Ge = t,
                oe = !0,
                ft = null,
                n = yf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((qn(), r === l)) {
            t = Lt(e, t, n);
            break e;
          }
          De(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        gf(t),
        e === null && Vo(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Oo(r, l) ? (o = null) : i !== null && Oo(r, i) && (t.flags |= 32),
        Vf(e, t),
        De(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Vo(t), null;
    case 13:
      return Wf(e, t, n);
    case 4:
      return (
        Ua(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = bn(t, null, r, n)) : De(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ut(r, l)),
        ps(e, t, r, l, n)
      );
    case 7:
      return De(e, t, t.pendingProps, n), t.child;
    case 8:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          te(ti, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (ht(i.value, o)) {
            if (i.children === l.children && !He.current) {
              t = Lt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = Rt(-1, n & -n)), (u.tag = 2);
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var f = s.pending;
                        f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (s.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      $o(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(P(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  $o(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        De(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Gn(t, n),
        (l = lt(l)),
        (r = r(l)),
        (t.flags |= 1),
        De(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ut(r, t.pendingProps)),
        (l = ut(r.type, l)),
        hs(e, t, r, l, n)
      );
    case 15:
      return Bf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ut(r, l)),
        Il(e, t),
        (t.tag = 1),
        Ve(r) ? ((e = !0), ql(t)) : (e = !1),
        Gn(t, n),
        mf(t, r, l),
        Qo(t, r, l, n),
        Go(null, t, r, !0, e, n)
      );
    case 19:
      return Qf(e, t, n);
    case 22:
      return Hf(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function ad(e, t) {
  return Mc(e, t);
}
function om(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function nt(e, t, n, r) {
  return new om(e, t, n, r);
}
function eu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function am(e) {
  if (typeof e == 'function') return eu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === wa)) return 11;
    if (e === xa) return 14;
  }
  return 2;
}
function qt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = nt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Hl(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == 'function')) eu(e) && (o = 1);
  else if (typeof e == 'string') o = 5;
  else
    e: switch (e) {
      case Tn:
        return mn(n.children, l, i, t);
      case ga:
        (o = 8), (l |= 8);
        break;
      case mo:
        return (
          (e = nt(12, n, t, l | 2)), (e.elementType = mo), (e.lanes = i), e
        );
      case vo:
        return (e = nt(13, n, t, l)), (e.elementType = vo), (e.lanes = i), e;
      case yo:
        return (e = nt(19, n, t, l)), (e.elementType = yo), (e.lanes = i), e;
      case mc:
        return Ni(n, l, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case pc:
              o = 10;
              break e;
            case hc:
              o = 9;
              break e;
            case wa:
              o = 11;
              break e;
            case xa:
              o = 14;
              break e;
            case Ut:
              (o = 16), (r = null);
              break e;
          }
        throw Error(P(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = nt(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function mn(e, t, n, r) {
  return (e = nt(7, e, r, t)), (e.lanes = n), e;
}
function Ni(e, t, n, r) {
  return (
    (e = nt(22, e, r, t)),
    (e.elementType = mc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ao(e, t, n) {
  return (e = nt(6, e, null, t)), (e.lanes = n), e;
}
function uo(e, t, n) {
  return (
    (t = nt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function um(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Vi(0)),
    (this.expirationTimes = Vi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Vi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function tu(e, t, n, r, l, i, o, a, u) {
  return (
    (e = new um(e, t, n, a, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = nt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ia(i),
    e
  );
}
function sm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ln,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ud(e) {
  if (!e) return en;
  e = e._reactInternals;
  e: {
    if (Cn(e) !== e || e.tag !== 1) throw Error(P(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ve(n)) return af(e, n, t);
  }
  return t;
}
function sd(e, t, n, r, l, i, o, a, u) {
  return (
    (e = tu(n, r, !0, e, l, i, o, a, u)),
    (e.context = ud(null)),
    (n = e.current),
    (r = Ae()),
    (l = Zt(n)),
    (i = Rt(r, l)),
    (i.callback = t ?? null),
    Xt(n, i, l),
    (e.current.lanes = l),
    rl(e, l, r),
    $e(e, r),
    e
  );
}
function Ri(e, t, n, r) {
  var l = t.current,
    i = Ae(),
    o = Zt(l);
  return (
    (n = ud(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Rt(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Xt(l, t, o)),
    e !== null && (pt(e, l, o, i), Al(e, l, o)),
    o
  );
}
function fi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Rs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function nu(e, t) {
  Rs(e, t), (e = e.alternate) && Rs(e, t);
}
function cm() {
  return null;
}
var cd =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function ru(e) {
  this._internalRoot = e;
}
ji.prototype.render = ru.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  Ri(e, t, null, null);
};
ji.prototype.unmount = ru.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Sn(function () {
      Ri(null, e, null, null);
    }),
      (t[Pt] = null);
  }
};
function ji(e) {
  this._internalRoot = e;
}
ji.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Uc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++);
    Ht.splice(n, 0, e), n === 0 && Hc(e);
  }
};
function lu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Pi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function js() {}
function fm(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var s = fi(o);
        i.call(s);
      };
    }
    var o = sd(t, r, e, 0, null, !1, !1, '', js);
    return (
      (e._reactRootContainer = o),
      (e[Pt] = o.current),
      Kr(e.nodeType === 8 ? e.parentNode : e),
      Sn(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var s = fi(u);
      a.call(s);
    };
  }
  var u = tu(e, 0, !1, null, null, !1, !1, '', js);
  return (
    (e._reactRootContainer = u),
    (e[Pt] = u.current),
    Kr(e.nodeType === 8 ? e.parentNode : e),
    Sn(function () {
      Ri(t, u, n, r);
    }),
    u
  );
}
function _i(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == 'function') {
      var a = l;
      l = function () {
        var u = fi(o);
        a.call(u);
      };
    }
    Ri(t, o, e, l);
  } else o = fm(n, t, e, l, r);
  return fi(o);
}
Oc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Rr(t.pendingLanes);
        n !== 0 &&
          (ka(t, n | 1), $e(t, he()), !(G & 6) && ((nr = he() + 500), rn()));
      }
      break;
    case 13:
      Sn(function () {
        var r = _t(e, 1);
        if (r !== null) {
          var l = Ae();
          pt(r, e, 1, l);
        }
      }),
        nu(e, 1);
  }
};
Ca = function (e) {
  if (e.tag === 13) {
    var t = _t(e, 134217728);
    if (t !== null) {
      var n = Ae();
      pt(t, e, 134217728, n);
    }
    nu(e, 134217728);
  }
};
Ic = function (e) {
  if (e.tag === 13) {
    var t = Zt(e),
      n = _t(e, t);
    if (n !== null) {
      var r = Ae();
      pt(n, e, t, r);
    }
    nu(e, t);
  }
};
Uc = function () {
  return q;
};
Bc = function (e, t) {
  var n = q;
  try {
    return (q = e), t();
  } finally {
    q = n;
  }
};
jo = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((xo(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = wi(r);
            if (!l) throw Error(P(90));
            yc(r), xo(r, l);
          }
        }
      }
      break;
    case 'textarea':
      wc(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Wn(e, !!n.multiple, t, !1);
  }
};
Rc = Za;
jc = Sn;
var dm = { usingClientEntryPoint: !1, Events: [il, An, wi, Cc, Nc, Za] },
  gr = {
    findFiberByHostInstance: sn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  pm = {
    bundleType: gr.bundleType,
    version: gr.version,
    rendererPackageName: gr.rendererPackageName,
    rendererConfig: gr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Tt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Lc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: gr.findFiberByHostInstance || cm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var _l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!_l.isDisabled && _l.supportsFiber)
    try {
      (mi = _l.inject(pm)), (wt = _l);
    } catch {}
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dm;
Je.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!lu(t)) throw Error(P(200));
  return sm(e, t, null, n);
};
Je.createRoot = function (e, t) {
  if (!lu(e)) throw Error(P(299));
  var n = !1,
    r = '',
    l = cd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = tu(e, 1, !1, null, null, n, !1, r, l)),
    (e[Pt] = t.current),
    Kr(e.nodeType === 8 ? e.parentNode : e),
    new ru(t)
  );
};
Je.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(P(188))
      : ((e = Object.keys(e).join(',')), Error(P(268, e)));
  return (e = Lc(t)), (e = e === null ? null : e.stateNode), e;
};
Je.flushSync = function (e) {
  return Sn(e);
};
Je.hydrate = function (e, t, n) {
  if (!Pi(t)) throw Error(P(200));
  return _i(null, e, t, !0, n);
};
Je.hydrateRoot = function (e, t, n) {
  if (!lu(e)) throw Error(P(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = '',
    o = cd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = sd(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Pt] = t.current),
    Kr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new ji(t);
};
Je.render = function (e, t, n) {
  if (!Pi(t)) throw Error(P(200));
  return _i(null, e, t, !1, n);
};
Je.unmountComponentAtNode = function (e) {
  if (!Pi(e)) throw Error(P(40));
  return e._reactRootContainer
    ? (Sn(function () {
        _i(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Pt] = null);
        });
      }),
      !0)
    : !1;
};
Je.unstable_batchedUpdates = Za;
Je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Pi(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return _i(e, t, n, !1, r);
};
Je.version = '18.2.0-next-9e3b772b8-20220608';
function fd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fd);
    } catch (e) {
      console.error(e);
    }
}
fd(), (uc.exports = Je);
var iu = uc.exports;
const hm = Js(iu),
  mm = Xs({ __proto__: null, default: hm }, [iu]);
var Ps = iu;
(po.createRoot = Ps.createRoot), (po.hydrateRoot = Ps.hydrateRoot);
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function de() {
  return (
    (de = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    de.apply(this, arguments)
  );
}
var pe;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(pe || (pe = {}));
const _s = 'popstate';
function vm(e) {
  e === void 0 && (e = {});
  function t(l, i) {
    let {
      pathname: o = '/',
      search: a = '',
      hash: u = '',
    } = St(l.location.hash.substr(1));
    return (
      !o.startsWith('/') && !o.startsWith('.') && (o = '/' + o),
      tl(
        '',
        { pathname: o, search: a, hash: u },
        (i.state && i.state.usr) || null,
        (i.state && i.state.key) || 'default'
      )
    );
  }
  function n(l, i) {
    let o = l.document.querySelector('base'),
      a = '';
    if (o && o.getAttribute('href')) {
      let u = l.location.href,
        s = u.indexOf('#');
      a = s === -1 ? u : u.slice(0, s);
    }
    return a + '#' + (typeof i == 'string' ? i : al(i));
  }
  function r(l, i) {
    En(
      l.pathname.charAt(0) === '/',
      'relative pathnames are not supported in hash history.push(' +
        JSON.stringify(i) +
        ')'
    );
  }
  return gm(t, n, r, e);
}
function Y(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function En(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function ym() {
  return Math.random().toString(36).substr(2, 8);
}
function Ls(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function tl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    de(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? St(t) : t,
      { state: n, key: (t && t.key) || r || ym() }
    )
  );
}
function al(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function St(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function gm(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    a = pe.Pop,
    u = null,
    s = f();
  s == null && ((s = 0), o.replaceState(de({}, o.state, { idx: s }), ''));
  function f() {
    return (o.state || { idx: null }).idx;
  }
  function h() {
    a = pe.Pop;
    let N = f(),
      d = N == null ? null : N - s;
    (s = N), u && u({ action: a, location: x.location, delta: d });
  }
  function p(N, d) {
    a = pe.Push;
    let c = tl(x.location, N, d);
    n && n(c, N), (s = f() + 1);
    let m = Ls(c, s),
      C = x.createHref(c);
    try {
      o.pushState(m, '', C);
    } catch (L) {
      if (L instanceof DOMException && L.name === 'DataCloneError') throw L;
      l.location.assign(C);
    }
    i && u && u({ action: a, location: x.location, delta: 1 });
  }
  function S(N, d) {
    a = pe.Replace;
    let c = tl(x.location, N, d);
    n && n(c, N), (s = f());
    let m = Ls(c, s),
      C = x.createHref(c);
    o.replaceState(m, '', C),
      i && u && u({ action: a, location: x.location, delta: 0 });
  }
  function E(N) {
    let d = l.location.origin !== 'null' ? l.location.origin : l.location.href,
      c = typeof N == 'string' ? N : al(N);
    return (
      (c = c.replace(/ $/, '%20')),
      Y(
        d,
        'No window.location.(origin|href) available to create URL for href: ' +
          c
      ),
      new URL(c, d)
    );
  }
  let x = {
    get action() {
      return a;
    },
    get location() {
      return e(l, o);
    },
    listen(N) {
      if (u) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(_s, h),
        (u = N),
        () => {
          l.removeEventListener(_s, h), (u = null);
        }
      );
    },
    createHref(N) {
      return t(l, N);
    },
    createURL: E,
    encodeLocation(N) {
      let d = E(N);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: p,
    replace: S,
    go(N) {
      return o.go(N);
    },
  };
  return x;
}
var ce;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(ce || (ce = {}));
const wm = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'children',
]);
function xm(e) {
  return e.index === !0;
}
function oa(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, i) => {
      let o = [...n, i],
        a = typeof l.id == 'string' ? l.id : o.join('-');
      if (
        (Y(
          l.index !== !0 || !l.children,
          'Cannot specify children on an index route'
        ),
        Y(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        xm(l))
      ) {
        let u = de({}, l, t(l), { id: a });
        return (r[a] = u), u;
      } else {
        let u = de({}, l, t(l), { id: a, children: void 0 });
        return (
          (r[a] = u), l.children && (u.children = oa(l.children, t, o, r)), u
        );
      }
    })
  );
}
function Vn(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? St(t) : t,
    l = ul(r.pathname || '/', n);
  if (l == null) return null;
  let i = dd(e);
  Em(i);
  let o = null;
  for (let a = 0; o == null && a < i.length; ++a) {
    let u = Dm(l);
    o = Tm(i[a], u);
  }
  return o;
}
function Sm(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function dd(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let l = (i, o, a) => {
    let u = {
      relativePath: a === void 0 ? i.path || '' : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    u.relativePath.startsWith('/') &&
      (Y(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = vn([r, u.relativePath]),
      f = n.concat(u);
    i.children &&
      i.children.length > 0 &&
      (Y(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + s + '".')
      ),
      dd(i.children, t, f, s)),
      !(i.path == null && !i.index) &&
        t.push({ path: s, score: _m(s, i.index), routesMeta: f });
  };
  return (
    e.forEach((i, o) => {
      var a;
      if (i.path === '' || !((a = i.path) != null && a.includes('?'))) l(i, o);
      else for (let u of pd(i.path)) l(i, o, u);
    }),
    t
  );
}
function pd(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (r.length === 0) return l ? [i, ''] : [i];
  let o = pd(r.join('/')),
    a = [];
  return (
    a.push(...o.map((u) => (u === '' ? i : [i, u].join('/')))),
    l && a.push(...o),
    a.map((u) => (e.startsWith('/') && u === '' ? '/' : u))
  );
}
function Em(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Lm(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const km = /^:[\w-]+$/,
  Cm = 3,
  Nm = 2,
  Rm = 1,
  jm = 10,
  Pm = -2,
  Ts = (e) => e === '*';
function _m(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(Ts) && (r += Pm),
    t && (r += Nm),
    n
      .filter((l) => !Ts(l))
      .reduce((l, i) => l + (km.test(i) ? Cm : i === '' ? Rm : jm), r)
  );
}
function Lm(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Tm(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = '/',
    i = [];
  for (let o = 0; o < n.length; ++o) {
    let a = n[o],
      u = o === n.length - 1,
      s = l === '/' ? t : t.slice(l.length) || '/',
      f = Mm(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        s
      );
    if (!f) return null;
    Object.assign(r, f.params);
    let h = a.route;
    i.push({
      params: r,
      pathname: vn([l, f.pathname]),
      pathnameBase: Um(vn([l, f.pathnameBase])),
      route: h,
    }),
      f.pathnameBase !== '/' && (l = vn([l, f.pathnameBase]));
  }
  return i;
}
function Mm(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = zm(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, '$1'),
    a = l.slice(1);
  return {
    params: r.reduce((s, f, h) => {
      let { paramName: p, isOptional: S } = f;
      if (p === '*') {
        let x = a[h] || '';
        o = i.slice(0, i.length - x.length).replace(/(.)\/+$/, '$1');
      }
      const E = a[h];
      return (
        S && !E ? (s[p] = void 0) : (s[p] = (E || '').replace(/%2F/g, '/')), s
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function zm(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    En(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    l =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (l += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (l += '\\/*$')
        : e !== '' && e !== '/' && (l += '(?:(?=\\/|$))'),
    [new RegExp(l, t ? void 0 : 'i'), r]
  );
}
function Dm(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      En(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function ul(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function Am(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: l = '',
  } = typeof e == 'string' ? St(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : Fm(n, t)) : t,
    search: Bm(r),
    hash: Hm(l),
  };
}
function Fm(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((l) => {
      l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function so(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function hd(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Om(e, t) {
  let n = hd(e);
  return t
    ? n.map((r, l) => (l === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Im(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == 'string'
    ? (l = St(e))
    : ((l = de({}, e)),
      Y(
        !l.pathname || !l.pathname.includes('?'),
        so('?', 'pathname', 'search', l)
      ),
      Y(
        !l.pathname || !l.pathname.includes('#'),
        so('#', 'pathname', 'hash', l)
      ),
      Y(!l.search || !l.search.includes('#'), so('#', 'search', 'hash', l)));
  let i = e === '' || l.pathname === '',
    o = i ? '/' : l.pathname,
    a;
  if (o == null) a = n;
  else {
    let h = t.length - 1;
    if (!r && o.startsWith('..')) {
      let p = o.split('/');
      for (; p[0] === '..'; ) p.shift(), (h -= 1);
      l.pathname = p.join('/');
    }
    a = h >= 0 ? t[h] : '/';
  }
  let u = Am(l, a),
    s = o && o !== '/' && o.endsWith('/'),
    f = (i || o === '.') && n.endsWith('/');
  return !u.pathname.endsWith('/') && (s || f) && (u.pathname += '/'), u;
}
const vn = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Um = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Bm = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Hm = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class ou {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function md(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const vd = ['post', 'put', 'patch', 'delete'],
  Vm = new Set(vd),
  $m = ['get', ...vd],
  Wm = new Set($m),
  Qm = new Set([301, 302, 303, 307, 308]),
  Km = new Set([307, 308]),
  co = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ym = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  wr = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  yd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Gm = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  gd = 'remix-router-transitions';
function Xm(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    n =
      typeof t < 'u' &&
      typeof t.document < 'u' &&
      typeof t.document.createElement < 'u',
    r = !n;
  Y(
    e.routes.length > 0,
    'You must provide a non-empty routes array to createRouter'
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let y = e.detectErrorBoundary;
    l = (w) => ({ hasErrorBoundary: y(w) });
  } else l = Gm;
  let i = {},
    o = oa(e.routes, l, void 0, i),
    a,
    u = e.basename || '/',
    s = de(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
      },
      e.future
    ),
    f = null,
    h = new Set(),
    p = null,
    S = null,
    E = null,
    x = e.hydrationData != null,
    N = Vn(o, e.history.location, u),
    d = null;
  if (N == null) {
    let y = be(404, { pathname: e.history.location.pathname }),
      { matches: w, route: k } = Us(o);
    (N = w), (d = { [k.id]: y });
  }
  let c,
    m = N.some((y) => y.route.lazy),
    C = N.some((y) => y.route.loader);
  if (m) c = !1;
  else if (!C) c = !0;
  else if (s.v7_partialHydration) {
    let y = e.hydrationData ? e.hydrationData.loaderData : null,
      w = e.hydrationData ? e.hydrationData.errors : null,
      k = (_) =>
        _.route.loader
          ? _.route.loader.hydrate === !0
            ? !1
            : (y && y[_.route.id] !== void 0) || (w && w[_.route.id] !== void 0)
          : !0;
    if (w) {
      let _ = N.findIndex((A) => w[A.route.id] !== void 0);
      c = N.slice(0, _ + 1).every(k);
    } else c = N.every(k);
  } else c = e.hydrationData != null;
  let L,
    v = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: N,
      initialized: c,
      navigation: co,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || d,
      fetchers: new Map(),
      blockers: new Map(),
    },
    R = pe.Pop,
    T = !1,
    F,
    I = !1,
    X = new Map(),
    ye = null,
    me = !1,
    qe = !1,
    Nn = [],
    Mt = [],
    ie = new Map(),
    M = 0,
    B = -1,
    V = new Map(),
    J = new Set(),
    ne = new Map(),
    mt = new Map(),
    Ce = new Set(),
    ot = new Map(),
    ze = new Map(),
    zt = !1;
  function Pd() {
    if (
      ((f = e.history.listen((y) => {
        let { action: w, location: k, delta: _ } = y;
        if (zt) {
          zt = !1;
          return;
        }
        En(
          ze.size === 0 || _ != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        );
        let A = yu({
          currentLocation: v.location,
          nextLocation: k,
          historyAction: w,
        });
        if (A && _ != null) {
          (zt = !0),
            e.history.go(_ * -1),
            cl(A, {
              state: 'blocked',
              location: k,
              proceed() {
                cl(A, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: k,
                }),
                  e.history.go(_);
              },
              reset() {
                let W = new Map(v.blockers);
                W.set(A, wr), We({ blockers: W });
              },
            });
          return;
        }
        return ln(w, k);
      })),
      n)
    ) {
      o0(t, X);
      let y = () => a0(t, X);
      t.addEventListener('pagehide', y),
        (ye = () => t.removeEventListener('pagehide', y));
    }
    return v.initialized || ln(pe.Pop, v.location, { initialHydration: !0 }), L;
  }
  function _d() {
    f && f(),
      ye && ye(),
      h.clear(),
      F && F.abort(),
      v.fetchers.forEach((y, w) => sl(w)),
      v.blockers.forEach((y, w) => vu(w));
  }
  function Ld(y) {
    return h.add(y), () => h.delete(y);
  }
  function We(y, w) {
    w === void 0 && (w = {}), (v = de({}, v, y));
    let k = [],
      _ = [];
    s.v7_fetcherPersist &&
      v.fetchers.forEach((A, W) => {
        A.state === 'idle' && (Ce.has(W) ? _.push(W) : k.push(W));
      }),
      [...h].forEach((A) =>
        A(v, {
          deletedFetchers: _,
          unstable_viewTransitionOpts: w.viewTransitionOpts,
          unstable_flushSync: w.flushSync === !0,
        })
      ),
      s.v7_fetcherPersist &&
        (k.forEach((A) => v.fetchers.delete(A)), _.forEach((A) => sl(A)));
  }
  function ar(y, w, k) {
    var _, A;
    let { flushSync: W } = k === void 0 ? {} : k,
      H =
        v.actionData != null &&
        v.navigation.formMethod != null &&
        ct(v.navigation.formMethod) &&
        v.navigation.state === 'loading' &&
        ((_ = y.state) == null ? void 0 : _._isRedirect) !== !0,
      U;
    w.actionData
      ? Object.keys(w.actionData).length > 0
        ? (U = w.actionData)
        : (U = null)
      : H
        ? (U = v.actionData)
        : (U = null);
    let O = w.loaderData
        ? Is(v.loaderData, w.loaderData, w.matches || [], w.errors)
        : v.loaderData,
      K = v.blockers;
    K.size > 0 && ((K = new Map(K)), K.forEach((ee, Ne) => K.set(Ne, wr)));
    let xe =
      T === !0 ||
      (v.navigation.formMethod != null &&
        ct(v.navigation.formMethod) &&
        ((A = y.state) == null ? void 0 : A._isRedirect) !== !0);
    a && ((o = a), (a = void 0)),
      me ||
        R === pe.Pop ||
        (R === pe.Push
          ? e.history.push(y, y.state)
          : R === pe.Replace && e.history.replace(y, y.state));
    let $;
    if (R === pe.Pop) {
      let ee = X.get(v.location.pathname);
      ee && ee.has(y.pathname)
        ? ($ = { currentLocation: v.location, nextLocation: y })
        : X.has(y.pathname) &&
          ($ = { currentLocation: y, nextLocation: v.location });
    } else if (I) {
      let ee = X.get(v.location.pathname);
      ee
        ? ee.add(y.pathname)
        : ((ee = new Set([y.pathname])), X.set(v.location.pathname, ee)),
        ($ = { currentLocation: v.location, nextLocation: y });
    }
    We(
      de({}, w, {
        actionData: U,
        loaderData: O,
        historyAction: R,
        location: y,
        initialized: !0,
        navigation: co,
        revalidation: 'idle',
        restoreScrollPosition: wu(y, w.matches || v.matches),
        preventScrollReset: xe,
        blockers: K,
      }),
      { viewTransitionOpts: $, flushSync: W === !0 }
    ),
      (R = pe.Pop),
      (T = !1),
      (I = !1),
      (me = !1),
      (qe = !1),
      (Nn = []),
      (Mt = []);
  }
  async function cu(y, w) {
    if (typeof y == 'number') {
      e.history.go(y);
      return;
    }
    let k = aa(
        v.location,
        v.matches,
        u,
        s.v7_prependBasename,
        y,
        s.v7_relativeSplatPath,
        w == null ? void 0 : w.fromRouteId,
        w == null ? void 0 : w.relative
      ),
      {
        path: _,
        submission: A,
        error: W,
      } = Ms(s.v7_normalizeFormMethod, !1, k, w),
      H = v.location,
      U = tl(v.location, _, w && w.state);
    U = de({}, U, e.history.encodeLocation(U));
    let O = w && w.replace != null ? w.replace : void 0,
      K = pe.Push;
    O === !0
      ? (K = pe.Replace)
      : O === !1 ||
        (A != null &&
          ct(A.formMethod) &&
          A.formAction === v.location.pathname + v.location.search &&
          (K = pe.Replace));
    let xe =
        w && 'preventScrollReset' in w ? w.preventScrollReset === !0 : void 0,
      $ = (w && w.unstable_flushSync) === !0,
      ee = yu({ currentLocation: H, nextLocation: U, historyAction: K });
    if (ee) {
      cl(ee, {
        state: 'blocked',
        location: U,
        proceed() {
          cl(ee, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: U,
          }),
            cu(y, w);
        },
        reset() {
          let Ne = new Map(v.blockers);
          Ne.set(ee, wr), We({ blockers: Ne });
        },
      });
      return;
    }
    return await ln(K, U, {
      submission: A,
      pendingError: W,
      preventScrollReset: xe,
      replace: w && w.replace,
      enableViewTransition: w && w.unstable_viewTransition,
      flushSync: $,
    });
  }
  function Td() {
    if (
      (Mi(),
      We({ revalidation: 'loading' }),
      v.navigation.state !== 'submitting')
    ) {
      if (v.navigation.state === 'idle') {
        ln(v.historyAction, v.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      ln(R || v.historyAction, v.navigation.location, {
        overrideNavigation: v.navigation,
      });
    }
  }
  async function ln(y, w, k) {
    F && F.abort(),
      (F = null),
      (R = y),
      (me = (k && k.startUninterruptedRevalidation) === !0),
      Bd(v.location, v.matches),
      (T = (k && k.preventScrollReset) === !0),
      (I = (k && k.enableViewTransition) === !0);
    let _ = a || o,
      A = k && k.overrideNavigation,
      W = Vn(_, w, u),
      H = (k && k.flushSync) === !0;
    if (!W) {
      let Ne = be(404, { pathname: w.pathname }),
        { matches: Qe, route: Se } = Us(_);
      zi(),
        ar(
          w,
          { matches: Qe, loaderData: {}, errors: { [Se.id]: Ne } },
          { flushSync: H }
        );
      return;
    }
    if (
      v.initialized &&
      !qe &&
      e0(v.location, w) &&
      !(k && k.submission && ct(k.submission.formMethod))
    ) {
      ar(w, { matches: W }, { flushSync: H });
      return;
    }
    F = new AbortController();
    let U = Sr(e.history, w, F.signal, k && k.submission),
      O,
      K;
    if (k && k.pendingError) K = { [Or(W).route.id]: k.pendingError };
    else if (k && k.submission && ct(k.submission.formMethod)) {
      let Ne = await Md(U, w, k.submission, W, {
        replace: k.replace,
        flushSync: H,
      });
      if (Ne.shortCircuited) return;
      (O = Ne.pendingActionData),
        (K = Ne.pendingActionError),
        (A = fo(w, k.submission)),
        (H = !1),
        (U = new Request(U.url, { signal: U.signal }));
    }
    let {
      shortCircuited: xe,
      loaderData: $,
      errors: ee,
    } = await zd(
      U,
      w,
      W,
      A,
      k && k.submission,
      k && k.fetcherSubmission,
      k && k.replace,
      k && k.initialHydration === !0,
      H,
      O,
      K
    );
    xe ||
      ((F = null),
      ar(
        w,
        de({ matches: W }, O ? { actionData: O } : {}, {
          loaderData: $,
          errors: ee,
        })
      ));
  }
  async function Md(y, w, k, _, A) {
    A === void 0 && (A = {}), Mi();
    let W = l0(w, k);
    We({ navigation: W }, { flushSync: A.flushSync === !0 });
    let H,
      U = sa(_, w);
    if (!U.route.action && !U.route.lazy)
      H = {
        type: ce.error,
        error: be(405, {
          method: y.method,
          pathname: w.pathname,
          routeId: U.route.id,
        }),
      };
    else if (
      ((H = await xr('action', y, U, _, i, l, u, s.v7_relativeSplatPath)),
      y.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (pn(H)) {
      let O;
      return (
        A && A.replace != null
          ? (O = A.replace)
          : (O = H.location === v.location.pathname + v.location.search),
        await ur(v, H, { submission: k, replace: O }),
        { shortCircuited: !0 }
      );
    }
    if ($n(H)) {
      let O = Or(_, U.route.id);
      return (
        (A && A.replace) !== !0 && (R = pe.Push),
        { pendingActionData: {}, pendingActionError: { [O.route.id]: H.error } }
      );
    }
    if (dn(H)) throw be(400, { type: 'defer-action' });
    return { pendingActionData: { [U.route.id]: H.data } };
  }
  async function zd(y, w, k, _, A, W, H, U, O, K, xe) {
    let $ = _ || fo(w, A),
      ee = A || W || Vs($),
      Ne = a || o,
      [Qe, Se] = zs(
        e.history,
        v,
        k,
        ee,
        w,
        s.v7_partialHydration && U === !0,
        qe,
        Nn,
        Mt,
        Ce,
        ne,
        J,
        Ne,
        u,
        K,
        xe
      );
    if (
      (zi(
        (Z) =>
          !(k && k.some((b) => b.route.id === Z)) ||
          (Qe && Qe.some((b) => b.route.id === Z))
      ),
      (B = ++M),
      Qe.length === 0 && Se.length === 0)
    ) {
      let Z = hu();
      return (
        ar(
          w,
          de(
            { matches: k, loaderData: {}, errors: xe || null },
            K ? { actionData: K } : {},
            Z ? { fetchers: new Map(v.fetchers) } : {}
          ),
          { flushSync: O }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!me && (!s.v7_partialHydration || !U)) {
      Se.forEach((b) => {
        let Ie = v.fetchers.get(b.key),
          dl = Er(void 0, Ie ? Ie.data : void 0);
        v.fetchers.set(b.key, dl);
      });
      let Z = K || v.actionData;
      We(
        de(
          { navigation: $ },
          Z
            ? Object.keys(Z).length === 0
              ? { actionData: null }
              : { actionData: Z }
            : {},
          Se.length > 0 ? { fetchers: new Map(v.fetchers) } : {}
        ),
        { flushSync: O }
      );
    }
    Se.forEach((Z) => {
      ie.has(Z.key) && At(Z.key), Z.controller && ie.set(Z.key, Z.controller);
    });
    let Rn = () => Se.forEach((Z) => At(Z.key));
    F && F.signal.addEventListener('abort', Rn);
    let {
      results: Di,
      loaderResults: jn,
      fetcherResults: Ft,
    } = await fu(v.matches, k, Qe, Se, y);
    if (y.signal.aborted) return { shortCircuited: !0 };
    F && F.signal.removeEventListener('abort', Rn),
      Se.forEach((Z) => ie.delete(Z.key));
    let on = Bs(Di);
    if (on) {
      if (on.idx >= Qe.length) {
        let Z = Se[on.idx - Qe.length].key;
        J.add(Z);
      }
      return await ur(v, on.result, { replace: H }), { shortCircuited: !0 };
    }
    let { loaderData: Ai, errors: cr } = Os(v, k, Qe, jn, xe, Se, Ft, ot);
    ot.forEach((Z, b) => {
      Z.subscribe((Ie) => {
        (Ie || Z.done) && ot.delete(b);
      });
    }),
      s.v7_partialHydration &&
        U &&
        v.errors &&
        Object.entries(v.errors)
          .filter((Z) => {
            let [b] = Z;
            return !Qe.some((Ie) => Ie.route.id === b);
          })
          .forEach((Z) => {
            let [b, Ie] = Z;
            cr = Object.assign(cr || {}, { [b]: Ie });
          });
    let Fi = hu(),
      Pn = mu(B),
      fl = Fi || Pn || Se.length > 0;
    return de(
      { loaderData: Ai, errors: cr },
      fl ? { fetchers: new Map(v.fetchers) } : {}
    );
  }
  function Dd(y, w, k, _) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    ie.has(y) && At(y);
    let A = (_ && _.unstable_flushSync) === !0,
      W = a || o,
      H = aa(
        v.location,
        v.matches,
        u,
        s.v7_prependBasename,
        k,
        s.v7_relativeSplatPath,
        w,
        _ == null ? void 0 : _.relative
      ),
      U = Vn(W, H, u);
    if (!U) {
      sr(y, w, be(404, { pathname: H }), { flushSync: A });
      return;
    }
    let {
      path: O,
      submission: K,
      error: xe,
    } = Ms(s.v7_normalizeFormMethod, !0, H, _);
    if (xe) {
      sr(y, w, xe, { flushSync: A });
      return;
    }
    let $ = sa(U, O);
    if (((T = (_ && _.preventScrollReset) === !0), K && ct(K.formMethod))) {
      Ad(y, w, O, $, U, A, K);
      return;
    }
    ne.set(y, { routeId: w, path: O }), Fd(y, w, O, $, U, A, K);
  }
  async function Ad(y, w, k, _, A, W, H) {
    if ((Mi(), ne.delete(y), !_.route.action && !_.route.lazy)) {
      let b = be(405, { method: H.formMethod, pathname: k, routeId: w });
      sr(y, w, b, { flushSync: W });
      return;
    }
    let U = v.fetchers.get(y);
    Dt(y, i0(H, U), { flushSync: W });
    let O = new AbortController(),
      K = Sr(e.history, k, O.signal, H);
    ie.set(y, O);
    let xe = M,
      $ = await xr('action', K, _, A, i, l, u, s.v7_relativeSplatPath);
    if (K.signal.aborted) {
      ie.get(y) === O && ie.delete(y);
      return;
    }
    if (s.v7_fetcherPersist && Ce.has(y)) {
      if (pn($) || $n($)) {
        Dt(y, It(void 0));
        return;
      }
    } else {
      if (pn($))
        if ((ie.delete(y), B > xe)) {
          Dt(y, It(void 0));
          return;
        } else
          return J.add(y), Dt(y, Er(H)), ur(v, $, { fetcherSubmission: H });
      if ($n($)) {
        sr(y, w, $.error);
        return;
      }
    }
    if (dn($)) throw be(400, { type: 'defer-action' });
    let ee = v.navigation.location || v.location,
      Ne = Sr(e.history, ee, O.signal),
      Qe = a || o,
      Se =
        v.navigation.state !== 'idle'
          ? Vn(Qe, v.navigation.location, u)
          : v.matches;
    Y(Se, "Didn't find any matches after fetcher action");
    let Rn = ++M;
    V.set(y, Rn);
    let Di = Er(H, $.data);
    v.fetchers.set(y, Di);
    let [jn, Ft] = zs(
      e.history,
      v,
      Se,
      H,
      ee,
      !1,
      qe,
      Nn,
      Mt,
      Ce,
      ne,
      J,
      Qe,
      u,
      { [_.route.id]: $.data },
      void 0
    );
    Ft.filter((b) => b.key !== y).forEach((b) => {
      let Ie = b.key,
        dl = v.fetchers.get(Ie),
        Vd = Er(void 0, dl ? dl.data : void 0);
      v.fetchers.set(Ie, Vd),
        ie.has(Ie) && At(Ie),
        b.controller && ie.set(Ie, b.controller);
    }),
      We({ fetchers: new Map(v.fetchers) });
    let on = () => Ft.forEach((b) => At(b.key));
    O.signal.addEventListener('abort', on);
    let {
      results: Ai,
      loaderResults: cr,
      fetcherResults: Fi,
    } = await fu(v.matches, Se, jn, Ft, Ne);
    if (O.signal.aborted) return;
    O.signal.removeEventListener('abort', on),
      V.delete(y),
      ie.delete(y),
      Ft.forEach((b) => ie.delete(b.key));
    let Pn = Bs(Ai);
    if (Pn) {
      if (Pn.idx >= jn.length) {
        let b = Ft[Pn.idx - jn.length].key;
        J.add(b);
      }
      return ur(v, Pn.result);
    }
    let { loaderData: fl, errors: Z } = Os(
      v,
      v.matches,
      jn,
      cr,
      void 0,
      Ft,
      Fi,
      ot
    );
    if (v.fetchers.has(y)) {
      let b = It($.data);
      v.fetchers.set(y, b);
    }
    mu(Rn),
      v.navigation.state === 'loading' && Rn > B
        ? (Y(R, 'Expected pending action'),
          F && F.abort(),
          ar(v.navigation.location, {
            matches: Se,
            loaderData: fl,
            errors: Z,
            fetchers: new Map(v.fetchers),
          }))
        : (We({
            errors: Z,
            loaderData: Is(v.loaderData, fl, Se, Z),
            fetchers: new Map(v.fetchers),
          }),
          (qe = !1));
  }
  async function Fd(y, w, k, _, A, W, H) {
    let U = v.fetchers.get(y);
    Dt(y, Er(H, U ? U.data : void 0), { flushSync: W });
    let O = new AbortController(),
      K = Sr(e.history, k, O.signal);
    ie.set(y, O);
    let xe = M,
      $ = await xr('loader', K, _, A, i, l, u, s.v7_relativeSplatPath);
    if (
      (dn($) && ($ = (await Sd($, K.signal, !0)) || $),
      ie.get(y) === O && ie.delete(y),
      !K.signal.aborted)
    ) {
      if (Ce.has(y)) {
        Dt(y, It(void 0));
        return;
      }
      if (pn($))
        if (B > xe) {
          Dt(y, It(void 0));
          return;
        } else {
          J.add(y), await ur(v, $);
          return;
        }
      if ($n($)) {
        sr(y, w, $.error);
        return;
      }
      Y(!dn($), 'Unhandled fetcher deferred data'), Dt(y, It($.data));
    }
  }
  async function ur(y, w, k) {
    let {
      submission: _,
      fetcherSubmission: A,
      replace: W,
    } = k === void 0 ? {} : k;
    w.revalidate && (qe = !0);
    let H = tl(y.location, w.location, { _isRedirect: !0 });
    if ((Y(H, 'Expected a location on the redirect navigation'), n)) {
      let ee = !1;
      if (w.reloadDocument) ee = !0;
      else if (yd.test(w.location)) {
        const Ne = e.history.createURL(w.location);
        ee = Ne.origin !== t.location.origin || ul(Ne.pathname, u) == null;
      }
      if (ee) {
        W ? t.location.replace(w.location) : t.location.assign(w.location);
        return;
      }
    }
    F = null;
    let U = W === !0 ? pe.Replace : pe.Push,
      { formMethod: O, formAction: K, formEncType: xe } = y.navigation;
    !_ && !A && O && K && xe && (_ = Vs(y.navigation));
    let $ = _ || A;
    if (Km.has(w.status) && $ && ct($.formMethod))
      await ln(U, H, {
        submission: de({}, $, { formAction: w.location }),
        preventScrollReset: T,
      });
    else {
      let ee = fo(H, _);
      await ln(U, H, {
        overrideNavigation: ee,
        fetcherSubmission: A,
        preventScrollReset: T,
      });
    }
  }
  async function fu(y, w, k, _, A) {
    let W = await Promise.all([
        ...k.map((O) => xr('loader', A, O, w, i, l, u, s.v7_relativeSplatPath)),
        ..._.map((O) =>
          O.matches && O.match && O.controller
            ? xr(
                'loader',
                Sr(e.history, O.path, O.controller.signal),
                O.match,
                O.matches,
                i,
                l,
                u,
                s.v7_relativeSplatPath
              )
            : { type: ce.error, error: be(404, { pathname: O.path }) }
        ),
      ]),
      H = W.slice(0, k.length),
      U = W.slice(k.length);
    return (
      await Promise.all([
        Hs(
          y,
          k,
          H,
          H.map(() => A.signal),
          !1,
          v.loaderData
        ),
        Hs(
          y,
          _.map((O) => O.match),
          U,
          _.map((O) => (O.controller ? O.controller.signal : null)),
          !0
        ),
      ]),
      { results: W, loaderResults: H, fetcherResults: U }
    );
  }
  function Mi() {
    (qe = !0),
      Nn.push(...zi()),
      ne.forEach((y, w) => {
        ie.has(w) && (Mt.push(w), At(w));
      });
  }
  function Dt(y, w, k) {
    k === void 0 && (k = {}),
      v.fetchers.set(y, w),
      We(
        { fetchers: new Map(v.fetchers) },
        { flushSync: (k && k.flushSync) === !0 }
      );
  }
  function sr(y, w, k, _) {
    _ === void 0 && (_ = {});
    let A = Or(v.matches, w);
    sl(y),
      We(
        { errors: { [A.route.id]: k }, fetchers: new Map(v.fetchers) },
        { flushSync: (_ && _.flushSync) === !0 }
      );
  }
  function du(y) {
    return (
      s.v7_fetcherPersist &&
        (mt.set(y, (mt.get(y) || 0) + 1), Ce.has(y) && Ce.delete(y)),
      v.fetchers.get(y) || Ym
    );
  }
  function sl(y) {
    let w = v.fetchers.get(y);
    ie.has(y) && !(w && w.state === 'loading' && V.has(y)) && At(y),
      ne.delete(y),
      V.delete(y),
      J.delete(y),
      Ce.delete(y),
      v.fetchers.delete(y);
  }
  function Od(y) {
    if (s.v7_fetcherPersist) {
      let w = (mt.get(y) || 0) - 1;
      w <= 0 ? (mt.delete(y), Ce.add(y)) : mt.set(y, w);
    } else sl(y);
    We({ fetchers: new Map(v.fetchers) });
  }
  function At(y) {
    let w = ie.get(y);
    Y(w, 'Expected fetch controller: ' + y), w.abort(), ie.delete(y);
  }
  function pu(y) {
    for (let w of y) {
      let k = du(w),
        _ = It(k.data);
      v.fetchers.set(w, _);
    }
  }
  function hu() {
    let y = [],
      w = !1;
    for (let k of J) {
      let _ = v.fetchers.get(k);
      Y(_, 'Expected fetcher: ' + k),
        _.state === 'loading' && (J.delete(k), y.push(k), (w = !0));
    }
    return pu(y), w;
  }
  function mu(y) {
    let w = [];
    for (let [k, _] of V)
      if (_ < y) {
        let A = v.fetchers.get(k);
        Y(A, 'Expected fetcher: ' + k),
          A.state === 'loading' && (At(k), V.delete(k), w.push(k));
      }
    return pu(w), w.length > 0;
  }
  function Id(y, w) {
    let k = v.blockers.get(y) || wr;
    return ze.get(y) !== w && ze.set(y, w), k;
  }
  function vu(y) {
    v.blockers.delete(y), ze.delete(y);
  }
  function cl(y, w) {
    let k = v.blockers.get(y) || wr;
    Y(
      (k.state === 'unblocked' && w.state === 'blocked') ||
        (k.state === 'blocked' && w.state === 'blocked') ||
        (k.state === 'blocked' && w.state === 'proceeding') ||
        (k.state === 'blocked' && w.state === 'unblocked') ||
        (k.state === 'proceeding' && w.state === 'unblocked'),
      'Invalid blocker state transition: ' + k.state + ' -> ' + w.state
    );
    let _ = new Map(v.blockers);
    _.set(y, w), We({ blockers: _ });
  }
  function yu(y) {
    let { currentLocation: w, nextLocation: k, historyAction: _ } = y;
    if (ze.size === 0) return;
    ze.size > 1 && En(!1, 'A router only supports one blocker at a time');
    let A = Array.from(ze.entries()),
      [W, H] = A[A.length - 1],
      U = v.blockers.get(W);
    if (
      !(U && U.state === 'proceeding') &&
      H({ currentLocation: w, nextLocation: k, historyAction: _ })
    )
      return W;
  }
  function zi(y) {
    let w = [];
    return (
      ot.forEach((k, _) => {
        (!y || y(_)) && (k.cancel(), w.push(_), ot.delete(_));
      }),
      w
    );
  }
  function Ud(y, w, k) {
    if (((p = y), (E = w), (S = k || null), !x && v.navigation === co)) {
      x = !0;
      let _ = wu(v.location, v.matches);
      _ != null && We({ restoreScrollPosition: _ });
    }
    return () => {
      (p = null), (E = null), (S = null);
    };
  }
  function gu(y, w) {
    return (
      (S &&
        S(
          y,
          w.map((_) => Sm(_, v.loaderData))
        )) ||
      y.key
    );
  }
  function Bd(y, w) {
    if (p && E) {
      let k = gu(y, w);
      p[k] = E();
    }
  }
  function wu(y, w) {
    if (p) {
      let k = gu(y, w),
        _ = p[k];
      if (typeof _ == 'number') return _;
    }
    return null;
  }
  function Hd(y) {
    (i = {}), (a = oa(y, l, void 0, i));
  }
  return (
    (L = {
      get basename() {
        return u;
      },
      get future() {
        return s;
      },
      get state() {
        return v;
      },
      get routes() {
        return o;
      },
      get window() {
        return t;
      },
      initialize: Pd,
      subscribe: Ld,
      enableScrollRestoration: Ud,
      navigate: cu,
      fetch: Dd,
      revalidate: Td,
      createHref: (y) => e.history.createHref(y),
      encodeLocation: (y) => e.history.encodeLocation(y),
      getFetcher: du,
      deleteFetcher: Od,
      dispose: _d,
      getBlocker: Id,
      deleteBlocker: vu,
      _internalFetchControllers: ie,
      _internalActiveDeferreds: ot,
      _internalSetRoutes: Hd,
    }),
    L
  );
}
function Jm(e) {
  return (
    e != null &&
    (('formData' in e && e.formData != null) ||
      ('body' in e && e.body !== void 0))
  );
}
function aa(e, t, n, r, l, i, o, a) {
  let u, s;
  if (o) {
    u = [];
    for (let h of t)
      if ((u.push(h), h.route.id === o)) {
        s = h;
        break;
      }
  } else (u = t), (s = t[t.length - 1]);
  let f = Im(l || '.', Om(u, i), ul(e.pathname, n) || e.pathname, a === 'path');
  return (
    l == null && ((f.search = e.search), (f.hash = e.hash)),
    (l == null || l === '' || l === '.') &&
      s &&
      s.route.index &&
      !au(f.search) &&
      (f.search = f.search ? f.search.replace(/^\?/, '?index&') : '?index'),
    r &&
      n !== '/' &&
      (f.pathname = f.pathname === '/' ? n : vn([n, f.pathname])),
    al(f)
  );
}
function Ms(e, t, n, r) {
  if (!r || !Jm(r)) return { path: n };
  if (r.formMethod && !r0(r.formMethod))
    return { path: n, error: be(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: be(400, { type: 'invalid-body' }) }),
    i = r.formMethod || 'get',
    o = e ? i.toUpperCase() : i.toLowerCase(),
    a = xd(n);
  if (r.body !== void 0) {
    if (r.formEncType === 'text/plain') {
      if (!ct(o)) return l();
      let p =
        typeof r.body == 'string'
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((S, E) => {
                let [x, N] = E;
                return (
                  '' +
                  S +
                  x +
                  '=' +
                  N +
                  `
`
                );
              }, '')
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: o,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: p,
        },
      };
    } else if (r.formEncType === 'application/json') {
      if (!ct(o)) return l();
      try {
        let p = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: p,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  Y(
    typeof FormData == 'function',
    'FormData is not available in this environment'
  );
  let u, s;
  if (r.formData) (u = ua(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (u = ua(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (s = Fs(u));
  else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (s = Fs(u));
    } catch {
      return l();
    }
  let f = {
    formMethod: o,
    formAction: a,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (ct(f.formMethod)) return { path: n, submission: f };
  let h = St(n);
  return (
    t && h.search && au(h.search) && u.append('index', ''),
    (h.search = '?' + u),
    { path: al(h), submission: f }
  );
}
function Zm(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function zs(e, t, n, r, l, i, o, a, u, s, f, h, p, S, E, x) {
  let N = x ? Object.values(x)[0] : E ? Object.values(E)[0] : void 0,
    d = e.createURL(t.location),
    c = e.createURL(l),
    m = x ? Object.keys(x)[0] : void 0,
    L = Zm(n, m).filter((R, T) => {
      let { route: F } = R;
      if (F.lazy) return !0;
      if (F.loader == null) return !1;
      if (i)
        return F.loader.hydrate
          ? !0
          : t.loaderData[F.id] === void 0 &&
              (!t.errors || t.errors[F.id] === void 0);
      if (
        qm(t.loaderData, t.matches[T], R) ||
        a.some((ye) => ye === R.route.id)
      )
        return !0;
      let I = t.matches[T],
        X = R;
      return Ds(
        R,
        de(
          {
            currentUrl: d,
            currentParams: I.params,
            nextUrl: c,
            nextParams: X.params,
          },
          r,
          {
            actionResult: N,
            defaultShouldRevalidate:
              o ||
              d.pathname + d.search === c.pathname + c.search ||
              d.search !== c.search ||
              wd(I, X),
          }
        )
      );
    }),
    v = [];
  return (
    f.forEach((R, T) => {
      if (i || !n.some((me) => me.route.id === R.routeId) || s.has(T)) return;
      let F = Vn(p, R.path, S);
      if (!F) {
        v.push({
          key: T,
          routeId: R.routeId,
          path: R.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let I = t.fetchers.get(T),
        X = sa(F, R.path),
        ye = !1;
      h.has(T)
        ? (ye = !1)
        : u.includes(T)
          ? (ye = !0)
          : I && I.state !== 'idle' && I.data === void 0
            ? (ye = o)
            : (ye = Ds(
                X,
                de(
                  {
                    currentUrl: d,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: c,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  { actionResult: N, defaultShouldRevalidate: o }
                )
              )),
        ye &&
          v.push({
            key: T,
            routeId: R.routeId,
            path: R.path,
            matches: F,
            match: X,
            controller: new AbortController(),
          });
    }),
    [L, v]
  );
}
function qm(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function wd(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function Ds(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == 'boolean') return n;
  }
  return t.defaultShouldRevalidate;
}
async function As(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  Y(l, 'No route found in manifest');
  let i = {};
  for (let o in r) {
    let u = l[o] !== void 0 && o !== 'hasErrorBoundary';
    En(
      !u,
      'Route "' +
        l.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.')
    ),
      !u && !wm.has(o) && (i[o] = r[o]);
  }
  Object.assign(l, i), Object.assign(l, de({}, t(l), { lazy: void 0 }));
}
async function xr(e, t, n, r, l, i, o, a, u) {
  u === void 0 && (u = {});
  let s,
    f,
    h,
    p = (x) => {
      let N,
        d = new Promise((c, m) => (N = m));
      return (
        (h = () => N()),
        t.signal.addEventListener('abort', h),
        Promise.race([
          x({ request: t, params: n.params, context: u.requestContext }),
          d,
        ])
      );
    };
  try {
    let x = n.route[e];
    if (n.route.lazy)
      if (x) {
        let N,
          d = await Promise.all([
            p(x).catch((c) => {
              N = c;
            }),
            As(n.route, i, l),
          ]);
        if (N) throw N;
        f = d[0];
      } else if ((await As(n.route, i, l), (x = n.route[e]), x)) f = await p(x);
      else if (e === 'action') {
        let N = new URL(t.url),
          d = N.pathname + N.search;
        throw be(405, { method: t.method, pathname: d, routeId: n.route.id });
      } else return { type: ce.data, data: void 0 };
    else if (x) f = await p(x);
    else {
      let N = new URL(t.url),
        d = N.pathname + N.search;
      throw be(404, { pathname: d });
    }
    Y(
      f !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' +
          n.route.id +
          '" but didn\'t return anything from your `' +
          e +
          '` ') +
        'function. Please return a value or `null`.'
    );
  } catch (x) {
    (s = ce.error), (f = x);
  } finally {
    h && t.signal.removeEventListener('abort', h);
  }
  if (n0(f)) {
    let x = f.status;
    if (Qm.has(x)) {
      let d = f.headers.get('Location');
      if (
        (Y(
          d,
          'Redirects returned/thrown from loaders/actions must have a Location header'
        ),
        !yd.test(d))
      )
        d = aa(new URL(t.url), r.slice(0, r.indexOf(n) + 1), o, !0, d, a);
      else if (!u.isStaticRequest) {
        let c = new URL(t.url),
          m = d.startsWith('//') ? new URL(c.protocol + d) : new URL(d),
          C = ul(m.pathname, o) != null;
        m.origin === c.origin && C && (d = m.pathname + m.search + m.hash);
      }
      if (u.isStaticRequest) throw (f.headers.set('Location', d), f);
      return {
        type: ce.redirect,
        status: x,
        location: d,
        revalidate: f.headers.get('X-Remix-Revalidate') !== null,
        reloadDocument: f.headers.get('X-Remix-Reload-Document') !== null,
      };
    }
    if (u.isRouteRequest)
      throw { type: s === ce.error ? ce.error : ce.data, response: f };
    let N;
    try {
      let d = f.headers.get('Content-Type');
      d && /\bapplication\/json\b/.test(d)
        ? f.body == null
          ? (N = null)
          : (N = await f.json())
        : (N = await f.text());
    } catch (d) {
      return { type: ce.error, error: d };
    }
    return s === ce.error
      ? { type: s, error: new ou(x, f.statusText, N), headers: f.headers }
      : { type: ce.data, data: N, statusCode: f.status, headers: f.headers };
  }
  if (s === ce.error) return { type: s, error: f };
  if (t0(f)) {
    var S, E;
    return {
      type: ce.deferred,
      deferredData: f,
      statusCode: (S = f.init) == null ? void 0 : S.status,
      headers:
        ((E = f.init) == null ? void 0 : E.headers) &&
        new Headers(f.init.headers),
    };
  }
  return { type: ce.data, data: f };
}
function Sr(e, t, n, r) {
  let l = e.createURL(xd(t)).toString(),
    i = { signal: n };
  if (r && ct(r.formMethod)) {
    let { formMethod: o, formEncType: a } = r;
    (i.method = o.toUpperCase()),
      a === 'application/json'
        ? ((i.headers = new Headers({ 'Content-Type': a })),
          (i.body = JSON.stringify(r.json)))
        : a === 'text/plain'
          ? (i.body = r.text)
          : a === 'application/x-www-form-urlencoded' && r.formData
            ? (i.body = ua(r.formData))
            : (i.body = r.formData);
  }
  return new Request(l, i);
}
function ua(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == 'string' ? r : r.name);
  return t;
}
function Fs(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function bm(e, t, n, r, l) {
  let i = {},
    o = null,
    a,
    u = !1,
    s = {};
  return (
    n.forEach((f, h) => {
      let p = t[h].route.id;
      if (
        (Y(!pn(f), 'Cannot handle redirect results in processLoaderData'),
        $n(f))
      ) {
        let S = Or(e, p),
          E = f.error;
        r && ((E = Object.values(r)[0]), (r = void 0)),
          (o = o || {}),
          o[S.route.id] == null && (o[S.route.id] = E),
          (i[p] = void 0),
          u || ((u = !0), (a = md(f.error) ? f.error.status : 500)),
          f.headers && (s[p] = f.headers);
      } else
        dn(f)
          ? (l.set(p, f.deferredData), (i[p] = f.deferredData.data))
          : (i[p] = f.data),
          f.statusCode != null &&
            f.statusCode !== 200 &&
            !u &&
            (a = f.statusCode),
          f.headers && (s[p] = f.headers);
    }),
    r && ((o = r), (i[Object.keys(r)[0]] = void 0)),
    { loaderData: i, errors: o, statusCode: a || 200, loaderHeaders: s }
  );
}
function Os(e, t, n, r, l, i, o, a) {
  let { loaderData: u, errors: s } = bm(t, n, r, l, a);
  for (let f = 0; f < i.length; f++) {
    let { key: h, match: p, controller: S } = i[f];
    Y(
      o !== void 0 && o[f] !== void 0,
      'Did not find corresponding fetcher result'
    );
    let E = o[f];
    if (!(S && S.signal.aborted))
      if ($n(E)) {
        let x = Or(e.matches, p == null ? void 0 : p.route.id);
        (s && s[x.route.id]) || (s = de({}, s, { [x.route.id]: E.error })),
          e.fetchers.delete(h);
      } else if (pn(E)) Y(!1, 'Unhandled fetcher revalidation redirect');
      else if (dn(E)) Y(!1, 'Unhandled fetcher deferred data');
      else {
        let x = It(E.data);
        e.fetchers.set(h, x);
      }
  }
  return { loaderData: u, errors: s };
}
function Is(e, t, n, r) {
  let l = de({}, t);
  for (let i of n) {
    let o = i.route.id;
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (l[o] = t[o])
        : e[o] !== void 0 && i.route.loader && (l[o] = e[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return l;
}
function Or(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Us(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === '/') || {
          id: '__shim-error-route__',
        };
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t,
  };
}
function be(e, t) {
  let { pathname: n, routeId: r, method: l, type: i } = t === void 0 ? {} : t,
    o = 'Unknown Server Error',
    a = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((o = 'Bad Request'),
        l && n && r
          ? (a =
              'You made a ' +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : i === 'defer-action'
            ? (a = 'defer() is not supported in actions')
            : i === 'invalid-body' && (a = 'Unable to encode submission body'))
      : e === 403
        ? ((o = 'Forbidden'),
          (a = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((o = 'Not Found'), (a = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((o = 'Method Not Allowed'),
            l && n && r
              ? (a =
                  'You made a ' +
                  l.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  'so there is no way to handle the request.')
              : l && (a = 'Invalid request method "' + l.toUpperCase() + '"')),
    new ou(e || 500, o, new Error(a), !0)
  );
}
function Bs(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (pn(n)) return { result: n, idx: t };
  }
}
function xd(e) {
  let t = typeof e == 'string' ? St(e) : e;
  return al(de({}, t, { hash: '' }));
}
function e0(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
      ? t.hash !== ''
      : e.hash === t.hash
        ? !0
        : t.hash !== '';
}
function dn(e) {
  return e.type === ce.deferred;
}
function $n(e) {
  return e.type === ce.error;
}
function pn(e) {
  return (e && e.type) === ce.redirect;
}
function t0(e) {
  let t = e;
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  );
}
function n0(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function r0(e) {
  return Wm.has(e.toLowerCase());
}
function ct(e) {
  return Vm.has(e.toLowerCase());
}
async function Hs(e, t, n, r, l, i) {
  for (let o = 0; o < n.length; o++) {
    let a = n[o],
      u = t[o];
    if (!u) continue;
    let s = e.find((h) => h.route.id === u.route.id),
      f = s != null && !wd(s, u) && (i && i[u.route.id]) !== void 0;
    if (dn(a) && (l || f)) {
      let h = r[o];
      Y(h, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await Sd(a, h, l).then((p) => {
          p && (n[o] = p || n[o]);
        });
    }
  }
}
async function Sd(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: ce.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: ce.error, error: l };
      }
    return { type: ce.data, data: e.deferredData.data };
  }
}
function au(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function sa(e, t) {
  let n = typeof t == 'string' ? St(t).search : t.search;
  if (e[e.length - 1].route.index && au(n || '')) return e[e.length - 1];
  let r = hd(e);
  return r[r.length - 1];
}
function Vs(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: i,
    json: o,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function fo(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function l0(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Er(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function i0(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function It(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function o0(e, t) {
  try {
    let n = e.sessionStorage.getItem(gd);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, i] of Object.entries(r || {}))
        i && Array.isArray(i) && t.set(l, new Set(i || []));
    }
  } catch {}
}
function a0(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(gd, JSON.stringify(n));
    } catch (r) {
      En(
        !1,
        'Failed to save applied view transitions in sessionStorage (' + r + ').'
      );
    }
  }
}
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function di() {
  return (
    (di = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    di.apply(this, arguments)
  );
}
const Ed = j.createContext(null),
  kd = j.createContext(null),
  Cd = j.createContext(null),
  Li = j.createContext(null),
  Ti = j.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Nd = j.createContext(null);
function uu() {
  return j.useContext(Li) != null;
}
function u0() {
  return uu() || Y(!1), j.useContext(Li).location;
}
function s0(e, t, n, r) {
  uu() || Y(!1);
  let { navigator: l } = j.useContext(Cd),
    { matches: i } = j.useContext(Ti),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : '/';
  o && o.route;
  let s = u0(),
    f;
  if (t) {
    var h;
    let N = typeof t == 'string' ? St(t) : t;
    u === '/' || ((h = N.pathname) != null && h.startsWith(u)) || Y(!1),
      (f = N);
  } else f = s;
  let p = f.pathname || '/',
    S = p;
  if (u !== '/') {
    let N = u.replace(/^\//, '').split('/');
    S = '/' + p.replace(/^\//, '').split('/').slice(N.length).join('/');
  }
  let E = Vn(e, { pathname: S }),
    x = h0(
      E &&
        E.map((N) =>
          Object.assign({}, N, {
            params: Object.assign({}, a, N.params),
            pathname: vn([
              u,
              l.encodeLocation
                ? l.encodeLocation(N.pathname).pathname
                : N.pathname,
            ]),
            pathnameBase:
              N.pathnameBase === '/'
                ? u
                : vn([
                    u,
                    l.encodeLocation
                      ? l.encodeLocation(N.pathnameBase).pathname
                      : N.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && x
    ? j.createElement(
        Li.Provider,
        {
          value: {
            location: di(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              f
            ),
            navigationType: pe.Pop,
          },
        },
        x
      )
    : x;
}
function c0() {
  let e = g0(),
    t = md(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return j.createElement(
    j.Fragment,
    null,
    j.createElement('h2', null, 'Unexpected Application Error!'),
    j.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? j.createElement('pre', { style: l }, n) : null,
    null
  );
}
const f0 = j.createElement(c0, null);
class d0 extends j.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? j.createElement(
          Ti.Provider,
          { value: this.props.routeContext },
          j.createElement(Nd.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function p0(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = j.useContext(Ed);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    j.createElement(Ti.Provider, { value: t }, r)
  );
}
function h0(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    a = (l = n) == null ? void 0 : l.errors;
  if (a != null) {
    let f = o.findIndex(
      (h) => h.route.id && (a == null ? void 0 : a[h.route.id])
    );
    f >= 0 || Y(!1), (o = o.slice(0, Math.min(o.length, f + 1)));
  }
  let u = !1,
    s = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < o.length; f++) {
      let h = o[f];
      if (
        ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (s = f),
        h.route.id)
      ) {
        let { loaderData: p, errors: S } = n,
          E =
            h.route.loader &&
            p[h.route.id] === void 0 &&
            (!S || S[h.route.id] === void 0);
        if (h.route.lazy || E) {
          (u = !0), s >= 0 ? (o = o.slice(0, s + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((f, h, p) => {
    let S,
      E = !1,
      x = null,
      N = null;
    n &&
      ((S = a && h.route.id ? a[h.route.id] : void 0),
      (x = h.route.errorElement || f0),
      u &&
        (s < 0 && p === 0
          ? (w0('route-fallback', !1), (E = !0), (N = null))
          : s === p &&
            ((E = !0), (N = h.route.hydrateFallbackElement || null))));
    let d = t.concat(o.slice(0, p + 1)),
      c = () => {
        let m;
        return (
          S
            ? (m = x)
            : E
              ? (m = N)
              : h.route.Component
                ? (m = j.createElement(h.route.Component, null))
                : h.route.element
                  ? (m = h.route.element)
                  : (m = f),
          j.createElement(p0, {
            match: h,
            routeContext: { outlet: f, matches: d, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (h.route.ErrorBoundary || h.route.errorElement || p === 0)
      ? j.createElement(d0, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: S,
          children: c(),
          routeContext: { outlet: null, matches: d, isDataRoute: !0 },
        })
      : c();
  }, null);
}
var ca = (function (e) {
  return (
    (e.UseBlocker = 'useBlocker'),
    (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator'),
    (e.UseNavigateStable = 'useNavigate'),
    (e.UseRouteId = 'useRouteId'),
    e
  );
})(ca || {});
function m0(e) {
  let t = j.useContext(kd);
  return t || Y(!1), t;
}
function v0(e) {
  let t = j.useContext(Ti);
  return t || Y(!1), t;
}
function y0(e) {
  let t = v0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Y(!1), n.route.id;
}
function g0() {
  var e;
  let t = j.useContext(Nd),
    n = m0(ca.UseRouteError),
    r = y0(ca.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
const $s = {};
function w0(e, t, n) {
  !t && !$s[e] && ($s[e] = !0);
}
function x0(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: l = pe.Pop,
    navigator: i,
    static: o = !1,
    future: a,
  } = e;
  uu() && Y(!1);
  let u = t.replace(/^\/*/, '/'),
    s = j.useMemo(
      () => ({
        basename: u,
        navigator: i,
        static: o,
        future: di({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, i, o]
    );
  typeof r == 'string' && (r = St(r));
  let {
      pathname: f = '/',
      search: h = '',
      hash: p = '',
      state: S = null,
      key: E = 'default',
    } = r,
    x = j.useMemo(() => {
      let N = ul(f, u);
      return N == null
        ? null
        : {
            location: { pathname: N, search: h, hash: p, state: S, key: E },
            navigationType: l,
          };
    }, [u, f, h, p, S, E, l]);
  return x == null
    ? null
    : j.createElement(
        Cd.Provider,
        { value: s },
        j.createElement(Li.Provider, { children: n, value: x })
      );
}
new Promise(() => {});
function S0(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: j.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: j.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: j.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pi() {
  return (
    (pi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pi.apply(this, arguments)
  );
}
const E0 = '6';
try {
  window.__reactRouterVersion = E0;
} catch {}
function k0(e, t) {
  return Xm({
    basename: t == null ? void 0 : t.basename,
    future: pi({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: vm({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || C0(),
    routes: e,
    mapRouteProperties: S0,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function C0() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = pi({}, t, { errors: N0(t.errors) })), t;
}
function N0(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === 'RouteErrorResponse')
      n[r] = new ou(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === 'Error') {
      if (l.__subType) {
        let i = window[l.__subType];
        if (typeof i == 'function')
          try {
            let o = new i(l.message);
            (o.stack = ''), (n[r] = o);
          } catch {}
      }
      if (n[r] == null) {
        let i = new Error(l.message);
        (i.stack = ''), (n[r] = i);
      }
    } else n[r] = l;
  return n;
}
const R0 = j.createContext({ isTransitioning: !1 }),
  j0 = j.createContext(new Map()),
  P0 = 'startTransition',
  Ws = lp[P0],
  _0 = 'flushSync',
  Qs = mm[_0];
function L0(e) {
  Ws ? Ws(e) : e();
}
function kr(e) {
  Qs ? Qs(e) : e();
}
class T0 {
  constructor() {
    (this.status = 'pending'),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === 'pending' && ((this.status = 'resolved'), t(r));
        }),
          (this.reject = (r) => {
            this.status === 'pending' && ((this.status = 'rejected'), n(r));
          });
      }));
  }
}
function M0(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, i] = j.useState(n.state),
    [o, a] = j.useState(),
    [u, s] = j.useState({ isTransitioning: !1 }),
    [f, h] = j.useState(),
    [p, S] = j.useState(),
    [E, x] = j.useState(),
    N = j.useRef(new Map()),
    { v7_startTransition: d } = r || {},
    c = j.useCallback(
      (R) => {
        d ? L0(R) : R();
      },
      [d]
    ),
    m = j.useCallback(
      (R, T) => {
        let {
          deletedFetchers: F,
          unstable_flushSync: I,
          unstable_viewTransitionOpts: X,
        } = T;
        F.forEach((me) => N.current.delete(me)),
          R.fetchers.forEach((me, qe) => {
            me.data !== void 0 && N.current.set(qe, me.data);
          });
        let ye =
          n.window == null ||
          typeof n.window.document.startViewTransition != 'function';
        if (!X || ye) {
          I ? kr(() => i(R)) : c(() => i(R));
          return;
        }
        if (I) {
          kr(() => {
            p && (f && f.resolve(), p.skipTransition()),
              s({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: X.currentLocation,
                nextLocation: X.nextLocation,
              });
          });
          let me = n.window.document.startViewTransition(() => {
            kr(() => i(R));
          });
          me.finished.finally(() => {
            kr(() => {
              h(void 0), S(void 0), a(void 0), s({ isTransitioning: !1 });
            });
          }),
            kr(() => S(me));
          return;
        }
        p
          ? (f && f.resolve(),
            p.skipTransition(),
            x({
              state: R,
              currentLocation: X.currentLocation,
              nextLocation: X.nextLocation,
            }))
          : (a(R),
            s({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: X.currentLocation,
              nextLocation: X.nextLocation,
            }));
      },
      [n.window, p, f, N, c]
    );
  j.useLayoutEffect(() => n.subscribe(m), [n, m]),
    j.useEffect(() => {
      u.isTransitioning && !u.flushSync && h(new T0());
    }, [u]),
    j.useEffect(() => {
      if (f && o && n.window) {
        let R = o,
          T = f.promise,
          F = n.window.document.startViewTransition(async () => {
            c(() => i(R)), await T;
          });
        F.finished.finally(() => {
          h(void 0), S(void 0), a(void 0), s({ isTransitioning: !1 });
        }),
          S(F);
      }
    }, [c, o, f, n.window]),
    j.useEffect(() => {
      f && o && l.location.key === o.location.key && f.resolve();
    }, [f, p, l.location, o]),
    j.useEffect(() => {
      !u.isTransitioning &&
        E &&
        (a(E.state),
        s({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: E.currentLocation,
          nextLocation: E.nextLocation,
        }),
        x(void 0));
    }, [u.isTransitioning, E]),
    j.useEffect(() => {}, []);
  let C = j.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (R) => n.navigate(R),
        push: (R, T, F) =>
          n.navigate(R, {
            state: T,
            preventScrollReset: F == null ? void 0 : F.preventScrollReset,
          }),
        replace: (R, T, F) =>
          n.navigate(R, {
            replace: !0,
            state: T,
            preventScrollReset: F == null ? void 0 : F.preventScrollReset,
          }),
      }),
      [n]
    ),
    L = n.basename || '/',
    v = j.useMemo(
      () => ({ router: n, navigator: C, static: !1, basename: L }),
      [n, C, L]
    );
  return j.createElement(
    j.Fragment,
    null,
    j.createElement(
      Ed.Provider,
      { value: v },
      j.createElement(
        kd.Provider,
        { value: l },
        j.createElement(
          j0.Provider,
          { value: N.current },
          j.createElement(
            R0.Provider,
            { value: u },
            j.createElement(
              x0,
              {
                basename: L,
                location: l.location,
                navigationType: l.historyAction,
                navigator: C,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              l.initialized || n.future.v7_partialHydration
                ? j.createElement(z0, {
                    routes: n.routes,
                    future: n.future,
                    state: l,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function z0(e) {
  let { routes: t, future: n, state: r } = e;
  return s0(t, void 0, r, n);
}
var Ks;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(Ks || (Ks = {}));
var Ys;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Ys || (Ys = {}));
function Rd(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var l = e.length;
      for (t = 0; t < l; t++)
        e[t] && (n = Rd(e[t])) && (r && (r += ' '), (r += n));
    } else for (n in e) e[n] && (r && (r += ' '), (r += n));
  return r;
}
function D() {
  for (var e, t, n = 0, r = '', l = arguments.length; n < l; n++)
    (e = arguments[n]) && (t = Rd(e)) && (r && (r += ' '), (r += t));
  return r;
}
const su = ({ className: e, type: t, onClickEvent: n, children: r, ...l }) =>
    g.jsx('button', {
      className: D(
        'inline-block px-7 py-3 bg-cyan-400 text-black rounded-3xl font-semibold text-base tracking-widest no-underline',
        'hover:shadow-[0_0_50px_rgba(0,_128,_225,_1.8)] hover:text-white hover:bg-[rgba(128,215,237,0.94)] ',
        e
      ),
      onClick: () => n(),
      children: r,
    }),
  or = () => {
    const [e, t] = j.useState(!1),
      n = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Experience', link: '/experience' },
        { name: 'Skill', link: '/skill' },
        { name: 'Project', link: '/project' },
        { name: 'Contact', link: '/contact' },
      ],
      r = `inline-block text-2xl text-white 
  text-decoration-none font-medium ml-9 transition duration-300
  hover:text-[#0ef]
    `;
    return (
      j.useEffect(
        () => (
          t(!0),
          () => {
            setTimeout(() => t(!1), 5e3);
          }
        ),
        []
      ),
      g.jsx(g.Fragment, {
        children: g.jsxs('header', {
          className: D(
            'fixed top-0 left-0 w-full px-5 py-3 bg-transparent z-10 flex items-center justify-between'
          ),
          children: [
            g.jsxs('a', {
              href: '/',
              children: [
                g.jsx('div', {
                  className: D(
                    ' relative text-2xl text-violet-50 font-semibold'
                  ),
                  children: 'Portfolio',
                }),
                ' ',
              ],
            }),
            g.jsx('nav', {
              className: D('flex justify-around items-center gap-4'),
              children: n.map((l, i) =>
                g.jsx(
                  'a',
                  {
                    href: l.link,
                    className: D(
                      `${r} ${e ? 'animate-fade-down animate-once animate-ease-in' : ''}`
                    ),
                    children: l.name,
                  },
                  `${i}-${l.name}`
                )
              ),
            }),
          ],
        }),
      })
    );
  },
  D0 = ({ children: e, onClickEvent: t, classname: n }) =>
    g.jsx(g.Fragment, {
      children: g.jsx('button', {
        className: D(
          `inline-block px-2 py-2 m-2 bg-transparent text-black font-semibold text-base tracking-widest no-underline 
          border-2 border-black rounded-full`,
          `hover:shadow-[0_0_50px_rgba(0,_128,_225,_1.8)] hover:text-white
           hover:bg-[rgba(128,215,237,0.94)] hover:border-green-300`,
          n
        ),
        onClick: () => t(),
        children: e,
      }),
    }),
  A0 = '/assets/head-3-dmO5SA.jpg',
  jd = () => {
    const [e, t] = j.useState(!1);
    return (
      j.useEffect(
        () => (
          t(!0),
          () => {
            setTimeout(() => t(!1), 7e3);
          }
        ),
        []
      ),
      g.jsx('div', {
        className: D(`w-[15rem] h-[15rem] rounded-full border-spacing-7p-px 
        bg-gradient-to-r from-purple-500 to-pink-500 flex 
        items-center justify-center shadow-[0_0_50px_rgba(0,_128,_225,_1.8)]
        ${e ? 'animate-jump-in' : ''}`),
        children: g.jsx('img', {
          src: A0,
          alt: '',
          className: D('rounded-full w-[14rem] h-[14rem] mx-auto'),
        }),
      })
    );
  },
  F0 = (e) =>
    j.createElement(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        width: 24,
        height: 24,
        viewBox: '0 0 200 200',
        className: 'fill: rgba(0, 0, 0, 1); transform: ; msFilter:;',
        style: { borderRadius: '50%' },
        ...e,
      },
      j.createElement('path', {
        fill: '#FFF',
        d: 'M91 201H1.028V1.09h199.819V201H91M50.12 77.924c-.174.216-.35.43-.68.784 0 0-.185.377-1.15.328l-.948-15.132c-11.834-2.143-18.841 1.404-25.326 13.121h12.311v61.261h13.056c.3-5.696.58-10.976 1.401-15.639 16.103 21.111 46.52 21.366 61.628.465h41.855v15.297h13.458v-15.353h15.055v-11.242h-15.391v-48.34c-1.014.073-1.674-.084-1.931.169-15.774 15.494-31.515 31.021-47.267 45.478.224-2.714.447-5.427.815-9.004-.657-23.762-22.314-41.023-45.474-35.83-8.392 1.882-16.303 5.256-20.545 13.718 0 0-.035-.068-.867-.08z',
        opacity: 1,
      }),
      j.createElement('path', {
        fill: '#6C6C6C',
        d: 'M116.199 110.189c15.744-15.525 31.485-31.052 47.259-46.546.257-.253.917-.096 1.93-.169v48.34h15.392v11.242h-15.055v15.353h-13.458v-15.297c-14.34 0-28.097 0-42.69-.023-1.916-.094-2.996-.166-4.705-.28l11.327-12.62m24.726-8.764c-3.273 3.205-6.547 6.41-10.531 10.313h21.426v-21.7c-4.043 4.235-7.219 7.561-10.895 11.387z',
        opacity: 1,
      }),
      j.createElement('path', {
        fill: '#FE7A04',
        d: 'M116.195 109.655c-3.61 4.56-7.223 8.587-11.323 13.155 1.71.113 2.789.185 4.27.301-13.839 20.902-44.255 20.647-60.749-.97-8.31-13.855-9.413-27.114.031-40.295.53-.74.566-1.832.831-2.76 0 0 .184-.378.488-.278.605-.223.907-.547 1.209-.87 0 0 .035.067.36.073 1.008-.452 1.72-.874 2.372-1.374 11.074-8.478 25.105-9.246 36.44-1.28 3.271 2.3 5.352 6.293 7.631 9.5-8.823-8.792-20.844-10.624-30.738-4.64-9.579 5.793-13.986 17.421-10.645 28.088 3.44 10.988 13.909 17.762 25.867 16.738 11.612-.995 19.51-9.71 22.262-24.065 4.427 0 8.394.001 12.361.003a561.98 561.98 0 00-.667 8.674z',
        opacity: 1,
      }),
      j.createElement('path', {
        fill: '#706F6F',
        d: 'M48.773 79.06c.217.954.18 2.047-.349 2.786-9.444 13.18-8.34 26.44-.302 39.985-.159 5.479-.438 10.759-.74 16.455H34.328v-61.26h-12.31C28.5 65.307 35.507 61.76 47.341 63.903c.314 5.005.631 10.069 1.43 15.157z',
        opacity: 1,
      }),
      j.createElement('path', {
        fill: '#6D6B6A',
        d: 'M116.934 100.549c-4.04.43-8.006.428-12.527.047-2.47-5.496-4.387-10.613-6.304-15.729-2.627-3.217-4.708-7.21-7.98-9.51-11.334-7.966-25.365-7.198-36.44 1.28-.652.5-1.363.922-2.401 1.35 3.947-8.444 11.858-11.818 20.25-13.7 23.16-5.193 44.817 12.068 45.402 36.262zM50.536 77.93c.114.33-.188.655-.715.81-.05-.385.125-.6.715-.81z',
        opacity: 1,
      }),
      j.createElement('path', {
        fill: '#FEFEFE',
        d: 'M141.175 101.175c3.426-3.576 6.602-6.902 10.645-11.136v21.699h-21.426c3.984-3.902 7.258-7.108 10.781-10.563z',
        opacity: 1,
      }),
      j.createElement('path', {
        fill: '#FFFEFD',
        d: 'M97.755 84.858c2.265 5.125 4.182 10.242 6.193 15.74-2.2 14.734-10.097 23.45-21.709 24.445-11.958 1.024-22.427-5.75-25.867-16.738-3.34-10.667 1.066-22.295 10.645-28.088 9.894-5.984 21.915-4.152 30.738 4.64z',
        opacity: 1,
      })
    ),
  O0 = (e) =>
    j.createElement(
      'svg',
      {
        id: 'Layer_1',
        xmlns: 'http://www.w3.org/2000/svg',
        xmlnsXlink: 'http://www.w3.org/1999/xlink',
        x: '0px',
        y: '0px',
        width: 24,
        height: 24,
        viewBox: '0 0 24 24',
        enableBackground: 'new 0 0 400 400',
        xmlSpace: 'preserve',
        style: { borderRadius: '50%' },
        ...e,
      },
      j.createElement('image', {
        id: 'image0',
        width: 24,
        height: 24,
        x: 0,
        y: 0,
        xlinkHref:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQBAMAAABykSv/AAAAIGNIUk0AAHomAACAhAAA+gAAAIDo AAB1MAAA6mAAADqYAAAXcJy6UTwAAAAeUExURROrZyGuazq3e1zDkX7PqKXcwcjo1+Dy6fP69v// /wSp2b8AAAABYktHRAnx2aXsAAAAB3RJTUUH6AYNARM0CnDBIgAACadJREFUeNrtnctf20YQx7Um 7XllQ3s1ONAezTPtzYRHy40EYuCYACE+Ni/wNU0wPrfF0n9byxDAD80+JM1oxXwPbT+fxvrMLz/N 7Eo72vU8hmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEeEXIAdRSJFAz+6d8w+G9B HZKNiij02srmq7c3vNrcWIpkSerATBFzq28vwiGCztu9OaeE+F5ppXnRDSfQOd2sOmOLqDXbYTy9 0yUXhAivsn0RggSdk0XPpw5URXm7G6oJTmapAwWR3sqZhoyIy408F+PygaaMiE95NUV4T98Z6Oib 8vx2zMwZYk0nO4Yy5TiPQkpaWT7CSZU67DHKZrfV3e21SB34MHLKTkcYXNZzVbwqbTsdfXrr1MHf IyuWftzeXbnxJIEfufLENj/uPalLag0R5VZCHWF4nYdBXphMS+L4Rv9QL/5IQUcYfiUXstBNRUhw TFu6xEwqMiIlL0mFlFppCQmvKUuXOExNR5TwdELWUtQRhnRpMp2qjjB4QaTDTzqij3JZpRHyLGUd YfiRQoaY7qYuJFiXBEJaqevo1+AqvpCFDHSE4Rt0HZX0b6wB2M8m8s9sdIRfkYWkNscaA3cwkWnO TYa5lJhCssn0GzDzPcVJ7zi9KpoOkf6Y/pAPaELK7UyF4FmSrSFh+HcxDOlbUi+GIWG4WwxDwmtZ EENeoAjxi2JIloM6piHeUUEMyW7ai2xIVs8h94bgdKmk/CqLzpBfCmJIqV0MQ9JbRSA2xKL2Bled 8/Pzq6tcGeJNdQ1ldE43l+cilleaFxp/HssQo2lW8Hk/apD1fClv2n5rW2eqvwgkQ7yWiRl7syPr HUKUV2FbkAZ1k1G9s1+d0H/pe6UtSAqWIb9p67h8HnuRWvyqClaGiLamjOBExq+iSRHboYZlyA+6 OvYUAa1OVoJliO6d1XuuvNL0RG+xDNG8swK1Ds97OsETrJKlWbN66zqLzHKCJ1iG6N1Z2p0Y86Oe oGWI1p0VvNRe9B9VgmbIEx1DPupHM/ImHM0QrUcqo3aS4cUiNEN0ZvA9s27kqQc3K54hUxoJYrr8 N3OfJniG/KQWYt7Od/dKBs8QjddAFuszd0t4eIZ4baUQm16++VtD8HSoi+83q+seIhsi1Cli13sx jZwh3o5Kh+1S7DPcDFHOT4K65ZWnuqiGKFPkvfWlF1ANUaWItSH9EozafKJKkSTNCrOYQlqZGYKL aqKF1aqQGNVTbl6+LVIhFE+5doM6BUewEKpWcGNEF9TRk9QB6qIYDvEaxZKiGA7r1PHpIn4FdfxH HZ8+cK6/ltTxadMuxp2lGNfdGUQU6yJvJHV8ugj4HWOdOj59wAnKNXV0BoBF672kDk8fsGi5MvH1 FEXLnXmWYqb1L3V0BoAzLYeGdbj6NqjDM2CnICkCVl+XUgSsvi6NIiUoRZx5Wvfg6htUqaMzAJr7 ujTRAocR7O9RkwAOIy7lOjiJ36UOzgRoPKxTB2dCqyDjOjQeOlW0oPe+ziyLRJSLUrSg58PX1MGZ AH2L1KAOzgRohlKnDs4A8WO8jkBSR2ci5GdgGKEOzkgIMNVyaGEEXuRx6jkXmjM6NR5Cc0anxkNI yF9OCTmKF7JLHdujFCJb8UIa1MEZ0X4EQurUsbGQYZx6zQgKkdSxmQA8sgfUsbGQEZx6HHkUjhRG CN9aLCQRRRkQH8MUJSyMkDp1bCbIogiBVt4a1LGlJWSXOjYjjooiZCdeiFMLVsV5ZQq8xP7ikhBo WeEf6uCMhBRmoQcQ4lTjA9Su5dY8HlqerlIHl5aQBnVwJkC9mbvUwZkA9aI4NSKWuvFC3FrWbRdk IAFbAaljM+KoKPX394LUX7CB2aHvecA+p/ALdXQmFKbJH/zsQlJHZwD4GWKDOjoDwJ0rXMp2cLsd pyYp0IjoVLaDW1fUqaPTBxxInPrsDdwpwaUkqUBCXEoSeOegOnV4BkD116mRZAcS4lA7NvxBu0tr u/DGbQ4VYHh7LYcKMFy2XPoYESxbLt1b8KaADn1CDe+C5FDdUmym587qbgkW4s5WYdAnCxHubISk 2ALUmY0aVfsWu5PuqsMDndmHTrGZadhD3J47GUeKe8uVpxKhOnwkwZkC4gRTifKgIest08UM6oba 0JJoMktEC3ey1lJZ8sZSxwzyHufKE3osT4cfHEKKaYn6NK5jq+sODoDGtESZJGFgM+Oq3FwW05Ij lRCrSfDtCVCIlihHEqt8vztZHNESjYPFenVpds37g6wws6StVmJ0sFjf5QdHiyFaonP43rH2kXUR aw9LRR1NiM5xiNqHCEbMBw9/imeJugD36ej/xT486Q3XEq0j5q9nNa9Wbo38Es0SjaOsBglflToX Kx2M3ZZ1LCVa91ZfiY4n5cPxH6JZIo+0hISfqqraJcf9QLVE794Kw0vV+Y6Vyac2o1micbbjrZJ1 T8ZeRXjTMadP41miVbcGIR1XYy9SWuvG/QzLEs26NVDyadGb9IrI9yoH3fhfYVmiWbduOF2S3tAd 1i8BotYEL4GWJdr3VkTnZKkfuu/7nhT9f/U11bYv4J+gWaJ7sPl3Lk+X52Z9X0jfn1tuvlP/AC1L 2oZKwqvO+dtms3l2dnGl88fRLNE57ng0NqM/jWWJ9lBiC5olRuluA5IlQu+0eRcsaRXEEpt0z6cl g5e1RbBEdcijO5ZMdQtiSfYVmC0x5TB5qPmw5EnmljQKYgnah5oZWxI0JJaSbAsXXv+XyLRwBQ00 Idlagto/kOGMC/eIdPEsMyHI7XilVkY6rqu4QrRW4mwwWbxLBZnNqEjQepvJqGjVB5KUheRxj2HZ LJUM0UpdR4KOwiRCUh/fESdZQ8i15LEPQdfRnW7lIvxYoNJO88ZSraFmyUw3PR20nzilN+f6ICl1 CHGQXMKAb5JUyITmGDt6us042Xky0q5kqcO0izAD5Hw3sQ6jhrXsSKwkeGnUQpgdSUf4Y0mt4Dur STwJ7JrRM0Ek8SQ/fvSR1p4Ee0BLFAHCMuODvVzJ6COnNVpNxrjM40elFXMlyqZBEqTYNru9ghNl GycNQqy2DXT0cpceD5iCO+Qe2nG6mK9yNYJ4eqGlo5NnOwZCPLF1rpRxvp9zGTeUt2BXOifkDx96 +J5YacZp6ZxuVL18FqtJCL+2dTae98Hn/SXqR1pTJf1wyyubzbPzi6uIzvnn0/2N2Zv/4R5Rm+zc XK1W6//Td1LBHX7UwRwhfXcSIwZJHQDDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzD 5J//AfJ13fqTQAkyAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI0LTA2LTEzVDAxOjE5OjUyKzAwOjAw XP2zkgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNC0wNi0xM1QwMToxOTo1MiswMDowMC2gCy4AAAAo dEVYdGRhdGU6dGltZXN0YW1wADIwMjQtMDYtMTNUMDE6MTk6NTIrMDA6MDB6tSrxAAAAAElFTkSu QmCC',
      })
    ),
  I0 = () => {
    const [e, t] = j.useState(!1),
      n = (i) => {
        window.open(i, '_blank');
      },
      r = () => {},
      l = [
        {
          name: 'GitHub',
          SVGElement: g.jsx(g.Fragment, {
            children: g.jsx('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '24',
              height: '24',
              viewBox: '0 0 24 24',
              className: 'fill: rgba(0, 0, 0, 1);transform: ;msFilter:;',
              children: g.jsx('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d: 'M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z',
              }),
            }),
          }),
          link: 'https://github.com/wuharry',
        },
        {
          name: 'Gmail',
          SVGElement: g.jsx('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            className: 'fill: rgba(0, 0, 0, 1);transform: ;msFilter:;',
            children: g.jsx('path', {
              d: 'm18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z',
            }),
          }),
          link: 'mailto:whw880218we@gmail.com',
        },
        {
          name: 'Linkedin',
          SVGElement: g.jsx('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            className: 'fill: rgba(0, 0, 0, 1);transform: ;msFilter:;',
            children: g.jsx('path', {
              d: 'M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z',
            }),
          }),
          link: 'https://www.linkedin.com/feed/',
        },
        {
          name: 'CakeResume',
          SVGElement: g.jsx(O0, {}),
          link: 'https://www.cakeresume.com/dashboard',
        },
        {
          name: 'Telegram',
          SVGElement: g.jsx('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            className: 'fill: rgba(0, 0, 0, 1);transform: ;msFilter:;',
            children: g.jsx('path', {
              d: 'm20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z',
            }),
          }),
          link: 'https://web.telegram.org/a/',
        },
        {
          name: '104Bank',
          SVGElement: g.jsx(F0, {}),
          link: 'https://pda.104.com.tw/profile/share/8sw2sYtjxtWwHu7cKUoGcgPZdo9ocnmu',
        },
      ];
    return (
      j.useEffect(
        () => (
          t(!0),
          () => {
            setTimeout(() => t(!1), 7e3);
          }
        ),
        []
      ),
      g.jsxs('div', {
        className:
          'flex bg-slate-700 flex-col items-center justify-center w-full h-full min-h-screen',
        children: [
          g.jsx('div', { children: g.jsx(or, {}) }),
          g.jsxs('section', {
            className: 'mt-14 mb-10 flex justify-evenly',
            children: [
              g.jsxs('div', {
                className: D('flex justify-start flex-col'),
                children: [
                  g.jsx('h3', {
                    className: D(
                      `text-white text-3xl font-medium ${e ? 'animate-fade-down animate-once animate-ease-in' : ''}`
                    ),
                    children: 'Hello 你好',
                  }),
                  g.jsx('h1', {
                    className: D(
                      `text-white text-4xl font-bold mx-0 my-1 ${e ? 'animate-fade-right animate-once animate-ease-in' : ''}`
                    ),
                    children: '我是 吳浩維',
                  }),
                  g.jsx('h3', {
                    className: D(
                      `text-white text-3xl font-medium ${e ? 'animate-fade-up animate-once animate-ease-in' : ''}`
                    ),
                    children: '我是一名前端工程師',
                  }),
                  g.jsxs('div', {
                    className: D(
                      `${e ? 'animate-fade-left animate-once animate-ease-in' : ''}`
                    ),
                    children: [
                      g.jsx('p', {
                        className: 'text-gray-300 mt-2',
                        children: '關於我：',
                      }),
                      g.jsx('p', {
                        className: 'text-gray-300 mt-4',
                        children:
                          '充滿熱情的前端工程師，擁有 1 年以上前端開發經驗，尋求新的挑戰。',
                      }),
                      g.jsxs('p', {
                        className: 'text-gray-300 mt-4',
                        children: [
                          '熟悉 JavaScript、React 和 Linux 系統。',
                          '有解決問題的能力，對程式有高品質要求，並善於與他人溝通,合作。',
                        ],
                      }),
                      g.jsx('p', {
                        className: 'text-gray-300 mt-4',
                        children: '渴望學習和成長，始終追求卓越。',
                      }),
                      g.jsx('p', {
                        className: 'text-gray-300 mt-2',
                        children: '聯絡方式:',
                      }),
                    ],
                  }),
                  g.jsx('div', {
                    children: l.map((i, o) =>
                      g.jsx(
                        D0,
                        {
                          onClickEvent: () => n(i.link),
                          classname: D(
                            `${e ? `animate-fade animate-once animate-delay-[${o}s] animate-ease-in` : ''}`
                          ),
                          children: i.SVGElement,
                        },
                        `${i.name}-${o}`
                      )
                    ),
                  }),
                ],
              }),
              g.jsx('div', {
                className: D('felx justify-end ml-10'),
                children: g.jsx(jd, {}),
              }),
            ],
          }),
          g.jsx('div', {
            className: D(
              'flex justify-start items-center relative right-[28.5rem]'
            ),
            children: g.jsx(su, {
              className: D(
                ` ${e ? 'animate-fade animate-once animate-delay-[1ms] animate-ease-in' : ''}`
              ),
              type: '',
              onClickEvent: r,
              children: '關於我',
            }),
          }),
        ],
      })
    );
  },
  U0 = () => {
    const [e, t] = j.useState(!1);
    return (
      j.useEffect(
        () => (
          t(!0),
          () => {
            setTimeout(() => t(!1), 7e3);
          }
        ),
        []
      ),
      g.jsxs('div', {
        className:
          'flex bg-slate-700 flex-col items-center justify-center w-full h-full min-h-screen',
        children: [
          g.jsx(or, {}),
          g.jsxs('div', {
            className: D('w-full flex justify-evenly items-center gap-1'),
            children: [
              g.jsx(jd, {}),
              g.jsxs('section', {
                className: D('mt-14 mb-10 flex flex-col justify-between'),
                children: [
                  g.jsxs('div', {
                    className: D(`${e ? 'animate-fade-down' : ''}`),
                    children: [
                      g.jsx('h1', {
                        className: D('text-white text-4xl font-bold mx-0 my-1'),
                        children: '我是 吳浩維',
                      }),
                      g.jsx('h3', {
                        className: D('text-white text-3xl font-medium '),
                        children: '我是一名前端工程師',
                      }),
                    ],
                  }),
                  g.jsxs('div', {
                    className: D('mt-4'),
                    children: [
                      g.jsxs('div', {
                        className: D(`${e ? 'animate-fade-right' : ''}`),
                        children: [
                          g.jsx('h2', {
                            className:
                              'text-gray-300 text-2xl font-medium mt-4',
                            children: '簡介：',
                          }),
                          g.jsx('p', {
                            className: 'text-gray-300 mt-4',
                            children:
                              '畢業於勤益科技大學資訊工程系。在校期間，我學習了 HTML、CSS 等前端基礎知識，了解網頁結構和美化的撰寫方式。',
                          }),
                        ],
                      }),
                      g.jsxs('div', {
                        className: D(
                          `${e ? 'animate-fade-right animate-delay-[1ms]' : ''}`
                        ),
                        children: [
                          g.jsx('h2', {
                            className:
                              'text-gray-300 text-2xl font-medium mt-4',
                            children: '學習與成長：',
                          }),
                          g.jsx('p', {
                            className: 'text-gray-300 mt-4',
                            children:
                              '我熱衷於學習和交流，積極與同學探討問題，尋求解決方案，並解決問題。',
                          }),
                          g.jsx('p', {
                            className: 'text-gray-300 mt-4',
                            children:
                              '這很好的鍛煉了自己的溝通能力和團隊合作能力，也讓我養成了終身學習的習慣。',
                          }),
                          g.jsx('p', {
                            className: 'text-gray-300 mt-4',
                            children:
                              '即使畢業後我也在持續精進前端技能，深入研究 JavaScript、React.js 等框架和庫，並創作了仿 IG 頁面、個人網站',
                          }),
                        ],
                      }),
                      g.jsxs('div', {
                        className: D(
                          `${e ? 'animate-fade-right animate-delay-[2ms]' : ''}`
                        ),
                        children: [
                          g.jsx('h2', {
                            className:
                              'text-gray-300 text-2xl font-medium mt-4',
                            children: '工作經驗：',
                          }),
                          g.jsx('p', {
                            className: 'text-gray-300 mt-4',
                            children:
                              '曾在必礦科技擔任過一年的前端工程師，積累了一線開發經驗。',
                          }),
                          g.jsx('p', {
                            className: 'text-gray-300 mt-4',
                            children:
                              '在工作中，我遇到問題時會積極尋求解決方案，並不斷學習新知識和技能。不斷學習新知識和技能，以提升工作效率和質量。',
                          }),
                        ],
                      }),
                      g.jsxs('div', {
                        className: D(
                          `${e ? 'animate-fade-right animate-delay-[3ms]' : ''}`
                        ),
                        children: [
                          g.jsx('h2', {
                            className:
                              'text-gray-300 text-2xl font-medium mt-4',
                            children: '優勢：',
                          }),
                          g.jsxs('ul', {
                            className: 'list-disc text-white',
                            children: [
                              g.jsx('li', {
                                className: 'ml-8',
                                children: g.jsx('p', {
                                  className: 'text-gray-300 mt-4',
                                  children:
                                    '積極主動：熱情投入工作，積極承擔責任，遇到問題不逃避，主動尋求解決方案。',
                                }),
                              }),
                              g.jsx('li', {
                                className: 'ml-8',
                                children: g.jsx('p', {
                                  className: 'text-gray-300 mt-4',
                                  children:
                                    '學習能力強：善於學習新知識和技能，保持終身學習的態度，不斷提升自身能力。',
                                }),
                              }),
                              g.jsx('li', {
                                className: 'ml-8',
                                children: g.jsx('p', {
                                  className: 'text-gray-300 mt-4',
                                  children:
                                    '善於溝通協作：溝通能力強，團隊合作精神佳，能夠與同事高效協作，完成工作任務。',
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  B0 = ({ jobexperience: e }) => {
    const {
      companyName: t,
      jobTitle: n,
      time: r,
      projectName: l,
      description: i,
    } = e;
    return g.jsxs('div', {
      className:
        D(`block max-w-md p-6 max-h-auto bg-white border border-gray-200 
        rounded-lg shadow-md shadow-white animate-fade-left animate-delay-[1000ms]`),
      children: [
        g.jsx('h4', {
          className: D('mb-2 text-xl font-bold tracking-tight text-blue-500'),
          children: r,
        }),
        g.jsxs('h5', {
          className: D('mb-2 text-2xl font-bold  text-gray-900 tracking-wide'),
          children: ['companyName: ', t],
        }),
        g.jsxs('h4', {
          className: D('mb-2 text-xl font-bold tracking-tight text-gray-900'),
          children: ['jobTitle: ', n],
        }),
        g.jsxs('p', {
          className: D('font-normal text-gray-700 '),
          children: ['ProjectName: ', l],
        }),
        g.jsx('p', {
          className: D('font-normal text-gray-700 '),
          children: 'contribution:',
        }),
        Array.isArray(i)
          ? g.jsx('ul', {
              className: D('list-disc flex flex-col items-baseline'),
              children: i.map((o, a) =>
                g.jsx('li', { className: 'pl-[10px]', children: o }, a)
              ),
            })
          : g.jsx('p', { children: i }),
      ],
    });
  },
  H0 = [
    {
      companyName: '英業達Inventec',
      jobTitle: 'MES Frontend Engineer',
      time: '2022/10 - 2023/05',
      projectName: '工廠生產線站台系統',
      description: [
        '新站台後端功能的開發',
        '維護舊站台功能,添加輸入防呆機制以防人為輸入錯誤',
        '協助站台資料錯誤的除錯',
      ],
    },
    {
      companyName: 'PGTalk必礦科技',
      jobTitle: 'Frontend Engineer',
      time: '2023/05 - now',
      projectName: '亞通兌點後台',
      description: [
        '符合PM的需求以及SA文件去開發新的功能跟頁面',
        '根據PM需求開發出客製化的時間選擇器',
        '將重複性高的部分做成通用元件,以便簡化網頁',
        'refector:移除不必要的react優化',
        'refector:移除不符合react寫法上的程式',
        'refector:將資料處理的部分改成以hook的方式處理',
        '與團隊人員討論和code review來達成高品質的開發',
      ],
    },
  ],
  V0 = () => {
    const [e, t] = j.useState(!1);
    return (
      j.useEffect(() => (t(!0), () => {}), []),
      g.jsx('div', {
        className: D(
          'border-l-4 border-gray-300 ml-3 mt-3 py-10 space-y-14 w-4/5'
        ),
        children: g.jsx('div', {
          className: D(`relative 
        justify-between w-full z-10 `),
          children: H0.map((n, r) =>
            g.jsxs(
              'div',
              {
                className: D('flex justify-between items-center p-6'),
                children: [
                  g.jsx('div', {
                    className:
                      D(`absolute border-2 border-white bg-blue-300 top-[${r + 1}8rem] -left-[0.8rem] h-6 w-6 rounded-full
                ${e ? 'animate-jump-in animate-delay-[1500ms]' : ''} 
                `),
                  }),
                  g.jsx(B0, { jobexperience: n }),
                ],
              },
              `${n.companyName}-${n.time}-${r}`
            )
          ),
        }),
      })
    );
  },
  $0 = () => {
    const [e, t] = j.useState(!1);
    return (
      j.useEffect(
        () => (
          t(!1),
          () => {
            setTimeout(() => t(!0), 500);
          }
        ),
        []
      ),
      g.jsxs('div', {
        className:
          'flex bg-slate-700 flex-col items-start justify-start w-screen !h-auto min-h-screen overflow-y-scroll',
        children: [
          g.jsx(or, {}),
          g.jsx('section', {
            className:
              D(` transition-all ease-in-out duration-1000 mt-12 ml-6 w-full overflow-y-auto overflow-x-hidden
          ${e ? ' h-screen minh-full flex-grow' : 'h-0'}  `),
            children: g.jsx(V0, {}),
          }),
        ],
      })
    );
  },
  W0 = ({
    label: e,
    percentage: t,
    progressColor: n,
    size: r,
    className: l,
  }) => {
    const i = j.useRef(null),
      [o, a] = j.useState({ width: 0 }),
      [u, s] = j.useState(0);
    j.useEffect(() => {
      const p = () => {
        if (i.current) {
          const S = i.current.r.baseVal.value;
          a({ width: S });
        }
      };
      return (
        p(),
        window.addEventListener('resize', p),
        () => {
          window.removeEventListener('resize', p);
        }
      );
    }, [t]),
      j.useEffect(() => {
        s(0),
          setTimeout(() => {
            if (i.current) {
              const S = i.current.r.baseVal.value * 2 * Math.PI,
                E = (1 - t / 100) * S;
              s(S - E);
            }
          }, 100);
      }, [t]);
    const h = o.width * 2 * Math.PI;
    return g.jsxs('div', {
      className: D(
        'w-1/4 h-52 bg-white rounded-lg shadow-lg shadow-slate-50',
        'flex flex-col items-center justify-around text-fuchsia-500 text-center',
        l
      ),
      children: [
        g.jsxs('svg', {
          width: '60%',
          height: '60%',
          viewBox: '0 0 100 100',
          children: [
            g.jsx('circle', {
              cx: '50',
              cy: '50',
              r: '45',
              stroke: n || 'blue',
              strokeWidth: '5',
              fill: 'none',
            }),
            g.jsx('circle', {
              cx: '50',
              cy: '50',
              r: '45',
              fill: 'none',
              strokeWidth: '5',
              strokeLinecap: 'round',
              stroke: '#cccccc',
              ref: i,
              strokeDasharray: `${h}px`,
              style: {
                transition: 'stroke-dashoffset 2s ease-in-out',
                strokeDashoffset: u,
              },
            }),
            g.jsx('text', {
              x: '50',
              y: '50',
              textAnchor: 'middle',
              dominantBaseline: 'middle',
              fontSize: '28',
              fill: '#4A4AFF',
              children: `${t}%`,
            }),
          ],
        }),
        g.jsx('p', {
          className: D('font-bold text-center text-2xl'),
          children: e,
        }),
      ],
    });
  },
  Q0 = ({ label: e, percentage: t, progressColor: n, size: r, className: l }) =>
    g.jsxs('div', {
      className: D('block justify-center items-center w-full min-w-[31rem]'),
      children: [
        g.jsx('span', {
          className: D('block text-sm font-semibold text-zinc-300'),
          children: e,
        }),
        g.jsx('div', {
          className: D(' w-full h-3 rounded-lg bg-[rgba(0,0,0,0.1)]'),
          children: g.jsx('span', {
            className: D(
              'relative block h-full rounded-lg',
              'opacity-0',
              'animate-progress'
            ),
            style: { width: `${t}%`, backgroundColor: n },
            children: g.jsxs('span', {
              className: D(
                'absolute right-0 top-[-28px] rounded text-white bg-blue-600 px-1 py-1 text-[8px]',
                'z-10',
                "before:content-['']",
                'before:bg-blue-600',
                'before:h-2',
                'before:w-2',
                'before:left-2',
                'before:top-4',
                'before:absolute',
                'before:z-0',
                'before:rotate-45'
              ),
              children: [t, '%'],
            }),
          }),
        }),
      ],
    }),
  Gs = [
    {
      label: 'html',
      percentage: 90,
      progressColor: '#FF8000',
      size: 10,
      className: 'w-full',
    },
    {
      label: 'css',
      percentage: 90,
      progressColor: '#0080FF',
      size: 10,
      className: 'w-full',
    },
    {
      label: 'javascript',
      percentage: 50,
      progressColor: 'yellow',
      size: 10,
      className: 'w-full',
    },
    {
      label: 'React',
      percentage: 60,
      progressColor: '#00E3E3',
      size: 10,
      className: 'w-full',
    },
    {
      label: 'NextJS',
      percentage: 40,
      progressColor: 'red',
      size: 10,
      className: 'w-full',
    },
  ],
  K0 = () =>
    g.jsxs('div', {
      className:
        'flex flex-col items-start justify-start w-screen min-h-screen bg-slate-700 overflow-y-scroll',
      children: [
        g.jsx(or, {}),
        g.jsxs('section', {
          className: 'flex flex-col w-full mt-14 mb-10 space-y-10 px-4',
          children: [
            g.jsxs('div', {
              className:
                'flex-1 bg-slate-600 p-4 flex flex-col justify-between gap-4 rounded-md',
              children: [
                g.jsx('h2', {
                  className: 'text-lg font-semibold mb-4 text-white',
                  children: 'Technical Skills',
                }),
                Gs.map((e) =>
                  g.jsx(
                    Q0,
                    {
                      label: e.label,
                      percentage: e.percentage,
                      className: D(e.className),
                      progressColor: e.progressColor,
                      size: e.size,
                    },
                    e.label
                  )
                ),
              ],
            }),
            g.jsxs('div', {
              className:
                'flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-600 p-6 rounded-md',
              children: [
                g.jsx('h2', {
                  className:
                    'col-span-full text-lg font-semibold mb-4 text-white',
                  children: 'Professional Skills',
                }),
                Gs.map((e) =>
                  g.jsx(
                    W0,
                    {
                      label: e.label,
                      percentage: e.percentage,
                      className: D(e.className),
                      progressColor: e.progressColor,
                      size: e.size,
                    },
                    e.label
                  )
                ),
              ],
            }),
          ],
        }),
      ],
    }),
  Y0 = [
    { label: 'Name', type: 'text', name: 'Name' },
    { label: 'Email', type: 'email', name: 'Email' },
    { label: 'Subject', type: 'text', name: 'Subject' },
    { label: 'Message', type: 'textarea', name: 'Message' },
  ],
  G0 = () =>
    g.jsxs('div', {
      className:
        'flex flex-col items-start justify-start w-screen min-h-screen bg-slate-700 overflow-y-scroll',
      children: [
        g.jsx(or, {}),
        g.jsxs('section', {
          className: 'flex w-full mt-16 mb-10 space-y-10 px-4',
          children: [
            g.jsxs('div', {
              className: D('flex-1 w-full h-ful flex flex-col p-2 m-2'),
              children: [
                g.jsxs('div', {
                  className: D('mb-8 text-start'),
                  children: [
                    g.jsx('h2', {
                      className: 'text-7xl font-semibold mb-4 text-white',
                      children: 'Contact ',
                    }),
                    g.jsx('h2', {
                      className: 'text-7xl font-semibold mb-4 text-sky-600',
                      children: 'me ',
                    }),
                  ],
                }),
                g.jsxs('div', {
                  className: D('text-lg text-white mb-8'),
                  children: [
                    g.jsx('h2', {
                      className: D('text-2xl mb-4'),
                      children: "let's work together",
                    }),
                    g.jsxs('p', {
                      children: [
                        '我是一名充滿熱誠的前端工程師,我正在尋找一份前端工作.',
                        '我善於溝通並且具有一定的獨立工作能力,並且樂於學新知識,我具備一年的React的開發經驗,熟悉React生態系統,能夠快速高效地開發出高質量的用戶介面。',
                        '我擅長使用現代化的前端工具和框架,如Webpack、vite等,並且對性能優化有一定的理解和實踐經驗。',
                        '我有良好的團隊合作精神,能夠與設計師、後端工程師等緊密配合,共同推進產品開發。',
                      ],
                    }),
                    g.jsx('p', {
                      className: D('mb-4'),
                      children: '可以用右邊的表單去聯繫我',
                    }),
                    g.jsx('p', {
                      className: D('mb-4'),
                      children: '我會盡快回覆您',
                    }),
                  ],
                }),
              ],
            }),
            g.jsx('div', {
              className: D(
                'flex flex-col  flex-1 items-center justify-start min-h-screen'
              ),
              children: g.jsxs('form', {
                action: '',
                className: 'w-full',
                children: [
                  Y0.map((e) =>
                    g.jsxs('div', {
                      className: D('mb-4 w-ful'),
                      children: [
                        g.jsx('label', {
                          className: D(
                            'block text-gray-400 text-sm font-bold mb-2'
                          ),
                          htmlFor: 'name',
                          children: e.label,
                        }),
                        e.type === 'text' || e.type === 'email'
                          ? g.jsx('input', {
                              type: e.type,
                              name: e.name,
                              placeholder: `Enter your ${e.name}`,
                              className: D(
                                'w-11/12 h-12 rounded-md shadow-gray-200 shadow-sm font-semibold text-base',
                                'border-none outline-none bg-slate-600 text-black mb-2'
                              ),
                            })
                          : g.jsx('textarea', {
                              name: e.name,
                              placeholder: `Enter your ${e.name}`,
                              className: D(
                                'w-11/12 h-20 rounded-md shadow-gray-200 shadow-sm font-semibold text-base',
                                'border-none outline-none bg-slate-600 text-black mb-2 resize-none'
                              ),
                            }),
                      ],
                    })
                  ),
                  g.jsx(su, {
                    type: 'submit',
                    className: D(
                      'w-11/12 h-14 rounded-3xl border-x-indigo-400 shadow-gray-200 shadow-sm',
                      'inline-block px-2 py-3 no-underline tracking-wide font-semibold'
                    ),
                    onClickEvent: () => {},
                    children: '送出',
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  X0 = ({
    label: e,
    link: t,
    description: n,
    image: r,
    className: l,
    size: i,
  }) => (
    j.useEffect(() => {
      console.log(t, r);
    }, []),
    g.jsxs('div', {
      className: D('flex', l),
      children: [
        g.jsx('div', {
          className:
            'w-20 h-20 overflow-hidden flex items-center justify-center',
          children: g.jsx('img', {
            src: r,
            alt: e,
            className: 'max-w-full max-h-full',
          }),
        }),
        g.jsxs('div', {
          className: D('flex flex-col items-center justify-center'),
          children: [
            g.jsx('h2', { children: e }),
            g.jsxs('div', {
              className: D(
                'hidden group-hover:block text-white mt-2 text-center'
              ),
              children: [
                g.jsx('p', { children: n }),
                g.jsx(su, {
                  onClickEvent: () => {},
                  className: null,
                  type: null,
                  children: void 0,
                }),
              ],
            }),
          ],
        }),
      ],
    })
  ),
  J0 = '/assets/day1-B4GWcMIJ.png',
  Z0 = () =>
    g.jsxs('div', {
      className:
        'flex bg-slate-700 flex-col items-start justify-start w-screen !h-auto min-h-screen overflow-y-scroll',
      children: [
        g.jsx(or, {}),
        g.jsx('section', {
          className: D('flex w-full mt-16 mb-10 space-y-10 px-4'),
          children: g.jsx(X0, {
            className: '',
            label: 'Drum Kit',
            description: '',
            image: J0,
            link: 'https://wuharry.github.io/day1/',
          }),
        }),
      ],
    }),
  q0 = [
    { path: '/', element: g.jsx(I0, {}) },
    { path: '/about', element: g.jsx(U0, {}) },
    { path: '/experience', element: g.jsx($0, {}) },
    { path: '/skill', element: g.jsx(K0, {}) },
    { path: '/contact', element: g.jsx(G0, {}) },
    { path: '/project', element: g.jsx(Z0, {}) },
  ],
  b0 = k0(q0),
  ev = po.createRoot(document.getElementById('root'));
ev.render(g.jsx(oc.StrictMode, { children: g.jsx(M0, { router: b0 }) }));
