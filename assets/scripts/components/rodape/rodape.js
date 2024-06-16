class Rodape extends HTMLElement{
	constructor(){
		super();

 		const shadow = this.attachShadow({mode:"open"});

 		shadow.append(this.rodape(), this.styles());
	}

	rodape(){
		const footer = document.createElement('footer');

		const titulo = document.createElement('h2');
		titulo.innerText = "Contato";

		const coluna1 = document.createElement('div');

		const coluna2 = document.createElement('div');

		const coluna3 = document.createElement('div');

		coluna1.innerHTML = `
			<h3>Nossas Redes</h3>

			<span class="logo">Caso queira falar sobre contratos, utilize os contatos "Paulo"</span>
			<span class="logo">Caso queria sobre RH ou conteúdo relacionado, utilze os contatos "Douglas"</span>
			<span class="logo"><img src="assets/images/logos/linkedin.png"/> Douglas</span>
		`;

		coluna2.innerHTML = `
			<h3>Douglas</h3>

			<span class="logo"><img src="assets/images/logos/e-mail.png"/> douglas.theRock@gmail.com</span>
			<span class="logo"><img src="assets/images/logos/telephone_724664.png"/> 11 94543 1923</span>
			<span class="logo"><img src="assets/images/logos/linkedin.png"/> Douglas</span>
		`;

		coluna3.innerHTML = `
			<h3>Paulo</h3>

			<span class="logo"><img src="assets/images/logos/e-mail.png"/> douglas.theRock@gmail.com</span>
			<span class="logo"><img src="assets/images/logos/telephone_724664.png"/> 11 92343 1923</span>
			<span class="logo"><img src="assets/images/logos/linkedin.png"/> paulo.vascaino1234@gmail.com</span>
		`;

		footer.append(titulo,coluna1,coluna2,coluna3)

		return footer;
	}

	styles(){
		const link = document.createElement('link');
		link.setAttribute('rel', 'stylesheet');
		link.setAttribute('type', 'text/css');
		link.setAttribute('href', 'assets/scripts/components/rodape/style.css');

		return link;
	}
}

customElements.define('rodape-padrao', Rodape);