import { useState, useEffect } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";
function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const naviagate = useNavigate();
  useEffect(() => {
    console.log(slug);
    if (slug) {
      console.log("In Slug of Edit Post");
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          console.log("In f of Edit post");
          setPost(post);
          console.log(post.$id);
        }
      });
    } else {
      naviagate("/");
    }
  }, [slug, naviagate]);
  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
