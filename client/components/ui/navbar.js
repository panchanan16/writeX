import { Text, Button, Flex, Heading, Avatar, DropdownMenu } from "@radix-ui/themes";
import { PersonIcon, ExitIcon, CaretDownIcon, HeartFilledIcon, HomeIcon } from "@radix-ui/react-icons";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from 'next/router'


export function Navbar() {
     const { data: session, status } = useSession()
     console.log(session)
    const router = useRouter()
    function routingPass() {
        router.push('/page/write')
    }

    async function testOk() {
        const fet = await fetch('http://localhost:8000/apiv1/get-users', {
            method: 'GET',
        })
        const res = await fet.json()
        console.log(res)
    }

    return (
        <div style={{ borderBottom: '1px solid #E8E8E8', padding: 13 }}>
            <Flex justify='between' align="center">
                <Flex align='center'>
                    <Avatar
                        size="3"
                        src="../../logo.jpg"
                        radius="full"
                        fallback="T"
                    />
                    <Heading>
                       writeX
                    </Heading>
                </Flex>
                <Flex gap='6' justify='between' align="center">
                    <Text style={{cursor: 'pointer'}} size="2" onClick={() => { router.push('/') }}>Home</Text>
                    <Text size="2" style={{cursor: 'pointer'}} onClick={() => { router.push('/page/about') }}>About</Text>
                    <Text size="2" style={{cursor: 'pointer'}} onClick={routingPass}>Write</Text>
                    {status === "unauthenticated" ? <Button variant="soft" radius="full" onClick={() => { router.push('/auth') }}>
                        Login <PersonIcon width="18" height="18" />
                    </Button> :
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <Button variant="soft">
                                    Menu
                                    <CaretDownIcon />
                                </Button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content size="2">
                                <DropdownMenu.Item shortcut="⌘" onClick={()=>{ router.push('/dashboard') }}>Dashboard</DropdownMenu.Item>
                                <DropdownMenu.Separator />
                                <DropdownMenu.Item>Share</DropdownMenu.Item>
                                <DropdownMenu.Item>favorites <HeartFilledIcon width="15" height="15" /></DropdownMenu.Item>
                                <DropdownMenu.Separator />
                                <DropdownMenu.Item color="red" onClick={() => signOut()}>
                                   LogOut <ExitIcon width="15" height="15" />
                                </DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    }
                </Flex>
            </Flex>
        </div>
    )
}