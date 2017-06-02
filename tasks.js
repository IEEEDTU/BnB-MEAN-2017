module.exports = function (cron) {

  var parameters = require('./parameters');
  var company = require('./models/company');
  var mongoose = require('mongoose');


  let companyPriceOnTime = new cron.CronJob({
    cronTime : '*/5 * * * * *',  // The time pattern when you want the job to start
    onTick : changePrice, // Task to run
    onComplete : reset, // When job is completed and It stops.
    start : true, // immediately starts the job.
    timeZone : parameters.timeZone // The timezone
  });

  let number = 0;
  function changePrice() {
      company.findById("59298b786c0d0b75ea7cbc01", function(err, Company) {
        if (err){
            console.log(err);
            res.send("unable to fetch company details");
        }else{
            
        }
      });
  }
  function reset() {
    console.log('Task update Completed');
  }

  return companyPriceOnTime;

};