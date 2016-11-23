# TilliLandia

> Just a little slice of Systema Naturae

## Wha?

Yours truly has too many Tillandsias to keep track of without a database and
thought a project like this would not only be practical on a personal level
but also help out people who want to get started with Django and/or React.

## Install

### Prereqs

You'll need python3 and virtualenv installed for the django end of things,
for the javascript stuff you'll need node.js and npm. Oh, and sass, too.

### Instructions

Activate your virtualenv and then do the following:

* `pip install -r requirements.txt`
* `npm install` (or `yarn install`, if you're into that)
* Create a file called `.env` and add `SECRET_KEY=some-long-random-string` to it
* `./manage.py migrate`
* `./manage.py createsuperuser`
* `npm run dev` (or `yarn run dev`)

and you should have a local copy up and running at `http://localhost:8000/`
