/**
 * Created by M.C on 2017/9/26.
 */
import App from "./app.js"

window.onload = () => {
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    new App(main, footer).init();
};