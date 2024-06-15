class MenuPadrao extends HTMLElement {

	constructor(){
		super()

		const shadow = this.attachShadow({ mode: "open" })

		shadow.append(this.menu(), this.styles());
	}

	menu(){

		const header = document.createElement('header');
		const nav = document.createElement('nav');

		const logo = document.createElement('img');
		logo.setAttribute('src', 'assets/images/logos/logo.jpg');

		const textLogo = document.createElement('span');
		textLogo.innerText = 'Truck Away';

		const divLogo = document.createElement('div');
		divLogo.setAttribute('id', 'logo');
		divLogo.append(logo, textLogo)

		const link1 = document.createElement('a');
		link1.setAttribute('href', "#");
		link1.innerText = "Quem somos";

		const link2 = document.createElement('a');
		link2.setAttribute('href', "#");
		link2.innerText = "Clientes";

		const link3 = document.createElement('a');
		link3.setAttribute('href', "#");
		link3.innerText = "Serviços";

		const link4 = document.createElement('a');
		link4.setAttribute('href', "#");
		link4.innerText = "Contato";

		nav.append(link1,link2,link3,link4)

		header.append(divLogo, nav);

		return header;
	}

	styles(){
		const menuStyle = document.createElement('link');
		menuStyle.setAttribute('rel', 'stylesheet');
		menuStyle.setAttribute('type', 'text/css');
		menuStyle.setAttribute('href', './assets/scripts/components/menu/style.css');
		
		return menuStyle;
	}
}

customElements.define('menu-padrao', MenuPadrao)