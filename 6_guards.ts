export {};
function strip(x: string | number) {
  if (typeof x === "number") {
    return x.toFixed(2);
  } else return x.trim();
}

class MyResponse {
  header = "response Header";
  result = "response result";
}
class MyError {
  header = "error Header";
  message = "error message";
}

function handle(res: MyError | MyResponse) {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result,
    };
  } else {
    return {
      info: res.header + res.message,
    };
  }
}

//========
type AlertType = "success" | "dander" | "warning";

function setAlertType(type: AlertType) {
  //......
}

setAlertType("success");
setAlertType("warning");
// setAlertType('def')
