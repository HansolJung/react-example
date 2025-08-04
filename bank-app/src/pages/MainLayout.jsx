import '../assets/css/mainLayout.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DepositPopup from '../components/DepositPopup';
import WithdrawPopup from '../components/WithdrawPopup';
import { BrowserRouter, Route, Routes} from 'react-router'
import BankLayout from './BankLayout';

function MainLayout(props) {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route path='/' element={<MainPage/>}/> 
                        path='/' 와 index 는 똑같은 의미. */}
                    <Route index element={<BankLayout/>}/>
                    <Route path='/deposit' element={<DepositPopup/>}/>
                    <Route path='/withdraw' element={<WithdrawPopup/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default MainLayout;