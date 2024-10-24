
type Listener = (...any) => void;

export default class EventEmitter {

  addListener(eventName: string, listener: Listener) {

    if (!this._listeners[eventName]) {
      this._listeners[eventName] = [];
    }
    if (this._listeners[eventName].indexOf(listener) === -1) {
      this._listeners[eventName].push(listener);
    }
  }

  emit(eventName: string, ...args) {

    if (!this._listeners[eventName]) {
      return;
    }
    for (const listener of this._listeners[eventName]) {
      try {
        listener(...args);
      } catch (error) {
        console.error(`An error occurred while invoking the '${eventName}' event handler.`, error);
      }
    }
  }

  removeListener(eventName: string, listener: Listener) {

    if (!this._listeners[eventName]) {
      return;
    }
    const index = this._listeners[eventName].indexOf(listener);
    if (index !== -1) {
      this._listeners[eventName].splice(index, 1);
    }
  }

  private _listeners = {} as { [eventName: string]: Listener[] };
}
