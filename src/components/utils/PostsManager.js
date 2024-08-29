const PostsManager = (() => {
    let posts = [];

    async function getPostsPrivate(){
        const request = fetch(`${window.location.origin}/posts.json`);
        const response = await request
        const data = await response.json()
        return data
    }

    return {
        getPost: function (id) {
            const post = posts.find(post => post.id === id);
            return post;
        },

        getPosts: async function () {
            if (posts && posts.length === 0) {
                posts = await getPostsPrivate();
                posts = posts.posts;
            }
            return posts;
        },

        getPostsNoRefresh: function () {
            return posts;
        }
    }
})();


export default PostsManager;