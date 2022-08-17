var EventEmitter = function(){
    this.events = {}
}

EventEmitter.prototype.on = function(evt,func){
    if (!this.events[evt]) this.events[evt] = []
    this.events[evt].push(func)
}

//single argument emitter
EventEmitter.prototype.emitSimple = function(evt,data){
    this.events[evt].forEach(function(func){
        func(data)
    });
}

//multiple arguments emitter
EventEmitter.prototype.emit = function(evt, data){
    var args = Array.prototype.slice.call(arguments,1,arguments.length)
    this.events[evt].forEach(function giveArguments(func){
        func.apply(null,args)
    });
}

//multiple arguments emitter, ES6
EventEmitter.prototype.emitBetter = function(evt, ...data){
    this.events[evt].forEach(function giveArguments(func){
        func.apply(null,data)
    });
}

EventEmitter.prototype.removeListener = function(evt,func){
    var idxToRemove = this.events[evt].indexOf(func);
    this.events[evt].splice(idxToRemove,1)
}