//SLIDES - http://slides.com/es1831/reacto-2#/

var EventEmitter = function () {
    this.events = {};
};

EventEmitter.prototype.on = function (eventStr, fn) {

    if (!this.events[eventStr]) {
        this.events[eventStr] = [];
    }

    this.events[eventStr].push(fn);

};

EventEmitter.prototype.emit = function (eventStr, eventData) {

    if (!this.events[eventStr]) {
        return;
    }

    this.events[eventStr].forEach(function (fn) {
        fn(eventData);
    });

};

EventEmitter.prototype.removeListener = function (eventStr, fn) {

    var eventFns = this.events[eventStr];

    if (!eventFns) return;

    var i = eventFns.indexOf(fn);

    if (i === -1) return;

    eventFns.splice(i, 1);

};
