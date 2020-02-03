---
title: React Explained in 10 Steps
date: '2020-01-01T22:12:03.284Z'
tags: ["react"]
featuredImage: ./hero.jpg
---

I build all of my web-based projects in React, unless I'm learning something
new. React is often overcomplicated, so this is my attempt to demystify the
framework in ten steps.

## 1. What is React?
Websites display information for users to read and interact with. React makes it
easy to change what information is displayed.

Instead of targeting specific elements in the DOM (Document Object Model) with
jQuery or plain JavaScript to make changes, React automatically updates the UI
as demonstrated below:

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
React redefines web page architecture. Instead of a document of information,
React renders collections of building blocks or components of information.

[Blocks-UI](https://blocks-ui.com/demo) fantastically illustrates this idea with
a drag and drop website builder.
[Thinking in React](https://reactjs.org/docs/thinking-in-react.html) also covers
this idea extensively.

React categorizes information into separate components, similar to how HTML has
`<header>`, `<main>`, and `<footer>` elements. React takes it further though.
Header would be a component with an Icon component, Navigation component, and
Links component.

![Stripes website broken down in components](./website.png)

## 3. Functions, Classes, and Components
Functions, classes, and components are all the same thing in React. Every
component in React should be a class or function. Classes in JavaScript are just
a particular type of function. Every component in React returns a snippet of
HTML called "JSX."

In plain JavaScript and HTML, the languages are separated. In React, components
encapsulate their JavaScript, HTML, and data making for cleaner code.

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
Components are highly reusable. Our title component can be used across
our entire website. Instead of creating ten HTML titles and configuring our
plain JavaScript function to work with all ten titles, React only needs one.

Any component can be called within other "parent" components. For example, if
you have a title component and paragraph component, you can create a parent
component to hold both of them. Breaking down every item into a component and
combining them to create a webpage is best illustrated with a tree model:

* Body Component
  * Title Component
  * Paragraph Component

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

function Title() {
  return <h1>My Title</h1>;
}

function Paragraph() {
  return <p>Wow, much paragraph. Very placeholder</p>;
}

function Body() { // custom parent component
  return (
    <div>
      <Title /> // how to call components in React <Component />
      <Paragraph />
    </div> // because Body is one component, Title and Paragraph must be wrapped in a div
  );
}
```

## 5. Component Properties
If we were to reuse the body component, the text would be the same every time.
Every component can have unique properties passed into the first parameter. The
properties are passed down from a parent component as an object called `props`.
This makes every component completely reusable.

```js react-live
function App() {
  return (
    <div className="bg">
      <h3>Chapters</h3>
      <h4>Campfire Songs</h4>
      <h4>Ghost Stories</h4>
    </div>
  );
}

render(<App />);
```

```js
import React from "react";

function Title(props) {
  console.log(props.link);
  return <h4>{props.title}</h4>;
}

function IndexTitles() {
  return (
    <div>
      <h3>Chapters:</h3>
      <Title title="Campfire Songs" /> // prop names can be anything
      <Title title="Ghost Stories" link={["google.com", "abc.com"]} /> // anything can be passed as props
    </div>
  );
}
```

## 6. Data Manipulation
React shines when you need to display different data depending on user
interactions. React uses the idea of "state" to make it easy. Think of state as
a timeline that shows what "state" a user is in. Every component function can
create a "state" for that function by using a special React function called
`useState`. The `useState` function is called a "Hook" in React.

Here's our function's timeline:

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

This timeline is straightforward to code in React. The function can also
conditionally render information depending on what state the function is in.

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
logged in is the "state" that the web page is in. Conditionally rendering
components and data depending on a web pages state is what makes React magical.

```js
import React, { useState } from "react";

function LandingPage() {
  return <div>/* great Landing page HTML */</div>;
}

function Feed() {
  return <div>/* great news feed HTML */</div>;
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
React has two hooks for controlling state. `useState` is the most common.
`useEffect` is powerful for fetching data from an outside source like an API.
`useEffect` is a callback function that can asynchronously update state.

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
  const [username, setUsername] = useState({}); // initial is an empty object

  useEffect(() => {
    fetch("https://MyDatabase.com/" + props.key) // fetch username based on API key passed in via prop
      .then(response => response.json())
      .then(result => setUsername(result));
  }, [props.key]);

  return <h1>`Hello, ${username}`</h1>;
}

```

If you don't completely understand don't worry! Asynchronous programming is a
tough concept. It'll become clear with practice.

## 9. Styling Components
React is a UI library. Of course, styling is a big deal. And probably the most
controversial topic. React allows inline styling or CSS classes, just
like HTML elements. Inline styling uses object notation, and classes use external
CSS stylesheets.

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
    <div className="App" style={styleObject}>
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

## 10. An analogy to put it all together
Think of webpages as individual components instead of a pages of information.
These components come together as a reusable tree. You can make the tree unique
by feeding it data through props. Now you have an oak tree, spruce tree, and
maple tree from the same reusable tree template of code.

Show the trees to the user. Let the user decide the season, which also impacts
the trees. See if you can duplicate the example below with only one function for 
tree, leaf, and branch!


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
    <div style={{ display: "flex", justifyContent: "space-between" }}>
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
