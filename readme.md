# Thinker

This is an app and CI/CD pipeline created for an OTC DevOps Challenge.

In doing this challenge, I took the **challenge** part to heart. With this being the OTC, I wanted to approach it with an "open" state of mind in both source and services. Also, to avoid relying too much on internal services I'm comfortable with, I've used only external resources and avoided my normal go-to frameworks.

## APP
I built the app using NodeJS with Express/Mongoose and EJS.

## Database
I wanted to add another layer of complexity, so I opted for an external database provider rather than hosting within the same container. The database itself is MongoDB hosted by mLab.

## CI/CD Pipeline
For the CI/CD portion, I decided to use CircleCI to build and test my app after every Github master branch commit. If the build is good, it's pushed to the AWS Elastic Beanstalk environment which handles the load balancing as well as monitoring and usage metrics.

## Repositories
[AWS hosted app](http://thinker.us-east-1.elasticbeanstalk.com/)

[Github Repo](https://github.com/ShaneQuinn/thinker)

[CircleCI Repo](https://circleci.com/gh/ShaneQuinn/thinker)

## Learnings
Overall, this was an enjoyable challenge which I have been able to learn quite a bit from and have a couple takeaways which should help on future projects. 
* First, is to focus on building the app and ensure it's running as intended within its containered environment. This will help eliminate blind troubleshooting when building the CI/CD pipeline, as you'll know the container works, so you can focus on the surrounding structure. 
* Second, is to work backwards on the CI/CD pipeline. Ensure your container and app are fully functioning on the hosting platform before anything else. This way when trying to setup the automated builds and deployment, any issues will likely be coming from upstream, enabling focus to be squarely on that piece.