import service from "@/src/api/index";

const getPosts = async ({ queryKey } : any) => {
    // eslint-disable-next-line no-unused-vars
    const [_, params] = queryKey;
    const { data } = await service.get('/posts', { params: params });
    return data;
}

const deletePost = async (data: any) => {
    const postId = data.postId
    return await service.delete(`/posts/${postId}`);
}

export { getPosts, deletePost }