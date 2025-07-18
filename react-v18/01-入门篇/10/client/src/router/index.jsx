import { Route, Routes, Navigate } from 'react-router-dom';
import Issues from '../pages/Issues/Issues';
import AddIssue from '../pages/AddIssue/AddIssue';
import IssueDetail from '../pages/IssueDetail/IssueDetail';
import Book from '../pages/Book/Book';
import Interviews from '../pages/Interviews/Interviews';
import Search from '../pages/Search/Search';

function RouterConfig() {
    return (
        <Routes>
            <Route path='/' element={<Navigate replace to='/issues' />} />
            <Route path='/issues' element={<Issues />} />
            <Route path='/addIssue' element={<AddIssue />} />
            <Route path='/issueDetail/:id' element={<IssueDetail />} />
            <Route path='/book' element={<Book />} />
            <Route path='/interviews' element={<Interviews />} />
            <Route path='/search' element={<Search />} />
        </Routes>
    );
}

export default RouterConfig;
