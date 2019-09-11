#!/usr/bin/node
console.log('hello world!');

const log=console.log;

const EventEmitter = require('events').EventEmitter,
      util=require('util');
function Radio(station) {
  EventEmitter.call(this);
  var self = this;
  setTimeout(() => {
    self.emit('open', station);
  }, 0);
  setTimeout(() => {
    self.emit('stop', station);
  }, 5000);
}
util.inherits(Radio, EventEmitter);
module.exports = Radio;
