## INITIAL START & SETUP
## Bootstrapping our app using CLI of choice GIT BASH 
npx create-next-app@latest coffee-shop --js --no-tailwind --src-dir --no-app --eslint --no-import-alias

## Open VSCODE

delete styles folder
delete import of styles from _app.js
delete next.svg and vercel.svg inside public folder
make a features folder inside the src folder for react components
make a server folder inside the src folder for backend server code

delete everything inside index.js (nextjs renders this file and put on the page whatever component is exported from there. this is our root of the page.) and replace with our main export from this file :
export default function Home() {
  return (
    <>
      <h1>Welcome to Coffee Shop</h1>
    </>
  );
}


from the correct directory, (check package file to see it or just type nmp run in the CLI to see the commands available) run:
npm run dev

## Nextjs
nextjs allows us to build full-stack applications within one repo. Is is very similar to what you have seen so far with react, (except for file-based routing. So be careful what you add to the pages folder). It then adds a new folder inside pages called api, which allows us to build our api.

## API
To start to make an endpoint in the api folder under pages create a new .js file
To start copy the content of the hello.js file that nextjs provides
use fetch to grab your api and since it's the same local host domain you can go "fetch/api/menu"
to hit the api one time useEffect from react on pages/index.js
to store the date we need to useState from react as well

"@" is the alias of the root of our project, the src foulder, in this import syntax mport { db } from "@/server/db"

## Database files
copy in db.js and db.json from in class folder in module5 day 02