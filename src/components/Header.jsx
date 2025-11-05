"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path ? "bg-blue-700" : "";
  };

  return (
    <header className="bg-blue-500 text-white p-4 mb-6">
      <div className="container mx-auto">
        <nav>
          <ul className="flex space-x-4 justify-center">
            <li>
              <Link
                href="/pagination"
                className={`px-3 py-2 rounded hover:bg-blue-600 ${isActive(
                  "/pagination",
                )}`}
              >
                페이지네이션
              </Link>
            </li>

            <li>
              <Link
                href="/load-more"
                className={`px-3 py-2 rounded hover:bg-blue-600 ${isActive(
                  "/load-more",
                )}`}
              >
                더보기
              </Link>
            </li>
            {/* <li>
              <Link
                href="/infinite-scroll"
                className={`px-3 py-2 rounded hover:bg-blue-600 ${isActive(
                  "/infinite-scroll",
                )}`}
              >
                무한스크롤
              </Link>
            </li> */}
            {/* <li>
              <Link
                href="/completed"
                className={`px-3 py-2 rounded hover:bg-blue-600 ${isActive(
                  "/completed",
                )}`}
              >
                완료목록
              </Link>
            </li>
            <li>
              <Link
                href="/enabled-test"
                className={`px-3 py-2 rounded hover:bg-blue-600 ${isActive(
                  "/enabled-test",
                )}`}
              >
                enabled 테스트
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
