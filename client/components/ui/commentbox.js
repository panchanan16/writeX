import { Dialog, Text, Flex, Button, IconButton, Callout, Separator, ScrollArea, TextArea } from "@radix-ui/themes"
import { ChatBubbleIcon } from "@radix-ui/react-icons"
import { useEffect, useRef, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

export function CommentBox() {
    const commentRef = useRef()
    const { data: session, status } = useSession()
    const router = useRouter()
    const params = router.query.slug
    const [comment, setcomment] = useState(null)

    useEffect(()=>{
        async function getComment() {
            const fet = await fetch(`http://localhost:8000/apiv1/get-comment-by-blogId/${params}`)
            const res = await fet.json();
            setcomment(res.result)
        }
        getComment()
    }, [params])

    async function submitComment() {
        const commentData = {comment: commentRef.current.value, userId: session.user.email._id, blogId: router.query.slug}
        if (commentData.comment != "") {
            const fet = await fetch('http://localhost:8000/apiv1/create-comment', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(commentData)
            })
            const res = await fet.json()
            console.log(res)
        }else{
            console.log("Abey o Lwre.. comment daal pehle")
        }
    }

    return (
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
                            comment && comment.map((el) => (
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
                    <TextArea ref={commentRef} placeholder="Write your comment…" style={{ width:350 }} />
                    <Dialog.Close><Button variant="soft" color="gray">Cancel</Button></Dialog.Close>
                    <Dialog.Close><Button onClick={submitComment}>Submit</Button></Dialog.Close>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )
}