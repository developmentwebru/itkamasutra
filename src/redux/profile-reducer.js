const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts:[
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: 'It is my first post', likesCount: 0},
        {id: 3, message: 'Sveta', likesCount: 14},
        {id: 4, message: 'Sasha', likesCount: 5},
        {id: 5, message: 'Runner', likesCount: 4},
        {id: 6, message: 'Valera', likesCount: 23}
    ],
    newPostText:'it-kamas',
    profile: null
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: state.newPostText,
                likesCount: 0
            };
            return  {
                ...state,
                posts : [...state.posts, newPost],
                newPostText : ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return  {
                ...state,
                newPostText : action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}
export const setUserProfile = (profile) => ( {type: SET_USER_PROFILE, profile} )

export default profileReducer;