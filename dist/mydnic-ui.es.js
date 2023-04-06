import ft, { ref as Ft, onMounted as Or, openBlock as V, createBlock as je, Transition as Mt, withCtx as Be, createElementBlock as K, normalizeClass as pe, createElementVNode as S, createCommentVNode as ae, toDisplayString as we, renderSlot as $e, createVNode as Ie, unref as pr, useSlots as oi, computed as rn, defineComponent as st, resolveComponent as ke, Fragment as ze, renderList as Ye, createTextVNode as Pt, createStaticVNode as qr, normalizeProps as Dt, guardReactiveProps as It, mergeProps as Nt, withModifiers as xr, onBeforeUnmount as li, watch as bt, nextTick as Mr, h as ai, normalizeStyle as si, getCurrentInstance as ui, version as ci, toRefs as nr, onUnmounted as fi, withDirectives as Rr, vShow as di, Teleport as Vr, vModelCheckbox as hi, TransitionGroup as pi } from "vue";
var at = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function mi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const { createElementVNode: vi, openBlock: yi, createElementBlock: gi } = ft;
var bi = function(r, t) {
  return yi(), gi("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    vi("path", {
      "fill-rule": "evenodd",
      d: "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z",
      "clip-rule": "evenodd"
    })
  ]);
};
const { createElementVNode: _i, openBlock: wi, createElementBlock: ki } = ft;
var Oi = function(r, t) {
  return wi(), ki("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    _i("path", {
      "fill-rule": "evenodd",
      d: "M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z",
      "clip-rule": "evenodd"
    })
  ]);
};
const { createElementVNode: xi, openBlock: Si, createElementBlock: Ei } = ft;
var $i = function(r, t) {
  return Si(), Ei("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    xi("path", {
      "fill-rule": "evenodd",
      d: "M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z",
      "clip-rule": "evenodd"
    })
  ]);
};
const { createElementVNode: Ai, openBlock: Ti, createElementBlock: Mi } = ft;
var Ni = function(r, t) {
  return Ti(), Mi("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    Ai("path", {
      "fill-rule": "evenodd",
      d: "M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z",
      "clip-rule": "evenodd"
    })
  ]);
};
const { createElementVNode: Ci, openBlock: Li, createElementBlock: Pi } = ft;
var Di = function(r, t) {
  return Li(), Pi("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    Ci("path", {
      "fill-rule": "evenodd",
      d: "M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z",
      "clip-rule": "evenodd"
    })
  ]);
};
const { createElementVNode: Ii, openBlock: Bi, createElementBlock: ji } = ft;
var qi = function(r, t) {
  return Bi(), ji("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    Ii("path", {
      "fill-rule": "evenodd",
      d: "M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z",
      "clip-rule": "evenodd"
    })
  ]);
};
const { createElementVNode: Ri, openBlock: Vi, createElementBlock: Fi } = ft;
var Ui = function(r, t) {
  return Vi(), Fi("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    Ri("path", {
      "fill-rule": "evenodd",
      d: "M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z",
      "clip-rule": "evenodd"
    })
  ]);
};
const { createElementVNode: zi, openBlock: Hi, createElementBlock: Yi } = ft;
var Ki = function(r, t) {
  return Hi(), Yi("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    zi("path", {
      "fill-rule": "evenodd",
      d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z",
      "clip-rule": "evenodd"
    })
  ]);
};
const { createElementVNode: Wi, openBlock: Gi, createElementBlock: Zi } = ft;
var Xi = function(r, t) {
  return Gi(), Zi("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    Wi("path", {
      "fill-rule": "evenodd",
      d: "M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z",
      "clip-rule": "evenodd"
    })
  ]);
};
const { createElementVNode: Ji, openBlock: Qi, createElementBlock: eo } = ft;
var to = function(r, t) {
  return Qi(), eo("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    Ji("path", {
      "fill-rule": "evenodd",
      d: "M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z",
      "clip-rule": "evenodd"
    })
  ]);
};
const { createElementVNode: no, openBlock: ro, createElementBlock: io } = ft;
var oo = function(r, t) {
  return ro(), io("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    no("path", {
      "fill-rule": "evenodd",
      d: "M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z",
      "clip-rule": "evenodd"
    })
  ]);
};
const { createElementVNode: lo, openBlock: ao, createElementBlock: so } = ft;
var uo = function(r, t) {
  return ao(), so("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    lo("path", {
      "fill-rule": "evenodd",
      d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
      "clip-rule": "evenodd"
    })
  ]);
}, co = bi, Fr = Oi, fo = $i, ho = Ni, po = Di, mo = qi, vo = Ui, yo = Ki, go = Xi, bo = to, _o = oo, Gn = uo;
const wo = { class: "flex items-start" }, ko = { class: "flex items-center shrink-0" }, Oo = {
  key: 0,
  class: "w-5 h-5 text-yellow-700",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, xo = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
  "clip-rule": "evenodd"
}, null, -1), So = [
  xo
], Eo = {
  key: 1,
  class: "w-5 h-5 text-red-700",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, $o = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
  "clip-rule": "evenodd"
}, null, -1), Ao = [
  $o
], To = {
  key: 2,
  class: "w-5 h-5 text-blue-700",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, Mo = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
  "clip-rule": "evenodd"
}, null, -1), No = [
  Mo
], Co = {
  key: 3,
  class: "w-5 h-5 text-green-700",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, Lo = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
  "clip-rule": "evenodd"
}, null, -1), Po = [
  Lo
], Do = { class: "flex flex-1 ml-3 md:justify-between" }, Io = ["textContent"], Bo = {
  key: 0,
  class: "pl-3 ml-auto"
}, jo = { class: "-mx-1.5 -my-1.5" }, qo = /* @__PURE__ */ S("span", { class: "sr-only" }, "Dismiss", -1), Ro = {
  key: 1,
  class: "pl-3 ml-auto"
}, Vo = { class: "-mx-1.5 -my-1.5" }, Fo = /* @__PURE__ */ S("span", { class: "sr-only" }, "Dismiss", -1), Uo = {
  __name: "UiAlert",
  props: {
    level: {
      type: String,
      default: "info"
    },
    title: {
      type: String,
      required: !1,
      default: void 0
    },
    closable: {
      type: Boolean,
      default: !1
    },
    dismissable: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const r = e, t = Ft(!1), s = Ft(void 0);
    function o() {
      const y = oi();
      if (r.title)
        return v(r.title);
      const d = rn(() => y.default()[0].children);
      return v(d.value);
    }
    function b() {
      t.value = !0;
    }
    function l() {
      localStorage.setItem("mydnic-ui-dismiss-" + s.value, !0), b();
    }
    function v(y) {
      y = y.replace(/^\s+|\s+$/g, ""), y = y.toLowerCase();
      const d = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;", g = "aaaaeeeeiiiioooouuuunc------";
      for (let i = 0, n = d.length; i < n; i++)
        y = y.replace(new RegExp(d.charAt(i), "g"), g.charAt(i));
      return y = y.replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-"), y;
    }
    return Or(() => {
      s.value = o(), r.dismissable && localStorage.getItem("mydnic-ui-dismiss-" + s.value) && b();
    }), (y, d) => (V(), je(Mt, { appear: "" }, {
      default: Be(() => [
        t.value ? ae("", !0) : (V(), K("div", {
          key: 0,
          class: pe(["p-4 rounded-md", {
            "bg-yellow-100": e.level == "warning",
            "bg-red-100": e.level == "danger",
            "bg-green-100": e.level == "success",
            "bg-blue-100": e.level == "info"
          }])
        }, [
          S("div", wo, [
            S("div", ko, [
              e.level == "warning" ? (V(), K("svg", Oo, So)) : e.level == "danger" ? (V(), K("svg", Eo, Ao)) : e.level == "info" ? (V(), K("svg", To, No)) : e.level == "success" ? (V(), K("svg", Co, Po)) : ae("", !0)
            ]),
            S("div", Do, [
              S("div", null, [
                e.title ? (V(), K("h3", {
                  key: 0,
                  class: pe(["mb-2 text-sm font-medium", {
                    "text-yellow-700": e.level == "warning",
                    "text-red-700": e.level == "danger",
                    "text-green-700": e.level == "success",
                    "text-blue-700": e.level == "info"
                  }]),
                  textContent: we(e.title)
                }, null, 10, Io)) : ae("", !0),
                S("div", {
                  class: pe(["text-sm", {
                    "text-yellow-700": e.level == "warning",
                    "text-red-700": e.level == "danger",
                    "text-green-700": e.level == "success",
                    "text-blue-700": e.level == "info"
                  }])
                }, [
                  $e(y.$slots, "default")
                ], 2)
              ]),
              $e(y.$slots, "action"),
              e.closable ? (V(), K("div", Bo, [
                S("div", jo, [
                  S("button", {
                    class: pe(["inline-flex rounded-md p-1.5 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2", {
                      "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-offset-yellow-100 focus:ring-yellow-600": e.level == "warning",
                      "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-offset-red-100 focus:ring-red-600": e.level == "danger",
                      "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-offset-green-100 focus:ring-green-600": e.level == "success",
                      "bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-offset-blue-100 focus:ring-blue-600": e.level == "info"
                    }]),
                    onClick: b
                  }, [
                    qo,
                    Ie(pr(Gn), { class: "w-5 h-5" })
                  ], 2)
                ])
              ])) : ae("", !0),
              e.dismissable ? (V(), K("div", Ro, [
                S("div", Vo, [
                  S("button", {
                    class: pe(["inline-flex rounded-md p-1.5 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2", {
                      "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-offset-yellow-100 focus:ring-yellow-600": e.level == "warning",
                      "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-offset-red-100 focus:ring-red-600": e.level == "danger",
                      "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-offset-green-100 focus:ring-green-600": e.level == "success",
                      "bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-offset-blue-100 focus:ring-blue-600": e.level == "info"
                    }]),
                    onClick: l
                  }, [
                    Fo,
                    Ie(pr(Gn), { class: "w-5 h-5" })
                  ], 2)
                ])
              ])) : ae("", !0)
            ])
          ])
        ], 2))
      ]),
      _: 3
    }));
  }
}, Ee = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [s, o] of r)
    t[s] = o;
  return t;
}, zo = {
  props: {
    path: {
      type: String,
      default: ""
    }
  }
}, Ho = { class: "overflow-hidden rounded-full ring-1 ring-white" }, Yo = ["src"];
function Ko(e, r, t, s, o, b) {
  return V(), je(Mt, { appear: "" }, {
    default: Be(() => [
      S("div", Ho, [
        S("img", {
          src: encodeURI(t.path),
          alt: "Avatar",
          class: "object-cover w-full h-full transition-all duration-200 rounded-full shadow hover:scale-110"
        }, null, 8, Yo)
      ])
    ]),
    _: 1
  });
}
const Uv = /* @__PURE__ */ Ee(zo, [["render", Ko]]);
var sr = {}, Wo = {
  get exports() {
    return sr;
  },
  set exports(e) {
    sr = e;
  }
};
(function(e, r) {
  (function(t, s) {
    e.exports = s();
  })(at, function() {
    var t = 1e3, s = 6e4, o = 36e5, b = "millisecond", l = "second", v = "minute", y = "hour", d = "day", g = "week", i = "month", n = "quarter", a = "year", p = "date", h = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, f = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, u = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(T) {
      var L = ["th", "st", "nd", "rd"], D = T % 100;
      return "[" + T + (L[(D - 20) % 10] || L[D] || L[0]) + "]";
    } }, k = function(T, L, D) {
      var z = String(T);
      return !z || z.length >= L ? T : "" + Array(L + 1 - z.length).join(D) + T;
    }, c = { s: k, z: function(T) {
      var L = -T.utcOffset(), D = Math.abs(L), z = Math.floor(D / 60), U = D % 60;
      return (L <= 0 ? "+" : "-") + k(z, 2, "0") + ":" + k(U, 2, "0");
    }, m: function T(L, D) {
      if (L.date() < D.date())
        return -T(D, L);
      var z = 12 * (D.year() - L.year()) + (D.month() - L.month()), U = L.clone().add(z, i), te = D - U < 0, F = L.clone().add(z + (te ? -1 : 1), i);
      return +(-(z + (D - U) / (te ? U - F : F - U)) || 0);
    }, a: function(T) {
      return T < 0 ? Math.ceil(T) || 0 : Math.floor(T);
    }, p: function(T) {
      return { M: i, y: a, w: g, d, D: p, h: y, m: v, s: l, ms: b, Q: n }[T] || String(T || "").toLowerCase().replace(/s$/, "");
    }, u: function(T) {
      return T === void 0;
    } }, w = "en", M = {};
    M[w] = u;
    var $ = function(T) {
      return T instanceof x;
    }, A = function T(L, D, z) {
      var U;
      if (!L)
        return w;
      if (typeof L == "string") {
        var te = L.toLowerCase();
        M[te] && (U = te), D && (M[te] = D, U = te);
        var F = L.split("-");
        if (!U && F.length > 1)
          return T(F[0]);
      } else {
        var j = L.name;
        M[j] = L, U = j;
      }
      return !z && U && (w = U), U || !z && w;
    }, P = function(T, L) {
      if ($(T))
        return T.clone();
      var D = typeof L == "object" ? L : {};
      return D.date = T, D.args = arguments, new x(D);
    }, O = c;
    O.l = A, O.i = $, O.w = function(T, L) {
      return P(T, { locale: L.$L, utc: L.$u, x: L.$x, $offset: L.$offset });
    };
    var x = function() {
      function T(D) {
        this.$L = A(D.locale, null, !0), this.parse(D);
      }
      var L = T.prototype;
      return L.parse = function(D) {
        this.$d = function(z) {
          var U = z.date, te = z.utc;
          if (U === null)
            return /* @__PURE__ */ new Date(NaN);
          if (O.u(U))
            return /* @__PURE__ */ new Date();
          if (U instanceof Date)
            return new Date(U);
          if (typeof U == "string" && !/Z$/i.test(U)) {
            var F = U.match(m);
            if (F) {
              var j = F[2] - 1 || 0, C = (F[7] || "0").substring(0, 3);
              return te ? new Date(Date.UTC(F[1], j, F[3] || 1, F[4] || 0, F[5] || 0, F[6] || 0, C)) : new Date(F[1], j, F[3] || 1, F[4] || 0, F[5] || 0, F[6] || 0, C);
            }
          }
          return new Date(U);
        }(D), this.$x = D.x || {}, this.init();
      }, L.init = function() {
        var D = this.$d;
        this.$y = D.getFullYear(), this.$M = D.getMonth(), this.$D = D.getDate(), this.$W = D.getDay(), this.$H = D.getHours(), this.$m = D.getMinutes(), this.$s = D.getSeconds(), this.$ms = D.getMilliseconds();
      }, L.$utils = function() {
        return O;
      }, L.isValid = function() {
        return this.$d.toString() !== h;
      }, L.isSame = function(D, z) {
        var U = P(D);
        return this.startOf(z) <= U && U <= this.endOf(z);
      }, L.isAfter = function(D, z) {
        return P(D) < this.startOf(z);
      }, L.isBefore = function(D, z) {
        return this.endOf(z) < P(D);
      }, L.$g = function(D, z, U) {
        return O.u(D) ? this[z] : this.set(U, D);
      }, L.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, L.valueOf = function() {
        return this.$d.getTime();
      }, L.startOf = function(D, z) {
        var U = this, te = !!O.u(z) || z, F = O.p(D), j = function(Q, ee) {
          var oe = O.w(U.$u ? Date.UTC(U.$y, ee, Q) : new Date(U.$y, ee, Q), U);
          return te ? oe : oe.endOf(d);
        }, C = function(Q, ee) {
          return O.w(U.toDate()[Q].apply(U.toDate("s"), (te ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ee)), U);
        }, q = this.$W, R = this.$M, X = this.$D, H = "set" + (this.$u ? "UTC" : "");
        switch (F) {
          case a:
            return te ? j(1, 0) : j(31, 11);
          case i:
            return te ? j(1, R) : j(0, R + 1);
          case g:
            var I = this.$locale().weekStart || 0, Y = (q < I ? q + 7 : q) - I;
            return j(te ? X - Y : X + (6 - Y), R);
          case d:
          case p:
            return C(H + "Hours", 0);
          case y:
            return C(H + "Minutes", 1);
          case v:
            return C(H + "Seconds", 2);
          case l:
            return C(H + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, L.endOf = function(D) {
        return this.startOf(D, !1);
      }, L.$set = function(D, z) {
        var U, te = O.p(D), F = "set" + (this.$u ? "UTC" : ""), j = (U = {}, U[d] = F + "Date", U[p] = F + "Date", U[i] = F + "Month", U[a] = F + "FullYear", U[y] = F + "Hours", U[v] = F + "Minutes", U[l] = F + "Seconds", U[b] = F + "Milliseconds", U)[te], C = te === d ? this.$D + (z - this.$W) : z;
        if (te === i || te === a) {
          var q = this.clone().set(p, 1);
          q.$d[j](C), q.init(), this.$d = q.set(p, Math.min(this.$D, q.daysInMonth())).$d;
        } else
          j && this.$d[j](C);
        return this.init(), this;
      }, L.set = function(D, z) {
        return this.clone().$set(D, z);
      }, L.get = function(D) {
        return this[O.p(D)]();
      }, L.add = function(D, z) {
        var U, te = this;
        D = Number(D);
        var F = O.p(z), j = function(R) {
          var X = P(te);
          return O.w(X.date(X.date() + Math.round(R * D)), te);
        };
        if (F === i)
          return this.set(i, this.$M + D);
        if (F === a)
          return this.set(a, this.$y + D);
        if (F === d)
          return j(1);
        if (F === g)
          return j(7);
        var C = (U = {}, U[v] = s, U[y] = o, U[l] = t, U)[F] || 1, q = this.$d.getTime() + D * C;
        return O.w(q, this);
      }, L.subtract = function(D, z) {
        return this.add(-1 * D, z);
      }, L.format = function(D) {
        var z = this, U = this.$locale();
        if (!this.isValid())
          return U.invalidDate || h;
        var te = D || "YYYY-MM-DDTHH:mm:ssZ", F = O.z(this), j = this.$H, C = this.$m, q = this.$M, R = U.weekdays, X = U.months, H = function(ee, oe, ve, Oe) {
          return ee && (ee[oe] || ee(z, te)) || ve[oe].slice(0, Oe);
        }, I = function(ee) {
          return O.s(j % 12 || 12, ee, "0");
        }, Y = U.meridiem || function(ee, oe, ve) {
          var Oe = ee < 12 ? "AM" : "PM";
          return ve ? Oe.toLowerCase() : Oe;
        }, Q = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: q + 1, MM: O.s(q + 1, 2, "0"), MMM: H(U.monthsShort, q, X, 3), MMMM: H(X, q), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: H(U.weekdaysMin, this.$W, R, 2), ddd: H(U.weekdaysShort, this.$W, R, 3), dddd: R[this.$W], H: String(j), HH: O.s(j, 2, "0"), h: I(1), hh: I(2), a: Y(j, C, !0), A: Y(j, C, !1), m: String(C), mm: O.s(C, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: F };
        return te.replace(f, function(ee, oe) {
          return oe || Q[ee] || F.replace(":", "");
        });
      }, L.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, L.diff = function(D, z, U) {
        var te, F = O.p(z), j = P(D), C = (j.utcOffset() - this.utcOffset()) * s, q = this - j, R = O.m(this, j);
        return R = (te = {}, te[a] = R / 12, te[i] = R, te[n] = R / 3, te[g] = (q - C) / 6048e5, te[d] = (q - C) / 864e5, te[y] = q / o, te[v] = q / s, te[l] = q / t, te)[F] || q, U ? R : O.a(R);
      }, L.daysInMonth = function() {
        return this.endOf(i).$D;
      }, L.$locale = function() {
        return M[this.$L];
      }, L.locale = function(D, z) {
        if (!D)
          return this.$L;
        var U = this.clone(), te = A(D, z, !0);
        return te && (U.$L = te), U;
      }, L.clone = function() {
        return O.w(this.$d, this);
      }, L.toDate = function() {
        return new Date(this.valueOf());
      }, L.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, L.toISOString = function() {
        return this.$d.toISOString();
      }, L.toString = function() {
        return this.$d.toUTCString();
      }, T;
    }(), E = x.prototype;
    return P.prototype = E, [["$ms", b], ["$s", l], ["$m", v], ["$H", y], ["$W", d], ["$M", i], ["$y", a], ["$D", p]].forEach(function(T) {
      E[T[1]] = function(L) {
        return this.$g(L, T[0], T[1]);
      };
    }), P.extend = function(T, L) {
      return T.$i || (T(L, x, P), T.$i = !0), P;
    }, P.locale = A, P.isDayjs = $, P.unix = function(T) {
      return P(1e3 * T);
    }, P.en = M[w], P.Ls = M, P.p = {}, P;
  });
})(Wo);
const _e = sr;
var mr = {}, Go = {
  get exports() {
    return mr;
  },
  set exports(e) {
    mr = e;
  }
};
(function(e, r) {
  (function(t, s) {
    e.exports = s();
  })(at, function() {
    return function(t, s) {
      s.prototype.weekday = function(o) {
        var b = this.$locale().weekStart || 0, l = this.$W, v = (l < b ? l + 7 : l) - b;
        return this.$utils().u(o) ? v : this.subtract(v, "day").add(o, "day");
      };
    };
  });
})(Go);
const Ur = mr;
var vr = {}, Zo = {
  get exports() {
    return vr;
  },
  set exports(e) {
    vr = e;
  }
};
(function(e, r) {
  (function(t, s) {
    e.exports = s();
  })(at, function() {
    var t = "week", s = "year";
    return function(o, b, l) {
      var v = b.prototype;
      v.week = function(y) {
        if (y === void 0 && (y = null), y !== null)
          return this.add(7 * (y - this.week()), "day");
        var d = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var g = l(this).startOf(s).add(1, s).date(d), i = l(this).endOf(t);
          if (g.isBefore(i))
            return 1;
        }
        var n = l(this).startOf(s).date(d).startOf(t).subtract(1, "millisecond"), a = this.diff(n, t, !0);
        return a < 0 ? l(this).startOf("week").week() : Math.ceil(a);
      }, v.weeks = function(y) {
        return y === void 0 && (y = null), this.week(y);
      };
    };
  });
})(Zo);
const Xo = vr;
_e.extend(Ur);
_e.extend(Xo);
const Jo = st({
  components: {
    ClockIconSolid: yo
  },
  props: {
    events: {
      type: Array,
      required: !0
    }
  },
  data() {
    return {
      from: _e().startOf("month"),
      to: _e().endOf("month"),
      selectedDate: _e()
    };
  },
  computed: {
    hasHeaderSlot() {
      return this.$slots && this.$slots["header-right"];
    },
    today() {
      return _e().format("YYYY-MM-DD");
    },
    month() {
      return Number(this.selectedDate.format("M"));
    },
    year() {
      return Number(this.selectedDate.format("YYYY"));
    },
    selectedDay() {
      return this.days.find((e) => e.date === this.selectedDate.format("YYYY-MM-DD"));
    },
    days() {
      return [
        ...this.previousMonthDays,
        ...this.currentMonthDays,
        ...this.nextMonthDays
      ].map((e) => (e.events = this.events.filter((r) => r.date === e.date), e.isToday = e.date === this.today, e.isSelected = e.date === this.selectedDate.format("YYYY-MM-DD"), e));
    },
    numberOfDaysInMonth() {
      return _e(this.selectedDate).daysInMonth();
    },
    currentMonthDays() {
      return [...Array(this.numberOfDaysInMonth)].map((e, r) => ({
        date: _e(`${this.year}-${this.month}-${r + 1}`).format(
          "YYYY-MM-DD"
        ),
        isCurrentMonth: !0
      }));
    },
    previousMonthDays() {
      const e = this.getWeekday(
        this.currentMonthDays[0].date
      ), r = _e(`${this.year}-${this.month}-01`).subtract(
        1,
        "month"
      ), t = e ? e - 1 : 6, s = _e(
        this.currentMonthDays[0].date
      ).subtract(t, "day").date();
      return [...Array(t)].map(
        (o, b) => ({
          date: _e(
            `${r.year()}-${r.month() + 1}-${s + b}`
          ).format("YYYY-MM-DD"),
          isCurrentMonth: !1
        })
      );
    },
    nextMonthDays() {
      const e = this.getWeekday(
        `${this.year}-${this.month}-${this.currentMonthDays.length}`
      ), r = _e(`${this.year}-${this.month}-01`).add(1, "month"), t = e && 7 - e;
      return [...Array(t)].map((s, o) => ({
        date: _e(
          `${r.year()}-${r.month() + 1}-${o + 1}`
        ).format("YYYY-MM-DD"),
        isCurrentMonth: !1
      }));
    }
  },
  methods: {
    getWeekday(e) {
      return _e(e).weekday();
    },
    changeDates({ from: e, to: r }) {
      this.selectedDate = _e(e), this.from = _e(e), this.to = _e(r), this.$emit("change", { from: this.from, to: this.to });
    },
    handleEventClick(e) {
      this.$emit("event-click", e);
    },
    selectDay(e) {
      this.selectedDate = _e(e.date);
    }
  }
}), Qo = { class: "lg:flex lg:h-full lg:flex-col" }, el = { class: "relative z-20 flex items-center justify-between px-6 py-4 border-b border-gray-200 lg:flex-none" }, tl = { class: "text-lg font-semibold text-gray-900" }, nl = ["datetime"], rl = { class: "flex items-center" }, il = { class: "capitalize" }, ol = { class: "hidden md:flex md:items-center" }, ll = {
  key: 0,
  class: "w-px h-6 mx-6 bg-gray-300"
}, al = { class: "shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col" }, sl = /* @__PURE__ */ qr('<div class="grid grid-cols-7 gap-px text-xs font-semibold leading-6 text-center text-gray-700 bg-gray-200 border-b border-gray-300 lg:flex-none"><div class="py-2 bg-white"> L<span class="sr-only sm:not-sr-only">un</span></div><div class="py-2 bg-white"> M<span class="sr-only sm:not-sr-only">ar</span></div><div class="py-2 bg-white"> M<span class="sr-only sm:not-sr-only">er</span></div><div class="py-2 bg-white"> J<span class="sr-only sm:not-sr-only">eu</span></div><div class="py-2 bg-white"> V<span class="sr-only sm:not-sr-only">en</span></div><div class="py-2 bg-white"> S<span class="sr-only sm:not-sr-only">am</span></div><div class="py-2 bg-white"> D<span class="sr-only sm:not-sr-only">im</span></div></div>', 1), ul = { class: "flex text-xs leading-6 text-gray-700 bg-gray-200 lg:flex-auto" }, cl = { class: "hidden w-full lg:grid lg:grid-cols-7 auto-rows-fr lg:gap-px" }, fl = ["datetime"], dl = {
  key: 1,
  class: "mt-2"
}, hl = ["onClick"], pl = { class: "flex-auto font-medium text-gray-900 truncate group-hover:text-indigo-600" }, ml = ["datetime"], vl = { class: "grid w-full grid-cols-7 gap-px auto-rows-fr isolate lg:hidden" }, yl = ["onClick"], gl = ["datetime"], bl = { class: "sr-only" }, _l = {
  key: 1,
  class: "-mx-0.5 mt-auto flex flex-wrap-reverse"
}, wl = {
  key: 0,
  class: "px-4 py-10 sm:px-6 lg:hidden"
}, kl = { class: "overflow-hidden text-sm bg-white divide-y divide-gray-100 rounded-lg shadow ring-1 ring-black ring-opacity-5" }, Ol = { class: "flex-auto" }, xl = { class: "font-semibold text-gray-900" }, Sl = ["datetime"], El = ["onClick"], $l = { class: "sr-only" };
function Al(e, r, t, s, o, b) {
  var y;
  const l = ke("UiPeriodSwitcher"), v = ke("ClockIconSolid");
  return V(), K("div", Qo, [
    S("header", el, [
      S("h1", tl, [
        S("time", {
          datetime: e.$filters.format(e.from, "YYYY-MM"),
          class: "capitalize"
        }, we(e.$filters.format(e.from, "MMMM YYYY")), 9, nl)
      ]),
      S("div", rl, [
        Ie(l, {
          from: e.from,
          to: e.to,
          period: "month",
          onChanged: e.changeDates
        }, {
          default: Be(() => [
            S("span", il, we(e.$filters.format(e.from, "MMMM")), 1)
          ]),
          _: 1
        }, 8, ["from", "to", "onChanged"]),
        S("div", ol, [
          e.hasHeaderSlot ? (V(), K("div", ll)) : ae("", !0),
          $e(e.$slots, "header-right")
        ])
      ])
    ]),
    S("div", al, [
      sl,
      S("div", ul, [
        S("div", cl, [
          (V(!0), K(ze, null, Ye(e.days, (d) => (V(), K("div", {
            key: d.date,
            class: pe([d.isCurrentMonth ? "bg-white" : "bg-gray-50 text-gray-500", "relative py-2 px-3"])
          }, [
            d.date ? (V(), K("time", {
              key: 0,
              datetime: d.date,
              class: pe(d.isToday ? "flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white" : void 0)
            }, we(d.date.split("-").pop().replace(/^0/, "")), 11, fl)) : ae("", !0),
            d.events && d.events.length > 0 ? (V(), K("ol", dl, [
              (V(!0), K(ze, null, Ye(d.events, (g) => (V(), K("li", {
                key: g.id
              }, [
                S("button", {
                  class: "flex group",
                  onClick: (i) => e.handleEventClick(g)
                }, [
                  S("p", pl, we(g.name), 1),
                  S("time", {
                    datetime: g.datetime,
                    class: "flex-none hidden ml-3 text-gray-500 group-hover:text-indigo-600 xl:block"
                  }, we(g.time), 9, ml)
                ], 8, hl)
              ]))), 128))
            ])) : ae("", !0)
          ], 2))), 128))
        ]),
        S("div", vl, [
          (V(!0), K(ze, null, Ye(e.days, (d) => (V(), K("button", {
            key: d.date,
            type: "button",
            class: pe([d.isCurrentMonth ? "bg-white" : "bg-gray-50", (d.isSelected || d.isToday) && "font-semibold", d.isSelected && "text-white", !d.isSelected && d.isToday && "text-indigo-600", !d.isSelected && d.isCurrentMonth && !d.isToday && "text-gray-900", !d.isSelected && !d.isCurrentMonth && !d.isToday && "text-gray-500", "flex h-14 flex-col py-2 px-3 hover:bg-gray-100 focus:z-10"]),
            onClick: (g) => e.selectDay(d)
          }, [
            d.date ? (V(), K("time", {
              key: 0,
              datetime: d.date,
              class: pe([d.isSelected && "flex h-6 w-6 items-center justify-center rounded-full", d.isSelected && d.isToday && "bg-indigo-600", d.isSelected && !d.isToday && "bg-gray-900", "ml-auto"])
            }, we(d.date.split("-").pop().replace(/^0/, "")), 11, gl)) : ae("", !0),
            S("p", bl, we(d.events.length) + " events ", 1),
            d.events.length > 0 ? (V(), K("div", _l, [
              (V(!0), K(ze, null, Ye(d.events, (g) => (V(), K("div", {
                key: g.id,
                class: "mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"
              }))), 128))
            ])) : ae("", !0)
          ], 10, yl))), 128))
        ])
      ])
    ]),
    ((y = e.selectedDay) == null ? void 0 : y.events.length) > 0 ? (V(), K("div", wl, [
      S("ol", kl, [
        (V(!0), K(ze, null, Ye(e.selectedDay.events, (d) => (V(), K("li", {
          key: d.id,
          class: "flex p-4 pr-6 group focus-within:bg-gray-50 hover:bg-gray-50"
        }, [
          S("div", Ol, [
            S("p", xl, we(d.name), 1),
            S("time", {
              datetime: d.datetime,
              class: "flex items-center mt-2 text-gray-700"
            }, [
              Ie(v, {
                class: "w-5 h-5 mr-2 text-gray-400",
                "aria-hidden": "true"
              }),
              Pt(" " + we(d.time), 1)
            ], 8, Sl)
          ]),
          S("button", {
            class: "self-center flex-none px-3 py-2 ml-6 font-semibold text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm opacity-0 hover:bg-gray-50 focus:opacity-100 group-hover:opacity-100",
            onClick: (g) => e.handleEventClick(d)
          }, [
            Pt(" Détail"),
            S("span", $l, ", " + we(d.name), 1)
          ], 8, El)
        ]))), 128))
      ])
    ])) : ae("", !0)
  ]);
}
const zv = /* @__PURE__ */ Ee(Jo, [["render", Al]]), Tl = st({
  props: {
    transition: {
      type: String,
      default: "slide-y"
    },
    expand: {
      type: Boolean,
      default: !1
    },
    openOnMount: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    closeOnClickOutside: {
      type: Boolean,
      default: !0
    }
  },
  data() {
    return {
      isDropdownOpen: !1
    };
  },
  mounted() {
    this.closeOnClickOutside && window.addEventListener("click", this.documentClick), this.openOnMount && this.open();
  },
  beforeUnmount() {
    this.closeOnClickOutside && window.removeEventListener("click", this.documentClick);
  },
  methods: {
    toggleDropdown() {
      this.disabled || (this.isDropdownOpen ? this.close() : this.open());
    },
    documentClick(e) {
      if (this.isDropdownOpen) {
        const r = this.$refs.dropdownMenu, t = e.target, s = [...document.getElementsByClassName("modal")].filter((o) => o.contains(t)).length;
        r && r !== t && !r.contains(t) && !s && this.close();
      }
    },
    close() {
      this.isDropdownOpen = !1, this.$emit("closed");
    },
    open() {
      this.isDropdownOpen = !0, this.$emit("opened");
    },
    collapse(e) {
      this.expand && (e.style.height = "0");
    },
    expandHeight(e) {
      this.expand && (e.style.height = `${e.scrollHeight}px`);
    }
  }
}), Ml = { ref: "dropdownMenu" };
function Nl(e, r, t, s, o, b) {
  return V(), K("div", Ml, [
    S("span", {
      onClick: r[0] || (r[0] = (...l) => e.toggleDropdown && e.toggleDropdown(...l))
    }, [
      $e(e.$slots, "trigger")
    ]),
    Ie(Mt, {
      name: e.transition,
      onBeforeEnter: e.collapse,
      onEnter: e.expandHeight,
      onBeforeLeave: e.expandHeight,
      onLeave: e.collapse
    }, {
      default: Be(() => [
        e.isDropdownOpen ? $e(e.$slots, "content", { key: 0 }) : ae("", !0)
      ]),
      _: 3
    }, 8, ["name", "onBeforeEnter", "onEnter", "onBeforeLeave", "onLeave"])
  ], 512);
}
const Sr = /* @__PURE__ */ Ee(Tl, [["render", Nl]]), Cl = st({
  props: {
    name: {
      type: String,
      required: !0
    },
    help: {
      type: String,
      required: !1,
      default: null
    },
    required: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String,
      required: !1,
      default: null
    },
    errors: {
      type: Object,
      required: !1,
      default: null
    }
  },
  computed: {
    errorMessage() {
      return this.errors && this.errors[this.name] ? typeof this.errors[this.name] == "string" ? this.errors[this.name] : this.errors[this.name][0] : null;
    }
  }
}), Ll = { class: "relative input-layout" }, Pl = ["for"], Dl = {
  key: 0,
  class: "ml-1 text-red-500"
}, Il = ["textContent"], Bl = ["textContent"];
function jl(e, r, t, s, o, b) {
  return V(), K("div", Ll, [
    e.label ? (V(), K("label", {
      key: 0,
      class: "mb-1 label",
      for: e.name
    }, [
      Pt(we(e.label), 1),
      e.required ? (V(), K("sup", Dl, "*")) : ae("", !0)
    ], 8, Pl)) : ae("", !0),
    $e(e.$slots, "default"),
    e.errors && e.errors[e.name] ? (V(), K("p", {
      key: 1,
      class: "input-error",
      textContent: we(e.errorMessage)
    }, null, 8, Il)) : ae("", !0),
    e.help ? (V(), K("p", {
      key: 2,
      class: "mt-1 text-xs text-gray-600",
      textContent: we(e.help)
    }, null, 8, Bl)) : ae("", !0)
  ]);
}
const ql = /* @__PURE__ */ Ee(Cl, [["render", jl]]), Bt = {
  components: {
    UiLayoutInput: ql
  },
  props: {
    name: {
      type: String,
      required: !0
    },
    errors: {
      type: Object,
      required: !1,
      default: null
    },
    help: {
      type: String,
      required: !1,
      default: null
    },
    required: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String,
      required: !1,
      default: null
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    hasSlot() {
      return this.$slots && this.$slots.default;
    },
    hasIconSlot() {
      return this.$slots && this.$slots.icon;
    },
    layoutProps() {
      return {
        name: this.name,
        help: this.help,
        required: this.required,
        label: this.label,
        errors: this.errors
      };
    }
  }
}, Rl = st({
  mixins: [Bt],
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: [String, Object],
      default: null
    },
    month: {
      type: Boolean,
      default: !1
    },
    withTime: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    formattedValue() {
      return _e(this.modelValue).isValid() ? this.withTime ? _e(this.modelValue).format("YYYY-MM-DDTHH:mm") : this.month ? _e(this.modelValue).format("YYYY-MM") : _e(this.modelValue).format("YYYY-MM-DD") : this.modelValue;
    }
  },
  methods: {
    updateValue(e) {
      if (this.withTime)
        this.$emit("update:modelValue", _e(e.target.value).format("YYYY-MM-DD HH:mm:ss"));
      else if (this.month)
        this.$emit("update:modelValue", _e(e.target.value).format("YYYY-MM"));
      else {
        if (e.target.value.split("-")[0].startsWith("0"))
          return this.modelValue;
        this.$emit("update:modelValue", e.target.value);
      }
    }
  }
}), Vl = ["id", "name", "value", "type", "required", "disabled"];
function Fl(e, r, t, s, o, b) {
  const l = ke("UiLayoutInput");
  return V(), je(l, Dt(It(e.layoutProps)), {
    default: Be(() => [
      S("input", Nt({
        id: e.name,
        name: e.name,
        value: e.formattedValue,
        type: e.month ? "month" : e.withTime ? "datetime-local" : "date",
        class: "input"
      }, e.$attrs, {
        required: e.required,
        disabled: e.disabled,
        onInput: r[0] || (r[0] = (...v) => e.updateValue && e.updateValue(...v))
      }), null, 16, Vl)
    ]),
    _: 1
  }, 16);
}
const Ul = /* @__PURE__ */ Ee(Rl, [["render", Fl]]), zl = {
  components: {
    UiDropdown: Sr,
    UiInputDate: Ul,
    ChevronLeftIconSolid: ho,
    CheckIconSolid: Fr,
    ChevronRightIconSolid: po
  },
  props: {
    from: {
      type: [Object, String, Date],
      required: !0
    },
    to: {
      type: [Object, String, Date],
      required: !0
    },
    period: {
      type: String,
      default: "week"
    }
  },
  data() {
    return {
      date: this.from
    };
  },
  methods: {
    setNewDate(e) {
      this.date = _e(e.target.value).startOf(this.period).format("YYYY-MM-DD");
    },
    changeDay() {
      this.$refs.datePickerDropdown.close(), this.$emit("changed", {
        from: _e(this.date).startOf(this.period).format("YYYY-MM-DD"),
        to: _e(this.date).endOf(this.period).format("YYYY-MM-DD")
      });
    },
    prev() {
      this.date = _e(this.from).subtract(1, this.period).format("YYYY-MM-DD"), this.changeDay();
    },
    next() {
      this.date = _e(this.from).add(1, this.period).format("YYYY-MM-DD"), this.changeDay();
    }
  }
}, Hl = { class: "flex items-center rounded-md shadow-sm md:items-stretch" }, Yl = /* @__PURE__ */ S("span", { class: "sr-only" }, "Précédent", -1), Kl = {
  type: "button",
  class: "border-t border-b border-gray-300 bg-white py-2 px-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative block"
}, Wl = {
  type: "submit",
  class: "btn btn-icon"
}, Gl = /* @__PURE__ */ S("span", { class: "sr-only" }, "Suivant", -1);
function Zl(e, r, t, s, o, b) {
  const l = ke("ChevronLeftIconSolid"), v = ke("UiInputDate"), y = ke("CheckIconSolid"), d = ke("UiDropdown"), g = ke("ChevronRightIconSolid");
  return V(), K("div", Hl, [
    S("button", {
      type: "button",
      class: "flex items-center justify-center py-2 pl-3 pr-4 text-gray-400 bg-white border border-r-0 border-gray-300 rounded-l-md hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50",
      onClick: r[0] || (r[0] = (...i) => b.prev && b.prev(...i))
    }, [
      Yl,
      Ie(l, { class: "w-5 h-5" })
    ]),
    Ie(d, {
      ref: "datePickerDropdown",
      class: "relative"
    }, {
      trigger: Be(() => [
        S("button", Kl, [
          $e(e.$slots, "default")
        ])
      ]),
      content: Be(() => [
        S("form", {
          class: "absolute right-0 z-40 flex items-center p-3 mt-2 space-x-4 origin-top-right bg-white rounded-md shadow-lg",
          onSubmit: r[1] || (r[1] = xr((...i) => b.changeDay && b.changeDay(...i), ["prevent"]))
        }, [
          Ie(v, {
            placeholder: "Semaine",
            value: t.from,
            name: "from",
            onInput: b.setNewDate
          }, null, 8, ["value", "onInput"]),
          S("button", Wl, [
            Ie(y, { class: "w-5 h-5" })
          ])
        ], 32)
      ]),
      _: 3
    }, 512),
    S("button", {
      type: "button",
      class: "flex items-center justify-center py-2 pl-4 pr-3 text-gray-400 bg-white border border-l-0 border-gray-300 rounded-r-md hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50",
      onClick: r[2] || (r[2] = (...i) => b.next && b.next(...i))
    }, [
      Gl,
      Ie(g, { class: "w-5 h-5" })
    ])
  ]);
}
const Xl = /* @__PURE__ */ Ee(zl, [["render", Zl]]);
var yr = {}, Jl = {
  get exports() {
    return yr;
  },
  set exports(e) {
    yr = e;
  }
};
(function(e, r) {
  (function(t, s) {
    e.exports = s();
  })(at, function() {
    return function(t, s, o) {
      var b = s.prototype, l = function(i) {
        return i && (i.indexOf ? i : i.s);
      }, v = function(i, n, a, p, h) {
        var m = i.name ? i : i.$locale(), f = l(m[n]), u = l(m[a]), k = f || u.map(function(w) {
          return w.slice(0, p);
        });
        if (!h)
          return k;
        var c = m.weekStart;
        return k.map(function(w, M) {
          return k[(M + (c || 0)) % 7];
        });
      }, y = function() {
        return o.Ls[o.locale()];
      }, d = function(i, n) {
        return i.formats[n] || function(a) {
          return a.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(p, h, m) {
            return h || m.slice(1);
          });
        }(i.formats[n.toUpperCase()]);
      }, g = function() {
        var i = this;
        return { months: function(n) {
          return n ? n.format("MMMM") : v(i, "months");
        }, monthsShort: function(n) {
          return n ? n.format("MMM") : v(i, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return i.$locale().weekStart || 0;
        }, weekdays: function(n) {
          return n ? n.format("dddd") : v(i, "weekdays");
        }, weekdaysMin: function(n) {
          return n ? n.format("dd") : v(i, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(n) {
          return n ? n.format("ddd") : v(i, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(n) {
          return d(i.$locale(), n);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      b.localeData = function() {
        return g.bind(this)();
      }, o.localeData = function() {
        var i = y();
        return { firstDayOfWeek: function() {
          return i.weekStart || 0;
        }, weekdays: function() {
          return o.weekdays();
        }, weekdaysShort: function() {
          return o.weekdaysShort();
        }, weekdaysMin: function() {
          return o.weekdaysMin();
        }, months: function() {
          return o.months();
        }, monthsShort: function() {
          return o.monthsShort();
        }, longDateFormat: function(n) {
          return d(i, n);
        }, meridiem: i.meridiem, ordinal: i.ordinal };
      }, o.months = function() {
        return v(y(), "months");
      }, o.monthsShort = function() {
        return v(y(), "monthsShort", "months", 3);
      }, o.weekdays = function(i) {
        return v(y(), "weekdays", null, null, i);
      }, o.weekdaysShort = function(i) {
        return v(y(), "weekdaysShort", "weekdays", 3, i);
      }, o.weekdaysMin = function(i) {
        return v(y(), "weekdaysMin", "weekdays", 2, i);
      };
    };
  });
})(Jl);
const Ql = yr;
var gr = {}, ea = {
  get exports() {
    return gr;
  },
  set exports(e) {
    gr = e;
  }
};
(function(e, r) {
  (function(t, s) {
    e.exports = s(sr);
  })(at, function(t) {
    function s(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var o = s(t), b = { name: "fr", weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, ordinal: function(l) {
      return "" + l + (l === 1 ? "er" : "");
    } };
    return o.default.locale(b, null, !0), b;
  });
})(ea);
const ta = gr;
_e.extend(Ur);
_e.locale({ ...ta, weekStart: 1 });
const na = {
  components: {
    EllipsisHorizontalIconSolid: go,
    UiPeriodSwitcher: Xl,
    UiDropdown: Sr
  },
  props: {
    year: {
      type: [String, Number],
      default: () => _e().year()
    }
  },
  data() {
    return {
      from: _e().year(this.year || _e().year()).startOf("year"),
      to: _e().year(this.year || _e().year()).endOf("year")
    };
  },
  computed: {
    hasHeaderSlot() {
      return this.$slots && this.$slots["header-right"];
    },
    months() {
      return _e.extend(Ql), _e().localeData(), _e.months();
    },
    cols() {
      return [
        "L",
        "M",
        "M",
        "J",
        "V",
        "S",
        "D",
        "L",
        "M",
        "M",
        "J",
        "V",
        "S",
        "D",
        "L",
        "M",
        "M",
        "J",
        "V",
        "S",
        "D",
        "L",
        "M",
        "M",
        "J",
        "V",
        "S",
        "D",
        "L",
        "M",
        "M",
        "J",
        "V",
        "S",
        "D",
        "L",
        "M",
        "M",
        "J",
        "V"
      ];
    }
  },
  methods: {
    isWeekend(e) {
      return _e(e).weekday() === 6 || _e(e).weekday() === 5;
    },
    daysFromMonth(e) {
      const r = _e().year(_e(this.from).year()).month(e).startOf("month").weekday(), t = [...Array(r).keys()].map((o) => ({
        date: null,
        weekend: [5, 6].includes(o)
      })), s = [...Array(41 - r).keys()].filter((o) => o !== 0).map((o) => {
        const b = _e().year(_e(this.from).year()).month(e).date(o);
        return b.month() !== e ? {
          date: null,
          weekend: [5, 6].includes(b.weekday())
        } : {
          date: b,
          weekend: [5, 6].includes(b.weekday())
        };
      });
      return [...t, ...s];
    },
    changeDates({ from: e, to: r }) {
      this.from = _e(e), this.to = _e(r), this.$emit("change", { from: this.from, to: this.to });
    }
  }
}, ra = { class: "relative z-20 flex items-center justify-between px-6 py-4 mb-4 border-b border-slate-200 lg:flex-none" }, ia = { class: "text-lg font-semibold text-slate-900" }, oa = ["datetime"], la = { class: "flex items-center" }, aa = { id: "year-table-title" }, sa = { class: "hidden md:flex md:items-center" }, ua = {
  key: 0,
  class: "w-px h-6 mx-6 bg-slate-300"
}, ca = { class: "relative ml-6 md:hidden" }, fa = {
  id: "menu-0-button",
  type: "button",
  class: "flex items-center p-2 -mx-2 border border-transparent rounded-full text-slate-400 hover:text-slate-500",
  "aria-expanded": "false",
  "aria-haspopup": "true"
}, da = /* @__PURE__ */ S("span", { class: "sr-only" }, "Open menu", -1), ha = /* @__PURE__ */ S("div", {
  class: "absolute right-0 mt-3 overflow-hidden origin-top-right bg-white divide-y rounded-md shadow-lg divide-slate-100 focus:outline-none w-36 ring-1 ring-black ring-opacity-5",
  role: "menu",
  "aria-orientation": "vertical",
  "aria-labelledby": "menu-0-button",
  tabindex: "-1"
}, [
  /* @__PURE__ */ S("div", {
    class: "py-1",
    role: "none"
  }, [
    /* @__PURE__ */ S("a", {
      id: "menu-0-item-0",
      href: "#",
      class: "block px-4 py-2 text-sm text-slate-700",
      role: "menuitem",
      tabindex: "-1"
    }, "Create event")
  ]),
  /* @__PURE__ */ S("div", {
    class: "py-1",
    role: "none"
  }, [
    /* @__PURE__ */ S("a", {
      id: "menu-0-item-1",
      href: "#",
      class: "block px-4 py-2 text-sm text-slate-700",
      role: "menuitem",
      tabindex: "-1"
    }, "Go to today")
  ]),
  /* @__PURE__ */ S("div", {
    class: "py-1",
    role: "none"
  }, [
    /* @__PURE__ */ S("a", {
      id: "menu-0-item-2",
      href: "#",
      class: "block px-4 py-2 text-sm text-slate-700",
      role: "menuitem",
      tabindex: "-1"
    }, "Day view"),
    /* @__PURE__ */ S("a", {
      id: "menu-0-item-3",
      href: "#",
      class: "block px-4 py-2 text-sm text-slate-700",
      role: "menuitem",
      tabindex: "-1"
    }, "Week view"),
    /* @__PURE__ */ S("a", {
      id: "menu-0-item-4",
      href: "#",
      class: "block px-4 py-2 text-sm text-slate-700",
      role: "menuitem",
      tabindex: "-1"
    }, "Month view"),
    /* @__PURE__ */ S("a", {
      id: "menu-0-item-5",
      href: "#",
      class: "block px-4 py-2 text-sm text-slate-700",
      role: "menuitem",
      tabindex: "-1"
    }, "Year view")
  ])
], -1), pa = {
  class: "hidden w-full md:block",
  "aria-describedby": "year-table-title"
}, ma = /* @__PURE__ */ S("th", { scope: "col" }, null, -1), va = ["textContent"], ya = ["data-date"], ga = { class: "block md:hidden" }, ba = { class: "px-2 py-1 font-medium leading-6 text-center capitalize rounded cursor-pointer text-slate-600 bg-slate-50" }, _a = { class: "p-2 text-center bg-white" }, wa = { class: "grid grid-cols-7 font-bold text-slate-900" }, ka = { class: "grid grid-cols-7 font-medium text-slate-600" };
function Oa(e, r, t, s, o, b) {
  const l = ke("UiPeriodSwitcher"), v = ke("EllipsisHorizontalIconSolid"), y = ke("UiDropdown");
  return V(), K("div", null, [
    S("header", ra, [
      S("h1", ia, [
        S("time", { datetime: t.year }, we(e.$filters.format(o.from, "YYYY")), 9, oa)
      ]),
      S("div", la, [
        Ie(l, {
          from: o.from,
          to: o.to,
          period: "year",
          onChanged: b.changeDates
        }, {
          default: Be(() => [
            S("span", aa, we(e.$filters.format(o.from, "YYYY")), 1)
          ]),
          _: 1
        }, 8, ["from", "to", "onChanged"]),
        S("div", sa, [
          b.hasHeaderSlot ? (V(), K("div", ua)) : ae("", !0),
          $e(e.$slots, "header-right")
        ]),
        S("div", ca, [
          S("button", fa, [
            da,
            Ie(v, { class: "w-5 h-5" })
          ]),
          ha
        ])
      ])
    ]),
    S("table", pa, [
      S("thead", null, [
        S("tr", null, [
          ma,
          (V(!0), K(ze, null, Ye(b.cols, (d, g) => (V(), K("th", {
            key: g,
            scope: "col",
            class: "w-8 h-8 text-xs leading-6 text-slate-500"
          }, we(d), 1))), 128))
        ])
      ]),
      S("tbody", null, [
        (V(!0), K(ze, null, Ye(b.months, (d, g) => (V(), K("tr", {
          key: d,
          class: "h-8"
        }, [
          S("td", {
            class: "h-8 pr-2 text-xs leading-6 text-right capitalize text-slate-700",
            textContent: we(d)
          }, null, 8, va),
          (V(!0), K(ze, null, Ye(b.daysFromMonth(g), (i, n) => (V(), K("td", {
            key: n,
            class: pe(["relative w-8 h-8 p-0 text-xs text-center border border-slate-300", {
              "bg-slate-200": i.weekend,
              "bg-white": !i.weekend
            }]),
            "data-date": i.date ? i.date.format("YYYY-MM-DD") : null
          }, [
            i.date ? $e(e.$slots, i.date.format("YYYY-MM-DD"), { key: 0 }, () => [
              Pt(we(i.date.format("D")), 1)
            ]) : ae("", !0)
          ], 10, ya))), 128))
        ]))), 128))
      ])
    ]),
    S("div", ga, [
      (V(!0), K(ze, null, Ye(b.months, (d, g) => (V(), K("div", { key: d }, [
        Ie(y, { class: "mb-1" }, {
          trigger: Be(() => [
            S("div", ba, we(d), 1)
          ]),
          content: Be(() => [
            S("div", _a, [
              S("div", wa, [
                (V(), K(ze, null, Ye(["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"], (i) => S("div", {
                  key: i,
                  class: "border"
                }, we(i), 1)), 64))
              ]),
              S("div", ka, [
                (V(!0), K(ze, null, Ye(b.daysFromMonth(g), (i, n) => (V(), K("div", {
                  key: n,
                  class: "relative border"
                }, [
                  i.date ? $e(e.$slots, i.date.format("YYYY-MM-DD"), { key: 0 }, () => [
                    Pt(we(i.date.format("D")), 1)
                  ]) : ae("", !0)
                ]))), 128))
              ])
            ])
          ]),
          _: 2
        }, 1024)
      ]))), 128))
    ])
  ]);
}
const Hv = /* @__PURE__ */ Ee(na, [["render", Oa]]), xa = {}, Sa = { class: "bg-white rounded-lg shadow" };
function Ea(e, r) {
  return V(), je(Mt, { appear: "" }, {
    default: Be(() => [
      S("div", Sa, [
        $e(e.$slots, "default")
      ])
    ]),
    _: 3
  });
}
const $a = /* @__PURE__ */ Ee(xa, [["render", Ea]]), Aa = {}, Ta = { class: "px-4 py-5 sm:p-6" };
function Ma(e, r) {
  return V(), K("div", Ta, [
    $e(e.$slots, "default")
  ]);
}
const Na = /* @__PURE__ */ Ee(Aa, [["render", Ma]]), Ca = {}, La = { class: "px-4 py-4 border-t border-gray-200 rounded-b-lg sm:px-6" };
function Pa(e, r) {
  return V(), K("div", La, [
    $e(e.$slots, "default")
  ]);
}
const Yv = /* @__PURE__ */ Ee(Ca, [["render", Pa]]), Da = {}, Ia = { class: "flex items-center justify-between px-4 py-5 border-b border-gray-200 sm:px-6" }, Ba = { class: "text-lg font-medium leading-6 text-gray-900" };
function ja(e, r) {
  return V(), K("div", Ia, [
    S("h3", Ba, [
      $e(e.$slots, "default")
    ]),
    $e(e.$slots, "header-right")
  ]);
}
const Kv = /* @__PURE__ */ Ee(Da, [["render", ja]]), { createElementVNode: qa, openBlock: Ra, createElementBlock: Va } = ft;
var Fa = function(r, t) {
  return Ra(), Va("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    qa("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
    })
  ]);
};
const { createElementVNode: Ua, openBlock: za, createElementBlock: Ha } = ft;
var Ya = function(r, t) {
  return za(), Ha("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    Ua("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    })
  ]);
};
const { createElementVNode: Ka, openBlock: Wa, createElementBlock: Ga } = ft;
var Za = function(r, t) {
  return Wa(), Ga("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    Ka("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]);
};
const { createElementVNode: Xa, openBlock: Ja, createElementBlock: Qa } = ft;
var es = function(r, t) {
  return Ja(), Qa("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    Xa("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.5 12.75l6 6 9-13.5"
    })
  ]);
};
const { createElementVNode: ts, openBlock: ns, createElementBlock: rs } = ft;
var is = function(r, t) {
  return ns(), rs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    ts("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
    })
  ]);
};
const { createElementVNode: os, openBlock: ls, createElementBlock: as } = ft;
var ss = function(r, t) {
  return ls(), as("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    os("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 6v12m6-6H6"
    })
  ]);
};
const { createElementVNode: us, openBlock: cs, createElementBlock: fs } = ft;
var ds = function(r, t) {
  return cs(), fs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    us("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
    })
  ]);
};
const { createElementVNode: hs, openBlock: ps, createElementBlock: ms } = ft;
var vs = function(r, t) {
  return ps(), ms("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    hs("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]);
};
const { createElementVNode: ys, openBlock: gs, createElementBlock: bs } = ft;
var _s = function(r, t) {
  return gs(), bs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    ys("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 18L18 6M6 6l12 12"
    })
  ]);
}, ws = Fa, ks = Ya, Os = Za, xs = es, Ss = is, Es = ss, $s = ds, As = vs, zr = _s;
const Ts = {
  components: {
    CheckIconOutline: xs,
    ExclamationTriangleIconOutline: Ss,
    XMarkIconSolid: Gn
  },
  data() {
    return {
      isOpen: !1,
      title: void 0,
      message: void 0,
      success: !1,
      buttons: []
    };
  },
  computed: {
    hasCloseButton() {
      return this.buttons.filter((e) => typeof e.handler != "function").length > 0;
    }
  },
  beforeMount() {
    this.emitter.on("hide-dialog", this.close), this.emitter.on("show-dialog", this.open);
  },
  beforeUnmount() {
    this.emitter.off("hide-dialog", this.close), this.emitter.off("show-dialog", this.open);
  },
  methods: {
    close() {
      this.stopLoading(), this.isOpen = !1;
    },
    handle(e) {
      e.handler ? (e.loadOnClick && (this.buttons = this.buttons.map((r) => (r.title === e.title && (r.isLoading = !0), r))), e.handler()) : this.close();
    },
    open(e) {
      e && (this.title = e.title, this.message = e.message, this.success = e.success || !1, this.buttons = e.buttons || []), this.isOpen = !0;
    },
    stopLoading() {
      this.buttons = this.buttons.map((e) => (e.isLoading = !1, e));
    }
  }
}, Ms = {
  key: 0,
  class: "fixed inset-x-0 bottom-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center",
  style: { "z-index": "1000 !important" }
}, Ns = /* @__PURE__ */ S("div", { class: "fixed inset-0 transition-opacity" }, [
  /* @__PURE__ */ S("div", { class: "absolute inset-0 bg-gray-500 opacity-75" })
], -1), Cs = { class: "relative px-4 pt-5 pb-4 overflow-hidden transition-all bg-white rounded-lg shadow-xl sm:max-w-lg sm:w-full sm:p-6" }, Ls = {
  key: 0,
  class: "absolute top-0 right-0 hidden pt-4 pr-4 sm:block"
}, Ps = { class: "sm:flex sm:items-start" }, Ds = {
  key: 0,
  class: "flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full shrink-0 sm:mx-0 sm:h-10 sm:w-10"
}, Is = {
  key: 1,
  class: "flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full shrink-0 sm:mx-0 sm:h-10 sm:w-10"
}, Bs = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left" }, js = { class: "text-lg font-medium leading-6 text-gray-900" }, qs = { class: "mt-2" }, Rs = { class: "text-sm leading-5 text-gray-500" }, Vs = { class: "mt-5 sm:mt-4 sm:flex sm:flex-row-reverse" }, Fs = ["disabled", "onClick"];
function Us(e, r, t, s, o, b) {
  const l = ke("XMarkIconSolid"), v = ke("CheckIconOutline"), y = ke("ExclamationTriangleIconOutline");
  return V(), je(Mt, { name: "modal-open" }, {
    default: Be(() => [
      o.isOpen ? (V(), K("div", Ms, [
        Ns,
        S("div", Cs, [
          b.hasCloseButton ? ae("", !0) : (V(), K("div", Ls, [
            S("button", {
              type: "button",
              class: "text-gray-400 transition duration-150 ease-in-out hover:text-gray-500 focus:outline-none focus:text-gray-500",
              onClick: r[0] || (r[0] = (...d) => b.close && b.close(...d))
            }, [
              Ie(l, { class: "w-6 h-6" })
            ])
          ])),
          S("div", Ps, [
            o.success ? (V(), K("div", Ds, [
              Ie(v, { class: "w-6 h-6 text-green-600" })
            ])) : (V(), K("div", Is, [
              Ie(y, { class: "w-6 h-6 text-red-600" })
            ])),
            S("div", Bs, [
              S("h3", js, we(o.title), 1),
              S("div", qs, [
                S("p", Rs, we(o.message), 1)
              ])
            ])
          ]),
          S("div", Vs, [
            (V(!0), K(ze, null, Ye(o.buttons, (d) => (V(), K("span", {
              key: d.title,
              class: "flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"
            }, [
              S("button", {
                type: "button",
                class: pe(["btn", [d.class, { loading: d.isLoading }]]),
                disabled: d.isLoading,
                onClick: (g) => b.handle(d)
              }, we(d.title), 11, Fs)
            ]))), 128))
          ])
        ])
      ])) : ae("", !0)
    ]),
    _: 1
  });
}
const Wv = /* @__PURE__ */ Ee(Ts, [["render", Us]]), Gv = (e) => {
  const r = e.config.globalProperties.emitter;
  e.config.globalProperties.$dialog = {
    show(t) {
      r.emit("show-dialog", t);
    },
    open(t) {
      r.emit("show-dialog", t);
    },
    hide(t) {
      r.emit("hide-dialog", t);
    },
    close(t) {
      r.emit("hide-dialog", t);
    }
  };
}, zs = {
  components: {
    UserIconSolid: _o,
    CalendarIconSolid: co
  },
  props: {
    title: {
      type: String,
      required: !0
    },
    author: {
      type: String,
      default: null
    },
    date: {
      type: String,
      default: null
    }
  }
}, Hs = { class: "px-4 py-4 transition duration-150 ease-in-out sm:px-6 hover:bg-gray-50" }, Ys = { class: "flex items-center justify-between" }, Ks = { class: "text-sm font-medium text-indigo-600 truncate" }, Ws = { class: "mt-2 sm:flex sm:justify-between" }, Gs = { class: "sm:flex" }, Zs = {
  key: 0,
  class: "flex items-center text-sm text-gray-500"
}, Xs = { class: "flex items-center mt-2 text-sm text-gray-500 sm:mt-0" }, Js = ["datetime"];
function Qs(e, r, t, s, o, b) {
  const l = ke("UserIconSolid"), v = ke("CalendarIconSolid");
  return V(), K("div", Hs, [
    S("div", Ys, [
      S("p", Ks, we(t.title), 1)
    ]),
    S("div", Ws, [
      S("div", Gs, [
        t.author ? (V(), K("p", Zs, [
          Ie(l, { class: "flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" }),
          Pt(" " + we(t.author), 1)
        ])) : ae("", !0)
      ]),
      S("div", Xs, [
        Ie(v, { class: "flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" }),
        S("p", null, [
          S("time", { datetime: t.date }, we(t.date), 9, Js)
        ])
      ])
    ])
  ]);
}
const Zv = /* @__PURE__ */ Ee(zs, [["render", Qs]]), eu = {}, tu = { class: "overflow-hidden bg-white divide-y divide-gray-200 shadow sm:rounded-md" };
function nu(e, r) {
  return V(), je(Mt, { appear: "" }, {
    default: Be(() => [
      S("div", tu, [
        $e(e.$slots, "default")
      ])
    ]),
    _: 3
  });
}
const Xv = /* @__PURE__ */ Ee(eu, [["render", nu]]), ru = {}, iu = { class: "text-center text-gray-700 illustrations" }, ou = /* @__PURE__ */ S("svg", {
  class: "checkmark",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 52 52"
}, [
  /* @__PURE__ */ S("circle", {
    class: "checkmark__circle",
    cx: "26",
    cy: "26",
    r: "25",
    fill: "none"
  }),
  /* @__PURE__ */ S("path", {
    class: "checkmark__check",
    fill: "none",
    d: "M14.1 27.2l7.1 7.2 16.7-16.8"
  })
], -1);
function lu(e, r) {
  return V(), je(Mt, { appear: "" }, {
    default: Be(() => [
      S("div", iu, [
        ou,
        $e(e.$slots, "default")
      ])
    ]),
    _: 3
  });
}
const Jv = /* @__PURE__ */ Ee(ru, [["render", lu]]), au = {
  components: { UiAlert: Uo },
  props: {
    errors: {
      type: Object,
      default: null
    }
  },
  computed: {
    hasErrors() {
      return this.errors && Object.keys(this.errors).length > 0;
    }
  }
};
function su(e, r, t, s, o, b) {
  const l = ke("UiAlert");
  return b.hasErrors ? (V(), je(l, {
    key: 0,
    level: "danger",
    title: "Il y a des erreurs dans les données soumises"
  }, {
    default: Be(() => [
      (V(!0), K(ze, null, Ye(t.errors, (v, y) => (V(), K("ul", {
        key: y,
        role: "list",
        class: "pl-5 space-y-1 list-disc"
      }, [
        (V(!0), K(ze, null, Ye(t.errors[y], (d) => (V(), K("li", { key: d }, we(d), 1))), 128))
      ]))), 128))
    ]),
    _: 1
  })) : ae("", !0);
}
const Qv = /* @__PURE__ */ Ee(au, [["render", su]]), uu = st({
  mixins: [Bt],
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: [String, Array, Boolean],
      default: !1
    },
    checkboxValue: {
      type: [String, Array, Boolean, Number],
      default: !0
    }
  },
  computed: {
    shouldBeChecked() {
      return Array.isArray(this.modelValue) ? this.modelValue.includes(this.checkboxValue) : this.modelValue === this.checkboxValue;
    }
  },
  methods: {
    updateValue(e) {
      const r = e.target.checked;
      if (Array.isArray(this.modelValue)) {
        const t = [...this.modelValue];
        r ? t.push(this.checkboxValue) : t.splice(t.indexOf(this.checkboxValue), 1), this.$emit("update:modelValue", t);
      } else
        this.$emit("update:modelValue", r);
    }
  }
}), cu = { class: "flex items-center" }, fu = ["id", "value", "checked", "name", "required", "disabled"], du = ["for"];
function hu(e, r, t, s, o, b) {
  const l = ke("UiLayoutInput");
  return V(), je(l, Dt(It(e.layoutProps)), {
    default: Be(() => [
      S("div", cu, [
        S("input", Nt({
          id: e.name,
          ref: "checkbox",
          value: e.modelValue,
          checked: e.shouldBeChecked,
          type: "checkbox",
          class: "border-gray-300 rounded text-primary-500 focus:ring-primary-500",
          name: e.name
        }, e.$attrs, {
          required: e.required,
          disabled: e.disabled,
          onChange: r[0] || (r[0] = (...v) => e.updateValue && e.updateValue(...v))
        }), null, 16, fu),
        e.hasSlot ? (V(), K("label", {
          key: 0,
          for: e.name,
          class: "block ml-2 text-sm text-gray-900"
        }, [
          $e(e.$slots, "default")
        ], 8, du)) : ae("", !0)
      ])
    ]),
    _: 3
  }, 16);
}
const ey = /* @__PURE__ */ Ee(uu, [["render", hu]]), pu = st({
  mixins: [Bt],
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: [String, Boolean, Date],
      required: !1,
      default: null
    },
    withTime: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    shouldBeChecked() {
      return !!this.modelValue;
    }
  },
  methods: {
    updateValue(e) {
      const r = e.target.checked, t = this.withTime ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD";
      this.$emit("update:modelValue", r ? _e().format(t) : null);
    }
  }
}), mu = { class: "flex items-center" }, vu = ["id", "value", "checked", "name", "required", "disabled"], yu = ["for"];
function gu(e, r, t, s, o, b) {
  const l = ke("UiLayoutInput");
  return V(), je(l, Dt(It(e.layoutProps)), {
    default: Be(() => [
      S("div", mu, [
        S("input", Nt({
          id: e.name,
          ref: "checkbox",
          value: e.modelValue,
          checked: e.shouldBeChecked,
          type: "checkbox",
          class: "border-gray-300 rounded text-primary-500 focus:ring-primary-500",
          name: e.name
        }, e.$attrs, {
          required: e.required,
          disabled: e.disabled,
          onChange: r[0] || (r[0] = (...v) => e.updateValue && e.updateValue(...v))
        }), null, 16, vu),
        e.hasSlot ? (V(), K("label", {
          key: 0,
          for: e.name,
          class: "block ml-2 text-sm text-gray-900"
        }, [
          $e(e.$slots, "default")
        ], 8, yu)) : ae("", !0)
      ])
    ]),
    _: 3
  }, 16);
}
const ty = /* @__PURE__ */ Ee(pu, [["render", gu]]), bu = {
  props: {
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      showMessage: !1
    };
  },
  methods: {
    dropFiles(e) {
      if (e.preventDefault(), !this.disabled) {
        if (e.dataTransfer.items)
          for (let r = 0; r < e.dataTransfer.items.length; r++)
            e.dataTransfer.items[r].kind === "file" && this.addFile(e.dataTransfer.items[r].getAsFile());
        else
          for (let r = 0; r < e.dataTransfer.files.length; r++)
            this.addFile(e.dataTransfer.files[r]);
        this.removeDragData(e);
      }
    },
    addFile(e) {
      this.$emit("file-added", e);
    },
    dragOverHandler(e) {
      e.preventDefault(), this.disabled || (this.showMessage = !0);
    },
    removeDragData(e) {
      this.showMessage = !1, e.dataTransfer.items ? e.dataTransfer.items.clear() : e.dataTransfer.clearData();
    }
  }
}, _u = { key: 0 };
function wu(e, r, t, s, o, b) {
  return V(), K("div", {
    class: "relative",
    onDrop: r[0] || (r[0] = (...l) => b.dropFiles && b.dropFiles(...l)),
    onDragover: r[1] || (r[1] = (...l) => b.dragOverHandler && b.dragOverHandler(...l)),
    onDragleave: r[2] || (r[2] = (l) => o.showMessage = !1)
  }, [
    o.showMessage ? (V(), K("div", _u, [
      $e(e.$slots, "drop-here-message")
    ])) : ae("", !0),
    $e(e.$slots, "default")
  ], 32);
}
const ny = /* @__PURE__ */ Ee(bu, [["render", wu]]), ku = st({
  mixins: [Bt],
  inheritAttrs: !1,
  props: {
    type: {
      type: String,
      default: "text"
    },
    modelValue: {
      type: [String, Number],
      required: !1,
      default: null
    }
  },
  methods: {
    onChange(e) {
      this.$emit("update:modelValue", e.target.value);
    },
    focus() {
      this.$refs.input.focus();
    }
  }
}), Ou = { class: "relative" }, xu = {
  key: 0,
  class: "absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 pointer-events-none"
}, Su = ["id", "name", "type", "value", "required", "disabled"];
function Eu(e, r, t, s, o, b) {
  const l = ke("UiLayoutInput");
  return V(), je(l, Dt(It(e.layoutProps)), {
    default: Be(() => [
      S("div", Ou, [
        e.hasIconSlot ? (V(), K("div", xu, [
          $e(e.$slots, "icon")
        ])) : ae("", !0),
        S("input", Nt({
          id: e.name,
          name: e.name,
          type: e.type,
          class: ["input", { "border-red-400": e.errors && e.errors[e.name], "pl-10": e.hasIconSlot }],
          value: e.modelValue
        }, e.$attrs, {
          required: e.required,
          disabled: e.disabled,
          ref: "input",
          onInput: r[0] || (r[0] = (...v) => e.onChange && e.onChange(...v))
        }), null, 16, Su)
      ])
    ]),
    _: 3
  }, 16);
}
const $u = /* @__PURE__ */ Ee(ku, [["render", Eu]]), Au = st({
  components: {
    ArrowUpTrayIconOutline: ws
  },
  mixins: [Bt],
  inheritAttrs: !1,
  props: {
    multiple: {
      type: Boolean,
      default: !1
    },
    accept: {
      type: String,
      default: "*"
    }
  },
  data() {
    return {
      text: void 0
    };
  },
  created() {
    this.modelValue && (this.text = this.modelValue);
  },
  methods: {
    onFileChange(e) {
      this.multiple ? (this.text = e.target.files[0].name, this.$emit("update:modelValue", e.target.files)) : (this.text = e.target.files[0] ? e.target.files[0].name : null, this.$emit("update:modelValue", e.target.files[0]));
    }
  }
}), Tu = ["for"], Mu = { class: "ml-2 text-left truncate" }, Nu = ["id", "name", "accept", "required"];
function Cu(e, r, t, s, o, b) {
  const l = ke("ArrowUpTrayIconOutline"), v = ke("UiLayoutInput");
  return V(), je(v, Dt(It(e.layoutProps)), {
    default: Be(() => [
      S("label", {
        for: e.name,
        class: "relative max-w-full cursor-pointer"
      }, [
        S("div", {
          class: pe(["max-w-full btn", {
            "bg-gray-500 opacity-75": e.disabled
          }])
        }, [
          Ie(l, { class: "w-5 h-5 -ml-2 shrink-0" }),
          S("span", Mu, we(e.text || "Sélectionner " + (e.multiple ? "des fichiers" : "un fichier")), 1)
        ], 2),
        S("input", Nt({
          id: e.name,
          name: e.name,
          accept: e.accept,
          class: "hidden",
          type: "file",
          required: e.required
        }, e.$attrs, {
          onChange: r[0] || (r[0] = (...y) => e.onFileChange && e.onFileChange(...y))
        }), null, 16, Nu)
      ], 8, Tu)
    ]),
    _: 1
  }, 16);
}
const Hr = /* @__PURE__ */ Ee(Au, [["render", Cu]]);
var br = {}, Lu = {
  get exports() {
    return br;
  },
  set exports(e) {
    br = e;
  }
};
/*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
(function(e, r) {
  (function(s, o) {
    e.exports = o();
  })(typeof self < "u" ? self : at, function() {
    return (
      /******/
      function(t) {
        var s = {};
        function o(b) {
          if (s[b])
            return s[b].exports;
          var l = s[b] = {
            /******/
            i: b,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return t[b].call(l.exports, l, l.exports, o), l.l = !0, l.exports;
        }
        return o.m = t, o.c = s, o.d = function(b, l, v) {
          o.o(b, l) || Object.defineProperty(b, l, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: v
            /******/
          });
        }, o.n = function(b) {
          var l = b && b.__esModule ? (
            /******/
            function() {
              return b.default;
            }
          ) : (
            /******/
            function() {
              return b;
            }
          );
          return o.d(l, "a", l), l;
        }, o.o = function(b, l) {
          return Object.prototype.hasOwnProperty.call(b, l);
        }, o.p = "", o(o.s = 109);
      }([
        /* 0 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", { value: !0 });
          var b = o(17), l = o(18), v = o(19), y = o(45), d = o(46), g = o(47), i = o(48), n = o(49), a = o(12), p = o(32), h = o(33), m = o(31), f = o(1), u = {
            Scope: f.Scope,
            create: f.create,
            find: f.find,
            query: f.query,
            register: f.register,
            Container: b.default,
            Format: l.default,
            Leaf: v.default,
            Embed: i.default,
            Scroll: y.default,
            Block: g.default,
            Inline: d.default,
            Text: n.default,
            Attributor: {
              Attribute: a.default,
              Class: p.default,
              Style: h.default,
              Store: m.default
            }
          };
          s.default = u;
        },
        /* 1 */
        /***/
        function(t, s, o) {
          var b = this && this.__extends || function() {
            var m = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(f, u) {
              f.__proto__ = u;
            } || function(f, u) {
              for (var k in u)
                u.hasOwnProperty(k) && (f[k] = u[k]);
            };
            return function(f, u) {
              m(f, u);
              function k() {
                this.constructor = f;
              }
              f.prototype = u === null ? Object.create(u) : (k.prototype = u.prototype, new k());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var l = (
            /** @class */
            function(m) {
              b(f, m);
              function f(u) {
                var k = this;
                return u = "[Parchment] " + u, k = m.call(this, u) || this, k.message = u, k.name = k.constructor.name, k;
              }
              return f;
            }(Error)
          );
          s.ParchmentError = l;
          var v = {}, y = {}, d = {}, g = {};
          s.DATA_KEY = "__blot";
          var i;
          (function(m) {
            m[m.TYPE = 3] = "TYPE", m[m.LEVEL = 12] = "LEVEL", m[m.ATTRIBUTE = 13] = "ATTRIBUTE", m[m.BLOT = 14] = "BLOT", m[m.INLINE = 7] = "INLINE", m[m.BLOCK = 11] = "BLOCK", m[m.BLOCK_BLOT = 10] = "BLOCK_BLOT", m[m.INLINE_BLOT = 6] = "INLINE_BLOT", m[m.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", m[m.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", m[m.ANY = 15] = "ANY";
          })(i = s.Scope || (s.Scope = {}));
          function n(m, f) {
            var u = p(m);
            if (u == null)
              throw new l("Unable to create " + m + " blot");
            var k = u, c = (
              // @ts-ignore
              m instanceof Node || m.nodeType === Node.TEXT_NODE ? m : k.create(f)
            );
            return new k(c, f);
          }
          s.create = n;
          function a(m, f) {
            return f === void 0 && (f = !1), m == null ? null : m[s.DATA_KEY] != null ? m[s.DATA_KEY].blot : f ? a(m.parentNode, f) : null;
          }
          s.find = a;
          function p(m, f) {
            f === void 0 && (f = i.ANY);
            var u;
            if (typeof m == "string")
              u = g[m] || v[m];
            else if (m instanceof Text || m.nodeType === Node.TEXT_NODE)
              u = g.text;
            else if (typeof m == "number")
              m & i.LEVEL & i.BLOCK ? u = g.block : m & i.LEVEL & i.INLINE && (u = g.inline);
            else if (m instanceof HTMLElement) {
              var k = (m.getAttribute("class") || "").split(/\s+/);
              for (var c in k)
                if (u = y[k[c]], u)
                  break;
              u = u || d[m.tagName];
            }
            return u == null ? null : f & i.LEVEL & u.scope && f & i.TYPE & u.scope ? u : null;
          }
          s.query = p;
          function h() {
            for (var m = [], f = 0; f < arguments.length; f++)
              m[f] = arguments[f];
            if (m.length > 1)
              return m.map(function(c) {
                return h(c);
              });
            var u = m[0];
            if (typeof u.blotName != "string" && typeof u.attrName != "string")
              throw new l("Invalid definition");
            if (u.blotName === "abstract")
              throw new l("Cannot register abstract class");
            if (g[u.blotName || u.attrName] = u, typeof u.keyName == "string")
              v[u.keyName] = u;
            else if (u.className != null && (y[u.className] = u), u.tagName != null) {
              Array.isArray(u.tagName) ? u.tagName = u.tagName.map(function(c) {
                return c.toUpperCase();
              }) : u.tagName = u.tagName.toUpperCase();
              var k = Array.isArray(u.tagName) ? u.tagName : [u.tagName];
              k.forEach(function(c) {
                (d[c] == null || u.className == null) && (d[c] = u);
              });
            }
            return u;
          }
          s.register = h;
        },
        /* 2 */
        /***/
        function(t, s, o) {
          var b = o(51), l = o(11), v = o(3), y = o(20), d = String.fromCharCode(0), g = function(i) {
            Array.isArray(i) ? this.ops = i : i != null && Array.isArray(i.ops) ? this.ops = i.ops : this.ops = [];
          };
          g.prototype.insert = function(i, n) {
            var a = {};
            return i.length === 0 ? this : (a.insert = i, n != null && typeof n == "object" && Object.keys(n).length > 0 && (a.attributes = n), this.push(a));
          }, g.prototype.delete = function(i) {
            return i <= 0 ? this : this.push({ delete: i });
          }, g.prototype.retain = function(i, n) {
            if (i <= 0)
              return this;
            var a = { retain: i };
            return n != null && typeof n == "object" && Object.keys(n).length > 0 && (a.attributes = n), this.push(a);
          }, g.prototype.push = function(i) {
            var n = this.ops.length, a = this.ops[n - 1];
            if (i = v(!0, {}, i), typeof a == "object") {
              if (typeof i.delete == "number" && typeof a.delete == "number")
                return this.ops[n - 1] = { delete: a.delete + i.delete }, this;
              if (typeof a.delete == "number" && i.insert != null && (n -= 1, a = this.ops[n - 1], typeof a != "object"))
                return this.ops.unshift(i), this;
              if (l(i.attributes, a.attributes)) {
                if (typeof i.insert == "string" && typeof a.insert == "string")
                  return this.ops[n - 1] = { insert: a.insert + i.insert }, typeof i.attributes == "object" && (this.ops[n - 1].attributes = i.attributes), this;
                if (typeof i.retain == "number" && typeof a.retain == "number")
                  return this.ops[n - 1] = { retain: a.retain + i.retain }, typeof i.attributes == "object" && (this.ops[n - 1].attributes = i.attributes), this;
              }
            }
            return n === this.ops.length ? this.ops.push(i) : this.ops.splice(n, 0, i), this;
          }, g.prototype.chop = function() {
            var i = this.ops[this.ops.length - 1];
            return i && i.retain && !i.attributes && this.ops.pop(), this;
          }, g.prototype.filter = function(i) {
            return this.ops.filter(i);
          }, g.prototype.forEach = function(i) {
            this.ops.forEach(i);
          }, g.prototype.map = function(i) {
            return this.ops.map(i);
          }, g.prototype.partition = function(i) {
            var n = [], a = [];
            return this.forEach(function(p) {
              var h = i(p) ? n : a;
              h.push(p);
            }), [n, a];
          }, g.prototype.reduce = function(i, n) {
            return this.ops.reduce(i, n);
          }, g.prototype.changeLength = function() {
            return this.reduce(function(i, n) {
              return n.insert ? i + y.length(n) : n.delete ? i - n.delete : i;
            }, 0);
          }, g.prototype.length = function() {
            return this.reduce(function(i, n) {
              return i + y.length(n);
            }, 0);
          }, g.prototype.slice = function(i, n) {
            i = i || 0, typeof n != "number" && (n = 1 / 0);
            for (var a = [], p = y.iterator(this.ops), h = 0; h < n && p.hasNext(); ) {
              var m;
              h < i ? m = p.next(i - h) : (m = p.next(n - h), a.push(m)), h += y.length(m);
            }
            return new g(a);
          }, g.prototype.compose = function(i) {
            var n = y.iterator(this.ops), a = y.iterator(i.ops), p = [], h = a.peek();
            if (h != null && typeof h.retain == "number" && h.attributes == null) {
              for (var m = h.retain; n.peekType() === "insert" && n.peekLength() <= m; )
                m -= n.peekLength(), p.push(n.next());
              h.retain - m > 0 && a.next(h.retain - m);
            }
            for (var f = new g(p); n.hasNext() || a.hasNext(); )
              if (a.peekType() === "insert")
                f.push(a.next());
              else if (n.peekType() === "delete")
                f.push(n.next());
              else {
                var u = Math.min(n.peekLength(), a.peekLength()), k = n.next(u), c = a.next(u);
                if (typeof c.retain == "number") {
                  var w = {};
                  typeof k.retain == "number" ? w.retain = u : w.insert = k.insert;
                  var M = y.attributes.compose(k.attributes, c.attributes, typeof k.retain == "number");
                  if (M && (w.attributes = M), f.push(w), !a.hasNext() && l(f.ops[f.ops.length - 1], w)) {
                    var $ = new g(n.rest());
                    return f.concat($).chop();
                  }
                } else
                  typeof c.delete == "number" && typeof k.retain == "number" && f.push(c);
              }
            return f.chop();
          }, g.prototype.concat = function(i) {
            var n = new g(this.ops.slice());
            return i.ops.length > 0 && (n.push(i.ops[0]), n.ops = n.ops.concat(i.ops.slice(1))), n;
          }, g.prototype.diff = function(i, n) {
            if (this.ops === i.ops)
              return new g();
            var a = [this, i].map(function(u) {
              return u.map(function(k) {
                if (k.insert != null)
                  return typeof k.insert == "string" ? k.insert : d;
                var c = u === i ? "on" : "with";
                throw new Error("diff() called " + c + " non-document");
              }).join("");
            }), p = new g(), h = b(a[0], a[1], n), m = y.iterator(this.ops), f = y.iterator(i.ops);
            return h.forEach(function(u) {
              for (var k = u[1].length; k > 0; ) {
                var c = 0;
                switch (u[0]) {
                  case b.INSERT:
                    c = Math.min(f.peekLength(), k), p.push(f.next(c));
                    break;
                  case b.DELETE:
                    c = Math.min(k, m.peekLength()), m.next(c), p.delete(c);
                    break;
                  case b.EQUAL:
                    c = Math.min(m.peekLength(), f.peekLength(), k);
                    var w = m.next(c), M = f.next(c);
                    l(w.insert, M.insert) ? p.retain(c, y.attributes.diff(w.attributes, M.attributes)) : p.push(M).delete(c);
                    break;
                }
                k -= c;
              }
            }), p.chop();
          }, g.prototype.eachLine = function(i, n) {
            n = n || `
`;
            for (var a = y.iterator(this.ops), p = new g(), h = 0; a.hasNext(); ) {
              if (a.peekType() !== "insert")
                return;
              var m = a.peek(), f = y.length(m) - a.peekLength(), u = typeof m.insert == "string" ? m.insert.indexOf(n, f) - f : -1;
              if (u < 0)
                p.push(a.next());
              else if (u > 0)
                p.push(a.next(u));
              else {
                if (i(p, a.next(1).attributes || {}, h) === !1)
                  return;
                h += 1, p = new g();
              }
            }
            p.length() > 0 && i(p, {}, h);
          }, g.prototype.transform = function(i, n) {
            if (n = !!n, typeof i == "number")
              return this.transformPosition(i, n);
            for (var a = y.iterator(this.ops), p = y.iterator(i.ops), h = new g(); a.hasNext() || p.hasNext(); )
              if (a.peekType() === "insert" && (n || p.peekType() !== "insert"))
                h.retain(y.length(a.next()));
              else if (p.peekType() === "insert")
                h.push(p.next());
              else {
                var m = Math.min(a.peekLength(), p.peekLength()), f = a.next(m), u = p.next(m);
                if (f.delete)
                  continue;
                u.delete ? h.push(u) : h.retain(m, y.attributes.transform(f.attributes, u.attributes, n));
              }
            return h.chop();
          }, g.prototype.transformPosition = function(i, n) {
            n = !!n;
            for (var a = y.iterator(this.ops), p = 0; a.hasNext() && p <= i; ) {
              var h = a.peekLength(), m = a.peekType();
              if (a.next(), m === "delete") {
                i -= Math.min(h, i - p);
                continue;
              } else
                m === "insert" && (p < i || !n) && (i += h);
              p += h;
            }
            return i;
          }, t.exports = g;
        },
        /* 3 */
        /***/
        function(t, s) {
          var o = Object.prototype.hasOwnProperty, b = Object.prototype.toString, l = Object.defineProperty, v = Object.getOwnPropertyDescriptor, y = function(a) {
            return typeof Array.isArray == "function" ? Array.isArray(a) : b.call(a) === "[object Array]";
          }, d = function(a) {
            if (!a || b.call(a) !== "[object Object]")
              return !1;
            var p = o.call(a, "constructor"), h = a.constructor && a.constructor.prototype && o.call(a.constructor.prototype, "isPrototypeOf");
            if (a.constructor && !p && !h)
              return !1;
            var m;
            for (m in a)
              ;
            return typeof m > "u" || o.call(a, m);
          }, g = function(a, p) {
            l && p.name === "__proto__" ? l(a, p.name, {
              enumerable: !0,
              configurable: !0,
              value: p.newValue,
              writable: !0
            }) : a[p.name] = p.newValue;
          }, i = function(a, p) {
            if (p === "__proto__")
              if (o.call(a, p)) {
                if (v)
                  return v(a, p).value;
              } else
                return;
            return a[p];
          };
          t.exports = function n() {
            var a, p, h, m, f, u, k = arguments[0], c = 1, w = arguments.length, M = !1;
            for (typeof k == "boolean" && (M = k, k = arguments[1] || {}, c = 2), (k == null || typeof k != "object" && typeof k != "function") && (k = {}); c < w; ++c)
              if (a = arguments[c], a != null)
                for (p in a)
                  h = i(k, p), m = i(a, p), k !== m && (M && m && (d(m) || (f = y(m))) ? (f ? (f = !1, u = h && y(h) ? h : []) : u = h && d(h) ? h : {}, g(k, { name: p, newValue: n(M, u, m) })) : typeof m < "u" && g(k, { name: p, newValue: m }));
            return k;
          };
        },
        /* 4 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.default = s.BlockEmbed = s.bubbleFormats = void 0;
          var b = function() {
            function x(E, T) {
              for (var L = 0; L < T.length; L++) {
                var D = T[L];
                D.enumerable = D.enumerable || !1, D.configurable = !0, "value" in D && (D.writable = !0), Object.defineProperty(E, D.key, D);
              }
            }
            return function(E, T, L) {
              return T && x(E.prototype, T), L && x(E, L), E;
            };
          }(), l = function x(E, T, L) {
            E === null && (E = Function.prototype);
            var D = Object.getOwnPropertyDescriptor(E, T);
            if (D === void 0) {
              var z = Object.getPrototypeOf(E);
              return z === null ? void 0 : x(z, T, L);
            } else {
              if ("value" in D)
                return D.value;
              var U = D.get;
              return U === void 0 ? void 0 : U.call(L);
            }
          }, v = o(3), y = k(v), d = o(2), g = k(d), i = o(0), n = k(i), a = o(16), p = k(a), h = o(6), m = k(h), f = o(7), u = k(f);
          function k(x) {
            return x && x.__esModule ? x : { default: x };
          }
          function c(x, E) {
            if (!(x instanceof E))
              throw new TypeError("Cannot call a class as a function");
          }
          function w(x, E) {
            if (!x)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return E && (typeof E == "object" || typeof E == "function") ? E : x;
          }
          function M(x, E) {
            if (typeof E != "function" && E !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof E);
            x.prototype = Object.create(E && E.prototype, { constructor: { value: x, enumerable: !1, writable: !0, configurable: !0 } }), E && (Object.setPrototypeOf ? Object.setPrototypeOf(x, E) : x.__proto__ = E);
          }
          var $ = 1, A = function(x) {
            M(E, x);
            function E() {
              return c(this, E), w(this, (E.__proto__ || Object.getPrototypeOf(E)).apply(this, arguments));
            }
            return b(E, [{
              key: "attach",
              value: function() {
                l(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "attach", this).call(this), this.attributes = new n.default.Attributor.Store(this.domNode);
              }
            }, {
              key: "delta",
              value: function() {
                return new g.default().insert(this.value(), (0, y.default)(this.formats(), this.attributes.values()));
              }
            }, {
              key: "format",
              value: function(L, D) {
                var z = n.default.query(L, n.default.Scope.BLOCK_ATTRIBUTE);
                z != null && this.attributes.attribute(z, D);
              }
            }, {
              key: "formatAt",
              value: function(L, D, z, U) {
                this.format(z, U);
              }
            }, {
              key: "insertAt",
              value: function(L, D, z) {
                if (typeof D == "string" && D.endsWith(`
`)) {
                  var U = n.default.create(P.blotName);
                  this.parent.insertBefore(U, L === 0 ? this : this.next), U.insertAt(0, D.slice(0, -1));
                } else
                  l(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "insertAt", this).call(this, L, D, z);
              }
            }]), E;
          }(n.default.Embed);
          A.scope = n.default.Scope.BLOCK_BLOT;
          var P = function(x) {
            M(E, x);
            function E(T) {
              c(this, E);
              var L = w(this, (E.__proto__ || Object.getPrototypeOf(E)).call(this, T));
              return L.cache = {}, L;
            }
            return b(E, [{
              key: "delta",
              value: function() {
                return this.cache.delta == null && (this.cache.delta = this.descendants(n.default.Leaf).reduce(function(L, D) {
                  return D.length() === 0 ? L : L.insert(D.value(), O(D));
                }, new g.default()).insert(`
`, O(this))), this.cache.delta;
              }
            }, {
              key: "deleteAt",
              value: function(L, D) {
                l(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "deleteAt", this).call(this, L, D), this.cache = {};
              }
            }, {
              key: "formatAt",
              value: function(L, D, z, U) {
                D <= 0 || (n.default.query(z, n.default.Scope.BLOCK) ? L + D === this.length() && this.format(z, U) : l(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "formatAt", this).call(this, L, Math.min(D, this.length() - L - 1), z, U), this.cache = {});
              }
            }, {
              key: "insertAt",
              value: function(L, D, z) {
                if (z != null)
                  return l(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "insertAt", this).call(this, L, D, z);
                if (D.length !== 0) {
                  var U = D.split(`
`), te = U.shift();
                  te.length > 0 && (L < this.length() - 1 || this.children.tail == null ? l(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "insertAt", this).call(this, Math.min(L, this.length() - 1), te) : this.children.tail.insertAt(this.children.tail.length(), te), this.cache = {});
                  var F = this;
                  U.reduce(function(j, C) {
                    return F = F.split(j, !0), F.insertAt(0, C), C.length;
                  }, L + te.length);
                }
              }
            }, {
              key: "insertBefore",
              value: function(L, D) {
                var z = this.children.head;
                l(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "insertBefore", this).call(this, L, D), z instanceof p.default && z.remove(), this.cache = {};
              }
            }, {
              key: "length",
              value: function() {
                return this.cache.length == null && (this.cache.length = l(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "length", this).call(this) + $), this.cache.length;
              }
            }, {
              key: "moveChildren",
              value: function(L, D) {
                l(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "moveChildren", this).call(this, L, D), this.cache = {};
              }
            }, {
              key: "optimize",
              value: function(L) {
                l(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "optimize", this).call(this, L), this.cache = {};
              }
            }, {
              key: "path",
              value: function(L) {
                return l(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "path", this).call(this, L, !0);
              }
            }, {
              key: "removeChild",
              value: function(L) {
                l(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "removeChild", this).call(this, L), this.cache = {};
              }
            }, {
              key: "split",
              value: function(L) {
                var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                if (D && (L === 0 || L >= this.length() - $)) {
                  var z = this.clone();
                  return L === 0 ? (this.parent.insertBefore(z, this), this) : (this.parent.insertBefore(z, this.next), z);
                } else {
                  var U = l(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "split", this).call(this, L, D);
                  return this.cache = {}, U;
                }
              }
            }]), E;
          }(n.default.Block);
          P.blotName = "block", P.tagName = "P", P.defaultChild = "break", P.allowedChildren = [m.default, n.default.Embed, u.default];
          function O(x) {
            var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return x == null || (typeof x.formats == "function" && (E = (0, y.default)(E, x.formats())), x.parent == null || x.parent.blotName == "scroll" || x.parent.statics.scope !== x.statics.scope) ? E : O(x.parent, E);
          }
          s.bubbleFormats = O, s.BlockEmbed = A, s.default = P;
        },
        /* 5 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.default = s.overload = s.expandConfig = void 0;
          var b = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(F) {
            return typeof F;
          } : function(F) {
            return F && typeof Symbol == "function" && F.constructor === Symbol && F !== Symbol.prototype ? "symbol" : typeof F;
          }, l = function() {
            function F(j, C) {
              var q = [], R = !0, X = !1, H = void 0;
              try {
                for (var I = j[Symbol.iterator](), Y; !(R = (Y = I.next()).done) && (q.push(Y.value), !(C && q.length === C)); R = !0)
                  ;
              } catch (Q) {
                X = !0, H = Q;
              } finally {
                try {
                  !R && I.return && I.return();
                } finally {
                  if (X)
                    throw H;
                }
              }
              return q;
            }
            return function(j, C) {
              if (Array.isArray(j))
                return j;
              if (Symbol.iterator in Object(j))
                return F(j, C);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), v = function() {
            function F(j, C) {
              for (var q = 0; q < C.length; q++) {
                var R = C[q];
                R.enumerable = R.enumerable || !1, R.configurable = !0, "value" in R && (R.writable = !0), Object.defineProperty(j, R.key, R);
              }
            }
            return function(j, C, q) {
              return C && F(j.prototype, C), q && F(j, q), j;
            };
          }();
          o(50);
          var y = o(2), d = O(y), g = o(14), i = O(g), n = o(8), a = O(n), p = o(9), h = O(p), m = o(0), f = O(m), u = o(15), k = O(u), c = o(3), w = O(c), M = o(10), $ = O(M), A = o(34), P = O(A);
          function O(F) {
            return F && F.__esModule ? F : { default: F };
          }
          function x(F, j, C) {
            return j in F ? Object.defineProperty(F, j, { value: C, enumerable: !0, configurable: !0, writable: !0 }) : F[j] = C, F;
          }
          function E(F, j) {
            if (!(F instanceof j))
              throw new TypeError("Cannot call a class as a function");
          }
          var T = (0, $.default)("quill"), L = function() {
            v(F, null, [{
              key: "debug",
              value: function(C) {
                C === !0 && (C = "log"), $.default.level(C);
              }
            }, {
              key: "find",
              value: function(C) {
                return C.__quill || f.default.find(C);
              }
            }, {
              key: "import",
              value: function(C) {
                return this.imports[C] == null && T.error("Cannot import " + C + ". Are you sure it was registered?"), this.imports[C];
              }
            }, {
              key: "register",
              value: function(C, q) {
                var R = this, X = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
                if (typeof C != "string") {
                  var H = C.attrName || C.blotName;
                  typeof H == "string" ? this.register("formats/" + H, C, q) : Object.keys(C).forEach(function(I) {
                    R.register(I, C[I], q);
                  });
                } else
                  this.imports[C] != null && !X && T.warn("Overwriting " + C + " with", q), this.imports[C] = q, (C.startsWith("blots/") || C.startsWith("formats/")) && q.blotName !== "abstract" ? f.default.register(q) : C.startsWith("modules") && typeof q.register == "function" && q.register();
              }
            }]);
            function F(j) {
              var C = this, q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              if (E(this, F), this.options = D(j, q), this.container = this.options.container, this.container == null)
                return T.error("Invalid Quill container", j);
              this.options.debug && F.debug(this.options.debug);
              var R = this.container.innerHTML.trim();
              this.container.classList.add("ql-container"), this.container.innerHTML = "", this.container.__quill = this, this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.root.setAttribute("data-gramm", !1), this.scrollingContainer = this.options.scrollingContainer || this.root, this.emitter = new a.default(), this.scroll = f.default.create(this.root, {
                emitter: this.emitter,
                whitelist: this.options.formats
              }), this.editor = new i.default(this.scroll), this.selection = new k.default(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.theme.init(), this.emitter.on(a.default.events.EDITOR_CHANGE, function(H) {
                H === a.default.events.TEXT_CHANGE && C.root.classList.toggle("ql-blank", C.editor.isBlank());
              }), this.emitter.on(a.default.events.SCROLL_UPDATE, function(H, I) {
                var Y = C.selection.lastRange, Q = Y && Y.length === 0 ? Y.index : void 0;
                z.call(C, function() {
                  return C.editor.update(null, I, Q);
                }, H);
              });
              var X = this.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">` + R + "<p><br></p></div>");
              this.setContents(X), this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable();
            }
            return v(F, [{
              key: "addContainer",
              value: function(C) {
                var q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (typeof C == "string") {
                  var R = C;
                  C = document.createElement("div"), C.classList.add(R);
                }
                return this.container.insertBefore(C, q), C;
              }
            }, {
              key: "blur",
              value: function() {
                this.selection.setRange(null);
              }
            }, {
              key: "deleteText",
              value: function(C, q, R) {
                var X = this, H = U(C, q, R), I = l(H, 4);
                return C = I[0], q = I[1], R = I[3], z.call(this, function() {
                  return X.editor.deleteText(C, q);
                }, R, C, -1 * q);
              }
            }, {
              key: "disable",
              value: function() {
                this.enable(!1);
              }
            }, {
              key: "enable",
              value: function() {
                var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
                this.scroll.enable(C), this.container.classList.toggle("ql-disabled", !C);
              }
            }, {
              key: "focus",
              value: function() {
                var C = this.scrollingContainer.scrollTop;
                this.selection.focus(), this.scrollingContainer.scrollTop = C, this.scrollIntoView();
              }
            }, {
              key: "format",
              value: function(C, q) {
                var R = this, X = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : a.default.sources.API;
                return z.call(this, function() {
                  var H = R.getSelection(!0), I = new d.default();
                  if (H == null)
                    return I;
                  if (f.default.query(C, f.default.Scope.BLOCK))
                    I = R.editor.formatLine(H.index, H.length, x({}, C, q));
                  else {
                    if (H.length === 0)
                      return R.selection.format(C, q), I;
                    I = R.editor.formatText(H.index, H.length, x({}, C, q));
                  }
                  return R.setSelection(H, a.default.sources.SILENT), I;
                }, X);
              }
            }, {
              key: "formatLine",
              value: function(C, q, R, X, H) {
                var I = this, Y = void 0, Q = U(C, q, R, X, H), ee = l(Q, 4);
                return C = ee[0], q = ee[1], Y = ee[2], H = ee[3], z.call(this, function() {
                  return I.editor.formatLine(C, q, Y);
                }, H, C, 0);
              }
            }, {
              key: "formatText",
              value: function(C, q, R, X, H) {
                var I = this, Y = void 0, Q = U(C, q, R, X, H), ee = l(Q, 4);
                return C = ee[0], q = ee[1], Y = ee[2], H = ee[3], z.call(this, function() {
                  return I.editor.formatText(C, q, Y);
                }, H, C, 0);
              }
            }, {
              key: "getBounds",
              value: function(C) {
                var q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, R = void 0;
                typeof C == "number" ? R = this.selection.getBounds(C, q) : R = this.selection.getBounds(C.index, C.length);
                var X = this.container.getBoundingClientRect();
                return {
                  bottom: R.bottom - X.top,
                  height: R.height,
                  left: R.left - X.left,
                  right: R.right - X.left,
                  top: R.top - X.top,
                  width: R.width
                };
              }
            }, {
              key: "getContents",
              value: function() {
                var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - C, R = U(C, q), X = l(R, 2);
                return C = X[0], q = X[1], this.editor.getContents(C, q);
              }
            }, {
              key: "getFormat",
              value: function() {
                var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getSelection(!0), q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                return typeof C == "number" ? this.editor.getFormat(C, q) : this.editor.getFormat(C.index, C.length);
              }
            }, {
              key: "getIndex",
              value: function(C) {
                return C.offset(this.scroll);
              }
            }, {
              key: "getLength",
              value: function() {
                return this.scroll.length();
              }
            }, {
              key: "getLeaf",
              value: function(C) {
                return this.scroll.leaf(C);
              }
            }, {
              key: "getLine",
              value: function(C) {
                return this.scroll.line(C);
              }
            }, {
              key: "getLines",
              value: function() {
                var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
                return typeof C != "number" ? this.scroll.lines(C.index, C.length) : this.scroll.lines(C, q);
              }
            }, {
              key: "getModule",
              value: function(C) {
                return this.theme.modules[C];
              }
            }, {
              key: "getSelection",
              value: function() {
                var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                return C && this.focus(), this.update(), this.selection.getRange()[0];
              }
            }, {
              key: "getText",
              value: function() {
                var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - C, R = U(C, q), X = l(R, 2);
                return C = X[0], q = X[1], this.editor.getText(C, q);
              }
            }, {
              key: "hasFocus",
              value: function() {
                return this.selection.hasFocus();
              }
            }, {
              key: "insertEmbed",
              value: function(C, q, R) {
                var X = this, H = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : F.sources.API;
                return z.call(this, function() {
                  return X.editor.insertEmbed(C, q, R);
                }, H, C);
              }
            }, {
              key: "insertText",
              value: function(C, q, R, X, H) {
                var I = this, Y = void 0, Q = U(C, 0, R, X, H), ee = l(Q, 4);
                return C = ee[0], Y = ee[2], H = ee[3], z.call(this, function() {
                  return I.editor.insertText(C, q, Y);
                }, H, C, q.length);
              }
            }, {
              key: "isEnabled",
              value: function() {
                return !this.container.classList.contains("ql-disabled");
              }
            }, {
              key: "off",
              value: function() {
                return this.emitter.off.apply(this.emitter, arguments);
              }
            }, {
              key: "on",
              value: function() {
                return this.emitter.on.apply(this.emitter, arguments);
              }
            }, {
              key: "once",
              value: function() {
                return this.emitter.once.apply(this.emitter, arguments);
              }
            }, {
              key: "pasteHTML",
              value: function(C, q, R) {
                this.clipboard.dangerouslyPasteHTML(C, q, R);
              }
            }, {
              key: "removeFormat",
              value: function(C, q, R) {
                var X = this, H = U(C, q, R), I = l(H, 4);
                return C = I[0], q = I[1], R = I[3], z.call(this, function() {
                  return X.editor.removeFormat(C, q);
                }, R, C);
              }
            }, {
              key: "scrollIntoView",
              value: function() {
                this.selection.scrollIntoView(this.scrollingContainer);
              }
            }, {
              key: "setContents",
              value: function(C) {
                var q = this, R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : a.default.sources.API;
                return z.call(this, function() {
                  C = new d.default(C);
                  var X = q.getLength(), H = q.editor.deleteText(0, X), I = q.editor.applyDelta(C), Y = I.ops[I.ops.length - 1];
                  Y != null && typeof Y.insert == "string" && Y.insert[Y.insert.length - 1] === `
` && (q.editor.deleteText(q.getLength() - 1, 1), I.delete(1));
                  var Q = H.compose(I);
                  return Q;
                }, R);
              }
            }, {
              key: "setSelection",
              value: function(C, q, R) {
                if (C == null)
                  this.selection.setRange(null, q || F.sources.API);
                else {
                  var X = U(C, q, R), H = l(X, 4);
                  C = H[0], q = H[1], R = H[3], this.selection.setRange(new u.Range(C, q), R), R !== a.default.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer);
                }
              }
            }, {
              key: "setText",
              value: function(C) {
                var q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : a.default.sources.API, R = new d.default().insert(C);
                return this.setContents(R, q);
              }
            }, {
              key: "update",
              value: function() {
                var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : a.default.sources.USER, q = this.scroll.update(C);
                return this.selection.update(C), q;
              }
            }, {
              key: "updateContents",
              value: function(C) {
                var q = this, R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : a.default.sources.API;
                return z.call(this, function() {
                  return C = new d.default(C), q.editor.applyDelta(C, R);
                }, R, !0);
              }
            }]), F;
          }();
          L.DEFAULTS = {
            bounds: null,
            formats: null,
            modules: {},
            placeholder: "",
            readOnly: !1,
            scrollingContainer: null,
            strict: !0,
            theme: "default"
          }, L.events = a.default.events, L.sources = a.default.sources, L.version = "1.3.7", L.imports = {
            delta: d.default,
            parchment: f.default,
            "core/module": h.default,
            "core/theme": P.default
          };
          function D(F, j) {
            if (j = (0, w.default)(!0, {
              container: F,
              modules: {
                clipboard: !0,
                keyboard: !0,
                history: !0
              }
            }, j), !j.theme || j.theme === L.DEFAULTS.theme)
              j.theme = P.default;
            else if (j.theme = L.import("themes/" + j.theme), j.theme == null)
              throw new Error("Invalid theme " + j.theme + ". Did you register it?");
            var C = (0, w.default)(!0, {}, j.theme.DEFAULTS);
            [C, j].forEach(function(X) {
              X.modules = X.modules || {}, Object.keys(X.modules).forEach(function(H) {
                X.modules[H] === !0 && (X.modules[H] = {});
              });
            });
            var q = Object.keys(C.modules).concat(Object.keys(j.modules)), R = q.reduce(function(X, H) {
              var I = L.import("modules/" + H);
              return I == null ? T.error("Cannot load " + H + " module. Are you sure you registered it?") : X[H] = I.DEFAULTS || {}, X;
            }, {});
            return j.modules != null && j.modules.toolbar && j.modules.toolbar.constructor !== Object && (j.modules.toolbar = {
              container: j.modules.toolbar
            }), j = (0, w.default)(!0, {}, L.DEFAULTS, { modules: R }, C, j), ["bounds", "container", "scrollingContainer"].forEach(function(X) {
              typeof j[X] == "string" && (j[X] = document.querySelector(j[X]));
            }), j.modules = Object.keys(j.modules).reduce(function(X, H) {
              return j.modules[H] && (X[H] = j.modules[H]), X;
            }, {}), j;
          }
          function z(F, j, C, q) {
            if (this.options.strict && !this.isEnabled() && j === a.default.sources.USER)
              return new d.default();
            var R = C == null ? null : this.getSelection(), X = this.editor.delta, H = F();
            if (R != null && (C === !0 && (C = R.index), q == null ? R = te(R, H, j) : q !== 0 && (R = te(R, C, q, j)), this.setSelection(R, a.default.sources.SILENT)), H.length() > 0) {
              var I, Y = [a.default.events.TEXT_CHANGE, H, X, j];
              if ((I = this.emitter).emit.apply(I, [a.default.events.EDITOR_CHANGE].concat(Y)), j !== a.default.sources.SILENT) {
                var Q;
                (Q = this.emitter).emit.apply(Q, Y);
              }
            }
            return H;
          }
          function U(F, j, C, q, R) {
            var X = {};
            return typeof F.index == "number" && typeof F.length == "number" ? typeof j != "number" ? (R = q, q = C, C = j, j = F.length, F = F.index) : (j = F.length, F = F.index) : typeof j != "number" && (R = q, q = C, C = j, j = 0), (typeof C > "u" ? "undefined" : b(C)) === "object" ? (X = C, R = q) : typeof C == "string" && (q != null ? X[C] = q : R = C), R = R || a.default.sources.API, [F, j, X, R];
          }
          function te(F, j, C, q) {
            if (F == null)
              return null;
            var R = void 0, X = void 0;
            if (j instanceof d.default) {
              var H = [F.index, F.index + F.length].map(function(ee) {
                return j.transformPosition(ee, q !== a.default.sources.USER);
              }), I = l(H, 2);
              R = I[0], X = I[1];
            } else {
              var Y = [F.index, F.index + F.length].map(function(ee) {
                return ee < j || ee === j && q === a.default.sources.USER ? ee : C >= 0 ? ee + C : Math.max(j, ee + C);
              }), Q = l(Y, 2);
              R = Q[0], X = Q[1];
            }
            return new u.Range(R, X - R);
          }
          s.expandConfig = D, s.overload = U, s.default = L;
        },
        /* 6 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var b = function() {
            function m(f, u) {
              for (var k = 0; k < u.length; k++) {
                var c = u[k];
                c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(f, c.key, c);
              }
            }
            return function(f, u, k) {
              return u && m(f.prototype, u), k && m(f, k), f;
            };
          }(), l = function m(f, u, k) {
            f === null && (f = Function.prototype);
            var c = Object.getOwnPropertyDescriptor(f, u);
            if (c === void 0) {
              var w = Object.getPrototypeOf(f);
              return w === null ? void 0 : m(w, u, k);
            } else {
              if ("value" in c)
                return c.value;
              var M = c.get;
              return M === void 0 ? void 0 : M.call(k);
            }
          }, v = o(7), y = i(v), d = o(0), g = i(d);
          function i(m) {
            return m && m.__esModule ? m : { default: m };
          }
          function n(m, f) {
            if (!(m instanceof f))
              throw new TypeError("Cannot call a class as a function");
          }
          function a(m, f) {
            if (!m)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return f && (typeof f == "object" || typeof f == "function") ? f : m;
          }
          function p(m, f) {
            if (typeof f != "function" && f !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof f);
            m.prototype = Object.create(f && f.prototype, { constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 } }), f && (Object.setPrototypeOf ? Object.setPrototypeOf(m, f) : m.__proto__ = f);
          }
          var h = function(m) {
            p(f, m);
            function f() {
              return n(this, f), a(this, (f.__proto__ || Object.getPrototypeOf(f)).apply(this, arguments));
            }
            return b(f, [{
              key: "formatAt",
              value: function(k, c, w, M) {
                if (f.compare(this.statics.blotName, w) < 0 && g.default.query(w, g.default.Scope.BLOT)) {
                  var $ = this.isolate(k, c);
                  M && $.wrap(w, M);
                } else
                  l(f.prototype.__proto__ || Object.getPrototypeOf(f.prototype), "formatAt", this).call(this, k, c, w, M);
              }
            }, {
              key: "optimize",
              value: function(k) {
                if (l(f.prototype.__proto__ || Object.getPrototypeOf(f.prototype), "optimize", this).call(this, k), this.parent instanceof f && f.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
                  var c = this.parent.isolate(this.offset(), this.length());
                  this.moveChildren(c), c.wrap(this);
                }
              }
            }], [{
              key: "compare",
              value: function(k, c) {
                var w = f.order.indexOf(k), M = f.order.indexOf(c);
                return w >= 0 || M >= 0 ? w - M : k === c ? 0 : k < c ? -1 : 1;
              }
            }]), f;
          }(g.default.Inline);
          h.allowedChildren = [h, g.default.Embed, y.default], h.order = [
            "cursor",
            "inline",
            // Must be lower
            "underline",
            "strike",
            "italic",
            "bold",
            "script",
            "link",
            "code"
            // Must be higher
          ], s.default = h;
        },
        /* 7 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var b = o(0), l = v(b);
          function v(n) {
            return n && n.__esModule ? n : { default: n };
          }
          function y(n, a) {
            if (!(n instanceof a))
              throw new TypeError("Cannot call a class as a function");
          }
          function d(n, a) {
            if (!n)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a == "object" || typeof a == "function") ? a : n;
          }
          function g(n, a) {
            if (typeof a != "function" && a !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof a);
            n.prototype = Object.create(a && a.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(n, a) : n.__proto__ = a);
          }
          var i = function(n) {
            g(a, n);
            function a() {
              return y(this, a), d(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments));
            }
            return a;
          }(l.default.Text);
          s.default = i;
        },
        /* 8 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var b = function() {
            function u(k, c) {
              for (var w = 0; w < c.length; w++) {
                var M = c[w];
                M.enumerable = M.enumerable || !1, M.configurable = !0, "value" in M && (M.writable = !0), Object.defineProperty(k, M.key, M);
              }
            }
            return function(k, c, w) {
              return c && u(k.prototype, c), w && u(k, w), k;
            };
          }(), l = function u(k, c, w) {
            k === null && (k = Function.prototype);
            var M = Object.getOwnPropertyDescriptor(k, c);
            if (M === void 0) {
              var $ = Object.getPrototypeOf(k);
              return $ === null ? void 0 : u($, c, w);
            } else {
              if ("value" in M)
                return M.value;
              var A = M.get;
              return A === void 0 ? void 0 : A.call(w);
            }
          }, v = o(54), y = i(v), d = o(10), g = i(d);
          function i(u) {
            return u && u.__esModule ? u : { default: u };
          }
          function n(u, k) {
            if (!(u instanceof k))
              throw new TypeError("Cannot call a class as a function");
          }
          function a(u, k) {
            if (!u)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return k && (typeof k == "object" || typeof k == "function") ? k : u;
          }
          function p(u, k) {
            if (typeof k != "function" && k !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof k);
            u.prototype = Object.create(k && k.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), k && (Object.setPrototypeOf ? Object.setPrototypeOf(u, k) : u.__proto__ = k);
          }
          var h = (0, g.default)("quill:events"), m = ["selectionchange", "mousedown", "mouseup", "click"];
          m.forEach(function(u) {
            document.addEventListener(u, function() {
              for (var k = arguments.length, c = Array(k), w = 0; w < k; w++)
                c[w] = arguments[w];
              [].slice.call(document.querySelectorAll(".ql-container")).forEach(function(M) {
                if (M.__quill && M.__quill.emitter) {
                  var $;
                  ($ = M.__quill.emitter).handleDOM.apply($, c);
                }
              });
            });
          });
          var f = function(u) {
            p(k, u);
            function k() {
              n(this, k);
              var c = a(this, (k.__proto__ || Object.getPrototypeOf(k)).call(this));
              return c.listeners = {}, c.on("error", h.error), c;
            }
            return b(k, [{
              key: "emit",
              value: function() {
                h.log.apply(h, arguments), l(k.prototype.__proto__ || Object.getPrototypeOf(k.prototype), "emit", this).apply(this, arguments);
              }
            }, {
              key: "handleDOM",
              value: function(w) {
                for (var M = arguments.length, $ = Array(M > 1 ? M - 1 : 0), A = 1; A < M; A++)
                  $[A - 1] = arguments[A];
                (this.listeners[w.type] || []).forEach(function(P) {
                  var O = P.node, x = P.handler;
                  (w.target === O || O.contains(w.target)) && x.apply(void 0, [w].concat($));
                });
              }
            }, {
              key: "listenDOM",
              value: function(w, M, $) {
                this.listeners[w] || (this.listeners[w] = []), this.listeners[w].push({ node: M, handler: $ });
              }
            }]), k;
          }(y.default);
          f.events = {
            EDITOR_CHANGE: "editor-change",
            SCROLL_BEFORE_UPDATE: "scroll-before-update",
            SCROLL_OPTIMIZE: "scroll-optimize",
            SCROLL_UPDATE: "scroll-update",
            SELECTION_CHANGE: "selection-change",
            TEXT_CHANGE: "text-change"
          }, f.sources = {
            API: "api",
            SILENT: "silent",
            USER: "user"
          }, s.default = f;
        },
        /* 9 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          function b(v, y) {
            if (!(v instanceof y))
              throw new TypeError("Cannot call a class as a function");
          }
          var l = function v(y) {
            var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            b(this, v), this.quill = y, this.options = d;
          };
          l.DEFAULTS = {}, s.default = l;
        },
        /* 10 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var b = ["error", "warn", "log", "info"], l = "warn";
          function v(d) {
            if (b.indexOf(d) <= b.indexOf(l)) {
              for (var g, i = arguments.length, n = Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
                n[a - 1] = arguments[a];
              (g = console)[d].apply(g, n);
            }
          }
          function y(d) {
            return b.reduce(function(g, i) {
              return g[i] = v.bind(console, i, d), g;
            }, {});
          }
          v.level = y.level = function(d) {
            l = d;
          }, s.default = y;
        },
        /* 11 */
        /***/
        function(t, s, o) {
          var b = Array.prototype.slice, l = o(52), v = o(53), y = t.exports = function(n, a, p) {
            return p || (p = {}), n === a ? !0 : n instanceof Date && a instanceof Date ? n.getTime() === a.getTime() : !n || !a || typeof n != "object" && typeof a != "object" ? p.strict ? n === a : n == a : i(n, a, p);
          };
          function d(n) {
            return n == null;
          }
          function g(n) {
            return !(!n || typeof n != "object" || typeof n.length != "number" || typeof n.copy != "function" || typeof n.slice != "function" || n.length > 0 && typeof n[0] != "number");
          }
          function i(n, a, p) {
            var h, m;
            if (d(n) || d(a) || n.prototype !== a.prototype)
              return !1;
            if (v(n))
              return v(a) ? (n = b.call(n), a = b.call(a), y(n, a, p)) : !1;
            if (g(n)) {
              if (!g(a) || n.length !== a.length)
                return !1;
              for (h = 0; h < n.length; h++)
                if (n[h] !== a[h])
                  return !1;
              return !0;
            }
            try {
              var f = l(n), u = l(a);
            } catch {
              return !1;
            }
            if (f.length != u.length)
              return !1;
            for (f.sort(), u.sort(), h = f.length - 1; h >= 0; h--)
              if (f[h] != u[h])
                return !1;
            for (h = f.length - 1; h >= 0; h--)
              if (m = f[h], !y(n[m], a[m], p))
                return !1;
            return typeof n == typeof a;
          }
        },
        /* 12 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", { value: !0 });
          var b = o(1), l = (
            /** @class */
            function() {
              function v(y, d, g) {
                g === void 0 && (g = {}), this.attrName = y, this.keyName = d;
                var i = b.Scope.TYPE & b.Scope.ATTRIBUTE;
                g.scope != null ? this.scope = g.scope & b.Scope.LEVEL | i : this.scope = b.Scope.ATTRIBUTE, g.whitelist != null && (this.whitelist = g.whitelist);
              }
              return v.keys = function(y) {
                return [].map.call(y.attributes, function(d) {
                  return d.name;
                });
              }, v.prototype.add = function(y, d) {
                return this.canAdd(y, d) ? (y.setAttribute(this.keyName, d), !0) : !1;
              }, v.prototype.canAdd = function(y, d) {
                var g = b.query(y, b.Scope.BLOT & (this.scope | b.Scope.TYPE));
                return g == null ? !1 : this.whitelist == null ? !0 : typeof d == "string" ? this.whitelist.indexOf(d.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(d) > -1;
              }, v.prototype.remove = function(y) {
                y.removeAttribute(this.keyName);
              }, v.prototype.value = function(y) {
                var d = y.getAttribute(this.keyName);
                return this.canAdd(y, d) && d ? d : "";
              }, v;
            }()
          );
          s.default = l;
        },
        /* 13 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.default = s.Code = void 0;
          var b = function() {
            function A(P, O) {
              var x = [], E = !0, T = !1, L = void 0;
              try {
                for (var D = P[Symbol.iterator](), z; !(E = (z = D.next()).done) && (x.push(z.value), !(O && x.length === O)); E = !0)
                  ;
              } catch (U) {
                T = !0, L = U;
              } finally {
                try {
                  !E && D.return && D.return();
                } finally {
                  if (T)
                    throw L;
                }
              }
              return x;
            }
            return function(P, O) {
              if (Array.isArray(P))
                return P;
              if (Symbol.iterator in Object(P))
                return A(P, O);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), l = function() {
            function A(P, O) {
              for (var x = 0; x < O.length; x++) {
                var E = O[x];
                E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(P, E.key, E);
              }
            }
            return function(P, O, x) {
              return O && A(P.prototype, O), x && A(P, x), P;
            };
          }(), v = function A(P, O, x) {
            P === null && (P = Function.prototype);
            var E = Object.getOwnPropertyDescriptor(P, O);
            if (E === void 0) {
              var T = Object.getPrototypeOf(P);
              return T === null ? void 0 : A(T, O, x);
            } else {
              if ("value" in E)
                return E.value;
              var L = E.get;
              return L === void 0 ? void 0 : L.call(x);
            }
          }, y = o(2), d = u(y), g = o(0), i = u(g), n = o(4), a = u(n), p = o(6), h = u(p), m = o(7), f = u(m);
          function u(A) {
            return A && A.__esModule ? A : { default: A };
          }
          function k(A, P) {
            if (!(A instanceof P))
              throw new TypeError("Cannot call a class as a function");
          }
          function c(A, P) {
            if (!A)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return P && (typeof P == "object" || typeof P == "function") ? P : A;
          }
          function w(A, P) {
            if (typeof P != "function" && P !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof P);
            A.prototype = Object.create(P && P.prototype, { constructor: { value: A, enumerable: !1, writable: !0, configurable: !0 } }), P && (Object.setPrototypeOf ? Object.setPrototypeOf(A, P) : A.__proto__ = P);
          }
          var M = function(A) {
            w(P, A);
            function P() {
              return k(this, P), c(this, (P.__proto__ || Object.getPrototypeOf(P)).apply(this, arguments));
            }
            return P;
          }(h.default);
          M.blotName = "code", M.tagName = "CODE";
          var $ = function(A) {
            w(P, A);
            function P() {
              return k(this, P), c(this, (P.__proto__ || Object.getPrototypeOf(P)).apply(this, arguments));
            }
            return l(P, [{
              key: "delta",
              value: function() {
                var x = this, E = this.domNode.textContent;
                return E.endsWith(`
`) && (E = E.slice(0, -1)), E.split(`
`).reduce(function(T, L) {
                  return T.insert(L).insert(`
`, x.formats());
                }, new d.default());
              }
            }, {
              key: "format",
              value: function(x, E) {
                if (!(x === this.statics.blotName && E)) {
                  var T = this.descendant(f.default, this.length() - 1), L = b(T, 1), D = L[0];
                  D != null && D.deleteAt(D.length() - 1, 1), v(P.prototype.__proto__ || Object.getPrototypeOf(P.prototype), "format", this).call(this, x, E);
                }
              }
            }, {
              key: "formatAt",
              value: function(x, E, T, L) {
                if (E !== 0 && !(i.default.query(T, i.default.Scope.BLOCK) == null || T === this.statics.blotName && L === this.statics.formats(this.domNode))) {
                  var D = this.newlineIndex(x);
                  if (!(D < 0 || D >= x + E)) {
                    var z = this.newlineIndex(x, !0) + 1, U = D - z + 1, te = this.isolate(z, U), F = te.next;
                    te.format(T, L), F instanceof P && F.formatAt(0, x - z + E - U, T, L);
                  }
                }
              }
            }, {
              key: "insertAt",
              value: function(x, E, T) {
                if (T == null) {
                  var L = this.descendant(f.default, x), D = b(L, 2), z = D[0], U = D[1];
                  z.insertAt(U, E);
                }
              }
            }, {
              key: "length",
              value: function() {
                var x = this.domNode.textContent.length;
                return this.domNode.textContent.endsWith(`
`) ? x : x + 1;
              }
            }, {
              key: "newlineIndex",
              value: function(x) {
                var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                if (E)
                  return this.domNode.textContent.slice(0, x).lastIndexOf(`
`);
                var T = this.domNode.textContent.slice(x).indexOf(`
`);
                return T > -1 ? x + T : -1;
              }
            }, {
              key: "optimize",
              value: function(x) {
                this.domNode.textContent.endsWith(`
`) || this.appendChild(i.default.create("text", `
`)), v(P.prototype.__proto__ || Object.getPrototypeOf(P.prototype), "optimize", this).call(this, x);
                var E = this.next;
                E != null && E.prev === this && E.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === E.statics.formats(E.domNode) && (E.optimize(x), E.moveChildren(this), E.remove());
              }
            }, {
              key: "replace",
              value: function(x) {
                v(P.prototype.__proto__ || Object.getPrototypeOf(P.prototype), "replace", this).call(this, x), [].slice.call(this.domNode.querySelectorAll("*")).forEach(function(E) {
                  var T = i.default.find(E);
                  T == null ? E.parentNode.removeChild(E) : T instanceof i.default.Embed ? T.remove() : T.unwrap();
                });
              }
            }], [{
              key: "create",
              value: function(x) {
                var E = v(P.__proto__ || Object.getPrototypeOf(P), "create", this).call(this, x);
                return E.setAttribute("spellcheck", !1), E;
              }
            }, {
              key: "formats",
              value: function() {
                return !0;
              }
            }]), P;
          }(a.default);
          $.blotName = "code-block", $.tagName = "PRE", $.TAB = "  ", s.Code = M, s.default = $;
        },
        /* 14 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var b = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(F) {
            return typeof F;
          } : function(F) {
            return F && typeof Symbol == "function" && F.constructor === Symbol && F !== Symbol.prototype ? "symbol" : typeof F;
          }, l = function() {
            function F(j, C) {
              var q = [], R = !0, X = !1, H = void 0;
              try {
                for (var I = j[Symbol.iterator](), Y; !(R = (Y = I.next()).done) && (q.push(Y.value), !(C && q.length === C)); R = !0)
                  ;
              } catch (Q) {
                X = !0, H = Q;
              } finally {
                try {
                  !R && I.return && I.return();
                } finally {
                  if (X)
                    throw H;
                }
              }
              return q;
            }
            return function(j, C) {
              if (Array.isArray(j))
                return j;
              if (Symbol.iterator in Object(j))
                return F(j, C);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), v = function() {
            function F(j, C) {
              for (var q = 0; q < C.length; q++) {
                var R = C[q];
                R.enumerable = R.enumerable || !1, R.configurable = !0, "value" in R && (R.writable = !0), Object.defineProperty(j, R.key, R);
              }
            }
            return function(j, C, q) {
              return C && F(j.prototype, C), q && F(j, q), j;
            };
          }(), y = o(2), d = E(y), g = o(20), i = E(g), n = o(0), a = E(n), p = o(13), h = E(p), m = o(24), f = E(m), u = o(4), k = E(u), c = o(16), w = E(c), M = o(21), $ = E(M), A = o(11), P = E(A), O = o(3), x = E(O);
          function E(F) {
            return F && F.__esModule ? F : { default: F };
          }
          function T(F, j, C) {
            return j in F ? Object.defineProperty(F, j, { value: C, enumerable: !0, configurable: !0, writable: !0 }) : F[j] = C, F;
          }
          function L(F, j) {
            if (!(F instanceof j))
              throw new TypeError("Cannot call a class as a function");
          }
          var D = /^[ -~]*$/, z = function() {
            function F(j) {
              L(this, F), this.scroll = j, this.delta = this.getDelta();
            }
            return v(F, [{
              key: "applyDelta",
              value: function(C) {
                var q = this, R = !1;
                this.scroll.update();
                var X = this.scroll.length();
                return this.scroll.batchStart(), C = te(C), C.reduce(function(H, I) {
                  var Y = I.retain || I.delete || I.insert.length || 1, Q = I.attributes || {};
                  if (I.insert != null) {
                    if (typeof I.insert == "string") {
                      var ee = I.insert;
                      ee.endsWith(`
`) && R && (R = !1, ee = ee.slice(0, -1)), H >= X && !ee.endsWith(`
`) && (R = !0), q.scroll.insertAt(H, ee);
                      var oe = q.scroll.line(H), ve = l(oe, 2), Oe = ve[0], Me = ve[1], De = (0, x.default)({}, (0, u.bubbleFormats)(Oe));
                      if (Oe instanceof k.default) {
                        var qe = Oe.descendant(a.default.Leaf, Me), ut = l(qe, 1), tt = ut[0];
                        De = (0, x.default)(De, (0, u.bubbleFormats)(tt));
                      }
                      Q = i.default.attributes.diff(De, Q) || {};
                    } else if (b(I.insert) === "object") {
                      var ie = Object.keys(I.insert)[0];
                      if (ie == null)
                        return H;
                      q.scroll.insertAt(H, ie, I.insert[ie]);
                    }
                    X += Y;
                  }
                  return Object.keys(Q).forEach(function(le) {
                    q.scroll.formatAt(H, Y, le, Q[le]);
                  }), H + Y;
                }, 0), C.reduce(function(H, I) {
                  return typeof I.delete == "number" ? (q.scroll.deleteAt(H, I.delete), H) : H + (I.retain || I.insert.length || 1);
                }, 0), this.scroll.batchEnd(), this.update(C);
              }
            }, {
              key: "deleteText",
              value: function(C, q) {
                return this.scroll.deleteAt(C, q), this.update(new d.default().retain(C).delete(q));
              }
            }, {
              key: "formatLine",
              value: function(C, q) {
                var R = this, X = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return this.scroll.update(), Object.keys(X).forEach(function(H) {
                  if (!(R.scroll.whitelist != null && !R.scroll.whitelist[H])) {
                    var I = R.scroll.lines(C, Math.max(q, 1)), Y = q;
                    I.forEach(function(Q) {
                      var ee = Q.length();
                      if (!(Q instanceof h.default))
                        Q.format(H, X[H]);
                      else {
                        var oe = C - Q.offset(R.scroll), ve = Q.newlineIndex(oe + Y) - oe + 1;
                        Q.formatAt(oe, ve, H, X[H]);
                      }
                      Y -= ee;
                    });
                  }
                }), this.scroll.optimize(), this.update(new d.default().retain(C).retain(q, (0, $.default)(X)));
              }
            }, {
              key: "formatText",
              value: function(C, q) {
                var R = this, X = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return Object.keys(X).forEach(function(H) {
                  R.scroll.formatAt(C, q, H, X[H]);
                }), this.update(new d.default().retain(C).retain(q, (0, $.default)(X)));
              }
            }, {
              key: "getContents",
              value: function(C, q) {
                return this.delta.slice(C, C + q);
              }
            }, {
              key: "getDelta",
              value: function() {
                return this.scroll.lines().reduce(function(C, q) {
                  return C.concat(q.delta());
                }, new d.default());
              }
            }, {
              key: "getFormat",
              value: function(C) {
                var q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, R = [], X = [];
                q === 0 ? this.scroll.path(C).forEach(function(I) {
                  var Y = l(I, 1), Q = Y[0];
                  Q instanceof k.default ? R.push(Q) : Q instanceof a.default.Leaf && X.push(Q);
                }) : (R = this.scroll.lines(C, q), X = this.scroll.descendants(a.default.Leaf, C, q));
                var H = [R, X].map(function(I) {
                  if (I.length === 0)
                    return {};
                  for (var Y = (0, u.bubbleFormats)(I.shift()); Object.keys(Y).length > 0; ) {
                    var Q = I.shift();
                    if (Q == null)
                      return Y;
                    Y = U((0, u.bubbleFormats)(Q), Y);
                  }
                  return Y;
                });
                return x.default.apply(x.default, H);
              }
            }, {
              key: "getText",
              value: function(C, q) {
                return this.getContents(C, q).filter(function(R) {
                  return typeof R.insert == "string";
                }).map(function(R) {
                  return R.insert;
                }).join("");
              }
            }, {
              key: "insertEmbed",
              value: function(C, q, R) {
                return this.scroll.insertAt(C, q, R), this.update(new d.default().retain(C).insert(T({}, q, R)));
              }
            }, {
              key: "insertText",
              value: function(C, q) {
                var R = this, X = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return q = q.replace(/\r\n/g, `
`).replace(/\r/g, `
`), this.scroll.insertAt(C, q), Object.keys(X).forEach(function(H) {
                  R.scroll.formatAt(C, q.length, H, X[H]);
                }), this.update(new d.default().retain(C).insert(q, (0, $.default)(X)));
              }
            }, {
              key: "isBlank",
              value: function() {
                if (this.scroll.children.length == 0)
                  return !0;
                if (this.scroll.children.length > 1)
                  return !1;
                var C = this.scroll.children.head;
                return C.statics.blotName !== k.default.blotName || C.children.length > 1 ? !1 : C.children.head instanceof w.default;
              }
            }, {
              key: "removeFormat",
              value: function(C, q) {
                var R = this.getText(C, q), X = this.scroll.line(C + q), H = l(X, 2), I = H[0], Y = H[1], Q = 0, ee = new d.default();
                I != null && (I instanceof h.default ? Q = I.newlineIndex(Y) - Y + 1 : Q = I.length() - Y, ee = I.delta().slice(Y, Y + Q - 1).insert(`
`));
                var oe = this.getContents(C, q + Q), ve = oe.diff(new d.default().insert(R).concat(ee)), Oe = new d.default().retain(C).concat(ve);
                return this.applyDelta(Oe);
              }
            }, {
              key: "update",
              value: function(C) {
                var q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], R = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, X = this.delta;
                if (q.length === 1 && q[0].type === "characterData" && q[0].target.data.match(D) && a.default.find(q[0].target)) {
                  var H = a.default.find(q[0].target), I = (0, u.bubbleFormats)(H), Y = H.offset(this.scroll), Q = q[0].oldValue.replace(f.default.CONTENTS, ""), ee = new d.default().insert(Q), oe = new d.default().insert(H.value()), ve = new d.default().retain(Y).concat(ee.diff(oe, R));
                  C = ve.reduce(function(Oe, Me) {
                    return Me.insert ? Oe.insert(Me.insert, I) : Oe.push(Me);
                  }, new d.default()), this.delta = X.compose(C);
                } else
                  this.delta = this.getDelta(), (!C || !(0, P.default)(X.compose(C), this.delta)) && (C = X.diff(this.delta, R));
                return C;
              }
            }]), F;
          }();
          function U(F, j) {
            return Object.keys(j).reduce(function(C, q) {
              return F[q] == null || (j[q] === F[q] ? C[q] = j[q] : Array.isArray(j[q]) ? j[q].indexOf(F[q]) < 0 && (C[q] = j[q].concat([F[q]])) : C[q] = [j[q], F[q]]), C;
            }, {});
          }
          function te(F) {
            return F.reduce(function(j, C) {
              if (C.insert === 1) {
                var q = (0, $.default)(C.attributes);
                return delete q.image, j.insert({ image: C.attributes.image }, q);
              }
              if (C.attributes != null && (C.attributes.list === !0 || C.attributes.bullet === !0) && (C = (0, $.default)(C), C.attributes.list ? C.attributes.list = "ordered" : (C.attributes.list = "bullet", delete C.attributes.bullet)), typeof C.insert == "string") {
                var R = C.insert.replace(/\r\n/g, `
`).replace(/\r/g, `
`);
                return j.insert(R, C.attributes);
              }
              return j.push(C);
            }, new d.default());
          }
          s.default = z;
        },
        /* 15 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.default = s.Range = void 0;
          var b = function() {
            function A(P, O) {
              var x = [], E = !0, T = !1, L = void 0;
              try {
                for (var D = P[Symbol.iterator](), z; !(E = (z = D.next()).done) && (x.push(z.value), !(O && x.length === O)); E = !0)
                  ;
              } catch (U) {
                T = !0, L = U;
              } finally {
                try {
                  !E && D.return && D.return();
                } finally {
                  if (T)
                    throw L;
                }
              }
              return x;
            }
            return function(P, O) {
              if (Array.isArray(P))
                return P;
              if (Symbol.iterator in Object(P))
                return A(P, O);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), l = function() {
            function A(P, O) {
              for (var x = 0; x < O.length; x++) {
                var E = O[x];
                E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(P, E.key, E);
              }
            }
            return function(P, O, x) {
              return O && A(P.prototype, O), x && A(P, x), P;
            };
          }(), v = o(0), y = f(v), d = o(21), g = f(d), i = o(11), n = f(i), a = o(8), p = f(a), h = o(10), m = f(h);
          function f(A) {
            return A && A.__esModule ? A : { default: A };
          }
          function u(A) {
            if (Array.isArray(A)) {
              for (var P = 0, O = Array(A.length); P < A.length; P++)
                O[P] = A[P];
              return O;
            } else
              return Array.from(A);
          }
          function k(A, P) {
            if (!(A instanceof P))
              throw new TypeError("Cannot call a class as a function");
          }
          var c = (0, m.default)("quill:selection"), w = function A(P) {
            var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            k(this, A), this.index = P, this.length = O;
          }, M = function() {
            function A(P, O) {
              var x = this;
              k(this, A), this.emitter = O, this.scroll = P, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = y.default.create("cursor", this), this.lastRange = this.savedRange = new w(0, 0), this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, function() {
                x.mouseDown || setTimeout(x.update.bind(x, p.default.sources.USER), 1);
              }), this.emitter.on(p.default.events.EDITOR_CHANGE, function(E, T) {
                E === p.default.events.TEXT_CHANGE && T.length() > 0 && x.update(p.default.sources.SILENT);
              }), this.emitter.on(p.default.events.SCROLL_BEFORE_UPDATE, function() {
                if (x.hasFocus()) {
                  var E = x.getNativeRange();
                  E != null && E.start.node !== x.cursor.textNode && x.emitter.once(p.default.events.SCROLL_UPDATE, function() {
                    try {
                      x.setNativeRange(E.start.node, E.start.offset, E.end.node, E.end.offset);
                    } catch {
                    }
                  });
                }
              }), this.emitter.on(p.default.events.SCROLL_OPTIMIZE, function(E, T) {
                if (T.range) {
                  var L = T.range, D = L.startNode, z = L.startOffset, U = L.endNode, te = L.endOffset;
                  x.setNativeRange(D, z, U, te);
                }
              }), this.update(p.default.sources.SILENT);
            }
            return l(A, [{
              key: "handleComposition",
              value: function() {
                var O = this;
                this.root.addEventListener("compositionstart", function() {
                  O.composing = !0;
                }), this.root.addEventListener("compositionend", function() {
                  if (O.composing = !1, O.cursor.parent) {
                    var x = O.cursor.restore();
                    if (!x)
                      return;
                    setTimeout(function() {
                      O.setNativeRange(x.startNode, x.startOffset, x.endNode, x.endOffset);
                    }, 1);
                  }
                });
              }
            }, {
              key: "handleDragging",
              value: function() {
                var O = this;
                this.emitter.listenDOM("mousedown", document.body, function() {
                  O.mouseDown = !0;
                }), this.emitter.listenDOM("mouseup", document.body, function() {
                  O.mouseDown = !1, O.update(p.default.sources.USER);
                });
              }
            }, {
              key: "focus",
              value: function() {
                this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange));
              }
            }, {
              key: "format",
              value: function(O, x) {
                if (!(this.scroll.whitelist != null && !this.scroll.whitelist[O])) {
                  this.scroll.update();
                  var E = this.getNativeRange();
                  if (!(E == null || !E.native.collapsed || y.default.query(O, y.default.Scope.BLOCK))) {
                    if (E.start.node !== this.cursor.textNode) {
                      var T = y.default.find(E.start.node, !1);
                      if (T == null)
                        return;
                      if (T instanceof y.default.Leaf) {
                        var L = T.split(E.start.offset);
                        T.parent.insertBefore(this.cursor, L);
                      } else
                        T.insertBefore(this.cursor, E.start.node);
                      this.cursor.attach();
                    }
                    this.cursor.format(O, x), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
                  }
                }
              }
            }, {
              key: "getBounds",
              value: function(O) {
                var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, E = this.scroll.length();
                O = Math.min(O, E - 1), x = Math.min(O + x, E - 1) - O;
                var T = void 0, L = this.scroll.leaf(O), D = b(L, 2), z = D[0], U = D[1];
                if (z == null)
                  return null;
                var te = z.position(U, !0), F = b(te, 2);
                T = F[0], U = F[1];
                var j = document.createRange();
                if (x > 0) {
                  j.setStart(T, U);
                  var C = this.scroll.leaf(O + x), q = b(C, 2);
                  if (z = q[0], U = q[1], z == null)
                    return null;
                  var R = z.position(U, !0), X = b(R, 2);
                  return T = X[0], U = X[1], j.setEnd(T, U), j.getBoundingClientRect();
                } else {
                  var H = "left", I = void 0;
                  return T instanceof Text ? (U < T.data.length ? (j.setStart(T, U), j.setEnd(T, U + 1)) : (j.setStart(T, U - 1), j.setEnd(T, U), H = "right"), I = j.getBoundingClientRect()) : (I = z.domNode.getBoundingClientRect(), U > 0 && (H = "right")), {
                    bottom: I.top + I.height,
                    height: I.height,
                    left: I[H],
                    right: I[H],
                    top: I.top,
                    width: 0
                  };
                }
              }
            }, {
              key: "getNativeRange",
              value: function() {
                var O = document.getSelection();
                if (O == null || O.rangeCount <= 0)
                  return null;
                var x = O.getRangeAt(0);
                if (x == null)
                  return null;
                var E = this.normalizeNative(x);
                return c.info("getNativeRange", E), E;
              }
            }, {
              key: "getRange",
              value: function() {
                var O = this.getNativeRange();
                if (O == null)
                  return [null, null];
                var x = this.normalizedToRange(O);
                return [x, O];
              }
            }, {
              key: "hasFocus",
              value: function() {
                return document.activeElement === this.root;
              }
            }, {
              key: "normalizedToRange",
              value: function(O) {
                var x = this, E = [[O.start.node, O.start.offset]];
                O.native.collapsed || E.push([O.end.node, O.end.offset]);
                var T = E.map(function(z) {
                  var U = b(z, 2), te = U[0], F = U[1], j = y.default.find(te, !0), C = j.offset(x.scroll);
                  return F === 0 ? C : j instanceof y.default.Container ? C + j.length() : C + j.index(te, F);
                }), L = Math.min(Math.max.apply(Math, u(T)), this.scroll.length() - 1), D = Math.min.apply(Math, [L].concat(u(T)));
                return new w(D, L - D);
              }
            }, {
              key: "normalizeNative",
              value: function(O) {
                if (!$(this.root, O.startContainer) || !O.collapsed && !$(this.root, O.endContainer))
                  return null;
                var x = {
                  start: { node: O.startContainer, offset: O.startOffset },
                  end: { node: O.endContainer, offset: O.endOffset },
                  native: O
                };
                return [x.start, x.end].forEach(function(E) {
                  for (var T = E.node, L = E.offset; !(T instanceof Text) && T.childNodes.length > 0; )
                    if (T.childNodes.length > L)
                      T = T.childNodes[L], L = 0;
                    else if (T.childNodes.length === L)
                      T = T.lastChild, L = T instanceof Text ? T.data.length : T.childNodes.length + 1;
                    else
                      break;
                  E.node = T, E.offset = L;
                }), x;
              }
            }, {
              key: "rangeToNative",
              value: function(O) {
                var x = this, E = O.collapsed ? [O.index] : [O.index, O.index + O.length], T = [], L = this.scroll.length();
                return E.forEach(function(D, z) {
                  D = Math.min(L - 1, D);
                  var U = void 0, te = x.scroll.leaf(D), F = b(te, 2), j = F[0], C = F[1], q = j.position(C, z !== 0), R = b(q, 2);
                  U = R[0], C = R[1], T.push(U, C);
                }), T.length < 2 && (T = T.concat(T)), T;
              }
            }, {
              key: "scrollIntoView",
              value: function(O) {
                var x = this.lastRange;
                if (x != null) {
                  var E = this.getBounds(x.index, x.length);
                  if (E != null) {
                    var T = this.scroll.length() - 1, L = this.scroll.line(Math.min(x.index, T)), D = b(L, 1), z = D[0], U = z;
                    if (x.length > 0) {
                      var te = this.scroll.line(Math.min(x.index + x.length, T)), F = b(te, 1);
                      U = F[0];
                    }
                    if (!(z == null || U == null)) {
                      var j = O.getBoundingClientRect();
                      E.top < j.top ? O.scrollTop -= j.top - E.top : E.bottom > j.bottom && (O.scrollTop += E.bottom - j.bottom);
                    }
                  }
                }
              }
            }, {
              key: "setNativeRange",
              value: function(O, x) {
                var E = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : O, T = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : x, L = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
                if (c.info("setNativeRange", O, x, E, T), !(O != null && (this.root.parentNode == null || O.parentNode == null || E.parentNode == null))) {
                  var D = document.getSelection();
                  if (D != null)
                    if (O != null) {
                      this.hasFocus() || this.root.focus();
                      var z = (this.getNativeRange() || {}).native;
                      if (z == null || L || O !== z.startContainer || x !== z.startOffset || E !== z.endContainer || T !== z.endOffset) {
                        O.tagName == "BR" && (x = [].indexOf.call(O.parentNode.childNodes, O), O = O.parentNode), E.tagName == "BR" && (T = [].indexOf.call(E.parentNode.childNodes, E), E = E.parentNode);
                        var U = document.createRange();
                        U.setStart(O, x), U.setEnd(E, T), D.removeAllRanges(), D.addRange(U);
                      }
                    } else
                      D.removeAllRanges(), this.root.blur(), document.body.focus();
                }
              }
            }, {
              key: "setRange",
              value: function(O) {
                var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, E = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : p.default.sources.API;
                if (typeof x == "string" && (E = x, x = !1), c.info("setRange", O), O != null) {
                  var T = this.rangeToNative(O);
                  this.setNativeRange.apply(this, u(T).concat([x]));
                } else
                  this.setNativeRange(null);
                this.update(E);
              }
            }, {
              key: "update",
              value: function() {
                var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : p.default.sources.USER, x = this.lastRange, E = this.getRange(), T = b(E, 2), L = T[0], D = T[1];
                if (this.lastRange = L, this.lastRange != null && (this.savedRange = this.lastRange), !(0, n.default)(x, this.lastRange)) {
                  var z;
                  !this.composing && D != null && D.native.collapsed && D.start.node !== this.cursor.textNode && this.cursor.restore();
                  var U = [p.default.events.SELECTION_CHANGE, (0, g.default)(this.lastRange), (0, g.default)(x), O];
                  if ((z = this.emitter).emit.apply(z, [p.default.events.EDITOR_CHANGE].concat(U)), O !== p.default.sources.SILENT) {
                    var te;
                    (te = this.emitter).emit.apply(te, U);
                  }
                }
              }
            }]), A;
          }();
          function $(A, P) {
            try {
              P.parentNode;
            } catch {
              return !1;
            }
            return P instanceof Text && (P = P.parentNode), A.contains(P);
          }
          s.Range = w, s.default = M;
        },
        /* 16 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var b = function() {
            function p(h, m) {
              for (var f = 0; f < m.length; f++) {
                var u = m[f];
                u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(h, u.key, u);
              }
            }
            return function(h, m, f) {
              return m && p(h.prototype, m), f && p(h, f), h;
            };
          }(), l = function p(h, m, f) {
            h === null && (h = Function.prototype);
            var u = Object.getOwnPropertyDescriptor(h, m);
            if (u === void 0) {
              var k = Object.getPrototypeOf(h);
              return k === null ? void 0 : p(k, m, f);
            } else {
              if ("value" in u)
                return u.value;
              var c = u.get;
              return c === void 0 ? void 0 : c.call(f);
            }
          }, v = o(0), y = d(v);
          function d(p) {
            return p && p.__esModule ? p : { default: p };
          }
          function g(p, h) {
            if (!(p instanceof h))
              throw new TypeError("Cannot call a class as a function");
          }
          function i(p, h) {
            if (!p)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return h && (typeof h == "object" || typeof h == "function") ? h : p;
          }
          function n(p, h) {
            if (typeof h != "function" && h !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof h);
            p.prototype = Object.create(h && h.prototype, { constructor: { value: p, enumerable: !1, writable: !0, configurable: !0 } }), h && (Object.setPrototypeOf ? Object.setPrototypeOf(p, h) : p.__proto__ = h);
          }
          var a = function(p) {
            n(h, p);
            function h() {
              return g(this, h), i(this, (h.__proto__ || Object.getPrototypeOf(h)).apply(this, arguments));
            }
            return b(h, [{
              key: "insertInto",
              value: function(f, u) {
                f.children.length === 0 ? l(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "insertInto", this).call(this, f, u) : this.remove();
              }
            }, {
              key: "length",
              value: function() {
                return 0;
              }
            }, {
              key: "value",
              value: function() {
                return "";
              }
            }], [{
              key: "value",
              value: function() {
              }
            }]), h;
          }(y.default.Embed);
          a.blotName = "break", a.tagName = "BR", s.default = a;
        },
        /* 17 */
        /***/
        function(t, s, o) {
          var b = this && this.__extends || function() {
            var i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
              n.__proto__ = a;
            } || function(n, a) {
              for (var p in a)
                a.hasOwnProperty(p) && (n[p] = a[p]);
            };
            return function(n, a) {
              i(n, a);
              function p() {
                this.constructor = n;
              }
              n.prototype = a === null ? Object.create(a) : (p.prototype = a.prototype, new p());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var l = o(44), v = o(30), y = o(1), d = (
            /** @class */
            function(i) {
              b(n, i);
              function n(a) {
                var p = i.call(this, a) || this;
                return p.build(), p;
              }
              return n.prototype.appendChild = function(a) {
                this.insertBefore(a);
              }, n.prototype.attach = function() {
                i.prototype.attach.call(this), this.children.forEach(function(a) {
                  a.attach();
                });
              }, n.prototype.build = function() {
                var a = this;
                this.children = new l.default(), [].slice.call(this.domNode.childNodes).reverse().forEach(function(p) {
                  try {
                    var h = g(p);
                    a.insertBefore(h, a.children.head || void 0);
                  } catch (m) {
                    if (m instanceof y.ParchmentError)
                      return;
                    throw m;
                  }
                });
              }, n.prototype.deleteAt = function(a, p) {
                if (a === 0 && p === this.length())
                  return this.remove();
                this.children.forEachAt(a, p, function(h, m, f) {
                  h.deleteAt(m, f);
                });
              }, n.prototype.descendant = function(a, p) {
                var h = this.children.find(p), m = h[0], f = h[1];
                return a.blotName == null && a(m) || a.blotName != null && m instanceof a ? [m, f] : m instanceof n ? m.descendant(a, f) : [null, -1];
              }, n.prototype.descendants = function(a, p, h) {
                p === void 0 && (p = 0), h === void 0 && (h = Number.MAX_VALUE);
                var m = [], f = h;
                return this.children.forEachAt(p, h, function(u, k, c) {
                  (a.blotName == null && a(u) || a.blotName != null && u instanceof a) && m.push(u), u instanceof n && (m = m.concat(u.descendants(a, k, f))), f -= c;
                }), m;
              }, n.prototype.detach = function() {
                this.children.forEach(function(a) {
                  a.detach();
                }), i.prototype.detach.call(this);
              }, n.prototype.formatAt = function(a, p, h, m) {
                this.children.forEachAt(a, p, function(f, u, k) {
                  f.formatAt(u, k, h, m);
                });
              }, n.prototype.insertAt = function(a, p, h) {
                var m = this.children.find(a), f = m[0], u = m[1];
                if (f)
                  f.insertAt(u, p, h);
                else {
                  var k = h == null ? y.create("text", p) : y.create(p, h);
                  this.appendChild(k);
                }
              }, n.prototype.insertBefore = function(a, p) {
                if (this.statics.allowedChildren != null && !this.statics.allowedChildren.some(function(h) {
                  return a instanceof h;
                }))
                  throw new y.ParchmentError("Cannot insert " + a.statics.blotName + " into " + this.statics.blotName);
                a.insertInto(this, p);
              }, n.prototype.length = function() {
                return this.children.reduce(function(a, p) {
                  return a + p.length();
                }, 0);
              }, n.prototype.moveChildren = function(a, p) {
                this.children.forEach(function(h) {
                  a.insertBefore(h, p);
                });
              }, n.prototype.optimize = function(a) {
                if (i.prototype.optimize.call(this, a), this.children.length === 0)
                  if (this.statics.defaultChild != null) {
                    var p = y.create(this.statics.defaultChild);
                    this.appendChild(p), p.optimize(a);
                  } else
                    this.remove();
              }, n.prototype.path = function(a, p) {
                p === void 0 && (p = !1);
                var h = this.children.find(a, p), m = h[0], f = h[1], u = [[this, a]];
                return m instanceof n ? u.concat(m.path(f, p)) : (m != null && u.push([m, f]), u);
              }, n.prototype.removeChild = function(a) {
                this.children.remove(a);
              }, n.prototype.replace = function(a) {
                a instanceof n && a.moveChildren(this), i.prototype.replace.call(this, a);
              }, n.prototype.split = function(a, p) {
                if (p === void 0 && (p = !1), !p) {
                  if (a === 0)
                    return this;
                  if (a === this.length())
                    return this.next;
                }
                var h = this.clone();
                return this.parent.insertBefore(h, this.next), this.children.forEachAt(a, this.length(), function(m, f, u) {
                  m = m.split(f, p), h.appendChild(m);
                }), h;
              }, n.prototype.unwrap = function() {
                this.moveChildren(this.parent, this.next), this.remove();
              }, n.prototype.update = function(a, p) {
                var h = this, m = [], f = [];
                a.forEach(function(u) {
                  u.target === h.domNode && u.type === "childList" && (m.push.apply(m, u.addedNodes), f.push.apply(f, u.removedNodes));
                }), f.forEach(function(u) {
                  if (!(u.parentNode != null && // @ts-ignore
                  u.tagName !== "IFRAME" && document.body.compareDocumentPosition(u) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
                    var k = y.find(u);
                    k != null && (k.domNode.parentNode == null || k.domNode.parentNode === h.domNode) && k.detach();
                  }
                }), m.filter(function(u) {
                  return u.parentNode == h.domNode;
                }).sort(function(u, k) {
                  return u === k ? 0 : u.compareDocumentPosition(k) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1;
                }).forEach(function(u) {
                  var k = null;
                  u.nextSibling != null && (k = y.find(u.nextSibling));
                  var c = g(u);
                  (c.next != k || c.next == null) && (c.parent != null && c.parent.removeChild(h), h.insertBefore(c, k || void 0));
                });
              }, n;
            }(v.default)
          );
          function g(i) {
            var n = y.find(i);
            if (n == null)
              try {
                n = y.create(i);
              } catch {
                n = y.create(y.Scope.INLINE), [].slice.call(i.childNodes).forEach(function(p) {
                  n.domNode.appendChild(p);
                }), i.parentNode && i.parentNode.replaceChild(n.domNode, i), n.attach();
              }
            return n;
          }
          s.default = d;
        },
        /* 18 */
        /***/
        function(t, s, o) {
          var b = this && this.__extends || function() {
            var i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
              n.__proto__ = a;
            } || function(n, a) {
              for (var p in a)
                a.hasOwnProperty(p) && (n[p] = a[p]);
            };
            return function(n, a) {
              i(n, a);
              function p() {
                this.constructor = n;
              }
              n.prototype = a === null ? Object.create(a) : (p.prototype = a.prototype, new p());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var l = o(12), v = o(31), y = o(17), d = o(1), g = (
            /** @class */
            function(i) {
              b(n, i);
              function n(a) {
                var p = i.call(this, a) || this;
                return p.attributes = new v.default(p.domNode), p;
              }
              return n.formats = function(a) {
                if (typeof this.tagName == "string")
                  return !0;
                if (Array.isArray(this.tagName))
                  return a.tagName.toLowerCase();
              }, n.prototype.format = function(a, p) {
                var h = d.query(a);
                h instanceof l.default ? this.attributes.attribute(h, p) : p && h != null && (a !== this.statics.blotName || this.formats()[a] !== p) && this.replaceWith(a, p);
              }, n.prototype.formats = function() {
                var a = this.attributes.values(), p = this.statics.formats(this.domNode);
                return p != null && (a[this.statics.blotName] = p), a;
              }, n.prototype.replaceWith = function(a, p) {
                var h = i.prototype.replaceWith.call(this, a, p);
                return this.attributes.copy(h), h;
              }, n.prototype.update = function(a, p) {
                var h = this;
                i.prototype.update.call(this, a, p), a.some(function(m) {
                  return m.target === h.domNode && m.type === "attributes";
                }) && this.attributes.build();
              }, n.prototype.wrap = function(a, p) {
                var h = i.prototype.wrap.call(this, a, p);
                return h instanceof n && h.statics.scope === this.statics.scope && this.attributes.move(h), h;
              }, n;
            }(y.default)
          );
          s.default = g;
        },
        /* 19 */
        /***/
        function(t, s, o) {
          var b = this && this.__extends || function() {
            var d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(g, i) {
              g.__proto__ = i;
            } || function(g, i) {
              for (var n in i)
                i.hasOwnProperty(n) && (g[n] = i[n]);
            };
            return function(g, i) {
              d(g, i);
              function n() {
                this.constructor = g;
              }
              g.prototype = i === null ? Object.create(i) : (n.prototype = i.prototype, new n());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var l = o(30), v = o(1), y = (
            /** @class */
            function(d) {
              b(g, d);
              function g() {
                return d !== null && d.apply(this, arguments) || this;
              }
              return g.value = function(i) {
                return !0;
              }, g.prototype.index = function(i, n) {
                return this.domNode === i || this.domNode.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(n, 1) : -1;
              }, g.prototype.position = function(i, n) {
                var a = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
                return i > 0 && (a += 1), [this.parent.domNode, a];
              }, g.prototype.value = function() {
                var i;
                return i = {}, i[this.statics.blotName] = this.statics.value(this.domNode) || !0, i;
              }, g.scope = v.Scope.INLINE_BLOT, g;
            }(l.default)
          );
          s.default = y;
        },
        /* 20 */
        /***/
        function(t, s, o) {
          var b = o(11), l = o(3), v = {
            attributes: {
              compose: function(d, g, i) {
                typeof d != "object" && (d = {}), typeof g != "object" && (g = {});
                var n = l(!0, {}, g);
                i || (n = Object.keys(n).reduce(function(p, h) {
                  return n[h] != null && (p[h] = n[h]), p;
                }, {}));
                for (var a in d)
                  d[a] !== void 0 && g[a] === void 0 && (n[a] = d[a]);
                return Object.keys(n).length > 0 ? n : void 0;
              },
              diff: function(d, g) {
                typeof d != "object" && (d = {}), typeof g != "object" && (g = {});
                var i = Object.keys(d).concat(Object.keys(g)).reduce(function(n, a) {
                  return b(d[a], g[a]) || (n[a] = g[a] === void 0 ? null : g[a]), n;
                }, {});
                return Object.keys(i).length > 0 ? i : void 0;
              },
              transform: function(d, g, i) {
                if (typeof d != "object")
                  return g;
                if (typeof g == "object") {
                  if (!i)
                    return g;
                  var n = Object.keys(g).reduce(function(a, p) {
                    return d[p] === void 0 && (a[p] = g[p]), a;
                  }, {});
                  return Object.keys(n).length > 0 ? n : void 0;
                }
              }
            },
            iterator: function(d) {
              return new y(d);
            },
            length: function(d) {
              return typeof d.delete == "number" ? d.delete : typeof d.retain == "number" ? d.retain : typeof d.insert == "string" ? d.insert.length : 1;
            }
          };
          function y(d) {
            this.ops = d, this.index = 0, this.offset = 0;
          }
          y.prototype.hasNext = function() {
            return this.peekLength() < 1 / 0;
          }, y.prototype.next = function(d) {
            d || (d = 1 / 0);
            var g = this.ops[this.index];
            if (g) {
              var i = this.offset, n = v.length(g);
              if (d >= n - i ? (d = n - i, this.index += 1, this.offset = 0) : this.offset += d, typeof g.delete == "number")
                return { delete: d };
              var a = {};
              return g.attributes && (a.attributes = g.attributes), typeof g.retain == "number" ? a.retain = d : typeof g.insert == "string" ? a.insert = g.insert.substr(i, d) : a.insert = g.insert, a;
            } else
              return { retain: 1 / 0 };
          }, y.prototype.peek = function() {
            return this.ops[this.index];
          }, y.prototype.peekLength = function() {
            return this.ops[this.index] ? v.length(this.ops[this.index]) - this.offset : 1 / 0;
          }, y.prototype.peekType = function() {
            return this.ops[this.index] ? typeof this.ops[this.index].delete == "number" ? "delete" : typeof this.ops[this.index].retain == "number" ? "retain" : "insert" : "retain";
          }, y.prototype.rest = function() {
            if (this.hasNext()) {
              if (this.offset === 0)
                return this.ops.slice(this.index);
              var d = this.offset, g = this.index, i = this.next(), n = this.ops.slice(this.index);
              return this.offset = d, this.index = g, [i].concat(n);
            } else
              return [];
          }, t.exports = v;
        },
        /* 21 */
        /***/
        function(t, s) {
          var o = function() {
            function b(h, m) {
              return m != null && h instanceof m;
            }
            var l;
            try {
              l = Map;
            } catch {
              l = function() {
              };
            }
            var v;
            try {
              v = Set;
            } catch {
              v = function() {
              };
            }
            var y;
            try {
              y = Promise;
            } catch {
              y = function() {
              };
            }
            function d(h, m, f, u, k) {
              typeof m == "object" && (f = m.depth, u = m.prototype, k = m.includeNonEnumerable, m = m.circular);
              var c = [], w = [], M = typeof Buffer < "u";
              typeof m > "u" && (m = !0), typeof f > "u" && (f = 1 / 0);
              function $(A, P) {
                if (A === null)
                  return null;
                if (P === 0)
                  return A;
                var O, x;
                if (typeof A != "object")
                  return A;
                if (b(A, l))
                  O = new l();
                else if (b(A, v))
                  O = new v();
                else if (b(A, y))
                  O = new y(function(j, C) {
                    A.then(function(q) {
                      j($(q, P - 1));
                    }, function(q) {
                      C($(q, P - 1));
                    });
                  });
                else if (d.__isArray(A))
                  O = [];
                else if (d.__isRegExp(A))
                  O = new RegExp(A.source, p(A)), A.lastIndex && (O.lastIndex = A.lastIndex);
                else if (d.__isDate(A))
                  O = new Date(A.getTime());
                else {
                  if (M && Buffer.isBuffer(A))
                    return Buffer.allocUnsafe ? O = Buffer.allocUnsafe(A.length) : O = new Buffer(A.length), A.copy(O), O;
                  b(A, Error) ? O = Object.create(A) : typeof u > "u" ? (x = Object.getPrototypeOf(A), O = Object.create(x)) : (O = Object.create(u), x = u);
                }
                if (m) {
                  var E = c.indexOf(A);
                  if (E != -1)
                    return w[E];
                  c.push(A), w.push(O);
                }
                b(A, l) && A.forEach(function(j, C) {
                  var q = $(C, P - 1), R = $(j, P - 1);
                  O.set(q, R);
                }), b(A, v) && A.forEach(function(j) {
                  var C = $(j, P - 1);
                  O.add(C);
                });
                for (var T in A) {
                  var L;
                  x && (L = Object.getOwnPropertyDescriptor(x, T)), !(L && L.set == null) && (O[T] = $(A[T], P - 1));
                }
                if (Object.getOwnPropertySymbols)
                  for (var D = Object.getOwnPropertySymbols(A), T = 0; T < D.length; T++) {
                    var z = D[T], U = Object.getOwnPropertyDescriptor(A, z);
                    U && !U.enumerable && !k || (O[z] = $(A[z], P - 1), U.enumerable || Object.defineProperty(O, z, {
                      enumerable: !1
                    }));
                  }
                if (k)
                  for (var te = Object.getOwnPropertyNames(A), T = 0; T < te.length; T++) {
                    var F = te[T], U = Object.getOwnPropertyDescriptor(A, F);
                    U && U.enumerable || (O[F] = $(A[F], P - 1), Object.defineProperty(O, F, {
                      enumerable: !1
                    }));
                  }
                return O;
              }
              return $(h, f);
            }
            d.clonePrototype = function(m) {
              if (m === null)
                return null;
              var f = function() {
              };
              return f.prototype = m, new f();
            };
            function g(h) {
              return Object.prototype.toString.call(h);
            }
            d.__objToStr = g;
            function i(h) {
              return typeof h == "object" && g(h) === "[object Date]";
            }
            d.__isDate = i;
            function n(h) {
              return typeof h == "object" && g(h) === "[object Array]";
            }
            d.__isArray = n;
            function a(h) {
              return typeof h == "object" && g(h) === "[object RegExp]";
            }
            d.__isRegExp = a;
            function p(h) {
              var m = "";
              return h.global && (m += "g"), h.ignoreCase && (m += "i"), h.multiline && (m += "m"), m;
            }
            return d.__getRegExpFlags = p, d;
          }();
          typeof t == "object" && t.exports && (t.exports = o);
        },
        /* 22 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var b = function() {
            function O(x, E) {
              var T = [], L = !0, D = !1, z = void 0;
              try {
                for (var U = x[Symbol.iterator](), te; !(L = (te = U.next()).done) && (T.push(te.value), !(E && T.length === E)); L = !0)
                  ;
              } catch (F) {
                D = !0, z = F;
              } finally {
                try {
                  !L && U.return && U.return();
                } finally {
                  if (D)
                    throw z;
                }
              }
              return T;
            }
            return function(x, E) {
              if (Array.isArray(x))
                return x;
              if (Symbol.iterator in Object(x))
                return O(x, E);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), l = function() {
            function O(x, E) {
              for (var T = 0; T < E.length; T++) {
                var L = E[T];
                L.enumerable = L.enumerable || !1, L.configurable = !0, "value" in L && (L.writable = !0), Object.defineProperty(x, L.key, L);
              }
            }
            return function(x, E, T) {
              return E && O(x.prototype, E), T && O(x, T), x;
            };
          }(), v = function O(x, E, T) {
            x === null && (x = Function.prototype);
            var L = Object.getOwnPropertyDescriptor(x, E);
            if (L === void 0) {
              var D = Object.getPrototypeOf(x);
              return D === null ? void 0 : O(D, E, T);
            } else {
              if ("value" in L)
                return L.value;
              var z = L.get;
              return z === void 0 ? void 0 : z.call(T);
            }
          }, y = o(0), d = c(y), g = o(8), i = c(g), n = o(4), a = c(n), p = o(16), h = c(p), m = o(13), f = c(m), u = o(25), k = c(u);
          function c(O) {
            return O && O.__esModule ? O : { default: O };
          }
          function w(O, x) {
            if (!(O instanceof x))
              throw new TypeError("Cannot call a class as a function");
          }
          function M(O, x) {
            if (!O)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return x && (typeof x == "object" || typeof x == "function") ? x : O;
          }
          function $(O, x) {
            if (typeof x != "function" && x !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof x);
            O.prototype = Object.create(x && x.prototype, { constructor: { value: O, enumerable: !1, writable: !0, configurable: !0 } }), x && (Object.setPrototypeOf ? Object.setPrototypeOf(O, x) : O.__proto__ = x);
          }
          function A(O) {
            return O instanceof a.default || O instanceof n.BlockEmbed;
          }
          var P = function(O) {
            $(x, O);
            function x(E, T) {
              w(this, x);
              var L = M(this, (x.__proto__ || Object.getPrototypeOf(x)).call(this, E));
              return L.emitter = T.emitter, Array.isArray(T.whitelist) && (L.whitelist = T.whitelist.reduce(function(D, z) {
                return D[z] = !0, D;
              }, {})), L.domNode.addEventListener("DOMNodeInserted", function() {
              }), L.optimize(), L.enable(), L;
            }
            return l(x, [{
              key: "batchStart",
              value: function() {
                this.batch = !0;
              }
            }, {
              key: "batchEnd",
              value: function() {
                this.batch = !1, this.optimize();
              }
            }, {
              key: "deleteAt",
              value: function(T, L) {
                var D = this.line(T), z = b(D, 2), U = z[0], te = z[1], F = this.line(T + L), j = b(F, 1), C = j[0];
                if (v(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "deleteAt", this).call(this, T, L), C != null && U !== C && te > 0) {
                  if (U instanceof n.BlockEmbed || C instanceof n.BlockEmbed) {
                    this.optimize();
                    return;
                  }
                  if (U instanceof f.default) {
                    var q = U.newlineIndex(U.length(), !0);
                    if (q > -1 && (U = U.split(q + 1), U === C)) {
                      this.optimize();
                      return;
                    }
                  } else if (C instanceof f.default) {
                    var R = C.newlineIndex(0);
                    R > -1 && C.split(R + 1);
                  }
                  var X = C.children.head instanceof h.default ? null : C.children.head;
                  U.moveChildren(C, X), U.remove();
                }
                this.optimize();
              }
            }, {
              key: "enable",
              value: function() {
                var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
                this.domNode.setAttribute("contenteditable", T);
              }
            }, {
              key: "formatAt",
              value: function(T, L, D, z) {
                this.whitelist != null && !this.whitelist[D] || (v(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "formatAt", this).call(this, T, L, D, z), this.optimize());
              }
            }, {
              key: "insertAt",
              value: function(T, L, D) {
                if (!(D != null && this.whitelist != null && !this.whitelist[L])) {
                  if (T >= this.length())
                    if (D == null || d.default.query(L, d.default.Scope.BLOCK) == null) {
                      var z = d.default.create(this.statics.defaultChild);
                      this.appendChild(z), D == null && L.endsWith(`
`) && (L = L.slice(0, -1)), z.insertAt(0, L, D);
                    } else {
                      var U = d.default.create(L, D);
                      this.appendChild(U);
                    }
                  else
                    v(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "insertAt", this).call(this, T, L, D);
                  this.optimize();
                }
              }
            }, {
              key: "insertBefore",
              value: function(T, L) {
                if (T.statics.scope === d.default.Scope.INLINE_BLOT) {
                  var D = d.default.create(this.statics.defaultChild);
                  D.appendChild(T), T = D;
                }
                v(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "insertBefore", this).call(this, T, L);
              }
            }, {
              key: "leaf",
              value: function(T) {
                return this.path(T).pop() || [null, -1];
              }
            }, {
              key: "line",
              value: function(T) {
                return T === this.length() ? this.line(T - 1) : this.descendant(A, T);
              }
            }, {
              key: "lines",
              value: function() {
                var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE, D = function z(U, te, F) {
                  var j = [], C = F;
                  return U.children.forEachAt(te, F, function(q, R, X) {
                    A(q) ? j.push(q) : q instanceof d.default.Container && (j = j.concat(z(q, R, C))), C -= X;
                  }), j;
                };
                return D(this, T, L);
              }
            }, {
              key: "optimize",
              value: function() {
                var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                this.batch !== !0 && (v(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "optimize", this).call(this, T, L), T.length > 0 && this.emitter.emit(i.default.events.SCROLL_OPTIMIZE, T, L));
              }
            }, {
              key: "path",
              value: function(T) {
                return v(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "path", this).call(this, T).slice(1);
              }
            }, {
              key: "update",
              value: function(T) {
                if (this.batch !== !0) {
                  var L = i.default.sources.USER;
                  typeof T == "string" && (L = T), Array.isArray(T) || (T = this.observer.takeRecords()), T.length > 0 && this.emitter.emit(i.default.events.SCROLL_BEFORE_UPDATE, L, T), v(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "update", this).call(this, T.concat([])), T.length > 0 && this.emitter.emit(i.default.events.SCROLL_UPDATE, L, T);
                }
              }
            }]), x;
          }(d.default.Scroll);
          P.blotName = "scroll", P.className = "ql-editor", P.tagName = "DIV", P.defaultChild = "block", P.allowedChildren = [a.default, n.BlockEmbed, k.default], s.default = P;
        },
        /* 23 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.SHORTKEY = s.default = void 0;
          var b = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(I) {
            return typeof I;
          } : function(I) {
            return I && typeof Symbol == "function" && I.constructor === Symbol && I !== Symbol.prototype ? "symbol" : typeof I;
          }, l = function() {
            function I(Y, Q) {
              var ee = [], oe = !0, ve = !1, Oe = void 0;
              try {
                for (var Me = Y[Symbol.iterator](), De; !(oe = (De = Me.next()).done) && (ee.push(De.value), !(Q && ee.length === Q)); oe = !0)
                  ;
              } catch (qe) {
                ve = !0, Oe = qe;
              } finally {
                try {
                  !oe && Me.return && Me.return();
                } finally {
                  if (ve)
                    throw Oe;
                }
              }
              return ee;
            }
            return function(Y, Q) {
              if (Array.isArray(Y))
                return Y;
              if (Symbol.iterator in Object(Y))
                return I(Y, Q);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), v = function() {
            function I(Y, Q) {
              for (var ee = 0; ee < Q.length; ee++) {
                var oe = Q[ee];
                oe.enumerable = oe.enumerable || !1, oe.configurable = !0, "value" in oe && (oe.writable = !0), Object.defineProperty(Y, oe.key, oe);
              }
            }
            return function(Y, Q, ee) {
              return Q && I(Y.prototype, Q), ee && I(Y, ee), Y;
            };
          }(), y = o(21), d = O(y), g = o(11), i = O(g), n = o(3), a = O(n), p = o(2), h = O(p), m = o(20), f = O(m), u = o(0), k = O(u), c = o(5), w = O(c), M = o(10), $ = O(M), A = o(9), P = O(A);
          function O(I) {
            return I && I.__esModule ? I : { default: I };
          }
          function x(I, Y, Q) {
            return Y in I ? Object.defineProperty(I, Y, { value: Q, enumerable: !0, configurable: !0, writable: !0 }) : I[Y] = Q, I;
          }
          function E(I, Y) {
            if (!(I instanceof Y))
              throw new TypeError("Cannot call a class as a function");
          }
          function T(I, Y) {
            if (!I)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return Y && (typeof Y == "object" || typeof Y == "function") ? Y : I;
          }
          function L(I, Y) {
            if (typeof Y != "function" && Y !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof Y);
            I.prototype = Object.create(Y && Y.prototype, { constructor: { value: I, enumerable: !1, writable: !0, configurable: !0 } }), Y && (Object.setPrototypeOf ? Object.setPrototypeOf(I, Y) : I.__proto__ = Y);
          }
          var D = (0, $.default)("quill:keyboard"), z = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey", U = function(I) {
            L(Y, I), v(Y, null, [{
              key: "match",
              value: function(ee, oe) {
                return oe = H(oe), ["altKey", "ctrlKey", "metaKey", "shiftKey"].some(function(ve) {
                  return !!oe[ve] !== ee[ve] && oe[ve] !== null;
                }) ? !1 : oe.key === (ee.which || ee.keyCode);
              }
            }]);
            function Y(Q, ee) {
              E(this, Y);
              var oe = T(this, (Y.__proto__ || Object.getPrototypeOf(Y)).call(this, Q, ee));
              return oe.bindings = {}, Object.keys(oe.options.bindings).forEach(function(ve) {
                ve === "list autofill" && Q.scroll.whitelist != null && !Q.scroll.whitelist.list || oe.options.bindings[ve] && oe.addBinding(oe.options.bindings[ve]);
              }), oe.addBinding({ key: Y.keys.ENTER, shiftKey: null }, q), oe.addBinding({ key: Y.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function() {
              }), /Firefox/i.test(navigator.userAgent) ? (oe.addBinding({ key: Y.keys.BACKSPACE }, { collapsed: !0 }, F), oe.addBinding({ key: Y.keys.DELETE }, { collapsed: !0 }, j)) : (oe.addBinding({ key: Y.keys.BACKSPACE }, { collapsed: !0, prefix: /^.?$/ }, F), oe.addBinding({ key: Y.keys.DELETE }, { collapsed: !0, suffix: /^.?$/ }, j)), oe.addBinding({ key: Y.keys.BACKSPACE }, { collapsed: !1 }, C), oe.addBinding({ key: Y.keys.DELETE }, { collapsed: !1 }, C), oe.addBinding({ key: Y.keys.BACKSPACE, altKey: null, ctrlKey: null, metaKey: null, shiftKey: null }, { collapsed: !0, offset: 0 }, F), oe.listen(), oe;
            }
            return v(Y, [{
              key: "addBinding",
              value: function(ee) {
                var oe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, ve = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, Oe = H(ee);
                if (Oe == null || Oe.key == null)
                  return D.warn("Attempted to add invalid keyboard binding", Oe);
                typeof oe == "function" && (oe = { handler: oe }), typeof ve == "function" && (ve = { handler: ve }), Oe = (0, a.default)(Oe, oe, ve), this.bindings[Oe.key] = this.bindings[Oe.key] || [], this.bindings[Oe.key].push(Oe);
              }
            }, {
              key: "listen",
              value: function() {
                var ee = this;
                this.quill.root.addEventListener("keydown", function(oe) {
                  if (!oe.defaultPrevented) {
                    var ve = oe.which || oe.keyCode, Oe = (ee.bindings[ve] || []).filter(function(N) {
                      return Y.match(oe, N);
                    });
                    if (Oe.length !== 0) {
                      var Me = ee.quill.getSelection();
                      if (!(Me == null || !ee.quill.hasFocus())) {
                        var De = ee.quill.getLine(Me.index), qe = l(De, 2), ut = qe[0], tt = qe[1], ie = ee.quill.getLeaf(Me.index), le = l(ie, 2), de = le[0], ye = le[1], ue = Me.length === 0 ? [de, ye] : ee.quill.getLeaf(Me.index + Me.length), Pe = l(ue, 2), Ae = Pe[0], Ne = Pe[1], _t = de instanceof k.default.Text ? de.value().slice(0, ye) : "", dt = Ae instanceof k.default.Text ? Ae.value().slice(Ne) : "", He = {
                          collapsed: Me.length === 0,
                          empty: Me.length === 0 && ut.length() <= 1,
                          format: ee.quill.getFormat(Me),
                          offset: tt,
                          prefix: _t,
                          suffix: dt
                        }, Z = Oe.some(function(N) {
                          if (N.collapsed != null && N.collapsed !== He.collapsed || N.empty != null && N.empty !== He.empty || N.offset != null && N.offset !== He.offset)
                            return !1;
                          if (Array.isArray(N.format)) {
                            if (N.format.every(function(ce) {
                              return He.format[ce] == null;
                            }))
                              return !1;
                          } else if (b(N.format) === "object" && !Object.keys(N.format).every(function(ce) {
                            return N.format[ce] === !0 ? He.format[ce] != null : N.format[ce] === !1 ? He.format[ce] == null : (0, i.default)(N.format[ce], He.format[ce]);
                          }))
                            return !1;
                          return N.prefix != null && !N.prefix.test(He.prefix) || N.suffix != null && !N.suffix.test(He.suffix) ? !1 : N.handler.call(ee, Me, He) !== !0;
                        });
                        Z && oe.preventDefault();
                      }
                    }
                  }
                });
              }
            }]), Y;
          }(P.default);
          U.keys = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            ESCAPE: 27,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            DELETE: 46
          }, U.DEFAULTS = {
            bindings: {
              bold: X("bold"),
              italic: X("italic"),
              underline: X("underline"),
              indent: {
                // highlight tab or tab at beginning of list, indent or blockquote
                key: U.keys.TAB,
                format: ["blockquote", "indent", "list"],
                handler: function(Y, Q) {
                  if (Q.collapsed && Q.offset !== 0)
                    return !0;
                  this.quill.format("indent", "+1", w.default.sources.USER);
                }
              },
              outdent: {
                key: U.keys.TAB,
                shiftKey: !0,
                format: ["blockquote", "indent", "list"],
                // highlight tab or tab at beginning of list, indent or blockquote
                handler: function(Y, Q) {
                  if (Q.collapsed && Q.offset !== 0)
                    return !0;
                  this.quill.format("indent", "-1", w.default.sources.USER);
                }
              },
              "outdent backspace": {
                key: U.keys.BACKSPACE,
                collapsed: !0,
                shiftKey: null,
                metaKey: null,
                ctrlKey: null,
                altKey: null,
                format: ["indent", "list"],
                offset: 0,
                handler: function(Y, Q) {
                  Q.format.indent != null ? this.quill.format("indent", "-1", w.default.sources.USER) : Q.format.list != null && this.quill.format("list", !1, w.default.sources.USER);
                }
              },
              "indent code-block": R(!0),
              "outdent code-block": R(!1),
              "remove tab": {
                key: U.keys.TAB,
                shiftKey: !0,
                collapsed: !0,
                prefix: /\t$/,
                handler: function(Y) {
                  this.quill.deleteText(Y.index - 1, 1, w.default.sources.USER);
                }
              },
              tab: {
                key: U.keys.TAB,
                handler: function(Y) {
                  this.quill.history.cutoff();
                  var Q = new h.default().retain(Y.index).delete(Y.length).insert("	");
                  this.quill.updateContents(Q, w.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(Y.index + 1, w.default.sources.SILENT);
                }
              },
              "list empty enter": {
                key: U.keys.ENTER,
                collapsed: !0,
                format: ["list"],
                empty: !0,
                handler: function(Y, Q) {
                  this.quill.format("list", !1, w.default.sources.USER), Q.format.indent && this.quill.format("indent", !1, w.default.sources.USER);
                }
              },
              "checklist enter": {
                key: U.keys.ENTER,
                collapsed: !0,
                format: { list: "checked" },
                handler: function(Y) {
                  var Q = this.quill.getLine(Y.index), ee = l(Q, 2), oe = ee[0], ve = ee[1], Oe = (0, a.default)({}, oe.formats(), { list: "checked" }), Me = new h.default().retain(Y.index).insert(`
`, Oe).retain(oe.length() - ve - 1).retain(1, { list: "unchecked" });
                  this.quill.updateContents(Me, w.default.sources.USER), this.quill.setSelection(Y.index + 1, w.default.sources.SILENT), this.quill.scrollIntoView();
                }
              },
              "header enter": {
                key: U.keys.ENTER,
                collapsed: !0,
                format: ["header"],
                suffix: /^$/,
                handler: function(Y, Q) {
                  var ee = this.quill.getLine(Y.index), oe = l(ee, 2), ve = oe[0], Oe = oe[1], Me = new h.default().retain(Y.index).insert(`
`, Q.format).retain(ve.length() - Oe - 1).retain(1, { header: null });
                  this.quill.updateContents(Me, w.default.sources.USER), this.quill.setSelection(Y.index + 1, w.default.sources.SILENT), this.quill.scrollIntoView();
                }
              },
              "list autofill": {
                key: " ",
                collapsed: !0,
                format: { list: !1 },
                prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
                handler: function(Y, Q) {
                  var ee = Q.prefix.length, oe = this.quill.getLine(Y.index), ve = l(oe, 2), Oe = ve[0], Me = ve[1];
                  if (Me > ee)
                    return !0;
                  var De = void 0;
                  switch (Q.prefix.trim()) {
                    case "[]":
                    case "[ ]":
                      De = "unchecked";
                      break;
                    case "[x]":
                      De = "checked";
                      break;
                    case "-":
                    case "*":
                      De = "bullet";
                      break;
                    default:
                      De = "ordered";
                  }
                  this.quill.insertText(Y.index, " ", w.default.sources.USER), this.quill.history.cutoff();
                  var qe = new h.default().retain(Y.index - Me).delete(ee + 1).retain(Oe.length() - 2 - Me).retain(1, { list: De });
                  this.quill.updateContents(qe, w.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(Y.index - ee, w.default.sources.SILENT);
                }
              },
              "code exit": {
                key: U.keys.ENTER,
                collapsed: !0,
                format: ["code-block"],
                prefix: /\n\n$/,
                suffix: /^\s+$/,
                handler: function(Y) {
                  var Q = this.quill.getLine(Y.index), ee = l(Q, 2), oe = ee[0], ve = ee[1], Oe = new h.default().retain(Y.index + oe.length() - ve - 2).retain(1, { "code-block": null }).delete(1);
                  this.quill.updateContents(Oe, w.default.sources.USER);
                }
              },
              "embed left": te(U.keys.LEFT, !1),
              "embed left shift": te(U.keys.LEFT, !0),
              "embed right": te(U.keys.RIGHT, !1),
              "embed right shift": te(U.keys.RIGHT, !0)
            }
          };
          function te(I, Y) {
            var Q, ee = I === U.keys.LEFT ? "prefix" : "suffix";
            return Q = {
              key: I,
              shiftKey: Y,
              altKey: null
            }, x(Q, ee, /^$/), x(Q, "handler", function(ve) {
              var Oe = ve.index;
              I === U.keys.RIGHT && (Oe += ve.length + 1);
              var Me = this.quill.getLeaf(Oe), De = l(Me, 1), qe = De[0];
              return qe instanceof k.default.Embed ? (I === U.keys.LEFT ? Y ? this.quill.setSelection(ve.index - 1, ve.length + 1, w.default.sources.USER) : this.quill.setSelection(ve.index - 1, w.default.sources.USER) : Y ? this.quill.setSelection(ve.index, ve.length + 1, w.default.sources.USER) : this.quill.setSelection(ve.index + ve.length + 1, w.default.sources.USER), !1) : !0;
            }), Q;
          }
          function F(I, Y) {
            if (!(I.index === 0 || this.quill.getLength() <= 1)) {
              var Q = this.quill.getLine(I.index), ee = l(Q, 1), oe = ee[0], ve = {};
              if (Y.offset === 0) {
                var Oe = this.quill.getLine(I.index - 1), Me = l(Oe, 1), De = Me[0];
                if (De != null && De.length() > 1) {
                  var qe = oe.formats(), ut = this.quill.getFormat(I.index - 1, 1);
                  ve = f.default.attributes.diff(qe, ut) || {};
                }
              }
              var tt = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(Y.prefix) ? 2 : 1;
              this.quill.deleteText(I.index - tt, tt, w.default.sources.USER), Object.keys(ve).length > 0 && this.quill.formatLine(I.index - tt, tt, ve, w.default.sources.USER), this.quill.focus();
            }
          }
          function j(I, Y) {
            var Q = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(Y.suffix) ? 2 : 1;
            if (!(I.index >= this.quill.getLength() - Q)) {
              var ee = {}, oe = 0, ve = this.quill.getLine(I.index), Oe = l(ve, 1), Me = Oe[0];
              if (Y.offset >= Me.length() - 1) {
                var De = this.quill.getLine(I.index + 1), qe = l(De, 1), ut = qe[0];
                if (ut) {
                  var tt = Me.formats(), ie = this.quill.getFormat(I.index, 1);
                  ee = f.default.attributes.diff(tt, ie) || {}, oe = ut.length();
                }
              }
              this.quill.deleteText(I.index, Q, w.default.sources.USER), Object.keys(ee).length > 0 && this.quill.formatLine(I.index + oe - 1, Q, ee, w.default.sources.USER);
            }
          }
          function C(I) {
            var Y = this.quill.getLines(I), Q = {};
            if (Y.length > 1) {
              var ee = Y[0].formats(), oe = Y[Y.length - 1].formats();
              Q = f.default.attributes.diff(oe, ee) || {};
            }
            this.quill.deleteText(I, w.default.sources.USER), Object.keys(Q).length > 0 && this.quill.formatLine(I.index, 1, Q, w.default.sources.USER), this.quill.setSelection(I.index, w.default.sources.SILENT), this.quill.focus();
          }
          function q(I, Y) {
            var Q = this;
            I.length > 0 && this.quill.scroll.deleteAt(I.index, I.length);
            var ee = Object.keys(Y.format).reduce(function(oe, ve) {
              return k.default.query(ve, k.default.Scope.BLOCK) && !Array.isArray(Y.format[ve]) && (oe[ve] = Y.format[ve]), oe;
            }, {});
            this.quill.insertText(I.index, `
`, ee, w.default.sources.USER), this.quill.setSelection(I.index + 1, w.default.sources.SILENT), this.quill.focus(), Object.keys(Y.format).forEach(function(oe) {
              ee[oe] == null && (Array.isArray(Y.format[oe]) || oe !== "link" && Q.quill.format(oe, Y.format[oe], w.default.sources.USER));
            });
          }
          function R(I) {
            return {
              key: U.keys.TAB,
              shiftKey: !I,
              format: { "code-block": !0 },
              handler: function(Q) {
                var ee = k.default.query("code-block"), oe = Q.index, ve = Q.length, Oe = this.quill.scroll.descendant(ee, oe), Me = l(Oe, 2), De = Me[0], qe = Me[1];
                if (De != null) {
                  var ut = this.quill.getIndex(De), tt = De.newlineIndex(qe, !0) + 1, ie = De.newlineIndex(ut + qe + ve), le = De.domNode.textContent.slice(tt, ie).split(`
`);
                  qe = 0, le.forEach(function(de, ye) {
                    I ? (De.insertAt(tt + qe, ee.TAB), qe += ee.TAB.length, ye === 0 ? oe += ee.TAB.length : ve += ee.TAB.length) : de.startsWith(ee.TAB) && (De.deleteAt(tt + qe, ee.TAB.length), qe -= ee.TAB.length, ye === 0 ? oe -= ee.TAB.length : ve -= ee.TAB.length), qe += de.length + 1;
                  }), this.quill.update(w.default.sources.USER), this.quill.setSelection(oe, ve, w.default.sources.SILENT);
                }
              }
            };
          }
          function X(I) {
            return {
              key: I[0].toUpperCase(),
              shortKey: !0,
              handler: function(Q, ee) {
                this.quill.format(I, !ee.format[I], w.default.sources.USER);
              }
            };
          }
          function H(I) {
            if (typeof I == "string" || typeof I == "number")
              return H({ key: I });
            if ((typeof I > "u" ? "undefined" : b(I)) === "object" && (I = (0, d.default)(I, !1)), typeof I.key == "string")
              if (U.keys[I.key.toUpperCase()] != null)
                I.key = U.keys[I.key.toUpperCase()];
              else if (I.key.length === 1)
                I.key = I.key.toUpperCase().charCodeAt(0);
              else
                return null;
            return I.shortKey && (I[z] = I.shortKey, delete I.shortKey), I;
          }
          s.default = U, s.SHORTKEY = z;
        },
        /* 24 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var b = function() {
            function f(u, k) {
              var c = [], w = !0, M = !1, $ = void 0;
              try {
                for (var A = u[Symbol.iterator](), P; !(w = (P = A.next()).done) && (c.push(P.value), !(k && c.length === k)); w = !0)
                  ;
              } catch (O) {
                M = !0, $ = O;
              } finally {
                try {
                  !w && A.return && A.return();
                } finally {
                  if (M)
                    throw $;
                }
              }
              return c;
            }
            return function(u, k) {
              if (Array.isArray(u))
                return u;
              if (Symbol.iterator in Object(u))
                return f(u, k);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), l = function f(u, k, c) {
            u === null && (u = Function.prototype);
            var w = Object.getOwnPropertyDescriptor(u, k);
            if (w === void 0) {
              var M = Object.getPrototypeOf(u);
              return M === null ? void 0 : f(M, k, c);
            } else {
              if ("value" in w)
                return w.value;
              var $ = w.get;
              return $ === void 0 ? void 0 : $.call(c);
            }
          }, v = function() {
            function f(u, k) {
              for (var c = 0; c < k.length; c++) {
                var w = k[c];
                w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(u, w.key, w);
              }
            }
            return function(u, k, c) {
              return k && f(u.prototype, k), c && f(u, c), u;
            };
          }(), y = o(0), d = n(y), g = o(7), i = n(g);
          function n(f) {
            return f && f.__esModule ? f : { default: f };
          }
          function a(f, u) {
            if (!(f instanceof u))
              throw new TypeError("Cannot call a class as a function");
          }
          function p(f, u) {
            if (!f)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return u && (typeof u == "object" || typeof u == "function") ? u : f;
          }
          function h(f, u) {
            if (typeof u != "function" && u !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof u);
            f.prototype = Object.create(u && u.prototype, { constructor: { value: f, enumerable: !1, writable: !0, configurable: !0 } }), u && (Object.setPrototypeOf ? Object.setPrototypeOf(f, u) : f.__proto__ = u);
          }
          var m = function(f) {
            h(u, f), v(u, null, [{
              key: "value",
              value: function() {
              }
            }]);
            function u(k, c) {
              a(this, u);
              var w = p(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this, k));
              return w.selection = c, w.textNode = document.createTextNode(u.CONTENTS), w.domNode.appendChild(w.textNode), w._length = 0, w;
            }
            return v(u, [{
              key: "detach",
              value: function() {
                this.parent != null && this.parent.removeChild(this);
              }
            }, {
              key: "format",
              value: function(c, w) {
                if (this._length !== 0)
                  return l(u.prototype.__proto__ || Object.getPrototypeOf(u.prototype), "format", this).call(this, c, w);
                for (var M = this, $ = 0; M != null && M.statics.scope !== d.default.Scope.BLOCK_BLOT; )
                  $ += M.offset(M.parent), M = M.parent;
                M != null && (this._length = u.CONTENTS.length, M.optimize(), M.formatAt($, u.CONTENTS.length, c, w), this._length = 0);
              }
            }, {
              key: "index",
              value: function(c, w) {
                return c === this.textNode ? 0 : l(u.prototype.__proto__ || Object.getPrototypeOf(u.prototype), "index", this).call(this, c, w);
              }
            }, {
              key: "length",
              value: function() {
                return this._length;
              }
            }, {
              key: "position",
              value: function() {
                return [this.textNode, this.textNode.data.length];
              }
            }, {
              key: "remove",
              value: function() {
                l(u.prototype.__proto__ || Object.getPrototypeOf(u.prototype), "remove", this).call(this), this.parent = null;
              }
            }, {
              key: "restore",
              value: function() {
                if (!(this.selection.composing || this.parent == null)) {
                  var c = this.textNode, w = this.selection.getNativeRange(), M = void 0, $ = void 0, A = void 0;
                  if (w != null && w.start.node === c && w.end.node === c) {
                    var P = [c, w.start.offset, w.end.offset];
                    M = P[0], $ = P[1], A = P[2];
                  }
                  for (; this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode; )
                    this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
                  if (this.textNode.data !== u.CONTENTS) {
                    var O = this.textNode.data.split(u.CONTENTS).join("");
                    this.next instanceof i.default ? (M = this.next.domNode, this.next.insertAt(0, O), this.textNode.data = u.CONTENTS) : (this.textNode.data = O, this.parent.insertBefore(d.default.create(this.textNode), this), this.textNode = document.createTextNode(u.CONTENTS), this.domNode.appendChild(this.textNode));
                  }
                  if (this.remove(), $ != null) {
                    var x = [$, A].map(function(T) {
                      return Math.max(0, Math.min(M.data.length, T - 1));
                    }), E = b(x, 2);
                    return $ = E[0], A = E[1], {
                      startNode: M,
                      startOffset: $,
                      endNode: M,
                      endOffset: A
                    };
                  }
                }
              }
            }, {
              key: "update",
              value: function(c, w) {
                var M = this;
                if (c.some(function(A) {
                  return A.type === "characterData" && A.target === M.textNode;
                })) {
                  var $ = this.restore();
                  $ && (w.range = $);
                }
              }
            }, {
              key: "value",
              value: function() {
                return "";
              }
            }]), u;
          }(d.default.Embed);
          m.blotName = "cursor", m.className = "ql-cursor", m.tagName = "span", m.CONTENTS = "\uFEFF", s.default = m;
        },
        /* 25 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var b = o(0), l = d(b), v = o(4), y = d(v);
          function d(p) {
            return p && p.__esModule ? p : { default: p };
          }
          function g(p, h) {
            if (!(p instanceof h))
              throw new TypeError("Cannot call a class as a function");
          }
          function i(p, h) {
            if (!p)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return h && (typeof h == "object" || typeof h == "function") ? h : p;
          }
          function n(p, h) {
            if (typeof h != "function" && h !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof h);
            p.prototype = Object.create(h && h.prototype, { constructor: { value: p, enumerable: !1, writable: !0, configurable: !0 } }), h && (Object.setPrototypeOf ? Object.setPrototypeOf(p, h) : p.__proto__ = h);
          }
          var a = function(p) {
            n(h, p);
            function h() {
              return g(this, h), i(this, (h.__proto__ || Object.getPrototypeOf(h)).apply(this, arguments));
            }
            return h;
          }(l.default.Container);
          a.allowedChildren = [y.default, v.BlockEmbed, a], s.default = a;
        },
        /* 26 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.ColorStyle = s.ColorClass = s.ColorAttributor = void 0;
          var b = function() {
            function m(f, u) {
              for (var k = 0; k < u.length; k++) {
                var c = u[k];
                c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(f, c.key, c);
              }
            }
            return function(f, u, k) {
              return u && m(f.prototype, u), k && m(f, k), f;
            };
          }(), l = function m(f, u, k) {
            f === null && (f = Function.prototype);
            var c = Object.getOwnPropertyDescriptor(f, u);
            if (c === void 0) {
              var w = Object.getPrototypeOf(f);
              return w === null ? void 0 : m(w, u, k);
            } else {
              if ("value" in c)
                return c.value;
              var M = c.get;
              return M === void 0 ? void 0 : M.call(k);
            }
          }, v = o(0), y = d(v);
          function d(m) {
            return m && m.__esModule ? m : { default: m };
          }
          function g(m, f) {
            if (!(m instanceof f))
              throw new TypeError("Cannot call a class as a function");
          }
          function i(m, f) {
            if (!m)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return f && (typeof f == "object" || typeof f == "function") ? f : m;
          }
          function n(m, f) {
            if (typeof f != "function" && f !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof f);
            m.prototype = Object.create(f && f.prototype, { constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 } }), f && (Object.setPrototypeOf ? Object.setPrototypeOf(m, f) : m.__proto__ = f);
          }
          var a = function(m) {
            n(f, m);
            function f() {
              return g(this, f), i(this, (f.__proto__ || Object.getPrototypeOf(f)).apply(this, arguments));
            }
            return b(f, [{
              key: "value",
              value: function(k) {
                var c = l(f.prototype.__proto__ || Object.getPrototypeOf(f.prototype), "value", this).call(this, k);
                return c.startsWith("rgb(") ? (c = c.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), "#" + c.split(",").map(function(w) {
                  return ("00" + parseInt(w).toString(16)).slice(-2);
                }).join("")) : c;
              }
            }]), f;
          }(y.default.Attributor.Style), p = new y.default.Attributor.Class("color", "ql-color", {
            scope: y.default.Scope.INLINE
          }), h = new a("color", "color", {
            scope: y.default.Scope.INLINE
          });
          s.ColorAttributor = a, s.ColorClass = p, s.ColorStyle = h;
        },
        /* 27 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.sanitize = s.default = void 0;
          var b = function() {
            function h(m, f) {
              for (var u = 0; u < f.length; u++) {
                var k = f[u];
                k.enumerable = k.enumerable || !1, k.configurable = !0, "value" in k && (k.writable = !0), Object.defineProperty(m, k.key, k);
              }
            }
            return function(m, f, u) {
              return f && h(m.prototype, f), u && h(m, u), m;
            };
          }(), l = function h(m, f, u) {
            m === null && (m = Function.prototype);
            var k = Object.getOwnPropertyDescriptor(m, f);
            if (k === void 0) {
              var c = Object.getPrototypeOf(m);
              return c === null ? void 0 : h(c, f, u);
            } else {
              if ("value" in k)
                return k.value;
              var w = k.get;
              return w === void 0 ? void 0 : w.call(u);
            }
          }, v = o(6), y = d(v);
          function d(h) {
            return h && h.__esModule ? h : { default: h };
          }
          function g(h, m) {
            if (!(h instanceof m))
              throw new TypeError("Cannot call a class as a function");
          }
          function i(h, m) {
            if (!h)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return m && (typeof m == "object" || typeof m == "function") ? m : h;
          }
          function n(h, m) {
            if (typeof m != "function" && m !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof m);
            h.prototype = Object.create(m && m.prototype, { constructor: { value: h, enumerable: !1, writable: !0, configurable: !0 } }), m && (Object.setPrototypeOf ? Object.setPrototypeOf(h, m) : h.__proto__ = m);
          }
          var a = function(h) {
            n(m, h);
            function m() {
              return g(this, m), i(this, (m.__proto__ || Object.getPrototypeOf(m)).apply(this, arguments));
            }
            return b(m, [{
              key: "format",
              value: function(u, k) {
                if (u !== this.statics.blotName || !k)
                  return l(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "format", this).call(this, u, k);
                k = this.constructor.sanitize(k), this.domNode.setAttribute("href", k);
              }
            }], [{
              key: "create",
              value: function(u) {
                var k = l(m.__proto__ || Object.getPrototypeOf(m), "create", this).call(this, u);
                return u = this.sanitize(u), k.setAttribute("href", u), k.setAttribute("rel", "noopener noreferrer"), k.setAttribute("target", "_blank"), k;
              }
            }, {
              key: "formats",
              value: function(u) {
                return u.getAttribute("href");
              }
            }, {
              key: "sanitize",
              value: function(u) {
                return p(u, this.PROTOCOL_WHITELIST) ? u : this.SANITIZED_URL;
              }
            }]), m;
          }(y.default);
          a.blotName = "link", a.tagName = "A", a.SANITIZED_URL = "about:blank", a.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"];
          function p(h, m) {
            var f = document.createElement("a");
            f.href = h;
            var u = f.href.slice(0, f.href.indexOf(":"));
            return m.indexOf(u) > -1;
          }
          s.default = a, s.sanitize = p;
        },
        /* 28 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var b = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(m) {
            return typeof m;
          } : function(m) {
            return m && typeof Symbol == "function" && m.constructor === Symbol && m !== Symbol.prototype ? "symbol" : typeof m;
          }, l = function() {
            function m(f, u) {
              for (var k = 0; k < u.length; k++) {
                var c = u[k];
                c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(f, c.key, c);
              }
            }
            return function(f, u, k) {
              return u && m(f.prototype, u), k && m(f, k), f;
            };
          }(), v = o(23), y = i(v), d = o(107), g = i(d);
          function i(m) {
            return m && m.__esModule ? m : { default: m };
          }
          function n(m, f) {
            if (!(m instanceof f))
              throw new TypeError("Cannot call a class as a function");
          }
          var a = 0;
          function p(m, f) {
            m.setAttribute(f, m.getAttribute(f) !== "true");
          }
          var h = function() {
            function m(f) {
              var u = this;
              n(this, m), this.select = f, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", function() {
                u.togglePicker();
              }), this.label.addEventListener("keydown", function(k) {
                switch (k.keyCode) {
                  case y.default.keys.ENTER:
                    u.togglePicker();
                    break;
                  case y.default.keys.ESCAPE:
                    u.escape(), k.preventDefault();
                    break;
                }
              }), this.select.addEventListener("change", this.update.bind(this));
            }
            return l(m, [{
              key: "togglePicker",
              value: function() {
                this.container.classList.toggle("ql-expanded"), p(this.label, "aria-expanded"), p(this.options, "aria-hidden");
              }
            }, {
              key: "buildItem",
              value: function(u) {
                var k = this, c = document.createElement("span");
                return c.tabIndex = "0", c.setAttribute("role", "button"), c.classList.add("ql-picker-item"), u.hasAttribute("value") && c.setAttribute("data-value", u.getAttribute("value")), u.textContent && c.setAttribute("data-label", u.textContent), c.addEventListener("click", function() {
                  k.selectItem(c, !0);
                }), c.addEventListener("keydown", function(w) {
                  switch (w.keyCode) {
                    case y.default.keys.ENTER:
                      k.selectItem(c, !0), w.preventDefault();
                      break;
                    case y.default.keys.ESCAPE:
                      k.escape(), w.preventDefault();
                      break;
                  }
                }), c;
              }
            }, {
              key: "buildLabel",
              value: function() {
                var u = document.createElement("span");
                return u.classList.add("ql-picker-label"), u.innerHTML = g.default, u.tabIndex = "0", u.setAttribute("role", "button"), u.setAttribute("aria-expanded", "false"), this.container.appendChild(u), u;
              }
            }, {
              key: "buildOptions",
              value: function() {
                var u = this, k = document.createElement("span");
                k.classList.add("ql-picker-options"), k.setAttribute("aria-hidden", "true"), k.tabIndex = "-1", k.id = "ql-picker-options-" + a, a += 1, this.label.setAttribute("aria-controls", k.id), this.options = k, [].slice.call(this.select.options).forEach(function(c) {
                  var w = u.buildItem(c);
                  k.appendChild(w), c.selected === !0 && u.selectItem(w);
                }), this.container.appendChild(k);
              }
            }, {
              key: "buildPicker",
              value: function() {
                var u = this;
                [].slice.call(this.select.attributes).forEach(function(k) {
                  u.container.setAttribute(k.name, k.value);
                }), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions();
              }
            }, {
              key: "escape",
              value: function() {
                var u = this;
                this.close(), setTimeout(function() {
                  return u.label.focus();
                }, 1);
              }
            }, {
              key: "close",
              value: function() {
                this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true");
              }
            }, {
              key: "selectItem",
              value: function(u) {
                var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, c = this.container.querySelector(".ql-selected");
                if (u !== c && (c != null && c.classList.remove("ql-selected"), u != null && (u.classList.add("ql-selected"), this.select.selectedIndex = [].indexOf.call(u.parentNode.children, u), u.hasAttribute("data-value") ? this.label.setAttribute("data-value", u.getAttribute("data-value")) : this.label.removeAttribute("data-value"), u.hasAttribute("data-label") ? this.label.setAttribute("data-label", u.getAttribute("data-label")) : this.label.removeAttribute("data-label"), k))) {
                  if (typeof Event == "function")
                    this.select.dispatchEvent(new Event("change"));
                  else if ((typeof Event > "u" ? "undefined" : b(Event)) === "object") {
                    var w = document.createEvent("Event");
                    w.initEvent("change", !0, !0), this.select.dispatchEvent(w);
                  }
                  this.close();
                }
              }
            }, {
              key: "update",
              value: function() {
                var u = void 0;
                if (this.select.selectedIndex > -1) {
                  var k = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
                  u = this.select.options[this.select.selectedIndex], this.selectItem(k);
                } else
                  this.selectItem(null);
                var c = u != null && u !== this.select.querySelector("option[selected]");
                this.label.classList.toggle("ql-active", c);
              }
            }]), m;
          }();
          s.default = h;
        },
        /* 29 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var b = o(0), l = D(b), v = o(5), y = D(v), d = o(4), g = D(d), i = o(16), n = D(i), a = o(25), p = D(a), h = o(24), m = D(h), f = o(35), u = D(f), k = o(6), c = D(k), w = o(22), M = D(w), $ = o(7), A = D($), P = o(55), O = D(P), x = o(42), E = D(x), T = o(23), L = D(T);
          function D(z) {
            return z && z.__esModule ? z : { default: z };
          }
          y.default.register({
            "blots/block": g.default,
            "blots/block/embed": d.BlockEmbed,
            "blots/break": n.default,
            "blots/container": p.default,
            "blots/cursor": m.default,
            "blots/embed": u.default,
            "blots/inline": c.default,
            "blots/scroll": M.default,
            "blots/text": A.default,
            "modules/clipboard": O.default,
            "modules/history": E.default,
            "modules/keyboard": L.default
          }), l.default.register(g.default, n.default, m.default, c.default, M.default, A.default), s.default = y.default;
        },
        /* 30 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", { value: !0 });
          var b = o(1), l = (
            /** @class */
            function() {
              function v(y) {
                this.domNode = y, this.domNode[b.DATA_KEY] = { blot: this };
              }
              return Object.defineProperty(v.prototype, "statics", {
                // Hack for accessing inherited static methods
                get: function() {
                  return this.constructor;
                },
                enumerable: !0,
                configurable: !0
              }), v.create = function(y) {
                if (this.tagName == null)
                  throw new b.ParchmentError("Blot definition missing tagName");
                var d;
                return Array.isArray(this.tagName) ? (typeof y == "string" && (y = y.toUpperCase(), parseInt(y).toString() === y && (y = parseInt(y))), typeof y == "number" ? d = document.createElement(this.tagName[y - 1]) : this.tagName.indexOf(y) > -1 ? d = document.createElement(y) : d = document.createElement(this.tagName[0])) : d = document.createElement(this.tagName), this.className && d.classList.add(this.className), d;
              }, v.prototype.attach = function() {
                this.parent != null && (this.scroll = this.parent.scroll);
              }, v.prototype.clone = function() {
                var y = this.domNode.cloneNode(!1);
                return b.create(y);
              }, v.prototype.detach = function() {
                this.parent != null && this.parent.removeChild(this), delete this.domNode[b.DATA_KEY];
              }, v.prototype.deleteAt = function(y, d) {
                var g = this.isolate(y, d);
                g.remove();
              }, v.prototype.formatAt = function(y, d, g, i) {
                var n = this.isolate(y, d);
                if (b.query(g, b.Scope.BLOT) != null && i)
                  n.wrap(g, i);
                else if (b.query(g, b.Scope.ATTRIBUTE) != null) {
                  var a = b.create(this.statics.scope);
                  n.wrap(a), a.format(g, i);
                }
              }, v.prototype.insertAt = function(y, d, g) {
                var i = g == null ? b.create("text", d) : b.create(d, g), n = this.split(y);
                this.parent.insertBefore(i, n);
              }, v.prototype.insertInto = function(y, d) {
                d === void 0 && (d = null), this.parent != null && this.parent.children.remove(this);
                var g = null;
                y.children.insertBefore(this, d), d != null && (g = d.domNode), (this.domNode.parentNode != y.domNode || this.domNode.nextSibling != g) && y.domNode.insertBefore(this.domNode, g), this.parent = y, this.attach();
              }, v.prototype.isolate = function(y, d) {
                var g = this.split(y);
                return g.split(d), g;
              }, v.prototype.length = function() {
                return 1;
              }, v.prototype.offset = function(y) {
                return y === void 0 && (y = this.parent), this.parent == null || this == y ? 0 : this.parent.children.offset(this) + this.parent.offset(y);
              }, v.prototype.optimize = function(y) {
                this.domNode[b.DATA_KEY] != null && delete this.domNode[b.DATA_KEY].mutations;
              }, v.prototype.remove = function() {
                this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
              }, v.prototype.replace = function(y) {
                y.parent != null && (y.parent.insertBefore(this, y.next), y.remove());
              }, v.prototype.replaceWith = function(y, d) {
                var g = typeof y == "string" ? b.create(y, d) : y;
                return g.replace(this), g;
              }, v.prototype.split = function(y, d) {
                return y === 0 ? this : this.next;
              }, v.prototype.update = function(y, d) {
              }, v.prototype.wrap = function(y, d) {
                var g = typeof y == "string" ? b.create(y, d) : y;
                return this.parent != null && this.parent.insertBefore(g, this.next), g.appendChild(this), g;
              }, v.blotName = "abstract", v;
            }()
          );
          s.default = l;
        },
        /* 31 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", { value: !0 });
          var b = o(12), l = o(32), v = o(33), y = o(1), d = (
            /** @class */
            function() {
              function g(i) {
                this.attributes = {}, this.domNode = i, this.build();
              }
              return g.prototype.attribute = function(i, n) {
                n ? i.add(this.domNode, n) && (i.value(this.domNode) != null ? this.attributes[i.attrName] = i : delete this.attributes[i.attrName]) : (i.remove(this.domNode), delete this.attributes[i.attrName]);
              }, g.prototype.build = function() {
                var i = this;
                this.attributes = {};
                var n = b.default.keys(this.domNode), a = l.default.keys(this.domNode), p = v.default.keys(this.domNode);
                n.concat(a).concat(p).forEach(function(h) {
                  var m = y.query(h, y.Scope.ATTRIBUTE);
                  m instanceof b.default && (i.attributes[m.attrName] = m);
                });
              }, g.prototype.copy = function(i) {
                var n = this;
                Object.keys(this.attributes).forEach(function(a) {
                  var p = n.attributes[a].value(n.domNode);
                  i.format(a, p);
                });
              }, g.prototype.move = function(i) {
                var n = this;
                this.copy(i), Object.keys(this.attributes).forEach(function(a) {
                  n.attributes[a].remove(n.domNode);
                }), this.attributes = {};
              }, g.prototype.values = function() {
                var i = this;
                return Object.keys(this.attributes).reduce(function(n, a) {
                  return n[a] = i.attributes[a].value(i.domNode), n;
                }, {});
              }, g;
            }()
          );
          s.default = d;
        },
        /* 32 */
        /***/
        function(t, s, o) {
          var b = this && this.__extends || function() {
            var d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(g, i) {
              g.__proto__ = i;
            } || function(g, i) {
              for (var n in i)
                i.hasOwnProperty(n) && (g[n] = i[n]);
            };
            return function(g, i) {
              d(g, i);
              function n() {
                this.constructor = g;
              }
              g.prototype = i === null ? Object.create(i) : (n.prototype = i.prototype, new n());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var l = o(12);
          function v(d, g) {
            var i = d.getAttribute("class") || "";
            return i.split(/\s+/).filter(function(n) {
              return n.indexOf(g + "-") === 0;
            });
          }
          var y = (
            /** @class */
            function(d) {
              b(g, d);
              function g() {
                return d !== null && d.apply(this, arguments) || this;
              }
              return g.keys = function(i) {
                return (i.getAttribute("class") || "").split(/\s+/).map(function(n) {
                  return n.split("-").slice(0, -1).join("-");
                });
              }, g.prototype.add = function(i, n) {
                return this.canAdd(i, n) ? (this.remove(i), i.classList.add(this.keyName + "-" + n), !0) : !1;
              }, g.prototype.remove = function(i) {
                var n = v(i, this.keyName);
                n.forEach(function(a) {
                  i.classList.remove(a);
                }), i.classList.length === 0 && i.removeAttribute("class");
              }, g.prototype.value = function(i) {
                var n = v(i, this.keyName)[0] || "", a = n.slice(this.keyName.length + 1);
                return this.canAdd(i, a) ? a : "";
              }, g;
            }(l.default)
          );
          s.default = y;
        },
        /* 33 */
        /***/
        function(t, s, o) {
          var b = this && this.__extends || function() {
            var d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(g, i) {
              g.__proto__ = i;
            } || function(g, i) {
              for (var n in i)
                i.hasOwnProperty(n) && (g[n] = i[n]);
            };
            return function(g, i) {
              d(g, i);
              function n() {
                this.constructor = g;
              }
              g.prototype = i === null ? Object.create(i) : (n.prototype = i.prototype, new n());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var l = o(12);
          function v(d) {
            var g = d.split("-"), i = g.slice(1).map(function(n) {
              return n[0].toUpperCase() + n.slice(1);
            }).join("");
            return g[0] + i;
          }
          var y = (
            /** @class */
            function(d) {
              b(g, d);
              function g() {
                return d !== null && d.apply(this, arguments) || this;
              }
              return g.keys = function(i) {
                return (i.getAttribute("style") || "").split(";").map(function(n) {
                  var a = n.split(":");
                  return a[0].trim();
                });
              }, g.prototype.add = function(i, n) {
                return this.canAdd(i, n) ? (i.style[v(this.keyName)] = n, !0) : !1;
              }, g.prototype.remove = function(i) {
                i.style[v(this.keyName)] = "", i.getAttribute("style") || i.removeAttribute("style");
              }, g.prototype.value = function(i) {
                var n = i.style[v(this.keyName)];
                return this.canAdd(i, n) ? n : "";
              }, g;
            }(l.default)
          );
          s.default = y;
        },
        /* 34 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var b = function() {
            function y(d, g) {
              for (var i = 0; i < g.length; i++) {
                var n = g[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(d, n.key, n);
              }
            }
            return function(d, g, i) {
              return g && y(d.prototype, g), i && y(d, i), d;
            };
          }();
          function l(y, d) {
            if (!(y instanceof d))
              throw new TypeError("Cannot call a class as a function");
          }
          var v = function() {
            function y(d, g) {
              l(this, y), this.quill = d, this.options = g, this.modules = {};
            }
            return b(y, [{
              key: "init",
              value: function() {
                var g = this;
                Object.keys(this.options.modules).forEach(function(i) {
                  g.modules[i] == null && g.addModule(i);
                });
              }
            }, {
              key: "addModule",
              value: function(g) {
                var i = this.quill.constructor.import("modules/" + g);
                return this.modules[g] = new i(this.quill, this.options.modules[g] || {}), this.modules[g];
              }
            }]), y;
          }();
          v.DEFAULTS = {
            modules: {}
          }, v.themes = {
            default: v
          }, s.default = v;
        },
        /* 35 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var b = function() {
            function f(u, k) {
              for (var c = 0; c < k.length; c++) {
                var w = k[c];
                w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(u, w.key, w);
              }
            }
            return function(u, k, c) {
              return k && f(u.prototype, k), c && f(u, c), u;
            };
          }(), l = function f(u, k, c) {
            u === null && (u = Function.prototype);
            var w = Object.getOwnPropertyDescriptor(u, k);
            if (w === void 0) {
              var M = Object.getPrototypeOf(u);
              return M === null ? void 0 : f(M, k, c);
            } else {
              if ("value" in w)
                return w.value;
              var $ = w.get;
              return $ === void 0 ? void 0 : $.call(c);
            }
          }, v = o(0), y = i(v), d = o(7), g = i(d);
          function i(f) {
            return f && f.__esModule ? f : { default: f };
          }
          function n(f, u) {
            if (!(f instanceof u))
              throw new TypeError("Cannot call a class as a function");
          }
          function a(f, u) {
            if (!f)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return u && (typeof u == "object" || typeof u == "function") ? u : f;
          }
          function p(f, u) {
            if (typeof u != "function" && u !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof u);
            f.prototype = Object.create(u && u.prototype, { constructor: { value: f, enumerable: !1, writable: !0, configurable: !0 } }), u && (Object.setPrototypeOf ? Object.setPrototypeOf(f, u) : f.__proto__ = u);
          }
          var h = "\uFEFF", m = function(f) {
            p(u, f);
            function u(k) {
              n(this, u);
              var c = a(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this, k));
              return c.contentNode = document.createElement("span"), c.contentNode.setAttribute("contenteditable", !1), [].slice.call(c.domNode.childNodes).forEach(function(w) {
                c.contentNode.appendChild(w);
              }), c.leftGuard = document.createTextNode(h), c.rightGuard = document.createTextNode(h), c.domNode.appendChild(c.leftGuard), c.domNode.appendChild(c.contentNode), c.domNode.appendChild(c.rightGuard), c;
            }
            return b(u, [{
              key: "index",
              value: function(c, w) {
                return c === this.leftGuard ? 0 : c === this.rightGuard ? 1 : l(u.prototype.__proto__ || Object.getPrototypeOf(u.prototype), "index", this).call(this, c, w);
              }
            }, {
              key: "restore",
              value: function(c) {
                var w = void 0, M = void 0, $ = c.data.split(h).join("");
                if (c === this.leftGuard)
                  if (this.prev instanceof g.default) {
                    var A = this.prev.length();
                    this.prev.insertAt(A, $), w = {
                      startNode: this.prev.domNode,
                      startOffset: A + $.length
                    };
                  } else
                    M = document.createTextNode($), this.parent.insertBefore(y.default.create(M), this), w = {
                      startNode: M,
                      startOffset: $.length
                    };
                else
                  c === this.rightGuard && (this.next instanceof g.default ? (this.next.insertAt(0, $), w = {
                    startNode: this.next.domNode,
                    startOffset: $.length
                  }) : (M = document.createTextNode($), this.parent.insertBefore(y.default.create(M), this.next), w = {
                    startNode: M,
                    startOffset: $.length
                  }));
                return c.data = h, w;
              }
            }, {
              key: "update",
              value: function(c, w) {
                var M = this;
                c.forEach(function($) {
                  if ($.type === "characterData" && ($.target === M.leftGuard || $.target === M.rightGuard)) {
                    var A = M.restore($.target);
                    A && (w.range = A);
                  }
                });
              }
            }]), u;
          }(y.default.Embed);
          s.default = m;
        },
        /* 36 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.AlignStyle = s.AlignClass = s.AlignAttribute = void 0;
          var b = o(0), l = v(b);
          function v(n) {
            return n && n.__esModule ? n : { default: n };
          }
          var y = {
            scope: l.default.Scope.BLOCK,
            whitelist: ["right", "center", "justify"]
          }, d = new l.default.Attributor.Attribute("align", "align", y), g = new l.default.Attributor.Class("align", "ql-align", y), i = new l.default.Attributor.Style("align", "text-align", y);
          s.AlignAttribute = d, s.AlignClass = g, s.AlignStyle = i;
        },
        /* 37 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.BackgroundStyle = s.BackgroundClass = void 0;
          var b = o(0), l = y(b), v = o(26);
          function y(i) {
            return i && i.__esModule ? i : { default: i };
          }
          var d = new l.default.Attributor.Class("background", "ql-bg", {
            scope: l.default.Scope.INLINE
          }), g = new v.ColorAttributor("background", "background-color", {
            scope: l.default.Scope.INLINE
          });
          s.BackgroundClass = d, s.BackgroundStyle = g;
        },
        /* 38 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.DirectionStyle = s.DirectionClass = s.DirectionAttribute = void 0;
          var b = o(0), l = v(b);
          function v(n) {
            return n && n.__esModule ? n : { default: n };
          }
          var y = {
            scope: l.default.Scope.BLOCK,
            whitelist: ["rtl"]
          }, d = new l.default.Attributor.Attribute("direction", "dir", y), g = new l.default.Attributor.Class("direction", "ql-direction", y), i = new l.default.Attributor.Style("direction", "direction", y);
          s.DirectionAttribute = d, s.DirectionClass = g, s.DirectionStyle = i;
        },
        /* 39 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.FontClass = s.FontStyle = void 0;
          var b = function() {
            function f(u, k) {
              for (var c = 0; c < k.length; c++) {
                var w = k[c];
                w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(u, w.key, w);
              }
            }
            return function(u, k, c) {
              return k && f(u.prototype, k), c && f(u, c), u;
            };
          }(), l = function f(u, k, c) {
            u === null && (u = Function.prototype);
            var w = Object.getOwnPropertyDescriptor(u, k);
            if (w === void 0) {
              var M = Object.getPrototypeOf(u);
              return M === null ? void 0 : f(M, k, c);
            } else {
              if ("value" in w)
                return w.value;
              var $ = w.get;
              return $ === void 0 ? void 0 : $.call(c);
            }
          }, v = o(0), y = d(v);
          function d(f) {
            return f && f.__esModule ? f : { default: f };
          }
          function g(f, u) {
            if (!(f instanceof u))
              throw new TypeError("Cannot call a class as a function");
          }
          function i(f, u) {
            if (!f)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return u && (typeof u == "object" || typeof u == "function") ? u : f;
          }
          function n(f, u) {
            if (typeof u != "function" && u !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof u);
            f.prototype = Object.create(u && u.prototype, { constructor: { value: f, enumerable: !1, writable: !0, configurable: !0 } }), u && (Object.setPrototypeOf ? Object.setPrototypeOf(f, u) : f.__proto__ = u);
          }
          var a = {
            scope: y.default.Scope.INLINE,
            whitelist: ["serif", "monospace"]
          }, p = new y.default.Attributor.Class("font", "ql-font", a), h = function(f) {
            n(u, f);
            function u() {
              return g(this, u), i(this, (u.__proto__ || Object.getPrototypeOf(u)).apply(this, arguments));
            }
            return b(u, [{
              key: "value",
              value: function(c) {
                return l(u.prototype.__proto__ || Object.getPrototypeOf(u.prototype), "value", this).call(this, c).replace(/["']/g, "");
              }
            }]), u;
          }(y.default.Attributor.Style), m = new h("font", "font-family", a);
          s.FontStyle = m, s.FontClass = p;
        },
        /* 40 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.SizeStyle = s.SizeClass = void 0;
          var b = o(0), l = v(b);
          function v(g) {
            return g && g.__esModule ? g : { default: g };
          }
          var y = new l.default.Attributor.Class("size", "ql-size", {
            scope: l.default.Scope.INLINE,
            whitelist: ["small", "large", "huge"]
          }), d = new l.default.Attributor.Style("size", "font-size", {
            scope: l.default.Scope.INLINE,
            whitelist: ["10px", "18px", "32px"]
          });
          s.SizeClass = y, s.SizeStyle = d;
        },
        /* 41 */
        /***/
        function(t, s, o) {
          t.exports = {
            align: {
              "": o(76),
              center: o(77),
              right: o(78),
              justify: o(79)
            },
            background: o(80),
            blockquote: o(81),
            bold: o(82),
            clean: o(83),
            code: o(58),
            "code-block": o(58),
            color: o(84),
            direction: {
              "": o(85),
              rtl: o(86)
            },
            float: {
              center: o(87),
              full: o(88),
              left: o(89),
              right: o(90)
            },
            formula: o(91),
            header: {
              1: o(92),
              2: o(93)
            },
            italic: o(94),
            image: o(95),
            indent: {
              "+1": o(96),
              "-1": o(97)
            },
            link: o(98),
            list: {
              ordered: o(99),
              bullet: o(100),
              check: o(101)
            },
            script: {
              sub: o(102),
              super: o(103)
            },
            strike: o(104),
            underline: o(105),
            video: o(106)
          };
        },
        /* 42 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.getLastChangeIndex = s.default = void 0;
          var b = function() {
            function k(c, w) {
              for (var M = 0; M < w.length; M++) {
                var $ = w[M];
                $.enumerable = $.enumerable || !1, $.configurable = !0, "value" in $ && ($.writable = !0), Object.defineProperty(c, $.key, $);
              }
            }
            return function(c, w, M) {
              return w && k(c.prototype, w), M && k(c, M), c;
            };
          }(), l = o(0), v = n(l), y = o(5), d = n(y), g = o(9), i = n(g);
          function n(k) {
            return k && k.__esModule ? k : { default: k };
          }
          function a(k, c) {
            if (!(k instanceof c))
              throw new TypeError("Cannot call a class as a function");
          }
          function p(k, c) {
            if (!k)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return c && (typeof c == "object" || typeof c == "function") ? c : k;
          }
          function h(k, c) {
            if (typeof c != "function" && c !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof c);
            k.prototype = Object.create(c && c.prototype, { constructor: { value: k, enumerable: !1, writable: !0, configurable: !0 } }), c && (Object.setPrototypeOf ? Object.setPrototypeOf(k, c) : k.__proto__ = c);
          }
          var m = function(k) {
            h(c, k);
            function c(w, M) {
              a(this, c);
              var $ = p(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, w, M));
              return $.lastRecorded = 0, $.ignoreChange = !1, $.clear(), $.quill.on(d.default.events.EDITOR_CHANGE, function(A, P, O, x) {
                A !== d.default.events.TEXT_CHANGE || $.ignoreChange || (!$.options.userOnly || x === d.default.sources.USER ? $.record(P, O) : $.transform(P));
              }), $.quill.keyboard.addBinding({ key: "Z", shortKey: !0 }, $.undo.bind($)), $.quill.keyboard.addBinding({ key: "Z", shortKey: !0, shiftKey: !0 }, $.redo.bind($)), /Win/i.test(navigator.platform) && $.quill.keyboard.addBinding({ key: "Y", shortKey: !0 }, $.redo.bind($)), $;
            }
            return b(c, [{
              key: "change",
              value: function(M, $) {
                if (this.stack[M].length !== 0) {
                  var A = this.stack[M].pop();
                  this.stack[$].push(A), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(A[M], d.default.sources.USER), this.ignoreChange = !1;
                  var P = u(A[M]);
                  this.quill.setSelection(P);
                }
              }
            }, {
              key: "clear",
              value: function() {
                this.stack = { undo: [], redo: [] };
              }
            }, {
              key: "cutoff",
              value: function() {
                this.lastRecorded = 0;
              }
            }, {
              key: "record",
              value: function(M, $) {
                if (M.ops.length !== 0) {
                  this.stack.redo = [];
                  var A = this.quill.getContents().diff($), P = Date.now();
                  if (this.lastRecorded + this.options.delay > P && this.stack.undo.length > 0) {
                    var O = this.stack.undo.pop();
                    A = A.compose(O.undo), M = O.redo.compose(M);
                  } else
                    this.lastRecorded = P;
                  this.stack.undo.push({
                    redo: M,
                    undo: A
                  }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift();
                }
              }
            }, {
              key: "redo",
              value: function() {
                this.change("redo", "undo");
              }
            }, {
              key: "transform",
              value: function(M) {
                this.stack.undo.forEach(function($) {
                  $.undo = M.transform($.undo, !0), $.redo = M.transform($.redo, !0);
                }), this.stack.redo.forEach(function($) {
                  $.undo = M.transform($.undo, !0), $.redo = M.transform($.redo, !0);
                });
              }
            }, {
              key: "undo",
              value: function() {
                this.change("undo", "redo");
              }
            }]), c;
          }(i.default);
          m.DEFAULTS = {
            delay: 1e3,
            maxStack: 100,
            userOnly: !1
          };
          function f(k) {
            var c = k.ops[k.ops.length - 1];
            return c == null ? !1 : c.insert != null ? typeof c.insert == "string" && c.insert.endsWith(`
`) : c.attributes != null ? Object.keys(c.attributes).some(function(w) {
              return v.default.query(w, v.default.Scope.BLOCK) != null;
            }) : !1;
          }
          function u(k) {
            var c = k.reduce(function(M, $) {
              return M += $.delete || 0, M;
            }, 0), w = k.length() - c;
            return f(k) && (w -= 1), w;
          }
          s.default = m, s.getLastChangeIndex = u;
        },
        /* 43 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.default = s.BaseTooltip = void 0;
          var b = function() {
            function q(R, X) {
              for (var H = 0; H < X.length; H++) {
                var I = X[H];
                I.enumerable = I.enumerable || !1, I.configurable = !0, "value" in I && (I.writable = !0), Object.defineProperty(R, I.key, I);
              }
            }
            return function(R, X, H) {
              return X && q(R.prototype, X), H && q(R, H), R;
            };
          }(), l = function q(R, X, H) {
            R === null && (R = Function.prototype);
            var I = Object.getOwnPropertyDescriptor(R, X);
            if (I === void 0) {
              var Y = Object.getPrototypeOf(R);
              return Y === null ? void 0 : q(Y, X, H);
            } else {
              if ("value" in I)
                return I.value;
              var Q = I.get;
              return Q === void 0 ? void 0 : Q.call(H);
            }
          }, v = o(3), y = P(v), d = o(2), g = P(d), i = o(8), n = P(i), a = o(23), p = P(a), h = o(34), m = P(h), f = o(59), u = P(f), k = o(60), c = P(k), w = o(28), M = P(w), $ = o(61), A = P($);
          function P(q) {
            return q && q.__esModule ? q : { default: q };
          }
          function O(q, R) {
            if (!(q instanceof R))
              throw new TypeError("Cannot call a class as a function");
          }
          function x(q, R) {
            if (!q)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return R && (typeof R == "object" || typeof R == "function") ? R : q;
          }
          function E(q, R) {
            if (typeof R != "function" && R !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof R);
            q.prototype = Object.create(R && R.prototype, { constructor: { value: q, enumerable: !1, writable: !0, configurable: !0 } }), R && (Object.setPrototypeOf ? Object.setPrototypeOf(q, R) : q.__proto__ = R);
          }
          var T = [!1, "center", "right", "justify"], L = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"], D = [!1, "serif", "monospace"], z = ["1", "2", "3", !1], U = ["small", !1, "large", "huge"], te = function(q) {
            E(R, q);
            function R(X, H) {
              O(this, R);
              var I = x(this, (R.__proto__ || Object.getPrototypeOf(R)).call(this, X, H)), Y = function Q(ee) {
                if (!document.body.contains(X.root))
                  return document.body.removeEventListener("click", Q);
                I.tooltip != null && !I.tooltip.root.contains(ee.target) && document.activeElement !== I.tooltip.textbox && !I.quill.hasFocus() && I.tooltip.hide(), I.pickers != null && I.pickers.forEach(function(oe) {
                  oe.container.contains(ee.target) || oe.close();
                });
              };
              return X.emitter.listenDOM("click", document.body, Y), I;
            }
            return b(R, [{
              key: "addModule",
              value: function(H) {
                var I = l(R.prototype.__proto__ || Object.getPrototypeOf(R.prototype), "addModule", this).call(this, H);
                return H === "toolbar" && this.extendToolbar(I), I;
              }
            }, {
              key: "buildButtons",
              value: function(H, I) {
                H.forEach(function(Y) {
                  var Q = Y.getAttribute("class") || "";
                  Q.split(/\s+/).forEach(function(ee) {
                    if (ee.startsWith("ql-") && (ee = ee.slice(3), I[ee] != null))
                      if (ee === "direction")
                        Y.innerHTML = I[ee][""] + I[ee].rtl;
                      else if (typeof I[ee] == "string")
                        Y.innerHTML = I[ee];
                      else {
                        var oe = Y.value || "";
                        oe != null && I[ee][oe] && (Y.innerHTML = I[ee][oe]);
                      }
                  });
                });
              }
            }, {
              key: "buildPickers",
              value: function(H, I) {
                var Y = this;
                this.pickers = H.map(function(ee) {
                  if (ee.classList.contains("ql-align"))
                    return ee.querySelector("option") == null && C(ee, T), new c.default(ee, I.align);
                  if (ee.classList.contains("ql-background") || ee.classList.contains("ql-color")) {
                    var oe = ee.classList.contains("ql-background") ? "background" : "color";
                    return ee.querySelector("option") == null && C(ee, L, oe === "background" ? "#ffffff" : "#000000"), new u.default(ee, I[oe]);
                  } else
                    return ee.querySelector("option") == null && (ee.classList.contains("ql-font") ? C(ee, D) : ee.classList.contains("ql-header") ? C(ee, z) : ee.classList.contains("ql-size") && C(ee, U)), new M.default(ee);
                });
                var Q = function() {
                  Y.pickers.forEach(function(oe) {
                    oe.update();
                  });
                };
                this.quill.on(n.default.events.EDITOR_CHANGE, Q);
              }
            }]), R;
          }(m.default);
          te.DEFAULTS = (0, y.default)(!0, {}, m.default.DEFAULTS, {
            modules: {
              toolbar: {
                handlers: {
                  formula: function() {
                    this.quill.theme.tooltip.edit("formula");
                  },
                  image: function() {
                    var R = this, X = this.container.querySelector("input.ql-image[type=file]");
                    X == null && (X = document.createElement("input"), X.setAttribute("type", "file"), X.setAttribute("accept", "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"), X.classList.add("ql-image"), X.addEventListener("change", function() {
                      if (X.files != null && X.files[0] != null) {
                        var H = new FileReader();
                        H.onload = function(I) {
                          var Y = R.quill.getSelection(!0);
                          R.quill.updateContents(new g.default().retain(Y.index).delete(Y.length).insert({ image: I.target.result }), n.default.sources.USER), R.quill.setSelection(Y.index + 1, n.default.sources.SILENT), X.value = "";
                        }, H.readAsDataURL(X.files[0]);
                      }
                    }), this.container.appendChild(X)), X.click();
                  },
                  video: function() {
                    this.quill.theme.tooltip.edit("video");
                  }
                }
              }
            }
          });
          var F = function(q) {
            E(R, q);
            function R(X, H) {
              O(this, R);
              var I = x(this, (R.__proto__ || Object.getPrototypeOf(R)).call(this, X, H));
              return I.textbox = I.root.querySelector('input[type="text"]'), I.listen(), I;
            }
            return b(R, [{
              key: "listen",
              value: function() {
                var H = this;
                this.textbox.addEventListener("keydown", function(I) {
                  p.default.match(I, "enter") ? (H.save(), I.preventDefault()) : p.default.match(I, "escape") && (H.cancel(), I.preventDefault());
                });
              }
            }, {
              key: "cancel",
              value: function() {
                this.hide();
              }
            }, {
              key: "edit",
              value: function() {
                var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "link", I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), I != null ? this.textbox.value = I : H !== this.root.getAttribute("data-mode") && (this.textbox.value = ""), this.position(this.quill.getBounds(this.quill.selection.savedRange)), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute("data-" + H) || ""), this.root.setAttribute("data-mode", H);
              }
            }, {
              key: "restoreFocus",
              value: function() {
                var H = this.quill.scrollingContainer.scrollTop;
                this.quill.focus(), this.quill.scrollingContainer.scrollTop = H;
              }
            }, {
              key: "save",
              value: function() {
                var H = this.textbox.value;
                switch (this.root.getAttribute("data-mode")) {
                  case "link": {
                    var I = this.quill.root.scrollTop;
                    this.linkRange ? (this.quill.formatText(this.linkRange, "link", H, n.default.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", H, n.default.sources.USER)), this.quill.root.scrollTop = I;
                    break;
                  }
                  case "video":
                    H = j(H);
                  case "formula": {
                    if (!H)
                      break;
                    var Y = this.quill.getSelection(!0);
                    if (Y != null) {
                      var Q = Y.index + Y.length;
                      this.quill.insertEmbed(Q, this.root.getAttribute("data-mode"), H, n.default.sources.USER), this.root.getAttribute("data-mode") === "formula" && this.quill.insertText(Q + 1, " ", n.default.sources.USER), this.quill.setSelection(Q + 2, n.default.sources.USER);
                    }
                    break;
                  }
                }
                this.textbox.value = "", this.hide();
              }
            }]), R;
          }(A.default);
          function j(q) {
            var R = q.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || q.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
            return R ? (R[1] || "https") + "://www.youtube.com/embed/" + R[2] + "?showinfo=0" : (R = q.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? (R[1] || "https") + "://player.vimeo.com/video/" + R[2] + "/" : q;
          }
          function C(q, R) {
            var X = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            R.forEach(function(H) {
              var I = document.createElement("option");
              H === X ? I.setAttribute("selected", "selected") : I.setAttribute("value", H), q.appendChild(I);
            });
          }
          s.BaseTooltip = F, s.default = te;
        },
        /* 44 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", { value: !0 });
          var b = (
            /** @class */
            function() {
              function l() {
                this.head = this.tail = null, this.length = 0;
              }
              return l.prototype.append = function() {
                for (var v = [], y = 0; y < arguments.length; y++)
                  v[y] = arguments[y];
                this.insertBefore(v[0], null), v.length > 1 && this.append.apply(this, v.slice(1));
              }, l.prototype.contains = function(v) {
                for (var y, d = this.iterator(); y = d(); )
                  if (y === v)
                    return !0;
                return !1;
              }, l.prototype.insertBefore = function(v, y) {
                v && (v.next = y, y != null ? (v.prev = y.prev, y.prev != null && (y.prev.next = v), y.prev = v, y === this.head && (this.head = v)) : this.tail != null ? (this.tail.next = v, v.prev = this.tail, this.tail = v) : (v.prev = null, this.head = this.tail = v), this.length += 1);
              }, l.prototype.offset = function(v) {
                for (var y = 0, d = this.head; d != null; ) {
                  if (d === v)
                    return y;
                  y += d.length(), d = d.next;
                }
                return -1;
              }, l.prototype.remove = function(v) {
                this.contains(v) && (v.prev != null && (v.prev.next = v.next), v.next != null && (v.next.prev = v.prev), v === this.head && (this.head = v.next), v === this.tail && (this.tail = v.prev), this.length -= 1);
              }, l.prototype.iterator = function(v) {
                return v === void 0 && (v = this.head), function() {
                  var y = v;
                  return v != null && (v = v.next), y;
                };
              }, l.prototype.find = function(v, y) {
                y === void 0 && (y = !1);
                for (var d, g = this.iterator(); d = g(); ) {
                  var i = d.length();
                  if (v < i || y && v === i && (d.next == null || d.next.length() !== 0))
                    return [d, v];
                  v -= i;
                }
                return [null, 0];
              }, l.prototype.forEach = function(v) {
                for (var y, d = this.iterator(); y = d(); )
                  v(y);
              }, l.prototype.forEachAt = function(v, y, d) {
                if (!(y <= 0))
                  for (var g = this.find(v), i = g[0], n = g[1], a, p = v - n, h = this.iterator(i); (a = h()) && p < v + y; ) {
                    var m = a.length();
                    v > p ? d(a, v - p, Math.min(y, p + m - v)) : d(a, 0, Math.min(m, v + y - p)), p += m;
                  }
              }, l.prototype.map = function(v) {
                return this.reduce(function(y, d) {
                  return y.push(v(d)), y;
                }, []);
              }, l.prototype.reduce = function(v, y) {
                for (var d, g = this.iterator(); d = g(); )
                  y = v(y, d);
                return y;
              }, l;
            }()
          );
          s.default = b;
        },
        /* 45 */
        /***/
        function(t, s, o) {
          var b = this && this.__extends || function() {
            var i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
              n.__proto__ = a;
            } || function(n, a) {
              for (var p in a)
                a.hasOwnProperty(p) && (n[p] = a[p]);
            };
            return function(n, a) {
              i(n, a);
              function p() {
                this.constructor = n;
              }
              n.prototype = a === null ? Object.create(a) : (p.prototype = a.prototype, new p());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var l = o(17), v = o(1), y = {
            attributes: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
          }, d = 100, g = (
            /** @class */
            function(i) {
              b(n, i);
              function n(a) {
                var p = i.call(this, a) || this;
                return p.scroll = p, p.observer = new MutationObserver(function(h) {
                  p.update(h);
                }), p.observer.observe(p.domNode, y), p.attach(), p;
              }
              return n.prototype.detach = function() {
                i.prototype.detach.call(this), this.observer.disconnect();
              }, n.prototype.deleteAt = function(a, p) {
                this.update(), a === 0 && p === this.length() ? this.children.forEach(function(h) {
                  h.remove();
                }) : i.prototype.deleteAt.call(this, a, p);
              }, n.prototype.formatAt = function(a, p, h, m) {
                this.update(), i.prototype.formatAt.call(this, a, p, h, m);
              }, n.prototype.insertAt = function(a, p, h) {
                this.update(), i.prototype.insertAt.call(this, a, p, h);
              }, n.prototype.optimize = function(a, p) {
                var h = this;
                a === void 0 && (a = []), p === void 0 && (p = {}), i.prototype.optimize.call(this, p);
                for (var m = [].slice.call(this.observer.takeRecords()); m.length > 0; )
                  a.push(m.pop());
                for (var f = function(w, M) {
                  M === void 0 && (M = !0), !(w == null || w === h) && w.domNode.parentNode != null && (w.domNode[v.DATA_KEY].mutations == null && (w.domNode[v.DATA_KEY].mutations = []), M && f(w.parent));
                }, u = function(w) {
                  // @ts-ignore
                  w.domNode[v.DATA_KEY] == null || // @ts-ignore
                  w.domNode[v.DATA_KEY].mutations == null || (w instanceof l.default && w.children.forEach(u), w.optimize(p));
                }, k = a, c = 0; k.length > 0; c += 1) {
                  if (c >= d)
                    throw new Error("[Parchment] Maximum optimize iterations reached");
                  for (k.forEach(function(w) {
                    var M = v.find(w.target, !0);
                    M != null && (M.domNode === w.target && (w.type === "childList" ? (f(v.find(w.previousSibling, !1)), [].forEach.call(w.addedNodes, function($) {
                      var A = v.find($, !1);
                      f(A, !1), A instanceof l.default && A.children.forEach(function(P) {
                        f(P, !1);
                      });
                    })) : w.type === "attributes" && f(M.prev)), f(M));
                  }), this.children.forEach(u), k = [].slice.call(this.observer.takeRecords()), m = k.slice(); m.length > 0; )
                    a.push(m.pop());
                }
              }, n.prototype.update = function(a, p) {
                var h = this;
                p === void 0 && (p = {}), a = a || this.observer.takeRecords(), a.map(function(m) {
                  var f = v.find(m.target, !0);
                  return f == null ? null : f.domNode[v.DATA_KEY].mutations == null ? (f.domNode[v.DATA_KEY].mutations = [m], f) : (f.domNode[v.DATA_KEY].mutations.push(m), null);
                }).forEach(function(m) {
                  m == null || m === h || //@ts-ignore
                  m.domNode[v.DATA_KEY] == null || m.update(m.domNode[v.DATA_KEY].mutations || [], p);
                }), this.domNode[v.DATA_KEY].mutations != null && i.prototype.update.call(this, this.domNode[v.DATA_KEY].mutations, p), this.optimize(a, p);
              }, n.blotName = "scroll", n.defaultChild = "block", n.scope = v.Scope.BLOCK_BLOT, n.tagName = "DIV", n;
            }(l.default)
          );
          s.default = g;
        },
        /* 46 */
        /***/
        function(t, s, o) {
          var b = this && this.__extends || function() {
            var g = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, n) {
              i.__proto__ = n;
            } || function(i, n) {
              for (var a in n)
                n.hasOwnProperty(a) && (i[a] = n[a]);
            };
            return function(i, n) {
              g(i, n);
              function a() {
                this.constructor = i;
              }
              i.prototype = n === null ? Object.create(n) : (a.prototype = n.prototype, new a());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var l = o(18), v = o(1);
          function y(g, i) {
            if (Object.keys(g).length !== Object.keys(i).length)
              return !1;
            for (var n in g)
              if (g[n] !== i[n])
                return !1;
            return !0;
          }
          var d = (
            /** @class */
            function(g) {
              b(i, g);
              function i() {
                return g !== null && g.apply(this, arguments) || this;
              }
              return i.formats = function(n) {
                if (n.tagName !== i.tagName)
                  return g.formats.call(this, n);
              }, i.prototype.format = function(n, a) {
                var p = this;
                n === this.statics.blotName && !a ? (this.children.forEach(function(h) {
                  h instanceof l.default || (h = h.wrap(i.blotName, !0)), p.attributes.copy(h);
                }), this.unwrap()) : g.prototype.format.call(this, n, a);
              }, i.prototype.formatAt = function(n, a, p, h) {
                if (this.formats()[p] != null || v.query(p, v.Scope.ATTRIBUTE)) {
                  var m = this.isolate(n, a);
                  m.format(p, h);
                } else
                  g.prototype.formatAt.call(this, n, a, p, h);
              }, i.prototype.optimize = function(n) {
                g.prototype.optimize.call(this, n);
                var a = this.formats();
                if (Object.keys(a).length === 0)
                  return this.unwrap();
                var p = this.next;
                p instanceof i && p.prev === this && y(a, p.formats()) && (p.moveChildren(this), p.remove());
              }, i.blotName = "inline", i.scope = v.Scope.INLINE_BLOT, i.tagName = "SPAN", i;
            }(l.default)
          );
          s.default = d;
        },
        /* 47 */
        /***/
        function(t, s, o) {
          var b = this && this.__extends || function() {
            var d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(g, i) {
              g.__proto__ = i;
            } || function(g, i) {
              for (var n in i)
                i.hasOwnProperty(n) && (g[n] = i[n]);
            };
            return function(g, i) {
              d(g, i);
              function n() {
                this.constructor = g;
              }
              g.prototype = i === null ? Object.create(i) : (n.prototype = i.prototype, new n());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var l = o(18), v = o(1), y = (
            /** @class */
            function(d) {
              b(g, d);
              function g() {
                return d !== null && d.apply(this, arguments) || this;
              }
              return g.formats = function(i) {
                var n = v.query(g.blotName).tagName;
                if (i.tagName !== n)
                  return d.formats.call(this, i);
              }, g.prototype.format = function(i, n) {
                v.query(i, v.Scope.BLOCK) != null && (i === this.statics.blotName && !n ? this.replaceWith(g.blotName) : d.prototype.format.call(this, i, n));
              }, g.prototype.formatAt = function(i, n, a, p) {
                v.query(a, v.Scope.BLOCK) != null ? this.format(a, p) : d.prototype.formatAt.call(this, i, n, a, p);
              }, g.prototype.insertAt = function(i, n, a) {
                if (a == null || v.query(n, v.Scope.INLINE) != null)
                  d.prototype.insertAt.call(this, i, n, a);
                else {
                  var p = this.split(i), h = v.create(n, a);
                  p.parent.insertBefore(h, p);
                }
              }, g.prototype.update = function(i, n) {
                navigator.userAgent.match(/Trident/) ? this.build() : d.prototype.update.call(this, i, n);
              }, g.blotName = "block", g.scope = v.Scope.BLOCK_BLOT, g.tagName = "P", g;
            }(l.default)
          );
          s.default = y;
        },
        /* 48 */
        /***/
        function(t, s, o) {
          var b = this && this.__extends || function() {
            var y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, g) {
              d.__proto__ = g;
            } || function(d, g) {
              for (var i in g)
                g.hasOwnProperty(i) && (d[i] = g[i]);
            };
            return function(d, g) {
              y(d, g);
              function i() {
                this.constructor = d;
              }
              d.prototype = g === null ? Object.create(g) : (i.prototype = g.prototype, new i());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var l = o(19), v = (
            /** @class */
            function(y) {
              b(d, y);
              function d() {
                return y !== null && y.apply(this, arguments) || this;
              }
              return d.formats = function(g) {
              }, d.prototype.format = function(g, i) {
                y.prototype.formatAt.call(this, 0, this.length(), g, i);
              }, d.prototype.formatAt = function(g, i, n, a) {
                g === 0 && i === this.length() ? this.format(n, a) : y.prototype.formatAt.call(this, g, i, n, a);
              }, d.prototype.formats = function() {
                return this.statics.formats(this.domNode);
              }, d;
            }(l.default)
          );
          s.default = v;
        },
        /* 49 */
        /***/
        function(t, s, o) {
          var b = this && this.__extends || function() {
            var d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(g, i) {
              g.__proto__ = i;
            } || function(g, i) {
              for (var n in i)
                i.hasOwnProperty(n) && (g[n] = i[n]);
            };
            return function(g, i) {
              d(g, i);
              function n() {
                this.constructor = g;
              }
              g.prototype = i === null ? Object.create(i) : (n.prototype = i.prototype, new n());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var l = o(19), v = o(1), y = (
            /** @class */
            function(d) {
              b(g, d);
              function g(i) {
                var n = d.call(this, i) || this;
                return n.text = n.statics.value(n.domNode), n;
              }
              return g.create = function(i) {
                return document.createTextNode(i);
              }, g.value = function(i) {
                var n = i.data;
                return n.normalize && (n = n.normalize()), n;
              }, g.prototype.deleteAt = function(i, n) {
                this.domNode.data = this.text = this.text.slice(0, i) + this.text.slice(i + n);
              }, g.prototype.index = function(i, n) {
                return this.domNode === i ? n : -1;
              }, g.prototype.insertAt = function(i, n, a) {
                a == null ? (this.text = this.text.slice(0, i) + n + this.text.slice(i), this.domNode.data = this.text) : d.prototype.insertAt.call(this, i, n, a);
              }, g.prototype.length = function() {
                return this.text.length;
              }, g.prototype.optimize = function(i) {
                d.prototype.optimize.call(this, i), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof g && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
              }, g.prototype.position = function(i, n) {
                return [this.domNode, i];
              }, g.prototype.split = function(i, n) {
                if (n === void 0 && (n = !1), !n) {
                  if (i === 0)
                    return this;
                  if (i === this.length())
                    return this.next;
                }
                var a = v.create(this.domNode.splitText(i));
                return this.parent.insertBefore(a, this.next), this.text = this.statics.value(this.domNode), a;
              }, g.prototype.update = function(i, n) {
                var a = this;
                i.some(function(p) {
                  return p.type === "characterData" && p.target === a.domNode;
                }) && (this.text = this.statics.value(this.domNode));
              }, g.prototype.value = function() {
                return this.text;
              }, g.blotName = "text", g.scope = v.Scope.INLINE_BLOT, g;
            }(l.default)
          );
          s.default = y;
        },
        /* 50 */
        /***/
        function(t, s, o) {
          var b = document.createElement("div");
          if (b.classList.toggle("test-class", !1), b.classList.contains("test-class")) {
            var l = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(v, y) {
              return arguments.length > 1 && !this.contains(v) == !y ? y : l.call(this, v);
            };
          }
          String.prototype.startsWith || (String.prototype.startsWith = function(v, y) {
            return y = y || 0, this.substr(y, v.length) === v;
          }), String.prototype.endsWith || (String.prototype.endsWith = function(v, y) {
            var d = this.toString();
            (typeof y != "number" || !isFinite(y) || Math.floor(y) !== y || y > d.length) && (y = d.length), y -= v.length;
            var g = d.indexOf(v, y);
            return g !== -1 && g === y;
          }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
            value: function(y) {
              if (this === null)
                throw new TypeError("Array.prototype.find called on null or undefined");
              if (typeof y != "function")
                throw new TypeError("predicate must be a function");
              for (var d = Object(this), g = d.length >>> 0, i = arguments[1], n, a = 0; a < g; a++)
                if (n = d[a], y.call(i, n, a, d))
                  return n;
            }
          }), document.addEventListener("DOMContentLoaded", function() {
            document.execCommand("enableObjectResizing", !1, !1), document.execCommand("autoUrlDetect", !1, !1);
          });
        },
        /* 51 */
        /***/
        function(t, s) {
          var o = -1, b = 1, l = 0;
          function v(c, w, M) {
            if (c == w)
              return c ? [[l, c]] : [];
            (M < 0 || c.length < M) && (M = null);
            var $ = i(c, w), A = c.substring(0, $);
            c = c.substring($), w = w.substring($), $ = n(c, w);
            var P = c.substring(c.length - $);
            c = c.substring(0, c.length - $), w = w.substring(0, w.length - $);
            var O = y(c, w);
            return A && O.unshift([l, A]), P && O.push([l, P]), p(O), M != null && (O = f(O, M)), O = u(O), O;
          }
          function y(c, w) {
            var M;
            if (!c)
              return [[b, w]];
            if (!w)
              return [[o, c]];
            var $ = c.length > w.length ? c : w, A = c.length > w.length ? w : c, P = $.indexOf(A);
            if (P != -1)
              return M = [
                [b, $.substring(0, P)],
                [l, A],
                [b, $.substring(P + A.length)]
              ], c.length > w.length && (M[0][0] = M[2][0] = o), M;
            if (A.length == 1)
              return [[o, c], [b, w]];
            var O = a(c, w);
            if (O) {
              var x = O[0], E = O[1], T = O[2], L = O[3], D = O[4], z = v(x, T), U = v(E, L);
              return z.concat([[l, D]], U);
            }
            return d(c, w);
          }
          function d(c, w) {
            for (var M = c.length, $ = w.length, A = Math.ceil((M + $) / 2), P = A, O = 2 * A, x = new Array(O), E = new Array(O), T = 0; T < O; T++)
              x[T] = -1, E[T] = -1;
            x[P + 1] = 0, E[P + 1] = 0;
            for (var L = M - $, D = L % 2 != 0, z = 0, U = 0, te = 0, F = 0, j = 0; j < A; j++) {
              for (var C = -j + z; C <= j - U; C += 2) {
                var q = P + C, R;
                C == -j || C != j && x[q - 1] < x[q + 1] ? R = x[q + 1] : R = x[q - 1] + 1;
                for (var X = R - C; R < M && X < $ && c.charAt(R) == w.charAt(X); )
                  R++, X++;
                if (x[q] = R, R > M)
                  U += 2;
                else if (X > $)
                  z += 2;
                else if (D) {
                  var H = P + L - C;
                  if (H >= 0 && H < O && E[H] != -1) {
                    var I = M - E[H];
                    if (R >= I)
                      return g(c, w, R, X);
                  }
                }
              }
              for (var Y = -j + te; Y <= j - F; Y += 2) {
                var H = P + Y, I;
                Y == -j || Y != j && E[H - 1] < E[H + 1] ? I = E[H + 1] : I = E[H - 1] + 1;
                for (var Q = I - Y; I < M && Q < $ && c.charAt(M - I - 1) == w.charAt($ - Q - 1); )
                  I++, Q++;
                if (E[H] = I, I > M)
                  F += 2;
                else if (Q > $)
                  te += 2;
                else if (!D) {
                  var q = P + L - Y;
                  if (q >= 0 && q < O && x[q] != -1) {
                    var R = x[q], X = P + R - q;
                    if (I = M - I, R >= I)
                      return g(c, w, R, X);
                  }
                }
              }
            }
            return [[o, c], [b, w]];
          }
          function g(c, w, M, $) {
            var A = c.substring(0, M), P = w.substring(0, $), O = c.substring(M), x = w.substring($), E = v(A, P), T = v(O, x);
            return E.concat(T);
          }
          function i(c, w) {
            if (!c || !w || c.charAt(0) != w.charAt(0))
              return 0;
            for (var M = 0, $ = Math.min(c.length, w.length), A = $, P = 0; M < A; )
              c.substring(P, A) == w.substring(P, A) ? (M = A, P = M) : $ = A, A = Math.floor(($ - M) / 2 + M);
            return A;
          }
          function n(c, w) {
            if (!c || !w || c.charAt(c.length - 1) != w.charAt(w.length - 1))
              return 0;
            for (var M = 0, $ = Math.min(c.length, w.length), A = $, P = 0; M < A; )
              c.substring(c.length - A, c.length - P) == w.substring(w.length - A, w.length - P) ? (M = A, P = M) : $ = A, A = Math.floor(($ - M) / 2 + M);
            return A;
          }
          function a(c, w) {
            var M = c.length > w.length ? c : w, $ = c.length > w.length ? w : c;
            if (M.length < 4 || $.length * 2 < M.length)
              return null;
            function A(U, te, F) {
              for (var j = U.substring(F, F + Math.floor(U.length / 4)), C = -1, q = "", R, X, H, I; (C = te.indexOf(j, C + 1)) != -1; ) {
                var Y = i(
                  U.substring(F),
                  te.substring(C)
                ), Q = n(
                  U.substring(0, F),
                  te.substring(0, C)
                );
                q.length < Q + Y && (q = te.substring(C - Q, C) + te.substring(C, C + Y), R = U.substring(0, F - Q), X = U.substring(F + Y), H = te.substring(0, C - Q), I = te.substring(C + Y));
              }
              return q.length * 2 >= U.length ? [
                R,
                X,
                H,
                I,
                q
              ] : null;
            }
            var P = A(
              M,
              $,
              Math.ceil(M.length / 4)
            ), O = A(
              M,
              $,
              Math.ceil(M.length / 2)
            ), x;
            if (!P && !O)
              return null;
            O ? P ? x = P[4].length > O[4].length ? P : O : x = O : x = P;
            var E, T, L, D;
            c.length > w.length ? (E = x[0], T = x[1], L = x[2], D = x[3]) : (L = x[0], D = x[1], E = x[2], T = x[3]);
            var z = x[4];
            return [E, T, L, D, z];
          }
          function p(c) {
            c.push([l, ""]);
            for (var w = 0, M = 0, $ = 0, A = "", P = "", O; w < c.length; )
              switch (c[w][0]) {
                case b:
                  $++, P += c[w][1], w++;
                  break;
                case o:
                  M++, A += c[w][1], w++;
                  break;
                case l:
                  M + $ > 1 ? (M !== 0 && $ !== 0 && (O = i(P, A), O !== 0 && (w - M - $ > 0 && c[w - M - $ - 1][0] == l ? c[w - M - $ - 1][1] += P.substring(0, O) : (c.splice(0, 0, [
                    l,
                    P.substring(0, O)
                  ]), w++), P = P.substring(O), A = A.substring(O)), O = n(P, A), O !== 0 && (c[w][1] = P.substring(P.length - O) + c[w][1], P = P.substring(0, P.length - O), A = A.substring(0, A.length - O))), M === 0 ? c.splice(
                    w - $,
                    M + $,
                    [b, P]
                  ) : $ === 0 ? c.splice(
                    w - M,
                    M + $,
                    [o, A]
                  ) : c.splice(
                    w - M - $,
                    M + $,
                    [o, A],
                    [b, P]
                  ), w = w - M - $ + (M ? 1 : 0) + ($ ? 1 : 0) + 1) : w !== 0 && c[w - 1][0] == l ? (c[w - 1][1] += c[w][1], c.splice(w, 1)) : w++, $ = 0, M = 0, A = "", P = "";
                  break;
              }
            c[c.length - 1][1] === "" && c.pop();
            var x = !1;
            for (w = 1; w < c.length - 1; )
              c[w - 1][0] == l && c[w + 1][0] == l && (c[w][1].substring(c[w][1].length - c[w - 1][1].length) == c[w - 1][1] ? (c[w][1] = c[w - 1][1] + c[w][1].substring(0, c[w][1].length - c[w - 1][1].length), c[w + 1][1] = c[w - 1][1] + c[w + 1][1], c.splice(w - 1, 1), x = !0) : c[w][1].substring(0, c[w + 1][1].length) == c[w + 1][1] && (c[w - 1][1] += c[w + 1][1], c[w][1] = c[w][1].substring(c[w + 1][1].length) + c[w + 1][1], c.splice(w + 1, 1), x = !0)), w++;
            x && p(c);
          }
          var h = v;
          h.INSERT = b, h.DELETE = o, h.EQUAL = l, t.exports = h;
          function m(c, w) {
            if (w === 0)
              return [l, c];
            for (var M = 0, $ = 0; $ < c.length; $++) {
              var A = c[$];
              if (A[0] === o || A[0] === l) {
                var P = M + A[1].length;
                if (w === P)
                  return [$ + 1, c];
                if (w < P) {
                  c = c.slice();
                  var O = w - M, x = [A[0], A[1].slice(0, O)], E = [A[0], A[1].slice(O)];
                  return c.splice($, 1, x, E), [$ + 1, c];
                } else
                  M = P;
              }
            }
            throw new Error("cursor_pos is out of bounds!");
          }
          function f(c, w) {
            var M = m(c, w), $ = M[1], A = M[0], P = $[A], O = $[A + 1];
            if (P == null)
              return c;
            if (P[0] !== l)
              return c;
            if (O != null && P[1] + O[1] === O[1] + P[1])
              return $.splice(A, 2, O, P), k($, A, 2);
            if (O != null && O[1].indexOf(P[1]) === 0) {
              $.splice(A, 2, [O[0], P[1]], [0, P[1]]);
              var x = O[1].slice(P[1].length);
              return x.length > 0 && $.splice(A + 2, 0, [O[0], x]), k($, A, 3);
            } else
              return c;
          }
          function u(c) {
            for (var w = !1, M = function(O) {
              return O.charCodeAt(0) >= 56320 && O.charCodeAt(0) <= 57343;
            }, $ = function(O) {
              return O.charCodeAt(O.length - 1) >= 55296 && O.charCodeAt(O.length - 1) <= 56319;
            }, A = 2; A < c.length; A += 1)
              c[A - 2][0] === l && $(c[A - 2][1]) && c[A - 1][0] === o && M(c[A - 1][1]) && c[A][0] === b && M(c[A][1]) && (w = !0, c[A - 1][1] = c[A - 2][1].slice(-1) + c[A - 1][1], c[A][1] = c[A - 2][1].slice(-1) + c[A][1], c[A - 2][1] = c[A - 2][1].slice(0, -1));
            if (!w)
              return c;
            for (var P = [], A = 0; A < c.length; A += 1)
              c[A][1].length > 0 && P.push(c[A]);
            return P;
          }
          function k(c, w, M) {
            for (var $ = w + M - 1; $ >= 0 && $ >= w - 1; $--)
              if ($ + 1 < c.length) {
                var A = c[$], P = c[$ + 1];
                A[0] === P[1] && c.splice($, 2, [A[0], A[1] + P[1]]);
              }
            return c;
          }
        },
        /* 52 */
        /***/
        function(t, s) {
          s = t.exports = typeof Object.keys == "function" ? Object.keys : o, s.shim = o;
          function o(b) {
            var l = [];
            for (var v in b)
              l.push(v);
            return l;
          }
        },
        /* 53 */
        /***/
        function(t, s) {
          var o = function() {
            return Object.prototype.toString.call(arguments);
          }() == "[object Arguments]";
          s = t.exports = o ? b : l, s.supported = b;
          function b(v) {
            return Object.prototype.toString.call(v) == "[object Arguments]";
          }
          s.unsupported = l;
          function l(v) {
            return v && typeof v == "object" && typeof v.length == "number" && Object.prototype.hasOwnProperty.call(v, "callee") && !Object.prototype.propertyIsEnumerable.call(v, "callee") || !1;
          }
        },
        /* 54 */
        /***/
        function(t, s) {
          var o = Object.prototype.hasOwnProperty, b = "~";
          function l() {
          }
          Object.create && (l.prototype = /* @__PURE__ */ Object.create(null), new l().__proto__ || (b = !1));
          function v(d, g, i) {
            this.fn = d, this.context = g, this.once = i || !1;
          }
          function y() {
            this._events = new l(), this._eventsCount = 0;
          }
          y.prototype.eventNames = function() {
            var g = [], i, n;
            if (this._eventsCount === 0)
              return g;
            for (n in i = this._events)
              o.call(i, n) && g.push(b ? n.slice(1) : n);
            return Object.getOwnPropertySymbols ? g.concat(Object.getOwnPropertySymbols(i)) : g;
          }, y.prototype.listeners = function(g, i) {
            var n = b ? b + g : g, a = this._events[n];
            if (i)
              return !!a;
            if (!a)
              return [];
            if (a.fn)
              return [a.fn];
            for (var p = 0, h = a.length, m = new Array(h); p < h; p++)
              m[p] = a[p].fn;
            return m;
          }, y.prototype.emit = function(g, i, n, a, p, h) {
            var m = b ? b + g : g;
            if (!this._events[m])
              return !1;
            var f = this._events[m], u = arguments.length, k, c;
            if (f.fn) {
              switch (f.once && this.removeListener(g, f.fn, void 0, !0), u) {
                case 1:
                  return f.fn.call(f.context), !0;
                case 2:
                  return f.fn.call(f.context, i), !0;
                case 3:
                  return f.fn.call(f.context, i, n), !0;
                case 4:
                  return f.fn.call(f.context, i, n, a), !0;
                case 5:
                  return f.fn.call(f.context, i, n, a, p), !0;
                case 6:
                  return f.fn.call(f.context, i, n, a, p, h), !0;
              }
              for (c = 1, k = new Array(u - 1); c < u; c++)
                k[c - 1] = arguments[c];
              f.fn.apply(f.context, k);
            } else {
              var w = f.length, M;
              for (c = 0; c < w; c++)
                switch (f[c].once && this.removeListener(g, f[c].fn, void 0, !0), u) {
                  case 1:
                    f[c].fn.call(f[c].context);
                    break;
                  case 2:
                    f[c].fn.call(f[c].context, i);
                    break;
                  case 3:
                    f[c].fn.call(f[c].context, i, n);
                    break;
                  case 4:
                    f[c].fn.call(f[c].context, i, n, a);
                    break;
                  default:
                    if (!k)
                      for (M = 1, k = new Array(u - 1); M < u; M++)
                        k[M - 1] = arguments[M];
                    f[c].fn.apply(f[c].context, k);
                }
            }
            return !0;
          }, y.prototype.on = function(g, i, n) {
            var a = new v(i, n || this), p = b ? b + g : g;
            return this._events[p] ? this._events[p].fn ? this._events[p] = [this._events[p], a] : this._events[p].push(a) : (this._events[p] = a, this._eventsCount++), this;
          }, y.prototype.once = function(g, i, n) {
            var a = new v(i, n || this, !0), p = b ? b + g : g;
            return this._events[p] ? this._events[p].fn ? this._events[p] = [this._events[p], a] : this._events[p].push(a) : (this._events[p] = a, this._eventsCount++), this;
          }, y.prototype.removeListener = function(g, i, n, a) {
            var p = b ? b + g : g;
            if (!this._events[p])
              return this;
            if (!i)
              return --this._eventsCount === 0 ? this._events = new l() : delete this._events[p], this;
            var h = this._events[p];
            if (h.fn)
              h.fn === i && (!a || h.once) && (!n || h.context === n) && (--this._eventsCount === 0 ? this._events = new l() : delete this._events[p]);
            else {
              for (var m = 0, f = [], u = h.length; m < u; m++)
                (h[m].fn !== i || a && !h[m].once || n && h[m].context !== n) && f.push(h[m]);
              f.length ? this._events[p] = f.length === 1 ? f[0] : f : --this._eventsCount === 0 ? this._events = new l() : delete this._events[p];
            }
            return this;
          }, y.prototype.removeAllListeners = function(g) {
            var i;
            return g ? (i = b ? b + g : g, this._events[i] && (--this._eventsCount === 0 ? this._events = new l() : delete this._events[i])) : (this._events = new l(), this._eventsCount = 0), this;
          }, y.prototype.off = y.prototype.removeListener, y.prototype.addListener = y.prototype.on, y.prototype.setMaxListeners = function() {
            return this;
          }, y.prefixed = b, y.EventEmitter = y, typeof t < "u" && (t.exports = y);
        },
        /* 55 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.matchText = s.matchSpacing = s.matchNewline = s.matchBlot = s.matchAttributor = s.default = void 0;
          var b = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(ie) {
            return typeof ie;
          } : function(ie) {
            return ie && typeof Symbol == "function" && ie.constructor === Symbol && ie !== Symbol.prototype ? "symbol" : typeof ie;
          }, l = function() {
            function ie(le, de) {
              var ye = [], ue = !0, Pe = !1, Ae = void 0;
              try {
                for (var Ne = le[Symbol.iterator](), _t; !(ue = (_t = Ne.next()).done) && (ye.push(_t.value), !(de && ye.length === de)); ue = !0)
                  ;
              } catch (dt) {
                Pe = !0, Ae = dt;
              } finally {
                try {
                  !ue && Ne.return && Ne.return();
                } finally {
                  if (Pe)
                    throw Ae;
                }
              }
              return ye;
            }
            return function(le, de) {
              if (Array.isArray(le))
                return le;
              if (Symbol.iterator in Object(le))
                return ie(le, de);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), v = function() {
            function ie(le, de) {
              for (var ye = 0; ye < de.length; ye++) {
                var ue = de[ye];
                ue.enumerable = ue.enumerable || !1, ue.configurable = !0, "value" in ue && (ue.writable = !0), Object.defineProperty(le, ue.key, ue);
              }
            }
            return function(le, de, ye) {
              return de && ie(le.prototype, de), ye && ie(le, ye), le;
            };
          }(), y = o(3), d = E(y), g = o(2), i = E(g), n = o(0), a = E(n), p = o(5), h = E(p), m = o(10), f = E(m), u = o(9), k = E(u), c = o(36), w = o(37), M = o(13), $ = E(M), A = o(26), P = o(38), O = o(39), x = o(40);
          function E(ie) {
            return ie && ie.__esModule ? ie : { default: ie };
          }
          function T(ie, le, de) {
            return le in ie ? Object.defineProperty(ie, le, { value: de, enumerable: !0, configurable: !0, writable: !0 }) : ie[le] = de, ie;
          }
          function L(ie, le) {
            if (!(ie instanceof le))
              throw new TypeError("Cannot call a class as a function");
          }
          function D(ie, le) {
            if (!ie)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return le && (typeof le == "object" || typeof le == "function") ? le : ie;
          }
          function z(ie, le) {
            if (typeof le != "function" && le !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof le);
            ie.prototype = Object.create(le && le.prototype, { constructor: { value: ie, enumerable: !1, writable: !0, configurable: !0 } }), le && (Object.setPrototypeOf ? Object.setPrototypeOf(ie, le) : ie.__proto__ = le);
          }
          var U = (0, f.default)("quill:clipboard"), te = "__ql-matcher", F = [[Node.TEXT_NODE, tt], [Node.TEXT_NODE, De], ["br", ve], [Node.ELEMENT_NODE, De], [Node.ELEMENT_NODE, oe], [Node.ELEMENT_NODE, qe], [Node.ELEMENT_NODE, ee], [Node.ELEMENT_NODE, ut], ["li", Me], ["b", Q.bind(Q, "bold")], ["i", Q.bind(Q, "italic")], ["style", Oe]], j = [c.AlignAttribute, P.DirectionAttribute].reduce(function(ie, le) {
            return ie[le.keyName] = le, ie;
          }, {}), C = [c.AlignStyle, w.BackgroundStyle, A.ColorStyle, P.DirectionStyle, O.FontStyle, x.SizeStyle].reduce(function(ie, le) {
            return ie[le.keyName] = le, ie;
          }, {}), q = function(ie) {
            z(le, ie);
            function le(de, ye) {
              L(this, le);
              var ue = D(this, (le.__proto__ || Object.getPrototypeOf(le)).call(this, de, ye));
              return ue.quill.root.addEventListener("paste", ue.onPaste.bind(ue)), ue.container = ue.quill.addContainer("ql-clipboard"), ue.container.setAttribute("contenteditable", !0), ue.container.setAttribute("tabindex", -1), ue.matchers = [], F.concat(ue.options.matchers).forEach(function(Pe) {
                var Ae = l(Pe, 2), Ne = Ae[0], _t = Ae[1];
                !ye.matchVisual && _t === qe || ue.addMatcher(Ne, _t);
              }), ue;
            }
            return v(le, [{
              key: "addMatcher",
              value: function(ye, ue) {
                this.matchers.push([ye, ue]);
              }
            }, {
              key: "convert",
              value: function(ye) {
                if (typeof ye == "string")
                  return this.container.innerHTML = ye.replace(/\>\r?\n +\</g, "><"), this.convert();
                var ue = this.quill.getFormat(this.quill.selection.savedRange.index);
                if (ue[$.default.blotName]) {
                  var Pe = this.container.innerText;
                  return this.container.innerHTML = "", new i.default().insert(Pe, T({}, $.default.blotName, ue[$.default.blotName]));
                }
                var Ae = this.prepareMatching(), Ne = l(Ae, 2), _t = Ne[0], dt = Ne[1], He = Y(this.container, _t, dt);
                return H(He, `
`) && He.ops[He.ops.length - 1].attributes == null && (He = He.compose(new i.default().retain(He.length() - 1).delete(1))), U.log("convert", this.container.innerHTML, He), this.container.innerHTML = "", He;
              }
            }, {
              key: "dangerouslyPasteHTML",
              value: function(ye, ue) {
                var Pe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : h.default.sources.API;
                if (typeof ye == "string")
                  this.quill.setContents(this.convert(ye), ue), this.quill.setSelection(0, h.default.sources.SILENT);
                else {
                  var Ae = this.convert(ue);
                  this.quill.updateContents(new i.default().retain(ye).concat(Ae), Pe), this.quill.setSelection(ye + Ae.length(), h.default.sources.SILENT);
                }
              }
            }, {
              key: "onPaste",
              value: function(ye) {
                var ue = this;
                if (!(ye.defaultPrevented || !this.quill.isEnabled())) {
                  var Pe = this.quill.getSelection(), Ae = new i.default().retain(Pe.index), Ne = this.quill.scrollingContainer.scrollTop;
                  this.container.focus(), this.quill.selection.update(h.default.sources.SILENT), setTimeout(function() {
                    Ae = Ae.concat(ue.convert()).delete(Pe.length), ue.quill.updateContents(Ae, h.default.sources.USER), ue.quill.setSelection(Ae.length() - Pe.length, h.default.sources.SILENT), ue.quill.scrollingContainer.scrollTop = Ne, ue.quill.focus();
                  }, 1);
                }
              }
            }, {
              key: "prepareMatching",
              value: function() {
                var ye = this, ue = [], Pe = [];
                return this.matchers.forEach(function(Ae) {
                  var Ne = l(Ae, 2), _t = Ne[0], dt = Ne[1];
                  switch (_t) {
                    case Node.TEXT_NODE:
                      Pe.push(dt);
                      break;
                    case Node.ELEMENT_NODE:
                      ue.push(dt);
                      break;
                    default:
                      [].forEach.call(ye.container.querySelectorAll(_t), function(He) {
                        He[te] = He[te] || [], He[te].push(dt);
                      });
                      break;
                  }
                }), [ue, Pe];
              }
            }]), le;
          }(k.default);
          q.DEFAULTS = {
            matchers: [],
            matchVisual: !0
          };
          function R(ie, le, de) {
            return (typeof le > "u" ? "undefined" : b(le)) === "object" ? Object.keys(le).reduce(function(ye, ue) {
              return R(ye, ue, le[ue]);
            }, ie) : ie.reduce(function(ye, ue) {
              return ue.attributes && ue.attributes[le] ? ye.push(ue) : ye.insert(ue.insert, (0, d.default)({}, T({}, le, de), ue.attributes));
            }, new i.default());
          }
          function X(ie) {
            if (ie.nodeType !== Node.ELEMENT_NODE)
              return {};
            var le = "__ql-computed-style";
            return ie[le] || (ie[le] = window.getComputedStyle(ie));
          }
          function H(ie, le) {
            for (var de = "", ye = ie.ops.length - 1; ye >= 0 && de.length < le.length; --ye) {
              var ue = ie.ops[ye];
              if (typeof ue.insert != "string")
                break;
              de = ue.insert + de;
            }
            return de.slice(-1 * le.length) === le;
          }
          function I(ie) {
            if (ie.childNodes.length === 0)
              return !1;
            var le = X(ie);
            return ["block", "list-item"].indexOf(le.display) > -1;
          }
          function Y(ie, le, de) {
            return ie.nodeType === ie.TEXT_NODE ? de.reduce(function(ye, ue) {
              return ue(ie, ye);
            }, new i.default()) : ie.nodeType === ie.ELEMENT_NODE ? [].reduce.call(ie.childNodes || [], function(ye, ue) {
              var Pe = Y(ue, le, de);
              return ue.nodeType === ie.ELEMENT_NODE && (Pe = le.reduce(function(Ae, Ne) {
                return Ne(ue, Ae);
              }, Pe), Pe = (ue[te] || []).reduce(function(Ae, Ne) {
                return Ne(ue, Ae);
              }, Pe)), ye.concat(Pe);
            }, new i.default()) : new i.default();
          }
          function Q(ie, le, de) {
            return R(de, ie, !0);
          }
          function ee(ie, le) {
            var de = a.default.Attributor.Attribute.keys(ie), ye = a.default.Attributor.Class.keys(ie), ue = a.default.Attributor.Style.keys(ie), Pe = {};
            return de.concat(ye).concat(ue).forEach(function(Ae) {
              var Ne = a.default.query(Ae, a.default.Scope.ATTRIBUTE);
              Ne != null && (Pe[Ne.attrName] = Ne.value(ie), Pe[Ne.attrName]) || (Ne = j[Ae], Ne != null && (Ne.attrName === Ae || Ne.keyName === Ae) && (Pe[Ne.attrName] = Ne.value(ie) || void 0), Ne = C[Ae], Ne != null && (Ne.attrName === Ae || Ne.keyName === Ae) && (Ne = C[Ae], Pe[Ne.attrName] = Ne.value(ie) || void 0));
            }), Object.keys(Pe).length > 0 && (le = R(le, Pe)), le;
          }
          function oe(ie, le) {
            var de = a.default.query(ie);
            if (de == null)
              return le;
            if (de.prototype instanceof a.default.Embed) {
              var ye = {}, ue = de.value(ie);
              ue != null && (ye[de.blotName] = ue, le = new i.default().insert(ye, de.formats(ie)));
            } else
              typeof de.formats == "function" && (le = R(le, de.blotName, de.formats(ie)));
            return le;
          }
          function ve(ie, le) {
            return H(le, `
`) || le.insert(`
`), le;
          }
          function Oe() {
            return new i.default();
          }
          function Me(ie, le) {
            var de = a.default.query(ie);
            if (de == null || de.blotName !== "list-item" || !H(le, `
`))
              return le;
            for (var ye = -1, ue = ie.parentNode; !ue.classList.contains("ql-clipboard"); )
              (a.default.query(ue) || {}).blotName === "list" && (ye += 1), ue = ue.parentNode;
            return ye <= 0 ? le : le.compose(new i.default().retain(le.length() - 1).retain(1, { indent: ye }));
          }
          function De(ie, le) {
            return H(le, `
`) || (I(ie) || le.length() > 0 && ie.nextSibling && I(ie.nextSibling)) && le.insert(`
`), le;
          }
          function qe(ie, le) {
            if (I(ie) && ie.nextElementSibling != null && !H(le, `

`)) {
              var de = ie.offsetHeight + parseFloat(X(ie).marginTop) + parseFloat(X(ie).marginBottom);
              ie.nextElementSibling.offsetTop > ie.offsetTop + de * 1.5 && le.insert(`
`);
            }
            return le;
          }
          function ut(ie, le) {
            var de = {}, ye = ie.style || {};
            return ye.fontStyle && X(ie).fontStyle === "italic" && (de.italic = !0), ye.fontWeight && (X(ie).fontWeight.startsWith("bold") || parseInt(X(ie).fontWeight) >= 700) && (de.bold = !0), Object.keys(de).length > 0 && (le = R(le, de)), parseFloat(ye.textIndent || 0) > 0 && (le = new i.default().insert("	").concat(le)), le;
          }
          function tt(ie, le) {
            var de = ie.data;
            if (ie.parentNode.tagName === "O:P")
              return le.insert(de.trim());
            if (de.trim().length === 0 && ie.parentNode.classList.contains("ql-clipboard"))
              return le;
            if (!X(ie.parentNode).whiteSpace.startsWith("pre")) {
              var ye = function(Pe, Ae) {
                return Ae = Ae.replace(/[^\u00a0]/g, ""), Ae.length < 1 && Pe ? " " : Ae;
              };
              de = de.replace(/\r\n/g, " ").replace(/\n/g, " "), de = de.replace(/\s\s+/g, ye.bind(ye, !0)), (ie.previousSibling == null && I(ie.parentNode) || ie.previousSibling != null && I(ie.previousSibling)) && (de = de.replace(/^\s+/, ye.bind(ye, !1))), (ie.nextSibling == null && I(ie.parentNode) || ie.nextSibling != null && I(ie.nextSibling)) && (de = de.replace(/\s+$/, ye.bind(ye, !1)));
            }
            return le.insert(de);
          }
          s.default = q, s.matchAttributor = ee, s.matchBlot = oe, s.matchNewline = De, s.matchSpacing = qe, s.matchText = tt;
        },
        /* 56 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var b = function() {
            function p(h, m) {
              for (var f = 0; f < m.length; f++) {
                var u = m[f];
                u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(h, u.key, u);
              }
            }
            return function(h, m, f) {
              return m && p(h.prototype, m), f && p(h, f), h;
            };
          }(), l = function p(h, m, f) {
            h === null && (h = Function.prototype);
            var u = Object.getOwnPropertyDescriptor(h, m);
            if (u === void 0) {
              var k = Object.getPrototypeOf(h);
              return k === null ? void 0 : p(k, m, f);
            } else {
              if ("value" in u)
                return u.value;
              var c = u.get;
              return c === void 0 ? void 0 : c.call(f);
            }
          }, v = o(6), y = d(v);
          function d(p) {
            return p && p.__esModule ? p : { default: p };
          }
          function g(p, h) {
            if (!(p instanceof h))
              throw new TypeError("Cannot call a class as a function");
          }
          function i(p, h) {
            if (!p)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return h && (typeof h == "object" || typeof h == "function") ? h : p;
          }
          function n(p, h) {
            if (typeof h != "function" && h !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof h);
            p.prototype = Object.create(h && h.prototype, { constructor: { value: p, enumerable: !1, writable: !0, configurable: !0 } }), h && (Object.setPrototypeOf ? Object.setPrototypeOf(p, h) : p.__proto__ = h);
          }
          var a = function(p) {
            n(h, p);
            function h() {
              return g(this, h), i(this, (h.__proto__ || Object.getPrototypeOf(h)).apply(this, arguments));
            }
            return b(h, [{
              key: "optimize",
              value: function(f) {
                l(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "optimize", this).call(this, f), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
              }
            }], [{
              key: "create",
              value: function() {
                return l(h.__proto__ || Object.getPrototypeOf(h), "create", this).call(this);
              }
            }, {
              key: "formats",
              value: function() {
                return !0;
              }
            }]), h;
          }(y.default);
          a.blotName = "bold", a.tagName = ["STRONG", "B"], s.default = a;
        },
        /* 57 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.addControls = s.default = void 0;
          var b = function() {
            function x(E, T) {
              var L = [], D = !0, z = !1, U = void 0;
              try {
                for (var te = E[Symbol.iterator](), F; !(D = (F = te.next()).done) && (L.push(F.value), !(T && L.length === T)); D = !0)
                  ;
              } catch (j) {
                z = !0, U = j;
              } finally {
                try {
                  !D && te.return && te.return();
                } finally {
                  if (z)
                    throw U;
                }
              }
              return L;
            }
            return function(E, T) {
              if (Array.isArray(E))
                return E;
              if (Symbol.iterator in Object(E))
                return x(E, T);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), l = function() {
            function x(E, T) {
              for (var L = 0; L < T.length; L++) {
                var D = T[L];
                D.enumerable = D.enumerable || !1, D.configurable = !0, "value" in D && (D.writable = !0), Object.defineProperty(E, D.key, D);
              }
            }
            return function(E, T, L) {
              return T && x(E.prototype, T), L && x(E, L), E;
            };
          }(), v = o(2), y = f(v), d = o(0), g = f(d), i = o(5), n = f(i), a = o(10), p = f(a), h = o(9), m = f(h);
          function f(x) {
            return x && x.__esModule ? x : { default: x };
          }
          function u(x, E, T) {
            return E in x ? Object.defineProperty(x, E, { value: T, enumerable: !0, configurable: !0, writable: !0 }) : x[E] = T, x;
          }
          function k(x, E) {
            if (!(x instanceof E))
              throw new TypeError("Cannot call a class as a function");
          }
          function c(x, E) {
            if (!x)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return E && (typeof E == "object" || typeof E == "function") ? E : x;
          }
          function w(x, E) {
            if (typeof E != "function" && E !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof E);
            x.prototype = Object.create(E && E.prototype, { constructor: { value: x, enumerable: !1, writable: !0, configurable: !0 } }), E && (Object.setPrototypeOf ? Object.setPrototypeOf(x, E) : x.__proto__ = E);
          }
          var M = (0, p.default)("quill:toolbar"), $ = function(x) {
            w(E, x);
            function E(T, L) {
              k(this, E);
              var D = c(this, (E.__proto__ || Object.getPrototypeOf(E)).call(this, T, L));
              if (Array.isArray(D.options.container)) {
                var z = document.createElement("div");
                P(z, D.options.container), T.container.parentNode.insertBefore(z, T.container), D.container = z;
              } else
                typeof D.options.container == "string" ? D.container = document.querySelector(D.options.container) : D.container = D.options.container;
              if (!(D.container instanceof HTMLElement)) {
                var U;
                return U = M.error("Container required for toolbar", D.options), c(D, U);
              }
              return D.container.classList.add("ql-toolbar"), D.controls = [], D.handlers = {}, Object.keys(D.options.handlers).forEach(function(te) {
                D.addHandler(te, D.options.handlers[te]);
              }), [].forEach.call(D.container.querySelectorAll("button, select"), function(te) {
                D.attach(te);
              }), D.quill.on(n.default.events.EDITOR_CHANGE, function(te, F) {
                te === n.default.events.SELECTION_CHANGE && D.update(F);
              }), D.quill.on(n.default.events.SCROLL_OPTIMIZE, function() {
                var te = D.quill.selection.getRange(), F = b(te, 1), j = F[0];
                D.update(j);
              }), D;
            }
            return l(E, [{
              key: "addHandler",
              value: function(L, D) {
                this.handlers[L] = D;
              }
            }, {
              key: "attach",
              value: function(L) {
                var D = this, z = [].find.call(L.classList, function(te) {
                  return te.indexOf("ql-") === 0;
                });
                if (z) {
                  if (z = z.slice(3), L.tagName === "BUTTON" && L.setAttribute("type", "button"), this.handlers[z] == null) {
                    if (this.quill.scroll.whitelist != null && this.quill.scroll.whitelist[z] == null) {
                      M.warn("ignoring attaching to disabled format", z, L);
                      return;
                    }
                    if (g.default.query(z) == null) {
                      M.warn("ignoring attaching to nonexistent format", z, L);
                      return;
                    }
                  }
                  var U = L.tagName === "SELECT" ? "change" : "click";
                  L.addEventListener(U, function(te) {
                    var F = void 0;
                    if (L.tagName === "SELECT") {
                      if (L.selectedIndex < 0)
                        return;
                      var j = L.options[L.selectedIndex];
                      j.hasAttribute("selected") ? F = !1 : F = j.value || !1;
                    } else
                      L.classList.contains("ql-active") ? F = !1 : F = L.value || !L.hasAttribute("value"), te.preventDefault();
                    D.quill.focus();
                    var C = D.quill.selection.getRange(), q = b(C, 1), R = q[0];
                    if (D.handlers[z] != null)
                      D.handlers[z].call(D, F);
                    else if (g.default.query(z).prototype instanceof g.default.Embed) {
                      if (F = prompt("Enter " + z), !F)
                        return;
                      D.quill.updateContents(new y.default().retain(R.index).delete(R.length).insert(u({}, z, F)), n.default.sources.USER);
                    } else
                      D.quill.format(z, F, n.default.sources.USER);
                    D.update(R);
                  }), this.controls.push([z, L]);
                }
              }
            }, {
              key: "update",
              value: function(L) {
                var D = L == null ? {} : this.quill.getFormat(L);
                this.controls.forEach(function(z) {
                  var U = b(z, 2), te = U[0], F = U[1];
                  if (F.tagName === "SELECT") {
                    var j = void 0;
                    if (L == null)
                      j = null;
                    else if (D[te] == null)
                      j = F.querySelector("option[selected]");
                    else if (!Array.isArray(D[te])) {
                      var C = D[te];
                      typeof C == "string" && (C = C.replace(/\"/g, '\\"')), j = F.querySelector('option[value="' + C + '"]');
                    }
                    j == null ? (F.value = "", F.selectedIndex = -1) : j.selected = !0;
                  } else if (L == null)
                    F.classList.remove("ql-active");
                  else if (F.hasAttribute("value")) {
                    var q = D[te] === F.getAttribute("value") || D[te] != null && D[te].toString() === F.getAttribute("value") || D[te] == null && !F.getAttribute("value");
                    F.classList.toggle("ql-active", q);
                  } else
                    F.classList.toggle("ql-active", D[te] != null);
                });
              }
            }]), E;
          }(m.default);
          $.DEFAULTS = {};
          function A(x, E, T) {
            var L = document.createElement("button");
            L.setAttribute("type", "button"), L.classList.add("ql-" + E), T != null && (L.value = T), x.appendChild(L);
          }
          function P(x, E) {
            Array.isArray(E[0]) || (E = [E]), E.forEach(function(T) {
              var L = document.createElement("span");
              L.classList.add("ql-formats"), T.forEach(function(D) {
                if (typeof D == "string")
                  A(L, D);
                else {
                  var z = Object.keys(D)[0], U = D[z];
                  Array.isArray(U) ? O(L, z, U) : A(L, z, U);
                }
              }), x.appendChild(L);
            });
          }
          function O(x, E, T) {
            var L = document.createElement("select");
            L.classList.add("ql-" + E), T.forEach(function(D) {
              var z = document.createElement("option");
              D !== !1 ? z.setAttribute("value", D) : z.setAttribute("selected", "selected"), L.appendChild(z);
            }), x.appendChild(L);
          }
          $.DEFAULTS = {
            container: null,
            handlers: {
              clean: function() {
                var E = this, T = this.quill.getSelection();
                if (T != null)
                  if (T.length == 0) {
                    var L = this.quill.getFormat();
                    Object.keys(L).forEach(function(D) {
                      g.default.query(D, g.default.Scope.INLINE) != null && E.quill.format(D, !1);
                    });
                  } else
                    this.quill.removeFormat(T, n.default.sources.USER);
              },
              direction: function(E) {
                var T = this.quill.getFormat().align;
                E === "rtl" && T == null ? this.quill.format("align", "right", n.default.sources.USER) : !E && T === "right" && this.quill.format("align", !1, n.default.sources.USER), this.quill.format("direction", E, n.default.sources.USER);
              },
              indent: function(E) {
                var T = this.quill.getSelection(), L = this.quill.getFormat(T), D = parseInt(L.indent || 0);
                if (E === "+1" || E === "-1") {
                  var z = E === "+1" ? 1 : -1;
                  L.direction === "rtl" && (z *= -1), this.quill.format("indent", D + z, n.default.sources.USER);
                }
              },
              link: function(E) {
                E === !0 && (E = prompt("Enter link URL:")), this.quill.format("link", E, n.default.sources.USER);
              },
              list: function(E) {
                var T = this.quill.getSelection(), L = this.quill.getFormat(T);
                E === "check" ? L.list === "checked" || L.list === "unchecked" ? this.quill.format("list", !1, n.default.sources.USER) : this.quill.format("list", "unchecked", n.default.sources.USER) : this.quill.format("list", E, n.default.sources.USER);
              }
            }
          }, s.default = $, s.addControls = P;
        },
        /* 58 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>';
        },
        /* 59 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var b = function() {
            function p(h, m) {
              for (var f = 0; f < m.length; f++) {
                var u = m[f];
                u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(h, u.key, u);
              }
            }
            return function(h, m, f) {
              return m && p(h.prototype, m), f && p(h, f), h;
            };
          }(), l = function p(h, m, f) {
            h === null && (h = Function.prototype);
            var u = Object.getOwnPropertyDescriptor(h, m);
            if (u === void 0) {
              var k = Object.getPrototypeOf(h);
              return k === null ? void 0 : p(k, m, f);
            } else {
              if ("value" in u)
                return u.value;
              var c = u.get;
              return c === void 0 ? void 0 : c.call(f);
            }
          }, v = o(28), y = d(v);
          function d(p) {
            return p && p.__esModule ? p : { default: p };
          }
          function g(p, h) {
            if (!(p instanceof h))
              throw new TypeError("Cannot call a class as a function");
          }
          function i(p, h) {
            if (!p)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return h && (typeof h == "object" || typeof h == "function") ? h : p;
          }
          function n(p, h) {
            if (typeof h != "function" && h !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof h);
            p.prototype = Object.create(h && h.prototype, { constructor: { value: p, enumerable: !1, writable: !0, configurable: !0 } }), h && (Object.setPrototypeOf ? Object.setPrototypeOf(p, h) : p.__proto__ = h);
          }
          var a = function(p) {
            n(h, p);
            function h(m, f) {
              g(this, h);
              var u = i(this, (h.__proto__ || Object.getPrototypeOf(h)).call(this, m));
              return u.label.innerHTML = f, u.container.classList.add("ql-color-picker"), [].slice.call(u.container.querySelectorAll(".ql-picker-item"), 0, 7).forEach(function(k) {
                k.classList.add("ql-primary");
              }), u;
            }
            return b(h, [{
              key: "buildItem",
              value: function(f) {
                var u = l(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "buildItem", this).call(this, f);
                return u.style.backgroundColor = f.getAttribute("value") || "", u;
              }
            }, {
              key: "selectItem",
              value: function(f, u) {
                l(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "selectItem", this).call(this, f, u);
                var k = this.label.querySelector(".ql-color-label"), c = f && f.getAttribute("data-value") || "";
                k && (k.tagName === "line" ? k.style.stroke = c : k.style.fill = c);
              }
            }]), h;
          }(y.default);
          s.default = a;
        },
        /* 60 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var b = function() {
            function p(h, m) {
              for (var f = 0; f < m.length; f++) {
                var u = m[f];
                u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(h, u.key, u);
              }
            }
            return function(h, m, f) {
              return m && p(h.prototype, m), f && p(h, f), h;
            };
          }(), l = function p(h, m, f) {
            h === null && (h = Function.prototype);
            var u = Object.getOwnPropertyDescriptor(h, m);
            if (u === void 0) {
              var k = Object.getPrototypeOf(h);
              return k === null ? void 0 : p(k, m, f);
            } else {
              if ("value" in u)
                return u.value;
              var c = u.get;
              return c === void 0 ? void 0 : c.call(f);
            }
          }, v = o(28), y = d(v);
          function d(p) {
            return p && p.__esModule ? p : { default: p };
          }
          function g(p, h) {
            if (!(p instanceof h))
              throw new TypeError("Cannot call a class as a function");
          }
          function i(p, h) {
            if (!p)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return h && (typeof h == "object" || typeof h == "function") ? h : p;
          }
          function n(p, h) {
            if (typeof h != "function" && h !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof h);
            p.prototype = Object.create(h && h.prototype, { constructor: { value: p, enumerable: !1, writable: !0, configurable: !0 } }), h && (Object.setPrototypeOf ? Object.setPrototypeOf(p, h) : p.__proto__ = h);
          }
          var a = function(p) {
            n(h, p);
            function h(m, f) {
              g(this, h);
              var u = i(this, (h.__proto__ || Object.getPrototypeOf(h)).call(this, m));
              return u.container.classList.add("ql-icon-picker"), [].forEach.call(u.container.querySelectorAll(".ql-picker-item"), function(k) {
                k.innerHTML = f[k.getAttribute("data-value") || ""];
              }), u.defaultItem = u.container.querySelector(".ql-selected"), u.selectItem(u.defaultItem), u;
            }
            return b(h, [{
              key: "selectItem",
              value: function(f, u) {
                l(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "selectItem", this).call(this, f, u), f = f || this.defaultItem, this.label.innerHTML = f.innerHTML;
              }
            }]), h;
          }(y.default);
          s.default = a;
        },
        /* 61 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var b = function() {
            function y(d, g) {
              for (var i = 0; i < g.length; i++) {
                var n = g[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(d, n.key, n);
              }
            }
            return function(d, g, i) {
              return g && y(d.prototype, g), i && y(d, i), d;
            };
          }();
          function l(y, d) {
            if (!(y instanceof d))
              throw new TypeError("Cannot call a class as a function");
          }
          var v = function() {
            function y(d, g) {
              var i = this;
              l(this, y), this.quill = d, this.boundsContainer = g || document.body, this.root = d.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, this.quill.root === this.quill.scrollingContainer && this.quill.root.addEventListener("scroll", function() {
                i.root.style.marginTop = -1 * i.quill.root.scrollTop + "px";
              }), this.hide();
            }
            return b(y, [{
              key: "hide",
              value: function() {
                this.root.classList.add("ql-hidden");
              }
            }, {
              key: "position",
              value: function(g) {
                var i = g.left + g.width / 2 - this.root.offsetWidth / 2, n = g.bottom + this.quill.root.scrollTop;
                this.root.style.left = i + "px", this.root.style.top = n + "px", this.root.classList.remove("ql-flip");
                var a = this.boundsContainer.getBoundingClientRect(), p = this.root.getBoundingClientRect(), h = 0;
                if (p.right > a.right && (h = a.right - p.right, this.root.style.left = i + h + "px"), p.left < a.left && (h = a.left - p.left, this.root.style.left = i + h + "px"), p.bottom > a.bottom) {
                  var m = p.bottom - p.top, f = g.bottom - g.top + m;
                  this.root.style.top = n - f + "px", this.root.classList.add("ql-flip");
                }
                return h;
              }
            }, {
              key: "show",
              value: function() {
                this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden");
              }
            }]), y;
          }();
          s.default = v;
        },
        /* 62 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var b = function() {
            function O(x, E) {
              var T = [], L = !0, D = !1, z = void 0;
              try {
                for (var U = x[Symbol.iterator](), te; !(L = (te = U.next()).done) && (T.push(te.value), !(E && T.length === E)); L = !0)
                  ;
              } catch (F) {
                D = !0, z = F;
              } finally {
                try {
                  !L && U.return && U.return();
                } finally {
                  if (D)
                    throw z;
                }
              }
              return T;
            }
            return function(x, E) {
              if (Array.isArray(x))
                return x;
              if (Symbol.iterator in Object(x))
                return O(x, E);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), l = function O(x, E, T) {
            x === null && (x = Function.prototype);
            var L = Object.getOwnPropertyDescriptor(x, E);
            if (L === void 0) {
              var D = Object.getPrototypeOf(x);
              return D === null ? void 0 : O(D, E, T);
            } else {
              if ("value" in L)
                return L.value;
              var z = L.get;
              return z === void 0 ? void 0 : z.call(T);
            }
          }, v = function() {
            function O(x, E) {
              for (var T = 0; T < E.length; T++) {
                var L = E[T];
                L.enumerable = L.enumerable || !1, L.configurable = !0, "value" in L && (L.writable = !0), Object.defineProperty(x, L.key, L);
              }
            }
            return function(x, E, T) {
              return E && O(x.prototype, E), T && O(x, T), x;
            };
          }(), y = o(3), d = k(y), g = o(8), i = k(g), n = o(43), a = k(n), p = o(27), h = k(p), m = o(15), f = o(41), u = k(f);
          function k(O) {
            return O && O.__esModule ? O : { default: O };
          }
          function c(O, x) {
            if (!(O instanceof x))
              throw new TypeError("Cannot call a class as a function");
          }
          function w(O, x) {
            if (!O)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return x && (typeof x == "object" || typeof x == "function") ? x : O;
          }
          function M(O, x) {
            if (typeof x != "function" && x !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof x);
            O.prototype = Object.create(x && x.prototype, { constructor: { value: O, enumerable: !1, writable: !0, configurable: !0 } }), x && (Object.setPrototypeOf ? Object.setPrototypeOf(O, x) : O.__proto__ = x);
          }
          var $ = [[{ header: ["1", "2", "3", !1] }], ["bold", "italic", "underline", "link"], [{ list: "ordered" }, { list: "bullet" }], ["clean"]], A = function(O) {
            M(x, O);
            function x(E, T) {
              c(this, x), T.modules.toolbar != null && T.modules.toolbar.container == null && (T.modules.toolbar.container = $);
              var L = w(this, (x.__proto__ || Object.getPrototypeOf(x)).call(this, E, T));
              return L.quill.container.classList.add("ql-snow"), L;
            }
            return v(x, [{
              key: "extendToolbar",
              value: function(T) {
                T.container.classList.add("ql-snow"), this.buildButtons([].slice.call(T.container.querySelectorAll("button")), u.default), this.buildPickers([].slice.call(T.container.querySelectorAll("select")), u.default), this.tooltip = new P(this.quill, this.options.bounds), T.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({ key: "K", shortKey: !0 }, function(L, D) {
                  T.handlers.link.call(T, !D.format.link);
                });
              }
            }]), x;
          }(a.default);
          A.DEFAULTS = (0, d.default)(!0, {}, a.default.DEFAULTS, {
            modules: {
              toolbar: {
                handlers: {
                  link: function(x) {
                    if (x) {
                      var E = this.quill.getSelection();
                      if (E == null || E.length == 0)
                        return;
                      var T = this.quill.getText(E);
                      /^\S+@\S+\.\S+$/.test(T) && T.indexOf("mailto:") !== 0 && (T = "mailto:" + T);
                      var L = this.quill.theme.tooltip;
                      L.edit("link", T);
                    } else
                      this.quill.format("link", !1);
                  }
                }
              }
            }
          });
          var P = function(O) {
            M(x, O);
            function x(E, T) {
              c(this, x);
              var L = w(this, (x.__proto__ || Object.getPrototypeOf(x)).call(this, E, T));
              return L.preview = L.root.querySelector("a.ql-preview"), L;
            }
            return v(x, [{
              key: "listen",
              value: function() {
                var T = this;
                l(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "listen", this).call(this), this.root.querySelector("a.ql-action").addEventListener("click", function(L) {
                  T.root.classList.contains("ql-editing") ? T.save() : T.edit("link", T.preview.textContent), L.preventDefault();
                }), this.root.querySelector("a.ql-remove").addEventListener("click", function(L) {
                  if (T.linkRange != null) {
                    var D = T.linkRange;
                    T.restoreFocus(), T.quill.formatText(D, "link", !1, i.default.sources.USER), delete T.linkRange;
                  }
                  L.preventDefault(), T.hide();
                }), this.quill.on(i.default.events.SELECTION_CHANGE, function(L, D, z) {
                  if (L != null) {
                    if (L.length === 0 && z === i.default.sources.USER) {
                      var U = T.quill.scroll.descendant(h.default, L.index), te = b(U, 2), F = te[0], j = te[1];
                      if (F != null) {
                        T.linkRange = new m.Range(L.index - j, F.length());
                        var C = h.default.formats(F.domNode);
                        T.preview.textContent = C, T.preview.setAttribute("href", C), T.show(), T.position(T.quill.getBounds(T.linkRange));
                        return;
                      }
                    } else
                      delete T.linkRange;
                    T.hide();
                  }
                });
              }
            }, {
              key: "show",
              value: function() {
                l(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "show", this).call(this), this.root.removeAttribute("data-mode");
              }
            }]), x;
          }(n.BaseTooltip);
          P.TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""), s.default = A;
        },
        /* 63 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var b = o(29), l = ue(b), v = o(36), y = o(38), d = o(64), g = o(65), i = ue(g), n = o(66), a = ue(n), p = o(67), h = ue(p), m = o(37), f = o(26), u = o(39), k = o(40), c = o(56), w = ue(c), M = o(68), $ = ue(M), A = o(27), P = ue(A), O = o(69), x = ue(O), E = o(70), T = ue(E), L = o(71), D = ue(L), z = o(72), U = ue(z), te = o(73), F = ue(te), j = o(13), C = ue(j), q = o(74), R = ue(q), X = o(75), H = ue(X), I = o(57), Y = ue(I), Q = o(41), ee = ue(Q), oe = o(28), ve = ue(oe), Oe = o(59), Me = ue(Oe), De = o(60), qe = ue(De), ut = o(61), tt = ue(ut), ie = o(108), le = ue(ie), de = o(62), ye = ue(de);
          function ue(Pe) {
            return Pe && Pe.__esModule ? Pe : { default: Pe };
          }
          l.default.register({
            "attributors/attribute/direction": y.DirectionAttribute,
            "attributors/class/align": v.AlignClass,
            "attributors/class/background": m.BackgroundClass,
            "attributors/class/color": f.ColorClass,
            "attributors/class/direction": y.DirectionClass,
            "attributors/class/font": u.FontClass,
            "attributors/class/size": k.SizeClass,
            "attributors/style/align": v.AlignStyle,
            "attributors/style/background": m.BackgroundStyle,
            "attributors/style/color": f.ColorStyle,
            "attributors/style/direction": y.DirectionStyle,
            "attributors/style/font": u.FontStyle,
            "attributors/style/size": k.SizeStyle
          }, !0), l.default.register({
            "formats/align": v.AlignClass,
            "formats/direction": y.DirectionClass,
            "formats/indent": d.IndentClass,
            "formats/background": m.BackgroundStyle,
            "formats/color": f.ColorStyle,
            "formats/font": u.FontClass,
            "formats/size": k.SizeClass,
            "formats/blockquote": i.default,
            "formats/code-block": C.default,
            "formats/header": a.default,
            "formats/list": h.default,
            "formats/bold": w.default,
            "formats/code": j.Code,
            "formats/italic": $.default,
            "formats/link": P.default,
            "formats/script": x.default,
            "formats/strike": T.default,
            "formats/underline": D.default,
            "formats/image": U.default,
            "formats/video": F.default,
            "formats/list/item": p.ListItem,
            "modules/formula": R.default,
            "modules/syntax": H.default,
            "modules/toolbar": Y.default,
            "themes/bubble": le.default,
            "themes/snow": ye.default,
            "ui/icons": ee.default,
            "ui/picker": ve.default,
            "ui/icon-picker": qe.default,
            "ui/color-picker": Me.default,
            "ui/tooltip": tt.default
          }, !0), s.default = l.default;
        },
        /* 64 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.IndentClass = void 0;
          var b = function() {
            function h(m, f) {
              for (var u = 0; u < f.length; u++) {
                var k = f[u];
                k.enumerable = k.enumerable || !1, k.configurable = !0, "value" in k && (k.writable = !0), Object.defineProperty(m, k.key, k);
              }
            }
            return function(m, f, u) {
              return f && h(m.prototype, f), u && h(m, u), m;
            };
          }(), l = function h(m, f, u) {
            m === null && (m = Function.prototype);
            var k = Object.getOwnPropertyDescriptor(m, f);
            if (k === void 0) {
              var c = Object.getPrototypeOf(m);
              return c === null ? void 0 : h(c, f, u);
            } else {
              if ("value" in k)
                return k.value;
              var w = k.get;
              return w === void 0 ? void 0 : w.call(u);
            }
          }, v = o(0), y = d(v);
          function d(h) {
            return h && h.__esModule ? h : { default: h };
          }
          function g(h, m) {
            if (!(h instanceof m))
              throw new TypeError("Cannot call a class as a function");
          }
          function i(h, m) {
            if (!h)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return m && (typeof m == "object" || typeof m == "function") ? m : h;
          }
          function n(h, m) {
            if (typeof m != "function" && m !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof m);
            h.prototype = Object.create(m && m.prototype, { constructor: { value: h, enumerable: !1, writable: !0, configurable: !0 } }), m && (Object.setPrototypeOf ? Object.setPrototypeOf(h, m) : h.__proto__ = m);
          }
          var a = function(h) {
            n(m, h);
            function m() {
              return g(this, m), i(this, (m.__proto__ || Object.getPrototypeOf(m)).apply(this, arguments));
            }
            return b(m, [{
              key: "add",
              value: function(u, k) {
                if (k === "+1" || k === "-1") {
                  var c = this.value(u) || 0;
                  k = k === "+1" ? c + 1 : c - 1;
                }
                return k === 0 ? (this.remove(u), !0) : l(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "add", this).call(this, u, k);
              }
            }, {
              key: "canAdd",
              value: function(u, k) {
                return l(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "canAdd", this).call(this, u, k) || l(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "canAdd", this).call(this, u, parseInt(k));
              }
            }, {
              key: "value",
              value: function(u) {
                return parseInt(l(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "value", this).call(this, u)) || void 0;
              }
            }]), m;
          }(y.default.Attributor.Class), p = new a("indent", "ql-indent", {
            scope: y.default.Scope.BLOCK,
            whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
          });
          s.IndentClass = p;
        },
        /* 65 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var b = o(4), l = v(b);
          function v(n) {
            return n && n.__esModule ? n : { default: n };
          }
          function y(n, a) {
            if (!(n instanceof a))
              throw new TypeError("Cannot call a class as a function");
          }
          function d(n, a) {
            if (!n)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a == "object" || typeof a == "function") ? a : n;
          }
          function g(n, a) {
            if (typeof a != "function" && a !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof a);
            n.prototype = Object.create(a && a.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(n, a) : n.__proto__ = a);
          }
          var i = function(n) {
            g(a, n);
            function a() {
              return y(this, a), d(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments));
            }
            return a;
          }(l.default);
          i.blotName = "blockquote", i.tagName = "blockquote", s.default = i;
        },
        /* 66 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var b = function() {
            function a(p, h) {
              for (var m = 0; m < h.length; m++) {
                var f = h[m];
                f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(p, f.key, f);
              }
            }
            return function(p, h, m) {
              return h && a(p.prototype, h), m && a(p, m), p;
            };
          }(), l = o(4), v = y(l);
          function y(a) {
            return a && a.__esModule ? a : { default: a };
          }
          function d(a, p) {
            if (!(a instanceof p))
              throw new TypeError("Cannot call a class as a function");
          }
          function g(a, p) {
            if (!a)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return p && (typeof p == "object" || typeof p == "function") ? p : a;
          }
          function i(a, p) {
            if (typeof p != "function" && p !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof p);
            a.prototype = Object.create(p && p.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), p && (Object.setPrototypeOf ? Object.setPrototypeOf(a, p) : a.__proto__ = p);
          }
          var n = function(a) {
            i(p, a);
            function p() {
              return d(this, p), g(this, (p.__proto__ || Object.getPrototypeOf(p)).apply(this, arguments));
            }
            return b(p, null, [{
              key: "formats",
              value: function(m) {
                return this.tagName.indexOf(m.tagName) + 1;
              }
            }]), p;
          }(v.default);
          n.blotName = "header", n.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"], s.default = n;
        },
        /* 67 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.default = s.ListItem = void 0;
          var b = function() {
            function c(w, M) {
              for (var $ = 0; $ < M.length; $++) {
                var A = M[$];
                A.enumerable = A.enumerable || !1, A.configurable = !0, "value" in A && (A.writable = !0), Object.defineProperty(w, A.key, A);
              }
            }
            return function(w, M, $) {
              return M && c(w.prototype, M), $ && c(w, $), w;
            };
          }(), l = function c(w, M, $) {
            w === null && (w = Function.prototype);
            var A = Object.getOwnPropertyDescriptor(w, M);
            if (A === void 0) {
              var P = Object.getPrototypeOf(w);
              return P === null ? void 0 : c(P, M, $);
            } else {
              if ("value" in A)
                return A.value;
              var O = A.get;
              return O === void 0 ? void 0 : O.call($);
            }
          }, v = o(0), y = a(v), d = o(4), g = a(d), i = o(25), n = a(i);
          function a(c) {
            return c && c.__esModule ? c : { default: c };
          }
          function p(c, w, M) {
            return w in c ? Object.defineProperty(c, w, { value: M, enumerable: !0, configurable: !0, writable: !0 }) : c[w] = M, c;
          }
          function h(c, w) {
            if (!(c instanceof w))
              throw new TypeError("Cannot call a class as a function");
          }
          function m(c, w) {
            if (!c)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return w && (typeof w == "object" || typeof w == "function") ? w : c;
          }
          function f(c, w) {
            if (typeof w != "function" && w !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof w);
            c.prototype = Object.create(w && w.prototype, { constructor: { value: c, enumerable: !1, writable: !0, configurable: !0 } }), w && (Object.setPrototypeOf ? Object.setPrototypeOf(c, w) : c.__proto__ = w);
          }
          var u = function(c) {
            f(w, c);
            function w() {
              return h(this, w), m(this, (w.__proto__ || Object.getPrototypeOf(w)).apply(this, arguments));
            }
            return b(w, [{
              key: "format",
              value: function($, A) {
                $ === k.blotName && !A ? this.replaceWith(y.default.create(this.statics.scope)) : l(w.prototype.__proto__ || Object.getPrototypeOf(w.prototype), "format", this).call(this, $, A);
              }
            }, {
              key: "remove",
              value: function() {
                this.prev == null && this.next == null ? this.parent.remove() : l(w.prototype.__proto__ || Object.getPrototypeOf(w.prototype), "remove", this).call(this);
              }
            }, {
              key: "replaceWith",
              value: function($, A) {
                return this.parent.isolate(this.offset(this.parent), this.length()), $ === this.parent.statics.blotName ? (this.parent.replaceWith($, A), this) : (this.parent.unwrap(), l(w.prototype.__proto__ || Object.getPrototypeOf(w.prototype), "replaceWith", this).call(this, $, A));
              }
            }], [{
              key: "formats",
              value: function($) {
                return $.tagName === this.tagName ? void 0 : l(w.__proto__ || Object.getPrototypeOf(w), "formats", this).call(this, $);
              }
            }]), w;
          }(g.default);
          u.blotName = "list-item", u.tagName = "LI";
          var k = function(c) {
            f(w, c), b(w, null, [{
              key: "create",
              value: function($) {
                var A = $ === "ordered" ? "OL" : "UL", P = l(w.__proto__ || Object.getPrototypeOf(w), "create", this).call(this, A);
                return ($ === "checked" || $ === "unchecked") && P.setAttribute("data-checked", $ === "checked"), P;
              }
            }, {
              key: "formats",
              value: function($) {
                if ($.tagName === "OL")
                  return "ordered";
                if ($.tagName === "UL")
                  return $.hasAttribute("data-checked") ? $.getAttribute("data-checked") === "true" ? "checked" : "unchecked" : "bullet";
              }
            }]);
            function w(M) {
              h(this, w);
              var $ = m(this, (w.__proto__ || Object.getPrototypeOf(w)).call(this, M)), A = function(O) {
                if (O.target.parentNode === M) {
                  var x = $.statics.formats(M), E = y.default.find(O.target);
                  x === "checked" ? E.format("list", "unchecked") : x === "unchecked" && E.format("list", "checked");
                }
              };
              return M.addEventListener("touchstart", A), M.addEventListener("mousedown", A), $;
            }
            return b(w, [{
              key: "format",
              value: function($, A) {
                this.children.length > 0 && this.children.tail.format($, A);
              }
            }, {
              key: "formats",
              value: function() {
                return p({}, this.statics.blotName, this.statics.formats(this.domNode));
              }
            }, {
              key: "insertBefore",
              value: function($, A) {
                if ($ instanceof u)
                  l(w.prototype.__proto__ || Object.getPrototypeOf(w.prototype), "insertBefore", this).call(this, $, A);
                else {
                  var P = A == null ? this.length() : A.offset(this), O = this.split(P);
                  O.parent.insertBefore($, O);
                }
              }
            }, {
              key: "optimize",
              value: function($) {
                l(w.prototype.__proto__ || Object.getPrototypeOf(w.prototype), "optimize", this).call(this, $);
                var A = this.next;
                A != null && A.prev === this && A.statics.blotName === this.statics.blotName && A.domNode.tagName === this.domNode.tagName && A.domNode.getAttribute("data-checked") === this.domNode.getAttribute("data-checked") && (A.moveChildren(this), A.remove());
              }
            }, {
              key: "replace",
              value: function($) {
                if ($.statics.blotName !== this.statics.blotName) {
                  var A = y.default.create(this.statics.defaultChild);
                  $.moveChildren(A), this.appendChild(A);
                }
                l(w.prototype.__proto__ || Object.getPrototypeOf(w.prototype), "replace", this).call(this, $);
              }
            }]), w;
          }(n.default);
          k.blotName = "list", k.scope = y.default.Scope.BLOCK_BLOT, k.tagName = ["OL", "UL"], k.defaultChild = "list-item", k.allowedChildren = [u], s.ListItem = u, s.default = k;
        },
        /* 68 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var b = o(56), l = v(b);
          function v(n) {
            return n && n.__esModule ? n : { default: n };
          }
          function y(n, a) {
            if (!(n instanceof a))
              throw new TypeError("Cannot call a class as a function");
          }
          function d(n, a) {
            if (!n)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a == "object" || typeof a == "function") ? a : n;
          }
          function g(n, a) {
            if (typeof a != "function" && a !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof a);
            n.prototype = Object.create(a && a.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(n, a) : n.__proto__ = a);
          }
          var i = function(n) {
            g(a, n);
            function a() {
              return y(this, a), d(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments));
            }
            return a;
          }(l.default);
          i.blotName = "italic", i.tagName = ["EM", "I"], s.default = i;
        },
        /* 69 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var b = function() {
            function p(h, m) {
              for (var f = 0; f < m.length; f++) {
                var u = m[f];
                u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(h, u.key, u);
              }
            }
            return function(h, m, f) {
              return m && p(h.prototype, m), f && p(h, f), h;
            };
          }(), l = function p(h, m, f) {
            h === null && (h = Function.prototype);
            var u = Object.getOwnPropertyDescriptor(h, m);
            if (u === void 0) {
              var k = Object.getPrototypeOf(h);
              return k === null ? void 0 : p(k, m, f);
            } else {
              if ("value" in u)
                return u.value;
              var c = u.get;
              return c === void 0 ? void 0 : c.call(f);
            }
          }, v = o(6), y = d(v);
          function d(p) {
            return p && p.__esModule ? p : { default: p };
          }
          function g(p, h) {
            if (!(p instanceof h))
              throw new TypeError("Cannot call a class as a function");
          }
          function i(p, h) {
            if (!p)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return h && (typeof h == "object" || typeof h == "function") ? h : p;
          }
          function n(p, h) {
            if (typeof h != "function" && h !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof h);
            p.prototype = Object.create(h && h.prototype, { constructor: { value: p, enumerable: !1, writable: !0, configurable: !0 } }), h && (Object.setPrototypeOf ? Object.setPrototypeOf(p, h) : p.__proto__ = h);
          }
          var a = function(p) {
            n(h, p);
            function h() {
              return g(this, h), i(this, (h.__proto__ || Object.getPrototypeOf(h)).apply(this, arguments));
            }
            return b(h, null, [{
              key: "create",
              value: function(f) {
                return f === "super" ? document.createElement("sup") : f === "sub" ? document.createElement("sub") : l(h.__proto__ || Object.getPrototypeOf(h), "create", this).call(this, f);
              }
            }, {
              key: "formats",
              value: function(f) {
                if (f.tagName === "SUB")
                  return "sub";
                if (f.tagName === "SUP")
                  return "super";
              }
            }]), h;
          }(y.default);
          a.blotName = "script", a.tagName = ["SUB", "SUP"], s.default = a;
        },
        /* 70 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var b = o(6), l = v(b);
          function v(n) {
            return n && n.__esModule ? n : { default: n };
          }
          function y(n, a) {
            if (!(n instanceof a))
              throw new TypeError("Cannot call a class as a function");
          }
          function d(n, a) {
            if (!n)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a == "object" || typeof a == "function") ? a : n;
          }
          function g(n, a) {
            if (typeof a != "function" && a !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof a);
            n.prototype = Object.create(a && a.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(n, a) : n.__proto__ = a);
          }
          var i = function(n) {
            g(a, n);
            function a() {
              return y(this, a), d(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments));
            }
            return a;
          }(l.default);
          i.blotName = "strike", i.tagName = "S", s.default = i;
        },
        /* 71 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var b = o(6), l = v(b);
          function v(n) {
            return n && n.__esModule ? n : { default: n };
          }
          function y(n, a) {
            if (!(n instanceof a))
              throw new TypeError("Cannot call a class as a function");
          }
          function d(n, a) {
            if (!n)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a == "object" || typeof a == "function") ? a : n;
          }
          function g(n, a) {
            if (typeof a != "function" && a !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof a);
            n.prototype = Object.create(a && a.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(n, a) : n.__proto__ = a);
          }
          var i = function(n) {
            g(a, n);
            function a() {
              return y(this, a), d(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments));
            }
            return a;
          }(l.default);
          i.blotName = "underline", i.tagName = "U", s.default = i;
        },
        /* 72 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var b = function() {
            function m(f, u) {
              for (var k = 0; k < u.length; k++) {
                var c = u[k];
                c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(f, c.key, c);
              }
            }
            return function(f, u, k) {
              return u && m(f.prototype, u), k && m(f, k), f;
            };
          }(), l = function m(f, u, k) {
            f === null && (f = Function.prototype);
            var c = Object.getOwnPropertyDescriptor(f, u);
            if (c === void 0) {
              var w = Object.getPrototypeOf(f);
              return w === null ? void 0 : m(w, u, k);
            } else {
              if ("value" in c)
                return c.value;
              var M = c.get;
              return M === void 0 ? void 0 : M.call(k);
            }
          }, v = o(0), y = g(v), d = o(27);
          function g(m) {
            return m && m.__esModule ? m : { default: m };
          }
          function i(m, f) {
            if (!(m instanceof f))
              throw new TypeError("Cannot call a class as a function");
          }
          function n(m, f) {
            if (!m)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return f && (typeof f == "object" || typeof f == "function") ? f : m;
          }
          function a(m, f) {
            if (typeof f != "function" && f !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof f);
            m.prototype = Object.create(f && f.prototype, { constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 } }), f && (Object.setPrototypeOf ? Object.setPrototypeOf(m, f) : m.__proto__ = f);
          }
          var p = ["alt", "height", "width"], h = function(m) {
            a(f, m);
            function f() {
              return i(this, f), n(this, (f.__proto__ || Object.getPrototypeOf(f)).apply(this, arguments));
            }
            return b(f, [{
              key: "format",
              value: function(k, c) {
                p.indexOf(k) > -1 ? c ? this.domNode.setAttribute(k, c) : this.domNode.removeAttribute(k) : l(f.prototype.__proto__ || Object.getPrototypeOf(f.prototype), "format", this).call(this, k, c);
              }
            }], [{
              key: "create",
              value: function(k) {
                var c = l(f.__proto__ || Object.getPrototypeOf(f), "create", this).call(this, k);
                return typeof k == "string" && c.setAttribute("src", this.sanitize(k)), c;
              }
            }, {
              key: "formats",
              value: function(k) {
                return p.reduce(function(c, w) {
                  return k.hasAttribute(w) && (c[w] = k.getAttribute(w)), c;
                }, {});
              }
            }, {
              key: "match",
              value: function(k) {
                return /\.(jpe?g|gif|png)$/.test(k) || /^data:image\/.+;base64/.test(k);
              }
            }, {
              key: "sanitize",
              value: function(k) {
                return (0, d.sanitize)(k, ["http", "https", "data"]) ? k : "//:0";
              }
            }, {
              key: "value",
              value: function(k) {
                return k.getAttribute("src");
              }
            }]), f;
          }(y.default.Embed);
          h.blotName = "image", h.tagName = "IMG", s.default = h;
        },
        /* 73 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var b = function() {
            function m(f, u) {
              for (var k = 0; k < u.length; k++) {
                var c = u[k];
                c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(f, c.key, c);
              }
            }
            return function(f, u, k) {
              return u && m(f.prototype, u), k && m(f, k), f;
            };
          }(), l = function m(f, u, k) {
            f === null && (f = Function.prototype);
            var c = Object.getOwnPropertyDescriptor(f, u);
            if (c === void 0) {
              var w = Object.getPrototypeOf(f);
              return w === null ? void 0 : m(w, u, k);
            } else {
              if ("value" in c)
                return c.value;
              var M = c.get;
              return M === void 0 ? void 0 : M.call(k);
            }
          }, v = o(4), y = o(27), d = g(y);
          function g(m) {
            return m && m.__esModule ? m : { default: m };
          }
          function i(m, f) {
            if (!(m instanceof f))
              throw new TypeError("Cannot call a class as a function");
          }
          function n(m, f) {
            if (!m)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return f && (typeof f == "object" || typeof f == "function") ? f : m;
          }
          function a(m, f) {
            if (typeof f != "function" && f !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof f);
            m.prototype = Object.create(f && f.prototype, { constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 } }), f && (Object.setPrototypeOf ? Object.setPrototypeOf(m, f) : m.__proto__ = f);
          }
          var p = ["height", "width"], h = function(m) {
            a(f, m);
            function f() {
              return i(this, f), n(this, (f.__proto__ || Object.getPrototypeOf(f)).apply(this, arguments));
            }
            return b(f, [{
              key: "format",
              value: function(k, c) {
                p.indexOf(k) > -1 ? c ? this.domNode.setAttribute(k, c) : this.domNode.removeAttribute(k) : l(f.prototype.__proto__ || Object.getPrototypeOf(f.prototype), "format", this).call(this, k, c);
              }
            }], [{
              key: "create",
              value: function(k) {
                var c = l(f.__proto__ || Object.getPrototypeOf(f), "create", this).call(this, k);
                return c.setAttribute("frameborder", "0"), c.setAttribute("allowfullscreen", !0), c.setAttribute("src", this.sanitize(k)), c;
              }
            }, {
              key: "formats",
              value: function(k) {
                return p.reduce(function(c, w) {
                  return k.hasAttribute(w) && (c[w] = k.getAttribute(w)), c;
                }, {});
              }
            }, {
              key: "sanitize",
              value: function(k) {
                return d.default.sanitize(k);
              }
            }, {
              key: "value",
              value: function(k) {
                return k.getAttribute("src");
              }
            }]), f;
          }(v.BlockEmbed);
          h.blotName = "video", h.className = "ql-video", h.tagName = "IFRAME", s.default = h;
        },
        /* 74 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.default = s.FormulaBlot = void 0;
          var b = function() {
            function k(c, w) {
              for (var M = 0; M < w.length; M++) {
                var $ = w[M];
                $.enumerable = $.enumerable || !1, $.configurable = !0, "value" in $ && ($.writable = !0), Object.defineProperty(c, $.key, $);
              }
            }
            return function(c, w, M) {
              return w && k(c.prototype, w), M && k(c, M), c;
            };
          }(), l = function k(c, w, M) {
            c === null && (c = Function.prototype);
            var $ = Object.getOwnPropertyDescriptor(c, w);
            if ($ === void 0) {
              var A = Object.getPrototypeOf(c);
              return A === null ? void 0 : k(A, w, M);
            } else {
              if ("value" in $)
                return $.value;
              var P = $.get;
              return P === void 0 ? void 0 : P.call(M);
            }
          }, v = o(35), y = a(v), d = o(5), g = a(d), i = o(9), n = a(i);
          function a(k) {
            return k && k.__esModule ? k : { default: k };
          }
          function p(k, c) {
            if (!(k instanceof c))
              throw new TypeError("Cannot call a class as a function");
          }
          function h(k, c) {
            if (!k)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return c && (typeof c == "object" || typeof c == "function") ? c : k;
          }
          function m(k, c) {
            if (typeof c != "function" && c !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof c);
            k.prototype = Object.create(c && c.prototype, { constructor: { value: k, enumerable: !1, writable: !0, configurable: !0 } }), c && (Object.setPrototypeOf ? Object.setPrototypeOf(k, c) : k.__proto__ = c);
          }
          var f = function(k) {
            m(c, k);
            function c() {
              return p(this, c), h(this, (c.__proto__ || Object.getPrototypeOf(c)).apply(this, arguments));
            }
            return b(c, null, [{
              key: "create",
              value: function(M) {
                var $ = l(c.__proto__ || Object.getPrototypeOf(c), "create", this).call(this, M);
                return typeof M == "string" && (window.katex.render(M, $, {
                  throwOnError: !1,
                  errorColor: "#f00"
                }), $.setAttribute("data-value", M)), $;
              }
            }, {
              key: "value",
              value: function(M) {
                return M.getAttribute("data-value");
              }
            }]), c;
          }(y.default);
          f.blotName = "formula", f.className = "ql-formula", f.tagName = "SPAN";
          var u = function(k) {
            m(c, k), b(c, null, [{
              key: "register",
              value: function() {
                g.default.register(f, !0);
              }
            }]);
            function c() {
              p(this, c);
              var w = h(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this));
              if (window.katex == null)
                throw new Error("Formula module requires KaTeX.");
              return w;
            }
            return c;
          }(n.default);
          s.FormulaBlot = f, s.default = u;
        },
        /* 75 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.default = s.CodeToken = s.CodeBlock = void 0;
          var b = function() {
            function M($, A) {
              for (var P = 0; P < A.length; P++) {
                var O = A[P];
                O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty($, O.key, O);
              }
            }
            return function($, A, P) {
              return A && M($.prototype, A), P && M($, P), $;
            };
          }(), l = function M($, A, P) {
            $ === null && ($ = Function.prototype);
            var O = Object.getOwnPropertyDescriptor($, A);
            if (O === void 0) {
              var x = Object.getPrototypeOf($);
              return x === null ? void 0 : M(x, A, P);
            } else {
              if ("value" in O)
                return O.value;
              var E = O.get;
              return E === void 0 ? void 0 : E.call(P);
            }
          }, v = o(0), y = h(v), d = o(5), g = h(d), i = o(9), n = h(i), a = o(13), p = h(a);
          function h(M) {
            return M && M.__esModule ? M : { default: M };
          }
          function m(M, $) {
            if (!(M instanceof $))
              throw new TypeError("Cannot call a class as a function");
          }
          function f(M, $) {
            if (!M)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return $ && (typeof $ == "object" || typeof $ == "function") ? $ : M;
          }
          function u(M, $) {
            if (typeof $ != "function" && $ !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof $);
            M.prototype = Object.create($ && $.prototype, { constructor: { value: M, enumerable: !1, writable: !0, configurable: !0 } }), $ && (Object.setPrototypeOf ? Object.setPrototypeOf(M, $) : M.__proto__ = $);
          }
          var k = function(M) {
            u($, M);
            function $() {
              return m(this, $), f(this, ($.__proto__ || Object.getPrototypeOf($)).apply(this, arguments));
            }
            return b($, [{
              key: "replaceWith",
              value: function(P) {
                this.domNode.textContent = this.domNode.textContent, this.attach(), l($.prototype.__proto__ || Object.getPrototypeOf($.prototype), "replaceWith", this).call(this, P);
              }
            }, {
              key: "highlight",
              value: function(P) {
                var O = this.domNode.textContent;
                this.cachedText !== O && ((O.trim().length > 0 || this.cachedText == null) && (this.domNode.innerHTML = P(O), this.domNode.normalize(), this.attach()), this.cachedText = O);
              }
            }]), $;
          }(p.default);
          k.className = "ql-syntax";
          var c = new y.default.Attributor.Class("token", "hljs", {
            scope: y.default.Scope.INLINE
          }), w = function(M) {
            u($, M), b($, null, [{
              key: "register",
              value: function() {
                g.default.register(c, !0), g.default.register(k, !0);
              }
            }]);
            function $(A, P) {
              m(this, $);
              var O = f(this, ($.__proto__ || Object.getPrototypeOf($)).call(this, A, P));
              if (typeof O.options.highlight != "function")
                throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
              var x = null;
              return O.quill.on(g.default.events.SCROLL_OPTIMIZE, function() {
                clearTimeout(x), x = setTimeout(function() {
                  O.highlight(), x = null;
                }, O.options.interval);
              }), O.highlight(), O;
            }
            return b($, [{
              key: "highlight",
              value: function() {
                var P = this;
                if (!this.quill.selection.composing) {
                  this.quill.update(g.default.sources.USER);
                  var O = this.quill.getSelection();
                  this.quill.scroll.descendants(k).forEach(function(x) {
                    x.highlight(P.options.highlight);
                  }), this.quill.update(g.default.sources.SILENT), O != null && this.quill.setSelection(O, g.default.sources.SILENT);
                }
              }
            }]), $;
          }(n.default);
          w.DEFAULTS = {
            highlight: function() {
              return window.hljs == null ? null : function(M) {
                var $ = window.hljs.highlightAuto(M);
                return $.value;
              };
            }(),
            interval: 1e3
          }, s.CodeBlock = k, s.CodeToken = c, s.default = w;
        },
        /* 76 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>';
        },
        /* 77 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>';
        },
        /* 78 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>';
        },
        /* 79 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>';
        },
        /* 80 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>';
        },
        /* 81 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>';
        },
        /* 82 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>';
        },
        /* 83 */
        /***/
        function(t, s) {
          t.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>';
        },
        /* 84 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>';
        },
        /* 85 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>';
        },
        /* 86 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>';
        },
        /* 87 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>';
        },
        /* 88 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>';
        },
        /* 89 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>';
        },
        /* 90 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>';
        },
        /* 91 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>';
        },
        /* 92 */
        /***/
        function(t, s) {
          t.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>';
        },
        /* 93 */
        /***/
        function(t, s) {
          t.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>';
        },
        /* 94 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>';
        },
        /* 95 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>';
        },
        /* 96 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>';
        },
        /* 97 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>';
        },
        /* 98 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>';
        },
        /* 99 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>';
        },
        /* 100 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>';
        },
        /* 101 */
        /***/
        function(t, s) {
          t.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>';
        },
        /* 102 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>';
        },
        /* 103 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>';
        },
        /* 104 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>';
        },
        /* 105 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>';
        },
        /* 106 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>';
        },
        /* 107 */
        /***/
        function(t, s) {
          t.exports = '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>';
        },
        /* 108 */
        /***/
        function(t, s, o) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.default = s.BubbleTooltip = void 0;
          var b = function $(A, P, O) {
            A === null && (A = Function.prototype);
            var x = Object.getOwnPropertyDescriptor(A, P);
            if (x === void 0) {
              var E = Object.getPrototypeOf(A);
              return E === null ? void 0 : $(E, P, O);
            } else {
              if ("value" in x)
                return x.value;
              var T = x.get;
              return T === void 0 ? void 0 : T.call(O);
            }
          }, l = function() {
            function $(A, P) {
              for (var O = 0; O < P.length; O++) {
                var x = P[O];
                x.enumerable = x.enumerable || !1, x.configurable = !0, "value" in x && (x.writable = !0), Object.defineProperty(A, x.key, x);
              }
            }
            return function(A, P, O) {
              return P && $(A.prototype, P), O && $(A, O), A;
            };
          }(), v = o(3), y = m(v), d = o(8), g = m(d), i = o(43), n = m(i), a = o(15), p = o(41), h = m(p);
          function m($) {
            return $ && $.__esModule ? $ : { default: $ };
          }
          function f($, A) {
            if (!($ instanceof A))
              throw new TypeError("Cannot call a class as a function");
          }
          function u($, A) {
            if (!$)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return A && (typeof A == "object" || typeof A == "function") ? A : $;
          }
          function k($, A) {
            if (typeof A != "function" && A !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof A);
            $.prototype = Object.create(A && A.prototype, { constructor: { value: $, enumerable: !1, writable: !0, configurable: !0 } }), A && (Object.setPrototypeOf ? Object.setPrototypeOf($, A) : $.__proto__ = A);
          }
          var c = [["bold", "italic", "link"], [{ header: 1 }, { header: 2 }, "blockquote"]], w = function($) {
            k(A, $);
            function A(P, O) {
              f(this, A), O.modules.toolbar != null && O.modules.toolbar.container == null && (O.modules.toolbar.container = c);
              var x = u(this, (A.__proto__ || Object.getPrototypeOf(A)).call(this, P, O));
              return x.quill.container.classList.add("ql-bubble"), x;
            }
            return l(A, [{
              key: "extendToolbar",
              value: function(O) {
                this.tooltip = new M(this.quill, this.options.bounds), this.tooltip.root.appendChild(O.container), this.buildButtons([].slice.call(O.container.querySelectorAll("button")), h.default), this.buildPickers([].slice.call(O.container.querySelectorAll("select")), h.default);
              }
            }]), A;
          }(n.default);
          w.DEFAULTS = (0, y.default)(!0, {}, n.default.DEFAULTS, {
            modules: {
              toolbar: {
                handlers: {
                  link: function(A) {
                    A ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1);
                  }
                }
              }
            }
          });
          var M = function($) {
            k(A, $);
            function A(P, O) {
              f(this, A);
              var x = u(this, (A.__proto__ || Object.getPrototypeOf(A)).call(this, P, O));
              return x.quill.on(g.default.events.EDITOR_CHANGE, function(E, T, L, D) {
                if (E === g.default.events.SELECTION_CHANGE)
                  if (T != null && T.length > 0 && D === g.default.sources.USER) {
                    x.show(), x.root.style.left = "0px", x.root.style.width = "", x.root.style.width = x.root.offsetWidth + "px";
                    var z = x.quill.getLines(T.index, T.length);
                    if (z.length === 1)
                      x.position(x.quill.getBounds(T));
                    else {
                      var U = z[z.length - 1], te = x.quill.getIndex(U), F = Math.min(U.length() - 1, T.index + T.length - te), j = x.quill.getBounds(new a.Range(te, F));
                      x.position(j);
                    }
                  } else
                    document.activeElement !== x.textbox && x.quill.hasFocus() && x.hide();
              }), x;
            }
            return l(A, [{
              key: "listen",
              value: function() {
                var O = this;
                b(A.prototype.__proto__ || Object.getPrototypeOf(A.prototype), "listen", this).call(this), this.root.querySelector(".ql-close").addEventListener("click", function() {
                  O.root.classList.remove("ql-editing");
                }), this.quill.on(g.default.events.SCROLL_OPTIMIZE, function() {
                  setTimeout(function() {
                    if (!O.root.classList.contains("ql-hidden")) {
                      var x = O.quill.getSelection();
                      x != null && O.position(O.quill.getBounds(x));
                    }
                  }, 1);
                });
              }
            }, {
              key: "cancel",
              value: function() {
                this.show();
              }
            }, {
              key: "position",
              value: function(O) {
                var x = b(A.prototype.__proto__ || Object.getPrototypeOf(A.prototype), "position", this).call(this, O), E = this.root.querySelector(".ql-tooltip-arrow");
                if (E.style.marginLeft = "", x === 0)
                  return x;
                E.style.marginLeft = -1 * x - E.offsetWidth / 2 + "px";
              }
            }]), A;
          }(i.BaseTooltip);
          M.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""), s.BubbleTooltip = M, s.default = w;
        },
        /* 109 */
        /***/
        function(t, s, o) {
          t.exports = o(63);
        }
        /******/
      ]).default
    );
  });
})(Lu);
const cr = /* @__PURE__ */ mi(br);
var Qt = -1, Kt = 1, Tt = 0;
function Zn(e, r, t, s) {
  if (e === r)
    return e ? [[Tt, e]] : [];
  if (t != null) {
    var o = ju(e, r, t);
    if (o)
      return o;
  }
  var b = Er(e, r), l = e.substring(0, b);
  e = e.substring(b), r = r.substring(b), b = $r(e, r);
  var v = e.substring(e.length - b);
  e = e.substring(0, e.length - b), r = r.substring(0, r.length - b);
  var y = Pu(e, r);
  return l && y.unshift([Tt, l]), v && y.push([Tt, v]), Yr(y, s), y;
}
function Pu(e, r) {
  var t;
  if (!e)
    return [[Kt, r]];
  if (!r)
    return [[Qt, e]];
  var s = e.length > r.length ? e : r, o = e.length > r.length ? r : e, b = s.indexOf(o);
  if (b !== -1)
    return t = [
      [Kt, s.substring(0, b)],
      [Tt, o],
      [Kt, s.substring(b + o.length)]
    ], e.length > r.length && (t[0][0] = t[2][0] = Qt), t;
  if (o.length === 1)
    return [[Qt, e], [Kt, r]];
  var l = Iu(e, r);
  if (l) {
    var v = l[0], y = l[1], d = l[2], g = l[3], i = l[4], n = Zn(v, d), a = Zn(y, g);
    return n.concat([[Tt, i]], a);
  }
  return Du(e, r);
}
function Du(e, r) {
  for (var t = e.length, s = r.length, o = Math.ceil((t + s) / 2), b = o, l = 2 * o, v = new Array(l), y = new Array(l), d = 0; d < l; d++)
    v[d] = -1, y[d] = -1;
  v[b + 1] = 0, y[b + 1] = 0;
  for (var g = t - s, i = g % 2 !== 0, n = 0, a = 0, p = 0, h = 0, m = 0; m < o; m++) {
    for (var f = -m + n; f <= m - a; f += 2) {
      var u = b + f, k;
      f === -m || f !== m && v[u - 1] < v[u + 1] ? k = v[u + 1] : k = v[u - 1] + 1;
      for (var c = k - f; k < t && c < s && e.charAt(k) === r.charAt(c); )
        k++, c++;
      if (v[u] = k, k > t)
        a += 2;
      else if (c > s)
        n += 2;
      else if (i) {
        var w = b + g - f;
        if (w >= 0 && w < l && y[w] !== -1) {
          var M = t - y[w];
          if (k >= M)
            return Nr(e, r, k, c);
        }
      }
    }
    for (var $ = -m + p; $ <= m - h; $ += 2) {
      var w = b + $, M;
      $ === -m || $ !== m && y[w - 1] < y[w + 1] ? M = y[w + 1] : M = y[w - 1] + 1;
      for (var A = M - $; M < t && A < s && e.charAt(t - M - 1) === r.charAt(s - A - 1); )
        M++, A++;
      if (y[w] = M, M > t)
        h += 2;
      else if (A > s)
        p += 2;
      else if (!i) {
        var u = b + g - $;
        if (u >= 0 && u < l && v[u] !== -1) {
          var k = v[u], c = b + k - u;
          if (M = t - M, k >= M)
            return Nr(e, r, k, c);
        }
      }
    }
  }
  return [[Qt, e], [Kt, r]];
}
function Nr(e, r, t, s) {
  var o = e.substring(0, t), b = r.substring(0, s), l = e.substring(t), v = r.substring(s), y = Zn(o, b), d = Zn(l, v);
  return y.concat(d);
}
function Er(e, r) {
  if (!e || !r || e.charAt(0) !== r.charAt(0))
    return 0;
  for (var t = 0, s = Math.min(e.length, r.length), o = s, b = 0; t < o; )
    e.substring(b, o) == r.substring(b, o) ? (t = o, b = t) : s = o, o = Math.floor((s - t) / 2 + t);
  return Kr(e.charCodeAt(o - 1)) && o--, o;
}
function $r(e, r) {
  if (!e || !r || e.slice(-1) !== r.slice(-1))
    return 0;
  for (var t = 0, s = Math.min(e.length, r.length), o = s, b = 0; t < o; )
    e.substring(e.length - o, e.length - b) == r.substring(r.length - o, r.length - b) ? (t = o, b = t) : s = o, o = Math.floor((s - t) / 2 + t);
  return Wr(e.charCodeAt(e.length - o)) && o--, o;
}
function Iu(e, r) {
  var t = e.length > r.length ? e : r, s = e.length > r.length ? r : e;
  if (t.length < 4 || s.length * 2 < t.length)
    return null;
  function o(a, p, h) {
    for (var m = a.substring(h, h + Math.floor(a.length / 4)), f = -1, u = "", k, c, w, M; (f = p.indexOf(m, f + 1)) !== -1; ) {
      var $ = Er(
        a.substring(h),
        p.substring(f)
      ), A = $r(
        a.substring(0, h),
        p.substring(0, f)
      );
      u.length < A + $ && (u = p.substring(
        f - A,
        f
      ) + p.substring(f, f + $), k = a.substring(0, h - A), c = a.substring(h + $), w = p.substring(0, f - A), M = p.substring(f + $));
    }
    return u.length * 2 >= a.length ? [
      k,
      c,
      w,
      M,
      u
    ] : null;
  }
  var b = o(t, s, Math.ceil(t.length / 4)), l = o(t, s, Math.ceil(t.length / 2)), v;
  if (!b && !l)
    return null;
  l ? b ? v = b[4].length > l[4].length ? b : l : v = l : v = b;
  var y, d, g, i;
  e.length > r.length ? (y = v[0], d = v[1], g = v[2], i = v[3]) : (g = v[0], i = v[1], y = v[2], d = v[3]);
  var n = v[4];
  return [y, d, g, i, n];
}
function Yr(e, r) {
  e.push([Tt, ""]);
  for (var t = 0, s = 0, o = 0, b = "", l = "", v; t < e.length; ) {
    if (t < e.length - 1 && !e[t][1]) {
      e.splice(t, 1);
      continue;
    }
    switch (e[t][0]) {
      case Kt:
        o++, l += e[t][1], t++;
        break;
      case Qt:
        s++, b += e[t][1], t++;
        break;
      case Tt:
        var y = t - o - s - 1;
        if (r) {
          if (y >= 0 && Zr(e[y][1])) {
            var d = e[y][1].slice(-1);
            if (e[y][1] = e[y][1].slice(0, -1), b = d + b, l = d + l, !e[y][1]) {
              e.splice(y, 1), t--;
              var g = y - 1;
              e[g] && e[g][0] === Kt && (o++, l = e[g][1] + l, g--), e[g] && e[g][0] === Qt && (s++, b = e[g][1] + b, g--), y = g;
            }
          }
          if (Gr(e[t][1])) {
            var d = e[t][1].charAt(0);
            e[t][1] = e[t][1].slice(1), b += d, l += d;
          }
        }
        if (t < e.length - 1 && !e[t][1]) {
          e.splice(t, 1);
          break;
        }
        if (b.length > 0 || l.length > 0) {
          b.length > 0 && l.length > 0 && (v = Er(l, b), v !== 0 && (y >= 0 ? e[y][1] += l.substring(0, v) : (e.splice(0, 0, [Tt, l.substring(0, v)]), t++), l = l.substring(v), b = b.substring(v)), v = $r(l, b), v !== 0 && (e[t][1] = l.substring(l.length - v) + e[t][1], l = l.substring(0, l.length - v), b = b.substring(0, b.length - v)));
          var i = o + s;
          b.length === 0 && l.length === 0 ? (e.splice(t - i, i), t = t - i) : b.length === 0 ? (e.splice(t - i, i, [Kt, l]), t = t - i + 1) : l.length === 0 ? (e.splice(t - i, i, [Qt, b]), t = t - i + 1) : (e.splice(t - i, i, [Qt, b], [Kt, l]), t = t - i + 2);
        }
        t !== 0 && e[t - 1][0] === Tt ? (e[t - 1][1] += e[t][1], e.splice(t, 1)) : t++, o = 0, s = 0, b = "", l = "";
        break;
    }
  }
  e[e.length - 1][1] === "" && e.pop();
  var n = !1;
  for (t = 1; t < e.length - 1; )
    e[t - 1][0] === Tt && e[t + 1][0] === Tt && (e[t][1].substring(e[t][1].length - e[t - 1][1].length) === e[t - 1][1] ? (e[t][1] = e[t - 1][1] + e[t][1].substring(0, e[t][1].length - e[t - 1][1].length), e[t + 1][1] = e[t - 1][1] + e[t + 1][1], e.splice(t - 1, 1), n = !0) : e[t][1].substring(0, e[t + 1][1].length) == e[t + 1][1] && (e[t - 1][1] += e[t + 1][1], e[t][1] = e[t][1].substring(e[t + 1][1].length) + e[t + 1][1], e.splice(t + 1, 1), n = !0)), t++;
  n && Yr(e, r);
}
function Kr(e) {
  return e >= 55296 && e <= 56319;
}
function Wr(e) {
  return e >= 56320 && e <= 57343;
}
function Gr(e) {
  return Wr(e.charCodeAt(0));
}
function Zr(e) {
  return Kr(e.charCodeAt(e.length - 1));
}
function Bu(e) {
  for (var r = [], t = 0; t < e.length; t++)
    e[t][1].length > 0 && r.push(e[t]);
  return r;
}
function fr(e, r, t, s) {
  return Zr(e) || Gr(s) ? null : Bu([
    [Tt, e],
    [Qt, r],
    [Kt, t],
    [Tt, s]
  ]);
}
function ju(e, r, t) {
  var s = typeof t == "number" ? { index: t, length: 0 } : t.oldRange, o = typeof t == "number" ? null : t.newRange, b = e.length, l = r.length;
  if (s.length === 0 && (o === null || o.length === 0)) {
    var v = s.index, y = e.slice(0, v), d = e.slice(v), g = o ? o.index : null;
    e: {
      var i = v + l - b;
      if (g !== null && g !== i || i < 0 || i > l)
        break e;
      var n = r.slice(0, i), a = r.slice(i);
      if (a !== d)
        break e;
      var p = Math.min(v, i), h = y.slice(0, p), m = n.slice(0, p);
      if (h !== m)
        break e;
      var f = y.slice(p), u = n.slice(p);
      return fr(h, f, u, d);
    }
    e: {
      if (g !== null && g !== v)
        break e;
      var k = v, n = r.slice(0, k), a = r.slice(k);
      if (n !== y)
        break e;
      var c = Math.min(b - k, l - k), w = d.slice(d.length - c), M = a.slice(a.length - c);
      if (w !== M)
        break e;
      var f = d.slice(0, d.length - c), u = a.slice(0, a.length - c);
      return fr(y, f, u, w);
    }
  }
  if (s.length > 0 && o && o.length === 0)
    e: {
      var h = e.slice(0, s.index), w = e.slice(s.index + s.length), p = h.length, c = w.length;
      if (l < p + c)
        break e;
      var m = r.slice(0, p), M = r.slice(l - c);
      if (h !== m || w !== M)
        break e;
      var f = e.slice(p, b - c), u = r.slice(p, l - c);
      return fr(h, f, u, w);
    }
  return null;
}
function ur(e, r, t) {
  return Zn(e, r, t, !0);
}
ur.INSERT = Kt;
ur.DELETE = Qt;
ur.EQUAL = Tt;
var qu = ur, Xn = {}, Ru = {
  get exports() {
    return Xn;
  },
  set exports(e) {
    Xn = e;
  }
};
(function(e, r) {
  var t = 200, s = "__lodash_hash_undefined__", o = 9007199254740991, b = "[object Arguments]", l = "[object Array]", v = "[object Boolean]", y = "[object Date]", d = "[object Error]", g = "[object Function]", i = "[object GeneratorFunction]", n = "[object Map]", a = "[object Number]", p = "[object Object]", h = "[object Promise]", m = "[object RegExp]", f = "[object Set]", u = "[object String]", k = "[object Symbol]", c = "[object WeakMap]", w = "[object ArrayBuffer]", M = "[object DataView]", $ = "[object Float32Array]", A = "[object Float64Array]", P = "[object Int8Array]", O = "[object Int16Array]", x = "[object Int32Array]", E = "[object Uint8Array]", T = "[object Uint8ClampedArray]", L = "[object Uint16Array]", D = "[object Uint32Array]", z = /[\\^$.*+?()[\]{}|]/g, U = /\w*$/, te = /^\[object .+?Constructor\]$/, F = /^(?:0|[1-9]\d*)$/, j = {};
  j[b] = j[l] = j[w] = j[M] = j[v] = j[y] = j[$] = j[A] = j[P] = j[O] = j[x] = j[n] = j[a] = j[p] = j[m] = j[f] = j[u] = j[k] = j[E] = j[T] = j[L] = j[D] = !0, j[d] = j[g] = j[c] = !1;
  var C = typeof at == "object" && at && at.Object === Object && at, q = typeof self == "object" && self && self.Object === Object && self, R = C || q || Function("return this")(), X = r && !r.nodeType && r, H = X && !0 && e && !e.nodeType && e, I = H && H.exports === X;
  function Y(_, B) {
    return _.set(B[0], B[1]), _;
  }
  function Q(_, B) {
    return _.add(B), _;
  }
  function ee(_, B) {
    for (var W = -1, re = _ ? _.length : 0; ++W < re && B(_[W], W, _) !== !1; )
      ;
    return _;
  }
  function oe(_, B) {
    for (var W = -1, re = B.length, Le = _.length; ++W < re; )
      _[Le + W] = B[W];
    return _;
  }
  function ve(_, B, W, re) {
    var Le = -1, Se = _ ? _.length : 0;
    for (re && Se && (W = _[++Le]); ++Le < Se; )
      W = B(W, _[Le], Le, _);
    return W;
  }
  function Oe(_, B) {
    for (var W = -1, re = Array(_); ++W < _; )
      re[W] = B(W);
    return re;
  }
  function Me(_, B) {
    return _ == null ? void 0 : _[B];
  }
  function De(_) {
    var B = !1;
    if (_ != null && typeof _.toString != "function")
      try {
        B = !!(_ + "");
      } catch {
      }
    return B;
  }
  function qe(_) {
    var B = -1, W = Array(_.size);
    return _.forEach(function(re, Le) {
      W[++B] = [Le, re];
    }), W;
  }
  function ut(_, B) {
    return function(W) {
      return _(B(W));
    };
  }
  function tt(_) {
    var B = -1, W = Array(_.size);
    return _.forEach(function(re) {
      W[++B] = re;
    }), W;
  }
  var ie = Array.prototype, le = Function.prototype, de = Object.prototype, ye = R["__core-js_shared__"], ue = function() {
    var _ = /[^.]+$/.exec(ye && ye.keys && ye.keys.IE_PROTO || "");
    return _ ? "Symbol(src)_1." + _ : "";
  }(), Pe = le.toString, Ae = de.hasOwnProperty, Ne = de.toString, _t = RegExp(
    "^" + Pe.call(Ae).replace(z, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), dt = I ? R.Buffer : void 0, He = R.Symbol, Z = R.Uint8Array, N = ut(Object.getPrototypeOf, Object), ce = Object.create, be = de.propertyIsEnumerable, me = ie.splice, xe = Object.getOwnPropertySymbols, Re = dt ? dt.isBuffer : void 0, nt = ut(Object.keys, Object), Xe = Lt(R, "DataView"), wt = Lt(R, "Map"), Ke = Lt(R, "Promise"), Te = Lt(R, "Set"), Et = Lt(R, "WeakMap"), We = Lt(Object, "create"), ht = fe(Xe), Ut = fe(wt), $t = fe(Ke), jt = fe(Te), Wt = fe(Et), Ct = He ? He.prototype : void 0, On = Ct ? Ct.valueOf : void 0;
  function vt(_) {
    var B = -1, W = _ ? _.length : 0;
    for (this.clear(); ++B < W; ) {
      var re = _[B];
      this.set(re[0], re[1]);
    }
  }
  function Ln() {
    this.__data__ = We ? We(null) : {};
  }
  function xn(_) {
    return this.has(_) && delete this.__data__[_];
  }
  function Pn(_) {
    var B = this.__data__;
    if (We) {
      var W = B[_];
      return W === s ? void 0 : W;
    }
    return Ae.call(B, _) ? B[_] : void 0;
  }
  function Sn(_) {
    var B = this.__data__;
    return We ? B[_] !== void 0 : Ae.call(B, _);
  }
  function cn(_, B) {
    var W = this.__data__;
    return W[_] = We && B === void 0 ? s : B, this;
  }
  vt.prototype.clear = Ln, vt.prototype.delete = xn, vt.prototype.get = Pn, vt.prototype.has = Sn, vt.prototype.set = cn;
  function pt(_) {
    var B = -1, W = _ ? _.length : 0;
    for (this.clear(); ++B < W; ) {
      var re = _[B];
      this.set(re[0], re[1]);
    }
  }
  function fn() {
    this.__data__ = [];
  }
  function dn(_) {
    var B = this.__data__, W = ln(B, _);
    if (W < 0)
      return !1;
    var re = B.length - 1;
    return W == re ? B.pop() : me.call(B, W, 1), !0;
  }
  function En(_) {
    var B = this.__data__, W = ln(B, _);
    return W < 0 ? void 0 : B[W][1];
  }
  function Dn(_) {
    return ln(this.__data__, _) > -1;
  }
  function In(_, B) {
    var W = this.__data__, re = ln(W, _);
    return re < 0 ? W.push([_, B]) : W[re][1] = B, this;
  }
  pt.prototype.clear = fn, pt.prototype.delete = dn, pt.prototype.get = En, pt.prototype.has = Dn, pt.prototype.set = In;
  function yt(_) {
    var B = -1, W = _ ? _.length : 0;
    for (this.clear(); ++B < W; ) {
      var re = _[B];
      this.set(re[0], re[1]);
    }
  }
  function Bn() {
    this.__data__ = {
      hash: new vt(),
      map: new (wt || pt)(),
      string: new vt()
    };
  }
  function jn(_) {
    return Jt(this, _).delete(_);
  }
  function hn(_) {
    return Jt(this, _).get(_);
  }
  function pn(_) {
    return Jt(this, _).has(_);
  }
  function $n(_, B) {
    return Jt(this, _).set(_, B), this;
  }
  yt.prototype.clear = Bn, yt.prototype.delete = jn, yt.prototype.get = hn, yt.prototype.has = pn, yt.prototype.set = $n;
  function ct(_) {
    this.__data__ = new pt(_);
  }
  function qn() {
    this.__data__ = new pt();
  }
  function An(_) {
    return this.__data__.delete(_);
  }
  function Rn(_) {
    return this.__data__.get(_);
  }
  function Vn(_) {
    return this.__data__.has(_);
  }
  function Fn(_, B) {
    var W = this.__data__;
    if (W instanceof pt) {
      var re = W.__data__;
      if (!wt || re.length < t - 1)
        return re.push([_, B]), this;
      W = this.__data__ = new yt(re);
    }
    return W.set(_, B), this;
  }
  ct.prototype.clear = qn, ct.prototype.delete = An, ct.prototype.get = Rn, ct.prototype.has = Vn, ct.prototype.set = Fn;
  function Gt(_, B) {
    var W = et(_) || ge(_) ? Oe(_.length, String) : [], re = W.length, Le = !!re;
    for (var Se in _)
      (B || Ae.call(_, Se)) && !(Le && (Se == "length" || G(Se, re))) && W.push(Se);
    return W;
  }
  function on(_, B, W) {
    var re = _[B];
    (!(Ae.call(_, B) && Ce(re, W)) || W === void 0 && !(B in _)) && (_[B] = W);
  }
  function ln(_, B) {
    for (var W = _.length; W--; )
      if (Ce(_[W][0], B))
        return W;
    return -1;
  }
  function qt(_, B) {
    return _ && Xt(B, sn(B), _);
  }
  function mn(_, B, W, re, Le, Se, Fe) {
    var Ue;
    if (re && (Ue = Se ? re(_, Le, Se, Fe) : re(_)), Ue !== void 0)
      return Ue;
    if (!rt(_))
      return _;
    var mt = et(_);
    if (mt) {
      if (Ue = Kn(_), !B)
        return Nn(_, Ue);
    } else {
      var Ze = Yt(_), xt = Ze == g || Ze == i;
      if (Qe(_))
        return zt(_, B);
      if (Ze == p || Ze == b || xt && !Se) {
        if (De(_))
          return Se ? _ : {};
        if (Ue = Vt(xt ? {} : _), !B)
          return Hn(_, qt(Ue, _));
      } else {
        if (!j[Ze])
          return Se ? _ : {};
        Ue = an(_, Ze, mn, B);
      }
    }
    Fe || (Fe = new ct());
    var At = Fe.get(_);
    if (At)
      return At;
    if (Fe.set(_, Ue), !mt)
      var gt = W ? Yn(_) : sn(_);
    return ee(gt || _, function(St, kt) {
      gt && (kt = St, St = _[kt]), on(Ue, kt, mn(St, B, W, re, kt, _, Fe));
    }), Ue;
  }
  function Un(_) {
    return rt(_) ? ce(_) : {};
  }
  function vn(_, B, W) {
    var re = B(_);
    return et(_) ? re : oe(re, W(_));
  }
  function zn(_) {
    return Ne.call(_);
  }
  function en(_) {
    if (!rt(_) || ne(_))
      return !1;
    var B = Ve(_) || De(_) ? _t : te;
    return B.test(fe(_));
  }
  function it(_) {
    if (!se(_))
      return nt(_);
    var B = [];
    for (var W in Object(_))
      Ae.call(_, W) && W != "constructor" && B.push(W);
    return B;
  }
  function zt(_, B) {
    if (B)
      return _.slice();
    var W = new _.constructor(_.length);
    return _.copy(W), W;
  }
  function tn(_) {
    var B = new _.constructor(_.byteLength);
    return new Z(B).set(new Z(_)), B;
  }
  function Zt(_, B) {
    var W = B ? tn(_.buffer) : _.buffer;
    return new _.constructor(W, _.byteOffset, _.byteLength);
  }
  function yn(_, B, W) {
    var re = B ? W(qe(_), !0) : qe(_);
    return ve(re, Y, new _.constructor());
  }
  function Tn(_) {
    var B = new _.constructor(_.source, U.exec(_));
    return B.lastIndex = _.lastIndex, B;
  }
  function gn(_, B, W) {
    var re = B ? W(tt(_), !0) : tt(_);
    return ve(re, Q, new _.constructor());
  }
  function Ht(_) {
    return On ? Object(On.call(_)) : {};
  }
  function Mn(_, B) {
    var W = B ? tn(_.buffer) : _.buffer;
    return new _.constructor(W, _.byteOffset, _.length);
  }
  function Nn(_, B) {
    var W = -1, re = _.length;
    for (B || (B = Array(re)); ++W < re; )
      B[W] = _[W];
    return B;
  }
  function Xt(_, B, W, re) {
    W || (W = {});
    for (var Le = -1, Se = B.length; ++Le < Se; ) {
      var Fe = B[Le], Ue = re ? re(W[Fe], _[Fe], Fe, W, _) : void 0;
      on(W, Fe, Ue === void 0 ? _[Fe] : Ue);
    }
    return W;
  }
  function Hn(_, B) {
    return Xt(_, Rt(_), B);
  }
  function Yn(_) {
    return vn(_, sn, Rt);
  }
  function Jt(_, B) {
    var W = _.__data__;
    return J(B) ? W[typeof B == "string" ? "string" : "hash"] : W.map;
  }
  function Lt(_, B) {
    var W = Me(_, B);
    return en(W) ? W : void 0;
  }
  var Rt = xe ? ut(xe, Object) : bn, Yt = zn;
  (Xe && Yt(new Xe(new ArrayBuffer(1))) != M || wt && Yt(new wt()) != n || Ke && Yt(Ke.resolve()) != h || Te && Yt(new Te()) != f || Et && Yt(new Et()) != c) && (Yt = function(_) {
    var B = Ne.call(_), W = B == p ? _.constructor : void 0, re = W ? fe(W) : void 0;
    if (re)
      switch (re) {
        case ht:
          return M;
        case Ut:
          return n;
        case $t:
          return h;
        case jt:
          return f;
        case Wt:
          return c;
      }
    return B;
  });
  function Kn(_) {
    var B = _.length, W = _.constructor(B);
    return B && typeof _[0] == "string" && Ae.call(_, "index") && (W.index = _.index, W.input = _.input), W;
  }
  function Vt(_) {
    return typeof _.constructor == "function" && !se(_) ? Un(N(_)) : {};
  }
  function an(_, B, W, re) {
    var Le = _.constructor;
    switch (B) {
      case w:
        return tn(_);
      case v:
      case y:
        return new Le(+_);
      case M:
        return Zt(_, re);
      case $:
      case A:
      case P:
      case O:
      case x:
      case E:
      case T:
      case L:
      case D:
        return Mn(_, re);
      case n:
        return yn(_, re, W);
      case a:
      case u:
        return new Le(_);
      case m:
        return Tn(_);
      case f:
        return gn(_, re, W);
      case k:
        return Ht(_);
    }
  }
  function G(_, B) {
    return B = B ?? o, !!B && (typeof _ == "number" || F.test(_)) && _ > -1 && _ % 1 == 0 && _ < B;
  }
  function J(_) {
    var B = typeof _;
    return B == "string" || B == "number" || B == "symbol" || B == "boolean" ? _ !== "__proto__" : _ === null;
  }
  function ne(_) {
    return !!ue && ue in _;
  }
  function se(_) {
    var B = _ && _.constructor, W = typeof B == "function" && B.prototype || de;
    return _ === W;
  }
  function fe(_) {
    if (_ != null) {
      try {
        return Pe.call(_);
      } catch {
      }
      try {
        return _ + "";
      } catch {
      }
    }
    return "";
  }
  function he(_) {
    return mn(_, !0, !0);
  }
  function Ce(_, B) {
    return _ === B || _ !== _ && B !== B;
  }
  function ge(_) {
    return Ge(_) && Ae.call(_, "callee") && (!be.call(_, "callee") || Ne.call(_) == b);
  }
  var et = Array.isArray;
  function Je(_) {
    return _ != null && lt(_.length) && !Ve(_);
  }
  function Ge(_) {
    return ot(_) && Je(_);
  }
  var Qe = Re || Cn;
  function Ve(_) {
    var B = rt(_) ? Ne.call(_) : "";
    return B == g || B == i;
  }
  function lt(_) {
    return typeof _ == "number" && _ > -1 && _ % 1 == 0 && _ <= o;
  }
  function rt(_) {
    var B = typeof _;
    return !!_ && (B == "object" || B == "function");
  }
  function ot(_) {
    return !!_ && typeof _ == "object";
  }
  function sn(_) {
    return Je(_) ? Gt(_) : it(_);
  }
  function bn() {
    return [];
  }
  function Cn() {
    return !1;
  }
  e.exports = he;
})(Ru, Xn);
var Jn = {}, Vu = {
  get exports() {
    return Jn;
  },
  set exports(e) {
    Jn = e;
  }
};
(function(e, r) {
  var t = 200, s = "__lodash_hash_undefined__", o = 1, b = 2, l = 9007199254740991, v = "[object Arguments]", y = "[object Array]", d = "[object AsyncFunction]", g = "[object Boolean]", i = "[object Date]", n = "[object Error]", a = "[object Function]", p = "[object GeneratorFunction]", h = "[object Map]", m = "[object Number]", f = "[object Null]", u = "[object Object]", k = "[object Promise]", c = "[object Proxy]", w = "[object RegExp]", M = "[object Set]", $ = "[object String]", A = "[object Symbol]", P = "[object Undefined]", O = "[object WeakMap]", x = "[object ArrayBuffer]", E = "[object DataView]", T = "[object Float32Array]", L = "[object Float64Array]", D = "[object Int8Array]", z = "[object Int16Array]", U = "[object Int32Array]", te = "[object Uint8Array]", F = "[object Uint8ClampedArray]", j = "[object Uint16Array]", C = "[object Uint32Array]", q = /[\\^$.*+?()[\]{}|]/g, R = /^\[object .+?Constructor\]$/, X = /^(?:0|[1-9]\d*)$/, H = {};
  H[T] = H[L] = H[D] = H[z] = H[U] = H[te] = H[F] = H[j] = H[C] = !0, H[v] = H[y] = H[x] = H[g] = H[E] = H[i] = H[n] = H[a] = H[h] = H[m] = H[u] = H[w] = H[M] = H[$] = H[O] = !1;
  var I = typeof at == "object" && at && at.Object === Object && at, Y = typeof self == "object" && self && self.Object === Object && self, Q = I || Y || Function("return this")(), ee = r && !r.nodeType && r, oe = ee && !0 && e && !e.nodeType && e, ve = oe && oe.exports === ee, Oe = ve && I.process, Me = function() {
    try {
      return Oe && Oe.binding && Oe.binding("util");
    } catch {
    }
  }(), De = Me && Me.isTypedArray;
  function qe(_, B) {
    for (var W = -1, re = _ == null ? 0 : _.length, Le = 0, Se = []; ++W < re; ) {
      var Fe = _[W];
      B(Fe, W, _) && (Se[Le++] = Fe);
    }
    return Se;
  }
  function ut(_, B) {
    for (var W = -1, re = B.length, Le = _.length; ++W < re; )
      _[Le + W] = B[W];
    return _;
  }
  function tt(_, B) {
    for (var W = -1, re = _ == null ? 0 : _.length; ++W < re; )
      if (B(_[W], W, _))
        return !0;
    return !1;
  }
  function ie(_, B) {
    for (var W = -1, re = Array(_); ++W < _; )
      re[W] = B(W);
    return re;
  }
  function le(_) {
    return function(B) {
      return _(B);
    };
  }
  function de(_, B) {
    return _.has(B);
  }
  function ye(_, B) {
    return _ == null ? void 0 : _[B];
  }
  function ue(_) {
    var B = -1, W = Array(_.size);
    return _.forEach(function(re, Le) {
      W[++B] = [Le, re];
    }), W;
  }
  function Pe(_, B) {
    return function(W) {
      return _(B(W));
    };
  }
  function Ae(_) {
    var B = -1, W = Array(_.size);
    return _.forEach(function(re) {
      W[++B] = re;
    }), W;
  }
  var Ne = Array.prototype, _t = Function.prototype, dt = Object.prototype, He = Q["__core-js_shared__"], Z = _t.toString, N = dt.hasOwnProperty, ce = function() {
    var _ = /[^.]+$/.exec(He && He.keys && He.keys.IE_PROTO || "");
    return _ ? "Symbol(src)_1." + _ : "";
  }(), be = dt.toString, me = RegExp(
    "^" + Z.call(N).replace(q, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), xe = ve ? Q.Buffer : void 0, Re = Q.Symbol, nt = Q.Uint8Array, Xe = dt.propertyIsEnumerable, wt = Ne.splice, Ke = Re ? Re.toStringTag : void 0, Te = Object.getOwnPropertySymbols, Et = xe ? xe.isBuffer : void 0, We = Pe(Object.keys, Object), ht = Rt(Q, "DataView"), Ut = Rt(Q, "Map"), $t = Rt(Q, "Promise"), jt = Rt(Q, "Set"), Wt = Rt(Q, "WeakMap"), Ct = Rt(Object, "create"), On = fe(ht), vt = fe(Ut), Ln = fe($t), xn = fe(jt), Pn = fe(Wt), Sn = Re ? Re.prototype : void 0, cn = Sn ? Sn.valueOf : void 0;
  function pt(_) {
    var B = -1, W = _ == null ? 0 : _.length;
    for (this.clear(); ++B < W; ) {
      var re = _[B];
      this.set(re[0], re[1]);
    }
  }
  function fn() {
    this.__data__ = Ct ? Ct(null) : {}, this.size = 0;
  }
  function dn(_) {
    var B = this.has(_) && delete this.__data__[_];
    return this.size -= B ? 1 : 0, B;
  }
  function En(_) {
    var B = this.__data__;
    if (Ct) {
      var W = B[_];
      return W === s ? void 0 : W;
    }
    return N.call(B, _) ? B[_] : void 0;
  }
  function Dn(_) {
    var B = this.__data__;
    return Ct ? B[_] !== void 0 : N.call(B, _);
  }
  function In(_, B) {
    var W = this.__data__;
    return this.size += this.has(_) ? 0 : 1, W[_] = Ct && B === void 0 ? s : B, this;
  }
  pt.prototype.clear = fn, pt.prototype.delete = dn, pt.prototype.get = En, pt.prototype.has = Dn, pt.prototype.set = In;
  function yt(_) {
    var B = -1, W = _ == null ? 0 : _.length;
    for (this.clear(); ++B < W; ) {
      var re = _[B];
      this.set(re[0], re[1]);
    }
  }
  function Bn() {
    this.__data__ = [], this.size = 0;
  }
  function jn(_) {
    var B = this.__data__, W = zt(B, _);
    if (W < 0)
      return !1;
    var re = B.length - 1;
    return W == re ? B.pop() : wt.call(B, W, 1), --this.size, !0;
  }
  function hn(_) {
    var B = this.__data__, W = zt(B, _);
    return W < 0 ? void 0 : B[W][1];
  }
  function pn(_) {
    return zt(this.__data__, _) > -1;
  }
  function $n(_, B) {
    var W = this.__data__, re = zt(W, _);
    return re < 0 ? (++this.size, W.push([_, B])) : W[re][1] = B, this;
  }
  yt.prototype.clear = Bn, yt.prototype.delete = jn, yt.prototype.get = hn, yt.prototype.has = pn, yt.prototype.set = $n;
  function ct(_) {
    var B = -1, W = _ == null ? 0 : _.length;
    for (this.clear(); ++B < W; ) {
      var re = _[B];
      this.set(re[0], re[1]);
    }
  }
  function qn() {
    this.size = 0, this.__data__ = {
      hash: new pt(),
      map: new (Ut || yt)(),
      string: new pt()
    };
  }
  function An(_) {
    var B = Lt(this, _).delete(_);
    return this.size -= B ? 1 : 0, B;
  }
  function Rn(_) {
    return Lt(this, _).get(_);
  }
  function Vn(_) {
    return Lt(this, _).has(_);
  }
  function Fn(_, B) {
    var W = Lt(this, _), re = W.size;
    return W.set(_, B), this.size += W.size == re ? 0 : 1, this;
  }
  ct.prototype.clear = qn, ct.prototype.delete = An, ct.prototype.get = Rn, ct.prototype.has = Vn, ct.prototype.set = Fn;
  function Gt(_) {
    var B = -1, W = _ == null ? 0 : _.length;
    for (this.__data__ = new ct(); ++B < W; )
      this.add(_[B]);
  }
  function on(_) {
    return this.__data__.set(_, s), this;
  }
  function ln(_) {
    return this.__data__.has(_);
  }
  Gt.prototype.add = Gt.prototype.push = on, Gt.prototype.has = ln;
  function qt(_) {
    var B = this.__data__ = new yt(_);
    this.size = B.size;
  }
  function mn() {
    this.__data__ = new yt(), this.size = 0;
  }
  function Un(_) {
    var B = this.__data__, W = B.delete(_);
    return this.size = B.size, W;
  }
  function vn(_) {
    return this.__data__.get(_);
  }
  function zn(_) {
    return this.__data__.has(_);
  }
  function en(_, B) {
    var W = this.__data__;
    if (W instanceof yt) {
      var re = W.__data__;
      if (!Ut || re.length < t - 1)
        return re.push([_, B]), this.size = ++W.size, this;
      W = this.__data__ = new ct(re);
    }
    return W.set(_, B), this.size = W.size, this;
  }
  qt.prototype.clear = mn, qt.prototype.delete = Un, qt.prototype.get = vn, qt.prototype.has = zn, qt.prototype.set = en;
  function it(_, B) {
    var W = ge(_), re = !W && Ce(_), Le = !W && !re && Je(_), Se = !W && !re && !Le && ot(_), Fe = W || re || Le || Se, Ue = Fe ? ie(_.length, String) : [], mt = Ue.length;
    for (var Ze in _)
      (B || N.call(_, Ze)) && !(Fe && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Ze == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      Le && (Ze == "offset" || Ze == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      Se && (Ze == "buffer" || Ze == "byteLength" || Ze == "byteOffset") || // Skip index properties.
      an(Ze, mt))) && Ue.push(Ze);
    return Ue;
  }
  function zt(_, B) {
    for (var W = _.length; W--; )
      if (he(_[W][0], B))
        return W;
    return -1;
  }
  function tn(_, B, W) {
    var re = B(_);
    return ge(_) ? re : ut(re, W(_));
  }
  function Zt(_) {
    return _ == null ? _ === void 0 ? P : f : Ke && Ke in Object(_) ? Yt(_) : se(_);
  }
  function yn(_) {
    return rt(_) && Zt(_) == v;
  }
  function Tn(_, B, W, re, Le) {
    return _ === B ? !0 : _ == null || B == null || !rt(_) && !rt(B) ? _ !== _ && B !== B : gn(_, B, W, re, Tn, Le);
  }
  function gn(_, B, W, re, Le, Se) {
    var Fe = ge(_), Ue = ge(B), mt = Fe ? y : Vt(_), Ze = Ue ? y : Vt(B);
    mt = mt == v ? u : mt, Ze = Ze == v ? u : Ze;
    var xt = mt == u, At = Ze == u, gt = mt == Ze;
    if (gt && Je(_)) {
      if (!Je(B))
        return !1;
      Fe = !0, xt = !1;
    }
    if (gt && !xt)
      return Se || (Se = new qt()), Fe || ot(_) ? Xt(_, B, W, re, Le, Se) : Hn(_, B, mt, W, re, Le, Se);
    if (!(W & o)) {
      var St = xt && N.call(_, "__wrapped__"), kt = At && N.call(B, "__wrapped__");
      if (St || kt) {
        var un = St ? _.value() : _, nn = kt ? B.value() : B;
        return Se || (Se = new qt()), Le(un, nn, W, re, Se);
      }
    }
    return gt ? (Se || (Se = new qt()), Yn(_, B, W, re, Le, Se)) : !1;
  }
  function Ht(_) {
    if (!lt(_) || J(_))
      return !1;
    var B = Qe(_) ? me : R;
    return B.test(fe(_));
  }
  function Mn(_) {
    return rt(_) && Ve(_.length) && !!H[Zt(_)];
  }
  function Nn(_) {
    if (!ne(_))
      return We(_);
    var B = [];
    for (var W in Object(_))
      N.call(_, W) && W != "constructor" && B.push(W);
    return B;
  }
  function Xt(_, B, W, re, Le, Se) {
    var Fe = W & o, Ue = _.length, mt = B.length;
    if (Ue != mt && !(Fe && mt > Ue))
      return !1;
    var Ze = Se.get(_);
    if (Ze && Se.get(B))
      return Ze == B;
    var xt = -1, At = !0, gt = W & b ? new Gt() : void 0;
    for (Se.set(_, B), Se.set(B, _); ++xt < Ue; ) {
      var St = _[xt], kt = B[xt];
      if (re)
        var un = Fe ? re(kt, St, xt, B, _, Se) : re(St, kt, xt, _, B, Se);
      if (un !== void 0) {
        if (un)
          continue;
        At = !1;
        break;
      }
      if (gt) {
        if (!tt(B, function(nn, _n) {
          if (!de(gt, _n) && (St === nn || Le(St, nn, W, re, Se)))
            return gt.push(_n);
        })) {
          At = !1;
          break;
        }
      } else if (!(St === kt || Le(St, kt, W, re, Se))) {
        At = !1;
        break;
      }
    }
    return Se.delete(_), Se.delete(B), At;
  }
  function Hn(_, B, W, re, Le, Se, Fe) {
    switch (W) {
      case E:
        if (_.byteLength != B.byteLength || _.byteOffset != B.byteOffset)
          return !1;
        _ = _.buffer, B = B.buffer;
      case x:
        return !(_.byteLength != B.byteLength || !Se(new nt(_), new nt(B)));
      case g:
      case i:
      case m:
        return he(+_, +B);
      case n:
        return _.name == B.name && _.message == B.message;
      case w:
      case $:
        return _ == B + "";
      case h:
        var Ue = ue;
      case M:
        var mt = re & o;
        if (Ue || (Ue = Ae), _.size != B.size && !mt)
          return !1;
        var Ze = Fe.get(_);
        if (Ze)
          return Ze == B;
        re |= b, Fe.set(_, B);
        var xt = Xt(Ue(_), Ue(B), re, Le, Se, Fe);
        return Fe.delete(_), xt;
      case A:
        if (cn)
          return cn.call(_) == cn.call(B);
    }
    return !1;
  }
  function Yn(_, B, W, re, Le, Se) {
    var Fe = W & o, Ue = Jt(_), mt = Ue.length, Ze = Jt(B), xt = Ze.length;
    if (mt != xt && !Fe)
      return !1;
    for (var At = mt; At--; ) {
      var gt = Ue[At];
      if (!(Fe ? gt in B : N.call(B, gt)))
        return !1;
    }
    var St = Se.get(_);
    if (St && Se.get(B))
      return St == B;
    var kt = !0;
    Se.set(_, B), Se.set(B, _);
    for (var un = Fe; ++At < mt; ) {
      gt = Ue[At];
      var nn = _[gt], _n = B[gt];
      if (re)
        var Tr = Fe ? re(_n, nn, gt, B, _, Se) : re(nn, _n, gt, _, B, Se);
      if (!(Tr === void 0 ? nn === _n || Le(nn, _n, W, re, Se) : Tr)) {
        kt = !1;
        break;
      }
      un || (un = gt == "constructor");
    }
    if (kt && !un) {
      var er = _.constructor, tr = B.constructor;
      er != tr && "constructor" in _ && "constructor" in B && !(typeof er == "function" && er instanceof er && typeof tr == "function" && tr instanceof tr) && (kt = !1);
    }
    return Se.delete(_), Se.delete(B), kt;
  }
  function Jt(_) {
    return tn(_, sn, Kn);
  }
  function Lt(_, B) {
    var W = _.__data__;
    return G(B) ? W[typeof B == "string" ? "string" : "hash"] : W.map;
  }
  function Rt(_, B) {
    var W = ye(_, B);
    return Ht(W) ? W : void 0;
  }
  function Yt(_) {
    var B = N.call(_, Ke), W = _[Ke];
    try {
      _[Ke] = void 0;
      var re = !0;
    } catch {
    }
    var Le = be.call(_);
    return re && (B ? _[Ke] = W : delete _[Ke]), Le;
  }
  var Kn = Te ? function(_) {
    return _ == null ? [] : (_ = Object(_), qe(Te(_), function(B) {
      return Xe.call(_, B);
    }));
  } : bn, Vt = Zt;
  (ht && Vt(new ht(new ArrayBuffer(1))) != E || Ut && Vt(new Ut()) != h || $t && Vt($t.resolve()) != k || jt && Vt(new jt()) != M || Wt && Vt(new Wt()) != O) && (Vt = function(_) {
    var B = Zt(_), W = B == u ? _.constructor : void 0, re = W ? fe(W) : "";
    if (re)
      switch (re) {
        case On:
          return E;
        case vt:
          return h;
        case Ln:
          return k;
        case xn:
          return M;
        case Pn:
          return O;
      }
    return B;
  });
  function an(_, B) {
    return B = B ?? l, !!B && (typeof _ == "number" || X.test(_)) && _ > -1 && _ % 1 == 0 && _ < B;
  }
  function G(_) {
    var B = typeof _;
    return B == "string" || B == "number" || B == "symbol" || B == "boolean" ? _ !== "__proto__" : _ === null;
  }
  function J(_) {
    return !!ce && ce in _;
  }
  function ne(_) {
    var B = _ && _.constructor, W = typeof B == "function" && B.prototype || dt;
    return _ === W;
  }
  function se(_) {
    return be.call(_);
  }
  function fe(_) {
    if (_ != null) {
      try {
        return Z.call(_);
      } catch {
      }
      try {
        return _ + "";
      } catch {
      }
    }
    return "";
  }
  function he(_, B) {
    return _ === B || _ !== _ && B !== B;
  }
  var Ce = yn(function() {
    return arguments;
  }()) ? yn : function(_) {
    return rt(_) && N.call(_, "callee") && !Xe.call(_, "callee");
  }, ge = Array.isArray;
  function et(_) {
    return _ != null && Ve(_.length) && !Qe(_);
  }
  var Je = Et || Cn;
  function Ge(_, B) {
    return Tn(_, B);
  }
  function Qe(_) {
    if (!lt(_))
      return !1;
    var B = Zt(_);
    return B == a || B == p || B == d || B == c;
  }
  function Ve(_) {
    return typeof _ == "number" && _ > -1 && _ % 1 == 0 && _ <= l;
  }
  function lt(_) {
    var B = typeof _;
    return _ != null && (B == "object" || B == "function");
  }
  function rt(_) {
    return _ != null && typeof _ == "object";
  }
  var ot = De ? le(De) : Mn;
  function sn(_) {
    return et(_) ? it(_) : Nn(_);
  }
  function bn() {
    return [];
  }
  function Cn() {
    return !1;
  }
  e.exports = Ge;
})(Vu, Jn);
var Ar = {}, Xr = at && at.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ar, "__esModule", { value: !0 });
var Fu = Xr(Xn), Uu = Xr(Jn), _r;
(function(e) {
  function r(b, l, v) {
    b === void 0 && (b = {}), l === void 0 && (l = {}), typeof b != "object" && (b = {}), typeof l != "object" && (l = {});
    var y = Fu.default(l);
    v || (y = Object.keys(y).reduce(function(g, i) {
      return y[i] != null && (g[i] = y[i]), g;
    }, {}));
    for (var d in b)
      b[d] !== void 0 && l[d] === void 0 && (y[d] = b[d]);
    return Object.keys(y).length > 0 ? y : void 0;
  }
  e.compose = r;
  function t(b, l) {
    b === void 0 && (b = {}), l === void 0 && (l = {}), typeof b != "object" && (b = {}), typeof l != "object" && (l = {});
    var v = Object.keys(b).concat(Object.keys(l)).reduce(function(y, d) {
      return Uu.default(b[d], l[d]) || (y[d] = l[d] === void 0 ? null : l[d]), y;
    }, {});
    return Object.keys(v).length > 0 ? v : void 0;
  }
  e.diff = t;
  function s(b, l) {
    b === void 0 && (b = {}), l === void 0 && (l = {}), b = b || {};
    var v = Object.keys(l).reduce(function(y, d) {
      return l[d] !== b[d] && b[d] !== void 0 && (y[d] = l[d]), y;
    }, {});
    return Object.keys(b).reduce(function(y, d) {
      return b[d] !== l[d] && l[d] === void 0 && (y[d] = null), y;
    }, v);
  }
  e.invert = s;
  function o(b, l, v) {
    if (v === void 0 && (v = !1), typeof b != "object")
      return l;
    if (typeof l == "object") {
      if (!v)
        return l;
      var y = Object.keys(l).reduce(function(d, g) {
        return b[g] === void 0 && (d[g] = l[g]), d;
      }, {});
      return Object.keys(y).length > 0 ? y : void 0;
    }
  }
  e.transform = o;
})(_r || (_r = {}));
Ar.default = _r;
var rr = {}, ir = {}, Cr;
function zu() {
  if (Cr)
    return ir;
  Cr = 1;
  var e = at && at.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(ir, "__esModule", { value: !0 });
  var r = e(Jr()), t = (
    /** @class */
    function() {
      function s(o) {
        this.ops = o, this.index = 0, this.offset = 0;
      }
      return s.prototype.hasNext = function() {
        return this.peekLength() < 1 / 0;
      }, s.prototype.next = function(o) {
        o || (o = 1 / 0);
        var b = this.ops[this.index];
        if (b) {
          var l = this.offset, v = r.default.length(b);
          if (o >= v - l ? (o = v - l, this.index += 1, this.offset = 0) : this.offset += o, typeof b.delete == "number")
            return { delete: o };
          var y = {};
          return b.attributes && (y.attributes = b.attributes), typeof b.retain == "number" ? y.retain = o : typeof b.insert == "string" ? y.insert = b.insert.substr(l, o) : y.insert = b.insert, y;
        } else
          return { retain: 1 / 0 };
      }, s.prototype.peek = function() {
        return this.ops[this.index];
      }, s.prototype.peekLength = function() {
        return this.ops[this.index] ? r.default.length(this.ops[this.index]) - this.offset : 1 / 0;
      }, s.prototype.peekType = function() {
        return this.ops[this.index] ? typeof this.ops[this.index].delete == "number" ? "delete" : typeof this.ops[this.index].retain == "number" ? "retain" : "insert" : "retain";
      }, s.prototype.rest = function() {
        if (this.hasNext()) {
          if (this.offset === 0)
            return this.ops.slice(this.index);
          var o = this.offset, b = this.index, l = this.next(), v = this.ops.slice(this.index);
          return this.offset = o, this.index = b, [l].concat(v);
        } else
          return [];
      }, s;
    }()
  );
  return ir.default = t, ir;
}
var Lr;
function Jr() {
  if (Lr)
    return rr;
  Lr = 1;
  var e = at && at.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(rr, "__esModule", { value: !0 });
  var r = e(zu()), t;
  return function(s) {
    function o(l) {
      return new r.default(l);
    }
    s.iterator = o;
    function b(l) {
      return typeof l.delete == "number" ? l.delete : typeof l.retain == "number" ? l.retain : typeof l.insert == "string" ? l.insert.length : 1;
    }
    s.length = b;
  }(t || (t = {})), rr.default = t, rr;
}
var Qn = at && at.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, or = Qn(qu), Hu = Qn(Xn), dr = Qn(Jn), Wn = Qn(Ar), Ot = Qn(Jr()), Yu = String.fromCharCode(0), Ku = (
  /** @class */
  function() {
    function e(r) {
      Array.isArray(r) ? this.ops = r : r != null && Array.isArray(r.ops) ? this.ops = r.ops : this.ops = [];
    }
    return e.prototype.insert = function(r, t) {
      var s = {};
      return typeof r == "string" && r.length === 0 ? this : (s.insert = r, t != null && typeof t == "object" && Object.keys(t).length > 0 && (s.attributes = t), this.push(s));
    }, e.prototype.delete = function(r) {
      return r <= 0 ? this : this.push({ delete: r });
    }, e.prototype.retain = function(r, t) {
      if (r <= 0)
        return this;
      var s = { retain: r };
      return t != null && typeof t == "object" && Object.keys(t).length > 0 && (s.attributes = t), this.push(s);
    }, e.prototype.push = function(r) {
      var t = this.ops.length, s = this.ops[t - 1];
      if (r = Hu.default(r), typeof s == "object") {
        if (typeof r.delete == "number" && typeof s.delete == "number")
          return this.ops[t - 1] = { delete: s.delete + r.delete }, this;
        if (typeof s.delete == "number" && r.insert != null && (t -= 1, s = this.ops[t - 1], typeof s != "object"))
          return this.ops.unshift(r), this;
        if (dr.default(r.attributes, s.attributes)) {
          if (typeof r.insert == "string" && typeof s.insert == "string")
            return this.ops[t - 1] = { insert: s.insert + r.insert }, typeof r.attributes == "object" && (this.ops[t - 1].attributes = r.attributes), this;
          if (typeof r.retain == "number" && typeof s.retain == "number")
            return this.ops[t - 1] = { retain: s.retain + r.retain }, typeof r.attributes == "object" && (this.ops[t - 1].attributes = r.attributes), this;
        }
      }
      return t === this.ops.length ? this.ops.push(r) : this.ops.splice(t, 0, r), this;
    }, e.prototype.chop = function() {
      var r = this.ops[this.ops.length - 1];
      return r && r.retain && !r.attributes && this.ops.pop(), this;
    }, e.prototype.filter = function(r) {
      return this.ops.filter(r);
    }, e.prototype.forEach = function(r) {
      this.ops.forEach(r);
    }, e.prototype.map = function(r) {
      return this.ops.map(r);
    }, e.prototype.partition = function(r) {
      var t = [], s = [];
      return this.forEach(function(o) {
        var b = r(o) ? t : s;
        b.push(o);
      }), [t, s];
    }, e.prototype.reduce = function(r, t) {
      return this.ops.reduce(r, t);
    }, e.prototype.changeLength = function() {
      return this.reduce(function(r, t) {
        return t.insert ? r + Ot.default.length(t) : t.delete ? r - t.delete : r;
      }, 0);
    }, e.prototype.length = function() {
      return this.reduce(function(r, t) {
        return r + Ot.default.length(t);
      }, 0);
    }, e.prototype.slice = function(r, t) {
      r === void 0 && (r = 0), t === void 0 && (t = 1 / 0);
      for (var s = [], o = Ot.default.iterator(this.ops), b = 0; b < t && o.hasNext(); ) {
        var l = void 0;
        b < r ? l = o.next(r - b) : (l = o.next(t - b), s.push(l)), b += Ot.default.length(l);
      }
      return new e(s);
    }, e.prototype.compose = function(r) {
      var t = Ot.default.iterator(this.ops), s = Ot.default.iterator(r.ops), o = [], b = s.peek();
      if (b != null && typeof b.retain == "number" && b.attributes == null) {
        for (var l = b.retain; t.peekType() === "insert" && t.peekLength() <= l; )
          l -= t.peekLength(), o.push(t.next());
        b.retain - l > 0 && s.next(b.retain - l);
      }
      for (var v = new e(o); t.hasNext() || s.hasNext(); )
        if (s.peekType() === "insert")
          v.push(s.next());
        else if (t.peekType() === "delete")
          v.push(t.next());
        else {
          var y = Math.min(t.peekLength(), s.peekLength()), d = t.next(y), g = s.next(y);
          if (typeof g.retain == "number") {
            var i = {};
            typeof d.retain == "number" ? i.retain = y : i.insert = d.insert;
            var n = Wn.default.compose(d.attributes, g.attributes, typeof d.retain == "number");
            if (n && (i.attributes = n), v.push(i), !s.hasNext() && dr.default(v.ops[v.ops.length - 1], i)) {
              var a = new e(t.rest());
              return v.concat(a).chop();
            }
          } else
            typeof g.delete == "number" && typeof d.retain == "number" && v.push(g);
        }
      return v.chop();
    }, e.prototype.concat = function(r) {
      var t = new e(this.ops.slice());
      return r.ops.length > 0 && (t.push(r.ops[0]), t.ops = t.ops.concat(r.ops.slice(1))), t;
    }, e.prototype.diff = function(r, t) {
      if (this.ops === r.ops)
        return new e();
      var s = [this, r].map(function(y) {
        return y.map(function(d) {
          if (d.insert != null)
            return typeof d.insert == "string" ? d.insert : Yu;
          var g = y === r ? "on" : "with";
          throw new Error("diff() called " + g + " non-document");
        }).join("");
      }), o = new e(), b = or.default(s[0], s[1], t), l = Ot.default.iterator(this.ops), v = Ot.default.iterator(r.ops);
      return b.forEach(function(y) {
        for (var d = y[1].length; d > 0; ) {
          var g = 0;
          switch (y[0]) {
            case or.default.INSERT:
              g = Math.min(v.peekLength(), d), o.push(v.next(g));
              break;
            case or.default.DELETE:
              g = Math.min(d, l.peekLength()), l.next(g), o.delete(g);
              break;
            case or.default.EQUAL:
              g = Math.min(l.peekLength(), v.peekLength(), d);
              var i = l.next(g), n = v.next(g);
              dr.default(i.insert, n.insert) ? o.retain(g, Wn.default.diff(i.attributes, n.attributes)) : o.push(n).delete(g);
              break;
          }
          d -= g;
        }
      }), o.chop();
    }, e.prototype.eachLine = function(r, t) {
      t === void 0 && (t = `
`);
      for (var s = Ot.default.iterator(this.ops), o = new e(), b = 0; s.hasNext(); ) {
        if (s.peekType() !== "insert")
          return;
        var l = s.peek(), v = Ot.default.length(l) - s.peekLength(), y = typeof l.insert == "string" ? l.insert.indexOf(t, v) - v : -1;
        if (y < 0)
          o.push(s.next());
        else if (y > 0)
          o.push(s.next(y));
        else {
          if (r(o, s.next(1).attributes || {}, b) === !1)
            return;
          b += 1, o = new e();
        }
      }
      o.length() > 0 && r(o, {}, b);
    }, e.prototype.invert = function(r) {
      var t = new e();
      return this.reduce(function(s, o) {
        if (o.insert)
          t.delete(Ot.default.length(o));
        else {
          if (o.retain && o.attributes == null)
            return t.retain(o.retain), s + o.retain;
          if (o.delete || o.retain && o.attributes) {
            var b = o.delete || o.retain, l = r.slice(s, s + b);
            return l.forEach(function(v) {
              o.delete ? t.push(v) : o.retain && o.attributes && t.retain(Ot.default.length(v), Wn.default.invert(o.attributes, v.attributes));
            }), s + b;
          }
        }
        return s;
      }, 0), t.chop();
    }, e.prototype.transform = function(r, t) {
      if (t === void 0 && (t = !1), t = !!t, typeof r == "number")
        return this.transformPosition(r, t);
      for (var s = r, o = Ot.default.iterator(this.ops), b = Ot.default.iterator(s.ops), l = new e(); o.hasNext() || b.hasNext(); )
        if (o.peekType() === "insert" && (t || b.peekType() !== "insert"))
          l.retain(Ot.default.length(o.next()));
        else if (b.peekType() === "insert")
          l.push(b.next());
        else {
          var v = Math.min(o.peekLength(), b.peekLength()), y = o.next(v), d = b.next(v);
          if (y.delete)
            continue;
          d.delete ? l.push(d) : l.retain(v, Wn.default.transform(y.attributes, d.attributes, t));
        }
      return l.chop();
    }, e.prototype.transformPosition = function(r, t) {
      t === void 0 && (t = !1), t = !!t;
      for (var s = Ot.default.iterator(this.ops), o = 0; s.hasNext() && o <= r; ) {
        var b = s.peekLength(), l = s.peekType();
        if (s.next(), l === "delete") {
          r -= Math.min(b, r - o);
          continue;
        } else
          l === "insert" && (o < r || !t) && (r += b);
        o += b;
      }
      return r;
    }, e.Op = Ot.default, e.AttributeMap = Wn.default, e;
  }()
), Wu = Ku;
/*!
 * VueQuill @vueup/vue-quill v1.1.1
 * https://vueup.github.io/vue-quill/
 * 
 * Includes quill v1.3.7
 * https://quilljs.com/
 * 
 * Copyright (c) 2023 Ahmad Luthfi Masruri
 * Released under the MIT license
 * Date: 2023-03-08T12:39:52.151Z
 */
const Pr = {
  essential: [
    [{ header: [1, 2, 3, 4, 5, 6, !1] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }, { align: [] }],
    ["blockquote", "code-block", "link"],
    [{ color: [] }, "clean"]
  ],
  minimal: [
    [{ header: 1 }, { header: 2 }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }, { align: [] }]
  ],
  full: [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ size: ["small", !1, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, !1] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ["link", "video", "image"],
    ["clean"]
    // remove formatting button
  ]
}, Gu = st({
  name: "QuillEditor",
  inheritAttrs: !1,
  props: {
    content: {
      type: [String, Object]
    },
    contentType: {
      type: String,
      default: "delta",
      validator: (e) => ["delta", "html", "text"].includes(e)
    },
    enable: {
      type: Boolean,
      default: !0
    },
    readOnly: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      required: !1
    },
    theme: {
      type: String,
      default: "snow",
      validator: (e) => ["snow", "bubble", ""].includes(e)
    },
    toolbar: {
      type: [String, Array, Object],
      required: !1,
      validator: (e) => typeof e == "string" && e !== "" ? e.charAt(0) === "#" ? !0 : Object.keys(Pr).indexOf(e) !== -1 : !0
    },
    modules: {
      type: Object,
      required: !1
    },
    options: {
      type: Object,
      required: !1
    },
    globalOptions: {
      type: Object,
      required: !1
    }
  },
  emits: [
    "textChange",
    "selectionChange",
    "editorChange",
    "update:content",
    "focus",
    "blur",
    "ready"
  ],
  setup: (e, r) => {
    Or(() => {
      b();
    }), li(() => {
      t = null;
    });
    let t, s;
    const o = Ft(), b = () => {
      var O;
      if (o.value) {
        if (s = l(), e.modules)
          if (Array.isArray(e.modules))
            for (const x of e.modules)
              cr.register(`modules/${x.name}`, x.module);
          else
            cr.register(`modules/${e.modules.name}`, e.modules.module);
        t = new cr(o.value, s), k(e.content), t.on("text-change", i), t.on("selection-change", a), t.on("editor-change", p), e.theme !== "bubble" && o.value.classList.remove("ql-bubble"), e.theme !== "snow" && o.value.classList.remove("ql-snow"), (O = t.getModule("toolbar")) === null || O === void 0 || O.container.addEventListener("mousedown", (x) => {
          x.preventDefault();
        }), r.emit("ready", t);
      }
    }, l = () => {
      const O = {};
      if (e.theme !== "" && (O.theme = e.theme), e.readOnly && (O.readOnly = e.readOnly), e.placeholder && (O.placeholder = e.placeholder), e.toolbar && e.toolbar !== "" && (O.modules = {
        toolbar: (() => {
          if (typeof e.toolbar == "object")
            return e.toolbar;
          if (typeof e.toolbar == "string")
            return e.toolbar.charAt(0) === "#" ? e.toolbar : Pr[e.toolbar];
        })()
      }), e.modules) {
        const x = (() => {
          var E, T;
          const L = {};
          if (Array.isArray(e.modules))
            for (const D of e.modules)
              L[D.name] = (E = D.options) !== null && E !== void 0 ? E : {};
          else
            L[e.modules.name] = (T = e.modules.options) !== null && T !== void 0 ? T : {};
          return L;
        })();
        O.modules = Object.assign({}, O.modules, x);
      }
      return Object.assign({}, e.globalOptions, e.options, O);
    }, v = (O) => typeof O == "object" && O ? O.slice() : O, y = (O) => Object.values(O.ops).some((x) => !x.retain || Object.keys(x).length !== 1);
    let d;
    const g = (O) => {
      if (typeof d == typeof O) {
        if (O === d)
          return !0;
        if (typeof O == "object" && O && typeof d == "object" && d)
          return !y(d.diff(O));
      }
      return !1;
    }, i = (O, x, E) => {
      d = v(u()), g(e.content) || r.emit("update:content", d), r.emit("textChange", { delta: O, oldContents: x, source: E });
    }, n = Ft(), a = (O, x, E) => {
      n.value = !!(t != null && t.hasFocus()), r.emit("selectionChange", { range: O, oldRange: x, source: E });
    };
    bt(n, (O) => {
      O ? r.emit("focus", o) : r.emit("blur", o);
    });
    const p = (...O) => {
      O[0] === "text-change" && r.emit("editorChange", {
        name: O[0],
        delta: O[1],
        oldContents: O[2],
        source: O[3]
      }), O[0] === "selection-change" && r.emit("editorChange", {
        name: O[0],
        range: O[1],
        oldRange: O[2],
        source: O[3]
      });
    }, h = () => o.value, m = () => {
      var O;
      return (O = t == null ? void 0 : t.getModule("toolbar")) === null || O === void 0 ? void 0 : O.container;
    }, f = () => {
      if (t)
        return t;
      throw `The quill editor hasn't been instantiated yet, 
                  make sure to call this method when the editor ready
                  or use v-on:ready="onReady(quill)" event instead.`;
    }, u = (O, x) => e.contentType === "html" ? M() : e.contentType === "text" ? c(O, x) : t == null ? void 0 : t.getContents(O, x), k = (O, x = "api") => {
      const E = O || (e.contentType === "delta" ? new Wu() : "");
      e.contentType === "html" ? $(E) : e.contentType === "text" ? w(E, x) : t == null || t.setContents(E, x), d = v(E);
    }, c = (O, x) => {
      var E;
      return (E = t == null ? void 0 : t.getText(O, x)) !== null && E !== void 0 ? E : "";
    }, w = (O, x = "api") => {
      t == null || t.setText(O, x);
    }, M = () => {
      var O;
      return (O = t == null ? void 0 : t.root.innerHTML) !== null && O !== void 0 ? O : "";
    }, $ = (O) => {
      t && (t.root.innerHTML = O);
    }, A = (O, x = "api") => {
      const E = t == null ? void 0 : t.clipboard.convert(O);
      E && (t == null || t.setContents(E, x));
    }, P = () => {
      Mr(() => {
        var O;
        !r.slots.toolbar && t && ((O = t.getModule("toolbar")) === null || O === void 0 || O.container.remove()), b();
      });
    };
    return bt(() => e.content, (O) => {
      if (!t || !O || g(O))
        return;
      const x = t.getSelection();
      x && Mr(() => t == null ? void 0 : t.setSelection(x)), k(O);
    }, { deep: !0 }), bt(() => e.enable, (O) => {
      t && t.enable(O);
    }), {
      editor: o,
      getEditor: h,
      getToolbar: m,
      getQuill: f,
      getContents: u,
      setContents: k,
      getHTML: M,
      setHTML: $,
      pasteHTML: A,
      getText: c,
      setText: w,
      reinit: P
    };
  },
  render() {
    var e, r;
    return [
      (r = (e = this.$slots).toolbar) === null || r === void 0 ? void 0 : r.call(e),
      ai("div", { ref: "editor", ...this.$attrs })
    ];
  }
});
const Zu = st({
  components: {
    QuillEditor: Gu
  },
  mixins: [Bt],
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: "Écrivez ici"
    }
  },
  methods: {
    onChange(e) {
      this.$emit("update:modelValue", e);
    }
  }
}), Xu = { class: "bg-white" };
function Ju(e, r, t, s, o, b) {
  const l = ke("QuillEditor"), v = ke("UiLayoutInput");
  return V(), je(v, Dt(It(e.layoutProps)), {
    default: Be(() => [
      S("div", Xu, [
        Ie(l, {
          content: e.modelValue,
          "content-type": "html",
          theme: "snow",
          options: {
            placeholder: e.placeholder
          },
          "onUpdate:content": e.onChange
        }, null, 8, ["content", "options", "onUpdate:content"])
      ])
    ]),
    _: 1
  }, 16);
}
const ry = /* @__PURE__ */ Ee(Zu, [["render", Ju]]), Qu = st({
  components: { UiInputFile: Hr },
  mixins: [Bt],
  props: {
    modelValue: {
      type: [File, Object, String],
      default: null
    }
  },
  data() {
    return {
      image: void 0
    };
  },
  created() {
    this.modelValue && (this.image = this.modelValue);
  },
  methods: {
    onFileChange(e) {
      const [r] = e.target.files;
      r && (this.image = URL.createObjectURL(r)), this.$emit("update:modelValue", r);
    }
  }
}), ec = { class: "flex items-center" }, tc = {
  key: 0,
  class: "w-full h-full text-gray-600",
  fill: "currentColor",
  viewBox: "0 0 24 24"
}, nc = /* @__PURE__ */ S("path", { d: "M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" }, null, -1), rc = [
  nc
], ic = { class: "min-w-0" };
function oc(e, r, t, s, o, b) {
  const l = ke("UiInputFile"), v = ke("UiLayoutInput");
  return V(), je(v, Dt(It(e.layoutProps)), {
    default: Be(() => [
      S("div", ec, [
        S("span", {
          class: "w-8 h-8 mr-3 overflow-hidden bg-gray-200 bg-center bg-cover rounded-full shrink-0",
          style: si({
            "background-image": e.image ? "url(" + e.image + ")" : "none"
          })
        }, [
          e.image ? ae("", !0) : (V(), K("svg", tc, rc))
        ], 4),
        S("div", ic, [
          Ie(l, {
            accept: "image/png, image/jpeg",
            name: e.name,
            required: e.required,
            onInput: e.onFileChange
          }, null, 8, ["name", "required", "onInput"])
        ])
      ])
    ]),
    _: 1
  }, 16);
}
const iy = /* @__PURE__ */ Ee(Qu, [["render", oc]]);
/**
 * Vue Currency Input 3.0.4
 * (c) 2018-2023 Matthias Stiller
 * @license MIT
 */
var kn;
(function(e) {
  e.symbol = "symbol", e.narrowSymbol = "narrowSymbol", e.code = "code", e.name = "name", e.hidden = "hidden";
})(kn || (kn = {}));
var wn;
(function(e) {
  e.precision = "precision", e.thousands = "thousands", e.millions = "millions", e.billions = "billions";
})(wn || (wn = {}));
const ar = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), Qr = (e) => e.replace(/^0+(0$|[^0])/, "$1"), hr = (e, r) => (e.match(new RegExp(ar(r), "g")) || []).length, lc = (e, r) => e.substring(0, e.indexOf(r)), ei = [",", ".", "٫"], Dr = "(0|[1-9]\\d*)";
class ac {
  constructor(r) {
    var t, s, o, b, l, v;
    const { currency: y, currencyDisplay: d, locale: g, precision: i, accountingSign: n, useGrouping: a } = r;
    this.locale = g, this.options = {
      currency: y,
      useGrouping: a,
      style: "currency",
      currencySign: n ? "accounting" : void 0,
      currencyDisplay: d !== kn.hidden ? d : void 0
    };
    const p = new Intl.NumberFormat(g, this.options), h = p.formatToParts(123456);
    this.currency = (t = h.find(({ type: u }) => u === "currency")) === null || t === void 0 ? void 0 : t.value, this.digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((u) => u.toLocaleString(g)), this.decimalSymbol = (s = h.find(({ type: u }) => u === "decimal")) === null || s === void 0 ? void 0 : s.value, this.groupingSymbol = (o = h.find(({ type: u }) => u === "group")) === null || o === void 0 ? void 0 : o.value, this.minusSign = (b = p.formatToParts(-1).find(({ type: u }) => u === "minusSign")) === null || b === void 0 ? void 0 : b.value, this.decimalSymbol === void 0 ? this.minimumFractionDigits = this.maximumFractionDigits = 0 : typeof i == "number" ? this.minimumFractionDigits = this.maximumFractionDigits = i : (this.minimumFractionDigits = (l = i == null ? void 0 : i.min) !== null && l !== void 0 ? l : p.resolvedOptions().minimumFractionDigits, this.maximumFractionDigits = (v = i == null ? void 0 : i.max) !== null && v !== void 0 ? v : p.resolvedOptions().maximumFractionDigits);
    const m = (u) => lc(u, this.digits[1]), f = (u) => u.substring(u.lastIndexOf(this.decimalSymbol ? this.digits[0] : this.digits[1]) + 1);
    this.prefix = m(p.format(1)), this.suffix = f(p.format(1)), this.negativePrefix = m(p.format(-1)), this.negativeSuffix = f(p.format(-1));
  }
  parse(r) {
    if (r) {
      const t = this.isNegative(r);
      r = this.normalizeDigits(r), r = this.stripCurrency(r, t), r = this.stripSignLiterals(r);
      const s = this.decimalSymbol ? `(?:${ar(this.decimalSymbol)}(\\d*))?` : "", o = this.stripGroupingSeparator(r).match(new RegExp(`^${Dr}${s}$`));
      if (o && this.isValidIntegerFormat(this.decimalSymbol ? r.split(this.decimalSymbol)[0] : r, Number(o[1])))
        return +`${t ? "-" : ""}${this.onlyDigits(o[1])}.${this.onlyDigits(o[2] || "")}`;
    }
    return null;
  }
  isValidIntegerFormat(r, t) {
    const s = { ...this.options, minimumFractionDigits: 0 };
    return [
      this.stripCurrency(this.normalizeDigits(t.toLocaleString(this.locale, { ...s, useGrouping: !0 })), !1),
      this.stripCurrency(this.normalizeDigits(t.toLocaleString(this.locale, { ...s, useGrouping: !1 })), !1)
    ].includes(r);
  }
  format(r, t = {
    minimumFractionDigits: this.minimumFractionDigits,
    maximumFractionDigits: this.maximumFractionDigits
  }) {
    return r != null ? r.toLocaleString(this.locale, { ...this.options, ...t }) : "";
  }
  toFraction(r) {
    return `${this.digits[0]}${this.decimalSymbol}${this.onlyLocaleDigits(r.substr(1)).substr(0, this.maximumFractionDigits)}`;
  }
  isFractionIncomplete(r) {
    return !!this.normalizeDigits(this.stripGroupingSeparator(r)).match(new RegExp(`^${Dr}${ar(this.decimalSymbol)}$`));
  }
  isNegative(r) {
    return r.startsWith(this.negativePrefix) || this.minusSign === void 0 && (r.startsWith("(") || r.startsWith("-")) || this.minusSign !== void 0 && r.replace("-", this.minusSign).startsWith(this.minusSign);
  }
  insertCurrency(r, t) {
    return `${t ? this.negativePrefix : this.prefix}${r}${t ? this.negativeSuffix : this.suffix}`;
  }
  stripGroupingSeparator(r) {
    return this.groupingSymbol !== void 0 ? r.replace(new RegExp(ar(this.groupingSymbol), "g"), "") : r;
  }
  stripSignLiterals(r) {
    return this.minusSign !== void 0 ? r.replace("-", this.minusSign).replace(this.minusSign, "") : r.replace(/[-()]/g, "");
  }
  stripCurrency(r, t) {
    return r.replace(t ? this.negativePrefix : this.prefix, "").replace(t ? this.negativeSuffix : this.suffix, "");
  }
  normalizeDecimalSeparator(r, t) {
    return ei.forEach((s) => {
      r = r.substr(0, t) + r.substr(t).replace(s, this.decimalSymbol);
    }), r;
  }
  normalizeDigits(r) {
    return this.digits[0] !== "0" && this.digits.forEach((t, s) => {
      r = r.replace(new RegExp(t, "g"), String(s));
    }), r;
  }
  onlyDigits(r) {
    return this.normalizeDigits(r).replace(/\D+/g, "");
  }
  onlyLocaleDigits(r) {
    return r.replace(new RegExp(`[^${this.digits.join("")}]*`, "g"), "");
  }
}
class ti {
  constructor(r) {
    this.currencyFormat = r;
  }
}
class sc extends ti {
  conformToMask(r, t = "") {
    const s = this.currencyFormat.isNegative(r), o = (p) => p === "" && s && !(this.currencyFormat.minusSign === void 0 ? t === this.currencyFormat.negativePrefix + this.currencyFormat.negativeSuffix : t === this.currencyFormat.negativePrefix), b = (p) => {
      if (o(p))
        return "";
      if (this.currencyFormat.maximumFractionDigits > 0) {
        if (this.currencyFormat.isFractionIncomplete(p))
          return p;
        if (p.startsWith(this.currencyFormat.decimalSymbol))
          return this.currencyFormat.toFraction(p);
      }
      return null;
    };
    let l = r;
    l = this.currencyFormat.stripCurrency(l, s), l = this.currencyFormat.stripSignLiterals(l);
    const v = b(l);
    if (v != null)
      return this.currencyFormat.insertCurrency(v, s);
    const [y, ...d] = l.split(this.currencyFormat.decimalSymbol), g = Qr(this.currencyFormat.onlyDigits(y)), i = this.currencyFormat.onlyDigits(d.join("")).substr(0, this.currencyFormat.maximumFractionDigits), n = d.length > 0 && i.length === 0, a = g === "" && s && (this.currencyFormat.minusSign === void 0 ? t === r.slice(0, -2) + this.currencyFormat.negativeSuffix : t === r.slice(0, -1));
    return n || a || o(g) ? t : g.match(/\d+/) ? {
      numberValue: +`${s ? "-" : ""}${g}.${i}`,
      fractionDigits: i
    } : "";
  }
}
class uc extends ti {
  conformToMask(r, t = "") {
    if (r === "" || this.currencyFormat.parse(t) === 0 && this.currencyFormat.stripCurrency(t, !0).slice(0, -1) === this.currencyFormat.stripCurrency(r, !0))
      return "";
    const s = this.currencyFormat.isNegative(r), o = this.currencyFormat.stripSignLiterals(r) === "" ? -0 : +`${s ? "-" : ""}${Qr(this.currencyFormat.onlyDigits(r))}` / Math.pow(10, this.currencyFormat.maximumFractionDigits);
    return {
      numberValue: o,
      fractionDigits: o.toFixed(this.currencyFormat.maximumFractionDigits).slice(-this.currencyFormat.maximumFractionDigits)
    };
  }
}
const cc = {
  locale: void 0,
  currency: void 0,
  currencyDisplay: void 0,
  hideGroupingSeparatorOnFocus: !0,
  hideCurrencySymbolOnFocus: !0,
  hideNegligibleDecimalDigitsOnFocus: !0,
  precision: void 0,
  autoDecimalDigits: !1,
  valueRange: void 0,
  useGrouping: void 0,
  valueScaling: void 0
};
class fc {
  constructor(r) {
    this.el = r.el, this.onInput = r.onInput, this.onChange = r.onChange, this.addEventListener(), this.init(r.options);
  }
  setOptions(r) {
    this.init(r), this.format(this.currencyFormat.format(this.validateValueRange(this.numberValue))), this.onChange(this.getValue());
  }
  getValue() {
    return { number: this.valueScaling && this.numberValue != null ? this.toInteger(this.numberValue, this.valueScaling) : this.numberValue, formatted: this.formattedValue };
  }
  setValue(r) {
    const t = this.valueScaling !== void 0 && r != null ? this.toFloat(r, this.valueScaling) : r;
    t !== this.numberValue && (this.format(this.currencyFormat.format(this.validateValueRange(t))), this.onChange(this.getValue()));
  }
  init(r) {
    this.options = {
      ...cc,
      ...r
    }, this.options.autoDecimalDigits && (this.options.hideNegligibleDecimalDigitsOnFocus = !1), this.el.getAttribute("inputmode") || this.el.setAttribute("inputmode", this.options.autoDecimalDigits ? "numeric" : "decimal"), this.currencyFormat = new ac(this.options), this.numberMask = this.options.autoDecimalDigits ? new uc(this.currencyFormat) : new sc(this.currencyFormat);
    const t = {
      [wn.precision]: this.currencyFormat.maximumFractionDigits,
      [wn.thousands]: 3,
      [wn.millions]: 6,
      [wn.billions]: 9
    };
    this.valueScaling = this.options.valueScaling ? t[this.options.valueScaling] : void 0, this.valueScalingFractionDigits = this.valueScaling !== void 0 && this.options.valueScaling !== wn.precision ? this.valueScaling + this.currencyFormat.maximumFractionDigits : this.currencyFormat.maximumFractionDigits, this.minValue = this.getMinValue(), this.maxValue = this.getMaxValue();
  }
  getMinValue() {
    var r, t;
    let s = this.toFloat(-Number.MAX_SAFE_INTEGER);
    return ((r = this.options.valueRange) === null || r === void 0 ? void 0 : r.min) !== void 0 && (s = Math.max((t = this.options.valueRange) === null || t === void 0 ? void 0 : t.min, this.toFloat(-Number.MAX_SAFE_INTEGER))), s;
  }
  getMaxValue() {
    var r, t;
    let s = this.toFloat(Number.MAX_SAFE_INTEGER);
    return ((r = this.options.valueRange) === null || r === void 0 ? void 0 : r.max) !== void 0 && (s = Math.min((t = this.options.valueRange) === null || t === void 0 ? void 0 : t.max, this.toFloat(Number.MAX_SAFE_INTEGER))), s;
  }
  toFloat(r, t) {
    return r / Math.pow(10, t ?? this.valueScalingFractionDigits);
  }
  toInteger(r, t) {
    return Number(r.toFixed(t ?? this.valueScalingFractionDigits).split(".").join(""));
  }
  validateValueRange(r) {
    return r != null ? Math.min(Math.max(r, this.minValue), this.maxValue) : r;
  }
  format(r, t = !1) {
    if (r != null) {
      this.decimalSymbolInsertedAt !== void 0 && (r = this.currencyFormat.normalizeDecimalSeparator(r, this.decimalSymbolInsertedAt), this.decimalSymbolInsertedAt = void 0);
      const s = this.numberMask.conformToMask(r, this.formattedValue);
      let o;
      if (typeof s == "object") {
        const { numberValue: b, fractionDigits: l } = s;
        let { maximumFractionDigits: v, minimumFractionDigits: y } = this.currencyFormat;
        this.focus ? y = t ? l.replace(/0+$/, "").length : Math.min(v, l.length) : Number.isInteger(b) && !this.options.autoDecimalDigits && (this.options.precision === void 0 || y === 0) && (y = v = 0), o = this.toInteger(Math.abs(b)) > Number.MAX_SAFE_INTEGER ? this.formattedValue : this.currencyFormat.format(b, {
          useGrouping: this.options.useGrouping !== !1 && !(this.focus && this.options.hideGroupingSeparatorOnFocus),
          minimumFractionDigits: y,
          maximumFractionDigits: v
        });
      } else
        o = s;
      this.maxValue <= 0 && !this.currencyFormat.isNegative(o) && this.currencyFormat.parse(o) !== 0 && (o = o.replace(this.currencyFormat.prefix, this.currencyFormat.negativePrefix)), this.minValue >= 0 && (o = o.replace(this.currencyFormat.negativePrefix, this.currencyFormat.prefix)), (this.options.currencyDisplay === kn.hidden || this.focus && this.options.hideCurrencySymbolOnFocus) && (o = o.replace(this.currencyFormat.negativePrefix, this.currencyFormat.minusSign !== void 0 ? this.currencyFormat.minusSign : "(").replace(this.currencyFormat.negativeSuffix, this.currencyFormat.minusSign !== void 0 ? "" : ")").replace(this.currencyFormat.prefix, "").replace(this.currencyFormat.suffix, "")), this.el.value = o, this.numberValue = this.currencyFormat.parse(o);
    } else
      this.el.value = "", this.numberValue = null;
    this.formattedValue = this.el.value, this.onInput(this.getValue());
  }
  addEventListener() {
    this.el.addEventListener("input", (r) => {
      const { value: t, selectionStart: s } = this.el, o = r;
      if (s && o.data && ei.includes(o.data) && (this.decimalSymbolInsertedAt = s - 1), this.format(t), this.focus && s != null) {
        const b = () => {
          const { prefix: l, suffix: v, decimalSymbol: y, maximumFractionDigits: d, groupingSymbol: g } = this.currencyFormat;
          let i = t.length - s;
          const n = this.formattedValue.length;
          if (this.currencyFormat.minusSign === void 0 && (t.startsWith("(") || t.startsWith("-")) && !t.endsWith(")"))
            return n - this.currencyFormat.negativeSuffix.length > 1 ? this.formattedValue.substring(s).length : 1;
          if (this.formattedValue.substr(s, 1) === g && hr(this.formattedValue, g) === hr(t, g) + 1)
            return n - i - 1;
          if (n < i)
            return s;
          if (y !== void 0 && t.indexOf(y) !== -1) {
            const a = t.indexOf(y) + 1;
            if (Math.abs(n - t.length) > 1 && s <= a)
              return this.formattedValue.indexOf(y) + 1;
            !this.options.autoDecimalDigits && s > a && this.currencyFormat.onlyDigits(t.substr(a)).length - 1 === d && (i -= 1);
          }
          return this.options.hideCurrencySymbolOnFocus || this.options.currencyDisplay === kn.hidden ? n - i : Math.max(n - Math.max(i, v.length), l.length);
        };
        this.setCaretPosition(b());
      }
    }), this.el.addEventListener("focus", () => {
      this.focus = !0, this.numberValueOnFocus = this.numberValue, setTimeout(() => {
        const { value: r, selectionStart: t, selectionEnd: s } = this.el;
        if (this.format(r, this.options.hideNegligibleDecimalDigitsOnFocus), t != null && s != null && Math.abs(t - s) > 0)
          this.setCaretPosition(0, this.el.value.length);
        else if (t != null) {
          const o = this.getCaretPositionOnFocus(r, t);
          this.setCaretPosition(o);
        }
      });
    }), this.el.addEventListener("blur", () => {
      this.focus = !1, this.format(this.currencyFormat.format(this.validateValueRange(this.numberValue))), this.numberValueOnFocus !== this.numberValue && this.onChange(this.getValue());
    });
  }
  getCaretPositionOnFocus(r, t) {
    if (this.numberValue == null)
      return t;
    const { prefix: s, negativePrefix: o, suffix: b, negativeSuffix: l, groupingSymbol: v, currency: y } = this.currencyFormat, d = this.numberValue < 0, g = d ? o : s, i = g.length;
    if (this.options.hideCurrencySymbolOnFocus || this.options.currencyDisplay === kn.hidden) {
      if (d) {
        if (t <= 1)
          return 1;
        if (r.endsWith(")") && t > r.indexOf(")"))
          return this.formattedValue.length - 1;
      }
    } else {
      const a = d ? l.length : b.length;
      if (t >= r.length - a)
        return this.formattedValue.length - a;
      if (t < i)
        return i;
    }
    let n = t;
    return this.options.hideCurrencySymbolOnFocus && this.options.currencyDisplay !== kn.hidden && t >= i && y !== void 0 && g.includes(y) && (n -= i, d && (n += 1)), this.options.hideGroupingSeparatorOnFocus && v !== void 0 && (n -= hr(r.substring(0, t), v)), n;
  }
  setCaretPosition(r, t = r) {
    this.el.setSelectionRange(r, t);
  }
}
const dc = (e) => e != null && e.matches("input") ? e : e == null ? void 0 : e.querySelector("input");
function hc(e, r) {
  var t, s, o, b;
  let l;
  const v = Ft(null), y = Ft(null), d = Ft(null), g = ui(), i = (g == null ? void 0 : g.emit) || ((s = (t = g == null ? void 0 : g.proxy) === null || t === void 0 ? void 0 : t.$emit) === null || s === void 0 ? void 0 : s.bind(g == null ? void 0 : g.proxy)), n = (g == null ? void 0 : g.props) || ((o = g == null ? void 0 : g.proxy) === null || o === void 0 ? void 0 : o.$props), a = ci.startsWith("3"), p = a && ((b = g == null ? void 0 : g.attrs.modelModifiers) === null || b === void 0 ? void 0 : b.lazy), h = rn(() => n == null ? void 0 : n[a ? "modelValue" : "value"]), m = a ? "update:modelValue" : "input", f = p ? "update:modelValue" : "change";
  return bt(v, (u) => {
    var k;
    if (u) {
      const c = dc((k = u == null ? void 0 : u.$el) !== null && k !== void 0 ? k : u);
      c ? (l = new fc({
        el: c,
        options: e,
        onInput: (w) => {
          !p && r !== !1 && h.value !== w.number && (i == null || i(m, w.number)), d.value = w.number, y.value = w.formatted;
        },
        onChange: (w) => {
          i == null || i(f, w.number);
        }
      }), l.setValue(h.value)) : console.error('No input element found. Please make sure that the "inputRef" template ref is properly assigned.');
    } else
      l = null;
  }), {
    inputRef: v,
    numberValue: d,
    formattedValue: y,
    setValue: (u) => l == null ? void 0 : l.setValue(u),
    setOptions: (u) => l == null ? void 0 : l.setOptions(u)
  };
}
const pc = st({
  mixins: [Bt],
  props: {
    modelValue: {
      type: Number,
      required: !1,
      default: null
    }
  },
  setup(e) {
    const { inputRef: r, setOptions: t, setValue: s } = hc({
      currency: "EUR",
      locale: "fr",
      valueScaling: "precision"
    });
    return bt(
      () => e.modelValue,
      (o) => {
        s(o);
      }
    ), bt(
      () => e.options,
      (o) => {
        t(o);
      }
    ), { inputRef: r };
  }
}), mc = { class: "relative" }, vc = {
  key: 0,
  class: "absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 pointer-events-none"
}, yc = ["disabled", "name", "required"];
function gc(e, r, t, s, o, b) {
  const l = ke("UiLayoutInput");
  return V(), je(l, Dt(It(e.layoutProps)), {
    default: Be(() => [
      S("div", mc, [
        e.hasIconSlot ? (V(), K("div", vc, [
          $e(e.$slots, "icon")
        ])) : ae("", !0),
        S("input", Nt({
          ref: "inputRef",
          type: "text",
          disabled: e.disabled,
          name: e.name
        }, e.$attrs, {
          class: "input",
          required: e.required
        }), null, 16, yc)
      ])
    ]),
    _: 3
  }, 16);
}
const oy = /* @__PURE__ */ Ee(pc, [["render", gc]]), bc = {
  monday: {
    am: !1,
    pm: !1
  },
  tuesday: {
    am: !1,
    pm: !1
  },
  wednesday: {
    am: !1,
    pm: !1
  },
  thursday: {
    am: !1,
    pm: !1
  },
  friday: {
    am: !1,
    pm: !1
  },
  saturday: {
    am: !1,
    pm: !1
  },
  sunday: {
    am: !1,
    pm: !1
  }
}, _c = st({
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    modelValue: {
      type: Object,
      default: null
    },
    withTime: {
      type: Boolean,
      default: !1
    },
    withWeekend: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      schedule: this.modelValue || JSON.parse(JSON.stringify(bc))
    };
  },
  methods: {
    update() {
      this.withWeekend || (this.schedule.saturday = { am: !1, pm: !1 }, this.schedule.sunday = { am: !1, pm: !1 }), this.$emit("update:modelValue", this.schedule);
    },
    toggleDay(e) {
      this.disabled || (this.schedule[e].am ? (this.schedule[e].am = !1, this.schedule[e].pm = !1) : (this.schedule[e].am = !0, this.schedule[e].pm = !0), this.update());
    },
    toggle(e, r) {
      this.disabled || (this.schedule[e][r] ? this.schedule[e][r] = !1 : this.schedule[e][r] = !0, this.update());
    },
    setHour(e, r, t) {
      const s = t.target.value, o = this.schedule[e].hours || {};
      o[r] = s, this.schedule[e].hours = o, this.schedule = JSON.parse(JSON.stringify(this.schedule)), this.update();
    }
  }
}), wc = {
  class: "text-sm schedule-table",
  "aria-labelledby": "schedule-table-caption"
}, kc = /* @__PURE__ */ S("caption", {
  id: "schedule-table-caption",
  class: "hidden"
}, " Horaire ", -1), Oc = { class: "hidden md:table-row" }, xc = /* @__PURE__ */ S("th", { scope: "col" }, null, -1), Sc = /* @__PURE__ */ S("tr", { class: "table-row md:hidden" }, [
  /* @__PURE__ */ S("th", { scope: "col" }),
  /* @__PURE__ */ S("th", { scope: "col" }, " AM "),
  /* @__PURE__ */ S("th", { scope: "col" }, " PM ")
], -1), Ec = { class: "hidden md:table-row" }, $c = /* @__PURE__ */ S("td", null, " Matin ", -1), Ac = {
  key: 0,
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Tc = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Mc = [
  Tc
], Nc = {
  key: 0,
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Cc = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Lc = [
  Cc
], Pc = {
  key: 0,
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Dc = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Ic = [
  Dc
], Bc = {
  key: 0,
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, jc = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), qc = [
  jc
], Rc = {
  key: 0,
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Vc = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Fc = [
  Vc
], Uc = { key: 0 }, zc = {
  key: 0,
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Hc = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Yc = [
  Hc
], Kc = { key: 1 }, Wc = {
  key: 0,
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Gc = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Zc = [
  Gc
], Xc = { class: "hidden md:table-row" }, Jc = /* @__PURE__ */ S("td", null, "Après-midi", -1), Qc = {
  key: 0,
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, ef = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), tf = [
  ef
], nf = {
  key: 0,
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, rf = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), of = [
  rf
], lf = {
  key: 0,
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, af = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), sf = [
  af
], uf = {
  key: 0,
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, cf = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), ff = [
  cf
], df = {
  key: 0,
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, hf = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), pf = [
  hf
], mf = { key: 0 }, vf = {
  key: 0,
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, yf = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), gf = [
  yf
], bf = { key: 1 }, _f = {
  key: 0,
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, wf = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), kf = [
  wf
], Of = {
  key: 0,
  class: "hidden md:table-row"
}, xf = /* @__PURE__ */ S("td", null, [
  /* @__PURE__ */ Pt(" Heures "),
  /* @__PURE__ */ S("span", { class: "text-xs text-gray-500" }, "(optionnel)")
], -1), Sf = { key: 0 }, Ef = /* @__PURE__ */ S("label", {
  class: "label",
  for: "monday_start_at"
}, "Heure d'arrivée", -1), $f = ["value"], Af = /* @__PURE__ */ S("label", {
  class: "label",
  for: "monday_left_at"
}, "Heure de départ", -1), Tf = ["value"], Mf = { key: 0 }, Nf = /* @__PURE__ */ S("label", {
  class: "label",
  for: "tuesday_start_at"
}, "Heure d'arrivée", -1), Cf = ["value"], Lf = /* @__PURE__ */ S("label", {
  class: "label",
  for: "tuesday_left_at"
}, "Heure de départ", -1), Pf = ["value"], Df = { key: 0 }, If = /* @__PURE__ */ S("label", {
  class: "label",
  for: "wednesday_start_at"
}, "Heure d'arrivée", -1), Bf = ["value"], jf = /* @__PURE__ */ S("label", {
  class: "label",
  for: "wednesday_left_at"
}, "Heure de départ", -1), qf = ["value"], Rf = { key: 0 }, Vf = /* @__PURE__ */ S("label", {
  class: "label",
  for: "thursday_start_at"
}, "Heure d'arrivée", -1), Ff = ["value"], Uf = /* @__PURE__ */ S("label", {
  class: "label",
  for: "thursday_left_at"
}, "Heure de départ", -1), zf = ["value"], Hf = { key: 0 }, Yf = /* @__PURE__ */ S("label", {
  class: "label",
  for: "friday_start_at"
}, "Heure d'arrivée", -1), Kf = ["value"], Wf = /* @__PURE__ */ S("label", {
  class: "label",
  for: "friday_left_at"
}, "Heure de départ", -1), Gf = ["value"], Zf = { key: 0 }, Xf = { key: 0 }, Jf = /* @__PURE__ */ S("label", {
  class: "label",
  for: "saturday_start_at"
}, "Heure d'arrivée", -1), Qf = ["value"], ed = /* @__PURE__ */ S("label", {
  class: "label",
  for: "saturday_left_at"
}, "Heure de départ", -1), td = ["value"], nd = { key: 1 }, rd = { key: 0 }, id = /* @__PURE__ */ S("label", {
  class: "label",
  for: "sunday_start_at"
}, "Heure d'arrivée", -1), od = ["value"], ld = /* @__PURE__ */ S("label", {
  class: "label",
  for: "sunday_left_at"
}, "Heure de départ", -1), ad = ["value"], sd = { class: "table-row md:hidden" }, ud = /* @__PURE__ */ S("td", null, "Lundi", -1), cd = {
  key: 0,
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, fd = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), dd = [
  fd
], hd = {
  key: 0,
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, pd = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), md = [
  pd
], vd = { class: "table-row md:hidden" }, yd = /* @__PURE__ */ S("td", null, "Mardi", -1), gd = {
  key: 0,
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, bd = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), _d = [
  bd
], wd = {
  key: 0,
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, kd = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Od = [
  kd
], xd = { class: "table-row md:hidden" }, Sd = /* @__PURE__ */ S("td", null, "Mercredi", -1), Ed = {
  key: 0,
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, $d = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Ad = [
  $d
], Td = {
  key: 0,
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Md = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Nd = [
  Md
], Cd = { class: "table-row md:hidden" }, Ld = /* @__PURE__ */ S("td", null, "Jeudi", -1), Pd = {
  key: 0,
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Dd = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Id = [
  Dd
], Bd = {
  key: 0,
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, jd = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), qd = [
  jd
], Rd = { class: "table-row md:hidden" }, Vd = /* @__PURE__ */ S("td", null, "Vendredi", -1), Fd = {
  key: 0,
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Ud = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), zd = [
  Ud
], Hd = {
  key: 0,
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Yd = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Kd = [
  Yd
], Wd = { class: "table-row md:hidden" }, Gd = /* @__PURE__ */ S("td", null, "Samedi", -1), Zd = {
  key: 0,
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Xd = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Jd = [
  Xd
], Qd = {
  key: 0,
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, eh = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), th = [
  eh
], nh = { class: "table-row md:hidden" }, rh = /* @__PURE__ */ S("td", null, "Dimanche", -1), ih = {
  key: 0,
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, oh = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), lh = [
  oh
], ah = {
  key: 0,
  class: "w-6 h-6 text-white",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, sh = /* @__PURE__ */ S("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), uh = [
  sh
];
function ch(e, r, t, s, o, b) {
  return V(), K("table", wc, [
    kc,
    S("thead", null, [
      S("tr", Oc, [
        xc,
        S("th", {
          scope: "col",
          class: "cursor-pointer",
          onClick: r[0] || (r[0] = (l) => e.toggleDay("monday"))
        }, " Lundi "),
        S("th", {
          scope: "col",
          class: "cursor-pointer",
          onClick: r[1] || (r[1] = (l) => e.toggleDay("tuesday"))
        }, " Mardi "),
        S("th", {
          scope: "col",
          class: "cursor-pointer",
          onClick: r[2] || (r[2] = (l) => e.toggleDay("wednesday"))
        }, " Mercredi "),
        S("th", {
          scope: "col",
          class: "cursor-pointer",
          onClick: r[3] || (r[3] = (l) => e.toggleDay("thursday"))
        }, " Jeudi "),
        S("th", {
          scope: "col",
          class: "cursor-pointer",
          onClick: r[4] || (r[4] = (l) => e.toggleDay("friday"))
        }, " Vendredi "),
        e.withWeekend ? (V(), K("th", {
          key: 0,
          scope: "col",
          class: "cursor-pointer",
          onClick: r[5] || (r[5] = (l) => e.toggleDay("saturday"))
        }, " Samedi ")) : ae("", !0),
        e.withWeekend ? (V(), K("th", {
          key: 1,
          scope: "col",
          class: "cursor-pointer",
          onClick: r[6] || (r[6] = (l) => e.toggleDay("sunday"))
        }, " Dimanche ")) : ae("", !0)
      ]),
      Sc
    ]),
    S("tbody", null, [
      S("tr", Ec, [
        $c,
        S("td", null, [
          S("div", {
            class: pe(["absolute inset-0 flex items-center justify-center transition cursor-pointer", {
              "bg-green-500": e.schedule.monday.am
            }]),
            onClick: r[7] || (r[7] = (l) => e.toggle("monday", "am"))
          }, [
            e.schedule.monday.am ? (V(), K("svg", Ac, Mc)) : ae("", !0)
          ], 2)
        ]),
        S("td", null, [
          S("div", {
            class: pe(["absolute inset-0 flex items-center justify-center transition cursor-pointer", {
              "bg-green-500": e.schedule.tuesday.am
            }]),
            onClick: r[8] || (r[8] = (l) => e.toggle("tuesday", "am"))
          }, [
            e.schedule.tuesday.am ? (V(), K("svg", Nc, Lc)) : ae("", !0)
          ], 2)
        ]),
        S("td", null, [
          S("div", {
            class: pe(["absolute inset-0 flex items-center justify-center transition cursor-pointer", {
              "bg-green-500": e.schedule.wednesday.am
            }]),
            onClick: r[9] || (r[9] = (l) => e.toggle("wednesday", "am"))
          }, [
            e.schedule.wednesday.am ? (V(), K("svg", Pc, Ic)) : ae("", !0)
          ], 2)
        ]),
        S("td", null, [
          S("div", {
            class: pe(["absolute inset-0 flex items-center justify-center transition cursor-pointer", {
              "bg-green-500": e.schedule.thursday.am
            }]),
            onClick: r[10] || (r[10] = (l) => e.toggle("thursday", "am"))
          }, [
            e.schedule.thursday.am ? (V(), K("svg", Bc, qc)) : ae("", !0)
          ], 2)
        ]),
        S("td", null, [
          S("div", {
            class: pe(["absolute inset-0 flex items-center justify-center transition cursor-pointer", {
              "bg-green-500": e.schedule.friday.am
            }]),
            onClick: r[11] || (r[11] = (l) => e.toggle("friday", "am"))
          }, [
            e.schedule.friday.am ? (V(), K("svg", Rc, Fc)) : ae("", !0)
          ], 2)
        ]),
        e.withWeekend ? (V(), K("td", Uc, [
          S("div", {
            class: pe(["absolute inset-0 flex items-center justify-center transition cursor-pointer", {
              "bg-green-500": e.schedule.saturday.am
            }]),
            onClick: r[12] || (r[12] = (l) => e.toggle("saturday", "am"))
          }, [
            e.schedule.saturday.am ? (V(), K("svg", zc, Yc)) : ae("", !0)
          ], 2)
        ])) : ae("", !0),
        e.withWeekend ? (V(), K("td", Kc, [
          S("div", {
            class: pe(["absolute inset-0 flex items-center justify-center transition cursor-pointer", {
              "bg-green-500": e.schedule.sunday.am
            }]),
            onClick: r[13] || (r[13] = (l) => e.toggle("sunday", "am"))
          }, [
            e.schedule.sunday.am ? (V(), K("svg", Wc, Zc)) : ae("", !0)
          ], 2)
        ])) : ae("", !0)
      ]),
      S("tr", Xc, [
        Jc,
        S("td", null, [
          S("div", {
            class: pe(["absolute inset-0 flex items-center justify-center transition cursor-pointer", {
              "bg-green-500": e.schedule.monday.pm
            }]),
            onClick: r[14] || (r[14] = (l) => e.toggle("monday", "pm"))
          }, [
            e.schedule.monday.pm ? (V(), K("svg", Qc, tf)) : ae("", !0)
          ], 2)
        ]),
        S("td", null, [
          S("div", {
            class: pe(["absolute inset-0 flex items-center justify-center transition cursor-pointer", {
              "bg-green-500": e.schedule.tuesday.pm
            }]),
            onClick: r[15] || (r[15] = (l) => e.toggle("tuesday", "pm"))
          }, [
            e.schedule.tuesday.pm ? (V(), K("svg", nf, of)) : ae("", !0)
          ], 2)
        ]),
        S("td", null, [
          S("div", {
            class: pe(["absolute inset-0 flex items-center justify-center transition cursor-pointer", {
              "bg-green-500": e.schedule.wednesday.pm
            }]),
            onClick: r[16] || (r[16] = (l) => e.toggle("wednesday", "pm"))
          }, [
            e.schedule.wednesday.pm ? (V(), K("svg", lf, sf)) : ae("", !0)
          ], 2)
        ]),
        S("td", null, [
          S("div", {
            class: pe(["absolute inset-0 flex items-center justify-center transition cursor-pointer", {
              "bg-green-500": e.schedule.thursday.pm
            }]),
            onClick: r[17] || (r[17] = (l) => e.toggle("thursday", "pm"))
          }, [
            e.schedule.thursday.pm ? (V(), K("svg", uf, ff)) : ae("", !0)
          ], 2)
        ]),
        S("td", null, [
          S("div", {
            class: pe(["absolute inset-0 flex items-center justify-center transition cursor-pointer", {
              "bg-green-500": e.schedule.friday.pm
            }]),
            onClick: r[18] || (r[18] = (l) => e.toggle("friday", "pm"))
          }, [
            e.schedule.friday.pm ? (V(), K("svg", df, pf)) : ae("", !0)
          ], 2)
        ]),
        e.withWeekend ? (V(), K("td", mf, [
          S("div", {
            class: pe(["absolute inset-0 flex items-center justify-center transition cursor-pointer", {
              "bg-green-500": e.schedule.saturday.pm
            }]),
            onClick: r[19] || (r[19] = (l) => e.toggle("saturday", "pm"))
          }, [
            e.schedule.saturday.pm ? (V(), K("svg", vf, gf)) : ae("", !0)
          ], 2)
        ])) : ae("", !0),
        e.withWeekend ? (V(), K("td", bf, [
          S("div", {
            class: pe(["absolute inset-0 flex items-center justify-center transition cursor-pointer", {
              "bg-green-500": e.schedule.sunday.pm
            }]),
            onClick: r[20] || (r[20] = (l) => e.toggle("sunday", "pm"))
          }, [
            e.schedule.sunday.pm ? (V(), K("svg", _f, kf)) : ae("", !0)
          ], 2)
        ])) : ae("", !0)
      ]),
      e.withTime ? (V(), K("tr", Of, [
        xf,
        S("td", null, [
          e.schedule.monday.am || e.schedule.monday.pm ? (V(), K("div", Sf, [
            Ef,
            S("input", {
              name: "monday_start_at",
              type: "time",
              step: "900",
              class: "w-full px-1 py-px text-sm border rounded",
              value: e.schedule.monday.hours ? e.schedule.monday.hours.start_at : void 0,
              onInput: r[21] || (r[21] = (l) => e.setHour("monday", "start_at", l))
            }, null, 40, $f),
            Af,
            S("input", {
              name: "monday_left_at",
              type: "time",
              step: "900",
              class: "w-full px-1 py-px text-sm border rounded",
              value: e.schedule.monday.hours ? e.schedule.monday.hours.left_at : void 0,
              onInput: r[22] || (r[22] = (l) => e.setHour("monday", "left_at", l))
            }, null, 40, Tf)
          ])) : ae("", !0)
        ]),
        S("td", null, [
          e.schedule.tuesday.am || e.schedule.tuesday.pm ? (V(), K("div", Mf, [
            Nf,
            S("input", {
              name: "tuesday_start_at",
              type: "time",
              step: "900",
              class: "w-full px-1 py-px text-sm border rounded",
              value: e.schedule.tuesday.hours ? e.schedule.tuesday.hours.start_at : void 0,
              onInput: r[23] || (r[23] = (l) => e.setHour("tuesday", "start_at", l))
            }, null, 40, Cf),
            Lf,
            S("input", {
              name: "tuesday_left_at",
              type: "time",
              step: "900",
              class: "w-full px-1 py-px text-sm border rounded",
              value: e.schedule.tuesday.hours ? e.schedule.tuesday.hours.left_at : void 0,
              onInput: r[24] || (r[24] = (l) => e.setHour("tuesday", "left_at", l))
            }, null, 40, Pf)
          ])) : ae("", !0)
        ]),
        S("td", null, [
          e.schedule.wednesday.am || e.schedule.wednesday.pm ? (V(), K("div", Df, [
            If,
            S("input", {
              name: "wednesday_start_at",
              type: "time",
              step: "900",
              class: "w-full px-1 py-px text-sm border rounded",
              value: e.schedule.wednesday.hours ? e.schedule.wednesday.hours.start_at : void 0,
              onInput: r[25] || (r[25] = (l) => e.setHour("wednesday", "start_at", l))
            }, null, 40, Bf),
            jf,
            S("input", {
              name: "wednesday_left_at",
              type: "time",
              step: "900",
              class: "w-full px-1 py-px text-sm border rounded",
              value: e.schedule.wednesday.hours ? e.schedule.wednesday.hours.left_at : void 0,
              onInput: r[26] || (r[26] = (l) => e.setHour("wednesday", "left_at", l))
            }, null, 40, qf)
          ])) : ae("", !0)
        ]),
        S("td", null, [
          e.schedule.thursday.am || e.schedule.thursday.pm ? (V(), K("div", Rf, [
            Vf,
            S("input", {
              name: "thursday_start_at",
              type: "time",
              step: "900",
              class: "w-full px-1 py-px text-sm border rounded",
              value: e.schedule.thursday.hours ? e.schedule.thursday.hours.start_at : void 0,
              onInput: r[27] || (r[27] = (l) => e.setHour("thursday", "start_at", l))
            }, null, 40, Ff),
            Uf,
            S("input", {
              name: "thursday_left_at",
              type: "time",
              step: "900",
              class: "w-full px-1 py-px text-sm border rounded",
              value: e.schedule.thursday.hours ? e.schedule.thursday.hours.left_at : void 0,
              onInput: r[28] || (r[28] = (l) => e.setHour("thursday", "left_at", l))
            }, null, 40, zf)
          ])) : ae("", !0)
        ]),
        S("td", null, [
          e.schedule.friday.am || e.schedule.friday.pm ? (V(), K("div", Hf, [
            Yf,
            S("input", {
              name: "friday_start_at",
              type: "time",
              step: "900",
              class: "w-full px-1 py-px text-sm border rounded",
              value: e.schedule.friday.hours ? e.schedule.friday.hours.start_at : void 0,
              onInput: r[29] || (r[29] = (l) => e.setHour("friday", "start_at", l))
            }, null, 40, Kf),
            Wf,
            S("input", {
              name: "friday_left_at",
              type: "time",
              step: "900",
              class: "w-full px-1 py-px text-sm border rounded",
              value: e.schedule.friday.hours ? e.schedule.friday.hours.left_at : void 0,
              onInput: r[30] || (r[30] = (l) => e.setHour("friday", "left_at", l))
            }, null, 40, Gf)
          ])) : ae("", !0)
        ]),
        e.withWeekend ? (V(), K("td", Zf, [
          e.schedule.saturday.am || e.schedule.saturday.pm ? (V(), K("div", Xf, [
            Jf,
            S("input", {
              name: "saturday_start_at",
              type: "time",
              step: "900",
              class: "w-full px-1 py-px text-sm border rounded",
              value: e.schedule.saturday.hours ? e.schedule.saturday.hours.start_at : void 0,
              onInput: r[31] || (r[31] = (l) => e.setHour("saturday", "start_at", l))
            }, null, 40, Qf),
            ed,
            S("input", {
              name: "saturday_left_at",
              type: "time",
              step: "900",
              class: "w-full px-1 py-px text-sm border rounded",
              value: e.schedule.saturday.hours ? e.schedule.saturday.hours.left_at : void 0,
              onInput: r[32] || (r[32] = (l) => e.setHour("saturday", "left_at", l))
            }, null, 40, td)
          ])) : ae("", !0)
        ])) : ae("", !0),
        e.withWeekend ? (V(), K("td", nd, [
          e.schedule.sunday.am || e.schedule.sunday.pm ? (V(), K("div", rd, [
            id,
            S("input", {
              name: "sunday_start_at",
              type: "time",
              step: "900",
              class: "w-full px-1 py-px text-sm border rounded",
              value: e.schedule.sunday.hours ? e.schedule.sunday.hours.start_at : void 0,
              onInput: r[33] || (r[33] = (l) => e.setHour("sunday", "start_at", l))
            }, null, 40, od),
            ld,
            S("input", {
              name: "sunday_left_at",
              type: "time",
              step: "900",
              class: "w-full px-1 py-px text-sm border rounded",
              value: e.schedule.sunday.hours ? e.schedule.sunday.hours.left_at : void 0,
              onInput: r[34] || (r[34] = (l) => e.setHour("sunday", "left_at", l))
            }, null, 40, ad)
          ])) : ae("", !0)
        ])) : ae("", !0)
      ])) : ae("", !0),
      S("tr", sd, [
        ud,
        S("td", null, [
          S("div", {
            class: pe(["absolute inset-0 flex items-center justify-center transition cursor-pointer", {
              "bg-green-500": e.schedule.monday.am
            }]),
            onClick: r[35] || (r[35] = (l) => e.toggle("monday", "am"))
          }, [
            e.schedule.monday.am ? (V(), K("svg", cd, dd)) : ae("", !0)
          ], 2)
        ]),
        S("td", null, [
          S("div", {
            class: pe(["absolute inset-0 flex items-center justify-center transition cursor-pointer", {
              "bg-green-500": e.schedule.monday.pm
            }]),
            onClick: r[36] || (r[36] = (l) => e.toggle("monday", "pm"))
          }, [
            e.schedule.monday.pm ? (V(), K("svg", hd, md)) : ae("", !0)
          ], 2)
        ])
      ]),
      S("tr", vd, [
        yd,
        S("td", null, [
          S("div", {
            class: pe(["absolute inset-0 flex items-center justify-center transition cursor-pointer", {
              "bg-green-500": e.schedule.tuesday.am
            }]),
            onClick: r[37] || (r[37] = (l) => e.toggle("tuesday", "am"))
          }, [
            e.schedule.tuesday.am ? (V(), K("svg", gd, _d)) : ae("", !0)
          ], 2)
        ]),
        S("td", null, [
          S("div", {
            class: pe(["absolute inset-0 flex items-center justify-center transition cursor-pointer", {
              "bg-green-500": e.schedule.tuesday.pm
            }]),
            onClick: r[38] || (r[38] = (l) => e.toggle("tuesday", "pm"))
          }, [
            e.schedule.tuesday.pm ? (V(), K("svg", wd, Od)) : ae("", !0)
          ], 2)
        ])
      ]),
      S("tr", xd, [
        Sd,
        S("td", null, [
          S("div", {
            class: pe(["absolute inset-0 flex items-center justify-center transition cursor-pointer", {
              "bg-green-500": e.schedule.wednesday.am
            }]),
            onClick: r[39] || (r[39] = (l) => e.toggle("wednesday", "am"))
          }, [
            e.schedule.wednesday.am ? (V(), K("svg", Ed, Ad)) : ae("", !0)
          ], 2)
        ]),
        S("td", null, [
          S("div", {
            class: pe(["absolute inset-0 flex items-center justify-center transition cursor-pointer", {
              "bg-green-500": e.schedule.wednesday.pm
            }]),
            onClick: r[40] || (r[40] = (l) => e.toggle("wednesday", "pm"))
          }, [
            e.schedule.wednesday.pm ? (V(), K("svg", Td, Nd)) : ae("", !0)
          ], 2)
        ])
      ]),
      S("tr", Cd, [
        Ld,
        S("td", null, [
          S("div", {
            class: pe(["absolute inset-0 flex items-center justify-center transition cursor-pointer", {
              "bg-green-500": e.schedule.thursday.am
            }]),
            onClick: r[41] || (r[41] = (l) => e.toggle("thursday", "am"))
          }, [
            e.schedule.thursday.am ? (V(), K("svg", Pd, Id)) : ae("", !0)
          ], 2)
        ]),
        S("td", null, [
          S("div", {
            class: pe(["absolute inset-0 flex items-center justify-center transition cursor-pointer", {
              "bg-green-500": e.schedule.thursday.pm
            }]),
            onClick: r[42] || (r[42] = (l) => e.toggle("thursday", "pm"))
          }, [
            e.schedule.thursday.pm ? (V(), K("svg", Bd, qd)) : ae("", !0)
          ], 2)
        ])
      ]),
      S("tr", Rd, [
        Vd,
        S("td", null, [
          S("div", {
            class: pe(["absolute inset-0 flex items-center justify-center transition cursor-pointer", {
              "bg-green-500": e.schedule.friday.am
            }]),
            onClick: r[43] || (r[43] = (l) => e.toggle("friday", "am"))
          }, [
            e.schedule.friday.am ? (V(), K("svg", Fd, zd)) : ae("", !0)
          ], 2)
        ]),
        S("td", null, [
          S("div", {
            class: pe(["absolute inset-0 flex items-center justify-center transition cursor-pointer", {
              "bg-green-500": e.schedule.friday.pm
            }]),
            onClick: r[44] || (r[44] = (l) => e.toggle("friday", "pm"))
          }, [
            e.schedule.friday.pm ? (V(), K("svg", Hd, Kd)) : ae("", !0)
          ], 2)
        ])
      ]),
      S("tr", Wd, [
        Gd,
        S("td", null, [
          S("div", {
            class: pe(["absolute inset-0 flex items-center justify-center transition cursor-pointer", {
              "bg-green-500": e.schedule.saturday.am
            }]),
            onClick: r[45] || (r[45] = (l) => e.toggle("saturday", "am"))
          }, [
            e.schedule.saturday.am ? (V(), K("svg", Zd, Jd)) : ae("", !0)
          ], 2)
        ]),
        S("td", null, [
          S("div", {
            class: pe(["absolute inset-0 flex items-center justify-center transition cursor-pointer", {
              "bg-green-500": e.schedule.saturday.pm
            }]),
            onClick: r[46] || (r[46] = (l) => e.toggle("saturday", "pm"))
          }, [
            e.schedule.saturday.pm ? (V(), K("svg", Qd, th)) : ae("", !0)
          ], 2)
        ])
      ]),
      S("tr", nh, [
        rh,
        S("td", null, [
          S("div", {
            class: pe(["absolute inset-0 flex items-center justify-center transition cursor-pointer", {
              "bg-green-500": e.schedule.sunday.am
            }]),
            onClick: r[47] || (r[47] = (l) => e.toggle("sunday", "am"))
          }, [
            e.schedule.sunday.am ? (V(), K("svg", ih, lh)) : ae("", !0)
          ], 2)
        ]),
        S("td", null, [
          S("div", {
            class: pe(["absolute inset-0 flex items-center justify-center transition cursor-pointer", {
              "bg-green-500": e.schedule.sunday.pm
            }]),
            onClick: r[48] || (r[48] = (l) => e.toggle("sunday", "pm"))
          }, [
            e.schedule.sunday.pm ? (V(), K("svg", ah, uh)) : ae("", !0)
          ], 2)
        ])
      ])
    ])
  ]);
}
const ly = /* @__PURE__ */ Ee(_c, [["render", ch]]), fh = st({
  mixins: [Bt],
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: [String, Number],
      required: !1,
      default: null
    },
    options: {
      type: Array,
      required: !0
    },
    gridClass: {
      type: String,
      default: "grid-cols-3 gap-3 sm:grid-cols-6"
    }
  }
}), dh = { class: "relative" }, hh = { class: "sr-only" }, ph = ["name", "required", "value", "aria-describedby", "onInput"], mh = ["id"];
function vh(e, r, t, s, o, b) {
  const l = ke("UiLayoutInput");
  return V(), je(l, Dt(It(e.layoutProps)), {
    default: Be(() => [
      S("div", dh, [
        S("fieldset", null, [
          S("legend", hh, we(e.name), 1),
          S("div", {
            class: pe(["grid", [e.gridClass]])
          }, [
            (V(!0), K(ze, null, Ye(e.options, (v, y) => (V(), K("label", {
              key: v.value,
              class: pe(["flex items-center justify-center px-3 py-3 text-sm font-medium border rounded-md cursor-pointer sm:flex-1 focus:outline-none", {
                "bg-primary-600 border-transparent text-white hover:bg-primary-700": e.modelValue === v.value,
                "bg-white border-gray-200 text-gray-900 hover:bg-gray-50": e.modelValue !== v.value
              }])
            }, [
              S("input", {
                type: "radio",
                name: e.name,
                required: e.required,
                value: v.value,
                class: "sr-only",
                "aria-describedby": e.name + "-" + y + "-description",
                onInput: (d) => e.$emit("update:modelValue", v.value)
              }, null, 40, ph),
              S("span", {
                id: e.name + "-" + y + "-description"
              }, we(v.label), 9, mh)
            ], 2))), 128))
          ], 2)
        ])
      ])
    ]),
    _: 1
  }, 16);
}
const ay = /* @__PURE__ */ Ee(fh, [["render", vh]]), yh = st({
  mixins: [Bt],
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: [String, Number],
      required: !1,
      default: null
    },
    options: {
      type: Array,
      required: !0
    }
  }
}), gh = { class: "relative" }, bh = { class: "sr-only" }, _h = { class: "relative z-0 -space-y-px bg-white rounded-md" }, wh = { class: "flex items-center text-sm" }, kh = ["name", "value", "aria-labelledby", "aria-describedby", "onInput"], Oh = ["id"], xh = ["id"], Sh = ["id"];
function Eh(e, r, t, s, o, b) {
  const l = ke("UiLayoutInput");
  return V(), je(l, Dt(It(e.layoutProps)), {
    default: Be(() => [
      S("div", gh, [
        S("fieldset", null, [
          S("legend", bh, we(e.name), 1),
          S("div", _h, [
            (V(!0), K(ze, null, Ye(e.options, (v, y) => (V(), K("label", {
              key: v,
              class: pe(["relative flex flex-col p-4 border cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none", {
                "bg-primary-50 border-primary-200 z-10": e.modelValue === v,
                "border-gray-200": e.modelValue !== v,
                "rounded-tl-md rounded-tr-md": y === 0,
                "rounded-bl-md rounded-br-md": y === e.options.length - 1
              }])
            }, [
              S("span", wh, [
                S("input", {
                  type: "radio",
                  name: e.name,
                  value: v,
                  class: "w-4 h-4 border-gray-300 text-primary-600 focus:ring-primary-500",
                  "aria-labelledby": e.name + "-" + y + "-label",
                  "aria-describedby": e.name + "-" + y + "-description",
                  onInput: (d) => e.$emit("update:modelValue", v)
                }, null, 40, kh),
                S("span", {
                  id: e.name + "-" + y + "-label",
                  class: pe([{
                    "text-primary-900": e.modelValue === v,
                    "text-gray-900": e.modelValue !== v
                  }, "ml-3 font-medium"])
                }, [
                  $e(e.$slots, v + "-label")
                ], 10, Oh)
              ]),
              S("span", {
                id: e.name + "-" + y + "-description",
                class: pe(["pl-1 ml-6 text-sm md:ml-0 md:pl-0 md:text-center", {
                  "text-primary-700": e.modelValue === v,
                  "text-gray-500": e.modelValue !== v
                }])
              }, [
                S("span", null, [
                  $e(e.$slots, v + "-description-center")
                ])
              ], 10, xh),
              S("span", {
                id: e.name + "-" + y + "-description-1",
                class: pe(["pl-1 ml-6 text-sm md:ml-0 md:pl-0 md:text-right", {
                  "text-primary-700": e.modelValue === v,
                  "text-gray-500": e.modelValue !== v
                }])
              }, [
                $e(e.$slots, v + "-description-right")
              ], 10, Sh)
            ], 2))), 128))
          ])
        ])
      ])
    ]),
    _: 3
  }, 16);
}
const sy = /* @__PURE__ */ Ee(yh, [["render", Eh]]);
function lr(e) {
  return [null, void 0, !1].indexOf(e) !== -1;
}
function $h(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ni(e) {
  var r = { exports: {} };
  return e(r, r.exports), r.exports;
}
var Ir = ni(function(e, r) {
  e.exports = function() {
    var t = ["decimals", "thousand", "mark", "prefix", "suffix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo"];
    function s(p) {
      return p.split("").reverse().join("");
    }
    function o(p, h) {
      return p.substring(0, h.length) === h;
    }
    function b(p, h) {
      return p.slice(-1 * h.length) === h;
    }
    function l(p, h, m) {
      if ((p[h] || p[m]) && p[h] === p[m])
        throw new Error(h);
    }
    function v(p) {
      return typeof p == "number" && isFinite(p);
    }
    function y(p, h) {
      return p = p.toString().split("e"), (+((p = (p = Math.round(+(p[0] + "e" + (p[1] ? +p[1] + h : h)))).toString().split("e"))[0] + "e" + (p[1] ? +p[1] - h : -h))).toFixed(h);
    }
    function d(p, h, m, f, u, k, c, w, M, $, A, P) {
      var O, x, E, T = P, L = "", D = "";
      return k && (P = k(P)), !!v(P) && (p !== !1 && parseFloat(P.toFixed(p)) === 0 && (P = 0), P < 0 && (O = !0, P = Math.abs(P)), p !== !1 && (P = y(P, p)), (P = P.toString()).indexOf(".") !== -1 ? (E = (x = P.split("."))[0], m && (L = m + x[1])) : E = P, h && (E = s(E).match(/.{1,3}/g), E = s(E.join(s(h)))), O && w && (D += w), f && (D += f), O && M && (D += M), D += E, D += L, u && (D += u), $ && (D = $(D, T)), D);
    }
    function g(p, h, m, f, u, k, c, w, M, $, A, P) {
      var O, x = "";
      return A && (P = A(P)), !(!P || typeof P != "string") && (w && o(P, w) && (P = P.replace(w, ""), O = !0), f && o(P, f) && (P = P.replace(f, "")), M && o(P, M) && (P = P.replace(M, ""), O = !0), u && b(P, u) && (P = P.slice(0, -1 * u.length)), h && (P = P.split(h).join("")), m && (P = P.replace(m, ".")), O && (x += "-"), (x = (x += P).replace(/[^0-9\.\-.]/g, "")) !== "" && (x = Number(x), c && (x = c(x)), !!v(x) && x));
    }
    function i(p) {
      var h, m, f, u = {};
      for (p.suffix === void 0 && (p.suffix = p.postfix), h = 0; h < t.length; h += 1)
        if ((f = p[m = t[h]]) === void 0)
          m !== "negative" || u.negativeBefore ? m === "mark" && u.thousand !== "." ? u[m] = "." : u[m] = !1 : u[m] = "-";
        else if (m === "decimals") {
          if (!(f >= 0 && f < 8))
            throw new Error(m);
          u[m] = f;
        } else if (m === "encoder" || m === "decoder" || m === "edit" || m === "undo") {
          if (typeof f != "function")
            throw new Error(m);
          u[m] = f;
        } else {
          if (typeof f != "string")
            throw new Error(m);
          u[m] = f;
        }
      return l(u, "mark", "thousand"), l(u, "prefix", "negative"), l(u, "prefix", "negativeBefore"), u;
    }
    function n(p, h, m) {
      var f, u = [];
      for (f = 0; f < t.length; f += 1)
        u.push(p[t[f]]);
      return u.push(m), h.apply("", u);
    }
    function a(p) {
      if (!(this instanceof a))
        return new a(p);
      typeof p == "object" && (p = i(p), this.to = function(h) {
        return n(p, d, h);
      }, this.from = function(h) {
        return n(p, g, h);
      });
    }
    return a;
  }();
}), Ah = $h(ni(function(e, r) {
  (function(t) {
    function s(Z) {
      return o(Z) && typeof Z.from == "function";
    }
    function o(Z) {
      return typeof Z == "object" && typeof Z.to == "function";
    }
    function b(Z) {
      Z.parentElement.removeChild(Z);
    }
    function l(Z) {
      return Z != null;
    }
    function v(Z) {
      Z.preventDefault();
    }
    function y(Z) {
      return Z.filter(function(N) {
        return !this[N] && (this[N] = !0);
      }, {});
    }
    function d(Z, N) {
      return Math.round(Z / N) * N;
    }
    function g(Z, N) {
      var ce = Z.getBoundingClientRect(), be = Z.ownerDocument, me = be.documentElement, xe = k(be);
      return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (xe.x = 0), N ? ce.top + xe.y - me.clientTop : ce.left + xe.x - me.clientLeft;
    }
    function i(Z) {
      return typeof Z == "number" && !isNaN(Z) && isFinite(Z);
    }
    function n(Z, N, ce) {
      ce > 0 && (m(Z, N), setTimeout(function() {
        f(Z, N);
      }, ce));
    }
    function a(Z) {
      return Math.max(Math.min(Z, 100), 0);
    }
    function p(Z) {
      return Array.isArray(Z) ? Z : [Z];
    }
    function h(Z) {
      var N = (Z = String(Z)).split(".");
      return N.length > 1 ? N[1].length : 0;
    }
    function m(Z, N) {
      Z.classList && !/\s/.test(N) ? Z.classList.add(N) : Z.className += " " + N;
    }
    function f(Z, N) {
      Z.classList && !/\s/.test(N) ? Z.classList.remove(N) : Z.className = Z.className.replace(new RegExp("(^|\\b)" + N.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
    function u(Z, N) {
      return Z.classList ? Z.classList.contains(N) : new RegExp("\\b" + N + "\\b").test(Z.className);
    }
    function k(Z) {
      var N = window.pageXOffset !== void 0, ce = (Z.compatMode || "") === "CSS1Compat";
      return { x: N ? window.pageXOffset : ce ? Z.documentElement.scrollLeft : Z.body.scrollLeft, y: N ? window.pageYOffset : ce ? Z.documentElement.scrollTop : Z.body.scrollTop };
    }
    function c() {
      return window.navigator.pointerEnabled ? { start: "pointerdown", move: "pointermove", end: "pointerup" } : window.navigator.msPointerEnabled ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" } : { start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend" };
    }
    function w() {
      var Z = !1;
      try {
        var N = Object.defineProperty({}, "passive", { get: function() {
          Z = !0;
        } });
        window.addEventListener("test", null, N);
      } catch {
      }
      return Z;
    }
    function M() {
      return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    }
    function $(Z, N) {
      return 100 / (N - Z);
    }
    function A(Z, N, ce) {
      return 100 * N / (Z[ce + 1] - Z[ce]);
    }
    function P(Z, N) {
      return A(Z, Z[0] < 0 ? N + Math.abs(Z[0]) : N - Z[0], 0);
    }
    function O(Z, N) {
      return N * (Z[1] - Z[0]) / 100 + Z[0];
    }
    function x(Z, N) {
      for (var ce = 1; Z >= N[ce]; )
        ce += 1;
      return ce;
    }
    function E(Z, N, ce) {
      if (ce >= Z.slice(-1)[0])
        return 100;
      var be = x(ce, Z), me = Z[be - 1], xe = Z[be], Re = N[be - 1], nt = N[be];
      return Re + P([me, xe], ce) / $(Re, nt);
    }
    function T(Z, N, ce) {
      if (ce >= 100)
        return Z.slice(-1)[0];
      var be = x(ce, N), me = Z[be - 1], xe = Z[be], Re = N[be - 1];
      return O([me, xe], (ce - Re) * $(Re, N[be]));
    }
    function L(Z, N, ce, be) {
      if (be === 100)
        return be;
      var me = x(be, Z), xe = Z[me - 1], Re = Z[me];
      return ce ? be - xe > (Re - xe) / 2 ? Re : xe : N[me - 1] ? Z[me - 1] + d(be - Z[me - 1], N[me - 1]) : be;
    }
    var D, z;
    t.PipsMode = void 0, (z = t.PipsMode || (t.PipsMode = {})).Range = "range", z.Steps = "steps", z.Positions = "positions", z.Count = "count", z.Values = "values", t.PipsType = void 0, (D = t.PipsType || (t.PipsType = {}))[D.None = -1] = "None", D[D.NoValue = 0] = "NoValue", D[D.LargeValue = 1] = "LargeValue", D[D.SmallValue = 2] = "SmallValue";
    var U = function() {
      function Z(N, ce, be) {
        var me;
        this.xPct = [], this.xVal = [], this.xSteps = [], this.xNumSteps = [], this.xHighestCompleteStep = [], this.xSteps = [be || !1], this.xNumSteps = [!1], this.snap = ce;
        var xe = [];
        for (Object.keys(N).forEach(function(Re) {
          xe.push([p(N[Re]), Re]);
        }), xe.sort(function(Re, nt) {
          return Re[0][0] - nt[0][0];
        }), me = 0; me < xe.length; me++)
          this.handleEntryPoint(xe[me][1], xe[me][0]);
        for (this.xNumSteps = this.xSteps.slice(0), me = 0; me < this.xNumSteps.length; me++)
          this.handleStepPoint(me, this.xNumSteps[me]);
      }
      return Z.prototype.getDistance = function(N) {
        for (var ce = [], be = 0; be < this.xNumSteps.length - 1; be++)
          ce[be] = A(this.xVal, N, be);
        return ce;
      }, Z.prototype.getAbsoluteDistance = function(N, ce, be) {
        var me, xe = 0;
        if (N < this.xPct[this.xPct.length - 1])
          for (; N > this.xPct[xe + 1]; )
            xe++;
        else
          N === this.xPct[this.xPct.length - 1] && (xe = this.xPct.length - 2);
        be || N !== this.xPct[xe + 1] || xe++, ce === null && (ce = []);
        var Re = 1, nt = ce[xe], Xe = 0, wt = 0, Ke = 0, Te = 0;
        for (me = be ? (N - this.xPct[xe]) / (this.xPct[xe + 1] - this.xPct[xe]) : (this.xPct[xe + 1] - N) / (this.xPct[xe + 1] - this.xPct[xe]); nt > 0; )
          Xe = this.xPct[xe + 1 + Te] - this.xPct[xe + Te], ce[xe + Te] * Re + 100 - 100 * me > 100 ? (wt = Xe * me, Re = (nt - 100 * me) / ce[xe + Te], me = 1) : (wt = ce[xe + Te] * Xe / 100 * Re, Re = 0), be ? (Ke -= wt, this.xPct.length + Te >= 1 && Te--) : (Ke += wt, this.xPct.length - Te >= 1 && Te++), nt = ce[xe + Te] * Re;
        return N + Ke;
      }, Z.prototype.toStepping = function(N) {
        return N = E(this.xVal, this.xPct, N);
      }, Z.prototype.fromStepping = function(N) {
        return T(this.xVal, this.xPct, N);
      }, Z.prototype.getStep = function(N) {
        return N = L(this.xPct, this.xSteps, this.snap, N);
      }, Z.prototype.getDefaultStep = function(N, ce, be) {
        var me = x(N, this.xPct);
        return (N === 100 || ce && N === this.xPct[me - 1]) && (me = Math.max(me - 1, 1)), (this.xVal[me] - this.xVal[me - 1]) / be;
      }, Z.prototype.getNearbySteps = function(N) {
        var ce = x(N, this.xPct);
        return { stepBefore: { startValue: this.xVal[ce - 2], step: this.xNumSteps[ce - 2], highestStep: this.xHighestCompleteStep[ce - 2] }, thisStep: { startValue: this.xVal[ce - 1], step: this.xNumSteps[ce - 1], highestStep: this.xHighestCompleteStep[ce - 1] }, stepAfter: { startValue: this.xVal[ce], step: this.xNumSteps[ce], highestStep: this.xHighestCompleteStep[ce] } };
      }, Z.prototype.countStepDecimals = function() {
        var N = this.xNumSteps.map(h);
        return Math.max.apply(null, N);
      }, Z.prototype.hasNoSize = function() {
        return this.xVal[0] === this.xVal[this.xVal.length - 1];
      }, Z.prototype.convert = function(N) {
        return this.getStep(this.toStepping(N));
      }, Z.prototype.handleEntryPoint = function(N, ce) {
        var be;
        if (!i(be = N === "min" ? 0 : N === "max" ? 100 : parseFloat(N)) || !i(ce[0]))
          throw new Error("noUiSlider: 'range' value isn't numeric.");
        this.xPct.push(be), this.xVal.push(ce[0]);
        var me = Number(ce[1]);
        be ? this.xSteps.push(!isNaN(me) && me) : isNaN(me) || (this.xSteps[0] = me), this.xHighestCompleteStep.push(0);
      }, Z.prototype.handleStepPoint = function(N, ce) {
        if (ce)
          if (this.xVal[N] !== this.xVal[N + 1]) {
            this.xSteps[N] = A([this.xVal[N], this.xVal[N + 1]], ce, 0) / $(this.xPct[N], this.xPct[N + 1]);
            var be = (this.xVal[N + 1] - this.xVal[N]) / this.xNumSteps[N], me = Math.ceil(Number(be.toFixed(3)) - 1), xe = this.xVal[N] + this.xNumSteps[N] * me;
            this.xHighestCompleteStep[N] = xe;
          } else
            this.xSteps[N] = this.xHighestCompleteStep[N] = this.xVal[N];
      }, Z;
    }(), te = { to: function(Z) {
      return Z === void 0 ? "" : Z.toFixed(2);
    }, from: Number }, F = { target: "target", base: "base", origin: "origin", handle: "handle", handleLower: "handle-lower", handleUpper: "handle-upper", touchArea: "touch-area", horizontal: "horizontal", vertical: "vertical", background: "background", connect: "connect", connects: "connects", ltr: "ltr", rtl: "rtl", textDirectionLtr: "txt-dir-ltr", textDirectionRtl: "txt-dir-rtl", draggable: "draggable", drag: "state-drag", tap: "state-tap", active: "active", tooltip: "tooltip", pips: "pips", pipsHorizontal: "pips-horizontal", pipsVertical: "pips-vertical", marker: "marker", markerHorizontal: "marker-horizontal", markerVertical: "marker-vertical", markerNormal: "marker-normal", markerLarge: "marker-large", markerSub: "marker-sub", value: "value", valueHorizontal: "value-horizontal", valueVertical: "value-vertical", valueNormal: "value-normal", valueLarge: "value-large", valueSub: "value-sub" }, j = { tooltips: ".__tooltips", aria: ".__aria" };
    function C(Z, N) {
      if (!i(N))
        throw new Error("noUiSlider: 'step' is not numeric.");
      Z.singleStep = N;
    }
    function q(Z, N) {
      if (!i(N))
        throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
      Z.keyboardPageMultiplier = N;
    }
    function R(Z, N) {
      if (!i(N))
        throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
      Z.keyboardMultiplier = N;
    }
    function X(Z, N) {
      if (!i(N))
        throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
      Z.keyboardDefaultStep = N;
    }
    function H(Z, N) {
      if (typeof N != "object" || Array.isArray(N))
        throw new Error("noUiSlider: 'range' is not an object.");
      if (N.min === void 0 || N.max === void 0)
        throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
      Z.spectrum = new U(N, Z.snap || !1, Z.singleStep);
    }
    function I(Z, N) {
      if (N = p(N), !Array.isArray(N) || !N.length)
        throw new Error("noUiSlider: 'start' option is incorrect.");
      Z.handles = N.length, Z.start = N;
    }
    function Y(Z, N) {
      if (typeof N != "boolean")
        throw new Error("noUiSlider: 'snap' option must be a boolean.");
      Z.snap = N;
    }
    function Q(Z, N) {
      if (typeof N != "boolean")
        throw new Error("noUiSlider: 'animate' option must be a boolean.");
      Z.animate = N;
    }
    function ee(Z, N) {
      if (typeof N != "number")
        throw new Error("noUiSlider: 'animationDuration' option must be a number.");
      Z.animationDuration = N;
    }
    function oe(Z, N) {
      var ce, be = [!1];
      if (N === "lower" ? N = [!0, !1] : N === "upper" && (N = [!1, !0]), N === !0 || N === !1) {
        for (ce = 1; ce < Z.handles; ce++)
          be.push(N);
        be.push(!1);
      } else {
        if (!Array.isArray(N) || !N.length || N.length !== Z.handles + 1)
          throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
        be = N;
      }
      Z.connect = be;
    }
    function ve(Z, N) {
      switch (N) {
        case "horizontal":
          Z.ort = 0;
          break;
        case "vertical":
          Z.ort = 1;
          break;
        default:
          throw new Error("noUiSlider: 'orientation' option is invalid.");
      }
    }
    function Oe(Z, N) {
      if (!i(N))
        throw new Error("noUiSlider: 'margin' option must be numeric.");
      N !== 0 && (Z.margin = Z.spectrum.getDistance(N));
    }
    function Me(Z, N) {
      if (!i(N))
        throw new Error("noUiSlider: 'limit' option must be numeric.");
      if (Z.limit = Z.spectrum.getDistance(N), !Z.limit || Z.handles < 2)
        throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
    }
    function De(Z, N) {
      var ce;
      if (!i(N) && !Array.isArray(N))
        throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
      if (Array.isArray(N) && N.length !== 2 && !i(N[0]) && !i(N[1]))
        throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
      if (N !== 0) {
        for (Array.isArray(N) || (N = [N, N]), Z.padding = [Z.spectrum.getDistance(N[0]), Z.spectrum.getDistance(N[1])], ce = 0; ce < Z.spectrum.xNumSteps.length - 1; ce++)
          if (Z.padding[0][ce] < 0 || Z.padding[1][ce] < 0)
            throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
        var be = N[0] + N[1], me = Z.spectrum.xVal[0];
        if (be / (Z.spectrum.xVal[Z.spectrum.xVal.length - 1] - me) > 1)
          throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
      }
    }
    function qe(Z, N) {
      switch (N) {
        case "ltr":
          Z.dir = 0;
          break;
        case "rtl":
          Z.dir = 1;
          break;
        default:
          throw new Error("noUiSlider: 'direction' option was not recognized.");
      }
    }
    function ut(Z, N) {
      if (typeof N != "string")
        throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
      var ce = N.indexOf("tap") >= 0, be = N.indexOf("drag") >= 0, me = N.indexOf("fixed") >= 0, xe = N.indexOf("snap") >= 0, Re = N.indexOf("hover") >= 0, nt = N.indexOf("unconstrained") >= 0, Xe = N.indexOf("drag-all") >= 0, wt = N.indexOf("smooth-steps") >= 0;
      if (me) {
        if (Z.handles !== 2)
          throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
        Oe(Z, Z.start[1] - Z.start[0]);
      }
      if (nt && (Z.margin || Z.limit))
        throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
      Z.events = { tap: ce || xe, drag: be, dragAll: Xe, smoothSteps: wt, fixed: me, snap: xe, hover: Re, unconstrained: nt };
    }
    function tt(Z, N) {
      if (N !== !1)
        if (N === !0 || o(N)) {
          Z.tooltips = [];
          for (var ce = 0; ce < Z.handles; ce++)
            Z.tooltips.push(N);
        } else {
          if ((N = p(N)).length !== Z.handles)
            throw new Error("noUiSlider: must pass a formatter for all handles.");
          N.forEach(function(be) {
            if (typeof be != "boolean" && !o(be))
              throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
          }), Z.tooltips = N;
        }
    }
    function ie(Z, N) {
      if (N.length !== Z.handles)
        throw new Error("noUiSlider: must pass a attributes for all handles.");
      Z.handleAttributes = N;
    }
    function le(Z, N) {
      if (!o(N))
        throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
      Z.ariaFormat = N;
    }
    function de(Z, N) {
      if (!s(N))
        throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
      Z.format = N;
    }
    function ye(Z, N) {
      if (typeof N != "boolean")
        throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
      Z.keyboardSupport = N;
    }
    function ue(Z, N) {
      Z.documentElement = N;
    }
    function Pe(Z, N) {
      if (typeof N != "string" && N !== !1)
        throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
      Z.cssPrefix = N;
    }
    function Ae(Z, N) {
      if (typeof N != "object")
        throw new Error("noUiSlider: 'cssClasses' must be an object.");
      typeof Z.cssPrefix == "string" ? (Z.cssClasses = {}, Object.keys(N).forEach(function(ce) {
        Z.cssClasses[ce] = Z.cssPrefix + N[ce];
      })) : Z.cssClasses = N;
    }
    function Ne(Z) {
      var N = { margin: null, limit: null, padding: null, animate: !0, animationDuration: 300, ariaFormat: te, format: te }, ce = { step: { r: !1, t: C }, keyboardPageMultiplier: { r: !1, t: q }, keyboardMultiplier: { r: !1, t: R }, keyboardDefaultStep: { r: !1, t: X }, start: { r: !0, t: I }, connect: { r: !0, t: oe }, direction: { r: !0, t: qe }, snap: { r: !1, t: Y }, animate: { r: !1, t: Q }, animationDuration: { r: !1, t: ee }, range: { r: !0, t: H }, orientation: { r: !1, t: ve }, margin: { r: !1, t: Oe }, limit: { r: !1, t: Me }, padding: { r: !1, t: De }, behaviour: { r: !0, t: ut }, ariaFormat: { r: !1, t: le }, format: { r: !1, t: de }, tooltips: { r: !1, t: tt }, keyboardSupport: { r: !0, t: ye }, documentElement: { r: !1, t: ue }, cssPrefix: { r: !0, t: Pe }, cssClasses: { r: !0, t: Ae }, handleAttributes: { r: !1, t: ie } }, be = { connect: !1, direction: "ltr", behaviour: "tap", orientation: "horizontal", keyboardSupport: !0, cssPrefix: "noUi-", cssClasses: F, keyboardPageMultiplier: 5, keyboardMultiplier: 1, keyboardDefaultStep: 10 };
      Z.format && !Z.ariaFormat && (Z.ariaFormat = Z.format), Object.keys(ce).forEach(function(Xe) {
        if (l(Z[Xe]) || be[Xe] !== void 0)
          ce[Xe].t(N, l(Z[Xe]) ? Z[Xe] : be[Xe]);
        else if (ce[Xe].r)
          throw new Error("noUiSlider: '" + Xe + "' is required.");
      }), N.pips = Z.pips;
      var me = document.createElement("div"), xe = me.style.msTransform !== void 0, Re = me.style.transform !== void 0;
      N.transformRule = Re ? "transform" : xe ? "msTransform" : "webkitTransform";
      var nt = [["left", "top"], ["right", "bottom"]];
      return N.style = nt[N.dir][N.ort], N;
    }
    function _t(Z, N, ce) {
      var be, me, xe, Re, nt, Xe = c(), wt = M() && w(), Ke = Z, Te = N.spectrum, Et = [], We = [], ht = [], Ut = 0, $t = {}, jt = Z.ownerDocument, Wt = N.documentElement || jt.documentElement, Ct = jt.body, On = jt.dir === "rtl" || N.ort === 1 ? 0 : 100;
      function vt(G, J) {
        var ne = jt.createElement("div");
        return J && m(ne, J), G.appendChild(ne), ne;
      }
      function Ln(G, J) {
        var ne = vt(G, N.cssClasses.origin), se = vt(ne, N.cssClasses.handle);
        if (vt(se, N.cssClasses.touchArea), se.setAttribute("data-handle", String(J)), N.keyboardSupport && (se.setAttribute("tabindex", "0"), se.addEventListener("keydown", function(he) {
          return mn(he, J);
        })), N.handleAttributes !== void 0) {
          var fe = N.handleAttributes[J];
          Object.keys(fe).forEach(function(he) {
            se.setAttribute(he, fe[he]);
          });
        }
        return se.setAttribute("role", "slider"), se.setAttribute("aria-orientation", N.ort ? "vertical" : "horizontal"), J === 0 ? m(se, N.cssClasses.handleLower) : J === N.handles - 1 && m(se, N.cssClasses.handleUpper), ne;
      }
      function xn(G, J) {
        return !!J && vt(G, N.cssClasses.connect);
      }
      function Pn(G, J) {
        var ne = vt(J, N.cssClasses.connects);
        me = [], (xe = []).push(xn(ne, G[0]));
        for (var se = 0; se < N.handles; se++)
          me.push(Ln(J, se)), ht[se] = se, xe.push(xn(ne, G[se + 1]));
      }
      function Sn(G) {
        return m(G, N.cssClasses.target), N.dir === 0 ? m(G, N.cssClasses.ltr) : m(G, N.cssClasses.rtl), N.ort === 0 ? m(G, N.cssClasses.horizontal) : m(G, N.cssClasses.vertical), m(G, getComputedStyle(G).direction === "rtl" ? N.cssClasses.textDirectionRtl : N.cssClasses.textDirectionLtr), vt(G, N.cssClasses.base);
      }
      function cn(G, J) {
        return !(!N.tooltips || !N.tooltips[J]) && vt(G.firstChild, N.cssClasses.tooltip);
      }
      function pt() {
        return Ke.hasAttribute("disabled");
      }
      function fn(G) {
        return me[G].hasAttribute("disabled");
      }
      function dn() {
        nt && (en("update" + j.tooltips), nt.forEach(function(G) {
          G && b(G);
        }), nt = null);
      }
      function En() {
        dn(), nt = me.map(cn), vn("update" + j.tooltips, function(G, J, ne) {
          if (nt && N.tooltips && nt[J] !== !1) {
            var se = G[J];
            N.tooltips[J] !== !0 && (se = N.tooltips[J].to(ne[J])), nt[J].innerHTML = se;
          }
        });
      }
      function Dn() {
        en("update" + j.aria), vn("update" + j.aria, function(G, J, ne, se, fe) {
          ht.forEach(function(he) {
            var Ce = me[he], ge = zt(We, he, 0, !0, !0, !0), et = zt(We, he, 100, !0, !0, !0), Je = fe[he], Ge = String(N.ariaFormat.to(ne[he]));
            ge = Te.fromStepping(ge).toFixed(1), et = Te.fromStepping(et).toFixed(1), Je = Te.fromStepping(Je).toFixed(1), Ce.children[0].setAttribute("aria-valuemin", ge), Ce.children[0].setAttribute("aria-valuemax", et), Ce.children[0].setAttribute("aria-valuenow", Je), Ce.children[0].setAttribute("aria-valuetext", Ge);
          });
        });
      }
      function In(G) {
        if (G.mode === t.PipsMode.Range || G.mode === t.PipsMode.Steps)
          return Te.xVal;
        if (G.mode === t.PipsMode.Count) {
          if (G.values < 2)
            throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
          for (var J = G.values - 1, ne = 100 / J, se = []; J--; )
            se[J] = J * ne;
          return se.push(100), yt(se, G.stepped);
        }
        return G.mode === t.PipsMode.Positions ? yt(G.values, G.stepped) : G.mode === t.PipsMode.Values ? G.stepped ? G.values.map(function(fe) {
          return Te.fromStepping(Te.getStep(Te.toStepping(fe)));
        }) : G.values : [];
      }
      function yt(G, J) {
        return G.map(function(ne) {
          return Te.fromStepping(J ? Te.getStep(ne) : ne);
        });
      }
      function Bn(G) {
        function J(Je, Ge) {
          return Number((Je + Ge).toFixed(7));
        }
        var ne = In(G), se = {}, fe = Te.xVal[0], he = Te.xVal[Te.xVal.length - 1], Ce = !1, ge = !1, et = 0;
        return (ne = y(ne.slice().sort(function(Je, Ge) {
          return Je - Ge;
        })))[0] !== fe && (ne.unshift(fe), Ce = !0), ne[ne.length - 1] !== he && (ne.push(he), ge = !0), ne.forEach(function(Je, Ge) {
          var Qe, Ve, lt, rt, ot, sn, bn, Cn, _, B, W = Je, re = ne[Ge + 1], Le = G.mode === t.PipsMode.Steps;
          for (Le && (Qe = Te.xNumSteps[Ge]), Qe || (Qe = re - W), re === void 0 && (re = W), Qe = Math.max(Qe, 1e-7), Ve = W; Ve <= re; Ve = J(Ve, Qe)) {
            for (Cn = (ot = (rt = Te.toStepping(Ve)) - et) / (G.density || 1), B = ot / (_ = Math.round(Cn)), lt = 1; lt <= _; lt += 1)
              se[(sn = et + lt * B).toFixed(5)] = [Te.fromStepping(sn), 0];
            bn = ne.indexOf(Ve) > -1 ? t.PipsType.LargeValue : Le ? t.PipsType.SmallValue : t.PipsType.NoValue, !Ge && Ce && Ve !== re && (bn = 0), Ve === re && ge || (se[rt.toFixed(5)] = [Ve, bn]), et = rt;
          }
        }), se;
      }
      function jn(G, J, ne) {
        var se, fe, he = jt.createElement("div"), Ce = ((se = {})[t.PipsType.None] = "", se[t.PipsType.NoValue] = N.cssClasses.valueNormal, se[t.PipsType.LargeValue] = N.cssClasses.valueLarge, se[t.PipsType.SmallValue] = N.cssClasses.valueSub, se), ge = ((fe = {})[t.PipsType.None] = "", fe[t.PipsType.NoValue] = N.cssClasses.markerNormal, fe[t.PipsType.LargeValue] = N.cssClasses.markerLarge, fe[t.PipsType.SmallValue] = N.cssClasses.markerSub, fe), et = [N.cssClasses.valueHorizontal, N.cssClasses.valueVertical], Je = [N.cssClasses.markerHorizontal, N.cssClasses.markerVertical];
        function Ge(Ve, lt) {
          var rt = lt === N.cssClasses.value, ot = rt ? Ce : ge;
          return lt + " " + (rt ? et : Je)[N.ort] + " " + ot[Ve];
        }
        function Qe(Ve, lt, rt) {
          if ((rt = J ? J(lt, rt) : rt) !== t.PipsType.None) {
            var ot = vt(he, !1);
            ot.className = Ge(rt, N.cssClasses.marker), ot.style[N.style] = Ve + "%", rt > t.PipsType.NoValue && ((ot = vt(he, !1)).className = Ge(rt, N.cssClasses.value), ot.setAttribute("data-value", String(lt)), ot.style[N.style] = Ve + "%", ot.innerHTML = String(ne.to(lt)));
          }
        }
        return m(he, N.cssClasses.pips), m(he, N.ort === 0 ? N.cssClasses.pipsHorizontal : N.cssClasses.pipsVertical), Object.keys(G).forEach(function(Ve) {
          Qe(Ve, G[Ve][0], G[Ve][1]);
        }), he;
      }
      function hn() {
        Re && (b(Re), Re = null);
      }
      function pn(G) {
        hn();
        var J = Bn(G), ne = G.filter, se = G.format || { to: function(fe) {
          return String(Math.round(fe));
        } };
        return Re = Ke.appendChild(jn(J, ne, se));
      }
      function $n() {
        var G = be.getBoundingClientRect(), J = "offset" + ["Width", "Height"][N.ort];
        return N.ort === 0 ? G.width || be[J] : G.height || be[J];
      }
      function ct(G, J, ne, se) {
        var fe = function(Ce) {
          var ge = qn(Ce, se.pageOffset, se.target || J);
          return !!ge && !(pt() && !se.doNotReject) && !(u(Ke, N.cssClasses.tap) && !se.doNotReject) && !(G === Xe.start && ge.buttons !== void 0 && ge.buttons > 1) && (!se.hover || !ge.buttons) && (wt || ge.preventDefault(), ge.calcPoint = ge.points[N.ort], void ne(ge, se));
        }, he = [];
        return G.split(" ").forEach(function(Ce) {
          J.addEventListener(Ce, fe, !!wt && { passive: !0 }), he.push([Ce, fe]);
        }), he;
      }
      function qn(G, J, ne) {
        var se = G.type.indexOf("touch") === 0, fe = G.type.indexOf("mouse") === 0, he = G.type.indexOf("pointer") === 0, Ce = 0, ge = 0;
        if (G.type.indexOf("MSPointer") === 0 && (he = !0), G.type === "mousedown" && !G.buttons && !G.touches)
          return !1;
        if (se) {
          var et = function(Qe) {
            var Ve = Qe.target;
            return Ve === ne || ne.contains(Ve) || G.composed && G.composedPath().shift() === ne;
          };
          if (G.type === "touchstart") {
            var Je = Array.prototype.filter.call(G.touches, et);
            if (Je.length > 1)
              return !1;
            Ce = Je[0].pageX, ge = Je[0].pageY;
          } else {
            var Ge = Array.prototype.find.call(G.changedTouches, et);
            if (!Ge)
              return !1;
            Ce = Ge.pageX, ge = Ge.pageY;
          }
        }
        return J = J || k(jt), (fe || he) && (Ce = G.clientX + J.x, ge = G.clientY + J.y), G.pageOffset = J, G.points = [Ce, ge], G.cursor = fe || he, G;
      }
      function An(G) {
        var J = 100 * (G - g(be, N.ort)) / $n();
        return J = a(J), N.dir ? 100 - J : J;
      }
      function Rn(G) {
        var J = 100, ne = !1;
        return me.forEach(function(se, fe) {
          if (!fn(fe)) {
            var he = We[fe], Ce = Math.abs(he - G);
            (Ce < J || Ce <= J && G > he || Ce === 100 && J === 100) && (ne = fe, J = Ce);
          }
        }), ne;
      }
      function Vn(G, J) {
        G.type === "mouseout" && G.target.nodeName === "HTML" && G.relatedTarget === null && Gt(G, J);
      }
      function Fn(G, J) {
        if (navigator.appVersion.indexOf("MSIE 9") === -1 && G.buttons === 0 && J.buttonsProperty !== 0)
          return Gt(G, J);
        var ne = (N.dir ? -1 : 1) * (G.calcPoint - J.startCalcPoint);
        Zt(ne > 0, 100 * ne / J.baseSize, J.locations, J.handleNumbers, J.connect);
      }
      function Gt(G, J) {
        J.handle && (f(J.handle, N.cssClasses.active), Ut -= 1), J.listeners.forEach(function(ne) {
          Wt.removeEventListener(ne[0], ne[1]);
        }), Ut === 0 && (f(Ke, N.cssClasses.drag), gn(), G.cursor && (Ct.style.cursor = "", Ct.removeEventListener("selectstart", v))), N.events.smoothSteps && (J.handleNumbers.forEach(function(ne) {
          Ht(ne, We[ne], !0, !0, !1, !1);
        }), J.handleNumbers.forEach(function(ne) {
          it("update", ne);
        })), J.handleNumbers.forEach(function(ne) {
          it("change", ne), it("set", ne), it("end", ne);
        });
      }
      function on(G, J) {
        if (!J.handleNumbers.some(fn)) {
          var ne;
          J.handleNumbers.length === 1 && (ne = me[J.handleNumbers[0]].children[0], Ut += 1, m(ne, N.cssClasses.active)), G.stopPropagation();
          var se = [], fe = ct(Xe.move, Wt, Fn, { target: G.target, handle: ne, connect: J.connect, listeners: se, startCalcPoint: G.calcPoint, baseSize: $n(), pageOffset: G.pageOffset, handleNumbers: J.handleNumbers, buttonsProperty: G.buttons, locations: We.slice() }), he = ct(Xe.end, Wt, Gt, { target: G.target, handle: ne, listeners: se, doNotReject: !0, handleNumbers: J.handleNumbers }), Ce = ct("mouseout", Wt, Vn, { target: G.target, handle: ne, listeners: se, doNotReject: !0, handleNumbers: J.handleNumbers });
          se.push.apply(se, fe.concat(he, Ce)), G.cursor && (Ct.style.cursor = getComputedStyle(G.target).cursor, me.length > 1 && m(Ke, N.cssClasses.drag), Ct.addEventListener("selectstart", v, !1)), J.handleNumbers.forEach(function(ge) {
            it("start", ge);
          });
        }
      }
      function ln(G) {
        G.stopPropagation();
        var J = An(G.calcPoint), ne = Rn(J);
        ne !== !1 && (N.events.snap || n(Ke, N.cssClasses.tap, N.animationDuration), Ht(ne, J, !0, !0), gn(), it("slide", ne, !0), it("update", ne, !0), N.events.snap ? on(G, { handleNumbers: [ne] }) : (it("change", ne, !0), it("set", ne, !0)));
      }
      function qt(G) {
        var J = An(G.calcPoint), ne = Te.getStep(J), se = Te.fromStepping(ne);
        Object.keys($t).forEach(function(fe) {
          fe.split(".")[0] === "hover" && $t[fe].forEach(function(he) {
            he.call(an, se);
          });
        });
      }
      function mn(G, J) {
        if (pt() || fn(J))
          return !1;
        var ne = ["Left", "Right"], se = ["Down", "Up"], fe = ["PageDown", "PageUp"], he = ["Home", "End"];
        N.dir && !N.ort ? ne.reverse() : N.ort && !N.dir && (se.reverse(), fe.reverse());
        var Ce, ge = G.key.replace("Arrow", ""), et = ge === fe[0], Je = ge === fe[1], Ge = ge === se[0] || ge === ne[0] || et, Qe = ge === se[1] || ge === ne[1] || Je, Ve = ge === he[0], lt = ge === he[1];
        if (!(Ge || Qe || Ve || lt))
          return !0;
        if (G.preventDefault(), Qe || Ge) {
          var rt = Ge ? 0 : 1, ot = Rt(J)[rt];
          if (ot === null)
            return !1;
          ot === !1 && (ot = Te.getDefaultStep(We[J], Ge, N.keyboardDefaultStep)), ot *= Je || et ? N.keyboardPageMultiplier : N.keyboardMultiplier, ot = Math.max(ot, 1e-7), ot *= Ge ? -1 : 1, Ce = Et[J] + ot;
        } else
          Ce = lt ? N.spectrum.xVal[N.spectrum.xVal.length - 1] : N.spectrum.xVal[0];
        return Ht(J, Te.toStepping(Ce), !0, !0), it("slide", J), it("update", J), it("change", J), it("set", J), !1;
      }
      function Un(G) {
        G.fixed || me.forEach(function(J, ne) {
          ct(Xe.start, J.children[0], on, { handleNumbers: [ne] });
        }), G.tap && ct(Xe.start, be, ln, {}), G.hover && ct(Xe.move, be, qt, { hover: !0 }), G.drag && xe.forEach(function(J, ne) {
          if (J !== !1 && ne !== 0 && ne !== xe.length - 1) {
            var se = me[ne - 1], fe = me[ne], he = [J], Ce = [se, fe], ge = [ne - 1, ne];
            m(J, N.cssClasses.draggable), G.fixed && (he.push(se.children[0]), he.push(fe.children[0])), G.dragAll && (Ce = me, ge = ht), he.forEach(function(et) {
              ct(Xe.start, et, on, { handles: Ce, handleNumbers: ge, connect: J });
            });
          }
        });
      }
      function vn(G, J) {
        $t[G] = $t[G] || [], $t[G].push(J), G.split(".")[0] === "update" && me.forEach(function(ne, se) {
          it("update", se);
        });
      }
      function zn(G) {
        return G === j.aria || G === j.tooltips;
      }
      function en(G) {
        var J = G && G.split(".")[0], ne = J ? G.substring(J.length) : G;
        Object.keys($t).forEach(function(se) {
          var fe = se.split(".")[0], he = se.substring(fe.length);
          J && J !== fe || ne && ne !== he || zn(he) && ne !== he || delete $t[se];
        });
      }
      function it(G, J, ne) {
        Object.keys($t).forEach(function(se) {
          var fe = se.split(".")[0];
          G === fe && $t[se].forEach(function(he) {
            he.call(an, Et.map(N.format.to), J, Et.slice(), ne || !1, We.slice(), an);
          });
        });
      }
      function zt(G, J, ne, se, fe, he, Ce) {
        var ge;
        return me.length > 1 && !N.events.unconstrained && (se && J > 0 && (ge = Te.getAbsoluteDistance(G[J - 1], N.margin, !1), ne = Math.max(ne, ge)), fe && J < me.length - 1 && (ge = Te.getAbsoluteDistance(G[J + 1], N.margin, !0), ne = Math.min(ne, ge))), me.length > 1 && N.limit && (se && J > 0 && (ge = Te.getAbsoluteDistance(G[J - 1], N.limit, !1), ne = Math.min(ne, ge)), fe && J < me.length - 1 && (ge = Te.getAbsoluteDistance(G[J + 1], N.limit, !0), ne = Math.max(ne, ge))), N.padding && (J === 0 && (ge = Te.getAbsoluteDistance(0, N.padding[0], !1), ne = Math.max(ne, ge)), J === me.length - 1 && (ge = Te.getAbsoluteDistance(100, N.padding[1], !0), ne = Math.min(ne, ge))), Ce || (ne = Te.getStep(ne)), !((ne = a(ne)) === G[J] && !he) && ne;
      }
      function tn(G, J) {
        var ne = N.ort;
        return (ne ? J : G) + ", " + (ne ? G : J);
      }
      function Zt(G, J, ne, se, fe) {
        var he = ne.slice(), Ce = se[0], ge = N.events.smoothSteps, et = [!G, G], Je = [G, !G];
        se = se.slice(), G && se.reverse(), se.length > 1 ? se.forEach(function(Qe, Ve) {
          var lt = zt(he, Qe, he[Qe] + J, et[Ve], Je[Ve], !1, ge);
          lt === !1 ? J = 0 : (J = lt - he[Qe], he[Qe] = lt);
        }) : et = Je = [!0];
        var Ge = !1;
        se.forEach(function(Qe, Ve) {
          Ge = Ht(Qe, ne[Qe] + J, et[Ve], Je[Ve], !1, ge) || Ge;
        }), Ge && (se.forEach(function(Qe) {
          it("update", Qe), it("slide", Qe);
        }), fe != null && it("drag", Ce));
      }
      function yn(G, J) {
        return N.dir ? 100 - G - J : G;
      }
      function Tn(G, J) {
        We[G] = J, Et[G] = Te.fromStepping(J);
        var ne = "translate(" + tn(yn(J, 0) - On + "%", "0") + ")";
        me[G].style[N.transformRule] = ne, Mn(G), Mn(G + 1);
      }
      function gn() {
        ht.forEach(function(G) {
          var J = We[G] > 50 ? -1 : 1, ne = 3 + (me.length + J * G);
          me[G].style.zIndex = String(ne);
        });
      }
      function Ht(G, J, ne, se, fe, he) {
        return fe || (J = zt(We, G, J, ne, se, !1, he)), J !== !1 && (Tn(G, J), !0);
      }
      function Mn(G) {
        if (xe[G]) {
          var J = 0, ne = 100;
          G !== 0 && (J = We[G - 1]), G !== xe.length - 1 && (ne = We[G]);
          var se = ne - J, fe = "translate(" + tn(yn(J, se) + "%", "0") + ")", he = "scale(" + tn(se / 100, "1") + ")";
          xe[G].style[N.transformRule] = fe + " " + he;
        }
      }
      function Nn(G, J) {
        return G === null || G === !1 || G === void 0 ? We[J] : (typeof G == "number" && (G = String(G)), (G = N.format.from(G)) !== !1 && (G = Te.toStepping(G)), G === !1 || isNaN(G) ? We[J] : G);
      }
      function Xt(G, J, ne) {
        var se = p(G), fe = We[0] === void 0;
        J = J === void 0 || J, N.animate && !fe && n(Ke, N.cssClasses.tap, N.animationDuration), ht.forEach(function(ge) {
          Ht(ge, Nn(se[ge], ge), !0, !1, ne);
        });
        var he = ht.length === 1 ? 0 : 1;
        if (fe && Te.hasNoSize() && (ne = !0, We[0] = 0, ht.length > 1)) {
          var Ce = 100 / (ht.length - 1);
          ht.forEach(function(ge) {
            We[ge] = ge * Ce;
          });
        }
        for (; he < ht.length; ++he)
          ht.forEach(function(ge) {
            Ht(ge, We[ge], !0, !0, ne);
          });
        gn(), ht.forEach(function(ge) {
          it("update", ge), se[ge] !== null && J && it("set", ge);
        });
      }
      function Hn(G) {
        Xt(N.start, G);
      }
      function Yn(G, J, ne, se) {
        if (!((G = Number(G)) >= 0 && G < ht.length))
          throw new Error("noUiSlider: invalid handle number, got: " + G);
        Ht(G, Nn(J, G), !0, !0, se), it("update", G), ne && it("set", G);
      }
      function Jt(G) {
        if (G === void 0 && (G = !1), G)
          return Et.length === 1 ? Et[0] : Et.slice(0);
        var J = Et.map(N.format.to);
        return J.length === 1 ? J[0] : J;
      }
      function Lt() {
        for (en(j.aria), en(j.tooltips), Object.keys(N.cssClasses).forEach(function(G) {
          f(Ke, N.cssClasses[G]);
        }); Ke.firstChild; )
          Ke.removeChild(Ke.firstChild);
        delete Ke.noUiSlider;
      }
      function Rt(G) {
        var J = We[G], ne = Te.getNearbySteps(J), se = Et[G], fe = ne.thisStep.step, he = null;
        if (N.snap)
          return [se - ne.stepBefore.startValue || null, ne.stepAfter.startValue - se || null];
        fe !== !1 && se + fe > ne.stepAfter.startValue && (fe = ne.stepAfter.startValue - se), he = se > ne.thisStep.startValue ? ne.thisStep.step : ne.stepBefore.step !== !1 && se - ne.stepBefore.highestStep, J === 100 ? fe = null : J === 0 && (he = null);
        var Ce = Te.countStepDecimals();
        return fe !== null && fe !== !1 && (fe = Number(fe.toFixed(Ce))), he !== null && he !== !1 && (he = Number(he.toFixed(Ce))), [he, fe];
      }
      function Yt() {
        return ht.map(Rt);
      }
      function Kn(G, J) {
        var ne = Jt(), se = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"];
        se.forEach(function(he) {
          G[he] !== void 0 && (ce[he] = G[he]);
        });
        var fe = Ne(ce);
        se.forEach(function(he) {
          G[he] !== void 0 && (N[he] = fe[he]);
        }), Te = fe.spectrum, N.margin = fe.margin, N.limit = fe.limit, N.padding = fe.padding, N.pips ? pn(N.pips) : hn(), N.tooltips ? En() : dn(), We = [], Xt(l(G.start) ? G.start : ne, J);
      }
      function Vt() {
        be = Sn(Ke), Pn(N.connect, be), Un(N.events), Xt(N.start), N.pips && pn(N.pips), N.tooltips && En(), Dn();
      }
      Vt();
      var an = { destroy: Lt, steps: Yt, on: vn, off: en, get: Jt, set: Xt, setHandle: Yn, reset: Hn, __moveHandles: function(G, J, ne) {
        Zt(G, J, We, ne);
      }, options: ce, updateOptions: Kn, target: Ke, removePips: hn, removeTooltips: dn, getPositions: function() {
        return We.slice();
      }, getTooltips: function() {
        return nt;
      }, getOrigins: function() {
        return me;
      }, pips: pn };
      return an;
    }
    function dt(Z, N) {
      if (!Z || !Z.nodeName)
        throw new Error("noUiSlider: create requires a single element, got: " + Z);
      if (Z.noUiSlider)
        throw new Error("noUiSlider: Slider was already initialized.");
      var ce = _t(Z, Ne(N), N);
      return Z.noUiSlider = ce, ce;
    }
    var He = { __spectrum: U, cssClasses: F, create: dt };
    t.create = dt, t.cssClasses = F, t.default = He, Object.defineProperty(t, "__esModule", { value: !0 });
  })(r);
}));
function Br(e, r) {
  if (!Array.isArray(e) || !Array.isArray(r))
    return !1;
  const t = r.slice().sort();
  return e.length === r.length && e.slice().sort().every(function(s, o) {
    return s === t[o];
  });
}
var wr = { name: "Slider", emits: ["input", "update:modelValue", "start", "slide", "drag", "update", "change", "set", "end"], props: { value: { validator: function(e) {
  return (r) => typeof r == "number" || r instanceof Array || r == null || r === !1;
}, required: !1 }, modelValue: { validator: function(e) {
  return (r) => typeof r == "number" || r instanceof Array || r == null || r === !1;
}, required: !1 }, id: { type: [String, Number], required: !1 }, disabled: { type: Boolean, required: !1, default: !1 }, min: { type: Number, required: !1, default: 0 }, max: { type: Number, required: !1, default: 100 }, step: { type: Number, required: !1, default: 1 }, orientation: { type: String, required: !1, default: "horizontal" }, direction: { type: String, required: !1, default: "ltr" }, tooltips: { type: Boolean, required: !1, default: !0 }, options: { type: Object, required: !1, default: () => ({}) }, merge: { type: Number, required: !1, default: -1 }, format: { type: [Object, Function, Boolean], required: !1, default: null }, classes: { type: Object, required: !1, default: () => ({}) }, showTooltip: { type: String, required: !1, default: "always" }, tooltipPosition: { type: String, required: !1, default: null }, lazy: { type: Boolean, required: !1, default: !0 }, ariaLabelledby: { type: String, required: !1, default: void 0 }, aria: { required: !1, type: Object, default: () => ({}) } }, setup(e, r) {
  const t = function(l, v, y) {
    const { value: d, modelValue: g, min: i } = nr(l);
    let n = g && g.value !== void 0 ? g : d;
    const a = Ft(n.value);
    if (lr(n.value) && (n = Ft(i.value)), Array.isArray(n.value) && n.value.length == 0)
      throw new Error("Slider v-model must not be an empty array");
    return { value: n, initialValue: a };
  }(e), s = function(l, v, y) {
    const { classes: d, showTooltip: g, tooltipPosition: i, orientation: n } = nr(l), a = rn(() => ({ target: "slider-target", focused: "slider-focused", tooltipFocus: "slider-tooltip-focus", tooltipDrag: "slider-tooltip-drag", ltr: "slider-ltr", rtl: "slider-rtl", horizontal: "slider-horizontal", vertical: "slider-vertical", textDirectionRtl: "slider-txt-dir-rtl", textDirectionLtr: "slider-txt-dir-ltr", base: "slider-base", connects: "slider-connects", connect: "slider-connect", origin: "slider-origin", handle: "slider-handle", handleLower: "slider-handle-lower", handleUpper: "slider-handle-upper", touchArea: "slider-touch-area", tooltip: "slider-tooltip", tooltipTop: "slider-tooltip-top", tooltipBottom: "slider-tooltip-bottom", tooltipLeft: "slider-tooltip-left", tooltipRight: "slider-tooltip-right", tooltipHidden: "slider-tooltip-hidden", active: "slider-active", draggable: "slider-draggable", tap: "slider-state-tap", drag: "slider-state-drag", pips: "slider-pips", pipsHorizontal: "slider-pips-horizontal", pipsVertical: "slider-pips-vertical", marker: "slider-marker", markerHorizontal: "slider-marker-horizontal", markerVertical: "slider-marker-vertical", markerNormal: "slider-marker-normal", markerLarge: "slider-marker-large", markerSub: "slider-marker-sub", value: "slider-value", valueHorizontal: "slider-value-horizontal", valueVertical: "slider-value-vertical", valueNormal: "slider-value-normal", valueLarge: "slider-value-large", valueSub: "slider-value-sub", ...d.value }));
    return { classList: rn(() => {
      const p = { ...a.value };
      return Object.keys(p).forEach((h) => {
        p[h] = Array.isArray(p[h]) ? p[h].filter((m) => m !== null).join(" ") : p[h];
      }), g.value !== "always" && (p.target += ` ${g.value === "drag" ? p.tooltipDrag : p.tooltipFocus}`), n.value === "horizontal" && (p.tooltip += i.value === "bottom" ? ` ${p.tooltipBottom}` : ` ${p.tooltipTop}`), n.value === "vertical" && (p.tooltip += i.value === "right" ? ` ${p.tooltipRight}` : ` ${p.tooltipLeft}`), p;
    }) };
  }(e), o = function(l, v, y) {
    const { format: d, step: g } = nr(l), i = y.value, n = y.classList, a = rn(() => d && d.value ? typeof d.value == "function" ? { to: d.value } : Ir({ ...d.value }) : Ir({ decimals: g.value >= 0 ? 0 : 2 })), p = rn(() => Array.isArray(i.value) ? i.value.map((h) => a.value) : a.value);
    return { tooltipFormat: a, tooltipsFormat: p, tooltipsMerge: (h, m, f) => {
      var u = getComputedStyle(h).direction === "rtl", k = h.noUiSlider.options.direction === "rtl", c = h.noUiSlider.options.orientation === "vertical", w = h.noUiSlider.getTooltips(), M = h.noUiSlider.getOrigins();
      w.forEach(function($, A) {
        $ && M[A].appendChild($);
      }), h.noUiSlider.on("update", function($, A, P, O, x) {
        var E = [[]], T = [[]], L = [[]], D = 0;
        w[0] && (E[0][0] = 0, T[0][0] = x[0], L[0][0] = a.value.to(parseFloat($[0])));
        for (var z = 1; z < $.length; z++)
          (!w[z] || $[z] - $[z - 1] > m) && (E[++D] = [], L[D] = [], T[D] = []), w[z] && (E[D].push(z), L[D].push(a.value.to(parseFloat($[z]))), T[D].push(x[z]));
        E.forEach(function(U, te) {
          for (var F = U.length, j = 0; j < F; j++) {
            var C = U[j];
            if (j === F - 1) {
              var q = 0;
              T[te].forEach(function(I) {
                q += 1e3 - I;
              });
              var R = c ? "bottom" : "right", X = k ? 0 : F - 1, H = 1e3 - T[te][X];
              q = (u && !c ? 100 : 0) + q / F - H, w[C].innerHTML = L[te].join(f), w[C].style.display = "block", w[C].style[R] = q + "%", n.value.tooltipHidden.split(" ").forEach((I) => {
                w[C].classList.contains(I) && w[C].classList.remove(I);
              });
            } else
              w[C].style.display = "none", n.value.tooltipHidden.split(" ").forEach((I) => {
                w[C].classList.add(I);
              });
          }
        });
      });
    } };
  }(e, 0, { value: t.value, classList: s.classList }), b = function(l, v, y) {
    const { orientation: d, direction: g, tooltips: i, step: n, min: a, max: p, merge: h, id: m, disabled: f, options: u, classes: k, format: c, lazy: w, ariaLabelledby: M, aria: $ } = nr(l), A = y.value, P = y.initialValue, O = y.tooltipsFormat, x = y.tooltipsMerge, E = y.tooltipFormat, T = y.classList, L = Ft(null), D = Ft(null), z = Ft(!1), U = rn(() => {
      let I = { cssPrefix: "", cssClasses: T.value, orientation: d.value, direction: g.value, tooltips: !!i.value && O.value, connect: "lower", start: lr(A.value) ? a.value : A.value, range: { min: a.value, max: p.value } };
      if (n.value > 0 && (I.step = n.value), Array.isArray(A.value) && (I.connect = !0), M && M.value || $ && Object.keys($.value).length) {
        let Y = Array.isArray(A.value) ? A.value : [A.value];
        I.handleAttributes = Y.map((Q) => Object.assign({}, $.value, M && M.value ? { "aria-labelledby": M.value } : {}));
      }
      return c.value && (I.ariaFormat = E.value), I;
    }), te = rn(() => {
      let I = { id: m && m.value ? m.value : void 0 };
      return f.value && (I.disabled = !0), I;
    }), F = rn(() => Array.isArray(A.value)), j = () => {
      let I = D.value.get();
      return Array.isArray(I) ? I.map((Y) => parseFloat(Y)) : parseFloat(I);
    }, C = function(I) {
      let Y = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
      D.value.set(I, Y);
    }, q = (I) => {
      v.emit("input", I), v.emit("update:modelValue", I), v.emit("update", I);
    }, R = () => {
      D.value = Ah.create(L.value, Object.assign({}, U.value, u.value)), i.value && F.value && h.value >= 0 && x(L.value, h.value, " - "), D.value.on("set", () => {
        const I = j();
        v.emit("change", I), v.emit("set", I), w.value && q(I);
      }), D.value.on("update", () => {
        if (!z.value)
          return;
        const I = j();
        F.value && Br(A.value, I) || !F.value && A.value == I ? v.emit("update", I) : w.value || q(I);
      }), D.value.on("start", () => {
        v.emit("start", j());
      }), D.value.on("end", () => {
        v.emit("end", j());
      }), D.value.on("slide", () => {
        v.emit("slide", j());
      }), D.value.on("drag", () => {
        v.emit("drag", j());
      }), L.value.querySelectorAll("[data-handle]").forEach((I) => {
        I.onblur = () => {
          L.value && T.value.focused.split(" ").forEach((Y) => {
            L.value.classList.remove(Y);
          });
        }, I.onfocus = () => {
          T.value.focused.split(" ").forEach((Y) => {
            L.value.classList.add(Y);
          });
        };
      }), z.value = !0;
    }, X = () => {
      D.value.off(), D.value.destroy(), D.value = null;
    }, H = (I, Y) => {
      z.value = !1, X(), R();
    };
    return Or(R), fi(X), bt(F, H, { immediate: !1 }), bt(a, H, { immediate: !1 }), bt(p, H, { immediate: !1 }), bt(n, H, { immediate: !1 }), bt(d, H, { immediate: !1 }), bt(g, H, { immediate: !1 }), bt(i, H, { immediate: !1 }), bt(h, H, { immediate: !1 }), bt(c, H, { immediate: !1, deep: !0 }), bt(u, H, { immediate: !1, deep: !0 }), bt(k, H, { immediate: !1, deep: !0 }), bt(A, (I, Y) => {
      Y && (typeof Y == "object" && typeof I == "object" && I && Object.keys(Y) > Object.keys(I) || typeof Y == "object" && typeof I != "object" || lr(I)) && H();
    }, { immediate: !1 }), bt(A, (I) => {
      if (lr(I))
        return void C(a.value, !1);
      let Y = j();
      F.value && !Array.isArray(Y) && (Y = [Y]), (F.value && !Br(I, Y) || !F.value && I != Y) && C(I, !1);
    }, { deep: !0 }), { slider: L, slider$: D, isRange: F, sliderProps: te, init: R, destroy: X, refresh: H, update: C, reset: () => {
      q(P.value);
    } };
  }(e, r, { value: t.value, initialValue: t.initialValue, tooltipFormat: o.tooltipFormat, tooltipsFormat: o.tooltipsFormat, tooltipsMerge: o.tooltipsMerge, classList: s.classList });
  return { ...s, ...o, ...b };
} };
wr.render = function(e, r, t, s, o, b) {
  return V(), K("div", Nt(e.sliderProps, { ref: "slider" }), null, 16);
}, wr.__file = "src/Slider.vue";
const Th = st({
  components: {
    Slider: wr
  },
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: [Number, Array],
      required: !0
    }
  },
  data() {
    return {
      value: [1, 4]
    };
  },
  created() {
    this.value = this.modelValue;
  },
  methods: {
    updateValue(e) {
      this.data = e, this.$emit("update:modelValue", e);
    }
  }
});
function Mh(e, r, t, s, o, b) {
  const l = ke("Slider");
  return V(), K("div", null, [
    Ie(l, Nt(e.$attrs, {
      modelValue: e.value,
      "onUpdate:modelValue": r[0] || (r[0] = (v) => e.value = v),
      onInput: e.updateValue
    }), null, 16, ["modelValue", "onInput"])
  ]);
}
const uy = /* @__PURE__ */ Ee(Th, [["render", Mh]]), Nh = {
  methods: {
    searchHasResult(e, r) {
      const t = r ? r.split(" ") : [], s = [];
      let o = !1;
      return t.forEach((b) => {
        const l = [];
        e.forEach((v) => {
          if (v) {
            const y = v.toLowerCase().includes(b ? b.toLowerCase() : "");
            y && l.push(y), s.push(y);
          }
        }), l.length === 0 && (o = !0);
      }), o ? !1 : s.filter((b) => b).length >= t.length;
    }
  }
}, Ch = st({
  components: {
    ChevronUpDownIconSolid: mo,
    CheckIconSolid: Fr
  },
  mixins: [Bt, Nh],
  inheritAttrs: !1,
  props: {
    multiple: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      required: !1,
      default: "Choisir une option"
    },
    modelValue: {
      type: [String, Number, Array],
      default: void 0
    },
    options: {
      type: Array,
      required: !0
    },
    top: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      isFocused: !1,
      search: ""
    };
  },
  computed: {
    hasMultipleValues() {
      return this.multiple && this.modelValue && this.modelValue.length;
    },
    multipleValuesLabel() {
      return this.hasMultipleValues ? this.cleanedOptions.filter((e) => this.modelValue.includes(e.value)).map((e) => e.label) : [];
    },
    cleanedOptions() {
      return this.options.map((e) => typeof e == "string" ? {
        value: e,
        label: e
      } : (Array.isArray(e) && e.push("select-divider"), e)).flat();
    },
    filteredOptions() {
      return this.cleanedOptions.filter((e) => this.searchHasResult([
        e.label
      ], this.search));
    },
    inputValue() {
      if (this.isFocused)
        return this.search;
      if (this.multiple)
        return this.hasMultipleValues ? this.multipleValuesLabel.join(", ") : "";
      if (this.modelValue === void 0 || this.modelValue === null)
        return "";
      const e = this.cleanedOptions.find((r) => r.value === this.modelValue);
      return e ? e.label : "";
    }
  },
  mounted() {
    window.addEventListener("click", this.documentClick);
  },
  beforeUnmount() {
    window.removeEventListener("click", this.documentClick);
  },
  methods: {
    documentClick(e) {
      if (this.isFocused) {
        const r = this.$el, t = e.target;
        r !== t && !r.contains(t) && this.close();
      }
    },
    multipleOptionsClicked() {
      setTimeout(() => {
        this.isFocused = !0;
      }, 200);
    },
    close() {
      this.isFocused = !1, this.$refs.combobox && (this.$refs.combobox.value = this.inputValue), this.search = "";
    },
    open() {
      this.isFocused = !0, this.search = "";
    },
    onInput(e) {
      this.search = e.target.value;
    },
    update(e) {
      if (this.modelValue && e.value === this.modelValue)
        this.$emit("update:modelValue", null);
      else if (e) {
        if (e.disabled)
          return;
        this.$emit("update:modelValue", this.multiple ? this.getNewMultipleValue(e) : e.value);
      } else
        this.$emit("update:modelValue", null);
      this.multiple || this.close();
    },
    getNewMultipleValue(e) {
      if (this.modelValue && typeof this.modelValue == "object") {
        const r = this.modelValue;
        return r.find((t) => t === e.value) ? r.filter((t) => t !== e.value) : [...this.modelValue, e.value];
      } else
        return [e.value];
    },
    isSelected(e) {
      return this.multiple && this.modelValue && typeof this.modelValue == "object" ? !!this.modelValue.find((r) => r === e.value) : e.value === this.modelValue;
    }
  }
}), Lh = { class: "relative" }, Ph = {
  key: 0,
  class: "absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 pointer-events-none"
}, Dh = ["required", "disabled", "value", "placeholder"], Ih = ["id"], Bh = {
  key: 0,
  class: "flex flex-wrap items-center px-3 pb-1 mt-3 space-x-2"
}, jh = { key: 1 }, qh = /* @__PURE__ */ S("li", { class: "py-2 italic text-center text-gray-400" }, " Aucun résultat ", -1), Rh = [
  qh
], Vh = {
  key: 0,
  class: "my-2"
}, Fh = ["id", "disabled", "onClick"], Uh = {
  key: 0,
  class: "absolute inset-y-0 right-0 flex items-center pr-4 text-primary-500 group-hover:text-white"
};
function zh(e, r, t, s, o, b) {
  const l = ke("ChevronUpDownIconSolid"), v = ke("CheckIconSolid"), y = ke("UiLayoutInput");
  return V(), je(y, Dt(It(e.layoutProps)), {
    default: Be(() => [
      S("div", Lh, [
        e.hasIconSlot ? (V(), K("div", Ph, [
          $e(e.$slots, "icon")
        ])) : ae("", !0),
        !e.isFocused && e.hasMultipleValues ? (V(), K("div", {
          key: 1,
          class: "absolute inset-y-0 flex max-w-[calc(100%-40px)] overflow-auto items-center px-1",
          onClick: r[0] || (r[0] = (...d) => e.multipleOptionsClicked && e.multipleOptionsClicked(...d))
        }, [
          (V(!0), K(ze, null, Ye(e.multipleValuesLabel, (d) => (V(), K("div", {
            key: d,
            class: "inline-flex items-center mt-1 mb-1 whitespace-nowrap ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
          }, we(d), 1))), 128))
        ])) : ae("", !0),
        S("input", Nt({
          id: "combobox",
          ref: "combobox",
          required: e.required,
          disabled: e.disabled,
          value: e.inputValue,
          class: [{
            "pl-10": e.hasIconSlot,
            "text-transparent": !e.isFocused && e.hasMultipleValues
          }, "pr-12 input"],
          type: "text",
          role: "combobox",
          "aria-controls": "options",
          "aria-expanded": "false",
          placeholder: !e.isFocused && e.hasMultipleValues ? "" : e.placeholder
        }, e.$attrs, {
          onFocus: r[1] || (r[1] = (...d) => e.open && e.open(...d)),
          onInput: r[2] || (r[2] = (...d) => e.onInput && e.onInput(...d))
        }), null, 16, Dh),
        e.disabled ? ae("", !0) : (V(), K("button", {
          key: 2,
          type: "button",
          class: "absolute inset-y-0 right-0 flex items-center px-2 rounded-r-md focus:outline-none",
          onClick: r[3] || (r[3] = (d) => e.isFocused = !e.isFocused)
        }, [
          Ie(l, { class: "w-5 h-5 text-gray-400" })
        ]))
      ]),
      Rr(S("ul", {
        id: e.name + "options",
        class: pe(["absolute z-10 w-full py-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm", {
          "bottom-full mb-1": e.top,
          "mt-1": !e.top
        }]),
        role: "listbox"
      }, [
        e.multiple && e.modelValue && e.modelValue.length ? (V(), K("div", Bh, [
          (V(!0), K(ze, null, Ye(e.multipleValuesLabel, (d) => (V(), K("div", {
            key: d,
            class: "inline-flex mb-2 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
          }, we(d), 1))), 128))
        ])) : ae("", !0),
        e.filteredOptions.length === 0 ? (V(), K("div", jh, Rh)) : ae("", !0),
        (V(!0), K(ze, null, Ye(e.filteredOptions, (d) => (V(), K(ze, {
          key: d.value
        }, [
          d === "select-divider" ? (V(), K("hr", Vh)) : (V(), K("li", {
            key: 1,
            id: d.value,
            class: pe(["relative py-2 pl-3 text-gray-900 cursor-pointer select-none group pr-9 hover:bg-primary-500 hover:text-white", {
              "bg-gray-100 opacity-70 cursor-not-allowed": d.disabled
            }]),
            role: "option",
            tabindex: "-1",
            disabled: d.disabled,
            onClick: (g) => e.update(d)
          }, [
            S("span", {
              class: pe([{
                "font-bold": e.isSelected(d)
              }, "block truncate"])
            }, we(d.label), 3),
            e.isSelected(d) ? (V(), K("span", Uh, [
              Ie(v, { class: "w-5 h-5" })
            ])) : ae("", !0)
          ], 10, Fh))
        ], 64))), 128))
      ], 10, Ih), [
        [di, e.isFocused]
      ])
    ]),
    _: 3
  }, 16);
}
const ri = /* @__PURE__ */ Ee(Ch, [["render", zh]]), Hh = {
  components: { UiSelect: ri },
  props: {
    name: {
      type: String,
      required: !0
    },
    required: {
      type: Boolean,
      default: !1
    },
    value: {
      type: [String, Date, Object],
      default: void 0
    },
    from: {
      type: [String, Date, Object],
      default: () => _e()
    },
    to: {
      type: [String, Date, Object],
      default: () => _e()
    }
  },
  computed: {
    monthRange() {
      let e = _e(this.from);
      const r = _e(this.to), t = [];
      for (; e.isBefore(r); )
        t.push(e.format("YYYY-MM")), e = e.add(1, "month");
      return t.map((s) => {
        const o = _e(s);
        return {
          value: o.format("YYYY-MM-DD"),
          label: o.format("MMMM YYYY")
        };
      });
    }
  },
  methods: {
    update(e) {
      this.$emit("update:modelValue", e);
    }
  }
};
function Yh(e, r, t, s, o, b) {
  const l = ke("UiSelect");
  return V(), je(l, Nt({ value: t.value }, e.$attrs, {
    name: t.name,
    options: b.monthRange,
    required: t.required,
    onInput: b.update
  }), null, 16, ["value", "name", "options", "required", "onInput"]);
}
const cy = /* @__PURE__ */ Ee(Hh, [["render", Yh]]), Kh = {
  components: { UiSelect: ri },
  props: {
    name: {
      type: String,
      required: !0
    },
    required: {
      type: Boolean,
      default: !1
    },
    modelValue: {
      type: [String, Date, Object],
      default: void 0
    },
    from: {
      type: [String, Number],
      default: () => _e()
    },
    to: {
      type: [String, Number],
      default: () => _e()
    }
  },
  computed: {
    yearRange() {
      let e = _e().year(this.from);
      const r = _e().year(this.to), t = [];
      for (; e.isBefore(r); )
        t.push(e.format("YYYY")), e = e.add(1, "year");
      return t.map((s) => {
        const o = _e(s);
        return {
          value: o.format("YYYY"),
          label: o.format("YYYY")
        };
      });
    }
  },
  methods: {
    update(e) {
      this.$emit("update:modelValue", e);
    }
  }
};
function Wh(e, r, t, s, o, b) {
  const l = ke("UiSelect");
  return V(), je(l, Nt({ "model-value": t.modelValue }, e.$attrs, {
    name: t.name,
    options: b.yearRange,
    required: t.required,
    onInput: b.update
  }), null, 16, ["model-value", "name", "options", "required", "onInput"]);
}
const fy = /* @__PURE__ */ Ee(Kh, [["render", Wh]]), Gh = st({
  mixins: [Bt],
  inheritAttrs: !1,
  props: {
    rows: {
      type: [String, Number],
      default: 4
    },
    modelValue: {
      type: String,
      required: !1,
      default: null
    }
  }
}), Zh = ["value", "rows", "required", "disabled", "aria-describedby", "aria-invalid"];
function Xh(e, r, t, s, o, b) {
  const l = ke("UiLayoutInput");
  return V(), je(l, Dt(It(e.layoutProps)), {
    default: Be(() => [
      S("textarea", Nt({
        class: ["input", {
          "border-red-400": e.errors && e.errors[e.name]
        }],
        value: e.modelValue,
        rows: e.rows
      }, e.$attrs, {
        required: e.required,
        disabled: e.disabled,
        "aria-describedby": e.errors && e.errors[e.name] ? e.name + "-error" : e.help ? e.name + "-description" : null,
        "aria-invalid": e.errors && e.errors[e.name],
        onInput: r[0] || (r[0] = (v) => e.$emit("update:modelValue", v.target.value))
      }), null, 16, Zh)
    ]),
    _: 1
  }, 16);
}
const Jh = /* @__PURE__ */ Ee(Gh, [["render", Xh]]), Qh = st({
  mixins: [Bt],
  props: {
    modelValue: {
      type: [String, Array, Boolean],
      default: !1
    }
  },
  computed: {
    shouldBeChecked() {
      return this.modelValue === !0;
    }
  },
  methods: {
    toggle() {
      this.$emit("update:modelValue", !this.shouldBeChecked);
    }
  }
}), ep = { class: "flex items-center space-x-3" }, tp = /* @__PURE__ */ S("svg", {
  class: "w-3 h-3 text-gray-400 bg-white",
  fill: "none",
  viewBox: "0 0 12 12"
}, [
  /* @__PURE__ */ S("path", {
    d: "M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1), np = [
  tp
], rp = /* @__PURE__ */ S("svg", {
  class: "w-3 h-3 bg-white text-primary-500",
  fill: "currentColor",
  viewBox: "0 0 12 12"
}, [
  /* @__PURE__ */ S("path", { d: "M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" })
], -1), ip = [
  rp
], op = ["for"];
function lp(e, r, t, s, o, b) {
  const l = ke("UiLayoutInput");
  return V(), je(l, Dt(It(e.layoutProps)), {
    default: Be(() => [
      S("div", ep, [
        S("button", {
          type: "button",
          class: pe(["relative inline-flex h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer shrink-0 w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500", {
            "bg-primary-500 border-primary-500": e.shouldBeChecked,
            "bg-gray-200 border-gray-200": !e.shouldBeChecked
          }]),
          "aria-pressed": "false",
          onClick: r[0] || (r[0] = (...v) => e.toggle && e.toggle(...v))
        }, [
          S("span", {
            class: pe(["relative inline-block w-5 h-5 transition duration-200 ease-in-out bg-white rounded-full shadow pointer-events-none ring-0", {
              "translate-x-5": e.shouldBeChecked,
              "translate-x-0": !e.shouldBeChecked
            }])
          }, [
            S("span", {
              class: pe([{
                "opacity-0 ease-out duration-100": e.shouldBeChecked,
                "opacity-100 ease-in duration-200": !e.shouldBeChecked
              }, "absolute inset-0 flex items-center justify-center w-full h-full transition-opacity"]),
              "aria-hidden": "true"
            }, np, 2),
            S("span", {
              class: pe(["absolute inset-0 flex items-center justify-center w-full h-full transition-opacity", {
                "opacity-100 ease-in duration-200": e.shouldBeChecked,
                "opacity-0 ease-out duration-100": !e.shouldBeChecked
              }]),
              "aria-hidden": "true"
            }, ip, 2)
          ], 2)
        ], 2),
        e.hasSlot ? (V(), K("label", {
          key: 0,
          for: e.name,
          class: "block ml-2 text-sm text-gray-900",
          onClick: r[1] || (r[1] = (...v) => e.toggle && e.toggle(...v))
        }, [
          $e(e.$slots, "default")
        ], 8, op)) : ae("", !0)
      ])
    ]),
    _: 3
  }, 16);
}
const ap = /* @__PURE__ */ Ee(Qh, [["render", lp]]), sp = {}, up = { class: "loading gray" };
function cp(e, r, t, s, o, b) {
  return V(), K("span", up);
}
const dy = /* @__PURE__ */ Ee(sp, [["render", cp]]), fp = {
  props: {
    width: {
      type: [Number, String],
      required: !1,
      default: 50
    },
    fillColor: {
      type: String,
      required: !1,
      default: "currentColor"
    }
  }
}, dp = { class: "py-10 loader" }, hp = /* @__PURE__ */ qr('<div class="mx-auto spinner"><svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><circle class="length" fill="none" stroke-width="8" stroke-linecap="round" cx="33" cy="33" r="28"></circle></svg><svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke-width="8" stroke-linecap="round" cx="33" cy="33" r="28"></circle></svg><svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke-width="8" stroke-linecap="round" cx="33" cy="33" r="28"></circle></svg><svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke-width="8" stroke-linecap="round" cx="33" cy="33" r="28"></circle></svg></div>', 1), pp = [
  hp
];
function mp(e, r, t, s, o, b) {
  return V(), K("div", dp, pp);
}
const vp = /* @__PURE__ */ Ee(fp, [["render", mp]]), yp = st({
  components: {
    UiCard: $a,
    UiCardBody: Na,
    UiInput: $u,
    UiInputFile: Hr,
    UiLoader: vp,
    PlusSmallIconOuline: Es
  },
  props: {
    uploading: {
      type: Boolean,
      default: !1
    },
    readOnly: {
      type: Boolean,
      default: !1
    },
    empty: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      search: void 0,
      showDropMessage: !1
    };
  },
  methods: {
    updateSearch(e) {
      this.search = e, this.$emit("search", this.search);
    },
    dropFiles(e) {
      if (e.preventDefault(), this.readOnly)
        return;
      const r = [];
      if (e.dataTransfer.items)
        for (let t = 0; t < e.dataTransfer.items.length; t++)
          e.dataTransfer.items[t].kind === "file" && r.push(e.dataTransfer.items[t].getAsFile());
      else
        for (let t = 0; t < e.dataTransfer.files.length; t++)
          r.push(e.dataTransfer.files[t]);
      this.filesAdded(r), this.removeDragData(e);
    },
    removeDragData(e) {
      this.showDropMessage = !1, e.dataTransfer.items ? e.dataTransfer.items.clear() : e.dataTransfer.clearData();
    },
    submitSearch() {
      this.$emit("search", this.search);
    },
    filesAdded(e) {
      this.$emit("add-files", e);
    },
    addFilesFromTopButton(e) {
      this.filesAdded(e.target.files);
    },
    dragOverHandler(e) {
      e.preventDefault(), this.readOnly || (this.showDropMessage = !0);
    }
  }
}), gp = { class: "flex items-center justify-between p-4" }, bp = {
  key: 0,
  class: "rounded-full btn btn-icon btn-primary"
}, _p = { "aria-labelledby": "gallery-heading" }, wp = /* @__PURE__ */ S("h2", {
  id: "gallery-heading",
  class: "sr-only"
}, " Recently viewed ", -1), kp = {
  role: "list",
  class: "grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-5"
}, Op = {
  key: 1,
  class: "relative flex justify-center p-20 bg-white"
}, xp = { class: "space-y-6 text-center" }, Sp = /* @__PURE__ */ S("p", { class: "text-2xl text-primary-600" }, " Déposez des fichiers ici ", -1), Ep = /* @__PURE__ */ S("svg", {
  class: "w-10 h-10 mx-auto text-gray-500",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ S("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
  })
], -1), $p = {
  key: 0,
  class: "absolute inset-0 z-10 flex justify-center pointer-events-none"
}, Ap = /* @__PURE__ */ S("div", { class: "absolute inset-0 bg-gray-800 rounded-lg opacity-50" }, null, -1), Tp = /* @__PURE__ */ S("p", { class: "self-center p-3 text-3xl font-bold text-gray-800" }, " Déposez les fichiers ici ! ", -1), Mp = [
  Ap,
  Tp
];
function Np(e, r, t, s, o, b) {
  const l = ke("UiInput"), v = ke("PlusSmallIconOuline"), y = ke("UiLoader"), d = ke("UiInputFile"), g = ke("UiCardBody"), i = ke("UiCard");
  return V(), je(i, { class: "relative" }, {
    default: Be(() => [
      S("div", gp, [
        S("form", {
          class: "w-80",
          onSubmit: r[0] || (r[0] = xr((...n) => e.submitSearch && e.submitSearch(...n), ["prevent"]))
        }, [
          Ie(l, {
            "model-value": e.search,
            class: "w-full",
            placeholder: "Rechercher un document...",
            name: "search",
            "onUpdate:modelValue": e.updateSearch
          }, null, 8, ["model-value", "onUpdate:modelValue"])
        ], 32),
        e.readOnly ? ae("", !0) : (V(), K("label", bp, [
          S("input", {
            type: "file",
            multiple: "",
            class: "hidden",
            onChange: r[1] || (r[1] = (...n) => e.addFilesFromTopButton && e.addFilesFromTopButton(...n))
          }, null, 32),
          Ie(v, { class: "w-6 h-6" })
        ]))
      ]),
      S("div", {
        onDrop: r[2] || (r[2] = (...n) => e.dropFiles && e.dropFiles(...n)),
        onDragover: r[3] || (r[3] = (...n) => e.dragOverHandler && e.dragOverHandler(...n)),
        onDragleave: r[4] || (r[4] = (n) => e.showDropMessage = !1)
      }, [
        Ie(g, { class: "relative" }, {
          default: Be(() => [
            S("section", _p, [
              wp,
              S("div", kp, [
                $e(e.$slots, "default")
              ]),
              e.uploading ? (V(), je(y, { key: 0 })) : ae("", !0),
              e.empty && !e.readOnly ? (V(), K("div", Op, [
                S("div", xp, [
                  Sp,
                  Ep,
                  S("div", null, [
                    Ie(d, {
                      name: "file_input_upload",
                      multiple: "",
                      onInput: e.filesAdded
                    }, null, 8, ["onInput"])
                  ])
                ])
              ])) : ae("", !0)
            ])
          ]),
          _: 3
        })
      ], 32),
      e.showDropMessage ? (V(), K("div", $p, Mp)) : ae("", !0)
    ]),
    _: 3
  });
}
const hy = /* @__PURE__ */ Ee(yp, [["render", Np]]), Cp = st({
  components: {
    XMarkIconOutline: zr
  },
  props: {
    isOpen: {
      type: Boolean,
      default: !1
    },
    id: {
      type: String,
      required: !0
    },
    title: {
      type: String,
      required: !0
    },
    closable: {
      type: Boolean,
      default: !0
    },
    size: {
      type: String,
      required: !1,
      default: "xl"
    },
    noPadding: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["closed", "opened"],
  methods: {
    close() {
      this.$emit("closed");
    },
    open() {
      this.$emit("opened");
    },
    handle(e) {
      e.handler ? e.handler() : this.close();
    },
    handleToggleEvent(e, r) {
      e === this.id && (this.isOpen ? this.close() : this.open());
    },
    handleClose(e, r) {
      e === this.id && this.close();
    },
    handleOpen(e, r) {
      e === this.id && this.open();
    }
  }
}), Lp = {
  key: 0,
  class: "fixed inset-y-0 right-0 flex max-w-full pl-10 transition-all duration-300"
}, Pp = { class: "relative z-50 w-96" }, Dp = { class: "absolute top-0 left-0 flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4" }, Ip = /* @__PURE__ */ S("span", { class: "sr-only" }, "Close panel", -1);
function Bp(e, r, t, s, o, b) {
  const l = ke("XMarkIconOutline");
  return V(), je(Vr, { to: "body" }, [
    S("div", {
      class: pe([{ "fixed z-50": e.isOpen }, "inset-0 overflow-hidden"]),
      role: "dialog",
      "aria-modal": "true"
    }, [
      Ie(Mt, { name: "modal" }, {
        default: Be(() => [
          e.isOpen ? (V(), K("div", {
            key: 0,
            class: "absolute inset-0 transition-all duration-300 bg-gray-500 bg-opacity-80",
            "aria-hidden": "true",
            onClick: r[0] || (r[0] = (...v) => e.close && e.close(...v))
          })) : ae("", !0)
        ]),
        _: 1
      }),
      Ie(Mt, { name: "slide" }, {
        default: Be(() => [
          e.isOpen ? (V(), K("div", Lp, [
            S("div", Pp, [
              S("div", Dp, [
                S("button", {
                  type: "button",
                  class: "text-gray-300 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white",
                  onClick: r[1] || (r[1] = (...v) => e.close && e.close(...v))
                }, [
                  Ip,
                  Ie(l, { class: "w-6 h-6" })
                ])
              ]),
              S("div", {
                class: pe(["relative z-50 h-full overflow-y-auto bg-white", {
                  "p-8": !e.noPadding
                }])
              }, [
                $e(e.$slots, "default")
              ], 2)
            ])
          ])) : ae("", !0)
        ]),
        _: 3
      })
    ], 2)
  ]);
}
const jp = /* @__PURE__ */ Ee(Cp, [["render", Bp]]), qp = st({
  components: { UiSlideOver: jp },
  inheritAttrs: !1,
  props: {
    id: {
      type: String,
      required: !0
    },
    title: {
      type: String,
      required: !0
    },
    size: {
      type: String,
      required: !1,
      default: "xl"
    }
  },
  emits: ["closed", "opened"],
  data() {
    return {
      open: !1
    };
  },
  methods: {
    openSlideOver() {
      this.open = !0;
    },
    onClosed() {
      this.open = !1, this.$emit("closed");
    },
    onOpened() {
      this.open = !0, this.$emit("opened");
    }
  }
});
function Rp(e, r, t, s, o, b) {
  const l = ke("UiSlideOver");
  return V(), K("div", null, [
    S("div", {
      class: "inline cursor-pointer",
      onClick: r[0] || (r[0] = (...v) => e.onOpened && e.onOpened(...v))
    }, [
      $e(e.$slots, "trigger")
    ]),
    Ie(l, Nt({
      id: e.id,
      "is-open": e.open,
      title: e.title,
      size: e.size
    }, e.$attrs, {
      onOpened: e.onOpened,
      onClosed: e.onClosed
    }), {
      default: Be(() => [
        $e(e.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "is-open", "title", "size", "onOpened", "onClosed"])
  ]);
}
const Vp = /* @__PURE__ */ Ee(qp, [["render", Rp]]), Fp = st({
  components: {
    UiButtonSlideOver: Vp,
    UiToggle: ap,
    UiTextarea: Jh
  },
  props: {
    media: {
      type: Object,
      required: !0
    },
    hasVisibility: {
      type: Boolean,
      default: !0
    },
    visibilityLabel: {
      type: String,
      default: "Visible par les parents de l'enfant"
    },
    editable: {
      type: Boolean,
      default: !0
    },
    triggerClass: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      fallbackImage: void 0,
      showNoteForm: !1,
      formData: {
        is_public: this.media.is_public,
        notes: this.media.notes
      }
    };
  },
  created() {
    this.media.thumb_url || this.setFallbackImage();
  },
  methods: {
    changeVisibility(e) {
      this.formData.is_public = e, this.$emit("save", this.formData);
    },
    saveNote() {
      this.showNoteForm = !1, this.$emit("save", this.formData);
    },
    deleteConfirm() {
      this.$dialog.show({
        title: "Supprimer le document",
        message: "Voulez-vous vraiment supprimer ce document ? Il ne sera plus possible de le récupérer.",
        buttons: [
          {
            title: "Oui, supprimer",
            handler: () => {
              this.$emit("delete");
            },
            class: "btn-red",
            loadOnClick: !0
          },
          {
            title: "Annuler"
          }
        ]
      });
    },
    setFallbackImage() {
      this.fallbackImage = this.media.mime_type;
    },
    onClosed() {
    },
    onOpened() {
    }
  }
}), Up = { class: "block w-full overflow-hidden text-gray-600 rounded-lg group-hover:opacity-75 aspect-w-10 aspect-h-6" }, zp = ["src", "alt"], Hp = {
  key: 1,
  "aria-hidden": "true",
  focusable: "false",
  class: "text-red-600",
  "data-prefix": "far",
  "data-icon": "file-pdf",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 384 512"
}, Yp = /* @__PURE__ */ S("path", {
  fill: "currentColor",
  d: "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z"
}, null, -1), Kp = [
  Yp
], Wp = {
  key: 2,
  "aria-hidden": "true",
  focusable: "false",
  class: "text-blue-600",
  "data-prefix": "far",
  "data-icon": "file-word",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 384 512"
}, Gp = /* @__PURE__ */ S("path", {
  fill: "currentColor",
  d: "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm220.1-208c-5.7 0-10.6 4-11.7 9.5-20.6 97.7-20.4 95.4-21 103.5-.2-1.2-.4-2.6-.7-4.3-.8-5.1.3.2-23.6-99.5-1.3-5.4-6.1-9.2-11.7-9.2h-13.3c-5.5 0-10.3 3.8-11.7 9.1-24.4 99-24 96.2-24.8 103.7-.1-1.1-.2-2.5-.5-4.2-.7-5.2-14.1-73.3-19.1-99-1.1-5.6-6-9.7-11.8-9.7h-16.8c-7.8 0-13.5 7.3-11.7 14.8 8 32.6 26.7 109.5 33.2 136 1.3 5.4 6.1 9.1 11.7 9.1h25.2c5.5 0 10.3-3.7 11.6-9.1l17.9-71.4c1.5-6.2 2.5-12 3-17.3l2.9 17.3c.1.4 12.6 50.5 17.9 71.4 1.3 5.3 6.1 9.1 11.6 9.1h24.7c5.5 0 10.3-3.7 11.6-9.1 20.8-81.9 30.2-119 34.5-136 1.9-7.6-3.8-14.9-11.6-14.9h-15.8z"
}, null, -1), Zp = [
  Gp
], Xp = {
  key: 3,
  "aria-hidden": "true",
  focusable: "false",
  class: "text-green-600",
  "data-prefix": "far",
  "data-icon": "file-excel",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 384 512"
}, Jp = /* @__PURE__ */ S("path", {
  fill: "currentColor",
  d: "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm212-240h-28.8c-4.4 0-8.4 2.4-10.5 6.3-18 33.1-22.2 42.4-28.6 57.7-13.9-29.1-6.9-17.3-28.6-57.7-2.1-3.9-6.2-6.3-10.6-6.3H124c-9.3 0-15 10-10.4 18l46.3 78-46.3 78c-4.7 8 1.1 18 10.4 18h28.9c4.4 0 8.4-2.4 10.5-6.3 21.7-40 23-45 28.6-57.7 14.9 30.2 5.9 15.9 28.6 57.7 2.1 3.9 6.2 6.3 10.6 6.3H260c9.3 0 15-10 10.4-18L224 320c.7-1.1 30.3-50.5 46.3-78 4.7-8-1.1-18-10.3-18z"
}, null, -1), Qp = [
  Jp
], e1 = {
  key: 4,
  "aria-hidden": "true",
  focusable: "false",
  class: "text-orange-600",
  "data-prefix": "fas",
  "data-icon": "image",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, t1 = /* @__PURE__ */ S("path", {
  fill: "currentColor",
  d: "M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"
}, null, -1), n1 = [
  t1
], r1 = { class: "block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none" }, i1 = { class: "block text-sm font-medium text-gray-500 pointer-events-none" }, o1 = { class: "pb-16 space-y-6" }, l1 = { class: "block w-full overflow-hidden rounded-lg aspect-w-10 aspect-h-7" }, a1 = ["src", "alt"], s1 = ["src", "alt"], u1 = {
  key: 2,
  "aria-hidden": "true",
  focusable: "false",
  class: "text-red-600",
  "data-prefix": "far",
  "data-icon": "file-pdf",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 384 512"
}, c1 = /* @__PURE__ */ S("path", {
  fill: "currentColor",
  d: "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z"
}, null, -1), f1 = [
  c1
], d1 = {
  key: 3,
  "aria-hidden": "true",
  class: "text-blue-600",
  focusable: "false",
  "data-prefix": "far",
  "data-icon": "file-word",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 384 512"
}, h1 = /* @__PURE__ */ S("path", {
  fill: "currentColor",
  d: "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm220.1-208c-5.7 0-10.6 4-11.7 9.5-20.6 97.7-20.4 95.4-21 103.5-.2-1.2-.4-2.6-.7-4.3-.8-5.1.3.2-23.6-99.5-1.3-5.4-6.1-9.2-11.7-9.2h-13.3c-5.5 0-10.3 3.8-11.7 9.1-24.4 99-24 96.2-24.8 103.7-.1-1.1-.2-2.5-.5-4.2-.7-5.2-14.1-73.3-19.1-99-1.1-5.6-6-9.7-11.8-9.7h-16.8c-7.8 0-13.5 7.3-11.7 14.8 8 32.6 26.7 109.5 33.2 136 1.3 5.4 6.1 9.1 11.7 9.1h25.2c5.5 0 10.3-3.7 11.6-9.1l17.9-71.4c1.5-6.2 2.5-12 3-17.3l2.9 17.3c.1.4 12.6 50.5 17.9 71.4 1.3 5.3 6.1 9.1 11.6 9.1h24.7c5.5 0 10.3-3.7 11.6-9.1 20.8-81.9 30.2-119 34.5-136 1.9-7.6-3.8-14.9-11.6-14.9h-15.8z"
}, null, -1), p1 = [
  h1
], m1 = {
  key: 4,
  "aria-hidden": "true",
  class: "text-green-600",
  focusable: "false",
  "data-prefix": "far",
  "data-icon": "file-excel",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 384 512"
}, v1 = /* @__PURE__ */ S("path", {
  fill: "currentColor",
  d: "M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm212-240h-28.8c-4.4 0-8.4 2.4-10.5 6.3-18 33.1-22.2 42.4-28.6 57.7-13.9-29.1-6.9-17.3-28.6-57.7-2.1-3.9-6.2-6.3-10.6-6.3H124c-9.3 0-15 10-10.4 18l46.3 78-46.3 78c-4.7 8 1.1 18 10.4 18h28.9c4.4 0 8.4-2.4 10.5-6.3 21.7-40 23-45 28.6-57.7 14.9 30.2 5.9 15.9 28.6 57.7 2.1 3.9 6.2 6.3 10.6 6.3H260c9.3 0 15-10 10.4-18L224 320c.7-1.1 30.3-50.5 46.3-78 4.7-8-1.1-18-10.3-18z"
}, null, -1), y1 = [
  v1
], g1 = {
  key: 5,
  "aria-hidden": "true",
  focusable: "false",
  class: "text-orange-600",
  "data-prefix": "fas",
  "data-icon": "image",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, b1 = /* @__PURE__ */ S("path", {
  fill: "currentColor",
  d: "M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"
}, null, -1), _1 = [
  b1
], w1 = { class: "flex items-start justify-between mt-4" }, k1 = { class: "text-lg font-medium text-gray-900" }, O1 = /* @__PURE__ */ S("span", { class: "sr-only" }, "Details for ", -1), x1 = { class: "text-sm font-medium text-gray-500" }, S1 = { class: "space-y-6" }, E1 = /* @__PURE__ */ S("h3", { class: "font-medium text-gray-900" }, " Information ", -1), $1 = { class: "mt-2 border-t border-b border-gray-200 divide-y divide-gray-200" }, A1 = {
  key: 0,
  class: "flex justify-between py-3 text-sm font-medium"
}, T1 = /* @__PURE__ */ S("dt", { class: "text-gray-500" }, " Mis en ligne par ", -1), M1 = { class: "text-gray-900" }, N1 = { class: "flex justify-between py-3 text-sm font-medium" }, C1 = /* @__PURE__ */ S("dt", { class: "text-gray-500" }, " Créé le ", -1), L1 = { class: "text-gray-900" }, P1 = { class: "flex justify-between py-3 text-sm font-medium" }, D1 = /* @__PURE__ */ S("dt", { class: "text-gray-500" }, " Modifié le ", -1), I1 = { class: "text-gray-900" }, B1 = /* @__PURE__ */ S("h3", { class: "font-medium text-gray-900" }, " Description ", -1), j1 = /* @__PURE__ */ S("button", {
  type: "submit",
  class: "flex items-center justify-center w-8 h-8 -mr-2 text-gray-400 bg-white rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
}, [
  /* @__PURE__ */ S("svg", {
    class: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ S("path", {
      "fill-rule": "evenodd",
      d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
      "clip-rule": "evenodd"
    })
  ])
], -1), q1 = {
  key: 1,
  class: "flex items-center justify-between mt-2"
}, R1 = {
  key: 0,
  class: "text-sm text-gray-500"
}, V1 = {
  key: 1,
  class: "text-sm italic text-gray-500"
}, F1 = {
  key: 2,
  class: "text-sm italic text-gray-400"
}, U1 = /* @__PURE__ */ S("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ S("path", { d: "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" })
], -1), z1 = /* @__PURE__ */ S("span", { class: "sr-only" }, "Add description", -1), H1 = [
  U1,
  z1
], Y1 = { key: 0 }, K1 = /* @__PURE__ */ S("h3", { class: "font-medium text-gray-900" }, " Visibilité ", -1), W1 = { class: "flex items-center mt-2 space-x-2" }, G1 = { class: "text-sm" }, Z1 = { class: "grid grid-cols-2 gap-4" }, X1 = ["href"];
function J1(e, r, t, s, o, b) {
  const l = ke("UiTextarea"), v = ke("UiToggle"), y = ke("UiButtonSlideOver");
  return V(), je(y, {
    id: "media-preview-" + e.media.id,
    title: e.media.name,
    onClosed: e.onClosed,
    onOpened: e.onOpened
  }, {
    trigger: Be(() => [
      S("div", {
        class: pe([e.triggerClass, "border border-transparent rounded-md group hover:border-gray-300"])
      }, [
        S("div", Up, [
          e.fallbackImage ? e.fallbackImage.includes("pdf") ? (V(), K("svg", Hp, Kp)) : e.fallbackImage.includes("word") ? (V(), K("svg", Wp, Zp)) : e.fallbackImage.includes("spreadsheet") ? (V(), K("svg", Xp, Qp)) : (V(), K("svg", e1, n1)) : (V(), K("img", {
            key: 0,
            src: e.media.thumb_url,
            alt: e.media.name,
            class: "object-cover",
            onError: r[0] || (r[0] = (...d) => e.setFallbackImage && e.setFallbackImage(...d))
          }, null, 40, zp))
        ]),
        S("p", r1, we(e.media.name), 1),
        S("p", i1, we(e.$filters.format(e.media.updated_at, "DD/MM/YYYY")), 1)
      ], 2)
    ]),
    default: Be(() => [
      S("div", o1, [
        S("div", l1, [
          e.media.mime_type.includes("pdf") && e.media.thumb_url ? (V(), K("img", {
            key: 0,
            src: e.media.thumb_url,
            alt: e.media.name,
            class: "object-cover"
          }, null, 8, a1)) : e.fallbackImage ? e.fallbackImage.includes("pdf") ? (V(), K("svg", u1, f1)) : e.fallbackImage.includes("word") ? (V(), K("svg", d1, p1)) : e.fallbackImage.includes("spreadsheet") ? (V(), K("svg", m1, y1)) : (V(), K("svg", g1, _1)) : (V(), K("img", {
            key: 1,
            src: e.media.url,
            alt: e.media.name,
            class: "object-cover"
          }, null, 8, s1))
        ]),
        S("div", w1, [
          S("div", null, [
            S("h2", k1, [
              O1,
              Pt(we(e.media.filename), 1)
            ]),
            S("p", x1, we(e.$filters.filesize(e.media.size)), 1)
          ])
        ])
      ]),
      S("div", S1, [
        S("div", null, [
          E1,
          S("dl", $1, [
            e.media.uploaded_by ? (V(), K("div", A1, [
              T1,
              S("dd", M1, we(e.media.uploaded_by), 1)
            ])) : ae("", !0),
            S("div", N1, [
              C1,
              S("dd", L1, we(e.$filters.format(e.media.created_at, "DD MMM YYYY")), 1)
            ]),
            S("div", P1, [
              D1,
              S("dd", I1, we(e.$filters.format(e.media.updated_at, "DD MMM YYYY")), 1)
            ])
          ])
        ]),
        S("div", null, [
          B1,
          e.showNoteForm ? (V(), K("form", {
            key: 0,
            class: "flex justify-between mt-2",
            onSubmit: r[2] || (r[2] = xr((...d) => e.saveNote && e.saveNote(...d), ["prevent"]))
          }, [
            Ie(l, {
              modelValue: e.formData.notes,
              "onUpdate:modelValue": r[1] || (r[1] = (d) => e.formData.notes = d),
              name: "media_is_public_" + e.media.id
            }, null, 8, ["modelValue", "name"]),
            j1
          ], 32)) : (V(), K("div", q1, [
            S("div", null, [
              e.formData.notes ? (V(), K("p", R1, we(e.formData.notes), 1)) : !e.formData.notes && e.editable ? (V(), K("p", V1, " Ajouter une note ou une description à ce document. ")) : (V(), K("p", F1, " Aucune description "))
            ]),
            !e.showNoteForm && e.editable ? (V(), K("button", {
              key: 0,
              type: "button",
              class: "flex items-center justify-center w-8 h-8 -mr-2 text-gray-400 bg-white rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500",
              onClick: r[3] || (r[3] = (d) => e.showNoteForm = !0)
            }, H1)) : ae("", !0)
          ]))
        ]),
        e.hasVisibility && e.editable ? (V(), K("div", Y1, [
          K1,
          S("div", W1, [
            Ie(v, {
              value: e.formData.is_public,
              name: "media_is_public_" + e.media.id,
              onInput: e.changeVisibility
            }, null, 8, ["value", "name", "onInput"]),
            S("span", G1, we(e.visibilityLabel), 1)
          ])
        ])) : ae("", !0),
        $e(e.$slots, "default"),
        S("div", Z1, [
          S("a", {
            href: e.media.url,
            target: "_blank",
            class: "justify-center btn btn-primary"
          }, " Télécharger ", 8, X1),
          e.editable ? (V(), K("button", {
            key: 0,
            type: "button",
            class: "justify-center btn btn-red",
            onClick: r[4] || (r[4] = (...d) => e.deleteConfirm && e.deleteConfirm(...d))
          }, " Supprimer ")) : ae("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["id", "title", "onClosed", "onOpened"]);
}
const py = /* @__PURE__ */ Ee(Fp, [["render", J1]]), Q1 = {
  props: {
    opened: {
      type: Boolean,
      default: !1
    },
    id: {
      type: String,
      required: !0
    },
    closable: {
      type: Boolean,
      default: !0
    },
    noBackground: {
      type: Boolean,
      default: !1
    },
    borderless: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      required: !1,
      default: "xl"
    },
    centered: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["closed", "opened"],
  beforeMount() {
    this.emitter.on("modal-close-all", this.close);
  },
  beforeUnmount() {
    this.emitter.off("modal-close-all", this.close);
  },
  methods: {
    close() {
      this.$emit("closed");
    },
    open() {
      this.$emit("opened");
    },
    handle(e) {
      e.handler ? e.handler() : this.close();
    },
    handleToggleEvent(e, r) {
      e === this.id && (this.opened ? this.close() : this.open());
    },
    handleClose(e, r) {
      e === this.id && this.close();
    },
    handleOpen(e, r) {
      e === this.id && this.open();
    }
  }
}, em = ["id"], tm = { class: "max-h-full" }, nm = {
  key: 0,
  class: "absolute top-0 right-0 hidden pt-4 pr-4 sm:block"
}, rm = /* @__PURE__ */ S("svg", {
  class: "w-6 h-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ S("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), im = [
  rm
], om = { class: "fixed inset-0 transition-opacity opacity-75 bg-slate-500" };
function lm(e, r, t, s, o, b) {
  return V(), je(Vr, { to: "body" }, [
    Ie(Mt, { name: "modal" }, {
      default: Be(() => [
        t.opened ? (V(), K("div", {
          key: 0,
          id: t.id,
          class: pe(["fixed top-0 bottom-0 left-0 right-0 z-40 flex flex-col w-full overflow-auto transition-all duration-300 modal", {
            "px-4 py-6": !t.borderless,
            "justify-center": t.centered
          }])
        }, [
          S("div", tm, [
            S("div", {
              class: pe(["relative z-50 w-full mx-auto", {
                "sm:max-w-lg": t.size === "lg",
                "sm:max-w-xl": t.size === "xl",
                "sm:max-w-2xl": t.size === "2xl",
                "sm:max-w-3xl": t.size === "3xl",
                "sm:max-w-4xl": t.size === "4xl",
                "sm:max-w-5xl": t.size === "5xl",
                "sm:max-w-6xl": t.size === "6xl",
                "sm:max-w-7xl": t.size === "7xl",
                "bg-white shadow-xl sm:w-full": !t.noBackground,
                "px-4 pt-5 pb-4 sm:p-8 rounded-lg": !t.borderless
              }])
            }, [
              t.closable ? (V(), K("div", nm, [
                S("button", {
                  type: "button",
                  class: pe(["transition duration-150 ease-in-out hover:text-slate-500 focus:outline-none focus:text-slate-500", {
                    "text-white": t.noBackground,
                    "text-slate-400": !t.noBackground
                  }]),
                  "aria-label": "Close",
                  onClick: r[0] || (r[0] = (...l) => b.close && b.close(...l))
                }, im, 2)
              ])) : ae("", !0),
              S("div", {
                class: pe({ "mt-2": t.noBackground })
              }, [
                $e(e.$slots, "default")
              ], 2)
            ], 2)
          ]),
          S("div", om, [
            t.closable ? (V(), K("div", {
              key: 0,
              class: "absolute inset-0",
              onClick: r[1] || (r[1] = (...l) => b.close && b.close(...l))
            })) : ae("", !0)
          ])
        ], 10, em)) : ae("", !0)
      ]),
      _: 3
    })
  ]);
}
const am = /* @__PURE__ */ Ee(Q1, [["render", lm]]), sm = {
  components: {
    UiModal: am
  },
  inheritAttrs: !1,
  props: {
    id: {
      type: String,
      required: !0
    },
    size: {
      type: String,
      required: !1,
      default: "xl"
    }
  },
  emits: ["closed", "opened"],
  data() {
    return {
      open: !1
    };
  },
  methods: {
    openModal() {
      this.open = !0;
    },
    onClosed() {
      this.open = !1, this.$emit("closed");
    },
    onOpened() {
      this.open = !0, this.$emit("opened");
    }
  }
};
function um(e, r, t, s, o, b) {
  const l = ke("UiModal");
  return V(), K("div", null, [
    S("div", {
      class: "inline cursor-pointer",
      onClick: r[0] || (r[0] = (...v) => b.openModal && b.openModal(...v))
    }, [
      $e(e.$slots, "trigger")
    ]),
    Ie(l, Nt(e.$attrs, {
      id: t.id,
      opened: o.open,
      size: t.size,
      onOpened: b.onOpened,
      onClosed: b.onClosed
    }), {
      default: Be(() => [
        $e(e.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "opened", "size", "onOpened", "onClosed"])
  ]);
}
const my = /* @__PURE__ */ Ee(sm, [["render", um]]), vy = (e) => {
  const r = e.config.globalProperties.emitter;
  e.config.globalProperties.$modal = {
    closeAll(t) {
      r.emit("modal-close-all", t);
    }
  };
}, cm = {
  components: {
    Bars3IconOutline: ks,
    XMarkIconOutline: zr
  },
  props: {
    fullWidth: {
      type: Boolean,
      default: !1
    },
    dark: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      mobileMenuOpen: !1
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen, this.mobileMenuOpen ? this.$emit("open") : this.$emit("close");
    }
  }
}, fm = { class: "flex px-2 lg:px-0" }, dm = { class: "flex items-center flex-shrink-0" }, hm = { class: "flex items-center lg:hidden" }, pm = /* @__PURE__ */ S("span", { class: "sr-only" }, "Open main menu", -1), mm = { class: "hidden lg:ml-4 lg:flex lg:items-center" }, vm = {
  key: 0,
  class: "lg:hidden"
}, ym = { class: "pt-4 pb-3 border-t border-gray-200" };
function gm(e, r, t, s, o, b) {
  const l = ke("Bars3IconOutline"), v = ke("XMarkIconOutline");
  return V(), K("nav", {
    class: pe(["shadow", {
      "bg-gray-800 dark-nav": t.dark,
      "bg-white": !t.dark
    }])
  }, [
    S("div", {
      class: pe(["px-2 mx-auto sm:px-4 lg:px-8", {
        "max-w-7xl": !t.fullWidth
      }])
    }, [
      S("div", {
        class: pe(["flex justify-between h-16", { "items-center": t.dark }])
      }, [
        S("div", fm, [
          S("div", dm, [
            $e(e.$slots, "logo")
          ]),
          S("div", {
            class: pe(["hidden lg:ml-6 lg:flex", {
              "desktop-navigation-default lg:space-x-8": !t.dark,
              "desktop-navigation-dark space-x-4": t.dark
            }])
          }, [
            $e(e.$slots, "links")
          ], 2)
        ]),
        S("div", hm, [
          S("button", {
            class: "inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
            onClick: r[0] || (r[0] = (...y) => b.toggleMobileMenu && b.toggleMobileMenu(...y))
          }, [
            pm,
            o.mobileMenuOpen ? (V(), je(v, {
              key: 1,
              class: "block w-6 h-6",
              "aria-hidden": "true"
            })) : (V(), je(l, {
              key: 0,
              class: "block w-6 h-6",
              "aria-hidden": "true"
            }))
          ])
        ]),
        S("div", mm, [
          $e(e.$slots, "right")
        ])
      ], 2)
    ], 2),
    Ie(Mt, null, {
      default: Be(() => [
        o.mobileMenuOpen ? (V(), K("div", vm, [
          S("div", {
            class: pe(["pt-2 pb-3 space-y-1", {
              "mobile-navigation-default": !t.dark,
              "mobile-navigation-dark": t.dark
            }])
          }, [
            $e(e.$slots, "links")
          ], 2),
          S("div", ym, [
            $e(e.$slots, "mobile-bottom")
          ])
        ])) : ae("", !0)
      ]),
      _: 3
    })
  ], 2);
}
const yy = /* @__PURE__ */ Ee(cm, [["render", gm]]), bm = {
  components: {
    PrinterIconOutline: $s
  },
  props: {
    id: {
      type: String,
      required: !0
    },
    cssFile: {
      type: String,
      default: "https://cdn.tailwindcss.com"
    }
  },
  methods: {
    printNow(e) {
      this.$nextTick(() => {
        const r = document.getElementById(this.id);
        if (r) {
          const t = window.open("", "", "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0");
          t.document.write('<link rel="stylesheet" href="' + this.cssFile + '">'), t.document.write(r.innerHTML), t.document.close(), t.focus(), setTimeout(() => {
            t.print();
          }, 500);
        } else
          alert("Aucun contenu à imprimer");
      });
    }
  }
};
function _m(e, r, t, s, o, b) {
  const l = ke("PrinterIconOutline");
  return V(), K("button", {
    type: "button",
    role: "button",
    class: "print:hidden btn btn-icon",
    onClick: r[0] || (r[0] = (...v) => b.printNow && b.printNow(...v))
  }, [
    Ie(l, { class: "w-5 h-5" })
  ]);
}
const gy = /* @__PURE__ */ Ee(bm, [["render", _m]]), wm = {
  props: {
    current: {
      type: [String, Number],
      default: 1
    },
    steps: {
      type: [Array, Object],
      required: !0
    },
    stepName: {
      type: String,
      default: "Étape"
    }
  },
  computed: {
    currentStep() {
      return parseInt(this.current);
    }
  },
  methods: {
    changeStep(e) {
      e.allowed && this.$emit("change-step", e.number);
    }
  }
}, km = { "aria-label": "Progress" }, Om = {
  role: "list",
  class: "space-y-4 md:flex md:space-y-0 md:space-x-8"
}, xm = ["disabled", "onClick"], Sm = { class: "text-sm font-medium text-left" };
function Em(e, r, t, s, o, b) {
  return V(), K("nav", km, [
    S("ol", Om, [
      (V(!0), K(ze, null, Ye(t.steps, (l) => (V(), K("li", {
        key: l.number,
        class: "md:flex-1"
      }, [
        S("button", {
          class: pe(["flex flex-col w-full py-2 pl-4 border-l-4 group hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4", {
            "cursor-not-allowed": !l.allowed,
            "border-primary-500 hover:border-primary-300": b.currentStep >= l.number,
            "border-gray-200 hover:border-gray-300": b.currentStep < l.number
          }]),
          disabled: !l.allowed,
          onClick: (v) => b.changeStep(l)
        }, [
          S("span", {
            class: pe(["text-xs font-semibold tracking-wide uppercase", {
              "text-primary-600": b.currentStep >= l.number,
              "text-gray-500 group-hover:text-gray-700": b.currentStep < l.number
            }])
          }, we(t.stepName) + " " + we(l.number), 3),
          S("span", Sm, we(l.label), 1)
        ], 10, xm)
      ]))), 128))
    ])
  ]);
}
const by = /* @__PURE__ */ Ee(wm, [["render", Em]]), $m = {
  props: {
    current: {
      type: [String, Number],
      default: 1
    },
    steps: {
      type: [Array, Object],
      required: !0
    }
  },
  computed: {
    currentStep() {
      return parseInt(this.current);
    }
  },
  methods: {
    changeStep(e) {
      e.allowed && this.$emit("change-step", e.number);
    }
  }
}, Am = { "aria-label": "Progress" }, Tm = { class: "overflow-hidden" }, Mm = ["disabled", "onClick"], Nm = { class: "flex items-center h-9" }, Cm = {
  key: 0,
  class: "relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 rounded-full border-primary-500"
}, Lm = /* @__PURE__ */ S("span", { class: "h-2.5 w-2.5 bg-primary rounded-full" }, null, -1), Pm = [
  Lm
], Dm = {
  key: 1,
  class: "relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary-500 group-hover:bg-primary-800"
}, Im = /* @__PURE__ */ S("svg", {
  class: "w-5 h-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ S("path", {
    "fill-rule": "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
    "clip-rule": "evenodd"
  })
], -1), Bm = [
  Im
], jm = { class: "flex flex-col min-w-0 ml-4" }, qm = {
  key: 0,
  class: "text-sm text-left text-gray-500"
};
function Rm(e, r, t, s, o, b) {
  return V(), K("nav", Am, [
    S("ol", Tm, [
      (V(!0), K(ze, null, Ye(t.steps, (l, v) => (V(), K("li", {
        key: l.number,
        class: "relative pb-10"
      }, [
        v !== t.steps.length - 1 ? (V(), K("div", {
          key: 0,
          class: pe(["-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-primary-500", {
            "bg-primary": b.currentStep > l.number,
            "bg-gray-300": b.currentStep <= l.number
          }]),
          "aria-hidden": "true"
        }, null, 2)) : ae("", !0),
        S("button", {
          class: pe(["relative flex items-center focus:outline-none group", {
            "cursor-not-allowed": !l.allowed
          }]),
          disabled: !l.allowed,
          onClick: (y) => b.changeStep(l)
        }, [
          S("span", Nm, [
            b.currentStep === l.number ? (V(), K("span", Cm, Pm)) : b.currentStep > l.number ? (V(), K("span", Dm, Bm)) : (V(), K("span", {
              key: 2,
              class: pe(["relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full", {
                "group-hover:border-gray-400": l.allowed
              }])
            }, [
              S("span", {
                class: pe(["h-2.5 w-2.5 bg-transparent rounded-full", {
                  "group-hover:bg-gray-300": l.allowed
                }])
              }, null, 2)
            ], 2))
          ]),
          S("span", jm, [
            S("span", {
              class: pe(["text-xs font-semibold tracking-wide text-left uppercase", {
                "text-primary": b.currentStep === l.number,
                "text-gray-500": !l.allowed
              }])
            }, we(l.label), 3),
            l.sublabel ? (V(), K("span", qm, we(l.sublabel), 1)) : ae("", !0)
          ])
        ], 10, Mm)
      ]))), 128))
    ])
  ]);
}
const _y = /* @__PURE__ */ Ee($m, [["render", Rm]]), Vm = { class: "flex items-center ml-auto text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600" }, Fm = {
  __name: "UiTableActionIcon",
  setup(e) {
    return (r, t) => (V(), K("button", Vm, [
      Ie(pr(bo), { class: "w-5 h-5" })
    ]));
  }
}, Um = {
  components: {
    UiDropdown: Sr,
    UiTableActionIcon: Fm
  }
}, zm = { class: "dropdown-menu" };
function Hm(e, r, t, s, o, b) {
  const l = ke("UiTableActionIcon"), v = ke("UiDropdown");
  return V(), je(v, { class: "relative" }, {
    trigger: Be(() => [
      Ie(l)
    ]),
    content: Be(() => [
      S("div", zm, [
        $e(e.$slots, "default")
      ])
    ]),
    _: 3
  });
}
const wy = /* @__PURE__ */ Ee(Um, [["render", Hm]]), Ym = {
  components: {
    CheckCircleIcon: Os,
    XCircleIcon: As
  },
  props: {
    value: {
      type: Boolean,
      required: !0
    }
  }
};
function Km(e, r, t, s, o, b) {
  const l = ke("CheckCircleIcon"), v = ke("XCircleIcon");
  return t.value ? (V(), je(l, {
    key: 0,
    class: "w-5 h-5 text-green-500"
  })) : (V(), je(v, {
    key: 1,
    class: "w-5 h-5 text-red-500"
  }));
}
const ky = /* @__PURE__ */ Ee(Ym, [["render", Km]]), Wm = {
  props: {
    title: {
      type: String,
      required: !0
    },
    subtitle: {
      type: String,
      required: !0
    }
  }
}, Gm = { class: "sm:flex sm:items-center" }, Zm = { class: "sm:flex-auto" }, Xm = { class: "text-xl font-semibold text-gray-900" }, Jm = { class: "mt-2 text-sm text-gray-700" }, Qm = { class: "mt-4 sm:mt-0 sm:ml-16 sm:flex-none" };
function e0(e, r, t, s, o, b) {
  return V(), K("div", Gm, [
    S("div", Zm, [
      S("h1", Xm, we(t.title), 1),
      S("p", Jm, we(t.subtitle), 1)
    ]),
    S("div", Qm, [
      $e(e.$slots, "default")
    ])
  ]);
}
const Oy = /* @__PURE__ */ Ee(Wm, [["render", e0]]), t0 = {
  components: {
    ChevronDownIconSolid: fo,
    ChevronUpIconSolid: vo
  },
  props: {
    cols: {
      type: Array,
      required: !0
    },
    items: {
      type: Array,
      required: !0
    },
    paginate: {
      type: Number,
      required: !1,
      default: void 0
    },
    handlePagination: {
      type: Boolean,
      default: !0
    },
    paginationTotal: {
      type: Number,
      required: !1,
      default: void 0
    },
    currentPage: {
      type: Number,
      default: void 0
    },
    condensed: {
      type: Boolean,
      default: !1
    },
    selectable: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      page: this.currentPage || 1,
      sortByOptions: void 0,
      selectedItems: []
    };
  },
  computed: {
    filteredItems() {
      let e = this.items;
      return this.sortByOptions && this.sortByOptions.col && (e = e.sort((r, t) => this.sortByOptions.order === "desc" ? this.sortByOptions.col.sortableBy(r, t) > this.sortByOptions.col.sortableBy(t, r) ? 1 : -1 : this.sortByOptions.col.sortableBy(r, t) < this.sortByOptions.col.sortableBy(t, r) ? 1 : -1)), this.paginate !== void 0 && this.handlePagination ? e.slice((this.page - 1) * this.paginate, this.page * this.paginate) : e;
    },
    pagination() {
      const e = this.paginationTotal || this.items.length;
      return {
        currentPage: this.currentPage || this.page,
        lastPage: e / this.paginate,
        total: e,
        from: this.page * this.paginate - this.paginate + 1,
        to: this.page * this.paginate > e ? e : this.page * this.paginate
      };
    },
    selectedIndeterminate() {
      return this.selectedItems.length > 0 && this.selectedItems.length < this.items.length;
    }
  },
  watch: {
    selectedItems() {
      this.$emit("selection-changed", this.items.filter((e) => this.selectedItems.includes(e.id)));
    }
  },
  methods: {
    sortBy(e) {
      this.sortByOptions && this.sortByOptions.col.slot === e.slot ? this.sortByOptions = {
        col: e,
        order: this.sortByOptions.order === "desc" ? "asc" : "desc"
      } : this.sortByOptions = {
        col: e,
        order: "asc"
      }, this.$emit("sort-by", this.sortByOptions);
    },
    prevPage() {
      this.handlePagination && this.page--, this.$emit("page-changed", this.currentPage - 1);
    },
    nextPage() {
      this.handlePagination && this.page++, this.$emit("page-changed", this.currentPage + 1);
    }
  }
}, n0 = { class: "rounded-lg shadow ring-1 ring-black ring-opacity-5" }, r0 = {
  key: 0,
  scope: "col",
  class: "relative w-12 px-6 sm:w-16 sm:px-8"
}, i0 = ["checked", "indeterminate"], o0 = ["data-test-table-header"], l0 = { class: "flex items-center" }, a0 = ["onClick"], s0 = ["data-test-item-id"], u0 = {
  key: 0,
  class: "relative w-12 px-6 sm:w-16 sm:px-8"
}, c0 = {
  key: 0,
  class: "absolute inset-y-0 left-0 w-0.5 bg-primary-600"
}, f0 = ["value"], d0 = {
  key: 0,
  "data-test-no-items": ""
}, h0 = ["colspan"], p0 = { class: "mb-2" }, m0 = /* @__PURE__ */ S("svg", {
  class: "w-10 h-10 mx-auto",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ S("path", {
    "fill-rule": "evenodd",
    d: "M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z",
    "clip-rule": "evenodd"
  })
], -1), v0 = {
  key: 0,
  class: "flex items-center justify-between px-4 py-3 bg-white rounded-b-lg sm:px-6"
}, y0 = { class: "flex-grow hidden sm:block" }, g0 = { class: "text-sm leading-5 text-slate-500" }, b0 = ["textContent"], _0 = ["textContent"], w0 = ["textContent"], k0 = { class: "flex justify-between sm:justify-end" }, O0 = ["disabled"], x0 = ["disabled"];
function S0(e, r, t, s, o, b) {
  const l = ke("ChevronDownIconSolid"), v = ke("ChevronUpIconSolid");
  return V(), K("div", n0, [
    S("table", {
      "aria-labelledby": "Data Table",
      class: pe(["table-default", {
        "with-pagination": t.paginate !== void 0,
        condensed: t.condensed
      }])
    }, [
      S("thead", null, [
        S("tr", null, [
          t.selectable ? (V(), K("th", r0, [
            S("input", {
              type: "checkbox",
              class: "absolute w-4 h-4 -mt-2 rounded text-primary-600 border-slate-300 left-4 top-1/2 focus:ring-primary-500 sm:left-6",
              checked: b.selectedIndeterminate || o.selectedItems.length === t.items.length,
              indeterminate: b.selectedIndeterminate,
              onChange: r[0] || (r[0] = (y) => o.selectedItems = y.target.checked ? t.items.map((d) => d.id) : [])
            }, null, 40, i0)
          ])) : ae("", !0),
          (V(!0), K(ze, null, Ye(t.cols, (y) => (V(), K("th", {
            key: y.slot,
            scope: "col",
            "data-test-table-header": y.slot,
            class: pe([y.class, y.mobile === !1 ? "md:table-cell hidden" : ""])
          }, [
            S("div", l0, [
              Pt(we(y.title) + " ", 1),
              y.sortableBy ? (V(), K("button", {
                key: 0,
                class: pe(["flex-none ml-2 rounded text-slate-500 bg-slate-100 group-hover:bg-slate-300", {
                  "text-slate-900 bg-slate-200": o.sortByOptions && o.sortByOptions.col.slot === y.slot
                }]),
                onClick: (d) => b.sortBy(y)
              }, [
                o.sortByOptions && o.sortByOptions.col.slot === y.slot && o.sortByOptions.order === "asc" ? (V(), je(l, {
                  key: 0,
                  class: "w-5 h-5",
                  "aria-hidden": "true"
                })) : (V(), je(v, {
                  key: 1,
                  class: "w-5 h-5",
                  "aria-hidden": "true"
                }))
              ], 10, a0)) : ae("", !0)
            ])
          ], 10, o0))), 128))
        ])
      ]),
      S("tbody", null, [
        (V(!0), K(ze, null, Ye(b.filteredItems, (y) => (V(), K("tr", {
          key: y.id,
          "data-test-item-id": y.id
        }, [
          t.selectable ? (V(), K("td", u0, [
            o.selectedItems.includes(y.id) ? (V(), K("div", c0)) : ae("", !0),
            Rr(S("input", {
              "onUpdate:modelValue": r[1] || (r[1] = (d) => o.selectedItems = d),
              type: "checkbox",
              class: "absolute w-4 h-4 -mt-2 rounded text-primary-600 border-slate-300 left-4 top-1/2 focus:ring-primary-500 sm:left-6",
              value: y.id
            }, null, 8, f0), [
              [hi, o.selectedItems]
            ])
          ])) : ae("", !0),
          (V(!0), K(ze, null, Ye(t.cols, (d) => (V(), K("td", {
            key: d.slot,
            class: pe([d.slot, d.class, d.mobile === !1 ? "md:table-cell hidden" : ""])
          }, [
            $e(e.$slots, d.slot, { item: y })
          ], 2))), 128))
        ], 8, s0))), 128)),
        t.items.length ? ae("", !0) : (V(), K("tr", d0, [
          S("td", {
            colspan: t.cols.length,
            class: "py-10 text-center bg-white text-slate-400 rounded-b-md"
          }, [
            S("div", p0, [
              $e(e.$slots, "empty")
            ]),
            m0
          ], 8, h0)
        ]))
      ])
    ], 2),
    t.paginate !== void 0 ? (V(), K("div", v0, [
      S("div", y0, [
        S("p", g0, [
          Pt(" Affichage de "),
          S("span", {
            class: "font-semibold",
            textContent: we(b.pagination.from)
          }, null, 8, b0),
          Pt(" à "),
          S("span", {
            class: "font-semibold",
            textContent: we(b.pagination.to)
          }, null, 8, _0),
          Pt(" sur "),
          S("span", {
            class: "font-semibold",
            textContent: we(b.pagination.total)
          }, null, 8, w0),
          Pt(" résultats ")
        ])
      ]),
      S("div", k0, [
        S("button", {
          disabled: b.pagination.currentPage === 1,
          type: "button",
          class: "btn",
          onClick: r[2] || (r[2] = (...y) => b.prevPage && b.prevPage(...y))
        }, " Précédent ", 8, O0),
        S("button", {
          disabled: b.pagination.currentPage >= b.pagination.lastPage,
          type: "button",
          class: "ml-2 btn",
          onClick: r[3] || (r[3] = (...y) => b.nextPage && b.nextPage(...y))
        }, " Suivant ", 8, x0)
      ])
    ])) : ae("", !0)
  ]);
}
const xy = /* @__PURE__ */ Ee(t0, [["render", S0]]), E0 = {
  props: {
    tabs: {
      type: Array,
      required: !0
    },
    defaultTab: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentTab: this.defaultTab
    };
  },
  methods: {
    setCurrentTab(e) {
      this.currentTab = e, this.$emit("changed", e);
    },
    setCurrentTabFromSelect(e) {
      this.setCurrentTab(parseInt(e.target.value));
    }
  }
}, $0 = { class: "mb-4 border-b border-gray-200" }, A0 = {
  "aria-label": "Tabs Menu",
  class: "hidden -mb-px space-x-8 md:flex"
}, T0 = ["onClick"], M0 = {
  key: 1,
  class: "truncate"
}, N0 = {
  "aria-label": "Tabs Menu",
  class: "block md:hidden"
}, C0 = ["value", "selected"];
function L0(e, r, t, s, o, b) {
  return V(), K("div", null, [
    S("div", $0, [
      S("nav", A0, [
        (V(!0), K(ze, null, Ye(t.tabs, (l, v) => (V(), K("div", {
          key: v,
          class: pe(["h-nav-item", { active: v == o.currentTab }]),
          onClick: (y) => b.setCurrentTab(v)
        }, [
          l.slotLabel ? $e(e.$slots, l.slotLabel, { key: 0 }) : (V(), K("span", M0, we(l.label), 1))
        ], 10, T0))), 128))
      ]),
      S("nav", N0, [
        S("select", {
          name: "tabs",
          class: "input",
          onInput: r[0] || (r[0] = (...l) => b.setCurrentTabFromSelect && b.setCurrentTabFromSelect(...l))
        }, [
          (V(!0), K(ze, null, Ye(t.tabs, (l, v) => (V(), K("option", {
            key: v,
            value: v,
            selected: v == o.currentTab
          }, we(l.label), 9, C0))), 128))
        ], 32)
      ])
    ]),
    (V(!0), K(ze, null, Ye(t.tabs, (l, v) => (V(), K("div", { key: v }, [
      Ie(Mt, { appear: "" }, {
        default: Be(() => [
          v === o.currentTab ? $e(e.$slots, l.slotName, { key: 0 }) : ae("", !0)
        ]),
        _: 2
      }, 1024)
    ]))), 128))
  ]);
}
const Sy = /* @__PURE__ */ Ee(E0, [["render", L0]]), P0 = {
  props: {
    tabs: {
      type: Array,
      required: !0
    },
    defaultTab: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentTab: this.defaultTab
    };
  },
  methods: {
    setCurrentTab(e) {
      this.currentTab = e, this.$emit("changed", e);
    },
    setCurrentTabFromSelect(e) {
      this.setCurrentTab(parseInt(e.target.value));
    }
  }
}, D0 = { class: "grid gap-6 md:grid-cols-5" }, I0 = {
  "aria-label": "Tabs Menu",
  class: "hidden col-span-1 md:block"
}, B0 = ["onClick"], j0 = {
  key: 1,
  class: "truncate"
}, q0 = {
  "aria-label": "Tabs Menu",
  class: "block md:hidden"
}, R0 = ["value", "selected"], V0 = { class: "md:col-span-4" };
function F0(e, r, t, s, o, b) {
  return V(), K("div", D0, [
    S("nav", I0, [
      (V(!0), K(ze, null, Ye(t.tabs, (l, v) => (V(), K("div", {
        key: v,
        class: pe(["v-nav-item", { active: v == o.currentTab }]),
        onClick: (y) => b.setCurrentTab(v)
      }, [
        l.slotLabel ? $e(e.$slots, l.slotLabel, { key: 0 }) : (V(), K("span", j0, we(l.label), 1))
      ], 10, B0))), 128))
    ]),
    S("nav", q0, [
      S("select", {
        name: "tabs",
        class: "input",
        onInput: r[0] || (r[0] = (...l) => b.setCurrentTabFromSelect && b.setCurrentTabFromSelect(...l))
      }, [
        (V(!0), K(ze, null, Ye(t.tabs, (l, v) => (V(), K("option", {
          key: v,
          value: v,
          selected: v == o.currentTab
        }, we(l.label), 9, R0))), 128))
      ], 32)
    ]),
    S("div", V0, [
      (V(!0), K(ze, null, Ye(t.tabs, (l, v) => (V(), K("div", { key: v }, [
        v === o.currentTab ? $e(e.$slots, l.slotName, { key: 0 }) : ae("", !0)
      ]))), 128))
    ])
  ]);
}
const Ey = /* @__PURE__ */ Ee(P0, [["render", F0]]), U0 = {}, z0 = { class: "md:flex md:items-center md:justify-between" }, H0 = { class: "flex-1 min-w-0" }, Y0 = { class: "title" }, K0 = { class: "flex mt-4 md:mt-0 md:ml-4" };
function W0(e, r) {
  return V(), K("div", z0, [
    S("div", H0, [
      S("h1", Y0, [
        $e(e.$slots, "default")
      ])
    ]),
    S("div", K0, [
      $e(e.$slots, "heading-right")
    ])
  ]);
}
const $y = /* @__PURE__ */ Ee(U0, [["render", W0]]), G0 = {}, Z0 = { class: "pb-5 space-y-3 border-b border-gray-200 sm:flex sm:items-center sm:justify-between sm:space-x-4 sm:space-y-0" }, X0 = { class: "subtitle" };
function J0(e, r) {
  return V(), K("div", Z0, [
    S("h2", X0, [
      $e(e.$slots, "default")
    ]),
    $e(e.$slots, "heading-right")
  ]);
}
const Ay = /* @__PURE__ */ Ee(G0, [["render", J0]]), ii = {
  props: {
    closable: {
      type: Boolean,
      default: !0
    },
    title: {
      type: String,
      required: !0
    },
    level: {
      type: String,
      required: !0
    },
    message: {
      type: String,
      default: void 0
    },
    actions: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handle(e) {
      e.handler ? e.handler() : this.$emit("close");
    }
  }
}, Q0 = {
  components: { XMarkIcon: Gn },
  mixins: [ii]
}, ev = { class: "flex items-center" }, tv = { class: "flex justify-between flex-1 w-0" }, nv = { class: "flex-1 w-0 text-sm font-medium leading-5 text-gray-900" }, rv = {
  key: 0,
  class: "flex ml-4 shrink-0"
};
function iv(e, r, t, s, o, b) {
  const l = ke("XMarkIcon");
  return V(), je(Mt, { appear: "" }, {
    default: Be(() => [
      S("div", ev, [
        S("div", tv, [
          S("p", nv, we(e.title), 1),
          e.actions.length ? (V(), K("button", {
            key: 0,
            class: "ml-3 text-sm font-medium leading-5 text-indigo-600 transition duration-150 ease-in-out shrink-0 hover:text-indigo-500 focus:outline-none focus:underline",
            onClick: r[0] || (r[0] = (v) => e.handle(e.actions[0]))
          }, we(e.button.title), 1)) : ae("", !0)
        ]),
        e.closable ? (V(), K("div", rv, [
          S("button", {
            class: "inline-flex text-gray-400 transition duration-150 ease-in-out focus:outline-none focus:text-gray-500",
            onClick: r[1] || (r[1] = (v) => e.$emit("close"))
          }, [
            Ie(l, { class: "w-5 h-5" })
          ])
        ])) : ae("", !0)
      ])
    ]),
    _: 1
  });
}
const ov = /* @__PURE__ */ Ee(Q0, [["render", iv]]), lv = {
  components: { XMarkIcon: Gn },
  mixins: [ii]
}, av = { class: "flex items-start" }, sv = { class: "shrink-0" }, uv = {
  key: 0,
  class: "w-6 h-6 text-green-400",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, cv = /* @__PURE__ */ S("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
}, null, -1), fv = [
  cv
], dv = {
  key: 1,
  fill: "none",
  class: "w-6 h-6 text-blue-500",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, hv = /* @__PURE__ */ S("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
}, null, -1), pv = [
  hv
], mv = {
  key: 2,
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  class: "w-6 h-6 text-orange-500"
}, vv = /* @__PURE__ */ S("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
}, null, -1), yv = [
  vv
], gv = {
  key: 3,
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  class: "w-6 h-6 text-red-500"
}, bv = /* @__PURE__ */ S("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
}, null, -1), _v = [
  bv
], wv = { class: "ml-3 w-0 flex-1 pt-0.5" }, kv = { class: "text-sm font-medium leading-5 text-gray-900" }, Ov = {
  key: 0,
  class: "mt-1 text-sm leading-5 text-gray-500"
}, xv = {
  key: 1,
  class: "flex mt-4"
}, Sv = ["onClick"], Ev = {
  key: 0,
  class: "flex ml-4 shrink-0"
};
function $v(e, r, t, s, o, b) {
  const l = ke("XMarkIcon");
  return V(), je(Mt, { appear: "" }, {
    default: Be(() => [
      S("div", av, [
        S("div", sv, [
          e.level === "success" ? (V(), K("svg", uv, fv)) : e.level === "info" ? (V(), K("svg", dv, pv)) : e.level === "warning" ? (V(), K("svg", mv, yv)) : e.level === "danger" ? (V(), K("svg", gv, _v)) : ae("", !0)
        ]),
        S("div", wv, [
          S("p", kv, we(e.title), 1),
          e.message ? (V(), K("p", Ov, we(e.message), 1)) : ae("", !0),
          e.actions.length ? (V(), K("div", xv, [
            (V(!0), K(ze, null, Ye(e.actions, (v) => (V(), K("span", {
              key: v.title,
              class: "flex w-full rounded-md shadow-sm sm:mr-3 sm:w-auto"
            }, [
              S("button", {
                type: "button",
                class: pe(["btn", [v.class]]),
                onClick: (y) => e.handle(v)
              }, we(v.title), 11, Sv)
            ]))), 128))
          ])) : ae("", !0)
        ]),
        e.closable ? (V(), K("div", Ev, [
          S("button", {
            class: "inline-flex text-gray-400 transition duration-150 ease-in-out focus:outline-none focus:text-gray-500",
            onClick: r[0] || (r[0] = (v) => e.$emit("close"))
          }, [
            Ie(l, { class: "w-5 h-5" })
          ])
        ])) : ae("", !0)
      ])
    ]),
    _: 1
  });
}
const Av = /* @__PURE__ */ Ee(lv, [["render", $v]]), Tv = {
  components: {
    CondensedToast: ov,
    DefaultToast: Av
  },
  props: {
    toast: {
      type: Object,
      required: !0
    },
    template: {
      type: String,
      default: "default"
    },
    duration: {
      type: Number,
      default: 5e3
    }
  },
  mounted() {
    setTimeout(() => {
      this.expire();
    }, this.duration);
  },
  methods: {
    expire() {
      this.emitter.emit("remove-toast", this.toast);
    }
  }
}, Mv = {
  ref: "wrapper",
  class: "relative z-50 w-full max-w-sm bg-white rounded-lg shadow-lg pointer-events-auto"
}, Nv = { class: "overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5" }, Cv = { class: "p-4" };
function Lv(e, r, t, s, o, b) {
  const l = ke("CondensedToast"), v = ke("DefaultToast");
  return V(), K("div", Mv, [
    S("div", Nv, [
      S("div", Cv, [
        t.template === "condensed" ? (V(), je(l, {
          key: 0,
          level: t.toast.level,
          title: t.toast.title,
          message: t.toast.message,
          closable: t.toast.closable,
          actions: t.toast.actions,
          onClose: b.expire
        }, null, 8, ["level", "title", "message", "closable", "actions", "onClose"])) : (V(), je(v, {
          key: 1,
          level: t.toast.level,
          title: t.toast.title,
          message: t.toast.message,
          closable: t.toast.closable,
          actions: t.toast.actions,
          onClose: b.expire
        }, null, 8, ["level", "title", "message", "closable", "actions", "onClose"]))
      ])
    ])
  ], 512);
}
const Pv = /* @__PURE__ */ Ee(Tv, [["render", Lv]]), Dv = {
  components: {
    BaseToast: Pv
  },
  data() {
    return {
      toasts: []
    };
  },
  beforeMount() {
    this.registerEvents();
  },
  beforeUnmount() {
    this.unRegisterEvents();
  },
  methods: {
    registerEvents() {
      this.emitter.on("toast", this.addToast), this.emitter.on("remove-toast", this.removeToast);
    },
    unRegisterEvents() {
      this.emitter.off("toast", this.addToast), this.emitter.off("remove-toast", this.removeToast);
    },
    addToast(e) {
      e.id = Math.random().toString(36), this.toasts.push(e);
    },
    removeToast(e) {
      this.toasts.splice(this.toasts.indexOf(e), 1);
    }
  }
};
function Iv(e, r, t, s, o, b) {
  const l = ke("BaseToast");
  return V(), je(pi, {
    name: "list",
    tag: "div",
    class: "fixed inset-0 z-50 flex flex-col items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-end sm:justify-start"
  }, {
    default: Be(() => [
      (V(!0), K(ze, null, Ye(o.toasts, (v) => (V(), je(l, {
        key: v.id,
        class: "mb-4 transition-all duration-200 ease-linear",
        toast: v,
        level: v.level,
        template: v.template,
        actions: v.actions,
        duration: v.duration
      }, null, 8, ["toast", "level", "template", "actions", "duration"]))), 128))
    ]),
    _: 1
  });
}
const Ty = /* @__PURE__ */ Ee(Dv, [["render", Iv]]), My = (e) => {
  const r = e.config.globalProperties.emitter;
  e.config.globalProperties.$toast = {
    show(t, s = {}) {
      this.condensed(t, s);
    },
    condensed(t, s = {}) {
      s.title = t, s.level = "info", s.template = "condensed", r.emit("toast", s);
    },
    error(t) {
      t.level = "danger", r.emit("toast", t);
    },
    danger(t) {
      t.level = "danger", r.emit("toast", t);
    },
    success(t) {
      t.level = "success", r.emit("toast", t);
    },
    info(t) {
      t.level = "info", r.emit("toast", t);
    },
    warning(t) {
      t.level = "warning", r.emit("toast", t);
    }
  };
};
var kr = {}, Bv = {
  get exports() {
    return kr;
  },
  set exports(e) {
    kr = e;
  }
};
(function(e, r) {
  (function(t, s) {
    e.exports = s();
  })(at, function() {
    return function(t, s, o) {
      t = t || {};
      var b = s.prototype, l = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function v(d, g, i, n) {
        return b.fromToBase(d, g, i, n);
      }
      o.en.relativeTime = l, b.fromToBase = function(d, g, i, n, a) {
        for (var p, h, m, f = i.$locale().relativeTime || l, u = t.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], k = u.length, c = 0; c < k; c += 1) {
          var w = u[c];
          w.d && (p = n ? o(d).diff(i, w.d, !0) : i.diff(d, w.d, !0));
          var M = (t.rounding || Math.round)(Math.abs(p));
          if (m = p > 0, M <= w.r || !w.r) {
            M <= 1 && c > 0 && (w = u[c - 1]);
            var $ = f[w.l];
            a && (M = a("" + M)), h = typeof $ == "string" ? $.replace("%d", M) : $(M, g, w.l, m);
            break;
          }
        }
        if (g)
          return h;
        var A = m ? f.future : f.past;
        return typeof A == "function" ? A(h) : A.replace("%s", h);
      }, b.to = function(d, g) {
        return v(d, g, this, !0);
      }, b.from = function(d, g) {
        return v(d, g, this);
      };
      var y = function(d) {
        return d.$u ? o.utc() : o();
      };
      b.toNow = function(d) {
        return this.to(y(this), d);
      }, b.fromNow = function(d) {
        return this.from(y(this), d);
      };
    };
  });
})(Bv);
const jv = kr;
_e.extend(jv);
_e.locale("fr");
const Ny = {
  format: (e, r) => {
    if (e)
      return _e(e).locale("fr").format(r);
  },
  ago: (e, r = !1) => _e(e).locale("fr").fromNow(r),
  age: (e, r = null) => {
    const t = qv(e, r ? new Date(r) : /* @__PURE__ */ new Date());
    if (t.years < 0 && r === null)
      return "naîtra dans environ " + _e(e).fromNow(!0);
    const s = [];
    return t.years > 0 && s.push(t.years + " an" + (t.years > 1 ? "s " : " ")), t.months > 0 && s.push(t.months + " mois"), t.days > 0 && s.push(t.days + " jour" + (t.days > 1 ? "s" : "")), s.length > 1 && s.splice(s.length - 1, 0, " et "), s.join("");
  },
  money: (e) => typeof e != "number" ? e : new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2
  }).format(e / 100),
  filesize: (e) => {
    if (typeof e != "number" || isNaN(e))
      throw new TypeError("Expected a number");
    const r = e < 0, t = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    if (r && (e = -e), e < 1)
      return (r ? "-" : "") + e + " B";
    const s = Math.min(Math.floor(Math.log(e) / Math.log(1e3)), t.length - 1);
    e = (e / Math.pow(1e3, s)).toFixed(2) * 1;
    const o = t[s];
    return (r ? "-" : "") + e + " " + o;
  }
};
function qv(e, r) {
  const t = {}, s = new Date(e), o = r.getYear(), b = r.getMonth(), l = r.getDate(), v = s.getYear(), y = s.getMonth(), d = s.getDate();
  let g, i, n = o - v;
  return b >= y ? g = b - y : (n--, g = 12 + b - y), l >= d ? i = l - d : (g--, i = 31 + l - d, g < 0 && (g = 11, n--)), t.years = n, t.months = g, t.days = i, t;
}
const Rv = (e) => {
  e.directive("tooltip", {
    mounted(r, t) {
      jr(r, t);
    },
    updated(r, t) {
      jr(r, t);
    }
  });
};
function jr(e, r) {
  let t, s;
  const o = r.value;
  typeof o == "string" ? (t = o, s = "top") : typeof o == "object" && o.visible !== !1 && (t = Vv(o.content) || "", s = o.position || "top"), e.setAttribute("position", s), e.setAttribute("tooltip", t);
}
function Vv(e) {
  return typeof e == "object" ? e.join(`
`) : e;
}
const Cy = (e) => {
  Rv(e);
}, Ly = {
  methods: {
    confirm(e, r, t, s = "Confirm", o = "Cancel") {
      this.$dialog.show({
        title: e,
        message: r,
        buttons: [
          { title: s, handler: t, loadOnClick: !0, class: "btn-primary" },
          { title: o }
        ]
      });
    }
  }
}, Py = {
  methods: {
    generateDateRange(e, r, t = 1, s = "month", o = "YYYY-MM-DD") {
      let b = _e(e);
      const l = _e(r), v = [];
      for (; b.isBefore(l); )
        v.push(b.format(o)), b = b.add(t, s);
      return v;
    }
  }
}, Dy = {
  data() {
    return {
      isDirty: !1
    };
  },
  methods: {
    change() {
      this.isDirty = !0;
    },
    clean() {
      this.isDirty = !1;
    }
  }
}, Iy = {
  methods: {
    download(e, r = "unknown") {
      const t = window.URL.createObjectURL(new Blob([e.data], { type: e.data.type })), s = document.createElement("a"), o = e.headers["content-disposition"];
      if (o) {
        let b = o.match(/filename="(.+)"/);
        b || (b = o.match(/filename=(.+)/)), b.length === 2 && (r = b[1]);
      }
      s.href = t, s.setAttribute("download", r), document.body.appendChild(s), s.click(), s.remove(), window.URL.revokeObjectURL(t);
    }
  }
}, By = {
  data() {
    return {
      isLoading: !1,
      loadingStates: {},
      errors: {}
    };
  },
  methods: {
    load(e = null) {
      e ? this.loadingStates[e] = !0 : this.isLoading = !0, this.errors = null;
    },
    done(e = null, r = null) {
      r ? this.loadingStates[r] = !1 : this.isLoading = !1, this.errors = null, e && this.$toast.success({ title: e });
    },
    doneWithErrors(e, r = null) {
      r ? this.loadingStates[r] = !1 : this.isLoading = !1, e.error ? this.$toast.error({ title: "Erreur", message: e.error }) : (this.errors = e.response && e.response.data ? e.response.data.errors : e.errors, this.$toast.error({ title: "Erreur", message: "Les données sont incorrectes ou incomplètes." }));
    },
    pageError(e, r = "Erreur", t = null) {
      t ? this.loadingStates[t] = !1 : this.isLoading = !1;
      let s, o;
      e && e.message && e.response && e.response.status === 401 ? s = [{ title: "Se connecter", handler: () => {
        window.location = "/login";
      } }] : s = [{ title: "Fermer" }], e.response && e.response.data && e.response.data.errors ? o = Object.keys(e.response.data.errors).map((b) => e.response.data.errors[b]).join(", ") : e.response && e.response.data && e.response.data.message ? o = e.response.data.message : e.response && e.response.message ? o = e.response.message : e.message ? o = e.message : o = "Error", this.$dialog.show({
        title: r,
        message: o,
        buttons: s
      });
    }
  }
};
export {
  Uo as UiAlert,
  Uv as UiAvatar,
  my as UiButtonModal,
  Vp as UiButtonSlideOver,
  $a as UiCard,
  Na as UiCardBody,
  Yv as UiCardFooter,
  Kv as UiCardHeader,
  Jv as UiCheckAnimation,
  ey as UiCheckbox,
  ty as UiDateCheckbox,
  Wv as UiDialog,
  Sr as UiDropdown,
  ny as UiDropzone,
  by as UiHorizontalSteps,
  Sy as UiHorizontalTabs,
  dy as UiInlineLoader,
  $u as UiInput,
  Ul as UiInputDate,
  Hr as UiInputFile,
  ry as UiInputHtml,
  iy as UiInputImage,
  oy as UiInputMoney,
  ly as UiInputSchedule,
  ql as UiLayoutInput,
  vp as UiLoader,
  Zv as UiLogItem,
  Xv as UiLogList,
  hy as UiMediaFinder,
  py as UiMediaPreview,
  am as UiModal,
  zv as UiMonthCalendar,
  yy as UiNavigationMenu,
  $y as UiPageTitle,
  Xl as UiPeriodSwitcher,
  gy as UiPrintButton,
  ay as UiRadioCards,
  sy as UiRadioGroup,
  uy as UiRange,
  Ay as UiSectionTitle,
  ri as UiSelect,
  cy as UiSelectMonth,
  fy as UiSelectYear,
  jp as UiSlideOver,
  _y as UiSteps,
  Fm as UiTableActionIcon,
  wy as UiTableActionMenu,
  ky as UiTableBooleanValue,
  Oy as UiTableHeader,
  xy as UiTableList,
  Jh as UiTextarea,
  Ty as UiToastWrapper,
  ap as UiToggle,
  Qv as UiValidationErrors,
  Ey as UiVerticalTabs,
  Hv as UiYearlyCalendar,
  Ly as confirmMixin,
  Py as dateRangeMixin,
  Cy as directives,
  Dy as dirtyFormMixin,
  Iy as downloadMixin,
  Ny as filters,
  By as loadingMixin,
  Gv as registerDialogPlugin,
  vy as registerModalPlugin,
  My as registerToastPlugin,
  Nh as searchMixin
};
