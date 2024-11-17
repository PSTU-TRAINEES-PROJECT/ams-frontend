"use client";

import { usePathname } from 'next/navigation'; {/*gets current url*/ }
import Link from 'next/link';

const Breadcrumb = () => {
    const pathname = usePathname();
    const pathnames = pathname.split('/').filter(x => x); {/*splits url by / & removes empty strings*/ }

    return (
        <nav>
            <ul className="flex space-x-2">
                <li>
                    <Link href="/">Home</Link> {/*links with homepage*/}
                </li>
                {pathnames.map((value, index) => {
                    const last = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`; {/*each segment separated with /*/ }
                    const title = value;

                    return (
                        <li key={to} className="flex items-center space-x-2">
                            <span>/</span>
                            {last ? (
                                <span>{title}</span>
                            ) : (
                                <Link href={to}>{title}</Link>
                            )}
                        </li>
                    );
                    {/*if last segment then plaintext,if not then link*/ }
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumb;
