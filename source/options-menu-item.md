# webext-bugs/options-menu-item

Chrome lets user reach the options via browser action context menu. However in Safari and Firefox you need a few more clicks to reach it.

This helper will automatically add an "Options…" menu item to the browser action context menu where missing.

```js
// In background.js
import 'webext-bugs/options-menu-item';
```

## Compatibility

- Firefox
- Safari
- Chrome is automatically excluded

## Permissions

- `contextMenus`

You also have to specify `action` in the manifest, even if it's empty, and enable the options via `options_ui` or `options_page`:

```json
{
    "name": "My Cool Extension",
    "manifest_version": 3,
    "version": "1.0.0",
    "background": {
        "service_worker": "background.js"
    },
    "action": {},
    "options_page": "options.html",
    "permissions": ["contextMenus"]
}
```

In MV2 the key is `browser_action`.

## Context

- Background

## [Main page ⏎](../readme.md)
