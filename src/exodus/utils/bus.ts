  type BusType = {
    emit: (name: string, data: any) => void;
    kill: () => void;
    end: (name: string) => void;
    clear: (name: string) => void;
    on: (name: string, callBack: Function) => void;
    once: (name: string, callBack: Function) => void;
    off: (name: string, callBack: Function) => void;
  };

  let once: Record<string, Array<Function>> = {};
  let events: Record<string, Array<Function>> = {};
  
  const Bus: BusType = Object.freeze({
    // emit an event
    emit(name, data) {
        const onceEvent = once[name];
        const event = events[name];
        if (onceEvent && onceEvent.length) {
          const clone = Array.from(onceEvent);
          delete once[name];
          clone.forEach((callback) => callback(data));
        }
        if (event && event.length) {
          event.forEach((callback) => callback(data));
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
      if (name in events) {
        if (events[name].includes(callback)) return;
        events[name].push(callback);
      } else {
        events[name] = [callback];
      }
    },
  
    // The event is called just one time then removed
    once(name, callback) {
      if (name in once) {
        if (once[name].includes(callback)) return;
        once[name].push(callback);
      } else {
        once[name] = [callback];
      }
    },
  
    // like clear but it needs callback reference
    off(name, reference) {
      if (!events[name]) return;
      const index = events[name].findIndex((c) => c === reference);
      if (index > -1) events[name].splice(index, 1);
      if (!events[name].length) this.clear(name);
    },
  });

  export default Bus;