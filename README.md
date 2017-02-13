# Django + Webpack + React boilerplate 
(w/ Django Webpack Loader + Server-side rendering)

## Tools
- [Django](https://github.com/django/django) 1.10
- [Webpack](https://github.com/webpack/webpack) 2.2
- [Django Webpack Loader](https://github.com/owais/django-webpack-loader) (Webpack Bundle Tracker)
- [Python React](https://github.com/markfinger/python-react) (React server-side rendering)

## Features
- Hashed build files (`[name]-[hash].(js|css)`)
- Automatic rendering of build files in Django templates (`{% render_bundle 'main' 'js' %}`)
- Server-side rendering for React Components (`<div id='react-component'>{{ component|safe }}</div>`)
- Babel ES2015 + React
- SCSS loader
- Compiling to CSS with Extract Text Webpack Plugin


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

Run render server for server-side rendering  
`npm run render`
