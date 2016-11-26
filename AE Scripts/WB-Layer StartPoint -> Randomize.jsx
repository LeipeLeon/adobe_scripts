/*
 * (C) Leon Berenschot Wendbaar.nl 2014
 */

{
    var effectsGroup = app.project.activeItem.selectedLayers;
    var totalCompositionDuration = app.project.activeItem.duration;
    for (var i = 0; i < effectsGroup.length; i++){
        var mySelectedLayer = effectsGroup[i];
        var layerDuration = effectsGroup[i] .outPoint - effectsGroup[i] .inPoint
        var newPosition = generateRandomNumber() * (totalCompositionDuration - layerDuration);
        effectsGroup[i] .startTime = newPosition; //Math.floor(Math.random()*(time))
    }

}
