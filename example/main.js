import { AdServer } from '../dist/index';

console.log(AdServer, 'Adserver')
const mixpanelPresented = {
    service: 'mixpanel',
    action: 'Membership Block',
    status: 'Presented',
};
const mixpanelAccepted = {
    service: 'mixpanel',
    action: 'Membership Block',
    status: 'Accepted',
};

const anon = [["userSegment", 'demon']];

const piano = new AdServer({
    adServicer: 'piano',
    matchers: anon,
    thirdPartyCallbacks: [
        mixpanelPresented,
        mixpanelAccepted,
    ],
    tags: [["testing"]],
});

console.log(piano, 'piano');
console.log(piano.dispatchAd(), 'piano');

piano.dispatchAd();