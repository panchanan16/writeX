import React, {useEffect, useState} from 'react'
import { Card, Box, Flex, IconButton, Text, Avatar, Callout, Inset, Button } from "@radix-ui/themes";
import { ChatBubbleIcon, BookmarkIcon, StopwatchIcon, Pencil2Icon, BackpackIcon, TrashIcon } from "@radix-ui/react-icons";
import { updateViews } from "@/utils/utils";
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { getauthorWithBlog } from "@/redux/features/author/authorSlice";

function AuthorPro() {
    const router = useRouter()
    const authorId = router.query.authorid
    const {filteredByUserId} = useSelector((state) => state.author.authorWithBlog )
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getauthorWithBlog(authorId))
    }, [authorId])
    return (
        <>
                <Card style={{ padding: '8px', width: "90%", marginTop: 30 }}>
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
                                    {filteredByUserId && filteredByUserId[0]?.author[0].username}
                                </Text>
                                <Text as="div" size="2" color="gray">
                                    {filteredByUserId && filteredByUserId[0]?.author[0].designation} 
                                </Text>
                            </Box>
                            <Callout.Root variant="outline" size="1">
                                <Callout.Text>
                                    12.3k followers
                                </Callout.Text>
                            </Callout.Root>
                            <Button size="1">
                                Follow
                            </Button>
                        </Flex>
                        <Callout.Root variant="outline" size="1">
                            <Callout.Icon>
                                <BackpackIcon />
                            </Callout.Icon>
                            <Callout.Text>
                                {filteredByUserId && filteredByUserId.length} Articles
                            </Callout.Text>
                        </Callout.Root>
                    </Flex>
                </Card>

                <Flex style={{ flexWrap: "wrap", padding: 5, marginTop: 30, width: "90%" }} gap="7" align="center" justify="center">
                    {
                        filteredByUserId && filteredByUserId.map((el) => (
                            <Card size="1" style={{ maxWidth: 240 }} key={el._id} onClick={()=>{updateViews(el._id,router)}}>
                                <Flex direction="column" gap="0">
                                    <Inset clip="padding-box" side="top" pb="current">
                                        <img
                                            src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                                            alt="Bold typography"
                                            style={{
                                                display: 'block',
                                                objectFit: 'cover',
                                                width: '100%',
                                                height: 140,
                                                backgroundColor: 'var(--gray-5)',
                                            }}
                                        />
                                    </Inset>
                                    <Text size="1">
                                    <h5>{el.title.slice(0, 80).concat("....")}</h5>
                                    </Text>
                                    <Text size="1">
                                        {el.description.slice(0, 95).concat("....")} 
                                    </Text>

                                    <Flex align="center" gap="4" style={{ marginTop: 10 }}>
                                        <Flex align="center" gap="1">
                                            <StopwatchIcon width="11" height="11" />
                                            <Text as="div" color="gray" size="1" weight="medium" style={{ fontSize: "11px" }}>
                                                oct 12
                                            </Text>
                                        </Flex>
                                        <Flex align="center" gap="1">
                                            <Pencil2Icon width="11" height="11" />
                                            <Text as="div" color="gray" size="1" weight="medium" style={{ fontSize: "11px" }}>
                                                {el.author[0].username}
                                            </Text>
                                        </Flex>
                                        <Flex align="center" gap="1">
                                            <Pencil2Icon width="11" height="11" />
                                            <Text as="div" color="gray" size="1" weight="medium" style={{ fontSize: "11px" }}>
                                                {el.views}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Card>
                        ))
                    }
                </Flex>
        </>
    )
}

export default AuthorPro