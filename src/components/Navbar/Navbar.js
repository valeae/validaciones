import React from "react";
import Link from "next/link";

export default function Navbar () {
    return (
        <div>
            <nav>
            <ul>
                <li>
                <Link href="/">Home</Link>
                </li>
                <li>
                <Link href="/about" legacyBehavior prefetch={false}>About</Link>
                </li>
            </ul>
            </nav>
        </div>
    );
}