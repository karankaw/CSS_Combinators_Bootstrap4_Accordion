function toggle(){
  // console.log($("#headingOneBtn"))
  // console.log($(".accordion"))
console.log($("button.btn.btn-link.invisible"))

  console.log($("div.accordion button:first-child"))
  var btn = $("div.accordion button:first-of-type").eq(1)
  var visibility = btn.hasClass('visible')
  console.log(visibility)

  btn.removeClass('visible')
  btn.removeClass('invisible')

  var btnClass = visibility ? 'invisible' : 'visible' 
  console.log(`${btnClass} Applied`)
  btn.addClass(btnClass)
  
}