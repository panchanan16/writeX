import { getSession } from "next-auth/react"
import { useState, useRef, useEffect } from 'react';
import { Button } from "@radix-ui/themes";
import { TextField, Text, TextArea, Flex, Select, Callout, IconButton } from "@radix-ui/themes";
import { CameraIcon, FileIcon, CheckCircledIcon } from "@radix-ui/react-icons";
import { Editor } from "@tinymce/tinymce-react";
import { useSession } from "next-auth/react"

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req })
  console.log('session from write page', session)
  if (!session) {
    return { redirect: { destination: '/auth', permanent: false } }
  }
  return { props: { session } }
}

function WriteBlog() {
  const { data: session } = useSession()
  const title = useRef('');
  const description = useRef('');
  const preview = useRef('');
  const [getCategory, setgetCategory] = useState([])
  const [content, setcontent] = useState()
  const [imageLink, setimageLink] = useState(null)
  const [notification, setnotification] = useState(null)
  const [userid, setuserid] = useState()
  let category;
  useEffect(() => {
    async function categortyAPI(params) {
      const fet = await fetch('http://localhost:8000/apiv1/all-category')
      const res = await fet.json()
      setgetCategory(res.allcategories)
      setuserid(session.user.email._id)
    }
    categortyAPI();
  }, [])

  async function createBlog() {
    const blog = { title: title.current.value, description: description.current.value, blog: content.getContent(), category: category, author: userid }
    if (blog.category != undefined) {
      const sendBlog = await fetch('http://localhost:8000/apiv1/create-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(blog)
      })
      const res = await sendBlog.json()
      setnotification(res.msg)
    }else{
      console.log("Select category again")
    }

  }

  function handleimg() {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.setAttribute('src', 'http://localhost:3000/logo.jpg');
    input.click();
    input.onchange = async () => {
      var img = input.files[0];
      const formData = new FormData()
      formData.append("blogimage", img, "chris.jpg");
      const fet = await fetch('http://localhost:8000/profile', { method: 'POST', body: formData })
      const data = await fet.json();
      setimageLink(`http://localhost:8000/${data.link}`)
    }
  }

  return (
    <section style={{ padding: 20 }}>
      <Callout.Root color="green" size="1" style={notification ? {} : styles.hidden}>
        <Callout.Icon>
          <CheckCircledIcon width='18' height='18' />
        </Callout.Icon>
        <Callout.Text>
          {notification}
        </Callout.Text>
      </Callout.Root>
      <h1>Write your journey In Blogging</h1>
      <Flex direction="column" gap="5">
        <TextField.Root>
          <TextField.Input placeholder="Title :  Only 150 characters required...." ref={title} />
        </TextField.Root>
        <TextArea placeholder="Description :  Only 150 characters required...." ref={description} />

        <Select.Root defaultValue="" value={category} onValueChange={(value) => { category = value; }} >
          <Select.Trigger style={{ width: 280 }} variant="soft" placeholder="Select category" />
          <Select.Content >
            <Select.Group>
              <Select.Label>Select Category</Select.Label>
              {
                getCategory.map((el, ind) => (<Select.Item key={ind} value={el.category}>{el.category}</Select.Item>))
              }
            </Select.Group>
          </Select.Content>
        </Select.Root>
        <Flex align="center" gap="2">
          <Text size="1">Get Image Link</Text>
          <IconButton onClick={handleimg}>
            <CameraIcon width="20" height="20" radius="large" />
          </IconButton>
          <Callout.Root color="violet" size="1" style={imageLink ? {} : styles.hidden}>
            <Callout.Icon><FileIcon /></Callout.Icon>
            <Callout.Text>
              {imageLink ? imageLink : ""}
            </Callout.Text>
          </Callout.Root>
        </Flex>
        <Editor
          apiKey='96qp0zskjds0crt88natz9epm3r3yipv5st58cld04zwfoqx'
          onInit={(evt, editor) => { setcontent(editor) }}
          init={{
            plugins: 'tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image | align lineheight | tinycomments | checklist numlist bullist | charmap | removeformat',
            tinycomments_mode: 'embedded',
            tinycomments_author: 'Author name',
            mergetags_list: [{ value: 'First.Name', title: 'First Name' }, { value: 'Email', title: 'Email' },]
          }}
          initialValue=""
        />
      </Flex>
      <Flex gap="3">
        <Button variant="surface" style={{ marginTop: 20 }} onClick={createBlog}>Publish</Button>
        <Button variant="soft" style={{ marginTop: 20 }} onClick={() => { preview.current.innerHTML = content.getContent() }}>
          Preview
        </Button>
      </Flex>
      <div ref={preview}></div>
    </section>
  )
}

const styles = {
  hidden: {
    display: "none",
  }
}

export default WriteBlog;

