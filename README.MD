## A Simple middleware for errors handling in your express app.

### Installation:

```
npm install errors-middleware-handler
```

or

```
yarn add errors-middleware-handler
```

### Usage:

```javascript
const { handler } = require("errors-middleware-handler");

router.get(
  "/users",
  handler(async (req, res) => {
    return res.send("Tata, world!");
  })
);
```

#### Register errors middleware:

```javascript
const { errors } = require("errors-middleware-handler");
// Routes
app.use("/", home);
app.use("/api/*", *);
app.use("/api/**", **);
app.use("/api/****", ****);
....

// Error handling middleware
app.use(errors);
```

## Notes:

> Put the errors middleware after register all router.
>

## Links

Inspired by [codewithmosh](https://codewithmosh.com/).
