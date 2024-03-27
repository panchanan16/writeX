import { Card, Box, Flex, IconButton, Text, Avatar, Callout, Inset } from "@radix-ui/themes";
import { BackpackIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getauthorWithBlog } from "@/redux/features/author/authorSlice";
import { useSession } from "next-auth/react";


export default function DashHead() {
    const dispatch = useDispatch()
    const {filteredByUserId} = useSelector((state) => state.author.authorWithBlog )
    const { data: session } = useSession()
    const userId = session?.user.email._id
    useEffect(() => {dispatch(getauthorWithBlog(userId))}, [userId])

    return <>
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
    </>
}