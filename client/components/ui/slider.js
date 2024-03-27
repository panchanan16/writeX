import { Flex, Inset, Text, Button } from "@radix-ui/themes"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { useSession } from "next-auth/react"

export function Slider() {
    const { data: session } = useSession();
    return (
        <>
            <div style={{ paddingLeft: "70px", paddingRight: "70px", display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: "30rem" }} >
                <Flex justify="between">
                    <Flex p="20" direction="column" gap="1" justify="center" align="left">
                        <Text weight="bold" style={{ fontSize: 40}}>Read More, Learn More</Text>
                        <Text weight="bold" style={{ fontSize: 100 }}>Stay Focus</Text>
                        <Text weight="medium">Discover stories, thinking, and expertise from writers on any topic.</Text>
                        {
                            session?
                            <Button size="3" asChild="true" radius="large" variant="solid" style={{ width: 170, marginTop: 30 }}>
                                <Link href='/auth' style={{textDecoration: "none",}}>Explore <ArrowRightIcon width="18" height="18" /></Link>
                            </Button>
                            :
                            <Button size="3" asChild="true" radius="large" variant="solid" style={{ width: 170, marginTop: 30 }}>
                                <Link href='/login' style={{textDecoration: "none",}}>Get started <ArrowRightIcon width="18" height="18" /></Link>
                            </Button>
                        }
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