'use server';
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { User } from '@/Types/User';
import { Collection } from '@/Types/Types';
export const Login = async (formData: FormData) => {
  const email = formData.get('email') ?? '';
  const password = formData.get('password') ?? '';
  // step 1: db abfragen mit dem user === email
  const userResults = await sql`SELECT * from users where email = ${email as string}`;
  const user = userResults.rows[0];
  // step 2: wenn user, dann password check
  if (user) {
    const passwordMatches = await bcrypt.compare(password as string, user.password as string);
    if (passwordMatches) {
      // step 3: userId in cookie speichern
      cookies().set('user', user.id as string, { secure: true });
      redirect('/collection');
    }
  }
};

export const signUp = async (formData: FormData) => {
  const email = formData.get('email');
  const password = formData.get('password');
  const hashedPassword = await bcrypt.hash(password as string, 10);
  // step 1 user in db erstellen
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const createUser = await sql`insert into users (email, password) values (${email as string}, ${hashedPassword})`;
  // step 2 cookie erstellen
  const userResults = await sql`SELECT * from users where email = ${email as string}`;
  const user = userResults.rows[0];
  if (user) {
    const passwordMatches = await bcrypt.compare(password as string, user.password as string);
    if (passwordMatches) {
      cookies().set('user', user.id as string, { secure: true });
      redirect('/collection');
    }
  }
};

export const getAuthorizedUser = async () => {
  const userId = cookies().get('user');
  if (!userId) return null;
  const userResults = await sql`SELECT * from users where id = ${userId.value}`;
  const user = userResults.rows[0];
  return user as User;
};

export const isLoggedIn = async () => {
  const user = await getAuthorizedUser();
  if (user) return true;
  return false;
};

export const logOut = () => {
  cookies().delete('user');
  redirect('/');
};

export const changeNickname = (formData: FormData) => {
  const userId = cookies().get('user');
  const newNickname = formData.get('nickname');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const changeName = sql`
  UPDATE users
  SET nickname = ${newNickname as string}
  WHERE id = ${userId?.value}`;
  return redirect('/profile');
};

export const deleteUser = async (formData: FormData) => {
  const email = formData.get('email') ?? '';
  const password = formData.get('password') ?? '';
  // step 1: db abfragen mit dem user === email
  const userResults = await sql`SELECT * from users where email = ${email as string}`;
  const user = userResults.rows[0];
  // step 2: wenn user, dann password check
  if (user) {
    const passwordMatches = await bcrypt.compare(password as string, user.password as string);
    if (passwordMatches) {
      // step 3: user löschen
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const deleteUser = sql`DELETE FROM users WHERE email = ${email as string}`;
    }
    redirect('/');
  }
};

export const getCollections = async ()=> {
  const userId=cookies().get("user")
  const collections = await sql `SELECT
    id,
    name,
    jsonb_array_elements(cards) AS card
FROM
    collections;
`
return collections
}

export const createCollection = async  (collection: Collection[]) => {
  const userId=cookies().get("user")
  const collectionJSOn = 
    collection.map(e => ({
      amount: e.amount,
      name: e.name,
      imgSrc: e.imgSrc
    }))

  const addCollection= await sql `INSERT INTO collections (id, name, cards) VALUES (
  ${userId!.value},  
  'test',
    '[
        ${JSON.stringify(collectionJSOn)}
    ]'    
);
`
  return addCollection
}

