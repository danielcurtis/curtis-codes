---
title: React Explained in 10 Steps
date: '2020-01-01T22:12:03.284Z'
tags: ["react", "javascript"]
featuredImage: ./hero.jpg
---

React is now my choice for frontend development, but I found it hard to learn.
This is my attempt to demystify the library in ten steps.

## 1. What is React?
Websites display data. Users read and interact with the website, changing what
data is displayed. Programming this change in data can be done many different
ways. React is one of the simplest ways because it automatically handles updates
for you:

```js react-live
function Component() {
  const [data, setData] = React.useState("This is some boring data. ");
  const updateData = () => {
    setData(data + "Some *COOL* data added dynamically. ");
  }

  return (
    <div className="bg">
      <strong>{data}</strong>
      <button onClick={updateData}>Add Data</button>
    </div>
  );
}

render(<Component />);
```

## 2. Thinking in React
Component-based libraries such as Angular or React redefine web page
architecture. Traditionally, websites were "pages" of data. In React, web pages
are collections of components. Each component is a function.

Instead of a HTML document of `<header>`, `<main>`, and `<footer>` elements,
React would have `Header()`, `Main()`, and `Footer()` functions. And these
functions would be split down even further into `Icon()`, `Navigation()`, and
`Links()`.

[Blocks-UI](https://blocks-ui.com/demo) illustrates this idea with a drag and
drop website builder.
[Thinking in React](https://reactjs.org/docs/thinking-in-react.html) also covers
this idea extensively.

![Stripes website broken down in components](./website.png)

## 3. Functions, Classes, and Components
Functions, classes, and components are synonymous in React. Every component in
React should be a class or function. _Classes in JavaScript are special
functions._

Because React pages are made out of components, the components must contain HTML.
Every React function returns HTML code called "JSX."

In plain JavaScript and HTML, the languages are separated. In React, components
encapsulate their JavaScript, HTML, and data.

```js react-live
function App() {
  return <h3 className="bg">Don't Judge a Book by its Title!!!</h3>
}

render(<App />);
```

```js
// React Title component controls the data, JavaScript, and HTML
function Title() {
  let title = "Don't Judge a Book by its Title"; // data
  title += "!!!"; // JavaScript string manipulation

  return <h1>{title}</h1>; // HTML
}
```

```html
<!-- HTML and JS are separated, data is mixed throughout -->
<body>
  <h1 id="title">Don't Judge a Book by its Title</h1> <!-- Data + HTML -->

  <script>
    function combineStrings() { // JavaScript string manipulation
      let title = document.getElementById("p").innerHTML;
      return title += "!!!"; // More data
    }
  </script>
</body>
```

## 4. The Power of Components
Components are reusable. Our title component can be used across our entire
website. Instead of creating HTML `<h1>titles</h1>` on every page, React only
needs one `Title()` component.

Components can be called within other "parent" components. For example, if
you have title and paragraph components, you can create a parent component to
hold both of them. Components are called with the following syntax: `<Title />`.

Trees illustrate parent and child components well.

* Body Component (Parent)
  * Title Component (Child)
  * Paragraph Component (Child)

```js react-live
function App() {
  return (
    <div className="bg">
      <h3>My Title</h3>
      <p>Wow, much paragraph. Very placeholder.</p>
    </div>
  );
}

render(<App />);
```

```js
import React from "react";

function Title() { // child component
  return <h1>My Title</h1>;
}

function Paragraph() { // child component
  return <p>Wow, much paragraph. Very placeholder</p>;
}

function Body() { // parent component
  return (
    <div>
      <Title /> // how components are called
      <Paragraph />
    </div> // because Body is one component, Title and Paragraph must be wrapped in a div
  );
}
```

## 5. Component Properties
Reusing one component means reusing the same data. Therefore, every
component can have unique properties passed in to the first parameter of the
component function. Properties are passed down from a parent component as an
object called `props`.

Props allow us to dynamically change the data of every component, making the
component highly reusable. Props can be any data type, even other functions.

```js react-live
function App() {
  let date = new Date();

  return (
    <div className="bg">
      <h3>Chapters</h3>
      <h4>Campfire Songs {date.getFullYear()}</h4>
      <h4>Ghost Stories {date.getFullYear()}</h4>
    </div>
  );
}

render(<App />);
```

```js
import React from "react";

function Title(props) {
  return <h4>{`${props.title} ${props.date}`}</h4>;
}

function IndexTitles() {
  let date = new Date();

  return (
    <div>
      <h3>Chapters:</h3>
      <Title title="Campfire Songs" date={date.getFullYear()} />
      <Title title="Ghost Stories" date={date.getFullYear()} />
    </div>
  );
}
```

## 6. Data Manipulation with Hooks
React shines when you need to display data dependent on user interactions. React
uses the idea of "state" to make it easy. State is a web page timeline that
tracks what "state" the web page is in. Every component can create state by
using a special React function called `useState`. The `useState` function is
called a "Hook" in React.

Here's our web page timeline:

1. User accesses webpage: state == 0 (nothing's happened)
2. User clicks button: state == 1 (button clicked once)
3. User clicks button: state == 2 (button clicked twice)

```js react-live
function Component() {
  const [data, setData] = React.useState(0);

  const updateData = () => {
    setData(data + 1);
  }

  return (
    <div className="bg">
      {data}
      <button onClick={updateData}>Update State</button>
    </div>
  );
}

render(<Component />);
```

This timeline is straightforward to code in React. Hooks are declared using the
following syntax: `const [name, setName] = useState("Initial Value");`

```js
import React, { useState } from "react";

function Counter() {
  // state is a variable that could be named anything
  // setState is a function that sets the state variable
  const [state, setState] = useState(0); // useState() takes in the initial state as a parameter
  const updateState = () => setState(state + 1); // setState can be called anywhere to set state

  return (
    <div>
      <p>{state}</p>
      <button onClick={updateState}>Update State</button>
    </div>
  );
}
```


## 7. Conditionally Rendering Components
We can conditionally render components just like we can conditionally render
information inside of components.

For example, Facebook renders a landing page component if you're not logged in.
On the contrary, Facebook renders a feed component if you are logged in. Being
logged in is the "state" that the web page is in.

Conditionally rendering components and data depending on a web pages state is
what makes React magical.

```js
import React, { useState } from "react";

function LandingPage() {
  return <div>Wow, a landing page!</div>;
}

function Feed() {
  return <div>Cool, a news feed!</div>;
}

function Homepage() {
  const [loggedIn, setLoggedIn] = useState(true);

  if (loggedIn)
    return <Feed />;
  else
    return <LandingPage />;
}
```

## 8. Asynchronous Hooks
React has two hooks for controlling state. `useState()` is the most common.
`useEffect()` is powerful for fetching data from an outside source like an API.
`useEffect()` is a callback function that can asynchronously update state.

For example, let's say you have a component that renders "Hello, username" where
username is data stored in an external database.

Our functions timeline:

1. Our function doesn't know the username, state is empty
2. Our function asks for the username from a database, state is still empty
3. Our function continues instead of waiting on a response
4. Our function returns the JSX, which looks like Hello, {} because state is empty
5. Our function hears back from the database, and calls the callback.
6. State is set to the username, in this case "cooluser12"
7. Our function returns the JSX with the new state

```js react-live
function App() {
  return <h3 className="bg">Hello, cooluser12</h3>
}

render(<App />);
```

```js
import React, { useState, useEffect } from "react";

function WelcomeMessage(props) {
  const [username, setUsername] = useState({}); // initial state is an empty object

  useEffect(() => {
    fetch("https://MyDatabase.com/" + props.key) // fetch username based on API key passed in via prop
      .then(response => response.json())
      .then(result => setUsername(result));
  }, [props.key]); // useEffect dependencies, i.e. the API key

  return <h1>`Hello, ${username}`</h1>;
}

```

If you don't completely understand, don't worry! Asynchronous programming is a
tough concept. It'll become clear with practice. The important takeaway is that
useEffect() runs every time our component runs.

## 9. Styling Components
React is a UI library. Of course, styling is a big deal. React allows inline
styling or CSS classes, just like HTML elements. Inline styling uses object
notation, and classes use external CSS stylesheets.

It's best practice to avoid global styles and make styles specific to
components. Just like it's best practice to avoid global variables and make
variables specific to functions.

Below the App class sets the font color to white. The inline styles are visible.

```js react-live
function App() {
  const styleObject = {
    backgroundColor: "green",
    color: "white"
  };

  return (
    <div className="App bg" style={styleObject}>
      <p style={{ fontFamily: "sans-serif" }}>Hello, world!</p>
    </div>
  );
}

render(<App />);
```

```js
function App() {
  const styleObject = {
    backgroundColor: "green"
  };

  return (
    <div className="App" style={styleObject}> // inline styles are more specific
      <p style={{ fontFamily: "sans-serif" }}>Hello, world!</p>
    </div>
  );
}

```

There are also many styling modules I don't cover, such as [styled components](https://styled-components.com/docs/basics).

## 10. Putting it all together
Web pages are a combination of individual components instead of pages of HTML.
These components come together as a tree of components. You can make the tree
unique by feeding it data through props or fetching data with useEffect(). Now
you have an oak tree, spruce tree, and maple tree from one single tree component.

Show the trees to the user. Let the user decide the season, which also impacts
the "state" of the trees.

See if you can duplicate the example below with only three functions: tree,
leaf, and branch!


```js react-live
function Leaf(props) {
  let color;

  if (props.szn === "winter" && props.type != "spruce") {
    color = "transparent"
  }
  else {
    if (props.type === "spruce")
      color = "green";
    else if (props.type === "oak")
      color = "yellow";
    else if (props.type === "maple")
      color = "red";
  }

  return <div style={{ background: color, borderRadius: "100%", width: "20px", height: "20px" }} />;
}

function Branch(props) {
  return (
    <div style={{ width: "60px", display: "flex", background: "brown"}}>
      <Leaf szn={props.szn} type={props.type} />
      <Leaf szn={props.szn} type={props.type} />
      <Leaf szn={props.szn} type={props.type} />
    </div>
  );
}

function Tree(props) {  
  return (
    <div style={{ display: "flex" }}>
      <div>
        <Branch szn={props.szn} type={props.type}/>
        <Branch szn={props.szn} type={props.type}/>
        <Branch szn={props.szn} type={props.type}/>
        <Branch szn={props.szn} type={props.type}/>
      </div>
      <div style={{ width: "20px", height: "120px", background: "brown" }} />
      <div>
        <Branch szn={props.szn} type={props.type}/>
        <Branch szn={props.szn} type={props.type}/>
        <Branch szn={props.szn} type={props.type}/>
        <Branch szn={props.szn} type={props.type}/>
      </div>
    </div>
  );
}

function App() {
  const [season, setSeason] = React.useState("fall");
  const updateSeason = (szn) => {
    setSeason(szn);
  }

  return (
    <div className="bg" style={{ display: "flex", justifyContent: "space-between" }}>
      <Tree type="oak" szn={season} />
      <Tree type="spruce" szn={season} />
      <Tree type="maple" szn={season} />
      <div>
        <button onClick={() => updateSeason("fall")}>Fall</button>
        <button onClick={() => updateSeason("winter")}>Winter</button>
      </div>
    </div>
  );
}

render(<App />);
```



## Resources
- Anybody interested in frontend libraries should read
  [Thinking in React](https://reactjs.org/docs/thinking-in-react.html). Vue,
  Angular, and React all use the idea of components.
- I demonstrated React state with hooks. Hooks are relatively new. A lot of
  React code contains classes and constructors to manipulate state. I highly
  recommend going through
  [React's Documentation and Tutorial](https://reactjs.org/) to understand
  classes and the "old way." For the most part, the docs use classes still.
- Traversy Media is an excellent resource for anything frontend related. I went
  through [his crash course](https://youtu.be/sBws8MSXN7A) alongside completing
  the React Docs Tutorial, which was extremely helpful.
- [Blocks UI](https://blocks-ui.com/) is a tool that demonstrates the component
  style of React well.
- [Create-React-App](https://create-react-app.dev/docs/getting-started/) makes
  getting started with a React application on your computer easy. No configuring
  webpack!
- This [Hello World Pen](https://codepen.io/danielcurtis/pen/KKwOyMB?editors=0010)
  on CodePen allows you to play around with React in browser. Go make something
  cool!
