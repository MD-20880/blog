import { slugify } from './utils';
import MarkdownIt from 'markdown-it';
import anchor from 'markdown-it-anchor';


function createNode(tagName, innerHTML, attributes, children) {
    return {
        tagName,
        innerHTML,
        attributes,
        children,
        toString() {
            let attrs = '';
            for (let key in this.attributes) {
                attrs += ` ${key}="${this.attributes[key]}"`;
            }
            let childrenHTML = '';
            for (let child of this.children) {
                childrenHTML += child.toString();
            }
            return `<${this.tagName}${attrs}>${this.innerHTML}${childrenHTML}</${this.tagName}>`;
        }
    };
}

function parseHeaders(data){
    var result = ''
    console.log(data)
    const md = MarkdownIt()
    const parseresult = md.render(data,{})
    const parser = new DOMParser();
    const dom = parser.parseFromString(parseresult,'text/html')
    const headers = dom.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    let node = createNode('ul', '', {}, []);
    headers.forEach(header => {
        let innerNode = createNode('li','', {"class":header.tagName}, []);
        innerNode.children.push(createNode('a', header.innerHTML, {"href":`#${slugify(header.innerHTML)}`}, []));
        node.children.push(innerNode);
        console.log(header.innerHTML)
    })
    console.log(result)
    return node.toString();
}

export default parseHeaders

