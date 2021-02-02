!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? e(require("jquery"), require("popper.js"))
        : "function" == typeof define && define.amd
        ? define(["jquery", "popper.js"], e)
        : e(t.jQuery, t.Popper);
})(this, function (t, e) {
    "use strict";
    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
        }
    }
    function i(t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), t;
    }
    function r() {
        return (r =
            Object.assign ||
            function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) &&
                            (t[i] = n[i]);
                }
                return t;
            }).apply(this, arguments);
    }
    function o(t, e) {
        (t.prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = e);
    }
    (t = t && t.hasOwnProperty("default") ? t.default : t),
        (e = e && e.hasOwnProperty("default") ? e.default : e);
    var s,
        a,
        l,
        c,
        h,
        u,
        d,
        f,
        p,
        m,
        g,
        _,
        v,
        y,
        E,
        b,
        C,
        I,
        T,
        A,
        S,
        w,
        D,
        N,
        O,
        k,
        $,
        j,
        R,
        L,
        P,
        x,
        F,
        M,
        Q,
        H,
        U,
        G,
        W,
        B,
        K,
        V,
        Y,
        q,
        z,
        X,
        Z,
        J,
        tt,
        et,
        nt,
        it,
        rt,
        ot,
        st,
        at,
        lt,
        ct,
        ht,
        ut,
        dt,
        ft,
        pt,
        mt,
        gt,
        _t,
        vt,
        yt,
        Et,
        bt,
        Ct,
        It,
        Tt,
        At,
        St,
        wt,
        Dt,
        Nt,
        Ot,
        kt,
        $t,
        jt,
        Rt,
        Lt,
        Pt,
        xt,
        Ft,
        Mt,
        Qt,
        Ht,
        Ut,
        Gt,
        Wt,
        Bt,
        Kt,
        Vt,
        Yt,
        qt,
        zt,
        Xt,
        Zt,
        Jt,
        te,
        ee,
        ne,
        ie,
        re,
        oe,
        se,
        ae,
        le,
        ce,
        he,
        ue,
        de,
        fe,
        pe,
        me,
        ge,
        _e,
        ve,
        ye,
        Ee,
        be,
        Ce,
        Ie,
        Te,
        Ae,
        Se,
        we,
        De,
        Ne,
        Oe,
        ke,
        $e,
        je,
        Re,
        Le,
        Pe,
        xe,
        Fe,
        Me,
        Qe,
        He,
        Ue,
        Ge,
        We,
        Be,
        Ke,
        Ve,
        Ye,
        qe,
        ze,
        Xe,
        Ze,
        Je,
        tn,
        en,
        nn,
        rn,
        on,
        sn,
        an,
        ln,
        cn,
        hn,
        un,
        dn,
        fn,
        pn,
        mn,
        gn,
        _n,
        vn,
        yn,
        En,
        bn,
        Cn,
        In,
        Tn,
        An,
        Sn,
        wn,
        Dn,
        Nn,
        On,
        kn,
        $n,
        jn,
        Rn,
        Ln,
        Pn,
        xn,
        Fn,
        Mn,
        Qn,
        Hn,
        Un,
        Gn,
        Wn,
        Bn,
        Kn,
        Vn,
        Yn,
        qn,
        zn,
        Xn,
        Zn,
        Jn,
        ti,
        ei,
        ni,
        ii,
        ri,
        oi,
        si,
        ai,
        li,
        ci,
        hi,
        ui,
        di,
        fi,
        pi,
        mi,
        gi,
        _i,
        vi,
        yi,
        Ei,
        bi,
        Ci,
        Ii,
        Ti,
        Ai,
        Si,
        wi,
        Di,
        Ni,
        Oi,
        ki,
        $i,
        ji,
        Ri,
        Li,
        Pi,
        xi,
        Fi,
        Mi,
        Qi,
        Hi,
        Ui,
        Gi,
        Wi,
        Bi,
        Ki,
        Vi,
        Yi,
        qi,
        zi,
        Xi,
        Zi,
        Ji,
        tr,
        er,
        nr,
        ir,
        rr,
        or,
        sr,
        ar,
        lr,
        cr,
        hr = (function (t) {
            var e = !1;
            function n(e) {
                var n = this,
                    r = !1;
                return (
                    t(this).one(i.TRANSITION_END, function () {
                        r = !0;
                    }),
                    setTimeout(function () {
                        r || i.triggerTransitionEnd(n);
                    }, e),
                    this
                );
            }
            var i = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function (t) {
                    do {
                        t += ~~(1e6 * Math.random());
                    } while (document.getElementById(t));
                    return t;
                },
                getSelectorFromElement: function (e) {
                    var n,
                        i = e.getAttribute("data-target");
                    (i && "#" !== i) || (i = e.getAttribute("href") || ""),
                        "#" === i.charAt(0) &&
                            ((n = i),
                            (i = n =
                                "function" == typeof t.escapeSelector
                                    ? t.escapeSelector(n).substr(1)
                                    : n.replace(
                                          /(:|\.|\[|\]|,|=|@)/g,
                                          "\\$1"
                                      )));
                    try {
                        return t(document).find(i).length > 0 ? i : null;
                    } catch (t) {
                        return null;
                    }
                },
                reflow: function (t) {
                    return t.offsetHeight;
                },
                triggerTransitionEnd: function (n) {
                    t(n).trigger(e.end);
                },
                supportsTransitionEnd: function () {
                    return Boolean(e);
                },
                isElement: function (t) {
                    return (t[0] || t).nodeType;
                },
                typeCheckConfig: function (t, e, n) {
                    for (var r in n)
                        if (Object.prototype.hasOwnProperty.call(n, r)) {
                            var o = n[r],
                                s = e[r],
                                a =
                                    s && i.isElement(s)
                                        ? "element"
                                        : ((l = s),
                                          {}.toString
                                              .call(l)
                                              .match(/\s([a-zA-Z]+)/)[1]
                                              .toLowerCase());
                            if (!new RegExp(o).test(a))
                                throw new Error(
                                    t.toUpperCase() +
                                        ': Option "' +
                                        r +
                                        '" provided type "' +
                                        a +
                                        '" but expected type "' +
                                        o +
                                        '".'
                                );
                        }
                    var l;
                },
            };
            return (
                (e = ("undefined" == typeof window || !window.QUnit) && {
                    end: "transitionend",
                }),
                (t.fn.emulateTransitionEnd = n),
                i.supportsTransitionEnd() &&
                    (t.event.special[i.TRANSITION_END] = {
                        bindType: e.end,
                        delegateType: e.end,
                        handle: function (e) {
                            if (t(e.target).is(this))
                                return e.handleObj.handler.apply(
                                    this,
                                    arguments
                                );
                        },
                    }),
                i
            );
        })(t),
        ur =
            ((a = "alert"),
            (c = "." + (l = "bs.alert")),
            (h = (s = t).fn[a]),
            (u = {
                CLOSE: "close" + c,
                CLOSED: "closed" + c,
                CLICK_DATA_API: "click" + c + ".data-api",
            }),
            (d = "alert"),
            (f = "fade"),
            (p = "show"),
            (m = (function () {
                function t(t) {
                    this._element = t;
                }
                var e = t.prototype;
                return (
                    (e.close = function (t) {
                        t = t || this._element;
                        var e = this._getRootElement(t);
                        this._triggerCloseEvent(e).isDefaultPrevented() ||
                            this._removeElement(e);
                    }),
                    (e.dispose = function () {
                        s.removeData(this._element, l), (this._element = null);
                    }),
                    (e._getRootElement = function (t) {
                        var e = hr.getSelectorFromElement(t),
                            n = !1;
                        return (
                            e && (n = s(e)[0]),
                            n || (n = s(t).closest("." + d)[0]),
                            n
                        );
                    }),
                    (e._triggerCloseEvent = function (t) {
                        var e = s.Event(u.CLOSE);
                        return s(t).trigger(e), e;
                    }),
                    (e._removeElement = function (t) {
                        var e = this;
                        s(t).removeClass(p),
                            hr.supportsTransitionEnd() && s(t).hasClass(f)
                                ? s(t)
                                      .one(hr.TRANSITION_END, function (n) {
                                          return e._destroyElement(t, n);
                                      })
                                      .emulateTransitionEnd(150)
                                : this._destroyElement(t);
                    }),
                    (e._destroyElement = function (t) {
                        s(t).detach().trigger(u.CLOSED).remove();
                    }),
                    (t._jQueryInterface = function (e) {
                        return this.each(function () {
                            var n = s(this),
                                i = n.data(l);
                            i || ((i = new t(this)), n.data(l, i)),
                                "close" === e && i[e](this);
                        });
                    }),
                    (t._handleDismiss = function (t) {
                        return function (e) {
                            e && e.preventDefault(), t.close(this);
                        };
                    }),
                    i(t, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.0.0";
                            },
                        },
                    ]),
                    t
                );
            })()),
            s(document).on(
                u.CLICK_DATA_API,
                '[data-dismiss="alert"]',
                m._handleDismiss(new m())
            ),
            (s.fn[a] = m._jQueryInterface),
            (s.fn[a].Constructor = m),
            (s.fn[a].noConflict = function () {
                return (s.fn[a] = h), m._jQueryInterface;
            }),
            (_ = "button"),
            (y = "." + (v = "bs.button")),
            (E = ".data-api"),
            (b = (g = t).fn[_]),
            (C = "active"),
            (I = "btn"),
            (T = "focus"),
            (A = '[data-toggle^="button"]'),
            (S = '[data-toggle="buttons"]'),
            (w = "input"),
            (D = ".active"),
            (N = ".btn"),
            (O = {
                CLICK_DATA_API: "click" + y + E,
                FOCUS_BLUR_DATA_API: "focus" + y + E + " blur" + y + E,
            }),
            (k = (function () {
                function t(t) {
                    this._element = t;
                }
                var e = t.prototype;
                return (
                    (e.toggle = function () {
                        var t = !0,
                            e = !0,
                            n = g(this._element).closest(S)[0];
                        if (n) {
                            var i = g(this._element).find(w)[0];
                            if (i) {
                                if ("radio" === i.type)
                                    if (
                                        i.checked &&
                                        g(this._element).hasClass(C)
                                    )
                                        t = !1;
                                    else {
                                        var r = g(n).find(D)[0];
                                        r && g(r).removeClass(C);
                                    }
                                if (t) {
                                    if (
                                        i.hasAttribute("disabled") ||
                                        n.hasAttribute("disabled") ||
                                        i.classList.contains("disabled") ||
                                        n.classList.contains("disabled")
                                    )
                                        return;
                                    (i.checked = !g(this._element).hasClass(C)),
                                        g(i).trigger("change");
                                }
                                i.focus(), (e = !1);
                            }
                        }
                        e &&
                            this._element.setAttribute(
                                "aria-pressed",
                                !g(this._element).hasClass(C)
                            ),
                            t && g(this._element).toggleClass(C);
                    }),
                    (e.dispose = function () {
                        g.removeData(this._element, v), (this._element = null);
                    }),
                    (t._jQueryInterface = function (e) {
                        return this.each(function () {
                            var n = g(this).data(v);
                            n || ((n = new t(this)), g(this).data(v, n)),
                                "toggle" === e && n[e]();
                        });
                    }),
                    i(t, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.0.0";
                            },
                        },
                    ]),
                    t
                );
            })()),
            g(document)
                .on(O.CLICK_DATA_API, A, function (t) {
                    t.preventDefault();
                    var e = t.target;
                    g(e).hasClass(I) || (e = g(e).closest(N)),
                        k._jQueryInterface.call(g(e), "toggle");
                })
                .on(O.FOCUS_BLUR_DATA_API, A, function (t) {
                    var e = g(t.target).closest(N)[0];
                    g(e).toggleClass(T, /^focus(in)?$/.test(t.type));
                }),
            (g.fn[_] = k._jQueryInterface),
            (g.fn[_].Constructor = k),
            (g.fn[_].noConflict = function () {
                return (g.fn[_] = b), k._jQueryInterface;
            }),
            (j = "carousel"),
            (L = "." + (R = "bs.carousel")),
            (P = ".data-api"),
            (x = ($ = t).fn[j]),
            (F = {
                interval: 5e3,
                keyboard: !0,
                slide: !1,
                pause: "hover",
                wrap: !0,
            }),
            (M = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean",
            }),
            (Q = "next"),
            (H = "prev"),
            (U = "left"),
            (G = "right"),
            (W = {
                SLIDE: "slide" + L,
                SLID: "slid" + L,
                KEYDOWN: "keydown" + L,
                MOUSEENTER: "mouseenter" + L,
                MOUSELEAVE: "mouseleave" + L,
                TOUCHEND: "touchend" + L,
                LOAD_DATA_API: "load" + L + P,
                CLICK_DATA_API: "click" + L + P,
            }),
            (B = "carousel"),
            (K = "active"),
            (V = "slide"),
            (Y = "carousel-item-right"),
            (q = "carousel-item-left"),
            (z = "carousel-item-next"),
            (X = "carousel-item-prev"),
            (Z = {
                ACTIVE: ".active",
                ACTIVE_ITEM: ".active.carousel-item",
                ITEM: ".carousel-item",
                NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                INDICATORS: ".carousel-indicators",
                DATA_SLIDE: "[data-slide], [data-slide-to]",
                DATA_RIDE: '[data-ride="carousel"]',
            }),
            (J = (function () {
                function t(t, e) {
                    (this._items = null),
                        (this._interval = null),
                        (this._activeElement = null),
                        (this._isPaused = !1),
                        (this._isSliding = !1),
                        (this.touchTimeout = null),
                        (this._config = this._getConfig(e)),
                        (this._element = $(t)[0]),
                        (this._indicatorsElement = $(this._element).find(
                            Z.INDICATORS
                        )[0]),
                        this._addEventListeners();
                }
                var e = t.prototype;
                return (
                    (e.next = function () {
                        this._isSliding || this._slide(Q);
                    }),
                    (e.nextWhenVisible = function () {
                        !document.hidden &&
                            $(this._element).is(":visible") &&
                            "hidden" !== $(this._element).css("visibility") &&
                            this.next();
                    }),
                    (e.prev = function () {
                        this._isSliding || this._slide(H);
                    }),
                    (e.pause = function (t) {
                        t || (this._isPaused = !0),
                            $(this._element).find(Z.NEXT_PREV)[0] &&
                                hr.supportsTransitionEnd() &&
                                (hr.triggerTransitionEnd(this._element),
                                this.cycle(!0)),
                            clearInterval(this._interval),
                            (this._interval = null);
                    }),
                    (e.cycle = function (t) {
                        t || (this._isPaused = !1),
                            this._interval &&
                                (clearInterval(this._interval),
                                (this._interval = null)),
                            this._config.interval &&
                                !this._isPaused &&
                                (this._interval = setInterval(
                                    (document.visibilityState
                                        ? this.nextWhenVisible
                                        : this.next
                                    ).bind(this),
                                    this._config.interval
                                ));
                    }),
                    (e.to = function (t) {
                        var e = this;
                        this._activeElement = $(this._element).find(
                            Z.ACTIVE_ITEM
                        )[0];
                        var n = this._getItemIndex(this._activeElement);
                        if (!(t > this._items.length - 1 || t < 0))
                            if (this._isSliding)
                                $(this._element).one(W.SLID, function () {
                                    return e.to(t);
                                });
                            else {
                                if (n === t)
                                    return this.pause(), void this.cycle();
                                var i = t > n ? Q : H;
                                this._slide(i, this._items[t]);
                            }
                    }),
                    (e.dispose = function () {
                        $(this._element).off(L),
                            $.removeData(this._element, R),
                            (this._items = null),
                            (this._config = null),
                            (this._element = null),
                            (this._interval = null),
                            (this._isPaused = null),
                            (this._isSliding = null),
                            (this._activeElement = null),
                            (this._indicatorsElement = null);
                    }),
                    (e._getConfig = function (t) {
                        return (
                            (t = r({}, F, t)), hr.typeCheckConfig(j, t, M), t
                        );
                    }),
                    (e._addEventListeners = function () {
                        var t = this;
                        this._config.keyboard &&
                            $(this._element).on(W.KEYDOWN, function (e) {
                                return t._keydown(e);
                            }),
                            "hover" === this._config.pause &&
                                ($(this._element)
                                    .on(W.MOUSEENTER, function (e) {
                                        return t.pause(e);
                                    })
                                    .on(W.MOUSELEAVE, function (e) {
                                        return t.cycle(e);
                                    }),
                                "ontouchstart" in document.documentElement &&
                                    $(this._element).on(
                                        W.TOUCHEND,
                                        function () {
                                            t.pause(),
                                                t.touchTimeout &&
                                                    clearTimeout(
                                                        t.touchTimeout
                                                    ),
                                                (t.touchTimeout = setTimeout(
                                                    function (e) {
                                                        return t.cycle(e);
                                                    },
                                                    500 + t._config.interval
                                                ));
                                        }
                                    ));
                    }),
                    (e._keydown = function (t) {
                        if (!/input|textarea/i.test(t.target.tagName))
                            switch (t.which) {
                                case 37:
                                    t.preventDefault(), this.prev();
                                    break;
                                case 39:
                                    t.preventDefault(), this.next();
                            }
                    }),
                    (e._getItemIndex = function (t) {
                        return (
                            (this._items = $.makeArray(
                                $(t).parent().find(Z.ITEM)
                            )),
                            this._items.indexOf(t)
                        );
                    }),
                    (e._getItemByDirection = function (t, e) {
                        var n = t === Q,
                            i = t === H,
                            r = this._getItemIndex(e),
                            o = this._items.length - 1;
                        if (
                            ((i && 0 === r) || (n && r === o)) &&
                            !this._config.wrap
                        )
                            return e;
                        var s = (r + (t === H ? -1 : 1)) % this._items.length;
                        return -1 === s
                            ? this._items[this._items.length - 1]
                            : this._items[s];
                    }),
                    (e._triggerSlideEvent = function (t, e) {
                        var n = this._getItemIndex(t),
                            i = this._getItemIndex(
                                $(this._element).find(Z.ACTIVE_ITEM)[0]
                            ),
                            r = $.Event(W.SLIDE, {
                                relatedTarget: t,
                                direction: e,
                                from: i,
                                to: n,
                            });
                        return $(this._element).trigger(r), r;
                    }),
                    (e._setActiveIndicatorElement = function (t) {
                        if (this._indicatorsElement) {
                            $(this._indicatorsElement)
                                .find(Z.ACTIVE)
                                .removeClass(K);
                            var e = this._indicatorsElement.children[
                                this._getItemIndex(t)
                            ];
                            e && $(e).addClass(K);
                        }
                    }),
                    (e._slide = function (t, e) {
                        var n,
                            i,
                            r,
                            o = this,
                            s = $(this._element).find(Z.ACTIVE_ITEM)[0],
                            a = this._getItemIndex(s),
                            l = e || (s && this._getItemByDirection(t, s)),
                            c = this._getItemIndex(l),
                            h = Boolean(this._interval);
                        if (
                            (t === Q
                                ? ((n = q), (i = z), (r = U))
                                : ((n = Y), (i = X), (r = G)),
                            l && $(l).hasClass(K))
                        )
                            this._isSliding = !1;
                        else if (
                            !this._triggerSlideEvent(
                                l,
                                r
                            ).isDefaultPrevented() &&
                            s &&
                            l
                        ) {
                            (this._isSliding = !0),
                                h && this.pause(),
                                this._setActiveIndicatorElement(l);
                            var u = $.Event(W.SLID, {
                                relatedTarget: l,
                                direction: r,
                                from: a,
                                to: c,
                            });
                            hr.supportsTransitionEnd() &&
                            $(this._element).hasClass(V)
                                ? ($(l).addClass(i),
                                  hr.reflow(l),
                                  $(s).addClass(n),
                                  $(l).addClass(n),
                                  $(s)
                                      .one(hr.TRANSITION_END, function () {
                                          $(l)
                                              .removeClass(n + " " + i)
                                              .addClass(K),
                                              $(s).removeClass(
                                                  K + " " + i + " " + n
                                              ),
                                              (o._isSliding = !1),
                                              setTimeout(function () {
                                                  return $(o._element).trigger(
                                                      u
                                                  );
                                              }, 0);
                                      })
                                      .emulateTransitionEnd(600))
                                : ($(s).removeClass(K),
                                  $(l).addClass(K),
                                  (this._isSliding = !1),
                                  $(this._element).trigger(u)),
                                h && this.cycle();
                        }
                    }),
                    (t._jQueryInterface = function (e) {
                        return this.each(function () {
                            var n = $(this).data(R),
                                i = r({}, F, $(this).data());
                            "object" == typeof e && (i = r({}, i, e));
                            var o = "string" == typeof e ? e : i.slide;
                            if (
                                (n ||
                                    ((n = new t(this, i)), $(this).data(R, n)),
                                "number" == typeof e)
                            )
                                n.to(e);
                            else if ("string" == typeof o) {
                                if (void 0 === n[o])
                                    throw new TypeError(
                                        'No method named "' + o + '"'
                                    );
                                n[o]();
                            } else i.interval && (n.pause(), n.cycle());
                        });
                    }),
                    (t._dataApiClickHandler = function (e) {
                        var n = hr.getSelectorFromElement(this);
                        if (n) {
                            var i = $(n)[0];
                            if (i && $(i).hasClass(B)) {
                                var o = r({}, $(i).data(), $(this).data()),
                                    s = this.getAttribute("data-slide-to");
                                s && (o.interval = !1),
                                    t._jQueryInterface.call($(i), o),
                                    s && $(i).data(R).to(s),
                                    e.preventDefault();
                            }
                        }
                    }),
                    i(t, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.0.0";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return F;
                            },
                        },
                    ]),
                    t
                );
            })()),
            $(document).on(
                W.CLICK_DATA_API,
                Z.DATA_SLIDE,
                J._dataApiClickHandler
            ),
            $(window).on(W.LOAD_DATA_API, function () {
                $(Z.DATA_RIDE).each(function () {
                    var t = $(this);
                    J._jQueryInterface.call(t, t.data());
                });
            }),
            ($.fn[j] = J._jQueryInterface),
            ($.fn[j].Constructor = J),
            ($.fn[j].noConflict = function () {
                return ($.fn[j] = x), J._jQueryInterface;
            }),
            (et = "collapse"),
            (it = "." + (nt = "bs.collapse")),
            (rt = (tt = t).fn[et]),
            (ot = { toggle: !0, parent: "" }),
            (st = { toggle: "boolean", parent: "(string|element)" }),
            (at = {
                SHOW: "show" + it,
                SHOWN: "shown" + it,
                HIDE: "hide" + it,
                HIDDEN: "hidden" + it,
                CLICK_DATA_API: "click" + it + ".data-api",
            }),
            (lt = "show"),
            (ct = "collapse"),
            (ht = "collapsing"),
            (ut = "collapsed"),
            (dt = "width"),
            (ft = "height"),
            (pt = {
                ACTIVES: ".show, .collapsing",
                DATA_TOGGLE: '[data-toggle="collapse"]',
            }),
            (mt = (function () {
                function t(t, e) {
                    (this._isTransitioning = !1),
                        (this._element = t),
                        (this._config = this._getConfig(e)),
                        (this._triggerArray = tt.makeArray(
                            tt(
                                '[data-toggle="collapse"][href="#' +
                                    t.id +
                                    '"],[data-toggle="collapse"][data-target="#' +
                                    t.id +
                                    '"]'
                            )
                        ));
                    for (var n = tt(pt.DATA_TOGGLE), i = 0; i < n.length; i++) {
                        var r = n[i],
                            o = hr.getSelectorFromElement(r);
                        null !== o &&
                            tt(o).filter(t).length > 0 &&
                            ((this._selector = o), this._triggerArray.push(r));
                    }
                    (this._parent = this._config.parent
                        ? this._getParent()
                        : null),
                        this._config.parent ||
                            this._addAriaAndCollapsedClass(
                                this._element,
                                this._triggerArray
                            ),
                        this._config.toggle && this.toggle();
                }
                var e = t.prototype;
                return (
                    (e.toggle = function () {
                        tt(this._element).hasClass(lt)
                            ? this.hide()
                            : this.show();
                    }),
                    (e.show = function () {
                        var e,
                            n,
                            i = this;
                        if (
                            !this._isTransitioning &&
                            !tt(this._element).hasClass(lt) &&
                            (this._parent &&
                                0 ===
                                    (e = tt.makeArray(
                                        tt(this._parent)
                                            .find(pt.ACTIVES)
                                            .filter(
                                                '[data-parent="' +
                                                    this._config.parent +
                                                    '"]'
                                            )
                                    )).length &&
                                (e = null),
                            !(
                                e &&
                                (n = tt(e).not(this._selector).data(nt)) &&
                                n._isTransitioning
                            ))
                        ) {
                            var r = tt.Event(at.SHOW);
                            if (
                                (tt(this._element).trigger(r),
                                !r.isDefaultPrevented())
                            ) {
                                e &&
                                    (t._jQueryInterface.call(
                                        tt(e).not(this._selector),
                                        "hide"
                                    ),
                                    n || tt(e).data(nt, null));
                                var o = this._getDimension();
                                tt(this._element).removeClass(ct).addClass(ht),
                                    (this._element.style[o] = 0),
                                    this._triggerArray.length > 0 &&
                                        tt(this._triggerArray)
                                            .removeClass(ut)
                                            .attr("aria-expanded", !0),
                                    this.setTransitioning(!0);
                                var s = function () {
                                    tt(i._element)
                                        .removeClass(ht)
                                        .addClass(ct)
                                        .addClass(lt),
                                        (i._element.style[o] = ""),
                                        i.setTransitioning(!1),
                                        tt(i._element).trigger(at.SHOWN);
                                };
                                if (hr.supportsTransitionEnd()) {
                                    var a =
                                        "scroll" +
                                        (o[0].toUpperCase() + o.slice(1));
                                    tt(this._element)
                                        .one(hr.TRANSITION_END, s)
                                        .emulateTransitionEnd(600),
                                        (this._element.style[o] =
                                            this._element[a] + "px");
                                } else s();
                            }
                        }
                    }),
                    (e.hide = function () {
                        var t = this;
                        if (
                            !this._isTransitioning &&
                            tt(this._element).hasClass(lt)
                        ) {
                            var e = tt.Event(at.HIDE);
                            if (
                                (tt(this._element).trigger(e),
                                !e.isDefaultPrevented())
                            ) {
                                var n = this._getDimension();
                                if (
                                    ((this._element.style[n] =
                                        this._element.getBoundingClientRect()[
                                            n
                                        ] + "px"),
                                    hr.reflow(this._element),
                                    tt(this._element)
                                        .addClass(ht)
                                        .removeClass(ct)
                                        .removeClass(lt),
                                    this._triggerArray.length > 0)
                                )
                                    for (
                                        var i = 0;
                                        i < this._triggerArray.length;
                                        i++
                                    ) {
                                        var r = this._triggerArray[i],
                                            o = hr.getSelectorFromElement(r);
                                        if (null !== o)
                                            tt(o).hasClass(lt) ||
                                                tt(r)
                                                    .addClass(ut)
                                                    .attr("aria-expanded", !1);
                                    }
                                this.setTransitioning(!0);
                                var s = function () {
                                    t.setTransitioning(!1),
                                        tt(t._element)
                                            .removeClass(ht)
                                            .addClass(ct)
                                            .trigger(at.HIDDEN);
                                };
                                (this._element.style[n] = ""),
                                    hr.supportsTransitionEnd()
                                        ? tt(this._element)
                                              .one(hr.TRANSITION_END, s)
                                              .emulateTransitionEnd(600)
                                        : s();
                            }
                        }
                    }),
                    (e.setTransitioning = function (t) {
                        this._isTransitioning = t;
                    }),
                    (e.dispose = function () {
                        tt.removeData(this._element, nt),
                            (this._config = null),
                            (this._parent = null),
                            (this._element = null),
                            (this._triggerArray = null),
                            (this._isTransitioning = null);
                    }),
                    (e._getConfig = function (t) {
                        return (
                            ((t = r({}, ot, t)).toggle = Boolean(t.toggle)),
                            hr.typeCheckConfig(et, t, st),
                            t
                        );
                    }),
                    (e._getDimension = function () {
                        return tt(this._element).hasClass(dt) ? dt : ft;
                    }),
                    (e._getParent = function () {
                        var e = this,
                            n = null;
                        hr.isElement(this._config.parent)
                            ? ((n = this._config.parent),
                              void 0 !== this._config.parent.jquery &&
                                  (n = this._config.parent[0]))
                            : (n = tt(this._config.parent)[0]);
                        var i =
                            '[data-toggle="collapse"][data-parent="' +
                            this._config.parent +
                            '"]';
                        return (
                            tt(n)
                                .find(i)
                                .each(function (n, i) {
                                    e._addAriaAndCollapsedClass(
                                        t._getTargetFromElement(i),
                                        [i]
                                    );
                                }),
                            n
                        );
                    }),
                    (e._addAriaAndCollapsedClass = function (t, e) {
                        if (t) {
                            var n = tt(t).hasClass(lt);
                            e.length > 0 &&
                                tt(e)
                                    .toggleClass(ut, !n)
                                    .attr("aria-expanded", n);
                        }
                    }),
                    (t._getTargetFromElement = function (t) {
                        var e = hr.getSelectorFromElement(t);
                        return e ? tt(e)[0] : null;
                    }),
                    (t._jQueryInterface = function (e) {
                        return this.each(function () {
                            var n = tt(this),
                                i = n.data(nt),
                                o = r(
                                    {},
                                    ot,
                                    n.data(),
                                    "object" == typeof e && e
                                );
                            if (
                                (!i &&
                                    o.toggle &&
                                    /show|hide/.test(e) &&
                                    (o.toggle = !1),
                                i || ((i = new t(this, o)), n.data(nt, i)),
                                "string" == typeof e)
                            ) {
                                if (void 0 === i[e])
                                    throw new TypeError(
                                        'No method named "' + e + '"'
                                    );
                                i[e]();
                            }
                        });
                    }),
                    i(t, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.0.0";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return ot;
                            },
                        },
                    ]),
                    t
                );
            })()),
            tt(document).on(at.CLICK_DATA_API, pt.DATA_TOGGLE, function (t) {
                "A" === t.currentTarget.tagName && t.preventDefault();
                var e = tt(this),
                    n = hr.getSelectorFromElement(this);
                tt(n).each(function () {
                    var t = tt(this),
                        n = t.data(nt) ? "toggle" : e.data();
                    mt._jQueryInterface.call(t, n);
                });
            }),
            (tt.fn[et] = mt._jQueryInterface),
            (tt.fn[et].Constructor = mt),
            (tt.fn[et].noConflict = function () {
                return (tt.fn[et] = rt), mt._jQueryInterface;
            }),
            (_t = "modal"),
            (yt = "." + (vt = "bs.modal")),
            (Et = (gt = t).fn[_t]),
            (bt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }),
            (Ct = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean",
                show: "boolean",
            }),
            (It = {
                HIDE: "hide" + yt,
                HIDDEN: "hidden" + yt,
                SHOW: "show" + yt,
                SHOWN: "shown" + yt,
                FOCUSIN: "focusin" + yt,
                RESIZE: "resize" + yt,
                CLICK_DISMISS: "click.dismiss" + yt,
                KEYDOWN_DISMISS: "keydown.dismiss" + yt,
                MOUSEUP_DISMISS: "mouseup.dismiss" + yt,
                MOUSEDOWN_DISMISS: "mousedown.dismiss" + yt,
                CLICK_DATA_API: "click" + yt + ".data-api",
            }),
            (Tt = "modal-scrollbar-measure"),
            (At = "modal-backdrop"),
            (St = "modal-open"),
            (wt = "fade"),
            (Dt = "show"),
            (Nt = {
                DIALOG: ".modal-dialog",
                DATA_TOGGLE: '[data-toggle="modal"]',
                DATA_DISMISS: '[data-dismiss="modal"]',
                FIXED_CONTENT:
                    ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                STICKY_CONTENT: ".sticky-top",
                NAVBAR_TOGGLER: ".navbar-toggler",
            }),
            (Ot = (function () {
                function t(t, e) {
                    (this._config = this._getConfig(e)),
                        (this._element = t),
                        (this._dialog = gt(t).find(Nt.DIALOG)[0]),
                        (this._backdrop = null),
                        (this._isShown = !1),
                        (this._isBodyOverflowing = !1),
                        (this._ignoreBackdropClick = !1),
                        (this._originalBodyPadding = 0),
                        (this._scrollbarWidth = 0);
                }
                var e = t.prototype;
                return (
                    (e.toggle = function (t) {
                        return this._isShown ? this.hide() : this.show(t);
                    }),
                    (e.show = function (t) {
                        var e = this;
                        if (!this._isTransitioning && !this._isShown) {
                            hr.supportsTransitionEnd() &&
                                gt(this._element).hasClass(wt) &&
                                (this._isTransitioning = !0);
                            var n = gt.Event(It.SHOW, { relatedTarget: t });
                            gt(this._element).trigger(n),
                                this._isShown ||
                                    n.isDefaultPrevented() ||
                                    ((this._isShown = !0),
                                    this._checkScrollbar(),
                                    this._setScrollbar(),
                                    this._adjustDialog(),
                                    gt(document.body).addClass(St),
                                    this._setEscapeEvent(),
                                    this._setResizeEvent(),
                                    gt(this._element).on(
                                        It.CLICK_DISMISS,
                                        Nt.DATA_DISMISS,
                                        function (t) {
                                            return e.hide(t);
                                        }
                                    ),
                                    gt(this._dialog).on(
                                        It.MOUSEDOWN_DISMISS,
                                        function () {
                                            gt(e._element).one(
                                                It.MOUSEUP_DISMISS,
                                                function (t) {
                                                    gt(t.target).is(
                                                        e._element
                                                    ) &&
                                                        (e._ignoreBackdropClick = !0);
                                                }
                                            );
                                        }
                                    ),
                                    this._showBackdrop(function () {
                                        return e._showElement(t);
                                    }));
                        }
                    }),
                    (e.hide = function (t) {
                        var e = this;
                        if (
                            (t && t.preventDefault(),
                            !this._isTransitioning && this._isShown)
                        ) {
                            var n = gt.Event(It.HIDE);
                            if (
                                (gt(this._element).trigger(n),
                                this._isShown && !n.isDefaultPrevented())
                            ) {
                                this._isShown = !1;
                                var i =
                                    hr.supportsTransitionEnd() &&
                                    gt(this._element).hasClass(wt);
                                i && (this._isTransitioning = !0),
                                    this._setEscapeEvent(),
                                    this._setResizeEvent(),
                                    gt(document).off(It.FOCUSIN),
                                    gt(this._element).removeClass(Dt),
                                    gt(this._element).off(It.CLICK_DISMISS),
                                    gt(this._dialog).off(It.MOUSEDOWN_DISMISS),
                                    i
                                        ? gt(this._element)
                                              .one(
                                                  hr.TRANSITION_END,
                                                  function (t) {
                                                      return e._hideModal(t);
                                                  }
                                              )
                                              .emulateTransitionEnd(300)
                                        : this._hideModal();
                            }
                        }
                    }),
                    (e.dispose = function () {
                        gt.removeData(this._element, vt),
                            gt(
                                window,
                                document,
                                this._element,
                                this._backdrop
                            ).off(yt),
                            (this._config = null),
                            (this._element = null),
                            (this._dialog = null),
                            (this._backdrop = null),
                            (this._isShown = null),
                            (this._isBodyOverflowing = null),
                            (this._ignoreBackdropClick = null),
                            (this._scrollbarWidth = null);
                    }),
                    (e.handleUpdate = function () {
                        this._adjustDialog();
                    }),
                    (e._getConfig = function (t) {
                        return (
                            (t = r({}, bt, t)), hr.typeCheckConfig(_t, t, Ct), t
                        );
                    }),
                    (e._showElement = function (t) {
                        var e = this,
                            n =
                                hr.supportsTransitionEnd() &&
                                gt(this._element).hasClass(wt);
                        (this._element.parentNode &&
                            this._element.parentNode.nodeType ===
                                Node.ELEMENT_NODE) ||
                            document.body.appendChild(this._element),
                            (this._element.style.display = "block"),
                            this._element.removeAttribute("aria-hidden"),
                            (this._element.scrollTop = 0),
                            n && hr.reflow(this._element),
                            gt(this._element).addClass(Dt),
                            this._config.focus && this._enforceFocus();
                        var i = gt.Event(It.SHOWN, { relatedTarget: t }),
                            r = function () {
                                e._config.focus && e._element.focus(),
                                    (e._isTransitioning = !1),
                                    gt(e._element).trigger(i);
                            };
                        n
                            ? gt(this._dialog)
                                  .one(hr.TRANSITION_END, r)
                                  .emulateTransitionEnd(300)
                            : r();
                    }),
                    (e._enforceFocus = function () {
                        var t = this;
                        gt(document)
                            .off(It.FOCUSIN)
                            .on(It.FOCUSIN, function (e) {
                                document !== e.target &&
                                    t._element !== e.target &&
                                    0 === gt(t._element).has(e.target).length &&
                                    t._element.focus();
                            });
                    }),
                    (e._setEscapeEvent = function () {
                        var t = this;
                        this._isShown && this._config.keyboard
                            ? gt(this._element).on(
                                  It.KEYDOWN_DISMISS,
                                  function (e) {
                                      27 === e.which &&
                                          (e.preventDefault(), t.hide());
                                  }
                              )
                            : this._isShown ||
                              gt(this._element).off(It.KEYDOWN_DISMISS);
                    }),
                    (e._setResizeEvent = function () {
                        var t = this;
                        this._isShown
                            ? gt(window).on(It.RESIZE, function (e) {
                                  return t.handleUpdate(e);
                              })
                            : gt(window).off(It.RESIZE);
                    }),
                    (e._hideModal = function () {
                        var t = this;
                        (this._element.style.display = "none"),
                            this._element.setAttribute("aria-hidden", !0),
                            (this._isTransitioning = !1),
                            this._showBackdrop(function () {
                                gt(document.body).removeClass(St),
                                    t._resetAdjustments(),
                                    t._resetScrollbar(),
                                    gt(t._element).trigger(It.HIDDEN);
                            });
                    }),
                    (e._removeBackdrop = function () {
                        this._backdrop &&
                            (gt(this._backdrop).remove(),
                            (this._backdrop = null));
                    }),
                    (e._showBackdrop = function (t) {
                        var e = this,
                            n = gt(this._element).hasClass(wt) ? wt : "";
                        if (this._isShown && this._config.backdrop) {
                            var i = hr.supportsTransitionEnd() && n;
                            if (
                                ((this._backdrop = document.createElement(
                                    "div"
                                )),
                                (this._backdrop.className = At),
                                n && gt(this._backdrop).addClass(n),
                                gt(this._backdrop).appendTo(document.body),
                                gt(this._element).on(
                                    It.CLICK_DISMISS,
                                    function (t) {
                                        e._ignoreBackdropClick
                                            ? (e._ignoreBackdropClick = !1)
                                            : t.target === t.currentTarget &&
                                              ("static" === e._config.backdrop
                                                  ? e._element.focus()
                                                  : e.hide());
                                    }
                                ),
                                i && hr.reflow(this._backdrop),
                                gt(this._backdrop).addClass(Dt),
                                !t)
                            )
                                return;
                            if (!i) return void t();
                            gt(this._backdrop)
                                .one(hr.TRANSITION_END, t)
                                .emulateTransitionEnd(150);
                        } else if (!this._isShown && this._backdrop) {
                            gt(this._backdrop).removeClass(Dt);
                            var r = function () {
                                e._removeBackdrop(), t && t();
                            };
                            hr.supportsTransitionEnd() &&
                            gt(this._element).hasClass(wt)
                                ? gt(this._backdrop)
                                      .one(hr.TRANSITION_END, r)
                                      .emulateTransitionEnd(150)
                                : r();
                        } else t && t();
                    }),
                    (e._adjustDialog = function () {
                        var t =
                            this._element.scrollHeight >
                            document.documentElement.clientHeight;
                        !this._isBodyOverflowing &&
                            t &&
                            (this._element.style.paddingLeft =
                                this._scrollbarWidth + "px"),
                            this._isBodyOverflowing &&
                                !t &&
                                (this._element.style.paddingRight =
                                    this._scrollbarWidth + "px");
                    }),
                    (e._resetAdjustments = function () {
                        (this._element.style.paddingLeft = ""),
                            (this._element.style.paddingRight = "");
                    }),
                    (e._checkScrollbar = function () {
                        var t = document.body.getBoundingClientRect();
                        (this._isBodyOverflowing =
                            t.left + t.right < window.innerWidth),
                            (this._scrollbarWidth = this._getScrollbarWidth());
                    }),
                    (e._setScrollbar = function () {
                        var t = this;
                        if (this._isBodyOverflowing) {
                            gt(Nt.FIXED_CONTENT).each(function (e, n) {
                                var i = gt(n)[0].style.paddingRight,
                                    r = gt(n).css("padding-right");
                                gt(n)
                                    .data("padding-right", i)
                                    .css(
                                        "padding-right",
                                        parseFloat(r) + t._scrollbarWidth + "px"
                                    );
                            }),
                                gt(Nt.STICKY_CONTENT).each(function (e, n) {
                                    var i = gt(n)[0].style.marginRight,
                                        r = gt(n).css("margin-right");
                                    gt(n)
                                        .data("margin-right", i)
                                        .css(
                                            "margin-right",
                                            parseFloat(r) -
                                                t._scrollbarWidth +
                                                "px"
                                        );
                                }),
                                gt(Nt.NAVBAR_TOGGLER).each(function (e, n) {
                                    var i = gt(n)[0].style.marginRight,
                                        r = gt(n).css("margin-right");
                                    gt(n)
                                        .data("margin-right", i)
                                        .css(
                                            "margin-right",
                                            parseFloat(r) +
                                                t._scrollbarWidth +
                                                "px"
                                        );
                                });
                            var e = document.body.style.paddingRight,
                                n = gt("body").css("padding-right");
                            gt("body")
                                .data("padding-right", e)
                                .css(
                                    "padding-right",
                                    parseFloat(n) + this._scrollbarWidth + "px"
                                );
                        }
                    }),
                    (e._resetScrollbar = function () {
                        gt(Nt.FIXED_CONTENT).each(function (t, e) {
                            var n = gt(e).data("padding-right");
                            void 0 !== n &&
                                gt(e)
                                    .css("padding-right", n)
                                    .removeData("padding-right");
                        }),
                            gt(
                                Nt.STICKY_CONTENT + ", " + Nt.NAVBAR_TOGGLER
                            ).each(function (t, e) {
                                var n = gt(e).data("margin-right");
                                void 0 !== n &&
                                    gt(e)
                                        .css("margin-right", n)
                                        .removeData("margin-right");
                            });
                        var t = gt("body").data("padding-right");
                        void 0 !== t &&
                            gt("body")
                                .css("padding-right", t)
                                .removeData("padding-right");
                    }),
                    (e._getScrollbarWidth = function () {
                        var t = document.createElement("div");
                        (t.className = Tt), document.body.appendChild(t);
                        var e = t.getBoundingClientRect().width - t.clientWidth;
                        return document.body.removeChild(t), e;
                    }),
                    (t._jQueryInterface = function (e, n) {
                        return this.each(function () {
                            var i = gt(this).data(vt),
                                o = r(
                                    {},
                                    t.Default,
                                    gt(this).data(),
                                    "object" == typeof e && e
                                );
                            if (
                                (i ||
                                    ((i = new t(this, o)),
                                    gt(this).data(vt, i)),
                                "string" == typeof e)
                            ) {
                                if (void 0 === i[e])
                                    throw new TypeError(
                                        'No method named "' + e + '"'
                                    );
                                i[e](n);
                            } else o.show && i.show(n);
                        });
                    }),
                    i(t, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.0.0";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return bt;
                            },
                        },
                    ]),
                    t
                );
            })()),
            gt(document).on(It.CLICK_DATA_API, Nt.DATA_TOGGLE, function (t) {
                var e,
                    n = this,
                    i = hr.getSelectorFromElement(this);
                i && (e = gt(i)[0]);
                var o = gt(e).data(vt)
                    ? "toggle"
                    : r({}, gt(e).data(), gt(this).data());
                ("A" !== this.tagName && "AREA" !== this.tagName) ||
                    t.preventDefault();
                var s = gt(e).one(It.SHOW, function (t) {
                    t.isDefaultPrevented() ||
                        s.one(It.HIDDEN, function () {
                            gt(n).is(":visible") && n.focus();
                        });
                });
                Ot._jQueryInterface.call(gt(e), o, this);
            }),
            (gt.fn[_t] = Ot._jQueryInterface),
            (gt.fn[_t].Constructor = Ot),
            (gt.fn[_t].noConflict = function () {
                return (gt.fn[_t] = Et), Ot._jQueryInterface;
            }),
            ($t = "tooltip"),
            (Rt = "." + (jt = "bs.tooltip")),
            (Lt = (kt = t).fn[$t]),
            (Pt = "bs-tooltip"),
            (xt = new RegExp("(^|\\s)" + Pt + "\\S+", "g")),
            (Ft = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)",
            }),
            (Mt = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: "right",
                BOTTOM: "bottom",
                LEFT: "left",
            }),
            (Qt = {
                animation: !0,
                template:
                    '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent",
            }),
            (Ht = "show"),
            (Ut = "out"),
            (Gt = {
                HIDE: "hide" + Rt,
                HIDDEN: "hidden" + Rt,
                SHOW: "show" + Rt,
                SHOWN: "shown" + Rt,
                INSERTED: "inserted" + Rt,
                CLICK: "click" + Rt,
                FOCUSIN: "focusin" + Rt,
                FOCUSOUT: "focusout" + Rt,
                MOUSEENTER: "mouseenter" + Rt,
                MOUSELEAVE: "mouseleave" + Rt,
            }),
            (Wt = "fade"),
            (Bt = "show"),
            (Kt = ".tooltip-inner"),
            (Vt = ".arrow"),
            (Yt = "hover"),
            (qt = "focus"),
            (zt = "click"),
            (Xt = "manual"),
            (Zt = (function () {
                function t(t, n) {
                    if (void 0 === e)
                        throw new TypeError(
                            "Bootstrap tooltips require Popper.js (https://popper.js.org)"
                        );
                    (this._isEnabled = !0),
                        (this._timeout = 0),
                        (this._hoverState = ""),
                        (this._activeTrigger = {}),
                        (this._popper = null),
                        (this.element = t),
                        (this.config = this._getConfig(n)),
                        (this.tip = null),
                        this._setListeners();
                }
                var n = t.prototype;
                return (
                    (n.enable = function () {
                        this._isEnabled = !0;
                    }),
                    (n.disable = function () {
                        this._isEnabled = !1;
                    }),
                    (n.toggleEnabled = function () {
                        this._isEnabled = !this._isEnabled;
                    }),
                    (n.toggle = function (t) {
                        if (this._isEnabled)
                            if (t) {
                                var e = this.constructor.DATA_KEY,
                                    n = kt(t.currentTarget).data(e);
                                n ||
                                    ((n = new this.constructor(
                                        t.currentTarget,
                                        this._getDelegateConfig()
                                    )),
                                    kt(t.currentTarget).data(e, n)),
                                    (n._activeTrigger.click = !n._activeTrigger
                                        .click),
                                    n._isWithActiveTrigger()
                                        ? n._enter(null, n)
                                        : n._leave(null, n);
                            } else {
                                if (kt(this.getTipElement()).hasClass(Bt))
                                    return void this._leave(null, this);
                                this._enter(null, this);
                            }
                    }),
                    (n.dispose = function () {
                        clearTimeout(this._timeout),
                            kt.removeData(
                                this.element,
                                this.constructor.DATA_KEY
                            ),
                            kt(this.element).off(this.constructor.EVENT_KEY),
                            kt(this.element)
                                .closest(".modal")
                                .off("hide.bs.modal"),
                            this.tip && kt(this.tip).remove(),
                            (this._isEnabled = null),
                            (this._timeout = null),
                            (this._hoverState = null),
                            (this._activeTrigger = null),
                            null !== this._popper && this._popper.destroy(),
                            (this._popper = null),
                            (this.element = null),
                            (this.config = null),
                            (this.tip = null);
                    }),
                    (n.show = function () {
                        var n = this;
                        if ("none" === kt(this.element).css("display"))
                            throw new Error(
                                "Please use show on visible elements"
                            );
                        var i = kt.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            kt(this.element).trigger(i);
                            var r = kt.contains(
                                this.element.ownerDocument.documentElement,
                                this.element
                            );
                            if (i.isDefaultPrevented() || !r) return;
                            var o = this.getTipElement(),
                                s = hr.getUID(this.constructor.NAME);
                            o.setAttribute("id", s),
                                this.element.setAttribute(
                                    "aria-describedby",
                                    s
                                ),
                                this.setContent(),
                                this.config.animation && kt(o).addClass(Wt);
                            var a =
                                    "function" == typeof this.config.placement
                                        ? this.config.placement.call(
                                              this,
                                              o,
                                              this.element
                                          )
                                        : this.config.placement,
                                l = this._getAttachment(a);
                            this.addAttachmentClass(l);
                            var c =
                                !1 === this.config.container
                                    ? document.body
                                    : kt(this.config.container);
                            kt(o).data(this.constructor.DATA_KEY, this),
                                kt.contains(
                                    this.element.ownerDocument.documentElement,
                                    this.tip
                                ) || kt(o).appendTo(c),
                                kt(this.element).trigger(
                                    this.constructor.Event.INSERTED
                                ),
                                (this._popper = new e(this.element, o, {
                                    placement: l,
                                    modifiers: {
                                        offset: { offset: this.config.offset },
                                        flip: {
                                            behavior: this.config
                                                .fallbackPlacement,
                                        },
                                        arrow: { element: Vt },
                                        preventOverflow: {
                                            boundariesElement: this.config
                                                .boundary,
                                        },
                                    },
                                    onCreate: function (t) {
                                        t.originalPlacement !== t.placement &&
                                            n._handlePopperPlacementChange(t);
                                    },
                                    onUpdate: function (t) {
                                        n._handlePopperPlacementChange(t);
                                    },
                                })),
                                kt(o).addClass(Bt),
                                "ontouchstart" in document.documentElement &&
                                    kt("body")
                                        .children()
                                        .on("mouseover", null, kt.noop);
                            var h = function () {
                                n.config.animation && n._fixTransition();
                                var t = n._hoverState;
                                (n._hoverState = null),
                                    kt(n.element).trigger(
                                        n.constructor.Event.SHOWN
                                    ),
                                    t === Ut && n._leave(null, n);
                            };
                            hr.supportsTransitionEnd() &&
                            kt(this.tip).hasClass(Wt)
                                ? kt(this.tip)
                                      .one(hr.TRANSITION_END, h)
                                      .emulateTransitionEnd(
                                          t._TRANSITION_DURATION
                                      )
                                : h();
                        }
                    }),
                    (n.hide = function (t) {
                        var e = this,
                            n = this.getTipElement(),
                            i = kt.Event(this.constructor.Event.HIDE),
                            r = function () {
                                e._hoverState !== Ht &&
                                    n.parentNode &&
                                    n.parentNode.removeChild(n),
                                    e._cleanTipClass(),
                                    e.element.removeAttribute(
                                        "aria-describedby"
                                    ),
                                    kt(e.element).trigger(
                                        e.constructor.Event.HIDDEN
                                    ),
                                    null !== e._popper && e._popper.destroy(),
                                    t && t();
                            };
                        kt(this.element).trigger(i),
                            i.isDefaultPrevented() ||
                                (kt(n).removeClass(Bt),
                                "ontouchstart" in document.documentElement &&
                                    kt("body")
                                        .children()
                                        .off("mouseover", null, kt.noop),
                                (this._activeTrigger[zt] = !1),
                                (this._activeTrigger[qt] = !1),
                                (this._activeTrigger[Yt] = !1),
                                hr.supportsTransitionEnd() &&
                                kt(this.tip).hasClass(Wt)
                                    ? kt(n)
                                          .one(hr.TRANSITION_END, r)
                                          .emulateTransitionEnd(150)
                                    : r(),
                                (this._hoverState = ""));
                    }),
                    (n.update = function () {
                        null !== this._popper && this._popper.scheduleUpdate();
                    }),
                    (n.isWithContent = function () {
                        return Boolean(this.getTitle());
                    }),
                    (n.addAttachmentClass = function (t) {
                        kt(this.getTipElement()).addClass(Pt + "-" + t);
                    }),
                    (n.getTipElement = function () {
                        return (
                            (this.tip =
                                this.tip || kt(this.config.template)[0]),
                            this.tip
                        );
                    }),
                    (n.setContent = function () {
                        var t = kt(this.getTipElement());
                        this.setElementContent(t.find(Kt), this.getTitle()),
                            t.removeClass(Wt + " " + Bt);
                    }),
                    (n.setElementContent = function (t, e) {
                        var n = this.config.html;
                        "object" == typeof e && (e.nodeType || e.jquery)
                            ? n
                                ? kt(e).parent().is(t) || t.empty().append(e)
                                : t.text(kt(e).text())
                            : t[n ? "html" : "text"](e);
                    }),
                    (n.getTitle = function () {
                        var t = this.element.getAttribute(
                            "data-original-title"
                        );
                        return (
                            t ||
                                (t =
                                    "function" == typeof this.config.title
                                        ? this.config.title.call(this.element)
                                        : this.config.title),
                            t
                        );
                    }),
                    (n._getAttachment = function (t) {
                        return Mt[t.toUpperCase()];
                    }),
                    (n._setListeners = function () {
                        var t = this;
                        this.config.trigger.split(" ").forEach(function (e) {
                            if ("click" === e)
                                kt(t.element).on(
                                    t.constructor.Event.CLICK,
                                    t.config.selector,
                                    function (e) {
                                        return t.toggle(e);
                                    }
                                );
                            else if (e !== Xt) {
                                var n =
                                        e === Yt
                                            ? t.constructor.Event.MOUSEENTER
                                            : t.constructor.Event.FOCUSIN,
                                    i =
                                        e === Yt
                                            ? t.constructor.Event.MOUSELEAVE
                                            : t.constructor.Event.FOCUSOUT;
                                kt(t.element)
                                    .on(n, t.config.selector, function (e) {
                                        return t._enter(e);
                                    })
                                    .on(i, t.config.selector, function (e) {
                                        return t._leave(e);
                                    });
                            }
                            kt(t.element)
                                .closest(".modal")
                                .on("hide.bs.modal", function () {
                                    return t.hide();
                                });
                        }),
                            this.config.selector
                                ? (this.config = r({}, this.config, {
                                      trigger: "manual",
                                      selector: "",
                                  }))
                                : this._fixTitle();
                    }),
                    (n._fixTitle = function () {
                        var t = typeof this.element.getAttribute(
                            "data-original-title"
                        );
                        (this.element.getAttribute("title") ||
                            "string" !== t) &&
                            (this.element.setAttribute(
                                "data-original-title",
                                this.element.getAttribute("title") || ""
                            ),
                            this.element.setAttribute("title", ""));
                    }),
                    (n._enter = function (t, e) {
                        var n = this.constructor.DATA_KEY;
                        (e = e || kt(t.currentTarget).data(n)) ||
                            ((e = new this.constructor(
                                t.currentTarget,
                                this._getDelegateConfig()
                            )),
                            kt(t.currentTarget).data(n, e)),
                            t &&
                                (e._activeTrigger[
                                    "focusin" === t.type ? qt : Yt
                                ] = !0),
                            kt(e.getTipElement()).hasClass(Bt) ||
                            e._hoverState === Ht
                                ? (e._hoverState = Ht)
                                : (clearTimeout(e._timeout),
                                  (e._hoverState = Ht),
                                  e.config.delay && e.config.delay.show
                                      ? (e._timeout = setTimeout(function () {
                                            e._hoverState === Ht && e.show();
                                        }, e.config.delay.show))
                                      : e.show());
                    }),
                    (n._leave = function (t, e) {
                        var n = this.constructor.DATA_KEY;
                        (e = e || kt(t.currentTarget).data(n)) ||
                            ((e = new this.constructor(
                                t.currentTarget,
                                this._getDelegateConfig()
                            )),
                            kt(t.currentTarget).data(n, e)),
                            t &&
                                (e._activeTrigger[
                                    "focusout" === t.type ? qt : Yt
                                ] = !1),
                            e._isWithActiveTrigger() ||
                                (clearTimeout(e._timeout),
                                (e._hoverState = Ut),
                                e.config.delay && e.config.delay.hide
                                    ? (e._timeout = setTimeout(function () {
                                          e._hoverState === Ut && e.hide();
                                      }, e.config.delay.hide))
                                    : e.hide());
                    }),
                    (n._isWithActiveTrigger = function () {
                        for (var t in this._activeTrigger)
                            if (this._activeTrigger[t]) return !0;
                        return !1;
                    }),
                    (n._getConfig = function (t) {
                        return (
                            "number" ==
                                typeof (t = r(
                                    {},
                                    this.constructor.Default,
                                    kt(this.element).data(),
                                    t
                                )).delay &&
                                (t.delay = { show: t.delay, hide: t.delay }),
                            "number" == typeof t.title &&
                                (t.title = t.title.toString()),
                            "number" == typeof t.content &&
                                (t.content = t.content.toString()),
                            hr.typeCheckConfig(
                                $t,
                                t,
                                this.constructor.DefaultType
                            ),
                            t
                        );
                    }),
                    (n._getDelegateConfig = function () {
                        var t = {};
                        if (this.config)
                            for (var e in this.config)
                                this.constructor.Default[e] !==
                                    this.config[e] && (t[e] = this.config[e]);
                        return t;
                    }),
                    (n._cleanTipClass = function () {
                        var t = kt(this.getTipElement()),
                            e = t.attr("class").match(xt);
                        null !== e && e.length > 0 && t.removeClass(e.join(""));
                    }),
                    (n._handlePopperPlacementChange = function (t) {
                        this._cleanTipClass(),
                            this.addAttachmentClass(
                                this._getAttachment(t.placement)
                            );
                    }),
                    (n._fixTransition = function () {
                        var t = this.getTipElement(),
                            e = this.config.animation;
                        null === t.getAttribute("x-placement") &&
                            (kt(t).removeClass(Wt),
                            (this.config.animation = !1),
                            this.hide(),
                            this.show(),
                            (this.config.animation = e));
                    }),
                    (t._jQueryInterface = function (e) {
                        return this.each(function () {
                            var n = kt(this).data(jt),
                                i = "object" == typeof e && e;
                            if (
                                (n || !/dispose|hide/.test(e)) &&
                                (n ||
                                    ((n = new t(this, i)),
                                    kt(this).data(jt, n)),
                                "string" == typeof e)
                            ) {
                                if (void 0 === n[e])
                                    throw new TypeError(
                                        'No method named "' + e + '"'
                                    );
                                n[e]();
                            }
                        });
                    }),
                    i(t, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.0.0";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return Qt;
                            },
                        },
                        {
                            key: "NAME",
                            get: function () {
                                return $t;
                            },
                        },
                        {
                            key: "DATA_KEY",
                            get: function () {
                                return jt;
                            },
                        },
                        {
                            key: "Event",
                            get: function () {
                                return Gt;
                            },
                        },
                        {
                            key: "EVENT_KEY",
                            get: function () {
                                return Rt;
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function () {
                                return Ft;
                            },
                        },
                    ]),
                    t
                );
            })()),
            (kt.fn[$t] = Zt._jQueryInterface),
            (kt.fn[$t].Constructor = Zt),
            (kt.fn[$t].noConflict = function () {
                return (kt.fn[$t] = Lt), Zt._jQueryInterface;
            }),
            Zt),
        dr =
            ((te = "popover"),
            (ne = "." + (ee = "bs.popover")),
            (ie = (Jt = t).fn[te]),
            (re = "bs-popover"),
            (oe = new RegExp("(^|\\s)" + re + "\\S+", "g")),
            (se = r({}, ur.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template:
                    '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            })),
            (ae = r({}, ur.DefaultType, {
                content: "(string|element|function)",
            })),
            (le = "fade"),
            (ce = "show"),
            (he = ".popover-header"),
            (ue = ".popover-body"),
            (de = {
                HIDE: "hide" + ne,
                HIDDEN: "hidden" + ne,
                SHOW: "show" + ne,
                SHOWN: "shown" + ne,
                INSERTED: "inserted" + ne,
                CLICK: "click" + ne,
                FOCUSIN: "focusin" + ne,
                FOCUSOUT: "focusout" + ne,
                MOUSEENTER: "mouseenter" + ne,
                MOUSELEAVE: "mouseleave" + ne,
            }),
            (fe = (function (t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                o(e, t);
                var n = e.prototype;
                return (
                    (n.isWithContent = function () {
                        return this.getTitle() || this._getContent();
                    }),
                    (n.addAttachmentClass = function (t) {
                        Jt(this.getTipElement()).addClass(re + "-" + t);
                    }),
                    (n.getTipElement = function () {
                        return (
                            (this.tip =
                                this.tip || Jt(this.config.template)[0]),
                            this.tip
                        );
                    }),
                    (n.setContent = function () {
                        var t = Jt(this.getTipElement());
                        this.setElementContent(t.find(he), this.getTitle());
                        var e = this._getContent();
                        "function" == typeof e && (e = e.call(this.element)),
                            this.setElementContent(t.find(ue), e),
                            t.removeClass(le + " " + ce);
                    }),
                    (n._getContent = function () {
                        return (
                            this.element.getAttribute("data-content") ||
                            this.config.content
                        );
                    }),
                    (n._cleanTipClass = function () {
                        var t = Jt(this.getTipElement()),
                            e = t.attr("class").match(oe);
                        null !== e && e.length > 0 && t.removeClass(e.join(""));
                    }),
                    (e._jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = Jt(this).data(ee),
                                i = "object" == typeof t ? t : null;
                            if (
                                (n || !/destroy|hide/.test(t)) &&
                                (n ||
                                    ((n = new e(this, i)),
                                    Jt(this).data(ee, n)),
                                "string" == typeof t)
                            ) {
                                if (void 0 === n[t])
                                    throw new TypeError(
                                        'No method named "' + t + '"'
                                    );
                                n[t]();
                            }
                        });
                    }),
                    i(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.0.0";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return se;
                            },
                        },
                        {
                            key: "NAME",
                            get: function () {
                                return te;
                            },
                        },
                        {
                            key: "DATA_KEY",
                            get: function () {
                                return ee;
                            },
                        },
                        {
                            key: "Event",
                            get: function () {
                                return de;
                            },
                        },
                        {
                            key: "EVENT_KEY",
                            get: function () {
                                return ne;
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function () {
                                return ae;
                            },
                        },
                    ]),
                    e
                );
            })(ur)),
            (Jt.fn[te] = fe._jQueryInterface),
            (Jt.fn[te].Constructor = fe),
            (Jt.fn[te].noConflict = function () {
                return (Jt.fn[te] = ie), fe._jQueryInterface;
            }),
            (me = "scrollspy"),
            (_e = "." + (ge = "bs.scrollspy")),
            (ve = (pe = t).fn[me]),
            (ye = { offset: 10, method: "auto", target: "" }),
            (Ee = {
                offset: "number",
                method: "string",
                target: "(string|element)",
            }),
            (be = {
                ACTIVATE: "activate" + _e,
                SCROLL: "scroll" + _e,
                LOAD_DATA_API: "load" + _e + ".data-api",
            }),
            (Ce = "dropdown-item"),
            (Ie = "active"),
            (Te = {
                DATA_SPY: '[data-spy="scroll"]',
                ACTIVE: ".active",
                NAV_LIST_GROUP: ".nav, .list-group",
                NAV_LINKS: ".nav-link",
                NAV_ITEMS: ".nav-item",
                LIST_ITEMS: ".list-group-item",
                DROPDOWN: ".dropdown",
                DROPDOWN_ITEMS: ".dropdown-item",
                DROPDOWN_TOGGLE: ".dropdown-toggle",
            }),
            (Ae = "offset"),
            (Se = "position"),
            (we = (function () {
                function t(t, e) {
                    var n = this;
                    (this._element = t),
                        (this._scrollElement =
                            "BODY" === t.tagName ? window : t),
                        (this._config = this._getConfig(e)),
                        (this._selector =
                            this._config.target +
                            " " +
                            Te.NAV_LINKS +
                            "," +
                            this._config.target +
                            " " +
                            Te.LIST_ITEMS +
                            "," +
                            this._config.target +
                            " " +
                            Te.DROPDOWN_ITEMS),
                        (this._offsets = []),
                        (this._targets = []),
                        (this._activeTarget = null),
                        (this._scrollHeight = 0),
                        pe(this._scrollElement).on(be.SCROLL, function (t) {
                            return n._process(t);
                        }),
                        this.refresh(),
                        this._process();
                }
                var e = t.prototype;
                return (
                    (e.refresh = function () {
                        var t = this,
                            e =
                                this._scrollElement ===
                                this._scrollElement.window
                                    ? Ae
                                    : Se,
                            n =
                                "auto" === this._config.method
                                    ? e
                                    : this._config.method,
                            i = n === Se ? this._getScrollTop() : 0;
                        (this._offsets = []),
                            (this._targets = []),
                            (this._scrollHeight = this._getScrollHeight()),
                            pe
                                .makeArray(pe(this._selector))
                                .map(function (t) {
                                    var e,
                                        r = hr.getSelectorFromElement(t);
                                    if ((r && (e = pe(r)[0]), e)) {
                                        var o = e.getBoundingClientRect();
                                        if (o.width || o.height)
                                            return [pe(e)[n]().top + i, r];
                                    }
                                    return null;
                                })
                                .filter(function (t) {
                                    return t;
                                })
                                .sort(function (t, e) {
                                    return t[0] - e[0];
                                })
                                .forEach(function (e) {
                                    t._offsets.push(e[0]),
                                        t._targets.push(e[1]);
                                });
                    }),
                    (e.dispose = function () {
                        pe.removeData(this._element, ge),
                            pe(this._scrollElement).off(_e),
                            (this._element = null),
                            (this._scrollElement = null),
                            (this._config = null),
                            (this._selector = null),
                            (this._offsets = null),
                            (this._targets = null),
                            (this._activeTarget = null),
                            (this._scrollHeight = null);
                    }),
                    (e._getConfig = function (t) {
                        if ("string" != typeof (t = r({}, ye, t)).target) {
                            var e = pe(t.target).attr("id");
                            e ||
                                ((e = hr.getUID(me)),
                                pe(t.target).attr("id", e)),
                                (t.target = "#" + e);
                        }
                        return hr.typeCheckConfig(me, t, Ee), t;
                    }),
                    (e._getScrollTop = function () {
                        return this._scrollElement === window
                            ? this._scrollElement.pageYOffset
                            : this._scrollElement.scrollTop;
                    }),
                    (e._getScrollHeight = function () {
                        return (
                            this._scrollElement.scrollHeight ||
                            Math.max(
                                document.body.scrollHeight,
                                document.documentElement.scrollHeight
                            )
                        );
                    }),
                    (e._getOffsetHeight = function () {
                        return this._scrollElement === window
                            ? window.innerHeight
                            : this._scrollElement.getBoundingClientRect()
                                  .height;
                    }),
                    (e._process = function () {
                        var t = this._getScrollTop() + this._config.offset,
                            e = this._getScrollHeight(),
                            n =
                                this._config.offset +
                                e -
                                this._getOffsetHeight();
                        if (
                            (this._scrollHeight !== e && this.refresh(), t >= n)
                        ) {
                            var i = this._targets[this._targets.length - 1];
                            this._activeTarget !== i && this._activate(i);
                        } else {
                            if (
                                this._activeTarget &&
                                t < this._offsets[0] &&
                                this._offsets[0] > 0
                            )
                                return (
                                    (this._activeTarget = null),
                                    void this._clear()
                                );
                            for (var r = this._offsets.length; r--; ) {
                                this._activeTarget !== this._targets[r] &&
                                    t >= this._offsets[r] &&
                                    (void 0 === this._offsets[r + 1] ||
                                        t < this._offsets[r + 1]) &&
                                    this._activate(this._targets[r]);
                            }
                        }
                    }),
                    (e._activate = function (t) {
                        (this._activeTarget = t), this._clear();
                        var e = this._selector.split(",");
                        e = e.map(function (e) {
                            return (
                                e +
                                '[data-target="' +
                                t +
                                '"],' +
                                e +
                                '[href="' +
                                t +
                                '"]'
                            );
                        });
                        var n = pe(e.join(","));
                        n.hasClass(Ce)
                            ? (n
                                  .closest(Te.DROPDOWN)
                                  .find(Te.DROPDOWN_TOGGLE)
                                  .addClass(Ie),
                              n.addClass(Ie))
                            : (n.addClass(Ie),
                              n
                                  .parents(Te.NAV_LIST_GROUP)
                                  .prev(Te.NAV_LINKS + ", " + Te.LIST_ITEMS)
                                  .addClass(Ie),
                              n
                                  .parents(Te.NAV_LIST_GROUP)
                                  .prev(Te.NAV_ITEMS)
                                  .children(Te.NAV_LINKS)
                                  .addClass(Ie)),
                            pe(this._scrollElement).trigger(be.ACTIVATE, {
                                relatedTarget: t,
                            });
                    }),
                    (e._clear = function () {
                        pe(this._selector).filter(Te.ACTIVE).removeClass(Ie);
                    }),
                    (t._jQueryInterface = function (e) {
                        return this.each(function () {
                            var n = pe(this).data(ge);
                            if (
                                (n ||
                                    ((n = new t(
                                        this,
                                        "object" == typeof e && e
                                    )),
                                    pe(this).data(ge, n)),
                                "string" == typeof e)
                            ) {
                                if (void 0 === n[e])
                                    throw new TypeError(
                                        'No method named "' + e + '"'
                                    );
                                n[e]();
                            }
                        });
                    }),
                    i(t, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.0.0";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return ye;
                            },
                        },
                    ]),
                    t
                );
            })()),
            pe(window).on(be.LOAD_DATA_API, function () {
                for (
                    var t = pe.makeArray(pe(Te.DATA_SPY)), e = t.length;
                    e--;

                ) {
                    var n = pe(t[e]);
                    we._jQueryInterface.call(n, n.data());
                }
            }),
            (pe.fn[me] = we._jQueryInterface),
            (pe.fn[me].Constructor = we),
            (pe.fn[me].noConflict = function () {
                return (pe.fn[me] = ve), we._jQueryInterface;
            }),
            (Oe = "." + (Ne = "bs.tab")),
            (ke = (De = t).fn.tab),
            ($e = {
                HIDE: "hide" + Oe,
                HIDDEN: "hidden" + Oe,
                SHOW: "show" + Oe,
                SHOWN: "shown" + Oe,
                CLICK_DATA_API: "click" + Oe + ".data-api",
            }),
            (je = "dropdown-menu"),
            (Re = "active"),
            (Le = "disabled"),
            (Pe = "fade"),
            (xe = "show"),
            (Fe = ".dropdown"),
            (Me = ".nav, .list-group"),
            (Qe = ".active"),
            (He = "> li > .active"),
            (Ue =
                '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'),
            (Ge = ".dropdown-toggle"),
            (We = "> .dropdown-menu .active"),
            (Be = (function () {
                function t(t) {
                    this._element = t;
                }
                var e = t.prototype;
                return (
                    (e.show = function () {
                        var t = this;
                        if (
                            !(
                                (this._element.parentNode &&
                                    this._element.parentNode.nodeType ===
                                        Node.ELEMENT_NODE &&
                                    De(this._element).hasClass(Re)) ||
                                De(this._element).hasClass(Le)
                            )
                        ) {
                            var e,
                                n,
                                i = De(this._element).closest(Me)[0],
                                r = hr.getSelectorFromElement(this._element);
                            if (i) {
                                var o = "UL" === i.nodeName ? He : Qe;
                                n = (n = De.makeArray(De(i).find(o)))[
                                    n.length - 1
                                ];
                            }
                            var s = De.Event($e.HIDE, {
                                    relatedTarget: this._element,
                                }),
                                a = De.Event($e.SHOW, { relatedTarget: n });
                            if (
                                (n && De(n).trigger(s),
                                De(this._element).trigger(a),
                                !a.isDefaultPrevented() &&
                                    !s.isDefaultPrevented())
                            ) {
                                r && (e = De(r)[0]),
                                    this._activate(this._element, i);
                                var l = function () {
                                    var e = De.Event($e.HIDDEN, {
                                            relatedTarget: t._element,
                                        }),
                                        i = De.Event($e.SHOWN, {
                                            relatedTarget: n,
                                        });
                                    De(n).trigger(e), De(t._element).trigger(i);
                                };
                                e ? this._activate(e, e.parentNode, l) : l();
                            }
                        }
                    }),
                    (e.dispose = function () {
                        De.removeData(this._element, Ne),
                            (this._element = null);
                    }),
                    (e._activate = function (t, e, n) {
                        var i = this,
                            r = ("UL" === e.nodeName
                                ? De(e).find(He)
                                : De(e).children(Qe))[0],
                            o =
                                n &&
                                hr.supportsTransitionEnd() &&
                                r &&
                                De(r).hasClass(Pe),
                            s = function () {
                                return i._transitionComplete(t, r, n);
                            };
                        r && o
                            ? De(r)
                                  .one(hr.TRANSITION_END, s)
                                  .emulateTransitionEnd(150)
                            : s();
                    }),
                    (e._transitionComplete = function (t, e, n) {
                        if (e) {
                            De(e).removeClass(xe + " " + Re);
                            var i = De(e.parentNode).find(We)[0];
                            i && De(i).removeClass(Re),
                                "tab" === e.getAttribute("role") &&
                                    e.setAttribute("aria-selected", !1);
                        }
                        if (
                            (De(t).addClass(Re),
                            "tab" === t.getAttribute("role") &&
                                t.setAttribute("aria-selected", !0),
                            hr.reflow(t),
                            De(t).addClass(xe),
                            t.parentNode && De(t.parentNode).hasClass(je))
                        ) {
                            var r = De(t).closest(Fe)[0];
                            r && De(r).find(Ge).addClass(Re),
                                t.setAttribute("aria-expanded", !0);
                        }
                        n && n();
                    }),
                    (t._jQueryInterface = function (e) {
                        return this.each(function () {
                            var n = De(this),
                                i = n.data(Ne);
                            if (
                                (i || ((i = new t(this)), n.data(Ne, i)),
                                "string" == typeof e)
                            ) {
                                if (void 0 === i[e])
                                    throw new TypeError(
                                        'No method named "' + e + '"'
                                    );
                                i[e]();
                            }
                        });
                    }),
                    i(t, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.0.0";
                            },
                        },
                    ]),
                    t
                );
            })()),
            De(document).on($e.CLICK_DATA_API, Ue, function (t) {
                t.preventDefault(), Be._jQueryInterface.call(De(this), "show");
            }),
            (De.fn.tab = Be._jQueryInterface),
            (De.fn.tab.Constructor = Be),
            (De.fn.tab.noConflict = function () {
                return (De.fn.tab = ke), Be._jQueryInterface;
            }),
            (function () {
                var t = !1,
                    e = "",
                    n = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend",
                    };
                var i = {
                    transitionEndSupported: function () {
                        return t;
                    },
                    transitionEndSelector: function () {
                        return e;
                    },
                    isChar: function (t) {
                        return (
                            void 0 === t.which ||
                            ("number" == typeof t.which &&
                                t.which > 0 &&
                                !t.ctrlKey &&
                                !t.metaKey &&
                                !t.altKey &&
                                8 !== t.which &&
                                9 !== t.which &&
                                13 !== t.which &&
                                16 !== t.which &&
                                17 !== t.which &&
                                20 !== t.which &&
                                27 !== t.which)
                        );
                    },
                    assert: function (t, e, n) {
                        if (e)
                            throw (
                                (void 0 === !t &&
                                    t.css("border", "1px solid red"),
                                console.error(n, t),
                                n)
                            );
                    },
                    describe: function (t) {
                        return void 0 === t
                            ? "undefined"
                            : 0 === t.length
                            ? "(no matching elements)"
                            : t[0].outerHTML.split(">")[0] + ">";
                    },
                };
                return (
                    (function () {
                        t = (function () {
                            if (window.QUnit) return !1;
                            var t = document.createElement("bmd");
                            for (var e in n)
                                if (void 0 !== t.style[e]) return n[e];
                            return !1;
                        })();
                        for (var i in n) e += " " + n[i];
                    })(),
                    i
                );
            })(jQuery)),
        fr =
            ((Ke = jQuery),
            (Ve = "is-filled"),
            (Ye = "is-focused"),
            (qe = { BMD_FORM_GROUP: "." + "bmd-form-group" }),
            (ze = {}),
            (function () {
                function t(t, e, n) {
                    void 0 === n && (n = {}),
                        (this.$element = t),
                        (this.config = Ke.extend(!0, {}, ze, e));
                    for (var i in n) this[i] = n[i];
                }
                var e = t.prototype;
                return (
                    (e.dispose = function (t) {
                        this.$element.data(t, null),
                            (this.$element = null),
                            (this.config = null);
                    }),
                    (e.addFormGroupFocus = function () {
                        this.$element.prop("disabled") ||
                            this.$bmdFormGroup.addClass(Ye);
                    }),
                    (e.removeFormGroupFocus = function () {
                        this.$bmdFormGroup.removeClass(Ye);
                    }),
                    (e.removeIsFilled = function () {
                        this.$bmdFormGroup.removeClass(Ve);
                    }),
                    (e.addIsFilled = function () {
                        this.$bmdFormGroup.addClass(Ve);
                    }),
                    (e.findMdbFormGroup = function (t) {
                        void 0 === t && (t = !0);
                        var e = this.$element.closest(qe.BMD_FORM_GROUP);
                        return (
                            0 === e.length &&
                                t &&
                                Ke.error(
                                    "Failed to find " +
                                        qe.BMD_FORM_GROUP +
                                        " for " +
                                        dr.describe(this.$element)
                                ),
                            e
                        );
                    }),
                    t
                );
            })()),
        pr =
            ((Xe = jQuery),
            (tn = "has-danger"),
            (en = "input-group"),
            (nn = {
                FORM_GROUP: "." + "form-group",
                BMD_FORM_GROUP: "." + (Ze = "bmd-form-group"),
                BMD_LABEL_WILDCARD:
                    "label[class^='" +
                    (Je = "bmd-label") +
                    "'], label[class*=' " +
                    Je +
                    "']",
            }),
            (rn = {
                validate: !1,
                formGroup: { required: !1 },
                bmdFormGroup: {
                    template: "<span class='" + Ze + "'></span>",
                    create: !0,
                    required: !0,
                },
                label: {
                    required: !1,
                    selectors: [".form-control-label", "> label"],
                    className: "bmd-label-static",
                },
                requiredClasses: [],
                invalidComponentMatches: [],
                convertInputSizeVariations: !0,
            }),
            (on = {
                "form-control-lg": "bmd-form-group-lg",
                "form-control-sm": "bmd-form-group-sm",
            }),
            (function (t) {
                function e(e, n, i) {
                    var r;
                    return (
                        void 0 === i && (i = {}),
                        (r =
                            t.call(this, e, Xe.extend(!0, {}, rn, n), i) ||
                            this)._rejectInvalidComponentMatches(),
                        r.rejectWithoutRequiredStructure(),
                        r._rejectWithoutRequiredClasses(),
                        (r.$formGroup = r.findFormGroup(
                            r.config.formGroup.required
                        )),
                        (r.$bmdFormGroup = r.resolveMdbFormGroup()),
                        (r.$bmdLabel = r.resolveMdbLabel()),
                        r.resolveMdbFormGroupSizing(),
                        r.addFocusListener(),
                        r.addChangeListener(),
                        "" != r.$element.val() && r.addIsFilled(),
                        r
                    );
                }
                o(e, t);
                var n = e.prototype;
                return (
                    (n.dispose = function (e) {
                        t.prototype.dispose.call(this, e),
                            (this.$bmdFormGroup = null),
                            (this.$formGroup = null);
                    }),
                    (n.rejectWithoutRequiredStructure = function () {}),
                    (n.addFocusListener = function () {
                        var t = this;
                        this.$element
                            .on("focus", function () {
                                t.addFormGroupFocus();
                            })
                            .on("blur", function () {
                                t.removeFormGroupFocus();
                            });
                    }),
                    (n.addChangeListener = function () {
                        var t = this;
                        this.$element
                            .on("keydown paste", function (e) {
                                dr.isChar(e) && t.addIsFilled();
                            })
                            .on("keyup change", function () {
                                t.isEmpty()
                                    ? t.removeIsFilled()
                                    : t.addIsFilled(),
                                    t.config.validate &&
                                        (void 0 ===
                                            t.$element[0].checkValidity ||
                                        t.$element[0].checkValidity()
                                            ? t.removeHasDanger()
                                            : t.addHasDanger());
                            });
                    }),
                    (n.addHasDanger = function () {
                        this.$bmdFormGroup.addClass(tn);
                    }),
                    (n.removeHasDanger = function () {
                        this.$bmdFormGroup.removeClass(tn);
                    }),
                    (n.isEmpty = function () {
                        return (
                            null === this.$element.val() ||
                            void 0 === this.$element.val() ||
                            "" === this.$element.val()
                        );
                    }),
                    (n.resolveMdbFormGroup = function () {
                        var t = this.findMdbFormGroup(!1);
                        return (
                            (void 0 !== t && 0 !== t.length) ||
                                (!this.config.bmdFormGroup.create ||
                                (void 0 !== this.$formGroup &&
                                    0 !== this.$formGroup.length)
                                    ? this.$formGroup.addClass(Ze)
                                    : this.outerElement().parent().hasClass(en)
                                    ? this.outerElement()
                                          .parent()
                                          .wrap(
                                              this.config.bmdFormGroup.template
                                          )
                                    : this.outerElement().wrap(
                                          this.config.bmdFormGroup.template
                                      ),
                                (t = this.findMdbFormGroup(
                                    this.config.bmdFormGroup.required
                                ))),
                            t
                        );
                    }),
                    (n.outerElement = function () {
                        return this.$element;
                    }),
                    (n.resolveMdbLabel = function () {
                        var t = this.$bmdFormGroup.find(nn.BMD_LABEL_WILDCARD);
                        return (
                            (void 0 !== t && 0 !== t.length) ||
                                void 0 ===
                                    (t = this.findMdbLabel(
                                        this.config.label.required
                                    )) ||
                                0 === t.length ||
                                t.addClass(this.config.label.className),
                            t
                        );
                    }),
                    (n.findMdbLabel = function (t) {
                        void 0 === t && (t = !0);
                        var e = null,
                            n = this.config.label.selectors,
                            i = Array.isArray(n),
                            r = 0;
                        for (n = i ? n : n[Symbol.iterator](); ; ) {
                            var o;
                            if (i) {
                                if (r >= n.length) break;
                                o = n[r++];
                            } else {
                                if ((r = n.next()).done) break;
                                o = r.value;
                            }
                            var s = o;
                            if (
                                void 0 !==
                                    (e = Xe.isFunction(s)
                                        ? s(this)
                                        : this.$bmdFormGroup.find(s)) &&
                                e.length > 0
                            )
                                break;
                        }
                        return (
                            0 === e.length &&
                                t &&
                                Xe.error(
                                    "Failed to find " +
                                        nn.BMD_LABEL_WILDCARD +
                                        " within form-group for " +
                                        dr.describe(this.$element)
                                ),
                            e
                        );
                    }),
                    (n.findFormGroup = function (t) {
                        void 0 === t && (t = !0);
                        var e = this.$element.closest(nn.FORM_GROUP);
                        return (
                            0 === e.length &&
                                t &&
                                Xe.error(
                                    "Failed to find " +
                                        nn.FORM_GROUP +
                                        " for " +
                                        dr.describe(this.$element)
                                ),
                            e
                        );
                    }),
                    (n.resolveMdbFormGroupSizing = function () {
                        if (this.config.convertInputSizeVariations)
                            for (var t in on)
                                this.$element.hasClass(t) &&
                                    this.$bmdFormGroup.addClass(on[t]);
                    }),
                    (n._rejectInvalidComponentMatches = function () {
                        var t = this.config.invalidComponentMatches,
                            e = Array.isArray(t),
                            n = 0;
                        for (t = e ? t : t[Symbol.iterator](); ; ) {
                            var i;
                            if (e) {
                                if (n >= t.length) break;
                                i = t[n++];
                            } else {
                                if ((n = t.next()).done) break;
                                i = n.value;
                            }
                            i.rejectMatch(this.constructor.name, this.$element);
                        }
                    }),
                    (n._rejectWithoutRequiredClasses = function () {
                        var t = this.config.requiredClasses,
                            e = Array.isArray(t),
                            n = 0;
                        for (t = e ? t : t[Symbol.iterator](); ; ) {
                            var i;
                            if (e) {
                                if (n >= t.length) break;
                                i = t[n++];
                            } else {
                                if ((n = t.next()).done) break;
                                i = n.value;
                            }
                            var r = i,
                                o = !1;
                            if (-1 !== r.indexOf("||")) {
                                var s = r.split("||"),
                                    a = Array.isArray(s),
                                    l = 0;
                                for (s = a ? s : s[Symbol.iterator](); ; ) {
                                    var c;
                                    if (a) {
                                        if (l >= s.length) break;
                                        c = s[l++];
                                    } else {
                                        if ((l = s.next()).done) break;
                                        c = l.value;
                                    }
                                    var h = c;
                                    if (this.$element.hasClass(h)) {
                                        o = !0;
                                        break;
                                    }
                                }
                            } else this.$element.hasClass(r) && (o = !0);
                            o ||
                                Xe.error(
                                    this.constructor.name +
                                        " element: " +
                                        dr.describe(this.$element) +
                                        " requires class: " +
                                        r
                                );
                        }
                    }),
                    e
                );
            })(fr)),
        mr =
            ((sn = jQuery),
            (an = { label: { required: !1 } }),
            (ln = "label"),
            (function (t) {
                function e(e, n, i) {
                    var r;
                    return (
                        (r =
                            t.call(this, e, sn.extend(!0, {}, an, n), i) ||
                            this).decorateMarkup(),
                        r
                    );
                }
                o(e, t);
                var n = e.prototype;
                return (
                    (n.decorateMarkup = function () {
                        var t = sn(this.config.template);
                        this.$element.after(t),
                            !1 !== this.config.ripples && t.bmdRipples();
                    }),
                    (n.outerElement = function () {
                        return this.$element
                            .parent()
                            .closest("." + this.outerClass);
                    }),
                    (n.rejectWithoutRequiredStructure = function () {
                        dr.assert(
                            this.$element,
                            "label" === !this.$element.parent().prop("tagName"),
                            this.constructor.name +
                                "'s " +
                                dr.describe(this.$element) +
                                " parent element should be <label>."
                        ),
                            dr.assert(
                                this.$element,
                                !this.outerElement().hasClass(this.outerClass),
                                this.constructor.name +
                                    "'s " +
                                    dr.describe(this.$element) +
                                    " outer element should have class " +
                                    this.outerClass +
                                    "."
                            );
                    }),
                    (n.addFocusListener = function () {
                        var t = this;
                        this.$element.closest(ln).hover(
                            function () {
                                t.addFormGroupFocus();
                            },
                            function () {
                                t.removeFormGroupFocus();
                            }
                        );
                    }),
                    (n.addChangeListener = function () {
                        var t = this;
                        this.$element.change(function () {
                            t.$element.blur();
                        });
                    }),
                    e
                );
            })(pr)),
        gr =
            ((cn = jQuery),
            (un = "bmd." + (hn = "checkbox")),
            (dn = "bmd" + (hn.charAt(0).toUpperCase() + hn.slice(1))),
            (fn = cn.fn[dn]),
            (pn = {
                template:
                    "<span class='checkbox-decorator'><span class='check'></span></span>",
            }),
            (mn = (function (t) {
                function e(e, n, i) {
                    return (
                        void 0 === i && (i = { inputType: hn, outerClass: hn }),
                        t.call(this, e, cn.extend(!0, pn, n), i) || this
                    );
                }
                return (
                    o(e, t),
                    (e.prototype.dispose = function (e) {
                        void 0 === e && (e = un),
                            t.prototype.dispose.call(this, e);
                    }),
                    (e.matches = function (t) {
                        return "checkbox" === t.attr("type");
                    }),
                    (e.rejectMatch = function (t, e) {
                        dr.assert(
                            this.$element,
                            this.matches(e),
                            t +
                                " component element " +
                                dr.describe(e) +
                                " is invalid for type='checkbox'."
                        );
                    }),
                    (e._jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = cn(this),
                                i = n.data(un);
                            i || ((i = new e(n, t)), n.data(un, i));
                        });
                    }),
                    e
                );
            })(mr)),
            (cn.fn[dn] = mn._jQueryInterface),
            (cn.fn[dn].Constructor = mn),
            (cn.fn[dn].noConflict = function () {
                return (cn.fn[dn] = fn), mn._jQueryInterface;
            }),
            mn),
        _r =
            ((gn = jQuery),
            (vn = "bmd." + (_n = "checkboxInline")),
            (yn = "bmd" + (_n.charAt(0).toUpperCase() + _n.slice(1))),
            (En = gn.fn[yn]),
            (bn = { bmdFormGroup: { create: !1, required: !1 } }),
            (Cn = (function (t) {
                function e(e, n, i) {
                    return (
                        void 0 === i &&
                            (i = {
                                inputType: "checkbox",
                                outerClass: "checkbox-inline",
                            }),
                        t.call(this, e, gn.extend(!0, {}, bn, n), i) || this
                    );
                }
                return (
                    o(e, t),
                    (e.prototype.dispose = function () {
                        t.prototype.dispose.call(this, vn);
                    }),
                    (e._jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = gn(this),
                                i = n.data(vn);
                            i || ((i = new e(n, t)), n.data(vn, i));
                        });
                    }),
                    e
                );
            })(gr)),
            (gn.fn[yn] = Cn._jQueryInterface),
            (gn.fn[yn].Constructor = Cn),
            (gn.fn[yn].noConflict = function () {
                return (gn.fn[yn] = En), Cn._jQueryInterface;
            }),
            (In = jQuery),
            (An = "bmd." + (Tn = "collapseInline")),
            (Sn = "bmd" + (Tn.charAt(0).toUpperCase() + Tn.slice(1))),
            (wn = In.fn[Sn]),
            (Dn = { ANY_INPUT: "input, select, textarea" }),
            (Nn = {
                IN: "in",
                COLLAPSE: "collapse",
                COLLAPSING: "collapsing",
                COLLAPSED: "collapsed",
                WIDTH: "width",
            }),
            (On = {}),
            (kn = (function (t) {
                function e(e, n) {
                    var i;
                    (i =
                        t.call(this, e, In.extend(!0, {}, On, n)) ||
                        this).$bmdFormGroup = i.findMdbFormGroup(!0);
                    var r = e.data("target");
                    (i.$collapse = In(r)),
                        dr.assert(
                            e,
                            0 === i.$collapse.length,
                            "Cannot find collapse target for " + dr.describe(e)
                        ),
                        dr.assert(
                            i.$collapse,
                            !i.$collapse.hasClass(Nn.COLLAPSE),
                            dr.describe(i.$collapse) +
                                " is expected to have the '" +
                                Nn.COLLAPSE +
                                "' class.  It is being targeted by " +
                                dr.describe(e)
                        );
                    var o = i.$bmdFormGroup.find(Dn.ANY_INPUT);
                    return (
                        o.length > 0 && (i.$input = o.first()),
                        i.$collapse.hasClass(Nn.WIDTH) ||
                            i.$collapse.addClass(Nn.WIDTH),
                        i.$input &&
                            (i.$collapse.on("shown.bs.collapse", function () {
                                i.$input.focus();
                            }),
                            i.$input.blur(function () {
                                i.$collapse.collapse("hide");
                            })),
                        i
                    );
                }
                return (
                    o(e, t),
                    (e.prototype.dispose = function () {
                        t.prototype.dispose.call(this, An),
                            (this.$bmdFormGroup = null),
                            (this.$collapse = null),
                            (this.$input = null);
                    }),
                    (e._jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = In(this),
                                i = n.data(An);
                            i || ((i = new e(n, t)), n.data(An, i));
                        });
                    }),
                    e
                );
            })(fr)),
            (In.fn[Sn] = kn._jQueryInterface),
            (In.fn[Sn].Constructor = kn),
            (In.fn[Sn].noConflict = function () {
                return (In.fn[Sn] = wn), kn._jQueryInterface;
            }),
            ($n = jQuery),
            (Rn = "bmd." + (jn = "file")),
            (Ln = "bmd" + (jn.charAt(0).toUpperCase() + jn.slice(1))),
            (Pn = $n.fn[Ln]),
            (xn = {}),
            (Fn = { FILE: jn, IS_FILE: "is-file" }),
            (Mn = "input.form-control[readonly]"),
            (Qn = (function (t) {
                function e(e, n) {
                    var i;
                    return (
                        (i =
                            t.call(this, e, $n.extend(!0, xn, n)) ||
                            this).$bmdFormGroup.addClass(Fn.IS_FILE),
                        i
                    );
                }
                o(e, t);
                var n = e.prototype;
                return (
                    (n.dispose = function () {
                        t.prototype.dispose.call(this, Rn);
                    }),
                    (e.matches = function (t) {
                        return "file" === t.attr("type");
                    }),
                    (e.rejectMatch = function (t, e) {
                        dr.assert(
                            this.$element,
                            this.matches(e),
                            t +
                                " component element " +
                                dr.describe(e) +
                                " is invalid for type='file'."
                        );
                    }),
                    (n.outerElement = function () {
                        return this.$element.parent().closest("." + Fn.FILE);
                    }),
                    (n.rejectWithoutRequiredStructure = function () {
                        dr.assert(
                            this.$element,
                            "label" === !this.outerElement().prop("tagName"),
                            this.constructor.name +
                                "'s " +
                                dr.describe(this.$element) +
                                " parent element " +
                                dr.describe(this.outerElement()) +
                                " should be <label>."
                        ),
                            dr.assert(
                                this.$element,
                                !this.outerElement().hasClass(Fn.FILE),
                                this.constructor.name +
                                    "'s " +
                                    dr.describe(this.$element) +
                                    " parent element " +
                                    dr.describe(this.outerElement()) +
                                    " should have class ." +
                                    Fn.FILE +
                                    "."
                            );
                    }),
                    (n.addFocusListener = function () {
                        var t = this;
                        this.$bmdFormGroup
                            .on("focus", function () {
                                t.addFormGroupFocus();
                            })
                            .on("blur", function () {
                                t.removeFormGroupFocus();
                            });
                    }),
                    (n.addChangeListener = function () {
                        var t = this;
                        this.$element.on("change", function () {
                            var e = "";
                            $n.each(t.$element.files, function (t, n) {
                                e += n.name + "  , ";
                            }),
                                (e = e.substring(0, e.length - 2))
                                    ? t.addIsFilled()
                                    : t.removeIsFilled(),
                                t.$bmdFormGroup.find(Mn).val(e);
                        });
                    }),
                    (e._jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = $n(this),
                                i = n.data(Rn);
                            i || ((i = new e(n, t)), n.data(Rn, i));
                        });
                    }),
                    e
                );
            })(pr)),
            ($n.fn[Ln] = Qn._jQueryInterface),
            ($n.fn[Ln].Constructor = Qn),
            ($n.fn[Ln].noConflict = function () {
                return ($n.fn[Ln] = Pn), Qn._jQueryInterface;
            }),
            (Hn = jQuery),
            (Gn = "bmd." + (Un = "radio")),
            (Wn = "bmd" + (Un.charAt(0).toUpperCase() + Un.slice(1))),
            (Bn = Hn.fn[Wn]),
            (Kn = { template: "<span class='bmd-radio'></span>" }),
            (Vn = (function (t) {
                function e(e, n, i) {
                    return (
                        void 0 === i && (i = { inputType: Un, outerClass: Un }),
                        t.call(this, e, Hn.extend(!0, Kn, n), i) || this
                    );
                }
                return (
                    o(e, t),
                    (e.prototype.dispose = function (e) {
                        void 0 === e && (e = Gn),
                            t.prototype.dispose.call(this, e);
                    }),
                    (e.matches = function (t) {
                        return "radio" === t.attr("type");
                    }),
                    (e.rejectMatch = function (t, e) {
                        dr.assert(
                            this.$element,
                            this.matches(e),
                            t +
                                " component element " +
                                dr.describe(e) +
                                " is invalid for type='radio'."
                        );
                    }),
                    (e._jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = Hn(this),
                                i = n.data(Gn);
                            i || ((i = new e(n, t)), n.data(Gn, i));
                        });
                    }),
                    e
                );
            })(mr)),
            (Hn.fn[Wn] = Vn._jQueryInterface),
            (Hn.fn[Wn].Constructor = Vn),
            (Hn.fn[Wn].noConflict = function () {
                return (Hn.fn[Wn] = Bn), Vn._jQueryInterface;
            }),
            Vn),
        vr =
            ((Yn = jQuery),
            (zn = "bmd." + (qn = "radioInline")),
            (Xn = "bmd" + (qn.charAt(0).toUpperCase() + qn.slice(1))),
            (Zn = Yn.fn[Xn]),
            (Jn = { bmdFormGroup: { create: !1, required: !1 } }),
            (ti = (function (t) {
                function e(e, n, i) {
                    return (
                        void 0 === i &&
                            (i = {
                                inputType: "radio",
                                outerClass: "radio-inline",
                            }),
                        t.call(this, e, Yn.extend(!0, {}, Jn, n), i) || this
                    );
                }
                return (
                    o(e, t),
                    (e.prototype.dispose = function () {
                        t.prototype.dispose.call(this, zn);
                    }),
                    (e._jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = Yn(this),
                                i = n.data(zn);
                            i || ((i = new e(n, t)), n.data(zn, i));
                        });
                    }),
                    e
                );
            })(_r)),
            (Yn.fn[Xn] = ti._jQueryInterface),
            (Yn.fn[Xn].Constructor = ti),
            (Yn.fn[Xn].noConflict = function () {
                return (Yn.fn[Xn] = Zn), ti._jQueryInterface;
            }),
            (ei = jQuery),
            (ni = { requiredClasses: ["form-control"] }),
            (function (t) {
                function e(e, n) {
                    var i;
                    return (
                        (i =
                            t.call(this, e, ei.extend(!0, ni, n)) ||
                            this).isEmpty() && i.removeIsFilled(),
                        i
                    );
                }
                return o(e, t), e;
            })(pr)),
        yr =
            ((ii = jQuery),
            (oi = "bmd." + (ri = "select")),
            (si = "bmd" + (ri.charAt(0).toUpperCase() + ri.slice(1))),
            (ai = ii.fn[si]),
            (li = { requiredClasses: ["form-control||custom-select"] }),
            (ci = (function (t) {
                function e(e, n) {
                    var i;
                    return (
                        (i =
                            t.call(this, e, ii.extend(!0, li, n)) ||
                            this).addIsFilled(),
                        i
                    );
                }
                return (
                    o(e, t),
                    (e.prototype.dispose = function () {
                        t.prototype.dispose.call(this, oi);
                    }),
                    (e.matches = function (t) {
                        return "select" === t.prop("tagName");
                    }),
                    (e.rejectMatch = function (t, e) {
                        dr.assert(
                            this.$element,
                            this.matches(e),
                            t +
                                " component element " +
                                dr.describe(e) +
                                " is invalid for <select>."
                        );
                    }),
                    (e._jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = ii(this),
                                i = n.data(oi);
                            i || ((i = new e(n, t)), n.data(oi, i));
                        });
                    }),
                    e
                );
            })(vr)),
            (ii.fn[si] = ci._jQueryInterface),
            (ii.fn[si].Constructor = ci),
            (ii.fn[si].noConflict = function () {
                return (ii.fn[si] = ai), ci._jQueryInterface;
            }),
            (hi = jQuery),
            (di = "bmd." + (ui = "switch")),
            (fi = "bmd" + (ui.charAt(0).toUpperCase() + ui.slice(1))),
            (pi = hi.fn[fi]),
            (mi = { template: "<span class='bmd-switch-track'></span>" }),
            (gi = (function (t) {
                function e(e, n, i) {
                    return (
                        void 0 === i &&
                            (i = {
                                inputType: "checkbox",
                                outerClass: "switch",
                            }),
                        t.call(this, e, hi.extend(!0, {}, mi, n), i) || this
                    );
                }
                return (
                    o(e, t),
                    (e.prototype.dispose = function () {
                        t.prototype.dispose.call(this, di);
                    }),
                    (e._jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = hi(this),
                                i = n.data(di);
                            i || ((i = new e(n, t)), n.data(di, i));
                        });
                    }),
                    e
                );
            })(gr)),
            (hi.fn[fi] = gi._jQueryInterface),
            (hi.fn[fi].Constructor = gi),
            (hi.fn[fi].noConflict = function () {
                return (hi.fn[fi] = pi), gi._jQueryInterface;
            }),
            (_i = jQuery),
            (yi = "bmd." + (vi = "text")),
            (Ei = "bmd" + (vi.charAt(0).toUpperCase() + vi.slice(1))),
            (bi = _i.fn[Ei]),
            (Ci = {}),
            (Ii = (function (t) {
                function e(e, n) {
                    return t.call(this, e, _i.extend(!0, Ci, n)) || this;
                }
                return (
                    o(e, t),
                    (e.prototype.dispose = function (e) {
                        void 0 === e && (e = yi),
                            t.prototype.dispose.call(this, e);
                    }),
                    (e.matches = function (t) {
                        return "text" === t.attr("type");
                    }),
                    (e.rejectMatch = function (t, e) {
                        dr.assert(
                            this.$element,
                            this.matches(e),
                            t +
                                " component element " +
                                dr.describe(e) +
                                " is invalid for type='text'."
                        );
                    }),
                    (e._jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = _i(this),
                                i = n.data(yi);
                            i || ((i = new e(n, t)), n.data(yi, i));
                        });
                    }),
                    e
                );
            })(vr)),
            (_i.fn[Ei] = Ii._jQueryInterface),
            (_i.fn[Ei].Constructor = Ii),
            (_i.fn[Ei].noConflict = function () {
                return (_i.fn[Ei] = bi), Ii._jQueryInterface;
            }),
            (Ti = jQuery),
            (Si = "bmd." + (Ai = "textarea")),
            (wi = "bmd" + (Ai.charAt(0).toUpperCase() + Ai.slice(1))),
            (Di = Ti.fn[wi]),
            (Ni = {}),
            (Oi = (function (t) {
                function e(e, n) {
                    return t.call(this, e, Ti.extend(!0, Ni, n)) || this;
                }
                return (
                    o(e, t),
                    (e.prototype.dispose = function () {
                        t.prototype.dispose.call(this, Si);
                    }),
                    (e.matches = function (t) {
                        return "textarea" === t.prop("tagName");
                    }),
                    (e.rejectMatch = function (t, e) {
                        dr.assert(
                            this.$element,
                            this.matches(e),
                            t +
                                " component element " +
                                dr.describe(e) +
                                " is invalid for <textarea>."
                        );
                    }),
                    (e._jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = Ti(this),
                                i = n.data(Si);
                            i || ((i = new e(n, t)), n.data(Si, i));
                        });
                    }),
                    e
                );
            })(vr)),
            (Ti.fn[wi] = Oi._jQueryInterface),
            (Ti.fn[wi].Constructor = Oi),
            (Ti.fn[wi].noConflict = function () {
                return (Ti.fn[wi] = Di), Oi._jQueryInterface;
            }),
            (function (t) {
                if ("undefined" == typeof Popper)
                    throw new Error(
                        "Bootstrap dropdown require Popper.js (https://popper.js.org)"
                    );
                var e = "dropdown",
                    n = "bs.dropdown",
                    r = "." + n,
                    o = ".data-api",
                    s = t.fn[e],
                    a = new RegExp("38|40|27"),
                    l = {
                        HIDE: "hide" + r,
                        HIDDEN: "hidden" + r,
                        SHOW: "show" + r,
                        SHOWN: "shown" + r,
                        CLICK: "click" + r,
                        CLICK_DATA_API: "click" + r + o,
                        KEYDOWN_DATA_API: "keydown" + r + o,
                        KEYUP_DATA_API: "keyup" + r + o,
                        TRANSITION_END:
                            "transitionend webkitTransitionEnd oTransitionEnd animationend webkitAnimationEnd oAnimationEnd",
                    },
                    c = "disabled",
                    h = "show",
                    u = "showing",
                    d = "hiding",
                    f = "dropup",
                    p = "dropdown-menu-right",
                    m = "dropdown-menu-left",
                    g = '[data-toggle="dropdown"]',
                    _ = ".dropdown form",
                    v = ".dropdown-menu",
                    y = ".navbar-nav",
                    E = ".dropdown-menu .dropdown-item:not(.disabled)",
                    b = {
                        TOP: "top-start",
                        TOPEND: "top-end",
                        BOTTOM: "bottom-start",
                        BOTTOMEND: "bottom-end",
                    },
                    C = { placement: b.BOTTOM, offset: 0, flip: !0 },
                    I = {
                        placement: "string",
                        offset: "(number|string)",
                        flip: "boolean",
                    },
                    T = (function () {
                        function o(t, e) {
                            (this._element = t),
                                (this._popper = null),
                                (this._config = this._getConfig(e)),
                                (this._menu = this._getMenuElement()),
                                (this._inNavbar = this._detectNavbar()),
                                this._addEventListeners();
                        }
                        var s = o.prototype;
                        return (
                            (s.toggle = function () {
                                var e = this;
                                if (
                                    !this._element.disabled &&
                                    !t(this._element).hasClass(c)
                                ) {
                                    var n = o._getParentFromElement(
                                            this._element
                                        ),
                                        i = t(this._menu).hasClass(h);
                                    if ((o._clearMenus(), !i)) {
                                        var r = {
                                                relatedTarget: this._element,
                                            },
                                            s = t.Event(l.SHOW, r);
                                        if (
                                            (t(n).trigger(s),
                                            !s.isDefaultPrevented())
                                        ) {
                                            var a = this._element;
                                            t(n).hasClass(f) &&
                                                (t(this._menu).hasClass(m) ||
                                                    t(this._menu).hasClass(
                                                        p
                                                    )) &&
                                                (a = n),
                                                (this._popper = new Popper(
                                                    a,
                                                    this._menu,
                                                    this._getPopperConfig()
                                                )),
                                                "ontouchstart" in
                                                    document.documentElement &&
                                                    !t(n).closest(y).length &&
                                                    t("body")
                                                        .children()
                                                        .on(
                                                            "mouseover",
                                                            null,
                                                            t.noop
                                                        ),
                                                this._element.focus(),
                                                this._element.setAttribute(
                                                    "aria-expanded",
                                                    !0
                                                ),
                                                t(this._menu).one(
                                                    l.TRANSITION_END,
                                                    function () {
                                                        t(n).trigger(
                                                            t.Event(l.SHOWN, r)
                                                        ),
                                                            t(
                                                                e._menu
                                                            ).removeClass(u);
                                                    }
                                                ),
                                                t(this._menu).addClass(
                                                    h + " " + u
                                                ),
                                                t(n).addClass(h);
                                        }
                                    }
                                }
                            }),
                            (s.dispose = function () {
                                t.removeData(this._element, n),
                                    t(this._element).off(r),
                                    (this._element = null),
                                    (this._menu = null),
                                    null !== this._popper &&
                                        this._popper.destroy(),
                                    (this._popper = null);
                            }),
                            (s.update = function () {
                                (this._inNavbar = this._detectNavbar()),
                                    null !== this._popper &&
                                        this._popper.scheduleUpdate();
                            }),
                            (s._addEventListeners = function () {
                                var e = this;
                                t(this._element).on(l.CLICK, function (t) {
                                    t.preventDefault(),
                                        t.stopPropagation(),
                                        e.toggle();
                                });
                            }),
                            (s._getConfig = function (n) {
                                var i = t(this._element).data();
                                return (
                                    void 0 !== i.placement &&
                                        (i.placement =
                                            b[i.placement.toUpperCase()]),
                                    (n = t.extend(
                                        {},
                                        this.constructor.Default,
                                        t(this._element).data(),
                                        n
                                    )),
                                    hr.typeCheckConfig(
                                        e,
                                        n,
                                        this.constructor.DefaultType
                                    ),
                                    n
                                );
                            }),
                            (s._getMenuElement = function () {
                                if (!this._menu) {
                                    var e = o._getParentFromElement(
                                        this._element
                                    );
                                    this._menu = t(e).find(v)[0];
                                }
                                return this._menu;
                            }),
                            (s._getPlacement = function () {
                                var e = t(this._element).parent(),
                                    n = this._config.placement;
                                return (
                                    e.hasClass(f) ||
                                    this._config.placement === b.TOP
                                        ? ((n = b.TOP),
                                          t(this._menu).hasClass(p) &&
                                              (n = b.TOPEND))
                                        : t(this._menu).hasClass(p) &&
                                          (n = b.BOTTOMEND),
                                    n
                                );
                            }),
                            (s._detectNavbar = function () {
                                return (
                                    t(this._element).closest(".navbar").length >
                                    0
                                );
                            }),
                            (s._getPopperConfig = function () {
                                var t = {
                                    placement: this._getPlacement(),
                                    modifiers: {
                                        offset: { offset: this._config.offset },
                                        flip: { enabled: this._config.flip },
                                    },
                                };
                                return (
                                    this._inNavbar &&
                                        (t.modifiers.applyStyle = {
                                            enabled: !this._inNavbar,
                                        }),
                                    t
                                );
                            }),
                            (o._jQueryInterface = function (e) {
                                return this.each(function () {
                                    var i = t(this).data(n);
                                    if (
                                        (i ||
                                            ((i = new o(
                                                this,
                                                "object" == typeof e ? e : null
                                            )),
                                            t(this).data(n, i)),
                                        "string" == typeof e)
                                    ) {
                                        if (void 0 === i[e])
                                            throw new Error(
                                                'No method named "' + e + '"'
                                            );
                                        i[e]();
                                    }
                                });
                            }),
                            (o._clearMenus = function (e) {
                                if (
                                    !e ||
                                    (3 !== e.which &&
                                        ("keyup" !== e.type || 9 === e.which))
                                )
                                    for (
                                        var i = t.makeArray(t(g)),
                                            r = function (r) {
                                                var s = o._getParentFromElement(
                                                        i[r]
                                                    ),
                                                    a = t(i[r]).data(n),
                                                    c = { relatedTarget: i[r] };
                                                if (!a) return "continue";
                                                var u = a._menu;
                                                if (!t(s).hasClass(h))
                                                    return "continue";
                                                if (
                                                    e &&
                                                    (("click" === e.type &&
                                                        /input|textarea/i.test(
                                                            e.target.tagName
                                                        )) ||
                                                        ("keyup" === e.type &&
                                                            9 === e.which)) &&
                                                    t.contains(s, e.target)
                                                )
                                                    return "continue";
                                                var f = t.Event(l.HIDE, c);
                                                if (
                                                    (t(s).trigger(f),
                                                    f.isDefaultPrevented())
                                                )
                                                    return "continue";
                                                ("ontouchstart" in
                                                    document.documentElement) &&
                                                    t("body")
                                                        .children()
                                                        .off(
                                                            "mouseover",
                                                            null,
                                                            t.noop
                                                        ),
                                                    i[r].setAttribute(
                                                        "aria-expanded",
                                                        "false"
                                                    ),
                                                    t(u)
                                                        .addClass(d)
                                                        .removeClass(h),
                                                    t(s).removeClass(h),
                                                    t(u).one(
                                                        l.TRANSITION_END,
                                                        function () {
                                                            t(s).trigger(
                                                                t.Event(
                                                                    l.HIDDEN,
                                                                    c
                                                                )
                                                            ),
                                                                t(
                                                                    u
                                                                ).removeClass(
                                                                    d
                                                                );
                                                        }
                                                    );
                                            },
                                            s = 0;
                                        s < i.length;
                                        s++
                                    )
                                        r(s);
                            }),
                            (o._getParentFromElement = function (e) {
                                var n,
                                    i = hr.getSelectorFromElement(e);
                                return i && (n = t(i)[0]), n || e.parentNode;
                            }),
                            (o._dataApiKeydownHandler = function (e) {
                                if (
                                    !(
                                        !a.test(e.which) ||
                                        (/button/i.test(e.target.tagName) &&
                                            32 === e.which) ||
                                        /input|textarea/i.test(
                                            e.target.tagName
                                        ) ||
                                        (e.preventDefault(),
                                        e.stopPropagation(),
                                        this.disabled || t(this).hasClass(c))
                                    )
                                ) {
                                    var n = o._getParentFromElement(this),
                                        i = t(n).hasClass(h);
                                    if (
                                        (i ||
                                            (27 === e.which &&
                                                32 === e.which)) &&
                                        (!i ||
                                            (27 !== e.which && 32 !== e.which))
                                    ) {
                                        var r = t(n).find(E).get();
                                        if (r.length) {
                                            var s = r.indexOf(e.target);
                                            38 === e.which && s > 0 && s--,
                                                40 === e.which &&
                                                    s < r.length - 1 &&
                                                    s++,
                                                s < 0 && (s = 0),
                                                r[s].focus();
                                        }
                                    } else {
                                        if (27 === e.which) {
                                            var l = t(n).find(g)[0];
                                            t(l).trigger("focus");
                                        }
                                        t(this).trigger("click");
                                    }
                                }
                            }),
                            i(o, null, [
                                {
                                    key: "VERSION",
                                    get: function () {
                                        return "4.0.0-beta";
                                    },
                                },
                                {
                                    key: "Default",
                                    get: function () {
                                        return C;
                                    },
                                },
                                {
                                    key: "DefaultType",
                                    get: function () {
                                        return I;
                                    },
                                },
                            ]),
                            o
                        );
                    })();
                t(document)
                    .on(l.KEYDOWN_DATA_API, g, T._dataApiKeydownHandler)
                    .on(l.KEYDOWN_DATA_API, v, T._dataApiKeydownHandler)
                    .on(
                        l.CLICK_DATA_API + " " + l.KEYUP_DATA_API,
                        T._clearMenus
                    )
                    .on(l.CLICK_DATA_API, g, function (e) {
                        e.preventDefault(),
                            e.stopPropagation(),
                            T._jQueryInterface.call(t(this), "toggle");
                    })
                    .on(l.CLICK_DATA_API, _, function (t) {
                        t.stopPropagation();
                    }),
                    (t.fn[e] = T._jQueryInterface),
                    (t.fn[e].Constructor = T),
                    (t.fn[e].noConflict = function () {
                        return (t.fn[e] = s), T._jQueryInterface;
                    });
            })(jQuery),
            (ki = jQuery),
            (Ri = {
                CANVAS: "." + ($i = "bmd-layout-canvas"),
                CONTAINER: "." + "bmd-layout-container",
                BACKDROP: "." + (ji = "bmd-layout-backdrop"),
            }),
            (Li = {
                canvas: {
                    create: !0,
                    required: !0,
                    template: '<div class="' + $i + '"></div>',
                },
                backdrop: {
                    create: !0,
                    required: !0,
                    template: '<div class="' + ji + '"></div>',
                },
            }),
            (function (t) {
                function e(e, n, i) {
                    var r;
                    return (
                        void 0 === i && (i = {}),
                        ((r =
                            t.call(this, e, ki.extend(!0, {}, Li, n), i) ||
                            this).$container = r.findContainer(!0)),
                        (r.$backdrop = r.resolveBackdrop()),
                        r.resolveCanvas(),
                        r
                    );
                }
                o(e, t);
                var n = e.prototype;
                return (
                    (n.dispose = function (e) {
                        t.prototype.dispose.call(this, e),
                            (this.$container = null),
                            (this.$backdrop = null);
                    }),
                    (n.resolveCanvas = function () {
                        var t = this.findCanvas(!1);
                        return (
                            (void 0 !== t && 0 !== t.length) ||
                                (this.config.canvas.create &&
                                    this.$container.wrap(
                                        this.config.canvas.template
                                    ),
                                (t = this.findCanvas(
                                    this.config.canvas.required
                                ))),
                            t
                        );
                    }),
                    (n.findCanvas = function (t, e) {
                        void 0 === t && (t = !0),
                            void 0 === e && (e = this.$container);
                        var n = e.closest(Ri.CANVAS);
                        return (
                            0 === n.length &&
                                t &&
                                ki.error(
                                    "Failed to find " +
                                        Ri.CANVAS +
                                        " for " +
                                        dr.describe(e)
                                ),
                            n
                        );
                    }),
                    (n.resolveBackdrop = function () {
                        var t = this.findBackdrop(!1);
                        return (
                            (void 0 !== t && 0 !== t.length) ||
                                (this.config.backdrop.create &&
                                    this.$container.append(
                                        this.config.backdrop.template
                                    ),
                                (t = this.findBackdrop(
                                    this.config.backdrop.required
                                ))),
                            t
                        );
                    }),
                    (n.findBackdrop = function (t, e) {
                        void 0 === t && (t = !0),
                            void 0 === e && (e = this.$container);
                        var n = e.find("> " + Ri.BACKDROP);
                        return (
                            0 === n.length &&
                                t &&
                                ki.error(
                                    "Failed to find " +
                                        Ri.BACKDROP +
                                        " for " +
                                        dr.describe(e)
                                ),
                            n
                        );
                    }),
                    (n.findContainer = function (t, e) {
                        void 0 === t && (t = !0),
                            void 0 === e && (e = this.$element);
                        var n = e.closest(Ri.CONTAINER);
                        return (
                            0 === n.length &&
                                t &&
                                ki.error(
                                    "Failed to find " +
                                        Ri.CONTAINER +
                                        " for " +
                                        dr.describe(e)
                                ),
                            n
                        );
                    }),
                    e
                );
            })(fr));
    (Pi = jQuery),
        (Fi = "bmd." + (xi = "drawer")),
        (Mi = "bmd" + (xi.charAt(0).toUpperCase() + xi.slice(1))),
        (Qi = Pi.fn[Mi]),
        (Hi = { ESCAPE: 27 }),
        (Ui = "in"),
        (Gi = "bmd-drawer-in"),
        (Wi = "bmd-drawer-out"),
        (Bi = { focusSelector: "a, button, input" }),
        (Ki = (function (t) {
            function e(e, n) {
                var i;
                return (
                    ((i =
                        t.call(this, e, Pi.extend(!0, {}, Bi, n)) ||
                        this).$toggles = Pi(
                        '[data-toggle="drawer"][href="#' +
                            i.$element[0].id +
                            '"], [data-toggle="drawer"][data-target="#' +
                            i.$element[0].id +
                            '"]'
                    )),
                    i._addAria(),
                    i.$backdrop
                        .keydown(function (t) {
                            t.which === Hi.ESCAPE && i.hide();
                        })
                        .click(function () {
                            i.hide();
                        }),
                    i.$element.keydown(function (t) {
                        t.which === Hi.ESCAPE && i.hide();
                    }),
                    i.$toggles.click(function () {
                        i.toggle();
                    }),
                    i
                );
            }
            o(e, t);
            var n = e.prototype;
            return (
                (n.dispose = function () {
                    t.prototype.dispose.call(this, Fi), (this.$toggles = null);
                }),
                (n.toggle = function () {
                    this._isOpen() ? this.hide() : this.show();
                }),
                (n.show = function () {
                    if (!this._isForcedClosed() && !this._isOpen()) {
                        this.$toggles.attr("aria-expanded", !0),
                            this.$element.attr("aria-expanded", !0),
                            this.$element.attr("aria-hidden", !1);
                        var t = this.$element.find(this.config.focusSelector);
                        t.length > 0 && t.first().focus(),
                            this.$container.addClass(Gi),
                            this.$backdrop.addClass(Ui);
                    }
                }),
                (n.hide = function () {
                    this._isOpen() &&
                        (this.$toggles.attr("aria-expanded", !1),
                        this.$element.attr("aria-expanded", !1),
                        this.$element.attr("aria-hidden", !0),
                        this.$container.removeClass(Gi),
                        this.$backdrop.removeClass(Ui));
                }),
                (n._isOpen = function () {
                    return this.$container.hasClass(Gi);
                }),
                (n._isForcedClosed = function () {
                    return this.$container.hasClass(Wi);
                }),
                (n._addAria = function () {
                    var t = this._isOpen();
                    this.$element.attr("aria-expanded", t),
                        this.$element.attr("aria-hidden", t),
                        this.$toggles.length &&
                            this.$toggles.attr("aria-expanded", t);
                }),
                (e._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = Pi(this),
                            i = n.data(Fi);
                        i || ((i = new e(n, t)), n.data(Fi, i));
                    });
                }),
                e
            );
        })(yr)),
        (Pi.fn[Mi] = Ki._jQueryInterface),
        (Pi.fn[Mi].Constructor = Ki),
        (Pi.fn[Mi].noConflict = function () {
            return (Pi.fn[Mi] = Qi), Ki._jQueryInterface;
        }),
        (Vi = jQuery),
        (qi = "bmd." + (Yi = "ripples")),
        (zi = "bmd" + (Yi.charAt(0).toUpperCase() + Yi.slice(1))),
        (Xi = Vi.fn[zi]),
        (tr = {
            CONTAINER: "." + (Zi = "ripple-container"),
            DECORATOR: "." + (Ji = "ripple-decorator"),
        }),
        (er = {
            container: { template: "<div class='" + Zi + "'></div>" },
            decorator: { template: "<div class='" + Ji + "'></div>" },
            trigger: {
                start: "mousedown touchstart",
                end: "mouseup mouseleave touchend",
            },
            touchUserAgentRegex: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i,
            duration: 500,
        }),
        (nr = (function () {
            function t(t, e) {
                var n = this;
                (this.$element = t),
                    (this.config = Vi.extend(!0, {}, er, e)),
                    this.$element.on(this.config.trigger.start, function (t) {
                        n._onStartRipple(t);
                    });
            }
            var e = t.prototype;
            return (
                (e.dispose = function () {
                    this.$element.data(qi, null),
                        (this.$element = null),
                        (this.$container = null),
                        (this.$decorator = null),
                        (this.config = null);
                }),
                (e._onStartRipple = function (t) {
                    var e = this;
                    if (!this._isTouch() || "mousedown" !== t.type) {
                        this._findOrCreateContainer();
                        var n = this._getRelY(t),
                            i = this._getRelX(t);
                        (n || i) &&
                            (this.$decorator.css({
                                left: i,
                                top: n,
                                "background-color": this._getRipplesColor(),
                            }),
                            this._forceStyleApplication(),
                            this.rippleOn(),
                            setTimeout(function () {
                                e.rippleEnd();
                            }, this.config.duration),
                            this.$element.on(
                                this.config.trigger.end,
                                function () {
                                    e.$decorator &&
                                        (e.$decorator.data("mousedown", "off"),
                                        "off" ===
                                            e.$decorator.data("animating") &&
                                            e.rippleOut());
                                }
                            ));
                    }
                }),
                (e._findOrCreateContainer = function () {
                    (!this.$container || !this.$container.length > 0) &&
                        (this.$element.append(this.config.container.template),
                        (this.$container = this.$element.find(tr.CONTAINER))),
                        this.$container.append(this.config.decorator.template),
                        (this.$decorator = this.$container.find(tr.DECORATOR));
                }),
                (e._forceStyleApplication = function () {
                    return window.getComputedStyle(this.$decorator[0]).opacity;
                }),
                (e._getRelX = function (t) {
                    var e = this.$container.offset();
                    return this._isTouch()
                        ? 1 === (t = t.originalEvent).touches.length &&
                              t.touches[0].pageX - e.left
                        : t.pageX - e.left;
                }),
                (e._getRelY = function (t) {
                    var e = this.$container.offset();
                    return this._isTouch()
                        ? 1 === (t = t.originalEvent).touches.length &&
                              t.touches[0].pageY - e.top
                        : t.pageY - e.top;
                }),
                (e._getRipplesColor = function () {
                    return this.$element.data("ripple-color")
                        ? this.$element.data("ripple-color")
                        : window.getComputedStyle(this.$element[0]).color;
                }),
                (e._isTouch = function () {
                    return this.config.touchUserAgentRegex.test(
                        navigator.userAgent
                    );
                }),
                (e.rippleEnd = function () {
                    this.$decorator &&
                        (this.$decorator.data("animating", "off"),
                        "off" === this.$decorator.data("mousedown") &&
                            this.rippleOut(this.$decorator));
                }),
                (e.rippleOut = function () {
                    var t = this;
                    this.$decorator.off(),
                        dr.transitionEndSupported()
                            ? this.$decorator.addClass("ripple-out")
                            : this.$decorator.animate(
                                  { opacity: 0 },
                                  100,
                                  function () {
                                      t.$decorator.trigger("transitionend");
                                  }
                              ),
                        this.$decorator.on(
                            dr.transitionEndSelector(),
                            function () {
                                t.$decorator &&
                                    (t.$decorator.remove(),
                                    (t.$decorator = null));
                            }
                        );
                }),
                (e.rippleOn = function () {
                    var t = this,
                        e = this._getNewSize();
                    dr.transitionEndSupported()
                        ? this.$decorator
                              .css({
                                  "-ms-transform": "scale(" + e + ")",
                                  "-moz-transform": "scale(" + e + ")",
                                  "-webkit-transform": "scale(" + e + ")",
                                  transform: "scale(" + e + ")",
                              })
                              .addClass("ripple-on")
                              .data("animating", "on")
                              .data("mousedown", "on")
                        : this.$decorator.animate(
                              {
                                  width:
                                      2 *
                                      Math.max(
                                          this.$element.outerWidth(),
                                          this.$element.outerHeight()
                                      ),
                                  height:
                                      2 *
                                      Math.max(
                                          this.$element.outerWidth(),
                                          this.$element.outerHeight()
                                      ),
                                  "margin-left":
                                      -1 *
                                      Math.max(
                                          this.$element.outerWidth(),
                                          this.$element.outerHeight()
                                      ),
                                  "margin-top":
                                      -1 *
                                      Math.max(
                                          this.$element.outerWidth(),
                                          this.$element.outerHeight()
                                      ),
                                  opacity: 0.2,
                              },
                              this.config.duration,
                              function () {
                                  t.$decorator.trigger("transitionend");
                              }
                          );
                }),
                (e._getNewSize = function () {
                    return (
                        (Math.max(
                            this.$element.outerWidth(),
                            this.$element.outerHeight()
                        ) /
                            this.$decorator.outerWidth()) *
                        2.5
                    );
                }),
                (t._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = Vi(this),
                            i = n.data(qi);
                        i || ((i = new t(n, e)), n.data(qi, i));
                    });
                }),
                t
            );
        })()),
        (Vi.fn[zi] = nr._jQueryInterface),
        (Vi.fn[zi].Constructor = nr),
        (Vi.fn[zi].noConflict = function () {
            return (Vi.fn[zi] = Xi), nr._jQueryInterface;
        }),
        (ir = jQuery),
        (or = "bmd." + (rr = "autofill")),
        (sr = "bmd" + (rr.charAt(0).toUpperCase() + rr.slice(1))),
        (ar = ir.fn[sr]),
        (lr = {}),
        (cr = (function (t) {
            function e(e, n) {
                var i;
                return (
                    (i =
                        t.call(this, e, ir.extend(!0, {}, lr, n)) ||
                        this)._watchLoading(),
                    i._attachEventHandlers(),
                    i
                );
            }
            o(e, t);
            var n = e.prototype;
            return (
                (n.dispose = function () {
                    t.prototype.dispose.call(this, or);
                }),
                (n._watchLoading = function () {
                    var t = this;
                    setTimeout(function () {
                        clearInterval(t._onLoading);
                    }, 1e4);
                }),
                (n._onLoading = function () {
                    setInterval(function () {
                        ir("input[type!=checkbox]").each(function (t, e) {
                            var n = ir(e);
                            n.val() &&
                                n.val() !== n.attr("value") &&
                                n.trigger("change");
                        });
                    }, 100);
                }),
                (n._attachEventHandlers = function () {
                    var t = null;
                    ir(document)
                        .on("focus", "input", function (e) {
                            var n = ir(e.currentTarget)
                                .closest("form")
                                .find("input")
                                .not("[type=file]")
                                .not('[class*="picker"]');
                            t = setInterval(function () {
                                n.each(function (t, e) {
                                    var n = ir(e);
                                    n.val() !== n.attr("value") &&
                                        n.trigger("change");
                                });
                            }, 100);
                        })
                        .on("blur", ".form-group input", function () {
                            clearInterval(t);
                        });
                }),
                (e._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = ir(this),
                            i = n.data(or);
                        i || ((i = new e(n, t)), n.data(or, i));
                    });
                }),
                e
            );
        })(fr)),
        (ir.fn[sr] = cr._jQueryInterface),
        (ir.fn[sr].Constructor = cr),
        (ir.fn[sr].noConflict = function () {
            return (ir.fn[sr] = ar), cr._jQueryInterface;
        });
    Popper.Defaults.modifiers.computeStyle.gpuAcceleration = !1;
    var Er, br, Cr, Ir, Tr, Ar, Sr;
    (Er = jQuery),
        (Cr = "bmd." + (br = "bootstrapMaterialDesign")),
        (Ir = br),
        (Tr = Er.fn[Ir]),
        (Ar = {
            global: { validate: !1, label: { className: "bmd-label-static" } },
            autofill: { selector: "body" },
            checkbox: { selector: ".checkbox > label > input[type=checkbox]" },
            checkboxInline: {
                selector: "label.checkbox-inline > input[type=checkbox]",
            },
            collapseInline: {
                selector: '.bmd-collapse-inline [data-toggle="collapse"]',
            },
            drawer: { selector: ".bmd-layout-drawer" },
            file: { selector: "input[type=file]" },
            radio: { selector: ".radio > label > input[type=radio]" },
            radioInline: { selector: "label.radio-inline > input[type=radio]" },
            ripples: {
                selector: [
                    ".btn:not(.ripple-none)",
                    ".card-image:not(.ripple-none)",
                    ".navbar a:not(.ripple-none)",
                    ".dropdown-menu a:not(.ripple-none)",
                    ".nav-tabs a:not(.ripple-none)",
                    ".pagination li:not(.active):not(.disabled) a:not(.ripple-none)",
                    ".ripple",
                ],
            },
            select: { selector: ["select"] },
            switch: { selector: ".switch > label > input[type=checkbox]" },
            text: {
                selector: [
                    "input.form-control:not([type=hidden]):not([type=checkbox]):not([type=radio]):not([type=file]):not([type=button]):not([type=submit]):not([type=reset])",
                ],
            },
            textarea: { selector: ["textarea.form-control"] },
            arrive: !0,
            instantiation: [
                "ripples",
                "checkbox",
                "checkboxInline",
                "collapseInline",
                "drawer",
                "radio",
                "radioInline",
                "switch",
                "text",
                "textarea",
                "autofill",
            ],
        }),
        (Sr = (function () {
            function t(t, e) {
                var n = this;
                (this.$element = t), (this.config = Er.extend(!0, {}, Ar, e));
                var i = Er(document),
                    r = function (t) {
                        var e = n.config[t];
                        if (e) {
                            var r = n._resolveSelector(e);
                            e = Er.extend(!0, {}, n.config.global, e);
                            var o =
                                "bmd" +
                                ("" + (t.charAt(0).toUpperCase() + t.slice(1)));
                            try {
                                Er(r)[o](e),
                                    document.arrive &&
                                        n.config.arrive &&
                                        i.arrive(r, function () {
                                            Er(this)[o](e);
                                        });
                            } catch (t) {
                                var s =
                                    "Failed to instantiate component: $('" +
                                    r +
                                    "')[" +
                                    o +
                                    "](" +
                                    e +
                                    ")";
                                throw (
                                    (console.error(
                                        s,
                                        t,
                                        "\nSelected elements: ",
                                        Er(r)
                                    ),
                                    t)
                                );
                            }
                        }
                    },
                    o = this.config.instantiation,
                    s = Array.isArray(o),
                    a = 0;
                for (o = s ? o : o[Symbol.iterator](); ; ) {
                    var l;
                    if (s) {
                        if (a >= o.length) break;
                        l = o[a++];
                    } else {
                        if ((a = o.next()).done) break;
                        l = a.value;
                    }
                    r(l);
                }
            }
            var e = t.prototype;
            return (
                (e.dispose = function () {
                    this.$element.data(Cr, null),
                        (this.$element = null),
                        (this.config = null);
                }),
                (e._resolveSelector = function (t) {
                    var e = t.selector;
                    return Array.isArray(e) && (e = e.join(", ")), e;
                }),
                (t._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = Er(this),
                            i = n.data(Cr);
                        i || ((i = new t(n, e)), n.data(Cr, i));
                    });
                }),
                t
            );
        })()),
        (Er.fn[Ir] = Sr._jQueryInterface),
        (Er.fn[Ir].Constructor = Sr),
        (Er.fn[Ir].noConflict = function () {
            return (Er.fn[Ir] = Tr), Sr._jQueryInterface;
        });
});
