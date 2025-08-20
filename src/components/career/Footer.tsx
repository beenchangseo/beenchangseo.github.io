export default function Footer({resumeUrl, blogUrl}: {resumeUrl: string; blogUrl: string}) {
    return (
        <footer className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* <p className="text-gray-600 dark:text-gray-300">
                채용/협업 제안 환영합니다. 필요한 경우 자세한 레퍼런스/코드/아키텍처 자료를 공유드릴
                수 있어요.
            </p>
            <div className="flex gap-2">
                <a
                    href={resumeUrl}
                    className="rounded-xl bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium"
                >
                    Resume PDF
                </a>
                <a
                    href={blogUrl}
                    className="rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                    더 많은 글 보기
                </a>
            </div> */}
        </footer>
    );
}
