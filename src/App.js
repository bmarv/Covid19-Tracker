import React from 'react'

import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import { fetchData} from './api/index'

import coronaImage from './images/covid19.png'

class App extends React.Component{

    state = {
        data: {},
        country:'',
    }

    async componentDidMount(){
        document.title="Covid19-Tracker"
        const fetchedData = await fetchData()

        this.setState({data: fetchedData})
    }

    handleCountryChange = async (country) => {
        // fetch data
        const fetchedData = await fetchData(country)
        // set state
        this.setState({ data: fetchedData, country: country})
    }

    render(){
        const {data, country} = this.state
        
        
        return(
            <div className={styles.container}>
                <img className= {styles.image} src={coronaImage} alt='Covid-19'/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App