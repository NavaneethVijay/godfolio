import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { getAllPosts, getBlogPost } from "@/lib/contentful";
import parsedContent from "@/components/parsedContent";

export default function BlogPostPage({ post }: any) {
  if (!post) return null;

  return (
    <>
      <Head>
        <title>{post.title} | Navaneeth Vijay</title>
      </Head>

      <div className="mt-20">
        <article className="container mx-auto py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 font-libreFranklin text-neutral-800 dark:text-neutral-200">
              {post.title}
            </h1>
            <div className="flex gap-1">
            <span>Navaneeth Vijay / </span>
            <time className="text-neutral-500 dark:text-neutral-400 mb-8 block">
              {new Date(post.publishedDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            </div>
            <div className="max-w-none">
              {parsedContent(post.content.json)}
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.map((post) => ({
      params: { slug: post.path },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = await getBlogPost(slug);

  if (post && !post.length) {
    return {
      notFound: true,
    };
  }

  const postItem = post[0];
  return {
    props: {
      post: postItem,
    },
    revalidate: 60,
  };
};
