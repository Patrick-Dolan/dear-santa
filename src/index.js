import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(() => {
  $("#test").on("click", () => {
    alert("Clicked!");
  })
});