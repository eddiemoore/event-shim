/* global define: false */

(function (factory) {

  if (typeof define === 'function') {
    define(factory)
  } else {
    module.exports = factory.call(null)
  }

}(function () {
  
  var Event // constructor, function

  var HAS_EVENT_INTERFACE = typeof window !== 'undefined' && typeof window.Event !== 'undefined'

  if (!HAS_EVENT_INTERFACE) {

    /**
     * @constructor
     * @param {object} data (optional)
     */
    Event = function (type, data) {
      if (data) {
        this.setData(data)
      }

      this.type = type
      this.isPropagationStopped = false
    }

    /**
     * @param {object} data
     * @return {void}
     * @throws {Error} if data argument is invalid
     */
    Event.prototype.setData = function (data) {
      var property

      if (typeof data !== 'object') {
        throw new Error('Event data is not an object.')
      }

      for (property in data) {
        if (data.hasOwnProperty(property)) {
          this[property] = data[property]
        }
      }
    }

    /**
     * @return {void}
     */
    Event.prototype.stopPropagation = function () {
      this.isPropagationStopped = true
    }
  }
  
  else {
    
    Event = window.Event
    
  }

  return Event

}))
