!function (e) {
    "use strict";
    window.pnFullTPVersion = !0, "function" != typeof Object.assign && Object.defineProperty(Object, "assign", { value: function (e, n) { if (null == e)
            throw new TypeError("Cannot convert undefined or null to object"); for (var t = Object(e), r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            if (null != o)
                for (var i in o)
                    Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i]);
        } return t; }, writable: !0, configurable: !0 });
    var n = new WeakMap;
    function t(e, t) { return n.get(e) && n.get(e).get(t); }
    function r(e, n, r) { if (void 0 === n)
        throw new TypeError; var o = t(n, r); return o && o.get(e); }
    function o(e, r, o, i) { if (i && !["string", "symbol"].includes(typeof i))
        throw new TypeError; (t(o, i) || function (e, t) { var r = n.get(e) || new Map; n.set(e, r); var o = r.get(t) || new Map; return r.set(t, o), o; }(o, i)).set(e, r); }
    function i(e, n, t) { return r(e, n, t) ? r(e, n, t) : Object.getPrototypeOf(n) ? i(e, Object.getPrototypeOf(n), t) : void 0; }
    var a, s = { decorate: function (e, n, t, r) { if (!Array.isArray(e) || 0 === e.length)
            throw new TypeError; return void 0 !== t ? function (e, n, t, r) { return e.reverse().forEach((function (e) { r = e(n, t, r) || r; })), r; }(e, n, t, r) : "function" == typeof n ? function (e, n) { return e.reverse().forEach((function (e) { var t = e(n); t && (n = t); })), n; }(e, n) : void 0; }, defineMetadata: function (e, n, t, r) { o(e, n, t, r); }, getMetadata: function (e, n, t) { return i(e, n, t); }, getOwnMetadata: function (e, n, t) { return r(e, n, t); }, hasMetadata: function (e, n, t) { return !!i(e, n, t); }, hasOwnMetadata: function (e, n, t) { return !!r(e, n, t); }, metadata: function (e, n) { return function (t, r) { o(e, n, t, r); }; } };
    window.Reflect = window.Reflect || {}, Object.assign(window.Reflect, s), function (e) { e[e.Transient = 0] = "Transient", e[e.Singleton = 1] = "Singleton", e[e.ResolutionScoped = 2] = "ResolutionScoped", e[e.ContainerScoped = 3] = "ContainerScoped"; }(a || (a = {}));
    var c = a, l = function (e, n) { return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, n) { e.__proto__ = n; } || function (e, n) { for (var t in n)
        n.hasOwnProperty(t) && (e[t] = n[t]); }, l(e, n); };
    function u(e, n) { function t() { this.constructor = e; } l(e, n), e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t); }
    function d(e) { var n = "function" == typeof Symbol && Symbol.iterator, t = n && e[n], r = 0; if (t)
        return t.call(e); if (e && "number" == typeof e.length)
        return { next: function () { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined."); }
    function p(e, n) { var t = "function" == typeof Symbol && e[Symbol.iterator]; if (!t)
        return e; var r, o, i = t.call(e), a = []; try {
        for (; (void 0 === n || n-- > 0) && !(r = i.next()).done;)
            a.push(r.value);
    }
    catch (e) {
        o = { error: e };
    }
    finally {
        try {
            r && !r.done && (t = i.return) && t.call(i);
        }
        finally {
            if (o)
                throw o.error;
        }
    } return a; }
    function f() { for (var e = [], n = 0; n < arguments.length; n++)
        e = e.concat(p(arguments[n])); return e; }
    var m = "injectionTokens";
    function g(e) { return !!e.useClass; }
    function v(e) { return !!e.useFactory; }
    var h = function () { function e(e) { this.wrap = e, this.reflectMethods = ["get", "getPrototypeOf", "setPrototypeOf", "getOwnPropertyDescriptor", "defineProperty", "has", "set", "deleteProperty", "apply", "construct", "ownKeys"]; } return e.prototype.createProxy = function (e) { var n, t = this, r = !1; return new Proxy({}, this.createHandler((function () { return r || (n = e(t.wrap()), r = !0), n; }))); }, e.prototype.createHandler = function (e) { var n = {}; return this.reflectMethods.forEach((function (t) { n[t] = function () { for (var n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r]; n[0] = e(); var o = Reflect[t]; return o.apply(void 0, f(n)); }; })), n; }, e; }();
    function w(e) { return "string" == typeof e || "symbol" == typeof e; }
    function y(e) { return "object" == typeof e && "token" in e && "transform" in e; }
    function b(e) { return !!e.useToken; }
    function k(e) { return null != e.useValue; }
    var _ = function () { function e() { this._registryMap = new Map; } return e.prototype.entries = function () { return this._registryMap.entries(); }, e.prototype.getAll = function (e) { return this.ensure(e), this._registryMap.get(e); }, e.prototype.get = function (e) { this.ensure(e); var n = this._registryMap.get(e); return n[n.length - 1] || null; }, e.prototype.set = function (e, n) { this.ensure(e), this._registryMap.get(e).push(n); }, e.prototype.setAll = function (e, n) { this._registryMap.set(e, n); }, e.prototype.has = function (e) { return this.ensure(e), this._registryMap.get(e).length > 0; }, e.prototype.clear = function () { this._registryMap.clear(); }, e.prototype.ensure = function (e) { this._registryMap.has(e) || this._registryMap.set(e, []); }, e; }(), C = function (e) { function n() { return null !== e && e.apply(this, arguments) || this; } return u(n, e), n; }(_), I = function () { this.scopedResolutions = new Map; };
    function S(e, n, t) { var r, o, i = p(e.toString().match(/constructor\(([\w, ]+)\)/) || [], 2)[1], a = function (e, n) { return null === e ? "at position #" + n : '"' + e.split(",")[n].trim() + '" at position #' + n; }(void 0 === i ? null : i, n); return r = "Cannot inject the dependency " + a + ' of "' + e.name + '" constructor. Reason:', void 0 === o && (o = "    "), f([r], t.message.split("\n").map((function (e) { return o + e; }))).join("\n"); }
    var x = function (e) { function n() { return null !== e && e.apply(this, arguments) || this; } return u(n, e), n; }(_), P = function (e) { function n() { return null !== e && e.apply(this, arguments) || this; } return u(n, e), n; }(_), E = function () { this.preResolution = new x, this.postResolution = new P; }, T = new Map, A = function () { function e(e) { this.parent = e, this._registry = new C, this.interceptors = new E; } return e.prototype.register = function (e, n, t) { var r; if (void 0 === t && (t = { lifecycle: c.Transient }), r = function (e) { return g(e) || k(e) || b(e) || v(e); }(n) ? n : { useClass: n }, b(r))
        for (var o = [e], i = r; null != i;) {
            var a = i.useToken;
            if (o.includes(a))
                throw new Error("Token registration cycle detected! " + f(o, [a]).join(" -> "));
            o.push(a);
            var s = this._registry.get(a);
            i = s && b(s.provider) ? s.provider : null;
        } if ((t.lifecycle === c.Singleton || t.lifecycle == c.ContainerScoped || t.lifecycle == c.ResolutionScoped) && (k(r) || v(r)))
        throw new Error('Cannot use lifecycle "' + c[t.lifecycle] + '" with ValueProviders or FactoryProviders'); return this._registry.set(e, { provider: r, options: t }), this; }, e.prototype.registerType = function (e, n) { return w(n) ? this.register(e, { useToken: n }) : this.register(e, { useClass: n }); }, e.prototype.registerInstance = function (e, n) { return this.register(e, { useValue: n }); }, e.prototype.registerSingleton = function (e, n) { if (w(e)) {
        if (w(n))
            return this.register(e, { useToken: n }, { lifecycle: c.Singleton });
        if (n)
            return this.register(e, { useClass: n }, { lifecycle: c.Singleton });
        throw new Error('Cannot register a type name as a singleton without a "to" token');
    } var t = e; return n && !w(n) && (t = n), this.register(e, { useClass: t }, { lifecycle: c.Singleton }); }, e.prototype.resolve = function (e, n) { void 0 === n && (n = new I); var t = this.getRegistration(e); if (!t && w(e))
        throw new Error('Attempted to resolve unregistered dependency token: "' + e.toString() + '"'); if (this.executePreResolutionInterceptor(e, "Single"), t) {
        var r = this.resolveRegistration(t, n);
        return this.executePostResolutionInterceptor(e, r, "Single"), r;
    } if (function (e) { return "function" == typeof e || e instanceof h; }(e)) {
        r = this.construct(e, n);
        return this.executePostResolutionInterceptor(e, r, "Single"), r;
    } throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function."); }, e.prototype.executePreResolutionInterceptor = function (e, n) { var t, r; if (this.interceptors.preResolution.has(e)) {
        var o = [];
        try {
            for (var i = d(this.interceptors.preResolution.getAll(e)), a = i.next(); !a.done; a = i.next()) {
                var s = a.value;
                "Once" != s.options.frequency && o.push(s), s.callback(e, n);
            }
        }
        catch (e) {
            t = { error: e };
        }
        finally {
            try {
                a && !a.done && (r = i.return) && r.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        this.interceptors.preResolution.setAll(e, o);
    } }, e.prototype.executePostResolutionInterceptor = function (e, n, t) { var r, o; if (this.interceptors.postResolution.has(e)) {
        var i = [];
        try {
            for (var a = d(this.interceptors.postResolution.getAll(e)), s = a.next(); !s.done; s = a.next()) {
                var c = s.value;
                "Once" != c.options.frequency && i.push(c), c.callback(e, n, t);
            }
        }
        catch (e) {
            r = { error: e };
        }
        finally {
            try {
                s && !s.done && (o = a.return) && o.call(a);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        this.interceptors.postResolution.setAll(e, i);
    } }, e.prototype.resolveRegistration = function (e, n) { if (e.options.lifecycle === c.ResolutionScoped && n.scopedResolutions.has(e))
        return n.scopedResolutions.get(e); var t, r = e.options.lifecycle === c.Singleton, o = e.options.lifecycle === c.ContainerScoped, i = r || o; return t = k(e.provider) ? e.provider.useValue : b(e.provider) ? i ? e.instance || (e.instance = this.resolve(e.provider.useToken, n)) : this.resolve(e.provider.useToken, n) : g(e.provider) ? i ? e.instance || (e.instance = this.construct(e.provider.useClass, n)) : this.construct(e.provider.useClass, n) : v(e.provider) ? e.provider.useFactory(this) : this.construct(e.provider, n), e.options.lifecycle === c.ResolutionScoped && n.scopedResolutions.set(e, t), t; }, e.prototype.resolveAll = function (e, n) { var t = this; void 0 === n && (n = new I); var r = this.getAllRegistrations(e); if (!r && w(e))
        throw new Error('Attempted to resolve unregistered dependency token: "' + e.toString() + '"'); if (this.executePreResolutionInterceptor(e, "All"), r) {
        var o = r.map((function (e) { return t.resolveRegistration(e, n); }));
        return this.executePostResolutionInterceptor(e, o, "All"), o;
    } var i = [this.construct(e, n)]; return this.executePostResolutionInterceptor(e, i, "All"), i; }, e.prototype.isRegistered = function (e, n) { return void 0 === n && (n = !1), this._registry.has(e) || n && (this.parent || !1) && this.parent.isRegistered(e, !0); }, e.prototype.reset = function () { this._registry.clear(), this.interceptors.preResolution.clear(), this.interceptors.postResolution.clear(); }, e.prototype.clearInstances = function () { var e, n; try {
        for (var t = d(this._registry.entries()), r = t.next(); !r.done; r = t.next()) {
            var o = p(r.value, 2), i = o[0], a = o[1];
            this._registry.setAll(i, a.filter((function (e) { return !k(e.provider); })).map((function (e) { return e.instance = void 0, e; })));
        }
    }
    catch (n) {
        e = { error: n };
    }
    finally {
        try {
            r && !r.done && (n = t.return) && n.call(t);
        }
        finally {
            if (e)
                throw e.error;
        }
    } }, e.prototype.createChildContainer = function () { var n, t, r = new e(this); try {
        for (var o = d(this._registry.entries()), i = o.next(); !i.done; i = o.next()) {
            var a = p(i.value, 2), s = a[0], l = a[1];
            l.some((function (e) { return e.options.lifecycle === c.ContainerScoped; })) && r._registry.setAll(s, l.map((function (e) { return e.options.lifecycle === c.ContainerScoped ? { provider: e.provider, options: e.options } : e; })));
        }
    }
    catch (e) {
        n = { error: e };
    }
    finally {
        try {
            i && !i.done && (t = o.return) && t.call(o);
        }
        finally {
            if (n)
                throw n.error;
        }
    } return r; }, e.prototype.beforeResolution = function (e, n, t) { void 0 === t && (t = { frequency: "Always" }), this.interceptors.preResolution.set(e, { callback: n, options: t }); }, e.prototype.afterResolution = function (e, n, t) { void 0 === t && (t = { frequency: "Always" }), this.interceptors.postResolution.set(e, { callback: n, options: t }); }, e.prototype.getRegistration = function (e) { return this.isRegistered(e) ? this._registry.get(e) : this.parent ? this.parent.getRegistration(e) : null; }, e.prototype.getAllRegistrations = function (e) { return this.isRegistered(e) ? this._registry.getAll(e) : this.parent ? this.parent.getAllRegistrations(e) : null; }, e.prototype.construct = function (e, n) { var t = this; if (e instanceof h)
        return e.createProxy((function (e) { return t.resolve(e, n); })); var r = T.get(e); if (!r || 0 === r.length) {
        if (0 === e.length)
            return new e;
        throw new Error('TypeInfo not known for "' + e.name + '"');
    } var o = r.map(this.resolveParams(n, e)); return new (e.bind.apply(e, f([void 0], o))); }, e.prototype.resolveParams = function (e, n) { var t = this; return function (r, o) { var i, a, s, c; try {
        return "object" == typeof (c = r) && "token" in c && "multiple" in c ? y(r) ? r.multiple ? (i = t.resolve(r.transform)).transform.apply(i, f([t.resolveAll(r.token)], r.transformArgs)) : (a = t.resolve(r.transform)).transform.apply(a, f([t.resolve(r.token, e)], r.transformArgs)) : r.multiple ? t.resolveAll(r.token) : t.resolve(r.token, e) : y(r) ? (s = t.resolve(r.transform, e)).transform.apply(s, f([t.resolve(r.token, e)], r.transformArgs)) : t.resolve(r, e);
    }
    catch (e) {
        throw new Error(S(n, o, e));
    } }; }, e; }(), M = new A;
    function O() { return function (e) { T.set(e, function (e) { var n = Reflect.getMetadata("design:paramtypes", e) || [], t = Reflect.getOwnMetadata(m, e) || {}; return Object.keys(t).forEach((function (e) { n[+e] = t[e]; })), n; }(e)); }; }
    if ("undefined" == typeof Reflect || !Reflect.getMetadata)
        throw new Error("tsyringe requires a reflect polyfill. Please add 'import \"reflect-metadata\"' to the top of your entry point.");
    if (window.pnInitPerformance = performance.now(), window.pnHasPolyfilled || (window.pnHasPolyfilled = !1), window.pnFullTPVersion || (window.pnFullTPVersion = !1), void 0 !== window.pn && void 0 !== window.pn.container)
        throw new Error("Piano SDK is loaded twice on same page. Try to fix that to prevent the message.");
    if (!window.pnFullTPVersion && "undefined" != typeof Proxy) {
        var R = function () { return L; }, L = new Proxy({}, { get: function (e, n, t) { return "isv" === n || R; }, apply: function (e, n, t) { return L; } });
        M.resolve = new Proxy(M.resolve, { apply: function (e, n, t) { if (M.isRegistered(t[0]))
                return Reflect.apply(e, n, t); M.register(t[0], { useValue: L }); var r = M.resolve(t[0]); return U[t[0]] = r, r; } });
    }
    var N = window.pn || {}, U = window.pn = {};
    U.container = M, U.singleton = function () { return function (e) { O()(e), M.registerSingleton(e); }; }, U.injectable = O, U.inject = function (e) { return n = e, function (e, r, o) { var i = Reflect.getOwnMetadata(m, e) || {}; i[o] = t ? { token: n, transform: t.transformToken, transformArgs: t.args || [] } : n, Reflect.defineMetadata(m, i, e); }; var n, t; }, U.registry = function (e) { return void 0 === e && (e = []), function (n) { return e.forEach((function (e) { var n = e.token, t = e.options, r = function (e, n) { var t = {}; for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]); if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
    } return t; }(e, ["token", "options"]); return M.register(n, r, t); })), n; }; }, U.instanceCachingFactory = function (e) { var n; return function (t) { return null == n && (n = e(t)), n; }; }, U.predefinedOptions = N, M.register("predefinedOptions", { useValue: N });
    var j = !1;
    try {
        if (!window.pnHasPolyfilled) {
            if ("undefined" == typeof Proxy)
                throw new Error("The browser cannot Proxy");
            if (new Promise((function (e) { })), Object.assign({}, {}), [""].includes(""), !Element.prototype.closest)
                throw new Error("There is no closest method of a DOM element");
        }
    }
    catch (e) {
        j = !0;
    }
    if (j) {
        var D = function () { var e, n = document.querySelectorAll("script"); if (n.length)
            for (var t = 0, r = n; t < r.length; t++) {
                var o = r[t], i = null === (e = null == o ? void 0 : o.src) || void 0 === e ? void 0 : e.match(/^.*?(tinypass.com|piano.io)/i);
                if (i)
                    return i[0];
            } return "https://sandbox.tinypass.com"; }();
        delete window.pn;
        var F = document.createElement("script");
        throw F.type = "text/javascript", F.async = !0, F.src = D + "/api/piano.es5.js", document.getElementsByTagName("head")[0].appendChild(F), new Error("Load full version of piano SDK");
    }
    var B, V = (B = function (e) { return new Promise((function (n, t) { var r = document.createElement("style"); r.type = "text/css", r.innerHTML = e, r.onload = n, r.onerror = t, document.getElementsByTagName("head")[0].appendChild(r); })); }, { name: "css", loadOfferCss: function () { B(".tp-backdrop {\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: #121214;\n    z-index: 300000;\n    opacity: 0;\n    transition: opacity .25s linear;\n}\n.tp-backdrop.tp-active {\n    opacity: .9;\n}\n.tp-modal .tp-close.tp-square {\n    background: #ccc;\n    border-radius: 0;\n    border: 0;\n    top: 0;\n    right: -40px;\n}\n.tp-modal .tp-close {\n    display: none;\n    position: absolute;\n    top: -20px;\n    right: -20px;\n    width: 40px;\n    height: 40px;\n    background: #fff url(\"data:image/svg+xml,%3Csvg width='11' height='11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11 1.368L9.632 0 5.5 4.142 1.368 0 0 1.368 4.142 5.5 0 9.632 1.368 11 5.5 6.858 9.632 11 11 9.632 6.858 5.5 11 1.368z' fill='%23959595'/%3E%3C/svg%3E\") center center no-repeat;\n    border: none;\n    box-shadow: 0 0 10px 0 rgba(28, 37, 68, 0.15);\n    outline: none;\n    z-index: 300100;\n    border-radius: 40px;\n    opacity: 0;\n    cursor: pointer;\n    transform: scale(.25, .25);\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\n.tp-modal .tp-close:hover,\n.tp-modal .tp-close:focus {\n    box-shadow: 0 0 10px 2px rgba(28, 37, 68, 0.15);\n}\n.tp-modal .tp-close:focus {\n   border: 1px solid;\n}\n.tp-modal .tp-close.tp-active {\n    display: block;\n    opacity: 1;\n    transform: scale(1, 1);\n}\n.tp-modal .tp-iframe-wrapper[dir=\"rtl\"] .tp-close {\n  right: initial;\n  left: -20px;\n}\n\n.tp-modal .tp-iframe-wrapper.piano-id-modal-ver-2 .tp-close {\n  top: 0;\n  right: 0;\n  width: 64px;\n  height: 64px;\n  box-shadow: none;\n  outline: none;\n  border-radius: 0;\n  border-left: 1px solid rgba(15, 15, 21, 0.2);\n  background: url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg %3E%3Cpath d='M3 3L13 13M13 3L3 13' stroke='%230F0F15' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E%0A\") center center no-repeat;\n  opacity: 0.3;\n}\n\n.tp-modal .tp-iframe-wrapper.piano-id-modal-ver-2 .tp-close.tp-active {\n  opacity: 0.3;\n}\n\n.tp-modal .tp-iframe-wrapper.piano-id-modal-ver-2 .tp-close:hover,\n.tp-modal .tp-iframe-wrapper.piano-id-modal-ver-2 .tp-close:focus {\n  box-shadow: none;\n  border: none;\n  border-left: 1px solid rgba(15, 15, 21, 0.06);\n  opacity: 1;\n}\n\n.tp-modal .tp-iframe-wrapper.piano-id-modal-ver-2[dir=\"rtl\"] .tp-close {\n  right: auto;\n  left: 0;\n  border-left: none;\n  border-right: 1px solid rgba(15, 15, 21, 0.2);\n}\n\n.tp-modal .tp-iframe-wrapper.piano-id-modal-ver-2[dir=\"rtl\"] .tp-close:hover,\n.tp-modal .tp-iframe-wrapper.piano-id-modal-ver-2[dir=\"rtl\"] .tp-close:focus {\n  border-left: none;\n  border-right: 1px solid rgba(15, 15, 21, 0.06);\n}\n\n.tp-modal {\n    z-index: 300050;\n}\n@media screen and (max-width: 650px) {\n    .tp-modal .tp-close {\n        right: 0;\n    }\n\n    .tp-modal .tp-iframe-wrapper[dir=\"rtl\"] .tp-close {\n      right: initial;\n      left: 0;\n    }\n}\n.tp-modal .tp-iframe-wrapper.tp-curtain {\n    width: 600px;\n    height: 480px;\n}\n.tp-modal-open {\n    overflow: hidden !important;\n    height: 100vh;\n    -webkit-overflow-scrolling: touch;\n}\n.tp-modal-open.tp-modal-resizing {\n    -webkit-overflow-scrolling: auto;\n}\n/*Bug fix of firefox v57*/\n.tp-modal-close {\n    overflow: auto;\n}\n.tp-modal__margin-100 .tp-iframe-wrapper {\n  margin-bottom: 100px;\n}\n.tp-iframe-wrapper {\n    position: relative;\n    margin: 50px auto;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.21);\n}\n.tp-iframe-wrapper.no-shadow {\n  box-shadow: unset;\n}\n.tp-modal {\n    overflow-x: hidden;\n    overflow-y: scroll !important;\n    display: none;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    transform: translate3d(0, 0, 0);\n}\n.tp-modal .tp-message {\n    font-family: \"Graphik Web Regular\", Helvetica, Arial, sans-serif;\n    padding: 10px;\n}\n.tp-modal .tp-btn-container {\n    padding-left: 10px;\n    padding-bottom: 10px;\n}\n.tp-cxense-placeholder-modal {\n    width: 100%;\n    background-color: #fff;\n    max-width: 912px;\n    display: block;\n    overflow: hidden;\n    height: auto;\n    opacity: 1;\n}\n.tp-widget-placeholder > div::after {\n    display: block;\n    content: \"\";\n    clear: both;\n}\n.tp-btn {\n    text-decoration: none;\n    cursor: pointer;\n    padding: 0 18px;\n    line-height: 40px;\n    border-collapse: separate;\n    border-radius: 4px;\n    text-align: center;\n    vertical-align: middle;\n    display: inline-block;\n    color: #fff;\n    border: none;\n    box-shadow: inset 0 -1px 0 rgba(216, 218, 221, 0.0);\n    background: #3878D8;\n    background-position: bottom;\n    text-shadow: none;\n    font-family: \"Graphik Web Regular\", Helvetica, Arial, sans-serif;\n    white-space: nowrap;\n    outline: 0;\n}\n.tp-please-wait.tp-active {\n    display: block;\n    opacity: .9;\n    transition: opacity .25s linear;\n}\n.tp-please-wait {\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: #999;\n    opacity: 0;\n    width: 100%;\n    height: 100%;\n    display: none;\n    text-align: center;\n    color: #fff;\n    font-weight: lighter;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 15px;\n}\n.tp-please-wait.tp-overlap {\n  position: fixed;\n  z-index: 300150;\n}\n\n.tp-please-wait.tp-local-overlap {\n  position: absolute;\n}\n\n.tp-please-wait > .tp-icon {\n    width: 80px;\n    height: 80px;\n    margin: 100px auto 20px auto;\n}\n\n.pn-spinner {\n  color: grey;\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.pn-spinner div {\n  transform-origin: 40px 40px;\n  animation: pn-spinner 1.2s linear infinite;\n}\n.pn-spinner div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 3px;\n  left: 37px;\n  width: 6px;\n  height: 18px;\n  border-radius: 20%;\n  background: #fff;\n}\n.pn-spinner div:nth-child(1) {\n  transform: rotate(0deg);\n  animation-delay: -1.1s;\n}\n.pn-spinner div:nth-child(2) {\n  transform: rotate(30deg);\n  animation-delay: -1s;\n}\n.pn-spinner div:nth-child(3) {\n  transform: rotate(60deg);\n  animation-delay: -0.9s;\n}\n.pn-spinner div:nth-child(4) {\n  transform: rotate(90deg);\n  animation-delay: -0.8s;\n}\n.pn-spinner div:nth-child(5) {\n  transform: rotate(120deg);\n  animation-delay: -0.7s;\n}\n.pn-spinner div:nth-child(6) {\n  transform: rotate(150deg);\n  animation-delay: -0.6s;\n}\n.pn-spinner div:nth-child(7) {\n  transform: rotate(180deg);\n  animation-delay: -0.5s;\n}\n.pn-spinner div:nth-child(8) {\n  transform: rotate(210deg);\n  animation-delay: -0.4s;\n}\n.pn-spinner div:nth-child(9) {\n  transform: rotate(240deg);\n  animation-delay: -0.3s;\n}\n.pn-spinner div:nth-child(10) {\n  transform: rotate(270deg);\n  animation-delay: -0.2s;\n}\n.pn-spinner div:nth-child(11) {\n  transform: rotate(300deg);\n  animation-delay: -0.1s;\n}\n.pn-spinner div:nth-child(12) {\n  transform: rotate(330deg);\n  animation-delay: 0s;\n}\n@keyframes pn-spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n.tp-please-wait > .tp-icon.tp-centered {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.tp-iframe-wrapper.no-width .tp-close,\n.tp-iframe-wrapper.no-height .tp-close,\n.tp-modal.no-width .tp-close,\n.tp-modal.no-height .tp-close {\n    display: none;\n}\n\n.tp-banner {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n\n.tp-banner > .tp-container-inner,\n.tp-banner > .tp-container-inner > iframe {\n  width: inherit !important;\n}\n\n.frozen-mobile-body {\n  width: 100%;\n  margin: 0;\n  position: fixed !important;\n  max-height: -webkit-fill-available;\n  max-height: -moz-available;\n}\n"); } });
    pn.container.register("css", { useValue: V }), pn.css = pn.container.resolve("css");
    var q, z, H = function (e) { return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase(); }, W = Math.round(1e4 * Math.random()), J = window.document, G = /^(?:text|application)\/javascript/i, Q = /^(?:text|application)\/xml/i, X = "application/json", $ = "text/html", Y = /^\s*$/, K = function (e) { var n = ce({}, e || {}); for (q in K.settings)
        void 0 === n[q] && (n[q] = K.settings[q]); !function (e) { e.global && 0 == K.active++ && Z(e); }(n), n.crossDomain || (n.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(n.url) && RegExp.$2 != window.location.host); var t = n.dataType, r = /=\?/.test(n.url); if ("jsonp" == t || r)
        return r || (n.url = oe(n.url, "callback=?")), K.JSONP(n); n.url || (n.url = window.location.toString()), ie(n); var o, i = n.accepts[t], a = {}, s = /^([\w-]+:)\/\//.test(n.url) ? RegExp.$1 : window.location.protocol, c = K.settings.xhr(); n.crossDomain || (a["X-Requested-With"] = "XMLHttpRequest"), i && (a.Accept = i, i.indexOf(",") > -1 && (i = i.split(",", 2)[0]), c.overrideMimeType && c.overrideMimeType(i)), (n.contentType || n.data && "GET" != n.type.toUpperCase()) && (a["Content-Type"] = n.contentType || "application/x-www-form-urlencoded"), n.headers = ce(a, n.headers || {}); var l = n.xhrFields && n.xhrFields.withCredentials; l && (c.withCredentials = l), c.onreadystatechange = function () { if (4 == c.readyState) {
        clearTimeout(o);
        var e, r = !1;
        if (c.status >= 200 && c.status < 300 || 304 == c.status || 0 == c.status && "file:" == s) {
            t = t || function (e) { return e && (e == $ ? "html" : e == X ? "json" : G.test(e) ? "script" : Q.test(e) && "xml") || "text"; }(c.getResponseHeader("content-type")), e = c.responseText;
            try {
                "script" == t ? (0, eval)(e) : "xml" == t ? e = c.responseXML : "json" == t && (e = Y.test(e) ? null : JSON.parse(e));
            }
            catch (e) {
                r = e;
            }
            r ? ne(r, "parsererror", c, n) : ee(e, c, n);
        }
        else
            ne(null, "error", c, n);
    } }; var u = !("async" in n) || n.async; for (z in c.open(n.type, n.url, u), n.headers)
        c.setRequestHeader(z, n.headers[z]); return !1 === function (e, n) { var t = n.context; if (!1 === n.beforeSend.call(t, e, n) || !1 === Z(n))
        return !1; Z(n); }(c, n) ? (c.abort(), !1) : (n.timeout > 0 && (o = setTimeout((function () { c.onreadystatechange = re, c.abort(), ne(null, "timeout", c, n); }), n.timeout)), c.send(n.data ? n.data : null), c); };
    function Z(e, n, t, r) { if (e.global)
        return !0; }
    function ee(e, n, t) { var r = t.context, o = "success"; t.success.call(r, e, o, n), Z(t), te(o, n, t); }
    function ne(e, n, t, r) { var o = r.context; r.error.call(o, t, n, e), Z(r), te(n, t, r); }
    function te(e, n, t) { var r = t.context; t.complete.call(r, n, e), Z(t), function (e) { e.global && !--K.active && Z(e); }(t); }
    function re() { }
    function oe(e, n) { return (e + "&" + n).replace(/[&?]{1,2}/, "?"); }
    function ie(e) { var n, t, r; "object" === H(e.data) && (e.data = (n = e.data, (r = []).add = function (e, n) { this.push(ae(e) + "=" + ae(n)); }, se(r, n, t), r.join("&").replace("%20", "+"))), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = oe(e.url, e.data)); }
    K.active = 0, K.JSONP = function (e) { if (!("type" in e))
        return K(e); var n, t = "jsonp" + (e.cache ? "Callback" : ++W), r = J.createElement("script"), o = { abort: function () { t in window && (window[t] = re), te("abort", o, e); } }, i = J.getElementsByTagName("head")[0] || J.documentElement; return e.error && (r.onerror = function () { o.abort(), e.error(); }), window[t] = function (r) { clearTimeout(n), delete window[t], ee(r, o, e); }, ie(e), r.src = e.url.replace(/=\?/, "=" + t), i.insertBefore(r, i.firstChild), e.timeout > 0 && (n = setTimeout((function () { o.abort(), te("timeout", o, e); }), e.timeout)), o; }, K.settings = { type: "GET", beforeSend: re, success: re, error: re, complete: re, context: null, global: !0, xhr: function () { return new window.XMLHttpRequest; }, accepts: { script: "text/javascript, application/javascript", json: X, xml: "application/xml, text/xml", html: $, text: "text/plain" }, crossDomain: !1, timeout: 0 }, K.get = function (e, n) { return K({ url: e, success: n }); }, K.post = function (e, n, t, r) { return "function" === H(n) && (r = r || t, t = n, n = null), K({ type: "POST", url: e, data: n, success: t, dataType: r }); }, K.getJSON = function (e, n) { return K({ url: e, success: n, dataType: "json" }); };
    var ae = encodeURIComponent;
    function se(e, n, t, r) { var o = "array" === H(n); for (var i in n) {
        var a = n[i];
        r && (i = t ? r : r + "[" + (o ? "" : i) + "]"), !r && o ? e.add(a.name, a.value) : (t ? "array" === H(a) : "object" === H(a)) ? se(e, a, t, i) : e.add(i, a);
    } }
    function ce(e) { var n = Array.prototype.slice; return n.call(arguments, 1).forEach((function (n) { for (q in n)
        void 0 !== n[q] && (e[q] = n[q]); })), e; }
    var le = K, ue = { request: function (e) { return e.dataType = e.dataType || "json", le(e); } };
    pn.container.register("ajax", { useValue: ue }), pn.ajax = pn.container.resolve("ajax");
    var de = function () { var e = function (e) { return "function" == typeof e; }, n = function (e, n) { return e ? t(e, n)[0] : null; }, t = function (e, n) { if (!e)
        return []; var t = n || document, r = e.split(","), o = []; return r.forEach((function (e) { var n = e.trim(); try {
        o = o.concat(Array.prototype.slice.call(t.querySelectorAll(n)));
    }
    catch (e) {
        var r = n.indexOf(" ") > -1;
        if ("." !== n[0] || r)
            if ("#" !== n[0] || r)
                o = o.concat(Array.prototype.slice.call(t.querySelectorAll(n)));
            else {
                var i = document.getElementById(n.substring(1));
                o = o.concat(i ? [i] : []);
            }
        else
            o = o.concat(Array.prototype.slice.call(t.getElementsByClassName(n.substring(1))));
    } })), o; }, r = function (e, n, t) { t.setAttribute(e, n); }, o = [], i = function () { for (var e = [], n = 0; n < arguments.length; n++)
        e[n] = arguments[n]; for (var t = {}, r = 0, o = function (e) { for (var n in e)
        e.hasOwnProperty(n) && ("[object Object]" === Object.prototype.toString.call(e[n]) ? t[n] = i(t[n], e[n]) : t[n] = e[n]); }; r < e.length; r++)
        o(e[r]); return t; }; return { scrollTop: function () { return window.pageYOffset || document.documentElement.scrollTop; }, winSize: function () { var e = window, n = document, t = n.documentElement, r = n.getElementsByTagName("body")[0], o = e.innerWidth || t.clientWidth || r.clientWidth; return { height: e.innerHeight || t.clientHeight || r.clientHeight, width: o }; }, isPlainObject: function (e) { return "[object Object]" === Object.prototype.toString.call(e); }, isEmptyObject: function (e) { return 0 === Object.keys(e).length && e.constructor === Object; }, isFunction: e, inArray: function (e, n) { return n.indexOf(e); }, type: function (e) { return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase(); }, remove: function (e) { var n; null === (n = e.parentNode) || void 0 === n || n.removeChild(e); }, empty: function (e) { for (; e.firstChild;)
            e.removeChild(e.firstChild); }, queryEl: n, qa: t, filter: function (e, n) { return Array.prototype.filter.call(document.querySelectorAll(e), n); }, addClass: function (e, n) { n.classList.add(e); }, toggleClass: function (e, n) { n.classList.toggle(e); }, removeClass: function (e, n) { n.classList.remove(e); }, getWidth: function (e) { var n = getComputedStyle(e, null), t = n.paddingLeft, r = n.paddingRight, o = e.getBoundingClientRect().width; return o -= parseFloat(t) + parseFloat(r); }, show: function (e) { e.style.display = "block"; }, hide: function (e) { e.style.display = "none"; }, getHeight: function (e) { var n = getComputedStyle(e, null), t = n.paddingTop, r = n.paddingBottom, o = e.getBoundingClientRect().height; return o -= parseFloat(t) + parseFloat(r); }, visible: function (e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length); }, append: function (e, n) { e.appendChild(n); }, setAttr: r, setAttrs: function (e, n) { Object.keys(e).forEach((function (t) { r(t, e[t], n); })); }, getAttr: function (e, t) { return "string" == typeof e && (e = n(e)), e ? e.getAttribute(t) : null; }, ready: function (e) { "loading" != document.readyState ? e() : document.addEventListener("DOMContentLoaded", (function () { return e(); })); }, delegate: function (e, n, t, r) { var i = function (t) { for (var i = t.target; i && null != i; i = i.parentNode) {
            var a = o.findIndex((function (t) { return t.parentEl === e && t.elementSelector === n; }));
            if (i.matches && i.matches(n) && a >= 0) {
                r.call(i, t);
                break;
            }
        } }; o.push({ parentEl: e, elementSelector: n, handler: i, eventName: t }), e.addEventListener(t, i, !1); }, undelegate: function (e, n) { o = o.filter((function (t) { var r = t.parentEl !== e && t.elementSelector !== n; return r || t.parentEl.removeEventListener(t.eventName, t.handler), r; })); }, on: function (e, n, t) { e.addEventListener(n, (function (e) { t(e); }), !1); }, off: function (e, n, t) { e.removeEventListener(n, t); }, deepExtend: i, param: function (n) { var t = [], r = function (n, t) { return encodeURIComponent(n) + "=" + encodeURIComponent(e(t) ? t() : t || 0 === t || !1 === t ? t : ""); }; return Object.keys(n).forEach((function (e) { Array.isArray(n[e]) ? n[e].forEach((function (n) { t.push(r(e, n)); })) : t.push(r(e, n[e])); })), t.join("&"); } }; };
    pn.container.register("jqUtils", { useValue: de() }), pn.jqUtils = pn.container.resolve("jqUtils");
    var pe = function () { var e = {}, n = /\+/g, t = function (e) { try {
        return decodeURIComponent(e.replace(n, " "));
    }
    catch (e) { } }, r = function (e) { 0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), e = t(e); try {
        return e;
    }
    catch (e) { } }, o = function (n, o, i) { if (void 0 !== o) {
        if ("number" == typeof (i = Object.assign({}, e, i)).expires) {
            var a = i.expires, s = i.expires = new Date;
            s.setDate(s.getDate() + a);
        }
        return o = String(o), document.cookie = [encodeURIComponent(n), "=", encodeURIComponent(o), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : "", i.samesite ? "; samesite=" + i.samesite : ""].join("");
    } for (var c, l = document.cookie ? document.cookie.split("; ") : [], u = 0, d = l.length; u < d; u++) {
        var p = l[u].split("="), f = t(p.shift()), m = p.join("=");
        if (n && n === f) {
            c = r(m);
            break;
        }
        n || void 0 === (m = r(m)) || (c[f] = m);
    } return c; }; return { name: "cookie", defaults: e, raw: !1, json: false, pluses: n, set: function (e, n, t) { o(e, n, t); }, get: function (e) { return o(e); }, remove: function (e, n) { return void 0 !== o(e) && (o(e, "", Object.assign({}, n, { expires: -1 })), !0); } }; }();
    pn.container.register("cookie", { useValue: pe }), pn.cookie = pn.container.resolve("cookie");
    var fe = function (e) { function n(e) { var n, t, r, o = arguments.length, i = window[e], a = arguments, s = a[1]; if (o < 2)
        throw new Error("Minimum 2 arguments must be given"); if (Array.isArray(s)) {
        for (var c in t = {}, s) {
            n = s[c];
            try {
                t[n] = JSON.parse(i.getItem(n));
            }
            catch (e) {
                t[n] = i.getItem(n);
            }
        }
        return t;
    } if (2 != o) {
        try {
            t = JSON.parse(i.getItem(s));
        }
        catch (e) {
            throw new ReferenceError(s + " is not defined in this storage");
        }
        for (c = 2; c < o - 1; c++)
            if (void 0 === (t = t[a[c]]))
                throw new ReferenceError([].slice.call(a, 1, c + 1).join(".") + " is not defined in this storage");
        if (Array.isArray(a[c])) {
            for (var l in r = t, t = {}, a[c])
                t[a[c][l]] = r[a[c][l]];
            return t;
        }
        return t[a[c]];
    } try {
        return JSON.parse(i.getItem(s));
    }
    catch (e) {
        return i.getItem(s);
    } } function t(n) { var t, r, o = arguments.length, i = window[n], a = arguments, s = a[1], c = a[2], l = {}; if (o < 2 || !e.isPlainObject(s) && o < 3)
        throw new Error("Minimum 3 arguments must be given or second parameter must be an object"); if (e.isPlainObject(s)) {
        for (var u in s)
            t = s[u], e.isPlainObject(t) ? i.setItem(u, JSON.stringify(t)) : i.setItem(u, t);
        return s;
    } if (3 == o)
        return "object" == typeof c ? i.setItem(s, JSON.stringify(c)) : i.setItem(s, c), c; try {
        null != (r = i.getItem(s)) && (l = JSON.parse(r));
    }
    catch (e) { } r = l; for (u = 2; u < o - 2; u++)
        r[t = a[u]] && e.isPlainObject(r[t]) || (r[t] = {}), r = r[t]; return r[a[u]] = a[u + 1], i.setItem(s, JSON.stringify(l)), l; } function r(e) { var n, t, r = arguments.length, o = window[e], i = arguments, a = i[1]; if (r < 2)
        throw new Error("Minimum 2 arguments must be given"); if (Array.isArray(a)) {
        for (var s in a)
            o.removeItem(a[s]);
        return !0;
    } if (2 == r)
        return o.removeItem(a), !0; try {
        n = t = JSON.parse(o.getItem(a));
    }
    catch (e) {
        throw new ReferenceError(a + " is not defined in this storage");
    } for (s = 2; s < r - 1; s++)
        if (void 0 === (t = t[i[s]]))
            throw new ReferenceError([].slice.call(i, 1, s).join(".") + " is not defined in this storage"); if (Array.isArray(i[s]))
        for (var c in i[s])
            delete t[i[s][c]];
    else
        delete t[i[s]]; return o.setItem(a, JSON.stringify(n)), !0; } function o(t) { var r = arguments.length, i = arguments, s = i[1]; if (1 == r)
        return 0 == a(t).length; if (Array.isArray(s)) {
        for (var c = 0; c < s.length; c++)
            if (!o(t, s[c]))
                return !1;
        return !0;
    } try {
        var l = n.apply(this, arguments);
        for (var c in Array.isArray(i[r - 1]) || (l = { totest: l }), l)
            if (!(e.isPlainObject(l[c]) && e.isEmptyObject(l[c]) || Array.isArray(l[c]) && !l[c].length) && l[c])
                return !1;
        return !0;
    }
    catch (e) {
        return !0;
    } } function i(e) { var t = arguments.length, r = arguments, o = r[1]; if (t < 2)
        throw new Error("Minimum 2 arguments must be given"); if (Array.isArray(o)) {
        for (var a = 0; a < o.length; a++)
            if (!i(e, o[a]))
                return !1;
        return !0;
    } try {
        var s = n.apply(this, arguments);
        for (var a in Array.isArray(r[t - 1]) || (s = { totest: s }), s)
            if (void 0 === s[a] || null === s[a])
                return !1;
        return !0;
    }
    catch (e) {
        return !1;
    } } function a(t) { var r = arguments.length, o = window[t], i = arguments, a = [], s = {}; if ((s = r > 1 ? n.apply(this, i) : o)._cookie)
        for (var c in e.cookie())
            "" != c && a.push(c.replace(s._prefix, ""));
    else
        for (var l in s)
            a.push(l); return a; } function s(n) { if (!n || "string" != typeof n)
        throw new Error("First parameter must be a string"); c ? (window.localStorage.getItem(n) || window.localStorage.setItem(n, "{}"), window.sessionStorage.getItem(n) || window.sessionStorage.setItem(n, "{}")) : (window.localCookieStorage.getItem(n) || window.localCookieStorage.setItem(n, "{}"), window.sessionCookieStorage.getItem(n) || window.sessionCookieStorage.setItem(n, "{}")); var t = { localStorage: Object.assign({}, e.localStorage, { _ns: n }), sessionStorage: Object.assign({}, e.sessionStorage, { _ns: n }) }; return e.cookie && (window.cookieStorage.getItem(n) || window.cookieStorage.setItem(n, "{}"), t.cookieStorage = Object.assign({}, e.cookieStorage, { _ns: n })), e.namespaceStorages[n] = t, t; } var c = function (e) { var n = "jsapi"; try {
        return !!window[e] && (window[e].setItem(n, n), window[e].removeItem(n), !0);
    }
    catch (e) {
        return !1;
    } }("localStorage"), l = { _type: "", _ns: "", _callMethod: function (e, n) { var t = [this._type], r = (n = Array.prototype.slice.call(n))[0]; return this._ns && t.push(this._ns), "string" == typeof r && -1 !== r.indexOf(".") && (n.shift(), [].unshift.apply(n, r.split("."))), [].push.apply(t, n), e.apply(this, t); }, get: function () { return this._callMethod(n, arguments); }, set: function () { var n = arguments.length, r = arguments, o = r[0]; if (n < 1 || !e.isPlainObject(o) && n < 2)
            throw new Error("Minimum 2 arguments must be given or first parameter must be an object"); if (e.isPlainObject(o) && this._ns) {
            for (var i in o)
                t(this._type, this._ns, i, o[i]);
            return o;
        } var a = this._callMethod(t, r); return this._ns ? a[o.split(".")[0]] : a; }, remove: function () { if (arguments.length < 1)
            throw new Error("Minimum 1 argument must be given"); return this._callMethod(r, arguments); }, removeAll: function (n) { return this._ns ? (t(this._type, this._ns, {}), !0) : function (n, t) { var o = a(n); for (var i in o)
            r(n, o[i]); if (t)
            for (var i in e.namespaceStorages)
                s(i); }(this._type, n); }, isEmpty: function () { return this._callMethod(o, arguments); }, isSet: function () { if (arguments.length < 1)
            throw new Error("Minimum 1 argument must be given"); return this._callMethod(i, arguments); }, keys: function () { return this._callMethod(a, arguments); } }; e.cookie && (window.name || (window.name = Math.floor(1e8 * Math.random()))), e.initNamespaceStorage = function (e) { return s(e); }, c ? (e.localStorage = Object.assign({}, l, { _type: "localStorage" }), e.sessionStorage = Object.assign({}, l, { _type: "sessionStorage" })) : (e.localStorage = Object.assign({}, l, { _type: "localCookieStorage" }), e.sessionStorage = Object.assign({}, l, { _type: "sessionCookieStorage" })), e.namespaceStorages = {}, e.removeAllStorages = function (n) { e.localStorage.removeAll(n), e.sessionStorage.removeAll(n), e.cookieStorage && e.cookieStorage.removeAll(n), n || (e.namespaceStorages = {}); }; }, me = function () { var e = pn.container.resolve("cookie"), n = pn.container.resolve("jqUtils"), t = { cookie: e.set, isPlainObject: n.isPlainObject, isEmptyObject: n.isEmptyObject }; fe(t); return { get: function (e) { if (window.localStorage && "function" == typeof window.localStorage.getItem)
            return t.localStorage.get(e); }, set: function (e, n) { window.localStorage && "function" == typeof window.localStorage.getItem && t.localStorage.set(e, n); }, remove: function (e) { window.localStorage && "function" == typeof window.localStorage.getItem && t.localStorage.remove(e); } }; }();
    pn.container.register("localStorage", { useValue: me }), pn.localStorage = pn.container.resolve("localStorage");
    var ge, ve = (ge = function () { return "14.142.1, server-v14.142.1-TS-edition"; }, window.__tpVersion = "14.142.1, server-v14.142.1-TS-edition", { name: "versionService", getTinypassVersion: ge });
    pn.container.register("versionService", { useValue: ve }), pn.versionService = pn.container.resolve("versionService");
    var he = function () { var e, n = pn.container.resolve("ajax"), t = {}; return { name: "itp", synchronizeCookie: function (r, o, i) { if (pn.cloudflareWorkerUrl) {
            !function (e, n, r) { if (t[e] = { value: n }, !r)
                return; r instanceof Date ? t[e].expires = r : t[e].maxAge = 3600 * r; }(r, o, i), e && clearTimeout(e), e = setTimeout((function () { n.request({ url: pn.cloudflareWorkerUrl + "?maxAge=2628000", type: "POST", data: JSON.stringify(t), crossDomain: !0, xhrFields: { withCredentials: !0 }, error: function (e, n) { console.error(n); } }), t = {}; }), 2500);
        } } }; }();
    pn.container.register("itp", { useValue: he }), pn.itp = pn.container.resolve("itp");
    var we = function (e, n) { return we = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, n) { e.__proto__ = n; } || function (e, n) { for (var t in n)
        Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]); }, we(e, n); };
    var ye = function () { return ye = Object.assign || function (e) { for (var n, t = 1, r = arguments.length; t < r; t++)
        for (var o in n = arguments[t])
            Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]); return e; }, ye.apply(this, arguments); };
    function be(e, n) { return function (t, r) { n(t, r, e); }; }
    function ke(e, n) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, n); }
    function _e(e, n, t) { if (t || 2 === arguments.length)
        for (var r, o = 0, i = n.length; o < i; o++)
            !r && o in n || (r || (r = Array.prototype.slice.call(n, 0, o)), r[o] = n[o]); return e.concat(r || Array.prototype.slice.call(n)); }
    var Ce = function (e) { void 0 === e && (e = pn.container); var n, t = e.resolve("jqUtils"), r = e.resolve("cookie"), o = e.resolve("versionService"), i = e.resolve("itp"), a = e.resolve("localStorage"), s = "", c = { ENABLED_AFTER_DISABLED: -2, NOT_DETECTED: -1, DISABLED: 0, ENABLED: 1 }; void 0 === "testString".toHex && Object.defineProperty(String.prototype, "toHex", { enumerable: !1, value: function () { for (var e = "", n = 0; n < this.length; ++n)
            e += "" + this.charCodeAt(n).toString(16); return e; } }); var l = function (e, n, t) { var o = { path: "/", expires: 0 }; void 0 !== n && (o.domain = n), void 0 !== t && (o.path = t), r.remove(e, o); }, u = function (e, n, t) { -1 !== n.indexOf("abril.com.br") && l(e, ".abril.com.br", t), -1 !== n.indexOf("scotsman.com") && l(e, ".scotsman.com", t); }, d = function (e) { var n; if (0 === document.cookie.length)
        return null; if (e instanceof RegExp)
        for (var t = document.cookie.split(";"), r = 0; r < t.length; r++) {
            var o = t[r].indexOf("=");
            if (-1 !== o) {
                var i, a = t[r].substr(0, o).trim();
                if (e.test(a)) {
                    i = t[r].substr(o + 1).trim();
                    try {
                        return decodeURIComponent(i);
                    }
                    catch (n) {
                        f('Could not uri-decode cookie "' + e.toString() + '"', n);
                    }
                    return i;
                }
            }
        }
    else {
        var s = ("; " + document.cookie).split("; " + e + "=");
        if (s.length >= 2) {
            var c = null === (n = s.pop()) || void 0 === n ? void 0 : n.split(";").shift();
            if (void 0 === c)
                return null;
            try {
                return decodeURIComponent(c);
            }
            catch (n) {
                f('Could not uri-decode cookie "' + e + '"', n);
            }
            return c;
        }
    } return null; }, p = function (e) { if (0 === document.cookie.length)
        return []; for (var n = [], t = document.cookie.split(";"), r = 0; r < t.length; r++) {
        var o = t[r].indexOf("=");
        if (-1 !== o) {
            var i, a = t[r].substr(0, o).trim();
            if (e instanceof RegExp && e.test(a)) {
                i = t[r].substr(o + 1).replace(/^\s+|\s+$/g, "");
                try {
                    i = decodeURIComponent(i);
                }
                catch (n) {
                    f('Could not uri-decode cookie "' + e.toString() + '"', n);
                }
                n.push({ name: a, value: i });
            }
            else if (a === e) {
                i = t[r].substr(o + 1).replace(/^\s+|\s+$/g, "");
                try {
                    i = decodeURIComponent(i);
                }
                catch (n) {
                    f('Could not uri-decode cookie "' + e + '"', n);
                }
                n.push({ name: a, value: i });
            }
        }
    } return n; }; function f() { for (var e = [], n = 0; n < arguments.length; n++)
        e[n] = arguments[n]; !0 === pn.debug && m.apply(void 0, e); } function m() { for (var e = [], n = 0; n < arguments.length; n++)
        e[n] = arguments[n]; if (window.console && window.console.log && window.console.log.apply && window.console.log.apply.call && void 0 !== window.console && void 0 !== window.console.log) {
        var t = ["TP:"];
        try {
            for (var r = 0; r < e.length; r++)
                t.push(e[r]);
        }
        catch (n) {
            t = e;
        }
        G() && (t = v(t)), "object" == typeof window.console.log ? window.console.log.apply.call(this, console, t) : console.log.apply(console, t);
    } } var g = function () { var e = 0; return window.pageYOffset ? e = window.pageYOffset : e = "number" == typeof (e = document.documentElement || document.body.parentNode).scrollTop ? e.scrollTop : document.body.scrollTop, e; }, v = function (e) { var n = ""; try {
        for (var t = 0; t < e.length; t++)
            try {
                n += JSON.stringify(e[t]) + ", ";
            }
            catch (e) {
                n += "" + e;
            }
        return [n];
    }
    catch (n) {
        return e;
    } }, h = function () { var e, n; return "CSS1Compat" === document.compatMode ? (e = document.documentElement.clientWidth, n = document.documentElement.clientHeight) : (e = document.body.clientWidth, n = document.body.clientHeight), { x: e, y: n }; }, w = function (e) { e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); var n = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search); return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " ")); }, y = function (e) { var n = e(location.href); if (history && "function" == typeof history.replaceState) {
        var t = "object" == typeof window.next && "object" == typeof window.next.router ? { url: e(history.state.url || ""), as: e(history.state.as || ""), options: history.state.options } : history.state;
        history.replaceState(t, document.title, n);
    }
    else
        location.href = n; }, b = function (e, n, t) { var r = ye({ path: "/", expires: 730 }, t && { domain: t }), o = S(); for (var i in o)
        l(e, o[i]); r.domain && u(e, r.domain), (pn.cookieDomain || pn.cookiePath) && (r.domain = pn.cookieDomain ? pn.cookieDomain : r.domain, l(e, r.domain, r.path), r.path = pn.cookiePath ? pn.cookiePath : r.path, l(e, r.domain, r.path)), l(e), q(e, n, r); }, k = function () { var e, n, t = "get_top_level_domain_cookie", r = document.location.hostname.split("."); for (e = r.length - 1; e >= 0; e--) {
        var o = { path: "/", domain: n = "." + r.slice(e).join(".") };
        if (q(t, n, o), V(t))
            return o.expires = new Date(1), q(t, n, o), n;
    } }, _ = function (e) { return pn.useAidSpecifiedCookies && pn.aid ? e + "_" + pn.aid : e; }, C = function () { var e, n = _("__pls"), t = d(n); if (t)
        try {
            if ((e = JSON.parse(t)) && !Array.isArray(e))
                throw new Error("Push list subscriptions must be an array");
        }
        catch (e) {
            f("Can't get push list subscriptions", e);
        } return e; }, I = function (e) { n = e; var t = k(); q("__pat", n, { path: "/", expires: 30, domain: t }); }, S = function () { var e = []; e.push(document.domain); for (var n = document.domain.split("."); n.length >= 2;)
        e.push("." + n.join(".")), n.shift(); return e; }, x = function (e) { var n = V(e); return "boolean" === t.type(n) || "string" === t.type(n) && n.length ? !0 === n || "true" === n ? c.ENABLED : c.DISABLED : c.NOT_DETECTED; }, P = function () { var e = V("__pnahc"), n = !1; return void 0 === e && (e = "0", n = !0), { cookieValue: parseInt(e, 10), isFirst: n }; }, E = {}, T = function (e) { E[e] ? E[e].counter++ : E[e] = { counter: 1, waiters: [] }; }, A = function (e, n) { if (E[e] && (E[e].counter--, E[e].counter <= 0)) {
        var t = [];
        E[e].waiters.forEach((function (e) { t.push(e); })), delete E[e], t.forEach((function (e) { e(void 0 !== n ? n : {}); }));
    } }, M = function () { return navigator.userAgent || navigator.vendor || window.opera; }, O = function () { return o.getTinypassVersion().indexOf("SNAPSHOT") >= 0; }, R = function () { return "https:" === document.location.protocol; }, L = function (e, n) { var t = [], r = e.indexOf(n); return -1 === r ? t.push(e) : (t.push(e.substr(0, r)), t.push(e.substr(r + 1))), t; }, N = function (e) { var n, t, r = L(e, "="); void 0 !== e && (n = r[0], t = r[1]); var o = ""; return void 0 !== n && (o += encodeURIComponent(decodeURIComponent(n))), void 0 !== t && (o += "=" + encodeURIComponent(decodeURIComponent(t))), o; }, U = function (e) { var n = parseInt(e, 10); return !(isNaN(parseFloat(n)) || n < 0 || n > 255); }, j = function (e) { var n = document.createElement("a"); n.href = /^https?:\/\//i.test(e) ? e : "http://" + e; var t = n.hostname; return 0 === t.indexOf("www.") && (t = t.replace("www.", "")), t; }; var D = function (e, n) { return new RegExp("\\?" + n, "gi").test(e) ? e.split("&").length > 1 ? e.replace(new RegExp(n + "[^&]+&?", "gi"), "") : e.replace(new RegExp("\\?" + n + "[^&]+&?", "gi"), "") : new RegExp("\\&" + n, "gi").test(e) ? e.replace(new RegExp("\\&" + n + "[^&]+", "gi"), "") : e; }, F = function (e, n) { try {
        var t = new Error, r = pn.user.getProvider().getName(), o = JSON.stringify([{ aid: pn.aid, description: "clearing __tp cookie", userProvider: r, accessTokenList: e, userToken: n, url: window.location.href, trace: X(t.stack, 3), tags: ["sdk"] }]);
        pn.api.callApi("/anon/error/log", { log_message: o });
    }
    catch (e) { } }; var B = function (e) { e || (e = 730); var n = pn.getMaxCookieExpirationInDays(); if (null !== n) {
        var t;
        "number" == typeof e ? (t = new Date).setDate(t.getDate() + e) : t = e;
        var r = new Date;
        if (r.setDate(r.getDate() + n), t > r)
            return n;
    } return e; }, V = function (e) { return r.get(e); }, q = function (e, n, t) { t = t || {}, "11C6aYHwtb" === pn.aid ? (t.samesite = "none", t.secure = !0) : t.samesite = "lax", t.expires && (t.expires = B(t.expires)), r.set(e, n, t), void 0 !== i.synchronizeCookie && i.synchronizeCookie(e, n, t.expires); }, z = "__tp-", H = "-expiration", W = function () { return Math.floor((new Date).getTime() / 1e3); }, J = function (e) { var n = z + e; a.remove(n), a.remove(n + H); }, G = function () { var e = ["__webdriver_evaluate", "__selenium_evaluate", "__webdriver_script_function", "__webdriver_script_func", "__webdriver_script_fn", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__driver_evaluate", "__selenium_unwrapped", "__fxdriver_unwrapped"], n = ["_phantom", "__nightmare", "_selenium", "callPhantom", "callSelenium", "_Selenium_IDE_Recorder"]; for (var t in n) {
        if (window[n[t]])
            return !0;
    } for (var r in e) {
        var o = e[r];
        if (window.document[o])
            return !0;
    } for (var i in window.document)
        if (i.match(/\$[a-z]dc_/) && window.document[i].cache_)
            return !0; return !!(window.external && window.external.toString && window.external.toString() && -1 !== window.external.toString().indexOf("Sequentum")) || (!!window.document.documentElement.getAttribute("selenium") || (!!window.document.documentElement.getAttribute("webdriver") || !!window.document.documentElement.getAttribute("driver"))); }, Q = function () { return V("__tac"); }, X = function (e, n) { return e && e.split("\n").filter((function (e, t) { return t > 0 && t < n + 1; })).map((function (e) { return e.trim(); })).join("\n"); }; return { name: "util", __private__: { getAdjustedCookieExpiration: B }, __protected__: { deleteTLDCookieForSpecificDomains: u, documentReady: function (e) { var n = function () { document.removeEventListener("DOMContentLoaded", n), window.removeEventListener("load", n), e(); }; "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(e) : (document.addEventListener("DOMContentLoaded", n), window.addEventListener("load", n)); }, getCookie: V, setCookie: q, getLocalStorageItem: function (e) { var n = z + e, t = a.get(n), r = a.get(n + H); return r && r < W() ? (J(e), null) : t; }, hasLocalStorage: function () { try {
                return "object" == typeof window.localStorage && "function" == typeof window.localStorage.getItem;
            }
            catch (e) {
                return !1;
            } }, randomStringCxCompatible: function () { for (var e = (new Date).getTime().toString(36); e.length < 16;)
                e += Math.round(2147483647 * Math.random()).toString(36); return e.substr(0, 16); }, setLocalStorageItem: function (e, n, t) { var r = z + e; a.set(r, n), t && a.set(r + H, W() + t); }, removeLocalStorageItem: J, cameFromFbSubscriptions: function () { return 0 === w("redirect_uri").indexOf("https://www.facebook.com/subscriptions/account-linking/confirm/"); }, logRemoveTokens: function (e) { try {
                var n = new Error, t = pn.user.getProvider().getName(), r = JSON.stringify([{ aid: pn.aid, description: "clearing __utp cookie", userProvider: t, userToken: e, url: window.location.href, trace: X(n.stack, 3), tags: ["sdk"] }]);
                pn.api.callApi("/anon/error/log", { log_message: r });
            }
            catch (e) { } }, waitAllPromises: function (e) { return Promise.all(e); }, isInteger: function (e) { return "number" == typeof e && isFinite(e) && Math.floor(e) === e; }, racePromise: function (e) { return Promise.race(e); }, isCxenseBot: function () { var e = M(); return /(cxensebot)/i.test(e); }, isHttpsProtocol: R, isApplePayAllowed: function () { var e = !1; try {
                e = window.ApplePaySession && window.ApplePaySession.canMakePayments();
            }
            catch (e) {
                m("ApplePay error", e);
            } return (O() || R()) && e; }, isDevEndpoint: O }, addScript: function (e, n) { var t, r = document.createElement("script"), o = document.getElementsByTagName("script")[0]; null === (t = o.parentNode) || void 0 === t || t.insertBefore(r, o), r.type = "text/javascript", r.async = !0, r.onload = n, r.src = e; }, fromUnderscoreToCamelCase: function (e) { return e.slice().replace(/_[a-z]/g, (function (e) { return e.replace("_", "").toUpperCase(); })); }, randomString: function (e) { e || (e = 5); var n = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; if (window.crypto && window.crypto.getRandomValues && "function" == typeof Uint32Array) {
            var r = new Uint32Array(e);
            window.crypto.getRandomValues(r);
            for (var o = 0; o < e; o++)
                n += t.charAt(r[o] % t.length);
        }
        else
            for (o = 0; o < e; o++)
                n += t.charAt(Math.floor(Math.random() * t.length)); return n; }, log: m, debug: f, error: function () { for (var e, n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t]; m.apply(void 0, n), (e = "string" == typeof arguments[0] ? new Error(arguments[0]) : new Error).stack && m(e.stack); }, findCookieByName: d, findCookiesByName: p, removeVoucherCodeFromUrl: function (e) { return D(e, "voucher_code"); }, removeSharedAccountCodeFromUrl: function (e) { return D(e, "shared_account_code"); }, deleteCookie: l, mapArrayIndex: function (e, n) { return n; }, getScroll: g, getPageSize: function () { return { x: Math.max(document.documentElement.clientWidth, document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth), y: Math.max(document.documentElement.clientHeight, document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight) }; }, getViewport: h, center: function (e, n) { var t = g(), r = h(); return (r = { x: r.x / 2 - e / 2, y: r.y / 2 - n / 2 + t }).x = Math.max(0, r.x), r.y = Math.max(10, r.y), r; }, centerScreen: function (e, n) { e = e || 0, n = n || 0; var r = void 0 !== window.screenLeft ? window.screenLeft : window.screen.left, o = void 0 !== window.screenTop ? window.screenTop : window.screen.top, i = t.winSize(); return { left: (i.width || document.documentElement.clientWidth || window.screen.width) / 2 - e / 2 + r, top: (i.height || document.documentElement.clientHeight || window.screen.height) / 2 - n / 2 + o }; }, getQueryParamByName: w, hasQueryParamByName: function (e) { var n = {}; return location.search.substr(1).split("&").forEach((function (e) { var t = e.split("="), r = t[0], o = t[1] && decodeURIComponent(t[1]); r in n ? n[r].push(o) : n[r] = [o]; })), n.hasOwnProperty(e); }, removeQueryParamByName: function (e) { y((function (n) { return function (e, n) { var t, r = e.split("#"), o = r[0].split("?"); if (r.length >= 2 && (t = r[1]), n = Array.isArray(n) ? n : [n], o.length >= 2) {
            for (var i = o[1].split(/[&;]/g), a = 0; a < n.length; a++)
                for (var s = encodeURIComponent(n[a]) + "=", c = i.length; c-- > 0;)
                    -1 !== i[c].lastIndexOf(s, 0) && i.splice(c, 1);
            return e = o[0] + (i.length > 0 ? "?" + i.join("&") : ""), t ? e + "#" + t : e;
        } return e; }(n, e); })); }, setAccessTokenListCookie: function (e, n, r) { var o = _("__ut"); if (e && "string" === t.type(e.value)) {
            var i = new Date, a = { domain: undefined, path: "/", expires: 730 };
            e.cookie_domain && "localhost" !== e.cookie_domain && t.inArray(e.cookie_domain, S()) >= 0 && (a.domain = e.cookie_domain), pn.cookieDomain && (a.domain = pn.cookieDomain), pn.cookiePath && (a.path = pn.cookiePath);
            var s = S();
            for (var c in s)
                l("__tac", s[c]), l("__tae", s[c]), l(o, s[c]);
            q("__tac", e.value, a), q("__tae", i.getTime(), a), q(o, n, a), "" !== n || r || F(e, n);
        }
        else {
            var u = S();
            if (u.push(void 0), pn.cookieDomain && u.push(pn.cookieDomain), pn.cookiePath)
                for (var c in u)
                    l("__tac", u[c], pn.cookiePath), l("__tae", u[c], pn.cookiePath), l("__eea", u[c], pn.cookiePath), l(o, u[c], pn.cookiePath);
            for (var c in u)
                l("__tac", u[c]), l("__tae", u[c]), l("__eea", u[c]), l(o, u[c]);
            r || F(e, n);
        } }, setTpccCookies: function () { var e = w("tpcc"); if (e) {
            var n = new Date, t = JSON.stringify({ date: n.getTime() }), r = k();
            /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(location.hostname) && (r = ""), r || (r = ""), q("tpcc_" + e, t, { path: "/", expires: 90, domain: r });
        } }, getCampaigns: function (e) { p(/^tpcc_.+/).forEach((function (n) { e[n.name] = n.value; })); }, getCustomCookies: function () { var e = {}; return p(/^_pc_.+/).forEach((function (n) { e[decodeURIComponent(n.name)] = n.value; })), e; }, ADBLOCKER_STATUS: c, getAdblockStatus: function () { var e, n, t = c.NOT_DETECTED, r = P(); return pn.adblockerCookieName && (t = x(pn.adblockerCookieName)), t === c.NOT_DETECTED && (t = x("__pac")), t === c.NOT_DETECTED && (t = x("__adblocker")), e = r.cookieValue, e <<= 1, (n = t) === c.ENABLED ? e |= 1 : e &= -2, n !== c.NOT_DETECTED && q("__pnahc", e + "", { path: "/", expires: 90 }), t === c.ENABLED && (r.isFirst || 1 != (r.cookieValue >> 0 & 1) && (t = c.ENABLED_AFTER_DISABLED)), t; }, getAdblockerStatusReason: function () { return void 0 !== window.blockAdBlock ? "1" : "0"; }, getAdblockerHistoryCookieInfo: P, waitCall: function (e, n) { E[e] ? E[e].waiters.push(n) : n(); }, startCall: T, doneCall: A, hasCall: function (e) { return !!E[e]; }, debounce: function (e, n, t) { var r; return function () { var o = this, i = Array.prototype.slice.call(arguments), a = function () { r = null, t || e.apply(o, i); }, s = t && !r; clearTimeout(r), r = setTimeout(a, n), s && e.apply(o, i); }; }, throttle: function (e, n) { var t, r, o = !1; return function i() { if (o)
            return t = arguments, void (r = this); e.apply(this, arguments), o = !0, setTimeout((function () { o = !1, t && (i.apply(r, t), t = r = null); }), n); }; }, profile: function (e) { function n() { return n.__invokeCount++, e.apply(this, arguments); } return Object.defineProperty(n, "__invokeCount", { writable: !0, value: 0 }), Object.defineProperty(n, "invokeCount", { get: function () { return this.__invokeCount; } }), n; }, setTbcCookieFromResponse: function (e) { e.browser && void 0 !== e.browser.tbc && b("__tbc", e.browser.tbc, e.browser.cookie_domain), e.tbc && e.tbc.cookie_value && b("__tbc", e.tbc.cookie_value, e.tbc.cookie_domain); }, setTacCookieFromResponse: function (e) { var n = (new Date).getTime(), t = Q(), r = function (e, r) { e && e !== t && (b("__tac", e, r), b("__tae", n, r)); }; e.browser && r(e.browser.tac, e.browser.cookie_domain), e.tac && r(e.tac.cookie_value, e.tac.cookie_domain); }, getTbcCookie: function () { return V("__tbc"); }, getTacCookie: Q, getAidSpecifiedName: _, getUserTokenCookie: function () { var e = _("__ut"), n = d(e); return void 0 !== n && n && n.length >= 0 ? n : null; }, getPushListsCookie: C, setPushListsCookie: function (e) { if (e) {
            var n = _("__pls"), t = C() || [];
            t.indexOf(e) > -1 || (t.push(e), l(n), q(n, JSON.stringify(t), { path: "/", expires: 730, domain: k() }));
        } }, setAppTimezoneOffsetFromResponse: function (e) { e.browser && void 0 !== e.browser.app_timezone_offset ? I(e.browser.app_timezone_offset) : void 0 !== e.timezone_offset && I(e.timezone_offset); }, setAppTimezoneOffset: I, getAppTimezoneOffset: function () { return null == n && (n = V("__pat")), n || 0; }, getBrowserTimezoneOffset: function () { return -Math.round((new Date).getTimezoneOffset()); }, str2timestamp: function (e) { if (void 0 !== e && 0 !== e.length) {
            if ("string" != typeof e && (e = "" + e), (e = e.trim()).match(/^[0-9]{0,10}$/))
                return parseInt(e);
            if (e.match(/^[0-9]{13,}$/))
                return parseInt(e) / 1e3;
            var n = Date.parse(e);
            if (n)
                return n / 1e3;
            if ((e = (e = (e = (e = e.replace(/00:([0-9]{2}(:[0-9]{2})?\s*[AP]M)/i, "12:$1").replace(/([0-9]{2})([AP|M])/i, "$1 $2")).replace(/\s*(at|@|\-|on|\|)\s*/gi, " ")).replace(/\s*(mon(day)?|tue(s?day)?|wed(nesday)?|thu((rs)?day)?|fri(day)?|sat(urday)?|sun(day)?)\s*/gi, "")).replace(/([0-9]{1,2})(st|nd|rd|th)/, "$1")).match(/\s+ET$/))
                e = 240 === (new Date).getTimezoneOffset() ? e.replace(/\s+ET$/, " EDT") : e.replace(/\s+ET$/, " EST");
            if (e = e.trim(), n = Date.parse(e))
                return n / 1e3;
            var t = e.match(/!^([a-z]+)[-/ ]([0-9]+)[-/ ]([0-9]+)(.*)$!i/);
            return t ? e = t[2] + " " + t[1] + " " + t[3] + t[4] : (t = e.match(/!^([0-9]+)[-/ ]([a-z]+)[-/ ]([0-9]+)(.*)$!i/)) && (e = t[1] + " " + t[2] + " " + t[3] + t[4]), (n = Date.parse(e)) ? n / 1e3 : void 0;
        } }, getPossibleCookieDomains: S, isMobileTabletIOs: function () { var e = M(); return /iPad|iPhone|iPod/.test(e) && !window.MSStream; }, isIphone: function () { var e = M(); return /iPhone/.test(e) && !window.MSStream; }, isIOS: function () { var e = M(); return /iPad|iPhone|iPod/.test(e) && !window.MSStream; }, isIOsUiWebView: function () { var e = M(); return /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e); }, isSafariOrIOsUiWebView: function () { var e = M(); return /(iPhone|iPod|iPad).*AppleWebKit/i.test(e); }, isFBOrInstWebView: function () { var e = M(); return e.indexOf("FBAN") > -1 || e.indexOf("FBAV") > -1 || e.indexOf("Instagram") > -1; }, isAndroid: function () { var e = M(); return /(android)/i.test(e); }, isIE: function () { var e = -1 !== (navigator && navigator.appVersion || "").indexOf("MSIE"), n = (navigator && navigator.userAgent || "").indexOf("Trident/") > 0; return e || n; }, isCriOS: function () { return -1 !== (navigator && navigator.userAgent || "").indexOf("CriOS"); }, isRelativeUrl: function (e) { return /^\/(?:\w+|\.{1,2}\/\w+)/.test(e); }, prepareUrlParameter: function (e) { if (!e)
            return ""; var n = function (e) { var n = e.indexOf("?"), t = e.indexOf("#"), r = !1; -1 !== t && (r = !0); var o, i = !1; -1 !== n && (i = !0), r && i && t < n && (i = !1); var a = "", s = ""; if (i) {
            var c = L(e, "?");
            if (o = c[0], r) {
                var l = L(c[1], "#");
                a = l[0], s = l[1];
            }
            else
                a = c[1];
        }
        else if (r) {
            var u = L(e, "#");
            o = u[0], s = u[1];
        }
        else
            o = e; return { schemeDomainAndPath: o, queryString: a, hash: s, hasQueryString: i, hasHash: r }; }(e = e.replace(/^((%20)|\s)+/, "")), t = encodeURI(decodeURI(n.schemeDomainAndPath)); return n.hasQueryString && (t += "?" + function (e) { var n = ""; if (void 0 !== e)
            for (var t = e.split("&"), r = 0; r < t.length; r++)
                r > 0 && (n += "&"), n += N(t[r]); return n; }(n.queryString)), n.hasHash && (t += "#" + encodeURIComponent(decodeURIComponent(n.hash))), t; }, getReferrer: function () { return document.referrer; }, getHostname: j, extractCookieDomain: function (e) { if (e && e.length && "." === e[0])
            return e; var n = e || window.location.href, t = j(n); return function (e) { var n = e.split("."), t = !0; return 4 === n.length && U(n[0]) && U(n[1]) && U(n[2]) && U(n[3]) || (t = !1), t; }(t) ? t : "localhost" === t ? null : "." + t; }, setCurrentDomainFromResponse: function (e) { void 0 !== e.browser && void 0 !== e.browser.cookie_domain && A("domainIsReceived", e.browser.cookie_domain), e.tbc && e.tbc.cookie_domain && A("domainIsReceived", e.tbc.cookie_domain); }, getCurrentDomainFromCookie: function (e) { try {
            return JSON.parse(V(e)).domain;
        }
        catch (e) {
            T("domainIsReceived");
        } }, isBot: G, getAffiliateToken: function (e) { var n = window.location.hash.slice(1); if (n) {
            var t = n.split("="), r = t[0], o = t[1];
            r && o && r === e && (y((function (e) { return e.split("#")[0]; })), s = o);
        } return s; }, removeAffiliateToken: function () { s = ""; } }; };
    pn.container.register("util", { useValue: Ce() }), pn.util = pn.container.resolve("util");
    var Ie = function () { var e, n = pn.container.resolve("jqUtils"), t = pn.container.resolve("util"), r = pn.container.resolve("ajax"), o = t.findCookieByName(/__TP_*/); if (void 0 !== window._tpm && void 0 !== window._tpm.paywallID) {
        var i = window._tpm.paywallID;
        e = t.__protected__.getCookie("umc_" + i);
    } var a = function () { return pn.getApiEndpoint(); }, s = function (n, r) { var i = t.__protected__.getCookie("__tac"); void 0 !== n && n || (n = {}), n.aid = pn.aid, e && (n.umc = e), o && (n.tp_access_token_v2 = o), i && (n.tac = i), n.user_provider || !r || r.isv || (n.user_provider = r.getName()), void 0 !== n.user_token && n.user_token || !r || r.isv || (n.user_token = "string" == typeof r.getToken() ? r.getToken() : ""); var a = t.getAffiliateToken(pn.affiliateTokenName); a && (n.affiliateToken = a); }; function c(e, o, i, c, l, u) { var d; t.debug("Calling API method: " + e), d = void 0 !== c ? c : a(), d += e, void 0 !== o && o || (o = {}); var p, f, m = t.getTbcCookie(); m && (o.tbc = m), pn.user && (p = pn.user.getProvider()), s(o, p), f = function (e) { t.debug("API Response", e), t.setTbcCookieFromResponse(e), t.setAppTimezoneOffsetFromResponse(e), t.setCurrentDomainFromResponse(e), void 0 !== i && i(e); }; var g = function (e) { var n = "/access/list", t = "/access/check"; if (e !== n && e !== t && "/user/access/list" !== e && "/user/access/check.jwt" !== e)
        return null; var r = Math.floor((new Date).getTime() / 1e3); return e === n ? { code: 0, count: 0, data: [], limit: 0, offset: 0, total: 0, ts: r } : e === t ? { code: 0, ts: 1548942314, access: { access_id: null, parent_access_id: null, granted: !1, resource: null, user: null, expire_date: r } } : { code: 403, ts: r, message: "User doesn't have permission to call this method" }; }(e); if (null === g || pn.user.getProvider().isUserValid()) {
        var v;
        !function (e) { pn.isDoubleOptInCheckOnAccessCheckEnabled && "/access/check" === e && pn.doubleOptIn.check(); }(e);
        var h = { dataType: "jsonp" };
        if (u) {
            var w = o.aid;
            delete o.aid, v = "aid=" + w, Object.assign(h, { type: "POST", dataType: "json", data: o });
        }
        else
            o.callApiJsonp = !0, v = n.param(o);
        d += "?" + v, h.url = d, l && (h.async = !1), h.success = function (e) { f(e); }, h.error = function (e) { var n = { code: 503, message: "Error: Received error when requesting API response from URL: " + d }; t.log(n.message), f(n); }, r.request(h);
    }
    else
        f(g); } return { name: "api", callApi: function (e, n, t, r, o, i) { return c(e, n, t, r, o, i); }, getEndpoint: function () { return a(); }, getCallParams: function (e, n) { return s(e, n); } }; }();
    pn.container.register("api", { useValue: Ie }), pn.api = pn.container.resolve("api");
    var Se = function () { var e, n, t, r, o, i, a, s, c, l, u, d = pn.container.resolve("jqUtils"), p = pn.container.resolve("util"), f = {}, m = {}, g = [], v = {}, h = (e = {}, i = 1, a = window, s = !1, l = "addEventListener", u = a[c = "postMessage"], e[c] = function (e, n, t) { n && (e = "string" == typeof e ? e : d.param(e), t = t || parent, u ? t[c](e, n.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : n && (t.location = n.replace(/#.*$/, "") + "#" + +new Date + i++ + "&" + e)); }, e.receiveMessage = o = function (e, i, c) { u ? (e && (r && o(), r = function (n) { if ("string" == typeof i && n.origin !== i || d.isFunction(i) && i(n.origin) === s)
        return s; e(n); }), a[l] ? a[e ? l : "removeEventListener"]("message", r, s) : a[e ? "attachEvent" : "detachEvent"]("onmessage", r)) : (n && clearInterval(n), n = null, e && (c = "number" == typeof i ? i : "number" == typeof c ? c : 100, n = setInterval((function () { var n = document.location.hash, r = /^#?\d+&/; n !== t && r.test(n) && (t = n, e({ data: n.replace(r, "") })); }), c))); }, e); var w = function (e, n, t) { t && _(t) && !(t in m) ? p.error("Cannot send message to unmanaged iframe: " + t) : t && m[t].element && ("popup" === m[t].config.displayMode || "popup" !== m[t].config.displayMode && m[t].element.contentWindow ? y(e, n, t) : (g.push({ event: e, params: n, recipient: t }), d.on(m[t].element, "load", function (e) { return function () { var n = g.filter((function (n) { return n.recipient === e; })); g = g.filter((function (n) { return n.recipient !== e; })); for (var t = n.length; t--;) {
        var r = n.pop();
        y(r.event, r.params, r.recipient);
    } }; }(t)))); }, y = function (e, n, t) { var r, o = {}, i = "popup" === m[t].config.displayMode ? "opener" : "parent"; o.sender = _(t) ? i : t, o.recipient = _(t) ? t : i, o.event = e, o.params = n; var a = m[t].element; r = "popup" === m[t].config.displayMode ? m[t].container : a && a.contentWindow ? a.contentWindow : a && "[object Window]" === a.toString() ? m[t].element : window[i], h.postMessage(JSON.stringify(o), f[t].postMessageUrl, r); }; var b = function (e) { f[e.iframeId] = { iframeConfig: null, receive: null, postMessageUrl: null, initializedListener: !1, initializedKeystrokeHandler: !1 }, m[e.iframeId] = e; }, k = function (e) { return !(!f[e] || !f[e].iframeConfig); }, _ = function (e) { return !f[e] || !f[e].iframeConfig; }, C = function (e) { var n = I(e); return n.showCloseButton && "inline" !== n.displayMode; }, I = function (e) { var n = f[e], t = n && n.iframeConfig && n.iframeConfig.iframe; return t && t.config; }; function S(e) { var n, t, r, o, i, a, s = !1; try {
        n = JSON.parse(e.data);
    }
    catch (t) {
        try {
            r = e.data, i = {}, a = { true: !0, false: !1, null: null }, r.replace(/\+/g, " ").split("&").forEach((function (e, n) { var t = n.split("="), r = ""; try {
                r = decodeURIComponent(t[0]);
            }
            catch (e) {
                return;
            } var s, c = i, l = 0, u = r.split("]["), d = u.length - 1; if (/\[/.test(u[0]) && /\]$/.test(u[d]) ? (u[d] = u[d].replace(/\]$/, ""), d = (u = u.shift().split("[").concat(u)).length - 1) : d = 0, 2 === t.length)
                if (s = decodeURIComponent(t[1]), o && (s = s && !isNaN(s) ? +s : "undefined" === s ? void 0 : void 0 !== a[s] ? a[s] : s), d)
                    for (; l <= d; l++)
                        c = c[r = "" === u[l] ? c.length : u[l]] = l < d ? c[r] || (u[l + 1] && isNaN(u[l + 1]) ? {} : []) : s;
                else
                    Array.isArray(i[r]) ? i[r].push(s) : void 0 !== i[r] ? i[r] = [i[r], s] : i[r] = s;
            else
                r && (i[r] = o ? void 0 : ""); })), (n = i) && (s = !0);
        }
        catch (n) {
            return void p.debug("Error parsing postMessage: " + e.data);
        }
    } if (x(n), s) {
        var c;
        for (var l in m)
            (t = m[l]).config.isCurtain && (c = !0, t.config.parent && f[t.config.parent].receive && f[t.config.parent].receive(n), f[l].receive && f[l].receive(n));
        c || p.debug("Error parsing postMessage: " + e.data);
    }
    else if (!_(n.sender) || n.sender && n.sender in m) {
        if (p.debug((k(n.sender) ? "iframe(" + n.recipient : "the parent") + ") received event '" + n.event + "' from iframe(" + n.sender + ")", n), f[n.sender].receive && f[n.sender].receive(n), m[n.sender] && (t = m[n.sender]).config.parent && f[t.config.parent].receive) {
            n.sender = t.config.parent, f[t.config.parent].receive(n, !0);
        }
    }
    else
        p.debug("Received message from unmanaged iframe: " + n.sender); } var x = function (e) { (v[e.event] || []).forEach((function (n) { n(e); })); }; return { name: "postmessage", init: function (e, n) { if (b(e.iframe), e.postMessageUrl) {
            if (e.iframe.iframeId) {
                f[e.iframe.iframeId].initializedKeystrokeHandler || (f[e.iframe.iframeId].initializedKeystrokeHandler = !0, d.delegate(window, "#" + e.iframe.iframeId, "keyup", (function (e) { return function (e) { 27 === e.keyCode && k(e.data.iframeId) && C(e.data.iframeId) && w("close", null, e.data.iframeId); }(e); }))), f[e.iframe.iframeId].postMessageUrl = e.postMessageUrl, f[e.iframe.iframeId].initializedListener || (f[e.iframe.iframeId].initializedListener = !0, f[e.iframe.iframeId].receive = e.receive, h.receiveMessage(S)), f[e.iframe.iframeId].iframeConfig = e;
                var t = n || {};
                t.height = document.documentElement.offsetHeight, t.width = e.iframeParams && e.iframeParams.width ? e.iframeParams.width : document.documentElement.offsetWidth, w("loaded", t, e.iframe.iframeId);
            }
        }
        else
            p.error("Must specify postMessageUrl to send and receive postMessages"); }, __protected__: { isIframeManaged: function (e) { var n = m[e]; return n && _(n); } }, send: w, removeIframe: function (e) { delete m[e], delete f[e]; }, broadcast: function (e, n, t) { for (var r in m)
            m.hasOwnProperty(r) && r === t || w(e, n, r); }, subscribe: function (e, n) { v[e] = v[e] || [], v[e].push(n); }, unsubscribe: function (e, n) { v[e] instanceof Array && (v[e] = v[e].filter((function (e) { return e !== n; }))); } }; }();
    pn.container.register("postmessage", { useValue: Se }), pn.postmessage = pn.container.resolve("postmessage");
    var xe = function () { var e = pn.container.resolve("jqUtils"), n = pn.container.resolve("util"), t = pn.container.resolve("postmessage"); return { name: "eventUtils", createEventManager: function (r) { var o, i = {}; for (o = 0; o < r.length; o++)
            i[r[o]] = []; var a = { addEvent: function (e) { void 0 === i[e] && (i[e] = []); }, hasIframeCallback: function (e, n) { var t, r; if (i[e] && i[e].length > 0)
                for (r = 0, t = null; r < i[e].length; ++r)
                    if ("object" == typeof (t = i[e][r]) && n === t.iframeId)
                        return !0; return !1; }, hasCallback: function (e) { return i[e] && i[e].length > 0; }, registerCallback: function (e, t) { var r, o, a, s = "string" == typeof e ? e : null, c = "object" == typeof e ? e : null; if (s) {
                if (r = "function" == typeof t ? t : null, void 0 === i[s])
                    return;
                i[s].push(r);
            } if (c)
                for (a in o = "string" == typeof t ? t : null, i)
                    "function" == typeof c[a] && (n.debug("Registering " + a + " callback for iframe " + o), i[a].push({ iframeId: o, callback: c[a] })); }, fireCallbacks: function (e, n, t, r) { return a.fire(t, e, r, n); }, fire: function (r, o, a, s, c, l) { var u, d, p, f = !1, m = []; s && m.push(s), c && m.push(c), l && m.push(l); var g = s && s.resultCallbackId, v = function (t) { if (a)
                try {
                    if (m.length > 1)
                        return d.apply(null, m);
                    if ("loginRequired" === o) {
                        var i = e.deepExtend({}, t.term);
                        return delete t.term, d(t, r, i);
                    }
                    return d(t, r);
                }
                catch (e) {
                    n.debug(e);
                } }; if (void 0 !== i[o]) {
                for (p = 0, u = null, d = null; p < i[o].length; ++p) {
                    if ("function" == typeof (d = i[o][p]))
                        n.debug("firing callback for event '" + o + "' from iframe(" + r + ")"), u = v(s), f = !0;
                    else if ("object" == typeof d) {
                        if (r !== d.iframeId)
                            continue;
                        n.debug("firing callback for event '" + o + "' from iframe(" + r + ")"), d = d.callback, u = v(s), f = !0;
                    }
                    g && (s.result = u, s.event = o, t.send("resultCallback", s, r));
                }
                return !f && g && (s.callbackNotFound = !0, s.event = o, t.send("resultCallback", s, r)), u;
            } }, fireCallbacksAndStopOnFirstFalse: function (e, t, r, o) { for (var a = [], s = 4; s < arguments.length; s++)
                a[s - 4] = arguments[s]; if (void 0 === i[e])
                return !0; for (var c = !0, l = 0; l < i[e].length; l++) {
                var u = i[e][l];
                if ("function" == typeof u) {
                    n.debug("firing callback for event '" + e + "'");
                    try {
                        var d = [];
                        if (d.push(t), d.push(r), d.push(o), d = d.concat([].slice.call(a)), !1 === u.apply(null, d)) {
                            n.debug("callback for event '" + e + "' returned false"), c = !1;
                            break;
                        }
                    }
                    catch (t) {
                        n.debug("firing callback for event '" + e + "' failed", t);
                    }
                }
            } return c; } }; return a; } }; }();
    pn.container.register("eventUtils", { useValue: xe }), pn.eventUtils = pn.container.resolve("eventUtils");
    var Pe = function () { var e = pn.container.resolve("util"), n = pn.container.resolve("api"), t = pn.container.resolve("eventUtils"), r = pn.container.resolve("localStorage"), o = t.createEventManager(["userChanged", "logout"]), i = "janrain", a = function () { return e.getUserTokenCookie(); }, s = function () { var e = a(); return !!(void 0 !== e && e && e.length >= 0); }, c = !1, l = !1, u = { onCaptureSessionCreated: [] }, d = { loginRequiredScreen: "signIn", appName: null, appId: null, clientId: null, settings: null, disableLogout: !1, startCapture: !1 }, p = { register: "traditionalRegistration", login: "signIn" }; var f = function (e) { return e && p.hasOwnProperty(e.startScreen) ? p[e.startScreen] : d.loginRequiredScreen; }; var m = function () { d.disableLogout || e.setAccessTokenListCookie(void 0, void 0, !0); }, g = !0, v = function () { var e = window.janrain; return e && e.capture && e.capture.ui && e.capture.ui.hasActiveSession(); }; function h() { e.log("JANRAIN:", "Processing janrain user"), g ? g = !1 : e.startCall("refreshUserToken"), e.log("JANRAIN:", "hasActiveSession:" + v()); var t = w(); if (!v())
        return e.log("JANRAIN:", "No token found.  Done processing user"), m(), void e.doneCall("refreshUserToken"); if (s())
        return e.log("JANRAIN:", "Using __ut.  Done processing user"), void e.doneCall("refreshUserToken"); var r = { janrain_capture_token: t, url: e.prepareUrlParameter(window.location.href) }; n.callApi("/anon/janrain/verifyAccountInfo", r, (function (n) { if (n && n.access)
        try {
            e.log("JANRAIN:", "Verify success.  Done processing user"), e.setAccessTokenListCookie(n.access.access_token, n.access.user_token);
            var t = { access_token: n.access.access_token, user_token: n.access.user_token };
            n.access.user && (t.user = { uid: n.access.user.uid, email: n.access.user.email, firstName: n.access.user.first_name, lastName: n.access.user.last_name, valid: n.access.user.valid }), function (e, n) { if (void 0 !== u[e] && 0 !== u[e].length)
                for (var t = 0; t < u[e].length; ++t)
                    u[e][t].apply(null, arguments); }("onCaptureSessionCreated", t), o.fireCallbacks("userChanged", t, void 0, !0);
        }
        finally {
            e.doneCall("refreshUserToken");
        }
    else
        e.log("JANRAIN:", "Verify failed"); })); } var w = function () { return r.get("janrainCaptureToken"); }, y = function () { var n = window.janrain; n.events.onProviderLogoutComplete.addHandler((function () { m(); })), n.events.onCaptureSessionEnded.addHandler((function (n) { e.log("JANRAIN: Events received for logout", n), m(); })), b(); }, b = function () { if (v())
        return e.log("JANRAIN:", "Found early active session via function"), void h(); if (!v() && !s() && !w())
        return e.log("JANRAIN:", "not found __ut cookie and janrain token"), void h(); var n = !1, t = window.janrain; t.events.onCaptureSessionFound.addHandler((function (t) { k() ? n && (e.log("JANRAIN: Events received for logged in user", t), h()) : h(); })), t.events.onCaptureSessionNotFound.addHandler((function (t) { k() ? n && (e.log("JANRAIN: Events received for logged out user", t), h()) : h(); })), t.events.onCaptureFederateNoLogin.addHandler((function (e) { n = e; })), t.events.onCaptureFederateLogin.addHandler((function (n) { e.log("JANRAIN: Events received for SSO login", n), h(); })); }, k = function () { var e = window.janrain; return e && e.settings && e.settings.capture && e.settings.capture.federate; }; function _(e, n) { if (!c)
        throw "Janrain is not configured"; var t = 0; !function r() { var o = window.janrain; if (l)
        o.events[e].addHandler((function (e) { n(e); }));
    else {
        if (t > 100)
            throw "Janrain is not initialized";
        t++, window.setTimeout(r, 100);
    } }(); } return { name: i, isv: !1, init: function (n) { if (!c) {
            if (!n.appName || !n.appId || !n.clientId)
                throw "Must specify appName, appId, and clientId to initialize janrain";
            for (var t in d)
                void 0 !== n[t] && (d[t] = n[t]);
            if (n.settings && (d.settings = n.settings), n.loginRequiredScreen && (d.loginRequiredScreen = n.loginRequiredScreen), d.settings) {
                "object" != typeof window.janrain && (window.janrain = {}), "object" != typeof window.janrain.settings && (window.janrain.settings = {});
                var r = window.janrain;
                r.settings = d.settings, "object" != typeof window.janrain.settings.capture && (window.janrain.settings.capture = {}), r.settings.appUrl = "https://" + d.appName + ".rpxnow.com", r.settings.capture.captureServer = "https://" + d.appName + ".janraincapture.com", r.settings.capture.appId = d.appId, r.settings.capture.clientId = d.clientId;
                var o, i = d.appName.replace(/\./g, "-"), a = "http://widget-cdn.rpxnow.com/load/" + i, s = "https://rpxnow.com/load/" + i;
                o = e.__protected__.isHttpsProtocol() ? s : a, pn.push(["addExternalLibrary", o, function () { r.ready = !0; }]);
            }
            e.log("JANRAIN:", "start refresh user token"), e.startCall("refreshUserToken", 3e4), e.waitCall("refreshUserToken", (function () { e.log("JANRAIN:", "end refresh user token"); })), function () { var n = 100, t = 0; function r() { var o = window.janrain; if (window.janrain && window.janrain.ready && window.janrain.capture && window.janrain.capture.ui && window.janrain.capture.ui.hasActiveSession)
                !function () { var n = window.janrain, t = function (t) { n.events[t].addHandler((function () { for (var n = [], r = 0; r < arguments.length; r++)
                    n[r] = arguments[r]; e.log("JANRAIN: ", t, n); })); }; pn.debug && n.events.captureEvents.forEach(t); }(), y(), d.startCapture && o.capture.ui.start(), l = !0;
            else {
                if (t > n)
                    throw "Janrain is not initialized";
                t++, window.setTimeout(r, 100);
            } } r(); }(), c = !0, pn.zIndexes = { backdrop: 900, modal: 950, close: 990 };
            var u = function (n) { e.log("JANRAIN: onLogin"), window.janrain.capture.ui.modal.close(), h(); };
            _("onCaptureLoginSuccess", u), _("onCaptureRegistrationSuccess", u);
        } }, isUserValid: s, getToken: a, getName: function () { return i; }, onLoginSuccess: function (n) { e.setAccessTokenListCookie({ value: n.token_list, cookie_domain: n.cookie_domain }, n.user_token); }, login: function (e, n) { if (!c)
            throw "Janrain is not configured"; var t = 0, r = function () { if (l)
            try {
                window.janrain.capture.ui.renderScreen(f(n)), "function" == typeof e && function (e, n) { u[e] = [], u[e].push(n); }("onCaptureSessionCreated", e);
            }
            catch (e) {
                return t++, void window.setTimeout(r, 100);
            }
        else {
            if (t > 100)
                throw "Janrain is not initialized";
            t++, window.setTimeout(r, 100);
        } }; r(); }, logout: function (e) { if (!c)
            throw "Janrain is not configured"; var n = 0, t = 0; function r() { t > 100 ? e() : v() ? (t++, window.setTimeout(r, 100)) : e(); } m(), function t() { if (l) {
            var i = window.janrain;
            i.capture.ui.modal.close(), i.capture.ui.endCaptureSession(), o.fireCallbacks("logout", null, void 0, !0), e && r();
        }
        else {
            if (n > 100)
                throw "Janrain is not initialized";
            n++, window.setTimeout(t, 100);
        } }(); }, isConfigured: function () { return c; }, getLoginRequiredScreen: f, addEventHandler: _, registerCallback: function (e, n) { o.addEvent(e), o.registerCallback(e, (function (e) { n(e); })); } }; }();
    pn.container.register("janrain", { useValue: Pe }), pn.janrain = pn.container.resolve("janrain");
    var Ee = { name: "sha1", hash: function (e, n) { function t(e, n) { return e << n | e >>> 32 - n; } function r(e) { var n, t = ""; for (n = 7; n >= 0; n--)
            t += (e >>> 4 * n & 15).toString(16); return t; } var o, i, a; n = n || 32; var s, c, l, u, d, p, f = new Array(80), m = 1732584193, g = 4023233417, v = 2562383102, h = 271733878, w = 3285377520, y = (e = function (e) { e = e.replace(/\r\n/g, "\n"); for (var n = "", t = 0; t < e.length; t++) {
            var r = e.charCodeAt(t);
            r < 128 ? n += String.fromCharCode(r) : r > 127 && r < 2048 ? (n += String.fromCharCode(r >> 6 | 192), n += String.fromCharCode(63 & r | 128)) : (n += String.fromCharCode(r >> 12 | 224), n += String.fromCharCode(r >> 6 & 63 | 128), n += String.fromCharCode(63 & r | 128));
        } return n; }(e)).length, b = new Array; for (i = 0; i < y - 3; i += 4)
            a = e.charCodeAt(i) << 24 | e.charCodeAt(i + 1) << 16 | e.charCodeAt(i + 2) << 8 | e.charCodeAt(i + 3), b.push(a); switch (y % 4) {
            case 0:
                i = 2147483648;
                break;
            case 1:
                i = e.charCodeAt(y - 1) << 24 | 8388608;
                break;
            case 2:
                i = e.charCodeAt(y - 2) << 24 | e.charCodeAt(y - 1) << 16 | 32768;
                break;
            case 3: i = e.charCodeAt(y - 3) << 24 | e.charCodeAt(y - 2) << 16 | e.charCodeAt(y - 1) << 8 | 128;
        } for (b.push(i); b.length % 16 != 14;)
            b.push(0); for (b.push(y >>> 29), b.push(y << 3 & 4294967295), o = 0; o < b.length; o += 16) {
            for (i = 0; i < 16; i++)
                f[i] = b[o + i];
            for (i = 16; i <= 79; i++)
                f[i] = t(f[i - 3] ^ f[i - 8] ^ f[i - 14] ^ f[i - 16], 1);
            for (s = m, c = g, l = v, u = h, d = w, i = 0; i <= 19; i++)
                p = t(s, 5) + (c & l | ~c & u) + d + f[i] + 1518500249 & 4294967295, d = u, u = l, l = t(c, 30), c = s, s = p;
            for (i = 20; i <= 39; i++)
                p = t(s, 5) + (c ^ l ^ u) + d + f[i] + 1859775393 & 4294967295, d = u, u = l, l = t(c, 30), c = s, s = p;
            for (i = 40; i <= 59; i++)
                p = t(s, 5) + (c & l | c & u | l & u) + d + f[i] + 2400959708 & 4294967295, d = u, u = l, l = t(c, 30), c = s, s = p;
            for (i = 60; i <= 79; i++)
                p = t(s, 5) + (c ^ l ^ u) + d + f[i] + 3395469782 & 4294967295, d = u, u = l, l = t(c, 30), c = s, s = p;
            m = m + s & 4294967295, g = g + c & 4294967295, v = v + l & 4294967295, h = h + u & 4294967295, w = w + d & 4294967295;
        } return (p = r(m) + r(g) + r(v) + r(h) + r(w)).toLowerCase().slice(0, n); } };
    pn.sha1 = Ee, pn.container.register("sha1", { useValue: Ee });
    var Te = function () { function e(e, n) { this._isActive = !1, this.targets = [], this.timeout = 200, this.util = n, this.callback = e; } return e.prototype._mutationSearch = function () { var e = this; this.targets.forEach((function (n) { var t = e._getState(n.element); !t === n.currentState && (n.currentState = t, e.callback([{ target: n.element }])); })), this._isActive && setTimeout(this._mutationSearch.bind(this), this.timeout); }, e.prototype._getState = function (e) { var n = [].slice.call(e.attributes).reduce((function (n, t) { return n[t.name] = e.getAttribute(t.name), n; }), {}); return JSON.stringify(n); }, e.prototype.observe = function (e) { this.targets.push({ id: this.util.randomString(), element: e, currentState: this._getState(e) }), this._isActive || (this._isActive = !0, this._mutationSearch()); }, e.prototype.disconnect = function () { this._isActive = !1, this.targets = []; }, e; }(), Ae = function () { pn.container.resolve("jqUtils"); var e = pn.container.resolve("util"), n = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, t = { attributes: !0 }; return { name: "observer", create: function (r, o) { r || e.error("element must be NODE"); var i = new (n || Te)((function (e) { var n = e.map((function (e) { return e.target; })); return "function" == typeof o && o(n); }), e); return i.observe(r, t), i; } }; }();
    pn.container.register("observer", { useValue: Ae }), pn.observer = pn.container.resolve("observer");
    var Me = function () { var e, n, t = pn.container.resolve("jqUtils"), r = pn.container.resolve("util"), o = pn.container.resolve("postmessage"), i = pn.container.resolve("eventUtils"), a = pn.container.resolve("sha1"), s = {}, c = {}, l = i.createEventManager(["close"]), u = "tp-container-inner", d = new Map, p = [], f = "frozen-mobile-body", m = { _initialScrollPosition: { x: 0, y: 0 }, applyFix: function () { var e = window.visualViewport ? Math.max(window.scrollY, document.documentElement.scrollTop, window.visualViewport.pageTop) : Math.max(window.scrollY, document.documentElement.scrollTop), t = pn.dontScrollTopModal ? e : 0; this.saveInitialScroll(window.scrollX, e), n && (pn.dontScrollTopModal ? (document.body.style.touchAction = "none", document.documentElement.style.touchAction = "none", this.addEvents("scroll"), this.addEvents("touchmove")) : (v(), g(0, 0)), setTimeout((function () { var e = { overscrollBehavior: "contain", position: "absolute", top: t + "px", height: "100%", width: "100%", overflowX: "unset", overflowY: "scroll" }; Object.keys(e).forEach((function (t) { n.style[t] = e[t]; })), n.scrollHeight > document.documentElement.clientHeight && n.classList.add("tp-modal__margin-100"); }), 500)); }, addEvents: function (e) { document.body.addEventListener(e, this.scrollRevert, { passive: !1 }), document.addEventListener(e, this.scrollRevert, { passive: !1 }); }, removeEvents: function (e) { document.body.removeEventListener(e, this.scrollRevert, !1), document.removeEventListener(e, this.scrollRevert, !1); }, removeFix: function () { document.querySelectorAll(".tp-iframe-wrapper.tp-active").length || (pn.dontScrollTopModal ? (document.body.style.removeProperty("touch-action"), document.documentElement.style.removeProperty("touch-action"), this.removeEvents("scroll"), this.removeEvents("touchmove")) : (h(), this._scrollBack())); }, _scrollBack: function () { (this._initialScrollPosition.y || this._initialScrollPosition.x) && g(this._initialScrollPosition.x, this._initialScrollPosition.y); }, scrollRevert: function (e) { var n = e || window.event; return n.preventDefault && n.cancelable && n.preventDefault(), m._scrollBack(), !1; }, saveInitialScroll: function (e, n) { this._initialScrollPosition.x = e, this._initialScrollPosition.y = n; }, modalOpened: function () { this.applyFix(); }, modalClosed: function () { this.removeFix(); } }, g = function (e, n) { function t(e) { return /\{\s*\[native code\]\s*\}/.test("" + e); } try {
        if (t(window.scrollTo))
            return void window.scrollTo(e, n);
        if (t(window.scroll))
            return void window.scroll(e, n);
        document.body && (document.body.scrollTop = 0);
    }
    catch (e) {
        console.warn("Can not perform scroll: " + e.message);
    } }, v = function () { document.body.classList.contains(f) || document.body.classList.add(f); }, h = function () { document.body.classList.contains(f) && document.body.classList.remove(f); }; t.on(window, "resize", (function () { var e; if (q(), r.isAndroid()) {
        var n = null === (e = document.querySelector(".tp-iframe-wrapper.tp-active")) || void 0 === e ? void 0 : e.closest(".tp-modal");
        n && n.scrollBy(0, 1);
    } })), r.isIOS() && t.on(window, "orientationchange", (function () { setTimeout((function () { return q(); }), 100); })), o.subscribe("close", (function () { m.modalClosed(); })), o.subscribe("toggleIframeShadow", (function (e) { b(e.params.isEnabled); })), o.subscribe("toggleLoadingContainer", (function (e) { if (e.params.isEnabled)
        return J(); G(); })); var w, y, b = function (e) { var n = document.querySelector(".tp-iframe-wrapper"); if (n)
        return e ? n.classList.contains("no-shadow") && n.classList.remove("no-shadow") : void n.classList.add("no-shadow"); }, k = function (e) { !function (e) { o.send("checkProccessesForClose", {}, e.iframeId); }(e), "popup" === e.config.displayMode ? e.container.close() : function (e) { if (r.debug("Removing iframe", e), e.element && (t.hide(e.element), "inline" === e.config.displayMode)) {
        var n = e.element.parentElement;
        n && t.hide(n);
    } e.resizeObserver && e.resizeObserver.disconnect(), "modal" !== e.config.displayMode && "inline" !== e.config.displayMode || (e.waitFinishProcesses = !0); }(e); }, _ = function () { for (var e in s) {
        var n = s[e];
        if ("modal" === n.config.displayMode && !n.waitFinishProcesses && !n.config.isPreload)
            return !0;
    } return !1; }, C = function (e) { return s[e]; }, I = function () { function e(e, n, t) { this.$ = e, this._operationWithContainer = t, this.util = n, this._initModalContainer(), this.iOSBottomToolbarHeight = 90; } return e.prototype._initModalContainer = function () { var e = this; return this.container || (this.container = document.createElement("div"), this.element = this.container, this.$.addClass("tp-modal", this.container), this.close = document.createElement("button"), this.$.setAttr("type", "button", this.close), this.$.setAttr("aria-label", "Close", this.close), this.$.addClass("tp-close", this.close), this.iframeWrapper = document.createElement("div"), this.$.addClass("tp-iframe-wrapper", this.iframeWrapper), this.$.append(this.iframeWrapper, this.close), this.container.style.zIndex = pn.zIndexes.modal + "", this.close.style.zIndex = pn.zIndexes.close + "", this.$.on(this.close, "click", (function () { "function" == typeof e.closeClick && e.closeClick(); })), this.util.isIOS() && !this.util.isFBOrInstWebView() && (this.iframeWrapper.style.marginBottom = this.iOSBottomToolbarHeight + "px"), this.$.append(this.container, this.iframeWrapper), this._operationWithContainer("body", (function (n) { e.$.append(n, e.container); }))), this.container; }, e.prototype.getContainer = function (e, n) { return this._initModalContainer(), this.closeClick = n, void 0 === e && (e = !0), e ? this.showCloseButton() : this.hideCloseButton(), this.iframeWrapper; }, e.prototype.show = function (e) { this._initModalContainer(), void 0 === e && (e = !0), e ? this.showCloseButton() : this.hideCloseButton(), this.$.addClass("tp-active", this.container); }, e.prototype.hide = function () { this._initModalContainer(), this.$.removeClass("tp-active", this.container); }, e.prototype.showCloseButton = function () { this._initModalContainer(), this.$.addClass("tp-active", this.close); }, e.prototype.hideCloseButton = function () { this._initModalContainer(), this.$.removeClass("tp-active", this.close); }, e; }(), S = function (e, n, t) { for (var o in r.debug("Search container to close", e, n, t), s) {
        var i = s[o];
        e && o !== e || (t && "inline" === i.config.displayMode || t && i.config.isPreload || (k(i), "modal" === i.config.displayMode && x(i)));
    } l.fireCallbacks("close", null, e, !0); }, x = function (e) { var r = p.shift(); w && !r && t.removeClass("tp-active", w), e.iframeParams.shown = !1, t.removeClass("tp-active", e.container), r ? (t.hide(n), n = r, t.show(n)) : (P(), T()); }, P = function () { n && (L("body", (function (e) { t.addClass("tp-modal-close", e), t.removeClass("tp-modal-open", e), e.classList.contains("body-fixed") && t.removeClass("body-fixed", e); })), t.hide(n)); }, E = function (e, o, i) { if (function () { if (w)
        return w; var e = document.createElement("div"); t.addClass("tp-backdrop", e), e.style.zIndex = pn.zIndexes.backdrop + "", L("body", (function (n) { t.append(n, e); })), w = e; }(), t.visible(w)) {
        var a = t.qa(".tp-modal").find((function (e) { return t.visible(e); }));
        o && !i ? (a && (t.hide(a), p.unshift(a)), e && t.show(e)) : o && (a ? (e && p.push(e), n = a) : e && t.show(e));
    }
    else
        e && function (e) { t.visible(e) || (L("body", (function (e) { t.removeClass("tp-modal-close", e), t.addClass("tp-modal-open", e); })), t.show(e), (r.isIphone() || r.isSafariOrIOsUiWebView() || r.isAndroid()) && m.modalOpened()); }(e), t.show(w), y = window.setTimeout((function () { t.addClass("tp-active", w); }), 50); }, T = function () { w && (t.removeClass("tp-active", w), t.hide(w), clearTimeout(y)), m.modalClosed(); }, A = function (e) { w && (w.style.height = "100%"); var n = t.queryEl(".tp-close", e); n && t.removeClass("tp-square", n); }, M = function (e, n) { if (e) {
        z(e.element, n);
        var r = Object.assign({}, n, { animate: !1 });
        switch (e.config.displayMode) {
            case "modal":
                z(e.container, r), L("body", (function (e) { t.addClass("tp-modal-resizing", e), setTimeout((function () { t.removeClass("tp-modal-resizing", e); }), 50); }));
                break;
            case "inline":
                var o = t.queryEl(".tp-container-inner", e.container);
                o && z(o, n);
        }
    } }, O = function (e, r, o) { var i = e.container, a = i.parentElement; a && a.classList.contains("tp-modal") ? n = a : a = n, e.iframeParams = e.iframeParams || {}, e.iframeParams.shown || (e.iframeParams.shown = !0, E(a, r, o), o || (i.classList.contains("tp-active") || t.addClass("tp-active", i), A(i))); }, R = {}, L = function (e, n) { var r = t.queryEl(e); R[e] || (R[e] = 0), r ? (delete R[e], n(r)) : R[e] < 100 && (R[e] += 1, setTimeout((function () { L(e, n); }), 50)); }, N = function (e, o) { if (void 0 === e.showCloseButton && (e.showCloseButton = !0), e.container)
        return e.container; var i = new I(t, r, L); return e.isPreload || (n = i.element), i.getContainer(e.showCloseButton, o); }, U = function (e) { var n = { container: null, containerReady: !1 }; if (!e.iframeParams.containerSelector)
        return r.log("Inline offer must have a valid containerSelector"), n; if (n.container = e.singleContainer || t.queryEl(e.iframeParams.containerSelector), !n.container)
        return r.log("Invalid containerSelector"), n; var o = e.config, i = "object" == typeof o && null !== o; return t.empty(n.container), i ? !0 == !!o.preview || (e.iframeParams.width = t.getWidth(n.container)) : e.iframeParams.width = e.iframeParams.width || t.getWidth(n.container), n.containerReady = !0, n; }, j = function (e) { var n = t.winSize(), o = e.width ? e.width : n.width, i = e.height ? e.height : n.height, a = r.centerScreen(o, i); return { width: o, height: i, top: a.top, left: a.left }; }, D = function (e, n) { var t = j(e), o = window.open(n, r.randomString(16), "scrollbars=yes,location=yes,status=0,toolbar=0,resizable=1, width=" + t.width + ", height=" + t.height + ", top=" + t.top + ", left=" + t.left); return window.focus && o && o.focus(), o; }, F = 1, B = function (e, n, o) { var i = "iframe-" + F++ + "-" + r.randomString(); n.iframeId && (i = n.iframeId); var a = document.createElement("iframe"), s = { id: i, name: i, title: i, scrolling: "no", allowtransparency: "true", src: o, allow: "payment" }; Object.keys(s).forEach((function (e) { t.setAttr(e, s[e], a); })); var c = { overflow: "hidden", backgroundColor: "transparent", border: "0", width: "inline" === e.displayMode ? n.width + "px" : "0px", height: "0px" }; Object.keys(c).forEach((function (e) { a.style[e] = c[e]; })); try {
        t.setAttr("frameBorder", "0", a);
    }
    catch (e) {
        r.log(e);
    } return a; }, V = function (e, n) { var r = setInterval((function () { t.empty(e); }), 150); t.ready((function () { clearInterval(r), t.append(e, n); })); }, q = function () { for (var e in s) {
        var n = s[e];
        if (!n.config.preview && "inline" === n.config.displayMode && n.container && M(n, { width: t.getWidth(n.container) }), "modal" === n.config.displayMode && n.container) {
            var r = Math.max(document.documentElement.clientWidth, document.body.offsetWidth, document.documentElement.offsetWidth);
            o.send("RESIZE_MODAL_CHECKOUT", { iframe: n, width: r }, n.iframeId);
        }
    } }, z = function (e, n) { e && (void 0 !== n.width && (e.style.width = n.width + "px", (0 === n.width && !e.classList.contains("no-width") || 0 !== n.width && e.classList.contains("no-width")) && t.toggleClass("no-width", e)), void 0 !== n.height && (n.animate, e.style.height = n.height + "px", (0 === n.height && !e.classList.contains("no-height") || 0 !== n.height && e.classList.contains("no-height")) && t.toggleClass("no-height", e))); }, H = function (e) { var n = document.createElement("div"); return n.innerHTML = e.trim(), n.firstChild; }, W = function (e) { return void 0 === e && (e = ""), '<div class="tp-please-wait tp-active tp-overlap ' + e + '"><div class="tp-icon tp-centered"><div class="pn-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div></div>'; }, J = function () { e || (e = H(W())) && document.body.appendChild(e); }, G = function () { e && (document.body.removeChild(e), e = null); }; function Q(e) { if (e && e.container) {
        !function (e) { if (e && (null == e ? void 0 : e.container) && !d.has(e.iframeId)) {
            var n = H(W("tp-local-overlap"));
            n && (e.container.appendChild(n), d.set(e.iframeId, n));
        } }(e);
        e.container.addEventListener("load", (function () { !function (e) { if (e && (null == e ? void 0 : e.container) && d.has(e.iframeId)) {
            var n = d.get(e.iframeId);
            n && (e.container.removeChild(n), d.delete(e.iframeId));
        } }(e); }), { once: !0, capture: !0 });
    } } function X(e) { e && e.element && (function (e) { var n; if (!e)
        return !1; return !!(null === (n = null == e ? void 0 : e.element.getBoundingClientRect()) || void 0 === n ? void 0 : n.width); }(e) && Q(e), e.element.src = e.element.src); } function $() { for (var e in s) {
        var n = s[e];
        n && X(n);
    } } return { name: "containerUtils", fakeOfferId: "fakeOfferId", createContainer: function (e) { var n, i, d, p = !0, f = e.iframeParams; if ("inline" === f.displayMode || f.width || (f.width = window.innerWidth), i = e.config.buildQueryStringFn ? function (n) { return e.config.buildQueryStringFn(n, t); } : function (e) { var n = t.param(e); return n + "&_qh=" + a.hash(n, 10); }, "popup" === f.displayMode) {
            f.width || (f.width = window.innerWidth);
            var m = e.url + "?" + i(f);
            n = D(f, m);
            try {
                d = n.document;
            }
            catch (e) {
                try {
                    d = n;
                }
                catch (e) {
                    d = null, console.warn("Unable to get popup element");
                }
            }
            c[f.iframeId] = { container: n, interval: setInterval((function () { c[f.iframeId].container.closed && (clearInterval(c[f.iframeId].interval), c[f.iframeId].container.close(), e.onCloseCallback && e.onCloseCallback()); }), 100) };
        }
        else {
            if ("inline" === f.displayMode) {
                void 0 !== e.config.showCloseButton && delete e.config.showCloseButton;
                var g = U(e);
                n = g.container, p = !!g.containerReady;
            }
            else
                n = N(e.config, (function () { S(f.iframeId, e.parent); }));
            var v = e.url + "?" + i(f);
            d = B(e.config, f, v);
        } l.registerCallback(e, f.iframeId); var h = s[f.iframeId] = { iframeId: f.iframeId, config: e.config, element: d, container: n, iframeParams: f, containerReady: p }; if (o.init({ postMessageUrl: e.postMessageUrl, parent: e.parent, receive: e.receive, iframe: h, iframeParams: f }), t.on(document, "keyup", (function (e) { })), "modal" === f.displayMode)
            t.on(window, "resize", (function () { A(n); })), t.append(n, d);
        else if ("inline" === f.displayMode) {
            if (s[f.iframeId].containerReady) {
                var w = document.createElement("div");
                t.addClass(u, w), t.append(w, d), e.config.isPreload && t.hide(w), ("complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll) && n ? (t.empty(n), t.append(n, w)) : V(n, w);
            }
            else {
                var y = document.createElement("div");
                t.setAttr("id", "temp-inline-" + f.iframeId, y), t.hide(y), L("body", (function (e) { t.append(e, y); })), t.append(y, d);
            }
            if (window.ResizeObserver) {
                var b = new ResizeObserver((function (e) { var n = t.getWidth(h.container); n > 0 && M(h, { width: n }); }));
                b.observe(h.container), h.resizeObserver = b;
            }
        } return r.debug("creating iframe: ", e), h; }, showPreloadedContainer: function (e) { if ("modal" === e.config.displayMode) {
            if (_())
                return void r.log("Modal is already shown; must be one modal per time");
            !function (e) { (n = e.container.closest(".tp-modal")) ? n = n : r.error("there is no such modal container"), O(e, !0, !0); }(e);
        }
        else
            "inline" === e.config.displayMode ? function (e) { t.show(e.container); var n = t.queryEl(".tp-container-inner", e.container); n && t.show(n), M(e, { width: t.getWidth(e.container) }); }(e) : r.log("Unexpected displayMode of preloaded iframe\n"); return e.config.isPreload = !1, e.iframeParams.isPreload = !1, r.debug("show preloaded iframe: ", e.config), e; }, redirectContainer: function (e, n) { var r = n.url + "?" + t.param(n.iframeParams), i = s[e]; if ("popup" === i.config.displayMode)
            i.container.location = r;
        else {
            var a = i.element;
            (a.contentWindow || a).location = r;
        } i.config = n.config, o.init({ postMessageUrl: n.postMessageUrl, receive: n.receive, iframe: s[n.iframeParams.iframeId], iframeParams: n.iframeParams }); }, hasModalIframe: _, getIframe: C, generateIframe: B, generateIframeWrapper: function () { var e = document.createElement("div"), n = { overflow: "hidden", backgroundColor: "transparent", border: "0", width: "0px", height: "0px", position: "absolute", display: "block", top: "-1px", left: "-1px" }; return Object.keys(n).forEach((function (t) { e.style[t] = n[t]; })), e; }, getPopupPosition: j, generatePopup: D, initInlineContainer: U, getModalContainer: N, centerBackdrop: function (e) { if (w) {
            var n = t.winSize();
            e.offsetHeight > n.height ? w.style.height = n.height + "" : w.style.height = "100%";
        } }, showBackdrop: E, hideBackdrop: T, checkBackdropAndContainer: O, resizeIframe: M, centerIt: A, operationWithContainer: L, closeContainer: S, closeModalContainer: function (e, n) { S(e, n, !0); }, purgeIframe: function (e, n) { r.debug("Purging iframe", e); var i = s[e]; try {
            if (i.resizeObserver && i.resizeObserver.disconnect(), o.removeIframe(i.iframeId), t.remove(i.element), "inline" === i.config.displayMode) {
                var a = t.queryEl(".tp-container-inner", i.container);
                a && t.remove(a);
            }
        }
        catch (e) { } delete s[e]; }, hideModalContainer: function (e) { var n = []; for (var r in s) {
            var o = s[r];
            e && r !== e || "inline" !== o.config.displayMode && "modal" === o.config.displayMode && (x(o), t.hide(o.container), n.push(r));
        } return n; }, closeModal: x, hideCloseButton: function (e) { if (e) {
            var n = t.queryEl(".tp-close", e);
            n && n.classList.contains("tp-active") && t.removeClass("tp-active", n);
        } }, activateContainers: function (e) { if (e && e.length)
            for (var n in s)
                for (var r = s[n], o = 0; o < e.length; o++)
                    if (n === e[o]) {
                        var i = r.container, a = i.parentElement;
                        a && E(a), t.addClass("tp-active", i), t.show(i);
                    } }, showWaitPanel: J, hideWaitPanel: G, addClassToContainer: function (e, n) { t.addClass(n, e.container); }, turnOnRTL: function (e) { e.container && e.container.setAttribute && e.container.setAttribute("dir", "rtl"); }, turnOffRTL: function (e) { e.container && e.container.removeAttribute && e.container.removeAttribute("dir"); }, setIframesPopstateHandlers: function () { (r.isIphone() || r.isSafariOrIOsUiWebView()) && window.addEventListener("popstate", $); }, __protected__: { setElementSizes: z, closeInlineContainers: function (e) { Array.prototype.slice.call(document.querySelectorAll(e + " > ." + "tp-container-inner > iframe")).forEach((function (e) { var n, t; e.id && (n = e.id, (t = C(n)).config.child && S(t.config.child), S(n)); })); }, addChildToInlineIframe: function (e, n) { if (e) {
                var t = C(n);
                t && t.config && (t.config.child = e.iframeId);
            } }, closeAndRemoveIframe: k }, __private__: { mobileModalFix: m } }; }();
    pn.container.register("containerUtils", { useValue: Me }), pn.containerUtils = pn.container.resolve("containerUtils");
    var Oe = function (e) { void 0 === e && (e = pn.container); var n = e.resolve("ajax"), t = e.resolve("util"); e.resolve("postmessage").subscribe("iframeLogRequest", (function (e) { o(e.url, e.queryParams); })); var r = function (e) { var n = []; for (var t in e) {
        var r = e[t];
        n.push(encodeURIComponent(t) + "=" + encodeURIComponent("object" == typeof r ? JSON.stringify(r) : r));
    } return n.join("&"); }, o = function (e, o) { var i = r(o); t.isRelativeUrl(e.trim()) ? i.length > 6e3 ? n.request({ type: "POST", url: pn.getTrackingEndpoint() + e, data: i }) : n.request({ url: pn.getTrackingEndpoint() + e + "?" + i, dataType: "jsonp" }) : t.log("Url parameter is incorrect"); }, i = function (e, n, r, i, a) { e ? r ? n ? o("/api/v3/conversion/logEspMicroConversion", { tracking_id: e, esp_widget_id: n, event_type: i, event_group_id: r, custom_params: a || "" }) : t.log("Parameter espWidgetId is required to log esp micro conversion.") : t.log("Parameter eventGroupId is required to log esp micro conversion.") : t.log("Parameter trackingId is required to log esp micro conversion."); }, a = function (e, n, r, i, a, s, c, l) { var u = { tracking_id: e, term_id: n, term_name: r }; e ? n ? r ? (void 0 !== i && (u.step_number = i), void 0 !== a && (u.amount = a), void 0 !== s && (u.currency = s), void 0 !== c && (u.custom_params = c), void 0 !== l && (u.conversion_category = l), o("/api/v3/conversion/log", u)) : t.log("Parameter termName is required to log conversion.") : t.log("Parameter termId is required to log conversion.") : t.log("Parameter trackingId is required to log conversion."); }, s = function (e, o) { if (!(i = window.doNotTrack || window.navigator.doNotTrack || window.navigator.msDoNotTrack) || "1" !== i.charAt(0) && "yes" !== i) {
        var i, a, s = r(o), c = e + "?" + s;
        if (navigator.sendBeacon)
            if (c.length > 6e3) {
                var l = new Blob([s], { type: "application/x-www-form-urlencoded" });
                navigator.sendBeacon(e, l);
            }
            else
                navigator.sendBeacon(c);
        else
            (a = -1 !== navigator.appVersion.indexOf("MSIE 9") ? { dataType: "jsonp", url: c } : { type: "post", url: c, async: !1, xhrFields: { withCredentials: !0 } }).error = function () { for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n]; t.debug.apply(t, _e(["Beacon request has been failed"], e, !1)); }, n.request(a);
    } }; return { name: "log", logMicroConversion: function (e, n, r) { e ? n ? o("/api/v3/conversion/logMicroConversion", { tracking_id: e, event_group_id: n, custom_params: r || "" }) : t.log("Parameter eventGroupId is required to log micro conversion.") : t.log("Parameter trackingId is required to log micro conversion."); }, logConversion: function (e, n, t, r, o, i, s, c) { if ("object" == typeof e) {
            var l = e;
            a(l.tracking_id, l.term_id, l.term_name, l.step_number, l.amount, l.currency, l.custom_params, l.conversion_category);
        }
        else
            a(e, n, t, r, o, i, s, c); }, logFunnelStep: function (e, n, r, i) { e ? n ? r ? o("/api/v3/conversion/logFunnelStep", { tracking_id: e, step_number: n, step_name: r, custom_params: i || "" }) : t.log("Parameter stepName is required to log funnel step.") : t.log("Parameter stepNumber is required to log funnel step.") : t.log("Parameter trackingId is required to log funnel step."); }, logEspMicroConversion: i, logBeaconRequest: s, __protected__: { logCustomFormImpression: function (e, n, r) { n || t.log("Parameter formName is required to log impression."), r || t.log("Parameter source is required to log impression."); var i = { aid: pn.aid, pageview_id: pn.main.fetchPageViewId(), custom_form_name: n, custom_form_source: r }, a = pn.user.getProvider().getToken(); return a && (i.user_token = a), e && (i.tracking_id = e), o("/api/v3/customform/log/impression", i); }, logCustomFormSubmission: function (e, n, r) { n || t.log("Parameter formName is required to log submission."), r || t.log("Parameter source is required to log submission."); var i = { aid: pn.aid, pageview_id: pn.main.fetchPageViewId(), custom_form_name: n, custom_form_source: r }, a = pn.user.getProvider().getToken(); return a && (i.user_token = a), e && (i.tracking_id = e), o("/api/v3/customform/log/submission", i); }, logEspMicroConversion: i }, __private__: { doLog: o, logBeaconRequest: s } }; };
    pn.container.register("log", { useValue: Oe() }), pn.log = pn.container.resolve("log");
    var Re = function () { var e = pn.container.resolve("log"), n = pn.container.resolve("api"), t = { completeInit: 0, expExec: 0, idShow: 0, myAccountShow: 0, offerShow: 0, templateShow: 0, tpAccShow: 0, track: 0 }; setTimeout((function () { r(); }), 1e4); var r = function (r) { if (Math.floor(500 * Math.random()) + 1 === 255) {
        var o = r || (pn.fullTPVersion ? "ts_c" : "ts_s"), i = { completeInit: t.completeInit, track: t.track, expExec: t.expExec, idShow: t.idShow, myAccountShow: t.myAccountShow, offerShow: t.offerShow, templateShow: t.templateShow, tpAccShow: t.tpAccShow, aid: pn.aid, type: o };
        e.logBeaconRequest(n.getEndpoint() + "/internal/anon/telemetry/ux/init/time/log", i);
    } }; return { name: "logging", setTime: function (e) { 0 === t[e] && (t[e] = Math.round(performance.now() - window.pnInitPerformance)); } }; }();
    pn.container.register("logging", { useValue: Re }), pn.logging = pn.container.resolve("logging");
    var Le;
    !function (e) { e.AUTO = "A", e.MANUAL = "M"; }(Le || (Le = {}));
    var Ne = function () { var e = pn.container.resolve("util"), n = pn.container.resolve("ajax"), t = pn.container.resolve("jqUtils"), r = pn.container.resolve("eventUtils"), o = function (e) { return Object.entries(e).reduce((function (e, n) { var t = n[0], r = n[1]; return (r || 0 === r) && (e[t] = r), e; }), {}); }, i = r.createEventManager([]), a = function (r, i, a) { return new Promise((function (s, c) { var l = a ? "?" + t.param(a) : "", u = pn.getExperienceEndpoint(!1) + "/" + pn.aid + r + l, d = o({ xbc: e.__protected__.getCookie("xbc") || void 0, tbc: e.getTbcCookie() || void 0 }), p = o(ye(ye({}, d), i)); if (!(p.cid && p.itemId && p.xbc)) {
        var f = "credit: Error: Required params are absent";
        e.debug(f), c({ code: 0, message: f });
    } n.request({ type: "post", url: u, data: ye(ye({}, d), i), xhrFields: { withCredentials: !0 }, error: function (n) { var t = "credit: Error: Received error:" + n.status + " " + n.responseText; e.debug(t), c({ code: n.status, message: n.responseText }); }, success: function (e) { s(e); } }); })); }, s = function (e, n, t, r) { var o = function (e) { return function (n) { return i.fire(void 0, e, !0, n), n; }; }, s = o("string" == typeof e ? e : e.success), c = o("string" == typeof e ? e : e.failure); return a(n, t, r).then(s).catch(c); }; return { redeem: function (e) { return s("manualCreditRedeemed", "/execution/credit/redeem", e); }, check: function (e) { return s("creditChecked", "/execution/credit/check", e); }, registerCallback: function (e, n) { i.addEvent(e), i.registerCallback(e, n); } }; }();
    pn.container.register("credit", { useValue: Ne }), pn.credit = pn.container.resolve("credit");
    var Ue = function () { var e, n = pn.container.resolve("postmessage"), t = pn.container.resolve("containerUtils"), r = pn.container.resolve("util"), o = pn.container.resolve("eventUtils"), i = pn.container.resolve("logging"), a = o.createEventManager(["resize", "loginSuccess", "logout"]), s = function () { return pn.getEndpointRoot(!0) + "/checkout/user/loginShow"; }; function c(o) { r.debug("Login event received", o.event, o.params, o); var i = !t.getIframe(o.sender).config.parent; switch (o.event) {
        case "loaded":
            e = !1;
            break;
        case "close":
            t.closeModalContainer(), a.fireCallbacks(o.event, o.params, o.sender, i);
            break;
        case "cancel":
        case "error":
        case "customEvent":
            a.fireCallbacks(o.event, o.params, o.sender, i);
            break;
        case "loginSuccess":
            !function (e, n, o, i) { var s = t.getIframe(o); r.setAccessTokenListCookie({ value: n.token_list, cookie_domain: n.cookie_domain }, n.user_token), s.config.userToken = n.user_token, s && s.config && s.config.loginSuccess && s.config.loginSuccess(n.event, n.params, n.sender); a.fireCallbacks(e, n, o, i), s && s.config && s.config.closeAfterSuccess && t.closeModalContainer(o); var c = { reloadAfterLogin: !0, userToken: n.user_token, user: n.user }; u(c); }(o.event, o.params, o.sender, i);
            break;
        case "logoutSuccess":
            !function (e, n, t, o) { a.fireCallbacks("logout", null, void 0, !0), r.setAccessTokenListCookie({ value: n.token_list, cookie_domain: n.cookie_domain }, n.user_token, !0); }(o.event, o.params, o.sender);
            break;
        case "readyToSubmitStats":
            var s = { pageViewId: pn.main.fetchPageViewId(), tbc: r.getTbcCookie() };
            n.send("submitStats", s, o.sender);
            break;
        default: return void r.debug("Received invalid event type: " + o.event);
    } } var l, u = function (e) { n.broadcast("reloadOffer", e); }; function d(e) { l && t.closeModalContainer(l); var n = {}; Object.assign(n, { closeAfterSuccess: !0 }, e), n.displayMode = "popup", n.width = 360, n.height = 660, n.state = n.state ? n.state : "login"; var o, i = function (e) { var n = {}; return ["displayMode", "aid", "width", "height", "state"].forEach((function (t) { e[t] && (n[t] = e[t]); })), n; }(n); i.iframeId = r.randomString(16), i.url = window.location.href, i.host_url = window.location.href, l = i.iframeId, function (e) { ["aid", "gaClientId", "tags", "contentSection", "contentAuthor"].forEach((function (n) { pn[n] && (e[n] = pn[n]); })), pn.contentCreated && (e.contentCreated = pn.contentCreated); }(i), i.user_provider = "tinypass_accounts", e.userToken && (i.user_token = e.userToken), r.getCampaigns(i); var u = { url: s(), config: n, postMessageUrl: s(), receive: c, iframeParams: i }; return n.iframeId ? (u.iframeParams.iframeId = n.iframeId, o = t.redirectContainer(n.iframeId, u)) : o = t.createContainer(u), a.registerCallback(n, i.iframeId), o; } return { name: "tinypassLogin", show: function (n) { if (e)
            return !1; e = !0, setTimeout((function () { e = !1; }), 1e4), d(n) || r.error("Could not initialize login; check configuration"), i.setTime("tpAccShow"); }, close: function () { t.closeModalContainer(); }, showBackdrop: function () { t.showBackdrop(); }, hideBackdrop: function () { t.hideBackdrop(); }, centerBackdrop: function (e) { t.centerBackdrop(e); }, registerCallback: function (e, n) { a.registerCallback(e, n); }, listenLogin: function (e) { !function (e) { a.registerCallback(e, e.iframeId); var t = { iframeId: e.iframeId, config: e, iframeParams: e }; n.init({ postMessageUrl: s(), receive: c, iframe: t, iframeParams: {} }); }(e); } }; }();
    pn.container.register("tinypassLogin", { useValue: Ue }), pn.tinypassLogin = pn.container.resolve("tinypassLogin");
    var je = function () { var e = pn.container.resolve("ajax"), n = pn.container.resolve("jqUtils"), t = pn.container.resolve("util"), r = pn.container.resolve("tinypassLogin"), o = pn.container.resolve("eventUtils").createEventManager(["logout"]), i = function () { return t.getUserTokenCookie() || null; }; return { name: "tinypassAccounts", isv: !1, isUserValid: function () { return !!t.getUserTokenCookie(); }, getToken: i, getName: function () { return "tinypass_accounts"; }, onLoginSuccess: function (e) { t.setAccessTokenListCookie({ value: e.token_list, cookie_domain: e.cookie_domain }, e.user_token); }, isConfigured: function () { return !0 === pn.useTinypassAccounts || "string" == typeof pn.useTinypassAccounts && "true" === pn.useTinypassAccounts; }, login: function (e) { return (e = e || {}).userToken = i(), r.show(e); }, logout: function (r) { var i = { aid: pn.aid, url: document.location.href }, a = pn.getEndpointRoot(!0) + "/checkout/user/logout?" + n.param(i); t.setAccessTokenListCookie({ value: null }, void 0, !0), e.request({ url: a, dataType: "jsonp", success: function (e) { t.setAccessTokenListCookie({ value: "", cookie_domain: e.models.cookie_domain }, e.models.user_token, !0), o.fireCallbacks("logout", null, void 0, !0), r && r(e); }, error: function (e) { t.setAccessTokenListCookie(null, void 0, !0), o.fireCallbacks("logout", null, void 0, !0), r && r(e); } }); }, registerCallback: function (e, n) { o.addEvent(e), o.registerCallback(e, n); } }; }();
    pn.container.register("tinypassAccounts", { useValue: je }), pn.tinypassAccounts = pn.container.resolve("tinypassAccounts");
    var De = function () { var e = pn.container.resolve("jqUtils"), n = pn.container.resolve("cookie"), t = pn.container.resolve("util"), r = pn.container.resolve("eventUtils").createEventManager(["logout"]); return { isv: !1, name: "condeUserProvider", getName: function () { return "conde"; }, isUserValid: function () { return !!t.getUserTokenCookie(); }, getToken: function () { var e = t.findCookieByName("amg_user_partner"); return void 0 !== e && e && e.length >= 0 ? e : null; }, onLoginSuccess: function (r) { t.setAccessTokenListCookie({ value: r.token_list, cookie_domain: r.cookie_domain }, r.user_token); var o = { path: "/", expires: 730 }; r.cookie_domain && "localhost" !== r.cookie_domain && e.inArray(r.cookie_domain, t.getPossibleCookieDomains()) >= 0 && (o.domain = r.cookie_domain), n.raw = !0, t.__protected__.setCookie(r.params.cookieName, r.params.cookieValue, o), t.__protected__.setCookie("amg_user_partner", r.params.externalId, o), t.__protected__.setCookie("amg_user_info", r.params.userName, o), t.__protected__.setCookie("amg_user_ext", r.params.siteUserId, o), r.params.updateToken && t.__protected__.setCookie("amg_user_update", r.params.updateToken, o), n.raw = !1; }, logout: function (e) { t.setAccessTokenListCookie({ value: null }, void 0, !0); var n = t.getPossibleCookieDomains(); for (var o in n)
            t.deleteCookie("amg_user", n[o]), t.deleteCookie("amg_user_partner", n[o]), t.deleteCookie("amg_user_info", n[o]), t.deleteCookie("amg_user_ext", n[o]), t.deleteCookie("amg_user_update", n[o]); t.deleteCookie("amg_user"), t.deleteCookie("amg_user_partner"), t.deleteCookie("amg_user_info"), t.deleteCookie("amg_user_ext"), t.deleteCookie("amg_user_update"), r.fireCallbacks("logout", null, void 0, !0), e && e(); }, isConfigured: function () { return !0 === pn.useCondeUserProvider || "string" == typeof pn.useCondeUserProvider && "true" === pn.useCondeUserProvider; }, registerCallback: function (e, n) { r.addEvent(e), r.registerCallback(e, n); } }; }();
    pn.container.register("condeUserProvider", { useValue: De }), pn.condeUserProvider = pn.container.resolve("condeUserProvider");
    var Fe = function () { var e = pn.container.resolve("util"), n = pn.container.resolve("api"), t = pn.container.resolve("eventUtils"), r = pn.container.resolve("jqUtils"), o = !1; var i = t.createEventManager(["userChanged", "onHide", "logout"]), a = { apiKey: null, screenSet: "Default-RegistrationLogin", startScreen: null, enabledProviders: null, lang: null }; function s() { var n = e.getUserTokenCookie(); if (n && e.findCookieByName("glt_" + a.apiKey) === e.findCookieByName("__utg_" + a.apiKey))
        return n; return null; } var c = []; function l(t, s) { if (!o)
        throw "Gigya is not configured"; d(); (e.findCookieByName("glt_" + a.apiKey) !== e.findCookieByName("__utg_" + a.apiKey) || t) && (c.push(s), 1 === c.length && window.gigya.accounts.getAccountInfo({ callback: function (t) { if (0 === t.errorCode) {
            var o = { uid: t.UID, signature: t.UIDSignature, signature_timestamp: t.signatureTimestamp, url: e.prepareUrlParameter(window.location.href) };
            e.startCall("refreshUserToken"), n.callApi("/anon/gigya/verifyAccountInfo", o, (function (n) { if (n && n.result) {
                e.setAccessTokenListCookie(n.result.access_token, n.result.user_token);
                var t = { path: "/", expires: 730 };
                if (n.result.access_token) {
                    var o = n.result.access_token.cookie_domain;
                    o && "localhost" !== o && r.inArray(o, e.getPossibleCookieDomains()) >= 0 && (t.domain = o);
                }
                var s = e.findCookieByName("glt_" + a.apiKey);
                e.__protected__.setCookie("__utg_" + a.apiKey, s, t);
                for (var l = 0; l < c.length; l++) {
                    var u = c[l];
                    u && u(n.result);
                }
                n.result.user && (n.result.user = { uid: n.result.user.uid, email: n.result.user.email, firstName: n.result.user.first_name, lastName: n.result.user.last_name, valid: n.result.user.valid }), i.fireCallbacks("userChanged", n.result, void 0, !0);
            }
            else
                e.log("Can't verify gigya user: may be the configuration of gigya user provider is invalid"), e.setAccessTokenListCookie(); c = [], e.doneCall("refreshUserToken"); }));
        }
        else
            e.setAccessTokenListCookie(), c = []; } })); } var u = !1; function d() { if (!window.gigya || !window.gigya.__initialized)
        throw "Gigya is not initialized"; } return { isv: !1, name: "gigya", init: function (n) { if (!o) {
            for (var t in n)
                void 0 !== n[t] && (a[t] = n[t]);
            if (!a.screenSet)
                throw "Gigya is not configured: screenSet parameter required";
            if (!a.apiKey)
                throw "Gigya is not configured: apiKey parameter required";
            d(), window.gigya.accounts.addEventHandlers({ onLogin: function () { u = !0, l(); }, onLogout: function () { e.setAccessTokenListCookie({ value: null }, void 0, !0), i.fireCallbacks("logout", null, void 0, !0); } }), o = !0, l();
        } }, isUserValid: function () { var e = s(); return !!(void 0 !== e && e && e.length >= 0); }, getToken: s, getName: function () { return "gigya"; }, onLoginSuccess: function (n) { e.setAccessTokenListCookie({ value: n.token_list, cookie_domain: n.cookie_domain }, n.user_token); }, login: function (e) { if (!o)
            throw "Gigya is not configured"; d(), e && window.gigya.accounts.addEventHandlers({ onLogin: function () { l(!0, e); } }); var n = { screenSet: a.screenSet, onHide: function () { i.fireCallbacks("onHide", { afterLogin: u }, void 0, !0); } }, t = ["apiKey", "screenSet"]; for (var r in a) {
            r in t || (n[r] = a[r]);
        } u = !1, window.gigya.accounts.showScreenSet(n); }, logout: function (n) { if (!o)
            throw "Gigya is not configured"; d(), window.gigya.accounts.logout({ callback: function () { i.fireCallbacks("logout", null, void 0, !0), n && n(), e.setAccessTokenListCookie({ value: null }, void 0, !0); } }), e.setAccessTokenListCookie({ value: null }, void 0, !0); }, isConfigured: function () { return !0 === pn.useGigyaUserProvider || "string" == typeof pn.useGigyaUserProvider && "true" === pn.useGigyaUserProvider; }, registerCallback: function (e, n) { i.addEvent(e), i.registerCallback(e, (function (e) { return n(e); })); }, loginByPasswordless: function (n) { if (!n)
            throw "Session info is empty"; var t = n.accessTokenName, r = n.accessToken; e.__protected__.setCookie(t, r); var o = "glt_" + a.apiKey; e.__protected__.setCookie(o, r), l(!0); } }; }();
    pn.container.register("gigya", { useValue: Fe }), pn.gigya = pn.container.resolve("gigya");
    var Be = function () { var e = function (e) { function n() { return null !== e && e.apply(this, arguments) || this; } return function (e, n) { if ("function" != typeof n && null !== n)
        throw new TypeError("Class extends value " + String(n) + " is not a constructor or null"); function t() { this.constructor = e; } we(e, n), e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t); }(n, e), n.prototype.construct = function (e) { this.message = e, this.name = "InvalidCharacterError"; }, n; }(Error); function n(n) { var t = String(n).replace(/=+$/, ""); if (t.length % 4 == 1)
        throw new e("'atob' failed: The string to be decoded is not correctly encoded."); for (var r, o, i = 0, a = 0, s = ""; o = t.charAt(a++); ~o && (r = i % 4 ? 64 * r + o : o, i++ % 4) ? s += String.fromCharCode(255 & r >> (-2 * i & 6)) : 0)
        o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o); return s; } try {
        var t = window.atob && window.atob.bind(window) || n;
    }
    catch (e) {
        t = n;
    } var r = function (e) { var n = e.replace(/-/g, "+").replace(/_/g, "/"); switch (n.length % 4) {
        case 0: break;
        case 2:
            n += "==";
            break;
        case 3:
            n += "=";
            break;
        default: throw "Illegal base64url string!";
    } try {
        return function (e) { return decodeURIComponent(t(e).replace(/(.)/g, (function (e, n) { var t = n.charCodeAt(0).toString(16).toUpperCase(); return t.length < 2 && (t = "0" + t), "%" + t; }))); }(n);
    }
    catch (e) {
        return t(n);
    } }; return function (e, n) { if ("string" != typeof e)
        throw new Error("Invalid token specified"); var t = !0 === (n = n || {}).header ? 0 : 1; return JSON.parse(r(e.split(".")[t])); }; }();
    pn.jwtDecode = Be, pn.container.register("jwtDecode", { useValue: Be });
    var Ve = function () { var e, n = pn.container.resolve("util"), t = pn.container.resolve("api"), r = pn.container.resolve("postmessage"), o = "pianoTracker", i = "gaAccount", a = "metricsGAAccount", s = "trackOnlyAids", c = "disabled", l = 86400, u = { gaAccount: void 0, trackerName: o, trackOnlyAids: [], metricsGAAccount: void 0, isGAEnabled: !1, isGAAppended: !1, isMetricsEnabled: !1, isTrackerAppended: !1, isMetricsTrackerAppended: !1 }, d = [], p = !1, f = !0, m = !1, g = !1, v = []; function h() { m || (f ? setTimeout((function () { f = !1, w(); }), 3e3) : w()); } function w() { m = !0, S(), u.gaAccount ? E().catch((function () { })) : new Promise((function (e, n) { t.callApi("/anon/assets/gaAccount", { aid: tp.aid }, (function (t) { 0 === t.code ? (x(t.data), e(null)) : n(); })); })).then((function () { return E(); })).catch((function () { })); } var y = function (e, n) { d.push({ action: e, params: n }); }, b = function () { if (window.ga && u.isTrackerAppended)
        for (; d.length;) {
            var e = d.pop();
            C(e.action, e.params);
        } }, k = function (e, n) { v.push({ action: e, params: n }); }, _ = function () { if (window.ga && u.isMetricsTrackerAppended)
        for (; v.length;) {
            var e = v.pop();
            I(e.action, e.params);
        } }, C = function (e, n) { window.ga && u.isTrackerAppended ? window.ga(u.trackerName + "." + e, n) : y(e, n); }, I = function (e, n) { u.isMetricsEnabled && (window.ga && u.isMetricsTrackerAppended ? window.ga("performanceTracker." + e, n) : k(e, n)); }, S = function () { if (!p) {
        if (tp.gaClientId && (e = tp.gaClientId), n.__protected__.hasLocalStorage()) {
            var t = n.__protected__.getLocalStorageItem(i), r = n.__protected__.getLocalStorageItem(a), o = n.__protected__.getLocalStorageItem(s);
            u.isGAEnabled = !!t && t !== c, u.isMetricsEnabled = !!r && r !== c, u.gaAccount = t, u.metricsGAAccount = r, u.trackOnlyAids = o || [];
        }
        p = !0;
    } }; var x = function (e) { u.isGAEnabled = !!e, u.gaAccount = e || c, n.__protected__.setLocalStorageItem(i, u.gaAccount, l); }, P = function (e) { u.isMetricsEnabled = JSON.parse(e.is_enabled), u.metricsGAAccount = u.isMetricsEnabled ? e.ga_account : c, u.trackOnlyAids = u.isMetricsEnabled ? JSON.parse(e.track_only_aids) : [], n.__protected__.setLocalStorageItem(s, u.trackOnlyAids, l), n.__protected__.setLocalStorageItem(a, u.metricsGAAccount, l); }; function E() { return new Promise((function (n, t) { u.isGAEnabled ? A().then((function () { if (u.isGAAppended)
        if (u.isTrackerAppended)
            n(null);
        else
            try {
                var r = document.createElement("script");
                r.innerHTML = function () { var n = new RegExp("^UA-[0-9a-zA-Z]*-[0-9a-zA-Z]*$").test(u.gaAccount), t = new RegExp("([{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?)|([0-9]*\\.[0-9]*)").test(e || ""); if (!n)
                    return ""; var r = "ga(function() {\n        ga('create', '" + u.gaAccount + "', 'auto', '" + "pianoTracker'"; r += e && t ? ", { clientId: '" + e + "' });" : ");\n        tp.gaService.setClientId(ga.getByName('pianoTracker').get('clientId'));"; return r += "tp.gaService.trackerAppended(); });"; }(), document.head.appendChild(r), u.isTrackerAppended = !0, n(null);
            }
            catch (e) {
                t();
            }
    else
        t(); })).catch((function (e) { })) : t(); })); } function T() { return new Promise((function (e, n) { u.isMetricsEnabled ? A().then((function () { if (u.isGAAppended)
        if (u.isMetricsTrackerAppended)
            e(null);
        else
            try {
                var t = !u.trackOnlyAids.length || u.trackOnlyAids.contains(tp.aid), r = document.createElement("script");
                if (!new RegExp("^UA-[0-9a-zA-Z]*-[0-9a-zA-Z]*$").test(u.metricsGAAccount))
                    return void n();
                r.innerHTML = "\nga(function() {\n  if (" + t + ") {\n    ga('create', '" + u.metricsGAAccount + "', 'auto', '" + "performanceTracker', { storage: 'none' });\n    tp.gaService.metricsTrackerAppended();\n  }\n});\n", document.head.appendChild(r), u.isMetricsTrackerAppended = !0, e(null);
            }
            catch (e) {
                n();
            }
    else
        n(); })) : e("isMetricsEnabled !== true"); })); } function A() { return new Promise((function (e, n) { if (u.isGAAppended)
        e(null);
    else
        try {
            var t = document.createElement("script");
            t.innerHTML = "\n            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n          ", document.head.appendChild(t), u.isGAAppended = !0, e(null);
        }
        catch (e) {
            n();
        } })); } return { name: "gaService", emitEvent: function (e) { if (e.hitType = "event", !u.isTrackerAppended)
            return y("send", e), void h(); u.isGAEnabled && (window.ga && u.isTrackerAppended ? (d.length && b(), C("send", e)) : y("send", e)); }, emitMetricsEvent: function (e) { if (e.hitType = "timing", !u.isMetricsTrackerAppended)
            return k("send", e), void function () { if (g)
                return; if (g = !0, S(), !u.metricsGAAccount)
                return void new Promise((function (e, n) { t.callApi("/anon/assets/performanceMetrics", null, (function (t) { 0 === t.code ? (P(t.performance_metrics_dto), e(null)) : n(); })); })).then((function () { return T(); })).catch((function (e) { n.error("PN catch: something vent wrong with GA injection: " + e); })); T().catch((function (e) { n.error("PN catch: something vent wrong with GA injection: " + e); })); }(); u.isMetricsEnabled && (window.ga && u.isMetricsTrackerAppended ? (v.length && _(), I("send", e)) : k("send", e)); }, getClientId: function () { return e; }, getGAAccount: function () { return u.gaAccount; }, metricsTrackerAppended: function () { u.isMetricsTrackerAppended = !0, g = !1, _(); }, recreateWithClientId: function (n) { e = n, h(); }, setClientId: function (n) { e = n; }, setTrackerName: function (e) { u.trackerName = e; }, trackerAppended: function () { u.isTrackerAppended = !0, r.broadcast("gaAppended", { clientId: e, gaAccount: u.gaAccount }), m = !1, b(); } }; }();
    pn.container.register("gaService", { useValue: Ve }), pn.gaService = pn.container.resolve("gaService");
    var qe = function (e) { void 0 === e && (e = pn.container); var n, t, r, o, i, a = e.resolve("cookie"), s = e.resolve("jqUtils"), c = e.resolve("ajax"), l = e.resolve("jwtDecode"), u = e.resolve("util"), d = e.resolve("containerUtils"), p = e.resolve("postmessage"), f = e.resolve("log"), m = e.resolve("observer"), g = e.resolve("gaService"), v = e.resolve("api"), h = e.resolve("logging"), w = e.resolve("localStorage"), y = "piano_social_token", b = u.getAidSpecifiedName("__utp"), k = "__pil", _ = "__pid", C = "__idr", I = "__eea", S = "PIANOID", x = "show_form", P = "registration", E = "checkout", T = 300, A = "pnid-tc-string", M = ["he_IL", "ar_EG"], O = {}, R = [], L = { loggedIn: [], loggedOut: [], loginSuccess: [], registrationSuccess: [], profileUpdate: [], langChange: [], langChangeFromIframe: {}, fire_loginSuccess: [], loginDisplayed: [], registerDisplayed: [], loginFailed: [], registrationFailed: [], onShow: [], layoutReady: [] }, N = {}, U = {}, j = [], D = !1, F = ["G18rIJWQ2G", "45L2BaS6pu"]; s.on(window, "resize", (function () { return B(); })); var B = function (e) { R.filter((function (e) { return "inline" === e.config.displayMode; })).filter((function (n) { return !e || e.some((function (e) { return n.container === e; })); })).forEach((function (e) { var n = s.getWidth(e.container); d.resizeIframe(e, { width: n }), p.send("resize", { width: n }, e.iframeId); })); }, V = function (e) { if (r && !e)
        return r; var n; O = Object.assign({}, e), r = new Promise((function (e) { n = e; })), Qe() || pn.setUsePianoIdUserProvider(!0), ae(O); var t = u.getQueryParamByName("reset_token"); void 0 === O.resetPasswordToken && t && (O.resetPasswordToken = t); var o = u.getQueryParamByName("passwordless_token"); void 0 === O.passwordlessToken && o && (O.passwordlessToken = o); var i = u.getQueryParamByName("verification_code"); void 0 === O.verification_code && i && (O.verification_code = i); var a = u.getQueryParamByName(y); return a && (u.removeQueryParamByName(y), Oe() || (pn.inappBrowserReturn = !0, function (e, n) { var t = l(e); t.rememberMe = !!n, Se({ user: t, token: e }); }(a, !0))), setTimeout((function () { return n(); }), 50), r; }, q = function (e, n) { if (t && !e)
        return t; var r; t = new Promise((function (e) { r = e; })); var o = function () { u.doneCall("refreshUserToken"), t = null, r(); }; return e && e.preview ? (setTimeout((function () { return r(); }), 10), t) : (u.startCall("refreshUserToken"), V(e).then((function () { return O.passwordlessToken ? J() : n ? Promise.resolve() : Re(); })).then(o, o), t); }, z = function (e) { var t = !Oe(); q().then((function () { var r = Object.assign({}, O, e, { isRegistration: !0 }), o = Oe(); o ? (ne(r, { emitGlobalLoginSuccessEvent: t && o }), D && !Xe() && (ae(e), se(r), _e(r))) : n ? (ae(e), u.log("Modal login window already shown")) : (ae(e), se(r), _e(r)); h.setTime("idShow"); })); }, H = function () { var e = "email_is_not_confirmed", n = u.getQueryParamByName(e); if (n) {
        u.removeQueryParamByName(e);
        var t = "registration" === n ? "email_is_not_confirmed" : "email_confirmation_required", r = Te();
        W({ screen: t, email: r && r.email });
    } }, W = function (e) { if (n)
        u.log("Modal window already shown");
    else {
        e || (e = {});
        var t = Object.assign({}, e, O);
        e.customEvents && "object" == typeof e.customEvents && (N = e.customEvents), se(t), ae(e), _e(t);
    } }, J = function () { return new Promise((function (e, n) { c.request({ url: he() + "api/v1/identity/passwordless/authorization/code", dataType: "jsonp", data: { aid: O.aid || pn.aid, passwordless_token: O.passwordlessToken }, success: function (t) { t.error ? (Q(t), n()) : (G(t), e(null)); }, xhrFields: { withCredentials: !0 }, crossDomain: !0 }); })); }, G = function (e) { !e.error && e.access_token && (X(e), Me({ source: S, token: e.access_token, user: l(e.access_token), extendExpiredAccessEnabled: e.extend_expired_access_enabled }, !1, !0), delete O.passwordlessToken, u.removeQueryParamByName("passwordless_token")), u.doneCall("refreshUserToken"); }, Q = function (e) { W({ screen: "passwordless_confirmation", jsonpError: e }), delete O.passwordlessToken, u.removeQueryParamByName("passwordless_token"); }, X = function (e) { var n = { aid: O.aid || pn.aid, login_token_id: e.login_token_id, user_token: e.access_token }, t = { passwordlessToken: e.passwordless_token, redirectUri: e.direction_url }; $(n, t); }, $ = function (e, n) { d.showWaitPanel(), v.callApi("/anon/passwordless/complete", e, (function (e) { if (e.result && e.result.polling_enabled)
        return Y(e).then((function (e) { Z(e, n); })); Z(e, n); })); }, Y = function (e) { return new Promise((function (n) { var t = { aid: pn.aid, oid: e.result.oid, process_id: e.result.process_id, user_token: pn.user.getProvider().getToken() }; K(t, 0, e.result.polling_timeouts, n); })); }, K = function (e, n, t, r) { v.callApi("/anon/passwordless/check", e, (function (o) { n++, o && o.result && "waiting" !== o.result.poll_status ? r(o) : !o.result && o.message ? (u.error("Passwordless purchase failed", o.message), r()) : n <= t.length ? setTimeout((function () { K(e, n, t, r); }), t[n - 1]) : r(); })); }, Z = function (e, n) { try {
        var t = e.result.resource || {}, r = JSON.parse(e.result.show_offer_params), o = ee(n);
        if (!Object.keys(t).length && !Object.keys(r).length)
            return W(o);
        o = t.name ? ee(n, { customParams: { resourceName: t.name } }) : ee(n, { customEvents: { checkoutContinue: function () { Ce(), d.closeModalContainer(), pn.offer.show(r); } } }), W(o);
    }
    catch (e) {
        W(ee(n));
    }
    finally {
        d.hideWaitPanel();
    } }, ee = function (e, n) { var t = { screen: "passwordless_confirmation" }; return e && (t.passwordlessToken = e.passwordlessToken, t.redirectUri = e.redirectUri), n ? Object.assign(t, n) : Object.assign(t, { passwordlessSuccess: !0 }); }, ne = function (e, n) { n = n || {}; var t = Te(); if (t) {
        var r = { token: Pe(), user: t, source: n.source, stage: n.stage }, i = { event: "loginSuccess", source: n.source, params: r.user, user_token: r.token, registration: o, stage: n.stage };
        e ? (e.loggedIn && e.loggedIn(r), n.emitGlobalLoginSuccessEvent && oe("loginSuccess", i)) : (re("loggedIn", r), re("loginSuccess", r), n.source === S && (re("fire_loginSuccess", i), oe("loginSuccess", i)));
    } }, te = function (e, n) { ie({ login: "loginDisplayed", register: "registerDisplayed" }[e], {}, n); }, re = function (e, n) { L[e] && L[e].forEach((function (e) { e(n); })); }, oe = function (e, n) { U[e] && U[e].forEach((function (e) { e(n); })); }, ie = function (e, n, t) { !t && re(e, n), oe(e, n); }, ae = function (e) { e && Object.keys(L).forEach((function (n) { e[n] && L[n].push(e[n]); })); }, se = function (e) { e.aid || (e.aid = pn.aid), e.displayMode || (e.displayMode = "modal"), "popup" === e.displayMode ? (e.width = parseInt(e.width) || le(), e.height = parseInt(e.height) || 460) : "modal" === e.displayMode && (e.width = parseInt(e.width) || le()), e.accessToken = Pe(); }, ce = function (e) { T = e; }, le = function () { var e = window.innerWidth || document.documentElement.clientWidth || window.screen.width; return Math.min(e, 400); }, ue = function (e, n, t) { o = !1, Ee(), w.remove(A), u.setAccessTokenListCookie({ value: null }, void 0, !0), Ue().then((function () { t || function (e) { var n = { source: e }; re("loggedOut", n), oe("logout", n); }(n), e && e(); })), Ye(); }; function de(e) { return function (n) { var t, r, o = e.config.trackingId, i = e.config.formName; switch (n.event) {
        case "loaded":
            "modal" === e.config.displayMode && d.checkBackdropAndContainer(e, !0), e.config.loadedCallback && e.config.loadedCallback(e);
            break;
        case "stateReady":
            e.config.readyCallback && e.config.readyCallback(e);
            break;
        case "resize":
            d.resizeIframe(e, n.params);
            break;
        case "restoreSize":
            "inline" === e.config.displayMode && d.resizeIframe(e, { width: s.getWidth(e.container) });
            break;
        case "loginSuccess":
            ve(n, (function () { e.config.callback && e.config.callback(), pn.user.refreshAccessToken(!0), p.broadcast("pianoIdLoginSuccess", n.params); }));
            break;
        case "loginFailed":
            ie("loginFailed", n.params);
            break;
        case "registrationSuccess":
            ve(n, (function () { ie("registrationSuccess", n.params), p.broadcast("pianoIdLoginSuccess", n.params); }));
            break;
        case "registrationFailed":
            ie("registrationFailed", n.params);
            break;
        case "lang":
            Be(n.params.lang, !0), Ge(n.params.lang, e);
            break;
        case "customEvent":
            t = e.config, r = n.params, t && t.customEvent && t.customEvent(r), oe("customEvent", r);
            break;
        case "closed":
            De(e, !0), e.config.closedCallback && e.config.closedCallback(e);
            break;
        case "cfFormSubmission":
            f.__protected__.logCustomFormSubmission(o, i, x);
            break;
        case "formSend":
        case "formSkip":
            De(e);
            break;
        case "cfAppImpression":
            f.__protected__.logCustomFormImpression(o, i, P);
            break;
        case "cfAppSubmission":
            f.__protected__.logCustomFormSubmission(o, i, P);
            break;
        case "cfFormImpression":
            f.__protected__.logCustomFormImpression(o, i, x);
            break;
        case "changeScreen":
            te(n.params.screen);
            break;
        case "screenReady":
            ie("onShow");
            break;
        case "layoutReady":
            ie("layoutReady", n.params);
            break;
        case "confirmationEmailSent":
            "inline" === e.config.displayMode || n.params.isDOI || n.params.isPasswordlessDigitalCode || De(e);
            break;
        case "verificationCodeStartCheckout":
            var a = {};
            try {
                a = JSON.parse(n.params.startCheckoutParams);
            }
            catch (e) {
                u.log("error parse start checkout params"), a = {};
            }
            De(e, !0), Re(!0, !0), u.waitCall("refreshUserToken", (function () { pn.offer.show(a); }));
            break;
        case "removeParamFromGlobalConfig":
            fe(n);
            break;
        case "verifyCode":
            me(n, e);
            break;
        case "openPasswordlessLoginWithCreatingUser":
            pe();
            break;
        case "fireCustomEvent":
            !function (e) { N && "function" == typeof N[e] && N[e](); }(n.params.name);
            break;
        case "passwordRestored":
            u.removeQueryParamByName("reset_token"), O.resetPasswordToken = void 0;
            break;
        case "emitGAEvent":
            g.emitEvent(n.params);
            break;
        case "redirect":
            document.location.href = n.params.url;
            break;
        case "designVersion":
            d.addClassToContainer(e, "piano-id-modal-ver-" + n.params.version);
            break;
        case "profileUpdated":
            re("profileUpdate", n.params);
            break;
        case "logout":
            ue();
            break;
        default: u.debug("Received invalid event type: " + n.event);
    } }; } var pe = function () { z({ createPasswordlessUser: !0 }); }, fe = function (e) { var n = e.params.name, t = u.fromUnderscoreToCamelCase(n); delete O[t], e.params.removeFromUrl && u.removeQueryParamByName(n); }, me = function (e, n) { var t = e.params.verificationCode, r = e.params.locale, o = O.aid || pn.aid, i = Ae(), a = document.location.href; c.request({ url: he() + "api/v1/identity/verification/code", dataType: "jsonp", data: { client_id: o, access_token: i, site: a, verification_code: t, lang: r }, success: function (e) { e.error || ge(e, n); }, xhrFields: { withCredentials: !0 }, crossDomain: !0 }); }, ge = function (e, n) { !e.error && e.access_token && Se({ token: e.access_token, user: l(e.access_token), cookie_domain: e.site_cookie_domain }), p.send("verificationCodeComplete", e, n.iframeId); }, ve = function (e, n) { e && e.params && !e.params.areCookiesSet ? (e.params.source = S, o = !!e.params.registration, Me(e.params).then((function (e) { n(e); }))) : "function" == typeof n && n(), $e(); }, he = function () { return function () { var e = pn.sandbox || pn.isNonProdEndpoint(), n = O.iframeUrl || pn.pianoIdUrl || !e && "https://id.tinypass.com" || "/"; return "/" === n && (n = pn.getEndpointRoot(!0)), n.replace(/\/$/, ""); }() + "/id/"; }, we = function () { var e = O.aid || pn.aid; return F.indexOf(e) >= 0; }, be = function (e, n, t, r) { e.match("proxy.html") || (e += we() ? "index3.html" : ""); var o = { client_id: n.aid, sender: t.iframeId, origin: r || window.location.origin || window.location.href, site: window.location.href, display_mode: n.displayMode, pageViewId: pn.main.fetchPageViewId(), tbc: u.getTbcCookie() }, i = Ve(); if (i && (o.lang = i), g.getClientId() && (o.ga_client_id = g.getClientId()), g.getGAAccount() && (o.ga = g.getGAAccount()), n.disableSignUp && (o.disable_sign_up = !0), n.screen && (o.screen = n.screen), n.resetPasswordToken && (o.reset = n.resetPasswordToken), n.verification_code && (o.verification_code = n.verification_code), n.stage && (o.stage = n.stage), n.resetPasswordLandingUrl && (o.reset_uri = n.resetPasswordLandingUrl), n.width && "modal" === n.displayMode && (o.width = n.width), n.formName && (o.form_name = n.formName), ke(n, e) && (e += "form"), "profile" === n.template && (e += "profile"), n.hideIfComplete && (o.hide_if_complete = n.hideIfComplete), n.preview && (o.preview = n.preview), n.templateVersion && (o.templateVersion = n.templateVersion), n.template && (o.template = n.template), n.accessToken && (o.access_token = n.accessToken), n.email && (o.email = n.email), n.singleStep && (o.single_step = !0), n.createPasswordlessUser && (o.create_passwordless_user = !0), n.customParams && (o.custom_params = JSON.stringify(n.customParams)), n.customEvents) {
        var a = [];
        Object.keys(n.customEvents).forEach((function (e) { a.push(e); })), a.length && (o.custom_events = JSON.stringify(a));
    } return n.jsonpError && (o.jsonp_error = JSON.stringify(n.jsonpError)), n.passwordlessSuccess && (o.passwordless_success = !0), n.passwordlessToken && (o.passwordless_token = n.passwordlessToken), n.redirectUri && (o.redirect_uri = n.redirectUri), t.iframeUrl && (o.url = t.iframeUrl), n.returnBack && (o.return_back = n.returnBack), t.pos && (o.width = t.pos.width, o.height = t.pos.height, o.top = t.pos.top, o.left = t.pos.left), n.templateId && (o.template_id = n.templateId), n.variantId && (o.variant_id = n.variantId), [e, s.param(o)].join("?"); }, ke = function (e, n) { var t = we(), r = !e.isRegistration, o = !/\.html$/.test(n) || t; return e.formName && o && r; }, _e = function (e) { var t = s.queryEl(e.containerSelector), r = "piano-id-" + (e.isRegistration ? "" : "form-") + u.randomString(); e.singleContainer = t; var o, i, a, c = { iframeId: r, containerSelector: e.containerSelector, width: e.width, height: e.height }, l = be(he(), e, c), f = he(), g = !0; if (e.iframeParams = c, "inline" === e.displayMode) {
        var v = d.initInlineContainer(e);
        if (!(o = v.container))
            return;
        i = d.generateIframe(e, c, l), g = !!v.containerReady, e.observeContainer && (a = m.create(o, B));
    }
    else if ("modal" === e.displayMode)
        o = d.getModalContainer(e, (function () { return De(n); })), i = d.generateIframe(e, c, l);
    else if ("popup" === e.displayMode)
        if (u.isIE()) {
            o = d.generateIframeWrapper(), l = be(he(), e, c, he() + "proxy.html"), c.iframeUrl = l, c.pos = d.getPopupPosition(c);
            var h = be(he() + "proxy.html", e, c);
            e.displayMode = "inlinePopup", i = d.generateIframe({}, c, h);
        }
        else {
            o = d.generatePopup(c, l);
            try {
                try {
                    i = o.document;
                }
                catch (e) {
                    i = o;
                }
            }
            catch (e) {
                i = window.document;
            }
        } var w = { iframeId: c.iframeId, config: e, element: i, container: o, iframeParams: c, containerReady: g }, y = { center: u.centerScreen(), originUrl: document.location.href }; if (p.init({ postMessageUrl: f, receive: de(w), iframe: w, iframeParams: c }, y), "inline" === e.displayMode) {
        var b = document.createElement("div");
        s.addClass("piano-id-container", b), s.append(b, i), s.append(o, b);
    }
    else
        "modal" === e.displayMode ? s.append(o, i) : "inlinePopup" === e.displayMode && (s.append(o, i), s.append(document.body, o)); if (u.debug("creating iframe: ", e), R.push(w), "modal" === e.displayMode) {
        (n = w).observer = a, (u.isIphone() || u.isSafariOrIOsUiWebView() || u.isAndroid()) && d.__private__.mobileModalFix.modalOpened();
        var k = Ve();
        Ge(k, w);
    } return w; }, Ce = function (e) { if (n) {
        var t = d.__private__.mobileModalFix;
        d.closeModal(n), s.remove(n.element), n.observer && n.observer.disconnect(), t.isIphoneCaretFixed && t.modalClosed(), n = void 0;
    } }, Ie = function (e) { var n = { path: "/" }, t = u.__protected__.getCookie(_), r = u.extractCookieDomain(e || t); return r && (n.domain = r), (pn.cookieDomain || pn.cookiePath) && (n.domain = pn.cookieDomain ? pn.cookieDomain : n.domain, n.path = pn.cookiePath ? pn.cookiePath : n.path), n; }, Se = function (e) { if (e && e.user && e.token) {
        Ee(null, !0, !0);
        var n = Ie(e.cookie_domain);
        e.extendExpiredAccessEnabled && xe(e.extendExpiredAccessEnabled, e.cookie_domain), (e.user.rememberMe || He()) && (n.expires = new Date(1e3 * e.user.exp), qe(n));
        var t = u.getPossibleCookieDomains();
        for (var r in t)
            u.deleteCookie(b, t[r]);
        u.__protected__.setCookie(b, e.token, n), e.cookie_domain && (n.expires = 30, u.__protected__.setCookie(_, e.cookie_domain, n));
    } }, xe = function (e, n) { Je("setExtendExpiredAccess", e, "broadcast"); var t = Ie(n); t.expires = 30, u.__protected__.setCookie(I, e ? "true" : "false", t); }, Pe = function () { var e = u.findCookieByName(b); return e || null; }, Ee = function (e, n, t) { var r = Ie(), o = u.getPossibleCookieDomains(r.domain); e && u.__protected__.logRemoveTokens(e), o.forEach((function (e) { var o = ye(ye({}, r), { domain: e }); a.remove(b, o), t || a.remove(I, o), n || ze(o); })); }, Te = function () { var e = null, n = Pe(); if (n)
        try {
            if (e = l(n)) {
                e.firstName = e.given_name, e.lastName = e.family_name, e.valid = !0, e.uid = e.sub, e.confirmed = !e.email_confirmation_required;
                var t = new Date;
                new Date(1e3 * e.exp) < t && (u.log("Removing expired tokens"), Ee(n), e = null);
            }
        }
        catch (e) { } return e; }, Ae = function () { return pn.externalJWT && Qe() ? pn.externalJWT : Pe(); }, Me = function (e, n, t) { Se(e); var r = je(e).then((function () { !n && ne(null, { stage: e.stage, source: e.source }); })); if (!(t = t || e.withoutCloseModal)) {
        var o = e && e.user && e.user.email_confirmation_required, i = O.verification_code;
        o || i ? d.hideCloseButton() : Fe();
    } return r; }, Oe = function () { return Qe() ? !!pn.externalJWT : !!Te(); }, Re = function (e, n) { return new Promise((function (t, r) { u.startCall("refreshUserToken"); var o = function (e) { var n = void 0 === e ? {} : e, o = n.isSuccessful, i = n.gmSSOEnabled; o ? t(null) : r(), u.doneCall("refreshUserToken"), o && (D = i) && !Xe() && z({ screen: "sso_confirm" }); }, i = function (t) { !t.error && t.access_token ? Me({ token: t.access_token, user: l(t.access_token), cookie_domain: t.site_cookie_domain, extendExpiredAccessEnabled: t.extend_expired_access_enabled }, e, n).then((function () { return o({ isSuccessful: !0, gmSSOEnabled: t.authorized_by_sso }); })) : (Ee(Ae()), o({ isSuccessful: !1 })); }, a = Ae() || void 0, s = { client_id: O.aid || pn.aid, site: document.location.origin || document.location.href }, d = Le(); d && (s.tcf = d), a ? c.request({ url: he() + "api/v1/identity/token/validation", data: s, headers: { Authorization: a }, success: function (e) { i(e), e.access_token && Ne(d); }, error: o }) : c.request({ url: he() + "api/v1/identity/token/verify", data: s, success: function (e) { i(e), e.access_token && Ne(d); }, error: o, dataType: "jsonp", xhrFields: { withCredentials: !0 }, crossDomain: !0 }), setTimeout(o, 10 * T); })); }, Le = function () { var e, n = window; return function (e) { if (!e)
        return !1; var n = e; if (!n || !n.tcString || !n.date)
        return !1; var t = new Date, r = new Date(n.date), o = Math.abs(r.getTime() - t.getTime()); return Math.ceil(o / 864e5) <= 1; }(w.get(A)) ? null : (e = null, n.__tcfapi && n.__tcfapi("getTCData", 2, (function (n, t) { t && n.tcString && (e = n.tcString); }), [412]), e); }, Ne = function (e) { if (e) {
        var n = { date: (new Date).toString(), tcString: e };
        w.set(A, JSON.stringify(n));
    } }, Ue = function () { return new Promise((function (e) { c.request({ url: he() + "api/v1/identity/logout", data: { client_id: O.aid || pn.aid }, dataType: "jsonp", complete: e, xhrFields: { withCredentials: !0 }, crossDomain: !0 }), setTimeout(e, T); })); }, je = function (e) { return new Promise((function (n) { var t = !(e && e.user && e.user.rememberMe || He()); c.request({ url: he() + "api/v1/identity/vxauth/cookie", data: { client_id: O.aid || pn.aid, session_cookie: t }, headers: { Authorization: e.token || void 0 }, complete: n }), setTimeout(n, T); })); }, De = function (e, n) { e && (n ? e.closed || (e.closed = !0, "inline" === e.config.displayMode ? s.empty(e.container) : "popup" === e.config.displayMode ? e.container.close() : "modal" === e.config.displayMode && (Ce(), s.remove(e.container.parentElement)), D && Ae() && $e()) : (p.send("close", {}, e.iframeId), R = R.filter((function (n) { return n.iframeId !== e.iframeId; })), setTimeout((function () { De(e, !0); }), 600))); }, Fe = function () { R.forEach((function (e) { De(e); })), R = []; }, Be = function (e, n) { var t = Ie(); t.expires = 30, u.__protected__.setCookie(k, e, t), n || R.forEach((function (n) { p.send("lang", { lang: e }, n.iframeId); })), Object.keys(L.langChangeFromIframe).forEach((function (n) { var t = L.langChangeFromIframe[n]; p.__protected__.isIframeManaged(n) && t ? t(e) : delete L.langChangeFromIframe[n]; })), ie("langChange", e); }, Ve = function () { return pn.locale || u.__protected__.getCookie(k) || ""; }, qe = function (e) { u.__protected__.setCookie(C, 1, e); }, ze = function (e) { e && a.remove(C, e); }, He = function () { return !!u.__protected__.getCookie(C); }, We = function (e) { return new Promise((function (n) { var t = Object.assign({}, O, e); c.request({ url: he() + "api/v1/identity/userinfo", data: { client_id: O.aid || pn.aid, form_name: t.formName }, headers: { Authorization: Ae() || void 0 }, success: n, complete: function () { return n(null); } }), setTimeout(n, 10 * T); })); }, Je = function (e, n, t) { j.push({ type: t, name: e, data: n }); }, Ge = function (e, n) { M.includes(e) ? d.turnOnRTL(n) : d.turnOffRTL(n); }, Qe = function () { return !0 === pn.usePianoIdLiteUserProvider || "string" == typeof pn.usePianoIdLiteUserProvider && "true" === pn.usePianoIdLiteUserProvider; }, Xe = function () { return !!w.get("piano-id-initial-gm-sso-shown-" + (O.aid || pn.aid)); }, $e = function () { w.set("piano-id-initial-gm-sso-shown-" + (O.aid || pn.aid), "1"); }, Ye = function () { w.remove("piano-id-initial-gm-sso-shown-" + (O.aid || pn.aid)); }; return { name: "pianoId", isv: !1, init: q, prepare: function () { return V(); }, show: z, showForm: function (e) { q().then((function () { var t = Object.assign({}, O, e, { isRegistration: !1 }); if (!t.formName)
            throw new Error('Form name should be specified, like\ntp.pianosId.showForm({formName: "..."});'); var r = function () { if (n)
            u.log("Modal login window already shown");
        else {
            if (se(t), ae(e), !t.preview && o)
                return void u.log("Skip show form, register new user");
            if (!t.hideIfComplete)
                return Object.assign(t, { readyCallback: function (e) { p.send("setToken", Ae(), e.iframeId); } }), _e(t);
            We(t).then((function (e) { if (e && e.has_all_custom_field_values_filled && t.hideIfComplete)
                u.log("Skip show form, all fields are completed");
            else {
                var n = Object.assign({}, t, { readyCallback: function (n) { p.send("userData", e, n.iframeId); } });
                _e(n);
            } }));
        } }; if (e.preview || Oe())
            r();
        else {
            var i = Object.assign({}, e, { closedCallback: function () { Oe() && r(); } });
            z(i);
        } })); }, checkAndShowEmailIsNotConfirmed: H, showEmailConfirmationRequired: function (e) { n ? u.log("Modal window already shown") : q().then((function () { var n = Object.assign({ screen: "email_confirmation_required" }, O, e); ae(e), se(n), _e(n); })); }, submitLoginForm: function () { p.send("submitLoginForm", null, null == n ? void 0 : n.iframeId); }, loginByToken: function (e) { var n = l(e); Me({ user: n, token: e }); }, logout: ue, getToken: Ae, getUser: Te, loadExtendedUser: function (e) { var n = Object.assign({}, O, e); We(n).then((function (e) { var t = Object.assign({}, e); e && Array.isArray(e.custom_field_values) && (e.custom_field_values = e.custom_field_values.map((function (e) { var n; try {
            n = JSON.parse(e.value);
        }
        catch (t) {
            n = e.value;
        } return { field_name: e.field_name, value: n, created: e.created }; }))), "function" == typeof n.extendedUserLoaded && n.extendedUserLoaded(t), oe("extendedUserLoaded", t); })); }, getName: function () { return "piano_id"; }, isConfigured: function () { return !0 === pn.usePianoIdUserProvider || "string" == typeof pn.usePianoIdUserProvider && "true" === pn.usePianoIdUserProvider; }, onLoginSuccess: function (e) { if (!i) {
            i = !0;
            var n = { source: e.source, token: e.user_token, user: e.params, cookie_domain: e.cookie_domain, stage: e.stage };
            u.setAccessTokenListCookie({ value: e.token_list, cookie_domain: e.cookie_domain }, e.user_token), Me(n).then((function () { i = !1; }));
        } }, onProfileUpdate: function (e, n) { var t = { token: e.token, user: e.user, cookie_domain: e.cookie_domain }; Me(t, !0).then((function () { n(), function (e) { re("profileUpdate", e); }(t); })); }, onExtendedUserLoginRequired: function () { W(); }, isUserValid: Oe, setCallbacks: ae, getIframeUrl: function () { return he(); }, updateLang: Be, onLangChange: function (e, n) { return L.langChangeFromIframe[n] = e, function () { delete L.langChangeFromIframe[n]; }; }, getLang: Ve, isAot: function () { R.forEach((function (e) { p.send("isAOT", {}, e.iframeId); })); }, registerCallback: function (e, n) { U[e] = U[e] || [], U[e].push(n); }, setRequestTimeout: ce, __protected__: { offerMessageReceiver: function (e) { switch (e.params.event) {
                case "cfAppImpression":
                case "cfFormImpression":
                    f.__protected__.logCustomFormImpression(e.params.trackingId, e.params.trackingId, E);
                    break;
                case "cfFormSubmission":
                    f.__protected__.logCustomFormSubmission(e.params.trackingId, e.params.trackingId, E);
                    break;
                case "changeScreen":
                    te(e.params.params.screen, !0);
                    break;
                case "loginFailed":
                case "registrationFailed":
                case "registrationSuccess":
                case "customEvent":
                    ie(e.params.event, e.params.params, !0);
                    break;
                case "emitGAEvent":
                    g.emitEvent(e.params.params);
                    break;
                default: return void u.debug("Received invalid event type: " + e.params.event);
            } }, showEmailConfirmation: function (e) { n ? u.log("Modal window already shown") : q().then((function () { var n = Object.assign({ screen: "email_confirmation" }, O, e); ae(e), se(n), _e(n); })); }, checkAndShowEmailIsNotConfirmed: H, closeModalContainer: Ce, executePostMessagesBatch: function () { for (; j.length;) {
                var e = j.pop();
                "broadcast" === e.type ? p.broadcast(e.name, e.data) : p.send(e.name, e.data);
            } } }, __private__: { prepareConfig: se, extendUserToken: function () { var e = Pe(); if (e) {
                var n = (new Date).getTime(), t = u.__protected__.getCookie(I), r = n - l(e).login_timestamp > 864e5;
                t && r && Re(!1, !0);
            } }, setRequestTimeout: ce } }; };
    pn.container.register("pianoId", { useValue: qe() }), pn.pianoId = pn.container.resolve("pianoId");
    var ze = function () { var e = pn.container.resolve("util"), n = pn.container.resolve("pianoId"), t = pn.container.resolve("eventUtils").createEventManager(["userChanged", "onHide"]), r = e.getAidSpecifiedName("__utp"), o = function () { return pn.externalJWT || i(); }, i = function () { return e.findCookieByName(r) || null; }; return { name: "pianoIdLite", isv: !1, isConfigured: function () { return !0 === pn.usePianoIdLiteUserProvider || "string" == typeof pn.usePianoIdLiteUserProvider && "true" === pn.usePianoIdLiteUserProvider; }, isUserValid: function () { return !!o(); }, getToken: o, getName: function () { return "piano_id_lite"; }, onLoginSuccess: function (n) { e.setAccessTokenListCookie({ value: n.token_list, cookie_domain: n.cookie_domain }, n.user_token); }, registerCallback: function (e, n) { t.addEvent(e), t.registerCallback(e, n); }, loginByToken: function (e) { n.loginByToken(e); }, logout: function (n) { e.waitCall("refreshUserToken", (function () { "function" == typeof n && n(); })); } }; }();
    pn.container.register("pianoIdLite", { useValue: ze }), pn.pianoIdLite = pn.container.resolve("pianoIdLite");
    var He = function (e) { void 0 === e && (e = pn.container); var n = e.resolve("api"), t = e.resolve("util"), r = e.resolve("janrain"), o = e.resolve("tinypassAccounts"), i = e.resolve("condeUserProvider"), a = e.resolve("gigya"), s = e.resolve("pianoId"), c = e.resolve("pianoIdLite"), l = e.resolve("eventUtils").createEventManager([]), u = { isv: !1, getName: function () { return "publisher_user_ref"; }, getToken: function () { return pn.userRef ? pn.userRef.constructor === "".constructor ? pn.userRef : pn.userRef.constructor === {}.constructor ? "{jox}" + JSON.stringify(pn.userRef) : pn.userRef : null; }, isUserValid: function () { return !!(void 0 !== pn.userRef && pn.userRef && pn.userRef.length > 0); }, onLoginSuccess: function (e) { t.setAccessTokenListCookie({ value: e.token_list, cookie_domain: e.cookie_domain }, e.user_token); }, logout: function (e) { t.setAccessTokenListCookie(), e && e(); } }, d = function () { var e = [r, o, i, a, s, c].find((function (e) { return e.isConfigured() && !e.isv; })); return e || u; }; return { name: "user", getProvider: d, providerInit: function (e) { void 0 !== e && e || (e = function () { }); var n = d(); "function" == typeof n.prepare ? "prepare" in n && n.prepare().then(e, e) : e(); }, refreshAccessToken: function (e, r) { void 0 !== r && r || (r = function () { }); var o = !1; if (void 0 !== e && e)
            o = !0;
        else {
            var i = t.__protected__.getCookie("__tae");
            if (void 0 !== i && i) {
                var a = new Date(parseInt(i));
                (new Date).getTime() - a.getTime() > 864e5 && (o = !0);
            }
            else
                o = !0;
        } o ? t.waitCall("refreshUserToken", (function () { t.waitCall("offerCreate", (function () { t.waitCall("experienceExecute", (function () { if (d().isUserValid()) {
            t.startCall("refreshAccessTokenList");
            var e = { url: t.prepareUrlParameter(window.location.href) };
            n.callApi("/access/token/list", e, (function (e) { t.doneCall("refreshAccessTokenList"), void 0 !== e.access_token_list ? (t.setAccessTokenListCookie(e.access_token_list), r && r(e.access_token_list.value)) : r && r(null); }), void 0, void 0, !0);
        }
        else
            r && r(""); })); })); })) : r(null); }, showLogin: function (e) { var n = d().getName(); if ("tinypass_accounts" === n)
            o.login(e);
        else if ("piano_id" === n) {
            var t = e || {};
            s.show(t);
        }
        else
            "publisher_user_ref" === n && l.fireCallbacks("loginRequired", {}, void 0, !0); }, isUserValid: function () { return d().isUserValid(); }, logout: function (e, n) { d().logout(e, n); }, registerCallback: function (e, n) { l.addEvent(e), l.registerCallback(e, n); }, getUserInfoParams: function (e) { var n = e.userToken; if (!n) {
            var r = d().getToken();
            n = r && r.length > 0 ? r : "";
        } return { user_token: n, user_lang: t.__protected__.getCookie("LANG") || "", is_preview: e.preview, is_non_logged_user: e.previewNonLoggedUser }; } }; };
    pn.container.register("user", { useValue: He() }), pn.user = pn.container.resolve("user");
    var We = function () { var e = pn.container.resolve("jqUtils"), n = pn.container.resolve("util"), t = "viewport-exit-activated", r = "viewport-exit-prepared", o = !1, i = !1, a = 0, s = 0, c = ["top", "right", "bottom", "left"], l = !0, u = !1, d = !1, p = [], f = { top: { visited: !1, value: 1 }, right: { visited: !1, value: 2 }, bottom: { visited: !1, value: 4 }, left: { visited: !1, value: 8 } }, m = 0, g = function () { if (!u) {
        u = !0, m = 0;
        var n = /(?:Firefox|Safari)[\/\s](\d+\.\d+)/.test(navigator.userAgent) ? document.body : document;
        e.on(n, "mouseleave", (function (e) { return v(e); })), e.on(document, "mousemove", (function (e) { return h(e); }));
    } }; var v = function (t) { var r, o, l, u, d, p, g; (r = function (e) { return e.clientX === e.clientY && e.clientX < 0 && e.clientX >= -1; }(t) ? "" : (o = t.clientX, l = t.clientY, u = e.winSize(), d = u.width, p = u.height, g = "", o >= d && (g = "right"), l >= p && (g = "bottom"), o <= 0 && (g = "left"), l <= 0 && (g = "top"), g)) || (r = function () { if (!i)
        return ""; var n = e.winSize(), t = n.width, r = n.height; return c[function (e) { if (0 === e.length)
        return -1; for (var n = e[0], t = 0, r = 1; r < e.length; r++)
        e[r] < n && (t = r, n = e[r]); return t; }([s, t - a, r - s, a])]; }(), r || n.debug("viewportExit: the detect of the exit side failed")), r && function (e) { -1 !== c.indexOf(e) ? f[e].visited || (f[e].visited = !0, m += f[e].value) : n.debug("viewportExit: the detect of the exit side failed"); }(r), w("all"), "top" === r && w("top"); }, h = function (e) { i = !0, s = e.clientY, a = e.clientX; }, w = function (e) { if (l) {
        for (var t, r = [], o = [], i = 0; i < p.length; i++)
            ((t = p[i]).detectExitMode === e || "back" === e && t.detectBackButtonForMobile) && t.consumeEventFn() ? r.push(t) : o.push(t);
        r.length && n.debug("viewportExit: listeners was run fire with type: ", e), p = o;
        for (i = 0; i < r.length; i++)
            (t = r[i]).callback();
    } }; return { name: "viewportExit", initialize: g, isInitialized: function () { return u; }, addListener: function (e, n, i) { "mobile" !== n.clientDevice && "tablet" !== n.clientDevice || !n.detectBackButtonForMobile || function () { if (!d) {
            d = !0, window.addEventListener("popstate", (function (e) { o && e.state && e.state.pianoViewportExitState === t && (o = !1, w("back")); }));
            var e = window.history.state || {};
            e && e.pianoViewportExitState !== r && (e.pianoViewportExitState !== t && (e.pianoViewportExitState = t, window.history.replaceState(e, document.title)), window.history.pushState({ pianoViewportExitState: r }, document.title)), o = !0;
        } }(), g(), "function" != typeof i && (i = function () { return !0; }), p.push({ callback: e, detectExitMode: n.detectExitMode, detectBackButtonForMobile: n.detectBackButtonForMobile, consumeEventFn: i }); }, resetSumOfCodesDirectionToDefault: function () { m = 0; }, getSumOfCodesDirection: function () { return m; }, removeListeners: function () { p = []; }, enable: function () { l = !0; }, disable: function () { l = !1; } }; }();
    pn.container.register("viewportExit", { useValue: We }), pn.viewportExit = pn.container.resolve("viewportExit");
    var Je = function () { var e = pn.container.resolve("postmessage"), n = pn.container.resolve("containerUtils"), t = pn.container.resolve("user"), r = pn.container.resolve("api"); pn.container.resolve("util"); function o(e) { return a(e, "/checkout/template/show"); } function i(e) { return e.initContextLoadPromise = function (e, n) { e.contextLoadingPromise = s(e, n); }, a(e, "/checkout/template/cacheableShow"); } var a = function (e, n) { var t = pn.getEndpointRoot(!0) + n; return e.iframeUrl = t, e.postMessageUrl = t, e.widget = "template", pn.offer.createOfferIframe(e); }, s = function (e, n) { var o = t.getUserInfoParams(e); return o.tracking_id = e.trackingId, o.templateId = e.templateId, o.templateVariantId = e.templateVariantId, o.aid = pn.aid, o.preload = e.isPreload, e.affiliateState && (o.affiliateState = JSON.stringify(e.affiliateState)), Object.keys(n).forEach((function (e) { o[e] = n[e]; })), new Promise((function (e, n) { r.callApi("/anon/template/loadTemplateContext", o, (function (t) { var r = t.code, o = t.templateContext, i = t.message; 0 === r ? e(o) : n(i); }), void 0, void 0, !0); })); }, c = function (e, n) { var t = {}; return ["aid", "templateId", "templateVariantId", "previewTemplateVersion", "preload", "preview", "previewUncached", "deploymentItemId", "gaClientId", "zuoraSelectedRatePlanIds", "newscycleSelectedIds", "addNewsletterAssets", "offerId", "experienceId", "iframeId", "displayMode", "debug", "pianoIdUrl", "widget", "url"].forEach((function (n) { e[n] && (t[n] = e[n]); })), n.param(t); }; function l(e) { pn.getCacheableShowTemplate() ? (!function (e) { e.deferredContextLoading = !0, e.buildQueryStringFn = c; }(e), e.createIframeFn = i) : e.createIframeFn = o; } return { name: "template", show: function (e) { return e.offerId = n.fakeOfferId, e.trackStatsOnShow = !0, l(e), pn.offer.show(e); }, deferredShow: function (e) { return e.offerId = n.fakeOfferId, l(e), pn.offer.deferredShow(e); }, close: function () { n.closeModalContainer(); }, closeInline: function (e) { n.__protected__.closeInlineContainers(e); }, createTemplateIframe: o, showBackdrop: function () { n.showBackdrop(); }, hideBackdrop: function () { n.hideBackdrop(); }, centerBackdrop: function (e) { n.centerBackdrop(e); }, registerCallback: function (e, n) { }, refreshUser: function (n) { t.refreshAccessToken(!0, (function () { e.send("externalLoginSuccess", { user_token: t.getProvider().getToken() }, n); })); } }; }();
    pn.container.register("template", { useValue: Je }), pn.template = pn.container.resolve("template");
    var Ge = function (e) { void 0 === e && (e = pn.container); var n, t, r = e.resolve("jqUtils"), o = e.resolve("util"), i = e.resolve("postmessage"), a = e.resolve("user"), s = e.resolve("containerUtils"), c = e.resolve("eventUtils"), l = e.resolve("viewportExit"), u = e.resolve("gaService"), d = e.resolve("sha1"), p = e.resolve("logging"), f = e.resolve("template"), m = {}, g = 0, v = "close", h = "OFFER", w = !1, y = !1, b = !1, k = {}, _ = new Map, C = {}, I = ["he_IL", "ar_EG"], S = c.createEventManager(["complete", "cancel", "close", "error", "loginRequired", "loginSuccess", "loaded", "customEvent", "startCheckout", "resize", "onMeterExpired", "onMeterActive", "onAccessGranted", "onShowOffer", "pianoIdEvent", "parentSize", "redeemCredit", "onStartCreditRedemption"]); s.setIframesPopstateHandlers(); var x = function () { return pn.offerBaseUrl ? pn.offerBaseUrl : pn.getEndpointRoot() + "/checkout/offer/show"; }; function P(e, n) { var c = s.getIframe(e.sender), d = !0; switch (c && c.config && (d = !c.config.parent), e.event) {
        case "initContext":
            if (e.params && e.params.resultCallbackId) {
                var p = { resultCallbackId: e.params.resultCallbackId, affiliateState: c.config.affiliateState };
                i.send("resultCallback", p, e.sender);
            }
            break;
        case "storeCustomVariables":
            tp.saveCustomVariablesToLocalStorage(300);
            break;
        case "fullRedirectThreeDS":
            window.location.href = e.params.bankSecureUrl;
            break;
        case "resize":
            if (e.params.iframeId === e.sender) {
                var f = void 0 === e.params.width ? ye(ye({}, e.params), { width: r.getWidth(c.container) }) : e.params;
                s.resizeIframe(c, f), "modal" === c.config.displayMode && ("boilerplate" === e.params.closeButtonType && s.hideCloseButton(c.container), s.centerIt(c.container)), i.send("afterResize", {}, c.iframeId);
            }
            S.fireCallbacks(e.event, e.params, e.sender, d);
            break;
        case "startCheckout":
            if (e.params.width = null, "inline" === e.displayMode) {
                e.params.closeOnLogout = !0;
                var m = q(e.params, c.statParams);
                m.browserId = c.browserId, m.isOpenedFromInlineCheckout = !0, K(m, e.sender);
            }
            e.params.iframeId === e.sender && S.fireCallbacks(e.event, e.params, e.sender, d);
            break;
        case "loaded":
            if (e.params.iframeId === e.sender) {
                if (i.send("setupCustomVariables", k[e.params.iframeId], e.params.iframeId), i.send("setupEVTFields", c.config.externalVerificationFields, e.params.iframeId), c.config.deferredContextLoading && T(c, e), c.waitFinishProcesses)
                    return void s.__protected__.closeAndRemoveIframe(c);
                "pianoId" === a.getProvider().name && pn.pianoId.__protected__.executePostMessagesBatch(), "modal" === c.config.displayMode && (s.resizeIframe(c, e.params), c.config.isPreload || s.checkBackdropAndContainer(c, !0)), "popup" === c.config.displayMode && s.resizeIframe(c, e.params), c.config.isPreload || c.config.trackStatsOnShow || B(c), V(c), S.fireCallbacks(e.event, e.params, e.sender, d), "inline" === c.config.displayMode && (c.containerReady ? s.resizeIframe(c, e.params) : s.operationWithContainer(c.iframeParams.containerSelector, (function (n) { var t = r.queryEl("#temp-inline-" + c.iframeId); t && (n.innerHTML = t.innerHTML, r.remove(t)), c.element = r.queryEl("iframe", n), c.containerReady = !0, s.resizeIframe(c, e.params); }))), R(c.config), o.doneCall("offerCreate");
            }
            break;
        case "downForMaintenance":
            s.resizeIframe(c, { width: 300, height: 200 }), "modal" === c.config.displayMode && (c.config.isPreload || s.checkBackdropAndContainer(c));
            break;
        case "removeQueryParamByName":
            e && e.params && Array.isArray(e.params.paramsToRemove) && e.params.paramsToRemove.forEach((function (e) { o.removeQueryParamByName(e); }));
            break;
        case "purge":
            n || (e && e.params && e.params.alreadyPurchased && (v = "alreadyHasAccess"), e && e.params && e.params.completePayment && (v = "checkoutCompleted"), s.purgeIframe(e.sender, c.config.parent), R(c.config));
            break;
        case "close":
            n || (e && e.params && e.params.alreadyPurchased && (v = "alreadyHasAccess"), e && e.params && e.params.completePayment && (v = "checkoutCompleted"), o.hasQueryParamByName("voucher_code") && (v = "voucherRedemptionCompleted"), s.closeContainer(e.sender, c.config.parent), R(c.config));
            break;
        case "closeAndRefresh":
            var g = e.params;
            g ? window.location.assign(g) : window.location.reload();
            break;
        case "selectTerm":
            v = e && e.params && e.params.alreadyPurchased ? "alreadyHasAccess" : "close";
            break;
        case "submitPayment":
        case "checkoutSelectTerm":
            S.fireCallbacks(e.event, q(e.params, { offerId: c.iframeParams.offerId }), e.sender, d);
            break;
        case "complete":
            if (void 0 !== e.params.token_list) {
                var h = e.params.user_token;
                !h && a.isUserValid() && "pianoId" === a.getProvider().name && (h = a.getProvider().getToken()), o.setAccessTokenListCookie({ value: e.params.token_list, cookie_domain: e.params.cookie_domain }, h);
            }
            var y = q(e.params, { offerId: c.iframeParams.offerId });
            S.fireCallbacks(e.event, y, e.sender, d), v = "checkoutCompleted";
            break;
        case "checkoutStateChange":
        case "checkoutPaymentError":
        case "alreadyPurchased":
        case "startThreeDBankSecure":
        case "cancel":
        case "error":
        case "customEvent":
            S.fireCallbacks(e.event, e.params, e.sender, d);
            break;
        case "loginRequired":
            w = !0, S.fireCallbacks(e.event, ne(c, e.params), e.sender, d);
            break;
        case "logout":
            A(e.event, e.params, e.sender, c.config.parent);
            break;
        case "loginSuccess":
            M(e.event, e.params, e.sender, d);
            break;
        case "inputFocus":
            var b = r.queryEl(".tp-modal");
            b && (b.style.zIndex = pn.zIndexes.modal + 1 + "", b.style.zIndex = pn.zIndexes.modal + "");
            break;
        case "inputBlur":
            var _ = r.queryEl(".tp-modal");
            _ && (_.style.zIndex = pn.zIndexes.modal + 1 + "", _.style.zIndex = pn.zIndexes.modal + "");
            break;
        case "getLocation":
            e.params && e.params.resultCallbackId && (e.params.result = window.location.href, i.send("resultCallback", e.params, e.sender));
            break;
        case "setLocationHash":
            e.params && e.params.hash && (window.location.hash = e.params.hash);
            break;
        case "langChangedWithinOffer":
            pn.pianoId.isConfigured() && pn.pianoId.updateLang(e.params.lang), I.indexOf(e.params.lang) >= 0 ? s.turnOnRTL(c) : s.turnOffRTL(c);
            break;
        case "loginStart":
            l.disable();
            break;
        case "loginEnd":
            l.enable();
            break;
        case "pianoIdEvent":
            e.params.iframeId === e.sender && ("closed" === e.params.event && s.closeContainer(e.sender), pn.pianoId.__protected__.offerMessageReceiver(e)), E(e.params, e.sender);
            break;
        case "swgCheckoutStart": break;
        case "sharedAccountsSuccessfullyAdded":
            i.broadcast("refreshMyAccount", { userToken: a.getProvider().getToken() });
            break;
        case "newsletterSignupImpression":
        case "newsletterSignupSubmission":
            pn.pianoEsp.__protected__.offerMessageReceiver(e), S.fireCallbacks(e.event, e.params, e.sender, d);
            break;
        case "parentSize":
            var C = r.winSize(), x = { width: C.width, height: C.height };
            i.send("parentSize", x, e.sender);
            break;
        case "gigyaPasswordlessLogin":
            e.params.iframeId === e.sender && (t = e.params.iframeId, pn.gigya.loginByPasswordless(e.params));
            break;
        case "emitGAEvent": return void (!n && u.emitEvent(e.params));
        case "emitMetricsEvent":
            !n && u.emitMetricsEvent(e.params);
            break;
        case "bannerInit":
            c.config.singleContainer.classList.add("tp-banner");
            break;
        case "bannerDestroy":
            c.config.singleContainer.classList.remove("tp-banner");
            break;
        case "redeemCredit":
            var P = S.fireCallbacks("onStartCreditRedemption", e.params, e.sender, d);
            P && P.then && P.then((function (n) { i.send("successfullyCreditRedeem", n, e.sender); }), (function (n) { i.send("creditRedeemFailed", n, e.sender); }));
            break;
        default: return void o.debug("Received invalid event type: " + e.event);
    } } var E = function (e, n) { "successDOI" === e.event && (e.iframeId !== n && s.closeContainer(e.iframeId), i.send("afterSuccessDOI", e.params, n)); }, T = function (e, n) { e.config.contextLoadingPromise.then((function (t) { var r = { iframeParams: e.iframeParams, userContext: t }; r.iframeParams.url = o.prepareUrlParameter(window.location.href), i.send("userDataContextLoaded", r, n.params.iframeId); })); }, A = function (e, n, t, r, o) { a.logout((function () { var e = {}; e.userProvider = a.getProvider().getName(), e.userToken = a.getProvider().getToken() && a.getProvider().getToken().length > 0 ? a.getProvider().getToken() : "", e.noNeedStartCheckout = !0, ee(e); }), h), n.closeOnLogout && s.closeModalContainer(t, r); }, M = function (e, n, t, r) { if (n.source = h, a.getProvider().onLoginSuccess(n), S.fireCallbacks("loginSuccess", n, t, r), !b) {
        var o = { userToken: n.user_token, user: n.user, reloadAfterLogin: !0 };
        ee(o, t);
    } }, O = function (e) { var n = e.displayMode || "modal"; return [e.offerId, n, e.containerSelector].join("|"); }, R = function (e) { var n = O(e); delete m[n]; }, L = function (e) { if (v = "close", Q(e), void 0 === e.displayMode)
        e.displayMode = "modal";
    else if ("modal" !== e.displayMode && "inline" !== e.displayMode && "popup" !== e.displayMode)
        return o.log("Invalid offer displayMode; must be one of: modal, inline, popup"), void R(e); if ("modal" === e.displayMode && !e.isPreload && s.hasModalIframe())
        return o.log("Modal offer is already shown; must be one modal offer per time"), void R(e); if ("modal" !== e.displayMode) {
        var n, t = r.qa(e.containerSelector);
        if (!e.isPreload)
            if (t.forEach((function (t) { var r = q({}, e); r.singleContainer = t, n = N(r); })), n)
                return n;
        var i = t[t.length - 1];
        i && (e.singleContainer = i);
    } return N(e); }; function N(e, c) { var l = function (e) { var n = {}; e.termIds && (e.termIds instanceof Array || (e.termIds = [e.termIds])); var t = e.additionalParamNames ? e.additionalParamNames : []; ["displayMode", "containerSelector", "templateId", "templateVariantId", "offerId", "termId", "termIds", "rid", "aid", "isCheckout", "isOpenedFromInlineCheckout", "pw_id", "paywallId", "width", "preview", "previewUncached", "previewTemplateType", "previewTemplateVersion", "tokenType", "janrainCaptureToken", "closeOnLogout", "voucherCode", "isRedemption", "allowReturnToStartState", "startFromInlineCheckout", "formNameByTermId", "hideCompletedFields", "startFromInlineCheckout", "reloadAfterLogin", "preventReloadAfterLogin", "isAuth", "authStartScreen", "showCloseButton", "closeButtonType", "checkoutFlowId", "offerState", "oid", "promoCode", "promoCodeId", "promoCodeTermId", "rurl_3ds", "thirdPartyParams", "termId3ds", "providerId", "deploymentItemId", "sharedAccountCode", "targetedTermId", "widget"].concat(["trackingId", "experienceId", "activeMeters"], t).forEach((function (t) { e[t] && (n[t] = e[t]), "showCloseButton" === t && (void 0 === e[t] ? n[t] = !0 : n[t] = e[t]); })); var r = decodeURIComponent(o.getQueryParamByName("_ptid")); return r && (n.trackingId = r), e.preview && (n.activeMeters = JSON.stringify([{ meterName: "preview-meter", views: 10, viewsLeft: 5, maxViews: 20, totalViews: 20 }])), n; }(e); l.widget || (l.widget = "offer"); var d = o.getTbcCookie(); d && d.length > 0 && (l.tbc = d), e.deferredContextLoading ? (l.iframeId = U(e), l.url = window.location.origin) : (l.iframeId = "offer-" + g++ + "-" + o.randomString(), l.url = o.prepareUrlParameter(window.location.href)); var f = r.winSize(); l.parentDualScreenLeft = void 0 !== window.screenLeft ? window.screenLeft : screen.left, l.parentDualScreenTop = void 0 !== window.screenTop ? window.screenTop : screen.top, l.parentWidth = f.width ? f.width : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width, l.parentHeight = f.height ? f.height : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height, l.parentOuterHeight = window.outerHeight, e.previewNonLoggedUser && (l.previewNonLoggedUser = e.previewNonLoggedUser), e.isPreload && (l.preload = 1), pn.locale && (l.lang = pn.locale), u.getClientId() && (l.gaClientId = u.getClientId()), u.getGAAccount() && (l.gaAccount = u.getGAAccount()), function (e) { ["debug", "aid", "gaClientId", "tags", "contentSection", "contentAuthor", "debug", "zone"].forEach((function (n) { pn[n] && (e[n] = pn[n]); })), pn.customVariables && (k[e.iframeId] = JSON.stringify(pn.customVariables)); var n = pn.contentCreated; n && (e.contentCreated = n), pn && pn.main && (e.pageViewId = pn.main.fetchPageViewId(), e.visitId = pn.main.fetchVisitId()); }(l); var m = S.hasCallback("loginRequired"); if (!pn.janrain.isConfigured() || void 0 !== e.loginRequired && e.loginRequired)
        if (!pn.gigya.isConfigured() || void 0 !== e.loginRequired && e.loginRequired)
            if (pn.pianoId.isConfigured()) {
                void 0 !== e.loginRequired && e.loginRequired || (e.loginRequired = function (e) { if (!e.preventExternalLogin)
                    return n = e.termId, t = l.iframeId, pn.pianoId.show({ screen: e.startScreen }), !1; }), W(), l.pianoIdUrl = pn.pianoId.getIframeUrl();
                var h = pn.pianoId.getLang();
                h && (l.lang = h), pn.pianoId.onLangChange((function (e) { i.send("langChanged", { lang: e }, l.iframeId); }), l.iframeId);
            }
            else
                pn.pianoIdLite.isConfigured() && (l.pianoIdUrl = pn.pianoId.getIframeUrl());
        else {
            b = [];
            pn.gigya.registerCallback("onHide", (function (e) { s.activateContainers(b), i.send("gigyaHide", e, t); })), z(), e.loginRequired = function (e) { return y = e.allowReturnToStartState, w = !1, b = s.hideModalContainer(), n = e.termId, t = l.iframeId, o.waitCall("refreshUserToken", (function () { pn.gigya.login(); })), !1; };
        }
    else {
        var b = [];
        pn.janrain.addEventHandler("onModalClose", (function () { s.activateContainers(b); })), H(), e.loginRequired = function (e) { return b = s.hideModalContainer(), y = e.allowReturnToStartState, w = !1, n = e.termId, t = l.iframeId, o.waitCall("refreshUserToken", (function () { pn.janrain.login(void 0, e); })), !1; };
    } l.userProvider = a.getProvider().getName(), e.userToken ? l.userToken = e.userToken : l.userToken = a.getProvider().getToken() && a.getProvider().getToken().length > 0 ? a.getProvider().getToken() : "", o.getCampaigns(l), l.customCookies = JSON.stringify(o.getCustomCookies()), S.registerCallback(e, l.iframeId), l.hasLoginRequiredCallback = S.hasIframeCallback("loginRequired", l.iframeId) || m, l.initMode = "context", j(l); var _ = e.iframeUrl ? e.iframeUrl : l.isCheckout ? pn.getEndpointRoot(!0) + "/checkout/offer/show" : x(), I = e.postMessageUrl ? e.postMessageUrl : x(); e.deferredContextLoading && e.initContextLoadPromise(e, D(l)); var E = F(l, e), T = s.createContainer({ url: _, config: e, parent: e.parent, postMessageUrl: I, receive: P, iframeParams: l, singleContainer: e.singleContainer, close: function () { S.fireCallbacks("close", { state: v }, l.iframeId, !0); } }), A = _.indexOf("/offer/") ? "offerShow" : "templateShow"; return p.setTime(A), C = _.indexOf("/template/") && l.offerId === s.fakeOfferId ? l : C, T.statParams = E, T.browserId = e.browserId, T; } var U = function (e) { var n = 0, t = "offer_" + d.hash(e.iframeUrl + "?" + e.buildQueryStringFn(e, r), 20); return _.has(t) && (n = _.get(t) + 1), _.set(t, n), t + "-" + n; }, j = function (e) { var n = o.getQueryParamByName("termId"), t = o.getQueryParamByName("paySource"); n && (e.termId = n), t && (e.paySource = t); }, D = function (e) { var n = {}; return ["tbc", "trackingId", "pageViewId", "visitId", "tags", "contentCreated", "contentSection", "contentAuthor"].forEach((function (t) { e[t] && (n[t] = e[t]); })), Object.keys(e).forEach((function (t) { 0 === t.indexOf("tpcc_") && (n[t] = e[t]); })), n; }, F = function (e, n) { var t = {}; return n.trackStatsOnShow || n.deferredContextLoading || (t = D(e), Object.keys(t).forEach((function (n) { delete e[n]; }))), t; }, B = function (e) { var n = q(e.iframeParams, e.statParams); e.config.affiliateState && (n.affiliateState = e.config.affiliateState), i.send("trackStat", n, e.iframeId); }, V = function (e) { var n = { browserId: e.browserId }; i.send("passBrowserId", n, e.iframeId); }, q = function (e, n) { var t = {}; return Object.keys(e).forEach((function (n) { t[n] = e[n]; })), Object.keys(n).forEach((function (e) { t[e] = n[e]; })), t; }, z = function () { b || (pn.gigya.registerCallback("userChanged", (function (e) { if (e && e.user_token) {
        var r = { token_list: e.access_token.value, user_token: e.user_token, userToken: e.user_token, cookie_domain: e.access_token.cookie_domain, user: e.user, allowReturnToStartState: y, termId: n };
        if (t)
            s.getIframe(t) ? (i.send("externalLoginSuccess", r, t), delete r.termId, ee(r, t)) : ee(r);
        else
            ee(r);
    } })), pn.gigya.registerCallback("logout", (function () { var e, r = {}; r.userProvider = a.getProvider().getName(), r.userToken = a.getProvider().getToken() && a.getProvider().getToken().length > 0 ? a.getProvider().getToken() : "", r.noNeedStartCheckout = !0, t && (e = s.getIframe(t)), e && "inline" === e.config.displayMode && s.closeModalContainer(), n = "", t = "", y = !1, ee(r); })), b = !0); }, H = function () { b || (pn.janrain.registerCallback("userChanged", (function (e) { if (e && e.user_token) {
        var r = { token_list: e.access_token.value, user_token: e.user_token, userToken: e.user_token, cookie_domain: e.access_token.cookie_domain, user: e.user, allowReturnToStartState: y, termId: n };
        if (t)
            s.getIframe(t) ? (i.send("externalLoginSuccess", r, t), delete r.termId, ee(r, t)) : ee(r);
        else
            ee(r);
    } })), pn.janrain.addEventHandler("onCaptureSessionEnded", (function () { var e, r = {}; r.userProvider = a.getProvider().getName(), r.userToken = a.getProvider().getToken() && a.getProvider().getToken().length > 0 ? a.getProvider().getToken() : "", r.noNeedStartCheckout = !0, t && (e = s.getIframe(t)), e && "inline" === e.config.displayMode && s.closeModalContainer(), n = "", t = "", y = !1, ee(r); })), b = !0); }, W = function () { b || (pn.pianoId.setCallbacks({ loggedIn: function (e) { o.log("offer.js - piano id user logged in"); var r = { user_token: e.token, userToken: e.token, user: e.user, reloadAfterLogin: !0, termId: n }; t ? s.getIframe(t) ? (i.send("externalLoginSuccess", r, t), Z(t, r), delete r.termId, ee(r, t)) : ee(r) : ee(r); }, loggedOut: function (e) { if (e.source !== h) {
            var r = {};
            r.userProvider = a.getProvider().getName(), r.userToken = a.getProvider().getToken() && a.getProvider().getToken().length > 0 ? a.getProvider().getToken() : "", r.noNeedStartCheckout = !0, ee(r);
        } n = "", t = ""; } }), b = !0); }; function J(e) { return s.showPreloadedContainer(e); } var G = function (e) { var n = e.offerId === s.fakeOfferId ? "showTemplate" : "showOffer"; S.hasCallback(n) && S.fireCallbacks(n, e, void 0, !0); }, Q = function (e) { [{ queryParam: "promo_code", configParam: "promoCode" }].forEach((function (n) { var t = o.getQueryParamByName(n.queryParam); t.length && (e[n.configParam] = t); })); }, X = function (e) { if (e.offerId || !0 === e.preview) {
        if (function (e) { var n = O(e); return !!m[n]; }(e))
            return !1;
        e.preview || function (e) { var n = O(e); m[n] = !0; }(e), setTimeout((function () { R(e); }), 1e4), o.waitCall("refreshUserToken", (function () { o.waitCall("refreshAccessTokenList", (function () { o.waitCall("myAccountLogin", (function () { var n; if (o.startCall("offerCreate"), e.createIframeFn ? (Q(e), n = e.createIframeFn(e)) : n = L(e), !n)
            return o.doneCall("offerCreate"), void o.error("Could not initialize offer; check configuration"); $(e) && Y(n.iframeId), G(e); })); })); }));
    }
    else
        o.error("Must specify offerId"); }; var $ = function (e) { return !!e.directCheckout && "inline" !== e.displayMode; }, Y = function (e) { o.waitCall("offerCreate", (function () { i.send("startDirectCheckout", {}, e); })); }, K = function (e, n) { if (!function (e) { return !e.offerId && !e.isRedemption && !e.preview; }(e)) {
        var t = S.hasCallback("loginRequired");
        e.isSiteLicensing && t && (te() || re()) ? f.refreshUser(C.iframeId) : (s.hasModalIframe() && s.closeModalContainer(), o.debug("creating checkout: ", e), e.displayMode = "popup" === e.displayMode ? "popup" : "modal", e.isCheckout = !0, e.parent = n, o.waitCall("refreshUserToken", (function () { o.waitCall("refreshAccessTokenList", (function () { var t; o.startCall("offerCreate"), t = e.createIframeFn ? e.createIframeFn(e) : L(e), s.__protected__.addChildToInlineIframe(t, n), t ? w && o.waitCall("offerCreate", (function () { w = !1; var e = {}; e.userProvider = a.getProvider().getName(), a.getProvider().getToken() && a.getProvider().getToken().length > 0 ? e.userToken = a.getProvider().getToken() : e.userToken = "", e.noNeedStartCheckout = !0, e.noNeedStartCheckoutAfterLogin = !0, ee(e, t.iframeId); })) : (o.doneCall("offerCreate"), o.error("Could not start checkout; check configuration")); })); })));
    } }, Z = function (e, n) { i.send("reloadOffer", n, e); }, ee = function (e, n) { i.broadcast("reloadOffer", e, n); }, ne = function (e, n) { var t = { reloadAfterLogin: !0 }; return Object.assign(t, e.config), t.singleContainer && delete t.singleContainer, n.termId && (t.termId = n.termId), n.term && (t.term = {}, t.term = q(t.term, n.term)), n.startScreen && (t.startScreen = n.startScreen), n.isRedemption && (t.isRedemption = n.isRedemption, t.voucherCode = n.redemption && n.redemption.form && n.redemption.form.redeemCode, t.termId = null), n && n.currentState && "modal" === e.config.displayMode && (t.allowReturnToStartState = !0), n.preventExternalLogin && (t.preventExternalLogin = n.preventExternalLogin), n.sharedAccountCode && (t.sharedAccountCode = n.sharedAccountCode), n.isSiteLicensing && (t.isSiteLicensing = n.isSiteLicensing), n.campaignCode && (t.campaignCode = n.campaignCode), n.campaignGroupId && (t.campaignGroupId = n.campaignGroupId), t.displayMode = "modal", t; }, te = function () { return "publisher_user_ref" === a.getProvider().getName(); }, re = function () { return "piano_id_lite" === a.getProvider().getName(); }; return { name: "offer", show: function (e) { "inline" === e.displayMode ? s.operationWithContainer(e.containerSelector, (function () { X(e); })) : X(e); }, deferredShow: function (e) { return function (e) { var n, t, r, i = new Promise((function (e, r) { n = e, t = r; })), a = new Promise((function (e, n) { r = e; })); return "popup" !== e.displayMode && e.offerId ? o.waitCall("refreshAccessTokenList", (function () { var i; e.isPreload = !0, o.startCall("offerCreate"), e.createIframeFn ? (Q(e), i = e.createIframeFn(e)) : i = L(e), i ? (i.element.onload = function () { r(i); }, n(i)) : (o.doneCall("offerCreate"), o.error("Could not initialize offer; check configuration"), t()); })) : t(), { promise: i, show: function () { i.then(J).then((function () { return a; })).then((function (n) { B(n), $(e) && Y(n.iframeId), G(e); }), (function () { X(e), delete e.isPreload; })); } }; }(e); }, close: function () { s.closeModalContainer(); }, closeInline: function (e) { s.__protected__.closeInlineContainers(e); }, startCheckout: K, startRedeemVoucher: function (e, n) { s.closeModalContainer(), e || (e = {}), e.isRedemption = !0, o.debug("starting redeem voucher: ", e), e.displayMode = "popup" === e.displayMode ? "popup" : "modal", e.isCheckout = !1, e.parent = n, o.waitCall("refreshAccessTokenList", (function () { o.startCall("offerCreate"), (e.createIframeFn ? e.createIframeFn(e) : L(e)) || (o.doneCall("offerCreate"), o.error("Could not start redeem; check configuration")); })); }, createOfferIframe: L, showBackdrop: function () { s.showBackdrop(); }, hideBackdrop: function () { s.hideBackdrop(); }, centerBackdrop: function (e) { s.centerBackdrop(e); }, registerCallback: function (e, n) { S.addEvent(e), S.registerCallback(e, n); }, reload: Z, reloadAll: function (e, n) { var t = e || {}; o.waitCall("refreshUserToken", (function () { ee(Object.assign(t, { userToken: pn.user.getProvider().getToken() }), n); })); }, resetUserAndReloadAll: function (e, n) { var t = e || {}; ee(Object.assign(t, { userToken: "" }), n); }, checkThreeDSRedirect: function () { var e = "pn_rurl_3ds", n = o.getQueryParamByName(e); if (n) {
            var t = { offerId: "pn_offer_id", oid: "pn_oid", termId3ds: "pn_term_id", providerId: "pn_provider_id", thirdPartyParams: "third_party_params" }, r = [e], i = Object.keys(t).reduce((function (e, n) { var i = Object.assign({}, e); return i[n] = o.getQueryParamByName(t[n]), r.push(t[n]), i; }), {});
            o.removeQueryParamByName(r), X(Object.assign({ displayMode: "modal", rurl_3ds: n }, i));
        } } }; };
    pn.container.register("offer", { useValue: Ge() }), pn.offer = pn.container.resolve("offer");
    var Qe = function () { var e, n = pn.container.resolve("jqUtils"), t = pn.container.resolve("util"), r = pn.container.resolve("postmessage"), o = pn.container.resolve("offer"), i = pn.container.resolve("user"), a = pn.container.resolve("containerUtils"), s = pn.container.resolve("pianoId"), c = pn.container.resolve("logging"), l = {}, u = !1, d = { loginRequired: [], loginSuccess: [] }, p = function () { return pn.getEndpointRoot() + "/checkout/myaccount/show"; }, f = function (e, n) { e.element.style.height = (e.config.maxHeight ? Math.min(n.height, e.config.maxHeight) : n.height) + "px", e.container.style.height = (e.config.maxHeight ? Math.min(n.height, e.config.maxHeight) : n.height) + "px", e.element.style.width = n.width + "px", "modal" === e.config.displayMode && (e.container.style.width = n.width + "px"), r.send("resized", { height: e.config.maxHeight ? Math.min(n.height, e.config.maxHeight) : n.height, width: n.width }, e.iframeId); }, m = function (t, r, i) { return function () { e && (n.removeClass("tp-active", e), o.hideBackdrop(), window.setTimeout((function () { n.remove(e); }), 250), r.result = i, t(r)); }; }, g = function (e) { var t = n.winSize(); e.offsetHeight > t.height ? (!1 === u && (e.style.position = "absolute", u = !0), e.style.marginTop = window.scrollY - .5 * t.height + "") : (!0 === u && (e.style.position = "fixed", u = !1), e.style.marginTop = 0 - .5 * e.offsetHeight + ""), o.centerBackdrop(e), e.style.marginLeft = 0 - .5 * e.offsetWidth + ""; }, v = function (t, i) { !function (t, r) { var i = document.createElement("div"); n.addClass("tp-modal", i); var a = document.createElement("div"); n.addClass("tp-close", a); var s = document.createElement("div"); n.addClass("tp-message", s), i.style.width = (t.width ? t.width : 400) + "px", s.innerHTML = t.message; var c = document.createElement("div"); n.addClass("tp-btn-container", c); var l = document.createElement("button"); n.addClass("tp-btn", l), n.addClass("tp-ok-btn", l), l.innerHTML = t.ok ? t.ok : "Ok"; var u = document.createElement("button"); n.addClass("tp-btn", u), n.addClass("tp-cancel-btn", u), u.innerHTML = t.cancel ? t.cancel : "Cancel", n.on(a, "click", m(r, t, "cancel")), n.on(u, "click", m(r, t, "cancel")), n.on(l, "click", m(r, t, "ok")), n.append(i, a), n.append(i, s), n.append(c, l), n.append(c, u), n.append(i, c), n.append(document.body, i), o.showBackdrop(), n.addClass("tp-active", i), g(i), e = i; }(i.params, (function (e) { r.send("closeDialog", e, l[i.sender].iframeId); })); }, h = function (e, n) { d[e] = d[e] || [], d[e].push(n); }, w = function (e, n, o) { if (t.debug("received event: " + e, n), void 0 !== d[e]) {
        for (var i = 0; i < d[e].length; ++i) {
            t.debug("firing callback for event: " + e);
            var a = d[e][i](n);
            n && n.resultCallbackId && (n.result = a, n.event = e, r.send("resultCallback", n, o));
        }
        !d[e].length && n && n.resultCallbackId && (n.callbackNotFound = !0, n.event = e, r.send("resultCallback", n, o));
    } }, y = function (e) { switch (t.log("*** My account event received", e.event, e.params), e.event) {
        case "resize":
            t.debug("*** Resize event", e.params.width, e.params.height), f(l[e.sender], e.params), "modal" === l[e.sender].config.displayMode && g(l[e.sender].container);
            break;
        case "loaded":
            r.send("initMaxHeight", { height: l[e.sender].config.maxHeight }, l[e.sender].iframeId), f(l[e.sender], e.params), "pianoId" === i.getProvider().name && s.__protected__.executePostMessagesBatch(), "modal" === l[e.sender].config.displayMode && window.setTimeout((function () { n.addClass("tp-active", l[e.sender].container), g(l[e.sender].container); }), 25);
            break;
        case "cancel":
        case "complete":
        case "error":
        case "loginRequired":
        case "customEvent":
            w(e.event, e.params, e.sender);
            break;
        case "openDialog":
            v(e.event, e);
            break;
        case "pianoIdProfileUpdated":
            s.onProfileUpdate(e.params, (function () { var n = e.params; n && n.resultCallbackId && r.send("resultCallback", n, e.sender); var t = { userToken: e.params.token, user: e.params.user }; b(t); }));
            break;
        case "extendedUserLoginRequired":
            s.onExtendedUserLoginRequired();
            break;
        case "loginSuccess":
            i.getProvider().onLoginSuccess(e.params);
            var o = { reloadAfterLogin: !0, userToken: e.params.user_token, user: e.params.user };
            b(o), w(e.event, e.params, e.sender);
            break;
        case "logout":
            i.logout((function () { var e = {}; e.userProvider = i.getProvider().getName(), e.userToken = i.getProvider().getToken() && i.getProvider().getToken().length > 0 ? i.getProvider().getToken() : "", b(e); })), w(e.event, e.params, e.sender);
            break;
        case "userProfileUpdateSuccess":
            var a = e, c = a.event, u = a.params, d = a.sender;
            i.getProvider().onLoginSuccess(u);
            var p = { userProvider: u.user_provider, userToken: u.user_token };
            for (var m in b(p), w(c, u, d), l)
                if (l.hasOwnProperty(m)) {
                    var h = l[m].config;
                    h.hasOwnProperty("userToken") && delete h.userToken, I(h);
                }
            break;
        case "langChangedWithinMyAccount":
            s.isConfigured() && s.updateLang(e.params.lang);
            break;
        case "requestScrollData":
            k(e.sender);
            break;
        case "downForMaintenance":
            f(l[e.sender], { width: 300, height: 200 });
            break;
        case "removeQueryParamByName":
            Array.isArray(e.params.paramsToRemove) && e.params.paramsToRemove.forEach((function (e) { t.removeQueryParamByName(e); }));
            break;
        case "getTrackingData":
            r.send("getTrackingDataResponseEvent", { pageViewId: pn.main.fetchPageViewId(), tbc: t.getTbcCookie() }, e.sender);
            break;
        default: return void t.log("Received invalid event type: " + e.event);
    } }, b = function (e) { r.broadcast("reloadOffer", e); }, k = function (e) { var n = l[e].element.getBoundingClientRect(), t = { iframeRect: { bottom: n.bottom, height: n.height, left: n.left, right: n.right, top: n.top, width: n.width } }; r.send("returnScrollData", t, e); }; function _(e) { var o = { widget: "myaccount" }; if (e.templateId && (o.templateId = e.templateId), void 0 === e.displayMode)
        e.displayMode = "inline";
    else if ("modal" !== e.displayMode && "inline" !== e.displayMode)
        return void t.log("Invalid offer displayMode; must be one of: modal, inline"); if (o.displayMode = e.displayMode, o.iframeId = t.randomString(16), o.url = window.location.href, o.initialWidth = e.width, o.initialHeight = e.height, o.maxHeight = e.maxHeight, pn.locale && (o.lang = pn.locale), !pn.janrain.isConfigured() || void 0 !== e.loginRequired && e.loginRequired)
        if (!pn.gigya.isConfigured() || void 0 !== e.loginRequired && e.loginRequired)
            if (pn.pianoId.isConfigured()) {
                v = e;
                if (pn.pianoId.setCallbacks({ loggedIn: function (n) { var t; o.userToken !== n.token && (e.loginSuccess && (t = e.loginSuccess(n)), (void 0 === t || t) && (v.userToken = n.token, I(v))); }, loggedOut: function () { var e = {}; e.userProvider = i.getProvider().getName(), e.userToken = i.getProvider().getToken() && i.getProvider().getToken().length > 0 ? i.getProvider().getToken() : "", b(e); } }), void 0 === e.loginRequired || !e.loginRequired) {
                    var s = 0;
                    e.loginRequired = function () { if (++s > 10)
                        t.log("Too many attemps to login for myAccount");
                    else {
                        var e = t.getQueryParamByName("verification_code");
                        pn.pianoId.show({ verificationCode: e });
                    } };
                }
                o.pianoIdUrl = pn.pianoId.getIframeUrl();
                var u = pn.pianoId.getLang();
                u && (o.lang = u), pn.pianoId.onLangChange((function (e) { r.send("langChanged", { lang: e }, o.iframeId); }), o.iframeId);
            }
            else
                pn.pianoIdLite.isConfigured() && (o.pianoIdUrl = pn.pianoId.getIframeUrl());
        else {
            m = [];
            pn.gigya.registerCallback("onHide", (function () { a.activateContainers(m), t.doneCall("myAccountLogin"); })), e.loginRequired = function () { var n = e; t.waitCall("refreshAccessTokenList", (function () { t.waitCall("offerCreate", (function () { t.startCall("myAccountLogin"), m = a.hideModalContainer(), pn.gigya.login((function (t) { var r; e.loginSuccess && (r = e.loginSuccess(t)), (void 0 === r || r) && (n.userToken = t.user_token, I(n)); })); })); })); };
        }
    else {
        var m = [], v = e;
        pn.janrain.addEventHandler("onModalClose", (function () { a.activateContainers(m), t.doneCall("myAccountLogin"); })), pn.janrain.registerCallback("userChanged", (function (n) { var t; n && n.user_token && (e.loginSuccess && (t = e.loginSuccess(n)), (void 0 === t || t) && (v.userToken = n.user_token, I(v))); })), pn.janrain.addEventHandler("onCaptureSessionEnded", (function (n) { var t; e.loginSuccess && (t = e.loginSuccess(n)), (void 0 === t || t) && (v.userToken = null, I(v)); })), e.loginRequired = function () { return t.waitCall("refreshAccessTokenList", (function () { t.waitCall("offerCreate", (function () { t.startCall("myAccountLogin"), m = a.hideModalContainer(), pn.janrain.login(); })); })), !1; };
    } return new Promise((function (a) { t.waitCall("refreshUserToken", (function () { var s, u = {}; if ("inline" === e.displayMode) {
        if (!e.containerSelector)
            return void t.log("My account must have a valid containerSelector");
        if (!(s = n.queryEl(e.containerSelector)))
            return void t.log("My account must have a valid containerSelector");
        o.width = n.getWidth(s);
    }
    else
        s = function () { var e = document.createElement("div"); n.addClass("tp-modal", e); var t = document.createElement("div"); return n.addClass("tp-close", t), n.append(e, t), n.append(document.body, e), e; }(); for (var m in o.pageViewId = pn.main.fetchPageViewId(), o.tbc = t.getTbcCookie(), o.userProvider = i.getProvider().getName(), e.userToken ? o.userToken = e.userToken : o.userToken = i.getProvider().getToken(), d)
        "function" == typeof e[m] && (t.debug("Registering " + m + " callback for iframe " + o.iframeId), h(m, e[m])); o.aid = pn.aid, pn.isSensitiveDataProtectionEnabled && (u = { userToken: o.userToken, iframeId: o.iframeId }, delete o.userToken); var v = p() + "?" + n.param(o), w = document.createElement("iframe"), b = { scrolling: "no", allowtransparency: "true", name: o.iframeId, id: o.iframeId, allow: "payment" }; pn.isSensitiveDataProtectionEnabled || (b.src = v), Object.keys(b).forEach((function (e) { n.setAttr(e, b[e], w); })); var k = { overflow: "hidden", border: "0", height: "0" }; if ("inline" === e.displayMode ? k.width = o.width + "px" : k.width = 0, Object.keys(k).forEach((function (e) { w.style[e] = k[e]; })), l[o.iframeId] = { iframeId: o.iframeId, config: e, element: w, container: s, containerWidth: n.getWidth(s), containerHeight: n.getHeight(s) }, r.init({ postMessageUrl: p(), receive: y, iframe: l[o.iframeId] }), n.on(window, "keyup", (function (e) { })), "modal" === e.displayMode && n.on(window, "resize", (function () { g(s); })), "modal" === e.displayMode ? g(s) : n.empty(s), pn.isSensitiveDataProtectionEnabled) {
        u.iframeSrc = v;
        var _ = C(u);
        n.append(s, w), n.append(s, _), _.submit();
    }
    else
        n.append(s, w); if (n.on(window, "resize", (function () { !function () { for (var e in l) {
        var t = l[e], o = !1, i = n.getWidth(t.container);
        i !== t.containerWidth && (t.element.style.width = i + "", t.containerWidth = i, o = !0);
        var a = n.getHeight(t.container);
        a !== t.containerHeight && (t.element.style.height = a + "", t.containerHeight = a, o = !0), o && r.send("resize", { width: i, height: a }, e);
    } }(); })), "inline" === e.displayMode && window.ResizeObserver) {
        var I = new ResizeObserver((function (e) { var t = n.getWidth(s); t > 0 && f(l[o.iframeId], { width: t }); }));
        I.observe(s), l[o.iframeId].resizeObserver = I;
    } pn.offer && pn.offer.registerCallback("complete", (function () { r.send("refreshNow", {}, o.iframeId); })), a(l[o.iframeId]), c.setTime("myAccountShow"); })); })); } var C = function (e) { var t = document.createElement("form"), r = { id: "form_" + e.iframeId, method: "post", action: e.iframeSrc, target: e.iframeId }; return n.setAttrs(r, t), [{ name: "userToken", value: e.userToken }].forEach((function (e) { var r = document.createElement("input"), o = { type: "hidden", name: e.name }; n.setAttrs(o, r), r.value = e.value, n.append(t, r); })), t; }, I = function (e) { t.waitCall("offerCreate", (function () { t.waitCall("refreshAccessTokenList", (function () { var n; null === (n = _(e)) || void 0 === n || n.then((function (e) { e || t.log("Could not initialize my account; check configuration"); })); })); })); }; return { name: "myaccount", show: I, registerCallback: h }; }();
    pn.container.register("myaccount", { useValue: Qe }), pn.myaccount = pn.container.resolve("myaccount");
    var Xe = function () { var e = pn.container.resolve("jqUtils"), n = pn.container.resolve("util"), t = pn.container.resolve("api"), r = pn.container.resolve("offer"), o = pn.container.resolve("eventUtils").createEventManager(["onCheckoutSuccess", "onMeterExpired", "onMeterError", "onAccessGranted", "onMeterActive", "onMeterInactive", "meterSelector"]), i = { state: "ok", views_left: null, offer_id: "", curtain_template_id: "", reminder_template_id: "", cookie_name: "", cookie_value: "", cookie_expires: "", show_reminder: !1, show_close_button: !1 }, a = function (e, t) { return o.fire(void 0, e, !0, t), !u[e] || "function" != typeof u[e] || (n.debug("_customCaller called with " + e), u[e](t)); }, s = function (n) { (n = n || {}).offerId || (n.offerId = i.offer_id), n.templateId || (n.templateId = i.curtain_template_id), n.displayMode || (n.displayMode = u.displayMode), n.containerSelector || (n.containerSelector = u.containerSelector), n.showCloseButton || (n.showCloseButton = i.show_close_button), "function" === e.type(u.close) && (n.close = u.close), "function" === e.type(u.loginRequired) && (n.loginRequired = u.loginRequired), "function" === e.type(u.customEvent) && (n.customEvent = u.customEvent), "function" === e.type(u.onCheckoutSuccess) && (n.complete = u.onCheckoutSuccess), r.createOfferIframe(n); }, c = function (e) { if (a("___onProcessMeter", e), !e.user_meter)
        return n.log("Could not load meter", e), void a("onMeterError", e); if ((i = e.user_meter) && i.cookie_name && i.cookie_value && i.cookie_expires) {
        var t = { path: "/", expires: i.cookie_expires };
        i.cookie_domain && (t.domain = i.cookie_domain), n.__protected__.setCookie(i.cookie_name, i.cookie_value, t);
    } "ok" === i.state ? function (e) { n.debug("_handleMeterActive", e), e.show_reminder && e.reminder_template_id && e.track_page_view && a("onShowOffer", e) && s({ templateId: e.reminder_template_id }), a("onMeterActive", e); }(i) : "ap" === i.state ? function (e) { n.debug("_handleAccessGranted", e), a("onAccessGranted", e); }(i) : "ia" === i.state ? function (e) { n.debug("_handleMeterInactive", e), a("onMeterInactive", e); }(i) : function (e) { n.debug("_handleExpired", e), a("onMeterExpired", e), e.track_page_view && a("onShowOffer", e) && s(); }(i); }, l = function (e, r, o) { if (null !== u.paywallId && "" !== u.paywallId) {
        var i = document.URL;
        e && "function" == typeof e.getAttribute && e.getAttribute("href") ? i = e.getAttribute("href") : e && "function" == typeof e.attr && e.attr("href") && (i = e.attr("href"));
        var a = u.trackPageview;
        a && delete u.trackPageview;
        var s = u.meterSelector();
        s || (s = "");
        var l = { paywall_id: u.paywallId, url: encodeURI(i), referer: encodeURI(u.referer), track_page_view: a, meter_name: s, pageview_id: pn.main.fetchPageViewId() };
        r && (l.transaction_id = r), u.referer = "";
        var d = n.__protected__.getCookie("umc");
        if (d)
            l.umc = d;
        else {
            var p = n.__protected__.getCookie("umc_" + u.paywallId);
            p && (l.umc = p);
        }
        t.callApi("/anon/meter/load", l, (function (e) { c(e), "function" == typeof o && o(); }));
    }
    else
        n.debug("You must specify a paywallId in your configuration"); }, u = { paywallId: null, trackPageview: !0, trackExternalReferrer: !0, referer: document.referrer, offerURL: "", displayMode: "modal", containerSelector: "", onCheckoutSuccess: function () { }, onMeterExpired: function () { }, onMeterError: function () { }, onAccessGranted: function () { }, onMeterActive: function () { }, onMeterInactive: function () { }, meterSelector: function () { } }; return { name: "meter", init: function (e) { if (void 0 !== e)
            if (void 0 !== e.paywallID || void 0 !== e.paywallId) {
                for (var t in void 0 === e.paywallId && (e.paywallId = e.paywallID), e)
                    u[t] = e[t];
                u.referer = document.referrer, n.debug("Initializing paywall: " + u.paywallId), l();
            }
            else
                n.error("Must specify paywallId to load Piano paywall");
        else
            n.error("Must specify paywall configuration to load Piano paywall"); }, isExpired: function () { return i.state && "ex" === i.state; }, isExpiredNextClick: function () { return void 0 !== i.views_left && 0 === i.views_left; }, checkMeter: function (e) { u.trackPageview = !0, l(e); }, showCurtain: s, last: function () { return i; }, registerCallback: function (e, n) { o.addEvent(e), o.registerCallback(e, n); } }; }();
    pn.container.register("meter", { useValue: Xe }), pn.meter = pn.container.resolve("meter");
    var $e = function () { var e = pn.container.resolve("util"), n = pn.container.resolve("sha1"), t = "", r = function () { var e = ""; return ["ShockwaveFlash.ShockwaveFlash.6", "ShockwaveFlash.ShockwaveFlash.7", "SWCt1.SWCt1.9", "SWCtl.SWCtl", "Adobe.SVGCtl", "WMPlayer.OCX", "AgControl.AgControl", "AcroPDF.PDF", "PDF.PdfCtrl", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealPlayer", "Skype.Detection", "3dmlw.IEPlugin", "GoogleTalk.Plugin", "GoogleTalk.Plugin.1"].map((function (n) { try {
        new window.ActiveXObject(n), e += n + "|";
    }
    catch (e) { } })), e; }, o = function () { if (t)
        return t; var o = function () { try {
        var e;
        return e = window.navigator.userLanguage || window.navigator.language, (new Date).getTimezoneOffset() + ":" + e;
    }
    catch (e) {
        return "";
    } }(); return o += function () { if (window.ActiveXObject)
        return r(); try {
        var e = "", n = navigator.plugins.length;
        if (n > 0)
            for (var t = 0; t < n; t++)
                e += navigator.plugins[t].name + "|";
        return e;
    }
    catch (e) {
        return "";
    } }(), o += function () { try {
        return screen.height + "x" + screen.width + "+" + screen.colorDepth;
    }
    catch (e) {
        return "";
    } }(), o += navigator.userAgent, o += function () { var e = ""; try {
        e += document.getElementById ? 1 : 0, e += window.getComputedStyle ? 1 : 0, e += screen.globalStorage ? 1 : 0, e += window.localStorage ? 1 : 0, e += window.sessionStorage ? 1 : 0, e += document.getElementsByClassName ? 1 : 0, e += document.querySelector ? 1 : 0, e += document.all ? 1 : 0, e += window.attachEvent ? 1 : 0, e += window.createPopup ? 1 : 0, e += window.XMLHttpRequest ? 1 : 0, e += window.ActiveXObject ? 1 : 0, e += window.XDomainRequest ? 1 : 0, e += window.msPerformance ? 1 : 0, e += document.documentMode ? 1 : 0, e += navigator.cpuClass ? 1 : 0, e += navigator.browserLanguage ? 1 : 0, e += window.opera ? 1 : 0, e += window.chrome ? 1 : 0;
    }
    catch (e) { } return e; }(), t = n.hash(o), e.debug("Current browser fingerprint is: " + t), t; }; return o(), { name: "fingerprint", getFingerprint: o }; }();
    pn.container.register("fingerprint", { useValue: $e }), pn.fingerprint = pn.container.resolve("fingerprint");
    var Ye = function () { var e, n = pn.container.resolve("jqUtils"), t = 0, r = 0, o = 200, i = 0, a = []; n.on(window, "scroll", (function () { c(); })); var s = function () { var e = n.scrollTop(); e > i && (i = e); }, c = function () { s(), u(); }, l = function (e) { if (e.consumeEventFn())
        return "pixels" === e.measureType ? e.position <= i : "percentage" === e.measureType ? i / (t - n.winSize().height) >= e.position / 100 : void 0; }, u = function () { for (var e, n = [], t = [], r = 0; r < a.length; r++)
        e = a[r], l(e) ? n.push(e) : t.push(e); a = t; for (r = 0; r < n.length; r++)
        n[r].callback(); }; return { name: "scrollDepth", initialize: function (i) { var a = document; i && i > 0 && (o = i || o); var s = function () { var i = a.body || {}, c = a.documentElement || {}, l = Math.max(i.scrollHeight, c.scrollHeight, i.offsetHeight, c.offsetHeight, i.clientHeight, c.clientHeight); l > t && (t = l); var u = n.scrollTop() + n.winSize().height; u > r && (r = u) > t && (t = r), e && clearTimeout(e), e = setTimeout(s, o); }; s(); }, getMaxScrollDepth: function () { return r; }, getMaxDocumentHeight: function () { return t; }, addListener: function (e, n, t) { "function" != typeof t && (t = function () { return !0; }), a.push({ callback: e, position: n.scrollDepth, measureType: n.measureType, repeat: "once", consumeEventFn: t }), s(), u(); }, removeListeners: function () { a = []; }, clearMaxScrolledPosition: function () { i = 0; } }; }();
    pn.container.register("scrollDepth", { useValue: Ye }), pn.scrollDepth = pn.container.resolve("scrollDepth");
    var Ke = function () { var e, n = pn.container.resolve("util"), t = pn.container.resolve("jqUtils"), r = !1, o = []; function i() { r || (r = !0, t.on(document, "mousemove", (function () { return s(); })), t.on(document, "keypress", (function () { return s(); })), t.on(window, "scroll", (function () { return s(); }))); } function a() { o.length && function () { for (var e, t, r = [], i = [], a = Date.now(), s = 0; s < o.length; s++)
        t = !1, a - (e = o[s]).startTime >= e.idleTime && (e.consumeEventFn() ? t = !0 : e.startTime = a), t ? r.push(e) : i.push(e); r.length && n.debug("idle: run fire"); o = i; for (s = 0; s < r.length; s++)
        (e = r[s]).callback(); }(), e && clearTimeout(e), o.length && (e = setTimeout((function () { return a(); }), 200)); } function s() { for (var n = Date.now(), t = 0; t < o.length; t++)
        o[t].startTime = n; clearTimeout(e), o.length && (e = setTimeout((function () { return a(); }), 200)); } return { name: "idle", initialize: i, addListener: function (n, t, r) { i(), "function" != typeof r && (r = function () { return !0; }), o.push({ callback: n, idleTime: 1e3 * t, startTime: Date.now(), consumeEventFn: r }), e || (e = setTimeout((function () { return a(); }), 200)); }, removeListeners: function () { o = []; } }; }();
    pn.container.register("idle", { useValue: Ke }), pn.idle = pn.container.resolve("idle");
    var Ze = function () { var e = pn.container.resolve("util"), n = pn.container.resolve("jqUtils"), t = []; return { name: "interaction", bind: function (r, o, i) { var a = function (e) { for (var n = { click: "click", doubleClick: "dblclick", rightClick: "contextmenu", mouseOut: "mouseout", mouseIn: "mouseover" }, t = [], r = 0; r < e.length; r++) {
            var o = e[r];
            t.push(n[o]);
        } return t; }; "function" != typeof i && (i = function () { return !0; }), e.__protected__.documentReady((function () { for (var e = 0; e < o.length; e++) {
            var s = o[e], c = a(s.elementActions).join(" "), l = s.elementSelector, u = s.repetitive;
            c.trim().length && function (e, o, a) { var s = function () { i() && (a || n.undelegate(document.body, e), r()); }; n.delegate(document.body, e, o, s), t.push({ action: c, selector: l, func: s }); }(l, c, u);
        } })); }, unbindAll: function () { t.forEach((function (e) { n.undelegate(document.body, e.selector); })), t = []; } }; }();
    pn.container.register("interaction", { useValue: Ze }), pn.interaction = pn.container.resolve("interaction");
    var en = function () { var e = pn.container.resolve("jqUtils"), n = pn.container.resolve("util"), t = pn.container.resolve("containerUtils"), r = function (e) { return "inline" === e.displayMode; }, o = function (e) { return "modal" === e.displayMode; }; return { name: "recWidgetService", __protected__: { getInstance: function () { var i, a = []; function s(n) { var s = n || {}, c = s.widget || {}; r(c.config) ? e.empty(c.container) : o(c.config) && (!function (n) { if (!i)
                return; t.closeModal(i), e.empty(i.container); var r = t.__private__.mobileModalFix; r.isIphoneCaretFixed && r.modalClosed(); i = null; }(), e.remove(c.container)), !s.skipOnclose && e.isFunction(c.onclose) && c.onclose(), a = a.filter((function (e) { return e.uuid !== c.uuid; })); } function c(e) { return a.filter((function (n) { return e === n.widgetId; }))[0]; } return { showRecommendation: function (l) { var u = l.widgetConfig || {}, d = l.createPlaceholderFn, p = u.widgetId; if (!p)
                    throw new Error("widgetId should be specified"); if (c(p))
                    n.log("widget with id " + u.widgetId + " already initialize");
                else if (o(u) && i)
                    n.log("modal widget already shown");
                else {
                    var f = function (t) { var r = e.queryEl(t.containerSelector), o = "widget-id-" + n.randomString(), i = { singleContainer: r || void 0, displayMode: t.displayMode || "modal", showCloseButton: t.showCloseButton, iframeParams: { iframeId: o, containerSelector: t.containerSelector, width: t.width, height: t.height } }; return { uuid: o, widgetId: t.widgetId, placeholder: t.placeholder, trackingId: t.trackingId, config: i }; }(u), m = f.config, g = d();
                    if (f.container = function (e, n) { var i; return r(e) ? i = t.initInlineContainer(e).container : o(e) && (i = t.getModalContainer(e, (function () { n instanceof Function && n(); }))), i; }(m, (function () { s({ widget: f }); })), f.container)
                        return e.append(f.container, g), f.element = g, o(m) && (i = f, (n.isIphone() || n.isSafariOrIOsUiWebView() || n.isAndroid()) && t.__private__.mobileModalFix.modalOpened()), function (n, t) { void 0 === t && (t = {}), Object.keys(t).forEach((function (r) { e.isFunction(t[r]) && (n[r] = t[r](n)); })); }(f, l.widgetCallbacks), a.push(f), f;
                    n.log('widget has invalid selector "' + m.iframeParams.containerSelector + '"');
                } }, fireWidgetCallback: function (n, t, r) { a.forEach((function (o) { if (o.widgetId === t.toString()) {
                    var i = o["on" + n];
                    e.isFunction(i) && i(r);
                } })); }, findWidget: c, clearWidgets: function () { a = [], i = null; }, closeWidget: s, fixWidgetModalWidth: function (n, r) { if (!n || o(n.config)) {
                    var i = n.container, a = r ? e.queryEl("iframe", i) : e.queryEl(".tp-widget-placeholder", i);
                    t.checkBackdropAndContainer(n, !0, !0), setTimeout((function () { a && t.__protected__.setElementSizes(i, { width: e.getWidth(a) }); }), 100);
                } } }; }, insertWidgetLib: function (n) { var t = document.getElementsByTagName("script")[0], r = document.createElement("script"); n.id && r.setAttribute("id", n.id), e.isFunction(n.onerror) && (r.onerror = n.onerror), e.isFunction(n.onload) && (r.onload = n.onload), n.defer && (r.defer = !0), r.type = "text/javascript", r.src = n.src, t && t.parentNode && t.parentNode.insertBefore(r, t); } } }; }();
    pn.container.register("recWidgetService", { useValue: en }), pn.recWidgetService = pn.container.resolve("recWidgetService");
    var nn = function () { pn.container.resolve("predefinedOptions"); return { testPianoOption: "" }; }();
    pn.container.register("piano", { useValue: nn });
    var tn = pn.container.resolve("piano");
    for (var rn in tn)
        pn[rn] = tn[rn];
    var on = function (e) { void 0 === e && (e = pn.container); var n = e.resolve("util"), t = e.resolve("log"), r = e.resolve("user"); e.resolve("api"); var o, i = e.resolve("jqUtils"), a = e.resolve("recWidgetService"), s = "__pnml", c = "EXTERNAL_EVENT", l = { granted: "ALLOWED", default: "UNKNOWN", denied: "FORBIDDEN" }, u = a.__protected__.getInstance(); function d() { return o || (o = new Promise((function (e, t) { var r = window.PianoESPConfig || {}; r.id ? (Object.assign(r, { onload: function () { return e(null); }, widget_init_on_event: { rec: !0, "opt-in": !1 }, onclick: function (e) { u.fireWidgetCallback("click", e.widgetId, e); }, onwidgetinit: function (e) { u.fireWidgetCallback("init", e.widgetId, e); }, onrecsloaded: function (e) { u.fireWidgetCallback("recsloaded", e.widgetId, e); } }), window.PianoESPConfig = r, n.debug("pianoESP: loading PianoESP with config:", window.PianoESPConfig), a.__protected__.insertWidgetLib({ id: "pnesplucidsdksel", src: p() + "/public/sdk/v04/sdk.js?v=" + (localStorage && localStorage.lucidsdkver || "xxx"), onerror: function () { return t(); } })) : t(); }))); } setTimeout((function () { pn.addHandler("logout", (function () { m([]); })); var e = r.getProvider(); e.registerCallback && e.registerCallback("logout", (function () { m([]); })); }), 300); var p = function () { var e = "//api-esp.piano.io"; return pn.espEndpoint ? e = pn.espEndpoint : pn.isSandbox() && (e = "//sandbox-api-esp.piano.io"), e; }, f = function (e, r) { d().then((function () { window.PianoESP.getCurrentPushState().then((function (e) { "prompt" === e && t.logMicroConversion(r, "showPrompt"); })), window.PianoESP.subscribeToPushSquads([e]).then((function (o) { var i = o || {}; !0 === i.result ? (n.setPushListsCookie(e), n.debug("pianoESP: Push notification was set:", i), t.logMicroConversion(r, "enrollPushCampaign")) : !1 === i.result && ("closed" === i.reason ? t.logMicroConversion(r, "closePrompt") : t.logMicroConversion(r, "declineEnrollPushCampaign")); })).catch((function (e) { n.log("pianoESP: Push notification error:", e); })); })); }, m = function (e) { try {
        var t = JSON.stringify(e);
        localStorage.setItem(s, t);
    }
    catch (e) {
        n.debug("can't save mailing lists to storage", e);
    } }, g = function () { var e = []; try {
        var t = localStorage.getItem(s);
        if (!t)
            throw new Error("MAINLING_LIST should be array");
        if (e = JSON.parse(t), !Array.isArray(e))
            throw new Error("MAINLING_LIST should be array");
    }
    catch (e) {
        n.debug("can't load mailing lists from storage", e);
    } return e || []; }; var v = function (e) { return function () { var n = document.createElement("pnespwgtplaceholder"); return i.setAttr("holdername", e, n), n; }; }; function h() { return { onrecsloaded: function (e) { return function (r) { 0 !== r.countOfRecs ? (u.fixWidgetModalWidth(e, !0), t.logEspMicroConversion(e.trackingId, e.widgetId, "init", c), n.debug("creating recommendation widget: ", e.config)) : u.closeWidget({ widget: e, skipOnclose: !0 }); }; }, onclick: function (e) { return function (n) { var r = { href: n.url }; t.logEspMicroConversion(e.trackingId, e.widgetId, "click", "EXTERNAL_LINK", r); }; }, onclose: function (e) { return function () { t.logEspMicroConversion(e.trackingId, e.widgetId, "close", c, { event: "widgetClosed" }); }; } }; } return { name: "pianoEsp", __protected__: { init: d, setVisitorId: function (e) { window.PianoESPConfig = Object.assign({}, window.PianoESPConfig, { visitor: e }); }, showRecommendation: function (e) { var n = h(); return u.showRecommendation({ widgetConfig: e, widgetCallbacks: n, createPlaceholderFn: v(e.placeholder) }), d().then((function () { window.PianoESP.initWidget(parseInt(e.widgetId)); })); }, showPushSignup: function (e) { var n = e || {}; n.templateId ? (t.__protected__.logCustomFormImpression(n.trackingId, "pushSignup", "show_form"), pn.template.show({ templateId: n.templateId, templateVariantId: n.templateVariantId, displayMode: "modal", customEvent: function (e) { switch (e.eventName) {
                    case "push-allow":
                        t.logMicroConversion(n.trackingId, "allowSoftEnrollPushCampaign"), f(n.pushListId, n.trackingId);
                        break;
                    case "push-dont-allow":
                        t.logMicroConversion(n.trackingId, "declineSoftEnrollPushCampaign");
                        break;
                    case "push-close": t.logMicroConversion(n.trackingId, "close");
                } } })) : f(n.pushListId, n.trackingId); }, getNotificationStatus: function () { if (window.Notification)
                return l[window.Notification.permission] || l.default; }, showNewsletterSignup: function (e) { if (e && e.mailingListIds) {
                var t = g().indexOf(e.mailingListIds) > -1;
                e.notShowIfFilled && t ? n.log("Mailing list with ids " + e.mailingListIds + " already shown") : pn.template.show(e);
            }
            else
                n.log("mailingListIds should be specified"); }, offerMessageReceiver: function (e) { if ("newsletterSignupSubmission" === e.event) {
                var n = g();
                -1 === n.indexOf(e.params.mailingListIds) && (n.push(e.params.mailingListIds), m(n));
            } }, loadCompleteMailingLists: g }, __private__: { removeWidgetsAndSdk: function () { u.clearWidgets(), o = null, delete window.PianoESP; }, getWidgetCallbacks: h, onInit: function (e) { o && "function" == typeof e && o.then(e); } } }; };
    pn.container.register("pianoEsp", { useValue: on() }), pn.pianoEsp = pn.container.resolve("pianoEsp");
    var an = function () { var e, n = pn.container.resolve("postmessage"), t = pn.container.resolve("user"), r = pn.container.resolve("util"), o = pn.container.resolve("eventUtils"), i = "externalCheckoutComplete", a = "loginPrompt", s = "deferredAccountCreation", c = "buy", l = o.createEventManager([i]), u = !1, d = !1; window.SWG = window.SWG || [], window.SWG.push((function (n) { n.setOnPaymentResponse((function (n) { d || (r.debug("swg: onPaymentResponse is triggered"), d = !0, n.then((function (n) { r.debug("swg: onPaymentResponse", n), e && g(n, n.purchaseData, n.userData, e, c); })).catch((function (e) { r.log("swg: onPaymentResponse failed", e); }))); })); })), n.subscribe("swgCheckoutStart", (function (n) { u || r.log("swg: incorrect SwG configuration. Please make sure that Experience user segment is configured properly. Details at https://docs.piano.io/subscribe-with-google/#SwGscript"); var t = n.params.sku; e = n.params.termId, window.SWG.push((function (e) { e.subscribe(t); })); })); var p = function (e) { if (l.hasCallback(i)) {
        var n = { type: "swg", flow: e };
        l.fireCallbacks(i, n, void 0, !0);
    } }, f = function (e) { return new Promise((function (n, t) { pn.api.callApi("/swg/check", { entitlement: JSON.stringify(e) }, (function (e) { 0 !== e.code && (r.log("swg: check subscription response - " + e.message), t()), n(e.CheckSubscriptionResponse); })); })); }, m = function (e) { return new Promise((function (n, t) { pn.api.callApi("/swg/check/external", { entitlements: JSON.stringify(e) }, (function (e) { 0 !== e.code && (r.log("swg: check external entitlement response - " + e.message), t()); var o = e.data; o || (r.log("swg: check external entitlement empty response"), t()), n(o); })); })); }, g = function (e, t, o, i, a) { pn.api.callApi("/swg/subscribe", { term_id: i, purchase_data: JSON.stringify(t), user_data: JSON.stringify(o) }, (function (t) { if (0 === t.code) {
        var o = t.data;
        v(o), n.broadcast("swgCheckoutComplete"), e.complete().then((function () { p(a); })).catch((function (e) { r.log("swg: complete failed:", e); }));
    }
    else
        r.log("swg: subscribe response - " + t.message); })); }, v = function (e) { e && t.getProvider().loginByToken && t.getProvider().loginByToken(e); }, h = !1, w = !1; return { name: "swg", __protected__: { injectMarkup: function (e) { var n; if (!h && e) {
                r.debug("swg: rendering swg markup with config:", e);
                var t = '{\n   "@context": "http://schema.org",\n   "@type": "CreativeWork",\n   "isAccessibleForFree": ' + e.isAccessibleForFree;
                !1 === e.isAccessibleForFree && e.productId && (t = t + ',\n   "isPartOf": {\n       "@type": ["CreativeWork", "Product"],\n       "name" : "' + e.resourceName + '",\n       "productID": "' + e.productId + '"\n   }'), t += "\n}";
                var o = document.createElement("script");
                o.type = "application/ld+json", o.innerHTML = t, null === (n = document.getElementsByTagName("script")[0].parentNode) || void 0 === n || n.appendChild(o), h = !0;
            } }, addLibrary: function () { var e; if (!w) {
                r.debug("swg: adding swg.js library");
                var n = document.createElement("script");
                n.type = "text/javascript", n.setAttribute("subscriptions-control", "manual"), n.async = !0, n.src = "https://news.google.com/swg/js/v1/swg.js", null === (e = document.getElementsByTagName("script")[0].parentNode) || void 0 === e || e.appendChild(n), w = !0;
            } }, initSwgFlow: function () { window.SWG.push((function (e) { e.getEntitlements().then((function (n) { if (u = !0, r.debug("swg: getEntitlements", n), n.enablesThis()) {
                var o = n.getEntitlementForSource("google");
                if (!o) {
                    var i = n.entitlements;
                    return void (i && m(i).then((function () { r.debug("swg: checkExternalEntitlement"), n.ack(); }), (function () { r.log("swg: checkExternalEntitlement failed"); })));
                }
                f(o).then((function (o) { if (d)
                    r.debug("swg: onPaymentResponse is already triggered. Skipping entitlements flow.");
                else if (o)
                    switch (o.type) {
                        case "USER_FOUND":
                            if (t.isUserValid())
                                return void r.error("swg: user found, but not valid");
                            r.debug("swg: user found, initiate login prompt");
                            var i = o.user_token;
                            e.showLoginPrompt().then((function () { v(i), p(a); })).catch((function (e) { r.log("swg: showLoginPrompt failed", e); }));
                            break;
                        case "TERM_FOUND":
                            r.debug("swg: term found, initiate deferred account creation");
                            var c = o.term_id;
                            e.completeDeferredAccountCreation({ entitlements: n, consent: !0 }).then((function (e) { r.debug("swg: completeDeferredAccountCreation", e), g(e, e.purchaseData, e.userData, c, s); })).catch((function (e) { r.log("swg: completeDeferredAccountCreation failed", e); }));
                            break;
                        default: r.debug("swg: check subscription response type " + o.type + ". Nothing to do");
                    } }), (function () { r.log("swg: checkSubscription failed"); })), n.ack();
            } })).catch((function (e) { r.log("swg: get entitlements failed", e); })); })); } }, registerCallback: function (e, n) { l.addEvent(e), l.registerCallback(e, n); } }; }();
    pn.container.register("swg", { useValue: an }), pn.swg = pn.container.resolve("swg");
    var sn = function () { var e = pn.container.resolve("util"), n = !1, t = function (t, r, o) { n ? (o || (o = {}), e.log("fbpixel: Track Facebook Pixel event", r, o), window.fbq(t, r, o)) : e.log("fbpixel: Skip tracking event - Facebook Pixel is not initalized", r, o); }, r = function () { return n; }; return { name: "fbpixel", isInitialized: r, __private__: { isInitialized: r }, __protected__: { init: function () { if (!n) {
                var t, r, o, i, a, s, c = pn.getFbPixelId();
                if (c)
                    e.log("fbpixel: Initialize Facebook Pixel tracking", c), t = window, r = document, o = "script", t.fbq || (i = t.fbq = function () { i.callMethod ? i.callMethod.apply(i, arguments) : i.queue.push(arguments); }, t._fbq || (t._fbq = i), i.push = i, i.loaded = !0, i.version = "2.0", i.queue = [], (a = r.createElement(o)).async = !0, a.src = "https://connect.facebook.net/en_US/fbevents.js", (s = r.getElementsByTagName(o)[0]).parentNode.insertBefore(a, s)), window.fbq("set", "autoConfig", "false", c), window.fbq("init", c), n = !0;
                else
                    e.error("fbpixel: Facebook Pixel ID is not defined");
            } } }, trackEvent: function (e, n) { t("track", e, n); }, trackCustomEvent: function (e, n) { t("trackCustom", e, n); } }; }();
    pn.container.register("fbpixel", { useValue: sn }), pn.fbpixel = pn.container.resolve("fbpixel");
    var cn = function () { var e = pn.container.resolve("util"), n = pn.container.resolve("fbpixel"), t = pn.container.resolve("offer"), r = pn.container.resolve("user"), o = pn.container.resolve("api"), i = !1, a = "", s = {}, c = {}; function l(n) { return new Promise((function (t) { var i = { aid: pn.aid, rid: "", account_linking_token: e.getQueryParamByName("account_linking_token"), user_token: r.getProvider().getToken(), user_provider: r.getProvider().getName() }; n && (i.rid = n), o.callApi("/fbia/subscriptionPayload/generate", i, (function (e) { e && e.data && (a = e.data), t(null); })); })); } var u = function () { l().then((function () { a && p(); })); }, d = function (n) { if (n) {
        var t = new Promise((function (e) { setTimeout((function () { e(null); }), 1e3 * pn.redirectToFbTimeout); })), r = l(n);
        e.__protected__.waitAllPromises([t, r]).then((function () { p(); }));
    }
    else
        e.error("fbsubscriptions: 'rid' could not be empty on generating subscription payload"); }, p = function () { var n = e.getQueryParamByName("account_linking_token"), t = e.getQueryParamByName("redirect_uri") + "?account_linking_token=" + encodeURIComponent(n); a && (t += "&subscription_payload=" + encodeURIComponent(a)), window.location.href = t; }, f = function (e, t) { s[e] || (s[e] = !0, n.trackEvent(e, t)); }, m = function (e, t) { c[e] || (c[e] = !0, n.trackCustomEvent(e, t)); }, g = function () { return i; }; return { name: "fbsubscriptions", checkUserAccessAndRedirectToFb: function () { l().then((function () { p(); })); }, isInitialized: g, __private__: { isInitialized: g }, __protected__: { init: function () { if (!i) {
                n.__protected__.init(), t.registerCallback("loaded", (function () { var n = e.getQueryParamByName("surface"); "meter_limit_reached" !== n && "locked_article" !== n || pn.inappBrowserReturn || m("ViewPaywall", { surface: "IA" }); }));
                pn.addHandler("loginSuccess", (function (e) { l().then((function () { e.registration ? m("CreateAccount") : m("LogIntoAccount", { is_subscriber: !!a }), a && setTimeout((function () { p(); }), 200); })); })), pn.addHandler("experienceExecute", (function () { r.isUserValid() && u(); })), t.registerCallback("alreadyPurchased", (function (e) { d(e.rid); })), t.registerCallback("startCheckout", (function (e) { f("InitiateCheckout", { offer_code: e.offerId, campaign_code: e.termId }); })), t.registerCallback("complete", (function (e) { e.hasOwnProperty("chargeCurrency") && e.hasOwnProperty("chargeAmount") && f("Purchase", { currency: e.chargeCurrency, value: e.chargeAmount, offer_code: e.offerId, campaign_code: e.termId }), d(e.rid); })), t.registerCallback("close", (function () { p(); })), i = !0;
            } } } }; }();
    pn.container.register("fbsubscriptions", { useValue: cn }), pn.fbsubscriptions = pn.container.resolve("fbsubscriptions");
    var ln = function (e) { void 0 === e && (e = pn.container); var n = e.resolve("jqUtils"), t = e.resolve("util"), r = e.resolve("recWidgetService").__protected__.getInstance(), o = [], i = function () { return void 0 !== pn.cxCdnUrl && "" !== pn.cxCdnUrl ? pn.cxCdnUrl : "https://cdn.cxense.com"; }, a = function () { return void 0 !== pn.cxenseSiteId && "" !== pn.cxenseSiteId; }, s = function (e) { return void 0 !== window.cX && void 0 !== window.cX.library && (e || void 0 !== window.cX.CCE && void 0 !== window.cX.CCE.library); }, c = function (e) { return void 0 !== e.cxenseCustomerPrefix && "" !== e.cxenseCustomerPrefix; }, l = function (e) { var n, r, o = window.cX = window.cX || {}; o.callQueue = o.callQueue || []; var i = "anon"; e.uid && "anon" !== e.uid && "" !== e.uid && (i = !!(null === (r = null === (n = e.eventExecutionContext) || void 0 === n ? void 0 : n.accessList) || void 0 === r ? void 0 : r.length) ? "hasActiveAccess" : "registered", o.callQueue.push(["addExternalId", { id: e.uid, type: e.cxenseCustomerPrefix }]), t.debug("c1x: adding externalId", { uid: e.uid, prefix: e.cxenseCustomerPrefix })); o.callQueue.push(["setCustomParameters", { userState: i }]), t.debug("c1x: adding CustomParameters userState", { userState: i }), d(!1, e.browserId, e.pageViewId, pn.cxenseSiteId), t.debug("c1x: sending pageview event"), o.callQueue.push(["sendPageViewEvent"]); }, u = function (e, n, t, r) { t && (!0 === r ? e.callQueue.unshift([n, t]) : e.callQueue.push([n, t])); }, d = function (e, n, r, o) { var i = window.cX = window.cX || {}; i.callQueue = i.callQueue || [], u(i, "setSiteId", o, e), n && u(i, "invoke", (function () { window.cXNative = { getUserId: function () { return n; } }; }), e), u(i, "setRandomId", r, e), t.debug("c1x: injecting ids", { browserId: n, pageViewId: r, siteId: o }); }, p = function (e) { var n = null, t = []; function r() { n && clearTimeout(n), n = null, e(t), t = []; } return function (e) { n || (n = setTimeout(r, 10)), t.push(e); }; }((function (e) { if (a()) {
        for (var n = [], i = function () { var t = e[s] || {}; r.showRecommendation({ widgetConfig: t, createPlaceholderFn: f(t.widgetId, t.displayMode) }) && n.push({ widgetParams: { widgetId: t.widgetId, targetElementId: "cxense-" + t.widgetId, experienceId: t.experienceId }, widgetCallback: function (e) { var n = e && e.response; if (n && !e.response.error) {
                "modal" === t.displayMode && r.fixWidgetModalWidth(r.findWidget(t.widgetId));
                for (var i = 0; i < n.items.length; i++) {
                    var a = n.items[i].id;
                    -1 === o.indexOf(a) && o.push(a);
                }
            } } }); }, s = 0; s < e.length; s++)
            i();
        m((function () { var e; e = pn.cxenseSiteId, t.debug("c1x: setting siteId: ", e), window.cX.setSiteId(e), window.cX.CCE.runMulti(n, ["id"], o); }));
    }
    else
        t.debug("c1x: can not show recommendation because siteId is not configured using `setCxenseSiteId`"); })), f = function (e, t) { return function () { var r = document.createElement("div"); n.addClass("tp-cxense-placeholder-" + t, r), n.addClass("tp-widget-placeholder", r); var o = document.createElement("div"); return o.id = "cxense-" + e, r.appendChild(o), r; }; }, m = function (e) { window.cX = window.cX || {}, window.cX.CCE = window.cX.CCE || {}, window.cX.CCE.callQueue = window.cX.CCE.callQueue || [], window.cX.CCE.callQueue.push(["invoke", e]); }, g = function (e) { return s(e); }; return { name: "cxense", __protected__: { showRecommendation: p, sendPageViewEvent: function (e) { (a() || c(e)) && (a() || !c(e) ? !a() || c(e) ? l(e) : t.debug("cxense: can not send pageview because customer prefix is not configured in app settings") : t.debug("cxense: can not send pageview because siteId is not configured using `setCxenseSiteId`")); }, isActivated: a, isCustomerPrefixConfigured: c, isConfiguredPollingAsync: function (e, n, t) { n = n || 0, t = t || 0; var r = 0; return new Promise((function (o, i) { var a = function () { g(e) ? o(!0) : r >= t ? i(e ? "c1x: cX object is not found after " + t + " retries with " + n + "ms interval" : "c1x: cX and cX.CCE objects are not found after " + t + " retries with " + n + "ms interval") : (r++, setTimeout(a, n)); }; g(e) ? o(!0) : setTimeout(a, n); })); }, invokeCxenseFn: m, getC1XIntegrationVersion: function () { return void 0 !== pn.c1XIntegrationVersion && "" !== pn.cxenseSiteId ? pn.c1XIntegrationVersion : "N/A"; }, getOrGenerateCxCompatibleBid: function () { var e = t.__protected__.getCookie("cX_P"), n = null; try {
                t.__protected__.hasLocalStorage() && (n = localStorage.getItem("_cX_P"));
            }
            catch (e) { } var r = e || n; return r ? (t.debug("c1x: existing cX_P value has been found: ", r), r) : (t.debug("c1x: can not find existing cX_P value, generating a new one"), t.__protected__.randomStringCxCompatible()); }, loadCxLibIfNeeded: function () { var e; if (!a() || !s(!0)) {
                var n = document.getElementsByTagName("script")[0], r = document.createElement("script");
                r.onerror = function (e) { t.debug("c1x: error during load of cx.js. ", e); }, r.onload = function () { t.debug("c1x: cx.js has been successfully loaded"); }, r.async = !0, r.type = "text/javascript", pn.c1XLoadCce ? r.src = i() + "/cx.cce.js" : r.src = i() + "/cx.js", t.debug("c1x: start loading cx.js on the page..."), null === (e = n.parentNode) || void 0 === e || e.insertBefore(r, n);
            } }, setCxBidCookie: function (e, n) { var r; r = { path: "/", expires: 730 }, n && (r.domain = n, t.__protected__.deleteTLDCookieForSpecificDomains("cX_P", n)), t.deleteCookie("cX_P"), t.__protected__.setCookie("cX_P", e, r); }, tryToGetCxPageViewId: function (e) { var n, t, r = window.cX; return (null === (t = null === (n = null == r ? void 0 : r.getPageContext) || void 0 === n ? void 0 : n.call(r)) || void 0 === t ? void 0 : t.pageViewRandom) || e; }, injectIds: d } }; };
    pn.container.register("cxense", { useValue: ln() }), pn.cxense = pn.container.resolve("cxense");
    var un = function (e) { void 0 === e && (e = pn.container); var n, t, r = e.resolve("jqUtils"), o = e.resolve("util"), i = e.resolve("api"), a = e.resolve("eventUtils"), s = e.resolve("scrollDepth"), c = e.resolve("log"), l = e.resolve("ajax"), u = e.resolve("viewportExit"), d = e.resolve("idle"), p = e.resolve("interaction"), f = e.resolve("pianoEsp"), m = e.resolve("swg"), g = e.resolve("fbsubscriptions"), v = e.resolve("user"), h = e.resolve("cxense"), w = e.resolve("logging"), y = [], b = {}, k = "", _ = !1, C = "reader_id", I = !1, S = {}, x = (n = { applyCss: { fn: function (e) { e.eventParams.ruleList.forEach((function (e) { var n, t = e.classes, i = e.elements; t && (t = t.replace(/[,.]/g, " ").split(" ").filter((function (e) { return "" !== e; })), "add" === e.type && (n = r.qa(i)) && n.length && n.forEach((function (e) { t.forEach((function (n) { r.addClass(n, e); })); })), "remove" === e.type && (n = r.qa(i)) && n.length && n.forEach((function (e) { t.forEach((function (n) { r.removeClass(n, e); })); }))); o.debug("exp: css applied with rule:", e); })); }, isAction: !0, shouldFireCallback: !0 }, runJs: { fn: function (e) { if (e.eventParams && e.eventParams.snippet) {
                var n = e.eventParams.snippet;
                o.debug("exp: run js with snippet:", n);
                var t = e.eventExecutionContext;
                o.debug("exp: set publisher's context and custom:", t), fe("var context = " + JSON.stringify(t) + ";\nvar custom = " + JSON.stringify(pn.customVariables) + ";\n" + n);
            } }, isAction: !0, shouldFireCallback: !0 }, setCookie: { fn: function (e) { var n = e.eventParams; if (n && void 0 !== n.cookieName && void 0 !== n.cookieValue) {
                o.debug("exp: set cookie with parameters:", n);
                var t = (n.isReadableCookie ? "_pc_" : "") + n.cookieName, r = { domain: n.cookieDomain, path: n.cookiePath };
                if (!n.isSessionCookie) {
                    var i = new Date;
                    switch (n.expirationUnit) {
                        case "seconds":
                            i.setSeconds(i.getSeconds() + n.expirationValue);
                            break;
                        case "minutes":
                            i.setMinutes(i.getMinutes() + n.expirationValue);
                            break;
                        case "hours":
                            i.setHours(i.getHours() + n.expirationValue);
                            break;
                        case "days":
                            i.setDate(i.getDate() + n.expirationValue);
                            break;
                        case "months":
                            i.setMonth(i.getMonth() + n.expirationValue);
                            break;
                        case "years":
                            i.setFullYear(i.getFullYear() + n.expirationValue);
                            break;
                        default: o.log("Wrong eventParams.expirationUnit : ", n.expirationUnit);
                    }
                    r.expires = i;
                }
                o.__protected__.setCookie(t, n.cookieValue, r);
            } }, isAction: !0, shouldFireCallback: !0 }, nonSite: { fn: function (e) { o.debug("exp: non-site action:", e); }, isAction: !0, shouldFireCallback: !0 }, showForm: { fn: function (e) { var n = e.eventParams; if (n && n.formName) {
                var t = { formName: n.formName, hideIfComplete: n.hideCompletedFields, trackingId: e.eventExecutionContext.trackingId, displayMode: n.displayMode, containerSelector: n.containerSelector, showCloseButton: n.showCloseButton, accessToken: v.getProvider().getToken() };
                n.formWidth && n.formWidth.enabled && (t = r.deepExtend({}, { width: n.formWidth.width }, t)), o.debug("exp: show form with params:", n), pn.pianoId.showForm(t);
            } }, isAction: !0, shouldFireCallback: !0 }, showRecommendations: { fn: function (e) { return me(e, function (e) { return { ESP: f.__protected__.showRecommendation.bind(f), CXENSE: h.__protected__.showRecommendation.bind(h) }[e] || function () { }; }(e.eventParams.type)); }, isAction: !0, shouldFireCallback: !0 }, showOffer: { fn: function (e) { return me(e, (function (e) { return pn.offer.show(e); })); }, isAction: !0, shouldFireCallback: !1 }, showTemplate: { fn: ge, isAction: !0, shouldFireCallback: !1 }, showZuoraOffer: { fn: ge, isAction: !0, shouldFireCallback: !1 }, showNewscycleOffer: { fn: ge, isAction: !0, shouldFireCallback: !1 }, showNewsletterSignup: { fn: function (e) { return me(e, (function (e) { return f.__protected__.showNewsletterSignup(e); })); }, isAction: !0, shouldFireCallback: !1 }, showPushSignUp: { fn: function (e) { return me(e, (function (e) { return f.__protected__.showPushSignup(e); })); }, isAction: !0, shouldFireCallback: !1 }, showLogin: { fn: function () { v.showLogin({}); }, isAction: !0, shouldFireCallback: !0 }, continueExecution: { fn: function (e, n) { o.debug("exp: continue execution action:", e, "with requestParameters", n); var t = n || {}; t.experience_id = e.eventExecutionContext.experienceId, t.experience_version = e.eventExecutionContext.experienceVersion, t.context_data = e.eventParams.contextData, Q("auto", t, !0); }, shouldFireCallback: !0 }, continueExecutionCompleted: { fn: be, shouldFireCallback: !0 }, meterActive: { fn: be, shouldFireCallback: !0 }, meterExpired: { fn: be, shouldFireCallback: !0 }, userSegmentTrue: { fn: pe, shouldFireCallback: !0 }, userSegmentFalse: { fn: pe, shouldFireCallback: !0 }, experienceExecutionFailed: { fn: be, shouldFireCallback: !0 }, log: { fn: function (e) { ee(e.eventModuleParams.moduleId, e); }, shouldFireCallback: !1 }, experienceExecute: { fn: function (e, n, t) { e.eventParams.result = t; }, shouldFireCallback: !0 }, setResponseVariable: { fn: function (e) { return e.eventParams; }, isAction: !0, shouldFireCallback: !0 }, creditRedeemed: { fn: function (e) { o.debug("exp: credit redeemed action:", e); }, isAction: !0, shouldFireCallback: !0 } }, t = {}, Object.keys(n).forEach((function (e) { if ("function" != typeof n[e].fn)
        throw new Error("Unsupported config for " + e + " handler"); t[e] = function (e, n) { return function (t, r, i) { if (e.isAction) {
        var a = function (e) { var n = e.eventParams, t = e.eventModuleParams, r = e.eventExecutionContext; return o.debug("exp: fire event 'beforeComposerAction' with eventParams:", n, ", moduleParams:", t, ", context:", r), B.fireCallbacksAndStopOnFirstFalse("beforeComposerAction", n, t, r); }(t);
        if (!a)
            return;
        var s = re(t), c = te(t);
        (s || c) && ee(t.eventModuleParams.moduleId, t);
    } var l, u = t.eventModuleParams.moduleId; S[u] || "N/A" === u || (S[u] = { experienceId: t.eventExecutionContext.experienceId, moduleName: t.eventModuleParams.moduleName }), e.fn(t, r, i), e.shouldFireCallback && (l = n, function (e) { var n = e.eventParams.callback, t = e.eventParams, r = e.eventModuleParams, i = e.eventExecutionContext; o.debug("exp: fire event ", l, " with eventParams:", t, ", moduleParams:", r, ", context:", i), B.fire("experience", l, !0, t, r, i), n && l !== n && (o.debug("exp: execute event ", l, " with callback: ", n), fe(n)); })(t); }; }(n[e], e); })), t), P = { showOffer: function (e) { return ve(e, (function (e) { return pn.offer.deferredShow(e); })); }, showTemplate: he, showZuoraOffer: he, showNewscycleOffer: he }, E = o.profile((function (e) { Q("manual", e, !1); })), T = function (e, n) { B.addEvent(e), B.registerCallback(e, n); }, A = "xbc", M = {}, O = "", R = "", L = "", N = [], U = "handler", j = "eventCondition", D = "innerEventCondition", F = "preload", B = a.createEventManager([]), V = ["showOffer", "showZuoraOffer", "showNewscycleOffer", "showTemplate"]; var q, z = function () { return y; }, H = function () { y = []; }, W = function () { return pn.getTrackingEndpoint(pn.composerHost) + "/api/v3"; }, J = function () { g.__protected__.init(); }, G = function (e) { var n = z(); n.length && (c.logBeaconRequest(W() + "/composer/logExecutionStats", { aid: pn.aid, items: JSON.stringify(n), execution_stats_context: k, ts: (new Date).getTime(), source: e }), H()), window.clearTimeout(q), q = window.setTimeout((function () { G("timer" + q); }), 2e3); }, Q = function (e, n, t) { void 0 === pn.main.appHasApplePay() && B.fireCallbacks("experienceFlow", null, "experience", !0); var i = new Promise((function (e) { setTimeout((function () { e({}); }), 3e4); })); return Promise.race([pn.main.externalResourcesDelay(), i]).then((function (i) { if (r.isPlainObject(i) || (o.error("exp: error get external resources ", i), i = {}), h.__protected__.isActivated()) {
        o.debug("c1x: integration is activated"), h.__protected__.loadCxLibIfNeeded();
        var a = r.deepExtend({}, n, i, { c1x_integration_version: "v2", new_bid: pn.main.fetchCxBrowserId() });
        X(e, a, t);
    }
    else
        X(e, r.deepExtend({}, n, i), t); })).catch((function (e) { })); }, X = function (e, n, t) { n = n || {}; var a = r.deepExtend({}, { protocol_version: 1 }, n); $(a), Y(a), o.hasQueryParamByName(C) && (a.reader_id = o.getQueryParamByName(C)), o.waitCall("refreshUserToken", (function () { if (t)
        a.executed_nodes = JSON.stringify(S);
    else {
        pn.main.trackPageUnloadIfNecessary(), K(a), i.getCallParams(a, v.getProvider()), o.removeAffiliateToken();
        var n = { url: window.location.href, tags: pn.tags, submitType: e };
        pn.main.buildPageTrackParams(a, n);
    } o.debug("exp: Experience initialized with params:", a), o.waitCall("refreshAccessTokenList", (function () { o.startCall("experienceExecute"); var e, n, i = (o.__protected__.cameFromFbSubscriptions() ? (e = "/xbuilder/experience/executeFbia", J()) : e = "/xbuilder/experience/execute", pn.getExperienceEndpoint(!1) + e); if (-1 !== navigator.appVersion.indexOf("MSIE 9"))
        n = { dataType: "jsonp", url: i + "?" + r.param(a) };
    else {
        var s = "?" + r.param({ aid: a.aid });
        n = { type: "post", url: i + s, data: a, xhrFields: { withCredentials: !0 } };
    } n.success = function (e) { o.doneCall("experienceExecute"); var n = r.deepExtend({}, a); t || (we(), pn.main.registerTrackUnload()), Z(e.errors), de(e.models, n); }, n.error = function () { o.doneCall("experienceExecute"), t || we(); var e = { code: 503, message: "Error: Received error when requesting API response from URL: " + i }; o.debug(e.message); }, l.request(n); })); })); }, $ = function (e) { var n = o.__protected__.getCookie(A); n && (e.xbc = n); var t = o.getTbcCookie(); t && t.length > 0 && (e.tbc = t), o.getCampaigns(e), e.custom_cookies = JSON.stringify(o.getCustomCookies()); }, Y = function (e) { var n = o.getPushListsCookie(), t = f.__protected__.getNotificationStatus(); n && n.length > 0 && (e.push_list_subscriptions = JSON.stringify(n)), t && (e.push_notification_settings = t); }, K = function (e) { return [{ property: "debug", parameter: "debug" }, { property: "trackPageView", parameter: "increment_pageview_meter" }].forEach((function (n) { void 0 !== pn[n.property] && (e[n.parameter] = pn[n.property]); })), e; }, Z = function (e) { Array.isArray(e) && (e.length && o.debug("exp: composer execution has been failed with errors"), e.forEach((function (e) { o.debug("exp: " + e.msg); }))); }, ee = function (e, n) { var t; t = { mId: e, eId: n.eventExecutionContext.experienceId, eV: n.eventExecutionContext.experienceVersion, eeId: n.eventExecutionContext.executionId }, y.push(t); }; function ne(e, n, t, r) { return { type: U, eventType: n.eventType, children: [], run: function () { e.bind(this, n, t, r)(); } }; } var te = function (e) { var n, t = e.eventParams.delayBy || {}; return t.value && ("time" === t.type ? n = { type: "timer", timer: t.value } : "scroll" === t.type && (n = { type: "scrollDepth", scrollDepth: t.value, measureType: "pixels" })), n; }, re = function (e) { return e.eventConditions && Array.isArray(e.eventConditions) ? e.eventConditions.length : 0; }, oe = function (e, n) { return r = !1, { type: F, eventType: n.eventType, children: [], run: function () { !1 === r && (t = e(n), r = !0); }, getPreloadResult: function () { return t; } }; var t, r; }; function ie(e, n) { var t = function () { return B.fireCallbacksAndStopOnFirstFalse("beforeBrowserEvent", e); }; switch (e.type) {
        case "viewportExit":
            u.addListener(n, { detectExitMode: e.detectExitMode, detectBackButtonForMobile: e.detectBackButtonForMobile, clientDevice: e.clientDevice }, t);
            break;
        case "scrollDepth":
            s.addListener(n, { scrollDepth: e.scrollDepth, measureType: e.measureType }, t);
            break;
        case "timer":
            var r = setTimeout((function () { t() && n(); }), 1e3 * e.timer);
            N.push(r);
            break;
        case "interaction":
            p.bind(n, e.interactions, t);
            break;
        case "idle": d.addListener(n, e.idleTime, t);
    } } var ae = function (e) { return e.type === U && -1 === ["continueExecution", "meterActive", "meterExpired"].indexOf(e.eventType); }; function se(e, n) { return t = !1, r = function () { ee(e.moduleId, n); for (var r = b[e.moduleId].children, i = 0; i < r.length; i++) {
        var a = r[i], s = b[a];
        if (!1 === t || ae(s))
            try {
                s.run();
            }
            catch (e) {
                o.error("exp: error execute chain event", s, e);
            }
    } t = !0, _ && G("chain"); }, { type: j, children: [], run: function () { ie(e, r); } }; var t, r; } function ce(e, n) { return t = !1, r = function () { for (var e = b[n + D].children, r = 0; r < e.length; r++) {
        var i = e[r], a = b[i];
        if (!1 === t || ae(a))
            try {
                a.run();
            }
            catch (e) {
                o.error("exp: error execute chain event", a, e);
            }
    } t = !0; }, { type: D, children: [n], run: function () { ie(e, r); } }; var t, r; } var le = function (e) { var n; e.swgMarkupData && (o.debug("exp: swg markup data :", e.swgMarkupData), n = e.swgMarkupData, m.__protected__.injectMarkup(n), e.swgMarkupData.isAccessibleForFree || m.__protected__.addLibrary()), e.swgEnabled && m.__protected__.initSwgFlow(); }, ue = function (e) { if (e) {
        for (var n = {}, t = 0; t < e.events.length; t++) {
            var i = e.events[t];
            try {
                "experienceExecute" === i.eventType && ((n = r.deepExtend({}, i.eventExecutionContext)).result = r.deepExtend({}, e));
            }
            catch (e) {
                o.error("exp: error on execute event: ", i, e);
            }
        }
        return n;
    } o.debug("exp: no composer execution result"); }, de = function (e, n) { if (e) {
        var t, i;
        if (o.setTbcCookieFromResponse(e), o.setTacCookieFromResponse(e), t = e, h.__protected__.isActivated() && h.__protected__.isCustomerPrefixConfigured(t) && t && t.bid && h.__protected__.setCxBidCookie(t.bid, null === (i = t.tbc) || void 0 === i ? void 0 : i.cookie_domain), o.setAppTimezoneOffsetFromResponse(e), o.setCurrentDomainFromResponse(e), function (e) { f.__protected__.setVisitorId(e.bid); }(e), function (e) { h.__protected__.sendPageViewEvent({ browserId: e.bid, uid: e.uid, cxenseCustomerPrefix: e.cxenseCustomerPrefix, pageViewId: pn.main.fetchPageViewId(), eventExecutionContext: ue(e.result) }); }(e), function (e) { O = e.bid; }(e), function (e) { e.iss && (R = e.iss); }(e), function (e) { L = e.itemId; }(e), e.xbc && e.xbc.cookie_value) {
            var a = { path: "/", expires: 730 };
            if (e.xbc.cookie_domain && "localhost" !== e.xbc.cookie_domain && (a.domain = e.xbc.cookie_domain, o.__protected__.deleteTLDCookieForSpecificDomains(A, e.xbc.cookie_domain)), pn.cookieDomain || pn.cookiePath) {
                var s = o.getPossibleCookieDomains();
                for (var c in s)
                    o.deleteCookie(A, s[c]);
                a.domain = pn.cookieDomain ? pn.cookieDomain : a.domain, o.__protected__.deleteTLDCookieForSpecificDomains(A, a.domain, a.path), a.path = pn.cookiePath ? pn.cookiePath : a.path, o.__protected__.deleteTLDCookieForSpecificDomains(A, a.domain, a.path);
            }
            o.deleteCookie(A), o.__protected__.setCookie(A, e.xbc.cookie_value, a);
        }
        var l = e.result, u = {};
        if (l) {
            le(l), o.debug("exp: processed experiences :", l.experiences), k = e.executionStatsContext, l.debugMessages.forEach((function (e) { o.debug("exp: execute :", e); }));
            for (var d, p = function (e, n, t) { for (var r = e.eventConditions, i = 0; i < r.length; i++) {
                var a = r[i], s = a.moduleId, c = r[i - 1], l = !r[i + 1];
                if (b[s] || (b[s] = se(a, e)), l)
                    if (b[s].children.push(n), -1 !== V.indexOf(e.eventType) && "viewportExit" === a.type && !te(e)) {
                        var u = P[e.eventType];
                        if (!u) {
                            o.error("exp: not found preload handler for event: ", e);
                            continue;
                        }
                        var d = n + F;
                        b[d] = oe(u, e), c ? b[c.moduleId].children.push(d) : t.push(d);
                    }
                c && -1 === b[c.moduleId].children.indexOf(s) && b[c.moduleId].children.push(s);
            } }, m = [], g = 0, v = 0; v < l.events.length; v++) {
                var w = l.events[v];
                try {
                    var y = w.eventType, C = w.eventModuleParams || {};
                    if (o.debug("exp: process event '" + y + "' (" + C.moduleId + ")"), "experienceExecute" === y && ((u = r.deepExtend({}, w.eventExecutionContext)).result = r.deepExtend({}, l)), !(d = C.moduleId)) {
                        o.error("exp: not found moduleId for linked node event: ", w);
                        continue;
                    }
                    var I = x[y];
                    if (!I) {
                        o.error("exp: not found handler for event: ", w);
                        continue;
                    }
                    b[d] = ne(I, w, n, l);
                    var S = re(w), E = te(w);
                    if (S || E) {
                        var T = d;
                        if (E) {
                            var N = ce(E, d);
                            b[T = d + D] = N;
                        }
                        S ? -1 === m.indexOf(w.eventConditions[0].moduleId) && m.push(w.eventConditions[0].moduleId) : E && m.push(T), p(w, T, m), g++;
                    }
                    else
                        m.push(d);
                }
                catch (e) {
                    o.error("exp: error on execute event: ", w, e);
                }
            }
            g <= 3 && (_ = !0);
            for (var U = 0; U < m.length; U++)
                d = m[U], b[d] && b[d].run();
            window.clearTimeout(q), q = window.setTimeout((function () { G("rootTimer" + q); }), 2e3), M = u;
        }
        else
            o.debug("exp: no composer execution result");
    } }; function pe(e) { re(e) && ee(e.eventModuleParams.moduleId, e); } function fe(e) { try {
        eval.call(window, "(function () {" + e + "\n})();");
    }
    catch (e) {
        o.log("Error occurred in RunJS\n", e);
    } } function me(e, n) { var t = b[e.eventModuleParams.moduleId + F]; return t && t.getPreloadResult ? t.getPreloadResult().show() : ye(e, n); } function ge(e) { return me(e, (function (e) { return pn.template.show(e); })); } function ve(e, n) { return o.debug("exp: run preloading for:", e), ye(e, (function (e) { return n(e); })); } function he(e) { return ve(e, (function (e) { return pn.template.deferredShow(e); })); } function we() { G("reset"), N.forEach((function (e, n) { clearTimeout(n); })), N = [], u.removeListeners(), d.removeListeners(), s.removeListeners(), p.unbindAll(), b = {}, S = {}; } function ye(e, n) { var t = r.deepExtend({}, e.eventParams), i = e.eventExecutionContext.splitTests, a = e.eventExecutionContext.activeMeters, s = e.eventParams.formNameByTermId, c = e.eventParams.hideCompletedFields, l = function (e) { var n; if (!R)
        return null; var t = e || {}; return { issuerId: R, premium: t.user && t.user.premium || null, redemptionCandidateItemId: L || null, creditStates: t.creditStates || null, userId: (null === (n = t.user) || void 0 === n ? void 0 : n.uid) || null, targetGroups: { l1: "target", l2: null } }; }(e.eventExecutionContext); if (t.trackingId = e.eventExecutionContext.trackingId, t.experienceId = e.eventExecutionContext.experienceId, t.experienceExecutionId = e.eventExecutionContext.executionId, t.experienceActionId = e.eventModuleParams.moduleId, t.experienceConditions = e.eventConditions, t.browserId = O, t.onStartCreditRedemption = function (n) { var t = r.deepExtend({}, n), o = "https://www.piano.io" === R, i = e.eventExecutionContext.user && "anon" !== e.eventExecutionContext.uid; return t.trackingId = e.eventExecutionContext.trackingId || void 0, o && i && (t.uid = e.eventExecutionContext.user.uid || void 0), pn.credit.redeem(t); }, i && i.length > 0) {
        var u = i.map((function (e) { return e.variantId; }));
        t.splitTestIds = JSON.stringify(u);
    } if (t.additionalParamNames = [], a && a.length > 0 && (t.activeMeters = JSON.stringify(a)), "showZuoraOffer" === e.eventType) {
        var d = e.eventParams.ratePlanIds;
        d && d.length > 0 && (t.zuoraSelectedRatePlanIds = JSON.stringify(d), t.additionalParamNames.push("zuoraSelectedRatePlanIds"));
    } if ("showNewscycleOffer" === e.eventType) {
        var p = e.eventParams.ids;
        p && p.length > 0 && (t.newscycleSelectedIds = JSON.stringify(p), t.additionalParamNames.push("newscycleSelectedIds", "campaignCode", "campaignGroupId"));
    } if ("showNewsletterSignup" === e.eventType) {
        var f = e.eventParams.mailingListIds, m = e.eventParams.siteId;
        f && f.length > 0 && (t.mailingListIds = JSON.stringify(f), t.siteId = m, t.additionalParamNames.push("mailingListIds", "siteId"));
    } return "showRecommendations" === e.eventType && (t.widgetId = e.eventParams.widgetId, t.placeholder = e.eventParams.placeholder), s && (t.formNameByTermId = JSON.stringify(s), t.hideCompletedFields = c), l && (t.affiliateState = l), o.debug("exp: show with params:", t), n(t); } function be() { return function () { }; } return { name: "experience", init: function () { if (!I && !o.__protected__.isCxenseBot()) {
            I = !0;
            var e = !0;
            if (pn.customPreChecks && pn.customPreChecks.length)
                for (var n = null, t = pn.customPreChecks.length; t--;)
                    try {
                        1 !== (n = pn.customPreChecks[t]()) && !0 !== n && (e = !1);
                    }
                    catch (e) { }
            e && Q("auto").then((function () { w.setTime("expExec"); }));
        } }, execute: E, _getLastExecutionResult: function () { return M; }, registerCallback: T, __private__: { handlers: x, executedNodes: y, linkedNodes: b, processResult: de, processErrors: Z, show: ye, getTrackingEndpoint: W, initialized: I, registerCallback: T }, __protected__: { sendStatisticsExecutedNodes: G } }; };
    pn.container.register("experience", { useValue: un() }), pn.experience = pn.container.resolve("experience");
    var dn = function () { var e, n, t, r, o, i = 0, a = document, s = !1, c = "active", l = 6e4, u = (r = {}, t = "__ceGUID", { add: function (e, n, o) { return e[t] = void 0, e[t] || (e[t] = "ifvisible.object.event.identifier"), r[e[t]] || (r[e[t]] = {}), r[e[t]][n] || (r[e[t]][n] = []), r[e[t]][n].push(o); }, remove: function (e, n, o) { var i, a, s, c, l; if (o) {
            if (e[t] && r[e[t]] && r[e[t]][n])
                for (a = s = 0, c = (l = r[e[t]][n]).length; s < c; a = ++s)
                    if ((i = l[a]) === o)
                        return r[e[t]][n].splice(a, 1), i;
        }
        else if (e[t] && r[e[t]] && r[e[t]][n])
            return delete r[e[t]][n]; }, fire: function (e, n, o) { var i, a, s, c, l; if (e[t] && r[e[t]] && r[e[t]][n]) {
            for (l = [], a = 0, s = (c = r[e[t]][n]).length; a < s; a++)
                i = c[a], l.push(i(o || {}));
            return l;
        } } }), d = function (e, n, t) { return o || (o = e.addEventListener ? function (e, n, t) { return e.addEventListener(n, t.bind(dn), !1); } : e.attachEvent ? function (e, n, t) { return e.attachEvent("on" + n, t, !1); } : function (e, n, t) { return e["on" + n] = t; }), o(e, n, t); }, p = function () { var e, n = a.createElement("div"), t = n.getElementsByTagName("i"), r = 3; for (e = function () { return n.innerHTML = "\x3c!--[if gt IE " + ++r + "]><i></i><![endif]--\x3e", t[0]; }; e();)
        ; return r > 4 ? r : void 0; }(); function f() { var t, r, o; return !!s || (e ? d(a, n, (function () { return a.hidden ? g() : m(); }), !1) : (t = "blur", p && p < 9 && (t = "focusout"), d(window, t, (function () { return dn.blur(); })), d(window, "focus", (function () { return dn.focus(); }))), s = !0, (o = function () { return clearTimeout(r), "active" !== c && h(), i = +new Date, r = setTimeout((function () { if ("active" === c)
        return v(); }), l); })(), d(a, "mousemove", o), d(a, "mouseup", o), d(a, "keyup", o), d(a, "touchstart", o), d(window, "scroll", o), d(window, "resize", o), m(o), h(o)); } void 0 !== a.hidden ? (e = "hidden", n = "visibilitychange") : void 0 !== a.mozHidden ? (e = "mozHidden", n = "mozvisibilitychange") : void 0 !== a.msHidden ? (e = "msHidden", n = "msvisibilitychange") : void 0 !== a.webkitHidden && (e = "webkitHidden", n = "webkitvisibilitychange"); function m(e) { return "function" == typeof e ? w("focus", (function (n) { e(n); })) : (c = "active", u.fire(dn, "focus"), u.fire(dn, "wakeup"), u.fire(dn, "statusChanged", { status: c })), dn; } function g(e) { return "function" == typeof e ? w("blur", (function (n) { e(n); })) : (c = "hidden", u.fire(dn, "blur"), u.fire(dn, "idle"), u.fire(dn, "statusChanged", { status: c })), dn; } function v(e) { return "function" == typeof e ? w("idle", (function (n) { e(n); })) : (c = "idle", u.fire(dn, "idle"), u.fire(dn, "statusChanged", { status: c })), dn; } function h(e) { return "function" == typeof e ? w("wakeup", (function (n) { return e(n); })) : (c = "active", u.fire(dn, "wakeup"), u.fire(dn, "statusChanged", { status: c })), dn; } function w(e, n) { return f(), u.add(dn, e, n), dn; } return { name: "ifvisible", setIdleDuration: function (e) { return l = 1e3 * e; }, getIdleDuration: function () { return l; }, getIdleInfo: function () { var e, n; return e = +new Date, n = {}, "idle" === c ? (n.isIdle = !0, n.idleFor = e - i, n.timeLeft = 0, n.timeLeftPer = 100) : (n.isIdle = !1, n.idleFor = e - i, n.timeLeft = i + l - e, n.timeLeftPer = (100 - 100 * n.timeLeft / l).toFixed(2)), n; }, wakeup: h, idle: v, focus: m, blur: g, on: w, off: function (e, n) { return f(), u.remove(dn, e, n), dn; }, onEvery: function (e, n) { var t, r = !1; return f(), n && (t = setInterval((function () { if ("active" === c && !r)
            return n(); }), 1e3 * e)), { stop: function () { return clearInterval(t); }, pause: function () { return r = !0; }, resume: function () { return r = !1; }, code: t, callback: n }; }, now: function (e) { return f(), c === (e || "active"); } }; }();
    pn.container.register("ifvisible", { useValue: dn }), pn.ifvisible = pn.container.resolve("ifvisible");
    var fn = function () { var e, n = pn.container.resolve("jqUtils"), t = pn.container.resolve("ifvisible"), r = 0, o = [], i = 60, a = !0, s = function () { m(); var e = o[o.length - 1]; void 0 !== e && void 0 === e.stopTime || o.push({ startTime: new Date, startMinute: r, stopTime: void 0 }); }, c = function () { if (0 !== o.length && !a)
        if (d())
            f();
        else {
            var e = o[o.length - 1];
            void 0 === e.stopTime && (e.stopTime = new Date, e.stopMinute = r);
        } }, l = function (e, n, t, r) { var o = Math.abs(e.getTime() - n.getTime()), i = t - r; return o > 6e4 * (i + 10) && (o = 6e4 * i), o; }, u = function (e) { var n = parseFloat(e); if (isNaN(n))
        throw { name: "InvalidDurationException", message: "An invalid duration time (" + e + ") was provided." }; t.setIdleDuration(n), i = n; }, d = function () { return !!(e = n.filter("video,audio", (function (e) { return !e.paused; }))).length; }, p = function () { setTimeout((function () { c(); }), 15e3); }, f = function () { e && e.forEach((function (e) { n.on(e, "pause", p); })); }, m = function () { e && e.forEach((function (e) { n.off(e, "pause", p); })); }; return { name: "activetimer", setIdleDurationInSeconds: u, getActiveTimeInSeconds: function () { for (var e = 0, n = 0; n < o.length; n++) {
            var t = o[n].startTime, i = o[n].stopTime, a = o[n].startMinute, s = o[n].stopMinute;
            void 0 === i && (i = new Date, s = r), e += l(i, t, s, a);
        } return Math.floor(e / 1e3); }, getTotalTimeInSeconds: function () { var e = 0, n = o[0]; if (void 0 !== n) {
            var t = n.startTime, i = n.startMinute, a = new Date;
            e = l(a, t, r, i);
        } return Math.floor(e / 1e3); }, resetRecordedTime: function () { o = [], s(); }, startTimer: s, stopTimer: c, initialize: function (e) { e && u(e), t.on("blur", (function () { a = !1, c(); })), t.on("focus", (function () { a = !0, s(); })), t.on("idle", (function () { i > 0 && (a = !1, c()); })), t.on("wakeup", (function () { i > 0 && (a = !0, s()); })), s(), setInterval((function () { r++; }), 6e4); } }; }();
    pn.container.register("activetimer", { useValue: fn }), pn.activetimer = pn.container.resolve("activetimer");
    var mn = function () { var e, n = {}, t = [], r = !1, o = 1, i = 2, a = 3; function s(e) { e && (u(), r = !1), function () { if (r)
        return !1; r = !0; try {
        var e = window.googletag = window.googletag || {};
        e.cmd = e.cmd || [], e.cmd.push((function () { e.pubads().addEventListener("slotRenderEnded", f), e.pubads().addEventListener("impressionViewable", m), e.companionAds().addEventListener("slotRenderEnded", f), e.companionAds().addEventListener("impressionViewable", m); })), e.apiReady && e.cmd.push((function () { d(e.pubads().getSlots()), d(e.companionAds().getSlots()); }));
    }
    catch (e) {
        return v(e), !1;
    } }(); } function c(n, t) { "function" == typeof e && e(n, t); } function l(e) { return e && void 0 !== n[e] && null !== n[e] && n.hasOwnProperty(e); } function u() { n = {}, t = []; } function d(e) { for (var n = 0; n < e.length; n++) {
        var t = e[n];
        f({ eventSource: a, slot: t });
    } } function p(e) { var n; try {
        var t = e.serviceName, r = e.slot;
        if (!t) {
            var o = e.slot.getServices();
            o && o.length && (t = o[0].getName());
        }
        var i = r.getResponseInformation() || {}, a = r.getSlotId ? r.getSlotId() : {}, s = r.getSlotElementId ? r.getSlotElementId() : a.getDomId ? a.getDomId() : null;
        n = { companion: !!t && "companion_ads" === t, adUnit: r.getAdUnitPath ? r.getAdUnitPath() : 0, isEmpty: e.isEmpty, elementId: s, advertiserId: e.advertiserId || i.advertiserId, campaignId: e.campaignId || i.campaignId, lineItemId: e.lineItemId || i.lineItemId, creativeId: e.creativeId || i.creativeId, eventSource: e.eventSource || null, size: e.size && e.size.slice(0, 2) || null, viewed: !1, position: null };
        var c = document.getElementById(s);
        if (s && c && (n.position = { top: c.offsetTop, left: c.offsetLeft }, void 0 === e.isEmpty && (n.isEmpty = c.offsetWidth <= 0 && c.offsetHeight <= 0, !n.isEmpty && !n.size))) {
            var l = r.getSizes();
            l && l.length && (n.size = "object" == typeof l[0] ? [l[0].getWidth(), l[0].getHeight()] : l[0]);
        }
    }
    catch (e) {
        v(e);
    } return n; } function f(e) { e.eventSource = e.eventSource || o; var r = p(e), i = g(e.slot); i && (n[i] ? r.viewed = n[i].viewed : t.push(i), n[i] = r, c(r, i)); } function m(e) { var r = g(e.slot); if (r) {
        var o = n[r] || p(e);
        l(r) || (n[r] = o, t.push(r)), void 0 === o.companion && (o.companion = "companion_ads" === e.serviceName), (!o.eventSource || o.eventSource > i) && (o.eventSource = i), o.viewed = !0, c(o, r);
    } } function g(e) { try {
        var n = e.getSlotId ? e.getSlotId() : {}, t = e.getSlotElementId ? e.getSlotElementId() : n.getDomId ? n.getDomId() : null, r = e.getAdUnitPath ? e.getAdUnitPath() : 0;
        return [t, n.getId ? n.getId() : 0, r].join(":");
    }
    catch (e) {
        v(e);
    } } function v(e) { pn && pn.util && pn.util.error && pn.util.error("DFP module error: ", e); } return s(), { name: "doubleClickForPublisher", initialize: s, setCustomHandler: function (n) { e = n; }, getAds: function (e) { var r, o = [], i = 0, a = t.length; e && ("number" == typeof (r = e) && isFinite(r) && Math.floor(r) === r) && e > 0 && e < a && (i = a - e); for (var s = i; s < a; s++) {
            var c = t[s];
            l(c) && o.push(n[c]);
        } return o; }, resetAds: u }; }();
    pn.container.register("doubleClickForPublisher", { useValue: mn }), pn.doubleClickForPublisher = pn.container.resolve("doubleClickForPublisher");
    var gn = function () { var e, n, t, r, o, i, a = pn.container.resolve("postmessage"), s = pn.container.resolve("util"), c = "https://js.braintreegateway.com/web/3.79.1/js/client.min.js", l = "https://js.braintreegateway.com/web/3.79.1/js/apple-pay.min.js", u = ""; a.subscribe("loaded", (function () { d(); })), a.subscribe("startCheckout", (function () { d(); })), a.subscribe("applePayBtClientToken", (function (e) { g(e.params.clientToken); })), a.subscribe("applePayBtCheckoutFlowProperties", (function (e) { r = e.params.requestEmail, o = e.params.requestPostalAddress; })), a.subscribe("applyTaxFailed", (function (n) { e.abort(); })), a.subscribe("checkApplePayBtInstance", (function (e) { n && a.broadcast("applePayInit", {}); })), a.subscribe("applyTaxCompleted", (function (e) { m(e.params.nonce); })), a.subscribe("applePayBtBeginSession", (function (i) { var s = {}, c = i.params; c.resourceTitle && (s = c), c.termId && (u = c.termId || ""); var l = { currencyCode: c.currencyCode, total: { label: c.resourceTitle, amount: c.chargeAmount } }; p(l); try {
        t = n.createPaymentRequest(l);
    }
    catch (e) {
        a.broadcast("payment-error", { errorCode: 101 });
    } (e = new window.ApplePaySession(2, t)).onvalidatemerchant = function (t) { n.performValidation({ validationURL: t.validationURL, displayName: c.resourceTitle || s.resourceTitle }, (function (n, t) { if (n)
        return e.abort(), void a.broadcast("payment-error", { errorCode: 102 }); e.completeMerchantValidation(t); })); }, e.onpaymentauthorized = function (t) { n.tokenize({ token: t.payment.token }, (function (n, i) { if (n)
        return a.broadcast("payment-error", { errorCode: 103 }), void e.completePayment(window.ApplePaySession.STATUS_FAILURE); var s = { nonce: i.nonce }; r || o ? f(t, s) : m(s); })); }, e.begin(); })); var d = function () { var e = s.__protected__.isApplePayAllowed(); a.broadcast("EVENT_APPLE_PAY_CAN_MAKE_PAYMENTS", { canMakePayments: e }); }, p = function (e) { r && (e.requiredShippingContactFields = ["email"]), o && (e.requiredBillingContactFields = ["postalAddress"]); }, f = function (e, n) { e.payment.shippingContact && (n.user = { email: e.payment.shippingContact.emailAddress }); var t = e.payment.billingContact, r = { countryCode: t.countryCode ? t.countryCode.toUpperCase() : t.countryCode, zipCode: t.postalCode, billingZipCode: t.postalCode, nonce: n }; a.broadcast("applePayPaymentAuthorized" + u, r); }, m = function (n) { e.completePayment(window.ApplePaySession.STATUS_SUCCESS), a.broadcast("applePayNonce" + u, n); }, g = function (e) { i = e, v(); }, v = function () { y() || w(c, (function () { h(); })); }, h = function () { b() || w(l, (function () { window.braintree.client.create({ authorization: i }).then((function (e) { window.braintree.applePay.create({ client: e }, (function (e, t) { e ? a.broadcast("payment-error", { errorCode: 101 }) : (n = t, a.broadcast("applePayInit", {})); })); })).catch((function (e) { if (e)
        return a.broadcast("payment-error", { errorCode: 100 }), void s.error("[TP] Client error: " + e.message); })); })); }, w = function (e, n) { s.addScript(e, n); }, y = function () { for (var e = document.getElementsByTagName("script"), n = 0, t = e.length; n < t; n++)
        if (e[n].src.indexOf(c) > -1)
            return !0; }, b = function () { for (var e = document.getElementsByTagName("script"), n = 0, t = e.length; n < t; n++)
        if (e[n].src.indexOf(l) > -1)
            return !0; }; return { name: "applePay" }; }();
    pn.container.register("applePay", { useValue: gn }), pn.applePay = pn.container.resolve("applePay");
    var vn = function () { var e = pn.container.resolve("postmessage"), n = pn.container.resolve("util"), t = "", r = { environment: "", billingRequestFlowId: "" }, o = { customer: "", mandate: "", bank_account_ending: "", bank_account_holder: "", bank_name: "", currency: "" }, i = !1, a = "https://pay.gocardless.com/billing/static/dropin/v2/initialise.js"; e.subscribe("loaded", (function (e) { t = e.sender, i || "inline" === e.displayMode || c(a, (function () { i = !0; })); })), e.subscribe("LOAD_GOCARDLESS_DROPIN", (function (n) { t = n.sender, i ? e.send("GOCARDLESS_DROPIN_LOADED", null, t) : c(a, (function () { i = !0, e.send("GOCARDLESS_DROPIN_LOADED", null, t); })); })), e.subscribe("GOCARDLESS_DROPIN_MANDATE_CREATION_INIT", (function (e) { r = e.params, i && s(); })); var s = function () { window.GoCardlessDropin.create({ billingRequestFlowID: r.billingRequestFlowId, environment: r.environment, onSuccess: function (n) { var r = n.links, i = r.customer, a = r.mandate_request_mandate, s = n.resources.customer_bank_account, c = s.account_number_ending, l = s.account_holder_name, u = s.bank_name, d = n.mandate_request.currency; o = { customer: i, mandate: a, bank_account_ending: c, bank_account_holder: l, bank_name: u, currency: d }, e.send("GOCARDLESS_DROPIN_MANDATE_CREATION_COMPLETE", o, t); }, onExit: function (n) { n ? e.send("payment-error", { message: n }, t) : e.send("GOCARDLESS_DROPIN_ENABLE_PLUGIN", null, t); } }).open(); }, c = function (e, t) { n.addScript(e, t); }; return { name: "goCardlessDropin" }; }();
    pn.container.register("goCardlessDropin", { useValue: vn }), pn.goCardlessDropin = pn.container.resolve("goCardlessDropin");
    var hn = function () { var e, n, t, r = pn.container.resolve("postmessage"), o = pn.container.resolve("util"), i = !1; return { name: "applePayIntegrationService", initialize: function () { var a = function () { i = o.__protected__.isApplePayAllowed(), r.broadcast("EVENT_APPLE_PAY_CAN_MAKE_PAYMENTS", { canMakePayments: i }); }; r.subscribe("provider-component-initiated", (function () { i && r.broadcast("apple-pay-init", {}); })), r.subscribe("initPwApplePay", (function () { a(); })), r.subscribe("startCheckout", (function () { a(); })), r.subscribe("pay-session-received", (function (e) { try {
            n.completeMerchantValidation(e.params.applePaySession);
        }
        catch (e) {
            r.broadcast("payment-error", { errorCode: 111, errors: e });
        } })), r.subscribe("apple-pay-complete-payment", (function (e) { var r; (r = e.params.termId, t && t !== r) || n.completePayment(e.params.status, e.params.errors); })), r.subscribe("start-purchase", (function (o) { t = o.params.termId || "", e = o.params.resourceName, n = new window.ApplePaySession(3, function (e) { return { countryCode: e.params.countryCode, currencyCode: e.params.currencyCode, supportedNetworks: ["visa", "masterCard", "amex", "discover"], merchantCapabilities: ["supports3DS"], requiredShippingContactFields: e.params.requiredShippingContactFields || [], requiredBillingContactFields: e.params.requiredBillingContactFields || [], total: { label: e.params.resourceName, amount: e.params.chargeAmount } }; }(o)), n.onvalidatemerchant = function (n) { var o, i; o = n.validationURL, i = { validationUrl: o, displayedCaption: e, userToken: null, userProvider: null, userRef: null, janrainCaptureToken: null, domainName: window.location.hostname, aid: null, termId: t }, r.broadcast("apple-pay-pay-session-request", i); }, n.onpaymentauthorized = function (e) { try {
            r.broadcast("apple-pay-payment-authorized", { paymentData: e.payment, termId: t });
        }
        catch (e) {
            r.broadcast("payment-error", { errorCode: 110, error: e });
        } }; try {
            n.begin();
        }
        catch (e) {
            r.broadcast("payment-error", { errorCode: 112, error: e, termId: t });
        } })), r.subscribe("abort-apple-pay-session", (function () { !function () { try {
            n.abort();
        }
        catch (e) {
            o.error(e);
        } }(); })); }, __protected__: { applePayCanMakePaymentsWithActiveCard: function () { var e = { then: function (e) { return e(null); }, catch: function () { } }; return pn.applePayMerchantId && o.__protected__.isApplePayAllowed() && pn.applePayMerchantId ? window.ApplePaySession.canMakePaymentsWithActiveCard(pn.applePayMerchantId) : e; } } }; }();
    pn.container.register("applePayIntegrationService", { useValue: hn }), pn.applePayIntegrationService = pn.container.resolve("applePayIntegrationService");
    var wn = function () { var e, n, t = pn.container.resolve("postmessage"), r = pn.container.resolve("util"), o = pn.container.resolve("ajax"), i = "datatrans-applepay-button", a = null, s = null, c = !1, l = function (n) { e = n.sender, m().then(g).then(v); }, u = function (n) { var r = null; n || (r = { message: n }), t.send("datatrans-applepay-service-error", r, e); }, d = function (e) { n = e.params, m().then(g).then(p).catch((function () { u("Apple Pay button init error"); })); }, p = function () { PaymentButton.init(n.applePayConfig); }, f = function () { var e = document.getElementById(i); null !== e && null !== e.firstElementChild ? e.firstElementChild.click() : u("Could not process with Apple Pay. Please, try again."); }, m = function () { return null !== s ? s : s = new Promise((function (e) { o.request({ url: tp.getApiEndpoint() + "/anon/datatrans/applepay/config", data: { aid: tp.aid }, dataType: "jsonp", jsonpCallback: "jsonpCallback", success: function (n) { var t = n.config; e(t.url); } }); })); }, g = function (e) { if (null !== a)
        return a; var n = "datatrans-apple-pay"; if (!document.getElementById(n)) {
        var t = document.createElement("script");
        return t.src = e, t.id = n, document.body.appendChild(t), a = new Promise((function (e) { t.onload = function () { e(null); }; }));
    } }, v = function () { c || (PaymentButton.on("init", h), PaymentButton.on("create", w), PaymentButton.on("token", y), PaymentButton.on("abort", (function () { u(null); })), PaymentButton.on("unsupported", (function () { u("No payment method is supported"); })), PaymentButton.on("error", (function (e) { e && (r.error("datatransApplePayIntegrationService. apple pay button error: " + e), u("Could not process with Apple Pay. Please, try again.")); })), c = !0); }, h = function () { var e = b(); PaymentButton.create(e, n.paymentConfig).catch((function () { u("Apple Pay button create error"); })); }, w = function () { r.log("datatransApplePayIntegrationService paymentButtonOnCreate"), t.send("datatrans-applepay-service-ready", null, e); }, y = function (n) { r.log("datatransApplePayIntegrationService paymentButtonOnToken"), t.send("datatrans-applepay-service-token", n.token.details.token, e); }, b = function () { var e = document.getElementById(i); return null === e && ((e = document.createElement("div")).setAttribute("id", i), e.style.display = "none", document.body.appendChild(e)), e.innerHTML = "", e; }; return { name: "datatransApplePayIntegrationService", initialize: function () { r.__protected__.isApplePayAllowed() && (t.subscribe("datatrans-applepay-loaded", l), t.subscribe("datatrans-applepay-checkout-initiate-purchase", d), t.subscribe("datatrans-applepay-make-purchase", f)); } }; }();
    pn.container.register("datatransApplePayIntegrationService", { useValue: wn }), pn.datatransApplePayIntegrationService = pn.container.resolve("datatransApplePayIntegrationService");
    var yn = function () { var e, n = pn.container.resolve("postmessage"), t = pn.container.resolve("util"), r = null, o = null, i = !1, a = ""; n.subscribe("stripe-applepay-initialized", (function () { s(); })), n.subscribe("stripe-applepay-initiate-purchase", (function (e) { s().then((function () { var n = e.params.apiKey; null === r && (r = window.Stripe(n)); var t = e.params.paymentRequestPayload; return r.paymentRequest(t); })).then((function (e) { return o = e, e.canMakePayment(); })).then((function (e) { i = e && e.applePay, n.broadcast("stripe-applepay-initiate-purchase-complete", { canMakePayment: i }), i && (o.on("cancel", (function () { n.broadcast("stripe-applepay-start-purchase-complete" + a, { status: "fail" }); })), o.on("paymentmethod", (function (e) { var t = e.paymentMethod.billing_details.address, r = { countryCode: t.country, zipCode: t.postal_code, billingZipCode: t.postal_code }, o = e.paymentMethod.id; n.broadcast("stripe-applepay-start-purchase-complete" + a, { status: "success", paymentMethodId: o, payerEmail: e.payerEmail, billingAddress: r }), e.complete("success"); }))); })).catch((function (e) { t.error(e), n.broadcast("stripe-applepay-initiate-purchase-complete", { canMakePayment: !1 }); })); })), n.subscribe("stripe-applepay-start-purchase", (function (e) { a = e.params.termId || ""; var n = e.params.paymentRequestPayload; o.update(n), o.show(); })), n.subscribe("stripe-applepay-abort-request", (function () { o && o.abort(), n.broadcast("stripe-applepay-reopen-request"); })); var s = function () { if (null != e)
        return e; if (!document.getElementById("stripe.js")) {
        var n = document.createElement("script");
        return n.src = "https://js.stripe.com/v3/", n.id = "stripe.js", document.body.appendChild(n), e = new Promise((function (e) { n.onload = function () { e(null); }; }));
    } }; return { name: "stripeApplePayIntegrationService" }; }();
    pn.container.register("stripeApplePayIntegrationService", { useValue: yn }), pn.stripeApplePayIntegrationService = pn.container.resolve("stripeApplePayIntegrationService");
    var bn = function () { var e = pn.container.resolve("postmessage"), n = pn.container.resolve("util"); e.subscribe("obi-handle-3ds-challenge", (function (e) { var r = e.params; if (window.obick)
        t(r);
    else {
        if (-1 === ["https://jsl.qat.obi.aol.com/obipmservice/obick.umd.js", "https://jsl.prod.obi.aol.com/obipmservice/obick.umd.js"].indexOf(r.obickUrl))
            return void n.error("Untrusted obickUrl detected: " + r.obickUrl);
        var o = document.createElement("script");
        o.src = r.obickUrl, o.id = "obick.js", document.body.appendChild(o), o.onload = function () { n.log(o.id + " onload"), t(r); };
    } })); var t = function (t) { if (t.stepUpUrl && 0 !== t.stepUpUrl.indexOf("http"))
        n.error("There is no link in params.stepUpUrl for OBI");
    else {
        var r = { stepUpUrl: t.stepUpUrl, jwt: t.jwt, transactionId: t.transactionId, zIndex: t.zIndex };
        window.obick.handle3dsChallenge(r).then((function (t) { n.debug(t), e.broadcast("obi-3ds-challenge-complete", { threeDSTransactionId: t.threeDSTransactionId, challengeStatus: t.challengeStatus }); })).catch((function (t) { n.error(t), e.broadcast("obi-3ds-challenge-complete", { error: "challenge-error", payload: t }); }));
    } }; return { name: "obi3DSChallenge" }; }();
    pn.container.register("obi3DSChallenge", { useValue: bn }), pn.obi3DSChallenge = pn.container.resolve("obi3DSChallenge");
    var kn = function () { var e = pn.container.resolve("jqUtils"), n = pn.container.resolve("util"), t = pn.container.resolve("api"), r = pn.container.resolve("user"), o = pn.container.resolve("pianoId"), i = { displayMode: "inline", containerSelector: "body", loginSuccess: d }, a = "reader_id", s = function () { return "/" + pn.aid + "/execution/amp"; }, c = function () { window.location.href = n.getQueryParamByName("return") + "#success=true"; }; var l = function (e) { return /^\w+$/i.test(e); }, u = function (e) { var r = {}; if (r.reader_id = n.getQueryParamByName(a), r.reader_id) {
        var o = pn.getExperienceEndpoint(!1);
        t.callApi(s() + "/logout", r, e, o, !1, !0);
    }
    else
        n.log("reader_id cannot be empty"); }; function d(e, r) { var o = e || {}; if (o.reader_id || (o.reader_id = n.getQueryParamByName(a)), o.reader_id) {
        var i = pn.getExperienceEndpoint(!1);
        t.callApi(s() + "/login", o, r, i, !1, !0);
    }
    else
        n.log("reader_id cannot be empty"); } return { name: "amp", showLogin: function (t) { t = t || {}; var a = r.getProvider(); if (a.getName() === o.getName()) {
            var s;
            s = t.loginSuccess && e.isFunction(t.loginSuccess) ? t.loginSuccess : c;
            var l = function () { d({}, s); }, u = Object.assign({}, i, t);
            r.isUserValid() ? l() : (u.loginSuccess = l, o.show(u));
        }
        else
            n.log("Current user provider" + a.name + " is not allowed for amp"); }, logout: function (n) { n = e.isFunction(n) ? n : c, r.getProvider().getName() === o.getName() ? o.logout((function () { u(n); })) : u(n); }, login: function (t) { var i = r.getProvider().getName(); i === o.getName() && (t = t ? e.deepExtend({}, t, { userProvider: i }) : { userProvider: i }); var a = { user_transient: !0, user_provider: "publisher_user" }; if (t && t.readerId && (a.reader_id = t.readerId), t && t.userToken && (a.user_token = t.userToken), t && t.userProvider && (a.user_provider = t.userProvider, a.user_transient = !1), !function (t) { if (t && t.userState && e.isPlainObject(t.userState)) {
            var r = Object.keys(t.userState);
            if (r.filter(l).length !== r.length)
                return n.error("user_state accept only contain letters, numbers and underscore"), !1;
        } return !0; }(t))
            return !1; t && t.userState && (a.user_state = JSON.stringify(t.userState)); d(a, (function (n) { 0 === n.code ? t.loginSuccess && e.isFunction(t.loginSuccess) && t.loginSuccess() : t.loginFail && e.isFunction(t.loginFail) && t.loginFail(); })); } }; }();
    pn.container.register("amp", { useValue: kn }), pn.amp = pn.container.resolve("amp");
    var _n = function () { var e, n = pn.container.resolve("postmessage"), t = [{ resourceRegExp: new RegExp("/checkout/offer/show"), label: "showOffer" }, { resourceRegExp: new RegExp("tinypass.min.js$"), label: "tinypassMinJS" }, { resourceRegExp: new RegExp("/xbuilder/experience/execute"), label: "experienceExecute" }], r = !1, o = []; function i(e) { e.forEach((function (e) { !function (e) { if (!function (e) { return t.some((function (n) { return e.name.match(n.resourceRegExp); })); }(e))
        return; !function (e) { if (!a())
        return void o.push(e); o.push(e), s(); }(e); }(e); })); } function a() { return r && e; } function s() { a() && (o.forEach((function (t) { n.send("EVENT_TP_PERFORMANCE_DATA", { entry: t }, e); })), o = []); } return function () { if (window.performance && window.PerformanceObserver && "function" == typeof performance.getEntries) {
        var t = window.PerformanceObserver.prototype.observe;
        window.PerformanceObserver.prototype.observe = function () { for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n]; try {
            t.apply(this, e);
        }
        catch (e) { } }, n.subscribe("EVENT_LOGGER_READY", (function (n) { e = n.sender, r = !0, s(); })), i(performance.getEntries()), new PerformanceObserver((function (e) { i(e.getEntries()); })).observe({ entryTypes: ["measure", "resource"] });
    } }(), { name: "performanceMetrics" }; }();
    pn.container.register("performanceMetrics", { useValue: _n }), pn.performanceMetrics = pn.container.resolve("performanceMetrics");
    var Cn = function () { var e = pn.container.resolve("api"), n = pn.container.resolve("pianoId"); return { name: "doubleOptIn", check: function () { pn.user.isUserValid() && new Promise((function (n) { e.callApi("/email/confirmation/check", {}, (function (e) { n(e); })); })).then((function (e) { e && !1 === e.data && n.showEmailConfirmationRequired(); })); } }; }();
    pn.container.register("doubleOptIn", { useValue: Cn }), pn.doubleOptIn = pn.container.resolve("doubleOptIn");
    var In = function () { var e = pn.container.resolve("api"), n = pn.container.resolve("postmessage"), t = pn.container.resolve("util"), r = t.debounce((function () { new Promise((function (n, t) { var r = { aid: pn.aid }; e.callApi(o, r, (function (e) { e && e.data && n(e.data), t(e.message); })); })).then(i, a); }), 1500), o = "/externalVerification/synchronizeSubscriptions", i = function (e) { n.broadcast("NEWSCYCLE_HAS_BEEN_SYNCHRONIZED_SUCCESS", { data: e }); }, a = function (e) { t.error("newscycle module: sync request failed with error: " + e); }; return { name: "newscycle", syncSubscriptions: r }; }();
    pn.container.register("newscycle", { useValue: In }), pn.newscycle = pn.container.resolve("newscycle");
    var Sn = function () { var e = pn.container.resolve("ajax"), n = pn.container.resolve("postmessage"), t = pn.container.resolve("util"), r = { enabled: !1, captcha3_site_key: "", aid: "" }, o = function (n) { e.request({ url: tp.getApiEndpoint() + "/anon/captcha/get.js", data: { aid: tp.aid }, dataType: "jsonp", jsonpCallback: "jsonpCallback", cache: !0, success: function (e) { !function (e, n) { e.config && e.config.enabled ? (r = e.config, n && n()) : e.message && t.error(e.message); }(e, n); } }); }; function i() { window.grecaptcha.ready(a), c(); } var a = function () { var e = document.createElement("div"); e.id = "tp-recaptcha", document.body.appendChild(e), window.grecaptcha.render("tp-recaptcha", { sitekey: r.captcha3_site_key, size: "invisible", "error-callback": function () { e.style.display = "none"; } }); }, s = function () { window.onCaptchaV3Load = i; var e = document.createElement("script"); e.src = "https://www.google.com/recaptcha/api.js?onload=onCaptchaV3Load&render=explicit", e.type = "text/javascript", e.async = !0, e.defer = !0, document.head.appendChild(e); }, c = function () { n.subscribe("get-captcha-v3-enabled", (function () { l(); })), n.subscribe("get-captcha-v3-token", (function (e) { window.grecaptcha.ready((function () { return u(e.params.action); })); })); }, l = function () { n.broadcast("captcha-v3-enabled-value", { isEnabled: r.enabled }); }, u = function (e) { window.grecaptcha.execute({ action: e }).then((function (e) { n.broadcast("captcha-v3-token", { token: e }); })).catch((function () { n.broadcast("captcha-v3-token", { token: "" }); })); }; return { name: "captchaV3", addCaptchaV3: function () { o(s); } }; }();
    pn.container.register("captchaV3", { useValue: Sn }), pn.captchaV3 = pn.container.resolve("captchaV3");
    var xn = function (e) { void 0 === e && (e = pn.container); var n = e.resolve("log"), t = e.resolve("postmessage"), r = e.resolve("api"), o = e.resolve("util"), i = e.resolve("versionService"), a = "EVENT_TP_ERROR_HANDLER", s = "sdk", c = [], l = !0, u = function (e) { if (h() && !g(c, e)) {
        e.tags || (e.tags = ["unknown"]), e.aid = pn.aid, e.v = i.getTinypassVersion();
        var n = { details: e };
        c.push(n);
    } }; var d = function (e) { var n = e.params; Array.isArray(n) && n.forEach((function (e) { u(e); })); }; function p(e) { var n, t; if (e.message.toLowerCase().indexOf("script error") > -1)
        u({ message: "Probably that is Piano error.", url: window.location.href, tags: [s] });
    else {
        var r = null == e ? void 0 : e.error;
        if (v(null == r ? void 0 : r.stack))
            return !1;
        u({ stack: null !== (n = null == r ? void 0 : r.stack) && void 0 !== n ? n : "n/a", message: null !== (t = null == r ? void 0 : r.message) && void 0 !== t ? t : "n/a", userAgent: navigator.userAgent, tags: [s] });
    } return !1; } var f = function () { setInterval((function () { m(), l = !1; }), 15e3); }, m = function () { var e = c.filter((function (e) { return !e.send; })); if (0 !== e.length) {
        var t = e.map((function (e) { return e.details; })), o = { type: "console-error-message", srcType: "ts", log_message: JSON.stringify(t) };
        n.logBeaconRequest(r.getEndpoint() + "/anon/error/log", o), e.forEach((function (e) { return e.send = !0; }));
    } }, g = function (e, n) { var t = e.map((function (e) { return JSON.stringify(e.details); })), r = JSON.stringify(n); return -1 !== t.indexOf(r); }, v = function (e) { return -1 === (null == e ? void 0 : e.indexOf("tinypass")); }, h = function () { return !!o.__protected__.getLocalStorageItem("tinypassErrorHandlerTestMode") || 0 === w(0, 1e3); }, w = function (e, n) { var t = e - .5 + Math.random() * (n - e + 1); return Math.round(t); }, y = function (e, n) { return void 0 === e && (e = []), n ? e.concat(n) : e; }; return { name: "tinypassErrorHandler", addError: function (e, n) { try {
            var t = { place: n, tags: [s] };
            e instanceof Error ? (t.stack = e.stack, t.message = e.message) : t.stack = JSON.stringify(e), l && (t.tags = y(t.tags, "initError")), u(t);
        }
        catch (e) { } }, initialize: function () { try {
            pn.isSandbox() || (t.subscribe(a, d), null === (e = window.addEventListener) || void 0 === e || e.call(window, "error", p), f());
        }
        catch (e) {
            console.warn("Cannot start watching errors", e);
        } var e; } }; };
    pn.container.register("tinypassErrorHandler", { useValue: xn() }), pn.tinypassErrorHandler = pn.container.resolve("tinypassErrorHandler");
    var Pn = function (e) { void 0 === e && (e = pn.container); var n = e.resolve("api"), t = e.resolve("cookie"), r = e.resolve("log"), o = e.resolve("jqUtils"), i = e.resolve("util"), a = e.resolve("logging"), s = e.resolve("fingerprint"), c = e.resolve("user"), l = e.resolve("sha1"), u = e.resolve("activetimer"), d = e.resolve("scrollDepth"), p = e.resolve("doubleClickForPublisher"), f = e.resolve("offer"), m = e.resolve("viewportExit"), g = e.resolve("idle"), v = e.resolve("experience"), h = e.resolve("pianoId"), w = e.resolve("pianoEsp"), y = e.resolve("applePayIntegrationService"), b = e.resolve("datatransApplePayIntegrationService"), k = e.resolve("cxense"); e.resolve("tinypassErrorHandler"); var _ = e.resolve("captchaV3"), C = pn.container.resolve("postmessage"), I = "exrs", S = null, x = "voucher_code", P = "__pvi", E = !1, T = !1, A = {}, M = null, O = k.__protected__.getOrGenerateCxCompatibleBid(), R = { APPLE_PAY_BT: 25, APPLE_PAY_SS: 38, APPLE_PAY_STRIPE: 41, APPLE_PAY_PW: 42, DATATRANS_APPLE_PAY: 61 }, L = new Set(Object.values(R)), N = void 0, U = [], j = !1, D = !1, F = function () { if ("iP" === navigator.platform.substr(0, 2)) {
        var e = /constructor/i.test(window.HTMLElement), n = window.navigator, t = n.userAgent, r = !!window.indexedDB;
        if (-1 === t.indexOf("Safari") || -1 === t.indexOf("Version") || n.standalone) {
            if (!r && e || !window.statusbar.visible)
                ;
            else if (window.webkit && window.webkit.messageHandlers || !e || r)
                return !0;
        }
        else
            ;
    } return !1; }(); var B, V, q, z = function () { var e; try {
        e = JSON.parse(i.__protected__.getCookie(P));
    }
    catch (n) {
        e = {};
    } return e; }, H = function () { return i.getCurrentDomainFromCookie(P); }, W = function (e, n) { var t = A; A = {}; var r = {}; for (var o in t)
        if (t.hasOwnProperty(o))
            for (var i in r[o] = r[o] || [], t[o])
                t[o].hasOwnProperty(i) && r[o].push(t[o][i]); be(r, e, n); }, J = function () { if (v.execute.invokeCount > 0) {
        var e = G();
        return Ce() && Ie(re(), e, pn.cxenseSiteId), e;
    } return Ce() ? k.__protected__.tryToGetCxPageViewId(Se()) : G(); }; function G() { function e(e, n, t) { t = t || "0"; var r = String(e); return r.length >= n ? r : new Array(n - r.length + 1).join(t) + r; } if (Ce())
        return Se(); var n = i.randomString(16), t = l.hash([s.getFingerprint(), window.location.href].join("")), r = new Date; return [[e(r.getFullYear(), 4), e(r.getMonth() + 1, 2), e(r.getDate(), 2), e(r.getHours(), 2), e(r.getMinutes(), 2), e(r.getSeconds(), 2), e(r.getMilliseconds(), 3)].join("-"), n, t].join("-"); } var Q = function (e) { var n = { path: "/", expires: 1, domain: V.currentDomain }; return e && (n.domain = e), n; }, X = function (e, n) { e.domain = n.domain, e.time = (new Date).getTime(), i.__protected__.setCookie(P, JSON.stringify(e), n); }, $ = function (e) { var n = (new Date).getTime(), t = 6e4 * i.getBrowserTimezoneOffset(), r = i.getAppTimezoneOffset(), o = new Date(e.time).setHours(0, 0, 0, 0) + 864e5 - t - r; return e.time + 18e5 < n || n >= o; }, Y = function () { if (i.__protected__.cameFromFbSubscriptions())
        return !1; if (!V.currentDomain)
        return !1; var e = i.getReferrer(); if (M && M === e)
        return !1; var n = i.getHostname(e), t = new RegExp(V.currentDomain.replace(/\./g, "\\.").replace(/^\\./, "\\.?") + "$").test(n); return Boolean(n) && !t; }, K = function () { var e = z(); (!e || !e.id || !e.time || $(e) || Y()) && (e.id = "v-" + G()), function (e) { var n = Q(); e.domain || V.currentDomain ? X(e, n) : i.waitCall("domainIsReceived", (function (t) { ce(t), n.domain = t, X(e, n); })); }(e), V.visit = e; }, Z = function (e, n, t) { var r, a, c = "manual"; if (void 0 === n)
        n = window.location.href;
    else {
        if ("object" != typeof n)
            throw new Error("First parameter to track page must be a URL or an object");
        var l = n;
        if (void 0 === l.url)
            throw new Error("Must supply url property");
        n = l.url, void 0 !== l.tags && (t = l.tags), void 0 !== l.submitType && (c = l.submitType);
    } t || (t = pn.tags), pn.customPageUrl && (e.custom_page_url = i.prepareUrlParameter(pn.customPageUrl)), void 0 !== t ? "[object Array]" !== Object.prototype.toString.call(t) && "[object String]" !== Object.prototype.toString.call(t) ? (i.log("Tags must be an array or a comma-separated string, ignoring supplied tags"), t = "") : t instanceof Array && (t = t.join(",")) : t = "", q.track(), e.page_session_id = q.pageSessionId, e.track_count = q.trackCount, we(e), pn.contentCreated ? a = pn.contentCreated : pn.contentCreatedSelector && o.queryEl(pn.contentCreatedSelector) && (a = null === (r = o.queryEl(pn.contentCreatedSelector)) || void 0 === r ? void 0 : r.innerHTML), a && (e.content_created = a), "boolean" == typeof pn.contentIsNative && (e.content_is_native = pn.contentIsNative), pn.zone && (e.zone = pn.zone), pn.itemId && (e.item_id = pn.itemId); var u = pn.contentSection || se("section"); u && (e.content_section = u); var d = pn.contentAuthor || se("author"); d && (e.content_author = d); var p = pn.contentId || se("id"); p && (e.content_id = p); var f, m = i.__protected__.getCookie("sailthru_hid"); m && (e.sailthru_hid = m), M && M === i.getReferrer() ? f = "" : (f = i.getReferrer(), M = f), e.referer = i.prepareUrlParameter(f), t && (e.tags = t), e.url = i.prepareUrlParameter(n), e.fingerprint = s.getFingerprint(), e.adblocker = i.getAdblockStatus(), e.adblocker !== i.ADBLOCKER_STATUS.ENABLED_AFTER_DISABLED && e.adblocker !== i.ADBLOCKER_STATUS.ENABLED || (pn.setCustomParam("_abr", i.getAdblockerStatusReason(), "user", !0), pn.setCustomParam("_absh", i.getAdblockerHistoryCookieInfo().cookieValue + "", "user", !0)), e.timezone_offset = i.getBrowserTimezoneOffset(), e.submit_type = c; var g = ae(); return e.visit_id = g, e.new_visit = oe(g), e.keywords = o.getAttr('meta[name="keywords"]', "content") || o.getAttr('meta[name="news_keywords"]', "content") || "", e.title = o.getAttr('meta[property="og:title"]', "content") || "", e.description = o.getAttr('meta[property="og:description"]', "content") || "", e.content_type = o.getAttr('meta[property="og:type"]', "content") || "", ["keywords", "title", "description", "content_type"].forEach((function (n) { e[n] = e[n].substr(0, 8192); })), e.custom_variables = JSON.stringify(pn.customVariables), ne(e), e; }, ee = function () { var e = { aid: pn.aid }, n = i.getTbcCookie(), t = { active: u.getActiveTimeInSeconds(), total: u.getTotalTimeInSeconds() }; n && (e.tbc = n), t.total < t.active && (t.total = t.active), e.time_spent = JSON.stringify(t), e.scroll = JSON.stringify({ max_page_height: d.getMaxDocumentHeight(), max_depth: d.getMaxScrollDepth() }), e.viewport_exit = m.getSumOfCodesDirection(), e.url = i.prepareUrlParameter(window.location.href), we(e), e.visit_id = ae(), ie(); var r = {}, a = p.getAds(200); return a.length && (r.dfp = a), o.isEmptyObject(r) || (e.ads = JSON.stringify(r)), e; }, ne = function (e) { var n = {}; return pn.customParams && (n = o.deepExtend({}, pn.customParams)), o.isEmptyObject(n) || (e.custom_params = JSON.stringify(n)), e; }, te = function () { return q.id; }, re = function () { return O; }, oe = function (e) { var n = V.lastTrackedVisitId !== e; return V.lastTrackedVisitId = e, n; }, ie = function () { V.checkForRefresh = !0; }, ae = function () { return V.checkForRefresh && (K(), V.checkForRefresh = !1), V.visit.id; }, se = function (e) { return (document.head.querySelector("meta[name=" + e + "]") || {}).content; }, ce = function (e) { V.currentDomain = e; }, le = function () { return !(pn.endpoint && pn.endpoint.match(/sandbox/)); }, ue = function (e, t, r, o) { pn.aid && 0 !== pn.aid.length ? le() && i.waitCall("refreshAccessTokenList", (function () { i.waitCall("offerCreate", (function () { a.setTime("track"), i.startCall("pageTrack"), n.callApi(e, t, (function (e) { i.doneCall("pageTrack"), r && r(e); }), pn.getTrackingEndpoint() + "/api/v3", o); })); })) : i.log("Must supply a valid tp.aid before calling tp.init()"); }, de = function () { E && q.trackCount > 0 && (pe(), he()); }, pe = function (e) { if (le())
        try {
            var n = ee();
            m.isInitialized() && m.resetSumOfCodesDirectionToDefault(), r.logBeaconRequest(pn.getTrackingEndpoint() + "/api/v3/page/unload", n), ge();
        }
        catch (e) {
            i.error("main: error on tracking page unload event: ", e);
        } }, fe = function () { T || (T = !0, pe()); }, me = function () { E = !0; }, ge = function () { E = !1; }, ve = function () { E && fe(), W(!0, "beacon_request"), v.__protected__.sendStatisticsExecutedNodes("unload"); }, he = function () { u.resetRecordedTime(); }, we = function (e) { e && (e.pageview_id = te()); }, ye = function (e, n) { if (le())
        try {
            de();
            var t = Z({}, e, n);
            ue("/page/track", t), me();
        }
        catch (e) {
            i.error("main: error on page tracking event: ", e);
        } }, be = function (e, n, t) { }, ke = function () { var e = i.getQueryParamByName(x); e && f.startRedeemVoucher({ voucherCode: e }); }, _e = function () { return S || (S = new Promise((function (e) { if (null !== i.__protected__.getLocalStorageItem(I) && e({ has_active_apple_pay_card: i.__protected__.getLocalStorageItem(I) }), !pn.applePayMerchantId)
        return e({ has_active_apple_pay_card: null }), S; Pe().then((function (n) { var t = function (n) { e({ has_active_apple_pay_card: n }), i.__protected__.setLocalStorageItem(I, n, 7200); }; n ? y.__protected__.applePayCanMakePaymentsWithActiveCard().then(t) : t(null); })); })), S); }; function Ce() { return k.__protected__.isActivated(); } var Ie = function (e, n, t) { return k.__protected__.injectIds(!1, e, n, t); }, Se = function () { return i.__protected__.randomStringCxCompatible(); }; function xe(e) { return function (n) { var t = n.params; void 0 === N && (N = function (e) { if (!Array.isArray(e) || !e.length)
        return !1; for (var n = 0, t = e; n < t.length; n++) {
        var r = t[n];
        if (L.has(r))
            return !0;
    } return !1; }(t)), U = t || [], e(N); }; } function Pe() { return void 0 !== N ? Promise.resolve(N) : F ? (N = !1, Promise.resolve(!1)) : new Promise((function (e) { v.registerCallback("experienceFlow", (function () { N = !0, e(!0); })), C.subscribe("ACTIVE_PAYMENT_METHODS_IDS_INITIALIZED", xe(e)), C.subscribe("MY_ACCOUNT_ACTIVE_PAYMENT_METHODS_IDS_INITIALIZED", xe(e)); })); } return { name: "main", fetchVisitId: ae, trackPageUnloadIfNecessary: de, externalResourcesDelay: _e, pageTrack: ye, trackPage: function (e, n) { return ye(e, n); }, buildPageTrackParams: Z, fetchPageViewId: te, fetchCxBrowserId: re, trackPageUnload: pe, registerTrackUnload: me, isRegisteredTrackUnload: function () { return E; }, unregisterTrackUnload: ge, resetTimer: he, resetAds: function () { p.resetAds(); }, trackAd: function (e, n, t) { A[e] || (A[e] = {}), A[e][n] = t, B(); }, init: function () { if (pn.aid && 0 !== pn.aid.length) {
            var e, n, t;
            B = i.debounce(W, 3e3), V = { currentDomain: H(), lastTrackedVisitId: z().id, visit: {}, checkForRefresh: !1 }, q = { id: J(), pageSessionId: "s-" + G(), trackCount: 0, tracked: !1, track: function () { q.tracked ? q.id = J() : q.tracked = !0, q.trackCount++; } }, Ce() && (e = re(), n = te(), t = pn.cxenseSiteId, k.__protected__.injectIds(!0, e, n, t)), K(), pn.isMockMode || (o.isFunction(p.initialize) && p.initialize(), o.isFunction(u.initialize) && u.initialize(), o.isFunction(d.initialize) && d.initialize()), o.isFunction(g.initialize) && g.initialize(), Pe().then((function (e) { e && (!j && o.isFunction(y.initialize) && (j = !0, y.initialize()), D || -1 !== U.indexOf(R.DATATRANS_APPLE_PAY) && o.isFunction(b.initialize) && (D = !0, b.initialize())); })), o.isFunction(w.__protected__.init) && setTimeout((function () { w.__protected__.init().catch((function () { })); }), 5e3), o.isFunction(c.refreshAccessToken) && c.refreshAccessToken(), _e();
            var r = c.getProvider();
            r && o.isFunction(r.extendUserToken) && r.extendUserToken(), o.on(window, "beforeunload", (function () { return ve(); })), o.on(window, "unload", (function () { return ve(); })), _.addCaptchaV3();
        }
        else
            i.log("Must supply a valid tp.aid before calling tp.init()"); }, checkToRunWidgetImmediately: function () { var e; ke(), (e = i.getQueryParamByName("verification_code")) && "pianoId" === c.getProvider().name && i.waitCall("offerCreate", (function () { h.isUserValid() ? h.__protected__.showEmailConfirmation({ verification_code: e }) : h.show({ verification_code: e }); })), h.checkAndShowEmailIsNotConfirmed(), o.isFunction(f.checkThreeDSRedirect) && f.checkThreeDSRedirect(); }, trackAds: be, appHasApplePay: function () { return N; }, __private__: { VISIT_ID_COOKIE: P, VOUCHER_QUERY: x, collectedAds: A, unloadRegistered: E, unloadTriggered: T, getPageView: function () { return q; }, getVisitContainer: function () { return V; }, track: ue, checkVoucher: ke, setPageViewId: we, currentEnvironmentSupportsPageTrack: le, buildPageUnloadParams: ee, invalidateLastVisit: function () { var e = Q(); t.remove(P, e); }, getCurrentDomain: H, loadLastVisit: z, setVisitCurrentDomain: ce, saveVisitCookie: X, getVisitCookieOptions: Q, isTimeExpired: $, refreshVisit: K, generatePageViewId: G, trackCollectedAds: W, unloadHandler: ve, unloadAction: fe, buildPageCustomParams: ne, hasExternalReferrer: Y } }; };
    pn.container.register("main", { useValue: Pn() }), pn.main = pn.container.resolve("main");
    var En = { predefineValues: [] };
    window.tp && window.tp.length && (En.predefineValues = _e([], window.tp || [], !0)), pn.tpPredefinedOptions = En, pn.container.register("tpPredefinedOptions", { useValue: En });
    var Tn = function () { function e(e, n, t, r, o) { this.tpPredefinedOptions = e, this.css = n, this.tinypassErrorHandler = t, this.gaService = r, this.utilService = o, this.fullTPVersion = !1, this.isInitialized = !1, this.aid = "", this.isSensitiveDataProtectionEnabled = !1, this.affiliateTokenName = "affiliateToken", this.cxCdnUrl = "https://cdn.cxense.com", this.c1XLoadCce = !0, this.c1XIntegrationVersion = "v2", this.cxenseLibAwaitingTimeout = 0, this.cxenseLibAwaitingRetryCount = 0, this.trackPages = !0, this.debug = !1, this.userRef = "", this.usePianoIdLiteUserProvider = !1, this.useTinypassAccounts = !1, this.useCondeUserProvider = !1, this.useGigyaUserProvider = !1, this.usePianoIdUserProvider = !1, this.useAidSpecifiedCookies = !1, this.sandbox = !1, this.zIndexes = { backdrop: 3e5, modal: 300050, close: 300100 }, this.customPreChecks = [], this.customParams = {}, this.externalLibraries = [], this.externalLibrariesCallbacks = [], this.customVariables = {}, this.locale = "", this.trackPageView = !0, this.redirectToFbTimeout = 3, this.isDoubleOptInCheckOnAccessCheckEnabled = !1, this.isMockMode = !1, this.inappBrowserReturn = !1, this.events = [], this.appList = [], this.cacheableShowTemplate = !0, this.initCallbacks = [], this.mainModuleInited = !1, this.restCallbacks = [], this.initTries = 0, this.callbacks = [], n.loadOfferCss(); } return e.prototype.initTp = function () { var e = this; try {
        var n = this.tpPredefinedOptions.predefineValues;
        if (this.tpPredefinedOptions.predefineValues = [], n.forEach((function (n) { "function" == typeof n[1] ? "init" === n[0] ? e.initCallbacks.push(n[1]) : e.restCallbacks.push(n) : "init" === n[1] && "function" == typeof n[2] ? e.initCallbacks.push(n[2]) : e.push(n); })), !this.aid && this.initTries < 10)
            return this.initTries++, void setTimeout((function () { return e.initTp(); }), 50);
        if (!this.aid)
            return;
        for (this.tinypassErrorHandler.initialize(); this.restCallbacks.length;)
            try {
                var t = this.restCallbacks.shift();
                this.push(t);
            }
            catch (e) {
                console.error(e), pn.tinypassErrorHandler.addError(e);
            }
        this._init(), this.externalLibraries.length && this.realizeExternalLibraries(), this.isInitialized = !0, window.___tp = function () { };
    }
    catch (e) {
        pn.tinypassErrorHandler.addError(e, "initTP");
    } }, e.prototype.realizeExternalLibraries = function () { var e = this, n = []; this.externalLibraries.forEach((function (t) { var r = e.requireJsFile(t); n.push(r); })), Promise.all(n).then((function () { if (e.externalLibraries = [], e.externalLibrariesCallbacks)
        for (var n = 0; n < e.externalLibrariesCallbacks.length; ++n)
            Mn.externalLibrariesCallbacks[n](); Mn.externalLibrariesCallbacks = []; })); }, e.prototype.push = function () { for (var e, n, t, r = [], o = 0; o < arguments.length; o++)
        r[o] = arguments[o]; for (e = 0; e < r.length; e++)
        if ("string" == typeof (n = (t = r[e]).shift()) || n instanceof String) {
            if (!this[n])
                return void console.error("Undefined method " + n);
            this[n].apply(this, t);
        }
        else
            n.apply(this, t); }, e.prototype.init = function (e) { this.isInitialized ? (this.mainModuleInited || (this.mainModuleInited = !0, this.initMainModuleAfterInitCbk()), e && e()) : (e && this.tpPredefinedOptions.predefineValues.push(["init", e]), this.initTp()); }, e.prototype._init = function () { if (pn.util && pn.util.hasQueryParamByName && pn.util.hasQueryParamByName("xpdebug") && pn.setDebug(!0), pn.util.setTpccCookies(), pn.util.isSafariOrIOsUiWebView() && !pn.user.isUserValid() && pn.util.getQueryParamByName("userToken")) {
        var e = pn.util.getQueryParamByName("cookieDomain"), n = pn.util.getQueryParamByName("userToken"), t = pn.util.getQueryParamByName("tokenListValue");
        pn.util.setAccessTokenListCookie({ cookie_domain: e, value: t }, n), pn.util.removeQueryParamByName("userToken"), pn.util.removeQueryParamByName("cookieDomain"), pn.util.removeQueryParamByName("tokenListValue");
    } if (this.mainModuleInited || (this.mainModuleInited = !0, this.initMainModuleAfterInitCbk()), !this.aid) {
        var r = new Error("Incorrect aid integration: " + Mn.aid + " url: " + window.location.href);
        this.tinypassErrorHandler.addError(r);
    } pn.logging.setTime("completeInit"); }, e.prototype.initMainModuleAfterInitCbk = function () { for (pn.user.providerInit(), this.appList.indexOf(this.aid) < 0 && (this.appList.push(this.aid), pn.main.init()); this.initCallbacks.length;)
        try {
            this.initCallbacks.shift()();
        }
        catch (e) {
            console.error(e), pn.tinypassErrorHandler.addError(e);
        } if (pn.main.checkToRunWidgetImmediately(), this.events) {
        for (var e = 0; e < this.events.length; e++)
            this.events[e]();
        this.events = [];
    } }, e.prototype.requireJsFile = function (e) { return new Promise((function (n, t) { var r = document.createElement("script"); r.onload = n, r.onerror = n, r.type = "text/javascript", r.charset = "utf-8", r.async = !0, r.src = e, document.getElementsByTagName("head")[0].appendChild(r); })); }, e.prototype.setAid = function (e) { this.aid = e; }, e.prototype.enableSensitiveDataProtection = function (e) { this.isSensitiveDataProtectionEnabled = e; }, e.prototype.reload = function () { location.href = pn.util.removeVoucherCodeFromUrl(location.href); }, e.prototype.removeSharedAccountCodeFromUrl = function () { location.href = pn.util.removeSharedAccountCodeFromUrl(location.href); }, e.prototype.setGAClientId = function (e) { this.gaClientId = e, this.gaService.recreateWithClientId(e); }, e.prototype.getGAClientId = function () { return this.gaClientId; }, e.prototype.enableGACrossDomainLinking = function (e) { var n = this; this.gaCrossDomainLinking = !0; var t = Date.now(), r = function () { var o = window.ga; if (o && "function" == typeof o)
        try {
            o((function (t) { if (void 0 !== t && void 0 === e)
                n.setGAClientId(t.get("clientId"));
            else if (void 0 !== e)
                for (var r = o.getAll(), i = 0; i < r.length; i++) {
                    var a = r[i];
                    if (a.get("trackingId") === e) {
                        n.setGAClientId(a.get("clientId"));
                        break;
                    }
                } }));
        }
        catch (e) { }
    else
        Date.now() - t < 6e4 && setTimeout(r, 500); }; r(); }, e.prototype.setTags = function (e) { this.tags = e instanceof Array ? e.join(",") : e; }, e.prototype.setCookieDomain = function (e) { "." !== e[0] && (e = "." + e), this.cookieDomain = e; }, e.prototype.setCookiePath = function (e) { this.cookiePath = e; }, e.prototype.setDontScrollTopModal = function (e) { this.dontScrollTopModal = e; }, e.prototype.setUseExperience = function (e) { this.useExperience = e; }, e.prototype.setExperimentalIosModal = function (e) { this.experimentalIosModal = e; }, e.prototype.setApplePayMerchantId = function (e) { this.applePayMerchantId = e; }, e.prototype.setContentIsNative = function (e) { this.contentIsNative = e; }, e.prototype.setComposerHost = function (e) { this.composerHost = e; }, e.prototype.setEndpoint = function (e) { this.endpoint = e; }, e.prototype.setAffiliateTokenName = function (e) { this.affiliateTokenName = e; }, e.prototype.setEspEndpoint = function (e) { this.espEndpoint = e; }, e.prototype.setCxCdnUrl = function (e) { this.cxCdnUrl = e; }, e.prototype.setC1XLoadCce = function (e) { this.c1XLoadCce = e; }, e.prototype.setC1XIntegrationVersion = function (e) { this.c1XIntegrationVersion = e; }, e.prototype.setCxenseSiteId = function (e) { this.cxenseSiteId = e; }, e.prototype.setCxenseLibAwaitingTimeout = function (e) { this.cxenseLibAwaitingTimeout = e; }, e.prototype.setCxenseLibAwaitingRetryCount = function (e) { this.cxenseLibAwaitingRetryCount = e; }, e.prototype.setContentId = function (e) { this.contentId = e; }, e.prototype.setTrackPages = function (e) { this.trackPages = e; }, e.prototype.setDebug = function (e) { this.debug = e; }, e.prototype.setUserRef = function (e) { this.userRef = e; }, e.prototype.setUsePianoIdLiteUserProvider = function (e) { this.usePianoIdLiteUserProvider = e; }, e.prototype.setExternalJWT = function (e) { this.externalJWT = e; }, e.prototype.getExternalJWT = function () { return this.externalJWT; }, e.prototype.setUseTinypassAccounts = function (e) { this.useTinypassAccounts = e; }, e.prototype.setUseCondeUserProvider = function (e) { this.useCondeUserProvider = e; }, e.prototype.setUseGigyaUserProvider = function (e) { this.useGigyaUserProvider = e; }, e.prototype.setUsePianoIdUserProvider = function (e) { this.usePianoIdUserProvider = e; }, e.prototype.setPianoIdUrl = function (e) { this.pianoIdUrl = e; }, e.prototype.setItemId = function (e) { this.itemId = e; }, e.prototype.setUseAidSpecifiedCookies = function (e) { this.useAidSpecifiedCookies = e; }, e.prototype.setSandbox = function (e) { this.sandbox = e; }, e.prototype.setContentCreatedSelector = function (e) { this.contentCreatedSelector = e; }, e.prototype.setContentCreated = function (e) { this.contentCreated = e; }, e.prototype.setContentAuthor = function (e) { this.contentAuthor = e; }, e.prototype.setContentSection = function (e) { this.contentSection = e; }, e.prototype.setZone = function (e) { this.zone = e || ""; }, e.prototype.isNonProdEndpoint = function () { return "sandbox" === this.endpoint || /^https?:\/\/(.*sandbox.*|\d+\.dev)\.(tinypass\.com|piano\.io)/i.test(this.endpoint); }, e.prototype.setZIndexes = function (e) { this.zIndexes = e; }, e.prototype.setCustomPreCheck = function (e) { this.customPreChecks.push(e); }, e.prototype.setCustomParam = function (e, n, t, r) { var o = ["content", "user", "request"]; if (t || (t = "content"), t = t.toLowerCase(), o.indexOf(t) < 0)
        throw new Error("Undefined scope " + t + "\nAvailable scopes: " + o.join(", ")); void 0 === this.customParams[t] && (this.customParams[t] = {}), (void 0 === this.customParams[t][e] || r) && (this.customParams[t][e] = []); for (var i = [].concat(n), a = 0; a < i.length; a++) {
        if ("string" != typeof i[a])
            throw new Error("setCustomParam accept only string values or array of strings");
        this.customParams[t][e].push(i[a]);
    } }, e.prototype.resetCustomParam = function (e) { e || (e = "content"), delete this.customParams[e]; }, e.prototype.addExternalLibrary = function (e, n) { if ("string" == typeof e)
        this.externalLibraries.push(e);
    else
        for (var t = 0; t < e.length; ++t)
            this.externalLibraries.push(e[t]); n && this.externalLibrariesCallbacks.push(n), this.isInitialized && this.realizeExternalLibraries(); }, e.prototype.setCustomVariable = function (e, n) { this.customVariables[e] = n; }, e.prototype.saveCustomVariablesToLocalStorage = function (e) { if (this.customVariables && "localStorage" in window && null !== window.localStorage) {
        var n = "__tp-customVariables";
        window.localStorage.setItem(n, JSON.stringify(this.customVariables)), e && window.localStorage.setItem(n + "-expiration", Math.floor((new Date).getTime() / 1e3) + e + "");
    } }, e.prototype.restoreCustomVaribalesFromLocalstorage = function () { if ("localStorage" in window && null !== window.localStorage) {
        var e = Mn.util.__protected__.getLocalStorageItem("customVariables");
        if (Mn.util.__protected__.removeLocalStorageItem("customVariables"), e)
            for (var n in e)
                this.customVariables[n] = e[n];
    } }, e.prototype.handler = function (e, n) { var t = this.registerPrefixedEvents; return function () { for (var r, o = [pn.offer, pn.template, pn.meter, pn.experience, pn.myaccount, pn.pianoId, pn.tinypassLogin, pn.swg, pn.user, pn.credit], i = 0; i < o.length; i++) {
        var a = o[i];
        if (a) {
            var s = a.registerCallback(e, n);
            void 0 !== s && (r = s), void 0 !== (s = t(a, e, n)) && (r = s);
        }
    } return r; }; }, e.prototype.registerPrefixedEvents = function (e, n, t) { for (var r, o, i, a = [{ module: "offer", prefix: "checkout" }, { module: "pianoId", prefix: "pianoId" }], s = 0; s < a.length; s++) {
        var c = a[s];
        e.name === c.module && n.substring(0, c.prefix.length) === c.prefix && (r = n.substring(c.prefix.length, c.prefix.length + 1).toLowerCase() + n.substring(c.prefix.length + 1, n.length), void 0 !== (o = e.registerCallback(r, t)) && (i = o));
    } return i; }, e.prototype.addHandler = function (e, n) { var t = this.handler(e, n); this.isInitialized ? t() : this.events.push(t); }, e.prototype.setTrackPageview = function (e) { this.trackPageView = e; }, e.prototype.setLocale = function (e) { var n = this; this.locale = e, this.utilService.__protected__.setCookie("LANG", this.locale), this.isInitialized ? this.changeLocale(e) : this.initCallbacks.push((function () { n.changeLocale(e); })); }, e.prototype.setPageURL = function (e) { this.customPageUrl = e; }, e.prototype.setAdblockerCookieName = function (e) { this.adblockerCookieName = e; }, e.prototype.setMaxCookieExpirationInDays = function (e) { var n = "string" == typeof e ? parseInt(e, 10) : e; if (!(isFinite(n) && n > 0))
        throw new Error("maxCookieExpirationInDays must be a positive number"); this.maxCookieExpirationInDays = n; }, e.prototype.getMaxCookieExpirationInDays = function () { return this.maxCookieExpirationInDays; }, e.prototype.setFbPixelId = function (e) { this.fbPixelId = e; }, e.prototype.getFbPixelId = function () { return this.fbPixelId; }, e.prototype.setRedirectToFbTimeout = function (e) { this.redirectToFbTimeout = e; }, e.prototype.enableDoubleOptInCheckOnAccessCheck = function () { this.isDoubleOptInCheckOnAccessCheckEnabled = !0; }, e.prototype.setCloudflareWorkerUrl = function (e) { this.cloudflareWorkerUrl = e; }, e.prototype.getEndpoint = function (e, n) { return e.lastIndexOf("/") === e.length - 1 && (e = e.substr(0, e.length - 1)), e.match(/\/v3$/) && (e = e.substr(0, e.lastIndexOf("/v3"))), e.match(/\/api$/) && (e = e.substr(0, e.lastIndexOf("/api"))), e.match(/^(http[s]?:)?\/\//) || (e = "//" + e), void 0 !== n && n && !e.match(/^http[s]?:/) && (e = "https:" + e), e; }, e.prototype._getEndpointRoot = function (e) { var n = "https://buy.tinypass.com"; return !0 === this.sandbox && (this.endpoint = "sandbox"), this.endpoint && ("sandbox" === this.endpoint ? n = "https://sandbox.tinypass.com" : "prod" !== this.endpoint && "production" !== this.endpoint && (n = this.endpoint)), this.getEndpoint(n, e); }, e.prototype._getApiEndpoint = function () { return this._getEndpointRoot() + "/api/v3"; }, e.prototype._getTrackingEndpoint = function (e) { void 0 === e && (e = ""); var n = e || this.endpoint; return !0 === this.sandbox ? n = "https://sandbox.tinypass.com" : (void 0 === this.endpoint || null === this.endpoint || "" === this.endpoint || "prod" === this.endpoint || "production" === this.endpoint || this.endpoint.match(/(buy|api|api-v3)\.tinypass\.com/)) && (n = e || "https://api-v3.tinypass.com"), this.getEndpoint(n, !0); }, e.prototype._getExperienceEndpoint = function (e) { var n = "https://c2.piano.io"; return this.composerHost ? n = this.composerHost : (!0 === this.sandbox && (this.endpoint = "sandbox"), this.endpoint && ("sandbox" === this.endpoint ? n = "https://c2-sandbox.piano.io" : "prod" !== this.endpoint && "production" !== this.endpoint && (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = this.endpoint).replace("//buy.tinypass.com", "//c2.piano.io")).replace("//api.tinypass.com", "//c2.piano.io")).replace("//buy-au.piano.io", "//c2-au.piano.io")).replace("//api-au.piano.io", "//c2-au.piano.io")).replace("//buy-ap.piano.io", "//c2-ap.piano.io")).replace("//api-ap.piano.io", "//c2-ap.piano.io")).replace("//buy-eu.piano.io", "//c2-eu.piano.io")).replace("//api-eu.piano.io", "//c2-eu.piano.io")).replace("//sandbox.tinypass.com", "//c2-sandbox.piano.io")).replace("//sandbox.piano.io", "//c2-sandbox.piano.io")).replace("//experience-au.piano.io", "//c2-au.piano.io")).replace("//experience-eu.piano.io", "//c2-eu.piano.io")).replace("//experience-ap.piano.io", "//c2-ap.piano.io")).replace("//experience.tinypass.com", "//c2.piano.io")).replace("//buy.piano.io", "//c2.piano.io")).replace("//api.piano.io", "//c2.piano.io")).replace("//experience.piano.io", "//c2.piano.io")))), this.getEndpoint(n, e); }, e.prototype._isSandbox = function () { return this.sandbox || "sandbox" === this.endpoint || !!this.endpoint && -1 !== this.endpoint.indexOf("//sandbox.tinypass.com"); }, e.prototype.changeLocale = function (e) { pn.pianoId.isConfigured() && pn.pianoId.updateLang(e), pn.postmessage.broadcast("langChanged", { lang: e }); }, e.prototype.pageTrack = function (e, n) { pn.main.pageTrack(e, n); }, e.prototype.trackPage = function (e, n) { pn.main.pageTrack(e, n); }, e.prototype.trackPageUnload = function () { pn.main.trackPageUnload(); }, e.prototype.trackAds = function (e) { pn.main.trackAds(e); }, e.prototype.trackAd = function (e, n, t) { pn.main.trackAd(e, n, t); }, e.prototype.onLoad = function (e) { this.callbacks.push(e); }, e.prototype.getEndpointRoot = function (e) { return this._getEndpointRoot(e); }, e.prototype.getExperienceEndpoint = function (e) { return this._getExperienceEndpoint(e); }, e.prototype.getApiEndpoint = function () { return this._getApiEndpoint(); }, e.prototype.getTrackingEndpoint = function (e) { return void 0 === e && (e = ""), this._getTrackingEndpoint(e); }, e.prototype.isSandbox = function () { return this._isSandbox(); }, e.prototype.setCacheableShowTemplate = function (e) { this.cacheableShowTemplate = e; }, e.prototype.getCacheableShowTemplate = function () { return this.cacheableShowTemplate; }, e = function (e, n, t, r) { var o, i = arguments.length, a = i < 3 ? n : null === r ? r = Object.getOwnPropertyDescriptor(n, t) : r; if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        a = Reflect.decorate(e, n, t, r);
    else
        for (var s = e.length - 1; s >= 0; s--)
            (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(n, t, a) : o(n, t)) || a); return i > 3 && a && Object.defineProperty(n, t, a), a; }([pn.singleton(), be(0, pn.inject("tpPredefinedOptions")), be(1, pn.inject("css")), be(2, pn.inject("tinypassErrorHandler")), be(3, pn.inject("gaService")), be(4, pn.inject("util")), ke("design:paramtypes", [Object, Object, Object, Object, Object])], e), e; }();
    pn.container.registerSingleton("tinypass", Tn);
    var An = pn.container.resolve("tinypass");
    [{ n: "polyfill", hM: !1 }, { n: "predefine", hM: !1 }, { n: "predefineTinypass", hM: !1 }, { n: "checkTinypass", hM: !1 }, { n: "css", hM: !0 }, { n: "ajax", hM: !0 }, { n: "jqUtils", hM: !0 }, { n: "cookie", hM: !0 }, { n: "localStorage", hM: !0 }, { n: "versionService", hM: !0 }, { n: "itp", hM: !0 }, { n: "util", hM: !0 }, { n: "api", hM: !0 }, { n: "postmessage", hM: !0 }, { n: "eventUtils", hM: !0 }, { n: "janrain", hM: !0 }, { n: "sha1", hM: !0 }, { n: "containerUtils", hM: !0 }, { n: "tinypassLogin", hM: !0 }, { n: "tinypassAccounts", hM: !0 }, { n: "condeUserProvider", hM: !0 }, { n: "gigya", hM: !0 }, { n: "jwtDecode", hM: !0 }, { n: "log", hM: !0 }, { n: "logging", hM: !0 }, { n: "observer", hM: !0 }, { n: "gaService", hM: !0 }, { n: "pianoIdLite", hM: !0 }, { n: "pianoId", hM: !0 }, { n: "user", hM: !0 }, { n: "viewportExit", hM: !0 }, { n: "template", hM: !0 }, { n: "offer", hM: !0 }, { n: "myaccount", hM: !0 }, { n: "meter", hM: !0 }, { n: "fingerprint", hM: !0 }, { n: "scrollDepth", hM: !0 }, { n: "idle", hM: !0 }, { n: "interaction", hM: !0 }, { n: "recWidgetService", hM: !0 }, { n: "piano", hM: !0 }, { n: "pianoEsp", hM: !0 }, { n: "swg", hM: !0 }, { n: "fbpixel", hM: !0 }, { n: "fbsubscriptions", hM: !0 }, { n: "cxense", hM: !0 }, { n: "experience", hM: !0 }, { n: "ifvisible", hM: !0 }, { n: "activetimer", hM: !0 }, { n: "doubleClickForPublisher", hM: !0 }, { n: "applePay", hM: !0 }, { n: "goCardlessDropin", hM: !0 }, { n: "applePayIntegrationService", hM: !0 }, { n: "datatransApplePayIntegrationService", hM: !0 }, { n: "stripeApplePayIntegrationService", hM: !0 }, { n: "obi3DSChallenge", hM: !0 }, { n: "amp", hM: !0 }, { n: "performanceMetrics", hM: !0 }, { n: "doubleOptIn", hM: !0 }, { n: "newscycle", hM: !0 }, { n: "captchaV3", hM: !0 }, { n: "main", hM: !0 }, { n: "tinypassErrorHandler", hM: !0 }, { n: "tinypass", hM: !0 }, { n: "postProcessing", hM: !1 }].forEach((function (e) { e.hM && !pn.container.isRegistered(e.n) && pn.container.resolve(e.n); })), Object.assign(pn, An), Object.setPrototypeOf(pn, Tn.prototype);
    var Mn = window.tp = pn;
    pn.initTp(), console.log("Piano SDK 2.0 loaded.");
    e.cxense = ln, e.experience = un, e.jqUtils = de, e.log = Oe, e.main = Pn, e.offer = Ge, e.pianoEsp = on, e.pianoId = qe, e.postProcessing = "postProcessing", e.tinypassErrorHandler = xn, e.user = He, e.util = Ce, Object.defineProperty(e, "__esModule", { value: !0 });
}({});
//# sourceMappingURL=tinypass.js.map