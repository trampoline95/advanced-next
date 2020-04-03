class Prices extends React.Component{
    state = {
        currency: 'USD'
    }

    render(props){
        return(
            <div>
                <ul className="list-group"> 
                    <li className="list-group-item" >
                        Bitcoin rate for  : <span>
                            {this.props.bpi.USD.code}
                        </span>
                        <strong>{this.props.bpi.USD.rate}</strong>
                    </li>
                </ul>

            </div>
        );
    }
}

export default Prices;

