# GrubDash-Project
## About Me:
- My name is Mad, you can think of it as "Maude" or "Mod" in your head, whichever works!
- I'm currently enrolled in Thinkful's Fullstack Software Engineering course & having a really great time learning this material. I also earned my BA in Spanish Studies & Computer Science from Texas State University in the winter of 2021, so I was fortunate to have a good foundation of programming knowledge going into this course. 
- This course is wrapping up at the beginning of May 2022 (right around the corner!) so please feel free to reach out if you've got me in mind for a junior developer role! 

My [🌲 LinkTree🌲 ](https://linktr.ee/madgodinez) has the best ways to find me online, as well as my resume. 

## About this Project: GrubDash
Frontend UI Mockup Repo + Link ↘️
<a href="https://github.com/Thinkful-Ed/starter-grub-dash-front-end">
  <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d7eb3755-f038-463d-bf97-cc854a87c237/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220328T210655Z&X-Amz-Expires=86400&X-Amz-Signature=b5a04de9fc9e817dd4d41eea937eb14de12732dba6c744fa9784edc1520b9c0a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject" alt="frontend UI mockup" />
</a>

### Project Description: 
<p align="center">
"You've been hired as a backend developer for a new startup called GrubDash! As another developer works on the design and frontend experience, you have been tasked with setting up an API and building out specific routes so that the frontend developers can demo some initial design ideas for the big bosses."
</p>

Take a look at this project's [information & instructions](https://github.com/mad-godinez/GrubDash-Project/blob/main/instructions.md#input-validation) to see a more in-depth breakdown of tasks. 

### The Data:
- Dishes:
  ```
  {
    "data": 
    [
      {
        "id": "d351db2b49b69679504652ea1cf38241",
        "name": "Dolcelatte and chickpea spaghetti",
        "description": "Spaghetti topped with a blend of dolcelatte and fresh chickpeas",
        "price": 19,
        "image_url": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&w=350"
      }
    ]
  }
  ```
- Orders:
  ```
  {
    "data": {
      "deliverTo": "308 Negra Arroyo Lane, Albuquerque, NM",
      "mobileNumber": "(505) 143-3369",
      "status": "delivered",
      "dishes": [
        {
          "id": "d351db2b49b69679504652ea1cf38241",
          "name": "Dolcelatte and chickpea spaghetti",
          "description": "Spaghetti topped with a blend of dolcelatte and fresh chickpeas",
          "image_url": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&w=350",
          "price": 19,
          "quantity": 2
        }
      ]
    }
  }
  ```
### Learning Objectives:
1️⃣ use Express to build a RESTful API to store data for multiple resources with minimal code, applying your knowledge of REST and state management.
2️⃣ develop the functionality for my API to create, read, update, and delete data for multiple resources, while also defining the routes, URLs, and middleware necessary to implement the API.
In addition to the above, 
  - Running tests from the command line
  - Using common middleware packages
  - Receiving requests through routes
  - Accessing relevant information through route parameters
  - Building an API following RESTful design principles
  - Writing custom middleware functions

### Installation Instructions:
*Prerequisites: node v16.13.0 (npm v8.1.0)*
1. clone the project repository to your machine:
    <img width="700" height="auto" alt="Screen Shot 2022-03-21 at 10 21 24 AM" src="https://user-images.githubusercontent.com/93545744/159300878-515dde19-8f22-4521-8b7f-5ecb5eb27e47.png" align="center">
2. extract the zipped download folder to your desired location.
3. open the project directory in your machine's terminal. <br> Ex. `user@mac ~ % cd/Desktop/GrubDash-Project-main`
4. install the project's packages: `npm install`
5. run the project (this will open a tab in your default browser): `npm start`
6. that's it, have fun! 😁
7. once you're ready to close the application, type & enter `<CTRL + C>` in the terminal to stop the servers & disconnect.
