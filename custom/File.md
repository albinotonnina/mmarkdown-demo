<p align="center"><img src="https://img.ziggi.org/BY9iI48Q.png" /></p>

```mmd
const array = [1, 3, 5]

const something = await scripts.processMyArray(array)

const myFinalString = something.map(item => '## ' + item.name)
  .join('\n\n')

return myFinalString
```
