# Example Malicious Script

This is an example JavaScript file that will be injected into a benign website, thus being the site of a Cross-Site Scripting (XSS).

Specifically, this JavaScript file will be involved in a Stored XSS attack. The file is cached on jsDelivr's CDN servers and will be injected to the user through there.

Selenium, a Python package that automates browser interactions, will be used to test this attack. Its WebDriver API will open the default browser on a specific website and load the script tag in the header of the DOM, loading the script from jsDelivr's servers.

To test the attack is working, the script is designed to log the keyboard inputs of the user on the webpage to a file (inputs.txt)

**This is for testing purposes only.**
