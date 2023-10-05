define("discourse/plugins/discourse-presence/discourse/components/composer-presence-display", ["exports", "discourse-common/utils/decorators", "@ember/object/computed", "@ember/component", "@ember/service"], (function (e, s, r, n, t) {
    "use strict"
    var i, l, o, a, c, u, p, d, h, m
    function v(e, s, r, n, t) {
        var i = {}
        return Object.keys(n).forEach((function (e) { i[e] = n[e] })), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = r.slice().reverse().reduce((function (r, n) { return n(e, s, r) || r }), i), t && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(t) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, s, i), i = null), i
    } Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    var b = n.default.extend((i = (0, s.default)("model.replyingToTopic", "model.editingPost", "model.whisper", "model.composerOpened"), l = (0, s.default)("model.topic.id", "isReply", "isWhisper"), o = (0, s.default)("model.topic.id", "isReply", "isWhisper"), a = (0, s.default)("isEdit", "model.post.id"), c = (0, s.observes)("replyChannelName", "whisperChannelName", "editChannelName"), u = (0, s.default)("isReply", "replyingUsers.[]", "editingUsers.[]"), p = (0, s.on)("didInsertElement"), d = (0, s.observes)("model.reply", "state", "model.post.id", "model.topic.id"), h = (0, s.on)("willDestroyElement"), v(m = {
        tagName: "", presence: (0, t.inject)(), composerPresenceManager: (0, t.inject)(), state(e, s, r, n) { if (n) return s ? "edit" : r ? "whisper" : e ? "reply" : void 0 }, isReply: (0, r.equal)("state", "reply"), isEdit: (0, r.equal)("state", "edit"), isWhisper: (0, r.equal)("state", "whisper"), replyChannelName(e, s, r) { if (e && (s || r)) return "/discourse-presence/reply/".concat(e) }, whisperChannelName(e, s, r) { if (e && this.currentUser.whisperer && (s || r)) return "/discourse-presence/whisper/".concat(e) }, editChannelName(e, s) { if (e) return "/discourse-presence/edit/".concat(s) }, _setupChannel(e, s) { var r, n; (null === (r = this[e]) || void 0 === r ? void 0 : r.name) !== s && (null === (n = this[e]) || void 0 === n || n.unsubscribe(), s ? (this.set(e, this.presence.getChannel(s)), this[e].subscribe()) : this[e] && this.set(e, null)) }, _setupChannels() { this._setupChannel("replyChannel", this.replyChannelName), this._setupChannel("whisperChannel", this.whisperChannelName), this._setupChannel("editChannel", this.editChannelName) }, _cleanupChannels() { this._setupChannel("replyChannel", null), this._setupChannel("whisperChannel", null), this._setupChannel("editChannel", null) }, replyingUsers: (0, r.union)("replyChannel.users", "whisperChannel.users"), editingUsers: (0, r.readOnly)("editChannel.users"), presenceUsers(e, s, r) {
            var n
            const t = e ? s : r
            return null == t || null === (n = t.filter((e => e.id !== this.currentUser.id))) || void 0 === n ? void 0 : n.slice(0, this.siteSettings.presence_max_users_shown)
        }, shouldDisplay: (0, r.gt)("presenceUsers.length", 0), subscribe() { this._setupChannels() }, _contentChanged() {
            var e, s
            if ("" === this.model.reply) return
            const r = "edit" === this.state ? null === (e = this.model) || void 0 === e ? void 0 : e.post : null === (s = this.model) || void 0 === s ? void 0 : s.topic
            this.composerPresenceManager.notifyState(this.state, null == r ? void 0 : r.id)
        }, closeComposer() { this._cleanupChannels(), this.composerPresenceManager.leave() }
    }, "state", [i], Object.getOwnPropertyDescriptor(m, "state"), m), v(m, "replyChannelName", [l], Object.getOwnPropertyDescriptor(m, "replyChannelName"), m), v(m, "whisperChannelName", [o], Object.getOwnPropertyDescriptor(m, "whisperChannelName"), m), v(m, "editChannelName", [a], Object.getOwnPropertyDescriptor(m, "editChannelName"), m), v(m, "_setupChannels", [c], Object.getOwnPropertyDescriptor(m, "_setupChannels"), m), v(m, "presenceUsers", [u], Object.getOwnPropertyDescriptor(m, "presenceUsers"), m), v(m, "subscribe", [p], Object.getOwnPropertyDescriptor(m, "subscribe"), m), v(m, "_contentChanged", [d], Object.getOwnPropertyDescriptor(m, "_contentChanged"), m), v(m, "closeComposer", [h], Object.getOwnPropertyDescriptor(m, "closeComposer"), m), m))
    e.default = b
})), define("discourse/plugins/discourse-presence/discourse/components/topic-presence-display", ["exports", "discourse-common/utils/decorators", "@ember/component", "@ember/object/computed", "@ember/service"], (function (e, s, r, n, t) {
    "use strict"
    var i, l, o, a, c, u
    function p(e, s, r, n, t) {
        var i = {}
        return Object.keys(n).forEach((function (e) { i[e] = n[e] })), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = r.slice().reverse().reduce((function (r, n) { return n(e, s, r) || r }), i), t && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(t) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, s, i), i = null), i
    } Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    var d = r.default.extend((i = (0, s.default)("replyChannel.users.[]"), l = (0, s.default)("whisperChannel.users.[]"), o = (0, s.default)("topic.id"), a = (0, s.default)("topic.id"), c = (0, s.on)("willDestroyElement"), u = {
        topic: null, presence: (0, t.inject)(), replyChannel: null, whisperChannel: null, replyUsers(e) { return null == e ? void 0 : e.filter((e => e.id !== this.currentUser.id)) }, whisperUsers(e) { return null == e ? void 0 : e.filter((e => e.id !== this.currentUser.id)) }, users: (0, n.union)("replyUsers", "whisperUsers"), replyChannelName: e => "/discourse-presence/reply/".concat(e), whisperChannelName: e => "/discourse-presence/whisper/".concat(e), shouldDisplay: (0, n.gt)("users.length", 0), didReceiveAttrs() {
            var e, s, r, n; (this._super(...arguments), (null === (e = this.replyChannel) || void 0 === e ? void 0 : e.name) !== this.replyChannelName) && (null === (r = this.replyChannel) || void 0 === r || r.unsubscribe(), this.set("replyChannel", this.presence.getChannel(this.replyChannelName)), this.replyChannel.subscribe())
            this.currentUser.staff && (null === (s = this.whisperChannel) || void 0 === s ? void 0 : s.name) !== this.whisperChannelName && (null === (n = this.whisperChannel) || void 0 === n || n.unsubscribe(), this.set("whisperChannel", this.presence.getChannel(this.whisperChannelName)), this.whisperChannel.subscribe())
        }, _destroyed() {
            var e, s
            null === (e = this.replyChannel) || void 0 === e || e.unsubscribe(), null === (s = this.whisperChannel) || void 0 === s || s.unsubscribe()
        }
    }, p(u, "replyUsers", [i], Object.getOwnPropertyDescriptor(u, "replyUsers"), u), p(u, "whisperUsers", [l], Object.getOwnPropertyDescriptor(u, "whisperUsers"), u), p(u, "replyChannelName", [o], Object.getOwnPropertyDescriptor(u, "replyChannelName"), u), p(u, "whisperChannelName", [a], Object.getOwnPropertyDescriptor(u, "whisperChannelName"), u), p(u, "_destroyed", [c], Object.getOwnPropertyDescriptor(u, "_destroyed"), u), u))
    e.default = d
})), define("discourse/plugins/discourse-presence/discourse/services/composer-presence-manager", ["exports", "@ember/service", "@ember/runloop", "discourse-common/config/environment"], (function (e, s, r, n) {
    "use strict"
    var t, i
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    let l = (t = class extends s.default {
        constructor() {
            var e, s, r, n
            super(...arguments), e = this, s = "presence", n = this, (r = i) && Object.defineProperty(e, s, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(n) : void 0 })
        } notifyState(e, s) {
            if (this.siteSettings.allow_users_to_hide_profile && this.currentUser.hide_profile_and_presence) return
            if (void 0 === e) return this.leave()
            if (!["reply", "whisper", "edit"].includes(e)) throw "Unknown intent ".concat(e)
            const t = "".concat(e, "/").concat(s)
            this._state !== t && (this._enter(e, s), this._state = t), (0, n.isTesting)() || (this._autoLeaveTimer = (0, r.debounce)(this, this.leave, 1e4))
        } leave() {
            var e
            null === (e = this._presentChannel) || void 0 === e || e.leave(), this._presentChannel = null, this._state = null, this._autoLeaveTimer && ((0, r.cancel)(this._autoLeaveTimer), this._autoLeaveTimer = null)
        } _enter(e, s) {
            this.leave()
            let r = "".concat("/discourse-presence", "/").concat(e, "/").concat(s)
            this._presentChannel = this.presence.getChannel(r), this._presentChannel.enter()
        } willDestroy() { this.leave() }
    }, o = t.prototype, a = "presence", c = [s.inject], u = { configurable: !0, enumerable: !0, writable: !0, initializer: null }, d = {}, Object.keys(u).forEach((function (e) { d[e] = u[e] })), d.enumerable = !!d.enumerable, d.configurable = !!d.configurable, ("value" in d || d.initializer) && (d.writable = !0), d = c.slice().reverse().reduce((function (e, s) { return s(o, a, e) || e }), d), p && void 0 !== d.initializer && (d.value = d.initializer ? d.initializer.call(p) : void 0, d.initializer = void 0), void 0 === d.initializer && (Object.defineProperty(o, a, d), d = null), i = d, t)
    var o, a, c, u, p, d
    e.default = l
})), define("discourse/plugins/discourse-presence/discourse/templates/components/composer-presence-display", ["exports", "@ember/template-factory"], (function (e, s) {
    "use strict"
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    var r = (0, s.createTemplateFactory)({ id: "2vV1SMmj", block: '[[[41,[30,0,["shouldDisplay"]],[[[1,"  "],[10,0],[14,0,"presence-users"],[12],[1,"\\n    "],[10,0],[14,0,"presence-avatars"],[12],[1,"\\n"],[42,[28,[37,2],[[28,[37,2],[[30,0,["presenceUsers"]]],null]],null],null,[[[1,"        "],[1,[28,[35,3],[[30,1]],[["imageSize"],["small"]]]],[1,"\\n"]],[1]],null],[1,"    "],[13],[1,"\\n    "],[10,1],[14,0,"presence-text"],[12],[1,"\\n      "],[10,1],[14,0,"description"],[12],[1,"\\n"],[41,[30,0,["isReply"]],[[[1,[28,[35,4],["presence.replying"],[["count"],[[30,0,["presenceUsers","length"]]]]]]],[]],[[[1,[28,[35,4],["presence.editing"],[["count"],[[30,0,["presenceUsers","length"]]]]]]],[]]],[1,""],[13],[1,""],[10,1],[14,0,"wave"],[12],[1,""],[10,1],[14,0,"dot"],[12],[1,"."],[13],[10,1],[14,0,"dot"],[12],[1,"."],[13],[10,1],[14,0,"dot"],[12],[1,"."],[13],[1,""],[13],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n"]],[]],null]],["user"],false,["if","each","-track-array","avatar","i18n"]]', moduleName: "discourse/plugins/discourse-presence/discourse/templates/components/composer-presence-display.hbs", isStrictMode: !1 })
    e.default = r
})), define("discourse/plugins/discourse-presence/discourse/templates/components/topic-presence-display", ["exports", "@ember/template-factory"], (function (e, s) {
    "use strict"
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    var r = (0, s.createTemplateFactory)({ id: "vIcCGyZU", block: '[[[41,[30,0,["shouldDisplay"]],[[[1,"  "],[10,0],[14,0,"presence-users"],[12],[1,"\\n    "],[10,0],[14,0,"presence-avatars"],[12],[1,"\\n"],[42,[28,[37,2],[[28,[37,2],[[30,0,["users"]]],null]],null],null,[[[1,"        "],[8,[39,3],null,[["@user"],[[30,1]]],[["default"],[[[[1,"\\n          "],[1,[28,[35,4],[[30,1]],[["imageSize"],["small"]]]],[1,"\\n        "]],[]]]]],[1,"\\n"]],[1]],null],[1,"    "],[13],[1,"\\n    "],[10,1],[14,0,"presence-text"],[12],[1,"\\n      "],[10,1],[14,0,"description"],[12],[1,[28,[35,5],["presence.replying_to_topic"],[["count"],[[30,0,["users","length"]]]]]],[13],[10,1],[14,0,"wave"],[12],[10,1],[14,0,"dot"],[12],[1,"."],[13],[10,1],[14,0,"dot"],[12],[1,"."],[13],[10,1],[14,0,"dot"],[12],[1,"."],[13],[13],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n"]],[]],null]],["user"],false,["if","each","-track-array","user-link","avatar","i18n"]]', moduleName: "discourse/plugins/discourse-presence/discourse/templates/components/topic-presence-display.hbs", isStrictMode: !1 })
    e.default = r
})), define("discourse/plugins/discourse-presence/discourse/templates/connectors/before-composer-controls/presence", ["exports", "@ember/template-factory"], (function (e, s) {
    "use strict"
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    var r = (0, s.createTemplateFactory)({ id: "AtuVqULU", block: '[[[8,[39,0],null,[["@model"],[[30,0,["model"]]]],null],[1,"\\n"]],[],false,["composer-presence-display"]]', moduleName: "discourse/plugins/discourse-presence/discourse/templates/connectors/before-composer-controls/presence.hbs", isStrictMode: !1 })
    e.default = r
})), define("discourse/plugins/discourse-presence/discourse/templates/connectors/topic-above-footer-buttons/presence", ["exports", "@ember/template-factory"], (function (e, s) {
    "use strict"
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    var r = (0, s.createTemplateFactory)({ id: "GNPVJV/f", block: '[[[8,[39,0],null,[["@topic"],[[30,0,["model"]]]],null],[1,"\\n"]],[],false,["topic-presence-display"]]', moduleName: "discourse/plugins/discourse-presence/discourse/templates/connectors/topic-above-footer-buttons/presence.hbs", isStrictMode: !1 })
    e.default = r
}))

    //# sourceMappingURL=discourse-presence-b36acbcde51a7e9755259f9111290e77fd962ed43b0d13a7b647f267a3cfea63.map
    //!

    ;
