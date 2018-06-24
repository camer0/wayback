A module that archives any page to web.archive.org

Based on the code from https://www.reddit.com/r/node/comments/5j3sb7/using_wayback_machines_wayback_save_function/, but modified to work with pages that are already saved and some other stuff added.


# Installing
```npm install waybackarchive```

# Usage
```javascript
let archive = require('waybackarchive');
let url = "https://www.npmjs.com/package/waybackarchive";

archive(url, {
    attempts: 5, //Number of intervals to check. Default: 10
    interval: 2500 //Gap between checks in milliseconds. Default: 5000
}).then((archived_url) => console.log('Success! Archived at: ' + archived_url))
.catch(err => console.log(err))
```

You can only save the same page once every hour or so, so be aware of that when using this module.

Saves the page using the `request` module.
Uses the `wayback-machine` module to check at each interval if the page has been saved.