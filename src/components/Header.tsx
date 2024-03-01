'use client';
import {useEffect, useRef, useState} from 'react';
import Nav from './Nav';
import Link from 'next/link';
import DarkModeButton from './mode/DarkMode';

export default function Header() {
    const headerRef = useRef<HTMLElement>(null);
    const toggleRef = useRef<HTMLDivElement>(null);
    const [onToggle, setOnToggle] = useState<boolean>(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            headerRef.current?.classList.add('shadow-[0_5px_7px_0px_#ececec]');
            return;
        }
        headerRef.current?.classList.remove('shadow-[0_5px_7px_0px_#ececec]');
    };

    const handleToggle = () => {
        if (onToggle) toggleRef.current?.classList.add('hidden');
        else toggleRef.current?.classList.remove('hidden');
        setOnToggle((prev) => !prev);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header
                ref={headerRef}
                className="sticky top-0 left-0 w-full z-10 h-20 font-mono transition duration-500 bg-white dark:bg-[#111111]"
            >
                <div className="max-w-screen-md h-20 flex flex-nowrap items-center justify-between m-auto px-8">
                    <Link href="/">
                        <h1>BEENCHANGSEO.DEV</h1>
                    </Link>

                    <div className="flex flex-nowrap gap-8 items-center">
                        <DarkModeButton />

                        <div className="flex-nowrap items-center justify-center gap-5 text-center hidden sm:flex">
                            <Nav type="normal" />
                        </div>
                    </div>
                </div>
                <div
                    ref={toggleRef}
                    className="w-full h-screen absolute top-20 left-0 bg-white flex-col flex-nowrap p-5 flex hidden dark:bg-[#111111]"
                >
                    <Nav type="toggle" onClick={handleToggle} />
                </div>
            </header>
        </>
    );
}
