import PaginaPadrao from './components/PaginaPadrao';
import Inicio from './pages/Inicio';
import NotFound from './pages/NotFound';
import Livro from './pages/Livro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Routes>
          <Route path='/' element={<PaginaPadrao />} >
            <Route index element={<Inicio />} />
          </Route>
          <Route path='Livro/:id' element={<Livro />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}