# reactDjango

## Tools
- [Django](https://github.com/django/django) 1.10
- [Webpack](https://github.com/webpack/webpack) 2.2
- [Django Webpack Loader](https://github.com/owais/django-webpack-loader) (Webpack Bundle Tracker)

## Features
- Hashed build files (`[name]-[hash].(js|css)`)
- Automatic rendering of build files in Django templates (`{% render_bundle 'main' 'js' %}`)
- Babel ES2015 + React
- SCSS loader
- Compiling to CSS with Extract Text Webpack Plugin


## Set up dev env
Create & activate virtual env  
`virtualenv env && source env/bin/activate`

Install requirements  
`pip3 install -r requirements.txt`

Apply migrations  
`./manage.py migrate`

Install npm packages  
`npm i`

Run server  
`./manage.py runserver`


## Front-end dev
Run webpack watch for hot-rebuilding  
`npm run dev`

Run webpack minified production build  
`npm run build`

Clean the static dir of old builds  
`npm run clean`