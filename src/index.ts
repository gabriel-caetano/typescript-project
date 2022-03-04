import express from 'express'

const app = express()

app.get('/', (req, res) => {
  const a = {
    b: 'c',
    c: 'd',
    d: 'e',
  }
  console.log('Hello World!', a.b)
  return res.send('Hello World!')
})

app.listen(3000, () => console.log('running...'))
