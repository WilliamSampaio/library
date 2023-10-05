define("discourse/plugins/discourse-solved/discourse/connectors/bread-crumbs-right/solved-status-filter", ["exports", "I18n", "discourse-common/lib/get-owner"], (function (e, t, s) {
    "use strict"
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    var o = {
        shouldRender(e, t) {
            const o = (0, s.getOwner)(this).lookup("router:main")
            if (t.siteSettings.show_filter_by_solved_status && "discovery.categories" !== o.currentPath) {
                if (t.siteSettings.allow_solved_on_all_topics) return !0
                {
                    const e = (0, s.getOwner)(this).lookup("controller:navigation/category")
                    return e && e.get("category.enable_accepted_answers")
                }
            } return !1
        }, setupComponent(e, s) {
            const o = ["all", "solved", "unsolved"].map((e => ({ name: t.default.t("solved.topic_status_filter.".concat(e)), value: e })))
            s.set("statuses", o)
            const a = window.location.search
            a.match(/solved=yes/) ? s.set("status", "solved") : a.match(/solved=no/) ? s.set("status", "unsolved") : s.set("status", "all")
        }, actions: { changeStatus(e) { e && "all" !== e && (e = "solved" === e ? "yes" : "no"), (0, s.getOwner)(this).lookup("router:main").transitionTo({ queryParams: { solved: e } }) } }
    }
    e.default = o
})), define("discourse/plugins/discourse-solved/discourse/connectors/category-custom-settings/solved-settings", ["exports"], (function (e) {
    "use strict"
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    var t = { actions: { onChangeSetting(e) { this.set("category.custom_fields.enable_accepted_answers", e ? "true" : "false") } } }
    e.default = t
})), define("discourse/plugins/discourse-solved/discourse/connectors/topic-navigation/no-answer", ["exports", "@ember/runloop", "discourse-common/config/environment"], (function (e, t, s) {
    "use strict"
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    const o = 6048e5, a = (0, s.isTesting)() ? 0 : 2e3
    var c = {
        shouldRender: (e, t) => !t.site.mobileView, setupComponent(e, s) {
            s.set("show", !1), s.setProperties({ oneWeek: o, show: !1 }), (0, t.later)((() => {
                if (!s.element || s.isDestroying || s.isDestroyed) return
                const t = e.topic, o = s.currentUser
                !t.accepted_answer && o && t.user_id === o.id && moment() - moment(t.created_at) > 6048e5 && t.postStream.posts.some((e => e.user_id !== o.id && e.can_accept_answer)) && s.set("show", !0)
            }), a)
        }
    }
    e.default = c
})), define("discourse/plugins/discourse-solved/discourse/initializers/add-topic-list-class", ["exports", "discourse-common/utils/decorators", "discourse/components/topic-list-item"], (function (e, t, s) {
    "use strict"
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    var o = {
        name: "add-topic-list-class", initialize() {
            var e, o, a, c, n, i, r, d
            s.default.reopen((e = (0, t.default)(), o = {
                unboundClassNames() {
                    let e = this._super(...arguments)
                    return this.topic.has_accepted_answer && (e += " status-solved"), e
                }
            }, a = o, c = "unboundClassNames", n = [e], i = Object.getOwnPropertyDescriptor(o, "unboundClassNames"), r = o, d = {}, Object.keys(i).forEach((function (e) { d[e] = i[e] })), d.enumerable = !!d.enumerable, d.configurable = !!d.configurable, ("value" in d || d.initializer) && (d.writable = !0), d = n.slice().reverse().reduce((function (e, t) { return t(a, c, e) || e }), d), r && void 0 !== d.initializer && (d.value = d.initializer ? d.initializer.call(r) : void 0, d.initializer = void 0), void 0 === d.initializer && (Object.defineProperty(a, c, d), d = null), o))
        }
    }
    e.default = o
})), define("discourse/plugins/discourse-solved/discourse/initializers/extend-for-solved-button", ["exports", "I18n", "discourse/models/topic", "discourse/models/user", "discourse/raw-views/topic-status", "discourse/helpers/topic-status-icons", "discourse/lib/ajax-error", "discourse/lib/plugin-api", "discourse/lib/ajax", "discourse/widgets/post-cooked", "discourse/lib/utilities", "discourse-common/lib/icon-library", "@ember/object"], (function (e, t, s, o, a, c, n, i, r, d, l, u, p) {
    "use strict"
    function v(e) {
        const s = e.getCurrentUser()
        c.default.addObject(["has_accepted_answer", "far-check-square", "solved"]), e.includePostAttributes("can_accept_answer", "can_unaccept_answer", "accepted_answer"), e.addDiscoveryQueryParam && e.addDiscoveryQueryParam("solved", { replace: !0, refreshModel: !0 }), e.addPostMenuButton("solved", (e => {
            const o = e.can_accept_answer, a = e.can_unaccept_answer, c = e.accepted_answer, n = s && s.id === e.topicCreatedById, i = c || !o || n ? "first" : "second-last-hidden"
            if (o) return { action: "acceptAnswer", icon: "far-check-square", className: "unaccepted", title: "solved.accept_answer", label: "solved.solution", position: i }
            if (a && c) { return { action: "unacceptAnswer", icon: "check-square", title: a ? "solved.unaccept_answer" : "solved.accepted_answer", className: "accepted fade-out", position: i, label: "solved.solution" } } return !o && c ? { className: "hidden", disabled: "true", position: i, beforeButton: e => e("span.accepted-text", { title: t.default.t("solved.accepted_description") }, [e("span", (0, u.iconNode)("check")), e("span.accepted-label", t.default.t("solved.solution"))]) } : void 0
        })), e.decorateWidget("post-contents:after-cooked", (e => {
            if (1 === e.attrs.post_number) {
                const t = e.getModel()
                if (t) {
                    const s = t.topic
                    if (s.accepted_answer) {
                        const t = !!s.accepted_answer.excerpt, o = "\n            <aside class='quote accepted-answer' data-post=\"".concat(s.get("accepted_answer").post_number, '" data-topic="').concat(s.id, "\">\n              <div class='title'>\n                ").concat(s.acceptedAnswerHtml, ' <div class="quote-controls"></div>\n              </div>\n              <blockquote>\n                ').concat(s.accepted_answer.excerpt, "\n              </blockquote>\n            </aside>"), a = "\n            <aside class='quote accepted-answer'>\n              <div class='title title-only'>\n                ".concat(s.acceptedAnswerHtml, "\n              </div>\n            </aside>"), c = new d.default({ cooked: t ? o : a }, e)
                        return e.rawHtml(c.init())
                    }
                }
            }
        })), e.attachWidgetAction("post", "acceptAnswer", (function () { const e = this.model, t = e.get("topic.postStream.posts").filter((e => 1 === e.post_number || e.accepted_answer)); (function (e) { const t = e.topic; (function (e) { e.get("postStream.posts").forEach((e => { e.get("post_number") > 1 && e.setProperties({ accepted_answer: !1, can_accept_answer: !0, can_unaccept_answer: !1 }) })) })(t), e.setProperties({ can_unaccept_answer: !0, can_accept_answer: !1, accepted_answer: !0 }), t.set("accepted_answer", { username: e.username, post_number: e.post_number, excerpt: e.cooked }), (0, r.ajax)("/solution/accept", { type: "POST", data: { id: e.id } }).catch(n.popupAjaxError) })(e), t.forEach((e => this.appEvents.trigger("post-stream:refresh", { id: e.id }))) })), e.attachWidgetAction("post", "unacceptAnswer", (function () {
            const e = this.model, t = e.get("topic.postStream.posts").find((e => 1 === e.post_number)); (function (e) {
                if (!e.can_unaccept_answer) return
                const t = e.topic
                e.setProperties({ can_accept_answer: !0, can_unaccept_answer: !1, accepted_answer: !1 }), t.set("accepted_answer", void 0), (0, r.ajax)("/solution/unaccept", { type: "POST", data: { id: e.id } }).catch(n.popupAjaxError)
            })(e), this.appEvents.trigger("post-stream:refresh", { id: t.id })
        })), e.registerConnectorClass && (e.registerConnectorClass("user-activity-bottom", "solved-list", { shouldRender: (e, t) => t.siteSettings.solved_enabled }), e.registerConnectorClass("user-summary-stat", "solved-count", { shouldRender: (e, t) => t.siteSettings.solved_enabled && e.model.solved_count > 0, setupComponent() { this.set("classNames", ["linked-stat"]) } }))
    } Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    var f = {
        name: "extend-for-solved-button", initialize() {
            s.default.reopen({
                acceptedAnswerHtml: (0, p.computed)("accepted_answer", "id", (function () {
                    const e = this.get("accepted_answer.username"), s = this.get("accepted_answer.post_number")
                    return e && s ? t.default.t("solved.accepted_html", { icon: (0, u.iconHTML)("check-square", { class: "accepted" }), username_lower: e.toLowerCase(), username: (0, l.formatUsername)(e), post_path: "".concat(this.url, "/").concat(s), post_number: s, user_path: o.default.create({ username: e }).path }) : ""
                }))
            }), a.default.reopen({
                statuses: (0, p.computed)((function () {
                    const e = this._super(...arguments)
                    return this.topic.has_accepted_answer ? e.push({ openTag: "span", closeTag: "span", title: t.default.t("topic_statuses.solved.help"), icon: "far-check-square", key: "solved" }) : this.topic.can_have_answer && this.siteSettings.solved_enabled && this.siteSettings.empty_box_on_unsolved && e.push({ openTag: "span", closeTag: "span", title: t.default.t("solved.has_no_accepted_answer"), icon: "far-square" }), e
                }))
            }), (0, i.withPluginApi)("0.1", v), (0, i.withPluginApi)("0.8.10", (e => { e.replaceIcon("notification.solved.accepted_notification", "check-square") })), (0, i.withPluginApi)("0.11.0", (e => { e.addAdvancedSearchOptions({ statusOptions: [{ name: t.default.t("search.advanced.statuses.solved"), value: "solved" }, { name: t.default.t("search.advanced.statuses.unsolved"), value: "unsolved" }] }) })), (0, i.withPluginApi)("0.11.7", (e => { e.addSearchSuggestion("status:solved"), e.addSearchSuggestion("status:unsolved") }))
        }
    }
    e.default = f
})), define("discourse/plugins/discourse-solved/discourse/pre-initializers/extend-category-for-solved", ["exports", "discourse/models/category", "@ember/object"], (function (e, t, s) {
    "use strict"
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    var o = { name: "extend-category-for-solved", before: "inject-discourse-objects", initialize() { t.default.reopen({ enable_accepted_answers: (0, s.computed)("custom_fields.enable_accepted_answers", { get(e) { return "true" === (0, s.get)(this.custom_fields, e) } }) }) } }
    e.default = o
})), define("discourse/plugins/discourse-solved/discourse/routes/user-activity-solved", ["exports", "discourse/routes/user-activity-stream", "I18n"], (function (e, t, s) {
    "use strict"
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    var o = t.default.extend({
        userActionType: 15, noContentHelpKey: "solved.no_solutions", emptyState() {
            const e = this.modelFor("user")
            let t, o
            return this.isCurrentUser(e) ? (t = s.default.t("solved.no_solved_topics_title"), o = s.default.t("solved.no_solved_topics_body")) : (t = s.default.t("solved.no_solved_topics_title_others", { username: e.username }), o = ""), { title: t, body: o }
        }
    })
    e.default = o
})), define("discourse/plugins/discourse-solved/discourse/solved-route-map", ["exports"], (function (e) {
    "use strict"
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    var t = { resource: "user.userActivity", map() { this.route("solved") } }
    e.default = t
})), define("discourse/plugins/discourse-solved/discourse/templates/connectors/bread-crumbs-right/solved-status-filter", ["exports", "@ember/template-factory"], (function (e, t) {
    "use strict"
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    var s = (0, t.createTemplateFactory)({ id: "a++0p91s", block: '[[[41,[33,1,["solved_enabled"]],[[[1,"  "],[1,[28,[35,2],null,[["class","content","value","valueProperty","onChange","options"],["solved-status-filter",[33,3],[33,4],"value",[28,[37,5],[[30,0],"changeStatus"],null],[28,[37,6],null,[["caretDownIcon","caretUpIcon"],["caret-right","caret-down"]]]]]]],[1,"\\n"]],[]],null]],[],false,["if","siteSettings","combo-box","statuses","status","action","hash"]]', moduleName: "discourse/plugins/discourse-solved/discourse/templates/connectors/bread-crumbs-right/solved-status-filter.hbs", isStrictMode: !1 })
    e.default = s
})), define("discourse/plugins/discourse-solved/discourse/templates/connectors/category-custom-settings/solved-settings", ["exports", "@ember/template-factory"], (function (e, t) {
    "use strict"
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    var s = (0, t.createTemplateFactory)({ id: "/uC1QglF", block: '[[[41,[51,[33,1,["allow_solved_on_all_topics"]]],[[[1,"  "],[10,"h3"],[12],[1,[28,[35,2],["solved.title"],null]],[13],[1,"\\n  "],[10,"section"],[14,0,"field"],[12],[1,"\\n    "],[10,0],[14,0,"enable-accepted-answer"],[12],[1,"\\n      "],[10,"label"],[14,0,"checkbox-label"],[12],[1,"\\n        "],[1,[28,[35,3],null,[["type","checked","change"],["checkbox",[28,[37,4],[[33,5,["enable_accepted_answers"]]],null],[28,[37,6],[[30,0],"onChangeSetting"],[["value"],["target.checked"]]]]]]],[1,"\\n        "],[1,[28,[35,2],["solved.allow_accepted_answers"],null]],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n"]],[]],null]],[],false,["unless","siteSettings","i18n","input","readonly","category","action"]]', moduleName: "discourse/plugins/discourse-solved/discourse/templates/connectors/category-custom-settings/solved-settings.hbs", isStrictMode: !1 })
    e.default = s
})), define("discourse/plugins/discourse-solved/discourse/templates/connectors/topic-after-cooked/solved-panel", ["exports", "@ember/template-factory"], (function (e, t) {
    "use strict"
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    var s = (0, t.createTemplateFactory)({ id: "l/LG5Tyf", block: '[[[41,[33,1,["accepted_answer"]],[[[1,"  "],[10,2],[14,0,"solved"],[12],[1,"\\n    "],[1,[28,[35,2],[[33,1,["acceptedAnswerHtml"]]],null]],[1,"\\n  "],[13],[1,"\\n"]],[]],null]],[],false,["if","topic","html-safe"]]', moduleName: "discourse/plugins/discourse-solved/discourse/templates/connectors/topic-after-cooked/solved-panel.hbs", isStrictMode: !1 })
    e.default = s
})), define("discourse/plugins/discourse-solved/discourse/templates/connectors/topic-navigation/no-answer", ["exports", "@ember/template-factory"], (function (e, t) {
    "use strict"
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    var s = (0, t.createTemplateFactory)({ id: "Qo7v+uig", block: '[[[41,[33,1],[[[6,[39,2],null,[["popupId","dismissDuration"],["solved-notice",[33,3]]],[["default"],[[[[1,"    "],[10,"h3"],[12],[1,[28,[35,4],["solved.no_answer.title"],null]],[13],[1,"\\n    "],[10,2],[12],[1,[28,[35,4],["solved.no_answer.description"],null]],[13],[1,"\\n"]],[]]]]]],[]],null]],[],false,["if","show","topic-navigation-popup","oneWeek","i18n"]]', moduleName: "discourse/plugins/discourse-solved/discourse/templates/connectors/topic-navigation/no-answer.hbs", isStrictMode: !1 })
    e.default = s
})), define("discourse/plugins/discourse-solved/discourse/templates/connectors/user-activity-bottom/solved-list", ["exports", "@ember/template-factory"], (function (e, t) {
    "use strict"
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    var s = (0, t.createTemplateFactory)({ id: "FKVmt62p", block: '[[[6,[39,0],null,[["route"],["userActivity.solved"]],[["default"],[[[[1,"  "],[1,[28,[35,1],["check-square"],null]],[1," "],[1,[28,[35,2],["solved.title"],null]],[1,"\\n"]],[]]]]]],[],false,["link-to","d-icon","i18n"]]', moduleName: "discourse/plugins/discourse-solved/discourse/templates/connectors/user-activity-bottom/solved-list.hbs", isStrictMode: !1 })
    e.default = s
})), define("discourse/plugins/discourse-solved/discourse/templates/connectors/user-card-metadata/accepted-answers", ["exports", "@ember/template-factory"], (function (e, t) {
    "use strict"
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    var s = (0, t.createTemplateFactory)({ id: "eU7aXenM", block: '[[[41,[33,1,["accepted_answers"]],[[[1,"  "],[10,"h3"],[12],[1,"\\n    "],[10,1],[14,0,"desc"],[12],[1,[28,[35,2],["solutions"],null]],[13],[1,"\\n    "],[1,[33,1,["accepted_answers"]]],[1,"\\n  "],[13],[1,"\\n"]],[]],null]],[],false,["if","user","i18n"]]', moduleName: "discourse/plugins/discourse-solved/discourse/templates/connectors/user-card-metadata/accepted-answers.hbs", isStrictMode: !1 })
    e.default = s
})), define("discourse/plugins/discourse-solved/discourse/templates/connectors/user-summary-stat/solved-count", ["exports", "@ember/template-factory"], (function (e, t) {
    "use strict"
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    var s = (0, t.createTemplateFactory)({ id: "tEF7uGcr", block: '[[[6,[39,0],null,[["route"],["userActivity.solved"]],[["default"],[[[[1,"  "],[1,[28,[35,1],null,[["value","label","icon"],[[33,2,["solved_count"]],"solved.solution_summary","check-square"]]]],[1,"\\n"]],[]]]]]],[],false,["link-to","user-stat","model"]]', moduleName: "discourse/plugins/discourse-solved/discourse/templates/connectors/user-summary-stat/solved-count.hbs", isStrictMode: !1 })
    e.default = s
}))

    //# sourceMappingURL=discourse-solved-a90dc1fba532a34ad74ae1d16f8c51e80e38574712a30586a3f85bd98d2d5f4a.map
    //!

    ;
