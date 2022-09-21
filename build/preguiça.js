"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.preguica = void 0;
var animal_1 = require("./animal");
var preguica = /** @class */ (function (_super) {
    __extends(preguica, _super);
    function preguica(nome, idade, escalar) {
        var _this = _super.call(this, nome, idade) || this;
        _this.escalar = escalar;
        return _this;
    }
    preguica.prototype.som = function () {
        console.log("".concat(this.nome, " emite sons!"));
    };
    preguica.prototype.escalar = function () {
        console.log("".concat(this.nome, " Pode escalar arvores!"));
    };
    return preguica;
}(animal_1.Animal));
exports.preguica = preguica;
