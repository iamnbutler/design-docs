import React from 'react';
import { iADuoRegular } from '@/app/fonts/font';
import Sidebar from '@/app/sidebar';
import '@/styles/globals.css';
import { Navigation } from './Navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Design Docs</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2a4dd0" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`
        ${iADuoRegular.className}
        overflow-y-scroll bg-slate-50 text-slate-900`}
      >
        <div className="grid w-full grid-cols-12 gap-2">
          <Navigation />
          <div className="col-span-7 my-4 border border-black p-4">
            {children}
          </div>
          <Sidebar />
        </div>
      </body>
    </html>
  );
}
