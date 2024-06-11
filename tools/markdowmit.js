import MarkdownIt from "markdown-it";
import { readFile } from "./utils.js";
import anchor from 'markdown-it-anchor';

const data  = await readFile('tools/content.md');
const md = MarkdownIt()
    .use(anchor);

console.log("data: ",data);
const rendered = md.render(data);

console.log(rendered);