# REACTO Event Emitter

*Difficulty: Medium*

| Cohort | Date       |
|--------|------------|
| 1503   | 2015-5     |


[Slides](http://slides.com/es1831/reacto-2)
---

Your REACTO question today is to implement a familiar Javascript concept: the EventEmitter. It works like this:

You can create an EventEmitter:

```javascript
var myEventEmitter = new EventEmitter();
```

And you can register listeners to different event strings with an `on` method:

```javascript
myEventEmitter.on('anImportantEvent', function (eventDetails) {
  console.log('Something important just happened!', eventDetails);
});
```

These listeners get called when the created event emitter `emit`s the event with related data:

```javascript
myEventEmitter.emit('anImportantEvent', { location: 'Fullstack' });
```

You can also unregister a listener using a `removeListener` method:

```javascript
var fn = function () {
  console.log('Cool, my event happened!');
};

// Listener is attached.
myEventEmitter.on('prestoBango', fn); 

// Listener is no longer attached and has moved on with its life.
myEventEmitter.removeListener('prestoBango', fn); 
```

That's it, good luck!

## Overview of full functionality

```javascript

var superbowl = new EventEmitter();

var cheer = function (data) {
  console.log('RAAAAAHHHH!!!! Go ' + data.scoringTeam);
};

var jeer = function (data) {
  console.log('BOOOOOO ' + data.scoringTeam);
};

superbowl.on('touchdown', cheer);
superbowl.on('touchdown', jeer);

superbowl.emit('touchdown', { scoringTeam: 'Patriots' }); // Both cheer and jeer are called with data.

superbowl.removeListener('touchdown', jeer);

superbowl.emit('touchdown', { scoringTeam: 'Seahawks' }); // Only cheer is called.

```
