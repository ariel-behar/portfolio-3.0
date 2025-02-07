import Typography from "@mui/material/Typography"
import IThreeJsProject from "../../../../model/ThreeJsProject"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"

interface Props {
    project: IThreeJsProject
}

function ThreeJsCard({
    project
}: Props) {
    return (
        <Box
            sx={{
                cursor: 'pointer',
                transition: 'all 0.2s',
                '&:hover': {
                    transform: 'scale(1.05)',
                }
            }}
        >
            <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
            >
                <img
                    style={{ cursor: "pointer", borderRadius: '10px' }}
                    src={`https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/three-js-projects/${project.image}`}
                    width="100%"
                    alt={`${project.title}`}
                />

                <Typography variant="body1" component='h5' textAlign='center' color="text.secondary" >{project.title}</Typography>
            </Link>
        </Box>
    )
}

export default ThreeJsCard