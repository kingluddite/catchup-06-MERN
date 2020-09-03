# React
## Create React App
`$ npx create-react-app client`

* Also install it globally

## Run React
```
$ cd client && npm start
```

* http://localhost:3000 should open automatically
* You see the default react start page

## Swap package.json with this new stuff
* Make sure you are inside react (`client` folder)
    - This is the `package.json` inside client
    - **note** You also have `package.json` inside the root of your app (this is for your backend)
`package.json`

```
{
  "name": "notes",
  "version": "0.1.0",
  "private": true,
  "proxy": "http://localhost:3001/",
  "dependencies": {
    "axios": "^0.18.0",
    "react": "^16.6.1",
    "react-dom": "^16.6.1",
    "react-scripts": "2.1.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ]
}
```

### What we just did
* We just added a proxy (see reference link)
* We removed some not needed dependencies for this project
* We added axios
* We changed the name

## Steps
* Stop the react client
* Then you need to run `$ npm i` to install the new dependencies
    - **note** Make sure you run this command from inside the `client` folder
    - This install could take a bit of time (ugh!)
* Start again `$ npm start` (make sure react is working)

## Resources
* [create-react-app docs](https://reactjs.org/docs/create-a-new-react-app.html)
* [React docs](https://reactjs.org/)
* [Create React App proxy](https://create-react-app.dev/docs/proxying-api-requests-in-development/)
