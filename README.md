## Tunnel Bear Login Animation (Next.js)

A delightful login form implementation inspired by The Tunnel Bear, now built with Next.js! This project recreates the charming bear animation that responds to user input and focus states, with an added successful login popup.

## Features

Interactive bear animation that responds to email input length

Playful hide animation when focusing on the password field

Success notification after logging in

Optimized performance with Next.js and improved image handling

Modern UI styled with Tailwind CSS

## Project Structure

The project follows Next.js best practices with a modular component architecture:

```
app/
├── components/
│   ├── BearAvatar.tsx    # Animated bear image component
│   ├── Input.tsx         # Reusable form input component
│   ├── LoginForm.tsx     # Main login form component with success popup
├── hooks/
│   ├── useBearAnimation.ts   # Bear animation state management
│   └── useBearImages.ts      # Image loading and sorting logic
├── public/assets/img/    # Bear animation image sequences
└── app/page.tsx          # Main page rendering the login form
```

## Technical Details

- Built with Next.js 14 (App Router) and TypeScript
- Styled using Tailwind CSS
- Uses React Hot Toast for success notifications
- Modular architecture with custom hooks for state management 
- Optimized image loading via Next.js public folder

## Development

1. Install dependencies:
```bash
pnpm install
```

2. Start the development server:
```bash
pnpm run dev
```

3. Build for production:
```bash
pnpm run build
```

## Credits

This project is a Next.js implementation inspired by [The Tunnel Bear](https://www.tunnelbear.com/account/login).
All bear animations and design concepts are credited to the original work.

Special credit to [Addy Osmani](https://github.com/addyosmani/tunnel-bear-login) for inspiration and contributions to frontend best practices.

## License

This project is for educational purposes only. The original design and animations are property of TunnelBear.

