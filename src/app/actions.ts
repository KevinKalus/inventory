'use server';
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { User } from '@/Types/User';
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

export const getAuthorizedUser = async () => {
  const userId = cookies().get('user');
  if (!userId) redirect('/login');
  const userResults = await sql`SELECT * from users where id = ${userId.value}`;
  const user = userResults.rows[0];
  return user as User;
};
