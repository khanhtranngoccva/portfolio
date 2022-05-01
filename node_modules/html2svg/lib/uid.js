"use strict";

module.exports = function uid() {
    return Math.random().toString(36).slice(2);
};