import { createClient } from 'contentful';

export const getDatas = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const resp = await client.getEntries({ content_type: 'set' });

  return {
    props: {
      data: resp.items,
      sets: resp.items.map(e => e.fields),
    },
  };
};
