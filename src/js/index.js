import $ from 'jquery';
import exampleModule from './module';
import './../scss/styles.scss';

$(function () {
  console.log($('#element').text());
  exampleModule();
});
