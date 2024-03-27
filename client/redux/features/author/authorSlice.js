import { createAppSlice } from "@/redux/createSliceApp";
import { GET } from "@/redux/callApi";

const authorSlice = createAppSlice({
    name: 'authorSlice',
    initialState: {
        loading: false,
        authors: [],
        authorWithBlog: []
    },
    reducers: (create) => ({
        getauthors: create.asyncThunk(
            async () => { return await GET('apiv1/get-users')},
            {
                pending: (state) => {state.loading = true},
                rejected: (state, action) => {state.loading = false},
                fulfilled: (state, action) => {
                    state.loading = false
                    state.authors = action.payload
                },
            }
        ),
        getauthorWithBlog: create.asyncThunk(
            async (query) => { return await GET(`apiv1/filter-blog-by-userId/${query}`)},
            {
                pending: (state) => {state.loading = true},
                rejected: (state, action) => {state.loading = false},
                fulfilled: (state, action) => {
                    state.loading = false
                    state.authorWithBlog = action.payload
                },  
            }
        )
    }),
})

export const { getauthors, getauthorWithBlog } = authorSlice.actions

export default authorSlice.reducer