"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    ["app_components_primer_experimental_toggle-switch-element_ts"], {
        11772: (e, t, i) => {
            i.r(t), i.d(t, {
                ToggleSwitchElement: () => c
            });
            var s = i(76006);

            function r(e, t, i, s) {
                var r, c = arguments.length,
                    h = c < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) h = Reflect.decorate(e, t, i, s);
                else
                    for (var l = e.length - 1; l >= 0; l--)(r = e[l]) && (h = (c < 3 ? r(h) : c > 3 ? r(t, i, h) : r(t, i)) || h);
                return c > 3 && h && Object.defineProperty(t, i, h), h
            }
            let c = class ToggleSwitchElement extends HTMLElement {
                toggle() {
                    this.isOn() ? this.turnOff() : this.turnOn()
                }
                turnOn() {
                    this.isDisabled() || (this.switch.setAttribute("aria-checked", "true"), this.classList.add("ToggleSwitch--checked"))
                }
                turnOff() {
                    this.isDisabled() || (this.switch.setAttribute("aria-checked", "false"), this.classList.remove("ToggleSwitch--checked"))
                }
                isOn() {
                    return "true" === this.switch.getAttribute("aria-checked")
                }
                isDisabled() {
                    return "true" === this.switch.getAttribute("aria-disabled")
                }
            };
            r([s.fA], c.prototype, "switch", void 0), c = r([s.Ih], c)
        }
    }
]);
//# sourceMappingURL=app_components_primer_experimental_toggle-switch-element_ts-daf632394dba.js.map