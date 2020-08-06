var price, crust_price, topping_price;
let total = 0;
function Getart(name, size, crust, topping, total) {
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}


// proceed button
$(document).ready(function () {
  // $("button.proceed").click(function(){
  //   $("button.proceed").hide();
  //   $("#information").hide();
  //   $("div.choise").slideDown(1000);
  // });
  $("button.proceed").click(function (event) {
    let pname = $(".name option:selected").val();
    let psize = $("#size option:selected").val();
    let pcrust = $("#crust option:selected").val();
    let ptopping = [];
    $.each($("input[name='toppings']:checked"), function () {
      ptopping.push($(this).val());
    });
    console.log(ptopping.join(", "));

    switch (psize) {
      case "0":
        price = 0;
        break;
      case "art1":
        price = 7000;
        console.log(price);
        break;
      case "art2":
        price = 8000;
        console.log(price);
        break;
      case "art3":
        price = 7000;
        console.log(price);
        break;
      case "art4":
        price = 6000;
        console.log(price);
        break;
      case "art5":
        price = 10000;
        console.log(price);
        break;
      case "art6":
        price = 5000;
        console.log(price);
        break;
      case "art7":
        price = 6500;
        console.log(price);
        break;
      case "art8":
        price = 4000;
        console.log(price);
        break;
      case "art9":
        price = 5000;
        console.log(price);
        break;
      case "art10":
        price = 8000;
        console.log(price);
        break;
      case "art11":
        price = 5000;
        console.log(price);
        break;
      case "art12":
        price = 6000;
        console.log(price);
        break;
      case "art13":
        price = 8000;
        console.log(price);
        break;
      case "art14":
        price = 8000;
        console.log(price);
        break;
      case "art15":
        price = 6000;
        console.log(price);
        break;
      case "art16":
        price = 8000;
        console.log(price);
        break;
      case "art17":
        price = 7000;
        console.log(price);
        break;
      case "art18":
        price = 8000;
        console.log(price);
        break;
      case "art19":
        price = 9000;
        console.log(price);
        break;
      case "art20":
        price = 8000;
        console.log(price);
      default:
        console.log("error");
    }
    switch (pcrust) {
      case "0":
        crust_price = 0;
        break;
      case "Nairobi cbd":
        crust_price = 500;
        break;
      case "Other places in Nairobi":
        crust_price = 1000;
        break;
      case "Outside Nairobi":
        crust_price = 1500;
        break;
      default:
        console.log("No price");
    }
    let topping_value = ptopping.length * 50;
    console.log("toppins value" + topping_value);

    if ((psize == "0") && (pcrust == "0")) {
      console.log("nothing selected");
      $("button.proceed").show();
      $("#information").show();
      $("div.choise").hide();
      alert("Please select art size and crust");
    }
    else {
      $("button.proceed").hide();
      $("#information").hide();
      $("div.choise").slideDown(1000);
    }

    total = price + crust_price + topping_value;
    console.log(total);
    let checkoutTotal = 0;
    checkoutTotal = checkoutTotal + total;

    $("#artname").html($(".name option:selected").val());
    $("#artsize").html($("#size option:selected").val());
    $("#artcrust").html($("#crust option:selected").val());
    $("#arttopping").html(ptopping.join(", "));
    $("#totals").html(total);

    // Add art button
    $("button.addart").click(function () {
      let pname = $(".name option:selected").val();
      let psize = $("#size option:selected").val();
      let pcrust = $("#crust option:selected").val();
      let ptopping = [];
      $.each($("input[name='toppings']:checked"), function () {
        ptopping.push($(this).val());
      });
      console.log(ptopping.join(", "));
      switch (psize) {
        case "0":
          price = 0;
          break;
        case "art1":
          price = 7000;
          console.log(price);
          break;
        case "art2":
          price = 8000;
          console.log("The price is " + price);
          break;
        case "art3":
          price = 7000;
          console.log("The price is " + price);
          break;
        case "art4":
          price = 6000;
          console.log("The price is " + price);
          break;
        case "art5":
          price = 10000;
          console.log("The price is " + price);
          break;
        case "art6":
          price = 5000;
          console.log("The price is " + price);
          break;
        case "art7":
          price = 6500;
          console.log("The price is " + price);
          break;
        case "art8":
          price = 4000;
          console.log("The price is " + price);
          break;
        case "art9":
          price = 4000;
          console.log("The price is " + price);
          break;
        case "art10":
          price = 8000;
          console.log("The price is " + price);
          break;
        case "art11":
          price = 5000;
          console.log(price);
          break;
        case "art12":
          price = 6000;
          console.log(price);
          break;
        case "art13":
          price = 8000;
          console.log(price);
          break;
        case "art14":
          price = 8000;
          console.log(price);
          break;
        case "art15":
          price = 6000;
          console.log(price);
          break;
        case "art16":
          price = 8000;
          console.log(price);
          break;
        case "art17":
          price = 7000;
          console.log(price);
          break;
        case "art18":
          price = 8000;
          console.log(price);
          break;
        case "art19":
          price = 9000;
          console.log(price);
          break;
        case "art20":
          price = 8000;
          console.log(price);
        default:
          console.log("error");
      }
      switch (pcrust) {
        case "0":
          crust_price = 0;
          break;
        case "Nairobi cbd":
          crust_price = 500;
          break;
        case "Other places in Nairobi":
          crust_price = 1000;
          break;
        case "Outside Nairobi":
          crust_price = 1500;
          break;
        default:
          console.log("No price");
      }
      let topping_value = ptopping.length * 50;
      console.log("toppins value" + topping_value);
      total = price + crust_price + topping_value;
      console.log(total);

      checkoutTotal = checkoutTotal + total;
      console.log(checkoutTotal);
      // constractor function
      var newOrder = new Getart(pname, psize, pcrust, ptopping, total);

      $("#ordersmade").append('<tr><td id="artname">' + newOrder.name + '</td><td id="artsize">' + newOrder.size + '</td><td id="artcrust">' + newOrder.crust + '</td><td id="arttopping">' + newOrder.topping + '</td><td id="totals">' + newOrder.total + '</td></tr>');
      console.log(newOrder);



    });
    // Checkout button
    $("button#checkout").click(function () {
      $("button#checkout").hide();
      $("button.addart").hide();
      $("button.deliver").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("Your total bills is sh. " + checkoutTotal);
      $("#arttotal").append("Your bill is sh. " + checkoutTotal);
    });

    // home delivery button
    $("button.deliver").click(function () {
      $(".arttable").hide();
      $(".choise h2").hide();
      $(".delivery").slideDown(1000);
      $("#addedprice").hide();
      $("button.deliver").hide();
      $("#arttotal").hide();
      let deliceryamount = checkoutTotal + 150;
      console.log("You will pay sh. " + deliceryamount + " on delivery");
      $("#totalbill").append("Your bill plus delivery fee is: " + deliceryamount);
    });

    // when one clicks place order button
    $("button#final-order").click(function (event) {
      event.preventDefault();

      $("#arttotal").hide();
      $(".delivery").hide();
      $("button#final-order").hide();
      let deliceryamount = checkoutTotal + 150;
      console.log("Final Bill is: " + deliceryamount);
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#location").val() != "") {

        $("#finallmessage").append(person + ", We have recieved your order and it will be delivered to you at " + location + ". Prepare sh. " + deliceryamount);
        $("#totalbill").hide();
        $("#finallmessage").slideDown(1200);
      }
      else {
        alert("Please fill in the details for delivery!");
        $(".delivery").show();
        $("button#final-order").show();
      }
    });
    event.preventDefault();
  });
});