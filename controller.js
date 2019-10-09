var client;

var btnPublish = $("#publish-btn")

client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")

client.on("connect", function() {
    console.log("succesfully Connected");
    $('#btn-connect').on('click', function() {
        $("#status").text("The Device is currently Turned ON!")
        $("#status").css("color", "green")
        $("#status").css("font-style", "italic")
        $("#status").css("font-weight", "bold")
            // $("#status").removeClass("alert-warning")
            // $("#status").addClass("alert-success")
        var topic = "jeanita/fan/status";
        var message = "turnedOn " + moment().format('MMMM Do YYYY, h:mm:ss a');
        console.log("ON")
        console.log("Published Topic: " + topic + " Message: " + message)
        client.publish(topic, message);
    }); // end connect
    $(".btn-disconnect").click(function() {
        var topic = "jeanita/fan/status";
        var message = "turned Off " + moment().format('MMMM Do YYYY, h:mm:ss a');
        client.publish(topic, message);
        $("#status").text("The device is currently turned OFF!")
        $("#status").css("color", "red")
        console.log("OFF")
    })
    $(".btn-1").click(function() {
        var topic = "jeanita/fan/status";
        var message = "turned 1 " + moment().format('MMMM Do YYYY, h:mm:ss a');
        client.publish(topic, message);
        $("#status").text("The device is currently turned 1!")
        $("#status").css("color", "blue")
        console.log("1")
    })
    $(".btn-2").click(function() {
        var topic = "jeanita/fan/status";
        var message = "turned 2 " + moment().format('MMMM Do YYYY, h:mm:ss a');
        client.publish(topic, message);
        $("#status").text("The device is currently turned 2!")
        $("#status").css("color", "blue")
        console.log("2")
    })
    $(".btn-3").click(function() {
        var topic = "jeanita/fan/status";
        var message = "turned 3 " + moment().format('MMMM Do YYYY, h:mm:ss a');
        client.publish(topic, message);
        $("#status").text("The device is currently turned 3!")
        $("#status").css("color", "blue")
        console.log("3")
    })


})





// // basic functionalities
// var client;

// var btnPublish = $("#publish-btn")
// $('#btn-connect').on('click', function () {
//   // connect
//   console.log("connect button clicked...")
//   client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")
//   $("#status").text("Connecting..")
//   $("#status").css("color", "green")
//   $("#status").css("font-style", "normal")
//   $("#status").css("font-size","50px")
//   $("#status").css("font-weight", "bold")
//   client.on("connect", function () {
//     console.log("successfully connected!")
//     $("#status").text("Connected Successfully!")
//     $("#status").css("color", "green")
//     $("#status").css("font-style", "normal")
//     $("#status").css("font-weight", "bold")
   
//   });

//   $(".btn-disconnect").click(function () {
//     client.end();
//     $("#status").text("Disconnected")
//     $("#status").css("color", "red")
//     $("#status").css("font-size", "50px")
//     $("#status").css("font-weight", "bold")
//   })//end disconnect

//   //Publish 
  
//   $("#btn-pub").click(function () {
//     var topic = $("#topic").val();
//     var message = $("#message").val();
//     if (topic == "" || message == "") {
//       Swal.fire({
//         type: 'error',
//         title: 'All Input is Required',
//       })
//     } else {
//       console.log("Published Topic: "+topic+ " Message: " + message)
//       client.publish(topic, message);
//       Swal.fire({
//         type: 'success',
//         title: 'Publish Successfully!',
//       })
//     }
//   })

//   //Subscribe
//   $("#btn-sub").click(function () {
//     var topsub = $("#topic-sub").val();
//     if (topsub == "") {
//       Swal.fire({
//         type: 'error',
//         title: 'Topic is Required',
//       })
//     } else {
//       console.log("Subcribed Topic: "+topsub)
//       client.subscribe(topsub);
//       Swal.fire({
//         type: 'success',
//         title: 'Subscribe Successfully',
//       })
//     }
//   })
//   $("#btn-unsub").click(function () {
//     var topsub = $("#topic-sub").val();
//     if (topsub == "") {
//       Swal.fire({
//         type: 'error',
//         title: 'Topic is Required',
//       })
//     } else {
//       client.unsubscribe(topsub);
//       Swal.fire({
//         type: 'success',
//         title: 'Unsubscribe Successfully',
//       })
//     }
//     $("#btn-unsub").removeClass("alert-success")
//     $("#btn-unsub").addClass("alert-secondary")
//   })//end unsubscribe
  
  
  
//   //Message
//   client.on("message", function (topic, payload) {
//     console.log("Received Topic: "+topic+"Payload: "+payload)
//     var row = $("<tr>")
//     $("<td>").text(topic).appendTo($(row))
//     $("<td>").text(payload).appendTo($(row))
//     $("<td>").text(moment().format('MMMM Do YYYY, h:mm:ss a')).appendTo($(row))
//     $("tbody").append($(row))
//     // console.log([topic, payload].join(": "));
//   })
// })//end of click



// // client.subscribe("mqtt/demo")

// // btnPublish.on('click', function (e) {
// //   e.preventDefault();
// //   console.log("publish button clicked..")
// //   client.publish("mqtt/demo", "hi I'm Jessa Mae good Morning")

// //   client.on("message", function (topic, payload) {
// //     console.log([topic, payload].join(": "));
// //     // client.end();



// //   })
// //   // client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")

// // })


// // // advance functionalities
// // client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
// // client.subscribe("mqtt/demo", function (err){
// //   if (err){
// //     console.log(err);
// //   } else {
// //     console.log("subscribed")
// //   }
// // })

// // client.on("connect", function(){
// //     console.log("Successfully connected");
// // })

// // client.on("message", function (topic, payload) {
// //   console.log([topic, payload].join(": "));
// //   client.end();
// // })

// // client.publish("mqtt/demo", "hello world!", function(err){
// //   if (err){
// //     console.log(err)
// //   } else {
// //     console.log("published")
// //   }
// // })