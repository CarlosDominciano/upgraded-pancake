import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NotFound from './pages/NotFound';

function Router() {
  return (
    <BrowserRouter>                                        
      <Routes>                                                
				<Route path="*" element={<NotFound />} />    
      </Routes>
    </BrowserRouter>
  );
}

export default Router;