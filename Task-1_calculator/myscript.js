let result = document.getElementById("result");

    function appendexpr(val) {
      result.value += val;
    }
    function delexpr() {
        result.value=result.value.substring(0,result.value.length-1);
      }
    function clearResult() {
      result.value = "";
    }

    function calculateresult() {
      try {
        result.value = eval(result.value);
      } catch (error) {
        result.value = "Error...!";
      }
    }
