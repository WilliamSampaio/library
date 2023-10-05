define("discourse/plugins/docker_manager/discourse/components/upgrade-notice", ["exports", "discourse-common/lib/get-url"], (function (e, r) {
    "use strict"
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    var t = Ember.Component.extend({ tagName: "tr", href: function () { return (0, r.default)("/admin/upgrade") }.property() })
    e.default = t
})), define("discourse/plugins/docker_manager/discourse/templates/components/upgrade-notice", ["exports", "@ember/template-factory"], (function (e, r) {
    "use strict"
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    var t = (0, r.createTemplateFactory)({ id: "KLq3VnWN", block: '[[[41,[33,1,["admin"]],[[[1,"  "],[10,"th"],[14,"colspan","5"],[12],[1,"\\n"],[41,[33,2,["upToDate"]],[[[1,"      "],[10,3],[15,6,[29,[[36,3]]]],[14,"data-auto-route","true"],[12],[1,[28,[35,4],["docker.link_to_upgrade"],null]],[13],[1,"\\n"]],[]],[[[1,"      "],[1,[28,[35,4],["docker.upgrade"],null]],[1," "],[10,3],[15,6,[29,[[36,3]]]],[14,"data-auto-route","true"],[12],[1,[28,[35,4],["docker.perform_upgrade"],null]],[13],[1,"\\n"]],[]]],[1,"  "],[13],[1,"\\n"]],[]],null]],[],false,["if","currentUser","versionCheck","href","i18n"]]', moduleName: "discourse/plugins/docker_manager/discourse/templates/components/upgrade-notice.hbs", isStrictMode: !1 })
    e.default = t
}))

    //# sourceMappingURL=docker_manager-84a6283b1bd4afbeb13d466fb2728dff4d1332ce7be1c18994cd0d6f4128e225.map
    //!

    ;
