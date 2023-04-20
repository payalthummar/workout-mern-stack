# App Setup

step 1: mkdir backend && cd backend
step 2: npm init -y
step 3: npm i express
step 4: npm i -g nodemon

- package.json file add scripts

        "dev": "nodemon server.js"

  step 5: npm i dotenv
  step 6: npm i mongoose

## API Endpoints

- GET: /api/workouts = Get all the workout documents

- POST: /api/workouts = Creates a new workout document

- GET: /api/workouts/:id = Gets a single workout document

- DELETE:/api/workouts/:id = Deletes asingle workout

- PATCH/PUT: /api/workouts/:id = Updates a single workout
