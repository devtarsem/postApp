### welcome to "post application Api"
this is a post application , any developer who want to make a post application can use this open source api to build their apps no matter is it a web application or android applicartion.
futher now we see all the basics things and technologies needed to use this application programming interface(Api)

#### Technologies used
1. Express.js
2. MongoDb
3. Node.js

#### Libraries or modules needed
1. Mongoose
2. jsonwebtokens
3. bcrypt
4. nodemon
5. promisify
6. path
7. util
8. dotenv


#### How to use this api
1. first install the packages
````express
    npm i mongoose, nodemon, bcryptjs, jsonwebtoken, util, path
````

2. first install the modules
````express
    npm i express
    const app = express()
    const dotenv = require('dotenv')
    dotenv.config({path : "./config.env"})
    const mongoose = require('mongoose')
    const connect = mongoose.connect(process.env.CONNECTION).then(el=>{console.log("db coneection established")})
    const port = 8600 | process.env.port
    const server = app.listen(port, ()=>{
        console.log(`server is running at ${port}`)
    })
````

3. make a **config.env** file
    **use process.env.connection** line to excess this .env file, this file is available all over the application without any import
````express
    CONNECTION = "your mongo db connection string"
    STRING = "your Jsonwebtoken secret string"
````

##### The Api contains these following Routes
1. **{your local host | 127.0.0.1:5700}/api/v1/signup**

    * for signup the user this routes is used and the data as follow is passed in ***POST*** request in the body
````json
    "username" : "tarsem singh",
    "email" : "tarsemXXXX.com",
    "password" : "9478181139"
````

2. **{your local host | 127.0.0.1:5700}/api/v1/login**

    * for login the user this routes is used and the data as follow is passed in ***POST*** request in the body
````json
    "email" : "spXXXXXXX.com",
    "password" : "478181139"
````
3. **{your local host | 127.0.0.1:5700/api/v1/all-users**

    * by this route we can all the logged in users of the application and we can get this type of response
    
    ````json
    {
    "status": "ok",
    "data": {
        "user": [
            {
                "_id": "6442cba0393dd6e4e8cee552",
                "username": "manish",
                "email": "ts6346298@gmail.com",
                "password": "$2a$12$HHremstYaRO6verq.t55ueQ9hBPaAJE7aIfNMZVGgMz4MR6p5/zQi",
                "logout": true,
                "__v": 0
            },
            {
                "_id": "6443835099ddd89d25ca5fce",
                "username": "baljeet",
                "email": "ts634629@gmail.com",
                "password": "$2a$12$7asalOkQofwd8Rbthiyqn.u5zmynLfExVol9E1tACJw5E2t8itGR.",
                "logout": false,
                "__v": 0
            },
            {
                "_id": "6443871f5ea7b0223683e474",
                "username": "bondu",
                "email": "ts634629@gmail.com",
                "password": "$2a$12$UiUZi3TjF2NnBiz42h/GbOVk40FJI95ZOKyymtgTlKXNBUKqzpd2O",
                "logout": true,
                "__v": 0
            },
            {
                "_id": "6443e23d82acf45df227f12b",
                "username": "landu",
                "email": "ts634629@gmail.com",
                "password": "$2a$12$81.C4nnk84t8DDCPpPx6uOjO2uw1Kn3RGYM4zr4kwML2i2BN0rCrq",
                "logout": false,
                "__v": 0
            }
        ]
    }


````

4. **{your local host | 127.0.0.1:5700/api/v1/add-post}**

    * by this route we can create a new post for putting on our application we have to give data via post http call
    * this type is data must be passed to the http call
    ````json
    {
    "title" : "pamper 110",
    "description" : "sampling 102",
    "tagged" : "@bhuvan, @amishi"
    }
````


5. **{your local host | 127.0.0.1:5700/api/v1/all-post}**

    * by this route we can display all post on our application we have to do get http call
    * this type is data must be given to you from api call
    ````json
    {
    "status": "ok",
    "data": {
        "post": [
            {
                "_id": "6444ec7345b1f772f53b6248",
                "user": {
                    "_id": "6444c6f43be064ddb0e5c419",
                    "username": "verma",
                    "email": "verma@gmail.com",
                    "password": "$2a$12$bZn1JDfTfl27fcGvewPVheUqY3RYMQ/NaZAp5Cm28XAsBr9zLIUs2",
                    "logout": false,
                    "__v": 0
                },
                "title": "post application full stack development",
                "description": "tthis is a post making application in which a user can create, read, delete and update their posts and user can can other people post                    as well and user can see comment on the post as well",
                "tagged": "@internship",
                "username": "verma",
                "likes": 0,
                "comments": [
                    [
                        "verma",
                        "the backend is written in node-js , express.js and MongoDB, while front end is render with server-side pug template rendering"
                    ]
                ],
                "identifier": 539044396070133200,
                "__v": 1
            }
        ]
    }
}
````


6. **{your local host | 127.0.0.1:5700/api/v1/delete-post}**
    * by this route we can delete the post created by us on our application we have to do delete http call we have to pass the id of the document to the call
 
7. **{your local host | 127.0.0.1:5700/api/v1/update-post}**
    * by this route we can update the post created by us on our application we have to do patch http call we have to pass the id of the document to the call and we         have to pass the updated items as well
    * the data goes to http cal looks like this
    ````json
    {
    "id" : 40495709936087864,
    "description" : "post application"
    }
````
8. **{your local host | 127.0.0.1:5700/api/v1/comment-post}**
    * by this route we can comment on the post created by us and other on our application we have to do post http call we have to pass the id of the document to the call and we         have to pass the comment items as well
    * the data goes to http cal looks like this
    ````json
    {
    "id" : 40495709936087864,
    "comment" : "post application"
    }
````
9. **{your local host | 127.0.0.1:5700/api/v1/like-post}**
    * by this route we can like on the post created by us and others on our application we have to do post http call we have to pass the id of the document to the call 
    * the data goes to http cal looks like this
    ````json
    {
    "id" : 40495709936087864
    }
````
9. **{your local host | 127.0.0.1:5700/api/v1/bookmark-post}**
    * by this route we can bookmark a post created by us and other on our application we have to do post http call we have to pass the id of the document to the call 
    * the data goes to http cal looks like this
    ````json
    {
    "id" : 40495709936087864
    }
````



