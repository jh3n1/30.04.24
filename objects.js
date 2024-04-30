class Calebe {
    constructor (pinterest) {
        this.site = pinterest;
    }

    exibirSite () {
        window.open(this.site)
    }
}
var novoCalebe = new Calebe ("https://br.pinterest.com/pin/13581236382167873/");
novoCalebe.exibirSite();