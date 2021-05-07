
 export function scrollTo(element, to, duration) {
  
  if (duration <= 0) return;
  // 目标-当前距离的卷曲的top
  var difference = to - element.scrollTop;
  var perTick = difference / duration*10;
  // console.log(duration)
  setTimeout(function() {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) return;
      scrollTo(element, to, duration - 7);
  }, 10);
}