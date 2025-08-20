import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <meta property="og:title" content="Beenchang Seo Blog Main" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="학습과 경험을 기록하고 있습니다." />
                <meta property="og:url" content="https://blog.beenslab.com/" />
            </Head>
            <section className="my-10">
                <h1 className="font-bold text-2xl sm:text-4xl font-mono">🧑🏻‍💻 ChangBeen Seo</h1>
            </section>
            <section className="flex justify-center gap-8 items-center flex-wrap">
                <Image
                    src="/images/profile.jpeg"
                    alt="profile"
                    width={250}
                    height={250}
                    className="rounded-2xl"
                    priority={true}
                    style={{width: 250, height: 250}}
                />
                <div className="min-w-[350] max-w-[400px]">
                    <h2 className="font-bold text-xl">꾸준히 즐기는 개발자 서창빈 입니다.</h2>
                    <br />
                    <p>
                        더 나은 아키텍처와 효율적인 솔루션을 고민하며, 세상을 편리하게 만드는 개발을
                        꿈꿉니다.
                    </p>
                    <br />
                    <p>이 블로그는 제 아이디어와 여정의 흔적을 기록한 공간입니다.</p>
                    <br />
                    <p>
                        기술과 경험, 그리고 삶 속에서 얻은 통찰을 나누며 더 큰 세상을 만들어가고자
                        합니다.
                    </p>
                    <br />
                </div>
            </section>
        </>
    );
}
