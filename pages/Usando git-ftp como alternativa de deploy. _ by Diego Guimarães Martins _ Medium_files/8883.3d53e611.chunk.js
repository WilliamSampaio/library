(self.webpackChunklite = self.webpackChunklite || []).push([[8883], { 33380: (e, t, r) => { "use strict"; r.d(t, { u6: () => i, TA: () => o }), r(63038); var n = r(67294), a = { updateWatchedBounds: function () { }, watchedBounds: new Map }, i = n.createContext(a), o = function (e) { var t = e.children, r = e.className, a = e.name, o = e.type, c = e.offset, l = n.useContext(i).updateWatchedBounds, u = n.useRef(null); return n.useEffect((function () { l && l(a, u, { type: o, offset: c }) }), []), n.createElement("div", { className: r, ref: u }, t) } }, 75845: (e, t, r) => { "use strict"; r.d(t, { sI: () => b, Yj: () => y, j$: () => S, F5: () => T, Xv: () => k }); var n = r(23450), a = r.n(n), i = r(67294), o = r(83263), c = r(17193), l = r(77355), u = r(93310), s = r(47230), d = r(87691), p = r(52069), h = r(18627), g = r(66411), f = r(14646), m = r(18122), x = r(43487), E = r(92305), v = r(50458), w = { xs: 277, sm: 277, md: 196, lg: 196 }, b = { xs: 140, sm: 195, md: 90, lg: 194 }, y = { xs: 105, sm: 105, md: 194, lg: 194 }, S = { sm: 380 }, T = function (e, t) { return function (r) { return { display: "flex", backgroundColor: r.colorTokens.background.neutral.tertiary.base, justifyContent: "space-between", flexDirection: e ? "column" : "row", overflow: "hidden", border: "1px solid", borderColor: r.colorTokens.border.neutral.primary.base, borderRadius: "4px", maxHeight: "".concat(w[t], "px"), maxWidth: "100%", width: e ? "100%" : void 0, cursor: "pointer" } } }, k = function (e) { var t = e.catalog, r = (0, f.I)(), n = (0, x.v9)((function (e) { return e.config.authDomain })), k = (0, h.A)(), R = (0, g.pK)(), O = (0, m.g)({ onPresentedFn: function () { k.event("list.presented", { listId: t.id, source: R }) } }), I = (0, o.Q)(S), W = "sm" === I || "xs" === I, C = y[I], P = b[I], L = i.useCallback((function (e) { e.stopPropagation() }), []), _ = i.useCallback((function () { window.top ? window.top.location.href = (0, v.yk)(t, n) : window.location.href = (0, v.yk)(t, n) }), [t, n]), N = i.useCallback((function (e) { "Enter" === e.key && _() }), [_]); i.useEffect((function () { window.parent.postMessage(JSON.stringify({ src: window.location.toString(), context: "iframe.resize", height: w[I] }), "*") }), [I]); var M = i.useMemo((function () { return [t.postItemsCount > 0 ? "".concat(t.postItemsCount, " ").concat(a()("story", t.postItemsCount)) : null].filter((function (e) { return e })).join(", ") }), [t.postItemsCount]); return i.createElement("div", { role: "button", tabIndex: 0, onKeyDown: N, onClick: _, className: r(T(W, I)) }, i.createElement(l.x, { ref: O, padding: "24px" }, i.createElement(l.x, { display: "flex", alignItems: "center" }, i.createElement(c.Yt, { user: t.creator, scale: "XXXS", target: "_top" }), i.createElement(l.x, { padding: "0 8px", flexShrink: "0" }, i.createElement(d.F, { color: "LIGHTER", scale: "S", clamp: 1 }, i.createElement(u.r, { target: "_top", onClick: L, href: (0, v.AW)(t.creator, n) }, t.creator.name)))), i.createElement(l.x, { marginTop: W ? "16px" : "24px", marginBottom: W ? "16px" : "24px", height: W ? "20px" : "48px" }, i.createElement(p.Dx, { scale: W ? "XS" : "S", clamp: W ? 1 : 2 }, t.predefined ? (0, E.S6)(t.predefined) : t.name)), i.createElement(l.x, { display: "flex", alignItems: "center" }, i.createElement(l.x, { flexShrink: "0" }, i.createElement(s.zx, { target: "_top", size: "SMALL", buttonStyle: "SUBTLE", href: (0, v.yk)(t, n) }, "View list")), M && i.createElement(l.x, { paddingLeft: "16px", flexShrink: "0" }, i.createElement(d.F, { color: "LIGHTER", scale: "S", tag: "span" }, M)))), i.createElement(o.f, { coverHeight: C, coverWidth: P, catalogItems: t.listItemsConnection.items, isEmbeded: !0, breakpoints: S })) } }, 38883: (e, t, r) => { "use strict"; r.d(t, { ZQ: () => _e, lD: () => Ne, l: () => Be }); var n = r(59713), a = r.n(n), i = r(63038), o = r.n(i), c = r(67154), l = r.n(c), u = r(67294), s = r(33380), d = r(34575), p = r.n(d), h = r(93913), g = r.n(h), f = r(2205), m = r.n(f), x = r(78585), E = r.n(x), v = r(29754), w = r.n(v), b = r(6809), y = r(60748), S = r(77355), T = u.forwardRef((function (e, t) { var r = e.height, n = void 0 === r ? 1 : r, a = e.width, i = void 0 === a ? 1 : a, o = e.backgroundColor, c = void 0 === o ? "BASE_NORMAL" : o, l = e.children, s = (i = i || 1) / (n = n || 1); return u.createElement(S.x, { position: "relative", margin: "auto", backgroundColor: c, ref: t, overflow: "hidden" }, u.createElement(S.x, { paddingBottom: "".concat(100 / s, "%"), height: "0" }, l)) })), k = r(319), R = r.n(k), O = r(92780), I = r(29746), W = r(14646), C = r(97489), P = function (e) { return function (t) { return a()({ marginTop: "10px", textAlign: e, maxWidth: "".concat((0, I.G)(t, 8, !0), "px"), marginLeft: "left" === e ? "0" : "auto", marginRight: "auto" }, C.lg(t), { marginLeft: "auto", textAlign: "center" }) } }, L = function (e) { return function () { var t = e && 100 * e; return { width: "".concat(t, "%"), position: "relative", left: "calc(".concat(100 - t / 2, "% - 8px)"), transform: "translateX(-50%)" } } }, _ = u.forwardRef((function (e, t) { var r = e.children, n = e.richTextStyle, a = e.textAlign, i = void 0 === a ? "center" : a, o = e.extendLeftRatio, c = (0, W.I)(), l = (0, O.n)({ name: "detail", scale: "CARD" === n ? "S" : "M", color: "LIGHTER" }); return u.createElement("figcaption", { className: c([P(i), l].concat(R()(o ? [L(o)] : []))), ref: t }, r) })); function N(e) { var t = e.children, r = e.figCaption, n = e.className, a = e.figureRef; return u.createElement("figure", { className: n, ref: a }, t, r) } var M = r(34135), B = r(96451), q = function (e) { var t = e.rootMargin, r = e.children, n = e.target, a = u.useState(!1), i = o()(a, 2), c = i[0], l = i[1], s = u.useCallback((function (e) { !c && e.isIntersecting && l(!0) }), [c]); return (0, B.S)({ onIntersect: s, target: n, disconnect: function () { return c }, rootMargin: t }, [c]), "function" == typeof r ? u.createElement(u.Fragment, null, r(c)) : c ? u.createElement(u.Fragment, null, r) : null }, H = function () { return { width: "1px", minWidth: "100%", "*width": "100%" } }; function j(e) { var t, r = e.src, n = e.title, a = e.height, i = e.width, c = e.allowFullScreen, s = e.frameBorder, d = e.rules, p = e.placeholderRef, h = e.iframeRef, g = (0, W.I)(), f = { src: r, allowFullScreen: c, frameBorder: s, height: a, width: i }, m = u.useState(!1), x = o()(m, 2), E = x[0], v = x[1], w = u.useState(!1), b = o()(w, 2), y = b[0], S = b[1]; return y || M.V6.on("load", (function () { return S(!0) })), null != h && null !== (t = h.current) && void 0 !== t && t.parentElement && h.current.parentElement.offsetWidth < h.current.offsetWidth && !E && v(!0), y ? u.createElement(q, { rootMargin: "200px 0px", target: p }, (function (e) { return e ? u.createElement("iframe", l()({}, f, { ref: h, title: n, className: g(E ? [d, H] : d), scrolling: "no" })) : null })) : null } var A = r(92661), D = r(43210), F = r(52499), z = function (e) { var t = e.paragraph, r = e.paragraphStyle, n = e.richTextStyle, i = e.spaceTop, c = e.updateWatchedBounds, l = (0, W.I)(), s = u.useRef(null), d = (t.iframe || {}).mediaResource, p = d || {}, h = p.id, g = p.iframeSrc, f = p.iframeHeight, m = p.iframeWidth, x = p.title, E = (0, A.H2)(), v = g; v || (v = h ? E("FetchMediaResourceEmbed", { mediaResourceId: h }) : ""); var w = function (e) { var t = e.src, r = e.initialHeight, n = e.initialWidth, a = u.useRef(null), i = u.useState(r), c = o()(i, 2), l = c[0], s = c[1], d = u.useState(n), p = o()(d, 2), h = p[0], g = p[1]; return u.useEffect((function () { if ("" !== t) { var e = (0, y.x)((function (e, r) { a.current && "MEASURE" === e.type && e.details.height > 0 && (g(a.current.offsetWidth), a.current.contentWindow === r && s(e.details.height)), "iframe.resize" === e.context && e.src === t && e.height > 0 && (a.current && g(a.current.offsetWidth), s(e.height)) })).destructor; return function () { e() } } }), [t, r]), [l, h, a] }({ src: v, initialHeight: f || 0, initialWidth: m || 0 }), S = o()(w, 3), k = S[0], R = S[1], O = S[2], I = u.useRef(null); if (u.useEffect((function () { if (c && d && d.id && R && k) { var e = ""; s.current && (e = s.current.offsetTop.toString()), c("".concat(d.id, "-").concat(e), s, { type: "image" }) } }), []), !v) return null; var P = t.text ? u.createElement(_, { richTextStyle: n }, u.createElement(b.T, { paragraph: t, paragraphStyle: r, richTextStyle: n })) : null, L = [(0, F.qB)(i)]; return L.push((function () { return { clear: "both" } })), "OUTSET_LEFT" === (t.layout || void 0) && "STREAM" !== n && "INLINE" !== n && L.push((function (e) { var t; return t = { background: e.backgroundColor, borderWidth: e.borderWidthThick + "px", borderStyle: e.borderStyle, borderColor: e.backgroundColor, float: "left", marginLeft: "-150px", marginRight: "30px", width: "75%", padding: "0", paddingBottom: "10px" }, a()(t, C.md(e), { float: "none", marginLeft: "0", marginRight: "0", width: "100%" }), a()(t, "marginBottom", "16px"), t })), u.createElement(N, { className: l(L), figCaption: P, figureRef: s }, u.createElement(T, { height: k, width: R, backgroundColor: "NONE", ref: I }, u.createElement(j, { placeholderRef: I, iframeRef: O, src: v, title: x || "", height: k, width: R, allowFullScreen: !0, frameBorder: "0", rules: D.m }))) }, U = u.memo(z), G = r(59854), X = r.n(G), V = r(10374), Y = r(12519), Q = r(18155), J = r(46696), K = function (e) { var t = o()(e, 1)[0]; return "number" == typeof t ? "".concat(t, "px") : t }, Z = function (e) { var t = o()(e, 1)[0]; return "".concat(t[0], "% ").concat(t[1], "%") }, $ = function (e) { return o()(e, 1)[0] }; function ee(e) { var t = e.backgroundImage, r = e.boxShadowRules, n = e.miroId, a = e.height, i = e.width, o = e.minHeight, c = e.minWidth, l = e.imgHeight, s = e.imgWidth, d = e.focusPercent, p = e.strategy, h = void 0 === p ? J._S.Resample : p, g = e.freezeGifs, f = (0, W.I)(), m = t; if (!m) { var x = (0, J.W6)({ miroId: n, height: l, width: s, strategy: h, freezeGifs: g }); m = "url(".concat(x, ")") } var E = (0, Q.mu)(K, a), v = (0, Q.mu)(K, i), w = o && (0, Q.mu)(K, o), b = c && (0, Q.mu)(K, c), y = (0, Q.mu)(Z, d), S = { backgroundImage: (0, Q.mu)($, m), display: "block", backgroundOrigin: "border-box", backgroundSize: "cover", height: E, width: v, minHeight: w, minWidth: b, backgroundPosition: y, maxWidth: "100%" }; return u.createElement("div", { className: f([S, r]) }) } ee.defaultProps = { focusPercent: [50, 50] }; var te = r(16793), re = function (e) { return { backgroundColor: e.colorTokens.background.accent.quaternary.base } }, ne = function (e, t) { var r = (0, J.W6)({ freezeGifs: !1, miroId: e, strategy: J._S.Resample, width: t.breakpoints.sm }), n = (0, J.W6)({ freezeGifs: !1, miroId: e, strategy: J._S.Resample, width: t.breakpoints.md }), a = (0, J.W6)({ freezeGifs: !1, miroId: e, strategy: J._S.Resample, width: t.breakpoints.lg }), i = (0, J.W6)({ freezeGifs: !1, miroId: e, strategy: J._S.Resample, width: t.breakpoints.xl }); return { xl: "url('".concat(i, "')"), lg: "url('".concat(i, "')"), md: "url('".concat(a, "')"), sm: "url('".concat(n, "')"), xs: "url('".concat(r, "')") } }; function ae(e) { var t = e.metadata, r = (0, W.I)(); return u.createElement(te.Z, null, (function (e) { return u.createElement("div", { className: r(re) }, u.createElement(ee, { backgroundImage: ne(t.id, e), miroId: t.id, height: "60vh", width: "100%", minHeight: { xl: 500, lg: 400, md: 400, sm: 300, xs: 300 }, imgHeight: 500, imgWidth: 2e3, focusPercent: null === t.focusPercentX || void 0 === t.focusPercentX || null === t.focusPercentY || void 0 === t.focusPercentY ? void 0 : [t.focusPercentX, t.focusPercentY] })) })) } var ie = r(54188), oe = r(94124), ce = r(30555), le = r(12532), ue = function (e) { var t = e.highlights, r = e.isSequenceCover, n = void 0 !== r && r, i = e.marginTopOverride, c = e.paragraph, s = e.paragraphStyle, d = e.privateNotes, p = e.richTextStyle, h = e.sequenceAspectRatio, g = e.spaceTop, f = e.updateWatchedBounds, m = e.loading, x = void 0 === m ? oe.K.LAZY : m, E = e.marginBottomOverride, v = (0, W.I)(), w = u.useRef(null), y = (0, V.CF)(c, s); return u.useEffect((function () { if (f) { var e = c.name, t = c.metadata && c.metadata.id; if (e && t) { var r = ""; w.current && (r = w.current.offsetTop.toString()), f("".concat(e, "-").concat(t, "-").concat(r), w, { type: "image" }) } } }), []), u.useMemo((function () { var e = c.metadata, r = c.layout; if (!e) return null; var f, m = e.id, T = e.originalHeight, k = e.originalWidth, R = e.alt, O = (0, J.JI)(m), I = "CARD" === p || "INLINE" === p, W = (0, le.jg)({ layout: r, originalWidth: k || 0, originalHeight: T || 0, sequenceAspectRatio: h, richTextStyle: p }), P = W.width, L = W.height, M = W.strategy; if ("OUTSET_ROW_CONTINUE" === r && k && T && h) { var B = k / T; f = X()(h / B, 2) } var q, H = c.text ? u.createElement(_, { ref: y, richTextStyle: p, textAlign: n ? "left" : "center", extendLeftRatio: f }, d && u.createElement(Y.A, { paragraph: c, privateNotes: d }), u.createElement(b.T, { highlights: t, paragraph: c, paragraphStyle: s, richTextStyle: p })) : null; if (n) q = u.createElement(ae, { metadata: { id: m, focusPercentX: e.focusPercentX, focusPercentY: e.focusPercentY } }); else { var j = { alt: R || "", miroId: m, height: L, width: P, rules: [{ width: "100%", maxWidth: "100%", height: "auto" }], maxWidth: L ? void 0 : "100%", strategy: M, freezeGifs: "STREAM" === p || "RESAMPLE" !== M, focusPercentX: e.focusPercentX, focusPercentY: e.focusPercentY, expectedWidth: P, loading: x, webp: !0 }; if ("FULL_WIDTH" === r) q = u.createElement(ie.G, l()({}, j, { height: e.originalHeight || j.height, width: e.originalWidth || j.width })); else if ("OUTSET_LEFT" === r || "INSET_LEFT" === r || "INSET_CENTER" === r && k || "OUTSET_CENTER" === r && k) { var A = k && (O ? k / 2 : k); q = u.createElement(ce.X1, { isLinked: !!c.href, width: j.width, height: j.height, originalHeight: e.originalHeight, originalWidth: e.originalWidth, paragraphRef: w }, u.createElement("div", { className: v((function (e) { return { marginLeft: "auto", marginRight: "auto", maxWidth: "OUTSET_CENTER" === r && A && A < e.maxWidths.outset ? "".concat(e.maxWidths.outset, "px") : "".concat(A, "px") } })) }, u.createElement(ie.G, l()({}, j, { height: j.height || e.originalHeight || void 0, width: j.width || e.originalWidth || void 0 })))) } else q = k && "INSET_CENTER" !== r ? u.createElement(ce.X1, { isLinked: !!c.href, width: j.width, height: j.height, originalHeight: e.originalHeight, originalWidth: e.originalWidth, paragraphRef: w }, u.createElement(ie.G, l()({}, j, { height: e.originalHeight || j.height, width: e.originalWidth || j.width }))) : u.createElement(S.x, { display: "flex", justifyContent: "center", alignItems: "flex-start", sm: { display: "block" } }, u.createElement(ce.X1, { isLinked: !!c.href, width: j.width, height: j.height, originalHeight: e.originalHeight, originalWidth: e.originalWidth, paragraphRef: w }, u.createElement(ie.G, l()({}, j, { width: void 0, maxWidth: "100%", strategy: J._S.Proxy })))); c.href && (q = u.createElement("a", { href: c.href }, q)) } var D = [void 0 === i ? (0, F.qB)(g) : (0, F.qB)(i)]; if (E && D.push((function () { return { marginBottom: (0, Q.mu)((function (e) { var t = o()(e, 1)[0]; return "".concat(t, "px") }), E) } })), D.push({ clear: "both" }), n) D.push((function (e) { return a()({}, C.lg(e), { paddingLeft: "0px", paddingRight: "0px" }) })); else if (("OUTSET_ROW" === r || "OUTSET_ROW_CONTINUE" === r) && k && T && h) { var z = k / T, U = X()(z / h * 100, 2); D.push({ width: "".concat(U, "%"), marginRight: "10px", paddingTop: "5px", paddingBottom: "5px", ":last-of-type": { marginRight: 0 } }) } else "OUTSET_LEFT" === r && I ? D.push({ marginLeft: "auto", marginRight: "auto" }) : "OUTSET_LEFT" !== r || I ? "INSET_LEFT" === r ? D.push({ float: "left", width: "50%", paddingBottom: "10px", paddingRight: "30px", marginBottom: "16px" }) : "FULL_WIDTH" === r ? D.push({ width: "100%" }) : "INSET_CENTER" === r ? D.push({ marginLeft: "auto", marginRight: "auto" }) : "OUTSET_CENTER" === r && D.push({ paddingTop: "5px", paddingBottom: "5px" }) : D.push((function (e) { var t; return t = { background: e.backgroundColor, borderWidth: e.borderWidthThick + "px", borderStyle: e.borderStyle, borderColor: e.backgroundColor, float: "left", marginLeft: "-150px", marginRight: "30px", width: "75%", padding: "0", paddingBottom: "10px" }, a()(t, C.lg(e), { float: "none", marginLeft: "0", marginRight: "0", width: "100%" }), a()(t, "marginBottom", "16px"), t })); return u.createElement(N, { className: "".concat(v(D), " paragraph-image"), figCaption: H, figureRef: w }, q) }), [JSON.stringify(c), JSON.stringify(d), JSON.stringify(t)]) }, se = u.memo(ue), de = r(64718), pe = r(78882), he = r(75845), ge = r(83263), fe = function () { var e = (0, W.I)(), t = (0, ge.Q)(he.j$), r = "sm" === t || "xs" === t, n = he.Yj[t], a = he.sI[t]; return u.createElement("div", { className: e((0, he.F5)(r, t)) }, u.createElement(S.x, { padding: "24px" }, u.createElement(S.x, { display: "flex", alignItems: "center" }, u.createElement(S.x, { height: "20px", width: "20px", borderRadius: "50%", backgroundColor: "BASE_NORMAL" }), u.createElement(S.x, { padding: "0 8px", flexShrink: "0" }, u.createElement(S.x, { height: "4px", width: "50px", backgroundColor: "BASE_NORMAL" }))), u.createElement(S.x, { marginTop: r ? "16px" : "24px", marginBottom: r ? "16px" : "24px", height: r ? "20px" : "48px" }, u.createElement(S.x, { height: "20px", width: "120px", backgroundColor: "BASE_NORMAL" })), u.createElement(S.x, { display: "flex", alignItems: "center" }, u.createElement(S.x, { flexShrink: "0" }, u.createElement(S.x, { height: "40px", width: "100px", borderRadius: "20px", backgroundColor: "BASE_NORMAL" })))), u.createElement(ge.f, { coverHeight: n, coverWidth: a, catalogItems: [], isEmbeded: !0, breakpoints: he.j$ })) }, me = function (e) { var t = e.catalog; return e.loading ? u.createElement(fe, null) : t ? u.createElement(he.Xv, { catalog: t }) : null }, xe = r(27323), Ee = r(52069), ve = r(90586), we = r(87691), be = function (e) { return { boxShadow: "inset 0 0 0 1px ".concat(e.colorTokens.border.neutral.primary.base) } }, ye = function (e) { var t = e.paragraph, r = e.processedStructuredMarkup, n = t.mixtapeMetadata; if (!n || !n.href) return null; var a = n.href, i = r.title, o = r.description, c = r.domain; return u.createElement(xe.P, { href: a || "", target: "_blank" }, u.createElement(S.x, { display: "flex", flexShrink: "0", padding: "0px" }, u.createElement(S.x, { padding: "16px 20px", flexShrink: "1", flexGrow: "1", display: "flex", justifyContent: "center", flexDirection: "column", sm: { padding: "10px 12px 10px" } }, u.createElement(Ee.Dx, { scale: "XS", clamp: 2 }, i), o && u.createElement(S.x, { marginTop: "8px" }, u.createElement(ve.QE, { scale: "S", clamp: 2 }, o)), c && u.createElement(S.x, { marginTop: "12px" }, u.createElement(we.F, { scale: "S", clamp: 2 }, c))), n && n.thumbnailImageId && u.createElement(S.x, { width: "160px" }, u.createElement(ee, { boxShadowRules: be, miroId: n.thumbnailImageId, width: 160, height: 167, strategy: J._S.Resample, focusPercent: [50, 50], imgHeight: 167, imgWidth: 160 })))) }, Se = function (e) { return { boxShadow: "inset 0 0 0 1px ".concat(e.colorTokens.border.neutral.primary.base) } }, Te = function (e) { var t, r, n, a, i, o = e.paragraph, c = e.spaceTop, l = e.structuredMarkup, s = (0, W.I)(), d = !(null === (t = o.mixtapeMetadata) || void 0 === t || null === (r = t.mediaResource) || void 0 === r || !r.mediumCatalog), p = (0, de.a)(pe.d, { variables: { catalogId: null === (n = o.mixtapeMetadata) || void 0 === n || null === (a = n.mediaResource) || void 0 === a || null === (i = a.mediumCatalog) || void 0 === i ? void 0 : i.id }, skip: !d }), h = p.loading, g = p.data, f = p.error, m = o.mixtapeMetadata, x = o.type; if (!m || !m.href || !x) return null; var E, v = l || function (e) { var t = e.text, r = e.markups; if (!t) return null; var n = r.find((function (e) { return "STRONG" === e.type })); if (!n) return null; var a = r.find((function (e) { return "EM" === e.type })), i = n.end, o = a ? a.end : n.end; return { title: t.slice(n.start, i).trim(), description: a ? t.slice(a.start, a.end).trim() : null, domain: t.slice(o).trim() || null } }(o), w = [(0, F.qB)(c)], b = !!f || g && "Catalog" !== g.catalogById.__typename; if (d && !b) E = u.createElement(me, { catalog: null == g ? void 0 : g.catalogById, loading: h }); else { if (!v) return null; w.push(Se), E = u.createElement(ye, { paragraph: o, processedStructuredMarkup: v }) } return u.createElement("div", { className: s(w) }, E) }, ke = r(37269), Re = r(32342), Oe = r(39202); var Ie = function (e) { m()(a, e); var t, r, n = (t = a, r = function () { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function () { }))), !0 } catch (e) { return !1 } }(), function () { var e, n = w()(t); if (r) { var a = w()(this).constructor; e = Reflect.construct(n, arguments, a) } else e = n.apply(this, arguments); return E()(this, e) }); function a() { return p()(this, a), n.apply(this, arguments) } return g()(a, [{ key: "render", value: function () { var e, t = this.props, r = t.highlights, n = t.inserts, a = t.marginTopOverride, i = t.paragraph, o = t.paragraphStyle, c = t.privateNotes, l = t.richTextStyle, d = t.sequenceAspectRatio, p = t.spaceTop, h = t.loading, g = t.marginBottomOverride; switch (o) { case Re.qq.IMG: e = u.createElement(s.u6.Consumer, null, (function (e) { var t = e.updateWatchedBounds; return u.createElement(se, { highlights: r, marginTopOverride: a, paragraph: i, paragraphStyle: o, privateNotes: c, richTextStyle: l, sequenceAspectRatio: d, spaceTop: p, updateWatchedBounds: t, loading: h, marginBottomOverride: g }) })); break; case Re.qq.P: case Re.qq.BQ: case Re.qq.PQ: case Re.qq.H1: case Re.qq.H2: case Re.qq.H3: case Re.qq.H4: case Re.qq.ULI: case Re.qq.OLI: case Re.qq.PRE: case Re.qq.Kicker: case Re.qq.Subtitle: case Re.qq.Title: e = u.createElement(ke.D, { highlights: r, marginTopOverride: a, paragraph: i, paragraphStyle: o, privateNotes: c, richTextStyle: l, spaceTop: p, marginBottomOverride: g }); break; case Re.qq.IFRAME: e = u.createElement(s.u6.Consumer, null, (function (e) { var t = e.updateWatchedBounds; return u.createElement(U, { paragraph: i, paragraphStyle: o, richTextStyle: l, spaceTop: p, updateWatchedBounds: t }) })); break; case Re.qq.MIXTAPE_EMBED: e = u.createElement(Te, { paragraph: i, spaceTop: p }); break; case Re.qq.COVER_TITLE: case Re.qq.SECTION_CAPTION: case Re.qq.HR: e = null; break; default: (0, Oe.v)(o), e = null }return n && n.length ? u.createElement(u.Fragment, null, n.map((function (e) { return "before" === e.order && e.component })), e, n.map((function (e) { return "after" === e.order && e.component }))) : e } }]), a }(u.Component), We = r(21638); function Ce(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); t && (n = n.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n) } return r } function Pe(e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {}; t % 2 ? Ce(Object(r), !0).forEach((function (t) { a()(e, t, r[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ce(Object(r)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) })) } return e } var Le = function (e) { var t = e.styleGroup, r = e.postBodyInserts, n = e.loading, a = (0, W.I)(), i = qe(t), o = t.paragraphViewModels.map((function (e) { var t = e.paragraph.name, a = r && r[null != t ? t : ""], i = u.createElement(Ie, l()({ key: e.paragraph.name, inserts: a, loading: n }, e)); return "Title" === e.paragraphStyle || "Subtitle" === e.paragraphStyle ? u.createElement(s.TA, { name: "title", type: "byline", offset: { left: -600 }, key: "".concat(e.paragraph.name, "-wb") }, i) : i })); return i ? u.createElement(i, { className: a([Be({ paragraphStyle: t.paragraphStyle, topSpacing: t.topSpacing, paragraphLayout: t.paragraphLayout, richTextStyle: t.paragraphViewModels[0].richTextStyle, paragraph: t.paragraphViewModels[0].paragraph })]) }, o) : u.createElement(u.Fragment, null, o) }, _e = u.memo(Le), Ne = function (e) { var t = []; return e.forEach((function (e) { var r = e.paragraphStyle, n = e.paragraph.layout, a = t[t.length - 1]; a && Me(a, e) ? a.paragraphViewModels.push(e) : t.push({ paragraphStyle: r, paragraphLayout: n, topSpacing: e.sequenceSpaceTop || 0, paragraphViewModels: [e] }) })), t }, Me = function (e, t) { if (e.paragraphStyle !== t.paragraphStyle) return !1; if ("PRE" === e.paragraphStyle) { var r, n = !(null === (r = e.paragraphViewModels[0].paragraph) || void 0 === r || !r.codeBlockMetadata); return !t.paragraph.codeBlockMetadata && !n } var a = t.paragraph.layout; return "OUTSET_ROW" === e.paragraphLayout ? "OUTSET_ROW_CONTINUE" === a : e.paragraphLayout === a }, Be = function (e) { var t = e.paragraphStyle, r = e.topSpacing, n = e.paragraphLayout, a = e.richTextStyle, i = e.paragraph; return function (e) { var c = {}; switch (r && (c.marginTop = (0, Q.mu)((function (e) { var t = o()(e, 1)[0]; return "".concat(t, "px") }), r)), t) { case "BQ": var l = e.colorTokens.border.neutral.secondary.base || ""; return Pe(Pe({}, c), {}, { boxShadow: "inset ".concat(3, "px 0 0 0 ").concat(l), paddingLeft: "".concat(23, "px"), marginLeft: (0, Re.jH)(a) ? "0px" : "-20px" }); case "PRE": var u = null == i ? void 0 : i.codeBlockMetadata, s = Pe(Pe({}, c), {}, { overflowX: "auto", fontFamily: We.zf }), d = { padding: "32px", borderRadius: "4px", border: "".concat(e.borderWidth, "px solid ").concat(e.colorTokens.border.neutral.tertiary.base), background: e.colorTokens.background.neutral.tertiary.base, color: e.colorTokens.foreground.neutral.primary.base }, p = { padding: "20px", borderRadius: 0, border: "none", background: e.colorTokens.background.neutral.secondary.base, color: e.colorTokens.foreground.neutral.primary.base }; return Pe(Pe({}, s), u ? d : p); case "PQ": return Pe(Pe({}, c), {}, { paddingLeft: "SERIES" === a ? "0px" : "30px" }) }switch (n) { case "OUTSET_ROW": return Pe(Pe({}, c), {}, { display: "flex", flexDirection: "row" }) }return c } }, qe = function (e) { var t = e.paragraphStyle, r = e.paragraphLayout; switch (t) { case "OLI": return "ol"; case "ULI": return "ul"; case "BQ": case "PQ": return "blockquote"; case "PRE": return "pre" }switch (r) { case "OUTSET_ROW": return "div" }return null } }, 60748: (e, t, r) => { "use strict"; function n(e) { e && e.iframe && e.height && e.iframe.getAttribute && "number" == typeof e.height && o({ context: "iframe.resize", height: e.height, src: e.iframe.getAttribute("src") || "" }) } function a(e) { if (e.data && "string" == typeof e.data) { var t; try { t = JSON.parse(e.data) } catch (e) { return } o(t, e.source) } } r.d(t, { x: () => c }); var i = []; function o(e, t) { i.forEach((function (r) { return r(e, t) })) } function c(e) { return window._resizeIframe || (window._resizeIframe = n, window.addEventListener("message", a)), i.push(e), { destructor: function () { 0 === (i = i.filter((function (t) { return e !== t }))).length && "undefined" != typeof window && (window._resizeIframe = null, window.removeEventListener("message", a)) } } } }, 54188: (e, t, r) => { "use strict"; r.d(t, { G: () => m }); var n = r(319), a = r.n(n), i = r(59713), o = r.n(i), c = r(63038), l = r.n(c), u = r(67294), s = r(94124), d = r(30555), p = r(46696), h = r(12532); function g(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); t && (n = n.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n) } return r } function f(e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {}; t % 2 ? g(Object(r), !0).forEach((function (t) { o()(e, t, r[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) })) } return e } var m = function (e) { var t = e.alt, r = e.rules, n = e.miroId, i = e.width, o = e.maxWidth, c = e.expectedWidth, g = e.height, m = e.strategy, x = e.freezeGifs, E = e.focusPercentX, v = e.focusPercentY, w = e.loading, b = e.webp, y = void 0 !== b && b, S = (0, d.BO)(), T = (0, u.useState)(!1), k = l()(T, 2), R = k[0], O = k[1], I = y && !R, W = { miroId: n, width: i, height: g, strategy: m, freezeGifs: x, focusPercentX: E, focusPercentY: v }, C = (0, p.W6)(W), P = c === h.Hj || S ? "100vw" : "".concat(c, "px"), L = (0, u.useMemo)((function () { var e = [320, 360, 375, 393, 414, 550]; c && e.push(c), S && e.push(h.Hj); var t = e.map((function (e) { var t = 2 * e, r = (0, p.W6)(f(f({}, W), {}, { width: t, ignorePixelRatio: !0 })); return "".concat(r, " ").concat(t, "w") })), r = e.map((function (e) { var t = 2 * e, r = (0, p.W6)(f(f({}, W), {}, { ignorePixelRatio: !0, width: t, webp: I })); return "".concat(r, " ").concat(t, "w") })), n = a()(t).join(", "), i = a()(r).join(", "); return { sizes: "(min-resolution: 4dppx) and (max-width: ".concat(h.aM, "px) 50vw,\n                   (-webkit-min-device-pixel-ratio: 4) and (max-width: ").concat(h.aM, "px) 50vw, \n                   (min-resolution: 3dppx) and (max-width: ").concat(h.aM, "px) 67vw,\n                   (-webkit-min-device-pixel-ratio: 3) and (max-width: ").concat(h.aM, "px) 65vw, \n                   (min-resolution: 2.5dppx) and (max-width: ").concat(h.aM, "px) 80vw,\n                   (-webkit-min-device-pixel-ratio: 2.5) and (max-width: ").concat(h.aM, "px) 80vw,\n                   (min-resolution: 2dppx) and (max-width: ").concat(h.aM, "px) 100vw,\n                   (-webkit-min-device-pixel-ratio: 2) and (max-width: ").concat(h.aM, "px) 100vw,\n                   ").concat(P).replace(/\s+/g, " "), srcSet: n, transcodedSrcSet: i } }), [S, c, h.aM, W, 2]), _ = L.sizes, N = L.srcSet, M = L.transcodedSrcSet, B = [], q = {}; return o && (q.maxWidth = o, B = B.concat([q])), r && (B = B.concat(r).concat((function (e) { return { backgroundColor: e.backgroundColor } }))), u.createElement("picture", null, I && u.createElement("source", { srcSet: M, sizes: _, type: "image/webp" }), u.createElement("source", { "data-testid": "og", srcSet: N, sizes: _ }), u.createElement(s.E, { imgRef: function (e) { return function (t) { t && !t.src && (t.src = e) } }(C), alt: t, rules: B, width: c, height: g, loading: w, handleError: function () { return O(!0) } })) } }, 30555: (e, t, r) => { "use strict"; r.d(t, { BO: () => b, X1: () => y }); var n = r(63038), a = r.n(n), i = r(59713), o = r.n(i), c = r(67294), l = r(91583), u = r(18627), s = r(14646), d = r(34135), p = r(37734), h = r(77241), g = r(21021); function f(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); t && (n = n.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n) } return r } function m(e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {}; t % 2 ? f(Object(r), !0).forEach((function (t) { o()(e, t, r[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) })) } return e } var x = o()({}, (0, p.nk)("no-preference"), { transition: "transform 300ms cubic-bezier(0.2, 0, 0.2, 1)" }), E = function (e, t, r, n, a, i) { var o = a * i, c = n * i, l = (e - c) / 2, u = ((t - o) / 2 - (r.left + (a - o) / 2)) / i, s = (l - (r.top + (n - c) / 2)) / i; return m(m({}, x), {}, { zIndex: h.ZP.floating, transform: "scale(".concat(i, ") translate(").concat(u, "px, ").concat(s, "px)"), position: "absolute", cursor: "zoom-out", height: "".concat(n, "px"), width: "".concat(a, "px") }) }, v = function (e, t, r, n, a, i, o) { if (!(a && o && i && e)) return {}; var c = Math.min(Math.min(t, n || 1 / 0) / o, Math.min(e, r || 1 / 0) / i); return c < 1 ? E(e, t, a, a.height, a.width, Math.min(t / a.width, e / a.height)) : E(e, t, a, i, o, c) }, w = (0, c.createContext)(!1), b = function () { return (0, c.useContext)(w) }, y = function (e) { var t = e.children, r = e.height, n = e.width, a = e.originalHeight, i = e.originalWidth, o = e.paragraphRef; return e.isLinked || !a || !i || !r || r === a && n === i ? t : c.createElement(S, { originalHeight: a, originalWidth: i, height: r, width: n, paragraphRef: o }, t) }, S = function (e) { var t = e.children, r = e.originalHeight, n = e.originalWidth, i = e.height, o = e.width, p = e.paragraphRef, f = (0, c.useState)(null), E = a()(f, 2), b = E[0], y = E[1], S = (0, c.useState)(0), T = a()(S, 2), k = T[0], R = T[1], O = (0, c.useState)(0), I = a()(O, 2), W = I[0], C = I[1], P = (0, s.I)(), L = (0, u.A)(), _ = p && p.current && p.current.getBoundingClientRect(), N = (0, c.useRef)(null), M = (0, c.useCallback)((function () { L.event("client.action", { action: "zoom", eventType: "click" }) }), []), B = (0, c.useCallback)((function () { N.current && N.current.focus(), y(!1) }), [null == N ? void 0 : N.current, y]); !function (e, t) { var r = (0, c.useRef)(0), n = (0, c.useRef)(1), a = (0, c.useCallback)((function () { var e = window.visualViewport.scale; e === n.current && Math.abs(r.current - window.scrollY) > 40 && t(), n.current = e }), [t]); (0, c.useEffect)((function () { if (e) return r.current = window.scrollY, n.current = window.visualViewport.scale, d.V6.on("scroll", a), function () { d.V6.off("scroll", a) } }), [a, e]) }(!!b, B); var q = (0, c.useCallback)((function () { R(window.innerHeight), C(window.innerWidth) }), [R, C]); (0, c.useEffect)((function () { return R(window.innerHeight), C(window.innerWidth), d.V6.on("resize", q), function () { d.V6.off("resize", q) } }), [R, C, q]); var H, j = (0, g.r)((function () { b ? B() : (M(), y(!0)) }), [M, y, b, B]); return c.createElement(c.Fragment, null, c.createElement(w.Provider, { value: b }, c.createElement("div", { onClick: j, onKeyDown: j, role: "button", tabIndex: 0, ref: N, className: P(b ? v(k, W, r, n, _, i, o) : (H = b, m(m({}, x), {}, { cursor: "zoom-in", position: "relative", zIndex: null === H ? "auto" : h.ZP.floating, width: "100%", ":focus": { transform: "scale(1.01)" } }))), onTransitionEnd: function () { b || y(null) } }, t), c.createElement(l.V, { shouldTrapFocus: !1, padding: 0, withPageScroll: !0, isVisible: !!b, hide: B, withCloseButton: !1 }, c.createElement(c.Fragment, null)))) } }, 21021: (e, t, r) => { "use strict"; r.d(t, { r: () => a }); var n = r(67294), a = function (e, t) { return n.useCallback((function (t) { "key" in t && "Enter" !== t.key && " " !== t.key || ("key" in t && " " === t.key && t.preventDefault(), e(t)) }), t) } }, 12532: (e, t, r) => { "use strict"; r.d(t, { Hj: () => a, aM: () => o, jg: () => c }); var n = r(46696), a = 2400, i = 1e3, o = 700, c = function (e) { var t = e.layout, r = e.originalWidth, c = e.originalHeight, l = e.sequenceAspectRatio, u = e.richTextStyle, s = n._S.Resample, d = c && r ? c / r : null, p = r; switch (t) { case "CROPPED_HEIGHT_PREVIEW": p = o, d = .3, s = n._S.Crop; break; case "CONSTRAINED_HEIGHT_PREVIEW": p = o, d && 240 / d < p && (p = 240 / d); break; case "INSET_LEFT": case "INSET_CENTER_SMALL": case "INSET_RIGHT": p = 350; break; case "OUTSET_LEFT": p = "CARD" === u ? i : 500; break; case "OUTSET_ROW": case "OUTSET_ROW_CONTINUE": p = i, l && d && (p *= 1 / d / l); break; case "OUTSET_CENTER": p = i; break; case "FULL_WIDTH": case "FULL_WIDTH_CROPPED_COVER": p = a; break; default: p = o }return r && (p = Math.min(p, r)), { width: p = Math.ceil(p), height: d ? Math.ceil(d * p) : void 0, strategy: s } } } }]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/8883.3d53e611.chunk.js.map