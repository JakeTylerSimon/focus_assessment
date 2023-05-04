import React, {useEffect, useState} from 'react'

interface InterStateEconomySearch {
    
}

type InterStateEconomy = {
    "Millions Of Dollars": number,
    "Origin": string,
    "Thousands Of Tons": number,
    "SCTG2": string,
}

const StateEconomySearch: React.FC<InterStateEconomySearch> = () => {

    const [state, setState] = useState<InterStateEconomy[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {        
        fetchData(['04000US01', '04000US02', '04000US03', '04000US04', '04000US05', '04000US06', '04000US07', '04000US08', '04000US09', '04000US10', 
        '04000US11', '04000US12', '04000US13', '04000US14', '04000US15'
        , '04000US16', '04000US17', '04000US18', '04000US19', '04000US20', '04000US21', '04000US22', '04000US23', '04000US24',
        '04000US25', '04000US26', '04000US27', '04000US28', '04000US29', '04000US30', '04000US31', '04000US32',
        '04000US33', '04000US34', '04000US35', '04000US36', '04000US37', '04000US38', '04000US39', '04000US40',
        '04000US41', '04000US42', '04000US43', '04000US44', '04000US45', '04000US46', '04000US47', '04000US48',
        '04000US49', '04000US50', '04000US51', '04000US52', '04000US53', '04000US54', '04000US55', '04000US56']);
    }, [])

    const fetchData = async (originID: any) => {
        Promise.all(
        originID.map((origin: string) => {
            return new Promise((resolve) => {
                fetch(`https://datausa.io/api/data?Origin%20State=${origin}&measure=Millions%20Of%20Dollars,Thousands%20Of%20Tons&drilldowns=SCTG2&year=latest`)
                    .then(response => response.json())
                    .then(result => resolve(result.data));
                
            })
        })).then((results: any) => {
            let totalData: any = [];
            results.map((result: any) => {
                totalData = [...totalData, ...result];
            })
            setState(totalData);
        }).then(() => {
            console.log('state', state);
        });
    }
    
    return (
        <>
            <label htmlFor="state">Search for a state</label>
            <input id='state' type="text" onChange={(event) => {
                setSearchTerm(event.target.value);
            }}/>
            <button>Clear Search</button>

            <div>
                <input type="checkbox" id="option1" name="" value=""/>
                <label htmlFor="option1">Employment</label>

                <input type="checkbox" id="option2" name="" value=""/>
                <label htmlFor="option2">Production</label>

                <input type="checkbox" id="option3" name="" value=""/>
                <label htmlFor="option3">Trade</label>
            </div>

            <div>
                <h4>State List</h4>
                <table className='tradeState'>
                    <tr className='tradeHeader'>
                        <th className='tradeHead'>Name</th>
                        <th className='tradeHead'>Item</th>
                        <th className='tradeHead'>Total Dollar Amount</th>
                        <th className='tradeHead'>Total Tons</th>
                    </tr>
                    {state.filter((val) => {
                        if(searchTerm == "") {
                            return val
                        } else if(val.Origin?.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        } 
                    }).map((eachState, index) => {
                        return (
                            <>
                                <tr key={index} className='stateRow'>
                                    <td className='tradeHead'>{eachState.Origin}</td>
                                    <td className='tradeHead'>{eachState['SCTG2']}</td>
                                    <td className='tradeHead'>{eachState['Millions Of Dollars']}</td>
                                    <td className='tradeHead'>{eachState['Thousands Of Tons']}</td>
                                </tr>
                            
                            </>
                                
                        );
                    })}
                </table>
            </div>
        </>
    )
}

export default StateEconomySearch