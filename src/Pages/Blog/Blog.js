import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Blog = () => {
    return (
        <div className="flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <HelmetProvider>
                <Helmet>
                    <title>Blog</title>
                    <meta name="description" content="Blog" />
                </Helmet>
            </HelmetProvider>
            <div className='text-center my-8'>
                <h2 className="text-5xl font-semibold text-cyan-500">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4 w-3/4 mx-auto">
                <details className="w-full border rounded-lg" open="">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What are the difference between SQL and NoSQL?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                        SQL databases are relational databases, which means they store data in tables. NoSQL databases are non-relational databases, which means they store data in key-value pairs, documents, graphs, or wide-column stores.
                        <br />
                        SQL databases are vertically scalable, which means you can increase the performance of your database by upgrading your hardware. NoSQL databases are horizontally scalable, which means you can increase the performance of your database by increasing the number of servers in your database cluster.
                        <br />
                        SQL databases are table-based, which means you need to define the schema before you can store any data. NoSQL databases are document-based, which means you can store and retrieve data without needing to define any schema.
                    </p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is JWT, and how does it work??</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                        JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
                        <br />
                        JWTs can be encrypted to also provide secrecy between parties.
                        <br />
                        The first part is the header, which typically consists of two parts: the type of the token, which is JWT, and the hashing algorithm being used, such as HMAC SHA256 or RSA.
                        <br />
                        The second part is the payload, which contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims.
                        <br />
                        Registered claims: These are a set of predefined claims which are not mandatory but recommended, to provide a set of useful, interoperable claims. Some of them are: iss (issuer), exp (expiration time), sub (subject), aud (audience), and others.
                        <br />
                        Public claims: These can be defined at will by those using JWTs. But to avoid collisions they should be defined in the IANA JSON Web Token Registry or be defined as a URI that contains a collision resistant namespace.
                        <br />
                        Private claims: These are the custom claims created to share information between parties that agree on using them and are neither registered or public claims.
                        <br />
                        The third part is the signature, which is used to verify the message wasn't changed along the way. The signature is created by taking the encoded header, the encoded payload, a secret, the algorithm specified in the header, and signing that.
                        <br />
                        The signature is used to verify the message wasn't changed along the way. The signature is created by taking the encoded header, the encoded payload, a secret, the algorithm specified in the header, and signing that.
                    </p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is the difference between javascript and NodeJS?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                        JavaScript is a programming language that is used to make web pages interactive. Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.
                        <br />
                        JavaScript is a scripting language that is executed on the client-side, while Node.js is a server-side runtime environment that uses JavaScript.
                        <br />
                        JavaScript is a single-threaded language, while Node.js is a multi-threaded language.
                        <br />
                        JavaScript is a prototype-based language, while Node.js is an object-based language.
                        <br />
                        JavaScript is a loosely typed language, while Node.js is a strongly typed language.
                        <br />
                        JavaScript is a functional programming language, while Node.js is an object-oriented programming language.
                    </p>
                </details>
                <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How does NodeJS handle multiple requests at the same time?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                        Node.js is a single-threaded application, but it can support concurrency via the concept of event and callbacks. Every API of Node.js is asynchronous and being single-threaded, they use async function calls to maintain concurrency. Node uses observer pattern. Node thread keeps an event loop and whenever a task gets completed, it fires the corresponding event which signals the event-listener function to execute.
                        <br />
                        Node.js has multiple in-built events available through events module and EventEmitter class which are used to bind events and event-listeners as follows:
                        <br />
                        const events = require('events');
                        <br />
                        const eventEmitter = new events.EventEmitter();
                        <br />
                        Bind the connection event with the handler
                        <br />
                        eventEmitter.on('connection', connectHandler);
                        <br />
                        Fire the connection event
                        <br />
                        eventEmitter.emit('connection');
                        <br />
                        In this example, we have created an eventEmitter object using events module. We have assigned the event-handler to an event with the help of on() method and fired the event with the help of emit() method.
                    </p>
                </details>
            </div>
        </div>
    );
};

export default Blog;