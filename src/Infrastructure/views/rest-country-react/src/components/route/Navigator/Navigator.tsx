import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { CountryCCA, Home } from "../../../pages"
import { Header } from "../../organisms"


const Navigator = () => {
	return (
		<>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Navigate to='/home' replace />} />

					<Route path='home' element={<Home />} />
					<Route path='country/:query' element={<CountryCCA />} />
				</Routes>
			</BrowserRouter>
		</>

	)
}

export default Navigator
