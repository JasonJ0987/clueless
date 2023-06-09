Deployment of our application was made to Cirrus by Galvanize https://cirrus.mod3projects.com/ to manage cloud instances.

We performed the following steps to deploy our whatevr application:
1. Add a Dockerfile for the deployment of each of your services.
2. Write a pipeline that builds the container for each service.
3. Run the pipeline to generate the images in your gitlab registry for each service.
4. Deploy the image on Galvanize Cirrus using the SDK.

When running our application locally, we used docker-compose to build and run our application.  When deploying our application to Cirrus, we used the SDK to build and run our application. The SDK is a command line tool that allows you to interact with the Cirrus API.  The SDK is installed on the Cirrus instance and is used to build and run the application.  The SDK is also installed on your local machine and is used to deploy the application to Cirrus. The SDK is used to create a pipeline that builds the container for each service and runs the pipeline to generate the images in your gitlab registry for each service. The SDK is also used to deploy the image on Galvanize Cirrus.

We used the following commands to build and deploy our application to Cirrus:
```
glv-cloud-cli deploy -a clueless -i registry.gitlab.com/xanderrubio/clueless/whatevr_image:latest -e OPEN_WEATHER_API_KEY=42d8b097a99e02375024f5e29fa11f64 -e SIGNING_KEY=87fe4a3fcfb60092dbaeb854a196bc3d9b190aed7930c734749e85245de698420c25f8e6899c421b4494e99459e01058de5daa9d49584cd62ec975da9aea33db -e DATABASE_URL=mongodb://root:password@feb-23-et-14-mongo-database-service.default.svc.cluster.local -e CORS_HOST=https://xanderrubio.gitlab.io/clueless
```

We used the following commands to build our Mongo DB into Cirrus:
```
glv-cloud-cli deploy -a clueless -i registry.gitlab.com/xanderrubio/clueless/whatevr_image:latest
-e OPEN_WEATHER_API_KEY=42d8b097a99e02375024f5e29fa11f64 -e SIGNING_KEY=87fe4a3fcfb60092dbaeb854a196bc3d9b190aed7930c734749e85245de698420c25f8e6899c421b4494e99459e01058de5daa9d49584cd62ec975da9aea33db-e DATABASE_URL=mongodb://root:password@feb-23-et-14-mongo-database-service.default.svc.cluster.local
-e CORS_HOST=https://xanderrubio.gitlab.io/clueless
```
