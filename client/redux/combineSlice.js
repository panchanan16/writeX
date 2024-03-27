import { combineSlices } from '@reduxjs/toolkit'
import authorSlice from './features/author/authorSlice'
import recentBlogSlice from './features/recent/recentBlogSlice'
import categorySlice from './features/category/categorySlice'
import commentSlice from './features/comment/commentSlice'

export const rootReducer = combineSlices({
    author: authorSlice,
    recentblog: recentBlogSlice,
    category: categorySlice,
    comment: commentSlice,
})