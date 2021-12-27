# Prerequisites
- node
- npm
- .env file under the project folder with `PORT` and `DB_URI` configs like following
  - ```
    PORT = 3000
    DB_URI = mongodb+srv://...?retryWrites=true
    ```
# Run the application
- ``npm install``
- ``npm run dev`` as dev
- ``npm start`` 

# Make POST request to endpoint
Endpoint for local: ``localhost:3000/records``

Endpoint for heroku app: ``https://mehmet-talha-seker-getir-final.herokuapp.com/records`` 

### Request.body must be like as follows:
- ```
    {
      "startDate":"2014-01-01",
      "endDate":"2015-12-12",
      "minCount": 3000,
      "maxCount": 3002
    }
  ```
- "endDate" must be greater than or equals to "startDate"
- "maxCount" must be greater than or equals to "minCount"

### Response.body will be like as follows:
- ```
    {
      "code": 0,
      "msg": "Success",
      "records": [
          {
              "key": "QjqWWQpF",
              "createdAt": "2015-05-04",
              "totalCount": 3002
          },
          {
              "key": "QjqWWQpF",
              "createdAt": "2015-05-04",
              "totalCount": 3002
          }
      ]
   }
  ```

# Run the tests
- ``npm test``

# Getir Node.js Bootcamp Graduation Project
## The Challenge
We’d like you to create a RESTful API with a single endpoint that fetches the data in the provided MongoDB collection and return the results in the requested format.
Requirements
- The code should be written in Node.js using express framework
- The endpoint should just handle HTTP POST requests.
- The application should be deployed on AWS or Heroku. You don’t need to use any API Gateway, Load Balancers or any other layer than the developed application.
- The up to date repo should be publicly available in Github, Bitbucket or equivalent.

## Deliverables
- The public repo URL which has the source code of the project, and a set of instructions if there is any project specific configurations needed to run the project.
- The public endpoint URL of the deployed API which is available for testing.

## Worth Highlighting
We expect these requirements can be delivered in 3 to 6 hours. However, it is not a speed test. Take your time! Your feedback on how much actual time you were needed to deliver the task will be very helpful but will not be used for the evaluation.
You are free to use any libraries to deliver the needed functionality, but be prepared to explain other solutions that you would have implemented if you have more time.

## Crucial Points
- Delivering a Working RESTful API.
- Clean and Production Ready Code
- Error Handling
- Comments and Documentation
- Unit and/or Integration Tests (Jest is preferable but Mocha also works)
- Avoid Over Engineering

Good luck with this assignment! Try to make good use of this task to demonstrate and show off your coding skills. If you have any questions, don’t hesitate to ask your contact person within Getir.
