---
id: "_core_createstore_"
title: "core/createStore"
sidebar_label: "core/createStore"
---

## Index

### Functions

* [createStore](_core_createstore_.md#createstore)

## Functions

###  createStore

▸ **createStore**<**T**>(`modules`: ModuleOptions[], `container`: Container, `ServiceIdentifiers`: ServiceIdentifiersMap, `loadedModules`: Set‹any›, `load`: function, `pluginHooks`: [PluginHooks](_interfaces_.md#pluginhooks), `preloadedState?`: PreloadedState‹T›, `devOptions`: [DevOptions](../interfaces/_interfaces_.devoptions.md), `originalStore?`: [ReactantStore](_interfaces_.md#reactantstore), `beforeReplaceReducer?`: undefined | function, `modulesMap`: [ModulesMap](_interfaces_.md#modulesmap)): *[ReactantStore](_interfaces_.md#reactantstore)*

*Defined in [packages/reactant-module/src/core/createStore.ts:51](https://github.com/unadlib/reactant/blob/1f3f457d/packages/reactant-module/src/core/createStore.ts#L51)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **modules**: *ModuleOptions[]*

▪ **container**: *Container*

▪ **ServiceIdentifiers**: *ServiceIdentifiersMap*

▪ **loadedModules**: *Set‹any›*

▪ **load**: *function*

▸ (...`args`: Parameters‹[Loader](_interfaces_.md#loader)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | Parameters‹[Loader](_interfaces_.md#loader)› |

▪ **pluginHooks**: *[PluginHooks](_interfaces_.md#pluginhooks)*

▪`Optional`  **preloadedState**: *PreloadedState‹T›*

▪`Default value`  **devOptions**: *[DevOptions](../interfaces/_interfaces_.devoptions.md)*= {}

▪`Optional`  **originalStore**: *[ReactantStore](_interfaces_.md#reactantstore)*

▪`Optional`  **beforeReplaceReducer**: *undefined | function*

▪`Default value`  **modulesMap**: *[ModulesMap](_interfaces_.md#modulesmap)*= {}

**Returns:** *[ReactantStore](_interfaces_.md#reactantstore)*
