!function () {
  {
    let e; (d = e = e || {})[d.V1 = 1] = "V1", d[d.V2 = 2] = "V2"; let n; (d = n = n || {})[d.GDPR_DOESNT_APPLY = 0] = "GDPR_DOESNT_APPLY", d[d.GDPR_APPLIES_GLOBAL = 11] = "GDPR_APPLIES_GLOBAL", d[d.GDPR_APPLIES_PUBLISHER = 12] = "GDPR_APPLIES_PUBLISHER", d[d.UNSUCCESSFUL_CMP_RESPONSE = 21] = "UNSUCCESSFUL_CMP_RESPONSE", d[d.CMP_NOT_FOUND = 22] = "CMP_NOT_FOUND", d[d.CMP_NOT_READY = 23] = "CMP_NOT_READY", d[d.OTHER = 24] = "OTHER", d[d.UNKNOWN = 25] = "UNKNOWN"; let t; (d = t = t || {})[d.GDPR_DOESNT_APPLY = 0] = "GDPR_DOESNT_APPLY", d[d.GDPR_APPLIES_GLOBAL_CLASSIC = 110] = "GDPR_APPLIES_GLOBAL_CLASSIC", d[d.GDPR_APPLIES_GLOBAL_OVERLAY = 111] = "GDPR_APPLIES_GLOBAL_OVERLAY", d[d.GDPR_APPLIES_GLOBAL_TEADS_BECAUSE_NO_CMP = 112] = "GDPR_APPLIES_GLOBAL_TEADS_BECAUSE_NO_CMP", d[d.GDPR_APPLIES_PUBLISHER_CLASSIC = 120] = "GDPR_APPLIES_PUBLISHER_CLASSIC", d[d.GDPR_APPLIES_PUBLISHER_OVERLAY = 121] = "GDPR_APPLIES_PUBLISHER_OVERLAY", d[d.GDPR_APPLIES_PUBLISHER_TEADS_BECAUSE_NO_CMP = 122] = "GDPR_APPLIES_PUBLISHER_TEADS_BECAUSE_NO_CMP", d[d.GDPR_APPLIES_PUBLISHER_TEADS_AFTER_TIMEOUT = 123] = "GDPR_APPLIES_PUBLISHER_TEADS_AFTER_TIMEOUT", d[d.GDPR_APPLIES_PUBLISHER_TEADS_AFTER_CMP_ERROR = 124] = "GDPR_APPLIES_PUBLISHER_TEADS_AFTER_CMP_ERROR", d[d.GDPR_APPLIES_PUBLISHER_CLASSIC_BECAUSE_USER_ACTION = 125] = "GDPR_APPLIES_PUBLISHER_CLASSIC_BECAUSE_USER_ACTION", d[d.GDPR_APPLIES_PUBLISHER_CLASSIC_BECAUSE_EXISTING_CONSENT = 126] = "GDPR_APPLIES_PUBLISHER_CLASSIC_BECAUSE_EXISTING_CONSENT", d[d.GDPR_APPLIES_PUBLISHER_CLASSIC_BECAUSE_AMP_CONSENT_SHARED_DATA = 127] = "GDPR_APPLIES_PUBLISHER_CLASSIC_BECAUSE_AMP_CONSENT_SHARED_DATA", d[d.UNSUCCESSFUL_CMP_RESPONSE = 210] = "UNSUCCESSFUL_CMP_RESPONSE", d[d.CMP_ERROR = 211] = "CMP_ERROR", d[d.CMP_NOT_FOUND = 220] = "CMP_NOT_FOUND", d[d.CMP_NOT_READY_NO_RESPONSE = 230] = "CMP_NOT_READY_NO_RESPONSE", d[d.CMP_NOT_READY_JS_NOT_LOADED = 231] = "CMP_NOT_READY_JS_NOT_LOADED", d[d.CMP_NOT_READY_NO_PING_RESPONSE = 232] = "CMP_NOT_READY_NO_PING_RESPONSE", d[d.OTHER = 240] = "OTHER", d[d.UNKNOWN = 250] = "UNKNOWN"; const Z = e => { return !!e?.share_id?.name && !!e?.share_id?.value }; function c(e, t) { return Object.prototype.hasOwnProperty.call(e, t) } function j(e) { return "boolean" == typeof e } function S(e) { return void 0 === e } function P(e) { return null === e } function x(e) { return "string" == typeof e } function J(e) { return "function" == typeof e } function W(e) { return !!e && "object" == typeof e } function E(t) { return (...e) => !t.call(null, ...e) } const A = () => { }, ee = e => { switch (e) { case "idl": return "liveRampId"; case "pfvi": return "publisherFirstPartyViewerId"; case "uid2": return "unifiedId2"; default: return e } }, L = e => e.teads_analytics?.shared_data?.reduce((e, t) => { if (Z(t[0])) { const n = t[0].share_id; n.name = ee(n.name), e.push(n) } return e }, []) || [], te = /\s*_tfpvi=/, R = e => { e = e.document.cookie?.split(";").find(e => te.test(e))?.split("=")[1] || null; return e && decodeURIComponent(e) }, ne = e => { document.createElement("img").src = e }; let i; try { i = location.search.includes("teadsCookielessDebug") } catch (e) { i = !1 } const O = { debug: (...e) => { i && console.debug("[TEADS_COOKIELESS]", ...e) }, error: (...e) => { i && console.error("[TEADS_COOKIELESS]", ...e) }, info: (...e) => { i && console.log("[TEADS_COOKIELESS]", ...e) }, warn: (...e) => { i && console.warn("[TEADS_COOKIELESS]", ...e) } }; let s; (d = s = s || {}).TcLoaded = "tcloaded", d.CmpUiShown = "cmpuishown", d.UserActionComplete = "useractioncomplete"; let a; (d = a = a || {}).Stub = "stub", d.Loading = "loading", d.Loaded = "loaded", d.Error = "error"; let _; (d = _ = _ || {}).GetTCData = "getTCData", d.Ping = "ping", d.AddEventListener = "addEventListener", d.RemoveEventListener = "removeEventListener"; const I = 10, T = e.V2, N = (n, i) => new Promise(t => {
      n ? re(n) ? (O.info("[TCFV2] Call ping command"), m({
        api: n, command: _.Ping, callback: e => {
          Se(e) ? e.cmpStatus === a.Stub || "visible" === e.displayStatus ? (O.info(`[TCFV2] ping: CMP not ready (cmp: ${e.cmpStatus}, display: ${e.displayStatus}) -> Calling addEventListener to wait for the CMP`), D(n, t, i)) : (O.info("[TCFV2] ping: CMP is ready -> Calling getTCData"), m({
            api: n, command: _.GetTCData, callback: e => {
              e.eventStatus === s.CmpUiShown ? (O.info("[TCFV2] getTCData: CPM UI shown - Calling addEventListener"), D(n, t, i)) : w(e) ? (O.info("[TCFV2] getTCData: Valid response", e), V(e) ? (O.info("[TCFV2] getTCData: GDPR applies"), t(g(e.tcString, e.eventStatus))) : B(e) ? (O.info("[TCFV2] getTCData: GDPR does not apply"), t(U)) : (O.info("[TCFV2] getTCData: Not enough info -> Calling addEventListener"), D(n, t, i))) : (O.info(`[TCFV2] getTCData: Invalid response for filters: [
                        not(isUndefined),
                        not(isNull),
                        isObject,
                        hasValidGdprApplies,
                        (_: { gdprApplies: boolean }) => !_.gdprApplies || hasValidTcString(_)
                      ] = `+ G(e), e), t(f))
            }, timeout: i + I, resolve: t, timeoutMessage: "[TCFV2] getTCData: timeout"
          })) : (O.info(`[TCFV2] ping: Invalid response for filters: [
                not(isUndefined),
                not(isNull),
                isObject,
                hasValidCmpLoaded,
                hasValidGdprApplies,
                hasValidCmpStatus
              ] = ${JSON.stringify(ce(e))} -> retrying`), ie(n, t, i))
        }, timeout: i + I, resolve: t, timeoutCallback: () => D(n, t, i), timeoutMessage: "[TCFV2] ping: timeout -> Calling addEventListener to wait for the CMP"
      })) : (O.info("[TCFV2] Invalid api (check is Function)", n), t(f)) : (O.info("[TCFV2] No api"), t(se))
    }).catch(() => _e), ie = (e, t, n) => { n - I <= 0 ? t(f) : setTimeout(() => { t(N(e, n - 50)) }, 50) }, D = (a, o, e) => {
      m({
        api: a, command: _.AddEventListener, callback: t => {
          var e, n, i; i = t, w(i) && M.every(e => e(i.listenerId)) && y(i) ? (e = e => { m({ api: a, command: _.RemoveEventListener, callback: A, parameter: t.listenerId }), o(e) }, O.info("[TCFV2] addEventListener: Valid event", t), V(t) ? (O.info("[TCFV2] addEventListener: GDPR applies"), t.eventStatus === s.CmpUiShown ? O.info("[TCFV2] addEventListener: CPM UI shown - ignoring event and wait for a user interaction") : e(g(t.tcString, t.eventStatus))) : B(t) ? (O.info("[TCFV2] addEventListener: GDPR does not apply"), e(U)) : (O.info("[TCFV2] addEventListener: Unknown response"), e(oe))) : O.info(`[TCFV2] addEventListener: Invalid response for filters on tcData: [
              not(isUndefined),
              not(isNull),
              isObject,
              hasValidGdprApplies,
              (_: { gdprApplies: boolean }) => !_.gdprApplies || hasValidTcString(_)
            ] = ${G(t)} or for filters on tcData.listenerId: [not(isUndefined), not(isNull)] = ${JSON.stringify((n = t, M.map(e => e(n.listenerId))))} or for filter hasValidEventStatus = ` + y(t), t)
        }, timeout: e, resolve: o, timeoutMessage: "[TCFV2] AddEventListener: timeout"
      })
    }; var d = (e, t) => ({ reason: e, status: t, consent: "", apiVersion: T }), l, p, C, X, q, u, z; const g = (e, t) => ({ consent: e, reason: Pe(t), status: n.GDPR_APPLIES_PUBLISHER, apiVersion: T }), ae = d(t.CMP_NOT_READY_NO_RESPONSE, n.CMP_NOT_READY), oe = d(t.UNKNOWN, n.UNKNOWN), se = d(t.CMP_NOT_FOUND, n.CMP_NOT_FOUND), f = d(t.OTHER, n.UNSUCCESSFUL_CMP_RESPONSE), _e = d(t.CMP_ERROR, n.UNSUCCESSFUL_CMP_RESPONSE), U = d(t.GDPR_DOESNT_APPLY, n.GDPR_DOESNT_APPLY), m = ({ api: e, command: n, resolve: i, callback: a = A, parameter: o, timeout: s, timeoutCallback: _, timeoutMessage: r }) => { try { let t; i && s && (t = setTimeout(() => { r && O.info(r), _ ? _() : i(ae) }, s)), e(n, T, (...e) => { clearTimeout(t), a(...e) }, o) } catch (e) { } }, re = e => J(e), v = [E(S), E(P), W, e => c(e, "cmpLoaded") && j(e.cmpLoaded), d = e => c(e, "gdprApplies") && (S(e.gdprApplies) || j(e.gdprApplies)), e => c(e, "cmpStatus") && x(e.cmpStatus) && [a.Loading, a.Error, a.Loaded, a.Stub].includes(e.cmpStatus.toLowerCase())], ce = t => v.map(e => e(t)), Se = t => v.every(e => e(t)), h = [E(S), E(P), W, d, e => !e.gdprApplies || (e => c(e, "tcString") && x(e.tcString))(e)], G = t => h.map(e => e(t)), w = t => h.every(e => e(t)), y = e => c(e, "eventStatus") && Object.keys(s).map(e => s[e]).includes(e.eventStatus), M = [E(S), E(P)], V = e => !!e.gdprApplies, B = e => !1 === e.gdprApplies, Pe = e => ({ [s.CmpUiShown]: t.GDPR_APPLIES_PUBLISHER_OVERLAY, [s.TcLoaded]: t.GDPR_APPLIES_PUBLISHER_CLASSIC_BECAUSE_EXISTING_CONSENT, [s.UserActionComplete]: t.GDPR_APPLIES_PUBLISHER_CLASSIC_BECAUSE_USER_ACTION })[e] || t.GDPR_APPLIES_PUBLISHER_CLASSIC; let o; (o = o || {}).GetUSPData = "getUSPData"; let r; (r = r || {})[r._1 = 1] = "_1"; const Ee = e => J(e), de = (e, t, n) => { try { e(t, r._1, n) } catch (e) { } }, F = { tcfv2: null, ccpa: null }, le = void 0, b = e => "" === e, H = e => "string" == typeof e && !b(e); function Q(e) { const t = e["status"]; return e.text().then(e => 200 === t ? H(e) || b(e) ? Promise.resolve(e) : Promise.reject("cookie operation not expected: " + e) : 204 === t ? Promise.resolve(le) : Promise.reject("status code not expected: " + t)) } const pe = (e, n) => { const t = Object.keys(n); var e = e + t.reduce((e, t) => "" + e + t + `=${encodeURIComponent(n[t])}&`, "?"), i = { credentials: "include", ..."browsingTopics" in document && document?.featurePolicy?.allowedFeatures?.()?.includes?.("browsing-topics") ? { browsingTopics: !0 } : {} }; return fetch(e, i).then(Q) }, Ce = window.teads_analytics?.tl || "https://s8t.teads.tv/logs/publishers/interface", ue = window.teads_analytics?.sa || "https://at.teads.tv/fpc", Y = window.teads_analytics?.sv || "471b531", k = () => window.teads_analytics?.analytics_tag_id?.replace("[", "").replace("]", "").replace("-", "_").toUpperCase(), K = (e, t) => { try { var n = JSON.stringify({ source: "script-analytics-tag", errorMessage: e, exception: t, analyticsTagId: k(), scriptVersion: Y }); ne(Ce + "?" + encodeURIComponent(n)), O.error(n) } catch (e) { O.error("Error while trying to log on sumo:", e) } }; if (window.top === window) try { const $ = N(window.__tcfapi, 1e3), Ae = (u = window.__uspapi, z = 1e3, new Promise(n => { const i = setTimeout(() => n({ _tag: "timeout" }), z); u && Ee(u) ? de(u, o.GetUSPData, (e, t) => (clearTimeout(i), t && e ? (O.info("[CCPA] success:", e), n({ _tag: "successful", usPrivacyString: e.uspString })) : (O.info(`[CCPA] Unsuccessful - success: ${t} - uspData: `, e), n({ _tag: "unsuccessful" })))) : (clearTimeout(i), O.info(u ? "[CCPA] Invalid api (check is Function)" : "[CCPA] No api", u), n({ _tag: "not-found" })) }));[l, { getTfpvi: p, getSharedIds: C, tcfv2: X, ccpa: q }] = [window, { tcfv2: $, ccpa: Ae, getTfpvi: R, getSharedIds: L }], q.then(e => F.ccpa = e), X.then(e => F.tcfv2 = e), l.addEventListener("message", ({ data: e, source: t, origin: n }) => { e && "string" == typeof e && "teads-get-viewer-info" === e && t.postMessage(JSON.stringify({ teadsViewerInfo: { tfpvi: p(l), sharedIds: C(l), tcfv2: F.tcfv2, ccpa: F.ccpa } }), n) }), l.teads_analytics && (l.teads_analytics.getViewerInfo = () => ({ teadsViewerInfo: { tfpvi: p(l), sharedIds: C(l), tcfv2: F.tcfv2, ccpa: F.ccpa } })), $.then(e => e.status === n.CMP_NOT_FOUND ? { ...e, apiVersion: null } : e).then(n => { Ae.then(e => { var e = "successful" === e._tag ? e.usPrivacyString : "", t = L(window); pe(ue, { analytics_tag_id: k() || "", tfpvi: R(window) || "", gdpr_status: n.status, gdpr_reason: n.reason, gdpr_consent: n.consent, ccpa_consent: e, shared_ids: 0 < t?.length ? JSON.stringify(t) : "", sv: Y }).then(e => { H(e) ? (O.debug("[COOKIE] Write"), ((e, t) => { try { return document.cookie = `${encodeURIComponent(e)}=${encodeURIComponent(t)}; expires=${new Date(Date.now() + 31536e6).toUTCString()}; path=/`, !0 } catch (e) { return !1 } })("_tfpvi", e) || K("setCookie", "error")) : b(e) ? (O.debug("[COOKIE] Delete"), (e => { try { return document.cookie = encodeURIComponent(e) + "=; expires=Mon, 03 Oct 2011 13:55:21 GMT; path=/", !0 } catch (e) { return !1 } })("_tfpvi") || K("deleteCookie", "error")) : O.debug("[COOKIE] Noop") }).catch(e => K("fetchTeadsFirstPartyCookie", e)) }).catch(e => K("Unhandled exception", e.message)) }).catch(e => K("Unhandled exception", e.message)) } catch (e) { K("Unhandled exception", e.message) } else K("not top window", window.location.href)
  }
}();