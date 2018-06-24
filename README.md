A module that archives any page to web.archive.org

Based on the code from https://www.reddit.com/r/node/comments/5j3sb7/using_wayback_machines_wayback_save_function/, but modified to work with pages that are already saved and some other stuff added.


# Installing
```npm install waybackarchive```

# Usage
```javascript
let archive = require('waybackarchive')
archive(url, {attempts: 5}).then((archived_url) => console.log('Archived at ' + archived_url))
.catch(err => console.log(err))
```

The `attempts` option is optional; it defaults to 10. This module works by requesting the page and then checking every 5 seconds to see if it has been uploaded. 

The attempts # is how many times to check; after this number, it will throw an error. Otherwise, it will return the link to the archived url.
