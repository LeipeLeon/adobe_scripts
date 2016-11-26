/*
 * (C) Leon Berenschot Wendbaar.nl 2016
 */

{
    var effectsGroup = app.project.activeItem.selectedLayers;

    for (var i = 0; i < effectsGroup.length; i++){
        var newRotation = Math.floor(generateRandomNumber() * 360);
        effectsGroup[i].rotation.setValue(newRotation);
    }
}
