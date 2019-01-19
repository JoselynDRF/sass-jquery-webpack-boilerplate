import $ from 'jquery';
import exampleTemplate from './../../templates/example.hbs';

function example() {
  const text = 'Hello World!';

  $('#element').append(exampleTemplate({
    title: text
  }));
}

export default example;
