const l = console.log.bind(console);

const s = selector => document.querySelector(selector); // $

const sa = selector => document.querySelectorAll(selector); // $ All

const x = {};

x.create = (el_type, cls) => { // create element
    const el = document.createElement(el_type);
    el.className = cls;

    return el;
};


x.add_cls = (el, cls) => {
    if (el && el.nodeType === 1) { // if not document
        el.classList.add(cls);
    }
};

x.remove_cls = (el, cls) => {
    if (el && el.nodeType === 1) { // if not document
        el.classList.remove(cls);
    }
};

x.append = (el, child) => { // append child
    if (el && el.nodeType === 1) { // if not document
        el.appendChild(child);
    }
};