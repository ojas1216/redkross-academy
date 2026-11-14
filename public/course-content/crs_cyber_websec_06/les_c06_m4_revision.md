## Revision

### Summary

Authorisation decides what an authenticated user may do; broken access control is the OWASP Top 10:2025 number one category (A01). Access-control models include RBAC (permissions via roles) and ABAC (permissions via attributes), governed by least privilege. Two checks matter: object-level ("may this user access THIS record?") and function-level ("may this user call THIS function at all?"). IDOR / broken object-level authorisation (CWE-639) exposes an object by client-supplied id with no ownership check - change /account?id=1001 to 1002 and read another user's order. Missing function-level control lets a user reach a privileged page/function without the role - the lab's /admin trusts a forgeable role cookie. Both break for the same reason: deciding from client-supplied data instead of the server-side session. Remediation: derive identity and role from the session, enforce object ownership and function-level role on every access, deny by default, and centralise and test authorisation. In the lab, IDOR (6.5) and broken /admin (8.2) are PRESENT on the vulnerable app and absent after hardening, confirmed by retest. Scanners miss these logic flaws, so human review is essential.

### Important concepts

RBAC/ABAC; least privilege; object- vs function-level authorisation; IDOR; client-trust root cause; deny by default.

### Key technical takeaways

decide authorisation from the session; enforce ownership and role server-side everywhere; deny by default; audit all object-by-id and privileged endpoints.

### Glossary

```text
authorisation  deciding what an authenticated user may do.
IDOR  insecure direct object reference; acting on a client id without an
        ownership check (CWE-639).
function-level access control  whether a user may invoke a privileged
        function at all.
RBAC  role-based access control.
least privilege  granting only the permissions needed.
```

### Common mistakes

looking up objects by id without ownership checks; trusting client cookies/fields/claims for role; protecting pages by obscurity; forgetting checks on new endpoints; relying on scanners to find logic flaws.

### Revision questions

​1. Differentiate object- and function-level authorisation. 2. What single check fixes the lab's IDOR? 3. Why is "not linking the admin page" not access control?
