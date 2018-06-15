
import APIKey from './ApiKeys.js';

function PostMsg(Msg)
{ 
        //https://github.com/ykzts/node-xmlhttprequest
        var XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest;
        var client = new XMLHttpRequest();

        var data = JSON.stringify({
            "message": Msg
          });

        client.open('POST', APIKey.PureCloudKey);
        client.responseType = 'json';
        client.addEventListener('load', function() {
          var data = client.response;
          if (data.meta.status !== 200) {
            return;
          }
          console.log(data.response.blog.title);
        }, false);
        client.send(data)


}

export default PostMsg;