This application is pretty close representation of a large, multi app, PNPM workspace that I work in.

We have many Next.js applications all using Relay, and we've separated our shared components into their own package, `./packages/ui`. We then utilize `pnpm` to link everything up, and use these components in our `./apps`.

---

This structure works fine with `babel-plugin-relay` but seems to break with the SWC Relay plugin:

With Babel:
![preview](https://github.com/hanford/relay-swc-monorepo/blob/main/babel.png)

With SWC:
![preview](https://github.com/hanford/relay-swc-monorepo/blob/main/swc.png)

---

First, running the application without modification should work:

```
pnpm install
pnpm dev
```

To reproduce the bug, use a locally built version of SWC from [this PR](https://github.com/vercel/next.js/pull/33240#issuecomment-1021244329)

Link `@next/swc` in `apps/frontend/*` (yarn link works, didn't try PNPM's equivelant)

Rename `./apps/frontend/babel.config.js` -> `./apps/frontend/babel.config.js`

Finally run `pnpm dev`

And you should see the bug 🙇‍♂️
