import {isChrome} from 'webext-detect';
import {createContextMenu} from 'webext-tools';

const manifest = chrome.runtime.getManifest();
if (!manifest.options_page && !manifest.options_ui) {
	console.warn('webext-bugs/options-menu-item: No options page found in the manifest');
}

if (!isChrome()) {
	void createContextMenu({
		id: 'WEBEXT_BUGS_OPTIONS',
		title: 'Options…',
		contexts: 'action' in chrome ? ['action'] : ['browser_action'],
		onclick: async () => chrome.runtime.openOptionsPage(),
	});
}
