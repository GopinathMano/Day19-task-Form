const signUp = (e) => {
  let formData = JSON.parse(localStorage.getItem("formData")) || [];
  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) =>
        data.fname.toLowerCase() ==
          document.getElementById("fname").value.toLowerCase() &&
        data.lname.toLowerCase() ==
          document.getElementById("lname").value.toLowerCase()
    );
  if (!exist) {
    formData.push({
      fname: document.getElementById("fname").value,
      lname: document.getElementById("lname").value,
      address: document.getElementById("address").value,
      pincode: document.getElementById("pincode").value,
      gender: document.getElementById("gender").value,
      food: document.getElementById("food").value,
      state: document.getElementById("state").value,
      country: document.getElementById("country").value,
    });
    localStorage.setItem("formData", JSON.stringify(formData));
    // console.log(localStorage.getItem("formData"));
    dispData();
    document.querySelector("form").reset();
    document.getElementById("fname").focus();
  }
  e.preventDefault();
};
function dispData() {
  console.log(localStorage.getItem("formData"));
  if (localStorage.getItem("formData")) {
    var output = document.querySelector("tbody");
    output.innerHTML = " ";
    JSON.parse(localStorage.getItem("formData")).forEach((data) => {
      output.innerHTML += `
                      <tr>
<td>${data.fname}</td>
<td>${data.lname}</td>
<td>${data.address}</td>
<td>${data.pincode}</td>
<td>${data.gender}</td>
<td>${data.food}</td>
<td>${data.state}</td>
<td>${data.country}</td>
</tr>

              `;
    });
  }
}
dispData();
