import { LoginForm } from '@/components/Molecules/LoginFrom/LoginForm';

export default function signup() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <LoginForm className="" login={false} />
    </main>
  );
}
