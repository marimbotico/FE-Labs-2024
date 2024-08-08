/* 
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  React Week 15 - REST, Fetch, Functional Components, and Best Practices
  FE Lab Week 15
*/

/* ----------------------------------------------------- */
// Key Term List:
// REST
// RESTful API
// CRUD: Create Read Update Delete
// HTTP Methods: POST, GET, PUT/PATCH, DELETE
// Fetch
// Functional Component
// Spread Operator
// Destructuring
// Hooks
// useState
// useEffect
// Async/Await
// JSON.stringify()
// fetch(URL, options)
// onClick={(e) => myFunction(e)}
// onChange={(e) => setState(e.target.value)}
// onSubmit={(e) => myFunction(e)}
//          // e.preventDefault()
//

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/**
 * For step-by-step instruction, check the README.md
 */

/*------------------------ Part 1: REST & Fetch ------------------------*/

/**
 * Fetch documentation: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 *
 *                      Make sure you set up a API that you can CRUD to, such as mockAPI or use
 *                      a JSON server like in the week 11/12 labs.
 *
 *                      The lab solution will use mockAPI - but you MUST update the endpoint with your own
 *                      or the CRUD operations will not work. Do not copy the API link in the lab solution.
 *
 * Part 1: Create a new const variable called: API_URL , and set it to your URL.
 *
 *         Create 4 functions, getUsers(){}, deleteUser(){}, updateUser(){}, and postNewUser(){}.
 */

/*------------------------ Part 1: Setting up GET ------------------------*/
/*
 *         Setting up getUsers() function:
 *
 * Step 1: First, let's create a place (state) to save the users from our API.
 *
 * Step 2: In our getUsers function:
 *         1) Use fetch(URL) to get from the API
 *         2) Convert the data to JSON
 *         3) setUsers() to result of that data.
 *

 *
 * Step 3: Use the useEffect and getUsers() to re-render our component on change:
 *
 */

/*------------------------ Part 2: Setting up DELETE ------------------------*/

/**
 * Reminder: fetch(url, {options})
 *
 * Step 1: Put id as a parameter in our deleteUser() function, and update
 *         our URL in fetch(API_URL) with the id parameter.
 *
 * Step 2: Add method: "DELETE" key/value pair to our options object
 *
 * Step 3: call .then(() => getUsers()) after your fetch() to ensure that our component
 *         gets re-rendered with the updated information.
 */

/*------------------------ Part 3: Setting up POST ------------------------*/

/**
 * Step 1: Inside our postNewUser() function, set up fetch() to POST.
 *
 *         Reminder: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 *
 * Step 2: Create 3 new variables with useState(): newUserName, newUserJobTitle, newUserCompanyName
 *
 *         Set them to an empty string
 *
 *         Update the body: {} part of our fetch() to POST with our new variables.
 */

/*------------------------ Part 4: Setting up UPDATE ------------------------*/

/** Disclaimer: There are MANY ways to handle UPDATE.
 *              This is only one way. We will be creating a form for each user,
 *              passing in a userObject to our updateUser() function, then updating the user with fetch()
 *
 *              Consider other ways after the lab is completed.
 *
 * Step 1: Set up fetch() to UPDATE in our updateUser() function.
 *         Pass in userObject as a parameter.
 *         Be sure to update the URL with userObject.id
 *
 *         Reminder: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 *
 *         Consider the necessary options key:value pairs; method/headers/body
 *
 * Step 2: Create 3 new variables with useState() like we did for POST, but for UPDATE:
 *         updatedName, updatedJobTitle, and updatedCompanyName
 *
 * Step 3: Inside the updateUser() function body, create a new variable: updatedUserObject
 *         updatedUserObject should be userObject, with it's updated name/title/company name
 *
 */

/*------------------------ Part 5: Connecting All the Pieces ------------------------*/

/**
 * Step 1:  Connecting our GET:
 *
 *          .map over our users variable and display every users name/jobTitle/companyName
 *
 * Step 2: Connecting our DELETE:
 *
 *         Under our map, give every user a button to delete. Return of the trash-bin: 🗑
 *         It's not in a form, so we don't need event.preventDefault()
 *
 *         use .then(() => getUsers()) after our fetch to re-render the
 *         page with the updated information.
 *
 * Step 3: Connecting our POST:
 *
 *         Create a form above your .map method to post a new user.
 *
 *         Use the onChange property and setMyVariable() on each corresponding input
 *
 *         Connect your postNewUser() function to your form button.
 *
 *         We do need event.preventDefault() because it's inside of a form.
 *
 *         You should now be POSTing new users! Is your state re-rendering?
 *         If not, your hint in how is in Part 2: Setting up DELETE
 *
 * Step 4: Connecting our UPDATE:
 *
 *     1)  There's MANY ways to handle UPDATE.
 *
 *         For this example, we're going to give every user a form to update their:
 *         name, job title, and company name.
 *
 *     2)   Inside our .map() method, below our delete button,
 *          create a new form with labels/inputs for
 *          Update name, update job title, update company name.
 *          Include a button at the bottom (this will update on click).
 *
 *     3)   Set up the onChange property on your inputs similiar to Step 3: Connecting our POST
 *
 *     4)   Give your button an onClick property. Connect your updateUser() function to it.
 *
 *          For this function, we have two goals:
 *       1. Prevent the button from refreshing the page
 *       2. Pass in a an entire user object.
 *
 *          Set up your onClick to do both.
 *
 *     5)   Test it out! Your update should now be working!
 *          Make sure the page is re-rendering with the updated information
 *          and not refreshing the page.
 *
 * Optional: Set the input values in your update form to be equal to user.name/user.jobTitle etc,
 *           so they don't initially submit empty strings.
 *
 */

