import { HeaderComponent } from './components/header.component.js'
import { MainComponent } from './components/main.component.js'
import { HomeComponent } from './components/home.component.js'
import { MainComponentLeft } from './components/main.component.left.js';
import { MainComponentCenter } from './components/main.component.center.js';
import { MainComponentRight } from './components/main.component.right.js';
import { FooterComponent } from './components/footer.component.js';
import { PossibilitiesComponent } from './components/possibilities.component.js';

customElements.define("home-component", HomeComponent);
customElements.define("header-component", HeaderComponent);
customElements.define("main-component", MainComponent);
customElements.define("main-component-left", MainComponentLeft);
customElements.define("main-component-center", MainComponentCenter);
customElements.define("main-component-right", MainComponentRight);
customElements.define("footer-component", FooterComponent);
customElements.define("wrapper-component", PossibilitiesComponent);

