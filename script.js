//document.getElementById('one').scrollTo({ behavior: 'smooth', top: 0 })
//$('#go').click(function () {
setTimeout(function () {
  element = document.getElementById('two')
  element.scrollIntoView()
}, 2000)


setTimeout(function () {
  element = document.getElementById('three')
  element.scrollIntoView()
}, 4000)

setTimeout(function () {
  element = document.getElementById('four')
  element.scrollIntoView()
}, 6000)
//})
//  var container = $('section')

//  // Scrolls to paragraph 1
//  function scrollSection2() {
//    var scrollTo = $('#two')

//    // Calculating new position
//    // of scrollbar
//    var position = scrollTo.offset().top - container.offset().top + container.scrollTop()

//    // Animating scrolling effect
//    container.animate({
//      scrollTop: position
//    })
//  }

//  // Scrolls to paragraph 2
//  function scrollSection3() {
//    var scrollTo = $('#three')

//    // Calculating new position
//    // of scrollbar
//    var position = scrollTo.offset().top - container.offset().top + container.scrollTop()

//    // Animating scrolling effect
//    container.animate({
//      scrollTop: position
//    })
//  }
