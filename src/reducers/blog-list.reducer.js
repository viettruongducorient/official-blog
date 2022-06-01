import {
    GET_BLOG_LIST, 
    GET_BLOG_LIST_SUCCESS, 
    GET_BLOG_LIST_FAILED
} from "../actions/blog-list.action";

const initialState = {
    categoryList: {},
    loading: false,
    failed: false
}

export function blogListReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BLOG_LIST:
            return Object.assign({}, state, {
                loading: true,
                failed: false
            });
        case GET_BLOG_LIST_SUCCESS:
            return Object.assign({}, state, {
                blogList: action.payload,
                loading: false,
                failed: false
            })
    }
}