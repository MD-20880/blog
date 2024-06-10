import MarkdownIt from "markdown-it";

function parseHeaders(data){
    var result = ''
    console.log(data)
    const md = MarkdownIt()
    const parseresult = md.render(data,{})
    const parser = new DOMParser();
    const dom = parser.parseFromString(parseresult,'text/html')
    const headers = dom.querySelectorAll('h1, h2, h3, h4, h5, h6');
    console.log(headers.length)
    headers.forEach(header => {
        result += header.outerHTML +'\n';
        console.log(header.innerHTML)
    })
    console.log(result)
    return result;
}

export default parseHeaders

