class Rodape extends HTMLElement{
	constructor(){
		super();

 		const shadow = this.attachSadow({mode:"open"});

 		shadow.append(rodape(), styles());
	}

	rodape(){
		const footer = document.createElement('footer');

		const coluna1 = document.createElement('div');
		coluna1.setAttribute('clas', 'colunaFooter');


	}
}