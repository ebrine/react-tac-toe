# React Workshop - Day 1

### Intro
  Welcome to the DBC Seattle React Workshop Day 1. Throughout this curriculum you will be building a personal web page. The goal is to learn how to break a web page down to it's base building blocks and use React to control how those blocks are visualized. Topics flagged with superscript numbers have explanations or sources for more info at the bottom of the page.

## Release 0 - Examine a Component
  Let's start by examining and seeing what makes up a React Component.

  If you'd like to follow along through the code, in the terminal switch to the step-1 branch by inputting `git checkout step-1` and open up the file located at `src/components/BasicComponent.js` . If not we'll have images here as well.

  ![full component](/images/basic_component_images/full_component.png?raw=true "Full Component")

  What you are now seeing is a Basic React Component!
  Diving in let's discuss what we see here line-by-line

  First, we see

  ![import](/images/basic_component_images/import.png?raw=true "import")

  ```
  import React, {Component} from 'react'
  ```

  This line is pulling in the prototype Component that has the basic functioning every React Component needs. It is coming from the React library installed in the `/node_modules` folder for our use. Every new component file needs this line, otherwise we lose all of the coding that the React library provides.

  The next line of code has

  ![component start](/images/basic_component_images/component_start.png?raw=true "component start")

  ```
  class BasicComponent extends Component {
  ```
  Those comfortable with ES2015(ECMAScript 2015)<sup>1</sup> JS might recognize this easily, but for the average javascript user this line might seem funky.
  This line is establishing constructor object that is built upon an instance of the Component imported on line 1. It is also establishing the name of this particular component with a title that represents the funciton of this component.

  On line 4 we see

  ![render](/images/basic_component_images/render.png?raw=true "render")

  ```
  render(){
  ```
  This line is more ES2015 notation that is establishing a function called render. All React components require a render function. Without it they can't fulfill their most basic purpose of rendering it's information to the given page.

  On line 6 we see

  ![return](/images/basic_component_images/return.png?raw=true "return")

  ```
  return(<div> Hi, I'm a Basic Component! </div>)
  ```

  Here we are establishing exactly what this component will render. The most simple a thing a component can render is text within two div html tags. These div's are necessary to enclose the component's content. React will not build successfully if you don't have those tags or an equivalent.

  At the bottom of the file we find

  ![export](/images/basic_component_images/export.png?raw=true "export")

  ```
  export default BasicComponent;
  ```
  This line is the easiest to forget about but absolutely paramount for this component to be used within other files.
  Speaking of which, let's see this little guy in action.

  In your terminal please input `npm start` and open up chrome, typing `localhost:3000` into the browser. You should now be seeing the starting point of your app in the web page looking similar to this.

  ![basic component page](/images/basic_component_page.png?raw=true "Basic Component Page")

  However, what we would like to see in here is our little buddy the Basic Component. To do that look to your code and open the file `src/App.js`. Within this file you will see an import of our component commented out. Uncomment it to make it available. Take note of the similarity of this line to the imported Component from React. They differ in that the component is being pulled from a file relative to our current one.

  So now that we have access to this component how are we going to put it to use? React relies on the use of JSX(JavaScript XML)<sup>2</sup> notation to refer to derived components. JSX at it's most basic can be treated like self-enclosed html/xml tags. So when we want to input our component we would include `<BasicComponent />`
  Let's throw that content in, in place of the text in the App-intro div. Save your page, check your browser and should now see our Basic Component saying hi!

## Release 1 - Create a Component

Now that we have a working understanding of a component, lets make one of our own! Open up the file `src/MyFirstComponent.js` to see a component skeleton. Set this component up to have a message of its own and then have it render within the Basic Component.

For more practice, make your own component in a new file and have that one render within the Basic Component as well!

## Release 2 - Components with Props

Now that we have created some simple components let's throw some variables around!

Oftentimes components should change what they are rendering based on the different information they are given. This information transfer happens through the passing of props<sup>3</sup> from a parent component to a child contained within.

Let's begin by switching to the step-2 branch by typing into the terminal `git checkout step-2`

We should now see the file `Name.js` show up in `src/components` as well as it's corresponding component in `App.js`. However, when we look to our browser we don't see any text show where we would expect something as denoted by `<Name />`
If we check in `Name.js` we see that within the divs is
```
{this.props.name}
```
What we are seeing here is two new things:
1. The curly braces interpolate a variable into what's being rendered. If you remove them, the text inside will be shown.
2. We see a reference to the props of this component. Specifically one called name.

Since nothing is shown, it is easy enough to assume that name doesn't currently exist within the props of this component. What are we going to do about that?
Going back to `App.js`, let's add in a prop for name. To do that we can declare props much like how one declares attributes in HTML. Edit the Name JSX to look like
```
<Name name='whatever your name is' />`
```

Checking back with your browser we should be seeing your name there! But why is your name appearing below this line? People familiar with HTML probably know that a div is a block-level element and takes up the entire width of the container it is within. We don't want that, so let's fix this using CSS. As we can see in the Name Component, the div already has a spot to accept props to define its class<sup>4</sup>. Our CSS file already has a class called 'inline' that will fix this. Your task now is to use props to make Hello and your name appear on the same line.

## Release 3 - Creating a Website

Let's create the home page for our website!
Begin by switching to the step-3 branch by typing into the terminal `git checkout step-3`

Using this picture as an example, break this site down to its possible components.
![example page](/images/example_page.png?raw=true "Example Page")

1. Using a white board, plan out the components necessary to recreate the profile card and the content.
2. On completion, flag down an instructor or mentor and explain your design to them.
3. Upon plan approval, start building out the provided ProfileCard and Content components. Feel free to use whatever images or information you would like to make the page uniquely you.

## Stretch Release

If you finish before today's workshop ends feel free to make 'Home', 'About' and 'Contact' components. Then have Content hold all of these components.

<sup>1</sup> Read more about ES2015 [here](https://babeljs.io/learn-es2015/)

<sup>2</sup> Read more about JSX [here](https://facebook.github.io/jsx/)

<sup>3</sup> Props, short for properties, are variables that can be passed into a React component.

<sup>4</sup>In ES2015 class has another meaning so className must be used instead to declare an element's class.
