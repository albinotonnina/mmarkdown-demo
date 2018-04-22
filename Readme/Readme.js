module.exports = {
  foo: 'baz',
  processMyArray: async array =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(
          array.map(item => ({
            name: item + ' async'
          }))
        )
      }, 1000)
    })
}
