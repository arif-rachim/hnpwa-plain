import './on.js';
import header from './component/header.js';
import footer from './component/footer.js';
import main from './component/main.js';

document.body.innerHTML = `
${header()}
${main()}
${footer()}
`;