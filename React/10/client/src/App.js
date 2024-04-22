import './style/App.css';
import { Layout } from 'antd';
import RouterConfig from './router/index';
import NavHeader from './components/NavHeader/NavHeader';
import PageFooter from './components/PageFooter/PageFooter';

const { Header, Footer, Content } = Layout;

function App() {
    return (
        <>
            <Header>
                <NavHeader />
            </Header>
            <Content className='content'>
                <RouterConfig />
            </Content>
            <Footer className='footer'>
                <PageFooter />
            </Footer>
        </>
    );
}

export default App;
