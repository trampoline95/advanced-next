import Fetch from 'isomorphic-unfetch';
import NavBar from '../components/NavBar';
import Prices from '../components/Prices';

const Index = (props) => (
    <div>
        <NavBar/>
        <h1>Welcome to BitzPrice</h1>
        <p>Check current Bitcoin rate </p>
        {props.bpi.time.updated}
    </div>
);

Index.getInitialProps = async function(){
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();

    return {
        bpi: data
    };
}


export default Index;