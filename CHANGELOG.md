## [1.3.0](https://github.com/Abadima/simply-api/releases/tag/v1.3.0) (2023-07-15)

### API Removals

* Remove `grammar()` function
* Remove `nsfw()` function

### Improvements

* `get()` and `post()` have been migrated to `api()` for simplicity
* Fixed typings (incorrect file extension)
* Added eslint checks for code quality

## [1.2.0](https://github.com/Abadima/simply-api) (2023-01-18)

### Features

* Add Tic-Tac-Toe endpoint
* Add Internal post() function
* Add Tic-Tac-Toe to README.md
* Convert commonJS to esModule
* Add changelogs

### Improvements

* Make chatbot() function more efficient
* Make grammar() function more efficient
* Make toxicity() function more efficient
* Make nsfw() function more efficient
* Make get() function more efficient
* Fix README.md code snippets
* Update engine to NodeJS 16.16 or higher

### Bug Fixes

* chatbot() developer parameter using incorrect type (boolean => string)

### Removals

* Remove redundant types