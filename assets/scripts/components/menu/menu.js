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
		link1.innerText = "Quem somos";

		const link2 = document.createElement('a');
		link2.innerText = "Clientes";

		const link3 = document.createElement('a');
		link3.innerText = "Serviços";

		const link4 = document.createElement('a');
		link4.innerText = "Contato";

		header.append(divLogo, link1,link2,link3,link4);

		return header;
	}

	styles(){
		const menuStyle = document.createElement('style');
		menuStyle.innerHTML = `<link rel="stylesheet" type="text/css" href="./assets/scripts/components/menu/style.css" />`;

		console.log('oi', menuStyle)
		return menuStyle;
	}
}

customElements.define('menu-padrao', MenuPadrao)