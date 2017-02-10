# Django + Webpack + React boilerplate 
(w/ Django Webpack Loader configured)

## Tools
- Django 1.10
- Webpack 2.2
- Django Webpack Loader / Bundle Tracker

## Features
- Hashed build files (`[name]-[hash].(js|css)`)
- Automatic rendering of build files in Django templates (`{% render_bundle 'main' 'js' %}`)
- Babel ES2015 + React
- SCSS loader
- Extract Text Webpack Plugin for compiling css files  


## Set up dev env

### Django
Create & activate virtual env  
`virtualenv --python=python3 env && source env/bin/activate`

Install requirements  
`pip3 install -r requirements.txt`

Apply migrations  
`./manage.py migrate`

Run server  
`./manage.py runserver`

### NPM
Install npm packages
`npm i`


## Front-end dev
Run webpack watch for hot-rebuilding  
`npm run dev`

Run webpack minified production build  
`npm run build`

Clean the static dir of old builds  
`npm run clean`
