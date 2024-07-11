import { GetServerSideProps } from "next";
import { posts } from "@/lib/posts";
import { Posts } from "@/lib/types";
import { courier, lora } from "@/lib/fontExports";

function PostPage ({ singlePost }: {singlePost: Posts | null}) {
  if (!singlePost) {
    return (
      <div className="full-screen error-msg">
        The post could not be found
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="mt-8 px-6 md:px-[4rem] lg:px-[6rem]">
        <h1
          className={`${lora.className} text-[1.4rem] md:text-[1.6rem] text-center font-[600]`}
        >
          {singlePost.title}
        </h1>
        <p
          className={`${courier.className} text-[0.9rem] tracking-[-0.1em] mt-2`}
        >
          Posted on {singlePost.publicationDate}
        </p>

        <div className="mt-4">
          <p className="tracking-wide">{singlePost.content}</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const postId = params?.id;
  const singlePost = posts.find((post) => post.id.toString() === postId) || null;

  return {
    props: {
      singlePost,
    },
  };
};

export default PostPage;
