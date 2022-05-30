const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/api/shirts').get((request, response) => {
  response.send(COURSES);
});

app.route('/api/shirts').post((request, response) => {
  let course = request.body;

  const firstId = COURSES ? Math.max.apply(null, COURSES.map(courseIterator => courseIterator.id)) + 1 : 1;
  course.id = firstId;
  COURSES.push(course);
  

  response.status(201).send(course);
});

app.route('/api/shirts/:id').put((request, response) => {
  const courseId = +request.params['id'];
  const course = request.body;

  const index = COURSES.findIndex(courseIterator => courseIterator.id === courseId);
  COURSES[index] = course;

  response.status(200).send(course);
});

app.route('/api/shirts/:id').get((request, response) => {
  const courseId = +request.params['id'];

  response.status(200).send(COURSES.find(courseIterator => courseIterator.id === courseId));
});

app.route('/api/shirts/:id').delete((request, response)=> {
  const courseId = +request.params['id'];
  COURSES = COURSES.filter(courseIterator => courseIterator.id !== courseId);
  
  response.status(204).send({});
});

var COURSES = [
  {
      id: 1,
      brand: 'Nike',
      quantityMax: 100,
      quantityInStock: 10,
      model: 'Sports'
      
  },
  {
      id: 2,
      brand: 'Adidas',
      quantityMax: 100,
      quantityInStock: 10,
      model: 'Tour'
  },
  {
      id: 3,
      brand: 'Lacoste',
      quantityMax: 100,
      quantityInStock: 10,
      model: 'Party'
  },
  {
      id: 4,
      brand: 'Oakley',
      quantityMax: 100,
      quantityInStock: 10,
      model: 'Work'
  },
  {
      id: 5,
      brand: 'Reserva',
      quantityMax: 100,
      quantityInStock: 10,
      model: 'Hot place travel'
  }
];

var MODELS = [
  {
      model: 'Sports'
      
  },
  {
      model: 'Tour'
  },
  {
      model: 'Party'
  },
  {
      model: 'Work'
  },
  {
      model: 'Hot place travel'
  }
];
