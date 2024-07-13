### App

India.figuringout.life - Let's fix India's problems, one step at a time. 

### Setup:

- Git clone
- cp .env.sample .env
- Add all configuration values: 
```bash
MONGODB_URI=""
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="password_nextauth"
```
- npm install
- npm run dev

### Tech:
NextJs + Shadcn + MongoDb (Mongoose as ORM)

### Base features
- SignIn using Google
- Create a post
- See all posts
- Like a post (Pending)
- Comment on a post (Pending)


### Screenshots:

##### Home Screen
![](./public/home.png)

##### New Post Screen
![](./public/new.png)