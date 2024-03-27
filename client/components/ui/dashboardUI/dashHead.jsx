import { Card, Box, Flex, IconButton, Text, Avatar, Callout, Inset } from "@radix-ui/themes";
import { BackpackIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";


export default function DashHead() {
    const [data, setdata] = useState(null)
    useEffect(() => {
        async function getMyBlogs(params) {
            const fet = await fetch('http://localhost:8000/apiv1/filter-blog-by-userId/65fd8ac20d64427f60b6ef25');
            const res = await fet.json()
            console.log(res)
            setdata(res.filteredByUserId)
        }
        getMyBlogs();
    }, [])
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
                            {data && data[0]?.author[0].username}
                        </Text>
                        <Text as="div" size="2" color="gray">
                            {data && data[0]?.author[0].designation}
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
    </>
}