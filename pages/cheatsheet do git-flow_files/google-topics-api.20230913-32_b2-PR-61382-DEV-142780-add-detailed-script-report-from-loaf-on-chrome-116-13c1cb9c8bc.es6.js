/*! 20230913-32_b2-PR-61382-DEV-142780-add-detailed-script-report-from-loaf-on-chrome-116-13c1cb9c8bc */

(o => { const t = "top"; function e() { try { if (!o.browsingTopics) return; return o.browsingTopics().then(o => { const e = []; for (let t = 0; t < o.length; t++)if (o[t].topic && o[t].taxonomyVersion) { const i = { i: o[t].topic, v: o[t].taxonomyVersion }; e.push(i) } TRC.pageManager.storeValue(t, JSON.stringify(e)) }).catch(() => { }) } catch (o) { } } function i() { let o, e; try { if ((e = (o = TRC.pageManager.getValue(t)) ? JSON.parse(o) : null) && e.length > 0) return e } catch (o) { } } e(), TRC.GoogleTopicsApi = { readGoogleTopicsApiFromLocalStorage: i }, window._trcIsUTactive && (TRC.GoogleTopicsApi.testHelpers = { saveGoogleTopicsApiInLocalStorage: e }) })(document);