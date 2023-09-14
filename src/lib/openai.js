"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openai = void 0;
const openai_1 = require("openai");
require("dotenv");
exports.openai = new openai_1.OpenAI({
    apiKey: process.env.OPENAI_KEY,
});
