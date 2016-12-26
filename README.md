# webpack2-bug-no-exports
Webpack 2 Bug - Exporting * from a file with no exports

### Steps to reproduce
- `npm install`
- `$(npm bin)/webpack && live-server dist`

Now look at the console and see that the test failed (simple `console.log`)

---

The test can be fixed, by just uncommenting the line in [this file](https://github.com/DevVersion/webpack2-bug-no-exports/blob/master/%40material/core/no-exports.js#L2)
> This way the file will have an export and Webpack is able to continue proceeding.

### What's happening?

Having a file that exports **everything** from another file

```js
export * from './my-exports';
```

But the file `my-exports.js` does not export anything will cause that Webpack is not able to proceed parsing the other files.

**Note**: You can see the issue by looking at the folder `@material`.
