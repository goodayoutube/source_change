function getSource(){
    var o_src_full = document.getElementById("original_source").value;
    var o_src_youtube = "https://www.youtube.com/watch?v=";
    var m_src_youtube = "https://youtu.be";


    if(o_src_full.includes(o_src_youtube)) {            //for desktop
      var o_src_short = o_src_full.replace(o_src_youtube,"");
      sourceChange(o_src_short);

    }else if (o_src_full.includes(m_src_youtube)) {     //for mobile
      var o_src_short = o_src_full.replace(m_src_youtube,"");
      sourceChange(o_src_short);

    }else {
      alert("올바른 주소가 아닙니다.")
    }
}

function sourceChange(o_src_short){

  var r_src_min = document.getElementById("min").value;
  var r_src_sec = document.getElementById("sec").value;
  var r_src_time = (r_src_min * 60) + (r_src_sec*1);

  var front = '<div style="position:relative;padding-bottom:56.25%;height:0px"><iframe type="text/html" allowtransparency="true" frameborder="0" width="100%" height="100%" src="http://www.youtube-nocookie.com/embed/';
  var middle = '?controls=1&amp;rel=0&amp;modestbranding=1&amp;showinfo=0&amp;autohide=1&amp;start=';
  var end = '"style="position: absolute; top: 0px; left: 0px;"></iframe></div><br><font size="3"><p>내용입력</p></font>';
  var r_src_full = front+o_src_short+middle+r_src_time+end;
  var tempElem = document.createElement('textarea');

  tempElem.value = r_src_full;                //create temporary element
  document.body.appendChild(tempElem);
  tempElem.select();
  document.execCommand("copy");
  document.body.removeChild(tempElem);        //remove temporary element

  document.getElementById("result_source").value = r_src_full;

  setTimeout(function() {alert("클립보드에 복사되었습니다.");},100); //timeout for 100 msec
}
