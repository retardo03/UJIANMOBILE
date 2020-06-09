const INITIAL_STATE = {
    username: '',
    dataKucing: [],
    image: '',
};

export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                username: action.payload
            }
        case 'GETUSER':
            return {
                ...state,
                dataKucing: action.payload
            }
        case 'GAMBAR':
            return {
                ...state,
                image: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                username: ''
            }
        default:
            return state;
    }
}