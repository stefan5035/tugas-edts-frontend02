function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  
  // Hide all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  // Remove background color from all tab links
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  
  // Show the selected tab content and apply the background color to the clicked tab link
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Set the default open tab
document.getElementById("defaultOpen").click();
