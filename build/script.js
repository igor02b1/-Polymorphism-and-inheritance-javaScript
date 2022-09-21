"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cachorro_1 = require("./cachorro");
var cavalo_1 = require("./cavalo");
var pregui_a_1 = require("./pregui\u00E7a");
var Cachorro = new cachorro_1.cachorro('Eredin', 4, true);
var Cavalo = new cavalo_1.cavalo('Carpeado', 9, true);
var Preguica = new pregui_a_1.preguica('Larry', 12, true);
function som(animal) {
    animal.som();
}
som(Cavalo);
som(Cachorro);
som(Preguica);
