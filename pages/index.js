import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import GetLsData from "@/lib/GetLsData";
import Main from "@/components/Main/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  let [register, setRegister] = useState(false);

  useEffect(() => {
    let isRegister = GetLsData("isRegister");
    if (!isRegister) {
      router.push("/register");
    }
    setRegister(isRegister);
  }, []);

  return (
    <>
      {register ? (
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
            <Main />
          </main>
        </>
      ) : (
        ""
      )}
    </>
  );
}
