(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([[49], { BqYg: function (e, t) { function n(e, t, n) { var o, r, i, c, a; function l() { var u = Date.now() - c; u < t && u >= 0 ? o = setTimeout(l, t - u) : (o = null, n || (a = e.apply(i, r), i = r = null)) } null == t && (t = 100); var u = function () { i = this, r = arguments, c = Date.now(); var u = n && !o; return o || (o = setTimeout(l, t)), u && (a = e.apply(i, r), i = r = null), a }; return u.clear = function () { o && (clearTimeout(o), o = null) }, u.flush = function () { o && (a = e.apply(i, r), i = r = null, clearTimeout(o), o = null) }, u } n.debounce = n, e.exports = n }, VY6S: function (e, t, n) { "use strict"; var o = n("BqYg"), r = n.n(o); t.a = function (e, t, n) { return r()(e, t, n) } }, fyKl: function (e, t, n) { "use strict"; n.r(t), n.d(t, "default", (function () { return E })); var o = n("jg1C"), r = n("2In8"), i = n("Alxx"), c = n("aNP4"), a = n("UFnO"), l = n("i3ax"), u = n("whUO"), s = n("LHL8"), d = n("ERkP"), p = n.n(d), f = n("jdj2"), h = n.n(f), b = n("3xO4"), O = n.n(b), j = n("VY6S"), v = n("zfvc"), m = n("jHwr"), y = n("5tB6"), w = n("9Xa1"), _ = n("//dC"), g = n("lHOd"), x = n("Oe3h"), R = n("0FVZ"), N = n("MC+g"), D = n("7N4s"), H = n("cHvH"), P = n("rHpw"); function C(e) { var t = function () { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function () { }))), !0 } catch (e) { return !1 } }(); return function () { var n, o = Object(u.a)(e); if (t) { var r = Object(u.a)(this).constructor; n = Reflect.construct(o, arguments, r) } else n = o.apply(this, arguments); return Object(l.a)(this, n) } } function k(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); t && (o = o.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, o) } return n } function F(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {}; t % 2 ? k(Object(n), !0).forEach((function (t) { Object(s.a)(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e } var U = P.a.create((function (e) { return { rootNarrow: { maxWidth: "75%" }, rootWide: { maxWidth: "calc(".concat(e.spaces.space64, " * 6)") }, anchor: P.a.absoluteFillObject, mask: F(F({}, P.a.absoluteFillObject), {}, { position: "fixed" }), bodyRectHelper: F(F({}, P.a.absoluteFillObject), {}, { bottom: void 0 }), content: { borderRadius: e.borderRadii.large, position: "absolute", overflow: "hidden", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.medium }, contentInitialRender: { position: "fixed", opacity: 0 }, contentFixed: { position: "fixed", overflowY: "auto", overscrollBehavior: "contain" } } })), E = function (e) { Object(a.a)(n, e); var t = C(n); function n(e, o) { var i; return Object(r.a)(this, n), i = t.call(this, e, o), Object(s.a)(Object(c.a)(i), "_handleAnimateComplete", (function () { var e = i.props.onAnimateComplete; e && e() })), Object(s.a)(Object(c.a)(i), "_handleEsc", (function (e) { var t = i.props.onDismiss, n = e.altKey, o = e.ctrlKey, r = e.key, c = e.metaKey; !(n || o || c) && "Escape" === r && t() })), Object(s.a)(Object(c.a)(i), "_receiveBodyRectHelperRef", (function (e) { e && i._bodyRectHelperNode !== e && (i._bodyRectHelperNode = e, i._scheduleUpdate()) })), Object(s.a)(Object(c.a)(i), "_receiveAnchorRef", (function (e) { e && i._anchorNode !== e && (i._anchorNode = e, i._scheduleUpdate()) })), Object(s.a)(Object(c.a)(i), "_receiveContentRef", (function (e) { e && i._contentNode !== e && (i._contentNode = e, i._scheduleUpdate()) })), Object(s.a)(Object(c.a)(i), "_updatePosition", (function () { if (i._mounted && (i._anchorNode || i.props.position) && i._contentNode && i._contentNode instanceof window.HTMLElement && i._bodyRectHelperNode && i._bodyRectHelperNode instanceof window.HTMLElement) { var e = "rtl" === i._languageDirection, t = i._contentNode.scrollHeight, n = i._contentNode.scrollWidth, o = i._bodyRectHelperNode.getBoundingClientRect(), r = o.left, c = o.top, a = o.width, l = h.a.get("window"), u = l.height, s = l.width, d = { left: 0, top: 0, height: 0, width: 0 }; i.props.position ? d = F(F({}, d), i.props.position) : i._anchorNode && i._anchorNode instanceof window.HTMLElement && (d = i._anchorNode.getBoundingClientRect()); var p = d, f = p.height, b = p.left, O = p.top, j = p.width, v = s - a, m = b - r, y = O - c, w = b + j >= n, _ = O + f >= t, g = s - b >= n, x = u - O >= t, R = i.props.preferredVerticalOrientation, N = function (e, t) { return e ? "left" === t ? "right" : "left" : t }(e, i.props.preferredHorizontalOrientation), D = i.state.verticalOrientation || function (e) { var t = e.canOrientDown, n = e.canOrientUp, o = e.verticalPreference; return n && t || !n && !t ? o : n ? "up" : "down" }({ verticalPreference: R, canOrientUp: _, canOrientDown: x }), H = i.state.horizontalOrientation || function (e) { var t = e.canOrientLeft, n = e.canOrientRight, o = e.horizontalPreference; return !t || "left" !== o && n ? "right" : "left" }({ horizontalPreference: N, canOrientLeft: w, canOrientRight: g }), P = i.props.isFixed ? b : m, C = i.props.isFixed ? O : y, k = "up" === D ? C + f - t : C, U = "left" === H ? s - P - j - v : s - P - n - v; i.setState({ top: Math.max(k, 0), right: U, verticalOrientation: D, horizontalOrientation: H }) } })), i.state = Object.freeze({}), i._scheduleUpdate = Object(m.a)(i._updatePosition, window.requestAnimationFrame), i._scheduleDebouncedUpdate = Object(j.a)(i._scheduleUpdate, 250), i } return Object(i.a)(n, [{ key: "componentDidMount", value: function () { this._mounted = !0, h.a.addEventListener("change", this._scheduleDebouncedUpdate) } }, { key: "componentWillUnmount", value: function () { this._mounted = !1, h.a.removeEventListener("change", this._scheduleDebouncedUpdate) } }, { key: "render", value: function () { var e = this, t = this.props, n = t.animateInDuration, r = t.animateType, i = t.children, c = t.isFixed, a = t.onDismiss, l = t.preventFocusShift, u = t.withKeyboardNavigation, s = this.state, d = s.right, f = s.top, h = s.verticalOrientation, b = void 0 === f, j = u ? y.a : p.a.Fragment, m = "calc(100vh - ".concat(f || 0, "px)"), C = function (t) { var l = "rtl" === t, u = [U.content, b && U.contentInitialRender, c && [U.contentFixed, { maxHeight: m }], { top: f, end: l ? void 0 : d, start: l ? d : void 0 }]; return Object(o.jsxs)(p.a.Fragment, { children: [Object(o.jsx)(O.a, { onClick: a, style: U.mask }), Object(o.jsx)(O.a, { ref: e._receiveBodyRectHelperRef, style: U.bodyRectHelper }), Object(o.jsx)(H.a, { children: function (t) { var c = t.windowWidth; return Object(o.jsx)(O.a, { accessibilityRole: "menu", onKeyUp: e._handleEsc, ref: e._receiveContentRef, style: [c < P.a.theme.breakpoints.medium ? U.rootNarrow : U.rootWide, u], children: b && "slide" === r ? i : Object(o.jsx)(v.a, { animateMount: "up" !== h, duration: n, onAnimateComplete: e._handleAnimateComplete, show: !0, type: r, children: function (e) { var t = e.isAnimating; return Object(o.jsx)(x.a, { id: "Dropdown", minimizeReporting: t, children: function (e, t) { return Object(o.jsx)(O.a, F(F({ ref: e() }, t({})), {}, { children: i })) } }) } }) }) } })] }) }; return Object(o.jsx)(N.a, { children: function (t) { var n = t.direction; return e._languageDirection = n, Object(o.jsx)(O.a, { ref: e._receiveAnchorRef, style: U.anchor, children: Object(o.jsx)(R.a.Dropdown, { children: Object(o.jsx)(g.a.Consumer, { children: function (e) { return Object(o.jsx)(D.b.Consumer, { children: function (t) { var r = t.isModal; return Object(o.jsx)(_.a, { history: e, isModal: r, onDismiss: a, children: l ? C(n) : Object(o.jsx)(w.a, { children: Object(o.jsx)(j, { children: C(n) }) }) }) } }) } }) }) }) } }) } }]), n }(p.a.Component); Object(s.a)(E, "defaultProps", { preferredHorizontalOrientation: "left", preferredVerticalOrientation: "down", animateType: "slide", animateInDuration: "normal", withKeyboardNavigation: !0 }) }, jHwr: function (e, t, n) { "use strict"; t.a = function (e, t) { var n = null, o = function () { n = null, e() }; return function () { return n || (n = t(o)), n } } } }]);