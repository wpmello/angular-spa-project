const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

var currentUser

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(bodyParser.json())

app.listen(3101, () => {
  console.log('Server Started!')
})

app.route('/api/shirts').get((request, response) => {
  response.send(MODELS)
})

app.route('/api/shirts').post((request, response) => {
  let course = request.body

  const firstId = MODELS
    ? Math.max.apply(
        null,
        MODELS.map(courseIterator => courseIterator.id)
      ) + 1
    : 1
  course.id = firstId
  MODELS.push(course)

  response.status(201).send(course)
})

app.route('/api/shirts/:id').put((request, response) => {
  const courseId = +request.params['id']
  const course = request.body

  const index = MODELS.findIndex(
    courseIterator => courseIterator.id === courseId
  )
  MODELS[index] = course

  response.status(200).send(course)
})

app.route('/api/shirts/:id').get((request, response) => {
  const courseId = +request.params['id']

  response
    .status(200)
    .send(COURSES.find(courseIterator => courseIterator.id === courseId))
})

app.route('/api/shirts/:id').delete((request, response) => {
  const courseId = +request.params['id']
  MODELS = MODELS.filter(courseIterator => courseIterator.id !== courseId)

  response.status(204).send({})
})

var MODELS = [
  {
    id: 1,
    model: 'Sports'
  },
  {
    id: 2,
    model: 'Tour'
  },
  {
    id: 3,
    model: 'Party'
  },
  {
    id: 4,
    model: 'Work'
  },
  {
    id: 5,
    model: 'Hot place travel'
  }
]
