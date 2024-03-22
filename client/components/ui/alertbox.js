import { AlertDialog, Flex, Button, IconButton } from "@radix-ui/themes"
import { TrashIcon } from "@radix-ui/react-icons"


export function AlertBox() {
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger>
                <IconButton variant="surface" radius="full" color="red">
                    <TrashIcon width="20" height="20" />
                </IconButton>
            </AlertDialog.Trigger>
            <AlertDialog.Content style={{ maxWidth: 450 }}>
                <AlertDialog.Title>Delete Article</AlertDialog.Title>
                <AlertDialog.Description size="2">
                    Are you sure to delete? deleting this will no longer be accessible !
                  
                </AlertDialog.Description>

                <Flex gap="3" mt="4" justify="end">
                    <AlertDialog.Cancel>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action>
                        <Button variant="solid" color="red">
                            confirm
                        </Button>
                    </AlertDialog.Action>
                </Flex>
            </AlertDialog.Content>
        </AlertDialog.Root>
    )
}