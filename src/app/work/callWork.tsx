"use client";
import { Flex, useBreakpointValue, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

function splitArray(inputArray: string[], columnSize: number): string[][] {
	const chunkSize = Math.ceil(inputArray.length / columnSize);
	const result: string[][] = [];

	for (let i = 0; i < inputArray.length; i += chunkSize) {
		result.push(inputArray.slice(i, i + chunkSize));
	}

	return result;
}
export default function CallWork() {
	const filename = [
		"/images/gallery/immage1.png",
		"/images/gallery/immage2.png",
		"/images/gallery/immage3.png",
		"/images/gallery/immage4.png",
		"/images/gallery/immage5.png",
		"/images/gallery/immage6.png",
		"/images/gallery/immage7.png",
		"/images/gallery/immage8.png",
		"/images/VR/VR1.png",
		"/images/VR/VR2.png",
		"/images/VR/VR3.png",
		"/images/VR/VR4.png",
	];
    
	const columnSize =
		useBreakpointValue(
			{
				base: 1,
				md: 2,
				lg: 3,
			},
			{ fallback: "base" }
		) || 1;
	const imageList = splitArray(filename, columnSize);
	return (
		<Flex direction={"row"}>
			{imageList.map((column, index) => (
				<Flex direction={"column"} w="100%">
					{column.map((image, index) => (
						<Image
							src={image}
							key={image}
							alt="file"
							style={{ width: "100%", height: "fit-content", padding: "12px" }}
							height={1400}
							width={1400}></Image>
					))}
				</Flex>
			))}
		</Flex>
	);
}
