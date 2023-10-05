(window.__twttrll = window.__twttrll || []).push([[5], { 160: function (t, e, r) { var i = r(39), n = r(162), a = r(7); (i = Object.create(i)).build = a(i.build, null, n), t.exports = i }, 161: function (t, e, r) { var i = r(71), n = r(37), a = r(34), s = r(38), o = r(0), c = r(7), d = r(33), u = r(5), h = r(165); t.exports = function (t) { t.params({ partner: { fallback: c(d.val, d, "partner") } }), t.define("scribeItems", function () { return {} }), t.define("scribeNamespace", function () { return { client: "tfw" } }), t.define("scribeData", function () { return { widget_origin: s.rootDocumentLocation(), widget_frame: s.isFramed() && s.currentDocumentLocation(), widget_partner: this.params.partner, widget_site_screen_name: h(d.val("site")), widget_site_user_id: u.asNumber(d.val("site:id")), widget_creator_screen_name: h(d.val("creator")), widget_creator_user_id: u.asNumber(d.val("creator:id")) } }), t.define("scribe", function (t, e, r) { var n = this; return a.getHorizonSettings().then(function (a) { var s = { session_id: a.sessionId }; t = o.aug(n.scribeNamespace(), t || {}), e = o.aug(n.scribeData(), e || {}), i.clientEvent(t, e, !1, r, s) }) }), t.define("scribeInteraction", function (t, e, r) { var i = n.extractTermsFromDOM(t.target); return i.action = t.type, "url" === i.element && (i.element = n.clickEventElement(t.target)), this.scribe(i, e, r) }) } }, 162: function (t, e, r) { var i = r(40), n = r(0), a = r(163); function s() { i.apply(this, arguments), this.Widget = this.Component } s.prototype = Object.create(i.prototype), n.aug(s.prototype, { factory: a, build: function () { return i.prototype.build.apply(this, arguments) }, selectors: function (t) { var e = this.Widget.prototype.selectors; t = t || {}, this.Widget.prototype.selectors = n.aug({}, t, e) } }), t.exports = s }, 163: function (t, e, r) { var i = r(6), n = r(35), a = r(41), s = r(0), o = r(7), c = r(164), d = "twitter-widget-"; t.exports = function () { var t = a(); function e(e, r) { t.apply(this, arguments), this.id = d + c(), this.sandbox = r } return e.prototype = Object.create(t.prototype), s.aug(e.prototype, { selectors: {}, hydrate: function () { return i.resolve() }, prepForInsertion: function () { }, render: function () { return i.resolve() }, show: function () { return i.resolve() }, resize: function () { return i.resolve() }, select: function (t, e) { return 1 === arguments.length && (e = t, t = this.el), t ? (e = this.selectors[e] || e, s.toRealArray(t.querySelectorAll(e))) : [] }, selectOne: function () { return this.select.apply(this, arguments)[0] }, selectLast: function () { return this.select.apply(this, arguments).pop() }, on: function (t, e, r) { var i, a = this.el; this.el && (t = (t || "").split(/\s+/), 2 === arguments.length ? r = e : i = e, i = this.selectors[i] || i, r = o(r, this), t.forEach(i ? function (t) { n.delegate(a, t, i, r) } : function (t) { a.addEventListener(t, r, !1) })) } }), e } }, 164: function (t, e) { var r = 0; t.exports = function () { return String(r++) } }, 165: function (t, e) { t.exports = function (t) { return t && "@" === t[0] ? t.substr(1) : t } }, 166: function (t, e, r) { var i = r(5), n = r(0); t.exports = function (t) { t.define("widgetDataAttributes", function () { return {} }), t.define("setDataAttributes", function () { var t = this.sandbox.sandboxEl; n.forIn(this.widgetDataAttributes(), function (e, r) { i.hasValue(r) && t.setAttribute("data-" + e, r) }) }), t.after("render", function () { this.setDataAttributes() }) } }, 167: function (t, e, r) { var i = r(0); t.exports = function (t) { return i.isType("string", t) } }, 172: function (t, e, r) { var i = r(34), n = { features: {}, sessionId: "" }; t.exports = function (t) { t.defineProperty("settingsData", { get: function () { return this._settingsData || n }, set: function (t) { this._settingsData = t } }), t.after("initialize", function () { var t = this; return i.getHorizonSettings().then(function (e) { t.settingsData = e }) }) } }, 173: function (t, e, r) { var i = r(4), n = r(5), a = i.createElement("div"); t.exports = function (t) { return n.isNumber(t) && (t += "px"), a.style.width = "", a.style.width = t, a.style.width || null } }, 174: function (t, e) { var r = /^(dark|light)$/; t.exports = function (t) { return r.test(t) } }, 175: function (t, e, r) { var i = r(4), n = r(160), a = ["https://platform.twitter.com", "https://syndication.twitter.com", "https://cdn.syndication.twitter.com", "https://syndication.twimg.com", "https://cdn.syndication.twimg.com", "https://syndication-o.twitter.com", "https://syndication-o.twimg.com"], s = !1, o = function (t) { return a.some(function (e) { return 0 === t.indexOf(e) }) }; t.exports = n.couple(r(161), function (t) { t.define("scribeSecurityPolicyViolation", function (t) { !s && o(t.blockedURI) && (s = !0, this.scribe({ component: "error", action: "security-policy-error" })) }), t.before("hydrate", function () { i.addEventListener && i.addEventListener("securitypolicyviolation", this.scribeSecurityPolicyViolation.bind(this)) }) }) }, 190: function (t, e, r) { var i = r(6), n = r(42), a = r(160), s = r(17), o = r(191), c = r(5), d = r(0), u = r(16), h = r(34), l = r(192), p = r(193), f = "Twitter Timeline", m = "520px", g = "600px"; t.exports = a.couple(r(161), r(166), function (t) { t.params(o), t.params({ chrome: { transform: l, fallback: "" } }), t.around("scribeNamespace", function (t) { return d.aug(t(), { page: "timeline" }) }), t.around("scribeData", function (t) { var e = this.params.dataSource.id; return d.aug(t(), { context: "horizon", widget_id: c.isNumber(e) ? e : void 0, widget_data_source: e, query: this.el && this.el.getAttribute("data-search-query"), profile_id: this.el && this.el.getAttribute("data-profile-id") }) }), t.define("queryParams", function () { var t = this.scribeData(); return d.aug(this.params.dataSource.queryParams(), { embedId: this.id, sessionId: this.settingsData.sessionId, features: h.encodeFeatures(this.settingsData.features), theme: this.params.theme, partner: this.params.partner, widgetsVersion: n.version, origin: t.widget_origin, frame: t.widget_frame, siteScreenName: t.widget_site_screen_name, siteUserId: t.widget_site_user_id, creatorScreenName: t.widget_creator_screen_name, creatorUserId: t.widget_creator_user_id, showHeader: !this.params.chrome.hideHeader, hideHeader: this.params.chrome.hideHeader, hideFooter: this.params.chrome.hideFooter, hideBorder: this.params.chrome.hideBorder, transparent: this.params.chrome.transparent, hideScrollBar: this.params.chrome.hideScrollBar, maxHeight: this.params.height }) }), t.override("initialize", function () { !this.params.width && this.params.isPreconfigured && (this.params.width = m), this.isStaticTimeline = this.params.staticContent || this.params.tweetLimit > 0, this.isFullyExpanded = this.isStaticTimeline || !this.params.isPreconfigured && !this.params.height, this.isFullyExpanded || this.params.height || (this.params.height = g) }), t.define("styleSandboxWrapper", function (t) { var e = this; return s.write(function () { d.forIn(t, function (t, r) { e._sandboxWrapperEl.style[t] = r }) }) }), t.override("render", function () { var t = this.params.dataSource.endpoint, e = this.queryParams(), r = u.url(t, e); return this.sandbox.setWaitToSwapUntilRendered(!0), i.all([this.sandbox.setTitle(f), this.styleSandboxWrapper({ display: "flex", width: this.params.width, maxWidth: "100%", marginTop: 0, marginBottom: 0 }), this.sandbox.styleSelf({ display: "block", flexGrow: "1" }), this.sandbox.loadDocument(r)]) }), t.after("render", function () { var t = this.sandbox; return t.getResultsPromise().then(function () { t.makeVisible() }).then(function () { return t.getRenderedPromise() }).then(p()) }) }) }, 191: function (t, e, r) { var i = r(173), n = r(7), a = r(70), s = r(167), o = r(174), c = r(33), d = r(5), u = { dataSource: { required: !0 }, id: { validate: s }, lang: { required: !0, transform: a.matchLanguage, fallback: "en" }, isPreconfigured: { required: !0, fallback: !1 }, width: { validate: i, transform: i }, height: { validate: i, transform: i }, theme: { fallback: [n(c.val, c, "widgets:theme")], validate: o }, tweetLimit: { transform: d.asInt }, partner: { fallback: n(c.val, c, "partner") }, staticContent: { required: !1, transform: d.asBoolean }, screenName: { required: !1 }, showReplies: { required: !1 }, userId: { required: !1 } }; t.exports = u }, 192: function (t, e, r) { var i = r(0); t.exports = function (t) { var e = { transparent: !1, hideBorder: !1, hideHeader: !1, hideFooter: !1, hideScrollBar: !1 }; return t = t || "", i.contains(t, "transparent") && (e.transparent = !0), i.contains(t, "noborders") && (e.hideBorder = !0), i.contains(t, "noheader") && (e.hideHeader = !0), i.contains(t, "nofooter") && (e.hideFooter = !0), i.contains(t, "noscrollbar") && (e.hideScrollBar = !0), e } }, 193: function (t, e, r) { var i = r(18).publicLog, n = "%c[Update] There have been recent updates to Embedded Twitter Timelines and supported parameters.%c\n\t•For more information on what has changed visit: https://twittercommunity.com/t/embedded-timelines-update-parameters-support/177112\n\t•Please submit feedback or report any bugs: https://twittercommunity.com/c/publisher/websites/", a = "font-weight:bold", s = "color:#006FD6"; t.exports = function () { i(n, [a, s].join(";"), s) } }, 79: function (t, e, r) { var i = r(160); t.exports = i.build([r(190), r(172), r(175)]) } }]);