function isString(obj) {
  return typeof obj === "string";
}

function isFunction(obj) {
  return typeof obj === "function";
}

let once = {};
let events = {};

export default Object.freeze({
  // emit an event
  emit(name, data) {
    if (isString(name) && name.length) {
      const onceEvent = once[name];
      const event = events[name];
      if (Array.isArray(onceEvent)) {
        const clone = Array.from(onceEvent);
        delete once[name];
        clone.forEach((callback) => callback(data));
      }
      if (Array.isArray(event)) {
        event.forEach((callback) => callback(data));
      }
    }
  },

  // reset bus
  kill() {
    once = {};
    events = {};
  },

  // remove all listeners but those called once
  end(name) {
    delete events[name];
  },

  // remove all listeners tied to an event
  clear(name) {
    delete once[name];
    this.end(name);
  },

  // register event with a callback
  on(name, callback) {
    if (!isString(name) || !name.length || !isFunction(callback)) return;

    if (name in events) {
      if (events[name].includes(callback)) return;
      events[name].push(callback);
    } else {
      events[name] = [callback];
    }
  },

  // The event is called just one time then removed
  once(name, callback) {
    if (!isString(name) || !name.length || !isFunction(callback)) return;

    if (name in once) {
      if (once[name].includes(callback)) return;
      once[name].push(callback);
    } else {
      once[name] = [callback];
    }
  },

  // like clear but it needs callback reference
  off(name, reference) {
    if (!isString(name) || !isFunction(reference) || !events[name]) return;
    const index = events[name].findIndex((c) => c === reference);
    if (index > -1) events[name].splice(index, 1);
    if (!events[name].length) this.clear(name);
  },
});
