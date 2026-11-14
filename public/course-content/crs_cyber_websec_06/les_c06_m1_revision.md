## Revision

### Summary

A web application is an untrusted browser talking to a trusted server over HTTP, a stateless request-response protocol (RFC 9110). Because the client is controlled by the user and any attacker, all security must be enforced on the server; client-side checks are for user experience only. Requests carry a method (GET safe/idempotent; POST for state change), headers and an optional body; responses carry a status (2xx/3xx/4xx/5xx), headers and a body. State is added with cookies (RFC 6265): the server sets a cookie, the browser returns it on every request, and this carries session identity. Cookie attributes are security-critical: HttpOnly blunts theft via XSS, Secure prevents HTTP leak, SameSite defends against CSRF. A session identifier must be random, unforgeable and protected; the lab's base64(username) token is neither. APIs are HTTP with structured data - the same principles apply over a wider attack surface. Each mechanic maps to a weakness: GET-for-state to CSRF, unencoded output to XSS, client-supplied ids to IDOR, missing headers to misconfiguration.

### Important concepts

trust boundary; statelessness; methods and status codes; cookie attributes; sessions; APIs.

### Key technical takeaways

enforce security server-side; never use GET for state change; protect session cookies with HttpOnly/Secure/SameSite; use random session ids; treat APIs as HTTP with the same rules.

### Glossary

```text
HTTP  Hypertext Transfer Protocol; a stateless request-response protocol.
cookie  a small value the server sets and the browser returns on each
        request, used to carry state/identity.
session  a server-side association of requests with one authenticated user.
trust boundary  the line between the untrusted client and the trusted
        server, where security must be enforced.
API  Application Programming Interface; HTTP endpoints, often returning
        JSON.
```

### Common mistakes

trusting client-side validation; using sequential or reversible session ids; omitting cookie attributes; changing state with GET; assuming APIs are exempt from web security rules.

### Revision questions

​1. Why is the client untrusted and what follows? 2. Name three cookie security attributes and the attack each prevents. 3. Why must session identifiers be random?
