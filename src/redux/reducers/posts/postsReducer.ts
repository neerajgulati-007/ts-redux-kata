
export interface Post {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
};
interface PostsReducerState {
    loading: boolean;
    posts: Post[];
    error: string | null;
};

const initalState = {
    loading: false,
    posts: [],
    error: null,
};



const postsReducer = (state : PostsReducerState = initalState, action: any) : PostsReducerState => {
    switch(action.type) {
        default:
            return state;
    }
}

export default postsReducer;