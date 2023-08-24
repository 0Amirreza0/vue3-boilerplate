/**
 * @callback SubscriptionCallback
 * @param {...*} args
 */

/**
 * @typedef {Object} Subscriber
 * @property {string} id
 * @property {?SubscriptionCallback} callback
 * @property {?Function} unsubscribe
 */

/**
 * @typedef {Object} GetSubscriberMapOptions
 * @param {boolean} [createIfAbsent=false]
 */

import deepClone from './utilities/deep-clone.js';

class EventBus {
  #eventsSubscriberMap;

  /**
   * Create a new EventBus
   */
  constructor() {
    this.#eventsSubscriberMap = {};
  }

  /**
   * @param {string} eventName
   * @param { GetSubscriberMapOptions } options
   * @returns {?Object.<Symbol, Subscriber>} Subscriber map for the event
   */
  _getEventSubscriberMap(eventName, { createIfAbsent = false } = {}) {
    if (!eventName) throw new Error('eventName is required');

    const subscriptionMap = this.#eventsSubscriberMap[eventName];

    if (!subscriptionMap && createIfAbsent)
      this.#eventsSubscriberMap[eventName] = {};

    return this.#eventsSubscriberMap[eventName];
  }

  /**
   *
   * @param {string} eventName
   * @returns {?Array.<Subscriber>} List of subscribers
   */
  _getEventSubscribersAsList = (eventName) => {
    const subscriberMap = this._getEventSubscriberMap(eventName);
    if (!subscriberMap) return;

    const subscriberIdList = Object.getOwnPropertySymbols(subscriberMap);

    return subscriberIdList.map((subscriberId) => ({
      callback: subscriberMap[subscriberId],
      id: subscriberId,
    }));
  };

  /**
   *
   * @param {string} eventName
   * @returns {?Object.<Symbol, Subscriber>} Subscriber map for the event
   */
  _garbageCollector(eventName) {
    const subscriberList = this._getEventSubscribersAsList(eventName);
    if (!subscriberList) return;

    const subscriberMap = {};
    let isGarbageEvent = true;

    subscriberList.forEach((subscriber) => {
      const { id, callback } = subscriber;
      const hasCallback = !!callback;

      if (!hasCallback) return;

      subscriberMap[id] = callback;
      isGarbageEvent = false;
    });

    if (!isGarbageEvent)
      return (this.#eventsSubscriberMap[eventName] = subscriberMap);

    const { [eventName]: garbageEvent, ...otherEvents } =
      this.#eventsSubscriberMap;

    this.#eventsSubscriberMap = otherEvents;
  }

  /**
   *
   * @param {string} eventName
   * @param {Symbol} subscriptionId
   */
  _unsubscribe(eventName, subscriptionId) {
    const subscriberMap = this._getEventSubscriberMap(eventName);

    subscriberMap[subscriptionId] = null;
    this._garbageCollector(eventName);
  }

  /**
   *
   * @param {string} eventName
   * @param {Function} callback
   * @returns {Subscriber} A new subscriber
   */
  subscribeOn(eventName, callback) {
    const subscriberMap = this._getEventSubscriberMap(eventName, {
      createIfAbsent: true,
    });
    const subscriptionId = Symbol(eventName);

    subscriberMap[subscriptionId] = callback;

    return {
      id: subscriptionId,
      unsubscribe: () => this._unsubscribe(eventName, subscriptionId),
    };
  }

  // TODO: subscribeOnceOn

  /**
   *
   * @param {string} eventName
   * @param  {...any} args
   */
  publish(eventName, ...args) {
    const subscriberList = this._getEventSubscribersAsList(eventName) ?? [];

    subscriberList.forEach((subscriber) => {
      const subscriptionArguments = deepClone(args);
      subscriber.callback(...subscriptionArguments);
    });
  }
}

export default EventBus;
