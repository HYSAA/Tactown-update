function expandImage(img) {
    var expandedImage = document.getElementById("expanded-image");
    expandedImage.src = img.src;
    var expandedImageOverlay = document.getElementById("expanded-image-overlay");
    expandedImageOverlay.style.display = "block";
  }
  
  function shrinkImage() {
    var expandedImageOverlay = document.getElementById("expanded-image-overlay");
    expandedImageOverlay.style.display = "none";
  }
  