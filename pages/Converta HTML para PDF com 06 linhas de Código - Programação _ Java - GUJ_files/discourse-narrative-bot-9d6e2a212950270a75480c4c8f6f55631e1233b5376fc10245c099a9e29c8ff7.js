define("discourse/plugins/discourse-narrative-bot/initializers/new-user-narrative", ["exports", "discourse/lib/ajax", "discourse-common/lib/debounce", "discourse/lib/offset-calculator", "discourse/lib/is-element-in-viewport", "discourse/lib/plugin-api"], (function (e, t, s, i, r, o) {
    "use strict"
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0
    const n = "new-user-narrative"
    function a(e) {
        const o = e.container.lookup("service:message-bus"), a = e.getCurrentUser(), c = e.container.lookup("service:app-events")
        e.modifyClass("component:site-header", { pluginId: n, didInsertElement() { this._super(...arguments), this.dispatch("header:search-context-trigger", "header") } }), e.modifyClass("controller:topic", {
            pluginId: n, _modifyBookmark(e, s) { return s && -2 === s.user_id && !s.bookmarked ? (0, t.ajax)("/bookmarks", { type: "POST", data: { post_id: s.id } }).then((e => { s.setProperties({ "topic.bookmarked": !0, bookmarked: !0, bookmark_id: e.id }), s.appEvents.trigger("post-stream:refresh", { id: this.id }) })) : this._super(e, s) }, subscribe() {
                this._super(...arguments), this.messageBus.subscribe("/topic/".concat(this.model.id), (e => {
                    const t = this.model
                    if (t.isPrivateMessage && this.currentUser && this.currentUser.id !== e.user_id && -2 === e.user_id && "created" === e.type) {
                        const s = e.post_number, i = t.get("highest_post_number") <= s, r = s - t.currentPost
                        i && r > 0 && r < 7 && this._scrollToDiscobotPost(e.post_number)
                    }
                }))
            }, _scrollToDiscobotPost(e) {
                (0, s.default)(this, (function () {
                    const t = document.querySelector(".topic-post article#post_".concat(e))
                    if (!t || (0, r.default)(t)) return
                    const s = t.getBoundingClientRect()
                    window.scrollTo({ top: window.scrollY + s.top - (0, i.headerOffset)(), behavior: "smooth" })
                }), e, 500)
            }
        }), e.attachWidgetAction("header", "headerSearchContextTrigger", (function () { this.site.mobileView ? this.state.skipSearchContext = !1 : (this.state.contextEnabled = !0, this.state.searchContextType = "topic") })), o && a && o.subscribe("/new_user_narrative/tutorial_search", (() => { c.trigger("header:search-context-trigger") }))
    } var c = { name: "new-user-narrative", initialize(e) { e.lookup("service:site-settings").discourse_narrative_bot_enabled && (0, o.withPluginApi)("0.8.7", a) } }
    e.default = c
}))

    //# sourceMappingURL=discourse-narrative-bot-e0d3d1e20e710888a70f38e21567c8e0ed9cefcc2e5aacbde3dec8a5034b2604.map
    //!

    ;
