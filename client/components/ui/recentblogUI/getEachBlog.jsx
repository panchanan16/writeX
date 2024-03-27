import React from "react"
import { Flex, Card, Box, Avatar, Text, Button, IconButton } from "@radix-ui/themes"
import { BookmarkIcon, BookmarkFilledIcon } from "@radix-ui/react-icons"
import { useRouter } from 'next/router'
import { useEffect, useState } from "react"
import { CommentBox } from "../commentbox"
import { useDispatch, useSelector } from "react-redux"
import { getblogbyid } from "@/redux/features/recent/recentBlogSlice"

export default function GetEachBlog(params) {
    const router = useRouter()
    const [bookMark, setbookMark] = useState(false)
    const [follow, setfollow] = useState(false)
    const blogID = router.query.slug;
    const {perblog} = useSelector((state)=>state.recentblog)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getblogbyid(blogID)); 
    }, [blogID])

    async function bookMarkBlog(blogID) {
        setbookMark(true)
    } 
    async function followUser() {
        setfollow(true)
    } 

        return (
            <>
                <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <h1>{ perblog && perblog[0]?.title}</h1>
                    <Card style={{ padding: '8px', width: "80%"}}>
                        <Flex align="center" justify="between">
                            <Flex gap="4" align="center">
                            <Avatar
                                size="3"
                                src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                                radius="full"
                                fallback="T"
                            />
                            <Box>
                                <Text as="div" size="2" weight="bold">
                                  {perblog && perblog[0]?.author[0].username}
                                </Text>
                                <Text as="div" size="2" color="gray">
                                {perblog && perblog[0]?.author[0].designation}
                                </Text>
                            </Box>
                            {follow ? <Button size="1" variant="surface">Following</Button> : <Button size="1" onClick={followUser} variant="solid">Follow</Button>}
                            </Flex>
    
                            <Flex gap="3" align="center">
                            <IconButton variant="surface" radius="full" onClick={bookMarkBlog}>
                                {bookMark ? <BookmarkFilledIcon width="20" height="20" /> : <BookmarkIcon width="20" height="20" />}
                            </IconButton>
                            <Flex align="center" gap="2">
                                <CommentBox/>
                            </Flex>
                            </Flex>
                        </Flex>
                    </Card>
                    <div dangerouslySetInnerHTML={{ __html: perblog ? perblog[0]?.blog : ""  }} style={{maxWidth: "85%", marginTop: 30}}></div>
                </section>
            </>
        )
    
}