import "@styles/globals.css";

export const metadata = {
	title: "Sarthak Karandikar",
	description: "SK's Portfolio",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}