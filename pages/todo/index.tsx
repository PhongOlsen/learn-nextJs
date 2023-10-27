import React from "react";
import { useQuery, useMutation } from "react-query";
import { getPosts, deletePost } from "../../src/contants/todos";

const Todo = () => {
    const result = useQuery(['posts', { _page: 1 }], getPosts, { onSuccess: (value) => console.log(value)});
    const { data, isLoading, refetch } = result;

    const { isLoading: isLoadingDeletePost, mutateAsync: mutateDeletePostAsync } = useMutation({ mutationKey: 'delete_post', mutationFn: (data) => deletePost(data), onSuccess: () => refetch(), onError: (error) => console.log(error) })

    console.log('loading delete post', isLoadingDeletePost);

    const handleDeletePost = async (data: any) => {
        try {
            console.log(data)
            await mutateDeletePostAsync(data)
        } catch (e) {
            console.log(e)
        }
    }

    return <>
        {isLoading ? <>Loading ...</> : <ul>
            {data.map((item: any) => {
                return <React.Fragment key={item.id}>
                    <li key={item.id}>{item.title}</li>
                    <button onClick={() => handleDeletePost({ postId: item.id })}>delete post</button>
                </React.Fragment>
            })}
        </ul>}
    </>
}
export default Todo