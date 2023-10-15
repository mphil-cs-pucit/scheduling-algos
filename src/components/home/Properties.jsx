import React from 'react'
import DataReader from './DataReader'
import AlgoSelector from './AlgoSelector'
import UnitTime from './UnitTime'

function Properties({
    processData,
    setProcessData,
    dataChangeCounter,
    algo,
    setAlgo,
    setSettingsOpened,
    unitTime,
    setUnitTime,
    setCloseAndRun
}) {
    return (
        <div style={{ display: 'flex', maxWidth: 400, flexDirection: 'column', background: '#fff', justifyContent: 'space-between', width: '100vw', padding: "20px 25px" }}>
            <div style={{ padding: '20px 0px' }}>
                <div className='settings-block'>
                    <DataReader
                        processData={processData}
                        setProcessData={setProcessData}
                        dataChangeCounter={dataChangeCounter}
                    />
                </div>
                <div className='settings-block'>
                    <AlgoSelector
                        algo={algo}
                        setAlgo={setAlgo}
                    />
                </div>
                <div className='settings-block'>
                    <UnitTime unitTime={unitTime} setUnitTime={setUnitTime} />
                </div>
            </div>

            <button
                className='btn btn-primary'
                style={{ marginBottom: 10 }}
                disabled={
                    !processData.length || algo == 0 || unitTime.toString().trim() == ""
                }
                onClick={() => {
                    setCloseAndRun()
                }}
            >Close & Run</button>

            <button
                className='btn btn-light'
                onClick={() => {
                    setSettingsOpened(false)
                }}
            >Close</button>

        </div>
    )
}

export default Properties