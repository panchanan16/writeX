import { Box, Flex, Heading, Inset, Text, Button } from "@radix-ui/themes"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export function Slider() {
    return (
        <>
            <div style={{ paddingLeft: "70px", paddingRight: "70px", display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>
                <Flex justify="between">
                    <Flex p="20" direction="column" gap="1" justify="center" align="left" style={{ maxWidth: 400 }}>
                        <Text weight="bold" style={{ fontSize: 25}}>Read More, Learn More</Text>
                        <Text weight="bold" style={{ fontSize: 65 }}>Stay Focus</Text>
                        <Text weight="medium">Discover stories, thinking, and expertise from writers on any topic.</Text>
                        <Button size="2" asChild="true" radius="large" variant="surface" style={{ width: 170, marginTop: 10 }}>
                            <Link href='/auth' style={{textDecoration: "none",}}>Get started <ArrowRightIcon width="18" height="18" /></Link>
                        </Button>
                    </Flex>
                </Flex>

                <Inset clip="padding-box" side="top" pb="current">
                        <img
                            src="./slider.jpg"
                            alt="Bold typography"
                            style={{
                                display: 'block',
                                objectFit: 'cover',
                                height: 350,
                                backgroundColor: 'var(--gray-5)',
                            }}
                        />
                    </Inset>
            </div>
        </>
    )
}