"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.before = exports.afterRender = exports.after = void 0;
const after = () => {
    perfLog('after');
};
exports.after = after;
const afterRender = () => {
    perfLog('afterRender');
};
exports.afterRender = afterRender;
const before = () => {
    perfLog('before');
};
exports.before = before;
const perfLog = (title) => {
    const log = localStorage.getItem('perfLog');
    const n = localStorage.getItem('runCount');
    let data = `${n}:${title}:${window.performance.now()}/:/`;
    localStorage.setItem('perfLog', log + data);
};
//# sourceMappingURL=logfn.js.map