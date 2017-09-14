var game = new Engine;

(function() {

	const BASENAME = 'test';
	const MEMORY_SIZE = 16777216;
	const DEBUG_ENABLED = true;
	const INDETERMINATE_STATUS_STEP_MS = 100;

	var container = document.getElementById('container');
	var canvas = document.getElementById('canvas');
	var statusProgress = document.getElementById('status-progress');
	var statusProgressInner = document.getElementById('status-progress-bar-inner');
	var statusIndeterminate = document.getElementById('status-indeterminate');
	var statusNotice = document.getElementById('status-notice');

	var initializing = true;
	var statusMode = 'hidden';

	setStatusMode('indeterminate');
	// setStatusMode('progress');
	game.setCanvas(canvas);
	game.setAsmjsMemorySize(MEMORY_SIZE);

	function setStatusMode(mode) {

		if (statusMode === mode || !initializing)
			return;
		[statusProgress, statusIndeterminate, statusNotice].forEach(elem => {
			elem.style.display = 'none';
		});
		switch (mode) {
			case 'progress':
				statusProgress.style.display = 'block';
				break;
			case 'indeterminate':
				statusIndeterminate.style.display = 'flex';
				break;
			case 'notice':
				statusNotice.style.display = 'block';
				break;
			case 'hidden':
				break;
			default:
				throw new Error("Invalid status mode");
		}
		statusMode = mode;
	}

	function setStatusNotice(text) {

		while (statusNotice.lastChild) {
			statusNotice.removeChild(statusNotice.lastChild);
		}
		var lines = text.split('\n');
		lines.forEach((line, index) => {
			statusNotice.appendChild(document.createTextNode(line));
			statusNotice.appendChild(document.createElement('br'));
		});
	};

	game.setProgressFunc((current, total) => {

		if (total > 0) {
			statusProgressInner.style.width = current/total * 100 + '%';
			setStatusMode('progress');
			if (current === total) {
				// wait for progress bar animation
				setTimeout(() => {
					setStatusMode('indeterminate');
				}, 500);
			}
		} else {
			setStatusMode('indeterminate');
		}
	});

	if (DEBUG_ENABLED) {
		var outputRoot = document.getElementById("output-panel");
		var outputScroll = document.getElementById("output-scroll");
		var OUTPUT_MSG_COUNT_MAX = 400;

		document.getElementById('output-clear').addEventListener('click', () => {
			while (outputScroll.firstChild) {
				outputScroll.firstChild.remove();
			}
		});

		outputRoot.style.display = 'block';

		function print(text) {
			if (arguments.length > 1) {
				text = Array.prototype.slice.call(arguments).join(" ");
			}
			if (text.length <= 0) return;
			while (outputScroll.childElementCount >= OUTPUT_MSG_COUNT_MAX) {
				outputScroll.firstChild.remove();
			}
			var msg = document.createElement("div");
			if (String.prototype.trim.call(text).startsWith("**ERROR**")) {
				msg.style.color = "#d44";
			} else if (String.prototype.trim.call(text).startsWith("**WARNING**")) {
				msg.style.color = "#ccc000";
			} else if (String.prototype.trim.call(text).startsWith("**SCRIPT ERROR**")) {
				msg.style.color = "#c6d";
			}
			msg.textContent = text;
			var scrollToBottom = outputScroll.scrollHeight - (outputScroll.clientHeight + outputScroll.scrollTop) < 10;
			outputScroll.appendChild(msg);
			if (scrollToBottom) {
				outputScroll.scrollTop = outputScroll.scrollHeight;
			}
		};

		function printError(text) {
			print('**ERROR**' + ":", text);
		}

		game.setStdoutFunc(text => {
			print(text);
			console.log(text);
		});

		game.setStderrFunc(text => {
			printError(text);
			console.warn(text);
		});
	}

	game.start(BASENAME + '.pck').then(() => {
		setStatusMode('hidden');
		initializing = false;
	}, err => {
		if (DEBUG_ENABLED)
			printError(err.message);
		setStatusNotice(err.message);
		setStatusMode('notice');
		initializing = false;
	});
})();
