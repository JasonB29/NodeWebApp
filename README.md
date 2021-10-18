# NodeWebApp
Node.js web application demonstrating a Node.js server with endpoints that access an online Mongo DB cluster.


# Install and Run
Once all the files are downloaded onto your local machine, open up a command line tool and navigate to the folder.
Enter 'Node index.js'
This will activate a server listening on port: 8000

Open up a browser and type in: 'http://localhost:8000' and you will see the home page for the sample web application. 


# Docker
To use a docker container to run an image of this web app, you can use the public image image located on Docker Hub.
After installing docker to your local machine, you can run the image using the following command line instruction:

docker run --rm -dp 8000:8000 jasonb29/nodewebapp:V1.0.0


# Testing
An integration test has been written under the 'test' folder. Mocha has been used along with the Chai module in order to test the endpoints of the server return a status code 200 when called. 