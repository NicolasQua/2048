import { HeaderComponent } from './components/header.component.js'
import { MainComponent } from './components/main.component.js'
import { HomeComponent } from './components/home.component.js'
import { MainComponentLeft } from './components/main.component.left.js';
import { MainComponentCenter } from './components/main.component.center.js';
import { MainComponentRight } from './components/main.component.right.js';
import { FooterComponent } from './components/footer.component.js';
import { PossibilitiesComponent } from './components/possibilities.component.js';
import { gestionnaire, createGrid } from './utils/gestionnaire.js';
import { initCanvas } from "../Snake/js/script.js";
import { init } from "../2048/js/script.js";
import { ecouteurChangeSize } from "../2048/js/ecouteurs.js";
import { templateCenter } from "./template/2048.template.js";
import { query_selector_left, query_selector_root, query_selector_footer, query_selector_right } from './components/request.queryselector.js';
import { templateCenterStyle4 } from './template/2048.template.style4.js';

window.onload = initialise;

function initialise() {

	customElements.define("home-component", HomeComponent);
	customElements.define("header-component", HeaderComponent);
	customElements.define("main-component", MainComponent);
	customElements.define("main-component-left", MainComponentLeft);
	customElements.define("main-component-center", MainComponentCenter);
	customElements.define("main-component-right", MainComponentRight);
	customElements.define("footer-component", FooterComponent);
	customElements.define("wrapper-component", PossibilitiesComponent);

	const root = document.querySelector("#root");

	const template = document.createElement("template");
	template.innerHTML = `

    <div>
      <nav class="nav">
        <div class="nav__link hide">
          <button id="__2048__" href="">2048</button>
          <button id="__snake__" href="">Snake</button>
        </div>
      </nav>
    </div>

    <home-component></home-component>
 `;


	let __2048__ = document.querySelector("#__2048__");
	let __snake__ = document.querySelector("#__snake__");

	let bool = true;

	if (__2048__) {
		__2048__.addEventListener("click", function () {
			miseEnPlace(root, template, "2048", bool);
			bool = false;
		});
	}

	if (__snake__) {
		__snake__.addEventListener("click", function () {
			miseEnPlace(root, template, "snake", bool);
			bool = false;
		});
	}
}

function miseEnPlace(root, template, name, bool) {
	root.innerHTML = "";
	root.appendChild(template.content.cloneNode(true));
	query_selector_left(".card-main-left").innerHTML = "";
	query_selector_right(".card-main-right").innerHTML = "";
	query_selector_root().innerHTML = "";
	if (name === "snake") {
		gestionnaire("SNAKE", bool);
		initCanvas();
	}
	else {
		let shadow_root = gestionnaire("2048", bool);
		shadow_root.appendChild(templateCenter.content.cloneNode(true));
		shadow_root.appendChild(templateCenterStyle4.content.cloneNode(true));
		createGrid(16);
		init(4);
    	ecouteurChangeSize();
	}
	query_selector_footer("[id='reset']").setAttribute("name", name);
}



