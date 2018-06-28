/*
 * (C) Leon Berenschot Wendbaar.nl 2014
 */
{
    var previousEndTime = 0;
    var effectsGroup = app.project.activeItem.selectedLayers;
    for (var i = 0; i < effectsGroup.length; i++){
        effectsGroup[i].startTime = previousEndTime;
        previousEndTime = effectsGroup[i].outPoint;
    }
}
