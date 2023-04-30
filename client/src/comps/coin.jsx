import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';



function CryptoChart({ dataUrl, crypto }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Fetch the data from the MindsDB API
    fetch(dataUrl,{mode: 'cors'})
      .then(response => response.json())
      .then(data => {
        console.log(data.models)
        
        setChartData(data.models);
      })
      .catch(error => {
        console.error('Error fetching chart data:', error);
      });
  }, [dataUrl]);

  // If the chart data hasn't loaded yet, display a loading indicator
  if (!chartData) {
    return <div>Loading chart data...</div>;
  }

  // Otherwise, render the chart
  return (
    <div className='w-screen p-5 flex flex-col items-center justify-start'>
        <h2 className='h-6'>Daily Crypto Predictions For {crypto}</h2>
        <table className="w-3/4 divide-y divide-yellow-200 mt-8 text-sm p-5">
          <thead className="bg-yellow-50 w-full">
            <tr className="w-full">
              <th className="whitespace-nowrap px-5 py-2 text-left font-bold text-yellow-900">
                  Date
              </th>
              <th className="whitespace-nowrap px-5 py-2 text-left font-bold text-yellow-900">
                 High
              </th>
              <th className="whitespace-nowrap px-5 py-2 text-left font-bold text-yellow-900" >
                Low
              </th>
              <th className="whitespace-nowrap px-5 py-2 text-left font-bold text-yellow-900" >
                Value
              </th>
            </tr>
          </thead>
         
          <tbody className="divide-y divide-stone-200 w-full">
            {chartData.map((item)=> (
                <tr key={item.Date} className="w-full">
                    <td className="whitespace-nowrap px-4 py-4 font-medium text-yellow-700">
                       {item.Date}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-yellow-700">
                      {item.High}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-yellow-700">
                        {item.Low}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-yellow-900">
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