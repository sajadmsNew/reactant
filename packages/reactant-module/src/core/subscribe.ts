/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { Unsubscribe } from 'redux';
import { Subscribe } from '../interfaces';
import { storeKey, subscriptionsKey } from '../constants';

/**
 * ## Description
 *
 * You can use `subscribe` to subscribe to state changes in any class module.
 *
 * ## Example
 *
 * ```ts
 * @injectable()
 * class Counter {
 *   constructor() {
 *     subscribe(this, () => {
 *       if (this.count === 3) {
 *         console.log(`new value: ${newValue}`);
 *       }
 *     });
 *   }
 *
 *   @state
 *   count = 0;
 *
 *   @action
 *   increase() {
 *     this.count += 0;
 *   }
 * }
 *
 * const app = testBed({
 *   modules: [],
 *   main: Counter,
 * });
 * ```
 */
const subscribe: Subscribe = (service, listener) => {
  if (typeof listener !== 'function') {
    throw new Error(`The 'listener' should be a function.`);
  }
  let unsubscribe: Unsubscribe;
  if (service[storeKey]) {
    unsubscribe = service[storeKey]?.subscribe(listener)!;
  } else {
    // When constructing
    const subscriptions = service[subscriptionsKey] || [];
    let _unsubscribe: Unsubscribe;
    subscriptions.push(() => {
      _unsubscribe = service[storeKey]?.subscribe(listener)!;
    });
    unsubscribe = () => _unsubscribe();
    Object.assign(service, {
      [subscriptionsKey]: subscriptions,
    });
  }
  return unsubscribe!;
};

export { subscribe };
