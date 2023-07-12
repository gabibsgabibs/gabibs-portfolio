import React, { useContext } from "react";

import { ThemeContext } from "../../context/Context";

import { LightModeGirl } from "./Assets/LightModeGirl";
import { DarkModeGirl } from "./Assets/DarkModeGirl";
import { LinkedinLogo } from "./Assets/LinkedinLogo";
import { GithubLogo } from "./Assets/GithubLogo";
import { ProjectsLogo } from "./Assets/ProjectsLogo";

function InitialContent() {
	const { isDark } = useContext(ThemeContext);
	return (
		<main className="flex flex-col place-items-center pb-10">
			<article className="flex flex-col place-items-center h-56 mt-5 mb-10 justify-around text-l text-darkblue dark:text-white">
				<div className="flex flex-col h-1/2 justify-around">
					<h2>OI, EU SOU A</h2>
					<h1 className="text-3xl font-semibold text-midblue">
						GABRIELLA BARBOSA
					</h1>
					<h2>DESENVOLVEDORA FULL STACK</h2>
				</div>
				<div className="flex w-full h-14 justify-between gap-3">
					<a
						className="flex border-lightblue border-[2px] rounded-xl w-1/3 justify-evenly place-items-center"
						href="https://www.linkedin.com/in/gabibsgabibs/"
					>
						<LinkedinLogo />
						<p>Linkedin</p>
					</a>
					<a
						className="flex border-lightblue border-[2px] rounded-xl w-1/3 justify-evenly place-items-center"
						href="https://github.com/gabibsgabibs"
					>
						<GithubLogo />
						<p>Github</p>
					</a>
					<a
						className="flex border-lightblue border-[2px] rounded-xl w-1/3 justify-evenly place-items-center"
						href="/projects"
					>
						<ProjectsLogo />
						<p>Projetos</p>
					</a>
				</div>
			</article>
			<aside className="grid order-first place-items-center w-4/5">
				{isDark ? <DarkModeGirl /> : <LightModeGirl />}
			</aside>
			<p
				className="border-midblue border-b-[2px] text-center text-darkblue place-self-center p-2 dark:text-white -mb-9"
				id="about"
			>
				⇣ scroll down ⇣
			</p>
		</main>
	);
}

export default InitialContent;
