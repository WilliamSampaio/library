define("discourse/plugins/lazy-yt/initializers/lazyYT", ["exports", "discourse/lib/plugin-api", "discourse/plugins/lazy-yt/lib/lazyYT"], (function (t, a, e) {
    "use strict"
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0
    var l = {
        name: "apply-lazyYT", initialize() {
            (0, a.withPluginApi)("0.1", (t => {
                (0, e.default)($), t.decorateCooked((a => {
                    0 !== $(".lazyYT", a).length && $(".lazyYT", a).lazyYT({
                        onPlay(a, e) {
                            const l = parseInt(e.closest("article").data("post-id"), 10)
                            l && t.preventCloak(l)
                        }
                    })
                }), { id: "discourse-lazyyt" })
            }))
        }
    }
    t.default = l
})), define("discourse/plugins/lazy-yt/lib/lazyYT", ["exports", "discourse-common/lib/escape"], (function (t, a) {
    "use strict"
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (t) {
        t.fn.lazyYT = function (e) {
            let l = Object.assign({ default_ratio: "16:9", callback: null, container_class: "lazyYT-container" }, e)
            return this.each((function () {
                (function (e, l) {
                    let i, s, u, d = e.data("width"), c = e.data("height"), o = e.data("ratio") ? e.data("ratio") : l.default_ratio, n = e.data("youtube-id"), p = e.data("youtube-title"), r = [], h = e.data("parameters") || ""
                    o = o.split(":"), "number" == typeof d && "number" == typeof c ? (e.width(d), i = c + "px") : "number" == typeof d ? (e.width(d), i = d * o[1] / o[0] + "px") : (d = e.width(), 0 === d && (d = e.parent().width()), i = o[1] / o[0] * 100 + "%"), r.push('<div class="ytp-thumbnail">'), r.push('<div class="ytp-large-play-button"'), d <= 640 && r.push(' style="transform: scale(0.563888888888889);"'), r.push(">"), r.push("<svg>"), r.push('<path fill-rule="evenodd" clip-rule="evenodd" fill="#1F1F1F" class="ytp-large-play-button-svg" d="M84.15,26.4v6.35c0,2.833-0.15,5.967-0.45,9.4c-0.133,1.7-0.267,3.117-0.4,4.25l-0.15,0.95c-0.167,0.767-0.367,1.517-0.6,2.25c-0.667,2.367-1.533,4.083-2.6,5.15c-1.367,1.4-2.967,2.383-4.8,2.95c-0.633,0.2-1.316,0.333-2.05,0.4c-0.767,0.1-1.3,0.167-1.6,0.2c-4.9,0.367-11.283,0.617-19.15,0.75c-2.434,0.034-4.883,0.067-7.35,0.1h-2.95C38.417,59.117,34.5,59.067,30.3,59c-8.433-0.167-14.05-0.383-16.85-0.65c-0.067-0.033-0.667-0.117-1.8-0.25c-0.9-0.133-1.683-0.283-2.35-0.45c-2.066-0.533-3.783-1.5-5.15-2.9c-1.033-1.067-1.9-2.783-2.6-5.15C1.317,48.867,1.133,48.117,1,47.35L0.8,46.4c-0.133-1.133-0.267-2.55-0.4-4.25C0.133,38.717,0,35.583,0,32.75V26.4c0-2.833,0.133-5.95,0.4-9.35l0.4-4.25c0.167-0.966,0.417-2.05,0.75-3.25c0.7-2.333,1.567-4.033,2.6-5.1c1.367-1.434,2.967-2.434,4.8-3c0.633-0.167,1.333-0.3,2.1-0.4c0.4-0.066,0.917-0.133,1.55-0.2c4.9-0.333,11.283-0.567,19.15-0.7C35.65,0.05,39.083,0,42.05,0L45,0.05c2.467,0,4.933,0.034,7.4,0.1c7.833,0.133,14.2,0.367,19.1,0.7c0.3,0.033,0.833,0.1,1.6,0.2c0.733,0.1,1.417,0.233,2.05,0.4c1.833,0.566,3.434,1.566,4.8,3c1.066,1.066,1.933,2.767,2.6,5.1c0.367,1.2,0.617,2.284,0.75,3.25l0.4,4.25C84,20.45,84.15,23.567,84.15,26.4z M33.3,41.4L56,29.6L33.3,17.75V41.4z"></path>'), r.push('<polygon fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="33.3,41.4 33.3,17.75 56,29.6"></polygon>'), r.push("</svg>"), r.push("</div>"), r.push("</div>"), r.push('<div class="html5-info-bar">'), r.push('<div class="html5-title">'), r.push('<div class="html5-title-text-wrapper">'), r.push('<a class="html5-title-text" target="_blank" tabindex="3100" href="https://www.youtube.com/watch?v=', (0, a.default)(n), '">'), null == p || "" === p ? r.push("youtube.com/watch?v=" + (0, a.default)(n)) : r.push((0, a.default)(p)), r.push("</a>"), r.push("</div>"), r.push("</div>"), r.push("</div>")
                    let y = e[0].querySelector(".ytp-thumbnail-image")
                    e.css({ "padding-bottom": i }).html(r.join("")), u = d > 640 ? "maxresdefault.jpg" : d > 480 ? "sddefault.jpg" : d > 320 ? "hqdefault.jpg" : d > 120 ? "mqdefault.jpg" : 0 === d ? "hqdefault.jpg" : "default.jpg", y ? e.find(".ytp-thumbnail").append(y) : e.find(".ytp-thumbnail").append(t(['<img class="ytp-thumbnail-image" src="https://img.youtube.com/vi/', (0, a.default)(n), "/", u, '">'].join(""))), s = e.find(".ytp-thumbnail").addClass("lazyYT-image-loaded").on("click", (function (t) { t.preventDefault(), !e.hasClass("lazyYT-video-loaded") && s.hasClass("lazyYT-image-loaded") && e.html('<iframe src="//www.youtube.com/embed/' + (0, a.default)(n) + "?autoplay=1&" + h + '" frameborder="0" allowfullscreen></iframe>').addClass("lazyYT-video-loaded"), l.onPlay && l.onPlay(t, e) }))
                })(t(this).addClass(l.container_class), l)
            }))
        }
    }
}))

    //# sourceMappingURL=lazy-yt-1a0936327ae20502f7fa8e293f8af3d243f556e2997f5c634e5bafb3042340c9.map
    //!

    ;
