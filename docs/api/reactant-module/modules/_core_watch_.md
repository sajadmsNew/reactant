---
id: "_core_watch_"
title: "watch()"
sidebar_label: "watch()"
---

## Index

### Functions

* [watch](_core_watch_.md#const-watch)

## Functions

### `Const` watch

▸ **watch**(`service`: [Service](../interfaces/_interfaces_.service.md)‹object› & object, `selector`: function, `watcher`: function, `__namedParameters`: object): *Unsubscribe*

*Defined in [packages/reactant-module/src/core/watch.ts:38](https://github.com/unadlib/reactant/blob/1f3f457d/packages/reactant-module/src/core/watch.ts#L38)*

## Description

You can use `watch` to observe a specific state changes in any class module.

## Example

```ts
@injectable()
class Counter {
  constructor() {
    watch(this, () => this.count, (newValue) => {
      if (newValue === 3) {
        console.log(`new value: ${newValue}`);
      }
    });
  }

  @state
  count = 0;

  @action
  increase() {
    this.count += 0;
  }
}

const app = testBed({
  modules: [],
  main: Counter,
});
```

**Parameters:**

▪ **service**: *[Service](../interfaces/_interfaces_.service.md)‹object› & object*

▪ **selector**: *function*

▸ (): *T*

▪ **watcher**: *function*

▸ (`newValue`: T, `oldValue`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`newValue` | T |
`oldValue` | T |

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`isEqual` | isEqual | defaultIsEqual |
`multiple` | false &#124; true &#124; P | false |

**Returns:** *Unsubscribe*
