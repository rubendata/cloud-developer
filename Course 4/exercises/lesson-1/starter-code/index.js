const AWS = require('aws-sdk')
const axios = require('axios')

// Name of a service, any string
const serviceName = process.env.SERVICE_NAME
// URL of a service to test
const url = process.env.URL

// CloudWatch client
const cloudwatch = new AWS.CloudWatch();

handler = async (event) => {
  // TODO: Use these variables to record metric values
  let endTime
  let requestWasSuccessful
  console.log(event)
  const startTime = timeInMs()
  await axios.get(url)
  console.log(url)
  
  // Example of how to write a single data point
  // await cloudwatch.putMetricData({
  //   MetricData: [
  //     {
  //       MetricName: 'MetricName', // Use different metric names for different values, e.g. 'Latency' and 'Successful'
  //       Dimensions: [
  //         {
  //           Name: 'ServiceName',
  //           Value: serviceName
  //         }
  //       ],
  //       Unit: '', // 'Count' or 'Milliseconds'
  //       Value: 0 // Total value
  //     }
  //   ],
  //   Namespace: 'Udacity/Serveless'
  // }).promise()

  // TODO: Record time it took to get a response
  // TODO: Record if a response was successful or not
}

handler()

function timeInMs() {
  return new Date().getTime()
}
