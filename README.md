# AdService

## Installation

We are leveraging npm's install with a github url.

Espresso Implementation add 
"ad-service": "git+https://github.com/Americastestkitchen/AdService.git",
and yarn

```shell
npm install git+https://github.com/Americastestkitchen/AdService.git
```

To reference AdServer in your project you have to use a absolute path

```javascript
import AdServer from "/node_modules/ad-service/dist/ad-server.js";
```
