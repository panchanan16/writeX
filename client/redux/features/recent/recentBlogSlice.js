import { GET } from "@/redux/callApi";
import { createAppSlice } from "@/redux/createSliceApp";


const recentBlogSlice = createAppSlice(
    {
        name:'recentBlogSlice',
        initialState: {
            loading: false,
            recentblogs: [],
            perblog : []
        },
        reducers: (create) => ({
            getblogs: create.asyncThunk(
                async () => { return await GET('apiv1/get-all-blog')},
                {
                    pending: (state) => {state.loading = true},
                    rejected: (state, action) => {state.loading = false},
                    fulfilled: (state, action) => {
                        state.loading = false
                        state.recentblogs = action.payload
                    }
                }
            ),
            getblogbyid: create.asyncThunk(
                async (blogID) => { return await GET(`apiv1/filter-blog-by-blogId/${blogID}`)},
                {
                    pending: (state) => {state.loading = true},
                    rejected: (state, action) => {state.loading = false},
                    fulfilled: (state, action) => {
                        state.loading = false
                        state.perblog = action.payload.filteredByBlogId
                    }
                }
            )
        })
    }
)

export const { getblogs, getblogbyid } = recentBlogSlice.actions;

export default recentBlogSlice.reducer;