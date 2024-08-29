import MarkdownIt from "markdown-it";
import fs from "fs";
import { createHash } from "crypto";

function getHash(content){
    return createHash('md5').update(content).digest('hex')
}

function parseMetadata(metadata) {
    const lines = metadata.split('\n');
    const result = {};
    lines.forEach(line => {
        const match = line.match(/(.*): (.*)/);
        if (match) {
            result[match[1].trim()] = match[2].trim();
        }
    });
    return result;
}

function getPreview(post){
    return {
        id: post.id,
        title: post.metadata.title,
        date: post.metadata.date,
        tags: post.metadata.tags,
        content: post.content
    }
}

function parsePost(post){
    const match = post.match(/---\n([\s\S]*?)\n---/);
    if (match) {
        return {
            metadata: parseMetadata(match[1]),
            content: post.slice(match[0].length).trim()
        }; // 返回匹配到的内容
    } else {
        return {
            metadata:null,
            content: post.trim()
        }; // 如果没有匹配到内容，返回 null
    }
}

function renderPost(post) {
    const md = new MarkdownIt()
    return md.render(post)
}

const postsPath = './posts'

//Load all posts
const posts = []
//Generate Id for each post
fs.readdirSync(postsPath).forEach(file => {
    const post = fs.readFileSync(`${postsPath}/${file}`, 'utf-8')
    const data= parsePost(post); // 提取元数据
    const id = getHash(post)
    console.log(id)
    data.id = id
    posts.push(data)
})

const result = {
    posts:[]
}
for (let post of posts) {
    result.posts.push(getPreview(post))
}
fs.writeFileSync('./posts.json', JSON.stringify(result, null, 2))




