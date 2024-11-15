import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { getAllPosts, getBlogPost } from "@/lib/contentful";
import parsedContent from "@/components/parsedContent";
import { IconArrowBack, IconBackhoe } from "@tabler/icons-react";

export default function BlogPostPage({ post }: any) {
  if (!post) return null;

  return (
    <>
      <Head>
        <title>{post.title} | Navaneeth Vijay</title>
      </Head>

      <div className="mt-20">
        <article className="container mx-auto md:py-10 px-6 md:px-4">
          <div className="mb-4">
            <Link className="text-neutral-400 flex items-center gap-1 text-sm" href="/blog"> <IconArrowBack /> Back to Blog</Link>
          </div>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-xl md:text-4xl font-bold mb-4 font-libreFranklin text-neutral-800 dark:text-neutral-200">
              {post.title}
            </h1>
            <div className="text-sm text-neutral-500 dark:text-neutral-400  flex gap-1">
            <span>Navaneeth Vijay / </span>
            <time className="block">
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
