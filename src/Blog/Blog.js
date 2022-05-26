import React from "react";

const Blog = () => {
  return (
    <div className="my-8">
      <div>
        <h1 className="text-4xl text-secondary text-center">Blog</h1>

        <div className="my-5">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Question</th>
                  <th>Answer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>
                    How will you improve the performance of a react application
                  </td>
                  <td>
                    <ul className="list-decimal">
                      <li>Avoid readering hundred and thousand of rows</li>
                      <li>Avoid repeating same code again and again</li>
                      <li>Use function instead of using class component</li>
                      <li>use dependency properly to reduce re-rendering</li>
                      <li>using react fragment also usable for optimization</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>
                    What are the different ways to manage state in react
                    application
                  </td>
                  <td>
                    <p>There are 4 types of state in react</p>
                    <ul className="list-decimal">
                      <li>
                        <strong>Local state :</strong> It's use "useState" hooks
                        <br />
                        to manage state
                      </li>
                      <li>
                        <strong>Global state :</strong>This is a state where
                        <br />
                        data can be updated from any where of the app. for
                        <br />
                        example "Authenticate a user state"
                      </li>
                      <li>
                        <strong>Server state :</strong>Data that is come from
                        <br />
                        server and need to render ui. fetching data and render
                        <br />
                        it on ui is also an server state manage
                        <br />
                      </li>
                      <li>
                        <strong>URL state :</strong>When we render ui data using
                        <br />
                        urls pathname and parameter is an url state manage
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>How does prototypical inheritance work</td>
                  <td>
                    it is a feature of javascript that used to add methods and{" "}
                    <br />
                    prototypes. It's used to inherit properties and method from
                    <br />
                    another object basically we use .(dot) to inherit
                    <br />
                    <strong>
                      const inherit = Object.create(proto)
                      <br />
                      inherit.name = "arfat"
                      <br />
                      console.log(inherit)
                      <br />
                    </strong>
                    here we create a inherit object then we add name in inherit
                    <br />
                    object
                  </td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>
                    Why you do not set the state directly in React. For example,
                    <br />
                    if you have const [products, setProducts] = useState([]).{" "}
                    <br />
                    Why you do not set products = [...] instead, you use the
                    setProducts
                  </td>
                  <td>
                    React has three lifecycles <br /> 1. mounting phase <br />
                    2. Updating Phase <br /> 3. Unmounting Phase <br />
                    whenever a component is rendering either in theMounting
                    <br />
                    phase or in Updating Phase. So if we update state directly
                    <br />
                    the react can't be update all rendering it need. so we use
                    <br />
                    setState instead of state so that the rendering word
                    <br />
                    properly in whole DOM object
                  </td>
                </tr>
                <tr>
                  <th>5</th>
                  <td>
                    You have an array of products. Each product has a name,
                    <br />
                    price, description, etc. How will you implement a search to{" "}
                    <br />
                    find products by name?
                  </td>
                  <td>
                    {`var found = objectName.find(arr => arr.name === 'value');
                    console.log(found)`}
                    ;
                  </td>
                </tr>
                <tr>
                  <th>6</th>
                  <td>What is a unit test? Why should write unit tests?</td>
                  <td>
                    a developer write and text unit test to check the
                    <br />
                    application meets its design and behaves as intended
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
