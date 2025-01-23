# webext-bugs/no-all-urls

<img src="https://github.com/user-attachments/assets/62c79d16-09b1-4cd4-a689-2a05b2a70d35" align="right">

Firefox and Safari let the users enable the extension on *every website* if `optional_host_permissions` or `optional_permissions` include `<all_urls>` or `*://*/*`. [More details](https://github.com/w3c/webextensions/issues/700).

Generally this is not the intention of the extension developer and it can lead to unexpected behavior. The user should just enable the extension on each website individually, for example using [webext-permission-toggle](https://github.com/fregante/webext-permission-toggle).

This helper will immediately undo the user's action when they enable the extension on all websites. This also works retroactively if it detects the "all urls" permission on update.

```js
// In background.js
import 'webext-bugs/no-all-urls';
```

Alternatively, you can customize the message:

```js
// In background.js
import {customizeNoAllUrlsErrorMessage} from 'webext-bugs/no-all-urls';

customizeNoAllUrlsErrorMessage('Refined GitHub is not meant to run on every website. Open the options for more info.');
```

## Compatibility

- Firefox
- Safari
- Chrome (even if it doesn't have such button/toggle)

## Permissions

- `<all_urls>` or `*://*/*` as optional permissions

## Context

- Background

## [Main page ⏎](../readme.md)
