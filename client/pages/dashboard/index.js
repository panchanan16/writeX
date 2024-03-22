import { Card, Box, Flex, IconButton, Text, Avatar, Callout, Inset } from "@radix-ui/themes";
import { ChatBubbleIcon, BookmarkIcon, BackpackIcon, TrashIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { CommentBox } from "@/components/ui/commentbox";
import { AlertBox } from "@/components/ui/alertbox";

export default function Dashboard() {
    const [data, setdata] = useState(null)
    useEffect(() => {
        async function getMyBlogs(params) {
            const fet = await fetch('http://localhost:8000/apiv1/filter-blog-by-userId/6541f598126eb9c9582fe722');
            const res = await fet.json()
            console.log(res.filteredByUserId[0].author[0].username)
            setdata(res.filteredByUserId)
        }
        getMyBlogs();
    }, [])
    return (
        <>
            <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
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
                                    {data && data[0].author[0].username}
                                </Text>
                                <Text as="div" size="2" color="gray">
                                    {data && data[0].author[0].designation}
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
                                {data && data.length} Articles
                            </Callout.Text>
                        </Callout.Root>
                    </Flex>
                </Card>

                <Flex style={{ flexWrap: "wrap", padding: 5, marginTop: 30, width: "90%" }} gap="7" align="center" justify="center">
                    {
                        data && data.map((el) => (
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
                                        <AlertBox/>
                                        <CommentBox />
                                    </Flex>
                                </Flex>
                            </Card>
                        ))
                    }
                </Flex>
            </section>
        </>
    )
}