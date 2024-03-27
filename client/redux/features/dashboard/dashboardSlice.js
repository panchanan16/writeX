import { GET } from "@/redux/callApi";
import { createAppSlice } from "@/redux/createSliceApp";


const dashboardSlice = createAppSlice(
    {
        name: 'dashboardSlice',
        initialState: {
            loading: false,
            dashboard: []
        },
        reducers: (create) => ({
            getdashboard: create.asyncThunk(
                async (param) => { return await GET('apiv1/get-dashboard')},
                {
                    pending: (state) => {state.loading = true},
                    rejected: (state, action) => {state.loading = false},
                    fulfilled: (state, action) => {
                        state.loading = false
                        state.dashboard = action.payload
                    }
                }
            ),
        }),
    }
)