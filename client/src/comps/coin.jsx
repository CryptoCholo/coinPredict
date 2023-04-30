import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';



function CryptoChart({ dataUrl, crypto }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
   
    fetch(dataUrl,{mode: 'cors'})
      .then(response => response.json())
      .then(data => {
        console.log(data.models)
        
        setChartData(data.models);
      })
      .catch(error => {
        console.error('Error fetching chart data:', error);
      });
  }, [dataUrl])

  return (
    <div className='w-screen p-5 flex flex-col items-center justify-start'>
        <h2 className='h-6 font-bold mt-14'>Daily Crypto Predictions For {crypto}</h2>
        <table className="w-3/4 divide-y divide-indigo-200 mt-8 text-sm p-5">
          <thead className="bg-indigo-50 w-full">
            <tr className="w-full">
            <th className="whitespace-nowrap px-5 py-2 text-left font-bold text-indigo-900">
                  Number
              </th>
              <th className="whitespace-nowrap px-5 py-2 text-left font-bold text-indigo-900">
                  Date
              </th>
              <th className="whitespace-nowrap px-5 py-2 text-left font-bold text-indigo-900">
                 High
              </th>
              <th className="whitespace-nowrap px-5 py-2 text-left font-bold text-indigo-900" >
                Low
              </th>
              <th className="whitespace-nowrap px-5 py-2 text-left font-bold text-indigo-900" >
                Forecast
              </th>
            </tr>
          </thead>
         
          <tbody className="divide-y divide-stone-200 w-full">
            {chartData.map((item)=> (
                <tr key={item.Date} className="w-full">
                   <td className="whitespace-nowrap px-4 py-4 font-medium text-indigo-700">
                       {chartData.indexOf(item) +1}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 font-medium text-indigo-700">
                       {item.Date}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-indigo-700">
                      {item.High}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-indigo-700">
                        {item.Low}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-indigo-900">
                        {item.Value}
                    </td>
                </tr>
                ))
            }
          </tbody>
        </table>
    </div>
  );
}


CryptoChart.propTypes = {
    dataUrl: PropTypes.string.isRequired,
    crypto: PropTypes.string.isRequired,
};


export default CryptoChart;