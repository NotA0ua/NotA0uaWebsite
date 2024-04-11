import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

const jetbrains = JetBrains_Mono({ subsets: ["cyrillic", "latin"] })

export const metadata: Metadata = {
	title: "NotA0ua",
	description: "NotA0ua NotAQua",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ru">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</head>
			<body className={jetbrains.className}>{children}</body>
		</html>
	)
}
