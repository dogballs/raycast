/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/input.ts":
/*!**********************!*\
  !*** ./src/input.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Input\": () => (/* binding */ Input),\n/* harmony export */   \"InputControl\": () => (/* binding */ InputControl),\n/* harmony export */   \"MouseCode\": () => (/* binding */ MouseCode),\n/* harmony export */   \"MouseInput\": () => (/* binding */ MouseInput)\n/* harmony export */ });\nvar KeyboardButtonCode;\n(function (KeyboardButtonCode) {\n    KeyboardButtonCode[KeyboardButtonCode[\"Backspace\"] = 8] = \"Backspace\";\n    KeyboardButtonCode[KeyboardButtonCode[\"Enter\"] = 13] = \"Enter\";\n    KeyboardButtonCode[KeyboardButtonCode[\"Esc\"] = 27] = \"Esc\";\n    KeyboardButtonCode[KeyboardButtonCode[\"Space\"] = 32] = \"Space\";\n    KeyboardButtonCode[KeyboardButtonCode[\"Left\"] = 37] = \"Left\";\n    KeyboardButtonCode[KeyboardButtonCode[\"Up\"] = 38] = \"Up\";\n    KeyboardButtonCode[KeyboardButtonCode[\"Right\"] = 39] = \"Right\";\n    KeyboardButtonCode[KeyboardButtonCode[\"Down\"] = 40] = \"Down\";\n    KeyboardButtonCode[KeyboardButtonCode[\"W\"] = 87] = \"W\";\n    KeyboardButtonCode[KeyboardButtonCode[\"A\"] = 65] = \"A\";\n    KeyboardButtonCode[KeyboardButtonCode[\"D\"] = 68] = \"D\";\n    KeyboardButtonCode[KeyboardButtonCode[\"S\"] = 83] = \"S\";\n    KeyboardButtonCode[KeyboardButtonCode[\"Num0\"] = 96] = \"Num0\";\n    KeyboardButtonCode[KeyboardButtonCode[\"Num2\"] = 98] = \"Num2\";\n    KeyboardButtonCode[KeyboardButtonCode[\"Num4\"] = 100] = \"Num4\";\n    KeyboardButtonCode[KeyboardButtonCode[\"Num5\"] = 101] = \"Num5\";\n    KeyboardButtonCode[KeyboardButtonCode[\"Num6\"] = 102] = \"Num6\";\n    KeyboardButtonCode[KeyboardButtonCode[\"Num8\"] = 104] = \"Num8\";\n})(KeyboardButtonCode || (KeyboardButtonCode = {}));\n// Values are button indexes based on https://w3c.github.io/gamepad/#remapping\nvar GamepadButtonCode;\n(function (GamepadButtonCode) {\n    GamepadButtonCode[GamepadButtonCode[\"A\"] = 0] = \"A\";\n    GamepadButtonCode[GamepadButtonCode[\"B\"] = 1] = \"B\";\n    GamepadButtonCode[GamepadButtonCode[\"X\"] = 2] = \"X\";\n    GamepadButtonCode[GamepadButtonCode[\"Y\"] = 3] = \"Y\";\n    GamepadButtonCode[GamepadButtonCode[\"LeftBumper\"] = 4] = \"LeftBumper\";\n    GamepadButtonCode[GamepadButtonCode[\"RightBumper\"] = 5] = \"RightBumper\";\n    GamepadButtonCode[GamepadButtonCode[\"LeftTrigger\"] = 6] = \"LeftTrigger\";\n    GamepadButtonCode[GamepadButtonCode[\"RightTrigger\"] = 7] = \"RightTrigger\";\n    GamepadButtonCode[GamepadButtonCode[\"Select\"] = 8] = \"Select\";\n    GamepadButtonCode[GamepadButtonCode[\"Back\"] = 8] = \"Back\";\n    GamepadButtonCode[GamepadButtonCode[\"Start\"] = 9] = \"Start\";\n    GamepadButtonCode[GamepadButtonCode[\"Forward\"] = 9] = \"Forward\";\n    GamepadButtonCode[GamepadButtonCode[\"LeftStick\"] = 10] = \"LeftStick\";\n    GamepadButtonCode[GamepadButtonCode[\"RightStick\"] = 11] = \"RightStick\";\n    GamepadButtonCode[GamepadButtonCode[\"Up\"] = 12] = \"Up\";\n    GamepadButtonCode[GamepadButtonCode[\"Down\"] = 13] = \"Down\";\n    GamepadButtonCode[GamepadButtonCode[\"Left\"] = 14] = \"Left\";\n    GamepadButtonCode[GamepadButtonCode[\"Right\"] = 15] = \"Right\";\n})(GamepadButtonCode || (GamepadButtonCode = {}));\nvar MouseCode;\n(function (MouseCode) {\n    MouseCode[MouseCode[\"LeftClick\"] = 0] = \"LeftClick\";\n})(MouseCode || (MouseCode = {}));\nvar InputControl;\n(function (InputControl) {\n    InputControl[InputControl[\"Up\"] = 0] = \"Up\";\n    InputControl[InputControl[\"Down\"] = 1] = \"Down\";\n    InputControl[InputControl[\"Left\"] = 2] = \"Left\";\n    InputControl[InputControl[\"Right\"] = 3] = \"Right\";\n    InputControl[InputControl[\"Select\"] = 4] = \"Select\";\n    InputControl[InputControl[\"Back\"] = 5] = \"Back\";\n})(InputControl || (InputControl = {}));\nconst KEYBOARD_BINDING = new Map();\nKEYBOARD_BINDING.set(InputControl.Up, [\n    KeyboardButtonCode.Up,\n    KeyboardButtonCode.W,\n    KeyboardButtonCode.Num8,\n]);\nKEYBOARD_BINDING.set(InputControl.Down, [\n    KeyboardButtonCode.Down,\n    KeyboardButtonCode.S,\n    KeyboardButtonCode.Num2,\n]);\nKEYBOARD_BINDING.set(InputControl.Left, [\n    KeyboardButtonCode.Left,\n    KeyboardButtonCode.A,\n    KeyboardButtonCode.Num4,\n]);\nKEYBOARD_BINDING.set(InputControl.Right, [\n    KeyboardButtonCode.Right,\n    KeyboardButtonCode.D,\n    KeyboardButtonCode.Num6,\n]);\nKEYBOARD_BINDING.set(InputControl.Select, [\n    KeyboardButtonCode.Enter,\n    KeyboardButtonCode.Space,\n    KeyboardButtonCode.Num0,\n    KeyboardButtonCode.Num5,\n]);\nKEYBOARD_BINDING.set(InputControl.Back, [\n    KeyboardButtonCode.Esc,\n    KeyboardButtonCode.Backspace,\n]);\nconst GAMEPAD_BINDING = new Map();\nGAMEPAD_BINDING.set(InputControl.Up, [GamepadButtonCode.Up]);\nGAMEPAD_BINDING.set(InputControl.Down, [GamepadButtonCode.Down]);\nGAMEPAD_BINDING.set(InputControl.Left, [GamepadButtonCode.Left]);\nGAMEPAD_BINDING.set(InputControl.Right, [GamepadButtonCode.Right]);\nGAMEPAD_BINDING.set(InputControl.Select, [\n    GamepadButtonCode.X,\n    GamepadButtonCode.Y,\n    GamepadButtonCode.A,\n    GamepadButtonCode.B,\n]);\nGAMEPAD_BINDING.set(InputControl.Back, [\n    GamepadButtonCode.Start,\n    GamepadButtonCode.Back,\n]);\nclass KeyboardInputDevice {\n    constructor() {\n        this.listenedDownCodes = [];\n        this.downCodes = [];\n        this.holdCodes = [];\n        this.upCodes = [];\n        this.handleWindowKeyDown = (ev) => {\n            const { keyCode } = ev;\n            if (!this.listenedDownCodes.includes(keyCode)) {\n                this.listenedDownCodes.push(keyCode);\n            }\n        };\n        this.handleWindowKeyUp = (ev) => {\n            const { keyCode } = ev;\n            const index = this.listenedDownCodes.indexOf(keyCode);\n            if (index !== -1) {\n                this.listenedDownCodes.splice(index, 1);\n            }\n        };\n        this.handleWindowBlur = () => {\n            this.listenedDownCodes = [];\n        };\n    }\n    isConnected() {\n        return true;\n    }\n    listen() {\n        document.addEventListener('keydown', this.handleWindowKeyDown);\n        document.addEventListener('keyup', this.handleWindowKeyUp);\n        window.addEventListener('blur', this.handleWindowBlur);\n    }\n    unlisten() {\n        document.removeEventListener('keydown', this.handleWindowKeyDown);\n        document.removeEventListener('keyup', this.handleWindowKeyUp);\n        window.removeEventListener('blur', this.handleWindowBlur);\n    }\n    update() {\n        const codes = this.listenedDownCodes;\n        const downCodes = [];\n        const holdCodes = [];\n        for (const code of codes) {\n            // Newly pressed key, which was not previously down or hold\n            if (!this.downCodes.includes(code) && !this.holdCodes.includes(code)) {\n                downCodes.push(code);\n            }\n            // Key that was down on previous frame is now considered hold, because\n            // it is still down on current frame.\n            // Hold key continues to be hold.\n            if (this.downCodes.includes(code) || this.holdCodes.includes(code)) {\n                holdCodes.push(code);\n            }\n        }\n        // Find keycodes that were down or hold on previous frame, which means\n        // that in current frame they are considered up\n        const upCodes = [];\n        for (const code of this.downCodes) {\n            if (!codes.includes(code)) {\n                upCodes.push(code);\n            }\n        }\n        for (const code of this.holdCodes) {\n            if (!codes.includes(code)) {\n                upCodes.push(code);\n            }\n        }\n        this.downCodes = downCodes;\n        this.holdCodes = holdCodes;\n        this.upCodes = upCodes;\n    }\n    getDownCodes() {\n        return this.downCodes;\n    }\n    getHoldCodes() {\n        return this.holdCodes;\n    }\n    getUpCodes() {\n        return this.upCodes;\n    }\n}\nconst GAMEPAD_AXIS_THRESHOLD = 0.8;\nclass GamepadInputDevice {\n    constructor() {\n        this.deviceIndex = 0;\n        this.isListening = false;\n        this.downCodes = [];\n        this.holdCodes = [];\n        this.upCodes = [];\n    }\n    isConnected() {\n        const gamepad = this.getGamepad();\n        if (gamepad === null) {\n            return false;\n        }\n        return true;\n    }\n    listen() {\n        this.isListening = true;\n    }\n    unlisten() {\n        this.isListening = false;\n    }\n    update() {\n        if (!this.isListening) {\n            return;\n        }\n        const gamepad = this.getGamepad();\n        if (gamepad === null) {\n            return;\n        }\n        // Extract buttons that are in pressed state.ts\n        const codes = new Set();\n        const { buttons } = gamepad;\n        for (let i = 0; i < buttons.length; i += 1) {\n            const button = buttons[i];\n            if (button.pressed === true) {\n                codes.add(i);\n            }\n        }\n        // Convert left stick movements to left/right/up/down button presses\n        if (gamepad.axes.length >= 2) {\n            const leftStickX = gamepad.axes[0];\n            const leftStickY = gamepad.axes[1];\n            if (leftStickX < -GAMEPAD_AXIS_THRESHOLD) {\n                codes.add(GamepadButtonCode.Left);\n            }\n            else if (leftStickX > GAMEPAD_AXIS_THRESHOLD) {\n                codes.add(GamepadButtonCode.Right);\n            }\n            if (leftStickY < -GAMEPAD_AXIS_THRESHOLD) {\n                codes.add(GamepadButtonCode.Up);\n            }\n            else if (leftStickY > GAMEPAD_AXIS_THRESHOLD) {\n                codes.add(GamepadButtonCode.Down);\n            }\n        }\n        const downCodes = [];\n        const holdCodes = [];\n        for (const code of codes) {\n            // Newly pressed key, which was not previously down or hold\n            if (!this.downCodes.includes(code) && !this.holdCodes.includes(code)) {\n                downCodes.push(code);\n            }\n            // Button that was down on previous frame is now considered hold, because\n            // it is still down on current frame.\n            // Hold continues to be hold.\n            if (this.downCodes.includes(code) || this.holdCodes.includes(code)) {\n                holdCodes.push(code);\n            }\n        }\n        // Find buttons that were down or hold on previous frame, which means\n        // that in current frame they are considered up\n        const upCodes = [];\n        for (const code of this.downCodes) {\n            if (!codes.has(code)) {\n                upCodes.push(code);\n            }\n        }\n        for (const code of this.holdCodes) {\n            if (!codes.has(code)) {\n                upCodes.push(code);\n            }\n        }\n        this.downCodes = downCodes;\n        this.holdCodes = holdCodes;\n        this.upCodes = upCodes;\n    }\n    getDownCodes() {\n        return this.downCodes;\n    }\n    getHoldCodes() {\n        return this.holdCodes;\n    }\n    getUpCodes() {\n        return this.upCodes;\n    }\n    getGamepad() {\n        const gamepads = navigator.getGamepads();\n        // Firefox will have empty array\n        if (gamepads.length === 0) {\n            return null;\n        }\n        const gamepad = gamepads[this.deviceIndex];\n        // Chrome will have filled array of 4 elements with null values\n        // Value will be null after device is connected or page is reloaded,\n        // until user has pressed any button.\n        if (gamepad === null) {\n            return null;\n        }\n        return gamepad;\n    }\n}\nclass MouseInput {\n    constructor() {\n        this.listenedDownCodes = [];\n        this.listenedDownPoints = [];\n        this.downCodes = [];\n        this.downPoints = [];\n        this.holdCodes = [];\n        this.holdPoints = [];\n        this.listenedOverPoint = null;\n        this.overPoint = { x: 0, y: 0 };\n        this.handleWindowMouseDown = (ev) => {\n            const { button: code } = ev;\n            const rect = ev.target.getBoundingClientRect();\n            const x = ev.clientX - rect.left;\n            const y = ev.clientY - rect.top;\n            if (!this.listenedDownCodes.includes(code)) {\n                this.listenedDownCodes.push(code);\n                this.listenedDownPoints.push({ x, y });\n            }\n        };\n        this.handleWindowMouseUp = (ev) => {\n            const { button: code } = ev;\n            const index = this.listenedDownCodes.indexOf(code);\n            if (index !== -1) {\n                this.listenedDownCodes.splice(index, 1);\n                this.listenedDownPoints.splice(index, 1);\n            }\n        };\n        this.handleWindowMouseMove = (ev) => {\n            const rect = ev.target.getBoundingClientRect();\n            const x = ev.clientX - rect.left;\n            const y = ev.clientY - rect.top;\n            this.listenedOverPoint = { x, y };\n        };\n    }\n    listen(canvas) {\n        canvas.addEventListener('mousedown', this.handleWindowMouseDown);\n        canvas.addEventListener('mouseup', this.handleWindowMouseUp);\n        canvas.addEventListener('mousemove', this.handleWindowMouseMove);\n    }\n    update(scale) {\n        const codes = this.listenedDownCodes;\n        const points = this.listenedDownPoints;\n        const downCodes = [];\n        const downPoints = [];\n        const holdCodes = [];\n        const holdPoints = [];\n        for (const [index, code] of codes.entries()) {\n            const point = points[index];\n            // Newly pressed key, which was not previously down or hold\n            if (!this.downCodes.includes(code) && !this.holdCodes.includes(code)) {\n                downCodes.push(code);\n                downPoints.push({ x: point.x * scale.x, y: point.y * scale.y });\n            }\n            // Key that was down on previous frame is now considered hold, because\n            // it is still down on current frame.\n            // Hold key continues to be hold.\n            if (this.downCodes.includes(code) || this.holdCodes.includes(code)) {\n                holdCodes.push(code);\n                holdPoints.push({\n                    x: this.listenedOverPoint.x * scale.x,\n                    y: this.listenedOverPoint.y * scale.y,\n                });\n            }\n        }\n        this.downCodes = downCodes;\n        this.downPoints = downPoints;\n        this.holdCodes = holdCodes;\n        this.holdPoints = holdPoints;\n        if (this.listenedOverPoint) {\n            this.overPoint = {\n                x: this.listenedOverPoint.x * scale.x,\n                y: this.listenedOverPoint.y * scale.y,\n            };\n        }\n    }\n    isDown(code) {\n        return this.downCodes.includes(code);\n    }\n    getDownPoint(code) {\n        const index = this.downCodes.indexOf(code);\n        const point = this.downPoints[index];\n        return point;\n    }\n    isHold(code) {\n        return this.holdCodes.includes(code);\n    }\n    getHoldPoint(code) {\n        const index = this.holdCodes.indexOf(code);\n        const point = this.holdPoints[index];\n        return point;\n    }\n    getOverPoint() {\n        return this.overPoint;\n    }\n}\nclass InputMethod {\n    constructor(device, binding) {\n        this.device = device;\n        this.binding = binding;\n    }\n    isDown(control) {\n        const codes = this.unmap(control);\n        const downCodes = this.device.getDownCodes();\n        return codes.some((code) => downCodes.includes(code));\n    }\n    isHold(control) {\n        const codes = this.unmap(control);\n        const holdCodes = this.device.getHoldCodes();\n        return codes.some((code) => holdCodes.includes(code));\n    }\n    getHoldLastOf(controls) {\n        let latestIndex = -1;\n        let latestControl = undefined;\n        const holdCodes = this.device.getHoldCodes();\n        for (const control of controls) {\n            const codes = this.unmap(control);\n            for (const code of codes) {\n                const codeIndex = holdCodes.indexOf(code);\n                if (codeIndex !== -1 && codeIndex > latestIndex) {\n                    latestIndex = codeIndex;\n                    latestControl = control;\n                }\n            }\n        }\n        return latestControl;\n    }\n    unmap(control) {\n        return this.binding.get(control);\n    }\n}\nvar InputDeviceType;\n(function (InputDeviceType) {\n    InputDeviceType[InputDeviceType[\"Keyboard\"] = 0] = \"Keyboard\";\n    InputDeviceType[InputDeviceType[\"Gamepad\"] = 1] = \"Gamepad\";\n})(InputDeviceType || (InputDeviceType = {}));\nclass Input {\n    constructor() {\n        this.methodMap = new Map();\n        this.activeDeviceType = InputDeviceType.Keyboard;\n        this.methodMap.set(InputDeviceType.Keyboard, new InputMethod(new KeyboardInputDevice(), KEYBOARD_BINDING));\n        this.methodMap.set(InputDeviceType.Gamepad, new InputMethod(new GamepadInputDevice(), GAMEPAD_BINDING));\n    }\n    isDown(control) {\n        return this.methodMap.get(this.activeDeviceType).isDown(control);\n    }\n    isHold(control) {\n        return this.methodMap.get(this.activeDeviceType).isHold(control);\n    }\n    getHoldLastOf(controls) {\n        return this.methodMap.get(this.activeDeviceType).getHoldLastOf(controls);\n    }\n    update() {\n        const activeDevice = this.methodMap.get(this.activeDeviceType).device;\n        this.methodMap.forEach((method, deviceType) => {\n            method.device.update();\n            // Check each device if it has any events. If it does, and it is not an active device - activate a new one.\n            const downCodes = method.device.getDownCodes();\n            const hasActivity = downCodes.length > 0;\n            const isSameDeviceActive = activeDevice === method.device;\n            if (hasActivity && !isSameDeviceActive) {\n                this.activeDeviceType = deviceType;\n            }\n        });\n    }\n    listen() {\n        this.methodMap.forEach((method) => {\n            method.device.listen();\n        });\n    }\n    unlisten() {\n        this.methodMap.forEach((method) => {\n            method.device.unlisten();\n        });\n    }\n}\n\n\n//# sourceURL=webpack:///./src/input.ts?");

