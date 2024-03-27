import { Dialog, Text, Flex, Button, IconButton, Callout, Separator, ScrollArea, TextArea } from "@radix-ui/themes"
import { ChatBubbleIcon } from "@radix-ui/react-icons"
import { useEffect, useRef } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import { getcomments } from "@/redux/features/comment/commentSlice"
import { POST } from "@/redux/callApi"
import { notify } from "@/utils/notify"

export function CommentBox({blogId}) {
    const commentRef = useRef()
    const { data: session } = useSession()
    const router = useRouter()
    const params = blogId ? blogId : router.query.slug
    const { result } = useSelector((state) => state.comment.comments)
    const dispatch = useDispatch()

    useEffect(() => { dispatch(getcomments(params)) }, [params])

    async function submitComment() {
        const commentData = { comment: commentRef.current.value, userId: session.user.email._id, blogId: router.query.slug }
        if (commentData.comment != "") {
            const sendComment = await POST('apiv1/create-comment', commentData)
            if (sendComment.ok) {
                dispatch(getcomments(params))
                notify("success", 'comment added successfully')}else { notify("error", 'comment creation failed')}
        } else { notify("error", 'Please, enter a comment!')}
    }

    return (
        <>
            <Dialog.Root>
                <Dialog.Trigger>
                    <IconButton variant="surface" radius="full">
                        <ChatBubbleIcon width="20" height="20" />
                    </IconButton>
                </Dialog.Trigger>

                <Dialog.Content size="2">
                    <Dialog.Title>Comments</Dialog.Title>
                    <Dialog.Description size="2" mb="4">Write a valuable comment to this post</Dialog.Description>
                    <ScrollArea type="always" scrollbars="vertical" style={{ height: 230 }}>
                        <Flex direction="column" gap="3" p="3">
                            {
                                result && result.map((el) => (
                                    <Flex direction="column" gap="2">
                                        <Text as="div" size="1" weight="medium">{el.author[0].username}</Text>
                                        <Callout.Root color="green">
                                            <Callout.Text>
                                                {el.comment}
                                            </Callout.Text>
                                        </Callout.Root>
                                        <Separator color="indigo" size="4" />
                                    </Flex>
                                ))
                            }
                        </Flex>
                    </ScrollArea>
                    <Flex gap="3" mt="4" justify="end" align="center">
                        <TextArea ref={commentRef} placeholder="Write your comment…" style={{ width: 350 }} />
                        <Dialog.Close><Button variant="soft" color="gray">Cancel</Button></Dialog.Close>
                        <Dialog.Close><Button onClick={submitComment}>Submit</Button></Dialog.Close>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>
            <Text as="div" size="2" color="violet">
                {result && result.length}
            </Text>
        </>
    )
}