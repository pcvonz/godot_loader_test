webpackJsonp([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__loading_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__loading_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__godot_scss__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__godot_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__godot_scss__);





/***/ }),
/* 1 */
/***/ (function(module, exports) {

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


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[0]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWRpbmcuc2Nzcz9hMmQ2Iiwid2VicGFjazovLy8uL3NyYy9nb2RvdC5zY3NzP2YyZWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7Ozs7O0FDRkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7Ozs7Ozs7QUMzSUQseUM7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6Im1haW4uYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2xvYWRpbmcuanMnXG5pbXBvcnQgJy4vbG9hZGluZy5zY3NzJ1xuaW1wb3J0ICcuL2dvZG90LnNjc3MnXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2FtZSA9IG5ldyBFbmdpbmU7XG5cbihmdW5jdGlvbigpIHtcblxuXHRjb25zdCBCQVNFTkFNRSA9ICd0ZXN0Jztcblx0Y29uc3QgTUVNT1JZX1NJWkUgPSAxNjc3NzIxNjtcblx0Y29uc3QgREVCVUdfRU5BQkxFRCA9IHRydWU7XG5cdGNvbnN0IElOREVURVJNSU5BVEVfU1RBVFVTX1NURVBfTVMgPSAxMDA7XG5cblx0dmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcblx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcblx0dmFyIHN0YXR1c1Byb2dyZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1cy1wcm9ncmVzcycpO1xuXHR2YXIgc3RhdHVzUHJvZ3Jlc3NJbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXMtcHJvZ3Jlc3MtYmFyLWlubmVyJyk7XG5cdHZhciBzdGF0dXNJbmRldGVybWluYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1cy1pbmRldGVybWluYXRlJyk7XG5cdHZhciBzdGF0dXNOb3RpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzLW5vdGljZScpO1xuXG5cdHZhciBpbml0aWFsaXppbmcgPSB0cnVlO1xuXHR2YXIgc3RhdHVzTW9kZSA9ICdoaWRkZW4nO1xuXG5cdHNldFN0YXR1c01vZGUoJ2luZGV0ZXJtaW5hdGUnKTtcblx0Ly8gc2V0U3RhdHVzTW9kZSgncHJvZ3Jlc3MnKTtcblx0Z2FtZS5zZXRDYW52YXMoY2FudmFzKTtcblx0Z2FtZS5zZXRBc21qc01lbW9yeVNpemUoTUVNT1JZX1NJWkUpO1xuXG5cdGZ1bmN0aW9uIHNldFN0YXR1c01vZGUobW9kZSkge1xuXG5cdFx0aWYgKHN0YXR1c01vZGUgPT09IG1vZGUgfHwgIWluaXRpYWxpemluZylcblx0XHRcdHJldHVybjtcblx0XHRbc3RhdHVzUHJvZ3Jlc3MsIHN0YXR1c0luZGV0ZXJtaW5hdGUsIHN0YXR1c05vdGljZV0uZm9yRWFjaChlbGVtID0+IHtcblx0XHRcdGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHR9KTtcblx0XHRzd2l0Y2ggKG1vZGUpIHtcblx0XHRcdGNhc2UgJ3Byb2dyZXNzJzpcblx0XHRcdFx0c3RhdHVzUHJvZ3Jlc3Muc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnaW5kZXRlcm1pbmF0ZSc6XG5cdFx0XHRcdHN0YXR1c0luZGV0ZXJtaW5hdGUuc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdub3RpY2UnOlxuXHRcdFx0XHRzdGF0dXNOb3RpY2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnaGlkZGVuJzpcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHN0YXR1cyBtb2RlXCIpO1xuXHRcdH1cblx0XHRzdGF0dXNNb2RlID0gbW9kZTtcblx0fVxuXG5cdGZ1bmN0aW9uIHNldFN0YXR1c05vdGljZSh0ZXh0KSB7XG5cblx0XHR3aGlsZSAoc3RhdHVzTm90aWNlLmxhc3RDaGlsZCkge1xuXHRcdFx0c3RhdHVzTm90aWNlLnJlbW92ZUNoaWxkKHN0YXR1c05vdGljZS5sYXN0Q2hpbGQpO1xuXHRcdH1cblx0XHR2YXIgbGluZXMgPSB0ZXh0LnNwbGl0KCdcXG4nKTtcblx0XHRsaW5lcy5mb3JFYWNoKChsaW5lLCBpbmRleCkgPT4ge1xuXHRcdFx0c3RhdHVzTm90aWNlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxpbmUpKTtcblx0XHRcdHN0YXR1c05vdGljZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcblx0XHR9KTtcblx0fTtcblxuXHRnYW1lLnNldFByb2dyZXNzRnVuYygoY3VycmVudCwgdG90YWwpID0+IHtcblxuXHRcdGlmICh0b3RhbCA+IDApIHtcblx0XHRcdHN0YXR1c1Byb2dyZXNzSW5uZXIuc3R5bGUud2lkdGggPSBjdXJyZW50L3RvdGFsICogMTAwICsgJyUnO1xuXHRcdFx0c2V0U3RhdHVzTW9kZSgncHJvZ3Jlc3MnKTtcblx0XHRcdGlmIChjdXJyZW50ID09PSB0b3RhbCkge1xuXHRcdFx0XHQvLyB3YWl0IGZvciBwcm9ncmVzcyBiYXIgYW5pbWF0aW9uXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHNldFN0YXR1c01vZGUoJ2luZGV0ZXJtaW5hdGUnKTtcblx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0U3RhdHVzTW9kZSgnaW5kZXRlcm1pbmF0ZScpO1xuXHRcdH1cblx0fSk7XG5cblx0aWYgKERFQlVHX0VOQUJMRUQpIHtcblx0XHR2YXIgb3V0cHV0Um9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0LXBhbmVsXCIpO1xuXHRcdHZhciBvdXRwdXRTY3JvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dC1zY3JvbGxcIik7XG5cdFx0dmFyIE9VVFBVVF9NU0dfQ09VTlRfTUFYID0gNDAwO1xuXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dHB1dC1jbGVhcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0d2hpbGUgKG91dHB1dFNjcm9sbC5maXJzdENoaWxkKSB7XG5cdFx0XHRcdG91dHB1dFNjcm9sbC5maXJzdENoaWxkLnJlbW92ZSgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0b3V0cHV0Um9vdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuXHRcdGZ1bmN0aW9uIHByaW50KHRleHQpIHtcblx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHR0ZXh0ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5qb2luKFwiIFwiKTtcblx0XHRcdH1cblx0XHRcdGlmICh0ZXh0Lmxlbmd0aCA8PSAwKSByZXR1cm47XG5cdFx0XHR3aGlsZSAob3V0cHV0U2Nyb2xsLmNoaWxkRWxlbWVudENvdW50ID49IE9VVFBVVF9NU0dfQ09VTlRfTUFYKSB7XG5cdFx0XHRcdG91dHB1dFNjcm9sbC5maXJzdENoaWxkLnJlbW92ZSgpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIG1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRpZiAoU3RyaW5nLnByb3RvdHlwZS50cmltLmNhbGwodGV4dCkuc3RhcnRzV2l0aChcIioqRVJST1IqKlwiKSkge1xuXHRcdFx0XHRtc2cuc3R5bGUuY29sb3IgPSBcIiNkNDRcIjtcblx0XHRcdH0gZWxzZSBpZiAoU3RyaW5nLnByb3RvdHlwZS50cmltLmNhbGwodGV4dCkuc3RhcnRzV2l0aChcIioqV0FSTklORyoqXCIpKSB7XG5cdFx0XHRcdG1zZy5zdHlsZS5jb2xvciA9IFwiI2NjYzAwMFwiO1xuXHRcdFx0fSBlbHNlIGlmIChTdHJpbmcucHJvdG90eXBlLnRyaW0uY2FsbCh0ZXh0KS5zdGFydHNXaXRoKFwiKipTQ1JJUFQgRVJST1IqKlwiKSkge1xuXHRcdFx0XHRtc2cuc3R5bGUuY29sb3IgPSBcIiNjNmRcIjtcblx0XHRcdH1cblx0XHRcdG1zZy50ZXh0Q29udGVudCA9IHRleHQ7XG5cdFx0XHR2YXIgc2Nyb2xsVG9Cb3R0b20gPSBvdXRwdXRTY3JvbGwuc2Nyb2xsSGVpZ2h0IC0gKG91dHB1dFNjcm9sbC5jbGllbnRIZWlnaHQgKyBvdXRwdXRTY3JvbGwuc2Nyb2xsVG9wKSA8IDEwO1xuXHRcdFx0b3V0cHV0U2Nyb2xsLmFwcGVuZENoaWxkKG1zZyk7XG5cdFx0XHRpZiAoc2Nyb2xsVG9Cb3R0b20pIHtcblx0XHRcdFx0b3V0cHV0U2Nyb2xsLnNjcm9sbFRvcCA9IG91dHB1dFNjcm9sbC5zY3JvbGxIZWlnaHQ7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIHByaW50RXJyb3IodGV4dCkge1xuXHRcdFx0cHJpbnQoJyoqRVJST1IqKicgKyBcIjpcIiwgdGV4dCk7XG5cdFx0fVxuXG5cdFx0Z2FtZS5zZXRTdGRvdXRGdW5jKHRleHQgPT4ge1xuXHRcdFx0cHJpbnQodGV4dCk7XG5cdFx0XHRjb25zb2xlLmxvZyh0ZXh0KTtcblx0XHR9KTtcblxuXHRcdGdhbWUuc2V0U3RkZXJyRnVuYyh0ZXh0ID0+IHtcblx0XHRcdHByaW50RXJyb3IodGV4dCk7XG5cdFx0XHRjb25zb2xlLndhcm4odGV4dCk7XG5cdFx0fSk7XG5cdH1cblxuXHRnYW1lLnN0YXJ0KEJBU0VOQU1FICsgJy5wY2snKS50aGVuKCgpID0+IHtcblx0XHRzZXRTdGF0dXNNb2RlKCdoaWRkZW4nKTtcblx0XHRpbml0aWFsaXppbmcgPSBmYWxzZTtcblx0fSwgZXJyID0+IHtcblx0XHRpZiAoREVCVUdfRU5BQkxFRClcblx0XHRcdHByaW50RXJyb3IoZXJyLm1lc3NhZ2UpO1xuXHRcdHNldFN0YXR1c05vdGljZShlcnIubWVzc2FnZSk7XG5cdFx0c2V0U3RhdHVzTW9kZSgnbm90aWNlJyk7XG5cdFx0aW5pdGlhbGl6aW5nID0gZmFsc2U7XG5cdH0pO1xufSkoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2xvYWRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9sb2FkaW5nLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9nb2RvdC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=