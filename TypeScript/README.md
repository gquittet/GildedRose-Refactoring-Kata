<h1 align="center">
  GildedRose Refactoring Kata
</h1>

<p align="center">
  <a href="#">
    <img src="https://img.shields.io/badge/version-1.0.0-green" alt="GitHub package.json version">
  </a>
  <a href="https://www.npmjs.com/package/@gquittet/graceful-server" target="_blank" rel="noopener">
    <img src="https://img.shields.io/badge/language-TypeScript-blue" alt="TEJP version">
  </a>
</p>

---

- [Installation](#installation)
- [Goals](#goals)
- [Choices](#choices)
- [Requirements](#requirements)

## Installation

### Set up

1. Just clone the project

```
git clone https://github.com/gquittet/GildedRose-Refactoring-Kata
```

2. Install the dependencies

```
npm install
```

### Tests

To test this project, just run the below command:

```
npm test
```

### Build

To build this project run

```
npm run compile
```


## Goals

The goal of the GildRose kata is to learn how to refactor legacy code without editing some parts of the codebase.

### How to proceed?

- Write tests to get maximum coverage on the current codebase.
- Once we have a good overview thanks to our tests, we can start refactoring while respecting the
  guidelines of this kata.
- Choose the best way to structure the code and refactor it.
- Add tests for the new feature and implement it.
  
## Choices
- I chose the design pattern `Strategy` to structure my code.

        It gives me the possibility to have different variants of an algorithm
        inside an object at disposal, and to be able to switch from one
        algorithm to the other during execution.
        If I need to handle a legendary object, I can switch to the related
        strategy.
        Plus, I was able to add the new functionality with ease.
  
- I created the instances of my strategies inside a map to avoid creating instances
in the loop. Creating instances in a loop slow down the execution of the program 
due to an excessive use of the garbage collect.
- To have a cleaner codebase, I chose to put each part of the codebase in a dedicated file.


## Requirements

✔ NodeJS >= 10
