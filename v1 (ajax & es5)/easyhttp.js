
function Easyhttp() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request

Easyhttp.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);

  this.http.send();

  const that = this;

  this.http.onload = function () {
    if (that.http.status === 200) { /* if we used 'this' here it will represent the function not the Easyhttp object */
      callback(null, that.http.responseText);
    } else {
      callback('Error: ' + that.http.status);
    }
  }
}





// Make an HTTP POST Request

Easyhttp.prototype.post = function (url, data, callback) {
  this.http.open('POST', url, true);

  this.http.setRequestHeader('content-type', 'application / json');

  this.http.send(JSON.stringify(data));

  const that = this;

  this.http.onload = function () {
    if (that.http.status === 200) {
      callback(null, that.http.responseText); /* this will return the new post added */
    } else {
      callback('Error: ' + that.http.status);
    }
  }
}




// Make an HTTP PUT Request

Easyhttp.prototype.put = function (url, data, callback) {
  this.http.open('PUT', url, true);

  this.http.setRequestHeader('content-type', 'application / json');

  this.http.send(JSON.stringify(data));

  const that = this;

  this.http.onload = function () {
    if (that.http.status === 200) {
      callback(null, that.http.responseText); /* this will return the new post updated */
    } else {
      callback('Error: ' + that.http.status);
    }
  }
}




// Make an HTTP DELETE Request

Easyhttp.prototype.delete = function (url, callback) {
  this.http.open('DELETE', url, true);

  this.http.send();

  const that = this;

  this.http.onload = function () {
    if (that.http.status === 200) {
      callback(null, that.http.responseText);
    } else {
      callback('Error: ' + that.http.status);
    }
  }
}