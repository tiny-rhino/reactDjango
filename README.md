# reactDjango

## Features
- Automatic rendering of static file paths in Django templates (`{% render_bundle 'main' 'js' %}`)
- JS hot reloading
- Hashed build files (`[name]-[hash].(js|css)`)
- `babel-preset-env` with React preset

## Set up dev env
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

The dev script runs a dev server which will hot reload JS components.

## Running in production
Build the statics
`yarn build`

Run python server & static rendering server
`./manage.py runserver && yarn start`