/*-- ALL IMPORTS HERE -- */
import './App.css'
import { useEffect, useState } from 'react';

function App() {
    /* -- YOUR CODE/CRUD OPERATIONS HERE --*/
    const API_URL = 'https://66b412549f9169621ea1b740.mockapi.io/users';// network call gets data
    const [users, setUsers] = useState([]);

    const [newUserName, setNewUserName] = useState('');
    const [newUserJobTitle, setNewUserJobTitle] = useState('');
    const [newUserCompanyName, setNewUserCompanyName] = useState('');

    const [updatedUserName, setUpdatedUserName] = useState('');
    const [updatedJobTitle, setUpdatedJobTitle] = useState('');
    const [updatedCompanyName, setUpdatedCompanyName] = useState('');

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // this is the most up to date code. We learned both in class I started with this although I am pasting what I had above below.
    const getUsers = async () => {
        try {
            const resp = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await resp.json();// makes data readable and converts it to json
            setUsers(data);// sets users to the data
            console.log(data)
        } catch (e) {
            console.error('Error fetching users:', e);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);// only re-renders once

    // function getUsers() {
    //     fetch(API_URL)
    //         .then((resp) => resp.json)
    //         .then((data) => {
    //             setUsers(data);// sets the fetched data to state
    //             console.log(data);//logs data for debugging
    //         })
    //         .catch((e) => console.error('error fetching data', e))
    // }

    const deleteUser = async (id) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            await getUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    // function deleteUser(id) {
    //     fetch(`${API_URL}/${id}`, {
    //         method: 'DELETE',
    //     }).then(() => getUsers())
    // };

    const postNewUser = async (e) => {
        e.preventDefault();
        try {
            const data = {
                name: newUserName,
                job: newUserJobTitle,
                company: newUserCompanyName
            };

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(data)
            }); console.log(data);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            await getUsers(); // Assuming getUsers is an async function
        } catch (error) {
            console.error('Error posting new user:', error);
        }
    };

    // Below is the function based format. It is more concise but it doesn't handle errors. The new format is what is being currently used with async functions.  
    // function postNewUser() {
    //     fetch(API_URL, {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({//JSON.stringify(data)
    //             name: newUserName,
    //             job: newUserJobTitle,
    //             company: newUserCompanyName
    //         })
    //     }).then(() => getUsers())
    // }

    const updateUser = async (e, userObject) => {
        e.preventDefault();// doesn't re-render the browser
        const updatedUserObject = {//spread operator copies all the properties of the previous users and updates 3 properties name, job and company.
            ...userObject,
            name: updatedUserName,
            job: updatedJobTitle,
            company: updatedCompanyName
        };
        try {
            const response = await fetch(`${API_URL}/${userObject.id}`, {
                method: 'PUT',
                headers: myHeaders,
                body: JSON.stringify(updatedUserObject)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            await getUsers(); // Assuming getUsers is an async function
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };



    return (
        <div className="App">
            {/* CODE BELOW: PART: 5.3 Connecting our POST */}
            <form>
                <h2> New Users Form</h2>
                <label> Name</label>
                <input
                    type="text"
                    id='name'
                    onChange={(e) => setNewUserName(e.target.value)}
                    value={newUserName}
                />
                <label>Job</label>
                <input
                    type="text"
                    id='job'
                    onChange={(e) => setNewUserJobTitle(e.target.value)}
                    value={newUserJobTitle}
                />
                <label>Company</label>
                <input
                    type="text"
                    id='company'
                    onChange={(e) => setNewUserCompanyName(e.target.value)}
                    value={newUserCompanyName}
                />
                <button onClick={(e) => postNewUser(e)}>Submit</button>
            </form>
           


            {/* CODE BELOW: PART 5.1: Connecting our GET  //  PART 5.4: Connecting our UPDATE */}
       
            {users.map((user, index) => (
                <div className="container" key={index}>
                    <ul>
                        <li>
                            <label>{`${user.name} works at ${user.companyName} as ${user.jobTitle}`}</label>
                            <button onClick={() => deleteUser(user.id)}>🗑</button>
                        </li>
                    </ul>
                    <form>
                        <h2> Updated User Information Form</h2>
                        <label>Updated Name</label>
                        <input
                            type="text"
                            id='updatedName'
                            onChange={(e) => setUpdatedUserName(e.target.value)}
                            value={updatedUserName}
                        />
                        <label>Updated Job</label>
                        <input
                            type="text"
                            id='updatedJob'
                            onChange={(e) => setUpdatedJobTitle(e.target.value)}
                            value={updatedJobTitle}
                        />
                        <label> Updated Company Name</label>
                        <input
                            type="text"
                            id='updatedCompany'
                            onChange={(e) => setUpdatedCompanyName(e.target.value)}
                            value={updatedCompanyName}
                        />
                        <button onClick={(e) => updateUser(e, user)}>Update</button>
                    </form>
                </div>
            ))}
        </div>
    )
}

export default App

/**
 *     While this lab focused mostly on functionality over practicality,
 *     here's a couple ideas you can try implementing to make the UI/UX more user-friendly:
 *
 *    1: Having a form laid out for EVERY user isn't very UI friendly, nor realistic.
 *       Consider using a styling library like Bootstrap React/MaterialUI/SemanticUI to put
 *       each of those forms in a modal. The form inside the modal only pops up when a
 *       "update user" button gets clicked, and only updates the user when that modal gets submitted.
 *
 * Docs: https://react-bootstrap.github.io/components/modal/
 *
 *
 *    2: Organize the users somehow. You can use a table, CSS grid/flex.
 *       Possibly put all the users in a container, and look at the CSS property overflow:
 *
 * Docs: https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
 *
 */