# Nupat Intership Project

- project-type: Dashboard
- developer: Akintunde Adedoyin
- start-date: 2023-04-15
- technologies: vite, tailwindcss, react-router-dom version 5,javascript,react,npm

## Difficulties faced during the project

- Had a problem with fixing the sizes for the navbar and Dashboard
- also when creating the global components for each card there i faced a problem with the progress bar due to trying to dynamically render the width

## Gains
- I understood more about the flex basis, flex grow, flex shrink
- Improved my code splitting

## Starting the project

- step 1: run Npm install to install the dependencies
- step 2: run npm run dev in your terminal to start the development server

## Understanding the code base and structure

In my root folder i have :
- src folder
- public folder
- index.html file and other config files (e.g package.json, tailwind.config.json, postcss.config.json etc)

In the  public folder i have :
- NupatLogo.svg (this logo is meant for the favicon)

In the src folder i have :
- assests folder : this folder contains where i have my images and icons used entirely through out the project it as two subfolders of image and icon, as the folder name implies they both store different file types of images(ong, jpeg etc) and icons(svg, ico, etc)
- components folder : This is where all my components goes into , it as two subfolders of details and navigation. details folder holds the dashboard components while navigation folder contains the navbar conponents
- shared folder : This folders holds components that are used across the whole web application
- app.jsx : this is where all components are been rendered
- index.css : contains the tailwind style config and other styles
- main.jsx : this is the app component is been rendered



