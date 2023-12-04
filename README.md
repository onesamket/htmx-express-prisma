## htmx todo application using express server

### about htmx

- htmx gives you access to AJAX, CSS Transitions, WebSockets and Server Sent Events directly in HTML, using attributes, so you can build modern user interfaces with the simplicity and power of hypertext
- htmx is small (~14k min.gz’d), dependency-free, extendable, IE11 compatible & has reduced code base sizes by 67% when compared with react.

## motivation

- Why should only <a> and <form>beable to make HTTP requests?
- Why should only click & submit events trigger them?
- Why should only GET & POST methods be available?
- Why should you only be able to replace the entire screen?

## instruction to use this repo

- clone repo

```sh
git clone onesamket/htmx
```

- navigate to your folder

```sh
cd example
```

- Install packages and seed prisma

```sh
npm i && npx prisma migrate dev --name initial
```

- Run server and tailwind compiler

```sh
npm run dev && npm run css
```

- Goto clients folder
  open index.html in chrome or whatever browser

- create new todo and see your app is working or not.

## explore more about htmx

- [read htmx documentation](https://htmx.org/)

## you can find me on

- [Twitter](https://x.com/onesamket)
- [LinkedIn](https://linkedin.com/in/onesamket)
