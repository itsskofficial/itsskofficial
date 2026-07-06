"use client";

import { ThemeProvider } from "@context/ThemeProvider";
import SmoothScroll from "@components/SmoothScroll";
import CustomCursor from "@components/CustomCursor";
import Loader from "@components/Loader";

export default function Providers({ children }) {
	return (
		<ThemeProvider>
			<SmoothScroll>
				<Loader />
				<CustomCursor />
				{children}
			</SmoothScroll>
		</ThemeProvider>
	);
}
