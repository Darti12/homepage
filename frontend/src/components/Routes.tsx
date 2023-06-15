import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
} from 'react-router-dom'
import PageContainer from './PageContainer'
import ErrorPage from './ErrorPage'
import Index from './Index'

const Routes = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<PageContainer />}
            errorElement={<ErrorPage />}
        >
            <Route errorElement={<ErrorPage />}>
                <Route index element={<Index />} />
                <Route path="warhammer" element={<>test</>} />
                <Route path="" element={<>test2</>} />
                <Route path="about" element={<>test3</>} />
            </Route>
        </Route>
    )
)

export default Routes
