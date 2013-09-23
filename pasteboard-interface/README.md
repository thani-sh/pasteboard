# Creative Commons Pasteboard

## Pasteboard User Interface

### Content Management

To keep data in sync, the pasteboard UI uses AngularJS and AngularFire and creates a 3-way data-binding between Firebase, Javascript and the page (DOM).

### User Registration/Login

Uses Firebase built-in [authentication](https://www.firebase.com/docs/security/authentication.html) ["Firebase simple auth"](https://www.firebase.com/docs/security/simple-login-overview.html) via the [AngularFire](http://angularfire.com/documentation.html#authentication) plugin. No user registration is required at the moment. The account and related data is created in Firebase when user logs in for the first time.

### Communications with Browser Extension

Currently all communications with browser is done directly using [Mozilla jschannel](https://github.com/mozilla/jschannel).

##### Listens to

 * __addClip(clip)<br>__
   clip : A javascript object which contains clip and attribution data

##### Calls

 * __ResizePasteboard(size)<br>__
   size : 'normal', 'maximized'

### TODO

 * __Revise this TODO list__
 * Use html5 appcache to speedup loading resources
 * Use html5 localStorage to cache clip data and user preferences
 * Synchronize localStorage data with firebase data
 * Rewrite the code to use CommonJS modules for better namespace management
 * Decrease dependencies (AngularJS, AngularFire, Firebase Authentication, etc.)
 * Use pasteboard server authentication instead of Firebase built-in system
 * Connect and use Google Drive API to browse and open documents
 * Implement dragging clips from pasteboard to Google Docs
 * A javascript/node.js API to integrate the pasteboard with other editors
 * Implement dragging clips from pasteboard to other editors using API
 * Automatically add attribution information to documents when using clips
