// Importing the axios library into our code.
import axios from "axios";

// Creating an axios instance with default configuration.
export default axios.create({
    // Setting the base URL for all HTTP requests made with this instance.
    baseURL: "http://localhost:3500/",
});

/* Axios:
What is Axios?
Axios is a popular JavaScript library used to make HTTP requests from both the browser and Node.js. It's promise-based, which means it leverages JavaScript's Promise object to handle asynchronous operations, making it easy to work with asynchronous code.

Features of Axios:
1. Simple API: Axios provides a simple and easy-to-use API for making HTTP requests, supporting all HTTP methods such as GET, POST, PUT, DELETE, etc.

2. Promise-based: Axios utilizes JavaScript Promises, allowing us to handle responses asynchronously using .then() and .catch() methods.

3. Automatic JSON data transformation: Axios automatically converts JavaScript objects to JSON for sending data in requests and converts JSON responses back to JavaScript objects.

4. Interceptors: Axios provides interceptors to transform requests or responses globally or individually.

5. Cancel requests: Axios allows us to cancel requests using cancel tokens, which is useful for handling scenarios like users navigating away from a page while a request is still pending.


Absolutely, let's delve into Axios:

What is Axios?
Axios is a popular JavaScript library used to make HTTP requests from both the browser and Node.js. It's promise-based, which means it leverages JavaScript's Promise object to handle asynchronous operations, making it easy to work with asynchronous code.

Features of Axios:
Simple API: Axios provides a simple and easy-to-use API for making HTTP requests, supporting all HTTP methods such as GET, POST, PUT, DELETE, etc.

Promise-based: Axios utilizes JavaScript Promises, allowing us to handle responses asynchronously using .then() and .catch() methods.

Automatic JSON data transformation: Axios automatically converts JavaScript objects to JSON for sending data in requests and converts JSON responses back to JavaScript objects.

Interceptors: Axios provides interceptors to transform requests or responses globally or individually.

Cancel requests: Axios allows us to cancel requests using cancel tokens, which is useful for handling scenarios like users navigating away from a page while a request is still pending.

Installation:
We can install Axios via npm or yarn:
npm install axios
# or
yarn add axios

Examples:

1. GET Request:
axios.get('https://api.example.com/data')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

2. POST Request:
axios.post('https://api.example.com/postData', { key: 'value' })
    .then(response => {
        console.log('Data posted successfully:', response.data);
    })
    .catch(error => {
        console.error('Error posting data:', error);
    });

3. Setting Headers:
axios.get('https://api.example.com/data', {
    headers: {
        'Authorization': 'Bearer our_token_here'
    }
})
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.error('Error fetching data:', error);
});

4. Interceptors:
// Request interceptor
axios.interceptors.request.use(config => {
    // Modify request config
    return config;
}, error => {
    // Handle request error
    return Promise.reject(error);
});

// Response interceptor
axios.interceptors.response.use(response => {
    // Modify response data
    return response;
}, error => {
    // Handle response error
    return Promise.reject(error);
});

5. Canceling Requests:
// Create cancel token
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

// Make request with cancel token
axios.get('https://api.example.com/data', {
    cancelToken: source.token
})
.then(response => {
    console.log(response.data);
})
.catch(error => {
    if (axios.isCancel(error)) {
        console.log('Request canceled:', error.message);
    } else {
        console.error('Error fetching data:', error);
    }
});
// Cancel the request
source.cancel('Request canceled by user');

These examples cover some of the basic functionalities of Axios. It's widely used in web development for handling HTTP requests due to its simplicity and versatility.
*/

/* Axios in simple words:
Axios is like a messenger between our web application and a server. It helps our application send requests for data or resources to the server and receive responses back. Here's a simpler breakdown:

1. Sending Requests: When our app needs data from a server, like fetching a user's profile or posting a comment, Axios helps in making that request to the server.
2. Receiving Responses: Once the server processes the request, Axios helps in receiving the response back from the server.
3. Promise-based: Axios uses a concept called promises, which is like asking Axios to do something for we, and when it's done, it either gives we the data we wanted (if everything went well) or tells us if something went wrong.
4. Easy to Use: Axios provides a simple way to send different types of requests, like GET (for getting data), POST (for sending data), PUT (for updating data), DELETE (for deleting data), etc.
5. Handling Errors: If something goes wrong, like the server is down or we made a mistake in our request, Axios helps in catching those errors and lets us handle them gracefully.

Customization: We can also customize our requests by adding special headers (like authentication tokens) or intercepting requests and responses to modify them before they're sent or received.

In a nutshell, Axios is a handy tool that simplifies the process of communication between our web app and a server, making it easier to fetch and send data.
*/

/* axios.create() in detail:

axios.create(): The axios.create() method is a factory function provided by Axios to create a new instance of Axios with a custom configuration. It allows us to pre-configure an instance of Axios with default settings for headers, base URL, timeout, and other options. Here's a detailed explanation:

1. Custom Configuration: When we call axios.create(), we can pass an object with configuration options as its argument. These options customize the behavior of the Axios instance.

2. Base URL: One of the most commonly used options is baseURL. This option sets a base URL for all requests made by the Axios instance. When we make a request using this instance, Axios will prepend this base URL to the relative URL we provide in the request. In the provided code, the base URL is set to "http://localhost:3500/".

3. Interceptors and Defaults: Additionally, we can set default headers, interceptors, timeouts, and other settings as part of the configuration object passed to axios.create().

4. Usage: After creating an instance using axios.create(), we can use it to make HTTP requests just like we would with the global Axios object. For example, axiosInstance.get('/endpoint') would send a GET request to http://localhost:3500/endpoint.

5. Reusable Instances: Creating instances with axios.create() is useful when we need multiple Axios instances with different configurations within the same application. For instance, we might have different base URLs for different parts of our backend API.

In summary, axios.create() provides a way to create customized instances of Axios with pre-defined settings, making it easier to manage and reuse configurations across our application.
*/

/* axios.create() in simple words:
axios.create(): It's like making a customized version of Axios, the library used to send requests to servers.

What it does: When we create a custom Axios instance with axios.create(), we're setting up some default rules for how our requests will work.

Example: In the code we provided, it's saying that every time we send a request using this custom Axios instance, it should start with http://localhost:3500/. So if we send a request to /users, it will actually go to http://localhost:3500/users.

Why it's useful: It's handy because we might have multiple parts of our app talking to different parts of a server, and they need different settings. With axios.create(), we can set up these settings once and reuse them wherever we need.
*/

/*How we can send a request without using the axios.create() method:

import axios from "axios";

// Send a GET request without using axios.create()
axios.get("http://localhost:3500/")
    .then(response => {
        console.log("Response:", response.data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
In this code:

We directly call the axios.get() method with the URL we want to send the request to.
This request will still go to http://localhost:3000/, just like the previous example using axios.create().
The .then() method is used to handle the response if the request is successful, and the .catch() method is used to handle errors if the request fails.
Using axios.create() is helpful when we want to reuse configurations across multiple requests or instances. However, if we only need to send a single request, we can use axios.get() directly without creating a custom instance.
*/
