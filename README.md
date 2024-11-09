# Example Malicious Script

This is an example JavaScript file that will be injected into a benign website, thus being the site of a Cross-Site Scripting (XSS) attack.

Specifically, this JavaScript file will be involved in a DOM-based XSS attack. Selenium, a Python package that automates browser interactions, will be used to modify the DOM environment in the victim’s browser, adding a script tag to the header of the DOM that will load a malicious script from jsDelivr's servers.

To test the attack is working, the script is designed to log the keyboard inputs of the user on the webpage to a file (inputs.txt)

**This is for testing purposes only.**
