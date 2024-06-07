import { motion } from "framer-motion"
import { v4 as uuidv4 } from 'uuid';

import IProject from "../../../../model/Project"
import ProjectCard from "./ProjectCard"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Stack from "@mui/system/Stack"

interface Props {
	selectedProject: IProject | null,
}

function ProjectDetailsBox({
	selectedProject
}: Props) {

	return (
		<Box sx={{
			backgroundColor: "rgba(0, 0, 0, 0.3)",
			borderRadius: "20px",
			padding: "10px 15px 10px",
		}}
			minHeight='510px'
		>
			{
				selectedProject
					? <ProjectCard project={(selectedProject as IProject)} projectCategory='real' />
					: (
						<Stack direction='column' justifyContent='center' alignItems='center' height='100%'>
							<Typography
								key={uuidv4()}
								variant='h6'
								component={motion.h5}
								textAlign='center'
								color='text.secondary'
								animate={{ scale: [0.9, 1, 1, 0.9], }}
								transition={{ duration: 1.3, repeat: Infinity }}
							>
								Click on Thumbnails to See Information About Each Project
							</Typography>
						</Stack>
					)
			}
		</Box>
	)
}

export default ProjectDetailsBox