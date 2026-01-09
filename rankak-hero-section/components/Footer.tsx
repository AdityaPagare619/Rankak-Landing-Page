import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-center py-8 text-text-muted-light dark:text-text-muted-dark text-sm font-medium">
      <p>© 2023 Rankak. Made with <span className="text-red-500 animate-pulse">♥</span> for future engineers.</p>
    </footer>
  );
};

export default Footer;