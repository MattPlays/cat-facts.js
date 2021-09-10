# cat-facts.js
 cat-facts.js utilizes the Cat-Facts API to give users facts about cats

# Installation
```bash
npm i cat-facts.js
```

# Usage
```javascript
const cats = require("cat-facts.js")
cats().then(console.log);
// Or
(async () => {
    let catFacts = await cats();
    console.log(catFacts);
})();
```

# License
cat-facts.js is Licensed under the [MIT License](https://github.com/MattPlays/cat-facts.js/blob/main/LICENSE)