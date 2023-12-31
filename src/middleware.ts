import { NextRequest, NextResponse } from "next/server"

import { match as matchLocale } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
import { i18n } from "../i18n.config"

function getLocale(request: NextRequest): string | undefined {
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    // @ts-ignore locales are readonly
    const locales: string[] = i18n.locales
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

    const locale = matchLocale(languages, locales, i18n.defaultLocale)
    return locale
}

export async function middleware(request: NextRequest) {
    const token =
        request.cookies.get("melonRefreshToken")?.value &&
        request.cookies.get("melonAccessToken")?.value
    const pathname = request.nextUrl.pathname
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )
    // Redirect if there is no locale
    const locale = getLocale(request)
    if (pathnameIsMissingLocale) {
        console.log("Locale is missing");
        return NextResponse.redirect(
            new URL(
                `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
                request.url
            )
        )
    }
    if (token && pathname.includes("/login")) {
        return NextResponse.redirect(new URL(`/${locale}/admin`, request.url))
    }
    if (
        !token &&
        pathname.includes("/admin") &&
        ["login", "sign-up"].includes(pathname)
    ) {
        return NextResponse.redirect(new URL(`/${locale}/login`, request.url))
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
