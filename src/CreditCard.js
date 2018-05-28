import React, { Component} from 'react';
import Card from './components/Card'

class CreditCard extends Component {
    render() {
        return (
        	<Card 
        	companyName='Bnp Paribas'
		    cardNumber='7253325678951245'
		    validThru='1150'
		    cardHolder='Mbaye Faye' 
        	 />
        );
    }
}

export default CreditCard;
