## INITIAL START & SETUP
## Bootstrapping our app
npx create-next-app@latest coffee-shop --js --no-tailwind --src-dir --no-app --eslint --no-import-alias

delete styles folder
delete import of styles from _app.js
delete next.svg and vercel.svg inside public folder
make a features folder inside the src folder
make a server folder inside the src folder

delete everything inside index.js and replace with :
export default function Home() {
  return (
    <>
      <h1>Welcome to Coffee Shop</h1>
    </>
  );
}
from the correct directory, run:
npm run dev

## Nextjs
nextjs allows us to build full-stack applications within one repo. Is is very similar to what you have seen so far with react, (except for file-based routing. So be careful what you add to the pages folder). It then adds a new folder inside pages called api, which allows us to build our api.