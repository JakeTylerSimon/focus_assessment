import React, {useEffect, useState} from 'react'

interface InterstateTradeState {
    
}

type InterTrade = {
    "Destination State": string,
    "Millions Of Dollars": number,
    "Thousands Of Tons": number,
    "Year": string,
}

const InterstateTrade: React.FC<InterstateTradeState> = () => {

    const [state, setState] = useState<InterTrade[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://datausa.io/api/data?Origin%20State=04000US51&measure=Millions%20Of%20Dollars,Thousands%20Of%20Tons&drilldowns=Destination%20State&year=latest')
            const allState = await response.json()
            setState(allState.data)
        }
        fetchData()
    }, [])
    
    return (
        <>
            <label htmlFor="state">Search for a state</label>
            <input id='state' type="text" onChange={(event) => {
                setSearchTerm(event.target.value);
            }}/>
            <button>Clear Search</button>

            <div>
                <input type="checkbox" id="option1" name="vehicle1" value="Bike"/>
                <label htmlFor="option1">Employment</label>

                <input type="checkbox" id="option2" name="vehicle2" value="Car"/>
                <label htmlFor="option2">Production</label>

                <input type="checkbox" id="option3" name="vehicle3" value="Boat"/>
                <label htmlFor="option3">Trade</label>
            </div>

            <div>
                <h4>State List</h4>
                <table className='tradeState'>
                    <tr className='tradeHeader'>
                        <th className='tradeHead'>Destination State</th>
                        <th className='tradeHead'>Millions of Dollars</th>
                        <th className='tradeHead'>Thousand of Tons</th>
                        <th className='tradeHead'>Year</th>
                    </tr>
                    {state.filter((val) => {
                        if(searchTerm == "") {
                            return val
                        } else if(val['Destination State'].toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                    }).map((eachState, index) => {
                        return (
                            <>
                                <tr key={index} className='stateRow'>
                                    <td className='tradeHead'>{eachState['Destination State']} </td>
                                    <td className='tradeHead'>{eachState['Millions Of Dollars']}</td>
                                    <td className='tradeHead'>{eachState['Thousands Of Tons']}</td>
                                    <td className='tradeHead'>{eachState.Year}</td>
                                </tr>
                            </>
                        );
                    })}
                </table>
            </div>
        </>
    )
}

export default InterstateTrade