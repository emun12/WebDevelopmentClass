

// function myFunction(){
//     // document.getElementById("ids").getTweet();
//     console.log("hi")
// }

$(document).ready(function(){

  //create a new tweet
  const $createT = $('#createTweet');
  $createT.on("click", async function(){
    if ($("#newTexts").length==0 ){
      $("#newTweets").append("<tr>");
      $("#newTweets").append("<td> <textarea id=newTexts> </textarea> </td>");
      $("#newTweets").append("</tr>");
    }
    

    // <textarea id=editText"+i+">"+arr[i].body+"</textarea>
  });
  // SUBMITTING NEWLY CREATED TWEET
  const $createT2 = $('#createTweet2');
  

  $createT2.on("click",async function(){
  // try {
    const $messageFinal = $("#newTexts");
    // console.log($messageFinal.val());
      const results = await axios({
          method: 'post',
          url: 'https://comp426-1fa20.cs.unc.edu/a09/tweets',
          withCredentials: true,
          data: {
                body: $messageFinal.val()
              
              },
      });
      // console.log("working?");
      location.reload();
  // }
  // catch (err){
  //     console.log(err);
  // }


  });


  //GET TWEETS BUTTON
    const $ids = $('#ids1');
    //$ids.on("click",async 
    (async function(){
      console.log("hi");


    //MAKING THE TWITTER PAGE TABLE FOR EACH USER
    // this renders once u press the "GET TWEETS" button
      await axios({
        method: 'get',
        url: 'https://comp426-1fa20.cs.unc.edu/a09/tweets',
        withCredentials: true,  
       }).then((result) => {
       console.log(result);
       let arr=[];

        $("#recentTweets").append("<tr>");
        $("#recentTweets").append("<td> Author </td>");
        $("#recentTweets").append("<td> Body </td>");
        $("#recentTweets").append("<td> Num of Likes </td>");
        $("#recentTweets").append("<td> Num of Retweets </td>");
        $("#recentTweets").append("<td> Has the Current User Liked the Tweet? </td>");
        $("#recentTweets").append("<td> Like/Unlike </td>");
        // $("#recentTweets").append("<td> Unlike Button </td>");
        $("#recentTweets").append("<td> Reply </td>");
        $("#recentTweets").append("<td>  </td>");
        $("#recentTweets").append("<td> Retweet</td>");
        $("#recentTweets").append("<td> </td>");
        $("#recentTweets").append("<td> Reply Count </td>");
        $("#recentTweets").append("<td> </td>");
        $("#recentTweets").append("<td> Edit </td>");
        $("#recentTweets").append("<td> Delete</td>");


       $("#recentTweets").append("</tr>");
       let temp=50;
       if(result.data.length < 50){
        temp=result.data.length;
       }
       for(let i=0;i<temp;i++){
            arr[i]=result.data[i];
            $("#recentTweets").append("<tr>");
            $("#recentTweets").append("<td>"+arr[i].author+"</td>");
            $("#recentTweets").append("<td>"+arr[i].body+"</td>");
            $("#recentTweets").append("<td>"+arr[i].likeCount+"</td>");
            $("#recentTweets").append("<td>"+arr[i].retweetCount+"</td>");
            $("#recentTweets").append("<td>"+arr[i].isLiked+"</td>");
            $("#recentTweets").append("<td><button id=like"+i+"> Like </button> </td>");
            // $("#recentTweets").append("<td><button id=unlike"+i+"> Unlike </button> </td>");
             $("#recentTweets").append("<td><form> <input type=text id=text"+i+"></form></td>");
             $("#recentTweets").append("<td><button id=reply"+i+"> Reply </button></td>");
             $("#recentTweets").append("<td><form> <input type=text id=retweetText"+i+"></form></td>");
            $("#recentTweets").append("<td><button id=retweet"+i+"> Retweet </button></td>");
            $("#recentTweets").append("<td>"+arr[i].replyCount+"</td>");
            //$("#recentTweets").append("<td>"+" <span> <p>Author Name: "+ arr[i].author + " </p> </span>"+ " <span> <p>Body of Message: "+ arr[i].body+ " </p></span>" + " <span> <p> Like Count: "+ arr[i].likeCount +"</p> </span>"+ "<span> <br> <p> Retweet Count: "+arr[i].retweetCount+"</p> </br></span>" + " <span><p> Has the current user liked the tweet?: "+arr[i].isLiked+ "</p></span>"+"</td>");
            $("#recentTweets").append("</tr>");
            //console.log("<li>"&arr[i].id&"</li>");

            if(arr[i].isMine == true){
              $("#recentTweets").append("<td id=editSpot"+i+"></td>");
              $("#recentTweets").append("<td> <button id=edit"+i+"> Edit </button></td>");
              $("#recentTweets").append("<td> <button id=delete"+i+"> Delete </button></td>");
            }

            //like & unlike button
            $("#like"+i).on("click", async function(){
              // console.log(arr[i].isLiked);
              try{
                if(arr[i].isLiked == true){

                  const result = await axios({
                    method: 'put',
                    url: "https://comp426-1fa20.cs.unc.edu/a09/tweets/"+arr[i].id+"/unlike",
                    withCredentials: true,
                  });
                  location.reload();
                 
                } else{
                  const result = await axios({
                    method: 'put',
                    url: "https://comp426-1fa20.cs.unc.edu/a09/tweets/"+arr[i].id+"/like",
                    withCredentials: true,
                  });
                  // console.log(result);
                  location.reload();

                }
              }
              catch(err){
                console.log(err);
              }

            })

            // //unlike button
            // $("#unlike"+i).on("click", async function(){

            // })

            //REPLY BUTTON
            const $messageReply = $("#text"+i);

            $("#reply"+i).on("click", async function(){
             
              try{
                const result = await axios({
                  method: 'post',
                  url: 'https://comp426-1fa20.cs.unc.edu/a09/tweets',
                  withCredentials: true,
                  data: {
                    "type": "reply",
                    "parent": arr[i].id,
                    "body": $messageReply.val()
                  },
                });
                // console.log("hi");
                location.reload();
              }
              catch (err){
                console.log(err);
            }
            })


            // Retweet button
            const $messageRetweet = $("#retweetText"+i);
            $("#retweet"+i).on("click", async function(){

              try{
                const result = await axios({
                  method: 'post',
                  url: 'https://comp426-1fa20.cs.unc.edu/a09/tweets',
                  withCredentials: true,
                  data: {
                    "type": "retweet",
                    "parent": arr[i].id,
                    "body": $messageRetweet.val()
                  },
                });
                // console.log("BYEEEEE");
                location.reload();
              }
              catch (err){
                console.log(err);
            }

            }) 


            // delete button
            $("#delete"+i).on("click", async function(){

              try{
                const result = await axios({
                  method: 'delete',
                  url: "https://comp426-1fa20.cs.unc.edu/a09/tweets/"+arr[i].id,
                  withCredentials: true,
                });
                location.reload();
              } catch(error){
                console.log(error);
              }

            })


            //edit button
            const $messageEdit = $("#editText"+i);
            $("#edit"+i).on("click", async function(){
              try{
                // prepopulate text box 
                if(arr[i].isMine == true & $("#editText"+i).length==0 ){
                  console.log();
                  $("#editSpot"+i).append("<textarea id=editText"+i+">"+arr[i].body+"</textarea>");
                  $("#editSpot"+i).append("<button id=sub"+i+"> Submit </button>")
                  $("#sub"+i).on("click",async function(){
                    const result = await axios({
                      method: 'put',
                      url: 'https://comp426-1fa20.cs.unc.edu/a09/tweets/'+arr[i].id,
                      withCredentials: true,
                      data: {
                        body: $("#editText"+i).val()
                      },
                    });
                    location.reload();
                  })
                }
                // edit text box
               
                // console.log("WORKED");
                
                
              } catch (err){
                console.log(err);
              }

            })





       }

       
      });
    })();



    // SUBMIT BUTTON
    const $ids2 = $('#tweetBox2');
    const $message = $('#tweetBox');
    $ids2.on("click",async function(){

    // try {
    //     const result2 = await axios({
    //         method: 'post',
    //         url: 'https://comp426-1fa20.cs.unc.edu/a09/tweets',
    //         withCredentials: true,
    //         data: {
    //               body: $message.val()
    //             // body: "Great shot, kid, that was two in a million." $message.val()
    //             },
    //     });
    //     console.log(result2.data.body);
    // }
    // catch (err){
    //     console.log(err);
    // }


  });



  // create a new tweet button


});

