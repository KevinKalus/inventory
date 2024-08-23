import { LoginForm } from '@/components/Molecules/LoginFrom/LoginForm';

export default function login() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <LoginForm login />
    </main>
  );
}
