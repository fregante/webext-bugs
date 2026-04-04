import {isSafari} from 'webext-detect';

// WTF Safari. CMD-R doesn't reload extension pages like the options page
if ('window' in globalThis && isSafari()) {
	document.addEventListener('keydown', event => {
		if (event.key.toLowerCase() === 'r' && (event.metaKey || event.ctrlKey) && !event.shiftKey && !event.altKey) {
			event.preventDefault();
			location.reload();
		}
	});
}
