import {alert} from 'webext-alert';

const manifest = chrome.runtime.getManifest();
const name = manifest.short_name ?? manifest.name;
let message = name + ' is not meant to run on *every* website. Check the documentation or readme to learn how to enable the extension on individual websites.';

chrome.runtime.onInstalled.addListener(async () => {
	if (!await chrome.permissions.contains({origins: ['*://*/*']})) {
		return;
	}

	console.warn(name + ' was granted access to all websites by the user and it’s now been removed. https://github.com/fregante/webext-bugs/blob/main/source/no-all-urls.md');
	await chrome.permissions.remove({
		origins: [
			'*://*/*',
		],
	});
});

chrome.permissions.onAdded.addListener(async permissions => {
	if (!permissions.origins?.includes('*://*/*')) {
		return;
	}

	await chrome.permissions.remove({
		origins: [
			'*://*/*',
		],
	});

	await alert(message);
});

export function customizeNoAllUrlsErrorMessage(newMessage: string) {
	message = newMessage;
}
