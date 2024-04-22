import { useState } from 'react';
import Input from './components/Input';
import List from './components/List';

function App(props) {
    return (
        <div className='container'>
            <h1 className='lead' style={{ marginBottom: '30px' }}>
                待办事项
            </h1>
            <Input store={props.store} />
            <List store={props.store} />
        </div>
    );
}

export default App;
