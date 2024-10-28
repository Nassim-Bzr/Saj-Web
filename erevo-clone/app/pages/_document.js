import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Script Chatsimple */}
        <script src="https://cdn.chatsimple.ai/chat-bot-loader.js" defer></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* Composant Chatbot */}
        <chat-bot
          platform_id="909e3b89-45ce-4bef-89b3-adede8f2b19d"
          user_id="4a6ed246-8bed-477d-9fe6-6036f3084060"
          chatbot_id="441096f8-51ef-4eac-b5b5-7a188a5af4e3"
        >
          <a href="https://www.chatsimple.ai/?utm_source=widget&utm_medium=referral">chatsimple</a>
        </chat-bot>
      </body>
    </Html>
  );
}
