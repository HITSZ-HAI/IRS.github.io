"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    ["keyboard-shortcuts-dialog"], {
        26855: (e, t, r) => {
            let n;

            function a() {
                if (!n) throw Error("Client env was requested before it was loaded. This likely means you are attempting to use client env at the module level in SSR, which is not supported. Please move your client env usage into a function.");
                return n
            }

            function o() {
                return n ? .locale ? ? "en-US"
            }
            r.d(t, {
                    Kd: () => o,
                    dU: () => a
                }),
                function() {
                    if ("undefined" != typeof document) {
                        let e = document.getElementById("client-env");
                        if (e) try {
                            n = JSON.parse(e.textContent || "")
                        } catch (e) {
                            console.error("Error parsing client-env", e)
                        }
                    }
                }()
        },
        4412: (e, t, r) => {
            r.d(t, {
                C: () => o,
                x: () => a
            });
            var n = r(86283);
            let a = n.n4 ? .readyState === "interactive" || n.n4 ? .readyState === "complete" ? Promise.resolve() : new Promise(e => {
                    n.n4 ? .addEventListener("DOMContentLoaded", () => {
                        e()
                    })
                }),
                o = n.n4 ? .readyState === "complete" ? Promise.resolve() : new Promise(e => {
                    n.iG ? .addEventListener("load", e)
                })
        },
        46426: (e, t, r) => {
            r.d(t, {
                $: () => d,
                c: () => l
            });
            var n = r(15205),
                a = r(26855),
                o = r(86283);

            function i() {
                let e = (0, a.dU)().featureFlags,
                    t = e.map(e => e.toUpperCase());
                return new Set(t)
            }
            let s = o.W6 ? i : (0, n.Z)(i);

            function l(e) {
                return s().has(e.toUpperCase())
            }
            let d = {
                isFeatureEnabled: l
            }
        },
        17920: (e, t, r) => {
            r.d(t, {
                eE: () => o
            });
            var n = r(86283);
            let a = {
                Android: "Android",
                iOS: "iOS",
                macOS: "macOS",
                Windows: "Windows",
                Linux: "Linux",
                Unknown: "Unknown"
            };

            function o() {
                return function() {
                    let e = a.Unknown,
                        t = !1;
                    if (n.iG) {
                        let r = n.iG.navigator,
                            o = r.userAgent,
                            i = r ? .userAgentData ? .platform || r.platform; - 1 !== ["Macintosh", "MacIntel", "MacPPC", "Mac68K", "macOS"].indexOf(i) ? e = a.macOS : -1 !== ["iPhone", "iPad", "iPod"].indexOf(i) ? e = a.iOS : -1 !== ["Win32", "Win64", "Windows", "WinCE"].indexOf(i) ? e = a.Windows : /Android/.test(o) ? e = a.Android : /Linux/.test(i) && (e = a.Linux), t = r ? .userAgentData ? .mobile ? ? (e === a.Android || e === a.iOS)
                    }
                    return {
                        os: e,
                        isAndroid: e === a.Android,
                        isIOS: e === a.iOS,
                        isMacOS: e === a.macOS,
                        isWindows: e === a.Windows,
                        isLinux: e === a.Linux,
                        isDesktop: e === a.macOS || e === a.Windows || e === a.Linux,
                        isMobile: t
                    }
                }().isMacOS
            }
        },
        67044: (e, t, r) => {
            r.d(t, {
                DV: () => o,
                D_: () => n.D_,
                EL: () => n.EL,
                N9: () => n.N9,
                Tz: () => n.Tz,
                k0: () => n.k0
            });
            var n = r(11793);
            let a = /(?:^|,)((?:[^,]|,(?=\+| |$))*(?:,(?=,))?)/g;

            function o(e) {
                return Array.from(e.matchAll(a)).map(([, e]) => e)
            }
        },
        76134: (e, t, r) => {
            r.d(t, {
                Ty: () => o,
                YE: () => i,
                Zf: () => l
            });
            var n = r(46426),
                a = r(67044);
            let o = () => {
                    let e = document.querySelector("meta[name=keyboard-shortcuts-preference]");
                    return !e || "all" === e.content
                },
                i = e => /Enter|Arrow|Escape|Meta|Control|Mod|Esc/.test(e) || e.includes("Alt") && e.includes("Shift"),
                s = new Set(["button", "checkbox", "color", "file", "hidden", "image", "radio", "range", "reset", "submit"]),
                l = e => {
                    let t = (0, a.EL)(e),
                        r = function(e) {
                            if (!(e instanceof HTMLElement)) return !1;
                            let t = e.nodeName.toLowerCase(),
                                r = e.getAttribute("type") ? .toLowerCase() ? ? "text",
                                n = "true" === e.ariaReadOnly || "true" === e.getAttribute("aria-readonly") || null !== e.getAttribute("readonly");
                            return ("select" === t || "textarea" === t || "input" === t && !s.has(r) || e.isContentEditable) && !n
                        }(e.target) && (0, n.c)("no_character_key_shortcuts_in_inputs"),
                        l = o() && !r;
                    return i(t) || l
                }
        },
        3886: (e, t, r) => {
            var n, a, o = r(9067),
                i = r(85893),
                s = r(67294),
                l = r(67044),
                d = r(46426);
            let c = JSON.parse('{"services":{"github":{"id":"github","name":"GitHub (site-wide)","commandIds":["github:submit-form","github:open-context-menu"]},"keyboard-shortcuts-dialog":{"id":"keyboard-shortcuts-dialog","name":"Keyboard Shortcuts Dialog","commandIds":["keyboard-shortcuts-dialog:show-dialog"]},"react-sandbox":{"id":"react-sandbox","name":"React Sandbox","commandIds":["react-sandbox:example-command"]}},"commands":{"github:open-context-menu":{"name":"Open context menu","description":"Open a context menu if one is available","defaultBinding":"Alt+Shift+C"},"github:submit-form":{"name":"Submit form","description":"Submit the current form","defaultBinding":"Mod+Enter"},"keyboard-shortcuts-dialog:show-dialog":{"name":"Show Keyboard Shortcuts Dialog","description":"Display the keyboard shortcuts help dialog","defaultBinding":"Shift+?"},"react-sandbox:example-command":{"name":"React Sandbox Example Command","description":"Do something.","defaultBinding":"Mod+Shift+Enter"}}}'),
                {
                    commands: u,
                    services: m
                } = c,
                h = new Set(Object.keys(u)),
                p = {
                    is: e => h.has(e),
                    getServiceId: e => e.split(":")[0]
                },
                f = e => {
                    let t = u[e];
                    return !t.featureFlag || (0, d.c)(t.featureFlag.toUpperCase()) ? t : void 0
                },
                g = e => m[e],
                y = e => {
                    let t = f(e);
                    return t ? .defaultBinding ? (0, l.D_)(t.defaultBinding) : void 0
                },
                b = e => new Map(e.map(e => [e, y(e)]).filter(e => void 0 !== e[1]));
            var v = r(17521),
                w = r(69848);
            let CommandEvent = class CommandEvent {
                constructor(e) {
                    this.commandId = e
                }
            };
            let x = {
                entries: e => Object.entries(e).filter(e => p.is(e[0]) && void 0 !== e[1]),
                keys: e => Object.keys(e).filter(p.is)
            };
            var S = r(86058);
            let E = new S.R({
                    collectorUrl: "https://collector.githubapp.com/ui-commands/collect"
                }),
                k = {
                    TYPE: "command.trigger",
                    send(e) {
                        E.sendEvent(k.TYPE, e)
                    }
                };

            function _(e, t) {
                k.send({
                    command_id: e.commandId,
                    trigger_type: t instanceof KeyboardEvent ? "keybinding" : "click",
                    target_element_html: t.target instanceof HTMLElement ? function(e) {
                        let t = e.tagName.toLowerCase(),
                            r = Array.from(e.attributes).map(e => `${e.name}="${e.value.replaceAll('"','\\"')}"`).join(" ");
                        return `<${t}${r?` ${r}`:""}>`
                    }(t.target) : void 0,
                    keybinding: y(e.commandId)
                })
            }
            let j = new Map;

            function C(e, t) {
                let r = (0, s.useMemo)(() => new Map, []),
                    n = "global" === e ? j : r;
                (0, s.useEffect)(() => {
                    for (let [e, r] of b(x.keys(t))) {
                        let t = n.get(r) ? ? [];
                        t.length && console.warn(`The keybinding (${r}) for the "${e}" command conflicts with the keybinding for the already-registered command(s) "${t.join(", ")}". This may result in unpredictable behavior.`), n.set(r, t.concat(e))
                    }
                    return () => {
                        for (let [e, r] of b(x.keys(t))) {
                            let t = function(e, t) {
                                let r = !1;
                                return e.filter(e => e !== t || !!r || (r = !0, !1))
                            }(n.get(r) ? ? [], e);
                            t ? .length ? n.set(r, t) : n.delete(r)
                        }
                    }
                }, [t, n])
            }
            var R = r(76134);

            function A(e, t) {
                let r = (0, s.useMemo)(() => new l.k0, []),
                    n = (0, s.useMemo)(() => {
                        let t = new Map;
                        for (let r of e) {
                            let e = y(r);
                            e && t.set(e, r)
                        }
                        return t
                    }, [e]),
                    a = (0, s.useRef)(null);
                return (0, s.useCallback)(e => {
                    let o = "nativeEvent" in e ? e.nativeEvent : e;
                    if (a.current === o) return;
                    if (a.current = o, !(0, R.Zf)(o)) {
                        r.reset();
                        return
                    }
                    r.registerKeypress(o);
                    let i = n.get(r.sequence) ? ? n.get((0, l.EL)(o));
                    i && (r.reset(), e.preventDefault(), e.stopPropagation(), t(i, o))
                }, [n, r, t])
            }
            let N = new Map,
                L = e => {
                    let t = (0, s.useId)();
                    (0, s.useEffect)(() => (N.set(t, x.keys(e)), () => {
                        N.delete(t)
                    }), [e, t])
                },
                O = "ui-command-trigger",
                D = ({
                    commands: e
                }) => {
                    let t = (0, s.useCallback)((t, r) => {
                            let n = e[t];
                            if (n) {
                                let e = new CommandEvent(t);
                                try {
                                    n(e)
                                } finally {
                                    _(e, r)
                                }
                            }
                        }, [e]),
                        r = A(x.keys(e), t);
                    return C("global", e), L(e), (0, s.useEffect)(() => {
                        let e = e => {
                            let r = "detail" in e && "object" == typeof e.detail ? e.detail : void 0;
                            if (!r) return;
                            let n = "commandId" in r && "string" == typeof r.commandId && p.is(r.commandId) ? r.commandId : void 0,
                                a = "domEvent" in r && (r.domEvent instanceof KeyboardEvent || r.domEvent instanceof MouseEvent) ? r.domEvent : void 0;
                            n && a && t(n, a)
                        };
                        return document.addEventListener("keydown", r), document.addEventListener(O, e), () => {
                            document.removeEventListener("keydown", r), document.removeEventListener(O, e)
                        }
                    }, [r, t]), null
                };
            try {
                D.displayName || (D.displayName = "GlobalCommands")
            } catch {}
            let I = (0, s.createContext)({
                    triggerCommand: function(e, t) {
                        document.dispatchEvent(new CustomEvent(O, {
                            detail: {
                                commandId: e,
                                domEvent: t
                            }
                        }))
                    }
                }),
                T = I.Provider,
                P = () => (0, s.useContext)(I);
            try {
                (n = ({
                    commands: e,
                    children: t
                }) => {
                    let r = (0, s.useRef)(e);
                    (0, w.Z)(() => {
                        r.current = e
                    }, [e]);
                    let n = P(),
                        a = (0, s.useCallback)((e, t) => {
                            let a = r.current[e];
                            if (a) {
                                let r = new CommandEvent(e);
                                try {
                                    a(r)
                                } finally {
                                    _(r, t)
                                }
                            } else n.triggerCommand(e, t)
                        }, [n]);
                    C("scoped", e), L(e);
                    let o = (0, s.useMemo)(() => ({
                            triggerCommand: a
                        }), [a]),
                        l = A(x.keys(e), a),
                        d = (0, v.u)(l),
                        c = (0, s.useRef)(null);
                    return (0, s.useEffect)(() => {
                        let e = c.current,
                            t = d.onKeyDown;
                        if (e) return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
                    }), (0, i.jsx)(T, {
                        value: o,
                        children: (0, i.jsx)("div", {
                            style: {
                                display: "contents"
                            },
                            ref: c,
                            ...d,
                            children: t
                        })
                    })
                }).displayName || (n.displayName = "ScopedCommands")
            } catch {}
            var M = r(88216),
                B = r(24319);
            let W = ({
                commandId: e,
                ...t
            }) => {
                let r = y(e);
                return r ? (0, i.jsx)(B.u, {
                    keys: r,
                    ...t
                }) : null
            };
            try {
                W.displayName || (W.displayName = "CommandKeybindingHint")
            } catch {}
            var F = r(59841);
            let Z = (0, s.forwardRef)(({
                commandId: e,
                children: t,
                trailingVisual: r,
                showKeybindingHint: n = !1,
                ...a
            }, o) => {
                let s = f(e),
                    {
                        triggerCommand: l
                    } = P();
                return s ? (0, i.jsx)(M.r, { ...a,
                    onClick: t => l(e, t.nativeEvent),
                    trailingVisual: r ? ? n ? () => (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(F.T, {
                            children: "("
                        }), (0, i.jsx)(W, {
                            commandId: e,
                            format: "condensed"
                        }), (0, i.jsx)(F.T, {
                            children: ")"
                        })]
                    }) : void 0,
                    ref: o,
                    children: t ? ? s.name
                }) : null
            });
            Z.displayName = "CommandButton";
            try {
                (a = HintVisual).displayName || (a.displayName = "HintVisual")
            } catch {}
            var $ = r(50919);
            let q = (0, s.forwardRef)(({
                commandId: e,
                "aria-label": t,
                ...r
            }, n) => {
                let a = f(e),
                    {
                        triggerCommand: o
                    } = P();
                return a ? (0, i.jsx)($.h, { ...r,
                    "aria-label": t ? ? a.name,
                    onClick: t => o(e, t.nativeEvent),
                    ref: n
                }) : null
            });
            q.displayName = "CommandIconButton";
            var U = r(52516);
            let G = (0, s.forwardRef)(({
                commandId: e,
                children: t,
                description: r,
                leadingVisual: n,
                trailingVisual: a,
                ...o
            }, s) => {
                let l = f(e),
                    {
                        triggerCommand: d
                    } = P();
                return l ? (0, i.jsxs)(U.S.Item, { ...o,
                    onSelect: t => d(e, t.nativeEvent),
                    ref: s,
                    children: [t ? ? l.name, r && (0, i.jsx)(U.S.Description, {
                        children: r
                    }), n && (0, i.jsx)(U.S.LeadingVisual, {
                        children: n
                    }), null !== a && (0, i.jsx)(U.S.TrailingVisual, {
                        children: a ? ? (0, i.jsx)(W, {
                            commandId: e,
                            format: "condensed"
                        })
                    })]
                }) : null
            });
            G.displayName = "ActionList.CommandItem";
            var K = r(42483),
                H = r(74121),
                V = r(59148);

            function z({
                group: {
                    service: {
                        name: e
                    },
                    commands: t
                }
            }) {
                let r = (0, s.useId)();
                return (0, i.jsxs)(K.Z, {
                    sx: {
                        borderRadius: 2,
                        border: "1px solid",
                        borderColor: "border.default",
                        overflow: "hidden"
                    },
                    children: [(0, i.jsx)(K.Z, {
                        as: "h3",
                        id: r,
                        sx: {
                            bg: "canvas.subtle",
                            fontWeight: "bold",
                            py: 2,
                            px: 3,
                            fontSize: 1
                        },
                        children: e
                    }), (0, i.jsx)(K.Z, {
                        as: "ul",
                        role: "list",
                        "aria-labelledby": r,
                        sx: {
                            listStyleType: "none"
                        },
                        children: t.map(({
                            id: e,
                            name: t,
                            keybinding: r
                        }) => (0, i.jsxs)(K.Z, {
                            as: "li",
                            sx: {
                                borderTop: "1px solid",
                                borderColor: "border.default",
                                py: 2,
                                px: 3,
                                display: "flex",
                                gap: 2,
                                justifyContent: "space-between",
                                alignItems: "center"
                            },
                            children: [(0, i.jsx)(K.Z, {
                                children: t
                            }), (0, i.jsx)(K.Z, {
                                sx: {
                                    textAlign: "right"
                                },
                                children: (Array.isArray(r) ? r : [r]).map((e, t) => (0, i.jsxs)(s.Fragment, {
                                    children: [t > 0 && " or ", (0, i.jsx)(B.u, {
                                        keys: e
                                    })]
                                }, e))
                            })]
                        }, e))
                    })]
                })
            }
            try {
                z.displayName || (z.displayName = "ShortcutsGroupList")
            } catch {}
            let J = {
                keyboardShortcuts: "Keyboard shortcuts",
                siteWideShortcuts: "Site-wide shortcuts",
                loading: "Loading"
            };
            var Q = r(89445);
            let X = () => (0, i.jsxs)(K.Z, {
                    role: "status",
                    sx: {
                        display: "flex",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    children: [(0, i.jsx)(H.Z, {
                        size: "large"
                    }), (0, i.jsx)(F.T, {
                        children: J.loading
                    })]
                }),
                Y = e => Array.isArray(e) ? e.map(e => (0, l.D_)(e)) : (0, l.D_)(e ? ? ""),
                ee = ({
                    children: e
                }) => (0, i.jsx)(K.Z, {
                    sx: {
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        flexWrap: "wrap"
                    },
                    children: e
                }),
                et = ({
                    children: e
                }) => (0, i.jsx)(K.Z, {
                    sx: {
                        flex: "250px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 2
                    },
                    children: e
                }),
                er = ({
                    visible: e,
                    onVisibleChange: t
                }) => {
                    let [r, n] = (0, s.useState)({
                        service: {
                            id: "global",
                            name: "Global"
                        },
                        commands: []
                    }), [a, o] = (0, s.useState)([]), [l, d] = (0, s.useState)(!1);
                    return ((0, s.useEffect)(() => {
                        let t = function() {
                                let e = new Map;
                                for (let t of new Set(Array.from(N.values()).flat())) {
                                    let r = p.getServiceId(t);
                                    if (!e.has(r)) {
                                        let t = g(r);
                                        e.set(r, {
                                            service: {
                                                id: t.id,
                                                name: t.name
                                            },
                                            commands: []
                                        })
                                    }
                                    let n = f(t);
                                    n && n.defaultBinding && e.get(r) ? .commands.push({
                                        id: t,
                                        name: n.name,
                                        description: n.description,
                                        keybinding: n.defaultBinding
                                    })
                                }
                                return Array.from(e.values())
                            }(),
                            r = async () => {
                                d(!0);
                                let e = document.querySelector("meta[name=github-keyboard-shortcuts]");
                                if (!e) throw Error('The "github-keyboard-shortcuts" meta tag must be present');
                                let r = {
                                        contexts: e.content
                                    },
                                    a = `/site/keyboard_shortcuts?${new URLSearchParams(r).toString()}`,
                                    i = await (0, Q.v)(a, {
                                        method: "GET"
                                    });
                                if (i.ok) {
                                    let e = await i.json(),
                                        {
                                            global: r,
                                            ...a
                                        } = e.commands;
                                    n({
                                        service: {
                                            id: "global",
                                            name: J.siteWideShortcuts
                                        },
                                        commands: [...r.commands, ...t.find(e => "global" === e.service.id) ? .commands ? ? []].map(e => ({ ...e,
                                            keybinding: Y(e.keybinding)
                                        }))
                                    });
                                    let s = [...Object.values(a), ...t].map(e => ({ ...e,
                                        commands: e.commands.map(e => ({ ...e,
                                            keybinding: Y(e.keybinding)
                                        }))
                                    }));
                                    o(s)
                                } else o(t.map(e => ({ ...e,
                                    commands: e.commands.map(e => ({ ...e,
                                        keybinding: Y(e.keybinding)
                                    }))
                                })));
                                d(!1)
                            };
                        e && r()
                    }, [e]), e) ? (0, i.jsx)(V.V, {
                        title: J.keyboardShortcuts,
                        "aria-modal": "true",
                        width: "xlarge",
                        height: "large",
                        onClose: () => t(!1),
                        sx: {
                            color: "fg.default"
                        },
                        children: l ? (0, i.jsx)(X, {}) : (0, i.jsxs)(ee, {
                            children: [(0, i.jsx)(et, {
                                children: a.map(e => (0, i.jsx)(z, {
                                    group: e
                                }, e.service.id))
                            }), (0, i.jsxs)(et, {
                                children: [(0, i.jsx)(z, {
                                    group: r
                                }, r.service.id), (0, i.jsx)(M.r, {
                                    as: "a",
                                    href: "https://docs.github.com/en/get-started/accessibility/keyboard-shortcuts",
                                    sx: {
                                        width: "100%"
                                    },
                                    children: "View all keyboard shortcuts"
                                })]
                            })]
                        })
                    }) : null
                };
            try {
                X.displayName || (X.displayName = "LoadingState")
            } catch {}
            try {
                ee.displayName || (ee.displayName = "Columns")
            } catch {}
            try {
                et.displayName || (et.displayName = "Column")
            } catch {}
            try {
                er.displayName || (er.displayName = "ShortcutsDialog")
            } catch {}

            function en() {
                let [e, t] = (0, s.useState)(!1);
                return (0, d.c)("react_keyboard_shortcuts_dialog") ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(D, {
                        commands: {
                            "keyboard-shortcuts-dialog:show-dialog": () => t(!0)
                        }
                    }), (0, i.jsx)(er, {
                        visible: e,
                        onVisibleChange: t
                    })]
                }) : (0, i.jsx)(i.Fragment, {})
            }
            try {
                en.displayName || (en.displayName = "KeyboardShortcutsDialog")
            } catch {}(0, o.t)("keyboard-shortcuts-dialog", {
                Component: en
            })
        },
        96843: (e, t, r) => {
            r.d(t, {
                e: () => DeferredRegistry
            });
            let DeferredRegistry = class DeferredRegistry {
                register(e, t) {
                    let r = this.registrationEntries[e];
                    r ? r.resolve ? .(t) : this.registrationEntries[e] = {
                        promise: Promise.resolve(t)
                    }
                }
                getRegistration(e) {
                    var t;
                    return (t = this.registrationEntries)[e] || (t[e] = new n), this.registrationEntries[e].promise
                }
                constructor() {
                    this.registrationEntries = {}
                }
            };
            let n = class Deferred {
                constructor() {
                    this.promise = new Promise(e => {
                        this.resolve = e
                    })
                }
            }
        },
        9067: (e, t, r) => {
            r.d(t, {
                t: () => c
            });
            var n = r(96843);
            let a = new n.e;
            var o = r(85893),
                i = r(76006),
                s = r(88003),
                l = r(32369);
            let d = class ReactPartialElement extends s.S {
                async getReactNode(e) {
                    var t;
                    let {
                        Component: r
                    } = await (t = this.name, a.getRegistration(t));
                    return (0, o.jsx)(l.S, {
                        partialName: this.name,
                        embeddedData: e,
                        Component: r,
                        wasServerRendered: this.hasSSRContent,
                        ssrError: !!this.ssrError
                    })
                }
                constructor(...e) {
                    super(...e), this.nameAttribute = "partial-name"
                }
            };

            function c(e, t) {
                a.register(e, t)
            }
            d = function(e, t, r, n) {
                var a, o = arguments.length,
                    i = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (i = (o < 3 ? a(i) : o > 3 ? a(t, r, i) : a(t, r)) || i);
                return o > 3 && i && Object.defineProperty(t, r, i), i
            }([i.Ih], d)
        },
        51145: (e, t, r) => {
            r.d(t, {
                Z: () => l
            });
            var n = r(44544);
            let {
                getItem: a,
                setItem: o,
                removeItem: i
            } = (0, n.Z)("localStorage"), s = "REACT_PROFILING_ENABLED", l = {
                enable: () => o(s, "true"),
                disable: () => i(s),
                isEnabled: () => !!a(s)
            }
        },
        53729: (e, t, r) => {
            r.d(t, {
                A7: () => l,
                ko: () => s,
                q1: () => i
            });
            var n = r(15205),
                a = r(86283);
            let o = (0, n.Z)(function() {
                    return a.n4 ? .head ? .querySelector('meta[name="runtime-environment"]') ? .content || ""
                }),
                i = (0, n.Z)(function() {
                    return a.n4 ? .head ? .querySelector('meta[name="is-private-instance"]') ? .content === "true"
                }),
                s = (0, n.Z)(function() {
                    return "enterprise" === o()
                }),
                l = "webpack"
        },
        44544: (e, t, r) => {
            r.d(t, {
                Z: () => i,
                _: () => s
            });
            var n = r(86283),
                a = r(71643);
            let o = class NoOpStorage {
                getItem() {
                    return null
                }
                setItem() {}
                removeItem() {}
                clear() {}
                key() {
                    return null
                }
                get length() {
                    return 0
                }
            };

            function i(e, t = {
                throwQuotaErrorsOnSet: !1
            }, r = n.iG, i = e => e, s = e => e) {
                let l;
                try {
                    if (!r) throw Error();
                    l = r[e] || new o
                } catch {
                    l = new o
                }
                let {
                    throwQuotaErrorsOnSet: d
                } = t;

                function c(e) {
                    t.sendCacheStats && (0, a.b)({
                        incrementKey: e
                    })
                }

                function u(e) {
                    try {
                        if (l.removeItem(e), t.ttl) {
                            let t = `${e}:expiry`;
                            l.removeItem(t)
                        }
                    } catch (e) {}
                }
                return {
                    getItem: function(e, t = new Date().getTime()) {
                        try {
                            let r = l.getItem(e);
                            if (!r) return null;
                            let n = `${e}:expiry`,
                                a = Number(l.getItem(n));
                            if (a && t > a) return u(e), u(n), c("SAFE_STORAGE_VALUE_EXPIRED"), null;
                            return c("SAFE_STORAGE_VALUE_WITHIN_TTL"), i(r)
                        } catch (e) {
                            return null
                        }
                    },
                    setItem: function(e, r, n = new Date().getTime()) {
                        try {
                            if (l.setItem(e, s(r)), t.ttl) {
                                let r = `${e}:expiry`,
                                    a = n + t.ttl;
                                l.setItem(r, a.toString())
                            }
                        } catch (e) {
                            if (d && e instanceof Error && e.message.toLowerCase().includes("quota")) throw e
                        }
                    },
                    removeItem: u,
                    clear: l.clear,
                    key: l.key,
                    get length() {
                        return l.length
                    }
                }
            }

            function s(e) {
                return i(e, {
                    throwQuotaErrorsOnSet: !1
                }, window, JSON.parse, JSON.stringify)
            }
        },
        86283: (e, t, r) => {
            r.d(t, {
                Qg: () => n.Qg,
                W6: () => n.W6,
                cF: () => n.cF,
                iG: () => a.iG,
                n4: () => a.n4,
                ssrSafeLocation: () => a.jX,
                zu: () => a.zu
            });
            var n = r(35647),
                a = r(73614)
        },
        73614: (e, t, r) => {
            r.d(t, {
                iG: () => a,
                jX: () => i,
                n4: () => n,
                zu: () => o
            });
            let n = "undefined" == typeof document ? void 0 : document,
                a = "undefined" == typeof window ? void 0 : window,
                o = "undefined" == typeof history ? void 0 : history,
                i = "undefined" == typeof location ? {
                    pathname: "",
                    origin: "",
                    search: "",
                    hash: ""
                } : location
        },
        35647: (e, t, r) => {
            r.d(t, {
                Qg: () => o,
                W6: () => a,
                cF: () => i
            });
            var n = r(73614);
            let a = void 0 === n.n4,
                o = !a;

            function i() {
                return !!a || !!n.n4.querySelector('react-app[data-ssr="true"]')
            }
        },
        71643: (e, t, r) => {
            r.d(t, {
                B: () => m,
                b: () => l
            });
            var n = r(86283),
                a = r(4412),
                o = r(53729),
                i = r(46426);
            let s = [];

            function l(e, t = !1, r = 1) {
                if (!0 !== (0, i.c)("BROWSER_STATS_DISABLED")) {
                    if (r < 0 || r > 1) throw RangeError("Sampling probability must be between 0 and 1");
                    void 0 === e.timestamp && (e.timestamp = new Date().getTime()), e.loggedIn = !!n.n4 ? .head ? .querySelector('meta[name="user-login"]') ? .content, e.staff = m(), e.bundler = o.A7, Math.random() < r && s.push(e), t ? u() : c()
                }
            }
            let d = null;
            async function c() {
                await a.C, null == d && (d = window.requestIdleCallback(u))
            }

            function u() {
                if (d = null, !s.length) return;
                let e = n.n4 ? .head ? .querySelector('meta[name="browser-stats-url"]') ? .content;
                if (!e) return;
                let t = function(e) {
                    let t = [],
                        r = e.map(e => JSON.stringify(e));
                    for (; r.length > 0;) t.push(function(e) {
                        let t = e.shift(),
                            r = [t],
                            n = t.length;
                        for (; e.length > 0 && n <= 65536;) {
                            let t = e[0].length;
                            if (n + t <= 65536) {
                                let a = e.shift();
                                r.push(a), n += t
                            } else break
                        }
                        return r
                    }(r));
                    return t
                }(s);
                for (let r of t) ! function(e, t) {
                    try {
                        navigator.sendBeacon && navigator.sendBeacon(e, t)
                    } catch {}
                }(e, `{"stats": [${r.join(",")}] }`);
                s = []
            }

            function m() {
                return !!n.n4 ? .head ? .querySelector('meta[name="user-staff"]') ? .content
            }
            n.n4 ? .addEventListener("pagehide", u), n.n4 ? .addEventListener("visibilitychange", u)
        },
        17521: (e, t, r) => {
            r.d(t, {
                u: () => i
            });
            var n = r(17920),
                a = r(67294);
            let o = new Set(["enter", "tab"]),
                i = e => {
                    let t = (0, a.useRef)(!1),
                        r = (0, a.useRef)(!1),
                        i = (0, a.useCallback)(e => {
                            "compositionstart" === e.type && (t.current = !0, r.current = !1), "compositionend" === e.type && (t.current = !1, r.current = !0)
                        }, []),
                        s = (0, a.useCallback)(a => {
                            if (!o.has(a.key.toLowerCase()) || !t.current) {
                                if ((0, n.eE)() && 229 === a.keyCode && r.current) {
                                    r.current = !1;
                                    return
                                }
                                e(a)
                            }
                        }, [e]),
                        l = (0, a.useMemo)(() => ({
                            onCompositionStart: i,
                            onCompositionEnd: i,
                            onKeyDown: s
                        }), [i, s]);
                    return l
                }
        },
        89445: (e, t, r) => {
            function n(e, t = {}) {
                if (e.match(/^(https?:|\/\/)/)) throw Error("Can not make cross-origin requests from verifiedFetch");
                let r = { ...t.headers,
                    "GitHub-Verified-Fetch": "true",
                    "X-Requested-With": "XMLHttpRequest"
                };
                return fetch(e, { ...t,
                    headers: r
                })
            }

            function a(e, t) {
                let r = t ? .headers ? ? {},
                    a = { ...r,
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    o = t ? .body ? JSON.stringify(t.body) : void 0;
                return n(e, { ...t,
                    body: o,
                    headers: a
                })
            }
            r.d(t, {
                Q: () => n,
                v: () => a
            })
        },
        24319: (e, t, r) => {
            r.d(t, {
                u: () => b
            });
            var n = r(85893),
                a = r(97011),
                o = r(28975),
                i = r(67294),
                s = r(59841),
                l = r(17920);
            let d = {
                    alt: (0, l.eE)() ? "\u2325" : "Alt",
                    control: "\u2303",
                    shift: "\u21E7",
                    meta: (0, l.eE)() ? "\u2318" : "Win",
                    mod: (0, l.eE)() ? "\u2318" : "\u2303",
                    pageup: "PgUp",
                    pagedown: "PgDn",
                    arrowup: "\u2191",
                    arrowdown: "\u2193",
                    arrowleft: "\u2190",
                    arrowright: "\u2192",
                    plus: "+",
                    backspace: "\u232B",
                    delete: "Del",
                    space: "\u2423",
                    tab: "\u21E5",
                    enter: "\u23CE",
                    escape: "Esc",
                    function: "Fn",
                    capslock: "CapsLock",
                    insert: "Ins",
                    printscreen: "PrtScn"
                },
                c = {
                    alt: (0, l.eE)() ? "Option" : "Alt",
                    mod: (0, l.eE)() ? "Command" : "Control",
                    "+": "Plus",
                    pageup: "Page Up",
                    pagedown: "Page Down",
                    arrowup: "Up Arrow",
                    arrowdown: "Down Arrow",
                    arrowleft: "Left Arrow",
                    arrowright: "Right Arrow",
                    capslock: "Caps Lock",
                    printscreen: "Print Screen"
                },
                u = {
                    alt: (0, l.eE)() ? "option" : "alt",
                    meta: (0, l.eE)() ? "command" : "Windows",
                    mod: (0, l.eE)() ? "command" : "control",
                    pageup: "page up",
                    pagedown: "page down",
                    arrowup: "up arrow",
                    arrowdown: "down arrow",
                    arrowleft: "left arrow",
                    arrowright: "right arrow",
                    capslock: "caps lock",
                    printscreen: "print screen",
                    "`": "backtick",
                    "~": "tilde",
                    "!": "exclamation point",
                    "@": "at",
                    "#": "hash",
                    $: "dollar sign",
                    "%": "percent",
                    "^": "caret",
                    "&": "ampersand",
                    "*": "asterisk",
                    "(": "left parenthesis",
                    ")": "right parenthesis",
                    _: "underscore",
                    "-": "dash",
                    "+": "plus",
                    "=": "equals",
                    "[": "left bracket",
                    "{": "left curly brace",
                    "]": "right bracket",
                    "}": "right curly brace",
                    "\\": "backslash",
                    "|": "pipe",
                    ";": "semicolon",
                    ":": "colon",
                    "'": "single quote",
                    '"': "double quote",
                    ",": "comma",
                    "<": "left angle bracket",
                    ".": "period",
                    ">": "right angle bracket",
                    "/": "forward slash",
                    "?": "question mark",
                    " ": "space"
                },
                m = {
                    control: 1,
                    meta: 2,
                    alt: 3,
                    option: 4,
                    shift: 5,
                    function: 6,
                    DEFAULT: 7
                };

            function h(e) {
                return e in m ? m[e] : m.DEFAULT
            }
            let p = ({
                    children: e
                }) => (0, n.jsx)(a.Z, {
                    as: "kbd",
                    sx: {
                        color: "inherit",
                        fontFamily: "inherit",
                        fontSize: "inherit",
                        border: "none",
                        background: "none",
                        boxShadow: "none",
                        p: 0,
                        lineHeight: "unset",
                        position: "relative",
                        overflow: "visible"
                    },
                    children: e
                }),
                f = ({
                    name: e,
                    format: t
                }) => (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(s.T, {
                        children: u[e] || e
                    }), (0, n.jsx)("span", {
                        "aria-hidden": !0,
                        children: ("condensed" === t ? d[e] : c[e]) ? ? (0, o.Z)(e)
                    })]
                }),
                g = (e, t) => h(e) - h(t),
                y = ({
                    keys: e,
                    format: t = "condensed"
                }) => (0, n.jsx)(a.Z, {
                    sx: {
                        display: "inline-flex",
                        bg: "canvas.default",
                        color: "fg.muted",
                        border: "1px solid",
                        borderColor: "border.default",
                        borderRadius: 2,
                        fontWeight: "normal",
                        fontFamily: "normal",
                        fontSize: 0,
                        p: 1,
                        gap: "0.5ch",
                        boxShadow: "none",
                        verticalAlign: "baseline",
                        overflow: "hidden",
                        lineHeight: "10px"
                    },
                    children: e.split("+").map(e => e.toLowerCase()).sort(g).map((e, r) => (0, n.jsxs)(i.Fragment, {
                        children: [r > 0 && "full" === t ? (0, n.jsx)("span", {
                            "aria-hidden": !0,
                            children: " + "
                        }) : " ", (0, n.jsx)(f, {
                            name: e,
                            format: t
                        })]
                    }, r))
                }),
                b = (0, i.memo)(({
                    keys: e,
                    format: t = "condensed"
                }) => (0, n.jsx)(p, {
                    children: e.split(" ").map((e, r) => (0, n.jsxs)(i.Fragment, {
                        children: [r > 0 && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(s.T, {
                                children: ", then"
                            }), " "]
                        }), (0, n.jsx)(y, {
                            keys: e,
                            format: t
                        })]
                    }, r))
                }));
            b.displayName = "KeyboardKey";
            try {
                p.displayName || (p.displayName = "Kbd")
            } catch {}
            try {
                y.displayName || (y.displayName = "Chord")
            } catch {}
        },
        32369: (e, t, r) => {
            r.d(t, {
                S: () => h
            });
            var n = r(85893),
                a = r(67294),
                o = r(1343),
                i = r(12599),
                s = r(58989),
                l = r(89250),
                d = r(78249);

            function c({
                children: e,
                history: t
            }) {
                let [r, o] = (0, a.useState)({
                    location: t.location
                });
                return (0, d.g)(() => t.listen(o), [t]), (0, n.jsx)(l.F0, {
                    location: r.location,
                    navigator: t,
                    children: e
                })
            }
            try {
                c.displayName || (c.displayName = "PartialRouter")
            } catch {}
            var u = r(77617),
                m = r(59112);

            function h({
                partialName: e,
                embeddedData: t,
                Component: r,
                wasServerRendered: l,
                ssrError: d
            }) {
                let h = a.useRef(),
                    p = globalThis.window;
                h.current || (h.current = p ? (0, m.l)({
                    window: p
                }) : (0, i.PP)({
                    initialEntries: [{
                        pathname: "/"
                    }]
                }));
                let f = h.current;
                return (0, n.jsx)(o.R, {
                    appName: e,
                    wasServerRendered: l,
                    children: (0, n.jsx)(s.i, {
                        history: f,
                        routes: [],
                        children: (0, n.jsxs)(c, {
                            history: f,
                            children: [(0, n.jsx)(r, { ...t.props
                            }), (0, n.jsx)(u.P, {
                                ssrError: d
                            })]
                        })
                    })
                })
            }
            try {
                h.displayName || (h.displayName = "PartialEntry")
            } catch {}
        },
        88003: (e, t, r) => {
            r.d(t, {
                S: () => ReactBaseElement
            });
            var n = r(85893),
                a = r(76006),
                o = r(20745),
                i = r(67294),
                s = r(51145);

            function l(e, t, r, n) {
                var a, o = arguments.length,
                    i = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (i = (o < 3 ? a(i) : o > 3 ? a(t, r, i) : a(t, r)) || i);
                return o > 3 && i && Object.defineProperty(t, r, i), i
            }
            let ReactBaseElement = class ReactBaseElement extends HTMLElement {
                get name() {
                    return this.getAttribute(this.nameAttribute)
                }
                get embeddedDataText() {
                    let e = this.embeddedData ? .textContent;
                    if (!e) throw Error(`No embedded data provided for react element ${this.name}`);
                    return e
                }
                get hasSSRContent() {
                    return "true" === this.getAttribute("data-ssr")
                }
                connectedCallback() {
                    this.renderReact()
                }
                disconnectedCallback() {
                    this.root ? .unmount(), this.root = void 0
                }
                async renderReact() {
                    let e = {
                        createRoot: o.s,
                        hydrateRoot: o.a
                    };
                    s.Z.isEnabled() && (e = await this.getReactDomWithProfiling());
                    let t = JSON.parse(this.embeddedDataText),
                        r = this.ssrError ? .textContent,
                        a = await this.getReactNode(t),
                        l = (0, n.jsx)(i.StrictMode, {
                            children: a
                        });
                    if (r && this.logSSRError(r), this.hasSSRContent) {
                        let t = this.querySelector('style[data-styled="true"]');
                        t && document.head.appendChild(t), this.root = e.hydrateRoot(this.reactRoot, l, {
                            onRecoverableError: () => {}
                        }), t && requestIdleCallback(() => {
                            t.parentElement ? .removeChild(t)
                        })
                    } else this.root = e.createRoot(this.reactRoot), this.root.render(l);
                    this.classList.add("loaded")
                }
                getReactDomWithProfiling() {
                    return r.e("react-profiling").then(r.t.bind(r, 62518, 19))
                }
                logSSRError(e) {
                    let t = JSON.parse(e),
                        r = function(e) {
                            if (!e.stacktrace) return "";
                            let t = "\n ",
                                r = e.stacktrace.map(e => {
                                    let {
                                        function: r,
                                        filename: n,
                                        lineno: a,
                                        colno: o
                                    } = e, i = `${t} at ${r} (${n}:${a}:${o})`;
                                    return t = " ", i
                                });
                            return r.join("\n")
                        }(t);
                    console.error("Error During Alloy SSR:", `${t.type}: ${t.value}
`, t, r)
                }
            };
            l([a.fA], ReactBaseElement.prototype, "embeddedData", void 0), l([a.fA], ReactBaseElement.prototype, "ssrError", void 0), l([a.fA], ReactBaseElement.prototype, "reactRoot", void 0)
        },
        59841: (e, t, r) => {
            r.d(t, {
                T: () => a
            });
            var n = r(15388);
            let a = n.ZP.span.withConfig({
                displayName: "VisuallyHidden",
                componentId: "sc-ea4b9adb-0"
            })
            `
  border: 0;
  clip: rect(0 0 0 0);
  /* Elements without a height and width aren't accessible to screen readers
  * however, the negative margin trick is used to hide the element by removing
  * the same amount of margin as the height and width
  * */
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, ["react-lib", "vendors-node_modules_primer_octicons-react_dist_index_esm_js-node_modules_primer_react_lib-es-2e8e7c", "vendors-node_modules_primer_react_lib-esm_Box_Box_js", "vendors-node_modules_primer_react_lib-esm_Button_Button_js", "vendors-node_modules_primer_react_lib-esm_ActionList_index_js", "vendors-node_modules_primer_behaviors_dist_esm_focus-zone_js", "vendors-node_modules_primer_react_lib-esm_Button_IconButton_js-node_modules_primer_react_lib--23bcad", "ui_packages_react-core_create-browser-history_ts-ui_packages_react-core_AppContextProvider_ts-809ab9"], () => t(3886)), e.O()
    }
]);
//# sourceMappingURL=keyboard-shortcuts-dialog-f0c8770c047d.js.map