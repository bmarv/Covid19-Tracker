import React from 'react'

import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import { fetchData} from './api/index'

class App extends React.Component{

    state = {
        data: {},
    }

    async componentDidMount(){
        const fetchedData = await fetchData()

        this.setState({data: fetchedData})
        // console.log(data)
    }


    render(){
        const {data} = this.state
        
        
        return(
            <div className={styles.container}>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App