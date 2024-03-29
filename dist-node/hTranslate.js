"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.translate = exports.loadFile = exports.config = void 0;
var jsonTranslate;
var baseLang = "en";
/**
 *
 * @returns String | null
 */
var getMetaFile = function () {
    var element = document.querySelector('meta[name="h-translate"]');
    if (element instanceof HTMLMetaElement) {
        return element.content;
    }
    return null;
};
var getLang = function () {
    var userLang = navigator.language;
    return userLang;
};
var getFileTranslate = function (meta, nameFile) { return __awaiter(void 0, void 0, void 0, function () {
    var langFile, metaFile, response, data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                langFile = getLang();
                if (!(baseLang != langFile)) return [3 /*break*/, 8];
                metaFile = null;
                if (!meta) return [3 /*break*/, 2];
                return [4 /*yield*/, getMetaFile()];
            case 1:
                metaFile = _a.sent();
                return [3 /*break*/, 3];
            case 2:
                metaFile = nameFile;
                _a.label = 3;
            case 3:
                if (metaFile != null) {
                    langFile = langFile + '.' + metaFile;
                }
                _a.label = 4;
            case 4:
                _a.trys.push([4, 7, , 8]);
                return [4 /*yield*/, fetch('langs/' + langFile + '.json')];
            case 5:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error('Error loading the JSON file');
                }
                return [4 /*yield*/, response.json()];
            case 6:
                data = _a.sent();
                if (jsonTranslate == undefined) {
                    jsonTranslate = data;
                }
                return [2 /*return*/, data];
            case 7:
                error_1 = _a.sent();
                return [2 /*return*/, {}];
            case 8: return [2 /*return*/, {}];
        }
    });
}); };
var config = function (config) {
    for (var key in config) {
        if (Object.prototype.hasOwnProperty.call(config, key)) {
            var element = config[key];
            switch (key) {
                case "baseLang":
                    baseLang = element;
                    break;
            }
        }
    }
};
exports.config = config;
var loadFile = function (nameFile) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(nameFile == null)) return [3 /*break*/, 2];
                return [4 /*yield*/, getFileTranslate(true)];
            case 1:
                _a.sent();
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, getFileTranslate(false, nameFile)];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [2 /*return*/, true];
        }
    });
}); };
exports.loadFile = loadFile;
/**
 *
 * @param text string
 * @param impType string // normal, element,
 * @returns
 */
var translate = function (text, impType, querySelector) {
    if (impType === void 0) { impType = "normal"; }
    switch (impType) {
        case "element":
            var element = document.querySelector(querySelector);
            if (element instanceof HTMLElement) {
                var textTrans = jsonTranslate != undefined ? (jsonTranslate[text] || text) : text;
                element.innerHTML = element.innerHTML.replace("".concat(text), "".concat(textTrans));
            }
            break;
        case "normal":
        default:
            return jsonTranslate != undefined ? (jsonTranslate[text] || text) : text;
            break;
    }
};
exports.translate = translate;
