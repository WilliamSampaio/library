define("discourse/plugins/poll/components/poll-breakdown-chart", ["exports", "@ember/component", "I18n", "discourse/plugins/poll/controllers/poll-ui-builder", "discourse-common/utils/decorators", "discourse/plugins/poll/lib/chart-colors", "@ember/template", "@ember/object/computed", "@ember/runloop"], (function (e, t, l, o, i, n, s, r, a) {
   "use strict"
   var u, p, c
   function d(e, t, l, o, i) {
      var n = {}
      return Object.keys(o).forEach((function (e) { n[e] = o[e] })), n.enumerable = !!n.enumerable, n.configurable = !!n.configurable, ("value" in n || n.initializer) && (n.writable = !0), n = l.slice().reverse().reduce((function (l, o) { return o(e, t, l) || l }), n), i && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(i) : void 0, n.initializer = void 0), void 0 === n.initializer && (Object.defineProperty(e, t, n), n = null), n
   } Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
   var h = t.default.extend((u = (0, i.default)("optionColors", "index"), p = (0, i.default)("data", "displayMode"), c = {
      group: null, options: null, displayMode: null, highlightedOption: null, setHighlightedOption: null, classNames: "poll-breakdown-chart-container", _optionToSlice: null, _previousHighlightedSliceIndex: null, _previousDisplayMode: null, data: (0, r.mapBy)("options", "votes"), init() { this._super(...arguments), this._optionToSlice = {} }, didInsertElement() {
         this._super(...arguments)
         const e = this.element.querySelector("canvas")
         this._chart = new window.Chart(e.getContext("2d"), this.chartConfig)
      }, didReceiveAttrs() { this._super(...arguments), this._chart && (this._updateDisplayMode(), this._updateHighlight()) }, willDestroy() { this._super(...arguments), this._chart && this._chart.destroy() }, colorStyle: (e, t) => (0, s.htmlSafe)("background: ".concat(e[t], ";")), chartConfig(e, t) {
         const i = []
         let s = 0
         this._optionToSlice = {}, e.forEach(((e, t) => { e > 0 && (i.push(e), this._optionToSlice[t] = s++) }))
         const r = i.reduce(((e, t) => e + t), 0), u = (0, n.getColors)(e.length).filter(((t, l) => e[l] > 0))
         return {
            type: o.PIE_CHART_TYPE, plugins: [window.ChartDataLabels], data: { datasets: [{ data: i, backgroundColor: u, hoverBorderColor: "#fff" }] }, options: {
               plugins: {
                  tooltip: !1, datalabels: {
                     color: "#333", backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: 2, font: { family: getComputedStyle(document.body).fontFamily, size: 16 }, padding: { top: 2, right: 6, bottom: 2, left: 6 }, formatter(e) {
                        if ("percentage" !== t) return e
                        const o = l.default.toNumber(e / r * 100, { precision: 1 })
                        return "".concat(o, "%")
                     }
                  }
               }, responsive: !0, aspectRatio: 1.1, animation: { duration: 0 }, onHover: (e, t) => {
                  if (!t.length) return void (0, a.next)((() => { this.setHighlightedOption(null) }))
                  const l = t[0]._index, o = Object.keys(this._optionToSlice).find((e => this._optionToSlice[e] === l))
                  t.length = 0, (0, a.next)((() => { this.setHighlightedOption(Number(o)) }))
               }
            }
         }
      }, _updateDisplayMode() {
         if (this.displayMode !== this._previousDisplayMode) {
            const e = this.chartConfig
            this._chart.data.datasets = e.data.datasets, this._chart.options = e.options, this._chart.update(), this._previousDisplayMode = this.displayMode
         }
      }, _updateHighlight() {
         const e = this._chart.getDatasetMeta(0)
         if (null !== this._previousHighlightedSliceIndex) {
            const t = e.data[this._previousHighlightedSliceIndex]
            e.controller.removeHoverStyle(t), this._chart.draw()
         } if (null === this.highlightedOption) return void (this._previousHighlightedSliceIndex = null)
         const t = this._optionToSlice[this.highlightedOption]
         if (void 0 === t) return void (this._previousHighlightedSliceIndex = null)
         const l = e.data[t]
         this._previousHighlightedSliceIndex = t, e.controller.setHoverStyle(l), this._chart.draw()
      }
   }, d(c, "colorStyle", [u], Object.getOwnPropertyDescriptor(c, "colorStyle"), c), d(c, "chartConfig", [p], Object.getOwnPropertyDescriptor(c, "chartConfig"), c), c))
   e.default = h
})), define("discourse/plugins/poll/components/poll-breakdown-option", ["exports", "@ember/component", "I18n", "@ember/object", "discourse-common/utils/decorators", "@ember/object/computed", "discourse/plugins/poll/lib/chart-colors", "@ember/template", "discourse/lib/computed"], (function (e, t, l, o, i, n, s, r, a) {
   "use strict"
   var u, p, c, d, h
   function g(e, t, l, o, i) {
      var n = {}
      return Object.keys(o).forEach((function (e) { n[e] = o[e] })), n.enumerable = !!n.enumerable, n.configurable = !!n.configurable, ("value" in n || n.initializer) && (n.writable = !0), n = l.slice().reverse().reduce((function (l, o) { return o(e, t, l) || l }), n), i && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(i) : void 0, n.initializer = void 0), void 0 === n.initializer && (Object.defineProperty(e, t, n), n = null), n
   } Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
   var b = t.default.extend((u = (0, i.default)("option.votes", "totalVotes"), p = (0, i.default)("optionsCount"), c = (0, i.default)("highlighted"), d = (0, i.default)("highlighted", "optionColors", "index"), g(h = {
      option: null, index: null, totalVotes: null, optionsCount: null, displayMode: null, highlightedOption: null, onMouseOver: null, onMouseOut: null, tagName: "", highlighted: (0, a.propertyEqual)("highlightedOption", "index"), showPercentage: (0, n.equal)("displayMode", "percentage"), percent: (e, t) => l.default.toNumber(e / t * 100, { precision: 1 }), optionColors: e => (0, s.getColors)(e), colorBackgroundStyle(e) { if (e) return (0, r.htmlSafe)("background: rgba(0, 0, 0, 0.1);") }, colorPreviewStyle(e, t, l) {
         const o = e ? window.Chart.helpers.getHoverColor(t[l]) : t[l]
         return (0, r.htmlSafe)("background: ".concat(o, ";"))
      }, onHover(e) { e ? this.onMouseOver() : this.onMouseOut() }
   }, "percent", [u], Object.getOwnPropertyDescriptor(h, "percent"), h), g(h, "optionColors", [p], Object.getOwnPropertyDescriptor(h, "optionColors"), h), g(h, "colorBackgroundStyle", [c], Object.getOwnPropertyDescriptor(h, "colorBackgroundStyle"), h), g(h, "colorPreviewStyle", [d], Object.getOwnPropertyDescriptor(h, "colorPreviewStyle"), h), g(h, "onHover", [o.action], Object.getOwnPropertyDescriptor(h, "onHover"), h), h))
   e.default = b
})), define("discourse/plugins/poll/controllers/poll-breakdown", ["exports", "@ember/controller", "I18n", "discourse/mixins/modal-functionality", "@ember/object", "discourse/lib/ajax", "@ember/string", "discourse-common/utils/decorators", "@ember/template", "discourse/lib/load-script", "discourse/lib/ajax-error", "@ember/service"], (function (e, t, l, o, i, n, s, r, a, u, p, c) {
   "use strict"
   var d, h, g, b
   function m(e, t, l, o, i) {
      var n = {}
      return Object.keys(o).forEach((function (e) { n[e] = o[e] })), n.enumerable = !!n.enumerable, n.configurable = !!n.configurable, ("value" in n || n.initializer) && (n.writable = !0), n = l.slice().reverse().reduce((function (l, o) { return o(e, t, l) || l }), n), i && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(i) : void 0, n.initializer = void 0), void 0 === n.initializer && (Object.defineProperty(e, t, n), n = null), n
   } Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
   var f = t.default.extend(o.default, (d = (0, r.default)("model.poll.title", "model.post.topic.title"), h = (0, r.default)("model.groupableUserFields"), g = (0, r.default)("model.poll.options"), m(b = {
      dialog: (0, c.inject)(), model: null, charts: null, groupedBy: null, highlightedOption: null, displayMode: "percentage", title: (e, t) => e ? (0, a.htmlSafe)(e) : t, groupableUserFields: e => e.map((e => {
         const t = e.split("_").filter(Boolean)
         return t.length > 1 && (t[0] = (0, s.classify)(t[0])), { id: e, label: t.join(" ") }
      })), totalVotes: e => e.reduce(((e, t) => e + t.votes), 0), onShow() { this.set("charts", null), this.set("displayMode", "percentage"), this.set("groupedBy", this.model.groupableUserFields[0]), (0, u.default)("/javascripts/Chart.min.js").then((() => (0, u.default)("/javascripts/chartjs-plugin-datalabels.min.js"))).then((() => { this.fetchGroupedPollData() })) }, fetchGroupedPollData() { return (0, n.ajax)("/polls/grouped_poll_results.json", { data: { post_id: this.model.post.id, poll_name: this.model.poll.name, user_field_name: this.groupedBy } }).catch((e => { e ? (0, p.popupAjaxError)(e) : this.dialog.alert(l.default.t("poll.error_while_fetching_voters")) })).then((e => { this.isDestroying || this.isDestroyed || this.set("charts", e.grouped_results) })) }, setGrouping(e) { this.set("groupedBy", e), this.fetchGroupedPollData() }, onSelectPanel(e) { this.set("displayMode", e.id) }
   }, "title", [d], Object.getOwnPropertyDescriptor(b, "title"), b), m(b, "groupableUserFields", [h], Object.getOwnPropertyDescriptor(b, "groupableUserFields"), b), m(b, "totalVotes", [g], Object.getOwnPropertyDescriptor(b, "totalVotes"), b), m(b, "setGrouping", [i.action], Object.getOwnPropertyDescriptor(b, "setGrouping"), b), m(b, "onSelectPanel", [i.action], Object.getOwnPropertyDescriptor(b, "onSelectPanel"), b), b))
   e.default = f
})), define("discourse/plugins/poll/controllers/poll-ui-builder", ["exports", "@ember/controller", "@ember/object", "@ember/object/computed", "@ember/runloop", "discourse-common/utils/decorators", "discourse/mixins/modal-functionality", "I18n"], (function (e, t, l, o, i, n, s, r) {
   "use strict"
   var a, u, p, c, d, h, g, b, m, f, v, _, y
   function O(e, t, l, o, i) {
      var n = {}
      return Object.keys(o).forEach((function (e) { n[e] = o[e] })), n.enumerable = !!n.enumerable, n.configurable = !!n.configurable, ("value" in n || n.initializer) && (n.writable = !0), n = l.slice().reverse().reduce((function (l, o) { return o(e, t, l) || l }), n), i && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(i) : void 0, n.initializer = void 0), void 0 === n.initializer && (Object.defineProperty(e, t, n), n = null), n
   } Object.defineProperty(e, "__esModule", { value: !0 }), e.default = e.REGULAR_POLL_TYPE = e.PIE_CHART_TYPE = e.NUMBER_POLL_TYPE = e.MULTIPLE_POLL_TYPE = e.BAR_CHART_TYPE = void 0
   const w = "bar"
   e.BAR_CHART_TYPE = w
   e.PIE_CHART_TYPE = "pie"
   const x = "regular"
   e.REGULAR_POLL_TYPE = x
   const P = "number"
   e.NUMBER_POLL_TYPE = P
   const M = "multiple"
   e.MULTIPLE_POLL_TYPE = M
   const k = "always"
   var C = t.default.extend(s.default, (a = (0, n.default)("pollType"), u = (0, n.default)("pollType"), p = (0, n.default)("pollType"), c = (0, n.default)("pollOptions.@each.value"), d = (0, n.default)("site.groups"), h = (0, n.default)("chartType", "pollType"), g = (0, n.observes)("pollType", "pollOptionsCount"), b = (0, n.default)("pollType", "pollResult", "publicPoll", "pollTitle", "pollOptions.@each.value", "pollMin", "pollMax", "pollStep", "pollGroups", "pollAutoClose", "chartType"), m = (0, n.default)("isNumber", "pollOptionsCount"), f = (0, n.default)("pollOptions.@each.value"), v = (0, n.default)("isMultiple", "pollOptionsCount", "isNumber", "pollMin", "pollMax", "pollStep"), _ = (0, n.default)("minMaxValueValidation", "minNumOfOptionsValidation"), O(y = {
      showAdvanced: !1, pollType: x, pollTitle: "", pollOptions: null, pollOptionsText: null, pollMin: 1, pollMax: 2, pollStep: 1, pollGroups: null, pollAutoClose: null, pollResult: k, chartType: w, publicPoll: null, onShow() { this.setProperties({ showAdvanced: !1, pollType: x, pollTitle: null, pollOptions: [l.default.create({ value: "" })], pollOptionsText: "", pollMin: 1, pollMax: 2, pollStep: 1, pollGroups: null, pollAutoClose: null, pollResult: k, chartType: w, publicPoll: !1 }) }, pollResults() {
         const e = [{ name: r.default.t("poll.ui_builder.poll_result.always"), value: k }, { name: r.default.t("poll.ui_builder.poll_result.vote"), value: "on_vote" }, { name: r.default.t("poll.ui_builder.poll_result.closed"), value: "on_close" }]
         return this.get("currentUser.staff") && e.push({ name: r.default.t("poll.ui_builder.poll_result.staff"), value: "staff_only" }), e
      }, isRegular: e => e === x, isNumber: e => e === P, isMultiple: e => e === M, showNumber: (0, o.or)("showAdvanced", "isNumber"), pollOptionsCount: e => (e || []).filter((e => e.value.length > 0)).length, siteGroups: e => e.filter((e => 0 !== e.id)), isPie: (e, t) => t !== P && "pie" === e, canRemoveOption: (0, o.gt)("pollOptions.length", 1), _setPollMinMax() { this.isMultiple ? ((this.pollMin <= 0 || this.pollMin >= this.pollMax || this.pollMin >= this.pollOptionsCount) && this.set("pollMin", this.pollOptionsCount > 0 ? 1 : 0), (this.pollMax <= 0 || this.pollMin >= this.pollMax || this.pollMax > this.pollOptionsCount) && this.set("pollMax", this.pollOptionsCount)) : this.isNumber && this.set("pollMax", this.siteSettings.poll_maximum_options) }, pollOutput(e, t, l, o, i, n, s, r, a, u, p) {
         let c = "[poll", d = ""
         const h = this.toolbarEvent.getText().match(/\[poll(\s+name=[^\s\]]+)*.*\]/gim)
         h && (c += " name=poll".concat(h.length + 1))
         let g = r
         return g < 1 && (g = 1), e && (c += " type=".concat(e)), t && (c += " results=".concat(t)), n && e !== x && (c += " min=".concat(n)), s && e !== x && (c += " max=".concat(s)), e === P && (c += " step=".concat(g)), l && (c += " public=true"), p && e !== P && (c += " chartType=".concat(p)), a && a.length > 0 && (c += " groups=".concat(a)), u && (c += " close=".concat(u.toISOString())), c += "]", d += "".concat(c, "\n"), o && (d += "# ".concat(o.trim(), "\n")), i.length > 0 && e !== P && i.forEach((e => { e.value.length > 0 && (d += "* ".concat(e.value.trim(), "\n")) })), d += "[/poll]\n", d
      }, minNumOfOptionsValidation(e, t) {
         if (!e) {
            if (t < 1) return l.default.create({ failed: !0, reason: r.default.t("poll.ui_builder.help.options_min_count") })
            if (t > this.siteSettings.poll_maximum_options) return l.default.create({ failed: !0, reason: r.default.t("poll.ui_builder.help.options_max_count", { count: this.siteSettings.poll_maximum_options }) })
         } return l.default.create({ ok: !0 })
      }, showMinNumOfOptionsValidation: e => 1 !== e.length || "" !== e[0].value, minMaxValueValidation(e, t, o, i, n, s) {
         if (i = parseInt(i, 10) || 0, n = parseInt(n, 10) || 0, s = parseInt(s, 10) || 0, i < 0) return l.default.create({ failed: !0, reason: r.default.t("poll.ui_builder.help.invalid_min_value") })
         if (n < 0 || e && n > t) return l.default.create({ failed: !0, reason: r.default.t("poll.ui_builder.help.invalid_max_value") })
         if (i > n) return l.default.create({ failed: !0, reason: r.default.t("poll.ui_builder.help.invalid_values") })
         if (o) {
            if (s < 1) return l.default.create({ failed: !0, reason: r.default.t("poll.ui_builder.help.min_step_value") })
            const e = (n - i + 1) / s
            if (e < 1) return l.default.create({ failed: !0, reason: r.default.t("poll.ui_builder.help.options_min_count") })
            if (e > this.siteSettings.poll_maximum_options) return l.default.create({ failed: !0, reason: r.default.t("poll.ui_builder.help.options_max_count", { count: this.siteSettings.poll_maximum_options }) })
         } return l.default.create({ ok: !0 })
      }, disableInsert: (e, t) => !e.ok || !t.ok, _comboboxOptions: (e, t) => [...Array(t - e).keys()].map((t => ({ value: t + e, name: t + e }))), onOptionsTextChange(e) {
         let t = 0
         this.set("pollOptions", e.target.value.split("\n").map((e => l.default.create({ idx: t++, value: e }))))
      }, insertPoll() { this.toolbarEvent.addText(this.pollOutput), this.send("closeModal") }, toggleAdvanced() { this.toggleProperty("showAdvanced"), this.showAdvanced && this.set("pollOptionsText", this.pollOptions.map((e => e.value)).join("\n")) }, addOption(e, t, o) {
         if ("" !== t) {
            const t = this.pollOptions.indexOf(e) + 1, o = l.default.create({ value: "" })
            this.pollOptions.insertAt(t, o)
            let n = 0
            this.pollOptions.forEach((e => e.set("idx", n++))), (0, i.next)((() => {
               const e = document.getElementsByClassName("poll-options")
               if (e) {
                  const t = e[0].getElementsByTagName("input")
                  o.idx < t.length && t[o.idx].focus()
               }
            }))
         } o && o.preventDefault()
      }, removeOption(e) { this.pollOptions.removeObject(e) }
   }, "pollResults", [n.default], Object.getOwnPropertyDescriptor(y, "pollResults"), y), O(y, "isRegular", [a], Object.getOwnPropertyDescriptor(y, "isRegular"), y), O(y, "isNumber", [u], Object.getOwnPropertyDescriptor(y, "isNumber"), y), O(y, "isMultiple", [p], Object.getOwnPropertyDescriptor(y, "isMultiple"), y), O(y, "pollOptionsCount", [c], Object.getOwnPropertyDescriptor(y, "pollOptionsCount"), y), O(y, "siteGroups", [d], Object.getOwnPropertyDescriptor(y, "siteGroups"), y), O(y, "isPie", [h], Object.getOwnPropertyDescriptor(y, "isPie"), y), O(y, "_setPollMinMax", [g], Object.getOwnPropertyDescriptor(y, "_setPollMinMax"), y), O(y, "pollOutput", [b], Object.getOwnPropertyDescriptor(y, "pollOutput"), y), O(y, "minNumOfOptionsValidation", [m], Object.getOwnPropertyDescriptor(y, "minNumOfOptionsValidation"), y), O(y, "showMinNumOfOptionsValidation", [f], Object.getOwnPropertyDescriptor(y, "showMinNumOfOptionsValidation"), y), O(y, "minMaxValueValidation", [v], Object.getOwnPropertyDescriptor(y, "minMaxValueValidation"), y), O(y, "disableInsert", [_], Object.getOwnPropertyDescriptor(y, "disableInsert"), y), O(y, "onOptionsTextChange", [l.action], Object.getOwnPropertyDescriptor(y, "onOptionsTextChange"), y), O(y, "insertPoll", [l.action], Object.getOwnPropertyDescriptor(y, "insertPoll"), y), O(y, "toggleAdvanced", [l.action], Object.getOwnPropertyDescriptor(y, "toggleAdvanced"), y), O(y, "addOption", [l.action], Object.getOwnPropertyDescriptor(y, "addOption"), y), O(y, "removeOption", [l.action], Object.getOwnPropertyDescriptor(y, "removeOption"), y), y))
   e.default = C
})), define("discourse/plugins/poll/discourse/templates/components/poll-breakdown-chart", ["exports", "@ember/template-factory"], (function (e, t) {
   "use strict"
   Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
   var l = (0, t.createTemplateFactory)({ id: "IU+EFALE", block: '[[[10,"label"],[14,0,"poll-breakdown-chart-label"],[12],[1,[30,1]],[13],[1,"\\n"],[10,"canvas"],[14,0,"poll-breakdown-chart-chart"],[12],[13],[1,"\\n"]],["@group"],false,[]]', moduleName: "discourse/plugins/poll/discourse/templates/components/poll-breakdown-chart.hbs", isStrictMode: !1 })
   e.default = l
})), define("discourse/plugins/poll/discourse/templates/components/poll-breakdown-option", ["exports", "@ember/template-factory"], (function (e, t) {
   "use strict"
   Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
   var l = (0, t.createTemplateFactory)({ id: "AH9K5QwE", block: '[[[11,"li"],[24,0,"poll-breakdown-option"],[16,5,[30,0,["colorBackgroundStyle"]]],[24,"role","button"],[4,[38,0],["mouseover",[30,1]],null],[4,[38,0],["mouseout",[30,2]],null],[12],[1,"\\n  "],[10,1],[14,0,"poll-breakdown-option-color"],[15,5,[30,0,["colorPreviewStyle"]]],[12],[13],[1,"\\n\\n  "],[10,1],[14,0,"poll-breakdown-option-count"],[12],[1,"\\n"],[41,[30,0,["showPercentage"]],[[[1,"      "],[1,[30,0,["percent"]]],[1,"%\\n"]],[]],[[[1,"      "],[1,[30,3,["votes"]]],[1,"\\n"]],[]]],[1,"  "],[13],[1,"\\n  "],[10,1],[14,0,"poll-breakdown-option-text"],[12],[1,[28,[35,2],[[30,3,["html"]]],null]],[13],[1,"\\n"],[13],[1,"\\n"]],["@onMouseOver","@onMouseOut","@option"],false,["on","if","html-safe"]]', moduleName: "discourse/plugins/poll/discourse/templates/components/poll-breakdown-option.hbs", isStrictMode: !1 })
   e.default = l
})), define("discourse/plugins/poll/discourse/templates/modal/poll-breakdown", ["exports", "@ember/template-factory"], (function (e, t) {
   "use strict"
   Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
   var l = (0, t.createTemplateFactory)({ id: "jhkUWGMw", block: '[[[8,[39,0],null,[["@title"],["poll.breakdown.title"]],[["default"],[[[[1,"\\n  "],[10,0],[14,0,"poll-breakdown-sidebar"],[12],[1,"\\n    "],[10,2],[14,0,"poll-breakdown-title"],[12],[1,"\\n      "],[1,[30,0,["title"]]],[1,"\\n    "],[13],[1,"\\n\\n    "],[10,0],[14,0,"poll-breakdown-total-votes"],[12],[1,[28,[35,1],["poll.breakdown.votes"],[["count"],[[30,0,["model","poll","voters"]]]]]],[13],[1,"\\n\\n    "],[10,"ul"],[14,0,"poll-breakdown-options"],[12],[1,"\\n"],[42,[28,[37,3],[[28,[37,3],[[30,0,["model","poll","options"]]],null]],null],null,[[[1,"        "],[8,[39,4],null,[["@option","@index","@totalVotes","@optionsCount","@displayMode","@highlightedOption","@onMouseOver","@onMouseOut"],[[30,1],[30,2],[30,0,["totalVotes"]],[30,0,["model","poll","options","length"]],[30,0,["displayMode"]],[30,0,["highlightedOption"]],[28,[37,5],[[28,[37,6],[[30,0,["highlightedOption"]]],null],[30,2]],null],[28,[37,5],[[28,[37,6],[[30,0,["highlightedOption"]]],null],null],null]]],null],[1,"\\n"]],[1,2]],null],[1,"    "],[13],[1,"\\n  "],[13],[1,"\\n\\n  "],[10,0],[14,0,"poll-breakdown-body"],[12],[1,"\\n    "],[10,0],[14,0,"poll-breakdown-body-header"],[12],[1,"\\n      "],[10,"label"],[14,0,"poll-breakdown-body-header-label"],[12],[1,[28,[35,1],["poll.breakdown.breakdown"],null]],[13],[1,"\\n\\n      "],[8,[39,7],null,[["@content","@value","@nameProperty","@class","@onChange"],[[30,0,["groupableUserFields"]],[30,0,["groupedBy"]],"label","poll-breakdown-dropdown",[28,[37,8],[[30,0],[30,0,["setGrouping"]]],null]]],null],[1,"\\n    "],[13],[1,"\\n\\n    "],[10,0],[14,0,"poll-breakdown-charts"],[12],[1,"\\n"],[42,[28,[37,3],[[28,[37,3],[[30,0,["charts"]]],null]],null],null,[[[1,"        "],[8,[39,9],null,[["@group","@options","@displayMode","@highlightedOption","@setHighlightedOption"],[[28,[37,10],[[30,3],"group"],null],[28,[37,10],[[30,3],"options"],null],[30,0,["displayMode"]],[30,0,["highlightedOption"]],[28,[37,5],[[28,[37,6],[[30,0,["highlightedOption"]]],null]],null]]],null],[1,"\\n"]],[3]],null],[1,"    "],[13],[1,"\\n  "],[13],[1,"\\n"]],[]]]]],[1,"\\n"]],["option","index","chart"],false,["d-modal-body","i18n","each","-track-array","poll-breakdown-option","fn","mut","combo-box","action","poll-breakdown-chart","get"]]', moduleName: "discourse/plugins/poll/discourse/templates/modal/poll-breakdown.hbs", isStrictMode: !1 })
   e.default = l
})), define("discourse/plugins/poll/discourse/templates/modal/poll-ui-builder", ["exports", "@ember/template-factory"], (function (e, t) {
   "use strict"
   Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
   var l = (0, t.createTemplateFactory)({ id: "b81+RtdJ", block: '[[[8,[39,0],null,[["@title","@class"],["poll.ui_builder.title","poll-ui-builder"]],[["default"],[[[[1,"\\n  "],[10,0],[14,0,"input-group poll-type"],[12],[1,"\\n    "],[11,3],[24,6,""],[16,0,[29,["poll-type-value ",[52,[30,0,["isRegular"]],"active"]]]],[4,[38,2],[[30,0],[28,[37,3],[[30,0,["pollType"]]],null],"regular"],null],[12],[1,"\\n      "],[1,[28,[35,4],["poll.ui_builder.poll_type.regular"],null]],[1,"\\n    "],[13],[1,"\\n\\n    "],[11,3],[24,6,""],[16,0,[29,["poll-type-value ",[52,[30,0,["isMultiple"]],"active"]]]],[4,[38,2],[[30,0],[28,[37,3],[[30,0,["pollType"]]],null],"multiple"],null],[12],[1,"\\n      "],[1,[28,[35,4],["poll.ui_builder.poll_type.multiple"],null]],[1,"\\n    "],[13],[1,"\\n\\n"],[41,[30,0,["showNumber"]],[[[1,"      "],[11,3],[24,6,""],[16,0,[29,["poll-type-value ",[52,[30,0,["isNumber"]],"active"]]]],[4,[38,2],[[30,0],[28,[37,3],[[30,0,["pollType"]]],null],"number"],null],[12],[1,"\\n        "],[1,[28,[35,4],["poll.ui_builder.poll_type.number"],null]],[1,"\\n      "],[13],[1,"\\n"]],[]],null],[1,"  "],[13],[1,"\\n\\n"],[41,[30,0,["showAdvanced"]],[[[1,"    "],[10,0],[14,0,"input-group poll-title"],[12],[1,"\\n      "],[10,"label"],[14,0,"input-group-label"],[12],[1,[28,[35,4],["poll.ui_builder.poll_title.label"],null]],[13],[1,"\\n      "],[8,[39,5],null,[["@value"],[[30,0,["pollTitle"]]]],null],[1,"\\n    "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[51,[30,0,["isNumber"]]],[[[1,"    "],[10,0],[14,0,"poll-options"],[12],[1,"\\n"],[41,[30,0,["showAdvanced"]],[[[1,"        "],[10,"label"],[14,0,"input-group-label"],[12],[1,[28,[35,4],["poll.ui_builder.poll_options.label"],null]],[13],[1,"\\n        "],[8,[39,7],[[4,[38,8],["input",[28,[37,2],[[30,0],"onOptionsTextChange"],null]],null]],[["@value"],[[30,0,["pollOptionsText"]]]],null],[1,""],[41,[30,0,["showMinNumOfOptionsValidation"]],[[[41,[51,[30,0,["minNumOfOptionsValidation","ok"]]],[[[1,"            "],[8,[39,9],null,[["@validation"],[[30,0,["minNumOfOptionsValidation"]]]],null],[1,"\\n"]],[]],null]],[]],null]],[]],[[[42,[28,[37,11],[[28,[37,11],[[30,0,["pollOptions"]]],null]],null],null,[[[1,"          "],[10,0],[14,0,"input-group poll-option-value"],[12],[1,"\\n            "],[8,[39,5],null,[["@value","@enter"],[[30,1,["value"]],[28,[37,2],[[30,0],"addOption",[30,1]],null]]],null],[1,"\\n"],[41,[30,0,["canRemoveOption"]],[[[1,"              "],[8,[39,12],null,[["@icon","@action"],["trash-alt",[28,[37,2],[[30,0],"removeOption",[30,1]],null]]],null],[1,"\\n"]],[]],null],[1,"          "],[13],[1,"\\n"]],[1]],null],[1,"\\n        "],[10,0],[14,0,"poll-option-controls"],[12],[1,"\\n          "],[8,[39,12],null,[["@class","@icon","@label","@action"],["btn-default","plus","poll.ui_builder.poll_options.add",[28,[37,2],[[30,0],"addOption",[30,0,["pollOptions","lastObject"]]],null]]],null],[1,"\\n"],[41,[28,[37,13],[[30,0,["showMinNumOfOptionsValidation"]],[28,[37,14],[[30,0,["minNumOfOptionsValidation","ok"]]],null]],null],[[[1,"            "],[8,[39,9],null,[["@validation"],[[30,0,["minNumOfOptionsValidation"]]]],null],[1,"\\n"]],[]],null],[1,"        "],[13],[1,"\\n"]],[]]],[1,"    "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[51,[30,0,["isRegular"]]],[[[1,"    "],[10,0],[14,0,"options"],[12],[1,"\\n      "],[10,0],[14,0,"input-group poll-number"],[12],[1,"\\n        "],[10,"label"],[14,0,"input-group-label"],[12],[1,[28,[35,4],["poll.ui_builder.poll_config.min"],null]],[13],[1,"\\n        "],[8,[39,5],[[24,0,"poll-options-min"],[24,"min","1"]],[["@type","@value"],["number",[30,0,["pollMin"]]]],null],[1,"\\n      "],[13],[1,"\\n\\n      "],[10,0],[14,0,"input-group poll-number"],[12],[1,"\\n        "],[10,"label"],[14,0,"input-group-label"],[12],[1,[28,[35,4],["poll.ui_builder.poll_config.max"],null]],[13],[1,"\\n        "],[8,[39,5],[[24,0,"poll-options-max"],[24,"min","1"]],[["@type","@value"],["number",[30,0,["pollMax"]]]],null],[1,"\\n      "],[13],[1,"\\n\\n"],[41,[30,0,["isNumber"]],[[[1,"        "],[10,0],[14,0,"input-group poll-number"],[12],[1,"\\n          "],[10,"label"],[14,0,"input-group-label"],[12],[1,[28,[35,4],["poll.ui_builder.poll_config.step"],null]],[13],[1,"\\n          "],[8,[39,5],[[24,"min","1"],[24,0,"poll-options-step"]],[["@type","@value"],["number",[30,0,["pollStep"]]]],null],[1,"\\n        "],[13],[1,"\\n"]],[]],null],[1,"    "],[13],[1,"\\n\\n"],[41,[51,[30,0,["minMaxValueValidation","ok"]]],[[[1,"      "],[8,[39,9],null,[["@validation"],[[30,0,["minMaxValueValidation"]]]],null],[1,"\\n"]],[]],null]],[]],null],[1,"\\n"],[41,[30,0,["showAdvanced"]],[[[1,"    "],[10,0],[14,0,"input-group poll-allowed-groups"],[12],[1,"\\n      "],[10,"label"],[14,0,"input-group-label"],[12],[1,[28,[35,4],["poll.ui_builder.poll_groups.label"],null]],[13],[1,"\\n      "],[8,[39,15],null,[["@content","@value","@onChange","@labelProperty","@valueProperty"],[[30,0,["siteGroups"]],[30,0,["pollGroups"]],[28,[37,2],[[30,0],[28,[37,3],[[30,0,["pollGroups"]]],null]],null],"name","name"]],null],[1,"\\n    "],[13],[1,"\\n\\n    "],[10,0],[14,0,"input-group poll-date"],[12],[1,"\\n      "],[10,"label"],[14,0,"input-group-label"],[12],[1,[28,[35,4],["poll.ui_builder.automatic_close.label"],null]],[13],[1,"\\n      "],[8,[39,16],null,[["@date","@onChange","@clearable","@useGlobalPickerContainer"],[[30,0,["pollAutoClose"]],[28,[37,2],[[30,0],[28,[37,3],[[30,0,["pollAutoClose"]]],null]],null],true,true]],null],[1,"\\n    "],[13],[1,"\\n\\n    "],[10,0],[14,0,"input-group poll-select"],[12],[1,"\\n      "],[10,"label"],[14,0,"input-group-label"],[12],[1,[28,[35,4],["poll.ui_builder.poll_result.label"],null]],[13],[1,"\\n      "],[8,[39,17],null,[["@content","@value","@class","@valueProperty","@onChange"],[[30,0,["pollResults"]],[30,0,["pollResult"]],"poll-result","value",[28,[37,2],[[30,0],[28,[37,3],[[30,0,["pollResult"]]],null]],null]]],null],[1,"\\n    "],[13],[1,"\\n\\n"],[41,[51,[30,0,["isNumber"]]],[[[1,"      "],[10,0],[14,0,"input-group poll-select column"],[12],[1,"\\n        "],[10,"label"],[14,0,"input-group-label"],[12],[1,[28,[35,4],["poll.ui_builder.poll_chart_type.label"],null]],[13],[1,"\\n\\n        "],[10,0],[14,0,"radio-group"],[12],[1,"\\n          "],[8,[39,18],null,[["@id","@name","@value","@selection"],["poll-chart-type-bar","poll-chart-type","bar",[30,0,["chartType"]]]],null],[1,"\\n          "],[10,"label"],[14,"for","poll-chart-type-bar"],[12],[1,[28,[35,19],["chart-bar"],null]],[1," "],[1,[28,[35,4],["poll.ui_builder.poll_chart_type.bar"],null]],[13],[1,"\\n        "],[13],[1,"\\n\\n        "],[10,0],[14,0,"radio-group"],[12],[1,"\\n          "],[8,[39,18],null,[["@id","@name","@value","@selection"],["poll-chart-type-pie","poll-chart-type","pie",[30,0,["chartType"]]]],null],[1,"\\n          "],[10,"label"],[14,"for","poll-chart-type-pie"],[12],[1,[28,[35,19],["chart-pie"],null]],[1," "],[1,[28,[35,4],["poll.ui_builder.poll_chart_type.pie"],null]],[13],[1,"\\n        "],[13],[1,"\\n      "],[13],[1,"\\n"]],[]],null],[1,"\\n"],[41,[51,[30,0,["isPie"]]],[[[1,"      "],[10,0],[14,0,"input-group poll-checkbox column"],[12],[1,"\\n        "],[10,"label"],[12],[1,"\\n          "],[8,[39,5],null,[["@type","@checked"],["checkbox",[30,0,["publicPoll"]]]],null],[1,"\\n          "],[1,[28,[35,4],["poll.ui_builder.poll_public.label"],null]],[1,"\\n        "],[13],[1,"\\n      "],[13],[1,"\\n"]],[]],null]],[]],null]],[]]]]],[1,"\\n\\n"],[10,0],[14,0,"modal-footer"],[12],[1,"\\n  "],[8,[39,12],null,[["@action","@icon","@class","@label","@disabled"],[[28,[37,2],[[30,0],"insertPoll"],null],"chart-bar","btn-primary","poll.ui_builder.insert",[30,0,["disableInsert"]]]],null],[1,"\\n\\n  "],[8,[39,12],null,[["@label","@class","@action"],["cancel","btn-flat",[28,[37,20],["closeModal"],null]]],null],[1,"\\n\\n  "],[8,[39,12],null,[["@action","@class","@icon","@title"],[[28,[37,2],[[30,0],"toggleAdvanced"],null],"btn-default show-advanced","cog",[52,[30,0,["showAdvanced"]],"poll.ui_builder.hide_advanced","poll.ui_builder.show_advanced"]]],null],[1,"\\n"],[13],[1,"\\n"]],["option"],false,["d-modal-body","if","action","mut","i18n","input","unless","textarea","on","input-tip","each","-track-array","d-button","and","not","group-chooser","date-time-input","combo-box","radio-button","d-icon","route-action"]]', moduleName: "discourse/plugins/poll/discourse/templates/modal/poll-ui-builder.hbs", isStrictMode: !1 })
   e.default = l
})), define("discourse/plugins/poll/initializers/add-poll-ui-builder", ["exports", "discourse-common/utils/decorators", "discourse/lib/show-modal", "discourse/lib/plugin-api"], (function (e, t, l, o) {
   "use strict"
   function i(e) {
      var o, i, n, s, r, a, u, p
      e.modifyClass("controller:composer", (o = (0, t.default)("siteSettings.poll_enabled", "siteSettings.poll_minimum_trust_level_to_create", "model.topic.pm_with_non_human_user"), n = i = { pluginId: "discourse-poll-ui-builder", canBuildPoll(e, t, l) { return e && (l || this.currentUser && (this.currentUser.staff || this.currentUser.trust_level >= t)) }, actions: { showPollBuilder() { (0, l.default)("poll-ui-builder").set("toolbarEvent", this.toolbarEvent) } } }, s = "canBuildPoll", r = [o], a = Object.getOwnPropertyDescriptor(i, "canBuildPoll"), u = i, p = {}, Object.keys(a).forEach((function (e) { p[e] = a[e] })), p.enumerable = !!p.enumerable, p.configurable = !!p.configurable, ("value" in p || p.initializer) && (p.writable = !0), p = r.slice().reverse().reduce((function (e, t) { return t(n, s, e) || e }), p), u && void 0 !== p.initializer && (p.value = p.initializer ? p.initializer.call(u) : void 0, p.initializer = void 0), void 0 === p.initializer && (Object.defineProperty(n, s, p), p = null), i)), e.addToolbarPopupMenuOptionsCallback((() => ({ action: "showPollBuilder", icon: "chart-bar", label: "poll.ui_builder.title", condition: "canBuildPoll" })))
   } Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
   var n = { name: "add-poll-ui-builder", initialize() { (0, o.withPluginApi)("0.8.7", i) } }
   e.default = n
})), define("discourse/plugins/poll/initializers/extend-for-poll", ["exports", "@ember/object", "discourse/widgets/glue", "discourse-common/lib/get-owner", "discourse-common/utils/decorators", "discourse/lib/plugin-api"], (function (e, t, l, o, i, n) {
   "use strict"
   Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
   const s = "discourse-poll"
   let r = [], a = null
   function u() { r.forEach((e => e.queueRerender())) } function p() { a && (clearInterval(a), a = null), r.forEach((e => e.cleanUp())), r = [] } function c(e) {
      var n, c
      const d = (0, o.getRegister)(e), h = e.container.lookup("service:site-settings").poll_groupable_user_fields
      var g, b, m, f, v, _
      p(), e.modifyClass("controller:topic", {
         pluginId: s, subscribe() {
            this._super(...arguments), this.messageBus.subscribe("/polls/".concat(this.model.id), (e => {
               const t = this.get("model.postStream").findLoadedPost(e.post_id)
               null == t || t.set("polls", e.polls)
            }))
         }, unsubscribe() { this.messageBus.unsubscribe("/polls/*"), this._super(...arguments) }
      }), e.modifyClass("model:post", (n = (0, i.observes)("polls"), g = c = {
         pluginId: s, _polls: null, pollsObject: null, pollsChanged() {
            const e = this.polls
            e && (this._polls = this._polls || {}, e.forEach((e => { this._polls[e.name] ? this._polls[e.name].setProperties(e) : this._polls[e.name] = t.default.create(e) })), this.set("pollsObject", this._polls), u())
         }
      }, b = "pollsChanged", m = [n], f = Object.getOwnPropertyDescriptor(c, "pollsChanged"), v = c, _ = {}, Object.keys(f).forEach((function (e) { _[e] = f[e] })), _.enumerable = !!_.enumerable, _.configurable = !!_.configurable, ("value" in _ || _.initializer) && (_.writable = !0), _ = m.slice().reverse().reduce((function (e, t) { return t(g, b, e) || e }), _), v && void 0 !== _.initializer && (_.value = _.initializer ? _.initializer.call(v) : void 0, _.initializer = void 0), void 0 === _.initializer && (Object.defineProperty(g, b, _), _ = null), c)), e.includePostAttributes("polls", "polls_votes"), e.decorateCookedElement((function (o, i) {
         let n = [...o.querySelectorAll(".poll")]
         if (n = n.filter((e => "BLOCKQUOTE" !== e.parentNode.tagName)), !n.length || !i) return
         const s = i.getModel()
         e.preventCloak(s.id), s.pollsChanged()
         const p = s.pollsObject || {}, c = s.polls_votes || {}
         a = a || setInterval(u, 3e4), n.forEach((e => {
            var o
            const i = e.dataset.pollName
            let n = p[i], a = s, u = c[i] || []
            const g = null === (o = e.closest(".expanded-quote")) || void 0 === o ? void 0 : o.dataset.postId
            if (g && s.quoted[g] && (a = s.quoted[g], a = t.default.create(a), n = t.default.create(a.polls.findBy("name", i)), u = a.polls_votes || {}, u = u[i] || []), n) {
               const t = e.querySelector(".poll-title"), o = { id: "".concat(i, "-").concat(a.id), post: a, poll: n, vote: u, hasSavedVote: u.length > 0, titleHTML: null == t ? void 0 : t.outerHTML, groupableUserFields: (h || "").split("|").filter(Boolean) }, s = new l.default("discourse-poll", d, o)
               s.appendTo(e), r.push(s)
            }
         }))
      }), { onlyStream: !0, id: "discourse-poll" }), e.cleanupStream(p)
   } var d = { name: "extend-for-poll", initialize() { (0, n.withPluginApi)("0.8.7", c) } }
   e.default = d
})), define("discourse/plugins/poll/lib/chart-colors", ["exports"], (function (e) {
   "use strict"
   Object.defineProperty(e, "__esModule", { value: !0 }), e.getColors = function (e, t) {
      let l
      switch (t = t || "cool") {
         case "cool": l = { 0: [255, 255, 255], 25: [220, 237, 200], 50: [66, 179, 213], 75: [26, 39, 62], 100: [0, 0, 0] }
            break
         case "warm": l = { 0: [255, 255, 255], 25: [254, 235, 101], 50: [228, 82, 27], 75: [77, 52, 47], 100: [0, 0, 0] }
      }let o, i, n = Object.keys(l), s = []
      for (let r = 0; r < e; r++) {
         let t
         o = (r + 1) * (100 / (e + 1)), i = i || 0
         for (let e = i; e < n.length; e++) {
            if (!n[e + 1]) {
               t = e - 1
               break
            } if (o >= n[e] && o < n[e + 1]) {
               t = e
               break
            }
         } let a = (o - n[t]) / (n[t + 1] - n[t]), u = []
         for (let e = 0; e < 3; e++)u.push(Math.round(l[n[t]][e] - (l[n[t]][e] - l[n[t + 1]][e]) * a))
         s.push("rgb(".concat(u.toString(), ")")), i = t
      } return s
   }
})), define("discourse/plugins/poll/lib/discourse-markdown/poll", ["exports", "I18n"], (function (e, t) {
   "use strict"
   Object.defineProperty(e, "__esModule", { value: !0 }), e.setup = function (e) { e.allowList(["div.poll", "div.poll-info", "div.poll-container", "div.poll-title", "div.poll-buttons", "div[data-*]", "span.info-number", "span.info-text", "span.info-label", "a.button.cast-votes", "a.button.toggle-results", "li[data-*]"]), function (e) { e.registerOptions(((e, t) => { t.poll_enabled || (e.features.poll = !1), e.pollMaximumOptions = t.poll_maximum_options })), e.registerPlugin((e => { e.block.bbcode.ruler.push("poll", n) })) }(e) }
   /*!
      * Joseph Myer's md5() algorithm wrapped in a self-invoked function to prevent
      * global namespace pollution, modified to hash unicode characters as UTF-8.
      *
      * Copyright 1999-2010, Joseph Myers, Paul Johnston, Greg Holt, Will Bond <will@wbond.net>
      * http://www.myersdaily.org/joseph/javascript/md5-text.html
      * http://pajhome.org.uk/crypt/md5
      *
      * Released under the BSD license
      * http://www.opensource.org/licenses/bsd-license
      */
   const l = "data-poll-", o = ["close", "max", "min", "name", "order", "public", "results", "chartType", "groups", "status", "step", "type"]
   function i(e, t) { e.push("text", "", 0).content = "[/" + t + "]" } const n = {
      tag: "poll", before(e, t, l) {
         let o = e.push("text", "", 0)
         o.content = l, o.bbcode_attrs = t.attrs, o.bbcode_type = "poll_open"
      }, after(e, n, r) {
         const a = function (e, t) {
            const l = e.indexOf(t)
            if (-1 === l) return
            const o = e.slice(l), i = o.findIndex((e => "heading_open" === e.type)), n = o.findIndex((e => "heading_close" === e.type))
            if (-1 === i || -1 === n) return
            const s = o.slice(i + 1, n)
            return e.splice(l + i, n - i + 1), s
         }(e.tokens, n)
         let u = function (e, t) {
            let l = e.length - 1, o = [], i = []
            for (; e[l] !== t; l--) {
               if (0 === l) return
               let t = e[l]
               if (0 === t.level && "ol" !== t.tag && "ul" !== t.tag) return
               if (1 === t.level && 1 === t.nesting) {
                  if ("li" !== t.tag) return
                  o.push([t, i.reverse().join(" ")])
               } 1 === t.level && 1 === t.nesting && "li" === t.tag ? i = [] : "text" !== t.type && "inline" !== t.type || i.push(t.content)
            } return o.reverse()
         }(e.tokens, n)
         if (!u) return i(e, r)
         const p = n.bbcode_attrs, c = [["class", "poll"]]
         p.status || c.push(["data-poll-status", "open"]), o.forEach((e => { p[e] && c.push([l + e, p[e]]) })), p.name || c.push(["data-poll-name", "poll"])
         let h = parseInt(p.min, 10), b = parseInt(p.max, 10), m = parseInt(p.step, 10)
         m < 1 && (m = 1)
         let f = [], v = new e.Token("poll_open", "div", 1)
         if (v.block = !0, v.attrs = c, f.push(v), v = new e.Token("poll_open", "div", 1), v.block = !0, f.push(v), v = new e.Token("poll_open", "div", 1), v.attrs = [["class", "poll-container"]], f.push(v), a && (v = new e.Token("title_open", "div", 1), v.attrs = [["class", "poll-title"]], f.push(v), f.push(...a), v = new e.Token("title_close", "div", -1), f.push(v)), "number" === p.type) {
            if (isNaN(h) && (h = 1), isNaN(b) && (b = e.md.options.discourse.pollMaximumOptions), isNaN(m) && (m = 1), u.length > 0) return i(e, r)
            v = new e.Token("bullet_list_open", "ul", 1), f.push(v)
            for (let t = h; t <= b; t += m)v = new e.Token("list_item_open", "li", 1), u.push([v, String(t)]), f.push(v), v = new e.Token("text", "", 0), v.content = String(t), f.push(v), v = new e.Token("list_item_close", "li", -1), f.push(v)
            v = new e.Token("bullet_item_close", "", -1), f.push(v)
         } for (let t = 0; t < u.length; t++) {
            v = u[t][0]
            let e = u[t][1]
            v.attrs = v.attrs || []
            let l = function (e) {
               for (let t = 0; t < e.length; t++)e[t] = g(e[t])
               return e.join("")
            }(function (e) {
               let t, l = (e = unescape(encodeURI(e))).length, o = [1732584193, -271733879, -1732584194, 271733878]
               for (t = 64; t <= e.length; t += 64)s(o, d(e.substring(t - 64, t)))
               e = e.substring(t - 64)
               let i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
               for (t = 0; t < e.length; t++)i[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3)
               if (i[t >> 2] |= 128 << (t % 4 << 3), t > 55) for (s(o, i), t = 0; t < 16; t++)i[t] = 0
               return i[14] = 8 * l, s(o, i), o
            }(JSON.stringify([e])))
            v.attrs.push(["data-poll-option-id", l])
         } (function (e, t, l) {
            let o = e.indexOf(t), i = e[o].level
            for (e.splice(o, 1, ...l), l[0].map = t.map; o < e.length; o++) {
               let t = e[o].nesting
               t < 0 && i--, e[o].level = i, t > 0 && i++
            }
         })(e.tokens, n, f), e.level = e.tokens[e.tokens.length - 1].level, e.push("poll_close", "div", -1), v = e.push("poll_open", "div", 1), v.attrs = [["class", "poll-info"]], e.push("paragraph_open", "p", 1), v = e.push("span_open", "span", 1), v.block = !1, v.attrs = [["class", "info-number"]], v = e.push("text", "", 0), v.content = "0", e.push("span_close", "span", -1), v = e.push("span_open", "span", 1), v.block = !1, v.attrs = [["class", "info-label"]], v = e.push("text", "", 0), v.content = t.default.t("poll.voters", { count: 0 }), e.push("span_close", "span", -1), e.push("paragraph_close", "p", -1), e.push("poll_close", "div", -1), e.push("poll_close", "div", -1), e.push("poll_close", "div", -1)
      }
   }
   function s(e, t) {
      let l = e[0], o = e[1], i = e[2], n = e[3]
      l = a(l, o, i, n, t[0], 7, -680876936), n = a(n, l, o, i, t[1], 12, -389564586), i = a(i, n, l, o, t[2], 17, 606105819), o = a(o, i, n, l, t[3], 22, -1044525330), l = a(l, o, i, n, t[4], 7, -176418897), n = a(n, l, o, i, t[5], 12, 1200080426), i = a(i, n, l, o, t[6], 17, -1473231341), o = a(o, i, n, l, t[7], 22, -45705983), l = a(l, o, i, n, t[8], 7, 1770035416), n = a(n, l, o, i, t[9], 12, -1958414417), i = a(i, n, l, o, t[10], 17, -42063), o = a(o, i, n, l, t[11], 22, -1990404162), l = a(l, o, i, n, t[12], 7, 1804603682), n = a(n, l, o, i, t[13], 12, -40341101), i = a(i, n, l, o, t[14], 17, -1502002290), o = a(o, i, n, l, t[15], 22, 1236535329), l = u(l, o, i, n, t[1], 5, -165796510), n = u(n, l, o, i, t[6], 9, -1069501632), i = u(i, n, l, o, t[11], 14, 643717713), o = u(o, i, n, l, t[0], 20, -373897302), l = u(l, o, i, n, t[5], 5, -701558691), n = u(n, l, o, i, t[10], 9, 38016083), i = u(i, n, l, o, t[15], 14, -660478335), o = u(o, i, n, l, t[4], 20, -405537848), l = u(l, o, i, n, t[9], 5, 568446438), n = u(n, l, o, i, t[14], 9, -1019803690), i = u(i, n, l, o, t[3], 14, -187363961), o = u(o, i, n, l, t[8], 20, 1163531501), l = u(l, o, i, n, t[13], 5, -1444681467), n = u(n, l, o, i, t[2], 9, -51403784)
      i = u(i, n, l, o, t[7], 14, 1735328473), o = u(o, i, n, l, t[12], 20, -1926607734), l = p(l, o, i, n, t[5], 4, -378558), n = p(n, l, o, i, t[8], 11, -2022574463), i = p(i, n, l, o, t[11], 16, 1839030562), o = p(o, i, n, l, t[14], 23, -35309556), l = p(l, o, i, n, t[1], 4, -1530992060), n = p(n, l, o, i, t[4], 11, 1272893353), i = p(i, n, l, o, t[7], 16, -155497632), o = p(o, i, n, l, t[10], 23, -1094730640), l = p(l, o, i, n, t[13], 4, 681279174), n = p(n, l, o, i, t[0], 11, -358537222), i = p(i, n, l, o, t[3], 16, -722521979), o = p(o, i, n, l, t[6], 23, 76029189), l = p(l, o, i, n, t[9], 4, -640364487), n = p(n, l, o, i, t[12], 11, -421815835), i = p(i, n, l, o, t[15], 16, 530742520), o = p(o, i, n, l, t[2], 23, -995338651), l = c(l, o, i, n, t[0], 6, -198630844), n = c(n, l, o, i, t[7], 10, 1126891415), i = c(i, n, l, o, t[14], 15, -1416354905), o = c(o, i, n, l, t[5], 21, -57434055), l = c(l, o, i, n, t[12], 6, 1700485571), n = c(n, l, o, i, t[3], 10, -1894986606), i = c(i, n, l, o, t[10], 15, -1051523), o = c(o, i, n, l, t[1], 21, -2054922799), l = c(l, o, i, n, t[8], 6, 1873313359), n = c(n, l, o, i, t[15], 10, -30611744), i = c(i, n, l, o, t[6], 15, -1560198380), o = c(o, i, n, l, t[13], 21, 1309151649)
      l = c(l, o, i, n, t[4], 6, -145523070), n = c(n, l, o, i, t[11], 10, -1120210379), i = c(i, n, l, o, t[2], 15, 718787259), o = c(o, i, n, l, t[9], 21, -343485551), e[0] = b(l, e[0]), e[1] = b(o, e[1]), e[2] = b(i, e[2]), e[3] = b(n, e[3])
   } function r(e, t, l, o, i, n) { return t = b(b(t, e), b(o, n)), b(t << i | t >>> 32 - i, l) } function a(e, t, l, o, i, n, s) { return r(t & l | ~t & o, e, t, i, n, s) } function u(e, t, l, o, i, n, s) { return r(t & o | l & ~o, e, t, i, n, s) } function p(e, t, l, o, i, n, s) { return r(t ^ l ^ o, e, t, i, n, s) } function c(e, t, l, o, i, n, s) { return r(l ^ (t | ~o), e, t, i, n, s) } function d(e) {
      let t, l = []
      for (t = 0; t < 64; t += 4)l[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24)
      return l
   } let h = "0123456789abcdef".split("")
   function g(e) {
      let t = "", l = 0
      for (; l < 4; l++)t += h[e >> 8 * l + 4 & 15] + h[e >> 8 * l & 15]
      return t
   } function b(e, t) { return e + t & 4294967295 }
})), define("discourse/plugins/poll/lib/even-round", ["exports"], (function (e) {
   "use strict"
   function t(e) { return 100 === e.map((e => Math.floor(e))).reduce(((e, t) => e + t)) } Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function (e) {
      let l = e.map((e => e % 1))
      const o = Math.ceil(l.reduce(((e, t) => e + t)))
      for (let i = 0, n = l.length; i < o && i < n; i++) {
         let o = 0, i = 0
         for (let e = 0; e < l.length; e++)l[e] > o && (i = e, o = l[e])
         if (++e[i], l[i] = 0, t(e)) break
      } return e.map((e => Math.floor(e)))
   }
})), define("discourse/plugins/poll/widgets/discourse-poll", ["exports", "I18n", "discourse/plugins/poll/controllers/poll-ui-builder", "discourse/widgets/raw-html", "discourse/lib/ajax", "discourse/widgets/post", "discourse/widgets/widget", "discourse/plugins/poll/lib/even-round", "discourse/plugins/poll/lib/chart-colors", "virtual-dom", "discourse-common/lib/icon-library", "discourse/lib/load-script", "discourse/lib/ajax-error", "discourse/lib/formatter", "discourse/lib/round", "discourse/lib/show-modal", "discourse/lib/local-dates"], (function (e, t, l, o, i, n, s, r, a, u, p, c, d, h, g, b, m) {
   "use strict"
   Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
   function f(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
      const l = document.createElement("span")
      return l.innerHTML = e.html, (0, m.applyLocalDates)(l.querySelectorAll(".discourse-local-date"), t), new o.default({ html: "<span>".concat(l.innerHTML, "</span>") })
   } function v(e) { return new o.default({ html: '<span class="info-text">'.concat(e, "</span>") }) } function _(e, t) {
      const l = t && t.groups && t.groups.split(",").map((e => e.toLowerCase()))
      if (!l) return !0
      const o = e && e.groups && e.groups.map((e => e.name.toLowerCase()))
      return o && l.some((e => o.includes(e)))
   } (0, s.createWidget)("discourse-poll-option", {
      tagName: "li", buildAttributes: e => ({ tabindex: 0, "data-poll-option-id": e.option.id }), html(e) {
         const t = [], { option: l, vote: o } = e, i = o.includes(l.id)
         return e.isMultiple ? t.push((0, p.iconNode)(i ? "far-check-square" : "far-square")) : t.push((0, p.iconNode)(i ? "circle" : "far-circle")), t.push(" "), t.push(f(l, this.siteSettings)), t
      }, click(e) { e.target.closest("a") || this.sendWidgetAction("toggleOption", this.attrs.option) }, keyDown(e) { "Enter" === e.key && this.click(e) }
   }), (0, s.createWidget)("discourse-poll-load-more", {
      tagName: "div.poll-voters-toggle-expand", buildKey: e => "load-more-".concat(e.optionId), defaultState: () => ({ loading: !1 }), html: (e, t) => t.loading ? (0, u.h)("div.spinner.small") : (0, u.h)("a", (0, p.iconNode)("chevron-down")), click() {
         const { state: e, attrs: t } = this
         if (!e.loading) return e.loading = !0, this.sendWidgetAction("fetchVoters", t.optionId).finally((() => e.loading = !1))
      }
   }), (0, s.createWidget)("discourse-poll-voters", {
      tagName: "ul.poll-voters-list", buildKey: e => "poll-voters-".concat(e.optionId), html(e) {
         const t = e.voters.map((e => (0, u.h)("li", [(0, n.avatarFor)("tiny", { username: e.username, template: e.avatar_template }), " "])))
         return e.voters.length < e.totalVotes && t.push(this.attach("discourse-poll-load-more", e)), (0, u.h)("div.poll-voters", t)
      }
   }), (0, s.createWidget)("discourse-poll-standard-results", {
      tagName: "ul.results", buildKey: e => "poll-standard-results-".concat(e.id), html(e) {
         const { poll: t } = e, l = t.options
         if (l) {
            const o = t.voters, i = t.public, n = [...l].sort(((e, t) => e.votes < t.votes ? 1 : e.votes === t.votes ? e.html < t.html ? -1 : 1 : -1)), s = 0 === o ? Array(n.length).fill(0) : n.map((e => 100 * e.votes / o)), a = e.isMultiple ? s.map(Math.floor) : (0, r.default)(s)
            return n.map(((l, o) => {
               const n = [], s = a[o].toString(), r = (e.vote || []).includes(l.id)
               return n.push((0, u.h)("div.option", (0, u.h)("p", [(0, u.h)("span.percentage", "".concat(s, "%")), f(l, this.siteSettings)]))), n.push((0, u.h)("div.bar-back", (0, u.h)("div.bar", { attributes: { style: "width:".concat(s, "%") } }))), i && n.push(this.attach("discourse-poll-voters", { postId: e.post.id, optionId: l.id, pollName: t.name, totalVotes: l.votes, voters: e.voters && e.voters[l.id] || [] })), (0, u.h)("li", { className: "".concat(r ? "chosen" : "") }, n)
            }))
         }
      }
   }), (0, s.createWidget)("discourse-poll-number-results", {
      buildKey: e => "poll-number-results-".concat(e.id), html(e) {
         const { poll: l } = e, i = l.options.reduce(((e, t) => e + parseInt(t.html, 10) * parseInt(t.votes, 10)), 0), n = l.voters, s = 0 === n ? 0 : (0, g.default)(i / n, -2), r = t.default.t("poll.average_rating", { average: s }), a = [(0, u.h)("div.poll-results-number-rating", new o.default({ html: "<span>".concat(r, "</span>") }))]
         return l.public && a.push(this.attach("discourse-poll-voters", { totalVotes: l.voters, voters: e.voters || [], postId: e.post.id, pollName: l.name, pollType: l.type })), a
      }
   }), (0, s.createWidget)("discourse-poll-container", {
      tagName: "div.poll-container", buildKey: e => "poll-container-".concat(e.id), services: ["dialog"], defaultState: () => ({ voters: [] }), html(e, i) {
         const { poll: n } = e, s = n.options
         if (e.showResults) {
            const t = []
            e.titleHTML && t.push(new o.default({ html: e.titleHTML })), n.public && (i.voters = n.preloaded_voters)
            const s = "number" === n.type ? "number" : "standard", r = "number" === s || e.poll.chart_type !== l.PIE_CHART_TYPE ? "discourse-poll-".concat(s, "-results") : "discourse-poll-pie-chart"
            return t.push(this.attach(r, Object.assign({}, e, { voters: i.voters }))), t
         } if (s) {
            const l = []
            return e.titleHTML && l.push(new o.default({ html: e.titleHTML })), _(this.currentUser, n) || l.push((0, u.h)("div.alert.alert-danger", t.default.t("poll.results.groups.title", { groups: n.groups }))), l.push((0, u.h)("ul", s.map((t => this.attach("discourse-poll-option", { option: t, isMultiple: e.isMultiple, vote: e.vote }))))), l
         }
      }, fetchVoters(e) {
         const { attrs: l, state: o } = this
         let n
         return e ? (o.voters || (o.voters = {}), o.voters[e] || (o.voters[e] = []), n = o.voters[e].length) : (o.voters || (o.voters = []), n = o.voters.length), (0, i.ajax)("/polls/voters.json", { data: { post_id: l.post.id, poll_name: l.poll.name, option_id: e, page: Math.floor(n / 25) + 1, limit: 25 } }).then((t => {
            const i = e ? o.voters[e] : o.voters, n = e ? t.voters[e] : t.voters, s = new Set(i.map((e => e.username)))
            n.forEach((e => { s.has(e.username) || (s.add(e.username), i.push(e)) })), "regular" === l.poll.type && Object.keys(o.voters).forEach((t => { e !== t && (o.voters[t] = o.voters[t].filter((e => !s.has(e.username)))) })), this.scheduleRerender()
         })).catch((e => { e ? (0, d.popupAjaxError)(e) : this.dialog.alert(t.default.t("poll.error_while_fetching_voters")) }))
      }
   }), (0, s.createWidget)("discourse-poll-info", {
      tagName: "div.poll-info", multipleHelpText(e, l, o) {
         if (l > 0) if (e === l) { if (e > 1) return t.default.t("poll.multiple.help.x_options", { count: e }) } else {
            if (e > 1) return l < o ? t.default.t("poll.multiple.help.between_min_and_max_options", { min: e, max: l }) : t.default.t("poll.multiple.help.at_least_min_options", { count: e })
            if (l <= o) return t.default.t("poll.multiple.help.up_to_max_options", { count: l })
         }
      }, html(e) {
         const { poll: l } = e, o = l.voters, i = [(0, u.h)("p", [(0, u.h)("span.info-number", o.toString()), (0, u.h)("span.info-label", t.default.t("poll.voters", { count: o }))])]
         if (e.isMultiple) if (e.showResults || e.isClosed) {
            const e = l.options.reduce(((e, t) => e + parseInt(t.votes, 10)), 0)
            i.push((0, u.h)("p", [(0, u.h)("span.info-number", e.toString()), (0, u.h)("span.info-label", t.default.t("poll.total_votes", { count: e }))]))
         } else {
            const t = this.multipleHelpText(e.min, e.max, l.options.length)
            t && i.push(v(t))
         } return e.isClosed || e.showResults || !l.public || "staff_only" === l.results || i.push(v(t.default.t("poll.public.title"))), i
      }
   }), (0, s.createWidget)("discourse-poll-pie-canvas", {
      tagName: "canvas.poll-results-canvas", init(e) {
         (0, c.default)("/javascripts/Chart.min.js").then((() => {
            const t = function (e, t) {
               let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
               const i = "aspectRatio" in o ? o.aspectRatio : 2.2, n = t.map((e => O(e)))
               return { type: l.PIE_CHART_TYPE, data: { datasets: [{ data: e, backgroundColor: (0, a.getColors)(e.length) }], labels: n }, plugins: [y], options: { responsive: !0, aspectRatio: i, animation: { duration: 0 }, plugins: { legend: { labels: { generateLabels: () => t.map(((t, l) => ({ fillStyle: (0, a.getColors)(e.length)[l], text: t, index: l }))) }, display: !1 }, htmlLegend: { containerID: null == o ? void 0 : o.legendContainerId } } } }
            }(e.poll.options.mapBy("votes"), e.poll.options.mapBy("html"), { legendContainerId: "poll-results-legend-".concat(e.id) }), o = document.getElementById("poll-results-chart-".concat(e.id))
            this._chart = new Chart(o.getContext("2d"), t)
         }))
      }, willRerenderWidget() {
         var e
         null === (e = this._chart) || void 0 === e || e.destroy()
      }, buildAttributes: e => ({ id: "poll-results-chart-".concat(e.id) })
   }), (0, s.createWidget)("discourse-poll-pie-chart", {
      tagName: "div.poll-results-chart", html(e) {
         const t = []
         if (!e.showResults) return function (e) {
            let t = document.querySelector("#poll-results-chart-".concat(e))
            t && t.parentNode.removeChild(t)
         }(e.id), t
         const l = this.attach("discourse-poll-pie-canvas", e)
         return t.push(l), t.push((0, u.h)("ul#poll-results-legend-".concat(e.id, ".pie-chart-legends"))), t
      }
   })
   const y = {
      id: "htmlLegend", afterUpdate(e, t, l) {
         const o = document.getElementById(l.containerID)
         o.innerHTML = ""
         e.options.plugins.legend.labels.generateLabels(e).forEach((t => {
            const l = document.createElement("li")
            l.classList.add("legend"), l.onclick = () => { e.toggleDataVisibility(t.index), e.update() }
            const i = document.createElement("span")
            i.classList.add("swatch"), i.style.background = t.fillStyle
            const n = document.createElement("span")
            n.style.color = t.fontColor, n.innerHTML = t.text, e.getDataVisibility(t.index) ? l.style.opacity = 1 : l.style.opacity = .2, l.appendChild(i), l.appendChild(n), o.appendChild(l)
         }))
      }
   }
   function O(e) { return (new DOMParser).parseFromString(e, "text/html").body.textContent || "" } (0, s.createWidget)("discourse-poll-buttons", {
      tagName: "div.poll-buttons", html(e) {
         const l = [], { poll: i, post: n } = e, s = n.get("topic.archived"), r = e.isClosed, a = "staff_only" === i.results, u = this.currentUser && this.currentUser.staff, p = this.currentUser && this.currentUser.admin, c = this.currentUser && n.user_id === this.currentUser.id, d = this.siteSettings.data_explorer_enabled, g = !a && (r || s), b = this.siteSettings.poll_export_data_explorer_query_id
         if (e.isMultiple && !g) {
            const t = !e.canCastVotes
            l.push(this.attach("button", { className: "cast-votes ".concat(t ? "btn-default" : "btn-primary"), label: "poll.cast-votes.label", title: "poll.cast-votes.title", disabled: t, action: "castVotes" })), l.push(" ")
         } if (e.showResults || g) l.push(this.attach("button", { className: "btn-default toggle-results", label: "poll.hide-results.label", title: "poll.hide-results.title", icon: "far-eye-slash", disabled: g, action: "toggleResults" }))
         else {
            let o, n
            "on_vote" !== i.results || e.hasVoted || c ? "on_close" !== i.results || r ? "staff_only" !== i.results || u ? o = this.attach("button", { className: "btn-default toggle-results", label: "poll.show-results.label", title: "poll.show-results.title", icon: "far-eye", disabled: 0 === i.voters, action: "toggleResults" }) : n = v(t.default.t("poll.results.staff.title")) : n = v(t.default.t("poll.results.closed.title")) : n = v(t.default.t("poll.results.vote.title")), o && l.push(o), e.hasSavedVote && l.push(this.attach("button", { className: "btn-default remove-vote", label: "poll.remove-vote.label", title: "poll.remove-vote.title", icon: "trash-alt", action: "removeVote" })), n && l.push(n)
         } if (e.groupableUserFields.length && i.voters > 0) {
            const e = this.attach("button", { className: "btn-default poll-show-breakdown", label: "poll.group-results.label", title: "poll.group-results.title", icon: "far-eye", action: "showBreakdown" })
            l.push(e)
         } if (p && d && i.voters > 0 && b && l.push(this.attach("button", { className: "btn btn-default export-results", label: "poll.export-results.label", title: "poll.export-results.title", icon: "download", disabled: 0 === i.voters, action: "exportResults" })), i.close) {
            const n = moment(i.close)
            if (n.isValid()) {
               const i = n.format("LLL")
               let s
               if (e.isAutomaticallyClosed) {
                  const e = (0, h.relativeAge)(n.toDate(), { addAgo: !0 })
                  s = t.default.t("poll.automatic_close.age", { age: e })
               } else {
                  const e = moment().to(n, !0)
                  s = t.default.t("poll.automatic_close.closes_in", { timeLeft: e })
               } l.push(new o.default({ html: '<span class="info-text" title="'.concat(i, '">').concat(s, "</span>") }))
            }
         } return !this.currentUser || this.currentUser.id !== n.user_id && !u || s || (r ? e.isAutomaticallyClosed || l.push(this.attach("button", { className: "btn-default toggle-status", label: "poll.open.label", title: "poll.open.title", icon: "unlock-alt", action: "toggleStatus" })) : l.push(this.attach("button", { className: "toggle-status btn-danger", label: "poll.close.label", title: "poll.close.title", icon: "lock", action: "toggleStatus" }))), l
      }
   })
   var w = (0, s.createWidget)("discourse-poll", {
      tagName: "div", buildKey: e => "poll-".concat(e.id), services: ["dialog"], buildAttributes(e) {
         let t = "poll"
         return e.poll.chart_type === l.PIE_CHART_TYPE && (t += " pie"), { class: t, "data-poll-name": e.poll.name, "data-poll-type": e.poll.type }
      }, defaultState(e) {
         const { poll: t } = e, l = "staff_only" === e.poll.results
         return { loading: !1, showResults: "on_close" !== t.results && this.hasVoted() && !l }
      }, html(e, t) {
         const l = "staff_only" === e.poll.results, o = t.showResults || e.post.get("topic.archived") && !l || this.isClosed() && !l, i = Object.assign({}, e, { canCastVotes: this.canCastVotes(), hasVoted: this.hasVoted(), isAutomaticallyClosed: this.isAutomaticallyClosed(), isClosed: this.isClosed(), isMultiple: this.isMultiple(), max: this.max(), min: this.min(), showResults: o })
         return (0, u.h)("div", [this.attach("discourse-poll-container", i), this.attach("discourse-poll-info", i), this.attach("discourse-poll-buttons", i)])
      }, min() {
         let e = parseInt(this.attrs.poll.min, 10)
         return (isNaN(e) || e < 0) && (e = 1), e
      }, max() {
         let e = parseInt(this.attrs.poll.max, 10)
         const t = this.attrs.poll.options.length
         return (isNaN(e) || e > t) && (e = t), e
      }, isAutomaticallyClosed() {
         const { poll: e } = this.attrs
         return e.close && moment.utc(e.close) <= moment()
      }, isClosed() {
         const { poll: e } = this.attrs
         return "closed" === e.status || this.isAutomaticallyClosed()
      }, isMultiple() {
         const { poll: e } = this.attrs
         return "multiple" === e.type
      }, hasVoted() {
         const { vote: e } = this.attrs
         return e && e.length > 0
      }, canCastVotes() {
         const { state: e, attrs: t } = this
         if (this.isClosed() || e.showResults || e.loading) return !1
         const l = t.vote.length
         return this.isMultiple() ? l >= this.min() && l <= this.max() : l > 0
      }, toggleStatus() {
         const { state: e, attrs: l } = this, { post: o, poll: n } = l
         this.isAutomaticallyClosed() || this.dialog.yesNoConfirm({
            message: t.default.t(this.isClosed() ? "poll.open.confirm" : "poll.close.confirm"), didConfirm: () => {
               e.loading = !0
               const l = this.isClosed() ? "open" : "closed"; (0, i.ajax)("/polls/toggle_status", { type: "PUT", data: { post_id: o.id, poll_name: n.name, status: l } }).then((() => { n.set("status", l), "on_close" === n.results && (e.showResults = "closed" === l), this.scheduleRerender() })).catch((e => { e ? (0, d.popupAjaxError)(e) : this.dialog.alert(t.default.t("poll.error_while_toggling_status")) })).finally((() => { e.loading = !1 }))
            }
         })
      }, toggleResults() { this.state.showResults = !this.state.showResults }, removeVote() {
         const { attrs: e, state: t } = this
         return t.loading = !0, (0, i.ajax)("/polls/vote", { type: "DELETE", data: { post_id: e.post.id, poll_name: e.poll.name } }).then((t => {
            let { poll: l } = t
            e.poll.setProperties(l), e.vote.length = 0, e.hasSavedVote = !1, this.appEvents.trigger("poll:voted", l, e.post, e.vote)
         })).catch((e => (0, d.popupAjaxError)(e))).finally((() => { t.loading = !1 }))
      }, exportResults() {
         const { attrs: e } = this, l = this.siteSettings.poll_export_data_explorer_query_id; (0, i.ajax)("/admin/plugins/explorer/queries/".concat(l, "/run.csv"), { type: "POST", data: { params: JSON.stringify({ poll_name: e.poll.name, post_id: e.post.id.toString() }), explain: !1, limit: 1e6, download: 1 } }).then((t => {
            const l = document.createElement("a"), o = new Blob([t], { type: "text/csv;charset=utf-8;" })
            l.href = URL.createObjectURL(o), l.setAttribute("download", "poll-export-".concat(e.poll.name, "-").concat(e.post.id, ".csv")), l.click(), l.remove()
         })).catch((e => { e ? (0, d.popupAjaxError)(e) : this.dialog.alert(t.default.t("poll.error_while_exporting_results")) }))
      }, showLogin() { this.register.lookup("route:application").send("showLogin") }, _toggleOption(e) { const { vote: t } = this.attrs, l = t.indexOf(e.id); -1 !== l ? t.splice(l, 1) : t.push(e.id) }, toggleOption(e) {
         const { attrs: t } = this
         if (this.isClosed()) return
         if (!this.currentUser) return this.showLogin()
         if (!_(this.currentUser, this.attrs.poll)) return
         const { vote: l } = t
         return this.isMultiple() || 1 !== l.length || l[0] !== e.id ? (this.isMultiple() || (l.length = 0), this._toggleOption(e), this.isMultiple() ? void 0 : this.castVotes().catch((() => this._toggleOption(e)))) : this.removeVote()
      }, castVotes() {
         if (!this.canCastVotes()) return
         if (!this.currentUser) return this.showLogin()
         const { attrs: e, state: l } = this
         return l.loading = !0, (0, i.ajax)("/polls/vote", { type: "PUT", data: { post_id: e.post.id, poll_name: e.poll.name, options: e.vote } }).then((t => {
            let { poll: o } = t
            e.hasSavedVote = !0, e.poll.setProperties(o), this.appEvents.trigger("poll:voted", o, e.post, e.vote), "on_close" !== e.poll.results && (l.showResults = !0), "staff_only" === e.poll.results && (this.currentUser && this.currentUser.staff ? l.showResults = !0 : l.showResults = !1)
         })).catch((e => { e ? (0, d.popupAjaxError)(e) : this.dialog.alert(t.default.t("poll.error_while_casting_votes")) })).finally((() => { l.loading = !1 }))
      }, showBreakdown() { (0, b.default)("poll-breakdown", { model: this.attrs, panels: [{ id: "percentage", title: "poll.breakdown.percentage" }, { id: "count", title: "poll.breakdown.count" }] }) }
   })
   e.default = w
}))

   //# sourceMappingURL=poll-55fa65df33f5872921f0d5202ecef3918db185963fabd554a919ffa098565f56.map
   //!

   ;
