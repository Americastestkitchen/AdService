"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.before = exports.afterRender = exports.after = void 0;
const index_1 = require("../../index");
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
const rc = localStorage.getItem("runCount");
if (!rc) {
    localStorage.setItem('runCount', String(1));
    localStorage.setItem("perfLog", "");
}
else {
    let inc = Number(rc);
    localStorage.setItem('runCount', String(inc + 1));
}
function logPerformance(description) {
    console.log(`%c${description}`, "color: fuchsia", window.performance.now());
}
const lpa = () => logPerformance("after");
const multiSite = [
    ["userSegment", "anonymous"]
];
const former = [["userSegment", "former"]];
const mixpanelTrackAccepted = {
    status: "Accepted",
    service: "mixpanel",
    action: "MEMBERSHIP_BLOCK",
};
const mixpanelTrackPresented = {
    status: "Presented",
    service: "mixpanel",
    action: "MEMBERSHIP_BLOCK",
};
const piano = new index_1.default({
    afterAdInit: [exports.after, lpa],
    afterAdRender: [exports.afterRender, lpa],
    beforeAdInit: [exports.before, lpa],
    matchers: multiSite,
    thirdPartyCallbacks: [mixpanelTrackAccepted, mixpanelTrackPresented],
    //tags: [["sports", "breaking-news", "premium", "Alex is cool"]],
    adServicer: "piano",
});
piano.dispatchAd();
console.log(piano);
//# sourceMappingURL=speed-test.js.map