# Snippets - v0.5
Useful snippets of Javascript code

### Shortcuts
* [forEachThen](#forEachThen)
* [isFullscreen](#isFullscreen)
* [kmToMiles](#kmToMiles)
* [milesToKm](#milesToKm)
* [removeDuplicates](#removeDuplicates)

### Purpose
The purpose of this project is to hone my javascript and problem solving skills while also giving everyone who wants it a library with useful functions that solves common day to day problems.

### How to contribute
1. File an issue with a function suggestion that you'd like to see in the library. Then I will try to code it. Tag it with `enhancement`.
2. See a bug in the current code? 
  1. Fork the library.
  2. Fix the issue.
  3. Create a pull request.

### The functions
##### <a name="forEachThen"></a>forEachThen
```javascript
// Accepts: An array, a callback function for each iteration
// and a function to do after the iteration is done.
// Remember to do the next() call with the iteration function.
// This function is good for when you have asynchronus things
// and want to control when they are done.
var arr = [1,2,3,4,5];
forEachThen(arr, function (a, next){
  // Do you iterations here
  next();
}, function () {
  // Do something here when all is done
});
// Returns: Nothing
```
##### <a name="isFullscreen"></a>isFullscreen
```javascript
// Accepts: No arguments
s_.isFullscreen();
// Returns: A boolean value. True if you are in fullscreen and false if not.
```
##### <a name="kmToMiles"></a>kmToMiles
```javascript
// Accepts: A number
s_.kmToMiles(10);
// 6.21371192
// Returns: The number converted to miles.
```
##### <a name="milesToKm"></a>milesToKm
```javascript
// Accepts: A number
s_.milesToKm(10);
// 16.09344
// Returns: The number converted to kilometers.
```
##### <a name="removeDuplicates"></a>removeDuplicates
```javascript
// Accepts: An array of strings and/or numbers.
s_.removeDuplicates([1, 2, 3, 3, 'string', 'string']); 
// [1, 2, 3, 'string']
// Returns: An array without any duplicate entries.
```

### Versioning
* Every new function added will be a minor version.
* Every ten new functions will be a major version.

### License
MIT License - Use this library however you want, as is, without warranty.
