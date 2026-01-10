## React with Vite installation
first check Node.js is installed
npm create vite@lkatest
give project name
give package name or just hit Tab
Select framework - React
Select a variant/lang - JavaScript
Install with npm and start now - Yes
cd to new project directory
star your app - npm run dev
Delete assets folder and App.css file
remove all css code from index.css file
replace all code of App.jsx inside return with Simple div with Hello string and confirm same reflects on browser - http://localhost:5173


## Tailwind installation
npm install -D tailwindcss @tailwindcss/vite
Configure the Vite plugin vite.config.ts -> add this line- import tailwindcss from '@tailwindcss/vite' -> add tailwindcss() within plugins. For reference- https://tailwindcss.com/docs/installation/using-vite
Add this line in your index.css file- @import "tailwindcss";
Add this line in head tag of index.html file- <link href="/src/index.css" rel="stylesheet">

## Project
Add favicon
Upload SVGs to /public/assets/images/
Create Header component
Create SideBar
Create SideMenu and build toggle effect on hamburger click using rtk

Go to https://console.cloud.google.com/apis/credentials and create an YouTube API Key & store it in .env file
Call youtube videos API to get most popular videos
Go to Google Cloud Console - https://console.developers.google.com/apis/api/youtube.googleapis.com/overview?project=projectId and enable it

Create VideoContainer
Create VideoCard
Create WatchPage
Create appRouter and configure to render children inside Outlet


