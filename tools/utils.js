import fs from 'fs/promises'

export async function readFile(path){
    var result = ''
    try{
        result = await fs.readFile(path,'utf8');
    }catch(err){
        console.log(err);
    }
    return result;
}

await readFile()