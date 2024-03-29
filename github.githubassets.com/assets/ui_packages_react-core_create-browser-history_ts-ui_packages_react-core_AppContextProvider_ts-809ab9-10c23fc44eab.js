"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    ["ui_packages_react-core_create-browser-history_ts-ui_packages_react-core_AppContextProvider_ts-809ab9"], {
        34232: (e, t, a) => {
            a.d(t, {
                n: () => o
            });
            var r = a(85893),
                n = a(67294),
                s = a(87487);

            function o({
                children: e,
                appName: t,
                category: a,
                metadata: o
            }) {
                let l = (0, n.useMemo)(() => ({
                    appName: t,
                    category: a,
                    metadata: o
                }), [t, a, o]);
                return (0, r.jsx)(s.f.Provider, {
                    value: l,
                    children: e
                })
            }
            try {
                o.displayName || (o.displayName = "AnalyticsProvider")
            } catch {}
        },
        87487: (e, t, a) => {
            a.d(t, {
                f: () => n
            });
            var r = a(67294);
            let n = (0, r.createContext)(null)
        },
        65722: (e, t, a) => {
            a.d(t, {
                Z: () => r
            });
            let r = () => void 0
        },
        45055: (e, t, a) => {
            a.d(t, {
                I: () => n
            });
            var r = a(67294);
            let n = (0, r.createContext)(null)
        },
        59112: (e, t, a) => {
            a.d(t, {
                l: () => n
            });
            var r = a(12599);

            function n(e = {}) {
                let t;
                let a = (0, r.lX)({ ...e,
                        v5Compat: !0
                    }),
                    n = [],
                    s = !1;

                function o(e) {
                    if (n.length > 0)
                        for (let t of n) t({
                            retry() {
                                e()
                            }
                        });
                    else e()
                }
                return a.listen(e => {
                    if (s) {
                        s = !1;
                        return
                    }
                    if (e.action === r.aU.Pop && n.length && null !== e.delta && n.length > 0) {
                        let t = e.delta;
                        for (let e of (s = !0, a.go(-1 * t), n)) e({
                            retry() {
                                a.go(t)
                            }
                        })
                    } else t ? .(e)
                }), {
                    get action() {
                        return a.action
                    },
                    get location() {
                        return a.location
                    },
                    createHref: e => a.createHref(e),
                    createURL: e => a.createURL(e),
                    encodeLocation: e => a.encodeLocation(e),
                    push(e, t) {
                        o(() => a.push(e, t))
                    },
                    replace(e, t) {
                        o(() => a.replace(e, t))
                    },
                    go(e) {
                        o(() => a.go(e))
                    },
                    listen(e) {
                        if (t) throw Error("A history only accepts one active listener");
                        return t = e, () => {
                            t = void 0
                        }
                    },
                    block: e => (n.push(e), () => {
                        n = n.filter(t => t !== e)
                    })
                }
            }
        },
        87634: (e, t, a) => {
            a.d(t, {
                sS: () => y,
                F1: () => v,
                V6: () => f
            });
            var r = a(85893),
                n = a(85529),
                s = a(70697),
                o = a(41905),
                l = a(67294);
            let i = {
                    info: "",
                    success: "Toast--success",
                    error: "Toast--error"
                },
                c = {
                    info: (0, r.jsx)(n.InfoIcon, {}),
                    success: (0, r.jsx)(n.CheckIcon, {}),
                    error: (0, r.jsx)(n.StopIcon, {})
                },
                d = ({
                    message: e,
                    timeToLive: t,
                    icon: a,
                    type: n = "info",
                    role: d = "log"
                }) => {
                    let [u, h] = l.useState(!0), {
                        safeSetTimeout: m
                    } = (0, s.Z)();
                    return (0, l.useEffect)(() => {
                        t && m(() => h(!1), t - 300)
                    }, [m, t]), (0, r.jsx)(o.h, {
                        children: (0, r.jsx)("div", {
                            className: "p-1 position-fixed bottom-0 left-0 mb-3 ml-3",
                            children: (0, r.jsxs)("div", {
                                className: `Toast ${i[n]} ${u?"Toast--animateIn":"Toast--animateOut"}`,
                                id: "ui-app-toast",
                                "data-testid": `ui-app-toast-${n}`,
                                role: d,
                                children: [(0, r.jsx)("span", {
                                    className: "Toast-icon",
                                    children: a || c[n]
                                }), (0, r.jsx)("span", {
                                    className: "Toast-content",
                                    children: e
                                })]
                            })
                        })
                    })
                };
            try {
                d.displayName || (d.displayName = "Toast")
            } catch {}
            var u = a(65722),
                h = a(77427);
            let m = (0, l.createContext)({
                    addToast: u.Z,
                    addPersistedToast: u.Z,
                    clearPersistedToast: u.Z
                }),
                p = (0, l.createContext)({
                    toasts: [],
                    persistedToast: null
                });

            function y({
                children: e
            }) {
                let [t, a] = (0, h.Z)([]), [n, o] = (0, l.useState)(null), {
                    safeSetTimeout: i
                } = (0, s.Z)(), c = (0, l.useCallback)(function(e) {
                    a([...t, e]), i(() => a(t.slice(1)), 5e3)
                }, [t, i, a]), d = (0, l.useCallback)(function(e) {
                    o(e)
                }, [o]), u = (0, l.useCallback)(function() {
                    o(null)
                }, [o]), y = (0, l.useMemo)(() => ({
                    addToast: c,
                    addPersistedToast: d,
                    clearPersistedToast: u
                }), [d, c, u]), f = (0, l.useMemo)(() => ({
                    toasts: t,
                    persistedToast: n
                }), [t, n]);
                return (0, r.jsx)(m.Provider, {
                    value: y,
                    children: (0, r.jsx)(p.Provider, {
                        value: f,
                        children: e
                    })
                })
            }

            function f() {
                return (0, l.useContext)(m)
            }
            try {
                m.displayName || (m.displayName = "ToastContext")
            } catch {}
            try {
                p.displayName || (p.displayName = "InternalToastsContext")
            } catch {}
            try {
                y.displayName || (y.displayName = "ToastContextProvider")
            } catch {}

            function v() {
                let {
                    toasts: e,
                    persistedToast: t
                } = (0, l.useContext)(p);
                return (0, r.jsxs)(r.Fragment, {
                    children: [e.map((e, t) => (0, r.jsx)(d, {
                        message: e.message,
                        icon: e.icon,
                        timeToLive: 5e3,
                        type: e.type,
                        role: e.role
                    }, t)), t && (0, r.jsx)(d, {
                        message: t.message,
                        icon: t.icon,
                        type: t.type,
                        role: t.role
                    })]
                })
            }
            try {
                v.displayName || (v.displayName = "Toasts")
            } catch {}
        },
        78249: (e, t, a) => {
            a.d(t, {
                g: () => s
            });
            var r = a(67294),
                n = a(86283);

            function s(e, t) {
                n.Qg && (0, r.useLayoutEffect)(e, t)
            }
        },
        37169: (e, t, a) => {
            a.d(t, {
                Z: () => s
            });
            var r = a(78249),
                n = a(67294);

            function s() {
                let e = (0, n.useRef)(!1),
                    t = (0, n.useCallback)(() => e.current, []);
                return (0, r.g)(() => (e.current = !0, () => {
                    e.current = !1
                }), []), t
            }
        },
        77427: (e, t, a) => {
            a.d(t, {
                Z: () => s
            });
            var r = a(37169),
                n = a(67294);
            let s = function(e) {
                let t = (0, r.Z)(),
                    [a, s] = (0, n.useState)(e),
                    o = (0, n.useCallback)(e => {
                        t() && s(e)
                    }, [t]);
                return [a, o]
            }
        },
        58989: (e, t, a) => {
            a.d(t, {
                i: () => o
            });
            var r = a(85893),
                n = a(67294),
                s = a(45055);

            function o({
                routes: e,
                history: t,
                children: a
            }) {
                let o = (0, n.useMemo)(() => ({
                    routes: e,
                    history: t
                }), [e, t]);
                return (0, r.jsx)(s.I.Provider, {
                    value: o,
                    children: a
                })
            }
            try {
                o.displayName || (o.displayName = "AppContextProvider")
            } catch {}
        },
        1343: (e, t, a) => {
            let r;
            a.d(t, {
                R: () => p
            });
            var n = a(85893),
                s = a(98224),
                o = a(8386),
                l = a(67294);
            let i = globalThis.document;

            function c(e) {
                let t = e.colorMode;
                return {
                    colorMode: function(e) {
                        switch (e) {
                            case "light":
                                return "day";
                            case "dark":
                                return "night";
                            default:
                                return "auto"
                        }
                    }(t),
                    dayScheme: e.lightTheme,
                    nightScheme: e.darkTheme
                }
            }
            let d = i ? function() {
                let {
                    documentElement: e
                } = i, [t, a] = (0, l.useState)(() => c(e.dataset));
                return (0, l.useEffect)(() => {
                    let t = new MutationObserver(() => a(c(e.dataset)));
                    return t.observe(e, {
                        attributes: !0,
                        attributeFilter: ["data-color-mode", "data-light-theme", "data-dark-theme"]
                    }), () => t.disconnect()
                }, [e]), t
            } : function() {
                return c(r || {})
            };
            var u = a(87634),
                h = a(34232);
            let m = {};

            function p({
                appName: e,
                children: t,
                wasServerRendered: a
            }) {
                let {
                    colorMode: r,
                    dayScheme: l,
                    nightScheme: i
                } = d();
                return (0, n.jsx)(s.DJ, {
                    wasServerRendered: a,
                    children: (0, n.jsx)(h.n, {
                        appName: e,
                        category: "",
                        metadata: m,
                        children: (0, n.jsx)(o.ZP, {
                            colorMode: r,
                            dayScheme: l,
                            nightScheme: i,
                            preventSSRMismatch: !0,
                            children: (0, n.jsx)(u.sS, {
                                children: t
                            })
                        })
                    })
                })
            }
            try {
                p.displayName || (p.displayName = "BaseProviders")
            } catch {}
        },
        77617: (e, t, a) => {
            a.d(t, {
                P: () => l
            });
            var r = a(85893),
                n = a(87634),
                s = a(67294);

            function o() {
                let {
                    addToast: e
                } = (0, n.V6)();
                return (0, s.useEffect)(() => {
                    e({
                        type: "error",
                        message: "SSR failed, see console for error details"
                    })
                }, []), null
            }
            try {
                o.displayName || (o.displayName = "SSRErrorToast")
            } catch {}

            function l({
                ssrError: e
            }) {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(n.F1, {}), e && (0, r.jsx)(o, {})]
                })
            }
            try {
                l.displayName || (l.displayName = "CommonElements")
            } catch {}
        },
        98224: (e, t, a) => {
            a.d(t, {
                DJ: () => c,
                i$: () => r,
                kb: () => i
            });
            var r, n = a(85893),
                s = a(67294),
                o = a(86283),
                l = a(78249);
            ! function(e) {
                e.ServerRender = "ServerRender", e.ClientHydrate = "ClientHydrate", e.ClientRender = "ClientRender"
            }(r || (r = {}));
            let i = (0, s.createContext)("ClientRender");

            function c({
                wasServerRendered: e,
                children: t
            }) {
                let [a, r] = (0, s.useState)(() => o.W6 ? "ServerRender" : e ? "ClientHydrate" : "ClientRender");
                return (0, l.g)(() => {
                    "ClientRender" !== a && r("ClientRender")
                }, [a]), (0, n.jsx)(i.Provider, {
                    value: a,
                    children: t
                })
            }
            try {
                i.displayName || (i.displayName = "RenderPhaseContext")
            } catch {}
            try {
                c.displayName || (c.displayName = "RenderPhaseProvider")
            } catch {}
        }
    }
]);
//# sourceMappingURL=ui_packages_react-core_create-browser-history_ts-ui_packages_react-core_AppContextProvider_ts-809ab9-a7aa9da88f2b.js.map