import { Paper, Typography } from '@mui/material'

interface PageContainerProps {
    children?: React.ReactNode
    title?: string
}

const PageContainer = (props: PageContainerProps) => {
    return (
        <Paper elevation={24} sx={{ marginLeft: '10em', marginRight: '10em' }}>
            <Typography variant="h2">{props.title}</Typography>
            {props.children}
        </Paper>
    )
}

export default PageContainer
