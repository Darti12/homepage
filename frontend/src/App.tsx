import './App.css'
import MenuAppBar from './components/MenuAppBar'
import Footer from './components/Footer'
import PageContainer from './components/PageContainer'
import Routes from './components/Routes'
import { RouterProvider } from 'react-router'

const App = () => {
    return (
        <>
            <MenuAppBar headers={['hei', 'du']} />
            <PageContainer>
                <RouterProvider router={Routes} />
            </PageContainer>
            <Footer />
        </>
    )
}

export default App
