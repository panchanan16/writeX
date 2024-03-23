import { Flex, Avatar, Box, Card, Text } from "@radix-ui/themes"
import { CountdownTimerIcon, StopwatchIcon, Pencil2Icon, EyeOpenIcon } from "@radix-ui/react-icons"
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { updateViews } from "@/utils/utils";

export function RecentBlog() {
    const [blog, setBlog] = useState([]);
    const router = useRouter()
 
    useEffect(() => {
        async function fetchBlog() {
            const fet = await fetch('http://localhost:8000/apiv1/get-all-blog')
            const res = await fet.json()
            setBlog(res.allBlog)
        }
        fetchBlog();
    }, [])

    return (
        <section style={{ paddingLeft: "40px", width: "67%" }}>
            <Flex align="center" gap="3">
                <h2>Recent Blogs</h2>
                <CountdownTimerIcon width="18" height="18" />
            </Flex>
            <Flex direction="column" gap='2' style={{ width: "100%" }}>
                {
                    blog.map((el, y) => (
                        <Card style={{width: "100%"}} key={y} onClick={()=> {updateViews(el._id, router)}}>
                            <Flex  gap="4" align="left">
                                <Avatar
                                    size="6"
                                    src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                                    radius="medium"
                                    fallback="T"
                                />
                                <Flex direction="column" gap="2">
                                    <Text as="div" size="2" weight="bold">
                                        {el.title}
                                    </Text>
                                    <Text as="div" size="1" color="gray">
                                        {el.description ? el.description.slice(0, 260) + " . . . ." : " "}
                                    </Text> 

                                    <Flex align="center" gap="8" justify="end">
                                        <Flex align="center" gap="1">
                                            <StopwatchIcon width="11" height="11" />
                                            <Text as="div" color="gray" size="1" weight="medium" style={{ fontSize: "11px" }}>
                                                {new Date(el.createdAt).toISOString().substring(0, 10)}
                                            </Text>
                                        </Flex>
                                        <Flex align="center" gap="1">
                                            <Pencil2Icon width="11" height="11" />
                                            <Text as="div" color="gray" size="1" weight="medium" style={{ fontSize: "11px" }}>
                                                {el.author[0].username}
                                            </Text>
                                        </Flex>
                                        <Flex align="center" gap="1">
                                            <EyeOpenIcon width="11" height="11" />
                                            <Text as="div" color="gray" size="1" weight="medium" style={{ fontSize: "11px" }}>
                                            {el.views}
                                            </Text>
                                        </Flex>
                            </Flex>
                                </Flex>
                            </Flex>

                        </Card>
                    ))
                }
            </Flex>
        </section>
    )
}