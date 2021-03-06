import Button from "@components/ui/Button";
import Head from "next/head";

export default function Index() {
  return (
    <div>
      <Head>
        <title>This page has a title</title>
        <meta name="Description" content="NextJS Project Home Page" />
      </Head>

      <div className="flex items-center justify-center h-screen">
        <Button link="https://google.com" label="Click me" />
      </div>
    </div>
  );
}
