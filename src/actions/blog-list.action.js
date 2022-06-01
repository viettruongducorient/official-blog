export const GET_BLOG_LIST = "[BLOG_LIST] GET_BLOG_LIST";
export const GET_BLOG_LIST_SUCCESS = "[BLOG_LIST] GET_BLOG_LIST_SUCCESS";
export const GET_BLOG_LIST_FAILED = "[BLOG_LIST] GET_BLOG_LIST_FAILED";

export const getBlogList = params => {
    return {
        type: GET_BLOG_LIST,
        payload: {
            params
        }
    };
};

export const getBlogListSuccess = params => {
    return {
        type: GET_BLOG_LIST_SUCCESS,
        payload: {
            params
        }
    };
};

export const getBlogListFailed = params => {
    return {
        type: GET_BLOG_LIST_FAILED,
    };
};