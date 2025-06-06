import React from 'react';

const Footer = () => (
  <footer className="mt-12 pb-8">
    <div className="flex justify-center items-center gap-6">
      <a
        href="https://www.linkedin.com/in/javier-villarreal1"
        target="_blank"
        rel="noopener noreferrer"        className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
      >        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          className="w-5 h-5 fill-current"
        >
          <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3a3.3 3.3 0 00-3.3-3.3c-.8 0-1.8.5-2.3 1.3V10H10v8.4h2.8v-5c0-.7.6-1.4 1.4-1.4.8 0 1.4.7 1.4 1.4v5h2.9zM6.9 8.6c.9 0 1.7-.8 1.7-1.7 0-1-.8-1.7-1.7-1.7-1 0-1.7.8-1.7 1.7 0 .9.8 1.7 1.7 1.7zm1.4 9.9v-8.4H5.5v8.4h2.8z"/>
        </svg>
        <span className="text-sm">javier-villarreal1</span>
      </a>
      <a
        href="https://github.com/imjavier"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          className="w-5 h-5 fill-current"
        >
          <path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.8 1a9.6 9.6 0 015 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.6.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.6 4.9.4.3.7.9.7 1.9v2.7c0 .3.2.6.7.5 4-1.3 6.8-5.1 6.8-9.5C22 6.5 17.5 2 12 2z"/>
        </svg>
        <span className="text-sm">imjavier</span>
      </a>
      <a
        href="https://www.instagram.com/imjavv"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
      >        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          className="w-5 h-5 fill-current"
        >
          <path d="M12 2c2.7 0 3.1 0 4.1.1 1.1 0 1.8.2 2.4.5.7.2 1.2.6 1.8 1.1.5.5.9 1.1 1.2 1.8.2.6.4 1.4.5 2.4 0 1.1.1 1.4.1 4.1s0 3.1-.1 4.1c0 1.1-.2 1.8-.5 2.4a4.9 4.9 0 01-2.9 2.9c-.6.2-1.4.4-2.4.5-1.1 0-1.4.1-4.1.1s-3.1 0-4.1-.1c-1.1 0-1.8-.2-2.4-.5a4.9 4.9 0 01-2.9-2.9c-.2-.6-.4-1.4-.5-2.4C2 15.1 2 14.7 2 12s0-3.1.1-4.1c0-1.1.2-1.8.5-2.4a4.9 4.9 0 012.9-2.9c.6-.2 1.4-.4 2.4-.5C8.9 2 9.3 2 12 2zm0 1.8c-2.7 0-3 0-4 .1-1 0-1.5.2-1.9.3-.5.2-.8.4-1.1.7-.3.4-.6.7-.7 1.2-.1.3-.3.9-.3 1.9 0 1-.1 1.4-.1 4s0 3 .1 4c0 1 .2 1.5.3 1.9.2.5.4.8.7 1.1.4.3.7.6 1.2.7.3.1.9.3 1.9.3 1 0 1.4.1 4 .1s3 0 4-.1c1 0 1.5-.2 1.9-.3a3 3 0 001.9-1.9c.1-.3.3-.9.3-1.9 0-1 .1-1.4.1-4s0-3-.1-4c0-1-.2-1.5-.3-1.9-.2-.5-.4-.8-.7-1.1a3 3 0 00-1.2-.7c-.3-.1-.9-.3-1.9-.3-1 0-1.4-.1-4-.1zm0 3.1a5.1 5.1 0 110 10.2 5.1 5.1 0 010-10.2zm0 8.5a3.3 3.3 0 100-6.7 3.3 3.3 0 000 6.7zm6.5-8.5a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"/>        </svg>
        <span className="text-sm">imjavv</span>
      </a>
    </div>
  </footer>
);

export default Footer;
