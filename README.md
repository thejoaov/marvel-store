# Marvel Store

## Description

Little application to test [Marvel API](https://developer.marvel.com).

## Dependencies

- React
- React Hooks API
- Styled-Components
- Redux/Saga
- Reactotron Configured
- Redux Persist
- Global Styles and more

## Run locally

To run it, create your account and get your Api Key from [Marvel API](https://developer.marvel.com), then run:

`cp .env.example .env`

It will create a `.env` file that will get caught by git.
There will be three entries:

```
REACT_APP_API=https://gateway.marvel.com
REACT_APP_MARVEL_PUB_KEY=
REACT_APP_MARVEL_PRIV_KEY=
```

#### REACT_APP_API

- The Marvel API base url endpoint

#### REACT_APP_MARVEL_PUB_KEY

- Your Marvel API **Public key**

#### REACT_APP_MARVEL_PRIV_KEY

- Your Marvel API **Private Key**

After you filled the environment variables, just run `yarn start`, it will install the dependencies and run the project :smile:

## Just remember:

![img](https://i.kym-cdn.com/photos/images/masonry/000/933/851/c8e.jpg)
