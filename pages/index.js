import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useContextapi } from "@/ContextApi";
import { useRouter } from "next/router";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let { user } = useContextapi();
  const router = useRouter();

  useEffect(() => {
    if (!user.IsRegister) {
      router.push("/register");
    }
  }, []);

  return (
    <>
      {user.IsRegister ? (
        <>
          <Head>
            <title>Todo App</title>
            <meta name="description" content="This is a todo app" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={`${styles.main} ${inter.className}`}>
            <h1>hiii</h1>
          </main>
        </>
      ) : (
        ""
      )}
    </>
  );
}