/***/ }),

/***/ "./src/loop.ts":
/*!*********************!*\
  !*** ./src/loop.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameLoop\": () => (/* binding */ GameLoop)\n/* harmony export */ });\nconst DEFAULT_OPTIONS = {\n    deltaTimeLimit: 1,\n    // requestAnimationFrame is usually 60 fps; in seconds\n    fps: 120,\n};\nvar State;\n(function (State) {\n    State[State[\"Idle\"] = 0] = \"Idle\";\n    State[State[\"Working\"] = 1] = \"Working\";\n    State[State[\"StopRequested\"] = 2] = \"StopRequested\";\n})(State || (State = {}));\nclass GameLoop {\n    constructor(options = {}) {\n        this.lastTimestamp = null;\n        this.requestedStop = false;\n        this.state = State.Idle;\n        this.loop = (timestamp = null) => {\n            var _a, _b;\n            if (this.state === State.Idle) {\n                return;\n            }\n            if (this.state === State.StopRequested) {\n                this.state = State.Idle;\n                return;\n            }\n            const idealDeltaTime = this.getIdealDeltaTime();\n            // For the very first run loop() is called from the code and timestamp is\n            // not known. On the second call loop() is called by requestAnimationFrame,\n            // which also provides a timestamp.\n            // Use ideal fixed delta value for the first run.\n            let deltaTime = idealDeltaTime;\n            if (timestamp !== null) {\n                // Timestamp is originally in milliseconds, convert to seconds\n                const deltaTimestamp = timestamp - this.lastTimestamp;\n                if (Math.round(this.getFpsInterval()) - Math.round(deltaTimestamp) > 2) {\n                    window.requestAnimationFrame(this.loop);\n                    return;\n                }\n                deltaTime = deltaTimestamp / 1000;\n                // If delta is too large, we must have resumed from stop() or breakpoint.\n                // Use ideal default delta only for this frame.\n                if (deltaTime > this.options.deltaTimeLimit) {\n                    deltaTime = idealDeltaTime;\n                }\n            }\n            this.lastTimestamp = timestamp;\n            const lastTime = timestamp / 1000;\n            (_b = (_a = this.options).onTick) === null || _b === void 0 ? void 0 : _b.call(_a, { deltaTime, lastTime });\n            window.requestAnimationFrame(this.loop);\n        };\n        this.options = Object.assign({}, DEFAULT_OPTIONS, options);\n    }\n    start() {\n        if (this.state !== State.Idle) {\n            return;\n        }\n        this.state = State.Working;\n        this.loop();\n    }\n    // WARNING: a couple of already queued callbacks might still fire after stop\n    stop() {\n        if (this.state !== State.Working) {\n            return;\n        }\n        this.state = State.StopRequested;\n    }\n    getFpsInterval() {\n        return 1000 / this.options.fps;\n    }\n    getIdealDeltaTime() {\n        return 1 / this.options.fps;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/loop.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ \"./src/input.ts\");\n/* harmony import */ var _loop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loop */ \"./src/loop.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nconst canvas = document.createElement('canvas');\nconst ctx = canvas.getContext('2d');\ndocument.body.appendChild(canvas);\nconst SCALE = 1;\nconst IW = 640;\nconst IH = 480;\nconst CW = 64;\nconst PW = 8;\nconst PLAYER_SPEED = 200;\ncanvas.width = IW;\ncanvas.height = IH;\ncanvas.style.background = '#000';\ncanvas.style.width = `${IW * SCALE}px`;\nconst input = new _input__WEBPACK_IMPORTED_MODULE_0__.Input();\ninput.listen();\nconst mouseInput = new _input__WEBPACK_IMPORTED_MODULE_0__.MouseInput();\nmouseInput.listen(canvas);\nconst loop = new _loop__WEBPACK_IMPORTED_MODULE_1__.GameLoop({\n    onTick: tick,\n});\nconst player = {\n    x: 3 * CW,\n    y: 3 * CW,\n};\nlet dir = {\n    x: 1,\n    y: 0,\n    l: 0,\n};\nlet cam = {\n    x: 0,\n    y: 0,\n};\nlet collisions = [];\nlet intersections = [];\nconst fov = 60;\nconst map = [];\nfor (let i = 0; i < IW; i += CW) {\n    map.push([]);\n    for (let j = 0; j < IH; j += CW) {\n        map[i / CW].push(0);\n    }\n}\nfunction drawGrid() {\n    ctx.strokeStyle = '#777';\n    for (let i = 0; i < IW; i += CW) {\n        ctx.beginPath();\n        ctx.moveTo(i, 0);\n        ctx.lineTo(i, IH);\n        ctx.stroke();\n    }\n    for (let i = 0; i < IH; i += CW) {\n        ctx.beginPath();\n        ctx.moveTo(0, i);\n        ctx.lineTo(IW, i);\n        ctx.stroke();\n    }\n}\nfunction drawPlayer() {\n    ctx.fillStyle = '#f00';\n    ctx.fillRect(player.x - PW / 2, player.y - PW / 2, PW, PW);\n}\nfunction drawTarget() {\n    const point = mouseInput.getOverPoint();\n    ctx.fillStyle = '#0f0';\n    ctx.fillRect(point.x - PW / 2, point.y - PW / 2, PW, PW);\n}\nfunction drawDir() {\n    ctx.strokeStyle = '#0f0';\n    ctx.beginPath();\n    ctx.moveTo(player.x, player.y);\n    ctx.lineTo(cam.x, cam.y);\n    ctx.stroke();\n}\nfunction drawCam() {\n    const camHw = Math.tan((fov / 2) * (Math.PI / 180)) * dir.l;\n    const rx = -(cam.y - player.y);\n    const ry = cam.x - player.x;\n    const rl = Math.sqrt(rx * rx + ry * ry);\n    const camRight = {\n        x: cam.x + (rx / rl) * camHw,\n        y: cam.y + (ry / rl) * camHw,\n    };\n    ctx.strokeStyle = '#ffff00';\n    ctx.beginPath();\n    ctx.moveTo(cam.x, cam.y);\n    ctx.lineTo(camRight.x, camRight.y);\n    ctx.lineTo(player.x, player.y);\n    ctx.stroke();\n    const lx = cam.y - player.y;\n    const ly = -(cam.x - player.x);\n    const ll = Math.sqrt(lx * lx + ly * ly);\n    const camLeft = {\n        x: cam.x + (lx / ll) * camHw,\n        y: cam.y + (ly / ll) * camHw,\n    };\n    ctx.strokeStyle = '#ffff00';\n    ctx.beginPath();\n    ctx.moveTo(cam.x, cam.y);\n    ctx.lineTo(camLeft.x, camLeft.y);\n    ctx.lineTo(player.x, player.y);\n    ctx.stroke();\n}\nfunction drawCollisions() {\n    ctx.strokeStyle = '#fff';\n    for (const collision of collisions) {\n        ctx.strokeRect(collision.x * CW, collision.y * CW, CW, CW);\n    }\n}\nfunction drawIntersections() {\n    ctx.strokeStyle = '#fff';\n    for (const intersection of intersections) {\n        ctx.beginPath();\n        ctx.arc(intersection.x, intersection.y, 5, 0, Math.PI * 2);\n        ctx.stroke();\n    }\n}\nfunction drawMap() {\n    ctx.fillStyle = '#00f';\n    for (let i = 0; i < IW; i += CW) {\n        for (let j = 0; j < IH; j += CW) {\n            if (map[i / CW][j / CW]) {\n                ctx.fillRect(i, j, CW, CW);\n            }\n        }\n    }\n}\nfunction updatePlayer({ deltaTime }) {\n    const posChange = PLAYER_SPEED * deltaTime;\n    if (input.isHold(_input__WEBPACK_IMPORTED_MODULE_0__.InputControl.Up)) {\n        player.y -= posChange;\n    }\n    if (input.isHold(_input__WEBPACK_IMPORTED_MODULE_0__.InputControl.Down)) {\n        player.y += posChange;\n    }\n    if (input.isHold(_input__WEBPACK_IMPORTED_MODULE_0__.InputControl.Left)) {\n        player.x -= posChange;\n    }\n    if (input.isHold(_input__WEBPACK_IMPORTED_MODULE_0__.InputControl.Right)) {\n        player.x += posChange;\n    }\n}\nfunction updateDir() {\n    const overPoint = mouseInput.getOverPoint();\n    const x = overPoint.x - player.x;\n    const y = overPoint.y - player.y;\n    const l = Math.sqrt(x * x + y * y) || 1;\n    dir = {\n        x: x / l,\n        y: y / l,\n        l,\n    };\n}\nfunction updateCam() {\n    cam = {\n        x: player.x + dir.x * dir.l,\n        y: player.y + dir.y * dir.l,\n    };\n}\nfunction updateMap() {\n    if (mouseInput.isHold(_input__WEBPACK_IMPORTED_MODULE_0__.MouseCode.LeftClick)) {\n        const point = mouseInput.getHoldPoint(_input__WEBPACK_IMPORTED_MODULE_0__.MouseCode.LeftClick);\n        const cell = {\n            x: Math.floor(point.x / CW),\n            y: Math.floor(point.y / CW),\n        };\n        map[cell.x][cell.y] = 1;\n    }\n}\nfunction updateCollisions() {\n    collisions = [];\n    intersections = [];\n    const rayStart = {\n        x: player.x,\n        y: player.y,\n    };\n    const rayDir = {\n        x: dir.x,\n        y: dir.y,\n    };\n    const rayUnitStepSize = {\n        x: Math.sqrt(1 + Math.pow((rayDir.y / rayDir.x), 2)),\n        y: Math.sqrt(1 + Math.pow((rayDir.x / rayDir.y), 2)),\n    };\n    const mapCheck = {\n        x: Math.floor(player.x / CW),\n        y: Math.floor(player.y / CW),\n    };\n    const rayLength = {\n        x: 0,\n        y: 0,\n    };\n    const step = { x: 0, y: 0 };\n    if (rayDir.x < 0) {\n        step.x = -1;\n        rayLength.x = (rayStart.x - mapCheck.x * CW) * rayUnitStepSize.x;\n    }\n    else {\n        step.x = 1;\n        rayLength.x = ((mapCheck.x + 1) * CW - rayStart.x) * rayUnitStepSize.x;\n    }\n    if (rayDir.y < 0) {\n        step.y = -1;\n        rayLength.y = (rayStart.y - mapCheck.y * CW) * rayUnitStepSize.y;\n    }\n    else {\n        step.y = 1;\n        rayLength.y = ((mapCheck.y + 1) * CW - rayStart.y) * rayUnitStepSize.y;\n    }\n    const maxDistance = 300;\n    let found = false;\n    let distance = 0;\n    while (!found && distance < maxDistance) {\n        if (rayLength.x < rayLength.y) {\n            mapCheck.x += step.x;\n            distance = rayLength.x;\n            rayLength.x += rayUnitStepSize.x * CW;\n        }\n        else {\n            mapCheck.y += step.y;\n            distance = rayLength.y;\n            rayLength.y += rayUnitStepSize.y * CW;\n        }\n        if (mapCheck.x < 0 ||\n            mapCheck.y < 0 ||\n            mapCheck.x >= map.length ||\n            mapCheck.y >= map[0].length) {\n            break;\n        }\n        if (map[mapCheck.x][mapCheck.y] === 1) {\n            found = true;\n            collisions.push(Object.assign({}, mapCheck));\n        }\n    }\n    if (found) {\n        intersections.push({\n            x: rayStart.x + rayDir.x * distance,\n            y: rayStart.y + rayDir.y * distance,\n        });\n    }\n}\nfunction update({ deltaTime }) {\n    updateMap();\n    updatePlayer({ deltaTime });\n    updateDir();\n    updateCam();\n    updateCollisions();\n}\nfunction draw() {\n    ctx.clearRect(0, 0, IW, IH);\n    drawGrid();\n    drawMap();\n    drawPlayer();\n    drawTarget();\n    drawDir();\n    drawCam();\n    drawCollisions();\n    drawIntersections();\n}\nfunction tick({ deltaTime }) {\n    input.update();\n    mouseInput.update({ x: 1 / SCALE, y: 1 / SCALE });\n    update({ deltaTime });\n    draw();\n}\nfunction main() {\n    return __awaiter(this, void 0, void 0, function* () {\n        loop.start();\n    });\n}\nmain();\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;