(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([[6], { tItf: function (e, t, r) { "use strict"; r.r(t), r.d(t, "default", (function () { return _ })); var n = r("LHL8"), a = r("jg1C"), i = (r("ERkP"), r("3XMw")), c = r.n(i), o = r("FtnG"), s = r("prCu"), l = r.n(s), p = r("3xO4"), b = r.n(p), d = r("rHpw"), u = r("cm6r"), j = r("t62R"), h = r("/yvb"), f = r("cHvH"), O = r("h+v4"), m = r("xIjg"), w = r("b3lC"), x = c.a.ea782461, g = c.a.abb67c3e, y = c.a.c33ad40c, v = function (e) { var t = Object(m.b)(), r = function () { t({ action: w.a.CLICK_TWITTER }) }; return Object(a.jsx)(f.a, { children: function (t) { var n = t.windowWidth, i = e.screenName, c = x({ screenName: i }), o = n <= d.a.theme.breakpoints.xSmall, s = n > d.a.theme.breakpoints.small, p = s ? "title4" : "headline1", f = s ? y : g, m = Object(O.d)(i), w = l.a.stringify({ screen_name: i }), v = "https://twitter.com/intent/follow?".concat(w); return Object(a.jsxs)(u.a, { link: m, onPress: r, style: P.root, children: [Object(a.jsx)(b.a, { style: [P.text, !s && !o && P.buttonAlignmentMargin], children: Object(a.jsx)(j.b, { color: "text", link: m, onPress: r, size: p, weight: "bold", children: c }) }), o ? null : Object(a.jsx)(h.b, { link: v, onPress: r, size: "small", style: P.button, type: "primaryFilled", children: f })] }) } }) }, P = d.a.create((function (e) { return { root: { display: "flex", flexDirection: "row", padding: e.spaces.space12 }, text: { flexGrow: 1, flexShrink: 1, overflowWrap: "break-all" }, button: { marginStart: e.spaces.space4, height: e.spaces.space16 }, buttonAlignmentMargin: { marginTop: 3 } } })), k = r("rx0C"); function H(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); t && (n = n.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n) } return r } function S(e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {}; t % 2 ? H(Object(r), !0).forEach((function (t) { Object(n.a)(e, t, r[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : H(Object(r)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) })) } return e } var C = c.a.d2ee69ce, E = { page: "timeline-profile", section: "main" }; function _(e) { var t = e.contextProvider, r = e.headerProps, n = e.hideBorder, i = e.hideFooter, c = e.hideScrollBar, s = e.maxHeight, l = e.showHeader, p = e.timeline, b = e.transparent, d = r ? r.screenName : "", u = l && r ? function () { return Object(a.jsx)(v, S({}, r)) } : function () { return null }; return Object(a.jsx)(o.a, S(S({}, t), {}, { children: Object(a.jsx)(m.a, { namespace: E, children: Object(a.jsx)(k.a, { emptyStateText: C, hideBorder: n, hideFooter: i, hideScrollBar: c, maxHeight: s, permalink: Object(O.d)(d), renderHeader: u, showHeader: l, timeline: p, transparent: b }) }) })) } } }]);