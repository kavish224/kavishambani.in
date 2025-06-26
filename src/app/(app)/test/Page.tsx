'use client';

import { useEffect } from "react";
declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}
export default function TestAdPage() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsbygoogle error:", e);
    }
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Testing Ad Unit</h1>
      <ins
        className="adsbygoogle"
        style={{ display: "block", height: "100px" }}
        data-ad-client="ca-pub-4213724490364096"
        data-ad-slot="3482786374"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
