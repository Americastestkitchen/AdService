import AdServer from "../../src/ad-server";
export const after = () => {
    perfLog('after');
};
export const afterRender = () => {
    perfLog('afterRender');
};
export const before = () => {
    perfLog('before');
};
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
const piano = new AdServer({
    afterAdInit: [after, lpa],
    afterAdRender: [afterRender, lpa],
    beforeAdInit: [before, lpa],
    matchers: multiSite,
    thirdPartyCallbacks: [mixpanelTrackAccepted, mixpanelTrackPresented],
    //tags: [["sports", "breaking-news", "premium", "Alex is cool"]],
    adServicer: "piano",
});
piano.dispatchAd();
console.log(piano);
//# sourceMappingURL=speed-test.js.map