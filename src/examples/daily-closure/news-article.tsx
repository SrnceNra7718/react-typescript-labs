import { Card } from '$/common/components/card';
import { use } from 'react';
import { currentDate } from './utilities';
import z from 'zod';

type NewsArticleProps = {
  id: number;
};

/**
 * Post schema for validation using zod
 */
const PostSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
  // body: z.string().nullable(),

  // authorEmail: z.email(),
  // published: z.coerce.boolean(),
  // tags: z.array(z.string()).default([]),
  // metadata: z.record(z.string(), z.union([z.string(), z.number(), z.boolean()]).optional()),
});
//satisfies z.ZodType<Post>;

// const IdSchema = z.union([z.string(), z.number(), z.null(), z.boolean()]);

// type IdType = z.infer<typeof IdSchema>;

// metadata is arbitral data and can be of any type
// typeof null === 'object';

/**
 * The Post type inferred from the PostSchema
 */
export type Post = z.infer<typeof PostSchema>;

const fetchArticle = async (id: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  // return response.json();

  const posiblePost = response.json();
  const post = PostSchema.parse(await posiblePost);

  return post;
};

export const NewsArticle = ({ id = 1 }: NewsArticleProps) => {
  // Important: The type for article is any because the API returns.

  // this is now pass from parent component via Suspense
  // const [article, setArticle] = useState<Post | null>(null);

  // useEffect(() => {
  //   fetchArticle(id).then((data) => setArticle(data));
  // }, [id]);

  // if (!article) {
  //   return null;
  // }
  const article = use(fetchArticle(id));

  return (
    <Card as="article" className="space-y-4 font-mono md:first:col-span-2">
      <header className="flex items-start justify-between">
        <h2 className="text-lg font-semibold">{article?.title}</h2>
        <p className="text-sm whitespace-nowrap text-gray-500">{currentDate}</p>
      </header>
      <p>{article?.body}</p>
    </Card>
  );
};
