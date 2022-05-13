# AdService

To add AdService module to you application, in the root of your app enter these commands in your terminal:


<!-- todo: change out the url that we are getting the files from, if we host them on s3 -->

```shell
mkdir atk_modules && cd atk_modules
mkdir .bin && cd .bin

cat > adserve.sh << END
#!/bin/bash
mkdir -p ad-service && cd ad-service
curl -o ad-server.js http://127.0.0.1:5500/dist/ad-server.js -o piano-adapter.js  http://127.0.0.1:5500/dist/piano-adapter.js
END
```


Then in your package.json, append these script commands:



```json
 "scripts": {
    ...
    "predev": "sh ./atk_modules/bin/adserve.sh",
    "prebuild": "sh ./atk_modules/bin/adserve.sh"
  },
```
