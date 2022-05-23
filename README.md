# Documentation for LaMa-Project

## Authors: (La)rs & (Ma)ds

## Link to [API][1]

### Description: This project was made for an exam semester project on Webdevelopment 2022. (To do App)

### Stack: MERN - Mongo Express React Node

# Testing

**Test-utils.jsx:**
Imports all providers and ensures they are usable.
These are then added into the custom renderer, which is used instead of the regular Jest renderer.
This file also adds all companion packages from the testing library, to be used in a single import.
We have also done frontend testing with Jest and react-testing-library. Unit test of all components below, and two integration tests for login/register.

# Middleware

Http-proxy-middleware - setupProxy.js:
This file ensures that if you write the path /lama it will be automatically targeted to heroku endpoint.
It also allows multiple endpoints for future api’s.

**Axios:**
a promised based HTTP client

**ReactQuery:**
configurable observer that can be used for data fetching and state management.

**Moment:**
Used for date-management and formatting.

**React-Router-Dom:**
Imported to enable easier routing functionality in React applications.

# Application

**App.js + index.js:**
Implements all providers from context and middleware such as reactQuery and React-Router-Dom.
It is also the start of the main html object, where sub components are rendered into.

## Hooks

**getHooks.js:**
A collection of custom hooks for sending requests and receiving responses from the backend through the URL.

**putHooks.js**
A collection of custom hooks for replacing targeted data from the backend with a requested payload. Can be used to update or create a new resource.

**index.js:**
This file contains all custom hook imports and exports them to a single endpoint.
These custom hooks can be re-used anywhere throughout the application tree by calling this file.

## Helpers

**index.js:**
This file exports functions used throughout the application tree for getting project titles and generating random id for project id’s.
General helper file.

## Context

Context provides a way to pass data through the component tree, without having to pass props down manually at every level.
Here we define the props and data that we want to have accessible globally.

**user-context.js:**
Used for state management of user authentication.

**selected-project-context.js:**
Used for state management for selecting projects in the project list.

**selected-collab-project-context.js:**
Used for state management for selecting projects in the collaborator-project list.

**selected-inbox-context.js:**
Used for state management for selecting projects in the inbox, today, next seven days tab.

**index.js:**
This file contains all context imports and exports them to a single endpoint.
These contexts can be re-used anywhere throughout the application tree by calling this file.

## Constants

**index.js:**
Used to store variables that will NEVER change, and used throughout the application, in an array of objects.

## Layout components

The layout folder holds all of the components which make up the general structure and layout of the application itself.

**Header.js:**
The header component includes the top navigation with a list of icons used for quick task adding, changing displaymode(view only) and a logout button.

**FullPageContent.js:**
This file is used for displaying the login/register component.

**Content.js:**
The content component includes the sidebar and includes tasks in “To Do, Doing, Done”.
The tasks section is displayed depending on which of the items in the sidebar component is selected.

**Sidebar.js:**
The sidebar component includes the general layout for the project management part of the application. With three sets of lists, the first being generic Inbox, Today and Next seven days of all tasks. The second being the projects the user has created. and lastly the third being a list of all projects a user is a collaborator on.

## Individual components

The individual components are standalone components that can be used throughout the application.

**FormComponent.js:**
This file contains the signup and signin forms, which are used to register and login the user(s).
In this file user authentication is saved, through local and session storage. The username is stored in local, while the token is stored in session for security reasons.

**Projects.js:**
This file contains the list item with the individual project component inside. This is also where the getHook for the projects gets filtered and passed down to the individual project component.
This file also contains a loading text which is called when the reactQuery isLoading function is in use.

**IndividualProject.js:**
This file contains the individual project information where only the project's id and name is used.
The project id is used here as this is also where the delete hook function is called.

**CollabProject.js:**
This file contains the list item with the individual collaborator project component inside. This is also where the getHook for the collaborator projects gets filtered and passed down to the individual collaborators project component.
This file also contains a loading text which is called when the reactQuery isLoading function is in use.

**IndividualCollabProject.js:**
This file contains the individual collaborators project information where only the project's id and name is used.

**AddProject.js:**
This component contains all the elements required for adding a project. The internals of this component contains the post fetch hook for this element as well.

**ProjectOverlay.js:**
This component contains the overlay function for showing the list of projects.

**AddCollab.js:**
This component is used for updating collaborators through a form.
This component also has a check whether or not you are the creator of the project, or a collaborator of the project, and creators are the only ones who can update the list of collaborators.

**Tasks.js:**
This is the main parent task component and it is loaded differently depending on which status it is given. This component also uses conditional rendering depending on the status, to map out four different project types. This also includes the individual task component and the add task component.

**IndividualTask.js:**
This component renders a list for the specific task and allows updating of said task.
It has the checkbox component, which also allows the task to be archived.

**Checkbox.js:**
In this component which contains a checkbox for archiving a task, it also holds the put fetch hook for updating a task as archived.

**AddTask.js:**
This component contains all the elements required for adding a task. The internals of this component contains the post fetch hook for this element as well. It also contains the Project overlay to display the list of projects a task can be added to, and task date which allows a user to set a date that the task should be done within.

**TaskDate.js:**
A list element containing three list items for displaying which date a task can be set to, these are: Today, Tomorrow and Next week.

[1]: https://github.com/MadsJuelDev/lama-api
