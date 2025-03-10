'use client';

import { FormEvent, useRef, useState } from 'react';
import { useBearImages } from '../hooks/useBearImages';
import { useBearAnimation } from '../hooks/useBearAnimation';
import BearAvatar from './bear-avatar';
import Input from './input';
import Image from 'next/image';
import { toast } from 'react-hot-toast';

export default function LoginForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [values, setValues] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const { watchBearImages, hideBearImages, peakBearImages } = useBearImages();
  const { currentBearImage, setCurrentFocus, currentFocus, isAnimating } = useBearAnimation({
    watchBearImages,
    hideBearImages,
    peakBearImages,
    emailLength: values.email.length,
    showPassword,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success('Login successful! 🎉');
  };

  const togglePassword = () => {
    // Only toggle if we're not currently animating
    if (!isAnimating) {
      setShowPassword((prev) => !prev);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="w-full flex flex-col items-center gap-4" onSubmit={handleSubmit}>
      <div className="w-[130px] h-[130px] relative mb-4">
        <div className="absolute inset-0 flex items-center justify-center">
          {currentBearImage && (
            <BearAvatar
              currentImage={currentBearImage}
              key={`${currentFocus}-${values.email.length}`}
            />
          )}
        </div>
      </div>
      <Input
        placeholder="Email"
        name="email"
        type="email"
        ref={emailRef}
        autoFocus
        onFocus={() => setCurrentFocus('EMAIL')}
        autoComplete="email"
        value={values.email}
        required
        onChange={handleInputChange}
      />
      <div className="w-full relative">
        <Input
          placeholder="Password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          ref={passwordRef}
          onFocus={() => setCurrentFocus('PASSWORD')}
          autoComplete="current-password"
          value={values.password}
          required
          onChange={handleInputChange}
        />
        <button
          type="button"
          onClick={togglePassword}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 focus:outline-none transition-all duration-300 hover:text-gray-700"
        >
          {showPassword ? (
            <Image
              src="/assets/icons/eye_on.svg"
              alt="Hide password"
              width={100}
              height={100}
              className="w-5 h-5 transition-transform transform rotate-0 hover:scale-110"
            />
          ) : (
            <Image
              src="/assets/icons/eye_on.svg"
              alt="Show password"
              width={100}
              height={100}
              className="w-5 h-5 transition-transform transform rotate-0 hover:scale-110"
            />
          )}
        </button>
      </div>
      <button
        type="submit"
        className="py-4 w-full rounded-lg bg-tunnel-bear font-semibold text-lg focus:outline-tunnel-bear outline-offset-2 dark:bg-slate-800 cursor-pointer"
      >
        Log In
      </button>
    </form>
  );
}
