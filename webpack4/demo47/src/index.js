import $ from 'jquery';
import _ from 'lodash';

$('.red').click(() => {
  console.log(_.chunk('123456789', 3));
});
