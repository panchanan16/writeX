import { Card, Box, Flex, IconButton, Text, Avatar, Callout, Inset } from "@radix-ui/themes";
import { CommentBox } from "@/components/ui/commentbox";
import { AlertBox } from "@/components/ui/alertbox";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getauthorWithBlog } from "@/redux/features/author/authorSlice";
import { useSession } from "next-auth/react";


export default function DashItems(params) {
    const dispatch = useDispatch();
    const {filteredByUserId} = useSelector((state) => state.author.authorWithBlog)
    const { data: session } = useSession()
    const userId = session?.user.email._id

    useEffect(() => {
        dispatch(getauthorWithBlog(userId))
    }, [userId])
    return <>
        <Flex style={{ flexWrap: "wrap", padding: 5, marginTop: 30, width: "90%" }} gap="7" align="center" justify="center">
            {
                filteredByUserId && filteredByUserId.map((el) => (
                    <Card size="1" style={{ maxWidth: 240 }} key={el._id}>
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
                                <h4>{el.title}</h4>
                            </Text>
                            <Text size="1">
                                {el.description.slice(0, 100).concat("....")}
                            </Text>

                            <Flex align="center" gap="4" style={{ marginTop: 10 }}>
                                <AlertBox blogId={el._id} />
                                <CommentBox blogId={el._id} />
                            </Flex>
                        </Flex>
                    </Card>
                ))
            }
        </Flex>
    </>
}