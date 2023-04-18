# Nupat Intership Project

- project-type: Dashboard
- developer: Akintunde Adedoyin
- start-date: 2023-04-15
- technologies:![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
- prototype : [Figma Design](https://www.figma.com/file/QdARXcFMveMaXZU37ZtzhD/%F0%9F%98%B5-Responsive-dashboard-design-using-Auto-Layout-(Community)?node-id=1-1371&t=XS00uTB8LzVMqjZZ-0)

## Starting the project

This project was created using vite

- step 1: run Npm install to install the dependencies
- step 2: run npm run dev in your terminal to start the development server

## Understanding the code base and structure

In my root folder i have :

- src folder
- public folder
- index.html file and other config files (e.g package.json, tailwind.config.json, postcss.config.json etc)

In the public folder i have :

- NupatLogo.svg (this logo is meant for the favicon)

In the src folder i have :

- assests folder : this folder contains where i have my images and icons used entirely through out the project it as two subfolders of image and icon, as the folder name implies they both store different file types of images(ong, jpeg etc) and icons(svg, ico, etc)
- components folder : This is where all my components goes into , it as two subfolders of details and navigation. details folder holds the dashboard components while navigation folder contains the navbar conponents
- shared folder : This folders holds components that are used across the whole web application
- store folder : This folder contains my context used accross the web application
- app.jsx : this is where all components are been rendered
- index.css : contains the tailwind style config and other styles
- main.jsx : this is the app component is been rendered

## Difficulties faced during the project

- Had a problem with fixing the sizes for the navbar and Dashboard.
- also when creating the global components for each card there i faced a problem with the progress bar due to trying to dynamically render the width.
- When trying to add the dark mode, it was a bit difficult because i am using tailwind css and i have never used tailwind css for dark mode before

## Gains

- I understood more about the flex basis, flex grow, flex shrink
- Improved my code splitting
- using tailwind css for Darkmode

## Added Features

- Responsiveness for other devices (only larger screens were provided on the figma design)
- Added Dark mode support
