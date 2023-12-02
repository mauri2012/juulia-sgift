  var isAudioPlaying = false;

  function toggleAudio() {
    var audioElement = document.getElementById('christmasAudio');
    var noteElement = document.getElementById('musicalNote');

    if (isAudioPlaying) {
      // Pause the audio
      audioElement.pause();
      // Show the musical note without strikethrough
      noteElement.style.textDecoration = 'none';
    } else {
      // Start or resume the audio
      audioElement.play();
      // Show the musical note with strikethrough
      
      noteElement.style.textDecoration = 'line-through';
    }

    // Toggle the audio playback state
    isAudioPlaying = !isAudioPlaying;
  }
