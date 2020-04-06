# Minimal React Setup + express

Minimal React Setup to run suomifi-ui-components in strict CSP with the help of nonce, served by express.

## ⚡️ Quick Start

- To install required dependencies, build and serve it: `yarn start:fresh`
- Open your browser at `localhost:3123`.

## ✨ Features

- [ejs](https://github.com/mde/ejs) template to pass the nonce **from server** to client side
- Strict Content-Security-Policy
- [suomifi-ui-components](https://github.com/vrk-kpa/suomifi-ui-components)
- [uuid](https://github.com/uuidjs/uuid), for generating nonce
- [helmet-csp](https://github.com/helmetjs/csp), adding nonce to Response Headers

##  ❗️Disclaimer

This is not the prettiest way of doing this, but this is just a **P**roof **O**f **C**oncept.

## 🚔 Content-Security-Policy

[Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) is set to be quite finicky and not allowing too much.

Here are the Content Security Policy from **Response Headers**:

```
Content-Security-Policy: default-src 'none'; base-uri 'self'; object-src 'none'; script-src 'self' 'nonce-xxx'; style-src 'self' 'nonce-xxx'; font-src 'self' data:; connect-src 'self'; img-src 'self'
```

This is done with helmet-csp.

You can read more about the CSP from their docs: https://helmetjs.github.io/docs/csp/

### 🚪 nonce

In the *Content-Security-Policy* above, the _nonce-xxx_ has the **xxx** replaced with the generated value by the server.

###  🧱ejs

`<?=nonce?>` value in the meta-tag is replaced by the template engine, ejs, on the express's side.

###  💄styled-components

As styled-components needs the *nonce* for it's style it does need the `__webpack_nonce__`to be set. This is currently done in **create-nonce.js**. 

As you can see, the nonce is read from the meta-tag, named **nonce**. 

## 📄 Licensing

MIT [LICENSE](/LICENSE)
