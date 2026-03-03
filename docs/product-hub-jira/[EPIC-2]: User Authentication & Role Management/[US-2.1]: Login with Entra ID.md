# [US-2.1]: Login with Entra ID

**Jira:** [DPH-237](https://datacomgroup.atlassian.net/browse/DPH-237)


### Epic details

**Jira:** [DPH-236](https://datacomgroup.atlassian.net/browse/DPH-236)

| Field | Value |
|-------|--------|
| **Name** | [EPIC-2]: User Authentication & Role Management |
| **Description** | See below |
| **Work type** | Epic |
| **Status** | In Progress |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Priority** | Critical (P1) |
| **Linked work items** | — |

**Description:**

_No description._


### Story details

| Field | Value |
|-------|--------|
| **Name** | [US-2.1]: Login with Entra ID |
| **Description** | See below |
| **Work type** | User Story |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Priority** | Critical (P1) |
| **Story point estimate** | 3.5 |
| **Sprint** | DPH Sprint 2 |
| **Status** | In Progress |
| **Linked work items** | — |


---
**User Story:**  
As a customer (app-user and app-creator),  
I want to login using my existing Datacom Azure Entra ID credentials,  
So that I can use the Hub's core features

**Acceptance Criteria:**

1. **Given:** A customer clicks the `Login with Datacom` button  
**When:** They complete Entra ID authentication with @datacom.co.nz or @datacom.com credentials  
**Then:** They are logged in and redirected to Product Hub
2. **Given:** A customer has logged in before from the same browser  
**Then:** The page prompts `Login with Datacom` without re-entering credentials
3. "Remember me" functionality persists session across browser sessions
4. Authentication tokens (JWT) auto-refresh before expiry (1 hour token lifetime)
5. Auto-logout after 1 hour of inactivity
6. Logout button clears session and redirects to landing page
7. **Given:** First-time login  
**Then:** User profile is created from Entra ID data and user is redirected to Role Selection (US 2.3)
8. Failed authentication displays error notification with retry option

---

**Mock-up/Wireframe:** To be provided by UX designer

---

reference images

1. 
2. 
3. This and 2FA process → leads to designated page (TBC).


### Subtasks

#### [DPH-374] [2.1-UX] Tasks

**Jira:** [DPH-374](https://datacomgroup.atlassian.net/browse/DPH-374) · **Status:** Ready for QA Review

| Field | Value |
|-------|--------|
| **Name** | [2.1-UX] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Ready for QA Review |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

- [UX] Design login page with `Login with Datacom` button
- Design Profile Button Logout Flow

#### [DPH-568] [2.1-BE] Tasks

**Jira:** [DPH-568](https://datacomgroup.atlassian.net/browse/DPH-568) · **Status:** In Progress

| Field | Value |
|-------|--------|
| **Name** | [2.1-BE] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | In Progress |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Rithvik Sharma |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

1. [BE] Static web app URL creation on Azure Entra ID
2. [DEV BE] Configure Azure Entra ID Application
3. [DEV BE] Validate Entra ID Token & Allowed Domains
4. [DEV BE] User Profile Creation on First Login
5. [DEV BE] Issue & Refresh Hub JWT Tokens
6. [DEV BE] Session Management & Inactivity Handling
7. [DEV BE] Logout Endpoint
8. [DEV BE] Auth Status & First‑Time Login Endpoint

#### [DPH-361] [2.1-FE] Tasks

**Jira:** [DPH-361](https://datacomgroup.atlassian.net/browse/DPH-361) · **Status:** In Progress

| Field | Value |
|-------|--------|
| **Name** | [2.1-FE] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | In Progress |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Rithvik Sharma |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

## **Front‑End Task Breakdown**

### **1. Login Entry Page (Pre‑Auth Screen)**

- Create initial **Login / Security page**
- Display:

        - Datacom branding
        - App title and short description
        - Primary CTA: **“Sign in to continue”**
        - Supporting text indicating secure Datacom login
        - Support contact text
- Page shown only when user is unauthenticated
- Redirect authenticated users away from login page

---

### **2. Authentication Loading / Checking Screen**

- Create a dedicated **Auth Loading screen**
- Display:

        - Loading indicator
        - “Checking authentication status” message
- Shown during:

        - Silent SSO login
        - Entra ID redirect callback handling
        - Token refresh
- Controlled via shared auth loading state

---

### **3. Reference Existing Project for Authentication Implementation**

- Identify an existing Datacom project with a proven Azure Entra ID login flow
- Use **Cursor** to:

        - Inspect authentication setup and flow
        - Review MSAL configuration and redirect handling
        - Understand token storage and refresh logic
- Adapt the validated pattern to this project
- Ensure implementation aligns with Datacom security standards

---

### **4. Azure Entra ID Authentication Setup**

- Configure Azure Entra ID client using provided credentials:

        - Client ID
        - Tenant ID
        - Redirect URI(s)
- Implement login using supported library (e.g. MSAL)
- Restrict authentication to:

        - `@datacom.co.nz`
        - `@datacom.com`
- Hand off authentication UI to Entra ID (account selection, password, 2FA)

---

### **5. Global Auth State (Jotai)**

- Create Jotai atoms for shared authentication state:

        - Auth status (`unauthenticated`, `loading`, `authenticated`)
        - Auth tokens and expiry metadata
        - Basic user identity (from Entra ID claims)
- Make atoms accessible application‑wide
- Reset auth atoms on logout or auth failure

---

### **6. Successful Login Handling**

- On successful Entra ID authentication:

        - Extract JWT and user claims
        - Populate auth atoms
        - Transition from Loading screen
        - Redirect user to Product Hub landing page

---

### **7. Silent Login / Existing Session Handling**

- On application load:

        - Attempt silent Entra ID authentication
- If an existing session is found:

        - Authenticate user without re‑entering credentials
        - Skip login page
- Display Auth Loading screen while resolving session state

---

### **8. “Remember Me” Session Persistence**

- Persist minimal authentication data across browser sessions using `localStorage`
- On app startup:

        - Hydrate auth atoms from persisted data
        - Validate token freshness
- Ensure persisted data is cleared on logout

> Note: “Remember me” is implicit (no checkbox unless UX specifies otherwise)

---

### **9. Token Auto‑Refresh (1‑Hour Lifetime)**

- Track token expiry time in auth state
- Automatically refresh tokens before expiry using silent refresh
- Update auth atoms with refreshed tokens
- On refresh failure:

        - Clear auth state
        - Redirect to Login page

---

### **10. Inactivity Auto‑Logout (1 Hour)**

- Track last user activity timestamp in shared state
- Listen for user activity events:

        - Mouse movement
        - Keyboard input
        - Route changes
- Reset inactivity timer on interaction
- Automatically log user out after 1 hour of inactivity
- Redirect user to Login page

---

### **11. Logout Functionality**

- Add Logout button (location per UX)
- On logout:

        - Clear auth atoms
        - Clear persisted auth data
        - Redirect to Login / Landing page
- Ensure clean session reset

---

### **12. Route Protection (Auth Guards)**

- Protect authenticated routes using auth state
- Redirect unauthenticated users to Login page
- Use Loading screen while auth status is being resolved
- Prevent UI flicker during auth transitions

---

### **13. First‑Time Login Detection (Mocked Profile Logic)**

- Create shared state for user profile:

        - Profile exists / not exists
        - Role selection completed or not
- After login:

        - Check mocked profile storage
- If first‑time login:

        - Create user profile locally using Entra ID data
        - Redirect user to **Role Selection (US 2.3)**
- If returning user:

        - Redirect to Product Hub

---

### **14. Mocked User Profile Storage (Temporary)**

- Store user profile data locally (mock DB):

        - LocalStorage or in‑memory
- Populate profile state from mock data
- Ensure implementation can later be replaced with backend APIs

---

### **15. Failed Authentication Handling**

- Handle authentication failures:

        - Invalid credentials
        - Unauthorized email domain
        - Cancelled login
- Display error notification with retry option
- Ensure user remains unauthenticated on failure

---

### **16. 2FA / Extra Verification Support**

- Allow Azure Entra ID to manage 2FA and extra verification
- Handle redirect back into app post‑verification
- Resume login flow after successful verification
- Redirect to designated post‑auth page (TBC)

---

### **17. UX Alignment & Polish**

- Align Login and Loading screens with provided reference images
- Apply final UX wireframes once provided
- Add loading, error, and transition states
- Ensure accessibility (keyboard navigation, focus handling)

---

### **18. Replace Mock Profile with Backend Integration (Final Task)**

- Remove mocked profile storage
- Integrate backend endpoints for:

        - User profile lookup
        - User profile creation
- Populate profile state from backend responses
- Validate:

        - First‑time login → Role Selection
        - Returning user → Product Hub
- Final regression testing

---

## **Notes / Assumptions**

- Azure Entra ID authentication is implemented using a **validated pattern from an existing Datacom project**
- **Cursor may be used to inspect and adapt** authentication logic from the reference project
- Jotai is the single source of truth for auth and user state
- LocalStorage is used only for persistence, not as live state
- Inactivity logout is enforced client‑side
- User profile persistence is mocked initially and replaced later

---
---

### **2. Authentication Loading / Checking Screen**

- Create a dedicated **Auth Loading screen**
- Display:

        - Loading indicator
        - “Checking authentication status” message
- Shown during:

        - Silent SSO login
        - Entra ID redirect callback handling
        - Token refresh
- Controlled via shared auth loading state

---

### **3. Reference Existing Project for Authentication Implementation**

- Identify an existing Datacom project with a proven Azure Entra ID login flow
- Use **Cursor** to:

        - Inspect authentication setup and flow
        - Review MSAL configuration and redirect handling
        - Understand token storage and refresh logic
- Adapt the validated pattern to this project
- Ensure implementation aligns with Datacom security standards

---

### **4. Azure Entra ID Authentication Setup**

- Configure Azure Entra ID client using provided credentials:

        - Client ID
        - Tenant ID
        - Redirect URI(s)
- Implement login using supported library (e.g. MSAL)
- Restrict authentication to:

        - `@datacom.co.nz`
        - `@datacom.com`
- Hand off authentication UI to Entra ID (account selection, password, 2FA)

---

### **5. Global Auth State (Jotai)**

- Create Jotai atoms for shared authentication state:

        - Auth status (`unauthenticated`, `loading`, `authenticated`)
        - Auth tokens and expiry metadata
        - Basic user identity (from Entra ID claims)
- Make atoms accessible application‑wide
- Reset auth atoms on logout or auth failure

---

### **6. Successful Login Handling**

- On successful Entra ID authentication:

        - Extract JWT and user claims
        - Populate auth atoms
        - Transition from Loading screen
        - Redirect user to Product Hub landing page

---

### **7. Silent Login / Existing Session Handling**

- On application load:

        - Attempt silent Entra ID authentication
- If an existing session is found:

        - Authenticate user without re‑entering credentials
        - Skip login page
- Display Auth Loading screen while resolving session state

---

### **8. “Remember Me” Session Persistence**

- Persist minimal authentication data across browser sessions using `localStorage`
- On app startup:

        - Hydrate auth atoms from persisted data
        - Validate token freshness
- Ensure persisted data is cleared on logout

> Note: “Remember me” is implicit (no checkbox unless UX specifies otherwise)

---

### **9. Token Auto‑Refresh (1‑Hour Lifetime)**

- Track token expiry time in auth state
- Automatically refresh tokens before expiry using silent refresh
- Update auth atoms with refreshed tokens
- On refresh failure:

        - Clear auth state
        - Redirect to Login page

---

### **10. Inactivity Auto‑Logout (1 Hour)**

- Track last user activity timestamp in shared state
- Listen for user activity events:

        - Mouse movement
        - Keyboard input
        - Route changes
- Reset inactivity timer on interaction
- Automatically log user out after 1 hour of inactivity
- Redirect user to Login page

---

### **11. Logout Functionality**

- Add Logout button (location per UX)
- On logout:

        - Clear auth atoms
        - Clear persisted auth data
        - Redirect to Login / Landing page
- Ensure clean session reset

---

### **12. Route Protection (Auth Guards)**

- Protect authenticated routes using auth state
- Redirect unauthenticated users to Login page
- Use Loading screen while auth status is being resolved
- Prevent UI flicker during auth transitions

---

### **13. First‑Time Login Detection (Mocked Profile Logic)**

- Create shared state for user profile:

        - Profile exists / not exists
        - Role selection completed or not
- After login:

        - Check mocked profile storage
- If first‑time login:

        - Create user profile locally using Entra ID data
        - Redirect user to **Role Selection (US 2.3)**
- If returning user:

        - Redirect to Product Hub

---

### **14. Mocked User Profile Storage (Temporary)**

- Store user profile data locally (mock DB):

        - LocalStorage or in‑memory
- Populate profile state from mock data
- Ensure implementation can later be replaced with backend APIs

---

### **15. Failed Authentication Handling**

- Handle authentication failures:

        - Invalid credentials
        - Unauthorized email domain
        - Cancelled login
- Display error notification with retry option
- Ensure user remains unauthenticated on failure

---

### **16. 2FA / Extra Verification Support**

- Allow Azure Entra ID to manage 2FA and extra verification
- Handle redirect back into app post‑verification
- Resume login flow after successful verification
- Redirect to designated post‑auth page (TBC)

---

### **17. UX Alignment & Polish**

- Align Login and Loading screens with provided reference images
- Apply final UX wireframes once provided
- Add loading, error, and transition states
- Ensure accessibility (keyboard navigation, focus handling)

---

### **18. Replace Mock Profile with Backend Integration (Final Task)**

- Remove mocked profile storage
- Integrate backend endpoints for:

        - User profile lookup
        - User profile creation
- Populate profile state from backend responses
- Validate:

        - First‑time login → Role Selection
        - Returning user → Product Hub
- Final regression testing

---

## **Notes / Assumptions**

- Azure Entra ID authentication is implemented using a **validated pattern from an existing Datacom project**
- **Cursor may be used to inspect and adapt** authentication logic from the reference project
- Jotai is the single source of truth for auth and user state
- LocalStorage is used only for persistence, not as live state
- Inactivity logout is enforced client‑side
- User profile persistence is mocked initially and replaced later

---
---

### **2. Authentication Loading / Checking Screen**

- Create a dedicated **Auth Loading screen**
- Display:

        - Loading indicator
        - “Checking authentication status” message
- Shown during:

        - Silent SSO login
        - Entra ID redirect callback handling
        - Token refresh
- Controlled via shared auth loading state

---

### **3. Reference Existing Project for Authentication Implementation**

- Identify an existing Datacom project with a proven Azure Entra ID login flow
- Use **Cursor** to:

        - Inspect authentication setup and flow
        - Review MSAL configuration and redirect handling
        - Understand token storage and refresh logic
- Adapt the validated pattern to this project
- Ensure implementation aligns with Datacom security standards

---

### **4. Azure Entra ID Authentication Setup**

- Configure Azure Entra ID client using provided credentials:

        - Client ID
        - Tenant ID
        - Redirect URI(s)
- Implement login using supported library (e.g. MSAL)
- Restrict authentication to:

        - `@datacom.co.nz`
        - `@datacom.com`
- Hand off authentication UI to Entra ID (account selection, password, 2FA)

---

### **5. Global Auth State (Jotai)**

- Create Jotai atoms for shared authentication state:

        - Auth status (`unauthenticated`, `loading`, `authenticated`)
        - Auth tokens and expiry metadata
        - Basic user identity (from Entra ID claims)
- Make atoms accessible application‑wide
- Reset auth atoms on logout or auth failure

---

### **6. Successful Login Handling**

- On successful Entra ID authentication:

        - Extract JWT and user claims
        - Populate auth atoms
        - Transition from Loading screen
        - Redirect user to Product Hub landing page

---

### **7. Silent Login / Existing Session Handling**

- On application load:

        - Attempt silent Entra ID authentication
- If an existing session is found:

        - Authenticate user without re‑entering credentials
        - Skip login page
- Display Auth Loading screen while resolving session state

---

### **8. “Remember Me” Session Persistence**

- Persist minimal authentication data across browser sessions using `localStorage`
- On app startup:

        - Hydrate auth atoms from persisted data
        - Validate token freshness
- Ensure persisted data is cleared on logout

> Note: “Remember me” is implicit (no checkbox unless UX specifies otherwise)

---

### **9. Token Auto‑Refresh (1‑Hour Lifetime)**

- Track token expiry time in auth state
- Automatically refresh tokens before expiry using silent refresh
- Update auth atoms with refreshed tokens
- On refresh failure:

        - Clear auth state
        - Redirect to Login page

---

### **10. Inactivity Auto‑Logout (1 Hour)**

- Track last user activity timestamp in shared state
- Listen for user activity events:

        - Mouse movement
        - Keyboard input
        - Route changes
- Reset inactivity timer on interaction
- Automatically log user out after 1 hour of inactivity
- Redirect user to Login page

---

### **11. Logout Functionality**

- Add Logout button (location per UX)
- On logout:

        - Clear auth atoms
        - Clear persisted auth data
        - Redirect to Login / Landing page
- Ensure clean session reset

---

### **12. Route Protection (Auth Guards)**

- Protect authenticated routes using auth state
- Redirect unauthenticated users to Login page
- Use Loading screen while auth status is being resolved
- Prevent UI flicker during auth transitions

---

### **13. First‑Time Login Detection (Mocked Profile Logic)**

- Create shared state for user profile:

        - Profile exists / not exists
        - Role selection completed or not
- After login:

        - Check mocked profile storage
- If first‑time login:

        - Create user profile locally using Entra ID data
        - Redirect user to **Role Selection (US 2.3)**
- If returning user:

        - Redirect to Product Hub

---

### **14. Mocked User Profile Storage (Temporary)**

- Store user profile data locally (mock DB):

        - LocalStorage or in‑memory
- Populate profile state from mock data
- Ensure implementation can later be replaced with backend APIs

---

### **15. Failed Authentication Handling**

- Handle authentication failures:

        - Invalid credentials
        - Unauthorized email domain
        - Cancelled login
- Display error notification with retry option
- Ensure user remains unauthenticated on failure

---

### **16. 2FA / Extra Verification Support**

- Allow Azure Entra ID to manage 2FA and extra verification
- Handle redirect back into app post‑verification
- Resume login flow after successful verification
- Redirect to designated post‑auth page (TBC)

---

### **17. UX Alignment & Polish**

- Align Login and Loading screens with provided reference images
- Apply final UX wireframes once provided
- Add loading, error, and transition states
- Ensure accessibility (keyboard navigation, focus handling)

---

### **18. Replace Mock Profile with Backend Integration (Final Task)**

- Remove mocked profile storage
- Integrate backend endpoints for:

        - User profile lookup
        - User profile creation
- Populate profile state from backend responses
- Validate:

        - First‑time login → Role Selection
        - Returning user → Product Hub
- Final regression testing

---

## **Notes / Assumptions**

- Azure Entra ID authentication is implemented using a **validated pattern from an existing Datacom project**
- **Cursor may be used to inspect and adapt** authentication logic from the reference project
- Jotai is the single source of truth for auth and user state
- LocalStorage is used only for persistence, not as live state
- Inactivity logout is enforced client‑side
- User profile persistence is mocked initially and replaced later

#### [DPH-568] [2.1-BE] Tasks

**Jira:** [DPH-568](https://datacomgroup.atlassian.net/browse/DPH-568) · **Status:** In Progress

| Field | Value |
|-------|--------|
| **Name** | [2.1-BE] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | In Progress |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Rithvik Sharma |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

1. [BE] Static web app URL creation on Azure Entra ID
2. [DEV BE] Configure Azure Entra ID Application
3. [DEV BE] Validate Entra ID Token & Allowed Domains
4. [DEV BE] User Profile Creation on First Login
5. [DEV BE] Issue & Refresh Hub JWT Tokens
6. [DEV BE] Session Management & Inactivity Handling
7. [DEV BE] Logout Endpoint
8. [DEV BE] Auth Status & First‑Time Login Endpoint

---
---

### **2. Authentication Loading / Checking Screen**

- Create a dedicated **Auth Loading screen**
- Display:

        - Loading indicator
        - “Checking authentication status” message
- Shown during:

        - Silent SSO login
        - Entra ID redirect callback handling
        - Token refresh
- Controlled via shared auth loading state

---

### **3. Reference Existing Project for Authentication Implementation**

- Identify an existing Datacom project with a proven Azure Entra ID login flow
- Use **Cursor** to:

        - Inspect authentication setup and flow
        - Review MSAL configuration and redirect handling
        - Understand token storage and refresh logic
- Adapt the validated pattern to this project
- Ensure implementation aligns with Datacom security standards

---

### **4. Azure Entra ID Authentication Setup**

- Configure Azure Entra ID client using provided credentials:

        - Client ID
        - Tenant ID
        - Redirect URI(s)
- Implement login using supported library (e.g. MSAL)
- Restrict authentication to:

        - `@datacom.co.nz`
        - `@datacom.com`
- Hand off authentication UI to Entra ID (account selection, password, 2FA)

---

### **5. Global Auth State (Jotai)**

- Create Jotai atoms for shared authentication state:

        - Auth status (`unauthenticated`, `loading`, `authenticated`)
        - Auth tokens and expiry metadata
        - Basic user identity (from Entra ID claims)
- Make atoms accessible application‑wide
- Reset auth atoms on logout or auth failure

---

### **6. Successful Login Handling**

- On successful Entra ID authentication:

        - Extract JWT and user claims
        - Populate auth atoms
        - Transition from Loading screen
        - Redirect user to Product Hub landing page

---

### **7. Silent Login / Existing Session Handling**

- On application load:

        - Attempt silent Entra ID authentication
- If an existing session is found:

        - Authenticate user without re‑entering credentials
        - Skip login page
- Display Auth Loading screen while resolving session state

---

### **8. “Remember Me” Session Persistence**

- Persist minimal authentication data across browser sessions using `localStorage`
- On app startup:

        - Hydrate auth atoms from persisted data
        - Validate token freshness
- Ensure persisted data is cleared on logout

> Note: “Remember me” is implicit (no checkbox unless UX specifies otherwise)

---

### **9. Token Auto‑Refresh (1‑Hour Lifetime)**

- Track token expiry time in auth state
- Automatically refresh tokens before expiry using silent refresh
- Update auth atoms with refreshed tokens
- On refresh failure:

        - Clear auth state
        - Redirect to Login page

---

### **10. Inactivity Auto‑Logout (1 Hour)**

- Track last user activity timestamp in shared state
- Listen for user activity events:

        - Mouse movement
        - Keyboard input
        - Route changes
- Reset inactivity timer on interaction
- Automatically log user out after 1 hour of inactivity
- Redirect user to Login page

---

### **11. Logout Functionality**

- Add Logout button (location per UX)
- On logout:

        - Clear auth atoms
        - Clear persisted auth data
        - Redirect to Login / Landing page
- Ensure clean session reset

---

### **12. Route Protection (Auth Guards)**

- Protect authenticated routes using auth state
- Redirect unauthenticated users to Login page
- Use Loading screen while auth status is being resolved
- Prevent UI flicker during auth transitions

---

### **13. First‑Time Login Detection (Mocked Profile Logic)**

- Create shared state for user profile:

        - Profile exists / not exists
        - Role selection completed or not
- After login:

        - Check mocked profile storage
- If first‑time login:

        - Create user profile locally using Entra ID data
        - Redirect user to **Role Selection (US 2.3)**
- If returning user:

        - Redirect to Product Hub

---

### **14. Mocked User Profile Storage (Temporary)**

- Store user profile data locally (mock DB):

        - LocalStorage or in‑memory
- Populate profile state from mock data
- Ensure implementation can later be replaced with backend APIs

---

### **15. Failed Authentication Handling**

- Handle authentication failures:

        - Invalid credentials
        - Unauthorized email domain
        - Cancelled login
- Display error notification with retry option
- Ensure user remains unauthenticated on failure

---

### **16. 2FA / Extra Verification Support**

- Allow Azure Entra ID to manage 2FA and extra verification
- Handle redirect back into app post‑verification
- Resume login flow after successful verification
- Redirect to designated post‑auth page (TBC)

---

### **17. UX Alignment & Polish**

- Align Login and Loading screens with provided reference images
- Apply final UX wireframes once provided
- Add loading, error, and transition states
- Ensure accessibility (keyboard navigation, focus handling)

---

### **18. Replace Mock Profile with Backend Integration (Final Task)**

- Remove mocked profile storage
- Integrate backend endpoints for:

        - User profile lookup
        - User profile creation
- Populate profile state from backend responses
- Validate:

        - First‑time login → Role Selection
        - Returning user → Product Hub
- Final regression testing

---

## **Notes / Assumptions**

- Azure Entra ID authentication is implemented using a **validated pattern from an existing Datacom project**
- **Cursor may be used to inspect and adapt** authentication logic from the reference project
- Jotai is the single source of truth for auth and user state
- LocalStorage is used only for persistence, not as live state
- Inactivity logout is enforced client‑side
- User profile persistence is mocked initially and replaced later

#### [DPH-568] [2.1-BE] Tasks

**Jira:** [DPH-568](https://datacomgroup.atlassian.net/browse/DPH-568) · **Status:** In Progress

| Field | Value |
|-------|--------|
| **Name** | [2.1-BE] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | In Progress |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Rithvik Sharma |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

1. [BE] Static web app URL creation on Azure Entra ID
2. [DEV BE] Configure Azure Entra ID Application
3. [DEV BE] Validate Entra ID Token & Allowed Domains
4. [DEV BE] User Profile Creation on First Login
5. [DEV BE] Issue & Refresh Hub JWT Tokens
6. [DEV BE] Session Management & Inactivity Handling
7. [DEV BE] Logout Endpoint
8. [DEV BE] Auth Status & First‑Time Login Endpoint

---
---

### **2. Authentication Loading / Checking Screen**

- Create a dedicated **Auth Loading screen**
- Display:

        - Loading indicator
        - “Checking authentication status” message
- Shown during:

        - Silent SSO login
        - Entra ID redirect callback handling
        - Token refresh
- Controlled via shared auth loading state

---

### **3. Reference Existing Project for Authentication Implementation**

- Identify an existing Datacom project with a proven Azure Entra ID login flow
- Use **Cursor** to:

        - Inspect authentication setup and flow
        - Review MSAL configuration and redirect handling
        - Understand token storage and refresh logic
- Adapt the validated pattern to this project
- Ensure implementation aligns with Datacom security standards

---

### **4. Azure Entra ID Authentication Setup**

- Configure Azure Entra ID client using provided credentials:

        - Client ID
        - Tenant ID
        - Redirect URI(s)
- Implement login using supported library (e.g. MSAL)
- Restrict authentication to:

        - `@datacom.co.nz`
        - `@datacom.com`
- Hand off authentication UI to Entra ID (account selection, password, 2FA)

---

### **5. Global Auth State (Jotai)**

- Create Jotai atoms for shared authentication state:

        - Auth status (`unauthenticated`, `loading`, `authenticated`)
        - Auth tokens and expiry metadata
        - Basic user identity (from Entra ID claims)
- Make atoms accessible application‑wide
- Reset auth atoms on logout or auth failure

---

### **6. Successful Login Handling**

- On successful Entra ID authentication:

        - Extract JWT and user claims
        - Populate auth atoms
        - Transition from Loading screen
        - Redirect user to Product Hub landing page

---

### **7. Silent Login / Existing Session Handling**

- On application load:

        - Attempt silent Entra ID authentication
- If an existing session is found:

        - Authenticate user without re‑entering credentials
        - Skip login page
- Display Auth Loading screen while resolving session state

---

### **8. “Remember Me” Session Persistence**

- Persist minimal authentication data across browser sessions using `localStorage`
- On app startup:

        - Hydrate auth atoms from persisted data
        - Validate token freshness
- Ensure persisted data is cleared on logout

> Note: “Remember me” is implicit (no checkbox unless UX specifies otherwise)

---

### **9. Token Auto‑Refresh (1‑Hour Lifetime)**

- Track token expiry time in auth state
- Automatically refresh tokens before expiry using silent refresh
- Update auth atoms with refreshed tokens
- On refresh failure:

        - Clear auth state
        - Redirect to Login page

---

### **10. Inactivity Auto‑Logout (1 Hour)**

- Track last user activity timestamp in shared state
- Listen for user activity events:

        - Mouse movement
        - Keyboard input
        - Route changes
- Reset inactivity timer on interaction
- Automatically log user out after 1 hour of inactivity
- Redirect user to Login page

---

### **11. Logout Functionality**

- Add Logout button (location per UX)
- On logout:

        - Clear auth atoms
        - Clear persisted auth data
        - Redirect to Login / Landing page
- Ensure clean session reset

---

### **12. Route Protection (Auth Guards)**

- Protect authenticated routes using auth state
- Redirect unauthenticated users to Login page
- Use Loading screen while auth status is being resolved
- Prevent UI flicker during auth transitions

---

### **13. First‑Time Login Detection (Mocked Profile Logic)**

- Create shared state for user profile:

        - Profile exists / not exists
        - Role selection completed or not
- After login:

        - Check mocked profile storage
- If first‑time login:

        - Create user profile locally using Entra ID data
        - Redirect user to **Role Selection (US 2.3)**
- If returning user:

        - Redirect to Product Hub

---

### **14. Mocked User Profile Storage (Temporary)**

- Store user profile data locally (mock DB):

        - LocalStorage or in‑memory
- Populate profile state from mock data
- Ensure implementation can later be replaced with backend APIs

---

### **15. Failed Authentication Handling**

- Handle authentication failures:

        - Invalid credentials
        - Unauthorized email domain
        - Cancelled login
- Display error notification with retry option
- Ensure user remains unauthenticated on failure

---

### **16. 2FA / Extra Verification Support**

- Allow Azure Entra ID to manage 2FA and extra verification
- Handle redirect back into app post‑verification
- Resume login flow after successful verification
- Redirect to designated post‑auth page (TBC)

---

### **17. UX Alignment & Polish**

- Align Login and Loading screens with provided reference images
- Apply final UX wireframes once provided
- Add loading, error, and transition states
- Ensure accessibility (keyboard navigation, focus handling)

---

### **18. Replace Mock Profile with Backend Integration (Final Task)**

- Remove mocked profile storage
- Integrate backend endpoints for:

        - User profile lookup
        - User profile creation
- Populate profile state from backend responses
- Validate:

        - First‑time login → Role Selection
        - Returning user → Product Hub
- Final regression testing

---

## **Notes / Assumptions**

- Azure Entra ID authentication is implemented using a **validated pattern from an existing Datacom project**
- **Cursor may be used to inspect and adapt** authentication logic from the reference project
- Jotai is the single source of truth for auth and user state
- LocalStorage is used only for persistence, not as live state
- Inactivity logout is enforced client‑side
- User profile persistence is mocked initially and replaced later

#### [DPH-568] [2.1-BE] Tasks

**Jira:** [DPH-568](https://datacomgroup.atlassian.net/browse/DPH-568) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [2.1-BE] Tasks |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Rithvik Sharma |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

1. [BE] Static web app URL creation on Azure Entra ID
2. [DEV BE] Configure Azure Entra ID Application
3. [DEV BE] Validate Entra ID Token & Allowed Domains
4. [DEV BE] User Profile Creation on First Login
5. [DEV BE] Issue & Refresh Hub JWT Tokens
6. [DEV BE] Session Management & Inactivity Handling
7. [DEV BE] Logout Endpoint
8. [DEV BE] Auth Status & First‑Time Login Endpoint

---
---

### **2. Authentication Loading / Checking Screen**

- Create a dedicated **Auth Loading screen**
- Display:

        - Loading indicator
        - “Checking authentication status” message
- Shown during:

        - Silent SSO login
        - Entra ID redirect callback handling
        - Token refresh
- Controlled via shared auth loading state

---

### **3. Reference Existing Project for Authentication Implementation**

- Identify an existing Datacom project with a proven Azure Entra ID login flow
- Use **Cursor** to:

        - Inspect authentication setup and flow
        - Review MSAL configuration and redirect handling
        - Understand token storage and refresh logic
- Adapt the validated pattern to this project
- Ensure implementation aligns with Datacom security standards

---

### **4. Azure Entra ID Authentication Setup**

- Configure Azure Entra ID client using provided credentials:

        - Client ID
        - Tenant ID
        - Redirect URI(s)
- Implement login using supported library (e.g. MSAL)
- Restrict authentication to:

        - `@datacom.co.nz`
        - `@datacom.com`
- Hand off authentication UI to Entra ID (account selection, password, 2FA)

---

### **5. Global Auth State (Jotai)**

- Create Jotai atoms for shared authentication state:

        - Auth status (`unauthenticated`, `loading`, `authenticated`)
        - Auth tokens and expiry metadata
        - Basic user identity (from Entra ID claims)
- Make atoms accessible application‑wide
- Reset auth atoms on logout or auth failure

---

### **6. Successful Login Handling**

- On successful Entra ID authentication:

        - Extract JWT and user claims
        - Populate auth atoms
        - Transition from Loading screen
        - Redirect user to Product Hub landing page

---

### **7. Silent Login / Existing Session Handling**

- On application load:

        - Attempt silent Entra ID authentication
- If an existing session is found:

        - Authenticate user without re‑entering credentials
        - Skip login page
- Display Auth Loading screen while resolving session state

---

### **8. “Remember Me” Session Persistence**

- Persist minimal authentication data across browser sessions using `localStorage`
- On app startup:

        - Hydrate auth atoms from persisted data
        - Validate token freshness
- Ensure persisted data is cleared on logout

> Note: “Remember me” is implicit (no checkbox unless UX specifies otherwise)

---

### **9. Token Auto‑Refresh (1‑Hour Lifetime)**

- Track token expiry time in auth state
- Automatically refresh tokens before expiry using silent refresh
- Update auth atoms with refreshed tokens
- On refresh failure:

        - Clear auth state
        - Redirect to Login page

---

### **10. Inactivity Auto‑Logout (1 Hour)**

- Track last user activity timestamp in shared state
- Listen for user activity events:

        - Mouse movement
        - Keyboard input
        - Route changes
- Reset inactivity timer on interaction
- Automatically log user out after 1 hour of inactivity
- Redirect user to Login page

---

### **11. Logout Functionality**

- Add Logout button (location per UX)
- On logout:

        - Clear auth atoms
        - Clear persisted auth data
        - Redirect to Login / Landing page
- Ensure clean session reset

---

### **12. Route Protection (Auth Guards)**

- Protect authenticated routes using auth state
- Redirect unauthenticated users to Login page
- Use Loading screen while auth status is being resolved
- Prevent UI flicker during auth transitions

---

### **13. First‑Time Login Detection (Mocked Profile Logic)**

- Create shared state for user profile:

        - Profile exists / not exists
        - Role selection completed or not
- After login:

        - Check mocked profile storage
- If first‑time login:

        - Create user profile locally using Entra ID data
        - Redirect user to **Role Selection (US 2.3)**
- If returning user:

        - Redirect to Product Hub

---

### **14. Mocked User Profile Storage (Temporary)**

- Store user profile data locally (mock DB):

        - LocalStorage or in‑memory
- Populate profile state from mock data
- Ensure implementation can later be replaced with backend APIs

---

### **15. Failed Authentication Handling**

- Handle authentication failures:

        - Invalid credentials
        - Unauthorized email domain
        - Cancelled login
- Display error notification with retry option
- Ensure user remains unauthenticated on failure

---

### **16. 2FA / Extra Verification Support**

- Allow Azure Entra ID to manage 2FA and extra verification
- Handle redirect back into app post‑verification
- Resume login flow after successful verification
- Redirect to designated post‑auth page (TBC)

---

### **17. UX Alignment & Polish**

- Align Login and Loading screens with provided reference images
- Apply final UX wireframes once provided
- Add loading, error, and transition states
- Ensure accessibility (keyboard navigation, focus handling)

---

### **18. Replace Mock Profile with Backend Integration (Final Task)**

- Remove mocked profile storage
- Integrate backend endpoints for:

        - User profile lookup
        - User profile creation
- Populate profile state from backend responses
- Validate:

        - First‑time login → Role Selection
        - Returning user → Product Hub
- Final regression testing

---

## **Notes / Assumptions**

- Azure Entra ID authentication is implemented using a **validated pattern from an existing Datacom project**
- **Cursor may be used to inspect and adapt** authentication logic from the reference project
- Jotai is the single source of truth for auth and user state
- LocalStorage is used only for persistence, not as live state
- Inactivity logout is enforced client‑side
- User profile persistence is mocked initially and replaced later

#### [DPH-568] [2.1-BE] Tasks

**Jira:** [DPH-568](https://datacomgroup.atlassian.net/browse/DPH-568) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [2.1-BE] Tasks |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Rithvik Sharma |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

1. [BE] Static web app URL creation on Azure Entra ID
2. [DEV BE] Configure Azure Entra ID Application
3. [DEV BE] Validate Entra ID Token & Allowed Domains
4. [DEV BE] User Profile Creation on First Login
5. [DEV BE] Issue & Refresh Hub JWT Tokens
6. [DEV BE] Session Management & Inactivity Handling
7. [DEV BE] Logout Endpoint
8. [DEV BE] Auth Status & First‑Time Login Endpoint

---
---

### **2. Authentication Loading / Checking Screen**

- Create a dedicated **Auth Loading screen**
- Display:

        - Loading indicator
        - “Checking authentication status” message
- Shown during:

        - Silent SSO login
        - Entra ID redirect callback handling
        - Token refresh
- Controlled via shared auth loading state

---

### **3. Reference Existing Project for Authentication Implementation**

- Identify an existing Datacom project with a proven Azure Entra ID login flow
- Use **Cursor** to:

        - Inspect authentication setup and flow
        - Review MSAL configuration and redirect handling
        - Understand token storage and refresh logic
- Adapt the validated pattern to this project
- Ensure implementation aligns with Datacom security standards

---

### **4. Azure Entra ID Authentication Setup**

- Configure Azure Entra ID client using provided credentials:

        - Client ID
        - Tenant ID
        - Redirect URI(s)
- Implement login using supported library (e.g. MSAL)
- Restrict authentication to:

        - `@datacom.co.nz`
        - `@datacom.com`
- Hand off authentication UI to Entra ID (account selection, password, 2FA)

---

### **5. Global Auth State (Jotai)**

- Create Jotai atoms for shared authentication state:

        - Auth status (`unauthenticated`, `loading`, `authenticated`)
        - Auth tokens and expiry metadata
        - Basic user identity (from Entra ID claims)
- Make atoms accessible application‑wide
- Reset auth atoms on logout or auth failure

---

### **6. Successful Login Handling**

- On successful Entra ID authentication:

        - Extract JWT and user claims
        - Populate auth atoms
        - Transition from Loading screen
        - Redirect user to Product Hub landing page

---

### **7. Silent Login / Existing Session Handling**

- On application load:

        - Attempt silent Entra ID authentication
- If an existing session is found:

        - Authenticate user without re‑entering credentials
        - Skip login page
- Display Auth Loading screen while resolving session state

---

### **8. “Remember Me” Session Persistence**

- Persist minimal authentication data across browser sessions using `localStorage`
- On app startup:

        - Hydrate auth atoms from persisted data
        - Validate token freshness
- Ensure persisted data is cleared on logout

> Note: “Remember me” is implicit (no checkbox unless UX specifies otherwise)

---

### **9. Token Auto‑Refresh (1‑Hour Lifetime)**

- Track token expiry time in auth state
- Automatically refresh tokens before expiry using silent refresh
- Update auth atoms with refreshed tokens
- On refresh failure:

        - Clear auth state
        - Redirect to Login page

---

### **10. Inactivity Auto‑Logout (1 Hour)**

- Track last user activity timestamp in shared state
- Listen for user activity events:

        - Mouse movement
        - Keyboard input
        - Route changes
- Reset inactivity timer on interaction
- Automatically log user out after 1 hour of inactivity
- Redirect user to Login page

---

### **11. Logout Functionality**

- Add Logout button (location per UX)
- On logout:

        - Clear auth atoms
        - Clear persisted auth data
        - Redirect to Login / Landing page
- Ensure clean session reset

---

### **12. Route Protection (Auth Guards)**

- Protect authenticated routes using auth state
- Redirect unauthenticated users to Login page
- Use Loading screen while auth status is being resolved
- Prevent UI flicker during auth transitions

---

### **13. First‑Time Login Detection (Mocked Profile Logic)**

- Create shared state for user profile:

        - Profile exists / not exists
        - Role selection completed or not
- After login:

        - Check mocked profile storage
- If first‑time login:

        - Create user profile locally using Entra ID data
        - Redirect user to **Role Selection (US 2.3)**
- If returning user:

        - Redirect to Product Hub

---

### **14. Mocked User Profile Storage (Temporary)**

- Store user profile data locally (mock DB):

        - LocalStorage or in‑memory
- Populate profile state from mock data
- Ensure implementation can later be replaced with backend APIs

---

### **15. Failed Authentication Handling**

- Handle authentication failures:

        - Invalid credentials
        - Unauthorized email domain
        - Cancelled login
- Display error notification with retry option
- Ensure user remains unauthenticated on failure

---

### **16. 2FA / Extra Verification Support**

- Allow Azure Entra ID to manage 2FA and extra verification
- Handle redirect back into app post‑verification
- Resume login flow after successful verification
- Redirect to designated post‑auth page (TBC)

---

### **17. UX Alignment & Polish**

- Align Login and Loading screens with provided reference images
- Apply final UX wireframes once provided
- Add loading, error, and transition states
- Ensure accessibility (keyboard navigation, focus handling)

---

### **18. Replace Mock Profile with Backend Integration (Final Task)**

- Remove mocked profile storage
- Integrate backend endpoints for:

        - User profile lookup
        - User profile creation
- Populate profile state from backend responses
- Validate:

        - First‑time login → Role Selection
        - Returning user → Product Hub
- Final regression testing

---

## **Notes / Assumptions**

- Azure Entra ID authentication is implemented using a **validated pattern from an existing Datacom project**
- **Cursor may be used to inspect and adapt** authentication logic from the reference project
- Jotai is the single source of truth for auth and user state
- LocalStorage is used only for persistence, not as live state
- Inactivity logout is enforced client‑side
- User profile persistence is mocked initially and replaced later

#### [DPH-568] [2.1-BE] Tasks

**Jira:** [DPH-568](https://datacomgroup.atlassian.net/browse/DPH-568) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [2.1-BE] Tasks |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Rithvik Sharma |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

1. [BE] Static web app URL creation on Azure Entra ID
2. [DEV BE] Configure Azure Entra ID Application
3. [DEV BE] Validate Entra ID Token & Allowed Domains
4. [DEV BE] User Profile Creation on First Login
5. [DEV BE] Issue & Refresh Hub JWT Tokens
6. [DEV BE] Session Management & Inactivity Handling
7. [DEV BE] Logout Endpoint
8. [DEV BE] Auth Status & First‑Time Login Endpoint

---
---

### **2. Authentication Loading / Checking Screen**

- Create a dedicated **Auth Loading screen**
- Display:

        - Loading indicator
        - “Checking authentication status” message
- Shown during:

        - Silent SSO login
        - Entra ID redirect callback handling
        - Token refresh
- Controlled via shared auth loading state

---

### **3. Reference Existing Project for Authentication Implementation**

- Identify an existing Datacom project with a proven Azure Entra ID login flow
- Use **Cursor** to:

        - Inspect authentication setup and flow
        - Review MSAL configuration and redirect handling
        - Understand token storage and refresh logic
- Adapt the validated pattern to this project
- Ensure implementation aligns with Datacom security standards

---

### **4. Azure Entra ID Authentication Setup**

- Configure Azure Entra ID client using provided credentials:

        - Client ID
        - Tenant ID
        - Redirect URI(s)
- Implement login using supported library (e.g. MSAL)
- Restrict authentication to:

        - `@datacom.co.nz`
        - `@datacom.com`
- Hand off authentication UI to Entra ID (account selection, password, 2FA)

---

### **5. Global Auth State (Jotai)**

- Create Jotai atoms for shared authentication state:

        - Auth status (`unauthenticated`, `loading`, `authenticated`)
        - Auth tokens and expiry metadata
        - Basic user identity (from Entra ID claims)
- Make atoms accessible application‑wide
- Reset auth atoms on logout or auth failure

---

### **6. Successful Login Handling**

- On successful Entra ID authentication:

        - Extract JWT and user claims
        - Populate auth atoms
        - Transition from Loading screen
        - Redirect user to Product Hub landing page

---

### **7. Silent Login / Existing Session Handling**

- On application load:

        - Attempt silent Entra ID authentication
- If an existing session is found:

        - Authenticate user without re‑entering credentials
        - Skip login page
- Display Auth Loading screen while resolving session state

---

### **8. “Remember Me” Session Persistence**

- Persist minimal authentication data across browser sessions using `localStorage`
- On app startup:

        - Hydrate auth atoms from persisted data
        - Validate token freshness
- Ensure persisted data is cleared on logout

> Note: “Remember me” is implicit (no checkbox unless UX specifies otherwise)

---

### **9. Token Auto‑Refresh (1‑Hour Lifetime)**

- Track token expiry time in auth state
- Automatically refresh tokens before expiry using silent refresh
- Update auth atoms with refreshed tokens
- On refresh failure:

        - Clear auth state
        - Redirect to Login page

---

### **10. Inactivity Auto‑Logout (1 Hour)**

- Track last user activity timestamp in shared state
- Listen for user activity events:

        - Mouse movement
        - Keyboard input
        - Route changes
- Reset inactivity timer on interaction
- Automatically log user out after 1 hour of inactivity
- Redirect user to Login page

---

### **11. Logout Functionality**

- Add Logout button (location per UX)
- On logout:

        - Clear auth atoms
        - Clear persisted auth data
        - Redirect to Login / Landing page
- Ensure clean session reset

---

### **12. Route Protection (Auth Guards)**

- Protect authenticated routes using auth state
- Redirect unauthenticated users to Login page
- Use Loading screen while auth status is being resolved
- Prevent UI flicker during auth transitions

---

### **13. First‑Time Login Detection (Mocked Profile Logic)**

- Create shared state for user profile:

        - Profile exists / not exists
        - Role selection completed or not
- After login:

        - Check mocked profile storage
- If first‑time login:

        - Create user profile locally using Entra ID data
        - Redirect user to **Role Selection (US 2.3)**
- If returning user:

        - Redirect to Product Hub

---

### **14. Mocked User Profile Storage (Temporary)**

- Store user profile data locally (mock DB):

        - LocalStorage or in‑memory
- Populate profile state from mock data
- Ensure implementation can later be replaced with backend APIs

---

### **15. Failed Authentication Handling**

- Handle authentication failures:

        - Invalid credentials
        - Unauthorized email domain
        - Cancelled login
- Display error notification with retry option
- Ensure user remains unauthenticated on failure

---

### **16. 2FA / Extra Verification Support**

- Allow Azure Entra ID to manage 2FA and extra verification
- Handle redirect back into app post‑verification
- Resume login flow after successful verification
- Redirect to designated post‑auth page (TBC)

---

### **17. UX Alignment & Polish**

- Align Login and Loading screens with provided reference images
- Apply final UX wireframes once provided
- Add loading, error, and transition states
- Ensure accessibility (keyboard navigation, focus handling)

---

### **18. Replace Mock Profile with Backend Integration (Final Task)**

- Remove mocked profile storage
- Integrate backend endpoints for:

        - User profile lookup
        - User profile creation
- Populate profile state from backend responses
- Validate:

        - First‑time login → Role Selection
        - Returning user → Product Hub
- Final regression testing

---

## **Notes / Assumptions**

- Azure Entra ID authentication is implemented using a **validated pattern from an existing Datacom project**
- **Cursor may be used to inspect and adapt** authentication logic from the reference project
- Jotai is the single source of truth for auth and user state
- LocalStorage is used only for persistence, not as live state
- Inactivity logout is enforced client‑side
- User profile persistence is mocked initially and replaced later

#### [DPH-568] [2.1-BE] Tasks

**Jira:** [DPH-568](https://datacomgroup.atlassian.net/browse/DPH-568) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [2.1-BE] Tasks |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Rithvik Sharma |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

1. [BE] Static web app URL creation on Azure Entra ID
2. [DEV BE] Configure Azure Entra ID Application
3. [DEV BE] Validate Entra ID Token & Allowed Domains
4. [DEV BE] User Profile Creation on First Login
5. [DEV BE] Issue & Refresh Hub JWT Tokens
6. [DEV BE] Session Management & Inactivity Handling
7. [DEV BE] Logout Endpoint
8. [DEV BE] Auth Status & First‑Time Login Endpoint

---
---
---
---
---
---
---
---
