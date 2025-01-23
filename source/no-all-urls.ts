import webextAlert from 'webext-alert';
import chromeP from 'webext-polyfill-kinda';

const {name} = chrome.runtime.getManifest();
let message = name + ' is not meant to run on *every* website. Check the documentation or readme to learn how to enable the extension on individual websites.';

chrome.runtime.onInstalled.addListener(async () => {
	if (await chromeP.permissions.contains({origins: ['*://*/*']})) {
		console.warn(name + ' was granted access to all websites by the user and it’s now been removed. https://github.com/fregante/webext-bugs/blob/main/source/no-all-urls.md');
		await chrome.permissions.remove({
			origins: [
				'*://*/*',
			],
		});
	}
});

chrome.permissions.onAdded.addListener(async permissions => {
	if (permissions.origins?.includes('*://*/*')) {
		await chrome.permissions.remove({
			origins: [
				'*://*/*',
			],
		});

		await webextAlert(message);
	}
});

export function customizeNoAllUrlsErrorMessage(newMessage: string) {
	message = newMessage;
}
