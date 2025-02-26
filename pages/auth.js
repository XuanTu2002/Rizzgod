import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) console.error('Error logging in:', error.message);
    else console.log('Logged in user:', user);
  };

  const handleSignUp = async () => {
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) console.error('Error signing up:', error.message);
    else console.log('Signed up user:', user);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold">Auth Page</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-2 p-2 border"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mt-2 p-2 border"
      />
      <button onClick={handleLogin} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Log In
      </button>
      <button onClick={handleSignUp} className="mt-2 p-2 bg-green-500 text-white rounded">
        Sign Up
      </button>
    </div>
  );
}
