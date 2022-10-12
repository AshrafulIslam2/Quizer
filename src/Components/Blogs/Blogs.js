import React from "react";

const Blogs = () => {
  return (
    <div className="w-full">
      <div className="m-10 w-full bg-lime-100 p-10 rounded-xl shadow-2xl">
        <h1 className="text-lg  lg:text-4xl font-mono font-bold leading-loose">
          What is the purpose of the react Router?
        </h1>
        <p className=" text-sm lg:text-2xl tracking-wide indent-7 font-mono">
          ReactJS Router is mainly used for developing Single Page Web
          Applications. React Router is used to define multiple routes in the
          application. When a user types a specific URL into the browser, and if
          this URL path matches any 'route' inside the router file, the user
          will be redirected to that particular route.
        </p>
      </div>
      <div className="m-10 w-full bg-lime-100 p-10 rounded-xl shadow-2xl">
        <h1 className="text-lg  lg:text-4xl font-mono font-bold leading-loose">
          How does context Api Works?
        </h1>
        <p className="text-sm lg:text-2xl tracking-wide indent-7 font-mono">
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux.
        </p>
      </div>
      <div className="m-10 w-full bg-lime-100 p-10 rounded-xl shadow-2xl">
        <h1 className="text-lg  lg:text-4xl font-mono font-bold leading-loose">
          How Does useref works?
        </h1>
        <p className="text-sm lg:text-2xl tracking-wide indent-7 font-mono">
          {" "}
          hook is a special function which enables one use state and other React
          features without writing ES6 class components which are generally
          considered difficult to understand, use and master. useRef hook is
          part of the React Hooks API. It is a function which takes a maximum of
          one argument and returns an Object. The returned object has a property
          called current whose value is the argument passed to useRef. If you
          invoke it without an argument, the returned object's current property
          is set to undefined. The code below illustrates how to invoke the
          useRef hook in functional components.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
