![react icon](https://github.com/Zefevr/hangman-react-redux/blob/master/public/dev-icons/react.svg) 
![redux icon](https://github.com/Zefevr/hangman-react-redux/blob/master/public/dev-icons/redux.svg) 
![js icon](https://github.com/Zefevr/hangman-react-redux/blob/master/public/dev-icons/js.svg) 
![html icon](https://github.com/Zefevr/hangman-react-redux/blob/master/public/dev-icons/html.svg) 
![css icon](https://github.com/Zefevr/hangman-react-redux/blob/master/public/dev-icons/css.svg)

## The Hangman Game using React-redux:
> Assigment made for Codaissuer

### To run this project:
* Clone the repo.
* Run `yarn` to install dependencies.
* Run `yarn start`.

### Structure of the app:
- The folder lib contains game logic.
- In actions folder I imported the randomWord function of the logic and exported the 2 actions (NewGame and makeGuess).
- Passed those actions to the reducers, one for the game and another for the guesses.
- The components, hangman for the total game and letters for each guess.
- One container for the componets (Board) which is passed to the App.js.

### To Do:
1. Fixing the problem when submiting a number or a letter twice.
2. Adding some nice styling
