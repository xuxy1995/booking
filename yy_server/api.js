/**
 * Created by lenovo on 2017/8/25.
 */
const express = require('express')
const appRoutes = express.Router()

appRoutes.get('/getPlace', function (req, res) {
    res.json({
        status: 'success',
        msg: 'ok',
        code: 200,
        data: [
            {
              id:1,
            },
            {
              id:2
            }
        ]
    })
})
appRoutes.get('/getRoomInfo', function (req, res) {
  if(req.query.room_id == 1) {
      res.json({
          code: 200,
          data: {
              acreage: 80,
              contain: 20,
              charge_mode: 2,
              price: 10,
              unit: 60,
              img: ['../static/timg.jpg', '../static/cd.png', '../static/timg.jpg', '../static/cd.png']
          }
      })
  }else{
      res.json({
          code: 200,
          data: {
              acreage: 100,
              contain: 50,
              charge_mode: 1,
              price: 1,
              unit: 60,
              img: [ '../static/cd.png', '../static/timg.jpg', '../static/cd.png','../static/timg.jpg']
          }
      })
  }
})
appRoutes.get('/getBookingDays', function (req, res) {
  res.json({
    status: 'success',
    msg: 'ok',
    data: 7,
    code: 200,
    referrer: ''
  })
})
appRoutes.get('/getPlaceTimes', function (req, res) {
  res.json({
    status: 'success',
    msg: 'ok',
    data: {
      time_start: '16:00',
      time_end: '22:00',
      unit: 60
    },
    code: 200,
    referrer: ''
  })
})
var data = require('./data.json')
appRoutes.get('/getRooms', function (req, res) {
  res.json({
    status: 'success',
    msg: 'ok',
    data: data,
    code: 200,
    referrer: ''
  })
})

module.exports = appRoutes
