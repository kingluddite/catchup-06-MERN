# Server.js

`$ npm install`

## .gitignore
* Make sure we ignore that huge node_modules folder!

```
$ touch .gitignore
$ echo "node_modules" >> .gitignore
```

## Run it
`$ node server.js`

## Error!
* We get an error because we are pointing to something that doesn't exist
* In server.js comment out that line

## Run again
`$ node server.js`

* Server is running
* But http://localhost:3001 gives us Cannot GET /
    - Because we have no server routes yet!
* If you are getting Mongo errors comment that out too

## Stopping server
`ctrl` + `c` (mac)

* You can use nodemon and that saves time from having to restart the server every time you make a server side change
