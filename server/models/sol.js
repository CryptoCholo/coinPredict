import express from 'express'
import MindsDB from 'mindsdb-js-sdk'

const router = express.Router();

router.get('/', (req, res) => {
    const queryOptions = {
      join: 'files.Sol_data',
      where: ['t.date > LATEST'],
      limit: 30
    }
   
    MindsDB.default.Models.getModel('sol_forecast',  'mindsdb').then(async db => {
        let predictions = await db.batchQuery(queryOptions);
        let values = [];
        predictions.forEach(pred=> {
          values.push({Date: pred.data.date.split(' ')[0],High: pred.data.high, Low: pred.data.low, Value: pred.value})
        } )
        return res.json({models: values}) ;
    }).catch(error => console.log(error));
});

export { router };