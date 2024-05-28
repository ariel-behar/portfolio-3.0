import { Suspense, lazy, useState } from 'react'
import { Element } from 'react-scroll'

import styled from "@mui/material/styles/styled"
import Loader from './Loader'

import Box from "@mui/material/Box"
import Container from '@mui/material/Container'

import FirstTitleSection from "./MainView/FirstTitleSection"
const SecondAboutSection = lazy(() => import("./MainView/AboutSection"))
const ThirdProjectsSection = lazy(() => import('./MainView/ProjectsSection'))
const FourthPhotoshopSection = lazy(() => import('./MainView/PhotoshopSection'))
const FifthAbilitiesSection = lazy(() => import('./MainView/SkillsSection'))
const SixthDocumentsSection = lazy(() => import('./MainView/DocumentsSection'))
const SeventhContactSection = lazy(() => import('./MainView/ContactSection'))
const EightBonusSection = lazy(() => import('./MainView/BonusSection'))

const Footer = lazy(() => import('../components/Footer'))

const StyledBox = styled(Box)`
	background-image: url("https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/dark-pattern.jpg");
	background-repeat: repeat;

	position: relative;
	box-shadow: 0px -9px 28px 14px rgba(0,0,0,0.5);
`

function MainView() {
	const [loadSection, setLoadSection] = useState<number>(0)

	const loadSectionHandler = (sectionNum: number) => {
		setLoadSection(sectionNum)
	}

	return (
		<Box>
			<FirstTitleSection loadSectionHandler={loadSectionHandler} />

			{loadSection >= 2 && <Suspense fallback={<Loader />}><SecondAboutSection loadSectionHandler={loadSectionHandler} /></Suspense>}

			<StyledBox>
				<Container>
					<Element name="projects-photoshop-container-section">
						{loadSection >= 3 && <Suspense fallback={<Loader />}><ThirdProjectsSection loadSectionHandler={loadSectionHandler} /></Suspense>}

						<hr />

						{loadSection >= 4 && <Suspense fallback={<Loader />}><FourthPhotoshopSection loadSectionHandler={loadSectionHandler} /></Suspense>}
					</Element>

					<hr />

					{loadSection >= 5 && <Suspense fallback={<Loader />}><FifthAbilitiesSection loadSectionHandler={loadSectionHandler} /></Suspense>}

					<hr />

					<Box py={3}></Box>
				</Container>

				{loadSection >= 6 && <Suspense fallback={<Loader />}><SixthDocumentsSection loadSectionHandler={loadSectionHandler}/></Suspense>}

				{loadSection >= 7 && <Suspense fallback={<Loader />}><SeventhContactSection loadSectionHandler={loadSectionHandler}/></Suspense>}

				{loadSection >= 8 && <Suspense fallback={<Loader />}><EightBonusSection loadSectionHandler={loadSectionHandler}/></Suspense>}

				{loadSection >= 9 && <Suspense fallback={<Loader />}><Footer /></Suspense>}
			</StyledBox>
		</Box>
	)
}

export default MainView