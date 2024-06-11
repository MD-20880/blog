import MarkdownIt from "markdown-it";
import fs from 'fs/promises'
import { parse } from "path";

var result = ''
async function readFile(){
    try{
        result = await fs.readFile('./content.md','utf8');
    }catch(err){
        console.log(err)
    }
}

await readFile()

const md = MarkdownIt()

const parseresult = md.parse(result,{});


var output = ''
parseresult.forEach(c => {
    if (c.tag === 'h1'){
        console.log(c)
    }
});
fs.writeFile('treedump.txt',JSON.stringify(output,null,2));
