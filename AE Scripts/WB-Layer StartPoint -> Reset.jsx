/*
 * (C) Leon Berenschot Wendbaar.nl 2014
 */
{
    var effectsGroup = app.project.activeItem.selectedLayers;
    for (var i = 0; i < effectsGroup.length; i++){
        effectsGroup[i].startTime = 0;
    }
}
