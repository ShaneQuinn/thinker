# Thinker

This is an app and CI/CD pipeline created for an OTC DevOps Challenge.

In doing this challenge, I took the **challenge** part to heart. With this being the OTC, I wanted to approach it with an "open" state of mind in both source and services. Also, to avoid relying too much on internal services I'm comfortable with, I've used only external resources and avoided my normal go-to frameworks.


## APP
I built the app using NodeJS with Express/Mongoose and EJS.

## Database
I wanted to add another layer of complexity, so I opted for an external database provider rather than hosting within the same container. The database itself is MongoDB hosted by mLab.

## CI/CD Pipeline
For the CI/CD portion, I decided to use CircleCI to build and test my app after every Github master branch commit. If the build is good, it's pushed to the AWS Elastic Beanstalk environment which handles the load balancing as well as monitoring and usage metrics.

[AWS hosted app](http://thinker.us-east-1.elasticbeanstalk.com/)
[Github Repo](https://github.com/ShaneQuinn/thinker)
[CircleCI Repo](https://circleci.com/gh/ShaneQuinn/thinker)