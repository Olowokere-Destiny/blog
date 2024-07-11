import { lora } from "@/lib/fontExports";

function About() {
  console.log("hola")
  return (
    <div className="full-screen">
      <div>
        <h1
          className={`text-[1.75rem] ${lora.className} text-center font-[700] mt-8`}
        >
          About the author
        </h1>

        <div className="tracking-wide px-4 md:px-12 my-12 text-[1.2rem] lg:text-[1.1rem]">
          Hello! I'm Destiny Olowokere, the author behind this blog. With a
          passion for storytelling and a keen interest in the ever-evolving
          world of technology, I started this blog as a space to share my
          insights, experiences, and knowledge with a broader audience. I strive
          to create content that is both informative and engaging, covering a
          wide range of topics from tech trends and innovative solutions to
          personal growth and lifestyle. My goal is to provide valuable
          perspectives that resonate with readers and inspire thoughtful
          discussions. When I'm not writing, I enjoy coding, gaming, watching
          documentaries, reading, and immersing myself in music. These hobbies
          not only fuel my creativity but also help me stay connected with the
          latest developments in various fields. Thank you for visiting my blog!
          I hope you find the articles insightful and enjoyable. Feel free to
          leave comments and share your thoughts—I love hearing from my readers
          and learning from their experiences as well.
        </div>
      </div>
    </div>
  );
}

export default About;
