var axios = require('axios');
axios.get('http://vue.api.comcto.com/api/password1.php')
    .then(function (response) {
        console.log(response.data);
    })