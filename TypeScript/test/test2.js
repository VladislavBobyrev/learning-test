"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var a = react_1.default.createElement("div", { tabIndex: 0 },
    react_1.default.createElement("span", null, 1 + 1));
var c = 'oishafh';
// не будет работать тк tsx понимает это строку как элемент react
//const b = <string> c 
var b = c;
