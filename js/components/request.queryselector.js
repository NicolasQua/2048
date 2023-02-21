
const query_selector_root = (parent = document.querySelector("home-component")
                                                    .shadowRoot.querySelector("main-component")
                                                    .shadowRoot.querySelector("main-component-center").shadowRoot) => {
    return parent;
}

const query_selector_center = (selector, parent = document.querySelector("home-component")
                                                    .shadowRoot.querySelector("main-component")
                                                    .shadowRoot.querySelector("main-component-center").shadowRoot) => {
    return parent.querySelector(selector);
}

const query_selector_right = (selector, parent = document.querySelector("home-component")
                                                    .shadowRoot.querySelector("main-component")
                                                    .shadowRoot.querySelector("main-component-right").shadowRoot) => {
    return parent.querySelector(selector);
}

const query_selector_left = (selector, parent = document.querySelector("home-component")
                                                    .shadowRoot.querySelector("main-component")
                                                    .shadowRoot.querySelector("main-component-left").shadowRoot) => {
    return parent.querySelector(selector);
}

const query_selector_left_root = (parent = document.querySelector("home-component")
                                                    .shadowRoot.querySelector("main-component")
                                                    .shadowRoot.querySelector("main-component-left").shadowRoot) => {
    return parent;
}

const query_selector_header = (selector, parent = document.querySelector("home-component")
                                                    .shadowRoot.querySelector("header-component").shadowRoot) => {
    return parent.querySelector(selector);
}

const query_selector_home = (selector, parent = document.querySelector("home-component")
                                                    .shadowRoot.querySelector("main-component")
                                                    .shadowRoot.querySelector("main-component-home").shadowRoot) => {
    return parent.querySelector(selector);
}

const query_selector_center_all = (selector, parent = document.querySelector("home-component")
                                                    .shadowRoot.querySelector("main-component")
                                                    .shadowRoot.querySelector("main-component-center").shadowRoot) => {
    return parent.querySelectorAll(selector);
}

const query_selector_right_all = (selector, parent = document.querySelector("home-component")
                                                    .shadowRoot.querySelector("main-component")
                                                    .shadowRoot.querySelector("main-component-right").shadowRoot) => {
    return parent.querySelectorAll(selector);
}

const query_selector_left_all = (selector, parent = document.querySelector("home-component")
                                                    .shadowRoot.querySelector("main-component")
                                                    .shadowRoot.querySelector("main-component-left").shadowRoot) => {
    return parent.querySelectorAll(selector);
}

const query_selector_header_all = (selector, parent = document.querySelector("home-component")
                                                    .shadowRoot.querySelector("main-component")
                                                    .shadowRoot.querySelector("main-component-header").shadowRoot) => { 
    return parent.querySelectorAll(selector);
}

const query_selector_home_all = (selector, parent = document.querySelector("home-component")
                                                    .shadowRoot.querySelector("main-component")
                                                    .shadowRoot.querySelector("main-component-home").shadowRoot) => {
    return parent.querySelectorAll(selector);
}

export { query_selector_center,
            query_selector_right,
            query_selector_left,
            query_selector_header,
            query_selector_home,
            query_selector_center_all,
            query_selector_right_all,
            query_selector_left_all,
            query_selector_header_all,
            query_selector_home_all,
            query_selector_root,
            query_selector_left_root
        }