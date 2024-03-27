import { Card, Box, Flex, IconButton, Text, Avatar, Callout, Inset } from "@radix-ui/themes";
import { CommentBox } from "@/components/ui/commentbox";
import { AlertBox } from "@/components/ui/alertbox";
import { useEffect, useState } from "react";


export default function DashItems(params) {
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
                                <AlertBox blogId={el._id} />
                                <CommentBox />
                            </Flex>
                        </Flex>
                    </Card>
                ))
            }
        </Flex>
    </>
}