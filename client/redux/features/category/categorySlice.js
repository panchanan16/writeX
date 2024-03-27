import { GET } from "@/redux/callApi";
import { createAppSlice } from "@/redux/createSliceApp";

const categorySlice = createAppSlice({
    name: 'categoryslice',
    initialState: {
        loading: false,
        categories: [],
        blogspercategory: []
    },
    reducers: (create)=>({
        getcategories: create.asyncThunk(
            async () => { return await GET('apiv1/all-category')},
            {
                pending: (state) => {state.loading = true},
                rejected: (state, action) => {state.loading = false},
                fulfilled: (state, action) => {
                    state.loading = false
                    state.categories = action.payload
                }
            }
        ),

        getblogspercategory: create.asyncThunk(
            async (query) => { return await GET(`apiv1/filter-blog-by-category/${query}`)},
            {
                pending: (state) => {state.loading = true},
                rejected: (state, action) => {state.loading = false},
                fulfilled: (state, action) => {
                    state.loading = false
                    state.blogspercategory = action.payload
                },  
            }
        )
    })
})


export const {getcategories, getblogspercategory } = categorySlice.actions

export default categorySlice.reducer;