import { GET } from "@/redux/callApi";
import { createAppSlice } from "@/redux/createSliceApp";


const commentSlice = createAppSlice({
    name: 'commentslice',
    initialState: {
        loading: false,
        comments: []
    },
    reducers: (create) => (
        {
            getcomments: create.asyncThunk(
                async (params) => { return await GET(`apiv1/get-comment-by-blogId/${params}`)},
                {
                    pending: (state) => {state.loading = true},
                    rejected: (state, action) => {state.loading = false},
                    fulfilled: (state, action) => {
                        state.loading = false
                        state.comments = action.payload
                    }
                }
            )
        }
    )
})

export const {getcomments} = commentSlice.actions

export default commentSlice.reducer;