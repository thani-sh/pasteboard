# Creative Commons Pasteboard

## Introduction

The Creative Commons Pasteboard is a browser extension used to help users easily clip content from different sources aroud the web. It also helps users by automatically adding attribution information when users paste their clips into documents.

![Early Mockup](http://wiki.creativecommons.org/images/2/2c/Pasteboard_mockup.png)

[Creative Commons Wiki about Pasteboard](http://wiki.creativecommons.org/Products/Pasteboard)

## Browser Extensions

Browser extensions are used to inject required scripts into the page in order to do the following:

 * Display the pasteboard user interface using an iframe
 * Capture mouse gestures ( drag clips towards page bottom ) and display the UI
 * Keep the channel ready for messages from the pasteboard

[Read more about browser extensions](browser-extensions)

## Pasteboard User Interface

The app which loads inside the iframe created by the browser extension. At this stage it uses firebase to store clip content and firebase built-in authentication using Mozilla Persona. The interface is managed by AngularJS using AngularFire to connect with firebase.

[Read more about pasteboard user interface](pasteboard-interface)
