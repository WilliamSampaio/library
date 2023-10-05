/*
 (c) Skimlinks 2009-2023
 Build time: Mon, 12 Jun 2023 14:20:28 GMT
 Version: "15.4.2-stackpath"
*/
(function () {
    function Lc(a) { function b(a, b) { if (!(!a.parentNode || na(a, e) || a.meta && a.meta.ReadOnly)) { var c = Mc(a, b)[0]; w(c, function (a) { !f[a] && Nc(a) && (f[a] = !0, q.domain_data.domains.push(a)) }) } } var c = x.get_as_hash_node_dict(), d = Object.keys(c).length; if (d) { var e = sb(Oc.concat(tb())), f = {}, l = La(function (a) { ba(a) }), k = 0; w(c, function (c, e) { window.setTimeout(function () { try { b(c, e) } catch (rb) { l(rb) } finally { k += 1, k === d && a(Object.keys(f)) } }, 0) }) } else a([]) } function Pc(a) {
        var b; var c = b = null; var d = 5; a.Limit && (d = a.Limit);
        var e = function () { return a.Priority || 0 }; return {
            group_id: function () { return b ? b.id() : 0 }, dec_limit: function () { return d - 1 }, limit: function () { return d }, action_type: function () { return a.ActionType }, text: function () { return a.OriginalPhrase }, start_byte: function () { return a.StartByte }, url: function () { return a.Url }, multi: function () { return a.Mt ? !0 : !1 }, group_priority: function () { return b ? b.group_priority() : e() }, id: function () { return c ? c : a.PhraseId }, groups: function () { var b; return (b = a.Groups) ? b : [] }, title: function () {
                return a.Unlinked ?
                    "" : null != a.ActionTitle ? a.ActionTitle : "Shopping link provided by SkimWords"
            }, set_title: function (b) { a.Title = a.Unlinked ? "" : b }, occurrence: function () { return a.PhraseOccurrence }, set_group: function (a) { return b = a }, set_id: function (a) { return c = a }
        }
    } function Qc() { var a = u.linksImpressions; a = { phr: a.skimwords.urls, unl: a.unlinked.urls, slc: a.skimlinks.count, swc: a.skimwords.count, ulc: a.unlinked.count, jsl: (new Date).getTime() - u.loading_started, pref: p.referrer, uc: oa, t: 1, jsf: "", jv: ca }; da && (a.xrf = 1); return ub(a) } function vb(a,
        b) {
            var c = a.style.cssText; "" !== c && (c += " "); var d = g("link_background"); d && (-1 === d.indexOf("#") && (d = "#" + d), c += "background-color: " + d + " !important; "); null !== g("link_tooltip", null) && (a.title = g("link_tooltip")); b && (Ma && (d = Ma, -1 === d.indexOf("#") && (d = "#" + d), c += "color: " + d + " !important; "), Na && (c += "font-weight: " + Na + " !important; "), ea && (c = "double" === ea ? c + "border-bottom: 1px double !important; " : "dashed" === ea ? c + "border-bottom: 1px dashed !important; " : c + ("text-decoration: " + ea + " !important; ")), Oa && (c += "font-style: " +
                Oa + " !important; "), g("skimwords_link_style") && (d = g("skimwords_link_style"), c += d + "; "), g("skimwords_link_class") && (a.className = C(a.className + " " + g("skimwords_link_class"))), Pa && (a.title = Pa), null === a.getAttribute("title") && (a.title = "Shopping link added by SkimWords"), a.getAttribute("data-skim-creative") && (d = parseInt(a.getAttribute("data-skim-creative"), 10) % 10, 1 === d || 2 === d)) && (a.title = ""); a.style.cssText = c; return !0
    } function Qa(a, b) {
        b = b || wb(a); if (!b) return !0; xb(b); var c = g("skimlinks_keywee_pixel", null);
        var d = r(m.location.href, "utm_campaign=fbkw"); c && d && yb(c); g("vglnk") && R(b, "skimwords-link") && (a && a.stopPropagation ? a.stopPropagation() : (c = m.event, c.cancelBubble = !0)); return !0
    } function xb(a, b) {
        a && a.nodeName && "A" !== a.nodeName.toUpperCase() && "AREA" !== a.nodeName.toUpperCase() && (a = zb(a)); if (a) {
            var c = Rc(a); var d = q.waypointDomain; if (c.length >= d.length && c.substr(0, d.length) === d) return !0; if (-1 !== c.indexOf(d)) d = c; else {
                d = a; var e = R(d, "skimwords-link"), f = B(d, "data-skim-creative"), l = B(d, "data-skimlinks-tracking") ||
                    oa, k = Ra ? "&" + Ra : ""; c = z(Sa(), { id: Ab, isjs: 1, jv: ca, sref: m.location, url: c, xs: 1, xtz: Bb(), xuuid: p.uuid }); f && (c.xcreo = f); p.isAdblockUser && (c.abp = 1); p.cookie && (c.xguid = p.cookie); S && (c.site = S); l && (c.xcust = l); e && (c.xs = 2, c.xword = B(d, "data-skimwords-word") || "", N.version && (c.sv = N.version)); e = D(d); e.icust && (c.xjsf = e.icust); e.sourceApp && (c.xs = e.sourceApp); e.clientClickId && (c.cci = e.clientClickId, delete D(d).clientClickId); e.linkSwappingMatchId && (c.ls = e.linkSwappingMatchId); d = q.waypointDomain + "/?" + fa(c) + k
            } Cb(a, d, b)
        } return !0
    }
    function zb(a) { for (; a.parentNode;) { a = a.parentNode; var b = a.nodeName.toUpperCase(); if ("A" === b || "AREA" === b) return a } return null } function Db(a, b, c) { a = T(m, ["skimlinks_settings", a], m[a]); return F(a) ? b : t(c) ? c(a, b) : a } function g(a, b, c) { if (U(a)) { a: { void 0 === a && (a = []); for (var d = 0; d < a.length; d++) { var e = Db(a[d]); if (!F(e)) { if (t(c)) { b = c(e, b); break a } b = e; break a } } } return b } return Db(a, b, c) } function Eb() { return T(pa(), ["runTimeInfo", "isAdblockUser"]) } function ha(a) {
        try {
            var b = a.skimlinksOriginalHref || a.href; return C(Fb(b) ?
                b.baseVal : b)
        } catch (c) { return console.error("Unexpected href format"), console.error(c), "" }
    } function qa(a) { return a ? a.replace(/^www\./i, "") : "" } function Ta() { for (var a = "", b = 0; 8 > b; b++)a += Math.floor(65536 * (1 + Math.random())).toString(16).substring(1); return a } function t(a) { return "[object Function]" === Object.prototype.toString.call(a) } function G(a, b, c) { for (var d = 0, e = null === a ? 0 : a.length; d < e;)c = b(c, a[d], d, a), d += 1; return c } function ra(a) { return "console" in window && t(window.console[a]) ? window.console[a] : function () { } }
    function sa(a, b) { return G(b, function (b, d) { return b && t(a[d]) }, !0) } function Sc() { try { var a = JSON.stringify({ a: 1 }); return 1 === JSON.parse(a).a } catch (b) { return !1 } } function A(a, b) { var c = Error(b); c.name = a; Gb(c, "getPrototypeOf" in Object ? Object.getPrototypeOf(this) : this.__proto__); Error.captureStackTrace && Error.captureStackTrace(c, A); return c } function Gb(a, b) { "setPrototypeOf" in Object ? Object.setPrototypeOf(a, b) : a.__proto__ = b } function F(a) { return "undefined" === typeof a || null === a } function U(a) {
        return Array.isArray ?
            Array.isArray(a) : "[object Array]" === Object.prototype.toString.call(a)
    } function O(a, b) { return Object.prototype.hasOwnProperty.call(a, b) } function w(a, b) { if (U(a)) for (var c = 0; c < a.length; c++)b(a[c], c, a); else for (c in a) O(a, c) && b(a[c], c, a) } function z() { var a = arguments[0], b = Array.prototype.slice.call(arguments, 1); F(a) && (a = {}); w(b, function (b) { F(b) && (b = {}); w(Object.keys(b), function (c) { a[c] = b[c] }) }); return a } function ta(a, b) { var c = []; w(a, function (d, e) { b(d, e, a) && c.push(d) }); return c } function Hb(a) {
        void 0 ===
        a && (a = []); return ta(a, function (a) { return !!a })
    } function Ua(a, b) { if (!a) return []; if (!b) return [].concat(a); var c = []; w(a, function (d, e) { c.push(b(d, e, a)) }); return c } function C(a) { return F(a) ? "" : a.toString().replace(/^[\s\xA0]+|[\s\xA0]+$/g, "") } function ua(a) { return "boolean" === typeof a } function P(a, b) { return "undefined" === typeof a ? b : a } function Va(a, b, c) { a = P(a, ""); b = P(b, ""); c = P(c, 0); return 0 === a.slice(c).indexOf(b) } function va(a, b, c) {
        a = P(a, ""); b = P(b, ""); c = P(c, 0); c = c < a.length ? c | 0 : a.length; return a.substr(c -
            b.length, b.length) === b
    } function Fb(a) { var b = typeof a; return null !== a && ("object" === b || "function" === b) } function Ib(a) { return encodeURIComponent(a).replace(/[!'()*~]/g, function (a) { return "%" + a.charCodeAt(0).toString(16).toUpperCase() }) } function H(a, b) { void 0 === b && (b = !0); var c = document.createElement("a"); if (b) var d = a; else { d = void 0; void 0 === d && (d = "http"); var e = ""; /^https?:\/\//.test(a) || /^\/[^/]+/.test(a) || (e = /^\/\//.test(a) ? d + ":" : d + "://"); d = "" + e + a } c.href = d; try { return qa(c.hostname) } catch (f) { return "" } }
    function fa(a, b) { var c = []; b = b || Ib; w(a, function (a, e) { c.push(e + "=" + b(a)) }); return c.join("&") } function Wa(a, b, c, d) {
        function e() { if (t(d.onError)) { var b = 400 <= h.status && 500 > h.status, c = 500 <= h.status && 600 > h.status; d.onError(new (0 === h.status ? Tc : b ? Uc : c ? Vc : Wc)(k + " " + a + " " + h.status)) } } b = b || {}; d = d || {}; var f = d.data, l = d.headers || {}, k = d.method || "GET", h = new XMLHttpRequest; d.withCredentials && (h.withCredentials = !0); b = fa(b); b.length && (a = a + "?" + b); h.open(k, a); w(l, function (a, b) { h.setRequestHeader(b, a) }); h.onload = function () {
            if (t(c)) if (200 <=
                h.status && 300 > h.status) { try { var a = JSON.parse(h.responseText) } catch (rb) { a = h.responseText } c(a) } else e()
        }; h.onerror = e; h.send(f); return h
    } function T(a, b, c) { if (!a || !b || !b.length) return c; for (var d = b.length, e = 0; e < d; e++) { var f = b[e]; if (a && f in a) a = a[f]; else return c } return a } function pa() { return window.__SKIM_JS_GLOBAL__ && t(window.__SKIM_JS_GLOBAL__.getDebugInfo) ? window.__SKIM_JS_GLOBAL__.getDebugInfo() : {} } function Xc(a) {
        var b = /(?::(\d+))?:(\d+)$/, c = /^([^ ]+)\s\((.*)\)$/, d = {
            filename: a, "function": "?", lineno: null,
            colno: null, in_app: !0
        }; c.test(a) && (a = a.match(c).slice(1), c = a[1], d["function"] = a[0], d.filename = c); b.test(d.filename) && (c = d.filename.match(b).slice(1), a = c[0], c = c[1], a && c ? (d.lineno = parseInt(a, 10), d.colno = parseInt(c, 10)) : !a && c && (d.lineno = parseInt(c, 10)), d.filename = d.filename.replace(b, "")); return d
    } function Yc(a) { a = a.stack.replace(a.toString(), "").replace(/^\s+at\s+/gm, "").split("\n"); a = Ua(a, function (a) { return C(a) }); a = Hb(a); a.reverse(); return Ua(a, Xc) } function ba(a, b) {
        if (a && Jb) {
            Kb.push(a); try {
                Zc.sendError(a,
                    b)
            } catch (d) { if (d === a) Lb.error(a); else { var c = new $c; c.__sentryExtraData__ = { logger_error_message: d.message, logger_error_stack: d.stack, initial_error_message: a.message, intial_error_stack: a.stack }; throw c; } }
        }
    } function E(a) { return t(a) ? function () { try { a.apply(this, arguments) } catch (b) { ba(b) } } : a } function La(a) { var b = !1, c; return function () { if (b) return c; c = a.apply(this, arguments); b = !0; return c } } function Mb(a, b) { return U(a) ? a : b } function B(a, b, c) {
        3 <= arguments.length && ("undefined" !== typeof a.setAttribute ? a.setAttribute(b,
            c) : a[b] = c); try { var d = a[b]; d || (d = a.getAttribute(b)); return d } catch (e) { return null }
    } function I(a, b) { var c = Array.prototype.slice.call(arguments, 2), d = E(a); return window.setTimeout.apply(window, [d, b].concat(c)) } function ad(a, b) {
        function c() { "object" === typeof a.skimlinksOriginalHref ? (a.href.baseVal = a.skimlinksOriginalHref.baseVal, a.href.animVal = a.skimlinksOriginalHref.animVal) : a.href = a.skimlinksOriginalHref; delete a.skimlinksOriginalHostname; delete a.skimlinksOriginalHref; delete a.skimlinksRestoreSwappedLink }
        b = b || Nb; var d = I(c, b); a.skimlinksOriginalHostname = a.hostname; a.skimlinksOriginalHref = "object" === typeof a.href ? { animVal: a.href.animVal, baseVal: a.href.baseVal } : a.href; a.skimlinksRestoreSwappedLink = function () { clearTimeout(d); c() }
    } function Cb(a, b, c) {
        if (a) {
            "string" === typeof a.skimlinksOriginalHref || ad(a, c); c = null; var d = a.childNodes.length && 3 === a.childNodes[0].nodeType; "msie" === p.detect.browser && d && (c = a.innerHTML); "object" === typeof a.href ? (a.href.baseVal = b, a.href.animVal = b) : a.href = b; c && c !== a.innerHTML &&
                (a.innerHTML = c)
        }
    } function Ob(a) { var b = a.href; b = p.cookie ? b.replace(/([&?])xguid=([a-fA-F0-9]{32})/, "$1xguid=" + p.cookie) : b.replace(/([&?]xguid=[a-fA-F0-9]{32})/, ""); b !== a.href && Cb(a, b); return b } function Pb(a) { a = a || document; a = a.body || a.getElementsByTagName("body")[0]; if (!a) throw new Qb; return a } function yb(a, b, c) {
        if (!J) {
            J = document.createElement("iframe"); J.id = "skimlinks-pixels-iframe"; try { Pb().appendChild(J) } catch (f) { f instanceof Qb && document.documentElement.appendChild(J) } var d = J; d.width = 0; d.height =
                0; d.style.display = "none"
        } var e = J.contentDocument || J.contentWindow.document; d = Pb(e); d || (d = document.createElement("body"), e.appendChild(d)); e = e.createElement("img"); e.src = a; e.width = 1; e.height = 1; t(b) && (e.onload = E(b)); t(c) && (e.onerror = E(c)); d.appendChild(e)
    } function Sa() { var a = {}; Xa && (a.dnt = Xa); Rb && (a.fdnt = 1); return a } function wa(a, b, c, d) { var e = d || {}; d = e.usePixel || !1; var f = e.useSendBeacon || !1; e = e.callback || function () { }; c = z({}, c, Sa()); f ? Sb(a, b, c, e) : d ? Tb(a, b, c, e) : Ya(a, b, c, e) } function Sb(a, b, c, d) {
        b = JSON.stringify(b);
        return navigator.sendBeacon && (a = Za(a, c), navigator.sendBeacon(a, b)) ? (d && d(), !0) : !1
    } function Tb(a, b, c, d) { c = z({}, c); c.rnd = Math.random(); b && (c.data = JSON.stringify(b)); yb(Za(a, c), d, d) } function Ya(a, b, c, d) { b = JSON.stringify(b); Ub.post(Za(a, c), {}, d, { headers: { "Content-type": "text/plain" }, data: b, withCredentials: !0 }) } function Za(a, b) { var c = fa(b), d = "" + bd + a; return c ? d + "?" + c : d } function r(a, b) { return t(a.indexOf) ? -1 < a.indexOf(b) : !1 } function xa(a) {
        var b = qa(ya); return r(a, Vb) || r(a, "go.redirectingat.com") || !!b && r(a,
            b)
    } function n(a, b, c) { b in a ? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : a[b] = c; return a } function cd(a, b) { if (!a) throw Error("[matchSelector] First argument needs to be an html element."); var c = window.Element.prototype; c = c.matches || c.msMatchesSelector || c.mozMatchesSelector || c.webkitMatchesSelector; if (t(c)) try { return c.call(a, b) } catch (e) { return !1 } c = (a.document || a.ownerDocument).querySelectorAll(b); for (var d = 0; c[d] && c[d] !== a;)d += 1; return !!c[d] } function na(a, b) {
        var c =
            dd(a); if (!c || !U(b) || 0 === b.length) return !1; var d = b.map(function (a) { return a + " *" }).concat(b).join(","); return cd(c, d)
    } function dd(a) { for (; a && a.nodeType !== Node.ELEMENT_NODE;)a = a.parentNode; return a } function Wb(a, b) { for (var c = 0; c < a.length; c++)if (b(a[c])) return a[c] } function V(a, b) {
        if ("function" != typeof a || null != b && "function" != typeof b) throw new TypeError("Expected a function"); if (!V.Cache) return a; var c = function e() {
            for (var c = arguments.length, l = Array(c), k = 0; k < c; k++)l[k] = arguments[k]; c = b ? b.apply(this,
                l) : l[0]; k = e.cache; if (k.has(c)) return k.get(c); l = a.apply(this, l); e.cache = k.set(c, l) || k; return l
        }; c.cache = new V.Cache; return c
    } function Xb(a, b) { return !!Wb(b, function (b) { var c = Va("*"), e = va("*"), f = b.replace(/\*/g, ""); return c && e ? r(a, f) : c ? va(a, f) : e ? Va(a, f) : a === b }) } function Yb(a, b) { return a && a.length && b ? "undefined" !== typeof Wb(a, b) : !1 } function ed(a) { return g("_merchantSettings") ? Yb(fd, function (b) { return r(a, b) }) : !1 } function Zb(a) {
        if (!a || !a.href) return !0; var b = ha(a); (b = !$b(b)) || (b = [].concat(gd(), tb(), ac),
            b = b.length && na(a, b) ? !0 : $a.length ? !na(a, $a) : !1); return b
    } function $b(a) { if (!a || ed(a)) return !1; var b = q.hostname; var c = P(void 0, !0); c = H(a, c); var d = va(c, "." + b) || va(b, "." + c); if (b = c !== b && !d) a = H(a), a = za.length ? !Xb(a, za) : Xb(a, hd()), b = !a; return b } function id(a) {
        var b; if (b = bc) null === a.offsetParent ? b = !0 : (b = m.getComputedStyle, b = t(b) ? "hidden" === b(a).visibility : !1); if (b) return v.IGNORE; var c = ha(a); b = qa(H(c)); c = c ? /^https?:\/\//.test(c) || /^\/\//.test(c) : !1; if (c && !Zb(a)) {
            if (da) return v.TRACK; if (!0 === q.aff_domains[b] ||
                O(ab, b)) return v.AFFILIATE; if (xa(b)) return v.PRE_AFFILIATED; if (a = bb) a = !O(q.aff_domains, b) || F(q.aff_domains[b]); return a ? v.UNKNOWN : "" === p.cookie && cc ? v.AFFILIATE : v.TRACK
        } return v.IGNORE
    } function R(a, b) { if (!a || !a.className || !b) return !1; var c = a && a.className ? C(a.className).split(/\s+/) : []; return r(c, b) } function Aa(a) {
        if ("string" !== typeof a.skimlinksOriginalHref) return !1; var b = D(a), c = a.href, d = document.createElement("a"), e = {}; d.href = c; if (c = d.search.substring(1)) for (c = c.replace(/&amp;/g, "&").split("&"), d =
            0; d < c.length; d++) { var f = c[d].split("="), l = f[1]; e[f[0]] = l ? decodeURIComponent(l) : null } b.icust && b.icust !== e.xjsf && (e.xjsf = b.icust); b.sourceApp && b.sourceApp !== e.xs && (e.xs = b.sourceApp); b = fa(e); a.href = q.waypointDomain + "?" + b; return !0
    } function D(a) {
        if (!a) throw Error("getAnchorMetaData takes an anchor HTML element as an argument"); var b = T(a, [dc]); if (!b) {
            b = { icust: null, sourceApp: null }; var c = [dc], d = b; if (a && c && c.length) for (var e = c.length, f = a, l = null, k = 0; k < e; k++) {
                var h = c[k]; if (k === e - 1) {
                    try { a[h] = d } catch (Be) {
                        f[l] =
                        {}, f[l][h] = d
                    } break
                } h in a && Fb(a[h]) || (a[h] = {}); f = a; l = h; a = a[h]
            }
        } return b
    } function ec(a, b, c) { b = z({}, b, { domain_id: Ba, publisher_id: Ca, page_url: m.location.href, impression_id: p.uuid, jv: ca }); var d = {}; navigator.sendBeacon ? d.useSendBeacon = !!c : d.usePixel = !!c; wa("/generic_tracking/" + a, b, {}, d) } function wb(a) { a = a.target || a.srcElement || a.originalTarget; if (!a) return null; var b = (a.nodeName || "").toLowerCase(); return r(["a", "area"], b) ? a : zb(a) } function Da(a) { try { return a() } catch (b) { } } function jd(a) {
        var b = g("gtag");
        Da(function () { b("event", W, { event_category: "click", event_label: a }) })
    } function kd(a) { var b = g("ga"); Da(function () { b("send", "event", "click", W, a) }) } function ld(a) { var b = g("_gaq"); Da(function () { b.push(["_trackEvent", "click", W, a]) }) } function md(a) { var b = g("pageTracker"); b._trackPageview && Da(function () { b._trackPageview("/" + W + "/" + a) }) } function nd(a, b) { return G(Object.keys(b), function (c, d) { var e = a[d] === b[d]; return c && e }, !0) } function fc(a) { return G(a, function (a, c) { return a.concat(c) }, []) } function Ea(a, b) {
        void 0 ===
        b && (b = !0); var c = a ? "." + a : ""; return fc(K.querySelectorAll(b ? "a[href]" + c + ", area[href]" + c : "a[href]" + c))
    } function od(a, b) { w(a, function (a) { var c = r(b, a) && !xa(a); q.aff_domains[a] = c }) } function pd(a, b) { return !Yb(a, function (a) { return !b(a) }) } function qd() { for (var a = new L, b = arguments.length, c = Array(b), d = 0; d < b; d++)c[d] = arguments[d]; a.waitFor(c); return a } function sb(a) { return G(a, function (a, c) { return r(a, c) ? a : a.concat(c) }, []) } function cb(a) { var b = gc[a]; if (!b) throw Error("Unknown service " + a); return b } function hc(a,
        b) { if (a) { var c = [].concat(a.split(" "), b); c = sb(c) } else c = b; return c } function rd() { if (db || Fa) { var a = []; db && a.push("nofollow"); Fa && (a = hc(Fa, a)); w(Ea(), function (b) { var c = a, d = B(b, "rel"), e = qa(b.hostname); e && !0 === q.aff_domains[e] && B(b, "rel", hc(d, c).join(" ")) }) } } function sd(a) {
            if (a.affiliationType === v.IGNORE) return !1; var b = a.anchor, c = a.affiliationType, d = a.nativeEvent; if (a.type === X.LEFT_CLICK) if (b = a.anchor, c = a.affiliationType, c === v.AFFILIATE || c === v.UNKNOWN) {
                b = a.anchor; c = a.nativeEvent; d = a.clientClickId; var e,
                    f, l; if (l = g("skimlinks_strip_attribute", !1)) for (f in l) if (O(l, f)) { var k = l[f]; (e = B(b, f)) && 0 === e.indexOf(k) && (e = e.substr(k.length), B(b, f, e)) } ia && B(b, "target", ia); D(a.anchor); D(b).clientClickId = d; Aa(b); W && (a = b.href, g("gtag") ? jd(a) : g("ga") ? kd(a) : g("_gaq") ? ld(a) : g("pageTracker") && md(a)); a = ic ? (a = B(b, "onclick")) && r(a.toString(), "return false") ? !0 : (a = b.onclick) && t(a) && r(a.toString(), ".preventDefault()") ? !0 : !1 : !1; a ? (Qa(c, b), (ia ? m.open(b.href, ia) : m.open(b.href, "_blank")).focus()) : Qa(c, b)
            } else c === v.PRE_AFFILIATED ?
                Ob(b) : c === v.TRACK && (a = { publisher_id: Ca, publisher_domain_id: Ba, referrer: m.location.toString(), pref: p.referrer, site: "" + S, url: b.href, custom: B(b, "data-skimlinks-tracking") || oa || "", xtz: p.timezone, uuid: p.uuid, product: "1" }, da && (a.xrf = 1), wa("/naclicks", a, null, { usePixel: !0 })); else {
                    try {
                        if (l = D(b), !l.icust || -1 !== l.icust.indexOf("other_click__")) {
                            e = "other_click__" + d.type + " [" + (void 0 != d.button ? d.button : "") + "]"; if (32 < String(e).length) throw Error(e + " is not a valid icust value. The value should be less than 33 chars");
                            D(b).icust = e; Aa(b)
                        }
                    } catch (h) { } c === v.AFFILIATE || c === v.UNKNOWN ? xb(b, 200) : c === v.PRE_AFFILIATED && Ob(b)
            } return !0
        } function td() { cb(Y.ANCHOR_CLICK_INTERCEPTOR).registerInterceptor(sd, eb.SKIMLINKS) } function ud() { p.skimlinksEnabled && (y.on("skim_js_start", td), Q.whenBeaconFullyReady(rd)) } function jc(a) { var b; return a && -1 !== a.indexOf("class=") && (b = a.match(/([^[]+)\[class=([^\]]+)\]/i)) && 3 === b.length ? b[1] + "." + b[2] : a } function vd() {
            var a = Ea(); return G(a, function (a, c) {
                var b = ha(c); var e = (b = H(b)) && !Zb(c) && !xa(b), f =
                    O(q.aff_domains, b); e && !f && (a.push(b), q.aff_domains[b] = null, q.domain_data.domains.push(b)); return a
            }, [])
        } function kc(a) { var b = vd(); return Q.sendBeaconRequest(b, a) } function lc(a, b) { w(a, function (a) { void 0 === q.aff_domains[a] && (q.aff_domains[a] = null) }); Q.sendBeaconRequest(a, Z.AUX).readyState.whenReady(b) } function ub(a) { return z({ pag: m.location.href, guid: p.cookie, uuid: p.uuid, tz: p.timezone, publisher_id: Ca, publisher_domain_id: Ba }, a) } function mc(a) {
            if (0 !== u.awaitedModules.length && (u.awaitedModules = ta(u.awaitedModules,
                function (b) { return b !== a }), 0 === u.awaitedModules.length)) { var b = Qc(); wa("/page", b) }
        } function wd(a) { a = a.match.phrase; return { w: a.text(), lp: a.url(), t: Ga.creative } } function xd(a) { a = a || []; var b = G(a, function (a, b, e) { a[e] = b; return a }, {}); u.linksImpressions.unlinked = { count: a.length, urls: b }; mc("unlinked") } function fb(a) { return String(a).replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;") } function gb(a, b, c, d) {
            void 0 === d && (d = !1); if (a && (a.nodeName || a === m)) if (K.addEventListener) {
                var e =
                    E(c.bind(a)); a.addEventListener(b, e, d)
            } else a.attachEvent("on" + b, function () { return 7 > p.detect.version && !m.event ? (I(c.bind(a, m.event), 100), !0) : c.call(a, m.event) })
        } function nc(a, b) { Qa(a, b) } function yd() { m.__SKIM_JS_GLOBAL__.bundledEntries.unlinked = !0; if (p.unlinkedEnabled) { if (p.skimwordsEnabled) y.on("instant_api_callback_settings", zd); else Q.whenPostPageLoadBeaconCallCompleted(oc); y.on("dom_changed", pc) } } function hb(a) { Ad.setReady(); xd(a) } function zd() {
            var a = N.settings; 2 === a.nc ? p.unlinkedEnabled && lc(q.domain_data.domains,
                qc) : p.unlinkedEnabled && (a.includes ? (M && M.length && (a.excludes = a.excludes.concat(M)), x.traverse(a.includes, a.excludes, a.read_onlys)) : M && M.length ? x.traverse(["body"], M, []) : x.traverse(["body"], [], [])); oc()
        } function oc() {
            a: { var a = K.getElementsByTagName("body"); if (a.length) { a = a[0].textContent || a[0].innerText; var b; if (b = a) a = /$|\b(?:https?:\/\/)?(?:[-_a-zA-Z]+\.)*(?:[-_a-zA-Z]{2,}\.[-_\w]{2,5}\b)[^[\]\s]*\b|$/gi.exec(a), b = a.length && "" !== a[0] ? !0 : !1; if (b) { a = !0; break a } } a = !1 } a ? (p.skimwordsEnabled || x.traverse([],
                M, []), pc()) : hb()
        } function pc() { Lc(function (a) { a.length ? lc(a, qc) : hb() }) } function qc() { var a = []; Object.keys(q.aff_domains).length && (w(Ga.url_spans, function (b) { q.aff_domains[b.match.domain] && (Bd(b.node, b.match, !0), a.push(wd(b))) }), I(function () { var a; var c = Ea("skimlinks-unlinked"); var d = []; var e = 0; for (a = c.length; e < a; e++) { var f = c[e]; d.push(Cd(f)) } return d }, 10)); hb(a) } function Dd() {
            return G(Ea(), function (a, b) {
                var c = ha(b), d = H(c), e; (e = !d) || (e = !(!R(b, "skimwords-link") && !R(b, "skimlinks-unlinked"))); (e = e || !$b(c)) ||
                    (e = b && U(Ha) && 0 !== Ha.length ? na(b, Ha) : !1); if (e) return a; (e = a.urls[c]) || (e = { count: 0, ae: !0 === q.aff_domains[d] || (null === q.aff_domains[d] || void 0 === q.aff_domains[d]) && bb && !xa(d) ? 1 : 0 }); e.count++; a: { if (-1 !== c.indexOf("#slm-") && (d = c.split("#slm-"), 2 === d.length && !isNaN(d[1]) && 10 * parseInt(d[1], 10) === 10 * d[1])) { d = parseInt(d[1], 10); break a } d = null } d && (e.slmcid = d); d = e; 1 === d.ae && a.count++; d.slmcid && (e = d.slmcid, r(u.campaign_ids, e) || u.campaign_ids.push(e)); if (!rc && 0 === d.ae) return a; a.urls[c] = d; return a
            }, { urls: {}, count: 0 })
        }
    function Ed() { w(Fd, function (a) { var b = m; "skimlinks_context_window" === a && (b = window); O(b, a) && (a = { page_var: a, value: JSON.stringify(b[a]) }, ec("page_variable_tracking", a)) }) } function Gd() { var a = La(function () { u.linksImpressions.skimlinks = Dd(); mc("main-tracking"); if (Object.keys(u.linksImpressions.skimlinks.urls).length) { var a = ub({ dl: u.linksImpressions.skimlinks.urls, hae: u.linksImpressions.skimlinks.count ? 1 : 0, typ: "l" }); wa("/link", a) } }); Q.whenNoRequestsPending(a); I(a, 2E3) } function Hd() {
        u.awaitedModules.push("main-tracking");
        p.skimwordsEnabled && u.awaitedModules.push("skimwords"); p.unlinkedEnabled && u.awaitedModules.push("unlinked"); sc && Q.whenPostPageLoadBeaconCallCompleted(Gd); if (navigator.sendBeacon && 1 > 1E4 * Math.random()) {
            var a = { domain_id: Ba, publisher_id: Ca, page_url: m.location.href, impression_id: p.uuid, jv: ca }, b = Sb("/generic_tracking/trackingMethodExperiment", z({ trackingMethod: "sendBeacon" }, a)); Ya("/generic_tracking/trackingMethodExperiment", z({ trackingMethod: "xhr" }, a)); b || Ya("/generic_tracking/trackingMethodExperiment",
                z({ trackingMethod: "sendBeaconFailed" }, a))
        }
    } function Id() { Ed() } function tc(a, b) { aa || 1E3 < b ? t(a) && (aa ? ib ? a(!0) : a(!1) : a(!1)) : I(tc, b *= 2, a, b) } function uc() { aa || (ja.complete && ka.complete && (aa = !0), aa && "0" != ja.width && "0" == ka.width && (ib = !0)) } function Jd(a) { function b(a) { return a.toLowerCase().replace(/^\/\/|^https?:\/\//, "") } var c = Ua(vc, b); return r(c, b(a)) } function Kd() { return { skimOptions: Ld, runTimeInfo: z({}, { aff_domains: q.aff_domains }, { consentState: Md }, { loggedErrors: Kb }, p) } } function Nd(a, b) {
        var c = !1, d; return function () {
            if (c) return d;
            I(function () { c = !1 }, b); c = !0; return d = a.apply(this, arguments)
        }
    } function wc(a, b, c, d) { void 0 === b && (b = []); if (a) { var e = Nd(c, 200); w(b, function (b) { try { gb(a, b, e, d) } catch (l) { } }) } } function Od() { var a = new Pd; gc[Y.ANCHOR_CLICK_INTERCEPTOR] = a } function Qd() {
        m.__SKIM_JS_GLOBAL__ || (m.__SKIM_JS_GLOBAL__ = {}); if (!m.__SKIM_JS_GLOBAL__.init) {
            m.skimlinksAPI = {}; m.__SKIM_JS_GLOBAL__.init = !0; m.__SKIM_JS_GLOBAL__.getDebugInfo = Kd; m.__SKIM_JS_GLOBAL__.bundledEntries = Rd; if (Jd(q.hostname) || jb && K.querySelector(jb)) p.skimlinksEnabled =
                !1, p.skimwordsEnabled = !1, p.unlinkedEnabled = !1; "msie" === p.detect.browser && 8 >= p.detect.version && (p.skimwordsEnabled = !1); try { Tb("/robots.txt", void 0, { __skimjs_preflight__please_ignore__: !0 }) } catch (a) { ba(new Sd, !0) } Td.detect(function (a) { p.isAdblockUser = a }); y.publish("skim_js_init"); r(["interactive", "complete"], K.readyState) ? I(la, 0) : (kc(Z.PRE_PAGE_LOAD), document.addEventListener("DOMContentLoaded", la), document.addEventListener("load", la)); Od(); y.publish("skim_js_start")
        }
    } var Lb = {
        log: ra("log"), info: ra("info"),
        warn: ra("warn"), error: ra("error")
    }, Jb = function () { var a = !0; try { var b = [Sc(), !!(window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest), sa(document, ["querySelector", "querySelectorAll"]), sa(Object, ["keys"]), sa([], ["indexOf"]), sa("", ["indexOf"])]; a = G(b, function (a, b) { return a && b }, !0) } catch (c) { a = !1 } !1 === a && Lb.info("[Skimlinks] Your browser doesn't support the base features necessary to run our javascript."); return a }(); A.prototype = Object.create(Error.prototype, {
        constructor: {
            value: Error, enumerable: !1,
            writable: !0, configurable: !0
        }
    }); Gb(A, Error); var Qb = A.bind(null, "DocumentBodyNotFound"), Ud = A.bind(null, "PixelDropFailed"); A.bind(null, "ScriptDropFailed"); var Wc = A.bind(null, "XhrError"), Uc = A.bind(null, "XhrError4xx"), Vc = A.bind(null, "XhrError5xx"), Tc = A.bind(null, "XhrErrorZero"), $c = A.bind(null, "SentryLoggerError"); A.bind(null, "SendBeaconFailedError"); var Sd = A.bind(null, "ResolveSslCertificateError"); A.bind(null, "DisclosureReadyStateTimeout"); var ca = "15.4.2-stackpath", Vd = "https://r.skimresources.com/api/",
        ab = { "t.umblr.com": { name: "z" } }, Ab = "725X1342", Ca = 725, Ba = 1342, bd = "https://t.skimresources.com/api/v2", Vb = "go.skimresources.com", Wd = "https://sl-sentry.skimlinks.com", xc = "f648b8dfc7284fad8af093653eafd6ca", Xd = "production", Yd = 1 > 1E3 * Math.random(), Zc = {
            sendError: function (a, b) {
                if (!xc) throw a; var c = b; c = (c = ua(c) ? c : !1) || Yd ? a instanceof Ud && Eb() ? !1 : !0 : !1; if (c) {
                    c = Wd + "/api/46/store/"; var d = {
                        sentry_version: "7", sentry_client: "raven-js/3.26.4",
                        sentry_key: xc
                    }; var e = { country: T(pa(), ["runTimeInfo", "country"]), beacon_consent: T(pa(), ["runTimeInfo", "consent"]), iab_consent: T(pa(), ["runTimeInfo", "consentState", "skimlinks_consent"]), is_adblock_user: Eb(), is_top_frame: window.top === window }; e = {
                        event_id: Ta(), project: "46", platform: "javascript", logger: "javascript", release: ca, exception: { values: [{ type: a.name, value: a.message, stacktrace: { frames: Yc(a) } }] }, request: { headers: { "User-Agent": navigator.userAgent }, url: location.href }, extra: z({ original_stacktrace: a.stack },
                            a.__sentryExtraData__, e)
                    }; Wa(c, d, null, { method: "POST", data: JSON.stringify(e) })
                }
            }
        }, Kb = [], Bb = La(function () { return (new Date).getTimezoneOffset() }), yc = window.skimlinks_context_window || null, m = yc ? window[yc] : window, K = m.document, Zd = { getItem: function (a) { try { return JSON.parse(localStorage.getItem(a)) } catch (b) { return null } }, setItem: function (a, b) { try { localStorage.setItem(a, JSON.stringify(b)) } catch (c) { } } }, kb = g("noskim", !1), $d = g("noskimlinks", !1), ae = g("noskimwords", !0), be = g("nounlinked",
            !1), ce = g("skimwords_standard", false), de = g("skimwords_lite", false), ee = g("skimwords_diy", false), fe = g("skimwords_diy_filter", false), zc = !kb && !$d, Ac = !kb && !ae, Bc = !kb && !be, Xa = g("skimlinks_dnt", 0, function (a) { return a && "0" !== a && "false" !== a ? 1 : 0 }), Rb = g("skimlinks_nocookie", !1), lb = g("skimlinks_excluded_classes", []), ac = g("custom_excluded_selectors", [],
                Mb), $a = g("custom_included_selectors", [], Mb), mb = g("skimlinks_exclude", []), za = g("skimlinks_include", []), bc = g("skimlinks_ignore_hidden_links", false), Ha = g("skimlinks_link_impression_exclude_selector", []), db = g("skimlinks_add_nofollow", false), Fa = g("skimlinks_custom_rel",
                    ""), Cc = g("skimlinks_before_click_handler", false, function (a, b) { return ua(a) ? a : b }), cc = g("skimlinks_first_party_na", !1), sc = !g("noimpressions", !1), rc = false, Nb = g("skimlinks_replace_timeout", 300, function (a, b) { var c = parseFloat(a); return isNaN(c) ? b : c }), bb = g("skimlinks_affiliate_unknown_links", true), ia = g("skimlinks_target",
                        null), ge = g("skimlinks_ajax_rerun", false), M = [], da = g("skimlinks_revenue_forecast", false), Dc = g("skimlinks_noright", false), Ec = g("skimlinks_url_extraction_rules", !1) || false, Ra = g("skimlinks_extra_redir_params", []).join("&"), oa = g(["affiliate_tracking", "skimlinks_tracking"], !1), Ia = g("force_location"), S = g(["skimlinks_site", "skimlinks_sitename"],
                            !1), ya = g("skimlinks_domain", ""), W = g("skimlinks_google", false, function (a, b) { return a ? ua(a) ? a ? "skimout" : "" : C(a) : b ? "skimout" : "" }), vc = g("noskim_domains", []), he = g("skimwords_horizontal_distance", 80), ie = g("skimwords_vertical_distance", 80), je = false, Ma = g("skimwords_color", null), Na = g("skimwords_weight", null),
        ea = g("skimwords_decoration", null), Oa = g("skimwords_style", null), Pa = g("skimwords_title", null), jb = g("no_skim_selector", ""), ke = g("skimlinks_force_consent", !1), ic = true, Ld = {
            SW_STANDARD: ce, SW_LITE: de, SW_DIY: ee, SW_DIY_FILTER: fe, HAS_SKIMLINKS: zc, HAS_SKIMWORDS: Ac, HAS_UNLINKED: Bc, DO_NOT_TRACK: Xa, NO_COOKIE: Rb, SL_EXCLUDED_CLASSES: lb, CUSTOM_EXCLUDED_SELECTORS: ac,
            CUSTOM_INCLUDED_SELECTORS: $a, SL_EXCLUDED_DOMAINS: mb, SL_INCLUDED_DOMAINS: za, SL_IGNORE_HIDDEN_LINKS: bc, SL_IMPRESSION_EXCLUDED_SELECTORS: Ha, SL_ADD_NOFOLLOW: db, SL_CUSTOM_REL: Fa, SL_BEFORE_CLICK_HANDLER: Cc, SL_FIRST_PARTY_NA: cc, SL_TRACK_IMPRESSION: sc, WITH_NA_LINK_IMPRESSIONS: rc, SL_REPLACE_TIMEOUT: Nb, SL_AFFILIATE_UNKNOWN_LINKS: bb, SL_TARGET: ia, AJAX_SUPPORT: ge, UNLINKED_EXCLUDES: M, SL_FORECAST: da, NO_RIGHT_CLICK: Dc, USE_MERCHANT_URL_EXTRACTION_RULES: Ec, EXTRA_REDIR_PARAMS: Ra, CUSTOM_TRACKING_VAR: oa, FORCE_LOCATION: Ia,
            SITE_NAME: S, CUSTOM_WAYPOINT_DOMAIN: ya, GOOGLE_TRACKING_ACTION_NAME: W, NO_SKIM_DOMAINS: vc, SW_HORIZONTAL_DISTANCE: he, SW_VERTICAL_DISTANCE: ie, SL_PROFILING: !1, TRACK_COOKIE_SYNCS: je, SW_LINK_COLOR: Ma, SW_LINK_WEIGHT: Na, SW_LINK_DECORATION: ea, SW_LINK_STYLE: Oa, SW_LINK_TITLE: Pa, NO_SKIM_SELECTOR: jb, SL_CONSENT: "ae", FORCE_CONSENT: ke, M101_TRACKING_ID: null, M101_CUSTOM_DOM_DETECTION: false, AE_CLICK_TRACKING: !1, INCENTIVE_ENABLED: !1, FORCE_PREVENTED_CLICKS_MONETIZATION: ic,
            IS_MINIMALISTIC_JS: !1, LINK_SWAPPING_404: !1, LINK_SWAPPING_OUT_OF_STOCK: !1, LINK_SWAPPING_PRODUCT_MATCH: !1, LINK_SWAPPING: !1, LINK_SWAPPING_MERCHANT_NAME_DETECTION: true, HAS_TABOOLA_TRACKING: !1, BEACON_RETRY_TIMER: -1
        }, p = function () {
            var a = K.referrer || document.referrer || "", b = Ia || m.location.href; var c = "aspsession-id aspsessionid cftoken j-sessionid jsessid jsession_id jsessionid phpsessid phpsession-id phpsessionid seskey sessid session-id session-key session_id sessionid sessionkey uniqueid utm_campaign utm_medium utm_source utm_term".split(" ");
            for (var d = 0; d < c.length; d++) { var e = c[d]; var f = b.split("?"); if (2 <= f.length) { b = f.shift(); f = f.join("?"); e = encodeURIComponent(e) + "="; f = f.split(/[&;]/gi); for (var l = f.length - 1; 0 <= l; l--)Va(f[l], e) && f.splice(l, 1); b = b + "?" + f.join("&") } } "?" === b[b.length - 1] && (b = b.substr(0, b.length - 1)); c = b; d = Zd.getItem("skimCONSENT"); b = navigator.userAgent.toLowerCase(); b = /(webkit)[ /]([\w.]+)/.exec(b) || /(opera)(?:.*version)?[ /]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || 0 > b.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(b) ||
                []; b = { browser: b[1] || "", version: parseFloat(b[2]) || 0 }; return { cookieSyncString: "", lastBeaconTimestamp: null, cookie: "", country: "", locale: "", consent: d, detect: b, isAdblockUser: !1, pageLocation: c, referrer: a, timezone: Bb(), uuid: Ta(), skimwordsEnabled: Ac, skimlinksEnabled: zc, unlinkedEnabled: Bc }
        }(), q = function () {
            var a = document.getElementsByTagName("html") ? document.getElementsByTagName("html")[0] : null, b = Ia ? H(Ia, !1) : m.location.hostname; return {
                aff_domains: {}, beacon: [], domain_data: { domains: [] }, exclude: mb, exclude_lookup: null,
                excluded_classes: ["noskimlinks", "noskim"].concat(lb), has_been_called: !1, hostname: b, html_root: a, include: za, include_lookup: null, links: [], links_tracked: !1, target: null, waypointDomain: ya ? "http://" + ya : "https://" + Vb
            }
        }(); var N = {}; var Ga = { creative: "500005", url_spans: [] }; var Fc = function (a, b, c) { if (0 === b) return c; try { return a() } catch (d) { return Fc(a, b - 1, c) } }; get_real_link = function (a) {
            if (null == a) return null; for (; "A" !== a.nodeName.toUpperCase();)if (a = Fc(function () { return a.parentNode }, 3, null), null == a) return null;
            return a
        }; var J, Ub = { get: function (a, b, c, d) { d = z({ onError: ba }, d, { method: "GET" }); Wa(a, b, E(c), d) }, post: function (a, b, c, d) { d = z({ onError: ba }, d, { method: "POST" }); Wa(a, b, E(c), d) } }; "undefined" !== typeof window.Map && (V.Cache = Map); var le = ["noskim", "norewrite"], me = ["noskimlinks", "noskim"].concat(["taboola", "advert--taboola", "trc_rbox", "trc_related_container"]), ne = "*.criteo.com *.g.doubleclick.net *mjxads.internet.com *overture.com *pgpartner.co.uk *pgpartner.com *pricegrabber.co.uk *pricegrabber.com *youtube.com m.skimresources.com paid.outbrain.com track.celtra.com traffic.outbrain.com trc.taboola.com zergnet.com ad.doubleclick.net".split(" "),
            fd = ["itunes.apple.com", "itunes.com", "phobos.apple.com"], hd = V(function () { var a = [].concat(mb, ne); S && a.push(S); return a }), tb = V(function () { return me.concat(lb).map(function (a) { return "." + a }) }), gd = V(function () { return le.map(function (a) { return "a[rel~='" + a + "']" }) }), oe = function () { var a = /[-[\]{}()*+?.,\\^$|#]/g, b = /\s+/g; return function (c) { return c.replace(a, "\\$&").replace(b, "\\s+") } }(), v; (function (a) { a.AFFILIATE = "AFFILIATE"; a.PRE_AFFILIATED = "PRE_AFFILIATED"; a.UNKNOWN = "UNKNOWN"; a.TRACK = "TRACK"; a.IGNORE = "IGNORE" })(v ||
                (v = {})); var dc = "__skimlinks__"; var Rc = function (a) { a = ha(a); if (Ec) { var b = H(a); if (b in ab) return b = "[&?]" + ab[b].name + "=(http[^&]+)", b = new RegExp(b), decodeURIComponent(null != a ? a.match(b).pop() : void 0) || a } return a }; var Gc; (function (a) { a.STARTING = "STARTING"; a.CANCELLED = "CANCELLED"; a.PENDING_API = "PENDING_API"; a.API_ERROR = "API_ERROR"; a.NO_OFFERS = "NO_OFFERS"; a.PENDING_MODULE = "PENDING_MODULE"; a.READY = "READY" })(Gc || (Gc = {})); var y = {
                    topics: {}, on: function (a, b, c) {
                        U(this.topics[a]) || (this.topics[a] = []); var d; c &&
                            (d = function (a) { nd(a, c) && b(a) }); this.topics[a].push(d || b)
                    }, publish: function (a, b) { w(this.topics[a] || [], function (a) { t(a) && a(b) }) }
                }, L = function () {
                    function a() {
                        var a = this; n(this, "ready", void 0); n(this, "pendingCallbacks", void 0); n(this, "subReadyStateList", void 0); n(this, "isReady", function () { return a.dependsOnSubReadyState() ? pd(a.subReadyStateList, function (a) { return a.isReady() }) : a.ready }); n(this, "setReady", function () { a.dependsOnSubReadyState() || a.ready || (a.ready = !0, a.callPendingCallbacks()) }); n(this, "waitFor",
                            function (b) { b = ta(b, function (a) { return !!a }); a.subReadyStateList = a.subReadyStateList.concat(b); a.isReady() ? a.callPendingCallbacks() : b.forEach(function (b) { b.whenReady(a.whenSubReadyStateIsReady) }) }); n(this, "whenSubReadyStateIsReady", function () { a.isReady() && a.callPendingCallbacks() }); this.ready = !1; this.pendingCallbacks = []; this.subReadyStateList = []
                    } var b = a.prototype; b.whenReady = function (a) { this.isReady() ? a() : this.pendingCallbacks.push(a) }; b.dependsOnSubReadyState = function () { return 0 !== this.subReadyStateList.length };
                    b.callPendingCallbacks = function () { this.pendingCallbacks.forEach(function (a) { setTimeout(a, 0) }); this.pendingCallbacks = [] }; return a
                }(), Z; (function (a) { a.PRE_PAGE_LOAD = "PRE_PAGE_LOAD"; a.POST_PAGE_LOAD = "POST_PAGE_LOAD"; a.AUX = "AUX" })(Z || (Z = {})); var Q = new (function () {
                    function a(a, b) {
                        var c = this; n(this, "requestBeaconAPI", void 0); n(this, "beaconRequestHandler", void 0); n(this, "requestsHistory", void 0); n(this, "noRequestPendingReadyState", void 0); n(this, "beaconApiResponseReadyState", void 0); n(this, "postPageLoadCallReadyState",
                            void 0); n(this, "beaconFullyReadyState", void 0); n(this, "whenNoRequestsPending", function (a) { c.noRequestPendingReadyState.whenReady(a) }); n(this, "whenBeaconApiRequestCompleted", function (a) { c.beaconApiResponseReadyState.whenReady(a) }); n(this, "whenPostPageLoadBeaconCallCompleted", function (a) { c.postPageLoadCallReadyState.whenReady(a) }); n(this, "whenBeaconFullyReady", function (a) { c.beaconFullyReadyState.whenReady(a) }); n(this, "sendBeaconRequest", function (a, b) {
                                var d = 0 === a.length, e = {
                                    readyState: new L, requestedDomains: a,
                                    response: null, beaconCallType: b
                                }; c.hasFetchedAtLeastOnce() && d ? (c.requestsHistory.push(e), e.readyState.setReady()) : c.requestBeaconAPI(a, b, function (b) { b = z({ requestedDomains: a }, b); c.beaconRequestHandler(b); e.response = b; e.readyState.setReady() }); c.updateRequestsHistory(e); e.readyState.whenReady(function () { e.response && y.publish("EVENTS__BEACON__REQUEST_COMPLETED", e); c.resolveReadyStatesOnRequestCompleted(e) }); return e
                            }); this.requestBeaconAPI = a; this.beaconRequestHandler = b; this.requestsHistory = []; this.noRequestPendingReadyState =
                                new L; this.noRequestPendingReadyState.setReady(); this.beaconApiResponseReadyState = new L; this.postPageLoadCallReadyState = new L; this.beaconFullyReadyState = qd(this.beaconApiResponseReadyState, this.postPageLoadCallReadyState)
                    } var b = a.prototype; b.updateRequestsHistory = function (a) { this.requestsHistory.push(a); this.noRequestPendingReadyState.waitFor([a.readyState]) }; b.resolveReadyStatesOnRequestCompleted = function (a) {
                        a.response && !this.beaconApiResponseReadyState.isReady() && this.beaconApiResponseReadyState.setReady();
                        a.beaconCallType === Z.POST_PAGE_LOAD && this.postPageLoadCallReadyState.setReady()
                    }; b.hasFetchedAtLeastOnce = function () { return 0 !== this.requestsHistory.length }; return a
                }())(function (a, b, c) { a = JSON.stringify({ pubcode: Ab, page: m.location.href, domains: a, link_swapping: !1 }); a = { headers: { "Content-type": "application/x-www-form-urlencoded" }, data: fa({ data: a }), withCredentials: !0 }; var d = Sa(); "production" !== Xd && (d._ = b); Ub.post("" + Vd, d, c, a) }, function (a) {
                    var b = {}; a.country && (b.country = a.country.toUpperCase()); a.country_state &&
                        (b.countryState = a.country_state); a.guid && "" === p.cookie && (b.cookie = a.guid); ua(a.consent) && (b.consent = a.consent); a.csp && (b.cookieSyncString = a.csp); a.ts && (b.lastBeaconTimestamp = a.ts); z(p, b); od(a.requestedDomains, a.merchant_domains)
                }), Y; (Y || (Y = {})).ANCHOR_CLICK_INTERCEPTOR = "ANCHOR_CLICK_INTERCEPTOR"; var gc = {}, X; (function (a) { a.LEFT_CLICK = "LEFT_CLICK"; a.MIDDLE_CLICK = "MIDDLE_CLICK"; a.OTHER_CLICK = "OTHER_CLICK" })(X || (X = {})); var eb; (function (a) {
                    a[a.LINK_SWAPPING = 0] = "LINK_SWAPPING"; a[a.CONSENT = 1] = "CONSENT";
                    a[a.INCENTIVE = 2] = "INCENTIVE"; a[a.SKIMLINKS = 3] = "SKIMLINKS"
                })(eb || (eb = {})); var Hc = {}.hasOwnProperty; var nb = 0; var ob = null; var pb = 0; var Ja = !1; var Ka = {}; var pe = function (a) { Ka[a] = Ka[a] || 0; Ka[a]++; return a + "_" + Ka[a] }; var qe = function (a) {
                    var b; var c = b = null; if (-1 !== a.indexOf(".")) { a = a.split("."); var d = a[0]; c = a[1] } else -1 !== a.indexOf("[class=") ? (a = a.split("[class="), d = a[0], c = a[1].split("]"), c = c[0]) : -1 !== a.indexOf("[class^=") ? (a = a.split("[class^="), d = a[0], c = a[1].split("]"), c = c[0]) : -1 !== a.indexOf("[id*=") ? (a = a.split("[id*="),
                        d = a[0], b = a[1].split("]"), b = b[0]) : d = a; return { tag: d, id: b, "class": c }
                }; var ma = function (a, b) {
                    var c; var d = b.split(","); var e = 0; for (c = d.length; e < c; e++) {
                        b = d[e]; b = C(b); b = qe(b); var f = !0; var l = (l = "string" === typeof a.className ? a.className : "") || ("function" === typeof a.getAttribute ? a.getAttribute("class") : void 0) || ""; var k = ("function" === typeof a.getAttribute ? a.getAttribute("id") : void 0) || ""; !b.tag || a.nodeName && a.nodeName.toLowerCase() === b.tag || (f = !1); b["class"] && (!l || l !== b["class"] && 0 !== l.indexOf(b["class"])) &&
                            (f = !1); b.id && (!k || k !== b.id && -1 === k.indexOf(b.id)) && (f = !1); if (f) return !0
                    } return !1
                }; var Ic = function (a, b) { return ma(a, b) ? [a] : fc(a.querySelectorAll(b)) }; var re = function (a, b) { return 0 < a.querySelectorAll(b).length }; var qb = function (a, b) { return 0 === b.length || ma(a, b.join(",")) ? !0 : a.parentNode ? qb(a.parentNode, b) : !1 }; var Jc = function d(b, c) { return 0 === c.length ? !1 : ma(b, c.join(",")) ? !0 : b.parentNode ? d(b.parentNode, c) : !1 }; var se = function (b) {
                    var c = b.offsetWidth; b = b.offsetHeight; return 468 === c && 60 === b || 234 === c && 60 ===
                        b || 728 === c && 90 === b || 300 === c && 250 === b || 250 === c && 250 === b || 336 === c && 280 === b || 160 === c && 600 === b || 120 === c && 600 === b ? !0 : !1
                }; var te = function () {
                    var b = []; b.push("div.widget-content"); b.push("div.googleAdText"); b.push("div[id=ad]"); b.push("div[id=banner]"); b.push("div[id=advertisement]"); b.push("div[id=adv_container]"); b.push("div.ad"); b.push("div.banner"); b.push("div.advertisement"); b.push("div.ad_container"); b.push("span.IL_AD"); b.push("div[id=fave-ext-container]"); b.push("span.skimlinks-unlinked"); -1 !== m.location.href.indexOf(".google.") ?
                        (b.push("td.gac_c"), b.push("table[id=mbEnd]"), b.push("div[id=mbEnd]"), b.push("span[id=taw]"), b.push("td.std"), b.push("div.std"), b.push("table.gssb_e"), b.push("div.c"), b.push("div[id=tads]")) : -1 !== m.location.href.indexOf(".yahoo.") ? (b.push("ul.spns,ul.reducepx-spnslist"), b.push("ul[class*=reducepx-spnslist]"), b.push("ul[id=east]")) : -1 !== m.location.href.indexOf(".aol.") ? (b.push("div.sllLink"), b.push("div.n")) : -1 !== m.location.href.indexOf(".bing.") && (b.push("div.sb_adsW"), b.push("div[id=sidebar]"), b.push("div.sb_adsWv2"),
                            b.push("div.sb_adsNv2"), b.push("div[class*=sb_ads]")); return b
                }; var ue = function (b) { var c; var d = {}; var e = 0; for (c = b.length; e < c; e++) { var f = b[e]; d[f] = !0 } return d }; var ve = function () { nb = 0; y.publish("dom_changed") }; var we = function (b, c, d, e) {
                    var f, l, k; if ((f = b.className || ("function" === typeof b.getAttribute ? b.getAttribute("class") : void 0) || "") && ("skimlinks-unlinked" === f || "skimwords-link" === f)) return !1; if (0 === d.length && 0 === c.length) return x.traverse_node(b, !1, "", "", e); if (0 !== d.length) {
                        if (!Jc(b, d)) {
                            f = x.get_exclude_selector(d);
                            d = x.get_exclude_selector([]); var h = f.selector; var g = f.needed; var p = d.selector; if (0 === c.length || qb(b, c)) return x.traverse_node(b, g, p, h, e); f = []; var m = 0; for (k = c.length; m < k; m++) { d = c[m]; var n = Ic(b, d); n.length ? f.push(function () { var b; var c = []; var d = 0; for (b = n.length; d < b; d++)l = n[d], c.push(x.traverse_node(l, g, p, h, e)); return c }()) : f.push(void 0) } return f
                        }
                    } else if (0 !== c.length) {
                        if (qb(b, c)) return x.traverse_node(b, !1, "", "", e); k = []; f = 0; for (m = c.length; f < m; f++)d = c[f], n = Ic(b, d), n.length ? k.push(function () {
                            var b; var c =
                                []; var d = 0; for (b = n.length; d < b; d++)l = n[d], c.push(x.traverse_node(l, !1, "", "", e)); return c
                        }()) : k.push(void 0); return k
                    }
                }; E(function (b) { b = b.relatedNode || !1; if (!b || N.send_in_progress || g("stop_skimwords_ajax")) return !1; ob && clearTimeout(ob); nb++; 1 === nb && x.reset(); we(b, N.settings.includes || [], N.settings.excludes || [], N.settings.read_onlys || []); if (x.get_non_colliding_nodes() && 1 <= pb) return ob = I(function () { ve() }, 1E3) }); var x = function () {
                    var b = {}; return {
                        traverse: function (c, d, e, f) {
                            c = c || []; d = d || []; e = e || []; return b &&
                                b.length && !f ? b : this.traverse_dom(c, d, e)
                        }, traverse_dom: function (c, d, e) { var f, l; if (Ja) return b; Ja = !0; var k = this.get_exclude_selector(d); var h = this.get_exclude_selector([]); d = k.selector; k = k.needed; h = h.selector; 0 === c.length && c.push("body"); c = c.concat(e); for (var g = 0, p = c.length; g < p; g++) { var n = c[g]; n = jc(n); n = document.querySelectorAll(n); var m = f = 0; for (l = n.length; f < l; m = ++f)m = n[m], this.traverse_node(m, k, h, d, e) } return b }, traverse_node: function (c, d, e, f, l) {
                            var k = []; var h = 0; for (k.push({
                                node: c, tagName: "", readOnly: !1,
                                parent_id: null
                            }); h < k.length;)!(c = k[h].node) || se(c) || R(c, "noskimwords") || R(c, "noskim") || d && "" !== e && ma(c, e) || (k[h].readOnly = !1, c.nodeName && "#text" !== c.nodeName ? (k[h].tagName = c.nodeName, null !== k[h].parent_id && (k[h].readOnly = k[k[h].parent_id].readOnly), k[h].readOnly || (d && ma(c, f) ? k[h].readOnly = !0 : r(l, c.nodeName.toLowerCase()) && (k[h].readOnly = !0)), r(l, c.nodeName.toLowerCase()) && (k[h].readOnly = !0)) : null !== k[h].parent_id && (k[h].tagName = k[k[h].parent_id].tagName, k[h].readOnly = k[k[h].parent_id].readOnly), "msie" ===
                                p.detect.browser && 9 > p.detect.version && k[h].readOnly || (c.hasChildNodes() ? k = this.add_child_nodes(k[h], h, k) : this._add(c, !1, k[h].tagName, k[h].readOnly))), h++; return b
                        }, is_traversed: function () { return Ja }, is_good_tag: function (b) { return ue("p body div span ul ol li table tbody td tr th tfoot col colgroup em strong big small blockquote cite b dl dfn dd dt ins form legend noframes pre noscript center font i article section main".split(" "))[b.nodeName.toLowerCase()] ? !0 : !1 }, is_html: function (b) {
                            return (b = C(b)) &&
                                "<" === b[0]
                        }, get_non_colliding_nodes: function () { var c; var d = b; var e = {}; pb = 0; for (c in d) Hc.call(d, c) && (e[c] = d[c], pb++); return e }, get_as_hash_node_dict: function () { var c; var d = {}; for (c in b) { var e = b[c]; O(b, c) && (d[c] = e) } return d }, get_as_pair_array: function () { var c; var d = []; for (c in b) Hc.call(b, c) && d.push([c, b[c]]); return d }, get_exclude_selector: function (b, d) {
                            var c, f, l; var k = []; if (!d) { d = document.getElementsByTagName("body"); if (!d.length) return { needed: !1, selector: "" }; d = d[0] } b = b.concat(te()); var h = c = 0; for (f =
                                b.length; c < f; h = ++c)b[h] = jc(b[h]); c = !1; f = ""; var g = 0; for (l = b.length; g < l; g++)h = b[g], re(d, h) && k.push(h); k.length && (c = !0, f = k.join(",").replace("class=", "class^=")); return { needed: c, selector: f }
                        }, length: function () { return Object.keys(b).length }, reset: function () { b = []; return Ja = !1 }, add_child_nodes: function (b, d, e) {
                            var c, l; var k = b.node.childNodes; var h = 0; for (l = k.length; h < l; h++)(c = k[h]) && c.nodeName && !this._add(c, !1, b.tagName, b.readOnly) && this.is_good_tag(c) && e.push({
                                node: c, tagName: b.tagName, readOnly: b.readOnly,
                                parent_id: d
                            }); return e
                        }, add_node: function (b, d) { return this._add(b, d) }, _add: function (c, d, e, f) { var l = null; "#text" === c.nodeName && (l = C(c.nodeValue)); d = d || !1; if ("msie" === p.detect.browser && 9 > p.detect.version && f) return !1; if ("msie" !== p.detect.browser || 9 <= p.detect.version) try { c.meta = { ElementTag: e, ReadOnly: f } } catch (k) { } if (l && !this.is_html(l) && 3 <= l.length) { if (d && "-1" === d) return !1; d = this._skim_id_hash(l, d); if (!d) return !1; b[d] = c } return l ? !0 : !1 }, _skim_id_hash: function (b) {
                            if (!b) return ""; var c = C(b.replace(/\s+/g,
                                " ")).length; b = b.replace(/[:\s]*/g, ""); c = c + ":" + b.substring(0, 20); return c = pe(c)
                        }
                    }
                }(); var Bd = function (b, c, d) {
                    if (da) return !1; var e = (b.data ? b.data : b.childNodes[0].data).replace(c.repl_regex, c.replacement); var f = document.createElement("span"); c = document.createDocumentFragment(); f.innerHTML = e; if ("msie" === p.detect.browser && 9 > p.detect.version) {
                        e = b.previousSibling; var l = /^\s/; e && e.nodeValue && e.nodeValue.length && l.test(e.nodeValue[e.nodeValue.length - 1]) && (e.nodeValue += " "); (e = b.nextSibling) && e.nodeValue &&
                            e.nodeValue.length && l.test(e.nodeValue[0]) && (e.nodeValue = " " + e.nodeValue)
                    } for (; f.firstChild;)"#text" === f.firstChild.nodeName ? (e = c.appendChild(f.firstChild), x.add_node(e)) : (e = c.appendChild(f.firstChild), null === e || d || vb(e, !0)); if (d = b.parentNode) return d.replaceChild(c, b)
                }; var u = { campaign_ids: [], loading_started: (new Date).getTime(), linksImpressions: { skimlinks: { count: 0, urls: {} }, skimwords: { count: 0, urls: {} }, unlinked: { count: 0, urls: {} } }, awaitedModules: [] }, Ad = new L, Oc = [".noskim", ".noskimwords", ".noskimw"];
    var Cd = function (b) { gb(b, "click", nc); Dc || gb(b, "contextmenu", nc); return vb(b, !1) }; var xe = function (b, c, d, e) { var f = oe(b); c = fb(c); f = "(?:^|[\\s]+)(?:\\\\;\\.|,\\'\\\"\\(\\)\\/:\\?])?(" + f + ")(?:\\'s)?(?:[\\\\;,\\.\\'\\\"|\\(\\)\\/:\\?])*(?:[\\s]+|$)"; b = Ib(fb(b)); c = '$1$2<a href="' + c + '" class="' + e + '"  data-skimwords-word="' + b + '"  data-skim-creative="' + d + '" title="">$3$4</a>$5$6'; d = f.replace(/\?:/g, ""); return { search_regex: new RegExp(f, "i"), repl_regex: new RegExp(d, "i"), repl_text: c } }; var Mc = function (b, c) {
        var d,
        e, f; if (!b || Jc(b, ["span.skimlinks-unlinked"])) return [[], []]; var l = b.data; var k = []; var h = []; for (e = /$|\b(?:https?:\/\/)?(?:[-_a-zA-Z]+\.)*(?:[-_a-zA-Z]{2,}\.[-_\w]{2,5}\b)[^[\]\s]*\b|$/gi; d = e.exec(l);) {
            var g = d[0]; if ("link.phrase" !== g) {
                var n = d.index; if (0 < C(g).length && -1 === g.indexOf("/.") && -1 === g.indexOf("...")) {
                    var m = g; 0 !== g.indexOf("http") && 0 !== g.indexOf("//") && (m = "msie" === p.detect.browser && 6 >= p.detect.version ? "http://" + g : "//" + g); d = H(m); var q = Pc({
                        OriginalPhrase: "" + g, Url: m, Title: "", ActionType: 2, GroupId: 0,
                        Unlinked: !0
                    }); (f = xe("" + g, m, Ga.creative, "skimlinks-unlinked")) && h.push({ start: n, text: "" + fb(g), domain: d, repl_regex: f.repl_regex, replacement: f.repl_text, regex: f.search_regex, phrase: q, link: m }); k.push(d)
                } else break
            }
        } if (h.length) {
            var r = c; m = "skimlinks-unlinked"; var v; g = document.createDocumentFragment(); var t = 0; d = []; n = b.nodeValue; e = []; l = b.parentNode; m || (m = "skimwords-potential"); r || (r = "-1"); if (l) {
                q = 0; for (v = h.length; q < v; q++) {
                    var u = h[q]; var w = document.createElement("span"); w.className = m; f = document.createTextNode(n.substring(t,
                        u.start)); g.appendChild(f); w.innerHTML = u.text; g.appendChild(w); t = {}; t.node = w; t.match = u; B(t, "occurrence", u.target_occurrence); d.push(t); t = u.start + u.text.length; e.push(f); x.add_node(f, r)
                } h = document.createTextNode(n.substring(t)); e.push(h); g.appendChild(h); x.add_node(h, r); l.replaceChild(g, b)
            } r = [d, e]; h = r[0]; r = r[1]; g = 0; for (e = h.length; g < e; g++)l = h[g], Ga.url_spans.push(l)
        } r || (r = []); return [k, r]
    }; var Nc = function (b) {
        var c; if (q.exclude.length) {
            var d = q.exclude; var e = 0; for (c = d.length; e < c; e++) {
                var f = d[e]; if (f ===
                    b) return !1
            }
        } if (q.include.length) { d = q.include; e = 0; for (c = d.length; e < c; e++)if (f = d[e], f === b) return !0; return !1 } return !0
    }; var Fd = ["skimlinks_included_ids", "skimlinks_byrel", "skimlinks_exrel", "skimlinks_included_classes"], ye = function () {
        function b() { n(this, "SERVICES", b.SERVICES); n(this, "getService", cb); n(this, "trackEvent", ec); y.on("skim_js_init", this.onInit.bind(this)); y.on("skim_js_start", this.onStart.bind(this)); Q.whenBeaconFullyReady(this.whenBeaconFullyReady.bind(this)) } var c = b.prototype; c.onInit = function () { };
        c.onStart = function () { }; c.whenBeaconFullyReady = function () { }; c.publishEvent = function (b, c) { y.publish(b, c) }; c.onEvent = function (b, c) { y.on(b, c) }; c.registerClickInterceptor = function (b, c) { cb(Y.ANCHOR_CLICK_INTERCEPTOR).registerInterceptor(b, c) }; return b
    }(); n(ye, "SERVICES", Y); new L; var ib = !1, aa = !1, ja = null, ka = null, Td = {
        detect: function (b) {
            a: {
                try { var c = navigator.userAgent.toLowerCase(); if (-1 === c.indexOf("firefox") && -1 === c.indexOf("chrome")) { aa = !0; ib = !1; break a } } catch (d) { } c = "" + 11 * Math.random(); ja = new Image; ja.onload =
                    uc; ja.src = "//p.skimresources.com/px.gif?ch=*&rn=*".replace(/\*/, "1").replace(/\*/, c); ka = new Image; ka.onload = uc; ka.src = "//p.skimresources.com/px.gif?ch=*&rn=*".replace(/\*/, "2").replace(/\*/, c)
            } tc(b, 250)
        }
    }; new L; var Md = {}, Kc = Hb([!!Cc && "mouseup", "click"]), ze = ["auxclick", "contextmenu", "touchstart"], Ae = function () {
        function b(b, c) {
            n(this, "type", void 0); n(this, "anchor", void 0); n(this, "affiliationType", void 0); n(this, "nativeEvent", void 0); n(this, "clientClickId", void 0); n(this, "targetedInterceptor", void 0);
            var d = id(b); this.type = this.getInternalClickType(c); this.anchor = b; this.affiliationType = d; this.nativeEvent = c; this.clientClickId = Ta(); this.targetedInterceptor = null
        } var c = b.prototype; c.setAnchorClickInterceptorTarget = function (b) { this.targetedInterceptor = b }; c.setSourceApp = function (b) { var c = this.anchor; D(c).sourceApp = b; Aa(c) }; c.setLinkSwappingMatchId = function (b) { var c = this.anchor; D(c).linkSwappingMatchId = b; Aa(c) }; c.getInternalClickType = function (b) {
            return r(Kc, b.type) && 0 === b.button ? X.LEFT_CLICK : "auxclick" !==
                b.type && "click" !== b.type || 1 !== b.button ? X.OTHER_CLICK : X.MIDDLE_CLICK
        }; return b
    }(), Pd = function () {
        function b() {
            var b = this; n(this, "interceptors", void 0); n(this, "onClick", function (c, d) { var e = wb(c); e && (e.skimlinksOriginalHref && e.skimlinksRestoreSwappedLink(), e = new Ae(e, c), b.dispatchAnchorClick(e, d)) }); n(this, "registerInterceptor", function (c, d) {
                if (!t(c)) throw Error("InterceptorHandler should be a function"); if (F(d)) throw Error("Missing priority for click interceptor"); b.interceptors.push({ handler: c, priority: d });
                b.interceptors.sort(function (b, c) { return b.priority - c.priority })
            }); n(this, "triggerLeftClickFromMouseEvent", function (c, d) { var e = b.findInterceptorsWithPriority(d); if (F(d)) b.onClick(c); else if (e.length) b.onClick(c, e) }); this.interceptors = []; this.initGlobalClickHandler()
        } var c = b.prototype; c.initGlobalClickHandler = function () { wc(K, Kc, this.onClick, !0); wc(K, ze, this.onClick, !0) }; c.dispatchAnchorClick = function (b, c) {
            var d = this; (c || this.interceptors).some(function (c) {
                var e = c.handler; return d.isTargetedInterceptor(c,
                    b) ? e(b) : !1
            })
        }; c.findInterceptorsWithPriority = function (b) { return ta(this.interceptors, function (c) { return c.priority === b }) }; c.isTargetedInterceptor = function (b, c) { var d = c.targetedInterceptor === b.priority; return !c.targetedInterceptor || d }; return b
    }(), la = E(function () { kc(Z.POST_PAGE_LOAD); document.removeEventListener("DOMContentLoaded", la); document.removeEventListener("load", la) }), Rd = { skimlinks: !1, skimwords: !1, unlinked: !1, audience: !1, GDPRConsent: !1, incentivePopup: !1 }; Jb && E(function () {
        y.on("skim_js_init",
            ud); y.on("skim_js_init", yd); y.on("skim_js_init", Hd); y.on("skim_js_start", Id); Qd()
    })()
})();
