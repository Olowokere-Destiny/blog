import Image from "next/image";
import headerImg from "../lib/images/header-img.svg";
import { courier, lora } from "../lib/fontExports";
import { posts } from "../lib/posts";
import Post from "../components/Post";
import { Posts, PostsArray } from "@/lib/types";

export async function getStaticProps() {
  return {
    props: {
      postings: posts,
    },
  };
}

export default function Home({ postings }: { postings: PostsArray }) {
  return (
    <div>
      <div className="mt-8">
        <Image
          src={headerImg}
          width={100}
          height={100}
          className="w-full h-[16rem]"
          alt="header image"
        />
      </div>

      <div
        className={`mt-4 ${lora.className} px-8 md:px-[6rem] lg:px-[10rem] md:text-center md:mt-8`}
      >
        <div className="font-[700] text-[1.6rem]">
          Welcome to my very own personal news blog where you can get all the
          latest news, gist and gossip!
        </div>
        <div
          className={`${courier.className} font-[400] text-base tracking-tighter mt-6`}
        >
          Check out the blog posts for all the latest news...
        </div>
      </div>

      {/* divider line */}
      <div className="h-[2px] bg-black w-full mt-14 md:w-4/6 md:mx-auto dark:bg-white"></div>

      <div className="mt-8">
        <h1
          className={`text-[1.75rem] ${lora.className} text-center font-[700]`}
        >
          All articles
        </h1>

        <div className="">
          {postings && postings.length > 0 ? (
            postings.map((post: Posts) => (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                publicationDate={post.publicationDate}
                summary={post.summary}
              />
            ))
          ) : (
            <p className="text-center font-[700]">No posts available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
