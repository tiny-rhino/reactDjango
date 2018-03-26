# reactDjango
Build your Django-app's front-end in React by just passing your context variables as props to React components!

## Features
- Server-side rendering
- Configured development and production front-end servers
- Component hot reloading
- Hashed build files (`[name]-[hash].js`)

## Get started
Create & activate virtual env  
`virtualenv env && source env/bin/activate`

Install requirements  
`pip install -r requirements.txt`

Apply migrations  
`./manage.py migrate`

Install node dependancies
`yarn`

Run dev script
`yarn dev`

## Run in production
Build the statics
`yarn build`

Run python server & static rendering server
`./manage.py runserver && yarn start`