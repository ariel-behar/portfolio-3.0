import IDocument from "../../model/Document"
import { v4 as uuidv4 } from 'uuid';

import Grid from '@mui/material/Grid'

interface Props {
    filteredDocuments: IDocument[]
}

function DocumentModalCertificate({ filteredDocuments }: Props) {
    return (
        <Grid container spacing={2} p={2}>
            {
                filteredDocuments.map((document, index) => {
                    return <Grid key={uuidv4()} item xs={index === 0 || index == 1 || index === filteredDocuments.length - 1 ? 12 : 6} display='flex' flexDirection='column' justifyContent='center'>
                        <img className='certificate-image' src={`https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/documents/certificate/${document.image}`} alt={document.title} />
                    </Grid>
                })
            }
        </Grid>
    )
}

export default DocumentModalCertificate