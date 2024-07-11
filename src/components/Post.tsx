import { PostProp } from "@/lib/types";
import { courier, lora } from "../lib/fontExports";
import Link from "next/link";

// Single post on home page
function Post({id, title, summary, publicationDate}: PostProp) {
  return (
    <Link href={`/post/${id}`} className="block py-6 hover:bg-[#fff7cb] dark:hover:bg-gray-800 px-4 md:px-14 lg:px-20">
      <h3 className={`${lora.className} text-[1.2rem] text-center font-[600]`}>
        {title}
      </h3>
      <p className="tracking-wide pt-2">{summary}</p>
      <p
        className={`${courier.className} text-[0.9rem] tracking-[-0.1em] mt-2`}
      >
        Posted on {publicationDate}
      </p>
    </Link>
  );
}

export default Post;
