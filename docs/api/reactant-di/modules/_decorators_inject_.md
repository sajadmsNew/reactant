---
id: "_decorators_inject_"
title: "@inject()"
sidebar_label: "@inject()"
---

▸ **inject**(`serviceIdentifierOrFunc?`: [ServiceIdentifierOrFunc](_interfaces_.md#serviceidentifierorfunc)‹any›): *(Anonymous function)*

*Defined in [packages/reactant-di/src/decorators/inject.ts:51](https://github.com/unadlib/reactant/blob/1f3f457d/packages/reactant-di/src/decorators/inject.ts#L51)*

## Description

You can use `@inject()` to perform the required dependency injection module to decorate in the constructor of an injectable class.

If the default is a dependency injection of the class itself as a type, e.g. `@inject(Foo) foo: Foo`, then it is exactly the same as `foo: Foo`.

## Example

```ts
@injectable()
class Bar {
  getValue() {
    return 'bar';
  }
}

@injectable()
class Foo {
  getValue() {
    return 'foo';
  }
}

@injectable()
class FooBar {
  constructor(@inject() public bar: Bar, @inject('foo') public foo: Foo) {}
}

const fooBar = testBed({
  modules: [
   Bar,
   { provide: 'foo', useClass: Foo },
  ],
  main: FooBar,
});

expect(fooBar.instance.foo.getValue()).toBe('foo');
```

**Parameters:**

Name | Type |
------ | ------ |
`serviceIdentifierOrFunc?` | [ServiceIdentifierOrFunc](_interfaces_.md#serviceidentifierorfunc)‹any› |

**Returns:** *(Anonymous function)*
