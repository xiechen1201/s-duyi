import { Route, Routes, Navigate } from 'react-router-dom';
import Issues from '../pages/Issues/Issues';
import Book from '../pages/Book/Book';
import Interviews from '../pages/Interviews/Interviews';

function RouterConfig() {
    return (
        <Routes>
            <Route path='/' element={<Navigate replace to='/issues' />} />
            <Route path='/issues' element={<Issues />} />
            <Route path='/book' element={<Book />} />
            <Route path='/interviews' element={<Interviews />} />
        </Routes>
    );
}

export default RouterConfig;
