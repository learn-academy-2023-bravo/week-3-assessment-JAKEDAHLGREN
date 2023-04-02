# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer:

JSX allows you to use HTML tags inside your React components in you JavaScript files. The main difference between JSX and HTML is that your JSX must open and close with the same tag. When you have multiple tags in your JSX it needs to be surrounded by React Fragment tags (<></>) or it will not communicate with the rest of your JavaScript code.

Researched answer: Resource (https://www.freecodecamp.org/news/html-vs-jsx-whats-the-difference/)

JSX is short for JavaScript Syntax Extension, and it was created so that JavaScript developers can use HTML tags directly into a .js file when creating a React application. You can look at it as if you were combining JavaScript and HTML syntax together. When using JSX, the main difference is, you can only return a single parent element, or HTML tag in order for your server to compile the data. You can surround your JSX with a <div> tag, but more commonly developers surround their code with React fragment tags. These fragment tags are nothing more than an empty opening and closing tag in HTML ( <></>). Using fragments make the code easier to read for other developers that might be viewing your code.

1. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer:

Yarn is a package manager for Jest. It holds all of the directories and built in functions needed to run your Jest tests for JavaScript. Once you get "good failure" on your test, function not defined, you can write your function and play around until the function until it passes the test you coded.

When you run yarn in your terminal it will modify all of the files inside the repo your branch is in. Or if you mess up, like I did, and run yarn when you are on your desktop it will modify all of the folders that hold Jest test on your desktop...
   

Researched answer: Resource (https://flaviocopes.com/yarn/)

Created in 2016, yarn is one of the main JavaScript package managers for node.js. Yarn has the ability to install packages from your local cache. When you initiate a new project, through your terminal, yarn writes its dependencies into a file marked package.json. It is stored in the root folder of your project, and stores the dependencies files that effect your entire project.

3. What is a React component?

Your answer:

React components are the external files, or the children, that are seperated from your main App.js and they communicate with your app through component calls at the bottom of your App.js (ex: <Button />). You can store your code for a specific item outside your code to keep it clean and compartmentalized.

Researched answer: Resource (https://www.w3schools.com/react/react_components.asp#:~:text=Components%20are%20independent%20and%20reusable,will%20concentrate%20on%20Function%20components.)

React components are small bits of code that can be reused independently. They are similar to a JavaScript function, but work independently and return HTML. There are two types of React components. First there are Class components. These must have an "extends React.Component statement to inherite access to React.Component's functions. They also must have a render() method, so that they can return HTML.Then there are Functional components. Function components return HTML as well, but can be written with less code, in a cleaner way which increases the ease of use and understanding. With React components you can pass them throughout your project as properties, or Props for short. Think of a Prop as a function argument that can be passed to components as attributes.

4. What is the difference between state values and props in React?

Your answer:

State values are used when you have a variable that is going to change its value. It is declared with the original value and the set value(value that will change) to equal the useState.(Ex: [user, setUser]= useState()). Props are used to transfer a functions parameter to other parts of your code without having to be redundant with your code(Ex: const multiplyBy = (props) => {}). 

Researched answer: Resource (https://www.knowledgehut.com/blog/web-development/react-state-vs-props)

The main difference is based on which component the data is owned. For states, it is locally owened and it updates the component itself. Props, however, are owened and translated only by the parent. If you want to change the behavior of a prop, it must be modified by a callback function, or "prop function", passed on to the child.

5. What is the DOM?

Your answer:

The DOM is the Document Object Model, and it is represented by a tree/flow chart. It describes the way in which each element of your App communicates affects the UI.

Researched answer: Resource (https://frontend.turing.edu/lessons/module-1/js-intro-to-the-dom.html?psafe_param=1&ads_cmpid=6451354298&ads_adid=76255849919&ads_matchtype=&ads_network=g&ads_creative=517729935062&utm_term=&ads_targetid=dsa-19959388920&utm_campaign=&utm_source=adwords&utm_medium=ppc&ttv=2&gclid=CjwKCAjwrJ-hBhB7EiwAuyBVXQW2i1ibu7bs8hJx2kTG6yd2QuHfJeER9XkglVbRxdW0ovRFilxAQxoCezMQAvD_BwE)

The Document Object Model is an HTML interface that allows you to manipulate elements or element values in JavaScript. The DOM, simply put, tracks the UI for such actions as filling out a form, submission, and button clicks so that it can return any neccesary actions like a conformation message. Without the DOM tracking these things, we wouldn't be able to have the same functionality on our web page. Think of the DOM as a family tree, it shows all of the connections between the components, HTML tags, and the functions of our code, and how they interact/connect to eachother. The DOM is a key element to the UI of our code because it represents what is in our HTML, but allows us to interact with those elements through JavaScript.

6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer: 

A <div> tag is a way to divide your code into smaller containers. With a <div> tag you can reference a specific part of your code to declare behaviors, styling, and components with much easier then referencing each tag line by line.

Researched answer: Resource (https://blog.hubspot.com/website/span-vs-div#:~:text=span%20vs%20div-,span%20vs%20div%20in%20HTML,for%20inline%20organization%20and%20styling.)

Both of these tags are used in HTML as a way to group elements of your web page together. The function they serve are different. Div tags are used for "block-level" organization and styling, incolloration with things like CSS, of your website. Span tags are used for "inline" organization and styling in your HTML components. We use span tags on small segments of text, links, images, and other HTML elements that are viewed inline with the surrounding content.

## Looking Ahead: Terms for Next Week

1. Object-oriented programming:

This is a computer programming approach that revolves around the concept of objects. It was created to try and make it easier to develop, debug, reuse, and maintain software because you code is seperated into smaller components (objects). It is an ideology that thinks about and organizes your code for maximum reusability.

2. Ruby:

Ruby is a scripting language used for front and backend development. It is a object-oriented language, that is dynamically typed, and uses high-level syntax that makes progamming with it almost feel like "coding in english". It sounds to me as though it will be close to the setup for psuedo coding. Using detailed information about your objectives to run a process.

3. Implicit return:

This is when a function returns a value without having to use the keyword return. It sounds like a way to refactor your return statment, and make it more concise.

4. Ruby blocks:

They are anonymous blocks of code that accept input from an argument and return a value.

5. Ruby hashes:

They are a data structure used to stor data in the form of UNIQUE key-value pairs. Unlike arrays, they don't have numerical indexes, you access the values with keys. I assume like an object...