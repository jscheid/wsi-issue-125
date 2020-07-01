# SRI and compression

Test case for https://github.com/waysact/webpack-subresource-integrity/issues/125

Needs a recent Node version for Brotli support (tested with v12.18.2)

## Build

```
yarn build
```

## Test Gzip

```
yarn server
```

Open one of the links displayed, open Network tab in your browser and ensure gzip compression is used.

## Test Brotli

Follow instructions to generate self-signed SSL certificate:
https://github.com/http-party/http-server#tlsssl

```
yarn server -S -C cert.pem
```

Open one of the links displayed, open Network tab in your browser and ensure br compression is used.

## Test without compression

```
rm ./dist/*.js.*
yarn server
```

## Test SRI

Edit `dist/index.html` and corrupt both hashes, reload and ensure there is an
error displayed in the console regardless of which compression is used.
