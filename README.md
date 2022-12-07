---STEPS AND FEATURES USED---

There are two panes in this code editor- One where the code is run (upper half of the app that contains the three code containers) and the other where the output is displayed (lower half ‘result’ code window).

Created a custom component called Editor which will be used in taking input of HTML, CSS, JS code snippets in their respective code containers.

To render a web page within another web page an iframe element is used.

Used codemirror package for this component so that we can have controlled usage for the code editor which will then help in controlling input/output values and event handlers.

Buttons for each code container for opening (expanding) and closing (collapsing) individual code-editors and also a button to clear the input.

Made a ‘source’ document in the main App function in `app.js` that needs to be used inside the `iframe` element to render the website. To render any website a HTML code is sufficient with all of HTML, CSS, JS codes wrapped properly in it. So, created a variable such that it understands language specific inputs and accordingly creates a HTML page with the relevant source code of each language wrapped in its tag (like <body> for HTML) .

On using this ‘source document’ variable in the `iframe` as one of its arguments we will be able to render pages.

Further setted a time-delay between code input and output (to avoid data execution cluttering when your site is hosted).

Created state variables (preferably by using useState hook) in the main app code to pass in values and event handler values, for individual editor components (i.e. language specific) and other relevant features.

The logic of implementing `source document` variable: The tag that binds HTML code is `<body>...</body>`, tag that binds CSS is `<style>...</style>` and for JS is `<script>...</script>`. Using a template string, the contents of each of tags can be input as variables/expressions.

For time-delay we use useEffect react component.

To implement the main feature of this task, we create a custom useLocalStorage hook in `useLocalStorage.js` file.

This hook will ideally take two parameters-namely a key and an initialValue. The key will be pointing towards the language pane.

Using this key, extract the JSON value (via useState function) and check if it’s null or contains some value. If null, JSON needs to be returned (after parsing it obviously).

Then Check if the initialValue is of type function or not. Accordingly return the initialValue.

Also we use the `useEffect` hook to make sure that when the value (associated with useState hook) or the key value changes, the key is set as the stringified version of value (JSON).

Finally we use this hook in the main App function of `app.js`in place of previously used useState of all language-specific useState’s defined before.

Now we install fortawesome/fontawesome (for react) after selecting appropriate icons from the font awesome site to plug-in all relevant icons to complete our code-editor.
