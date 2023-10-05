define("discourse/plugins/discourse-local-dates/discourse/components/discourse-local-dates-create-form", ["exports", "discourse-common/utils/decorators", "@ember/component", "@ember/object", "I18n", "discourse-common/config/environment", "rsvp", "discourse/lib/text", "discourse-common/lib/debounce", "@ember/utils", "discourse/lib/load-script", "@ember/object/computed", "discourse/lib/computed", "@ember/runloop", "discourse-common/lib/get-owner", "discourse/lib/local-dates", "discourse/plugins/discourse-local-dates/lib/local-date-markup-generator"], (function (e, t, o, n, a, i, r, s, l, d, c, m, u, f, p, h, g) {
    "use strict"
    var z, _, b, v, y, T, w, D, P, k, L, O, M, C
    function F(e, t, o, n, a) {
        var i = {}
        return Object.keys(n).forEach((function (e) { i[e] = n[e] })), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = o.slice().reverse().reduce((function (o, n) { return n(e, t, o) || o }), i), a && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(a) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
    } Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    var x = o.default.extend((z = (0, t.observes)("computedConfig.{from,to,options}", "options", "isValid", "isRange"), _ = (0, t.default)("date", "toDate", "toTime"), b = (0, t.default)("computedConfig", "isRange"), v = (0, t.default)("date", "time", "isRange", "options.{format,timezone}"), y = (0, t.default)("toDate", "toTime", "isRange", "options.{timezone,format}"), T = (0, t.default)("recurring", "timezones", "timezone", "format"), w = (0, t.default)("fromConfig.{date}", "toConfig.{date}", "options.{recurring,timezones,timezone,format}"), D = (0, t.default)("currentUserTimezone"), P = (0, t.default)("formats"), k = (0, t.default)("advancedMode"), L = (0, t.default)("computedConfig.{from,to,options}", "options", "isValid", "isRange"), O = (0, t.default)("fromConfig.dateTime"), M = (0, t.default)("toConfig.dateTime", "toSelected"), C = {
        timeFormat: "HH:mm:ss", dateFormat: "YYYY-MM-DD", dateTimeFormat: "YYYY-MM-DD HH:mm:ss", date: null, toDate: null, time: null, toTime: null, format: null, formats: null, recurring: null, advancedMode: !1, timezone: null, fromSelected: null, fromFilled: (0, m.notEmpty)("date"), toSelected: null, toFilled: (0, m.notEmpty)("toDate"), init() { this._super(...arguments), this._picker = null, this.setProperties({ timezones: [], formats: (this.siteSettings.discourse_local_dates_default_formats || "").split("|").filter((e => e)), timezone: moment.tz.guess(), date: moment().format(this.dateFormat) }) }, didInsertElement() { this._super(...arguments), this._setupPicker().then((e => { this._picker = e, this.send("focusFrom") })) }, _renderPreview() {
            (0, l.default)(this, (function () {
                const e = this.markup
                e && (0, s.cookAsync)(e).then((e => { this.set("currentPreview", e), (0, f.schedule)("afterRender", (() => { (0, h.applyLocalDates)(document.querySelectorAll(".preview .discourse-local-date"), this.siteSettings) })) }))
            }), i.INPUT_DELAY)
        }, isRange: (e, t, o) => e && (t || o), isValid(e, t) {
            const o = e.from
            if (!e.from.dateTime || !e.from.dateTime.isValid()) return !1
            if (t) {
                const t = e.to
                if (!t.dateTime || !t.dateTime.isValid() || t.dateTime.diff(o.dateTime) < 0) return !1
            } return !0
        }, fromConfig(e, t, o) {
            let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
            const i = !t
            let r
            r = i ? moment.tz(e, a.timezone) : moment.tz("".concat(e, " ").concat(t), a.timezone), i || (t = r.format(this.timeFormat))
            let s = a.format
            return i && this.formats.includes(s) && (s = "LL"), n.default.create({ date: r.format(this.dateFormat), time: t, dateTime: r, format: s, range: !!o && "start" })
        }, toConfig(e, t, o) {
            let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
            const i = !t
            let r
            t && !e && (e = moment().format(this.dateFormat)), r = i ? moment.tz(e, a.timezone).endOf("day") : moment.tz("".concat(e, " ").concat(t), a.timezone), i || (t = r.format(this.timeFormat))
            let s = a.format
            return i && this.formats.includes(s) && (s = "LL"), n.default.create({ date: r.format(this.dateFormat), time: t, dateTime: r, format: s, range: !!o && "end" })
        }, options: (e, t, o, a) => n.default.create({ recurring: e, timezones: t, timezone: o, format: a }), computedConfig: (e, t, o) => n.default.create({ from: e, to: t, options: o }), currentUserTimezone: () => moment.tz.guess(), allTimezones: () => moment.tz.names(), timezoneIsDifferentFromUserTimezone: (0, u.propertyNotEqual)("currentUserTimezone", "options.timezone"), formattedCurrentUserTimezone: e => e.replace("_", " ").replace("Etc/", "").replace("/", ", "), previewedFormats: e => e.map((e => ({ format: e, preview: moment().format(e) }))), recurringOptions() {
            const e = "discourse_local_dates.create.form.recurring"
            return [{ name: a.default.t("".concat(e, ".every_day")), id: "1.days" }, { name: a.default.t("".concat(e, ".every_week")), id: "1.weeks" }, { name: a.default.t("".concat(e, ".every_two_weeks")), id: "2.weeks" }, { name: a.default.t("".concat(e, ".every_month")), id: "1.months" }, { name: a.default.t("".concat(e, ".every_two_months")), id: "2.months" }, { name: a.default.t("".concat(e, ".every_three_months")), id: "3.months" }, { name: a.default.t("".concat(e, ".every_six_months")), id: "6.months" }, { name: a.default.t("".concat(e, ".every_year")), id: "1.years" }]
        }, _generateDateMarkup: (e, t, o, n) => (0, g.default)(e, t, o, n), toggleModeBtnLabel: e => e ? "discourse_local_dates.create.form.simple_mode" : "discourse_local_dates.create.form.advanced_mode", markup(e, t, o, n) {
            let a
            return o && e.from && (a = e.to && e.to.range ? this._generateDateMarkup(e.from, t, n, e.to) : this._generateDateMarkup(e.from, t, n)), a
        }, formattedFrom: e => e.format("LLLL"), formattedTo(e, t) {
            const o = t ? "&nbsp;" : a.default.t("discourse_local_dates.create.form.until")
            return e.isValid() ? e.format("LLLL") : o
        }, actions: {
            setTime(e) { this._setTimeIfValid(e.target.value, "time") }, setToTime(e) { this._setTimeIfValid(e.target.value, "toTime") }, eraseToDateTime() { this.setProperties({ toDate: null, toTime: null }), this._setPickerDate(null) }, focusFrom() { this.setProperties({ fromSelected: !0, toSelected: !1 }), this._setPickerDate(this.get("fromConfig.date")), this._setPickerMinDate(null) }, focusTo() { this.setProperties({ toSelected: !0, fromSelected: !1 }), this._setPickerDate(this.get("toConfig.date")), this._setPickerMinDate(this.get("fromConfig.date")) }, advancedMode() { this.toggleProperty("advancedMode") }, save() {
                const e = this.markup
                e && (this._closeModal(), this.insertDate(e))
            }, cancel() { this._closeModal() }
        }, _setTimeIfValid(e, t) { (0, d.isEmpty)(e) ? this.set(t, null) : /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(e) && this.set(t, e) }, _setupPicker() {
            return new r.Promise((e => {
                (0, c.default)("/javascripts/pikaday.js").then((() => {
                    const t = {
                        field: this.element.querySelector(".fake-input"), container: this.element.querySelector("#picker-container-".concat(this.elementId)), bound: !1, format: "YYYY-MM-DD", reposition: !1, firstDay: 1, setDefaultDate: !0, keyboardInput: !1, i18n: { previousMonth: a.default.t("dates.previous_month"), nextMonth: a.default.t("dates.next_month"), months: moment.months(), weekdays: moment.weekdays(), weekdaysShort: moment.weekdaysMin() }, onSelect: e => {
                            const t = moment(e).format("YYYY-MM-DD")
                            this.fromSelected && this.set("date", t), this.toSelected && this.set("toDate", t)
                        }
                    }
                    e(new Pikaday(t))
                }))
            }))
        }, _setPickerMinDate(e) { (0, f.schedule)("afterRender", (() => { moment(e, this.dateFormat).isValid() ? this._picker.setMinDate(moment(e, this.dateFormat).toDate()) : this._picker.setMinDate(null) })) }, _setPickerDate(e) { (0, f.schedule)("afterRender", (() => { moment(e, this.dateFormat).isValid() ? this._picker.setDate(moment.utc(e), !0) : this._picker.setDate(null) })) }, _closeModal() { (0, p.getOwner)(this).lookup("controller:composer").send("closeModal") }
    }, F(C, "_renderPreview", [z], Object.getOwnPropertyDescriptor(C, "_renderPreview"), C), F(C, "isRange", [_], Object.getOwnPropertyDescriptor(C, "isRange"), C), F(C, "isValid", [b], Object.getOwnPropertyDescriptor(C, "isValid"), C), F(C, "fromConfig", [v], Object.getOwnPropertyDescriptor(C, "fromConfig"), C), F(C, "toConfig", [y], Object.getOwnPropertyDescriptor(C, "toConfig"), C), F(C, "options", [T], Object.getOwnPropertyDescriptor(C, "options"), C), F(C, "computedConfig", [w], Object.getOwnPropertyDescriptor(C, "computedConfig"), C), F(C, "currentUserTimezone", [t.default], Object.getOwnPropertyDescriptor(C, "currentUserTimezone"), C), F(C, "allTimezones", [t.default], Object.getOwnPropertyDescriptor(C, "allTimezones"), C), F(C, "formattedCurrentUserTimezone", [D], Object.getOwnPropertyDescriptor(C, "formattedCurrentUserTimezone"), C), F(C, "previewedFormats", [P], Object.getOwnPropertyDescriptor(C, "previewedFormats"), C), F(C, "recurringOptions", [t.default], Object.getOwnPropertyDescriptor(C, "recurringOptions"), C), F(C, "toggleModeBtnLabel", [k], Object.getOwnPropertyDescriptor(C, "toggleModeBtnLabel"), C), F(C, "markup", [L], Object.getOwnPropertyDescriptor(C, "markup"), C), F(C, "formattedFrom", [O], Object.getOwnPropertyDescriptor(C, "formattedFrom"), C), F(C, "formattedTo", [M], Object.getOwnPropertyDescriptor(C, "formattedTo"), C), C))
    e.default = x
})), define("discourse/plugins/discourse-local-dates/discourse/controllers/discourse-local-dates-create-modal", ["exports", "@ember/controller", "discourse/mixins/modal-functionality", "@ember/runloop"], (function (e, t, o, n) {
    "use strict"
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    var a = t.default.extend(o.default, {
        onShow() {
            (0, n.schedule)("afterRender", (() => {
                const e = document.getElementById("from-date-time")
                e && e.focus()
            }))
        }, onClose() {
            (0, n.schedule)("afterRender", (() => {
                const e = document.querySelector(".d-editor-button-bar .local-dates.btn")
                e && e.focus()
            }))
        }
    })
    e.default = a
})), define("discourse/plugins/discourse-local-dates/discourse/templates/components/discourse-local-dates-create-form", ["exports", "@ember/template-factory"], (function (e, t) {
    "use strict"
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    var o = (0, t.createTemplateFactory)({ id: "eU1q72e5", block: '[[[8,[39,0],null,[["@title","@class","@style"],["discourse_local_dates.title","discourse-local-dates-create-modal","overflow: auto"]],[["default"],[[[[1,"\\n\\n  "],[10,0],[14,0,"form"],[12],[1,"\\n"],[41,[30,0,["isValid"]],[[[41,[30,0,["timezoneIsDifferentFromUserTimezone"]],[[[1,"        "],[10,0],[14,0,"preview alert alert-info"],[12],[1,"\\n          "],[1,[28,[35,2],["discourse_local_dates.create.form.current_timezone"],null]],[1,"\\n          "],[10,"b"],[12],[1,[30,0,["formattedCurrentUserTimezone"]]],[13],[1,[30,0,["currentPreview"]]],[1,"\\n        "],[13],[1,"\\n"]],[]],null]],[]],[[[1,"      "],[10,0],[14,0,"validation-error alert alert-error"],[12],[1,"\\n        "],[1,[28,[35,2],["discourse_local_dates.create.form.invalid_date"],null]],[1,"\\n      "],[13],[1,"\\n"]],[]]],[1,"\\n    "],[1,[30,0,["computeDate"]]],[1,"\\n\\n    "],[10,0],[14,0,"date-time-configuration"],[12],[1,"\\n      "],[10,0],[14,0,"inputs-panel"],[12],[1,"\\n        "],[10,0],[15,0,[29,["date-time-control from ",[52,[30,0,["fromSelected"]],"is-selected"]," ",[52,[30,0,["fromFilled"]],"is-filled"]]]],[12],[1,"\\n          "],[1,[28,[35,3],["calendar-alt"],null]],[1,"\\n          "],[8,[39,4],null,[["@id","@action","@translatedLabel","@class"],["from-date-time",[28,[37,5],[[30,0],"focusFrom"],null],[30,0,["formattedFrom"]],"date-time"]],null],[1,"\\n        "],[13],[1,"\\n\\n        "],[10,0],[15,0,[29,["date-time-control to ",[52,[30,0,["toSelected"]],"is-selected"]," ",[52,[30,0,["toFilled"]],"is-filled"]]]],[12],[1,"\\n          "],[1,[28,[35,3],["calendar-alt"],null]],[1,"\\n          "],[8,[39,4],null,[["@action","@translatedLabel","@class"],[[28,[37,5],[[30,0],"focusTo"],null],[30,0,["formattedTo"]],"date-time"]],null],[1,"\\n"],[41,[30,0,["toFilled"]],[[[1,"            "],[8,[39,4],null,[["@icon","@action","@class"],["times",[28,[37,5],[[30,0],"eraseToDateTime"],null],"delete-to-date"]],null],[1,"\\n"]],[]],null],[1,"        "],[13],[1,"\\n\\n"],[41,[51,[30,0,["site","mobileView"]]],[[[1,"          "],[8,[39,7],null,[["@options","@value","@onChange"],[[28,[37,8],null,[["icon"],["globe"]]],[30,0,["timezone"]],[28,[37,5],[[30,0],[28,[37,9],[[30,0,["timezone"]]],null]],null]]],null],[1,"\\n"]],[]],null],[1,"      "],[13],[1,"\\n\\n      "],[10,0],[14,0,"picker-panel"],[12],[1,"\\n        "],[8,[39,10],[[24,0,"fake-input"]],null,null],[1,"\\n        "],[10,0],[14,0,"date-picker"],[15,1,[29,["picker-container-",[30,0,["elementId"]]]]],[12],[13],[1,"\\n\\n"],[41,[30,0,["fromSelected"]],[[[1,"          "],[10,0],[14,0,"time-pickers"],[12],[1,"\\n            "],[1,[28,[35,3],["far-clock"],null]],[1,"\\n            "],[8,[39,10],[[16,"maxlength",5],[24,"placeholder","hh:mm"],[24,0,"time-picker"],[4,[38,11],["input",[28,[37,5],[[30,0],"setTime"],null]],null]],[["@type","@value"],["time",[30,0,["time"]]]],null],[1,"\\n          "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,0,["toSelected"]],[[[41,[30,0,["toDate"]],[[[1,"            "],[10,0],[14,0,"time-pickers"],[12],[1,"\\n              "],[1,[28,[35,3],["far-clock"],null]],[1,"\\n              "],[8,[39,10],[[16,"maxlength",5],[24,"placeholder","hh:mm"],[24,0,"time-picker"],[4,[38,11],["input",[28,[37,5],[[30,0],"setToTime"],null]],null]],[["@type","@value"],["time",[30,0,["toTime"]]]],null],[1,"\\n            "],[13],[1,"\\n"]],[]],null]],[]],null],[1,"      "],[13],[1,"\\n\\n"],[41,[30,0,["site","mobileView"]],[[[1,"        "],[8,[39,7],null,[["@value","@options","@onChange"],[[30,0,["timezone"]],[28,[37,8],null,[["icon"],["globe"]]],[28,[37,5],[[30,0],[28,[37,9],[[30,0,["timezone"]]],null]],null]]],null],[1,"\\n"]],[]],null],[1,"    "],[13],[1,"\\n\\n"],[41,[30,0,["advancedMode"]],[[[1,"      "],[10,0],[14,0,"advanced-options"],[12],[1,"\\n"],[41,[51,[30,0,["isRange"]]],[[[1,"          "],[10,0],[14,0,"control-group recurrence"],[12],[1,"\\n            "],[10,"label"],[14,0,"control-label"],[12],[1,"\\n              "],[1,[28,[35,2],["discourse_local_dates.create.form.recurring_title"],null]],[1,"\\n            "],[13],[1,"\\n            "],[10,2],[12],[1,[28,[35,12],[[28,[37,2],["discourse_local_dates.create.form.recurring_description"],null]],null]],[13],[1,"\\n            "],[10,0],[14,0,"controls"],[12],[1,"\\n              "],[8,[39,13],null,[["@content","@class","@value","@onChange","@options"],[[30,0,["recurringOptions"]],"recurrence-input",[30,0,["recurring"]],[28,[37,5],[[30,0],[28,[37,9],[[30,0,["recurring"]]],null]],null],[28,[37,8],null,[["none"],["discourse_local_dates.create.form.recurring_none"]]]]],null],[1,"\\n            "],[13],[1,"\\n          "],[13],[1,"\\n"]],[]],null],[1,"\\n        "],[10,0],[14,0,"control-group format"],[12],[1,"\\n          "],[10,"label"],[12],[1,[28,[35,2],["discourse_local_dates.create.form.format_title"],null]],[13],[1,"\\n          "],[10,2],[12],[1,"\\n            "],[1,[28,[35,2],["discourse_local_dates.create.form.format_description"],null]],[1,"\\n            "],[10,3],[14,"target","_blank"],[14,6,"https://momentjs.com/docs/#/parsing/string-format/"],[14,"rel","noopener noreferrer"],[12],[1,"\\n              "],[1,[28,[35,3],["question-circle"],null]],[1,"\\n            "],[13],[1,"\\n          "],[13],[1,"\\n          "],[10,0],[14,0,"controls"],[12],[1,"\\n            "],[8,[39,14],null,[["@value","@class"],[[30,0,["format"]],"format-input"]],null],[1,"\\n          "],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"control-group"],[12],[1,"\\n          "],[10,"ul"],[14,0,"formats"],[12],[1,"\\n"],[42,[28,[37,16],[[28,[37,16],[[30,0,["previewedFormats"]]],null]],null],null,[[[1,"              "],[10,"li"],[14,0,"format"],[12],[1,"\\n                "],[11,3],[24,0,"moment-format"],[24,6,""],[4,[38,5],[[30,0],[28,[37,9],[[30,0,["format"]]],null],[30,1,["format"]]],null],[12],[1,"\\n                  "],[1,[30,1,["format"]]],[1,"\\n                "],[13],[1,"\\n                "],[10,1],[14,0,"previewed-format"],[12],[1,"\\n                  "],[1,[30,1,["preview"]]],[1,"\\n                "],[13],[1,"\\n              "],[13],[1,"\\n"]],[1]],null],[1,"          "],[13],[1,"\\n        "],[13],[1,"\\n\\n        "],[10,0],[14,0,"control-group timezones"],[12],[1,"\\n          "],[10,"label"],[12],[1,[28,[35,2],["discourse_local_dates.create.form.timezones_title"],null]],[13],[1,"\\n          "],[10,2],[12],[1,[28,[35,2],["discourse_local_dates.create.form.timezones_description"],null]],[13],[1,"\\n          "],[10,0],[14,0,"controls"],[12],[1,"\\n            "],[8,[39,17],null,[["@valueProperty","@nameProperty","@class","@content","@value","@options"],[null,null,"timezones-input",[30,0,["allTimezones"]],[30,0,["timezones"]],[28,[37,8],null,[["allowAny","maximum"],[false,5]]]]],null],[1,"\\n          "],[13],[1,"\\n        "],[13],[1,"\\n      "],[13],[1,"\\n"]],[]],null],[1,"  "],[13],[1,"\\n"]],[]]]]],[1,"\\n\\n"],[10,0],[14,0,"modal-footer discourse-local-dates-create-modal-footer"],[12],[1,"\\n"],[41,[30,0,["isValid"]],[[[1,"    "],[8,[39,4],null,[["@class","@action","@label"],["btn-primary",[28,[37,5],[[30,0],"save"],null],"discourse_local_dates.create.form.insert"]],null],[1,"\\n"]],[]],null],[1,"\\n  "],[8,[39,4],null,[["@class","@action","@translatedLabel"],["btn-flat",[28,[37,5],[[30,0],"cancel"],null],[28,[37,2],["cancel"],null]]],null],[1,"\\n\\n  "],[8,[39,4],null,[["@class","@action","@icon","@label"],["btn-default advanced-mode-btn",[28,[37,5],[[30,0],"advancedMode"],null],"cog",[30,0,["toggleModeBtnLabel"]]]],null],[1,"\\n"],[13],[1,"\\n"]],["previewedFormat"],false,["d-modal-body","if","i18n","d-icon","d-button","action","unless","timezone-input","hash","mut","input","on","html-safe","combo-box","text-field","each","-track-array","multi-select"]]', moduleName: "discourse/plugins/discourse-local-dates/discourse/templates/components/discourse-local-dates-create-form.hbs", isStrictMode: !1 })
    e.default = o
})), define("discourse/plugins/discourse-local-dates/discourse/templates/modal/discourse-local-dates-create-modal", ["exports", "@ember/template-factory"], (function (e, t) {
    "use strict"
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    var o = (0, t.createTemplateFactory)({ id: "wXpaBb2R", block: '[[[8,[39,0],null,[["@config","@insertDate"],[[30,0,["config"]],[30,0,["insertDate"]]]],null],[1,"\\n"]],[],false,["discourse-local-dates-create-form"]]', moduleName: "discourse/plugins/discourse-local-dates/discourse/templates/modal/discourse-local-dates-create-modal.hbs", isStrictMode: !1 })
    e.default = o
})), define("discourse/plugins/discourse-local-dates/initializers/discourse-local-dates", ["exports", "discourse-common/lib/deprecated", "discourse-common/lib/get-owner", "discourse/plugins/discourse-local-dates/lib/local-date-builder", "discourse/lib/plugin-api", "discourse/lib/show-modal", "discourse/lib/download-calendar", "discourse-common/lib/icon-library", "I18n", "discourse/lib/d-popover", "discourse/lib/to-markdown", "discourse/plugins/discourse-local-dates/lib/local-date-markup-generator"], (function (e, t, o, n, a, i, r, s, l, d, c, m) {
    "use strict"
    function u(e, t) {
        if (!t.discourse_local_dates_enabled) return
        const o = moment.tz.guess()
        e.forEach((e => {
            const a = f(e, t), i = new n.default(a, o).build()
            e.innerText = "", e.insertAdjacentHTML("beforeend", '\n        <svg class="fa d-icon d-icon-globe-americas svg-icon" xmlns="http://www.w3.org/2000/svg">\n          <use href="#globe-americas"></use>\n        </svg>\n        <span class="relative-time">'.concat(i.formatted, "</span>\n      ")), e.setAttribute("aria-label", i.textPreview)
            const r = ["cooked-date"]
            i.pastEvent && r.push("past"), e.classList.add(...r)
        }))
    } function f(e, t) {
        const o = {}, n = e.dataset
        return 2 === h(e).length && (o.duration = function (e) {
            const [t, o] = h(e).map((e => e.dataset)), n = moment("".concat(t.date, " ").concat(t.time || "").trim()), a = moment("".concat(o.date, " ").concat(o.time || "").trim()).diff(n, "minutes")
            return e.dataset === t ? a : -a
        }(e)), o.time = n.time, o.date = n.date, o.recurring = n.recurring, o.timezones = (n.timezones || t.discourse_local_dates_default_timezones || "Etc/UTC").split("|").filter(Boolean), o.timezone = n.timezone, o.calendar = "on" === (n.calendar || "on"), o.displayedTimezone = n.displayedTimezone, o.format = n.format || (o.time ? "LLL" : "LL"), o.countdown = n.countdown, o
    } function p(e) {
        const t = {}
        return t.time = e.attributes["data-time"], t.date = e.attributes["data-date"], t.recurring = e.attributes["data-recurring"], t.timezones = e.attributes["data-timezones"], t.timezone = e.attributes["data-timezone"], t.calendar = "on" === (e.attributes["data-calendar"] || "on"), t.displayedTimezone = e.attributes["data-displayed-timezone"], t.format = e.attributes["data-format"], t.countdown = e.attributes["data-countdown"], t
    } function h(e) { return e.parentElement ? "true" !== e.dataset.range && 2 !== e.parentElement.children.length ? [e] : Array.from(e.parentElement.children).filter((e => e.dataset.date)) : [] } function g(e) {
        const t = e.container.lookup("service:site-settings"), o = l.default.t("discourse_local_dates.default_title", { site_name: t.title })
        e.decorateCookedElement(((e, n) => {
            var a, i
            const r = e.querySelectorAll(".discourse-local-date")
            u(r, t)
            const s = null == n || null === (a = n.getModel()) || void 0 === a || null === (i = a.topic) || void 0 === i ? void 0 : i.title
            r.forEach((e => { e.dataset.title = e.dataset.title || s || o }))
        }), { id: "discourse-local-date" }), e.onToolbarCreate((e => { e.addButton({ title: "discourse_local_dates.title", id: "local-dates", group: "extras", icon: "calendar-alt", sendAction: t => e.context.send("insertDiscourseLocalDate", t) }) })), e.modifyClass("component:d-editor", { pluginId: "discourse-local-dates", actions: { insertDiscourseLocalDate(e) { (0, i.default)("discourse-local-dates-create-modal").setProperties({ insertDate: t => { e.addText(t) } }) } } }), (0, c.addTextDecorateCallback)((function (e, t, o, n) {
            var a
            if (n.discourseLocalDateStartRangeOpts && null != t && null !== (a = t.attributes.class) && void 0 !== a && a.includes("discourse-local-date") && "→" === e) return ""
        })), (0, c.addTagDecorateCallback)((function () {
            var e
            if (null !== (e = this.element.attributes.class) && void 0 !== e && e.includes("discourse-local-date")) {
                if (this.metadata.discourseLocalDateStartRangeOpts) {
                    const e = this.metadata.discourseLocalDateStartRangeOpts, t = p(this.element), o = (0, m.default)({ date: e.date, time: e.time, format: e.format }, t, !0, { date: t.date, time: t.time, format: t.format })
                    return this.prefix = o, this.metadata.discourseLocalDateStartRangeOpts = null, ""
                } if ("true" === this.element.attributes["data-range"]) return this.metadata.discourseLocalDateStartRangeOpts = p(this.element), ""
                const e = p(this.element), t = (0, m.default)({ date: e.date, time: e.time, format: e.format }, e, !1)
                return this.prefix = t, ""
            }
        }))
    } function z(e, t) {
        const o = f(e, t), a = new n.default(o, moment.tz.guess()).build().previews.map((e => {
            const t = document.createElement("div")
            t.classList.add("preview"), e.current && t.classList.add("current")
            const o = document.createElement("span")
            o.classList.add("timezone"), o.innerText = e.timezone, t.appendChild(o)
            const n = document.createElement("span")
            return n.classList.add("date-time"), n.innerHTML = e.formatted, t.appendChild(n), t
        })), i = document.createElement("div")
        i.classList.add("locale-dates-previews"), a.forEach((e => i.appendChild(e)))
        const r = function (e) {
            const [t, o] = h(e).map((e => e.dataset)), [n, a] = function (e, t) {
                let o, n
                o = moment.tz("".concat(e.date, " ").concat(e.time || "").trim(), e.timezone), t && (n = moment.tz("".concat(t.date, " ").concat(t.time || "").trim(), t.timezone))
                return [o, n]
            }(t, o)
            if (n < moment().tz(t.timezone)) return !1
            const i = document.createElement("div")
            i.classList.add("download-calendar"), i.innerHTML = "".concat((0, s.renderIcon)("string", "file"), " ").concat(l.default.t("download_calendar.add_to_calendar")), i.setAttribute("data-starts-at", n.toISOString()), o && i.setAttribute("data-ends-at", a.toISOString())
            t.time || o || i.setAttribute("data-ends-at", n.add(24, "hours").toISOString())
            return i.setAttribute("data-title", t.title), i
        }(e)
        return r && i.appendChild(r), i.outerHTML
    } Object.defineProperty(e, "__esModule", { value: !0 }), e.applyLocalDates = u, e.default = void 0
    var _ = {
        name: "discourse-local-dates", showDatePopover(e) {
            var t, n, a, i
            const s = (0, o.getOwner)(this)
            if (s.isDestroyed || s.isDestroying) return
            if (null != e && null !== (t = e.target) && void 0 !== t && null !== (n = t.classList) && void 0 !== n && n.contains("download-calendar")) {
                const t = e.target.dataset; (0, r.downloadCalendar)(t.title, [{ startsAt: t.startsAt, endsAt: t.endsAt }])
                const o = e.target.closest("[data-tippy-root]")
                return void (null != o && o._tippy && o._tippy.hide())
            } if (null == e || null === (a = e.target) || void 0 === a || null === (i = a.classList) || void 0 === i || !i.contains("discourse-local-date")) return
            const l = s.lookup("service:site-settings"); (0, d.showPopover)(e, { trigger: "click", content: z(e.target, l), allowHTML: !0, interactive: !0, appendTo: "parent", onHidden: e => { e.destroy() } })
        }, hideDatePopover(e) { (0, d.hidePopover)(e) }, initialize(e) {
            window.addEventListener("click", this.showDatePopover)
            const o = e.lookup("service:site-settings")
            o.discourse_local_dates_enabled && ($.fn.applyLocalDates = function () { return (0, t.default)("`$.applyLocalDates()` is deprecated, import and use `applyLocalDates()` instead."), u(this.toArray(), o) }, (0, a.withPluginApi)("0.8.8", g))
        }, teardown() { window.removeEventListener("click", this.showDatePopover) }
    }
    e.default = _
})), define("discourse/plugins/discourse-local-dates/lib/date-with-zone-helper", ["exports", "@ember/object"], (function (e, t) {
    "use strict"
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    class o {
        static fromDatetime(e, t, n) { return new o({ year: e.year(), month: e.month(), day: e.date(), hour: e.hour(), minute: e.minute(), second: e.second(), timezone: t, localTimezone: n }) } constructor() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            this.timezone = e.timezone || "UTC", this.localTimezone = e.localTimezone || moment.tz.guess(), this.datetime = moment.tz((0, t.getProperties)(e, ["year", "month", "day", "hour", "minute", "second"]), this.timezone)
        } isDST() { return this.datetime.tz(this.localTimezone).isDST() } unitRepetitionsBetweenDates(e, t) {
            const [o, n] = e.split("."), a = Math.abs(this.datetime.diff(t, n, !0)), i = a / o % 1
            return Math.trunc(a / o) * parseInt(o, 10) + (i > 0 ? parseInt(o, 10) : 0)
        } add(e, t) { return this._fromDatetime(this.datetime.clone().add(e, t), this.timezone, this.localTimezone) } subtract(e, t) { return this._fromDatetime(this.datetime.clone().subtract(e, t), this.timezone, this.localTimezone) } datetimeWithZone(e) { return this.datetime.clone().tz(e) } format(e) { return e ? this.datetime.tz(this.localTimezone).format(e) : this.datetime.tz(this.localTimezone).toISOString(!0) } _fromDatetime(e, t, n) { return o.fromDatetime(e, t, n) }
    } e.default = o
})), define("discourse/plugins/discourse-local-dates/lib/discourse-markdown/discourse-local-dates", ["exports", "pretty-text/engines/discourse-markdown/bbcode-block"], (function (e, t) {
    "use strict"
    Object.defineProperty(e, "__esModule", { value: !0 }), e.setup = function (e) {
        e.allowList(["span.discourse-local-date", "span[aria-label]", "span[data-date]", "span[data-time]", "span[data-format]", "span[data-countdown]", "span[data-calendar]", "span[data-displayed-timezone]", "span[data-timezone]", "span[data-timezones]", "span[data-recurring]", "span[data-email-preview]"]), e.registerOptions(((e, t) => { e.datesEmailFormat = t.discourse_local_dates_email_format, e.features["discourse-local-dates"] = !!t.discourse_local_dates_enabled })), e.registerPlugin((e => {
            const t = { matcher: /\[date(=.+?)\]/, onMatch: i }
            e.core.textPostProcess.ruler.push("discourse-local-dates", t)
        })), e.registerPlugin((e => {
            const t = { matcher: /\[date-range(.+?)\]/, onMatch: r }
            e.core.textPostProcess.ruler.push("discourse-local-dates", t)
        }))
    }
    const o = moment.tz.names()
    function n(e, t, n) {
        let a = new t.Token("span_open", "span", 1)
        if (a.attrs = [["data-date", t.md.utils.escapeHtml(n.date)]], !n.date.match(/\d{4}-\d{2}-\d{2}/)) return void s(e, t, moment.invalid().format())
        if (n.time && !n.time.match(/\d{2}:\d{2}(?::\d{2})?/)) return void s(e, t, moment.invalid().format())
        let i = n.date
        if (n.time && (a.attrs.push(["data-time", t.md.utils.escapeHtml(n.time)]), i = "".concat(i, " ").concat(n.time)), !moment(i).isValid()) return void s(e, t, moment.invalid().format())
        if (a.attrs.push(["class", "discourse-local-date"]), n.format && a.attrs.push(["data-format", t.md.utils.escapeHtml(n.format)]), n.countdown && a.attrs.push(["data-countdown", t.md.utils.escapeHtml(n.countdown)]), n.calendar && a.attrs.push(["data-calendar", t.md.utils.escapeHtml(n.calendar)]), n.range && a.attrs.push(["data-range", !0]), n.displayedTimezone && o.includes(n.displayedTimezone) && a.attrs.push(["data-displayed-timezone", t.md.utils.escapeHtml(n.displayedTimezone)]), n.timezones) {
            const e = n.timezones.split("|").filter((e => o.includes(e)))
            a.attrs.push(["data-timezones", t.md.utils.escapeHtml(e.join("|"))])
        } n.timezone && o.includes(n.timezone) ? (a.attrs.push(["data-timezone", t.md.utils.escapeHtml(n.timezone)]), i = moment.tz(i, n.timezone)) : i = moment.utc(i), n.recurring && a.attrs.push(["data-recurring", t.md.utils.escapeHtml(n.recurring)]), e.push(a)
        const r = i.tz("Etc/UTC").format(t.md.options.discourse.datesEmailFormat || moment.defaultFormat)
        a.attrs.push(["data-email-preview", "".concat(r, " UTC")]), s(e, t, i.utc().format(n.format))
    } function a(e) {
        const o = e.replace(/‘|’|„|“|«|»|”/g, '"')
        return (0, t.parseBBCodeTag)("[date date" + o + "]", 0, o.length + 12)
    } function i(e, t, o) {
        let i = { date: null, time: null, timezone: null, format: null, timezones: null, displayedTimezone: null, countdown: null, range: !1 }
        const r = a(t[1])
        i.date = r.attrs.date, i.format = r.attrs.format, i.calendar = r.attrs.calendar, i.time = r.attrs.time, i.timezone = (r.attrs.timezone || "").trim(), i.recurring = r.attrs.recurring, i.timezones = r.attrs.timezones, i.displayedTimezone = r.attrs.displayedTimezone, i.countdown = r.attrs.countdown, n(e, o, i)
    } function r(e, t, o) {
        let i, r, l = { date: null, time: null, timezone: null, format: null, timezones: null, displayedTimezone: null, countdown: null, range: !1 }
        const d = a(t[1])
        l.format = d.attrs.format, l.calendar = d.attrs.calendar, l.timezone = (d.attrs.timezone || "").trim(), l.recurring = d.attrs.recurring, l.timezones = d.attrs.timezones, l.displayedTimezone = d.attrs.displayedTimezone, l.countdown = d.attrs.countdown, l.range = d.attrs.from && d.attrs.to, d.attrs.from && ([i, r] = d.attrs.from.split("T"), l.date = i, l.time = r, n(e, o, l)), l.range && s(e, o, "→"), d.attrs.to && ([i, r] = d.attrs.to.split("T"), l.date = i, l.time = r, n(e, o, l))
    } function s(e, t, o) {
        let n
        n = new t.Token("text", "", 0), n.content = o, e.push(n), n = new t.Token("span_close", "span", -1), e.push(n)
    }
})), define("discourse/plugins/discourse-local-dates/lib/local-date-builder", ["exports", "discourse/plugins/discourse-local-dates/lib/date-with-zone-helper", "I18n", "discourse-common/lib/icon-library"], (function (e, t, o, n) {
    "use strict"
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    const a = "h:mm A"
    e.default = class {
        constructor() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0
            this.time = e.time, this.date = e.date, this.recurring = e.recurring, this.timezones = Array.from(new Set((e.timezones || []).filter(Boolean))), this.timezone = e.timezone || "UTC", this.calendar = void 0 === e.calendar || e.calendar, this.displayedTimezone = e.displayedTimezone, this.format = e.format || (this.time ? "LLL" : "LL"), this.countdown = e.countdown, this.duration = e.duration, this.localTimezone = t
        } build() {
            const [e, o, n] = this.date.split("-").map((e => parseInt(e, 10))), [a, i, r] = (this.time || "").split(":").map((e => e ? parseInt(e, 10) : void 0))
            let s
            s = this.time ? this.displayedTimezone || this.localTimezone : this.displayedTimezone || this.timezone || this.localTimezone
            let l = new t.default({ year: e, month: o ? o - 1 : null, day: n, hour: a, minute: i, second: r, timezone: this.timezone, localTimezone: this.localTimezone })
            if (this.recurring && moment().isAfter(l.datetime)) {
                const e = this.recurring.split(".")[1], t = l.unitRepetitionsBetweenDates(this.recurring, moment.tz(this.localTimezone))
                l = l.add(t, e)
            } const d = this._generatePreviews(l, s)
            return { pastEvent: !this.recurring && moment.tz(this.localTimezone).isAfter(l.datetime), formatted: this._applyFormatting(l, s), previews: d, textPreview: this._generateTextPreviews(d) }
        } _generateTextPreviews(e) {
            return e.map((e => {
                const t = this._zoneWithoutPrefix(e.timezone)
                return "".concat(t, " ").concat(e.formatted)
            })).join(", ")
        } _generatePreviews(e, o) {
            const n = [], a = this.timezones.filter((e => !this._isEqualZones(e, this.localTimezone)))
            return n.push({ timezone: this._zoneWithoutPrefix(this.localTimezone), current: !0, formatted: this._createDateTimeRange(t.default.fromDatetime(e.datetime, e.timezone, this.localTimezone), this.time, this.duration) }), !this.timezone || o !== this.localTimezone || this.timezone === o || this._isEqualZones(o, this.timezone) || this.timezones.any((e => this._isEqualZones(e, this.timezone))) || a.unshift(this.timezone), a.forEach((a => { this._isEqualZones(a, o) || (this._isEqualZones(a, this.localTimezone) && (a = this.localTimezone), n.push({ timezone: this._zoneWithoutPrefix(a), formatted: this._createDateTimeRange(t.default.fromDatetime(e.datetime, e.timezone, a), this.time, this.duration) })) })), n.uniqBy("timezone")
        } _isEqualZones(e, t) { return !!(!e && !t || e && t) && (!(!e.includes(t) && !t.includes(e)) || moment.tz(e).utcOffset() === moment.tz(t).utcOffset()) } _createDateTimeRange(e, t, o) {
            const [n, i] = this._calculateDatesForRange(e, t, o)
            let r = [n.format("".concat("dddd", ", ").concat("LL")), this._optionalTimeIcon(n, i), n.format(a)]
            return i && (r = r.concat(["→", i.format(this._endDateFormat(n, i))])), r.filter(Boolean).join(" ")
        } _shortFormat(e, t) { return t.datetime.diff(e.datetime, "days") < 1 } _optionalTimeIcon(e, t) { if (!t || this._shortFormat(e, t)) return "<br />".concat((0, n.renderIcon)("string", "clock")) } _endDateFormat(e, t) { return this._shortFormat(e, t) ? a : "LLLL" } _calculateDatesForRange(e, t, o) {
            if (t && !o) return [e]
            const n = [e, o ? e.add(o, "minutes") : e.add(24, "hours")]
            return o < 0 ? n.reverse() : n
        } _applyFormatting(e, t) {
            if (this.countdown) {
                const t = moment.tz(this.localTimezone).diff(e.datetime)
                return t < 0 ? moment.duration(t).humanize() : o.default.t("discourse_local_dates.relative_dates.countdown.passed")
            } const n = this._isEqualZones(t, this.localTimezone)
            if (this.calendar) {
                if (moment.tz(this.localTimezone).isBetween(e.subtract(2, "day").datetime, e.add(1, "day").datetime.endOf("day")) && n) {
                    const t = e.datetimeWithZone(this.localTimezone)
                    return 0 === t.hours() && 0 === t.minutes() ? t.format("dddd") : t.calendar(moment.tz(e.timezone), this._calendarFormats(this.time ? this.time : null))
                }
            } return n ? e.format(this.format) : this._formatWithZone(e, t, this.format)
        } _calendarFormats(e) { return { sameDay: this._translateCalendarKey(e, "today"), nextDay: this._translateCalendarKey(e, "tomorrow"), lastDay: this._translateCalendarKey(e, "yesterday"), sameElse: "L" } } _translateCalendarKey(e, t) {
            const n = o.default.t("discourse_local_dates.relative_dates.".concat(t), { time: "LT" })
            return e ? n.split("LT").map((e => "[".concat(e, "]"))).join("LT") : "[".concat(n.replace(" LT", ""), "]")
        } _formatTimezone(e) { return e.replace("_", " ").replace("Etc/", "").split("/") } _zoneWithoutPrefix(e) {
            const [t, o] = this._formatTimezone(e)
            return o || t
        } _formatWithZone(e, t, o) {
            let n = e.datetimeWithZone(t).format(o)
            return "".concat(n, " (").concat(this._zoneWithoutPrefix(t), ")")
        }
    }
})), define("discourse/plugins/discourse-local-dates/lib/local-date-markup-generator", ["exports", "@ember/utils"], (function (e, t) {
    "use strict"
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function (e, o, n, a) {
        let i = ""
        if (n) {
            let o = [e.date, e.time].filter((e => !(0, t.isEmpty)(e))).join("T"), n = [a.date, a.time].filter((e => !(0, t.isEmpty)(e))).join("T")
            i += "[date-range from=".concat(o, " to=").concat(n)
        } else i += "[date=".concat(e.date)
        e.time && !n && (i += " time=".concat(e.time))
        e.format && e.format.length && (i += ' format="'.concat(e.format, '"'))
        o.timezone && (i += ' timezone="'.concat(o.timezone, '"'))
        o.countdown && (i += ' countdown="'.concat(o.countdown, '"'))
        o.displayedTimezone && (i += ' displayedTimezone="'.concat(o.displayedTimezone, '"'))
        o.timezones && o.timezones.length && (Array.isArray(o.timezones) ? i += ' timezones="'.concat(o.timezones.join("|"), '"') : i += ' timezones="'.concat(o.timezones, '"'))
        o.recurring && !n && (i += ' recurring="'.concat(o.recurring, '"'))
        return i += "]", i
    }
}))

    //# sourceMappingURL=discourse-local-dates-97eb98ae25063b471bac476db9f9b8a18263aef91a691934a25b138ffb29c657.map
    //!

    ;
