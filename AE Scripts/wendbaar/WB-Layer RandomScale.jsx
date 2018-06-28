
/*
 * (C) Leon Berenschot Wendbaar.nl 2016
 */

{
  var effectsGroup = app.project.activeItem.selectedLayers;
  var currentTime = app.project.activeItem.time;

  for (var i = 0; i < effectsGroup.length; i++) {
    var newScale = Math.floor(generateRandomNumber() * 100 + 10);
    var layerScale = effectsGroup[i].scale.value;
    layerScale[0] = newScale;
    layerScale[1] = newScale;
    //        effectsGroup[i].scale.setValue(layerScale);
    effectsGroup[i].scale.setValueAtTime(currentTime, layerScale);
  }
}
