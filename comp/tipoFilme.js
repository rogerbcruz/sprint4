"use strict";
var tipoFilme;
(function (tipoFilme) {
    tipoFilme[tipoFilme["curtaMetragem"] = 1] = "curtaMetragem";
    tipoFilme[tipoFilme["longaMetrage"] = 2] = "longaMetrage";
    tipoFilme[tipoFilme["serie"] = 3] = "serie";
})(tipoFilme || (tipoFilme = {}));
